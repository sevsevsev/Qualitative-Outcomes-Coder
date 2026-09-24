import { describe, expect, it } from 'vitest';
import { CODEBOOK_LIST, getCodebook } from '../codebooks/index.js';
import { buildExplorerCodebook, splitCode } from './codebookExplorer.js';

describe('codebook explorer data', () => {
  it('splits code strings into number and title', () => {
    expect(splitCode('Domain 3. Social & Emotional Learning (CASEL-aligned)')).toEqual({
      number: '3',
      title: 'Social & Emotional Learning (CASEL-aligned)',
    });
    expect(splitCode('3.2.2 Stress management & coping skills').number).toBe('3.2.2');
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
    const d1 = byNumber('1');
    expect(d1.frameworkBasis).toMatch(/Hidi/);
    const sel = byNumber('3').subcategories;
    expect(sel.find(c => c.number === '3.1.1')?.group).toBe('Self-Awareness');
    expect(sel.find(c => c.number === '3.5.1')?.group).toBe('Responsible Decision-Making');
    const c115 = byNumber('11').subcategories.find(c => c.number === '11.5')!;
    expect(c115.examples).toHaveLength(2);
    expect(c115.notes.join(' ')).toMatch(/10\.5/);
    expect(d1.subcategories.find(c => c.number === '1.5')?.frameworks[0]).toMatch(/National Core Arts/);
  });

  it('links registry sources to codes and keeps unregistered codebooks source-free', () => {
    const original = buildExplorerCodebook(getCodebook('original'));
    expect(original.hasRegistry).toBe(true);
    const c321 = original.domains.find(d => d.number === '3')!.subcategories.find(c => c.number === '3.2.1')!;
    expect(c321.sources.map(s => s.id)).toContain('casel-2020');
    expect(c321.sources.find(s => s.id === 'casel-2020')?.component).toMatch(/Managing one's emotions/);
    // Verified sources sort first.
    for (const d of original.domains) {
      const ranks = d.sources.map(s => (s.status === 'verified' ? 0 : 1));
      expect([...ranks].sort()).toEqual(ranks);
    }

    const philly = buildExplorerCodebook(getCodebook('accelerate_philly'));
    expect(philly.hasRegistry).toBe(false);
    expect(philly.sources).toEqual([]);
  });
});
