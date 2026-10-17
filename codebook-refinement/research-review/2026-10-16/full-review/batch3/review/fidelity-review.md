# Batch 3 (Y8, F1, F2): framework-fidelity review (2026-10-16)

Reviewer: fidelity (S1.2-S1.6, S4.1, S4.9). Not the researcher. Design gold read only for rows
named; no held-out gold. PARTIAL closes a gap only as `fit: partial`. Quotes found only in a
researcher's file (ASCD merger, Mapp V2, Ascend/Medicaid, YRBS "including suicide", NCTSN
concepts 3/9/11) are leads.

## Headline

All three domains log **0 deviations today, and that is understated.** In the code text, 10 of 13
Y8 codes, 4 of 9 F1 codes and all 3 F2 codes name elements that no verified, cited component
covers. Codes that would count under S4.9: Y8 8/13 (62%), F1 2/9 (22%), F2 3/3 (100%). The
verified citations close most of this. **After them: Y8 1-4/13 (8-31%), F1 0-1/9, F2 0-1/3.**
That puts every domain at or under the line, and none over it.

Two cross-cutting conditions:
1. **A new source closes a fidelity gap only if it is in the domain's `frameworkBasis`.** S1.6
   says a code "should match a component of that framework", meaning the domain's anchor. HECAT,
   OJJDP, Monitoring the Future, the CDC conduct-problems page, WIOA Title II, SNAP-Ed, CFPB, 45 CFR
   1351 and HEARTH are in no basis line today, and HP2030 is not in F1 or F2. Each CP that adds one
   must add it to the basis too (the CP-10-02 and Y1 pilot precedent) and to `codebook_names`.
2. **Several proposed FDs use the wrong S1.6 case** (Y8.13, Y8.7, Y8.11/Y8.12, Y8.2). Fixes below.

## Verdicts

| # | Finding | Verdict | Reason | Smallest acceptable change |
|---|---|---|---|---|
| 1 | Y8: HECAT 2021 into the domain | **ACCEPT WITH CHANGES** | The index page is PARTIAL, but the module HBOs are SUPPORTED. HECAT is the only source that makes Y8.1, Y8.3 and Y8.5 framework-fidelity. | Add "CDC HECAT (2021)" to Y8 `frameworkBasis`. Cite at HBO level only. |
| 2 | Y8.1 HECAT PA/FN/PHW, YRBS Q66/73/83, PA-06 | **ACCEPT** | All SUPPORTED. Closes activity, nutrition, cooking, hygiene and sleep. Fixes the false "YRBS sleep (verified 2025)" basis line. | Cite the document's own title, "2025 State and Local YRBS (standard HS questionnaire)", per the verifier. WSCC stays in the basis. PATCH. |
| 3 | Y8.1 screen time via PA-R02 | **ACCEPT** as partial | Construct named, right ages; parents are the actor. H086, S207 depend on it. | `fit: partial`; watch the 2026 PA-R02 revision. |
| 4 | Y8.2 fine motor via Head Start ELOF | **DEFER** (owner) | SUPPORTED as a source, but fine motor is not about young children by definition, so the scope rule bars it. Decision C does not matter here: Y8.2 names no population, so if ELOF were admitted no FD would be needed. The researchers' fallbacks are wrong: "codebook-defined" fails because ELOF does cover the construct, and S192 has a possible home in Y1.8. | Owner chooses: (a) an exception for ELOF, `fit: direct`, FD none; or (b) drop "fine motor" (MINOR), with S192 named as a correction flip to Y1.8, after PR #66. Do not use (b) while PR #66 is open. |
| 5 | Y8.3 NHES 3.8.3, 1.2.3; HECAT S HBO 4, 7 | **ACCEPT** | NHES SUPPORTED; HBO 4, 7 PARTIAL (outdoor safety, allergy). | PATCH. Optional claim on S1.8.23 to make first aid direct. |
| 6 | Y8.4 add "puberty" | **ACCEPT WITH CHANGES** | The NSES PD strand is SUPPORTED, so the widening stays inside the source (FD none). | Version it as MINOR (scope widened), not PATCH. NSES is not in Y8 basis ("SHAPE America" ≠ FoSE): add it. |
| 7 | Y8.5 HECAT PHW 9-11, OH-08, IID-08, MICH-17, YRBS Q80 | **ACCEPT WITH CHANGES** | HBO 9-10, OH-08 and Q80 are SUPPORTED. HBO 11 and IID-08 are PARTIAL (no dental or vision named; HPV only, ages 13-15). MICH-17 is fine because developmental screening is about young children by definition (S061). | Mark HBO 11 and IID-08 partial. Vision stays partial. HECAT PHW HBO 3 ("Prevent vision and hearing loss") is a verifier lead, so file it as a claim. |
| 8 | Y8.6 "behavioral problems" via CDC conduct-problems page | **ACCEPT WITH CHANGES** | SUPPORTED and tier A, but it is a diagnostic page outside the Keyes anchor. Without a basis entry it would not count as framework fidelity. | Add "CDC Children's Mental Health" to the Y8 basis and cite with `fit: partial` (no outcome framing). Narrowing is the alternative, but it collides with R-04 and Y1.14 (PR #66), so do not do it now. |
| 9 | Y8.6 add "suicidal thoughts or self-harm" | **DEFER** | No verified claim. | Verify a YRBS 2025 suicide item, then widen (MINOR). |
| 10 | Y8.7 drop "restored" (or log FD) | **ACCEPT** (drop); **REJECT** the FD option | Restoration comes from attention-restoration research, not Keyes. "Sector widening" is the wrong case, since no population or sector is widened. A codebook-defined element would count. | Drop "restored" (MINOR). Name S144 for re-run; it should hold via "feeling well". Lead to verify: Keyes MHC positive-affect item "calm and peaceful". Keyes (2006) is PARTIAL (title only), so it does not support anything yet. |
| 11 | Y8.8 pin NCTSN concepts 5 (+3, 9, 10) | **ACCEPT WITH CHANGES** | Concept 5 is verified. Concept 10 is about culture, not recovery (verifier), and concepts 3/9/11 were not verified. "Processing trauma" (S078) still has no verified component. | Pin to concept 5 only and fix the title per the verifier. File one claim on a concept that names recovery. If it fails, log a codebook-defined-element FD (counted) on S078. |
| 12 | Y8.9 MHMD-03, -06, YRBS Q94 | **ACCEPT** | SUPPORTED; already in basis. | PATCH. |
| 13 | Y8.10 stale "PR #31, in flight" text; basis "located" | **ACCEPT** | Process text reaches the prompt. | PATCH. Also add Search Institute to Y8 basis. Y8.10 cites it, but Y8's basis does not name it (missed). Q13 as `fit: partial` only. |
| 14 | Y8.11 MTF for perceived risk | **ACCEPT WITH CHANGES** | PARTIAL: the component covers "disapproval", which is beyond the code. | Cite the perceived-risk half only, `fit: partial`, and add MTF to the basis. |
| 15 | Y8.11 knowledge/intentions; Y8.12 warning signs as merged-components FD (R-03) | **ACCEPT WITH CHANGES** | Merged components requires that "coders can't tell two components apart", and knowledge vs use is easy to tell apart. Adjudicated H038 (knowledge), S065 (intentions) and S248 (warning signs) rule out dropping the words. | First file claims on HECAT AOD, Tobacco and Violence Prevention (y8a's route; HECAT will be in basis). If verified: FD none. If not: knowledge and warning signs get a merged-components FD that states the routing reason honestly (not counted). Intentions has no source at all, so it is a codebook-defined element (counted). |
| 16 | Y8.12 YRBS items, About page, CDC youth violence | **ACCEPT** | SUPPORTED. | Cite "2025 National YRBS" as its own registry entry (R-02: two instruments, two entries). Add CDC youth violence to the basis. Fix stale "located". |
| 17 | Y8.13 source text; CJJA note; NCJRS URL; OJJDP diversion and reentry | **ACCEPT** | S1.4 exactness. y8b-16/17 are SUPPORTED. The CJCA abstract is PARTIAL on recidivism detail, so keep the existing verified excerpt. | PATCH. Add OJJDP to Y8 basis. Cite the MPG review as OJJDP (no author named). |
| 18 | Y8.13 completion of probation or agreement: observability FD | **ACCEPT WITH CHANGES** | Observability means a construct *moves out* with a pointer. Here nothing moves, and an uncovered construct stays. | FD case **codebook-defined element** (counted, FD-P18 precedent), evidence S018 and S189, revisit when the OJJDP performance-measures lead is verified. |
| 19 | YRBS name gap; null tiers; WSCC merger note | **ACCEPT**; note **DEFER** | Housekeeping; merger quote unverified. | `codebook_names` + `build_registry.py` tiers. |
| 20 | F1.1, F1.4 CSSP *Core Meanings* | **ACCEPT WITH CHANGES** | SUPPORTED. F1.4 moves from partial to direct. The year 2015 comes only from the filename (the page is dated 2018). | Cite CSSP (n.d.) until a verifier confirms the year. F1.1 "parenting confidence" sits under Parental Resilience, so the CP should state this as an intra-CSSP merge, not counted. |
| 21 | F1.2 Epstein via Corwin 2019; routines via CSSP; WIOA 3272(9) | **ACCEPT WITH CHANGES** | Corwin is SUPPORTED, so Epstein moves from located to verified (this also helps A2.6). CSSP routines (f1-14) and WIOA (f1-10) are PARTIAL. | Routines `fit: partial`. Adjudicated S022 keeps it, and no FD is needed because the construct is named. |
| 22 | F1.3 SNAP-Ed MT1 | **ACCEPT WITH CHANGES** | SUPPORTED, tier A, cross-age. It closes the H072 gap. The program is defunded, but S1 has no currency bar. | Basis becomes "MIECHV and SNAP-Ed (F1.3 only)". Registry note: if the page is removed, use an archived copy, or log a codebook-defined FD on H072. The 7 U.S.C. 2036a(b) row is PARTIAL, so use it as authority only. |
| 23 | F1.6 WIOA 3272(1), (6); Ascend Economic Assets; DEA 1721(8) | **ACCEPT WITH CHANGES** | WIOA is SUPPORTED, so English and adult education are direct. Ascend is PARTIAL, but "financial education" is in the excerpt verbatim. Under **decision C**, "older adults" is a population named in the code text, so it needs a source. WIOA covers any adult and DEA's covered populations include aging individuals, so FD none. | Add WIOA Title II and DEA to F1 basis (DEA is cited today but missing from it). Ascend `fit: partial`. |
| 24 | F1.7 drop Mapp & Kuttner link | **ACCEPT** | Two direct sources remain. | PATCH; add IDEA to F1 basis. |
| 25 | F1.8 Mapp & Bergman V2 | **REJECT** (now) | PARTIAL, secondary host; 2013 cite stays exact (S1.4). | None. |
| 26 | F1.9 Flag 1: CP-09-01 "FD: none" | **ACCEPT** as a note to PR #62; do not touch the PR | Type 3 "volunteers and audiences" is SUPPORTED. The candidate exclude sends per-family attendance to A2.5, which removes an anchored component, so S4.1 requires a statement. | CP-09-01 states a changed scope: either an observability FD (attendance does not express a family outcome; F1.9 exclude keeps the pointer; counted, so F1 is 1/9) or a reasoned "none". Owner's call. |
| 27 | F1.9 Flag 2: S176 vs A2.6 | **DEFER** (Severin) | Text vs gold, not fidelity. | None by agents. |
| 28 | F2.1 NYTD, CFPB well-being; demote CSSP | **ACCEPT WITH CHANGES** | Both SUPPORTED. Under **decision C**, "independent-youth" is named. NYTD covers foster youth only, so CFPB's individual-level construct is needed for other young adults, or this becomes a sector-widening FD. | Add CFPB to F2 basis. Keep CSSP as partial (don't delete). CF-001 guard: CFPB well-being = status, Y7.6 Building Blocks = youth skills. The CFPB "18 and older" range is unverified, so ask for it. |
| 29 | F2.1 Medicaid via AHS-01 | **ACCEPT WITH CHANGES** | PARTIAL: AHS-01 measures any coverage, not enrollment. | `fit: partial`, and add HP2030 to F2 basis. Not counted either way. |
| 30 | F2.2 USDA nutrition security | **ACCEPT WITH CHANGES** | PARTIAL only on the title, and the definition matches. Adjudicated **S062** ("increased access to healthy food") is F2.2, so narrowing would flip it. | One re-verify of title and publisher, citing what the PDF prints (USDA FNCS Mission Area, March 2022). If that fails, a codebook-defined-element FD on S062 (F2 = 1/3, at the line). Do not narrow without naming S062. NWS-01: ACCEPT. |
| 31 | F2.3 RHY 45 CFR 1351, SDOH-04, HEARTH; McKinney-Vento | **ACCEPT WITH CHANGES** | RHY ×2 and SDOH-04 are SUPPORTED, and they cover "young person living independently" (decision C satisfied). HEARTH is PARTIAL (CoC performance criteria). | Add RHY and HEARTH to F2 basis. Drop the McKinney-Vento F2.3 supports row only after PR #66 merges; leave the Y1.13 pinpoint untouched (R-08). |
| 32 | Adult volunteering: hints, no code | **ACCEPT** | No code claims an uncovered construct. Domain-only coding claims no component. | Hint only. Pass to batch 4: if A1.3's text names volunteers but its sources name only workers, decision C needs an FD there. |
| 33 | Bare "stability" → F2 domain-only | **ACCEPT** | Fidelity-neutral. | Hint; CP states boundary (S4.1). |

## Drift per domain (S4.9; counted = adapted or codebook-defined, excluding merged)

| Domain | Logged today | Honest today (unlogged) | After verified fixes | Worst plausible |
|---|---|---|---|---|
| Y8 (13) | 0 | 8 (Y8.1, .2, .3, .5, .6, .7, .8, .13) = 62% | **1** (Y8.13) = 8% | 4 (+Y8.2 if ELOF barred and text kept, Y8.8, Y8.11 intentions) = 31% |
| F1 (9) | 0 | 2 (F1.3, F1.6) = 22% | **0** | 2 (F1.9 per PR #62, F1.3 if SNAP-Ed page vanishes) = 22% |
| F2 (3) | 0 | 3 = 100% | **0** | 1 (F2.2 if f2-04 fails) = 33%, at the line |

The reconciliation's worst cases (F1 3/9, F2 3/3) assume citations that have since verified
(f1-06/07, f2-01, f2-06/07), so those cases are gone. F2 still has no slack: a second FD would
put it over the line and force an anchor re-review.

## What the researchers missed

- **Basis gaps that exist today.** These are deviations by S1.6's letter even before this review:
  Y8.10 (Search Institute), Y8.4 (NSES), Y8.5 (NYTD), Y8.12 (CDC & ED bullying), F1.6 (DEA),
  F1.7 (IDEA), F1.3 (HP2030) and F2.3 (McKinney-Vento) cite sources their domain's
  `frameworkBasis` does not name. One PATCH per domain fixes them. A `sync.test.ts` check that
  every cited framework appears in the basis would stop this recurring.
- **FD case discipline.** Three of four proposed FDs used a case that does not fit; the CP
  template should make the drafter quote the S1.6 case text. Y8.4, Y8.6 and Y8.7 text changes
  are MINOR, not PATCH.
- **Decision C** matters in this batch for F1.6 (older adults), F2.1 (independent youth), F2.3
  (living independently) and possibly A1.3 (volunteers). It does not matter for Y8.2, Y8.12 (CDC
  ages 10-24) or the Keyes adult sample, because those code texts name no population.
- **Year and title exactness (S1.4):** CSSP *Core Meanings* (n.d.), the two YRBS 2025 instrument
  titles, the NCTSN title, and AmeriCorps CEV (author Schlachter) all need corrected `cite_as`
  before any registry write.
