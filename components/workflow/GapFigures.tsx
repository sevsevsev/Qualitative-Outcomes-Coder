import React from 'react';

// Small example grids for the "shared goals and two kinds of gap" cards on the
// bigger picture page. Columns are programs (at one school) or schools (across
// the city); rows are outcomes. Marks match the hero and the stepper's stage 6:
// a blue dot = a program aims for this outcome, an amber outline = a gap.
// Example data only, and no numbers, so nothing reads as a finding.

type Kind = 'shared' | 'content' | 'programming';

const FIGS: Record<Kind, { scope: string; cols: string[]; rows: boolean[][]; row: number }> = {
  // Two programs at one school share an outcome.
  shared: {
    scope: 'Programs at one school',
    cols: ['A', 'B', 'C', 'D'],
    rows: [
      [true, false, false, true],
      [false, true, true, false],
      [false, false, true, false],
      [true, false, false, false],
    ],
    row: 1,
  },
  // Across the city, few programs aim for one outcome.
  content: {
    scope: 'Schools across the city',
    cols: ['1', '2', '3', '4', '5', '6'],
    rows: [
      [true, true, false, true, true, true],
      [true, false, true, true, false, true],
      [false, false, false, true, false, false],
      [true, true, true, false, true, true],
    ],
    row: 2,
  },
  // At one school, no program aims for one outcome.
  programming: {
    scope: 'Programs at one school',
    cols: ['A', 'B', 'C', 'D'],
    rows: [
      [true, true, false, true],
      [false, true, true, false],
      [false, false, false, false],
      [true, false, true, true],
    ],
    row: 2,
  },
};

export const GapFigure: React.FC<{ kind: Kind }> = ({ kind }) => {
  const { scope, cols, rows, row } = FIGS[kind];
  const gap = kind !== 'shared';
  const cell = 22;
  const labelW = 68;
  const w = labelW + cols.length * cell;
  const h = 18 + rows.length * cell;
  return (
    <figure className="rounded-xl bg-slate-50 px-3 pt-2.5 pb-2">
      <div className="flex items-baseline justify-between gap-2 text-[10.5px] font-semibold uppercase tracking-[0.07em] text-slate-500">
        <span>{scope}</span>
        <span className="text-slate-400">Example</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="mt-1.5 max-w-full h-auto" aria-hidden>
        {cols.map((c, j) => (
          <text key={c} x={labelW + j * cell + cell / 2} y={11} textAnchor="middle" fill="#64748b" style={{ font: '600 10px system-ui, sans-serif' }}>{c}</text>
        ))}
        {rows.map((r, i) => {
          const y = 18 + i * cell;
          const hl = i === row;
          return (
            <g key={i}>
              {hl && (
                <rect
                  x={1} y={y + 1} width={w - 2} height={cell - 2} rx={6}
                  fill={gap ? '#fffbeb' : '#eff6ff'} stroke={gap ? '#f59e0b' : '#2563eb'} strokeWidth={1.5}
                />
              )}
              <text x={6} y={y + cell / 2 + 3.5} fill={hl ? (gap ? '#b45309' : '#1d4ed8') : '#94a3b8'} style={{ font: `${hl ? 600 : 500} 10px system-ui, sans-serif` }}>
                Outcome {i + 1}
              </text>
              {r.map((on, j) => (
                <circle
                  key={j}
                  cx={labelW + j * cell + cell / 2} cy={y + cell / 2} r={on ? 4.5 : 2}
                  fill={on ? '#2563eb' : '#cbd5e1'} opacity={on && !hl ? 0.75 : 1}
                />
              ))}
            </g>
          );
        })}
      </svg>
    </figure>
  );
};
