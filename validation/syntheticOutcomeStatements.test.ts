import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseCSV } from '../services/geminiService.js';

// Guards the validation fixture itself: it's meant to be uploaded as-is to
// the running app (via the CSV upload form) to spot-check the v1.1.0
// codebook additions against realistic statements the codebook has never
// seen coded live. If this file stops parsing cleanly, the fixture is
// broken and that live check can't happen.
describe('synthetic-outcome-statements.csv validation fixture', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const csvPath = path.join(here, 'synthetic-outcome-statements.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const rows = parseCSV(csvContent);

  it('parses via the app\'s own CSV parser with the expected row count', () => {
    expect(rows).toHaveLength(94);
  });

  it('every row has non-empty outcome_text', () => {
    rows.forEach(row => {
      expect(typeof row.outcome_text).toBe('string');
      expect(row.outcome_text.trim().length).toBeGreaterThan(0);
    });
  });

  it('spans a wide range of program-type groups', () => {
    const groups = new Set(rows.map(r => r.group));
    expect(groups.size).toBeGreaterThanOrEqual(15);
  });
});
