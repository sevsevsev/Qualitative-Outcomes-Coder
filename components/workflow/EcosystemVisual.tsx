import React, { useEffect, useRef, useState } from 'react';
import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import { hueFor } from '../CodebookExplorer.js';

// The picture beside the "bigger picture" intro, in three steps: programs
// working apart, the same programs placed at the schools they serve (what the
// Partnerships Dashboard shows today), then what they aim for, with each
// school's strip of outcome areas showing where no program lists one (planned).
// Programs and schools are example data; the strip has one cell per domain of
// the live codebook, grouped by part.
//
// Colors are the codebook's domain colors (the same hues as the explorer and
// the sunburst); a hatched cell is a domain no program at that school lists. Each
// step has a short callout with dotted leaders to what it describes. It plays once when it
// scrolls into view, stops on the last step, and offers Replay. Under reduced
// motion it shows the last step and nothing moves.

export const ECO_STEPS = ['Siloed', 'Who works where', 'Mapping collective goals'] as const;
/** When each step is: the office's work so far, the Dashboard today, and the planned outcomes view. */
export const ECO_WHEN = ['Before', 'Today', 'Soon'] as const;
const WHEN_STYLE = [
  { bg: '#e2e8f0', fg: '#334155' },
  { bg: '#dbeafe', fg: '#1d4ed8' },
  { bg: '#fef3c7', fg: '#92400e' },
];
const DWELL_MS = [3400, 3800];

/** Room above the drawing for the callouts. */
const TOP = 50;
const BOTTOM = 4;
const H = 360 + TOP + BOTTOM;

const SCHOOL_X = [80, 230, 380];
const CARD = { y: 256, w: 136, h: 92 };

interface Program {
  schools: number[];
  /** Domain indexes in codebook order (example data). */
  domains: number[];
  apart: [number, number];
  placed: [number, number];
}

const PROGRAMS: Program[] = [
  { schools: [0], domains: [0, 3], apart: [52, 62], placed: [42, 178] },
  { schools: [0, 1], domains: [0, 6], apart: [396, 78], placed: [155, 122] },
  { schools: [0], domains: [2, 4, 8], apart: [250, 196], placed: [108, 160] },
  { schools: [1], domains: [0, 1], apart: [150, 124], placed: [205, 180] },
  { schools: [1], domains: [3, 7], apart: [48, 192], placed: [262, 162] },
  { schools: [2], domains: [0, 3], apart: [306, 56], placed: [352, 180] },
  { schools: [2], domains: [0, 6, 9], apart: [190, 36], placed: [418, 160] },
  { schools: [1, 2], domains: [1, 5], apart: [412, 200], placed: [305, 122] },
];

const PART_ORDER = ['Y', 'F', 'A'];
const CELL = 7;
const CELL_GAP = 2;
const PART_GAP = 5;

/** x offset of each domain cell inside a strip, with a small gap between parts. */
const cellX = V3_DOMAINS.map((d, i) => i * (CELL + CELL_GAP) + PART_ORDER.indexOf(d.part) * PART_GAP);
const STRIP_W = cellX[cellX.length - 1] + CELL;

const coverage = SCHOOL_X.map((_, s) => new Set(PROGRAMS.filter(p => p.schools.includes(s)).flatMap(p => p.domains)));

const domainColor = (i: number) => `hsl(${hueFor(i)} 62% 52%)`;

interface Callout {
  step: number;
  lines: string[];
  /** Baseline of the first line, in picture coordinates. */
  y: number;
  /** Points the dotted leaders run to, in drawing coordinates. */
  to: [number, number][];
}

const LINE_H = 15;
const CHAR_W = 6.1;

const CALLOUTS: Callout[] = [
  {
    step: 0,
    lines: ['Programs working without knowing about each', 'other’s work or their connections to schools'],
    y: 30,
    to: [0, 1, 6].map(i => [PROGRAMS[i].apart[0], PROGRAMS[i].apart[1] - 22]),
  },
  {
    step: 1,
    lines: ['Each program linked to the schools it serves:', 'what the Partnerships Dashboard shows today'],
    y: 30,
    to: [1, 7].map(i => [PROGRAMS[i].placed[0], PROGRAMS[i].placed[1] - 14]),
  },
  {
    step: 2,
    lines: ['Ring colors show the outcome domains', 'each program works toward'],
    y: 30,
    to: [2, 6].map(i => [PROGRAMS[i].placed[0], PROGRAMS[i].placed[1] - 14]),
  },
];

/** Text plus dotted leaders to the parts of the picture it describes. */
const CalloutMark: React.FC<{ c: Callout; show: boolean; none?: string }> = ({ c, show, none }) => {
  const half = (Math.max(...c.lines.map(l => l.length)) * CHAR_W) / 2;
  const from = c.y + (c.lines.length - 1) * LINE_H + 7;
  return (
    <g className="f" style={{ opacity: show ? 1 : 0, transition: none }} aria-hidden>
      {c.to.map(([x, y], k) => {
        const ty = y + TOP;
        const sx = Math.min(Math.max(x, 230 - half + 8), 230 + half - 8);
        return (
          <g key={k}>
            <line x1={sx} y1={from} x2={x} y2={ty} stroke="#64748b" strokeWidth={1.1} strokeDasharray="2 3" />
            <circle cx={x} cy={ty} r={2.2} fill="#64748b" />
          </g>
        );
      })}
      <text x={230} y={c.y} textAnchor="middle" fill="#334155" style={{ font: '500 12.5px system-ui, sans-serif' }}>
        {c.lines.map((l, k) => <tspan key={k} x={230} dy={k ? LINE_H : 0}>{l}</tspan>)}
      </text>
    </g>
  );
};

/** A ring split into one arc per domain the program lists. */
const Ring: React.FC<{ domains: number[]; r: number }> = ({ domains, r }) => {
  const gap = domains.length > 1 ? 0.22 : 0;
  const seg = (Math.PI * 2) / domains.length;
  return (
    <>
      {domains.map((d, k) => {
        const a0 = -Math.PI / 2 + k * seg + gap / 2;
        const a1 = a0 + seg - gap;
        const [x0, y0, x1, y1] = [r * Math.cos(a0), r * Math.sin(a0), r * Math.cos(a1), r * Math.sin(a1)];
        return (
          <path
            key={d}
            d={`M${x0} ${y0}A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1} ${y1}`}
            fill="none" stroke={domainColor(d)} strokeWidth={5} strokeLinecap="round"
          />
        );
      })}
    </>
  );
};

const SchoolGlyph: React.FC = () => (
  <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
    <path d="M-14 6V-4L0-12 14-4V6Z" />
    <path d="M-4 6V0h8v6M0-12v-6l6 2-6 2" />
  </g>
);

const reducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const EcosystemVisual: React.FC = () => {
  const [still] = useState(reducedMotion);
  const [step, setStep] = useState(still ? 2 : 0);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(still);
  const ref = useRef<HTMLElement>(null);

  // Start once, the first time at least half the picture is on screen.
  useEffect(() => {
    if (played || typeof IntersectionObserver === 'undefined') return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setPlaying(true); setPlayed(true); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [played]);

  useEffect(() => {
    if (!playing) return;
    if (step >= ECO_STEPS.length - 1) { setPlaying(false); return; }
    const t = window.setTimeout(() => setStep(s => s + 1), DWELL_MS[step]);
    return () => window.clearTimeout(t);
  }, [playing, step]);

  const pick = (i: number) => { setPlaying(false); setPlayed(true); setStep(i); };
  const replay = () => { setStep(0); setPlaying(true); };
  const placed = step >= 1;
  const lists = step >= 2;
  const none = still ? 'none' : undefined;

  return (
    <figure ref={ref} className="eco w-full max-w-[460px] mx-auto">
      <style>{`
        .eco .t{transition:transform .9s cubic-bezier(.22,1,.36,1)}
        .eco .f{transition:opacity .5s cubic-bezier(.22,1,.36,1),fill .5s,stroke .5s}
        .eco .d1{transition-delay:.45s}
        @media (prefers-reduced-motion: reduce){.eco *{transition:none!important}}
      `}</style>
      <svg viewBox={`0 0 460 ${H}`} className="w-full h-auto" role="img" aria-labelledby="eco-desc">
        <desc id="eco-desc">
          Example, not real data. {ECO_WHEN[0]}, {ECO_STEPS[0]}: eight programs, each walled off on its own, working without knowing about each
          other’s work or their connections to schools. {ECO_WHEN[1]}, {ECO_STEPS[1]}: each program is linked to the schools it serves, which
          is what the Partnerships Dashboard shows today. {ECO_WHEN[2]}, {ECO_STEPS[2]}: each program is ringed with the colors of the outcome
          domains it works toward, and each school shows which domains its programs cover, with the uncovered ones hatched.
        </desc>
        <defs>
          <pattern id="eco-hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="3" height="3" fill="#fff" />
            <line x1="0" y1="0" x2="0" y2="3" stroke="#94a3b8" strokeWidth="1" />
          </pattern>
        </defs>

        <text x={458} y={14} textAnchor="end" className="fill-slate-400" style={{ font: '600 10px system-ui, sans-serif', letterSpacing: '.06em' }}>
          EXAMPLE DATA
        </text>
        {ECO_WHEN.map((w, i) => (
          <g key={w} className="f" style={{ opacity: step === i ? 1 : 0, transition: none }}>
            <rect x={0} y={2} width={56} height={18} rx={9} fill={WHEN_STYLE[i].bg} />
            <text x={28} y={15} textAnchor="middle" fill={WHEN_STYLE[i].fg} style={{ font: '600 10.5px system-ui, sans-serif' }}>{w}</text>
          </g>
        ))}

        <g transform={`translate(0 ${TOP})`}>
        {PROGRAMS.map((p, i) =>
          p.schools.map(s => (
            <line
              key={`${i}-${s}`}
              className={`f ${placed ? 'd1' : ''}`}
              style={{ opacity: placed ? 1 : 0, transition: none }}
              x1={p.placed[0]} y1={p.placed[1] + 12} x2={SCHOOL_X[s]} y2={CARD.y}
              stroke="#94a3b8" strokeWidth={1.3}
            />
          )),
        )}

        {SCHOOL_X.map((x, s) => (
          <g key={s} transform={`translate(${x - CARD.w / 2} ${CARD.y})`}>
            <rect width={CARD.w} height={CARD.h} rx={12} fill="#fff" stroke="#e2e8f0" />
            <g transform={`translate(${CARD.w / 2} 22)`} className="text-slate-500"><SchoolGlyph /></g>
            <text x={CARD.w / 2} y={46} textAnchor="middle" className="fill-slate-600" style={{ font: '600 11px system-ui, sans-serif' }}>
              School {s + 1}
            </text>
            <g transform={`translate(${(CARD.w - STRIP_W) / 2} 58)`} className="f" style={{ opacity: lists ? 1 : 0, transition: none }}>
              {V3_DOMAINS.map((d, i) => {
                const on = coverage[s].has(i);
                return (
                  <rect
                    key={d.id}
                    x={cellX[i]} y={0} width={CELL} height={20} rx={2}
                    fill={on ? domainColor(i) : 'url(#eco-hatch)'}
                    stroke={on ? 'none' : '#cbd5e1'}
                    strokeWidth={1.2}
                  />
                );
              })}
            </g>
          </g>
        ))}

        {PROGRAMS.map((p, i) => {
          const [x, y] = placed ? p.placed : p.apart;
          return (
            <g key={i} className="t" style={{ transform: `translate(${x}px, ${y}px)`, transition: none }}>
              {/* A walled-off box around each program while they work apart. */}
              <rect
                x={-22} y={-22} width={44} height={44} rx={10}
                fill="none" stroke="#cbd5e1" strokeWidth={1.2} strokeDasharray="3 3"
                className="f" style={{ opacity: placed ? 0 : 1, transition: none }}
              />
              <circle r={12} fill="#fff" stroke="#94a3b8" strokeWidth={1.6} />
              <g className="f" style={{ opacity: lists ? 1 : 0, transition: none }}><Ring domains={p.domains} r={12} /></g>
            </g>
          );
        })}
        </g>

        {CALLOUTS.map((c, k) => <CalloutMark key={k} c={c} show={step === c.step} none={none} />)}
      </svg>

      <figcaption className="mt-3 flex flex-col items-center gap-2.5">
        <div className="flex items-center justify-center gap-2 max-w-full">
          <div className="grid grid-cols-3 rounded-3xl bg-slate-100 p-1 text-xs font-medium" role="group" aria-label="Steps of the picture">
            {ECO_STEPS.map((label, i) => (
              <button
                key={label}
                type="button"
                aria-pressed={step === i}
                onClick={() => pick(i)}
                className={`rounded-2xl px-2 sm:px-3 py-1 leading-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  step === i ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.07em]" style={{ color: WHEN_STYLE[i].fg }}>{ECO_WHEN[i]}</span>
                {label}
              </button>
            ))}
          </div>
          {!still && played && !playing && (
            <button
              type="button"
              onClick={replay}
              aria-label="Replay the picture"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path d="M4 10a6 6 0 1 0 2-4.5M4 3.5V7h3.5" />
              </svg>
            </button>
          )}
        </div>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-600">
          <li className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden><circle cx="6" cy="6" r="4.5" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" /></svg>
            Program
          </li>
          <li className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 30 12" className="w-[30px] h-3" aria-hidden>
              {[0, 3, 6].map((d, k) => <rect key={d} x={1 + k * 10} y="1" width="7" height="10" rx="1.5" fill={domainColor(d)} />)}
            </svg>
            A program lists an outcome in this domain
          </li>
          <li className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden><rect x="2.5" y="1" width="7" height="10" rx="1.5" fill="url(#eco-hatch)" stroke="#cbd5e1" strokeWidth="1" /></svg>
            No program lists one yet
          </li>
        </ul>
      </figcaption>
    </figure>
  );
};

export default EcosystemVisual;
