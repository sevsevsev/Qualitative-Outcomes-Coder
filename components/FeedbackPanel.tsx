import React, { useState } from 'react';
import {
  FEEDBACK_KIND_LABEL, FEEDBACK_LIMITS, FeedbackKind, FeedbackTargetType, PublicFeedback,
} from '../services/feedback.js';
import { submitFeedback } from '../services/feedbackClient.js';

// "Notes from the field" on one domain or code of the public codebook
// explorer, or on the codebook as a whole. The form is always open: one text
// box, optional one-tap prompts that say what kinds of notes help most, and
// optional extras. New notes go to a moderation queue; only approved ones are
// listed here, and none of them changes the codebook directly.

export interface CodeOption {
  number: string;
  title: string;
}

interface Props {
  codebookId: string;
  targetType: FeedbackTargetType;
  targetCode: string;
  /** Approved notes for this target. */
  items: PublicFeedback[];
  /** False when the site keeps approved notes private (FEEDBACK_PUBLIC=false). */
  showsApproved: boolean;
  /** Start with this kind and text (used by Try it's "Not quite"). */
  initialKind?: FeedbackKind;
  initialBody?: string;
  /** Codes offered in the "overlaps with" picker. */
  codeOptions?: CodeOption[];
  /** Id for the text box, so an "Add a note" link elsewhere can focus it. */
  inputId?: string;
  /** Replaces the opening line (Try it uses its own). */
  intro?: string;
  /** False when the form is not on the page where approved notes are listed (Try it). */
  listedHere?: boolean;
}

interface Prompt {
  kind: FeedbackKind;
  label: string;
  /** Sentence start dropped into an empty text box. */
  stem: string;
}

// The one-tap prompts double as the answer to "what kind of notes do you want?".
const PROMPTS: Record<FeedbackTargetType, Prompt[]> = {
  code: [
    { kind: 'unclear', label: 'The definition is unclear', stem: 'The part I found unclear: ' },
    { kind: 'overlap', label: 'It overlaps another code', stem: 'This is hard to tell apart from another code because ' },
    { kind: 'missing', label: 'Something’s missing here', stem: 'An outcome we track that doesn’t fit here yet: ' },
    { kind: 'wording', label: 'We’d word it differently', stem: 'In our program we’d say: ' },
    { kind: 'source', label: 'Suggest a source', stem: 'A source worth checking (a link helps): ' },
  ],
  domain: [
    { kind: 'missing', label: 'An outcome we track isn’t here', stem: 'An outcome we track that I can’t find: ' },
    { kind: 'overlap', label: 'Two codes blur together', stem: 'These two codes are hard to tell apart: ' },
    { kind: 'unclear', label: 'Something’s unclear', stem: 'The part I found unclear: ' },
    { kind: 'wording', label: 'We’d word it differently', stem: 'In our program we’d say: ' },
    { kind: 'source', label: 'Suggest a source', stem: 'A source worth checking (a link helps): ' },
  ],
  general: [
    { kind: 'missing', label: 'A whole area is missing', stem: 'Outcomes we work on that have no home in the codebook: ' },
    { kind: 'unclear', label: 'Something’s hard to use', stem: 'What made it hard to use: ' },
    { kind: 'source', label: 'Suggest a source', stem: 'A framework or source worth checking (a link helps): ' },
  ],
};

const STEMS = new Set(Object.values(PROMPTS).flat().map(p => p.stem));

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400';

const linkButton = 'text-left text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors';

const FeedbackPanel: React.FC<Props> = ({
  codebookId, targetType, targetCode, items, showsApproved, initialKind, initialBody, codeOptions = [], inputId, intro, listedHere = true,
}) => {
  const [kind, setKind] = useState<FeedbackKind | null>(initialKind && initialKind !== 'comment' ? initialKind : null);
  const [body, setBody] = useState(initialBody ?? '');
  const [example, setExample] = useState('');
  const [showExample, setShowExample] = useState(false);
  const [related, setRelated] = useState('');
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  const noun = targetType === 'general' ? 'codebook' : targetType;
  const prompts = PROMPTS[targetType];
  const pickerId = inputId ? `${inputId}-codes` : undefined;

  const pick = (p: Prompt) => {
    const off = kind === p.kind;
    setKind(off ? null : p.kind);
    // Swap the sentence start only while the visitor hasn't written their own words.
    if (!body.trim() || STEMS.has(body)) setBody(off ? '' : p.stem);
    if (!off && p.kind === 'missing') setShowExample(true);
    setState('idle');
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    setError(null);
    try {
      // Send only a code the picker knows; a free-text guess stays in the note itself.
      const typed = related.trim().toLowerCase();
      const match = kind === 'overlap' && typed
        ? codeOptions.find(c => c.number === typed.split(/\s+/)[0] || c.title.toLowerCase() === typed || `${c.number} ${c.title}`.toLowerCase() === typed)
        : undefined;
      const relatedNumber = match?.number ?? '';
      await submitFeedback({
        codebookId, targetType, targetCode, kind: kind ?? 'comment', body,
        exampleStatement: example, relatedCode: relatedNumber, name, organization, email, website,
      });
      setState('sent');
      setBody('');
      setExample('');
      setRelated('');
      setKind(null);
    } catch (err: any) {
      setState('idle');
      setError(err.message);
    }
  };

  const hasText = body.trim().length >= 3 && !STEMS.has(body);

  return (
    <div>
      {items.length > 0 && (
        <ul className="space-y-2 mb-4">
          {items.map(item => (
            <li key={item.id} className="rounded-lg bg-slate-50 px-3 py-2.5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-500 mb-1">
                <span
                  className={`rounded px-1.5 py-px font-medium ${
                    item.kind === 'missing' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200/70 text-slate-700'
                  }`}
                >
                  {FEEDBACK_KIND_LABEL[item.kind] ?? 'Note'}
                </span>
                <span>{[item.organization, item.name].filter(Boolean).join(' · ') || 'Anonymous'}</span>
                <span className="text-slate-400">· {formatDate(item.createdAt)}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{item.body}</p>
              {item.relatedCode && (
                <p className="mt-1 text-xs text-slate-500">Overlaps with {item.relatedCode}</p>
              )}
              {item.exampleStatement && (
                <p className="mt-2 text-sm text-slate-700 border-l-2 border-slate-300 pl-3 italic">“{item.exampleStatement}”</p>
              )}
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={send} className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
        <p className="text-sm text-slate-700">
          {intro ??
            (items.length === 0 && showsApproved
              ? 'No notes from the field yet. If you run or evaluate a program like this, yours would be the first.'
              : `Does this ${noun} match how your program talks about its outcomes?`)}
        </p>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label="What kind of note (optional)">
          {prompts.map(p => (
            <button
              key={p.kind}
              type="button"
              aria-pressed={kind === p.kind}
              onClick={() => pick(p)}
              className={`text-xs sm:text-[13px] rounded-full border px-3 py-1 transition-colors ${
                kind === p.kind
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <label className="block">
          <span className="sr-only">Your note</span>
          <textarea
            id={inputId}
            value={body}
            onChange={e => { setBody(e.target.value); if (state === 'sent') setState('idle'); }}
            required
            minLength={3}
            maxLength={FEEDBACK_LIMITS.body}
            rows={initialBody ? 5 : 3}
            placeholder={`What would you change about this ${noun}? Half-formed thoughts are welcome.`}
            className={inputClass}
          />
        </label>

        {kind === 'overlap' && targetType !== 'general' && codeOptions.length > 0 && (
          <label className="block">
            <span className="block text-xs text-slate-500 mb-1">Which code does it get confused with? (optional)</span>
            <input
              list={pickerId}
              value={related}
              onChange={e => setRelated(e.target.value)}
              placeholder="Type a number or name, e.g. 3.2"
              className={inputClass}
            />
            <datalist id={pickerId}>
              {codeOptions.filter(c => c.number !== targetCode).map(c => (
                <option key={c.number} value={`${c.number} ${c.title}`} />
              ))}
            </datalist>
          </label>
        )}

        {showExample ? (
          <label className="block">
            <span className="block text-xs text-slate-500 mb-1">
              An outcome statement from your program (optional). Please leave out names.
            </span>
            <textarea
              value={example}
              onChange={e => setExample(e.target.value)}
              maxLength={FEEDBACK_LIMITS.exampleStatement}
              rows={2}
              placeholder="e.g. “Participants will demonstrate improved conflict resolution skills.”"
              className={inputClass}
            />
          </label>
        ) : null}

        {showContact && (
          <div className="grid gap-2 sm:grid-cols-3">
            <input value={name} onChange={e => setName(e.target.value)} maxLength={FEEDBACK_LIMITS.name} placeholder="Name" aria-label="Name (optional)" className={inputClass} />
            <input value={organization} onChange={e => setOrganization(e.target.value)} maxLength={FEEDBACK_LIMITS.organization} placeholder="Organization or role" aria-label="Organization or role (optional)" className={inputClass} />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={FEEDBACK_LIMITS.email} placeholder="Email (never shown)" aria-label="Email (optional, never shown)" className={inputClass} />
          </div>
        )}

        {(!showExample || !showContact) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {!showExample && (
              <button type="button" onClick={() => setShowExample(true)} className={linkButton}>
                + Add an outcome statement from your program
              </button>
            )}
            {!showContact && (
              <button type="button" onClick={() => setShowContact(true)} className={linkButton}>
                + Add your name (optional)
              </button>
            )}
          </div>
        )}

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
        {state === 'sent' && (
          <p className="text-sm text-emerald-800 bg-emerald-50 rounded-lg px-3 py-2" role="status">
            Thank you. A person will read your note{showsApproved && listedHere ? ' before it appears here' : ''}.
          </p>
        )}

        <div className="flex flex-wrap items-end justify-between gap-3 pt-1">
          <p className="text-xs text-slate-500 leading-relaxed max-w-md">
            A person reads every note.
            {showsApproved ? (listedHere ? ' Approved notes appear here for others.' : ' Approved notes appear on the code’s page.') : ''} Notes feed the next
            revision, where any change is written up and reviewed.
          </p>
          <button
            type="submit"
            disabled={state === 'sending' || !hasText}
            className="shrink-0 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-lg px-4 py-2 transition-colors"
          >
            {state === 'sending' ? 'Sending…' : 'Send note'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackPanel;
