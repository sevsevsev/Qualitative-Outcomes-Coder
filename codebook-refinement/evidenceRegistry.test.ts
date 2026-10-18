import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { getCodebook } from '../codebooks/index.js';
import { V3_DOMAINS } from '../codebooks/youthOutcomesV3.data.js';
import { parseCsvRecords } from '../scripts/codebookEvalScoring.js';

// The evidence registry: the research reference for reviewing whole logic models.
// Built by evidence-registry/build_registry.py; never edited by hand.
const DIR = 'codebook-refinement/evidence-registry';
const SPOT = 'codebook-refinement/spotlight';
const reg = JSON.parse(readFileSync(`${DIR}/evidence_registry.json`, 'utf8'));
const csv = (p: string) => parseCsvRecords(readFileSync(p, 'utf8'));
const CODE_IDS = new Set(V3_DOMAINS.flatMap(d => d.categories.flatMap(c => c.codes.map(code => code.id))));
const DOMAIN_IDS = new Set(V3_DOMAINS.map(d => d.id));

const verdicts = new Map<string, { verdict: string; excerpt: string; url: string }>();
for (const dir of [`${SPOT}/verification`, `${DIR}/verification`]) {
  for (const f of readdirSync(dir).filter(f => f.endsWith('_results.csv'))) {
    for (const r of csv(`${dir}/${f}`)) verdicts.set(r.claim_id, { verdict: r.verdict, excerpt: r.excerpt, url: r.fetched_url });
  }
}

describe('evidence registry (codebook-refinement/evidence-registry)', () => {
  it('is up to date with the files it is built from', () => {
    const links = csv(`${SPOT}/spotlight_relevance_links.csv`).map(r => r.link_id);
    const own = csv(`${DIR}/pathways.csv`).map(r => r.pathway_id);
    expect(reg.pathways.map((p: { id: string }) => p.id)).toEqual([...links, ...own]);
    expect(reg.programModels.map((m: { id: string }) => m.id)).toEqual(csv(`${DIR}/program_models.csv`).map(r => r.model_id));
  });

  it('holds only claims an independent verifier fetched and accepted', () => {
    for (const [id, c] of Object.entries(reg.claims) as [string, { verdict: string; excerpt: string; fetched_url: string }][]) {
      const v = verdicts.get(id);
      expect(v, id).toBeTruthy();
      expect(['SUPPORTED', 'PARTIAL'], id).toContain(v!.verdict);
      expect(c.excerpt, id).toBeTruthy();
      expect(c.fetched_url, id).toMatch(/https?:\/\//);
    }
  });

  it('keeps new excerpts to 40 words or fewer', () => {
    for (const f of readdirSync(`${DIR}/verification`).filter(f => f.endsWith('_results.csv'))) {
      for (const r of csv(`${DIR}/verification/${f}`)) {
        expect(r.claim_id, f).toMatch(/^E-\d+$/);
        expect(r.excerpt.split(/\s+/).filter(Boolean).length, r.claim_id).toBeLessThanOrEqual(40);
      }
    }
  });

  it('rests every tested program model and every credited pathway on a fully supported claim', () => {
    const supported = (ids: string[]) => ids.some(c => verdicts.get(c)?.verdict === 'SUPPORTED');
    for (const m of reg.programModels) {
      expect(m.description, m.id).toBeTruthy();
      expect(supported(m.claims), m.id).toBe(true);
    }
    for (const p of reg.pathways) {
      expect(['tested', 'research-associated', 'checked, not supported'], p.id).toContain(p.tier);
      for (const c of p.claims) expect(reg.claims[c], `${p.id} ${c}`).toBeTruthy();
      // A definitional SPOTlight link (the code names the indicator) rests on the SPOTlight wording.
      if (p.tier !== 'checked, not supported' && p.claims.length === 0) expect(p.source, p.id).toBe('SPOTlight relevance review');
      else if (p.tier !== 'checked, not supported') expect(supported(p.claims), p.id).toBe(true);
    }
  });

  it('names only real 3.x codes for outcomes', () => {
    for (const m of reg.programModels) for (const c of m.outcomes) expect(CODE_IDS.has(c), `${m.id} ${c}`).toBe(true);
    for (const p of reg.pathways.filter((p: { source: string }) => p.source === 'SPOTlight relevance review')) {
      for (const c of p.from) expect(CODE_IDS.has(c) || DOMAIN_IDS.has(c), `${p.id} ${c}`).toBe(true);
    }
  });

  it('stays out of the coding prompt', () => {
    expect(getCodebook('youth_outcomes_v3').definitionsText).not.toMatch(/evidence registry|program model/i);
  });
});
