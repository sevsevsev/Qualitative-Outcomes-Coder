# CP-12-15: Two Y8/F1/F2 coding hints (whose insurance; whose eating), each with a 3.x CF entry

| Field | Value |
|---|---|
| Type | HINT |
| Codes touched | Hint 29: F2.1 and Y8.5 `useInstead`. Hint 30: Y8.1, F1.3 and F2.2 `useInstead`; F1.3 `exclude`. Domain hints follow from `useInstead` automatically. `CONFUSIONS.md`: two new 3.x entries in a new section. Consistency tests: scope the 2.x CF checks and add a 3.x CF check. No definition, include, example, source, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.x, or 3.2.x / 3.3.x depending on PR #62 and CP-12-14) |
| Requirement served | R3 tie-breakers |
| Status | draft (batch 3 research review, 2026-10-16); not applied. **Blocked:** each hint has a side with fewer than two adjudicated gold rows (S3.1), so both hints are held until the proposed rows below are adjudicated. |
| Reaches the coding prompt? | **Yes.** `useInstead` and `exclude` are printed in `definitionsText`. **Two-run design-set gate required.** |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none**, for each hint. Hint 29 routes by whose coverage changes. A young person's own coverage stays in Y8.5 (Healthy People 2030 AHS-01, NYTD access to health insurance; both direct for Y8.5). A household's benefits enrollment stays in F2.1 (AHS-01 partial, Ascend Economic Assets, after CP-12-09). Hint 30 routes by whose eating changes. Each side stays inside a framework that already names it: HECAT FN HBO 3 and 10 for a young person's own eating (Y8.1, CP-12-07); SNAP-Ed MT1 "individual and family healthy eating behaviors" for household practice (F1.3, CP-12-08); HFSSM and NWS-01 (and the 2022 nutrition-security definition, if V8 passes) for having or getting food (F2.2). No construct crosses a framework's boundary. |

## Problem

Batch 3 recommendations, "Act now", B3-CP5, items 29 and 30.

- **29. Insurance: F2.1 vs Y8.5.** F2.1 includes "SNAP/TANF/Medicaid enrollment"; Y8.5 includes
  "Enrolling in insurance". Adjudicated S139 ("Families will connect with case management and
  access public benefits (SNAP, TANF, Medicaid).") is F2.1, and S191 ("Youth in extended foster
  care will enroll in health insurance through Medicaid until age 26.") is Y8.5 with alternate
  F2.1. Real use has "health insurance enrollment among eligible District families" (practitioner
  review). Neither code's `useInstead` points to the other.
- **30. Nutrition by whose behavior changes.** Y8.1 (a young person's eating), F1.3 (family eating
  habits) and F2.2 (access to food) all touch food. Y8.1's useInstead points to F2.2 but not F1.3,
  and F1.3's does not point to Y8.1. H072 ("Families increased their weekly consumption of fresh
  fruits and vegetables." → F1.3, alternate F2.2) and S062 (→ F2.2, "increased access to healthy
  food") sit on the line (R-05).

The recommendation says "Write each as a 3.x CF entry first; hold a hint whose side lacks two gold
rows". `CONFUSIONS.md` holds only 2.x entries today. CP-11-03 left its Y1 hints without CF
entries for the same reason. This CP therefore also proposes where 3.x entries live.

### Gold rows per side (design file only)

| Hint | Side | Adjudicated design rows | Enough (≥2)? |
|---|---|---|---|
| 29 | F2.1, family benefits incl. Medicaid | S139 | **no** |
| 29 | Y8.5, a young person's own coverage | S191 | **no** |
| 30 | Y8.1, a young person's own eating | S121 ("Students will increase daily consumption of fruits and vegetables."), S187, H085 | yes |
| 30 | F1.3, household eating practice | H072 | **no** |
| 30 | F2.2, having or getting food | S062, S210, H070 | yes |

The recommendation says "a Y8.1 nutrition row needed". S121, S187 and H085 already serve; the
row actually missing is a second **F1.3** row. Hint 29 needs a second row on both sides.

## Why this is the smallest fit (S2.2)

Not required for HINT. Both definitions already draw the line: Y8.5 is "getting and using health
care: insurance", F2.1 is "household ... public benefits"; Y8.1 is the young person's "everyday
health behaviors", F1.3 is "caregiver or household health practices". The hints make the line
visible where the coder reads "Use instead". No definition widens or narrows.

## Change

### Hint 29 (`codebooks/youthOutcomesV3.data.ts`)

**F2.1 `useInstead`.** Before:

```
Y7.6; F1.6.
```

After:

```
Y7.6; F1.6; Y8.5 a young person's own health insurance or coverage.
```

**Y8.5 `useInstead`.** Before:

```
Y8.9; F1.3.
```

After:

```
Y8.9; F1.3; F2.1 a family's or household's enrollment in public benefits, including Medicaid named among other benefits.
```

S191 stays Y8.5 (a young person's own coverage), and S139 stays F2.1 (Medicaid listed with SNAP
and TANF for families).

**Open sub-decision, not settled by this CP.** "Parents will enroll their uninsured children in
Medicaid or CHIP" changes the child's coverage, but its subject is the parent. Rule 1 says "the
sentence's subject decides", and Y8.5's exclude already sends "parents keeping infants'
well-child visits" to F1.3. So three codes are defensible (Y8.5, F2.1, F1.3). The hint does not
settle it; the boundary row proposed below asks Severin to.

### Hint 30 (`codebooks/youthOutcomesV3.data.ts`)

**Y8.1 `useInstead`.** Before:

```
Y8.2; Y8.5; Y8.3; F2.2.
```

After:

```
Y8.2; Y8.5; Y8.3; F1.3 a household's or family's eating practices; F2.2 having or getting enough or healthy food.
```

**F1.3 `exclude`.** Before:

```
Household food access; the youth's own health care.
```

After:

```
Household food access; the youth's own health care; the young person's own eating habits.
```

**F1.3 `useInstead`.** Before:

```
F2.2; Y8.5.
```

After:

```
F2.2 having or getting enough or healthy food; Y8.5; Y8.1 a young person's own eating or nutrition habits.
```

**F2.2 `useInstead`.** Before:

```
F1.3; A2.5.
```

After:

```
F1.3 a household's eating practices; Y8.1 a young person's own eating; A2.5.
```

Wording choices. The trigger is whose eating changes, not the food words. S121 (students eat more
fruit and vegetables) stays Y8.1, and H072 (families eat more) stays F1.3. "Having or getting
enough or healthy food" keeps S062 ("access to healthy food") in F2.2, so the hint does not
narrow F2.2 (all four reviewers rejected narrowing). It also does not depend on CP-12-09's V8
outcome: S062 stays F2.2 either way, and only its FD status changes. S187 (a young person's
nutrition knowledge and cooking) stays Y8.1. H048 and S224 (cooking as an independent living
skill) stay Y7.7; the hint does not mention cooking.

### `rulesText`

Checked, no change. Rule 1 ("A young person's own housing, food or income is F2") sends a young
person's own *food access* to F2.2. That agrees with hint 30: "having or getting food" is F2.2
for anyone, and only *eating behavior* goes to Y8.1. Rule 11 is about money, not coverage, and
agrees with hint 29. Rule 6 is not affected.

### `CONFUSIONS.md`: a 3.x section and two entries

**Where.** A new section at the end of the file, after CF-028:

```markdown
---

## Codebook 3.x tie-breakers

Entries for codebook 3.x (`codebooks/youthOutcomesV3.data.ts`) use `CF-P##` ids and 3.x code ids. Gold IDs point to `gold/youth_outcomes_v3.gold.csv` (design set; never held-out rows). The 2.x entries above keep their numbers. For 3.x, the text of `useInstead` and rulesText must say the same thing as these entries (S3.2).
```

```markdown
### CF-P01: Whose health coverage? · proposed (CP-12-15)

**Codes:** **Y8.5** · F2.1

**Rule:**

- A young person's own health insurance or coverage (enrolling, keeping coverage) → **Y8.5**, even through Medicaid.
- A family's or household's enrollment in public benefits, including Medicaid named among other benefits → **F2.1**.
- Open: a caregiver enrolling a child in coverage (see the proposed boundary row).

**Rationale:** Healthy People 2030 AHS-01 and ACF NYTD "access to health insurance" (both direct for Y8.5) measure a person's coverage. F2.1's anchor, Ascend Economic Assets, and AHS-01 (partial for F2.1) frame benefits as household economic stability. Rule 1 (who changes) decides.

**Gold:** S191 (Y8.5), S139 (F2.1); proposed rows below. Held until two adjudicated rows per side.
```

```markdown
### CF-P02: Whose eating? · proposed (CP-12-15)

**Codes:** **Y8.1** · F1.3 · F2.2

**Rule:**

- A young person's own eating or nutrition habits → **Y8.1**.
- A household's or family's eating practices → **F1.3**.
- Having or getting enough or healthy food (food security, access) → **F2.2**, for a household or a young person living independently.

**Rationale:** CDC HECAT (2021) Food and Nutrition HBO 3 and 10 are youth behaviors (Y8.1). SNAP-Ed MT1 covers "individual and family healthy eating behaviors" (F1.3; family side). The USDA Household Food Security Survey Module and Healthy People 2030 NWS-01 measure having enough food (F2.2). The line is skill or behavior against status.

**Gold:** S121, S187, H085 (Y8.1); H072 (F1.3); S062, S210, H070 (F2.2); one proposed F1.3 row below. Held until F1.3 has two adjudicated rows.
```

The cross-reference "rule 1" is to the 3.x rulesText.

### Consistency tests (with this CP's branch)

The existing CF tests read the whole file as 2.x:

- `registry.test.ts` "gives every confusion entry at least two gold examples" matches only
  `^### (CF-\d{3})`. `CF-P01` is skipped, so 3.x entries go unchecked.
- `sync.test.ts` splits `CONFUSIONS.md` on `### ` and reads code numbers with a 2.x regex, so
  "F2.1" is read as 2.x "2.1", "Y8.5" as "8.5", and "F1.3" as "1.3". The drafter checked: those
  2.x titles (2.1 Joy & Emotional Wellness, 8.5 Substance Use Prevention & Reduction, 1.3
  Knowledge & Skill in Other Academic Subjects, 8.1 Physical Activity & Nutrition, 2.2 Triggered
  Situational Interest) are not in `PAIRS_WITHOUT_CF`, and all are live 2.x codes, so the tests
  would pass. But they would pass for a wrong reason, and a later 3.x entry could break them.

Proposed edits:

1. `sync.test.ts` and `registry.test.ts`: read only the part of `CONFUSIONS.md` before
   `## Codebook 3.x tie-breakers`.
2. `codebooks/youthOutcomesV3.test.ts`, new `describe('3.x confusion entries (S3.1)')`. For each
   `### CF-P\d{2}` block: every code on its **Codes:** line is a live 3.x code. Every gold ID
   on its **Gold:** line is in `youth_outcomes_v3.gold.csv` with `status=adjudicated`, and its
   `v3_gold` code is one of the entry's codes. Each listed code has at least two such rows, unless
   the status says `proposed` (this lets the held entries sit in the file while marked proposed;
   the hint text does not ship until they pass). No held-out file ID (from
   `youth_outcomes_v3.heldout.gold.csv`) appears.

Severin may prefer a separate file (`CONFUSIONS-v3.md`) over a section. That choice is
listed below; the tests change the same way.

## Sources

No new citations. The rationale lines rely on registry rows added by CP-12-07 (cdc-hecat-2021:
y8a-04, y8a-05), CP-12-08 (snap-ed-framework-mt1: f1-11) and CP-12-09 (hp2030-nws01: f2-05;
hp2030-ah01-ahs01 → F2.1: f2-03 PARTIAL), and on existing rows (hp2030-ah01-ahs01 → Y8.5,
acf-nytd → Y8.5, usda-hfssm → F2.2, ascend-2gen → F2.1).

## Verification requests

None.

## Dependencies and order

- **After CP-12-07, -08 and -09** (the CF rationales cite their rows). It does not need CP-12-14,
  but if both are gated in the same cycle, gate CP-12-15 on a baseline that includes CP-12-14.
- **After the proposed rows are adjudicated** (S3.1). Recommendation decision D: "B3-CP5 after
  its CF entry".
- PR #62 and PR #66: no overlap (no Y1 code, no F1.9, none of rules 2, 7, 10, 13, 15, 16).

## Decisions for Severin (this CP depends on)

- **D (timing):** after the CF entries, which wait on gold.
- **Adjudicate the proposed rows below**, including the caregiver-enrolls-child boundary row
  (hint 29's open sub-decision).
- **Where 3.x CF entries live:** a section in `CONFUSIONS.md` (drafted) or a separate file. The
  `CF-P##` ids are provisional; other batches' CPs may open 3.x CFs too, so renumber at merge.
- **B3-5** (F1.6 vs F2.1 money line) is a separate 3.x CF and is not drafted here.

## Gold impact

- **Rows expected to change code: none.** Both hints were worded so that no adjudicated design
  row moves.
- **Rows to watch in the gate:** S139, S106 (F2.1); S191, S064, S094 (Y8.5); S121, S187, H085,
  S207, H013 (Y8.1); H072, H066 (F1.3); S062, S210, H070, H071 (F2.2 / A2.5); H048, S224 (Y7.7,
  cooking). A flip on any of them fails the CP unless it is named here and argued as a
  correction (S4.4).
- **Proposed new gold rows** (`status=proposed`; for Severin; IDs assigned when added; agent
  suggestions only):
  - "Uninsured high school students will be enrolled in health insurance coverage." (suggested Y8.5)
  - "Caregivers will enroll in Medicaid or other health coverage they qualify for." (suggested F2.1)
  - "Parents will enroll their uninsured children in Medicaid or CHIP." (boundary row: Y8.5, F2.1 or F1.3, for Severin)
  - "Parents will serve fruits and vegetables at family meals at least five days a week." (suggested F1.3)
  - "Households will reduce the sugary drinks they keep and serve at home." (suggested F1.3)
- Held-out gold was not read or used, and none may be used to tune these hints.

## Test plan (required before `ready-to-test` can become `judged`)

Two-run design-set gate, as in CP-12-14 (paths under `codebook-refinement/eval/cp-12-15/`),
including the domain-only set. Pass: no adjudicated design row flips, accuracy does not fall, and
unstable rows are reported. Then `npm test` (with the test edits above), `npm run typecheck` and
`npm run typecheck:server`.

## Judge result

Filled in by `codebook-regression-judge`.
