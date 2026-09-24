import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CODEBOOK_REGISTRY } from '../codebooks/index.js';
import { createTryCodeHandler } from './try-code.js';
import { call, memoryStore } from './_lib/testing.js';

const coded = { row_id: 'try', split_needed: 'no', split_items: [{ text: 'x', primary_domain: CODEBOOK_REGISTRY.original.domains[0].code }], notes: '' };
const fakeCoder = () => vi.fn(async () => ({ parsed: { coded_items: [coded] }, modelUsed: 'test-model' }));
const post = (text: string, ip = '203.0.113.7') => ({
  method: 'POST', body: { codebookType: 'original', text }, headers: { 'x-forwarded-for': ip },
});

beforeEach(() => vi.stubEnv('GEMINI_API_KEY', 'test-key'));
afterEach(() => vi.unstubAllEnvs());

describe('api/try-code', () => {
  it('codes one statement and returns the version and model', async () => {
    const { store, tries } = memoryStore();
    const coder = fakeCoder();
    const res = await call(createTryCodeHandler(() => store, coder), post('Students improve reading fluency.'));
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({ codebookVersion: CODEBOOK_REGISTRY.original.version, modelUsed: 'test-model', result: coded });
    expect(coder).toHaveBeenCalledWith('test-key', CODEBOOK_REGISTRY.original, [
      { row_id: 'try', outcome_text: 'Students improve reading fluency.', group: 'General' },
    ]);
    expect(tries).toHaveLength(1);
    expect(JSON.stringify(tries)).not.toContain('reading');
  });

  it('is off without a key, without a database, or with TRY_CODING=off', async () => {
    const { store } = memoryStore();
    expect((await call(createTryCodeHandler(() => null, fakeCoder()), post('A statement.'))).statusCode).toBe(503);
    vi.stubEnv('TRY_CODING', 'off');
    expect((await call(createTryCodeHandler(() => store, fakeCoder()), post('A statement.'))).statusCode).toBe(503);
    vi.stubEnv('TRY_CODING', 'on');
    vi.stubEnv('GEMINI_API_KEY', '');
    expect((await call(createTryCodeHandler(() => store, fakeCoder()), post('A statement.'))).statusCode).toBe(503);
  });

  it('rejects empty, overlong and unknown-codebook requests without calling the model', async () => {
    const { store } = memoryStore();
    const coder = fakeCoder();
    const handler = createTryCodeHandler(() => store, coder);
    expect((await call(handler, post('hi'))).statusCode).toBe(400);
    expect((await call(handler, post('x'.repeat(501)))).statusCode).toBe(400);
    expect((await call(handler, { method: 'POST', body: { codebookType: 'nope', text: 'A statement.' } })).statusCode).toBe(400);
    expect(coder).not.toHaveBeenCalled();
  });

  it('limits each visitor per hour', async () => {
    vi.stubEnv('TRY_CODING_PER_HOUR', '2');
    const { store, advanceMinutes } = memoryStore();
    const coder = fakeCoder();
    const handler = createTryCodeHandler(() => store, coder);
    expect((await call(handler, post('First statement.'))).statusCode).toBe(200);
    expect((await call(handler, post('Second statement.'))).statusCode).toBe(200);
    expect((await call(handler, post('Third statement.'))).statusCode).toBe(429);
    expect((await call(handler, post('Other visitor.', '198.51.100.1'))).statusCode).toBe(200);
    expect(coder).toHaveBeenCalledTimes(3);
    advanceMinutes(61);
    expect((await call(handler, post('Later statement.'))).statusCode).toBe(200);
  });

  it('stops everyone at the daily cap', async () => {
    vi.stubEnv('TRY_CODING_DAILY_CAP', '2');
    const { store } = memoryStore();
    const handler = createTryCodeHandler(() => store, fakeCoder());
    await call(handler, post('One statement.', '198.51.100.1'));
    await call(handler, post('Two statement.', '198.51.100.2'));
    const res = await call(handler, post('Three statement.', '198.51.100.3'));
    expect(res.statusCode).toBe(429);
    expect(res.body.error).toMatch(/today/);
  });

  it('counts a failed model call toward the limits and hides the raw error', async () => {
    const { store, tries } = memoryStore();
    const coder = vi.fn(async () => { throw new Error('quota exceeded for key abc'); });
    const res = await call(createTryCodeHandler(() => store, coder), post('A statement.'));
    expect(res.statusCode).toBe(502);
    expect(res.body.error).not.toContain('abc');
    expect(tries).toHaveLength(1);
  });
});

describe('api/try-code on the explorer site', () => {
  it('refuses a codebook the site hides', async () => {
    vi.stubEnv('VITE_SITE', 'explorer');
    const { store } = memoryStore();
    const coder = fakeCoder();
    const res = await call(createTryCodeHandler(() => store, coder), {
      method: 'POST', body: { codebookType: 'accelerate_philly', text: 'A statement.' }, headers: {},
    });
    expect(res.statusCode).toBe(400);
    expect(coder).not.toHaveBeenCalled();
  });
});
