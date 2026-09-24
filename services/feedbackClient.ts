// services/feedbackClient.ts
//
// Browser calls to the feedback API (api/feedback.ts, api/feedback-admin.ts).

import type { AdminFeedback, FeedbackStatus, FeedbackSubmission, PublicFeedback } from './feedback.js';

export const IS_EXPLORER_SITE = import.meta.env.VITE_SITE === 'explorer';

const errorFrom = async (res: Response): Promise<Error> => {
  const body = await res.json().catch(() => null);
  return new Error(body?.error || `Request failed (${res.status}).`);
};

export const fetchApprovedFeedback = async (codebookId: string): Promise<{ public: boolean; items: PublicFeedback[] }> => {
  const res = await fetch(`/api/feedback?codebook=${encodeURIComponent(codebookId)}`);
  if (!res.ok) throw await errorFrom(res);
  return res.json();
};

export const submitFeedback = async (submission: FeedbackSubmission): Promise<void> => {
  const res = await fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submission),
  });
  if (!res.ok) throw await errorFrom(res);
};

const adminHeaders = (password: string) => ({ Authorization: `Bearer ${password}` });

export const fetchAdminFeedback = async (password: string, status: FeedbackStatus | 'all'): Promise<AdminFeedback[]> => {
  const res = await fetch(`/api/feedback-admin?status=${status}`, { headers: adminHeaders(password) });
  if (!res.ok) throw await errorFrom(res);
  return (await res.json()).items;
};

export const moderateFeedback = async (
  password: string,
  id: number,
  action: 'approve' | 'reject' | 'pending' | 'delete',
): Promise<void> => {
  const res = await fetch('/api/feedback-admin', {
    method: 'POST',
    headers: { ...adminHeaders(password), 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, action }),
  });
  if (!res.ok) throw await errorFrom(res);
};

export const downloadFeedbackCsv = async (password: string, status: FeedbackStatus | 'all', includeEmail: boolean) => {
  const res = await fetch(`/api/feedback-admin?status=${status}&format=csv${includeEmail ? '&email=1' : ''}`, {
    headers: adminHeaders(password),
  });
  if (!res.ok) throw await errorFrom(res);
  const url = URL.createObjectURL(await res.blob());
  const a = document.createElement('a');
  a.href = url;
  a.download = `codebook-feedback-${status}-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

export interface TryCodingResponse {
  codebookVersion: string;
  modelUsed: string;
  /** One coded item, shaped by codebooks/geminiSchema.ts. */
  result: any;
}

export const tryCoding = async (codebookType: string, text: string): Promise<TryCodingResponse> => {
  const res = await fetch('/api/try-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ codebookType, text }),
  });
  if (!res.ok) throw await errorFrom(res);
  return res.json();
};
