# CP-01-02: Fix the WIOA regulation citation on 9.8

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | 9.8 |
| Version bump | PATCH |
| Requirement served | R1 |
| Status | draft |
| Enum cost | +0 |

## Problem

9.8 cites "WIOA Title I Youth Primary Indicators of Performance (34 CFR 463.155)".
34 CFR Part 463 is the **Adult Education and Family Literacy Act** (WIOA Title II)
regulation. It is the Department of Education's copy of the joint indicators. The
**Title I Youth** program's indicators are at **20 CFR 677.155** (Department of
Labor). The indicator wording is parallel in both, but the citation names the wrong
program's regulation. (Verified 2026-09-23 by fetching both sections on eCFR.)

## Change

| Before | After |
|---|---|
| `Source Framework: WIOA Title I Youth Primary Indicators of Performance (34 CFR 463.155).` | `Source Framework: WIOA primary indicators of performance, Title I Youth program (20 CFR 677.155): education/training or unsubsidized employment in the 2nd and 4th quarters after exit; median earnings; credential attainment.` |

**Registry:** delete `wioa-34cfr463155-label`. `wioa-20cfr677155` is already
verified.

## Sources

| Registry ID | Status | Component |
|---|---|---|
| wioa-20cfr677155 | verified | Title I Youth indicators |

## Gold impact

None.
