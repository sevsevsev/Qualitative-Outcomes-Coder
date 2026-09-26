# Current codebook: inventory and structural review

Phase 1 of the codebook research-basis review (read-only). Baseline: **Youth Outcomes
Codebook 2.4.0** on `main` (`codebooks/original.ts`, id `original`), 12 domains and 87
subcategories. The code tables in section 3 are generated from `definitionsText` and
`sources/original.sources.json` by script, not copied by hand.

**In flight at the time of writing (2026-09-26), in the "Next phase of codebook
refinement" thread:**

- PR #31 (draft, codebook 2.5.0): rewrites the 6.1 Empowerment & Safety definition
  (CP-01-07). The first scored run regressed S212; Severin chose to add the safety
  tie-breaker and re-run.
- Queued there: CP-01-06 (CASEL tie-breakers: leadership, growth mindset, peer
  pressure, gratitude, digital) and CP-01-12 (ordered decision procedure).

Nothing in this review edits codebook source, prompts or gold.

## 1. Where the codebook lives and who reads it

There is no database, seed file, migration or YAML: the codebook is TypeScript data
compiled into both the client bundle and the serverless functions.

| File | Role |
|---|---|
| `codebooks/original.ts` | **The codebook.** `definitionsText` (definitions, examples, source lines, sent to the model), `rulesText` (process rules and tie-breakers, sent to the model), `domains[]` (codes, review hints, domain overviews, pinned Subject Areas), legacy label maps, `version`. |
| `codebooks/types.ts` | Data model; `buildSystemInstruction()` concatenates `rulesText` + `definitionsText` into the prompt. |
| `codebooks/index.ts` | `CODEBOOK_REGISTRY` (`original`, `accelerate_philly`), default codebook. |
| `codebooks/geminiSchema.ts` | Builds the structured-output schema: domain and subcategory enums come from `domains[]` (enum footprint today: **147**, test cap 180). |
| `codebooks/originalV1Numbering.ts` | Generated v1.2.0 → v2.0.0 number and label map for re-importing old exports. |
| `codebooks/acceleratePhilly.ts` | A second, unrelated codebook (strategic-plan crosswalk). Out of scope here. |
| `api/analyze-batch.ts`, `api/_lib/gemini.ts` | Auto-coding: sends the system instruction and schema to Gemini. |
| `api/try-code.ts`, `components/TryCoder.tsx` | "Try it" on the public explorer: codes one statement. |
| `services/geminiService.ts` | Client batching, flattening to atomic rows, CSV export (stamps `codebook_version`). |
| `components/ReviewDashboard.tsx`, `services/reviewNormalization.ts` | Manual review/correction: domain and subcategory dropdowns, hints, Subject Area mismatch flag, legacy re-import. |
| `components/CodebookExplorer.tsx`, `CodebookSunburst.tsx`, `ExplorerLanding.tsx`, `ExplorerSite.tsx`; `services/codebookExplorer.ts`, `codebookSources.ts`, `explorerCodebooks.ts`, `sunburstLayout.ts` | The Codebook tab and public explorer site: parse `definitionsText` for definitions, examples, notes and sources; join the source registry. |
| `components/FeedbackPanel.tsx`, `FeedbackAdmin.tsx`, `api/feedback*.ts`, `services/feedback*.ts` | Visitor feedback keyed to code wording. |
| `scripts/codebook-eval.ts`, `codebookEvalScoring.ts`, `scoreAppExport.ts` | Gold-set scoring of live runs and app exports. |
| `codebook-refinement/` | Governance: STANDARDS, PLAN, CONFUSIONS (CF-001..028), change proposals, source registry, gold sets, renumbering map, the v2 draft. |
| Tests: `codebooks/*.test.ts`, `codebook-refinement/registry.test.ts`, `sync.test.ts`, `services/codebookExplorer.test.ts`, `reviewNormalization.test.ts`, `api/*.test.ts`, `validation/syntheticOutcomeStatements.test.ts` | Enum budget, consistency between `domains[]` and `definitionsText`, registry and CF sync, renumbering one-to-one, explorer parsing. |
| `.claude/agents/codebook-*.md`, `.claude/commands/codebook-cycle.md` | Refinement agents that read the codebook. |

## 2. How the app uses every code

All 87 codes are used the same way. There is no per-code difference in usage.

| Use | How |
|---|---|
| Auto-coding | Gemini picks one primary domain + subcategory from the enum per atomic outcome, plus up to two free-text secondary codes, a confidence, a Subject Area and a target population. |
| Manual tagging | The review table lets a person change domain, subcategory and the other fields. Hints show next to the chosen code; 1.x codes with pinned Subject Areas flag a mismatch. |
| Exports | CSV rows carry the full code label (for example `1.1 Literacy: Reading & Writing`) and `codebook_version`. |
| Reports | No built-in reports. Downstream analysis works from the export. |
| Explorer | Every code has a page with definition, examples, notes, sources and approved feedback. |
| Evaluation | Gold scoring compares code numbers. |

Two structural facts matter for any redesign:

- The **code label string is the identifier** in prompts, enums, exports and
  feedback. Renaming a code changes its identity everywhere.
- The four SEL category headers (4.1 to 4.5) are listed in the prompt but are **not**
  codes ("Do not use"). Domain 4 is the only three-level domain.

## 3. Inventory: every domain and code

Definitions are verbatim from `definitionsText`. "Registry support" lists the source ids in `sources/original.sources.json` that claim the code, with the status of that claim. "Review hint" says whether the code has a hint in the review UI.

Domain Framework Basis lines, as the prompt states them:

- **Domain 1. Academic Learning & Achievement**: ESSA (2015) State academic standards, 20 U.S.C. 6311(b)(1)(C) (reading or language arts, mathematics, science) and "well-rounded education", 20 U.S.C. 7801(52); National Reading Panel & Common Core writing anchors (Literacy); NGSS & CSTA (Science, Technology & Engineering); National Core Arts Standards (Arts); UChicago Consortium On-Track Indicator (Allensworth & Easton); ESSA graduation-rate indicator, 20 U.S.C. 6311(c)(4)(B); Attendance Works; WIDA English Language Development Standards; Head Start Early Learning Outcomes Framework (1.7)
- **Domain 2. Joy, Interest & Motivation in Learning**: Gholdy Muhammad (Joy) & Hidi/Renninger (Interest); National Core Arts Standards (2.5)
- **Domain 3. Belonging, Relationships & School Connectedness**: CDC School Connectedness, Learning for Justice, Epstein's Framework
- **Domain 4. Social & Emotional Learning (CASEL-aligned)**: CASEL (Collaborative for Academic, Social, and Emotional Learning)
- **Domain 5. Academic Engagement & Habits**: UChicago Consortium "Academic Mindsets and Behaviors"
- **Domain 6. Positive Youth Development (PYD) & Assets**: Search Institute’s 40 Developmental Assets
- **Domain 7. Civic Engagement & Community**: CIRCLE Framework, Gholdy Muhammad (Criticality), & ISTE Standards
- **Domain 8. Physical & Behavioral Health**: CDC WSCC (Physical), Dual Continua Model (Mental Health), SAMHSA (Trauma), & CDC Youth Risk Behavior Surveillance System (Risk Behaviors, 8.5-8.7)
- **Domain 9. College & Career Readiness**: David Conley’s "Four Keys" & Perkins V (CTE Framework); National Student Clearinghouse Research Center & WIOA (9.7-9.8); CFPB Youth Financial Capability Building Blocks & National Standards for Personal Financial Education (9.9)
- **Domain 10. Access & Equity**: Opportunity-to-Learn (OTL) Standards
- **Domain 11. Adult & System Capacity**: Learning Forward Standards & Epstein Type 3/6; Weikart Center Youth Program Quality Assessment (11.5)
- **Domain 12. Family Strengthening & Basic Needs**: CSSP Strengthening Families Protective Factors Framework; Ascend at the Aspen Institute Two-Generation (2Gen) Approach; Epstein Type 1 (Parenting)

### Domain 1. Academic Learning & Achievement

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 1.1 Literacy: Reading & Writing | Demonstrated growth in reading skill (phonemic awareness, phonics, fluency, vocabulary, comprehension, reading level) or in writing and composition (planning, drafting and revising written work in any genre). | yes | national-reading-panel-2000 (located); essa-6311-b1c-standards (verified); ccss-writing-anchors (verified) | yes |
| 1.2 Numeracy & Mathematical Skill | Demonstrated growth in math skill or grade-level proficiency. | yes | essa-indicators (located); essa-6311-b1c-standards (verified) | no |
| 1.3 Knowledge & Skill in Other Academic Subjects | Demonstrated learning of content, concepts or skills in an academic subject other than literacy, math, science/technology/engineering and the arts -- for example history, geography, civics and government, economics, world languages, or health education -- NOT explicitly framed around college/career readiness. | yes | essa-indicators (located); essa-7801-52-well-rounded (verified); naep-9622-b2d (verified) | yes |
| 1.4 English Language Proficiency & Multilingual Development | Growth in English language proficiency for multilingual learners/English learners (listening, speaking, reading, writing). | yes | wida-eld (located) | yes |
| 1.5 Attendance, Chronic Absence & School Stability | Outcomes related to a STUDENT'S regular attendance, reduced chronic absenteeism, or maintaining school enrollment/stability through disruption (e.g., housing instability, school transitions). | yes | attendance-works (verified); mckinney-vento (located) | yes |
| 1.6 Grades, Credits, On-Track Status & Graduation | Outcomes related to course grades, GPA, course passing or failure, credit accumulation, grade promotion, 9th-grade on-track status, reduced exclusionary discipline (suspension/expulsion), or graduation/completion/re-engagement (including GED). Also use for general "academic performance/achievement" or test scores when no subject is named. | yes | essa-indicators (located); allensworth-easton-2005 (located); allensworth-easton-2007 (verified) | yes |
| 1.7 School Readiness & Early Learning | Outcomes for young children (pre-K/early childhood) related to kindergarten readiness, pre-literacy/early language skills, or developmental screening and milestones. | yes | head-start-elof (located) | yes |
| 1.8 Science, Technology & Engineering | Demonstrated learning in science (life, physical, earth or environmental science), engineering design, or computer science (computing concepts, coding, programming), NOT explicitly framed around college/career readiness. | yes | essa-6311-b1c-standards (verified); ngss-2013 (located); csta-k12-2017 (verified) | yes |
| 1.9 Arts Learning & Performance | Demonstrated learning in an art form (dance, media arts, music, theatre, visual arts): technique, vocabulary, and knowledge of the discipline's forms, history and concepts. | yes | national-core-arts-standards (verified) | yes |

### Domain 2. Joy, Interest & Motivation in Learning

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 2.1 Joy & Emotional Wellness | Outcomes focused on happiness, fun, the elevation of the spirit, and positive emotional response to the environment. | yes | muhammad-five-pursuits (verified); muhammad-hill-model-label (misattributed) | no |
| 2.2 Triggered Situational Interest (Curiosity) | Outcomes focused on attention being caught by the environment, asking questions, or wanting to know more. | yes | hidi-renninger-2006 (verified) | yes |
| 2.3 Value & Meaning (Utility Value) | Outcomes where students connect learning to their personal goals, future self, or community relevance. | yes | hidi-renninger-2006 (verified); eccles-expectancy-value (located) | no |
| 2.4 Creative Expression & Making | Outcomes involving self-expression and the application of interest in novel ways -- the act of creating or making something (art, music, writing, design, performance pieces). | yes | national-core-arts-standards (verified) | yes |
| 2.5 Performance, Presentation & Artistic Response | Outcomes involving performing or presenting creative work publicly (exhibitions, recitals, portfolios), or responding to/analyzing art (critique, aesthetic analysis, connecting art to personal or cultural meaning). | yes | national-core-arts-standards (verified) | yes |
| 2.6 Sustained & Individual Interest | Interest that persists, deepens, or becomes the youth's own -- returning to a topic or activity over time, pursuing it beyond the program, or describing it as a passion. | yes | hidi-renninger-2006 (verified) | yes |

### Domain 3. Belonging, Relationships & School Connectedness

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 3.1 School/Program Connectedness (Belonging) | Student perception of being accepted, valued, and included in the school or program community. | none (domain line only) | cdc-school-connectedness-2009 (verified) | no |
| 3.2 Adult Support & Care | Outcomes related to forming positive, supportive relationships with teachers, mentors, or staff. | none (domain line only) | cdc-school-connectedness-2009 (verified); search-developmental-relationships (verified) | no |
| 3.3 Peer Connection & Social Integration | Outcomes related to forming friendships, peer acceptance, and positive social interaction. | none (domain line only) | cdc-school-connectedness-2009 (verified) | yes |
| 3.4 Cultural Identity & Affirmation | Students express pride in their own identity, heritage, or culture. | yes | muhammad-five-pursuits (verified); learning-for-justice-sjs (verified) | yes |
| 3.5 Family Partnership & Connection | Outcomes focused on trust, communication, and relationship building BETWEEN families and the program (i.e., the family's relationship with the program itself). | none (domain line only) | epstein-six-types (located) | yes |
| 3.6 Social Capital & Networks | A young person's access to, and ability to use, a wider network of relationships (adults, peers, professionals, alumni, employers) that can open educational, career, or other opportunities -- beyond one supportive relationship. | yes | search-developmental-relationships (verified); e2w-social-capital (verified) | yes |

### Domain 4. Social & Emotional Learning (CASEL-aligned)

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 4.1.1 Identifying and naming emotions | Students can recognize and accurately label their own emotions. | none (domain line only) | casel-2020 (verified) | no |
| 4.1.2 Understanding self & identity | Students develop a realistic sense of self and awareness of their personal and cultural identity. | none (domain line only) | casel-2020 (verified) | no |
| 4.1.3 Recognizing strengths | Students can identify their own strengths, talents, and areas of competence. | none (domain line only) | casel-2020 (verified) | no |
| 4.1.4 Confidence, self-efficacy & growth mindset | Students believe they can succeed, improve with effort, and handle challenges. | none (domain line only) | casel-2020 (verified) | yes |
| 4.2.1 Emotion regulation & impulse control | Students manage strong emotions and control impulses in constructive ways. | none (domain line only) | casel-2020 (verified) | yes |
| 4.2.2 Stress management & coping skills | Students use healthy strategies to cope with stress, frustration, or worry. | none (domain line only) | casel-2020 (verified) | yes |
| 4.2.3 Goal-setting & follow-through | Students set personal goals and work persistently to achieve them. | none (domain line only) | casel-2020 (verified) | yes |
| 4.2.4 Organization, persistence & self-discipline | Students manage time, materials, and tasks effectively and stick with work over time, in a GENERAL (non-academic-specific) context. | none (domain line only) | casel-2020 (verified) | yes |
| 4.3.1 Empathy & perspective-taking | Students understand and care about others’ feelings and viewpoints. | none (domain line only) | casel-2020 (verified) | yes |
| 4.3.2 Respect for diversity & inclusion | Students appreciate and respect people from diverse backgrounds and identities. | none (domain line only) | casel-2020 (verified) | no |
| 4.3.3 Understanding norms & expectations | Students understand social and ethical norms for behavior in different contexts. | none (domain line only) | casel-2020 (verified) | no |
| 4.3.4 Awareness of supports and resources | Students know about and feel comfortable accessing supports and resources around them. | none (domain line only) | extension | no |
| 4.4.1 Communication & active listening | Students communicate clearly and listen attentively to others. | none (domain line only) | casel-2020 (verified) | yes |
| 4.4.2 Cooperation, teamwork & collaboration | Students work well with others toward shared goals. | none (domain line only) | casel-2020 (verified) | yes |
| 4.4.3 Conflict management & problem-solving in relationships | Students handle INTERPERSONAL conflicts and disagreements in constructive ways. | none (domain line only) | casel-2020 (verified) | yes |
| 4.4.4 Help-seeking & providing support | Students ask for help when needed and offer help to others. | none (domain line only) | casel-2020 (verified) | no |
| 4.4.5 Building and sustaining positive relationships | Students build, maintain, and repair positive relationships over time. | none (domain line only) | casel-2020 (verified) | no |
| 4.5.1 Evaluating options & consequences | Students consider possible options and likely outcomes BEFORE acting, in the moment of a specific decision. | none (domain line only) | casel-2020 (verified) | yes |
| 4.5.2 Ethical and prosocial choices | Students make choices that reflect ethical principles and concern for others. | none (domain line only) | casel-2020 (verified) | yes |
| 4.5.3 Personal and social problem-solving | Students identify problems, generate solutions, and take constructive action -- the full problem-solving process, not limited to a single decision point. | none (domain line only) | casel-2020 (verified) | no |
| 4.5.4 Safety-oriented decisions & risk avoidance | Students make choices that protect their safety and reduce risk. | none (domain line only) | extension | no |
| 4.5.5 Contributions to class/program/community wellbeing | Students take small, daily actions to maintain or improve their immediate environment (classroom, program space). | none (domain line only) | casel-2020 (verified) | yes |

### Domain 5. Academic Engagement & Habits

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 5.1 Academic Behaviors (Engagement) | Observable participation, such as attending class, doing homework, and participating in discussions. | none (domain line only) | farrington-2012 (verified) | yes |
| 5.2 Academic Perseverance (Grit/Tenacity) | The ability to stick with a schoolwork/academic task despite challenges or setbacks. | none (domain line only) | farrington-2012 (verified) | no |
| 5.3 Learning Strategies (Study Skills) | Use of specific methods to improve learning, such as note-taking, time management, or metacognition. | none (domain line only) | farrington-2012 (verified) | no |
| 5.4 Academic Confidence (Self-Efficacy) | Belief in one's ability to succeed in academic tasks. | none (domain line only) | farrington-2012 (verified) | yes |

### Domain 6. Positive Youth Development (PYD) & Assets

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 6.1 Empowerment & Safety | Youth feel a sense of mattering, voice, and control over their own environment (a felt, individual state). | none (domain line only) | search-40-assets (located) | yes |
| 6.2 Positive Values | Internal guiding principles like integrity, honesty, and responsibility, as a general character trait (not tied to one situation). | none (domain line only) | search-40-assets (located) | yes |
| 6.3 Constructive Use of Time | Engagement in enriching activities like arts, sports, or religious/community groups OUTSIDE of this program. | none (domain line only) | search-40-assets (located) | no |
| 6.4 Positive Identity | A broader sense of self-esteem and purpose, distinct from momentary confidence (4.1.4) or academic confidence (5.4). | none (domain line only) | search-40-assets (located) | yes |

### Domain 7. Civic Engagement & Community

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 7.1 Civic Skills & Knowledge | Understanding how systems work and how to navigate them. | none (domain line only) | circle-framework (needs_replacement) | no |
| 7.2 Community Service & Action | Taking action to improve the community (volunteering, service learning) -- larger or organized service projects. | none (domain line only) | circle-framework (needs_replacement) | yes |
| 7.3 Youth Voice & Leadership | Expressing opinions and influencing decisions. | none (domain line only) | circle-framework (needs_replacement) | no |
| 7.4 Criticality & Social Justice | Students understand power, equity, and social justice, and analyze systems of oppression or inequality. | yes | muhammad-five-pursuits (verified); muhammad-hill-model-label (misattributed) | no |
| 7.5 Digital Citizenship & Safety | Responsible, ethical, and safe behavior in online environments. | none (domain line only) | iste-students-2016 (verified) | no |

### Domain 8. Physical & Behavioral Health

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 8.1 Physical Activity & Nutrition | Engaging in exercise, eating healthy foods, and practicing hygiene. | yes | cdc-wscc (verified) | no |
| 8.2 Mental Health Status (Symptom Reduction) | Outcomes related to the reduction of distress, anxiety, depression, or specific behavioral symptoms, in the youth themselves. | yes | keyes-dual-continua (verified) | yes |
| 8.3 Healing & Trauma Recovery | Outcomes related to a YOUTH processing trauma, feeling psychologically safe, and moving toward recovery. | yes | nctsn-core-curriculum (located); samhsa-tic-2014 (located) | yes |
| 8.4 Access to Mental Health Services | The actual utilization of counseling, therapy, or crisis intervention. | yes | cdc-wscc (verified) | no |
| 8.5 Substance Use Prevention & Reduction | Outcomes related to preventing or reducing youth tobacco, alcohol, vaping, or other drug use. | yes | cdc-yrbss (verified); samhsa-spf (located) | no |
| 8.6 Sexual & Reproductive Health Behaviors | Outcomes related to sexual risk behavior, teen pregnancy prevention, or reproductive/sexual health knowledge. | yes | cdc-yrbss (verified) | no |
| 8.7 Violence, Bullying & Injury Prevention | Outcomes related to reducing involvement in fighting, bullying (as perpetrator or victim), community violence, or unintentional injury. | yes | cdc-yrbss (verified); cdc-ed-bullying-2014 (located) | no |
| 8.8 Justice Involvement, Diversion & Reentry | Outcomes related to avoiding justice-system involvement, successful diversion, or successful reentry/reduced recidivism after justice involvement. | yes | cjca-2009 (verified) | yes |

### Domain 9. College & Career Readiness

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 9.1 Key Content Knowledge | Mastery of core subjects EXPLICITLY FRAMED around post-secondary/college readiness. | none (domain line only) | conley-four-keys (located) | yes |
| 9.2 Key Cognitive Strategies | Critical thinking, research, and problem formulation skills relevant to career/college. | none (domain line only) | conley-four-keys (located) | no |
| 9.3 Transition Knowledge & Skills | Understanding the bureaucratic PROCESS of transitioning to college/career (applications, financial aid, resumes). | none (domain line only) | conley-four-keys (located) | yes |
| 9.4 Career Awareness & Exploration | Developing knowledge of career paths, conducting interest inventories, and exploring potential futures. | none (domain line only) | perkins-v (verified) | no |
| 9.5 Employability Skills | General skills necessary for success in the workplace, such as professionalism, workplace communication, and interview skills. | none (domain line only) | octae-employability-skills-framework (verified) | yes |
| 9.6 Technical Skills & Work-Based Learning | Acquisition of specific industry skills, certifications, or completion of internships/apprenticeships (the TRAINING outcome). | none (domain line only) | perkins-v (verified); wioa-20cfr677155 (verified) | yes |
| 9.7 Postsecondary Enrollment, Persistence & Completion | Outcomes related to college/postsecondary matriculation, persistence (e.g., first-to-second-year), or credential/degree completion. | yes | nsc-hs-benchmarks (verified) | yes |
| 9.8 Employment Placement, Retention & Earnings | Outcomes related to obtaining employment, retaining a job, or wage/earnings gains. | yes | wioa-20cfr677155 (verified); wioa-34cfr463155-label (misattributed) | yes |
| 9.9 Financial Capability | Youth financial knowledge, habits, and decision-making -- budgeting, saving, banking, understanding pay and taxes, using credit responsibly, and managing financial risk. | yes | octae-employability-skills-framework (verified); cfpb-building-blocks-2016 (verified); jumpstart-cee-2021 (verified) | yes |

### Domain 10. Access & Equity

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 10.1 Access to Resources | Availability of materials, technology, connectivity, or facilities. | none (domain line only) | otl-standards (needs_replacement) | no |
| 10.2 Participation & Inclusion | Removing barriers to entry for specific groups. | none (domain line only) | otl-standards (needs_replacement) | no |

### Domain 11. Adult & System Capacity

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 11.1 Professional Knowledge & Skill | Adults acquiring new techniques or understanding -- INCLUDING teachers and paid staff, AND volunteers, mentors, coaches, and case managers. | none (domain line only) | learning-forward-2022 (located) | yes |
| 11.2 Instructional Practice Change | Adults implementing what they learned, including adopting new practices such as trauma-informed care (per SAMHSA's Trauma-Informed Approach principles). | none (domain line only) | samhsa-tic-2014 (located); learning-forward-2022 (located) | yes |
| 11.3 Systemic Improvement | Changes in policy, culture, or infrastructure. | none (domain line only) | learning-forward-2022 (located) | no |
| 11.4 Family Engagement Capacity | Implementation of systems, events, or policies BY THE ORGANIZATION to include families in the educational process. | none (domain line only) | epstein-six-types (located) | yes |
| 11.5 Program Participation, Retention & Reach (Output Metric) | Program-level attendance, enrollment, retention, or dosage metrics (e.g., attendance rate, sessions completed, number of youth served). | yes | weiss-little-bouffard-2005 (located); weikart-ypqa (located) | yes |

### Domain 12. Family Strengthening & Basic Needs

| Code | Current definition | Code-level source line | Registry support | Review hint |
|---|---|---|---|---|
| 12.1 Parenting Knowledge & Practices | Caregivers' knowledge of child development or use of specific parenting practices (e.g., positive discipline, home literacy routines). | yes | epstein-six-types (located); cssp-strengthening-families (verified) | no |
| 12.2 Parental Resilience & Caregiver Well-being | Caregivers' own emotional well-being, stress management, or resilience (distinct from the CHILD's mental health in 8.2). | yes | cssp-strengthening-families (verified) | yes |
| 12.3 Caregiver Social Connections & Support Networks | Caregivers building supportive relationships with other parents/caregivers or their broader community. | yes | cssp-strengthening-families (verified) | no |
| 12.4 Home Learning Environment | Family practices that support a child's learning or development at home (e.g., reading routines, consistent schedules). | none (domain line only) | epstein-six-types (located) | no |
| 12.5 Household Economic Stability & Benefits Access | Outcomes related to household income, employment, benefits enrollment (SNAP, TANF, Medicaid, WIC), or financial stability. | yes | cssp-strengthening-families (verified); ascend-2gen (verified) | no |
| 12.6 Food Security & Nutrition Access | Outcomes related to household access to sufficient, healthy food. | yes | usda-hfssm (verified) | no |
| 12.7 Housing Stability | Outcomes related to a family, or a young person living independently, securing or maintaining safe, stable housing. | yes | mckinney-vento (located); ascend-2gen (verified); acf-nytd (verified) | no |

## 4. Structural issues

Evidence comes from four places: the 345 adjudicated gold rows
(`gold/gold-cycle02.csv`, including Severin's "no good fit" codebook-gap tags), the
2.4.0 design-set baseline (`/mnt/project-files/eval/cp-scoring/baseline-2.4.0.json`,
two live runs, strict 88.2%, lenient 92.9%, run-to-run kappa 0.976), CONFUSIONS.md,
and the source registry.

### 4.1 Levels are mixed inside one axis

The twelve domains are organized by four different axes at once (this is the v2
draft's main finding in `v2/STRUCTURE.md` §2, and it still holds for 2.4.0):

| Axis | Domains organized by it |
|---|---|
| Who changes | 11 (adults, organizations), 12 (caregivers) |
| Kind of result | 2 and 3 (experiences and states), 4 (skills), 5 (behaviors and beliefs about learning) vs 1 (demonstrated gains and statuses) |
| Life area | 7 civic, 8 health, 9 college and career |
| Output vs outcome | 11.5 (program counts), 10 (conditions and inputs) |

Most of the 28 CF entries are boundaries between two axes, not between two
constructs: skill vs state (CF-002, CF-003, CF-004), learning vs habits (CF-007),
whose outcome (CF-008, CF-018), output vs outcome (CF-009).

**Codes that mix levels.** Examples of one code spanning topic and kind of result:

- **6.1 Empowerment & Safety**: label and example are about felt safety, the
  definition is about mattering, voice and control (being fixed in PR #31).
- **6.4 Positive Identity**: self-esteem (a self-belief) and purpose (a life
  orientation) in one code, overlapping 4.1.2, 4.1.4 and 5.4 (CF-004).
- **1.6 Grades, Credits, On-Track Status & Graduation**: grades, credits,
  exclusionary discipline, graduation, GED and "academic performance" are five
  different status indicators in one code.
- **2.1 Joy & Emotional Wellness**: enjoyment of the program and general emotional
  wellness (a mental-health construct) in one code. The gold put S071 "higher life
  satisfaction and a sense of flourishing" here only because nothing else fits.
- **8.1 Physical Activity & Nutrition**: 13 gold rows, 9 of them forced fits (sport
  skills, screenings, asthma, first aid, gardening, screen time).

### 4.2 Inconsistent granularity

- Domain 4 has **22** codes on three levels. Domain 10 has **2**, Domain 5 has 4.
- Several SEL pairs are split more finely than coders or the model can separate:
  4.2.1 vs 4.2.2 (the one run-to-run disagreement in SEL, S179), 4.2.3 vs 4.2.4,
  4.5.1 vs 4.5.3 (CF-012). **4.1.1, 4.3.2, 4.3.3 have no gold rows** under the v2
  adjudication, 4.3.4 and 4.5.5 have one each.
- Meanwhile single codes carry several distinct indicators (1.6, 8.1, 11.3, 12.5).

### 4.3 Overlaps

| Overlap | Evidence |
|---|---|
| 1.3 (civics and government, health education) vs 7.1 civic knowledge vs 8.x health | S254 "how a bill becomes a law": gold 7.1, model 1.3. 1.3's definition names civics; so does 7.1. |
| 4.1.4 / 5.4 / 6.4 confidence triangle | CF-004, CF-005; S034 growth mindset: gold v1 4.1.4, v2 academic mindset. CP-01-06 in flight. |
| 3.4 cultural identity vs 4.1.2 identity vs 6.4 positive identity | S036 "a STEM person": gold 4.1.2, model 6.4 (both runs). |
| 9.1 Key Content Knowledge vs Domain 1 subject codes | CF-010: the only difference is framing. 1 gold row. |
| 9.2 Key Cognitive Strategies vs 4.5.3 problem-solving vs Domain 1 | CF-012; no gold rows land cleanly in 9.2. |
| 3.5 / 11.4 / Domain 12 family codes | CF-008; S098 interpretation services: gold 11.4, model 3.5. |
| 7.3 leadership vs 4.4.2 teamwork vs 9.5 | CF-015 (CP-01-06 in flight); S004, S059 leadership rows. |
| 11.3 Systemic Improvement: policy vs partnerships vs community | S154 collective efficacy: gold 11.3, model 6.1. |

### 4.4 Orphans and gaps

- **Constructs with no home** (Severin's codebook-gap tags, 39 rows; 7 closed by
  9.9 and 2.6): independent-living skills and vital documents (5: H046, H048, S120,
  S162, S224), motor and sport skills (5: H082, S068, S255 and the forced S031,
  S074), health care access and condition management (S064, S094), environmental
  stewardship (S013, S045), adult or caregiver education and skills (S118, H078),
  family system navigation (S252), self-advocacy (H060), domain identity (S036),
  family reunification (S024), voting (S182), gratitude (S242), public speaking
  (S132), first aid (S108), faith growth (H079, S125), collective efficacy (S154),
  policy funding (S019), advanced coursework (S159), screen time (H086, also a gap
  in the v2 draft), gardening (S247), and a new community (H063).
- **Codes without a working source** (registry): 7.1, 7.2, 7.3 (CIRCLE "Framework",
  `needs_replacement`), 10.1, 10.2 (OTL, `needs_replacement`), 4.3.4 and 4.5.4
  (`codebook_extensions`), the Domain 8 "SAMHSA (Trauma)" line (CP-05-01), and the
  misattributed "Hill Model" label on 2.1 and 7.4.
- **51 of 87 codes have no code-level source line**; they rely on the domain's
  Framework Basis line.
- **Deferred list** at the bottom of `original.ts` names further gaps (disability
  accommodations, language access, mentoring match quality, broader physical
  health, environment, partnerships, community conditions, system navigation).

### 4.5 Vague or circular definitions

- **10.2 Participation & Inclusion**: "Removing barriers to entry for specific
  groups". Says what the program does, not what outcome is observed.
- **11.3 Systemic Improvement**: "Changes in policy, culture, or infrastructure".
  Covers almost anything at system level.
- **7.1 Civic Skills & Knowledge**: "Understanding how systems work and how to
  navigate them". "Systems" includes school enrollment and benefits, so family
  navigation statements land here (S017, H061).
- **6.3 Constructive Use of Time**: defined only as "outside of this program", so
  returning to or joining activities inside the program has no code (S003 went to
  11.5).
- **4.1.2, 6.4**: circular pair ("understanding self and identity" vs "positive
  identity").
- **11.1 Professional Knowledge & Skill**: the note has to say the label is wrong
  ("not limited to paid/professional staff despite its name").

### 4.6 The gold itself

`gold-cycle02.csv` column `v1_gold` was never moved onto 1.8 and 1.9 after the v1.2.0
subject split. Nine rows (S104, S147, S185, S203, S232, S199, H010, H031, H077)
still say 1.3, so the 2.4.0 baseline counts correct 1.8/1.9 answers as errors. Only
Severin can change adjudicated rows; this has been passed to the CP-scoring thread.

### 4.7 Enum budget

Footprint 147 (12 domains counted twice, 87 subcategories + "none", Subject Area,
target population and confidence enums). STANDARDS S2.3 stops growth at 165 and caps
each cycle at 5 new subcategories. Any restructure with more codes needs the schema
change PLAN.md phase 3 already describes (derive the domain from the code prefix).
