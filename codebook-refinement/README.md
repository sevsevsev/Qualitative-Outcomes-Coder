# Codebook refinement

This folder is how `codebooks/original.ts` gets better over time without drifting.
The idea in one line: **models propose, sources and humans decide, and tests keep
both honest.**

## Files

| File | What it is | Who may change it |
|---|---|---|
| `STANDARDS.md` | The rules every change is checked against (R1–R4 as testable rules) | Human only |
| `sources/original.sources.json` | Citation registry. Every framework the codebook relies on, with its status, URL, and a verbatim excerpt | Orchestrator, and only from verifier verdicts |
| `CONFUSIONS.md` | Tie-breaker registry (CF-xxx), the single source of truth for confusable codes | Via CPs |
| `gold/original.gold.csv` | Gold statements with expected codes. Only `adjudicated` rows count as ground truth | Agents add `proposed` rows. Only a human sets `adjudicated` |
| `proposals/` | Change proposals (CP-NN-XX), one kind of change each | Change drafter |
| `cycles/` | One report per cycle: what was checked, verified, proposed, measured, and deferred | Orchestrator |
| `eval/` | JSON outputs from `scripts/codebook-eval.ts` | Judge |
| `registry.test.ts` | Mechanical guards (below) | Via CPs |
| `PLAN.md` | Phased plan from v1.1.1 to v2.0, with a human gate for each phase | Human approves |
| `v2/` | v2 draft codebook, structure rationale, crosswalk, candidate sources | Via CPs |
| `gold/gold-cycle02.csv` | 345-row double-blind gold set, coded under v1.1.1 and v2 | Agents propose; human adjudicates |
| `eval/cycle02/` | Raw coder outputs, coder instructions, statement sets (the audit trail for cycle 02) | Read-only record |

## The loop

```
          ┌──────────────── human adjudicates gold rows + approves CPs ◄───────────────┐
          ▼                                                                            │
  baseline eval ──► coverage auditor ──► confusion miner ──► citation verifier ──► change drafter ──► regression judge ──► cycle report
 (gold, 2 runs)     (breadth, R2)        (tie-breakers, R3)   (blind; R1)           (atomic CPs)       (gates; R4)          + decision list
```

Agent definitions are in `.claude/agents/`. The orchestrator is the `/codebook-cycle`
slash command (`.claude/commands/codebook-cycle.md`). Run it in Claude Code from the
repo root:

```
/codebook-cycle 02 focus: reviewed exports in exports/2026-10-reviewed.csv
```

For a one-off review with no agents, use `prompts/single-pass-refinement.md`.

## Why this resists hallucination and drift

| Risk | Control |
|---|---|
| A model makes up or misattributes a source | The verifier fetches the source itself, sees only the claim (not the reasoning), and must quote the source verbatim. The registry test rejects any `verified` entry that has no URL, date, or excerpt. |
| A plausible-but-wrong citation stays in the codebook | Registry status `misattributed` or `needs_replacement` must carry an `open_cp`, or the tests fail. |
| The model grades itself | The eval only scores `adjudicated` gold rows, and only a named human may adjudicate (enforced by the test). |
| A fix for one confusion quietly breaks another | The regression gate: previously-correct adjudicated rows may not flip unless the CP names them and explains why. |
| The model is inconsistent from run to run | Every eval runs twice and reports Cohen's kappa. Disagreements become confusion candidates. |
| The taxonomy sprawls | Smallest-fit ordering, at most 5 new codes per cycle, and the enum-budget ceiling (a real Gemini schema limit). |
| Settled questions get reopened | The Deferred block and the cycle backlog are binding. Reopening one needs new evidence. |
| Tie-breakers disagree with each other across prompt, hints, and docs | CONFUSIONS.md is authoritative, and the judge checks all three agree. Every CF needs at least 2 gold rows (tested). |

## Running the checks

```bash
npm test                                   # includes registry.test.ts and scripts/codebookEvalScoring.test.ts
GEMINI_API_KEY=... npx tsx scripts/codebook-eval.ts --out codebook-refinement/eval/baseline.json
GEMINI_API_KEY=... npx tsx scripts/codebook-eval.ts --include-proposed --out codebook-refinement/eval/preview.json   # non-gating preview
```

## Coverage

These are the program types the coverage matrix must cover (STANDARDS S2.1). They
are the 18 program types in `validation/synthetic-outcome-statements.csv`, plus:

- college access
- STEM/robotics
- youth employment/summer jobs
- financial capability
- violence prevention
- substance-use prevention
- foster care/transition-age youth
- runaway & homeless youth
- teen parents
- LGBTQ+ youth support
- camps/4-H/scouting

## Where to start

The gates only protect the codebook once enough gold rows are adjudicated.
Adjudicate the 60 proposed rows in `gold/original.gold.csv` first: accept, change,
or retire each one, and put your name and date on it. Until at least 20 are
adjudicated, every CP is `NEEDS-HUMAN` by design.
