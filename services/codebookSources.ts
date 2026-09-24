// services/codebookSources.ts
//
// Source registries (codebook-refinement/sources/<id>.sources.json) keyed by
// codebook id, so the codebook explorer can show the research and frameworks
// behind each code together with their verification status. A codebook with
// no registry here still renders; it just shows the framework names written
// in its definitionsText and no linked sources.
//
// When a new codebook (e.g. v2) lands with its own registry file, import the
// JSON here and add it to SOURCE_REGISTRIES under that codebook's id.

import originalSources from '../codebook-refinement/sources/original.sources.json';

export type SourceStatus =
  | 'verified'
  | 'located'
  | 'unverified'
  | 'misattributed'
  | 'needs_replacement';

export interface SourceSupport {
  code: string;
  component?: string;
  /** The code this would support doesn't exist yet (waits on a CP). */
  proposed?: boolean;
  /** A verifier found this source does not support the code. */
  unsupported?: boolean;
  /** The CP that will fix a flagged support. */
  open_cp?: string;
}

export interface SourceEntry {
  id: string;
  cite_as: string;
  /**
   * The names this source goes by in the codebook's "Source Framework:" and
   * "Framework Basis:" lines. codebook-refinement/sync.test.ts uses them to
   * check that every framework the prompt names is in the registry.
   */
  codebook_names?: string[];
  tier?: string;
  publisher?: string | null;
  year?: number | string | null;
  url?: string | null;
  status: SourceStatus;
  verified_on?: string;
  excerpt?: string;
  open_cp?: string;
  notes?: string;
  supports: SourceSupport[];
}

export interface CodebookExtension {
  code: string;
  reason: string;
}

export interface SourceRegistry {
  codebook_id: string;
  codebook_version_reviewed?: string;
  last_reviewed?: string;
  status_legend?: Record<string, string>;
  sources: SourceEntry[];
  codebook_extensions?: CodebookExtension[];
}

export const SOURCE_REGISTRIES: Record<string, SourceRegistry | undefined> = {
  original: originalSources as SourceRegistry,
};

export const getSourceRegistry = (codebookId: string): SourceRegistry | undefined =>
  SOURCE_REGISTRIES[codebookId];
