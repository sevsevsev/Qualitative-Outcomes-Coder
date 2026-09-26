# CP-01-06: Tie-breakers for leadership, growth mindset, peer pressure, and the unmapped CASEL skills

> **Re-based onto codebook 2.1.0 (2026-09-25).** Code numbers were produced by
> `map_cp_codes.py` from the v1.1.1 draft at commit dff8c4b. Translations: 3.1.4 ->
> 4.1.4, 4.4 -> 5.4, 3.4.2 -> 4.4.2, 6.3 -> 7.3, 6.2 -> 7.2, 8.5 -> 9.5, 3.5.4 ->
> 4.5.4, 3.3.1 -> 4.3.1, 1.2 -> 2.2, 6.4 -> 7.4, 3.5.2 -> 4.5.2, 5.4 -> 6.4, 6.5 ->
> 7.5, 9.1 -> 10.1, 8.6 -> 9.6, "Domain 4" -> "Domain 5".
>
> **Flag: v1.1.1 11.3 is not one-to-one.** v1.2.0 (CP-04-01) split it by subject
> into 1.3, 1.8, and 1.9. The script refuses to map it. The working-tree copy of
> this CP says "-> 1.3" because CP-04-08's CSV pass mapped 11.3 -> 1.3 blindly.
> That contradicts CF-024, which CP-04-01 amended to 1.8. It also contradicts the
> live 1.8 definition ("computer science (computing concepts, coding, programming)")
> and the re-import rule (`bySubjectArea`: Computer Science & Technology -> 1.8).
> CONFUSIONS.md wins (S3.2), so the rule below says **1.8**. This is resolved from
> documented rules, not guessed; a human should confirm.
>
> **Applied as codebook 2.5.1 (2026-09-26).** Rules 8 (mobility), 9 (financial
> capability) and 10 (safety, CP-01-07) are taken, so this CP's tie-breakers are
> **11–13** in the live prompt. The "10–12" numbering below is superseded.
>
> **Other conflicts found in the re-base:**
> - **Rule numbers.** Rule 8 is taken (CP-07-01) and CP-01-05 takes 9, so this CP's
>   draft tie-breakers 9–11 become **10–12**. If CP-01-05 isn't applied first, use
>   9–11.
> - **Digital routing is partly done already.** CP-04-01's 1.8 note and hint already
>   route safe tech use to 7.5.
> - **Leadership conflicts with an adjudicated row.** See Gold impact, S004.

| Field | Value |
|---|---|
| Type | TIEBREAKER |
| Codes touched | rulesText tie-breaker 3 and new 10–12; hints on 4.1.4, 5.4, 4.4.2, 4.5.4; definitionsText note on 4.1.4 |
| Version bump | PATCH |
| Requirement served | R3 (CF-005, CF-015, CF-016, CF-024) |
| Status | testing (codebook 2.5.1, preview runs pending) |
| Enum cost | +0 |

**Atomicity note.** This CP bundles four tie-breakers because they share one root
cause: CASEL 2020 skills that have no subcategory. They are all one kind of change
(TIEBREAKER), so S4.1 is met. The judge may still ask to split them along the CF
IDs.

## Problem

1. **Growth mindset (CF-005).** Tie-breaker 3 sends *all* growth mindset to 4.1.4.
   But Farrington et al. (2012), the source Domain 5 is built on, lists "My ability
   and competence grow with my effort" as an *academic mindset*. As written, an
   academic growth-mindset outcome contradicts the domain's own source.
2. **Leadership (CF-015).** Three codes are plausible (7.3, 4.4.2, 9.5), and no rule
   picks between them.
   - In the live run, validation row 25 ("demonstrate leadership skills while leading
     a trail cleanup") was split into 7.3 + 7.2. That arguably breaks the
     "do not split off the means" rule.
   - CASEL puts "Showing leadership in groups" under Relationship Skills.
   - Adjudicated gold (new since the draft): S004 was contested (coder A 7.3, coder
     B 4.4.2). Severin picked 7.3.
3. **CASEL skills with no subcode (CF-016).** Examples: "Resisting negative social
   pressure", "Understanding and expressing gratitude", "Standing up for the rights
   of others", "Demonstrating personal and collective agency". Coders route these
   inconsistently.
   - The live run put validation row 68 (resist peer pressure) in 4.5.4, which is
     reasonable, but no rule makes that decision repeatable.
   - Gratitude: Severin marked S242 "no good fit (codebook gap)".
4. **Digital (CF-024).** Online safety, access, and skills are spread over four
   domains, and no single routing rule covers them.

## Change

**rulesText, tie-breaker 3.**

Before (matches 2.1.0 exactly):

```
3. GENERAL vs. ACADEMIC CONFIDENCE:
   - Use 4.1.4 for general self-confidence or growth mindset.
   - Use 5.4 (Academic Confidence) ONLY for confidence specifically related to schoolwork/grades.
```

After:

```
3. GENERAL vs. ACADEMIC CONFIDENCE & MINDSET:
   - Use 4.1.4 for general self-confidence, or a growth mindset about challenges in general.
   - Use 5.4 for confidence OR growth mindset specifically about learning, intelligence, schoolwork, or grades (Farrington et al. 2012 academic mindsets: "I can succeed at this"; "My ability and competence grow with my effort").
```

**New rulesText tie-breakers 10–12** (draft numbers 9–11). Insert after the last
numbered tie-breaker (rule 9 if CP-01-05 is applied; otherwise rule 8), before
`CRITICAL for Formatting:`.

```
10. LEADERSHIP: 7.3 when youth influence decisions of a program, school, or community (councils, advisory boards, presenting to decision-makers). 4.4.2 when leading peers within a group task. 9.5 when framed as workplace readiness. Do not split "leadership while leading X" into two outcomes -- X is the activity.
11. CASEL SKILLS WITHOUT A DEDICATED CODE: resisting negative peer pressure -> 4.5.4; curiosity/open-mindedness -> 2.2; gratitude and recognizing strengths in others -> 4.3.1; standing up for others' rights -> 7.4 if framed around injustice/systems, else 4.5.2; initiative/personal agency -> 6.4 (Search Institute 'Personal power' is a Positive Identity asset; 7.3 if civic).
12. DIGITAL: safe/ethical online behavior -> 7.5; having a device or connectivity -> 10.1; coding or digital skills learned in general enrichment -> 1.8; industry certification -> 9.6.
```

(Rule 12's "1.8" is the flagged 11.3 split; see the note at the top.)

**Hints.** The draft said "update 4.1.4 and 5.4 to match tie-breaker 3" but gave no
wording. The wording below was supplied in the re-base, so check it.

4.1.4, before:

```
vs 5.4 (Academic Confidence): use 4.1.4 for general self-confidence/growth mindset; use 5.4 only when tied specifically to schoolwork/grades. vs 6.4: use 6.4 for broader identity/purpose not primarily about confidence.
```

4.1.4, after:

```
vs 5.4 (Academic Confidence): use 4.1.4 for general self-confidence or a growth mindset about challenges in general; use 5.4 for confidence or growth mindset specifically about learning, intelligence, schoolwork or grades. vs 6.4: use 6.4 for broader identity/purpose not primarily about confidence.
```

5.4, before:

```
vs 4.1.4 (general Confidence): use 5.4 ONLY for confidence specifically about schoolwork/grades.
```

5.4, after:

```
vs 4.1.4 (general Confidence): use 5.4 ONLY for confidence or growth mindset specifically about learning, intelligence, schoolwork or grades.
```

4.4.2, before:

```
Focus is on the skill of working together. For friendship/bonding, use 3.3 (Peer Connection) instead.
```

4.4.2, after (the draft's added sentence, appended):

```
Focus is on the skill of working together. For friendship/bonding, use 3.3 (Peer Connection) instead. Includes leading peers within a group task (CASEL: 'Showing leadership in groups'); civic leadership -> 7.3.
```

4.5.4 has no hint today. Before: `{ code: "4.5.4 Safety-oriented decisions & risk avoidance" },`

After:

```ts
        {
          code: "4.5.4 Safety-oriented decisions & risk avoidance",
          hint: "Includes resisting negative peer pressure (refusal skills).",
        },
```

The draft's "Codes touched" also listed hints on 7.3, 9.5, and 4.3.1, but gave no
text for them. The new rules refer to those codes, and their hints are left
unchanged. The sync test's CF-pair check: 4.4.2 -> 7.3 is covered by CF-015, and
4.1.4 <-> 5.4 by CF-004 and CF-005.

**definitionsText, 4.1.4 note.** Added in the re-base so the prompt doesn't
contradict the new tie-breaker 3 (S3.2).

Before:

```
   - Note: Use 4.1.4 for general self-confidence/growth mindset and for identity-adjacent "sense of purpose/self-esteem" language that is really about self-belief. Use 5.4 only when tied specifically to schoolwork/grades. Use 6.4 only for broader identity/purpose that is not primarily about confidence or self-belief.
```

After:

```
   - Note: Use 4.1.4 for general self-confidence, a growth mindset about challenges in general, and identity-adjacent "sense of purpose/self-esteem" language that is really about self-belief. Use 5.4 when the confidence or growth mindset is tied specifically to learning, intelligence, schoolwork or grades. Use 6.4 only for broader identity/purpose that is not primarily about confidence or self-belief.
```

**CONFUSIONS.md.**

- CF-005 heading: `· proposed amendment (CP-01-06)` -> `· active`.
- CF-015, CF-016, CF-024 headings: `· proposed (CP-01-06)` or `· proposed
  clarification (CP-01-06)` -> `· active`.
- The rule text in all four already matches this CP, including CF-024's 1.8 and
  CF-016's routing of agency to 6.4. No wording change is needed.

**Registry**: no change in this CP. See Verification requests.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| casel-2020 | verified (source level; component excerpts missing, see below) | Relationship Skills: "Showing leadership in groups", "Resisting negative social pressure"; Self-Awareness: "Having a growth mindset"; Social Awareness: "Understanding and expressing gratitude" |
| farrington-2012 | verified | Academic mindsets: "I can succeed at this"; "My ability and competence grow with my effort" (both in the recorded excerpt) |
| search-40-assets | located (verification pending for 'Personal power' under Positive Identity) | Rule 11's "Search Institute 'Personal power'". The draft omitted this row, but the rule names the source. |

## Verification requests

Flagged in the re-base. These are components of sources already in the registry,
not new sources.

- **casel-2020.** The recorded excerpt covers only the Self-Management list, and
  `supports` has no entry for "Showing leadership in groups", "Resisting negative
  social pressure", or "Understanding and expressing gratitude". The 4.4.2 hint
  quotes the first of these. The request:
  `{claim: "CASEL 2020 lists 'Showing leadership in groups' and 'Resisting negative social pressure' under Relationship Skills, and 'Understanding and expressing gratitude' under Social Awareness", cite_as: casel-2020.cite_as, url: casel-2020.url}`.
- **search-40-assets.** Record a verbatim excerpt showing 'Personal power' under
  Positive Identity. So far only the verifier's note says so.

## Gold impact

- `gold/original.gold.csv` (all `proposed`):
  - CF-005: G-014 (5.4), G-015 (4.1.4).
  - CF-015: G-037 (7.3), G-038 (4.4.2), G-039 (9.5).
  - CF-016: G-040 (4.5.4), G-041 (4.3.1).
  - CF-024: G-054 (7.5), G-055 (10.1), G-070 (1.8).
- `gold/gold-cycle02.csv` (adjudicated). Expected flips, named per S4.4:
  - **S004** "take turns leading their small group during project work": adjudicated
    **7.3** after a contested vote. Rule 10 sends it to 4.4.2. This is the same
    statement as G-038. **NEEDS-HUMAN**: Severin's adjudication is direct evidence
    against CF-015's group-leadership route. Either Severin confirms the flip, or
    CF-015 and rule 10 change.
  - **S059** "leadership skills while leading a trail cleanup for the community"
    (7.3) and **H032** "leadership in group decision-making" on an expedition (7.3,
    alt 4.4.2) are likely to move to 4.4.2 under rule 10. **NEEDS-HUMAN**, same
    question.
  - **S082** "express gratitude" (6.2, forced) and **S242** "practice gratitude"
    (6.2; Severin: codebook gap) -> 4.3.1 under rule 11. S242 is a correction by
    Severin's note. S082 needs confirmation.
- Should not change: S052 and S172 (4.5.4), S243 (4.1.4), S253 (9.5), S107 and S215
  (7.5), S196 and S240 (10.1), S020 (9.6).
- **S232** (coding) and **H077** (digital literacy) are 1.3 in the v1 columns. That
  is the old broad 11.3, which the CP-04-01 subject route sends to 1.8. Score them
  as 1.8 under live meanings; they are not flips caused by this CP. **S206**
  (caregiver digital literacy, 7.5) could be pulled toward 1.8 by rule 12. Watch it.
- Validation row 25 is expected to stop splitting.

## Judge result

Not run.
