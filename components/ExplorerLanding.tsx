import React, { useMemo } from 'react';
import { CODEBOOK_REGISTRY, CodebookType } from '../codebooks/index.js';
import { buildExplorerCodebook } from '../services/codebookExplorer.js';
import { explorerHref } from './CodebookExplorer.js';
import CodebookSunburst from './CodebookSunburst.js';
import { DISTRICT, DashboardLink, OFFICE } from './workflow/BiggerPicture.js';

// First screen of the public explorer site: what the codebook is, why it
// exists, and what visitors can do here. The numbers are read from the live
// codebook and source registry, so they never go stale.

interface Props {
  siteName: string;
  codebookId: CodebookType;
  tryHref: string;
  bigPictureHref: string;
}

const Step: React.FC<{ n: number; title: string; body: React.ReactNode; href: string; cta: string; primary?: boolean }> = ({
  n, title, body, href, cta, primary,
}) => (
  <li className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 flex items-center justify-center text-sm font-semibold tabular-nums">
      {n}
    </span>
    <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed flex-1">{body}</p>
    <a
      href={href}
      className={`mt-5 self-start inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
        primary ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
      }`}
    >
      {cta} <span aria-hidden>→</span>
    </a>
  </li>
);

const ExplorerLanding: React.FC<Props> = ({ siteName, codebookId, tryHref, bigPictureHref }) => {
  const data = useMemo(() => buildExplorerCodebook(CODEBOOK_REGISTRY[codebookId]), [codebookId]);
  const codeCount = data.domains.reduce((n, d) => n + d.subcategories.length, 0);
  const verified = data.sources.filter(s => s.status === 'verified').length;
  const codebookHref = explorerHref(codebookId);

  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* Intro */}
      <section className="pt-4 sm:pt-10 grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600">{OFFICE} · {DISTRICT}</span>
            <span className="text-[11px] font-semibold rounded-full bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 px-2 py-0.5">Draft for public feedback</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">{siteName}</h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl">
            A shared set of categories for the outcomes youth-serving programs work toward, from reading growth to a sense of
            belonging to career readiness. Each code has a definition, examples, and the research it draws on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={codebookHref} className="inline-flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 shadow-sm transition-colors">
              Explore the codebook <span aria-hidden>→</span>
            </a>
            <a href={tryHref} className="inline-flex items-center gap-1 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-5 py-2.5 transition-colors">
              Code a statement
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {[
              [data.domains.length, 'domains'],
              [codeCount, 'codes'],
              [verified, 'sources checked against the original text'],
            ].map(([value, label]) => (
              <div key={label as string}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-3xl font-semibold text-slate-900 tabular-nums">{value}</dd>
                <dd className="text-sm text-slate-500 leading-snug mt-0.5">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <CodebookSunburst data={data} />
      </section>

      {/* Vision: a short pointer to the bigger picture page, not a copy of it */}
      <section className="mt-16 rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200/70 flex flex-col md:flex-row md:items-end gap-6">
        <div className="flex-1 max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Part of a bigger picture</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Our public <DashboardLink /> shows which programs work in which schools. Adding what each program aims for, coded
            with this codebook, will help partners, funders and policymakers see shared goals and the gaps no program is
            covering yet.
          </p>
        </div>
        <a href={bigPictureHref} className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-4 py-2 text-sm transition-colors">
          See how it fits together <span aria-hidden>→</span>
        </a>
      </section>

      {/* Why */}
      <section className="mt-16 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Why a codebook</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Programs describe their goals in their own words. Coding those statements against one codebook makes it possible to
            see which outcomes programs are working toward and to see patterns across them. It is meant for any program that serves young
            people, not one kind of program.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">How it’s kept honest</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Every code points to the frameworks it draws on, and {verified} of {data.sources.length} linked sources have been
            checked against the source itself. Changes to the codebook go through a written proposal and testing, and a person
            approves each one. The codebook is still being refined, and that’s where you come in.
          </p>
        </div>
      </section>

      {/* What to do */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How you can help</h2>
        <p className="mt-2 text-slate-600">We’re sharing this draft to learn where it works and where it falls short.</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          <Step
            n={1}
            title="Explore the codebook"
            body="Browse the domains and codes, search for an outcome, and see the research behind each code."
            href={codebookHref}
            cta="Browse domains"
          />
          <Step
            n={2}
            title="Code one of your outcomes"
            body="Type an outcome statement your program uses and see which code it gets. This uses the same AI model as the coding tool. Your statement isn’t saved."
            href={tryHref}
            cta="Code a statement"
            primary
          />
          <Step
            n={3}
            title="Tell us how your program sees it"
            body="Which outcomes you track aren’t here? Where would you word a code differently? Which two codes blur together? Every code has a place for notes. A person reads each one, and notes guide the next revision rather than changing the codebook directly."
            href={codebookHref}
            cta="Add a note"
          />
        </ol>
      </section>

      <p className="mt-12 text-xs text-slate-500 leading-relaxed max-w-3xl">
        Feedback is stored with whatever you choose to add (name, organization, email). Emails are never shown on the site.
      </p>
    </div>
  );
};

export default ExplorerLanding;
