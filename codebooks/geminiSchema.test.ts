import { describe, it, expect } from 'vitest';
import { buildBatchResponseSchema } from './geminiSchema.js';
import { getCodebook, allDomainCodes, allSubcategoryCodes, CODEBOOK_LIST } from './index.js';

// Recursively sums every enum array's length reachable from a schema node.
// Exists because a live run against the real Gemini API found it rejects a
// request once a schema's TOTAL enum footprint (summed across every
// enum-bearing property in one compiled object graph, not any single
// field) crosses some threshold -- empirically measured between ~140
// (works) and ~220 (fails, generic "Request contains an invalid argument"
// 400 with no indication of the cause) for this schema's shape. There's no
// documented number to target exactly, so this guards a conservative
// ceiling with real margin on both sides rather than the measured edge.
const sumEnumSizes = (node: any): number => {
  if (!node || typeof node !== 'object') return 0;
  let total = Array.isArray(node.enum) ? node.enum.length : 0;
  if (node.properties) {
    total += Object.values(node.properties).reduce((sum: number, v) => sum + sumEnumSizes(v), 0);
  }
  if (node.items) {
    total += sumEnumSizes(node.items);
  }
  return total;
};

describe('buildBatchResponseSchema', () => {
  it.each(CODEBOOK_LIST.map(c => [c.id, c] as const))('keeps the total enum footprint of %s within the empirically-safe range', (_id, codebook) => {
    const schema = buildBatchResponseSchema(codebook);
    const total = sumEnumSizes(schema);
    // 139 is known to work live, 222 is known to fail live (see the note on
    // sumEnumSizes above) -- 180 leaves real margin under the failure point
    // while still catching meaningful growth (e.g. adding a 13th domain's
    // worth of subcategories) before it ships.
    expect(total).toBeLessThan(180);
  });

  it('does not duplicate primary_domain/primary_subcategory at the coded_items[] level', () => {
    // These fields were removed deliberately: unused by the client (only
    // split_items is read) and, combined with the same enums appearing
    // twice more below, what actually triggered the live 400 above.
    const codebook = getCodebook('original');
    const schema = buildBatchResponseSchema(codebook);
    const codedItemSchema = (schema.properties as any).coded_items.items;
    expect(codedItemSchema.properties.primary_domain).toBeUndefined();
    expect(codedItemSchema.properties.primary_subcategory).toBeUndefined();
    expect(codedItemSchema.required).toEqual(['row_id', 'split_needed', 'split_items', 'notes']);
  });

  it('keeps secondary_codes.domain enum-constrained but leaves subcategory free text', () => {
    // domain is a dozen items (cheap to keep constrained); subcategory is
    // the 80+ item enum that has to be spent somewhere to stay under the
    // footprint budget -- this is the least-stakes place to spend it,
    // since secondary codes aren't surfaced in the review table UI.
    const codebook = getCodebook('original');
    const schema = buildBatchResponseSchema(codebook);
    const splitItemSchema = (schema.properties as any).coded_items.items.properties.split_items.items;
    const secondaryCodeSchema = splitItemSchema.properties.secondary_codes.items;

    expect(secondaryCodeSchema.properties.domain.enum).toEqual(allDomainCodes(codebook));
    expect(secondaryCodeSchema.properties.subcategory.enum).toBeUndefined();
  });

  it('requires a confidence on every secondary code', () => {
    const schema = buildBatchResponseSchema(getCodebook('original'));
    const splitItemSchema = (schema.properties as any).coded_items.items.properties.split_items.items;
    expect(splitItemSchema.properties.secondary_codes.items.required).toEqual(['domain', 'subcategory', 'confidence']);
  });
  it('constrains primary_domain to all 12 domains of the original codebook, including the new ones', () => {
    const codebook = getCodebook('original');
    const schema = buildBatchResponseSchema(codebook);
    // coded_items[].split_items[].primary_domain enum
    const splitItemSchema = (schema.properties as any).coded_items.items.properties.split_items.items;
    const domainEnum = splitItemSchema.properties.primary_domain.enum as string[];

    expect(domainEnum).toEqual(allDomainCodes(codebook));
    expect(domainEnum).toContain('Domain 1. Academic Learning & Achievement');
    expect(domainEnum).toContain('Domain 12. Family Strengthening & Basic Needs');
    expect(domainEnum).toHaveLength(12);
  });

  it('constrains primary_subcategory to all subcategory codes plus "none"', () => {
    const codebook = getCodebook('original');
    const schema = buildBatchResponseSchema(codebook);
    const splitItemSchema = (schema.properties as any).coded_items.items.properties.split_items.items;
    const subcategoryEnum = splitItemSchema.properties.primary_subcategory.enum as string[];

    expect(subcategoryEnum).toContain('none');
    allSubcategoryCodes(codebook).forEach(code => {
      expect(subcategoryEnum).toContain(code);
    });
  });

  it('locks primary_subcategory to just "none" for a codebook with no subcategories', () => {
    const codebook = getCodebook('accelerate_philly');
    const schema = buildBatchResponseSchema(codebook);
    const splitItemSchema = (schema.properties as any).coded_items.items.properties.split_items.items;
    const subcategoryEnum = splitItemSchema.properties.primary_subcategory.enum as string[];

    expect(subcategoryEnum).toEqual(['none']);
  });
});
