// codebooks/types.ts
//
// Data model for a coding codebook. A Codebook fully describes one taxonomy:
// its domain/subcategory structure, the prompt text sent to the model, and
// which optional coding dimensions (subcategory, subject area, target
// population) the review UI should show. Adding a new codebook means adding
// one file under codebooks/ and registering it in codebooks/index.ts -- no
// other file should need to branch on a codebook id by name.

export interface SubcategoryDefinition {
  /** Exact string used in prompts, schema enums, and CSV export. */
  code: string;
  /**
   * Short disambiguation guidance shown in the review UI next to this
   * subcategory (e.g. "vs 3.2.2: use this for immediate impulse control,
   * not applying a coping strategy"). Optional -- most subcategories don't
   * need one.
   */
  hint?: string;
}

export interface DomainDefinition {
  /** Exact string used in prompts, schema enums, and CSV export. */
  code: string;
  subcategories: SubcategoryDefinition[];
  /** Optional domain-level disambiguation guidance shown in the review UI. */
  hint?: string;
}

export interface CodebookCapabilities {
  hasSubcategories: boolean;
  hasSubjectArea: boolean;
  hasTargetPopulation: boolean;
}

export interface Codebook {
  id: string;
  /**
   * Bumped whenever domains, subcategories, or definitions change in a way
   * that could make outputs incomparable to prior runs. Stamped into every
   * exported row as codebook_version.
   */
  version: string;
  /** Display name in the codebook picker. */
  label: string;
  domains: DomainDefinition[];
  /**
   * Process/output-format instructions for the model: how to split
   * outcomes, assign confidence, disambiguate close subcategories, and
   * shape the JSON response. Does NOT include the domain/subcategory
   * definitions themselves -- see definitionsText.
   */
  rulesText: string;
  /**
   * The actual domain/subcategory definitions, source frameworks, and
   * examples. Concatenated with rulesText to build the system instruction
   * sent to the model -- this is the content that makes coding decisions
   * meaningful rather than guesses from domain header names alone.
   */
  definitionsText: string;
  capabilities: CodebookCapabilities;
  subjectAreaOptions?: string[];
  targetPopulationOptions?: string[];
}

export const buildSystemInstruction = (codebook: Codebook): string =>
  `${codebook.rulesText}\n\n` +
  `=====================\n` +
  `${codebook.label} CODEBOOK (Definitions, Source Frameworks & Examples)\n` +
  `=====================\n` +
  `${codebook.definitionsText}`;

export const allDomainCodes = (codebook: Codebook): string[] =>
  codebook.domains.map(d => d.code);

export const allSubcategoryCodes = (codebook: Codebook): string[] =>
  codebook.domains.flatMap(d => d.subcategories.map(s => s.code));

export const subcategoriesForDomain = (
  codebook: Codebook,
  domainCode: string
): SubcategoryDefinition[] =>
  codebook.domains.find(d => d.code === domainCode)?.subcategories ?? [];
