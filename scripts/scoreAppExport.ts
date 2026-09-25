// scripts/scoreAppExport.ts
//
// Scores the app's own CSV export against the cycle-02 gold set
// (codebook-refinement/gold/gold-cycle02.csv, v1_* columns = live codebook).
// This is the route for live runs when a session can't reach Gemini: a human
// uploads the statements file in a Vercel preview, exports the result, and this
// script scores it. Same scoring rules as scripts/codebook-eval.ts.
//
// Usage:
//   npx tsx scripts/scoreAppExport.ts --statements <out.csv>                  # write the upload file (design set, no codes)
//   npx tsx scripts/scoreAppExport.ts --export run1.csv --export run2.csv --out result.json [--compare baseline.json]
//
// Flags:
//   --gold <path>     default codebook-refinement/gold/gold-cycle02.csv
//   --set <name>      design (default) or heldout. Held-out rows are for the phase 2 test only;
//                     scoring a CP against them spends the held-out set (CLAUDE.md).

import fs from 'fs';
import {
  type CodedRow, type EvalSummary, type GoldRow, codePrefix, cohensKappa, parseCsvRecords, regressions, scoreRows, selectScoreable,
} from './codebookEvalScoring.js';

const splitList = (s: string): string[] => s.split(';').map(x => x.trim()).filter(Boolean);

/** gold-cycle02.csv rows -> GoldRow, using the live-codebook (v1_*) columns. Codebook-gap rows keep their closest code. */
export const parseCycle02Gold = (csvText: string, set: string): (GoldRow & { gap: boolean })[] =>
  parseCsvRecords(csvText)
    .filter(r => r.set === set)
    .map(r => ({
      gold_id: r.gold_id,
      outcome_text: r.outcome_text,
      program_type: r.program_type,
      expected_code: r.v1_gold,
      acceptable_alternates: splitList(r.v1_alternates ?? ''),
      expected_uncoded: (r.expected_uncoded ?? '').toLowerCase() === 'true' || r.v1_gold === 'none',
      confusion_ids: [],
      requires_cp: '',
      status: (r.status as GoldRow['status']) || 'proposed',
      adjudicated_by: r.adjudicated_by ?? '',
      adjudicated_on: r.adjudicated_on ?? '',
      gap: r.v1_forced_fit === '1',
    }));

/** The app's export (one line per atomic outcome) -> one CodedRow per row_id, split items in order. */
export const parseAppExport = (csvText: string): { rows: CodedRow[]; codebookVersions: string[] } => {
  const byId = new Map<string, { idx: number; code: string; conf: string; uncoded: boolean }[]>();
  const versions = new Set<string>();
  for (const r of parseCsvRecords(csvText)) {
    const list = byId.get(r.row_id) ?? [];
    const uncoded = (r.uncoded ?? '').toLowerCase() === 'true';
    list.push({ idx: Number(r.atomic_outcome_index) || list.length + 1, code: uncoded ? 'none' : codePrefix(r.primary_subcategory), conf: r.primary_confidence || 'missing', uncoded });
    byId.set(r.row_id, list);
    if (r.codebook_version) versions.add(r.codebook_version);
  }
  const rows = [...byId].map(([gold_id, list]) => {
    list.sort((a, b) => a.idx - b.idx);
    return { gold_id, primary_codes: list.map(s => s.code), confidences: list.map(s => s.conf), uncoded: list.every(s => s.uncoded) };
  });
  return { rows, codebookVersions: [...versions] };
};

const accuracyOn = (s: EvalSummary, ids: Set<string>) => {
  const rows = s.rows.filter(r => ids.has(r.gold_id));
  return { n: rows.length, lenient_accuracy: rows.length ? rows.filter(r => r.lenient).length / rows.length : 0 };
};

function main() {
  const argv = process.argv.slice(2);
  const arg = (name: string) => { const i = argv.indexOf(`--${name}`); return i === -1 ? undefined : argv[i + 1]; };
  const all = (name: string) => argv.flatMap((a, i) => (a === `--${name}` ? [argv[i + 1]] : []));
  const goldPath = arg('gold') ?? 'codebook-refinement/gold/gold-cycle02.csv';
  const set = arg('set') ?? 'design';
  const gold = parseCycle02Gold(fs.readFileSync(goldPath, 'utf-8'), set);

  const statementsOut = arg('statements');
  if (statementsOut) {
    const q = (v: string) => (/[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
    fs.writeFileSync(statementsOut, ['row_id,outcome_text', ...gold.map(g => `${q(g.gold_id)},${q(g.outcome_text)}`)].join('\n') + '\n');
    console.log(`wrote ${gold.length} ${set} statements to ${statementsOut}`);
    return;
  }

  const scoreable = selectScoreable(gold);
  if (scoreable.length === 0) throw new Error('No adjudicated rows to score.');
  const exports = all('export');
  if (exports.length === 0) throw new Error('Pass at least one --export <app export CSV>.');
  const parsed = exports.map(p => parseAppExport(fs.readFileSync(p, 'utf-8')));
  const summaries = parsed.map(p => scoreRows(scoreable, p.rows));
  const missing = parsed.map(p => { const ids = new Set(p.rows.map(r => r.gold_id)); return scoreable.filter(g => !ids.has(g.gold_id)).map(g => g.gold_id); });
  const fitIds = new Set(gold.filter(g => !g.gap).map(g => g.gold_id));
  const gapIds = new Set(gold.filter(g => g.gap).map(g => g.gold_id));
  const scoreIds = new Set(scoreable.map(g => g.gold_id));
  const inGold = (rows: CodedRow[]) => rows.filter(r => scoreIds.has(r.gold_id));
  const stability = parsed.length >= 2 ? cohensKappa(inGold(parsed[0].rows), inGold(parsed[1].rows)) : null;

  const result: any = {
    gold_path: goldPath, set, n_rows: scoreable.length, exports,
    codebook_versions: parsed.map(p => p.codebookVersions),
    missing_rows: missing,
    runs: summaries.map(s => ({ ...s, fit_rows: accuracyOn(s, fitIds), gap_rows: accuracyOn(s, gapIds) })),
    stability,
  };
  const comparePath = arg('compare');
  if (comparePath) {
    const base = JSON.parse(fs.readFileSync(comparePath, 'utf-8'));
    result.compare = { baseline: comparePath, regressions: regressions(base.runs[0], summaries[0]).map(r => r.gold_id) };
  }
  const out = arg('out');
  if (out) fs.writeFileSync(out, JSON.stringify(result, null, 2) + '\n');

  console.log(`${set} set | ${scoreable.length} adjudicated rows | codebook ${parsed.map(p => p.codebookVersions.join('/')).join(', ')}`);
  summaries.forEach((s, i) => {
    const fit = accuracyOn(s, fitIds), gap = accuracyOn(s, gapIds);
    console.log(`run ${i + 1}: strict ${(s.strict_accuracy * 100).toFixed(1)}% | lenient ${(s.lenient_accuracy * 100).toFixed(1)}% | fit rows ${(fit.lenient_accuracy * 100).toFixed(1)}% (n=${fit.n}) | gap rows ${(gap.lenient_accuracy * 100).toFixed(1)}% (n=${gap.n}) | missing ${missing[i].length}`);
  });
  if (stability) console.log(`run-to-run agreement ${(stability.agreement * 100).toFixed(1)}%, kappa ${stability.kappa.toFixed(3)}, ${stability.disagreements.length} unstable rows`);
  if (result.compare) console.log(`regressions vs ${comparePath}: ${result.compare.regressions.join(', ') || 'none'}`);
}

if (process.argv[1] && process.argv[1].endsWith('scoreAppExport.ts')) main();
