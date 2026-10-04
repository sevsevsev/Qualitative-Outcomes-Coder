import { afterEach, describe, expect, it, vi } from 'vitest';
import handler from './extract-results.js';
import { call } from './_lib/testing.js';

afterEach(() => vi.unstubAllEnvs());

describe('api/extract-results', () => {
  it('is closed on the explorer site, even with a key set', async () => {
    vi.stubEnv('VITE_SITE', 'explorer');
    vi.stubEnv('GEMINI_API_KEY', 'test-key');
    const res = await call(handler, { method: 'POST', body: { items: [{ row_id: '1', text: 'x' }] } });
    expect(res.statusCode).toBe(404);
  });

  it('rejects bad requests before calling the model', async () => {
    vi.stubEnv('GEMINI_API_KEY', 'test-key');
    expect((await call(handler, { method: 'GET' })).statusCode).toBe(405);
    expect((await call(handler, { method: 'POST', body: { items: [] } })).statusCode).toBe(400);
    expect((await call(handler, { method: 'POST', body: { items: [{ row_id: '1', text: 'x'.repeat(6001) }] } })).statusCode).toBe(400);
    const tooMany = Array.from({ length: 11 }, (_, i) => ({ row_id: String(i), text: 'x' }));
    expect((await call(handler, { method: 'POST', body: { items: tooMany } })).statusCode).toBe(400);
  });

  it('needs a key', async () => {
    vi.stubEnv('GEMINI_API_KEY', '');
    expect((await call(handler, { method: 'POST', body: { items: [{ row_id: '1', text: 'x' }] } })).statusCode).toBe(500);
  });
});
