import { describe, expect, it } from 'vitest';
import { CODEBOOK_LIST, CODEBOOK_REGISTRY } from '../codebooks/index.js';
import { splitCode } from './codebookExplorer.js';
import { AdminFeedback, codeNumber, feedbackToCsv, FEEDBACK_LIMITS, GENERAL_TARGET_LABEL, validateSubmission } from './feedback.js';

const original = CODEBOOK_REGISTRY.original;
const firstDomain = original.domains[0];
const firstSub = firstDomain.subcategories[0];

const base = {
  codebookId: 'original',
  targetType: 'code',
  targetCode: codeNumber(firstSub.code),
  kind: 'comment',
  body: 'The example for this code is a little narrow.',
};

describe('codeNumber', () => {
  // Feedback is keyed by the number the explorer shows, so the two parsers
  // must agree on every code in every codebook.
  it('matches the explorer for every domain and code', () => {
    for (const cb of CODEBOOK_LIST) {
      for (const d of cb.domains) {
        expect(codeNumber(d.code)).toBe(splitCode(d.code).number);
        for (const s of d.subcategories) expect(codeNumber(s.code)).toBe(splitCode(s.code).number);
      }
    }
  });
});

describe('validateSubmission', () => {
  it('accepts a code comment and takes the label and version from the codebook', () => {
    const r = validateSubmission({ ...base, targetLabel: 'Something else entirely' });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.value.targetLabel).toBe(firstSub.code);
      expect(r.value.codebookVersion).toBe(original.version);
      expect(r.value.name).toBeNull();
    }
  });

  it('accepts a domain note and a whole-codebook note', () => {
    const domain = validateSubmission({ ...base, targetType: 'domain', targetCode: codeNumber(firstDomain.code), kind: 'missing' });
    expect(domain.ok && domain.value.targetLabel).toBe(firstDomain.code);
    const general = validateSubmission({ ...base, targetType: 'general', targetCode: '' });
    expect(general.ok && general.value.targetLabel).toBe(GENERAL_TARGET_LABEL);
  });

  it('rejects unknown codebooks, codes, target types and kinds', () => {
    expect(validateSubmission({ ...base, codebookId: 'nope' }).ok).toBe(false);
    expect(validateSubmission({ ...base, targetCode: '99.9' }).ok).toBe(false);
    expect(validateSubmission({ ...base, targetType: 'domain', targetCode: firstSub.code }).ok).toBe(false);
    expect(validateSubmission({ ...base, targetType: 'general', targetCode: '1' }).ok).toBe(false);
    expect(validateSubmission({ ...base, targetType: 'row' }).ok).toBe(false);
    expect(validateSubmission({ ...base, kind: 'vote' }).ok).toBe(false);
    expect(validateSubmission(null).ok).toBe(false);
  });

  it('rejects empty, too long, and badly addressed feedback', () => {
    expect(validateSubmission({ ...base, body: '  ' }).ok).toBe(false);
    expect(validateSubmission({ ...base, body: 'x'.repeat(FEEDBACK_LIMITS.body + 1) }).ok).toBe(false);
    expect(validateSubmission({ ...base, email: 'not an email' }).ok).toBe(false);
  });

  it('flags the honeypot as a bot', () => {
    const r = validateSubmission({ ...base, website: 'http://spam.example' });
    expect(r.ok).toBe(false);
    expect('bot' in r && r.bot).toBe(true);
  });

  it('strips control characters and trims optional fields', () => {
    const r = validateSubmission({ ...base, body: 'Line one\u0007\n\n\n\nLine two', name: '  Ana  ', organization: '' });
    expect(r.ok && r.value.body).toBe('Line one\n\nLine two');
    expect(r.ok && r.value.name).toBe('Ana');
    expect(r.ok && r.value.organization).toBeNull();
  });
});

describe('feedbackToCsv', () => {
  const row: AdminFeedback = {
    id: 1, createdAt: '2026-09-24T12:00:00.000Z', codebookVersion: '2.0.1', targetType: 'code', targetCode: '1.3',
    targetLabel: '1.3 Other Academic Subjects', kind: 'missing', body: '=HYPERLINK("x")\nsecond, line',
    name: 'Ana "A"', organization: null, codebookId: 'original', email: 'ana@example.org', status: 'approved', reviewedAt: null,
  };

  it('quotes, guards formulas and leaves emails out unless asked', () => {
    const csv = feedbackToCsv([row]);
    expect(csv.split('\n')[0]).toBe('id,created_at,status,reviewed_at,codebook_id,codebook_version,target_type,target_code,target_label,kind,body,name,organization');
    expect(csv).toContain(`"'=HYPERLINK(""x"")\nsecond, line"`);
    expect(csv).toContain('"Ana ""A"""');
    expect(csv).not.toContain('ana@example.org');
    expect(feedbackToCsv([row], true)).toContain('ana@example.org');
  });
});
