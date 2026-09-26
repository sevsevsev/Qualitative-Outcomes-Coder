import { afterEach, describe, expect, it, vi } from 'vitest';
import { codebookAllowedOnThisSite, DEFAULT_EXPLORER_CODEBOOKS, parseExplorerCodebooks } from './explorerCodebooks.js';
import { validateSubmission } from './feedback.js';

afterEach(() => vi.unstubAllEnvs());

describe('parseExplorerCodebooks', () => {
  it('defaults to codebook 3.0 only', () => {
    expect(DEFAULT_EXPLORER_CODEBOOKS).toEqual(['youth_outcomes_v3']);
    expect(parseExplorerCodebooks(undefined)).toEqual(['youth_outcomes_v3']);
    expect(parseExplorerCodebooks('  ')).toEqual(['youth_outcomes_v3']);
  });

  it('reads a comma list, ignoring unknown ids and duplicates', () => {
    expect(parseExplorerCodebooks('original, accelerate_philly,original,nope')).toEqual(['original', 'accelerate_philly']);
    expect(parseExplorerCodebooks('nope')).toEqual(['youth_outcomes_v3']);
  });
});

describe('codebookAllowedOnThisSite', () => {
  it('allows every codebook outside the explorer site', () => {
    expect(codebookAllowedOnThisSite('accelerate_philly')).toBe(true);
  });

  it('shows only codebook 3.0 on the explorer site unless others are listed', () => {
    vi.stubEnv('VITE_SITE', 'explorer');
    expect(codebookAllowedOnThisSite('youth_outcomes_v3')).toBe(true);
    expect(codebookAllowedOnThisSite('original')).toBe(false);
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
