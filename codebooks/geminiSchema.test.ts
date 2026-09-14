import { describe, it, expect } from 'vitest';
import { buildBatchResponseSchema } from './geminiSchema';
import { getCodebook, allDomainCodes, allSubcategoryCodes } from './index';

describe('buildBatchResponseSchema', () => {
  it('constrains primary_domain to all 12 domains of the original codebook, including the new ones', () => {
    const codebook = getCodebook('original');
    const schema = buildBatchResponseSchema(codebook);
    // coded_items[].split_items[].primary_domain enum
    const splitItemSchema = (schema.properties as any).coded_items.items.properties.split_items.items;
    const domainEnum = splitItemSchema.properties.primary_domain.enum as string[];

    expect(domainEnum).toEqual(allDomainCodes(codebook));
    expect(domainEnum).toContain('Domain 11. Academic Learning & Achievement');
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
