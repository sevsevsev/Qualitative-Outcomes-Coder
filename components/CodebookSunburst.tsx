import React, { useEffect, useMemo, useState } from 'react';
import type { ExplorerCodebook } from '../services/codebookExplorer.js';
import { arcCentroid, arcPath, sunburstLayout } from '../services/sunburstLayout.js';
import { explorerHref, hueFor } from './CodebookExplorer.js';

// The landing page's picture of the codebook: domains on the inner ring,
// their codes on the outer ring, drawn from the live codebook. Every slice
// links into the explorer. Until a visitor points at it, taps it or tabs into
// it, it lifts out one random code after another so real code names go by.

const SIZE = 400;
const C = SIZE / 2;
const R = { hole: 94, domain: 136, code: 190 };
const CYCLE_MS = 2200;
/** How far the highlighted code lifts out of the ring. */
const POP = 1.04;

type Active = { kind: 'domain' | 'code'; index: number };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const CodebookSunburst: React.FC<{ data: ExplorerCodebook }> = ({ data }) => {
  const layout = useMemo(() => sunburstLayout(data.domains), [data]);
  const [pointer, setPointer] = useState<Active | null>(null);
  const [animate] = useState(() => !prefersReducedMotion());
  const [auto, setAuto] = useState(() => Math.floor(Math.random() * Math.max(layout.codes.length, 1)));
  // Cycling stops for good once the visitor engages with the chart.
  const [touched, setTouched] = useState(false);
  const cycling = animate && !touched;

  // Jump to a random code, in a different domain from the last one so the
  // highlight moves around the ring.
  useEffect(() => {
    if (!cycling || layout.codes.length < 2) return;
    const codes = layout.codes;
    const id = window.setInterval(() => {
      setAuto(prev => {
        const others = codes.map((_, i) => i).filter(i => codes[i].domainIndex !== codes[prev]?.domainIndex);
        const pool = others.length ? others : codes.map((_, i) => i).filter(i => i !== prev);
        return pool[Math.floor(Math.random() * pool.length)];
      });
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [cycling, layout.codes]);

  const active: Active | null = pointer ?? (cycling ? { kind: 'code', index: auto } : null);
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
    onMouseEnter: () => { setTouched(true); setPointer(a); },
    onMouseLeave: () => setPointer(null),
    onFocus: () => { setTouched(true); setPointer(a); },
    onBlur: () => setPointer(null),
  });

  return (
    <figure className="relative w-full max-w-[440px] mx-auto" onTouchStart={() => setTouched(true)}>
      <style>{`
        @keyframes sb-in { from { opacity: 0; transform: scale(.92) rotate(-8deg); } to { opacity: 1; transform: none; } }
        .sb-slice { transform-origin: ${C}px ${C}px; transition: fill-opacity .35s ease, fill .35s ease, transform .45s cubic-bezier(.3,1.4,.5,1); }
        .sb-animate .sb-slice { animation: sb-in .7s cubic-bezier(.2,.7,.2,1) backwards; }
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
                d={arcPath(C, C, R.domain + 3, R.code, c.start, c.end)}
                fill={isActive ? `hsl(${hue} 62% 46%)` : `hsl(${hue} 70% ${activeDomain === c.domainIndex ? 72 : 80}%)`}
                fillOpacity={dim ? 0.3 : 1}
                stroke="#fff"
                strokeWidth={1.25}
                style={{ animationDelay: `${120 + i * 9}ms`, transform: isActive ? `scale(${POP})` : undefined }}
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
