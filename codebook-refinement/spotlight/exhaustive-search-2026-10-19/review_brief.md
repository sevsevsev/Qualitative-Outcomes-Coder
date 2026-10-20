# Skeptical methods review brief

You are an adversarial methods reviewer. Five screeners proposed 143 changes to the SPOTlight relevance map, and
independent checkers fetched and checked the 368 citations the proposals rest on. Your job is to decide which changes
survive. You did not write any proposal. Prefer leaving the map unchanged to adding a weak link: a wrong link
credits partners for results their program model has not shown.

## Inputs (this folder)
- `screening_brief.md`: the bar for each tier and the output rules the screeners followed. Apply the same bar.
- `proposals_P.csv` (attendance), `proposals_Q.csv` (dropout, graduation), `proposals_R.csv` (reading),
  `proposals_M.csv` (math), `proposals_T.csv` (teacher attendance, science, biology, industry test).
- `claims_<letter>.csv` and `verification/batch11_results.csv` to `batch23_results.csv`: the checkers' verdicts,
  with what each source actually says (design, population, outcome, effect, excerpt, note). The claim ids match.
- `current_links.csv`: the 106 links in the map today and the reasons already recorded.
- `/mnt/project-files/attendance-strategies/verification/all_results.csv`: another thread's checked attendance
  studies (counter-evidence such as Tennessee community schools). Read it as evidence only.
- `_codebook_3.3.0.md`: the codes.

## Rules
1. A claim with verdict UNSUPPORTED, MISATTRIBUTED (unless the checker's corrected citation still says what the
   proposal needs) or UNREACHABLE cannot carry a link. A PARTIAL claim can carry a link only for the part the checker
   confirmed. Where the checker's figures differ from the screener's, use the checker's.
2. Tested links need a randomized trial or strong quasi-experiment of a partner-runnable model on the indicator
   itself or its measure. One trial is "suggestive" at most. Replicated or at-scale results earn "good" or "strong".
   A failed replication or a null at scale outweighs a positive pilot. Name the model in `model_match`.
3. Research-associated links need a meta-analysis, or two or more independent longitudinal studies adjusting for
   prior achievement or attendance. The pathway says "is associated with". Matched comparisons of program
   participants (for example the state 21st Century Community Learning Centers evaluations) belong here at most,
   and only where they adjust for the prior-year outcome.
4. Weigh the screeners' proposals against each other where they touch the same link (for example after-school
   programs appear for attendance, reading, math and graduation; social-emotional curricula appear for reading,
   math and science; community schools appear for attendance and math).
5. Codes are 3.3.0 codes only. Don't add a code to a link unless partner statements with that code would plausibly
   describe the model.
6. Plain words: no abbreviations in pathway, model_match, typical_effect or caveats (write "standard deviations",
   "randomized trial", program names in full).

## Output
Write `review_decisions.csv` in this folder with columns:
`proposal_id,decision,final_action,target_link,codes,indicators,final_tier,evidence_level,pathway,model_match,typical_effect,caveats,claim_ids,reason`
- `decision`: accept, accept-with-changes, or reject. Every proposal gets a row.
- `final_action`: new, strengthen, revise, overturn, new-not-recommended, or none.
- `final_tier`: tested, associated, or not-recommended. `evidence_level` for tested: strong, good, suggestive.
- `claim_ids`: only claims that survive rule 1.
- Merge proposals that describe the same link into one row (list the others as reject with "merged into ...").

Also write `review_summary.md` (under 2 pages): what changed and why, the answer on 21st Century Community Learning
Centers across all indicators, the largest overturns, and indicators that remain without any link a partner could
earn. Return a short summary.

## Shared folder rules
`/mnt/project-files` is a network mount shared with other sessions. Write only your two files. Don't search the
whole folder. Don't install packages. Keep scratch files outside it.
