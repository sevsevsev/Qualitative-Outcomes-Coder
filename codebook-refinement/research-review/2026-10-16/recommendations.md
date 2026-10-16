# Y1 Academic research review (pilot): recommendations

Date: 2026-10-16. Scope: Domain Y1 Academic Learning & Achievement (18 codes), codebook 3.1.4.
Spec: `/mnt/project-files/research-review/deep-research-review-prompt.md`, piloted on Y1 at
Severin's request. Nothing here changes the codebook, the registry or gold. The three "act now"
items have draft CPs (CP-11-01 to CP-11-03) for Severin's review.

How it was done (details in `method-note.md`): four researchers (subjects, mindsets, attainment,
structure and real use) → independent `codebook-citation-verifier` runs on every new or changed
citation (57 claims: 38 SUPPORTED, 19 PARTIAL, none misattributed or unsupported;
`verification-table.md`) → four independent reviewers (taxonomy/methods, framework fidelity,
practitioner/coder, devil's advocate; `reviews/`) → this synthesis. Unverified leads were not
used as evidence.

## Headline

1. **Y1's sources hold up.** No cited source is wrong, rescinded or misattributed in substance.
   Farrington (2012) is still the right anchor for category B; ESSA, NAEP and NSC are current;
   the three-category structure matches how ESSA, the 21st CCLC GPRA measures and the National
   Academies' *Monitoring Educational Equity* (2019) split academic outcomes (supporting
   evidence, PARTIAL as a structural anchor, so it stays a note).
2. **Y1's drift count is understated.** DEVIATIONS.md shows Y1 at 0 of 18, but five codes
   already go past their sources in their own text, with no FD entry: Y1.2 (home-language
   maintenance), Y1.10 (young children's task persistence), Y1.13 (pregnancy), Y1.14
   (alternatives to suspension) and Y1.15 (achievement with no subject named). Logging them
   honestly gives 2 to 3 of 18 (under the one-third line).
3. **One coding problem is real and large.** 35 of 36 Y1.8 rows in the program-description run
   are one K-5 template sentence ("Elementary participants build early-literacy skills") that
   both blind coders put in Y1.1. Y1.8's definition already says "below kindergarten age"; the
   model keys on the word "early".
4. **Y1.15 has become the general-achievement code** (about 59 of 95 rows are "academic
   achievement" or "academic success"). That is Severin's CP-09-09 rule working, not a bug, but
   it rests on no framework.

## Ranked list

Columns: finding · verified evidence · reviewer verdicts (T = taxonomy, F = fidelity, P =
practitioner, D = devil's advocate) · smallest change · CP type and bump · FD line · enum cost.

### Act now (draft CPs attached)

**1. Fix the citations that are missing, broken or misattributed (CP-11-01, CITATION_FIX,
PATCH, FD none, enum +0).** All four reviewers accept each item below (D concedes each as
"source wrong, missing or broken").
- **Y1.2 home-language maintenance has no source.** Seal of Biliteracy Guidelines (2020),
  SUPPORTED: "English learners should be encouraged to maintain and improve proficiency in their
  home or heritage language(s)". Adjudicated S143 depends on this half. Settle the author list
  (seven bodies, or eight with SealofBiliteracy.org) before adoption. This closes one of the five
  unlogged departures.
- **Y1.16's only source returns 403 and is partial.** Add ESSA 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb),
  SUPPORTED: "accelerated coursework to earn postsecondary credit while still in high school, such
  as Advanced Placement and International Baccalaureate courses and examinations, and dual or
  concurrent enrollment programs." Keep the CRDC entry.
- **Y1.13 names foster placement changes but cites only homelessness law.** Add 42 U.S.C.
  675(1)(G), SUPPORTED: "A plan for ensuring the educational stability of the child while in
  foster care". Pin McKinney-Vento to 11432(g)(3)(A)-(B) ("School stability", SUPPORTED).
- **Farrington publisher name (S1.4).** `cite_as` mixes old and new names; the report prints
  "University of Chicago Consortium on Chicago School Research" (SUPPORTED). Add a rename note.
  Same consistency fix for the two Allensworth & Easton entries.
- **National Reading Panel excerpt is a string of headings (fails S1.5).** Replace it with
  "Fluency is one of several critical factors necessary for reading comprehension." (SUPPORTED).
- **Conley attribution.** The verified text is Conley, *School Administrator* (AASA), April 2016
  (SUPPORTED); the registry publisher still says EPIC.
- **Head Start ELOF date.** The govinfo GPO copy confirms 2015 (SUPPORTED); swap in that URL.
- **Stale "located" in `basis`** for Y1.1, Y1.7, Y1.8, Y1.13, Y1.15 while the registry says
  verified (and an old "Pending: located" note on the NRP entry). Data PATCH.

**2. Log the five existing departures (CP-11-02, RULES/deviation log, PATCH, enum +0).** F and T
raised it; D accepts Y1.10 and Y1.15 as FD entries with no wording change; P neutral.
- Y1.10 → `fidelity: adapted`, new FD (sector widening, counted): Farrington covers school
  assignments from the middle grades up; Y1.10 adds young children's task persistence (S220).
- Y1.15 → new FD. Options for Severin: merged-components over the subject achievement components
  (not counted; supported in part by WWC Study Review Protocol "broad standardized student
  assessments across multiple subjects", PARTIAL, and ESSA 6311(c)(4)(B)(i), PARTIAL) or a
  codebook-defined element (counted). Recommendation: merged-components.
- Y1.13 "pregnancy" → FD sector widening (counted) now; F prefers dropping the word later
  (MINOR, no gold row affected). Title IX 34 CFR 106.40 is PARTIAL only.
- Y1.14 "alternatives that replace them" → FD none, with ESSA 7118(5)(F) "reduce exclusionary
  discipline practices" (PARTIAL) as support, because adjudicated S055 reads as a replaced
  suspension. 
- Y1.2 closes through item 1. Drift after: 2 of 18 (11%), or 3 (17%) if Y1.15 is
  codebook-defined. Update the DEVIATIONS drift table in the same CP.

**3. Three coding hints the data supports (CP-11-03, HINT, PATCH, FD none, enum +0; needs the
two-run design-set gate).**
- **Y1.8 → Y1.1/Y1.3 when a grade or "elementary" is named.** Moves 35 real rows (P: ACCEPT WITH
  CHANGES; F: ACCEPT; T: accept; D: DEFER until a re-run shows the template still misroutes). The
  trigger must be the stated grade or age, not the word "early", or design gold S025 ("Children
  ... pre-literacy skills", no grade) breaks. S100 supports the hint.
- **Y1.12 useInstead → Y2.4 for the value of schoolwork.** Farrington's fourth academic mindset,
  "This work has value for me" (SUPPORTED), already lives in Y2.4 with no pointer; S1.6
  observability requires one. All four accept.
- **Y1.16 exclude: readiness for higher-level coursework** goes to the subject code, or Y1
  domain-only when no subject is named (P: one text got three codes; moves 3-4 rows; keeps S014 in
  Y1.16). T and F accept; D did not object to this one.
- Caveat from drafting: the atomizer drops "Elementary participants" from the template sentence,
  so the Y1.8 hint may move few of the 35 rows. The review-desk correction (decision E) is the
  reliable fix for rows already coded; CP-11-03 adds a non-gating preview to measure the hint.

### Worth a later cycle

| # | Item | Why later |
|---|---|---|
| 4 | Y1.8 anchor: keep Head Start ELOF and add the ED-HHS Race to the Top-Early Learning Challenge definitions (78 Fed. Reg. 53964, 2013, SUPPORTED) as cross-program support | Needs Severin's call on his early-childhood rule (decision A below). T, F accept adding; D rejects as no tier gain. |
| 5 | Y1.4: CSTA 2026 PK-12 standards (PARTIAL: supersession not confirmed) and ESSA 7801(52) "technology, engineering ... computer science" (SUPPORTED) | Wait for PR #62, which is rewriting Y1.4. |
| 6 | Y1.10, Y1.13, Y1.14 definition rewordings ("at any age"; drop "pregnancy"; "reductions, including by replacing them") | MINOR scope changes. S220 (puzzles), S051 (teen parents staying enrolled, gold Y1.13) and S055 (restorative circles) constrain the wording, so dropping "pregnancy" would flip S051. |
| 7 | Engagement: bare "student engagement" splits Y1.9 vs Y2 (not Y1.9 vs Y3.1 as researched); GPRA "engagement in learning" and ESSA "student engagement" (SUPPORTED) as support | P found the real unstable pair; there are no gold rows for it yet (S3.1 needs two per side). |
| 8 | Executive function and "focus" → Y4.3; self-control → Y4.2 (about 15 real rows scattered) | Needs Y4.3's "outside schoolwork" wording changed (FD-P03); do it with the Y4 review. |
| 9 | Y1.15: "academic growth/skills" as Y1 domain-only examples (4-5 rows) | Fits CP-09-09 decision 2; small, but it touches the domain-only rule, so batch with other domain-only examples. |
| 10 | WWC Study Review Protocol domains as category C support (attendance, high school completion, college enrollment: SUPPORTED on v5.0) | v5.0 is superseded by v5.1; re-verify on v5.1 first. |
| 11 | Y1.1 CCSS reading anchor R.10 (SUPPORTED); Y1.7 CCSS W.7-W.8 research and source credibility (SUPPORTED); Y1.7 exclude for "thinking skills with no information object" | Nice-to-have; ESSA and NAMLE/Conley are already direct. D rejects as churn. |
| 12 | Y1.13 attendance: add ESSA 6311(h)(1)(C)(viii)(I) chronic absenteeism (SUPPORTED) as tier A beside Attendance Works | Same 10% definition; no fix needed. Skip EDFacts FS195 (re-issued yearly). |
| 13 | Y1.18: ESSA 6311(h)(1)(C)(xiii) postsecondary enrollment (SUPPORTED); certificate boundary with Y7.4 | NSC is direct and current; the certificate line belongs with Y7 after PR #62. |
| 14 | research-basis.md: dated status note (located → verified), note that the A/B/C grouping is codebook-defined with NASEM 2019 as support, attendance as a Farrington behavior filed under C, social skills in Y4 | Docs only; batch with the next docs edit. |
| 15 | Y1.12 academic belonging vs Y3.1 school belonging | No gold row or real-run conflict yet (S3.3 not triggered). |

### Rejected, and why

- **NASEM 2019 or "one ESSA clause" as Y1's structural anchor.** PARTIAL as a structure, and
  naming either as the anchor would turn the attendance and discipline placements into new
  deviations (F, T, D).
- **Nagaoka et al. (2015) for category B.** PARTIAL; general developmental constructs, already
  anchoring Y5 (all reviewers).
- **Fredricks et al. (2004) as a citation.** Verified from the abstract only (PARTIAL).
- **IES practice guides (Pashler 2007, Halpern 2007) for Y1.11, Y1.12.** Teacher practices, so
  partial; Farrington is already direct.
- **Re-anchoring Y1.13 on EDFacts FS195.** Same definition as Attendance Works, versioned yearly.
- **EDFacts FS221 for Y1.17.** Neglected-or-delinquent programs only; would add a sector-widening
  FD while WIOA 681.460 is already direct.
- **New codes** for general achievement, middle-to-high-school transition, ACT/SAT benchmarks,
  summer learning loss, credit recovery. Rows are few or absent; general achievement reverses a
  recent owner decision for +1 enum. Pennsylvania Act 158 is a state rule, so at most a
  general-terms hint later.
- **Native American Languages Act and ESSA 7011(7)(B) for Y1.2.** PARTIAL; the Seal Guidelines fit
  directly.

## Decisions only Severin can make

A. **Y1.8 and the early-childhood rule.** Keep Head Start ELOF as Y1.8's anchor (STANDARDS S1.2
   names it tier A, and the construct is about children below kindergarten by definition) and add
   the joint ED-HHS definitions as cross-program support? Recommended: yes, add; do not replace.
B. **Y1.15 deviation type.** Merged-components (not counted) or codebook-defined (counted)?
   Recommended: merged-components. No new general-achievement code.
C. **The age rule for sector widening.** Farrington (middle grades up) and the On-Track Indicator
   (9th grade) are used for elementary students. Recommended rule: an FD is needed only when a
   code's own text names a population outside its source (so only Y1.10 and Y1.13 count).
D. **Timing.** Land the citation-only fixes (CP-11-01, CP-11-02) now as their own PATCH, or wait
   and batch them with the other domains' reviews? Recommended: now, after PR #62, because they
   touch no coding boundary.
E. **Review-desk fix.** Correct the 35 template rows from Y1.8 to Y1.1 in the real-run review now,
   independent of CP-11-03.

## Gold and held-out notes

No held-out gold was read or used. Design-set rows touched by the proposals: S014, S025, S051, S055,
S100, S143, S216, S220 (none would flip under the act-now wording; S051 rules out dropping
"pregnancy" from Y1.13 without Severin's say). Real-run counts are model codes
from one district's partners, counted per row; template copies inflate some of them (noted where
it matters).
