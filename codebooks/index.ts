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

// Each value is already typed as Codebook at its own definition site
// (codebooks/original.ts, codebooks/acceleratePhilly.ts), so a `satisfies`
// clause here would be redundant -- and `as const` alone (no `satisfies`)
// avoids depending on that newer TS syntax parsing correctly through
// whatever bundler a given deployment target uses for this file.
export const CODEBOOK_REGISTRY = {
  original: originalCodebook,
  accelerate_philly: acceleratePhillyCodebook,
} as const;

export type CodebookType = keyof typeof CODEBOOK_REGISTRY;

export const CODEBOOK_LIST: Codebook[] = Object.values(CODEBOOK_REGISTRY);

export const DEFAULT_CODEBOOK_ID: CodebookType = 'original';

export const getCodebook = (id: CodebookType): Codebook => CODEBOOK_REGISTRY[id];

export * from './types.js';
