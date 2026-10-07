// api/_lib/gemini.ts
//
// The one place that calls Gemini. Used by api/analyze-batch.ts (the coder)
// and api/try-code.ts (single statements on the public explorer site), so
// both send the same system instruction, schema and model settings, and by
// api/extract-results.ts (quotes the results in a description or mission).

import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';
import { buildSystemInstruction, Codebook } from '../../codebooks/index.js';
import { buildBatchResponseSchema } from '../../codebooks/geminiSchema.js';
import { EXTRACTION_INSTRUCTION } from '../../services/resultExtraction.js';

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
// Explicitly requested (2026-09-15) over the previously-pinned
// gemini-3-flash-preview, which is the one model this codebook has actual
// live validation data for (see validation/live-run-2026-09-14.csv) --
// gemini-3.8-flash does not. It wasn't independently verified against
// Google's own docs/model list before switching (ai.google.dev was
// unreachable from the environment that made this change); if it turns
// out to be wrong, GEMINI_MODEL can override this with no code change,
// and a 404 here automatically falls back to FALLBACK_MODEL below. The
// installed @google/genai SDK's ThinkingConfig type (node_modules,
// dist/genai.d.ts) supports `thinkingLevel`, which Google asked projects to
// use instead of the deprecated `thinkingBudget` (notice received
// 2026-10-06; ai.google.dev/gemini-api/docs/thinking lists low, medium and
// high for both gemini-3.8-flash and gemini-2.5-flash). Sending both in one
// request is a 400. Temperature, top_p and top_k are also deprecated and
// are never sent: the model's defaults apply.
export const DEFAULT_MODEL = 'gemini-3.8-flash';
// Used only if the primary model call fails with a model-unavailable-style
// error (see isModelUnavailableError below). Deliberately a different,
// non-preview *stable* generation (also confirmed in the SDK's model
// list) rather than another preview build -- the point of a fallback is
// to be more durable than the primary, not just a second guess at the
// same risk profile.
export const FALLBACK_MODEL = 'gemini-2.5-flash';
export const MODEL = process.env.GEMINI_MODEL || DEFAULT_MODEL;

// Makes the model reason before answering. LOW replaces the old
// `thinkingBudget: 1024` (a small budget for a batch of ~5 items); the
// model default is MEDIUM. Shared by the coder, the explorer's Try it, the
// result extraction step and scripts/codebook-eval.ts.
export const THINKING_CONFIG = { thinkingLevel: ThinkingLevel.LOW };

// Gemini returns 404 for a model ID that doesn't exist or isn't available
// to this API key/project -- the shape a retired model takes. Only this
// specific signal triggers a fallback retry; other failures (bad request,
// rate limit, content issues) retrying against a different model wouldn't
// fix, and blindly retrying every error would mask real problems.
export const isModelUnavailableError = (e: any): boolean =>
  e?.status === 404 || /model.*not found|not supported for this api|is not found/i.test(String(e?.message ?? ''));

export interface CodingRequestItem {
  row_id: string;
  outcome_text: string;
  group?: string;
}

/**
 * Codes `items` against `codebook`. Returns the parsed JSON response (shape:
 * codebooks/geminiSchema.ts) and the model that produced it, or throws.
 */
export const codeWithGemini = async (
  apiKey: string,
  codebook: Codebook,
  items: CodingRequestItem[],
): Promise<{ parsed: any; modelUsed: string }> => {
  const ai = new GoogleGenAI({ apiKey });

  const contents = `Analyze these ${items.length} items.\nInput Data:\n${JSON.stringify(items, null, 2)}`;
  const config = {
    systemInstruction: buildSystemInstruction(codebook),
    responseMimeType: 'application/json',
    thinkingConfig: THINKING_CONFIG,
    responseSchema: buildBatchResponseSchema(codebook),
  };

  return generateJson(ai, contents, config);
};


// Calls the configured model, falling back once on a retired-model error.
const generateJson = async (ai: GoogleGenAI, contents: string, config: any): Promise<{ parsed: any; modelUsed: string }> => {
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
  if (!text) throw new Error('Gemini returned an empty response.');
  return { parsed: JSON.parse(text), modelUsed };
};

export interface ExtractionRequestItem {
  row_id: string;
  text: string;
}

const EXTRACTION_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    items: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          row_id: { type: Type.STRING },
          results: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: { quote: { type: Type.STRING }, who: { type: Type.STRING } },
              required: ['quote', 'who'],
            },
          },
        },
        required: ['row_id', 'results'],
      },
    },
  },
  required: ['items'],
};

/**
 * Quotes the results each narrative text states (services/resultExtraction.ts
 * has the instruction). Returns { items: [{ row_id, results: [{ quote, who }] }] }
 * unverified: the caller keeps only quotes found word for word in the text.
 */
export const extractWithGemini = async (
  apiKey: string,
  items: ExtractionRequestItem[],
): Promise<{ parsed: any; modelUsed: string }> => {
  const ai = new GoogleGenAI({ apiKey });
  const contents = `Quote the stated results in these ${items.length} texts.\nInput Data:\n${JSON.stringify(items, null, 2)}`;
  return generateJson(ai, contents, {
    systemInstruction: EXTRACTION_INSTRUCTION,
    responseMimeType: 'application/json',
    thinkingConfig: THINKING_CONFIG,
    responseSchema: EXTRACTION_SCHEMA,
  });
};
