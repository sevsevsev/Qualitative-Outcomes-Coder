# CP-12-07: Y8 citations and the deviation log that follows from them

| Field | Value |
|---|---|
| Type | CITATION_FIX. It also adds the S1.6 deviation entries for the two Y8 elements these citations leave uncovered (see "One kind of change" below). |
| Codes touched | Registry and `basis`: Y8.1, Y8.3, Y8.4, Y8.5, Y8.8, Y8.9, Y8.10, Y8.11, Y8.12, Y8.13. `fidelity` and `deviation` fields: Y8.2 and Y8.13. **Y8.2's `basis` text only** (no registry change). Y8.6 and Y8.7 are not touched. No definition, include, exclude, useInstead, example, source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today, so 3.1.5; 3.2.x if draft PR #62's 3.2.0 merges first; one PATCH later if PR #66 lands first) |
| Requirement served | R1 frameworks · R4 drift |
| Status | draft (batch 3 research review, 2026-10-16); not applied |
| Reaches the coding prompt? | **No.** Registry, `basis`, `fidelity`, `deviation` and `DEVIATIONS.md` are not printed in `definitionsText` (`youthOutcomesV3.ts` prints definition, include, exclude, use instead, source and example). No scoring run is needed; `npm test` is the gate. The explorer shows the new fidelity on the Y8.2 and Y8.13 cards. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **new FD-P30 (provisional id)**, Y8.13, codebook-defined element, counted. **new FD-P31 (provisional id)**, Y8.2, codebook-defined element, counted (decision A). **Contingent FD-P32 (Y8.11) and FD-P33 (Y8.12) (provisional ids)**, opened only if verification requests V3 to V5 fail (decision B3-2). Every other item closes a gap by citation and states none. Y8 drift goes from 0/13 to 2/13 (15%); the worst case is 4/13 (31%). |

## Problem

Batch 3 research review, recommendations "Act now", B3-CP1, items 1 to 14. All four reviewers
accepted each citation row (where the devil's advocate dissented, the dissent is noted).

1. **YRBS.** Y8 source lines say "CDC Youth Risk Behavior Survey", but `cdc-yrbss` has no such
   `codebook_names` entry. The batch cites two different 2025 instruments whose item numbers
   differ: the *State and Local (standard) HS questionnaire* (y8a) and the *National HS
   questionnaire* (y8b) (reconciliation R-02, R-12).
2. **Y8.1.** Activity, nutrition, cooking, hygiene and sleep have no component-level source. WSCC
   (partial) names school service components only. Y8.1's `basis` says "CDC YRBS sleep item
   (verified 2025)", but no registry support or 2026-09-27 verification record backs it
   (checked: `source-verification-2026-09-27.json` has no YRBS row for Y8.1).
3. **Y8.3.** First aid, injury prevention and reliable health information are not named by NHES
   Standard 1 as verified (`shape-nhes-2024` verifier note).
4. **Y8.4.** Supports are framework-level only.
5. **Y8.5.** Dental, vision, screenings, immunizations and chronic conditions have no component.
6. **Y8.8.** The NCTSN support is not pinned to a concept, `cite_as` has the wrong title, and
   `basis` says "(located)" although the registry has had the entry `verified` since CP-10-01.
7. **Y8.9.** Service use rests only on WSCC (partial).
8. **Y8.11.** "Perceived risk" is uncovered.
9. **Y8.12.** The YRBS support excerpt is the generic page text (partial; stale component wording),
   and community violence is uncovered. The `basis` still says the bullying definitions are
   "(located)".
10. **Y8.13.** It has no direct support (CJCA is partial). The CJCA publisher was renamed (CJJA).
11. **Y8.13 completion** of probation or an agreement has no source (adjudicated S018, S189).
12. **Y8.2 "fine motor"** goes past SHAPE PE Standard 1. ELOF verifies (y8a-13) but the
    early-childhood rule bars it (adjudicated S192).
13. **Y8.11, Y8.12 knowledge, intentions, warning signs** go past YRBS and MTF (R-03; H038, S065,
    S248 adjudicated).
14. **Stale `basis` tags** (Y8.8, Y8.10, Y8.12), and null `tier`/`publisher` on five entries
    (R-25).

## One kind of change (S4.1)

Recommendation B3-CP1 is labelled "CITATION_FIX + RULES". The coordinator fixed the ID to one CP.
This draft types it as CITATION_FIX. The two FD entries are this CP's required S4.1 deviation
statement: they log what stays uncovered *after* the citations land, and they depend on the
exact set of supports added here. CP-11-01 and CP-11-02 split the same pair in the Y1 pilot. If
the judge reads S4.1 strictly, items 11 and 12 (FD-P30, FD-P31) and the drift-table edit move to
a separate RULES CP, which needs a new ID from the coordinator. The registry part is unaffected
either way.

## Why this is the smallest fit (STANDARDS S2.2)

Not required for CITATION_FIX. Every gap is closed by a registry row where one verified. Only the
two elements with no admissible source get FD entries. No code text changes: rewording Y8.2
("fine motor") or Y8.13 ("completing") would flip S192, S018 and S189.

## Change

### Registry (`codebook-refinement/v3/`, not the JSON)

Per CLAUDE.md, registry results change in the build scripts. Regenerate the JSON with
`python3 codebook-refinement/v3/build_registry.py`.

**New verification record: `codebook-refinement/v3/source-verification-2026-10-16-b3.json`.** It
uses the same row shape as `source-verification-2026-09-27.json`. Each row is copied from
`research-review/full-review/batch3/verify/claims-*.json` (claim) and `verdicts-*.json` (verdict,
`fetched_url` → `url_checked`, `excerpt`, `note` → `notes`). Copy the batch-3 `verify/` folder
into the repo (for example `codebook-refinement/research-review/full-review/batch3/verify/`)
in the same commit, so the record has a source in the repo. This CP uses these claim_ids:
y8a-01..12, y8a-15..19, y8a-21..27, y8b-04..07, y8b-10..16. CP-12-08 and CP-12-09 append theirs.

**`source_kind` was not recorded by the batch-3 verifier.** The 2026-09-27 script asserts
`source_kind == 'primary'` for new sources. The drafter's reading of each `fetched_url` host is as
follows: cdc.gov, odphp.health.gov, ojjdp.ojp.gov, ojp.gov, nctsn.org, shapeamerica.org and
monitoringthefuture.org are `primary` (the publisher's own host). The NSES PDF on
advocatesforyouth.org is `primary` (an FoSE partner's copy of the document itself; CP-10-01
already treats it as read). **The coordinator must confirm these values, or have the verifier
record them, before the record file is written.** The drafter does not set verification fields.

**New module `codebook-refinement/v3/verification_2026_10_16_b3.py`.** A separate module from
PR #66's `verification_2026_10_16.py` (CP-11-01), so the two PRs do not collide. It has the same
shape: docstring, `RECORD`, `DATE = '2026-10-16'`, `BY`, input tables, `apply(out, codes)`. It
reuses CP-11-01's helper tables (`SUPPORT_RECHECK`, `NOTES`, `PUBLISHER`, `SOURCE_EXCERPT`)
if PR #66 has merged, or defines the same helpers if it has not. It asserts that every claim it
uses is SUPPORTED or PARTIAL. `fit` is `direct` for SUPPORTED and `partial` for PARTIAL unless
it is set explicitly below.

```python
# --- CP-12-07 (Y8) ---------------------------------------------------------

NEW = [
    {'id': 'cdc-yrbs-2025-standard-hs',
     'cite_as': 'Centers for Disease Control and Prevention (2025). 2025 State and Local Youth Risk Behavior Survey (standard high school questionnaire).',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2025, 'codebook_names': [],
     'supports': [
        ('Y8.1', 'Q83 hours of sleep on an average school night', 'y8a-08'),
        ('Y8.1', 'Q73 days physically active at least 60 minutes', 'y8a-09'),
        ('Y8.1', 'Q66, Q67, Q69, Q70 fruit and vegetable items', 'y8a-10'),
        ('Y8.4', 'Q59 condom use and Q60 pregnancy-prevention method at last sexual intercourse', 'y8a-21'),
        ('Y8.5', 'Q80 last dental check-up, exam or cleaning', 'y8a-27')]},
    {'id': 'cdc-yrbs-2025-national-hs',
     'cite_as': 'Centers for Disease Control and Prevention (2025). 2025 National Youth Risk Behavior Survey (high school questionnaire).',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2025, 'codebook_names': [],
     'supports': [
        ('Y8.9', 'Q94 experience with counseling or therapy', 'y8b-07'),
        ('Y8.12', 'Q11, Q12 weapon and gun carrying; Q16 physical fight; Q21, Q22 sexual and physical dating violence; Q26, Q27 bullied at school and electronically', 'y8b-11')]},
    {'id': 'cdc-hecat-2021',  # url and source excerpt: the HECAT index page (y8a-01)
     'cite_as': 'Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), 2021 edition.',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2021, 'codebook_names': [],
     'source_claim': 'y8a-01',
     'supports': [
        ('Y8.1', 'Module PA, HBO 1: moderate to vigorous activity 60 minutes every day', 'y8a-02'),
        ('Y8.1', 'Module PA, HBO 2: activities for endurance, flexibility and strength', 'y8a-03'),
        ('Y8.1', 'Module FN, HBO 3: eat lots of fruits and vegetables', 'y8a-04'),
        ('Y8.1', 'Module FN, HBO 10: prepare nutrient-dense foods', 'y8a-05'),
        ('Y8.1', 'Module PHW, HBO 1: hygiene habits', 'y8a-06'),
        ('Y8.1', 'Module PHW, HBO 2: sleep and rest', 'y8a-07'),
        ('Y8.3', 'Module S, HBO 4: safety rules to avoid injury', 'y8a-17'),          # PARTIAL
        ('Y8.3', 'Module S, HBO 7: get help when injured or suddenly ill', 'y8a-18'), # PARTIAL
        ('Y8.5', 'Module PHW, HBO 9-10: prevent and manage chronic conditions', 'y8a-22'),
        ('Y8.5', 'Module PHW, HBO 11: screenings and examinations', 'y8a-23')]},     # PARTIAL
    {'id': 'hp2030-pa06', 'cite_as': 'Healthy People 2030, objective PA-06: Increase the proportion of adolescents who do enough aerobic physical activity. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.1', 'adolescent aerobic physical activity', 'y8a-11')]},
    {'id': 'hp2030-pa-r02', 'cite_as': 'Healthy People 2030, research objective PA-R02: Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.1', "parents following AAP recommendations on limiting children's screen time", 'y8a-12')]},  # PARTIAL
    {'id': 'hp2030-oh08', 'cite_as': 'Healthy People 2030, objective OH-08: Increase use of the oral health care system. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.5', 'use of the oral health care system', 'y8a-25')]},
    {'id': 'hp2030-mich17', 'cite_as': 'Healthy People 2030, objective MICH-17: Increase the proportion of children who receive a developmental screening. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.5', 'developmental screening of young children (early-childhood statements only)', 'y8a-26')]},
    {'id': 'hp2030-iid08', 'cite_as': 'Healthy People 2030, objective IID-08: Increase the proportion of adolescents who get recommended doses of the HPV vaccine. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.5', 'adolescent HPV vaccination (one vaccine, ages 13-15)', 'y8a-24')]},  # PARTIAL
    {'id': 'hp2030-mhmd03', 'cite_as': 'Healthy People 2030, objective MHMD-03: Increase the proportion of children with mental health problems who get treatment. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.9', 'children (4-17) with mental health problems who receive treatment', 'y8b-05')]},
    {'id': 'hp2030-mhmd06', 'cite_as': 'Healthy People 2030, objective MHMD-06: Increase the proportion of adolescents with depression who get treatment. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.9', 'adolescents (12-17) with major depressive episodes who receive treatment', 'y8b-06')]},
    {'id': 'mtf-2026-vol1',
     'cite_as': 'Miech, R. A., Patrick, M. E., O\'Malley, P. M., Jager, J. O., & Jang, J. B. (2026). Monitoring the Future national survey results on drug use, 1975-2025: Overview and detailed results for secondary school students. Institute for Social Research, University of Michigan.',
     'tier': 'C', 'publisher': 'Institute for Social Research, University of Michigan', 'year': 2026,
     'supports': [('Y8.11', 'perceived risk of substance use (the survey\'s paired "disapproval" measure is not relied on)', 'y8b-10')]},  # PARTIAL
    {'id': 'cdc-youth-violence-2024', 'cite_as': 'Centers for Disease Control and Prevention (2024). About Youth Violence.',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2024,
     'supports': [('Y8.12', 'definition of youth violence: fighting, bullying, threats with weapons, gang-related violence', 'y8b-13')]},
    {'id': 'ojjdp-2017-diversion-review',
     'cite_as': 'Office of Juvenile Justice and Delinquency Prevention (2017, February). Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing. NCJ 249701.',
     'tier': 'A', 'publisher': 'Office of Juvenile Justice and Delinquency Prevention', 'year': 2017,
     'supports': [('Y8.13', 'diversion of youth from formal juvenile court processing', 'y8b-16')]},
]

# Supports added to existing sources: (source, code, component, claim).
EXTRA_SUPPORTS = [
    ('shape-nhes-2024', 'Y8.3', "Standard 3, indicator 3.8.3: 'Access valid and reliable sources of health information'", 'y8a-15'),
    ('shape-nhes-2024', 'Y8.3', "Standard 1, indicators 1.2.3 and 1.5.3: 'prevent or reduce risks for illnesses and injuries'", 'y8a-16'),
    ('nses-2020', 'Y8.4', 'SH.8.CC.2 methods of contraception and how to access them; SH.12.GS.1 plan to access local services', 'y8a-19'),
]

# (source, code) -> (claim, fit, component). Replaces the support's excerpt, note and component.
SUPPORT_RECHECK = {
    ('cdc-yrbss', 'Y8.12'): ('y8b-12', 'direct', 'Student experiences: exposure to community violence'),
    ('nctsn-core-curriculum', 'Y8.8'): ('y8b-04', 'partial', 'Core Concept 5: danger and safety are core concerns in the lives of traumatized children (Concept 10, culture, is not relied on)'),
}
COMPONENTS = {('search-40-assets', 'Y8.10'): 'Empowerment: Safety'}  # drops "(live registry status: located)"

CITE_AS = {
    'nctsn-core-curriculum': 'Layne, C. M., Strand, V., & NCTSN Core Curriculum on Childhood Trauma Task Force (2012). 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood. National Child Traumatic Stress Network.',
    'cjca-2009': 'Harris, P. W., Lockwood, B., & Mengers, L. (2009, November). Defining and Measuring Recidivism: A CJCA White Paper. Council of Juvenile Correctional Administrators. NCJ 237765.',
}
CODEBOOK_NAMES_ADD = {'cdc-yrbss': ['CDC Youth Risk Behavior Survey']}
TIER_PUBLISHER = {  # R-25: fills nulls only
    'hp2030-sh04':       ('A', 'U.S. DHHS, Office of Disease Prevention and Health Promotion'),
    'hp2030-ah01-ahs01': ('A', 'U.S. DHHS, Office of Disease Prevention and Health Promotion'),
    'nses-2020':         ('B', 'Future of Sex Education Initiative'),
    'shape-nhes-2024':   ('B', 'SHAPE America'),
    'shape-pe-2024':     ('B', 'SHAPE America'),
}
NOTES = {  # appended to `notes`
    'cjca-2009': "CJCA was renamed the Council of Juvenile Justice Administrators (CJJA); it was 'originally incorporated as the Council of Juvenile Correctional Administrators on July 1, 1994' (claim y8b-15, PARTIAL: attribution only). The publication name at release is kept (S1.4). NCJRS catalog record, NCJ 237765: https://www.ojp.gov/ncjrs/virtual-library/abstracts/cjca-white-paper-defining-and-measuring-recidivism (claim y8b-14, PARTIAL: the abstract confirms title, authors, date and CJCA authorship, not the recidivism detail; the full-text URL and excerpt are kept).",
    'nctsn-core-curriculum': "Title corrected 2026-10-16 (claim y8b-04): the document's own title is '12 Core Concepts for Understanding Traumatic Stress Responses in Childhood'.",
    'search-40-assets': 'Empowerment: Safety was re-checked in CP-10-01 (support excerpt for Y8.10), so it is no longer only located.',
    'cdc-yrbss': 'This entry is the YRBSS About page. Item-level supports use the two 2025 instruments as separate entries (cdc-yrbs-2025-standard-hs, cdc-yrbs-2025-national-hs), because their item numbers differ (batch 3 R-02).',
    'cdc-hecat-2021': 'Module-level supports were read in the module PDFs: hecat_module_pa.pdf, _fn.pdf, _phw.pdf and _s.pdf under https://www.cdc.gov/healthy-youth/hecat/pdfs/. Each support verifier_note starts with the PDF it was read in. The AOD, Tobacco and Violence Prevention modules are not verified (requests V3 to V5).',
    'hp2030-mich17': 'Early-childhood source, allowed because developmental screening of infants and toddlers is about young children by definition (early-childhood rule; S061).',
}
```

`apply()` sets `verified_on = '2026-10-16'` and `verified_by` on every source it touches, and sets
`notes: 'Added by CP-12-07.'` on new ones (with the notes above appended). It prefixes each
`cdc-hecat-2021` support's `verifier_note` with `Read at <url_checked>.`. Some new sources carry
two or more supports for one code. That is new in the 3.x registry. The registry tests check
`fit`, `verifier_note` and excerpt length per support, and do not forbid it.

**`build_registry.py`**: after the 2026-09-27 call (and after PR #66's 2026-10-16 call, if merged),
add `from verification_2026_10_16_b3 import apply as apply_2026_10_16_b3` and
`apply_2026_10_16_b3(out, CODES)`, before `SUPPORTED_CODES`. Set `codebook_version_reviewed`
and `last_reviewed` to the version and date of application.

Result, counted against the 3.1.4 registry (87 sources, 146 supports): **+13 sources, +30
supports** (100 sources, 176 supports), `codebook_extensions` unchanged (A2.2, A2.4). Add PR
#66's +3/+3 if it lands first.

Not done: removing WSCC from Y8.1 or Y8.9 (rejected, "WSCC demotion"); the Y8.13 reentry
I-Guide (y8b-17; the devil's advocate rejected it, and the act-now row does not list it); ELOF on
Y8.2 (rejected; R-09).

### `codebooks/youthOutcomesV3.data.ts`: `basis` (data only, not in the prompt)

| Code | Before | After |
|---|---|---|
| Y8.1 | CDC/ASCD WSCC (verified); Healthy People 2030 SH-04 sleep (verified); CDC YRBS sleep item (verified 2025) and screen-time hours items (2021 and earlier only; partial). | CDC/ASCD WSCC (verified, partial: school service components). Healthy People 2030 SH-04 sleep (verified). CP-12-07 (2026-10-16): CDC HECAT (2021) PA HBO 1-2, FN HBO 3 and 10, PHW HBO 1-2 (verified, direct: activity, fitness, fruit and vegetables, cooking, hygiene, sleep); CDC (2025) 2025 State and Local YRBS, standard HS questionnaire, Q83 sleep, Q73 activity, Q66-Q70 fruit and vegetables (verified, direct); Healthy People 2030 PA-06 (verified, direct); Healthy People 2030 PA-R02 screen time (verified, partial: parents following AAP limits). The earlier YRBS sleep and screen-time notes had no registry record and are replaced. |
| Y8.2 | SHAPE America (2024) National PE Standards, Standard 1 motor skills (verified). | SHAPE America (2024) National PE Standards, Standard 1 motor skills (verified). "Fine motor" has no source the codebook may cite: Head Start ELOF's Fine Motor sub-domain verifies (claim y8a-13) but the early-childhood rule bars it (decision A). See FD-P31. |
| Y8.3 | SHAPE America (2024) National Health Education Standards, Standard 1 (verified). | SHAPE America (2024) National Health Education Standards, Standard 1 (verified), indicators 1.2.3 and 1.5.3 injury and illness prevention, and Standard 3, indicator 3.8.3 reliable health information (verified, direct; CP-12-07). CDC HECAT (2021) Safety HBO 4 and 7 (verified, partial: outdoor safety and allergic reactions are not named). |
| Y8.4 | National Sex Education Standards, 2nd ed. (2020) (verified); CDC YRBS (verified). | National Sex Education Standards, 2nd ed. (2020) (verified), SH.8.CC.2 and SH.12.GS.1 (CP-12-07); CDC YRBS (verified); CDC (2025) 2025 State and Local YRBS, standard HS questionnaire, Q59-Q60 (verified, direct). |
| Y8.5 | Healthy People 2030 AH-01, AHS-01 (verified); ACF NYTD health insurance (verified). | Healthy People 2030 AH-01, AHS-01 (verified); ACF NYTD health insurance (verified). CP-12-07: CDC HECAT (2021) PHW HBO 9-10 chronic conditions (verified, direct) and HBO 11 screenings (verified, partial: dental and vision are not named); Healthy People 2030 OH-08 dental (verified, direct), MICH-17 developmental screening (verified, direct; early-childhood statements only), IID-08 HPV vaccine (verified, partial: one vaccine, ages 13-15); CDC (2025) 2025 State and Local YRBS, Q80 dental visit (verified, direct). |
| Y8.8 | NCTSN 12 Core Concepts (located). | Layne, Strand & NCTSN Task Force (2012), 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood, Concept 5, danger and safety (verified, partial: a framework for understanding stress responses, not an outcome framework). "Processing trauma" has no verified component yet (later-cycle item 4). |
| Y8.9 | CDC WSCC, Counseling, Psychological, and Social Services (verified). | Healthy People 2030 MHMD-03 (verified, direct; primary) and MHMD-06 (verified, direct); CDC (2025) 2025 National YRBS, Q94 counseling or therapy (verified, direct); CDC WSCC, Counseling, Psychological, and Social Services (verified, partial: a school service component). |
| Y8.10 | Search Institute 40 Developmental Assets, Safety (located; CP-01-07's use checked as partial). | Search Institute 40 Developmental Assets, Empowerment: Safety (verified, direct, CP-10-01). |
| Y8.11 | Re-verified 2026-09-27 (CP-10-01): CDC YRBS (verified, direct); Healthy People 2030 SU-05 (verified, direct for drug use). SAMHSA Strategic Prevention Framework dropped: it is a planning process, not an outcome framework (CP-01-13 item 5). | *(unchanged text, then)* CP-12-07 (2026-10-16): Miech et al. (2026), Monitoring the Future, perceived risk (verified, partial: the survey pairs it with disapproval, which is outside the code). Knowledge of risks and intentions: no verified component yet (requests V3, V4; FD-P32 if they fail). |
| Y8.12 | CDC YRBS (verified); CDC & U.S. ED (2014) bullying definitions (located). | CDC YRBSS About page, exposure to community violence (verified, direct; CP-12-07); CDC (2025) 2025 National YRBS, Q11, Q12, Q16, Q21-Q22, Q26-Q27 (verified, direct); CDC (2024) About Youth Violence (verified, direct); CDC & U.S. ED (2014) bullying definitions (verified, partial: bullying only). Dating-violence warning signs: no verified component yet (request V5; FD-P33 if it fails). |
| Y8.13 | Harris, Lockwood & Mengers (2009), CJCA white paper (verified). | Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper (verified, partial: recidivism measurement; CJCA is now CJJA). OJJDP (2017), Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing (verified, direct; CP-12-07). Completing probation, court conditions or a restorative agreement: codebook-defined, FD-P30. |

FD ids in `basis` are written as the provisional ids and renumbered with the entries at merge.

### `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation`

| Code | Field | Before | After |
|---|---|---|---|
| Y8.2 | `fidelity` | `"framework"` | `"adapted"` |
| Y8.2 | `deviation` | (absent) | `"FD-P31"` (provisional id), after `fidelity` |
| Y8.13 | `fidelity` | `"framework"` | `"adapted"` |
| Y8.13 | `deviation` | (absent) | `"FD-P30"` (provisional id) |

Both codes keep verified supports, so neither enters `codebook_extensions`.

### `codebook-refinement/DEVIATIONS.md`: new entries

Inserted after the last 3.x FD entry (FD-P20 today; after FD-P23 and its section if PR #66 merges
first). Field labels follow the parsed format (`- **Label:** value`).

```markdown
### FD-P30 · Y8.13

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper (verified, partial), recidivism measurement; OJJDP (2017), Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing (verified, direct): "an attempt to divert, or channel out, youthful offenders from the juvenile justice system".
- **Departs:** Y8.13's definition ("completing diversion or probation") and include ("completing a restorative agreement") make completion of probation, court-ordered conditions or a diversion agreement an outcome. Neither verified source frames completion as an outcome: the CJCA paper measures recidivism, and the OJJDP review describes diversion as a process. The completion element is the codebook's own.
- **Evidence:** S018 ("Youth diverted from court will complete their restorative agreement." → Y8.13) and S189 ("Youth will successfully complete probation requirements and court-ordered conditions." → Y8.13), adjudicated design rows.
- **Alternative considered:** observability (proposed by the researcher; rejected by the taxonomy, fidelity and devil's-advocate reviewers because observability moves a construct out of a domain with a pointer, and nothing moves here); dropping the completion wording (would orphan S018 and S189).
- **Decided in:** CP-12-07 (batch 3 research review, 2026-10-16), pending Severin.
- **Revisit:** when the OJJDP performance-measures lead for completion outcomes is filed and verified.

### FD-P31 · Y8.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** SHAPE America (2024), National Physical Education Standards, Standard 1, "Develops a variety of motor skills" (verified).
- **Departs:** the definition ("fine and gross motor") and include ("fine motor skills") name fine motor skills, which no verified SHAPE indicator names. Head Start ELOF's Fine Motor sub-domain covers the construct (claim y8a-13, SUPPORTED), but the early-childhood rule (Severin, 2026-09-24) allows ELOF only for constructs about young children by definition, and fine motor is not one (CP-10-01 removed ELOF from Y1.10 on the same rule). So no source the codebook may cite covers it. This is a codebook-defined element under a rule, not for lack of any framework.
- **Evidence:** S192 ("Children will demonstrate fine motor skills such as holding a pencil and using scissors." → Y8.2, alternate Y1.8), adjudicated design row.
- **Alternative considered:** an ELOF exception for Y8.2 (fit direct, no FD; the fidelity reviewer's option); dropping "fine motor" (MINOR) and moving S192 to Y1.8 as a named correction flip after PR #66; verifying SHAPE PE K-2 indicators for fine-motor wording (devil's advocate; unverified lead).
- **Decided in:** CP-12-07 (batch 3 research review, 2026-10-16), per decision A, pending Severin.
- **Revisit:** close it if a SHAPE PE fine-motor indicator verifies, or if Severin changes the early-childhood rule.
```

**Contingent entries (decision B3-2).** These are added only if V3 to V5 come back NOT SUPPORTED for
the element named. Under the recommended option they are counted. Under the alternative
(merged-components, the practitioner's view) they would be logged but not counted; the taxonomy,
fidelity and devil's-advocate reviewers reject that case.

```markdown
### FD-P32 · Y8.11

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC YRBSS, substance use behaviors (verified); Healthy People 2030 SU-05 (verified); Monitoring the Future (2026), perceived risk (verified, partial).
- **Departs:** "intentions" (definition, include "lower intentions") and, if V3/V4 fail, "knowledge of risks" (include) are not named by any verified Y8.11 source, which measure use and perceived risk.
- **Evidence:** S065 ("Youth will report lower intentions to vape in the next year." → Y8.11; the code's prompt example); H038 ("Youth increased their knowledge of the health risks associated with vaping and e-cigarette use." → Y8.11).
- **Alternative considered:** merged-components (not counted; rejected because coders can tell knowledge and intentions from use); dropping the words (flips S065, H038).
- **Decided in:** CP-12-07, per decision B3-2, pending Severin.
- **Revisit:** if a HECAT AOD or Tobacco HBO, or an NHES indicator, verifies for the element.

### FD-P33 · Y8.12

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC (2025) 2025 National YRBS, violence items; CDC (2024) About Youth Violence; CDC YRBSS, community violence (all verified).
- **Departs:** "dating-violence warning signs" (include) is knowledge, not violence or victimization, and no verified Y8.12 source names it.
- **Evidence:** S248 ("Youth will be able to identify warning signs of dating violence." → Y8.12, alternate Y8.4).
- **Alternative considered:** as FD-P32.
- **Decided in:** CP-12-07, per decision B3-2, pending Severin.
- **Revisit:** if a HECAT Violence Prevention HBO or an NHES indicator verifies for it.
```

### `codebook-refinement/DEVIATIONS.md`: dated note and drift table

New section after the entries (bullets use "**Label.**", not "**Label:**", because
`deviations.test.ts` parses this text as part of the last FD block; same device as CP-11-02):

```markdown
## Batch 3 review: Y8, 2026-10-16 (CP-12-07)

The batch 3 research review (Y8, F1, F2) closed most of Y8's unlogged departures by citation (Y8.1, Y8.3, Y8.5 and Y8.13's diversion half, through CDC HECAT 2021, Healthy People 2030, the 2025 YRBS instruments and OJJDP 2017). Two entries were opened: FD-P30 (Y8.13) and FD-P31 (Y8.2).

- **Y8.11 and Y8.12, knowledge, intentions and warning signs.** Pending verification (CP-12-07 requests V3 to V5). FD-P32 and FD-P33 are opened only for elements that stay uncovered (decision B3-2).
- **Not yet logged, pending later items.** Y8.6 "behavioral problems" (decision B3-4), Y8.7 "restored" (decision B3-3) and Y8.8 "processing trauma" (an NCTSN recovery concept is to be verified) each go past their sources today. Each has a citation or wording route. Y8.8 is the only one whose fallback is an FD.
```

Drift-table intro: append ", and for CP-12-07 (2026-10-16), which opened FD-P30 and FD-P31 in Y8".

Y8 row, before → after:

```
| Y8 Health | 13 | 0 | 0% | no |
| Y8 Health | 13 | 2 (Y8.2, Y8.13) | 15% | no |
```

If B3-2 opens both contingent entries: `4 (Y8.2, Y8.11, Y8.12, Y8.13) | 31% | no`.

**Arithmetic the recommendations leave out.** "Worst 4/13" does not count later item 4. If the
Y8.8 recovery claim also fails and a codebook-defined FD is opened for S078, Y8 reaches 5/13
(38%). That is over S4.9's third, so Y8's anchor would need re-review. Severin should see this
before choosing B3-2's counted option.

### `frameworkBasis`, source lines, `rulesText`, domain hints, `CONFUSIONS.md`

Unchanged. The basis names for HECAT, MTF, OJJDP and the other new frameworks are CP-12-14 item 27
(decision B3-1). Until then they back codes from the registry only. The fidelity reviewer reads S1.6
as needing them in the basis to count as framework fidelity; see decision B3-1.

## Sources

Only SUPPORTED and PARTIAL rows of `batch3/verify/verification-table.md` are cited, with the
verifier's excerpts.

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| cdc-hecat-2021 (new) | verified | index; PA HBO 1-2; FN HBO 3, 10; PHW HBO 1-2, 9-10 | y8a-01 PARTIAL "Physical Activity. Safety. Sexual Health. Tobacco. Violence Prevention. Comprehensive Health Education."; y8a-02 "HBO 1. Engage in moderate to vigorous physical activity for at least 60 minutes every day."; y8a-03 "HBO 2. Regularly engage in physical activities that enhance cardio-respiratory endurance, flexibility, muscle endurance, and muscle strength."; y8a-04 "HBO 3. Eat lots of fruits and vegetables."; y8a-05 "HBO 10. Prepare good-tasting, nutrient-dense foods for yourself and others."; y8a-06 "HBO 1. Practice appropriate hygiene habits."; y8a-07 "HBO 2. Get an appropriate amount of sleep and rest."; y8a-22 "Use healthcare services to address common infectious diseases and manage chronic diseases and conditions." |
| cdc-hecat-2021 (partial fits) | verified | S HBO 4, 7; PHW HBO 11 | y8a-17 "HBO 4. Apply safety rules and procedures to avoid risky behaviors and injury."; y8a-18 "HBO 7. Get help for oneself or others when injured or suddenly ill."; y8a-23 "Seek out healthcare professionals for appropriate screenings and examinations." |
| cdc-yrbs-2025-standard-hs (new) | verified | Q83, Q73, Q66-Q70, Q59-Q60, Q80 | y8a-08 "83. On an average school night, how many hours of sleep do you get?"; y8a-09 "73. During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?"; y8a-10 "66. During the past 7 days, how many times did you eat fruit? (Do not count fruit juice.)"; y8a-21 "The last time you had sexual intercourse, did you or your partner use a condom?"; y8a-27 "When was the last time you saw a dentist for a check-up, exam, teeth cleaning, or other dental work?" |
| cdc-yrbs-2025-national-hs (new) | verified | Q94; Q11-12, Q16, Q21-22, Q26-27 | y8b-07 "During the past 12 months, which of the following best describes your experience with counseling or therapy"; y8b-11 "During the past 12 months, how many times were you in a physical fight?" |
| cdc-yrbss | verified | About page, community violence (Y8.12 recheck) | y8b-12 "Student experiences: parental monitoring, school connectedness, unstable housing, and exposure to community violence." |
| hp2030-pa06, -pa-r02, -oh08, -mich17, -iid08 (new) | verified | objectives | y8a-11 "Increase the proportion of adolescents who do enough aerobic physical activity"; y8a-12 PARTIAL "Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years"; y8a-25 "Increase the proportion of children, adolescents, and adults who use the oral health care system"; y8a-26 "Increase the proportion of children who receive a developmental screening"; y8a-24 PARTIAL "Increase the proportion of adolescents who receive recommended doses of the human papillomavirus (HPV) vaccine" |
| hp2030-mhmd03, -mhmd06 (new) | verified | objectives | y8b-05 "Increase the proportion of children with mental health problems who receive treatment"; y8b-06 "Increase the proportion of adolescents with major depressive episodes (MDEs) who receive treatment" |
| shape-nhes-2024 | verified | 3.8.3; 1.2.3 | y8a-15 "3.8.3 Access valid and reliable sources of health information, products, services, and other resources."; y8a-16 "1.2.3 Identify ways to prevent or reduce risks for illnesses and injuries." |
| nses-2020 | verified | SH.8.CC.2, SH.12.GS.1 | y8a-19 "Develop a plan to access local resources and services related to reducing the risk of pregnancy and/or STDs (including HIV)" |
| nctsn-core-curriculum | verified (fit partial) | Concept 5; title | y8b-04 PARTIAL "Traumatic experiences can undermine children's sense of protection and safety" |
| mtf-2026-vol1 (new) | verified (fit partial) | perceived risk | y8b-10 PARTIAL "in particular perceived risk and disapproval associated with use of the various substances tracked by the survey." |
| cdc-youth-violence-2024 (new) | verified | definition | y8b-13 "It can include things like fighting, bullying, threats with weapons, and gang-related violence." |
| ojjdp-2017-diversion-review (new) | verified | diversion | y8b-16 "an attempt to divert, or channel out, youthful offenders from the juvenile justice system" |
| cjca-2009 | verified (fit partial, unchanged) | title, NCJ, rename note | y8b-14 PARTIAL "presents the results of the Group's efforts at developing standards for defining and measuring recidivism"; y8b-15 PARTIAL "originally incorporated as the Council of Juvenile Correctional Administrators on July 1, 1994" (attribution only) |
| search-40-assets | verified | Empowerment: Safety (component text only) | existing CP-10-01 record search-40-assets#6 (no new claim) |

Verified but not used here: y8a-13 (ELOF; barred by the early-childhood rule), y8a-14 (SHAPE PE
1.8.1, 1.12.9; not in the act-now list), y8b-01 and y8b-02 (Y8.6; later item 1), y8b-03 (Keyes
2006, title only), y8b-08 (MMWR; redundant with Q94), y8b-09 (Q13; rejected), y8b-17 (reentry
I-Guide; not listed).

## Verification requests

For `codebook-citation-verifier`, through the coordinator. The verifier must see only the fields
below. The HECAT module URLs follow the pattern of the verified module PDFs and are unverified
leads; the verifier should locate the right module PDF if the pattern is wrong.

There is no V1. The `source_kind` question above is about the record format, not a citation
claim, so the coordinator settles it.

```
V2  claim_id: y8a-28 · code: Y8.2 · cite_as: SHAPE America (2024). National Physical Education Standards. · claimed_component: A Standard 1 grade-span indicator (K-2 or later) that names fine motor or manipulative skills of the hands (e.g. using scissors, grasping a pencil). · url: https://shapeamerica.org/standards/pe/new-pe-standards/
V3  claim_id: y8b-18 · code: Y8.11 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module AOD (Alcohol and Other Drugs). · claimed_component: A healthy behavior outcome or knowledge expectation about knowing the health risks of alcohol or other drug use. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_aod.pdf
V4  claim_id: y8b-19 · code: Y8.11 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module T (Tobacco). · claimed_component: A healthy behavior outcome or knowledge expectation about knowing the health risks of tobacco or vaping products, or about students' intentions not to use them. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_t.pdf
V4b claim_id: y8b-20 · code: Y8.11 · cite_as: Miech, R. A., Patrick, M. E., O'Malley, P. M., Jager, J. O., & Jang, J. B. (2026). Monitoring the Future national survey results on drug use, 1975-2025. Institute for Social Research, University of Michigan. · claimed_component: Does the volume report a measure of students' intentions or expectations to use a substance in the future? · url: https://monitoringthefuture.org/wp-content/uploads/2025/12/mtfvol12026.pdf
V5  claim_id: y8b-21 · code: Y8.12 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module V (Violence Prevention). · claimed_component: A healthy behavior outcome or knowledge expectation about recognizing warning signs of dating or relationship violence. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_v.pdf
V5b claim_id: y8a-29 · code: Y8.11, Y8.12 · cite_as: SHAPE America (2024). National Health Education Standards. · claimed_component: A Standard 1 indicator about knowing the health risks of substance use, or about recognizing signs of unhealthy or violent relationships. · url: https://shapeamerica.org/standards/health/new-he-standards/
```

What depends on the answers: V2 SUPPORTED closes FD-P31 (Y8.2 back to framework). V3, V4 or V5b
SUPPORTED for knowledge keeps "knowledge of risks" out of FD-P32. V4 or V4b SUPPORTED for
intentions keeps "intentions" out. V5 or V5b SUPPORTED means FD-P33 is not opened. Any new
SUPPORTED claim becomes a support row in a follow-up PATCH, not in this CP as drafted.

## Decisions for Severin (this CP depends on)

- **A (early-childhood rule).** FD-P31 as drafted keeps the rule. With the ELOF exception, drop
  FD-P31 and add `head-start-elof → Y8.2` (fit direct, y8a-13). That touches the ELOF entry, which
  is under PR #66 (R-09), so it waits for #66. Dropping "fine motor" is MINOR, flips S192, and is
  a different CP.
- **B3-2.** Whether FD-P32 and FD-P33 are counted (recommended) or merged-components.
- **D (timing).** Recommended: land now (registry only). It does not touch PR #62 or PR #66
  boundaries: no Y1 code, no `head-start-elof` or `mckinney-vento` change, no F1.9.
- **B3-1** affects how much this CP buys: unless CP-12-14 item 27 lands, the fidelity reviewer
  would not count HECAT, MTF or OJJDP as closing the gaps.
- **S4.1 split** (see "One kind of change"): accept as one CP, or ask the coordinator for a second
  ID for the FD part.
- **Unlogged Y8.6, Y8.7, Y8.8 departures** stay unlogged until the later items. The S4.9 arithmetic
  above is the reason to settle them in the next cycle.

## Not bundled (separate CPs if wanted)

- The Y8.8 source line in the prompt also carries the wrong NCTSN title ("…in Children and
  Families"). It is the same S1.4 fault, but it is prompt text, so it is offered to CP-12-14 (see
  there). It is not added here.
- y8a-14 (SHAPE PE 1.8.1, 1.12.9 for Y8.2 outdoor skills and swimming) and y8b-02 (YRBS Q29 for
  Y8.6; later item 1 says to add it "meanwhile") are verified rows the act-now list does not
  include.
- Null `tier`/`publisher` on non-Y8 entries (e.g. `digital-equity-act`).
- The stale "built, not yet the default" heading in `DEVIATIONS.md`.

## Gold impact

- Rows expected to change code: **none** (nothing in the prompt changes).
- Design rows the edits rest on: H013, H086, S207, S121, S187, H085 (Y8.1); S068, S192 (Y8.2);
  S108 (Y8.3); S002, S251 (Y8.4); S061, S064, S094 (Y8.5); S078 (Y8.8); S114, H034 (Y8.9); S038
  (Y8.10); S015, S065, H038 (Y8.11); S134, S248 (Y8.12); S018, S160, S189 (Y8.13). H rows here are
  the pre-3.0 held-out rows that now sit in the design file (R-01).
- New proposed gold rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read or used.

## Judge result

Not run. There is no prompt change to score. `npm test` (`deviations.test.ts`,
`youthOutcomesV3.test.ts` registry checks) and `npm run typecheck:server` are the gate.
