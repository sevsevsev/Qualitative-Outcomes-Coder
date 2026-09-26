# CP-09-05: The organization's own operations, and activity descriptions

| Field | Value |
|---|---|
| Type | RULES |
| Codes touched | rulesText CODING PROCESS ("Uncoded" bullets); A2.5 by reference |
| Version bump | PATCH (batched in 3.1.0) |
| Requirement served | R2 breadth (consistent handling of non-outcome text) |
| Status | draft; needs Severin to confirm the 2026-09-23 scope decision still holds for 3.0 |
| Enum cost | +0 (160) |
| Framework deviation | none |

## Problem

1. On 2026-09-23 Severin decided the organization's own finances and branding are out of scope
   (uncoded; `/mnt/project-files/eval/codebook_gaps_v0.md`). The 3.0 prompt never says so.
   Both blind coders forced E010 (fund operations through grants) into A3.1 at low
   confidence and E012 (brand recognition) into A2.5 / A2.1; the app coded N028 ("Increase
   attention to supporting mentoring programs…", gold uncoded) A3.1 at low confidence.
2. Activity descriptions are handled inconsistently. N090 "Weekly synthetic phonics
   instruction": gold Y1.1, app uncoded in both runs (held-out). E053 "Weekly 90-minute
   sessions led by teaching artists": coders A2.5 / uncoded. E040 "exposed to four art
   disciplines": both A2.5. The live export has 17 "exposure" texts.

## Change

**rulesText, "Uncoded" bullet**, before (end of the list):

```
... a statement about the evaluation itself, or text too vague to code ("N/A", "See above", "Improve outcomes for students").
```

**after:**

```
... a statement about the evaluation itself, the organization's own finances, fundraising or visibility ("fund 20% of operations through grants", "improved brand recognition"), or text too vague to code ("N/A", "See above", "Improve outcomes for students"). Staffing and program growth are not in this list: they are A1.3 and A2.5.
```

**New bullet after the "Do NOT mark something uncoded because it is a program-level output" bullet:**

```
   - An activity or service described without a result: if it names what is taught or offered ("weekly phonics instruction", "exposure to careers in environmental science"), code the learning or outcome it targets at low confidence; if it names only a format, schedule or dose ("weekly 90-minute sessions", "exposed to four art disciplines"), code A2.5.
```

## Sources

None needed (prompt procedure).

## Verification requests

None.

## Gold impact

- Now matches: N028, N090 (held-out: **spends these rows**).
- Must not flip: N079 (fully staffed libraries, A1.3), N007 (more sites, A2.5), S019 (city
  budget funding, A3.1: public funding stays A3.1).

## Judge result

Pending.
