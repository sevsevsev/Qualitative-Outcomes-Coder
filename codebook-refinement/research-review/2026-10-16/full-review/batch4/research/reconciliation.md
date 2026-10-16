# Batch 4 reconciliation: A1, A2, A3 (2026-10-16)

Inputs: a1, a2 and a3 findings and claims; batch1-3 findings and reconciliations for cross-domain
items; CP-09-01..08 (PR #62), CP-10-01 and CP-11-01..03; the registry `supports` rows for shared
sources; DEVIATIONS.md. Nothing is decided here. `claims-reconciled.json` holds all 28 batch-4
claims (a1 8, a2 14, a3 6). No two rows share code, component and URL, so `merged-ids.json` is an
empty map. One row was edited: a3-06's `code` was "A3 (new code candidate: school climate)" and is
now "A3" (see R-17). No cite_as or claimed_component carried fit or caveat wording.

## Held-out gold IDs

- **R-01. Drop [held-out row].** a1-findings section 4 quotes CP-09-05's protected held-out row [held-out row] ("fully
  staffed libraries, A1.3") as evidence for widening A1.3. It must be dropped from any review,
  verifier or CP text that comes out of this batch. No other N### appears. The other IDs cited (a2:
  H001, H002, H058, S001, S041, S098, S113; a3: S019, S101, S154) are all in the design file and
  adjudicated (H### = old pre-3.0 held-out, now design).

## Conflicts

- **R-02. Senior volunteers' quality of life: A1.3 or Part F** (carried from batch2 R-21, batch3
  R-07/R-20). a1: "Improve quality of life of senior volunteers" is arguably a Part F outcome; needs
  a tie-breaker. batch3 f2: volunteers as workforce → A1.1/A1.3; a non-caregiver adult's own civic
  volunteering stays domain-only or uncoded. batch2 y6: Part F or A, never Y6. All three agree Y6.5
  takes no adults. Open: whether senior volunteers' well-being is workforce (A1.3) or participant
  (F). Today the real run coded it A1.3.
- **R-03. Volunteers in A1.3: include or not.** a1 proposes an A1.3 include for volunteer retention
  backed by Spinney & Clinton (2024), ICF for AmeriCorps (a1-08, tier C literature review). f2
  flagged that A1.3's sources name workers, not volunteers ("a possible small go-beyond"). a1-08
  answers f2's point only if accepted; otherwise a volunteer include would be a new sector
  widening (see R-21). f2-11 (AmeriCorps CEV) is a different document and covers civic volunteering,
  not volunteer retention.
- **R-04. Staff credentials: A1.1 or A1.3.** Internal to a1. Individual staff earning a credential
  ("gaining their PA Principal Certification") lands in A1.1 with no source; a1 files no claim. The
  A1.3 widening a1 proposes covers "workforce supply/pipeline (recruitment, certification counts)".
  The line between a person earning a credential (A1.1?) and a count of certified staff (A1.3?) is
  not drawn by either.
- **R-05. Mapp & Kuttner 2013 vs Mapp & Bergman 2019** (a2; batch3 f1). Same fact, different
  treatment. f1: 2013 is "superseded"; cite Version 2 if kept; drop the partial Mapp link from F1.7;
  f1-12 re-cites F1.8 "Relational" from a district-hosted copy (aps2016.apsva.us). a2: Version 2
  "adds to v1 and does not overturn it"; keep 2013 and add a v2 note; a2-13 cites the A2.6
  organizational conditions from the publisher URL (dualcapacity.org). Not row duplicates, but one registry
  fix: `mapp-kuttner-2013` supports F1.7, F1.8 and A2.6, so one decision and one URL should cover
  all three. a2-13's publisher URL meets f1's request for "a publisher-hosted copy".
- **R-06. Epstein on A2.6** (a2; batch3 f1). a2 drops Type 6 from A2.6 (the registry judged it a
  poor fit) and replaces it with ESSA 20 U.S.C. 6318(a)(2)/(c)(1) (a2-12), keeping Type 3. f1
  re-verifies Epstein against Corwin (f1-03..05) for F1.2, F1.8, F1.9 only. Compatible, but no row
  moves A2.6's surviving Type 3 link to the Corwin copy; if the registry switches URL, A2.6 needs
  that row too (gap, no claim filed).
- **R-07. Digital Equity Act status wording** (a2 on A2.3's 47 U.S.C. 1723; batch3 f1 on F1.6's
  1721, f1-09). Both cite NACo (2025-05-14) on NTIA's grant terminations and both keep the statute.
  a2 says the programs "were defunded"; f1 adds Broadband Breakfast (2026-08-25) reporting a first
  step toward reopening. One status note should cover both registry entries. Neither filed the news
  items as claims.
- **R-08. A3.1 "institutional practice": log FD or narrow** (a3 internal; Severin). Option (a) log
  a codebook-defined FD and keep the definition; option (b) narrow to formal policy and send
  practice adoption to A3 domain-only (about 20 LM texts move). a3 leans (a).
- **R-09. A3.3 scope: exclude or widen** (a3 internal). (a) exclude community health, safety,
  economic and norm outcomes → A3 domain-only; (b) widen with Reisman "Changes in impact" (a3-05,
  filed for the option a3 argues against). a3 leans (a).
- **R-10. Learning Forward: pin 2022 PDF (a1-01) or re-cite 2025** (a1 internal). a1-02 (history
  page) is evidence of the edition change, not a codebook citation.

## Breaking changes

- **R-11. School climate: a3's hint vs a3's A3.1 FD.** a3 proposes a hint sending school-wide
  climate or culture statements to A3 domain-only. But a3's preferred A3.1 option (a) keeps
  "institutional practice" in A3.1, and a3's own A3.1 examples include "Sustaining inclusive school
  cultures" and "Schools adopt health and wellness norms". Taken together the two would split
  school-culture texts between A3.1 and A3/none on wording alone. A future A3.4 (a3-06, enum +1)
  must also be bounded against Y8.10 felt safety (a3 says so), A2.1 program quality, and batch1 y3's
  Developmental Assets "caring school climate" grounding for Y3.1 (youth-level perception).
- **R-12. A2.6 / A3.2 / F1.9 three-way boundary.** a3 proposes a tie-breaker: an organization's
  family-engagement structures → A2.6; inter-organizational partnerships → A3.2. batch3 f1 Flag 2:
  adjudicated S176 ("create a family advisory board with parent representatives") is gold F1.9,
  while F1.9 excludes "the organization creating structures" and A2.6 includes "Creating a parent
  advisory council". a3's tie-breaker restates A2.6's include, which contradicts S176 as
  adjudicated. Any A2.6/A3.2 tie-breaker should wait on, or be drafted with, Severin's S176 ruling.
  Neither A2.6's useInstead nor A3.2's exclude names the other today.
- **R-13. A1.3 widening rests on a draft CP.** a1 says staffing is "already A1.3 by decision";
  the decision is CP-09-05 (PR #62, status "draft; needs Severin to confirm"), a RULES CP marked
  PATCH that says "Staffing and program growth ... are A1.3 and A2.5" without touching A1.3's text,
  and its evidence is [held-out row] (R-01). a1's widening (a1-06, JOLTS openings and hires) is a MINOR
  change. If CP-09-05 is rejected or rescoped, a1's rationale falls away; if it lands, A1.3's
  definition lags its routing until a1's change follows.
- **R-14. Drift line in A1 and A2 under the fallbacks** (detail in the table below). A1 crosses
  the one-third line if Kirkpatrick (a1-03/04) is rejected and FDs are logged instead. A2 crosses it
  if a2's unlogged departures (A2.1 accreditation, A2.3 facilities) become counted FD entries.

## Duplicates and overlaps

- **R-15. Same source, several rows (kept).** Urban COF a2-01/a2-11 (also offered as an A2
  frameworkBasis anchor); ESSA 6318 a2-07/a2-12; Kirkpatrick a1-03/a1-04; Reisman (existing entry)
  a3-01/a3-04/a3-05; Coffman (existing) a3-02.
- **R-16. URL or component change on existing entries only:** a1-05 (SAMHSA, NCSACW host), a1-06
  (JOLTS openings, hires), a2-10 (Weiss rescoped), a2-14 (7119 on govinfo), a3-03 (Sampson, PubMed).
- **R-17. Notes for verifiers on specific rows.** a3-06 targets a code that does not exist (new-code
  candidate; youth.gov secondary page, primary EDSCLS not fetched). a2-08 claims CAST Consideration
  1.1, which a2-findings never quotes. a2-03/a2-04 carry years (2025, 2024) taken from page review
  dates. a1-03/a1-04 face a tier question: Kirkpatrick Partners is a consultancy (S1.2 vendor
  material?); the OPM restatement is unfetched. a3-01's excerpt came through the fetch tool's summary
  and needs a re-fetch.

## In-flight CPs and PR boundaries

- **R-18. A2.4 under CP-09-02 (PR #62).** a2 proposes grounding only (a2-03..08) and a move from
  codebook-defined to adapted with FD-P19 rewritten as sector widening. CP-09-02 says "A2.4 remains
  codebook-defined (FD-P19); no new citation is claimed" and records a changed FD-P19. Sequence a2's re-anchor
  after #62 or amend CP-09-02. a2's fidelity flag: CP-09-02's own include wording "(or another group facing barriers)"
  is not covered by any proposed source (CDC and 504 cover disability, 6318(f) covers LEP and
  migratory families), and real use under that wording drifts to general equity of access (7/6
  texts). a2 files this as a confusion lead, not a boundary proposal. It touches CP wording, so
  the PR #62 owner should see it. CP-10-01's open ADA Title II question also applies.
- **R-19. A2.5 under CP-09-01 (PR #62).** a2-09 (21st CCLC APR, "regular" = 30+ days) grounds
  CP-09-01's per-person thresholds without a boundary change; CP-09-01's Sources table lists only
  UW Outputs for A2.5. Combined with batch3 f1 Flag 1 (CP-09-01's "Framework deviation: none" is
  inaccurate because Epstein Type 3 names families as "audiences" and the CP routes family
  attendance to A2.5): a2's sources ground the A2.5 side; f1's point concerns the F1.9 side. Both
  touch CP-09-01's text.
- **R-20. A1.3 vs CP-09-05** (PR #62). See R-13. No batch-4 finding touches Y1 (PR #66), Y1.4,
  Y2.5, Y2.6 or Y7.1-Y7.3.

## Cross-domain hand-offs

- **R-21. Adult volunteering** (a1; batch2 y6; batch3 f2). See R-02, R-03.
- **R-22. Community-level food texts** (batch3 f2: near A3 or F2 domain-only) fit a3's A3.3
  option (a).
- **R-23. Child-welfare entry** (batch1 R-26; batch3 f2 flagged "A3 or F1"). a3 does not address it.
  Still has no owner.
- **R-24. Y3.2 staff rapport → A1** (batch1 R-29). a1 did not consider it.
- **R-25. Search Institute Social Capital Framework** (batch1 y3: "fits A2 better"; no claim).
- **R-26. Truancy-court diversion "of families"** (batch3 y8b): an A2/F boundary nobody covers.

## Drift per domain (S4.9; counted = adapted or codebook-defined)

| Domain | Today | If every proposed FD were logged | Notes |
|---|---|---|---|
| A1 (3) | 0 of 3 | 2 of 3 (67%, over); 3 of 3 if a volunteer include enters A1.3 unsourced | a1's FDs are the fallback if Kirkpatrick (a1-03/04) is rejected; with it, 0 of 3 |
| A2 (6) | 2 of 6 (A2.2, A2.4; at the line) | 2 of 6 if only FD-P18/P19 are rewritten (adapted still counts); 4 of 6 (67%, over) if A2.1 "accreditation" and A2.3 "facilities" become FD entries | a2 names those two as unlogged departures but proposes "log in basis or drop", not FDs |
| A3 (3) | 0 of 3 | 1 of 3 (33%, at the line) with A3.1 option (a); 2 of 3 (over) if A3.2's citation fix (a3-01/02) fails | A3.3 option (a) adds none; a new A3.4 would make the base 4 |

A2 is already at the line; under S4.9, any added counted entry there triggers an anchor re-review
before further A2 changes.
