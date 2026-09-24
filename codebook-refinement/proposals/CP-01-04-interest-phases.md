# CP-01-04: Re-cite 2.3 and add 2.6 Sustained & Individual Interest

> Code numbers in this proposal were updated to the v2.0.0 numbering by CP-04-08 (mechanical; see `renumbering/v1.2.0-to-v2.0.0.csv`).

| Field | Value |
|---|---|
| Type | ADD_CODE (with the 2.3 citation fix it depends on) |
| Codes touched | 2.3 (citation), 2.6 (new), hint on 2.2 |
| Version bump | MINOR |
| Requirement served | R1, R2, R3 (CF-014) |
| Status | draft |
| Enum cost | +1 (143 → 144 if applied after CP-01-05) |

## Problem

1. **2.3 is mis-cited.** It cites "Hidi & Renninger (Phase 3/4) / Eccles (Value
   Theory)". Hidi & Renninger's phases 3 and 4 are *emerging and well-developed
   individual interest*, not utility value. Utility value is Eccles' construct.
2. **Most of the interest model has no code.** 2.2 covers only phase 1 (triggered
   situational interest). The live run coded validation row 16, "Youth will discover
   a new passion for dance", to **2.2 at high confidence**. By the cited model, a
   *passion* is emerging individual interest. The model is doing what the codebook
   allows, and the codebook is missing the construct.
3. **It is common across programs.** Sustained or deepened interest ("continue in
   STEM", "develop a lifelong love of reading", "pursue the arts beyond the
   program") is a core outcome for STEM, arts, and literacy programs.

These are shipped together because fixing the 2.3 citation alone would leave phases
2–4 citation-orphaned.

## Why this is the smallest fit

- **Widen 2.2:** it would erase the triggered-vs-sustained distinction, and that
  distinction is the whole point of the four-phase model.
- **Hint on 6.3:** 6.3 is *participation* in outside activities, not interest.

## Change

**2.3**, before:

```
   - Source Framework: Hidi & Renninger (Phase 3/4) / Eccles (Value Theory).
```

**2.3**, after:

```
   - Source Framework: Eccles & Wigfield, Expectancy-Value Theory (utility value); Farrington et al. (2012) academic mindset "This work has value for me."
```

**New 2.6**, added after 2.5:

```
2.6 Sustained & Individual Interest
   - Definition: Interest that persists, deepens, or becomes the youth's own -- returning to a topic or activity over time, pursuing it beyond the program, or describing it as a passion.
   - Source Framework: Hidi & Renninger (2006), Four-Phase Model of Interest Development (Phases 2-4: maintained situational, emerging individual, and well-developed individual interest).
   - Note: Use 2.2 for momentary curiosity or trying something new. Use 2.3 when the youth sees the usefulness/relevance of learning. Use 6.3 for actual participation in outside activities.
   - Example: "Youth will discover a new passion for dance." OR "Participants will continue pursuing robotics after the program ends."
```

**domains:** add `{ code: "2.6 Sustained & Individual Interest", hint: "Lasting or self-owned interest (Hidi & Renninger phases 2-4). Momentary curiosity -> 2.2." }`.

**2.2 hint:** `"Phase 1 only: interest sparked in the moment. For lasting/deepening interest or a 'passion', use 2.6."`

## Sources

| Registry ID | Status | Component |
|---|---|---|
| hidi-renninger-2006 | verified | Phases 2–4 |
| eccles-expectancy-value | located (cycle-01b: PARTIAL; secondary source only; cite pinned to Wigfield & Eccles 2000) | Utility value |
| farrington-2012 | verified | "This work has value for me" |

## Verification requests

- Done in cycle-01b. The paper is pinned to Wigfield & Eccles (2000), but only a
  secondary definition could be fetched. Before approval, a human with journal
  access should confirm the utility-value definition in the paper itself.
- Use this 2.3 source text instead of the one above:
  `Wigfield & Eccles (2000), Expectancy-Value Theory (utility value); Farrington et al. (2012) academic mindset "This work has value for me."`

## Gold impact

- New proposed rows: G-034, G-035, G-036 (CF-014).
- Validation row 16 is expected to move from 2.2 to 2.6.
