import React, { useCallback, useEffect, useState } from 'react';
import { AdminFeedback, FeedbackStatus } from '../services/feedback.js';
import { downloadFeedbackCsv, fetchAdminFeedback, moderateFeedback } from '../services/feedbackClient.js';
import { explorerHref } from './CodebookExplorer.js';

// Moderation queue for explorer feedback, at #/admin on the explorer site.
// The password is checked by api/feedback-admin.ts on every request and kept
// in this tab's sessionStorage only.

const PASSWORD_KEY = 'codebook-feedback-admin';

const readPassword = () => {
  try { return sessionStorage.getItem(PASSWORD_KEY) ?? ''; } catch { return ''; }
};
const writePassword = (value: string) => {
  try {
    if (value) sessionStorage.setItem(PASSWORD_KEY, value);
    else sessionStorage.removeItem(PASSWORD_KEY);
  } catch { /* storage unavailable; the password just isn't remembered */ }
};

const TABS: { id: FeedbackStatus | 'all'; label: string }[] = [
  { id: 'pending', label: 'Waiting for review' },
  { id: 'approved', label: 'Approved' },
  { id: 'rejected', label: 'Rejected' },
  { id: 'all', label: 'All' },
];

const STATUS_STYLE: Record<FeedbackStatus, string> = {
  pending: 'bg-amber-50 text-amber-800 ring-amber-200',
  approved: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  rejected: 'bg-slate-100 text-slate-600 ring-slate-200',
};

const FeedbackAdmin: React.FC = () => {
  const [password, setPassword] = useState(readPassword);
  const [draft, setDraft] = useState('');
  const [tab, setTab] = useState<FeedbackStatus | 'all'>('pending');
  const [items, setItems] = useState<AdminFeedback[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<number | null>(null);
  const [includeEmail, setIncludeEmail] = useState(false);

  const load = useCallback(async () => {
    if (!password) return;
    setError(null);
    try {
      setItems(await fetchAdminFeedback(password, tab));
    } catch (e: any) {
      setItems(null);
      setError(e.message);
      if (/password/i.test(e.message)) {
        setPassword('');
        writePassword('');
      }
    }
  }, [password, tab]);

  useEffect(() => { load(); }, [load]);

  const act = async (id: number, action: 'approve' | 'reject' | 'pending' | 'delete') => {
    if (action === 'delete' && !window.confirm('Delete this feedback permanently?')) return;
    setBusy(id);
    try {
      await moderateFeedback(password, id, action);
      await load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(null);
    }
  };

  if (!password) {
    return (
      <form
        onSubmit={e => { e.preventDefault(); writePassword(draft); setPassword(draft); setDraft(''); }}
        className="max-w-sm mx-auto mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
      >
        <h1 className="text-lg font-semibold text-slate-900">Review feedback</h1>
        <input
          type="password"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Admin password"
          aria-label="Admin password"
          autoComplete="current-password"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
        {error && <p className="text-sm text-rose-700">{error}</p>}
        <button type="submit" disabled={!draft} className="w-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-lg px-4 py-2">
          Sign in
        </button>
      </form>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Review feedback</h1>
          <p className="text-sm text-slate-500 mt-1">
            Approving shows an entry on the site. It never changes the codebook: export approved feedback into
            codebook-refinement/feedback/ and it feeds the next refinement cycle.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <label className="flex items-center gap-1.5 text-slate-600">
            <input type="checkbox" checked={includeEmail} onChange={e => setIncludeEmail(e.target.checked)} />
            Include emails
          </label>
          <button
            type="button"
            onClick={() => downloadFeedbackCsv(password, tab, includeEmail).catch(e => setError(e.message))}
            className="font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg px-3 py-1.5"
          >
            Download CSV
          </button>
          <button type="button" onClick={() => { writePassword(''); setPassword(''); }} className="text-slate-500 hover:text-slate-900">
            Sign out
          </button>
        </div>
      </div>

      <div role="tablist" className="inline-flex rounded-lg bg-slate-200/60 p-1 mb-6 text-sm">
        {TABS.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-md transition-all ${tab === t.id ? 'bg-white shadow-sm font-medium text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && <p className="mb-4 text-sm text-rose-700 bg-rose-50 rounded-lg px-3 py-2">{error}</p>}
      {items === null && !error && <p className="text-sm text-slate-500">Loading…</p>}
      {items?.length === 0 && (
        <p className="rounded-xl border border-dashed border-slate-300 px-6 py-10 text-center text-sm text-slate-500">Nothing here.</p>
      )}

      <ul className="space-y-3">
        {items?.map(item => (
          <li key={item.id} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
              <span className={`rounded-full px-2 py-0.5 font-medium ring-1 ring-inset ${STATUS_STYLE[item.status]}`}>{item.status}</span>
              <span className={`rounded px-1.5 py-px font-medium ${item.kind === 'missing' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
                {item.kind === 'missing' ? 'Something missing' : 'Comment'}
              </span>
              {item.targetType === 'general' ? (
                <span className="font-medium text-slate-700">{item.targetLabel}</span>
              ) : (
                <a href={explorerHref(item.codebookId, item.targetType === 'domain' ? `d/${item.targetCode}` : item.targetCode)} className="font-medium text-slate-700 hover:text-blue-700">
                  {item.targetType === 'domain' ? 'Domain ' : ''}{item.targetLabel}
                </a>
              )}
              <span>· v{item.codebookVersion}</span>
              <span>· {new Date(item.createdAt).toLocaleString()}</span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">{item.body}</p>
            <div className="mt-2 text-xs text-slate-500">
              {[item.name || 'Anonymous', item.organization, item.email].filter(Boolean).join(' · ')}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {item.status !== 'approved' && (
                <button disabled={busy === item.id} onClick={() => act(item.id, 'approve')} className="font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 rounded-lg px-3 py-1">
                  Approve
                </button>
              )}
              {item.status !== 'rejected' && (
                <button disabled={busy === item.id} onClick={() => act(item.id, 'reject')} className="font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50 rounded-lg px-3 py-1">
                  Reject
                </button>
              )}
              <button disabled={busy === item.id} onClick={() => act(item.id, 'delete')} className="text-rose-700 hover:text-rose-900 disabled:opacity-50 px-2 py-1">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackAdmin;
