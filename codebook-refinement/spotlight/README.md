# SPOTlight indicator links

Which codebook 3.x outcomes may contribute to the indicators on the District's
2024-25 SPOTlight, from the SPOTlight relevance review of 2026-10-18
([report](https://claude.ai/code/artifact/4454bf45-2669-4a9f-bfdd-910ed96ac76f)).

- `spotlight_relevance_links.csv`: the review's evidence table, 103 links (13
  recommended with conditions, 90 not recommended). `final_recommendation` decides;
  `model_match_required` says what program model a partner must run. The review made
  102; L-103 (on-time graduation, High School Completion and Re-engagement, Y1.17, to
  the four-year graduation rate) was added afterwards as the graduation counterpart of
  the attendance definition row, L-27.
- A definitional link ("by definition") is one where the code names the indicator
  itself. It rests on the SPOTlight's wording, so it needs no study; every other
  recommended link needs a claim a verifier marked supported.
- `verification/batch*_results.csv`: the independent checks, one row per claim, each
  with the fetched link and a verbatim excerpt. Only these count as evidence.
- `youth_outcomes_v3.spotlight-links.json`: built from the CSV by
  `python3 codebook-refinement/spotlight/build_links.py`. Change the CSV and rebuild;
  never edit the JSON by hand. `services/spotlightLinks.test.ts` checks that the two
  agree and that every recommended link rests on a checked claim.

## Where it shows

- **Export:** the `possible_spotlight_links` column lists, by name, the indicators the
  row's primary code may reach. It is blank for domain-only and uncoded rows, for codes
  with no recommended link, and for codebooks with no link data.
- **Codebook tab (internal app):** each code card has a "Connection to District
  indicators" section, and the rail has a "District indicators" view.
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
