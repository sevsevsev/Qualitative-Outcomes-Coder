import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { getCodebook } from '../codebooks/index.js';
import { V3_DOMAINS } from '../codebooks/youthOutcomesV3.data.js';
import { parseCsvRecords } from '../scripts/codebookEvalScoring.js';
import {
  codeIdOf,
  linksForCode,
  linksForIndicator,
  possibleIndicatorsForCode,
  possibleSpotlightLinksCell,
} from './spotlightLinks.js';
import { getSpotlightLinks } from './spotlightLinksData.js';

const DIR = 'codebook-refinement/spotlight';
const data = getSpotlightLinks('youth_outcomes_v3')!;
const CODE_IDS = new Set(V3_DOMAINS.flatMap(d => d.categories.flatMap(c => c.codes.map(code => code.id))));
const DOMAIN_IDS = new Set(V3_DOMAINS.map(d => d.id));

describe('SPOTlight link data (codebook-refinement/spotlight)', () => {
  it('lists the 13 indicators of the 2024-25 District SPOTlight', () => {
    expect(data.indicators.map(i => i.id)).toEqual(Array.from({ length: 13 }, (_, i) => `S${i + 1}`));
    for (const i of data.indicators) expect(i.name && i.spotlightWording && i.value2024_25, i.id).toBeTruthy();
  });

  it('matches the recommendations in the evidence table it is built from', () => {
    const rows = parseCsvRecords(readFileSync(`${DIR}/spotlight_relevance_links.csv`, 'utf8'));
    const recommended = rows.filter(r => r.final_recommendation === 'recommend-with-conditions').map(r => r.link_id);
    expect(data.links.map(l => l.id)).toEqual(recommended);
    expect(data.links.length + data.notRecommended.length).toBe(rows.length);
  });

  it('names only real 3.x codes and known indicators', () => {
    const indicatorIds = new Set(data.indicators.map(i => i.id));
    for (const l of data.links) {
      for (const c of l.codes) expect(CODE_IDS.has(c), `${l.id} ${c}`).toBe(true);
      for (const i of l.indicators) expect(indicatorIds.has(i), `${l.id} ${i}`).toBe(true);
    }
    for (const l of data.notRecommended) {
      for (const c of l.codes) expect(CODE_IDS.has(c) || DOMAIN_IDS.has(c), `${l.id} ${c}`).toBe(true);
      for (const i of l.indicators) expect(indicatorIds.has(i), `${l.id} ${i}`).toBe(true);
    }
  });

  it('gives every recommended link a model to match, studies and checked claims', () => {
    const verdicts = new Map<string, string>();
    for (const f of readdirSync(`${DIR}/verification`).filter(f => f.endsWith('_results.csv'))) {
      for (const r of parseCsvRecords(readFileSync(`${DIR}/verification/${f}`, 'utf8'))) verdicts.set(r.claim_id, r.verdict);
    }
    for (const l of data.links) {
      expect(l.modelMatch, l.id).toBeTruthy();
      expect(l.pathway, l.id).toBeTruthy();
      expect(l.evidence, l.id).not.toBe('thin');
      expect(l.studies.length, l.id).toBeGreaterThan(0);
      expect(l.links.length, l.id).toBeGreaterThan(0);
      for (const link of l.links) expect(link.url, l.id).toMatch(/^https?:\/\//);
      expect(l.claims.length, l.id).toBeGreaterThan(0);
      // Every claim was fetched by an independent verifier, and at least one fully supports the link.
      for (const c of l.claims) expect(verdicts.has(c), `${l.id} ${c}`).toBe(true);
      expect(l.claims.some(c => verdicts.get(c) === 'SUPPORTED'), l.id).toBe(true);
    }
  });

  it('names other rows in plain words, never by link id', () => {
    for (const l of [...data.links, ...data.notRecommended]) {
      const { id: _id, claims: _claims, ...shown } = l as typeof l & { claims?: string[] };
      expect(JSON.stringify(shown), l.id).not.toMatch(/\bL-\d+/);
    }
  });

  it('stays out of the coding prompt', () => {
    expect(getCodebook('youth_outcomes_v3').definitionsText).not.toMatch(/SPOTlight/i);
  });
});

describe('SPOTlight link helpers', () => {
  it('reads the code id from a coded value', () => {
    expect(codeIdOf('Y4.2 Emotion Regulation')).toBe('Y4.2');
    expect(codeIdOf('Y1.13 Attendance')).toBe('Y1.13');
    expect(codeIdOf('none')).toBeUndefined();
    expect(codeIdOf('2.1 Joy & Emotional Wellness')).toBeUndefined();
    expect(codeIdOf(undefined)).toBeUndefined();
  });

  it('finds the links and indicators for a code', () => {
    expect(linksForCode(data, 'Y1.1').map(l => l.id)).toEqual(['L-01']);
    expect(possibleIndicatorsForCode(data, 'Y1.13').map(i => i.id)).toEqual(['S1', 'S4', 'S6', 'S8']);
    expect(possibleIndicatorsForCode(data, 'Y5.4')).toEqual([]);
    expect(linksForIndicator(data, 'S9')).toEqual([]);
    expect(linksForIndicator(data, 'S1').map(l => l.id)).toEqual(['L-17', 'L-27', 'L-28', 'L-36']);
  });

  it('writes the export cell from indicator names', () => {
    expect(possibleSpotlightLinksCell(data, 'Y1.3 Mathematics')).toBe('Math test, grade 3; Math test, grades 3 to 8; Keystone Algebra I exam');
    expect(possibleSpotlightLinksCell(data, 'Y5.4 Self-Worth')).toBe('');
    expect(possibleSpotlightLinksCell(data, 'none')).toBe('');
    expect(possibleSpotlightLinksCell(undefined, 'Y1.3 Mathematics')).toBe('');
  });
});

describe('SPOTlight links stay off the public explorer site', () => {
  it.each(['components/ExplorerSite.tsx', 'components/CodebookExplorer.tsx', 'components/IndicatorLinks.tsx'])(
    '%s does not import the link data',
    file => {
      // The data reaches the explorer only as a prop from the internal app (App.tsx).
      expect(readFileSync(file, 'utf8')).not.toMatch(/from ['"][^'"]*spotlightLinksData/);
    },
  );
});
