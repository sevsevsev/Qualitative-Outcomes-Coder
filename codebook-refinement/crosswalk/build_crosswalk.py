"""Build youth_outcomes_v3.crosswalk.json from lanes.csv and the checked Board bylaw quotes.

The crosswalk places every codebook 3.x code in one lane: the District priority its outcome
serves (a SPOTlight indicator, a step toward one, the college and career goal, a Board
guardrail) or a lane valued on its own terms. It holds no counts and no evidence: join it with
../spotlight/youth_outcomes_v3.spotlight-links.json by code for the research behind each code.
Edit lanes.csv, then run: python3 build_crosswalk.py
"""
import csv, json, os

VERSION = '1.0.0'
HERE = os.path.dirname(os.path.abspath(__file__))
BYLAW = 'https://www.philasd.org/schoolboard/wp-content/uploads/sites/892/2023/10/003.1-Goals-and-Guardrails.docx-1.pdf'

claims = {r['claim_id']: r for r in csv.DictReader(open(os.path.join(HERE, 'verification', 'bylaw_results.csv'), newline=''))}
def quote(cid):
    c = claims[cid]
    if c['verdict'] != 'SUPPORTED':
        raise SystemExit(f'{cid} is {c["verdict"]}, not SUPPORTED')
    return {'text': c['excerpt'], 'claim': cid}

LANES = [
    ('names-indicator', 'Names a SPOTlight indicator', 'The outcome is the subject of a District SPOTlight indicator: reading, math, science, attendance, graduation or the career and technical education industry test.', None),
    ('step-toward-indicator', 'Steps toward an indicator', 'Research follows this outcome to a SPOTlight indicator: grades and on-track status, engagement, persistence, mindsets, suspensions, school readiness.', None),
    ('college-career-goal', 'Board goal: graduate college and career ready', 'Serves the Board goal of graduating college and career ready. Apart from graduation, the SPOTlight has no measure for it.', 'B-4'),
    ('guardrail-safe-welcoming', 'Guardrail: safe, welcoming and healthy schools', 'Valued under the Board guardrail for safe, welcoming and healthy schools with social, emotional and mental health supports.', 'B-5'),
    ('guardrail-well-rounded', 'Guardrail: a well-rounded education', 'Valued under the Board guardrail for a well-rounded education with co-curricular opportunities, including arts and athletics.', 'B-6'),
    ('guardrail-family-partners', 'Guardrail: parents and guardians as partners', 'Valued under the Board guardrail that welcomes parents and guardians as partners in their child\'s school community.', 'B-7'),
    ('family-outcome', 'Family outcome, valued on its own terms', 'A result for families and caregivers: well-being, skills and basic needs. It is not tested against student indicators.', None),
    ('quality-condition', 'Condition for quality, not a student outcome', 'A result for staff, programs, access or systems. Testing it against student indicators would be a category error.', None),
]
ids = [l[0] for l in LANES]
codes = []
for r in csv.DictReader(open(os.path.join(HERE, 'lanes.csv'), newline='')):
    if r['lane'] not in ids:
        raise SystemExit(f'{r["code"]}: unknown lane {r["lane"]}')
    codes.append({'code': r['code'], 'name': r['code_name'], 'lane': r['lane'], 'serves': r['serves']})

out = {
    'crosswalkVersion': VERSION,
    'codebook': 'youth_outcomes_v3',
    'codebookVersion': '3.3.0',
    'rule': 'A lane says which District priority an outcome serves. It says what a partner works toward, never that the partner moves it, and it is never a score for a partner. Research credit comes only from the SPOTlight links file, by program model.',
    'source': {'citation': 'Board of Education, School District of Philadelphia. Bylaw 003.1, Goals and Guardrails (adopted 29 June 2023, revised 19 October 2023).', 'url': BYLAW,
               'guardrailDefinition': quote('B-1'), 'goals': [quote('B-2'), quote('B-3'), quote('B-4')],
               'guardrails': [quote('B-5'), quote('B-6'), quote('B-7'), quote('B-8')],
               'note': 'The fourth guardrail concerns District practices that perpetuate systemic racism, not a student outcome, so no code is placed in it.'},
    'lanes': [{'id': i, 'name': n, 'description': d, **({'quote': quote(q)} if q else {})} for i, n, d, q in LANES],
    'codes': codes,
}
with open(os.path.join(HERE, 'youth_outcomes_v3.crosswalk.json'), 'w') as f:
    json.dump(out, f, indent=2, ensure_ascii=False)
    f.write('\n')
print(f'{len(codes)} codes in {len(LANES)} lanes')
