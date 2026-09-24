import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCodebook } from '../codebooks/index.js';
import { parseDefinitions, splitCode } from '../services/codebookExplorer.js';

// The same facts about a code live in more than one file: the prompt text in
// codebooks/original.ts, the source registry, and CONFUSIONS.md. Nothing but
// these tests keeps them saying the same thing (STANDARDS S1.3, S3.2). Every
// check reads code numbers from the data, never from this file, so a
// renumbering that updates all three files together still passes.

const here = path.dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(fs.readFileSync(path.join(here, 'sources/original.sources.json'), 'utf-8'));
const confusions = fs.readFileSync(path.join(here, 'CONFUSIONS.md'), 'utf-8');
const codebook = getCodebook('original');

const subcategories = codebook.domains.flatMap(d => d.subcategories.map(s => ({ ...s, ...splitCode(s.code) })));
const liveCodes = new Set(subcategories.map(s => s.number));
const liveDomains = new Set(codebook.domains.map(d => splitCode(d.code).number));
const titleOf = new Map(subcategories.map(s => [s.number, s.title]));

// "3.2.1" or "11.8", but not "3.2.x", "20 U.S.C. 7801(52)" pieces or years.
const CODE_REF = /(?<![\d.])\d{1,2}\.\d{1,2}(?:\.\d)?(?!\d|\.[\dx])/g;
const DOMAIN_REF = /\bDomain (\d{1,2})\b/g;

describe('citation lines match the source registry (STANDARDS S1)', () => {
  // Every "Source Framework:" / "Framework Basis:" line, with the code it belongs to.
  const lines: { code: string; number: string; isDomain: boolean; text: string }[] = [];
  for (const [code, block] of parseDefinitions(codebook)) {
    for (const f of block.fields) {
      if (!/^(source framework|framework basis)$/i.test(f.label)) continue;
      lines.push({ code, number: splitCode(code).number, isDomain: code.startsWith('Domain'), text: f.text });
    }
  }

  // Longest name first, so "SAMHSA Strategic Prevention Framework" is claimed
  // before the bare "SAMHSA".
  const names: { name: string; source: any }[] = registry.sources
    .flatMap((s: any) => (s.codebook_names ?? []).map((name: string) => ({ name, source: s })))
    .sort((a: any, b: any) => b.name.length - a.name.length);

  const findNames = (text: string) => {
    const spans: { start: number; end: number; source: any }[] = [];
    for (const { name, source } of names) {
      let at = text.indexOf(name);
      while (at !== -1) {
        const end = at + name.length;
        if (!spans.some(s => at < s.end && end > s.start)) spans.push({ start: at, end, source });
        at = text.indexOf(name, end);
      }
    }
    return spans;
  };

  // A support counts unless it waits on a code that doesn't exist yet. One a
  // verifier rejected counts only while a CP to fix it is open, so the known
  // problem stays visible in the registry instead of being hidden here.
  const backs = (source: any, line: (typeof lines)[number]) =>
    source.supports.some(
      (sup: any) =>
        !sup.proposed &&
        (!sup.unsupported || /^CP-\d{2}-\d{2}$/.test(sup.open_cp ?? '')) &&
        (line.isDomain ? sup.code.split('.')[0] === line.number : sup.code === line.number),
    );

  it('finds citation lines to check', () => {
    expect(lines.length).toBeGreaterThan(20);
  });

  it('only names sources the registry lists for that code', () => {
    const wrong: string[] = [];
    for (const line of lines) {
      for (const { source } of findNames(line.text)) {
        if (!backs(source, line)) wrong.push(`${line.code}: names ${source.id}, which has no support entry for ${line.number}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('names no framework the registry does not know', () => {
    // Split each line into its cited items at top-level semicolons. An item
    // that matches no registry name but looks like a proper name, an acronym
    // or a year is a framework the registry doesn't have.
    const unknown: string[] = [];
    for (const line of lines) {
      const spans = findNames(line.text);
      let depth = 0;
      let start = 0;
      const items: [number, number][] = [];
      [...line.text].forEach((ch, i) => {
        if (ch === '(') depth++;
        if (ch === ')') depth--;
        if (ch === ';' && depth === 0) { items.push([start, i]); start = i + 1; }
      });
      items.push([start, line.text.length]);
      for (const [a, b] of items) {
        const item = line.text.slice(a, b).trim();
        const named = spans.some(s => s.start >= a && s.end <= b);
        const looksLikeAName = /\b[A-Z][a-z]+\s+[A-Z][a-z]+|\b[A-Z]{2,}\b|\b(?:19|20)\d{2}\b/.test(item);
        if (!named && looksLikeAName) unknown.push(`${line.code}: "${item}"`);
      }
    }
    expect(unknown).toEqual([]);
  });

  it('uses each codebook_names entry somewhere in the codebook', () => {
    const all = lines.map(l => l.text).join('\n');
    const unused = names.filter(n => !all.includes(n.name)).map(n => `${n.source.id}: "${n.name}"`);
    expect(unused).toEqual([]);
  });
});

describe('hints match CONFUSIONS.md (STANDARDS S3.2)', () => {
  const hints = [
    ...codebook.domains.filter(d => d.hint).map(d => ({ code: d.code, number: splitCode(d.code).number, isDomain: true, hint: d.hint! })),
    ...subcategories.filter(s => s.hint).map(s => ({ code: s.code, number: s.number, isDomain: false, hint: s.hint! })),
  ];

  // Each CF entry, with the codes it names. Wildcards like "3.2.x" or
  // "Domain 4" don't count: a pair is covered only by an entry naming both codes.
  const entries = confusions.split(/^### /m).slice(1).map(block => {
    const id = block.slice(0, 6);
    const named = new Set(block.match(CODE_REF) ?? []);
    return { id, block, covers: (code: string) => named.has(code) };
  });

  // Pairs a hint tells apart that have no CF entry yet, keyed by code title so
  // the list survives renumbering. Don't add to it: write the CF entry
  // instead. Remove a pair once its entry exists (the test says which).
  const PAIRS_WITHOUT_CF = new Set([
    'Literacy: Reading & Writing :: Communication & active listening',
    'Science, Technology & Engineering :: Positive Identity',
    'Creative Expression & Making :: Literacy: Reading & Writing',
    'Cultural Identity & Affirmation :: Respect for diversity & inclusion',
    'Emotion regulation & impulse control :: Stress management & coping skills',
    'Stress management & coping skills :: Emotion regulation & impulse control',
    'Goal-setting & follow-through :: Organization, persistence & self-discipline',
    'Organization, persistence & self-discipline :: Academic Perseverance (Grit/Tenacity)',
    'Organization, persistence & self-discipline :: Goal-setting & follow-through',
    'Organization, persistence & self-discipline :: Learning Strategies (Study Skills)',
    'Empathy & perspective-taking :: Communication & active listening',
    'Communication & active listening :: Empathy & perspective-taking',
    'Empowerment & Safety :: Youth Voice & Leadership',
    'Positive Identity :: Understanding self & identity',
    'Academic Behaviors (Engagement) :: Attendance, Chronic Absence & School Stability',
  ]);

  it('refers only to codes and domains that exist', () => {
    const bad: string[] = [];
    for (const h of hints) {
      for (const ref of h.hint.match(CODE_REF) ?? []) if (!liveCodes.has(ref)) bad.push(`${h.code} -> ${ref}`);
      for (const m of h.hint.matchAll(DOMAIN_REF)) if (!liveDomains.has(m[1])) bad.push(`${h.code} -> Domain ${m[1]}`);
    }
    expect(bad).toEqual([]);
  });

  it('has a CF entry for every pair of codes a hint tells apart', () => {
    const missing = new Set<string>();
    for (const h of hints.filter(h => !h.isDomain)) {
      for (const ref of new Set(h.hint.match(CODE_REF) ?? [])) {
        if (ref === h.number || !liveCodes.has(ref)) continue;
        if (!entries.some(e => e.covers(h.number) && e.covers(ref))) {
          missing.add(`${titleOf.get(h.number)} :: ${titleOf.get(ref)}`);
        }
      }
    }
    expect([...missing].filter(p => !PAIRS_WITHOUT_CF.has(p)), 'new pairs without a CF entry').toEqual([]);
    expect([...PAIRS_WITHOUT_CF].filter(p => !missing.has(p)), 'pairs now covered: remove from PAIRS_WITHOUT_CF').toEqual([]);
  });

  it('lists only live codes on each **Codes:** line, unless marked proposed', () => {
    const bad: string[] = [];
    for (const e of entries) {
      const line = e.block.match(/^\*\*Codes:\*\*(.*)$/m)?.[1];
      if (!line) continue;
      for (const part of line.split('·')) {
        if (/proposed/i.test(part)) continue;
        for (const ref of part.match(CODE_REF) ?? []) if (!liveCodes.has(ref)) bad.push(`${e.id} -> ${ref}`);
        for (const m of part.matchAll(DOMAIN_REF)) if (!liveDomains.has(m[1])) bad.push(`${e.id} -> Domain ${m[1]}`);
      }
    }
    expect(bad).toEqual([]);
  });
});
