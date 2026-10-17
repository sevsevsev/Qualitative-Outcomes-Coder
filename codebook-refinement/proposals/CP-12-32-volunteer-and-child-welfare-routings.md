# CP-12-32: Two routings: adult volunteers, and preventing entry into child welfare

**In plain words.** This change settles where two kinds of statement go. First, adult volunteers.
A volunteer learning a skill for the role stays in Staff & Volunteer Knowledge & Skills (A1.1).
A volunteer coming back to serve, or being satisfied with serving, goes to Workforce Stability &
Well-Being (A1.3), which so far covered only paid staff. A volunteer's own life outcomes, such as
feeling less isolated, take the Staff & Volunteer Capacity domain (A1) with no specific code.
Second, "preventing young people from entering the child welfare system" goes to the Family &
Caregiver Strengthening domain (F1) with no specific code, and no longer to Family Relationships
(Y3.4). Both routings change text the coding model reads, so neither ships until Severin has ruled
on the example statements written for each side and a test run has passed. Widening A1.3 to
volunteers is logged as a departure from its workplace sources (provisional id FD-unassigned (A1.3)). With the
volunteer departure A1.1 already has (FD-P36), it puts two of A1's three codes outside their
frameworks, so A1's anchor frameworks are reviewed again before any further change to that domain.

| Field | Value |
|---|---|
| Type | TIEBREAKER (two routings; the volunteer one is carried by widening A1.3's text, which counts as a deviation under the template's tie-breaker rule) |
| Codes touched | A1.3 (definition, include, exclude, useInstead; `fidelity`, `deviation`, `basis`). Y6.5 (exclude, useInstead). Y3.4 (exclude, useInstead). rulesText: the `mentors_volunteers` target-population line; the DOMAIN ONLY bullet, shared with CP-12-19. `CONFUSIONS.md`: CF-035, CF-036 (provisional ids). `DEVIATIONS.md`: FD-unassigned (A1.3) (provisional), A1 drift row. Domain hints follow from `useInstead`. No Source line, `frameworkBasis`, example or registry changes. |
| Version bump | MINOR (A1.3's definition widens; Y3.4's scope narrows), against the version current when applied |
| Requirement served | R3 tie-breakers |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options). **Blocked** on: (1) Severin adjudicating the proposed design rows P-27 to P-32 (volunteers) and P-41 to P-44 (child welfare) (G11); (2) the `codebook_gap` flag in exports (G9; an app change with no owner yet, as CP-12-19 notes); (3) for the volunteer arm only, landing after CP-12-10 (FD-P36) so A1 crosses the S4.9 line with this CP and not before. |
| Applied | Applied 2026-10-16 in 3.1.5: CF-035 and CF-036 only, marked "hint held". Waits for the gate: the A1.3, Y6.5 and Y3.4 text, the `mentors_volunteers` line, the DOMAIN ONLY bullet and the A1.3 deviation entry, after Severin adjudicates P-27 to P-32 and P-41 to P-44 (G11) and the `codebook_gap` flag exists (G9). |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new FD-unassigned (A1.3) (provisional id): A1.3, adapted, sector widening (workers → volunteers), counted. A1 drift 1/3 → 2/3, over the S4.9 line: the A1 anchor re-review starts when this CP lands. |

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G15 (volunteers: skills for the role → A1.1; retention or satisfaction with serving → A1.3; their own life outcomes → A1 domain-only) | The volunteer routing below, and the Y6.5 exclude G15 names. |
| G13 (prevention of youth entry into the child welfare system → F1 domain-only) | The Y3.4 exclude and useInstead below; CF-036. |
| G9 (domain-only may hold a specific result that has no code, with a `codebook_gap` flag) | Both domain-only routes are specific results with no code. They rely on CP-12-19's DOMAIN ONLY bullet, carried here too; proposed domain-only rows suggest `codebook_gap` = 1, which Severin sets on adjudication. |
| G11 (two adjudicated design rows per side before any hint or widening ships) | Blocked until Severin rules on P-27 to P-32 and P-41 to P-44 (`codebook-refinement/research-review/2026-10-16/full-review/proposed-design-rows.csv`). |
| G1, G3 | A1.3's sources (Surgeon General 2022, NIOSH WellBQ 2021, BLS JOLTS) are about workers. Writing volunteers into A1.3's own text names a sector outside them, so FD-unassigned (A1.3) opens. a1-08 (volunteer retention, PARTIAL) is narrower than the code, not broader, so it cannot avoid the FD (G3). |
| G7 (S4.9 as written) | FD-P36 (A1.1) + FD-unassigned (A1.3) (A1.3) = 2 of 3 A1 codes: more than a third. The A1 anchor is re-reviewed (keep, replace or split) before any further A1 change, including CP-09-05's A1.3 staffing widening (held under G16). |
| G12 (review-desk correction of the DHS truancy template) | Not part of this CP. The 12 real-run rows are corrected at the review desk now; this CP makes the prompt agree later. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| CF-035 and CF-036 in `CONFUSIONS.md`, marked "hint held" | no | now, so reviewers apply G13 and G15 (as CP-12-15 does for CF-029 and CF-030) |
| FD-unassigned (A1.3) in `DEVIATIONS.md`, A1.3 `fidelity`/`deviation`/`basis` | no | with the A1.3 text below, not before (an FD records text that exists) |
| A1.3 definition, include, exclude, useInstead; Y6.5 exclude, useInstead; `mentors_volunteers` line | yes | after P-27 to P-32 are adjudicated (G11), then this CP's own two-run gate |
| Y3.4 exclude, useInstead | yes | after P-41 to P-44 are adjudicated (G11), in the same gate |
| DOMAIN ONLY bullet | yes | with whichever of CP-12-19 and this CP ships first |

**Shared rows (whichever lands first applies them; the other drops the rows).** CP-12-19 drafts the
DOMAIN ONLY bullet below word for word; whichever of CP-12-19 and CP-12-32 lands first applies it;
the other drops the row. CP-12-15 or CP-12-31 creates the "Codebook 3.x tie-breakers" section and its
test scoping; this CP only appends entries. CF ids are provisional (CP-12-15: P01, P02; CP-12-31:
P03; this CP: P04, P05; CP-12-27: P06 to P09) and are renumbered at merge.

## Problem

1. **Volunteers (G15).** A1.1 names volunteers, but A1.3 covers only "Staff retention and turnover,
   and staff well-being", and the `mentors_volunteers` line in rulesText says volunteer outcomes
   "code to Part A, A1.1 or A1.2". A statement about volunteers returning or being satisfied with
   serving (P-29 "Bigs live with a sense of satisfaction in positively contributing to their Little’s
   development", a logic-model queue row) has no code, and a volunteer's own life outcome (P-31
   "Increased number of tutors remaining in the education field after service") has none either.
   Batches 2, 3 and 4 disagreed on these (B3-9, B4-7, B2 R-21); G15 chose P's rule.
2. **Child welfare (G13).** The DHS "Truancy Provider" template outcome "prevention of youth entry
   into the formal child welfare system" appears in 8 programs; the live run coded it Y3.4, F1.1
   and F2.3, and it is 9 of Y3.4's 10 rows in that run (SUMMARY, "The DHS truancy template"). Y3.4 is
   the young person's own relationship with family, which the template does not name.

## Change: codebook text (`codebooks/youthOutcomesV3.data.ts`)

### A1.3 Workforce Stability & Well-Being (volunteer arm)

| Field | Before | After |
|---|---|---|
| definition | `Staff retention and turnover, and staff well-being.` | `Staff and volunteer retention and turnover, staff well-being, and volunteers' satisfaction with serving.` |
| include | `Turnover rates; retention; burnout.` | `Turnover rates; retention; burnout; volunteers returning to serve; volunteers' satisfaction with their service.` |
| exclude | `Staff learning.` | `Staff learning; a volunteer's own life outcomes outside the role (Domain A1, subcategory none).` |
| useInstead | `A1.1.` | `A1.1; Domain A1 (subcategory none) for a volunteer's own life outcomes.` |
| fidelity | `"framework"` | `"adapted"` |
| deviation | (absent) | `"FD-unassigned (A1.3)"` (provisional), after `fidelity` |
| basis | (current text) | current text, then: ` Volunteers (retention, satisfaction with serving): no A1.3 source names volunteers; adapted, FD-unassigned (A1.3) (decision G15).` |

A1.1 and A1.2 are unchanged: A1.1 already names volunteers and their "understanding" (FD-P36),
which covers skills for the role.

### Y6.5 Community Service & Action (volunteer arm)

| Field | Before | After |
|---|---|---|
| exclude | `Small daily help in the program; environmental action; civic advocacy aimed at decision-makers.` | `Small daily help in the program; environmental action; civic advocacy aimed at decision-makers; adults' volunteering.` |
| useInstead | `Y4.11; Y6.6; Y6.4.` | `Y4.11; Y6.6; Y6.4; A1.1 or A1.3 for adult volunteers.` |

### Y3.4 Family Relationships (child-welfare arm)

| Field | Before | After |
|---|---|---|
| exclude | `Parenting practices (the parent is the subject); housing.` | `Parenting practices (the parent is the subject); housing; preventing a young person's entry into the child welfare system.` |
| useInstead | `F1.1 when parents are the subject ('parents will communicate better with their children'); F2.3 housing.` | `F1.1 when parents are the subject ('parents will communicate better with their children'); F2.3 housing; Domain F1 (subcategory none) for preventing entry into the child welfare system.` |

Reunification stays in Y3.4's include ("Reunification; rebuilding trust with family"), so S024 and
S070 do not move (P-43 and P-44 test exactly this).

F1.1 and F2.3 are not edited: the pointer sits on Y3.4, the code that drew 9 of the 12 template rows,
and the DOMAIN ONLY bullet sends the result to F1.

### Domain hints

Generated from `useInstead`: A1's hint gains the A1.3 line, Y6's the Y6.5 line, Y3's the Y3.4 line.

## Change: rulesText (`codebooks/youthOutcomesV3.ts`)

**Target population, `mentors_volunteers` (line 105)**, before:

```
     - Use "mentors_volunteers" for outcomes about volunteers, mentors, or coaches specifically (these code to Part A, A1.1 or A1.2).
```

After:

```
     - Use "mentors_volunteers" for outcomes about volunteers, mentors, or coaches specifically (these code to Part A: A1.1 or A1.2 for skills for the role and using them, A1.3 for staying in the role or satisfaction with serving, Domain A1 with subcategory none for their own life outcomes outside the role).
```

**DOMAIN ONLY bullet** (CP-12-19's text; whichever lands first applies it), appended after the
bullet "A code whose definition already covers the general case keeps it: ...":

```
     - A specific result that a code's Exclude or Use instead line sends to the domain with subcategory none also takes the domain-only code ("improved community health" -> Domain A3).
```

No numbered rule changes. Rule 1 (who changes decides the part) already sends volunteers to Part A.

## Change: `CONFUSIONS.md` (lands now, in the "Codebook 3.x tie-breakers" section)

```markdown
### CF-035: Adult volunteers: role skill, staying, or their own life? · hint held (CP-12-32, decision G15)

**Codes:** **A1.1** · A1.3 · Y6.5

**Rule:**

- A volunteer, mentor or coach gaining knowledge or a skill for the role → **A1.1**; applying it in the role → A1.2.
- A volunteer returning to serve, staying in the role, or satisfied with serving → **A1.3** (FD-unassigned (A1.3)).
- A volunteer's own life outcomes outside the role (well-being, isolation, career path) → **Domain A1, subcategory none**, with `codebook_gap` = 1 in gold.
- Young people doing service → **Y6.5**; adults volunteering are Part A (rule 1).

**Rationale:** Guskey (2002) Level 2 grounds learning for the role (A1.1, with FD-P36 for the volunteer sector). A1.3's sources (Surgeon General 2022, NIOSH WellBQ 2021, BLS JOLTS) measure a workforce's stability and well-being; volunteers are added as a logged widening (FD-unassigned (A1.3)). Outcomes for the volunteer as a person have no A1 code and stay at the domain (decision G9).

**Gold:** S083, S244, S146 (A1.1); S149 (A1.3); S005, S184 (Y6.5).
```

```markdown
### CF-036: Preventing entry into child welfare · hint held (CP-12-32, decision G13)

**Codes:** **Y3.4** · F1.1 · F2.3

**Rule:**

- Preventing a young person's entry into the child welfare system, with no family result named → **Domain F1, subcategory none**, with `codebook_gap` = 1 in gold.
- A young person's own relationship with family, including reunification after care → **Y3.4**.
- Parents' practices or knowledge named → **F1.1**; housing named → **F2.3**.

**Rationale:** The outcome is about the family staying out of the system, so it belongs to the family domain (F1) by rule 1, but it names no parenting practice, protective factor or partnership that an F1 code covers. Y3.4's sources (Search Institute Support assets, Developmental Relationships with parents) describe the youth's relationship, which the template does not name.

**Gold:** S024, S070 (Y3.4); S053, H068 (F1.1); S029 (F2.3).
```

Each **Gold:** line lists adjudicated design rows only; every listed code has at least one, as the
3.x CF test (CP-12-15) requires. The domain-only sides have no adjudicated row yet: they are what
P-31, P-32, P-41 and P-42 are for. When the hint text ships, "hint held" becomes the version that
carries it, and the adjudicated proposed rows are added to the **Gold:** lines.

## Change: `DEVIATIONS.md` (with the A1.3 text, not before)

New entry (before: none):

```markdown
### FD-unassigned (A1.3) · A1.3

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** U.S. Surgeon General (2022), Framework for Workplace Mental Health & Well-Being; NIOSH WellBQ (2021); BLS Job Openings and Labor Turnover Survey (all verified).
- **Departs:** all three anchors describe paid workers. A1.3's definition and include name volunteers' retention, return to service and satisfaction with serving (decision G15).
- **Evidence:** the A1.3 volunteer rows Severin adjudicates from the proposed design rows (P-29, P-30; gold ids filled in on adjudication). Adjudicated S149 (staff turnover) is the workforce side and does not move.
- **Alternative considered:** citing Spinney & Clinton (2024), ICF for AmeriCorps, volunteer retention (claim a1-08, PARTIAL: "positively associated with retention and other positive volunteer outcomes"), rejected in CP-12-10 because it is a literature-review finding that is narrower than the code (G3); routing volunteer retention to A1 domain-only (rejected by G15).
- **Decided in:** CP-12-32 (2026-10-16 research review; decisions G15, G1, G3 settled by Severin 2026-10-16). Provisional id.
- **Revisit:** in the A1 anchor re-review this entry starts (S4.9), with FD-P36.
```

Drift table, A1 row: `1 / 3` (FD-P36) → `2 / 3` (FD-P36, FD-unassigned (A1.3)), marked "over the line: anchor
re-review (S4.9)". The re-review is the next A1 change; CP-09-05 (A1.3 staffing, held under G16)
waits for it.

## Change: registry and tests

- Registry: unchanged. No source is added or removed; FD-unassigned (A1.3) records the gap.
- Tests: the 3.x CF test (CP-12-15) checks CF-035 and CF-036. `deviations.test.ts` checks that
  FD-unassigned (A1.3) is open, is cited by A1.3's `deviation` field, and has the same fidelity (`adapted`).

## Sources

No new citations.

| Registry ID | Status | Component relied on |
|---|---|---|
| guskey-2002-pd-evaluation | verified, direct (A1.1) | Level 2 participants' learning |
| surgeon-general-2022-workplace-wellbeing, niosh-wellbq-2021, bls-jolts-definitions | verified (A1.3) | workplace well-being and turnover (anchor of FD-unassigned (A1.3)) |
| search-40-assets, search-developmental-relationships | verified (Y3.4) | Support assets; relationships with parents |

## Verification requests

None.

## Gate

Its own two-run design-set gate, after the shared Source-line gate (so its baseline includes
CP-12-16, CP-12-29 and the others) and after CP-12-19's prompt part if that ships first.

- Rows that must not move: S083, S244, S146, S142, S043, H014 (A1.1); S149 (A1.3); S005, S184,
  S076, S110, S226 (Y6.5); S024, S070 (Y3.4); S053, H068, S135 (F1.1); S029 (F2.3); G-D01 to G-D10
  (domain-only, CP-09-09). S244 ("Tutors (college volunteers) will strengthen their own
  communication and mentoring skills through the experience") is the closest call: mentoring skills
  are a skill for the role, so it stays A1.1.
- Rows expected to move: none of the adjudicated rows. The proposed rows, once adjudicated, should
  land as Severin rules.

## Gold impact

- Rows expected to change code: none.
- Proposed rows this CP rests on (already in the shared file; `status=proposed`; Severin
  adjudicates; no agent adds them to gold or marks them adjudicated):
  - Volunteers: P-27, P-28 (A1.1); P-29, P-30 (A1.3); P-31, P-32 (A1 domain-only).
  - Child welfare: P-41, P-42 (F1 domain-only); P-43, P-44 (Y3.4).
- New proposed rows: none beyond those.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read.

## Judge result

Filled in by `codebook-regression-judge` after its gate.
