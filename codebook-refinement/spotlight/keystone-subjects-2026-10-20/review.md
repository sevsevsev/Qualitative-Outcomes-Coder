# Review of proposals P-01 to P-11 (Keystone subjects search, 2026-10-20)

Reviewer: independent skeptical review; I did not draft the proposals or the candidates. Inputs: `protocol.md`,
`proposals.md`, `verification/claims_*.csv` and `results_*.csv` (only confirmed parts of PARTIAL claims used),
`_already_in_map.md`, `_codebook_3.3.0.md`, and the map's tier legend (`../report.md`: A strong, B good, C suggestive,
D thin). I fetched three sources myself where a decision turned on a detail:

- Bhatt et al. 2024, NBER WP 32510, full text: the outcome tests and the intent-to-treat estimate.
- Liu, Lee & Gershenson 2021, ERIC ED671028, full text: which grades' tests are covered.
- MDRC's Saga live-online brief page (Miller, Solís-Román & Grossman 2026): the delivery model and subgroups.

Bar applied: a tested link at suggestive or better needs one clean randomized trial, or two independent strong
quasi-experiments of the same model, measured on the indicator or a closely equivalent test. A research-associated link
needs a meta-analysis of the association, or two independent longitudinal studies that adjust for prior achievement.
Grades, credits and course-taking are intermediate steps, never indicators. ACT, SAT and Advanced Placement are not
SPOTlight indicators.

## Summary

| Proposal | Decision | Net change to the map |
|---|---|---|
| P-01 Saga evidence on L-03 | Accept with changes | L-03 gets two studies, a sharper pathway sentence and new conditions; tier stays B |
| P-02 Attendance to Keystone tests | Accept with changes | New not-recommended row, Y1.13 -> S10, S12, tier C; L-83 unchanged |
| P-03 Growth mindset to ninth-grade grades | Reject as a new link | Add the MDRC study to the existing L-90; no new row |
| P-04 Parent utility-value mailings | Reject | None |
| P-05 Relevance writing to science grades | Reject | None |
| P-06 College-access nulls | Accept with changes | One combined not-recommended row, Y7.2 -> S10, S11, S12 |
| P-07 National Math and Science Initiative and Advanced Placement | Reject | None (search log only) |
| P-08 Test preparation and college entrance exams | Reject | None (search log only) |
| P-09 Literature and Biology gaps | Accept in part | New Literature gap row (Y1.1 -> S12); S11 added to L-135; no Biology or Algebra rows |
| P-10 Self-control to grades | Reject | None |
| P-11 Self-beliefs to high school tests (L-91) | Reject for now | None; open question logged |

Net: 2 new rows, 3 existing rows edited (L-03, L-90, L-135). No new recommended link.

---

## P-01: Strengthen L-03 (Y1.3 -> S10) with Saga's evidence

**Decision: accept with changes.**

**Reason.** This is the best result the search found. Bhatt et al. 2024 (KV-003, SUPPORTED) is a clean randomized trial of
roughly 4,000 ninth graders. Its outcome is the state Regents math exams in New York and the PSAT math test in Chicago.
The Regents exams are close to a Keystone Algebra I equivalent, but the PSAT is not. The proposal quotes the
treatment-on-the-treated figure (0.23). The paper's own intent-to-treat estimate is 0.19 standard deviations (full text,
fetched), and that is the figure the map should lead with. The test result covers one cohort only, because testing was
cancelled in 2020. The MDRC Algebra I Regents result (39 vs 31 percent passing; KV-002, SUPPORTED) comes from one matched
comparison of a different variant, the fully online one. It cannot carry that variant on its own. The MDRC page also
reports weaker effects for boys and for students who started high school far behind.

The proposal's "conditions unchanged (daily, in-school, small groups)" is wrong for both studies. Neither tested
in-person small groups. The hybrid model uses groups of four, half with a tutor and half on software, swapping daily.
The online model pairs two students with a remote tutor every other day. The conditions must say which variant rests on
which evidence.

**Wording changes to L-03.**
- Tier: stays **B**. Final recommendation stays **recommend-with-conditions**.
- Pathway sentence (replace): "Daily small-group math tutoring, scheduled as a class period in ninth and tenth grade,
  raises high school math test scores, including New York's Algebra I end-of-course exam."
- Studies (add): Bhatt, Guryan, Khan, LaForest-Tucker & Mishra (2024), NBER Working Paper 32510. Miller, Solís-Román &
  Grossman (2026), *Expanding High-Dosage Tutoring: Evidence from Saga's Live-Online Math Model*, MDRC.
- Conditions (replace): "A tutoring period every school day, built into the school schedule, with paid, trained tutors and
  groups of two to four students. A version that alternates tutor days with computer practice was tested in one
  randomized trial. A fully online version rests on one matched comparison only."
- Magnitude note (add): "In the trial, students offered tutoring scored 0.19 standard deviations higher on end-of-year
  state math tests (one cohort). In the online version's matched comparison, 8 more students in 100 passed New York's
  Algebra I exam by the end of ninth grade (39 vs 31 percent)."
- Caveats (add): "The online version showed weaker effects for boys and for students who entered high school far behind.
  New York's Regents passing score is not the Keystone proficiency cut, so these rates do not translate into Keystone
  rates. The program needs a slot in the school day, so a partner runs it with a school, not on its own."

## P-02: Extend the attendance mechanism link L-83 to S10 and S12

**Decision: accept with changes, as a separate not-recommended row at tier C. L-83 is unchanged.**

**Reason.** Liu, Lee & Gershenson 2021 (KV-034, SUPPORTED) is already the main study on L-83. The full text confirms its
state tests cover grades 7 to 11. It also finds that English absences hurt only in high school, while math absences hurt
slightly less in high school than in middle school (the difference is not significant). So the study does reach high
school tests. But it is one within-student quasi-experiment in one California district. The bar for a causal link at
good or better is two independent strong quasi-experiments, and no second high school study has been verified.
Allensworth & Easton 2007 (KV-035) measures course passing. That is an intermediate step, not a test, and it adds nothing
for S10 or S12. The proposal's fallback, "a new research-associated link", would put a causal design in the associated
tier. Tiers are never merged, so that fallback is refused. The map already split the grade 3 part of L-83 into L-102 for
the same reason, and this follows that precedent.

**Wording (new row).**
- Codes and indicators: Y1.13 -> S10, S12. Final recommendation: **not-recommended**. Tier: **C** (one quasi-experiment).
- Pathway sentence: "Missing math or English classes in high school lowers that subject's state test score slightly. In
  one large California district, 10 missed classes cost 0.03 to 0.04 standard deviations."
- Studies: Liu, Lee & Gershenson (2021), Journal of Public Economics 199, 104441.
- Caveats: "One district, and California's tests, not the Keystone exams. Biology was not studied. This is a mechanism
  step, not program credit: a partner first needs evidence that it moves attendance (see L-27 and L-28)."
- Open lead for a later round: Kirksey (2019), a student fixed-effects study of high school absences cited by Liu et al.
  It has not been verified, so it cannot be cited yet. If verified with a high school test outcome, the row can be
  re-reviewed for B.

## P-03: New tested link, growth mindset (Y1.12) -> ninth-grade grades

**Decision: reject as a new link. Accept the added study for the existing L-90.**

**Reason.** The map already has this link. L-90 is Y1.12; Y5.4 -> S4, not-recommended, tier D: "A short growth-mindset
lesson raised grades for lower achievers, but no checked study links that grade gain to graduation." Its study is the
same Yeager et al. 2019 trial. Grades are not an indicator, so a separate "lane 2 grades" row has no SPOTlight target.
The MDRC analysis (KV-032, SUPPORTED) reanalyses the same trial. It shows the result is robust, but it is not an
independent replication, so it does not change the tier. L-167 stays: the lesson did not reliably raise test scores.

**Wording.** No new row. L-90, Studies (add): "Zhu, Garcia, Boxer, Wadhera & Alonzo (2019), *Using a Growth Mindset
Intervention to Help Ninth-Graders: An Independent Evaluation of the National Study of Learning Mindsets*, MDRC (ERIC
ED601132): independent reanalysis of the same trial, consistent results." Tier, pathway and recommendation unchanged.

## P-04: Parent utility-value mailings -> course-taking and ACT

**Decision: reject.**

**Reason.** The two papers (KV-013 PARTIAL, KV-014 SUPPORTED) report one trial, from one team, in one sample. The
outcomes are senior-year course-taking, an intermediate step, and ACT scores, which are not a SPOTlight indicator. ACT
math and science are also not close equivalents of Keystone Algebra I or Biology, so the trial does not reach S10 or S11.
The sample came from the Wisconsin Study of Families and Work, a long-running research cohort. Nothing confirmed shows
the sample resembles Philadelphia families. The code fit is also loose: F1.2 is home learning routines, while a brochure
about the value of math courses fits F1.1 parenting knowledge at best. A row here would be noise in the map. Keep it in
the search log as a promising lead if a replication with a state test appears.

## P-05: Relevance writing (Y2.4) -> high school science grades

**Decision: reject (no row).**

**Reason.** One trial (KV-012, PARTIAL) found gains only in course grades, only for students with low expectations. The
abstract confirms that. The claim that there was no effect for other students was not confirmed. Course grades are not an
indicator, and Y2.4 has no link in the map, so no partner can claim credit through it today. A "do not claim" row is
meant to stop a claim someone would otherwise make. Here there is nothing to stop. Search log only.

## P-06: College-access programs and high school grades or tests

**Decision: accept with changes: one combined not-recommended row, limited to studies about high school academics.**

**Reason.** A college-access partner (Y7.2) is the partner most likely to assume a Keystone benefit. One row that says no
checked study shows one is useful, and it is honest. The anchor is the national Upward Bound randomized trial (KV-017,
SUPPORTED). It raised math credits from 3.0 to 3.2 and did not change other credits, honors or Advanced Placement
credits, or grades. The other items are weaker:
- iMentor (KV-021, PARTIAL) found few impacts on academic achievement in a lagged-cohort design. The same abstract notes
  some small positive impacts on non-academic outcomes, so "few impacts" is the accurate wording, not "no effect".
- Upward Bound Math-Science (KV-015/KV-018, SUPPORTED) raised grades and chemistry and physics course-taking in one
  propensity-matched study, compared against regular Upward Bound students. That is a below-bar positive on intermediate
  steps.
- GEAR UP Iowa (KV-019, PARTIAL) is one quasi-experiment reporting higher test scores in grades 7 to 10. That the test was
  a state test is not confirmed.

College Possible (KV-020) and the text-message nudges (KV-033) measured only ACT or SAT outcomes, so they leave this row.
Their nulls are also weaker than proposed. College Possible's ACT result rests on 171 of 238 students and is described as
"little evidence", which is underpowered, not a demonstrated zero. The nudge result is null only in the national arm.
Upward Bound is already in L-80 (graduation), so this row cross-references it.

**Wording (new row).**
- Codes and indicators: Y7.2 -> S10, S11, S12. Final recommendation: **not-recommended**. Tier: **none: null or below the
  bar**.
- Pathway sentence: "College-preparation programs have not been shown to raise high school test results. In the national
  Upward Bound trial, only math credits rose, and grades did not change."
- Studies: Myers, Olsen, Seftor, Young & Tuttle (2004), ERIC ED518667. Merrill, Cole, Soltani & Kang (2017), ERIC
  ED591554. Olsen et al. (2007), ERIC ED497631. Leuwerke et al. (2021), JESPAR 26(4), 352-370.
- Caveats: "No checked study of these programs measured an end-of-course exam. A math-science version went with higher
  science grades in one matched study, and an Iowa program reported higher test scores in one quasi-experiment. Both are
  below the bar. See L-80 and L-138 for graduation."

## P-07: Advanced coursework (Y1.16) -> Advanced Placement exams

**Decision: reject (search log only).**

**Reason.** Advanced Placement is not a SPOTlight indicator. The proposal labels the row "no SPOTlight indicator", and a
row with no indicator does not belong in a map whose rows link codes to indicators. The model is mostly a school model
anyway: it trains teachers, pays incentives and runs inside school Advanced Placement courses. The proposal also
overstates the randomized trial. KV-016 (PARTIAL) confirms no significant difference: 3.7 vs 4.7 percent scoring 3 or
higher in the report's table, and 2 vs 3 percent on the clearinghouse page. The effect size of -0.25 was not confirmed.
If recorded anywhere, write "no significant difference", not "a lower passing rate".

## P-08: Learning strategies and study skills (Y1.11) -> ACT and SAT

**Decision: reject (search log only).**

**Reason.** The clearinghouse rating (KV-030, SUPPORTED: positive effects, improvement index +9) is on ACT and SAT
scores, which are not SPOTlight indicators. A "college and career goal" row with no indicator is outside the map's scope.
The rating also pools a mixed class of products (courses, computer coaching, test-taking tips). It is not one model that
a partner could match against conditions. The code fits (Y1.11 includes test preparation), but the link has no
indicator to point at.

## P-09: Gap notes for Literature (S12) and Biology (S11)

**Decision: accept in part: one Literature gap row, S11 added to L-135, and no Biology or Algebra I context rows.**

**Reason, Literature.** This is a useful honest gap. The tested high school reading gains come from school-run courses
that replace an elective:
- Enhanced Reading Opportunities (KV-005, SUPPORTED): 0.11 on state English tests in ninth grade, not significant the
  next year.
- Vaughn et al. 2015 (KV-006, PARTIAL): 0.43 on reading comprehension. That the measure was standardized was not
  confirmed.

The reviews agree:
- None of the 12 effective adolescent programs was in a high school (KV-009, SUPPORTED).
- All qualifying secondary tutoring studies were in England (KV-008, SUPPORTED). The proposal's wording ("no United States
  secondary tutoring study qualified") says the same thing more loosely. Use the confirmed wording.
- 4 of 10 Striving Readers interventions were positive in grades 6 to 10 (KV-039, SUPPORTED).

Drop the Chicago Structured Literacy figure (KV-007) from the pathway sentence. It is a preliminary conference abstract
with an unnamed test. It can be listed as a lead. L-154 (daily tutorials in one Boston charter school, Y1.1 -> S12) is
the only partner-like result and is already below the bar, so the new row cross-references it.

**Reason, Biology.** The map already shows that science has no partner model (L-48, L-169, L-170, L-171), so a new gap row
would repeat them. The early college Biology result (KV-010, PARTIAL) is real. It is 68 vs 53 percent passing North
Carolina's Biology end-of-course exam in a lottery study that meets clearinghouse standards. It belongs on the existing
early college row L-135, which is already marked as a school, not a partner program. Cite the clearinghouse review of
the study. The checker found no Biology result in the 2017 journal article. The science review (KV-011) covers classroom
programs and adds no row.

**Reason, Algebra I school models.** Double-dose algebra, Cognitive Tutor and the curricula synthesis (KV-001, KV-004,
KV-038) are context. L-03 is already a recommended Y1.3 -> S10 link. Adding school-model rows to the same pair would
confuse partners. Search log only. Note for the District: double-dose algebra is a District scheduling choice with strong
regression-discontinuity evidence on credits and graduation.

**Wording (new Literature row).**
- Codes and indicators: Y1.1 -> S12. Final recommendation: **not-recommended**. Tier: **none for partners; school model,
  not a partner link**.
- Pathway sentence: "High school reading programs that raised test scores were school-run reading courses that replaced
  an elective; no partner-run high school reading model has been tested on a state English test."
- Studies: Somers et al. (2010), ERIC ED511811. Vaughn et al. (2015), Journal of Learning Disabilities 48(5), 546-558.
  Herrera, Truckenmiller & Foorman (2016), ERIC ED568684. Baye, Inns, Lake & Slavin (2019), Reading Research Quarterly
  54(2), 133-166. Boulay et al. (2015), ERIC ED560732.
- Caveats: "The ninth-grade state English gain (0.11 standard deviations) did not last into tenth grade. The reviews found
  no effective program set in a high school, and the qualifying secondary tutoring studies were all in England. See L-154
  for one Boston charter school."

**Wording (L-135 edit).**
- Indicators: S4 -> S4, S11.
- Add to the pathway sentence: "In a North Carolina lottery study, 68 percent of early college students passed the
  Biology end-of-course exam in tenth grade, against 53 percent of other applicants."
- Studies (add): "What Works Clearinghouse review of Edmunds et al., North Carolina early college lottery study (WWC study
  82192)."
- Tier and recommendation unchanged: **none: school model, not a partner link**.

## P-10: Self-control (Y4.2) -> later report-card grades

**Decision: reject (no row, no note).**

**Reason.** The outcome is report-card grades, which are not an indicator. The samples are middle school students
(grade 8, and grades 4 to 9), not high school students. The 2012 paper (KV-037, PARTIAL) also says the opposite of what a
test link would need: IQ predicted changes in test scores better than self-control did. If anything, that argues against
linking self-control to the Keystone tests. The code fit is off too. Self-discipline in these studies fits Y4.3
(goal-setting, organization and self-discipline) better than Y4.2 (emotion regulation).

## P-11: Self-beliefs (Y1.12) -> high school tests, extending L-91

**Decision: reject for now (no change).**

**Reason.** The proposal sets its own condition, and the condition is not met. The checker confirmed the 0.08 path after
prior achievement (KV-036, PARTIAL). It could not confirm the age range or whether the outcomes were tests or grades. A
research-associated extension to S10 and S12 needs high school samples with high school test outcomes. L-91 stays at
S5 to S8. Logged as an open question: check the age moderators in Valentine et al. 2004 and Wu et al. 2021, both already
on L-91, before any extension.

## Not taken forward (agree)

Becoming a Man grades (KV-028): agree. The new-site replication (L-16) found no significant effect, and grades are not an
indicator. Sponsor-a-Scholar (KV-029): agree. It is unreachable, and the checker found the year listed as 1999, not 1998.

---

## What I would tell Severin

1. **The one solid finding is math tutoring.** Daily small-group math tutoring built into the ninth-grade school day
   already counts toward Keystone Algebra I. A large randomized trial and a New York Algebra I exam result now back it.
   Students offered tutoring gained about a fifth of a standard deviation on state math exams, and 8 more students in 100
   passed New York's Algebra I exam. The online-only version has less proof and worked less well for boys and for
   students who started far behind.
2. **Reading and Biology have no partner program with proof.** Every high school reading program that raised state
   English scores was a school-run reading class that took the place of an elective, and the gain faded the next year.
   For Biology, the only result is early college high schools, which are schools, not partner programs. The map should
   show these as honest gaps rather than stretch a weak link.
3. **Attendance probably matters a little for high school tests, but one study is not enough to count it.** Missing
   classes lowered high school math and English scores slightly in one California district. We record it as a "not yet"
   link until a second study confirms it.
4. **College-preparation programs should not claim Keystone gains.** The national trial of the largest federal program
   found no change in grades and only slightly more math credits. Their evidence belongs to graduation and college going,
   not to these tests.
5. **Several results were left out because they do not reach a District indicator.** These include gains on college
   entrance exams, Advanced Placement exams, course grades and course-taking: parent mailings about why math matters,
   test-preparation courses, a growth mindset lesson and self-control. Grades and courses are steps on the way, not
   SPOTlight measures. Adding them would clutter the map without telling anyone what to do.
6. **One thing the District itself can act on:** giving struggling ninth graders a double period of algebra had strong
   long-term effects in Chicago. That is a school scheduling decision, not a partner program, so it sits outside the
   partner map.
