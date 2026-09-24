# CP-04-01: Split 11.3 by subject (new 11.8 Science, Technology & Engineering; new 11.9 Arts Learning)

| Field | Value |
|---|---|
| Type | SPLIT |
| Codes touched | 11.3 (renamed, narrowed, re-anchored), 11.8 (new), 11.9 (new); hints on 8.1, 1.4/1.5 notes; CF-010, CF-021, CF-024, CF-026 |
| Version bump | MINOR (see the version question under "Judge result") |
| Requirement served | R1 frameworks · R2 breadth |
| Status | ready-to-test (applied on branch `claude/project-thread-mpnj0j`) |
| Enum cost | +2 (footprint 142 → 144, measured with `buildBatchResponseSchema`) |

## Problem

v1.1.1 names only literacy (11.1) and math (11.2). Every other subject shares 11.3,
which has no valid source: cycle-01b found ESSA's achievement indicator covers only
math and reading/language arts (CP-01-13, item 2).

In the 2026-09-23 live run (2,081 rows, 110 programs), 11.3 was the largest learning
code, with 99 rows:

| Subject Area on 11.3 rows | Rows |
|---|---|
| Visual & Performing Arts | 24 |
| N/A / General (generic "academic performance") | 24 |
| Social Studies, History & Civics | 17 |
| Science | 12 |
| STEM (integrated) | 9 |
| Health & PE | 4 |
| CTE | 3 |
| Computer Science | 3 |
| Engineering | 2 |
| Math | 1 |

Severin asked whether literacy and math only was appropriate. A three-advocate debate
with a judge (2026-09-24, `/mnt/project-files/eval/academic_subjects_debate_verdict.md`)
concluded it was not. On 2026-09-24 Severin chose the "subject hybrid" design.

## Why this is the smallest fit (STANDARDS S2.2)

- **A hint or a wider definition** can't give science or the arts a source: 11.3
  would stay one code with no subject-specific anchor.
- **Subject Area alone** (a subject-neutral 11.3) was considered and rejected for
  now. The gold set has no Subject Area column, so its accuracy has never been
  measured. S1 also applies to codes, not field values. CP-04-06 sets the test that
  could reopen it.
- **Two new codes** cover the two largest subject groups in 11.3: arts (24 rows, 17
  programs) and science/technology/engineering (26 rows). Each has its own standard.
  Social studies (17 rows) stays in the re-anchored 11.3. The judge's rule: split
  it out later only if 11.3 agreement falls below 80%.
- This uses 2 of the cycle's 5 new subcategories.

## Change

**definitionsText, 11.3 before:**

```
11.3 General Content Knowledge & Conceptual Understanding
   - Definition: Demonstrated learning of subject-matter content or concepts (science, social studies, arts, etc.) NOT explicitly framed around college/career readiness.
   - Note: Use this for general content learning. Use 8.1 only when the outcome is explicitly framed around college/career readiness.
   - Example: "Youth will increase their knowledge of local ecosystems and environmental science concepts."
```

**definitionsText, 11.3 after, plus the new codes:**

```
11.3 Knowledge & Skill in Other Academic Subjects
   - Definition: Demonstrated learning of content, concepts or skills in an academic subject other than literacy, math, science/technology/engineering and the arts -- for example history, geography, civics and government, economics, world languages, or health education -- NOT explicitly framed around college/career readiness.
   - Source Framework: ESSA "well-rounded education", 20 U.S.C. 7801(52) (...); NAEP authorization, 20 U.S.C. 9622(b)(2)(D) (additional subject matter).
   - Note: Sport or physical-skill proficiency goes to 7.1. A practical skill with no academic content (cooking technique, bicycle repair) is not a subject: code it to the closest fit at low confidence. Use 8.1 only when ... college/career readiness.
   - Example: "Students will explain the causes of a major historical event."
11.8 Science, Technology & Engineering
   - Definition: Demonstrated learning in science (life, physical, earth or environmental science), engineering design, or computer science (computing concepts, coding, programming), NOT explicitly framed around college/career readiness.
   - Source Framework: ESSA State academic standards for science, 20 U.S.C. 6311(b)(1)(C); NGSS (...); CSTA K-12 Computer Science Standards (2017).
   - Note: STEM interest -> Domain 1; STEM identity -> 5.4; responsible and safe tech use -> 6.5; 8.1 only when framed around college/career readiness.
11.9 Arts Learning & Performance
   - Definition: Demonstrated learning in an art form (dance, media arts, music, theatre, visual arts): technique, vocabulary, and knowledge of the discipline's forms, history and concepts.
   - Source Framework: National Core Arts Standards (2014) (...).
   - Note: 11.9 for a skill or knowledge GAIN; 1.4 for self-expression through making; 1.5 for presenting or responding to art as an experience.
```

The exact text is in `codebooks/original.ts`.

- **rulesText:** new rule 5b, "Which Domain 11 code". Subject decides the learning
  code, and there are tie-breaks for the arts and for multi-subject statements.
- **Hints:** 8.1 ("use the subject's Domain 11 code"). There is a new 1.4/1.5 note
  pointing to 11.9. The 11.3, 11.8 and 11.9 structured entries carry hints.
- **CONFUSIONS.md:**
  - CF-010 amended to cover all subject codes.
  - CF-021 resolved for the arts; sport stays open.
  - CF-024: coding now goes to 11.8.
  - CF-026 is new (11.9 vs. 1.4/1.5).
- **Registry:** new sources for 11.3, 11.8 and 11.9 (see Sources). 11.3 leaves
  `codebook_extensions`.

**Re-import.** Codes are matched by their leading number in
`services/reviewNormalization.ts`, so exports that carry the old 11.3 label still
load. Old exports are not re-coded. An old 11.3 row tagged Science/CS/Engineering/STEM
corresponds to 11.8, and one tagged Arts corresponds to 11.9.

## Sources

Checked by an independent `codebook-citation-verifier` run on 2026-09-24. The verifier saw only the claims.

| Registry ID | Status | Component relied on |
|---|---|---|
| essa-7801-52-well-rounded | verified (SUPPORTED, V04-04) | 11.3: subjects of a well-rounded education (civics and government, economics, history, geography, foreign languages, health, "any other subject") |
| naep-9622-b2d | verified (SUPPORTED, V04-05) | 11.3: NAEP's additional subject matter |
| essa-6311-b1c-standards | verified (SUPPORTED, V04-03) | 11.8: State standards and assessments for science |
| ngss-2013 | located (PARTIAL, V04-07) | 11.8: three dimensions. Engineering design sits in an appendix, not in the core ideas. |
| csta-k12-2017 | verified (SUPPORTED, V04-08) | 11.8: CS learning objectives (Algorithms and Programming; Computing Systems; Data and Analysis) |
| national-core-arts-standards | verified source; 11.9 link PARTIAL (V04-06) | 11.9: the four artistic processes organize the standards across five disciplines. The 11.9 source line was reworded to say "organized by" rather than "define learning". |

11.3 leaves `codebook_extensions`. Science has a Tier-A anchor, but technology and engineering do not: 6311 covers science only, so they rest on NGSS (PARTIAL) and CSTA.

## Verification requests

V04-03 (ESSA science), V04-04 (7801(52)), V04-05 (NAEP 9622), V04-06 (NCAS for
11.9), V04-07 (NGSS), V04-08 (CSTA).

## Gold impact

- **Rows expected to change code (all still `proposed`):**
  - G-027, watershed ecology: 11.3 → 11.8.
  - G-049, instrument technique: 11.3 → 11.9.
  - G-050, dribbling: 11.3 → 7.1, low. Sport is excluded from 11.3.
- **New proposed rows:** G-061, G-064, G-066, G-067, G-070.
- `/mnt/project-files/eval/gold_set_v1.csv` uses v1.1.1 codes, so its 11.3 items
  (for example G006, G077 and G108) need re-mapping before the next score.

## Judge result

Filled in by `codebook-regression-judge`.
