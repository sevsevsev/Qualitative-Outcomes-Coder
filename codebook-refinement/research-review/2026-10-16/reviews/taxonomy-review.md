# Y1 pilot: taxonomy and methods review (2026-10-16)

Reviewer: taxonomy/methods (independent; did not do the research). I read the research
basis (structural rationale and Y1 section) and the four findings files as a methods section.
I checked them against STANDARDS S1-S2, the Y1 data (lines 1-371), the registry, DEVIATIONS,
CONFUSIONS and the verification table. Rubric: does the design answer the question, are the
sources fit for the claims, do the conclusions follow, could someone repeat it. Anything not
in the verification table is a lead only, and so are my own remembered items (marked "lead").

## 1. Overall judgement

The Part -> domain -> category -> code hierarchy is defensible for Y1. The way the research
basis justifies it is not. The structural rationale says a category is "a dimension of that
construct, taken from the domain's anchor framework". Y1 has no single anchor. Its
`frameworkBasis` lists about ten sources, and each category comes from a different logic:

- **A** follows the ESSA/NAEP subject list (a content axis).
- **B** follows Farrington's noncognitive factors (a construct axis).
- **C** groups statuses that schools record (a measurement-source axis).

That is a reasonable codebook design. The basis should **say it is codebook-defined at the
category level** instead of implying one framework produced it. The taxonomy researcher went
looking for a framework to back the existing split ("Keep it") and found NASEM 2019. The
verifier rated the structural claim PARTIAL (y1-taxonomy-04): "the Y1 grouping is the
codebook's inference." That is a textbook confirmation-bias pattern: the conclusion came
first, and the divergences found later were relabelled "defensible" (F1.2).

The strongest evidence against the claimed fit is already in the registry. The verified
Farrington excerpt that Y1.9 cites lists "regularly attending class" as an Academic Behavior.
NASEM puts "attendance/absenteeism" under Indicator 3, engagement (y1-taxonomy-12). So both
the category-B anchor and the proposed structural anchor place attendance on the B side.
Y1 puts it in C, and Y1.9 excludes attendance. That is a departure from the cited component
with no FD entry (S1.6).

## 2. Verdicts on the taxonomy findings

| # | Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|---|
| F1.1 | NASEM 2019 as Y1 structural anchor; A/B/C "maps almost one-to-one" | **ACCEPT WITH CHANGES** | Keep the structure. "One-to-one" is false. NASEM Domain B mixes tests (Y1 A), engagement (Y1 B) and coursework/grades (Y1 C). Only Y1.17 and Y1.18 sit in NASEM Domain C. Verifier: PARTIAL. | Do not add NASEM to `frameworkBasis` as *the* anchor. In research-basis.md, state that the categories are codebook-defined (A content, B Farrington construct, C recorded status) and cite NASEM only as convergent evidence that the three groups are reported separately. |
| F1.2 | Attendance and discipline placements differ from NASEM | **ACCEPT WITH CHANGES** | Recording the divergence is right. It is broader than NASEM: Farrington (Y1.9's own source) also lists attendance as a behavior. | Record both divergences in research-basis.md and open an FD entry for Y1.9's attendance exclusion (case: observability/measurement; attendance moves to Y1.13). If NASEM ever becomes an anchor, discipline under its Domain G needs its own FD too. |
| F1.3 | Engagement split Y1.9 / Y3.1 / Y1.13; CF entry; GPRA and ESSA SQSS as Y1.9 sources | **ACCEPT WITH CHANGES** | The CF entry and hint are the right size (S2.2). The citations widen the code. GPRA "engagement in learning" and ESSA "student engagement" are undefined, global constructs. Y1.9 is Farrington's *behaviors*. Fredricks is PARTIAL (abstract only), and the Y1.9/Y3.1 mapping is "the codebook's inference". | Ship the CF and hint. Add GPRA and ESSA as `partial` with a note ("bare 'engagement' routed here by rule"), or not at all. Do not cite Fredricks for the CF (abstract-only). |
| F1.4 | Rename category A | **DEFER** | Cosmetic. The category name shows in the explorer and dashboards. Revisit with the next category-description CP. | None now. |
| F2.1 | Y1.15 is the general-achievement catch-all | **ACCEPT the finding; REJECT the remedy (i)** | Verifier: NASEM Indicator 5 is PARTIAL because "the source always names the subjects". Citing it for unspecified achievement would be "redefining a construct while still citing the framework", which S1.6 forbids. "Merged components" is also the wrong FD case: unspecified achievement is not a framework component. | (1) Open an FD entry now: Y1.15 is `adapted`, case codebook-defined, for the "no subject / unspecified achievement" clause. Add NASEM Indicator 4 (SUPPORTED) for the grades and credits part only. (2) Owner decision with evidence: route unspecified achievement to domain-only Y1/none (enum 0) or to a new code (enum +1). Test both on design gold before choosing; neither is a research finding. (3) Ship the CF line (ii) only after (2), because it depends on the choice. |
| F2.2 | Y1.8: re-anchor to NASEM Indicator 1 | **ACCEPT WITH CHANGES (add, do not replace)** | See section 3. | Keep ELOF as the anchor with the govinfo 2015 URL (y1-subject-15). Add RTT-ELC and NASEM Ind. 1 as supporting sources. Ship the useInstead "K-3 early literacy -> Y1.1" and the OCF template CF example. |
| F2.3 | Executive function and focus -> Y4 | **DEFER** (Y1 side: ACCEPT) | About 10 statements. The hint contradicts Y4.3's "outside schoolwork" until the Y4 owner changes it. Harvard is tier D and unverified. | Now: a Y1.9 hint ("use only when a schoolwork behavior is named"). Send the Y4.3 wording and the Y4 routing to the Y4 owner. |
| F2.4 | Transition, readiness, SAT/ACT, Act 158 hints; ESSA SQSS for Y1.16 | **ACCEPT WITH CHANGES** | Hints are the smallest fit. ESSA (v)(II) is verified but is a measure a state "may include". A rule named after a local statute (Act 158) does not belong in a cross-sector prompt. | Phrase the Act 158 rule generically: "meets graduation requirements, graduation achieved -> Y1.17; progress toward requirements -> Y1.15". Use Act 158 only as a CF example. Add ESSA (c)(4)(B)(v)(II) to Y1.16 together with the 2023-24 CRDC School Form (y1-attainment-11). |
| Q3 | Observability; retire nothing | **ACCEPT** | Correct conclusion. See the caveats in section 5. | None. |

## 3. Anchor choices asked about

**Y1.8 and Head Start ELOF.** The "inherently about young children" exception holds. The code
is defined by age, and STANDARDS S1.2 itself lists Head Start ELOF as a tier A example. The
subject researcher's own evidence also weakens the "one federal program" objection: ELOF's
cover letter invites "all programs—Early Head Start, Head Start, and Child Care—to adopt the
Framework". The case for *replacing* ELOF is therefore weak.

- **RTT-ELC (2013) as primary.** It is tier A and joint ED-HHS (SUPPORTED). But it holds the
  definitions of an expired grant competition. "Never rescinded" is the researcher's claim,
  and no verifier checked it.
- **NASEM Indicator 1.** SUPPORTED for kindergarten readiness. It is an indicator system (tier
  B/C), not a content framework. It does not cover the pre-literacy and early-numeracy
  components the code defines.
- **The two researchers proposed competing primaries and never reconciled them.** That is a
  process gap. Pick one rule: ELOF stays primary; RTT-ELC "Essential Domains: language and
  literacy development; cognition and general knowledge" and "Kindergarten Entry Assessment"
  are added for readiness assessments; NASEM is optional.
- **Unflagged drift.** Y1.8's include list ("broad developmental milestones on screeners such
  as the ASQ") goes beyond Language & Literacy and Cognition. It needs either a narrower
  include or an FD entry.

**"One statute for category C" (ESSA 6311(h)(1)(C) and (c)(4)(B)).** ACCEPT WITH CHANGES as
per-code tier A citations (attainment-01, 07, 12 and 16 are SUPPORTED). REJECT it as the
category's anchor, for three reasons:

- It does not cover Y1.15. Grades and credits are absent, and the CRDC retention substitute
  is PARTIAL (attainment-10).
- It does not cover Y1.17's GED or re-engagement elements.
- It files suspensions and chronic absence under "school quality, climate, and safety", which
  is a school-condition framing.

Anchoring C on "what ESSA requires schools to report" would also tie a cross-sector category
to K-12 accountability. That would need a sector-widening FD entry. The honest axis for C is
"recorded status", which is codebook-defined.

**Y1.15 catch-all.** See F2.1. As coded today, Y1.15 is marked `fidelity: framework` with no
FD entry, while about half its unique texts fall outside both Allensworth & Easton sources.
That is the most material S1.6 problem in Y1.

## 4. Is the research sound?

- **Search breadth: narrow.** Sources are almost all US federal or NASEM. The researchers did
  not look at the federal taxonomy closest to their question. That is the IES What Works
  Clearinghouse outcome domains, which (lead, from memory) include a general
  academic-achievement domain alongside attendance, progressing in school, completing school
  and college enrollment. If confirmed, it is a tier A source for exactly the Y1.15 problem.
  The researchers also skipped international systems (OECD) and youth-development outcome
  frameworks. The taxonomy researcher did search the Forum for Youth Investment and Weikart
  frameworks and documented why they were not used, which is good practice.
- **Source quality: good where it was verified.** 35 of 50 claims are SUPPORTED. The weak
  points are single-source dependence (NASEM 2019 carries five separate taxonomy claims) and
  two abstract-only or optional-measure citations (Fredricks; ESSA "may include").
- **Confirmation bias: present in Q1.** Each NASEM mismatch was explained away rather than
  weighed. The verifier's PARTIAL verdicts (taxonomy-03, -04, -09, -10) are the corrective,
  and the recommendations should follow them, not the findings' confidence labels.
- **Data.** The real-run counts are model-assigned codes, not adjudicated gold. They show how
  the coder behaves, not how often it is right. "Misuse" and "half the code" are claims about
  the coder that need design-gold confirmation before a CP cites them.
  - Counts should be reported per unique text. The 35 Y1.8 rows are one template.
  - The sample description is inconsistent: "144-program sample of one district" versus 122
    and 197 programs.
- **Reproducibility: adequate.** The files, codebook version and quoted texts are named. The
  pandas summary itself is not saved; save it with the CP.

## 5. What the researchers missed

1. **Y1 has zero FD entries.** Yet at least four codes depart from their cited component:
   - Y1.9 excludes attendance, which Farrington includes.
   - Y1.10 adds "task persistence in young children"; the verifier noted Farrington is about
     adolescents. ELOF "Approaches to Learning" is a possible tier A source here (lead).
   - Y1.15 adds unspecified achievement.
   - Y1.8 adds ASQ-wide milestones.

   Either the codes become `adapted` with FD entries, or the definitions narrow.
2. Category C's axis (recorded status) is not stated anywhere. Neither is the fact that it
   departs from both Farrington and NASEM on attendance.
3. research-basis.md is stale: McKinney-Vento, On-Track 2005 and ESSA graduation are shown as
   "located" while the registry has them verified. The Y1 `frameworkBasis` omits Head Start
   ELOF, which Y1.8 cites.
4. Neither the Y1.8 re-anchor nor the Y1.15 remedy was tested on design gold. Under S4 and
   the "score only on adjudicated gold" rule, a CP needs that before the owner decides.
5. The WWC outcome-domain taxonomy (lead) for generic achievement and for category C as a
   whole.
