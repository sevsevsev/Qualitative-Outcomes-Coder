# CP-09-03: College campus visits go to Y7.2

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | Y7.1 (narrowed), Y7.2 (widened) |
| Version bump | MINOR (batched in 3.1.0) |
| Requirement served | R3 tie-breakers |
| Status | ready-to-test; applied as candidate 3.2.0 on 2026-10-08 under Severin's delegation ("I defer to you on these"); awaits the live design-set gate |
| Enum cost | +0 (160) |
| Framework deviation | none if EC-02 is verified (college visits sit inside Conley's Key Transition Knowledge & Skills). If it fails, this CP is withdrawn rather than logged as a deviation. |

## Problem

S188 "Students will visit at least three college campuses before senior year." Gold Y7.2
(Severin). Y7.1's definition names "workplace and campus visits" and its include line names
"college visits", so the app chose Y7.1 (high) in both 3.0 runs (design-set miss).

## Change

**Y7.1** definition, before: `Learning about careers and pathways, interest inventories, workplace and campus visits, and interest in or aspiration toward a career field.`
after: `Learning about careers and pathways, interest inventories, workplace visits and job shadowing, and interest in or aspiration toward a career field.`
Include, before: `Researching careers; exploring pathways; interest in a STEM career; college visits.`
after: `Researching careers; exploring pathways; interest in a STEM career; workplace visits.`
Exclude, add: `college visits and college-going steps (Y7.2).`

**Y7.2** include, before: `FAFSA completion; college applications; comparing aid letters; resume writing.`
after: `College campus visits and college fairs; FAFSA completion; college applications; comparing aid letters; resume writing.`

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| Conley, Four Keys | verified | Key Transition Knowledge & Skills (verified 2026-09-27 as `conley-four-keys` on Y7.2; covers knowledge of postsecondary options and the college-going process) |

## Verification requests

- EC-02: Conley, Four Keys to College and Career Readiness, Key Transition Knowledge & Skills;
  claimed component: knowledge of postsecondary options and the admissions and financial-aid
  process. The first fetch attempt stalled on permission prompts; URL list is in the thread
  reply. The verifier must be an agent that did not see this CP.

## Gold impact

- Now matches: S188 (design).
- Must not flip: S097, S152, H007, N046, N062 (Y7.1: career fields, not campuses).

## Judge result

Pending.
