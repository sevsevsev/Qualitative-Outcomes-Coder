# Batch 4 review (A1, A2, A3): devil's advocate (2026-10-16)

Role: argue for keeping A1–A3 as they are. I concede only where a source is wrong, dead or misattributed, or where a code claims something no source covers.

## What every change costs

- **Prompt.** `youthOutcomesV3.ts` writes Framework Basis, definition, include, exclude, useInstead and **Source** into the coding prompt. `basis`, `fidelity`, category descriptions and registry URLs stay out of it. So adding a source to a Source line is a prompt change. It needs the two-run regression and stability gate (S4.4–4.5) and Severin's review. A registry-only URL or component fix costs nothing.
- **Comparability.** About 450 unique A-code texts were coded under 3.1.x (A1 183, A2 180, A3 144, both runs). A MINOR change (scope widened or narrowed) stops new exports matching old dashboards unless those texts are re-coded.
- **Enum.** 160 now, redesign line 165. Nothing in this batch should spend from that budget.
- **Federal churn.** This batch already lists three federal sources pulled within 18 months: the ED and DOJ (2015) letter (rescinded), EO 13166 (revoked), and the DEA grants (terminated). New anchors on federal web pages should be the exception.

## Overreach in the evidence

1. **Held-out leak.** a1's A1.3 widening rests on [held-out row] (R-01). With [held-out row] dropped, the rationale is a draft CP plus a handful of model-coded texts. No adjudicated design row shows staffing.
2. **The drift table overstates the fallbacks.** S4.9 triggers when *more than* a third of a domain's codes deviate. At 1 of 3 it does not trigger, though the reconciliation calls that "at the line". Under decision C, A1's fallback is 1 of 3, not 2 of 3. A1.2's text says "adults", which names no particular population, and SAMHSA is cross-sector. Only A1.1 names roles (volunteers, mentors, coaches, case managers) that its sources do not.
3. **PARTIAL rows are carrying recommendations.** a1-06 (JOLTS openings and hires) is PARTIAL because openings are not turnover. a2-01 and a2-02 (A2.2) are PARTIAL and neither covers families. a2-09 (21st CCLC) is PARTIAL and defines "regular" two ways. a3-04 is PARTIAL and makes "school policy" the codebook's inference, not Reisman's.
4. **Attribution.** a2-01 credits eight people the PDF lists as project staff, not authors (S1.4). a2-04 joins two passages from different sections. a2-13's Version 2 PDF names no authors or year.
5. **Unfetched leads presented as options.** OPM's Kirkpatrick restatement, Shediac-Rizkallah & Bone, the SSIR 2022 equity update, the primary EDSCLS document and the Kentucky YSS-F respondent claim were never verified. None of them can support anything.
6. **Real use means model codes** from one district (S4.3); the "21 of 28" and "45 of 53" splits are hand counts.

## Verdicts

### A1 Staff & Volunteer Capacity

| Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|
| Learning Forward: 2022 vs 2025 edition (a1-01/02, R-10) | ACCEPT WITH CHANGES | The live URL no longer serves the edition the codebook cites, so the citation is wrong as it stands. | Option 1 only: point the registry at the 2022 Standards-Summary PDF. The Source and Framework Basis text stays the same, so the prompt does not change. REJECT re-citing as 2025: no dated record was found, and it would change the prompt. |
| SAMHSA URL to the NCSACW host (a1-05) | ACCEPT | SUPPORTED. Fixes the earlier "host only" PARTIAL. | Registry URL only. |
| A1.1: add Kirkpatrick L2 (a1-03) | REJECT | SUPPORTED on wording, but the source is an undated PDF from a consultancy that sells Kirkpatrick certification. That sits close to S1.2's "vendor marketing", and the tier-C/federal version (OPM) is unfetched. It also adds a new name to a prompt Source line. | Log one FD instead: A1.1 sector widening, fidelity adapted. A1 goes to 1 of 3, which does not trigger S4.9. Gold rows S043, S083, S146, S244, H014 and S142 all depend on the non-educator roles, so narrowing is not an option. |
| A1.2: add Kirkpatrick L3 (a1-04) | REJECT | Under decision C, "adults" names no population outside the sources, and SAMHSA is already cross-sector. | None. |
| A1.3: widen to staffing levels; JOLTS openings and hires (a1-06, R-13) | DEFER | Its evidence is a held-out row and a draft CP. JOLTS openings and hires are PARTIAL. It is a MINOR change, and only about 3 of 13 LM texts are staffing. | Revisit only if CP-09-05 is approved. Even then, start with a hint and one design-gold row proposed for Severin, not a widened definition. |
| A1.3: add WHO ICD-11 burn-out (a1-07) | REJECT | SUPPORTED but redundant: the Surgeon General link is already direct for burnout, and this would add a prompt Source line for nothing. | At most, a supporting registry row with no codebook name. |
| A1.3: volunteer retention, Spinney & Clinton (a1-08, R-03) | REJECT | PARTIAL. It adds a new sector widening and opens a second A1 FD, which would push A1 to 2 of 3 and trigger an anchor review. | None. |
| Senior volunteers' quality of life: A1.3 or F (R-02) | DEFER | No adjudicated row exists, and one real text is not a confusion under S3.3. | None until a gold row exists. |
| Staff credentials: A1.1 or A1.3 (R-04) | DEFER | No claim was filed and no source was found. | None. |

### A2 Program Quality, Access & Reach

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| A2.1 accreditation unsourced | DEFER | The gap is real, but adjudicated S075 ("achieve accreditation from the state afterschool network") is gold A2.1. Dropping the word flips it, and logging an FD would put A2 at 3 of 6 and trigger an anchor review. | A sentence in `basis` now. Make the call once, in the A2 anchor review, together with "facilities". |
| A2.2: Urban COF + SAMHSA URS, move to adapted (a2-01/02) | ACCEPT WITH CHANGES | The `basis` line names an Urban source that is not in the registry. That misstatement is the real defect. | Register the Urban COF as a partial fit for participant satisfaction, cited as "The Urban Institute & The Center for What Works (2006)", and correct `basis`. Keep A2.2 codebook-defined and FD-P18 open, because families and safety remain unsourced. REJECT the Maine URS table: it is one state's output table, PARTIAL, and its family respondents are unverified. Do not drop "safety": H002 is adjudicated. Real use is 4/3 texts. |
| A2.3: 7119(a)(2) on govinfo (a2-14) | ACCEPT | SUPPORTED. | Registry URL only. |
| A2.3/F1.6: Digital Equity Act status note (R-07) | ACCEPT WITH CHANGES | The statute stands; only the grants were terminated. | One shared registry note for both entries. No news items cited. |
| A2.4: CDC + 504 + 6318(f) + CAST, move to adapted (a2-03..08, R-18) | DEFER | CP-09-02 (PR #62) explicitly keeps A2.4 codebook-defined with "no new citation". Adapted still counts toward drift (2 of 6 either way), so the move buys nothing on the budget. | After #62 merges: CDC Strategies (a2-03) and 6318(f) (a2-07) only. REJECT 504 (PARTIAL, a legal duty, "handicapped" on a public page; the same objection CP-10-01 raised to ADA), a2-04 (joined passages) and CAST (a nonprofit's learning-design guidance; it adds nothing to CDC). |
| A2.4 "another group facing barriers" drift (R-18) | ACCEPT as a flag | Real use (7/6 texts) is general equity of access, which no source covers. CP-09-02's wording over-reaches. | Send to the PR #62 owner. No change from this batch. |
| A2.5: rescope the Weiss component (a2-10) | ACCEPT | SUPPORTED. It narrows the claim to what the abstract shows. | Registry component text only. |
| A2.5: 21st CCLC APR 2019-20 (a2-09, R-19) | REJECT | PARTIAL and internally inconsistent ("30 days or more" vs "more than 30 days"). GPRA measures were revised in 2022. UW Outputs is already direct. | None. If CP-09-01 needs a threshold source, its owner can look for the current APR. |
| A2.5: Urban COF for reach (a2-11) | REJECT | Redundant, and it would add a prompt Source line. | Registry supporting row at most. |
| A2.6: drop Epstein Type 6 | ACCEPT | The registry already judges it a poor fit. Removing a bad citation is a correction. | Remove Type 6 from Source and the registry. |
| A2.6: add 6318(a)(2)/(c)(1) (a2-12) | REJECT | Mapp & Kuttner is already direct. Real use is 4/0. A Title I school duty adds federal dependence for no fit gain. | None. |
| Mapp 2013 vs 2019 v2 (a2-13, R-05) | ACCEPT WITH CHANGES | a2 is right that v2 adds to 2013 and does not overturn it. The v2 PDF carries no author or year. | Keep 2013 across F1.7, F1.8 and A2.6 and add one registry note for v2. REJECT f1's "superseded" re-cite. |
| Epstein Type 3 URL (R-06) | ACCEPT as a flag | If the registry moves Epstein to the Corwin copy, A2.6 needs that row too. | Same registry edit as batch 3. |

### A3 Systems, Policy & Community Conditions

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| A3.1 "institutional practice" (R-08) | ACCEPT WITH CHANGES, option (a) | The departure is real (a3-04 PARTIAL confirms school practice is the codebook's inference). Option (b) is MINOR and leaves about 20 LM and 10 NLM texts without a code. | Log an FD, case codebook-defined; A3 goes to 1 of 3, which does not trigger S4.9. Caveat: S1.6's codebook-defined case requires adjudicated rows with no other home, and every A3.1 gold row (S101, S019, H089) is policy. Propose two real-run practice texts as `proposed` design rows for Severin first. REJECT the Shediac-Rizkallah lead, which was not fetched. |
| A3.2: add Reisman "Strengthened alliances" (a3-01) | ACCEPT | This is the one source change I back without reservation. The source is already verified in the registry and SUPPORTED, it costs no enum, it closes a real gap (Kania & Kramer exclude ordinary collaborations), and H090 depends on it. | Add Reisman to the Source line. REJECT Coffman "Partnerships or Alliances" (a3-02): it is framed as advocacy and is redundant. |
| A3.2/A2.6 tie-breaker (R-12) | DEFER | It would contradict adjudicated S176 (F1.9) until Severin rules on that row. | None. |
| A3.3: PubMed URL (a3-03) | ACCEPT | SUPPORTED. The fit moves to direct. | Registry URL and fit only. |
| A3.3 scope: exclude (a) or widen (b) (R-09) | ACCEPT WITH CHANGES, option (a) | The definition is faithful; it is the name that pulls statements in. Widening (b) would make A3.3 a catch-all against S2. Renaming is MAJOR. | An exclude line only ("community health, safety, economic or norm outcomes with no cohesion, trust or collective action → A3 domain only"), run through the two-run gate. Only S154 is gold A3.3, so few rows are at risk. Expect about 22 LM and 7 NLM texts to move to A3/none, and say so in the cycle report. |
| School-climate hint + A3.4 backlog (a3-06, R-11) | REJECT now, DEFER the code | The source is PARTIAL and secondary (youth.gov), the claim targets a domain rather than a code, and the hint splits school-culture texts against A3.1's FD on wording alone. A3.4 costs +1 enum at 160 with an untested boundary against Y3.1, Y8.10 and A2.1. | Backlog entry only, picked up once adjudicated rows exist. |
| research-basis.md pointer to CP-10-02 | ACCEPT | It is a document, not the prompt. | One line. |

## Drift after my verdicts (S4.9)

- **A1:** 0 of 3 → 1 of 3 (A1.1 adapted). No trigger.
- **A2:** 2 of 6 → 2 of 6. A2.2 and A2.4 stay codebook-defined until #62 lands. Accreditation and facilities wait for the anchor review.
- **A3:** 0 of 3 → 1 of 3 (A3.1). No trigger.
- **Enum:** +0.
- **Prompt changes:** A1.1 none (FD only); A2.6 drops Epstein Type 6; A3.2 adds Reisman; A3.3 gets one exclude line; A2.2 `basis` changes (not in the prompt). Two runs on the 345 design rows cover all of them.

## What the researchers missed

1. **A2.1 is the most uncertain code in the batch, and nobody examined it.** The NLM run has 64 rows but only 25 unique texts (template copies), and 60 of the 64 are low or medium confidence. The LM run has 17 of 25 low or medium. Its real-use split was not checked against "high-quality programming", which is S011 in gold (expected none).
2. **A3.2 confidence.** 26 of 63 LM rows are low or medium. a3 counted the partnership types but not this. The Reisman fix should be judged on whether it moves that number.
3. **Decision C cuts both ways.** It removes the A1.2 FD. It also undercuts a2's "sector widening" label for A2.4: the A2.4 text says "all participants", not a school population. If CDC anchors it, the remaining FD is a codebook-defined residue (interpretation, "another group"), not sector widening. In A2.2, by contrast, the text names "families", a population outside the Urban COF, so a family half would count.
4. **No gold supports the A3.1 practice half.** This is a precondition for option (a) under S1.6 (above), and neither a3 nor the reconciliation noticed it.
5. **The federal-source pattern.** A2 has lost three federal anchors in 18 months. That counts against adding more (504, 6318, 21st CCLC APR) where a stable tier-B–C source, or the existing one, already fits.
6. **Comparability.** If the A3.3 exclude lands, the cycle report should say 3.1.x A3.3 counts are not comparable with later ones. The A1.1 FD changes no routing.
