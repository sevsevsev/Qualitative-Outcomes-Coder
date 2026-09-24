// services/reviewNormalization.ts
//
// Normalizes a coding result (primary_domain/subcategory/confidence/uncoded)
// against a codebook's canonical domain/subcategory strings. Used when
// loading items into the review dashboard, since the AI's raw output, a
// re-imported CSV, or a hand-edited export may carry a domain string that's
// valid but not in the codebook's exact casing/format (e.g. "1. Joy..."
// instead of "Domain 1. Joy...").
//
// Pulled out of ReviewDashboard's render logic so this bug-prone string
// matching can be unit tested directly (see reviewNormalization.test.ts).

import { CodebookType } from '../types.js';
import { Codebook, allDomainCodes, subcategoriesForDomain } from '../codebooks/index.js';

export interface NormalizableCoding {
  primary_domain?: string;
  primary_subcategory?: string;
  primary_confidence?: string;
  primary_subject_area?: string;
  uncoded?: boolean | string;
}

export interface NormalizedCoding {
  primary_domain: string;
  primary_subcategory: string;
  primary_confidence: string;
  uncoded: boolean;
}

/**
 * Codebook-specific fuzzy matching for a domain string that doesn't exactly
 * match one of the codebook's canonical domain codes. Each codebook has its
 * own numbering syntax ("Domain 1." vs "Code 01:"), so this stays keyed on
 * codebookType rather than being fully generic -- see the note in
 * ReviewDashboard.tsx if a third codebook needs its own variant here.
 */
const fuzzyMatchDomain = (
  rawDomain: string,
  domains: string[],
  codebookType: CodebookType
): string | undefined => {
  let checkDomain = rawDomain;

  if (codebookType === 'original') {
    // Handle "1. Joy" or "1 Joy" (a top-level domain number, optionally
    // followed by a dot, then whitespace -- NOT a subcategory code like
    // "3.2.1 ..." which has more than one digit group before the text).
    if (/^\d+\.?\s/.test(checkDomain) && !checkDomain.toLowerCase().startsWith('domain')) {
      checkDomain = "Domain " + checkDomain;
    }
    // Handle "Domain 1" -> "Domain 1."
    if (/^Domain \d+$/.test(checkDomain)) {
      checkDomain += ".";
    }
    const domainParts = checkDomain.split(/[. ]/);
    if (domainParts.length > 1 && domainParts[0].toLowerCase() === "domain") {
      const prefix = `${domainParts[0]} ${domainParts[1]}.`;
      return domains.find(d => d.toLowerCase().startsWith(prefix.toLowerCase()));
    }
    return undefined;
  }

  if (codebookType === 'accelerate_philly') {
    if (/^\d+/.test(checkDomain) && !checkDomain.toLowerCase().startsWith('code')) {
      checkDomain = "Code " + checkDomain.padStart(2, '0');
    }
    return domains.find(d => d.toLowerCase().includes(checkDomain.toLowerCase()));
  }

  return undefined;
};

export const normalizeImportedCoding = (
  item: NormalizableCoding,
  codebook: Codebook,
  codebookType: CodebookType
): NormalizedCoding => {
  const domains = allDomainCodes(codebook);

  let cleanDomain = (item.primary_domain || "").trim();
  let cleanSub = (item.primary_subcategory || "").trim();
  let cleanConf = (item.primary_confidence || "none").trim().toLowerCase();
  const isUncoded = item.uncoded === true || String(item.uncoded).toLowerCase() === 'true';

  // An uncoded flag, or an explicit confidence of "none", means no code fits.
  // The response schema's domain enum has no "none" option, so the model has
  // to name a domain even then; that forced domain is dropped, not trusted.
  // The review table never pairs a domain with either signal (picking a
  // domain clears uncoded and lifts confidence off "none"), so this only
  // changes raw AI output. A missing confidence (a legacy CSV without the
  // column) is not treated as "none".
  const explicitNone = (item.primary_confidence ?? '').trim().toLowerCase() === 'none';
  if (isUncoded || explicitNone) {
    return { primary_domain: "", primary_subcategory: "", primary_confidence: "none", uncoded: true };
  }

  // --- Domain Normalization ---
  let matchedDomain = domains.find(d => d.toLowerCase() === cleanDomain.toLowerCase());
  if (!matchedDomain && cleanDomain) {
    matchedDomain = fuzzyMatchDomain(cleanDomain, domains, codebookType);
  }

  if (matchedDomain) {
    cleanDomain = matchedDomain;
  } else {
    // Invalid Domain: Clear it to force selection
    cleanDomain = "";
    cleanConf = "none";
  }

  // --- Legacy subcategory labels (renamed or split codes) ---
  const legacy = codebook.legacySubcategories?.find(m => m.from.toLowerCase() === cleanSub.toLowerCase());
  if (legacy) {
    cleanSub = legacy.bySubjectArea?.[(item.primary_subject_area || '').trim()] ?? legacy.to;
  }

  // --- Subcategory Normalization ---
  if (cleanDomain) {
    const validSubs = subcategoriesForDomain(codebook, cleanDomain);
    let matchedSub = validSubs.find(s => s.code.toLowerCase() === cleanSub.toLowerCase());

    if (!matchedSub && cleanSub) {
      const subPrefix = cleanSub.split(' ')[0];
      matchedSub = validSubs.find(s => s.code.startsWith(subPrefix));
    }
    cleanSub = matchedSub?.code || "";
  } else {
    cleanSub = "";
  }

  return {
    primary_domain: cleanDomain,
    primary_subcategory: cleanSub,
    primary_confidence: cleanConf,
    uncoded: isUncoded,
  };
};

/**
 * Secondary subcategories are plain strings in the response schema (see the
 * enum-size note in codebooks/geminiSchema.ts), so the model can return
 * values outside the codebook: a confidence glued on ("5.4 Positive
 * Identity-medium"), a reworded label, or a runaway generation hundreds of
 * KB long. Maps the value back to a canonical subcategory of `domainCode` by
 * its leading code number, or returns "" when none matches.
 */
export const normalizeSecondarySubcategory = (
  rawSubcategory: string | undefined,
  domainCode: string | undefined,
  codebook: Codebook
): string => {
  const code = (rawSubcategory ?? "").trim().split(/\s/)[0];
  if (!code || !domainCode) return "";
  return subcategoriesForDomain(codebook, domainCode).find(s => s.code.split(' ')[0] === code)?.code ?? "";
};
