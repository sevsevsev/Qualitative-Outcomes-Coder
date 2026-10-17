# Live gate run: codebook 3.3.0 candidate vs 3.2.1 (2026-10-17)

Model gemini-3.8-flash, thinkingLevel LOW, two runs each. Baseline = main 28c0068 (3.2.1).
Candidate = claude/y1-research-review-pilot-7z3jxj 204b7d3 (3.3.0). Result rows in the JSON are run 1 only.

| Set | 3.2.1 strict / lenient (run 1; run 2) | 3.3.0 strict / lenient (run 1; run 2) |
|---|---|---|
| Design, 255 rows (the gate) | 98.0 / 99.2; 98.4 / 100 | 98.8 / 100; 99.2 / 100 |
| Older test rows (set=heldout, 90, not clean) | 95.6 / 96.7; 95.6 / 96.7 | 94.4 / 95.6; 94.4 / 95.6 |
| Domain-only, 10 rows | 70 / 70; 80 / 80 | 80 / 80; 80 / 80 |

Design set: no regressions. Fixed: S073 (Y8.12, was A2.5), S247 (Y6.6, was Y8.1).
S006 and S139 change first-listed code on a split but still carry F2.1 (scored correct both versions).
Laptop / access rows S196, S228, S240 stay A2.3. No row was coded F2.4 (none expected; no F2.4 gold yet).
Remaining design misses (candidate): S011 (expected uncoded, got A2.1), S049 (Y2.2 → Y5.4), S176 (F1.9 → A2.6, the pending decision).

Older test rows: one regression, H027 "Families reported feeling more confident managing household
finances": F2.1 → F1.6 Adult Education, Skills & Employment, in both candidate runs. H027 is on the
F2.4 must-not-move list.

Domain-only: G-D07 now Y3 (was Y3.1). Still missed: G-D09 (Y2 → none), G-D10 (Y5 → none).

## Files

- `baseline-3.2.1-{design,heldout,domain-only}.json`: main 28c0068 (codebook 3.2.1).
- `candidate-3.3.0-{design,heldout,domain-only}.json`: claude/y1-research-review-pilot-7z3jxj 204b7d3 (3.3.0).
- `comparison-{design,heldout,domain-only}.txt`: per-run accuracy for both, then every row whose run-1 code or score changed, then the candidate's misses.

Each JSON keeps per-row codes for run 1 only (the script's format); run 2 appears as accuracy and run-to-run stability.

## Where the moved row came from

H027 ("Families reported feeling more confident managing household finances"), file `candidate-3.3.0-heldout.json`, run 1 rows:
old code (baseline 3.2.1, run 1) F2.1 Income, Benefits & Financial Stability; new code (candidate 3.3.0, run 1) F1.6 Adult Education, Skills & Employment, confidence high.
Run 2 also moved: candidate run 2 scored the same 94.4% with 100% run-to-run agreement, and baseline run 2 kept 95.6%.

## Commands

Baseline from main checkout, candidate from a worktree of the branch (`--compare` was not used; comparisons were computed from the saved files, same row-level logic):

```
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --set design --runs 2 --out codebook-refinement/eval/gate-3.3.0/<baseline|candidate>-<ver>-design.json
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --set heldout --runs 2 --out codebook-refinement/eval/gate-3.3.0/<baseline|candidate>-<ver>-heldout.json
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --set design --runs 2 --out codebook-refinement/eval/gate-3.3.0/<baseline|candidate>-<ver>-domain-only.json
```
