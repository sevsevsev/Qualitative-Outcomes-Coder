# Full codebook research review: reconcile brief (Phase 1b, 2026-10-16)

You reconcile one batch of researcher findings for the research review of codebook 3.x
(repo /home/claude/Qualitative-Outcomes-Coder). You did not do the research. You decide nothing:
you list conflicts and merge claims so the verifiers and reviewers work from one clean list.

Inputs (your task names the batch folder):
- `<batch>/research/*-findings.md` and `*-claims.json`.
- Other batches' `research/*-findings.md` under /mnt/project-files/research-review/full-review/,
  read only to catch cross-domain items (for example a finding in one domain that routes
  statements to a code in another).
- /mnt/project-files/research-review/full-review/RESEARCH-BRIEF.md (rules the researchers had).
- In-flight CPs: codebook-refinement/proposals/CP-09-01..08 (draft PR #62) and CP-11-01..03
  (Y1, draft PR #66).
- Never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Do not edit repo files,
  run git, or call any mcp__hearthbot__ tool. Do not fetch sources; you are not a verifier.

Write to `<batch>/research/`:
1. `reconciliation.md` (<= ~1,500 words):
   - Conflicts: two researchers propose different sources, definitions or routings for the same
     code or statement type. Name both sides; do not pick.
   - Breaking changes: one finding's change would break or contradict another's (including
     across batches), or would push a domain past the S4.9 one-third drift line when combined.
   - Duplicates and overlaps between claims.
   - Findings that touch in-flight CPs or PR boundaries (PR #62 codes: Y1.4, A2.4, A2.5, Y2.5,
     Y2.6, Y7.1, Y7.2, Y7.3, F1.9; PR #66: Y1).
   - Cross-domain hand-offs: items a researcher flagged for another domain's owner.
   - Per domain: the drift count today and the count if every proposed FD were logged.
   - Flag each item with an ID (R-01, R-02, ...) that reviewers can cite.
2. `claims-reconciled.json`: one merged array of all claims in the batch, duplicates dropped
   (keep the earliest claim_id and list merged ids in a separate `merged-ids.json` map), each row
   exactly {"claim_id", "code", "cite_as", "claimed_component", "url"}. Strip any reasoning,
   caveats, fit judgments or "likely partial" wording from cite_as and claimed_component.
Return a 10-line summary as your final message.
