# Codebook 3.x research review: cross-batch summary

Date: 2026-10-16. Scope: all 13 domains and 98 codes of codebook 3.1.4. Inputs: the Y1 pilot (`codebook-refinement/research-review/2026-10-16/`) and batches 1-4 in this folder. Nothing here edits the codebook, the registry, gold or PRs #62 and #66. No held-out gold was read. The open decisions are in `DECISIONS.md`.

## Bottom line

1. **The sources hold.** No cited framework is withdrawn or misattributed in substance. One quote is wrong (Y4.12 NHES), and one code redefines its source (A3.2 against Kania & Kramer).
2. **The drift count is wrong.** DEVIATIONS.md logs 5 counted entries. An honest count finds about 35 departures, and 8 of 13 domains are over one third today. Verified citations close most of them.
3. **After the act-now CPs, no domain is over the line**, except A2 if Severin logs "accreditation" as recommended. That takes A2 to 3/6, which deliberately triggers its overdue anchor re-review. Enum cost: +0.

## Numbers

| | Pilot (Y1) | B1 (Y2-Y4) | B2 (Y5-Y7) | B3 (Y8, F1, F2) | B4 (A1-A3) | Total |
|---|---|---|---|---|---|---|
| Domains (codes) | 1 (18) | 3 (23) | 3 (20) | 3 (25) | 3 (12) | 13 (98) |
| Researchers | 4 (+1 follow-up) | 4 | 3 | 4 | 3 | 18 (+1) |
| Verifier runs | 4 | 3 | 2 | 4 | 2 | 15 |
| Claims verified | 57 | 51 | 40 | 69 | 28 | **245** |
| SUPPORTED | 38 | 35 | 26 | 47 | 16 | **162 (66%)** |
| PARTIAL | 19 | 16 | 14 | 22 | 12 | **83 (34%)** |
| Other (misattributed, unsupported, failed) | 0 | 0 | 0 | 0 | 0 | **0** |

Each batch also had one reconciler and four reviewers (taxonomy, fidelity, practitioner, devil's advocate), 20 reviewers in all. Only SUPPORTED and PARTIAL rows support a recommendation. The batches used PARTIAL rows in different ways; decision G3 sets one rule.

## Drift (S4.9: counted entries / codes)

"Honest today" counts the unlogged departures the reviews found in each code's own text. "After" assumes the act-now CPs and the recommended decisions. The worst case is in brackets. **Bold** means over one third; exactly one third is at the line, not over.

| Domain | Codes | Logged today | Honest today | After act-now [worst case] |
|---|---|---|---|---|
| Y1 Academic | 18 | 0 | 5 (28%) | 2 (11%) [3, 17%] |
| Y2 Engagement | 6 | 0 | **4 (67%)** | 1 (17%) [2 at line; **3 (50%)** if a Y2.5 writing FD follows PR #62] |
| Y3 Belonging | 5 | 1 | **3 (60%)** | 1 (20%) [**2 (40%)** if Y3.4 reunification gets an FD] |
| Y4 SEL | 12 | 0 | 1-2 (8-17%) | 1 (8%) [2, 17%] |
| Y5 Identity | 6 | 1 | 2 (33%, at line) | 1 (17%) [2, at line] |
| Y6 Character & Civic | 7 | 0 | **3 (43%)** | 1 (14%) [**3 (43%)** if G3 fails and VIA is refused] |
| Y7 Career | 7 | 1 | **3 (43%)** | 0 [2 (29%) after PR #62; **3** if G1 limits the rule to age] |
| Y8 Health | 13 | 0 | **8 (62%)** | 2 (15%) [4, 31%] |
| F1 Family | 9 | 0 | 2 (22%) | 0 [1, 11%] |
| F2 Basic needs | 3 | 0 | **3 (100%)** | 0 [1, at line] |
| A1 Staff | 3 | 0 | 1 (at line) | 1 (at line) [**2 (67%)** if G1 is rejected] |
| A2 Quality & access | 6 | 2 (at line) | **3-4 (50-67%)** | 2 (at line) [**3 (50%)** if accreditation is logged, as recommended; **4** with facilities] |
| A3 Systems | 3 | 0 | **2 (67%)** (A3.1, A3.2) | 0 [1, at line, under option (a) of A3-1] |

Over the line today: Y2, Y3, Y6, Y7, Y8, F2, A2, A3. Under S4.9, each of these domains' citation-and-deviation CP goes first and carries the drift table. Y2, Y5, F2, A1 and A3 end at the line or one entry below it, so any new FD there brings an anchor re-review.

## Top 10 recommendations (ranked by consequence)

| # | Finding | Fix | CP |
|---|---|---|---|
| 1 | **Y4.12 quotes the wrong document.** The registry and `basis` quote the 2022 NCSHE set, not the cited 2024 SHAPE page, and FD-P09 was closed on that quote (S1.5). | Re-quote NHES 4.5.5, 4.8.5 and 4.12.5 (y4b-10 SUPPORTED); fill in publisher, year and tier. The same entry serves Y4.9 and Y8.3. Land this first. | CP-12-03 (no prompt) |
| 2 | **A3.2 redefines its source.** Kania & Kramer exclude "most collaborations", but the code holds ordinary partnerships (54 real texts; H090). | Add Reisman (2007) "Strengthened alliances" (a3-01 SUPPORTED, `fit: direct`). Keep Kania & Kramer for shared agenda. D backs this "without reservation". | CP-12-12 + CP-12-18 (gate) |
| 3 | **Y2.1 cites a teaching aim (Muhammad's Joy) for a learner's feeling** (S1.6). | Source line and `frameworkBasis` to Pekrun (2024) (y2-01 SUPPORTED). Muhammad stays in `basis`. Pride follows Y2-1. | CP-12-01 + CP-12-16 (gate) |
| 4 | **DEVIATIONS entries rest on false premises.** FD-P13 says CIRCLE covers all of Y6.4 (it covers the behavioral core). FD-P06 says the absorbed Y4.9 construct had no source (y4b-04..06 SUPPORTED). Y6.6 and Y4.5 are marked `framework` against their own `basis`. | Rewrite FD-P13 and amend FD-P06. Y6.6 → adapted with a new FD; Y4.5 → adapted with a merged-components FD. | CP-12-05, CP-12-03 |
| 5 | **About 35 unlogged departures across 12 domains.** B3 also found four proposed FDs filed under the wrong S1.6 case. | Log each in its domain's citation-and-deviation CP, under the right case. | CP-11-02, CP-12-01..12 |
| 6 | **Adjudicated gold rests on unsourced text.** Y1.2 home language (S143), Y5.6 self-advocacy (S032, S236, H060), Y6.1 forgiveness (S167), Y7.5 (S151), Y7.7 documents, F1.6 adult education (H062, S118), F1.3 family eating (H072), Y8.1 activity and sleep. | Cite the SUPPORTED sources the review found: Seal of Biliteracy; 29 U.S.C. 733(b)(5); VIA; 705(5); 675(5)(I) and Casey; WIOA Title II; SNAP-Ed MT1; HECAT and YRBS items. No wording changes. | CP-11-01, CP-12-04..09 |
| 7 | **Dead or weak copies.** Y1.16's only PDF returns 403. 733, Perkins, 7119, Sampson and SAMHSA sit on secondary hosts. `learning-forward-2022` now serves the 2025 edition. | Move to official copies (govinfo, NAP, PubMed, NCSACW) with pinned URLs. | CP-11-01, per-domain CPs, CP-12-28 |
| 8 | **Stale text reaches the prompt.** Four `useInstead` lines still describe long-closed PRs as in flight (Y1 line 244, Y3.1, Y4.7, Y8.10). The Y8.13 Source line misnames the CJCA paper. | Delete or correct them. | CP-12-26, CP-12-14 (gate) |
| 9 | **Superseded or renamed sources.** ISTE 2016 → 2024 (Y6.7); Learning for Justice with no edition; SEVT (Eccles & Wigfield 2020); the Chicago Consortium's name (Farrington, Nagaoka, Allensworth & Easton); CJCA → CJJA; Epstein → the Corwin 4th edition. | Metadata PATCHes that keep the old entries as history. | CP-11-01, CP-12-04/05, CP-12-21, -22, -24 |
| 10 | **Real-data misroutes caused by templates and code names.** The Y1.8 template (35 rows → Y1.1). The DHS "Truancy Provider" template (12 rows: 9 Y3.4, 2 F1.1, 1 F2.3). A3.3's name pulls in about 22-30 community health and economy texts. School climate is split across A2.1, A3.1 and A3.3 (about 21 texts). | Correct the templates at the review desk now (G12). Add the A3.3 exclude after G9. The climate hint comes later. | review desk, CP-12-19 |

## Cross-batch fixes: one CP each, not several

| CP | Fix | Touches | Prompt? |
|---|---|---|---|
| **CP-12-20** | CASEL URL: the 11.2020 PDF becomes primary and the `sites/5` copy the alternate, with excerpts re-pulled, in `v3/build_registry.py` and the verification script. Add a table that assigns each CASEL Self-Awareness bullet to Y4 or Y5; this is the root of B2's R-02, R-04 and R-14. | Y2.2, Y4, Y5 | no |
| **CP-12-21** | Learning for Justice `cite_as`: one string, as printed (2022, Second Edition, "The Southern Poverty Law Center, Inc."). The year on Y5.2's Source line rides the shared gate. | Y4.5, Y5.2 | year only |
| **CP-12-22** | Family-engagement entries. Keep Mapp & Kuttner (2013) as the component, with a note and the dualcapacity.org URL for Version 2 (A2-3). Drop the partial F1.7 link. Add Epstein Type 2 to F1.8 as partial. Move `epstein-six-types` to the Corwin 4th edition copy, and move A2.6's Type 3 row with it. A2.6's "and 6" Source edit stays in CP-12-18. | F1.2, F1.7, F1.8, A2.6 (F1.9 after PR #62) | no |
| **CP-12-23** | CDC YRBS: two 2025 entries under the documents' own titles, with each item pinned to its own PDF. Add "CDC Youth Risk Behavior Survey" to `codebook_names`. Fix the false "YRBS sleep (verified)" `basis` line. | Y8.1, Y8.4, Y8.5, Y8.9, Y8.12 | no |
| **CP-12-24** | Status and rename notes: the HP2030 court-order banner; Digital Equity Act grants terminated while the statute stands (one note on the 1721 and 1723 entries); SNAP-Ed defunded (use an archived URL); Learning Forward 2025 edition; Nagaoka's fall-2026 update; the PA-R02 revision; WWC v5.1; CSTA 2026; CJCA → CJJA; the Chicago Consortium name for Nagaoka and Allensworth & Easton, matching CP-11-01's Farrington note. | Y1, Y5, Y8, F1, F2, A1, A2.3 | no |
| **CP-12-25** | Stale "(located)" in `basis` (20 occurrences in `youthOutcomesV3.data.ts`) and "Pending: located" registry notes, set from registry status by script. Fill the null `tier` and `publisher` on five entries (B3 R-25). The Y1 part waits for PR #66 and the Y2.6 part for PR #62. | 10 domains | no |
| **CP-12-26** | Stale in-flight text in `useInstead`: Y1 line 244 (CP-01-06), Y3.1 (PR #31), Y4.7 (CP-01-06) and Y8.10 (PR #31). Also remove Chafee and Butts from Y3.4's `basis`. | Y1, Y3, Y4, Y8 | yes (gate; the Y1 line after PR #66) |
| **CP-12-27** | CONFUSIONS and DEVIATIONS still use 2.x numbers (CF-003, CF-008, CF-016, CF-019; FD-P02..P08). Renumber them by script from the crosswalk, with a test. CF-008 also contradicts the live F1.9 and A2.6, and its restatement waits on G14 (S176). CF-016's new routings need their own CPs. | Y2-Y6, Y8, F1, A1-A3 | no |
| **CP-12-28** | Official-copy host rule (G8): sweep the registry entries the per-domain CPs leave alone (Cornell LII is used inconsistently today) and add a check to `build_registry.py`. | all | no |
| **CP-12-29** | Secondary frameworks in `frameworkBasis` (G2). Move these edits out of CP-12-14 #27, CP-12-16 and CP-12-18 item 5 into this one CP: Y2 CASEL; Y4 CCSS; HECAT, NSES, MTF, OJJDP, WIOA Title II, SNAP-Ed, HP2030, CFPB and RHY for Y8, F1 and F2; A1 Guskey; the Y6.7 ISTE year. Add a `sync.test.ts` check that every cited framework appears in its domain's `frameworkBasis`. | 9 domains | yes (gate) |
| **CP-12-30** | `research-basis.md`: a dated located → verified note. Mark the categories that are codebook groupings (Y1, Y2, Y3, Y5-Y7, A2, A3-B). Note that A1's split comes from Guskey. Drop the Lerner paragraph and Chafee/Butts. Put A3.1 on CP-10-02. | docs | no |

Three shared entries need sequencing but no extra CP:
- NHES 2024: CP-12-03 first, then CP-12-07.
- McKinney-Vento: the Y1.13 pinpoint in PR #66 first, then F2.3.
- CFPB: a separate Financial Well-Being entry for F2.1, kept apart from Y7.6 (CF-001).

## Patterns across domains

- **Unlogged departures in every batch.** The 2026-09-27 re-verification checked each link. It did not check whether each code's text goes past its links. Asking that per code found 5 in Y1, 8 in Y8 and 3 of 3 in F2.
- **`source` and `frameworkBasis` reach the prompt.** `youthOutcomesV3.ts` prints both, so a citation-only fix there still needs the two-run gate. Every batch split its CPs into a data part and a gated Source part. B1 and B3 raised the same rule question (G2).
- **Statutory duties used as partial fits.** Agency duties (reunification, safe exits, 675(5)(I), HEARTH, Chafee) and program-activity lists (Catalano, WIOA 681.460, 3272(9), 2036a) kept being offered as support for youth outcomes. Duties rated SUPPORTED were used as partial support with no FD, following the A3.1 precedent. Activity lists were rejected as anchors. G4 would make this one rule.
- **Domain-only used as a bin.** At least eight proposed hints send *specific* results to domain-only: Y4.12 incidence → Y8, A3.3 community conditions, school climate, bare self-awareness, "improved behavior", household stability, Y8.6 conduct, the Y1.15 examples. CP-09-09 defined domain-only as "no specific result". G9 asks whether to change that, because it changes the `specificity` export.
- **Thin Part A gold.** A2.6 has no adjudicated row. A3.1's rows are all about policy, none about practice. The A1.3 widening in CP-09-05 rests on a held-out row. In one real run, 60 of 64 A2.1 rows are low or medium confidence. The same gap blocks hints in Part Y (resilience, life skills, self-awareness, Y8.1 nutrition), because S3.1 needs two rows per side.
- **The DHS truancy template.** One "Truancy Provider" outcome ("prevention of youth entry into the formal child welfare system") appears in 8 programs and was coded Y3.4, F1.1 and F2.3. It is 9 of Y3.4's 10 rows in that run. Three batches saw it and none owns it (B1 R-26, B3 R-17, B4 R-23). A related "diversion of families from truancy court" sits on an A2/F line that nobody covers (B4 R-26).
- **Template inflation.** Real-run counts were per row. Y1.8 (36 rows, 2 texts) and the truancy template show that counts need to be unique texts.

## Notes for in-flight PRs (notes only; the PRs are not edited)

**PR #62 (CP-09-01..08):**
- **Y2 drift.** Y2 is at 2/6 after CP-12-01. A Y2.5 creative-writing FD (CCSS W.3 and PISA 2022 are unverified) would take it to 3/6 and freeze PR #62's Y2 CPs until a re-review (G7). FD-P16's anchor line should list all four NCAS processes (S077). Y2.6 still says "located".
- **Leadership.** Agree one hint wording for Y4.7 vs Y6.4 under CP-09-08 rule 7, with an exclude pointer to Y4.7, that does not flip S059.
- **Y7.1.** Keep "aspiration" (H007 blocks narrowing) and cite 2302(7)(A) on govinfo. Log an FD only if (7)(A) does not cover interest.
- **Y7.2.** Resumes and interviews (S063) have only PARTIAL support. Verify Conley's work side.
- **Y7.3.** Cite 3272(17). Drop "or daily life" (T, F) or write "work or study" (D). Test the three bare "digital literacy" texts that currently go to Y1.4.
- **Y7 routings.** Interviews → Y7.2, pitching → Y4.6, business creation → Y7.4.
- **F1.9 (CP-09-01).** State a reasoned "none" for Epstein Type 3 "audiences", citing CF-009. Read f1-05 and the caregiver-volunteering routing against its wording. Review S176 alongside it.
- **A2.4 (CP-09-02).** "(or another group facing barriers)" has no source, and 11 of 13 real texts under it are general equity of access. Drop it, or require a named barrier and send reach to A2.5. After merge, re-anchor on CDC Strategies (a2-03) and ESSA 6318(f) (a2-07).
- **A2.5.** Add the 21st CCLC APR "30 days or more" (a2-09 PARTIAL) as a partial row for H001.
- **CP-09-05.** Its only evidence is a held-out row. Re-justify it from design gold or real texts, or hold it. The A1.3 staffing widening follows it.
- **Y1.4 and Y1.18.** Y1.4: CSTA 2026 (supersession unconfirmed) and ESSA 7801(52). Y1.18: the certificate boundary with Y7.4.
- **A2 and S4.9.** If accreditation is logged, PR #62 should land first (A2-2). CP-10-01's open ADA Title II question also applies.

**PR #66 (CP-11-01..03, Y1):**
- **Stale text.** Y1 line 244's "CP-01-06 (in flight)" belongs in CP-11-01 or CP-12-26.
- **Shared entries.** The McKinney-Vento pinpoint 11432(g)(3)(A)-(B) is shared with F2.3. ELOF stays Y1.8-only; Y8.2 fine motor does not borrow it (Y1-1).
- **Publisher rename.** Farrington's rename note should match the wording used for Nagaoka in CP-12-04 and CP-12-24.
- **Waiting for merge.** Y4.3 scope (self-control → Y4.2, S103) crosses CP-11's rule 8. Y4.10 vs Y1.7 (chess, strategy) is pilot item 11. The Y8.6 behavior boundary touches Y1.14.
- **Y1.8 hint.** The hint may move few rows because the atomizer drops "Elementary participants". The review-desk fix (G12) does the real work there, as it does for the truancy template.

## Order of landing

**1. Now, no eval (registry, `basis`, `fidelity`, DEVIATIONS and docs only).**
- Over-the-line domains first: CP-12-03 (led by the Y4.12 re-quote), CP-12-02 (Y3, with the FD-P01 narrowing in the same CP), CP-12-05 (Y6 data part), CP-12-06 (Y7.4-Y7.7 data part), CP-12-07 (Y8), CP-12-09 (F2) and CP-12-12 (A3 registry rows).
- Then CP-12-04 (Y5 data part), CP-12-08 (F1) and CP-12-10 (A1).
- Cross-batch: CP-12-20, CP-12-21 (registry part), CP-12-22 (after A2-3), CP-12-23, CP-12-24, CP-12-25 (except Y1 and Y2.6), CP-12-27, CP-12-28 and CP-12-30.
- Every CP that changes a count updates the drift table. The review-desk corrections (G12) can run now.

**2. One two-run design-set gate, after PRs #62 and #66 merge.** All Source-line and `frameworkBasis` edits are citation text, so one pair of runs covers them together: CP-12-16, the Source parts of CP-12-04..06, CP-12-14 (3.2.0 if Y8.4 "puberty" lands), CP-12-18, CP-12-26 and CP-12-29. The run report names every design row listed in the batch files. No act-now item changes a definition or include, so no adjudicated row should flip.

**3. Hints, each with its own gate, once its preconditions are met.**
- CP-11-03: after PR #66.
- CP-12-15: after a 3.x CF entry and two Y8.1 nutrition rows.
- CP-12-19: after G9.

**4. Waits for a PR.**
- PR #62: CP-12-01 (Y2), CP-12-11 (A2, since A2.5 is in the PR), Y7.1-Y7.3, the F1.9 rows, FD-P16 and the A2.4 re-anchor.
- PR #66: the Y1 parts of CP-12-25 and CP-12-26, Y4.3 scope, Y8.6 behavior, F2.3 McKinney-Vento, and any move of S192 to Y1.8.

**5. Later cycle.** The A2 anchor re-review, A3.4 school climate (+1 enum), the school-climate hint, and the resilience and life-skills CFs, all after Severin adjudicates proposed rows.
