// api/_lib/testing.ts
//
// Test helpers for the API routes: a fake request/response pair and an
// in-memory FeedbackStore. Not imported by any route.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { AdminFeedback, FeedbackStatus, PublicFeedback, ValidFeedback } from '../../services/feedback.js';
import type { FeedbackStore } from './feedbackStore.js';

export interface FakeResponse {
  statusCode: number;
  body: any;
  headers: Record<string, string>;
}

export const call = async (
  handler: (req: VercelRequest, res: VercelResponse) => Promise<void>,
  req: { method: string; body?: any; query?: Record<string, string>; headers?: Record<string, string> },
): Promise<FakeResponse> => {
  const out: FakeResponse = { statusCode: 0, body: undefined, headers: {} };
  const res: any = {
    status(code: number) { out.statusCode = code; return res; },
    json(body: any) { out.body = body; return res; },
    send(body: any) { out.body = body; return res; },
    setHeader(name: string, value: string) { out.headers[name.toLowerCase()] = value; return res; },
  };
  await handler({ query: {}, headers: {}, ...req } as any, res);
  return out;
};

export const memoryStore = () => {
  const rows: (AdminFeedback & { ipHash: string | null; createdMs: number })[] = [];
  const tries: { ipHash: string | null; createdMs: number }[] = [];
  let now = Date.parse('2026-09-24T12:00:00Z');
  const toPublic = ({ id, createdAt, codebookVersion, targetType, targetCode, targetLabel, kind, body, exampleStatement, relatedCode, name, organization }: AdminFeedback): PublicFeedback =>
    ({ id, createdAt, codebookVersion, targetType, targetCode, targetLabel, kind, body, exampleStatement, relatedCode, name, organization });

  const store: FeedbackStore = {
    async insert(e: ValidFeedback, ipHash) {
      const id = rows.length + 1;
      rows.push({
        id, createdAt: new Date(now).toISOString(), createdMs: now, ipHash,
        codebookId: e.codebookId, codebookVersion: e.codebookVersion, targetType: e.targetType,
        targetCode: e.targetCode, targetLabel: e.targetLabel, kind: e.kind, body: e.body,
        exampleStatement: e.exampleStatement, relatedCode: e.relatedCode, name: e.name, organization: e.organization, email: e.email, status: 'pending', reviewedAt: null,
      });
      return id;
    },
    async countRecent(ipHash, minutes) {
      return rows.filter(r => r.ipHash === ipHash && r.createdMs > now - minutes * 60_000).length;
    },
    async listApproved(codebookId) {
      return rows.filter(r => r.codebookId === codebookId && r.status === 'approved').map(toPublic);
    },
    async list(status: FeedbackStatus | 'all') {
      return rows.filter(r => status === 'all' || r.status === status).map(({ ipHash: _i, createdMs: _c, ...r }) => r);
    },
    async setStatus(id, status) {
      const row = rows.find(r => r.id === id);
      if (!row) return false;
      row.status = status;
      row.reviewedAt = new Date(now).toISOString();
      return true;
    },
    async remove(id) {
      const i = rows.findIndex(r => r.id === id);
      if (i < 0) return false;
      rows.splice(i, 1);
      return true;
    },
    async recordTry(ipHash) {
      tries.push({ ipHash, createdMs: now });
    },
    async countTries(ipHash, minutes) {
      return tries.filter(t => (ipHash === null || t.ipHash === ipHash) && t.createdMs > now - minutes * 60_000).length;
    },
  };
  return { store, rows, tries, advanceMinutes: (m: number) => { now += m * 60_000; } };
};
