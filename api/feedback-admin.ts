// api/feedback-admin.ts
//
// Moderation endpoint for codebook explorer feedback. Every request needs
//   Authorization: Bearer <FEEDBACK_ADMIN_PASSWORD>
//
//   GET  /api/feedback-admin?status=pending|approved|rejected|all
//   GET  /api/feedback-admin?status=approved&format=csv[&email=1]
//   POST /api/feedback-admin  { id, action: "approve" | "reject" | "pending" | "delete" }
//
// The CSV export is what goes into codebook-refinement/feedback/ (see the
// README there). Nothing here touches a codebook.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash, timingSafeEqual } from 'node:crypto';
import { FEEDBACK_STATUSES, FeedbackStatus, feedbackToCsv } from '../services/feedback.js';
import { defaultFeedbackStore, FeedbackStore } from './_lib/feedbackStore.js';

/** Shorter passwords are refused so a weak one can't be set by accident. */
export const MIN_PASSWORD_LENGTH = 12;

const digest = (s: string) => createHash('sha256').update(s).digest();

export const isAuthorized = (header: string | string[] | undefined, password: string | undefined): boolean => {
  if (!password || password.length < MIN_PASSWORD_LENGTH) return false;
  const value = Array.isArray(header) ? header[0] : header;
  const token = value?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) return false;
  return timingSafeEqual(digest(token), digest(password));
};

const ACTIONS: Record<string, FeedbackStatus | 'delete'> = {
  approve: 'approved',
  reject: 'rejected',
  pending: 'pending',
  delete: 'delete',
};

export const createFeedbackAdminHandler = (getStore: () => FeedbackStore | null) =>
  async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Cache-Control', 'no-store');
    const password = process.env.FEEDBACK_ADMIN_PASSWORD;
    if (!password || password.length < MIN_PASSWORD_LENGTH) {
      res.status(503).json({ error: `Set FEEDBACK_ADMIN_PASSWORD (at least ${MIN_PASSWORD_LENGTH} characters) in the Vercel project.` });
      return;
    }
    if (!isAuthorized(req.headers.authorization, password)) {
      res.status(401).json({ error: 'Wrong password.' });
      return;
    }
    const store = getStore();
    if (!store) {
      res.status(503).json({ error: 'No database connected. Add Neon to this Vercel project so DATABASE_URL is set.' });
      return;
    }

    try {
      if (req.method === 'GET') {
        const status = (typeof req.query.status === 'string' ? req.query.status : 'pending') as FeedbackStatus | 'all';
        if (status !== 'all' && !FEEDBACK_STATUSES.includes(status)) {
          res.status(400).json({ error: 'Unknown status.' });
          return;
        }
        const items = await store.list(status);
        if (req.query.format === 'csv') {
          res.setHeader('Content-Type', 'text/csv; charset=utf-8');
          res.setHeader('Content-Disposition', `attachment; filename="codebook-feedback-${status}-${new Date().toISOString().slice(0, 10)}.csv"`);
          res.status(200).send(feedbackToCsv(items, req.query.email === '1'));
          return;
        }
        res.status(200).json({ items });
        return;
      }

      if (req.method === 'POST') {
        const id = Number(req.body?.id);
        const action = ACTIONS[String(req.body?.action)];
        if (!Number.isInteger(id) || id <= 0 || !action) {
          res.status(400).json({ error: 'Send { id, action: "approve" | "reject" | "pending" | "delete" }.' });
          return;
        }
        const found = action === 'delete' ? await store.remove(id) : await store.setStatus(id, action);
        if (!found) {
          res.status(404).json({ error: `No feedback with id ${id}.` });
          return;
        }
        res.status(200).json({ ok: true });
        return;
      }

      res.setHeader('Allow', 'GET, POST');
      res.status(405).json({ error: 'Method not allowed.' });
    } catch (e: any) {
      console.error('feedback-admin error', e);
      res.status(500).json({ error: e?.message || 'Database error.' });
    }
  };

export default createFeedbackAdminHandler(defaultFeedbackStore);
