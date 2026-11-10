# CP-13-01: A Portrait of a Graduate codebook for coding statements directly

| Field | Value |
|---|---|
| Type | ADD_CODE (a new codebook beside 3.3.0; 3.3.0 is not touched) |
| Codes touched | New codebook `portrait_of_a_graduate` 0.1.0: 14 competencies, 69 skills, plus the codebook-defined OUT block (6 codes) |
| Version bump | New codebook at 0.1.0 (testing). `youth_outcomes_v3` stays 3.3.0, byte-identical prompt |
| Requirement served | R1 frameworks |
| Status | draft → ready-to-test |
| Enum cost | Own schema: 126 enum values (test cap 180, redesign line 165). No change to 3.3.0's 161 |
| Framework deviation | One codebook-defined block, OUT ("Outside the Portrait of a Graduate"), which is never presented as part of the framework. Logged here; this codebook has no DEVIATIONS.md entries yet because DEVIATIONS.md covers 3.x |

## Problem

On 2026-11-10 Severin asked to code partner logic model outcomes straight to the School District of Philadelphia Portrait of a Graduate competencies, "rather than coding to the Youth Outcomes and then assuming about the overlap with the competency." The draft crosswalk (`codebook-refinement/portrait-of-a-graduate/`, pull request 75) only infers Portrait skills from 3.3.0 codes, and it is coarse where one 3.3.0 code spreads across several skills (Critical Thinking, Inquiry and Media Literacy, Y1.7, spreads across five).

## Why this is the smallest fit (STANDARDS S2.2)

A separate codebook leaves 3.3.0, its gold sets, the clean table, the District indicator links and the outcomes dashboard untouched, which the codebook freeze requires. Changing 3.3.0 to carry Portrait skills would break every one of those.

## Change

- `codebooks/portraitOfAGraduate.data.ts`: competencies (domains) and skills (codes), with the names and "I can" statements copied verbatim from the workbook's "Updated Skills Map 11.2" tab, and this codebook's definition, include, exclude and use-instead lines. For competencies 1 to 8 the include lines restate behaviors from the progression tabs. Progression stages are never coded: the 2026-11-10 assessment found about 20 of 891 logic model statements with stage-like detail and none naming participants' grade.
- `codebooks/portraitOfAGraduate.ts`: generates the prompt, enums and review hints. Rules follow 3.3.0 (splitting, confidence, uncoded, domain-only) plus Portrait routing rules (skill versus feeling, belonging, mentors and networks, leadership, communication, academics, career, digital, civic, health).
- OUT block (codebook-defined): OUT.1 feeling, belief or identity; OUT.2 relationship a young person has; OUT.3 status or attainment; OUT.4 health, safety or services; OUT.5 families, staff, programs or systems; OUT.6 other skill or knowledge the Portrait does not name. Without it, real results with no Portrait skill (confidence, belonging, attendance, graduation) would either be forced into a skill or confused with text that states no result.
- Registered in `codebooks/index.ts` as "Portrait of a Graduate (testing)". Not on the public explorer (`DEFAULT_EXPLORER_CODEBOOKS` unchanged). The explorer's and feedback's code-number patterns now also read "POG.1.1" and "OUT".

## Sources

| Source | Status | Component relied on |
|---|---|---|
| School District of Philadelphia Portrait of a Graduate Competency Framework, Updated Skills Map 11.2 and progression tabs 1 to 8. Written by Building 21 for the School District of Philadelphia. CC BY-NC-SA 4.0 | Supplied by Severin on 2026-11-10 as the District's own workbook. Not fetched from a public URL. Verbatim text is checked by `portraitOfAGraduate.test.ts` against `portrait_skills_11.2.csv`, extracted from the workbook | Every competency and skill name and statement |

The workbook holds three versions with different numbering (11.2, the eight-competency working version, and the Beacon Upload version). Severin chose 11.2 on 2026-11-10. If the District renumbers, a generated map is needed, as for any renumbering.

## Verification requests

None. No outside citation is added. A public copy of the framework, if one exists, should be located before the codebook is shown outside the office.

## Gold impact

No gold set exists for this codebook. Before it is used for counts that leave the office: blind coders A and B code a design set, Severin adjudicates, then two live runs are scored (the same path 3.0 took). A first, non-gating live check of 150 logic model rows is recorded in the project's shared folder, `portrait-of-a-graduate/live-check-2026-11-10/`.

## Judge result

Not judged: no adjudicated gold yet.
