"""Build edge-case-determinations-3.0.csv: one row per probe in edge_cases_v1.csv, with the
old expectation translated to 3.0 by translate_edge_cases.py, both blind coders' 3.0 codes,
and the determination from edge-case-review-2026-09-26.md. Determinations are Claude's
proposals, not gold; only Severin adjudicates."""
import csv, json, os
here = os.path.dirname(os.path.abspath(__file__))
D = {  # row_id: (determination, pattern, note)
'E001': ('uncoded (CP-09-07) or new Y4.13 (option B)', 'P5 generic SEL', 'No skill named. Coders split (Y4.2 low / none).'),
'E002': ('uncoded', 'P5 generic SEL', 'Label form; both coders uncoded.'),
'E003': ('uncoded (CP-09-07) or Y4.13', 'P5 generic SEL', '"All five" names no skill; do not invent five splits.'),
'E004': ('Y4.2', 'control', 'Both coders agree.'),
'E005': ('Y7.7', 'closed by 3.0', 'Matches held-out N055 gold (life skills -> Y7.7).'),
'E006': ('Y8.7', 'closed by 3.0', ''),
'E007': ('Y1.15', 'closed by 3.0', 'Rule 9: no subject named.'),
'E008': ('Y1.15', 'closed by 3.0', 'Grades go to Y1.15 even with subjects named.'),
'E009': ('Y8.1', 'closed by 3.0', ''),
'E010': ('uncoded (CP-09-05)', 'P6 organization', 'Both coders forced A3.1 low; 2026-09-23 decision says out of scope.'),
'E011': ('uncoded', 'P6 organization', ''),
'E012': ('uncoded (CP-09-05)', 'P6 organization', 'Coders forced A2.5 / A2.1 low.'),
'E013': ('uncoded', 'P6 organization', 'A statement about the evaluation.'),
'E014': ('A3.2', 'closed by 3.0', 'A3.1 excludes data sharing.'),
'E015': ('A3.3 low; gap, leave alone', 'P9 community', 'Neighbors are not participants; rare.'),
'E016': ('A3.3 medium', 'P9 community', 'Community norms are community conditions; Y4.5 is a youth skill.'),
'E017': ('A3.3 low; gap, leave alone', 'P9 community', ''),
'E018': ('A2.5', 'P3 arts appreciation', 'Audience counts of non-participants are reach.'),
'E019': ('A1.3', 'closed by 3.0', 'Staff well-being.'),
'E020': ('A1.3 medium', 'closed by 3.0', 'Volunteers sit in A1.'),
'E021': ('A1.3 low', 'leave alone', 'Staff pay has no code; rare.'),
'E022': ('A1.1', 'control', ''),
'E023': ('A1.2', 'control', ''),
'E024': ('Y2.5 (CP-09-04)', 'P3 arts appreciation', 'Coders split Y2.5 / Y2.1; held-out N005 gold is Y2.5.'),
'E025': ('Y1.6', 'closed by 3.0', ''),
'E026': ('Y3.1 (CP-09-04)', 'P3 arts appreciation', 'Held-out N027 gold: feeling welcome in arts spaces -> Y3.1.'),
'E027': ('Y5.2 low; gap, leave alone', 'leave alone', 'A community mission, not a participant result.'),
'E028': ('Y2.5', 'control', ''),
'E029': ('Y2.5', 'control', ''),
'E030': ('Y7.6', 'closed by 3.0', ''),
'E031': ('Y1.18 ; Y7.6', 'closed by 3.0', 'Split; debt is the graduate\'s own finances.'),
'E032': ('F2.1', 'control', ''),
'E033': ('Y6.6', 'closed by 3.0', ''),
'E034': ('Y6.6 medium', 'closed by 3.0', ''),
'E035': ('Y1.4', 'control', 'Photosynthesis is science (2.x expected 1.3).'),
'E036': ('Y3.5', 'closed by 3.0', ''),
'E037': ('Y3.5', 'closed by 3.0', ''),
'E038': ('Y5.5', 'closed by 3.0', ''),
'E039': ('Y5.5', 'closed by 3.0', ''),
'E040': ('A2.5 (CP-09-05 activity rule) or Y2.2', 'P7 activity text', 'Both coders chose A2.5; exposure is dosage unless a result is named.'),
'E041': ('Y7.1', 'control', ''),
'E042': ('Y8.2', 'closed by 3.0', ''),
'E043': ('Y5.4 medium', 'closed by 3.0', 'Self-worth; no body-image code needed.'),
'E044': ('Y8.1', 'closed by 3.0', ''),
'E045': ('Y5.6', 'closed by 3.0', ''),
'E046': ('A2.4', 'P2 inclusion', ''),
'E047': ('A2.4', 'closed by 3.0', ''),
'E048': ('Y1.2', 'control', ''),
'E049': ('uncoded', 'control', ''),
'E050': ('uncoded', 'control', ''),
'E051': ('uncoded', 'control', ''),
'E052': ('uncoded', 'control', ''),
'E053': ('A2.5 (CP-09-05)', 'P7 activity text', 'Coders split A2.5 / none. Names only a format and schedule.'),
'E054': ('uncoded', 'control', ''),
'E055': ('Y8.6', 'control', ''),
'E056': ('Y4.2', 'control', ''),
'E057': ('A2.5', 'control', ''),
'E058': ('Y1.13', 'control', ''),
'E059': ('Y1.15', 'control', ''),
'E060': ('Y1.12', 'control', ''),
'E061': ('Y5.2 ; Y8.4', 'control', 'Both coders split.'),
'E062': ('Y1.3 ; Y3.3', 'split', ''),
'E063': ('Y4.2 ; Y1.9', 'split', 'Coder B read frustration tolerance as Y1.10; rule 6 and Y4.2 name frustration.'),
'E064': ('Y1.9 ; Y1.1', 'split', ''),
'E065': ('A1.1 ; Y1.9', 'split', ''),
'E066': ('A2.5 ; F1.2 (after CP-09-01; F1.9 today)', 'P1 attendance', 'Both coders chose F1.9, as the current text says.'),
'E067': ('Y4.3 ; Y5.4 ; Y3.1', 'split', ''),
'E068': ('Y2.5', 'split', 'Both parts share one code in 3.0.'),
'E069': ('Y1.15 ; Y3.3 low', 'split', 'Coder B left it uncoded; "academic success" -> Y1.15 by rule 9.'),
'E070': ('Y1.18', 'control', ''),
'E071': ('Y5.4', 'control', ''),
'E072': ('Y3.2', 'control', ''),
'E073': ('Y5.5', 'control', ''),
}
tx = {r['row_id']: r for r in csv.DictReader(open(os.path.join(here, 'edge_cases_v1_to_3_0.csv'), newline=''))}
def codes(p):
    return {o['sid']: ' ; '.join(f"{x['code'].split(' ')[0]} ({x['confidence']})" for x in o['outcomes']) for o in json.load(open(p))}
A = codes(os.path.join(here, 'blind/coder-a.json')); B = codes(os.path.join(here, 'blind/coder-b.json'))
with open(os.path.join(here, 'edge-case-determinations-3.0.csv'), 'w', newline='') as f:
    w = csv.writer(f)
    w.writerow(['row_id', 'outcome_text', 'old_expectation_in_3_0_codes', 'coder_a_3_0', 'coder_b_3_0', 'determination', 'pattern', 'note'])
    for k, r in tx.items():
        d = D[k]
        w.writerow([k, r['outcome_text'], r['expected_translated_to_3_0'], A[k], B[k], *d])
print('wrote', len(tx))
