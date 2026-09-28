// services/reviewState.ts
//
// Pure helpers behind the review dashboard, kept out of the component so they
// can be unit tested: which rows still need a person, how far the review has
// got, what the export file is called, and which edits count as checking a row.

import { AtomicBatchItem } from '../types.js';

type ReviewRow = Pick<AtomicBatchItem, 'is_corrected' | 'uncoded' | 'primary_domain' | 'primary_confidence'> & { review_sample?: string };

/** CSV and JSON can carry booleans as strings; "false" must not read as true. */
export const toBool = (value: unknown): boolean =>
  value === true || (typeof value === 'string' && value.trim().toLowerCase() === 'true');

/**
 * A row is flagged for a person when it hasn't been checked yet and the model
 * left it uncoded, gave no domain, or had low or no confidence, or when it
 * was drawn into the sample of medium/high rows (assignSample below). Other
 * medium and high rows are auto-accepted and count as unchecked.
 */
export const needsReview = (item: ReviewRow): boolean => {
  if (toBool(item.is_corrected)) return false;
  if (item.review_sample === 'sampled' || item.review_sample === 'all_checked') return true;
  if (toBool(item.uncoded)) return true;
  if (!item.primary_domain) return true;
  const conf = String(item.primary_confidence || 'none').trim().toLowerCase();
  return ['low', 'none', ''].includes(conf);
};

export interface ReviewProgress {
  total: number;
  checked: number;
  flaggedLeft: number;
  /** Medium/high rows nobody has looked at: not flagged, but not checked either. */
  uncheckedNotFlagged: number;
}

export const reviewProgress = (items: ReviewRow[]): ReviewProgress => {
  let checked = 0;
  let flaggedLeft = 0;
  for (const item of items) {
    if (toBool(item.is_corrected)) checked++;
    else if (needsReview(item)) flaggedLeft++;
  }
  return { total: items.length, checked, flaggedLeft, uncheckedNotFlagged: items.length - checked - flaggedLeft };
};

/**
 * Editing a reviewer-owned field that isn't part of the coding (the notes) does
 * not mean the row's code was checked.
 */
export const editMarksChecked = (field: string): boolean => field !== 'notes';

/** e.g. coded_outcomes_youth_outcomes_v3-3.1.2_2026-09-28.csv */
export const exportFilename = (codebookId: string, codebookVersion: string, now: Date = new Date()): string => {
  const pad = (n: number) => String(n).padStart(2, '0');
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const safe = (s: string) => s.replace(/[^A-Za-z0-9._-]+/g, '_');
  return `coded_outcomes_${safe(codebookId)}-${safe(codebookVersion)}_${date}.csv`;
};

// ---------------------------------------------------------------------------
// Sampling medium/high rows (Severin, 2026-09-28): a person checks every
// flagged row plus a fixed random share of the rows the model was sure about,
// per logic model, and the sample's change rate says whether that's enough.
// ---------------------------------------------------------------------------

export const SAMPLE_RATES: Record<'medium' | 'high', number> = { medium: 0.2, high: 0.1 };
/** Suggest checking every row at a confidence level once this share of its checked sample was changed. */
export const WIDEN_CHANGE_RATE = 0.1;
/** ...but only after this many sampled rows at that level have been checked. */
export const WIDEN_MIN_CHECKED = 10;

export type ReviewSample = 'flagged' | 'sampled' | 'not_sampled' | 'all_checked';
export type ReviewStatus = 'confirmed' | 'changed' | 'needs_check' | 'auto_accepted';

type SampleRow = Pick<AtomicBatchItem,
  'row_id' | 'atomic_outcome_id' | 'atomic_outcome_index' | 'outcome_text_atomic' |
  'uncoded' | 'primary_domain' | 'primary_subcategory' | 'primary_confidence' | 'is_corrected'> & {
  organization?: string; Organization?: string; program?: string; Program?: string;
  ai_primary_domain?: string; ai_primary_subcategory?: string; ai_confidence?: string; ai_uncoded?: unknown;
  review_sample?: ReviewSample | '';
};

/** Stable 32-bit FNV-1a hash, so the same row always lands in or out of the sample. */
const hash = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
};

const confOf = (c: unknown): string => String(c ?? '').trim().toLowerCase();

/** The AI's own answer, captured once; later edits never change these. */
export const withAiOriginal = <T extends SampleRow>(item: T): T => (
  item.ai_confidence !== undefined ? item : {
    ...item,
    ai_primary_domain: item.primary_domain ?? '',
    ai_primary_subcategory: item.primary_subcategory ?? '',
    ai_confidence: confOf(item.primary_confidence),
    ai_uncoded: toBool(item.uncoded),
  }
);

const aiFlagged = (item: SampleRow): boolean =>
  toBool(item.ai_uncoded) || !item.ai_primary_domain || !['medium', 'high'].includes(confOf(item.ai_confidence));

/**
 * Give every row a review_sample value, keeping any it already has (so a
 * resumed review keeps the same sample). Within each logic model
 * (organization + program), the medium rows with the lowest hash make up
 * SAMPLE_RATES.medium of them, rounded up; the same for high.
 */
export const assignSample = <T extends SampleRow>(items: T[]): T[] => {
  const groups = new Map<string, number[]>();
  items.forEach((item, i) => {
    if (item.review_sample || aiFlagged(item)) return;
    const key = `${item.organization ?? item.Organization ?? ''}\u0000${item.program ?? item.Program ?? ''}\u0000${confOf(item.ai_confidence)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(i);
  });
  const sampled = new Set<number>();
  for (const [key, idx] of groups) {
    const level = key.split('\u0000')[2] as 'medium' | 'high';
    const n = Math.ceil(idx.length * SAMPLE_RATES[level]);
    const rowKey = (i: number) => `${items[i].atomic_outcome_id ?? ''}|${items[i].row_id}|${items[i].atomic_outcome_index}|${items[i].outcome_text_atomic ?? ''}`;
    [...idx].sort((a, b) => hash(rowKey(a)) - hash(rowKey(b)) || a - b).slice(0, n).forEach(i => sampled.add(i));
  }
  return items.map((item, i) => {
    if (item.review_sample) return item;
    const review_sample: ReviewSample = aiFlagged(item) ? 'flagged' : sampled.has(i) ? 'sampled' : 'not_sampled';
    return { ...item, review_sample };
  });
};

/** Did the reviewer end up with a different code than the AI gave? */
export const isChanged = (item: SampleRow): boolean => {
  if (toBool(item.uncoded) !== toBool(item.ai_uncoded)) return true;
  if (toBool(item.uncoded)) return false;
  return (item.primary_domain ?? '') !== (item.ai_primary_domain ?? '')
    || (item.primary_subcategory ?? '') !== (item.ai_primary_subcategory ?? '');
};

export const reviewStatus = (item: SampleRow): ReviewStatus => {
  if (toBool(item.is_corrected)) return isChanged(item) ? 'changed' : 'confirmed';
  return item.review_sample === 'not_sampled' ? 'auto_accepted' : 'needs_check';
};

export interface SampleLevelStats { level: 'medium' | 'high'; sampled: number; checked: number; changed: number; notSampled: number; suggestWiden: boolean }

export const sampleStats = (items: SampleRow[]): SampleLevelStats[] =>
  (['medium', 'high'] as const).map(level => {
    const rows = items.filter(i => confOf(i.ai_confidence) === level && !aiFlagged(i));
    const inSample = rows.filter(i => i.review_sample === 'sampled');
    const checked = inSample.filter(i => toBool(i.is_corrected));
    const changed = checked.filter(isChanged).length;
    const notSampled = rows.filter(i => i.review_sample === 'not_sampled').length;
    return {
      level, sampled: inSample.length, checked: checked.length, changed, notSampled,
      suggestWiden: notSampled > 0 && checked.length >= WIDEN_MIN_CHECKED && changed / checked.length > WIDEN_CHANGE_RATE,
    };
  });

/** The reviewer agreed to check every row at this level: bring the rest into the queue. */
export const widenSample = <T extends SampleRow>(items: T[], level: 'medium' | 'high'): T[] =>
  items.map(i => (i.review_sample === 'not_sampled' && confOf(i.ai_confidence) === level ? { ...i, review_sample: 'all_checked' as ReviewSample } : i));
