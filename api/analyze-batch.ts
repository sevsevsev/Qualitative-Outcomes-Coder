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

const MODEL = 'gemini-3-flash-preview';
const MAX_ITEMS_PER_REQUEST = 25; // generous ceiling above the client's chunk size (5)

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

    const response = await ai.models.generateContent({
      model: MODEL,
      contents: `Analyze these ${items.length} items.\nInput Data:\n${JSON.stringify(items, null, 2)}`,
      config: {
        systemInstruction: buildSystemInstruction(codebook),
        responseMimeType: 'application/json',
        // Forces the model to reason before answering; 1024 tokens is
        // sufficient for a batch of ~5 items.
        thinkingConfig: { thinkingBudget: 1024 },
        responseSchema: buildBatchResponseSchema(codebook),
      },
    });

    const text = response.text;
    if (!text) {
      res.status(502).json({ error: 'Gemini returned an empty response.' });
      return;
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
