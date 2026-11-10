import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { POG_COMPETENCIES, POG_SOURCE } from './portraitOfAGraduate.data.js';
import { portraitOfAGraduateCodebook, pogCode, pogDomainCode } from './portraitOfAGraduate.js';
import { buildBatchResponseSchema } from './geminiSchema.js';
import { parseCsvRecords } from '../scripts/codebookEvalScoring.js';

// Portrait of a Graduate codebook (CP-13-01).
const skillsCsv = parseCsvRecords(readFileSync('codebook-refinement/portrait-of-a-graduate/portrait_skills_11.2.csv', 'utf8'));
const framework = POG_COMPETENCIES.filter(c => !c.codebookDefined);
const out = POG_COMPETENCIES.find(c => c.codebookDefined)!;

const sumEnums = (node: unknown): number => {
  if (!node || typeof node !== 'object') return 0;
  const n = node as Record<string, unknown>;
  let total = Array.isArray(n.enum) ? n.enum.length : 0;
  for (const v of Object.values(n)) if (v && typeof v === 'object') total += sumEnums(v);
  return total;
};

describe('Portrait of a Graduate codebook', () => {
  it('copies every competency and skill name and statement verbatim from the 11.2 tab', () => {
    const fromCodebook = framework.flatMap(c => [
      [c.id, c.name, c.statement],
      ...c.skills.map(s => [s.id, s.name, s.statement]),
    ]);
    expect(fromCodebook).toEqual(skillsCsv.map(r => [r.id, r.name, r.statement]));
  });

  it('has the 14 competencies and 69 skills of version 11.2, plus the codebook-defined OUT block', () => {
    expect(framework).toHaveLength(14);
    expect(framework.flatMap(c => c.skills)).toHaveLength(69);
    expect(framework.filter(c => c.hasProgression).map(c => c.id)).toEqual(['POG.1', 'POG.2', 'POG.3', 'POG.4', 'POG.5', 'POG.6', 'POG.7', 'POG.8']);
    expect(out.id).toBe('OUT');
    expect(out.skills.map(s => s.id)).toEqual(['OUT.1', 'OUT.2', 'OUT.3', 'OUT.4', 'OUT.5', 'OUT.6']);
  });

  it('gives every code a definition, include, exclude and use-instead line', () => {
    for (const s of POG_COMPETENCIES.flatMap(c => c.skills)) {
      for (const f of [s.definition, s.include, s.exclude, s.useInstead]) expect(f, s.id).toBeTruthy();
    }
  });

  it('points every code named in the guidance at a real code', () => {
    const ids = new Set(POG_COMPETENCIES.flatMap(c => [c.id, ...c.skills.map(s => s.id)]));
    const text = portraitOfAGraduateCodebook.rulesText + portraitOfAGraduateCodebook.definitionsText;
    const named = [...text.matchAll(/\b(?:POG\.\d+(?:\.\d+)?|OUT\.\d+)\b/g)].map(m => m[0]);
    expect(named.filter(id => !ids.has(id))).toEqual([]);
  });

  it('builds domains and codes from the data, with skills under their own competency', () => {
    expect(portraitOfAGraduateCodebook.domains.map(d => d.code)).toEqual(POG_COMPETENCIES.map(pogDomainCode));
    for (const c of POG_COMPETENCIES) {
      const d = portraitOfAGraduateCodebook.domains.find(x => x.code === pogDomainCode(c))!;
      expect(d.subcategories.map(s => s.code)).toEqual(c.skills.map(pogCode));
      for (const s of c.skills) expect(s.id.startsWith(`${c.id}.`), s.id).toBe(true);
    }
  });

  it('never codes progression stages', () => {
    expect(portraitOfAGraduateCodebook.rulesText).toMatch(/do NOT judge or record how well or at what stage or grade/);
    expect(portraitOfAGraduateCodebook.definitionsText).not.toMatch(/Stage \d/);
  });

  it('marks the OUT block as outside the framework in the prompt', () => {
    expect(portraitOfAGraduateCodebook.definitionsText).toContain('codebook-defined, NOT part of the Portrait of a Graduate');
  });

  it('keeps the license and credit line', () => {
    expect(POG_SOURCE.license).toBe('CC BY-NC-SA 4.0');
    expect(POG_SOURCE.author).toMatch(/Building 21/);
  });

  it('stays well inside the Gemini enum budget', () => {
    expect(sumEnums(buildBatchResponseSchema(portraitOfAGraduateCodebook))).toBeLessThan(165);
  });
});
