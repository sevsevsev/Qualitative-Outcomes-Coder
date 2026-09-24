// scripts/codebookEvalScoring.ts
//
// Pure scoring logic for the codebook refinement loop
// (codebook-refinement/README.md). No network and no SDK imports, so it can be
// unit-tested and reused by any runner. scripts/codebook-eval.ts is the runner
// that calls Gemini.

export interface GoldRow {
  gold_id: string;
  outcome_text: string;
  program_type: string;
  expected_code: string;          // numeric prefix like "3.2.2", or "none"
  acceptable_alternates: string[]; // numeric prefixes
  expected_uncoded: boolean;
  confusion_ids: string[];
  requires_cp: string;            // non-empty => expected code depends on an unapplied CP
  status: 'proposed' | 'adjudicated' | 'retired';
  adjudicated_by: string;
  adjudicated_on: string;
}

/** One model coding of one gold row (first/primary split item plus any others). */
export interface CodedRow {
  gold_id: string;
  primary_codes: string[];   // numeric prefixes of every split item's primary_subcategory, in order
  confidences: string[];     // parallel to primary_codes
  uncoded: boolean;
}

export interface RowScore {
  gold_id: string;
  expected: string;
  got: string;               // first primary code, or "none"
  strict: boolean;           // got === expected (or any split item matches expected)
  lenient: boolean;          // strict, or matches an acceptable alternate
  confidence: string;
  confusion_ids: string[];
}

export interface EvalSummary {
  n: number;
  strict_accuracy: number;
  lenient_accuracy: number;
  low_or_none_confidence_rate: number;
  by_confusion: Record<string, { n: number; lenient_correct: number }>;
  error_pairs: Array<{ expected: string; got: string; count: number; gold_ids: string[] }>;
  rows: RowScore[];
}

// ---------------------------------------------------------------------------
// CSV (RFC 4180-ish, quoted fields with "" escapes). Kept local on purpose:
// services/geminiService.ts's parseCSV renames headers for the upload UI,
// which we don't want for gold files.
// ---------------------------------------------------------------------------
export const parseCsvRecords = (text: string): Record<string, string>[] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;
  const src = text.replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (inQuotes) {
      if (c === '"' && src[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else cell += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  const nonEmpty = rows.filter(r => r.some(c => c.trim() !== ''));
  if (nonEmpty.length === 0) return [];
  const [header, ...body] = nonEmpty;
  return body.map(r => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
};

const splitList = (s: string): string[] => s.split(';').map(x => x.trim()).filter(Boolean);

export const parseGold = (csvText: string): GoldRow[] =>
  parseCsvRecords(csvText).map(r => ({
    gold_id: r.gold_id,
    outcome_text: r.outcome_text,
    program_type: r.program_type,
    expected_code: r.expected_code,
    acceptable_alternates: splitList(r.acceptable_alternates ?? ''),
    expected_uncoded: (r.expected_uncoded ?? '').toLowerCase() === 'true',
    confusion_ids: splitList(r.confusion_ids ?? ''),
    requires_cp: r.requires_cp ?? '',
    status: (r.status as GoldRow['status']) ?? 'proposed',
    adjudicated_by: r.adjudicated_by ?? '',
    adjudicated_on: r.adjudicated_on ?? '',
  }));

/** "3.2.2 Stress management & coping skills" -> "3.2.2"; anything unparseable -> "none". */
export const codePrefix = (subcategory: string | undefined | null): string => {
  const m = String(subcategory ?? '').trim().match(/^(\d+(?:\.\d+)+)/);
  return m ? m[1] : 'none';
};

/**
 * Which gold rows are scoreable. By default, only adjudicated rows whose expected
 * code doesn't depend on an unapplied CP. This is the core anti-drift rule:
 * a model is never graded against answers that only a model has proposed.
 */
export const selectScoreable = (
  gold: GoldRow[],
  opts: { includeProposed?: boolean; appliedCps?: string[] } = {}
): GoldRow[] => {
  const applied = new Set(opts.appliedCps ?? []);
  return gold.filter(g =>
    g.status !== 'retired' &&
    (opts.includeProposed || g.status === 'adjudicated') &&
    (!g.requires_cp || applied.has(g.requires_cp))
  );
};

export const scoreRows = (gold: GoldRow[], coded: CodedRow[]): EvalSummary => {
  const byId = new Map(coded.map(c => [c.gold_id, c]));
  const rows: RowScore[] = gold.map(g => {
    const c = byId.get(g.gold_id);
    const codes = c ? (c.uncoded ? ['none'] : c.primary_codes) : [];
    const got = codes[0] ?? 'none';
    const expected = g.expected_uncoded ? 'none' : g.expected_code;
    const strict = codes.includes(expected);
    const lenient = strict || g.acceptable_alternates.some(a => codes.includes(a));
    return {
      gold_id: g.gold_id,
      expected,
      got,
      strict,
      lenient,
      confidence: c?.confidences[0] ?? 'missing',
      confusion_ids: g.confusion_ids,
    };
  });

  const n = rows.length;
  const frac = (k: number) => (n === 0 ? 0 : k / n);
  const by_confusion: EvalSummary['by_confusion'] = {};
  for (const r of rows) {
    for (const cf of r.confusion_ids) {
      by_confusion[cf] ??= { n: 0, lenient_correct: 0 };
      by_confusion[cf].n++;
      if (r.lenient) by_confusion[cf].lenient_correct++;
    }
  }
  const pairMap = new Map<string, { expected: string; got: string; count: number; gold_ids: string[] }>();
  for (const r of rows.filter(r => !r.lenient)) {
    const key = `${r.expected}->${r.got}`;
    const e = pairMap.get(key) ?? { expected: r.expected, got: r.got, count: 0, gold_ids: [] };
    e.count++;
    e.gold_ids.push(r.gold_id);
    pairMap.set(key, e);
  }
  return {
    n,
    strict_accuracy: frac(rows.filter(r => r.strict).length),
    lenient_accuracy: frac(rows.filter(r => r.lenient).length),
    low_or_none_confidence_rate: frac(rows.filter(r => ['low', 'none', 'missing'].includes(r.confidence)).length),
    by_confusion,
    error_pairs: [...pairMap.values()].sort((a, b) => b.count - a.count),
    rows,
  };
};

/** Cohen's kappa between two codings of the same rows (first primary code). */
export const cohensKappa = (a: CodedRow[], b: CodedRow[]): { agreement: number; kappa: number; disagreements: string[] } => {
  const bById = new Map(b.map(r => [r.gold_id, r]));
  const pairs = a
    .filter(r => bById.has(r.gold_id))
    .map(r => {
      const other = bById.get(r.gold_id)!;
      const x = r.uncoded ? 'none' : r.primary_codes[0] ?? 'none';
      const y = other.uncoded ? 'none' : other.primary_codes[0] ?? 'none';
      return { id: r.gold_id, x, y };
    });
  const n = pairs.length;
  if (n === 0) return { agreement: 0, kappa: 0, disagreements: [] };
  const po = pairs.filter(p => p.x === p.y).length / n;
  const countA = new Map<string, number>();
  const countB = new Map<string, number>();
  for (const p of pairs) {
    countA.set(p.x, (countA.get(p.x) ?? 0) + 1);
    countB.set(p.y, (countB.get(p.y) ?? 0) + 1);
  }
  let pe = 0;
  for (const [k, v] of countA) pe += (v / n) * ((countB.get(k) ?? 0) / n);
  const kappa = pe === 1 ? 1 : (po - pe) / (1 - pe);
  return { agreement: po, kappa, disagreements: pairs.filter(p => p.x !== p.y).map(p => `${p.id}: ${p.x} vs ${p.y}`) };
};

/**
 * Regression gate (STANDARDS S4.4): rows that were correct under the baseline
 * and are wrong under the candidate. Any such row must be named, with a reason,
 * in the CP.
 */
export const regressions = (baseline: EvalSummary, candidate: EvalSummary): RowScore[] => {
  const base = new Map(baseline.rows.map(r => [r.gold_id, r]));
  return candidate.rows.filter(r => base.get(r.gold_id)?.lenient && !r.lenient);
};
