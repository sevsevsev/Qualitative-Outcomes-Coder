// services/sunburstLayout.ts
//
// Geometry for the codebook sunburst on the explorer site's landing page:
// domains on the inner ring, their codes on the outer ring. Every code gets
// the same angle, so a domain's slice is as wide as its number of codes.

import type { ExplorerDomain } from './codebookExplorer.js';

export interface SunburstSlice {
  /** Index of the domain in the codebook (drives its colour). */
  domainIndex: number;
  number: string;
  title: string;
  /** Angles in degrees, clockwise from 12 o'clock. */
  start: number;
  end: number;
}

export interface SunburstLayout {
  domains: SunburstSlice[];
  codes: SunburstSlice[];
}

export const sunburstLayout = (domains: ExplorerDomain[]): SunburstLayout => {
  const total = domains.reduce((n, d) => n + Math.max(d.subcategories.length, 1), 0);
  const step = total ? 360 / total : 0;
  const out: SunburstLayout = { domains: [], codes: [] };
  let angle = 0;
  domains.forEach((d, domainIndex) => {
    const start = angle;
    // A domain with no codes still gets one step, so it stays visible.
    if (d.subcategories.length === 0) angle += step;
    for (const c of d.subcategories) {
      out.codes.push({ domainIndex, number: c.number, title: c.title, start: angle, end: angle + step });
      angle += step;
    }
    out.domains.push({ domainIndex, number: d.number, title: d.title, start, end: angle });
  });
  return out;
};

const point = (cx: number, cy: number, r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as const;
};

const f = (n: number) => Number(n.toFixed(2));

/** SVG path for a ring segment between two radii and two angles. */
export const arcPath = (cx: number, cy: number, r0: number, r1: number, start: number, end: number): string => {
  // A full circle can't be drawn as one arc; stop just short of it.
  const sweep = Math.min(end - start, 359.999);
  const large = sweep > 180 ? 1 : 0;
  const e = start + sweep;
  const [x0, y0] = point(cx, cy, r1, start);
  const [x1, y1] = point(cx, cy, r1, e);
  const [x2, y2] = point(cx, cy, r0, e);
  const [x3, y3] = point(cx, cy, r0, start);
  return [
    `M${f(x0)} ${f(y0)}`,
    `A${r1} ${r1} 0 ${large} 1 ${f(x1)} ${f(y1)}`,
    `L${f(x2)} ${f(y2)}`,
    `A${r0} ${r0} 0 ${large} 0 ${f(x3)} ${f(y3)}`,
    'Z',
  ].join(' ');
};

/** Point at the middle of a ring segment, for a label. */
export const arcCentroid = (cx: number, cy: number, r0: number, r1: number, start: number, end: number) =>
  point(cx, cy, (r0 + r1) / 2, (start + end) / 2);
