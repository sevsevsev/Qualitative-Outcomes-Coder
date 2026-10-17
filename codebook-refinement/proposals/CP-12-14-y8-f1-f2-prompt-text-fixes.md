# CP-12-14: Y8 prompt-text fixes (CJCA title on Y8.13, "puberty" in Y8.4)

**In plain words.** This change edits two pieces of text the coding model does read. First, the source line of Justice Involvement, Diversion and Reentry (Y8.13) gives a wrong title for the juvenile-justice white paper it cites, and this corrects the title to "Defining and Measuring Recidivism". Second, it adds "puberty and adolescent sexual development" to the examples of Sexual and Reproductive Health (Y8.4), since the national sex education standards that code already cites include puberty, and statements about puberty have no named home today. Adding puberty widens what the code covers, so it raises the codebook's minor version (most likely to 3.3.0, after the two pending pull requests), and under your rule on new hints and widenings it waits until you have settled four proposed test rows about puberty. Because the coding model reads this text, it also waits for the two test runs that follow the two pending pull requests; the other prompt-text items first drafted here moved to other proposals.

| Field | Value |
|---|---|
| Type | CITATION_FIX (item 26) with one DEFINITION_SCOPE item (28). They stay together, as the batch recommendation asks, so one regression comparison prices the Y8 prompt churn; the whole CP is therefore MINOR. |
| Codes touched | Y8.13 `source` (item 26); Y8.4 `include` (item 28). Registry: one `nses-2020 → Y8.4` support (item 28). No definition text, exclude, useInstead, example, `frameworkBasis` or rulesText changes. |
| Version bump | **MINOR** (item 28 widens Y8.4's scope; S4.6). Relative to the version current when applied: this CP lands after PR #62 (3.2.0) and PR #66, so it is the next minor after them, **3.3.0** unless another MINOR lands first. Without item 28 it would be a PATCH. |
| Requirement served | R1 frameworks (26) · R2 breadth (28) |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Reaches the coding prompt? | **Yes, both items.** `source` and `include` are printed in `definitionsText`. Two-run design-set gate required (S4.4, S4.5), after PRs #62 and #66 (decision G10). Item 28 is also blocked on Severin's adjudication of four proposed rows (decision G11). |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none**, item by item. 26 corrects a title only (S1.4). 28 adds "puberty", which the National Sex Education Standards' Puberty and Adolescent Sexual Development strand names (claim y8a-20, SUPPORTED), so the widening stays inside a source Y8.4 already cites. |

## Decisions applied (2026-10-16)

| Decision | Effect on this CP |
|---|---|
| G2 | Item 27 of the batch-3 draft (naming HECAT, NSES, Search Institute, MTF, CDC About Youth Violence, OJJDP, ACF NYTD and the CDC/ED bullying definitions in Y8's `frameworkBasis`; WIOA Title II, DEA, IDEA PTIs, SNAP-Ed and Healthy People 2030 in F1's; CFPB, RHY, Healthy People 2030, USDA nutrition security and McKinney-Vento/HEARTH in F2's) **moves to CP-12-29**, which writes them as a "secondary" clause, with the matching `codebook_names`. The names and the † / ‡ notes stay in the batch-3 draft for CP-12-29's owner. |
| G10 | Both items reach the prompt, so they wait for the one two-run gate after PRs #62 and #66. |
| G11 | Item 28 is a widening. It ships only after Severin adjudicates two proposed design rows on each side of the new line (see Gold impact). |
| G7 | If CP-12-07's follow-up opens enough entries to take Y8 over a third (5/13 or more), S4.9 freezes Y8 until its anchor is re-reviewed, and this CP waits for that. |

Item 25 of the batch-3 draft (the stale "Mirrors CP-01-07's tie-breaker (PR #31, in flight)" in
Y8.10's `useInstead`) moves to **CP-12-26**, which removes all four stale in-flight notes in one
gated edit (`SUMMARY.md`). Optional item 20b (F1.7's Source line and the Mapp & Kuttner link)
belongs to CP-12-22 under decision A2-3; its part (b) rides this same gate.

## Problem

- **26.** Y8.13's `source` reads "CJCA white paper on juvenile justice performance measures". The
  paper's title is "Defining and Measuring Recidivism", and the CP-10-01 verifier "could not confirm
  the phrase 'juvenile justice performance measures' in it" (S1.4; y8b-14 confirms the title).
- **28.** Puberty texts have no named home. The model already routes them to Y8.4 (practitioner
  review). The NSES strand Y8.4 cites covers puberty (y8a-20).

## Why this is the smallest fit (S2.2), item 28

There is no gold row and no measured confusion (the devil's advocate deferred on that ground,
which decision G11's proposed rows answer). An example cannot carry a construct the definition
text does not name. A hint would have to point to a code whose text does not name puberty. Adding
one include term is the smallest step that names the construct. The definition ("sexual health")
already reads broadly enough to hold it, so the include is the only field that changes.

## What lands when

| Part | Reaches the prompt? | When |
|---|---|---|
| Item 28 registry row (`nses-2020 → Y8.4`, y8a-20) and Y8.4 `basis` sentence | no | with item 28 (it backs the new include term, so it does not land before it) |
| Item 26, Y8.13 `source` | yes | the one two-run gate after PRs #62 and #66 |
| Item 28, Y8.4 `include` | yes | the same gate, after Severin adjudicates the four proposed puberty rows (G11) |

Item 26 does not depend on the puberty rows. If they are not settled when the shared gate runs,
the coordinator moves item 26 into CP-12-26 (same gate, same kind of stale-text fix) rather than
hold it.

## Change

All code edits are in `codebooks/youthOutcomesV3.data.ts`.

### 26. Y8.13 `source`

Before:

```
Harris, Lockwood & Mengers (2009), CJCA white paper on juvenile justice performance measures.
```

After:

```
Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper.
```

OJJDP (2017) is not added to the source line (the devil's advocate's rule: edit a source line
only where it is wrong). It backs Y8.13 from the registry (CP-12-07) and, as a secondary
framework, from `frameworkBasis` (CP-12-29).

### 28. Y8.4 `include` (MINOR)

Before:

```
STI prevention knowledge; delaying pregnancy; accessing confidential services.
```

After:

```
STI prevention knowledge; delaying pregnancy; accessing confidential services; puberty and adolescent sexual development.
```

Registry (item 28 only), `verification_2026_10_16_b3.py`:

```python
EXTRA_SUPPORTS += [('nses-2020', 'Y8.4', 'Puberty and Adolescent Sexual Development (PD) strand', 'y8a-20')]
```

`basis` Y8.4, append: "Puberty: NSES (2020) Puberty and Adolescent Sexual Development strand
(verified, direct; claim y8a-20, CP-12-14)."

Rule 16 as amended by PR #62's CP-09-08 sends "healthy relationships" in a sexual-health context
to Y8.4. That agrees with this item. Y8.3 already excludes sexual-health knowledge, so puberty is
not split between the two codes. Hygiene habits stay Y8.1 even when a statement mentions growing
up; the proposed rows test that line.

### `frameworkBasis`, `useInstead`, `rulesText`, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged here. `frameworkBasis` names are CP-12-29; Y8.10's `useInstead` is CP-12-26. No FD is
opened or changed.

## Not bundled

- **Y8.8 `source` title (S1.4).** The Y8.8 source line reads "NCTSN, 12 Core Concepts for
  Understanding Traumatic Stress Responses in Children and Families"; the document's title is
  "12 Core Concepts for Understanding Traumatic Stress Responses in Childhood" (y8b-04 PARTIAL;
  CP-12-07 corrects the registry `cite_as`). It is the same kind of fix as item 26, but it is not in
  the act-now list, so it is offered to the shared gate's owner rather than added here.

## Sources

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| nses-2020 | verified | PD strand (item 28) | y8a-20 "Outlines the functional knowledge and essentials skills students need to understand pivotal milestones for every person" (verifier: the strand is named "Puberty and Adolescent Sexual Development (PD)") |
| cjca-2009 | verified (fit partial) | title (item 26) | y8b-14 PARTIAL "presents the results of the Group's efforts at developing standards for defining and measuring recidivism" (title, authors, date confirmed) |

## Verification requests

None.

## Dependencies and order

- **After PRs #62 and #66** (decision G10). PR #62 is 3.2.0, so this CP is the next minor after it.
- **After CP-12-07** (the corrected `cjca-2009` `cite_as` matches item 26's title).
- **After Severin adjudicates the proposed puberty rows** (G11), for item 28.
- **Y8 below S4.9's line** (G7): see CP-12-07's worst case.
- **PR #62** edits rules 2, 7, 10, 13, 15, 16 and F1.9, Y1.4, Y7.3, A2.4, A2.5, Y2.6. No overlap.

## Gold impact

- Rows expected to change code: **none**. Item 26 changes a citation title only; 28 adds a term
  no adjudicated row uses.
- **Rows to watch in the gate** (the recommendation asks that every Y8 row be named in section 7
  of the run report): S015, S018, S046, S061, S064, S065, S067, S068, S078, S094, S108, S144,
  S189, S191, S192, S207, S248, H013, H034, H038, H086, plus S002, S038, S071, S114, S121, S134,
  S160, S187, S251, S255, H082, H085. The most sensitive to item 28: S002, S251, S248 (alternate
  Y8.4) and S108 (alternate Y4.12; Y8.3 must hold).
- **Proposed new gold rows, required before item 28 ships (G11)** (`status=proposed`; for
  Severin; IDs assigned when added; agent suggestions only, never set to adjudicated by an agent):
  - Y8.4 side: "Middle school students will understand the physical and emotional changes of
    puberty." (suggested Y8.4); "Fifth graders will learn how their bodies change during
    puberty." (suggested Y8.4).
  - Other side: "Middle school students will adopt daily hygiene habits such as showering and
    using deodorant." (suggested Y8.1); "Students will describe how their sleep and nutrition
    needs change during adolescence." (suggested Y8.3).
- These four rows are not yet in the shared G11 file
  (`research-review/2026-10-16/full-review/proposed-design-rows.csv`); the coordinator adds them
  there, checked against the held-out set first, so Severin rules on all G11 rows in one place.
- Held-out gold was not read or used.

## Test plan (required before `ready-to-test` can become `judged`)

Item 26 rides the shared Source-line gate after PRs #62 and #66. Item 28 changes an include, so
it gets its own comparison on top of that gate's candidate, which keeps any flip attributable:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-14/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-14/candidate-<version>-design.json --compare codebook-refinement/eval/cp-12-14/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-14/candidate-<version>-domain-only.json --compare <matching baseline>
```

`baseline` is the shared gate's candidate; `candidate` adds item 28. Pass: no adjudicated design
row flips, design accuracy does not fall, and any row whose primary code differs between the two
runs is reported as a confusion candidate (S4.5). The adjudicated puberty rows are in the design
set by then and must code as Severin settled them. Then `npm test`, `npm run typecheck` and
`npm run typecheck:server`.

## Judge result

Filled in by `codebook-regression-judge`.
