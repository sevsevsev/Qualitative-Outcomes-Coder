import { describe, it, expect } from 'vitest';
import { normalizeImportedCoding, normalizeSecondarySubcategory } from './reviewNormalization.js';
import { getCodebook } from '../codebooks/index.js';

const original = getCodebook('original');
const acceleratePhilly = getCodebook('accelerate_philly');

describe('normalizeImportedCoding (original codebook)', () => {
  it('keeps an already-canonical domain and subcategory unchanged', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 2. Joy, Interest & Motivation in Learning',
        primary_subcategory: '2.1 Joy & Emotional Wellness',
        primary_confidence: 'high',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 2. Joy, Interest & Motivation in Learning');
    expect(result.primary_subcategory).toBe('2.1 Joy & Emotional Wellness');
    expect(result.uncoded).toBe(false);
  });

  it('fuzzy-matches a domain missing the "Domain " prefix', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '1. Joy, Interest & Motivation in Learning', primary_confidence: 'medium', uncoded: false },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 2. Joy, Interest & Motivation in Learning');
  });

  it('fuzzy-matches a two-digit domain number missing the "Domain " prefix', () => {
    const result = normalizeImportedCoding(
      { primary_domain: '11. Academic Learning & Achievement', primary_confidence: 'high', uncoded: false },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 1. Academic Learning & Achievement');
  });

  it('fuzzy-matches a subcategory given only its numeric prefix', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 4. Social & Emotional Learning (CASEL-aligned)',
        primary_subcategory: '4.2.1',
        primary_confidence: 'high',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result.primary_subcategory).toBe('4.2.1 Emotion regulation & impulse control');
  });

  it('clears a subcategory that does not belong to the matched domain', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 2. Joy, Interest & Motivation in Learning',
        primary_subcategory: '4.2.1 Emotion regulation & impulse control',
        primary_confidence: 'high',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result.primary_domain).toBe('Domain 2. Joy, Interest & Motivation in Learning');
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

  it('keeps uncoded and drops the domain the schema forced the model to name', () => {
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 3. Belonging, Relationships & School Connectedness',
        primary_confidence: 'medium',
        uncoded: true,
      },
      original,
      'original'
    );
    expect(result).toEqual({ primary_domain: '', primary_subcategory: '', primary_confidence: 'none', uncoded: true });
  });

  it('treats confidence "none" with a domain as uncoded (how the model flags a header or fragment)', () => {
    // Shape of a real gemini-3.8-flash row for "Students demonstrate improvements in:".
    const result = normalizeImportedCoding(
      {
        primary_domain: 'Domain 1. Academic Learning & Achievement',
        primary_subcategory: '',
        primary_confidence: 'none',
        uncoded: false,
      },
      original,
      'original'
    );
    expect(result).toEqual({ primary_domain: '', primary_subcategory: '', primary_confidence: 'none', uncoded: true });
  });

  it('does not treat a missing confidence (legacy CSV) as uncoded', () => {
    const result = normalizeImportedCoding(
      { primary_domain: 'Domain 3. Belonging, Relationships & School Connectedness', uncoded: false },
      original,
      'original'
    );
    expect(result.uncoded).toBe(false);
    expect(result.primary_domain).toBe('Domain 3. Belonging, Relationships & School Connectedness');
  });
});

describe('normalizeImportedCoding (v1.1.1 labels renamed or split in v1.2.0)', () => {
  const D11 = 'Domain 1. Academic Learning & Achievement';
  const legacy = (sub: string, subject: string) =>
    normalizeImportedCoding(
      { primary_domain: D11, primary_subcategory: sub, primary_confidence: 'high', primary_subject_area: subject, uncoded: false },
      original,
      'original'
    ).primary_subcategory;

  it('maps the old 1.1 and 1.6 labels to their renamed codes', () => {
    expect(legacy('1.1 Literacy & Reading Skill', 'English Language Arts (ELA) & Literacy')).toBe('1.1 Literacy: Reading & Writing');
    expect(legacy('1.6 Credit Accumulation, On-Track Status & Graduation', 'N/A / General')).toBe('1.6 Grades, Credits, On-Track Status & Graduation');
  });

  it('routes an old 1.3 row to the new code for its subject', () => {
    const old113 = '1.3 General Content Knowledge & Conceptual Understanding';
    expect(legacy(old113, 'Science (Natural/Physical)')).toBe('1.8 Science, Technology & Engineering');
    expect(legacy(old113, 'STEM (Integrated/Cross-disciplinary)')).toBe('1.8 Science, Technology & Engineering');
    expect(legacy(old113, 'Visual & Performing Arts')).toBe('1.9 Arts Learning & Performance');
    expect(legacy(old113, 'Social Studies, History & Civics')).toBe('1.3 Knowledge & Skill in Other Academic Subjects');
    // No subject: stays 1.3, where the review table flags the missing subject.
    expect(legacy(old113, 'N/A / General')).toBe('1.3 Knowledge & Skill in Other Academic Subjects');
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

// Real malformed values from a 2,081-row gemini-3.8-flash export (2026-09-23).
describe('normalizeSecondarySubcategory', () => {
  const domain5 = 'Domain 6. Positive Youth Development (PYD) & Assets';
  const domain6 = 'Domain 7. Civic Engagement & Community';

  it('keeps a canonical subcategory unchanged', () => {
    expect(normalizeSecondarySubcategory('6.4 Positive Identity', domain5, original)).toBe('6.4 Positive Identity');
  });

  it('strips a confidence level glued onto the label', () => {
    expect(normalizeSecondarySubcategory('6.4 Positive Identity-medium', domain5, original)).toBe('6.4 Positive Identity');
  });

  it('recovers the code from a runaway generation', () => {
    const runaway = '7.3 Youth Voice & Leadership Juror Alternative if Youth-Led Club ' + 'context mapping '.repeat(20000);
    expect(normalizeSecondarySubcategory(runaway, domain6, original)).toBe('7.3 Youth Voice & Leadership');
  });

  it('matches the whole code, not a prefix of a longer one', () => {
    const domain3 = 'Domain 4. Social & Emotional Learning (CASEL-aligned)';
    expect(normalizeSecondarySubcategory('4.1 Self-Awareness', domain3, original)).toBe('');
  });

  it('returns empty when the code belongs to a different domain or is missing', () => {
    expect(normalizeSecondarySubcategory('7.3 Youth Voice & Leadership', domain5, original)).toBe('');
    expect(normalizeSecondarySubcategory('', domain5, original)).toBe('');
    expect(normalizeSecondarySubcategory('6.4 Positive Identity', '', original)).toBe('');
  });
});
