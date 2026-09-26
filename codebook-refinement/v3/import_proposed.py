"""One-time import of the approved 3.0 proposal into codebook data.

Reads docs/codebook/proposed-codebook.md (approved by Severin, 2026-09-26) and
writes codebooks/youthOutcomesV3.data.ts. After this import the data file is
the single source of truth for codebook 3.x: edit it through CPs, not this
script. Re-running the script overwrites the data file, so only do that to
reproduce the original import.

    python3 codebook-refinement/v3/import_proposed.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'docs/codebook/proposed-codebook.md'
OUT = ROOT / 'codebooks/youthOutcomesV3.data.ts'

PARTS = {'Y': 'Young people', 'F': 'Families & other adult participants', 'A': 'Staff, organizations & systems'}

text = SRC.read_text()
body = text[text.index('## Part Y'):]

domains = []
dom = cat = code = None
lines = body.split('\n')
i = 0
while i < len(lines):
    line = lines[i]
    m = re.match(r'^### ([YFA]\d+) (.+)$', line)
    if m:
        # Intro paragraph is the first non-empty line after the heading.
        j = i + 1
        while not lines[j].strip():
            j += 1
        dom = {'id': m.group(1), 'part': m.group(1)[0], 'name': m.group(2).strip(),
               'description': lines[j].strip(), 'categories': []}
        k = j + 1
        while not lines[k].startswith('**Categories:**'):
            k += 1
        dom['categoryLine'] = re.sub(r'\s*·\s*\d+ codes?$', '', lines[k].replace('**Categories:**', '').strip())
        domains.append(dom)
        i = k + 1
        continue
    m = re.match(r'^#### ([YFA]\d+)-([A-Z])\. (.+)$', line)
    if m:
        cat = {'letter': m.group(2), 'name': m.group(3).strip(), 'codes': []}
        dom['categories'].append(cat)
        i += 1
        continue
    m = re.match(r'^##### ([YFA]\d+\.\d+) (.+)$', line)
    if m:
        code = {'id': m.group(1), 'name': m.group(2).strip()}
        cat['codes'].append(code)
        i += 1
        continue
    if code is not None:
        m = re.match(r'^\*Short label:\* (.+?) · \*Flag:\* \*\*(\w+)\*\* · \*Fidelity:\* (.+?) · \*2\.4\.0 source:\* (.+)$', line)
        if m:
            code['short'] = m.group(1)
            code['flag'] = m.group(2).lower()
            fid = m.group(3)
            fm = re.match(r'^(Adapted|Codebook-defined) \((FD-P\d+)\)$', fid)
            code['fidelity'] = fm.group(1).lower() if fm else 'framework'
            if fm:
                code['deviation'] = fm.group(2)
            code['from2x'] = m.group(4).strip()
        m = re.match(r'^- \*\*(Definition|Include|Exclude|Use instead|Typical example|Theoretical basis):\*\* (.+)$', line)
        if m:
            key = {'Definition': 'definition', 'Include': 'include', 'Exclude': 'exclude',
                   'Use instead': 'useInstead', 'Typical example': 'example', 'Theoretical basis': 'basis'}[m.group(1)]
            val = m.group(2).strip()
            if key == 'example':
                em = re.match(r'^"(.+)" \((?:gold ([SH]\d{3})|(2\.4\.0 codebook example))\)$', val)
                assert em, (code['id'], val)
                val = {'text': em.group(1), 'goldId': em.group(2)} if em.group(2) else {'text': em.group(1)}
            code[key] = val
    i += 1

ids = [c['id'] for d in domains for ct in d['categories'] for c in ct['codes']]
assert len(ids) == 98 and len(set(ids)) == 98, len(ids)
for d in domains:
    for ct in d['categories']:
        for c in ct['codes']:
            for k in ('short', 'flag', 'fidelity', 'from2x', 'definition', 'include', 'exclude', 'useInstead', 'example', 'basis'):
                assert k in c, (c['id'], k)

header = '''// codebooks/youthOutcomesV3.data.ts
//
// Codebook 3.x data: the single source of truth for the Youth Outcomes
// Codebook 3.x. codebooks/youthOutcomesV3.ts builds the prompt text, the
// schema enums and the explorer view from it, so nothing is written twice.
//
// First generated from docs/codebook/proposed-codebook.md (approved by
// Severin, 2026-09-26) by codebook-refinement/v3/import_proposed.py. Edit it
// directly from now on, through a CP (STANDARDS S4.1).
//
// `basis` keeps each citation with its verification status. Only the parts
// marked "(verified)" reach the prompt (CLAUDE.md: a citation needs evidence).

import type { V3Domain } from './youthOutcomesV3.types.js';

'''
OUT.write_text(header + 'export const V3_DOMAINS: V3Domain[] = ' + json.dumps(domains, indent=2, ensure_ascii=False) + ';\n')
print(f'wrote {OUT.relative_to(ROOT)}: {len(domains)} domains, {len(ids)} codes')
