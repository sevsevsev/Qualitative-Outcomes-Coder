# CP-01-09: Exclusionary discipline sits in 1.6 without a supporting source

> Code numbers in this proposal were updated to the v2.0.0 numbering by CP-04-08 (mechanical; see `renumbering/v1.2.0-to-v2.0.0.csv`).

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE (needs a human decision) |
| Codes touched | 1.6 (and possibly 4.2.1 / 8.7 hints) |
| Version bump | PATCH or MINOR, depending on the option chosen |
| Requirement served | R1, R3 (CF-020) |
| Status | **needs human decision (D4)** |
| Enum cost | +0 for options (a) and (b); +1 for (c) |

## Problem

1.6's definition includes "reduced exclusionary discipline (suspension/expulsion)".
Its cited source is the UChicago on-track indicator (Allensworth & Easton, 2005),
which measures **credits and course failures**. It does not cover discipline. So this
part of 1.6's scope has no source (STANDARDS S1.1).

Discipline-reduction outcomes are common, especially in school-based mental health,
restorative justice, and mentoring programs, so they need a sourced home.

## Options

- **(a) Keep it in 1.6 and find a source.** Suspension is reported as a school
  climate/status measure. Candidate leads for the verifier (not yet retrieved): the
  U.S. Dept. of Education Civil Rights Data Collection (CRDC) discipline measures,
  or ESSA state report-card requirements.
- **(b) Route by what drives it.** Reduced suspensions *for fighting* → 8.7. Reduced
  referrals *for disruptive behavior* → 4.2.1. This drops "exclusionary discipline"
  from 1.6. Downside: suspension is an administrative *status*, often reported
  without a stated cause.
- **(c) Add a new 1.10 "School Discipline & Exclusion"** (1.8 is now taken by CP-04-01), sourced to CRDC if it
  verifies. Cost: +1 enum.

**Recommendation: (a)**, if CRDC verifies. Discipline data is usually reported as a
status metric next to attendance and credits, and the procedure's "status or
attainment" step already points to Domain 1.

## Gold impact

G-048 and G-060. Both are held at `requires_cp=CP-01-09` until this is decided.
