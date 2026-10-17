"""Batch 1 of the 2026-10-16 research review (3.1.5): Y3 (CP-12-02), Y4 (CP-12-03),
the Source-line registry rows of CP-12-16 that land now, and the CASEL rows (CP-12-20).
3.3.0 adds Y2 (CP-12-01), which waited for PR #62 (decision G7), with its round-2 results.

Applied by build_registry.py through review_2026_10_16.apply_all(). Verdicts are
copied in source-verification-2026-10-16-b1.json from full-review/batch1/verify/
(round 1) and full-review/verify-round2/ (round 2).
"""

RECORD_FILE = 'source-verification-2026-10-16-b1.json'
RECORD_ONLY = []

# ---------------------------------------------------------------- CP-12-02 (Y3)
STATUTE_ON_LII = 'Read on Cornell LII; bibliographic match recorded by the verifier'

NEW = [
    {'id': 'surgeon-general-2023-social-connection', 'claim': 'y3-04', 'cp': 'CP-12-02',
     'cite_as': "Office of the U.S. Surgeon General (2023). Our Epidemic of Loneliness and Isolation: The U.S. Surgeon General's Advisory on the Healing Effects of Social Connection and Community. U.S. Department of Health and Human Services.",
     'tier': 'A', 'publisher': 'U.S. Department of Health and Human Services, Office of the Surgeon General', 'year': 2023,
     'supports': [('Y3.1', 'Glossary (p. 7): belonging, loneliness, social isolation', 'y3-04', 'partial')]},
    {'id': 'nrc-iom-2002-community-programs', 'claim': 'y3-03', 'cp': 'CP-12-02',
     'cite_as': 'National Research Council and Institute of Medicine (2002). Community Programs to Promote Youth Development. Washington, DC: The National Academies Press.',
     'tier': 'C', 'publisher': 'The National Academies Press', 'year': 2002,
     'supports': [
         ('Y3.1', "Chapter 5, The Landscape of Community Programs for Youth, section 'Features of Community Programs for Youth', subsection 'Opportunities to Belong'", 'y3-03', 'partial'),
         # Round-2 claim CP-12-02-V1 (PARTIAL): recorded as a partial row; it does not close FD-P01 (G3).
         ('Y3.1', "physical and psychological safety: Chapter 4, Table 4-1 describes it as a trait of the setting; Chapter 5 reports youth's own feelings of safety", 'CP-12-02-V1', 'partial',
          "Round 2 (CP-12-02 V1, PARTIAL): in Chapter 4 (read at chapter/6), Table 4-1 describes the feature by setting traits ('Safe and health-promoting facilities; and practices that increase safe peer group interaction'), with 'fear; feeling of insecurity' only as the opposite pole. The youth-felt-safety framing appears in Chapter 5, so the framing is looser than claimed. A setting's safety does not contain the young person's felt safety, so FD-P01 stays open (G3)."),
     ],
     'notes_extra': "Chapter citation corrected by the verifier (claim y3-03): the chapter is 'Chapter 5: The Landscape of Community Programs for Youth'; 'Features of Community Programs for Youth' is a section in it and 'Opportunities to Belong' a subsection. It describes a feature of program settings, not the young person's felt belonging, so the fit is partial."},
    {'id': 'chafee-42usc677-a2', 'claim': 'y3-05', 'cp': 'CP-12-02',
     'cite_as': '42 U.S.C. 677(a)(2), John H. Chafee Foster Care Program for Successful Transition to Adulthood',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('Y3.2', 'purpose (a)(2): meaningful, permanent connections with a caring adult, for youth who experienced foster care at age 14 or older', 'y3-05', 'direct')],
     'notes_extra': f"Separate pinpoint entry, in the pattern of the essa-6311-* entries, so chafee-42usc677 (677(a)(1), Y7.7) is untouched. {STATUTE_ON_LII} (claim y3-05: section heading matches)."},
    {'id': 'usc-42-671-a15b-reunification', 'claim': 'y3-09', 'cp': 'CP-12-02',
     'cite_as': '42 U.S.C. 671(a)(15)(B), State plan for foster care and adoption assistance: reasonable efforts to preserve and reunify families',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('Y3.4', "(a)(15)(B): reasonable efforts to preserve and reunify families, including making it possible for a child to safely return to the child's home", 'y3-09', 'partial')],
     'notes_extra': f"Agency duty, not a measured youth outcome; recorded as partial with no FD (G4, A3.1 precedent). Clause (ii) adds 'to make it possible for a child to safely return to the child's home' (verifier note). {STATUTE_ON_LII} (claim y3-09: citation and component correct)."},
    {'id': 'rhya-34usc11212-b3', 'claim': 'y3-10', 'cp': 'CP-12-02',
     'cite_as': '34 U.S.C. 11212(b)(3), Runaway and Homeless Youth Act, Basic Center Grant Program: eligibility; plan requirements',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('Y3.4', '(b)(3): ensuring the safe return of the youth according to the best interests of the youth', 'y3-10', 'partial')],
     'notes_extra': f"A grantee plan assurance rather than a youth outcome (verifier note), so partial with no FD (G4). {STATUTE_ON_LII} (claim y3-10: section heading 'Eligibility; plan requirements')."},
]

# (source, code, component, claim, fit, note); fit None = from the verdict, note None = the claim's own.
NEW_SUPPORTS = [
    # y3-02 is SUPPORTED but recorded partial: mattering is one part of Y3.1.
    ('search-40-assets', 'Y3.1', 'Empowerment: Community values youth (young person perceives that adults in the community value youth)', 'y3-02', 'partial', None),
    ('search-40-assets', 'Y3.2', 'Support: Other adult relationships (support from three or more nonparent adults)', 'y3-07', 'direct', None),
    ('acf-nytd', 'Y3.2', "NYTD outcome 'positive connections with adults' (youth in or aging out of foster care)", 'y3-06', 'direct', None),
    ('search-developmental-relationships', 'Y3.5', "Expand Possibilities: Connect ('Introduce me to people who can help me grow')", 'y3-11', 'direct', None),
]

# ---------------------------------------------------------------- CP-12-03 (Y4)
# shape-nhes-2024: attribution filled (R-07; claims y4b-05, y4b-06, y4b-10).
CITE_AS = {'shape-nhes-2024': 'SHAPE America - Society of Health and Physical Educators (2024). National Health Education Standards.'}
PUBLISHER = {'shape-nhes-2024': 'SHAPE America - Society of Health and Physical Educators'}
YEAR = {'shape-nhes-2024': 2024}  # from SHAPE's press release of March 25, 2024 (verifier notes y4b-05, y4b-10)
TIER = {'shape-nhes-2024': 'B'}   # recognized standards body (S1.2)
CODEBOOK_NAMES = {'shape-nhes-2024': ['National Health Education Standards']}
NOTES = {
    'shape-nhes-2024': "CP-12-03 (2026-10-16): the Y4.12 support now quotes a 2024 Standard 4 refusal indicator that is on the page. The CP-10-02 quote 'Demonstrate refusal skills to avoid or reduce health risks' was verified on schoolhealtheducation.org/standard-4/ (claim new-nhes-std4), the National Consensus for School Health Education's separate 2022 set, and was attached to this SHAPE entry by mistake; round-2 claim CP-12-03-V1 confirmed the phrase is not on the 2024 page. The earlier verifier note that this site 'is published by the National Consensus for School Health Education' conflated the two documents.",
}
RECORD_ONLY += ['y4b-10']

# Y4.12 re-quote (CP-12-03, with the round-2 result): the support quotes the verifier's own
# verbatim 2024 indicator 4.5.5 (round-2 claim CP-12-03-V1, which found the old phrase absent) and
# is recorded as partial: refusal skills "in a variety of situations" do not name avoiding health
# risks or unsafe situations. The fit rests on claim y4b-10 (all three refusal indicators on the page).
Y412_NHES_NOTE = ("Round 2 (CP-12-03 V1, 2026-10-16): the phrase 'Demonstrate refusal skills to avoid or reduce health risks' "
                  "is not on the 2024 page; the closest is the grades 3-5 indicator quoted here (4.5.5), which does not mention "
                  "health risks. Claim y4b-10 found all three refusal indicators word for word on the page: 4.5.5, 4.8.5 'Use refusal "
                  "skills and strategies in a variety of situations.' and 4.12.5 'Apply refusal skills and strategies in a variety of "
                  "situations.' Recorded as partial: refusal only, not avoiding unsafe situations (FD-P24).")
SUPPORT_RECHECK = {
    ('shape-nhes-2024', 'Y4.12'): ('y4b-10', 'partial', Y412_NHES_NOTE),
}
QUOTE_ONLY = {('shape-nhes-2024', 'Y4.12'): 'CP-12-03-V1'}
COMPONENTS = {
    ('shape-nhes-2024', 'Y4.12'): 'Standard 4 refusal-skills indicators 4.5.5, 4.8.5, 4.12.5',
    # CP-10-01's override named both bullets but kept a teamwork-only excerpt; leadership gets its own support.
    ('casel-2020', 'Y4.7'): "Relationship Skills: 'Practicing teamwork and collaborative problem-solving'",
}
NEW_SUPPORTS += [
    ('shape-nhes-2024', 'Y4.12', 'Standard 4, indicator 4.2.3: communication skills and strategies to use if uncomfortable, unsafe, or harmed', 'y4b-11', 'partial', None),
    ('shape-nhes-2024', 'Y4.9', 'Standard 3, indicator 3.5.2: locate home, school, and community resources to support health and well-being', 'y4b-05', 'direct', None),
    ('shape-nhes-2024', 'Y4.9', 'Standard 4, indicator 4.8.3: use various communication strategies to seek and offer support and assistance', 'y4b-06', 'direct', None),
    ('casel-2020', 'Y4.2', "Self-Management definition: 'manage one's emotions, thoughts, and behaviors effectively in different situations'; 'delay gratification, manage stress'", 'y4a-08', 'direct', None),
    ('casel-2020', 'Y4.4', "Social Awareness: 'Understanding and expressing gratitude'", 'y4a-05', 'direct', None),
    ('casel-2020', 'Y4.4', "Social Awareness: 'Showing concern for the feelings of others'", 'y4a-06', 'direct', None),
    ('casel-2020', 'Y4.7', "Relationship Skills: 'Showing leadership in groups'", 'y4b-01', 'direct', None),
    ('casel-2020', 'Y4.8', "Relationship Skills definition: 'establish and maintain healthy and supportive relationships'", 'y4b-03', 'direct', None),
    ('casel-2020', 'Y4.9', "Social Awareness definition: 'recognize family, school, and community resources and supports'", 'y4b-04', 'direct', None),
    ('casel-2020', 'Y4.11', "Responsible Decision-Making definition: 'make caring and constructive choices about personal behavior and social interactions across diverse situations'; 'consider ethical standards'", 'y4b-07', 'direct', None),
    ('casel-2020', 'Y4.12', "Responsible Decision-Making definition: 'consider ethical standards and safety concerns'", 'y4b-09', 'partial', None),
    ('learning-for-justice-sjs', 'Y4.5', 'Diversity standard 6: express comfort with people who are both similar to and different from them and engage respectfully with all people (2022 Second Edition PDF)', 'y4a-03', 'direct', None),
]

# ---------------------------------------------------------------- CP-12-16 (registry part, lands now)
# The Source lines that print these names wait for the gate; the registry rows land first (G10).
NEW += [
    {'id': 'ccss-speaking-listening-anchors', 'claim': 'y4a-01', 'cp': 'CP-12-16',
     'cite_as': 'National Governors Association Center for Best Practices & Council of Chief State School Officers (2010). Common Core State Standards for English Language Arts: College and Career Readiness Anchor Standards for Speaking and Listening.',
     'codebook_names': ['Common Core State Standards, Speaking and Listening'],
     'tier': 'B', 'publisher': 'National Governors Association Center for Best Practices; Council of Chief State School Officers', 'year': 2010,
     'supports': [('Y4.6', 'Presentation of Knowledge and Ideas, CCRA.SL.4: present information, findings and supporting evidence to an audience', 'y4a-01', 'direct')],
     'notes_extra': "Public speaking is an instance of CASEL 'Communicating effectively', which does not name speaking to an audience (CP-10-01 verifier). Read on thecorestandards.org, the publishers' own site (G8)."},
]
NEW_SUPPORTS += [
    ('casel-2020', 'Y4.6', "Relationship Skills definition: 'communicate clearly, listen actively'", 'y4a-02', 'direct', None),
]
CODEBOOK_NAMES['acf-nytd'] = ['National Youth in Transition Database']
CODEBOOK_NAMES['chafee-42usc677-a2'] = ['Chafee, 42 U.S.C. 677(a)(2)']

# ---------------------------------------------------------------- CP-12-20 (CASEL URL of record)
# Round-2 claims CP-12-20-V-CASEL-1-* re-read each CASEL component on the 11.2020 PDF. Fits keep
# their current value (the CP: "with its current fit unchanged unless the verifier says otherwise");
# Y5.1 came back PARTIAL and is already partial. Y2.2 has no CASEL support (CP-12-01 is not applied),
# so its claim is record-only.
CASEL_URL = 'https://casel.s3.us-east-2.amazonaws.com/CASEL-SEL-Framework-11.2020.pdf'
URLS = {'casel-2020': CASEL_URL}  # was the sites/5 'The CASEL 5' handout
SOURCE_EXCERPT = {'casel-2020': 'y4a-10'}
NOTES_REPLACE = {'casel-2020': (
    "URL of record (CP-12-20, 2026-10-16): the 11.2020 PDF, which carries the cited title and all five "
    "competencies (claim y4a-10). Alternate copies with the same component wording: the handout titled "
    "'The CASEL 5' at https://casel.s3.us-east-2.amazonaws.com/sites/5/CASEL-Framework-and-Skills.pdf "
    "(read in CP-10-01) and the page https://casel.org/casel-sel-framework-11-2020/ (claims y2-05, y5-03). "
    "No copy prints a date; the year 2020 rests on the file name and URL slug (y4a-10, y5-03). "
    "Self-Awareness bullets by code (CP-12-20; the full list of nine is claim CP-12-20-V-CASEL-1-self-awareness-list): "
    "'Identifying one's emotions' -> Y4.1; 'Examining prejudices and biases' -> Y4.5; 'Integrating personal and "
    "social identities' -> Y5.1; 'Experiencing self-efficacy' and 'Having a growth mindset' -> Y5.4; 'Developing "
    "interests and a sense of purpose' -> Y5.5 (verified, y5-03; not cited, Y5.5 rests on Search Institute); "
    "'Linking feelings, values, and thoughts' and 'Identifying personal, cultural, and linguistic assets' -> no code "
    "cites them (partial fits only: y4a-07, y5-12, y5-10); 'Demonstrating honesty and integrity' -> no code cites it "
    "(found by V-CASEL-1, not allocated). Other CASEL skills with no code of their own are routed by rulesText rule 14."
)}
RECORD_ONLY += ['CP-12-20-V-CASEL-1-Y2.2', 'CP-12-20-V-CASEL-1-self-awareness-list']
_CASEL_RECHECK = [  # (code, component as in the registry, current fit)
    ('Y4.1', "Self-Awareness: 'Identifying one's emotions'", 'direct'),
    ('Y4.3', "Self-Management: 'Setting personal and collective goals'; 'Exhibiting self-discipline and self-motivation'; 'Using planning and organizational skills'", 'direct'),
    ('Y4.4', "Social Awareness: 'Taking others' perspectives'; 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones'", 'direct'),
    ('Y4.5', "Relationship Skills: 'Demonstrating cultural competency'; Self-Awareness: 'Examining prejudices and biases'", 'direct'),
    ('Y4.6', "Relationship Skills: 'Communicating effectively'", 'partial'),
    ('Y4.10', "Responsible Decision-Making: 'Identifying solutions for personal and social problems'; 'Anticipating and evaluating the consequences of one's actions'", 'direct'),
    ('Y4.12', "Relationship Skills: 'Resisting negative social pressure'", 'partial'),
    ('Y5.1', "Self-Awareness: 'Integrating personal and social identities'", 'partial'),
    ('Y5.4', "Self-Awareness: 'Experiencing self-efficacy'; 'Having a growth mindset'", 'direct'),
]
for _code, _comp, _fit in _CASEL_RECHECK:
    SUPPORT_RECHECK[('casel-2020', _code, _comp)] = (f'CP-12-20-V-CASEL-1-{_code}', _fit, None)
SUPPORT_NOTE_APPEND = {}
# The CP-10-01 rows outside V-CASEL-1 keep their excerpts; their notes say which copy they were read on.
_HANDOUT = (' Read on the sites/5 handout in CP-10-01 (same wording as the URL of record, CP-12-20); '
            'not re-read on the 11.2020 PDF.')
for _code, _comp in [
    ('Y4.2', "Self-Management: 'Managing one's emotions'; 'Identifying and using stress-management strategies'"),
    ('Y4.7', "Relationship Skills: 'Practicing teamwork and collaborative problem-solving'"),
    ('Y4.8', "Relationship Skills: 'Developing positive relationships'; 'Resolving conflicts constructively'"),
    ('Y4.9', "Relationship Skills: 'Seeking or offering support and help when needed'"),
    ('Y4.11', "Responsible Decision-Making: 'Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being'"),
]:
    SUPPORT_NOTE_APPEND[('casel-2020', _code, _comp)] = _HANDOUT

# ---------------------------------------------------------------- CP-12-01 (Y2), applied in 3.3.0
# Waited for PR #62 (decision G7: the Y2 count is taken on the merged Y2.5/Y2.6 text). Round 2:
# V1 (CP-12-01-V1, CASEL and willingness to try) NOT SUPPORTED; V2 (CP-12-01-V2, Hidi & Renninger
# phase 1 and trying a new activity) PARTIAL, and its note says the source does not contain the
# element, so FD-P38 (provisional FD-P41) opens (G3); V3 (CP-12-01-V3) PARTIAL only because the
# copy is a course host, with the full bibliographic match recorded, so the Hidi & Renninger
# re-checks apply and the URL of record becomes the DOI (G8).
RECORD_ONLY += ['CP-12-01-V1', 'CP-12-01-V2', 'CP-12-01-V3', 'y2-09']
NEW += [
    {'id': 'pekrun-2024-control-value', 'claim': 'y2-01', 'cp': 'CP-12-01',
     'cite_as': 'Pekrun, R. (2024). Control-Value Theory: From Achievement Emotion to a General Theory of Human Emotions. Educational Psychology Review, 36, Article 83.',
     'codebook_names': ['Pekrun (2024)'],
     'tier': 'C', 'publisher': 'Educational Psychology Review', 'year': 2024,
     'url': 'https://doi.org/10.1007/s10648-024-09909-7',
     'supports': [
         ('Y2.1', 'activity emotions: enjoyment during learning', 'y2-01', 'direct'),
         ('Y2.1', 'achievement settings named as school, university and the workplace', 'y2-02', 'partial'),
         # Verdict SUPPORTED, recorded partial: achievement pride only; pride in membership is FD-P37.
         ('Y2.1', 'outcome emotions: pride (pride in an achievement outcome only)', 'y2-03', 'partial'),
     ],
     'notes_extra': "Full text read on the University of Essex repository copy (https://repository.essex.ac.uk/39185/1/Pekrun%20Ed%20Psych%20Rev%202024%20Control-Value%20Theory.pdf). Bibliographic match recorded by the verifier (claim y2-01): the header reads 'Educational Psychology Review (2024) 36:83' with DOI 10.1007/s10648-024-09909-7. Replaces Muhammad's Joy as Y2.1's anchor (S1.6)."},
    {'id': 'oecd-sses-2021-houston', 'claim': 'y2-06', 'cp': 'CP-12-01',
     'cite_as': 'OECD (2021). Survey on Social and Emotional Skills (SSES): Houston (United States). OECD.',
     'tier': 'B', 'publisher': 'OECD', 'year': 2021,
     'supports': [('Y2.2', 'Open-mindedness: Curiosity', 'y2-06', 'direct')],
     'notes_extra': 'OECD-hosted report (official copy). Corroborates CASEL for Y2.2 in the registry and `basis`; not named in a Source line. The SSES creativity definition (claim y2-12) is not used: bare creativity is not routed to Y2.5.'},
    {'id': 'eccles-wigfield-2020-sevt', 'claim': 'y2-10', 'cp': 'CP-12-01',
     'cite_as': 'Eccles, J. S., & Wigfield, A. (2020). From expectancy-value theory to situated expectancy-value theory: A developmental, social cognitive, and sociocultural perspective on motivation. Contemporary Educational Psychology, 61, 101859.',
     'tier': 'C', 'publisher': 'Contemporary Educational Psychology', 'year': 2020,
     'url': 'https://doi.org/10.1016/j.cedpsych.2020.101859',
     'supports': [('Y2.4', "subjective task value: utility value, how well a task fits into an individual's present or future plans", 'y2-10', 'direct')],
     'notes_extra': "Claim y2-09 (ACU repository record, SUPPORTED): 'justify our decision to call the theory Situated Expectancy-Value Theory (SEVT)'. Bibliographic match recorded there: authors, Contemporary Educational Psychology 61, article 101859 (2020), DOI 10.1016/j.cedpsych.2020.101859. Excerpt y2-10 read on a third-party full-text copy (msofc.org), which shows the Elsevier copyright; the verifier tied it to the ACU record. The 2000 statement stays as eccles-expectancy-value."},
]
NEW_SUPPORTS += [
    # y2-05 is SUPPORTED (the bullet exists), but round-2 claim CP-12-20-V-CASEL-1-Y2.2 (PARTIAL) read it
    # on the URL of record as a decision-making disposition broader than triggered interest. Recorded
    # partial; the source is broader than the code, so no FD (G3).
    ('casel-2020', 'Y2.2', "Responsible Decision-Making: 'Demonstrating curiosity and open-mindedness'", 'y2-05', 'partial',
     "The bullet is verbatim (claim y2-05, SUPPORTED, read at casel.org/casel-sel-framework-11-2020/). Round 2 (CP-12-20 V-CASEL-1-Y2.2, PARTIAL, read on the 11.2020 PDF): CASEL places it under Responsible Decision-Making as a disposition, and open-mindedness is broader than Y2.2's triggered interest and curiosity; it gives no wording about trying new activities (CP-12-01-V1, NOT SUPPORTED). Broader than the code, so partial with no FD (G3). Rule 14 routes CASEL curiosity here."),
]
SUPPORT_RECHECK.update({
    ('hidi-renninger-2006', 'Y2.2'): ('y2-07', 'direct',
        "Phase 1 confirmed in the full text (claim y2-07), read on a University of Tartu course copy whose bibliographic match is recorded in round-2 claim CP-12-01-V3 (title, authors, Educational Psychologist 41(2) 111-127, DOI 10.1207/s15326985ep4102_4). Phase 1 is 'typically, but not exclusively, externally supported' (y2-07 note). 'Willingness to try a new activity' is not in it (CP-12-01-V2, PARTIAL): FD-P38."),
    ('hidi-renninger-2006', 'Y2.3'): ('y2-08', 'direct',
        "Phases 2-4 confirmed in the full text (claim y2-08), read on a University of Tartu course copy whose bibliographic match is recorded in round-2 claim CP-12-01-V3."),
})
SOURCE_EXCERPT['hidi-renninger-2006'] = 'y2-08'
URLS['hidi-renninger-2006'] = 'https://doi.org/10.1207/s15326985ep4102_4'  # was the Swarthmore repository record
YEAR['eccles-expectancy-value'] = 2000  # was null; cite_as already says 2000
NOTES.update({
    'eccles-expectancy-value': 'The theory was renamed Situated Expectancy-Value Theory in 2020 (eccles-wigfield-2020-sevt, CP-12-01); this entry keeps the 2000 utility-value definition.',
    'hidi-renninger-2006': "URL of record is the DOI (G8; CP-12-01). Full text read 2026-10-16 on a University of Tartu course copy (https://sciencecommunication.ut.ee/wp-content/uploads/2018/09/Article-5-The-Four-Phase-Model-of-Interest-Development.pdf; claims y2-07, y2-08; bibliographic match: round-2 claim CP-12-01-V3, PARTIAL only because the host is a course site) and in CP-10-01 on the Swarthmore repository.",
    'muhammad-five-pursuits': 'Y2.1: no longer the anchor; Pekrun (2024) replaces it in the Y2.1 Source line (CP-12-01, CP-12-16). The Y2.1 support is kept as a partial pointer.',
})
