import { afterEach, describe, expect, it, vi } from 'vitest';
import { codebookAllowedOnThisSite, DEFAULT_EXPLORER_CODEBOOKS, parseExplorerCodebooks } from './explorerCodebooks.js';
import { validateSubmission } from './feedback.js';

afterEach(() => vi.unstubAllEnvs());

describe('parseExplorerCodebooks', () => {
  it('defaults to the original codebook only', () => {
    expect(DEFAULT_EXPLORER_CODEBOOKS).toEqual(['original']);
    expect(parseExplorerCodebooks(undefined)).toEqual(['original']);
    expect(parseExplorerCodebooks('  ')).toEqual(['original']);
  });

  it('reads a comma list, ignoring unknown ids and duplicates', () => {
    expect(parseExplorerCodebooks('original, accelerate_philly,original,nope')).toEqual(['original', 'accelerate_philly']);
    expect(parseExplorerCodebooks('nope')).toEqual(['original']);
  });
});

describe('codebookAllowedOnThisSite', () => {
  it('allows every codebook outside the explorer site', () => {
    expect(codebookAllowedOnThisSite('accelerate_philly')).toBe(true);
  });

  it('hides Accelerate Philly on the explorer site unless listed', () => {
    vi.stubEnv('VITE_SITE', 'explorer');
    expect(codebookAllowedOnThisSite('original')).toBe(true);
    expect(codebookAllowedOnThisSite('accelerate_philly')).toBe(false);
    vi.stubEnv('VITE_EXPLORER_CODEBOOKS', 'original,accelerate_philly');
    expect(codebookAllowedOnThisSite('accelerate_philly')).toBe(true);
  });

  it('refuses feedback on a hidden codebook', () => {
    vi.stubEnv('VITE_SITE', 'explorer');
    const r = validateSubmission({ codebookId: 'accelerate_philly', targetType: 'general', targetCode: '', kind: 'comment', body: 'A comment.' });
    expect(r.ok).toBe(false);
  });
});
