import { describe, it, expect } from 'vitest';
import { applySourceType, csvHasSourceType, SOURCE_TYPES } from './sourceType.js';

describe('source type', () => {
  it('detects a source_type column in the header only', () => {
    expect(csvHasSourceType('row_id,outcome_text,source_type\n1,Read more,logic_model')).toBe(true);
    expect(csvHasSourceType('﻿"row_id","outcome_text","Source_Type"\n')).toBe(true);
    expect(csvHasSourceType('row_id,outcome_text\n1,source_type')).toBe(false);
    expect(csvHasSourceType('')).toBe(false);
  });

  it('fills rows without a source and keeps values already in the file', () => {
    const rows = [{ row_id: '1' }, { row_id: '2', source_type: 'logic_model' }, { row_id: '3', source_type: ' ' }];
    expect(applySourceType(rows, 'program_description').map(r => r.source_type)).toEqual(['program_description', 'logic_model', 'program_description']);
    expect(applySourceType(rows, undefined)).toBe(rows);
  });

  it('keeps the logic_model value LM-Extractor already exports', () => {
    expect(SOURCE_TYPES.map(s => s.value)).toContain('logic_model');
  });
});
