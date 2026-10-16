# Codebook 3.1.5: the land-now parts of the 2026-10-16 research review

Applied 2026-10-16 on branch `claude/y1-research-review-pilot-7z3jxj` (PR #66), following
`APPLY-BRIEF.md`. One PATCH (`V3_VERSION` 3.1.4 → 3.1.5) covers every part below.

**The hard test held.** The generated coding prompt for `youth_outcomes_v3` was saved before any edit:
the system instruction from `buildSystemInstruction` plus the Gemini response schema from
`buildBatchResponseSchema`. After every CP it was compared byte for byte, and it was identical every
time. No edit reached the prompt, so none had to be undone.

**Where the changes live.**

- Registry results are recorded only through build-script modules in `codebook-refinement/v3/`:
  - `verification_2026_10_16.py` (CP-11-01);
  - `_b1` (Y3, Y4, CASEL);
  - `_b2` (Y5 to Y7);
  - `_b3` (Y8, F1, F2);
  - `_batch4` (A1, A3);
  - `_hosts` (CP-12-28).
- All six run through the shared engine `review_2026_10_16.py`. Each module has a record file
  `source-verification-2026-10-16*.json`, a copy of every verifier verdict the module uses, regenerated
  by `python3 codebook-refinement/v3/review_2026_10_16.py`.
- The registry went from 87 sources and 146 supports to 129 sources and 239 supports. The
  codebook-defined extensions are still only A2.2 and A2.4.
- Provisional ids are now real ids everywhere. The map is in `id-map.csv`.

## Per CP

### CP-11-01: Y1 citation fixes

- **Landed:**
  - The Farrington, Allensworth & Easton and Conley citations and publishers, as printed.
  - The ELOF govinfo URL and its note.
  - The NRP excerpt.
  - The McKinney-Vento Y1.13 pinpoint.
  - New entries: the Seal of Biliteracy guidelines, ESSA advanced coursework, 42 U.S.C. 675(1)(G),
    and the RTT-ELC definitions.
  - The Y1 `basis` notes.
- **Round 2, V1 (Seal authorship): PARTIAL, on authorship only.** The `cite_as` follows the document's
  own suggested citation, which names seven bodies.
- **Waits for the gate:**
  - the Source lines for Y1.2, Y1.13 and Y1.16;
  - the Seal clause in `frameworkBasis`, which belongs to CP-12-29.

### CP-11-02: Y1 deviation log

- **Landed:**
  - FD-P21 (Y1.10) and FD-P22 (Y1.13), both counted.
  - FD-P23 (Y1.15), merged-components.
  - The `fidelity` and `deviation` fields for those three codes.
  - The Y1 dated section, including the Y1.2 bullet.
- **Waits for the gate:** nothing.

### CP-12-02: Y3

- **Landed:**
  - 5 new sources and the new supports.
  - The Y3 `basis` changes.
  - FD-P01 narrowed to "safe".
  - The research-basis.md Y3 text.
- **Round 2, V1 (NRC/IOM safety): PARTIAL.** It was recorded as a partial row. Under G3 a partial does
  not close FD-P01, which stays open.
- **Waits for the gate:**
  - the Y3.2 Source line (CP-12-16);
  - the Y3 secondary clause in `frameworkBasis` (CP-12-29).

### CP-12-03: Y4

- **Landed:**
  - The NHES 2024 metadata and 12 new supports.
  - The Y4 `basis` changes.
  - Y4.4, Y4.8, Y4.9 and Y4.11 are now framework; FD-P04, FD-P05, FD-P06 and FD-P08 are closed.
  - FD-P24 (Y4.12) and FD-P25 (Y4.5) are opened.
- **Round 2, V1: NOT SUPPORTED.** The proposed NHES phrase is not on the 2024 page.
  - The Y4.12 support now quotes the verifier's own verbatim 2024 indicator 4.5.5: "Demonstrate refusal
    skills to use in a variety of situations."
  - It is recorded as `fit: partial`, resting on claim y4b-10.
  - The CP's status line records that the registry now quotes text that is on the page.
- **Waits for the gate:**
  - the Y4 Source lines;
  - the Y4 secondaries in `frameworkBasis`;
  - the Y4.7 `useInstead` text (CP-12-26).

### CP-12-04: Y5

- **Landed:**
  - Learning for Justice 2022 and the Nagaoka publisher.
  - Search Institute spiritual development, which closes FD-P12. Y5.5 is now framework.
  - The FD-005 note.
  - Y5.3 is adapted under FD-P26.
- **Round 2:**
  - **V-Y5-1: PARTIAL.** The Rehabilitation Act 733 row was added as a partial.
  - **V-Y5-2: PARTIAL, read on a secondary conference host.** The NRC 2009 row was not added, so
    FD-P26 also covers science.
  - **V-Y5-3: PARTIAL.** Farrington 2019 was added. Its note says the year and publisher rest on the
    file path and a press release.
- **Waits for the gate:**
  - the Source lines for Y5.2, Y5.3, Y5.5 and Y5.6;
  - the Y5 clause in `frameworkBasis`.

### CP-12-05: Y6

- **Landed:**
  - VIA, Watts-Diemer-Voight, ISTE 2024 and Developmental Assets for Y6.4.
  - The Y6 `basis` changes.
  - Y6.6 is adapted under FD-P27.
  - The FD-P13 note.
- **Round 2, V-Y6-1: PARTIAL.** A partial NAAEE row was added, and FD-P27 stays open.
- **Waits for the gate:** the Source lines and `frameworkBasis` for Y6.

### CP-12-06: Y7

- **Landed:**
  - The Perkins V govinfo URL and WIOA 681.460.
  - Rehabilitation Act 705, Casey Life Skills, 42 U.S.C. 675(5)(I) and IDEA transition.
  - The Y7 `basis` changes.
  - Y7.7 is now framework, and FD-P15 is closed.
- **Waits for the gate:** the Source lines for Y7.4, Y7.5 and Y7.7, and `frameworkBasis`.

### CP-12-07 (applied together with CP-12-23, which goes first): Y8

- **Landed:**
  - HECAT and nine Healthy People 2030 objectives.
  - MTF 2026, CDC youth violence 2024 and OJJDP 2017.
  - The NHES, SHAPE PE and NSES supports.
  - The NCTSN and CJCA titles.
  - The Y8 `basis` changes.
- **Round 2:**
  - **V2: NOT SUPPORTED.** FD-P29 (Y8.2) stays open.
  - **V4b: NOT SUPPORTED.** FD-P30 (Y8.11) covers intentions only.
  - **V5 and V5b: NOT SUPPORTED.** FD-P31 (Y8.12) is opened.
  - **V12: PARTIAL.** FD-P32 (Y8.1 screen time) is opened.
  - **V13: SUPPORTED.** No Y8.5 entry is needed.
  - FD-P28 (Y8.13) is open as the CP drafted it.
- **Y8 now has 5 of 13 codes with counted deviations (38%), which is over the S4.9 line.** An anchor
  re-review is required before any further Y8 change.
- **Waits for the gate:** the Y8 names in `frameworkBasis` (CP-12-29).

### CP-12-08: F1

- **Landed:**
  - CSSP Core Meanings, with the V6 corrected citation.
  - SNAP-Ed MT1.
  - WIOA Title II, after V10.
  - The F1 `basis` changes.
  - F1.6 is adapted under FD-P33.
- **Round 2:**
  - **V14: NOT SUPPORTED.** F1.2 is adapted under FD-P34.
  - **V7: UNREACHABLE.** The archive copy could not be read, but the live MT1 page was read, so the
    trigger for an F1.3 entry did not fire and no F1.3 entry was opened. The V7 verifier reported
    different live wording on that page; this is flagged for follow-up.
- **Waits for the gate:** the F1 names in `frameworkBasis`.

### CP-12-09: F2

- **Landed:**
  - The NYTD and AHS-01 F2.1 rows.
  - CFPB financial well-being, NWS-01, RHY 45 CFR 1351, SDOH-04 and HEARTH 11386a (after V11).
  - The F2 `basis` changes.
- **Round 2, V8: NOT SUPPORTED.** No USDA nutrition-security row was added, and F2.2 is adapted under
  FD-P35. F2 is now at 1/3, which is at the line.
- **Waits for the gate:** the F2 names in `frameworkBasis`.

### CP-12-10: A1

- **Landed:**
  - The Learning Forward URL and note.
  - The SAMHSA URL, with the A1.2 fit now direct.
  - The WHO burnout row.
  - The A1.2 `basis`.
  - A1.1 is adapted under FD-P36.
- **Round 2, V1: UNREACHABLE.** FD-P36 stays open. A1 is at 1/3, which is at the line.
- **Waits for the gate:** nothing.

### CP-12-12: A3

- **Landed:**
  - The Reisman A3.2 support (direct) and the Coffman A3.2 support (partial).
  - The Sampson PubMed URL, excerpt and fit.
  - The `basis` for A3.2 and A3.3.
- **Waits for the gate:** the A3.2 Source line.

### CP-12-15: tie-breakers CF-029 and CF-030

- **Landed:**
  - The "Codebook 3.x tie-breakers" section, with CF-029 and CF-030 marked "hint held".
  - `sync.test.ts` and `registry.test.ts` now read only the 2.x part of CONFUSIONS.md.
  - A new test: "3.x confusion entries (S3.1)".
- **Waits for the gate:** the hint text, after G11.

### CP-12-16: land-now part

- **Landed:**
  - `ccss-speaking-listening-anchors`.
  - The casel-2020 Y4.6 definition support.
  - `codebook_names` on `acf-nytd` and `chafee-42usc677-a2`.
  - The Y4.6 `basis`.
- **Left out:** the note sentence "Named as a Y4 secondary by CP-12-29 (G2)", because CP-12-29 is not
  applied.
- **Waits for the gate:**
  - every Source line in the CP;
  - the Y2 `frameworkBasis` re-anchor.

### CP-12-18: land-now part

- **Landed:** the `codebook_names` for Guskey and Reisman.
- **Waits:**
  - the A3.2 Source line waits for the gate;
  - the A2.6 changes are held for the A2 anchor re-review.

### CP-12-20: CASEL

- **Landed:**
  - The URL of record is now the 11.2020 PDF (y4a-10), with its source excerpt.
  - A note with the Self-Awareness allocation table.
- **Round 2, V-CASEL-1:**
  - SUPPORTED for Y4.1, Y4.3, Y4.4, Y4.5, Y4.6, Y4.10, Y4.12 and Y5.4; PARTIAL for Y5.1. The excerpts
    were re-pulled and the fits left unchanged.
  - The Y2.2 claim is recorded only, since there is no Y2.2 CASEL support until CP-12-01.
  - The full self-awareness list adds "Demonstrating honesty and integrity", which is recorded as
    unallocated.
- **Other rows:** the CP-10-01 rows outside V-CASEL-1 (Y4.2, Y4.7, Y4.8, Y4.9, Y4.11) carry a note
  saying which copy they were read on.

### CP-12-21: registry part

- **Landed:** with CP-12-04's rows. The note now keeps the old URL as history.
- **Waits for the gate:** the year in the Y5.2 Source line.

### CP-12-22: land-now part

- **Landed:**
  - Epstein moves to the Corwin handout. The `cite_as` uses the handout title from claim
    CP-12-08-V14's `corrected_cite_as`. That claim's verdict was NOT SUPPORTED for F1.2 routines, so
    it supplies no support, only the printed title.
  - The F1.2 re-check (f1-03, direct) and the F1.8 re-check (f1-04, partial).
  - Copy notes on F1.1, F1.9 and A2.6.
  - The F1.8 `basis`.
- **Left out:** the F1.8 `basis` clause "Version 2 of 2019 noted in the registry". That note is
  CP-12-11's, and CP-12-11 is not applied.
- **Waits for the gate:** the F1.7 Source line and the F1.7 Mapp & Kuttner removal.

### CP-12-23: YRBS 2025

- **Landed:**
  - The two YRBS 2025 instrument entries.
  - The `cdc-yrbss` Y8.12 re-check and its note.
  - The Y8.1 `basis` sentence.

### CP-12-24: status and rename notes

- **Landed:**
  - Item 2 (CJCA rename).
  - Item 4 (CSTA 2026 watch).
  - Item 5 (Digital Equity Act, worded as unverified).
  - Item 6 (SNAP-Ed).
  - Item 8 (Healthy People 2030 banner).
  - Item 9 (PA-R02 watch).
  - Items 1 and 3 were already in place through CP-12-04 and CP-12-10.
- **Round 2:**
  - **V-STATUS-1: SUPPORTED.** The banner wording is quoted on all 14 `hp2030-*` entries.
  - **V-STATUS-2: PARTIAL.** The SNAP-Ed note quotes the FNS memo of August 13, 2025: OBBB Section
    10107 ends required funding with the FY2025 allocation, and states may spend until September 30,
    2026. The note does not say that funding "has ended".
- **Left out:** item 7, because the USDA nutrition-security entry does not exist (V8 failed).

### CP-12-25: prompt-free parts

- **Landed:**
  - `v3/refresh_basis_status.py` and the test "located only if the registry still has a located
    source".
  - One tag changed: Y8.10.
  - WAIT is computed at run time: Y2.6 and F1.9 wait for PR #62, and A2.6 waits for the held part of
    CP-12-18. The Y1 rows were already fixed on this branch.
  - `tier` and `publisher` filled where they were null. `shape-nhes-2024` was already set.
  - The `search-40-assets` Y8.10 component and note.
  - The engine gains a `TIER_PUBLISHER` table, which only fills nulls.

### CP-12-27: renumbering by script

- **Landed:**
  - `v3/renumber_2x_refs.py`, which is idempotent: a rerun gives no diff.
  - "(now Y…)" on 24 lines of FD-P02 to FD-P20, matching the CP's table.
  - CF-031 (from CF-003), CF-032 (from CF-016) and CF-033 (from CF-019). All three are active, with gold
    mapped by identical statement text.
  - Tests in `youthOutcomesV3.test.ts`:
    - the generated entries match the crosswalk;
    - the gold maps to the same statements;
    - the override agrees with rule 14;
    - the DEVIATIONS annotations are complete.
  - The 3.x CF test now applies the 2.x rule to generated entries.
- **Scope:** the script annotates FD-P01 to FD-P20 only. Later entries use 3.x ids and standard
  indicator numbers (NHES 4.5.5, WWC 5.1, NAAEE 3.2A) that the token pattern would otherwise misread as
  2.x codes.
- **Left out:** the 3.x copy of CF-008, which is blocked on S176 (G14).

### CP-12-28: host rule

- **Landed:**
  - `v3/hosts.py`.
  - The check in `build_registry.py`, which also requires every match claim to be a recorded SUPPORTED
    or PARTIAL verdict.
  - `verification_2026_10_16_hosts.py`.
  - New hosts from this review are classified.
- **Round 2:**
  - **V-HOST-1 to V-HOST-4: SUPPORTED.** Chafee 677, both Digital Equity Act entries, IDEA 1471 and
    McKinney-Vento 11432 move to govinfo. The verifiers' corrected pinpoints for DEA 1723(c)(1)(B)(v)
    and IDEA 1471(b)(7) are applied, and the F2.3 note records the 11434a page.
  - **V-HOST-5: SUPPORTED** for circle, farrington and mapp. All three are recorded as secondary-host
    matches, and farrington takes its corrected citation.
  - **V-HOST-5 (conley-2007, hulleman), V-HOST-6 (cjca) and V-HOST-7 (eccles): PARTIAL.** Each verifier
    recorded the bibliographic match, so each entry is a match, with the unconfirmed point stated in
    its note. Eccles takes its corrected citation.
  - **V-HOST-8 (Muhammad): PARTIAL.** The page is not confirmed as the author's own. The entry stays on
    HOST_PENDING, and its corrected citation is applied.
- **Still pending:**
  - `hidi-renninger-2006` (CP-12-01);
  - `essa-4109-tech-capacity` (CP-12-11);
  - `muhammad-five-pursuits`.

### CP-12-30: research-basis.md

- **Landed:** items 1, 2, 3, 5, 6 and 7. Item 4 came through CP-12-02.
- **Changed wording:** the A3 text no longer names provisional FD-P51, because that entry is not
  opened. It says the deviation entry is not opened yet.

### CP-12-31: CF-034

- **Landed:** CF-034 (F2.1 vs F1.6). It cites FD-P33, which is F1.6.

### CP-12-32: CF-035 and CF-036 only

- **Landed:** CF-035 and CF-036, both marked "hint held".
- **Changed wording:** CF-035 refers to the not-yet-opened A1.3 widening as "FD-unassigned (A1.3)".
- **Waits:**
  - everything else in the CP;
  - G11 and G9.

## Not applied (per the brief)

- **CP-12-01 (Y2) and CP-12-11 (A2):** they land after PR #62.
- **CP-11-03, CP-12-14, CP-12-19, CP-12-26 and CP-12-29:** these reach the prompt or are gated.
- **Every part that reaches the prompt:** Source lines, `frameworkBasis`, hints, definitions and rules.
- **Everything blocked on G11 (proposed rows) or G14 (S176).**

## Drift per domain (S4.9)

Counted entries are open and not merged-components.

| Domain | Before 3.1.5 | After 3.1.5 |
|---|---|---|
| Y1 | 0/18 | 2/18 (Y1.10, Y1.13) |
| Y2 | 0/6 | 0/6 |
| Y3 | 1/5 (Y3.1) | 1/5 (Y3.1) |
| Y4 | 0/12 | 2/12 (Y4.5, Y4.12) |
| Y5 | 1/6 (Y5.5) | 1/6 (Y5.3) |
| Y6 | 0/7 | 1/7 (Y6.6) |
| Y7 | 1/7 (Y7.7) | 0/7 |
| Y8 | 0/13 | 5/13 (38%, over the line: anchor re-review required) |
| F1 | 0/9 | 2/9 (F1.2, F1.6) |
| F2 | 0/3 | 1/3 (at the line) |
| A1 | 0/3 | 1/3 (at the line) |
| A2 | 2/6 | 2/6 (at the line) |
| A3 | 0/3 | 0/3 |
