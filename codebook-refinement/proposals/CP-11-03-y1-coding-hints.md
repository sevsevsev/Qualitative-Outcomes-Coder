# CP-11-03: Three Y1 coding hints (early literacy by grade, value of schoolwork, coursework readiness)

| Field | Value |
|---|---|
| Type | HINT |
| Codes touched | Y1.8 (useInstead), Y1.12 (useInstead), Y1.16 (exclude, useInstead); rulesText rule 8 (one clause). The domain `hint`s of the three codes follow from useInstead automatically. No definition, include, example or source changes. **Y1.4 is not touched.** |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today; if draft PR #62's 3.2.0 candidate merges first, 3.2.x) |
| Requirement served | R3 tie-breakers |
| Status | draft (Y1 research review pilot, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none, for each hint (reasons under each). No hint moves a construct out of the framework component that holds it today. |

## Problem

The Y1 research review (recommendations "Act now" item 3; practitioner review tests 1 and 6;
fidelity review verdict 10) found three boundaries where the text of the codebook leaves the
coder room to go wrong:

1. **Y1.8 vs Y1.1/Y1.3.** In the district program-description run, 35 of 36 Y1.8 rows are one
   template ("Elementary participants build early-literacy skills"). Y1.8's definition already
   says "for children below kindergarten age", but Gemini keys on the word "early". Both blind
   coders chose Y1.1 (practitioner review). The rows are model codes, not gold. They also come
   from one template, so they show one error repeated, not a rate.
2. **Y1.12 vs Y2.4.** Farrington's fourth academic mindset, "This work has value for me", is
   coded in Y2.4 Relevance & Utility Value. Y1.12, which holds the other Farrington mindsets, has
   no pointer to it. Rule 8 sends "beliefs ABOUT learning" to Y1.9-Y1.12, which would send a
   value belief to Y1.12.
3. **Y1.16 vs subject codes and domain-only.** "Demonstrated readiness for high-level university
   coursework" appears three times in the real run and got three codes (Y1.16, Y7.2, Y1.12).
   "Improved student readiness for long-term mathematics success and higher-level coursework"
   went to Y1.16, while both blind coders chose Y1.3. Readiness is not enrolling in or completing
   an advanced course, which is all Y1.16's definition covers.

## Why this is the smallest fit (STANDARDS S2.2)

Not required for HINT. All three are hints because each definition already draws the line:
"below kindergarten age" (Y1.8), "beliefs about oneself as a learner" (Y1.12), "enrolling in or
completing advanced courses" (Y1.16). The hints make the line visible where the coder reads
"Use instead". None widens or narrows a definition, so none is MINOR.

## Change

All edits are in `codebooks/youthOutcomesV3.data.ts`, except rule 8, which is in
`codebooks/youthOutcomesV3.ts`. The domain `hint` for each code is built as
`Use instead: ${useInstead}` (`youthOutcomesV3.ts`), so it changes with useInstead and is not
edited by hand.

### 1. Y1.8: the stated grade or age decides, not the word "early"

**useInstead**, before:

```
Y8.2 motor skills; Y8.5 screenings and referrals received; Y4 for social-emotional skills at any age.
```

**useInstead**, after:

```
Y1.1 (reading, writing) or Y1.3 (math) when the statement places the children in kindergarten or a later grade ('kindergartners', 'third graders', 'K-3', 'elementary students') or gives an age of 6 or older, even if it says 'early literacy' or 'early numeracy'; readiness for kindergarten stays here. Y8.2 motor skills; Y8.5 screenings and referrals received; Y4 for social-emotional skills at any age.
```

**Domain hint**, before → after: `Use instead: ` + the useInstead above.

Wording choices, each tied to a gold row:

- The trigger is a stated grade, school level or age. It is not the word "early" or a skill word
  such as "phonemic awareness". **S025** ("Children will demonstrate age-appropriate
  pre-literacy skills (letter recognition, phonemic awareness)" → Y1.8) names no grade, so it
  stays in Y1.8. A trigger on skill words would flip it.
- **S100** ("Third graders will read on grade level by the end of the year" → Y1.1) is the
  pattern the hint states.
- "Readiness for kindergarten stays here" stops a statement that only *mentions* kindergarten
  ("ready for kindergarten") from leaving Y1.8, whose definition names kindergarten readiness.
- "grade level" (S048, S249: "by one grade level") is not a grade placement. Those rows are
  Y1.1 either way.

**Limit, stated plainly.** The practitioner review found that the atomizer strips the
beneficiary ("Elementary participants") from the atomic text. Where the coder sees only "build
early-literacy skills", no grade reaches it, and under this hint (as under S025's logic) Y1.8 is
still a defensible code. So the hint fixes the routing only when the grade or age reaches the
coder. For the 35 template rows already coded, the review-desk correction (recommendations
decision E) is the fix. Carrying the beneficiary into the atomic text (practitioner review,
"missed" item 3) is a separate pipeline change, not a codebook CP. The recommendations' "moves
35 real rows" assumes the grade reaches the coder; the non-gating preview below checks this.

FD: none. Y1.8 keeps Head Start ELOF (birth to five). Kindergarten-and-up literacy and math
already belong to Y1.1 and Y1.3 (ESSA State standards for reading or language arts and
mathematics). Both codes are in Y1, and no construct crosses a framework.

### 2. Y1.12: point to Y2.4 for the value of schoolwork

**useInstead**, before:

```
Y5.4 general confidence and general growth mindset. CP-01-06 (in flight) sets the same line for 2.4.0.
```

**useInstead**, after:

```
Y5.4 general confidence and general growth mindset; Y2.4 believing schoolwork or a subject is valuable, useful or relevant. CP-01-06 (in flight) sets the same line for 2.4.0.
```

**Domain hint**, before → after: `Use instead: ` + the useInstead above.

The stale second sentence ("CP-01-06 (in flight) …", a 2.x process note that reaches the prompt)
is left as it is. Removing it is a separate one-line CP and is not bundled here (S4.1).

Gold rows: **S216** ("Students will believe they can pass their algebra class" → Y1.12) is
self-efficacy, not value, and must stay. S034, S072 and S202 (Y1.12) are growth mindset and
confidence. **S115** ("Students will explain how algebra relates to careers they are interested
in" → Y2.4) is the Y2.4 side.

FD: none. Reading made explicit, as the fidelity review asked (verdict 10): Y1.12's definition
claims self-efficacy, belonging and growth mindset, three of Farrington's four academic
mindsets. It has never claimed the fourth. The fourth is "This work has value for me", which
y1-mindsets-01 (SUPPORTED) describes as "involves a student's sense that the subject matter he
or she is studying is interesting and holds value". Its verifier notes that Farrington defines
the utility part by citing Eccles et al. (1983). That construct already lives in Y2.4, which is
anchored on Eccles's expectancy-value theory (utility value) and Hulleman et al. (2010), both
verified and direct. No code departs from its anchor. The pointer only makes visible a routing
that already exists, which is the pointer S1.6 asks an anchored domain to keep.

Not included: adding Farrington's value mindset to Y2.4's sources. The fidelity review called it
fine; the devil's advocate rejected it as churn outside Y1. It would be a CITATION_FIX in its own
CP.

### 3. Y1.16: readiness for higher-level coursework is not advanced coursework

**exclude**, before:

```
Interest in a subject; postsecondary enrollment after high school.
```

**exclude**, after:

```
Interest in a subject; postsecondary enrollment after high school; readiness or preparation for advanced or college-level coursework when no such course is enrolled in or completed.
```

**useInstead**, before:

```
Y2.3 lasting interest; Y1.18 college enrollment.
```

**useInstead**, after:

```
Y2.3 lasting interest; Y1.18 college enrollment; readiness for higher-level coursework with no course taken: the subject code (Y1.1-Y1.6) if a subject is named, otherwise Domain Y1 with subcategory none.
```

**Domain hint**, before → after: `Use instead: ` + the useInstead above.

Gold rows: **S014** ("Seniors will complete college-level coursework to be ready for freshman
year" → Y1.16) completes a course, so it stays. That is why the clause turns on "no such course
is enrolled in or completed", not on the word "ready". S159 (enrolling in an advanced STEM
course) and S219 (dual-enrollment credit) also stay Y1.16. The domain-only target follows
CP-09-09 decision 2: readiness is not a performance measure, so it is not Y1.15 (as one
researcher proposed). It sits with G-D06 ("Documented improvement in academic enrichment" →
Y1).

FD: none. Y1.16's anchors (ESSA advanced coursework, after CP-11-01; CRDC) count enrollment and
completion. The clause excludes what they do not count. It routes the excluded statements to
subject codes or to Y1 domain-only, all inside Y1.

### rulesText (`codebooks/youthOutcomesV3.ts`)

Rules 8 and 9 were checked against all three hints.

**Rule 8 must change**, because it says the opposite of hint 2. Before:

```
8. LEARNING BEHAVIOR vs. LEARNING GAIN: behaviors and beliefs ABOUT learning (completing homework, sticking with hard problems) -> Y1.9 to Y1.12. A demonstrated gain in a subject -> that subject's code (Y1.1 to Y1.6). A status (grades, GPA, credits, on-track) -> Y1.15. Split if both are present.
```

After:

```
8. LEARNING BEHAVIOR vs. LEARNING GAIN: behaviors and beliefs ABOUT learning (completing homework, sticking with hard problems) -> Y1.9 to Y1.12; seeing schoolwork or a subject as valuable, useful or relevant -> Y2.4. A demonstrated gain in a subject -> that subject's code (Y1.1 to Y1.6). A status (grades, GPA, credits, on-track) -> Y1.15. Split if both are present.
```

**Rule 9: no change.** It sends a gain in a named subject to that subject's code, which agrees
with hint 1 (grade-school literacy → Y1.1) and with hint 3 (readiness in a named subject → the
subject code). The Subject Area line "Early Childhood / Pre-K: Use for outcomes about children
below kindergarten age, alongside Y1.8" agrees with hint 1. The DOMAIN ONLY rule's
"academic performance → Y1.15" bullet does not cover readiness, so it agrees with hint 3.

Possible follow-up, not included: a rule-9 sentence on Y1.8 ("early literacy for kindergarten
or later grades → Y1.1"). Add it only if the preview below shows the useInstead hint alone does
not move the template when the grade is present.

### `CONFUSIONS.md`

Unchanged. It is the 2.x registry (1.x/5.x numbers), and 3.x tie-breakers live in rulesText and
useInstead (practitioner review). A 3.x CF entry would need at least two adjudicated gold rows
per side (S3.1). None of the three pairs has them yet; see the proposed rows below.

### Registry

Unchanged.

## Sources

| Registry ID or claim | Status | Component relied on |
|---|---|---|
| head-start-elof | verified (direct) | Language & Literacy and Cognition, birth to five (Y1.8 keeps its scope) |
| essa-6311-b1c-standards | verified (direct) | reading or language arts; mathematics (Y1.1, Y1.3) |
| y1-mindsets-01 | SUPPORTED (verification-table) | Farrington, "This work has value for me": "involves a student's sense that the subject matter he or she is studying is interesting and holds value". Rationale for hint 2 only; not added to the registry by this CP. |
| eccles-expectancy-value, hulleman-2010-utility-value | verified (direct) | utility value (Y2.4) |
| farrington-2012 | verified (direct) | Academic Mindsets (Y1.12) |
| crdc-2020-21-student-access; essa-6311-advanced-coursework (CP-11-01) | verified | enrollment in and completion of advanced coursework (Y1.16) |

## Verification requests

None.

## Gold impact

- **Rows expected to change code: none.** Each hint was worded so that no adjudicated design row
  moves.
- **Design rows to watch** in the gate: S014, S159, S219 (Y1.16 must stay); S025 (Y1.8 must
  stay); S100, S048, S249 (Y1.1 must stay); S216, S034, S072, S202 (Y1.12 must stay); S115
  (Y2.4 must stay); G-D06 in `youth_outcomes_v3.domain-only.gold.csv` (Y1 domain-only must
  stay). A flip on any of them fails the CP unless it is named here and argued as a correction
  (S4.4).
- **Proposed new gold rows** (for Severin; `status=proposed`, suggestions only; IDs assigned when
  added). Each pair needs two rows per side before a CF entry can be written:
  - "Elementary participants will build early-literacy skills." (suggested Y1.1; district
    template text)
  - "Kindergartners will learn letter sounds and blend simple words." (suggested Y1.1)
  - "Students will see the value of what they learn in school." (suggested Y2.4)
  - "Students will demonstrate readiness for high-level university coursework." (suggested Y1
    domain-only; district text that got three codes)
  - "Students will be ready for higher-level math coursework." (suggested Y1.3)
- Held-out gold was not read or used, and none may be used to tune these hints.

## Test plan (required before `ready-to-test` can become `judged`)

**Two-run design-set gate** (S4.4 regression, S4.5 stability), on the branch with exactly this
edit, against a baseline run of the version it applies to:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-11-03/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-11-03/candidate-<version>-design.json --compare codebook-refinement/eval/cp-11-03/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-11-03/candidate-<version>-domain-only.json --compare <matching baseline>
```

Pass: no adjudicated design row flips, design accuracy does not fall, and any row whose primary
code differs between the two runs is reported as a confusion candidate. The baseline must be
the version actually current at apply time (3.1.4, or PR #62's version if it merges first).

**Non-gating preview** (answers the devil's advocate's DEFER on hint 1): code the two unique
texts of the district Y1.8 template twice, before and after. Use them once as the atomizer emits
them, and once with the beneficiary ("Elementary participants …") restored. If neither version
moves to Y1.1, drop hint 1 from this CP and rely on the review-desk correction. Real-run rows are
model output, not gold, so this preview cannot gate.

Then `npm test`, `npm run typecheck` and `npm run typecheck:server`.

## Judge result

Filled in by `codebook-regression-judge`.
