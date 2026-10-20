import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { V3_DOMAINS } from '../codebooks/youthOutcomesV3.data.js';
import { parseCsvRecords } from '../scripts/codebookEvalScoring.js';

// The outcome crosswalk: one lane per codebook 3.x code. Built by crosswalk/build_crosswalk.py.
const DIR = 'codebook-refinement/crosswalk';
const cw = JSON.parse(readFileSync(`${DIR}/youth_outcomes_v3.crosswalk.json`, 'utf8'));
const csv = (p: string) => parseCsvRecords(readFileSync(p, 'utf8'));
const IDS = V3_DOMAINS.flatMap(d => [d.id, ...d.categories.flatMap(c => c.codes.map(code => code.id))]);

describe('outcome crosswalk (codebook-refinement/crosswalk)', () => {
  it('is up to date with lanes.csv', () => {
    const rows = csv(`${DIR}/lanes.csv`);
    expect(cw.codes.map((c: { code: string; lane: string; serves: string }) => [c.code, c.lane, c.serves]))
      .toEqual(rows.map(r => [r.code, r.lane, r.serves]));
  });

  it('places every 3.x code and domain exactly once, in a known lane', () => {
    const codes = cw.codes.map((c: { code: string }) => c.code);
    expect([...codes].sort()).toEqual([...IDS].sort());
    const lanes = new Set(cw.lanes.map((l: { id: string }) => l.id));
    for (const c of cw.codes) {
      expect(lanes.has(c.lane), c.code).toBe(true);
      expect(c.serves, c.code).toBeTruthy();
    }
  });

  it('quotes the bylaw only as an independent verifier recorded it', () => {
    const results = new Map(csv(`${DIR}/verification/bylaw_results.csv`).map(r => [r.claim_id, r]));
    const quotes = [cw.source.guardrailDefinition, ...cw.source.goals, ...cw.source.guardrails,
      ...cw.lanes.filter((l: { quote?: unknown }) => l.quote).map((l: { quote: unknown }) => l.quote)];
    for (const q of quotes as { text: string; claim: string }[]) {
      const r = results.get(q.claim);
      expect(r?.verdict, q.claim).toBe('SUPPORTED');
      expect(q.text).toBe(r!.excerpt);
      expect(q.text.split(/\s+/).filter(Boolean).length, q.claim).toBeLessThanOrEqual(40);
      expect(r!.fetched_url).toBe(cw.source.url);
    }
  });

  it('carries no counts of partners or statements', () => {
    expect(JSON.stringify(cw)).not.toMatch(/organizations"|programs"|statements"\s*:/);
  });
});
