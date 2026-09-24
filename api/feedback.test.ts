import { afterEach, describe, expect, it, vi } from 'vitest';
import { CODEBOOK_REGISTRY } from '../codebooks/index.js';
import { codeNumber } from '../services/feedback.js';
import { createFeedbackHandler, RATE_LIMIT } from './feedback.js';
import { call, memoryStore } from './_lib/testing.js';

const sub = CODEBOOK_REGISTRY.original.domains[0].subcategories[0];
const submission = {
  codebookId: 'original', targetType: 'code', targetCode: codeNumber(sub.code), kind: 'comment',
  body: 'Please add an example about tutoring.', email: 'ana@example.org', name: 'Ana',
};
const post = (body: any, ip = '203.0.113.7') => ({ method: 'POST', body, headers: { 'x-forwarded-for': ip } });
const get = { method: 'GET', query: { codebook: 'original' } };

afterEach(() => vi.unstubAllEnvs());

describe('api/feedback', () => {
  it('stores new feedback as pending and hides it until approved', async () => {
    const { store, rows } = memoryStore();
    const handler = createFeedbackHandler(() => store);

    const res = await call(handler, post(submission));
    expect(res.statusCode).toBe(202);
    expect(rows[0]).toMatchObject({ status: 'pending', targetLabel: sub.code });
    expect(rows[0].ipHash).toMatch(/^[0-9a-f]{32}$/);
    expect(rows[0].ipHash).not.toContain('203.0.113.7');

    expect((await call(handler, get)).body.items).toEqual([]);
    await store.setStatus(1, 'approved');
    const listed = (await call(handler, get)).body.items;
    expect(listed).toHaveLength(1);
    expect(listed[0]).not.toHaveProperty('email');
    expect(JSON.stringify(listed)).not.toContain('ana@example.org');
  });

  it('keeps approved feedback private when FEEDBACK_PUBLIC=false', async () => {
    vi.stubEnv('FEEDBACK_PUBLIC', 'false');
    const { store } = memoryStore();
    const handler = createFeedbackHandler(() => store);
    await call(handler, post(submission));
    await store.setStatus(1, 'approved');
    expect((await call(handler, get)).body).toEqual({ public: false, items: [] });
  });

  it('answers a honeypot hit like a success but stores nothing', async () => {
    const { store, rows } = memoryStore();
    const res = await call(createFeedbackHandler(() => store), post({ ...submission, website: 'spam' }));
    expect(res.statusCode).toBe(202);
    expect(rows).toHaveLength(0);
  });

  it('rejects invalid feedback with a readable error', async () => {
    const { store } = memoryStore();
    const res = await call(createFeedbackHandler(() => store), post({ ...submission, targetCode: '99.9' }));
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/99\.9/);
  });

  it('rate limits one visitor but not another, and resets after the window', async () => {
    const { store, advanceMinutes } = memoryStore();
    const handler = createFeedbackHandler(() => store);
    for (let i = 0; i < RATE_LIMIT.max; i++) expect((await call(handler, post(submission))).statusCode).toBe(202);
    expect((await call(handler, post(submission))).statusCode).toBe(429);
    expect((await call(handler, post(submission, '198.51.100.1'))).statusCode).toBe(202);
    advanceMinutes(RATE_LIMIT.minutes + 1);
    expect((await call(handler, post(submission))).statusCode).toBe(202);
  });

  it('says so when no database is connected', async () => {
    expect((await call(createFeedbackHandler(() => null), get)).statusCode).toBe(503);
  });
});
