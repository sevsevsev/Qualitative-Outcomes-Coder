# Batch 3 reconciliation: Y8, F1, F2 (2026-10-16)

Inputs: y8a, y8b, f1 and f2 findings and claims; batch1, batch2 and batch4 findings for
cross-domain items; CP-09-01..08 (PR #62) and CP-11-01..03 (PR #66); the registry's `supports`
rows for shared sources. Nothing is decided here. `claims-reconciled.json` holds all 69 batch-3
claims (y8a 27, y8b 17, f1 14, f2 11). No two rows share code, component and URL, so
`merged-ids.json` is an empty map. No claim row carried caveat or fit wording; no row was edited.

## Held-out gold IDs

- **R-01.** No N### ID appears in any batch-3 findings or claims file. The gold IDs cited are S###
  and H### rows from the design file (`youth_outcomes_v3.gold.csv`, set "heldout" = the old
  pre-3.0 held-out rows, now design): y8a H086, f1 H062, H072, H078. Nothing to drop.

## Conflicts

- **R-02. Two YRBS 2025 questionnaires.** y8a cites the *Standard* HS questionnaire
  (`2025-YRBS-Standard-HS-Questionnaire508.pdf`; Q66, Q73, Q83, Q59-Q60, Q80; claims y8a-08..10,
  -21, -27). y8b cites the *National* HS questionnaire (`2025-YRBS-national-HS-questionnaire508.pdf`;
  Q13, Q16, Q11-12, Q21-22, Q26-27, Q29, Q94; claims y8b-02, -07, -09, -11). Item numbers differ
  between the two instruments. The registry needs one questionnaire URL (or two entries), and
  verifiers must check each item number against the PDF named in its row.
- **R-03. Knowledge of risks: FD or citation.** y8b proposes merged-components FDs (SHAPE NHES)
  for "knowledge of risks"/"intentions" in Y8.11 and "warning signs" in Y8.12. y8a says HECAT's
  AOD, Tobacco and Violence Prevention HBOs map onto y8b's codes, which could close the same gap by
  citation instead; y8a filed no claim for those modules. Note `shape-nhes-2024` also supports
  Y4.12 (risk-avoidance skills), so the knowledge/skill line runs through three codes.
- **R-04. Generic behavior statements: Y8.6 vs Y1.14 / Y4 / Y4.2.** y8b: keep "behavioral
  problems" in Y8.6 by adding CDC conduct-problems (y8b-01), or narrow it and add "use instead:
  Y1.14". y4b (batch1): bare "improved/positive behavior" → Y4 domain-only, noting Y8.6 holds
  "behavioral problems". "Fewer outbursts" also sits near Y4.2 (emotion regulation). Y1.14
  (Exclusionary Discipline) is a PR #66 code; see R-14.
- **R-05. F2.2 "access to healthy food" vs F1.3.** f2 re-grounds it with USDA nutrition security
  (f2-04) or narrows F2.2 and sends "access to fresh produce" to F1.3. f1 re-grounds F1.3's family
  eating habits with SNAP-Ed MT1 (f1-11). Both sources carry a status risk: USDA's 2022 PDF may be
  withdrawn (f2) and SNAP-Ed was terminated 2025-09-30 (f1). If both fail, the healthy-food
  construct has no home that verifies.
- **R-06. CSSP Concrete Support.** f2 wants it demoted from F2.1 to background; f1 keeps it as
  direct on F1.7. Compatible, but the registry entry `cssp-concrete-support` loses its F2.1 row.
- **R-07. Senior volunteers' quality of life: F or A1.3** (carried from batch2 R-21). f2: workforce
  well-being → A1.3, non-caregiver adult civic volunteering stays domain-only or uncoded. a1
  (batch4): "Improve quality of life of senior volunteers" is arguably Part F. Unresolved.

## Breaking changes

- **R-08. McKinney-Vento registry entry is shared with Y1.13.** `mckinney-vento` supports Y1.13
  and F2.3. CP-11-01 (PR #66) pins it to 11432(g)(3)(A)-(B) and CP-11-02 anchors FD-P22 on it.
  f2-10 would add 11434a(2) for F2.3; f2 prefers dropping it from F2.3 entirely. Either change
  must not alter the entry's Y1.13 pinpoint or URL; a second section on one entry may need a
  separate registry row. Also add/remove "McKinney-Vento" from F2's frameworkBasis to match.
- **R-09. Head Start ELOF for Y8.2 fine motor (y8a-13).** Three frictions: (a) Severin's
  early-childhood rule allows ELOF only when the construct is about young children by definition;
  y8a concedes fine motor is not age-bound, and CP-10-01 already removed ELOF from Y1.10 under the
  same rule (cited in CP-11-02); (b) `head-start-elof` is Y1.8's anchor, and CP-11-01 moves its URL
  to the govinfo GPO copy, while y8a-13 cites a headstart.gov practice page; (c) a second code on
  that entry widens it beyond "Y1.8 keeps its scope" (CP-11-03). y8a's fallbacks (FD or drop
  "fine motor", affecting gold S192) remain.
- **R-10. F2 is too small for fallback FDs.** F2 has 3 codes; one counted FD puts it at the
  one-third line and two cross it (see drift table). Verification of f2-01, f2-04 and f2-06..09
  therefore gates F2's anchor under S4.9.
- **R-11. F1 lands exactly on the line.** If F1.3 and F1.6 fixes fail and the CP-09-01 Type 3 point
  becomes an FD, F1 is 3/9 = 33%, at but not past S4.9's "more than a third". Any further FD
  triggers an anchor re-review.

## Duplicates and overlaps

- **R-12. YRBS name and registry fix (y8a A3; y8b's re-pointing of Y8.11/Y8.12 components).** One
  fix: add "CDC Youth Risk Behavior Survey" to `cdc-yrbss.codebook_names`, add the missing Y8.1
  sleep support (y8a-08), and re-point Y8.12's component (y8b-11, -12). Combine with R-02 so one
  questionnaire URL is chosen.
- **R-13. Healthy People 2030 court-order banner** (y8a A2, y8b Anchors): same observation, one
  watch item. It affects every HP2030 claim in this batch: y8a-11, -12, -24, -25, -26; y8b-05, -06;
  f2-03, -05, -09; and existing SH-04, AH-01/AHS-01, SU-05, MICH-14/15. y8a adds a second watch:
  the 2026 PA-R02 screen-time comment period (y8a-12).
- Overlaps, not duplicates: y8b-07 (YRBS Q94) and y8b-08 (MMWR note) both back Y8.9 counseling;
  f2-03 adds AHS-01 to F2.1 while `hp2030-ah01-ahs01` already supports Y8.5 (youth insurance vs
  family insurance); f2-01 (NYTD) adds F2.1 to `acf-nytd`, already on Y8.5 and F2.3; f1-08 cites
  Ascend Economic Assets (F2's anchor) for F1.6 financial skills, and f2 routes "manage food
  budgets" to F1.6, so the F1.6/F2.1 line is "skill vs status"; y8a-04/-05 (HECAT nutrition, Y8.1
  youth) and f1-11/-13 (SNAP-Ed, F1.3 family) split nutrition by whose behavior changes; f1-03..05
  and f1-12 change sources that also support A2.6 (`epstein-six-types`, `mapp-kuttner-2013`, with
  Mapp & Kuttner 2013 superseded by Version 2) — the A2 owner should see this. y8a's WSCC merger
  note and demotion touch `cdc-wscc`, which also supports Y8.9 (y8b adds MHMD-03 as primary there).
  RHY appears twice: y3 (batch1) cites 34 U.S.C. 11212(b)(3) for Y3.4 reunification; f2-06/-07 cite
  45 CFR 1351 for F2.3.

## In-flight CPs and PR boundaries

- **R-14. PR #66 (Y1).** R-08 (Y1.13 McKinney-Vento entry), R-09 (ELOF entry, Y1.8), and y8b's
  fallback "use instead: Y1.14" (R-04) all touch Y1 under PR #66. y8b also notes stale CP process
  text in `useInstead` at data.ts lines 244 and 779 (CP-01-06) outside its scope; line 244 is in Y1.
- **R-15. PR #62, F1.9 (CP-09-01).** f1 Flag 1: CP-09-01 states "Framework deviation: none", but its
  exclude sends family attendance at events to A2.5 while Epstein Type 3 names families as
  "audiences"; f1 asks that the CP say so (FD or a note). f1 Flag 2: adjudicated design row S176
  (family advisory board → F1.9) conflicts with F1.9's exclude and A2.6's include. Severin's
  call; gold untouched. f1-05 and f2-11 both add F1.9 support rows and must be read against the
  candidate wording. f2's caregiver-volunteering hint relies on CP-09-01's include.
- **R-16. MIECHV.** The task given to f1 said "F1.7 keeps MIECHV". MIECHV supports F1.3 only
  (frameworkBasis "MIECHV (F1.3 only)"); f1 applied the settled decision to F1.3 and reopened
  nothing. The RESEARCH-BRIEF line carries the same error and should be corrected for later runs.

## Cross-domain hand-offs

- **R-17. Child-welfare-entry prevention misroute.** "Documented prevention of youth entry into the
  formal child welfare system": f1 saw it forced into F1.1 (low), f2 saw it in F2.3 (low), y3
  (batch1) proposes a Y3.4 hint excluding it. All three say "not my code"; f1 calls it a backlog
  lead (2 texts, no code per S2.2). No researcher names a target. Needs one owner.
- **R-18. Mental-health literacy (Y8.3 vs Y8.6-Y8.9).** y8a flags Y8.3 real-use texts such as
  "recognize the early warning signs of mental health conditions" for y8b; y8b did not address it.
  Y8.3 already excludes sexual-health and substance-risk knowledge but not mental-health knowledge.
  Open.
- **R-19. Y4.12 risky-behavior hint (y4b, batch1).** y4b proposes generic risk-behavior incidence →
  Y8 domain-only (CP-09-09). Neither Y8 researcher saw it; it lands where y8b's Y8.11/Y8.12 are
  behavior codes, so a Y8 owner should confirm.
- **R-20. Adult volunteering** (f2; batch2 y6; batch4 a1). All agree Y6.5 takes no adults and F2 is
  no fit. f2: caregivers → F1.9, workforce → A1.1/A1.3, other adults domain-only or uncoded; a1:
  A1.3 volunteer-retention include. See R-07.
- **R-21. Other hand-offs.** Screen time (batch2 R-25) is Y8.1's, where y8a keeps it partial
  (PA-R02); body image (batch2 R-23) has no Y8 claim; y8b's Y8.13 note on "families" in truancy
  diversion touches A2/F; f1's SNAP-Ed adult-health lead (individual adults coded F1.3) and f2's
  bare "stability" → F2 domain-only hint both rely on CP-09-09 domain-only coding.

## Other single-researcher items worth a reviewer's eye

- **R-22.** y8b: delete stale "Mirrors CP-01-07's tie-breaker (PR #31, in flight)" from Y8.10
  `useInstead` (reaches the prompt); stale "located" in Y8.8, Y8.10, Y8.12 `basis`.
- **R-23.** y8b: Y8.13 `source` text misnames the CJCA paper; CJCA → CJJA rename note.
- **R-24.** Code-text widenings proposed (no FD): Y8.4 add "puberty" (y8a), Y8.6 add "suicidal
  thoughts or self-harm" (y8b). Narrowings proposed: Y8.7 drop "restored" (y8b), F2.2 to "enough
  food" if f2-04 fails.
- **R-25.** y8a: null `tier`/`publisher` on five registry entries (build_registry.py fix).

## Drift per domain (S4.9: counted entries over codes)

| Domain | Today (DEVIATIONS) | If proposed citations all verify | If every proposed or fallback FD were logged |
|---|---|---|---|
| Y8 (13) | 0 = 0% | 1/13 (Y8.13 observability FD, proposed outright) = 8%; Y8.11, Y8.12 merged-components logged, not counted | Y8.13, Y8.7 ("restored"), Y8.2 (fine motor, codebook-defined) = 3/13 = 23% |
| F1 (9) | 0 = 0% | 0/9 | F1.3 (codebook-defined), F1.6 (adapted), F1.9 (Type 3, if CP-09-01 logs it) = 3/9 = 33%, at the line |
| F2 (3) | 0 = 0% | 0/3 | F2.1 (sector widening), F2.2 (codebook-defined), F2.3 (sector widening) = 3/3 = 100%; F2.1 Medicaid merged-components not counted |
