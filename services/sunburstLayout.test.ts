import { describe, expect, it } from 'vitest';
import { CODEBOOK_REGISTRY } from '../codebooks/index.js';
import { buildExplorerCodebook } from './codebookExplorer.js';
import { arcPath, sunburstLayout } from './sunburstLayout.js';

describe('sunburstLayout', () => {
  const data = buildExplorerCodebook(CODEBOOK_REGISTRY.original);
  const layout = sunburstLayout(data.domains);

  it('has one slice per domain and per code, covering the full circle', () => {
    expect(layout.domains).toHaveLength(data.domains.length);
    expect(layout.codes).toHaveLength(data.domains.reduce((n, d) => n + d.subcategories.length, 0));
    expect(layout.domains[0].start).toBe(0);
    expect(layout.domains.at(-1)!.end).toBeCloseTo(360);
  });

  it('puts each code inside its domain slice', () => {
    for (const c of layout.codes) {
      const d = layout.domains[c.domainIndex];
      expect(c.start).toBeGreaterThanOrEqual(d.start - 1e-9);
      expect(c.end).toBeLessThanOrEqual(d.end + 1e-9);
    }
  });

  it('keeps an empty domain visible', () => {
    const [first] = data.domains;
    const l = sunburstLayout([{ ...first, subcategories: [] }, first]);
    expect(l.domains[0].end).toBeGreaterThan(0);
  });

  it('draws a closed ring segment', () => {
    expect(arcPath(100, 100, 50, 80, 0, 90)).toMatch(/^M100 20 A80 80 0 0 1 180 100 L150 100 A50 50 0 0 0 100 50 Z$/);
    expect(arcPath(100, 100, 50, 80, 0, 360)).toContain(' 1 1 ');
  });
});
