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

  it('describes every category, outside the coding prompt (CP-10-03)', () => {
    for (const cat of V3_DOMAINS.flatMap(d => d.categories)) {
      expect(cat.description.trim().length).toBeGreaterThan(20);
      expect(codebook.definitionsText).not.toContain(cat.description);
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

  it('carries no proposal, PR or "in flight" notes in prompt text (CP-12-26)', () => {
    const stale = /\bCP-\d{2}-\d{2}\b|\bPR #\d+|in flight/;
    // Y8.10's note waits for the Y8 anchor re-review (S4.9: no Y8 change before it). Once it is
    // removed, the second expectation fails: delete the exception then.
    const y810 = codes.find(c => c.id === 'Y8.10')!;
    expect(prompt.split(y810.useInstead).join('')).not.toMatch(stale);
    expect(y810.useInstead, 'Y8.10 fixed: drop this exception').toMatch(stale);
  });
});

describe('codebook 3.x source registry (CP-10-01)', () => {
  const reg = JSON.parse(read('codebook-refinement/sources/youth_outcomes_v3.sources.json'));
  const supports = reg.sources.flatMap((s: any) => s.supports.map((x: any) => ({ source: s.id, ...x })));

  it('records the verifier\'s fit for every source-to-code link', () => {
    const missing = supports.filter((x: any) => !['direct', 'partial'].includes(x.fit)).map((x: any) => `${x.source} -> ${x.code}`);
    expect(missing).toEqual([]);
  });

  it('explains every partial fit', () => {
    const bare = supports.filter((x: any) => x.fit === 'partial' && !x.verifier_note?.trim()).map((x: any) => `${x.source} -> ${x.code}`);
    expect(bare).toEqual([]);
  });

  it('tags a basis source "located" only if the registry still has a located source for that code (CP-12-25)', () => {
    // WAIT mirrors codebook-refinement/v3/refresh_basis_status.py; remove a code once its wait
    // clears (Y2.6, F1.9: PR #62; A2.6: CP-12-18's held part) and the script has run.
    const WAIT = new Set(['Y2.6', 'F1.9', 'A2.6']);
    const located = new Set(reg.sources.filter((s: any) => s.status === 'located').flatMap((s: any) => s.supports.map((x: any) => x.code)));
    const stale = codes.filter(c => /\(located\b/.test(c.basis ?? '') && !located.has(c.id)).map(c => c.id);
    expect(stale.filter(id => !WAIT.has(id)), 'stale "(located" tags: run refresh_basis_status.py').toEqual([]);
    expect([...WAIT].filter(id => !stale.includes(id)), 'fixed: remove from WAIT').toEqual([]);
  });

  it('keeps a verbatim excerpt of 40 words or fewer on every verified source', () => {
    for (const s of reg.sources.filter((x: any) => x.status === 'verified')) {
      expect(s.excerpt?.trim(), s.id).toBeTruthy();
      expect(s.excerpt.split(/\s+/).length, s.id).toBeLessThanOrEqual(40);
    }
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

  // CP-12-27: 2.x numbers in CONFUSIONS.md and DEVIATIONS.md are renumbered only by
  // codebook-refinement/v3/renumber_2x_refs.py, from this crosswalk. These checks mirror the script.
  const map = new Map(rows.map(r => [r.old_code.split(' ')[0], {
    to: r.new_code.split(' ')[0],
    targets: r.mapping === 'split' ? r.re_review_targets.split(' | ').filter(Boolean).map(x => x.split(' ')[0]) : [],
  }]));
  const TOKEN = /(?<![\w.#§$-])(\d{1,2}\.\d{1,2}(?:\.\d)?)(?![.\d]\d|\.x)/g;
  const OVERRIDE: Record<string, Record<string, string>> = { 'CF-016': { '6.4': 'Y5.6' } };
  const confusions = read('codebook-refinement/CONFUSIONS.md');
  const [twoX, threeX = ''] = confusions.split(/^## Codebook 3\.x tie-breakers$/m);
  const blockOf = (text: string, id: string) =>
    text.match(new RegExp(`^### ${id}:[\\s\\S]*?(?=^### |^## |^---$|(?![\\s\\S]))`, 'm'))?.[0] ?? '';
  const generated = [...threeX.matchAll(/^### (CF-\d{3}):[^\n]*\n\n_Renumbered from (CF-\d{3})/gm)].map(m => ({ id: m[1], from: m[2] }));

  it('generates each 3.x copy of a 2.x tie-breaker from the crosswalk (CP-12-27)', () => {
    expect(generated.map(g => g.from).sort()).toEqual(['CF-003', 'CF-016', 'CF-019']);
    const body = (b: string) => b.split('\n').slice(1).filter(l => !/^\*\*Gold:\*\*|^_Renumbered from/.test(l)).join('\n').trim();
    for (const g of generated) {
      const src = blockOf(twoX, g.from);
      expect(src, g.from).not.toBe('');
      const expected = body(src).replace(TOKEN, tok => {
        if (OVERRIDE[g.from]?.[tok]) return OVERRIDE[g.from][tok];
        const m = map.get(tok);
        if (!m) return tok;
        return m.targets.length ? `${tok} [2.x; split in 3.0: ${[m.to, ...m.targets].join(', ')}]` : m.to;
      });
      expect(body(blockOf(threeX, g.id)), g.id).toBe(expected);
    }
  });

  it('maps each generated entry\'s gold to the design rows with the same statements', () => {
    const gold2x = new Map(parseCsv(read('codebook-refinement/gold/original.gold.csv')).map(r => [r.gold_id, r.outcome_text.trim()]));
    const goldV3 = new Map(parseCsv(read('codebook-refinement/gold/youth_outcomes_v3.gold.csv')).map(r => [r.gold_id, r.outcome_text.trim()]));
    const goldLine = (b: string) => b.match(/^\*\*Gold:\*\*(.*)$/m)?.[1] ?? '';
    for (const g of generated) {
      const want = [...goldLine(blockOf(twoX, g.from)).matchAll(/\bG-\d{3}\b/g)].map(m => gold2x.get(m[0])).sort();
      const have = [...goldLine(blockOf(threeX, g.id)).matchAll(/\b([SH]\d{3})\b/g)].map(m => goldV3.get(m[1])).sort();
      expect(have, g.id).toEqual(want);
    }
  });

  it('takes the one override from live rulesText rule 14', () => {
    expect(codebook.rulesText).toContain('initiative or personal agency -> Y5.6');
  });

  it('annotates every 2.x code in the 3.0 build entries of DEVIATIONS.md with its 3.x code', () => {
    const dev = read('codebook-refinement/DEVIATIONS.md');
    const section = dev.slice(dev.indexOf('\n## Codebook 3.x'), dev.indexOf('\n## Drift count'));
    const bare: string[] = [];
    let entry = '';
    for (const line of section.split('\n')) {
      if (line.startsWith('### ')) entry = line.slice(4).split(' ')[0];
      const n = /^FD-P(\d{2})$/.exec(entry);
      if (!n || Number(n[1]) > 20 || !line.startsWith('- **') || line.startsWith('- **Status:**')) continue;
      for (const m of line.matchAll(TOKEN)) {
        if (map.has(m[1]) && !line.slice(m.index! + m[1].length).startsWith(' (now ')) bare.push(`${entry}: ${m[1]}`);
      }
    }
    expect(bare, 'run codebook-refinement/v3/renumber_2x_refs.py --write').toEqual([]);
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

describe('3.x confusion entries (S3.1)', () => {
  // The "Codebook 3.x tie-breakers" section of CONFUSIONS.md (CP-12-15). Each entry names live
  // 3.x codes and rests on adjudicated design gold, with at least one row per listed code.
  const section = read('codebook-refinement/CONFUSIONS.md').split(/^## Codebook 3\.x tie-breakers$/m)[1] ?? '';
  const entries = section.split(/^### /m).slice(1).filter(b => /^CF-\d{3}/.test(b));
  const gold = new Map(parseCsv(read('codebook-refinement/gold/youth_outcomes_v3.gold.csv')).map(r => [r.gold_id, r]));
  // Read only to prove absence: no 3.x CF entry may cite a fresh held-out row.
  const heldOutIds = new Set(parseCsv(read('codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv')).map(r => r.gold_id));
  const liveIds = new Set(codes.map(c => c.id));
  const field = (b: string, label: string) => b.match(new RegExp(`^\\*\\*${label}:\\*\\*(.*)$`, 'm'))?.[1] ?? '';

  it('has entries with unique CF ids after CF-028', () => {
    const ids = entries.map(b => b.slice(0, 6));
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(Number(id.slice(3)), id).toBeGreaterThan(28);
  });

  it('names only live 3.x codes, and rests every listed code on adjudicated design gold', () => {
    for (const b of entries) {
      const id = b.slice(0, 6);
      // A copy generated from a 2.x entry (CP-12-27) keeps the 2.x rule (S3.1): at least two
      // adjudicated rows for the entry, each coded with one of its codes. A routing table has no
      // Codes line, so its codes are the ones the block names.
      const isGenerated = /^_Renumbered from CF-\d{3}/m.test(b);
      const codeText = isGenerated ? b.split(/^\*\*Gold:\*\*/m)[0] : field(b, 'Codes');
      const listed = [...new Set([...codeText.matchAll(/\b([YFA]\d+\.\d+)\b/g)].map(m => m[1]))];
      expect(listed.length, `${id} codes`).toBeGreaterThanOrEqual(2);
      for (const c of listed) expect(liveIds.has(c), `${id} ${c}`).toBe(true);
      const goldIds = [...field(b, 'Gold').matchAll(/\b([A-Z][A-Z-]*\d+)\b(?!\.\d)/g)].map(m => m[1]);
      expect(goldIds.length, `${id} gold`).toBeGreaterThanOrEqual(2);
      const covered = new Set<string>();
      for (const g of goldIds) {
        expect(heldOutIds.has(g), `${id} cites a fresh held-out row`).toBe(false);
        const row = gold.get(g);
        expect(row, `${id} ${g} in design gold`).toBeTruthy();
        expect(row!.status, `${id} ${g}`).toBe('adjudicated');
        const code = row!.v3_gold.split(' ')[0];
        expect(listed, `${id} ${g} -> ${code}`).toContain(code);
        covered.add(code);
      }
      if (!isGenerated) for (const c of listed) expect(covered.has(c), `${id}: no gold row for ${c}`).toBe(true);
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
