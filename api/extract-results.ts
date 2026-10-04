// api/extract-results.ts
//
// Vercel serverless function. For narrative rows (a program description or a
// mission statement; see services/resultExtraction.ts) it asks Gemini to
// quote only the results each text states. The client checks every quote
// against the text and then codes the quotes through /api/analyze-batch.
// Same key handling as api/analyze-batch.ts.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { extractWithGemini } from './_lib/gemini.js';

export const maxDuration = 60;

const MAX_ITEMS_PER_REQUEST = 10;
const MAX_TEXT_LENGTH = 6000;

const isValidItem = (value: unknown): value is { row_id: string; text: string } =>
  !!value &&
  typeof value === 'object' &&
  typeof (value as any).row_id === 'string' &&
  typeof (value as any).text === 'string' &&
  (value as any).text.length <= MAX_TEXT_LENGTH;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (process.env.VITE_SITE === 'explorer') {
    res.status(404).json({ error: 'Not available on this site.' });
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Set it in your Vercel project environment variables.' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  const items = body?.items;
  if (!Array.isArray(items) || items.length === 0 || !items.every(isValidItem)) {
    res.status(400).json({ error: `Request must include a non-empty "items" array of { row_id: string, text: string } (text up to ${MAX_TEXT_LENGTH} characters).` });
    return;
  }
  if (items.length > MAX_ITEMS_PER_REQUEST) {
    res.status(400).json({ error: `Too many items in one request (max ${MAX_ITEMS_PER_REQUEST}).` });
    return;
  }

  try {
    const { parsed, modelUsed } = await extractWithGemini(apiKey, items.map(i => ({ row_id: i.row_id, text: i.text })));
    res.setHeader('X-Gemini-Model-Used', modelUsed);
    res.status(200).json(parsed);
  } catch (e: any) {
    console.error('extract-results failed:', e);
    res.status(502).json({ error: e?.message || 'Gemini request failed.' });
  }
}
