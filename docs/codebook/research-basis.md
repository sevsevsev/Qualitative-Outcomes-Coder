# Research basis for the proposed codebook

Phase 2 of the codebook research-basis review. One section per proposed domain:
the frameworks it rests on, why they fit this app's data, where they don't, and why the
domain is structured the way it is. Code-level detail is in
[`proposed-codebook.md`](proposed-codebook.md); every change against 2.4.0 is in
[`change-log.md`](change-log.md); the current codebook is inventoried in
[`current-inventory.md`](current-inventory.md).

## How to read the citation status

No source here comes from memory alone. Every source is either already in the repo's
verification records or was checked by an independent verifier agent for this review
(appendix A). Status tags:

| Tag | Meaning |
|---|---|
| **verified** | Fetched in a recorded run, with a verbatim excerpt of 40 words or fewer, by an agent other than the proposer (`sources/original.sources.json`, `v2/source-verification-2026-09-24.*`, or appendix A). |
| **located** | Existence, title and publisher confirmed; no supporting excerpt recorded yet. |
| **partial** | Fetched, but only part of the claim is confirmed, or only through a secondary copy. The limit is stated. |
| **[VERIFY]** | Not yet confirmed in a recorded run. Must not enter the codebook until checked. |

Registry ids (for example `casel-2020`) point to `codebook-refinement/sources/original.sources.json`;
v2 ids point to `codebook-refinement/v2/v2-candidate-sources.json`.

## What the codebook is for, and what that asks of a framework

The app codes **outcome statements written by youth-serving programs**: logic models,
grant applications, evaluation plans and reports ("Students will...", "85% of
participants..."). These are claims about intended or observed change, usually one
sentence, written by practitioners, not survey items or interview transcripts. The
codebook's research purpose is to make those statements **comparable across programs
and sectors** (schools, afterschool, mentoring, child welfare, juvenile justice,
workforce, family services), so a funder, district or researcher can see which
outcomes programs pursue and report, and aggregate them.

That purpose sets four tests for a grounding framework:

1. **It names observable constructs** a coder can recognize in one sentence of
   practitioner text. Measurement frameworks (federal indicators, standards) do this
   better than theories.
2. **It crosses sectors.** Severin's scope rule: no code rests on a framework specific
   to one sector, and none on early-childhood-specific sources unless the construct is
   inherently about young children (the MIECHV exception for family health practices).
3. **It separates constructs the field treats as different** (a skill vs a belief vs a
   status), because those are what funders and evaluators report separately.
4. **It is stable and citable** at the component level (STANDARDS S1.3).

### Codebook design sources

| Source | Status | Used for |
|---|---|---|
| Fereday, J., & Muir-Cochrane, E. (2006). Demonstrating rigor using thematic analysis: A hybrid approach of inductive and deductive coding and theme development. *International Journal of Qualitative Methods, 5*(1), 80–92. | verified (appendix A, R02) | The deductive / inductive / hybrid flag on each code. |
| MacQueen, K. M., McLellan, E., Kay, K., & Milstein, B. (1998). Codebook development for team-based qualitative analysis. *Cultural Anthropology Methods, 10*(2), 31–36. | partial (R01: metadata confirmed on SAGE; the entry structure only through a secondary paraphrase) | The entry format: name, short and full definition, inclusion and exclusion criteria, examples. |
| University of Wisconsin–Madison Division of Extension (2020), logic model | verified (v2 `uw-extension-logic-model`) | The outcome-versus-output line (A2.5) and the optional `outcome_type` field. |

## Structural rationale (all domains)

**One axis per level.** The 2.4.0 codebook organizes domains by four axes at once
(inventory §4.1). The proposal uses the axis the v2 draft introduced, and adds the
category level Severin asked for:

| Level | Axis | Example |
|---|---|---|
| Part (Y / F / A) | **Who changes**: young people; families and other adult participants; staff, organizations and systems | Y |
| Domain | **Broad construct / life area** | Y8 Health, Safety & Well-Being |
| Category | **Dimension** of that construct, taken from the domain's anchor framework where it has one | Y8-B Mental health |
| Code | **Observable indicator** | Y8.6 Mental Health Symptoms & Distress |

**Fewer, broader domains than the v2 draft.** The v2 draft's held-out test showed that
adding domains adds boundaries: domain agreement fell from 94.4% (v1.1.1) to 88.9%
(v2) even though fit improved (`v2/STRUCTURE.md` §1). The proposal keeps v2's codes
where the gold supports them but groups them into **13 domains** instead of 18, using
categories for the dimensions v2 made into domains (academic learning, habits and
attainment in one academic domain; physical health, mental health and risk in one
health domain; family partnership inside the family domain).

**Letter prefixes for the new numbers.** Codes become `Y1.1`, `F1.1`, `A1.1`. Old
exports use bare numbers (`1.1`), so an old and a new code can never be mistaken for
each other in a report or a spreadsheet, which is the confusion the 1.2.0 and 2.0.0
renumberings created.

**Kind of change as a field, not a domain.** Where the v2 draft's `outcome_type`
(knowledge, skill, attitude, behavior, status, output; UW Extension logic model,
verified) is adopted, codes no longer need to encode kind of change in their names.
The proposal keeps construct-level codes (Farrington's behaviors and mindsets stay
separate codes because the research separates them) and recommends `outcome_type` as
an optional field in phase 4, gated on a live schema test.

---

## Part Y: Young people

### Y1 Academic Learning & Achievement

**Categories:** A. Subject learning (Y1.1–Y1.8) · B. Learning behaviors & mindsets
(Y1.9–Y1.12) · C. Educational progress & attainment (Y1.13–Y1.18)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| ESSA challenging State academic standards | 20 U.S.C. 6311(b)(1)(C) (reading or language arts, mathematics, science) | verified (`essa-6311-b1c-standards`) | Y1.1, Y1.3, Y1.4 |
| ESSA "well-rounded education" | 20 U.S.C. 7801(52) | verified (`essa-7801-52-well-rounded`) | Y1.5 |
| NAEP authorization, additional subjects | 20 U.S.C. 9622(b)(2)(D) | verified (`naep-9622-b2d`) | Y1.5 |
| National Reading Panel | NICHD (2000), *Report of the National Reading Panel* | located (`national-reading-panel-2000`) | Y1.1 |
| Common Core writing anchors | NGA Center & CCSSO (2010), CCR Anchor Standards for Writing | verified (`ccss-writing-anchors`) | Y1.1 |
| WIDA ELD Standards Framework | WIDA (2020 ed.) | located (`wida-eld`) | Y1.2 |
| NGSS | NGSS Lead States (2013), three dimensions | verified (v2 `ngss-three-dimensions`; registry `ngss-2013` located) | Y1.4 |
| CSTA K–12 CS Standards | CSTA (2017) | verified (`csta-k12-2017`) | Y1.4 |
| National Core Arts Standards | National Core Arts Standards (2014), artistic processes | verified (`national-core-arts-standards`) | Y1.6 |
| NAMLE media literacy definition | NAMLE, Core Principles of Media Literacy Education | verified (v2 `namle-core-principles`) | Y1.7 |
| Conley, Key Cognitive Strategies | Conley, *Four Keys to College and Career Readiness* | located (`conley-four-keys`) | Y1.7 |
| Head Start ELOF | Office of Head Start (2015), Language & Literacy; Cognition | located (`head-start-elof`) | Y1.8 |
| Farrington et al. noncognitive factors | Farrington, C. A., et al. (2012), *Teaching Adolescents to Become Learners*, UChicago Consortium | verified (`farrington-2012`) | Y1.9–Y1.12 |
| Attendance Works | Chronic absence (missing 10% or more of school days) | verified (`attendance-works`) | Y1.13 |
| McKinney-Vento | 42 U.S.C. 11432, school stability | located (`mckinney-vento`) | Y1.13 |
| CRDC discipline elements | U.S. ED OCR, 2021-22 CRDC data elements | verified (v2 `crdc-2021-22-discipline`) | Y1.14 |
| Office discipline referrals | Irvin, L. K., et al. (2004), *Journal of Positive Behavior Interventions* | verified (v2 `irvin-2004-odr`) | Y1.14 |
| On-Track Indicator; grades | Allensworth & Easton (2005); (2007) | located; verified (`allensworth-easton-2005`, `-2007`) | Y1.15 |
| CRDC advanced coursework | U.S. ED OCR (2024), *2020-21 CRDC: Student Access to and Enrollment in Mathematics, Science, and Computer Science Courses and Academic Programs* (AP; dual enrollment) | verified (appendix A, R04) | Y1.16 |
| ESSA graduation rate | 20 U.S.C. 6311(c)(4)(B) | located (`essa-indicators`) | Y1.17 |
| NSC High School Benchmarks | National Student Clearinghouse Research Center | verified (`nsc-hs-benchmarks`) | Y1.18 |
| IDEA Indicator 14, Measure A | IDEA Part B SPP/APR | partial (v2 `idea-indicator-14`: enrollment only) | Y1.18 |

**Why these fit.** Statements about academic outcomes are the ones programs most often
tie to a measure (state tests, grades, credits, attendance, graduation), and the
measures come from statute and federal data collections that every school-connected
program reports against. Subject standards (ESSA, NGSS, CSTA, NCAS, WIDA) give the
subject split Severin chose in 1.2.0 a component-level anchor for each code.
Farrington et al. (2012) is the research base for behaviors and mindsets that shape
school performance, and it was clean in every coding run.

**Where they don't fit.**
- Federal standards describe *what* students should learn, not program-level
  enrichment ("learn about watershed ecology"); the codes treat any demonstrated
  learning as in scope.
- NGSS does not cover computing (CSTA covers it), and NCAS organizes standards by
  process without a definition of "learning" (cycle 04, PARTIAL).
- Head Start ELOF is early-childhood-specific. It stays only on Y1.8, whose construct
  is inherently about young children, which is consistent with Severin's scope rule.
- There is no framework for "other practical skills" (cooking technique, bike
  repair). The v2 draft's residual extension (Y7.10) is dropped: a catch-all code is
  the vaguest kind of code, and only one gold row (S247) needed it.

**Why one academic domain with three categories.** Academic outcomes are Severin's top
priority and school and district users report them together. Keeping learning,
habits and attainment in one domain means domain-level reporting ("what share of
outcomes are academic?") works without adding three domains, and it removes the
Domain 1 vs Domain 5 domain boundary that produced gold disagreements (1.6 vs 5.1,
1.3 vs 4.2.4). The categories keep Farrington's line between beliefs and behaviors
about learning (category B) and demonstrated learning (A) or status (C).

**Divergence from the v2 draft.** v2 has three domains here (Y6 mindsets, Y7 learning,
Y8 attainment) and splits reading from writing. The proposal keeps 1.2.0's approved
literacy code (reading and writing together, CP-04-02), keeps English language
development as its own code (v2 bundled home-language maintenance in, which the
proposal keeps), and folds Y6/Y7/Y8 into categories.

### Y2 Engagement, Interest & Creative Expression

**Categories:** A. Enjoyment & interest (Y2.1–Y2.4) · B. Expression & participation
(Y2.5–Y2.6)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Muhammad, Five Pursuits (Joy) | Muhammad, G., Five Pursuits framework; *Cultivating Genius* (2020), *Unearthing Joy* (2023) | verified (`muhammad-five-pursuits`; the "Hill Model" label is misattributed, CP-01-01) | Y2.1 |
| Four-Phase Model of Interest Development | Hidi, S., & Renninger, K. A. (2006). *Educational Psychologist, 41*(2), 111–127 | verified (`hidi-renninger-2006`) | Y2.2, Y2.3 |
| Expectancy-value theory, utility value | Wigfield, A., & Eccles, J. S. (2000). *Contemporary Educational Psychology, 25*(1), 68–81 | partial (appendix A, R05: component confirmed as "how a task fits into an individual's future plans"; third-party full-text copy) | Y2.4 |
| National Core Arts Standards | National Core Arts Standards (2014), Creating; Performing/Presenting/Producing; Responding; Connecting | verified | Y2.5 |
| Search Institute, Constructive Use of Time | Search Institute, 40 Developmental Assets for Adolescents | located (`search-40-assets`) | Y2.6 |

**Why these fit.** Programs routinely state experiential outcomes ("youth will enjoy",
"will be curious", "will keep coming back"). Hidi & Renninger gives the most
operational account of interest: its phases map directly onto statement verbs
(triggered curiosity vs a lasting passion), and the 2.6 split already improved
fit (CP-01-04). Utility value is the expectancy-value construct practitioners
actually write ("students will explain how algebra relates to careers").

**Where they don't fit.** Joy has no measurement tradition comparable to interest;
Muhammad's framework is a pedagogical model, which is why Y2.1 is scoped to the
experience of the program or learning. General life satisfaction moves to Y8.7
(Keyes). The arts standards are content standards, so they ground skill gains (Y1.6);
Y2.5 uses their processes only as a description of expressive activity.

**Structure.** v2 moved all arts, including expression and performance, into content
learning. The proposal keeps Severin's 1.2.0 decision (CP-04-01) that expression and
performance as an experience are not a skill gain, but merges 2.4 and 2.5: creating
and presenting were never confused with each other in the gold, and one code for
"creative expression" is easier to apply than two. Participation in activities moves
here from Domain 6 because choosing to take part is an engagement outcome, and v2's
per-person vs aggregate rule (Y2.6 vs A2.5) resolves the 11.5 confusion (S003).

### Y3 Belonging & Relationships

**Categories:** A. Connectedness (Y3.1) · B. Close relationships (Y3.2–Y3.4) ·
C. Networks (Y3.5)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| CDC School Connectedness | CDC (2009), *School Connectedness: Strategies for Increasing Protective Factors Among Youth* | verified (`cdc-school-connectedness-2009`) | Y3.1, Y3.2, Y3.3 |
| Developmental Relationships Framework | Search Institute (Express Care; Challenge Growth; Provide Support; Share Power; Expand Possibilities) | verified (`search-developmental-relationships`) | Y3.2, Y3.5 |
| Chafee / NYTD permanent connections | 42 U.S.C. 677; ACF NYTD outcomes survey | verified (`chafee-42usc677`, `acf-nytd`) | Y3.2, Y3.4 |
| Positive Youth Justice, relationships | Butts, Bazemore & Meroe (2010) | partial (covers peers, family and community together) | Y3.4 |
| Education-to-Workforce social capital | Mathematica (2022), Education-to-Workforce Indicator Framework | verified (`e2w-social-capital`) | Y3.5 |

**Why these fit.** Connectedness and supportive relationships are among the most
common stated outcomes of mentoring, afterschool and school-climate programs, and the
CDC and Search Institute frameworks name exactly the constructs statements use
(belonging, a trusted adult, friends, a network).

**Where they don't fit.** CDC connectedness is school-specific; the code widens it to
any program or community (H063 "a new community"). No framework in the records names
family reunification as a youth relationship outcome; Y3.4 relies on the Chafee/NYTD
"positive connections" language and is flagged hybrid.

**Structure.** Cultural identity (3.4) leaves for Y5, where identity constructs sit;
family-program partnership (3.5) leaves for F1, because its subject is the family.
Family relationships gets a youth-side code so a young person's reconnection with
family (S024, S070) no longer lands in housing or in a skill code.

### Y4 Social & Emotional Skills (CASEL)

**Categories:** CASEL's five competencies. A. Self-awareness (Y4.1) ·
B. Self-management (Y4.2–Y4.3) · C. Social awareness (Y4.4–Y4.5) · D. Relationship
skills (Y4.6–Y4.9) · E. Responsible decision-making (Y4.10–Y4.12)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| CASEL SEL Framework | CASEL (2020), *CASEL's SEL Framework: What Are the Core Competence Areas and Where Are They Promoted?* | verified (`casel-2020`) | all Y4 |
| Harvard EASEL Explore SEL | EASEL Lab, domain taxonomy | partial (domain definitions not fetched) | structure (skills vs identity vs values) |

**Why it fits.** CASEL is the most widely adopted SEL framework in U.S. schools and
youth programs, it lists concrete example skills per competency, and it was the
cleanest domain in every run. Its competencies are real dimensions, so they become the
categories without renaming.

**Where it doesn't fit.** CASEL's self-awareness competency includes self-efficacy,
growth mindset and identity. In practitioner statements those are beliefs, not
skills, and they formed the 4.1.4 / 5.4 / 6.4 confusion triangle (CF-004, CF-005). The
proposal moves them to Y5 (as v2 did); EASEL's taxonomy, which treats identity and
values as separate domains from emotional and social skills, supports that, but only
at partial status. The consequence is that category A has one code; this is stated,
not hidden. CASEL also has no example skill for "awareness of supports" (4.3.4, an
extension) or safety decisions (4.5.4): the first merges into help-seeking, the
second is re-anchored on CASEL's "resisting negative social pressure" (CP-01-06
proposes the same routing).

**Structure.** 22 codes become 12 by merging pairs the model and the gold could not
separate reliably (4.2.1/4.2.2, 4.2.3/4.2.4, 4.5.1/4.5.3) or that had almost no gold
rows (4.3.3, 4.3.4, 4.4.5, 4.5.5). The three-level "category header, do not use"
format is retired, so no prompt rule is needed for it.

### Y5 Identity, Confidence & Agency

**Categories:** A. Identity (Y5.1–Y5.3) · B. Self-beliefs (Y5.4) · C. Purpose & agency
(Y5.5–Y5.6)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Search Institute, Positive Identity (self-esteem, sense of purpose, personal power, positive view of personal future) | 40 Developmental Assets | located (`search-40-assets`) | Y5.4, Y5.5, Y5.6 |
| CASEL Self-Awareness (identity, self-efficacy, growth mindset) | CASEL (2020) | verified | Y5.1, Y5.4 |
| Learning for Justice, Identity standards | Social Justice Standards | verified (`learning-for-justice-sjs`) | Y5.2 |
| Muhammad, Pursuit 1 Identity | Five Pursuits | verified | Y5.2 |
| Foundations for Young Adult Success | Nagaoka, J., Farrington, C. A., et al. (2015), UChicago Consortium: agency, integrated identity | partial (agency and identity fit; competencies do not) | domain |
| Five Cs, Confidence | Lerner, R. M., et al. (2005), *Journal of Early Adolescence* | partial (definitions only via a secondary copy) | domain |
| Causal Agency Theory | Shogren, K. A., Wehmeyer, M. L., et al. (2015), *Causal Agency Theory: Reconceptualizing a functional model of self-determination* [VERIFY: journal and pages] | partial (author upload; wording "agentic" vs "causal" unresolved) | Y5.6 |
| Science identity | Carlone, H. B., & Johnson, A. (2007). *Journal of Research in Science Teaching, 44*(8), 1187–1218 | partial (three dimensions confirmed only through a citing article) | Y5.3 |

**Why these fit.** Programs state identity outcomes often (pride in heritage, "see
themselves as a STEM person", "a sense of purpose", self-advocacy in IEP meetings),
and the gold has gap tags for three of them (S036, H060, faith growth). Grouping
self-beliefs and identity in one domain reflects Nagaoka et al.'s account of agency
and integrated identity as developmental outcomes distinct from skills.

**Where they don't fit.** The two strongest specific anchors (Shogren; Carlone &
Johnson) are partial: someone with library access should confirm the publisher PDFs
before these citations enter a codebook, or Severin can accept them at partial as
the v2 gate allows. Faith and spiritual growth has no secular framework in the
records; it is routed to purpose (Y5.5) and values (Y6.1) following the existing
faith rule (CF-022), which Severin's gap tags (H079, S125) show is a known compromise.

**Structure.** Self-worth (v2 Y4.4) merges into confidence: it had no gold rows of
its own and its boundary with confidence was the triangle the move is meant to end.

### Y6 Character, Values & Civic Life

**Categories:** A. Character (Y6.1) · B. Civic understanding (Y6.2–Y6.3) · C. Civic
action (Y6.4–Y6.6) · D. Digital citizenship (Y6.7)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Search Institute, Positive Values | 40 Developmental Assets | located | Y6.1 |
| Five Cs, Character and Contribution | Lerner et al. (2005) | partial | Y6.1, Y6.5 |
| NCSS C3 Framework | NCSS (2013), *College, Career, and Civic Life (C3) Framework*: Dimension 2 Civics; Dimension 4 Taking Informed Action | verified for Civics and Dimension 2; partial for Dimension 4 scope (v2 `ncss-c3-2013`) | Y6.2, Y6.4, Y6.5 |
| Muhammad, Pursuit 4 Criticality | Five Pursuits | verified | Y6.3 |
| NAAEE K–12 Guidelines | NAAEE (2019), *K–12 Environmental Education: Guidelines for Excellence*, Personal and Civic Responsibility strand | verified for the strand; "connection to nature" not covered (v2 `naaee-k12-2019`) | Y6.6 |
| ISTE Standards for Students | ISTE (2016), Standard 2 Digital Citizen | verified (`iste-students-2016`) | Y6.7 |

**Why these fit.** C3 replaces the "CIRCLE Framework", which does not exist as a named
framework (`needs_replacement`, CP-01-10). It is a national social-studies framework
with a civics dimension and an action dimension that match the two civic categories.
NAAEE gives environmental stewardship (two gap rows) a standards-body anchor.

**Where they don't fit.** C3 is a K–12 standards framework, so it anchors civic
*learning* better than out-of-school civic action; voting and youth organizing (S182,
H028) rest on Dimension 4 at partial scope. Criticality rests on a pedagogical model;
no measurement framework for critical consciousness is in the records [VERIFY before
adding one, e.g. a published critical-consciousness scale].

**Structure.** Positive values joins civic life (as in v2 and Lerner's Character and
Contribution) because both are about how youth relate to others and the community,
and Domain 6 as a whole dissolves. Civic *knowledge* of government moves here from
1.3, so civics has one home (S254).

### Y7 Career & Economic Readiness

**Categories:** A. Exploration & navigation (Y7.1–Y7.2) · B. Work readiness
(Y7.3–Y7.4) · C. Employment & independence (Y7.5–Y7.7)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Perkins V | 20 U.S.C. 2302 (career exploration; work-based learning; recognized credentials) | verified (`perkins-v`) | Y7.1, Y7.4 |
| Conley, Key Transition Knowledge & Skills | Conley, *Four Keys* | located | Y7.2 |
| OCTAE Employability Skills Framework | U.S. ED OCTAE | verified (`octae-employability-skills-framework`) | Y7.3 |
| WIOA primary indicators | 20 CFR 677.155 | verified (`wioa-20cfr677155`; the 34 CFR 463.155 label is misattributed, CP-01-02) | Y7.4, Y7.5 |
| CFPB Building Blocks | CFPB (2016), *Building Blocks to Help Youth Achieve Financial Capability* | verified | Y7.6 |
| National Standards for Personal Financial Education | Jump$tart Coalition & CEE (2021) | verified | Y7.6 |
| Chafee daily living skills | 42 U.S.C. 677(a)(1) | verified (v2 `chafee-42usc677`) | Y7.7 |

**Why these fit.** Workforce and transition programs report against WIOA and Perkins
indicators, so those are the categories programs already use. Chafee's "daily living
skills" names the strongest remaining gap in the gold (five independent-living rows).

**Where they don't fit.** Chafee is written for youth leaving foster care; the code
uses its construct for any young person (campers' self-care, S162), a scope widening
flagged as hybrid. Conley's other three keys are routed elsewhere: content knowledge
to the subject codes (9.1 retired), cognitive strategies to Y1.7, learning skills to
Y1 category B and Y4.

### Y8 Health, Safety & Well-Being

**Categories:** A. Physical health (Y8.1–Y8.5) · B. Mental health (Y8.6–Y8.9) ·
C. Safety, risk & justice (Y8.10–Y8.13)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| CDC/ASCD WSCC | Whole School, Whole Community, Whole Child | verified (`cdc-wscc`) | Y8.1, Y8.9 |
| CDC YRBS | Youth Risk Behavior Survey: sleep item (2025 questionnaire); hours of screen time (2021 and earlier only) | partial (appendix A, R03) | Y8.1, Y8.11, Y8.12 |
| Healthy People 2030 SH-04 (sleep) | Healthy People 2030 | verified (v2 `hp2030-sh04`) | Y8.1 |
| SHAPE America National PE Standards | SHAPE (2024), Standard 1: motor skills | verified for motor skills (v2 `shape-pe-2024`; not for fitness) | Y8.2 |
| SHAPE America National Health Education Standards | SHAPE (2024) | verified (v2 `shape-nhes-2024`) | Y8.3 |
| National Sex Education Standards | Future of Sex Education Initiative (2020), 2nd ed. | verified (v2 `nses-2020`) | Y8.4 |
| Healthy People 2030 AH-01, AHS-01 | Preventive visit; insurance | verified (v2 `hp2030-ah01-ahs01`) | Y8.5 |
| Keyes, Dual Continua | Westerhof & Keyes (2010) statement of the model | verified (`keyes-dual-continua`) | Y8.6, Y8.7 |
| Keyes, Mental Health Continuum | Keyes, C. L. M. (2002). *Journal of Health and Social Behavior, 43*(2), 207–222 | partial (appendix A, R06: metadata confirmed; content through a secondary source) | Y8.7 |
| NCTSN 12 Core Concepts | Layne, Strand & NCTSN Core Curriculum Task Force (2012) | located (`nctsn-core-curriculum`) | Y8.8 |
| Search Institute, Safety asset | 40 Developmental Assets (Empowerment) | located; CP-01-07's use is partial | Y8.10 |
| SAMHSA Strategic Prevention Framework | SAMHSA (2019) | located (`samhsa-spf`) | Y8.11 |
| Bullying uniform definitions | CDC & U.S. ED (2014) | located (`cdc-ed-bullying-2014`) | Y8.12 |
| CJCA recidivism white paper | Harris, Lockwood & Mengers (2009) | verified (`cjca-2009`) | Y8.13 |

**Why these fit.** Health outcomes are where federal surveillance instruments (YRBS,
Healthy People) give the most precise, cross-sector indicators, and they name the
constructs 8.1 was forced to absorb: sleep, screen time, preventive care, chronic
condition management. Keyes' model has two continua; 2.4.0 used only the illness side,
so flourishing statements (S071) had no home.

**Where they don't fit.** YRBS dropped its hours-of-screen-time item after 2021, so
screen time rests on an older questionnaire; Healthy People 2030 screen-time objectives
are [VERIFY]. Positive Youth Justice does not describe justice-system status (v2
UNSUPPORTED) and is not used for Y8.13. Felt safety is being reworked in PR #31; the
proposal follows that PR's tie-breaker (general or neighborhood safety to the safety
code, safety in this program to belonging, trauma-related safety to trauma recovery)
rather than proposing different wording.

**Structure.** v2 split 2.4.0's Domain 8 into three domains; the proposal keeps one
health domain with three categories (fewer domain boundaries) but takes v2's new codes
for motor skills, health knowledge and health care access, which close nine forced or
gap rows. Nutrition and sleep stay with physical activity in one daily-habits code, as
8.1 has them today: the gold never needed to separate them.

---

## Part F: Families and other adult participants

### F1 Family & Caregiver Strengthening

**Categories:** A. Parenting & home learning (F1.1–F1.3) · B. Caregiver well-being &
support (F1.4–F1.5) · C. Adult development & navigation (F1.6–F1.7) ·
D. Family–program partnership (F1.8–F1.9)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Strengthening Families Protective Factors | CSSP (Parental Resilience; Social Connections; Knowledge of Parenting and Child Development; Concrete Support in Times of Need) | verified (`cssp-strengthening-families`, v2 `cssp-concrete-support`) | F1.1, F1.4, F1.5, F1.7 |
| Epstein's six types of involvement | Epstein, J. L., et al. | located (`epstein-six-types`; type mapping corrected by CP-01-03) | F1.1, F1.2, F1.8, F1.9 |
| Dual Capacity-Building Framework | Mapp, K. L., & Kuttner, P. J. (2013), SEDL / U.S. ED | verified (v2 `mapp-kuttner-2013`) | F1.7, F1.8 |
| IDEA Parent Training and Information Centers | 20 U.S.C. 1471(b) | verified (v2 `idea-671-pti`) | F1.7 |
| MIECHV performance measures | HRSA MCHB | verified (v2 `miechv-performance-measures`) | F1.3 |
| Healthy People 2030 MICH-14, MICH-15 | Healthy People 2030 | verified | F1.3 |
| Ascend 2Gen, Postsecondary & Employment Pathways | Ascend at the Aspen Institute | verified (`ascend-2gen`) | F1.6 |
| Digital Equity Act, digital literacy | 47 U.S.C. 1721(12) | verified for F1.6 only | F1.6 |

**Why these fit.** Family programs state outcomes about parenting, caregiver stress,
navigating systems and adult education, and CSSP's protective factors and 2Gen are the
frameworks those programs are funded under. MIECHV stays on family health practices
by Severin's decision.

**Where they don't fit.** CSSP began in early-care settings but is used across child
welfare and family services (noted in the v2 verification). The ED/DOJ 2015 language
access letter may have been rescinded in 2025 [VERIFY against ed.gov]; it is used
only as background for A2.4.

**Structure.** v2's F3 Family–Program Partnership becomes category D, because the
subject is still the family, and one family domain with four categories is easier to
apply than two (CF-008 confusions). Adult participants who are not caregivers (adult
learners, older adults: H062, H078) are in scope, following v2 rc1.

### F2 Basic Needs & Economic Stability

**Categories:** A. Economic stability (F2.1) · B. Food & housing (F2.2–F2.3)

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Ascend 2Gen, Economic Assets | Ascend | verified | F2.1 |
| CSSP, Concrete Support in Times of Need | CSSP | verified | F2.1 |
| USDA Household Food Security Survey Module | USDA ERS | verified (`usda-hfssm`) | F2.2 |
| McKinney-Vento Act, Subtitle VII-B | 42 U.S.C. 11432 and its homelessness definition | located (`mckinney-vento`) | F2.3 |
| NYTD outcomes (housing) | ACF | verified (`acf-nytd`) | F2.3 |

**Why these fit.** These are the standard federal measures for basic needs, and they
apply to any household, including a young person living on their own (12.7 already
covers that since 2.3.0).

---

## Part A: Staff, organizations and systems

### A1 Staff & Volunteer Capacity

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Standards for Professional Learning | Learning Forward (2022) | located (`learning-forward-2022`) | A1.1, A1.2 |
| Trauma-informed approach | SAMHSA (2014), SMA 14-4884 | located (`samhsa-tic-2014`) | A1.2 |
| Workplace mental health and well-being | Office of the U.S. Surgeon General (2022) | verified | A1.3 |
| NIOSH WellBQ | NIOSH (2021), Pub. No. 2021-110 | verified | A1.3 |
| JOLTS separations and quits | U.S. BLS | verified | A1.3 |

**Structure and fit.** Adult learning vs practice change follows Learning Forward's
distinction between educator learning and changes in practice. A1.3 uses general
workforce sources, not Head Start, by Severin's decision.

### A2 Program Quality, Access & Reach

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Youth Program Quality pyramid | Weikart Center | verified (v2 `ypqa-pyramid`; accreditation not covered) | A2.1 |
| Candidate Outcome Indicators, mentoring | Urban Institute & Center for What Works | partial (youth satisfaction only) | A2.2 |
| Emergency Connectivity Fund rules | 47 CFR 54 Subpart Q | verified | A2.3 |
| ESSA Title IV-A technology capacity | 20 U.S.C. 7119(a)(2) | verified | A2.3 |
| Digital Equity Act availability objectives | 47 U.S.C. 1723(c)(1)(B) | verified | A2.3 |
| Participation dimensions | Weiss, Little & Bouffard (2005), *New Directions for Youth Development* | located | A2.5 |
| UW Extension logic model, outputs | UW–Madison Extension (2020) | verified | A2.5 |
| Epstein Types 3 and 6; Mapp & Kuttner | as above | located; verified | A2.6 |

**Where they don't fit.** No verified source names physical facilities or general
materials (A2.3), or inclusion accommodations in general (A2.4) [VERIFY: ADA Title II /
Section 504 program-access language is the obvious lead]. The OTL citation on today's
Domain 10 remains unverifiable and is dropped.

### A3 Systems, Policy & Community Conditions

| Framework | Citation | Status | Codes |
|---|---|---|---|
| Collective Impact | Kania, J., & Kramer, M. (2011). *Stanford Social Innovation Review* | verified | A3.2 |
| Collective efficacy | Sampson, R. J., Raudenbush, S. W., & Earls, F. (1997). *Science, 277*, 918–924 | verified | A3.3 |
| Standards for Professional Learning (systems) | Learning Forward (2022) | located | A3.1 |

**Where they don't fit.** Policy change (A3.1) has no dedicated framework in the
records; it is a codebook-defined status (hybrid) [VERIFY before citing a
policy-change framework].

---

## Appendix A. Verification run for this review (2026-09-26)

One independent `codebook-citation-verifier` agent checked the six new claims. It saw
only the claim fields, not this document. Verdicts are copied as returned; excerpts
are verbatim and 40 words or fewer.

| Claim | Source | Verdict | URL fetched | Excerpt | Limit |
|---|---|---|---|---|---|
| R01 | MacQueen et al. (1998) | PARTIAL | academia.edu copy of Fonteyn et al. (2008), citing MacQueen | "We used their suggestions for the creation of the basic components of our codebook: the codes, a brief definition and a full definition, guidelines for inclusion and exclusion criteria, and example text." | Secondary. SAGE page confirms title, authors, 10(2), 31–36; full text paywalled. |
| R02 | Fereday & Muir-Cochrane (2006) | SUPPORTED | https://sites.ualberta.ca/~iiqm/backissues/5_1/PDF/FEREDAY.PDF | "a hybrid approach of qualitative methods of thematic analysis, and it incorporated both the data-driven inductive approach of Boyatzis (1998) and the deductive a priori template of codes approach outlined by Crabtree and Miller (1999)." | none |
| R03 | CDC YRBS questionnaire | PARTIAL | https://www.cdc.gov/yrbs/media/pdf/2025/2025-YRBS-Standard-HS-Questionnaire508.pdf | "On an average school night, how many hours of sleep do you get?" | Screen-time hours items only in 2021 (Q78) and 2019 (Q79–80); 2023 and 2025 ask only about social media frequency. |
| R04 | CRDC | SUPPORTED | https://www.ed.gov/sites/ed/files/about/offices/list/ocr/docs/crdc-student-access-enrollment.pdf | "Nearly 15,900 public high schools enrolled approximately 1.6 million students in dual enrollment or dual credit programs." | Cite the OCR 2020-21 report, not the JavaScript data site. |
| R05 | Wigfield & Eccles (2000) | PARTIAL | https://acmd615.pbworks.com/f/ExpectancyValueTheory.pdf | "Utility value or usefulness refers to how a task fits into an individual's future plans" | Wording: "future plans", not "current and future goals". Third-party copy of the publisher PDF. |
| R06 | Keyes (2002) | PARTIAL | https://www.ncbi.nlm.nih.gov/books/NBK585669/ | "The syndrome of symptoms of positive feelings and positive functioning in life included psychological, social, and emotional well-being" | Secondary chapter; primary text unreadable. Metadata confirmed (DOI 10.2307/3090197). |

## Appendix B. Open items before any of this enters the codebook

- **Library access** would close five partials at once: MacQueen (1998), Keyes (2002),
  Shogren et al. (2015), Carlone & Johnson (2007), Lerner et al. (2005).
- **[VERIFY] leads not yet fetched:** a Healthy People 2030 screen-time objective; an
  ADA Title II / Section 504 program-access anchor for A2.4; a critical-consciousness
  measure for Y6.3; a policy-change framework for A3.1; ed.gov status of the 2015
  ED/DOJ language-access letter.
- Every citation in `proposed-codebook.md` still goes through a CP and the registry
  (STANDARDS S1, S4) in phase 4. This document is the research map, not the registry.
