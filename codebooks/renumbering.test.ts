import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCodebook, allDomainCodes, allSubcategoryCodes } from './index.js';
import { V1_2_0_DOMAIN_LABELS, V1_2_0_SUBCATEGORY_LABELS, V1_2_0_CODE_NUMBERS } from './originalV1Numbering.js';
import { normalizeImportedCoding, upgradeLegacyLabel, isVersionBefore } from '../services/reviewNormalization.js';
import { parseCsvRecords } from '../scripts/codebookEvalScoring.js';

// CP-04-08 renumbered the original codebook's domains to match their listed
// order (v1.2.0 -> v2.0.0). These tests prove the old -> new map loses,
// duplicates and invents nothing, and that old exports re-import through it.

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, '../codebook-refinement/renumbering');
const map = parseCsvRecords(fs.readFileSync(path.join(dir, 'v1.2.0-to-v2.0.0.csv'), 'utf-8'));
const oldCodebook: { version: string; domains: { code: string; subs: string[] }[] } =
  JSON.parse(fs.readFileSync(path.join(dir, 'v1.2.0-codebook-dump.json'), 'utf-8'));
const original = getCodebook('original');
const rows = (kind: string) => map.filter(r => r.kind === kind);
const number = (label: string) => label.replace(/^Domain /, '').split(/\.? /)[0];
const text = (label: string) => label.replace(/^(Domain )?\d+(\.\d+)*\.? /, '');
// Codes added after 2.0.0 have no v1.2.0 code, so the map never lands on them.
const ADDED_SINCE_2_0_0 = new Set(['3.6 Social Capital & Networks']);
const codesAt2_0_0 = allSubcategoryCodes(original).filter(c => !ADDED_SINCE_2_0_0.has(c));

describe('v1.2.0 -> v2.0.0 code map', () => {
  it('covers every v1.2.0 domain and subcategory exactly once', () => {
    expect(oldCodebook.version).toBe('1.2.0');
    expect(rows('domain').map(r => r.old_label).sort()).toEqual(oldCodebook.domains.map(d => d.code).sort());
    expect(rows('subcategory').map(r => r.old_label).sort()).toEqual(oldCodebook.domains.flatMap(d => d.subs).sort());
  });

  it('lands on every current domain and subcategory exactly once', () => {
    expect(rows('domain').map(r => r.new_label).sort()).toEqual([...allDomainCodes(original)].sort());
    expect(rows('subcategory').map(r => r.new_label).sort()).toEqual([...codesAt2_0_0].sort());
  });

  it('maps no two old codes to one new code, including SEL headers and proposed codes', () => {
    for (const kind of ['domain', 'subcategory']) {
      const olds = rows(kind).map(r => r.old_code);
      const news = rows(kind).map(r => r.new_code);
      expect(new Set(olds).size).toBe(olds.length);
      expect(new Set(news).size).toBe(news.length);
    }
    const codes = map.filter(r => r.kind !== 'domain');
    expect(new Set(codes.map(r => r.new_code)).size).toBe(codes.length);
  });

  it('changes only the number, never the text of a label', () => {
    for (const r of map.filter(r => r.old_label && r.new_label)) {
      expect(text(r.new_label), r.old_label).toBe(text(r.old_label));
      expect(number(r.old_label)).toBe(r.old_code);
      expect(number(r.new_label)).toBe(r.new_code);
    }
  });

  it('numbers each domain by its place in the list and keeps each code under its domain', () => {
    original.domains.forEach((d, i) => expect(number(d.code)).toBe(String(i + 1)));
    const domainOf = new Map(rows('domain').map(r => [r.old_code, r.new_code]));
    for (const r of map.filter(r => r.kind !== 'domain')) {
      const [oldDomain, ...rest] = r.old_code.split('.');
      expect(r.new_code, r.old_code).toBe([domainOf.get(oldDomain), ...rest].join('.'));
    }
  });

  it('matches the generated codebooks/originalV1Numbering.ts', () => {
    expect(V1_2_0_DOMAIN_LABELS.map(p => [...p])).toEqual(rows('domain').map(r => [r.old_label, r.new_label]));
    expect(V1_2_0_SUBCATEGORY_LABELS.map(p => [...p])).toEqual(rows('subcategory').map(r => [r.old_label, r.new_label]));
    expect(V1_2_0_CODE_NUMBERS.get('11')).toBe('1');
    expect(V1_2_0_CODE_NUMBERS.get('11.3')).toBe('1.3');
    expect(V1_2_0_CODE_NUMBERS.get('3.2.1')).toBe('4.2.1');
  });

  it('never maps a current label to a different one (re-import is idempotent)', () => {
    const current = new Set([...allDomainCodes(original), ...allSubcategoryCodes(original)]);
    for (const m of [...(original.legacyDomains ?? []), ...(original.legacySubcategories ?? [])]) {
      if (current.has(m.from)) expect(m.to, m.from).toBe(m.from);
      expect(current.has(m.to), m.to).toBe(true);
    }
  });
});

describe('re-importing exports coded before v2.0.0', () => {
  const reimport = (domain: string, sub: string, version = 'original@1.2.0') =>
    normalizeImportedCoding(
      { primary_domain: domain, primary_subcategory: sub, primary_confidence: 'high', uncoded: false, codebook_version: version },
      original,
      'original'
    );

  it('maps every old label pair to its new labels', () => {
    for (const d of oldCodebook.domains) {
      const newDomain = rows('domain').find(r => r.old_label === d.code)!.new_label;
      for (const s of d.subs) {
        const newSub = rows('subcategory').find(r => r.old_label === s)!.new_label;
        expect(reimport(d.code, s)).toMatchObject({ primary_domain: newDomain, primary_subcategory: newSub });
        // Recognized from the label text alone, even with no version stamp.
        expect(reimport(d.code, s, '')).toMatchObject({ primary_domain: newDomain, primary_subcategory: newSub });
      }
    }
  });

  it('leaves current labels alone, even under an old version stamp', () => {
    for (const d of original.domains) {
      for (const s of d.subcategories) {
        expect(reimport(d.code, s.code)).toMatchObject({ primary_domain: d.code, primary_subcategory: s.code });
      }
    }
  });

  it('translates bare old numbers only when the row is stamped with an old version', () => {
    expect(reimport('Domain 11', '11.3')).toMatchObject({
      primary_domain: 'Domain 1. Academic Learning & Achievement',
      primary_subcategory: '1.3 Knowledge & Skill in Other Academic Subjects',
    });
    expect(reimport('Domain 1', '1.1', 'original@2.0.0')).toMatchObject({
      primary_domain: 'Domain 1. Academic Learning & Achievement',
      primary_subcategory: '1.1 Literacy: Reading & Writing',
    });
    expect(reimport('Domain 1. Joy, Interest & Motivation in Learning', '1.1')).toMatchObject({
      primary_domain: 'Domain 2. Joy, Interest & Motivation in Learning',
      primary_subcategory: '2.1 Joy & Emotional Wellness',
    });
  });

  it('leaves a changed domain number blank for review when the row has no version stamp', () => {
    expect(reimport('Domain 11', '11.3', '').primary_domain).toBe('');
    expect(reimport('Domain 11. Academic Learning and Achievement', '11.3', '').primary_domain).toBe('');
    expect(reimport('Domain 3. Social and Emotional Learning', '', '').primary_domain).toBe('');
    // Domain 12 kept its number, so there is nothing to guess.
    expect(reimport('Domain 12', '12.7', '')).toMatchObject({
      primary_domain: 'Domain 12. Family Strengthening & Basic Needs',
      primary_subcategory: '12.7 Housing Stability',
    });
  });

  it('matches a domain by its name before its number', () => {
    expect(reimport('1. Joy, Interest & Motivation in Learning', '', '').primary_domain)
      .toBe('Domain 2. Joy, Interest & Motivation in Learning');
    expect(reimport('Domain 3 Social & Emotional Learning (CASEL-aligned)', '', '').primary_domain)
      .toBe('Domain 4. Social & Emotional Learning (CASEL-aligned)');
  });

  it('upgrades old secondary labels and leaves anything else as it was', () => {
    expect(upgradeLegacyLabel('Domain 11. Academic Learning & Achievement', original, 'domain'))
      .toBe('Domain 1. Academic Learning & Achievement');
    expect(upgradeLegacyLabel('3.2.1 Emotion regulation & impulse control', original, 'subcategory'))
      .toBe('4.2.1 Emotion regulation & impulse control');
    expect(upgradeLegacyLabel('4.2.1 Emotion regulation & impulse control', original, 'subcategory'))
      .toBe('4.2.1 Emotion regulation & impulse control');
    // Bare old numbers only on rows stamped before 2.0.0.
    expect(upgradeLegacyLabel('11.3', original, 'subcategory', 'original@1.2.0')).toBe('1.3');
    expect(upgradeLegacyLabel('3.2.1 Emotion regulation', original, 'subcategory', 'original@1.2.0')).toBe('4.2.1 Emotion regulation');
    expect(upgradeLegacyLabel('Domain 11', original, 'domain', 'original@1.2.0')).toBe('Domain 1');
    expect(upgradeLegacyLabel('11.3', original, 'subcategory', 'original@2.0.0')).toBe('11.3');
    expect(upgradeLegacyLabel('11.3', original, 'subcategory')).toBe('11.3');
    expect(upgradeLegacyLabel('2.1 Joy & Emotional Wellness', original, 'subcategory', 'original@1.2.0')).toBe('2.1 Joy & Emotional Wellness');
    expect(upgradeLegacyLabel('', original, 'domain')).toBe('');
    expect(upgradeLegacyLabel(undefined, original, 'domain')).toBeUndefined();
  });

  it('compares version stamps numerically', () => {
    expect(isVersionBefore('original@1.2.0', '2.0.0')).toBe(true);
    expect(isVersionBefore('original@1.10.0', '2.0.0')).toBe(true);
    expect(isVersionBefore('original@2.0.0', '2.0.0')).toBe(false);
    expect(isVersionBefore('original@10.0.0', '2.0.0')).toBe(false);
    expect(isVersionBefore('', '2.0.0')).toBe(false);
  });
});
