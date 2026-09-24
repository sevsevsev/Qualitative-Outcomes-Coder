import { afterEach, describe, it, expect, vi } from 'vitest';
import handler, { isModelUnavailableError } from './analyze-batch.js';
import { call } from './_lib/testing.js';

// Guards the fallback-trigger condition specifically: it must fire for a
// retired/nonexistent model (so the fallback in api/analyze-batch.ts
// actually kicks in when it's supposed to), and must NOT fire for other
// failure classes (bad request, rate limit, content-policy) where retrying
// against a different model wouldn't help and would just mask the real
// problem.
describe('isModelUnavailableError', () => {
  it('matches a Gemini 404 status (the real retired-model shape seen in production)', () => {
    expect(isModelUnavailableError({ status: 404, message: 'models/gemini-old-model is not found for API version v1' })).toBe(true);
  });

  it('matches on message text even without a numeric status', () => {
    expect(isModelUnavailableError({ message: 'The requested model was not found.' })).toBe(true);
    expect(isModelUnavailableError({ message: 'Model gemini-x is not supported for this API version.' })).toBe(true);
  });

  it('does not match a bad-request/schema error', () => {
    expect(isModelUnavailableError({ status: 400, message: 'Request contains an invalid argument.' })).toBe(false);
  });

  it('does not match a rate-limit error', () => {
    expect(isModelUnavailableError({ status: 429, message: 'Resource has been exhausted.' })).toBe(false);
  });

  it('does not match an empty/malformed error object', () => {
    expect(isModelUnavailableError({})).toBe(false);
    expect(isModelUnavailableError(undefined)).toBe(false);
  });
});

describe('analyze-batch on the explorer site', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('is closed when VITE_SITE=explorer, even with a key set', async () => {
    vi.stubEnv('VITE_SITE', 'explorer');
    vi.stubEnv('GEMINI_API_KEY', 'test-key');
    const res = await call(handler, { method: 'POST', body: { codebookType: 'original', items: [{ row_id: '1', outcome_text: 'x' }] } });
    expect(res.statusCode).toBe(404);
  });
});
