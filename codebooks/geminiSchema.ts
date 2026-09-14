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
import { Codebook, allDomainCodes, allSubcategoryCodes } from "./types";

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
          subcategory: { type: Type.STRING, enum: enums.subcategory },
          confidence: { type: Type.STRING, enum: ["high", "medium", "low"] },
        },
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
            split_items: { type: Type.ARRAY, items: splitItemSchema },
            primary_domain: { type: Type.STRING, enum: enums.domain },
            primary_subcategory: { type: Type.STRING, enum: enums.subcategory },
            primary_confidence: { type: Type.STRING, enum: ["high", "medium", "low", "none"] },
            primary_subject_area: { type: Type.STRING, enum: enums.subjectArea },
            primary_target_population: { type: Type.STRING, enum: enums.targetPopulation },
            uncoded: { type: Type.BOOLEAN },
            notes: { type: Type.STRING }
          },
          required: ["row_id", "split_needed", "split_items", "notes", "primary_domain", "primary_subcategory", "primary_confidence", "primary_subject_area", "primary_target_population", "uncoded"]
        }
      }
    }
  };
};
