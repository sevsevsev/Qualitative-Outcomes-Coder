# Batch 1 (Y2 Engagement, Y3 Belonging, Y4 SEL): recommendations

Date: 2026-10-16. Scope: Y2 (6 codes), Y3 (5), Y4 (12), codebook 3.1.4. Inputs: four researchers,
reconciliation R-00..R-32, 51 verified claims (35 SUPPORTED, 16 PARTIAL), four reviews. Nothing here
edits the codebook, registry or gold. Held-out gold was not read; R-00's references were dropped.

**How PARTIAL claims are used (reviewers disagree).** The practitioner (P) and devil's advocate (D)
treat all 16 PARTIAL rows as leads only; the taxonomy (T) and fidelity (F) reviewers use them as
partial support. This synthesis follows the brief: a PARTIAL row can support a change only as a
registry `fit: partial`, and never closes or prevents an FD on its own. So it sides with P and D on
Y4.12 avoidance (FD still needed) and Y4.3 (no re-scope), and with T and F in recording y2-02,
y4b-09 and y4b-11 as partial rows.

## Summary

1. **What holds.** All anchors are current and correctly named (CASEL 2020; Search Institute with
   CDC 2009; H&R, NCAS). No code is added, merged or renumbered (enum +0).
2. **What is wrong.** Y4.12's NHES quote is not on the cited 2024 page (S1.5), the evidence FD-P09
   closed on. Y2.1 cites a pedagogy for a feeling (S1.6). Nine unlogged departures (Y2.1, Y2.2,
   Y2.4, Y3.1, Y3.2, Y3.4, Y4.5, Y4.6, Y4.12); FD-P06's "no source" premise is false.
3. **Drift (counted).** Y2: 0/6 logged, 4/6 honest today, **1-2/6 after**. Y3: 1/5 logged, 3/5
   honest today, **1/5 after**. Y4: 0/12 logged, 1-2/12 honest today, **1/12 after**.

## Act now

Verdicts: A accept, AC accept with changes, Df defer, R reject, - not addressed. "Prompt" means the
text reaches the coding prompt and needs the two-run design-set gate (`source` and `frameworkBasis`
are both printed into the prompt by `codebooks/youthOutcomesV3.ts`).

| # | Code | Finding | Verified evidence | T/F/P/D | Smallest change | FD line | Prompt |
|---|---|---|---|---|---|---|---|
| 1 | Y4.12 | Registry and `basis` quote NHES wording from the 2022 NCSHE set, not the cited 2024 SHAPE page | y4b-10 S: "4.12.5 Apply refusal skills and strategies in a variety of situations." | A/A/A/A | Re-quote 4.5.5/4.8.5/4.12.5; fill publisher, 2024, tier B, `codebook_names`; note the 2022 NCSHE set. Serves Y4.9, Y8 too (R-07) | none (FD-P09 stays closed on corrected evidence) | no |
| 2 | Y4.12 | "Avoiding unsafe situations" has only partial support | y4b-09 P "consider ethical standards and safety concerns"; y4b-11 P "4.2.3 ... if uncomfortable, unsafe, or harmed" | AC/AC/AC(FD)/AC(FD) | Add both as `fit: partial` and, under the PARTIAL rule, log the element as codebook-defined. F dissents (category E covers it). Narrowing flips S172 | new FD (counted, Y4 1/12) | no |
| 3 | Y2.1 | Source cites Muhammad's Joy (a teaching aim) for the learner's enjoyment | y2-01 S "concurrent activity emotions such as enjoyment or boredom during learning"; y2-02 P (settings beyond school) | AC/AC/A/AC | Source line and `frameworkBasis` to Pekrun (2024); Muhammad stays in `basis`. No FD (decision C). y2-02 as a partial row | none | yes |
| 4 | Y2.1 | "Pride in being part of it" is not Pekrun's achievement pride | y2-03 S "retrospective outcome emotions like pride and shame" (achievement pride only) | A(FD)/A(FD)/AC/AC | Keep the wording (S008); y2-03 partial for this element; log a codebook-defined element FD (B1-2) | new FD (counted) | no |
| 5 | Y2.2 | CASEL curiosity is routed here (rule 14) but not cited | y2-05 S "Demonstrating curiosity and open-mindedness"; y2-06 S SSES curiosity | A/A/A/A | Add both. Add CASEL to Y2 `frameworkBasis` | none | yes (source, basis line) |
| 6 | Y2.2 | "Willingness to try" has no source (S049, S080) | none yet | A(FD)/A(FD)/AC(FD)/Df | Verifier pass first on CASEL "open-mindedness" and H&R phase 1 (D); FD only if both fail | new FD if the pass fails (Y2 2/6, at the line) | no |
| 7 | Y2.3, Y2.4 | Secondary copies; theory renamed | y2-07/08 S; y2-09/10 S "Situated Expectancy-Value Theory (SEVT)" | A/A/A/AC | DOI as URL of record; add Eccles & Wigfield 2020, keep 2000 | none | no |
| 8 | Y3.1 | Loneliness and mattering unsourced; cross-setting belonging rests on CDC (school) | y3-04 S Surgeon General: "A subjective distressing experience that results from perceived isolation..."; y3-02 S "Young person perceives that adults in the community value youth"; y3-03 S NRC/IOM "Promoting a sense of belonging ..." | AC/AC/A/AC | Cite y3-04, y3-02, and y3-03 (corrected chapter) as `fit: partial` (T dissents: a setting feature). **Keep FD-P01 open, narrowed to "safe"**: no verified source names safety (S163, S131). P would close it; T, F, D not until safety is sourced | changed FD (FD-P01 narrowed; still counted) | no |
| 9 | Y3.2 | Include names "youth in care", which neither anchor covers (decision C applies) | y3-05 S Chafee: "achieve meaningful, permanent connections"; y3-06 S NYTD "positive connections with adults"; y3-07 S "support from three or more nonparent adults" | A/A/A/A | Add all three; no FD. T agrees but calls youth in care a subset, not a new population | none | source line: yes |
| 10 | Y3.4 | "Reunification" goes past Assets 1-2 | y3-09 S "reasonable efforts shall be made to preserve and reunify families"; y3-10 S "ensuring the safe return of the youth" | AC/AC(FD)/A/AC | Cite both as `fit: partial` (agency duties; T, F, D). No FD, since both are SUPPORTED (A3.1 precedent). F would log a counted FD: Y3 2/5, over the line (R-08). B1-3 | none (recommended) | no |
| 11 | Y3 | Stale text (R-32) and a missing registry row | y3-11 S "Introduce me to people who can help me grow." | A/A/A/A | Registry row for DR "Connect" (Y3.5). Remove Chafee/Butts from Y3.4 `basis` and from research-basis.md | none | no |
| 12 | Y4.6 | Public speaking is not in CASEL (unlogged today) | y4a-01 S CCSS SL.4 "Present information, findings, and supporting evidence ..."; y4a-02 S "communicate clearly, listen actively" | AC/AC/A/A | Cite both; CCSS as a named Y4 secondary (B1-1) | none (closes a departure) | yes |
| 13 | Y4.5 | Components come from Self-Awareness and Relationship Skills, but the code sits in Social Awareness and is marked `framework` | y4a-03 S LfJ: "express comfort with people who are both similar to and different from them" | AC/AC/AC/R | `adapted` plus a merged-components FD (not counted); cite LfJ std 6; one `cite_as` fix with batch 2 (R-06). D rejects the relabel | new FD (not counted) | no |
| 14 | Y4.9 | FD-P06 says the absorbed construct had no source | y4b-04 S "recognize family, school, and community resources and supports"; y4b-05/06 S NHES 3.5.2, 4.8.3 | A/A/A/A | Add rows; amend FD-P06 (cross-competency merge; note "willingness") | changed FD (not counted) | no |
| 15 | Y4.2, Y4.4, Y4.7, Y4.8, Y4.11 | Elements in the definitions with no registry support | y4a-08 S (impulses); y4a-05 S "Understanding and expressing gratitude"; y4a-06 S; y4b-01 S "Showing leadership in groups"; y4b-03 S; y4b-07 S | A/A/A/A | Registry rows and `basis`; source lines for Y4.4 and Y4.7; drop "(in flight)" from Y4.7 useInstead. y4b-02, y4b-08 not needed | none | Y4.4, Y4.7 only |
| 16 | Y4 | CF-016 and FD-P02..P08 still use 2.x numbers | (housekeeping) | A/AC/A/AC | Renumber by script; y4a's new routings need their own CPs (R-30) | none | no |
| 17 | all | CASEL URL: verifiers disagree on which copy carries the title (R-01) | y4a-10 S (11.2020 PDF has the heading) | A/AC/AC/AC | One PATCH in `v3/build_registry.py` and the verification script after all batches: 11.2020 PDF primary, sites/5 alternate, excerpts re-pulled | none | no |

**Proposed CPs** (enum +0 for all; the MINOR items are all in the later list):
- **CP-B1-01 Y4 citation-and-deviation** (CITATION_FIX + deviation log, PATCH; items 1, 2, 13-16): registry, `basis`, `fidelity`, DEVIATIONS.
  Item 1 goes first. No prompt.
- **CP-B1-02 Y3 citation-and-deviation** (same type, PATCH; items 8, 10, 11, plus the item 9 registry rows). Must
  land FD-P01's narrowing in the same CP as any Y3.4 decision (R-08). No prompt.
- **CP-B1-03 Y2 citation-and-deviation** (same type, PATCH; items 4, 6, 7, plus the item 3 and 5 registry rows).
  Do not merge it while PR #62 can still change Y2.5/Y2.6 drift (see B1-4). No prompt.
- **CP-B1-04 Source and Framework Basis lines** (CITATION_FIX, PATCH; Y2.1, Y2.2, Y3.2, Y4.4, Y4.6, Y4.7, Y4.12, and the
  `frameworkBasis` secondaries, B1-1): the only prompt-reaching CP, so one two-run design-set gate.
  Update the Y2.A category description with it (T).
- No hint CP is ready: each candidate lacks gold rows on both sides (S3.1) or waits on another owner.
  Each CP that changes a count updates the DEVIATIONS drift table.

## Worth a later cycle

| Item | Why later |
|---|---|
| FD-P16 anchor line to list all four NCAS processes (y2-13, y2-14 S); restate its evidence as "statements name them together" (S077) | PR #62 (CP-09-04 says FD-P16 unchanged; R-10). T, F accept; P, D defer. A note for PR #62 |
| Y2.5 creative writing: verify CCSS W.3 and an OECD-hosted PISA 2022 framework; counted FD only if both fail | PR #62; y2-11 is PARTIAL. A writing FD could put Y2 at 3/6 |
| Y2.6 stale "located" label | PR #62 (D) |
| Y2.4 "or community": verifier pass on Hulleman first; if it fails, narrow to "goals, future plans or daily life" (MINOR, gate; R-16) | T, F narrow now; P: 3 real texts orphaned; D defers. An FD would put Y2 over the line |
| Y4.3 scope (R-02, R-14); self-control → Y4.2 (y4a-08 S; S103) | Crosses PR #66 rule 8; the Y4.3 claims are PARTIAL. B1-5 |
| Y4.12 hint: generic risk-behavior incidence → Y8 domain-only, triggered by reduce/prevent verbs with no skill named (P wording) | Needs the Y8 owner (R-27). T, F, P accept; D defers |
| Leadership hint Y4.7 vs Y6.4: P's S059-safe wording ("leading peers in a group task, even a community project → Y4.7") | PR #62 CP-09-08 rule 7 and batch 2 y6 own it (R-28). As first worded it flips S059 (P, D) |
| Interviews → Y7.2, pitching → Y4.6, business creation → Y7.4 (R-13) | PR #62; agree with batch 2 y7 |
| Bare "self-awareness" → Y4 domain-only (about 10 texts split Y4.1/Y5.1) | No gold row. Propose two `status=proposed` rows first (P). D defers |
| Bare "resilience" target (about 17 texts) | Batch 2 owns. P votes Y4.2; R-05 counts disagree |
| "Improved behavior" with no act named → Y4 domain-only (P) | F, D defer. No gold rows |
| Y4.10 vs Y1.7 (chess, strategy; R-15) | PR #66 item 11 |
| Y3.4 exclude for "prevention of entry into child welfare", with a named target | Needs one owner (R-26). P votes F2.3 |
| Y3.2 example: staff rapport → A1.2 (R-29); adult/public texts coded in Part Y (P, about 6) | Examples and review desk |
| Engagement CF mapping Fredricks's dimensions to existing codes (P: the same text gets Y2.2/Y2.3 or Y2/Y1.9); Fredricks (y2-04 S) as secondary only | Pilot item 7, after PR #62/#66. D rejects Fredricks |
| research-basis.md: Y2 has no single anchor; Y3's category level is codebook-defined with convergent support (T) | Docs only |

## Rejected, and why

- **Bare "creativity" → Y2.5 hint** (y2-12 S). T, F, D: creativity as a skill is not
  expression-as-experience, and Y2 domain-only already gives these texts a home. P dissents
  (it codifies current routing). Backlog it for the confusion miner.
- **FD-P16 → codebook-defined.** T, F: NCAS lists every process the code merges.
- **NSCH for Y2.6** (y2-17 P). It names the wrong body (CAHMI, not HRSA) and adds nothing (T, P, D).
  F would accept a corrected credit as optional.
- **NCAS review posts as supports** (y2-15/16 P). Dated notes only.
- **Y2.6 widened to engagement quality.** Against CP-09-01/02 (all four).
- **Y3.2 role-model widening** (y3-08 P). Modelling is not a relationship (all four).
- **Y4.1 "Linking feelings, values, and thoughts"** (y4a-07 P). Y4.1 is already direct, and Y5.1
  claims the same bullet (R-03) (all four).
- **y4b's Y4.3 attention/focus widening now** (y4b-12, y4b-13 P). It rests only on PARTIAL rows,
  imports an EASEL Cognitive skill into Self-Management, and crosses PR #66 (T, F, D). P dissents.
- **y4b-08 "Standing up for the rights of others" for Y4.11** (P). T and F would add it as
  partial; P and D reject it because it blurs the Y6.3 line that S223's alternate tests. y4b-07
  already covers the element, so the smallest change leaves y4b-08 out.
- **y3-01** (P): a caring setting, not felt belonging.

## Unverified leads

- NRC/IOM 2002 "physical and psychological safety" as a program feature, for the "safe" half of Y3.1.
  This is the one lead that could close FD-P01; send it to a verifier first.
- CDC 2019 adolescent-connectedness release (fetch returned only fragments).
- Hulleman (2010) "relevant to their lives" for Y2.4 "community"; CASEL "open-mindedness" and H&R
  phase 1 for Y2.2 "willingness to try"; `ccss-writing-anchors` W.3 and the OECD-hosted PISA 2022
  framework for Y2.5 writing.
- Batch 3 HECAT Safety HBO 4 ("avoid risky behaviors") for Y4.12 avoidance. If it verifies, it
  replaces the item 2 FD.
- NHES 3.2.2; Kashdan (2018); Weiss et al. (2005); NCSHE 2022 primary text; EASEL guide year.
- The PARTIAL rows not used as evidence above: y2-11, y2-15, y2-16, y2-17, y3-01, y3-08, y4a-04,
  y4a-07, y4a-09, y4b-02, y4b-08, y4b-12, y4b-13 (y2-02, y4b-09, y4b-11 are used as partial rows).

## Decisions for Severin

- **C (recurs). Age rule.** Recommended: keep the pilot rule. It bites only on Y3.2 ("youth in
  care"), which Chafee/NYTD fix.
- **D (recurs). Timing.** Recommended: land CP-B1-01 and CP-B1-02 now (no prompt), CP-B1-03 after
  PR #62, and CP-B1-04 with one gate run. Make the CASEL URL change once, after all four batches.
- **E (recurs). Review-desk correction.** Recommended: once R-26 has an owner, correct the 12 DHS
  "Truancy Provider" template rows (9 coded Y3.4, 2 F1.1, 1 F2.3), as for the Y1.8 template.
- **B1-1. Secondary frameworks.** When a CP grounds an element in a source outside the domain's
  anchor, should it name that source in `frameworkBasis` (F)? Recommended: yes, as a "secondary"
  clause, in the same CP. Note that this reaches the prompt.
- **B1-2. Y2.1 pride in membership.** Recommended: log a codebook-defined element FD (T, F), keeping
  the wording for S008. Alternative: record the Pekrun pride row as partial with no FD (P, D).
- **B1-3. Y3.4 reunification.** Recommended: statutory duties rated SUPPORTED count as partial-fit
  support, with no FD (T, P, D). Alternative: a counted FD (F), which needs FD-P01 closed first.
- **B1-4. Does S4.9 apply to Y2, which has no single anchor?** (F, D.) Recommended: yes. At 2/6, a
  Y2.5 writing FD would trigger a re-review that also freezes PR #62's Y2 CPs.
- **B1-5. Y4.3 scope.** Recommended: T and F's reword ("follow-through", setting rule kept,
  self-control → Y4.2), decided after PR #66. Alternatives: D (FD-P03 note only) or P (attention
  widening, a counted FD).
- **B1-6. Merged-components test** (T). FD-P04/05/06/08/16 argue sparsity, not "coders can't tell
  them apart". Recommended: decide once for all (STANDARDS wording, or plain framework coverage);
  never FD-P16 alone.
- **B1-7. Y4.5 relabel** to adapted with a merged-components FD (T, F, P). Recommended: yes. D
  would cite LfJ only and leave the label.

## Gold rows that constrain any change (design set)

S008 (Y2.1 pride: do not narrow), S049, S080 (Y2.2 willingness), S115 (Y2.4), S077 (FD-P16), S163,
S131 (Y3.1 "safe": keeps FD-P01 open), S112 (isolation → Y3.3), S102 (Y3.2), S024, S070 (Y3.4),
S082, S242 (Y4.4 gratitude), S132 (Y4.6), S059 (leadership hint must not flip it), S172, S052
(Y4.12; S172 blocks narrowing "avoid"), S065 (incidence stays Y8), S103 (self-regulation → Y4.2),
S220 (task persistence → Y1.10), S086, S235 (Y4.3/Y1.9 edges), S122, S007 (Y4.9), S027, S223, S227
(Y4.11).

None of the act-now items flips any of these rows. Reviewers also cited rows from the design file's
old held-out subset. They are not listed here, and none flips under the act-now items.
