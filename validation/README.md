# Codebook validation fixture

`synthetic-outcome-statements.csv` is 94 realistic-but-synthetic outcome statements spanning 18 nonprofit program types (afterschool/OST, mentoring, arts, sports & rec, environmental/outdoor ed, workforce/CTE, family support, housing/basic needs, immigrant/refugee services, disability inclusion, school-based mental health, civic engagement, faith-based programs, juvenile justice/reentry, early childhood, food security, digital equity, general education/tutoring), plus a few deliberately vague/edge-case statements.

It was generated as part of the v1.1.0 codebook gap analysis: an agent simulated coding each statement against the **v1.0.0** codebook (before Domains 11-12 and the other additions existed) by hand-applying the actual domain definitions and tie-breaker rules, and tagged each one:

- **`v1_0_0_simulated_tag`** — `CLEAN` (good fit), `AWKWARD` (forced into an ill-fitting domain), or `UNCODED` (no domain fit at all), under the old codebook.
- **`v1_0_0_simulated_domain`** — which domain/subcategory it would have been forced into (or blank if uncoded).

This was originally a manual simulation, not a live model run — there was no `GEMINI_API_KEY` available in the environment that built it.

## Update: live run completed

`live-run-2026-09-14.csv` is the actual output of running these 94 statements through the real production code path (`buildSystemInstruction` + `buildBatchResponseSchema` from `codebooks/`, same model, same `thinkingBudget`, same `CHUNK_SIZE` as `api/analyze-batch.ts`) against the live Gemini API, once a key became available. Two things came out of that run:

1. **It found and fixed a real bug first.** Every single request failed with a generic `400 INVALID_ARGUMENT` before this run — this was the first time the enum-constrained schema (added when the Gemini API key moved server-side) had ever been exercised against the live API. Root cause: Gemini's structured output rejects a request once a schema's *total* enum footprint (summed across every enum-bearing property in one compiled object graph) crosses some threshold — empirically between ~140 (works) and ~220 (fails) for this schema's shape, not simply "one enum repeated too many times" as first suspected. Fixed in `codebooks/geminiSchema.ts` by removing genuinely-unused duplicate fields at the `coded_items[]` level and relaxing the enum on `secondary_codes[].subcategory` (kept `secondary_codes[].domain` constrained — it's a dozen items, cheap to keep). See `codebooks/geminiSchema.test.ts` for the regression guard (`sumEnumSizes`) that would catch this before it ships next time.
2. **With that fixed, the v1.1.0 additions validate well.** Compare `v1_0_0_simulated_*` against `live_v1_1_0_*` in the CSV: 98/109 atomic results came back `high` confidence, 8 `medium`, and only 3 `none`/uncoded — and those three are exactly the intentionally-vague edge cases (`N/A`, `See logic model above.`, `Improve outcomes for students.`). Of the 14 statements the v1.0.0 simulation predicted would be `UNCODED`, 11 now code cleanly into the new domains/subcategories (Domain 11, Domain 12, 7.8, 10.5, 9.1); the faith-based routing rule worked as designed (all 6 faith-based statements route to a secular construct at medium/high confidence, none uncoded); and the two deliberately-deferred gaps that showed up in the set (environmental stewardship / nature-connection) degraded reasonably to a medium-confidence best-effort placement rather than failing outright.

Not re-verified by this run: the cost/efficiency observations from the original assessment (no prompt caching despite a ~10K-token system instruction sent on every chunk; `CHUNK_SIZE=5` amortizing that cost over few items) still stand — this run confirmed *correctness*, not efficiency.
