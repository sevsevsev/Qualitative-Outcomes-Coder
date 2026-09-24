import { describe, expect, it } from 'vitest';
import { CODEBOOK_LIST, getCodebook } from '../codebooks/index.js';
import { buildExplorerCodebook, splitCode } from './codebookExplorer.js';
import { getSourceRegistry } from './codebookSources.js';

describe('codebook explorer data', () => {
  it('splits code strings into number and title', () => {
    expect(splitCode('Domain 4. Social & Emotional Learning (CASEL-aligned)')).toEqual({
      number: '4',
      title: 'Social & Emotional Learning (CASEL-aligned)',
    });
    expect(splitCode('4.2.2 Stress management & coping skills').number).toBe('4.2.2');
    expect(splitCode('Code 01: Improve Safety and Well-being')).toEqual({ number: '01', title: 'Improve Safety and Well-being' });
  });

  it.each(CODEBOOK_LIST.map(cb => [cb.id, cb] as const))('finds a definition for every code in %s', (_id, cb) => {
    const data = buildExplorerCodebook(cb);
    expect(data.domains).toHaveLength(cb.domains.length);
    for (const d of data.domains) {
      expect(d.number).not.toBe('');
      if (d.subcategories.length === 0) expect(d.definition, d.code).toBeTruthy();
      for (const c of d.subcategories) {
        expect(c.number, c.code).not.toBe('');
        expect(c.definition, c.code).toBeTruthy();
      }
    }
  });

  it('parses framework basis, SEL groups, examples and notes from the original codebook', () => {
    const data = buildExplorerCodebook(getCodebook('original'));
    const byNumber = (n: string) => data.domains.find(d => d.number === n)!;
    const joy = byNumber('2');
    expect(joy.frameworkBasis).toMatch(/Hidi/);
    const sel = byNumber('4').subcategories;
    expect(sel.find(c => c.number === '4.1.1')?.group).toBe('Self-Awareness');
    expect(sel.find(c => c.number === '4.5.1')?.group).toBe('Responsible Decision-Making');
    const c15 = byNumber('1').subcategories.find(c => c.number === '1.5')!;
    expect(c15.examples).toHaveLength(2);
    expect(c15.notes.join(' ')).toMatch(/11\.5/);
    expect(joy.subcategories.find(c => c.number === '2.5')?.frameworks[0]).toMatch(/National Core Arts/);
  });

  it('links registry sources to codes and keeps unregistered codebooks source-free', () => {
    const original = buildExplorerCodebook(getCodebook('original'));
    expect(original.hasRegistry).toBe(true);
    const c421 = original.domains.find(d => d.number === '4')!.subcategories.find(c => c.number === '4.2.1')!;
    expect(c421.sources.map(s => s.id)).toContain('casel-2020');
    expect(c421.sources.find(s => s.id === 'casel-2020')?.component).toMatch(/Managing one's emotions/);
    // Verified sources sort first.
    for (const d of original.domains) {
      const ranks = d.sources.map(s => (s.status === 'verified' ? 0 : 1));
      expect([...ranks].sort()).toEqual(ranks);
    }

    // A support a verifier rejected, or one for a code that isn't live yet,
    // is never shown as a source for that code.
    const registry = getSourceRegistry('original')!;
    const codesByNumber = new Map(
      original.domains.flatMap(d => d.subcategories).map(c => [c.number, c] as const),
    );
    let flagged = 0;
    for (const s of registry.sources) {
      for (const sup of s.supports.filter(x => x.proposed || x.unsupported)) {
        const valid = s.supports.some(x => x.code === sup.code && !x.proposed && !x.unsupported);
        const shown = codesByNumber.get(sup.code)?.sources.some(x => x.id === s.id) ?? false;
        if (!valid) { flagged++; expect(shown, `${s.id} -> ${sup.code}`).toBe(false); }
      }
    }
    expect(flagged).toBeGreaterThan(0);

    const philly = buildExplorerCodebook(getCodebook('accelerate_philly'));
    expect(philly.hasRegistry).toBe(false);
    expect(philly.sources).toEqual([]);
  });
});

describe('domain overviews', () => {
  it('gives every original-codebook domain a hint and a description whose code references exist', () => {
    const data = buildExplorerCodebook(getCodebook('original'));
    const codes = new Set(data.domains.flatMap(d => d.subcategories.map(c => c.number)));
    const domains = new Set(data.domains.map(d => d.number));
    for (const d of data.domains) {
      expect(d.hint, d.code).toBeTruthy();
      expect(d.description, d.code).toBeTruthy();
      for (const ref of d.description!.match(/\b\d{1,2}(?:\.\d{1,2}){1,2}\b/g) ?? []) expect(codes, `${d.code} -> ${ref}`).toContain(ref);
      for (const m of d.description!.matchAll(/Domain (\d{1,2})\b/g)) expect(domains, `${d.code} -> Domain ${m[1]}`).toContain(m[1]);
    }
  });
});
