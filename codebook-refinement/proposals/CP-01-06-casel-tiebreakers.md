# CP-01-06: Tie-breakers for leadership, growth mindset, peer pressure, and the unmapped CASEL skills

| Field | Value |
|---|---|
| Type | TIEBREAKER |
| Codes touched | hints on 3.1.4, 4.4, 3.4.2, 6.3, 8.5, 3.5.4, 3.3.1; rulesText tie-breaker 3; digital routing (CF-024) |
| Version bump | PATCH |
| Requirement served | R3 (CF-005, CF-015, CF-016, CF-024) |
| Status | draft |
| Enum cost | +0 |

**Atomicity note.** This CP bundles four tie-breakers because they share one root
cause: CASEL 2020 skills that have no subcategory. The judge may ask to split it. If
so, split along the CF IDs.

## Problem

1. **Growth mindset (CF-005).** Tie-breaker 3 sends *all* growth mindset to 3.1.4.
   But Farrington et al. (2012), the source Domain 4 is built on, lists "My ability
   and competence grow with my effort" as an *academic mindset*. As written, an
   academic growth-mindset outcome contradicts the domain's own source.
2. **Leadership (CF-015).** Three codes are plausible (6.3, 3.4.2, 8.5), and no rule
   picks between them.
   - In the live run, validation row 25 ("demonstrate leadership skills while leading
     a trail cleanup") was split into 6.3 + 6.2. That arguably breaks the
     "do not split off the means" rule.
   - CASEL puts "Showing leadership in groups" under Relationship Skills.
3. **CASEL skills with no subcode (CF-016).** Examples: "Resisting negative social
   pressure", "Understanding and expressing gratitude", "Standing up for the rights
   of others", "Demonstrating personal and collective agency". Coders route these
   inconsistently.
   - The live run put validation row 68 (resist peer pressure) in 3.5.4, which is
     reasonable, but no rule makes that decision repeatable.
4. **Digital (CF-024).** Online safety, access, and skills are spread over four
   domains, and no routing rule covers them.

## Change

**rulesText, tie-breaker 3**, before:

```
3. GENERAL vs. ACADEMIC CONFIDENCE:
   - Use 3.1.4 for general self-confidence or growth mindset.
   - Use 4.4 (Academic Confidence) ONLY for confidence specifically related to schoolwork/grades.
```

**rulesText, tie-breaker 3**, after:

```
3. GENERAL vs. ACADEMIC CONFIDENCE & MINDSET:
   - Use 3.1.4 for general self-confidence, or a growth mindset about challenges in general.
   - Use 4.4 for confidence OR growth mindset specifically about learning, intelligence, schoolwork, or grades (Farrington et al. 2012 academic mindsets: "I can succeed at this"; "My ability and competence grow with my effort").
```

**New rulesText tie-breakers 9–11:**

```
9. LEADERSHIP: 6.3 when youth influence decisions of a program, school, or community (councils, advisory boards, presenting to decision-makers). 3.4.2 when leading peers within a group task. 8.5 when framed as workplace readiness. Do not split "leadership while leading X" into two outcomes -- X is the activity.
10. CASEL SKILLS WITHOUT A DEDICATED CODE: resisting negative peer pressure -> 3.5.4; curiosity/open-mindedness -> 1.2; gratitude and recognizing strengths in others -> 3.3.1; standing up for others' rights -> 6.4 if framed around injustice/systems, else 3.5.2; initiative/personal agency -> 5.4 (Search Institute 'Personal power' is a Positive Identity asset; 6.3 if civic).
11. DIGITAL: safe/ethical online behavior -> 6.5; having a device or connectivity -> 9.1; coding or digital skills learned in general enrichment -> 11.3; industry certification -> 8.6.
```

**Hints:** update 3.1.4 and 4.4 to match tie-breaker 3. Add to 3.4.2: `"Includes leading peers within a group task (CASEL: 'Showing leadership in groups'); civic leadership -> 6.3."` Add to 3.5.4: `"Includes resisting negative peer pressure (refusal skills)."`

## Sources

| Registry ID | Status | Component |
|---|---|---|
| casel-2020 | verified | Relationship Skills: "Showing leadership in groups", "Resisting negative social pressure"; Self-Awareness: "Having a growth mindset"; Social Awareness: "Understanding and expressing gratitude" |
| farrington-2012 | verified | Academic mindsets |

## Gold impact

- New proposed rows: G-014, G-015, G-037 through G-041, G-054, G-055.
- Validation row 25 is expected to stop splitting.
