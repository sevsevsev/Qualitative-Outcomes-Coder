"""CP-11-01 (3.1.5): Y1 citation fixes from the 2026-10-16 research review.

Applied by build_registry.py through review_2026_10_16.apply_all(), after the
CP-10-01 results. Verdicts are copied in source-verification-2026-10-16.json from
the pilot verification (research-review/2026-10-16/verification/) and round 2
(full-review/verify-round2/, claim CP-11-01-V1 on the Seal of Biliteracy authors).
"""

RECORD_FILE = 'source-verification-2026-10-16.json'

# Claims kept in the record for what they settle, not for an excerpt.
RECORD_ONLY = ['CP-11-01-V1', 'y1-mindsets-05', 'y1-taxonomy-07', 'y1-subject-11']

# Citation text and publisher, as printed at publication (S1.4).
CITE_AS = {
    'farrington-2012': 'Farrington, C. A., Roderick, M., Allensworth, E., Nagaoka, J., Keyes, T. S., Johnson, D. W., & Beechum, N. O. (2012). Teaching Adolescents to Become Learners: The Role of Noncognitive Factors in Shaping School Performance: A Critical Literature Review. Chicago: University of Chicago Consortium on Chicago School Research.',
    'allensworth-easton-2005': 'Allensworth, E. M., & Easton, J. Q. (2005). The On-Track Indicator as a Predictor of High School Graduation. Consortium on Chicago School Research at the University of Chicago.',
    'conley-four-keys': 'Conley, D. T. (2016, April). Four Keys to College and Career Readiness. School Administrator. AASA, The School Superintendents Association. (Key Cognitive Strategies, Key Content Knowledge, Key Learning Skills & Techniques, Key Transition Knowledge & Skills)',
}
PUBLISHER = {
    'farrington-2012': 'University of Chicago Consortium on Chicago School Research',
    'allensworth-easton-2005': 'Consortium on Chicago School Research at the University of Chicago',
    'allensworth-easton-2007': 'Consortium on Chicago School Research at the University of Chicago',
    'conley-four-keys': 'AASA, The School Superintendents Association (School Administrator magazine)',
}
YEAR = {'conley-four-keys': 2016}
NOTES = {  # appended to the source's existing `notes`
    'farrington-2012': "Publisher named as printed at publication (claim y1-mindsets-05, read from the report's citation line; the cover shows 'UChicago CCSR'). The registry earlier gave the organization's later name, 'University of Chicago Consortium on School Research' (S1.4 rename note).",
    'allensworth-easton-2005': 'Publisher made consistent with allensworth-easton-2007; both name the organization as printed (CP-10-01 records allensworth-easton-2005#0 and -2007#0: publisher matches).',
    'allensworth-easton-2007': 'See allensworth-easton-2005.',
    'conley-four-keys': 'Attribution corrected 2026-10-16 (claim y1-subject-11): David T. Conley, School Administrator magazine (AASA), April 1, 2016. The Y7.2 support excerpt is unchanged (CP-11-01, handed over item 1).',
    'head-start-elof': 'Cited for Y1.8 only (decision Y1-1, 2026-10-16): the codebook sources codes from early-childhood frameworks only where the construct is about young children. Not for Y8.2 fine motor (codebook-defined, CP-12-07) or Y1.10 (removed by CP-10-01).',
}
NOTES_REPLACE = {
    'national-reading-panel-2000': 'Excerpt replaced 2026-10-16 (CP-11-01, claim y1-subject-03): the CP-10-01 excerpt was a string of headings, not a sentence (S1.5).',
}
URLS = {
    'head-start-elof': 'https://www.govinfo.gov/content/pkg/GOVPUB-HE23_1100-PURL-gpo65456/pdf/GOVPUB-HE23_1100-PURL-gpo65456.pdf',  # official copy (G8)
}
SOURCE_EXCERPT = {
    'head-start-elof': 'y1-subject-15',
    'national-reading-panel-2000': 'y1-subject-03',
}
SUPPORT_RECHECK = {
    ('national-reading-panel-2000', 'Y1.1'): ('y1-subject-03', 'partial',
        'Fluency and comprehension confirmed on the NICHD findings page (claim y1-subject-03; the page is kept for historical purposes). The NRP does not cover writing, which is half of Y1.1 (CP-10-01).'),
    ('mckinney-vento', 'Y1.13'): ('y1-attainment-03', 'direct', None),
}
SUPPORT_NOTE_APPEND = {
    ('head-start-elof', 'Y1.8'): ' The 2015 year and the Office of Head Start/ACF/HHS publisher are confirmed on the govinfo GPO copy (claim y1-subject-15, 2026-10-16), now the source URL; the domain list above was read on the headstart.gov interactive ELOF.',
}
COMPONENTS = {
    ('mckinney-vento', 'Y1.13'): "school of origin and 'School stability', 42 U.S.C. 11432(g)(3)(A)-(B)",
}

SEAL_AUTHORS = ('ACTFL, Californians Together, Modern Language Association, National Association for Bilingual '
                'Education, National Association of English Learner Program Administrators, National Council of '
                'State Supervisors for Languages, & TESOL International Association')

NEW = [
    {
        # V1 (round 2, PARTIAL on authorship only): the document's own suggested citation names
        # these seven bodies; SealofBiliteracy.org is an issuing partner, not a cited author.
        'id': 'seal-of-biliteracy-guidelines-2020', 'claim': 'y1-subject-04', 'cp': 'CP-11-01',
        'cite_as': f'{SEAL_AUTHORS} (2020). Guidelines for Implementing the Seal of Biliteracy.',
        'codebook_names': ['Seal of Biliteracy Guidelines', 'Guidelines for Implementing the Seal of Biliteracy'],
        'tier': 'B', 'publisher': SEAL_AUTHORS.replace(', &', ','), 'year': 2020,
        'supports': [('Y1.2', 'Implementation Guidelines, section 1: English learners encouraged to maintain and improve proficiency in their home or heritage language(s)', 'y1-subject-04', None,
                      'The title, the 2020 year and the statement (Implementation Guidelines, section 1) match (claim y1-subject-04). Authorship settled by round-2 claim CP-11-01-V1: the cite_as follows the document\'s own suggested citation.')],
        'notes_extra': "Authors per round-2 claim CP-11-01-V1 (PARTIAL on authorship only): SealofBiliteracy.org is one of the partners that 'have partnered to present these updated guidelines', sharing an entry with Californians Together, but the document's own suggested citation leaves it out, so the cite_as does too.",
    },
    {
        'id': 'essa-6311-advanced-coursework', 'claim': 'y1-attainment-12', 'cp': 'CP-11-01',
        'cite_as': 'Every Student Succeeds Act (2015), 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) and 6311(c)(4)(B)(v)(II)',
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': 2015,
        'supports': [('Y1.16', 'report-card count of students in accelerated coursework for postsecondary credit (AP, IB, dual or concurrent enrollment), (h)(1)(C)(viii)(II)(bb); optional indicator of access to and completion of advanced coursework, (c)(4)(B)(v)(II)')],
        'notes_extra': "The (c)(4)(B)(v)(II) pinpoint is corroborated by claim y1-taxonomy-07 ('(V) student access to and completion of advanced coursework;'). That measure is one a State 'may include'; (h)(1)(C)(viii) is a reporting requirement.",
    },
    {
        'id': 'usc-42-675-1g-educational-stability', 'claim': 'y1-attainment-05', 'cp': 'CP-11-01',
        'cite_as': '42 U.S.C. 675(1)(G), case plan: educational stability of the child while in foster care',
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'supports': [('Y1.13', 'plan for ensuring the educational stability of the child while in foster care (assurance of coordination so the child remains in the school of enrollment at each placement, or is enrolled immediately in a new school)')],
        'notes_extra': 'A statutory duty, not a measured outcome; counted as support with no FD entry (decision G4).',
    },
    {
        'id': 'ed-hhs-rtt-elc-2013-definitions', 'claim': 'y1-subject-13', 'cp': 'CP-11-01',
        'cite_as': 'U.S. Department of Education & U.S. Department of Health and Human Services (2013). Final Priorities, Requirements, Definitions, and Selection Criteria; Race to the Top-Early Learning Challenge. 78 Fed. Reg. 53964 (August 30, 2013).',
        'tier': 'A', 'publisher': 'U.S. Department of Education; U.S. Department of Health and Human Services', 'year': 2013,
        'supports': [('Y1.8', "definitions of 'Essential Domains of School Readiness' (language and literacy development; cognition and general knowledge, including early mathematics and early scientific development) and 'Kindergarten Entry Assessment'")],
        'notes_extra': 'Cross-program support for Y1.8 beside Head Start ELOF (decision A / Y1-1, 2026-10-16). The same definitions also list approaches to learning, physical and motor development and social-emotional development; those are not cited for any code (Y1.10, Y8.2 and Y4 keep their own sources).',
    },
]

# ---------------------------------------------------------------- CP-12-24 item 4 (notes only)
RECORD_ONLY += ['y1-subject-07']
NOTES['csta-k12-2017'] = (
    "Watch item (CP-12-24, 2026-10-16): CSTA has published the 2026 CSTA PK-12 Computer Science Standards (claim "
    "y1-subject-07, PARTIAL). The page does not say they supersede the 2017 standards, so the codebook keeps citing "
    "2017. Y1.4 is in PR #62; any re-citation is that PR's or a later Y1 CP's."
)
