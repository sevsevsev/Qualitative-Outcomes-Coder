import React, { useRef, useState } from 'react';
import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import { hueFor } from '../CodebookExplorer.js';
import {
  CHAPTERS, EXAMPLE_ROWS, EXAMPLE_SCHOOL, FOLLOWED_STATEMENT, WORKFLOW_STAGES, domainOf, findV3Code,
} from './workflowStages.js';

// The six stages of the logic model project as a carousel the visitor moves
// through (tabs, previous/next, arrow keys, swipe), following one example
// statement from a partner's logic model to the planned school view. Each
// stage says what happens and why it matters. Nothing runs on a timer; each
// picture plays a short entrance when its stage opens, and not at all under
// reduced motion.

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
  const codedCols = 'grid-cols-[62px_minmax(0,1fr)_minmax(0,1.05fr)] sm:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.05fr)]';
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
          <Row cols={cols} i={0}><span className="text-slate-500">Activities, outputs <b className="block text-[10.5px] font-semibold uppercase tracking-[0.06em] text-slate-400">Not coded</b></span><span className="text-slate-500">Teaching artists · weekly sessions · students served</span><span className="hidden sm:block" /></Row>
          <Row cols={cols} i={1} followed><span>Short-term outcome</span><span>{FOLLOWED_STATEMENT}</span><span className="text-xs font-semibold text-blue-700 max-sm:col-start-2 max-sm:!pt-0">Gets a code →</span></Row>
          <Row cols={cols} i={2}><span>Long-term outcome</span><span>Youth will gain confidence speaking in front of groups.</span><span className="text-xs font-semibold text-blue-700 max-sm:col-start-2 max-sm:!pt-0">Gets a code →</span></Row>
          <Row cols={cols} i={3}><span className="text-slate-500">Couldn’t place</span><span className="text-slate-500">Text the tool could not place</span><span className="max-sm:col-start-2 max-sm:!pt-0"><b className="text-[11px] font-semibold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5 whitespace-nowrap">Needs review</b></span></Row>
        </Table>
      );
    }
    case 2:
      return (
        <Table head={['Program', 'Outcome', '✦ Suggested code']} cols={codedCols}>
          {EXAMPLE_ROWS.map((r, i) => (
            <Row key={r.text} cols={codedCols} followed={r.followed} i={i}>
              <span>{r.program}</span>
              <span>{r.text}{i === 0 && <span className="block text-[11.5px] font-semibold text-blue-700 mt-0.5">1 sentence → 2 outcomes</span>}</span>
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
          <Table head={['Program', 'Outcome', 'Checked code']} cols={codedCols}>
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
      const cols = 'grid-cols-[62px_minmax(0,1fr)_minmax(0,1fr)] sm:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,.8fr)]';
      return (
        <Table head={['Program', 'Outcome', 'Code', 'About']} cols={cols}>
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
          <div className="text-xs font-medium text-amber-700">Outlined row: no program at this school lists an outcome there. Ringed: the two outcomes you followed.</div>
        </div>
      );
    }
  }
};

const ANIM_CSS = `
  @keyframes wfUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  @keyframes wfGrow{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:none}}
  .wf-anim .wf-up{animation:wfUp .42s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(.08s + var(--i,0)*.08s)}
  .wf-anim .wf-grow{animation:wfGrow .42s cubic-bezier(.22,1,.36,1) both;animation-delay:.35s}
  .wf-anim .wf-dot{animation:wfGrow .35s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(.15s + var(--i,0)*.025s)}
  @media (prefers-reduced-motion: reduce){.wf-anim *{animation:none!important}}
`;

const chapterOf = (i: number) => CHAPTERS.findIndex(([, from, to]) => i >= from && i <= to);

/** The overview doubles as the carousel's tabs: stages 1–5 in use today, stage 6 planned. */
const Overview: React.FC<{ cur: number; onPick: (i: number) => void }> = ({ cur, onPick }) => {
  const Item = (i: number) => {
    const s = WORKFLOW_STAGES[i];
    const active = i === cur;
    return (
      <button
        type="button"
        role="tab"
        id={`wf-tab-${i}`}
        aria-selected={active}
        aria-controls="wf-slide"
        tabIndex={active ? 0 : -1}
        onClick={() => onPick(i)}
        className={`group w-full h-full text-left flex items-start gap-2.5 rounded-xl p-3 ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition ${
          active ? (s.planned ? 'bg-white ring-2 ring-amber-400 shadow-sm' : 'bg-white ring-2 ring-blue-500 shadow-sm') : 'bg-white/70 ring-slate-200/80 hover:bg-white hover:ring-blue-300'
        }`}
      >
        <span className={`shrink-0 w-6 h-6 rounded-full text-xs font-semibold tabular-nums flex items-center justify-center ${
          s.planned ? 'bg-amber-100 text-amber-800' : i <= cur ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 ring-1 ring-inset ring-slate-300'
        }`}>{i + 1}</span>
        <span className="flex flex-col gap-0.5 min-w-0">
          <span className={`text-sm font-semibold leading-tight ${active ? 'text-slate-900' : 'text-slate-700 group-hover:text-blue-700'}`}>{s.label}</span>
          <span className={`text-xs leading-snug ${s.planned ? 'text-amber-700' : 'text-slate-500'}`}>{s.who}</span>
        </span>
      </button>
    );
  };
  return (
    <div role="tablist" aria-label="The six stages" className="hidden sm:grid gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,1.25fr)]">
      <div className="rounded-2xl bg-slate-100/80 p-3">
        <div className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">In use today</div>
        <div className="grid gap-2 grid-cols-5">{[0, 1, 2, 3, 4].map(i => <div key={i}>{Item(i)}</div>)}</div>
      </div>
      <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-3">
        <div className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-700">Planned</div>
        {Item(5)}
      </div>
    </div>
  );
};

const StageSlide: React.FC<{ i: number; animate: boolean }> = ({ i, animate }) => {
  const s = WORKFLOW_STAGES[i];
  const [chapter] = CHAPTERS[chapterOf(i)];
  return (
    <div
      id="wf-slide"
      role="tabpanel"
      aria-labelledby={`wf-tab-${i}`}
      className={`grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] items-start ${animate ? 'wf-anim' : ''}`}
    >
      <div className="flex flex-col gap-3 min-w-0">
        <div className={`text-xs font-semibold uppercase tracking-[0.08em] ${s.planned ? 'text-amber-700' : 'text-blue-600'}`}>
          Stage {i + 1} of {WORKFLOW_STAGES.length}{s.planned ? ' · planned' : ''}
          <span className="text-slate-400"> · Part {chapterOf(i) + 1}: {chapter}</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight text-slate-900">{s.title}</h4>
        <p className="text-slate-700 leading-relaxed">{s.lead}</p>
        <div className={`rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${s.planned ? 'bg-amber-50' : 'bg-slate-100/80'}`}>
          <span className="font-semibold text-slate-900">Why it matters. </span>
          <span className="text-slate-700">{s.why}</span>
        </div>
        <dl className="flex flex-col text-sm">
          {s.facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[132px_1fr] gap-3 py-2 border-t border-slate-100 items-baseline">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-500">{k}</dt>
              <dd className="font-medium text-slate-900">{v}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[132px_1fr] gap-3 py-2 border-t border-slate-100 items-baseline">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.06em] text-blue-700">Our example</dt>
            <dd className="font-medium text-blue-800">{s.follow}</dd>
          </div>
        </dl>
        <details className="group text-sm">
          <summary className="cursor-pointer select-none font-semibold text-blue-700 hover:text-blue-800 list-none inline-flex items-center gap-1">
            <svg viewBox="0 0 20 20" className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden><path d="M7.5 4.5L13 10l-5.5 5.5" /></svg>
            More about this stage
          </summary>
          <div className="mt-2 flex flex-col gap-2 text-slate-600 leading-relaxed pl-5">
            {s.more.map(t => <p key={t}>{t}</p>)}
          </div>
        </details>
      </div>
      <figure
        className={`relative rounded-2xl p-3 sm:p-6 min-h-[260px] flex items-center justify-center ${
          s.planned ? 'pt-12 sm:pt-12 bg-[repeating-linear-gradient(135deg,#fffbeb_0_10px,#f1f4f9_10px_20px)]' : 'bg-[#f1f4f9]'
        }`}
      >
        {s.planned && (
          <span className="absolute top-3.5 right-3.5 text-[11.5px] font-semibold rounded-full bg-amber-100 text-amber-800 px-2.5 py-1">Planned · example data</span>
        )}
        <StageVisual stage={i} />
        <figcaption className="sr-only">Example for stage {i + 1}: {s.title}</figcaption>
      </figure>
    </div>
  );
};

const Arrow: React.FC<{ dir: -1 | 1; disabled: boolean; onClick: () => void }> = ({ dir, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={dir < 0 ? 'Previous stage' : 'Next stage'}
    className={`w-11 h-11 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors ${
      dir > 0 ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-slate-200 disabled:text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:text-slate-300 disabled:hover:bg-slate-100'
    }`}
  >
    <svg viewBox="0 0 20 20" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d={dir < 0 ? 'M12.5 4.5L7 10l5.5 5.5' : 'M7.5 4.5L13 10l-5.5 5.5'} />
    </svg>
  </button>
);

/** Where the followed sentence ends up: its two checked codes, named from the live codebook. */
const EndCard: React.FC = () => {
  const domains = EXAMPLE_ROWS.filter(r => r.followed).map(r => domainOf(r.code)?.domain.name).filter(Boolean);
  return (
    <div className="rounded-2xl bg-blue-50 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-900">One sentence, two dots on a chart</h3>
      <p className="mt-2 text-slate-700 leading-relaxed max-w-3xl">
        “{FOLLOWED_STATEMENT}” began as one line in one program’s plan. It is now two checked intended outcomes, one under{' '}
        {domains[0]} and one under {domains[1]}. Once the dashboard shows outcomes (planned), it would sit next to every other
        program’s outcomes and help show what a school’s partners aim for together.
      </p>
    </div>
  );
};

/**
 * The six stages as a carousel the visitor moves through: the overview doubles
 * as tabs, with previous/next buttons, arrow keys and swipe. Nothing runs on a
 * timer. The end card appears on the last stage.
 */
const WorkflowJourney: React.FC = () => {
  const n = WORKFLOW_STAGES.length;
  const [cur, setCur] = useState(0);
  const [animate] = useState(() => !prefersReducedMotion());
  const touchX = useRef<number | null>(null);
  const top = useRef<HTMLDivElement>(null);

  const go = (i: number, focusTab = false) => {
    const next = Math.max(0, Math.min(n - 1, i));
    setCur(next);
    if (focusTab) document.getElementById(`wf-tab-${next}`)?.focus();
    // On phones the slide is long; bring its top back into view.
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: animate ? 'smooth' : 'auto', block: 'start' });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement).closest('summary, details[open] *')) return;
    if (e.key === 'ArrowRight') go(cur + 1, true);
    else if (e.key === 'ArrowLeft') go(cur - 1, true);
    else if (e.key === 'Home') go(0, true);
    else if (e.key === 'End') go(n - 1, true);
    else return;
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6" onKeyDown={onKey}>
      <style>{ANIM_CSS}</style>
      <div className="rounded-2xl bg-white ring-1 ring-slate-200/70 p-5 sm:p-6">
        <h3 className="font-semibold text-slate-900">Why not just read the logic models?</h3>
        <p className="mt-1.5 text-slate-600 leading-relaxed max-w-4xl">
          For one program, you could. But the Partnerships Dashboard shows that hundreds of programs operate across
          Philadelphia, and each describes its goals in its own words and its own layout. One says “improve attendance”, another
          says “students show up every day”. To see what all the programs at a school, or across the city, aim for together,
          their goals have to be put in the same terms. That is the job of the codebook.
        </p>
      </div>
      <div ref={top} className="scroll-mt-20 flex flex-col gap-4">
        <Overview cur={cur} onPick={i => go(i)} />
        <div
          className="rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,.05),0_8px_24px_rgba(15,23,42,.06)] p-4 sm:p-7 flex flex-col gap-6"
          onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={e => {
            const start = touchX.current;
            touchX.current = null;
            if (start == null) return;
            const dx = e.changedTouches[0].clientX - start;
            if (Math.abs(dx) > 60) go(cur + (dx < 0 ? 1 : -1));
          }}
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl bg-blue-50 px-3.5 py-2.5 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-700">Our example, from Program A</span>
            <q className="font-medium text-slate-900">{FOLLOWED_STATEMENT}</q>
          </div>
          <StageSlide key={cur} i={cur} animate={animate} />
          <div className="flex items-center justify-between gap-3 pt-1">
            <Arrow dir={-1} disabled={cur === 0} onClick={() => go(cur - 1)} />
            <div className="flex items-center gap-1.5" aria-hidden>
              {WORKFLOW_STAGES.map((s, i) => (
                <span
                  key={s.key}
                  className={`h-2 rounded-full transition-all ${i === cur ? 'w-6' : 'w-2'} ${
                    s.planned ? (i === cur ? 'bg-amber-500' : 'bg-amber-200') : i === cur ? 'bg-blue-600' : i < cur ? 'bg-blue-300' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-sm text-slate-500">
                {cur < n - 1 ? <>Next: <span className="font-medium text-slate-700">{WORKFLOW_STAGES[cur + 1].label}</span></> : 'Last stage'}
              </span>
              <Arrow dir={1} disabled={cur === n - 1} onClick={() => go(cur + 1)} />
            </div>
          </div>
        </div>
      </div>
      {cur === n - 1 && <EndCard />}
    </div>
  );
};

export default WorkflowJourney;
