"""Proposes 3.0.0 gold codes for every row of gold/gold-cycle02.csv.

Writes gold/youth_outcomes_v3.gold.csv with status=proposed on every row.
Agents may only propose gold (STANDARDS S4.3); Severin adjudicates. A row is
flagged needs_review when the two routes to a 3.0.0 code disagree:

- via v2: the row's adjudicated v2-draft code, mapped to 3.0.0 (V2 below; the
  3.0 structure builds on the v2 draft, so this is the primary suggestion);
- via 2.x: the row's adjudicated live-codebook code, mapped by the crosswalk.

It is also flagged when its 2.x code was split in 3.0.0, or when the v2 code
has no single 3.0.0 home.

    python3 codebook-refinement/v3/propose_gold.py
"""
import csv
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = (ROOT / 'codebooks/youthOutcomesV3.data.ts').read_text()
DOMAINS = json.loads(DATA[DATA.index('= [') + 2:DATA.rindex(';')])
NAME = {c['id']: f"{c['id']} {c['name']}" for d in DOMAINS for cat in d['categories'] for c in cat['codes']}

# v2-draft code -> 3.0.0 code, from the approved proposal's analysis.
V2 = dict(x.split('>') for x in """Y1.1>Y2.1 Y1.2>Y2.2 Y1.3>Y2.3 Y1.4>Y2.4 Y1.5>Y2.6 Y2.1>Y3.1 Y2.2>Y3.2 Y2.3>Y3.3 Y2.4>Y3.4 Y2.5>Y3.5
Y3.1>Y4.1 Y3.2>Y4.2 Y3.3>Y4.2 Y3.4>Y4.3 Y3.5>Y4.3 Y3.6>Y4.4 Y3.7>Y4.5 Y3.8>Y4.4 Y3.9>Y4.6 Y3.10>Y4.7 Y3.11>Y4.8 Y3.12>Y4.9 Y3.13>Y4.8 Y3.14>Y4.10 Y3.15>Y4.11 Y3.16>Y4.12 Y3.17>Y4.11
Y4.1>Y5.1 Y4.2>Y5.2 Y4.3>Y5.4 Y4.4>Y5.4 Y4.5>Y5.5 Y4.6>Y5.6 Y4.7>Y5.3
Y5.1>Y6.1 Y5.2>Y6.2 Y5.3>Y6.4 Y5.4>Y6.5 Y5.5>Y6.3 Y5.6>Y6.6 Y5.7>Y6.7
Y6.1>Y1.9 Y6.2>Y1.10 Y6.3>Y1.11 Y6.4>Y1.12
Y7.1>Y1.1 Y7.2>Y1.1 Y7.3>Y1.3 Y7.4>Y1.4 Y7.5>Y1.5 Y7.7>Y1.2 Y7.8>Y1.8 Y7.9>Y1.7
Y8.1>Y1.13 Y8.2>Y1.13 Y8.3>Y1.15 Y8.4>Y1.14 Y8.5>Y1.17 Y8.6>Y1.16 Y8.7>Y1.18
Y9.1>Y7.1 Y9.2>Y7.2 Y9.3>Y7.3 Y9.4>Y7.4 Y9.5>Y7.5 Y9.6>Y7.6 Y9.7>Y7.7
Y10.1>Y8.1 Y10.2>Y8.2 Y10.3>Y8.1 Y10.4>Y8.1 Y10.5>Y8.3 Y10.6>Y8.4 Y10.7>Y8.5
Y11.1>Y8.6 Y11.2>Y8.7 Y11.3>Y8.8 Y11.4>Y8.9 Y12.1>Y8.10 Y12.2>Y8.11 Y12.3>Y8.12 Y12.4>Y8.13
F1.1>F1.1 F1.2>F1.4 F1.3>F1.5 F1.4>F1.2 F1.5>F1.6 F1.6>F1.7 F1.7>F1.3 F2.1>F2.1 F2.2>F2.2 F2.3>F2.3
F3.1>F1.8 F3.2>F1.9 F3.3>A2.4 A1.1>A1.1 A1.2>A1.2 A1.3>A1.3 A2.1>A2.1 A2.2>A2.5 A2.3>A2.3 A2.4>A2.4 A2.5>A2.2
A3.1>A3.1 A3.2>A3.2 A3.3>A3.3 none>none""".split())

xw = {}
split_codes = set()
for r in csv.DictReader((ROOT / 'codebook-refinement/v3/crosswalk-2.5.1-to-3.0.0.csv').open()):
    num = r['old_code'].split(' ')[0]
    xw[num] = r['new_code'].split(' ')[0]
    if r['mapping'] == 'split':
        split_codes.add(num)
xw['none'] = 'none'

def via_v2(row):
    v2 = row['v2_gold']
    if v2 == 'Y7.6':  # v2 put all arts in content learning; 3.0 keeps expression apart (CP-04-01)
        return 'Y2.5' if row['v1_gold'] in ('2.4', '2.5') else 'Y1.6'
    if v2 == 'Y7.10':  # v2's residual applied-skills code is not carried over
        return None
    return V2[v2]

rows = list(csv.DictReader((ROOT / 'codebook-refinement/gold/gold-cycle02.csv').open()))
out = ROOT / 'codebook-refinement/gold/youth_outcomes_v3.gold.csv'
cols = ['gold_id', 'set', 'outcome_text', 'v3_suggested', 'v3_alternates', 'via_v2', 'via_2x',
        'needs_review', 'review_reason', 'expected_uncoded', 'status', 'adjudicated_by', 'adjudicated_on']
flagged = 0
with out.open('w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols, lineterminator='\n')
    w.writeheader()
    for r in rows:
        a = via_v2(r)
        b = xw[r['v1_gold']]
        reasons = []
        if a is None:
            reasons.append('v2 residual code has no 3.0 home')
        elif a != b:
            reasons.append('v2 and 2.x routes disagree')
        if r['v1_gold'] in split_codes:
            reasons.append(f"2.x code {r['v1_gold']} was split")
        suggested = a or b
        alts = []
        for c in [b] + [V2.get(x.strip()) for x in re.split(r'[;|, ]+', r['v2_alternates']) if x.strip() in V2]:
            if c and c != suggested and c != 'none' and c not in alts:
                alts.append(c)
        flagged += bool(reasons)
        w.writerow({
            'gold_id': r['gold_id'], 'set': r['set'], 'outcome_text': r['outcome_text'],
            'v3_suggested': 'none' if suggested == 'none' else NAME[suggested],
            'v3_alternates': ' | '.join(NAME[c] for c in alts),
            'via_v2': a or '', 'via_2x': b,
            'needs_review': 'yes' if reasons else 'no', 'review_reason': '; '.join(reasons),
            'expected_uncoded': r['expected_uncoded'],
            'status': 'proposed', 'adjudicated_by': '', 'adjudicated_on': '',
        })
print(f'wrote {out.relative_to(ROOT)}: {len(rows)} rows, {flagged} flagged for review')
