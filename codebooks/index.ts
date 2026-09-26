// codebooks/index.ts
//
// Central registry of all codebooks. To add a new codebook: create a file
// under codebooks/ exporting a Codebook object (see types.ts), then add it
// to CODEBOOK_REGISTRY below. Every other file in the app (schema builder,
// review dashboard, API route) reads codebook structure/capabilities from
// this registry instead of branching on codebook ids by name.

import { Codebook } from './types.js';
import { originalCodebook } from './original.js';
import { acceleratePhillyCodebook } from './acceleratePhilly.js';
import { youthOutcomesV3Codebook } from './youthOutcomesV3.js';

// Each value is already typed as Codebook at its own definition site
// (codebooks/original.ts, codebooks/acceleratePhilly.ts), so a `satisfies`
// clause here would be redundant -- and `as const` alone (no `satisfies`)
// avoids depending on that newer TS syntax parsing correctly through
// whatever bundler a given deployment target uses for this file.
export const CODEBOOK_REGISTRY = {
  original: originalCodebook,
  accelerate_philly: acceleratePhillyCodebook,
  youth_outcomes_v3: youthOutcomesV3Codebook,
} as const;

export type CodebookType = keyof typeof CODEBOOK_REGISTRY;

export const CODEBOOK_LIST: Codebook[] = Object.values(CODEBOOK_REGISTRY);

/**
 * Codebooks offered in pickers: every codebook that isn't deprecated. A
 * deprecated one stays in CODEBOOK_REGISTRY so saved sessions, old exports
 * and eval scripts still resolve it.
 */
export const SELECTABLE_CODEBOOK_LIST: Codebook[] = CODEBOOK_LIST.filter(cb => !cb.deprecated);

export const isSelectableCodebook = (id: string): id is CodebookType =>
  SELECTABLE_CODEBOOK_LIST.some(cb => cb.id === id);

// Codebook 3.0 became the default on 2026-09-26 (CP-08-02, Severin). The same
// day Severin retired 2.5.x ('original'): it is no longer offered in pickers.
export const DEFAULT_CODEBOOK_ID: CodebookType = 'youth_outcomes_v3';

export const getCodebook = (id: CodebookType): Codebook => CODEBOOK_REGISTRY[id];

export * from './types.js';
