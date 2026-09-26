// codebooks/youthOutcomesV3.types.ts
//
// Shape of the codebook 3.x data (codebooks/youthOutcomesV3.data.ts).

export type V3Part = 'Y' | 'F' | 'A';

/** How closely a code follows its domain's anchor framework (STANDARDS S1.6). */
export type V3Fidelity = 'framework' | 'adapted' | 'codebook-defined';

export interface V3Code {
  /** "Y1.1". Stable identifier; never reused for a different construct. */
  id: string;
  name: string;
  short: string;
  flag: 'deductive' | 'hybrid' | 'inductive';
  fidelity: V3Fidelity;
  /** FD-P## (proposed) or FD-### (live) entry in codebook-refinement/DEVIATIONS.md. */
  deviation?: string;
  /** The 2.x code(s) this code came from, as the proposal recorded them. */
  from2x: string;
  definition: string;
  include: string;
  exclude: string;
  useInstead: string;
  /** Typical example. A held-out gold statement never reaches the prompt. */
  example: { text: string; goldId?: string };
  /** Citations for the prompt's "Source Framework:" line: verified or located sources only. */
  source: string;
  /** Provenance: every citation with its verification status, e.g. "NGSS (2013) (verified); X (partial)". */
  basis: string;
}

export interface V3Category {
  letter: string;
  name: string;
  codes: V3Code[];
}

export interface V3Domain {
  id: string;
  part: V3Part;
  name: string;
  description: string;
  /** Anchor frameworks for the domain (the prompt's "Framework Basis:" line). */
  frameworkBasis: string;
  categoryLine: string;
  categories: V3Category[];
}
