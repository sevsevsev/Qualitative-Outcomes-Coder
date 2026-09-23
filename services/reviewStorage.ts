// services/reviewStorage.ts
//
// localStorage autosave for the in-progress review session. The review
// dashboard is the only place a user invests significant manual effort
// (correcting AI-assigned codes row by row), and until this existed that
// effort lived only in React state -- a refresh, crash, or accidental tab
// close silently discarded it. This persists a snapshot after every change
// so App.tsx can offer to resume it.

import { AtomicBatchItem, CodebookType } from '../types.js';

const STORAGE_KEY = 'qoc_review_session_v1';

export interface SavedReviewState {
  codebookType: CodebookType;
  items: AtomicBatchItem[];
  savedAt: number;
}

export const saveReviewState = (state: SavedReviewState): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable (private browsing, quota exceeded, etc.);
    // autosave is a convenience, not a guarantee, so fail silently.
  }
};

export const loadReviewState = (): SavedReviewState | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items) || parsed.items.length === 0) return null;
    return parsed as SavedReviewState;
  } catch {
    return null;
  }
};

export const clearReviewState = (): void => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore -- nothing meaningful to recover from here.
  }
};
