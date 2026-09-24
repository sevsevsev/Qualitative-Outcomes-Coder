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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 gap-4">
          <a href={explorerHref(SITE_CODEBOOKS[0])} className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight truncate">
            {SITE_NAME}
          </a>
          <div className="flex items-center gap-1 text-sm">
            {([
              ['codebook', 'Codebook', explorerHref(route.codebookId)],
              ['try', 'Try it', `#/try/${tryCodebook}`],
            ] as const).map(([id, label, href]) => (
              <a
                key={id}
                href={href}
                aria-current={view === id ? 'page' : undefined}
                className={`whitespace-nowrap px-3 py-2 rounded-lg font-medium transition-colors ${
                  view === id ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        {view === 'admin' && <FeedbackAdmin />}
        {view === 'try' && (
          <TryCoder codebookId={tryCodebook} codebookIds={SITE_CODEBOOKS} onCodebookChange={id => { window.location.hash = `#/try/${id}`; }} />
        )}
        {view === 'codebook' && (
          <CodebookExplorer route={route} withFeedback codebookIds={SITE_CODEBOOKS} />
        )}
      </div>
    </div>
  );
};

export default ExplorerSite;
