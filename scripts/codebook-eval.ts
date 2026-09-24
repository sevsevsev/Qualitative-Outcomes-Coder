// scripts/codebook-eval.ts
//
// Runs a gold set through the SAME system instruction + enum schema that
// production uses (codebooks/ + codebooks/geminiSchema.ts) and scores it.
// This is the measurement step of the refinement loop in
// codebook-refinement/README.md.
//
// Usage (needs GEMINI_API_KEY in the environment):
//   npx tsx scripts/codebook-eval.ts --out eval/baseline.json
//   npx tsx scripts/codebook-eval.ts --out eval/cp.json --compare eval/baseline.json --applied-cps CP-01-05
//   npx tsx scripts/codebook-eval.ts --include-proposed --out eval/preview.json   # preview only, never a gate
//
// Flags:
//   --gold <path>          default codebook-refinement/gold/original.gold.csv
//   --codebook <id>        default original
//   --runs <n>             default 2 (the second run measures stability, STANDARDS S4.5)
//   --include-proposed     also score rows humans haven't adjudicated yet (NOT valid as a gate)
//   --applied-cps <a,b>    treat gold rows whose requires_cp is in this list as scoreable
//   --compare <json>       baseline output to diff against (regression gate, STANDARDS S4.4)
//   --out <path>           where to write the JSON result

import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { getCodebook, buildSystemInstruction, CodebookType } from '../codebooks/index.js';
import { buildBatchResponseSchema } from '../codebooks/geminiSchema.js';
import {
  type CodedRow, type EvalSummary, codePrefix, cohensKappa, parseGold, regressions, scoreRows, selectScoreable,
} from './codebookEvalScoring.js';

const arg = (name: string): string | undefined => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
};
const flag = (name: string) => process.argv.includes(`--${name}`);

const CHUNK_SIZE = 5; // same as services/geminiService.ts
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.8-flash'; // keep in sync with api/analyze-batch.ts DEFAULT_MODEL

async function codeOnce(ai: GoogleGenAI, codebookId: CodebookType, items: { row_id: string; outcome_text: string }[]): Promise<CodedRow[]> {
  const codebook = getCodebook(codebookId);
  const config = {
    systemInstruction: buildSystemInstruction(codebook),
    responseMimeType: 'application/json',
    thinkingConfig: { thinkingBudget: 1024 },
    responseSchema: buildBatchResponseSchema(codebook),
  };
  const out: CodedRow[] = [];
  for (let i = 0; i < items.length; i += CHUNK_SIZE) {
    const chunk = items.slice(i, i + CHUNK_SIZE);
    const contents = `Analyze these ${chunk.length} items.\nInput Data:\n${JSON.stringify(chunk, null, 2)}`;
    const res = await ai.models.generateContent({ model: MODEL, contents, config });
    const parsed = JSON.parse(res.text ?? '{}');
    for (const item of parsed.coded_items ?? []) {
      const splits: any[] = item.split_items ?? [];
      out.push({
        gold_id: String(item.row_id),
        primary_codes: splits.map(s => (s.uncoded ? 'none' : codePrefix(s.primary_subcategory))),
        confidences: splits.map(s => String(s.primary_confidence ?? 'missing')),
        uncoded: splits.length > 0 && splits.every(s => s.uncoded),
      });
    }
  }
  return out;
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set.');
  const goldPath = arg('gold') ?? 'codebook-refinement/gold/original.gold.csv';
  const codebookId = (arg('codebook') ?? 'original') as CodebookType;
  const runs = Number(arg('runs') ?? 2);
  const appliedCps = (arg('applied-cps') ?? '').split(',').map(s => s.trim()).filter(Boolean);
  const includeProposed = flag('include-proposed');

  const gold = selectScoreable(parseGold(fs.readFileSync(goldPath, 'utf-8')), { includeProposed, appliedCps });
  if (gold.length === 0) {
    throw new Error('No scoreable gold rows. Rows only count once a human sets status=adjudicated (or pass --include-proposed for a non-gating preview).');
  }
  const ai = new GoogleGenAI({ apiKey });
  const items = gold.map(g => ({ row_id: g.gold_id, outcome_text: g.outcome_text }));

  const codings: CodedRow[][] = [];
  for (let r = 0; r < runs; r++) codings.push(await codeOnce(ai, codebookId, items));

  const summaries: EvalSummary[] = codings.map(c => scoreRows(gold, c));
  const stability = codings.length >= 2 ? cohensKappa(codings[0], codings[1]) : null;
  const codebook = getCodebook(codebookId);

  const result: any = {
    generated_at: new Date().toISOString(),
    model: MODEL,
    codebook_id: codebookId,
    codebook_version: codebook.version,
    gold_path: goldPath,
    gating: !includeProposed,
    applied_cps: appliedCps,
    n_rows: gold.length,
    runs: summaries.map(s => ({
      strict_accuracy: s.strict_accuracy,
      lenient_accuracy: s.lenient_accuracy,
      low_or_none_confidence_rate: s.low_or_none_confidence_rate,
      by_confusion: s.by_confusion,
      error_pairs: s.error_pairs,
    })),
    stability,
    rows: summaries[0].rows,
  };

  const comparePath = arg('compare');
  if (comparePath) {
    const baseline = JSON.parse(fs.readFileSync(comparePath, 'utf-8'));
    const baseSummary = { rows: baseline.rows } as EvalSummary;
    result.regressions = regressions(baseSummary, summaries[0]);
    result.delta_lenient_accuracy = summaries[0].lenient_accuracy - (baseline.runs?.[0]?.lenient_accuracy ?? 0);
  }

  const outPath = arg('out') ?? `codebook-refinement/eval/${codebookId}-${codebook.version}-${Date.now()}.json`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));

  const s0 = summaries[0];
  console.log(`codebook ${codebookId}@${codebook.version} | model ${MODEL} | ${gold.length} rows | gating=${!includeProposed}`);
  console.log(`strict ${(s0.strict_accuracy * 100).toFixed(1)}%  lenient ${(s0.lenient_accuracy * 100).toFixed(1)}%  low/none conf ${(s0.low_or_none_confidence_rate * 100).toFixed(1)}%`);
  if (stability) console.log(`stability: agreement ${(stability.agreement * 100).toFixed(1)}%  kappa ${stability.kappa.toFixed(3)}`);
  if (result.regressions) console.log(`regressions vs baseline: ${result.regressions.length}`);
  console.log(`wrote ${outPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });
