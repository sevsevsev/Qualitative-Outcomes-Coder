# CP-04-03: Subject Area must agree with the Domain 11 learning code (prompt rule + review flag)

| Field | Value |
|---|---|
| Type | RULES |
| Codes touched | 11.1, 11.2, 11.3, 11.8, 11.9 (new `subjectAreas` field); Subject Area rules in rulesText |
| Version bump | PATCH |
| Requirement served | R4 drift |
| Status | ready-to-test (applied on branch `claude/project-thread-mpnj0j`) |
| Enum cost | +0 |

## Problem

Subject is the reason the learning codes exist, so Subject Area has to agree with them.
Gemini's structured-output schema cannot make one field depend on another. As a
result, a row coded 11.2 with Subject Area "N/A / General" passes the schema. In the
live run, 11.1/ELA (46 of 46) and 11.2/Math (9 of 9) were consistent, but nothing
enforces it.

## Change

- **rulesText, Subject Area section:**
  - 11.1 → ELA
  - 11.2 → Mathematics
  - 11.8 → Science, Computer Science & Technology, Engineering & Robotics, or STEM
  - 11.9 → Visual & Performing Arts
  - 11.3 → the specific subject named, never "N/A / General"
- **`codebooks/types.ts`:**
  - `SubcategoryDefinition.subjectAreas?: string[]`
  - `subjectAreaMismatch(codebook, code, subjectArea)`, which returns the expected
    values or null
- **`codebooks/original.ts`:** `subjectAreas` is set on 11.1, 11.2, 11.3, 11.8 and
  11.9. 11.3 allows Social Studies, World Languages, and Health & PE.
- **`components/ReviewDashboard.tsx`:** a mismatched Subject Area gets an amber
  outline and an "Expected: ..." line. The reviewer decides; nothing is changed
  automatically.
- **Tests (`codebooks/consistency.test.ts`):**
  - every pinned value exists in `subjectAreaOptions`;
  - the mismatch helper covers the matching, mismatching and unpinned cases.

## Sources

None needed: this rule enforces agreement with CP-04-01 and CP-04-02.

## Gold impact

None on codes. Precondition for CP-04-06: the gold set needs a Subject Area column
before this field's accuracy can be measured.

## Judge result

Filled in by `codebook-regression-judge`.
