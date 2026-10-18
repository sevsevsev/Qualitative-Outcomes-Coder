// scripts/code-corpus.ts
//
// Codes a whole input file the way the app does and writes the same CSV the
// review screen downloads, so a real corpus can be recoded without a browser.
// It runs services/geminiService.ts processBatch unchanged; its calls to
// /api/analyze-batch and /api/extract-results go to those handlers in-process.
// The review columns (ai_* originals, review_sample, review_status) are set
// as the review screen sets them when it first opens the result.
//
// Usage (needs GEMINI_API_KEY in the environment):
//   npx tsx scripts/code-corpus.ts --codebook youth_outcomes_v3 --in input.csv --out coded.csv
//
// Flags:
//   --codebook <id>        default youth_outcomes_v3
//   --in <path>            input CSV in the coder's format (required)
//   --out <path>           where to write the coded CSV (required)
//   --source-type <value>  source type for rows that carry none (see services/sourceType.ts)

import fs from 'node:fs';
import path from 'node:path';
import analyzeBatch from '../api/analyze-batch.js';
import extractResults from '../api/extract-results.js';
import { call } from '../api/_lib/testing.js';
import { CodebookType, getCodebook } from '../codebooks/index.js';
import { atomicJsonToCSV, processBatch } from '../services/geminiService.js';
import { normalizeImportedCoding } from '../services/reviewNormalization.js';
import { assignSample, reviewStatus, toBool, withAiOriginal } from '../services/reviewState.js';
import type { AtomicBatchItem } from '../types.js';

const arg = (name: string): string | undefined => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
};

const ROUTES: Record<string, (req: any, res: any) => Promise<void>> = {
  '/api/analyze-batch': analyzeBatch,
  '/api/extract-results': extractResults,
};

// The browser client fetches relative URLs; answer them from the handlers.
const realFetch = globalThis.fetch;
globalThis.fetch = (async (input: any, init?: any) => {
  const url = typeof input === 'string' ? input : String(input?.url ?? input);
  const route = ROUTES[url];
  if (!route) return realFetch(input, init);
  const out = await call(route, { method: init?.method ?? 'GET', body: init?.body ? JSON.parse(init.body) : undefined });
  return {
    ok: out.statusCode >= 200 && out.statusCode < 300,
    status: out.statusCode,
    headers: { get: (name: string) => out.headers[name.toLowerCase()] ?? null },
    json: async () => out.body,
  } as unknown as Response;
}) as typeof fetch;

async function main() {
  if (!process.env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not set.');
  const inPath = arg('in');
  const outPath = arg('out');
  if (!inPath || !outPath) throw new Error('Pass --in <input.csv> and --out <coded.csv>.');
  const codebookId = (arg('codebook') ?? 'youth_outcomes_v3') as CodebookType;
  const codebook = getCodebook(codebookId);
  if (!codebook) throw new Error(`Unknown codebook: ${codebookId}`);

  let lastLog = 0;
  const result = await processBatch(fs.readFileSync(inPath, 'utf-8'), codebookId, (done, total, log) => {
    if (log.includes('❌') || log.includes('⚠️') || Date.now() - lastLog > 30_000) {
      lastLog = Date.now();
      console.log(`${done}/${total} ${log}`);
    }
  }, arg('source-type'));

  // Same first pass as components/ReviewDashboard.tsx.
  const items = assignSample(result.items.map(item => {
    const normalized = normalizeImportedCoding(item, codebook, codebookId);
    return {
      ...item,
      primary_domain: normalized.primary_domain,
      primary_subcategory: normalized.primary_subcategory,
      primary_confidence: normalized.primary_confidence as AtomicBatchItem['primary_confidence'],
      uncoded: normalized.uncoded,
      is_corrected: toBool(item.is_corrected),
      codebook_version: item.codebook_version || `${codebook.id}@${codebook.version}`,
    };
  }).map(withAiOriginal)).map(item => ({ ...item, review_status: reviewStatus(item) }));

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, atomicJsonToCSV(items));
  const failed = items.filter(i => /^(System Error|Error: AI processing skipped)/.test(String(i.notes ?? ''))).length;
  console.log(`codebook ${codebook.id}@${codebook.version} | ${result.items.length} coded rows | ${failed} failed | wrote ${outPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });
