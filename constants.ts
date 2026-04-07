

// constants.ts

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
  "Career & Technical Education (CTE) / Workforce",
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

export const CODEBOOK_DOMAINS = [
  "Domain 1. Joy, Interest & Motivation in Learning",
  "Domain 2. Belonging, Relationships & School Connectedness",
  "Domain 3. Social & Emotional Learning (CASEL-aligned)",
  "Domain 4. Academic Engagement & Habits",
  "Domain 5. Positive Youth Development (PYD) & Assets",
  "Domain 6. Civic Engagement & Community",
  "Domain 7. Physical & Behavioral Health",
  "Domain 8. College & Career Readiness",
  "Domain 9. Access & Equity",
  "Domain 10. Adult & System Capacity"
];

export const CODEBOOK_SUBCATEGORIES: Record<string, string[]> = {
  "Domain 1. Joy, Interest & Motivation in Learning": [
    "1.1 Joy & Emotional Wellness",
    "1.2 Triggered Situational Interest (Curiosity)",
    "1.3 Value & Meaning (Utility Value)",
    "1.4 Creative Exploration"
  ],
  "Domain 2. Belonging, Relationships & School Connectedness": [
    "2.1 School/Program Connectedness (Belonging)",
    "2.2 Adult Support & Care",
    "2.3 Peer Connection & Social Integration",
    "2.4 Cultural Identity & Affirmation",
    "2.5 Family Partnership & Connection"
  ],
  "Domain 3. Social & Emotional Learning (CASEL-aligned)": [
    "3.1.1 Identifying and naming emotions",
    "3.1.2 Understanding self & identity",
    "3.1.3 Recognizing strengths",
    "3.1.4 Confidence, self-efficacy & growth mindset",
    "3.2.1 Emotion regulation & impulse control",
    "3.2.2 Stress management & coping skills",
    "3.2.3 Goal-setting & follow-through",
    "3.2.4 Organization, persistence & self-discipline",
    "3.3.1 Empathy & perspective-taking",
    "3.3.2 Respect for diversity & inclusion",
    "3.3.3 Understanding norms & expectations",
    "3.3.4 Awareness of supports and resources",
    "3.4.1 Communication & active listening",
    "3.4.2 Cooperation, teamwork & collaboration",
    "3.4.3 Conflict management & problem-solving in relationships",
    "3.4.4 Help-seeking & providing support",
    "3.4.5 Building and sustaining positive relationships",
    "3.5.1 Evaluating options & consequences",
    "3.5.2 Ethical and prosocial choices",
    "3.5.3 Personal and social problem-solving",
    "3.5.4 Safety-oriented decisions & risk avoidance",
    "3.5.5 Contributions to class/program/community wellbeing"
  ],
  "Domain 4. Academic Engagement & Habits": [
    "4.1 Academic Behaviors (Engagement)",
    "4.2 Academic Perseverance (Grit/Tenacity)",
    "4.3 Learning Strategies (Study Skills)",
    "4.4 Academic Confidence (Self-Efficacy)"
  ],
  "Domain 5. Positive Youth Development (PYD) & Assets": [
    "5.1 Empowerment & Safety",
    "5.2 Positive Values",
    "5.3 Constructive Use of Time",
    "5.4 Positive Identity"
  ],
  "Domain 6. Civic Engagement & Community": [
    "6.1 Civic Skills & Knowledge",
    "6.2 Community Service & Action",
    "6.3 Youth Voice & Leadership",
    "6.4 Criticality & Social Justice",
    "6.5 Digital Citizenship & Safety"
  ],
  "Domain 7. Physical & Behavioral Health": [
    "7.1 Physical Activity & Nutrition",
    "7.2 Mental Health Status (Symptom Reduction)",
    "7.3 Healing & Trauma Recovery",
    "7.4 Access to Mental Health Services"
  ],
  "Domain 8. College & Career Readiness": [
    "8.1 Key Content Knowledge",
    "8.2 Key Cognitive Strategies",
    "8.3 Transition Knowledge & Skills",
    "8.4 Career Awareness & Exploration",
    "8.5 Employability Skills",
    "8.6 Technical Skills & Work-Based Learning"
  ],
  "Domain 9. Access & Equity": [
    "9.1 Access to Resources",
    "9.2 Participation & Inclusion"
  ],
  "Domain 10. Adult & System Capacity": [
    "10.1 Professional Knowledge & Skill",
    "10.2 Instructional Practice Change",
    "10.3 Systemic Improvement",
    "10.4 Family Engagement Capacity"
  ]
};

/**
 * REVISED OUTCOME CODEBOOK
 * Integrating frameworks:
 * - Gholdy Muhammad (Joy & Criticality)
 * - Hidi & Renninger (Interest)
 * - CDC (Connectedness & Physical Health)
 * - CASEL (SEL)
 * - UChicago (Academic Habits)
 * - Search Institute (Assets)
 * - CIRCLE (Civics)
 * - ISTE (Digital Citizenship)
 * - Dual Continua Model & SAMHSA (Behavioral Health/Trauma)
 * - Perkins V (Career/CTE)
 * - Epstein (Family Engagement)
 */
export const OUTCOME_CODEBOOK_DEFINITIONS = `
Domain 1. Joy, Interest & Motivation in Learning
Framework Basis: Gholdy Muhammad (Joy) & Hidi/Renninger (Interest)
1.1 Joy & Emotional Wellness
   - Definition: Outcomes focused on happiness, fun, the elevation of the spirit, and positive emotional response to the environment.
   - Source Framework: Gholdy Muhammad’s Hill Model (Pursuit 5: Joy).
   - Example: "Students will report having fun and feeling happy during the program."
1.2 Triggered Situational Interest (Curiosity)
   - Definition: Outcomes focused on attention being caught by the environment, asking questions, or wanting to know more.
   - Source Framework: Hidi & Renninger (Phase 1).
   - Example: "Students will be curious and ask questions about the new topic."
1.3 Value & Meaning (Utility Value)
   - Definition: Outcomes where students connect learning to their personal goals, future self, or community relevance.
   - Source Framework: Hidi & Renninger (Phase 3/4) / Eccles (Value Theory).
   - Example: "Students will explain how math skills help them in their daily lives."
1.4 Creative Exploration
   - Definition: Outcomes involving self-expression and the application of interest in novel ways.
   - Source Framework: N/A (Program Specific / National Core Arts Standards).
   - Example: "Students will design their own projects based on their interests."

Domain 2. Belonging, Relationships & School Connectedness
Framework Basis: CDC School Connectedness, Learning for Justice, Epstein's Framework
2.1 School/Program Connectedness (Belonging)
   - Definition: Student perception of being accepted, valued, and included in the school or program community.
   - Example: "Students will feel like they are an important part of the classroom."
2.2 Adult Support & Care
   - Definition: Outcomes related to forming positive, supportive relationships with teachers, mentors, or staff.
   - Example: "Students will identify at least one adult they trust."
2.3 Peer Connection & Social Integration
   - Definition: Outcomes related to forming friendships, peer acceptance, and positive social interaction.
   - Example: "Students will make new friends."
2.4 Cultural Identity & Affirmation (Gap Fill: Learning for Justice / Gholdy Muhammad)
   - Definition: Students express pride in their identity, heritage, or culture, and recognize the diversity of others.
   - Source Framework: Learning for Justice (Identity) & Gholdy Muhammad (Pursuit 1).
   - Example: "Students will share stories from their family history with pride."
2.5 Family Partnership & Connection (Gap Fill: Epstein Types 2 & 4)
   - Definition: Outcomes focused on trust, communication, and relationship building between families and the program.
   - Example: "Parents will report feeling more connected to their child's learning process."

Domain 3. Social & Emotional Learning (CASEL-aligned)
Framework Basis: CASEL (Collaborative for Academic, Social, and Emotional Learning)
(Important: Use the specific 3.x.x codes below. Do not use the 3.x category headers.)

3.1 Self-Awareness (Category Header - Do Not Use)
3.1.1 Identifying and naming emotions
   - Definition: Students can recognize and accurately label their own emotions.
   - Example: "Students will be able to identify and name their feelings in challenging situations."
3.1.2 Understanding self & identity
   - Definition: Students develop a realistic sense of self and awareness of their personal and cultural identity.
   - Example: "Students will deepen their understanding of who they are and what is important to them."
3.1.3 Recognizing strengths
   - Definition: Students can identify their own strengths, talents, and areas of competence.
   - Example: "Students will be able to name at least two personal strengths."
3.1.4 Confidence, self-efficacy & growth mindset
   - Definition: Students believe they can succeed, improve with effort, and handle challenges.
   - Example: "Students will show increased confidence in their ability to tackle difficult tasks."

3.2 Self-Management (Category Header - Do Not Use)
3.2.1 Emotion regulation & impulse control
   - Definition: Students manage strong emotions and control impulses in constructive ways.
   - Example: "Students will use strategies to calm down instead of acting out when upset."
3.2.2 Stress management & coping skills
   - Definition: Students use healthy strategies to cope with stress, frustration, or worry.
   - Example: "Students will practice at least one coping strategy when they feel stressed."
3.2.3 Goal-setting & follow-through
   - Definition: Students set personal goals and work persistently to achieve them.
   - Example: "Students will set an academic goal and take specific steps to reach it."
3.2.4 Organization, persistence & self-discipline
   - Definition: Students manage time, materials, and tasks effectively and stick with work over time.
   - Example: "Students will keep track of assignments and complete them on time."

3.3 Social Awareness (Category Header - Do Not Use)
3.3.1 Empathy & perspective-taking
   - Definition: Students understand and care about others’ feelings and viewpoints.
   - Example: "Students will show empathy by considering how peers might feel in a conflict."
3.3.2 Respect for diversity & inclusion
   - Definition: Students appreciate and respect people from diverse backgrounds and identities.
   - Example: "Students will demonstrate respect for peers from different cultures and identities."
3.3.3 Understanding norms & expectations
   - Definition: Students understand social and ethical norms for behavior in different contexts.
   - Example: "Students will learn appropriate ways to behave in classroom, online, and community settings."
3.3.4 Awareness of supports and resources
   - Definition: Students know about and feel comfortable accessing supports and resources around them.
   - Example: "Students will know where to go for academic, mental health, or other support."

3.4 Relationship Skills (Category Header - Do Not Use)
3.4.1 Communication & active listening
   - Definition: Students communicate clearly and listen attentively to others.
   - Example: "Students will practice active listening and clear communication in group work."
3.4.2 Cooperation, teamwork & collaboration
   - Definition: Students work well with others toward shared goals.
   - Note: Focus is on the skill of working together. For friendship/bonding, use 2.3.
   - Example: "Students will collaborate effectively with peers on group projects."
3.4.3 Conflict management & problem-solving in relationships
   - Definition: Students handle conflicts and disagreements in constructive ways.
   - Example: "Students will use peaceful strategies to resolve conflicts with peers."
3.4.4 Help-seeking & providing support
   - Definition: Students ask for help when needed and offer help to others.
   - Example: "Students will seek support from adults or peers when they are struggling."
3.4.5 Building and sustaining positive relationships
   - Definition: Students build, maintain, and repair positive relationships over time.
   - Example: "Students will demonstrate skills that help them build and sustain friendships."

3.5 Responsible Decision-Making (Category Header - Do Not Use)
3.5.1 Evaluating options & consequences
   - Definition: Students consider possible options and likely outcomes before acting.
   - Example: "Students will weigh the pros and cons of choices before making decisions."
3.5.2 Ethical and prosocial choices
   - Definition: Students make choices that reflect ethical principles and concern for others.
   - Example: "Students will make fair and respectful choices even when no one is watching."
3.5.3 Personal and social problem-solving
   - Definition: Students identify problems, generate solutions, and take constructive action.
   - Example: "Students will use a structured problem-solving process to address challenges."
3.5.4 Safety-oriented decisions & risk avoidance
   - Definition: Students make choices that protect their safety and reduce risk.
   - Example: "Students will avoid situations that put their physical or emotional safety at risk."
3.5.5 Contributions to class/program/community wellbeing
   - Definition: Students take small, daily actions to maintain or improve their immediate environment (classroom, program space).
   - Note: For larger community service projects or volunteering, use 6.2 (formerly 8.3).
   - Example: "Students will help clean up the classroom and assist teachers with tasks.""

Domain 4. Academic Engagement & Habits
Framework Basis: UChicago Consortium "Academic Mindsets and Behaviors"
4.1 Academic Behaviors (Engagement)
   - Definition: Observable participation, such as attending class, doing homework, and participating in discussions.
   - Example: "Students will complete all assigned homework."
4.2 Academic Perseverance (Grit/Tenacity)
   - Definition: The ability to stick with a task despite challenges or setbacks.
   - Example: "Students will keep trying to solve a problem even when it is difficult."
4.3 Learning Strategies (Study Skills)
   - Definition: Use of specific methods to improve learning, such as note-taking, time management, or metacognition.
   - Example: "Students will use a planner to organize their assignments."
4.4 Academic Confidence (Self-Efficacy)
   - Definition: Belief in one's ability to succeed in academic tasks.
   - Example: "Students will believe they can succeed in this class."

Domain 5. Positive Youth Development (PYD) & Assets
Framework Basis: Search Institute’s 40 Developmental Assets
5.1 Empowerment & Safety
   - Definition: Youth feel safe and feel they have control over their environment.
   - Example: "Youth will feel safe in their neighborhood."
5.2 Positive Values
   - Definition: Internal guiding principles like integrity, honesty, and responsibility.
   - Example: "Students will tell the truth even when it is hard."
5.3 Constructive Use of Time
   - Definition: Engagement in enriching activities like arts, sports, or religious groups.
   - Example: "Students will participate in a sports team."
5.4 Positive Identity
   - Definition: Self-esteem and a sense of purpose (distinct from academic confidence).
   - Example: "Students will feel good about their future."

Domain 6. Civic Engagement & Community
Framework Basis: CIRCLE Framework, Gholdy Muhammad (Criticality), & ISTE Standards
6.1 Civic Skills & Knowledge
   - Definition: Understanding how systems work and how to navigate them.
   - Example: "Students will understand how the local school board makes decisions."
6.2 Community Service & Action
   - Definition: Taking action to improve the community (volunteering, service learning).
   - Example: "Students will volunteer at a local food bank."
6.3 Youth Voice & Leadership
   - Definition: Expressing opinions and influencing decisions.
   - Example: "Students will present their ideas to the principal."
6.4 Criticality & Social Justice (Replaces "Social Responsibility")
   - Definition: Students understand power, equity, and social justice, and analyze systems of oppression or inequality.
   - Source Framework: Gholdy Muhammad’s Hill Model (Pursuit 4: Criticality).
   - Example: "Students will analyze why food deserts exist in their community."
6.5 Digital Citizenship & Safety (Gap Fill: ISTE Standard 2)
   - Definition: Responsible, ethical, and safe behavior in online environments.
   - Example: "Students will understand how to protect their privacy online."

Domain 7. Physical & Behavioral Health
Framework Basis: CDC WSCC (Physical), Dual Continua Model (Mental Health), & SAMHSA (Trauma)
7.1 Physical Activity & Nutrition
   - Definition: Engaging in exercise, eating healthy foods, and practicing hygiene.
   - Source Framework: CDC WSCC.
   - Example: "Students will exercise for 60 minutes a day."
7.2 Mental Health Status (Symptom Reduction)
   - Definition: Outcomes related to the reduction of distress, anxiety, depression, or specific behavioral symptoms.
   - Source Framework: Dual Continua Model (Keyes) - The "Illness" Continuum.
   - Note: Use this for *state of being* (feeling less anxious). Use 3.2 for *skills* (learning to cope).
   - Example: "Students will report lower levels of anxiety." OR "Students will exhibit fewer disruptive outbursts."
7.3 Healing & Trauma Recovery
   - Definition: Outcomes related to processing trauma, feeling psychologically safe, and moving toward recovery.
   - Source Framework: SAMHSA (Trauma-Informed Approach).
   - Example: "Youth will process past traumatic events in a safe environment."
7.4 Access to Mental Health Services
   - Definition: The actual utilization of counseling, therapy, or crisis intervention.
   - Source Framework: CDC WSCC (Counseling, Psychological, and Social Services).
   - Example: "Students will meet weekly with a licensed social worker."

Domain 8. College & Career Readiness
Framework Basis: David Conley’s "Four Keys" & Perkins V (CTE Framework)
8.1 Key Content Knowledge
   - Definition: Mastery of core subjects required for post-secondary success.
   - Example: "Students will master Algebra I concepts."
8.2 Key Cognitive Strategies
   - Definition: Critical thinking, research, and problem formulation skills relevant to career/college.
   - Example: "Students will analyze conflicting sources of information."
8.3 Transition Knowledge & Skills
   - Definition: Understanding the bureaucratic processes of college/career (applications, financial aid, resumes).
   - Example: "Students will complete the FAFSA."
8.4 Career Awareness & Exploration (Perkins V)
   - Definition: Developing knowledge of career paths, conducting interest inventories, and exploring potential futures.
   - Example: "Students will research three different career paths they are interested in."
8.5 Employability Skills (Perkins V / Soft Skills)
   - Definition: General skills necessary for success in the workplace, such as professionalism, workplace communication, and interview skills.
   - Note: Use this instead of Domain 3 (SEL) when the context is explicitly professional/work-readiness.
   - Example: "Students will demonstrate professional etiquette during a mock interview."
8.6 Technical Skills & Work-Based Learning (Perkins V)
   - Definition: Acquisition of specific industry skills, certifications, or completion of internships/apprenticeships.
   - Example: "Students will earn an industry-recognized certification in coding." OR "Students will complete a 6-week internship."

Domain 9. Access & Equity
Framework Basis: Opportunity-to-Learn (OTL) Standards
9.1 Access to Resources
   - Definition: Availability of materials, technology, or facilities.
   - Example: "Students will have access to a laptop for homework."
9.2 Participation & Inclusion
   - Definition: Removing barriers to entry for specific groups.
   - Example: "The program will be accessible to students with disabilities."

Domain 10. Adult & System Capacity
Framework Basis: Learning Forward Standards & Epstein Type 3/6
10.1 Professional Knowledge & Skill
   - Definition: Adults acquiring new techniques or understanding.
   - Example: "Teachers will learn new classroom management strategies."
10.2 Instructional Practice Change
   - Definition: Adults implementing what they learned.
   - Example: "Teachers will use the new strategies in their lessons."
10.3 Systemic Improvement
   - Definition: Changes in policy, culture, or infrastructure.
   - Example: "The school will adopt a new discipline policy."
10.4 Family Engagement Capacity (Gap Fill: Epstein)
   - Definition: Implementation of systems, events, or policies to include families in the educational process.
   - Example: "The program will establish a Parent Advisory Council."
`;

export const ACCELERATE_PHILLY_DOMAINS = [
  "Code 01: Improve Safety and Well-being",
  "Code 02: Partner with Families and Community",
  "Code 03: Accelerate Academic Achievement",
  "Code 04: Recruit and Retain Diverse and Highly Effective Educators",
  "Code 05: Deliver Efficient, High-Quality, Cost-Effective Operations"
];

export const ACCELERATE_PHILLY_SUBCATEGORIES: Record<string, string[]> = {
  "Code 01: Improve Safety and Well-being": [],
  "Code 02: Partner with Families and Community": [],
  "Code 03: Accelerate Academic Achievement": [],
  "Code 04: Recruit and Retain Diverse and Highly Effective Educators": [],
  "Code 05: Deliver Efficient, High-Quality, Cost-Effective Operations": []
};

export const ACCELERATE_PHILLY_INSTRUCTIONS = `
Task: Your objective is to perform rigorous qualitative coding on non-profit program logic models. You will crosswalk the stated outcomes of these programs against the Accelerate Philly Strategic Plan Codebook provided below.

Strict Coding Rules:
    Substantive Connection Only: You must only apply a code if the non-profit's outcome demonstrates a direct, substantive, and logical contribution to the strategic plan priority. Do not infer or stretch connections. If an outcome only tangentially touches a priority area, do not code it.
    Mutually Exclusive vs. Exhaustive: A single outcome may align with multiple codes. Apply multiple codes only if distinct elements of the outcome independently satisfy the inclusion criteria for each code.
    Confidence Threshold: If you are unsure whether an outcome meets the inclusion criteria, default to excluding it. Precision is more important than volume.

RULES:
1. Input is a JSON array of objects. Each object has "row_id", "outcome_text", and optionally "group".
2. For each item:
   - Determine if it contains multiple distinct outcomes (split_needed: "yes" or "no").
   - If "yes" (e.g. "Students will improve math scores AND make new friends"):
     - Create multiple "split_items".
     - Assign codes to each split item separately.
   - If "no":
     - Create a single "split_item" with the original text.
3. CODING PROCESS for each item:
   - Select the BEST FIT "Primary Domain" from the codebook.
   - Assign a "Confidence" level (high, medium, low, none).
   - "Uncoded": Set to true IF the text is vague, irrelevant, or does not fit any domain (e.g. "N/A", "See above").

Accelerate Philly Codebook:
    Code 01: Improve Safety and Well-being
        Definition: Focuses on improving the physical, social-emotional, and environmental safety of students and staff.
        Inclusion Criteria: Apply this code when the outcome explicitly addresses school facility improvements (e.g., lead/asbestos remediation, security cameras) , safe travel to and from school , school climate and restorative justice programs (e.g., PBIS, SEL) , mental and behavioral health services , nursing and physical health supports , food security and breakfast programs , or supervised recess models.
        Exclusion Criteria: Do NOT apply this code if the outcome focuses strictly on academic tutoring or family communication that does not directly address physical or emotional safety.

    Code 02: Partner with Families and Community
        Definition: Focuses on fostering trusting relationships, two-way communication, and collaborative structures with parents, guardians, and the community.
        Inclusion Criteria: Apply this code when the outcome explicitly mentions developing multilingual communication systems , facilitating parent/guardian or community advisory groups , improving coordination of community partnerships , adult education via Parent University , utilizing parent ambassadors , or replicating Community School wrap-around models.
        Exclusion Criteria: Do NOT apply this code for general student out-of-school time that lacks a structural family engagement component.

    Code 03: Accelerate Academic Achievement
        Definition: Focuses on improving student learning, achieving grade-level proficiency on state assessments, providing well-rounded educational opportunities, and keeping students on track for graduation.
        Inclusion Criteria: Apply this code when the outcome explicitly targets access to high-quality Pre-K , standards-aligned core curriculum (Math, ELA/Science of Reading, Science) , high-impact tutoring , extended-day or out-of-school time programming , Individualized Education Plan (IEP) compliance or English Learner support , expansion of arts, music, and rigorous course offerings , Career and Technical Education (CTE) , 9th Grade On-Track initiatives , dropout reduction , or financial literacy.
        Exclusion Criteria: Do NOT apply this code for programs focused solely on basic physiological needs or standalone teacher recruitment.

    Code 04: Recruit and Retain Diverse and Highly Effective Educators
        Definition: Focuses on hiring, developing, and retaining a workforce of teachers and leaders that reflect the diversity of the student population and are well-supported.
        Inclusion Criteria: Apply this code when the outcome explicitly addresses teacher/principal recruitment and retention incentives , recruiting Black and Latino male educators , "Grow-Your-Own" and paraprofessional-to-teacher pathways , establishing instructional leadership teams , instructional coaching and feedback models , or providing ongoing professional development for instructional and non-instructional staff.
        Exclusion Criteria: Do NOT apply this code for direct student instruction or student mentoring programs.

    Code 05: Deliver Efficient, High-Quality, Cost-Effective Operations
        Definition: Focuses on improving district-level systems, budgeting transparency, facilities maintenance, and central office accountability.
        Inclusion Criteria: Apply this code when the outcome explicitly mentions building project management capacity , streamlining staff onboarding/hiring timelines , organizational succession planning , implementing equitable school selection processes , maintaining school cleanliness standards , or extending evidence-based budgeting practices.
        Exclusion Criteria: Do NOT apply this code for school-level student climate initiatives or individual classroom curriculum execution.

OUTPUT FORMAT:
   - Return a strictly valid JSON object.
   - Root property: "coded_items" (array).
   - Match the schema provided in the tool definition exactly.
   - For each item, output the results as a flat, structured JSON array of objects in "split_items". Do not nest arrays within the objects to ensure seamless transformation into tabular datasets. Use the following keys for each split item:
     - text: The exact text of the non-profit's stated outcome (or the specific split portion).
     - primary_domain: The specific code applied (e.g., "Code 03: Accelerate Academic Achievement").
     - primary_subcategory: Use "none".
     - primary_confidence: High or Medium.
     - notes: A brief explanation citing the specific language from the logic model that triggered the code.
     - subject_area: Use "none".
     - target_population_primary: Use "none".
     - secondary_codes: Leave empty array.
     - uncoded: true if no code applies, false otherwise.
`;

export const CODEBOOK_CONTEXT = OUTCOME_CODEBOOK_DEFINITIONS;

export const BATCH_MODE_INSTRUCTIONS = `
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
3. CODING PROCESS for each item:
   - Select the BEST FIT "Primary Domain" and "Primary Subcategory" from the codebook.
   - Assign a "Confidence" level (high, medium, low, none).
   - "Uncoded": Set to true IF the text is vague, irrelevant, or does not fit any domain (e.g. "N/A", "See above").
   
   - "Target Population":
     - Default to "students_youth" for outcomes about participants, children, or students.
     - Use "families_caregivers" ONLY if parents/families are the subject (e.g. "Parents will attend...").
     - Use "educators_staff" ONLY if teachers/staff are the subject (e.g. "Staff will learn...").

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
     - "World Languages": Learning a second language (ACTFL).
     - "Career & Technical Education (CTE) / Workforce": Vocational skills, career prep, internships, soft skills for work (Perkins V).
     - "Social & Emotional Learning (SEL Only)": Use ONLY if the outcome is specifically about SEL skills (Domain 3) AND no other academic subject is mentioned.
     - "N/A / General": Use for outcomes about belonging, fun, safety, or operations that are not tied to a curricular subject.

4. OUTPUT FORMAT:
   - Return a strictly valid JSON object.
   - Root property: "coded_items" (array).
   - Match the schema provided in the tool definition exactly.

CRITICAL for Domain 3 (SEL):
- Do NOT use category headers like "3.1 Self-Awareness".
- You MUST use the specific sub-codes like "3.1.1 Identifying and naming emotions".

5. SEL DEEP DIVE & DISAMBIGUATION (Domain 3):
   - 3.2.1 (Emotion Reg) vs 3.2.2 (Stress Mgmt): Use 3.2.1 for immediate impulse control/calming down. Use 3.2.2 for applying specific coping strategies/tools for stress.
   - 3.2.3 (Goals) vs 3.2.4 (Persistence): Use 3.2.3 for the act of planning/setting the goal. Use 3.2.4 for the act of sticking with it/working hard.
   - 3.3.1 (Empathy) vs 3.4.1 (Active Listening): Empathy is internal understanding. Active listening is the demonstrated behavior.
   - 3.5.2 (Ethical Choices) vs 5.2 (Positive Values): Use 3.5.2 when a *decision* is made in a specific situation. Use 5.2 for general character traits/values.

SPECIFIC CODING RULES & TIE-BREAKERS:
1. SKILL vs. STATE:
   - Domain 3 (SEL) is for SKILLS/COMPETENCIES (e.g., "Student uses coping strategies").
   - Domain 1 (Joy) & Domain 2 (Belonging) are for EXPERIENCES/STATES (e.g., "Student feels happy", "Student feels safe").
   - Do NOT code a feeling ("I feel confident") as a skill unless the text implies a growth in capacity.

2. SEL vs. MENTAL HEALTH:
   - Use 3.2.2 (Stress Management) when a student *learns/uses a tool* to cope.
   - Use 7.2 (Mental Health Status) when the outcome is a *reduction in symptoms* (e.g., "decreased anxiety").

3. GENERAL vs. ACADEMIC CONFIDENCE:
   - Use 3.1.4 for general self-confidence or growth mindset.
   - Use 4.4 (Academic Confidence) ONLY for confidence specifically related to schoolwork/grades.

4. 3.4.2 (Cooperation) vs. 2.3 (Peer Connection):
   - Use 3.4.2 for the *skill* of working together (teamwork).
   - Use 2.3 for the *relational outcome* of making friends or feeling accepted.

CRITICAL for Formatting:
- Ensure the 'primary_domain' string exactly matches the codebook headers (e.g. "Domain 1. Joy, Interest & Motivation in Learning").
- Ensure the 'primary_subcategory' string exactly matches the codebook items (e.g. "1.1 Joy & Emotional Wellness").
`;
