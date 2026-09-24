// api/feedback.ts
//
// Public endpoint for visitor feedback on the codebook explorer.
//   GET  /api/feedback?codebook=<id>  approved entries for that codebook
//   POST /api/feedback                a new comment or "missing" note
//
// New entries are stored as `pending` and stay hidden until approved on the
// admin page (api/feedback-admin.ts). Emails are never returned here.
// Setting FEEDBACK_PUBLIC=false keeps approved entries private to the admin.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { validateSubmission } from '../services/feedback.js';
import { defaultFeedbackStore, FeedbackStore } from './_lib/feedbackStore.js';
import { clientIp, hashIp } from './_lib/visitor.js';

/** Submissions allowed per visitor (by hashed IP) per window. */
export const RATE_LIMIT = { max: 5, minutes: 60 };

export const feedbackIsPublic = () => (process.env.FEEDBACK_PUBLIC ?? 'true').toLowerCase() !== 'false';

export const createFeedbackHandler = (getStore: () => FeedbackStore | null) =>
  async function handler(req: VercelRequest, res: VercelResponse) {
    const store = getStore();
    if (!store) {
      res.status(503).json({ error: 'Feedback is not set up on this site yet.' });
      return;
    }

    try {
      if (req.method === 'GET') {
        const codebookId = typeof req.query.codebook === 'string' ? req.query.codebook : '';
        if (!feedbackIsPublic()) {
          res.status(200).json({ public: false, items: [] });
          return;
        }
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
        res.status(200).json({ public: true, items: await store.listApproved(codebookId) });
        return;
      }

      if (req.method === 'POST') {
        const result = validateSubmission(req.body);
        if ('error' in result) {
          // Answer a honeypot hit as if it worked, so the bot learns nothing.
          if (result.bot) res.status(202).json({ status: 'pending' });
          else res.status(400).json({ error: result.error });
          return;
        }
        const ipHash = hashIp(clientIp(req));
        if (ipHash && (await store.countRecent(ipHash, RATE_LIMIT.minutes)) >= RATE_LIMIT.max) {
          res.status(429).json({ error: 'Thanks! You have sent a lot of feedback in the last hour. Please try again later.' });
          return;
        }
        const id = await store.insert(result.value, ipHash);
        res.status(202).json({ status: 'pending', id });
        return;
      }

      res.setHeader('Allow', 'GET, POST');
      res.status(405).json({ error: 'Method not allowed.' });
    } catch (e: any) {
      console.error('feedback error', e);
      res.status(500).json({ error: 'Could not save feedback right now. Please try again later.' });
    }
  };

export default createFeedbackHandler(defaultFeedbackStore);
