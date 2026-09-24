// services/explorerCodebooks.ts
//
// Which codebooks the public explorer site (VITE_SITE=explorer) shows. The
// coder app always shows every codebook; this only narrows the public site.
//
// Set VITE_EXPLORER_CODEBOOKS in the explorer's Vercel project to a
// comma-separated list of codebook ids (e.g. "original,accelerate_philly")
// to change it without a code change. The same variable is read by the
// explorer's API routes, so a hidden codebook can't be used through them.

import { CODEBOOK_REGISTRY, CodebookType } from '../codebooks/index.js';

/** Shown when VITE_EXPLORER_CODEBOOKS is unset. Accelerate Philly is left off for now (Severin, 2026-09-24). */
export const DEFAULT_EXPLORER_CODEBOOKS: readonly CodebookType[] = ['original'];

/** Parses a comma-separated id list; unknown ids are ignored, and an empty result falls back to the default. */
export const parseExplorerCodebooks = (raw: string | undefined): CodebookType[] => {
  const ids = (raw ?? '')
    .split(',')
    .map(s => s.trim())
    .filter((id): id is CodebookType => Object.prototype.hasOwnProperty.call(CODEBOOK_REGISTRY, id));
  return ids.length ? [...new Set(ids)] : [...DEFAULT_EXPLORER_CODEBOOKS];
};

/**
 * Server side: whether an API route on this deployment may use `codebookId`.
 * Always true outside the explorer site.
 */
export const codebookAllowedOnThisSite = (codebookId: string): boolean =>
  process.env.VITE_SITE !== 'explorer' ||
  parseExplorerCodebooks(process.env.VITE_EXPLORER_CODEBOOKS).includes(codebookId as CodebookType);
