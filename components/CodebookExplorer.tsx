import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CODEBOOK_REGISTRY, CodebookType, DEFAULT_CODEBOOK_ID, SELECTABLE_CODEBOOK_LIST } from '../codebooks/index.js';
import {
  buildExplorerCodebook,
  ExplorerCode,
  ExplorerDomain,
  ExplorerSource,
  searchText,
} from '../services/codebookExplorer.js';
import { getSourceRegistry, SourceStatus } from '../services/codebookSources.js';
import { FeedbackTargetType, GENERAL_TARGET_LABEL, PublicFeedback } from '../services/feedback.js';
import { fetchApprovedFeedback } from '../services/feedbackClient.js';
import FeedbackPanel from './FeedbackPanel.js';

// Route shape (after "#/codebook/"): "<codebookId>[/<target>]", where target
// is a domain ("d/3"), a code ("3.2.2" or "01"), or "sources".
export interface ExplorerRoute {
  codebookId: CodebookType;
  target?: string;
}

export const parseExplorerRoute = (
  segments: string[],
  allowed: readonly CodebookType[] = Object.keys(CODEBOOK_REGISTRY) as CodebookType[],
): ExplorerRoute => {
  const id = segments[0] as CodebookType;
  const fallback = allowed.includes(DEFAULT_CODEBOOK_ID) ? DEFAULT_CODEBOOK_ID : allowed[0];
  const codebookId = id && allowed.includes(id) ? id : fallback;
  return { codebookId, target: segments.slice(1).join('/') || undefined };
};

export const explorerHref = (codebookId: string, target?: string) =>
  `#/codebook/${codebookId}${target ? `/${target}` : ''}`;

interface Props {
  route: ExplorerRoute;
  /** Show visitor comments and feedback forms (the public explorer site). */
  withFeedback?: boolean;
  /** Codebooks offered in the switcher. Defaults to every codebook that isn't deprecated. */
  codebookIds?: readonly CodebookType[];
}

// ---------------------------------------------------------------------------
// Visual helpers
// ---------------------------------------------------------------------------

// One quiet hue per domain, used only on the number tile and the rail marker.
const DOMAIN_HUES = [28, 350, 262, 214, 158, 190, 4, 232, 44, 292, 128, 16];
export const hueFor = (index: number) => DOMAIN_HUES[index % DOMAIN_HUES.length];
const tileStyle = (index: number): React.CSSProperties => ({
  backgroundColor: `hsl(${hueFor(index)} 70% 95%)`,
  color: `hsl(${hueFor(index)} 55% 32%)`,
  boxShadow: `inset 0 0 0 1px hsl(${hueFor(index)} 60% 88%)`,
});

const STATUS_META: Record<SourceStatus, { label: string; badge: string; dot: string }> = {
  verified: { label: 'Verified', badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200', dot: 'bg-emerald-500' },
  located: { label: 'Located', badge: 'bg-sky-50 text-sky-700 ring-sky-200', dot: 'bg-sky-400' },
  unverified: { label: 'Unverified', badge: 'bg-slate-50 text-slate-600 ring-slate-200', dot: 'bg-slate-300' },
  misattributed: { label: 'Being corrected', badge: 'bg-rose-50 text-rose-700 ring-rose-200', dot: 'bg-rose-400' },
  needs_replacement: { label: 'Needs replacement', badge: 'bg-amber-50 text-amber-800 ring-amber-200', dot: 'bg-amber-400' },
};

const STATUS_HELP: Record<SourceStatus, string> = {
  verified: 'Fetched from the source, with a verbatim excerpt that supports this code.',
  located: 'The source exists at this link; a supporting excerpt has not been recorded yet.',
  unverified: 'Cited in the codebook but not yet checked.',
  misattributed: 'The current attribution is wrong and a change proposal is open to fix it.',
  needs_replacement: 'The citation is too vague to verify and is being replaced.',
};

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="inline w-3.5 h-3.5 ml-1 -mt-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5v5M19 5l-8 8M10 5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-4" />
  </svg>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-2">{children}</div>
);

const StatusBadge: React.FC<{ status: SourceStatus }> = ({ status }) => (
  <span
    title={STATUS_HELP[status]}
    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${STATUS_META[status].badge}`}
  >
    <span className={`w-1.5 h-1.5 rounded-full ${STATUS_META[status].dot}`} />
    {STATUS_META[status].label}
  </span>
);

const highlight = (text: string, tokens: string[]): React.ReactNode => {
  if (!tokens.length) return text;
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'gi'));
  return parts.map((p, i) =>
    i % 2 === 1 ? <mark key={i} className="bg-amber-100 text-inherit rounded px-0.5">{p}</mark> : p,
  );
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const CodebookExplorer: React.FC<Props> = ({ route, withFeedback = false, codebookIds }) => {
  const codebookList = SELECTABLE_CODEBOOK_LIST.filter(cb => !codebookIds || codebookIds.includes(cb.id as CodebookType));
  const codebook = CODEBOOK_REGISTRY[route.codebookId];
  // A deprecated codebook still opens from a direct link or a resumed session, with a notice.
  const replacement = codebook.deprecated ? CODEBOOK_REGISTRY[codebook.deprecated.replacedBy as CodebookType] : undefined;
  const data = useMemo(() => buildExplorerCodebook(codebook), [codebook]);
  const legend = getSourceRegistry(codebook.id)?.status_legend;

  const [query, setQuery] = useState('');
  const [feedback, setFeedback] = useState<{ public: boolean; items: PublicFeedback[] }>({ public: true, items: [] });

  useEffect(() => {
    if (!withFeedback) return;
    let live = true;
    fetchApprovedFeedback(data.id)
      .then(r => { if (live) setFeedback(r); })
      .catch(() => { if (live) setFeedback({ public: true, items: [] }); });
    return () => { live = false; };
  }, [withFeedback, data.id]);

  // Approved feedback is shown only while its code still has the wording it
  // was written about, so a renumbering or rename never attaches an old
  // comment to a different code. Older entries stay in the admin export.
  const feedbackFor = (targetType: FeedbackTargetType, number: string, label: string) =>
    feedback.items.filter(i => i.targetType === targetType && i.targetCode === number && i.targetLabel === label);

  const codeOptions = useMemo(
    () => data.domains.flatMap(d => d.subcategories.map(c => ({ number: c.number, title: c.title }))),
    [data],
  );
  const noteInputId = (targetType: FeedbackTargetType, number: string) => `note-${targetType}-${number || 'all'}`;

  const renderFeedback = (targetType: FeedbackTargetType, number: string, label: string) => (
    <FeedbackPanel
      key={`${data.id}-${targetType}-${number}`}
      codebookId={data.id}
      targetType={targetType}
      targetCode={number}
      items={feedbackFor(targetType, number, label)}
      showsApproved={feedback.public}
      codeOptions={codeOptions}
      inputId={noteInputId(targetType, number)}
    />
  );
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLInputElement>(null);

  const codeIndex = useMemo(() => {
    const map = new Map<string, { code: ExplorerCode; domain: ExplorerDomain; domainIndex: number }>();
    data.domains.forEach((domain, domainIndex) =>
      domain.subcategories.forEach(code => map.set(code.number, { code, domain, domainIndex })),
    );
    return map;
  }, [data]);

  // Resolve the route target to a view.
  const target = route.target;
  const showSources = target === 'sources';
  const targetCode = target && !target.startsWith('d/') ? codeIndex.get(target) : undefined;
  const targetDomainNumber = target?.startsWith('d/') ? target.slice(2) : undefined;
  const domainIndex = Math.max(
    0,
    targetCode
      ? targetCode.domainIndex
      : data.domains.findIndex(d => d.number === (targetDomainNumber ?? target)),
  );
  const domain = data.domains[domainIndex];

  // Open and scroll to a code when the route names one.
  useEffect(() => {
    if (!targetCode) {
      window.scrollTo({ top: 0 });
      return;
    }
    setExpanded(prev => new Set(prev).add(targetCode.code.number));
    requestAnimationFrame(() =>
      document.getElementById(`code-${targetCode.code.number}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' }),
    );
  }, [target, data.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // "/" focuses search, Escape clears it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName);
      if (e.key === '/' && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('');
        searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = useMemo(() => {
    if (!tokens.length) return [];
    const hits: { code: ExplorerCode | ExplorerDomain; domain: ExplorerDomain; domainIndex: number; isDomain: boolean }[] = [];
    data.domains.forEach((d, i) => {
      const domainText = searchText(d);
      if (tokens.every(t => domainText.includes(t))) hits.push({ code: d, domain: d, domainIndex: i, isDomain: true });
      d.subcategories.forEach(c => {
        const text = searchText(c);
        if (tokens.every(t => text.includes(t))) hits.push({ code: c, domain: d, domainIndex: i, isDomain: false });
      });
    });
    return hits;
  }, [data, query]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalCodes = data.domains.reduce((n, d) => n + d.subcategories.length, 0);
  const verifiedCount = data.sources.filter(s => s.status === 'verified').length;

  // "Add a note" on a code card: open the card and put the cursor in its note box.
  const addNote = (number: string) => {
    setExpanded(prev => new Set(prev).add(number));
    window.setTimeout(() => {
      const box = document.getElementById(noteInputId('code', number));
      box?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      box?.focus({ preventScroll: true });
    }, 60);
  };

  const toggle = (number: string) =>
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });

  // Turn "use 3.5.3" / "Domain 12" in notes into links to that code.
  const linkify = (text: string): React.ReactNode => {
    const parts = text.split(/(Domain \d{1,2}\b|\b\d{1,2}(?:\.\d{1,2}){1,2}\b)/g);
    return parts.map((part, i) => {
      if (i % 2 === 0) return part;
      const domainRef = part.match(/^Domain (\d+)$/)?.[1];
      const exists = domainRef ? data.domains.some(d => d.number === domainRef) : codeIndex.has(part);
      if (!exists) return part;
      return (
        <a
          key={i}
          href={explorerHref(data.id, domainRef ? `d/${domainRef}` : part)}
          onClick={() => setQuery('')}
          className="font-mono text-[0.92em] text-blue-700 bg-blue-50 hover:bg-blue-100 rounded px-1 py-px no-underline transition-colors"
        >
          {part}
        </a>
      );
    });
  };

  // -------------------------------------------------------------------------
  // Pieces
  // -------------------------------------------------------------------------

  const renderSource = (source: ExplorerSource, showComponent = true) => (
    <li key={source.id} className="py-3 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-start gap-x-3 gap-y-1.5">
        <StatusBadge status={source.status} />
        <div className="min-w-0 flex-1 basis-64">
          {source.url ? (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-900 hover:text-blue-700 underline decoration-slate-300 underline-offset-2 hover:decoration-blue-400"
            >
              {source.citeAs}
              <ExternalIcon />
            </a>
          ) : (
            <span className="text-sm font-medium text-slate-900">{source.citeAs}</span>
          )}
          {(source.publisher || source.year) && (
            <div className="text-xs text-slate-500 mt-0.5">
              {[source.publisher, source.year].filter(Boolean).join(' · ')}
            </div>
          )}
          {showComponent && source.component && (
            <div className="text-xs text-slate-600 mt-1.5">
              <span className="text-slate-400">Supports this code via </span>
              {source.component}
            </div>
          )}
          {source.excerpt && source.status === 'verified' && (
            <figure className="mt-2 border-l-2 border-emerald-200 pl-3">
              <blockquote className="text-xs leading-relaxed text-slate-600 italic">“{source.excerpt}”</blockquote>
              <figcaption className="text-[11px] text-slate-400 mt-1">
                Excerpt recorded when verified{source.verifiedOn ? ` on ${source.verifiedOn}` : ''}
              </figcaption>
            </figure>
          )}
          {source.openCp && (
            <div className="text-xs text-slate-500 mt-1.5">Fix tracked in {source.openCp}.</div>
          )}
        </div>
      </div>
    </li>
  );

  const renderDots = (sources: ExplorerSource[]) =>
    sources.length ? (
      <span className="flex items-center gap-1" title={`${sources.length} linked source${sources.length === 1 ? '' : 's'}`}>
        {sources.slice(0, 4).map(s => (
          <span key={s.id} className={`w-1.5 h-1.5 rounded-full ${STATUS_META[s.status].dot}`} />
        ))}
      </span>
    ) : null;

  const renderCode = (code: ExplorerCode, index: number) => {
    const open = expanded.has(code.number);
    const commentCount = withFeedback ? feedbackFor('code', code.number, code.code).length : 0;
    const isTarget = targetCode?.code.number === code.number;
    const telling = [code.hint, ...code.notes].filter(Boolean) as string[];
    return (
      <article
        key={code.code}
        id={`code-${code.number}`}
        style={{ scrollMarginTop: '5.5rem' }}
        className={`group rounded-xl border bg-white transition-all duration-200 ${
          open ? 'border-slate-300 shadow-[0_1px_2px_rgba(15,23,42,.04),0_8px_24px_-12px_rgba(15,23,42,.18)]' : 'border-slate-200 hover:border-slate-300'
        } ${isTarget ? 'ring-2 ring-blue-500/20' : ''}`}
      >
        <div className="flex items-start">
          <button
            type="button"
            onClick={() => toggle(code.number)}
            aria-expanded={open}
            className="min-w-0 flex-1 text-left pl-4 sm:pl-5 pr-2 sm:pr-3 py-4 flex items-start gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
          >
            <span
              className="mt-0.5 shrink-0 font-mono text-xs font-semibold tabular-nums rounded-md px-2 py-1 min-w-[3.25rem] text-center"
              style={tileStyle(index)}
            >
              {code.number}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-slate-900 leading-snug">{code.title}</span>
                {code.tag && (
                  <span className="text-[11px] text-slate-500 bg-slate-100 rounded px-1.5 py-0.5">{code.tag}</span>
                )}
              </span>
              {code.definition && (
                <span className={`block text-sm text-slate-600 mt-1 leading-relaxed ${open ? '' : 'line-clamp-2'}`}>
                  {code.definition}
                </span>
              )}
            </span>
          </button>
          <span className="flex items-center gap-1 sm:gap-2 shrink-0 pr-3 sm:pr-5 pt-[1.125rem]">
            {withFeedback && (
              <button
                type="button"
                onClick={() => addNote(code.number)}
                aria-label={commentCount ? `${commentCount} note${commentCount === 1 ? '' : 's'} from the field. Add a note on ${code.number}` : `Add a note on ${code.number}`}
                className="flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium text-slate-500 hover:text-blue-700 hover:bg-blue-50 tabular-nums transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5M21 12a8 8 0 01-11.6 7.1L4 20l1-4.4A8 8 0 1121 12z" />
                </svg>
                {commentCount > 0 ? (
                  <span>{commentCount}<span className="hidden sm:inline"> note{commentCount === 1 ? '' : 's'}</span></span>
                ) : (
                  <span className="hidden sm:inline">Add a note</span>
                )}
              </button>
            )}
            {/* The same toggle as the header, for the dots and chevron; the header button is the one keyboards reach. */}
            <button type="button" tabIndex={-1} aria-hidden onClick={() => toggle(code.number)} className="flex items-center gap-3 py-1">
              <span className="hidden sm:flex">{renderDots(code.sources)}</span>
              <Chevron open={open} />
            </button>
          </span>
        </div>

        {open && (
          <div className="px-5 pb-5 pl-[5.25rem] space-y-5 max-sm:pl-5">
            {code.fields.map(f => (
              <div key={f.label}>
                <SectionLabel>{f.label}</SectionLabel>
                <p className="text-sm text-slate-700 leading-relaxed">{linkify(f.text)}</p>
              </div>
            ))}

            {code.examples.length > 0 && (
              <div>
                <SectionLabel>Example{code.examples.length > 1 ? 's' : ''}</SectionLabel>
                <ul className="space-y-1.5">
                  {code.examples.map(ex => (
                    <li key={ex} className="text-sm text-slate-700 bg-slate-50 rounded-lg px-3 py-2 leading-relaxed">
                      “{ex}”
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {telling.length > 0 && (
              <div>
                <SectionLabel>Telling it apart</SectionLabel>
                <ul className="space-y-1.5">
                  {telling.map(t => (
                    <li key={t} className="text-sm text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-slate-300 select-none">—</span>
                      <span>{linkify(t)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {withFeedback && (
              <div>
                <SectionLabel>Notes from the field</SectionLabel>
                {renderFeedback('code', code.number, code.code)}
              </div>
            )}

            <div>
              <SectionLabel>Research &amp; frameworks</SectionLabel>
              {code.sources.length > 0 ? (
                <ul className="divide-y divide-slate-100">
                  {code.sources.map(s => renderSource(s))}
                </ul>
              ) : code.frameworks.length > 0 ? (
                <p className="text-sm text-slate-700">
                  {code.frameworks.join('; ')}
                  {data.hasRegistry && <span className="text-slate-400"> (no linked source recorded yet)</span>}
                </p>
              ) : (
                <p className="text-sm text-slate-500">
                  {data.hasRegistry
                    ? 'No source linked to this code yet. See the domain’s framework basis above.'
                    : 'This codebook has no source registry yet.'}
                </p>
              )}
              {code.sourceGap && (
                <p className="mt-3 text-xs text-amber-800 bg-amber-50 rounded-lg px-3 py-2 leading-relaxed">
                  <span className="font-semibold">Open gap: </span>
                  {code.sourceGap}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(code.code)}
                className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                title="Copy the exact code string used in exports"
              >
                Copy code
              </button>
              <a href={explorerHref(data.id, code.number)} className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                Link to this code
              </a>
            </div>
          </div>
        )}
      </article>
    );
  };

  const renderDomain = () => {
    const groups: { name?: string; codes: ExplorerCode[] }[] = [];
    domain.subcategories.forEach(c => {
      const last = groups[groups.length - 1];
      if (last && last.name === c.group) last.codes.push(c);
      else groups.push({ name: c.group, codes: [c] });
    });
    const allOpen = domain.subcategories.length > 0 && domain.subcategories.every(c => expanded.has(c.number));
    const prev = data.domains[domainIndex - 1];
    const next = data.domains[domainIndex + 1];

    return (
      <div key={domain.code} className="animate-[fadeIn_.25s_ease-out]">
        <header className="mb-8">
          <div className="flex items-start gap-4">
            <span
              className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-semibold tabular-nums"
              style={tileStyle(domainIndex)}
            >
              {domain.number}
            </span>
            <div className="min-w-0 pt-0.5">
              <div className="text-xs font-medium text-slate-400">
                {codebook.capabilities.hasSubcategories ? `Domain ${domain.number}` : `Code ${domain.number}`}
              </div>
              <h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-slate-900 leading-tight">
                {domain.title}
              </h2>
            </div>
          </div>

          {domain.description && (
            <p className="mt-5 sm:pl-[4.5rem] text-base text-slate-700 leading-relaxed max-w-3xl">{linkify(domain.description)}</p>
          )}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {domain.hint && (
              <div className="rounded-xl bg-slate-900 text-slate-100 px-4 py-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-1">What belongs here</div>
                <p className="text-sm leading-relaxed">{linkify(domain.hint)}</p>
              </div>
            )}
            {domain.frameworkBasis && (
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-1">Framework basis</div>
                <p className="text-sm leading-relaxed text-slate-700">{domain.frameworkBasis}</p>
              </div>
            )}
          </div>

          {domain.definition && <p className="mt-5 text-base text-slate-700 leading-relaxed max-w-3xl">{domain.definition}</p>}
          {domain.notes.map(n => (
            <p key={n} className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">{linkify(n)}</p>
          ))}
          {domain.fields.map(f => (
            <div key={f.label} className="mt-5 max-w-3xl">
              <SectionLabel>{f.label}</SectionLabel>
              <p className="text-sm text-slate-700 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </header>

        {domain.subcategories.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-slate-500">
                {domain.subcategories.length} code{domain.subcategories.length === 1 ? '' : 's'}
              </div>
              <button
                type="button"
                onClick={() =>
                  setExpanded(prevSet => {
                    const nextSet = new Set(prevSet);
                    domain.subcategories.forEach(c => (allOpen ? nextSet.delete(c.number) : nextSet.add(c.number)));
                    return nextSet;
                  })
                }
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {allOpen ? 'Collapse all' : 'Expand all'}
              </button>
            </div>
            <div className="space-y-8">
              {groups.map((g, gi) => (
                <section key={`${g.name ?? 'codes'}-${gi}`}>
                  {g.name && (
                    <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500 mb-3 flex items-center gap-3">
                      {g.name}
                      <span className="h-px flex-1 bg-slate-200" />
                    </h3>
                  )}
                  <div className="space-y-2.5">
                    {g.codes.map(c => renderCode(c, domainIndex))}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}

        {domain.subcategories.length === 0 && domain.sources.length === 0 && !data.hasRegistry && (
          <p className="text-sm text-slate-500">
            This codebook is a flat crosswalk with no subcategories and no source registry yet.
          </p>
        )}

        {domain.sources.length > 0 && (
          <section className="mt-12">
            <h3 className="text-base font-semibold text-slate-900 mb-1">Research behind this domain</h3>
            <p className="text-sm text-slate-500 mb-4">Every source linked to at least one code above.</p>
            <ul className="rounded-xl border border-slate-200 bg-white px-5 py-4 divide-y divide-slate-100">
              {domain.sources.map(s => renderSource(s, false))}
            </ul>
          </section>
        )}

        {withFeedback && (
          <section className="mt-12">
            <h3 className="text-base font-semibold text-slate-900 mb-1">Notes from the field on this domain</h3>
            <p className="text-sm text-slate-500 mb-4">
              You know how these outcomes look in real programs. Tell us where this domain fits your work and where it doesn’t.
            </p>
            {renderFeedback('domain', domain.number, domain.code)}
          </section>
        )}

        <nav className="mt-12 pt-6 border-t border-slate-200 flex justify-between gap-4 text-sm">
          {prev ? (
            <a href={explorerHref(data.id, `d/${prev.number}`)} className="group/nav text-slate-500 hover:text-slate-900 min-w-0">
              <div className="text-xs text-slate-400">Previous</div>
              <div className="font-medium truncate">← {prev.number}. {prev.title}</div>
            </a>
          ) : <span />}
          {next && (
            <a href={explorerHref(data.id, `d/${next.number}`)} className="text-right text-slate-500 hover:text-slate-900 min-w-0">
              <div className="text-xs text-slate-400">Next</div>
              <div className="font-medium truncate">{next.number}. {next.title} →</div>
            </a>
          )}
        </nav>
      </div>
    );
  };

  const renderSources = () => {
    const usage = (id: string) =>
      data.domains.flatMap(d => d.subcategories.filter(c => c.sources.some(s => s.id === id)).map(c => c.number));
    const counts = data.sources.reduce<Record<string, number>>((acc, s) => ({ ...acc, [s.status]: (acc[s.status] ?? 0) + 1 }), {});
    return (
      <div className="animate-[fadeIn_.25s_ease-out]">
        <h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-slate-900">Research &amp; frameworks</h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
          Every source the codebook draws on, with the codes it supports. Status comes from the source registry
          {data.registryReviewed ? `, last reviewed ${data.registryReviewed.split(' ')[0]}` : ''}.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {(Object.keys(STATUS_META) as SourceStatus[])
            .filter(s => counts[s])
            .map(s => (
              <span key={s} className="flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-full pl-1 pr-3 py-1" title={legend?.[s] ?? STATUS_HELP[s]}>
                <StatusBadge status={s} />
                {counts[s]}
              </span>
            ))}
        </div>
        <ul className="mt-6 space-y-2.5">
          {data.sources.map(s => (
            <li key={s.id} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
              <ul>{renderSource(s, false)}</ul>
              <div className="mt-3 flex flex-wrap gap-1.5 pl-0 sm:pl-[6.5rem]">
                {usage(s.id).map(n => (
                  <a key={n} href={explorerHref(data.id, n)} className="font-mono text-[11px] text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded px-1.5 py-0.5 transition-colors">
                    {n}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderResults = () => (
    <div>
      <div className="text-sm text-slate-500 mb-4">
        {results.length} match{results.length === 1 ? '' : 'es'} for “{query.trim()}”
      </div>
      {results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center">
          <p className="text-slate-700 font-medium">Nothing matches that yet.</p>
          <p className="text-sm text-slate-500 mt-1">Try a broader word, a code number like 3.2, or a framework name like CASEL.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {results.map(({ code, domain: d, domainIndex: di, isDomain }) => (
            <li key={code.code}>
              <a
                href={explorerHref(data.id, isDomain ? `d/${code.number}` : code.number)}
                onClick={() => setQuery('')}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold rounded-md px-2 py-1 min-w-[3.25rem] text-center" style={tileStyle(di)}>
                  {isDomain ? `D${code.number}` : code.number}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-slate-900">{highlight(code.title, tokens)}</span>
                  {!isDomain && <span className="block text-xs text-slate-400 mt-0.5">{d.title}</span>}
                  {(code.definition ?? ('description' in code ? code.description : undefined) ?? code.hint) && (
                    <span className="block text-sm text-slate-600 mt-1 line-clamp-2">{highlight(code.definition ?? ('description' in code ? code.description : undefined) ?? code.hint ?? '', tokens)}</span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // -------------------------------------------------------------------------
  // Layout
  // -------------------------------------------------------------------------

  return (
    <div className="max-w-7xl mx-auto w-full">
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>

      {/* Masthead */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-2">Codebook explorer</div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">{data.label}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
            <span className="font-mono text-xs text-slate-700 bg-white border border-slate-200 rounded-md px-2 py-0.5">v{data.version}</span>
            <span><span className="font-semibold text-slate-800 tabular-nums">{data.domains.length}</span> {codebook.capabilities.hasSubcategories ? 'domains' : 'codes'}</span>
            {totalCodes > 0 && <span><span className="font-semibold text-slate-800 tabular-nums">{totalCodes}</span> codes</span>}
            {data.hasRegistry && (
              <span>
                <span className="font-semibold text-slate-800 tabular-nums">{data.sources.length}</span> sources,{' '}
                <span className="font-semibold text-emerald-700 tabular-nums">{verifiedCount}</span> verified
              </span>
            )}
          </div>
          {codebook.deprecated && (
            <p role="note" className="mt-4 max-w-2xl text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              This codebook was retired on {codebook.deprecated.since} and is kept for reading older results only.
              {replacement && (
                <> New coding uses <a href={explorerHref(replacement.id)} className="font-medium underline">{replacement.label}</a>.</>
              )}
            </p>
          )}
        </div>
        {codebookList.length > 1 && (
          <div role="tablist" aria-label="Codebook" className="inline-flex self-start lg:self-auto rounded-lg bg-slate-200/60 p-1">
            {codebookList.map(cb => (
              <a
                key={cb.id}
                role="tab"
                aria-selected={cb.id === data.id}
                href={explorerHref(cb.id)}
                onClick={() => { setQuery(''); setExpanded(new Set()); }}
                className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                  cb.id === data.id ? 'bg-white text-slate-900 font-medium shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cb.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
        <input
          ref={searchRef}
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search codes, definitions, examples and frameworks"
          aria-label="Search the codebook"
          className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-14 py-3.5 text-[15px] text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
        />
        {!query && (
          <kbd className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">/</kbd>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)]">
        {/* Domain rail */}
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Domains" className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0 lg:flex-col lg:gap-0.5 lg:overflow-visible">
            {data.domains.map((d, i) => {
              const active = !showSources && !tokens.length && i === domainIndex;
              return (
                <a
                  key={d.code}
                  href={explorerHref(data.id, `d/${d.number}`)}
                  onClick={() => setQuery('')}
                  aria-current={active ? 'page' : undefined}
                  className={`shrink-0 flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                    active ? 'bg-white shadow-sm ring-1 ring-slate-200 text-slate-900' : 'text-slate-600 hover:bg-white/70 hover:text-slate-900'
                  }`}
                >
                  <span className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-xs font-semibold tabular-nums" style={tileStyle(i)}>
                    {d.number}
                  </span>
                  <span className={`leading-snug whitespace-nowrap lg:whitespace-normal ${active ? 'font-medium' : ''}`}>{d.title}</span>
                  {d.subcategories.length > 0 && (
                    <span className="hidden lg:inline ml-auto text-xs text-slate-400 tabular-nums">{d.subcategories.length}</span>
                  )}
                </a>
              );
            })}
            {data.hasRegistry && (
              <a
                href={explorerHref(data.id, 'sources')}
                onClick={() => setQuery('')}
                className={`shrink-0 flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors lg:mt-3 lg:border-t lg:border-slate-200 lg:rounded-t-none lg:pt-3 ${
                  showSources && !tokens.length ? 'bg-white shadow-sm ring-1 ring-slate-200 text-slate-900 font-medium' : 'text-slate-600 hover:bg-white/70 hover:text-slate-900'
                }`}
              >
                <span className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25v13m0-13C10.83 5.48 9.25 5 7.5 5S4.17 5.48 3 6.25v13C4.17 18.48 5.75 18 7.5 18s3.33.48 4.5 1.25m0-13C13.17 5.48 14.75 5 16.5 5c1.75 0 3.33.48 4.5 1.25v13C19.83 18.48 18.25 18 16.5 18c-1.75 0-3.33.48-4.5 1.25" />
                  </svg>
                </span>
                <span className="whitespace-nowrap">All sources</span>
                <span className="hidden lg:inline ml-auto text-xs text-slate-400 tabular-nums">{data.sources.length}</span>
              </a>
            )}
          </nav>
        </aside>

        <main className="min-w-0">
          {tokens.length ? renderResults() : showSources ? renderSources() : domain ? renderDomain() : null}
        </main>
      </div>

      {withFeedback && (
        <section className="mt-16 pt-8 border-t border-slate-200 max-w-3xl">
          <h2 className="text-base font-semibold text-slate-900 mb-1">Notes on the whole codebook</h2>
          <p className="text-sm text-slate-500 mb-4">
            Missing a whole area of outcomes, or have a thought that doesn’t fit one domain? Tell us here.
          </p>
          {renderFeedback('general', '', GENERAL_TARGET_LABEL)}
        </section>
      )}
    </div>
  );
};

export default CodebookExplorer;
