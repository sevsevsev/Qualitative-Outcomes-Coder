import { describe, it, expect } from 'vitest';
import { toBool, needsReview, reviewProgress, editMarksChecked, exportFilename, withAiOriginal, assignSample, isChanged, reviewStatus, sampleStats, widenSample } from './reviewState.js';

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

const coded = (i: number, conf: string, org = 'Org A', extra: Record<string, unknown> = {}) => withAiOriginal({
  row_id: String(i), atomic_outcome_id: `${i}_1`, atomic_outcome_index: 1, outcome_text_atomic: `statement ${i}`,
  organization: org, program: 'P', primary_domain: 'Domain Y1', primary_subcategory: 'Y1.1',
  primary_confidence: conf, uncoded: false, is_corrected: false, ...extra,
} as any);

describe('sampling medium and high rows', () => {
  const run = [
    ...Array.from({ length: 10 }, (_, i) => coded(i, 'medium')),
    ...Array.from({ length: 10 }, (_, i) => coded(100 + i, 'high')),
    ...Array.from({ length: 5 }, (_, i) => coded(200 + i, 'medium', 'Org B')),
    coded(300, 'low'),
    coded(301, 'none', 'Org A', { uncoded: true, primary_domain: '' }),
  ];

  it('samples 20% of medium and 10% of high rows per logic model, rounded up', () => {
    const out = assignSample(run);
    const count = (conf: string, org: string) =>
      out.filter(r => r.ai_confidence === conf && r.organization === org && r.review_sample === 'sampled').length;
    expect(count('medium', 'Org A')).toBe(2);
    expect(count('high', 'Org A')).toBe(1);
    expect(count('medium', 'Org B')).toBe(1);
    expect(out.filter(r => r.review_sample === 'flagged').map(r => r.row_id)).toEqual(['300', '301']);
  });

  it('draws the same sample every time and keeps a saved one', () => {
    const a = assignSample(run).map(r => r.review_sample);
    const b = assignSample([...run].reverse()).reverse().map(r => r.review_sample);
    expect(b).toEqual(a);
    const saved = assignSample(run).map(r => ({ ...r, review_sample: 'not_sampled' as const }));
    expect(assignSample(saved).every(r => r.review_sample === 'not_sampled')).toBe(true);
  });

  it('flags sampled rows for review and auto-accepts the rest', () => {
    const out = assignSample(run);
    const sampled = out.find(r => r.review_sample === 'sampled')!;
    const notSampled = out.find(r => r.review_sample === 'not_sampled')!;
    expect(needsReview(sampled)).toBe(true);
    expect(needsReview(notSampled)).toBe(false);
    expect(reviewStatus(notSampled)).toBe('auto_accepted');
    expect(reviewStatus(sampled)).toBe('needs_check');
  });

  it('keeps the AI answer when the reviewer changes the code', () => {
    const r = coded(1, 'high');
    const edited = withAiOriginal({ ...r, primary_subcategory: 'Y1.2', primary_confidence: 'medium', is_corrected: true });
    expect(edited.ai_primary_subcategory).toBe('Y1.1');
    expect(edited.ai_confidence).toBe('high');
    expect(isChanged(edited)).toBe(true);
    expect(reviewStatus(edited)).toBe('changed');
    expect(reviewStatus({ ...r, is_corrected: true })).toBe('confirmed');
  });

  it('suggests widening once more than 10% of at least 10 checked sample rows changed', () => {
    const many = assignSample(Array.from({ length: 60 }, (_, i) => coded(i, 'medium')));
    let checkedN = 0;
    const reviewed = many.map(r => {
      if (r.review_sample !== 'sampled') return r;
      checkedN++;
      return { ...r, is_corrected: true, primary_subcategory: checkedN <= 2 ? 'Y1.2' : r.primary_subcategory };
    });
    const med = sampleStats(reviewed).find(s => s.level === 'medium')!;
    expect(med).toMatchObject({ sampled: 12, checked: 12, changed: 2, notSampled: 48, suggestWiden: true });
    const widened = widenSample(reviewed, 'medium');
    expect(widened.filter(r => needsReview(r)).length).toBe(48);
    expect(sampleStats(widened).find(s => s.level === 'medium')!.suggestWiden).toBe(false);
  });
});
