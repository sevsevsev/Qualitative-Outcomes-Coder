"""Batch 3 of the 2026-10-16 research review (3.1.5): the CDC YRBS 2025 instruments
(CP-12-23), Y8 (CP-12-07), F1 (CP-12-08), F2 (CP-12-09), the Epstein entry (CP-12-22,
registry part) and the status notes of CP-12-24 items 2, 6, 8 and 9.

Applied by build_registry.py through review_2026_10_16.apply_all(). Verdicts are
copied in source-verification-2026-10-16-b3.json from full-review/batch3/verify/
(round 1) and full-review/verify-round2/ (round 2).
"""

RECORD_FILE = 'source-verification-2026-10-16-b3.json'
RECORD_ONLY = []
HP = 'U.S. DHHS, Office of Disease Prevention and Health Promotion'

# ---------------------------------------------------------------- CP-12-23 (YRBS 2025)
NEW = [
    {'id': 'cdc-yrbs-2025-standard-hs', 'claim': 'y8a-08', 'cp': 'CP-12-23',
     'cite_as': 'Centers for Disease Control and Prevention (2025). 2025 State and Local Youth Risk Behavior Survey (standard high school questionnaire).',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2025,
     'codebook_names': ['CDC Youth Risk Behavior Survey'],
     'supports': [
        ('Y8.1', 'Q83 hours of sleep on an average school night', 'y8a-08'),
        ('Y8.1', 'Q73 days physically active at least 60 minutes', 'y8a-09'),
        ('Y8.1', 'Q66, Q67, Q69, Q70 fruit and vegetable items', 'y8a-10'),
        ('Y8.4', 'Q59 condom use and Q60 pregnancy-prevention method at last sexual intercourse', 'y8a-21'),
        ('Y8.5', 'Q80 last dental check-up, exam or cleaning', 'y8a-27')]},
    {'id': 'cdc-yrbs-2025-national-hs', 'claim': 'y8b-11', 'cp': 'CP-12-23',
     'cite_as': 'Centers for Disease Control and Prevention (2025). 2025 National Youth Risk Behavior Survey (high school questionnaire).',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2025,
     'codebook_names': ['CDC Youth Risk Behavior Survey'],
     'supports': [
        ('Y8.9', 'Q94 experience with counseling or therapy', 'y8b-07'),
        ('Y8.12', 'Q11, Q12 weapon and gun carrying; Q16 physical fight; Q21, Q22 sexual and physical dating violence; Q26, Q27 bullied at school and electronically', 'y8b-11')]},
]
SUPPORT_RECHECK = {('cdc-yrbss', 'Y8.12'): ('y8b-12', 'direct', None)}
COMPONENTS = {('cdc-yrbss', 'Y8.12'): 'Student experiences: exposure to community violence'}
CODEBOOK_NAMES = {'cdc-yrbss': ['CDC Youth Risk Behavior Survey']}
NOTES = {'cdc-yrbss': ('This entry is the YRBSS About page. Item-level supports use the two 2025 instruments as separate entries '
                       '(cdc-yrbs-2025-standard-hs, cdc-yrbs-2025-national-hs), because their item numbers differ (batch 3 R-02; CP-12-23).')}

# ---------------------------------------------------------------- CP-12-07 (Y8), with round 2
RECORD_ONLY += ['y8b-14', 'CP-12-07-V2', 'CP-12-07-V4b', 'CP-12-07-V5', 'CP-12-07-V5b']
NEW += [
    {'id': 'cdc-hecat-2021', 'claim': 'y8a-01', 'cp': 'CP-12-07', 'prefix_url': True,
     'cite_as': 'Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), 2021 edition.',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2021,
     'supports': [
        ('Y8.1', 'Module PA, HBO 1: moderate to vigorous activity 60 minutes every day', 'y8a-02'),
        ('Y8.1', 'Module PA, HBO 2: activities for endurance, flexibility and strength', 'y8a-03'),
        ('Y8.1', 'Module FN, HBO 3: eat lots of fruits and vegetables', 'y8a-04'),
        ('Y8.1', 'Module FN, HBO 10: prepare nutrient-dense foods', 'y8a-05'),
        ('Y8.1', 'Module PHW, HBO 1: hygiene habits', 'y8a-06'),
        ('Y8.1', 'Module PHW, HBO 2: sleep and rest', 'y8a-07'),
        # Round 2, V12 (PARTIAL): sedentary behavior, not screen time; FD-P32 opens for screen time.
        ('Y8.1', 'Module PA, PA7.8.2 (also PA7.12.2): practices that reduce or prevent sedentary behavior (skill level; screen time is not named)', 'CP-12-07-V12', 'partial'),
        ('Y8.3', 'Module S, HBO 4: safety rules to avoid injury (outdoor safety as a named instance, G5)', 'y8a-17'),
        ('Y8.3', 'Module S, HBO 7: get help when injured or suddenly ill (allergic reactions as a named instance, G5)', 'y8a-18'),
        ('Y8.5', 'Module PHW, HBO 9-10: prevent and manage chronic conditions', 'y8a-22'),
        ('Y8.5', 'Module PHW, HBO 11: screenings and examinations (dental and vision as named instances, G5)', 'y8a-23'),
        # Round 2, V13 (SUPPORTED): immunizations in general, knowledge level.
        ('Y8.5', 'Module PHW, knowledge expectation PHW1.12.14: health screenings, immunizations, checkups and examinations (immunizations in general; knowledge level)', 'CP-12-07-V13'),
        # Round 2, V3 and V4 (SUPPORTED): knowledge of substance-use risks.
        ('Y8.11', 'Module AOD, knowledge expectation AOD1.5.9: risks of alcohol and marijuana use', 'CP-12-07-V3'),
        ('Y8.11', 'Module T, knowledge expectation T1.5.1: short- and long-term health effects of tobacco, e-cigarette and vaping products', 'CP-12-07-V4')],
     'notes_extra': 'Module-level supports were read in the module PDFs (hecat_module_pa.pdf, _fn.pdf, _phw.pdf, _s.pdf, _aod.pdf and _t.pdf under https://www.cdc.gov/healthy-youth/hecat/pdfs/); each support verifier_note starts with the PDF it was read in. Round 2 (2026-10-16): the AOD and Tobacco modules cover knowledge of risks (V3, V4); the PHW module names immunizations in general (V13); the PA module covers sedentary behavior but not screen time (V12, partial); the Violence Prevention module has no dating-violence warning signs (V5, not supported).'},
    {'id': 'hp2030-pa06', 'claim': 'y8a-11', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, objective PA-06: Increase the proportion of adolescents who do enough aerobic physical activity. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.1', 'adolescent aerobic physical activity')]},
    {'id': 'hp2030-pa-r02', 'claim': 'y8a-12', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, research objective PA-R02: Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.1', "parents following AAP recommendations on limiting children's screen time (the parent is the actor; not a source for the young person's own screen time, G3)")],
     'notes_extra': "Partial and kept for evidence only: the parent is the actor, so the row does not cover the young person's own screen time (G3). Round-2 claim CP-12-07-V12 found no youth-level screen-time source (HECAT PA names sedentary behavior only), so FD-P32 is open."},
    {'id': 'hp2030-oh08', 'claim': 'y8a-25', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, objective OH-08: Increase use of the oral health care system. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.5', 'use of the oral health care system')]},
    {'id': 'hp2030-mich17', 'claim': 'y8a-26', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, objective MICH-17: Increase the proportion of children who receive a developmental screening. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.5', 'developmental screening of young children (early-childhood statements only)')],
     'notes_extra': 'Early-childhood source, allowed because developmental screening of infants and toddlers is about young children by definition (early-childhood rule; S061).'},
    {'id': 'hp2030-iid08', 'claim': 'y8a-24', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, objective IID-08: Increase the proportion of adolescents who get recommended doses of the HPV vaccine. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.5', 'adolescent HPV vaccination (one vaccine, ages 13-15; narrower than "immunizations", G3)')],
     'notes_extra': 'Partial and kept for evidence only: one vaccine, so it does not cover "immunizations" in general (G3). Round-2 claim CP-12-07-V13 found a general source (HECAT PHW1.12.14), so no entry was opened for immunizations.'},
    {'id': 'hp2030-mhmd03', 'claim': 'y8b-05', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, objective MHMD-03: Increase the proportion of children with mental health problems who get treatment. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.9', 'children (4-17) with mental health problems who receive treatment')]},
    {'id': 'hp2030-mhmd06', 'claim': 'y8b-06', 'cp': 'CP-12-07',
     'cite_as': 'Healthy People 2030, objective MHMD-06: Increase the proportion of adolescents with depression who get treatment. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('Y8.9', 'adolescents (12-17) with major depressive episodes who receive treatment')]},
    {'id': 'mtf-2026-vol1', 'claim': 'y8b-10', 'cp': 'CP-12-07',
     'cite_as': "Miech, R. A., Patrick, M. E., O'Malley, P. M., Jager, J. O., & Jang, J. B. (2026). Monitoring the Future national survey results on drug use, 1975-2025: Overview and detailed results for secondary school students. Institute for Social Research, University of Michigan.",
     'tier': 'C', 'publisher': 'Institute for Social Research, University of Michigan', 'year': 2026,
     'supports': [('Y8.11', 'perceived risk of substance use (the survey\'s paired "disapproval" measure is not relied on; source broader than the code, G3)')],
     'notes_extra': 'Round-2 claim CP-12-07-V4b (not supported): the volume reports no measure of future-use intentions, so "intentions" in Y8.11 stays a logged element (FD-P30).'},
    {'id': 'cdc-youth-violence-2024', 'claim': 'y8b-13', 'cp': 'CP-12-07',
     'cite_as': 'Centers for Disease Control and Prevention (2024). About Youth Violence.',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2024,
     'supports': [('Y8.12', 'definition of youth violence: fighting, bullying, threats with weapons, gang-related violence')]},
    {'id': 'ojjdp-2017-diversion-review', 'claim': 'y8b-16', 'cp': 'CP-12-07',
     'cite_as': 'Office of Juvenile Justice and Delinquency Prevention (2017, February). Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing. NCJ 249701.',
     'tier': 'A', 'publisher': 'Office of Juvenile Justice and Delinquency Prevention', 'year': 2017,
     'supports': [('Y8.13', 'diversion of youth from formal juvenile court processing')]},
]
NEW_SUPPORTS = [
    ('shape-nhes-2024', 'Y8.3', "Standard 3, indicator 3.8.3: 'Access valid and reliable sources of health information'", 'y8a-15', None, None),
    ('shape-nhes-2024', 'Y8.3', "Standard 1, indicators 1.2.3 and 1.5.3: 'prevent or reduce risks for illnesses and injuries'", 'y8a-16', None, None),
    ('nses-2020', 'Y8.4', 'SH.8.CC.2 methods of contraception and how to access them; SH.12.GS.1 plan to access local services', 'y8a-19', None, None),
]
SUPPORT_RECHECK[('nctsn-core-curriculum', 'Y8.8')] = ('y8b-04', 'partial', None)
COMPONENTS[('nctsn-core-curriculum', 'Y8.8')] = 'Core Concept 5: danger and safety are core concerns in the lives of traumatized children (Concept 10, culture, is not relied on)'
CITE_AS = {
    'nctsn-core-curriculum': 'Layne, C. M., Strand, V., & NCTSN Core Curriculum on Childhood Trauma Task Force (2012). 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood. National Child Traumatic Stress Network.',
    'cjca-2009': 'Harris, P. W., Lockwood, B., & Mengers, L. (2009, November). Defining and Measuring Recidivism: A CJCA White Paper. Council of Juvenile Correctional Administrators. NCJ 237765.',
}
NOTES.update({
    'nctsn-core-curriculum': "Title corrected 2026-10-16 (claim y8b-04): the document's own title is '12 Core Concepts for Understanding Traumatic Stress Responses in Childhood'.",
    'cjca-2009': "Title corrected 2026-10-16 (claim y8b-14, PARTIAL: the NCJRS abstract confirms title, authors, date and CJCA authorship, not the recidivism detail; the full-text URL and excerpt are kept). NCJRS record: https://www.ojp.gov/ncjrs/virtual-library/abstracts/cjca-white-paper-defining-and-measuring-recidivism.",
})

# ---------------------------------------------------------------- CP-12-08 (F1), with round 2
RECORD_ONLY += ['CP-12-08-V6', 'CP-12-08-V7', 'CP-12-08-V14']
NEW += [
    {'id': 'cssp-core-meanings', 'claim': 'f1-02', 'cp': 'CP-12-08',
     # Round-2 claim CP-12-08-V6 (PARTIAL): its corrected citation replaces the CP's (G: corrected_cite_as wins).
     'cite_as': 'Center for the Study of Social Policy. (n.d.; posted October 16, 2018). Core Meanings of the Strengthening Families Protective Factors.',
     'tier': 'D', 'publisher': 'Center for the Study of Social Policy', 'year': None,
     'supports': [
        ('F1.1', 'Knowledge of Parenting and Child Development: understanding child development and parenting strategies', 'f1-02'),
        ('F1.4', 'Parental Resilience: managing stress and functioning well', 'f1-01'),
        ('F1.2', 'Knowledge of Parenting and Child Development: regular, predictable and consistent routines (framed as parenting knowledge; not broader than the code, G3)', 'f1-14')],
     'notes_extra': ("The PDF prints neither CSSP's name nor a year, only the cssp.org address, and the file is hosted on cssp.org. '2015' appears only in the file name, and "
                     "CSSP's resource page, which names CSSP as author, is dated October 16, 2018 (round-2 claim CP-12-08-V6, PARTIAL: the 2018 date may only be when the page was posted), "
                     "so no year is cited (S1.4). The Parental Resilience list's placement is inferred from the table layout (f1-01). The F1.2 routines item is framed as parenting "
                     "knowledge, hence partial (f1-14); it does not cover F1.2's routines element (G3), and round-2 claim CP-12-08-V14 found no household-routines source, so FD-P34 is open.")},
    {'id': 'snap-ed-framework-mt1', 'claim': 'f1-11', 'cp': 'CP-12-08',
     'cite_as': 'U.S. Department of Agriculture, Food and Nutrition Service. SNAP-Ed Evaluation Framework, MT1: Nutrition-Related Behavioral Changes.',
     'tier': 'A', 'publisher': 'U.S. Department of Agriculture, Food and Nutrition Service', 'year': None,
     'supports': [('F1.3', 'MT1: changes in individual and family healthy eating behaviors, including fruit and vegetable intake', 'f1-11')],
     'notes_extra': ("Some MT1 respondents may be youth participants rather than families (f1-11 verifier). Round-2 claim CP-12-08-V7 could not read an archived snapshot "
                     "(web.archive.org blocked for the verifier), and it reported that the live MT1 page now reads 'Indicator MT1 measures healthy eating behavioral changes "
                     "reported by SNAP-Ed participants...' rather than the excerpt above, which claim f1-11 read on the same page. The page is live, so no entry was opened "
                     "for F1.3; re-check the excerpt at the next review.")},
    {'id': 'wioa-title-ii-aefla', 'claim': 'CP-12-08-V10', 'cp': 'CP-12-08',
     'cite_as': 'Workforce Innovation and Opportunity Act, Title II (Adult Education and Family Literacy Act), 29 U.S.C. 3272(1) and 3272(6).',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'url': 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section3272&num=0&edition=prelim',
     'supports': [
        ('F1.6', '3272(1) adult education: instruction below the postsecondary level in English and mathematics toward a secondary school diploma or equivalent, transition to postsecondary education, and employment', 'f1-06'),
        ('F1.6', '3272(6) English language acquisition program for adult English language learners', 'f1-07')],
     'notes_extra': ("Read on law.cornell.edu (f1-06, f1-07); round-2 claim CP-12-08-V10 (SUPPORTED) matched paragraphs (1) and (6) word for word on the official OLRC "
                     "U.S. Code copy (preliminary edition), now the source URL (G8). Covers any adult, including older adults (decision G1: no FD for F1.6 'older adults'). "
                     "3272(9) family literacy (f1-10, PARTIAL) is not used: it lists program activities.")},
]

# ---------------------------------------------------------------- CP-12-09 (F2), with round 2
# V8 (USDA nutrition security title) was NOT SUPPORTED: the failure path is taken, the row is not
# added and FD-P35 opens for F2.2. V9 (CFPB age range) is PARTIAL and recorded in the note.
RECORD_ONLY += ['CP-12-09-V8', 'CP-12-09-V9']
NEW_SUPPORTS += [
    ('acf-nytd', 'F2.1', 'NYTD outcome: financial self-sufficiency (youth surveyed around ages 17, 19 and 21)', 'f2-01', None, None),
    ('hp2030-ah01-ahs01', 'F2.1', 'AHS-01: persons under 65 with public or private health insurance (a coverage measure; Medicaid is one qualifying type, G5)', 'f2-03', 'partial',
     'Read at https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/health-care-access-and-quality/increase-proportion-people-health-insurance-ahs-01/data-methodology. '
     "AHS-01 counts any coverage, public or private (data source NHIS); Medicaid is only one of the qualifying types listed in the methodology notes. It is broader than F2.1's 'Medicaid enrollment' include line and is a coverage measure, not a benefits-enrollment measure."),
]
NEW += [
    {'id': 'cfpb-financial-well-being-2015', 'claim': 'f2-02', 'cp': 'CP-12-09',
     'cite_as': 'Consumer Financial Protection Bureau (2015, December). Measuring financial well-being: A guide to using the CFPB Financial Well-Being Scale.',
     'tier': 'A', 'publisher': 'Consumer Financial Protection Bureau', 'year': 2015,
     'supports': [('F2.1', 'Section 2.1, what financial well-being is: meeting current and ongoing obligations, control over finances, a financial cushion')],
     'notes_extra': ("Separate from cfpb-building-blocks-2016 (Y7.6). A household's or adult's financial state goes to F2.1; a young person's own financial "
                     "knowledge, habits or decisions go to Y7.6 (rulesText rule 11; CF-001 in 2.x terms). A caregiver learning a financial skill goes to F1.6 "
                     "(decision F1-1; CF-034). Its names must not collide with Y7.6's. Age range (round-2 claim CP-12-09-V9, PARTIAL): the guide aims at "
                     "'all adults', defines adult as 18 and older, and scores ages 18-61 and 62 and older; it does not state the age range of the development samples.")},
    {'id': 'hp2030-nws01', 'claim': 'f2-05', 'cp': 'CP-12-09',
     'cite_as': 'Healthy People 2030, objective NWS-01: Reduce household food insecurity and hunger. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('F2.2', 'household food insecurity and hunger')]},
    {'id': 'rhy-45cfr1351', 'claim': 'f2-06', 'cp': 'CP-12-09',
     'cite_as': "Runaway and Homeless Youth Program, 45 CFR Part 1351 (U.S. Department of Health and Human Services, Administration for Children and Families): 1351.30(a)(1) and 1351.31(a)(1) core outcome areas; 1351.1 'safe and appropriate exits', 1351.30(d), 1351.31(e).",
     'tier': 'A', 'publisher': 'U.S. DHHS, Administration for Children and Families', 'year': None,
     'supports': [
        ('F2.3', "core outcome area '(iv) Stable Housing' for Basic Center and Transitional Living youth", 'f2-06'),
        ('F2.3', 'safe and appropriate exits (to a parent, relative or other adult, or to independent living; not to the street or an unknown situation)', 'f2-07')],
     'notes_extra': "f2-07's component paraphrase leaves out the 'another residential program' examples in 1351.1."},
    {'id': 'hp2030-sdoh04', 'claim': 'f2-09', 'cp': 'CP-12-09',
     'cite_as': 'Healthy People 2030, objective SDOH-04: Reduce the proportion of families that spend more than 30 percent of income on housing. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': HP, 'year': None,
     'supports': [('F2.3', 'housing cost burden over 30 percent of income')]},
    {'id': 'hearth-42usc11386a', 'claim': 'CP-12-09-V11', 'cp': 'CP-12-09',
     'cite_as': 'McKinney-Vento Homeless Assistance Act, as amended by the HEARTH Act, 42 U.S.C. 11386a(b)(1)(A)(i), (ii) and (vi): Continuum of Care selection criteria.',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('F2.3', "length of homelessness, returns to homelessness, and new homelessness (criteria for judging a recipient's performance; statutory duty, partial-fit support, G4)", 'f2-08', 'partial')],
     'notes_extra': ('These are performance criteria for Continuum of Care recipients, not household outcome definitions (f2-08), hence partial; a statutory duty counts '
                     'as partial-fit support with no FD (G4). Read on law.cornell.edu (f2-08); round-2 claim CP-12-09-V11 (SUPPORTED) matched clauses (i), (ii) and (vi) '
                     "word for word on the official OLRC copy (preliminary edition), now the source URL (G8). Section heading: '§11386a. Selection criteria'.")},
]

# ---------------------------------------------------------------- CP-12-22 (part a, lands now)
# Epstein moves from the NNPS (2019) compilation to the publisher's own Corwin handout (claim f1-03).
# The handout title follows round-2 claim CP-12-08-V14's corrected_cite_as (its verdict on the F1.2
# routines claim was UNSUPPORTED, so it backs no support; it only names the handout as printed).
# The F1.7 Mapp & Kuttner removal (part b) waits for the gate; F1.9 and A2.6 are not re-pointed.
URLS = {'epstein-six-types': 'https://resources.corwin.com/sites/default/files/5_4-keys_to_partnerships.pdf'}
CITE_AS['epstein-six-types'] = ("Epstein, J. L., et al. (2019). School, Family, and Community Partnerships: Your Handbook for Action (4th ed.). Corwin. "
                                "Handout: The Keys to Successful School, Family, and Community Partnerships (Epstein's Six Types of Involvement: "
                                "1 Parenting, 2 Communicating, 3 Volunteering, 4 Learning at Home, 5 Decision Making, 6 Collaborating with the Community).")
PUBLISHER = {'epstein-six-types': 'Corwin'}
YEAR = {'epstein-six-types': 2019}
SOURCE_EXCERPT = {'epstein-six-types': 'f1-03'}
RECORD_ONLY += ['f1-05']
SUPPORT_RECHECK.update({
    ('epstein-six-types', 'F1.2'): ('f1-03', 'direct', None),
    ('epstein-six-types', 'F1.8'): ('f1-04', 'partial', None),
})
COMPONENTS[('epstein-six-types', 'F1.8')] = 'Type 2 Communicating (the communication clause of F1.8 only)'
SUPPORT_NOTE_APPEND = {
    ('epstein-six-types', 'F1.1'): ' Excerpt read on the NNPS (2019) compilation (CP-10-01); the URL of record is now the Corwin handout (CP-12-22).',
    ('epstein-six-types', 'F1.9'): ' Excerpt read on the NNPS (2019) compilation (CP-10-01). Claim f1-05 (Types 3 and 5, SUPPORTED on the Corwin handout) is applied after CP-09-01 settles F1.9 (PR #62).',
    ('epstein-six-types', 'A2.6'): ' Type 3 excerpt read on the NNPS (2019) compilation (CP-10-01); the same Type 3 text is verified on the Corwin handout (claim f1-05). The component change (Type 6 removed) is held in CP-12-18 for the A2 anchor re-review.',
}
NOTES_REPLACE = {'epstein-six-types': (
    "Primary copy checked 2026-10-16 (CP-12-22, claim f1-03): Corwin handout, footer 'School, Family, and Community Partnerships, "
    "Fourth Edition by J. L. Epstein et al. Copyright © 2019 by Corwin.' The handout is titled 'The Keys to Successful School, "
    "Family, and Community Partnerships' (claim CP-12-08-V14). F1.2 and F1.8 were re-read there (f1-03, f1-04). "
    "Earlier copy: NNPS (2019), Promising Partnership Practices, Johns Hopkins University, "
    "https://nnps.jhucsos.com/wp-content/uploads/2019/10/PPP-2019-Final-Book-web.pdf. The old organizingengagement.org URL "
    "serves unrelated content (CP-10-01)."
)}

# ---------------------------------------------------------------- CP-12-24 items 2, 6, 8, 9 (notes only)
# Item 7 (USDA 2022 nutrition-security page) is left out: CP-12-09's V8 failed, so the entry does not exist.
RECORD_ONLY += ['y8b-15', 'CP-12-24-V-STATUS-1', 'CP-12-24-V-STATUS-2']
NOTES['cjca-2009'] = NOTES['cjca-2009'] + (
    " Rename note (CP-12-24, 2026-10-16): CJCA is now the Council of Juvenile Justice Administrators (CJJA), "
    "'originally incorporated as the Council of Juvenile Correctional Administrators on July 1, 1994' (claim y8b-15, "
    "PARTIAL: attribution only, no construct). The publication's name at release is kept (S1.4)."
)
# V-STATUS-2 came back PARTIAL: a dated end of required funding, not funding that "has ended".
NOTES['snap-ed-framework-mt1'] = (
    "Status note (CP-12-24, 2026-10-16; round-2 claim CP-12-24-V-STATUS-2, PARTIAL): the MT1 page has no funding notice. "
    "The FNS SNAP-Ed Q&A memo of August 13, 2025 (read at "
    "https://fns-prod.azureedge.us/sites/default/files/resource-files/snap-ed-OBBBqas081325.pdf) says OBBB Section 10107 acts "
    "'by ending required funding of SNAP-Ed with the fiscal year (FY) 2025 grant allocation', and that states may spend funds "
    "until September 30, 2026. The MT1 page was live when read (claim f1-11)."
)
# V-STATUS-1 came back SUPPORTED on the SH-04 page, so the banner wording is quoted rather than reported.
HP_BANNER = ("Status note (CP-12-24, 2026-10-16; round-2 claim CP-12-24-V-STATUS-1, read on the SH-04 objective page): Healthy "
             "People 2030 pages carry the banner 'Per a court order, HHS is required to restore this website to its version as of "
             "12:00 AM on January 29, 2025.' The objective text quoted here was read on the page.")
for _sid in ['hp2030-ah01-ahs01', 'hp2030-iid08', 'hp2030-mhmd03', 'hp2030-mhmd06', 'hp2030-mich14', 'hp2030-mich15',
             'hp2030-mich17', 'hp2030-nws01', 'hp2030-oh08', 'hp2030-pa-r02', 'hp2030-pa06', 'hp2030-sdoh04',
             'hp2030-sh04', 'hp2030-su05']:
    NOTES[_sid] = HP_BANNER
NOTES['hp2030-pa-r02'] = HP_BANNER + (
    " Watch item (CP-12-24, 2026-10-16): a 2026 revision of research objective PA-R02 was reported (review lead, not "
    "verified). Y8.1's screen-time support stays partial (claim y8a-12)."
)

# ---------------------------------------------------------------- CP-12-25 (registry part)
# Batch 3 R-25: fill null tier and publisher only (shape-nhes-2024 was already set by CP-12-03).
TIER_PUBLISHER = {
    'hp2030-sh04': ('A', HP),
    'hp2030-ah01-ahs01': ('A', HP),
    'nses-2020': ('B', 'Future of Sex Education Initiative'),
    'shape-nhes-2024': ('B', 'SHAPE America'),
    'shape-pe-2024': ('B', 'SHAPE America'),
}
COMPONENTS[('search-40-assets', 'Y8.10')] = 'Empowerment: Safety'  # drops "(live registry status: located)"
NOTES['search-40-assets'] = 'Empowerment: Safety was re-checked in CP-10-01 (support excerpt for Y8.10), so it is no longer only located (CP-12-25).'
