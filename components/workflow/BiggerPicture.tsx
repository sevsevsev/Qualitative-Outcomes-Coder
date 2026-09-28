import React from 'react';
import { PARTNERSHIPS_DASHBOARD_URL } from './workflowStages.js';
import WorkflowJourney from './WorkflowJourney.js';
import EcosystemVisual from './EcosystemVisual.js';
import { GapFigure } from './GapFigures.js';
import ospLogo from '../../assets/osp-logo.png';

// "The bigger picture" page of the explorer site (#/bigger-picture): why the
// codebook exists, how it fits the Office of Strategic Partnerships' work on
// a partnerships database and public dashboard, and the six-stage workflow.
// Wording rules (from the design debate): "intended outcomes", never results;
// gaps are about coverage, never about a partner; dashboard outcome views are
// planned, not live.

export const OFFICE = 'Office of Strategic Partnerships';
export const DISTRICT = 'School District of Philadelphia';

/** The office's logo (district seal and name, office name below). Tall enough for the office line to be readable. */
export const OfficeLogo: React.FC<{ className?: string }> = ({ className = 'h-14' }) => (
  <img src={ospLogo} alt={`The ${DISTRICT}, ${OFFICE}`} className={`w-auto max-w-full ${className}`} />
);

export const ExternalIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
    <path d="M11 4h5v5M16 4l-7 7M14 11v4a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h4" />
  </svg>
);

export const DashboardLink: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={PARTNERSHIPS_DASHBOARD_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-800 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-400 ${className}`}
  >
    Partnerships Dashboard <ExternalIcon /><span className="sr-only">(opens in a new tab)</span>
  </a>
);

/** The three audience cards: who can act on shared goals and on each kind of gap. */
export const WHO_IT_HELPS: { who: string; gap?: string; what: string; figure: 'shared' | 'content' | 'programming' }[] = [
  { who: 'Partners', what: 'Find programs with the same goals, and schools where your work might add something new.', figure: 'shared' },
  { who: 'Funders', gap: 'Gaps in content', what: 'See which outcomes few programs across the city aim for.', figure: 'content' },
  { who: 'Policymakers', gap: 'Gaps in programming', what: 'See schools where no program aims for a given outcome.', figure: 'programming' },
];

export const WHAT_IT_IS_NOT = [
  'It is about programs’ intended outcomes, taken from their own plans. It does not measure results.',
  'It is not a rating or ranking. A gap is about coverage, not quality. It is never a judgment of any partner or school.',
  'An AI assistant suggests codes. A person checks them before they go into the shared record.',
  'The dashboard does not show outcomes yet. That part is planned.',
];

const BiggerPicture: React.FC<{ codebookHref: string; tryHref: string }> = ({ codebookHref, tryHref }) => (
  <div className="max-w-6xl mx-auto w-full">
    <div className="pt-2 sm:pt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-3">{OFFICE} · {DISTRICT}</div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">The bigger picture</h1>
        <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed">
          Many organizations serve Philadelphia’s young people, often without knowing who else works in the same school or
          toward the same goals. The {OFFICE} keeps the district’s record of school partnerships. Its public <DashboardLink />{' '}
          shows who does what, and where.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Next, we plan to add each program’s <strong className="font-semibold text-slate-800">intended outcomes</strong>: the
          changes it hopes to see. They come from the program’s logic model, a short written plan. We sort them with a codebook, a
          shared list of outcome types, so programs can be read side by side. The aim is to show where programs share goals and
          where there are gaps.
        </p>
      </section>
      <EcosystemVisual />
    </div>

    <section className="mt-14">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 flex flex-wrap items-center gap-x-3 gap-y-1">
        Shared goals, and two kinds of gap
        <span className="text-[11.5px] font-semibold tracking-normal rounded-full bg-amber-100 text-amber-800 px-2.5 py-1">Planned</span>
      </h2>
      <p className="mt-2 text-slate-600 max-w-3xl">Once outcomes are on the dashboard, each group could use them in its own way.</p>
      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {WHO_IT_HELPS.map(({ who, gap, what, figure }) => (
          <li key={who} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 flex flex-col gap-3">
            <GapFigure kind={figure} />
            <div className="px-1">
              <div className="font-semibold text-slate-900">
                {who}
                {gap && <span className="font-medium text-amber-700">: {gap.toLowerCase()}</span>}
              </div>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{what}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-12 rounded-2xl bg-white ring-1 ring-slate-200/70 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-900">What this is, and what it isn’t</h2>
      <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2 text-slate-600 leading-relaxed list-disc pl-5">
        {WHAT_IT_IS_NOT.map(t => <li key={t}>{t}</li>)}
      </ul>
    </section>

    <section className="mt-16">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">From a program’s plan to a shared picture</h2>
      <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed">
        Partner programs write down what they hope will change for the young people and families they serve, in their own
        words and their own format. Here is how those plans become one shared record, read side by side. Follow one sentence
        from Program A through six stages. Stages 1 to 5 happen today. Stage 6 is planned.
      </p>
      <div className="mt-6">
        <WorkflowJourney />
      </div>
    </section>

    <section className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between rounded-2xl bg-blue-50/60 p-5 sm:p-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Explore the codebook</h2>
        <p className="mt-1 text-slate-600 leading-relaxed">
          The codebook is still being refined. If you run or fund a program, we welcome your notes: they shape each new version.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <a href={codebookHref} className="inline-flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 text-sm shadow-sm transition-colors">
          Browse the codebook <span aria-hidden>→</span>
        </a>
        <a href={tryHref} className="inline-flex items-center gap-1 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-4 py-2 text-sm transition-colors">
          Code a statement
        </a>
      </div>
    </section>
  </div>
);

export default BiggerPicture;
