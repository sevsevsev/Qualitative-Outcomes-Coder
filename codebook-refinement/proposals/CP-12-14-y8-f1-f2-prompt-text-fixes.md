# CP-12-14: Y8, F1, F2 prompt-text fixes (stale process note, CJCA title, Framework Basis names, "puberty")

| Field | Value |
|---|---|
| Type | CITATION_FIX (items 25, 26, 27). Item 28 is DEFINITION_SCOPE and can be split out (see "One kind of change"). |
| Codes touched | Y8.10 `useInstead` (and so its domain hint); Y8.13 `source`; `frameworkBasis` of domains Y8, F1, F2 (item 27, only under decision B3-1); Y8.4 `include` (item 28). Registry: `codebook_names` for the frameworks item 27 names, and one `nses-2020 → Y8.4` support (item 28). No definition text, exclude, example or rulesText changes. |
| Version bump | PATCH without item 28 (3.1.x). **MINOR with item 28** (a scope widening: 3.2.0 if applied on 3.1.x, or the next minor if PR #62's 3.2.0 merges first). Relative to the version current when applied. |
| Requirement served | R1 frameworks (25-27) · R2 breadth (28) |
| Status | draft (batch 3 research review, 2026-10-16); not applied |
| Reaches the coding prompt? | **Yes, every item.** `useInstead`, `source`, `frameworkBasis` and `include` are printed in `definitionsText`, and `useInstead` also becomes the review-UI domain hint. **Two-run design-set gate required** (S4.4, S4.5). |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none**, item by item. 25 deletes a process note and moves no construct. 26 corrects a title only (S1.4). 27 names in each domain's basis the frameworks its codes already cite in the registry, which is what S1.6 measures fidelity against; it widens no code. 28 adds "puberty", which the National Sex Education Standards' Puberty and Adolescent Sexual Development strand names (claim y8a-20, SUPPORTED), so the widening stays inside a source Y8.4 already cites. |

## Problem

Batch 3 recommendations, "Act now", B3-CP4, items 25 to 28.

- **25.** Y8.10's `useInstead` ends "Mirrors CP-01-07's tie-breaker (PR #31, in flight)." That is
  2.x process text, it reaches the coder, and it names a PR that is no longer in flight (R-22;
  all four reviewers).
- **26.** Y8.13's `source` reads "CJCA white paper on juvenile justice performance measures". The
  paper's title is "Defining and Measuring Recidivism", and the CP-10-01 verifier "could not confirm
  the phrase 'juvenile justice performance measures' in it" (S1.4; y8b-14 confirms the title).
- **27.** The fidelity reviewer reads S1.6 as measuring a code against its domain's anchor, so a
  source closes a fidelity gap only when its framework appears in `frameworkBasis` (decision B3-1).
  Codes already cite frameworks their basis omits: Y8.4 NSES, Y8.5 NYTD, Y8.10 Search Institute,
  Y8.12 CDC & ED bullying, F1.3 HP2030, F1.6 DEA, F1.7 IDEA, F2.3 McKinney-Vento. CP-12-07..09
  add more: HECAT, MTF, CDC youth violence, OJJDP, WIOA Title II, SNAP-Ed, CFPB, RHY.
- **28.** Puberty texts have no named home. The model already routes them to Y8.4 (practitioner
  review). The NSES strand Y8.4 cites covers puberty (y8a-20).

## One kind of change (S4.1)

Items 25 to 27 correct citation and process text. Item 28 widens scope. The recommendation keeps
them together so that one regression run prices all the prompt churn (the devil's advocate's
rule). The cost is a MINOR bump for the whole CP. If the judge or Severin wants S4.1 applied
strictly, item 28 moves to its own CP (ask the coordinator for an ID). Items 25 to 27 then ship as
a PATCH, and item 28 is gated alone.

## Why this is the smallest fit (S2.2), item 28

There is no gold row and no measured confusion (the devil's advocate DEFERs on that ground). An
example cannot carry a construct the definition text does not name. A hint would have to point to
a code whose text does not name puberty. Adding one include term is the smallest step that names
the construct. The definition ("sexual health") already reads broadly enough to hold it, so the
include is the only field that changes.

## Change

All code edits are in `codebooks/youthOutcomesV3.data.ts`. The domain hint for each code is
built as `Use instead: ${useInstead}` and is not edited by hand.

### 25. Y8.10 `useInstead`

Before:

```
Y3.1; Y8.8; Y4.12; Y8.12. Mirrors CP-01-07's tie-breaker (PR #31, in flight).
```

After:

```
Y3.1; Y8.8; Y4.12; Y8.12.
```

The same kind of note at data.ts line 528 (Y3.1, "Follows the safety tie-breaker being tested in
PR #31") belongs to the batch 1 owner. Lines 244 (Y1.12) and 779 (Y4) belong to the Y1/PR #66 and
Y4 owners. None is bundled here.

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
only where it is wrong). It backs Y8.13 from the registry (CP-12-07) and from the basis (item 27).

### 27. `frameworkBasis` (only if decision B3-1 is "yes")

Each list keeps the existing text and appends names. A name marked † is **not** in the
recommendation's parenthetical list for item 27. It is included because item 27's own rule ("the
frameworks codes already cite or will cite") covers it. Drop the † names if Severin reads the
list as exhaustive. A name marked ‡ depends on a registry row from CP-12-07, -08 or -09. If that
CP is rejected, drop the name with it.

**Y8.** Before:

```
CDC WSCC; Keyes, Dual Continua Model; CDC Youth Risk Behavior Survey; Healthy People 2030; SHAPE America national standards; NCTSN; CJCA (2009).
```

After:

```
CDC WSCC; Keyes, Dual Continua Model; CDC Youth Risk Behavior Survey; Healthy People 2030; SHAPE America national standards; NCTSN; CJCA (2009); CDC Health Education Curriculum Analysis Tool (HECAT, 2021); National Sex Education Standards (2020); Search Institute, 40 Developmental Assets (Safety); Monitoring the Future; CDC, About Youth Violence; OJJDP (2017), diversion; ACF NYTD; CDC & U.S. Department of Education (2014), Bullying Surveillance Among Youths.
```

‡ HECAT, Monitoring the Future, About Youth Violence, OJJDP (CP-12-07). † ACF NYTD (Y8.5 cites
it), CDC & ED bullying (Y8.12 cites it).

**F1.** Before:

```
CSSP Strengthening Families Protective Factors; Ascend 2Gen Approach; Epstein's six types of involvement; Mapp & Kuttner (2013) Dual Capacity-Building Framework; MIECHV (F1.3 only).
```

After:

```
CSSP Strengthening Families Protective Factors; Ascend 2Gen Approach; WIOA Title II, Adult Education and Family Literacy Act; Digital Equity Act; Epstein's six types of involvement; Mapp & Kuttner (2013) Dual Capacity-Building Framework; IDEA Parent Training and Information Centers; MIECHV, SNAP-Ed and Healthy People 2030 (F1.3 only).
```

‡ WIOA Title II, SNAP-Ed (CP-12-08).

**F2.** Before:

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD.
```

After:

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD; CFPB Financial Well-Being; Runaway and Homeless Youth Program, 45 CFR 1351; Healthy People 2030; USDA nutrition security (2022); McKinney-Vento Act, including the HEARTH Act.
```

‡ CFPB, RHY, USDA nutrition security (CP-12-09; the last only if V8 passes). † Healthy People
2030 (AHS-01, NWS-01, SDOH-04 back F2 codes after CP-12-09), USDA nutrition security, and
McKinney-Vento (F2.3 cites it today; HEARTH is CP-12-09's partial row). If later item 11 drops
McKinney-Vento from F2.3, keep "McKinney-Vento Act, including the HEARTH Act" only if the HEARTH
row stays.

Not added: CDC Children's Mental Health (y8b-01; later item 1, decision B3-4). Keyes (2006) is
title-only.

**Registry, item 27: `codebook_names`** (the CLAUDE.md rule that a name used in a citation line is
added to its source). These are set in `verification_2026_10_16_b3.py`:

| Source | Names added |
|---|---|
| cdc-hecat-2021 | "CDC Health Education Curriculum Analysis Tool" |
| nses-2020 | "National Sex Education Standards" |
| search-40-assets | none ("40 Developmental Assets" is already listed) |
| mtf-2026-vol1 | "Monitoring the Future" |
| cdc-youth-violence-2024 | "About Youth Violence" |
| ojjdp-2017-diversion-review | "OJJDP" |
| acf-nytd | "ACF NYTD" |
| cdc-ed-bullying-2014 | none ("Bullying Surveillance Among Youths" is already listed and is the wording used above) |
| wioa-title-ii-aefla | "Adult Education and Family Literacy Act" |
| digital-equity-act | "Digital Equity Act" |
| idea-671-pti | "IDEA Parent Training and Information Centers" |
| snap-ed-framework-mt1 | "SNAP-Ed" |
| cfpb-financial-well-being-2015 | "CFPB Financial Well-Being" |
| rhy-45cfr1351 | "45 CFR 1351" |
| usda-fncs-nutrition-security-2022 | "USDA nutrition security" |

Notes. The 3.x codebook has no name-matching test yet (`sync.test.ts` reads only `original`), so
these names are bookkeeping for later item 10. "Healthy People 2030" spans one entry per objective,
and no single entry can own the name. `wioa-20cfr677155` already owns "WIOA", which a
longest-name-first matcher would leave to "Adult Education and Family Literacy Act" here. If later
item 10 adds a 3.x matcher, it must handle a name that several entries share (Healthy People 2030).

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
not split between the two codes.

### Optional additions found while drafting (not included unless Severin agrees)

Both are prompt edits of the same kinds as items 25 and 26. They are not in the recommendation's
list, so they are offered rather than bundled.

- **26b. Y8.8 `source` title (S1.4).** Before: "NCTSN, 12 Core Concepts for Understanding
  Traumatic Stress Responses in Children and Families." After: "NCTSN (Layne, Strand & Task
  Force, 2012), 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood."
  Verifier y8b-04: the document's title is "12 Core Concepts for Understanding Traumatic Stress
  Responses in Childhood". CP-12-07 corrects the registry `cite_as`; the prompt line would still
  carry the old title.
- **20b. F1.7 `source` and registry, paired (CP-12-08 item 20).** Before: "IDEA, 20 U.S.C.
  1471(b); CSSP Strengthening Families, Concrete Support in Times of Need; Mapp & Kuttner (2013),
  Dual Capacity-Building Framework." After: "IDEA, 20 U.S.C. 1471(b); CSSP Strengthening Families,
  Concrete Support in Times of Need." Also add `REMOVE = {('mapp-kuttner-2013', 'F1.7')}`, and in
  F1.7's `basis` drop "Mapp & Kuttner (2013) (verified)". Two direct links remain. The devil's
  advocate would keep the row ("No coding effect").

### `rulesText`, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged. No FD is opened or changed.

## Sources

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| nses-2020 | verified | PD strand (item 28) | y8a-20 "Outlines the functional knowledge and essentials skills students need to understand pivotal milestones for every person" (verifier: the strand is named "Puberty and Adolescent Sexual Development (PD)") |
| cjca-2009 | verified (fit partial) | title (item 26) | y8b-14 PARTIAL "presents the results of the Group's efforts at developing standards for defining and measuring recidivism" (title, authors, date confirmed) |
| nctsn-core-curriculum | verified (fit partial) | title (26b, optional) | y8b-04 PARTIAL "Traumatic experiences can undermine children's sense of protection and safety" |
| Item 27 names | as registered by CP-12-07, -08, -09 and the existing registry | see those CPs | none new |

## Verification requests

None.

## Dependencies and order

- **After PR #66** (decision D). CP-12-14 does not touch Y1, but CP-11-01 edits Y1's
  `frameworkBasis` and source lines in the same file and the same gate pattern. Running the gate
  on a baseline that includes #66 keeps the comparison clean.
- **After CP-12-07, -08, -09** for the ‡ names in item 27, and after V8 for "USDA nutrition
  security".
- **PR #62** edits rules 2, 7, 10, 13, 15, 16 and F1.9, Y1.4, Y7.3, A2.4, A2.5, Y2.6. There is no
  overlap. If #62 merges first, the version is the next minor after 3.2.0.

## Decisions for Severin (this CP depends on)

- **B3-1.** Item 27 only if a new source closes a fidelity gap only when its framework is in
  `frameworkBasis` (recommended yes, F; alternatives: registry only, D; a per-category anchor line
  in research-basis.md, T). If "no", drop item 27, and CP-12-07..09 stay registry-only.
- **The † names** in item 27: include (the rule as written) or drop (the list as written).
- **Item 28 in or out**, and in this CP or split. The devil's advocate asks for a proposed gold
  row first; one is proposed below.
- **Optional 26b and 20b.**
- **D (timing):** after PR #66.

## Gold impact

- Rows expected to change code: **none**. Item 25 removes non-routing text; 26 and 27 change
  citation names only; 28 adds a term no adjudicated row uses.
- **Rows to watch in the gate** (the recommendation asks that every Y8/F1/F2 row be named in
  section 7 of the run report). Y8: S015, S018, S046, S061, S064, S065, S067, S068, S078, S094,
  S108, S144, S189, S191, S192, S207, S248, H013, H034, H038, H086, plus examples and rows S002,
  S038, S071, S114, S121, S134, S160, S187, S251, S255, H082, H085. F1: S022, S118, S164, S176,
  H062, H072, H078, S119, S126, S157, S173, S239, S245, H059, H066. F2: S006, S062, S139, S200,
  S225, H027, H049, H074, S106, S198, S210, H070. The most sensitive to item 28: S002, S251, S248
  (alternate Y8.4) and S108 (alternate Y4.12; Y8.3 must hold).
- **Proposed new gold rows** (`status=proposed`; for Severin; IDs assigned when added):
  "Middle school students will understand the physical and emotional changes of puberty."
  (suggested Y8.4) and "Fifth graders will learn how their bodies change during puberty."
  (suggested Y8.4).
- Held-out gold was not read or used.

## Test plan (required before `ready-to-test` can become `judged`)

On a branch with exactly this edit, against a baseline run of the version current at apply time:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-14/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-14/candidate-<version>-design.json --compare codebook-refinement/eval/cp-12-14/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-14/candidate-<version>-domain-only.json --compare <matching baseline>
```

Pass: no adjudicated design row flips, design accuracy does not fall, and any row whose primary
code differs between the two runs is reported as a confusion candidate (S4.5). If item 28 is
split out, gate it separately. Then `npm test`, `npm run typecheck` and `npm run typecheck:server`.

## Judge result

Filled in by `codebook-regression-judge`.
