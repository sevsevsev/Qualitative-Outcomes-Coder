# CP-11-01: Y1 citation fixes (missing, broken, misattributed and stale)

**In plain words.** This change repairs the sources behind several Academic codes without
changing what any code means or how a statement is coded. It adds sources where a code had
none: a national guideline on keeping a home language for English Language Development &
Multilingualism (Y1.2), the federal foster-care law on staying in the same school for Attendance & School
Stability (Y1.13), and the federal school-law clause on advanced courses for
Advanced Coursework & Dual Credit (Y1.16), whose only source link is broken. It also corrects
publisher names and dates in the source list, and adds the joint federal education and health
departments' school-readiness definitions as a second source for Early Learning & School
Readiness (Y1.8), the only code allowed to use the Head Start early-learning framework. The
source-list and notes part lands now; the three changed "Source" lines that the coding model
reads wait for one combined test run after the two open pull requests (numbers 62 and 66) merge.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Source lines: Y1.2, Y1.13, Y1.16. `basis` notes: Y1.1, Y1.2, Y1.7, Y1.8, Y1.13, Y1.15, Y1.16. Registry: farrington-2012 (Y1.9 to Y1.12), allensworth-easton-2005 and -2007 (Y1.15), national-reading-panel-2000 (Y1.1), conley-four-keys (Y1.7; the same entry also backs Y7.2), head-start-elof (Y1.8), mckinney-vento (the Y1.13 support only), plus 4 new sources. The Y1 `frameworkBasis` clause for the Seal of Biliteracy Guidelines is handed to CP-12-29 (decision G2; text below). No definition, include, exclude, useInstead, example or rulesText changes. **Y1.4 is not touched.** |
| Version bump | Part (a): PATCH when applied (3.1.4 today, so 3.1.5; one PATCH later if another release lands first). Part (b): ships in the single citation-text gate release (decision G10), with whatever bump that release carries. |
| Requirement served | R1 frameworks |
| Status | Status: draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: registry module `v3/verification_2026_10_16.py` and its record (Farrington, Allensworth & Easton and Conley citations; ELOF and NRP fixes; new Seal of Biliteracy entry after round-2 V1, PARTIAL on authorship, cite_as per the document's own suggested citation; ESSA advanced coursework, 42 U.S.C. 675(1)(G) and RTT-ELC entries), the `build_registry.py` hook and the `basis` notes for Y1.1, Y1.2, Y1.7, Y1.8, Y1.13, Y1.15, Y1.16. Waits for the gate: Source lines Y1.2, Y1.13, Y1.16; the Seal `frameworkBasis` clause (CP-12-29). |
| Gate candidate | Part (b) applied 2026-10-17 in the 3.3.0 gate candidate: Source lines Y1.2, Y1.13, Y1.16 as drafted ("ACTFL et al." kept: round-2 V1 was PARTIAL on authorship). The Seal `frameworkBasis` clause is applied through CP-12-29. |
| Reaches the coding prompt? | **Mixed.** Part (a), registry and `basis`: no, lands now. Part (b), three Source lines: yes, waits for the gate. See "What lands when". |
| Enum cost | +0 (160 → 160; no code added, removed or renamed) |
| Framework deviation | none. No code changes its anchor or its scope. The Seal of Biliteracy Guidelines close an existing unlogged departure (Y1.2's home-language half had no source); they do not open one. The ED-HHS school-readiness definitions are a second source for Y1.8 inside its own age range (decision Y1-1). The FD entries for Y1.10, Y1.13 and Y1.15 are in CP-11-02. |

## Decisions applied (Severin, 2026-10-16)

- **A / Y1-1.** Head Start ELOF stays Y1.8's anchor and is used for Y1.8 only; the joint ED-HHS
  Race to the Top-Early Learning Challenge definitions (claim y1-subject-13, SUPPORTED) are added
  as a second Y1.8 support. ELOF is not borrowed for Motor & Sport Skills (Y8.2): Y8.2 keeps
  "fine motor" as a codebook-defined element, logged in CP-12-07 (provisional FD-P29). This CP
  only records the "Y1.8 only" rule in the ELOF registry note; it changes nothing in Y8.
- **D / G10.** Part (a) lands now. Part (b), the Source lines, lands in the one two-run
  design-set gate for all Source and `frameworkBasis` edits, after PRs #62 and #66 merge.
- **G2.** A framework outside the domain's anchor is named in `frameworkBasis` as a "secondary"
  clause, in one gated CP (CP-12-29). The Seal clause therefore moves out of this CP into
  CP-12-29; its exact text is given below so CP-12-29 can carry it.
- **G8.** The registry cites the official copy: the govinfo GPO copy for ELOF, the Federal
  Register's own site for the ED-HHS definitions (published by the Office of the Federal
  Register; the verifier's corrected citation matches the document and only adds the page).
- **G4.** 42 U.S.C. 675(1)(G) and 11432(g)(3) are SUPPORTED statutory duties, so they count as
  support for Y1.13 with no FD for the homelessness and foster-care parts. (Pregnancy is not
  covered by either; that departure is FD-P22 in CP-11-02.)

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
7. **Head Start ELOF date and copy.** No headstart.gov page states 2015 (CP-10-01 note). The
   govinfo GPO copy confirms it, and is the official copy (G8).
8. **Y1.8 rests on one federal program's framework.** Decision A keeps ELOF and adds the joint
   ED-HHS definitions of the essential domains of school readiness as cross-program support.
9. **Stale "(located)" tags in `basis`** for Y1.1 (NRP), Y1.7 (Conley), Y1.8 (ELOF), Y1.13
   (McKinney-Vento) and Y1.15 (Allensworth & Easton 2005), while the registry has had all of
   them `verified` since CP-10-01. (CP-12-25 fixes the same tag in other domains; the Y1 part
   is this CP.)

## What lands when (G10)

| Part | What | Reaches the prompt? | When |
|---|---|---|---|
| (a) | New verification record `v3/source-verification-2026-10-16.json`; new script `v3/verification_2026_10_16.py`; three edits to `v3/build_registry.py`; regenerated `sources/youth_outcomes_v3.sources.json` | no | now (PATCH), `npm test` is the check |
| (a) | `basis` notes for Y1.1, Y1.2, Y1.7, Y1.8, Y1.13, Y1.15, Y1.16 | no (`definitionsText` prints definition, include, exclude, use instead, source and example only) | now, same PATCH |
| (a) | Seal of Biliteracy registry entry and the Y1.2 `basis` sentence that names it | no | now, but **only after V1 returns** (see Verification requests); until then part (a) ships without the Seal rows |
| (b) | Source lines Y1.2, Y1.13, Y1.16 | yes ("Source Framework:") | the single citation-text gate after PRs #62 and #66 merge |
| (b), handed over | Y1 `frameworkBasis` secondary clause for the Seal | yes ("Framework Basis:") | carried by CP-12-29, same gate |

Between part (a) and part (b), the registry and `basis` name the new sources before the Source
lines do. That is the same order CP-10-01 used and needs no FD: the registry is the record of
support, and the Source line follows at the gate.

## Change, part (a): does not reach the prompt (lands now)

### `basis` notes (`codebooks/youthOutcomesV3.data.ts`)

| Code | Before | After |
|---|---|---|
| Y1.1 | ESSA 20 U.S.C. 6311(b)(1)(C) (verified); National Reading Panel (2000) (located); Common Core CCR Anchor Standards for Writing (verified). | ESSA 20 U.S.C. 6311(b)(1)(C) (verified); National Reading Panel (2000) (verified, partial: reading only; excerpt replaced by CP-11-01, claim y1-subject-03); Common Core CCR Anchor Standards for Writing (verified). |
| Y1.2 | Re-verified 2026-09-27 (CP-10-01): WIDA 2020 (verified, direct for English proficiency; nothing checked covers home-language maintenance); ESSA 6311(c)(4)(B)(iv) (verified, direct). | Re-verified 2026-09-27 (CP-10-01): WIDA 2020 (verified, direct for English proficiency); ESSA 6311(c)(4)(B)(iv) (verified, direct). CP-11-01 (2026-10-16): ACTFL et al. (2020), Guidelines for Implementing the Seal of Biliteracy, section 1 (verified, direct for home-language maintenance; claim y1-subject-04). |
| Y1.7 | NAMLE, Core Principles of Media Literacy Education (verified); Conley, Key Cognitive Strategies (located). | NAMLE, Core Principles of Media Literacy Education (verified); Conley (2016, April), Four Keys to College and Career Readiness, School Administrator (AASA), Key Cognitive Strategies (verified, direct; attribution corrected by CP-11-01, claim y1-subject-11). |
| Y1.8 | Head Start ELOF (2015), Language & Literacy and Cognition (located). Early-childhood-specific by necessity: the construct is about young children. | Head Start ELOF (2015), Language & Literacy and Cognition (verified; the 2015 year is confirmed on the govinfo GPO copy, claim y1-subject-15). ED and HHS (2013), Race to the Top-Early Learning Challenge, 78 Fed. Reg. 53964, Essential Domains of School Readiness and Kindergarten Entry Assessment (verified, direct; cross-program support, claim y1-subject-13). Early-childhood-specific by necessity: the construct is about young children. ELOF is cited for Y1.8 only (decision Y1-1, 2026-10-16). |
| Y1.13 | Attendance Works, chronic absence (verified); McKinney-Vento, 42 U.S.C. 11432 (located). | Attendance Works, chronic absence (verified); McKinney-Vento, 42 U.S.C. 11432(g)(3)(A)-(B) (verified, direct; pinpoint added by CP-11-01, claim y1-attainment-03); 42 U.S.C. 675(1)(G) (verified, direct for foster placement changes; claim y1-attainment-05). |
| Y1.15 | Allensworth & Easton (2005) On-Track Indicator (located); Allensworth & Easton (2007) grades (verified). | Allensworth & Easton (2005) On-Track Indicator (verified); Allensworth & Easton (2007) grades (verified). |
| Y1.16 | U.S. ED OCR (2024), 2020-21 CRDC: Student Access to and Enrollment in ... Courses and Academic Programs, AP and dual enrollment (verified, appendix A R04). | ESSA 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) and 6311(c)(4)(B)(v)(II) (verified, direct; claim y1-attainment-12, corroborated by y1-taxonomy-07). U.S. ED OCR (2024), 2020-21 CRDC: Student Access to and Enrollment in ... Courses and Academic Programs, AP and dual enrollment (verified, partial: the PDF returned 403 in CP-10-01, so only the landing page was read). |

Y1.15's `basis` changes only its status tag. Its "no subject named" clause is the subject of
CP-11-02 (FD entry), not of this CP. If V1 has not returned when part (a) is applied, the Y1.2
row keeps its "Before" text and the Seal sentence follows with the Seal registry entry.

### Registry

Per CLAUDE.md, registry results change in the build scripts, not in
`sources/youth_outcomes_v3.sources.json`. The JSON is regenerated by
`python3 codebook-refinement/v3/build_registry.py`.

**New verification record: `codebook-refinement/v3/source-verification-2026-10-16.json`.** Same
row shape as `source-verification-2026-09-27.json` (`claim_id`, `kind`, `source_id`, `code`,
`cite_as`, `claimed_component`, `url_given`, `verdict`, `url_checked`, `source_kind`,
`excerpt`, `corrected_cite_as`, `notes`). Each row is copied unchanged from
`research-review/2026-10-16/verification/batch-*.json` (the claim) and `verifier-results.json`
(the verdict). It carries these 10 claim_ids, plus the answer to V1 when it comes back:

| claim_id | Verdict | Used for |
|---|---|---|
| y1-subject-04 | SUPPORTED | new source: Seal of Biliteracy Guidelines → Y1.2 (added with V1) |
| y1-attainment-12 | SUPPORTED | new source: ESSA advanced coursework → Y1.16 |
| y1-taxonomy-07 | SUPPORTED | corroborates the 6311(c)(4)(B)(v)(II) pinpoint for Y1.16 |
| y1-attainment-05 | SUPPORTED | new source: 42 U.S.C. 675(1)(G) → Y1.13 |
| y1-attainment-03 | SUPPORTED | McKinney-Vento pinpoint for Y1.13 |
| y1-subject-13 | SUPPORTED | new source: ED-HHS RTT-ELC definitions → Y1.8 (decision A / Y1-1) |
| y1-mindsets-05 | SUPPORTED | Farrington publisher name as printed |
| y1-subject-03 | SUPPORTED | NRP excerpt replacement |
| y1-subject-11 | SUPPORTED | Conley attribution (School Administrator, AASA, April 2016) |
| y1-subject-15 | SUPPORTED | ELOF 2015 year and govinfo URL |

Every one was checked by a `codebook-citation-verifier` that saw only `{claim_id, code,
cite_as, claimed_component, url}` (S4.2). `source_kind` is `primary` for all ten.

**New script: `codebook-refinement/v3/verification_2026_10_16.py`.** It has the same shape as
`verification_2026_09_27.py` (module docstring, `RECORD`, `DATE = '2026-10-16'`, `BY`, input
tables, `apply(out, codes)`), reads the new record file, and asserts every claim it uses is
SUPPORTED or PARTIAL with `source_kind == 'primary'`. A separate dated module keeps the
2026-09-27 script a faithful record of CP-10-01. The inputs:

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
    'conley-four-keys': 'Attribution corrected 2026-10-16 (claim y1-subject-11): David T. Conley, School Administrator magazine (AASA), April 1, 2016. The Y7.2 support excerpt is unchanged; see "Handed over" item 1.',
    'head-start-elof': 'Cited for Y1.8 only (decision Y1-1, 2026-10-16): the codebook sources codes from early-childhood frameworks only where the construct is about young children. Not for Y8.2 fine motor (codebook-defined, CP-12-07) or Y1.10 (removed by CP-10-01).',
}
NOTES_REPLACE = {  # replaces `notes` outright
    'national-reading-panel-2000': 'Excerpt replaced 2026-10-16 (CP-11-01, claim y1-subject-03): the CP-10-01 excerpt was a string of headings, not a sentence (S1.5).',  # drops the stale "Pending: status located (PARTIAL)" note
}
URLS = {
    'head-start-elof': 'https://www.govinfo.gov/content/pkg/GOVPUB-HE23_1100-PURL-gpo65456/pdf/GOVPUB-HE23_1100-PURL-gpo65456.pdf',  # official copy (G8)
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
        'requires': 'y1-subject-04b',  # V1; the entry is not added until V1 has a verdict
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
    {
        'id': 'ed-hhs-rtt-elc-2013-definitions', 'claim': 'y1-subject-13',
        'cite_as': 'U.S. Department of Education & U.S. Department of Health and Human Services (2013). Final Priorities, Requirements, Definitions, and Selection Criteria; Race to the Top-Early Learning Challenge. 78 Fed. Reg. 53964 (August 30, 2013).',
        'codebook_names': [],  # not named in any citation line; support and `basis` only
        'tier': 'A', 'publisher': 'U.S. Department of Education; U.S. Department of Health and Human Services', 'year': 2013,
        'supports': [('Y1.8', "definitions of 'Essential Domains of School Readiness' (language and literacy development; cognition and general knowledge, including early mathematics and early scientific development) and 'Kindergarten Entry Assessment'")],
        'notes_extra': 'Cross-program support for Y1.8 beside Head Start ELOF (decision A / Y1-1, 2026-10-16). The same definitions also list approaches to learning, physical and motor development and social-emotional development; those are not cited for any code (Y1.10, Y8.2 and Y4 keep their own sources).',
    },
]
```

`apply()` sets `verified_on = '2026-10-16'` and `verified_by` on each source it touches, and
`notes: 'Added by CP-11-01.'` (plus `notes_extra` where given) on the new ones. It skips an entry
whose `requires` claim is not yet in the record, so part (a) can land before V1 returns. Unlike
the CP-10-01 `NEW` loop, it takes `codebook_names` from the table (CLAUDE.md: a name used in a
citation line goes into `codebook_names`).

**`codebook-refinement/v3/build_registry.py`** (three edits):

1. After `apply_2026_09_27(out, CODES)`, add
   `from verification_2026_10_16 import apply as apply_2026_10_16` and
   `apply_2026_10_16(out, CODES)`, before `SUPPORTED_CODES` is computed.
2. `'codebook_version_reviewed': '3.1.2'` → the version part (a) ships in.
3. `'last_reviewed': '2026-09-27'` → the date it is applied.

Result: 87 → 91 sources and 146 → 150 supports with V1 answered (87 → 90 and 146 → 149
before), `codebook_extensions` unchanged (A2.2, A2.4).

## Change, part (b): reaches the prompt (waits for the gate)

### Source lines (reach the prompt as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y1.2 | WIDA English Language Development Standards Framework (2020 edition); ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv). | WIDA English Language Development Standards Framework (2020 edition); ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv); ACTFL et al. (2020), Guidelines for Implementing the Seal of Biliteracy (maintaining home or heritage languages). |
| Y1.13 | Attendance Works, chronic absence; McKinney-Vento Act, 42 U.S.C. 11432 (school stability). | Attendance Works, chronic absence; McKinney-Vento Act, 42 U.S.C. 11432(g)(3)(A)-(B) (school of origin and school stability); 42 U.S.C. 675(1)(G), foster care case plan (educational stability). |
| Y1.16 | U.S. Department of Education, Office for Civil Rights (2024), Civil Rights Data Collection: student access to advanced courses, including AP and dual enrollment. | ESSA State report cards, 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) (accelerated coursework for postsecondary credit: AP, IB, dual or concurrent enrollment) and 6311(c)(4)(B)(v)(II) (access to and completion of advanced coursework); U.S. Department of Education, Office for Civil Rights (2024), Civil Rights Data Collection: student access to advanced courses, including AP and dual enrollment. |

"ACTFL et al." is used on purpose: it is correct whichever way V1 is answered. The new lines
avoid "partial", "located" and "(verified)", which `youthOutcomesV3.test.ts` forbids in a source
line. The statute behind 42 U.S.C. 675 is not named, because the verifier's record does not
name it. The Y1.8 Source line is not changed: the ED-HHS definitions are support in the
registry and `basis` only, so nothing about Y1.8 reaches the prompt.

Looked at and left alone: the Y1.7 source line ("Conley, Four Keys: Key Cognitive Strategies")
is not wrong, so the Conley fix stays in the registry and `basis`. The Y1.9 to Y1.12 and Y1.15
source lines say "UChicago Consortium", which is a short form and not a wrong name; the registry
carries the exact name.

### Y1 `frameworkBasis`: handed to CP-12-29 (G2)

Not edited by this CP. CP-12-29 is the one gated CP for secondary frameworks; it should carry
this Y1 edit with the others. Text for it:

Before:

```
ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse.
```

After:

```
ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse; secondary: Seal of Biliteracy Guidelines (home-language maintenance).
```

The CSTA entry is left as is (PR #62 and the CSTA 2026 question, pilot later item 5). The
Source line edit for Y1.2 and this clause land in the same gate, so the prompt never names the
Seal on a code without the domain naming it too.

### Domain `hint`, `rulesText`, `CONFUSIONS.md`

Unchanged. (`CONFUSIONS.md` is the 2.x registry; no 3.x tie-breaker depends on a citation here.)

## Sources

Only SUPPORTED claims from `research-review/2026-10-16/verification-table.md` are cited.

| Registry ID | Status | Component relied on | claim_id and verbatim excerpt |
|---|---|---|---|
| seal-of-biliteracy-guidelines-2020 (new) | verified once added; **cite_as pending V1** | Implementation Guidelines, section 1 | y1-subject-04: "English learners should be encouraged to maintain and improve proficiency in their home or heritage language(s)" |
| essa-6311-advanced-coursework (new) | verified | 6311(h)(1)(C)(viii)(II)(bb); 6311(c)(4)(B)(v)(II) | y1-attainment-12: "(bb) accelerated coursework to earn postsecondary credit while still in high school, such as Advanced Placement and International Baccalaureate courses and examinations, and dual or concurrent enrollment programs." y1-taxonomy-07: "(V) student access to and completion of advanced coursework;" |
| usc-42-675-1g-educational-stability (new) | verified | 675(1)(G) case plan | y1-attainment-05: "(G) A plan for ensuring the educational stability of the child while in foster care, including—" |
| ed-hhs-rtt-elc-2013-definitions (new) | verified | Essential Domains of School Readiness; Kindergarten Entry Assessment | y1-subject-13: "cognition and general knowledge (including early mathematics and early scientific development)" |
| mckinney-vento | verified | 11432(g)(3)(A)-(B) (pinpoint) | y1-attainment-03: "continue the child's or youth's education in the school of origin for the duration of homelessness— ... School stability ... In determining the best interest of the child or youth under subparagraph (A), the local educational agency shall—" |
| farrington-2012 | verified | publisher as printed | y1-mindsets-05: "Chicago: University of Chicago Consortium on Chicago School Research." |
| national-reading-panel-2000 | verified (fit stays partial) | Fluency section | y1-subject-03: "Fluency is one of several critical factors necessary for reading comprehension." |
| conley-four-keys | verified | Key Cognitive Strategies; attribution | y1-subject-11: "Key Cognitive Strategies consist of problem formulation, research, interpretation, communication, and precision and accuracy." |
| head-start-elof | verified | 2015 year; publisher; Y1.8 only | y1-subject-15: "For preschoolers, Language and Literacy are distinct domains to reflect the differentiation, centrality," |
| allensworth-easton-2005, -2007 | verified | publisher consistency | existing CP-10-01 records allensworth-easton-2005#0 and -2007#0 (no new claim) |

Caveats the verifiers recorded, carried into the registry notes: the ESSA (c)(4)(B)(v)(II)
measure is one a State "may include", and (h)(1)(C)(viii) is a reporting requirement; 675(1)(G)
and 11432(g)(3) set duties, not measured outcomes (support with no FD under G4); y1-attainment-03's
ellipses join separate subdivisions; the Farrington name comes from the citation line, not a
cover transcript; the Conley excerpt was returned in two pieces and joined by the verifier (the
CP-10-01 Y1.7 support excerpt, a single passage, is kept on the support for that reason); the
ED-HHS definitions also list domains outside Y1.8, which are not cited.

Not used, though verified: 6311(g)(1)(E) (y1-attainment-04; its excerpt does not show the
stability wording), 2023-24 CRDC School Form (y1-attainment-09, -11; later-cycle item), Title IX
106.40 (y1-attainment-06, PARTIAL; see CP-11-02), ESSA 7011(7)(B) and NALA (PARTIAL; rejected
for Y1.2).

## Verification requests

**V1. Seal of Biliteracy Guidelines: author list (open).** Send to `codebook-citation-verifier`:

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

What it blocks: only the Seal rows (the registry entry, the Y1.2 `basis` sentence, the Y1.2
Source line and CP-12-29's Y1 clause). The answer sets `cite_as` and `publisher` and is added to
the 2026-10-16 record. If the PDF shows logos only, the entry cites the document by title with
"ACTFL et al." and says so in `notes`. Everything else in this CP is independent of V1.

## Handed over (not in this CP)

1. **Conley and Y7.2** (reconciliation R-18, still open). `conley-four-keys` also backs Y7.2,
   and that excerpt may come from the 2011 EPIC slide deck. This CP fixes attribution only; the
   Y7 work decides whether Y7.2 needs a re-check.
2. **Farrington rename note wording** should match the Nagaoka and Allensworth & Easton notes in
   CP-12-04 and CP-12-24 (SUMMARY, PR #66 notes). Whichever lands second copies the other's
   wording.
3. The same Farrington and Allensworth & Easton attribution errors exist in the 2.x registry
   (`sources/original.sources.json`). Codebook 2.5.x is retired, so this CP leaves them.
4. The McKinney-Vento entry is shared with F2.3 (reconciliation R-08). This CP sets only the
   Y1.13 support's pinpoint; an F2.3 change must not alter it.

## Not bundled (separate CPs if wanted)

The Y1.10, Y1.13, Y1.14 and Y1.15 deviation entries (CP-11-02); the coding hints (CP-11-03);
the stale "CP-01-06 (in flight)" text in Y1.12's useInstead (CP-12-26); `docs/codebook/research-basis.md`
status note (pilot later item 14); the stale "not yet the default" heading in `DEVIATIONS.md`;
anything on Y1.4.

## Gold impact

- Rows expected to change code: none. No definition, include, exclude, useInstead or rule
  changes; part (a) does not reach the prompt at all.
- Design rows that rest on the edited citations, named in the gate's run report: S143 (Y1.2,
  home language), S014, S159, S219 (Y1.16), S051, S096, S233 (Y1.13), S025 (Y1.8).
- New proposed rows: none.
- Held-out gold was not read or used.

## Test plan

- Part (a): `python3 codebook-refinement/v3/build_registry.py`, then `npm test` (registry,
  sync and deviations tests), `npm run typecheck` and `npm run typecheck:server`. No scoring run:
  nothing reaches the prompt.
- Part (b): the single two-run design-set gate (G10) that covers every Source and
  `frameworkBasis` edit after PRs #62 and #66 merge (with CP-12-16, CP-12-29 and the others).
  Pass: no adjudicated design row flips and design accuracy does not fall; the rows above are
  named in the report.

## Judge result

Not run. Part (b) is judged in the combined gate.
