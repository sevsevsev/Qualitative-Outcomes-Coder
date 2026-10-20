# Keystone subjects and high school academics: search protocol (2026-10-20)

Severin, 2026-10-20: "I would not expect there to much research tied to the Keystone exams, as they are
state-specific standardized tests. That being said, could we perhaps look to studies on moving the needle on the
subjects they correspond with? Or high school academics more broadly?"

## Question

Which studies show that programs of the kind Philadelphia partners run, described by codebook 3.3.0 codes
(`_codebook_3.3.0.md`), raise high school achievement in the Keystone subjects, or in high school academics broadly?
The result is new or changed links from existing codes to the SPOTlight indicators. The codebook is frozen: no new codes.

## Two lanes (say which for every candidate)

- **Lane 1, Keystone subjects.** The outcome is a test of the subject a Keystone exam measures, taken in high school
  (grades 8 to 12 when the course is high school level):
  - S10 Algebra I: Algebra I end-of-course exams in any state, high school math tests, Algebra I standardized tests.
  - S12 Literature: high school English or reading end-of-course exams, high school reading comprehension tests,
    state high school English language arts tests.
  - S11 Biology: biology end-of-course exams, high school science tests that include biology.
- **Lane 2, high school academics broadly.** Course passing (especially ninth grade and Algebra I), grade point
  average, credits earned, on-track status, ACT, SAT or PSAT, Advanced Placement exams, combined state high school tests.
  Lane 2 links point to S10 to S12 only as intermediate steps, and to graduation (S4) through on-track, as the map already does.

## Tiers (unchanged, never merged)

- **Tested**: a randomized trial or strong quasi-experiment (regression discontinuity, matched comparison with
  baseline equivalence, difference in differences, or a meta-analysis of such studies) of a program model, with a lane 1
  or lane 2 outcome from school records or standardized tests. Suggestive needs one clean randomized trial or two
  independent strong quasi-experiments of the same model.
- **Research-associated**: a meta-analysis of the association, or at least two independent longitudinal studies, adjusting
  for prior achievement, that an outcome named by a code goes with later lane 1 or lane 2 results. Worded "is associated with".
- Null and negative results are recorded: they decide what not to claim.

## Scope rules from Severin

- Stay at the outcome level. Links run from a code to an indicator. Do not build activity or output inventories.
- Prefer studies of whole program structures (a whole after-school, tutoring, mentoring, summer, college-access
  or youth development program) over a single named curriculum, and prefer models a community partner could run.
  School-run reforms (a school model, a curriculum adopted by teachers) may be recorded but are marked
  "school model, not a partner link".
- United States kindergarten to grade 12 (comparable high-income systems if the model transfers), 1990 onward.
- Only strong arguments. No weak claims. Self-reported grades do not count.

## Already done: do not repeat

`_already_in_map.md` lists the 173 links on pull request 72. `../exhaustive-search-2026-10-18/merged_studies.csv`
lists the 867 studies already screened (search it with grep, it is large). Mark a candidate `already_screened` with the
study id or link id when it is there, and only record it again if you found something the earlier record lacks (for
example a high school test outcome it did not record).

## Fetching

Use `curl -sSL -A "Mozilla/5.0" <url>` (WebFetch fails here). ERIC API:
`https://api.ies.ed.gov/eric/?search=<query>&rows=200&format=json&fields=id,title,author,publicationdateyear,description,url,peerreviewed,publicationtype`.
Also What Works Clearinghouse, Evidence for ESSA, MDRC, Mathematica, AIR, RAND, Annenberg EdWorkingPapers, NBER,
Semantic Scholar (`https://api.semanticscholar.org/graph/v1/paper/search?query=...&fields=title,year,abstract,externalIds,url`).

## Output per searcher (letter K1, K2, K3, K4)

In this folder: `candidates_<letter>.csv` with columns
`cand_id,lane,citation,year,url,design,population_location,program_model,partner_runnable,codebook_codes,indicators,outcome_measure,direction,effect_as_reported,proposed_tier,already_screened,notes`
and `search_log_<letter>.md` (each source and query, date, hits, screened, kept, reasons for exclusion).
`effect_as_reported` is copied from a fetched abstract or report; anything from memory is marked "lead".
Candidates are leads; independent checkers verify every citation before anything is used.

## Shared folder rules

`/mnt/project-files` is a network mount shared with other sessions. Write only your own two files here. No recursive
content search across the whole mount. Do not install packages. Scratch files go outside the shared folder.
Do not call any `mcp__hearthbot__` tool.
