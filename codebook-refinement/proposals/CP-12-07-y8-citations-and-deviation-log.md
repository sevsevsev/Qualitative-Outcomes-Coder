# CP-12-07: Y8 citations and the deviation log that follows from them

**In plain words.** This change adds checked research sources behind most of the health codes, so that codes such as Healthy Daily Habits (Y8.1), Health Knowledge and Safety Skills (Y8.3) and Health Care Access and Condition Management (Y8.5) rest on named parts of government health frameworks instead of on general framework names. It also writes down, in the deviations log, two places where the codebook goes beyond any source it may cite: "fine motor skills" in Motor and Sport Skills (Y8.2), which you decided to keep as the codebook's own wording, and "completing probation or a restorative agreement" in Justice Involvement, Diversion and Reentry (Y8.13). Four more possible gaps (substance-risk knowledge and intentions in Substance Use (Y8.11), dating-violence warning signs in Violence, Bullying and Victimization (Y8.12), screen time in Y8.1, and vaccinations in general in Y8.5) are sent to the source checker first, and each one is logged as a deviation only if no source is found. None of this text is shown to the coding model, so no test run is needed and it can land now. If all four checks fail, five or more of the 13 health codes would deviate, which is more than a third, and the health domain's anchor framework would have to be re-reviewed before any other health change.

| Field | Value |
|---|---|
| Type | CITATION_FIX. It also adds the S1.6 deviation entries for the Y8 elements these citations leave uncovered; those entries are this CP's required S4.1 deviation statement, because they depend on exactly which supports land here. |
| Codes touched | Registry and `basis`: Y8.1, Y8.3, Y8.4, Y8.5, Y8.8, Y8.9, Y8.11, Y8.12, Y8.13. `fidelity` and `deviation` fields: Y8.2 and Y8.13 now; Y8.1, Y8.5, Y8.11 and Y8.12 only for an element whose verification request fails. **Y8.2's `basis` text only** (no registry change). Y8.6, Y8.7 and Y8.10 are not touched. No definition, include, exclude, useInstead, example, source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today, so 3.1.5; one PATCH later for each of PR #62 or PR #66 that lands first) |
| Requirement served | R1 frameworks · R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: registry rows in `v3/verification_2026_10_16_b3.py` (HECAT, Healthy People 2030 objectives, MTF, CDC youth violence, OJJDP, SHAPE and NSES supports, NCTSN and CJCA titles); `basis` for Y8.1-Y8.5, Y8.8, Y8.9, Y8.11-Y8.13; FD-P28 (Y8.13) and FD-P29 (Y8.2, V2 not supported); FD-P30 (Y8.11, intentions only after V4b), FD-P31 (Y8.12, V5 and V5b not supported) and FD-P32 (Y8.1, V12 PARTIAL) opened; no Y8.5 entry (V13 SUPPORTED); dated note and drift row (Y8 at 5/13, over the line). Waits for the gate: Y8 `frameworkBasis` names (CP-12-29). |
| Reaches the coding prompt? | **No.** Registry, `basis`, `fidelity`, `deviation` and `DEVIATIONS.md` are not printed in `definitionsText` (`youthOutcomesV3.ts` prints definition, include, exclude, use instead, source and example). No scoring run is needed; `npm test` is the gate. The explorer shows the new fidelity on the Y8.2 and Y8.13 cards. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **new FD-P28 (provisional id)**, Y8.13, codebook-defined element, counted. **new FD-P29 (provisional id)**, Y8.2, codebook-defined element, counted (decision Y1-1). **Verification-gated, counted (decisions Y8-1, G3, G6):** FD-P30 (Y8.11), FD-P31 (Y8.12), FD-P32 (Y8.1 screen time), FD-unassigned (Y8.5) (Y8.5 immunizations), each opened only for an element its verification request does not cover. Every other item closes a gap by citation and states none. Y8 drift goes from 0/13 to 2/13 (15%) now; the worst case is 6/13 (46%), over S4.9's third. |

## Decisions applied (2026-10-16)

| Decision | Effect on this CP |
|---|---|
| Y1-1 | Head Start ELOF stays Y1.8-only. Y8.2 keeps "fine motor" as a codebook-defined element: FD-P29 opens now. S192 stays Y8.2. |
| Y8-1, G6 | Y8.11 and Y8.12 knowledge, intentions and warning signs are **counted** entries (coders can tell knowledge and intentions from use, so the strict merged-components test fails). They open only for elements that V3, V4, V4b, V5 and V5b do not cover. |
| G3 | A PARTIAL fit avoids an FD only where the source is broader than the code. Applied row by row below ("G3 check"). Two partial rows the draft relied on fail the test: PA-R02 for Y8.1 screen time (parents' rule-following, not the young person's own screen time) and IID-08 for Y8.5 immunizations (one vaccine; the code names immunizations in general). Both now follow the Y8-1 pattern: verify first (V12, V13), log a counted entry if that fails. |
| G5 | HECAT Safety HBO 4 and 7 cover "outdoor safety" and "allergic reaction" in Y8.3, and HECAT PHW HBO 11 covers dental and vision screenings in Y8.5, as named instances of categories the registry quotes. No FD. |
| G7 | S4.9 applies to Y8 as written. At 5/13 or more, Y8's anchor is re-reviewed before any further Y8 change. |
| G8 | Every new entry here is on the publisher's own host (cdc.gov, odphp.health.gov, ojjdp.ojp.gov, nctsn.org, monitoringthefuture.org). `nses-2020` keeps its existing advocatesforyouth.org copy; this CP only adds supports to it, so its host question belongs to CP-12-28's sweep. |
| G10 | Everything in this CP is no-prompt and lands now. |
| G2 | The new frameworks are named in Y8's `frameworkBasis` as a "secondary" clause by CP-12-29 (gated), not here. Until then they back codes from the registry. |
| Y8-2, Y8-3 | Y8.7 "restored" and Y8.6 behavior are later Y8 CPs (see the dated note). Not touched here. |

## Problem

Batch 3 research review, recommendations "Act now", B3-CP1, items 1 to 14. All four reviewers
accepted each citation row (where the devil's advocate dissented, the dissent is noted).

1. **YRBS.** The two 2025 YRBS instruments and the `codebook_names` fix are handed to CP-12-23 (see
   "Handed to cross-batch CPs"). This CP's `basis` strings cite the YRBS items that CP-12-23
   registers.
2. **Y8.1.** Activity, nutrition, cooking, hygiene and sleep have no component-level source. WSCC
   (partial) names school service components only. Y8.1's `basis` says "CDC YRBS sleep item
   (verified 2025)", but no registry support or 2026-09-27 verification record backs it
   (checked: `source-verification-2026-09-27.json` has no YRBS row for Y8.1). Screen time has no
   source that measures a young person's own screen time.
3. **Y8.3.** First aid, injury prevention and reliable health information are not named by NHES
   Standard 1 as verified (`shape-nhes-2024` verifier note).
4. **Y8.4.** Supports are framework-level only.
5. **Y8.5.** Dental, vision, screenings, immunizations and chronic conditions have no component.
6. **Y8.8.** The NCTSN support is not pinned to a concept, and `cite_as` has the wrong title.
7. **Y8.9.** Service use rests only on WSCC (partial).
8. **Y8.11.** "Perceived risk" is uncovered.
9. **Y8.12.** Community violence is uncovered, and the YRBS support excerpt is generic (CP-12-23 re-checks it).
10. **Y8.13.** It has no direct support (CJCA is partial).
11. **Y8.13 completion** of probation or an agreement has no source (adjudicated S018, S189).
12. **Y8.2 "fine motor"** goes past SHAPE PE Standard 1. ELOF verifies (y8a-13), but the
    early-childhood rule bars it (adjudicated S192; decision Y1-1).
13. **Y8.11, Y8.12 knowledge, intentions, warning signs** go past YRBS and MTF (R-03; H038, S065,
    S248 adjudicated).

## Why this is the smallest fit (STANDARDS S2.2)

Not required for CITATION_FIX. Every gap is closed by a registry row where one verified. Only
elements with no admissible source get FD entries. No code text changes: rewording Y8.2 ("fine
motor") or Y8.13 ("completing") would flip S192, S018 and S189, and dropping "less screen time"
from Y8.1 would flip S207 and H086.

## What lands when

| Part | Reaches the prompt? | When |
|---|---|---|
| Registry rows (`verification_2026_10_16_b3.py`, Y8 section, and the record file) | no | now (after CP-12-03, which owns the shared NHES 2024 re-quote, and after or with CP-12-23, whose YRBS rows and Y8.1 YRBS sentence the `basis` strings build on) |
| `basis` for Y8.1, Y8.2, Y8.3, Y8.4, Y8.5, Y8.8, Y8.9, Y8.11, Y8.12, Y8.13 | no | now, same commit |
| `fidelity`/`deviation` for Y8.2 and Y8.13; FD-P28, FD-P29; dated note; drift row | no | now, same commit |
| FD-P30, FD-P31, FD-P32, FD-unassigned (Y8.5) and their `fidelity`/`deviation` fields | no | when V3-V5b, V12 and V13 return: a follow-up PATCH opens an entry for each element still uncovered and adds a support row for each SUPPORTED claim |
| Prompt-side naming of the new frameworks | yes | CP-12-29 (G2), in the one gate after PRs #62 and #66. Not part of this CP. |

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
y8a-01..07, y8a-11, y8a-12, y8a-15..19, y8a-22..26, y8b-04..06, y8b-10, y8b-13, y8b-16.
CP-12-08, CP-12-09 and CP-12-23 append theirs.

**`source_kind` was not recorded by the batch-3 verifier.** The 2026-09-27 script asserts
`source_kind == 'primary'` for new sources. Every new entry here is fetched from the publisher's
own host (cdc.gov, odphp.health.gov, ojjdp.ojp.gov, nctsn.org, monitoringthefuture.org), which
is `primary` under G8. **The coordinator records these values (or has the verifier record them)
before the record file is written.** The drafter does not set verification fields.

**New module `codebook-refinement/v3/verification_2026_10_16_b3.py`.** A separate module from
PR #66's `verification_2026_10_16.py` (CP-11-01), so the two PRs do not collide. It has the same
shape: docstring, `RECORD`, `DATE = '2026-10-16'`, `BY`, input tables, `apply(out, codes)`. It
reuses CP-11-01's helper tables (`SUPPORT_RECHECK`, `NOTES`, `PUBLISHER`, `SOURCE_EXCERPT`)
when PR #66 has merged, and defines the same helpers otherwise. It asserts that every claim it
uses is SUPPORTED or PARTIAL. `fit` is `direct` for SUPPORTED and `partial` for PARTIAL unless
it is set explicitly below.

```python
# --- CP-12-07 (Y8) ---------------------------------------------------------

NEW = [
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
        ('Y8.3', 'Module S, HBO 4: safety rules to avoid injury (outdoor safety as a named instance, G5)', 'y8a-17'),          # PARTIAL
        ('Y8.3', 'Module S, HBO 7: get help when injured or suddenly ill (allergic reactions as a named instance, G5)', 'y8a-18'), # PARTIAL
        ('Y8.5', 'Module PHW, HBO 9-10: prevent and manage chronic conditions', 'y8a-22'),
        ('Y8.5', 'Module PHW, HBO 11: screenings and examinations (dental and vision as named instances, G5)', 'y8a-23')]},     # PARTIAL
    {'id': 'hp2030-pa06', 'cite_as': 'Healthy People 2030, objective PA-06: Increase the proportion of adolescents who do enough aerobic physical activity. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.1', 'adolescent aerobic physical activity', 'y8a-11')]},
    {'id': 'hp2030-pa-r02', 'cite_as': 'Healthy People 2030, research objective PA-R02: Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.1', "parents following AAP recommendations on limiting children's screen time (the parent is the actor; not a source for the young person's own screen time, G3)", 'y8a-12')]},  # PARTIAL
    {'id': 'hp2030-oh08', 'cite_as': 'Healthy People 2030, objective OH-08: Increase use of the oral health care system. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.5', 'use of the oral health care system', 'y8a-25')]},
    {'id': 'hp2030-mich17', 'cite_as': 'Healthy People 2030, objective MICH-17: Increase the proportion of children who receive a developmental screening. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.5', 'developmental screening of young children (early-childhood statements only)', 'y8a-26')]},
    {'id': 'hp2030-iid08', 'cite_as': 'Healthy People 2030, objective IID-08: Increase the proportion of adolescents who get recommended doses of the HPV vaccine. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.5', 'adolescent HPV vaccination (one vaccine, ages 13-15; narrower than "immunizations", G3)', 'y8a-24')]},  # PARTIAL
    {'id': 'hp2030-mhmd03', 'cite_as': 'Healthy People 2030, objective MHMD-03: Increase the proportion of children with mental health problems who get treatment. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.9', 'children (4-17) with mental health problems who receive treatment', 'y8b-05')]},
    {'id': 'hp2030-mhmd06', 'cite_as': 'Healthy People 2030, objective MHMD-06: Increase the proportion of adolescents with depression who get treatment. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
     'supports': [('Y8.9', 'adolescents (12-17) with major depressive episodes who receive treatment', 'y8b-06')]},
    {'id': 'mtf-2026-vol1',
     'cite_as': 'Miech, R. A., Patrick, M. E., O\'Malley, P. M., Jager, J. O., & Jang, J. B. (2026). Monitoring the Future national survey results on drug use, 1975-2025: Overview and detailed results for secondary school students. Institute for Social Research, University of Michigan.',
     'tier': 'C', 'publisher': 'Institute for Social Research, University of Michigan', 'year': 2026,
     'supports': [('Y8.11', 'perceived risk of substance use (the survey\'s paired "disapproval" measure is not relied on; source broader than the code, G3)', 'y8b-10')]},  # PARTIAL
    {'id': 'cdc-youth-violence-2024', 'cite_as': 'Centers for Disease Control and Prevention (2024). About Youth Violence.',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2024,
     'supports': [('Y8.12', 'definition of youth violence: fighting, bullying, threats with weapons, gang-related violence', 'y8b-13')]},
    {'id': 'ojjdp-2017-diversion-review',
     'cite_as': 'Office of Juvenile Justice and Delinquency Prevention (2017, February). Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing. NCJ 249701.',
     'tier': 'A', 'publisher': 'Office of Juvenile Justice and Delinquency Prevention', 'year': 2017,
     'supports': [('Y8.13', 'diversion of youth from formal juvenile court processing', 'y8b-16')]},
]

# Supports added to existing sources: (source, code, component, claim).
# shape-nhes-2024 is re-quoted by CP-12-03 (Y4.12); apply CP-12-03 first.
EXTRA_SUPPORTS = [
    ('shape-nhes-2024', 'Y8.3', "Standard 3, indicator 3.8.3: 'Access valid and reliable sources of health information'", 'y8a-15'),
    ('shape-nhes-2024', 'Y8.3', "Standard 1, indicators 1.2.3 and 1.5.3: 'prevent or reduce risks for illnesses and injuries'", 'y8a-16'),
    ('nses-2020', 'Y8.4', 'SH.8.CC.2 methods of contraception and how to access them; SH.12.GS.1 plan to access local services', 'y8a-19'),
]

# (source, code) -> (claim, fit, component). Replaces the support's excerpt, note and component.
SUPPORT_RECHECK = {
    ('nctsn-core-curriculum', 'Y8.8'): ('y8b-04', 'partial', 'Core Concept 5: danger and safety are core concerns in the lives of traumatized children (Concept 10, culture, is not relied on)'),
}

CITE_AS = {
    'nctsn-core-curriculum': 'Layne, C. M., Strand, V., & NCTSN Core Curriculum on Childhood Trauma Task Force (2012). 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood. National Child Traumatic Stress Network.',
    'cjca-2009': 'Harris, P. W., Lockwood, B., & Mengers, L. (2009, November). Defining and Measuring Recidivism: A CJCA White Paper. Council of Juvenile Correctional Administrators. NCJ 237765.',
}
NOTES = {  # appended to `notes`
    'nctsn-core-curriculum': "Title corrected 2026-10-16 (claim y8b-04): the document's own title is '12 Core Concepts for Understanding Traumatic Stress Responses in Childhood'.",
    'cjca-2009': "Title corrected 2026-10-16 (claim y8b-14, PARTIAL: the NCJRS abstract confirms title, authors, date and CJCA authorship, not the recidivism detail; the full-text URL and excerpt are kept). NCJRS record: https://www.ojp.gov/ncjrs/virtual-library/abstracts/cjca-white-paper-defining-and-measuring-recidivism. The CJJA rename note is CP-12-24's.",
    'cdc-hecat-2021': 'Module-level supports were read in the module PDFs: hecat_module_pa.pdf, _fn.pdf, _phw.pdf and _s.pdf under https://www.cdc.gov/healthy-youth/hecat/pdfs/. Each support verifier_note starts with the PDF it was read in. The AOD, Tobacco and Violence Prevention modules, a PA screen-time HBO and a PHW immunization HBO are not verified (requests V3 to V5, V12, V13).',
    'hp2030-mich17': 'Early-childhood source, allowed because developmental screening of infants and toddlers is about young children by definition (early-childhood rule; S061).',
    'hp2030-pa-r02': 'Partial and kept for evidence only: the parent is the actor, so the row does not cover the young person\'s own screen time (G3). FD-P32 opens if V12 finds no youth-level source.',
    'hp2030-iid08': 'Partial and kept for evidence only: one vaccine, so it does not cover "immunizations" in general (G3). FD-unassigned (Y8.5) opens if V13 finds no general source.',
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

Result, counted against the 3.1.4 registry (87 sources, 146 supports): **+11 sources, +23
supports** from this CP (98 sources, 169 supports), `codebook_extensions` unchanged (A2.2, A2.4).
CP-12-23 adds its two YRBS entries and seven supports, and PR #66 its +3/+3, on top.

Not done: removing WSCC from Y8.1 or Y8.9 (rejected, "WSCC demotion"); the Y8.13 reentry
I-Guide (y8b-17; the devil's advocate rejected it, and the act-now row does not list it); ELOF on
Y8.2 (rejected by decision Y1-1; R-09).

### G3 check (every PARTIAL row this CP relies on)

| Code, element | Partial row | Source broader than the code? | Result |
|---|---|---|---|
| Y8.3 outdoor safety, allergic reaction | HECAT S HBO 4, 7 | yes (general safety and "suddenly ill" categories, quoted) | no FD (G3, G5) |
| Y8.5 dental, vision screenings | HECAT PHW HBO 11 | yes ("screenings and examinations", quoted); OH-08 is direct for dental | no FD (G3, G5) |
| Y8.5 immunizations | HP2030 IID-08 | **no** (one vaccine; the code names immunizations in general) | verify (V13); FD-unassigned (Y8.5) if it fails |
| Y8.1 screen time | HP2030 PA-R02 | **no** (a parent's rule-following, not the young person's own screen time) | verify (V12); FD-P32 if it fails |
| Y8.11 perceived risk | MTF (2026) | yes (perceived risk and disapproval; only risk is used) | no FD |
| Y8.8 danger and safety | NCTSN Concept 5 | not assessed here: Y8.8 "processing trauma" is later item 4 | unchanged (see dated note) |
| Y8.13 recidivism | CJCA (2009), unchanged fit | the paper defines the recidivism measures the code names | unchanged |

### `codebooks/youthOutcomesV3.data.ts`: `basis` (data only, not in the prompt)

The YRBS phrases name the entries CP-12-23 registers (`cdc-yrbs-2025-standard-hs`,
`cdc-yrbs-2025-national-hs`, and the `cdc-yrbss` Y8.12 re-check). CP-12-23 rewrites only the YRBS
sentence of Y8.1's `basis` and lands first (or in the same commit); the Y8.1 "Before" below is its
"After", and this CP adds its sentences around that YRBS sentence unchanged. For the other codes
this CP writes the whole `basis` string, using CP-12-23's item wording.

| Code | Before | After |
|---|---|---|
| Y8.1 | CDC/ASCD WSCC (verified); Healthy People 2030 SH-04 sleep (verified); CDC (2025) 2025 State and Local YRBS, standard high school questionnaire, Q83 sleep, Q73 physical activity, Q66-Q70 fruit and vegetables (verified, direct; CP-12-23). YRBS screen-time hours items exist only in 2021 and earlier questionnaires (research-basis appendix A, R03); not cited. *(CP-12-23's text)* | CDC/ASCD WSCC (verified, partial: school service components); Healthy People 2030 SH-04 sleep (verified); CDC (2025) 2025 State and Local YRBS, standard high school questionnaire, Q83 sleep, Q73 physical activity, Q66-Q70 fruit and vegetables (verified, direct; CP-12-23). YRBS screen-time hours items exist only in 2021 and earlier questionnaires (research-basis appendix A, R03); not cited. CP-12-07 (2026-10-16): CDC HECAT (2021) PA HBO 1-2, FN HBO 3 and 10, PHW HBO 1-2 (verified, direct: activity, fitness, fruit and vegetables, cooking, hygiene, sleep); Healthy People 2030 PA-06 (verified, direct). Screen time: Healthy People 2030 PA-R02 (verified, partial: parents following AAP limits, not the young person's own screen time); youth-level source pending request V12 (FD-P32 if it fails). |
| Y8.2 | SHAPE America (2024) National PE Standards, Standard 1 motor skills (verified). | SHAPE America (2024) National PE Standards, Standard 1 motor skills (verified). "Fine motor" has no source the codebook may cite: Head Start ELOF's Fine Motor sub-domain verifies (claim y8a-13), but the early-childhood rule keeps ELOF for Y1.8 only (decision Y1-1). See FD-P29. |
| Y8.3 | SHAPE America (2024) National Health Education Standards, Standard 1 (verified). | SHAPE America (2024) National Health Education Standards, Standard 1 (verified), indicators 1.2.3 and 1.5.3 injury and illness prevention, and Standard 3, indicator 3.8.3 reliable health information (verified, direct; CP-12-07). CDC HECAT (2021) Safety HBO 4 and 7 (verified, partial: the general categories cover outdoor safety and allergic reactions). |
| Y8.4 | National Sex Education Standards, 2nd ed. (2020) (verified); CDC YRBS (verified). | National Sex Education Standards, 2nd ed. (2020) (verified), SH.8.CC.2 and SH.12.GS.1 (CP-12-07); CDC YRBS (verified); CDC (2025) 2025 State and Local YRBS, standard HS questionnaire, Q59-Q60 (verified, direct; CP-12-23). |
| Y8.5 | Healthy People 2030 AH-01, AHS-01 (verified); ACF NYTD health insurance (verified). | Healthy People 2030 AH-01, AHS-01 (verified); ACF NYTD health insurance (verified). CP-12-07: CDC HECAT (2021) PHW HBO 9-10 chronic conditions (verified, direct) and HBO 11 screenings (verified, partial: the general category covers dental and vision); Healthy People 2030 OH-08 dental (verified, direct), MICH-17 developmental screening (verified, direct; early-childhood statements only); CDC (2025) 2025 State and Local YRBS, Q80 dental visit (verified, direct; CP-12-23). Immunizations: Healthy People 2030 IID-08 HPV vaccine (verified, partial: one vaccine, ages 13-15); a general source is pending request V13 (FD-unassigned (Y8.5) if it fails). |
| Y8.8 | NCTSN 12 Core Concepts (located). | Layne, Strand & NCTSN Task Force (2012), 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood, Concept 5, danger and safety (verified, partial: a framework for understanding stress responses, not an outcome framework). "Processing trauma" has no verified component yet (later item 4). |
| Y8.9 | CDC WSCC, Counseling, Psychological, and Social Services (verified). | Healthy People 2030 MHMD-03 (verified, direct; primary) and MHMD-06 (verified, direct); CDC (2025) 2025 National YRBS, Q94 counseling or therapy (verified, direct; CP-12-23); CDC WSCC, Counseling, Psychological, and Social Services (verified, partial: a school service component). |
| Y8.11 | Re-verified 2026-09-27 (CP-10-01): CDC YRBS (verified, direct); Healthy People 2030 SU-05 (verified, direct for drug use). SAMHSA Strategic Prevention Framework dropped: it is a planning process, not an outcome framework (CP-01-13 item 5). | *(unchanged text, then)* CP-12-07 (2026-10-16): Miech et al. (2026), Monitoring the Future, perceived risk (verified, partial: the survey pairs it with disapproval, which is outside the code). Knowledge of risks and intentions: no verified component yet (requests V3, V4, V4b, V5b; FD-P30 for any element they do not cover). |
| Y8.12 | CDC YRBS (verified); CDC & U.S. ED (2014) bullying definitions (located). | CDC YRBSS About page, exposure to community violence (verified, direct; CP-12-23); CDC (2025) 2025 National YRBS, Q11, Q12, Q16, Q21-Q22, Q26-Q27 (verified, direct; CP-12-23); CDC (2024) About Youth Violence (verified, direct; CP-12-07); CDC & U.S. ED (2014) bullying definitions (verified, partial: bullying only). Dating-violence warning signs: no verified component yet (requests V5, V5b; FD-P31 if they fail). |
| Y8.13 | Harris, Lockwood & Mengers (2009), CJCA white paper (verified). | Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper (verified, partial: recidivism measurement; CJCA is now CJJA). OJJDP (2017), Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing (verified, direct; CP-12-07). Completing probation, court conditions or a restorative agreement: codebook-defined, FD-P28. |

FD ids in `basis` are written as the provisional ids and renumbered with the entries at merge.

### `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation` (lands now)

| Code | Field | Before | After |
|---|---|---|---|
| Y8.2 | `fidelity` | `"framework"` | `"adapted"` |
| Y8.2 | `deviation` | (absent) | `"FD-P29"` (provisional id), after `fidelity` |
| Y8.13 | `fidelity` | `"framework"` | `"adapted"` |
| Y8.13 | `deviation` | (absent) | `"FD-P28"` (provisional id) |

Both codes keep verified supports, so neither enters `codebook_extensions`. The follow-up PATCH
sets the same two fields on Y8.1, Y8.5, Y8.11 and Y8.12 for each entry it opens.

### `codebook-refinement/DEVIATIONS.md`: new entries (land now)

Inserted after the last 3.x FD entry (FD-P20 today; after FD-P23 and its section if PR #66 merges
first). Field labels follow the parsed format (`- **Label:** value`).

```markdown
### FD-P28 · Y8.13

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper (verified, partial), recidivism measurement; OJJDP (2017), Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing (verified, direct): "an attempt to divert, or channel out, youthful offenders from the juvenile justice system".
- **Departs:** Y8.13's definition ("completing diversion or probation") and include ("completing a restorative agreement") make completion of probation, court-ordered conditions or a diversion agreement an outcome. Neither verified source frames completion as an outcome: the CJCA paper measures recidivism, and the OJJDP review describes diversion as a process. The completion element is the codebook's own.
- **Evidence:** S018 ("Youth diverted from court will complete their restorative agreement." → Y8.13) and S189 ("Youth will successfully complete probation requirements and court-ordered conditions." → Y8.13), adjudicated design rows.
- **Alternative considered:** observability (proposed by the researcher; rejected by the taxonomy, fidelity and devil's-advocate reviewers because observability moves a construct out of a domain with a pointer, and nothing moves here); dropping the completion wording (would orphan S018 and S189).
- **Decided in:** CP-12-07 (batch 3 research review, 2026-10-16; decisions settled by Severin on the recommended options).
- **Revisit:** when the OJJDP performance-measures lead for completion outcomes is filed and verified.

### FD-P29 · Y8.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** SHAPE America (2024), National Physical Education Standards, Standard 1, "Develops a variety of motor skills" (verified).
- **Departs:** the definition ("fine and gross motor") and include ("fine motor skills") name fine motor skills, which no verified SHAPE indicator names. Head Start ELOF's Fine Motor sub-domain covers the construct (claim y8a-13, SUPPORTED), but the early-childhood rule (Severin, 2026-09-24; reaffirmed by decision Y1-1, 2026-10-16) keeps ELOF for Y1.8, whose construct is about young children by definition, and fine motor is not. So no source the codebook may cite covers it. This is a codebook-defined element under a rule, not for lack of any framework.
- **Evidence:** S192 ("Children will demonstrate fine motor skills such as holding a pencil and using scissors." → Y8.2, alternate Y1.8), adjudicated design row.
- **Alternative considered:** an ELOF exception for Y8.2 (fit direct, no FD; the fidelity reviewer's option) and dropping "fine motor" with S192 moved to Y1.8 (MINOR); both rejected by decision Y1-1.
- **Decided in:** CP-12-07 (batch 3 research review, 2026-10-16), decision Y1-1.
- **Revisit:** close it if a SHAPE PE fine-motor indicator verifies (request V2), or if Severin changes the early-childhood rule.
```

### Entries opened by the follow-up PATCH (verification-gated)

These are **counted** entries (decisions Y8-1, G3, G6). The follow-up PATCH opens each one only
for the elements its requests leave uncovered, drops a covered element from the "Departs" line,
and adds a support row for each SUPPORTED claim. The text is fixed now so the follow-up is
mechanical.

```markdown
### FD-P30 · Y8.11

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC YRBSS, substance use behaviors (verified); Healthy People 2030 SU-05 (verified); Monitoring the Future (2026), perceived risk (verified, partial).
- **Departs:** "intentions" (definition, include "lower intentions") and "knowledge of risks" (include) are not named by any verified Y8.11 source, which measure use and perceived risk.
- **Evidence:** S065 ("Youth will report lower intentions to vape in the next year." → Y8.11; the code's prompt example); H038 ("Youth increased their knowledge of the health risks associated with vaping and e-cigarette use." → Y8.11).
- **Alternative considered:** merged-components, not counted (rejected by decision G6: coders can tell knowledge and intentions from use); dropping the words (flips S065, H038).
- **Decided in:** CP-12-07, decisions Y8-1 and G6.
- **Revisit:** if a HECAT AOD or Tobacco HBO, or an NHES indicator, verifies for the element.

### FD-P31 · Y8.12

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC (2025) 2025 National YRBS, violence items; CDC (2024) About Youth Violence; CDC YRBSS, community violence (all verified).
- **Departs:** "dating-violence warning signs" (include) is knowledge, not violence or victimization, and no verified Y8.12 source names it.
- **Evidence:** S248 ("Youth will be able to identify warning signs of dating violence." → Y8.12, alternate Y8.4).
- **Alternative considered:** as FD-P30.
- **Decided in:** CP-12-07, decisions Y8-1 and G6.
- **Revisit:** if a HECAT Violence Prevention HBO or an NHES indicator verifies for it.

### FD-P32 · Y8.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC HECAT (2021) PA, FN and PHW modules (verified); Healthy People 2030 PA-06 and SH-04 (verified); Healthy People 2030 PA-R02 (verified, partial): "Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years".
- **Departs:** "recreational screen time" (definition) and "less screen time" (include) make the young person's own screen time an outcome. The only verified source measures whether parents follow screen-time limits, which is not broader than the code, so under decision G3 it does not cover the element.
- **Evidence:** S207 ("Participants will reduce screen time and increase physical activity outside of program hours." → Y8.1) and H086 ("Participants reduced recreational screen time to less than 2 hours per day." → Y8.1), adjudicated design rows.
- **Alternative considered:** treating PA-R02 as covering it (ruled out by G3); dropping screen time (flips S207, H086).
- **Decided in:** CP-12-07, decision G3.
- **Revisit:** if a HECAT PA HBO or a current YRBS item on the young person's own screen time verifies (V12); watch the PA-R02 revision (CP-12-24).

### FD-unassigned (Y8.5) · Y8.5

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Healthy People 2030 AH-01, AHS-01, OH-08, MICH-17 (verified); CDC HECAT (2021) PHW HBO 9-11 (verified); Healthy People 2030 IID-08 (verified, partial): "Increase the proportion of adolescents who receive recommended doses of the human papillomavirus (HPV) vaccine".
- **Departs:** "immunizations" (definition) names vaccination in general; the only verified source names one vaccine for ages 13-15, which is narrower than the code, so under decision G3 it does not cover the element.
- **Evidence:** no adjudicated design row names immunization; the practitioner review found school-health texts on immunization compliance in real use.
- **Alternative considered:** treating IID-08 as covering it (ruled out by G3); dropping "immunizations" (MINOR; moves real immunization texts to Y8 domain-only).
- **Decided in:** CP-12-07, decision G3.
- **Revisit:** if a general immunization objective or HBO verifies (V13).
```

### `codebook-refinement/DEVIATIONS.md`: dated note and drift table (land now)

New section after the entries (bullets use "**Label.**", not "**Label:**", because
`deviations.test.ts` parses this text as part of the last FD block; same device as CP-11-02):

```markdown
## Batch 3 review: Y8, 2026-10-16 (CP-12-07)

The batch 3 research review (Y8, F1, F2) closed most of Y8's unlogged departures by citation (Y8.1, Y8.3, Y8.5 and Y8.13's diversion half, through CDC HECAT 2021, Healthy People 2030, the 2025 YRBS instruments and OJJDP 2017). Two entries were opened: FD-P28 (Y8.13) and FD-P29 (Y8.2, decision Y1-1).

- **Waiting on verification.** Y8.11 knowledge and intentions (FD-P30), Y8.12 warning signs (FD-P31), Y8.1 screen time (FD-P32) and Y8.5 immunizations (FD-unassigned (Y8.5)) are counted entries, opened by a follow-up PATCH for each element requests V3 to V5b, V12 and V13 do not cover (decisions Y8-1, G3, G6).
- **Later Y8 CPs.** Y8.6 behavior is narrowed to symptoms after PR #66, with "use instead" Y1.14, Y4.2 or Y4 domain-only (decision Y8-3; a behavior with no code goes to domain-only with a `codebook_gap` flag, decision G9). Y8.7 "restored" stays while the Keyes positive-affect lead is verified (decision Y8-2). Y8.8 "processing trauma" gets one NCTSN recovery claim, and a codebook-defined entry if it fails (later item 4).
- **S4.9.** Y8 is at 2/13 now. The four entries waiting on verification would take it to 6/13 (46%), and a Y8.8 entry to 7/13; at 5/13 Y8 is over a third and its anchor is re-reviewed before any further Y8 change (decision G7).
```

Drift-table intro: append ", and for CP-12-07 (2026-10-16), which opened FD-P28 and FD-P29 in Y8".

Y8 row, before → after:

```
| Y8 Health | 13 | 0 | 0% | no |
| Y8 Health | 13 | 2 (Y8.2, Y8.13) | 15% | no |
```

The follow-up PATCH updates the row for each entry it opens.

### `frameworkBasis`, source lines, `rulesText`, domain hints, `CONFUSIONS.md`

Unchanged. Naming HECAT, NSES, Search Institute, MTF, CDC About Youth Violence, OJJDP and the
other new frameworks in Y8's `frameworkBasis` is CP-12-29 (decision G2, a "secondary" clause,
gated). The Y8.13 and Y8.8 source-line titles are prompt text and are not edited here (Y8.13 is
CP-12-14 item 26).

## Handed to cross-batch CPs (not applied here)

`SUMMARY.md` gives these parts of the batch-3 draft their own cross-batch CPs, so each edit has
one owner. The drafted text stays in
`/mnt/project-files/research-review/full-review/batch3/draft-cps/CP-12-07-y8-citations-and-deviation-log.md`
for the owner to take over.

| Part of the batch-3 draft | Owner | Claims |
|---|---|---|
| Two 2025 YRBS entries (standard HS, national HS) with their seven supports; `cdc-yrbss` Y8.12 re-check; `codebook_names` "CDC Youth Risk Behavior Survey" | CP-12-23 (lands now, with or before this CP) | y8a-08..10, y8a-21, y8a-27, y8b-07, y8b-11, y8b-12 |
| CJCA → CJJA rename note | CP-12-24 | y8b-15 |
| Null `tier`/`publisher` on `hp2030-sh04`, `hp2030-ah01-ahs01`, `nses-2020`, `shape-nhes-2024`, `shape-pe-2024` (R-25); the stale "(located)" tag in Y8.10's `basis` and its registry component note | CP-12-25 | none |
| Y8.10 stale "Mirrors CP-01-07's tie-breaker (PR #31, in flight)" in `useInstead` | CP-12-26 (gate) | none |
| HECAT, NSES, MTF, OJJDP and the other names in Y8's `frameworkBasis` | CP-12-29 (gate; decision G2) | none |

## Sources

Only SUPPORTED and PARTIAL rows of `batch3/verify/verification-table.md` are cited, with the
verifier's excerpts.

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| cdc-hecat-2021 (new) | verified | index; PA HBO 1-2; FN HBO 3, 10; PHW HBO 1-2, 9-10 | y8a-01 PARTIAL "Physical Activity. Safety. Sexual Health. Tobacco. Violence Prevention. Comprehensive Health Education."; y8a-02 "HBO 1. Engage in moderate to vigorous physical activity for at least 60 minutes every day."; y8a-03 "HBO 2. Regularly engage in physical activities that enhance cardio-respiratory endurance, flexibility, muscle endurance, and muscle strength."; y8a-04 "HBO 3. Eat lots of fruits and vegetables."; y8a-05 "HBO 10. Prepare good-tasting, nutrient-dense foods for yourself and others."; y8a-06 "HBO 1. Practice appropriate hygiene habits."; y8a-07 "HBO 2. Get an appropriate amount of sleep and rest."; y8a-22 "Use healthcare services to address common infectious diseases and manage chronic diseases and conditions." |
| cdc-hecat-2021 (partial fits) | verified | S HBO 4, 7; PHW HBO 11 | y8a-17 "HBO 4. Apply safety rules and procedures to avoid risky behaviors and injury."; y8a-18 "HBO 7. Get help for oneself or others when injured or suddenly ill."; y8a-23 "Seek out healthcare professionals for appropriate screenings and examinations." |
| hp2030-pa06, -pa-r02, -oh08, -mich17, -iid08 (new) | verified | objectives | y8a-11 "Increase the proportion of adolescents who do enough aerobic physical activity"; y8a-12 PARTIAL "Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years"; y8a-25 "Increase the proportion of children, adolescents, and adults who use the oral health care system"; y8a-26 "Increase the proportion of children who receive a developmental screening"; y8a-24 PARTIAL "Increase the proportion of adolescents who receive recommended doses of the human papillomavirus (HPV) vaccine" |
| hp2030-mhmd03, -mhmd06 (new) | verified | objectives | y8b-05 "Increase the proportion of children with mental health problems who receive treatment"; y8b-06 "Increase the proportion of adolescents with major depressive episodes (MDEs) who receive treatment" |
| shape-nhes-2024 | verified | 3.8.3; 1.2.3 | y8a-15 "3.8.3 Access valid and reliable sources of health information, products, services, and other resources."; y8a-16 "1.2.3 Identify ways to prevent or reduce risks for illnesses and injuries." |
| nses-2020 | verified | SH.8.CC.2, SH.12.GS.1 | y8a-19 "Develop a plan to access local resources and services related to reducing the risk of pregnancy and/or STDs (including HIV)" |
| nctsn-core-curriculum | verified (fit partial) | Concept 5; title | y8b-04 PARTIAL "Traumatic experiences can undermine children's sense of protection and safety" |
| mtf-2026-vol1 (new) | verified (fit partial) | perceived risk | y8b-10 PARTIAL "in particular perceived risk and disapproval associated with use of the various substances tracked by the survey." |
| cdc-youth-violence-2024 (new) | verified | definition | y8b-13 "It can include things like fighting, bullying, threats with weapons, and gang-related violence." |
| ojjdp-2017-diversion-review (new) | verified | diversion | y8b-16 "an attempt to divert, or channel out, youthful offenders from the juvenile justice system" |
| cjca-2009 | verified (fit partial, unchanged) | title, NCJ | y8b-14 PARTIAL "presents the results of the Group's efforts at developing standards for defining and measuring recidivism" |
| YRBS entries (CP-12-23) | verified | as listed in CP-12-23 | y8a-08..10, y8a-21, y8a-27, y8b-07, y8b-11, y8b-12 (named in `basis` only) |

Verified but not used: y8a-13 (ELOF; barred by decision Y1-1), y8a-14 (SHAPE PE 1.8.1, 1.12.9;
not in the act-now list), y8b-01 and y8b-02 (Y8.6; the later Y8 CP under decision Y8-3), y8b-03
(Keyes 2006, title only), y8b-08 (MMWR; redundant with Q94), y8b-09 (Q13; rejected), y8b-17
(reentry I-Guide; not listed).

## Verification requests

For `codebook-citation-verifier`, through the coordinator. The verifier must see only the fields
below. The HECAT module URLs follow the pattern of the verified module PDFs and are unverified
leads; the verifier should locate the right module PDF if the pattern is wrong.

```
V2  claim_id: y8a-28 · code: Y8.2 · cite_as: SHAPE America (2024). National Physical Education Standards. · claimed_component: A Standard 1 grade-span indicator (K-2 or later) that names fine motor or manipulative skills of the hands (e.g. using scissors, grasping a pencil). · url: https://shapeamerica.org/standards/pe/new-pe-standards/
V3  claim_id: y8b-18 · code: Y8.11 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module AOD (Alcohol and Other Drugs). · claimed_component: A healthy behavior outcome or knowledge expectation about knowing the health risks of alcohol or other drug use. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_aod.pdf
V4  claim_id: y8b-19 · code: Y8.11 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module T (Tobacco). · claimed_component: A healthy behavior outcome or knowledge expectation about knowing the health risks of tobacco or vaping products, or about students' intentions not to use them. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_t.pdf
V4b claim_id: y8b-20 · code: Y8.11 · cite_as: Miech, R. A., Patrick, M. E., O'Malley, P. M., Jager, J. O., & Jang, J. B. (2026). Monitoring the Future national survey results on drug use, 1975-2025. Institute for Social Research, University of Michigan. · claimed_component: Does the volume report a measure of students' intentions or expectations to use a substance in the future? · url: https://monitoringthefuture.org/wp-content/uploads/2025/12/mtfvol12026.pdf
V5  claim_id: y8b-21 · code: Y8.12 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module V (Violence Prevention). · claimed_component: A healthy behavior outcome or knowledge expectation about recognizing warning signs of dating or relationship violence. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_v.pdf
V5b claim_id: y8a-29 · code: Y8.11, Y8.12 · cite_as: SHAPE America (2024). National Health Education Standards. · claimed_component: A Standard 1 indicator about knowing the health risks of substance use, or about recognizing signs of unhealthy or violent relationships. · url: https://shapeamerica.org/standards/health/new-he-standards/
V12 claim_id: y8a-30 · code: Y8.1 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module PA (Physical Activity). · claimed_component: A healthy behavior outcome or expectation about a student limiting their own sedentary or recreational screen time. · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_pa.pdf
V13 claim_id: y8a-31 · code: Y8.5 · cite_as: Centers for Disease Control and Prevention (2021). Health Education Curriculum Analysis Tool (HECAT), Module PHW (Personal Health and Wellness). · claimed_component: A healthy behavior outcome or expectation that names immunizations or vaccinations in general (not one vaccine). · url: https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_phw.pdf
```

What depends on the answers: V2 SUPPORTED closes FD-P29 (Y8.2 back to framework). V3, V4 or V5b
SUPPORTED for knowledge keeps "knowledge of risks" out of FD-P30. V4 or V4b SUPPORTED for
intentions keeps "intentions" out. V5 or V5b SUPPORTED means FD-P31 is not opened. V12 SUPPORTED
means FD-P32 is not opened; V13 SUPPORTED means FD-unassigned (Y8.5) is not opened. Each SUPPORTED claim becomes
a support row in the follow-up PATCH.

## Gold impact

- Rows expected to change code: **none** (nothing in the prompt changes).
- Design rows the edits rest on: H013, H086, S207, S121, S187, H085 (Y8.1); S068, S192 (Y8.2);
  S108 (Y8.3); S002, S251 (Y8.4); S061, S064, S094 (Y8.5); S078 (Y8.8); S114, H034 (Y8.9); S015,
  S065, H038 (Y8.11); S134, S248 (Y8.12); S018, S160, S189 (Y8.13). H rows here are the pre-3.0
  held-out rows that now sit in the design file (R-01).
- No gold row has to be adjudicated before this CP lands (no hint or widening; G11 and G14 do not
  apply).
- New proposed gold rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read or used.

## Judge result

Not run. There is no prompt change to score. `npm test` (`deviations.test.ts`,
`youthOutcomesV3.test.ts` registry checks) and `npm run typecheck:server` are the gate.
