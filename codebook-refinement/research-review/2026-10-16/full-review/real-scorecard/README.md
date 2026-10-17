# Real-data scorecard: 120 outcomes from partner logic models (2026-10-17)

Severin asked whether the codebook should be tested on outcomes extracted from real logic
models "using the same approach" as the expert panel. This folder is that test.

**This is a scorecard, not gold and not a source of fixes.** No row here is adjudicated.
If any codebook change is made because of a miss below, this sample stops being a fair
test and must say so.

## What was tested

- **Sample.** 120 statements, one from each of 120 programs, drawn at random (seed 20261017)
  from the 2 October 2026 run of codebook 3.1.2 on `outcomes_for_coding.csv`. Only rows the
  coder auto-accepted and that nobody had reviewed were eligible: no review-queue rows, and no
  text that appears in the design gold, the held-out sets, the proposed examples or the
  review desk. So the result describes the rows nobody checks.
- **Panel.** Three blind coders (`blind-coders/`) coded the statements from the 3.1.5 coding
  prompt alone. Four experts (methodologist, youth development, frameworks, skeptic;
  `experts/`) then settled every row independently, seeing the blind codes but never the
  app's codes. A chair (`chair.csv`) ruled on the 8 rows the experts split evenly and
  overruled one three-of-four row. Brief: `PANEL-BRIEF.md`.
- **Score.** The app's 2 October codes against the panel's codes (`scorecard.csv`, built by
  `score.py` in the scratch layout). "Exact" means the same set of codes, with domain-only
  and uncoded counted as their own answers.

The app ran codebook 3.1.2 and the panel used 3.1.5. The coding prompt changed between them
only in 3.1.3 (display-only descriptions, not in the prompt) and 3.1.4 (racial identity
wording in Y5.2, Y5.1 and Y4.5). Two rows touch those codes (R079 sense of identity,
R082 cultural heritage) and the app matched the panel on both, so the version gap moves no
row in this score.

## Results

| | Rows | App matched panel |
|---|---|---|
| All rows, exact codes | 120 | 96 (80%) |
| All rows, same domains | 120 | 106 (88%) |
| Rows where all four experts agreed | 105 | 93 (89%) |
| Rows the experts split on (chair or three of four) | 15 | 3 (20%) |
| App said "high" confidence | 88 | 81 (92%) |
| App said "medium" confidence | 32 | 15 (47%) |

## The 24 misses, by pattern

1. **A specific code where the statement names only a domain (7):** R001, R006, R028,
   R030, R067, R100, R109. The app never used domain-only on these 120 rows; the panel used
   it 8 times, 6 with a gap flag (attitude toward reading, selective high-school admission,
   awareness of arts venues, learning by partner organizations).
2. **A second group or result left out (4):** R024, R053, R063, R091. Most are statements
   naming two groups (students and partners) or two results, where the app coded one.
3. **Wrong domain (9):** R022, R037, R050, R052, R056, R071, R075, R098, R119. Several are
   activity or communication statements (R056, R071, R119) where the right home is unclear.
4. **Right domain, neighboring code (4):** R039 trauma symptoms vs trauma-exposed youth
   (Y8.6 vs Y8.8), R078 workplace knowledge (Y7.3 vs Y7.1), R096 access (A2.5 vs A2.3),
   R116 connecting art and life (Y2.5 vs Y2.4).

Eight of the 24 misses are rows the experts themselves split on, so about a third of the
misses are genuinely contestable.
