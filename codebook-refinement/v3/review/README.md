# Codebook 3.0 gold review

Severin decides the 3.0 code for each gold row on the review page
(claude.ai artifact S9Y8rPBpnoYvFLEy7nD5S7). Each `verdicts-<date>.json` is
an export of the page's saved decisions. `../apply_review.py` writes them
into `gold/youth_outcomes_v3.gold.csv`. Only rows in an export become
adjudicated.

## 2026-09-26: the 116 flagged rows

- He kept the suggested code on 108 rows and changed 8: H075, S188, S212,
  H080, S247, S127 and S001 took the route through their 2.x code, and
  H012 took an alternate.
- One row is a codebook gap: H077. His note says the skills aren't purely
  academic and might be digital, career or workforce skills.
- Notes that point at 3.0 backlog items (leads, not changes):
  - H012 holds two outcomes in one statement, which the coder should split.
  - H057 is an edge case between A2.1 and Y3.1.
  - H005: staff preparation as an output, where A2.5 may not fully cover it.

The 229 unflagged rows are still proposed.
