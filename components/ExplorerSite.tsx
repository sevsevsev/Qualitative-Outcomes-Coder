import React, { useEffect, useState } from 'react';
import { CodebookType } from '../codebooks/index.js';
import { parseExplorerCodebooks } from '../services/explorerCodebooks.js';
import CodebookExplorer, { explorerHref, parseExplorerRoute } from './CodebookExplorer.js';
import FeedbackAdmin from './FeedbackAdmin.js';
import TryCoder from './TryCoder.js';

// The public codebook explorer site: the same explorer as the app's Codebook
// tab, plus visitor feedback and a "try it" box, and none of the coder.
// Built from this repo with VITE_SITE=explorer (see index.tsx and README).
//
// Routes: #/codebook/<id>/<target> (default), #/try/<id>, #/admin.

const readHash = () => window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);

// Codebooks this site shows (VITE_EXPLORER_CODEBOOKS; see services/explorerCodebooks.ts).
const SITE_CODEBOOKS = parseExplorerCodebooks(import.meta.env.VITE_EXPLORER_CODEBOOKS);

const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'Youth Outcomes Codebook';

const TryIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h6m-6 4h4m5.5-1.5L20 17l-3.5 3.5M14 17h6M5 3h14a2 2 0 012 2v6M5 3a2 2 0 00-2 2v14a2 2 0 002 2h6" />
  </svg>
);

// Invites visitors to test the codebook on their own outcomes, above the explorer.
const TryCallout: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    className="group max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 hover:border-blue-300 hover:bg-blue-100/60 transition-colors"
  >
    <span className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
      <TryIcon className="w-5 h-5" />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block font-semibold text-slate-900">Try the codebook on your own outcomes</span>
      <span className="block text-sm text-slate-600 mt-0.5 leading-relaxed">
        Type an outcome statement your program uses, like “Students improve reading fluency by one grade level,” and see
        which code it gets.
      </span>
    </span>
    <span className="shrink-0 self-start sm:self-auto inline-flex items-center gap-1 rounded-lg bg-blue-600 group-hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 transition-colors">
      Code a statement <span aria-hidden>→</span>
    </span>
  </a>
);

const ExplorerSite: React.FC = () => {
  const [hashPath, setHashPath] = useState<string[]>(readHash);
  useEffect(() => {
    const onHash = () => setHashPath(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => { document.title = SITE_NAME; }, []);

  const view: 'codebook' | 'try' | 'admin' =
    hashPath[0] === 'try' ? 'try' : hashPath[0] === 'admin' ? 'admin' : 'codebook';
  const route = parseExplorerRoute(view === 'codebook' ? hashPath.slice(1) : [], SITE_CODEBOOKS);
  const tryCodebook: CodebookType =
    view === 'try' && SITE_CODEBOOKS.includes(hashPath[1] as CodebookType) ? (hashPath[1] as CodebookType) : route.codebookId;

  const tryHref = `#/try/${tryCodebook}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 gap-4">
          <a href={explorerHref(SITE_CODEBOOKS[0])} className="font-bold text-base sm:text-xl text-slate-800 tracking-tight truncate min-w-0">
            {SITE_NAME}
          </a>
          <div className="flex items-center gap-1.5 sm:gap-2 text-sm shrink-0">
            <a
              href={explorerHref(route.codebookId)}
              aria-current={view === 'codebook' ? 'page' : undefined}
              className={`hidden sm:inline-block whitespace-nowrap px-3 py-2 rounded-lg font-medium transition-colors ${
                view === 'codebook' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Codebook
            </a>
            {/* The main call to action: test the codebook on your own outcome statement. */}
            <a
              href={tryHref}
              aria-current={view === 'try' ? 'page' : undefined}
              className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold shadow-sm transition-colors ${
                view === 'try' ? 'bg-blue-700 text-white ring-2 ring-blue-200' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <TryIcon />
              Code a statement
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        {view === 'admin' && <FeedbackAdmin />}
        {view === 'try' && (
          <TryCoder codebookId={tryCodebook} codebookIds={SITE_CODEBOOKS} onCodebookChange={id => { window.location.hash = `#/try/${id}`; }} />
        )}
        {view === 'codebook' && (
          <>
            <TryCallout href={tryHref} />
            <CodebookExplorer route={route} withFeedback codebookIds={SITE_CODEBOOKS} />
          </>
        )}
      </div>
    </div>
  );
};

export default ExplorerSite;
