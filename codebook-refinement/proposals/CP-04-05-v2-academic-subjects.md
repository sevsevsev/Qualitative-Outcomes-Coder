# CP-04-05: Carry the subject hybrid into the v2 draft (Y7 from 10 codes to 8; Y8.3 takes grades and general performance; Y7 and Y8 listed first)

| Field | Value |
|---|---|
| Type | MERGE |
| Codes touched | Y7.1 + Y7.2 → Literacy; Y7.5 + Y7.10 → Other Academic Subjects; Y7.7 widened; Y8.3 widened; Part Y order |
| Version bump | none in production; v2 draft rc (the draft is not in code) |
| Requirement served | R1 frameworks · R2 breadth |
| Status | draft: awaiting Severin's approval. **Not applied**; `v2/codebook-v2-draft.md` is unchanged, following CP-03-01's precedent |
| Enum cost | −2 against the ≈151 v2 estimate |

## Problem

The v2 draft gives each subject its own Y7 code. The 2026-09-24 debate kept that idea
for the subjects with their own standards and enough volume. It also found three
problems in the draft:

- Y7.1 and Y7.2 split reading from writing. ESSA ("reading or language arts") and
  SCED area 01 treat them as one subject.
- Y7.5 Social Studies is thin (17 live rows) and its C3 anchor is only located.
- Y7.10 "Other Applied" is an unsourced extension.

Severin also asked for the academic domain to come first.

## Change (proposed edits to `v2/codebook-v2-draft.md`)

| v2 draft now | Proposed | Anchor |
|---|---|---|
| Y7.1 Reading; Y7.2 Writing & Composition | **Y7.1 Literacy: Reading & Writing** | ESSA 6311(b)(1)(C); National Reading Panel; CCSS writing anchors |
| Y7.3 Mathematics | **Y7.2 Mathematics** | ESSA 6311(b)(1)(C); CCSS math |
| Y7.4 Science, Technology & Engineering | **Y7.3** (unchanged scope) | ESSA 6311(b)(1)(C) science; NGSS; CSTA |
| Y7.6 Arts Learning & Performance | **Y7.4** (unchanged scope) | National Core Arts Standards |
| Y7.5 Social Studies & History; Y7.10 Other Applied | **Y7.5 Other Academic Subjects** (social studies, world languages, health education, others) | ESSA 7801(52); NAEP 9622(b)(2)(D) |
| Y7.7 English Language Development & Multilingualism | **Y7.6 Language Acquisition: English, Home & World Languages** | WIDA; ACTFL (to verify) |
| Y7.8 Early Development & School Readiness | **Y7.7** (unchanged) | ELOF (the code is inherently early-childhood) |
| Y7.9 Critical Thinking, Inquiry & Media Literacy | **Y7.8** (unchanged) | NAMLE; Conley |
| Y8.3 Grades, Credits & On-Track Status | **Y8.3 Grades, GPA, Credits, On-Track & Overall Academic Performance** | Allensworth & Easton |

**Practical skills with no academic content** (bicycle repair, cooking technique)
leave Y7. Y9.7 is a stretch for them, so they need their own tie-break when v2's
Y9 is next revised.

**Order.** In Part Y, list Y7 and Y8 first and keep their numbers. If Severin wants
the numbers to match the order (Academic = Y1), renumber once, at v2 cut-over, when
the crosswalk and gold are regenerated anyway.

**Also updated:**
- tie-breaks: the same rules as v1's rule 5b and CF-025/CF-026;
- `v2/v1-to-v2-crosswalk.csv`: 11.8 → Y7.3, 11.9 → Y7.4, 11.3 → Y7.5;
- `gold/gold-cycle02.csv`: v2_gold rows using Y7.2 or Y7.5/Y7.10 get re-mapped. All
  rows are still `proposed`.

## Sources

The same claims as CP-04-01 and CP-04-02, plus ACTFL for Y7.6 (new verification
request).

## Gold impact

Mechanical re-mapping of v2 codes in `gold-cycle02.csv`. No v1 gold change.

## Judge result

Not judged: this CP is not applied to code.
