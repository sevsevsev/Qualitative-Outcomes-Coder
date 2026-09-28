import React, { useEffect, useRef, useState } from 'react';
import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import { hueFor } from '../CodebookExplorer.js';
import {
  CHAPTERS, EXAMPLE_ROWS, EXAMPLE_SCHOOL, FOLLOWED_STATEMENT, WORKFLOW_STAGES, domainOf, findV3Code,
} from './workflowStages.js';

// The six stages of the logic model project as one vertical journey: an
// overview (today vs planned), then every stage in full with why it matters,
// following one example statement from a partner's logic model to the planned
// school view. Nothing runs on a timer; each stage's picture plays a short
// entrance once when it first scrolls into view, and not at all under reduced
// motion.

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

/** True from the first time the element is at least a third on screen. */
const useSeen = (ref: React.RefObject<HTMLElement | null>) => {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.33 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, seen]);
  return seen;
};

const stageId = (i: number) => `wf-stage-${i + 1}`;
const scrollToStage = (i: number) =>
  document.getElementById(stageId(i))?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });

/** The overview: stages 1–5 in use today, stage 6 planned. Each item jumps to its stage. */
const Overview: React.FC = () => {
  const today = WORKFLOW_STAGES.filter(s => !s.planned);
  const planned = WORKFLOW_STAGES.filter(s => s.planned);
  const Item: React.FC<{ i: number }> = ({ i }) => {
    const s = WORKFLOW_STAGES[i];
    return (
      <button
        type="button"
        onClick={() => scrollToStage(i)}
        className="group w-full h-full text-left flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-slate-200/80 hover:ring-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-shadow"
      >
        <span className={`shrink-0 w-6 h-6 rounded-full text-xs font-semibold tabular-nums flex items-center justify-center ${s.planned ? 'bg-amber-100 text-amber-800' : 'bg-blue-600 text-white'}`}>{i + 1}</span>
        <span className="flex flex-col gap-0.5 min-w-0">
          <span className="text-sm font-semibold text-slate-900 leading-tight group-hover:text-blue-700">{s.label}</span>
          <span className={`text-xs leading-snug ${s.planned ? 'text-amber-700' : 'text-slate-500'}`}>{s.who}</span>
        </span>
      </button>
    );
  };
  return (
    <nav aria-label="The six stages" className="grid gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,1.25fr)]">
      <div className="rounded-2xl bg-slate-100/80 p-3">
        <div className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">In use today</div>
        <ol className="grid gap-2 grid-cols-1 sm:grid-cols-5">
          {today.map(s => <li key={s.key}><Item i={WORKFLOW_STAGES.indexOf(s)} /></li>)}
        </ol>
      </div>
      <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-3">
        <div className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-700">Planned</div>
        <ol start={6}>
          {planned.map(s => <li key={s.key}><Item i={WORKFLOW_STAGES.indexOf(s)} /></li>)}
        </ol>
      </div>
    </nav>
  );
};

const StageRow: React.FC<{ i: number }> = ({ i }) => {
  const s = WORKFLOW_STAGES[i];
  const ref = useRef<HTMLLIElement>(null);
  const seen = useSeen(ref);
  const [animate] = useState(() => !prefersReducedMotion());
  return (
    <li ref={ref} id={stageId(i)} className="scroll-mt-24 grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] items-start py-9 border-t border-slate-200 first:border-t-0">
      <div className="flex flex-col gap-3 min-w-0">
        <div className={`text-xs font-semibold uppercase tracking-[0.08em] ${s.planned ? 'text-amber-700' : 'text-blue-600'}`}>
          Stage {i + 1}{s.planned ? ' · planned' : ''}
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
        } ${animate && seen ? 'wf-anim' : ''}`}
      >
        {s.planned && (
          <span className="absolute top-3.5 right-3.5 text-[11.5px] font-semibold rounded-full bg-amber-100 text-amber-800 px-2.5 py-1">Planned · example data</span>
        )}
        <StageVisual stage={i} />
        <figcaption className="sr-only">Example for stage {i + 1}: {s.title}</figcaption>
      </figure>
    </li>
  );
};

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

/** The six stages as one vertical journey: an overview, then every stage in full, nothing on a timer. */
const WorkflowJourney: React.FC = () => (
  <div className="flex flex-col gap-8">
    <style>{ANIM_CSS}</style>
    <Overview />
    <div className="rounded-2xl bg-white ring-1 ring-slate-200/70 p-5 sm:p-6">
      <h3 className="font-semibold text-slate-900">Why not just read the logic models?</h3>
      <p className="mt-1.5 text-slate-600 leading-relaxed max-w-4xl">
        For one program, you could. But each program describes its goals in its own words and its own layout. One says “improve
        attendance”, another says “students show up every day”. To see what all the programs at a school aim for together,
        their goals have to be put in the same terms. That is the job of the codebook.
      </p>
    </div>
    <div className="rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,.05),0_8px_24px_rgba(15,23,42,.06)] px-4 sm:px-8 py-2">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl bg-blue-50 px-3.5 py-2.5 mt-5 text-sm">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-700">Our example, from Program A</span>
        <q className="font-medium text-slate-900">{FOLLOWED_STATEMENT}</q>
      </div>
      {CHAPTERS.map(([title, from, to], c) => (
        <section key={title} aria-labelledby={`wf-ch-${c}`} className="pt-8">
          <h3 id={`wf-ch-${c}`} className="flex items-center gap-3 text-sm font-semibold text-slate-500">
            <span className="uppercase tracking-[0.08em]">Part {c + 1}</span>
            <span className="text-slate-900 text-base">{title}</span>
            <span className="flex-1 h-px bg-slate-200" aria-hidden />
          </h3>
          <ol className="list-none" start={from + 1}>
            {WORKFLOW_STAGES.slice(from, to + 1).map((s, k) => <StageRow key={s.key} i={from + k} />)}
          </ol>
        </section>
      ))}
    </div>
    <EndCard />
  </div>
);

export default WorkflowJourney;
