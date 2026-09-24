import React, { useState } from 'react';
import { FEEDBACK_LIMITS, FeedbackKind, FeedbackTargetType, PublicFeedback } from '../services/feedback.js';
import { submitFeedback } from '../services/feedbackClient.js';

// Comments and "something's missing" notes on one domain or code of the
// public codebook explorer. New entries go to a moderation queue; only
// approved ones are listed here.

interface Props {
  codebookId: string;
  targetType: FeedbackTargetType;
  targetCode: string;
  /** Approved entries for this target. */
  items: PublicFeedback[];
  /** False when the site keeps approved feedback private (FEEDBACK_PUBLIC=false). */
  showsApproved: boolean;
  /** Open the form straight away with this kind and text (used by "Was this right?"). */
  initialKind?: FeedbackKind;
  initialBody?: string;
}

const KIND_LABEL: Record<FeedbackKind, string> = {
  comment: 'Comment',
  missing: 'Something missing',
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400';

const FeedbackPanel: React.FC<Props> = ({
  codebookId, targetType, targetCode, items, showsApproved, initialKind, initialBody,
}) => {
  const [formKind, setFormKind] = useState<FeedbackKind | null>(initialKind ?? null);
  const [body, setBody] = useState(initialBody ?? '');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  const noun = targetType === 'general' ? 'codebook' : targetType;

  const open = (kind: FeedbackKind) => {
    setFormKind(kind);
    setState('idle');
    setError(null);
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formKind) return;
    setState('sending');
    setError(null);
    try {
      await submitFeedback({ codebookId, targetType, targetCode, kind: formKind, body, name, organization, email, website });
      setState('sent');
      setBody('');
      setFormKind(null);
    } catch (err: any) {
      setState('idle');
      setError(err.message);
    }
  };

  return (
    <div>
      {items.length > 0 && (
        <ul className="space-y-2 mb-3">
          {items.map(item => (
            <li key={item.id} className="rounded-lg bg-slate-50 px-3 py-2.5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-500 mb-1">
                <span
                  className={`rounded px-1.5 py-px font-medium ${
                    item.kind === 'missing' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200/70 text-slate-700'
                  }`}
                >
                  {KIND_LABEL[item.kind]}
                </span>
                <span>{[item.name || 'Anonymous', item.organization].filter(Boolean).join(', ')}</span>
                <span className="text-slate-400">· {formatDate(item.createdAt)}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{item.body}</p>
            </li>
          ))}
        </ul>
      )}

      {state === 'sent' && (
        <p className="mb-3 text-sm text-emerald-800 bg-emerald-50 rounded-lg px-3 py-2">
          Thank you. Your feedback was sent for review.
          {showsApproved ? ' It will appear in the codebook once it is approved.' : ''}
        </p>
      )}

      {!formKind ? (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => open('comment')}
            className="text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg px-3 py-1.5 transition-colors"
          >
            Comment on this {noun}
          </button>
          <button
            type="button"
            onClick={() => open('missing')}
            className="text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg px-3 py-1.5 transition-colors"
          >
            Suggest something missing
          </button>
        </div>
      ) : (
        <form onSubmit={send} className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
          <div role="radiogroup" aria-label="Type of feedback" className="inline-flex rounded-lg bg-slate-100 p-1 text-sm">
            {(Object.keys(KIND_LABEL) as FeedbackKind[]).map(k => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={formKind === k}
                onClick={() => setFormKind(k)}
                className={`px-3 py-1 rounded-md transition-all ${
                  formKind === k ? 'bg-white shadow-sm font-medium text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {KIND_LABEL[k]}
              </button>
            ))}
          </div>
          <label className="block">
            <span className="sr-only">Your feedback</span>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              required
              minLength={3}
              maxLength={FEEDBACK_LIMITS.body}
              rows={4}
              placeholder={
                formKind === 'missing'
                  ? `What outcome, example or source is missing from this ${noun}? Where would you expect it?`
                  : `What works, what is unclear, or what would you change about this ${noun}?`
              }
              className={inputClass}
            />
          </label>
          <div className="grid gap-2 sm:grid-cols-3">
            <input value={name} onChange={e => setName(e.target.value)} maxLength={FEEDBACK_LIMITS.name} placeholder="Name (optional)" aria-label="Name (optional)" className={inputClass} />
            <input value={organization} onChange={e => setOrganization(e.target.value)} maxLength={FEEDBACK_LIMITS.organization} placeholder="Organization or role (optional)" aria-label="Organization or role (optional)" className={inputClass} />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={FEEDBACK_LIMITS.email} placeholder="Email (optional, never shown)" aria-label="Email (optional, never shown)" className={inputClass} />
          </div>
          {/* Honeypot: hidden from people, filled in by bots. */}
          <input
            type="text"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            name="website"
          />
          {error && <p className="text-sm text-rose-700 bg-rose-50 rounded-lg px-3 py-2">{error}</p>}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              Feedback is reviewed before it appears{showsApproved ? '' : ' and is kept private'}. It never changes the codebook directly.
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={() => setFormKind(null)} className="text-sm text-slate-600 hover:text-slate-900 px-3 py-1.5">
                Cancel
              </button>
              <button
                type="submit"
                disabled={state === 'sending' || body.trim().length < 3}
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-lg px-4 py-1.5 transition-colors"
              >
                {state === 'sending' ? 'Sending…' : 'Send feedback'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackPanel;
