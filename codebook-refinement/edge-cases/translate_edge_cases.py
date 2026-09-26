"""Translate edge_cases_v1.csv's expected_under_v2_0 codes (2.0.0 numbering) to 3.0.0 by script.

2.0.0 -> 2.5.1: codes are not renumbered after 2.0.0 (only additions), which this script
checks by comparing each 2.0.0 label (renumbering map) with the 2.5.1 label (crosswalk).
2.5.1 -> 3.0.0: codebook-refinement/v3/crosswalk-2.5.1-to-3.0.0.csv (default target).
"""
import csv, re, sys
ROOT = '/home/claude/Qualitative-Outcomes-Coder/codebook-refinement'
v200 = {}
for r in csv.DictReader(open(f'{ROOT}/renumbering/v1.2.0-to-v2.0.0.csv', newline='')):
    if r['kind'] == 'subcategory':
        v200[r['new_code']] = r['new_label'].split(' ', 1)[1]
xw = {}
for r in csv.DictReader(open(f'{ROOT}/v3/crosswalk-2.5.1-to-3.0.0.csv', newline='')):
    code, label = r['old_code'].split(' ', 1)
    xw[code] = (label, r['new_code'].split(' ', 1)[0], r['mapping'], r['re_review_targets'])
problems = []
def tr(code):
    if code not in xw:
        # wildcard like "11.*" or a domain-only reference
        return None
    lab, new, kind, extra = xw[code]
    if code in v200 and v200[code].lower()[:12] != lab.lower()[:12]:
        problems.append(f'{code}: 2.0.0 "{v200[code]}" vs 2.5.1 "{lab}"')
    return new + ('' if kind == 'one-to-one' else f' ({kind}' + (f'; also {extra}' if extra else '') + ')')
src = sys.argv[1]; out = sys.argv[2]
rows = list(csv.DictReader(open(src, newline='')))
with open(out, 'w', newline='') as f:
    w = csv.writer(f)
    w.writerow(['row_id', 'outcome_text', 'expected_under_v2_0', 'expected_translated_to_3_0'])
    for r in rows:
        exp = r['expected_under_v2_0']
        def sub(m):
            t = tr(m.group(0))
            return t if t else m.group(0) + '[no 3.0 map]'
        tx = re.sub(r'(?<![\d.])\d{1,2}\.\d(?:\.\d)?(?![\d])', sub, exp)
        w.writerow([r['row_id'], r['outcome_text'], exp, tx])
print('rows', len(rows)); print('label drift checks failed:', problems or 'none')
