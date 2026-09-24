---
description: Run one refinement cycle on the outcomes codebook (audit → verify → mine confusions → draft CPs → judge), stopping at the human approval gate.
argument-hint: "[cycle number] [optional focus, e.g. 'financial literacy' or 'reviewed-exports/2026-10.csv']"
---

You are orchestrating one refinement cycle for the Qualitative Outcomes Coder's
youth-development codebook (`codebooks/original.ts`).

Arguments: $ARGUMENTS

## The four requirements this codebook must meet

1. **Real frameworks.** Every code is grounded in real, established frameworks,
   cited down to the component.
2. **Breadth.** It covers the full range of typical youth-serving programs.
3. **Tie-breakers.** It has clear, sourced tie-breakers for codes that get confused.
4. **No drift.** It improves iteratively without baking in hallucinations or drifting
   from our standards.

`codebook-refinement/STANDARDS.md` turns these into rules. Read it in full before
doing anything else. It overrides anything in this prompt that seems to conflict.

## Ground rules for you, the orchestrator

- **What models remember is a lead, never evidence.** No citation reaches the
  registry, a CP, or the codebook unless `codebook-citation-verifier` returned
  `SUPPORTED` or `PARTIAL` with an excerpt in *this* cycle. The exception is an
  entry the registry already has as `verified`.
- **Keep contexts separate.** Send the verifier only the claim list, not your
  reasoning or the auditor's report.
- **You never:**
  - set a gold row to `adjudicated`;
  - approve a CP;
  - merge to `main`;
  - edit `STANDARDS.md`.
- **Budget:** at most 5 new subcategories per cycle, and only while the enum
  footprint stays at 165 or less (STANDARDS S2.3). At most 12 CPs per cycle; the
  rest go to the backlog.
- The latest cycle report's backlog and the "Deferred" block in `original.ts` are
  binding. Reopen an item only with new evidence.

## Steps

1. **Orient.**
   - Read STANDARDS.md, CONFUSIONS.md, the registry, the latest
     `codebook-refinement/cycles/*.md`, and `codebooks/original.ts`.
   - Run `npm test`.
   - Note the codebook version, the subcategory count, and the enum footprint.
2. **Baseline.** If `GEMINI_API_KEY` is set, run
   `npx tsx scripts/codebook-eval.ts --runs 2 --out codebook-refinement/eval/baseline-cycle-NN.json`.
   - If there are fewer than 20 adjudicated gold rows, say so prominently. The
     measurement gates are not protective yet, and the most valuable thing the human
     can do this cycle is adjudicate gold rows.
3. **Audit.** Give `codebook-coverage-auditor` the focus (if any) and the baseline
   path.
4. **Mine confusions.** Give `codebook-confusion-miner` the eval JSON and any
   reviewed-export CSVs named in the arguments.
5. **Verify.**
   - Collect every citation that any step wants to add or change, plus the
     registry's `unverified` entries for codes the cycle touches.
   - Send them as a claim list to `codebook-citation-verifier`.
   - Update the registry *only* from its verdicts:
     - `SUPPORTED` → `verified`;
     - `PARTIAL` → `located`, with a note;
     - `MISATTRIBUTED` → `misattributed`, with an `open_cp`;
     - `UNSUPPORTED` / `UNREACHABLE` → leave it out, or set `needs_replacement`.
6. **Draft.** Give `codebook-change-drafter` the ranked gaps, the confusion drafts,
   and the verified registry, and have it write the CP files.
   - Order: citation fixes first, then tie-breakers and hints, then scope changes,
     then new codes.
7. **Judge.** For each CP the human has already marked `ready-to-test` (or, on a
   first pass, the citation-fix and tie-breaker CPs), have the drafter create the
   branch. Then have `codebook-regression-judge` evaluate it.
8. **Report.** Write `codebook-refinement/cycles/cycle-NN-YYYY-MM-DD.md` with:
   - what was examined;
   - the verification table (claim → verdict → excerpt);
   - the coverage matrix;
   - the CP list with judge verdicts;
   - the metrics table;
   - the gold rows proposed (they need human adjudication);
   - the backlog;
   - **decisions needed from the human**, as a short numbered list at the top.
9. **Stop.** Present the report and the decision list. Wait. Do not merge anything.

## After the human responds (a later session)

- Apply the approved CPs in **one commit** that bumps `codebook.version` (by the
  PATCH/MINOR/MAJOR rules) and updates the consistency tests.
- Record the adjudicated gold rows exactly as the human gave them.
- Re-run the eval. Its result becomes the next cycle's baseline.
