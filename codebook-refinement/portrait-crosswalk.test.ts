import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { V3_DOMAINS } from '../codebooks/youthOutcomesV3.data.js';
import { parseCsvRecords } from '../scripts/codebookEvalScoring.js';

// The Portrait of a Graduate crosswalk: Portrait skills per codebook 3.x code.
// Built by portrait-of-a-graduate/build_portrait_crosswalk.py.
const DIR = 'codebook-refinement/portrait-of-a-graduate';
const cw = JSON.parse(readFileSync(`${DIR}/youth_outcomes_v3.portrait-of-a-graduate.json`, 'utf8'));
const csv = (p: string) => parseCsvRecords(readFileSync(p, 'utf8'));
const IDS = V3_DOMAINS.flatMap(d => [d.id, ...d.categories.flatMap(c => c.codes.map(code => code.id))]);
type Code = { code: string; fit: string; portrait: string[]; reason: string };

describe('Portrait of a Graduate crosswalk (codebook-refinement/portrait-of-a-graduate)', () => {
  it('is up to date with mapping.csv', () => {
    const rows = csv(`${DIR}/mapping.csv`);
    expect(cw.codes.map((c: Code) => [c.code, c.fit, c.portrait.join(';'), c.reason]))
      .toEqual(rows.map(r => [r.code, r.fit, r.portrait, r.reason]));
  });

  it('places every 3.x code and domain exactly once', () => {
    expect(cw.codes.map((c: Code) => c.code).sort()).toEqual([...IDS].sort());
  });

  it('links only to Portrait ids in the 11.2 list, and only when the fit is direct or partial', () => {
    const ids = new Set(cw.portrait.map((p: { id: string }) => p.id));
    expect(cw.portrait.filter((p: { type: string }) => p.type === 'skill')).toHaveLength(69);
    for (const c of cw.codes as Code[]) {
      expect(['direct', 'partial', 'none'], c.code).toContain(c.fit);
      expect(c.portrait.length > 0, c.code).toBe(c.fit !== 'none');
      for (const p of c.portrait) expect(ids.has(p), `${c.code} ${p}`).toBe(true);
      expect(c.reason, c.code).toBeTruthy();
    }
  });

  it('keeps the license and credit line, and carries no counts or stages', () => {
    expect(cw.source.license).toBe('CC BY-NC-SA 4.0');
    expect(cw.source.author).toMatch(/Building 21/);
    expect(JSON.stringify(cw)).not.toMatch(/organizations"|programs"|statements"\s*:|"stage/);
  });
});
