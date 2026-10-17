"""Batch 2 of the 2026-10-16 research review (3.1.5): Y5 (CP-12-04), Y6 (CP-12-05),
Y7 (CP-12-06), the Learning for Justice entry (CP-12-21, registry part) and the
Nagaoka rename note (CP-12-24 item 1).

Applied by build_registry.py through review_2026_10_16.apply_all(). Verdicts are
copied in source-verification-2026-10-16-b2.json from full-review/batch2/verify/
(round 1) and full-review/verify-round2/ (round 2).
"""

RECORD_FILE = 'source-verification-2026-10-16-b2.json'
RECORD_ONLY = ['y5-08', 'y5-13', 'CP-12-04-V-Y5-2', 'CP-12-04-V-Y5-3', 'y5-05']

# ------------------------------------------- CP-12-04 (Y5), with CP-12-21 and CP-12-24 item 1
CITE_AS = {
    'learning-for-justice-sjs': 'Learning for Justice (2022). Social Justice Standards: The Learning for Justice Anti-bias Framework, Second Edition. The Southern Poverty Law Center, Inc.',
}
PUBLISHER = {
    'nagaoka-2015-foundations': 'University of Chicago Consortium on Chicago School Research',
    'learning-for-justice-sjs': 'The Southern Poverty Law Center, Inc. (Learning for Justice)',
}
YEAR = {'learning-for-justice-sjs': 2022}
URLS = {
    'learning-for-justice-sjs': 'https://www.learningforjustice.org/sites/default/files/2022-09/LFJ-Social-Justice-Standards-September-2022-09292022.pdf',
}
SOURCE_EXCERPT = {'learning-for-justice-sjs': 'y5-11'}
NOTES = {
    'nagaoka-2015-foundations': "Publisher named as printed at publication: '©2015 University of Chicago Consortium on Chicago School Research' (claim y5-13, full report, 2026-10-16). The organization's later name is University of Chicago Consortium on School Research (S1.4 rename note). Watch item (S4.9): an update of this framework was reported for fall 2026 (review lead, not verified); re-review Y5's anchor before citing any new edition.",
    'learning-for-justice-sjs': 'Second Edition, (c) 2014-2022, publisher printed as The Southern Poverty Law Center, Inc. (claim y5-11). One cite_as serves every code that cites LFJ (R-05, CP-12-21); title casing ("Anti-bias") follows the verified claim. The earlier URL, kept as history, was the splcenter.org landing page https://www.splcenter.org/learning-for-justice/frameworks/social-justice-standards/.',
}
COMPONENTS = {
    ('learning-for-justice-sjs', 'Y5.2'): "Identity anchor standard ID.1: 'develop positive social identities based on their membership in multiple groups in society'; grade outcome ID.9-12.4",
}
SUPPORT_RECHECK = {
    ('learning-for-justice-sjs', 'Y5.2'): ('y5-11', 'direct', None),
}
SUPPORT_NOTE_APPEND = {
    ('nagaoka-2015-foundations', 'Y5.3'): " Supporting only (CP-12-04): the full report uses a role-bound identity ('as a songwriter who performs at regular open-mics') as the contrast to integrated identity (claim y5-08, PARTIAL). Y5.3's direct source is Farrington et al. (2019); NRC (2009) was not added (round-2 claim CP-12-04-V-Y5-2 found the strand only on a secondary conference host).",
}

NEW = [
    {
        'id': 'search-spiritual-development', 'claim': 'y5-14', 'cp': 'CP-12-04',
        'cite_as': 'Search Institute. (n.d.). Spiritual Development.',
        'codebook_names': ['Spiritual Development'],
        'tier': 'D', 'publisher': 'Search Institute', 'year': None,
        'supports': [('Y5.5', "three core developmental processes of spiritual development: 'Awareness or awakening', 'Interconnecting and belonging', 'Living an integrated life'")],
        'notes_extra': 'The three process names are each verbatim but sit in separate places on the page; the page has no year (claim y5-14).',
    },
    {
        'id': 'farrington-2019-arts-sel', 'claim': 'y5-07', 'cp': 'CP-12-04',
        'cite_as': 'Farrington, C. A., Maurer, J., Aska McBride, M. R., Nagaoka, J., Puller, J. S., Shewfelt, S., Weiss, E. M., & Wright, L. (2019). Arts Education and Social-Emotional Learning Outcomes Among K-12 Students: Developing a Theory of Action. University of Chicago Consortium on School Research and Ingenuity.',
        'codebook_names': ['Farrington et al. (2019)'],
        'tier': 'C', 'publisher': 'University of Chicago Consortium on School Research and Ingenuity', 'year': 2019,
        'supports': [('Y5.3', "social-emotional competency 'Self-expression and identity' (pp. 15, 22); 'identities as artists' (p. 18)")],
        'notes_extra': "Year and publishers are not printed in the document: round-2 claim CP-12-04-V-Y5-3 (PARTIAL) read the whole PDF and found no copyright line, printed year, suggested citation or publisher statement. 2019 and the Consortium plus Ingenuity pairing rest on the file path and name ('2019-05', 'June2019-Consortium and Ingenuity') and on a UChicago Consortium press release dated June 11, 2019. Title and all eight authors match.",
    },
    {
        # Round-2 claim CP-12-04-V-Y5-1, SUPPORTED on the official govinfo copy (G8).
        'id': 'rehab-act-29usc733-pre-ets', 'claim': 'CP-12-04-V-Y5-1', 'cp': 'CP-12-04',
        'cite_as': '29 U.S.C. 733(b)(5), Rehabilitation Act of 1973, as amended by WIOA: pre-employment transition services, required activities.',
        'codebook_names': ['29 U.S.C. 733(b)(5)'],
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'supports': [('Y5.6', "required activity (b)(5) for students with disabilities: 'instruction in self-advocacy, which may include peer mentoring'", 'CP-12-04-V-Y5-1', 'partial',
                      "Read on the official govinfo copy (round-2 claim CP-12-04-V-Y5-1, SUPPORTED): (b)(5) is word for word among the required pre-employment transition services. A required service, not an outcome, so it is partial-fit support with no FD (decision G4); the code's IEP wording is inside the statute's population, students with disabilities (decision G1). The page gives no Code edition year.")],
        'notes_extra': 'The Cornell LII copy (claim y5-05) is not used (decision G8).',
    },
]

# ---------------------------------------------------------------- CP-12-05 (Y6)
# Round-2 claim CP-12-05-V-Y6-2 (CIRCLE "engaged worldview", SUPPORTED) is kept as a record for a
# later CP that may rest Y6.4's efficacy element on the anchor; it changes nothing here.
RECORD_ONLY += ['CP-12-05-V-Y6-2']

COMPONENTS.update({
    ('search-40-assets', 'Y6.1'): 'Positive Values (Integrity, Honesty, Responsibility)',
})
NOTES.update({
    'iste-students-2016': 'Superseded by the 2024 edition (iste-students-2024, CP-12-05). Kept as history: the codebook cited it until 3.1.x.',
})
SUPPORT_NOTE_APPEND.update({
    ('iste-students-2016', 'Y6.7'): ' Superseded (CP-12-05): the Source line moves to the 2024 edition, 1.2.b and 1.2.d, at the citation-text gate.',
    ('naaee-k12-2019', 'Y6.6'): ' CP-12-05: connection to nature is not in this verified text (executive summary); logged as FD-P27. The full guidelines were checked in round 2 (see the partial row below).',
})
NEW_SUPPORTS = [
    ('search-40-assets', 'Y6.4', "Empowerment asset (by page order): 'Young people are given useful roles on the community' (youth councils and advisory roles)", 'y6-03', 'partial', None),
    # Round-2 claim CP-12-05-V-Y6-1 (PARTIAL): the full 2019 guidelines have no learner outcome on
    # connection to nature; the closest is a values outcome. Recorded as partial; FD-P27 stays open (G3).
    ('naaee-k12-2019', 'Y6.6', 'Full K-12 Guidelines (2019), K-4 strand 3.2 A: identify, clarify and express beliefs and values regarding the environment (closest to connection to nature; loose fit)', 'CP-12-05-V-Y6-1', 'partial',
     "Round 2 (CP-12-05 V-Y6-1, PARTIAL), read on the full 2019 guidelines PDF: the K-4 and 5-8 guidelines have no explicit learner outcome on connection to nature. The closest are this values outcome (K-4, 3.2A) and an underpinning, 'learners connect with, explore, and understand their immediate surroundings.' The 9-12 section did not come through in the extracted text, so it is unchecked. A loose fit at best; it does not close FD-P27 (G3)."),
]

NEW += [
    {
        'id': 'via-character-strengths', 'claim': 'y6-07', 'cp': 'CP-12-05',
        'cite_as': 'VIA Institute on Character. VIA Classification of Character Strengths (Forgiveness, under Temperance).',
        'codebook_names': ['VIA Classification of Character Strengths'],
        'tier': 'D', 'publisher': 'VIA Institute on Character', 'year': None,
        'supports': [('Y6.1', 'Forgiveness (virtue of Temperance); cited for this component only')],
        'notes_extra': 'The classification originates with Peterson & Seligman (2004); VIA Institute publishes it (claim y6-07: attribution acceptable).',
    },
    {
        # Read on the authors' lab site with a recorded bibliographic match (NDCAD 134, 43-57,
        # doi 10.1002/cd.310): admissible under decision G8.
        'id': 'watts-diemer-voight-2011', 'claim': 'y6-01', 'cp': 'CP-12-05',
        'cite_as': 'Watts, R. J., Diemer, M. A., & Voight, A. M. (2011). Critical consciousness: Current status and future directions. New Directions for Child and Adolescent Development, 134, 43-57.',
        'codebook_names': ['Watts, Diemer & Voight (2011)'],
        'tier': 'C', 'publisher': None, 'year': 2011,  # the verifier recorded the journal, not a publisher name (S1.4)
        'supports': [('Y6.3', 'critical reflection (social analysis and moral rejection of societal inequities) and critical action', 'y6-01'),
                     ('Y6.4', 'political efficacy: perceived capacity to effect social and political change', 'y6-02', 'partial')],
        'notes_extra': "Read on the authors' lab site (a secondary host); the verifier recorded the bibliographic match, NDCAD 134, 43-57, doi 10.1002/cd.310 (decision G8).",
    },
    {
        'id': 'iste-students-2024', 'claim': 'y6-06', 'cp': 'CP-12-05',
        'cite_as': 'ISTE (2024). ISTE Standards for Students, 1.2 Digital Citizen (1.2.b Online Interactions; 1.2.d Digital Privacy).',
        'codebook_names': ['ISTE Standards for Students (2024)'],
        'tier': 'B', 'publisher': 'International Society for Technology in Education', 'year': 2024,
        'supports': [('Y6.7', '1.2 Digital Citizen: 1.2.b Online Interactions; 1.2.d Digital Privacy')],
        'notes_extra': 'The excerpt covers 1.2.d; 1.2.b is in the verifier note (claim y6-06).',
    },
]

# ---------------------------------------------------------------- CP-12-06 (Y7)
URLS.update({
    'perkins-v': 'https://www.govinfo.gov/link/uscode/20/2302',  # was Cornell LII (official copy, G8)
})
SOURCE_EXCERPT.update({'perkins-v': 'y7-08'})
SUPPORT_RECHECK.update({
    ('perkins-v', 'Y7.4'): ('y7-08', 'direct', None),  # was partial (host only)
})
COMPONENTS.update({
    ('perkins-v', 'Y7.4'): "20 U.S.C. 2302(5)(A)(ii) 'technical skill proficiency or a recognized postsecondary credential'; 2302(5)(B) competency-based, work-based, or other applied learning",
    ('wioa-20cfr681460', 'Y1.17'): '681.460(a)(1)-(2): dropout prevention and recovery leading to a secondary school diploma or its recognized equivalent',
})
CITE_AS.update({
    # The entry now backs two codes, so the pinpoints move to the components.
    'wioa-20cfr681460': 'WIOA youth program elements, 20 CFR 681.460(a).',
})
NOTES.update({
    'perkins-v': 'URL moved to the govinfo official copy (CP-12-06, claim y7-08). The Y7.1 support still carries the CP-10-01 Cornell note and partial fit; it is re-checked after PR #62 (CP B2-Y7b, claims y7-01, y7-02).',
    'wioa-20cfr681460': 'CP-12-06: cite_as shortened to the section, because the entry now backs Y1.17 ((a)(1)-(2)) and Y7.4 ((a)(3)-(4)); the pinpoints are in the components.',
})
NEW_SUPPORTS += [
    # Program elements: partial-fit support, no FD (decision G4).
    ('wioa-20cfr681460', 'Y7.4', '681.460(a)(3)-(4): paid and unpaid work experiences (pre-apprenticeship, internships and job shadowing); occupational skill training toward recognized postsecondary credentials', 'y7-09', 'partial', None),
]

NEW += [
    {
        'id': 'rehab-act-29usc705-cie', 'claim': 'y7-11', 'cp': 'CP-12-06',
        'cite_as': '29 U.S.C. 705(5), Rehabilitation Act of 1973, as amended by WIOA: definition of competitive integrated employment.',
        'codebook_names': ['29 U.S.C. 705(5)'],
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'supports': [('Y7.5', "definition of 'competitive integrated employment': full-time or part-time work, including self-employment, at competitive wages in an integrated setting")],
        'notes_extra': "The govinfo rendering drops the hyphen in 'full-time' (claim y7-11).",
    },
    {
        'id': 'casey-life-skills-toolkit', 'claim': 'y7-13', 'cp': 'CP-12-06',
        'cite_as': 'Casey Family Programs (2022). Casey Life Skills Toolkit, Version 1.4.',
        'codebook_names': ['Casey Life Skills Toolkit'],
        'tier': 'D', 'publisher': 'Casey Family Programs', 'year': 2022,
        'supports': [('Y7.7', "life skill area 'Daily living and self-care activities'; for any youth 14-21 regardless of foster care status")],
        'notes_extra': 'Cross-sector support beside Chafee (decision Y7-1).',
    },
    {
        'id': 'usc-42-675-5i-vital-documents', 'claim': 'y7-18', 'cp': 'CP-12-06',
        'cite_as': 'Social Security Act sec. 475(5)(I), 42 U.S.C. 675(5)(I): documents for a child leaving foster care.',
        'codebook_names': ['42 U.S.C. 675(5)(I)'],
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'supports': [('Y7.7', "certified copy of the U.S. birth certificate, Social Security card, and driver's license or state ID for a child leaving foster care at 18 or older", 'y7-18', 'partial',
                      "42 U.S.C. 675(5)(I) applies when the child is leaving foster care at 18 or an older state-elected age, and also lists a driver's license or state ID (claim y7-18, read on govinfo). A statutory duty: partial-fit support, no FD (decision G4).")],
    },
    {
        'id': 'idea-34cfr300-43-transition', 'claim': 'y7-15', 'cp': 'CP-12-06',
        'cite_as': 'Individuals with Disabilities Education Act regulations, 34 CFR 300.43(a)(2)(v): transition services.',
        'codebook_names': [],
        'tier': 'A', 'publisher': None, 'year': None,  # no verifier recorded an issuing body (S1.4)
        'supports': [('Y7.7', 'transition services include, if appropriate, acquisition of daily living skills', 'y7-15', 'partial',
                      '34 CFR 300.43(a)(2)(v) matches (claim y7-15). Services a school must provide: partial-fit support, no FD (decision G4). Supporting only; not named on a Source line.')],
    },
]
