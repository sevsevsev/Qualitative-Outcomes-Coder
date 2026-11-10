# Portrait of a Graduate crosswalk (draft)

`youth_outcomes_v3.portrait-of-a-graduate.json` maps every codebook 3.x code, and each domain-only code, to the District's Portrait of a Graduate skills it covers. Each code gets one fit:

| Fit | What it means |
| --- | --- |
| direct | The code names the same result the Portrait skill describes. |
| partial | Some statements under the code fit the skill and some do not, or the code sits next to the skill without matching it. |
| none | The Portrait has no skill for this result: a feeling, a status, a health condition, a relationship received, or a result for families, staff or systems. |

A link says which Portrait skills a partner outcome works toward. It never says what progression stage participants reach, and it is never a score for a partner. Partner logic model outcomes almost never carry stage-level detail, so stages are not coded (decided with Severin on 2026-11-10: about 20 of 891 logic model statements on a skill with progressions could point at a band of stages, and none named the participants' grade).

## Source

School District of Philadelphia Portrait of a Graduate Competency Framework, tab "Updated Skills Map 11.2" (14 competencies, 69 skills), received 2026-11-10. Written by Building 21 for the School District of Philadelphia, licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Anything built from this text carries the same license and credit line.

`portrait_skills_11.2.csv` holds the competency and skill names and their one-line "I can" statements from that tab, not the progression text. Identifiers follow version 11.2 only. Other tabs of the same workbook number the skills differently, so never mix identifiers across versions. Only competencies 1 to 8 have progressions.

## Status and limits

- Draft 0.1.0, written from code definitions and skill statements, for Severin's review. No coding run and no test set sit behind it.
- Where one 3.x code links to several skills (for example Critical Thinking, Inquiry and Media Literacy, Y1.7, to five Think Critically skills), a statement under that code counts toward each of them. Counts by skill are therefore only reliable for codes with a single link; counts by competency are the safer read.
- The file holds no counts. Working counts from the clean table sit in the project's shared folder, `portrait-of-a-graduate/`.

## Changing it

Edit `mapping.csv`, then run `python3 build_portrait_crosswalk.py` and `npm test` (`codebook-refinement/portrait-crosswalk.test.ts`).
