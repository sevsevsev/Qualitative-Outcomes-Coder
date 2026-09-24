// api/try-code.ts
//
// "Try it" on the public codebook explorer: codes ONE outcome statement with
// the same prompt, schema and model as the coder (api/_lib/gemini.ts).
//
//   POST /api/try-code  { codebookType, text }
//
// Because anyone can call it and each call spends Gemini credits, it only
// runs when a database is connected for the limits below:
//   TRY_CODING_PER_HOUR  tries per visitor per hour (default 10)
//   TRY_CODING_DAILY_CAP tries per rolling 24 hours, site-wide (default 300)
//   TRY_CODING=off       turns the endpoint off without a redeploy of code
// Statements are not stored. Only a timestamp and a hashed IP are kept.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { CODEBOOK_REGISTRY, CodebookType } from '../codebooks/index.js';
import { codebookAllowedOnThisSite } from '../services/explorerCodebooks.js';
import { codeWithGemini } from './_lib/gemini.js';
import { defaultFeedbackStore, FeedbackStore } from './_lib/feedbackStore.js';
import { clientIp, hashIp } from './_lib/visitor.js';

export const maxDuration = 60;

export const TRY_TEXT_LIMITS = { min: 5, max: 500 };

const intFromEnv = (name: string, fallback: number) => {
  const n = Number.parseInt(process.env[name] ?? '', 10);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
};

export const tryLimits = () => ({
  perHour: intFromEnv('TRY_CODING_PER_HOUR', 10),
  dailyCap: intFromEnv('TRY_CODING_DAILY_CAP', 300),
});

export const tryCodingEnabled = () =>
  (process.env.TRY_CODING ?? 'on').toLowerCase() !== 'off' && !!process.env.GEMINI_API_KEY;

type Coder = typeof codeWithGemini;

export const createTryCodeHandler = (getStore: () => FeedbackStore | null, coder: Coder = codeWithGemini) =>
  async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).json({ error: 'Method not allowed.' });
      return;
    }
    const store = getStore();
    if (!tryCodingEnabled() || !store) {
      res.status(503).json({ error: 'Trying statements is not turned on for this site.' });
      return;
    }

    const codebookType = req.body?.codebookType as CodebookType;
    if (typeof codebookType !== 'string' || !(codebookType in CODEBOOK_REGISTRY) || !codebookAllowedOnThisSite(codebookType)) {
      res.status(400).json({ error: 'Unknown codebook.' });
      return;
    }
    const text = typeof req.body?.text === 'string' ? req.body.text.replace(/\s+/g, ' ').trim() : '';
    if (text.length < TRY_TEXT_LIMITS.min || text.length > TRY_TEXT_LIMITS.max) {
      res.status(400).json({ error: `Write one outcome statement of ${TRY_TEXT_LIMITS.min} to ${TRY_TEXT_LIMITS.max} characters.` });
      return;
    }

    try {
      const limits = tryLimits();
      const ipHash = hashIp(clientIp(req));
      if ((await store.countTries(null, 24 * 60)) >= limits.dailyCap) {
        res.status(429).json({ error: 'This site has reached its limit for today. Please try again tomorrow.' });
        return;
      }
      if (ipHash && (await store.countTries(ipHash, 60)) >= limits.perHour) {
        res.status(429).json({ error: `You can try ${limits.perHour} statements an hour. Please come back a little later.` });
        return;
      }
      // Counted before the call, so failed calls still count toward the limits.
      await store.recordTry(ipHash);

      const codebook = CODEBOOK_REGISTRY[codebookType];
      const { parsed, modelUsed } = await coder(process.env.GEMINI_API_KEY as string, codebook, [
        { row_id: 'try', outcome_text: text, group: 'General' },
      ]);
      const coded = parsed?.coded_items?.[0];
      if (!coded) {
        res.status(502).json({ error: 'The model did not return a result. Please try again.' });
        return;
      }
      res.status(200).json({ codebookVersion: codebook.version, modelUsed, result: coded });
    } catch (e: any) {
      console.error('try-code failed:', e);
      res.status(502).json({ error: 'Coding failed. Please try again in a moment.' });
    }
  };

export default createTryCodeHandler(defaultFeedbackStore);
