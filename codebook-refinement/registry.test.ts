import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCodebook, allSubcategoryCodes } from '../codebooks/index.js';
import { parseGold, codePrefix, parseCsvRecords } from '../scripts/codebookEvalScoring.js';

// Mechanical guards for codebook-refinement/STANDARDS.md. These don't prove a
// citation is right (only a verifier fetching the source can do that). They
// make sure every claim of "verified" carries evidence, that no code goes
// unsourced without an explicit reason, that known-bad citations can't sit
// in the codebook without an open change proposal, and that agents can't
// quietly promote their own gold rows to "adjudicated".

const here = path.dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(fs.readFileSync(path.join(here, 'sources/original.sources.json'), 'utf-8'));
const gold = parseGold(fs.readFileSync(path.join(here, 'gold/original.gold.csv'), 'utf-8'));
const codebook = getCodebook('original');
const liveCodes = new Set(allSubcategoryCodes(codebook).map(codePrefix));
const STATUSES = ['verified', 'located', 'unverified', 'misattributed', 'needs_replacement'];
// Humans allowed to adjudicate gold rows / approve CPs. Agents must never add themselves here.
const HUMAN_ADJUDICATORS = ['Severin'];

describe('source registry (STANDARDS S1)', () => {
  it('has unique ids and a known status on every entry', () => {
    const ids = registry.sources.map((s: any) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of registry.sources) expect(STATUSES).toContain(s.status);
  });

  it('backs every "verified" entry with a url, a date, and a short verbatim excerpt', () => {
    for (const s of registry.sources.filter((s: any) => s.status === 'verified')) {
      expect(s.url, s.id).toMatch(/^https:\/\//);
      expect(s.verified_on, s.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(typeof s.excerpt, s.id).toBe('string');
      const words = s.excerpt.trim().split(/\s+/).length;
      expect(words, `${s.id} excerpt must be <= 40 words`).toBeLessThanOrEqual(40);
    }
  });

  it('gives every per-code verifier verdict an excerpt of <= 40 words', () => {
    for (const s of registry.sources) {
      for (const sup of s.supports.filter((x: any) => x.verdict)) {
        expect(['SUPPORTED', 'PARTIAL', 'UNSUPPORTED', 'MISATTRIBUTED', 'UNREACHABLE']).toContain(sup.verdict);
        if (sup.verdict === 'SUPPORTED') {
          expect(typeof sup.excerpt, `${s.id}::${sup.code}`).toBe('string');
          expect(sup.excerpt.trim().split(/\s+/).length, `${s.id}::${sup.code}`).toBeLessThanOrEqual(40);
        }
      }
    }
  });

  it('requires an open CP on every misattributed / needs_replacement entry', () => {
    for (const s of registry.sources.filter((s: any) => ['misattributed', 'needs_replacement'].includes(s.status))) {
      expect(s.open_cp, s.id).toMatch(/^CP-\d{2}-\d{2}$/);
    }
  });

  it('maps every live subcategory to a non-misattributed source or an explicit extension', () => {
    const covered = new Set<string>();
    for (const s of registry.sources) {
      if (s.status === 'misattributed') continue;
      for (const sup of s.supports) if (!sup.proposed && !sup.unsupported) covered.add(sup.code);
    }
    for (const e of registry.codebook_extensions) covered.add(e.code);
    const missing = [...liveCodes].filter(c => !covered.has(c));
    expect(missing).toEqual([]);
  });

  it('only references codes that exist, unless marked proposed', () => {
    for (const s of registry.sources) {
      for (const sup of s.supports) {
        if (!sup.proposed) expect(liveCodes.has(sup.code), `${s.id} -> ${sup.code}`).toBe(true);
      }
    }
  });
});

describe('gold set (STANDARDS S4.3)', () => {
  it('has unique ids', () => {
    const ids = gold.map(g => g.gold_id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('only lets a named human adjudicate rows', () => {
    for (const g of gold.filter(g => g.status === 'adjudicated')) {
      expect(HUMAN_ADJUDICATORS, g.gold_id).toContain(g.adjudicated_by);
      expect(g.adjudicated_on, g.gold_id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('expects only real codes, unless the row is tied to an unapplied CP or backlog item', () => {
    for (const g of gold) {
      if (g.expected_uncoded) { expect(g.expected_code).toBe('none'); continue; }
      if (g.requires_cp) continue;
      expect(liveCodes.has(g.expected_code), `${g.gold_id} -> ${g.expected_code}`).toBe(true);
      for (const alt of g.acceptable_alternates) expect(liveCodes.has(alt), `${g.gold_id} alt ${alt}`).toBe(true);
    }
  });

  it('gives every confusion entry at least two gold examples (STANDARDS S3.1)', () => {
    const confusions = fs.readFileSync(path.join(here, 'CONFUSIONS.md'), 'utf-8');
    const cfIds = [...confusions.matchAll(/^### (CF-\d{3})/gm)].map(m => m[1]);
    expect(cfIds.length).toBeGreaterThan(0);
    for (const cf of cfIds) {
      const n = gold.filter(g => g.confusion_ids.includes(cf)).length;
      expect(n, `${cf} gold examples`).toBeGreaterThanOrEqual(2);
    }
  });
});

describe('cycle-02 gold set (v1 codes in current numbering + v2 draft codes)', () => {
  const rows = parseCsvRecords(fs.readFileSync(path.join(here, 'gold/gold-cycle02.csv'), 'utf-8'));
  const v2Codes = new Set(
    [...fs.readFileSync(path.join(here, 'v2/codebook-v2-draft.md'), 'utf-8').matchAll(/^\| ((?:Y|F|A)\d+\.\d+) /gm)].map(m => m[1])
  );

  it('has unique ids', () => {
    const ids = rows.map(r => r.gold_id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses only live v1 codes and v2-draft codes', () => {
    for (const r of rows) {
      if (r.v1_gold !== 'none') expect(liveCodes.has(r.v1_gold), `${r.gold_id} v1 ${r.v1_gold}`).toBe(true);
      if (r.v2_gold !== 'none') expect(v2Codes.has(r.v2_gold), `${r.gold_id} v2 ${r.v2_gold}`).toBe(true);
    }
  });

  it('only lets a named human adjudicate rows', () => {
    for (const r of rows.filter(r => r.status === 'adjudicated')) {
      expect(HUMAN_ADJUDICATORS, r.gold_id).toContain(r.adjudicated_by);
    }
  });
});
