# Batch 3 research review (Y8, F1, F2): recommendations

Date: 2026-10-16. Scope: Y8 Health, Safety & Well-Being (13 codes), F1 Family & Caregiver (9), F2
Basic Needs (3), codebook 3.1.4. Pilot method; 69 verified claims (47 SUPPORTED, 22 PARTIAL);
reviewers T taxonomy, F fidelity, P practitioner, D devil's advocate (verdicts in T/F/P/D order: A accept,
R reject, d defer, – silent). Nothing here edits the codebook, registry or gold; no held-out gold was read. Enum cost of
every item: +0 (footprint stays 160).

## Summary

1. **What holds.** No cited source is wrong or withdrawn; HECAT 2021, HP2030, OJJDP, WIOA Title II,
   SNAP-Ed MT1, CFPB and 45 CFR 1351 verify at component level and close most gaps by citation.
2. **What is wrong.** Drift is understated (0 logged; by F's count Y8 8/13, F1 2/9, F2 3/3 name
   uncovered elements); four proposed FDs use the wrong S1.6 case; stale "PR #31" text reaches the prompt.
3. **Drift after.** Y8 2/13 (15%), worst 4/13; F1 0/9 (1/9 if CP-09-01 logs Type 3); F2 0/3 (1/3
   if f2-04 fails re-check). None crosses S4.9's line; F2 has no slack.

## Act now

Each CP heading states its type, bump and whether it reaches the prompt.
CPs B3-CP1 to B3-CP3 touch only the registry, `basis`, `fidelity` and DEVIATIONS.md (PATCH, no
eval). B3-CP4 and B3-CP5 reach the prompt and need the two-run design-set gate.

### B3-CP1. Y8 citations and deviation log (CITATION_FIX + RULES, PATCH, no prompt)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD |
|---|---|---|---|---|---|---|
| 1 | Y8 | YRBS is cited in text but `cdc-yrbss` lacks the name; two 2025 instruments have different item numbers (R-02, R-12) | y8a-08 SUPPORTED "83. On an average school night, how many hours of sleep"; y8b-11 SUPPORTED "how many times were you in a physical fight?" | A/A/A/A (D: National only) | Two registry entries under the documents' own titles, each item pinned to its own PDF; add "CDC Youth Risk Behavior Survey" to `codebook_names`. | none |
| 2 | Y8.1 | Activity, nutrition, cooking, hygiene, sleep have no component; `basis` claims a YRBS sleep link that the registry lacks | y8a-02..07 SUPPORTED (HECAT PA HBO 1 "60 minutes every day"; FN HBO 3, 10; PHW HBO 1-2 "appropriate amount of sleep"); y8a-08..10 Q83, Q73, Q66 SUPPORTED; y8a-11 PA-06 SUPPORTED | A/A/A/A (D rejects PA-06 as redundant) | Add these rows. Screen time stays partial on PA-R02 (y8a-12 PARTIAL; S207, H086). | none |
| 3 | Y8.3 | First aid, injury prevention, reliable information not named by NHES Std 1 | y8a-15 SUPPORTED "3.8.3 Access valid and reliable sources of health information"; y8a-16 SUPPORTED "1.2.3 Identify ways to prevent or reduce risks"; y8a-17, -18 PARTIAL (HECAT S HBO 4, 7) | A/A/A/A (D rejects HBO 4, 7) | Two rows on `shape-nhes-2024`; HECAT S HBO 4 and 7 as `fit: partial`. | none |
| 4 | Y8.4 | Component-level rows | y8a-19 SUPPORTED (NSES SH access plan); y8a-21 SUPPORTED (Q59-Q60) | A/A/A/A | Add rows; fix YRBS title per verifier. | none |
| 5 | Y8.5 | Dental, vision, screenings, immunizations, chronic conditions uncovered | y8a-22 SUPPORTED (PHW HBO 9-10 "manage chronic diseases"); y8a-25 OH-08 SUPPORTED; y8a-26 MICH-17 SUPPORTED; y8a-27 Q80 SUPPORTED; y8a-23 HBO 11, y8a-24 IID-08 PARTIAL | A/A/A/A (D rejects the partials) | Add; HBO 11, IID-08 partial; MICH-17 for early-childhood statements only (S061). | none |
| 6 | Y8.8 | NCTSN component unpinned; `cite_as` title wrong; `basis` says "located" | y8b-04 PARTIAL "Traumatic experiences can undermine children's sense of protection and safety" | A/A/A/A | Pin concept 5 only (10 is culture, not recovery); correct the title per verifier. | none now; see later #4 |
| 7 | Y8.9 | Service use rests on a partial WSCC link | y8b-05 MHMD-03, y8b-06 MHMD-06, y8b-07 Q94 SUPPORTED | A/A/A/A (D: MHMD-03 only) | Add MHMD-03 (primary), MHMD-06, Q94. Keep WSCC. | none |
| 8 | Y8.11 | "Perceived risk" uncovered | y8b-10 PARTIAL (MTF "perceived risk and disapproval") | A/A/A/A | MTF row, perceived-risk half, `fit: partial` (S015). | none |
| 9 | Y8.12 | YRBS excerpt is stale; community violence uncovered | y8b-11, -12 SUPPORTED ("exposure to community violence"); y8b-13 SUPPORTED (CDC youth violence) | A/A/A/A (D skips y8b-13) | Re-point to National Q11, Q12, Q16, Q21-22, Q26-27 and the About page; add CDC youth violence. | none |
| 10 | Y8.13 | No direct support; CJCA renamed | y8b-16 SUPPORTED "divert, or channel out, youthful offenders"; y8b-15 PARTIAL (rename, July 1, 1994); y8b-14 PARTIAL (NCJ 237765) | A/A/A/A (D rejects reentry I-Guide y8b-17) | OJJDP 2017 row; CJJA rename note; NCJRS catalog URL. | — |
| 11 | Y8.13 | "Completing probation or an agreement" has no source; y8b proposed an observability FD | S018, S189 adjudicated Y8.13 | T/F/D: codebook-defined; P: observability | **New FD, codebook-defined (counted).** Observability is the wrong case: nothing moves out. | new FD |
| 12 | Y8.2 | "Fine motor" goes past SHAPE PE Std 1; ELOF verifies (y8a-13 SUPPORTED) but the early-childhood rule bars it | S192 adjudicated Y8.2 | T, P, D: keep text, codebook-defined FD; F: owner's call (ELOF exception or drop) | **New FD, codebook-defined (counted)**, per decision A; S192 holds. | new FD |
| 13 | Y8.11, Y8.12 | "Knowledge of risks", "intentions", "warning signs" go past YRBS/MTF (R-03) | H038, S065, S248 adjudicated | Merged-components: T, F, D reject as primary; P accepts | Verify HECAT AOD/Tobacco/Violence HBOs and NHES Std 1 for these codes first; log what stays uncovered (B3-2). | new FD(s) if uncovered |
| 14 | Y8 | Stale "located" in `basis` (Y8.8, Y8.10, Y8.12); null tier/publisher on five entries (R-25) | registry vs data | A/A/A/A | Data PATCH; `build_registry.py`. | none |

Update the DEVIATIONS drift table: Y8 2/13 (15%).

### B3-CP2. F1 citations (CITATION_FIX, PATCH, no prompt)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD |
|---|---|---|---|---|---|---|
| 15 | F1.1, F1.4 | Bare factor names; F1.4 partial | f1-02 SUPPORTED "Understanding child development and parenting strategies"; f1-01 SUPPORTED "Managing stress and functioning well" | A/A/A/A | Add rows citing **CSSP (n.d.)** (2015 is only the filename). F1.4 becomes direct. | none |
| 16 | F1.2 | Epstein link is "located" | f1-03 SUPPORTED "Involve families with their children in learning at home" (Corwin 2019) | A/A/A/A | Upgrade `epstein-six-types` to the Corwin 4th ed. copy. Tell the A2.6 owner (batch 4); it shares the entry. | none |
| 17 | F1.2 | Routines uncovered (S022) | f1-14 PARTIAL "regular, predictable and consistent routines" | A/A/A/R | Add as `fit: partial`. | none |
| 18 | F1.3 | Family eating habits uncovered (H072) | f1-11 SUPPORTED "Changes in individual and family healthy eating behaviors" | A/A/A/A | Add MT1 with an archived URL (SNAP-Ed defunded). | none |
| 19 | F1.6 | Adult education and ESL uncovered (H062, S118) | f1-06 SUPPORTED "academic instruction and education services below the postsecondary level"; f1-07 SUPPORTED (ESL) | A/A/A/A | Add WIOA Title II rows. Under decision C, "older adults" needs no FD (WIOA covers any adult). | none |
| 20 | F1.7, F1.8 | Partial Mapp & Kuttner link on F1.7; Epstein T2 on F1.8 | f1-04 PARTIAL | F1.7: A/A/A/R; F1.8: A/–/A/– | Drop the F1.7 partial link (two direct remain); add Epstein T2 to F1.8 as partial, communication clause only. | none |

F1 drift stays 0/9.

### B3-CP3. F2 citations (CITATION_FIX, PATCH, no prompt)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD |
|---|---|---|---|---|---|---|
| 21 | F2.1 | Independent youth and financial well-being lack a component | f2-01 SUPPORTED "six outcomes: financial self-sufficiency"; f2-02 SUPPORTED "Having a financial 'cushion'" | A/A/A/A | NYTD row; CFPB Financial Well-Being as its own entry, kept apart from Y7.6's CFPB (CF-001). **Keep** CSSP as partial (F, D; T, P demote). | none (decision C) |
| 22 | F2.1 | Medicaid uncovered (S139) | f2-03 PARTIAL (AHS-01 "any type of public or private health insurance") | A/A/A/R | `fit: partial`. Keep "Medicaid" in the text. | none |
| 23 | F2.2 | Healthy-food access uncovered (S062) | f2-04 PARTIAL "consistent access, availability, and afordability of foods"; f2-05 SUPPORTED NWS-01 | A/A/A/A on f2-04 (re-check title); NWS-01 A/A/A/R | Re-verify the title as printed (USDA FNCS Mission Area, March 2022); add NWS-01. **Do not narrow** F2.2 (S062). | none; FD on S062 if re-check fails |
| 24 | F2.3 | Youth-exit and rent-burden outcomes uncovered | f2-06, f2-07 SUPPORTED (45 CFR 1351 "Stable Housing"; safe exits); f2-09 SUPPORTED SDOH-04; f2-08 PARTIAL (HEARTH) | A/A/A/A; HEARTH A/A/A/R | RHY rows primary, SDOH-04; HEARTH `fit: partial`. McKinney-Vento: see later #11. | none (decision C) |

F2 drift stays 0/3.

### B3-CP4. Prompt-text fixes (PATCH + one MINOR item; two-run gate)

| # | Code | Change | T/F/P/D | FD |
|---|---|---|---|---|
| 25 | Y8.10 | Delete "Mirrors CP-01-07's tie-breaker (PR #31, in flight)" from `useInstead`. | A/A/A/A | none |
| 26 | Y8.13 | Fix `source` title: "Defining and Measuring Recidivism" (not "performance measures"). | A/A/A/A | none |
| 27 | Y8, F1, F2 | Add to `frameworkBasis` the frameworks codes already cite or will cite (HECAT 2021, NSES, Search Institute, MTF, OJJDP, CDC youth violence; WIOA Title II, SNAP-Ed, IDEA, DEA, HP2030; CFPB, RHY 45 CFR 1351). Only if decision B3-1 goes that way. | F requires; T prefers a research-basis anchor line; D rejects (prompt churn) | none |
| 28 | Y8.4 | Include "puberty" (inside NSES PD strand, y8a-20 SUPPORTED). MINOR (scope widened). | A/A/A/d (no gold row) | none |

Version: 3.2.0 if #28 lands, else 3.1.x PATCH. Name every Y8/F1/F2 gold row in section 7 in the
run report.

### B3-CP5. Coding hints (HINT, PATCH, two-run gate, after a 3.x CF entry)

| # | Hint | Gold | T/F/P/D |
|---|---|---|---|
| 29 | Insurance: a family's enrollment in benefits → F2.1; a young person's own coverage → Y8.5 | S139 vs S191 | –/A/A/– (D: settled by S191 already) |
| 30 | Nutrition by whose behavior changes: youth's eating → Y8.1; household eating practice → F1.3; having or getting food → F2.2 | H072, S062; a Y8.1 nutrition row needed (S3.1) | A/–/–/– (P, D silent) |

Write each as a 3.x CF entry first; hold a hint whose side lacks two gold rows.

## Worth a later cycle

| # | Item | Why later |
|---|---|---|
| 1 | Y8.6 "behavioral problems"/"outbursts" boundary (R-04): narrow to symptoms with "use instead: Y1.14 / Y4.2 / Y4 domain-only", or cite CDC conduct problems (y8b-01 SUPPORTED) as partial plus an exclude | Touches Y1.14 (PR #66); split 2-2 (B3-4). Add YRBS Q29 (y8b-02) as a registry row meanwhile. |
| 2 | Y8.6 include "suicidal thoughts or self-harm" | No verified claim (T, F, D defer; P accepts). File a YRBS 2025 suicide-item claim. |
| 3 | Y8.7 "restored" (S144) | Split 2-2 (decision B3-3). Verify the Keyes MHC "calm and peaceful" lead first. |
| 4 | Y8.8 "processing trauma" (S078) | File one claim on a recovery-naming NCTSN concept; if none, codebook-defined FD (Y8 3/13). |
| 5 | Mental-health literacy → Y8.3; using a coping tool → Y4.2; fewer symptoms → Y8.6 (R-18) | T, P accept; D defers; no gold rows yet. |
| 6 | Bare "stability": household → F2 domain-only; "overall life stability" → uncoded | T, P differ on wording; D wants two proposed gold rows first. |
| 7 | Adult volunteering (R-07, R-20): program volunteers → A1.1/A1.3; caregivers → F1.9; other civic volunteering → uncoded | T, F, P accept; D rejects (about 3 texts). Decide with batch 4 (A1.3 decision C check). |
| 8 | F1.6 vs F2.1 money line (H027, S006): 3.x CF before any F1.6/F2.1 wording change | Decision B3-5. |
| 9 | CONFUSIONS CF-003, CF-008, CF-019 still use 2.x numbers; CF-008 contradicts live F1.9/A2.6 | Housekeeping CP; restating CF-008 by the Part axis is the real fix behind S176. |
| 10 | `sync.test.ts` check that every cited framework appears in its domain's `frameworkBasis`; per-category anchor line in research-basis.md (T) | Depends on B3-1. Basis gaps today: Y8.4, Y8.5, Y8.10, Y8.12, F1.3, F1.6, F1.7, F2.3. |
| 11 | F2.3 McKinney-Vento (R-08): drop the F2.3 supports row (T, F, P) or add a separate 11434a(2) row (D) | Entry is shared with Y1.13; after PR #66. f2-10 SUPPORTED but a definition only. |
| 12 | Child-welfare-entry prevention (R-17): F1 domain-only | 2 texts (T, P owner F1; D reject). |
| 13 | Split multi-outcome statements ("on-site medical, dental, and behavioral services"; "food budgets while maintaining nutritional standards") | Splitter issue (P). |
| 14 | Watch items: HP2030 court-order banner (R-13); PA-R02 2026 revision; SNAP-Ed and USDA 2022 page status | Backlog. |

## Rejected, and why

- **Head Start ELOF for Y8.2 fine motor** (y8a-13): source verifies, but fine motor is not about
  young children by definition; CP-10-01 removed ELOF from Y1.10 on the same rule (all four).
- **Merged-components FDs for Y8.11/Y8.12 knowledge** as the first move: S1.6 merged components
  needs components coders cannot tell apart (T, F, D; P dissents). Verify citations first.
- **Observability FD for Y8.13; sector-widening FD for Y8.7**: wrong S1.6 case (T, F, D).
- **Narrowing F2.2 to "enough food"** (all four; flips S062). **Dropping "Medicaid" from F2.1** (P, D; S139).
- **Mapp & Bergman (2019) Version 2** for F1.8 (f1-12 PARTIAL, secondary host, no author or year; all four).
- **Ascend Economic Assets for F1.6** (f1-08 PARTIAL; F2's anchor; blurs skill vs status against
  H027; T, P, D; F would add as partial).
- **WIOA 3272(9) for F1.2** (f1-10 PARTIAL, program activities; T, P, D). **7 U.S.C. 2036a(b) for
  F1.3** (f1-13 PARTIAL, funding clause; T, P, D).
- **AmeriCorps CEV for F1.9** (f2-11 PARTIAL, population-wide volunteering; T, P, D).
- **YRBS Q13 as Y8.10's tier-A proxy** (D; Search Institute already matches; T, F would allow as partial).
- **f2's "manage food budgets" → F1.6** (contradicts H027 and CF-001; P defers, D flags).
- **New codes**: none proposed or needed. **F1 rename** "and other adult participants" (T only; MAJOR).
- **WSCC demotion** from Y8.1/Y8.9 (D, P keep; no coding gain). **DEA 1721(8)** for F1.6 (not needed under C; P, D).

## Unverified leads (support nothing yet)

HECAT AOD, Tobacco and Violence HBOs (R-03); HECAT PHW HBO 3 and S1.8.23; NHES Std 1 fit to
Y8.11/Y8.12; Keyes (2006) beyond its title; Keyes MHC "calm and peaceful"; YRBS 2025 suicide items;
NCTSN concepts 3, 9, 11; SHAPE PE K-2 fine motor; OJJDP performance measures for Y8.13 completion;
CJCA full text; ASCD merger quote; Mapp & Bergman V2 authorship; CSSP Core Meanings year; CFPB
"18 and older"; USDA 2022 title and status; SNAP-Ed and DEA termination dates.

## Decisions for Severin

- **A (early-childhood rule), recurring.** Keep the rule: no ELOF for Y8.2; keep "fine motor" and log a
  codebook-defined FD (S192 stays Y8.2). Alternatives: an ELOF exception (`fit: direct`, no FD; F's
  option), or drop the words and move S192 to Y1.8 after PR #66. MICH-17 for Y8.5 (S061) is allowed.
- **C (age rule), recurring.** Apply it as in the pilot: F1.6 "older adults" (WIOA, any adult),
  F2.1 "independent youth" (NYTD + CFPB) and F2.3 (RHY) need no FD.
- **D (timing), recurring.** Land B3-CP1..CP3 now (registry only); B3-CP4 after PR #66; B3-CP5 after
  its CF entry.
- **B3-1. Does a new source close a fidelity gap only when its framework is in `frameworkBasis`?**
  Recommended: yes, add the names in one gated prompt CP (B3-CP4 #27; F). Alternatives: registry
  only (D), or a per-category anchor line in research-basis.md (T).
- **B3-2. Y8.11/Y8.12 knowledge, intentions, warning signs, if HECAT/NHES do not verify.**
  Recommended: log as adapted or codebook-defined (counted; T, D); intentions (S065) counted in any
  case (F, D). Alternative: merged-components, not counted (P; F for knowledge only). Worst Y8 drift 4/13.
- **B3-3. Y8.7 "restored" (S144).** Recommended: keep the word and verify the Keyes positive-affect
  lead (P, D). Alternatives: reword to "positive feelings or feeling well" (T) or drop (F), MINOR, re-run S144.
- **B3-4. Y8.6 behavior, after PR #66.** Recommended: narrow to symptoms with use-instead Y1.14 / Y4.2
  / Y4 domain-only (P, D). Alternative: cite CDC conduct problems as partial and add an exclude (T, F).
- **B3-5. F1.6 vs F2.1.** Confirm H027 (confidence managing household finances → F2.1), and approve a
  3.x CF: financial status, savings, confidence → F2.1; learning a skill or completing a course → F1.6.
- **B3-6. S176** ("The program will create a family advisory board", adjudicated F1.9). By the Part
  axis it reads as A2.6. Recommended: review it alongside CP-09-01 (PR #62). Agents leave gold untouched.
- **B3-7. CP-09-01 and Epstein Type 3 "audiences"** (note for PR #62, R-15). Recommended: CP-09-01
  states a reasoned "none" citing CF-009 (counts of attendance are outputs; T). Alternative: an FD (F1
  1/9; F).
- **B3-8. S4.9 with three codes (F2).** One FD is at the line, two cross it. Recommended: no STANDARDS
  change now; prefer citations in F2.
- **B3-9. Senior volunteers' quality of life** (R-07). Recommended: A1.3 (T), with batch 4.

## Notes for in-flight PRs

- **PR #62:** B3-6, B3-7; f1-05 (Epstein Types 3 and 5, SUPPORTED) and f2's caregiver-volunteering
  routing must be read against CP-09-01's F1.9 wording before any F1.9 row is added.
- **PR #66:** R-08 (McKinney-Vento pinpoint), R-09 (ELOF stays Y1.8-only), Y1.14 in later #1, and
  the stale "CP-01-06 (in flight)" text at data.ts line 244. Line 779 (Y4) and line 528 (Y3.1, the
  same PR #31 note, found by T) go to the batch 1 owners.

## Gold rows that constrain changes

Design set. H rows are the pre-3.0 held-out rows that now sit in the design file (R-01).

- Y8: S015, S018, S046, S061, S064, S065, S067, S068, S078, S094, S108, S144, S189, S191, S192, S207,
  S248, H013, H034, H038, H086.
- F1: S022, S118, S164, S176, H062, H072, H078.
- F2: S006, S062, S139, S200, S225, H027, H049, H074.

None flips under the act-now wording. Flips that alternatives would cause: S192 (drop "fine motor"),
S144 (drop "restored"), S062 (narrow F2.2), S139 (drop "Medicaid"), S176 (re-adjudication only).
