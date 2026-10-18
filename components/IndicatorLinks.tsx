import React from 'react';
import {
  AssociatedLink,
  associatedForCode,
  associatedForIndicator,
  EVIDENCE_LABEL,
  EvidenceLevel,
  linksForCode,
  linksForIndicator,
  notRecommendedForCode,
  SpotlightLink,
  SpotlightLinks,
} from '../services/spotlightLinks.js';

// The codebook explorer's "Connection to District indicators" panel and its
// indicator view, from the SPOTlight relevance review (services/spotlightLinks.ts).
// Internal app only: the public explorer site never passes link data.
//
// Two tiers sit side by side and are never mixed: tested links (causal studies
// of a program model) and research-associated links (consistent correlational
// evidence, worded "is associated with").

const EVIDENCE_STYLE: Record<EvidenceLevel, string> = {
  strong: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  good: 'bg-sky-50 text-sky-800 ring-sky-200',
  suggestive: 'bg-amber-50 text-amber-800 ring-amber-200',
  thin: 'bg-slate-50 text-slate-600 ring-slate-200',
  definitional: 'bg-violet-50 text-violet-800 ring-violet-200',
};

const EvidenceBadge: React.FC<{ link: SpotlightLink }> = ({ link }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${EVIDENCE_STYLE[link.evidence]}`}>
    {EVIDENCE_LABEL[link.evidence]}
    {link.evidenceScope ? `, ${link.evidenceScope}` : ''}
  </span>
);

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-400 mb-0.5">{children}</div>
);

const Detail: React.FC<{ label: string; text?: string }> = ({ label, text }) =>
  text ? (
    <div>
      <Label>{label}</Label>
      <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
    </div>
  ) : null;

const LinkDetails: React.FC<{ link: SpotlightLink }> = ({ link }) => (
  <details className="group/details mt-2">
    <summary className="cursor-pointer text-xs font-medium text-blue-700 hover:text-blue-900 select-none">
      Size, cautions and studies
    </summary>
    <div className="mt-3 space-y-3">
      <Detail label="What the studies found" text={link.typicalEffect} />
      <Detail label="What it could mean for a school" text={link.magnitude} />
      <Detail label="Cautions" text={link.caveats} />
      <Detail
        label="Philadelphia evidence"
        text={link.philadelphia.found ? `Yes: ${link.philadelphia.note ?? ''}` : `None found${link.philadelphia.note ? `: ${link.philadelphia.note}` : ''}.`}
      />
      {link.studies.length > 0 ? (
        <Sources studies={link.studies} links={link.links} />
      ) : (
        <Detail label="Basis" text="The District SPOTlight's own wording of the indicator. No study is needed for a definition." />
      )}
    </div>
  </details>
);

const Sources: React.FC<{ studies: string[]; links: { url: string; note?: string }[] }> = ({ studies, links }) => (
  <>
    <div>
      <Label>Studies</Label>
      <ul className="space-y-1 text-xs text-slate-600 leading-relaxed list-disc pl-4">
        {studies.map(s => <li key={s}>{s}</li>)}
      </ul>
    </div>
    <div>
      <Label>Sources the checkers fetched</Label>
      <ul className="space-y-0.5 text-xs leading-relaxed">
        {links.map(l => (
          <li key={l.url} className="truncate">
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline decoration-blue-200 underline-offset-2">
              {l.url.replace(/^https?:\/\/(www\.)?/, '')}
            </a>
            {l.note && <span className="text-slate-400"> ({l.note})</span>}
          </li>
        ))}
      </ul>
    </div>
  </>
);

const AssociatedBadge: React.FC = () => (
  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset bg-orange-50 text-orange-800 ring-orange-200">
    Research-associated
  </span>
);

/** One research-associated link: what is associated, on what basis, with the standing caution. */
const AssociatedItem: React.FC<{ link: AssociatedLink; caution: string; head: React.ReactNode }> = ({ link, caution, head }) => (
  <>
    <div className="flex flex-wrap items-center gap-1.5">
      {head}
      <AssociatedBadge />
    </div>
    <p className="mt-2 text-sm text-slate-700 leading-relaxed">{link.pathway}</p>
    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
      <span className="font-medium text-slate-600">Basis: </span>
      {link.basis}
    </p>
    <p className="mt-1 text-xs text-orange-800/90 leading-relaxed">{caution}</p>
    <details className="mt-2">
      <summary className="cursor-pointer text-xs font-medium text-blue-700 hover:text-blue-900 select-none">Size, cautions and studies</summary>
      <div className="mt-3 space-y-3">
        <Detail label="What the studies found" text={link.typicalEffect} />
        <Detail label="Cautions" text={link.caveats} />
        <Detail
          label="Philadelphia evidence"
          text={link.philadelphia.found ? `Yes: ${link.philadelphia.note ?? ''}` : `None found${link.philadelphia.note ? `: ${link.philadelphia.note}` : ''}.`}
        />
        <Sources studies={link.studies} links={link.links} />
      </div>
    </details>
  </>
);

const LaneHeading: React.FC<{ title: string; note: string }> = ({ title, note }) => (
  <div className="mb-2">
    <h5 className="text-xs font-semibold text-slate-800">{title}</h5>
    <p className="text-[11px] text-slate-500 leading-snug">{note}</p>
  </div>
);

const TESTED_NOTE = 'Causal studies of a program model. They count for a program that runs that model, which a person confirms.';
const ASSOCIATED_NOTE = 'Consistent correlational research. The outcome is associated with the indicator; no program is shown to move it.';

interface CodeProps {
  data: SpotlightLinks;
  code: string;
  indicatorsHref: string;
}

/** The panel on a code card. */
export const CodeIndicatorLinks: React.FC<CodeProps> = ({ data, code, indicatorsHref }) => {
  const links = linksForCode(data, code);
  const considered = notRecommendedForCode(data, code);
  const name = (id: string) => data.indicators.find(i => i.id === id)?.name ?? id;

  const associated = associatedForCode(data, code);
  const chips = (ids: string[]) =>
    ids.map(i => (
      <span key={i} className="text-xs font-medium text-slate-800 bg-white ring-1 ring-inset ring-slate-200 rounded px-1.5 py-0.5">
        {name(i)}
      </span>
    ));

  return (
    <div className="space-y-3">
      {links.length + associated.length === 0 ? (
        <p className="text-sm text-slate-700 leading-relaxed">{data.guardrails.summary}</p>
      ) : (
        <>
          <p className="text-xs text-slate-500 leading-relaxed">
            Possible links only. The code alone earns no credit: a code says what a program works toward, and the research is
            about specific programs and students.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <section>
              <LaneHeading title="Tested program models" note={TESTED_NOTE} />
              {links.length === 0 ? (
                <p className="text-xs text-slate-500">None for this code.</p>
              ) : (
                <ul className="space-y-3">
                  {links.map(l => (
                    <li key={l.id} className="rounded-lg border border-slate-200 bg-slate-50/60 px-3.5 py-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {chips(l.indicators)}
                        <EvidenceBadge link={l} />
                        {l.contribution === 'predicts' && (
                          <span className="text-[11px] text-slate-500">Predicts the indicator; not shown to cause it</span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{l.pathway}</p>
                      <div className="mt-2">
                        <Label>The program must run</Label>
                        <p className="text-sm text-slate-700 leading-relaxed">{l.modelMatch}</p>
                      </div>
                      <LinkDetails link={l} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              <LaneHeading title="Research-associated" note={ASSOCIATED_NOTE} />
              {associated.length === 0 ? (
                <p className="text-xs text-slate-500">None for this code.</p>
              ) : (
                <ul className="space-y-3">
                  {associated.map(l => (
                    <li key={l.id} className="rounded-lg border border-orange-100 bg-orange-50/30 px-3.5 py-3">
                      <AssociatedItem link={l} caution={data.associatedCaution} head={chips(l.indicators)} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </>
      )}
      {considered.length > 0 && (
        <details>
          <summary className="cursor-pointer text-xs font-medium text-slate-500 hover:text-slate-800 select-none">
            Also checked and not recommended ({considered.length})
          </summary>
          <ul className="mt-2 space-y-2">
            {considered.map(l => (
              <li key={l.id} className="text-xs text-slate-600 leading-relaxed">
                <span className="font-medium text-slate-700">{l.indicators.map(name).join(', ')}:</span> {l.pathway}{' '}
                <span className="text-slate-400">Evidence: {l.evidence}.</span>
              </li>
            ))}
          </ul>
        </details>
      )}
      <a href={indicatorsHref} className="inline-block text-xs text-slate-500 hover:text-slate-900 transition-colors">
        All District indicators →
      </a>
    </div>
  );
};

interface ViewProps {
  data: SpotlightLinks;
  codeTitle: (code: string) => string | undefined;
  codeHref: (code: string) => string;
}

/** Every SPOTlight indicator, with the outcomes and program models that may reach it. */
export const IndicatorLinksView: React.FC<ViewProps> = ({ data, codeTitle, codeHref }) => {
  const groups: { name: string; ids: string[] }[] = [];
  data.indicators.forEach(i => {
    const last = groups[groups.length - 1];
    if (last && last.name === i.group) last.ids.push(i.id);
    else groups.push({ name: i.group, ids: [i.id] });
  });
  const unreached = data.indicators.filter(
    i => linksForIndicator(data, i.id).length === 0 && associatedForIndicator(data, i.id).length === 0,
  );
  const codeChips = (codes: string[]) =>
    codes.map(c => (
      <a
        key={c}
        href={codeHref(c)}
        title={codeTitle(c)}
        className="text-xs text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded px-1.5 py-0.5 transition-colors"
      >
        <span className="font-mono">{c}</span> {codeTitle(c)}
      </a>
    ));

  return (
    <div className="animate-[fadeIn_.25s_ease-out]">
      <h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-slate-900">District indicators</h2>
      <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
        Which codebook outcomes may contribute to the indicators on the District’s {data.spotlightYear} SPOTlight, from the
        research review of {data.reviewedOn}.{' '}
        <a href={data.report} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline decoration-blue-200 underline-offset-2">
          Read the full report
        </a>
        .
      </p>
      <section className="mt-5 max-w-2xl rounded-xl border border-slate-200 bg-white px-5 py-4 space-y-2 text-sm text-slate-600 leading-relaxed">
        <p>
          <span className="font-medium text-slate-800">How to read this.</span> {data.rule}
        </p>
        <p>
          <span className="font-medium text-slate-800">Research-associated links.</span> {data.associatedRule}{' '}
          {data.associatedCaution}
        </p>
        <p>
          <span className="font-medium text-slate-800">Two equal lanes.</span> The review found no credible link to these
          indicators: {unreached.map(i => i.name).join('; ')}. Many valuable outcomes have no indicator link at all. The Board
          of Education counts them under its guardrails: “{data.guardrails.quote}” (
          <a href={data.guardrails.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline decoration-blue-200 underline-offset-2">
            Bylaw 003.1
          </a>
          ).
        </p>
      </section>

      <div className="mt-8 space-y-10">
        {groups.map(g => (
          <section key={g.name}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500 mb-3 flex items-center gap-3">
              {g.name}
              <span className="h-px flex-1 bg-slate-200" />
            </h3>
            <div className="space-y-2.5">
              {g.ids.map(id => {
                const indicator = data.indicators.find(i => i.id === id)!;
                const links = linksForIndicator(data, id);
                const associated = associatedForIndicator(data, id);
                return (
                  <article key={id} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-semibold text-slate-900">{indicator.name}</h4>
                      <span className="text-xs text-slate-500 tabular-nums">{data.spotlightYear}: {indicator.value2024_25}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{indicator.spotlightWording}</p>
                    {links.length + associated.length === 0 ? (
                      <p className="mt-3 text-sm text-slate-500">No link. The review found no study strong enough.</p>
                    ) : (
                      <div className="mt-3 grid gap-4 md:grid-cols-2">
                        <section>
                          <LaneHeading title="Tested program models" note={TESTED_NOTE} />
                          {links.length === 0 ? (
                            <p className="text-xs text-slate-500">None.</p>
                          ) : (
                            <ul className="divide-y divide-slate-100">
                              {links.map(l => (
                                <li key={l.id} className="py-3 first:pt-0 last:pb-0">
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {codeChips(l.codes)}
                                    <EvidenceBadge link={l} />
                                  </div>
                                  <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">{l.pathway}</p>
                                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                                    <span className="font-medium text-slate-600">The program must run: </span>
                                    {l.modelMatch}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </section>
                        <section>
                          <LaneHeading title="Research-associated" note={ASSOCIATED_NOTE} />
                          {associated.length === 0 ? (
                            <p className="text-xs text-slate-500">None.</p>
                          ) : (
                            <ul className="divide-y divide-slate-100">
                              {associated.map(l => (
                                <li key={l.id} className="py-3 first:pt-0 last:pb-0">
                                  <AssociatedItem link={l} caution={data.associatedCaution} head={codeChips(l.codes)} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </section>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
