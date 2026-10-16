# CP-12-15: Two Y8/F1/F2 coding hints (whose insurance; whose eating), each with a 3.x CF entry

**In plain words.** This change adds two "use instead" pointers that help the coding model tell close health and family codes apart. The first is about health insurance: a young person's own coverage goes to Health Care Access and Condition Management (Y8.5), and a family's enrollment in public benefits, including Medicaid listed among other benefits, goes to Income, Benefits and Financial Stability (F2.1). The second is about food: a young person's own eating goes to Healthy Daily Habits (Y8.1), a household's eating practices go to Family Health Practices (F1.3), and having or getting enough or healthy food goes to Food Security (F2.2). The two written tie-breaker rules can go into the confusions file now, because the coding model never reads that file; the pointers themselves are read by the model, so they wait until you have settled two proposed test rows on each side of each line (including one row where a parent enrolls a child in Medicaid) and until a pair of test runs shows no settled row changes.

| Field | Value |
|---|---|
| Type | HINT |
| Codes touched | Hint 29: F2.1 and Y8.5 `useInstead`. Hint 30: Y8.1, F1.3 and F2.2 `useInstead`; F1.3 `exclude`. Domain hints follow from `useInstead` automatically. `CONFUSIONS.md`: two new 3.x entries in a new section. Consistency tests: scope the 2.x CF checks and add a 3.x CF check. No definition, include, example, source, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, relative to the version current when the hint text is applied (after CP-12-14's MINOR, so 3.3.x if nothing else intervenes). The `CONFUSIONS.md` and test part bumps nothing on its own: it is documentation and tests, not codebook data. |
| Requirement served | R3 tie-breakers |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Reaches the coding prompt? | **Mixed.** The `useInstead` and `exclude` edits are printed in `definitionsText` and need their own two-run design-set gate. The `CONFUSIONS.md` entries and the test edits do not reach the prompt. See "What lands when". |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none**, for each hint. Hint 29 routes by whose coverage changes. A young person's own coverage stays in Y8.5 (Healthy People 2030 AHS-01, NYTD access to health insurance; both direct for Y8.5). A household's benefits enrollment stays in F2.1 (AHS-01 partial, a broader category that names any coverage; Ascend Economic Assets). Hint 30 routes by whose eating changes. Each side stays inside a framework that already names it: HECAT FN HBO 3 and 10 for a young person's own eating (Y8.1, CP-12-07); SNAP-Ed MT1 "individual and family healthy eating behaviors" for household practice (F1.3, CP-12-08); HFSSM and NWS-01 for having or getting food (F2.2, CP-12-09), joined by the 2022 nutrition-security definition once V8 confirms it. No construct crosses a framework's boundary. |

## Decisions applied (2026-10-16)

| Decision | Effect on this CP |
|---|---|
| G11 | Neither hint ships until Severin adjudicates two proposed design rows on each side of each line (the list under Gold impact; the "Y8.1 nutrition" item G11 names is rows P-37 to P-40 of the shared proposed-rows file). The hint text stays blocked until then. |
| G10 | The no-prompt part (CF entries, tests) lands now; the `useInstead`/`exclude` text waits for its own gate, after the shared gate that follows PRs #62 and #66. |
| F1-1 | H027 is confirmed, and the F1.6/F2.1 money tie-breaker is **CP-12-31** (drafted by another agent). This CP does not draft it. Both CPs write into the same 3.x section of `CONFUSIONS.md`; whichever lands first creates the section. |
| G7 | If CP-12-07's follow-up takes Y8 over a third, S4.9 freezes Y8 until its anchor is re-reviewed, and the Y8.1 and Y8.5 hint text waits for that. |

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
rows". `CONFUSIONS.md` holds only 2.x entries today, so this CP also sets where 3.x entries live:
a section at the end of `CONFUSIONS.md`.

### Gold rows per side (design file only)

S3.1 asks each CF entry for at least two gold examples, one for each side. Every side below has at
least one adjudicated row, so both CF entries meet S3.1 now. Decision G11 adds a stricter bar for
the hint text: two proposed rows per side, adjudicated by Severin.

| Hint | Side | Adjudicated design rows (S3.1) | G11 proposed rows |
|---|---|---|---|
| 29 | F2.1, family benefits incl. Medicaid | S139 | 2, plus the boundary row |
| 29 | Y8.5, a young person's own coverage | S191 | 2, plus the boundary row |
| 30 | Y8.1, a young person's own eating | S121, S187, H085 | 2 |
| 30 | F1.3, household eating practice | H072 | 2 |
| 30 | F2.2, having or getting food | S062, S210, H070 | 2 |

## Why this is the smallest fit (S2.2)

Not required for HINT. Both definitions already draw the line: Y8.5 is "getting and using health
care: insurance", F2.1 is "household ... public benefits"; Y8.1 is the young person's "everyday
health behaviors", F1.3 is "caregiver or household health practices". The hints make the line
visible where the coder reads "Use instead". No definition widens or narrows.

## What lands when

| Part | Reaches the prompt? | When |
|---|---|---|
| `CONFUSIONS.md`: the "Codebook 3.x tie-breakers" section, CF-P01 and CF-P02 | no | now (after CP-12-07, -08 and -09, whose rows the rationales cite) |
| Test edits (`sync.test.ts`, `registry.test.ts`, `youthOutcomesV3.test.ts`) | no | now, same commit as the CF entries |
| Hint 29 text (F2.1, Y8.5 `useInstead`) | yes | after Severin adjudicates the hint-29 proposed rows, including the boundary row (G11), then its own two-run gate |
| Hint 30 text (Y8.1, F1.3, F2.2 `useInstead`; F1.3 `exclude`) | yes | after Severin adjudicates the hint-30 proposed rows (G11), then its own two-run gate |

## Change

### Hint 29 (`codebooks/youthOutcomesV3.data.ts`; blocked on G11 rows)

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

**Caregiver enrolling a child.** "Parents will enroll their uninsured children in Medicaid or
CHIP" changes the child's coverage, but its subject is the parent. Rule 1 says "the sentence's
subject decides", and Y8.5's exclude already sends "parents keeping infants' well-child visits"
to F1.3. Three codes are defensible (Y8.5, F2.1, F1.3). This is a gold question, not a decision
the drafter can settle: the boundary row below goes to Severin, and the hint 29 wording above
ships only after it is adjudicated. If his answer is not Y8.5 or F2.1 as worded, the hint text is
revised to match before the gate (S3.2).

### Hint 30 (`codebooks/youthOutcomesV3.data.ts`; blocked on G11 rows)

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
narrow F2.2 (all four reviewers rejected narrowing). It does not depend on CP-12-09's V8 outcome:
S062 stays F2.2 either way, and only its FD status changes. S187 (a young person's nutrition
knowledge and cooking) stays Y8.1. H048 and S224 (cooking as an independent living skill) stay
Y7.7; the hint does not mention cooking.

### `rulesText`

Checked, no change. Rule 1 ("A young person's own housing, food or income is F2") sends a young
person's own *food access* to F2.2. That agrees with hint 30: "having or getting food" is F2.2
for anyone, and only *eating behavior* goes to Y8.1. Rule 11 is about money, not coverage, and
agrees with hint 29. Rule 6 is not affected.

### `CONFUSIONS.md`: a 3.x section and two entries (land now)

**Where.** A new section at the end of the file, after CF-028 (created by this CP or by CP-12-31,
whichever lands first):

```markdown
---

## Codebook 3.x tie-breakers

Entries for codebook 3.x (`codebooks/youthOutcomesV3.data.ts`) use `CF-P##` ids and 3.x code ids. Gold IDs point to `gold/youth_outcomes_v3.gold.csv` (design set; never held-out rows). The 2.x entries above keep their numbers. For 3.x, the text of `useInstead` and rulesText must say the same thing as these entries (S3.2). An entry marked "hint held" is in force for reviewers; its prompt text ships with the CP named.
```

```markdown
### CF-P01: Whose health coverage? · hint held (CP-12-15, decision G11)

**Codes:** **Y8.5** · F2.1

**Rule:**

- A young person's own health insurance or coverage (enrolling, keeping coverage) → **Y8.5**, even through Medicaid.
- A family's or household's enrollment in public benefits, including Medicaid named among other benefits → **F2.1**.
- A caregiver enrolling a child in coverage: settled by Severin's adjudication of the proposed boundary row (CP-12-15); until then, code by rule 1 and flag for review.

**Rationale:** Healthy People 2030 AHS-01 and ACF NYTD "access to health insurance" (both direct for Y8.5) measure a person's coverage. F2.1's anchor, Ascend Economic Assets, and AHS-01 (partial for F2.1) frame benefits as household economic stability. Rule 1 (who changes) decides.

**Gold:** S191 (Y8.5), S139 (F2.1).
```

```markdown
### CF-P02: Whose eating? · hint held (CP-12-15, decision G11)

**Codes:** **Y8.1** · F1.3 · F2.2

**Rule:**

- A young person's own eating or nutrition habits → **Y8.1**.
- A household's or family's eating practices → **F1.3**.
- Having or getting enough or healthy food (food security, access) → **F2.2**, for a household or a young person living independently.

**Rationale:** CDC HECAT (2021) Food and Nutrition HBO 3 and 10 are youth behaviors (Y8.1). SNAP-Ed MT1 covers "individual and family healthy eating behaviors" (F1.3; family side). The USDA Household Food Security Survey Module and Healthy People 2030 NWS-01 measure having enough food (F2.2). The line is skill or behavior against status.

**Gold:** S121, S187, H085 (Y8.1); H072 (F1.3); S062, S210, H070 (F2.2).
```

The cross-reference "rule 1" is to the 3.x rulesText. The `CF-P##` ids are provisional; CP-12-31
and other batches may open 3.x CFs too, so they are renumbered at merge. When the hint text ships,
the status suffix changes from "hint held" to the version that carries it.

### Consistency tests (land now, with the CF entries)

The existing CF tests read the whole file as 2.x:

- `registry.test.ts` "gives every confusion entry at least two gold examples" matches only
  `^### (CF-\d{3})`. `CF-P01` is skipped, so 3.x entries go unchecked.
- `sync.test.ts` splits `CONFUSIONS.md` on `### ` and reads code numbers with a 2.x regex, so
  "F2.1" is read as 2.x "2.1", "Y8.5" as "8.5", and "F1.3" as "1.3". Those 2.x titles are not in
  `PAIRS_WITHOUT_CF`, and all are live 2.x codes, so the tests would pass, but for a wrong reason,
  and a later 3.x entry could break them.

Edits:

1. `sync.test.ts` and `registry.test.ts`: read only the part of `CONFUSIONS.md` before
   `## Codebook 3.x tie-breakers`.
2. `codebooks/youthOutcomesV3.test.ts`, new `describe('3.x confusion entries (S3.1)')`. For each
   `### CF-P\d{2}` block: every code on its **Codes:** line is a live 3.x code. Every gold ID
   on its **Gold:** line is in `youth_outcomes_v3.gold.csv` with `status=adjudicated`, and its
   `v3_gold` code is one of the entry's codes. Each listed code has at least one such row (S3.1:
   at least two examples, one per side). No ID from `youth_outcomes_v3.heldout.gold.csv` appears.

The tests do not check the G11 bar; that is a shipping condition for the hint text, checked by
the judge.

## Sources

No new citations. The rationale lines rely on registry rows added by CP-12-07 (cdc-hecat-2021:
y8a-04, y8a-05), CP-12-08 (snap-ed-framework-mt1: f1-11) and CP-12-09 (hp2030-nws01: f2-05;
hp2030-ah01-ahs01 → F2.1: f2-03 PARTIAL), and on existing rows (hp2030-ah01-ahs01 → Y8.5,
acf-nytd → Y8.5, usda-hfssm → F2.2, ascend-2gen → F2.1).

## Verification requests

None.

## Dependencies and order

- **After CP-12-07, -08 and -09** (the CF rationales cite their rows).
- **Hint text after the G11 rows are adjudicated**, and after the shared Source-line gate and
  CP-12-14, so its own gate runs on a baseline that includes them.
- **Shares the 3.x CF section with CP-12-31** (decision F1-1).
- PR #62 and PR #66: no overlap (no Y1 code, no F1.9, none of rules 2, 7, 10, 13, 15, 16).

## Gold impact

- **Rows expected to change code: none.** Both hints were worded so that no adjudicated design
  row moves.
- **Rows to watch in the gate:** S139, S106 (F2.1); S191, S064, S094 (Y8.5); S121, S187, H085,
  S207, H013 (Y8.1); H072, H066 (F1.3); S062, S210, H070, H071 (F2.2 / A2.5); H048, S224 (Y7.7,
  cooking). A flip on any of them fails the CP unless it is named here and argued as a
  correction (S4.4).
- **Proposed new gold rows, required before the hint text ships (G11)** (`status=proposed`; for
  Severin; IDs assigned when added; agent suggestions only, never set to adjudicated by an agent):
  - Hint 29, Y8.5 side: "Uninsured high school students will be enrolled in health insurance
    coverage." (suggested Y8.5); "Teens in the program will keep continuous health insurance
    coverage throughout the year." (suggested Y8.5).
  - Hint 29, F2.1 side: "Caregivers will enroll in Medicaid or other health coverage they qualify
    for." (suggested F2.1); "Households will apply for and receive the SNAP, WIC and Medicaid
    benefits they are eligible for." (suggested F2.1).
  - Hint 29, boundary: "Parents will enroll their uninsured children in Medicaid or CHIP."
    (Y8.5, F2.1 or F1.3, for Severin).
  - Hint 30, Y8.1 and F1.3 sides: rows **P-37, P-38** (Y8.1) and **P-39, P-40** (F1.3) in the
    shared G11 file `codebook-refinement/research-review/2026-10-16/full-review/proposed-design-rows.csv`
    ("Y8.1 nutrition" boundary). P-37 and P-38 are real review-queue statements, which test the
    line better than invented ones. Spare invented candidates, if Severin drops any: "Parents will
    serve fruits and vegetables at family meals at least five days a week." (suggested F1.3);
    "Youth will eat breakfast on at least five school days a week." (suggested Y8.1).
  - Hint 30, F2.2 side: "Families will have enough food to last until the end of each month."
    (suggested F2.2); "Households will gain regular access to affordable fresh produce through the
    mobile market." (suggested F2.2).
- The hint 29 rows and the F2.2 rows are not yet in the shared G11 file; the coordinator adds
  them there so Severin rules on all G11 rows in one place. Each should be checked against the
  held-out set before it goes into gold, as that file's notes ask.
- Held-out gold was not read or used, and none may be used to tune these hints.

## Test plan (required before `ready-to-test` can become `judged`)

Own two-run design-set gate for the hint text, on a baseline that includes the shared gate and
CP-12-14 (paths under `codebook-refinement/eval/cp-12-15/`), including the domain-only set, as in
CP-12-14's commands. Pass: no adjudicated design row flips (including the newly adjudicated G11
rows), accuracy does not fall, and unstable rows are reported. For the no-prompt part now:
`npm test` (with the test edits above) and `npm run typecheck:server`; for the hint text,
`npm test`, `npm run typecheck` and `npm run typecheck:server`.

## Judge result

Filled in by `codebook-regression-judge`.
