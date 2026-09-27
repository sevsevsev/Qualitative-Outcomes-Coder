import { describe, expect, it } from 'vitest';
import {
  CODEBOOK_REGISTRY,
  DEFAULT_CODEBOOK_ID,
  getCodebook,
  isSelectableCodebook,
  SELECTABLE_CODEBOOK_LIST,
} from './index.js';
import { DEFAULT_EXPLORER_CODEBOOKS } from '../services/explorerCodebooks.js';
import { parseExplorerRoute } from '../components/CodebookExplorer.js';

describe('deprecated codebooks', () => {
  it('retires 2.5.x (original) from the pickers but keeps it registered', () => {
    expect(CODEBOOK_REGISTRY.original.deprecated).toEqual({ since: '2026-09-26', replacedBy: 'youth_outcomes_v3' });
    expect(SELECTABLE_CODEBOOK_LIST.map(cb => cb.id)).toEqual(['accelerate_philly', 'youth_outcomes_v3']);
    expect(isSelectableCodebook('original')).toBe(false);
    expect(getCodebook('original').version).toBe('2.5.2');
  });

  it('never defaults to a deprecated codebook', () => {
    expect(isSelectableCodebook(DEFAULT_CODEBOOK_ID)).toBe(true);
    for (const id of DEFAULT_EXPLORER_CODEBOOKS) expect(isSelectableCodebook(id)).toBe(true);
    expect(parseExplorerRoute([]).codebookId).toBe(DEFAULT_CODEBOOK_ID);
  });

  it('points every deprecated codebook at a selectable replacement', () => {
    for (const cb of Object.values(CODEBOOK_REGISTRY)) {
      if (cb.deprecated) expect(isSelectableCodebook(cb.deprecated.replacedBy)).toBe(true);
    }
  });

  it('still opens a direct link to a deprecated codebook', () => {
    expect(parseExplorerRoute(['original', '1.1']).codebookId).toBe('original');
  });
});
