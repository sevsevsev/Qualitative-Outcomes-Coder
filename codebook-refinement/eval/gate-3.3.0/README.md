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
