# CP-01-04: Add 2.6 Sustained & Individual Interest

> **Re-based onto codebook 2.1.0 (2026-09-25); applied on 2.3.0 as codebook 2.4.0 for testing.** Code numbers were produced by
> `map_cp_codes.py` from the v1.1.1 draft at commit dff8c4b (v1.1.1 -> v1.2.0 from
> git, then `renumbering/v1.2.0-to-v2.0.0.csv`). Translations: v1.1.1 1.2 -> 2.2,
> 1.3 -> 2.3, 1.5 -> 2.5, 5.3 -> 6.3, proposed 1.6 -> **2.6**. The v1.1.1 new code
> was 1.6, not 2.6, so it lands on 2.6, which is still free in 2.1.0. (3.6, now
> Social Capital & Networks, is not involved.) "Before" text is quoted from
> `codebooks/original.ts` 2.1.0.
>
> **S4.1 split.** The draft bundled an ADD_CODE with the 2.3 CITATION_FIX. This
> file is now the ADD_CODE only. The 2.3 citation fix is carried unchanged under
> "Split out" below and needs its own CP ID. That CP must land first or together
> with this one; see Dependency.

| Field | Value |
|---|---|
| Type | ADD_CODE |
| Codes touched | 2.6 (new); hint on 2.2; Domain 2 description |
| Version bump | MINOR |
| Requirement served | R2 breadth, R3 (CF-014) |
| Status | ready-to-test: applied on a draft PR for a preview run (not approved) |
| Enum cost | +1 (primary_subcategory). Footprint 146 -> 147. Test ceiling < 180; S2.3 stop line 165 |

## Problem

1. **Most of the interest model has no code.** 2.2 covers only phase 1 (triggered
   situational interest). The live run coded validation row 16, "Youth will discover
   a new passion for dance", to **2.2 at high confidence**. By the cited model, a
   *passion* is emerging individual interest. The model is doing what the codebook
   allows, and the codebook is missing the construct.
2. **Adjudicated evidence (new since the draft).** In `gold/gold-cycle02.csv`,
   Severin adjudicated S213 (the same statement) as 2.2 with the note "no good fit
   in the live codebook (codebook gap)". The coders' `codebook_issues` read:
   "Developed/individual interest (Hidi phase 2-4) has no clear subcategory."
3. **It is common across programs.** Sustained or deepened interest ("continue in
   STEM", "develop a lifelong love of reading", "pursue the arts beyond the
   program") is a core outcome for STEM, arts, and literacy programs.

## Why this is the smallest fit (STANDARDS S2.2)

- **An example or hint on 2.2** can't do it: 2.2's definition ("attention being
  caught... wanting to know more") and its source (Hidi & Renninger Phase 1) both
  exclude lasting interest. A hint that contradicts the definition would break S3.2.
- **Widening 2.2** would erase the triggered-vs-sustained distinction, and that
  distinction is the whole point of the four-phase model.
- **A hint on 6.3** doesn't work either: 6.3 is *participation* in outside
  activities, not interest.
- **Enum budget:** +1, which leaves the footprint at 146 (or 147 with CP-01-05),
  under the S2.3 stop line of 165. This cycle would add at most 2 subcategories
  (this CP and CP-01-05), within the 5-per-cycle limit.

## Change

**definitionsText**: new 2.6, added after 2.5 and before the blank line that
precedes `Domain 3.`.

Before (end of 2.5, unchanged):

```
2.5 Performance, Presentation & Artistic Response
   - Definition: Outcomes involving performing or presenting creative work publicly (exhibitions, recitals, portfolios), or responding to/analyzing art (critique, aesthetic analysis, connecting art to personal or cultural meaning).
   - Source Framework: National Core Arts Standards (Artistic Processes: Performing/Presenting/Producing, Responding, Connecting).
   - Note: Use 2.4 for the act of creating; use 2.5 for presenting/performing finished work or responding to art. A demonstrated skill or knowledge gain in the art form (technique, vocabulary) goes to 1.9.
   - Example: "Youth will present their artwork in a public exhibition."
```

After (the 2.5 block above, then):

```
2.6 Sustained & Individual Interest
   - Definition: Interest that persists, deepens, or becomes the youth's own -- returning to a topic or activity over time, pursuing it beyond the program, or describing it as a passion.
   - Source Framework: Hidi & Renninger (2006), Four-Phase Model of Interest Development (Phases 2-4: maintained situational, emerging individual, and well-developed individual interest).
   - Note: Use 2.2 for momentary curiosity or trying something new. Use 2.3 when the youth sees the usefulness/relevance of learning. Use 6.3 for actual participation in outside activities.
   - Example: "Youth will discover a new passion for dance." OR "Participants will continue pursuing robotics after the program ends."
```

**domains, Domain 2 subcategories.**

Before:

```ts
        { code: "2.1 Joy & Emotional Wellness" },
        { code: "2.2 Triggered Situational Interest (Curiosity)" },
        { code: "2.3 Value & Meaning (Utility Value)" },
```

After:

```ts
        { code: "2.1 Joy & Emotional Wellness" },
        {
          code: "2.2 Triggered Situational Interest (Curiosity)",
          hint: "Phase 1 only: interest sparked in the moment. For lasting/deepening interest or a 'passion', use 2.6.",
        },
        { code: "2.3 Value & Meaning (Utility Value)" },
```

Append after the 2.5 entry:

```ts
        {
          code: "2.6 Sustained & Individual Interest",
          hint: "Lasting or self-owned interest (Hidi & Renninger phases 2-4). Momentary curiosity -> 2.2.",
        },
```

**Domain 2 `description`.** This field is new since the draft (CP-06-01, 2.0.1). It
isn't sent to the model. CP-07-02 set the precedent of updating the description
when a code is added.

Before:

```
Outcomes about how young people feel about learning: enjoyment, curiosity, seeing learning as meaningful, and expressing themselves by creating, performing or responding to creative work.
```

After:

```
Outcomes about how young people feel about learning: enjoyment, curiosity, interest that lasts and becomes their own, seeing learning as meaningful, and expressing themselves by creating, performing or responding to creative work.
```

The Domain 2 `hint` stays as it is ("EXPERIENCES/STATES ... not skills").

**rulesText**: no change.

**CONFUSIONS.md**: CF-014 already exists. When this is applied:

- change the heading `· proposed (CP-01-04)` to `· active`;
- change `proposed **2.6 Sustained & Individual Interest**` on the Codes line to
  `**2.6 Sustained & Individual Interest**`.

The rule text is unchanged. The sync test's CF-pair check needs CF-014 to name both
2.2 and 2.6. It does.

**Registry** (`hidi-renninger-2006`, already `verified`; its excerpt names all four
phases). Add this support:

```json
{ "code": "2.6", "component": "Phases 2-4: maintained situational, emerging individual, and well-developed individual interest" }
```

Update `notes`: drop "Phases 2–4 currently have no subcategory." The existing 2.3
`unsupported` entry belongs to the split-out citation CP, not to this one.

**Consistency test** (`codebooks/consistency.test.ts`): add
`expect(domain2.subcategories.map(s => s.code)).toContain('2.6 Sustained & Individual Interest')`
and `expect(original.definitionsText).toContain('2.6 Sustained & Individual Interest')`,
following the 3.6 test. The version-pin test ("bumped the codebook version to 2.1.0")
changes at merge, when the version is bumped.

**Renumbering test.** This was found in the re-base by applying the CP to a scratch
copy. In `codebooks/renumbering.test.ts`, add `'2.6 Sustained & Individual Interest'`
to `ADDED_SINCE_2_0_0`. Without it, "lands on every current domain and subcategory
exactly once" fails, because the v1.2.0 -> v2.0.0 map has no row that lands on 2.6.
With this change, the full `npm test` (154 tests) and both typechecks passed on the
scratch copy, together with CP-01-05 and the split-out 2.3 fix.

### Dependency

This CP needs the split-out 2.3 citation fix to land first or in the same
release. Otherwise the codebook would cite Hidi & Renninger phases 3/4 for both 2.3
(utility value, which the verifier found unsupported) and 2.6.

### Split out: 2.3 CITATION_FIX (needs its own CP ID; content carried unchanged from the draft)

- **2.3** before:
  `   - Source Framework: Hidi & Renninger (Phase 3/4) / Eccles (Value Theory).`
- **2.3** after (this is the draft's own replacement text, from its "Verification
  requests" section):
  `   - Source Framework: Wigfield & Eccles (2000), Expectancy-Value Theory (utility value); Farrington et al. (2012) academic mindset "This work has value for me."`
- **Registry, needed so `sync.test.ts` passes.** This was not in the draft and was
  flagged during the re-base.
  - `farrington-2012` has no 2.3 support entry, and "Farrington et al." is not one
    of its `codebook_names`. Its verified excerpt does contain "This work has value
    for me." verbatim.
  - The CITATION_FIX CP must add
    `{ "code": "2.3", "component": "Academic Mindsets: 'This work has value for me.'" }`
    and add `"Farrington et al. (2012)"` to `codebook_names`.
  - It must also remove `hidi-renninger-2006`'s 2.3 `unsupported` entry, or point
    its `open_cp` at the new CP ID (the test requires `CP-\d{2}-\d{2}`).
- **Status.** `eccles-expectancy-value` is `located` (PARTIAL, secondary source
  only). Verification is pending: a human with journal access must confirm the
  utility-value definition in Wigfield & Eccles (2000) (S1.5).

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| hidi-renninger-2006 | verified | Phases 2–4 (2.6) |

The split-out 2.3 fix relies on `eccles-expectancy-value` (located, verification
pending) and `farrington-2012` (verified).

## Verification requests

None for 2.6. The split-out 2.3 fix still has the cycle-01b request open: confirm
utility value in the Wigfield & Eccles (2000) paper itself.

## Gold impact

- `gold/original.gold.csv` (all `proposed`): G-034 (2.2, unchanged), **G-035
  (2.6, alt 6.3)**, G-036 (2.3, unchanged). All three are in CF-014.
- `gold/gold-cycle02.csv` (adjudicated; its v1 columns use v2 numbers with v1.1.1
  meanings):
  - **S213** "discover a new passion for dance": 2.2 -> **2.6**. This is a
    correction: Severin marked it "no good fit in the live codebook (codebook
    gap)".
  - **S214** "continue pursuing robotics after the program ends, joining a school
    team": adjudicated **6.3** (agreed, bulk-accepted). This CP's 2.6 example is
    nearly this sentence, and G-035 expects 2.6. **NEEDS-HUMAN**: either accept the
    flip 6.3 -> 2.6 as a correction, or change the second 2.6 example so it doesn't
    name a school-team outcome that 6.3 covers.
  - Watch list (should not flip): S128 (2.2), S080 (2.2; Severin: gap, "try new
    activities" stays 2.2 per the 2.6 note), S115 (2.3). H007 ("interest in pursuing
    a career in a STEM field", 9.4 alt 2.3) could drift to 2.6.
- Validation row 16 is expected to move from 2.2 to 2.6.

## Judge result

Not run.
