# CP-11-01: Y1 citation fixes (missing, broken, misattributed and stale)

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Source lines: Y1.2, Y1.13, Y1.16. Domain Y1 `frameworkBasis`. `basis` notes: Y1.1, Y1.2, Y1.7, Y1.8, Y1.13, Y1.15, Y1.16. Registry: farrington-2012 (Y1.9 to Y1.12), allensworth-easton-2005 and -2007 (Y1.15), national-reading-panel-2000 (Y1.1), conley-four-keys (Y1.7; the same entry also backs Y7.2), head-start-elof (Y1.8), mckinney-vento (the Y1.13 support only), plus 3 new sources. No definition, include, exclude, useInstead, example or rulesText changes. **Y1.4 is not touched.** |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today, so 3.1.5; if draft PR #62's 3.2.0 candidate merges first, 3.2.1) |
| Requirement served | R1 frameworks |
| Status | draft (Y1 research review pilot, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160; no code added, removed or renamed) |
| Framework deviation | none. No code changes its anchor or its scope. The Seal of Biliteracy Guidelines close an existing unlogged departure (Y1.2's home-language half had no source); they do not open one. The FD entries for Y1.10, Y1.13 and Y1.15 are in CP-11-02. |

## Problem

The Y1 research review (`codebook-refinement/research-review/2026-10-16/`, recommendations
"Act now" item 1) found these citation faults. All four reviewers accepted each one; the
devil's advocate conceded each as "source wrong, missing or broken".

1. **Y1.2 home-language maintenance has no source.** The definition covers "maintenance and
   development of a home language alongside English", and adjudicated design row **S143**
   ("Refugee youth will maintain fluency in their home language while learning English" → Y1.2)
   depends on that half. The registry's two Y1.2 sources both say they cover English
   proficiency only (`wida-eld` and `essa-6311-c4-elp` verifier notes, CP-10-01).
2. **Y1.16's only source is partial and its PDF returns 403** (`crdc-2020-21-student-access`
   verifier note, CP-10-01: "The given PDF returned 403 on two tries").
3. **Y1.13 names foster placement changes but cites only homelessness law**, and the
   McKinney-Vento support has no pinpoint ("The phrase 'school stability' itself was not
   quoted", CP-10-01 note).
4. **Farrington publisher name (S1.4).** `cite_as` says "UChicago Consortium on Chicago School
   Research", a mix of two names. The registry's `publisher` field gives a later name. The two
   Allensworth & Easton entries disagree with each other on `publisher`.
5. **The National Reading Panel excerpt is a string of headings** ("Phonemic Awareness
   Instruction ... Phonics Instruction ..."), which does not meet S1.5. The entry also still
   carries a stale "Pending: status located (PARTIAL)" note beside `status: verified`.
6. **Conley attribution.** The verified text is Conley's April 2016 article in *School
   Administrator* (AASA); the registry `publisher` says "David T. Conley / EPIC" and `year` is
   null.
7. **Head Start ELOF date.** No headstart.gov page states 2015 (CP-10-01 note). The govinfo GPO
   copy confirms it.
8. **Stale "(located)" tags in `basis`** for Y1.1 (NRP), Y1.7 (Conley), Y1.8 (ELOF), Y1.13
   (McKinney-Vento) and Y1.15 (Allensworth & Easton 2005), while the registry has had all of
   them `verified` since CP-10-01.

## Change

### `codebooks/youthOutcomesV3.data.ts`: Domain Y1 `frameworkBasis` (reaches the prompt as "Framework Basis:")

Before:

```
ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse.
```

After:

```
ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA, Seal of Biliteracy Guidelines); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse.
```

Why: S1.6 asks a code to match a component of the domain's anchor. Without this, Y1.2's
home-language half would rest on a source the domain does not name. The CSTA entry is left as
is (PR #62 and the CSTA 2026 question, later-cycle item 5). If PR #62 also edits this string,
re-apply only the added words.

### Source lines (reach the prompt as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y1.2 | WIDA English Language Development Standards Framework (2020 edition); ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv). | WIDA English Language Development Standards Framework (2020 edition); ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv); ACTFL et al. (2020), Guidelines for Implementing the Seal of Biliteracy (maintaining home or heritage languages). |
| Y1.13 | Attendance Works, chronic absence; McKinney-Vento Act, 42 U.S.C. 11432 (school stability). | Attendance Works, chronic absence; McKinney-Vento Act, 42 U.S.C. 11432(g)(3)(A)-(B) (school of origin and school stability); 42 U.S.C. 675(1)(G), foster care case plan (educational stability). |
| Y1.16 | U.S. Department of Education, Office for Civil Rights (2024), Civil Rights Data Collection: student access to advanced courses, including AP and dual enrollment. | ESSA State report cards, 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) (accelerated coursework for postsecondary credit: AP, IB, dual or concurrent enrollment) and 6311(c)(4)(B)(v)(II) (access to and completion of advanced coursework); U.S. Department of Education, Office for Civil Rights (2024), Civil Rights Data Collection: student access to advanced courses, including AP and dual enrollment. |

"ACTFL et al." is used on purpose: it is correct whichever way the author question in
Verification request V1 is answered. The new lines avoid "partial", "located" and "(verified)",
which `youthOutcomesV3.test.ts` forbids in a source line. The statute behind 42 U.S.C. 675 is
not named, because the verifier's record does not name it.

Looked at and left alone: the Y1.7 source line ("Conley, Four Keys: Key Cognitive Strategies")
is not wrong, so the Conley fix stays in the registry and `basis`. The Y1.9 to Y1.12 and Y1.15
source lines say "UChicago Consortium", which is a short form and not a wrong name; the registry
carries the exact name.

### `basis` notes (data only, not in the prompt)

| Code | Before | After |
|---|---|---|
| Y1.1 | ESSA 20 U.S.C. 6311(b)(1)(C) (verified); National Reading Panel (2000) (located); Common Core CCR Anchor Standards for Writing (verified). | ESSA 20 U.S.C. 6311(b)(1)(C) (verified); National Reading Panel (2000) (verified, partial: reading only; excerpt replaced by CP-11-01, claim y1-subject-03); Common Core CCR Anchor Standards for Writing (verified). |
| Y1.2 | Re-verified 2026-09-27 (CP-10-01): WIDA 2020 (verified, direct for English proficiency; nothing checked covers home-language maintenance); ESSA 6311(c)(4)(B)(iv) (verified, direct). | Re-verified 2026-09-27 (CP-10-01): WIDA 2020 (verified, direct for English proficiency); ESSA 6311(c)(4)(B)(iv) (verified, direct). CP-11-01 (2026-10-16): ACTFL et al. (2020), Guidelines for Implementing the Seal of Biliteracy, section 1 (verified, direct for home-language maintenance; claim y1-subject-04). |
| Y1.7 | NAMLE, Core Principles of Media Literacy Education (verified); Conley, Key Cognitive Strategies (located). | NAMLE, Core Principles of Media Literacy Education (verified); Conley (2016, April), Four Keys to College and Career Readiness, School Administrator (AASA), Key Cognitive Strategies (verified, direct; attribution corrected by CP-11-01, claim y1-subject-11). |
| Y1.8 | Head Start ELOF (2015), Language & Literacy and Cognition (located). Early-childhood-specific by necessity: the construct is about young children. | Head Start ELOF (2015), Language & Literacy and Cognition (verified; the 2015 year is confirmed on the govinfo GPO copy, claim y1-subject-15). Early-childhood-specific by necessity: the construct is about young children. |
| Y1.13 | Attendance Works, chronic absence (verified); McKinney-Vento, 42 U.S.C. 11432 (located). | Attendance Works, chronic absence (verified); McKinney-Vento, 42 U.S.C. 11432(g)(3)(A)-(B) (verified, direct; pinpoint added by CP-11-01, claim y1-attainment-03); 42 U.S.C. 675(1)(G) (verified, direct for foster placement changes; claim y1-attainment-05). |
| Y1.15 | Allensworth & Easton (2005) On-Track Indicator (located); Allensworth & Easton (2007) grades (verified). | Allensworth & Easton (2005) On-Track Indicator (verified); Allensworth & Easton (2007) grades (verified). |
| Y1.16 | U.S. ED OCR (2024), 2020-21 CRDC: Student Access to and Enrollment in ... Courses and Academic Programs, AP and dual enrollment (verified, appendix A R04). | ESSA 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) and 6311(c)(4)(B)(v)(II) (verified, direct; claim y1-attainment-12, corroborated by y1-taxonomy-07). U.S. ED OCR (2024), 2020-21 CRDC: Student Access to and Enrollment in ... Courses and Academic Programs, AP and dual enrollment (verified, partial: the PDF returned 403 in CP-10-01, so only the landing page was read). |

Y1.15's `basis` changes only its status tag. Its "no subject named" clause is the subject of
CP-11-02 (FD entry), not of this CP.

### Domain `hint`, `rulesText`, `CONFUSIONS.md`

Unchanged. (`CONFUSIONS.md` is the 2.x registry; no 3.x tie-breaker depends on a citation here.)

### Registry

Per CLAUDE.md, registry results change in the build scripts, not in
`sources/youth_outcomes_v3.sources.json`. The JSON is regenerated by
`python3 codebook-refinement/v3/build_registry.py`.

**New verification record: `codebook-refinement/v3/source-verification-2026-10-16.json`.** Same
row shape as `source-verification-2026-09-27.json` (`claim_id`, `kind`, `source_id`, `code`,
`cite_as`, `claimed_component`, `url_given`, `verdict`, `url_checked`, `source_kind`,
`excerpt`, `corrected_cite_as`, `notes`). Each row is copied unchanged from
`research-review/2026-10-16/verification/batch-*.json` (the claim) and `verifier-results.json`
(the verdict). It carries these 9 claim_ids, plus the answer to V1 below when it comes back:

| claim_id | Verdict | Used for |
|---|---|---|
| y1-subject-04 | SUPPORTED | new source: Seal of Biliteracy Guidelines → Y1.2 |
| y1-attainment-12 | SUPPORTED | new source: ESSA advanced coursework → Y1.16 |
| y1-taxonomy-07 | SUPPORTED | corroborates the 6311(c)(4)(B)(v)(II) pinpoint for Y1.16 |
| y1-attainment-05 | SUPPORTED | new source: 42 U.S.C. 675(1)(G) → Y1.13 |
| y1-attainment-03 | SUPPORTED | McKinney-Vento pinpoint for Y1.13 |
| y1-mindsets-05 | SUPPORTED | Farrington publisher name as printed |
| y1-subject-03 | SUPPORTED | NRP excerpt replacement |
| y1-subject-11 | SUPPORTED | Conley attribution (School Administrator, AASA, April 2016) |
| y1-subject-15 | SUPPORTED | ELOF 2015 year and govinfo URL |

Every one was checked by a `codebook-citation-verifier` that saw only `{claim_id, code,
cite_as, claimed_component, url}` (S4.2). `source_kind` is `primary` for all nine.

**New script: `codebook-refinement/v3/verification_2026_10_16.py`.** It has the same shape as
`verification_2026_09_27.py` (module docstring, `RECORD`, `DATE = '2026-10-16'`, `BY`, input
tables, `apply(out, codes)`), reads the new record file, and asserts every claim it uses is
SUPPORTED or PARTIAL with `source_kind == 'primary'`. A separate dated module keeps the
2026-09-27 script a faithful record of CP-10-01. If Severin would rather extend
`verification_2026_09_27.py`, the tables below can be appended to its dicts instead, and that
script would then also read the 2026-10-16 record. The inputs:

```python
# Citation text and publisher, as printed at publication (S1.4).
CITE_AS = {
    'farrington-2012': 'Farrington, C. A., Roderick, M., Allensworth, E., Nagaoka, J., Keyes, T. S., Johnson, D. W., & Beechum, N. O. (2012). Teaching Adolescents to Become Learners: The Role of Noncognitive Factors in Shaping School Performance: A Critical Literature Review. Chicago: University of Chicago Consortium on Chicago School Research.',
    'allensworth-easton-2005': 'Allensworth, E. M., & Easton, J. Q. (2005). The On-Track Indicator as a Predictor of High School Graduation. Consortium on Chicago School Research at the University of Chicago.',
    'conley-four-keys': 'Conley, D. T. (2016, April). Four Keys to College and Career Readiness. School Administrator. AASA, The School Superintendents Association. (Key Cognitive Strategies, Key Content Knowledge, Key Learning Skills & Techniques, Key Transition Knowledge & Skills)',
}
PUBLISHER = {
    'farrington-2012': 'University of Chicago Consortium on Chicago School Research',     # was 'University of Chicago Consortium on School Research'
    'allensworth-easton-2005': 'Consortium on Chicago School Research at the University of Chicago',  # was 'UChicago Consortium on School Research'
    'allensworth-easton-2007': 'Consortium on Chicago School Research at the University of Chicago',  # was 'Consortium on Chicago School Research'
    'conley-four-keys': 'AASA, The School Superintendents Association (School Administrator magazine)',  # was 'David T. Conley / EPIC'
}
YEAR = {'conley-four-keys': 2016}  # was null
NOTES = {  # appended to the source's existing `notes`
    'farrington-2012': "Publisher named as printed at publication (claim y1-mindsets-05, read from the report's citation line; the cover shows 'UChicago CCSR'). The registry earlier gave the organization's later name, 'University of Chicago Consortium on School Research' (S1.4 rename note).",
    'allensworth-easton-2005': 'Publisher made consistent with allensworth-easton-2007; both name the organization as printed (CP-10-01 records allensworth-easton-2005#0 and -2007#0: publisher matches).',
    'allensworth-easton-2007': 'See allensworth-easton-2005.',
    'conley-four-keys': 'Attribution corrected 2026-10-16 (claim y1-subject-11): David T. Conley, School Administrator magazine (AASA), April 1, 2016. The Y7.2 support excerpt is unchanged; see Decisions item 3.',
}
NOTES_REPLACE = {  # replaces `notes` outright
    'national-reading-panel-2000': 'Excerpt replaced 2026-10-16 (CP-11-01, claim y1-subject-03): the CP-10-01 excerpt was a string of headings, not a sentence (S1.5).',  # drops the stale "Pending: status located (PARTIAL)" note
}
URLS = {
    'head-start-elof': 'https://www.govinfo.gov/content/pkg/GOVPUB-HE23_1100-PURL-gpo65456/pdf/GOVPUB-HE23_1100-PURL-gpo65456.pdf',
}
SOURCE_EXCERPT = {  # source-level `excerpt`, from the document at the new URL
    'head-start-elof': 'y1-subject-15',
    'national-reading-panel-2000': 'y1-subject-03',
}
# Support-level updates: (source, code) -> claim whose excerpt and note replace the support's.
# `fit` is set explicitly, not from the verdict, where the claim covers only part of the code.
SUPPORT_RECHECK = {
    ('national-reading-panel-2000', 'Y1.1'): ('y1-subject-03', 'partial',
        'Fluency and comprehension confirmed on the NICHD findings page (claim y1-subject-03; the page is kept for historical purposes). The NRP does not cover writing, which is half of Y1.1 (CP-10-01).'),
    ('mckinney-vento', 'Y1.13'): ('y1-attainment-03', 'direct', None),  # None: use the claim's own note
}
SUPPORT_NOTE_APPEND = {
    ('head-start-elof', 'Y1.8'): ' The 2015 year and the Office of Head Start/ACF/HHS publisher are confirmed on the govinfo GPO copy (claim y1-subject-15, 2026-10-16), now the source URL; the domain list above was read on the headstart.gov interactive ELOF.',
}
COMPONENTS = {
    ('mckinney-vento', 'Y1.13'): "school of origin and 'School stability', 42 U.S.C. 11432(g)(3)(A)-(B)",
}

NEW = [
    {
        'id': 'seal-of-biliteracy-guidelines-2020', 'claim': 'y1-subject-04',
        # cite_as is fixed from the answer to V1 before this CP leaves draft (see Verification requests).
        'cite_as': '<author list per V1> (2020). Guidelines for Implementing the Seal of Biliteracy.',
        'codebook_names': ['Seal of Biliteracy Guidelines', 'Guidelines for Implementing the Seal of Biliteracy'],
        'tier': 'B', 'publisher': '<per V1>', 'year': 2020,
        'supports': [('Y1.2', 'Implementation Guidelines, section 1: English learners encouraged to maintain and improve proficiency in their home or heritage language(s)')],
    },
    {
        'id': 'essa-6311-advanced-coursework', 'claim': 'y1-attainment-12',
        'cite_as': 'Every Student Succeeds Act (2015), 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) and 6311(c)(4)(B)(v)(II)',
        'codebook_names': [], 'tier': 'A', 'publisher': 'U.S. Congress', 'year': 2015,
        'supports': [('Y1.16', 'report-card count of students in accelerated coursework for postsecondary credit (AP, IB, dual or concurrent enrollment), (h)(1)(C)(viii)(II)(bb); optional indicator of access to and completion of advanced coursework, (c)(4)(B)(v)(II)')],
    },
    {
        'id': 'usc-42-675-1g-educational-stability', 'claim': 'y1-attainment-05',
        'cite_as': '42 U.S.C. 675(1)(G), case plan: educational stability of the child while in foster care',
        'codebook_names': [], 'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'supports': [('Y1.13', 'plan for ensuring the educational stability of the child while in foster care (assurance of coordination so the child remains in the school of enrollment at each placement, or is enrolled immediately in a new school)')],
    },
]
```

`apply()` sets `verified_on = '2026-10-16'` and `verified_by` on each source it touches, and
`notes: 'Added by CP-11-01.'` on the three new ones. Unlike the CP-10-01 `NEW` loop, it takes
`codebook_names` from the table (CLAUDE.md: a name used in a citation line goes into
`codebook_names`).

**`codebook-refinement/v3/build_registry.py`** (three edits):

1. After `apply_2026_09_27(out, CODES)`, add
   `from verification_2026_10_16 import apply as apply_2026_10_16` and
   `apply_2026_10_16(out, CODES)`, before `SUPPORTED_CODES` is computed.
2. `'codebook_version_reviewed': '3.1.2'` → the version this CP ships in.
3. `'last_reviewed': '2026-09-27'` → the date it is applied.

Result: 87 → 90 sources, 146 → 149 supports, `codebook_extensions` unchanged (A2.2, A2.4).

## Sources

Only SUPPORTED claims from `research-review/2026-10-16/verification-table.md` are cited.

| Registry ID | Status | Component relied on | claim_id and verbatim excerpt |
|---|---|---|---|
| seal-of-biliteracy-guidelines-2020 (new) | verified once added; **cite_as pending V1** | Implementation Guidelines, section 1 | y1-subject-04: "English learners should be encouraged to maintain and improve proficiency in their home or heritage language(s)" |
| essa-6311-advanced-coursework (new) | verified | 6311(h)(1)(C)(viii)(II)(bb); 6311(c)(4)(B)(v)(II) | y1-attainment-12: "(bb) accelerated coursework to earn postsecondary credit while still in high school, such as Advanced Placement and International Baccalaureate courses and examinations, and dual or concurrent enrollment programs." y1-taxonomy-07: "(V) student access to and completion of advanced coursework;" |
| usc-42-675-1g-educational-stability (new) | verified | 675(1)(G) case plan | y1-attainment-05: "(G) A plan for ensuring the educational stability of the child while in foster care, including—" |
| mckinney-vento | verified | 11432(g)(3)(A)-(B) (pinpoint) | y1-attainment-03: "continue the child's or youth's education in the school of origin for the duration of homelessness— ... School stability ... In determining the best interest of the child or youth under subparagraph (A), the local educational agency shall—" |
| farrington-2012 | verified | publisher as printed | y1-mindsets-05: "Chicago: University of Chicago Consortium on Chicago School Research." |
| national-reading-panel-2000 | verified (fit stays partial) | Fluency section | y1-subject-03: "Fluency is one of several critical factors necessary for reading comprehension." |
| conley-four-keys | verified | Key Cognitive Strategies; attribution | y1-subject-11: "Key Cognitive Strategies consist of problem formulation, research, interpretation, communication, and precision and accuracy." |
| head-start-elof | verified | 2015 year; publisher | y1-subject-15: "For preschoolers, Language and Literacy are distinct domains to reflect the differentiation, centrality," |
| allensworth-easton-2005, -2007 | verified | publisher consistency | existing CP-10-01 records allensworth-easton-2005#0 and -2007#0 (no new claim) |

Caveats the verifiers recorded, carried into the registry notes: the ESSA (c)(4)(B)(v)(II)
measure is one a State "may include", and (h)(1)(C)(viii) is a reporting requirement; 675(1)(G)
and 11432(g)(3) set duties, not measured outcomes; y1-attainment-03's ellipses join separate
subdivisions; the Farrington name comes from the citation line, not a cover transcript; the
Conley excerpt was returned in two pieces and joined by the verifier (the CP-10-01 Y1.7 support
excerpt, a single passage, is kept on the support for that reason).

Not used, though verified: 6311(g)(1)(E) (y1-attainment-04; its excerpt does not show the
stability wording), 2023-24 CRDC School Form (y1-attainment-09, -11; later-cycle item), Title IX
106.40 (y1-attainment-06, PARTIAL; see CP-11-02), ESSA 7011(7)(B) and NALA (PARTIAL; rejected
for Y1.2).

## Verification requests

**V1. Seal of Biliteracy Guidelines: author list.** Send to `codebook-citation-verifier`:

```
claim_id: y1-subject-04b
code: Y1.2
cite_as: ACTFL, Californians Together, Modern Language Association, National Association for Bilingual Education, National Association of English Learner Program Administrators, National Council of State Supervisors for Languages, & TESOL International Association (2020). Guidelines for Implementing the Seal of Biliteracy.
claimed_component: Authorship: which organizations the document names as its authors or issuing bodies (title page, credits or citation line). Is SealofBiliteracy.org named as a co-author, or does it appear only as a logo or sponsor?
url: https://www.actfl.org/uploads/files/general/SOBL_Guidelines.pdf
```

Why: the researcher listed seven bodies; the y1-subject-04 verifier listed eight, adding
SealofBiliteracy.org "grouped with Californians Together", and said "Check whether it is a
co-author or only a logo before adopting the change". S1.4 requires the exact author.

Gate: this CP stays **draft** until V1 has a verdict. The answer sets `cite_as` and `publisher`
for `seal-of-biliteracy-guidelines-2020` and is added to the 2026-10-16 record. If V1 cannot
settle authorship (for example, the PDF shows logos only), cite the document by its title with
"ACTFL et al." and record that in `notes`. If the document itself turns out not to be
reachable, drop the Seal rows from this CP; Y1.2 then needs an FD entry for its home-language
half (CP-11-02, contingency).

## Decisions for Severin (not made by this CP)

1. **Timing** (recommendations decision D): land now, after PR #62, or batch with other
   domains. Recommended: after PR #62, as its own PATCH.
2. **Eval.** CP-10-01 shipped without a scoring run as citation-only. Here four prompt strings
   change (the Framework Basis line and three source lines), so the devil's advocate's cost note
   applies. Recommended: one two-run design-set check (command as in CP-11-03) before applying,
   to confirm the new Seal and ESSA lines move no row (S143 and S014 are the ones to watch).
3. **Conley and Y7.2.** The `conley-four-keys` entry also backs Y7.2. Its Y7.2 excerpt may come
   from the 2011 EPIC slide deck rather than the 2016 article (CP-10-01 notes mention both).
   This CP fixes attribution only; whether Y7.2 needs a re-check is for the Y7 review.
4. The same Farrington and Allensworth & Easton attribution errors exist in the 2.x registry
   (`sources/original.sources.json`). Codebook 2.5.x is retired, so this CP leaves them.

## Not bundled (separate CPs if wanted)

The Y1.10, Y1.13, Y1.14 and Y1.15 deviation entries (CP-11-02); the coding hints (CP-11-03);
`docs/codebook/research-basis.md` status note (later-cycle item 14); the stale "not yet the
default" heading in `DEVIATIONS.md`; anything on Y1.4.

## Gold impact

- Rows expected to change code: none. No definition, include, exclude, useInstead or rule
  changes.
- Design rows that rest on the edited citations: S143 (Y1.2, home language), S014, S159, S219
  (Y1.16), S051, S096, S233 (Y1.13).
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run. To be filled in by `codebook-regression-judge` if Severin asks for the eval in
Decisions item 2.
