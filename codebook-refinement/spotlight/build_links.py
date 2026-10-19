"""Builds codebook-refinement/spotlight/youth_outcomes_v3.spotlight-links.json.

The input is the SPOTlight relevance map (2026-10-18, extended by the exhaustive
search of 2026-10-19): spotlight_relevance_links.csv, 173 links between codebook
3.3.0 codes and the 13 indicators on the District's 2024-25 SPOTlight. Every claim in it was checked by an independent verifier who
fetched the source and recorded a verbatim excerpt (verification/batch*_results.csv).
Definitional links (the code names the indicator itself) rest on the SPOTlight's
wording instead.
Nothing here is cited from memory.

The JSON is display data for the internal app (the Codebook tab's "Connection to
District indicators" panel and the export's possible_spotlight_links column). It is
never part of the coding prompt, and the public explorer site does not show it.

    python3 codebook-refinement/spotlight/build_links.py
"""
import csv
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
DATA = (ROOT / 'codebooks/youthOutcomesV3.data.ts').read_text()
DOMAINS = json.loads(DATA[DATA.index('= [') + 2:DATA.rindex(';')])
CODES = {c['id']: c['name'] for d in DOMAINS for cat in d['categories'] for c in cat['codes']}
DOMAIN_IDS = {d['id'] for d in DOMAINS}

# Wording and 2024-25 values from Severin's paste of the District SPOTlight (2026-10-18).
INDICATORS = [
    ('S1', 'Conditions for success', 'Student attendance', 'Percentage of students attending 90% or more of instructional days', '61.4%'),
    ('S2', 'Conditions for success', 'Teacher attendance', 'Percentage of teachers attending 90% or more of work days', '85.7%'),
    ('S3', 'Increasing graduation and reducing dropouts', 'Dropouts', 'Number of students no longer enrolled, and who did not transfer or graduate', '1,680'),
    ('S4', 'Increasing graduation and reducing dropouts', 'Four-year graduation', 'Percentage of students graduating high school within four years of first-time enrollment in 9th grade', '78.0%'),
    ('S5', 'Goals 1 to 3', 'English language arts test, grade 3', 'Pennsylvania System of School Assessment (PSSA) English language arts, percentage proficient or advanced, grade 3', '31.4%'),
    ('S6', 'Goals 1 to 3', 'English language arts test, grades 3 to 8', 'Pennsylvania System of School Assessment (PSSA) English language arts, percentage proficient or advanced, grades 3 to 8', '33.2%'),
    ('S7', 'Goals 1 to 3', 'Math test, grade 3', 'Pennsylvania System of School Assessment (PSSA) math, percentage proficient or advanced, grade 3', '33.7%'),
    ('S8', 'Goals 1 to 3', 'Math test, grades 3 to 8', 'Pennsylvania System of School Assessment (PSSA) math, percentage proficient or advanced, grades 3 to 8', '25.1%'),
    ('S9', 'Goals 1 to 3', 'Science test, grades 4 and 8', 'Pennsylvania System of School Assessment (PSSA) science, percentage proficient or advanced, grades 4 and 8', 'not available (new state science standards)'),
    ('S10', 'Goal 4', 'Keystone Algebra I exam', 'Keystone Algebra I, percentage proficient or advanced', '15.5%'),
    ('S11', 'Goal 4', 'Keystone Biology exam', 'Keystone Biology, percentage proficient or advanced', '22.7%'),
    ('S12', 'Goal 4', 'Keystone Literature exam', 'Keystone Literature, percentage proficient or advanced', '34.9%'),
    ('S13', 'Goal 5', 'Career and technical education industry test, grade 12', 'National Occupational Competency Testing Institute (NOCTI): percentage of grade 12 career and technical education students meeting industry standards', '59.7%'),
]

# Board Bylaw 003.1, fetched for the report (2026-10-18); see report section 5.
GUARDRAILS = {
    'summary': (
        'The review found no study strong enough to tie this outcome to a SPOTlight indicator. '
        'That is not a judgment of its value: the Board of Education counts outcomes like this one '
        'under its guardrails, a well-rounded education and safe, welcoming schools.'
    ),
    'quote': 'Every student will have a well-rounded education with co-curricular opportunities, including arts and athletics, integrated into the school experience',
    'citation': 'Board of Education, School District of Philadelphia (2023). Bylaw 003.1, Goals and Guardrails.',
    'url': 'https://www.philasd.org/schoolboard/wp-content/uploads/sites/892/2023/10/003.1-Goals-and-Guardrails.docx-1.pdf',
}

LEVELS = {'A': 'strong', 'B': 'good', 'C': 'suggestive', 'D': 'thin'}


# Display text names other rows by plain words, not by link id (Severin reads it).
PLAIN = [
    ('Same as L-27: ', ''),
    (' (L-28, L-36)', ' (personalized absence messages to families, or a community school)'),
    ('are in L-28 (messages to families) and L-36 (community schools)',
     'are personalized absence messages to families and community schools'),
    ('The trial figures in the draft belong to L-28 and were removed here. ', ''),
]


def plain(text):
    text = text.strip()
    for old, new in PLAIN:
        text = text.replace(old, new)
    text = re.sub(r'\s*\(L-\d+\)', '', text)  # "a separate, not-recommended row (L-99)"
    text = re.sub(r'\s*\(its own row\)', '', text)
    if re.search(r'\bL-\d+', text):
        raise SystemExit(f'link id left in display text: {text!r}')
    return text[:1].upper() + text[1:]


def split(cell, sep):
    return [p.strip() for p in cell.split(sep) if p.strip()]


def evidence(tier):
    """'A for the tutoring model only' -> ('strong', 'for the tutoring model only')."""
    tier = tier.strip()
    if tier.lower().startswith('definitional'):
        return 'definitional', ''
    m = re.match(r'^([ABCD])\b\s*(.*)$', tier)
    if not m:
        raise SystemExit(f'unrecognized evidence tier: {tier!r}')
    return LEVELS[m.group(1)], m.group(2).strip().strip('()').strip()


def evidence_words(tier):
    """Letter levels in plain words: 'B only for X; otherwise C' -> 'good only for X; otherwise suggestive'."""
    return re.sub(r'\b([ABCD])\b', lambda m: LEVELS[m.group(1)], tier)


def links_to(cell):
    out = []
    for part in split(cell, ' | '):
        m = re.match(r'^(\S+)(?:\s+\((.*)\))?$', part)
        url, note = (m.group(1), m.group(2)) if m else (part, None)
        if not url.startswith('http'):
            continue
        out.append({'url': url, **({'note': note} if note else {})})
    return out


def philadelphia(cell):
    found = cell.strip().lower().startswith('yes')
    note = cell.split(':', 1)[1].strip() if ':' in cell else ''
    return {'found': found, **({'note': note} if note else {})}


def codes_of(cell, domains_ok=False):
    """Recommended links name codes; a not-recommended row may name a whole domain (domain-only coding)."""
    codes = split(cell, ';')
    missing = [c for c in codes if c not in CODES and not (domains_ok and c in DOMAIN_IDS)]
    if missing:
        raise SystemExit(f'codes not in codebook 3.x: {missing}')
    return codes


def main():
    ids = {i[0] for i in INDICATORS}
    rows = list(csv.DictReader((HERE / 'spotlight_relevance_links.csv').open(newline='', encoding='utf-8')))
    recommended, associated, not_recommended = [], [], []
    for r in rows:
        # One row (L-42, collective-impact networks) was checked against every indicator at once.
        cell = r['indicator_ids']
        indicators = [i[0] for i in INDICATORS] if cell.startswith('S1-S13') else split(cell, ',')
        if set(indicators) - ids:
            raise SystemExit(f"{r['link_id']}: unknown indicators {set(indicators) - ids}")
        if r['final_recommendation'] == 'recommend-with-conditions':
            level, scope = evidence(r['evidence_tier'])
            recommended.append({
                'id': r['link_id'],
                'codes': codes_of(r['codes']),
                'indicators': indicators,
                # "direct", or "predicts" for a leading indicator that only predicts the outcome.
                'contribution': 'predicts' if r['contribution'].startswith('predicts') else 'direct',
                'pathway': plain(r['pathway']),
                'evidence': level,
                **({'evidenceScope': scope} if scope else {}),
                'modelMatch': plain(r['model_match_required']),
                'conditions': plain(r['conditions']),
                'typicalEffect': plain(r['typical_effect']),
                'magnitude': plain(r['magnitude_note']),
                'caveats': plain(r['caveats']),
                'philadelphia': philadelphia(r['philadelphia_evidence']),
                'studies': split(r['key_studies'], ' | '),
                'links': links_to(r['urls']),
                'claims': split(r['claim_ids'], ';'),
            })
        elif r['final_recommendation'] == 'associated':
            # Research-associated: consistent correlational evidence (a meta-analysis, or several
            # long-term studies that adjust for prior achievement or attendance). Never "contributes to".
            pathway = plain(r['pathway'])
            if not re.search(r'\bassociated with\b', pathway) or re.search(r'\bcontribut', pathway, re.I):
                raise SystemExit(f"{r['link_id']}: an associated link says 'is associated with', never 'contributes to'")
            if not r['associated_basis'].strip():
                raise SystemExit(f"{r['link_id']}: an associated link names its basis")
            associated.append({
                'id': r['link_id'],
                'codes': codes_of(r['codes']),
                'indicators': indicators,
                'pathway': pathway,
                'basis': plain(r['associated_basis']),
                'typicalEffect': plain(r['typical_effect']),
                'caveats': plain(r['caveats']),
                'philadelphia': philadelphia(r['philadelphia_evidence']),
                'studies': split(r['key_studies'], ' | '),
                'links': links_to(r['urls']),
                'claims': split(r['claim_ids'], ';'),
            })
        elif r['final_recommendation'] == 'not-recommended':
            not_recommended.append({
                'id': r['link_id'],
                'codes': codes_of(r['codes'], domains_ok=True),
                'indicators': indicators,
                'pathway': plain(r['pathway']),
                'evidence': evidence_words(plain(r['evidence_tier'])),
            })
        else:
            raise SystemExit(f"{r['link_id']}: unknown recommendation {r['final_recommendation']!r}")

    out = {
        'codebook': 'youth_outcomes_v3',
        'codebookVersion': '3.3.0',
        'spotlightYear': '2024-25',
        'reviewedOn': '2026-10-19',
        'report': 'https://claude.ai/code/artifact/4454bf45-2669-4a9f-bfdd-910ed96ac76f',
        'rule': (
            'A tested link is recommended only on checked causal evidence (strong or good, or suggestive when it '
            'rests on a single clean trial), and only when the program runs the studied model. A code alone never earns credit: a code says what a program works toward, '
            'and the evidence is about specific program models.'
        ),
        'associatedRule': (
            'A research-associated link rests on consistent correlational evidence: a meta-analysis, or several '
            'long-term studies that point the same way and adjust for prior achievement or attendance. A single '
            'survey at one point in time does not count. These outcomes are associated with the indicator; the '
            'studies do not show that a program building them moves it.'
        ),
        'associatedCaution': (
            'Programs often attract students who are already more engaged, so an association can overstate '
            'what the program itself does.'
        ),
        'indicators': [
            {'id': i, 'group': g, 'name': n, 'spotlightWording': w, 'value2024_25': v}
            for i, g, n, w, v in INDICATORS
        ],
        'guardrails': GUARDRAILS,
        'links': recommended,
        'associated': associated,
        'notRecommended': not_recommended,
    }
    path = HERE / 'youth_outcomes_v3.spotlight-links.json'
    path.write_text(json.dumps(out, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'{path.relative_to(ROOT)}: {len(recommended)} tested, {len(associated)} research-associated, '
          f'{len(not_recommended)} not recommended')


if __name__ == '__main__':
    main()
