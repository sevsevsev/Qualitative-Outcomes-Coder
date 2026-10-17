"""Set the "(located" tags in each code's `basis` from the source registry (CP-12-25, 3.1.5).

A `basis` note marks each source "verified" (a verifier read it and recorded an excerpt) or
"located" (found, not yet read). The registry
(codebook-refinement/sources/youth_outcomes_v3.sources.json) is the record of which it is, so
this script sets the tag from the registry instead of by hand. For each row of TAGS it:

1. finds the source phrase followed by "(located" in that code's `basis`; a row whose tag a
   per-domain CP has already rewritten (no "(located" after the phrase) is skipped;
2. if the registry status of the row's source is `verified`, replaces only the word "located"
   with "verified", keeping any text after it inside the parentheses;
3. leaves the tag alone if the source is still `located`;
4. skips the codes in WAIT, whose `basis` strings an open PR or a held CP part still edits.

It prints every change and writes the data file only with --write. It touches nothing else.
codebooks/youthOutcomesV3.test.ts holds the matching check and the same WAIT set.

    python3 codebook-refinement/v3/refresh_basis_status.py [--write]
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / 'codebooks/youthOutcomesV3.data.ts'
REGISTRY = ROOT / 'codebook-refinement/sources/youth_outcomes_v3.sources.json'

# (code, source phrase as it appears right before the tag, registry source id); CP-12-25's 20 rows.
TAGS = [
    ('Y1.1', 'National Reading Panel (2000)', 'national-reading-panel-2000'),
    ('Y1.7', 'Key Cognitive Strategies', 'conley-four-keys'),
    ('Y1.8', 'Head Start ELOF (2015)', 'head-start-elof'),
    ('Y1.13', 'McKinney-Vento, 42 U.S.C. 11432', 'mckinney-vento'),
    ('Y1.15', 'Allensworth & Easton (2005)', 'allensworth-easton-2005'),
    ('Y2.6', 'Search Institute 40 Developmental Assets, Constructive Use of Time', 'search-40-assets'),
    ('Y5.4', 'Self-esteem', 'search-40-assets'),
    ('Y5.5', 'Sense of purpose', 'search-40-assets'),
    ('Y5.6', 'Personal Power', 'search-40-assets'),
    ('Y6.1', 'Positive Values', 'search-40-assets'),
    ('Y8.8', '12 Core Concepts', 'nctsn-core-curriculum'),
    ('Y8.10', 'Search Institute 40 Developmental Assets, Safety', 'search-40-assets'),
    ('Y8.12', 'bullying definitions', 'cdc-ed-bullying-2014'),
    ('F1.1', 'Epstein Type 1', 'epstein-six-types'),
    ('F1.2', 'Epstein Type 4', 'epstein-six-types'),
    ('F1.8', 'Epstein Type 2', 'epstein-six-types'),
    ('F1.9', 'Epstein Types 3 and 5', 'epstein-six-types'),
    ('F2.3', 'McKinney-Vento', 'mckinney-vento'),
    ('A2.5', 'Weiss, Little & Bouffard (2005)', 'weiss-little-bouffard-2005'),
    ('A2.6', 'Epstein Types 3 and 6', 'epstein-six-types'),
]

# Codes whose tag waits: Y2.6 and F1.9 for PR #62 (CP-09-01, CP-09-02), A2.6 for CP-12-18's held
# part (A2 anchor re-review). Remove a code once its wait clears and this script has run.
WAIT = {'Y2.6', 'F1.9', 'A2.6'}


def main(write):
    text = DATA.read_text()
    i, j = text.index('= [') + 2, text.rindex(';')
    data = json.loads(text[i:j])
    assert json.dumps(data, indent=2, ensure_ascii=False) == text[i:j], 'data file is not in the canonical JSON layout'
    codes = {c['id']: c for d in data for cat in d['categories'] for c in cat['codes']}
    status = {s['id']: s['status'] for s in json.loads(REGISTRY.read_text())['sources']}

    changed = 0
    for code, phrase, sid in TAGS:
        basis = codes[code]['basis']
        tag = f'{phrase} (located'
        if code in WAIT or tag not in basis:
            continue
        assert basis.count(tag) == 1, (code, phrase)
        if status[sid] != 'verified':
            continue
        after = basis.replace(tag, f'{phrase} (verified')
        print(f'{code}:\n  - {basis}\n  + {after}')
        codes[code]['basis'] = after
        changed += 1

    if write and changed:
        DATA.write_text(text[:i] + json.dumps(data, indent=2, ensure_ascii=False) + text[j:])
    print(f'{changed} tag(s) {"written" if write else "would change (dry run; pass --write)"}')


if __name__ == '__main__':
    main('--write' in sys.argv[1:])
