"""Apply Severin's decisions from the 3.0 gold review page to the proposed 3.0 gold.

Reads codebook-refinement/v3/review/verdicts-*.json (exported from the review
page's database, one entry per row he decided) and writes
codebook-refinement/gold/youth_outcomes_v3.gold.csv with:
  v3_gold          the code he chose, as "<id> <name>" ("none" = leave uncoded)
  codebook_gap     1 when he switched on "No good fit"
  adjudication_note  his note, prefixed "Severin: "
  status / adjudicated_by / adjudicated_on  set only for rows he decided.
Rows he has not decided stay status=proposed with v3_gold empty. The script
never decides a row itself. Run from the repo root:
  python3 codebook-refinement/v3/apply_review.py
"""
import csv, glob, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
GOLD = os.path.join(ROOT, 'codebook-refinement/gold/youth_outcomes_v3.gold.csv')
DATA = os.path.join(ROOT, 'codebooks/youthOutcomesV3.data.ts')

names = {k: json.loads(f'"{v}"') for k, v in re.findall(r'"id": "([YFA]\d+\.\d+)",\s*"name": "((?:[^"\\]|\\.)*)"', open(DATA).read())}
assert len(names) == 98, len(names)

verdicts = {}
for f in sorted(glob.glob(os.path.join(ROOT, 'codebook-refinement/v3/review/verdicts-*.json'))):
    doc = json.load(open(f))
    assert doc['adjudicated_by'] == 'Severin'
    verdicts.update(doc['verdicts'])

rows = list(csv.DictReader(open(GOLD)))
base = [c for c in rows[0].keys() if c not in ('v3_gold', 'codebook_gap', 'adjudication_note')]
i = base.index('v3_suggested')
cols = base[:i] + ['v3_gold'] + base[i:]
j = cols.index('expected_uncoded')
cols = cols[:j] + ['codebook_gap'] + cols[j:]
k = cols.index('status')
cols = cols[:k] + ['adjudication_note'] + cols[k:]

label = lambda c: 'none' if c == 'none' else f'{c} {names[c]}'
for r in rows:
    v = verdicts.get(r['gold_id'])
    if not v:
        r.update(v3_gold='', codebook_gap='0', adjudication_note='', status='proposed', adjudicated_by='', adjudicated_on='')
        continue
    code = v['code']
    assert code == 'none' or code in names, (r['gold_id'], code)
    alts = [a for a in r['v3_alternates'].split(' | ') if a and a.split(' ')[0] != code]
    r.update(v3_gold=label(code), v3_alternates=' | '.join(alts), codebook_gap='1' if v.get('gap') else '0',
             expected_uncoded='true' if code == 'none' else 'false',
             adjudication_note=('Severin: ' + v['note'].strip()) if v.get('note', '').strip() else '',
             status='adjudicated', adjudicated_by='Severin', adjudicated_on=v['on'])

with open(GOLD, 'w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=cols, lineterminator='\n')
    w.writeheader()
    for r in rows:
        w.writerow({c: r.get(c, '') for c in cols})
print(f'{sum(r["status"] == "adjudicated" for r in rows)} of {len(rows)} rows adjudicated')
