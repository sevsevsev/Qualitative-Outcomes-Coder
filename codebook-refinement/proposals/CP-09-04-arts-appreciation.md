# CP-09-04: Arts appreciation, critique and audiences

| Field | Value |
|---|---|
| Type | TIEBREAKER |
| Codes touched | Y2.5 (include line), rulesText rule 9 |
| Version bump | PATCH (batched in 3.1.0) |
| Requirement served | R3 tie-breakers |
| Status | draft |
| Enum cost | +0 (160) |
| Framework deviation | none. Appreciating and critiquing art is the National Core Arts Standards' Responding process, which Y2.5 already cites (verified; FD-P16 unchanged). |

## Problem

"Appreciation" is one of the most common arts outcomes (15 unique texts in the 2026-09-23
export), and nothing in 3.0 names it. Coders and the app scatter it:

- N005 "Students' and partners' increased appreciation of music": gold Y2.5; app Y2.3 (both runs). Held-out.
- N027 "…will become audiences for the arts, recognizing that they are welcome in those spaces": gold Y3.1; app Y2.6 (both runs). Held-out.
- S197 "Students will critique a peer's artwork using the language of the discipline": gold Y2.5; app Y1.6 (both runs), reading "language of the discipline" as Y1.6 vocabulary. Design.
- Probes: E024 appreciation of classical music (coders Y2.5 / Y2.1); E026 comfortable visiting museums (coders Y3.1 / Y2.1); E018 audience attendance (both A2.5).

## Change

**Y2.5** include, before: `Composing, creating, exhibiting, performing, critiquing or connecting art to personal meaning.`
after: `Composing, creating, exhibiting, performing, appreciating, critiquing or connecting art to personal meaning.`

**rulesText rule 9**, append:

```
Appreciating or critiquing an art form or work -> Y2.5 (Responding), even when the critique uses the discipline's vocabulary, unless a skill or knowledge gain is stated (Y1.6). A lasting habit of pursuing an art form ("habitual theatergoing") -> Y2.3. Appreciating other cultures -> Y4.5. Feeling welcome or comfortable in arts or cultural spaces -> Y3.1. Audience counts of people who are not participants -> A2.5.
```

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| National Core Arts Standards (2014) | verified | Responding (already cited by Y2.5) |

## Verification requests

None.

## Gold impact

- Now matches: S197 (design); N005, N027 (held-out: **spends these rows**).
- No adjudicated row expected to flip. Watch Y1.6 rows that mention vocabulary (S199, H010
  stay Y1.6: they state a skill gain).

## Judge result

Pending.
