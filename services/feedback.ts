// services/feedback.ts
//
// Visitor feedback on the public codebook explorer: comments on a code or
// domain, and notes about something the visitor thinks is missing. Shared by
// the browser (form limits, types) and the API routes (validation), so both
// sides agree on the same rules.
//
// Feedback never edits a codebook. Approved entries are exported to
// codebook-refinement/feedback/ as leads for a refinement cycle; any change
// they prompt still goes through a change proposal (see STANDARDS.md).

import { Codebook, CODEBOOK_REGISTRY, CodebookType } from '../codebooks/index.js';

export type FeedbackKind = 'comment' | 'missing';
/** "general" is feedback on the codebook as a whole (targetCode is ""). */
export type FeedbackTargetType = 'domain' | 'code' | 'general';
export type FeedbackStatus = 'pending' | 'approved' | 'rejected';

export const FEEDBACK_KINDS: readonly FeedbackKind[] = ['comment', 'missing'];
export const FEEDBACK_STATUSES: readonly FeedbackStatus[] = ['pending', 'approved', 'rejected'];

export const FEEDBACK_LIMITS = {
  body: 2000,
  name: 80,
  email: 200,
  organization: 120,
};

/** What a visitor sends. The server fills in the label and version itself. */
export interface FeedbackSubmission {
  codebookId: string;
  targetType: FeedbackTargetType;
  /** Code number as the explorer shows it: "1.3", "3" for a domain, "" for general. */
  targetCode: string;
  kind: FeedbackKind;
  body: string;
  name?: string;
  email?: string;
  organization?: string;
  /** Honeypot: a field real visitors never see. Anything in it marks a bot. */
  website?: string;
}

/** A visitor submission after validation, ready to store. */
export interface ValidFeedback {
  codebookId: CodebookType;
  /**
   * The codebook version the visitor was looking at. Stored with the label
   * so a comment stays attached to the right code across a renumbering
   * (see codebook-refinement/renumbering/).
   */
  codebookVersion: string;
  targetType: FeedbackTargetType;
  targetCode: string;
  targetLabel: string;
  kind: FeedbackKind;
  body: string;
  name: string | null;
  email: string | null;
  organization: string | null;
}

/** An entry as shown on the public site: no email, no moderation fields. */
export interface PublicFeedback {
  id: number;
  createdAt: string;
  codebookVersion: string;
  targetType: FeedbackTargetType;
  targetCode: string;
  targetLabel: string;
  kind: FeedbackKind;
  body: string;
  name: string | null;
  organization: string | null;
}

/** An entry as the admin page sees it. */
export interface AdminFeedback extends PublicFeedback {
  codebookId: string;
  email: string | null;
  status: FeedbackStatus;
  reviewedAt: string | null;
}

export const GENERAL_TARGET_LABEL = 'Whole codebook';

const LEADING_NUMBER = /^(?:(?:Domain|Code)\s+)?(\d+(?:\.\d+)*)[.:]?\s+/;

/** The leading number of a domain or subcategory code string ("1.3 Math" -> "1.3"). */
export const codeNumber = (code: string): string => code.trim().match(LEADING_NUMBER)?.[1] ?? '';

/**
 * The full code string for a target in the given codebook, or null when the
 * codebook has no such domain or code. The label is always read from the
 * codebook, never taken from the visitor.
 */
export const resolveTarget = (
  codebook: Codebook,
  targetType: FeedbackTargetType,
  targetCode: string,
): string | null => {
  if (targetType === 'general') return targetCode === '' ? GENERAL_TARGET_LABEL : null;
  if (targetType === 'domain') {
    return codebook.domains.find(d => codeNumber(d.code) === targetCode)?.code ?? null;
  }
  for (const d of codebook.domains) {
    const sub = d.subcategories.find(s => codeNumber(s.code) === targetCode);
    if (sub) return sub.code;
  }
  return null;
};

const clean = (value: unknown, max: number): string | null => {
  if (typeof value !== 'string') return null;
  // Drop control characters except newlines and tabs; collapse runs of blank lines.
  const text = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').replace(/\n{3,}/g, '\n\n').trim();
  return text ? text.slice(0, max) : null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationResult =
  | { ok: true; value: ValidFeedback }
  | { ok: false; error: string; bot?: boolean };

export const validateSubmission = (input: unknown): ValidationResult => {
  if (!input || typeof input !== 'object') return { ok: false, error: 'Expected a JSON object.' };
  const s = input as Partial<FeedbackSubmission>;

  if (typeof s.website === 'string' && s.website.trim()) {
    return { ok: false, error: 'Rejected.', bot: true };
  }

  const codebookId = s.codebookId as CodebookType;
  if (typeof codebookId !== 'string' || !(codebookId in CODEBOOK_REGISTRY)) {
    return { ok: false, error: 'Unknown codebook.' };
  }
  const codebook = CODEBOOK_REGISTRY[codebookId];

  if (s.targetType !== 'domain' && s.targetType !== 'code' && s.targetType !== 'general') {
    return { ok: false, error: 'targetType must be "domain", "code" or "general".' };
  }
  const targetCode = typeof s.targetCode === 'string' ? s.targetCode.trim() : '';
  const targetLabel = resolveTarget(codebook, s.targetType, targetCode);
  if (!targetLabel) return { ok: false, error: `No ${s.targetType} "${targetCode}" in this codebook.` };

  if (!FEEDBACK_KINDS.includes(s.kind as FeedbackKind)) {
    return { ok: false, error: 'kind must be "comment" or "missing".' };
  }

  if (typeof s.body === 'string' && s.body.trim().length > FEEDBACK_LIMITS.body) {
    return { ok: false, error: `Please keep feedback under ${FEEDBACK_LIMITS.body} characters.` };
  }
  const body = clean(s.body, FEEDBACK_LIMITS.body);
  if (!body || body.length < 3) return { ok: false, error: 'Please write a few words of feedback.' };

  const email = clean(s.email, FEEDBACK_LIMITS.email);
  if (email && !EMAIL_RE.test(email)) return { ok: false, error: 'That email address does not look right.' };

  return {
    ok: true,
    value: {
      codebookId,
      codebookVersion: codebook.version,
      targetType: s.targetType,
      targetCode,
      targetLabel,
      kind: s.kind as FeedbackKind,
      body,
      name: clean(s.name, FEEDBACK_LIMITS.name),
      email,
      organization: clean(s.organization, FEEDBACK_LIMITS.organization),
    },
  };
};

const CSV_COLUMNS: (keyof AdminFeedback)[] = [
  'id', 'createdAt', 'status', 'reviewedAt', 'codebookId', 'codebookVersion',
  'targetType', 'targetCode', 'targetLabel', 'kind', 'body', 'name', 'organization', 'email',
];

const csvCell = (value: unknown): string => {
  if (value === null || value === undefined) return '';
  let text = String(value);
  // Keep spreadsheet apps from running a cell as a formula.
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

/** CSV for the admin export. Column names match codebook-refinement/feedback/README.md. */
export const feedbackToCsv = (rows: AdminFeedback[], includeEmail = false): string => {
  const columns = includeEmail ? CSV_COLUMNS : CSV_COLUMNS.filter(c => c !== 'email');
  const header = columns.map(c => c.replace(/[A-Z]/g, m => `_${m.toLowerCase()}`)).join(',');
  return [header, ...rows.map(r => columns.map(c => csvCell(r[c])).join(','))].join('\n') + '\n';
};
