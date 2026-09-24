import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CODEBOOK_REGISTRY } from '../codebooks/index.js';
import { codeNumber, validateSubmission } from '../services/feedback.js';
import { createFeedbackAdminHandler, isAuthorized } from './feedback-admin.js';
import { call, memoryStore } from './_lib/testing.js';

const PASSWORD = 'correct horse battery';
const auth = { authorization: `Bearer ${PASSWORD}` };
const sub = CODEBOOK_REGISTRY.original.domains[0].subcategories[0];

const seeded = async () => {
  const m = memoryStore();
  const v = validateSubmission({
    codebookId: 'original', targetType: 'code', targetCode: codeNumber(sub.code), kind: 'missing',
    body: 'Missing: credit recovery.', email: 'ana@example.org',
  });
  if (!v.ok) throw new Error('bad fixture');
  await m.store.insert(v.value, null);
  return m;
};

beforeEach(() => vi.stubEnv('FEEDBACK_ADMIN_PASSWORD', PASSWORD));
afterEach(() => vi.unstubAllEnvs());

describe('isAuthorized', () => {
  it('needs the exact password and refuses short ones', () => {
    expect(isAuthorized(`Bearer ${PASSWORD}`, PASSWORD)).toBe(true);
    expect(isAuthorized(`bearer ${PASSWORD}`, PASSWORD)).toBe(true);
    expect(isAuthorized('Bearer wrong', PASSWORD)).toBe(false);
    expect(isAuthorized(undefined, PASSWORD)).toBe(false);
    expect(isAuthorized('Bearer short', 'short')).toBe(false);
  });
});

describe('api/feedback-admin', () => {
  it('is closed until a strong password is set', async () => {
    vi.stubEnv('FEEDBACK_ADMIN_PASSWORD', 'short');
    const { store } = await seeded();
    expect((await call(createFeedbackAdminHandler(() => store), { method: 'GET', headers: { authorization: 'Bearer short' } })).statusCode).toBe(503);
  });

  it('rejects a wrong password', async () => {
    const { store } = await seeded();
    const res = await call(createFeedbackAdminHandler(() => store), { method: 'GET', headers: { authorization: 'Bearer nope' } });
    expect(res.statusCode).toBe(401);
  });

  it('lists pending feedback with emails, then approves and deletes', async () => {
    const { store, rows } = await seeded();
    const handler = createFeedbackAdminHandler(() => store);

    const pending = await call(handler, { method: 'GET', headers: auth });
    expect(pending.body.items).toHaveLength(1);
    expect(pending.body.items[0].email).toBe('ana@example.org');

    expect((await call(handler, { method: 'POST', headers: auth, body: { id: 1, action: 'approve' } })).statusCode).toBe(200);
    expect(rows[0].status).toBe('approved');
    expect(rows[0].reviewedAt).not.toBeNull();

    expect((await call(handler, { method: 'POST', headers: auth, body: { id: 1, action: 'publish' } })).statusCode).toBe(400);
    expect((await call(handler, { method: 'POST', headers: auth, body: { id: 1, action: 'delete' } })).statusCode).toBe(200);
    expect((await call(handler, { method: 'POST', headers: auth, body: { id: 1, action: 'delete' } })).statusCode).toBe(404);
  });

  it('exports CSV without emails unless asked', async () => {
    const { store } = await seeded();
    const handler = createFeedbackAdminHandler(() => store);
    const csv = await call(handler, { method: 'GET', headers: auth, query: { status: 'all', format: 'csv' } });
    expect(csv.headers['content-type']).toMatch(/text\/csv/);
    expect(csv.body).toContain('Missing: credit recovery.');
    expect(csv.body).not.toContain('ana@example.org');
    const withEmail = await call(handler, { method: 'GET', headers: auth, query: { status: 'all', format: 'csv', email: '1' } });
    expect(withEmail.body).toContain('ana@example.org');
  });
});
