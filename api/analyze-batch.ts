// api/analyze-batch.ts
//
// Vercel serverless function. Holds GEMINI_API_KEY server-side and is the
// only place that calls the Gemini API -- the browser never sees the key.
// The client (services/geminiService.ts) POSTs a small batch of items plus
// a codebookType; this function builds the codebook-specific system
// instruction and enum-constrained schema, calls Gemini, and returns the
// parsed JSON straight through.
//
// Set GEMINI_API_KEY in your Vercel project's Environment Variables (and in
// .env.local for `vercel dev`). It is read here via process.env and is
// never bundled into client-side code.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import { CODEBOOK_REGISTRY, CodebookType, buildSystemInstruction, getCodebook } from '../codebooks/index.js';
import { buildBatchResponseSchema } from '../codebooks/geminiSchema.js';

// Vercel's default Node.js Function timeout is 10s, which is too tight for
// a Gemini call with thinking enabled against a ~10K-token system
// instruction -- a timed-out invocation is killed by the platform before
// this file's own try/catch ever runs, so the client sees a bare 500/504
// with no JSON body (no `error` field) rather than one of the specific
// error messages below. 60s is the max allowed on Vercel's Hobby plan and
// leaves real headroom on Pro.
export const maxDuration = 60;

// Model configuration ----------------------------------------------------
// Overridable via the GEMINI_MODEL Vercel environment variable, so a model
// deprecation is a one-line env var edit + redeploy instead of a code
// change + PR + review cycle -- exactly the class of incident that broke
// this endpoint once already (see README's model section for the story).
//
// Deliberately NOT a Google "-latest" alias: Google's own docs say that
// alias can silently point to a preview or experimental release rather
// than the newest *stable* one, and can change behavior with as little as
// ~2 weeks' notice -- it doesn't remove the deprecation risk, it just
// removes your chance to review a behavior change before it reaches
// production. Pin an explicit version, update it deliberately.
//
// This is the one model this codebook has been empirically validated
// against with a live batch run (see validation/live-run-2026-09-14.csv),
// and it's still listed as a known model in the installed @google/genai
// SDK's own type definitions (node_modules/@google/genai, check
// `Model_2` in dist/genai.d.ts if you're re-verifying this later).
// Several web sources claimed newer "gemini-3.x-flash" generations exist
// and that this one had already been retired -- none of those names
// appear in the SDK's own model list, which is a strong signal those
// sources were unreliable (a known problem with anything model-release-
// related on the open web). Don't take this constant's correctness on
// faith either, by the time you're reading this -- verify against
// https://ai.google.dev/gemini-api/docs/models or the AI Studio model
// picker directly before assuming it's still current.
const DEFAULT_MODEL = 'gemini-3-flash-preview';
// Used only if the primary model call fails with a model-unavailable-style
// error (see isModelUnavailableError below). Deliberately a different,
// non-preview *stable* generation (also confirmed in the SDK's model
// list) rather than another preview build -- the point of a fallback is
// to be more durable than the primary, not just a second guess at the
// same risk profile.
const FALLBACK_MODEL = 'gemini-2.5-flash';
const MODEL = process.env.GEMINI_MODEL || DEFAULT_MODEL;

const MAX_ITEMS_PER_REQUEST = 25; // generous ceiling above the client's chunk size (5)

// Gemini returns 404 for a model ID that doesn't exist or isn't available
// to this API key/project -- the shape a retired model takes. Only this
// specific signal triggers a fallback retry; other failures (bad request,
// rate limit, content issues) retrying against a different model wouldn't
// fix, and blindly retrying every error would mask real problems.
export const isModelUnavailableError = (e: any): boolean =>
  e?.status === 404 || /model.*not found|not supported for this api|is not found/i.test(String(e?.message ?? ''));

interface AnalyzeRequestItem {
  row_id: string;
  outcome_text: string;
  group?: string;
}

const isCodebookType = (value: unknown): value is CodebookType =>
  typeof value === 'string' && Object.prototype.hasOwnProperty.call(CODEBOOK_REGISTRY, value);

const isValidItem = (value: unknown): value is AnalyzeRequestItem =>
  !!value &&
  typeof value === 'object' &&
  typeof (value as any).row_id === 'string' &&
  typeof (value as any).outcome_text === 'string';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Set it in your Vercel project environment variables.' });
    return;
  }

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : req.body;
  const { items, codebookType } = body ?? {};

  if (!isCodebookType(codebookType)) {
    res.status(400).json({ error: `Unknown or missing codebookType. Expected one of: ${Object.keys(CODEBOOK_REGISTRY).join(', ')}` });
    return;
  }

  if (!Array.isArray(items) || items.length === 0 || !items.every(isValidItem)) {
    res.status(400).json({ error: 'Request must include a non-empty "items" array of { row_id: string, outcome_text: string }.' });
    return;
  }

  if (items.length > MAX_ITEMS_PER_REQUEST) {
    res.status(400).json({ error: `Too many items in one request (max ${MAX_ITEMS_PER_REQUEST}).` });
    return;
  }

  // Everything below -- including constructing the SDK client and building
  // the codebook-derived request pieces -- is deliberately inside this one
  // try/catch. A prior version left getCodebook()/new GoogleGenAI() outside
  // it: if either throws (e.g. an SDK import that doesn't resolve cleanly
  // in Vercel's bundled function environment), that's an uncaught exception
  // that crashes the whole invocation before any response is sent -- the
  // client sees a bare platform-level 500 (Vercel: FUNCTION_INVOCATION_FAILED)
  // with no JSON body, instead of one of the specific error messages this
  // file is supposed to always return. Wrapping it all here guarantees a
  // real error message reaches both the client and this function's logs no
  // matter which line fails.
  try {
    const codebook = getCodebook(codebookType);
    const ai = new GoogleGenAI({ apiKey });

    const contents = `Analyze these ${items.length} items.\nInput Data:\n${JSON.stringify(items, null, 2)}`;
    const config = {
      systemInstruction: buildSystemInstruction(codebook),
      responseMimeType: 'application/json',
      // Forces the model to reason before answering; 1024 tokens is
      // sufficient for a batch of ~5 items.
      thinkingConfig: { thinkingBudget: 1024 },
      responseSchema: buildBatchResponseSchema(codebook),
    };

    let response;
    let modelUsed = MODEL;
    try {
      response = await ai.models.generateContent({ model: MODEL, contents, config });
    } catch (primaryError: any) {
      if (MODEL === FALLBACK_MODEL || !isModelUnavailableError(primaryError)) {
        throw primaryError;
      }
      // Visible in Vercel's Function logs -- the signal that it's time to
      // deliberately update GEMINI_MODEL/DEFAULT_MODEL rather than keep
      // running on the fallback indefinitely.
      console.error(`Primary model "${MODEL}" unavailable, retrying with fallback "${FALLBACK_MODEL}":`, primaryError);
      modelUsed = FALLBACK_MODEL;
      response = await ai.models.generateContent({ model: FALLBACK_MODEL, contents, config });
    }

    const text = response.text;
    if (!text) {
      res.status(502).json({ error: 'Gemini returned an empty response.' });
      return;
    }

    if (modelUsed !== MODEL) {
      res.setHeader('X-Gemini-Model-Used', modelUsed);
    }

    const parsed = JSON.parse(text);
    res.status(200).json(parsed);
  } catch (e: any) {
    // Logged server-side (visible in Vercel's Function logs) in addition to
    // being returned to the client -- the client-facing message is what a
    // user sees in the batch-progress log, but the full stack is what
    // actually diagnoses a bug like the one this comment describes.
    console.error('analyze-batch failed:', e);
    res.status(502).json({ error: e?.message || 'Gemini request failed.' });
  }
}

function safeJsonParse(raw: string): any {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
