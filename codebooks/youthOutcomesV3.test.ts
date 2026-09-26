import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCodebook, allDomainCodes, allSubcategoryCodes } from './index.js';
import { V3_DOMAINS } from './youthOutcomesV3.data.js';
import { allV3Codes, v3Code } from './youthOutcomesV3.js';
import { buildExplorerCodebook } from '../services/codebookExplorer.js';

// Codebook 3.x is generated from youthOutcomesV3.data.ts. These checks pin the
// approved structure (CP-08-01), keep held-out gold out of the prompt, keep
// unverified citations out of it, and check the 2.5.1 -> 3.0.0 crosswalk.

const here = path.dirname(fileURLToPath(import.meta.url));
const read = (p: string) => fs.readFileSync(path.join(here, '..', p), 'utf-8');
const codebook = getCodebook('youth_outcomes_v3');
const codes = allV3Codes();

// Minimal CSV reader for the repo's own files (quoted fields, no embedded newlines).
const parseCsv = (text: string): Record<string, string>[] => {
  const rows = text.trim().split('\n').map(line => {
    const cells: string[] = [];
    let cur = '';
    let quoted = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"' && line[i + 1] === '"' && quoted) { cur += '"'; i++; }
      else if (ch === '"') quoted = !quoted;
      else if (ch === ',' && !quoted) { cells.push(cur); cur = ''; }
      else cur += ch;
    }
    cells.push(cur);
    return cells;
  });
  const [head, ...body] = rows;
  return body.map(r => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
};

describe('codebook 3.x structure (CP-08-01)', () => {
  it('has 3 parts, 13 domains, 39 categories and 98 codes', () => {
    expect(new Set(V3_DOMAINS.map(d => d.part))).toEqual(new Set(['Y', 'F', 'A']));
    expect(V3_DOMAINS).toHaveLength(13);
    expect(V3_DOMAINS.flatMap(d => d.categories)).toHaveLength(39);
    expect(codes).toHaveLength(98);
    expect(allSubcategoryCodes(codebook)).toHaveLength(98);
    expect(allDomainCodes(codebook)).toHaveLength(13);
  });

  it('numbers codes by domain prefix, contiguously, with unique ids', () => {
    expect(new Set(codes.map(c => c.id)).size).toBe(codes.length);
    for (const d of V3_DOMAINS) {
      expect(d.id).toMatch(new RegExp(`^${d.part}\\d+$`));
      const ids = d.categories.flatMap(c => c.codes.map(x => x.id));
      expect(ids).toEqual(ids.map((_, i) => `${d.id}.${i + 1}`));
    }
  });

  it('gives every code a definition, include, exclude, use-instead and source line', () => {
    for (const c of codes) {
      for (const f of ['definition', 'include', 'exclude', 'useInstead', 'source'] as const) {
        expect(c[f].trim(), `${c.id} ${f}`).not.toBe('');
      }
    }
  });
});

describe('codebook 3.x prompt', () => {
  const prompt = codebook.rulesText + codebook.definitionsText;

  it('never contains a held-out gold statement', () => {
    const heldOut = parseCsv(read('codebook-refinement/gold/gold-cycle02.csv')).filter(r => r.set === 'heldout');
    expect(heldOut.length).toBeGreaterThan(0);
    const leaked = heldOut.filter(r => prompt.includes(r.outcome_text.trim()));
    expect(leaked.map(r => r.gold_id)).toEqual([]);
  });

  it('never contains a statement from the fresh 3.0 held-out set', () => {
    const heldOut = parseCsv(read('codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv'));
    const prompts = [prompt, getCodebook('original').rulesText + getCodebook('original').definitionsText];
    const leaked = heldOut.filter(r => prompts.some(p => p.includes(r.outcome_text.trim())));
    expect(leaked.map(r => r.gold_id)).toEqual([]);
  });

  it('cites only verified or located sources', () => {
    for (const c of codes) {
      expect(c.source, c.id).not.toMatch(/partial|VERIFY|\(located\)|\(verified\)/i);
    }
  });

  it('names every code the schema accepts, and only those', () => {
    for (const c of codes) expect(codebook.definitionsText).toContain(`\n${v3Code(c)}\n`);
  });
});

describe('codebook 3.x in the explorer', () => {
  const view = buildExplorerCodebook(codebook);

  it('parses every domain and code, with its category and sources', () => {
    expect(view.hasRegistry).toBe(true);
    for (const d of view.domains) {
      expect(d.number, d.code).toMatch(/^[YFA]\d+$/);
      expect(d.frameworkBasis, d.code).toBeTruthy();
      for (const s of d.subcategories) {
        expect(s.number, s.code).toMatch(/^[YFA]\d+\.\d+$/);
        expect(s.definition, s.code).toBeTruthy();
        expect(s.group, s.code).toBeTruthy();
        expect(s.frameworks.length, s.code).toBe(1);
        expect(s.sources.length > 0 || Boolean(s.sourceGap), s.code).toBe(true);
      }
    }
  });
});

describe('crosswalk 2.5.1 -> 3.0.0 (renumbering rule: generated map, tested)', () => {
  const rows = parseCsv(read('codebook-refinement/v3/crosswalk-2.5.1-to-3.0.0.csv'));
  const oldCodes = allSubcategoryCodes(getCodebook('original'));
  const newCodes = new Set(allSubcategoryCodes(codebook));

  it('maps every 2.x code exactly once', () => {
    expect(rows.map(r => r.old_code).sort()).toEqual([...oldCodes].sort());
  });

  it('only targets codes that exist in 3.0.0', () => {
    for (const r of rows) {
      expect(newCodes.has(r.new_code), r.new_code).toBe(true);
      for (const t of r.re_review_targets.split(' | ').filter(Boolean)) expect(newCodes.has(t), t).toBe(true);
    }
  });

  it('keeps one-to-one rows one-to-one', () => {
    for (const r of rows.filter(x => x.mapping === 'one-to-one')) {
      expect(rows.filter(x => x.new_code === r.new_code).map(x => x.old_code), r.new_code).toEqual([r.old_code]);
    }
  });

  it('marks every row that shares a target as a merge or split', () => {
    for (const r of rows) {
      const shared = rows.filter(x => x.new_code === r.new_code).length > 1;
      if (shared) expect(['merge', 'split'], r.old_code).toContain(r.mapping);
    }
  });

  it('reaches every 3.0.0 code, or the code is new', () => {
    const reached = new Set(rows.flatMap(r => [r.new_code, ...r.re_review_targets.split(' | ').filter(Boolean)]));
    const orphans = codes.filter(c => !reached.has(v3Code(c)) && !c.from2x.startsWith('new'));
    expect(orphans.map(c => c.id)).toEqual([]);
  });
});

describe('codebook 3.x gold (youth_outcomes_v3.gold.csv)', () => {
  const rows = parseCsv(read('codebook-refinement/gold/youth_outcomes_v3.gold.csv'));
  const labels = new Set([...codes.map(v3Code), 'none']);

  it('covers every cycle-02 statement once', () => {
    expect(rows.length).toBe(345);
    expect(new Set(rows.map(r => r.gold_id)).size).toBe(345);
  });

  it('only lets Severin adjudicate rows, each with a live 3.0 code and a date', () => {
    for (const r of rows.filter(r => r.status === 'adjudicated')) {
      expect(r.adjudicated_by, r.gold_id).toBe('Severin');
      expect(r.adjudicated_on, r.gold_id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(labels.has(r.v3_gold), `${r.gold_id} ${r.v3_gold}`).toBe(true);
    }
  });

  it('leaves undecided rows proposed, with no gold code', () => {
    for (const r of rows.filter(r => r.status !== 'adjudicated')) {
      expect(r.status, r.gold_id).toBe('proposed');
      expect(r.v3_gold, r.gold_id).toBe('');
      expect(r.adjudicated_by, r.gold_id).toBe('');
    }
  });
});

describe('codebook 3.x fresh held-out gold (youth_outcomes_v3.heldout.gold.csv)', () => {
  const rows = parseCsv(read('codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv'));
  const labels = new Set([...codes.map(v3Code), 'none']);

  it('has 100 unique statements, none of them in the cycle-02 gold', () => {
    expect(rows.length).toBe(100);
    expect(new Set(rows.map(r => r.gold_id)).size).toBe(100);
    const cycle02 = new Set(parseCsv(read('codebook-refinement/gold/gold-cycle02.csv')).map(r => r.outcome_text.trim()));
    expect(rows.filter(r => cycle02.has(r.outcome_text.trim())).map(r => r.gold_id)).toEqual([]);
  });

  it('is adjudicated by Severin only, with live 3.0 codes and alternates', () => {
    for (const r of rows) {
      expect(r.status, r.gold_id).toBe('adjudicated');
      expect(r.adjudicated_by, r.gold_id).toBe('Severin');
      expect(r.adjudicated_on, r.gold_id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(labels.has(r.v3_gold), `${r.gold_id} ${r.v3_gold}`).toBe(true);
      for (const alt of r.v3_alternates.split(' | ').filter(Boolean)) expect(labels.has(alt), `${r.gold_id} ${alt}`).toBe(true);
      expect(r.expected_uncoded, r.gold_id).toBe(String(r.v3_gold === 'none'));
    }
  });
});
