import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCodebook } from '../codebooks/index.js';
import { splitCode } from '../services/codebookExplorer.js';
import { allV3Codes } from '../codebooks/youthOutcomesV3.js';

// DEVIATIONS.md logs every code that departs from its domain's anchor framework
// (STANDARDS S1.6). These checks keep the log, the live codebook, the source
// registries and codebook 3.x in step, so a deviation can't be added in one
// place and forgotten in another.

const here = path.dirname(fileURLToPath(import.meta.url));
const log = fs.readFileSync(path.join(here, 'DEVIATIONS.md'), 'utf-8');
const registry = JSON.parse(fs.readFileSync(path.join(here, 'sources/original.sources.json'), 'utf-8'));
const codebook = getCodebook('original');
const liveCodes = new Set(codebook.domains.flatMap(d => d.subcategories.map(s => splitCode(s.code).number)));

const CASES = ['observability', 'sector-widening', 'merged-components', 'codebook-defined'];
const FIDELITY = ['adapted', 'codebook-defined'];

type Entry = { id: string; code: string; fields: Map<string, string> };
const entries: Entry[] = log.split(/^### /m).slice(1).map(block => {
  const [head, ...rest] = block.split('\n');
  const m = head.match(/^(FD-P?\d+) · (\S+)$/);
  const fields = new Map<string, string>();
  for (const f of rest.join('\n').matchAll(/^- \*\*([^*]+):\*\* (.+)$/gm)) fields.set(f[1], f[2]);
  return { id: m?.[1] ?? head, code: m?.[2] ?? '', fields };
});
const live = entries.filter(e => /^FD-\d+$/.test(e.id));
const planned = entries.filter(e => /^FD-P\d+$/.test(e.id));

describe('framework deviations log (STANDARDS S1.6)', () => {
  it('every entry has a well-formed id and a unique one', () => {
    for (const e of entries) expect(e.id, e.id).toMatch(/^FD-P?\d+$/);
    expect(new Set(entries.map(e => e.id)).size).toBe(entries.length);
  });

  it('every entry names an allowed case and fidelity, and says where it was decided', () => {
    for (const e of entries) {
      expect(CASES, `${e.id} case`).toContain(e.fields.get('Case'));
      expect(FIDELITY, `${e.id} fidelity`).toContain(e.fields.get('Fidelity'));
      for (const f of ['Anchor', 'Departs', 'Evidence', 'Decided in', 'Revisit']) {
        expect(e.fields.get(f), `${e.id} ${f}`).toBeTruthy();
      }
    }
  });

  it('live entries name live codes', () => {
    for (const e of live) expect(liveCodes.has(e.code), `${e.id} -> ${e.code}`).toBe(true);
  });

  it('every registry extension has an open live entry', () => {
    const open = new Set(live.filter(e => e.fields.get('Status') === 'open').map(e => e.code));
    const missing = registry.codebook_extensions.map((x: any) => x.code).filter((c: string) => !open.has(c));
    expect(missing).toEqual([]);
  });
});

describe('codebook 3.x agrees with the log', () => {
  const codes = allV3Codes();
  const byCode = new Map(codes.map(c => [c.id, c]));
  const open = planned.filter(e => e.fields.get('Status') === 'open');

  it('every planned entry has a status and names a 3.x code', () => {
    for (const e of planned) {
      expect(e.fields.get('Status'), e.id).toMatch(/^(open|closed \(.+\))$/);
      expect(byCode.has(e.code), `${e.id} -> ${e.code}`).toBe(true);
    }
  });

  it('each open entry is cited by its code, with the same fidelity', () => {
    for (const e of open) {
      const c = byCode.get(e.code)!;
      expect(c.deviation, e.id).toBe(e.id);
      expect(c.fidelity, e.id).toBe(e.fields.get('Fidelity'));
    }
  });

  it('a code that is not Framework cites an open entry, and a Framework code cites none', () => {
    const ids = new Set(open.map(e => e.id));
    for (const c of codes) {
      if (c.fidelity === 'framework') expect(c.deviation, c.id).toBeUndefined();
      else expect(c.deviation && ids.has(c.deviation), `${c.id}: ${c.deviation}`).toBe(true);
    }
  });

  it('each code is backed by a registry source or listed as an extension, and Framework codes are backed', () => {
    // Codebook-defined codes, and adapted codes whose anchor is only partial, are
    // exactly the 3.x registry's codebook_extensions.
    const reg = JSON.parse(fs.readFileSync(path.join(here, 'sources/youth_outcomes_v3.sources.json'), 'utf-8'));
    const supported = new Set(reg.sources.flatMap((s: any) => s.supports.map((x: any) => x.code)));
    const extensions = new Set(reg.codebook_extensions.map((x: any) => x.code));
    for (const c of codes) {
      expect(supported.has(c.id) !== extensions.has(c.id), c.id).toBe(true);
      if (c.fidelity === 'framework') expect(supported.has(c.id), c.id).toBe(true);
    }
  });
});
