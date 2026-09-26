import React from 'react';
import { PARTNERSHIPS_DASHBOARD_URL } from './workflowStages.js';
import WorkflowStepper from './WorkflowStepper.js';

// "The bigger picture" page of the explorer site (#/bigger-picture): why the
// codebook exists, how it fits the Office of Strategic Partnerships' work on
// a partnerships database and public dashboard, and the six-stage workflow.
// Wording rules (from the design debate): "intended outcomes", never results;
// gaps are about coverage, never about a partner; dashboard outcome views are
// planned, not live.

export const OFFICE = 'Office of Strategic Partnerships';
export const DISTRICT = 'School District of Philadelphia';

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

export const WHO_IT_HELPS: [string, string][] = [
  ['Partners', 'Find others working toward the same goals, and schools where your work could reach students.'],
  ['Funders', 'See which outcomes few programs aim for, not only where programs already cluster.'],
  ['Policymakers', 'Spot schools and neighborhoods where no program is aiming at an outcome students need.'],
];

const BiggerPicture: React.FC<{ codebookHref: string; tryHref: string }> = ({ codebookHref, tryHref }) => (
  <div className="max-w-6xl mx-auto w-full">
    <section className="pt-2 sm:pt-8 max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-3">{OFFICE} · {DISTRICT}</div>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">The bigger picture</h1>
      <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed">
        Many organizations serve Philadelphia’s young people, often without knowing who else works in the same school or
        toward the same goals. The {OFFICE} keeps a database of school partnerships and a public <DashboardLink /> where
        anyone can look up programs, the schools they serve, and program details.
      </p>
      <p className="mt-4 text-slate-600 leading-relaxed">
        Today the dashboard shows who is doing what, and where. We plan to add what each program is trying to achieve,
        taken from its own logic model and coded with this codebook. That will show where many programs share a goal and
        where few or none do, at one school or across the city, so partners, funders and policymakers can see where to
        fill gaps in content or in programming.
      </p>
    </section>

    <section className="mt-10">
      <h2 className="sr-only">Who it helps</h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {WHO_IT_HELPS.map(([who, what]) => (
          <li key={who} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
            <div className="font-semibold text-slate-900">{who}</div>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{what}</p>
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-16">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">From a logic model to the dashboard</h2>
      <p className="mt-2 text-slate-600 max-w-3xl">
        Follow one outcome statement through the six stages. The first five are in use today. The last is planned.
      </p>
      <div className="mt-6">
        <WorkflowStepper />
      </div>
    </section>

    <section className="mt-16 grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">What this shows, and what it doesn’t</h2>
        <ul className="mt-3 space-y-2 text-slate-600 leading-relaxed list-disc pl-5">
          <li>It shows what programs set out to do, in their own words. It does not measure how well they do it.</li>
          <li>It is not a rating or ranking of any program.</li>
          <li>An AI assistant suggests each code, and a person checks every one before it is saved.</li>
          <li>Outcome views in the Partnerships Dashboard are planned. The dashboard doesn’t show them yet.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Where the codebook comes in</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Programs describe their goals in their own words. A shared codebook puts those goals into the same categories,
          so they can be lined up across programs and schools. It is still being refined, and notes from people who run
          and fund programs shape each revision.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={codebookHref} className="inline-flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 text-sm shadow-sm transition-colors">
            Explore the codebook <span aria-hidden>→</span>
          </a>
          <a href={tryHref} className="inline-flex items-center gap-1 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-4 py-2 text-sm transition-colors">
            Code a statement
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default BiggerPicture;
