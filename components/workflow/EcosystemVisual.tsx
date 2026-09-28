import React, { useEffect, useState } from 'react';
import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import { hueFor } from '../CodebookExplorer.js';

// The picture beside the "bigger picture" intro: programs that work apart,
// then the same programs placed at the schools they serve (what the
// Partnerships Dashboard shows today), then what each one aims for, with each
// school's strip of domains showing where no program aims (planned). Programs,
// schools and their domains are illustrative, not real data. Domain count,
// order and hues come from the live codebook.
//
// Like the sunburst and the stepper, it moves on its own until a visitor picks
// a step, then stops for good. Under reduced motion it shows the last step and
// nothing animates.

const STEPS = ['Apart', 'Who works where', 'Aims and gaps'] as const;
const DWELL_MS = [2800, 3200, 6000];

const SCHOOL_X = [80, 230, 380];
const CARD = { y: 262, w: 136, h: 84 };

interface Program {
  schools: number[];
  /** Domain indexes in codebook order (illustrative). */
  domains: number[];
  apart: [number, number];
  placed: [number, number];
}

const PROGRAMS: Program[] = [
  { schools: [0], domains: [0, 3], apart: [60, 52], placed: [42, 178] },
  { schools: [0, 1], domains: [0, 6], apart: [392, 70], placed: [155, 122] },
  { schools: [0], domains: [2, 4, 8], apart: [250, 196], placed: [108, 160] },
  { schools: [1], domains: [0, 1], apart: [142, 112], placed: [205, 180] },
  { schools: [1], domains: [3, 7], apart: [44, 196], placed: [262, 162] },
  { schools: [2], domains: [0, 3], apart: [300, 40], placed: [352, 180] },
  { schools: [2], domains: [0, 6, 9], apart: [196, 30], placed: [418, 160] },
  { schools: [1, 2], domains: [1, 5], apart: [428, 204], placed: [305, 122] },
];

const PART_ORDER = ['Y', 'F', 'A'];
const CELL = 8;
const CELL_GAP = 1;
const PART_GAP = 4;

/** x offset of each domain cell inside a strip, with a small gap between parts. */
const cellX = V3_DOMAINS.map((d, i) => i * (CELL + CELL_GAP) + PART_ORDER.indexOf(d.part) * PART_GAP);
const STRIP_W = cellX[cellX.length - 1] + CELL;

const coverage = SCHOOL_X.map((_, s) => new Set(PROGRAMS.filter(p => p.schools.includes(s)).flatMap(p => p.domains)));

const domainColor = (i: number) => `hsl(${hueFor(i)} 62% 52%)`;

/** A ring split into one arc per domain the program aims for. */
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
            d={domains.length === 1 ? `M0 ${-r}A${r} ${r} 0 1 1 0 ${r}A${r} ${r} 0 1 1 0 ${-r}` : `M${x0} ${y0}A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1} ${y1}`}
            fill="none"
            stroke={domainColor(d)}
            strokeWidth={5}
            strokeLinecap="round"
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
  const [auto, setAuto] = useState(!still);

  useEffect(() => {
    if (!auto) return;
    const t = window.setTimeout(() => setStep(s => (s + 1) % STEPS.length), DWELL_MS[step]);
    return () => window.clearTimeout(t);
  }, [auto, step]);

  const pick = (i: number) => { setAuto(false); setStep(i); };
  const placed = step >= 1;
  const aims = step >= 2;
  const ease = still ? 'none' : undefined;

  return (
    <figure className="eco w-full max-w-[460px] mx-auto">
      <style>{`
        .eco .t{transition:transform .9s cubic-bezier(.22,1,.36,1),opacity .6s cubic-bezier(.22,1,.36,1)}
        .eco .f{transition:opacity .5s cubic-bezier(.22,1,.36,1)}
        .eco .d1{transition-delay:.45s}
        @media (prefers-reduced-motion: reduce){.eco *{transition:none!important}}
      `}</style>
      <svg
        viewBox="0 0 460 360"
        className="w-full h-auto"
        role="img"
        aria-label="An illustration: programs working apart, then placed at the schools they serve, then colored by what they aim for, with gaps where no program aims."
      >
        <defs>
          <pattern id="eco-hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="3" height="3" fill="#fff" />
            <line x1="0" y1="0" x2="0" y2="3" stroke="#94a3b8" strokeWidth="1" />
          </pattern>
        </defs>

        {PROGRAMS.map((p, i) =>
          p.schools.map(s => (
            <line
              key={`${i}-${s}`}
              className={`f ${placed ? 'd1' : ''}`}
              style={{ opacity: placed ? 1 : 0, transition: ease }}
              x1={p.placed[0]} y1={p.placed[1] + 14} x2={SCHOOL_X[s]} y2={CARD.y}
              stroke="#94a3b8" strokeWidth={1.3} strokeDasharray={aims ? undefined : '3 3'}
            />
          )),
        )}

        {SCHOOL_X.map((x, s) => (
          <g key={s} transform={`translate(${x - CARD.w / 2} ${CARD.y})`}>
            <rect width={CARD.w} height={CARD.h} rx={12} fill="#fff" stroke="#e2e8f0" />
            <g transform={`translate(${CARD.w / 2} 26)`} className="text-slate-500"><SchoolGlyph /></g>
            <g transform={`translate(${(CARD.w - STRIP_W) / 2} 46)`} className="f" style={{ opacity: aims ? 1 : 0, transition: ease }}>
              {V3_DOMAINS.map((d, i) => (
                <rect
                  key={d.id}
                  x={cellX[i]} y={0} width={CELL} height={24} rx={1.5}
                  fill={coverage[s].has(i) ? domainColor(i) : 'url(#eco-hatch)'}
                  stroke={coverage[s].has(i) ? 'none' : '#cbd5e1'}
                  strokeWidth={0.8}
                />
              ))}
            </g>
          </g>
        ))}

        {PROGRAMS.map((p, i) => {
          const [x, y] = placed ? p.placed : p.apart;
          return (
            <g key={i} className="t" style={{ transform: `translate(${x}px, ${y}px)`, transition: ease }}>
              <circle r={14} fill="#fff" stroke="#cbd5e1" strokeWidth={1.5} />
              <circle r={4} fill={aims ? '#334155' : '#94a3b8'} className="f" />
              <g className="f" style={{ opacity: aims ? 1 : 0, transition: ease }}><Ring domains={p.domains} r={14} /></g>
            </g>
          );
        })}
      </svg>

      <figcaption className="mt-3 flex flex-col items-center gap-2">
        <div className="inline-flex rounded-full bg-slate-100 p-1 text-xs font-medium">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-pressed={step === i}
              onClick={() => pick(i)}
              className={`rounded-full px-3 py-1 transition-colors ${step === i ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className={`text-xs text-slate-500 text-center transition-opacity ${aims ? 'opacity-100' : 'opacity-0'}`} aria-hidden={!aims}>
          Colors are what programs aim for. Hatched cells are where none do. Illustrative, not real data.
        </p>
      </figcaption>
    </figure>
  );
};

export default EcosystemVisual;
