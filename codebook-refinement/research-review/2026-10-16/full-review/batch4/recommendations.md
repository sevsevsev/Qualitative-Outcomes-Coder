# Batch 4 research review (A1, A2, A3): recommendations

Date: 2026-10-16. Scope: A1 (3 codes), A2 (6), A3 (3), codebook 3.1.4. Nothing here changes the
codebook, registry or gold. 28 claims verified (16 SUPPORTED, 12 PARTIAL). Held-out gold was not
read; the held-out row a researcher took from CP-09-05 is excluded (R-01).

## Summary

1. **What holds:** every cited source exists and is attributed correctly; Coffman/Reisman (A3.1),
   Sampson (A3.3), Guskey (A1.1, A1.2), UW Outputs (A2.5) and the connectivity statutes (A2.3) stay.
2. **What is wrong:** A1's real anchor (Guskey) is missing from `frameworkBasis`; A1.1, A2.1
   ("accreditation") and A3.2 (past Kania & Kramer) go beyond their sources with no FD; A2.2's
   `basis` names an unregistered source; A2.6 cites a poor-fit Epstein Type 6; A3.3's name pulls in
   community health and economy texts; school climate is scattered across A2.1, A3.1 and A3.3.
3. **Drift (S4.9, counted / codes):** A1 0/3 → 1/3; A2 2/6 → 2/6, or 3/6 (over) if accreditation
   gets an FD (decision B4-2); A3 0/3 → 0/3, or 1/3 under B4-4 option (a). Enum +0 throughout.

## Act now

Verdicts: T taxonomy, F fidelity, P practitioner, D devil's advocate (A accept, AC with changes, R
reject, Df defer). All items enum +0, PATCH. Prompt "no": registry, `basis`, `fidelity`, DEVIATIONS
only. Prompt "yes" (Source, `frameworkBasis`, definition, include/exclude, rules): two-run gate.

### CP-B4-01 · A1 citation and deviation (CITATION_FIX + deviation log, PATCH)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 1 | A1.1 | Text names volunteers, mentors, coaches, case managers and "confidence"; Guskey and Learning Forward cover educators' learning only (decision C bites) | a1-03 Kirkpatrick L2 SUPPORTED ("acquire the intended knowledge, skills, attitude, confidence") but the host is a certification vendor (S1.2 tier unresolved) | AC/Df→FD/A either/R→FD | `fidelity: adapted`; new FD, sector widening, naming confidence too (F). Keep the wording: narrowing flips S043, S083, S142, S146, S244, H014. Close the FD only if B4-1 rules Kirkpatrick admissible or a non-vendor version verifies | new FD (counted) | no |
| 2 | A1.1, A1.2 | `learning-forward-2022` URL serves a newer edition | a1-01 PARTIAL (2022 Standards Summary); a1-02 PARTIAL ("led to a 2025 edition") | A/A/A/AC | Pin the registry URL to the 2022 PDF; note that a 2025 edition exists. Fit stays partial. No re-cite to 2025 (no dated record; D, T) | none | no |
| 3 | A1.2 | SAMHSA (2014) is on a third-party copy | a1-05 SUPPORTED ("fully integrating knowledge about trauma into policies, procedures, and practices"), HHS/ACF NCSACW host | A/A/A/A | Registry URL to NCSACW; update `basis` host wording | none | no |
| 4 | A1.3 | Burnout in the include has no definition source | a1-07 SUPPORTED (WHO 2019: "a syndrome conceptualized as resulting from chronic workplace stress") | A/A/A opt/R | Registry supporting row only, no codebook name (D's terms). Source-line naming (T, F) can follow later | none | no |
| 5 | A1 | Guskey (2002) produces A1's category split but is not named in `frameworkBasis`; research-basis.md says the split "follows Learning Forward" | Guskey L2/L4 already verified direct (CP-10-01) | A(new)/A(new)/–/– | Add Guskey (2002) to A1 `frameworkBasis`; fix the research-basis sentence. Ties to decision B3-1. D's general objection to prompt churn applies | none | **yes** (ships in CP-B4-04) |

Drift A1: 0/3 → 1/3 (not over). Under decision C, A1.2 needs no FD, so R-14's 2/3 worst case falls away.

### CP-B4-02 · A2 citation and deviation (CITATION_FIX + deviation log, PATCH)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 6 | A2.2 | `basis` and FD-P18 name an Urban "mentoring" source that is not in the registry (S1.1) | a2-11 SUPPORTED ("program-centered outcomes (reach, participation, satisfaction)"); a2-01 PARTIAL (no families) | AC/AC/AC/AC | Register the Urban COF (2006) at `fit: partial` for participant satisfaction; correct `basis`; rewrite FD-P18's anchor line. Cite as "The Urban Institute & The Center for What Works (2006)" (D, F, T; the verifier also accepts the eight-author form). A2.2 **stays codebook-defined**: family satisfaction and perceived safety remain unsourced. Do not drop "safety" (H002) | changed FD-P18 (text only) | no |
| 7 | A2.3 | 7119(a)(2) cited on a weaker copy | a2-14 SUPPORTED ("purchasing devices, equipment, and software applications") | A/A/A/A | Registry URL to govinfo; fit partial → direct | none | no |
| 8 | A2.3 (+F1.6) | Digital Equity Act grants terminated; statute stands | reconciliation R-07 (news items not filed as claims) | A/A/A/AC | One status note shared by the 1721 and 1723 registry entries; cite no news item | none | no |
| 9 | A2.5 | Weiss component claims more than the abstract shows; `basis` still says "located" | a2-10 SUPPORTED ("participation = enrollment + attendance + engagement"); issue 105, not volume | A/A/A/A | Component text "participation equation: enrollment and attendance"; fit stays partial; `basis` located → verified | none | no |
| 10 | A2.6 | Mapp & Kuttner (2013) vs Version 2 (2019); one entry serves F1.7, F1.8, A2.6 | a2-13 SUPPORTED ("Systemic: embraced by leadership across the organization"), publisher URL; the PDF names no author or year | AC(cite v2)/A(keep 2013, note v2)/A/AC(keep 2013) | Keep 2013 as the component; add a registry note that v2 adds to it, with the dualcapacity.org URL. One decision for all three codes (B4-3). | none | no |
| 11 | A2.6 | Epstein Type 6 (community collaboration) is a poor fit the registry already flags; taxonomically it is A3.2 | registry judgment; no new claim needed | A/A/A/A | Remove "and 6" from Source and the registry row; keep Type 3. If batch 3 moves Epstein to the Corwin copy, move A2.6's Type 3 row too (R-06) | none | **yes** (CP-B4-04) |

Drift A2: 2/6 unchanged by this CP. A2.1 and A2.3 go to decisions B4-2 and B4-5.

### CP-B4-03 · A3 citation (CITATION_FIX, PATCH)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 12 | A3.2 | Code covers ordinary two-party partnerships (54 LM texts); Kania & Kramer exclude "most collaborations", so the code redefines its source with no FD | a3-01 SUPPORTED ("the level of coordination, collaboration and mission alignment among community and system partners"); H090 depends on it | A/A/A/A (D: "the one source change I back without reservation") | Add Reisman (2007) "Strengthened alliances" to the Source line, `fit: direct`; keep K&K for shared agenda and measurement. Land before any A3.1 FD (T) | none (closes an unlogged gap) | **yes** (CP-B4-04) |
| 13 | A3.2 | Coffman partnerships | a3-02 SUPPORTED ("Mutually beneficial relationships with other organizations or individuals"), advocacy framing | A partial/A partial/A/R | Registry row at `fit: partial`, no Source-line name (meets D's "redundant" objection) | none | no |
| 14 | A3.3 | Sampson cited on a weaker copy | a3-03 SUPPORTED ("social cohesion among neighbors combined with their willingness to intervene") | A/A/A/A | Registry URL to PubMed; fit partial → direct | none | no |

### CP-B4-04 · Part A Source lines (CITATION_FIX, PATCH, two-run design-set gate)

Items 5, 11 and 12, so one pair of runs covers them. No gold row flips (S195, H090 hold).

### CP-B4-05 · Part A boundaries (HINT/RULES, PATCH, two-run gate; after B4-6)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 15 | A3.3 | Name ("Community Conditions") pulls in community health, safety, economy and norm texts (about 22 LM + 7 NLM per D; about 30 per P) | a3-03 SUPPORTED (definition is pure Sampson); a3-05 SUPPORTED but would make A3.3 a catch-all | A(a)/A(a)/A(a)/AC(a); all R(b) | Exclude: "community health, safety, economic or norm outcomes with no cohesion, trust or collective action → A3 domain-only". Include (P, T): "residents' connection to one another and shared action for the neighborhood" (keeps P's resident-participation texts). Rename deferred to the next MAJOR. S154 holds. Cycle report must say 3.1.x A3.3 counts are not comparable | none | **yes** |
| 16 | A1.2 / A3.1 | Subject rule: staff applying a practice vs an institution adopting one | Gold on both sides: S148 (A1.2, alternate A3.1), S101 (A3.1) | A(new)/–/AC/– | One CF: named adults applying a practice → A1.2; a school, district or institution adopting a practice into its structure (policy, budget, curriculum, routine) → A3.1. Amend CF-019 to match. If B4-4 picks option (b), the second arm becomes "→ A3 domain-only" | none | **yes** |

Both send specific results to domain-only: B4-6 first (T).

## Worth a later cycle

| # | Item | Why later |
|---|---|---|
| 1 | **School-climate hint** across A2.1, A3.1, A3.3 (about 21 real texts, largest Part A inconsistency, P): program's own environment → A2.1 (H057); a youth's own perception → Y3.1/Y8.10; school-wide climate or culture → A3 domain-only | T, F, P accept with changes; D rejects now. Depends on B4-4 (A3.1 wording) and B4-6 (domain-only). a3-06 is PARTIAL and secondary, so it cannot support a code |
| 2 | A3.4 school climate (enum +1) | All four defer: needs a verified primary EDSCLS source and design gold |
| 3 | A2.4 re-anchor after PR #62: CDC Strategies (a2-03 SUPPORTED, "identify and remove barriers") and ESSA 6318(f) (a2-07 SUPPORTED, "parents and family members who have limited English proficiency") | All four accept these two. Split on the rest: 504 regs a2-05/06 PARTIAL (T, F, P partial; D R), CAST a2-08 (T, P, F supplementary; D R), CDC About a2-04 (joined passages; D R). FD-P19 becomes adapted, sector widening for the language half (F); D argues the residue is codebook-defined, not sector widening. Count unchanged |
| 4 | A1.3 staffing levels (JOLTS openings and hires, a1-06 PARTIAL now, direct for the widened clause) | T, F, D defer; P accepts after PR #62. Rests on draft CP-09-05; MINOR. Needs two proposed design rows from Severin; no held-out text may justify it |
| 5 | A2.5: 21st CCLC APR "30 days or more" (a2-09 PARTIAL; two wordings) at `fit: partial` for H001 | T, F, P accept partial; D rejects. Touches CP-09-01: note for PR #62, whose owner may prefer the current APR |
| 6 | A2.6: ESSA 6318(a)(2)/(c)(1) (a2-12 SUPPORTED) | T, F, P accept; D rejects (Mapp is direct; A2 has lost three federal anchors in 18 months). |
| 7 | A2.1 confusion mining: 60 of 64 NLM rows low or medium confidence; check against S011 (expected none) | D, T. Do before any A2 anchor re-review |
| 8 | Staff credentials tie-breaker (R-04): one person earning a credential → A1.1; counts of certified or retained staff → A1.3 | P now; T, F, D defer (no source, no gold). Goes with item 4 |
| 9 | research-basis.md: A2 and A3-B categories are codebook groupings; A1 split from Guskey; A3.1 on CP-10-02 | Docs only (T, D, P); next docs edit |
| 10 | Real-use leads (P): organizational reputation (about 7 texts); partner satisfaction; split enforcement for multi-outcome A texts | No source or gold yet |
| 11 | Unowned hand-offs R-23 to R-26 (child welfare, staff rapport, truancy diversion, Social Capital) | Assign owners |

## Rejected, and why

- **Kirkpatrick L3 for A1.2** (a1-04): not needed under decision C (F, D; T, P optional).
- **Volunteer retention include for A1.3** (a1-08 PARTIAL): F, D reject, T defers; P dissents
  (accept with an FD, and change the prompt's `mentors_volunteers` line, `youthOutcomesV3.ts` line
  105, which routes volunteers only to A1.1 or A1.2). A counted FD on a partial source; revisit with B4-7.
- **SAMHSA URS Maine table for A2.2** (a2-02 PARTIAL): one state's table (T, F, D; P partial).
- **Urban COF as A2's domain anchor**: covers two of six codes (T).
- **Reisman "school policy" for A3.1** (a3-04 PARTIAL): the codebook's inference (F, D).
- **Widening A3.3 with Reisman "Changes in impact"** (a3-05): catch-all, against S2.2 (all four).
- **Dropping "accreditation" (A2.1) or "safety" (A2.2)**: flips S075 and H002 (all four).
- **A2.6/A3.2 tie-breaker as drafted** (R-12): contradicts adjudicated S176 (all four defer).

## Unverified leads (carry nothing)

OPM's Kirkpatrick restatement (could close the A1.1 FD); JOLTS separations and quits; Shediac-Rizkallah & Bone (A3.1 practice); SSIR 2022
collective-impact equity update; primary EDSCLS documents (A3.4); national URS/YSS-F documentation
and the Kentucky YSS-F page (A2.2 families); a source naming accreditation as assessed program
quality (A2.1, none found); Reisman "Strengthened base of support" (reputation); the Corwin copy
of Epstein Type 3 for A2.6 (no claim filed); the DEA-grant news items.

## Decisions for Severin

- **C (age rule, pilot).** All four applied it: A1.1 is the only A1 FD. Recommended: confirm.
- **D (timing, pilot).** Recommended: CP-B4-01..03 now, after PR #62; CP-B4-04/05 at the next gate.
- **B3-1 (frameworkBasis rule, batch 3).** Governs item 5 and A2.4's CDC; recommended as batch 3.
- **B3-6 (S176).** The A2.6/A3.2/F1.9 tie-breaker waits on it; A2.6 has no adjudicated row.
- **B3-9 / B4-7 (senior and mentor volunteers' own outcomes).** Recommended: P's routing (skills for
  the role → A1.1; retention and satisfaction with serving → A1.3; the volunteer's own life outcomes →
  A1 domain-only). Alternatives: T's role rule (well-being from serving → A1.3); F's Part F or
  domain-only. Two design rows first.
- **B4-1. Kirkpatrick Partners' tier.** Recommended: not admissible (for-profit certification seller;
  S1.2), keep the A1.1 FD and send OPM to a verifier. Alternative: tier D; cite L2, close the FD.
- **B4-2. A2.1 "accreditation" (S075).** Recommended: log a codebook-defined FD (A2 3/6, over) and run
  the A2 anchor re-review T calls overdue, with B4-5; Severin decides whether PR #62's A2.4/A2.5 CPs
  may land first. Alternatives: `basis` note only until the re-review (D, P); or ground it as assessed
  quality once a source verifies (F).
- **B4-3. Mapp edition.** Recommended: keep 2013, note v2 (F, D). Alternative: cite v2 as current (T).
- **B4-4. A3.1 "institutional practice".** Recommended: adjudicate two real practice texts as
  proposed design rows first (S1.6 needs gold for codebook-defined; S019, S101, H089 are all policy),
  then option (a): codebook-defined FD (A3 1/3) with T's tightened wording "formal adoption of a
  policy, program or practice by a school, district or other institution" (T, P, D). Alternative:
  option (b), narrow to formal policy, rules or funding, about 20 LM + 8 NLM texts to A3/none (F).
- **B4-5. A2.3 "facilities".** Recommended: decide in the A2 re-review (D); meanwhile a `basis`
  note (P: about 5 real texts depend on it). Alternative: drop it, MINOR (F; no gold flips).
- **B4-6. May domain-only hold specific results with no code?** CP-09-09 defined it as "no specific
  result"; items 15 and 16 and the climate hint would change its meaning and mislabel `specificity`.
  Recommended: allow it with a `codebook_gap` flag (T). Alternative: keep the definition and drop the hints.
- **B4-8. A2.4 "(or another group facing barriers)" (note for PR #62).** Recommended: drop the clause
  (F) or require a named barrier with reach to an underserved group → A2.5 (T, P); 11 of 13 real
  A2.4 texts are general equity of access. S001, H058 do not flip.
- **B4-9. CP-09-05 (PR #62).** Its only evidence is a held-out row (R-01). Recommended: re-justify it
  from design gold or real-run texts, or hold it; A1.3's widening (later #4) follows it.

## Gold rows that constrain changes (design set only)

- A1.1: S043, S083, S142, S146, S244, H014 (block narrowing). A1.2: S204, S148 (alt A3.1). A1.3: S149.
- A2.1: S075 (accreditation), S174, H057 (program environment), S011 (expected none). A2.2: H002,
  S137. A2.3: S196. A2.4: S001, H058, S041, S098, S113. A2.5: H001, S238. F1.9 vs A2.6: S176.
- A3.1: S019, S101, H089, H028 (alt). A3.2: S195, H090. A3.3: S154.
- No act-now item flips a design row. H### rows are the pre-3.0 held-out set, now design.
