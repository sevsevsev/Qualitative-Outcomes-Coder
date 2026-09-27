# CP-09-09: Domain-only coding for outcomes too general for a code

| Field | Value |
|---|---|
| Type | RULES (plus one derived export column) |
| Codes touched | rulesText step 3 ("Uncoded" bullets); no code definitions change |
| Version bump | MINOR (3.1.0): `primary_subcategory: "none"` gains a second meaning, and the export gains a `specificity` column |
| Requirement served | R2 breadth, R3 tie-breakers |
| Status | approved by Severin 2026-09-27 on a design-set gate (held-out sets spent for this CP); applied as 3.1.0; supersedes CP-09-07 |
| Enum cost | +0 (160 → 160). Reuses the existing `"none"` subcategory value; no new schema field |
| Framework deviation | none. No code's scope changes; a domain-only row claims only its domain's anchor framework, not a component of it |

## Problem

Partners often name an outcome area without saying what changes inside it: "social-emotional
growth", "increase wellness and health", "improvement in academic enrichment". 3.0 has two
answers for these, and both lose information:

1. **Forced into a specific code, usually at low confidence.** In the district's free-text
   "Program Outcomes" field (coded twice with 3.0.0 on 2026-09-27, 348 programs), the
   statements that name social-emotional learning only as a whole landed on four different
   Y4 codes: Y4.2 emotion regulation, Y4.3 goal-setting, Y4.10 decision-making and Y4.1
   self-awareness. That inflates specific codes, and it drives run-to-run disagreement: 11 of
   the 75 programs where the two runs disagreed involve this kind of SEL wording.
2. **Uncoded.** This is safe, but the row then disappears from its domain's count, although
   the partner clearly named the domain.

Severin's review of those 75 programs (2026-09-27) marked 11 atomic outcomes as too vague for a
code. His notes separate two cases: some name one domain but no category ("Should be coded as
SEL domain, but not enough specificity to code with a category under that domain"), and others
name no area at all ("There isn't enough context to know what is meant by 'chosen activity'").

The earlier draft CP-09-07 offered either "uncoded" (option A) or a new general code Y4.13
(option B), for SEL only. Neither option records that the domain is known. Option B also
solves the problem for SEL only, although the same pattern shows up in health ("wellness"),
academics ("academic enrichment") and relationships ("social support").

## Why this is the smallest fit (STANDARDS S2.2)

- **An example or hint** cannot help: the issue is not which code fits, but that no code does.
- **Widening a definition** (CP-09-07 option B's approach, per domain) would take one catch-all
  code per domain: up to 13 new codes, +13 enum values (160 → 173, past the 165 redesign
  line). A catch-all code is also "the vaguest kind of code" that 3.0 dropped on purpose
  (research-basis, Y7.10).
- **This CP adds no code.** It reuses the `"none"` subcategory the schema already has, and
  distinguishes domain-only from uncoded with the `uncoded` flag the model already returns.

## Change

### 1. rulesText, step 3, after the "Uncoded" bullets (`codebooks/youthOutcomesV3.ts`)

Before: no rule. Generic statements are forced to a code or marked uncoded.

After, add:

```
   - DOMAIN ONLY: when a statement names one domain's outcome area but no specific result
     inside it, code the domain and set primary_subcategory to "none", with "Uncoded" false.
     Examples: "social-emotional growth" or "growth in all five CASEL competencies" -> Domain
     Y4, subcategory none; "increase wellness and health" -> Domain Y8; "improvement in
     academic enrichment" -> Domain Y1. Confidence says how clearly the text names that
     domain.
     - Use it only when the text points to exactly one domain. A statement that names no
       area ("improve outcomes for students", "support overall youth development", "reach
       their full potential", "improve proficiency in their chosen activity") stays uncoded.
     - A broad label that spans more than one domain ("21st-century skills", "non-cognitive
       skills", "positive youth development", "well-rounded students") also stays uncoded:
       domain-only needs the text itself to name one domain's area. (Added 2026-09-27 after
       the first test; see Judge result.)
     - A list of named skills is split and each skill coded, never coded domain-only.
     - A code whose definition already covers the general case keeps it: "academic
       performance" or test scores with no subject -> Y1.15; leadership with no setting ->
       Y4.7 (CP-09-08).
```

and change the existing uncoded-consistency bullet from:

```
   - Whenever "Uncoded" is true, set primary_confidence to "none" and primary_subcategory to "none". Whenever you assign a real code, set "Uncoded" to false and use high, medium, or low -- never "none".
```

to:

```
   - Whenever "Uncoded" is true, set primary_confidence to "none" and primary_subcategory to "none". Whenever you assign a real code or a domain-only code, set "Uncoded" to false and use high, medium, or low -- never "none".
```

### 2. Export: a `specificity` column (`services/geminiService.ts`, `flattenToAtomic`)

Derived per atomic outcome, never asked of the model:

| `uncoded` | `primary_subcategory` | `specificity` |
|---|---|---|
| false | a code | `code` |
| false | empty or none | `domain` |
| true | (any) | `uncoded` |

A column the app derives cannot drift from the codes, and costs no enum values.

### 3. App and scoring changes that follow

- **Review table** (`components/ReviewDashboard.tsx`): show a domain-only row as its domain with
  "No specific code" in place of the code, without the invalid-code warning; the reviewer can
  still pick a code.
- **Re-import** (`services/reviewNormalization.ts`): keep an empty subcategory with a domain
  as domain-only instead of flagging it.
- **Eval scoring** (`scripts/codebookEvalScoring.ts`): a gold row may give a bare domain id
  (`Y4`) as its expected code. It matches output with that domain and subcategory none.
  Domain-only output scored against a code-level gold row is a miss, as now.
- **Explorer and dashboard**: count domain-only rows toward their domain, and show them as
  "Not specified" when a user opens the domain's categories.

## Sources

No new claims. A domain-only row relies on its domain's Framework Basis line (for example
CASEL 2020 for Y4), which is already verified.

## Verification requests

None.

## Gold impact

- **Adjudicated rows expected to change:** none found. The rows Severin marked uncoded for
  vagueness name no single domain and stay uncoded under the new rule: N040 "Soft Skills —
  Positive behaviors", N064 "Students acquire skills and strategies", S130, S217. N093
  "Students demonstrate a growth mindset and SEL goals" (gold Y5.4) names a specific belief
  (growth mindset) and stays Y5.4. The regression judge should confirm this on both gold files.
- **Held-out spend:** N040 and N064 are cited as evidence here, as in CP-09-07, so adopting this
  CP spends them.
- **New proposed rows** (status=proposed; Severin adjudicates; in `gold/youth_outcomes_v3.domain-only.proposed.csv`, with the expected code in `v3_suggested`; once adjudicated they score with `--gold` on that file). These are the too-vague outcomes
  from the 2026-09-27 district review, with the code this rule would give:

| Proposed row | Statement | Expected under this CP |
|---|---|---|
| G-D01 | Measurable growth in social-emotional competencies for students in grades 6-12. | Y4 (domain only) |
| G-D02 | social-emotional growth | Y4 (domain only) |
| G-D03 | develop critical social-emotional skills | Y4 (domain only) |
| G-D04 | To increase wellness and health amongst participants | Y8 (domain only) |
| G-D05 | Achievement of specific wellness goals | Y8 (domain only) |
| G-D06 | Documented improvement in academic enrichment | Y1 (domain only) |
| G-D07 | Students improve perceived social support | Y3 (domain only) |
| G-D08 | In the medium-term, improve their proficiency in their chosen activity | uncoded |
| G-D09 | discover students' talents, expand opportunities, and enrich their lives | uncoded |
| G-D10 | to support overall youth development | uncoded |

## Decisions (Severin, 2026-09-27)

1. **G-D07, "Students improve perceived social support"**: Y3 domain-only.
2. **Y1.15's catch-all stays.** "Academic performance" or test scores with no subject stay
   Y1.15; only non-performance generics ("academic enrichment", "academic growth") go to Y1
   domain-only.
3. **Category level waits.** 3.0 has categories between domains and codes, and some statements
   name a category but no code ("relationship skills"). Recording a category would add a field
   of up to 39 values (160 → 199, past the 180 cap), so it waits for the two-stage schema
   redesign. Severin deferred to this recommendation.

## Judge result (2026-09-27)

Tested with the rulesText change and version bump only (branch `cp-09-09-candidate`); the
`specificity` column and the app changes in section 3 come after approval. The candidate prompt
kept the Y4.7 clause without its CP-09-08 tag; CP-09-08 is still a draft, so that clause waits for it.
Scorer: a domain-only item now scores as its bare domain id (`itemCode` in
`scripts/codebookEvalScoring.ts`), and `scripts/codebook-eval.ts` reads 3.x gold files by `--set`.
gemini-3.8-flash, 2 runs per set. Results: `codebook-refinement/eval/cp-09-09/`.

| Set | n | Lenient, 3.0.0 (run 1 / 2) | Lenient, 3.1.0 candidate | Kappa, 3.0.0 → 3.1.0 |
|---|---|---|---|---|
| design | 255 | 97.6% / 98.0% | 98.4% / 98.4% | .996 → .992 |
| old held-out (`heldout`) | 90 | 95.6% / 96.7% | 95.6% / 95.6% | .977 → 1.000 |
| fresh held-out (`heldout3`, now spent) | 100 | 85.0% / 87.0% | 89.0% / 87.0% | .918 → .949 |
| district rows G-D01 to G-D10 (proposed, preview only) | 10 | 10% / 10% | 90% / 90% | .872 → 1.000 |

In the district preview, G-D07 went to Y3.1 instead of Y3 (domain only); the other nine matched.

Verdict: **FAIL on G2**, because the regressions below were not named in advance. G1 and G3 pass.

- **N040** "Soft Skills — Positive behaviors" (gold uncoded: "Not specific enough of an outcome
  to code"): Y4 domain-only in both runs. The rule causes this, so it is not run noise. The Gold impact section predicted it would stay uncoded; that
  prediction was wrong. Needs Severin's decision.
- **N078** "Behavioral Competency Improvement" (gold Y4.2): Y4 domain-only in both runs. The baseline
  already missed it (Y4.3), so it is not a regression, but the rule moves it.
- **N036** (A1.2 → A2.1) and **N067** (Y4.3 → Y5.4) missed in run 2 only. The coders had split
  on N036 too. Both are run noise.
- On H027 the old held-out set lost one row in run 2; it was unstable in the baseline.

### Revision after Severin's decision (2026-09-27)

Severin chose to keep N040 uncoded and tighten the rule, not to recode N040. The "broad label"
sub-bullet above was added. Its wording took three tries, all scored on the same sets:

| Candidate | Examples in the new sub-bullet | Effect on held-out rows |
|---|---|---|
| c2 | life skills, 21st-century skills, positive youth development | N040 fixed; N055 "life skills" (gold Y7.7) went uncoded |
| c3 | c2 without "life skills" | N055 fixed; N040 back to Y4 |
| c4 (current) | c3 plus "non-cognitive skills", "well-rounded students" | N040 and N055 both correct |

Results for c4 (`candidate4-3.1.0-*.json`):

| Set | Lenient, 3.0.0 | Lenient, c4 | Kappa |
|---|---|---|---|
| design | 97.6% / 98.0% | 97.6% / 97.6% | .996 → .996 |
| old held-out | 95.6% / 96.7% | 95.6% / 96.7% | .977 → .989 |
| fresh held-out | 85.0% / 87.0% | 84.0% / 86.0% | .918 → .939 |
| district preview (not a gate) | 10% / 10% | 100% / 90% | .872 → .870 |

Rows correct in both baseline runs but wrong in a c4 run (none on the design or old held-out sets):

- **N067** "Increased perseverance when facing challenges" (gold Y4.3) → Y5.4 in 7 of 8 candidate
  runs. A Y4.3/Y5.4 boundary shift that comes with the longer rule text, not a domain-only error.
  Named here as an accepted regression; a Y4.3 vs Y5.4 tie-breaker is a separate CP if it recurs.
- **N076** "Generates return visits to HG sites" (gold Y2.6) → A2.5 in both c4 runs, correct in
  c1 to c3. A Y2.6/A2.5 boundary case (repeat participation vs program output); c4's wording does
  not touch either code, so it is likely prompt sensitivity. Named as an accepted regression.
- **N036** (gold A1.2) → A2.1 in one run; it flips in c1, c2 and c4 as well. Noise.

N078 "Behavioral Competency Improvement" (gold Y4.2) is Y4 domain-only in every candidate run. The
baseline also missed it.

**Held-out status.** The wording was revised against N040 and N055, and both held-out sets were
scored after every revision, so neither set is held out for this CP any more. No held-out text
appears in the prompt. The honest gate is the design set, where c4 has no regressions. The next
clean test is fresh data: the district outcomes and the logic-model recode.

Judge (second pass): FAIL as written, because of the unnamed N067 and N076 and the missing sub-bullet
in Change. Both are now fixed in this section, which makes the verdict NEEDS-HUMAN: Severin decides
whether to approve on a design-set-only gate.
