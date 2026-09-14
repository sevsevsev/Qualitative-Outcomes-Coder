# Codebook validation fixture

`synthetic-outcome-statements.csv` is 94 realistic-but-synthetic outcome statements spanning 18 nonprofit program types (afterschool/OST, mentoring, arts, sports & rec, environmental/outdoor ed, workforce/CTE, family support, housing/basic needs, immigrant/refugee services, disability inclusion, school-based mental health, civic engagement, faith-based programs, juvenile justice/reentry, early childhood, food security, digital equity, general education/tutoring), plus a few deliberately vague/edge-case statements.

It was generated as part of the v1.1.0 codebook gap analysis: an agent simulated coding each statement against the **v1.0.0** codebook (before Domains 11-12 and the other additions existed) by hand-applying the actual domain definitions and tie-breaker rules, and tagged each one:

- **`v1_0_0_simulated_tag`** — `CLEAN` (good fit), `AWKWARD` (forced into an ill-fitting domain), or `UNCODED` (no domain fit at all), under the old codebook.
- **`v1_0_0_simulated_domain`** — which domain/subcategory it would have been forced into (or blank if uncoded).

This was a manual simulation, not a live model run — there was no `GEMINI_API_KEY` available in the environment that built this. **The real validation step is to upload this CSV to the running app** (Original codebook selected) and compare the live v1.1.0 results against the `v1_0_0_simulated_*` columns:

- Statements tagged `AWKWARD`/`UNCODED` under v1.0.0 that involve academic skill gains, attendance/graduation, family/parenting, risk-behavior-prevention, or postsecondary/employment outcomes should now code `CLEAN` with medium/high confidence into the new domains (11, 12) or new subcategories (7.5-7.8, 8.7-8.8, 10.5).
- The three intentionally uncodeable rows (`N/A`, `See logic model above.`, `Improve outcomes for students.`) should still come back `uncoded: true` — those weren't gaps, they're the codebook's own definition of what "uncoded" is for.
- Faith-based statements (`faith_based` group) should now route to a secular construct (5.2/5.4/2.1/6.2) per the new "do not leave faith-specific language uncoded" rule in `rulesText`, rather than showing up in `uncoded`.
- Anything still `AWKWARD`/`UNCODED` after the update is either a genuine remaining gap worth a v1.2.0 look, or one of the deliberately-deferred items listed at the bottom of `codebooks/original.ts`.
