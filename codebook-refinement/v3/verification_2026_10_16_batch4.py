"""Batch 4 of the 2026-10-16 research review (3.1.5): A1 (CP-12-10), A3 (CP-12-12),
the registry names of CP-12-18 part (a), and the status notes of CP-12-24 items 3 and 5.

Applied by build_registry.py through review_2026_10_16.apply_all(). Verdicts are
copied in source-verification-2026-10-16-batch4.json from full-review/batch4/verify/
(round 1) and full-review/verify-round2/ (round 2). CP-12-11 (A2) has not landed; its
rows are not here.
"""

RECORD_FILE = 'source-verification-2026-10-16-batch4.json'
# Round-2 claim CP-12-10-V1 (OPM restatement of Kirkpatrick Level 2) could not be fetched; FD-P36
# stays open. a1-02 (Learning Forward 2025 edition) is named in a note only.
RECORD_ONLY = ['CP-12-10-V1', 'a1-02']

# ---------------------------------------------------------------- CP-12-10 (A1)
URLS = {
    'learning-forward-2022': 'https://learningforward.org/wp-content/uploads/sites/29/2022/04/Standards-Summary.pdf',
    'samhsa-tic-2014': 'https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA%5FTrauma.pdf',
}
SOURCE_EXCERPT = {'learning-forward-2022': 'a1-01', 'samhsa-tic-2014': 'a1-05'}
SUPPORT_RECHECK = {('samhsa-tic-2014', 'A1.2'): ('a1-05', 'direct', None)}
NEW = [{
    'id': 'who-2019-burnout', 'claim': 'a1-07', 'cp': 'CP-12-10',
    'cite_as': 'World Health Organization (2019, May 28). Burn-out an "occupational phenomenon": International Classification of Diseases.',
    'tier': 'B', 'publisher': 'World Health Organization', 'year': 2019,
    'supports': [('A1.3', 'ICD-11 burn-out: chronic workplace stress not successfully managed (exhaustion, mental distance from the job, reduced professional efficacy)')],
    'notes_extra': 'A supporting row for the burnout include; not named in the A1.3 source line. Tier B chosen by the proposer (WHO classification).',
}]
NOTES = {
    'learning-forward-2022': "URL pinned 2026-10-16 (CP-12-10) to the 2022 Standards Summary PDF (claim a1-01, PARTIAL: design standards, not an outcome list; the PDF states no year, which comes from the URL path and the history page). Learning Forward's history page says a 2025 edition now exists (claim a1-02, PARTIAL); the codebook keeps citing 2022 until a dated 2025 record is verified. The A1.1 and A1.2 support excerpts were read on the standards web page in CP-10-01.",
    'samhsa-tic-2014': 'URL moved 2026-10-16 (CP-12-10) to the full document on HHS/ACF NCSACW, a federal host (claim a1-05, SUPPORTED). Bibliographic match recorded by the verifier: title, HHS Pub. No. (SMA) 14-4884, 2014. SAMHSA remains the author.',
}

# ---------------------------------------------------------------- CP-12-12 (A3)
URLS['sampson-1997'] = 'https://pubmed.ncbi.nlm.nih.gov/9252316/'
SOURCE_EXCERPT['sampson-1997'] = 'a3-03'
SUPPORT_RECHECK[('sampson-1997', 'A3.3')] = ('a3-03', 'direct', None)
NEW_SUPPORTS = [
    ('reisman-2007-advocacy-policy', 'A3.2',
     'outcome category: strengthened alliances (coordination, collaboration and mission alignment among community and system partners)',
     'a3-01', 'direct', None),
    ('coffman-2009-advocacy-evaluation', 'A3.2',
     'interim outcome: partnerships or alliances (new or stronger organizational relationships)',
     'a3-02', 'partial',
     "Verdict SUPPORTED (claim a3-02): the measure 'New or stronger organizational relationships developed' appears word for word. Fit set to partial by the batch 4 review: the outcome is defined within an advocacy strategy, and it also counts relationships with individuals. Read on the County Health Rankings copy; the verifier recorded it as the full HFRP (Coffman, 2009) document. Supporting row only; not named in the A3.2 source line."),
]
NOTES['sampson-1997'] = 'URL moved 2026-10-16 (CP-12-12) to the PubMed record (claim a3-03, SUPPORTED: the definition is in the abstract; the fetched page did not show author names). The full text was read in CP-10-01 on a course-reading copy.'

# ---------------------------------------------------------------- CP-12-18 part (a)
CODEBOOK_NAMES = {
    'guskey-2002-pd-evaluation': ['Guskey (2002)'],
    'reisman-2007-advocacy-policy': ['Reisman, Gienapp & Stachowiak (2007)'],
}

# ---------------------------------------------------------------- CP-12-24 item 5 (notes only)
# No verified claim exists on the Digital Equity Act grant programs; the note asserts no termination.
NOTES['digital-equity-act'] = (
    "Status note (CP-12-24, 2026-10-16): the support rests on statute text only. Reports that the Act's grant programs "
    "were terminated were not verified (batch 4 review, R-07) and are not cited; re-check the statute at the next "
    "re-verification. Shared with digital-equity-act-1723."
)
NOTES['digital-equity-act-1723'] = 'Status note: see digital-equity-act (CP-12-24, 2026-10-16).'

# ---------------------------------------------------------------- CP-12-29 (3.3.0 gate): registry names
# Table R. A name used in a Source line or a Framework Basis line goes into codebook_names (CLAUDE.md),
# so the sync.test.ts check "each cited framework is named in its domain line" can see it. Part 1:
# names already printed in the prompt. Part 2: names printed only by the new "secondary:" clauses.
# The Y8-only part-2 names (HECAT, Monitoring the Future, About Youth Violence, OJJDP 2017) wait with
# the Y8 clause for the Y8 anchor re-review (S4.9); "USDA nutrition security" has no entry (CP-12-09 V8).
_NAMES_CP_12_29 = {
    # Part 1
    'search-40-assets': ['Search Institute Developmental Assets'],
    'shape-nhes-2024': ['SHAPE America national standards'],
    'shape-pe-2024': ['SHAPE America national standards'],
    'cfpb-building-blocks-2016': ['CFPB Building Blocks'],
    'allensworth-easton-2005': ['UChicago On-Track Indicator'],
    'allensworth-easton-2007': ['UChicago On-Track Indicator'],
    'namle-core-principles': ['NAMLE'],
    'irvin-2004-odr': ['Irvin et al. (2004)'],
    'wioa-20cfr681460': ['20 CFR 681.460'],
    'hulleman-2010-utility-value': ['Hulleman et al. (2010)'],
    'muhammad-five-pursuits': ['Muhammad, Five Pursuits'],
    'digital-equity-act': ['Digital Equity Act'],
    'digital-equity-act-1723': ['Digital Equity Act'],
    'idea-671-pti': ['20 U.S.C. 1471', 'IDEA Parent Training and Information Centers'],
    'hp2030-mich14': ['Healthy People 2030'], 'hp2030-mich15': ['Healthy People 2030'],
    'hp2030-ah01-ahs01': ['Healthy People 2030'], 'hp2030-sh04': ['Healthy People 2030'],
    'hp2030-su05': ['Healthy People 2030'],
    'acf-nytd': ['ACF NYTD'],
    'nses-2020': ['National Sex Education Standards'],
    'niosh-wellbq-2021': ['NIOSH WellBQ'],
    'bls-jolts-definitions': ['Job Openings and Labor Turnover Survey'],
    # Part 2
    'snap-ed-framework-mt1': ['SNAP-Ed'],
    'wioa-title-ii-aefla': ['WIOA Title II'],
    'cfpb-financial-well-being-2015': ['CFPB Financial Well-Being'],
    'rhy-45cfr1351': ['45 CFR 1351'],
    'hp2030-nws01': ['Healthy People 2030'], 'hp2030-sdoh04': ['Healthy People 2030'],
    'hearth-42usc11386a': ['HEARTH Act'],
    'usc-42-675-1g-educational-stability': ['42 U.S.C. 675(1)(G)'],
    'essa-6311-advanced-coursework': ['ESSA State report cards'],
}
for _sid, _names in _NAMES_CP_12_29.items():
    CODEBOOK_NAMES.setdefault(_sid, [])
    CODEBOOK_NAMES[_sid] = CODEBOOK_NAMES[_sid] + [n for n in _names if n not in CODEBOOK_NAMES[_sid]]
