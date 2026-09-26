import React, { useCallback, useEffect, useRef, useState } from 'react';
import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import { hueFor } from '../CodebookExplorer.js';
import {
  EXAMPLE_ROWS, EXAMPLE_SCHOOL, FOLLOWED_STATEMENT, WORKFLOW_STAGES, domainOf, findV3Code,
} from './workflowStages.js';

// The six stages of the logic model project as an auto-advancing stepper, with
// one example statement followed from a partner's logic model to the planned
// school view. Like the landing page's sunburst, it moves on its own until a
// visitor clicks or presses a key, then stops for good; hovering the picture
// only pauses it. Under reduced motion it starts paused and nothing animates.

const DWELL_MS = 7000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const Chip: React.FC<{ id: string; suggested?: boolean; short?: boolean }> = ({ id, suggested, short }) => {
  const code = findV3Code(id);
  const hue = hueFor(domainOf(id)?.index ?? 0);
  return (
    <span
      className="wf-grow inline-flex flex-wrap items-baseline gap-x-1.5 rounded-md px-2 py-0.5 text-[13px] font-medium leading-snug max-w-full"
      style={
        suggested
          ? { color: `hsl(${hue} 50% 30%)`, backgroundColor: '#fff', boxShadow: `inset 0 0 0 1px hsl(${hue} 55% 82%)` }
          : { color: `hsl(${hue} 50% 30%)`, backgroundColor: `hsl(${hue} 70% 95%)` }
      }
    >
      <span className="min-w-0">{code ? (short ? code.short : code.name) : id}</span>
      {!short && <span className="text-[11px] font-semibold opacity-70 tabular-nums shrink-0">{id}</span>}
    </span>
  );
};

const Tick: React.FC = () => (
  <span className="wf-grow shrink-0 w-5 h-5 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center" aria-label="Checked">
    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M2.5 6.5l2.3 2.3L9.5 3.8" />
    </svg>
  </span>
);

const Table: React.FC<{ head: string[]; cols: string; children: React.ReactNode }> = ({ head, cols, children }) => (
  <div className="w-full rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,.05),0_8px_24px_rgba(15,23,42,.06)] overflow-hidden text-[13.5px]">
    <div className={`grid ${cols} text-[10.5px] font-semibold uppercase tracking-[0.07em] text-slate-400`}>
      {head.map((h, i) => <span key={i} className="px-3.5 py-2.5">{h}</span>)}
    </div>
    {children}
  </div>
);

const Row: React.FC<{ cols: string; followed?: boolean; i?: number; children: React.ReactNode }> = ({ cols, followed, i = 0, children }) => (
  <div
    className={`wf-up grid ${cols} items-center border-t border-slate-100 [&>*]:px-3.5 [&>*]:py-2.5 [&>*]:min-w-0 ${
      followed ? 'bg-blue-50 shadow-[inset_3px_0_0_#2563eb]' : ''
    }`}
    style={{ '--i': i } as React.CSSProperties}
  >
    {children}
  </div>
);

const Bars: React.FC<{ widths: number[] }> = ({ widths }) => (
  <div className="flex flex-col gap-1">{widths.map((w, i) => <i key={i} className="block h-1.5 rounded bg-slate-200" style={{ width: `${w}%` }} />)}</div>
);

const StageVisual: React.FC<{ stage: number }> = ({ stage }) => {
  const codedCols = 'grid-cols-[48px_minmax(0,1fr)_minmax(0,1.05fr)] sm:grid-cols-[56px_minmax(0,1fr)_minmax(0,1.05fr)]';
  switch (stage) {
    case 0:
      return (
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {['Partner onboarding form', 'Email', 'Other ways'].map((c, i) => (
              <span key={c} className="wf-up text-xs font-medium text-slate-600 bg-white rounded-full px-3 py-1 shadow-sm" style={{ '--i': i } as React.CSSProperties}>{c}</span>
            ))}
          </div>
          <div className="flex gap-2 sm:gap-3.5 justify-center">
            {['A', 'B', 'C'].map((p, i) => (
              <div key={p} className="wf-up w-1/3 min-w-0 bg-white rounded-xl p-2.5 sm:p-3.5 shadow-[0_1px_2px_rgba(15,23,42,.05),0_8px_24px_rgba(15,23,42,.06)] flex flex-col gap-2" style={{ '--i': i + 2 } as React.CSSProperties}>
                <div className="text-[13px] font-semibold">Program {p}</div>
                <div className="text-[10px] uppercase tracking-[0.08em] text-slate-400 font-semibold">Activities</div>
                <Bars widths={[85 - i * 10]} />
                <div className="text-[10px] uppercase tracking-[0.08em] text-slate-400 font-semibold">Outcomes</div>
                {p === 'A'
                  ? <div className="text-xs leading-snug bg-blue-50 rounded-md px-2 py-1.5 shadow-[inset_3px_0_0_#2563eb]">{FOLLOWED_STATEMENT}</div>
                  : <Bars widths={[95, 60, 80].slice(0, 3 - i + 1)} />}
              </div>
            ))}
          </div>
        </div>
      );
    case 1: {
      const cols = 'grid-cols-[88px_minmax(0,1fr)] sm:grid-cols-[130px_minmax(0,1fr)_110px]';
      return (
        <Table head={['Section', 'Content']} cols={cols}>
          <Row cols={cols} i={0}><span className="text-slate-500">Inputs, activities, outputs</span><span className="text-slate-500">Teaching artists · weekly sessions · students served</span><span className="hidden sm:block" /></Row>
          <Row cols={cols} i={1} followed><span>Short-term outcome</span><span>{FOLLOWED_STATEMENT}</span><span className="text-xs font-semibold text-blue-700 max-sm:col-start-2 max-sm:!pt-0">To the coder →</span></Row>
          <Row cols={cols} i={2}><span>Long-term outcome</span><span>Youth will gain confidence speaking in front of groups.</span><span className="text-xs font-semibold text-blue-700 max-sm:col-start-2 max-sm:!pt-0">To the coder →</span></Row>
          <Row cols={cols} i={3}><span className="text-slate-500">Unmapped</span><span className="text-slate-500">Text the tool could not place</span><span className="max-sm:col-start-2 max-sm:!pt-0"><b className="text-[11px] font-semibold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5 whitespace-nowrap">Needs review</b></span></Row>
        </Table>
      );
    }
    case 2:
      return (
        <Table head={['Prog.', 'Outcome', '✦ Suggested code']} cols={codedCols}>
          {EXAMPLE_ROWS.map((r, i) => (
            <Row key={r.text} cols={codedCols} followed={r.followed} i={i}>
              <span>{r.program}</span>
              <span>{r.text}{i === 0 && <span className="block text-[11.5px] font-semibold text-blue-700 mt-0.5">1 statement → 2 outcomes</span>}</span>
              <span><Chip id={r.suggested} suggested /></span>
            </Row>
          ))}
        </Table>
      );
    case 3:
      return (
        <div className="w-full flex flex-col gap-3">
          <span className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white rounded-full px-3 py-1 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
            Reviewer
          </span>
          <Table head={['Prog.', 'Outcome', 'Checked code']} cols={codedCols}>
            {EXAMPLE_ROWS.map((r, i) => {
              const changed = r.code !== r.suggested;
              return (
                <Row key={r.text} cols={codedCols} followed={r.followed} i={i}>
                  <span>{r.program}</span>
                  <span>{r.text}{changed && <span className="block text-[11.5px] font-semibold text-blue-700 mt-0.5">Changed by the reviewer</span>}</span>
                  <span className="flex items-center gap-2">
                    <Tick />
                    <span className="flex flex-col gap-0.5 min-w-0">
                      <Chip id={r.code} />
                      {changed && <span className="text-[11.5px] text-slate-500 line-through">{findV3Code(r.suggested)?.name} (suggested)</span>}
                    </span>
                  </span>
                </Row>
              );
            })}
          </Table>
        </div>
      );
    case 4: {
      const cols = 'grid-cols-[48px_minmax(0,1fr)_minmax(0,1fr)] sm:grid-cols-[56px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,.8fr)]';
      return (
        <Table head={['Prog.', 'Outcome', 'Code', 'Who changes']} cols={cols}>
          {EXAMPLE_ROWS.map((r, i) => (
            <Row key={r.text} cols={cols} followed={r.followed} i={i}>
              <span>{r.program}</span>
              <span>{r.text}</span>
              <span><Chip id={r.code} short /></span>
              <span className="hidden sm:block text-slate-500">{domainOf(r.code)?.domain.part === 'F' ? 'Families' : 'Young people'}</span>
            </Row>
          ))}
        </Table>
      );
    }
    default: {
      const programs = Object.keys(EXAMPLE_SCHOOL);
      const followed = new Set(EXAMPLE_ROWS.filter(r => r.followed).map(r => domainOf(r.code)!.domain.id));
      const parts: [string, string][] = [['Y', 'Young people'], ['F', 'Families'], ['A', 'Staff & systems']];
      let k = 0;
      return (
        <div className="w-full flex flex-col items-center gap-2">
          <div className="text-center">
            <div className="font-semibold">Example school</div>
            <div className="text-xs text-slate-500">What its {programs.length} partner programs aim for</div>
          </div>
          <div className="max-w-full overflow-x-auto">
            <table className="bg-white rounded-xl shadow-[0_1px_2px_rgba(15,23,42,.05),0_8px_24px_rgba(15,23,42,.06)] text-[12.5px] border-separate [border-spacing:4px_2px] px-3 py-2">
              <thead>
                <tr>
                  <th />
                  {programs.map(p => <th key={p} scope="col" className={`text-[11.5px] font-semibold pb-1 ${p === 'A' ? 'text-blue-700' : 'text-slate-500'}`}>{p}</th>)}
                </tr>
              </thead>
              <tbody>
                {parts.map(([part, label]) => (
                  <React.Fragment key={part}>
                    <tr><th colSpan={programs.length + 1} scope="rowgroup" className="text-left text-[10.5px] font-semibold uppercase tracking-[0.07em] text-slate-400 pt-1.5">{label}</th></tr>
                    {V3_DOMAINS.filter(d => d.part === part).map(d => {
                      const gap = !programs.some(p => EXAMPLE_SCHOOL[p].includes(d.id));
                      return (
                        <tr key={d.id}>
                          <th scope="row" className={`text-left font-medium pr-3 whitespace-nowrap ${gap ? 'text-amber-700' : 'text-slate-600'}`}>{d.name}</th>
                          {programs.map(p => {
                            const on = EXAMPLE_SCHOOL[p].includes(d.id);
                            const ring = p === 'A' && followed.has(d.id);
                            return (
                              <td
                                key={p}
                                title={`Program ${p} · ${d.name}: ${on ? 'has an outcome' : 'none listed'}`}
                                className={`w-7 h-5 text-center rounded-md ${gap ? 'bg-amber-50 shadow-[inset_0_0_0_1.5px_#f59e0b]' : p === 'A' ? 'bg-blue-50' : ''}`}
                              >
                                {on && (
                                  <i
                                    className={`wf-dot inline-block w-2.5 h-2.5 rounded-full bg-blue-600 ${ring ? 'ring-2 ring-offset-2 ring-blue-600' : 'opacity-80'}`}
                                    style={{ '--i': k++ } as React.CSSProperties}
                                  />
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs font-medium text-amber-700">Outlined row: no program at this school lists an outcome there</div>
        </div>
      );
    }
  }
};

const WorkflowStepper: React.FC = () => {
  const [animate] = useState(() => !prefersReducedMotion());
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(animate);
  const [hover, setHover] = useState(false);
  const [progress, setProgress] = useState(0);
  const elapsed = useRef(0);
  const n = WORKFLOW_STAGES.length;
  const stage = WORKFLOW_STAGES[cur];

  const go = useCallback((i: number) => { elapsed.current = 0; setProgress(0); setCur(((i % n) + n) % n); }, [n]);
  const stopAndGo = (i: number) => { setPlaying(false); go(i); };

  useEffect(() => {
    if (!playing || hover) return;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      if (!document.hidden) elapsed.current += now - last;
      last = now;
      setProgress(Math.min(1, elapsed.current / DWELL_MS));
      if (elapsed.current >= DWELL_MS) { go(cur + 1); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, hover, cur, go]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') stopAndGo(cur + 1);
    else if (e.key === 'ArrowLeft') stopAndGo(cur - 1);
    else if (e.key === 'Home') stopAndGo(0);
    else if (e.key === 'End') stopAndGo(n - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-5" onKeyDown={onKey}>
      <style>{`
        @keyframes wfUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes wfGrow{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:none}}
        .wf-anim .wf-up{animation:wfUp .42s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(.08s + var(--i,0)*.08s)}
        .wf-anim .wf-grow{animation:wfGrow .42s cubic-bezier(.22,1,.36,1) both;animation-delay:.35s}
        .wf-anim .wf-dot{animation:wfGrow .35s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(.15s + var(--i,0)*.025s)}
        @media (prefers-reduced-motion: reduce){.wf-anim *{animation:none!important}}
      `}</style>

      {/* Rail */}
      <div className="flex flex-col gap-2.5">
        <div className="sm:hidden text-xs font-semibold text-slate-500">Stage {cur + 1} of {n}</div>
        <ol role="tablist" aria-label="Stages of the logic model project" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {WORKFLOW_STAGES.map((s, i) => {
            const active = i === cur;
            return (
              <li key={s.key} className={`${active ? '' : 'hidden sm:block'}`}>
                <button
                  role="tab"
                  id={`wf-tab-${i}`}
                  aria-selected={active}
                  aria-controls="wf-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => stopAndGo(i)}
                  className={`w-full h-full text-left flex flex-col gap-1.5 rounded-xl p-3 border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    s.planned ? 'border-dashed border-amber-400' : active ? 'border-blue-200' : 'border-transparent'
                  } ${active ? 'bg-white shadow-sm' : 'hover:bg-white'}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-semibold tabular-nums flex items-center justify-center ${
                      i <= cur ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 ring-1 ring-inset ring-slate-200'
                    } ${active ? 'ring-4 ring-blue-50' : ''}`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 leading-tight">{s.label}</span>
                  <span className={`text-xs leading-snug ${s.planned ? 'text-amber-700' : 'text-slate-500'}`}>{s.who}{s.planned ? ' · planned' : ''}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="grid grid-cols-6 gap-2.5" aria-hidden>
          {WORKFLOW_STAGES.map((s, i) => (
            <span key={s.key} className="h-[3px] rounded bg-slate-200 overflow-hidden">
              <span className="block h-full bg-blue-600 rounded" style={{ width: `${i < cur ? 100 : i === cur ? progress * 100 : 0}%` }} />
            </span>
          ))}
        </div>
      </div>

      {/* Stage */}
      <div className="rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,.05),0_8px_24px_rgba(15,23,42,.06)] p-4 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-blue-50 px-3.5 py-2.5 text-sm" aria-live="polite">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-700">Following one statement</span>
          <q className="font-medium text-slate-900">{FOLLOWED_STATEMENT}</q>
          <span className="sm:ml-auto font-semibold text-blue-700">{stage.follow}</span>
        </div>

        <div
          id="wf-panel"
          role="tabpanel"
          aria-labelledby={`wf-tab-${cur}`}
          key={cur}
          className={`grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center ${animate ? 'wf-anim' : ''}`}
        >
          <div
            className={`relative order-2 lg:order-1 rounded-2xl p-3 sm:p-7 min-h-[300px] flex items-center justify-center ${
              stage.planned ? 'pt-12 sm:pt-12 bg-[repeating-linear-gradient(135deg,#fffbeb_0_10px,#f1f4f9_10px_20px)]' : 'bg-[#f1f4f9]'
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onPointerDown={() => setPlaying(false)}
            role="img"
            aria-label={`Illustration for stage ${cur + 1}: ${stage.title}`}
          >
            {stage.planned && (
              <span className="absolute top-3.5 right-3.5 text-[11.5px] font-semibold rounded-full bg-amber-100 text-amber-800 px-2.5 py-1">Planned · illustrative data</span>
            )}
            {playing && hover && (
              <span className="absolute top-3.5 left-3.5 text-[11.5px] font-semibold rounded-full bg-white text-slate-500 px-2.5 py-1 shadow-sm">Paused</span>
            )}
            <StageVisual stage={cur} />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-3.5 min-w-0">
            <div className={`text-xs font-semibold uppercase tracking-[0.08em] ${stage.planned ? 'text-amber-700' : 'text-blue-600'}`}>
              Stage {cur + 1}{stage.planned ? ' · planned' : ''}
            </div>
            <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight leading-tight text-slate-900">{stage.title}</h3>
            <p className="text-slate-600 leading-relaxed">{stage.lead}</p>
            <dl className="flex flex-col">
              {stage.facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[112px_1fr] gap-3 py-2.5 border-t border-slate-100 items-baseline">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-400">{k}</dt>
                  <dd className="text-sm font-medium text-slate-900">{v}</dd>
                </div>
              ))}
            </dl>
            {stage.planned && (
              <p className="text-sm rounded-lg bg-amber-50 px-3.5 py-2.5 text-slate-800">
                A gap means no program at the school wrote that outcome down. It does not mean no program achieves it.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <button onClick={() => stopAndGo(cur - 1)} aria-label="Previous stage" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              <svg viewBox="0 0 20 20" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden><path d="M12.5 4.5L7 10l5.5 5.5" /></svg>
            </button>
            <button onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'} className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              {playing
                ? <svg viewBox="0 0 20 20" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden><rect x="5" y="4" width="3.5" height="12" rx="1" /><rect x="11.5" y="4" width="3.5" height="12" rx="1" /></svg>
                : <svg viewBox="0 0 20 20" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden><path d="M6 4.2v11.6c0 .6.7 1 1.2.7l9-5.8c.5-.3.5-1 0-1.3l-9-5.8C6.7 3.2 6 3.6 6 4.2z" /></svg>}
            </button>
            <button onClick={() => stopAndGo(cur + 1)} aria-label="Next stage" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              <svg viewBox="0 0 20 20" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden><path d="M7.5 4.5L13 10l-5.5 5.5" /></svg>
            </button>
          </div>
          <span className="hidden sm:inline text-xs text-slate-500">← → to step</span>
        </div>
      </div>
    </div>
  );
};

export default WorkflowStepper;
