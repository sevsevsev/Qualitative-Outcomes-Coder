// codebooks/original.ts
//
// "Original" youth-development outcomes codebook. Integrates:
// Gholdy Muhammad (Joy & Criticality), Hidi & Renninger (Interest),
// CDC (Connectedness & Physical Health), CASEL (SEL), UChicago (Academic
// Habits, On-Track Indicator), Search Institute (Assets), CIRCLE (Civics),
// ISTE (Digital Citizenship), Dual Continua Model & SAMHSA (Behavioral
// Health/Trauma), Perkins V (Career/CTE), Epstein (Family Engagement),
// National Reading Panel & WIDA (Academic Learning), CSSP Strengthening
// Families & Ascend 2Gen (Family Strengthening), CDC YRBSS (Risk Behavior
// Prevention), WIOA & National Student Clearinghouse (Postsecondary/
// Employment), National Core Arts Standards.
//
// v1.1.0 added Domains 11-12 and several subcategories after a two-pass
// gap analysis (a framework/citation review + an empirical simulation
// against ~94 realistic outcome statements) found the v1.0.0 taxonomy had
// no home for plain academic-skill gains, family/parenting outcomes, or
// risk-behavior-prevention outcomes, among others. See the project's PR
// history for the full gap analysis; lower-priority gaps identified in
// that pass (disability self-advocacy, social capital, environmental
// stewardship, digital access, cross-sector partnership capacity, and a
// few others) were deliberately deferred rather than added here -- see the
// "Deferred for a future revision" note at the bottom of this file.
//
// v1.2.0 (CP-04-01 to CP-04-04, CP-04-07) splits Domain 11's learning codes by subject:
// 11.1 now covers writing as well as reading, 11.3 is re-anchored on ESSA's
// "well-rounded education" definition for the remaining academic subjects,
// and new 11.8 (science, technology & engineering) and 11.9 (arts learning)
// take the two largest subject groups out of 11.3. Grades, GPA and
// unspecified "academic performance" move to 11.6. Domain 11 is listed
// first, keeping its number, because academic outcomes are the top policy
// priority for school and district users.
//
// v2.0.0 (CP-04-08) renumbers every domain to match its place in the list:
// Academic Learning & Achievement becomes Domain 1, old Domains 1-10 each
// move up one (old 1 -> 2, ..., old 10 -> 11), and Domain 12 is unchanged.
// Labels are otherwise identical. The paragraphs above use the old numbers.
// The full map is codebook-refinement/renumbering/v1.2.0-to-v2.0.0.csv;
// exports coded under v1.2.0 or earlier re-import through it (see
// originalV1Numbering.ts).
//
// v2.0.1 (CP-06-01) gives every domain a hint and a plain-language
// `description` for the review UI and the codebook explorer. Neither is sent
// to the model, so coding behavior is unchanged.

import { Codebook } from './types.js';
import { RENUMBERED_IN_VERSION, V1_2_0_CODE_NUMBERS, V1_2_0_DOMAIN_LABELS, V1_2_0_SUBCATEGORY_LABELS } from './originalV1Numbering.js';

export const SUBJECT_AREA_OPTIONS = [
  "N/A / General",
  "English Language Arts (ELA) & Literacy",
  "Mathematics",
  "Science (Natural/Physical)",
  "Computer Science & Technology",
  "Engineering & Robotics",
  "STEM (Integrated/Cross-disciplinary)",
  "Social Studies, History & Civics",
  "Visual & Performing Arts",
  "Health & Physical Education",
  "World Languages",
  "English Language Development (ELD/ESL) for Multilingual Learners",
  "Career & Technical Education (CTE) / Workforce",
  "Early Childhood / Pre-K",
  "Social & Emotional Learning (SEL Only)"
];

export const TARGET_POPULATION_OPTIONS = [
  "students_youth",
  "families_caregivers",
  "educators_staff",
  "mentors_volunteers",
  "partner_organizations",
  "school_district_system",
  "community_neighborhood",
  "multiple_populations",
  "unclear"
];

const definitionsText = `
Domain 1. Academic Learning & Achievement
Framework Basis: ESSA (2015) State academic standards, 20 U.S.C. 6311(b)(1)(C) (reading or language arts, mathematics, science) and "well-rounded education", 20 U.S.C. 7801(52); National Reading Panel & Common Core writing anchors (Literacy); NGSS & CSTA (Science, Technology & Engineering); National Core Arts Standards (Arts); UChicago Consortium On-Track Indicator (Allensworth & Easton); ESSA graduation-rate indicator, 20 U.S.C. 6311(c)(4)(B); Attendance Works; WIDA English Language Development Standards; Head Start Early Learning Outcomes Framework (1.7)
(Note: This domain covers DEMONSTRATED learning gains and enrollment/completion status. It is distinct from Domain 5, which covers behaviors and beliefs ABOUT learning, and from 9.1, which is scoped specifically to college/career-readiness content mastery.)
(Note: Learning codes are split by SUBJECT: 1.1 literacy, 1.2 math, 1.8 science/technology/engineering, 1.9 the arts, and 1.3 every other academic subject. Grades, GPA, credits and "academic performance" with no subject named are a status, not a subject -- use 1.6.)
(Note: This domain is numbered first because academic outcomes are the top priority for many school and district users. The numbering and order of domains in this codebook carry no weight when choosing a code.)
1.1 Literacy: Reading & Writing
   - Definition: Demonstrated growth in reading skill (phonemic awareness, phonics, fluency, vocabulary, comprehension, reading level) or in writing and composition (planning, drafting and revising written work in any genre).
   - Source Framework: Report of the National Reading Panel (NICHD, 2000): alphabetics, fluency, comprehension; Common Core State Standards, College and Career Readiness Anchor Standards for Writing; ESSA State standards for reading or language arts, 20 U.S.C. 6311(b)(1)(C).
   - Note: Writing habits, effort or confidence about writing go to Domain 5. Oral communication and public speaking go to 4.4.1 (or 9.5 in a work context).
   - Example: "Students will improve reading fluency by one grade level." OR "Students will write a well-organized informational essay."
1.2 Numeracy & Mathematical Skill
   - Definition: Demonstrated growth in math skill or grade-level proficiency.
   - Source Framework: ESSA State academic standards for mathematics, 20 U.S.C. 6311(b)(1)(C).
   - Example: "Students will increase math problem-solving skills and grade-level proficiency."
1.3 Knowledge & Skill in Other Academic Subjects
   - Definition: Demonstrated learning of content, concepts or skills in an academic subject other than literacy, math, science/technology/engineering and the arts -- for example history, geography, civics and government, economics, world languages, or health education -- NOT explicitly framed around college/career readiness.
   - Source Framework: ESSA "well-rounded education", 20 U.S.C. 7801(52) (subjects such as civics and government, economics, history, geography, foreign languages, health); NAEP authorization, 20 U.S.C. 9622(b)(2)(D) (additional subject matter).
   - Note: A practical skill with no academic content (cooking technique, bicycle repair) is not a subject: code it to the closest fit at low confidence. Use 9.1 only when the outcome is explicitly framed around college/career readiness.
   - Example: "Students will explain the causes of a major historical event."
1.4 English Language Proficiency & Multilingual Development
   - Definition: Growth in English language proficiency for multilingual learners/English learners (listening, speaking, reading, writing).
   - Source Framework: WIDA English Language Development Standards Framework.
   - Note: This is the inverse of the "World Languages" subject area (a native English speaker learning another language). Use 1.4 for an English learner acquiring English.
   - Example: "Youth will improve their English language proficiency."
1.5 Attendance, Chronic Absence & School Stability
   - Definition: Outcomes related to a STUDENT'S regular attendance, reduced chronic absenteeism, or maintaining school enrollment/stability through disruption (e.g., housing instability, school transitions).
   - Source Framework: Attendance Works Chronic Absence Framework; McKinney-Vento Act (school stability for students experiencing homelessness).
   - Note: For PROGRAM-level attendance/dosage metrics (not a specific student's school attendance), use 11.5 instead.
   - Example: "Program will reduce chronic absenteeism among participating students." OR "Youth experiencing homelessness will maintain school enrollment despite housing disruptions."
1.6 Grades, Credits, On-Track Status & Graduation
   - Definition: Outcomes related to course grades, GPA, course passing or failure, credit accumulation, grade promotion, 9th-grade on-track status, reduced exclusionary discipline (suspension/expulsion), or graduation/completion/re-engagement (including GED). Also use for general "academic performance/achievement" or test scores when no subject is named.
   - Source Framework: UChicago Consortium On-Track Indicator (Allensworth & Easton, 2005; grades and GPA: Allensworth & Easton, 2007); ESSA four-year adjusted cohort graduation rate.
   - Note: A test score or proficiency level in a NAMED subject goes to that subject's code (1.1, 1.2, 1.3, 1.8, 1.9). Grades or GPA go here even when a subject is named -- record the subject in Subject Area.
   - Example: "Students will stay on-track for graduation by earning all required credits." OR "Participants with a GPA below 3.0 will raise their GPA." OR "Youth will re-enroll in school or obtain a GED following release."
1.7 School Readiness & Early Learning
   - Definition: Outcomes for young children (pre-K/early childhood) related to kindergarten readiness, pre-literacy/early language skills, or developmental screening and milestones.
   - Source Framework: Head Start Early Learning Outcomes Framework (Language & Literacy and Cognition domains specifically -- Social-Emotional outcomes for this age group should use Domain 4, and Approaches-to-Learning outcomes should use Domain 5).
   - Example: "Children will demonstrate age-appropriate pre-literacy skills (letter recognition, phonemic awareness)."
1.8 Science, Technology & Engineering
   - Definition: Demonstrated learning in science (life, physical, earth or environmental science), engineering design, or computer science (computing concepts, coding, programming), NOT explicitly framed around college/career readiness.
   - Source Framework: ESSA State academic standards for science, 20 U.S.C. 6311(b)(1)(C); Next Generation Science Standards (science and engineering practices, crosscutting concepts, disciplinary core ideas); CSTA K-12 Computer Science Standards (2017).
   - Note: Interest or curiosity about STEM goes to Domain 2, and STEM identity to 6.4. Responsible and safe technology use goes to 7.5. Use 9.1 only when the outcome is explicitly framed around college/career readiness.
   - Example: "Youth will build and program a simple circuit." OR "Students will explain how local ecosystems respond to change."
1.9 Arts Learning & Performance
   - Definition: Demonstrated learning in an art form (dance, media arts, music, theatre, visual arts): technique, vocabulary, and knowledge of the discipline's forms, history and concepts.
   - Source Framework: National Core Arts Standards (2014): standards for dance, media arts, music, theatre and visual arts, organized by the artistic processes of Creating; Performing/Presenting/Producing; Responding; and Connecting.
   - Note: Use 1.9 for a skill or knowledge GAIN in the art form. Use 2.4 when the outcome is self-expression through making something, and 2.5 when it is presenting finished work or responding to art as an experience rather than a skill gain.
   - Example: "Students will learn and demonstrate fundamental dance vocabulary." OR "Youth will demonstrate technical proficiency on their chosen instrument."

Domain 2. Joy, Interest & Motivation in Learning
Framework Basis: Gholdy Muhammad (Joy) & Hidi/Renninger (Interest); National Core Arts Standards (2.5)
2.1 Joy & Emotional Wellness
   - Definition: Outcomes focused on happiness, fun, the elevation of the spirit, and positive emotional response to the environment.
   - Source Framework: Gholdy Muhammad’s Hill Model (Pursuit 5: Joy).
   - Example: "Students will report having fun and feeling happy during the program."
2.2 Triggered Situational Interest (Curiosity)
   - Definition: Outcomes focused on attention being caught by the environment, asking questions, or wanting to know more.
   - Source Framework: Hidi & Renninger (Phase 1).
   - Example: "Students will be curious and ask questions about the new topic."
2.3 Value & Meaning (Utility Value)
   - Definition: Outcomes where students connect learning to their personal goals, future self, or community relevance.
   - Source Framework: Hidi & Renninger (Phase 3/4) / Eccles (Value Theory).
   - Example: "Students will explain how math skills help them in their daily lives."
2.4 Creative Expression & Making
   - Definition: Outcomes involving self-expression and the application of interest in novel ways -- the act of creating or making something (art, music, writing, design, performance pieces).
   - Source Framework: National Core Arts Standards (Artistic Process: Creating).
   - Note: Use 2.4 for self-expression through making something. A stated skill or knowledge gain in an art form goes to 1.9, and a stated gain in writing skill goes to 1.1.
   - Example: "Students will design their own projects based on their interests."
2.5 Performance, Presentation & Artistic Response
   - Definition: Outcomes involving performing or presenting creative work publicly (exhibitions, recitals, portfolios), or responding to/analyzing art (critique, aesthetic analysis, connecting art to personal or cultural meaning).
   - Source Framework: National Core Arts Standards (Artistic Processes: Performing/Presenting/Producing, Responding, Connecting).
   - Note: Use 2.4 for the act of creating; use 2.5 for presenting/performing finished work or responding to art. A demonstrated skill or knowledge gain in the art form (technique, vocabulary) goes to 1.9.
   - Example: "Youth will present their artwork in a public exhibition."

Domain 3. Belonging, Relationships & School Connectedness
Framework Basis: CDC School Connectedness, Learning for Justice, Epstein's Framework
3.1 School/Program Connectedness (Belonging)
   - Definition: Student perception of being accepted, valued, and included in the school or program community.
   - Example: "Students will feel like they are an important part of the classroom."
3.2 Adult Support & Care
   - Definition: Outcomes related to forming positive, supportive relationships with teachers, mentors, or staff.
   - Example: "Students will identify at least one adult they trust."
3.3 Peer Connection & Social Integration
   - Definition: Outcomes related to forming friendships, peer acceptance, and positive social interaction.
   - Example: "Students will make new friends."
3.4 Cultural Identity & Affirmation (Gap Fill: Learning for Justice / Gholdy Muhammad)
   - Definition: Students express pride in their own identity, heritage, or culture.
   - Source Framework: Learning for Justice (Identity) & Gholdy Muhammad (Pursuit 1).
   - Note: Scoped to the youth's own identity/heritage. For a student's respect toward OTHER people's diverse backgrounds, use 4.3.2 instead.
   - Example: "Students will share stories from their family history with pride."
3.5 Family Partnership & Connection (Gap Fill: Epstein Types 2 & 4)
   - Definition: Outcomes focused on trust, communication, and relationship building BETWEEN families and the program (i.e., the family's relationship with the program itself).
   - Note: This is about the family-program relationship. For the caregiver's own knowledge/practices/well-being, use Domain 12. For the program's own systems for engaging families, use 11.4.
   - Example: "Parents will report feeling more connected to their child's learning process."

Domain 4. Social & Emotional Learning (CASEL-aligned)
Framework Basis: CASEL (Collaborative for Academic, Social, and Emotional Learning)
(Important: Use the specific 4.x.x codes below. Do not use the 4.x category headers.)

4.1 Self-Awareness (Category Header - Do Not Use)
4.1.1 Identifying and naming emotions
   - Definition: Students can recognize and accurately label their own emotions.
   - Example: "Students will be able to identify and name their feelings in challenging situations."
4.1.2 Understanding self & identity
   - Definition: Students develop a realistic sense of self and awareness of their personal and cultural identity.
   - Example: "Students will deepen their understanding of who they are and what is important to them."
4.1.3 Recognizing strengths
   - Definition: Students can identify their own strengths, talents, and areas of competence.
   - Example: "Students will be able to name at least two personal strengths."
4.1.4 Confidence, self-efficacy & growth mindset
   - Definition: Students believe they can succeed, improve with effort, and handle challenges.
   - Note: Use 4.1.4 for general self-confidence/growth mindset and for identity-adjacent "sense of purpose/self-esteem" language that is really about self-belief. Use 5.4 only when tied specifically to schoolwork/grades. Use 6.4 only for broader identity/purpose that is not primarily about confidence or self-belief.
   - Example: "Students will show increased confidence in their ability to tackle difficult tasks."

4.2 Self-Management (Category Header - Do Not Use)
4.2.1 Emotion regulation & impulse control
   - Definition: Students manage strong emotions and control impulses in constructive ways.
   - Example: "Students will use strategies to calm down instead of acting out when upset."
4.2.2 Stress management & coping skills
   - Definition: Students use healthy strategies to cope with stress, frustration, or worry.
   - Example: "Students will practice at least one coping strategy when they feel stressed."
4.2.3 Goal-setting & follow-through
   - Definition: Students set personal goals and work persistently to achieve them.
   - Example: "Students will set an academic goal and take specific steps to reach it."
4.2.4 Organization, persistence & self-discipline
   - Definition: Students manage time, materials, and tasks effectively and stick with work over time, in a GENERAL (non-academic-specific) context.
   - Note: Use 4.2.4 for general organization/persistence. Use 5.2 when the persistence is specifically about schoolwork/academic challenge. Use 5.3 when a specific study/learning technique is named (note-taking, planners, time management for school).
   - Example: "Students will keep track of assignments and complete them on time."

4.3 Social Awareness (Category Header - Do Not Use)
4.3.1 Empathy & perspective-taking
   - Definition: Students understand and care about others’ feelings and viewpoints.
   - Example: "Students will show empathy by considering how peers might feel in a conflict."
4.3.2 Respect for diversity & inclusion
   - Definition: Students appreciate and respect people from diverse backgrounds and identities.
   - Example: "Students will demonstrate respect for peers from different cultures and identities."
4.3.3 Understanding norms & expectations
   - Definition: Students understand social and ethical norms for behavior in different contexts.
   - Example: "Students will learn appropriate ways to behave in classroom, online, and community settings."
4.3.4 Awareness of supports and resources
   - Definition: Students know about and feel comfortable accessing supports and resources around them.
   - Example: "Students will know where to go for academic, mental health, or other support."

4.4 Relationship Skills (Category Header - Do Not Use)
4.4.1 Communication & active listening
   - Definition: Students communicate clearly and listen attentively to others.
   - Example: "Students will practice active listening and clear communication in group work."
4.4.2 Cooperation, teamwork & collaboration
   - Definition: Students work well with others toward shared goals.
   - Note: Focus is on the skill of working together. For friendship/bonding, use 3.3.
   - Example: "Students will collaborate effectively with peers on group projects."
4.4.3 Conflict management & problem-solving in relationships
   - Definition: Students handle INTERPERSONAL conflicts and disagreements in constructive ways.
   - Note: Use 4.4.3 specifically for interpersonal/relational conflict. For general (non-interpersonal) problem-solving, see 4.5.1/4.5.3. For academic/professional analytical problem-solving, see 9.2.
   - Example: "Students will use peaceful strategies to resolve conflicts with peers."
4.4.4 Help-seeking & providing support
   - Definition: Students ask for help when needed and offer help to others.
   - Example: "Students will seek support from adults or peers when they are struggling."
4.4.5 Building and sustaining positive relationships
   - Definition: Students build, maintain, and repair positive relationships over time.
   - Example: "Students will demonstrate skills that help them build and sustain friendships."

4.5 Responsible Decision-Making (Category Header - Do Not Use)
4.5.1 Evaluating options & consequences
   - Definition: Students consider possible options and likely outcomes BEFORE acting, in the moment of a specific decision.
   - Note: Use 4.5.1 for weighing options before a choice. Use 4.5.3 for the fuller problem identification -> solution -> action cycle. Use 4.4.3 when the problem is specifically an interpersonal conflict. Use 9.2 for academic/professional analytical reasoning.
   - Example: "Students will weigh the pros and cons of choices before making decisions."
4.5.2 Ethical and prosocial choices
   - Definition: Students make choices that reflect ethical principles and concern for others.
   - Note: Use 4.5.2 when a *decision* is made in a specific situation. Use 6.2 for general character traits/values (not tied to one situation).
   - Example: "Students will make fair and respectful choices even when no one is watching."
4.5.3 Personal and social problem-solving
   - Definition: Students identify problems, generate solutions, and take constructive action -- the full problem-solving process, not limited to a single decision point.
   - Example: "Students will use a structured problem-solving process to address challenges."
4.5.4 Safety-oriented decisions & risk avoidance
   - Definition: Students make choices that protect their safety and reduce risk.
   - Note: This is the SKILL/decision-making side of risk avoidance. For the outcome of an actual reduction in risk behavior incidence (substance use, violence, risky sexual behavior), see 8.5-8.7.
   - Example: "Students will avoid situations that put their physical or emotional safety at risk."
4.5.5 Contributions to class/program/community wellbeing
   - Definition: Students take small, daily actions to maintain or improve their immediate environment (classroom, program space).
   - Note: For larger community service projects or volunteering, use 7.2.
   - Example: "Students will help clean up the classroom and assist teachers with tasks."

Domain 5. Academic Engagement & Habits
Framework Basis: UChicago Consortium "Academic Mindsets and Behaviors"
(Note: Domain 5 covers behaviors and beliefs ABOUT learning. It does NOT cover demonstrated learning gains or content mastery themselves -- for those, use Domain 1.)
5.1 Academic Behaviors (Engagement)
   - Definition: Observable participation, such as attending class, doing homework, and participating in discussions.
   - Note: For attendance RATE or chronic-absenteeism outcomes specifically, use 1.5 instead.
   - Example: "Students will complete all assigned homework."
5.2 Academic Perseverance (Grit/Tenacity)
   - Definition: The ability to stick with a schoolwork/academic task despite challenges or setbacks.
   - Example: "Students will keep trying to solve a problem even when it is difficult."
5.3 Learning Strategies (Study Skills)
   - Definition: Use of specific methods to improve learning, such as note-taking, time management, or metacognition.
   - Example: "Students will use a planner to organize their assignments."
5.4 Academic Confidence (Self-Efficacy)
   - Definition: Belief in one's ability to succeed in academic tasks.
   - Example: "Students will believe they can succeed in this class."

Domain 6. Positive Youth Development (PYD) & Assets
Framework Basis: Search Institute’s 40 Developmental Assets
6.1 Empowerment & Safety
   - Definition: Youth feel a sense of mattering, voice, and control over their own environment (a felt, individual state).
   - Note: For a student's sense of belonging specifically to the school/program, use 3.1 instead. For empowerment expressed through civic voice/influence, use 7.3.
   - Example: "Youth will feel safe in their neighborhood."
6.2 Positive Values
   - Definition: Internal guiding principles like integrity, honesty, and responsibility, as a general character trait (not tied to one situation).
   - Note: Use 6.2 for general character traits/values. Use 4.5.2 when a specific decision is made in a specific situation. Use 4.3.2 specifically for respect toward others' diversity.
   - Example: "Students will tell the truth even when it is hard."
6.3 Constructive Use of Time
   - Definition: Engagement in enriching activities like arts, sports, or religious/community groups OUTSIDE of this program.
   - Example: "Students will participate in a sports team."
6.4 Positive Identity
   - Definition: A broader sense of self-esteem and purpose, distinct from momentary confidence (4.1.4) or academic confidence (5.4).
   - Note: Use 6.4 for a broad, holistic sense of identity/purpose/self-esteem. Use 4.1.2 when the outcome is specifically about understanding who one is (identity exploration). Use 4.1.4 when the outcome is specifically framed as confidence/self-belief.
   - Example: "Students will feel good about their future."

Domain 7. Civic Engagement & Community
Framework Basis: CIRCLE Framework, Gholdy Muhammad (Criticality), & ISTE Standards
7.1 Civic Skills & Knowledge
   - Definition: Understanding how systems work and how to navigate them.
   - Example: "Students will understand how the local school board makes decisions."
7.2 Community Service & Action
   - Definition: Taking action to improve the community (volunteering, service learning) -- larger or organized service projects.
   - Note: For small, daily classroom/program contributions, use 4.5.5 instead.
   - Example: "Students will volunteer at a local food bank."
7.3 Youth Voice & Leadership
   - Definition: Expressing opinions and influencing decisions.
   - Example: "Students will present their ideas to the principal."
7.4 Criticality & Social Justice (Replaces "Social Responsibility")
   - Definition: Students understand power, equity, and social justice, and analyze systems of oppression or inequality.
   - Source Framework: Gholdy Muhammad’s Hill Model (Pursuit 4: Criticality).
   - Example: "Students will analyze why food deserts exist in their community."
7.5 Digital Citizenship & Safety (Gap Fill: ISTE Standard 2)
   - Definition: Responsible, ethical, and safe behavior in online environments.
   - Example: "Students will understand how to protect their privacy online."

Domain 8. Physical & Behavioral Health
Framework Basis: CDC WSCC (Physical), Dual Continua Model (Mental Health), SAMHSA (Trauma), & CDC Youth Risk Behavior Surveillance System (Risk Behaviors, 8.5-8.7)
8.1 Physical Activity & Nutrition
   - Definition: Engaging in exercise, eating healthy foods, and practicing hygiene.
   - Source Framework: CDC WSCC.
   - Example: "Students will exercise for 60 minutes a day."
8.2 Mental Health Status (Symptom Reduction)
   - Definition: Outcomes related to the reduction of distress, anxiety, depression, or specific behavioral symptoms, in the youth themselves.
   - Source Framework: Dual Continua Model (Keyes) - The "Illness" Continuum.
   - Note: Use this for *state of being* (feeling less anxious). Use 4.2 for *skills* (learning to cope). For a CAREGIVER's own stress/burnout (not the youth's), use 12.2 instead.
   - Example: "Students will report lower levels of anxiety." OR "Students will exhibit fewer disruptive outbursts."
8.3 Healing & Trauma Recovery
   - Definition: Outcomes related to a YOUTH processing trauma, feeling psychologically safe, and moving toward recovery.
   - Source Framework: National Child Traumatic Stress Network (NCTSN) Core Curriculum.
   - Note: For an ORGANIZATION/staff adopting trauma-informed practices (per SAMHSA's Trauma-Informed Approach principles), that is a practice/systems change -- use 11.2 instead.
   - Example: "Youth will process past traumatic events in a safe environment."
8.4 Access to Mental Health Services
   - Definition: The actual utilization of counseling, therapy, or crisis intervention.
   - Source Framework: CDC WSCC (Counseling, Psychological, and Social Services).
   - Example: "Students will meet weekly with a licensed social worker."
8.5 Substance Use Prevention & Reduction
   - Definition: Outcomes related to preventing or reducing youth tobacco, alcohol, vaping, or other drug use.
   - Source Framework: CDC Youth Risk Behavior Surveillance System (YRBSS); SAMHSA Strategic Prevention Framework.
   - Example: "Youth will report reduced vaping and alcohol use."
8.6 Sexual & Reproductive Health Behaviors
   - Definition: Outcomes related to sexual risk behavior, teen pregnancy prevention, or reproductive/sexual health knowledge.
   - Source Framework: CDC YRBSS.
   - Example: "Youth will demonstrate knowledge of methods to prevent unintended pregnancy and STIs."
8.7 Violence, Bullying & Injury Prevention
   - Definition: Outcomes related to reducing involvement in fighting, bullying (as perpetrator or victim), community violence, or unintentional injury.
   - Source Framework: CDC YRBSS; CDC & U.S. Dept. of Education, "Bullying Surveillance Among Youths: Uniform Definitions for Public Health and Recommended Data Elements" (2014).
   - Example: "Youth will reduce involvement in physical fights at school."
8.8 Justice Involvement, Diversion & Reentry
   - Definition: Outcomes related to avoiding justice-system involvement, successful diversion, or successful reentry/reduced recidivism after justice involvement.
   - Source Framework: Council of Juvenile Correctional Administrators (CJCA) White Paper, "Defining and Measuring Recidivism" (2009, OJJDP-supported).
   - Note: This is often the PRIMARY outcome for juvenile-justice and reentry programs -- do not leave these uncoded just because they are legal/systems-flavored language.
   - Example: "Youth will reduce recidivism and avoid re-arrest within 12 months of program completion." OR "Youth will successfully complete probation requirements."

Domain 9. College & Career Readiness
Framework Basis: David Conley’s "Four Keys" & Perkins V (CTE Framework); National Student Clearinghouse Research Center & WIOA (9.7-9.8)
(Note: Conley's fourth key, "Key Learning Skills and Techniques," is deliberately routed to Domain 5 (5.2, 5.3) and Domain 4 (4.2.3, 4.2.4) rather than duplicated here.)
9.1 Key Content Knowledge
   - Definition: Mastery of core subjects EXPLICITLY FRAMED around post-secondary/college readiness.
   - Note: Use 9.1 only when the outcome is explicitly framed around college/career readiness. For general content learning not framed that way (e.g., a younger student, or a general enrichment program), use the subject's Domain 1 code (1.1, 1.2, 1.3, 1.8 or 1.9).
   - Example: "Students will master Algebra I concepts."
9.2 Key Cognitive Strategies
   - Definition: Critical thinking, research, and problem formulation skills relevant to career/college.
   - Example: "Students will analyze conflicting sources of information."
9.3 Transition Knowledge & Skills
   - Definition: Understanding the bureaucratic PROCESS of transitioning to college/career (applications, financial aid, resumes).
   - Note: This is the knowledge/process side. For the enrollment/completion outcome itself, use 9.7. For actual employment, use 9.8.
   - Example: "Students will complete the FAFSA."
9.4 Career Awareness & Exploration (Perkins V)
   - Definition: Developing knowledge of career paths, conducting interest inventories, and exploring potential futures.
   - Example: "Students will research three different career paths they are interested in."
9.5 Employability Skills (Perkins V / Soft Skills)
   - Definition: General skills necessary for success in the workplace, such as professionalism, workplace communication, and interview skills.
   - Note: Use this instead of Domain 4 (SEL) when the context is explicitly professional/work-readiness.
   - Example: "Students will demonstrate professional etiquette during a mock interview."
9.6 Technical Skills & Work-Based Learning (Perkins V)
   - Definition: Acquisition of specific industry skills, certifications, or completion of internships/apprenticeships (the TRAINING outcome).
   - Note: For actual job placement/retention/earnings after training, use 9.8.
   - Example: "Students will earn an industry-recognized certification in coding." OR "Students will complete a 6-week internship."
9.7 Postsecondary Enrollment, Persistence & Completion
   - Definition: Outcomes related to college/postsecondary matriculation, persistence (e.g., first-to-second-year), or credential/degree completion.
   - Source Framework: National Student Clearinghouse Research Center High School Benchmarks.
   - Example: "80% of graduates will enroll in college the fall after high school graduation."
9.8 Employment Placement, Retention & Earnings
   - Definition: Outcomes related to obtaining employment, retaining a job, or wage/earnings gains.
   - Source Framework: WIOA Title I Youth Primary Indicators of Performance (34 CFR 463.155).
   - Example: "Youth will obtain and retain employment for at least 6 months after program completion."

Domain 10. Access & Equity
Framework Basis: Opportunity-to-Learn (OTL) Standards
10.1 Access to Resources
   - Definition: Availability of materials, technology, connectivity, or facilities.
   - Example: "Students will have access to a laptop for homework."
10.2 Participation & Inclusion
   - Definition: Removing barriers to entry for specific groups.
   - Example: "The program will be accessible to students with disabilities."

Domain 11. Adult & System Capacity
Framework Basis: Learning Forward Standards & Epstein Type 3/6; Weikart Center Youth Program Quality Assessment (11.5)
11.1 Professional Knowledge & Skill
   - Definition: Adults acquiring new techniques or understanding -- INCLUDING teachers and paid staff, AND volunteers, mentors, coaches, and case managers.
   - Note: This code is not limited to paid/"professional" staff despite its name -- it covers any adult supporting youth in a program capacity.
   - Example: "Teachers will learn new classroom management strategies." OR "Mentors will report increased confidence supporting youth from different cultural backgrounds."
11.2 Instructional Practice Change
   - Definition: Adults implementing what they learned, including adopting new practices such as trauma-informed care (per SAMHSA's Trauma-Informed Approach principles).
   - Example: "Teachers will use the new strategies in their lessons."
11.3 Systemic Improvement
   - Definition: Changes in policy, culture, or infrastructure.
   - Example: "The school will adopt a new discipline policy."
11.4 Family Engagement Capacity (Gap Fill: Epstein)
   - Definition: Implementation of systems, events, or policies BY THE ORGANIZATION to include families in the educational process.
   - Note: This is the organization's systems/capacity. For the caregiver's own knowledge/practices, use Domain 12. For the family-program relationship itself, use 3.5.
   - Example: "The program will establish a Parent Advisory Council."
11.5 Program Participation, Retention & Reach (Output Metric)
   - Definition: Program-level attendance, enrollment, retention, or dosage metrics (e.g., attendance rate, sessions completed, number of youth served).
   - Source Framework: Weikart Center Youth Program Quality Assessment; Harvard Family Research Project (now archived under Global Family Research Project, 2017-) out-of-school-time participation dimensions.
   - Note: These are program OUTPUTS, not youth outcomes. Use this code rather than forcing a dosage/attendance statistic into an unrelated youth-outcome domain, and rather than marking it "uncoded" -- it is a real, codeable statement; it simply does not describe a change in a young person.
   - Example: "Program will maintain 85% average daily attendance across all sites." OR "Match pairs will meet consistently for at least 12 months."

Domain 12. Family Strengthening & Basic Needs
Framework Basis: CSSP Strengthening Families Protective Factors Framework; Ascend at the Aspen Institute Two-Generation (2Gen) Approach; Epstein Type 1 (Parenting)
(Note: This domain covers the CAREGIVER'S OWN knowledge, well-being, and material stability. It is distinct from 3.5, which covers the family's relationship WITH the program, and from 11.4, which covers the organization's systems for engaging families.)
12.1 Parenting Knowledge & Practices
   - Definition: Caregivers' knowledge of child development or use of specific parenting practices (e.g., positive discipline, home literacy routines).
   - Source Framework: CSSP Strengthening Families (Knowledge of Parenting and Child Development); Epstein Type 1 (Parenting).
   - Example: "Parents will increase their understanding of child developmental milestones." OR "Caregivers will demonstrate use of positive discipline strategies at home."
12.2 Parental Resilience & Caregiver Well-being
   - Definition: Caregivers' own emotional well-being, stress management, or resilience (distinct from the CHILD's mental health in 8.2).
   - Source Framework: CSSP Strengthening Families (Parental Resilience).
   - Example: "Families of children with disabilities will report reduced caregiver stress and burnout."
12.3 Caregiver Social Connections & Support Networks
   - Definition: Caregivers building supportive relationships with other parents/caregivers or their broader community.
   - Source Framework: CSSP Strengthening Families (Social Connections).
   - Example: "Parents will build a support network with other caregivers in the program."
12.4 Home Learning Environment
   - Definition: Family practices that support a child's learning or development at home (e.g., reading routines, consistent schedules).
   - Example: "Parents will read to their child at least 3 times per week."
12.5 Household Economic Stability & Benefits Access
   - Definition: Outcomes related to household income, employment, benefits enrollment (SNAP, TANF, Medicaid, WIC), or financial stability.
   - Source Framework: Ascend 2Gen Approach (Economic Assets); CSSP Strengthening Families (Concrete Support in Times of Need).
   - Example: "Families will connect with case management and access public benefits."
12.6 Food Security & Nutrition Access
   - Definition: Outcomes related to household access to sufficient, healthy food.
   - Source Framework: USDA ERS Household Food Security Survey Module.
   - Example: "Families will report reduced food insecurity and increased access to healthy food."
12.7 Housing Stability
   - Definition: Outcomes related to a family securing or maintaining safe, stable housing.
   - Source Framework: McKinney-Vento Act (housing instability definition).
   - Example: "Families will secure stable, safe housing within 90 days of program enrollment."
`;

const rulesText = `
You are an expert qualitative data coder specializing in youth development programs.
Your task is to analyze a batch of outcome statements and code them according to the provided taxonomy/codebook.

RULES:
1. Input is a JSON array of objects. Each object has "row_id", "outcome_text", and optionally "group".
2. For each item:
   - Determine if it contains multiple distinct outcomes (split_needed: "yes" or "no").
   - If "yes" (e.g. "Students will improve math scores AND make new friends"):
     - Create multiple "split_items".
     - Assign codes to each split item separately.
   - If "no":
     - Create a single "split_item" with the original text.
   - SPLIT AGGRESSIVELY when a sentence bundles distinct constructs, even if they are only loosely joined (e.g. "Youth will demonstrate improved frustration tolerance during homework time, leading to more assignments completed on time" bundles an SEL construct and an academic-behavior construct -- split it rather than picking just one and silently discarding the other).
   - Do NOT split off the means, activity, or setting through which an outcome is reached. "By designing public murals with local artists, youth will develop pride in their neighborhood" is ONE outcome (pride); the mural work is how it happens, not a second outcome to code as 2.4 or 2.5. Split only when the statement names two or more results.
3. CODING PROCESS for each item:
   - Select the BEST FIT "Primary Domain" and "Primary Subcategory" from the codebook.
   - Assign a "Confidence" level (high, medium, low, none). Confidence says how well the codebook fits the statement, not how sure you are of your reading of it:
     - high: the statement clearly matches the chosen subcategory's definition or example.
     - medium: a reasonable best fit, but the statement only partly matches the definition or goes beyond it.
     - low: a forced placement, where no subcategory really covers the construct (e.g. culinary knife skills, organizational branding, or another construct no subcategory names). Do NOT use high just because the chosen subcategory is the closest one available.
     - none: only for uncoded items (see below).
   - "Uncoded": Set to true IF the text is vague, irrelevant, or does not fit any domain (e.g. "N/A", "See above", "Improve outcomes for students"). Do NOT mark something uncoded merely because it is a program-level output/dosage metric (attendance rate, number served, sessions completed) -- those belong in 11.5 or 1.5, not uncoded. Do NOT mark something uncoded merely because it uses faith-specific or spiritual language -- route it to the closest secular construct (typically 6.2 Positive Values, 6.4 Positive Identity, 3.1 Connectedness, or 7.2 Community Service, depending on what the statement is actually describing) rather than leaving it uncoded.
   - Also set "Uncoded" to true for text that states no result at all: a header or sentence fragment ("Participants will show growth in the following areas:"), a bare program name or label ("Summer Enrichment Program"), a data-collection or process note, or a statement about the evaluation itself ("Survey questions are aligned with these outcomes").
   - Whenever "Uncoded" is true, set primary_confidence to "none" and primary_subcategory to "none". Whenever you assign a real code, set "Uncoded" to false and use high, medium, or low -- never "none". (The schema makes you name a primary_domain even for uncoded items; it is discarded.)

   - "Target Population":
     - Default to "students_youth" for outcomes about participants, children, or students.
     - Use "families_caregivers" ONLY if parents/families are the subject (e.g. "Parents will attend...").
     - Use "educators_staff" ONLY if teachers/staff are the subject (e.g. "Staff will learn...").
     - Use "mentors_volunteers" for outcomes about volunteers, mentors, or coaches specifically (these may still code to Domain 11, per 11.1's note that it is not limited to paid staff).

   - "Subject Area" (Based on NCES SCED & Common Core Categories):
     - "English Language Arts (ELA) & Literacy": Reading, writing, journalism, literature, communication skills.
     - "Mathematics": Numeracy, algebra, geometry, statistics, calculus, financial literacy.
     - "Science (Natural/Physical)": Biology, chemistry, physics, environmental science, earth science (NGSS).
     - "Computer Science & Technology": Coding, software engineering, digital literacy, IT skills (CSTA).
     - "Engineering & Robotics": Mechanical/electrical engineering, design process, robotics (NGSS Engineering).
     - "STEM (Integrated/Cross-disciplinary)": Use ONLY if the outcome explicitly integrates multiple STEM disciplines (e.g. "Math and Science") or is a general STEM program outcome not specific to one subject.
     - "Social Studies, History & Civics": History, geography, government, economics, cultural studies (NCSS).
     - "Visual & Performing Arts": Dance, music, theater, visual arts, media arts (National Core Arts Standards).
     - "Health & Physical Education": Physical activity, nutrition, sexual health, personal health (SHAPE).
     - "World Languages": A native/primary English speaker learning ANOTHER language (ACTFL).
     - "English Language Development (ELD/ESL) for Multilingual Learners": An English learner acquiring ENGLISH specifically (WIDA). This is the opposite direction from "World Languages" -- do not confuse them.
     - "Career & Technical Education (CTE) / Workforce": Vocational skills, career prep, internships, soft skills for work (Perkins V).
     - "Early Childhood / Pre-K": Use for outcomes about children below kindergarten age, alongside Domain 1.7.
     - "Social & Emotional Learning (SEL Only)": Use ONLY if the outcome is specifically about SEL skills (Domain 4) AND no other academic subject is mentioned.
     - "N/A / General": Use for outcomes about belonging, fun, safety, or operations that are not tied to a curricular subject.
   - Subject Area must agree with a Domain 1 learning code: 1.1 -> "English Language Arts (ELA) & Literacy"; 1.2 -> "Mathematics"; 1.8 -> "Science (Natural/Physical)", "Computer Science & Technology", "Engineering & Robotics" or "STEM (Integrated/Cross-disciplinary)"; 1.9 -> "Visual & Performing Arts"; 1.3 -> "Social Studies, History & Civics", "World Languages" or "Health & Physical Education" (never "N/A / General").

4. OUTPUT FORMAT:
   - Return a strictly valid JSON object.
   - Root property: "coded_items" (array).
   - Match the schema provided in the tool definition exactly.

CRITICAL for Domain 4 (SEL):
- Do NOT use category headers like "4.1 Self-Awareness".
- You MUST use the specific sub-codes like "4.1.1 Identifying and naming emotions".

5. SEL DEEP DIVE & DISAMBIGUATION (Domain 4):
   - 4.2.1 (Emotion Reg) vs 4.2.2 (Stress Mgmt): Use 4.2.1 for immediate impulse control/calming down. Use 4.2.2 for applying specific coping strategies/tools for stress.
   - 4.2.3 (Goals) vs 4.2.4 (Persistence): Use 4.2.3 for the act of planning/setting the goal. Use 4.2.4 for the act of sticking with it/working hard.
   - 4.3.1 (Empathy) vs 4.4.1 (Active Listening): Empathy is internal understanding. Active listening is the demonstrated behavior.
   - 4.5.2 (Ethical Choices) vs 6.2 (Positive Values): Use 4.5.2 when a *decision* is made in a specific situation. Use 6.2 for general character traits/values.
   - 4.5.1 (Evaluating Options) vs 4.5.3 (Problem-Solving) vs 4.4.3 (Relationship Conflict) vs 9.2 (Cognitive Strategies): Use 4.5.1 for weighing options before one decision. Use 4.5.3 for the fuller identify->solve->act cycle. Use 4.4.3 specifically when the problem is interpersonal conflict. Use 9.2 for academic/professional analytical reasoning.

SPECIFIC CODING RULES & TIE-BREAKERS:
1. SKILL vs. STATE:
   - Domain 4 (SEL) is for SKILLS/COMPETENCIES (e.g., "Student uses coping strategies").
   - Domain 2 (Joy) & Domain 3 (Belonging) are for EXPERIENCES/STATES (e.g., "Student feels happy", "Student feels safe").
   - Do NOT code a feeling ("I feel confident") as a skill unless the text implies a growth in capacity.

2. SEL vs. MENTAL HEALTH:
   - Use 4.2.2 (Stress Management) when a student *learns/uses a tool* to cope.
   - Use 8.2 (Mental Health Status) when the outcome is a *reduction in symptoms* (e.g., "decreased anxiety") in the YOUTH themselves. For a caregiver's own stress/burnout, use 12.2.

3. GENERAL vs. ACADEMIC CONFIDENCE:
   - Use 4.1.4 for general self-confidence or growth mindset.
   - Use 5.4 (Academic Confidence) ONLY for confidence specifically related to schoolwork/grades.

4. 4.4.2 (Cooperation) vs. 3.3 (Peer Connection):
   - Use 4.4.2 for the *skill* of working together (teamwork).
   - Use 3.3 for the *relational outcome* of making friends or feeling accepted.

5. ACADEMIC MINDSET/BEHAVIOR (Domain 5) vs. ACADEMIC LEARNING (Domain 1):
   - Domain 5 is about behaviors and beliefs ABOUT learning (attending class, sticking with hard problems, believing you can succeed).
   - Domain 1 is about a DEMONSTRATED learning gain itself (reading fluency improved, math proficiency increased, on-track/graduation status).
   - "Students will complete their homework" -> 5.1. "Students will improve their reading level" -> 1.1. These are different constructs even when they appear in the same sentence -- split if both are present.

5b. WHICH DOMAIN 1 CODE (subject decides the learning code):
   - A learning gain, test score or proficiency level in a NAMED subject goes to that subject's code: reading or writing -> 1.1; math -> 1.2; science, engineering or computer science -> 1.8; an art form -> 1.9; any other academic subject (history, civics, geography, economics, world languages, health education) -> 1.3.
   - Grades, GPA, course passing/failure and credits -> 1.6, even when a subject is named (record the subject in Subject Area).
   - "Academic performance/achievement", grade-level proficiency or test scores with NO subject named -> 1.6.
   - Arts: a technique or knowledge gain in the art form -> 1.9; self-expression through making -> 2.4; presenting finished work or responding to art as an experience -> 2.5. If a statement names both a skill gain and a performance or creation, split it.
   - Writing: a stated gain in writing skill -> 1.1; creative writing as self-expression, with no stated skill gain -> 2.4.
   - A statement naming several subjects: code the most specific subject as primary and the others as secondary codes (or split if they are separate outcomes).

6. FAMILY-PROGRAM RELATIONSHIP (3.5) vs. FAMILY ENGAGEMENT CAPACITY (11.4) vs. FAMILY STRENGTHENING (Domain 12):
   - 3.5: the family's trust/connection/communication WITH the program.
   - 11.4: the ORGANIZATION's systems/policies for engaging families (e.g., "will establish a Parent Advisory Council").
   - Domain 12: the caregiver's OWN knowledge, well-being, home practices, or material/economic stability -- not about the program relationship at all.

7. OUTPUT vs. OUTCOME:
   - A dosage/reach/attendance-rate statement about the PROGRAM (not a specific student) is an output, not a youth outcome. Code these to 11.5, not to an unrelated domain and not to "uncoded."
   - A specific STUDENT's attendance/chronic-absence outcome goes to 1.5 instead.

CRITICAL for Formatting:
- Ensure the 'primary_domain' string exactly matches the codebook headers (e.g. "Domain 2. Joy, Interest & Motivation in Learning").
- Ensure the 'primary_subcategory' string exactly matches the codebook items (e.g. "2.1 Joy & Emotional Wellness").
- This codebook has 12 domains (not 10) -- Domain 1 (Academic Learning & Achievement) and Domain 12 (Family Strengthening & Basic Needs) are full domains, not subcategories of Domain 5 or Domain 3. Do not skip them.
- Domain numbers and their order carry no weight when choosing a code.
`;

export const originalCodebook: Codebook = {
  id: 'original',
  version: '2.0.1',
  label: 'Youth Outcomes Codebook',
  // The prompt keeps the old name so renaming the codebook (2026-09-24)
  // did not change what the model is sent.
  promptLabel: 'Original (Youth Development)',
  rulesText,
  definitionsText,
  capabilities: {
    hasSubcategories: true,
    hasSubjectArea: true,
    hasTargetPopulation: true,
  },
  subjectAreaOptions: SUBJECT_AREA_OPTIONS,
  targetPopulationOptions: TARGET_POPULATION_OPTIONS,
  // Labels from older exports. v1.2.0 and earlier used the old domain
  // numbers (CP-04-08); those map one-to-one by label. The three v1.1.1
  // labels below were renamed or split in v1.2.0 (CP-04-01, CP-04-02): an
  // old 11.3 row goes to the new code for its subject, and any other subject
  // lands in 1.3, where the review table flags a subject it doesn't cover.
  legacyDomains: V1_2_0_DOMAIN_LABELS.map(([from, to]) => ({ from, to })),
  legacyCodeNumbers: { before: RENUMBERED_IN_VERSION, codes: V1_2_0_CODE_NUMBERS },
  legacySubcategories: [
    ...V1_2_0_SUBCATEGORY_LABELS.map(([from, to]) => ({ from, to })),
    { from: "11.1 Literacy & Reading Skill", to: "1.1 Literacy: Reading & Writing" },
    { from: "11.6 Credit Accumulation, On-Track Status & Graduation", to: "1.6 Grades, Credits, On-Track Status & Graduation" },
    {
      from: "11.3 General Content Knowledge & Conceptual Understanding",
      to: "1.3 Knowledge & Skill in Other Academic Subjects",
      bySubjectArea: {
        "Science (Natural/Physical)": "1.8 Science, Technology & Engineering",
        "Computer Science & Technology": "1.8 Science, Technology & Engineering",
        "Engineering & Robotics": "1.8 Science, Technology & Engineering",
        "STEM (Integrated/Cross-disciplinary)": "1.8 Science, Technology & Engineering",
        "Visual & Performing Arts": "1.9 Arts Learning & Performance",
      },
    },
  ],
  domains: [
    {
      code: "Domain 1. Academic Learning & Achievement",
      hint: "DEMONSTRATED learning gains and enrollment/completion status -- distinct from Domain 5 (behaviors/beliefs about learning) and 9.1 (content mastery explicitly framed around college/career readiness). Learning codes are split by subject (1.1 literacy, 1.2 math, 1.8 science/tech/engineering, 1.9 arts, 1.3 other subjects); grades, GPA and unspecified academic performance go to 1.6.",
      description: "Outcomes where young people show what they have learned: skill gains in a subject (literacy, math, science and technology, the arts, and other subjects), English language development, and early learning, plus school status measures such as attendance, grades, credits and graduation.",
      subcategories: [
        {
          code: "1.1 Literacy: Reading & Writing",
          hint: "Reading skill or written composition. Writing habits/confidence -> Domain 5; public speaking -> 4.4.1.",
          subjectAreas: ["English Language Arts (ELA) & Literacy"],
        },
        {
          code: "1.2 Numeracy & Mathematical Skill",
          subjectAreas: ["Mathematics"],
        },
        {
          code: "1.3 Knowledge & Skill in Other Academic Subjects",
          hint: "History, civics, geography, economics, world languages, health education, and other subjects not covered by 1.1, 1.2, 1.8 or 1.9. vs 9.1: use 9.1 only when explicitly framed around college/career readiness.",
          subjectAreas: ["Social Studies, History & Civics", "World Languages", "Health & Physical Education"],
        },
        {
          code: "1.4 English Language Proficiency & Multilingual Development",
          hint: "An English learner acquiring English (WIDA). Opposite direction from the \"World Languages\" subject area.",
        },
        {
          code: "1.5 Attendance, Chronic Absence & School Stability",
          hint: "A specific STUDENT's attendance. For program-level dosage/reach, use 11.5 instead.",
        },
        {
          code: "1.6 Grades, Credits, On-Track Status & Graduation",
          hint: "Includes grades, GPA and course passing even when a subject is named, and general \"academic performance\" with no subject named. A test score in a named subject goes to that subject's code.",
        },
        {
          code: "1.7 School Readiness & Early Learning",
          hint: "Pre-K/early-childhood language & cognition outcomes. Social-emotional -> Domain 4; approaches to learning -> Domain 5.",
        },
        {
          code: "1.8 Science, Technology & Engineering",
          hint: "Science, engineering design, computing and coding. STEM interest -> Domain 2; STEM identity -> 6.4; safe tech use -> 7.5.",
          subjectAreas: ["Science (Natural/Physical)", "Computer Science & Technology", "Engineering & Robotics", "STEM (Integrated/Cross-disciplinary)"],
        },
        {
          code: "1.9 Arts Learning & Performance",
          hint: "A technique or knowledge gain in an art form. Self-expression through making -> 2.4; presenting or responding to art as an experience -> 2.5. Split a statement that names both a skill gain and a performance.",
          subjectAreas: ["Visual & Performing Arts"],
        },
      ],
    },
    {
      code: "Domain 2. Joy, Interest & Motivation in Learning",
      hint: "EXPERIENCES/STATES (e.g. \"feels happy\"), not skills -- see Domain 4 for SEL skills.",
      description: "Outcomes about how young people feel about learning: enjoyment, curiosity, seeing learning as meaningful, and expressing themselves by creating, performing or responding to creative work.",
      subcategories: [
        { code: "2.1 Joy & Emotional Wellness" },
        { code: "2.2 Triggered Situational Interest (Curiosity)" },
        { code: "2.3 Value & Meaning (Utility Value)" },
        {
          code: "2.4 Creative Expression & Making",
          hint: "The act of creating/making as self-expression. For presenting, performing, or responding to finished work, use 2.5 instead. A stated skill gain in an art form -> 1.9; in writing -> 1.1.",
        },
        {
          code: "2.5 Performance, Presentation & Artistic Response",
          hint: "vs 2.4: use 2.5 for performing/presenting/exhibiting finished work or responding to art, not the act of creating it. A stated skill or knowledge gain in the art form -> 1.9.",
        },
      ],
    },
    {
      code: "Domain 3. Belonging, Relationships & School Connectedness",
      hint: "EXPERIENCES/STATES (e.g. \"feels safe\", \"feels connected\"), not skills -- see Domain 4 for SEL skills.",
      description: "Outcomes about the relationships around a young person: feeling part of the school or program, supportive adults, friendships with peers, pride in their own identity and culture, and the family's connection with the program.",
      subcategories: [
        { code: "3.1 School/Program Connectedness (Belonging)" },
        { code: "3.2 Adult Support & Care" },
        {
          code: "3.3 Peer Connection & Social Integration",
          hint: "vs 4.4.2 (Cooperation): use 3.3 for the relational outcome of making friends/feeling accepted; use 4.4.2 for the skill of working together.",
        },
        {
          code: "3.4 Cultural Identity & Affirmation",
          hint: "Scoped to the youth's OWN identity/heritage. For respect toward others' diversity, use 4.3.2 instead.",
        },
        {
          code: "3.5 Family Partnership & Connection",
          hint: "The family's relationship WITH the program. For the caregiver's own knowledge/well-being, use Domain 12. For the org's own family-engagement systems, use 11.4.",
        },
      ],
    },
    {
      code: "Domain 4. Social & Emotional Learning (CASEL-aligned)",
      hint: "SKILLS/COMPETENCIES (e.g. \"uses coping strategies\"). Use the specific 4.x.x sub-codes only, never the 4.x category headers. Don't code a feeling as a skill unless the text implies growth in capacity.",
      description: "Outcomes where young people build social and emotional skills, organized by CASEL's five competencies: self-awareness, self-management, social awareness, relationship skills and responsible decision-making.",
      subcategories: [
        { code: "4.1.1 Identifying and naming emotions" },
        { code: "4.1.2 Understanding self & identity" },
        { code: "4.1.3 Recognizing strengths" },
        {
          code: "4.1.4 Confidence, self-efficacy & growth mindset",
          hint: "vs 5.4 (Academic Confidence): use 4.1.4 for general self-confidence/growth mindset; use 5.4 only when tied specifically to schoolwork/grades. vs 6.4: use 6.4 for broader identity/purpose not primarily about confidence.",
        },
        {
          code: "4.2.1 Emotion regulation & impulse control",
          hint: "vs 4.2.2: use for immediate impulse control/calming down, not applying a specific coping strategy over time.",
        },
        {
          code: "4.2.2 Stress management & coping skills",
          hint: "vs 4.2.1: use when a student learns/applies a specific coping tool, not momentary impulse control. vs 8.2 (Mental Health Status): use 4.2.2 for learning/using a coping skill; use 8.2 for a reported reduction in symptoms (e.g. \"decreased anxiety\").",
        },
        {
          code: "4.2.3 Goal-setting & follow-through",
          hint: "vs 4.2.4: use for the act of planning/setting a goal, not sticking with it.",
        },
        {
          code: "4.2.4 Organization, persistence & self-discipline",
          hint: "General (non-academic-specific) persistence. vs 4.2.3: the act of sticking with a goal, not setting it. vs 5.2: use 5.2 when specifically about schoolwork. vs 5.3: use 5.3 when a specific study technique is named.",
        },
        {
          code: "4.3.1 Empathy & perspective-taking",
          hint: "vs 4.4.1 (Active Listening): empathy is internal understanding of others' feelings; active listening is the demonstrated behavior.",
        },
        { code: "4.3.2 Respect for diversity & inclusion" },
        { code: "4.3.3 Understanding norms & expectations" },
        { code: "4.3.4 Awareness of supports and resources" },
        {
          code: "4.4.1 Communication & active listening",
          hint: "vs 4.3.1 (Empathy): this is the demonstrated behavior of listening/communicating, not internal understanding.",
        },
        {
          code: "4.4.2 Cooperation, teamwork & collaboration",
          hint: "Focus is on the skill of working together. For friendship/bonding, use 3.3 (Peer Connection) instead.",
        },
        {
          code: "4.4.3 Conflict management & problem-solving in relationships",
          hint: "Specifically INTERPERSONAL conflict. For general problem-solving, see 4.5.1/4.5.3. For academic/professional analytical reasoning, see 9.2.",
        },
        { code: "4.4.4 Help-seeking & providing support" },
        { code: "4.4.5 Building and sustaining positive relationships" },
        {
          code: "4.5.1 Evaluating options & consequences",
          hint: "Weighing options before ONE decision. vs 4.5.3: use 4.5.3 for the fuller identify->solve->act cycle. vs 4.4.3: use 4.4.3 when the problem is interpersonal conflict.",
        },
        {
          code: "4.5.2 Ethical and prosocial choices",
          hint: "vs 6.2 (Positive Values): use 4.5.2 when a decision is made in a specific situation; use 6.2 for general character traits/values.",
        },
        { code: "4.5.3 Personal and social problem-solving" },
        { code: "4.5.4 Safety-oriented decisions & risk avoidance" },
        {
          code: "4.5.5 Contributions to class/program/community wellbeing",
          hint: "For small, daily classroom/program contributions. For larger community service projects or volunteering, use 7.2 instead.",
        },
      ],
    },
    {
      code: "Domain 5. Academic Engagement & Habits",
      hint: "Behaviors/beliefs ABOUT learning, not the learning gain itself -- see Domain 1 for demonstrated academic skill gains.",
      description: "Outcomes about how young people approach learning: engagement in class, persistence with schoolwork, study and learning strategies, and confidence about academics.",
      subcategories: [
        {
          code: "5.1 Academic Behaviors (Engagement)",
          hint: "For a specific attendance-RATE or chronic-absence outcome, use 1.5 instead.",
        },
        { code: "5.2 Academic Perseverance (Grit/Tenacity)" },
        { code: "5.3 Learning Strategies (Study Skills)" },
        {
          code: "5.4 Academic Confidence (Self-Efficacy)",
          hint: "vs 4.1.4 (general Confidence): use 5.4 ONLY for confidence specifically about schoolwork/grades.",
        },
      ],
    },
    {
      code: "Domain 6. Positive Youth Development (PYD) & Assets",
      hint: "Broad developmental assets and states (mattering, values, identity, time spent in activities outside this program), not specific SEL skills -- see Domain 4. Belonging to this school/program -> 3.1.",
      description: "Outcomes about broad developmental assets: feeling empowered and safe, holding positive values, spending time in enriching activities outside the program, and a positive sense of identity and purpose.",
      subcategories: [
        {
          code: "6.1 Empowerment & Safety",
          hint: "A felt, individual state. For belonging to school/program specifically, use 3.1. For empowerment via civic voice, use 7.3.",
        },
        {
          code: "6.2 Positive Values",
          hint: "vs 4.5.2 (Ethical Choices): use 6.2 for general character traits/values, not a decision made in a specific situation.",
        },
        { code: "6.3 Constructive Use of Time" },
        {
          code: "6.4 Positive Identity",
          hint: "Broad identity/purpose/self-esteem. vs 4.1.2: use 4.1.2 for identity exploration specifically. vs 4.1.4: use 4.1.4 when the outcome is framed as confidence/self-belief.",
        },
      ],
    },
    {
      code: "Domain 7. Civic Engagement & Community",
      hint: "Youth understanding or acting on their community and its systems: civic knowledge, organized service, voice and leadership, criticality, and digital citizenship. Small daily classroom/program contributions -> 4.5.5.",
      description: "Outcomes where young people understand and take part in community and civic life: knowing how systems work, service and community action, voice and leadership in decisions, analyzing power and injustice, and safe, responsible behavior online.",
      subcategories: [
        { code: "7.1 Civic Skills & Knowledge" },
        {
          code: "7.2 Community Service & Action",
          hint: "For larger community service projects/volunteering. For small daily classroom/program contributions, use 4.5.5 instead.",
        },
        { code: "7.3 Youth Voice & Leadership" },
        { code: "7.4 Criticality & Social Justice" },
        { code: "7.5 Digital Citizenship & Safety" },
      ],
    },
    {
      code: "Domain 8. Physical & Behavioral Health",
      hint: "The YOUTH's own physical, mental and behavioral health status, service use and risk behaviors. Learning a coping skill -> 4.2.2; a caregiver's own stress -> 12.2; staff adopting trauma-informed practice -> 11.2.",
      description: "Outcomes about a young person's health: physical activity and nutrition, mental health symptoms, recovery from trauma, use of mental health services, and prevention of substance use, sexual risk, violence and injury, and justice involvement.",
      subcategories: [
        { code: "8.1 Physical Activity & Nutrition" },
        {
          code: "8.2 Mental Health Status (Symptom Reduction)",
          hint: "The YOUTH's state of being (e.g. \"feeling less anxious\"). Use 4.2.2 for skills. Use 12.2 for a caregiver's own stress/burnout.",
        },
        {
          code: "8.3 Healing & Trauma Recovery",
          hint: "The youth's own recovery. For staff/org adopting trauma-informed practices, use 11.2 instead.",
        },
        { code: "8.4 Access to Mental Health Services" },
        { code: "8.5 Substance Use Prevention & Reduction" },
        { code: "8.6 Sexual & Reproductive Health Behaviors" },
        { code: "8.7 Violence, Bullying & Injury Prevention" },
        {
          code: "8.8 Justice Involvement, Diversion & Reentry",
          hint: "Often the PRIMARY outcome for juvenile-justice/reentry programs -- do not leave uncoded.",
        },
      ],
    },
    {
      code: "Domain 9. College & Career Readiness",
      hint: "Readiness for and results after high school, EXPLICITLY framed around college or career. General learning gains not framed that way -> Domain 1; general SEL skills outside a work context -> Domain 4.",
      description: "Outcomes about readiness for life after high school and what follows: college- and career-framed knowledge and thinking skills, navigating applications and financial aid, career exploration, employability and technical skills, and postsecondary enrollment, completion and employment.",
      subcategories: [
        {
          code: "9.1 Key Content Knowledge",
          hint: "Only when EXPLICITLY framed around college/career readiness. For general content learning, use the subject's Domain 1 code (1.1, 1.2, 1.3, 1.8 or 1.9) instead.",
        },
        { code: "9.2 Key Cognitive Strategies" },
        {
          code: "9.3 Transition Knowledge & Skills",
          hint: "The knowledge/process (FAFSA, applications). For the enrollment outcome itself, use 9.7. For employment, use 9.8.",
        },
        { code: "9.4 Career Awareness & Exploration" },
        {
          code: "9.5 Employability Skills",
          hint: "Use instead of Domain 4 (SEL) when the context is explicitly professional/work-readiness.",
        },
        {
          code: "9.6 Technical Skills & Work-Based Learning",
          hint: "The training outcome (certifications, internships). For actual job placement/earnings, use 9.8.",
        },
        {
          code: "9.7 Postsecondary Enrollment, Persistence & Completion",
          hint: "vs 9.3: use 9.7 for the enrollment/completion outcome itself, not the process of applying.",
        },
        {
          code: "9.8 Employment Placement, Retention & Earnings",
          hint: "vs 9.6: use 9.8 for actual employment status/earnings, not training/certification completion.",
        },
      ],
    },
    {
      code: "Domain 10. Access & Equity",
      hint: "Availability of resources (materials, technology, connectivity, facilities) and removal of barriers to entry for specific groups -- whether youth can get to and take part in the opportunity.",
      description: "Outcomes about whether young people can reach and take part in learning opportunities: access to materials, technology, connectivity and facilities, and removing barriers that keep specific groups from participating.",
      subcategories: [
        { code: "10.1 Access to Resources" },
        { code: "10.2 Participation & Inclusion" },
      ],
    },
    {
      code: "Domain 11. Adult & System Capacity",
      hint: "Change in the ADULTS and ORGANIZATIONS around youth (staff/volunteer learning, practice change, systems, family-engagement systems), plus program outputs such as attendance and reach (11.5). Not a change in a young person.",
      description: "Outcomes about the adults and organizations serving young people rather than the young people themselves: staff and volunteer learning, changes in practice, system and policy improvements, the organization's family-engagement systems, and program reach and participation counts.",
      subcategories: [
        {
          code: "11.1 Professional Knowledge & Skill",
          hint: "NOT limited to paid staff -- also use for volunteers, mentors, coaches, and case managers.",
        },
        {
          code: "11.2 Instructional Practice Change",
          hint: "Includes staff/org adopting trauma-informed practices (SAMHSA principles).",
        },
        { code: "11.3 Systemic Improvement" },
        {
          code: "11.4 Family Engagement Capacity",
          hint: "The ORG's systems for engaging families. For the caregiver's own knowledge/practices, use Domain 12. For the family-program relationship, use 3.5.",
        },
        {
          code: "11.5 Program Participation, Retention & Reach (Output Metric)",
          hint: "Program-level dosage/attendance/reach -- an OUTPUT, not a youth outcome. Use this instead of forcing it elsewhere or marking uncoded. For a specific student's attendance, use 1.5 instead.",
        },
      ],
    },
    {
      code: "Domain 12. Family Strengthening & Basic Needs",
      hint: "The CAREGIVER'S OWN knowledge/well-being/stability -- distinct from 3.5 (family-program relationship) and 11.4 (org's family-engagement systems).",
      description: "Outcomes about caregivers and households: parenting knowledge and practices, caregiver well-being and support networks, the home learning environment, and economic, food and housing stability.",
      subcategories: [
        { code: "12.1 Parenting Knowledge & Practices" },
        {
          code: "12.2 Parental Resilience & Caregiver Well-being",
          hint: "The CAREGIVER's own well-being/stress, distinct from the child's mental health (8.2).",
        },
        { code: "12.3 Caregiver Social Connections & Support Networks" },
        { code: "12.4 Home Learning Environment" },
        { code: "12.5 Household Economic Stability & Benefits Access" },
        { code: "12.6 Food Security & Nutrition Access" },
        { code: "12.7 Housing Stability" },
      ],
    },
  ],
};

// -----------------------------------------------------------------------
// Deferred for a future revision
// -----------------------------------------------------------------------
// The gap-analysis pass that produced v1.1.0 identified additional,
// lower-priority gaps that were deliberately NOT added here, to keep this
// revision reviewable and avoid taxonomy sprawl. Candidates for a future
// v1.2.0, roughly in priority order:
//   - Disability self-advocacy/self-determination as a named SEL subcode,
//     and IEP/accommodations/accessible-placement outcomes under Domain 10
//     (IDEA Part B Indicators 5/13/14; Wehmeyer self-determination model).
//   - Language ACCESS for families (interpretation/translation) as a
//     Domain 10 subcategory, distinct from 1.4's youth ELP growth.
//   - Financial capability & asset building for youth (CFPB Building
//     Blocks) -- likely a Domain 9 subcategory.
//   - Social capital / expanded networks (Search Institute Developmental
//     Relationships Framework) and mentoring match quality/duration
//     (MENTOR Elements of Effective Practice) under Domain 3 / Domain 11.
//   - Broader physical health & health-care access (sleep, oral/vision
//     health, chronic-condition management, insurance) under Domain 8.
//   - Environmental stewardship & nature connection (NAAEE Guidelines for
//     Excellence) -- likely Domain 7, for outdoor/environmental-ed orgs.
//   - Cross-sector partnership & collective-impact capacity (Kania &
//     Kramer) under Domain 11, to give `partner_organizations` a home.
//   - Community conditions & collective efficacy (Sampson et al.) under
//     Domain 11, to give `community_neighborhood` a home.
//   - System navigation & rights knowledge (McKinney-Vento/IDEA rights,
//     immigration-adjacent) distinct from general civic knowledge (7.1).
//   - A "context flag" mechanism (schema-level, not codebook-level) so a
//     crisis-driven outcome (e.g. "maintained attendance despite housing
//     instability") doesn't lose its context when reduced to one code.
