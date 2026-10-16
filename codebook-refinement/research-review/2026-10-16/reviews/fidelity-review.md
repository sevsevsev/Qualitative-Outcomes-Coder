# Y1 pilot: framework-fidelity review (2026-10-16)

Reviewer: framework fidelity (STANDARDS S1.2-S1.6, S4.1, S4.9). I did not do the research.
Inputs: the four findings files, `verify/verification-table.md`, Y1 in
`codebooks/youthOutcomesV3.data.ts`, the registry, `DEVIATIONS.md`, `CONFUSIONS.md`,
`docs/codebook/research-basis.md`, and the design gold (`gold/youth_outcomes_v3.gold.csv`, read
only for S055, S220 and S251). I did not read the held-out gold. Anything not in the verification
table is treated as a lead.

## Headline

Y1's drift count of **0 of 18 is understated today**. Five Y1 codes already depart from their
cited sources in their own text, and none of them has an FD entry: Y1.2 (the home-language half
has no source), Y1.10 (young children), Y1.13 (pregnancy), Y1.14 (restorative alternatives) and
Y1.15 (achievement with no subject named). The research mostly fixes this honestly. Applying it
as proposed gives **1 to 3 counted deviations of 18 (6-17%)**. The worst case is **6 of 18 (33%)**,
which is at the S4.9 line but not over it. It goes over only if the Seal of Biliteracy citation
fails, or if the owner rules that adolescent frameworks used for elementary pupils count as sector
widening (see "Missed").

## Verdicts by proposal

| # | Proposal | Verdict | Reason | Smallest acceptable change |
|---|---|---|---|---|
| 1 | Y1.10 young children: adapted, sector-widening FD | **ACCEPT WITH CHANGES** | Farrington covers "school assignments" from the middle grades up. S1.6 sector widening must keep "construct and wording unchanged", and "puzzles and new tasks" widens the construct as well. | New FD (adapted, sector-widening, counted). Definition: "difficult schoolwork or learning tasks despite setbacks, at any age". Flag adjudicated S220 for Severin without changing it. MINOR. |
| 2 | Y1.15 "no subject named": FD | **ACCEPT WITH CHANGES** (relabel) | Allensworth & Easton cover grades and credits only. NASEM Ind. 5 is PARTIAL ("always names the subjects"). Taxonomy's "merged (coursework + unspecified achievement)" is wrong as filed: no verified source has an "unspecified achievement" component. CP-09-09 kept the catch-all. | Preferred: merged-components (not counted), merging the subject test-achievement components that coders cannot tell apart when no subject is named. Verify ESSA 6311(c)(4)(B)(i) as a new claim, and make the definition say this. Fallback: codebook-defined element (counted, FD-P18 precedent). |
| 3 | Y1.7 "critical thinking" | **ACCEPT WITH CHANGES** | Generic critical thinking comes from the name and from real coding ("logical thinking"), not from the definition. No tier A-B source for it. A rename is MAJOR (S4.6). | Exclude "thinking skills with no information, source or inquiry object" and route them to Y1 domain-only. FD none. Keeping generic thinking in Y1.7 would need a codebook-defined FD (counted). Lead: Conley (2007) Key Cognitive Strategies, still to be verified. |
| 4 | Y1.17 FS221 | **ACCEPT** as partial | It covers N or D youth only. It is sector widening only if it becomes the anchor, and WIOA 681.460 (verified) already supports re-engagement. | Add it with `fit: partial` and a population note. CP states "FD: none". |
| 5 | Y1.13 pregnancy | **ACCEPT WITH CHANGES** | 106.40 is PARTIAL (a nondiscrimination rule). The stability statutes (McKinney-Vento, 6311(g)(1)(E), 675(1)(G), all SUPPORTED) are population-specific, so "pregnancy" is sector widening. | (b, preferred) drop "pregnancy" and write "such as homelessness or foster placement changes" (MINOR, FD none; no gold row affected, since S251 is Y8.4). (a) keep it and open a sector-widening FD (counted). |
| 6 | Y1.14 "alternatives" | **ACCEPT WITH CHANGES** | The ESSA 7118 and 6311(g) cites are PARTIAL plan provisions, and no restorative source exists. Adjudicated **S055** (restorative circles "instead of receiving a suspension") is Y1.14. | Use attainment's reword ("reductions … including by replacing them with alternatives"), with FD none if S055 still reads as a replaced suspension. If restorative participation itself is the outcome, open a codebook-defined FD (counted). |
| 7 | Y1.2 Seal of Biliteracy | **ACCEPT WITH CHANGES** | SUPPORTED, tier B. Closes today's unlogged gap (home-language half). | Settle whether SealofBiliteracy.org is a co-author first, and add the Seal to `frameworkBasis`. 7011(7)(B) partial; do not add NALA. |
| 8 | Y1.8 RTT-ELC (ED and HHS 2013) | **ACCEPT** | SUPPORTED, cross-program, and the construct is about young children by definition. Its five domains also fit the ASQ include. | Cite "Essential Domains of School Readiness" and "Kindergarten Entry Assessment", 78 FR 53964. Keep ELOF as secondary. Add the K-3 → Y1.1 hint. |
| 9 | Bare "engagement" → Y1.9 | **ACCEPT WITH CHANGES** | Farrington's Academic Behaviors are behavioral only. Routing undifferentiated engagement there without a definition change redefines the code while still citing it (S4.1 boundary hint). | Definition names "engagement in schoolwork stated without a dimension". Merged-components FD (not counted), with GPRA and ESSA "student engagement" (SUPPORTED). Fredricks (PARTIAL) as CF rationale only. |
| 10 | Y1.12 belonging → Y3.1; Y2.4 pointer | **ACCEPT WITH CHANGES** | Farrington's "academic community" could mean the whole school, so routing school belonging to Y3.1 may cut the component. | The CP states FD none, with that reading made explicit. Otherwise open an observability FD with a pointer. Adding Farrington's value mindset to Y2.4 is fine. |
| 11 | Attendance split; Social Skills → Y4 | **ACCEPT** (notes) | Splits within the domain; no code claims more than its source. | Basis notes only. |
| 12 | NASEM as Y1 "structural anchor" | **ACCEPT WITH CHANGES** | PARTIAL. As the anchor, it would make the Y1.13 (attendance) and Y1.14 (discipline) placements deviations. | Use NASEM as support only, not in `frameworkBasis`. |
| 13 | Nagaoka for category B | **REJECT** | PARTIAL ("loose"); it anchors Y5. | None. |
| 14 | Citation-only PATCHes (CCSS R.10/RF, NRP sentence, 7801(52) for Y1.4, FS195, ESSA (h)(1)(C), CRDC 2023-24, NCES 219.67, IDEA I-14 C, Conley 2007, Pashler, Halpern) | **ACCEPT** | Component-level citations, no construct change. | RF: cite the grade pages. Pinpoint (c)(4)(B)(v)(II). Pashler and Halpern `partial`. |
| 15 | Y1.4 CSTA 2026 | **DEFER** | PARTIAL (supersession unverified). PR #62 is in flight, and the AI content tests the Y1.4/Y7.3 line. | Add after PR #62. Keep CSTA 2017 until then. |
| 16 | New "general achievement" code (+1 enum) | **DEFER** to owner | Reopens CP-09-09; real-run data counts as new evidence (S4.7). | Owner decision. The new code needs an anchor or an FD. |

## Attribution (S1.4)

- **NCCAS, not Young Audiences.** The author stays the National Coalition for Core Arts Standards.
  "Young Audiences now runs the site" is not in the verification table, so it is an unverified lead
  and should not go into a registry note yet. The Conceptual Framework PDF has no date, and its
  file name says 07-21-16, so cite it as NCCAS (n.d.) until a verifier finds the year. Do not put
  "2014" on this document.
- **Farrington publisher.** `cite_as` says "UChicago Consortium on Chicago School Research", which
  mixes the old and new names. Change it to "University of Chicago Consortium on Chicago School
  Research", the name printed at publication (y1-mindsets-05), and add a rename note. The verifier
  read that name from the citation line, not the cover. Make the Allensworth & Easton 2005 and 2007
  entries consistent too: their `publisher` fields differ, one giving the current name and one the
  old name.
- **Seal of Biliteracy co-authors.** The researcher lists seven bodies and the verifier lists eight
  (with SealofBiliteracy.org). Resolve this before adopting the citation.
- **WIOA 20 CFR 677.155 = DOL.** The verifier found ETA/DOL on eCFR, so citing it as DOL ETA is
  exact for the codified text. A lead from memory, not verified: part 677 may come from a joint
  DOL-ED rule with a parallel in 34 CFR. If the CP cites the *rule* and not the CFR section, a
  verifier must check who authored it.
- **Conley.** The registry `url` and excerpt are the AASA 2016 article, but `publisher` says
  "David T. Conley / EPIC". Change it to *School Administrator* (AASA), April 2016. It is a
  magazine summary, so prefer Conley (2007) EPIC for the component if a verifier confirms it.
- **CCSS host.** A verifier reported that thecorestandards.org may call itself unofficial. Confirm
  the publisher host for both CCSS entries.

## Drift recount (S4.9)

| Code | Today (unlogged) | After proposals, preferred route | Worst case |
|---|---|---|---|
| Y1.2 | departs (no source for half) | closed by the Seal → 0 | 1 if the Seal fails |
| Y1.7 | borderline (use, not text) | 0 (exclude added) | 1 |
| Y1.9 | — | merged-components, not counted | 0 |
| Y1.10 | departs | **1** (sector widening) | 1 |
| Y1.13 | departs (pregnancy) | 0 with option (b) | 1 |
| Y1.14 | departs (S055) | 0 | 1 |
| Y1.15 | departs | 0 (merged) or **1** (codebook-defined) | 1 |
| Y1.17 | — | 0 (FS221 partial) | 1 if FS221 becomes the anchor |
| **Total of 18** | **0 logged, about 5 real** | **1-2 (6-11%); 3 (17%) with Y1.13 option (a)** | **6 (33%, at the line); 7 (39%, over) if the Seal also fails** |

The likely result is 2 or 3 of 18 (Y1.10, Y1.15, and Y1.13 if option (a) is taken), which is under
a third. Every route keeps Y1 under the line unless several fallbacks are taken together. The
`fidelity` and `deviation` fields in the data file must match each new FD
(`deviations.test.ts`), and the DEVIATIONS drift table must be updated in the same CP.

## research-basis.md "located" vs registry "verified"

Yes, this is a documentation fix. research-basis.md lists NRP, WIDA, Conley, ELOF, McKinney-Vento,
On-Track 2005 and the ESSA graduation rate as "located" (and NGSS as "registry ngss-2013
located"). The registry now has all of them `verified` after CP-10-01. Add a dated status note
rather than rewriting the table, because the file records the approved proposal. It is **not only
a doc fix**: the `basis` strings in `youthOutcomesV3.data.ts` still say "(located)" for NRP
(Y1.1), Conley (Y1.7), ELOF (Y1.8), McKinney-Vento (Y1.13) and On-Track 2005 (Y1.15). Those are
codebook data, so they need a PATCH CP, which can ride with the citation CP. Also, the NRP
registry entry still carries a "Pending: status located (PARTIAL)" note next to `status:
verified`. The DEVIATIONS 3.x heading still says "not yet the default".

## CP packaging (S4.1)

One kind of change per CP: (1) citation and attribution PATCH, with the `basis` strings; (2) the
FDs and drift table; (3) MINOR narrowing (Y1.10, Y1.13, Y1.14, Y1.12, Y1.7 exclude); (4) hints
and CF entries, each stating its FD. Anything touching Y1.4 waits for PR #62.

## Missed by the researchers

1. **The age test, applied consistently.** Farrington (middle grades and up) and On-Track (9th
   grade) are used for elementary pupils, so a strict reading of sector widening would also cover
   Y1.9-Y1.12 and Y1.15 and push Y1 over a third. Severin should rule that an FD is needed only
   when a code's own text names a population outside its source.
2. **Adjudicated S055** limits how Y1.14 can be reworded.
3. **Y1.2's home-language half** is an unlogged deviation today, not just a citation gap.
4. **The `basis` strings in the data file** are stale, not only the docs.
5. **Naming NASEM as the anchor** would create new deviations.
