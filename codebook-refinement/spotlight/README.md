# SPOTlight indicator links

Which codebook 3.x outcomes may contribute to the indicators on the District's
2024-25 SPOTlight, from the SPOTlight relevance review of 2026-10-18
([report](https://claude.ai/code/artifact/4454bf45-2669-4a9f-bfdd-910ed96ac76f)).

- `spotlight_relevance_links.csv`: the review's evidence table, 173 links (18 tested
  and recommended with conditions, 10 research-associated, 145 not recommended). `final_recommendation` decides;
  `model_match_required` says what program model a partner must run. The review made
  102; L-103 (on-time graduation, High School Completion and Re-engagement, Y1.17, to
  the four-year graduation rate) was added afterwards as the graduation counterpart of
  the attendance definition row, L-27.
- A definitional link ("by definition") is one where the code names the indicator
  itself. It rests on the SPOTlight's wording, so it needs no study; every other
  recommended link needs a claim a verifier marked supported.
- **Research-associated links** (`final_recommendation` = `associated`, added
  2026-10-18 at Severin's request) are a second tier shown beside the tested links, never
  mixed with them. They rest on consistent correlational evidence: a meta-analysis, or
  several long-term studies pointing the same way that adjust for earlier achievement or
  attendance. A single survey at one point in time does not count. Each is worded "is
  associated with", never "contributes to", names its basis in `associated_basis`, and
  carries the caution that programs often attract students who are already more engaged.
  L-91, L-100, L-101 and L-102 were re-screened into this tier; L-104 to L-106 are new.
  The searches and their claims are in `verification/batch7` to `batch10`
  (`*_claims.csv` holds what each checker was given).
- **Exhaustive search (2026-10-19)**, at Severin's request after he named 21st Century
  Community Learning Centers research as missing. Seven logged search lines (after-school
  and state 21st Century evaluations, every evidence clearinghouse, an ERIC query grid,
  citation chasing, Philadelphia and Pennsylvania, youth development, needs and family)
  gave 1,121 leads, merged into 867 studies. Five screeners proposed 143 changes;
  independent checkers fetched the 368 citations they rest on (`verification/batch11` to
  `batch23`); a skeptical reviewer kept 113. The record is in `exhaustive-search-2026-10-19/`
  (protocol, search logs, merged studies, proposals, `review_decisions.csv`,
  `review_summary.md`). L-107 to L-173 are new rows. Two links fell to not recommended
  when the data was built: the belonging exercise (L-17), whose preregistered replication
  found no effect (`verification/batch24`, checked in the attendance-strategies thread),
  and Safe Passage (L-117), whose one study was confirmed only in part.
- `verification/batch*_results.csv`: the independent checks, one row per claim, each
  with the fetched link and a verbatim excerpt. Only these count as evidence.
- `youth_outcomes_v3.spotlight-links.json`: built from the CSV by
  `python3 codebook-refinement/spotlight/build_links.py`. Change the CSV and rebuild;
  never edit the JSON by hand. `services/spotlightLinks.test.ts` checks that the two
  agree and that every recommended link rests on a checked claim.

## Where it shows

- **Export:** the `possible_spotlight_links` column lists, by name, the indicators the
  row's primary code may reach. It is blank for domain-only and uncoded rows, for codes
  with no recommended link, and for codebooks with no link data. The
  `associated_spotlight_links` column next to it lists the research-associated
  indicators the same way; the two columns are never merged.
- **Codebook tab (internal app):** each code card has a "Connection to District
  indicators" section, with tested program models and research-associated links side by
  side, and the rail has a "District indicators" view laid out the same way.
- **Not shown:** the public explorer site (`VITE_SITE=explorer`) never imports this
  data; it needs district sign-off first. Never in the coding prompt.

## The rule

A link is "possible" only. A code says what a program works toward; the evidence is
about specific program models. A link counts for a program only when a person confirms
it runs the model in `modelMatch`. Codes with no link are not worth less: the Board's
guardrails (Bylaw 003.1) count a well-rounded education and safe, welcoming schools.
Do not total links per partner or rank partners by them.

This data is not part of the codebook, so changing it needs no codebook version bump.
Re-run the review when the codebook's codes change.
