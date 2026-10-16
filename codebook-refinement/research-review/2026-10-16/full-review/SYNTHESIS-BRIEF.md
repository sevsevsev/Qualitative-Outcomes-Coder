# Full codebook research review: synthesis brief (Phase 4, 2026-10-16)

You write the recommendations for one batch of the research review of codebook 3.x
(repo /home/claude/Qualitative-Outcomes-Coder). Your task names the batch folder and domains.

Read, in this order:
- codebook-refinement/research-review/2026-10-16/recommendations.md (the Y1 pilot: copy its shape,
  tone and level of detail) and its open decisions A-E.
- `<batch>/research/reconciliation.md`, `<batch>/verify/verification-table.md`, all four
  `<batch>/review/*-review.md`, then the `<batch>/research/*-findings.md` where you need detail.
- CLAUDE.md, codebook-refinement/STANDARDS.md, DEVIATIONS.md, and the codebook data for your domains.

Rules:
- Only SUPPORTED or PARTIAL rows in the verification table can support a recommendation. Anything
  else is an unverified lead (list them in a short section).
- Weigh the four reviewers; where they disagree, say so and give the verdicts, including dissent.
  Do not invent consensus. Prefer the smallest change (S2.2).
- Separate changes to the registry, `basis`, `fidelity` and DEVIATIONS.md (do not reach the coding
  prompt; no eval needed) from changes to `source`, definition, include/exclude, useInstead or
  rules (reach the prompt; need the two-run design-set gate).
- Respect in-flight work: draft PR #62 (CP-09-01..08: Y1.4, A2.4, A2.5, Y2.5, Y2.6, Y7.1, Y7.2,
  Y7.3, F1.9) and draft PR #66 (Y1; CP-11-01..03). Items touching them are "after PR #62/#66" or
  notes for that PR, never edits to them.
- Never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv and never write a held-out
  ID (N###). Only Severin adjudicates gold or edits STANDARDS.md; anything that needs either goes in
  "Decisions for Severin". Do not edit repo files, run git, or call any mcp__hearthbot__ tool.

Write `<batch>/recommendations.md` (<= ~2,500 words):
1. A three-line summary (what holds, what is wrong, drift before/after per domain).
2. Act now: a ranked table. Each item: code, finding, verified evidence (claim id + short excerpt),
   reviewer verdicts (T/F/P/D), smallest change, CP type and version bump, framework-deviation line
   (none / new FD / changed FD), enum cost, and whether it reaches the prompt. Group them into
   proposed CPs (one citation-and-deviation CP per domain is the default; hints separate).
3. Worth a later cycle. 4. Rejected, and why. 5. Unverified leads.
6. Decisions for Severin: one line each, with the recommended option first. Reuse the pilot's
   letters where the same question recurs (for example decision C, the age rule) and give new
   ones short IDs prefixed by the batch (for example B2-1).
7. Gold rows that constrain any change (design-set IDs only).
Return a 10-line summary as your final message.
