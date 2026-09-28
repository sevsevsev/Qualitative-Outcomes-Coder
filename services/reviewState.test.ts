import { describe, it, expect } from 'vitest';
import { toBool, needsReview, reviewProgress, editMarksChecked, exportFilename } from './reviewState.js';

const row = (over: Record<string, unknown> = {}) => ({
  is_corrected: false,
  uncoded: false,
  primary_domain: 'Y1',
  primary_confidence: 'high',
  ...over,
}) as any;

describe('toBool', () => {
  it('reads real booleans and CSV strings', () => {
    expect(toBool(true)).toBe(true);
    expect(toBool('TRUE')).toBe(true);
    expect(toBool('false')).toBe(false);
    expect(toBool(false)).toBe(false);
    expect(toBool(undefined)).toBe(false);
    expect(toBool('')).toBe(false);
  });
});

describe('needsReview', () => {
  it('flags uncoded, missing-domain and low/none-confidence rows', () => {
    expect(needsReview(row({ uncoded: true }))).toBe(true);
    expect(needsReview(row({ primary_domain: '' }))).toBe(true);
    expect(needsReview(row({ primary_confidence: 'low' }))).toBe(true);
    expect(needsReview(row({ primary_confidence: '' }))).toBe(true);
    expect(needsReview(row({ primary_confidence: 'medium' }))).toBe(false);
    expect(needsReview(row())).toBe(false);
  });

  it('clears a row once it is checked, including a restored "true" string', () => {
    expect(needsReview(row({ uncoded: true, is_corrected: true }))).toBe(false);
    expect(needsReview(row({ uncoded: true, is_corrected: 'true' }))).toBe(false);
    expect(needsReview(row({ uncoded: true, is_corrected: 'false' }))).toBe(true);
  });
});

describe('reviewProgress', () => {
  it('separates checked, flagged and unchecked medium/high rows', () => {
    const p = reviewProgress([
      row({ is_corrected: true }),
      row({ primary_confidence: 'low' }),
      row({ uncoded: true }),
      row(),
      row({ primary_confidence: 'medium' }),
    ]);
    expect(p).toEqual({ total: 5, checked: 1, flaggedLeft: 2, uncheckedNotFlagged: 2 });
  });
});

describe('editMarksChecked', () => {
  it('does not count a note as checking the code', () => {
    expect(editMarksChecked('notes')).toBe(false);
    expect(editMarksChecked('primary_domain')).toBe(true);
    expect(editMarksChecked('uncoded')).toBe(true);
  });
});

describe('exportFilename', () => {
  it('names the codebook, version and date', () => {
    expect(exportFilename('youth_outcomes_v3', '3.1.2', new Date(2026, 8, 28))).toBe(
      'coded_outcomes_youth_outcomes_v3-3.1.2_2026-09-28.csv',
    );
  });
});
