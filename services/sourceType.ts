// Where a batch's outcome statements came from. Exported as the `source_type`
// column so the dashboard can tell sources apart (and avoid double counting a
// program that has both). LM-Extractor's coding export already carries the
// column; the upload screen asks for it only when a file does not.

export const SOURCE_TYPES = [
  { value: 'logic_model', label: 'Logic model' },
  { value: 'program_description', label: 'Program description or scope of work' },
  { value: 'other_outcome_text', label: 'Other outcome statements' },
] as const;

export type SourceType = (typeof SOURCE_TYPES)[number]['value'];

/** True when the CSV's header row has a `source_type` column. */
export const csvHasSourceType = (csvText: string): boolean => {
  const header = csvText.replace(/^﻿/, '').split(/\r?\n/, 1)[0] ?? '';
  return header.split(/[,;\t]/).some(h => h.trim().replace(/^"|"$/g, '').trim().toLowerCase() === 'source_type');
};

/** Fills `source_type` on rows that have none. A value already in the file is kept. */
export const applySourceType = <T extends Record<string, any>>(rows: T[], sourceType?: string): T[] => {
  if (!sourceType) return rows;
  return rows.map(r => (String(r.source_type ?? '').trim() ? r : { ...r, source_type: sourceType }));
};
