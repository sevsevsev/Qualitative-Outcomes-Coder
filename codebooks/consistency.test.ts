import { describe, it, expect } from 'vitest';
import { CODEBOOK_LIST, allDomainCodes, allSubcategoryCodes } from './index';

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

      it('has a non-empty version string', () => {
        expect(codebook.version).toMatch(/^\d+\.\d+\.\d+$/);
      });
    });
  });
});

describe('original codebook v1.1.0 additions', () => {
  const original = CODEBOOK_LIST.find(c => c.id === 'original')!;

  it('includes the new Academic Learning & Achievement domain with its subcategories', () => {
    const domain = original.domains.find(d => d.code === 'Domain 11. Academic Learning & Achievement');
    expect(domain).toBeDefined();
    expect(domain!.subcategories.map(s => s.code)).toEqual([
      '11.1 Literacy & Reading Skill',
      '11.2 Numeracy & Mathematical Skill',
      '11.3 General Content Knowledge & Conceptual Understanding',
      '11.4 English Language Proficiency & Multilingual Development',
      '11.5 Attendance, Chronic Absence & School Stability',
      '11.6 Credit Accumulation, On-Track Status & Graduation',
      '11.7 School Readiness & Early Learning',
    ]);
  });

  it('includes the new Family Strengthening & Basic Needs domain with its subcategories', () => {
    const domain = original.domains.find(d => d.code === 'Domain 12. Family Strengthening & Basic Needs');
    expect(domain).toBeDefined();
    expect(domain!.subcategories).toHaveLength(7);
  });

  it('includes the new risk-behavior-prevention subcategories under Domain 7', () => {
    const domain = original.domains.find(d => d.code.startsWith('Domain 7.'));
    const codes = domain!.subcategories.map(s => s.code);
    expect(codes).toContain('7.8 Justice Involvement, Diversion & Reentry');
  });

  it('includes the new postsecondary/employment subcategories under Domain 8', () => {
    const domain = original.domains.find(d => d.code.startsWith('Domain 8.'));
    const codes = domain!.subcategories.map(s => s.code);
    expect(codes).toContain('8.7 Postsecondary Enrollment, Persistence & Completion');
    expect(codes).toContain('8.8 Employment Placement, Retention & Earnings');
  });

  it('includes the output-metric subcategory under Domain 10', () => {
    const domain = original.domains.find(d => d.code.startsWith('Domain 10.'));
    const codes = domain!.subcategories.map(s => s.code);
    expect(codes).toContain('10.5 Program Participation, Retention & Reach (Output Metric)');
  });

  it('bumped the codebook version from 1.0.0', () => {
    expect(original.version).toBe('1.1.0');
  });
});
