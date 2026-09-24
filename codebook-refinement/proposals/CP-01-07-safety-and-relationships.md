# CP-01-07: Fix the 5.1 definition, add a safety tie-breaker, and add a citation for 2.2

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE (5.1 definition text), plus a tie-breaker and a citation added to 2.2 |
| Codes touched | 5.1, 2.1 hint, 2.2 citation |
| Version bump | PATCH (5.1's label and example already say "safety"; this aligns the definition with them) |
| Requirement served | R1, R3 (CF-017) |
| Status | draft |
| Enum cost | +0 |

## Problem

1. **5.1 contradicts itself.** Its label is "Empowerment & Safety" and its example is
   "Youth will feel safe in their neighborhood". But its definition ("a sense of
   mattering, voice, and control over their own environment") never mentions safety.
   A coder reading only the definition would not choose 5.1 for its own example.
2. **"Feel safe" has five plausible codes** (5.1, 2.1, 3.5.4, 7.7, 7.3), and no rule
   picks between them.
3. **2.2 Adult Support & Care has no subcategory-level citation.** The Search
   Institute Developmental Relationships Framework ("Express Care", "Provide
   Support") is verified and fits it exactly.

## Change

**5.1 definition**, before:

```
Youth feel a sense of mattering, voice, and control over their own environment (a felt, individual state).
```

**5.1 definition**, after (revised after cycle-01b):

```
Youth feel safe (at home, at school, in the neighborhood) and feel valued and useful in their community -- a felt, individual state. Source Framework: Search Institute 40 Developmental Assets, Empowerment category (Community values youth; Youth as resources; Service to others; Safety).
```

**Revision note (cycle-01b).** The first draft kept "control over their own
environment". The independent verifier found that phrase matches Search
Institute's *Personal Power* asset, which sits under **Positive Identity**, not
Empowerment. The revised definition uses the Empowerment assets' own constructs.
Youth agency or "personal power" is now routed to 5.4 (Positive Identity), so
CF-016's routing of "initiative/agency → 5.1" must change to **5.4** too.

**New rulesText tie-breaker 12:**

```
12. SAFETY: feeling safe in general or in the neighborhood -> 5.1; feeling safe AND accepted in this program/school -> 2.1; making safe choices -> 3.5.4; reduced incidence of fights/bullying/victimization -> 7.7; psychological safety while recovering from trauma -> 7.3.
```

**2.2**: add the line
`- Source Framework: Search Institute Developmental Relationships Framework (Express Care; Provide Support).`

## Sources

| Registry ID | Status | Component |
|---|---|---|
| search-developmental-relationships | verified | Express Care; Provide Support |
| search-40-assets | located (PARTIAL for 5.1; SUPPORTED for 5.2–5.4) | Empowerment assets incl. Safety |

## Verification requests

Done in cycle-01b. The verifier confirmed Safety is an Empowerment asset (URL is in
the registry).

## Gold impact

New proposed rows: G-042, G-043, G-044.
