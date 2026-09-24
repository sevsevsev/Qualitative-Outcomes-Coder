# CP-04-04: List Domain 11 (Academic Learning & Achievement) first

| Field | Value |
|---|---|
| Type | RULES |
| Codes touched | Domain 11 (position only; no code renumbered) |
| Version bump | PATCH |
| Requirement served | usability (Severin's request, 2026-09-24) |
| Status | ready-to-test (applied on branch `claude/project-thread-mpnj0j`) |
| Enum cost | +0 |

## Problem

Severin works in a school district, where academic outcomes are the top policy
priority. He asked for this domain to come first in the list.

## Change

- **`definitionsText`:** the Domain 11 block moves to the top. A note says the order
  carries no weight when choosing a code.
- **`domains` array:** Domain 11 moves to position 0. This reorders:
  - the review table's domain dropdown;
  - the Codebook tab;
  - the Gemini enum order.
- **rulesText:** one line under "CRITICAL for Formatting": "Domain 11 is listed first
  for readability. The order of domains carries no weight when choosing a code."
- **Numbering is unchanged.** It stays "Domain 11" and 11.x. Renumbering to Domain 1
  would be MAJOR. It would break comparison with every past export, the gold sets and
  the v1→v2 crosswalk.
- **Tests:**
  - `services/codebookExplorer.test.ts` now looks domains up by number instead of
    by position.
  - A new test checks that Domain 11 is first.

## Risk

The model may favor codes listed first. The regression gate's stability check (G3)
and a live re-run of `edge_cases_v1.csv` through the preview should look for any
shift toward Domain 11 in borderline rows, such as Domain 4 vs. 11.

## Gold impact

None expected.

## Judge result

Filled in by `codebook-regression-judge`.
