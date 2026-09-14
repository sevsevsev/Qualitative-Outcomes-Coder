import { describe, it, expect } from 'vitest';
import { normalizeImportedCoding } from './reviewNormalization';
import { getCodebook } from '../codebooks';

const original = getCodebook('original');
const acceleratePhilly = getCodebook('accelerate_philly');

describe('normalizeImportedCoding (original codebook)', () => {
  it('keeps an already-canonical domain and subcategory unchanged', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 1. Joy, Interest & Motivation in Learning',
        primary_subcategory: '1.1 Joy & Emotional Wellness',
        primary_confidence: 'high',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 1. Joy, Interest & Motivation in Learning');
    expect(result.primary_subcategory).toBe('1.1 Joy & Emotional Wellness');
    expect(result.uncoded).toBe(false);
  });

  it('fuzzy-matches a domain missing the "Domain " prefix', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '1. Joy, Interest & Motivation in Learning', primary_confidence: 'medium', uncoded: false },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 1. Joy, Interest & Motivation in Learning');
  });

  it('fuzzy-matches a two-digit domain number missing the "Domain " prefix', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '11. Academic Learning & Achievement', primary_confidence: 'high', uncoded: false },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 11. Academic Learning & Achievement');
  });

  it('fuzzy-matches a subcategory given only its numeric prefix', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 3. Social & Emotional Learning (CASEL-aligned)',
        primary_subcategory: '3.2.1',
        primary_confidence: 'high',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result.primary_subcategory).toBe('3.2.1 Emotion regulation & impulse control');
  });

  it('clears a subcategory that does not belong to the matched domain', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 1. Joy, Interest & Motivation in Learning',
        primary_subcategory: '3.2.1 Emotion regulation & impulse control',
        primary_confidence: 'high',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 1. Joy, Interest & Motivation in Learning');
    expect(result.primary_subcategory).toBe('');
  });

  it('clears an unrecognizable domain and downgrades confidence to none', () => {
    const result = normalizeImportedCoding(
      { primary_domain: 'Not A Real Domain', primary_confidence: 'high', uncoded: false },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('');
    expect(result.primary_confidence).toBe('none');
  });

  it('does not downgrade confidence when the item is already marked uncoded', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '', primary_confidence: 'medium', uncoded: true },
      original,
      'original'
    );
    expect(result.uncoded).toBe(true);
  });

  it('parses a stringified "true" uncoded flag as a real boolean', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '', primary_confidence: 'none', uncoded: 'true' as any },
      original,
      'original'
    );
    expect(result.uncoded).toBe(true);
  });

  it('un-marks uncoded when a valid domain is present (domain wins over a stale uncoded flag)', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 2. Belonging, Relationships & School Connectedness',
        primary_confidence: 'medium',
        uncoded: true,
      },
      original,
      'original'
    );
    expect(result.uncoded).toBe(false);
  });
});

describe('normalizeImportedCoding (accelerate_philly codebook)', () => {
  it('fuzzy-matches a bare numeric code to its canonical "Code NN:" form', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '01', primary_confidence: 'high', uncoded: false },
      acceleratePhilly,
      'accelerate_philly'
    );
    expect(result.primary_domain).toBe('Code 01: Improve Safety and Well-being');
  });

  it('has no subcategories to match, so subcategory always normalizes to empty', () => {
    const result = normalizeImportedCoding(
      { primary_domain: 'Code 03: Accelerate Academic Achievement', primary_subcategory: 'none', primary_confidence: 'high', uncoded: false },
      acceleratePhilly,
      'accelerate_philly'
    );
    expect(result.primary_subcategory).toBe('');
  });
});
