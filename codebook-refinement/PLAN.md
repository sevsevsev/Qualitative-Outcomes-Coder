# Plan to fully refine the codebook (v1.1.1 → v2.0)

**Owner:** Severin (approves). **Drafting:** Claude agents, under STANDARDS.md.

**Cadence:** one phase per cycle. No phase starts until the previous one's human gate
is passed.

## Where we are after cycle 02

- **Citations are checked.** v1.1.1's are fully verified or located (cycle 01b). No
  invented sources were found.
- **Four things are drafted:**
  - a v2 structure: 18 domains, 108 subcategories
    (`v2/codebook-v2-draft.md`, `v2/STRUCTURE.md`);
  - a crosswalk from v1 codes to v2 codes;
  - 27 candidate sources for v2;
  - a 345-row gold set coded double-blind under **both** v1.1.1 and v2
    (`gold/gold-cycle02.csv`).
- **What the held-out test showed:**
  - v2 cuts "no good code" cases by about a third, and both-coders-high rose from
    41% to 57%.
  - v2 is **not yet more reliable** than v1: coder agreement is 88.9% vs. 91.1%.
  - rc1 fixes the specific boundary problems that caused this, but it hasn't been
    re-tested.
- **Nothing is adjudicated by a human yet.** The gold set is still all `proposed`.

## Phases

### Phase 1: Human adjudication and verification

Cycle 03, about 2–3 hours of Severin's time.

1. **Adjudicate the gold set.** Filter `gold/gold-cycle02.csv` on
   `review_priority=high` (111 rows):
   - accept, change, or retire the `v1_gold` and `v2_gold` codes;
   - set `status=adjudicated`, your name, and the date.

   The other 234 rows were coded the same way by both coders. Spot-check about 30 of
   them, then bulk-accept.
2. **Blind-verify the v2 sources.** Run `codebook-citation-verifier` over every
   `located` entry in `v2/v2-candidate-sources.json`, plus the four unsourced codes
   (Y8.4, A1.3, Y7.10, F1.7).
3. **Decisions needed from you:** D1–D6 in `cycles/cycle-02-2026-09-23.md`.

**Gate:** at least 150 adjudicated rows, including all 90 held-out rows; the v2
sources verified or explicitly marked as extensions; decisions recorded.

### Phase 2: Fresh held-out test of v2-rc1

Cycle 04.

1. A separate agent writes **150 new statements** without seeing v2. Require at least
   2 per v2 subcategory by asking for the thin codes by name. The thin-code list is
   in the cycle-02 report.
2. Double-blind code them under v1.1.1 and v2-rc1.
3. Compare agreement, kappa, forced-fit rate, and domain agreement.

**Gate for adopting v2:**

- agreement at least v1's (≥ 90%);
- forced-fit at least 30% lower than v1;
- no v2 domain with agreement below 80%.

If a domain fails, merge or clarify it and repeat this phase. Do not ship.

### Phase 3: Schema test

Cycle 04, in parallel with phase 2.

1. Change `codebooks/geminiSchema.ts`:
   - drop the domain enums and derive the domain from the code prefix;
   - add an `outcome_type` enum.

   Estimated footprint: about 151 enum values, against 142 today.
2. Run the adjudicated gold set live against Gemini (`scripts/codebook-eval.ts`),
   twice.
3. If the schema is rejected, switch to two-stage coding: domain first, then
   subcategory.

**Gate:** live runs succeed; the model matches the adjudicated gold at least as well
as the coder agents do.

### Phase 4: Build v2 in code

Cycle 05.

1. **New codebook file.** Create `codebooks/youthOutcomesV2.ts`, generated from the
   approved draft. Keep `original.ts` untouched.
2. **Crosswalk support:**
   - add `v1-to-v2-crosswalk.csv` to `services/reviewNormalization.ts` so old exports
     re-import (exports stamped below original 2.0.0 go through
     `renumbering/v1.2.0-to-v2.0.0.csv` first);
   - flag the 12 codes that split in two for re-review, rather than auto-mapping
     them.
3. **Tests.** Consistency tests, the registry test pointed at the v2 registry, the
   eval runner on v2 gold, and review-UI hints generated from the tie-breakers.
4. **Version.** Release as `v2.0.0`. It is MAJOR because codes are renumbered.

**Gate:** `npm test`, `typecheck:server`, and a live eval all pass. Severin approves
the PR.

### Phase 5: Run in parallel, then switch

Cycles 06–07.

1. For one real batch, code with both v1.1.1 and v2. Review disagreements in the
   review dashboard.
2. Track human override rate by code. Any code with more than 3 overrides becomes a
   confusion candidate (STANDARDS S3.3).
3. Make v2 the default. Keep v1.1.1 selectable for existing projects.

### Phase 6: Steady-state maintenance

Ongoing, quarterly.

- `/codebook-cycle` each quarter, or after every 500 human-reviewed rows.
- Standing inputs:
  - human overrides from the review dashboard;
  - low-confidence rows;
  - new program types from new clients.
- **Budget per cycle:** up to 5 new subcategories, and the enum footprint stays under
  the tested ceiling.
- **The held-out set is refreshed every cycle.** A test set that has been used to make
  changes can't test them.

## Principles carried through every phase

1. **Models propose; sources and humans decide.** No citation is used without a
   fetched excerpt. No gold row counts without your name on it.
2. **Measure on text the design never saw.** Design-set gains are always discounted.
3. **Fit and reliability are different things.** Report both. A codebook can fit
   better and still be applied less consistently, which is exactly what v2 showed.
4. **Make the smallest change that fits.** Only restructure when the evidence shows a
   boundary is broken. Phase 2 can still send individual domains back.
