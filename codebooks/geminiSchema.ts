// codebooks/geminiSchema.ts
//
// Builds the Gemini structured-output schema for a given codebook, with
// domain/subcategory/subject-area/target-population values constrained via
// `enum` to the codebook's own vocabulary. This is what lets us delete the
// old free-text-plus-regex-cleanup approach: since Gemini's structured
// output enforces the enum at generation time, the model literally cannot
// return a domain name that isn't one of the codebook's own domain codes.
//
// Server-only: imports @google/genai, so this module must never be
// imported from client code (App.tsx, components/*, or codebooks/index.ts's
// barrel export) -- only from api/analyze-batch.ts.

import { Type, Schema } from "@google/genai";
import { Codebook, allDomainCodes, allSubcategoryCodes } from "./types.js";

interface CodebookEnums {
  domain: string[];
  subcategory: string[];
  subjectArea: string[];
  targetPopulation: string[];
}

const buildEnums = (codebook: Codebook): CodebookEnums => ({
  domain: allDomainCodes(codebook),
  subcategory: codebook.capabilities.hasSubcategories
    ? [...allSubcategoryCodes(codebook), "none"]
    : ["none"],
  subjectArea: codebook.capabilities.hasSubjectArea
    ? [...(codebook.subjectAreaOptions ?? []), "none"]
    : ["none"],
  targetPopulation: codebook.capabilities.hasTargetPopulation
    ? [...(codebook.targetPopulationOptions ?? []), "none"]
    : ["none"],
});

const buildSplitItemSchema = (enums: CodebookEnums): Schema => ({
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    primary_domain: { type: Type.STRING, enum: enums.domain },
    primary_subcategory: { type: Type.STRING, enum: enums.subcategory },
    primary_confidence: { type: Type.STRING, enum: ["high", "medium", "low", "none"] },
    subject_area: { type: Type.STRING, enum: enums.subjectArea },
    target_population_primary: { type: Type.STRING, enum: enums.targetPopulation },
    secondary_codes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          domain: { type: Type.STRING, enum: enums.domain },
          // NOT enum-constrained -- see the note on buildBatchResponseSchema
          // about the combined-enum-size limit. subcategory is the large
          // (80+ item) enum; domain (a dozen items) stays constrained.
          // cleanCodebookString() still trims this client-side, and it's
          // not surfaced/editable in the review table UI, so free text here
          // is a deliberately low-stakes place to spend the budget.
          subcategory: { type: Type.STRING },
          confidence: { type: Type.STRING, enum: ["high", "medium", "low"] },
        },
        // Without this, a live run left confidence blank on 31 of 49
        // secondary codes.
        required: ["domain", "subcategory", "confidence"],
      },
    },
    uncoded: { type: Type.BOOLEAN },
  },
  required: ["text", "primary_domain", "primary_subcategory", "primary_confidence", "subject_area", "target_population_primary", "secondary_codes", "uncoded"],
});

export const buildBatchResponseSchema = (codebook: Codebook): Schema => {
  const enums = buildEnums(codebook);
  const splitItemSchema = buildSplitItemSchema(enums);

  return {
    type: Type.OBJECT,
    properties: {
      coded_items: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            row_id: { type: Type.STRING },
            outcome_text: { type: Type.STRING },
            split_needed: { type: Type.STRING, enum: ["yes", "no"] },
            // Per rulesText, every item must produce at least one split_item
            // (a single item when split_needed is "no"), so that's the only
            // place actual coding data lives -- this level intentionally has
            // no duplicate primary_domain/subcategory/etc. fields. They were
            // genuinely unused anyway (flattenToAtomic only reads
            // split_items; its split_items.length === 0 fallback is a
            // defensive path for malformed output, not a real target), but
            // removing them is also load-bearing: a live run against the
            // real API found Gemini's structured output rejects a request
            // once a schema's TOTAL enum footprint (summed across every
            // enum-bearing property reachable from one object, not just one
            // field repeated) crosses some threshold -- empirically between
            // ~125 and ~220 enum values for this schema shape. This 83-item
            // subcategory enum plus the smaller ones (domain, subject_area,
            // target_population, confidence) already approach that just
            // within splitItemSchema/secondary_codes (see the note there);
            // a third full copy of domain+subcategory at this level pushed
            // it over, and every request failed with a generic "Request
            // contains an invalid argument" 400 that gave no indication
            // which part of the schema was the problem.
            split_items: { type: Type.ARRAY, items: splitItemSchema },
            notes: { type: Type.STRING }
          },
          required: ["row_id", "split_needed", "split_items", "notes"]
        }
      }
    }
  };
};
