// codebooks/index.ts
//
// Central registry of all codebooks. To add a new codebook: create a file
// under codebooks/ exporting a Codebook object (see types.ts), then add it
// to CODEBOOK_REGISTRY below. Every other file in the app (schema builder,
// review dashboard, API route) reads codebook structure/capabilities from
// this registry instead of branching on codebook ids by name.

import { Codebook } from './types';
import { originalCodebook } from './original';
import { acceleratePhillyCodebook } from './acceleratePhilly';

export const CODEBOOK_REGISTRY = {
  original: originalCodebook,
  accelerate_philly: acceleratePhillyCodebook,
} as const satisfies Record<string, Codebook>;

export type CodebookType = keyof typeof CODEBOOK_REGISTRY;

export const CODEBOOK_LIST: Codebook[] = Object.values(CODEBOOK_REGISTRY);

export const DEFAULT_CODEBOOK_ID: CodebookType = 'original';

export const getCodebook = (id: CodebookType): Codebook => CODEBOOK_REGISTRY[id];

export * from './types';
