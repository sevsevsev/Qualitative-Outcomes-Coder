import React, { useEffect, useMemo, useState } from 'react';
import type { ExplorerCodebook } from '../services/codebookExplorer.js';
import { arcCentroid, arcPath, sunburstLayout } from '../services/sunburstLayout.js';
import { explorerHref, hueFor } from './CodebookExplorer.js';

// The landing page's picture of the codebook: domains on the inner ring,
// their codes on the outer ring, drawn from the live codebook. Every slice
// links into the explorer. While nobody is pointing at it, it steps through
// the codes one at a time so visitors see real code names go by.

const SIZE = 400;
const C = SIZE / 2;
const R = { hole: 94, domain: 136, code: 196 };
const CYCLE_MS = 2600;

type Active = { kind: 'domain' | 'code'; index: number };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const CodebookSunburst: React.FC<{ data: ExplorerCodebook }> = ({ data }) => {
  const layout = useMemo(() => sunburstLayout(data.domains), [data]);
  const [pointer, setPointer] = useState<Active | null>(null);
  const [auto, setAuto] = useState(0);
  const [animate] = useState(() => !prefersReducedMotion());

  // Step through the codes with a stride that visits every one in a mixed order.
  useEffect(() => {
    if (!animate || pointer || layout.codes.length < 2) return;
    const n = layout.codes.length;
    let stride = Math.max(1, Math.round(n * 0.38));
    const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
    while (gcd(stride, n) !== 1) stride++;
    const id = window.setInterval(() => setAuto(i => (i + stride) % n), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [animate, pointer, layout.codes.length]);

  const active: Active | null = pointer ?? (animate ? { kind: 'code', index: auto } : null);
  const activeDomain =
    active?.kind === 'domain' ? active.index : active ? layout.codes[active.index]?.domainIndex : undefined;
  const codeCount = layout.codes.length;

  const center = (() => {
    if (!active) return null;
    if (active.kind === 'domain') {
      const d = layout.domains[active.index];
      const n = data.domains[active.index].subcategories.length;
      return { eyebrow: `Domain ${d.number}`, title: d.title, meta: `${n} code${n === 1 ? '' : 's'}` };
    }
    const c = layout.codes[active.index];
    const d = layout.domains[c.domainIndex];
    return { eyebrow: `Code ${c.number}`, title: c.title, meta: d.title };
  })();

  const on = (a: Active) => ({
    onMouseEnter: () => setPointer(a),
    onMouseLeave: () => setPointer(null),
    onFocus: () => setPointer(a),
    onBlur: () => setPointer(null),
  });

  return (
    <figure className="relative w-full max-w-[440px] mx-auto">
      <style>{`
        @keyframes sb-in { from { opacity: 0; transform: scale(.92) rotate(-8deg); } to { opacity: 1; transform: none; } }
        .sb-slice { transform-origin: ${C}px ${C}px; transition: fill-opacity .35s ease, fill .35s ease; }
        .sb-animate .sb-slice { animation: sb-in .7s cubic-bezier(.2,.7,.2,1) both; }
        .sb-slice:focus { outline: none; }
        .sb-link:focus-visible .sb-slice { stroke: #0f172a; stroke-width: 2.5; }
        @keyframes sb-fade { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }
        .sb-animate ~ div .sb-fade { animation: sb-fade .4s ease both; }
      `}</style>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className={`w-full h-auto ${animate ? 'sb-animate' : ''}`}
        role="group"
        aria-label={`${data.domains.length} domains and ${codeCount} codes. Each slice links to its page in the codebook.`}
      >
        {layout.codes.map((c, i) => {
          const hue = hueFor(c.domainIndex);
          const isActive = active?.kind === 'code' && active.index === i;
          const dim = pointer && activeDomain !== c.domainIndex;
          return (
            <a key={c.number} href={explorerHref(data.id, c.number)} className="sb-link" aria-label={`Code ${c.number}: ${c.title}`} {...on({ kind: 'code', index: i })}>
              <path
                className="sb-slice"
                d={arcPath(C, C, R.domain + 3, isActive ? R.code + 4 : R.code, c.start, c.end)}
                fill={isActive ? `hsl(${hue} 62% 46%)` : `hsl(${hue} 70% ${activeDomain === c.domainIndex ? 72 : 80}%)`}
                fillOpacity={dim ? 0.3 : 1}
                stroke="#fff"
                strokeWidth={1.25}
                style={{ animationDelay: `${120 + i * 9}ms` }}
              />
            </a>
          );
        })}
        {layout.domains.map((d, i) => {
          const hue = hueFor(i);
          const [x, y] = arcCentroid(C, C, R.hole, R.domain, d.start, d.end);
          const isActive = activeDomain === i;
          return (
            <a key={d.number} href={explorerHref(data.id, `d/${d.number}`)} className="sb-link" aria-label={`Domain ${d.number}: ${d.title}`} {...on({ kind: 'domain', index: i })}>
              <path
                className="sb-slice"
                d={arcPath(C, C, R.hole, R.domain, d.start, d.end)}
                fill={`hsl(${hue} ${isActive ? 60 : 55}% ${isActive ? 42 : 52}%)`}
                fillOpacity={pointer && !isActive ? 0.35 : 1}
                stroke="#fff"
                strokeWidth={2}
                style={{ animationDelay: `${i * 40}ms` }}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="pointer-events-none select-none"
                fill="#fff"
                fontSize={13}
                fontWeight={600}
                opacity={pointer && !isActive ? 0.6 : 1}
              >
                {d.number}
              </text>
            </a>
          );
        })}
      </svg>

      {/* Centre readout: what the highlighted slice is. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[35%] text-center">
          {center ? (
            <div key={`${active?.kind}-${active?.index}`} className="sb-fade">
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">{center.eyebrow}</div>
              <div className="mt-0.5 sm:mt-1 text-[12px] sm:text-[15px] font-semibold leading-snug text-slate-900 line-clamp-3">{center.title}</div>
              <div className="mt-1 hidden sm:block text-xs text-slate-500 leading-snug line-clamp-2">{center.meta}</div>
            </div>
          ) : (
            <div>
              <div className="text-3xl font-semibold text-slate-900 tabular-nums">{codeCount}</div>
              <div className="text-xs text-slate-500">codes in {data.domains.length} domains</div>
            </div>
          )}
        </div>
      </div>

      <figcaption className="mt-3 text-center text-sm text-slate-500">
        Each outer slice is a code. Select one to open it in the codebook.
      </figcaption>
    </figure>
  );
};

export default CodebookSunburst;
