import { describe, it, expect } from 'vitest';
import { parseCSV, atomicJsonToCSV } from './geminiService.js';
import { AtomicBatchItem } from '../types.js';

describe('parseCSV', () => {
  it('parses a simple CSV and normalizes the outcome_text header', () => {
    const csv = 'Outcome Text,Organization\n"Students will improve reading",Acme Org';
    const rows = parseCSV(csv);
    expect(rows).toEqual([
      { outcome_text: 'Students will improve reading', Organization: 'Acme Org' },
    ]);
  });

  it('recognizes common aliases for outcome, row id, and group columns', () => {
    const csv = 'ID,Objective,Population\n1,"Do the thing",families_caregivers';
    const rows = parseCSV(csv);
    expect(rows).toEqual([
      { row_id: '1', outcome_text: 'Do the thing', group: 'families_caregivers' },
    ]);
  });

  it('handles quoted fields containing commas, quotes, and newlines', () => {
    const csv = 'outcome_text,notes\n"Students will say ""hi"", and learn things","line one\nline two"';
    const rows = parseCSV(csv);
    expect(rows).toEqual([
      { outcome_text: 'Students will say "hi", and learn things', notes: 'line one\nline two' },
    ]);
  });

  it('strips a leading BOM before parsing headers', () => {
    const csv = '\uFEFFoutcome_text\n"Hello"';
    const rows = parseCSV(csv);
    expect(rows).toEqual([{ outcome_text: 'Hello' }]);
  });

  it('throws a clear error when there is no recognizable outcome column', () => {
    const csv = 'foo,bar\n1,2';
    expect(() => parseCSV(csv)).toThrow(/outcome_text/i);
  });

  it('gives a specific hint when the file looks semicolon-delimited', () => {
    const csv = 'outcome_text;organization\n"Hi";Acme';
    expect(() => parseCSV(csv)).toThrow(/semicolon/i);
  });

  it('throws on a fully empty file', () => {
    expect(() => parseCSV('')).toThrow(/empty/i);
  });

  it('pads missing trailing columns with empty strings', () => {
    const csv = 'outcome_text,organization,program\n"Hi"';
    const rows = parseCSV(csv);
    expect(rows).toEqual([{ outcome_text: 'Hi', organization: '', program: '' }]);
  });
});

describe('atomicJsonToCSV', () => {
  const baseItem: AtomicBatchItem = {
    row_id: '1',
    atomic_outcome_id: '1_1',
    outcome_text_original: 'Original, with a comma',
    outcome_text_atomic: 'Atomic text',
    atomic_outcome_index: 1,
    primary_domain: 'Domain 1. Joy, Interest & Motivation in Learning',
    primary_subcategory: '1.1 Joy & Emotional Wellness',
    primary_confidence: 'high',
    primary_subject_area: 'N/A / General',
    primary_target_population: 'students_youth',
    secondary_domain_1: '',
    secondary_subcategory_1: '',
    secondary_confidence_1: '',
    secondary_domain_2: '',
    secondary_subcategory_2: '',
    secondary_confidence_2: '',
    uncoded: false,
    notes: 'Some "quoted" note',
    is_corrected: false,
    codebook_version: 'original@1.0.0',
    model_used: 'gemini-3.8-flash',
  };

  it('returns an empty string for no items', () => {
    expect(atomicJsonToCSV([])).toBe('');
  });

  it('quotes fields containing commas and escapes embedded quotes', () => {
    const csv = atomicJsonToCSV([baseItem]);
    const lines = csv.split('\n');
    expect(lines[0]).toContain('row_id');
    expect(lines[1]).toContain('"Original, with a comma"');
    expect(lines[1]).toContain('"Some ""quoted"" note"');
  });

  it('places unknown passthrough columns between the fixed start and end columns', () => {
    const withMetadata = { ...baseItem, organization: 'Acme Org' } as AtomicBatchItem;
    const csv = atomicJsonToCSV([withMetadata]);
    const headers = csv.split('\n')[0].split(',');
    expect(headers).toContain('organization');
    expect(headers.indexOf('organization')).toBeGreaterThan(headers.indexOf('row_id'));
    expect(headers.indexOf('organization')).toBeLessThan(headers.indexOf('primary_domain'));
  });

  it('ends with codebook_version and model_used columns', () => {
    const csv = atomicJsonToCSV([baseItem]);
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    expect(headers.slice(-2)).toEqual(['codebook_version', 'model_used']);
    expect(lines[1].endsWith(',original@1.0.0,gemini-3.8-flash')).toBe(true);
  });
});
