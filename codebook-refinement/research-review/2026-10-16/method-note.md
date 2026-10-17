# How well the method worked (Y1 pilot, 2026-10-16)

Written so Severin can decide whether to run the same review on the other twelve domains.

## What ran

| Stage | Agents | Output | Effort (subagent tokens) |
|---|---|---|---|
| Research | 4 in parallel (subjects Y1.1-1.8; mindsets Y1.9-1.12; attainment Y1.13-1.18; structure and real use), plus 1 follow-up on a reviewer's lead (WWC outcome domains) | 5 findings files, 57 verifier-ready claims | ~640k |
| Verify | 4 `codebook-citation-verifier` runs, each seeing only `{claim_id, code, cite_as, claimed_component, url}` | 38 SUPPORTED, 19 PARTIAL, 0 wrong | ~140k |
| Review | 4 in parallel, fresh context: taxonomy/methods, framework fidelity, practitioner/coder, devil's advocate | 4 reports, verdict per finding | ~630k |
| Synthesis and CPs | this session, plus `codebook-change-drafter` | `recommendations.md`, 3 draft CPs | small |

About 1.4M subagent tokens and roughly 45 minutes of wall-clock time for one 18-code domain. The
academic-research-skills plugin did not load in project threads, so researchers used WebSearch
and WebFetch and read the plugin's lit-review and reviewer method files as guidance only.

## What it found that earlier checks had missed

- **Unlogged departures.** The 2026-09-27 re-verification checked each link; it did not ask
  whether each code's own text goes past its sources. This review found five Y1 codes that do,
  so Y1's "0 of 18" drift count was wrong. That is the most useful result, and it came from
  putting a fidelity reviewer on top of the researchers.
- **A missing source behind adjudicated gold** (Y1.2 home-language maintenance, row S143) and a
  dead source (Y1.16's only PDF returns 403).
- **Currency.** CSTA published 2026 PK-12 standards; WWC's Study Review Protocol moved to v5.1;
  the 2023-24 CRDC form is out; the NCAS site changed hands (unverified). A per-link check would
  not look for these.
- **A large real-data misroute** (35 Y1.8 rows from one template) that the practitioner reviewer
  traced to the model, not the codebook, with the gold rows that constrain the fix.

## Where it produced noise

- **Confirmation bias in the structure research.** It argued that NASEM 2019 maps "almost
  one-to-one" onto Y1; the verifier rated that PARTIAL and two reviewers called it out.
- **Unreconciled researchers.** Two researchers proposed different replacement anchors for Y1.8;
  only the reviewers noticed. A reconciliation step before review would save a round.
- **Over-reach in claims.** A wrong URL (C3), a "supersedes" claim the source does not make
  (CSTA), strands placed on the wrong page (CCSS RF), excerpts stitched from fetch-tool fragments,
  and two SUPPORTED verdicts whose own notes say partial. The verifier caught most; the devil's
  advocate caught the rest. Keep both roles.
- **Counts.** Real-run counts were per row, so template copies inflated them (36 rows, 2 unique
  texts). Next time, give researchers unique-text counts from the start.
- **Volume.** Every agent overran its word target, and about half of the 57 citations are
  "nice to have" rather than fixes. The ranked list filters this, but a domain with weaker
  sources would produce more.

## Suggestions before extending to other domains

1. Add a short reconciliation step after research (one agent reads all findings and lists
   conflicts) before verification.
2. Ask the fidelity question up front in the research brief: "does the code's own text go past
   its sources?"
3. Give researchers per-code unique-text counts from both real runs.
4. Tell the verifier to re-fetch and not join fragments, and to mark partial when its own note
   says partial.
5. Batch the remaining twelve domains three or four at a time, as the prompt says; at this rate
   that is about 1-1.5M tokens per domain.
