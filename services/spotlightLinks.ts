// services/spotlightLinks.ts
//
// Possible links from codebook codes to the District SPOTlight indicators,
// from the SPOTlight relevance review (2026-10-18). The data is built by
// codebook-refinement/spotlight/build_links.py and loaded in
// services/spotlightLinksData.ts. This file holds only the types and helpers,
// with no data import, so the public explorer site (which never shows these
// links) does not bundle the data.
//
// A link is "possible": a code says what a program works toward, and the
// evidence is about specific program models. Credit needs a program that runs
// the model in modelMatch, confirmed by a person.
//
// A research-associated link is a second, separate tier: consistent
// correlational evidence (a meta-analysis, or several long-term studies that
// adjust for prior achievement or attendance). It says the outcome "is
// associated with" the indicator, never that a program contributes to it.

export type EvidenceLevel = 'strong' | 'good' | 'suggestive' | 'thin' | 'definitional';

export interface SpotlightIndicator {
  id: string;
  group: string;
  /** Plain-words name used in the app and the export. */
  name: string;
  /** The SPOTlight's own wording. */
  spotlightWording: string;
  value2024_25: string;
}

export interface SpotlightLink {
  id: string;
  codes: string[];
  indicators: string[];
  /** "direct", or "predicts" for a leading indicator that only predicts the outcome. */
  contribution: 'direct' | 'predicts';
  pathway: string;
  evidence: EvidenceLevel;
  /** What the evidence level covers, e.g. "for the tutoring model only". */
  evidenceScope?: string;
  /** The program model a partner must run for the link to apply. */
  modelMatch: string;
  conditions: string;
  typicalEffect: string;
  magnitude: string;
  caveats: string;
  philadelphia: { found: boolean; note?: string };
  studies: string[];
  links: { url: string; note?: string }[];
  /** Claim ids in codebook-refinement/spotlight/verification/. */
  claims: string[];
}

export interface AssociatedLink {
  id: string;
  codes: string[];
  indicators: string[];
  /** Always worded "is associated with". */
  pathway: string;
  /** The kind of evidence, e.g. "a meta-analysis of 99 studies". */
  basis: string;
  typicalEffect: string;
  caveats: string;
  philadelphia: { found: boolean; note?: string };
  studies: string[];
  links: { url: string; note?: string }[];
  claims: string[];
}

export interface NotRecommendedLink {
  id: string;
  codes: string[];
  indicators: string[];
  pathway: string;
  evidence: string;
}

export interface SpotlightLinks {
  codebook: string;
  codebookVersion: string;
  spotlightYear: string;
  reviewedOn: string;
  report: string;
  rule: string;
  associatedRule: string;
  /** Shown with every research-associated link. */
  associatedCaution: string;
  indicators: SpotlightIndicator[];
  guardrails: { summary: string; quote: string; citation: string; url: string };
  links: SpotlightLink[];
  associated: AssociatedLink[];
  notRecommended: NotRecommendedLink[];
}

export const EVIDENCE_LABEL: Record<EvidenceLevel, string> = {
  strong: 'Strong evidence',
  good: 'Good evidence',
  suggestive: 'Suggestive evidence',
  thin: 'Thin evidence',
  definitional: 'By definition',
};

/** The code id at the start of a coded value: "Y4.2 Emotion Regulation" -> "Y4.2". */
export const codeIdOf = (value: string | undefined): string | undefined =>
  (value ?? '').trim().match(/^([A-Z]\d+\.\d+)(?=\s|$)/)?.[1];

export const linksForCode = (data: SpotlightLinks, code: string): SpotlightLink[] =>
  data.links.filter(l => l.codes.includes(code));

export const notRecommendedForCode = (data: SpotlightLinks, code: string): NotRecommendedLink[] =>
  data.notRecommended.filter(l => l.codes.includes(code));

export const linksForIndicator = (data: SpotlightLinks, indicatorId: string): SpotlightLink[] =>
  data.links.filter(l => l.indicators.includes(indicatorId));

export const associatedForCode = (data: SpotlightLinks, code: string): AssociatedLink[] =>
  data.associated.filter(l => l.codes.includes(code));

export const associatedForIndicator = (data: SpotlightLinks, indicatorId: string): AssociatedLink[] =>
  data.associated.filter(l => l.indicators.includes(indicatorId));

const inOrder = (data: SpotlightLinks, links: { indicators: string[] }[]): SpotlightIndicator[] => {
  const ids = new Set(links.flatMap(l => l.indicators));
  return data.indicators.filter(i => ids.has(i.id));
};

/** Indicators a code may reach through a recommended link, in SPOTlight order. */
export const possibleIndicatorsForCode = (data: SpotlightLinks, code: string): SpotlightIndicator[] =>
  inOrder(data, linksForCode(data, code));

/** Indicators a code is associated with through a research-associated link, in SPOTlight order. */
export const associatedIndicatorsForCode = (data: SpotlightLinks, code: string): SpotlightIndicator[] =>
  inOrder(data, associatedForCode(data, code));

/**
 * The export's possible_spotlight_links cell for a coded value: the indicators
 * its code may reach, by name, separated by "; ". Blank for a domain-only,
 * uncoded or unlinked value.
 */
export const possibleSpotlightLinksCell = (data: SpotlightLinks | undefined, subcategory: string | undefined): string => {
  const code = codeIdOf(subcategory);
  if (!data || !code) return '';
  return possibleIndicatorsForCode(data, code).map(i => i.name).join('; ');
};

/**
 * The export's associated_spotlight_links cell: the indicators the primary
 * code is associated with in correlational research, by name. Kept apart from
 * possible_spotlight_links so the two tiers are never mixed.
 */
export const associatedSpotlightLinksCell = (data: SpotlightLinks | undefined, subcategory: string | undefined): string => {
  const code = codeIdOf(subcategory);
  if (!data || !code) return '';
  return associatedIndicatorsForCode(data, code).map(i => i.name).join('; ');
};
