# CP-01-08: Cite the OCTAE Employability Skills Framework for 9.5

> Code numbers in this proposal were updated to the v2.0.0 numbering by CP-04-08 (mechanical; see `renumbering/v1.2.0-to-v2.0.0.csv`).

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | 9.5 |
| Version bump | PATCH |
| Requirement served | R1 |
| Status | draft |
| Enum cost | +0 |

## Problem

9.5 is labeled "(Perkins V / Soft Skills)". Perkins V is a funding statute, not a
skills taxonomy, and "Soft Skills" is not a framework. The U.S. Department of
Education's **Employability Skills Framework** (OCTAE) is the federal taxonomy built
for exactly this construct: Applied Knowledge, Effective Relationships, and Workplace
Skills, broken into nine key skill areas.

## Change

| Before | After |
|---|---|
| `9.5 Employability Skills (Perkins V / Soft Skills)` (heading) | `9.5 Employability Skills` (the code string is unchanged; only the definitionsText heading's parenthetical changes) |
| *(no source line)* | `- Source Framework: U.S. Dept. of Education (OCTAE), Employability Skills Framework -- Effective Relationships (interpersonal skills, personal qualities) and Workplace Skills (resource management, information use, communication, systems thinking, technology use).` |

The code identifier `"9.5 Employability Skills"` in the `domains` array does not
change. This is a PATCH.

## Sources

| Registry ID | Status | Component |
|---|---|---|
| octae-employability-skills-framework | verified | Nine key skill areas |

## Gold impact

G-039.
