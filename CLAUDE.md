# Qualitative Outcomes Coder: notes for Claude

A React + Vercel app that codes youth-program outcome statements against a codebook
using Gemini. See `README.md` for the app architecture and how to run it.

## The codebook work lives in `codebook-refinement/`

Read these before touching any codebook:

1. `codebook-refinement/STANDARDS.md`: binding rules. Never edit it without explicit
   instruction.
2. `codebook-refinement/PLAN.md`: the phased path from v1.1.1 to v2.0, and which
   phase we are in.
3. The newest `codebook-refinement/cycles/cycle-*.md`: latest results, open
   decisions, backlog.
4. `codebook-refinement/CONFUSIONS.md`: tie-breakers for v1.1.1.
   `codebook-refinement/DEVIATIONS.md`: every code that departs from its framework
   (STANDARDS S1.6). A CP that adds or changes a deviation logs it there.
5. `codebook-refinement/v2/`: the v2 draft (`codebook-v2-draft.md`), its rationale
   (`STRUCTURE.md`), the v1→v2 crosswalk, and candidate sources.

**Current state (as of 2026-09-24):**

- Cycle 04 (academic subjects) is done. PLAN.md **phase 1** (human adjudication +
  source verification) is still open.
- `codebooks/original.ts` is v2.0.0: v1.2.0's subject split, renumbered so Academic
  Learning & Achievement is Domain 1 (CP-04-08). Older files may use the old numbers;
  see `codebook-refinement/renumbering/`.
- The v2 draft is not in code yet (phase 4).
- A public explorer-only site is built from this repo with `VITE_SITE=explorer` (README,
  "Public codebook explorer site"). Its visitor feedback lands in
  `codebook-refinement/feedback/` as leads for a cycle, never as evidence or edits.

## Hard rules

- **Never set a gold row to `status=adjudicated`.** Never change an adjudicated row's
  code, and never add a name to `HUMAN_ADJUDICATORS` in `registry.test.ts`. Only
  Severin adjudicates.
- **A citation needs evidence.** No citation enters a codebook, a registry entry, or a
  change proposal unless a verifier fetched the source and recorded a verbatim
  excerpt of 40 words or fewer. Remembered knowledge is a lead, never evidence.
- **Keep checks independent.** The agent that proposes a citation never verifies it.
  Blind coders never see expected codes or each other's output.
- **Every codebook change goes through a CP** (`codebook-refinement/proposals/`),
  gets a version bump, and passes the gates in STANDARDS S4.
- **Score only on adjudicated gold.** When reporting improvements, separate design-set
  numbers from held-out numbers. A held-out set that was used to make fixes is no
  longer held out.
- **Mind the Gemini enum budget.** The schema has a size limit (see
  `codebooks/geminiSchema.ts` and its tests). Check the footprint before adding codes.

## Agents and commands (`.claude/`)

- `/codebook-cycle`: orchestrates a refinement cycle and stops at the human gate.
- `codebook-coverage-auditor`, `codebook-confusion-miner`,
  `codebook-citation-verifier`, `codebook-change-drafter`,
  `codebook-regression-judge`: see the frontmatter of each.
- `codebook-blind-coder-a` (Opus) and `codebook-blind-coder-b` (Sonnet): independent
  coders for building gold sets and held-out tests. Protocol:
  `codebook-refinement/prompts/blind-coder-protocol.md`.
  - Give each one only a codebook file, a statements file (no expected codes), and an
    output path.
  - Put inputs in a scratch directory outside `codebook-refinement/gold/`.
  - Compare their outputs yourself. Agreement is not accuracy; human adjudication is.

## Checks

- `npm test`: includes `codebook-refinement/registry.test.ts`,
  `codebook-refinement/sync.test.ts` and the eval-scoring tests. CI runs it, both
  typechecks and lint on every PR.
- When a codebook citation line names a framework, add that name to the source's
  `codebook_names` in the registry. Never add a pair to `PAIRS_WITHOUT_CF` in
  `sync.test.ts`; write the CF entry instead.
- `npm run typecheck` and `npm run typecheck:server`: run both after touching `api/`
  or `codebooks/`.
- Live eval (needs `GEMINI_API_KEY`):
  `npx tsx scripts/codebook-eval.ts --runs 2 --out codebook-refinement/eval/<name>.json`
  - Add `--include-proposed` for a non-gating preview.
  - Add `--compare <baseline.json>` for the regression gate.
