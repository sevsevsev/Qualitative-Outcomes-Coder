"""CP-12-33 (3.3.0): Material Necessities (F2.4), the registry entries for the new code.

Applied by build_registry.py through review_2026_10_16.apply_all(), after the 2026-10-16 modules.
Verdicts are copied in source-verification-2026-10-17-f24.json from
research-review/2026-10-16/full-review/verify-f24/verdicts.json (claims f2new-01 to -13, one
independent codebook-citation-verifier run, 2026-10-17) and verify-f24/hygiene-verdicts.json
(claims f2hyg-01 to -03, a second independent run the same day). The claim fields (code, cite_as)
are those of verify-f24/verification-table.md and hygiene-research.md; the claims files themselves
are not in the repository, so `claimed_component` and `url_given` are not recorded. Nothing here is
cited from memory. Regenerate the record with

    python3 codebook-refinement/v3/review_2026_10_16.py
"""
import json
import re
from pathlib import Path

RECORD_FILE = 'source-verification-2026-10-17-f24.json'
DATE = '2026-10-17'
BY = '2026-10-17 F2.4 verification (independent codebook-citation-verifier, blind to proposer; WebFetch)'
_DIR = Path(__file__).resolve().parent.parent / 'research-review/2026-10-16/full-review/verify-f24'

# Routing-only claims (f2new-06, -10, -11, -12), the lead f2new-04 and CSSP's negative f2new-13 are
# kept as records; they support no F2.4 text (CP-12-33, "Downstream results" and "Sources").
RECORD_ONLY = ['f2new-04', 'f2new-06', 'f2new-10', 'f2new-11', 'f2new-12', 'f2new-13']

_HYGIENE_CITE = {  # verify-f24/hygiene-research.md, the cite_as each claim was sent with
    'f2hyg-01': 'Joseph Rowntree Foundation (2025). Destitution in the UK: income thresholds for October 2025.',
    'f2hyg-02': 'I-SPHERE (Heriot-Watt University) for the Joseph Rowntree Foundation. Destitution in the UK, project page.',
    'f2hyg-03': "U.S. DHHS, ACF Children's Bureau, Child Welfare Policy Manual, 8.3B.1 Title IV-E Foster Care Maintenance Payments Program, Payments, Allowable costs, Question 9.",
}


def build_record():
    """The record rows, in the 2026-10-16 record shape, from the two verdict files."""
    table = {}
    for line in (_DIR / 'verification-table.md').read_text().splitlines():
        m = re.match(r'^\| (f2new-\d\d) \| ([^|]+) \| ([^|]+) \|', line)
        if m:
            table[m.group(1)] = (m.group(2).strip(), m.group(3).strip())
    rows = []
    for name in ('verdicts.json', 'hygiene-verdicts.json'):
        for v in json.loads((_DIR / name).read_text()):
            cid = v['claim_id']
            code, cite = table[cid] if cid in table else ('F2.new', _HYGIENE_CITE[cid])
            rows.append({
                'claim_id': cid, 'kind': 'f24', 'code': code, 'cite_as': cite,
                'claimed_component': 'not recorded (claims file not kept)', 'url_given': 'not recorded',
                'verdict': v['verdict'], 'url_checked': v.get('url_checked') or v.get('fetched_url', ''),
                'source_kind': v.get('source_kind', 'not recorded'), 'excerpt': v.get('excerpt', ''),
                'corrected_cite_as': v.get('corrected_cite_as', ''), 'notes': v.get('note', v.get('notes', '')),
            })
    return sorted(rows, key=lambda r: r['claim_id'])


_HD100 = ('HD100 counts new (not second-hand) clothes; F2.4 does not require new clothes, which rests on '
          '42 U.S.C. 675(4)(A) and CRC Art. 27(3) (CP-12-33).')

NEW = [
    {'id': 'eurostat-child-deprivation-2023', 'claim': 'f2new-01', 'cp': 'CP-12-33',
     'cite_as': 'Eurostat (2023, 24 April). 13% of EU children faced material deprivation. Eurostat News; child-specific material deprivation rate.',
     'codebook_names': ['Eurostat, EU-SILC child-specific material deprivation items', 'Eurostat EU-SILC child-specific deprivation items'],
     'tier': 'A', 'publisher': 'Eurostat (European Commission)', 'year': 2023,
     'supports': [('F2.4', 'child-specific items: some new clothes, two pairs of shoes, outdoor leisure equipment; only items lacked because they cannot be afforded count', 'f2new-01', 'direct')],
     'notes_extra': 'Official statistics of the EU (tier A, CP-12-33 decision 2). ' + _HD100},
    {'id': 'eu-reg-112-2013-silc-child-items', 'claim': 'f2new-02', 'cp': 'CP-12-33',
     'cite_as': 'European Commission (2013). Commission Regulation (EU) No 112/2013 of 7 February 2013 implementing Regulation (EC) No 1177/2003, Annex, children\'s items HD100, HD110, HD160.',
     'codebook_names': ['Commission Regulation (EU) No 112/2013'],
     'tier': 'A', 'publisher': 'European Commission', 'year': 2013,
     'supports': [('F2.4', 'Annex, children\'s items HD100 (some new clothes), HD110 (two pairs of properly fitting shoes), HD160 (outdoor leisure equipment)', 'f2new-02', 'direct')],
     'notes_extra': 'The instrument behind the Eurostat child items (tier A, CP-12-33 decision 2). ' + _HD100},
    {'id': 'cso-ireland-silc-child-deprivation-2024', 'claim': 'f2new-03', 'cp': 'CP-12-33',
     'cite_as': 'Central Statistics Office Ireland (2025). SILC Module on Child Deprivation 2024, Background Notes, Table 6.1.',
     'tier': 'A', 'publisher': 'Central Statistics Office Ireland', 'year': 2025,
     'supports': [('F2.4', 'Table 6.1 child-specific deprivation items (new clothes, two pairs of shoes, outdoor leisure equipment); supporting only', 'f2new-03', 'direct')],
     'notes_extra': 'The same measure restated by a national statistics office; supporting only, not named on the Source line.'},
    {'id': 'global-mhh-indicators-2022', 'claim': 'f2new-05', 'cp': 'CP-12-33',
     'cite_as': "Global MHH Monitoring Group (2022). Priority List of Indicators for Girls' Menstrual Health and Hygiene: Technical Guidance for National Monitoring. Columbia University. Indicator 1.",
     'codebook_names': ['Global MHH Monitoring Group (2022)'],
     'tier': 'B', 'publisher': 'Global MHH Monitoring Group; Columbia University', 'year': 2022,
     'supports': [('F2.4', 'Indicator 1: girls who report having enough menstrual materials during their last period', 'f2new-05', 'direct')],
     'notes_extra': "The document's recommended citation names the Global MHH Monitoring Group, Columbia University, March 2022 (verifier note). Indicator 19 (class participation, claim f2new-06) is routing only (Y1.9) and is not cited."},
    {'id': 'usc-42-675-4a-maintenance-payments', 'claim': 'f2new-07', 'cp': 'CP-12-33',
     'cite_as': 'Social Security Act sec. 475(4)(A), 42 U.S.C. 675(4)(A): foster care maintenance payments.',
     'codebook_names': ['Social Security Act, 42 U.S.C. 675(4)(A)'],
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('F2.4', "payments to cover the cost of a child's clothing and school supplies (a statutory duty; decision G4)", 'f2new-07', 'partial')],
     'notes_extra': 'A payment definition, not a measured outcome: partial support with no FD (decision G4). Carries clothing in general (not only new clothes) and school supplies.'},
    {'id': 'usc-42-11433-d15-school-supplies', 'claim': 'f2new-08', 'cp': 'CP-12-33',
     'cite_as': 'McKinney-Vento Homeless Assistance Act, 42 U.S.C. 11433(d)(15): authorized activities, provision of school supplies.',
     'codebook_names': ['McKinney-Vento Act, 42 U.S.C. 11433(d)(15)', '42 U.S.C. 11433(d)(15)'],
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('F2.4', 'authorized activity (15): the provision of school supplies (a statutory duty; decision G4)', 'f2new-08', 'partial')],
     'notes_extra': "A provision duty; also a lead for A2.3 'materials' (separate CP, A2 re-review)."},
    {'id': 'jrf-destitution-thresholds-2026', 'claim': 'f2hyg-01', 'cp': 'CP-12-33',
     'cite_as': 'Bramley, G. and Ayed, N. (2026). Destitution in the UK: income thresholds for October 2025. Joseph Rowntree Foundation.',
     'codebook_names': ['Joseph Rowntree Foundation and I-SPHERE, Destitution in the UK', 'JRF and I-SPHERE, Destitution in the UK'],
     'tier': 'D', 'publisher': 'Joseph Rowntree Foundation', 'year': 2026,
     'supports': [('F2.4', 'destitution essential 6: basic toiletries (soap, shampoo, toothpaste, a toothbrush), lacked because they cannot be afforded; an all-ages measure, broader than the code (decision G3)', 'f2hyg-01', 'direct')],
     'notes_extra': "Citation from the verifier's corrected_cite_as (authors Bramley and Ayed, Heriot-Watt University). The publication date, 13 January 2026, is taken from the verifier's fetch summary and was not confirmed on the page when this entry was built; confirm it at the next re-verification. Accepted as a nonprofit and university measure (tier D) that names the items directly (CP-12-33 decision 5; Severin, P-F24-10)."},
    {'id': 'isphere-destitution-uk', 'claim': 'f2hyg-02', 'cp': 'CP-12-33',
     'cite_as': 'I-SPHERE, Heriot-Watt University, for the Joseph Rowntree Foundation. Destitution in the UK (2016, 2018, 2020, 2023), project page.',
     'tier': 'D', 'publisher': 'I-SPHERE, Heriot-Watt University', 'year': None,
     'supports': [('F2.4', 'the same essential (basic toiletries); estimates include around one million children; supporting only', 'f2hyg-02', 'direct')],
     'notes_extra': 'The research team behind the JRF measure (verifier: undertaken by I-SPHERE on behalf of JRF in 2016). Supporting only; not named on the Source line.'},
    {'id': 'acf-cwpm-8-3b1-q9-incidentals', 'claim': 'f2hyg-03', 'cp': 'CP-12-33',
     'cite_as': "ACF Children's Bureau. Child Welfare Policy Manual 8.3B.1, Title IV-E Foster Care Maintenance Payments, Allowable costs, Question 9 (personal incidentals).",
     'tier': 'A', 'publisher': "U.S. Department of Health and Human Services, ACF Children's Bureau", 'year': None,
     'supports': [('F2.4', "items related to personal hygiene among a foster child's personal incidentals (statutory guidance; decision G4)", 'f2hyg-03', 'partial')],
     'notes_extra': 'A rule on which costs the title IV-E payment covers, not a measure of going without (verifier, PARTIAL on fit). Supporting only; not named on the Source line.'},
    {'id': 'un-crc-art27', 'claim': 'f2new-09', 'cp': 'CP-12-33',
     'cite_as': 'United Nations (1989). Convention on the Rights of the Child, Article 27(1) and 27(3).',
     'tier': 'A', 'publisher': 'United Nations', 'year': 1989,
     'supports': [('F2.4', "clothing as part of a child's adequate standard of living, Art. 27(3) (a right, broader than the code; decision G3)", 'f2new-09', 'partial')],
     'notes_extra': 'Supporting only; not named on the Source line.'},
]

NOTES = {
    'cssp-concrete-support': ("Does not name clothing (claim f2new-13, PARTIAL, 2026-10-17); not cited for F2.4. The verifier's "
                              "corrected cite: Center for the Study of Social Policy (n.d.). Strengthening Families: Concrete Support in Times of Need."),
}
