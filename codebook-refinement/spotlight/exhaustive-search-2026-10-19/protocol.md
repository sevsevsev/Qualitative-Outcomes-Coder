# Exhaustive search for the SPOTlight relevance map: protocol (2026-10-18)

Severin asked for an exhaustive search for studies relevant to the District SPOTlight indicators, naming
21st Century Community Learning Centers research as something the first review under-covered.

## Question

Which studies show that the kinds of programs Philadelphia partners run (described by codebook 3.3.0 codes, see
`_codebook_3.3.0.md`) change, or are consistently associated with, one of the 13 SPOTlight indicators?

Indicators (the only endpoints):
1. Students attending 90% or more of school days (chronic absence is the near complement).
2. Teachers attending 90% or more of days.
3. Dropouts (students who leave without transfer or graduation).
4. Four-year graduation rate.
5. State English language arts test, grade 3. 6. Same, grades 3 to 8.
7. State math test, grade 3. 8. Same, grades 3 to 8.
9. State science test, grades 4 and 8.
10. Keystone Algebra I. 11. Keystone Biology. 12. Keystone Literature (high school end-of-course exams).
13. Career and technical education industry certification test, grade 12.

Standardized achievement tests in reading or math count toward 5 to 8; high school end-of-course or high school
standardized tests toward 10 to 12; grades and credits count only as intermediate steps (on-track) to 3 and 4.

## Two tiers (unchanged)

- **Tested**: a randomized trial or a strong quasi-experiment (regression discontinuity, matched comparison with
  baseline equivalence, difference in differences, or a meta-analysis of such studies) of a program model, with an
  outcome that is one of the indicators or the same measure.
- **Research-associated**: a meta-analysis of the association, or at least two independent longitudinal studies
  pointing the same way, adjusting for prior achievement or prior attendance. Worded "is associated with".
- Null and negative results are kept too: they decide what not to claim.

## Inclusion

- Kindergarten to grade 12 students (or their families, schools, staff) in the United States, or comparable
  high-income systems if the program model transfers. Published or released 1990 onward.
- Any publication type: journal article, government or contractor evaluation report, state evaluation, dissertation
  only if it is the only report of a design that meets the bar, working paper.
- Outcome measured from school records or standardized tests, not program sign-ins or self-report.

## Sources every searcher logs (query, date, hits, screened)

- ERIC API: `https://api.ies.ed.gov/eric/?search=<query>&rows=200&format=json&fields=id,title,author,publicationdateyear,description,url,peerreviewed,publicationtype`
  (supports `peerreviewed:T`, field search such as `title:`, boolean AND/OR, quoted phrases).
- What Works Clearinghouse (intervention reports, study reviews), Evidence for ESSA, Blueprints for Healthy Youth
  Development, Social Programs That Work, CrimeSolutions, Campbell Collaboration, Results First Clearinghouse.
- Evaluation houses: Institute of Education Sciences and its National Center for Education Evaluation, MDRC,
  Mathematica, American Institutes for Research, RAND, Child Trends, Policy Studies Associates, Chapin Hall,
  University of Chicago Consortium on School Research, Research for Action and Philadelphia Education Research
  Consortium.
- Citation chasing: backward (reference lists) and forward (citing works, via Semantic Scholar
  `https://api.semanticscholar.org/graph/v1/paper/...` or Crossref) from meta-analyses already in the map.
- OpenAlex's free budget on this network is used up today; don't rely on it.
- Fetch with `curl -sSL -A "Mozilla/5.0"`; WebFetch fails in this environment.

## Output for every searcher

Write two files in this folder, named with your searcher letter:
- `candidates_<letter>.csv` with columns:
  `cand_id,citation,year,url,design,population_location,program_model,codebook_codes,indicators,outcome_measure,direction,effect_as_reported,proposed_tier,already_in_map,notes`
  - `cand_id` like `A-001`. `already_in_map` is the link id if the study is listed in `already_in_map.md`, else blank.
  - `direction` is positive, null, negative or mixed. Record null and negative results.
  - `effect_as_reported` is copied from the abstract or report where possible; mark anything from memory "lead".
- `search_log_<letter>.md`: each source and query, the date, hits, how many screened, how many kept, and the main
  reasons for exclusion. This log is what makes the search auditable as exhaustive.

Your candidates are leads. Independent checkers will fetch and verify every citation before anything enters the map,
so record a working URL for each, and never present remembered knowledge as checked.

## Shared folder rules

`/mnt/project-files` is a network mount shared by other sessions. Write only your own two files. Don't run a
recursive content search across the whole folder. Don't install packages. Keep scratch files outside this folder.
