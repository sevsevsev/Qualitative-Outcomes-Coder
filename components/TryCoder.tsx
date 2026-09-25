import React, { useState } from 'react';
import { CODEBOOK_LIST, CODEBOOK_REGISTRY, CodebookType } from '../codebooks/index.js';
import { codeNumber, FeedbackTargetType } from '../services/feedback.js';
import { tryCoding, TryCodingResponse } from '../services/feedbackClient.js';
import { normalizeSecondarySubcategory } from '../services/reviewNormalization.js';
import { splitCode } from '../services/codebookExplorer.js';
import { explorerHref } from './CodebookExplorer.js';
import FeedbackPanel from './FeedbackPanel.js';

// "Try it": a visitor writes one outcome statement and sees how the codebook
// codes it, with the same prompt and model as the coder. Each result can be
// sent back as feedback ("Was this right?").

const MAX_CHARS = 500;

const EXAMPLES = [
  'Students will improve their reading fluency by one grade level.',
  'Youth report feeling safe and connected to at least one caring adult at the program.',
  'Parents attend at least three family workshops and use strategies at home.',
];

const CONFIDENCE_STYLE: Record<string, string> = {
  high: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  medium: 'bg-sky-50 text-sky-700 ring-sky-200',
  low: 'bg-amber-50 text-amber-800 ring-amber-200',
  none: 'bg-slate-50 text-slate-600 ring-slate-200',
};

interface Props {
  codebookId: CodebookType;
  /** Codebooks offered in the picker. */
  codebookIds: readonly CodebookType[];
  onCodebookChange: (id: CodebookType) => void;
}

const CodeLink: React.FC<{ codebookId: string; code: string; isDomain?: boolean }> = ({ codebookId, code, isDomain }) => {
  const { number, title } = splitCode(code);
  return (
    <a
      href={explorerHref(codebookId, isDomain ? `d/${number}` : number)}
      className="inline-flex items-baseline gap-2 text-slate-900 hover:text-blue-700 group"
    >
      <span className="font-mono text-xs font-semibold bg-slate-100 group-hover:bg-blue-50 rounded px-1.5 py-0.5">{number}</span>
      <span className="font-medium underline decoration-slate-300 underline-offset-2 group-hover:decoration-blue-400">
        {title}
      </span>
    </a>
  );
};

const TryCoder: React.FC<Props> = ({ codebookId, codebookIds, onCodebookChange }) => {
  const codebookList = CODEBOOK_LIST.filter(cb => codebookIds.includes(cb.id as CodebookType));
  const codebook = CODEBOOK_REGISTRY[codebookId];
  const [text, setText] = useState('');
  const [state, setState] = useState<'idle' | 'coding'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<(TryCodingResponse & { text: string }) | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('coding');
    setError(null);
    setReviewing(false);
    setConfirmed(false);
    try {
      const r = await tryCoding(codebookId, text);
      setResponse({ ...r, text: text.trim() });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setState('idle');
    }
  };

  const items: any[] = response?.result?.split_items ?? [];
  const coded = items.filter(i => !i.uncoded && i.primary_domain);
  const first = coded[0];

  // Where "Was this right?" feedback is filed: the first code it picked, or
  // the whole codebook when nothing was coded.
  const reviewTarget: { type: FeedbackTargetType; code: string } = first
    ? first.primary_subcategory
      ? { type: 'code', code: codeNumber(first.primary_subcategory) }
      : { type: 'domain', code: codeNumber(first.primary_domain) }
    : { type: 'general', code: '' };

  const summary = coded.length
    ? coded.map(i => i.primary_subcategory || i.primary_domain).join('; ')
    : 'not coded';
  const reviewBody = response
    ? `Statement: "${response.text}"\nCoded as: ${summary} (codebook v${response.codebookVersion})\n\nI'd code this as ___ because ___`
    : '';

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-2">Try the codebook</div>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Code an outcome statement</h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Write one outcome your program aims for and see which codes it gets. This uses the same instructions and AI model as
        the coding tool. Statements are not saved unless you send one in a note.
      </p>

      <form onSubmit={run} className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        {codebookList.length > 1 && (
          <label className="block text-sm">
            <span className="text-slate-600 mr-2">Codebook</span>
            <select
              value={codebookId}
              onChange={e => { onCodebookChange(e.target.value as CodebookType); setResponse(null); }}
              className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-slate-900"
            >
              {codebookList.map(cb => <option key={cb.id} value={cb.id}>{cb.label}</option>)}
            </select>
          </label>
        )}
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          maxLength={MAX_CHARS}
          rows={3}
          required
          aria-label="Outcome statement"
          placeholder="For example: Participants will increase their school attendance."
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                type="button"
                onClick={() => setText(ex)}
                className="text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full px-2.5 py-1 transition-colors text-left"
              >
                {ex.length > 48 ? `${ex.slice(0, 46)}…` : ex}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 tabular-nums">{text.length}/{MAX_CHARS}</span>
            <button
              type="submit"
              disabled={state === 'coding' || text.trim().length < 5}
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-lg px-5 py-2 transition-colors"
            >
              {state === 'coding' ? 'Coding…' : 'Code it'}
            </button>
          </div>
        </div>
        {error && <p className="text-sm text-rose-700 bg-rose-50 rounded-lg px-3 py-2">{error}</p>}
      </form>

      {response && (
        <section className="mt-8 animate-[fadeIn_.25s_ease-out]" aria-live="polite">
          <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
          <div className="text-sm text-slate-500 mb-3">
            {items.length > 1 ? `Split into ${items.length} outcomes` : 'Result'} · codebook v{response.codebookVersion}
          </div>
          <ul className="space-y-3">
            {items.map((item, i) => {
              const secondaries = (item.secondary_codes ?? [])
                .map((sc: any) => ({ ...sc, subcategory: normalizeSecondarySubcategory(sc.subcategory, sc.domain, codebook) }))
                .filter((sc: any) => sc.domain);
              return (
                <li key={i} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
                  {items.length > 1 && <p className="text-sm text-slate-500 mb-3">“{item.text}”</p>}
                  {item.uncoded || !item.primary_domain ? (
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">Not coded.</span> The codebook treats this as outside its scope or too
                      vague to code.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        {item.primary_subcategory ? (
                          <CodeLink codebookId={codebookId} code={item.primary_subcategory} />
                        ) : (
                          <CodeLink codebookId={codebookId} code={item.primary_domain} isDomain />
                        )}
                        {item.primary_confidence && (
                          <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${CONFIDENCE_STYLE[item.primary_confidence] ?? CONFIDENCE_STYLE.none}`}>
                            {item.primary_confidence} confidence
                          </span>
                        )}
                      </div>
                      {item.primary_subcategory && (
                        <div className="text-xs text-slate-500">
                          Domain: <CodeLink codebookId={codebookId} code={item.primary_domain} isDomain />
                        </div>
                      )}
                      {item.subject_area && item.subject_area !== 'N/A' && (
                        <div className="text-xs text-slate-500">Subject area: {item.subject_area}</div>
                      )}
                      {secondaries.length > 0 && (
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-1.5">Also relates to</div>
                          <ul className="space-y-1">
                            {secondaries.map((sc: any, j: number) => (
                              <li key={j} className="text-sm">
                                <CodeLink codebookId={codebookId} code={sc.subcategory || sc.domain} isDomain={!sc.subcategory} />
                                <span className="text-xs text-slate-400 ml-2">{sc.confidence}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          {response.result?.notes && (
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              <span className="text-slate-400">Model’s note: </span>
              {response.result.notes}
            </p>
          )}

          <div className="mt-6">
            {!reviewing ? (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-700 mr-1">Did it get this right?</span>
                {confirmed ? (
                  <span className="text-sm text-emerald-700" role="status">Thanks for checking.</span>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setConfirmed(true)}
                      className="text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg px-3 py-1.5 transition-colors"
                    >
                      Looks right
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewing(true)}
                      className="text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg px-3 py-1.5 transition-colors"
                    >
                      Not quite
                    </button>
                  </>
                )}
              </div>
            ) : (
              <FeedbackPanel
                key={`${response.text}-${reviewTarget.type}-${reviewTarget.code}`}
                codebookId={codebookId}
                targetType={reviewTarget.type}
                targetCode={reviewTarget.code}
                items={[]}
                showsApproved
                initialKind="comment"
                initialBody={reviewBody}
                intro="How would you code it? Your statement and its result are filled in below."
                listedHere={false}
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default TryCoder;
