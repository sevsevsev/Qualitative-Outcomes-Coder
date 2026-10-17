# Y1 category B (Y1.9–Y1.12): research findings from "mindsets"

Researcher: mindsets · 2026-10-16 · Scope: Y1.9 Academic Engagement Behaviors, Y1.10 Academic
Perseverance, Y1.11 Learning Strategies & Study Skills, Y1.12 Academic Mindsets & Self-Efficacy.
All four cite Farrington et al. (2012) (`farrington-2012`, tier C, all links `direct`).
Everything here is a lead for independent verification. Excerpts are what I saw through WebFetch
(the fetch tool paraphrases around its quotes, so a verifier should re-pull each excerpt). I read
the design-set gold only, never the held-out gold file.

## Q1. Anchor check: is Farrington (2012) still current, authoritative and correctly attributed?

**Finding 1.1: Not superseded, revised or moved. The 2015 UChicago framework broadens it but does not replace it at the component level.**
- Evidence: the report is still listed on the Consortium site
  (https://consortium.uchicago.edu/publications/teaching-adolescents-become-learners-role-noncognitive-factors-shaping-school),
  and the ERIC full text still resolves (https://files.eric.ed.gov/fulltext/ED542543.pdf).
- Nagaoka et al. (2015), *Foundations for Young Adult Success*
  (https://wallacefoundation.org/sites/default/files/2023-09/Foundations-for-Young-Adult-Success.pdf),
  is a developmental framework covering "ages 3 to 22". Its components are "self-regulation,
  knowledge and skills, mindsets, and values", and it cites Farrington (2012) only in a footnote,
  as "Building off of previous frameworks and literature reviews" (p. 11, n. 10). It does not
  name academic behaviors, academic perseverance, learning strategies or Farrington's four
  academic mindsets. It mentions only "mindsets such as self-efficacy" (p. 22). It therefore cannot
  anchor Y1.9–Y1.12 component by component. (It already anchors Y5, which is the right place for
  it.)
- The Consortium itself kept the 2012 model in later work. Farrington, Porter & Klugman, *Do
  Classroom Environments Matter for Noncognitive Factors?*
  (https://consortium.uchicago.edu/sites/default/files/2019-10/Do%20Classroom%20Environments%20Matter-Oct2019-Consortium.pdf),
  says "we created a hypothesized model of how these noncognitive factors interact to produce
  academic performance", built on the 2012 review. Year and publisher were not legible in my
  fetch; the URL path suggests October 2019.
- Confidence: high. The 2012 and 2015 documents were both fetched, and the absence of the four
  components from Nagaoka was checked directly.
- Smallest change: **keep** Farrington as the category-B anchor.

**Finding 1.2: The publisher name in the registry's `cite_as` is wrong (S1.4).**
- Evidence: the ERIC title page prints "University of Chicago Consortium on Chicago School
  Research", dated "JUNE 2012". The registry `cite_as` says "UChicago Consortium on Chicago School
  Research", and the `publisher` field gives the current name ("...Consortium on School
  Research") with no rename note. The registry already notes the missing subtitle ("A Critical
  Literature Review"); `cite_as` now includes it.
- Confidence: high, from the title page.
- Smallest change: **fix citation**. Change `cite_as` to the name printed at publication, and add
  a note that the organization is now the UChicago Consortium on School Research (claim
  y1-mindsets-05).

**Finding 1.3: The growth-mindset replication debate does not undermine the construct as a coding category.**
- Evidence: Yeager et al. (2019), *Nature* 573:364–369, found that a brief intervention "improved
  grades among lower-achieving students", but only "when peer norms aligned with the messages of
  the intervention" (https://www.hks.harvard.edu/publications/national-experiment-reveals-where-growth-mindset-improves-achievement).
  Two meta-analyses in *Psychological Bulletin* 149(3–4), 2023, disagree on how large the
  effects are:
  - doi:10.1037/bul0000352 (Macnamara & Burgoyne, per search listing): "apparent effects of growth
    mindset interventions on academic achievement are likely attributable to inadequate study
    design" (https://ifp.nyu.edu/?p=1678671).
  - doi:10.1037/bul0000368 (Burnette et al., per search listing): "targeted subsamples and high
    fidelity for academic achievement yielded, d = 0.14" (https://ifp.nyu.edu/?p=1678668).
  - Macnamara & Burgoyne's reply states: "Apparent benefits of growth mindset interventions on
    academic achievement may be due to inadequate study designs"
    (https://hhs.purdue.edu/skill-learning-and-performance-lab/wp-content/uploads/sites/43/2024/08/2023-90931-004.pdf).
- Why it does not matter here: the codebook classifies what programs say they aim for. It does not
  certify that interventions work, so effect sizes do not decide whether "growth mindset" is a
  real outcome construct. Farrington (2012) already cautioned that "there is little evidence that
  working directly on changing students' grit or perseverance would be an effective lever" (pp.
  6–7).
- Confidence: medium. Author names for the two meta-analyses came from search-result titles; the
  pages I fetched showed only the DOIs.
- Smallest change: **keep**. An explorer or dashboard note could say that these codes record
  intended outcomes and are not evidence of effect. No citation is needed.

## Q2. Component fit

**Finding 2.1: Y1.9 is a direct fit, with one undocumented split: attendance.**
- Farrington's Academic Behaviors include "regularly attending class" (registry excerpt, p. 8).
  Y1.9 excludes school attendance and routes it to Y1.13 (Attendance Works).
- Both codes are in Y1, so this is a split within the domain, not a cross-domain move. But it does
  cut one of Farrington's components and is not documented anywhere.
- Confidence: high.
- Smallest change: **keep**, and add one sentence to the Y1.9 basis note: "Farrington's
  attendance element is coded at Y1.13 for measurement reasons." No FD entry is needed if the
  owner treats a split within the domain as fidelity. If not, it falls under Observability.

**Finding 2.2: Y1.10's young-children clause departs from the source and has no FD entry.**
- Evidence: Farrington's scope is "students in the middle grades, in high school, and in the
  transition to college" (p. 6). The definition is "a student's tendency to complete school
  assignments ... despite distractions, obstacles, or level of challenge" (p. 9, registry).
- Y1.10's definition adds "task persistence in young children", and its example (S220, "persistence
  and curiosity when working on puzzles and new tasks") is not schoolwork at all. The 2026-09-27
  verifier already flagged this ("goes beyond it").
- The code is still marked `fidelity: framework`, but this is a population widening plus a
  construct widening (from school assignments to any task). That is not allowed under "framework"
  fidelity (S1.6).
- Possible cross-age sources:
  - Nagaoka (2015) is not one. Its early-childhood task is "Self-regulation; interpersonal
    (social-emotional) knowledge and skills" (p. 6), and it does not discuss persistence.
  - The SRI/U.S. ED Office of Educational Technology brief *Promoting Grit, Tenacity, and
    Perseverance* covers preschool through "effortful control" (https://www.sri.com/wp-content/uploads/2021/12/promoting-grit-tenacity-and-perseverance-critical-factors-success-21st-century.pdf).
    But its attribution is tangled: the cover says SRI International 2018, it was originally an
    OET draft from 2013, and ED co-funded it. S1.4 would need care, and it frames young children's
    persistence as self-regulation, not academic perseverance. I do **not** propose it as a
    citation.
  - Head Start ELOF is ruled out by the brief.
- Confidence: high that there is a deviation; medium on the remedy.
- Smallest change: set Y1.10 to `fidelity: adapted` and open an FD entry under **sector widening**
  ("a framework written for one population applied to all youth-serving programs"). Also reword
  the definition to "learning tasks, including young children's persistence on learning
  activities", so the construct stays about learning. Puzzle and new-task persistence with no
  learning frame belongs with Y4.3 general persistence. Re-check S220 under that rule. It is
  adjudicated, so only Severin can decide; flag it, do not change it.

**Finding 2.3: Y1.11 is a direct fit, and Farrington explicitly includes metacognition and self-regulated learning.**
- Evidence: Learning Strategies "may also include goal-setting and time management". Figure 2.5
  lists "Metacognitive Strategies" and "Self-Regulated Learning" (pp. 10–11).
- Confidence: high.
- Smallest change: **keep**. Finding 3.2 suggests an optional second anchor.

**Finding 2.4: Y1.12 fits three of Farrington's four mindsets. The fourth, value, lives in Y2.4, with no cross-reference.**
- Evidence: the four mindsets are "I belong in this academic community", "My ability and
  competence grow with my effort", "I can succeed at this" and "This work has value for me" (pp.
  10–11). Farrington describes value as subject matter that "is interesting and holds value",
  including attainment, intrinsic and utility value (p. 10).
- Y1.12's definition covers efficacy, belonging and growth mindset only. Value of schoolwork is
  coded at Y2.4 (Relevance & Utility Value), which cites Wigfield & Eccles (2000) and Hulleman et
  al. (2010). Interest is coded at Y2.2/Y2.3.
- This is a defensible placement: Y2 is the engagement domain, and value is a motivational belief.
  But neither Y1.12 nor Y2.4 points to the other. Y2.4 also does not cite Farrington, even though
  Farrington is the Y1 anchor for that very mindset.
- Confidence: high.
- Smallest change:
  - **Fix citation.** Add Farrington (2012) "This work has value for me" to Y2.4 as a second
    source (claim y1-mindsets-01).
  - Add "Y2.4 seeing schoolwork as valuable or relevant" to Y1.12's useInstead line. That is a
    PATCH, and it states the cross-domain placement as S1.6/S4 require.

## Q3. Better grounding (tier A–B, cross-sector)

**Finding 3.1: No tier A–B framework covers category B as a whole. Farrington stays the best fit.**
- CASEL 2020 (already verified for Y4/Y5) names "Experiencing self-efficacy", "Having a growth
  mindset", "Exhibiting self-discipline and self-motivation" and "Using planning and organizational
  skills". All of these are domain-general, not academic. That is why the codebook already sends
  the general versions to Y5.4 and Y4.3. Re-anchoring Y1.9–Y1.12 on CASEL would erase the
  academic-versus-general tie-breaker (CF-005), which gold supports: S034, S072 and S202 are
  Y1.12; S243 is Y5.4.
- NAEP considered core "Grit" and "Desire for Learning" modules (Bertling, 2014, draft white paper
  to NAGB:
  https://www.nagb.gov/content/dam/nagb/en/documents/what-we-do/quarterly-board-meeting-materials/2014-8/tab12-plans-for-naep-contextual-modules.pdf).
  But that is a draft proposal, and the adopted NAEP Contextual Information Framework I fetched
  names neither construct. Not usable.
- Confidence: medium. I did not search every federal or state SEL standard set.
- Smallest change: **keep**.

**Finding 3.2: Two optional supplements for Y1.11.**
- Conley (2007), *Redefining College Readiness* (EPIC), already in the registry as verified for
  Y7.2 (https://files.eric.ed.gov/fulltext/ED539251.pdf). Its Academic Behaviors dimension says:
  "Self-monitoring is a form of metacognition, the ability to think about how one is thinking."
  It also says: "Typical study-skill behaviors include time management, preparing for and taking
  examinations". It covers named study techniques more literally than Farrington. It is tier C,
  the same tier as Farrington (claim y1-mindsets-02).
- IES Practice Guide, Pashler et al. (2007), NCER 2007-2004
  (https://ies.ed.gov/ncee/wwc/Docs/PracticeGuide/20072004.pdf). This is tier A and covers grades
  3–12.
  - Recommendation 5: "Use quizzing to promote learning."
  - Recommendation 6: "Help students allocate study time efficiently." It includes "Assist
    students in identifying what material they know well, and what needs further study", which is
    metacognitive monitoring.
  - It is written as teacher practice, so the fit to a student outcome is partial. It supports
    Y1.11's "self-quizzing, metacognition" (claim y1-mindsets-03).
- Confidence: medium. The sources are solid; whether a supplement adds value is a judgment call.
- Smallest change: optional **add citation**. It does not change the anchor.

**Finding 3.3: A tier-A source for academic growth mindset (Y1.12).**
- IES Practice Guide, Halpern et al. (2007), *Encouraging Girls in Math and Science*, NCER
  2007-2003 (https://ies.ed.gov/ncee/wwc/Docs/PracticeGuide/20072003.pdf).
  - Recommendation 1: "Teach students that academic abilities are expandable and improvable."
  - Text: "Math and science abilities—like all abilities—can be improved through consistent effort
    and learning."
- It covers elementary through high school and is written to address girls in math and science,
  but the recommendation's wording is general. It is a partial fit, and it is the only federal
  source I found that names academic (not general) growth beliefs (claim y1-mindsets-04).
- Confidence: medium.
- Smallest change: optional **add citation**, as a partial fit.

## Q4. Taxonomy

**Finding 4.1: Routing Farrington's Social Skills to Y4 is defensible.**
- Evidence: Farrington defines social skills as "such interpersonal qualities as cooperation,
  assertion, responsibility, and empathy" and says "Perhaps social skills have a weak direct
  relationship with course grades" (p. 11). Every quality on that list is a CASEL 2020 component
  already verified direct for Y4.4, Y4.7 and Y4.8.
- The Consortium's own 2019 follow-up also leaves social skills out and models four of the five
  categories.
- So Y4 (CASEL-anchored, cross-age) is a closer and more general home, and no academic-specific
  social-skills outcome is lost.
- Confidence: high.
- Smallest change: **keep**. Add one sentence to the research-basis entry ("Farrington's fifth
  category, Social Skills, is coded in Y4 under CASEL") so the split is visible. No new code and no
  FD entry: no Y1 code claims the component.

**Finding 4.2: Y1.12 bundles constructs the field separates. Keep the bundle, but tighten academic belonging.**
- Self-efficacy, implicit theories (growth mindset), belonging and task value are separate
  literatures. Even the Consortium measured them separately ("Belonging, Performance Avoidance,
  and Motivation"; Farrington, Porter & Klugman).
- But Farrington's own component is "Academic Mindsets", one category with four beliefs. A
  merged code that names the parts matches the anchor (S1.6 merged components is not even
  needed).
- Splitting is not justified. Design gold has 4 Y1.12 rows (S034, S072 growth; S202, S216
  efficacy) and none for academic belonging. Each split costs enum budget (S2.3), and S2.2 favors
  the smallest change.
- The real risk is belonging. Y3.1 Belonging & Mattering already covers "Feeling accepted, valued,
  included and safe in the program, school or a community". So "students will feel they belong at
  school" has two plausible homes, and no tie-breaker separates them. The Consortium paper
  separates classroom belonging (a target-class mindset) from "school belonging" (a school-wide
  control variable), which supports a line between them.
- Confidence: medium. The belonging overlap is reasoned from the code text; no gold row has
  tested it.
- Smallest change: **narrow the definition** of Y1.12 to "belonging as a learner in a class,
  subject or academic program". Add "Y3.1 belonging at school or in the program in general" to the
  exclude and useInstead lines. Note Y5.3 ("a math person") as the identity neighbor. Add a
  synthetic test row before any CP.

**Finding 4.3: Nothing well established is missing.**
- Academic delay of gratification and self-regulation sit inside Farrington's perseverance.
  Help-seeking is Y4.9. Value is Y2.4.
- Confidence: medium.
- Smallest change: none.

## Q5. Observability

**Finding 5.1: All four codes are expressible in outcome statements, and design gold shows each one.**
- Y1.9 behaviors (S042, S111, S235) and Y1.11 techniques (S221) are concrete and highly observable.
- Y1.10 is observable when tied to schoolwork ("not giving up on assignments"). It gets confused
  with Y4.2 when frustration is the stated mechanism (S179 → Y4.2), and the existing exclude
  handles that.
- Y1.12 statements reliably carry a "believe/confident" verb plus an academic object (S034, S072,
  S202, S216). That makes the academic-versus-general line (Y1.12 vs Y5.4) observable, which S243
  confirms.
- Within Y1.12, statements can name growth mindset versus efficacy separately, but coders gain
  nothing from separating them under one Farrington component.
- Belonging and value are the parts a coder cannot place without a rule (findings 2.4, 4.2).
- Confidence: medium. The gold base is small (about 10 rows across the four codes).
- Smallest change: the useInstead/exclude PATCHes above. No new codes.

## Summary of suggested changes (all small)

| Code | Change | Type |
|---|---|---|
| Y1.9–12 | Fix Farrington `cite_as` publisher name; add rename note | fix citation |
| Y1.9 | Basis note: attendance element coded at Y1.13 | note |
| Y1.10 | `fidelity: adapted` + FD (sector widening); keep the young-children clause tied to learning tasks | FD + narrow |
| Y1.11 | Optional: add Conley (2007) Academic Behaviors; IES Pashler (2007) Recs 5–6 (partial) | add citation |
| Y1.12 | Exclude general school belonging → Y3.1; useInstead → Y2.4 value; optional IES Halpern (2007) Rec 1 (partial) | narrow + citation |
| Y2.4 | Add Farrington (2012) "This work has value for me" | add citation |
| Research basis | Note Social Skills → Y4 (CASEL) | note |
