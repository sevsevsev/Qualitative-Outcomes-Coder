# 3.3.0 gate candidate (decision G10)

Prepared 2026-10-17 on `claude/y1-research-review-pilot-7z3jxj`, from main 28c0068 (3.2.1, after PRs #62
and #66). Not pushed, not merged. The live design-set gate decides whether it lands.

- Codes: 98 → 99 (F2.4 Material Necessities). Enum footprint: 160 → 161 (test cap 180, redesign line 165).
- System instruction: 85,264 → 93,696 characters. The prompt diff (361-line unified diff, 93 changed
  lines) is in the session scratch directory, `gate/prompt.diff`, with `before.system.txt` and
  `after.system.txt`.
- Registry: 142 sources, 255 supports, 2 codebook-defined codes (A2.2, A2.4). Built only by
  `v3/build_registry.py` and the verification modules.
- Drift (S4.9): Y8 5/13 (over, untouched); Y2 2/6, A1 1/3, A2 2/6 at the line; F2 1/4.

## Applied (commit order follows notes-for-pr-62 item 16)

| CP | Codes | What changed |
|---|---|---|
| CP-12-01 | Y2.1, Y2.2 | Prerequisite, no prompt text: Pekrun 2024, SSES curiosity, SEVT, CASEL entries; FD-P37 (Y2.1) and FD-P38 (Y2.2) opened; Y2 basis. CASEL's Y2.2 support is recorded **partial** (round-2 verdict), not direct. |
| CP-11-01 (b) | Y1.2, Y1.13, Y1.16 | Source lines name the verified frameworks. |
| CP-12-16 (b) | Y2.1, Y2.2, Y3.2, Y4.4, Y4.6, Y4.7, Y4.12 | Source lines; the Y2 anchor swap. |
| CP-12-04 (b) | Y5.2, Y5.3, Y5.5, Y5.6 | Source lines. NRC dropped from Y5.3 (not verified). |
| CP-12-05 (b) | Y6.1, Y6.3, Y6.4, Y6.7 | Source lines. |
| CP-12-06 (b) | Y7.4, Y7.5, Y7.7 | Source lines. |
| CP-12-21 (b) | Y-part Source lines | Source line wording. |
| CP-12-18 (b) | A3.2 | Source line. |
| CP-12-22 (b) | F1.7 | Source line and basis; Mapp and Kuttner support for F1.7 removed. |
| CP-12-26 | Y1.12, Y3.1, Y4.7 | Stale "in flight" notes removed from useInstead; new test bars such notes (Y8.10 excepted until the Y8 re-review). |
| CP-12-29 | Y1–Y7, F1, F2, A1 | Secondary frameworks named in each domain's Framework Basis; `sync.test.ts` check that every framework a code cites is in its domain basis (known gaps: A2.6, Y8.4, Y8.5, Y8.10). Y8 clause, NRC and USDA omitted. |
| CP-12-19 (bullet only) | rules | The DOMAIN ONLY bullet: an excluded specific result takes the domain. Example rebased to F2 ("material hardship in general"). |
| CP-12-33 | F2.4 (new), F2, A2.3, rules 1 and 2 | F2.4 Material Necessities in full: data, F2 description, basis, category line and category B, A2.3 exclude/useInstead pointer, rule 1 and rule 2 wording, CF-037, DEVIATIONS drift row, 10 registry entries from `verify-f24/verdicts.json` and `hygiene-verdicts.json` (`v3/verification_2026_10_17_f24.py`). Example is the P-F24-04 text with no goldId. |
| CP-12-31 (narrow hint, round 2) | F2.1, F1.6 | After the first gate run moved H027 from F2.1 to F1.6 in both runs, Severin chose to keep his ruling (2026-10-17). F2.1 include adds "families' confidence about money"; F1.6 exclude adds "savings, or confidence about money". Only the money-situation side of CF-034 ships (adjudicated rows H027, S006, H067; S118, H062, S206 on the other side); the caregiver money-skill bullet stays held (G11). This fix comes from a miss in the 90 older test rows, so they count even less as an independent check. |

## Excluded, and why

| Item | Reason |
|---|---|
| CP-11-03 | Waits on Severin ruling P-45..P-56 (G11); hint 3 also tied to G9. |
| CP-12-14 | Touches Y8 (S4.9 anchor re-review); item 28 waits on P-65..P-68 (G11); item 26 (Y8.13 title) is Y8. |
| CP-12-15 hints | Wait on P-57..P-64 (G11). |
| CP-12-19 items 15, 16 and rule 18 | Wait on P-73..P-75 and P-23/P-24 (G11); the A3.1 FD is a prerequisite. |
| CP-12-31 hints | Wait on P-69..P-72 (G11). |
| CP-12-32 (rest) | Waits on P-27..P-32 and P-41..P-44 (G11); would push A1 over the line; the codebook_gap part is an app change. |
| CP-12-07 Y8 frameworkBasis, CP-12-26 Y8.10, CP-12-29 Y8 clause | Touch Y8. |
| CP-12-18 (c) A2.6 | Needs the A2 re-review (A2 at the line). |
| CP-12-27 CF-008 | Needs gold row S176 changed (G14). |
| CP-09-05 and following, A1.3 widening | Held (G16). |
| CP-12-11 | No prompt text, but it would put A2 at 3/6 (over the line) and remove the A2.3 target CP-12-33 points to; it must land after this candidate. |
| CP-12-25 Y2.6/F1.9 tags, CP-12-22 F1.9 re-point | No prompt text; F1.9 tied to G14. |
| A2.4 "(or another group facing barriers)" | No CP yet (A2-5); the PR #62 text stays. |

## Rows to watch

Only adjudicated design rows are scored. "H" rows below are the 90 rows with `set=heldout` in
`youth_outcomes_v3.gold.csv`, scored with `--set heldout` on that file.

- **Expected flips:** none. All applied parts except F2.4 and the DOMAIN ONLY bullet are citation,
  basis or note text.
- **CP-12-33 (F2.4) must not move:** S196, S228, S240 (A2.3), H076, S106, S139, H027, S006, H067, S062,
  S210, H070, S198, S029, S035, S037, S200, S225, S233, S003, H013, S235, S158, S163, and the domain-only
  rows G-D01..G-D10. No adjudicated row carries F2.4 yet, so CF-037 has a self-expiring test allowance.
- **CP-11-01:** S143, S014, S159, S219, S051, S096, S233, S025.
- **CP-12-16:** S008, S137, S234, S049, S080, S128, S026, S102, S116, S175, S222, S246, S082, S242, S132,
  S004, S054, S059, S169, S230, S052, S172. Highest risk: S059, S077.
- **CP-12-04:** S036, S129, S016, S250, S032, S236, H060.
- **CP-12-05:** S012, H015, S180, S125, S145, S167, H030, S039, S211, S136, S059, S123, S107.
- **CP-12-06:** S166, S151, S218, S120, H046, H048, S162, S224, S187.
- **CP-12-18:** S195, H090. **CP-12-22:** S193, H069. **CP-12-26:** S163, S131, H063, S059.

## Eval commands (need `GEMINI_API_KEY`)

Baseline on main (3.2.1), from a separate worktree so the candidate branch is untouched:

```
git worktree add ../qoc-main main
cd ../qoc-main
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --set design --runs 2 --out codebook-refinement/eval/gate-3.3.0/baseline-3.2.1-design.json
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --set heldout --runs 2 --out codebook-refinement/eval/gate-3.3.0/baseline-3.2.1-heldout.json
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --set design --runs 2 --out codebook-refinement/eval/gate-3.3.0/baseline-3.2.1-domain-only.json
```

Candidate (this branch), each compared with its baseline (copy the baseline files across first):

```
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --set design --runs 2 --out codebook-refinement/eval/gate-3.3.0/candidate-3.3.0-design.json --compare codebook-refinement/eval/gate-3.3.0/baseline-3.2.1-design.json
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --set heldout --runs 2 --out codebook-refinement/eval/gate-3.3.0/candidate-3.3.0-heldout.json --compare codebook-refinement/eval/gate-3.3.0/baseline-3.2.1-heldout.json
npx tsx scripts/codebook-eval.ts --codebook youth_outcomes_v3 --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --set design --runs 2 --out codebook-refinement/eval/gate-3.3.0/candidate-3.3.0-domain-only.json --compare codebook-refinement/eval/gate-3.3.0/baseline-3.2.1-domain-only.json
```

The design run is the gate. Report the `--set heldout` run separately: those 90 rows have informed
earlier fixes, so they are not a clean held-out set. Do not run the separate
`youth_outcomes_v3.heldout.gold.csv` file (used once). `--include-proposed` gives a non-gating preview only.

## Gate run 1 and the fix (2026-10-17)

Run 1 results are in `codebook-refinement/eval/gate-3.3.0/` (README there). Design set: no regressions, S073 and S247 fixed. Older test rows: H027 moved F2.1 → F1.6 in both runs. Severin kept F2.1; the narrow CP-12-31 hint above was added and the gate is rerun on the new commit (round 2 files carry a `-r2` suffix).

## Open items

- The JRF publication date (13 January 2026) comes from the verifier's fetch summary; confirm it at the
  next re-verification.
- The P-F24-04 text is now the F2.4 prompt example, so it is not independent evidence in this gate.
- F2.4 has no adjudicated gold. Severin's F2.4 rulings need to be added to the gold file before CF-037's
  allowance expires.
- CASEL's Y2.2 fit is partial (round-2 verdict), where CP-12-01 said direct.
- Y5.3 still has no NRC citation; FD-P26 stays open.
