"""Build youth_outcomes_v3.portrait-of-a-graduate.json from mapping.csv and portrait_skills_11.2.csv.

The file maps each codebook 3.x code to the District Portrait of a Graduate skills (version 11.2)
it covers: direct, partial or none, with a reason. It holds no counts and recodes nothing.
Edit mapping.csv, then run: python3 build_portrait_crosswalk.py
"""
import csv, json, os

VERSION = '0.1.0'
HERE = os.path.dirname(os.path.abspath(__file__))
FITS = {
    'direct': 'The code names the same result the Portrait skill describes.',
    'partial': 'Some statements under the code fit the Portrait skill and some do not, or the code sits next to the skill without matching it.',
    'none': 'The Portrait has no skill for this result: a feeling, a status, a health condition, a relationship received, or a result for families, staff or systems.',
}

skills = list(csv.DictReader(open(os.path.join(HERE, 'portrait_skills_11.2.csv'), newline='')))
ids = {s['id'] for s in skills}
codes = []
for r in csv.DictReader(open(os.path.join(HERE, 'mapping.csv'), newline='')):
    if r['fit'] not in FITS:
        raise SystemExit(f'{r["code"]}: unknown fit {r["fit"]}')
    portrait = [p for p in r['portrait'].split(';') if p]
    for p in portrait:
        if p not in ids:
            raise SystemExit(f'{r["code"]}: unknown Portrait id {p}')
    if (r['fit'] == 'none') != (not portrait):
        raise SystemExit(f'{r["code"]}: fit {r["fit"]} does not match Portrait ids {portrait}')
    codes.append({'code': r['code'], 'name': r['code_name'], 'fit': r['fit'], 'portrait': portrait, 'reason': r['reason']})

out = {
    'crosswalkVersion': VERSION,
    'status': 'draft for review',
    'codebook': 'youth_outcomes_v3',
    'codebookVersion': '3.3.0',
    'rule': 'A link says which Portrait of a Graduate skills a partner outcome works toward. It never says what stage participants reach, and it is never a score for a partner.',
    'source': {
        'title': 'School District of Philadelphia Portrait of a Graduate Competency Framework, Updated Skills Map 11.2',
        'author': 'Written by Building 21 for the School District of Philadelphia',
        'license': 'CC BY-NC-SA 4.0',
        'licenseUrl': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
        'received': '2026-11-10',
        'note': 'Identifiers follow version 11.2 only; other versions number the skills differently. Only competencies 1 to 8 have progressions.',
    },
    'fits': [{'id': k, 'description': v} for k, v in FITS.items()],
    'portrait': [{'id': s['id'], 'type': s['type'], 'group': s['group'], 'competency': s['competency'], 'name': s['name'],
                  'statement': s['statement'], 'hasProgression': s['has_progression'] == 'yes'} for s in skills],
    'codes': codes,
}
with open(os.path.join(HERE, 'youth_outcomes_v3.portrait-of-a-graduate.json'), 'w') as f:
    json.dump(out, f, indent=2, ensure_ascii=False)
    f.write('\n')
n = {k: sum(c['fit'] == k for c in codes) for k in FITS}
print(f'{len(codes)} codes: {n}')
