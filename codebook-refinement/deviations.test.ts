import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCodebook } from '../codebooks/index.js';
import { splitCode } from '../services/codebookExplorer.js';

// DEVIATIONS.md logs every code that departs from its domain's anchor framework
// (STANDARDS S1.6). These checks keep the log, the live codebook, the source
// registry and the 3.0 proposal in step, so a deviation can't be added in one
// place and forgotten in another.

const here = path.dirname(fileURLToPath(import.meta.url));
const log = fs.readFileSync(path.join(here, 'DEVIATIONS.md'), 'utf-8');
const registry = JSON.parse(fs.readFileSync(path.join(here, 'sources/original.sources.json'), 'utf-8'));
const proposed = fs.readFileSync(path.join(here, '../docs/codebook/proposed-codebook.md'), 'utf-8');
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

describe('the 3.0 proposal agrees with the log', () => {
  // "##### Y4.12 ..." heading, then "*Short label:* ... *Fidelity:* Adapted (FD-P09)".
  const fidelityOf = new Map<string, string>();
  let current = '';
  for (const line of proposed.split('\n')) {
    const h = line.match(/^##### (\S+) /);
    if (h) current = h[1];
    const f = line.match(/\*Fidelity:\* (.+?)(?: · \*|$)/);
    if (f && current) {
      fidelityOf.set(current, f[1]);
      current = '';
    }
  }

  it('every proposed code has a fidelity', () => {
    const headings = [...proposed.matchAll(/^##### (\S+) /gm)].map(m => m[1]);
    expect(headings.filter(c => !fidelityOf.has(c))).toEqual([]);
  });

  it('each planned entry is cited by its code, with the same fidelity', () => {
    for (const e of planned) {
      const label = e.fields.get('Fidelity') === 'adapted' ? 'Adapted' : 'Codebook-defined';
      expect(fidelityOf.get(e.code), e.id).toBe(`${label} (${e.id})`);
    }
  });

  it('a proposed code that is not Framework cites an entry that exists', () => {
    const ids = new Set(planned.map(e => e.id));
    for (const [code, value] of fidelityOf) {
      if (value === 'Framework') continue;
      const id = value.match(/\((FD-P\d+)\)$/)?.[1];
      expect(id && ids.has(id), `${code}: ${value}`).toBe(true);
    }
  });
});
