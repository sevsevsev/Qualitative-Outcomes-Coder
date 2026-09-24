# Youth Outcomes Codebook: v2.0-rc1 DRAFT

Status: **draft for review. Not in production.**

rc1 applied fixes found by the held-out double-blind run in cycle 02. Those fixes are
marked "(rc1)" below.

- Proposed in cycle 02 (2026-09-23). It restructures v1.1.1, which has 12 domains
  and 82 subcategories.
- `v1-to-v2-crosswalk.csv` maps every v1.1.1 code to its v2 home.
- `STRUCTURE.md` explains why each change was made.

Every source listed under a domain has a status in
`sources/original.sources.json` or in the cycle-02 additions table in
`STRUCTURE.md`:

| Status | Meaning |
|---|---|
| verified | Fetched, with a verbatim excerpt recorded |
| located | Confirmed to exist; supporting excerpt not yet recorded |
| extension | Construct defined by this codebook; no external source |

## How to code (the rules the model follows)

### Two separate decisions

For each atomic outcome, choose:

- a **subcategory**, which says *what area of life changed*;
- an **outcome type**, which says *what kind of change it is*.

Outcome types, based on the University of Wisconsin–Extension logic model (short-term
learning, medium-term action, long-term conditions):

| Type | Covers | Examples |
|---|---|---|
| `knowledge` | Knowledge or awareness | "will understand", "will know", "will identify" |
| `skill` | Skill or ability | "will be able to", "will demonstrate the skill of" |
| `attitude` | Attitude, belief, feeling, motivation, or aspiration | "will feel", "will believe", "will report enjoying" |
| `behavior` | Behavior or practice | "will do", "will use", "will attend", "will reduce use of" |
| `status` | A condition or status | enrolled, employed, graduated, housed, reduced symptoms, recidivism |
| `output` | A count or dosage about the *program*, not a change in a person | sessions held, youth served, laptops distributed |

(rc1) The two outcome-type boundaries coders disagreed on most:

- **Skill vs. behavior.** Use `skill` when the text is about being *able to* do
  something ("will demonstrate the ability", "will learn to"). Use `behavior` when it
  is about actually doing it in daily life, or how often ("will use", "will do X
  weekly").
- **Behavior vs. status.** Use `behavior` for how often an action happens (homework
  completion, attendance *rate* for a student, substance use). Use `status` for a
  standing condition or milestone (enrolled, graduated, employed, housed, arrested or
  not, symptom level).

### Who changed?

This decides the section. Stop at the first match.

- **Young people** → Part Y.
- **Parents, caregivers, the household, or other adult participants who are not staff** (e.g., adult learners, older adults) → Part F.
- **Staff or volunteers, the organization, or the wider system or community** →
  Part A.

Two cases that are easy to get wrong:

- A young person's *own* housing, food, or income counts as **household** stability.
  Use F2, with target population `students_youth`.
- A young person's relationship with their own family counts as a **youth**
  relationship. Use Y2.4.
- (rc1) **Parenting comes before age.** When the construct is parenting or caregiving
  practice, use F1, even if the parent is a teenager. Set target population to
  `students_youth`.
- (rc1) **The subject of the sentence decides.** "Parents will communicate better with
  their children" → F1.1. "Youth will communicate better with their parents" → Y2.4.

### Splitting

- Split when a statement names **two or more distinct results**.
- Do **not** split off the activity, setting, or means ("by designing murals…",
  "while leading a cleanup…").
- (rc1) Staff activity that *produces* a youth outcome is the means. "Referrals
  increased after staff training" → Y11.4 only.
- (rc1) A combined metric that a source defines as one indicator (e.g., WIOA's
  "employed or in education") stays one outcome. Use Y9.5.

### Uncoded

- **Use uncoded** for headers, fragments, bare program names, evaluation/data notes,
  and text too vague to code ("Improve outcomes for students").
- **Never uncoded** for:
  - program counts, which go to A2.2;
  - faith language, which goes to the nearest construct (see Y5.1 and Y4.5).

### Confidence

| Level | Meaning |
|---|---|
| high | The definition or example clearly matches |
| medium | Reasonable best fit |
| low | Forced placement; no subcategory names the construct |
| none | Uncoded only |

### Most specific wins

Choose the subcategory whose **definition** names the construct. The tie-breakers
listed under each domain override this rule.

---

## Part Y: Young people

### Y1. Engagement, Interest & Enjoyment

**Sources:** Hidi & Renninger (2006), Four-Phase Model of Interest Development
(verified); Wigfield & Eccles (2000), expectancy-value / utility value (located);
Muhammad, Five Pursuits: Joy (verified).

**Scope:** How young people *experience* learning and activities: fun, curiosity,
lasting interest, finding it relevant, choosing to take part.

| Code | Definition | Example |
|---|---|---|
| Y1.1 Enjoyment & Joy | Positive emotional experience of the program or learning: fun, happiness, excitement, pride in being part of it. | "Participants will say the program is the best part of their week." |
| Y1.2 Curiosity & Triggered Interest | Attention caught in the moment: curiosity, asking questions, willingness to try something new. (Hidi & Renninger phase 1.) | "Students will ask follow-up questions after a guest scientist's demonstration." |
| Y1.3 Sustained & Individual Interest | Interest that lasts, deepens, or becomes the youth's own: a passion, continuing a pursuit beyond the program. (Phases 2–4.) | "Youth will keep practicing chess on their own after the club season ends." |
| Y1.4 Relevance & Utility Value | Seeing that learning is useful for one's goals, future, or community. | "Youth will describe how writing skills will help them reach their career goals." |
| Y1.5 Participation in Enriching Activities | An individual youth's choice to take part in constructive activities, inside the program (returning, joining) or outside it (sports, arts, clubs, faith groups). Search Institute, Constructive Use of Time (verified). | "Participants will join a school club or team during the year." |

**Tie-breakers**

- **Y1.5 vs. A2.2:** use Y1.5 when a youth *chooses* to participate. Use A2.2 for
  program-level counts or rates.
- (rc1) **Per-person thresholds** ("each youth will attend at least 4…") → Y1.5 for
  youth and F3.2 for families. **Aggregate rates or counts** ("85% average daily
  attendance", "served 300") → A2.2.
- (rc1) **Youth taking part in inclusive activities** → Y1.5. The program's
  accommodations → A2.4.
- (rc1) **Interest in a career or field of work** → Y9.1. General hopes for the future
  → Y4.5. Lasting interest in an activity → Y1.3.
- **Curiosity in early childhood:** goes to Y1.2. Persistence in early childhood goes
  to Y6.2.

### Y2. Belonging & Relationships

**Sources:** CDC (2009), School Connectedness (verified); Search Institute
Developmental Relationships Framework (verified); Mathematica, Education-to-Workforce
Indicator Framework, social capital (located).

| Code | Definition | Example |
|---|---|---|
| Y2.1 Belonging & Mattering | Feeling accepted, valued, and included in the program, school, or community. Includes feeling safe *and* accepted in the program. | "Students will agree that 'people at this program care about me.'" |
| Y2.2 Supportive Adult Relationships | Caring, trusting relationships with mentors, staff, teachers, or coaches, including the quality of those relationships (care, challenge, support). | "Youth will name a program staff member they can talk to about personal problems." |
| Y2.3 Peer Relationships & Friendship | Friendships, peer acceptance, positive peer groups. | "Youth will report having at least one close friend at the center." |
| Y2.4 Family Relationships | The youth's relationship with their own family: connection, repair, reunification. | "Youth will report improved communication with their parents or guardians." |
| Y2.5 Social Capital & Networks | Access to and ability to use relationships that open opportunities, beyond one supportive adult (Developmental Relationships: "Expand Possibilities"). | "Participants will identify two new adults outside their family who can help them pursue opportunities." |

**Tie-breakers**

- **Y2.3 vs. Y3.10:** a relationship result goes to Y2.3. The skill of working
  together goes to Y3.10.
- **Y2.2 vs. Y2.5:** Y2.2 is one supportive relationship. Y2.5 is a wider network,
  or connections that open opportunities.
- **Y2.1 vs. Y12.1:** felt safety that is specific to this program or school goes to
  Y2.1. General felt safety (home, neighborhood) goes to Y12.1.
- (rc1) **Loneliness or isolation** → Y2.1, unless it is framed as a clinical symptom
  (then Y11.1). Named friendships → Y2.3.

### Y3. Social & Emotional Skills (CASEL)

**Source:** CASEL (2020), SEL Framework competencies and example skills (verified).

**Scope:** What youth *can do*. Self-beliefs, identity, and confidence belong in Y4.

| Code | Definition | Example (and CASEL anchor) |
|---|---|---|
| Y3.1 Emotion Awareness | Recognizing and naming one's own emotions. | "Children will use a feelings chart to name how they are feeling." (CASEL: Identifying one's emotions) |
| Y3.2 Emotion Regulation & Impulse Control | Managing strong emotions and impulses in the moment (calming down, frustration tolerance). | "Youth will walk away rather than lash out when angry." (CASEL: Managing one's emotions) |
| Y3.3 Stress Management & Coping | Learning or using coping strategies for stress, worry, or hardship. | "Students will use journaling to manage worry before exams." (CASEL: Identifying and using stress-management strategies) |
| Y3.4 Goal-Setting | Setting personal or collective goals and planning steps. | "Participants will write a SMART goal for the semester." (CASEL: Setting personal and collective goals) |
| Y3.5 Self-Discipline, Organization & Persistence | General (non-academic) self-discipline, organization, and sticking with tasks. | "Youth will keep their project materials organized and finish tasks they start." (CASEL: Exhibiting self-discipline and self-motivation; planning and organizational skills) |
| Y3.6 Empathy, Perspective-Taking & Gratitude | Understanding and caring about others' feelings and views; expressing gratitude; recognizing others' strengths. | "Youth will consider how a younger sibling might feel in a disagreement." (CASEL: Taking others' perspectives; empathy; gratitude) |
| Y3.7 Respect for Diversity & Cultural Competence | Respect for people of different backgrounds; examining one's own biases. | "Students will show respect for classmates whose religious practices differ from their own." (CASEL: Demonstrating cultural competency; examining prejudices and biases) |
| Y3.8 Social Norms & Situational Awareness | Understanding expectations and norms in different settings. | "Participants will adjust their behavior appropriately between the gym and the library." (CASEL: Identifying diverse social norms; recognizing situational demands) |
| Y3.9 Communication & Public Speaking | Expressing oneself clearly, listening actively, speaking to an audience. | "Youth will present their ideas clearly to a small audience." (CASEL: Communicating effectively) |
| Y3.10 Teamwork, Collaboration & Group Leadership | Working with others toward shared goals, including leading peers within a group task. | "Team members will divide tasks fairly and support each other to finish a group mural." (CASEL: Teamwork and collaborative problem-solving; showing leadership in groups) |
| Y3.11 Conflict Resolution | Resolving interpersonal conflicts constructively. | "Students will use 'I statements' to settle disagreements with classmates." (CASEL: Resolving conflicts constructively) |
| Y3.12 Help-Seeking & Offering Support | Knowing where support is, asking for help, offering help to others. | "Youth will ask a staff member for help when they are stuck." (CASEL: Seeking or offering support and help when needed) |
| Y3.13 Relationship-Building Skills | Building, maintaining, and repairing relationships (the skill, not the relationship outcome). | "Youth will apologize and repair a friendship after a conflict." (CASEL: Developing positive relationships) |
| Y3.14 Decision-Making & Problem-Solving | Weighing options and consequences; working through a problem from identifying it to acting. | "Youth will list the pros and cons before making a big decision." (CASEL: Identifying solutions; anticipating consequences; reasoned judgment) |
| Y3.15 Ethical & Prosocial Choices | Making an ethical or prosocial choice in a specific situation (e.g., reporting bullying rather than joining in). | "Youth will return a lost wallet they find at the park." (CASEL: Evaluating personal, interpersonal, community impacts) |
| Y3.16 Risk Avoidance & Refusal Skills | Avoiding unsafe situations; resisting negative peer pressure. | "Youth will leave a party where alcohol is being served to minors." (CASEL: Resisting negative social pressure) |
| Y3.17 Everyday Contribution | Small, daily actions to care for the classroom or program. | "Children will help set the table and clean up after snack time." (CASEL: Reflecting on one's role to promote community well-being) |

**Tie-breakers**

- **Y3.2 vs. Y3.3:** a momentary reaction goes to Y3.2. Using a strategy for stress
  or hardship goes to Y3.3.
- **Y3.16 vs. Y12.2 / Y12.3:** a refusal *skill* goes to Y3.16. A change in how often
  the risk behavior happens goes to Y12.
- **Y3.15 vs. Y5.1:** a choice in a specific situation goes to Y3.15. A general trait
  goes to Y5.1.
- (rc1) **Standing up for a peer** in a specific situation → Y3.15. Challenging
  injustice or unfair systems → Y5.5.
- **Y3.17 vs. Y5.4:** small daily contributions go to Y3.17. Organized service goes to
  Y5.4.
- **Y3.9 vs. Y7.2:** spoken communication and public speaking go to Y3.9. Written
  composition goes to Y7.2.
- **Y3.x vs. Y9.3:** when the skill is explicitly framed around work or a job, use
  Y9.3.

### Y4. Identity, Confidence & Agency

**Sources:** Search Institute 40 Developmental Assets, Positive Identity (verified);
Lerner, Five Cs, "Confidence" (located); Nagaoka et al. (2015), Foundations for
Young Adult Success, agency and integrated identity (located); Learning for Justice
Social Justice Standards, Identity (verified); Muhammad, Pursuit 1 Identity
(verified); Shogren, Wehmeyer et al., Causal Agency Theory / self-determination
(located); Carlone & Johnson (2007), science identity (located).

**Scope:** Who youth believe they are and what they believe they can do.

| Code | Definition | Example |
|---|---|---|
| Y4.1 Self-Understanding & Identity Exploration | Understanding who one is, what matters to one, and how one is changing. | "Teens will write a personal statement describing their values and experiences." |
| Y4.2 Cultural & Social Identity Affirmation | Pride in, and acceptance of, one's own cultural, ethnic, linguistic, gender, sexual, or other social identity. | "Indigenous youth will express pride in their tribal heritage." |
| Y4.3 Confidence & Self-Efficacy | A general belief that one can succeed and handle challenges, including a general growth mindset. | "Participants will believe they can handle difficult situations." |
| Y4.4 Self-Worth & Recognized Strengths | Self-esteem; being able to name one's own strengths. | "Youth will report higher self-esteem." |
| Y4.5 Purpose & Future Orientation | A sense of purpose and meaning, optimism about the future, and aspirations. Includes spiritual purpose and faith-based meaning: "grow in faith" → Y4.5, "live out faith-based values" → Y5.1 (rc1). | "Youth will describe goals and hopes for their life after high school." |
| Y4.6 Agency, Self-Determination & Self-Advocacy | Acting as the causal agent in one's own life: making choices, advocating for one's needs, directing one's own supports. | "Youth will make their own choices about which activities to pursue and explain why." |
| Y4.7 Domain Identity | Seeing oneself as a certain kind of person in a field: "a STEM person", an artist, an athlete, a reader. | "Participants will describe themselves as writers." |

**Tie-breakers**

- **Y4.3 vs. Y6.4:** confidence or growth mindset about *schoolwork or learning* goes
  to Y6.4.
- **Y4.6 vs. Y5.3:** agency in one's own life goes to Y4.6. Influencing collective
  decisions goes to Y5.3.
- **Y4.7 vs. Y1.3:** "I am a ___ person" goes to Y4.7. "I love doing ___" goes to
  Y1.3.

### Y5. Character, Values & Civic Life

**Sources:** Search Institute, Positive Values (verified); Lerner, Five Cs
(Character, Caring, Contribution) (located); NCSS (2013), C3 Framework (located);
Muhammad, Pursuit 4 Criticality (verified); ISTE Standards for Students (2016),
Digital Citizen (verified); NAAEE (2019), K–12 Environmental Education Guidelines,
Personal and Civic Responsibility strand (located).

| Code | Definition | Example |
|---|---|---|
| Y5.1 Positive Values & Character | General character traits: integrity, honesty, responsibility, sportsmanship, forgiveness, faith-grounded values. | "Youth will take responsibility for their mistakes." |
| Y5.2 Civic Knowledge | Understanding how government, civic systems, and rights work. | "Students will describe the three branches of government." |
| Y5.3 Civic Voice, Leadership & Participation | Influencing collective decisions: youth councils, testimony, advocacy, co-design, voting. Includes civic efficacy, the belief that one can influence community decisions (rc1). | "Youth will speak at a school board meeting about a policy that affects them." |
| Y5.4 Community Service & Action | Organized service or projects to improve the community, including identifying a community issue and planning action on it (rc1). | "Participants will organize a neighborhood coat drive." |
| Y5.5 Critical Consciousness & Social Justice | Analyzing power, inequity, and systems of oppression; standing up against injustice. | "Youth will analyze how zoning decisions have shaped inequality in their city." |
| Y5.6 Environmental Stewardship | Caring for the environment and acting on it: pro-environmental behavior, connection to nature. | "Youth will reduce their use of single-use plastics." |
| Y5.7 Digital Citizenship & Online Safety | Safe, legal, ethical behavior online. | "Students will use strong passwords and recognize phishing messages." |

**Tie-breakers**

- **Y5.2 vs. Y7.5:** civics and government go to Y5.2. History, geography, and
  economics go to Y7.5.
- **Y5.6 vs. Y7.4:** caring for or acting on the environment goes to Y5.6. Knowledge
  of ecosystems goes to Y7.4.
- **Y5.7 vs. Y7.9:** online safety and ethics go to Y5.7. Judging whether information
  is credible goes to Y7.9.

### Y6. Academic Mindsets & Learning Behaviors

**Sources:** Farrington et al. (2012) (verified); Head Start ELOF, Approaches to
Learning (located).

| Code | Definition | Example |
|---|---|---|
| Y6.1 Academic Engagement Behaviors | Doing schoolwork: homework, class participation, being prepared. | "Students will come to class with completed assignments." |
| Y6.2 Academic Perseverance | Sticking with hard academic tasks, including early-childhood task persistence. | "Students will keep working on difficult math problems instead of giving up." |
| Y6.3 Learning Strategies & Study Skills | Using specific methods to learn: note-taking, planners, test preparation, metacognition. | "Students will use flashcards and self-quizzing to prepare for tests." |
| Y6.4 Academic Mindsets & Self-Efficacy | Beliefs about oneself as a learner: "I can succeed at this"; academic growth mindset. | "Students will believe they are capable of succeeding in advanced classes." |

### Y7. Academic & Content Learning

**Sources:**

- National Reading Panel (2000) (located)
- Common Core anchor standards for writing (located)
- ESSA academic achievement indicator (verified)
- NGSS, three dimensions (located)
- NCSS C3 Framework (located)
- National Core Arts Standards (verified)
- WIDA ELD Standards Framework, 2020 edition (located)
- Head Start ELOF (located)
- Conley, Key Cognitive Strategies (located)
- NAMLE media literacy definition (located)

**Scope:** *Demonstrated* learning, skill gains, or proficiency in a subject.

| Code | Definition | Example |
|---|---|---|
| Y7.1 Reading | Phonics, fluency, vocabulary, comprehension, reading level. | "Second graders will increase oral reading fluency by 20 words per minute." |
| Y7.2 Writing & Composition | Writing skill in any genre. | "Students will write a well-organized informational essay." |
| Y7.3 Mathematics | Math skill or proficiency, including math used in money contexts. | "Students will master fractions and decimals." |
| Y7.4 Science, Technology & Engineering | Science knowledge, engineering design, computing and coding. | "Youth will build and program a simple circuit." |
| Y7.5 Social Studies & History | History, geography, and economics content. | "Students will explain the causes of a major historical event." |
| Y7.6 Arts Learning & Performance | Creating, performing or presenting, and responding to art, including technical skill in an art form (NCAS artistic processes). | "Youth will choreograph and perform an original dance piece." |
| Y7.7 English Language Development & Multilingualism | English learners acquiring English; maintaining or developing a home language. | "English learners will advance one level on the state English proficiency test." |
| Y7.8 Early Development & School Readiness | Pre-K language, literacy, math, and cognition; kindergarten readiness; overall developmental milestones on broad screeners such as ASQ (rc1). Early motor skills specifically → Y10.2. | "Preschoolers will count to 20 and recognize numerals." |
| Y7.9 Critical Thinking, Inquiry & Media Literacy | Analyzing and evaluating information and sources; research and inquiry skills. | "Students will compare two sources and identify which is more reliable." |
| Y7.10 Other Applied Knowledge & Skills | Practical knowledge or skills not named elsewhere (e.g., gardening). This is a codebook extension: use it only when no other subcategory names the content. | "Participants will learn basic bicycle repair." |

**Tie-breakers**

- **Y7 vs. Y6:** learning gains and proficiency go to Y7. Behaviors and beliefs *about*
  learning go to Y6.
- **Y7 vs. Y8:** learning goes to Y7. Grades, credits, and school status go to Y8.

### Y8. Educational Progress & Attainment

**Sources:** Attendance Works (verified); McKinney-Vento, 42 U.S.C. 11432 (verified);
Allensworth & Easton (2005), on-track indicator (located); ESSA four-year adjusted
cohort graduation rate (verified); National Student Clearinghouse Research Center,
High School Benchmarks (verified); IDEA Part B Indicator 14 (located). Y8.4 has no
source yet (CRDC lead).

| Code | Definition | Example |
|---|---|---|
| Y8.1 Attendance & Chronic Absence | A student's school attendance or chronic absence. | "Students will attend at least 90% of school days." |
| Y8.2 School Stability & Continuous Enrollment | Staying enrolled or remaining in the school of origin through disruption. | "Students in foster care will remain in their school of origin after a placement change." |
| Y8.3 Grades, Credits & On-Track Status | Course grades, passing, credits, promotion, on-track status. | "Students will pass all core classes." |
| Y8.4 School Discipline & Exclusion | Suspensions, expulsions, office referrals. | "Participating students will receive fewer suspensions." |
| Y8.5 Secondary Completion & Re-engagement | High school diploma, GED, re-enrollment after dropping out. | "Seniors will graduate from high school on time." |
| Y8.6 Advanced Coursework & Dual Credit | Taking advanced courses, dual enrollment, earning college credit in high school. | "Students will enroll in AP or honors courses." |
| Y8.7 Postsecondary Enrollment, Persistence & Completion | College or training enrollment, persistence, degree or certificate completion. | "Graduates will enroll in a two- or four-year college." |

### Y9. Career & Economic Readiness

**Sources:** Perkins V, 20 U.S.C. 2302 (verified); OCTAE Employability Skills
Framework (verified); Conley, Key Transition Knowledge & Skills (located); WIOA,
20 CFR 677.155 (verified); CFPB (2016) Building Blocks (verified); Jump$tart & CEE
(2021) National Standards for Personal Financial Education (verified); Chafee,
42 U.S.C. 677, daily living skills (verified).

| Code | Definition | Example |
|---|---|---|
| Y9.1 Career Awareness & Exploration | Learning about careers; interest inventories; exploring pathways; interest in or aspiration toward a career field; college and workplace visits (rc1). | "Students will complete a career interest inventory." |
| Y9.2 College & Career Transition Knowledge | Knowing the process: applications, FAFSA, financial aid, resumes, interviews. | "Seniors will complete the FAFSA." |
| Y9.3 Employability & Workplace Skills | Professionalism, workplace communication, punctuality, job performance. | "Interns will arrive on time and dress appropriately for work." |
| Y9.4 Technical Skills, Credentials & Work-Based Learning | Industry skills, certifications, internships, apprenticeships. | "Participants will earn a forklift certification." |
| Y9.5 Employment & Earnings | Getting or keeping a job; wages; being in education or employment after exit (a combined WIOA-style indicator). | "Youth will obtain a part-time job." |
| Y9.6 Financial Capability | The youth's own financial knowledge, habits, and decisions: budgeting, saving, banking, credit, reading a pay stub. | "Participants will create a monthly budget." |
| Y9.7 Independent Living Skills | Daily living skills for self-sufficiency: cooking, scheduling, obtaining vital documents, self-care away from home. | "Youth will be able to schedule their own medical appointments." |

**Tie-breakers**

- **Y9.6 vs. F2.1:** the youth's own money skills go to Y9.6. Household income and
  benefits go to F2.1.
- **Y9.6 vs. Y7.3:** math proficiency that only uses money as a context goes to Y7.3.
- **Y9.7 vs. Y9.6:** a bundle of life skills goes to Y9.7. Money-only skills go to
  Y9.6.

### Y10. Physical Health & Healthy Behaviors

**Sources:** SHAPE America (2024), National PE Standards (verified); SHAPE America
(2024), National Health Education Standards (verified); CDC/ASCD WSCC (verified);
Healthy People 2030 SH-04, AH-01, AHS-01 (located); CDC YRBSS (verified); National
Sex Education Standards, 2nd ed. (located); Head Start ELOF, Perceptual, Motor &
Physical Development (located).

| Code | Definition | Example |
|---|---|---|
| Y10.1 Physical Activity & Fitness | Exercise, fitness, less sedentary time. | "Participants will engage in 60 minutes of physical activity daily." |
| Y10.2 Motor & Sport Skills | Fundamental movement, fine and gross motor, and sport-specific skills. | "Children will improve balance and coordination." |
| Y10.3 Nutrition & Healthy Eating | Nutrition knowledge and eating behavior, including cooking healthy food. | "Youth will choose water instead of sugary drinks." |
| Y10.4 Sleep, Hygiene & Daily Health Habits | Sleep, hygiene, and similar routine health practices. | "Children will wash their hands before meals." |
| Y10.5 Health Knowledge & Health Literacy | Health information and skills not covered elsewhere: first aid, safety knowledge, finding reliable health information. | "Youth will know how to respond to an allergic reaction." |
| Y10.6 Sexual & Reproductive Health | Knowledge and behavior related to sexual health, STI and pregnancy prevention, and healthy relationships. | "Youth will describe how to access confidential sexual health services." |
| Y10.7 Health Care Access & Condition Management | Insurance, preventive and dental/vision visits, screenings, managing chronic conditions. | "Children will receive all recommended immunizations." |

**Tie-breaker**

- **Dating-violence knowledge:** Y12.3 when violence is the focus. Y10.6 when healthy
  relationships are the focus.

### Y11. Mental Health & Well-Being

**Sources:** Keyes, Dual Continua Model (verified; both continua); Keyes (2002),
Mental Health Continuum (located); NCTSN, 12 Core Concepts (located); CDC WSCC,
Counseling, Psychological, and Social Services (verified).

| Code | Definition | Example |
|---|---|---|
| Y11.1 Reduced Symptoms & Distress | Fewer symptoms of anxiety, depression, or behavioral problems. | "Youth will report fewer days of feeling sad or hopeless." |
| Y11.2 Flourishing & Life Satisfaction | Positive mental health: life satisfaction, flourishing, feeling restored. | "Youth will report feeling that their life is going well." |
| Y11.3 Healing & Trauma Recovery | Processing trauma; psychological safety during recovery. | "Refugee youth will make sense of past traumatic experiences with a clinician's support." |
| Y11.4 Mental Health Service Access & Use | Being connected to, and using, counseling, therapy, or crisis services. | "Students will attend at least six counseling sessions." |

**Tie-breaker**

- **Y11.1 vs. Y3.3:** reduced symptoms (a status) go to Y11.1. A coping skill goes to
  Y3.3.

### Y12. Safety, Risk Behavior & Justice

**Sources:** Search Institute, Safety asset (verified); CDC YRBSS (verified); CDC &
ED (2014) bullying definitions (located); CJCA (2009) (located); Butts, Bazemore &
Meroe (2010), Positive Youth Justice (located).

| Code | Definition | Example |
|---|---|---|
| Y12.1 Felt Safety | Feeling safe at home, at school, or in the neighborhood (not specific to this program). | "Children will report feeling safe at home." |
| Y12.2 Substance Use | Use, intentions, or perceived risk of tobacco, vaping, alcohol, or other drugs. | "Youth will reduce past-30-day alcohol use." |
| Y12.3 Violence, Bullying & Victimization | Fighting, weapon carrying, bullying, harassment, dating violence, community violence (perpetration or victimization). | "Students will report being bullied less often." |
| Y12.4 Justice Involvement, Diversion & Reentry | Arrest, adjudication, recidivism, completing probation or diversion, restorative agreements. | "Youth will avoid re-arrest for one year." |

---

## Part F: Families & households

### F1. Family Strengthening & Adult Development

**Sources:** CSSP Strengthening Families Protective Factors (verified); Epstein Types
1 and 4 (located); Ascend 2Gen, Postsecondary & Employment Pathways (verified);
Digital Equity Act, 47 U.S.C. 1721, "digital literacy" (verified).

| Code | Definition | Example |
|---|---|---|
| F1.1 Parenting Knowledge, Practices & Confidence | Child-development knowledge, parenting practices, parent–child interaction, parenting self-efficacy. | "Parents will use praise and consistent limits with their children." |
| F1.2 Caregiver Well-Being & Resilience | The caregiver's own stress, mental health, resilience. | "Caregivers will report lower levels of depression." |
| F1.3 Caregiver Social Connections | Supportive relationships with other parents or the community. | "Parents will join a peer support group." |
| F1.4 Home Learning Environment & Routines | Reading at home, routines, home support for learning. | "Families will set up a regular homework time and space at home." |
| F1.5 Adult Education, Skills & Employment | The own education, training, English proficiency, digital and financial literacy, and employment of a caregiver or other adult participant (rc1: widened from caregivers only). | "Parents will enroll in ESL classes." |
| F1.6 System Navigation & Rights Knowledge | Families knowing their rights, knowing where to turn for help, navigating school or service systems, and getting connected to resources and referrals (rc1). | "Parents will know how to request a special education evaluation." |

| F1.7 Family Health Practices (rc1, new) | Caregiver or household health behaviors: breastfeeding, family eating habits, well-child visits kept by the parent, safe sleep. Source still to be verified (Healthy People 2030 Maternal, Infant, and Child Health objectives are the lead). | "Parents will keep their children's immunizations up to date." |

### F2. Basic Needs & Economic Stability

This domain applies to a household **or** a young person living independently.

**Sources:** Ascend 2Gen, Economic Assets (verified); CSSP, Concrete Support in Times
of Need (verified); USDA ERS Household Food Security Survey Module (verified); ACF
NYTD outcomes (verified); McKinney-Vento homelessness definition (verified).

| Code | Definition | Example |
|---|---|---|
| F2.1 Income, Benefits & Financial Stability | Household or independent-youth income, public benefits, financial stability. | "Families will increase household income by 10%." |
| F2.2 Food Security | Enough food, and access to healthy food. | "Households will report skipping fewer meals." |
| F2.3 Housing Stability & Safe Living Situation | Securing or keeping safe, stable housing, including youth shelter exits, independent leases, and housing cost burden (rc1). | "Families will avoid eviction." |

### F3. Family–Program Partnership

**Sources:** Epstein Types 2, 3, and 5 (located); U.S. ED & DOJ (2015), Dear
Colleague Letter on English Learner Students and LEP Parents (located).

| Code | Definition | Example |
|---|---|---|
| F3.1 Family Connection & Trust with the Program or School | The family's relationship with, and communication with, the program or school. | "Parents will report that teachers communicate with them regularly." |
| F3.2 Family Participation & Leadership | Families volunteering, attending events, or taking part in program or school decisions. | "Families will volunteer at program events." |
| F3.3 Language Access | Communication with families in their home language; interpretation and translation. | "The program will provide interpreters at all parent conferences." |

**Tie-breaker**

- **F3.2 vs. A2.2:** counts of family attendance are A2.2 when reported as program
  dosage. They are F3.2 when framed as family engagement.

---

## Part A: Adults, organizations & systems

### A1. Staff & Volunteer Capacity

**Sources:** Learning Forward (2022), Standards for Professional Learning (located);
SAMHSA (2014), trauma-informed approach (located).

| Code | Definition | Example |
|---|---|---|
| A1.1 Staff & Volunteer Knowledge & Skills | Adults gaining knowledge or skills. | "Coaches will learn strategies for positive youth development." |
| A1.2 Practice Change | Adults applying new practices, including trauma-informed care. | "Teachers will use restorative practices in their classrooms." |
| A1.3 Workforce Stability & Well-Being | Staff retention and turnover; staff well-being. This is a codebook extension. | "Frontline staff will report lower burnout." |

### A2. Program Quality, Access & Reach

**Sources:** Weikart Center Youth PQA (located); Weiss, Little & Bouffard (2005)
(located); Urban Institute Candidate Outcome Indicators (located); Digital Equity Act
(verified).

| Code | Definition | Example |
|---|---|---|
| A2.1 Program Quality | Observed or assessed program quality (safe, supportive, interactive, engaging); accreditation. | "The program will score in the top tier on an external quality review." |
| A2.2 Participation, Dosage & Services Delivered (Output) | Program-level counts, rates, dosage, reach, retention, match length, training hours, and services staff delivered (applications submitted, referrals made) (rc1). | "The program will serve 150 youth for at least 30 days each." |
| A2.3 Access to Resources | Providing materials, technology, connectivity, or facilities, including counts of resources distributed (rc1). | "The library will provide free Wi-Fi hotspots for checkout." |
| A2.4 Inclusion & Accommodations | Removing barriers so that all youth can take part. | "All program materials will be available in accessible formats." |
| A2.5 Participant & Family Satisfaction | Satisfaction with the program, and participants' or families' perceptions of its safety and quality (rc1). | "Participants will rate the program as 'excellent' or 'good.'" |

### A3. Systems, Policy & Community Conditions

**Sources:** Kania & Kramer (2011), Collective Impact (verified); Sampson,
Raudenbush & Earls (1997), collective efficacy (verified); Learning Forward (2022)
(located).

| Code | Definition | Example |
|---|---|---|
| A3.1 Policy & Institutional Change | Changes to policy, funding, or institutional practice in schools, districts, cities. | "The district will adopt a later school start time." |
| A3.2 Cross-Sector Partnerships & Collective Impact | Shared agendas, shared measurement, coordinated partnerships. | "Agencies will sign data-sharing agreements." |
| A3.3 Community Conditions & Collective Efficacy | Neighborhood cohesion, trust, and willingness to act for the common good. | "Neighbors will report looking out for each other's children." |
