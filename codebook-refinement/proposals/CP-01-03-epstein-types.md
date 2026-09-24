# CP-01-03: Re-map Epstein's six types to the right codes

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | 2.5, Domain 10 header, 10.4, 12.4 (citation text only) |
| Version bump | PATCH |
| Requirement served | R1, R3 (CF-008) |
| Status | draft |
| Enum cost | +0 |

## Problem

Epstein's framework is: 1 Parenting, 2 Communicating, 3 Volunteering, 4 Learning at
Home, 5 Decision Making, 6 Collaborating with the Community. Three places in the
codebook cite the wrong type:

- **2.5** (family–program relationship) cites **Types 2 & 4**. Type 4, Learning at
  Home, is the construct for **12.4 Home Learning Environment**, which cites no
  Epstein type at all.
- The **Domain 10 header** cites **Types 3/6**. But 10.4's own example ("establish a
  Parent Advisory Council") is **Type 5, Decision Making** ("include parents in
  school decisions ... develop parent leaders and representatives").

## Change

| Location | Before | After |
|---|---|---|
| 2.4/2.5 heading | `2.5 Family Partnership & Connection (Gap Fill: Epstein Types 2 & 4)` | `2.5 Family Partnership & Connection (Gap Fill: Epstein Types 2 & 3 — Communicating, Volunteering)` |
| Domain 10 header | `Learning Forward Standards & Epstein Type 3/6` | `Learning Forward Standards & Epstein Types 5/6 (Decision Making; Collaborating with the Community)` |
| 10.4 | *(no source line)* | add `- Source Framework: Epstein Type 5 (Decision Making) & Type 6 (Collaborating with the Community).` |
| 12.4 | *(no source line)* | add `- Source Framework: Epstein Type 4 (Learning at Home).` |

**Hint (12.4):** add `"Epstein Type 4 (Learning at Home). For the family's relationship with the program, use 2.5."`

## Sources

| Registry ID | Status | Component |
|---|---|---|
| epstein-six-types | located (secondary) | Types 1–6 |

## Verification requests

- Primary source for the six types: Epstein, J. L., et al., *School, Family, and
  Community Partnerships: Your Handbook for Action*. The edition and year were
  recalled from memory; the verifier should pin them.

## Gold impact

G-020, G-021, and G-022 are the CF-008 anchors. No code changes are expected; this
fixes the rationale only.
