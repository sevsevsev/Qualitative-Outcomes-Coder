import { describe, it, expect } from 'vitest';
import { CODEBOOK_LIST, allDomainCodes, allSubcategoryCodes, subjectAreaMismatch } from './index.js';

// Guards against the exact kind of drift that's easy to introduce by hand:
// codebooks/*.ts carries two representations of the same content --
// definitionsText (prose sent to the model) and the structured `domains`
// array (source of the enum constraints + review UI). A domain/subcategory
// added to one and not the other either leaves the model unable to explain
// an enum value it's constrained to return, or leaves prose describing a
// code the model can never actually select.
describe('codebook definitionsText / structured domains consistency', () => {
  CODEBOOK_LIST.forEach(codebook => {
    describe(codebook.label, () => {
      it('documents every structured domain code in definitionsText', () => {
        const missing = allDomainCodes(codebook).filter(code => !codebook.definitionsText.includes(code));
        expect(missing).toEqual([]);
      });

      if (codebook.capabilities.hasSubcategories) {
        it('documents every structured subcategory code in definitionsText', () => {
          const missing = allSubcategoryCodes(codebook).filter(code => !codebook.definitionsText.includes(code));
          expect(missing).toEqual([]);
        });
      }

      it('has no duplicate domain codes', () => {
        const codes = allDomainCodes(codebook);
        expect(new Set(codes).size).toBe(codes.length);
      });

      it('has no duplicate subcategory codes', () => {
        const codes = allSubcategoryCodes(codebook);
        expect(new Set(codes).size).toBe(codes.length);
      });

      it('pins subcategories only to Subject Area values the codebook offers', () => {
        const options = new Set(codebook.subjectAreaOptions ?? []);
        const unknown = codebook.domains
          .flatMap(d => d.subcategories)
          .flatMap(s => (s.subjectAreas ?? []).filter(v => !options.has(v)).map(v => `${s.code}: ${v}`));
        expect(unknown).toEqual([]);
      });

      it('has a non-empty version string', () => {
        expect(codebook.version).toMatch(/^\d+\.\d+\.\d+$/);
      });
    });
  });
});

describe('original codebook v1.1.0 additions', () => {
  const original = CODEBOOK_LIST.find(c => c.id === 'original')!;

  it('includes the new Academic Learning & Achievement domain with its subcategories', () => {
    const domain = original.domains.find(d => d.code === 'Domain 1. Academic Learning & Achievement');
    expect(domain).toBeDefined();
    expect(domain!.subcategories.map(s => s.code)).toEqual([
      '1.1 Literacy: Reading & Writing',
      '1.2 Numeracy & Mathematical Skill',
      '1.3 Knowledge & Skill in Other Academic Subjects',
      '1.4 English Language Proficiency & Multilingual Development',
      '1.5 Attendance, Chronic Absence & School Stability',
      '1.6 Grades, Credits, On-Track Status & Graduation',
      '1.7 School Readiness & Early Learning',
      '1.8 Science, Technology & Engineering',
      '1.9 Arts Learning & Performance',
    ]);
  });

  it('includes the new Family Strengthening & Basic Needs domain with its subcategories', () => {
    const domain = original.domains.find(d => d.code === 'Domain 12. Family Strengthening & Basic Needs');
    expect(domain).toBeDefined();
    expect(domain!.subcategories).toHaveLength(7);
  });

  it('includes the new risk-behavior-prevention subcategories under Domain 8', () => {
    const domain = original.domains.find(d => d.code.startsWith('Domain 8.'));
    const codes = domain!.subcategories.map(s => s.code);
    expect(codes).toContain('8.8 Justice Involvement, Diversion & Reentry');
  });

  it('includes the new postsecondary/employment subcategories under Domain 9', () => {
    const domain = original.domains.find(d => d.code.startsWith('Domain 9.'));
    const codes = domain!.subcategories.map(s => s.code);
    expect(codes).toContain('9.7 Postsecondary Enrollment, Persistence & Completion');
    expect(codes).toContain('9.8 Employment Placement, Retention & Earnings');
    expect(codes).toContain('9.9 Financial Capability');
  });

  it('includes the output-metric subcategory under Domain 11', () => {
    const domain = original.domains.find(d => d.code.startsWith('Domain 11.'));
    const codes = domain!.subcategories.map(s => s.code);
    expect(codes).toContain('11.5 Program Participation, Retention & Reach (Output Metric)');
  });

  it('bumped the codebook version to 2.2.0 for 9.9 Financial Capability (CP-01-05)', () => {
    expect(original.version).toBe('2.2.0');
  });

  it('adds 3.6 Social Capital & Networks to Domain 3', () => {
    const domain3 = original.domains.find(d => d.code.startsWith('Domain 3.'))!;
    expect(domain3.subcategories.map(s => s.code)).toContain('3.6 Social Capital & Networks');
    expect(original.definitionsText).toContain('3.6 Social Capital & Networks');
    expect(original.rulesText).toContain('SOCIAL / ECONOMIC MOBILITY');
  });
});

describe('original codebook v1.2.0 academic subjects', () => {
  const original = CODEBOOK_LIST.find(c => c.id === 'original')!;

  it('numbers Academic Learning & Achievement as Domain 1 and lists it first', () => {
    expect(original.domains[0].code).toBe('Domain 1. Academic Learning & Achievement');
    expect(original.definitionsText.trimStart().startsWith('Domain 1. Academic Learning & Achievement')).toBe(true);
  });

  it('flags a Subject Area that disagrees with a subject-pinned learning code', () => {
    expect(subjectAreaMismatch(original, '1.2 Numeracy & Mathematical Skill', 'Mathematics')).toBeNull();
    expect(subjectAreaMismatch(original, '1.2 Numeracy & Mathematical Skill', 'N/A / General')).toEqual(['Mathematics']);
    expect(subjectAreaMismatch(original, '1.8 Science, Technology & Engineering', 'Engineering & Robotics')).toBeNull();
    expect(subjectAreaMismatch(original, '1.9 Arts Learning & Performance', '')).toEqual(['Visual & Performing Arts']);
  });

  it('does not pin a subject on codes that apply to any subject', () => {
    expect(subjectAreaMismatch(original, '1.6 Grades, Credits, On-Track Status & Graduation', 'Mathematics')).toBeNull();
    expect(subjectAreaMismatch(original, '2.1 Joy & Emotional Wellness', 'N/A / General')).toBeNull();
  });
});
