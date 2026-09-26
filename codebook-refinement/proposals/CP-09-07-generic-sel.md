# CP-09-07: Generic social-emotional skills

| Field | Value |
|---|---|
| Type | RULES (option A) · ADD_CODE (option B) |
| Codes touched | Option A: rulesText "Uncoded" bullet. Option B: new Y4.13, rule 14. |
| Version bump | A: PATCH · B: MINOR |
| Requirement served | R2 breadth, R3 tie-breakers |
| Status | draft; Severin chooses A or B |
| Enum cost | A: +0 (160) · B: +1 (161; under the 165 redesign line) |
| Framework deviation | none for either. B's anchor is CASEL (2020) as a whole framework. |

## Problem

"Students will strengthen their social-emotional skills" has no home in 3.0. Blind coders split
on the probes (E001, E003: coder A Y4.2 low; coder B uncoded). Severin's held-out calls lean
uncoded: N040 "Soft Skills — Positive behaviors" and N064 "Students acquire skills and
strategies" uncoded as "not specific enough"; N078 "Behavioral Competency Improvement" Y4.2;
N093 Y5.4. About 8 of 1,367 unique texts in the 2026-09-23 export name SEL only generically;
most list skills and split.

## Why this is the smallest fit (S2.2)

Option A is a rule only. Option B adds a code, justified only if Severin wants generic SEL rows
to roll up to Y4 the way Y1.15 catches "academic performance" with no subject. Widening any
existing Y4 code to take them would blur a specific CASEL skill.

## Change

**Option A (recommended), "Uncoded" bullet**, add:

```
Social-emotional, soft or life skills named only as a whole, with no specific skill ("strengthen their SEL skills", "growth in all five CASEL competencies") are uncoded. A list of named skills is split and each skill coded. "Life skills" with daily-living content -> Y7.7.
```

**Option B**, new code in Y4 (new category F "Overall", or listed after E):

```
Y4.13 Social-Emotional Skills (General)
- Definition: Growth in social-emotional skills or competencies named only as a whole, with no specific skill.
- Include: "SEL skills", "social-emotional competencies", "all five CASEL competencies".
- Exclude: any named skill; a list of skills (split it); general behavior with no SEL framing.
- Use instead: the specific Y4 code; split lists; Y4.2 self-regulation.
- Source Framework: CASEL (2020) SEL Framework, five core competencies (verified).
```

and rule 14, append: `Social-emotional skills named only as a whole -> Y4.13.`

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| CASEL (2020) | verified | five core competencies (option B only) |

## Verification requests

None (CASEL is already verified in the registry).

## Gold impact

- A: N040, N064 stay uncoded (match); N078 (Y4.2) should stay Y4.2 ("behavioral
  competency" is read as self-regulation). Uses held-out rows as evidence: **spends N040,
  N064, N078** if adopted from them.
- B: same rows; N078 at risk of moving to Y4.13.

## Judge result

Pending.
