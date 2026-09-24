# CP-04-02: Widen 11.1 to writing, and 11.6 to grades, GPA and general academic performance

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | 11.1 (scope widened; label becomes "Literacy: Reading & Writing"), 11.6 (scope widened; label becomes "Grades, Credits, On-Track Status & Graduation"), with their hints and examples; CF-025 |
| Version bump | MINOR for the scope; the two label changes are MAJOR under S4.6 as written (see CP-04-01's version question). Both new scopes are supersets, so the re-import mapping is one-to-one |
| Requirement served | R1 frameworks · R2 breadth · R3 tie-breakers |
| Status | ready-to-test (applied on branch `claude/project-thread-mpnj0j`) |
| Enum cost | +0 |

## Problem

- **Writing has no home.** 11.1 names reading skills only. In the 2026-09-23 run,
  7 writing outcomes went to 4.4 (academic confidence) and 6 to 11.1.
- **General achievement has no home.** Grades, GPA and "academic performance" with
  no subject named were scattered across 11.3, 11.6, 8.2, 3.4.1 and others. That is
  about 50 keyword hits across 24 programs. The 2026-09-23 gold draft had to code
  G017, G056, G069, G093 and G150 as "any 11.x".

## Why this is the smallest fit (STANDARDS S2.2)

Widening existing definitions costs no new codes. A separate "11.8 General Academic
Achievement" code was considered first. It was dropped because its proposed anchor
(21st CCLC measures) is afterschool-only, which breaks the rule that the codebook
covers any youth program. 11.6's on-track anchor (Allensworth & Easton) already
treats grades and course failures as status measures.

## Change

**Before**

```
11.1 Literacy & Reading Skill
   - Definition: Demonstrated growth in reading skill, such as fluency, phonics, phonemic awareness, vocabulary, or comprehension.
   - Source Framework: National Reading Panel (Five Essential Components of Reading Instruction).
11.6 Credit Accumulation, On-Track Status & Graduation
   - Definition: Outcomes related to course credit accumulation, 9th-grade on-track status, reduced exclusionary discipline (suspension/expulsion), or graduation/completion/re-engagement (including GED).
```

**After**

```
11.1 Literacy: Reading & Writing
   - Definition: Demonstrated growth in reading skill (...) or in writing and composition (planning, drafting and revising written work in any genre).
   - Source Framework: Report of the National Reading Panel (NICHD, 2000): alphabetics, fluency, comprehension; Common Core ... Anchor Standards for Writing; ESSA ... 6311(b)(1)(C).
   - Note: Writing habits, effort or confidence -> Domain 4. Oral communication and public speaking -> 3.4.1 (or 8.5 at work).
11.6 Grades, Credits, On-Track Status & Graduation
   - Definition: ... course grades, GPA, course passing or failure, credit accumulation, grade promotion, ... Also general "academic performance/achievement" or test scores when no subject is named.
   - Source Framework: UChicago On-Track Indicator (Allensworth & Easton, 2005; grades and GPA: Allensworth & Easton, 2007); ESSA graduation rate.
   - Note: A test score or proficiency level in a NAMED subject goes to that subject's code. Grades or GPA go here even when a subject is named -- record the subject in Subject Area.
```

The 11.1 source wording matches CP-01-13 item 4. CF-020 (discipline in 11.6) is
unchanged and still open.

- **rulesText:**
  - Rule 5b sends grades, GPA and generic performance → 11.6.
  - A writing tie-break: a stated gain in writing skill → 11.1; creative writing as
    self-expression → 1.4. The 1.4 definition and hint say the same.
- **Re-import:** `legacySubcategories` maps the old 11.1 and 11.6 labels one-to-one,
  with tests.
- The 11.2 source line moved to CP-04-07.
- **CONFUSIONS.md:** new CF-025.

## Sources

Checked by an independent `codebook-citation-verifier` run on 2026-09-24.

| Registry ID | Status | Component relied on |
|---|---|---|
| essa-6311-b1c-standards | verified (SUPPORTED, V04-01) | 11.1: State academic standards for reading or language arts |
| ccss-writing-anchors | verified (SUPPORTED, V04-09) | 11.1: College and Career Readiness Anchor Standards for Writing |
| allensworth-easton-2007 | verified (SUPPORTED, V04-10) | 11.6: GPA and course failures as on-track indicators |
| national-reading-panel-2000 | located (unchanged) | 11.1: alphabetics, fluency, comprehension |

## Gold impact

- **New proposed rows:**
  - G-062 (GPA → 11.6)
  - G-063 (math grades → 11.6)
  - G-065 (academic performance → 11.6)
  - G-068 (persuasive essay → 11.1)
  - G-069 (writing confidence → 4.4)
- **Existing rows:** G-019 (reading comprehension → 11.1) is unchanged.
- **Weakest part:** test scores with no subject named go to 11.6, which stretches
  the on-track anchor. The judge accepted this over adding a code.

## Judge result

Filled in by `codebook-regression-judge`.
