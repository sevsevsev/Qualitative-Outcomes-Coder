# Batch 4 (A1, A2, A3): framework-fidelity review (2026-10-16)

Reviewer: fidelity (S1.2-S1.6, S4.1, S4.4, S4.9). Inputs: the findings, reconciliation, verification
table, A1-A3 data, registry, DEVIATIONS.md, CP-09-02/05, and the design gold (A-coded rows). I did not
read the held-out gold, and [held-out row] (R-01) is not used below.

**Reading the table.** A SUPPORTED claim can carry a fidelity change. A PARTIAL claim may enter as
`fit: partial` support, but on its own it cannot change a code's fidelity or close an FD. Unfiled leads
(OPM, Shediac-Rizkallah, the Kentucky YSS-F page, EDSCLS) carry nothing.

**S4.9.** The rule triggers at *more than* one third: 1/3 and 2/6 are at the line, 3/6 is over.
Sector widening counts (adapted); merged components does not.

## Headline

All three recorded counts are understated (detail in the drift table): A1.1 names roles its
educator-only sources do not; A2.1's "accreditation" is unsourced and adjudicated **S075** (gold A2.1)
blocks dropping it, which the researchers missed; and A3.1's "institutional practice" half fits no
allowed S1.6 case. With the smallest fixes below, counts become A1 0-1/3, A2 2-3/6, A3 0-1/3. The
reconciliation's A1 worst cases (2/3, 3/3) overstate, because decision C exempts A1.2 and a volunteer
include should not be added.

## Decision C (age/population rule): where it matters

- **A1.1:** the rule bites. The code names non-educator roles, and adjudicated rows depend on them: S043
  case managers, S083 volunteers, S142 coaches, S146 mentors, S244 college tutors.
- **A1.2:** the rule exempts it. "Adults applying new practices" names no outside population, and
  SAMHSA is cross-sector, so a1's "arguably" second FD falls away.
- **A1.3:** the rule bites only if a volunteer include is added. Today the code names only "staff".
- **A2.4 and A2.6:** ESSA 6318 is a Title I school statute. A2.6 names no outside population, so it
  needs no FD. A2.4's language half rests on that school-only duty for all programs, so it does.

## Verdicts

| # | Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|---|
| a1-01/02 | Learning Forward edition | **ACCEPT** (option 1) | PARTIAL, but this is a URL pin on an existing partial support; the history page confirms the 2022 update | Point the URL at the 2022 Standards-Summary PDF and add a note that a 2025 edition exists. Fit stays partial. PATCH, FD none. |
| a1-03 | Kirkpatrick L2 → A1.1 | **DEFER** (tier) | SUPPORTED on content, but S1.2 does not allow vendor material, and Kirkpatrick Partners is a for-profit certification seller (tier D requires a nonprofit). Its "confidence" wording is the firm's own revision (S1.4: the firm is the author). | Owner rules on tier. Meanwhile open an **FD (adapted, sector widening, counted)** for A1.1, naming confidence too. Verify the OPM field guide (tier A); if SUPPORTED, close it. |
| a1-04 | Kirkpatrick L3 → A1.2 | **REJECT** (not needed) | Decision C needs no FD here, so the tier risk buys nothing | None. |
| a1-05 | SAMHSA on NCSACW (HHS host) | **ACCEPT** | SUPPORTED, direct | URL swap; fit partial → direct. PATCH. |
| a1-06 | A1.3 staffing levels (JOLTS openings, hires) | **DEFER** until CP-09-05 is decided | PARTIAL against today's definition. Its only evidence was [held-out row] (held out, R-01), and no design-gold row is about staffing levels. | After CP-09-05: widen the definition, add JOLTS openings/hires (direct for the widened text). FD none (JOLTS is already cited). MINOR. Evidence: design gold or real-run leads, never [held-out row]. |
| a1-07 | WHO burn-out → A1.3 | **ACCEPT** | SUPPORTED, direct, cross-sector | Add as support for the "burnout" include. PATCH. |
| a1-08 | Volunteer retention → A1.3 | **REJECT for now** | PARTIAL. A1.3's sources are about workers; "volunteer" in the text names an outside population (decision C), which would mean a counted FD resting on a partial source | None. Volunteers' retention stays a lead. |
| R-02 | Senior volunteers' quality of life | Fidelity view: **not A1.3** | Surgeon General and WellBQ are about *workplace* well-being. A volunteer's quality of life is a participant outcome. | Part F, or domain-only (batch3 f2). The tie-breaker is the owner's call. |
| R-04 | Staff credentials | **DEFER** | No cited A1.1 component names credential attainment | Do not add "certification" to A1.1's include without a verified source. |
| a2-01 | Urban COF → A2.2 | **ACCEPT WITH CHANGES** | PARTIAL here, but the same excerpt is SUPPORTED in a2-11 ("program-centered outcomes (reach, participation, satisfaction)") | Register Urban COF as A2.2 support (direct for the participant half); this fixes FD-P18's unregistered anchor (S1.1). Cite "Urban Institute & Center for What Works (2006)". |
| a2-02 | SAMHSA URS YSS-F → A2.2 | **REJECT as a fidelity mover** | PARTIAL. That families complete the survey rests on an unverified Kentucky page. | Optional `fit: partial`. **A2.2 stays codebook-defined**; FD-P18 names family satisfaction and perceived safety (H002) as unsourced. |
| a2-03 | CDC Disability Inclusion Strategies → A2.4 | **ACCEPT** | SUPPORTED, tier A, cross-sector, direct for disability barrier removal and accommodations | Add to A2.4 and to A2's `frameworkBasis` (S1.6 requires that a code match its *domain anchor*). |
| a2-04/05/06 | CDC About; 34 CFR 104.34(b), 104.37(a) | **ACCEPT as partial only** | PARTIAL; these are legal duties, not outcome frameworks | Optional supporting rows. Use the eCFR URL, not Cornell. |
| a2-07 | ESSA 6318(f) → A2.4 | **ACCEPT** | SUPPORTED, but it is a Title I school duty and does not name oral interpretation | It grounds the language half as **sector widening**. Rewrite FD-P19 as adapted (sector widening). Count unchanged (A2.4 still counts). |
| R-18 | CP-09-02 "(or another group facing barriers)" | **Flag to the PR #62 owner** | No source covers it. Real use under that wording drifts to general equity (7/6 texts). Keeping it makes A2.4 a codebook-defined residue, so it cannot be cleanly adapted. | Drop the parenthetical; S001 and H058 are both about disability, so no adjudicated row flips. Sequence after #62; do not touch the PR. |
| a2-08 | CAST UDL 3.0 | **ACCEPT as supplementary** | SUPPORTED, but CAST is a nonprofit without a clear tier B/C standing for this use | `fit: partial` for accessible materials (S113). It must not carry the anchor. |
| a2-09 | 21st CCLC APR → A2.5 | **ACCEPT as partial** | PARTIAL: the threshold is stated two ways and is not confirmed as the GPRA definition | `fit: partial`. UW Outputs stays the direct anchor. |
| a2-10 | Weiss rescope | **ACCEPT** | SUPPORTED | Component becomes "participation equation: enrollment and attendance"; fit stays partial. PATCH. |
| a2-11 | Urban COF → A2.5 (reach) | **ACCEPT** | SUPPORTED | Add as a second A2.5 source. Adding it to A2's `frameworkBasis` is the taxonomy reviewer's call. |
| a2-12/13 | ESSA 6318(a)(2)/(c)(1); Mapp & Bergman v2 → A2.6 | **ACCEPT** | Both SUPPORTED. Dropping Epstein Type 6 removes a poor-fit link. | Keep Type 3 and the Mapp 2013 component, and note v2. Make one registry decision for F1.7, F1.8 and A2.6 (R-05). If Epstein's URL moves to Corwin, move A2.6's Type 3 row too (R-06). FD none. |
| a2-14 | ESSA 7119(a)(2) on govinfo | **ACCEPT** | SUPPORTED | URL swap; fit partial → direct. One status note on the Digital Equity Act covers A2.3 and F1.6 (R-07). PATCH. |
| A2.1 | "Accreditation" unsourced | **Owner decision; the researchers missed S075** | Dropping it flips adjudicated S075 (S4.4). Keeping it unsourced is an unlogged codebook-defined element, which puts A2 at 3/6, over the line. | (a) Record accreditation as *assessed program quality* by another instrument ("or similar scores") and verify a source naming it as a quality assessment: 2/6. (b) Else log a codebook-defined FD (S075): 3/6, and S4.9 requires an A2 anchor re-review before further A2 changes, including PR #62's A2.4/A2.5 CPs. |
| A2.3 | "Facilities" unsourced | **ACCEPT narrowing** | No design-gold row depends on it, and logging an FD would push A2 over the line | Remove "facilities" from the definition and include. MINOR. Practitioner reviewer: count the real-run "facilities" texts first. |
| a3-01 | Reisman "Strengthened alliances" → A3.2 | **ACCEPT** | SUPPORTED; covers the ordinary partnerships that K&K themselves set apart from collective impact | Add as the component for coordination and collaboration. Today A3.2 is an unlogged over-reach; this fix keeps it at FD none. PATCH. |
| a3-02 | Coffman "Partnerships or Alliances" → A3.2 | **ACCEPT as partial** | SUPPORTED, but framed "in an advocacy strategy" | `fit: partial`. |
| a3-03 | Sampson on PubMed | **ACCEPT** | SUPPORTED | Fit partial → direct. PATCH. |
| a3-04 | Reisman "school policy" → A3.1 | **REJECT** as a component claim | PARTIAL; the link is the codebook's inference | Not needed: S101 and S019 are formal public-body policy and funding, which Coffman and Reisman cover. |
| R-08 | A3.1 "institutional practice" | **ACCEPT option (b)**; (a) only after adjudication | (a) fails S1.6: codebook-defined needs *adjudicated rows with no home*, and the only A3.1 design rows (S019, S101) are policy or funding. Keeping the text under Coffman/Reisman is "redefining a construct while still citing the framework". | (b) Narrow to "formally adopted policy, rules or funding"; practice → A3 domain-only. MINOR, FD none. Or the owner adjudicates practice rows as A3.1 first, then (a) (1/3, at the line). |
| R-09 | A3.3 scope | **ACCEPT (a)**, **REJECT (b)** | (a) keeps the code inside Sampson. (b) merges two components (a3-05) that coders can tell apart, so it is not merged-components and would need a codebook-defined FD. | Exclude: community health, safety, economy and norms with no cohesion, trust or collective action → A3 domain-only. PATCH, FD none. Defer a rename to the next MAJOR. |
| a3-06 / R-11 | School climate | **ACCEPT the hint with changes; DEFER A3.4** | PARTIAL secondary source; the primary EDSCLS source was not fetched; enum +1 | The hint must split by who: a youth's own perception of climate → Y3.1 or Y8.10; school-wide climate or culture → A3 domain-only. If R-08 (b) is taken, school-culture practice texts also go to domain-only, which resolves R-11. A3.4 waits for a verified primary ED source and gold volume. |
| R-12 | A2.6/A3.2 tie-breaker | **DEFER** | Waits on Severin's S176 ruling (gold F1.9 vs A2.6's include) | None now. |

## Drift per domain (S4.9)

| Domain | Recorded | My count today | After the smallest fixes above |
|---|---|---|---|
| A1 (3) | 0/3 | **1/3** (A1.1 sector widening, unlogged) | 1/3 with the A1.1 FD; 0/3 if a tier-A training-evaluation source (OPM) verifies |
| A2 (6) | 2/6 | **3/6, over** (A2.1 accreditation); 4/6 counting A2.3 facilities | 2/6 if accreditation is grounded as assessed quality and "facilities" is dropped; 3/6 (over; re-review A2) if accreditation gets an FD |
| A3 (3) | 0/3 | 0/3 counted, but A3.1 has a departure S1.6 does not allow, and A3.2 is uncited past K&K | 0/3 with R-08 (b) and a3-01; 1/3 (at the line) if the owner adjudicates practice rows and takes (a) |

## What the researchers missed

1. **S075 is adjudicated A2.1 (accreditation).** Dropping it flips S075; keeping it unsourced puts A2
   over the line, which bears on whether PR #62's A2 CPs may land before an A2 re-review.
2. **A3.1 option (a) has no gold behind it.** The codebook-defined case is defined by adjudicated rows,
   and A3.1 has none for practice.
3. **Anchors missing from `frameworkBasis`.** A1.1 and A1.2 are "framework" through Guskey (direct),
   but Guskey is not in A1's `frameworkBasis`, where Learning Forward is only partial. Add Guskey
   (2002) to A1's basis (PATCH). The same applies to CDC for A2.4 if it is adopted.
4. **A1.1 "staff confidence" (S146)** goes past Guskey L2 as well as past its population. Learning
   Forward's "mindsets" is partial support at best. Any A1.1 FD should name confidence, not only the
   sector.
5. **FD-P18 and FD-P19 text.** Both entries name anchors that are dropped or were never registered
   (Urban "mentoring"; ED & DOJ 2015). They need rewriting even if counts do not change, or
   `deviations.test.ts` and the registry will drift apart.
