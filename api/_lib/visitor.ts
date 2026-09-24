// api/_lib/visitor.ts
//
// Identifies a visitor for rate limiting only. The IP itself is never
// stored: just a salted hash, so repeat submissions can be counted.

import type { VercelRequest } from '@vercel/node';
import { createHash } from 'node:crypto';

export const clientIp = (req: Pick<VercelRequest, 'headers'>): string | null => {
  const forwarded = req.headers['x-forwarded-for'];
  const first = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim();
  const real = req.headers['x-real-ip'];
  return first || (Array.isArray(real) ? real[0] : real) || null;
};

/** IPs are only kept as a salted hash, for rate limiting. */
export const hashIp = (ip: string | null): string | null =>
  ip ? createHash('sha256').update(`${process.env.FEEDBACK_ADMIN_PASSWORD ?? ''}|${ip}`).digest('hex').slice(0, 32) : null;
