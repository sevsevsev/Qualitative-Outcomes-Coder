# Y1 taxonomy review: findings (researcher "taxonomy", 2026-10-16)

Scope: Y1 as a whole domain (structure, missing or merged constructs, real use), not
code-by-code citation checks. Everything here is a lead for independent verification.
Excerpts are what WebFetch returned on 2026-10-16. Where I could not fetch a source, I say so.

Data: LM = `real-run-review/coded_outcomes_3.1.2_2026-10-02_claude-recommended.csv`
(2,441 rows; 437 primary Y1, 377 unique texts, 122 programs). NLM =
`no-logic-model/full-run/full_run_export_2026-10-04.csv` (1,859 rows; 348 primary Y1,
264 unique texts, 197 programs). Codebook 3.1.2. Y1 is the largest primary domain in both files.

---

## Q1. Is the A / B / C structure defensible?

### F1.1 The three-way split matches the strongest cross-sector indicator system. Keep it.
**Finding.** The National Academies' equity indicator system groups student outcomes in a
way that maps almost one-to-one onto Y1. Kindergarten readiness maps to Y1.8. K-12 learning
and engagement covers tests (category A), coursework and engagement (B and C). Educational
attainment covers graduation and postsecondary (C). The federal 21st CCLC GPRA measures for
afterschool programs cover all three categories: state-assessment growth in reading and math
(A), teacher-reported engagement in learning (B), and GPA, school-day attendance and
in-school suspension (C). ESSA's accountability indicators also span A and C, and the
"school quality or student success" indicator lists student engagement (B).

**Evidence.**
- NASEM (2019), *Monitoring Educational Equity*, ch. 2 summary,
  https://www.nationalacademies.org/read/25389/chapter/2. The indicators are listed under
  "Domain A: Kindergarten Readiness", "Domain B: K–12 Learning and Engagement" (Indicator 3
  "Disparities in Engagement in Schooling", 4 "...Performance in Coursework", 5
  "...Performance on Tests") and "Domain C: Educational Attainment" (6 "On-Time Graduation",
  7 "Postsecondary Readiness").
- U.S. ED, 21st CCLC program page, GPRA Measure Indicators,
  https://www.ed.gov/grants-and-programs/formula-grants/school-improvement-grants/nita-m-lowey-21st-century-community-learning-centers-title-iv-part-b:
  "demonstrated an improvement in teacher-reported engagement in learning"; "demonstrated an
  improved GPA"; "demonstrated an improved attendance rate in the current school year".
- ESSA 20 U.S.C. 6311(c)(4)(B)(v)(II) (govinfo, USCODE-2023),
  https://www.govinfo.gov/content/pkg/USCODE-2023-title20/html/USCODE-2023-title20-chap70-subchapI-partA-subpart1-sec6311.htm:
  "(III) student engagement; ... (V) student access to and completion of advanced coursework;
  (VI) postsecondary readiness".
- NCES *Condition of Education*, https://nces.ed.gov/programs/coe/preprimary-elementary-and-secondary.
  The "Student Learning" group (Assessments: "Reading Performance", "Mathematics Performance",
  "Science Performance"; Courses: "High School Mathematics and Science Course Completion") is
  separate from "High School Persistence and Completion" ("Status Dropout Rates", "High School
  Graduation Rates"). NCES confirms the A vs C split. It has no learning-behaviors group, so it
  gives no support for B.

**Confidence.** High. Three tier A-B systems were fetched, and they agree on the split.

**Smallest change.** Keep the structure. You could add NASEM 2019 to the Y1 `frameworkBasis`
as the domain-level structural anchor, since today no source justifies the three categories
as a set (claims 01-04).

### F1.2 Two placements differ from NASEM, and both are defensible
**Finding.**
- (a) NASEM files **attendance** under *engagement in schooling* (B-like). Y1 puts it under
  C, as a status. Y1's choice matches 21st CCLC GPRA and Attendance Works, which treat
  attendance as an administrative record.
- (b) NASEM treats **discipline** as an opportunity/context indicator (Domain G,
  "Nonexclusionary Discipline Practices"). GPRA treats in-school suspension as a student
  outcome. Y1.14 follows GPRA.

**Evidence.** NASEM ch. 2 lists Indicator 3's constructs as "attendance/absenteeism and
academic engagement". The GPRA measure 4 wording is quoted above.

**Confidence.** Medium. These are judgment calls. **Change:** none. Record the divergence in
research-basis.md so a reviewer doesn't reopen it.

### F1.3 Category B is well anchored, but "engagement" is split across Y1, Y2 and Y3 with no tie-breaker
**Finding.** Farrington et al. (2012) supports B, and Nagaoka et al. (2015) gives the same
cut one level up: mindsets and self-regulation are "foundational components" distinct from
knowledge and skills. The field's standard construct of *school engagement* has three
dimensions. In the codebook, behavioral engagement maps to Y1.9, emotional engagement or
connectedness to Y3.1 (and Y2 interest), and cognitive engagement to Y1.11. The real-run
data shows this split happening with no CF entry:
- "Increased school engagement", "stronger school engagement" and "Positive Engagement in
  School" were coded Y1.9.
- "Improved connectedness to school" and "Improved school connectedness" were coded Y3.1.
- "Improved school attendance rates through increased 'school connectedness.'" was coded
  Y1.13.

CONFUSIONS.md has no Y1.9 vs Y3.1 entry.

**Evidence.**
- Fredricks, Blumenfeld & Paris (2004), *Review of Educational Research* 74(1), 59-109,
  https://journals.sagepub.com/doi/10.3102/00346543074001059 (abstract only; full text
  paywalled): "Researchers describe behavioral, emotional, and cognitive engagement".
- NASEM 2019 ch. 4, https://www.nationalacademies.org/read/25389/chapter/6: engagement is
  "a multidimensional construct" "reflecting behavioral, emotional, and cognitive components".
- Nagaoka et al. (2015), UChicago Consortium,
  https://wallacefoundation.org/report/developmental-framework-young-adult-success:
  Mindsets are "beliefs and attitudes about oneself, the world, and the interaction between
  the two". Self-regulation is "the awareness of oneself and one's surroundings".

**Confidence.** High that the split exists in the data (about 15 statements across both
files). Medium on the rule to use.

**Smallest change.** A CF entry plus a hint, with no new code. "Engagement in school or
learning" with behavioral or unspecified wording goes to Y1.9. "Connectedness, belonging or
feeling part of school" goes to Y3.1. Where connectedness is named only as the means to an
attendance or graduation result, code the result. Add the GPRA "teacher-reported engagement
in learning" measure and ESSA SQSS "student engagement" to Y1.9 as tier A support for the
bare word "engagement" (claims 05, 06, 09).

### F1.4 The name of category A is slightly off
**Finding.** "Subject learning" holds two codes that are not subjects. Y1.7 (critical
thinking or inquiry, cross-subject) is one. Y1.8 is defined by age band. NASEM gives
kindergarten readiness its own domain, which supports treating Y1.8 as distinct. Renaming the
category is cosmetic. I am not proposing a renumber. **Confidence:** medium. **Change:** keep
for now. If the category description is touched, call it "demonstrated learning and skills".

---

## Q2. What is missing or merged?

| Construct | Real-use evidence (LM / NLM) | Verdict |
|---|---|---|
| General "academic achievement / performance" | About 49 of 84 unique Y1.15 texts (24 LM, 25 NLM) are generic, not grades or credits | **Merged.** See F2.1 |
| Kindergarten readiness | 1 true pre-K row (LM). NLM Y1.8 = 35 rows of one K-5 template, plus 1 | Y1.8 is misused. Re-anchor. See F2.2 |
| School engagement / connectedness | about 15 statements split Y1.9 / Y3.1 / Y1.13 | CF entry (F1.3) |
| Executive function / focus | about 10, split across Y1.9, Y4.2 and Y4.3 | Hint. See F2.3 |
| MS→HS transition | about 6, split across Y1.15, Y7.2 and A2.2 | Hint in Y1.15 (F2.4) |
| College-readiness benchmarks (SAT/ACT) | 1 ("ACT scores Composite", Y1.15) | Hint only (F2.4) |
| Readiness for advanced coursework | 2 NLM rows in Y1.16 ("Demonstrated readiness for high-level university coursework") | Hint: readiness is not enrollment |
| Summer learning loss | 0 statements. "Summer melt" appears 2x and goes to Y1.18 correctly | Nothing to add |
| Homework | 8, all Y1.9 | Fits |
| Tutoring | Nearly all are services (A2.5) or tutor outcomes. One goes to Y1.15 ("individualized tutoring milestones") | Nothing to add |
| Credit recovery | 0 true cases. The "credit" hits are dual credit (Y1.16, fine) or PA Act 158 pathways (Y1.15/Y1.17 split) | Local hint for Act 158 → Y1.17 |

### F2.1 Y1.15 has become the general-achievement code, which its anchor does not cover
**Finding.** By definition, Y1.15 takes "'academic performance' or test scores with no
subject named". In practice that clause is half the code. Examples include "Increase academic
achievement", "Improved academic skills", "academic success", "Accelerate Student Learning",
"Students are proficient on standardized tests." and "ACT scores Composite".

Allensworth & Easton (on-track, grades) do not cover generic achievement or test
proficiency. That is an S1.6 fidelity gap. NASEM separates Indicator 4 (coursework: "success
in classes, accumulating credits, and grades/GPA") from Indicator 5 (tests: "achievement and
learning growth in reading, math, and science").

The boundary with domain-only coding is also inconsistent. "Youth will build foundational
academic skills" became Y1/none, but "Improved academic skills" became Y1.15.

**Evidence.** NASEM ch. 2 (URL above). The data counts above come from my pandas summary.

**Confidence.** High on the observation. Medium on the remedy.

**Smallest change.** (i) Add NASEM Indicators 4 and 5 as Y1.15 support (claims 02, 03), and
log an FD merged-components entry naming "coursework performance + unspecified achievement".
(ii) Write a CF line separating Y1.15 from Y1/none: a stated gain in achievement, performance
or proficiency goes to Y1.15, and "academic enrichment" or "skills" with no result goes to
domain-only. (iii) If the owner wants dashboards to separate *grades/credits* (a school
record) from *"achievement" claims*, a new code "General academic achievement" (enum +1)
would do it. That revives the 1.2.0 "11.8" idea and is an owner decision, not a research
finding.

### F2.2 Y1.8: the "only Head Start fits" argument does not hold, and the code is misused
**Finding.** A cross-sector, non-early-childhood-program anchor exists: NASEM Domain A,
Indicator 1 "Disparities in Academic Readiness" at kindergarten entry, which covers reading-
and math-related skills. It also has Indicator 2, self-regulation and attention. This is a
tier B-C consensus framework for the whole K-12 system, so the brief's rule against
early-childhood-specific sources can be met.

Separately, the coder sends **elementary** "early-literacy" statements to Y1.8: "build
early-literacy skills" (35 rows, one OCF OST template whose source text says "Elementary
participants build early-literacy skills"). Y1.8's definition says "below kindergarten age",
so these belong in Y1.1. Because the template repeats across 35 programs, this one miscode
moves program-level counts a lot.

**Evidence.** NASEM ch. 4,
https://www.nationalacademies.org/read/25389/chapter/6: "Achievement in the preschool and
early-childhood years refers mainly to a set of reading- and math-related skills." The
indicator names come from ch. 2.

**Confidence.** High that the anchor exists and on the misuse. Medium that NASEM should
*replace* rather than sit beside ELOF. ELOF is component-level, and NASEM is indicator-level.

**Smallest change.** Re-anchor Y1.8 to NASEM Indicator 1, keeping ELOF as a located
secondary or dropping it (claim 01). Add to Y1.8 useInstead: "early literacy in K-3
(including grade-3 reading) → Y1.1". Add a CF example from the OCF template.

### F2.3 Executive function and "focus" have no stated home
**Finding.** Statements like "executive functioning" (Y4.3), "Increased mental focus and
self-discipline in the school setting." (Y4.3), "Increased classroom focus through the regular
use of 'Brain Break' mindfulness activities." (Y1.9) and "Improved Focus" (Y1.9) are split.
Y4.3's definition says "outside schoolwork", yet it receives school-setting focus. NASEM
Indicator 2 and Nagaoka's "self-regulation" both treat attention and self-regulation as a
construct distinct from academic behaviors.

**Evidence.** NASEM ch. 4: "Assessments may indicate the extent to which children are able to
sit still, concentrate on tasks". Harvard Center on the Developing Child,
https://developingchild.harvard.edu/science/key-concepts/executive-function/: "Executive
function skills help us plan, focus attention, switch gears, and juggle tasks." (Tier D.
Lead only. Not proposed as a citation.)

**Confidence.** Medium. The data is small, about 10 statements.

**Smallest change.** A hint, not a code. Executive function, attention or focus as a
capacity goes to Y4 (self-management). Use Y1.9 only when the statement names a schoolwork
behavior (completing work, participating). Fix Y4.3's "outside schoolwork" wording, or the
hint will contradict it. That edit is out of Y1 scope, so flag it to the Y4 owner.

### F2.4 Transitions and readiness wording: hints only
- MS→HS: "Strong foundations for high school transition process" (Y1.15),
  "preparing them to be high school students" (Y1.15, low), "Increased middle school
  readiness for high school transition through college visits." (Y7.2), "Increase in
  students who state that Heights has helped them transition to HS" (A2.2). The On-Track
  Indicator (already cited) covers the measurable version. **Hint:** "transition to high
  school" framed as on-track, promotion or grade-level progress goes to Y1.15. Process
  supports (visits, planning) go to Y7.2.
- College-readiness benchmarks: ACT defines its benchmarks as scores giving "a 50% chance of
  obtaining a B or higher" in first-year credit-bearing courses
  (https://www.act.org/content/act/en/college-and-career-readiness/benchmarks.html). ACT is
  a test vendor, so it is not proposed as a citation under S1.2. **Hint:** "SAT/ACT score or
  benchmark" goes to Y1.15 under its no-subject clause, or to the subject code when the
  section is named.
- "Readiness for higher-level coursework" goes to Y1.15, or to the subject code. It should not
  go to Y1.16, which is enrollment or completion.
- ESSA SQSS "(V) student access to and completion of advanced coursework" is a tier A anchor
  for Y1.16. Today Y1.16's only source (CRDC 2020-21) is a **partial** fit: its PDF returned
  403 at verification. Claim 07.

**Confidence.** Medium. **Change:** hints and one added citation.

Not fetched or not used: Forum for Youth Investment Ready by 21 and Weikart readiness
frameworks. My search found only annual reports and secondary pages, not a citable outcomes
framework. They are tier D at best and cross-domain. Summer learning loss: there is no real
use, so I did not research it.

---

## Q3. Observability and real use

Counts are primary codes. "Uniq" is unique texts. "Prog" is programs. "Med/low" is the count
of medium- and low-confidence rows.

| Code | LM rows | LM uniq | LM prog | LM med/low | NLM rows | NLM uniq | NLM prog | NLM med/low |
|---|---|---|---|---|---|---|---|---|
| Y1.1 Literacy | 48 | 40 | 28 | 2/0 | 28 | 28 | 18 | 0/0 |
| Y1.2 ELD | 1 | 1 | 1 | 1/0 | 1 | 1 | 1 | 1/0 |
| Y1.3 Math | 13 | 9 | 10 | 0/0 | 5 | 5 | 3 | 0/0 |
| Y1.4 Sci/Tech/Eng | 25 | 23 | 20 | 2/1 | 26 | 26 | 14 | 6/1 |
| Y1.5 Other subjects | 14 | 12 | 8 | 5/0 | 8 | 8 | 4 | 0/0 |
| Y1.6 Arts | 62 | 55 | 38 | 5/0 | 22 | 22 | 16 | 3/0 |
| Y1.7 Critical thinking | 36 | 30 | 23 | 7/0 | 24 | 21 | 18 | 5/0 |
| Y1.8 Early learning | 1 | 1 | 1 | 1/0 | 36 | 2 | 36 | 35/1 |
| Y1.9 Engagement behav. | 40 | 36 | 35 | 13/0 | 23 | 22 | 20 | 14/0 |
| Y1.10 Perseverance | 4 | 4 | 4 | 4/0 | 19 | 3 | 19 | 4/0 |
| Y1.11 Strategies | 6 | 6 | 5 | 4/0 | 4 | 4 | 4 | 3/0 |
| Y1.12 Mindsets | 28 | 27 | 24 | 4/0 | 15 | 15 | 13 | 6/0 |
| Y1.13 Attendance | 27 | 21 | 23 | 7/0 | 35 | 17 | 20 | 2/0 |
| Y1.14 Discipline | 12 | 7 | 9 | 3/0 | 6 | 5 | 6 | 3/0 |
| Y1.15 Grades/credits | 55 | 48 | 35 | 13/0 | 40 | 36 | 31 | 12/1 |
| Y1.16 Advanced | 7 | 7 | 6 | 3/0 | 22 | 17 | 13 | 3/0 |
| Y1.17 HS completion | 12 | 12 | 12 | 1/0 | 15 | 13 | 12 | 2/0 |
| Y1.18 Postsecondary | 41 | 35 | 21 | 7/0 | 12 | 12 | 8 | 0/0 |
| Y1 domain-only | 5 | 5 | 5 | 3/0 | 7 | 7 | 7 | 5/1 |

Secondary-code Y1 use is heaviest for Y1.1 in NLM (41), Y1.18 (19 LM / 13 NLM) and Y1.6 (20
LM).

Medium confidence is concentrated in Y1.9 (27 of 63 rows), Y1.15 (25 of 95), Y1.8, Y1.10 and
Y1.11. Those are the categories where wording is vague or boundaries are shared. Only 6 Y1
rows are low confidence across both files. The 15 `codebook_gap_lead=true` rows in LM are
none of them Y1.

**Observability verdicts.**
- Category A codes are well expressed, except Y1.2 (1+1), Y1.8 (1 true pre-K row) and Y1.3
  (math is rare as a stand-alone; partners mostly say "academic performance").
- In category B, Y1.10 and Y1.11 are thin (4-6 unique texts per file), but they have
  framework fidelity and clean examples. Keep them.
- Category C is the most measurable, and partners attach numbers there ("Maintains 2.5 GPA",
  "-99% of students were promoted").
- Retire nothing. Low counts in a 144-program sample of one district are not evidence that a
  construct is unused elsewhere (S2 coverage).

**Domain-only Y1 rows (all 12).** LM: "Students will gain content specific knowledge specific
to each lesson"; "Students exposed to course enrichment."; "Youth will build foundational
academic skills"; "Change in % prepared in district survey"; "academic knowledge". NLM: "to
provide engaging academic enrichment"; "academic enrichment"; "learn"; "Documented
improvement in academic enrichment"; "prepare students for long-term academic success";
"reinforce learning"; "building academic skills for college and career success". Most are
exposure or activity language, not results. "academic enrichment" (3 NLM) arguably should be
uncoded or A2.

**Low-confidence Y1 rows (all 5).** "Students will be introduced to basic gardening skills"
(Y1.4); "Mastery of basic gardening and seasonal harvesting techniques." (Y1.4); "preparing
them to be high school students" (Y1.15); "ready to succeed in school" (Y1.8); "learn" (Y1
none).

**Statements that sit poorly in current Y1 codes (quoted, with assigned code).**
1. "build early-literacy skills" (Y1.8, 35 programs; elementary, so it should be Y1.1)
2. "ready to succeed in school" (Y1.8, low; age unstated)
3. "Increased school engagement" (Y1.9) vs "Improved school connectedness" (Y3.1)
4. "Improved school attendance rates through increased 'school connectedness.'" (Y1.13)
5. "Increased mental focus and self-discipline in the school setting." (Y4.3, against
   "outside schoolwork")
6. "Increased classroom focus through the regular use of 'Brain Break' mindfulness
   activities." (Y1.9, medium)
7. "Improved academic skills" (Y1.15) vs "Youth will build foundational academic skills"
   (Y1 none)
8. "Accelerate Student Learning" (Y1.15)
9. "Students are proficient on standardized tests." (Y1.15; test score with no subject)
10. "ACT scores Composite" (Y1.15)
11. "Demonstrated readiness for high-level university coursework." (Y1.16, medium;
    readiness, not enrollment)
12. "3. Improved student readiness for long-term mathematics success and higher-level
    coursework." (Y1.16; arguably Y1.3)
13. "Strong foundations for high school transition process" (Y1.15, medium)
14. "Increased middle school readiness for high school transition through college visits."
    (Y7.2)
15. "Successful achievement of individualized tutoring milestones." (Y1.15, medium)
16. "Improved logical thinking" / "gain skills in creative thinking" (Y1.7). Generic thinking
    skills go beyond Y1.7's anchors (NAMLE media literacy; Conley). That is for the Y1.7
    reviewer.
17. "Increased awareness of Bahia's traditions" (Y1.5, medium; cultural knowledge vs
    academic subject vs Y5.2)
18. "Improved classroom behavior" (Y1.9, medium; behavior vs discipline vs Y4)
19. "fulfilling the Act 158 graduation requirements" (Y1.15) vs "fulfill Act 158 graduation
    requirements" (Y1.17)
20. "Motivated to stay in school" (Y1.13, medium; a mindset coded as attendance)

---

## Summary of suggested changes (smallest first)
1. Hints and CF entries: Y1.9 vs Y3.1 engagement/connectedness; Y1.15 vs domain-only; Y1.8
   age line (K-3 literacy goes to Y1.1); executive function and focus go to Y4; readiness for
   advanced coursework is not Y1.16; Act 158 goes to Y1.17; transition to HS goes to Y1.15.
2. Citations: NASEM 2019 as the Y1 structural anchor and as support for Y1.8, Y1.9 and Y1.15;
   21st CCLC GPRA for Y1.9, Y1.13 and Y1.15; ESSA SQSS for Y1.9 and Y1.16; Fredricks 2004 for
   the engagement CF; Nagaoka 2015 for category B.
3. FD merged-components entry for Y1.15, covering coursework plus unspecified achievement.
4. Owner decision (optional, enum +1): split "general academic achievement" out of Y1.15.
