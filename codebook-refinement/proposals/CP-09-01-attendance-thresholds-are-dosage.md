# CP-09-01: Attendance thresholds are dosage

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | A2.5 (widened), Y2.6 and F1.9 (narrowed), rulesText rule 2 ("HOW TO CHOOSE A CODE") |
| Version bump | MINOR (3.0.0 → 3.1.0, batched with the other CP-09 changes) |
| Requirement served | R3 tie-breakers |
| Status | draft |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. F1.9 moves closer to its anchor (Epstein Type 3 Volunteering, Type 5 Decision Making); A2.5 stays inside the logic-model Outputs component it cites. |

## Problem

3.0 sends a per-person attendance threshold to the participant (Y2.6, or F1.9 for families).
Severin's adjudications send it to A2.5 every time, and keep Y2.6 for a young person's choice.
Evidence: `edge-cases/edge-case-review-2026-09-26.md` P1.

- S127 "Parents will attend at least 4 family workshops during the program year." Gold A2.5;
  F1.9's include line says "attending workshops (per-family thresholds)"; the app chose F1.9 in
  both 3.0 runs (design-set miss).
- H080 (weekly youth group attendance) gold A2.5; H001, S047 gold A2.5.
- N034 "Young people will be engaged year-round" gold A2.5; app Y2.6 in both runs
  (fresh held-out miss; corroborating only).
- Kept as Y2.6 by Severin: S003 (return for a second year), N076 (return visits), N100
  (other STEM programs), N048 (theatre activities).
- Probe E066: both blind coders chose F1.9 for "attend family workshops" because the text says so.

## Change

**rulesText rule 2, before:**

```
2. OUTPUT OR OUTCOME. Program-level counts, rates and dosage ("served 300", "85% average daily attendance", "mentors completed 6 hours of training") -> A2.5. A per-person threshold framed as a young person's choice ("each youth will return") -> Y2.6, or F1.9 for families. A specific student's school attendance -> Y1.13.
```

**after:**

```
2. OUTPUT OR OUTCOME. Attendance and dosage in this program -> A2.5, whether counted for the program ("served 300", "85% average daily attendance", "mentors completed 6 hours of training") or set as a per-person threshold ("attended at least 30 sessions", "parents will attend 4 workshops", "engaged year-round"). A young person's choice to return, join, or take part in activities beyond the program ("will return for a second year", "joined a sports team") -> Y2.6. Families volunteering or taking part in decisions -> F1.9. A specific student's school attendance -> Y1.13.
```

**Y2.6** include, before: `Returning for another year; joining a team or club; participating fully alongside peers; per-person participation thresholds.`
after: `Returning for another year; joining a team or club; taking part in activities outside the program.`
(The "participating fully alongside peers" phrase is removed by CP-09-02; if CP-09-02 is
rejected, keep it.) Exclude, after: `Attendance or dosage in the program, counted or per person; the program's accommodations.`

**F1.9** definition, before: `Families attending, volunteering or taking part in program or school decisions.`
after: `Families volunteering, leading family activities, or taking part in program or school decisions.`
Include, before: `Serving on advisory councils; attending workshops (per-family thresholds); volunteering.`
after: `Serving on advisory councils; volunteering; leading or co-hosting family events.`
Exclude, after: `Family attendance at workshops or events, counted or per family; the organization creating structures.`

**A2.5** include, before: `Number served; average daily attendance; match duration; sessions delivered; applications submitted by staff.`
after: `Number served; average daily attendance; per-person attendance thresholds (sessions, workshops); match duration; sessions delivered; applications submitted by staff.`

## Why this is the smallest fit (S2.2)

A hint would contradict the include lines, which say the opposite; the include lines and rule 2
have to change together. No code is added.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| (A2.5) UW-Madison Extension (2020) logic model | verified | Outputs: participation |
| (F1.9) Epstein Six Types | located | Type 3 Volunteering; Type 5 Decision Making |

## Verification requests

None.

## Gold impact

- Now matches: S127 (design), N034 (held-out; spends that row).
- Rows at risk: N013 "Increased engagement in sessions and completion of self-reflection
  exercises" (gold Y2.6) reads as engagement quality, not attendance, and should stay Y2.6;
  watch it in the run.
- No adjudicated row is expected to flip.

## Judge result

Pending.
