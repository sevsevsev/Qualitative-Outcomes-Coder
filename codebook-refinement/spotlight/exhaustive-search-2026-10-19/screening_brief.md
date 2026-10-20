# Screening brief: from 867 candidate studies to proposed changes in the relevance map

Inputs in this folder:
- `merged_studies.csv`: 1,121 searcher rows de-duplicated into 867 studies (`study_id` S-0001...). The merge is
  rough (by ERIC id, DOI, and first author plus year plus title words): check that a group really is one study
  before relying on it, and split it in your notes if not.
- `current_links.csv`: the 106 links in the map today (13 tested, 7 research-associated, 86 not recommended), with
  the rules applied so far in `review_verdict` and `caveats`.
- `protocol.md` (the tiers and indicators), `_codebook_3.3.0.md` (the codes), and the searchers' `search_log_*.md`.

All effects in the candidates are leads. You judge which leads matter; you never mark anything verified.

## The bar (same as the current map)

- **Tested (recommend with conditions)**: a randomized trial or strong quasi-experiment of a program model that a
  partner could run, measuring the indicator itself or the same measure (school-record attendance, state or
  standardized tests, district dropout or graduation). Prefer replicated or at-scale results; a single small trial
  gives "suggestive" at most. A failed replication or a null at scale outweighs a positive pilot. Keep the model-match
  rule: the link names the program model a partner must run (`modelMatch`), since a code alone only says what a
  program works toward.
- **Research-associated**: a meta-analysis of the association, or at least two independent longitudinal studies
  pointing the same way that adjust for prior achievement or prior attendance. Worded "is associated with".
- **Not recommended**: checked and turned down, including null or negative evidence. These rows matter: they say
  what partners should not claim.
- Partner-participant-only pre-post comparisons, sponsor reports without a comparison group, and the federal
  "share of students under 90% attendance who improved" measure (regression to the mean) never qualify.
- Codes are 3.3.0 codes only (frozen). Indicators are S1 to S13.

## Your output (two files, named with your screener letter)

1. `proposals_<letter>.csv` with columns:
   `proposal_id,action,target_link,codes,indicators,proposed_tier,evidence_level,pathway,model_match,typical_effect,caveats,study_ids,claim_ids,rationale`
   - `action`: `new` (a link not in the map), `strengthen` (more or better evidence for an existing link),
     `revise` (change an existing link's tier, wording, conditions or effect), `overturn` (evidence that an existing
     recommended or associated link should be demoted), or `new-not-recommended` (a checked null worth listing).
   - `target_link`: the existing L-id for strengthen, revise or overturn.
   - `pathway`: plain words; tested links say what the program model does, associated links say "is associated with".
   - `claim_ids`: the claims in your claims file that the proposal rests on.
2. `claims_<letter>.csv`, the citations an independent checker must fetch, with columns:
   `claim_id,code,cite_as,claimed_component,url`
   - `claim_id` like `X-001` with your letter. `claimed_component` states exactly what must be confirmed (design,
     population, outcome, direction, effect size). Do not include your reasoning; the checker sees only this file.
   - One claim per study a proposal relies on. Skip studies no proposal relies on.

Return a short summary: proposals by action, the most consequential ones, and how many claims need checking.

## Shared folder rules

`/mnt/project-files` is a network mount shared with other sessions. Write only your two files. Don't run a
recursive content search over the whole folder. Don't install packages. Keep scratch files outside this folder.
