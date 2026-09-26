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

On 2026-09-26 he said yes to accepting the second code each note names as an alternate (`alternates-2026-09-26.json`). H005 (A1.1) and H057 (Y3.1) already listed it. H012 gains Y5.4.

He then confirmed the suggested code on all 229 unflagged rows in one step
(`bulk-2026-09-26.json`). All 345 rows are now adjudicated. That includes
the 90 held-out rows, which were seen while 3.0 was designed, so they aren't
held-out evidence for 3.0 (CP-08-01).

## 2026-09-26: fresh held-out set (`heldout3/`)

100 new statements (N001 to N100) that neither prompt nor any earlier gold set had seen.
Two blind coders coded them with 3.0 (`coder-a.json`, `coder-b.json`), and Severin
adjudicated them on a second review page (claude.ai artifact Uxbrw7UNoBHzNd1EyNhV4S). He
decided the 36 flagged rows one by one and confirmed the other 64 in bulk, which kept
the coders' shared main code and any second code they both gave as alternates.
`build_gold.py` rebuilds `gold/youth_outcomes_v3.heldout.gold.csv` from the exports.

- Rows he left uncoded: N028, N032, N033, N040, N064. N032 is also marked as a gap
  (his note: a longitudinal change the program likely doesn't measure).
- Codebook gap: N073 (adult community volunteering; kept A2.5, "difficult to code").
- N095: his note says the coder should split it into several outcomes (a backlog lead,
  like H012).

