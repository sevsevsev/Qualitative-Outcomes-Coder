# CP-07-02: Add 3.6 Social Capital & Networks

| Field | Value |
|---|---|
| Type | ADD_CODE |
| Codes touched | 3.6 (new); Domain 3 description; hints on 3.6 |
| Version bump | MINOR (2.0.1 -> 2.1.0) |
| Requirement served | R2 breadth, R1 frameworks |
| Status | applied on the PR; Severin approves by merging |
| Enum cost | +1 (primary_subcategory enum; footprint 144 -> 145, test limit 180, 139 last confirmed live) |

## Problem

The live codebook has no home for a young person's wider network: contacts,
introductions, professionals in a field, people who can open doors. 3.2 covers one
supportive adult and 3.3 covers friendships. The `original.ts` "Deferred" block has
listed social capital as a gap since v1.1.0, and the v2 draft already adds it
(Y2.5). The registry note on `search-developmental-relationships` names "Expand
Possibilities" as the construct for this gap.

**New evidence (STANDARDS S4.7):** Severin chose this on 2026-09-25 as the social
side of mobility (see CP-07-01), and the Education-to-Workforce social capital
indicator was blind-verified for Y2.5 in the 2026-09-24 source verification.

## Why this is the smallest fit (STANDARDS S2.2)

- Widening 3.2 would blur "one trusted adult", which is how 3.2 is used in gold.
- 9.3 (Transition Knowledge) is about process knowledge, not relationships, and
  would leave non-career networks (e.g. civic or community contacts) stranded.
- One subcategory in the existing relationships domain matches v2's placement
  (Y2 Belonging & Relationships -> Y2.5), so the v2 crosswalk stays one-to-one.

## Change

**definitionsText**, after 3.5:

```
3.6 Social Capital & Networks
   - Definition: A young person's access to, and ability to use, a wider network of relationships (adults, peers, professionals, alumni, employers) that can open educational, career, or other opportunities -- beyond one supportive relationship.
   - Source Framework: Education-to-Workforce Indicator Framework (Social Capital); Search Institute Developmental Relationships Framework (Expand Possibilities).
   - Note: One trusted or caring adult is 3.2; making friends is 3.3. Use 3.6 when the outcome is about the breadth of the network or using it to pursue an opportunity (introductions, references, mentors in a field, contacts who can help).
   - Example: "Participants will identify two new adults outside their family who can help them pursue a career goal."
```

**domains**: new subcategory `3.6 Social Capital & Networks` with hint "A wider
network of relationships that opens opportunities. One trusted adult is 3.2; making
friends is 3.3." The Domain 3 description gains "and wider networks of people who
can open opportunities."

**Deferred block**: the social-capital line is removed (mentoring match quality stays
deferred).

**CONFUSIONS.md**: new CF-028 (3.2 · 3.3 · 3.6).

**Registry**: see Sources.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| `e2w-social-capital` (new) | verified, SUPPORTED | Social capital indicator: "Individuals have access to and are able to mobilize relationships that help them further their goals." |
| `search-developmental-relationships` | verified, PARTIAL for 3.6 | Expand Possibilities: "Connect me with people and places to broaden my world." Secondary: it describes what an adult does, and only its "Connect" action is directly about social capital. |

The verifier corrected the E2W attribution: Mathematica is the author (2022) and the
Gates Foundation a funder, not a co-author. The registry uses the corrected cite_as.
Both excerpts came through WebFetch, not raw HTML (this session's network blocks
both sites). Each matches an earlier independent fetch word for word: E2W the
2026-09-24 v2 verification (V38), and Search Institute the cycle-01 registry excerpt.

## Verification requests

V07-1 and V07-2, checked by `codebook-citation-verifier` on 2026-09-25, blind to this
CP's reasoning. Results are in the registry entries.

## Gold impact

- New proposed rows: G-075, G-076, G-077.
- No adjudicated row is expected to change code: no existing gold statement is about
  a wider network.

## Judge result

Not run. A live gold run needs a preview upload (sessions can't reach Gemini).
