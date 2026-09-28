// services/reviewState.ts
//
// Pure helpers behind the review dashboard, kept out of the component so they
// can be unit tested: which rows still need a person, how far the review has
// got, what the export file is called, and which edits count as checking a row.

import { AtomicBatchItem } from '../types.js';

type ReviewRow = Pick<AtomicBatchItem, 'is_corrected' | 'uncoded' | 'primary_domain' | 'primary_confidence'>;

/** CSV and JSON can carry booleans as strings; "false" must not read as true. */
export const toBool = (value: unknown): boolean =>
  value === true || (typeof value === 'string' && value.trim().toLowerCase() === 'true');

/**
 * A row is flagged for a person when it hasn't been checked yet and the model
 * left it uncoded, gave no domain, or had low or no confidence. Medium and high
 * rows are not flagged; they still count as unchecked in reviewProgress.
 */
export const needsReview = (item: ReviewRow): boolean => {
  if (toBool(item.is_corrected)) return false;
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
