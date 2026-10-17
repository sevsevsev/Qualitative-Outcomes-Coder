// codebooks/youthOutcomesV3.data.ts
//
// Codebook 3.x data: the single source of truth for the Youth Outcomes
// Codebook 3.x. codebooks/youthOutcomesV3.ts builds the prompt text, the
// schema enums and the explorer view from it, so nothing is written twice.
//
// First generated from docs/codebook/proposed-codebook.md (approved by
// Severin, 2026-09-26) by codebook-refinement/v3/import_proposed.py. Edit it
// directly from now on, through a CP (STANDARDS S4.1).
//
// `basis` keeps each citation with its verification status. Only the parts
// marked "(verified)" reach the prompt (CLAUDE.md: a citation needs evidence).

import type { V3Domain } from './youthOutcomesV3.types.js';

export const V3_DOMAINS: V3Domain[] = [
  {
    "id": "Y1",
    "part": "Y",
    "name": "Academic Learning & Achievement",
    "description": "What young people learn and how they progress through school: demonstrated learning by subject, the behaviors and beliefs that shape learning, and school and postsecondary status. All academic outcomes live here, in three categories.",
    "frameworkBasis": "ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse; secondary: Seal of Biliteracy Guidelines (home-language maintenance); National Reading Panel (2000) (reading); NAEP (subjects of a well-rounded education); NAMLE, Core Principles of Media Literacy Education; Conley, Four Keys (key cognitive strategies); Head Start Early Learning Outcomes Framework (early childhood); Irvin et al. (2004) (office discipline referrals); Attendance Works (chronic absence); McKinney-Vento Act and 42 U.S.C. 675(1)(G) (school stability); ESSA State report cards (advanced coursework); ESSA graduation-rate indicator; WIOA youth program elements, 20 CFR 681.460 (dropout recovery).",
    "categoryLine": "A. Subject learning (Y1.1–Y1.8) · B. Learning behaviors & mindsets (Y1.9–Y1.12) · C. Educational progress & attainment (Y1.13–Y1.18)",
    "categories": [
      {
        "letter": "A",
        "name": "Subject learning",
        "description": "Demonstrated learning in a subject: reading and writing, English and home languages, math, science and computing, other academic subjects, the arts, critical thinking and inquiry, and early learning before kindergarten.",
        "codes": [
          {
            "id": "Y1.1",
            "name": "Literacy: Reading & Writing",
            "short": "Literacy",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.1; part of 9.1",
            "definition": "A demonstrated gain in reading (phonics, fluency, vocabulary, comprehension, reading level) or in writing and composition in any genre.",
            "include": "Reading level, fluency, comprehension scores; reading or ELA test proficiency; writing quality, essays, published writing presented as a writing skill.",
            "exclude": "Confidence or habits about reading or writing; oral presentation; English learners' language acquisition; pre-K pre-literacy.",
            "useInstead": "Y1.12 confidence about reading aloud; Y4.6 public speaking; Y1.2 English learners; Y1.8 pre-K pre-literacy; Y2.5 creative writing as self-expression with no stated skill gain.",
            "example": {
              "text": "Students will improve reading fluency by one grade level.",
              "goldId": "S048"
            },
            "source": "ESSA State academic standards for reading or language arts, 20 U.S.C. 6311(b)(1)(C); Report of the National Reading Panel (NICHD, 2000); Common Core State Standards, College and Career Readiness Anchor Standards for Writing.",
            "basis": "ESSA 20 U.S.C. 6311(b)(1)(C) (verified); National Reading Panel (2000) (verified, partial: reading only; excerpt replaced by CP-11-01, claim y1-subject-03); Common Core CCR Anchor Standards for Writing (verified)."
          },
          {
            "id": "Y1.2",
            "name": "English Language Development & Multilingualism",
            "short": "English language development",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.4",
            "definition": "Growth in English proficiency for English learners (listening, speaking, reading, writing), or maintenance and development of a home language alongside English.",
            "include": "ELP level gains, reclassification, WIDA/ELPAC-type scores; bilingual or home-language maintenance for youth.",
            "exclude": "A native English speaker learning another language (a world language); adult ESL.",
            "useInstead": "Y1.5 world languages; F1.6 adult English classes; Y5.2 pride in one's language as identity.",
            "example": {
              "text": "Youth will improve their English language proficiency.",
              "goldId": "S028"
            },
            "source": "WIDA English Language Development Standards Framework (2020 edition); ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv); ACTFL et al. (2020), Guidelines for Implementing the Seal of Biliteracy (maintaining home or heritage languages).",
            "basis": "Re-verified 2026-09-27 (CP-10-01): WIDA 2020 (verified, direct for English proficiency); ESSA 6311(c)(4)(B)(iv) (verified, direct). CP-11-01 (2026-10-16): ACTFL et al. (2020), Guidelines for Implementing the Seal of Biliteracy, section 1 (verified, direct for home-language maintenance; claim y1-subject-04)."
          },
          {
            "id": "Y1.3",
            "name": "Mathematics",
            "short": "Mathematics",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.2",
            "definition": "A demonstrated gain in math skill, problem-solving or grade-level math proficiency.",
            "include": "Math test scores and proficiency; specific math skills; math used in money contexts when the outcome is the math.",
            "exclude": "Math confidence or growth mindset; grades or GPA in a math class; money-management habits.",
            "useInstead": "Y1.12 math mindset; Y1.15 grades; Y7.6 budgeting and saving.",
            "example": {
              "text": "Students will improve their math problem-solving skills and grade-level proficiency.",
              "goldId": "S208"
            },
            "source": "ESSA State academic standards for mathematics, 20 U.S.C. 6311(b)(1)(C).",
            "basis": "ESSA 20 U.S.C. 6311(b)(1)(C), mathematics (verified)."
          },
          {
            "id": "Y1.4",
            "name": "Science, Technology & Engineering",
            "short": "Science, technology & engineering",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.8",
            "definition": "A demonstrated gain in science (life, physical, earth, environmental), engineering design, or computer science (coding, computational thinking, computing systems).",
            "include": "Science test proficiency; ecosystem or ecology knowledge; engineering design process; coding, computational thinking.",
            "exclude": "STEM interest; STEM identity; online safety; industry certifications; advanced course enrollment; everyday digital skills (email, video calls, online forms, office software).",
            "useInstead": "Y2.2/Y2.3 interest; Y5.3 'a STEM person'; Y6.7 online safety; Y7.4 certifications; Y1.16 enrolling in advanced STEM courses; Y7.3 everyday digital skills (F1.6 for adults).",
            "example": {
              "text": "Students will apply the engineering design process to build and test a prototype.",
              "goldId": "S104"
            },
            "source": "ESSA State academic standards for science, 20 U.S.C. 6311(b)(1)(C); Next Generation Science Standards (2013), three dimensions; CSTA K-12 Computer Science Standards (2017).",
            "basis": "ESSA 6311(b)(1)(C), science (verified); NGSS Lead States (2013), three dimensions (verified); CSTA K-12 CS Standards (2017) (verified)."
          },
          {
            "id": "Y1.5",
            "name": "Other Academic Subjects",
            "short": "Other academic subjects",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.3",
            "definition": "A demonstrated gain in history, geography, economics, world languages or another academic subject not covered by Y1.1-Y1.4 or Y1.6.",
            "include": "History and geography content; economics concepts; a world language learned by a native English speaker; other ESSA well-rounded subjects.",
            "exclude": "Civics and government (Y6.2); health education (Y8.3); personal finance (Y7.6); practical skills with no academic content.",
            "useInstead": "Y6.2 civics; Y8.3 health knowledge; Y7.6 financial capability; Y1.7 research and source evaluation.",
            "example": {
              "text": "Students will explain the causes of a major historical event."
            },
            "source": "ESSA \"well-rounded education\", 20 U.S.C. 7801(52); NAEP authorization, 20 U.S.C. 9622(b)(2)(D).",
            "basis": "ESSA 20 U.S.C. 7801(52) well-rounded education (verified); NAEP 20 U.S.C. 9622(b)(2)(D) (verified)."
          },
          {
            "id": "Y1.6",
            "name": "Arts Learning",
            "short": "Arts learning",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.9",
            "definition": "A demonstrated gain in technique, vocabulary or knowledge of an art form (dance, media arts, music, theatre, visual arts).",
            "include": "Instrument proficiency; dance or art vocabulary; juried or assessed artistic skill.",
            "exclude": "Creating or performing as self-expression or experience, with no stated skill gain.",
            "useInstead": "Y2.5 creative expression and performance; Y2.3 a lasting passion for an art form.",
            "example": {
              "text": "Students will develop technical proficiency on their chosen instrument.",
              "goldId": "S199"
            },
            "source": "National Core Arts Standards (2014): dance, media arts, music, theatre and visual arts.",
            "basis": "National Core Arts Standards (2014) (verified; the processes organize the standards, cycle 04 PARTIAL on 'definition of learning')."
          },
          {
            "id": "Y1.7",
            "name": "Critical Thinking, Inquiry & Media Literacy",
            "short": "Critical thinking & media literacy",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.2",
            "definition": "Analyzing and evaluating information and sources, research and inquiry skills, and media literacy, in any subject.",
            "include": "Evaluating source credibility; identifying misinformation; research projects framed as inquiry skill; analyzing conflicting sources.",
            "exclude": "Online privacy and safety; interpersonal problem-solving; analyzing power and injustice.",
            "useInstead": "Y6.7 online safety; Y4.10 personal decision-making; Y6.3 critical consciousness.",
            "example": {
              "text": "Youth will evaluate the credibility of online news sources and identify misinformation.",
              "goldId": "S155"
            },
            "source": "NAMLE, Core Principles of Media Literacy Education; Conley, Four Keys: Key Cognitive Strategies.",
            "basis": "NAMLE, Core Principles of Media Literacy Education (verified); Conley (2016, April), Four Keys to College and Career Readiness, School Administrator (AASA), Key Cognitive Strategies (verified, direct; attribution corrected by CP-11-01, claim y1-subject-11)."
          },
          {
            "id": "Y1.8",
            "name": "Early Learning & School Readiness",
            "short": "Early learning & school readiness",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.7",
            "definition": "Early language, literacy, math and cognitive development, and kindergarten readiness, for children below kindergarten age.",
            "include": "Pre-literacy (letter recognition, phonemic awareness); early numeracy; readiness assessments; broad developmental milestones on screeners such as the ASQ.",
            "exclude": "Early motor skills; developmental screenings received (a service); social-emotional skills of young children.",
            "useInstead": "Y8.2 motor skills; Y8.5 screenings and referrals received; Y4 for social-emotional skills at any age.",
            "example": {
              "text": "Children will demonstrate age-appropriate pre-literacy skills (letter recognition, phonemic awareness).",
              "goldId": "S025"
            },
            "source": "Head Start Early Learning Outcomes Framework (2015), Language & Literacy and Cognition.",
            "basis": "Head Start ELOF (2015), Language & Literacy and Cognition (verified; the 2015 year is confirmed on the govinfo GPO copy, claim y1-subject-15). ED and HHS (2013), Race to the Top-Early Learning Challenge, 78 Fed. Reg. 53964, Essential Domains of School Readiness and Kindergarten Entry Assessment (verified, direct; cross-program support, claim y1-subject-13). Early-childhood-specific by necessity: the construct is about young children. ELOF is cited for Y1.8 only (decision Y1-1, 2026-10-16)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Learning behaviors & mindsets",
        "description": "The behaviors and beliefs that shape how a young person learns: taking part in schoolwork, persisting with hard tasks, using study strategies, and believing in oneself as a learner.",
        "codes": [
          {
            "id": "Y1.9",
            "name": "Academic Engagement Behaviors",
            "short": "Academic engagement behaviors",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "5.1",
            "definition": "Observable participation in schoolwork: homework completion, being prepared, class participation.",
            "include": "Homework completion rates; asking questions and taking part in class discussions; coming prepared.",
            "exclude": "School attendance rates; program attendance; curiosity as a feeling.",
            "useInstead": "Y1.13 school attendance; A2.5 program attendance counts; Y2.2 curiosity.",
            "example": {
              "text": "Students will turn in homework on time.",
              "goldId": "S235"
            },
            "source": "Farrington et al. (2012), UChicago Consortium, Academic Behaviors.",
            "basis": "Farrington et al. (2012), Academic Behaviors (verified)."
          },
          {
            "id": "Y1.10",
            "name": "Academic Perseverance",
            "short": "Academic perseverance",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P21",
            "from2x": "5.2",
            "definition": "Sticking with difficult schoolwork or learning tasks despite setbacks, including task persistence in young children.",
            "include": "Persisting on hard problems; not giving up on assignments; early-childhood task persistence.",
            "exclude": "General persistence outside learning; frustration tolerance as emotional regulation.",
            "useInstead": "Y4.3 general self-discipline; Y4.2 managing frustration.",
            "example": {
              "text": "Children will show persistence and curiosity when working on puzzles and new tasks.",
              "goldId": "S220"
            },
            "source": "Farrington et al. (2012), UChicago Consortium, Academic Perseverance.",
            "basis": "Farrington et al. (2012), Academic Perseverance (verified). Re-verified 2026-09-27 (CP-10-01): Head Start ELOF dropped from this code: the codebook does not source codes from early-childhood frameworks except where the construct is about young children (Y1.8)."
          },
          {
            "id": "Y1.11",
            "name": "Learning Strategies & Study Skills",
            "short": "Learning strategies",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "5.3",
            "definition": "Using specific methods to learn: note-taking, planners, test preparation, self-quizzing, metacognition.",
            "include": "Named study techniques; planning schoolwork with a tool.",
            "exclude": "General organization outside school; goal-setting in general.",
            "useInstead": "Y4.3 general organization and goals.",
            "example": {
              "text": "Students will increase their use of effective study strategies such as note-taking and test preparation.",
              "goldId": "S221"
            },
            "source": "Farrington et al. (2012), UChicago Consortium, Learning Strategies.",
            "basis": "Farrington et al. (2012), Learning Strategies (verified)."
          },
          {
            "id": "Y1.12",
            "name": "Academic Mindsets & Self-Efficacy",
            "short": "Academic mindsets",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "5.4",
            "definition": "Beliefs about oneself as a learner: academic self-efficacy, belonging in academic work, and growth mindset about intelligence or ability to learn.",
            "include": "'I can succeed in this class'; believing intelligence or math ability grows with effort; confidence in academic abilities.",
            "exclude": "General self-confidence; growth mindset about challenges in general.",
            "useInstead": "Y5.4 general confidence and general growth mindset.",
            "example": {
              "text": "Students will believe they can pass their algebra class.",
              "goldId": "S216"
            },
            "source": "Farrington et al. (2012), UChicago Consortium, Academic Mindsets.",
            "basis": "Farrington et al. (2012), Academic Mindsets (verified)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Educational progress & attainment",
        "description": "A young person's status and progress through school and beyond: attendance, discipline, grades and credits, advanced courses, graduation, and college or training after high school.",
        "codes": [
          {
            "id": "Y1.13",
            "name": "Attendance & School Stability",
            "short": "Attendance & school stability",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P22",
            "from2x": "1.5",
            "definition": "A student's school attendance, chronic absence, or staying enrolled in school through disruption (homelessness, foster placement changes, pregnancy).",
            "include": "Attendance rates for participating students; chronic absenteeism; remaining enrolled or in the school of origin.",
            "exclude": "Program attendance or dosage; re-enrolling after dropping out.",
            "useInstead": "A2.5 program attendance; Y1.17 re-engagement after leaving school.",
            "example": {
              "text": "Participating students will reduce chronic absenteeism from school.",
              "goldId": "S233"
            },
            "source": "Attendance Works, chronic absence; McKinney-Vento Act, 42 U.S.C. 11432(g)(3)(A)-(B) (school of origin and school stability); 42 U.S.C. 675(1)(G), foster care case plan (educational stability).",
            "basis": "Attendance Works, chronic absence (verified); McKinney-Vento, 42 U.S.C. 11432(g)(3)(A)-(B) (verified, direct; pinpoint added by CP-11-01, claim y1-attainment-03); 42 U.S.C. 675(1)(G) (verified, direct for foster placement changes; claim y1-attainment-05)."
          },
          {
            "id": "Y1.14",
            "name": "Exclusionary Discipline",
            "short": "Exclusionary discipline",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new (part of 1.6)",
            "definition": "Suspensions, expulsions, office discipline referrals, and alternatives that replace them.",
            "include": "Fewer suspensions or referrals; restorative alternatives to suspension; school-level suspension rates.",
            "exclude": "Reduced fighting or violence; interpersonal conflict resolution skills.",
            "useInstead": "Y8.12 fights and violence; Y4.8 conflict resolution skill.",
            "example": {
              "text": "Participating students will have fewer out-of-school suspensions.",
              "goldId": "S085"
            },
            "source": "U.S. Department of Education, Office for Civil Rights, Civil Rights Data Collection (discipline data elements); Irvin et al. (2004), office discipline referrals.",
            "basis": "U.S. ED OCR, CRDC 2021-22 discipline data elements (verified); Irvin et al. (2004), office discipline referrals (verified)."
          },
          {
            "id": "Y1.15",
            "name": "Grades, Credits & On-Track Status",
            "short": "Grades, credits & on-track",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P23",
            "from2x": "1.6",
            "definition": "Course grades, GPA, course passing, credit accumulation, promotion, 9th-grade on-track status, and 'academic performance' or test scores with no subject named.",
            "include": "GPA; passing core classes; credits for promotion; unspecified academic achievement.",
            "exclude": "A test score in a named subject; graduation; attendance.",
            "useInstead": "The subject code (Y1.1-Y1.6) for a named-subject test; Y1.17 graduation; Y1.13 attendance.",
            "example": {
              "text": "Ninth graders will earn enough credits to be promoted to tenth grade.",
              "goldId": "S056"
            },
            "source": "Allensworth & Easton (2005, 2007), UChicago Consortium On-Track Indicator and course grades.",
            "basis": "Allensworth & Easton (2005) On-Track Indicator (verified); Allensworth & Easton (2007) grades (verified)."
          },
          {
            "id": "Y1.16",
            "name": "Advanced Coursework & Dual Credit",
            "short": "Advanced coursework",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Enrolling in or completing advanced courses: AP, IB, honors, advanced STEM electives, dual enrollment and college credit earned in high school.",
            "include": "AP/IB/honors enrollment; dual enrollment; college credit before graduation.",
            "exclude": "Interest in a subject; postsecondary enrollment after high school.",
            "useInstead": "Y2.3 lasting interest; Y1.18 college enrollment.",
            "example": {
              "text": "Students will earn college credit through dual enrollment in a CTE pathway.",
              "goldId": "S219"
            },
            "source": "ESSA State report cards, 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) (accelerated coursework for postsecondary credit: AP, IB, dual or concurrent enrollment) and 6311(c)(4)(B)(v)(II) (access to and completion of advanced coursework); U.S. Department of Education, Office for Civil Rights (2024), Civil Rights Data Collection: student access to advanced courses, including AP and dual enrollment.",
            "basis": "ESSA 20 U.S.C. 6311(h)(1)(C)(viii)(II)(bb) and 6311(c)(4)(B)(v)(II) (verified, direct; claim y1-attainment-12, corroborated by y1-taxonomy-07). U.S. ED OCR (2024), 2020-21 CRDC: Student Access to and Enrollment in ... Courses and Academic Programs, AP and dual enrollment (verified, partial: the PDF returned 403 in CP-10-01, so only the landing page was read)."
          },
          {
            "id": "Y1.17",
            "name": "High School Completion & Re-engagement",
            "short": "High school completion",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new (part of 1.6)",
            "definition": "Graduating from high school, earning a GED or equivalency, or re-enrolling after leaving school.",
            "include": "On-time graduation; GED; re-engagement after dropout or release.",
            "exclude": "Adult GED (caregivers); staying enrolled through disruption.",
            "useInstead": "F1.6 adult education; Y1.13 school stability.",
            "example": {
              "text": "Youth will re-enroll in school or obtain a GED following release.",
              "goldId": "S241"
            },
            "source": "ESSA four-year adjusted cohort graduation rate, 20 U.S.C. 6311(c)(4)(B); WIOA youth program elements, 20 CFR 681.460(a)(1)-(2) (dropout recovery toward a diploma or recognized equivalent).",
            "basis": "Re-verified 2026-09-27 (CP-10-01): ESSA graduation rate (verified, partial: graduation only); WIOA 20 CFR 681.460 (verified, direct for re-engagement and equivalency)."
          },
          {
            "id": "Y1.18",
            "name": "Postsecondary Enrollment, Persistence & Completion",
            "short": "Postsecondary enrollment & completion",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.7",
            "definition": "Enrolling in, persisting in, or completing college or other postsecondary education or training after high school.",
            "include": "College enrollment the fall after graduation; first-to-second-year persistence; degree or certificate completion.",
            "exclude": "Applications and FAFSA (the process); college credit in high school; combined 'employed or in education' indicators.",
            "useInstead": "Y7.2 applications and FAFSA; Y1.16 dual credit; Y7.5 for WIOA-style combined indicators.",
            "example": {
              "text": "Graduates will enroll in a two- or four-year college the fall after high school.",
              "goldId": "S190"
            },
            "source": "National Student Clearinghouse Research Center, High School Benchmarks.",
            "basis": "National Student Clearinghouse Research Center, High School Benchmarks (verified); IDEA Indicator 14 Measure A (partial)."
          }
        ]
      }
    ]
  },
  {
    "id": "Y2",
    "part": "Y",
    "name": "Engagement, Interest & Creative Expression",
    "description": "How young people experience learning and activities: enjoyment, curiosity, lasting interest, seeing relevance, creative expression, and choosing to take part.",
    "frameworkBasis": "Hidi & Renninger (2006), Four-Phase Model of Interest Development; Pekrun (2024), control-value theory of achievement emotions (activity enjoyment); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time); secondary: CASEL (2020) SEL Framework (curiosity and open-mindedness); Eccles and colleagues, expectancy-value theory (utility value); Hulleman et al. (2010), utility-value intervention.",
    "categoryLine": "A. Enjoyment & interest (Y2.1–Y2.4) · B. Expression & participation (Y2.5–Y2.6)",
    "categories": [
      {
        "letter": "A",
        "name": "Enjoyment & interest",
        "description": "How young people feel about learning and activities: enjoying them, becoming curious, developing a lasting interest of their own, and seeing why learning matters for their goals.",
        "codes": [
          {
            "id": "Y2.1",
            "name": "Enjoyment & Joy",
            "short": "Enjoyment",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P37",
            "from2x": "2.1",
            "definition": "A positive emotional experience of the program or of learning: fun, happiness, excitement, pride in being part of it.",
            "include": "Reports of enjoying activities; excitement to attend; pride in the program.",
            "exclude": "General life satisfaction or flourishing; feeling safe or accepted.",
            "useInstead": "Y8.7 life satisfaction; Y3.1 belonging.",
            "example": {
              "text": "Youth will report feeling excited and happy to attend program each day.",
              "goldId": "S234"
            },
            "source": "Pekrun (2024), control-value theory: activity emotions (enjoyment during learning).",
            "basis": "Pekrun (2024), control-value theory: activity emotions, enjoyment during learning (verified, direct; claim y2-01); achievement settings beyond school (verified, partial; claim y2-02); outcome-emotion pride (verified, partial: achievement pride only; claim y2-03). Pride in being part of a program is codebook-defined (FD-P37). Muhammad, Five Pursuits, Joy (verified, partial: a teaching aim, not the learner's enjoyment) is kept as a pointer, not as the anchor."
          },
          {
            "id": "Y2.2",
            "name": "Curiosity & Triggered Interest",
            "short": "Curiosity",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P38",
            "from2x": "2.2",
            "definition": "Interest sparked in the moment: curiosity, asking questions about something new, willingness to try a new activity.",
            "include": "Asking questions during a demonstration; trying new activities; showing curiosity.",
            "exclude": "Interest that lasts or is pursued beyond the program; general confidence to take on challenges.",
            "useInstead": "Y2.3 sustained interest; Y5.4 confidence.",
            "example": {
              "text": "Students will ask questions and show curiosity during science demonstrations.",
              "goldId": "S128"
            },
            "source": "Hidi & Renninger (2006), Four-Phase Model of Interest Development, phase 1 (triggered situational interest); CASEL (2020) SEL Framework, Responsible Decision-Making: \"Demonstrating curiosity and open-mindedness\".",
            "basis": "Hidi & Renninger (2006), phase 1 triggered situational interest (verified, direct, full text; claim y2-07). CASEL (2020), Responsible Decision-Making: 'Demonstrating curiosity and open-mindedness' (verified, partial: a disposition broader than triggered interest; claims y2-05, CP-12-20-V-CASEL-1-Y2.2); OECD (2021), SSES Houston, Open-mindedness: Curiosity (verified, direct; claim y2-06). Willingness to try a new activity is codebook-defined (FD-P38; claims CP-12-01-V1, CP-12-01-V2)."
          },
          {
            "id": "Y2.3",
            "name": "Sustained & Individual Interest",
            "short": "Sustained interest",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "2.6",
            "definition": "Interest that persists, deepens or becomes the young person's own: a passion, returning to a topic, pursuing it beyond the program.",
            "include": "Discovering a passion; continuing an activity after the program; self-directed pursuit of a topic.",
            "exclude": "Momentary curiosity; interest in a career field; identity ('I am a ___ person').",
            "useInstead": "Y2.2 curiosity; Y7.1 career interest; Y5.3 domain identity.",
            "example": {
              "text": "Youth will continue pursuing robotics after the program ends, joining a school team.",
              "goldId": "S214"
            },
            "source": "Hidi & Renninger (2006), Four-Phase Model of Interest Development, phases 2-4.",
            "basis": "Hidi & Renninger (2006), phases 2-4 (verified, direct, full text; claim y2-08)."
          },
          {
            "id": "Y2.4",
            "name": "Relevance & Utility Value",
            "short": "Relevance & utility value",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "2.3",
            "definition": "Seeing learning as useful for one's goals, future plans or community.",
            "include": "Explaining how a subject connects to careers or daily life; valuing what is learned.",
            "exclude": "Career awareness; general purpose in life.",
            "useInstead": "Y7.1 career exploration; Y5.5 purpose.",
            "example": {
              "text": "Students will explain how algebra relates to careers they are interested in.",
              "goldId": "S115"
            },
            "source": "Eccles and colleagues, expectancy-value theory (utility value); Hulleman et al. (2010), utility value intervention.",
            "basis": "Re-verified 2026-09-27 (CP-10-01): Wigfield & Eccles (2000), utility value: 'how a task fits into an individual's future plans' (verified from a full-text copy, not the publisher's); Hulleman, Godes, Hendricks & Harackiewicz (2010) (verified, direct). Eccles & Wigfield (2020), Situated Expectancy-Value Theory, utility value: 'how well a particular task fits into an individual's present or future plans' (verified, direct; claims y2-09, y2-10)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Expression & participation",
        "description": "Young people expressing themselves by making, performing or responding to creative work, and choosing to take part in enriching activities in or outside the program.",
        "codes": [
          {
            "id": "Y2.5",
            "name": "Creative Expression & Performance",
            "short": "Creative expression & performance",
            "flag": "hybrid",
            "fidelity": "adapted",
            "deviation": "FD-P16",
            "from2x": "2.4, 2.5",
            "definition": "Self-expression through making something (art, music, writing, design), presenting or performing finished work, or responding to art, as an experience rather than a stated skill gain.",
            "include": "Composing, creating, exhibiting, performing, appreciating, critiquing or connecting art to personal meaning.",
            "exclude": "A stated technique or knowledge gain in an art form; a stated writing skill gain; teamwork during a production.",
            "useInstead": "Y1.6 arts skill; Y1.1 writing skill; Y4.7 collaboration.",
            "example": {
              "text": "Youth will compose an original song.",
              "goldId": "S058"
            },
            "source": "National Core Arts Standards (2014): artistic processes of Creating; Performing/Presenting/Producing; and Responding.",
            "basis": "National Core Arts Standards (2014): Creating; Performing/Presenting/Producing; Responding; Connecting (verified). Hybrid: merging creating and presenting, and separating both from skill gains, is a codebook decision (CP-04-01) rather than the standards' own split."
          },
          {
            "id": "Y2.6",
            "name": "Participation in Enriching Activities",
            "short": "Participation in activities",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "6.3",
            "definition": "An individual young person's choice to take part in constructive activities, inside the program (returning, joining) or outside it (sports, arts, clubs, faith groups).",
            "include": "Returning for another year; joining a team or club; taking part in activities outside the program.",
            "exclude": "Attendance or dosage in the program, counted or per person; the program's accommodations; inclusion of youth with disabilities alongside peers.",
            "useInstead": "A2.5 attendance and dosage; A2.4 accommodations and inclusion alongside peers.",
            "example": {
              "text": "Youth will choose to return to the program for a second year.",
              "goldId": "S003"
            },
            "source": "Search Institute, 40 Developmental Assets, Constructive Use of Time.",
            "basis": "Search Institute 40 Developmental Assets, Constructive Use of Time (located)."
          }
        ]
      }
    ]
  },
  {
    "id": "Y3",
    "part": "Y",
    "name": "Belonging & Relationships",
    "description": "The relationships around a young person: belonging, supportive adults, friends, family, and wider networks.",
    "frameworkBasis": "Search Institute Developmental Relationships Framework; CDC (2009) School Connectedness; Search Institute Developmental Assets (Support); Education-to-Workforce Indicator Framework (social capital); secondary: Chafee, 42 U.S.C. 677(a)(2), and the National Youth in Transition Database (permanent connections with caring adults for youth in foster care).",
    "categoryLine": "A. Connectedness (Y3.1) · B. Close relationships (Y3.2–Y3.4) · C. Networks (Y3.5)",
    "categories": [
      {
        "letter": "A",
        "name": "Connectedness",
        "description": "Feeling accepted, valued and safe in a program, school or community.",
        "codes": [
          {
            "id": "Y3.1",
            "name": "Belonging & Mattering",
            "short": "Belonging",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P01",
            "from2x": "3.1; part of 6.1",
            "definition": "Feeling accepted, valued, included and safe in the program, school or a community; mattering; less isolation.",
            "include": "Sense of belonging; feeling safe and accepted in program spaces; feeling connected to a new community; reduced loneliness.",
            "exclude": "Feeling safe in general (home, neighborhood); trauma-related safety; one named trusted adult; named friendships.",
            "useInstead": "Y8.10 general felt safety; Y8.8 trauma recovery; Y3.2 a trusted adult; Y3.3 friends.",
            "example": {
              "text": "Students will feel safe and accepted at the program.",
              "goldId": "S163"
            },
            "source": "CDC (2009), School Connectedness.",
            "basis": "CDC (2009) School Connectedness (verified, partial: school only). Across settings (CP-12-02, all verified, partial): U.S. Surgeon General (2023), social connection advisory, glossary: belonging, loneliness, social isolation (claim y3-04); Search Institute Developmental Assets, Community values youth (mattering; claim y3-02); NRC/IOM (2002), Community Programs to Promote Youth Development, chapter 5, 'Opportunities to Belong' (a program feature; claim y3-03). Feeling safe rests on CDC alone (FD-P01, narrowed); NRC/IOM's 'physical and psychological safety' was checked in round 2 (claim CP-12-02-V1, partial: framed as a setting trait) and does not close it."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Close relationships",
        "description": "A young person's close relationships: with caring adults outside the family, with friends and peers, and with their own family.",
        "codes": [
          {
            "id": "Y3.2",
            "name": "Supportive Adult Relationships",
            "short": "Supportive adults",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "3.2",
            "definition": "A caring, trusting relationship with at least one adult outside the family (mentor, staff, teacher, coach), including its quality (care, challenge, support).",
            "include": "Naming a trusted adult; a mentor who cares or challenges; permanent adult connections for youth in care.",
            "exclude": "A wider network used to open opportunities; family relationships.",
            "useInstead": "Y3.5 networks; Y3.4 family.",
            "example": {
              "text": "Mentees will report having a trusted adult they can go to with problems.",
              "goldId": "S026"
            },
            "source": "Search Institute, Developmental Relationships Framework (Express Care; Challenge Growth; Provide Support); CDC (2009), School Connectedness (adult support); Chafee, 42 U.S.C. 677(a)(2), and the National Youth in Transition Database (permanent connections with a caring adult for youth in foster care).",
            "basis": "Search Institute Developmental Relationships (Express Care; Challenge Growth; Provide Support) (verified); CDC (2009) (verified); Search Institute Developmental Assets, Other adult relationships (verified; claim y3-07). Youth in care: 42 U.S.C. 677(a)(2), Chafee, meaningful, permanent connections with a caring adult (verified; claim y3-05); ACF NYTD outcome 'positive connections with adults' (verified; claim y3-06)."
          },
          {
            "id": "Y3.3",
            "name": "Peer Relationships & Friendship",
            "short": "Peer relationships",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "3.3",
            "definition": "Friendships, peer acceptance and a positive peer group.",
            "include": "Making friends; a supportive peer community; friendships across groups.",
            "exclude": "The skill of working together; general belonging to the program.",
            "useInstead": "Y4.7 teamwork; Y3.1 belonging.",
            "example": {
              "text": "New students will make at least two friends in the program.",
              "goldId": "S194"
            },
            "source": "Search Institute, Developmental Relationships Framework (relationships between young people and peers); CDC (2009), School Connectedness (belonging to a positive peer group).",
            "basis": "CDC (2009) (verified). Re-review 2026-09-26 (STANDARDS S4.9): Search Institute Developmental Relationships covers peer relationships (verified)."
          },
          {
            "id": "Y3.4",
            "name": "Family Relationships",
            "short": "Family relationships",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "The young person's own relationship with their family: communication, connection, repair, reunification.",
            "include": "Reunification; rebuilding trust with family; better communication with parents as described from the youth side.",
            "exclude": "Parenting practices (the parent is the subject); housing.",
            "useInstead": "F1.1 when parents are the subject ('parents will communicate better with their children'); F2.3 housing.",
            "example": {
              "text": "Youth will reconnect with family members and rebuild trust after a period of incarceration.",
              "goldId": "S070"
            },
            "source": "Search Institute, Developmental Assets Framework, Support (Family support; Positive family communication); Search Institute, Developmental Relationships Framework (relationships with parents and family).",
            "basis": "Search Institute Developmental Assets, Support assets 1-2, family support and positive family communication (verified, direct; publication year unconfirmed) and Developmental Relationships with parents (verified, partial). Reunification: 42 U.S.C. 671(a)(15)(B), reasonable efforts to preserve and reunify families (claim y3-09), and Runaway and Homeless Youth Act, 34 U.S.C. 11212(b)(3), safe return of the youth (claim y3-10) (both verified, partial: agency and grantee duties, not youth outcomes; G4). FD-P17 closed 2026-09-26."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Networks",
        "description": "A wider network of adults, peers, professionals and employers that a young person can draw on for educational or career opportunities.",
        "codes": [
          {
            "id": "Y3.5",
            "name": "Social Capital & Networks",
            "short": "Social capital & networks",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "3.6",
            "definition": "Access to, and use of, a wider network of relationships (adults, peers, professionals, employers) that can open educational or career opportunities.",
            "include": "Expanding a professional network; introductions and references; contacts who can help with a goal.",
            "exclude": "One trusted adult; friends.",
            "useInstead": "Y3.2; Y3.3.",
            "example": {
              "text": "Mentees will expand their professional network by connecting with at least three adults in careers of interest.",
              "goldId": "S099"
            },
            "source": "Mathematica (2022), Education-to-Workforce Indicator Framework, social capital.",
            "basis": "Mathematica (2022), Education-to-Workforce Indicator Framework, social capital (verified); Search Institute Developmental Relationships, Expand Possibilities: Connect, 'Introduce me to people who can help me grow' (verified, direct for introductions; claim y3-11)."
          }
        ]
      }
    ]
  },
  {
    "id": "Y4",
    "part": "Y",
    "name": "Social & Emotional Skills (CASEL)",
    "description": "Social and emotional skills: what young people can do, organized by CASEL's five competencies. Beliefs about oneself are in Y5.",
    "frameworkBasis": "CASEL (2020) SEL Framework: the five competencies are this domain's categories. Secondary: Common Core State Standards, Speaking and Listening anchor 4 (presenting to an audience); National Health Education Standards (SHAPE America, 2024), Standard 4 (refusal skills).",
    "categoryLine": "A. Self-awareness (Y4.1) · B. Self-management (Y4.2–Y4.3) · C. Social awareness (Y4.4–Y4.5) · D. Relationship skills (Y4.6–Y4.9) · E. Responsible decision-making (Y4.10–Y4.12)",
    "categories": [
      {
        "letter": "A",
        "name": "Self-awareness",
        "description": "Recognizing and naming one's own emotions. This is the part of CASEL's self-awareness competency coded here; beliefs about oneself are in Identity, Confidence & Agency.",
        "codes": [
          {
            "id": "Y4.1",
            "name": "Emotion Awareness",
            "short": "Emotion awareness",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.1.1",
            "definition": "Recognizing and naming one's own emotions.",
            "include": "Identifying feelings; using a feelings chart; naming emotions in hard moments.",
            "exclude": "Managing emotions; understanding others' feelings.",
            "useInstead": "Y4.2 regulation; Y4.4 empathy; Y5.1 identity and Y5.4 self-efficacy or growth mindset (CASEL self-awareness items that sit in Y5, FD-P10, FD-P11).",
            "example": {
              "text": "Students will be able to identify and name their feelings in challenging situations."
            },
            "source": "CASEL (2020) SEL Framework, Self-Awareness: \"Identifying one's emotions\".",
            "basis": "CASEL (2020) SEL Framework (verified), Self-Awareness: 'Identifying one's emotions'."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Self-management",
        "description": "Managing emotions, stress and impulses, and setting and working toward personal goals.",
        "codes": [
          {
            "id": "Y4.2",
            "name": "Emotion Regulation & Coping",
            "short": "Emotion regulation & coping",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P02",
            "from2x": "4.2.1, 4.2.2",
            "definition": "Managing strong emotions and impulses, and using coping strategies for stress, worry or frustration.",
            "include": "Calming down; frustration tolerance; self-regulation; deep breathing or journaling to manage stress.",
            "exclude": "Reduced symptoms of anxiety or depression; caregiver stress; academic persistence.",
            "useInstead": "Y8.6 symptoms; F1.4 caregiver stress; Y1.10 academic perseverance.",
            "example": {
              "text": "Students will develop coping strategies for managing stress.",
              "goldId": "S237"
            },
            "source": "CASEL (2020) SEL Framework, Self-Management: \"Managing one's emotions\"; \"Identifying and using stress-management strategies\".",
            "basis": "CASEL (2020) SEL Framework (verified), Self-Management: 'Managing one's emotions'; 'Identifying and using stress-management strategies'; competency definition 'manage one's emotions, thoughts, and behaviors effectively in different situations' (verified, direct for impulses and self-regulation; claim y4a-08, CP-12-03)."
          },
          {
            "id": "Y4.3",
            "name": "Goal-Setting, Organization & Self-Discipline",
            "short": "Goals & self-discipline",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P03",
            "from2x": "4.2.3, 4.2.4",
            "definition": "Setting personal goals and working toward them, and general organization, self-discipline and persistence outside schoolwork.",
            "include": "Setting and pursuing goals; completing projects; keeping materials organized; follow-through.",
            "exclude": "Study techniques; persistence with schoolwork; career plans.",
            "useInstead": "Y1.11 study strategies; Y1.10 academic perseverance; Y7.1 career exploration.",
            "example": {
              "text": "Youth will set and work toward a personal goal with support from their mentor.",
              "goldId": "S086"
            },
            "source": "CASEL (2020) SEL Framework, Self-Management: \"Setting personal and collective goals\"; \"Exhibiting self-discipline and self-motivation\"; \"Using planning and organizational skills\".",
            "basis": "CASEL (2020) SEL Framework (verified), Self-Management: 'Setting personal and collective goals'; 'Exhibiting self-discipline and self-motivation'; 'Using planning and organizational skills'."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Social awareness",
        "description": "Understanding others' feelings and perspectives, reading social settings, and respecting people of different backgrounds.",
        "codes": [
          {
            "id": "Y4.4",
            "name": "Empathy, Perspective-Taking & Social Awareness",
            "short": "Empathy & social awareness",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.3.1, 4.3.3",
            "definition": "Understanding and caring about others' feelings and perspectives, expressing gratitude, and reading social norms and expectations in different settings.",
            "include": "Perspective-taking; compassion; gratitude; understanding expectations in class, online and community settings.",
            "exclude": "Respect for people of other backgrounds; listening as a behavior.",
            "useInstead": "Y4.5 respect for diversity; Y4.6 communication.",
            "example": {
              "text": "Youth will express gratitude toward family and mentors.",
              "goldId": "S082"
            },
            "source": "CASEL (2020) SEL Framework, Social Awareness: \"Taking others' perspectives\"; \"Demonstrating empathy and compassion\"; \"Showing concern for the feelings of others\"; \"Understanding and expressing gratitude\"; \"Identifying diverse social norms, including unjust ones\".",
            "basis": "CASEL (2020) SEL Framework (verified), Social Awareness: 'Taking others' perspectives'; 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones'; 'Understanding and expressing gratitude' (verified, direct; claim y4a-05); 'Showing concern for the feelings of others' (verified, direct; claim y4a-06)."
          },
          {
            "id": "Y4.5",
            "name": "Respect for Diversity & Cultural Competence",
            "short": "Respect for diversity",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P25",
            "from2x": "4.3.2",
            "definition": "Respecting and including people of different backgrounds and identities, and examining one's own biases.",
            "include": "Respect for peers of other races, cultures, religions, abilities; inclusive behavior; bias awareness.",
            "exclude": "Pride in one's own identity; friendships across groups.",
            "useInstead": "Y5.2 own identity; Y3.3 friendships.",
            "example": {
              "text": "Students will demonstrate respect for peers from different cultures and identities."
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Demonstrating cultural competency\"; Self-Awareness: \"Examining prejudices and biases\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Demonstrating cultural competency'; Self-Awareness: 'Examining prejudices and biases'. Learning for Justice (2022), Social Justice Standards, Diversity standard 6 (verified, direct for respect and comfort across difference; claim y4a-03). 'Including' people has no verified component and is codebook-defined (FD-P25)."
          }
        ]
      },
      {
        "letter": "D",
        "name": "Relationship skills",
        "description": "Communicating, working in teams, building relationships and resolving conflict, and seeking or offering help.",
        "codes": [
          {
            "id": "Y4.6",
            "name": "Communication & Public Speaking",
            "short": "Communication & public speaking",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.4.1",
            "definition": "Expressing oneself clearly, listening actively, and speaking to an audience.",
            "include": "Active listening; clear communication; presentations and public speaking.",
            "exclude": "Workplace communication; written composition; confidence about speaking in class.",
            "useInstead": "Y7.3 workplace; Y1.1 writing; Y1.12 academic confidence.",
            "example": {
              "text": "4-H members will demonstrate public speaking skills by giving a demonstration at the county fair.",
              "goldId": "S132"
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Communicating effectively\" (communicate clearly, listen actively); Common Core State Standards, Speaking and Listening anchor 4 (CCRA.SL.4): presenting information so listeners can follow the reasoning.",
            "basis": "CASEL (2020) SEL Framework (verified, partial), Relationship Skills: 'Communicating effectively'; competency definition 'communicate clearly, listen actively' (verified, direct; claim y4a-02). Common Core State Standards, CCRA.SL.4 (verified, direct for presenting to an audience; claim y4a-01)."
          },
          {
            "id": "Y4.7",
            "name": "Teamwork, Collaboration & Group Leadership",
            "short": "Teamwork & group leadership",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.4.2",
            "definition": "Working with others toward shared goals, including leading peers within a group task.",
            "include": "Collaboration on projects; teamwork; taking turns leading a small group; leadership within a team activity.",
            "exclude": "Leadership that influences a program, school or community decision; friendships; workplace leadership.",
            "useInstead": "Y6.4 civic leadership; Y3.3 friendships; Y7.3 workplace.",
            "example": {
              "text": "Youth will learn to work as part of a team to achieve a common goal.",
              "goldId": "S054"
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Practicing teamwork and collaborative problem-solving\"; \"Showing leadership in groups\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Practicing teamwork and collaborative problem-solving'; 'Showing leadership in groups' (verified, direct; claim y4b-01)."
          },
          {
            "id": "Y4.8",
            "name": "Relationship-Building & Conflict Resolution",
            "short": "Relationships & conflict resolution",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.4.3, 4.4.5",
            "definition": "Building, maintaining and repairing relationships, and resolving interpersonal conflict constructively.",
            "include": "Resolving disagreements without fighting; de-escalation; repairing a friendship.",
            "exclude": "Reduced incidence of fights; exclusionary discipline; the relationship outcome itself.",
            "useInstead": "Y8.12 fights; Y1.14 discipline; Y3.3/Y3.4 relationships.",
            "example": {
              "text": "Youth will resolve disagreements with peers without fighting.",
              "goldId": "S209"
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Developing positive relationships\"; \"Resolving conflicts constructively\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Developing positive relationships'; 'Resolving conflicts constructively'; competency definition 'establish and maintain healthy and supportive relationships' (verified, direct; claim y4b-03)."
          },
          {
            "id": "Y4.9",
            "name": "Help-Seeking & Offering Support",
            "short": "Help-seeking",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.4.4, 4.3.4",
            "definition": "Knowing where to find support, asking for help, and offering help to others.",
            "include": "Willingness to seek help; naming resources to contact in a crisis; helping peers.",
            "exclude": "Actually receiving mental health services; self-advocacy for accommodations.",
            "useInstead": "Y8.9 service use; Y5.6 self-advocacy.",
            "example": {
              "text": "Youth will demonstrate increased willingness to seek help when struggling emotionally.",
              "goldId": "S007"
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Seeking or offering support and help when needed\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Seeking or offering support and help when needed'; Social Awareness definition 'recognize family, school, and community resources and supports' (verified, direct; claim y4b-04). National Health Education Standards (SHAPE America, 2024), 3.5.2 and 4.8.3 (verified, direct; claims y4b-05, y4b-06). Both elements are verified CASEL components (FD-P06 closed by CP-12-03)."
          }
        ]
      },
      {
        "letter": "E",
        "name": "Responsible decision-making",
        "description": "Weighing options and solving problems, making ethical and prosocial choices, and avoiding risks and negative peer pressure.",
        "codes": [
          {
            "id": "Y4.10",
            "name": "Decision-Making & Problem-Solving",
            "short": "Decision-making & problem-solving",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P07",
            "from2x": "4.5.1, 4.5.3",
            "definition": "Weighing options and consequences and working a personal or social problem through from identifying it to acting.",
            "include": "Pros and cons before a decision; structured problem-solving; anticipating consequences.",
            "exclude": "Interpersonal conflict; academic analysis of sources; ethical choices.",
            "useInstead": "Y4.8 conflict; Y1.7 critical thinking; Y4.11 ethical choices.",
            "example": {
              "text": "Youth will use a step-by-step process to identify a problem, brainstorm solutions, and act on one.",
              "goldId": "S133"
            },
            "source": "CASEL (2020) SEL Framework, Responsible Decision-Making: \"Identifying solutions for personal and social problems\"; \"Anticipating and evaluating the consequences of one's actions\".",
            "basis": "CASEL (2020) SEL Framework (verified), Responsible Decision-Making: 'Identifying solutions for personal and social problems'; 'Anticipating and evaluating the consequences of one's actions' (registry supports for 4.5.3 and 4.5.1)."
          },
          {
            "id": "Y4.11",
            "name": "Ethical & Prosocial Choices",
            "short": "Ethical & prosocial choices",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.5.2, 4.5.5",
            "definition": "Making an ethical or prosocial choice in a specific situation, including small daily contributions to the class or program.",
            "include": "Reporting bullying instead of joining in; standing up for a classmate; helping clean up the space.",
            "exclude": "General character traits; challenging systems of injustice; organized community service.",
            "useInstead": "Y6.1 values; Y6.3 critical consciousness; Y6.5 service.",
            "example": {
              "text": "Students will choose to report bullying they witness rather than join in.",
              "goldId": "S027"
            },
            "source": "CASEL (2020) SEL Framework, Responsible Decision-Making: \"Evaluating personal, interpersonal, community, and institutional impacts\"; \"Reflecting on one's role to promote personal, family, and community well-being\".",
            "basis": "CASEL (2020) SEL Framework (verified), Responsible Decision-Making: 'Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being' (verified, partial); competency definition 'make caring and constructive choices about personal behavior and social interactions across diverse situations' (verified, direct; claim y4b-07)."
          },
          {
            "id": "Y4.12",
            "name": "Risk Avoidance & Refusal Skills",
            "short": "Risk avoidance & refusal",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P24",
            "from2x": "4.5.4",
            "definition": "Avoiding unsafe situations and resisting negative peer pressure.",
            "include": "Refusal skills; leaving unsafe situations; resisting pressure to use substances.",
            "exclude": "An actual change in substance use or violence; safety knowledge such as first aid.",
            "useInstead": "Y8.11/Y8.12 for incidence; Y8.3 safety knowledge.",
            "example": {
              "text": "Youth will develop skills to resist peer pressure and avoid risky behaviors.",
              "goldId": "S172"
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Resisting negative social pressure\"; National Health Education Standards (SHAPE America, 2024), Standard 4 refusal-skills indicators (4.5.5, 4.8.5, 4.12.5).",
            "basis": "CASEL (2020), Relationship Skills: 'Resisting negative social pressure' (verified, partial: peer pressure only). National Health Education Standards (SHAPE America, 2024), Standard 4 refusal-skills indicators 4.5.5, 4.8.5, 4.12.5 (verified, partial: refusal only; claim y4b-10; the registry quotes 4.5.5, 'Demonstrate refusal skills to use in a variety of situations.', as read on the page in round 2, claim CP-12-03-V1, replacing the CP-10-02 quote, which came from the separate NCSHE set). Avoiding unsafe situations: CASEL Responsible Decision-Making 'consider ethical standards and safety concerns' and NHES 4.2.3 (both verified, partial; claims y4b-09, y4b-11), logged as codebook-defined (FD-P24). FD-P09 stays closed for refusal and peer pressure."
          }
        ]
      }
    ]
  },
  {
    "id": "Y5",
    "part": "Y",
    "name": "Identity, Confidence & Agency",
    "description": "Who young people believe they are and what they believe they can do: identity, confidence, purpose and agency.",
    "frameworkBasis": "Nagaoka et al. (2015), Foundations for Young Adult Success (agency, integrated identity, mindsets); Search Institute Developmental Assets (Positive Identity); Learning for Justice Social Justice Standards (Identity); secondary: CASEL (2020) SEL Framework (Self-Awareness); Muhammad, Five Pursuits (Identity); Search Institute, Spiritual Development (sense of purpose); Farrington et al. (2019), arts education and social-emotional learning (identity as an artist); Rehabilitation Act, 29 U.S.C. 733(b)(5) (self-advocacy).",
    "categoryLine": "A. Identity (Y5.1–Y5.3) · B. Self-beliefs (Y5.4) · C. Purpose & agency (Y5.5–Y5.6)",
    "categories": [
      {
        "letter": "A",
        "name": "Identity",
        "description": "Who a young person understands themselves to be: exploring their identity, taking pride in their racial, cultural and other social identities, and seeing themselves as part of a field such as STEM or the arts.",
        "codes": [
          {
            "id": "Y5.1",
            "name": "Self-Understanding & Identity Exploration",
            "short": "Self-understanding",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.1.2",
            "definition": "Understanding who one is, what matters to one, and how one is changing.",
            "include": "Identity exploration; articulating one's values and experiences.",
            "exclude": "Pride in a racial, cultural or other social identity; self-confidence; purpose.",
            "useInstead": "Y5.2; Y5.4; Y5.5.",
            "example": {
              "text": "Students will deepen their understanding of who they are and what is important to them."
            },
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, key outcome: integrated identity; CASEL (2020) SEL Framework, Self-Awareness: \"Integrating personal and social identities\".",
            "basis": "CASEL (2020) SEL Framework (verified), Self-Awareness: 'Integrating personal and social identities'; Nagaoka et al. (2015) integrated identity (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity (verified with the source's own wording). Y5 re-anchored on Nagaoka; FD-P10 closed."
          },
          {
            "id": "Y5.2",
            "name": "Cultural & Social Identity",
            "short": "Cultural & social identity",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "3.4",
            "definition": "Pride in, and acceptance of, one's own cultural, racial, ethnic, linguistic, gender, sexual or other social identity.",
            "include": "Pride in heritage; positive racial or ethnic identity; self-acceptance of sexual orientation or gender identity; bicultural identity.",
            "exclude": "Respect for others' identities; home-language skill.",
            "useInstead": "Y4.5; Y1.2.",
            "example": {
              "text": "Youth will report greater self-acceptance of their sexual orientation and gender identity.",
              "goldId": "S129"
            },
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (race/ethnicity, culture); Learning for Justice (2022), Social Justice Standards, Second Edition (Identity); Muhammad, Five Pursuits (Pursuit 1: Identity).",
            "basis": "Learning for Justice (2022), Social Justice Standards, Second Edition, Identity anchor standard ID.1 (verified, direct; claim y5-11). Muhammad, Pursuit 1 Identity (verified, direct; names race, and is the source for \"racial\" added by CP-10-04). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names race/ethnicity and culture (verified, partial). Sexual, gender and linguistic identity are named instances of LFJ ID.1's \"multiple groups in society\", which the registry quotes (decision G5); no FD."
          },
          {
            "id": "Y5.3",
            "name": "Domain Identity",
            "short": "Domain identity",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P26",
            "from2x": "new",
            "definition": "Seeing oneself as a certain kind of person in a field: 'a STEM person', an artist, an athlete, a reader, a writer.",
            "include": "'See themselves as' statements tied to a field.",
            "exclude": "Loving an activity; career interest.",
            "useInstead": "Y2.3 'I love doing ___'; Y7.1 career interest.",
            "example": {
              "text": "Girls in the program will increasingly see themselves as 'a STEM person.'",
              "goldId": "S036"
            },
            "source": "Farrington et al. (2019), Arts Education and Social-Emotional Learning Outcomes Among K-12 Students (identities as artists); Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (including profession).",
            "basis": "Farrington et al. (2019), arts education and SEL, \"identities as artists\" (verified, direct; claim y5-07; the year and publishers are not printed in the document and rest on the file path and a June 2019 press release, round-2 claim CP-12-04-V-Y5-3). National Research Council (2009), Strand 6, identity as a science learner: not added (round-2 claim CP-12-04-V-Y5-2 found the strand only on a secondary conference host, not a National Academies Press copy). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names profession among social identities (verified, partial; supporting only: the full report uses a role-bound identity as the contrast to integrated identity, claim y5-08). Science, athlete, reader and writer go past these sources: sector widening, FD-P26."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Self-beliefs",
        "description": "A young person's general belief in their own ability and worth: confidence, self-efficacy and self-esteem.",
        "codes": [
          {
            "id": "Y5.4",
            "name": "Confidence, Self-Efficacy & Self-Worth",
            "short": "Confidence & self-worth",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.1.4, 4.1.3; part of 6.4",
            "definition": "A general belief that one can succeed and handle challenges, including general growth mindset and self-esteem.",
            "include": "Self-confidence; self-efficacy; self-esteem; naming one's strengths; growth mindset about setbacks.",
            "exclude": "Confidence about schoolwork; confidence in a named physical skill where the skill is the outcome.",
            "useInstead": "Y1.12 academic mindsets; Y8.2 when the physical skill gain is the point.",
            "example": {
              "text": "Youth will feel more confident trying new challenges.",
              "goldId": "S158"
            },
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, foundational component: mindsets; CASEL (2020) SEL Framework, Self-Awareness: \"Experiencing self-efficacy\"; \"Having a growth mindset\"; Search Institute, Developmental Assets Framework, Positive Identity (Self-esteem).",
            "basis": "CASEL (2020) SEL Framework (verified), Self-Awareness: 'Experiencing self-efficacy'; 'Having a growth mindset'; Search Institute Positive Identity, Self-esteem (verified). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) mindsets (verified for beliefs about oneself; the report does not name growth mindset). Search Institute self-esteem asset content verified. FD-P11 closed."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Purpose & agency",
        "description": "A sense of purpose, hope and aspiration for the future, and acting as the agent in one's own life by making choices and advocating for one's needs.",
        "codes": [
          {
            "id": "Y5.5",
            "name": "Purpose & Future Orientation",
            "short": "Purpose & future orientation",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "6.4",
            "definition": "A sense of purpose and meaning, optimism about the future, and aspirations, including spiritual purpose and growth in faith.",
            "include": "Sense of purpose; hopes and goals for life; growth in faith or spiritual life.",
            "exclude": "Faith-grounded values (Y6.1); belonging to a faith community (Y3.1); career aspirations (Y7.1).",
            "useInstead": "Y6.1; Y3.1; Y7.1.",
            "example": {
              "text": "Youth will develop a sense of purpose for their lives.",
              "goldId": "S250"
            },
            "source": "Search Institute, Developmental Assets Framework, Positive Identity (Sense of purpose; Positive view of personal future); Search Institute, Spiritual Development (awareness or awakening; interconnecting and belonging; living an integrated life).",
            "basis": "Search Institute Positive Identity, Sense of purpose; Positive view of personal future (verified, direct). Re-review 2026-09-26 (STANDARDS S4.9): Search Institute sense of purpose and positive view of future assets (content verified). Nagaoka does not support purpose (verifier: unsupported). CP-12-04: Search Institute, Spiritual Development, three core developmental processes (verified, direct; claim y5-14) covers spiritual purpose and growth in faith. FD-P12 closed."
          },
          {
            "id": "Y5.6",
            "name": "Agency, Self-Determination & Self-Advocacy",
            "short": "Agency & self-advocacy",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new (part of 6.1)",
            "definition": "Acting as the causal agent in one's own life: making choices, advocating for one's own needs, directing one's own supports.",
            "include": "Self-advocacy in IEP meetings; leading one's own IEP; requesting accommodations; making and explaining one's own choices.",
            "exclude": "Influencing collective decisions; asking for help in general.",
            "useInstead": "Y6.4 civic voice; Y4.9 help-seeking.",
            "example": {
              "text": "Students with IEPs will lead their own IEP meetings by the end of the school year.",
              "goldId": "S032"
            },
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, key outcome: agency; Search Institute, Developmental Assets Framework, Positive Identity (Personal power); Rehabilitation Act, 29 U.S.C. 733(b)(5), pre-employment transition services (instruction in self-advocacy).",
            "basis": "Search Institute Personal Power (verified, partial); Nagaoka et al. (2015) agency (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) agency (verified); Search Institute personal power asset (content verified). CP-12-04: Rehabilitation Act, 29 U.S.C. 733(b)(5), pre-employment transition services, \"instruction in self-advocacy\" (verified on the official copy, round-2 claim CP-12-04-V-Y5-1; partial: a required service, counted as partial-fit support with no FD, decision G4). The code names IEPs, which is inside the statute's population (students with disabilities), so no FD (decision G1)."
          }
        ]
      }
    ]
  },
  {
    "id": "Y6",
    "part": "Y",
    "name": "Character, Values & Civic Life",
    "description": "How young people relate to their community and its systems: values, civic knowledge, critical consciousness, civic action, environmental stewardship and digital citizenship.",
    "frameworkBasis": "Search Institute Developmental Assets (Positive Values); NCSS (2013) C3 Framework (Civics); Muhammad, Five Pursuits (Criticality); NAAEE (2019) Guidelines for Excellence; ISTE Standards for Students (2024) (Digital Citizen); CIRCLE (2002) civic engagement indicators (civic voice and community action); secondary: VIA Classification of Character Strengths (Forgiveness); Watts, Diemer & Voight (2011), critical consciousness.",
    "categoryLine": "A. Character (Y6.1) · B. Civic understanding (Y6.2–Y6.3) · C. Civic action (Y6.4–Y6.6) · D. Digital citizenship (Y6.7)",
    "categories": [
      {
        "letter": "A",
        "name": "Character",
        "description": "General character traits and guiding values such as integrity, honesty and responsibility.",
        "codes": [
          {
            "id": "Y6.1",
            "name": "Positive Values & Character",
            "short": "Values & character",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "6.2",
            "definition": "General character traits and guiding values: integrity, honesty, responsibility, sportsmanship, forgiveness, faith-grounded values.",
            "include": "Honesty; responsibility; sportsmanship; living out values, including faith-based values.",
            "exclude": "A choice in one specific situation; faith growth or spiritual purpose.",
            "useInstead": "Y4.11 situational choices; Y5.5 faith growth.",
            "example": {
              "text": "Youth will demonstrate honesty and integrity.",
              "goldId": "S012"
            },
            "source": "Search Institute, 40 Developmental Assets, Positive Values; VIA Institute on Character, VIA Classification of Character Strengths (Forgiveness).",
            "basis": "Search Institute 40 Developmental Assets, Positive Values (verified, direct: integrity, honesty, responsibility). VIA Institute on Character, VIA Classification of Character Strengths, Forgiveness (verified, direct; claim y6-07; cited for this component only). Sportsmanship and faith-grounded values are named instances of Positive Values (honesty, integrity) practised in a setting, which the registry quotes (decision G5); no FD."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Civic understanding",
        "description": "Understanding how government and civic institutions work, and analyzing power, inequity and injustice.",
        "codes": [
          {
            "id": "Y6.2",
            "name": "Civic Knowledge",
            "short": "Civic knowledge",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "7.1; part of 1.3",
            "definition": "Understanding how government, civic institutions, elections and rights work.",
            "include": "How a bill becomes law; branches of government; how the school board decides; voter registration process.",
            "exclude": "Families learning to navigate school or benefit systems; history content.",
            "useInstead": "F1.7 family navigation; Y1.5 history.",
            "example": {
              "text": "Youth will explain how a bill becomes a law in their state.",
              "goldId": "S254"
            },
            "source": "NCSS (2013), College, Career, and Civic Life (C3) Framework, Dimension 2: Civics.",
            "basis": "NCSS (2013) C3 Framework, Dimension 2 Civics (verified)."
          },
          {
            "id": "Y6.3",
            "name": "Critical Consciousness & Social Justice",
            "short": "Critical consciousness",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "7.4",
            "definition": "Analyzing power, inequity and systems of oppression, and acting against injustice.",
            "include": "Analyzing why food deserts or zoning inequality exist; articulating how systemic racism affects a community.",
            "exclude": "Standing up for a classmate in one situation; respect for diversity.",
            "useInstead": "Y4.11; Y4.5.",
            "example": {
              "text": "Youth will articulate how systemic racism affects their community and advocate for policy change.",
              "goldId": "S123"
            },
            "source": "Muhammad, Five Pursuits (Pursuit 4: Criticality); Watts, Diemer & Voight (2011), critical consciousness (critical reflection and critical action).",
            "basis": "Muhammad, Five Pursuits, Pursuit 4 Criticality (verified, direct). Watts, Diemer & Voight (2011), critical consciousness: critical reflection and critical action (verified, direct; claim y6-01)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Civic action",
        "description": "Taking part in civic and community life: civic voice and leadership, community service and projects, and caring for the environment.",
        "codes": [
          {
            "id": "Y6.4",
            "name": "Civic Voice, Leadership & Participation",
            "short": "Civic voice & participation",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "7.3",
            "definition": "Influencing collective decisions and taking part in civic life: youth councils, testimony, advocacy, co-design, organizing, voting, and civic efficacy.",
            "include": "Presenting to a city council; youth advisory boards; organizing campaigns; registering and voting; believing one can influence community decisions.",
            "exclude": "Leading peers within a group task; one's own IEP or personal choices.",
            "useInstead": "Y4.7; Y5.6.",
            "example": {
              "text": "Youth organizers will present testimony to the city council on a policy issue affecting their neighborhood.",
              "goldId": "S136"
            },
            "source": "Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE, The Civic and Political Health of the Nation: political voice and electoral indicators; Watts, Diemer & Voight (2011), critical consciousness (political efficacy); Search Institute, 40 Developmental Assets (young people given useful roles in the community).",
            "basis": "Re-verified 2026-09-27 (CP-10-02): CIRCLE (2002) core civic engagement indicators, political voice (contacting officials, petitions, protest, boycotts) and electoral participation (verified, direct). Now Framework; FD-P13 closed. NCSS C3 Dimension 4 (partial) no longer cited. CP-12-05: CIRCLE covers the behavioral core only. Civic efficacy rests on Watts, Diemer & Voight (2011), political efficacy (verified, partial; claim y6-02), and youth councils and advisory roles on Search Institute, 40 Developmental Assets, \"Young people are given useful roles on the community\" (verified, partial; claim y6-03). Both sources are broader than the code, so no FD (decision G3). \"Leadership\" in the name needs no FD (decision Y6-1); its rule 7 line and an exclude pointer to Y4.7 follow PR #62. Round 2 also found CIRCLE's own \"engaged worldview\" passage on civic efficacy (claim CP-12-05-V-Y6-2, verified), recorded for a later CP."
          },
          {
            "id": "Y6.5",
            "name": "Community Service & Action",
            "short": "Community service & action",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "7.2",
            "definition": "Organized service or projects to improve the community, including identifying a community issue and planning action on it.",
            "include": "Service hours; service trips; food drives; community action plans.",
            "exclude": "Small daily help in the program; environmental action; civic advocacy aimed at decision-makers.",
            "useInstead": "Y4.11; Y6.6; Y6.4.",
            "example": {
              "text": "Youth will complete 20 hours of community service at local nonprofits.",
              "goldId": "S005"
            },
            "source": "Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE, The Civic and Political Health of the Nation: civic indicators (community problem solving, regular volunteering).",
            "basis": "Re-verified 2026-09-27 (CP-10-02): CIRCLE (2002) civic indicators, community problem solving and regular volunteering for a non-electoral organization (verified, direct). Now Framework; FD-P14 closed. Lerner et al. (2005) Contribution and NCSS C3 Dimension 4 (both partial) no longer cited."
          },
          {
            "id": "Y6.6",
            "name": "Environmental Stewardship",
            "short": "Environmental stewardship",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P27",
            "from2x": "new",
            "definition": "Caring for the environment and acting on it: pro-environmental behavior and connection to nature.",
            "include": "Recycling and composting; reducing waste; stewardship; connection to nature.",
            "exclude": "Knowledge of ecosystems; feeling restored in nature.",
            "useInstead": "Y1.4 ecology knowledge; Y8.7 well-being.",
            "example": {
              "text": "Youth will take action to reduce waste at home, such as recycling and composting.",
              "goldId": "S013"
            },
            "source": "NAAEE (2019), K-12 Environmental Education: Guidelines for Excellence, Personal and Civic Responsibility.",
            "basis": "NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified, direct for stewardship and pro-environmental behavior). Connection to nature: not in the verified NAAEE text. Round 2 read the full guidelines (claim CP-12-05-V-Y6-1, partial): no learner outcome on connection to nature, only a values outcome (K-4, 3.2A) as the closest. Codebook-defined element, FD-P27."
          }
        ]
      },
      {
        "letter": "D",
        "name": "Digital citizenship",
        "description": "Behaving safely, legally and ethically online.",
        "codes": [
          {
            "id": "Y6.7",
            "name": "Digital Citizenship & Online Safety",
            "short": "Digital citizenship",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "7.5",
            "definition": "Safe, legal and ethical behavior online: privacy, security, recognizing scams, respectful conduct.",
            "include": "Protecting personal information; strong passwords; recognizing phishing.",
            "exclude": "Evaluating news credibility; coding skills; device access.",
            "useInstead": "Y1.7; Y1.4; A2.3.",
            "example": {
              "text": "Youth will learn to protect their personal information online.",
              "goldId": "S107"
            },
            "source": "ISTE Standards for Students (2024), 1.2 Digital Citizen (1.2.b Online Interactions; 1.2.d Digital Privacy).",
            "basis": "ISTE Standards for Students (2024), 1.2 Digital Citizen: 1.2.b Online Interactions, 1.2.d Digital Privacy (verified, direct; claim y6-06). The 2016 edition, Standard 2 (verified 2026-09-27), is superseded and kept in the registry as history."
          }
        ]
      }
    ]
  },
  {
    "id": "Y7",
    "part": "Y",
    "name": "Career & Economic Readiness",
    "description": "Readiness for and results in work and independent adult life: career exploration, transition steps, work skills, credentials, employment, money skills and daily living skills.",
    "frameworkBasis": "Perkins V; WIOA performance indicators, 20 CFR 677.155, and youth program elements, 20 CFR 681.460; OCTAE Employability Skills Framework; CFPB Building Blocks and National Standards for Personal Financial Education; Conley, Four Keys; Chafee daily living skills; secondary: Casey Life Skills Toolkit (2022) (daily living skills); 42 U.S.C. 675(5)(I) (documents for youth leaving foster care); 29 U.S.C. 705(5) (competitive integrated employment).",
    "categoryLine": "A. Exploration & navigation (Y7.1–Y7.2) · B. Work readiness (Y7.3–Y7.4) · C. Employment & independence (Y7.5–Y7.7)",
    "categories": [
      {
        "letter": "A",
        "name": "Exploration & navigation",
        "description": "Learning about careers and pathways, and knowing and completing the steps into college or work.",
        "codes": [
          {
            "id": "Y7.1",
            "name": "Career Awareness & Exploration",
            "short": "Career exploration",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.4",
            "definition": "Learning about careers and pathways, interest inventories, workplace visits and job shadowing, and interest in or aspiration toward a career field.",
            "include": "Researching careers; exploring pathways; interest in a STEM career; workplace visits.",
            "exclude": "College visits, applications and FAFSA; lasting interest in an activity.",
            "useInstead": "Y7.2; Y2.3.",
            "example": {
              "text": "Youth will explore at least three career pathways aligned to their interests using labor market data.",
              "goldId": "S152"
            },
            "source": "Perkins V, 20 U.S.C. 2302 (career exploration).",
            "basis": "Perkins V, 20 U.S.C. 2302, career exploration (verified)."
          },
          {
            "id": "Y7.2",
            "name": "College & Career Transition Knowledge",
            "short": "Transition knowledge",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.3",
            "definition": "Knowing and completing the process of moving to college or work: applications, FAFSA, financial aid, resumes, interviews.",
            "include": "College campus visits and college fairs; FAFSA completion; college applications; comparing aid letters; resume writing.",
            "exclude": "Enrolment itself; employability behaviors on the job.",
            "useInstead": "Y1.18; Y7.3.",
            "example": {
              "text": "Seniors submitted the FAFSA and at least one college application by January 1.",
              "goldId": "H019"
            },
            "source": "Conley, Four Keys: Key Transition Knowledge & Skills; Conley (2007), Redefining College Readiness (contextual skills and awareness).",
            "basis": "Re-verified 2026-09-27 (CP-10-01): Conley (2016), Four Keys, Key Transition Knowledge & Skills (verified, direct for college knowledge; loose for the work side); Conley (2007) (verified, direct)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Work readiness",
        "description": "Skills and credentials for the workplace: professionalism, technical and industry skills, certifications, internships and apprenticeships.",
        "codes": [
          {
            "id": "Y7.3",
            "name": "Employability & Workplace Skills",
            "short": "Employability skills",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.5",
            "definition": "Professionalism and workplace skills: punctuality, workplace communication, initiative, job performance.",
            "include": "Professional conduct; supervisor evaluations; workplace communication; everyday digital skills for work or daily life (email, video calls, online forms, office software).",
            "exclude": "Having or keeping a job; general SEL skills outside a work context.",
            "useInstead": "Y7.5; Y4.",
            "example": {
              "text": "Youth will demonstrate punctuality, professional communication, and appropriate workplace attire.",
              "goldId": "S171"
            },
            "source": "U.S. Department of Education, OCTAE, Employability Skills Framework.",
            "basis": "U.S. ED OCTAE Employability Skills Framework (verified); Workplace Skills: Technology Use (verified, CP-09-06)."
          },
          {
            "id": "Y7.4",
            "name": "Technical Skills, Credentials & Work-Based Learning",
            "short": "Technical skills & credentials",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.6",
            "definition": "Industry-specific skills, recognized credentials and certifications, and completing internships or apprenticeships.",
            "include": "Industry certifications; apprenticeship completion; trade skills.",
            "exclude": "Employment after training; academic computing skills.",
            "useInstead": "Y7.5; Y1.4.",
            "example": {
              "text": "Apprentices will complete a registered apprenticeship program.",
              "goldId": "S166"
            },
            "source": "Perkins V; WIOA performance indicators, 20 CFR 677.155 (credential attainment); WIOA youth program elements, 20 CFR 681.460(a)(3)-(4) (work experience, including internships and pre-apprenticeship; occupational skill training).",
            "basis": "Perkins V, 20 U.S.C. 2302(5)(A)(ii) and (5)(B) (verified, direct, on govinfo; claim y7-08); WIOA 20 CFR 677.155, credential attainment (verified); WIOA youth program elements, 20 CFR 681.460(a)(3)-(4), work experience (including pre-apprenticeship, internships and job shadowing) and occupational skill training (verified, partial: program elements a local area must provide, counted as partial-fit support with no FD, decision G4; claim y7-09)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Employment & independence",
        "description": "Results in work and adult independence: getting and keeping a job, managing money, and the daily living skills needed to live on one's own.",
        "codes": [
          {
            "id": "Y7.5",
            "name": "Employment & Earnings",
            "short": "Employment & earnings",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.8",
            "definition": "Getting or keeping a job, wages and earnings, and combined 'employed or in education' indicators.",
            "include": "Job placement; paid work hours; wages; competitive integrated employment; WIOA-style combined indicators.",
            "exclude": "Training completion; household income.",
            "useInstead": "Y7.4; F2.1.",
            "example": {
              "text": "Youth will secure a job within 90 days of release.",
              "goldId": "S218"
            },
            "source": "WIOA performance indicators, 20 CFR 677.155; Rehabilitation Act, 29 U.S.C. 705(5) (competitive integrated employment).",
            "basis": "WIOA, 20 CFR 677.155 (verified); Rehabilitation Act, 29 U.S.C. 705(5), competitive integrated employment (verified, direct; claim y7-11)."
          },
          {
            "id": "Y7.6",
            "name": "Financial Capability",
            "short": "Financial capability",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.9",
            "definition": "The young person's own financial knowledge, habits and decisions: budgeting, saving, banking, credit, understanding pay and taxes.",
            "include": "Budgets; savings accounts; reading a pay stub; understanding credit and interest.",
            "exclude": "Household income or benefits; the youth's wages; arithmetic with money as context.",
            "useInstead": "F2.1; Y7.5; Y1.3.",
            "example": {
              "text": "Youth will create and follow a monthly personal budget.",
              "goldId": "S089"
            },
            "source": "CFPB (2016), Building Blocks to Help Youth Achieve Financial Capability; Jump$tart & CEE (2021), National Standards for Personal Financial Education.",
            "basis": "CFPB (2016) Building Blocks (verified); Jump$tart & CEE (2021) National Standards (verified)."
          },
          {
            "id": "Y7.7",
            "name": "Independent Living Skills",
            "short": "Independent living skills",
            "flag": "hybrid",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Daily living skills for self-sufficiency: cooking, scheduling, transportation, self-care away from home, and obtaining vital documents.",
            "include": "Independent-living skill bundles; getting an ID, Social Security card and birth certificate; self-care at camp.",
            "exclude": "Money-only skills; own housing.",
            "useInstead": "Y7.6; F2.3.",
            "example": {
              "text": "Transition-age youth will obtain their birth certificate, Social Security card, and state ID before exiting care.",
              "goldId": "S120"
            },
            "source": "Chafee Foster Care Program for Successful Transition to Adulthood, 42 U.S.C. 677(a)(1) (daily living skills); Casey Family Programs (2022), Casey Life Skills Toolkit (daily living and self-care); Social Security Act sec. 475(5)(I), 42 U.S.C. 675(5)(I) (birth certificate, Social Security card and state ID for youth leaving foster care).",
            "basis": "Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified). Casey Family Programs (2022), Casey Life Skills Toolkit v1.4, daily living and self-care activities, for any youth 14-21 \"regardless of whether they are in foster care\" (verified, direct; claim y7-13). 42 U.S.C. 675(5)(I), birth certificate, Social Security card and state ID for youth leaving foster care (verified, partial: a statutory duty, counted as partial-fit support with no FD, decision G4; claim y7-18). IDEA, 34 CFR 300.43(a)(2)(v), daily living skills in transition services (verified, partial; supporting only; claim y7-15). FD-P15 closed (CP-12-06)."
          }
        ]
      }
    ]
  },
  {
    "id": "Y8",
    "part": "Y",
    "name": "Health, Safety & Well-Being",
    "description": "A young person's own health and safety: daily health habits, motor skills, health knowledge, sexual health and health care; mental health; felt safety, risk behavior and justice involvement.",
    "frameworkBasis": "CDC WSCC; Keyes, Dual Continua Model; CDC Youth Risk Behavior Survey; Healthy People 2030; SHAPE America national standards; NCTSN; CJCA (2009).",
    "categoryLine": "A. Physical health (Y8.1–Y8.5) · B. Mental health (Y8.6–Y8.9) · C. Safety, risk & justice (Y8.10–Y8.13)",
    "categories": [
      {
        "letter": "A",
        "name": "Physical health",
        "description": "A young person's physical health: daily health habits, motor and sport skills, health knowledge, sexual and reproductive health, and access to health care.",
        "codes": [
          {
            "id": "Y8.1",
            "name": "Healthy Daily Habits",
            "short": "Healthy daily habits",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P32",
            "from2x": "8.1",
            "definition": "Everyday health behaviors: physical activity and fitness, nutrition and healthy eating, sleep, hygiene, and recreational screen time.",
            "include": "Minutes of activity; fitness; fruit and vegetable intake; healthy cooking framed as nutrition; hours of sleep; handwashing; less screen time.",
            "exclude": "Sport or motor skill gains; health care visits; first aid; household food access.",
            "useInstead": "Y8.2; Y8.5; Y8.3; F2.2.",
            "example": {
              "text": "Participants increased their weekly physical activity to at least 60 minutes on 5 or more days.",
              "goldId": "H013"
            },
            "source": "CDC/ASCD Whole School, Whole Community, Whole Child (WSCC); Healthy People 2030, SH-04 (sleep); CDC Youth Risk Behavior Survey (sleep).",
            "basis": "CDC/ASCD WSCC (verified, partial: school service components); Healthy People 2030 SH-04 sleep (verified); CDC (2025) 2025 State and Local YRBS, standard high school questionnaire, Q83 sleep, Q73 physical activity, Q66-Q70 fruit and vegetables (verified, direct; CP-12-23). YRBS screen-time hours items exist only in 2021 and earlier questionnaires (research-basis appendix A, R03); not cited. CP-12-07 (2026-10-16): CDC HECAT (2021) PA HBO 1-2, FN HBO 3 and 10, PHW HBO 1-2 (verified, direct: activity, fitness, fruit and vegetables, cooking, hygiene, sleep); Healthy People 2030 PA-06 (verified, direct). Screen time: Healthy People 2030 PA-R02 (verified, partial: parents following AAP limits, not the young person's own screen time) and HECAT PA7.8.2 (verified, partial: sedentary behavior, screen time not named; round-2 claim CP-12-07-V12). No youth-level screen-time source: codebook-defined element, FD-P32."
          },
          {
            "id": "Y8.2",
            "name": "Motor & Sport Skills",
            "short": "Motor & sport skills",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P29",
            "from2x": "new (part of 8.1)",
            "definition": "Fundamental movement, fine and gross motor, and sport-specific or outdoor physical skills.",
            "include": "Dribbling and passing; swimming levels; running, jumping, throwing; fine motor skills; hiking or climbing technique.",
            "exclude": "Fitness or activity minutes; confidence in general.",
            "useInstead": "Y8.1; Y5.4.",
            "example": {
              "text": "Children will develop fundamental movement skills such as running, jumping, throwing, and catching.",
              "goldId": "S068"
            },
            "source": "SHAPE America (2024), National Physical Education Standards, Standard 1 (motor skills).",
            "basis": "SHAPE America (2024) National PE Standards, Standard 1 motor skills (verified). \"Fine motor\" has no source the codebook may cite: Head Start ELOF's Fine Motor sub-domain verifies (claim y8a-13), but the early-childhood rule keeps ELOF for Y1.8 only (decision Y1-1), and no SHAPE PE Standard 1 indicator names fine motor skills of the hands (round-2 claim CP-12-07-V2, not supported). See FD-P29."
          },
          {
            "id": "Y8.3",
            "name": "Health Knowledge & Safety Skills",
            "short": "Health knowledge & safety skills",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new (part of 1.3, 8.1)",
            "definition": "Health information and safety skills not covered by another health code: first aid, injury prevention, finding reliable health information, and health education content.",
            "include": "First aid; outdoor safety; health class content; how to respond to an allergic reaction.",
            "exclude": "Sexual health knowledge; substance-risk knowledge; industry safety credentials.",
            "useInstead": "Y8.4; Y8.11; Y7.4.",
            "example": {
              "text": "Scouts will learn wilderness first aid and outdoor safety skills.",
              "goldId": "S108"
            },
            "source": "SHAPE America (2024), National Health Education Standards, Standard 1.",
            "basis": "SHAPE America (2024) National Health Education Standards, Standard 1 (verified), indicators 1.2.3 and 1.5.3 injury and illness prevention, and Standard 3, indicator 3.8.3 reliable health information (verified, direct; CP-12-07). CDC HECAT (2021) Safety HBO 4 and 7 (verified, partial: the general categories cover outdoor safety and allergic reactions)."
          },
          {
            "id": "Y8.4",
            "name": "Sexual & Reproductive Health",
            "short": "Sexual & reproductive health",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "8.6",
            "definition": "Knowledge and behavior related to sexual health, STI and pregnancy prevention, and healthy relationships in that context.",
            "include": "STI prevention knowledge; delaying pregnancy; accessing confidential services.",
            "exclude": "Dating violence as violence; parenting.",
            "useInstead": "Y8.12; F1.1.",
            "example": {
              "text": "Youth will be able to name three methods of preventing sexually transmitted infections.",
              "goldId": "S002"
            },
            "source": "National Sex Education Standards, 2nd edition (2020); CDC Youth Risk Behavior Survey (sexual behaviors).",
            "basis": "National Sex Education Standards, 2nd ed. (2020) (verified), SH.8.CC.2 and SH.12.GS.1 (CP-12-07); CDC YRBS (verified); CDC (2025) 2025 State and Local YRBS, standard HS questionnaire, Q59-Q60 (verified, direct; CP-12-23)."
          },
          {
            "id": "Y8.5",
            "name": "Health Care Access & Condition Management",
            "short": "Health care access",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new (part of 8.1)",
            "definition": "Getting and using health care: insurance, preventive and dental or vision visits, screenings, immunizations, and managing chronic conditions.",
            "include": "Enrolling in insurance; annual screenings; developmental screenings received; asthma self-management.",
            "exclude": "Mental health services; parents keeping infants' well-child visits.",
            "useInstead": "Y8.9; F1.3.",
            "example": {
              "text": "Participants will complete an annual dental and vision screening.",
              "goldId": "S064"
            },
            "source": "Healthy People 2030, AH-01 and AHS-01; ACF NYTD (health insurance).",
            "basis": "Healthy People 2030 AH-01, AHS-01 (verified); ACF NYTD health insurance (verified). CP-12-07: CDC HECAT (2021) PHW HBO 9-10 chronic conditions (verified, direct) and HBO 11 screenings (verified, partial: the general category covers dental and vision); Healthy People 2030 OH-08 dental (verified, direct), MICH-17 developmental screening (verified, direct; early-childhood statements only); CDC (2025) 2025 State and Local YRBS, Q80 dental visit (verified, direct; CP-12-23). Immunizations: CDC HECAT (2021) PHW1.12.14, screenings, immunizations, checkups and examinations (verified, direct, knowledge level; round-2 claim CP-12-07-V13); Healthy People 2030 IID-08 HPV vaccine (verified, partial: one vaccine, ages 13-15). No entry for immunizations."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Mental health",
        "description": "A young person's mental health: fewer symptoms and distress, flourishing and life satisfaction, healing from trauma, and access to mental health services.",
        "codes": [
          {
            "id": "Y8.6",
            "name": "Mental Health Symptoms & Distress",
            "short": "Mental health symptoms",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "8.2",
            "definition": "Fewer symptoms of anxiety, depression, distress or behavioral problems in the young person.",
            "include": "Lower anxiety or depression scores; fewer outbursts; less self-reported stress.",
            "exclude": "Coping skills; caregiver stress; loneliness framed socially.",
            "useInstead": "Y4.2; F1.4; Y3.1.",
            "example": {
              "text": "Students will report fewer symptoms of depression on the PHQ-9.",
              "goldId": "S067"
            },
            "source": "Keyes, Dual Continua Model (mental illness continuum).",
            "basis": "Keyes Dual Continua, mental illness continuum (verified)."
          },
          {
            "id": "Y8.7",
            "name": "Flourishing & Life Satisfaction",
            "short": "Flourishing",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Positive mental health: life satisfaction, flourishing, feeling restored or well.",
            "include": "Life satisfaction; flourishing; general well-being.",
            "exclude": "Enjoying the program; symptom reduction.",
            "useInstead": "Y2.1; Y8.6.",
            "example": {
              "text": "Students will report higher life satisfaction and a sense of flourishing.",
              "goldId": "S071"
            },
            "source": "Keyes, Dual Continua Model (mental health continuum: flourishing).",
            "basis": "Keyes Dual Continua, mental health continuum (verified); Keyes (2002) (partial)."
          },
          {
            "id": "Y8.8",
            "name": "Healing & Trauma Recovery",
            "short": "Trauma recovery",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "8.3",
            "definition": "A young person processing trauma, feeling psychologically safe during recovery, and moving toward healing.",
            "include": "Processing traumatic events; psychological safety for trauma-exposed youth.",
            "exclude": "Staff adopting trauma-informed practice; general felt safety.",
            "useInstead": "A1.2; Y8.10 or Y3.1.",
            "example": {
              "text": "Youth who have experienced trauma will report feeling psychologically safe and supported in processing it.",
              "goldId": "S078"
            },
            "source": "NCTSN, 12 Core Concepts for Understanding Traumatic Stress Responses in Children and Families.",
            "basis": "Layne, Strand & NCTSN Task Force (2012), 12 Core Concepts for Understanding Traumatic Stress Responses in Childhood, Concept 5, danger and safety (verified, partial: a framework for understanding stress responses, not an outcome framework). \"Processing trauma\" has no verified component yet (later item 4)."
          },
          {
            "id": "Y8.9",
            "name": "Mental Health Service Access & Use",
            "short": "Mental health service use",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "8.4",
            "definition": "Being connected to and using counseling, therapy or crisis services.",
            "include": "Referrals completed; sessions attended; connection to community providers.",
            "exclude": "Knowing where to get help (a skill); staff training on referrals.",
            "useInstead": "Y4.9; A1.1.",
            "example": {
              "text": "Students identified as high-risk will be connected to community mental health providers for ongoing care.",
              "goldId": "S114"
            },
            "source": "CDC WSCC, Counseling, Psychological, and Social Services.",
            "basis": "Healthy People 2030 MHMD-03 (verified, direct; primary) and MHMD-06 (verified, direct); CDC (2025) 2025 National YRBS, Q94 counseling or therapy (verified, direct; CP-12-23); CDC WSCC, Counseling, Psychological, and Social Services (verified, partial: a school service component)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Safety, risk & justice",
        "description": "A young person's safety and risk: feeling safe, substance use, violence and bullying, and involvement with the justice system.",
        "codes": [
          {
            "id": "Y8.10",
            "name": "Felt Safety",
            "short": "Felt safety",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Feeling safe at home, at school or in the neighborhood, not specific to the program.",
            "include": "Feeling safe walking to school or in the neighborhood.",
            "exclude": "Safety and acceptance in the program; trauma-related safety; safe choices; reduced victimization.",
            "useInstead": "Y3.1; Y8.8; Y4.12; Y8.12. Mirrors CP-01-07's tie-breaker (PR #31, in flight).",
            "example": {
              "text": "Youth will feel safe walking in their neighborhood.",
              "goldId": "S038"
            },
            "source": "Search Institute, 40 Developmental Assets, Empowerment (Safety).",
            "basis": "Search Institute 40 Developmental Assets, Safety (verified; CP-01-07's use checked as partial)."
          },
          {
            "id": "Y8.11",
            "name": "Substance Use",
            "short": "Substance use",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P30",
            "from2x": "8.5",
            "definition": "Use, intentions or perceived risk of tobacco, vaping, alcohol or other drugs.",
            "include": "Reduced use; delayed first use; lower intentions; higher perceived risk; knowledge of risks.",
            "exclude": "Refusal skills; policy restricting access.",
            "useInstead": "Y4.12; A3.1.",
            "example": {
              "text": "Youth will report lower intentions to vape in the next year.",
              "goldId": "S065"
            },
            "source": "CDC Youth Risk Behavior Survey (tobacco, alcohol and other drug use); Healthy People 2030, SU-05 adolescent drug use.",
            "basis": "Re-verified 2026-09-27 (CP-10-01): CDC YRBS (verified, direct); Healthy People 2030 SU-05 (verified, direct for drug use). SAMHSA Strategic Prevention Framework dropped: it is a planning process, not an outcome framework (CP-01-13 item 5). CP-12-07 (2026-10-16): Miech et al. (2026), Monitoring the Future, perceived risk (verified, partial: the survey pairs it with disapproval, which is outside the code). Knowledge of risks: CDC HECAT (2021) AOD1.5.9 and T1.5.1 (verified, direct; round-2 claims CP-12-07-V3, CP-12-07-V4). Intentions: no verified component (Monitoring the Future reports no intention measure, round-2 claim CP-12-07-V4b; HECAT Tobacco has none, V4); codebook-defined element, FD-P30."
          },
          {
            "id": "Y8.12",
            "name": "Violence, Bullying & Victimization",
            "short": "Violence & victimization",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P31",
            "from2x": "8.7",
            "definition": "Fighting, weapon carrying, bullying, harassment, dating violence and community violence, as perpetrator or victim.",
            "include": "Fewer fights; less weapon carrying; less harassment; dating-violence warning signs.",
            "exclude": "Suspensions; conflict-resolution skill.",
            "useInstead": "Y1.14; Y4.8.",
            "example": {
              "text": "Youth will be involved in fewer physical fights.",
              "goldId": "S134"
            },
            "source": "CDC Youth Risk Behavior Survey (violence and injury); CDC & U.S. Department of Education (2014), uniform definition of bullying.",
            "basis": "CDC YRBSS About page, exposure to community violence (verified, direct; CP-12-23); CDC (2025) 2025 National YRBS, Q11, Q12, Q16, Q21-Q22, Q26-Q27 (verified, direct; CP-12-23); CDC (2024) About Youth Violence (verified, direct; CP-12-07); CDC & U.S. ED (2014) bullying definitions (verified, partial: bullying only). Dating-violence warning signs: no verified component (HECAT Violence Prevention and NHES Standard 1 checked in round 2, claims CP-12-07-V5 and CP-12-07-V5b, not supported); codebook-defined element, FD-P31."
          },
          {
            "id": "Y8.13",
            "name": "Justice Involvement, Diversion & Reentry",
            "short": "Justice involvement",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P28",
            "from2x": "8.8",
            "definition": "Avoiding justice-system involvement, completing diversion or probation, and reduced recidivism.",
            "include": "No new adjudication; completing a restorative agreement; avoiding re-arrest.",
            "exclude": "Re-enrolling in school or getting a job after release.",
            "useInstead": "Y1.17; Y7.5.",
            "example": {
              "text": "Youth will reduce recidivism and avoid re-arrest within 12 months of program completion.",
              "goldId": "S160"
            },
            "source": "Harris, Lockwood & Mengers (2009), CJCA white paper on juvenile justice performance measures.",
            "basis": "Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper (verified, partial: recidivism measurement; CJCA is now CJJA). OJJDP (2017), Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing (verified, direct; CP-12-07). Completing probation, court conditions or a restorative agreement: codebook-defined, FD-P28."
          }
        ]
      }
    ]
  },
  {
    "id": "F1",
    "part": "F",
    "name": "Family & Caregiver Strengthening",
    "description": "Caregivers and other adult participants: parenting and home learning, caregiver well-being and connections, adult education and system navigation, and the family's partnership with the program.",
    "frameworkBasis": "CSSP Strengthening Families Protective Factors; Ascend 2Gen Approach; Epstein's six types of involvement; Mapp & Kuttner (2013) Dual Capacity-Building Framework; MIECHV (F1.3 only); secondary: WIOA Title II, Adult Education and Family Literacy Act (adult education); Digital Equity Act (digital skills); IDEA Parent Training and Information Centers, 20 U.S.C. 1471 (parent training); SNAP-Ed Evaluation Framework (family eating habits); Healthy People 2030, MICH-14 and MICH-15 (infant health practices).",
    "categoryLine": "A. Parenting & home learning (F1.1–F1.3) · B. Caregiver well-being & support (F1.4–F1.5) · C. Adult development & navigation (F1.6–F1.7) · D. Family-program partnership (F1.8–F1.9)",
    "categories": [
      {
        "letter": "A",
        "name": "Parenting & home learning",
        "description": "How caregivers raise children and support their learning: parenting knowledge and practices, learning routines at home, and family health practices.",
        "codes": [
          {
            "id": "F1.1",
            "name": "Parenting Knowledge & Practices",
            "short": "Parenting",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "12.1",
            "definition": "Caregivers' child-development knowledge, parenting practices, parent-child interaction and parenting confidence, including teen parents.",
            "include": "Knowledge of milestones; positive discipline; positive interactions; parenting confidence.",
            "exclude": "Home learning routines; family health practices; the youth's side of the relationship.",
            "useInstead": "F1.2; F1.3; Y3.4.",
            "example": {
              "text": "Caregivers will demonstrate use of positive discipline strategies at home.",
              "goldId": "S245"
            },
            "source": "CSSP Strengthening Families, Knowledge of Parenting and Child Development; Epstein, Type 1 Parenting.",
            "basis": "CSSP Strengthening Families, Knowledge of Parenting and Child Development (verified; component text from CSSP (n.d.; posted October 16, 2018), Core Meanings of the Strengthening Families Protective Factors, claim f1-02, CP-12-08); Epstein Type 1 (verified on the NNPS 2019 compilation, CP-10-01). Parenting confidence draws on CSSP Parental Resilience (\"having self-confidence\", claim f1-01), in the same framework."
          },
          {
            "id": "F1.2",
            "name": "Home Learning Environment & Routines",
            "short": "Home learning",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P34",
            "from2x": "12.4",
            "definition": "Family practices that support a child's learning and development at home: reading together, routines, homework time.",
            "include": "Reading at home; bedtime and daily routines; homework space.",
            "exclude": "Parenting knowledge in general.",
            "useInstead": "F1.1.",
            "example": {
              "text": "Parents will read with their child at home at least three nights per week.",
              "goldId": "S119"
            },
            "source": "Epstein, Type 4 Learning at Home.",
            "basis": "Epstein et al. (2019), Type 4 Learning at Home (verified, direct; Corwin handbook copy, claim f1-03, CP-12-22). Routines: CSSP (n.d.), Core Meanings, \"regular, predictable and consistent routines\" (verified, partial: framed as parenting knowledge; claim f1-14). No household-practice source: the Corwin Type 4 definition names no routines or schedules (round-2 claim CP-12-08-V14, not supported); codebook-defined element, FD-P34."
          },
          {
            "id": "F1.3",
            "name": "Family Health Practices",
            "short": "Family health practices",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Caregiver or household health practices for children: breastfeeding, safe sleep, well-child visits kept by the parent, family eating habits.",
            "include": "Breastfeeding; safe sleep; well-child visits; family fruit and vegetable intake.",
            "exclude": "Household food access; the youth's own health care.",
            "useInstead": "F2.2; Y8.5.",
            "example": {
              "text": "First-time mothers initiated and sustained breastfeeding for at least six months.",
              "goldId": "H066"
            },
            "source": "MIECHV performance measures; Healthy People 2030, MICH-14 and MICH-15.",
            "basis": "MIECHV performance measures (verified); Healthy People 2030 MICH-14, MICH-15 (verified). Kept by Severin's decision despite being early-childhood sources. Family eating habits: USDA FNS, SNAP-Ed Evaluation Framework, MT1 Nutrition-Related Behavioral Changes (verified, direct; claim f1-11, CP-12-08). The live page was still up on 2026-10-16 (round-2 claim CP-12-08-V7 could not reach an archive copy), so no entry."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Caregiver well-being & support",
        "description": "The caregiver's own well-being, resilience and supportive connections with other parents and the community.",
        "codes": [
          {
            "id": "F1.4",
            "name": "Caregiver Well-Being & Resilience",
            "short": "Caregiver well-being",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "12.2",
            "definition": "The caregiver's own stress, mental health and resilience.",
            "include": "Reduced parenting stress; lower caregiver depression; resilience.",
            "exclude": "The child's mental health; adult learners' tech anxiety about a skill.",
            "useInstead": "Y8.6; F1.6.",
            "example": {
              "text": "Caregivers of children with autism will report reduced parenting stress.",
              "goldId": "S239"
            },
            "source": "CSSP Strengthening Families, Parental Resilience.",
            "basis": "CSSP Strengthening Families, Parental Resilience (verified). Re-verified 2026-09-27 (CP-10-01): the definition is recorded from Harper Browne (2024), CSSP's research foundation for the framework (verified, partial). CP-12-08: CSSP (n.d.), Core Meanings, Parental Resilience (verified, direct; claim f1-01)."
          },
          {
            "id": "F1.5",
            "name": "Caregiver Social Connections",
            "short": "Caregiver connections",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "12.3",
            "definition": "Caregivers building supportive relationships with other parents or their community.",
            "include": "Parent friendships; peer support groups.",
            "exclude": "The family's relationship with the program.",
            "useInstead": "F1.8.",
            "example": {
              "text": "Caregivers will build friendships with other parents in the program.",
              "goldId": "S126"
            },
            "source": "CSSP Strengthening Families, Social Connections.",
            "basis": "CSSP Strengthening Families, Social Connections (verified)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Adult development & navigation",
        "description": "Caregivers and other adult participants building their own education, skills and employment, and learning to navigate systems and know their rights.",
        "codes": [
          {
            "id": "F1.6",
            "name": "Adult Education, Skills & Employment",
            "short": "Adult education & employment",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P33",
            "from2x": "new",
            "definition": "The education, training, English proficiency, digital or financial skills, and employment of a caregiver or other adult participant.",
            "include": "GED or job training for parents; adult ESL; digital literacy for family members or older adults.",
            "exclude": "Household income; young people's own skills.",
            "useInstead": "F2.1; the Y codes.",
            "example": {
              "text": "Parents will complete their GED or enroll in job training.",
              "goldId": "S118"
            },
            "source": "Ascend at the Aspen Institute, 2Gen Approach (Postsecondary & Employment Pathways); Digital Equity Act, 47 U.S.C. 1721(12).",
            "basis": "Ascend 2Gen, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified); WIOA Title II, Adult Education and Family Literacy Act, 29 U.S.C. 3272(1) adult education and 3272(6) English language acquisition (verified, direct, official copy matched in round 2, claim CP-12-08-V10; claims f1-06, f1-07, CP-12-08). Older adults: covered by WIOA Title II (decision G1). Financial skills: no F1.6 source; codebook-defined, FD-P33 (decision F1-1)."
          },
          {
            "id": "F1.7",
            "name": "System Navigation & Rights Knowledge",
            "short": "Navigation & rights",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Families knowing their rights, knowing where to turn for help, navigating school or service systems, and getting connected to resources.",
            "include": "IDEA rights knowledge; understanding enrollment and health systems; connecting to resources; knowing where to turn in a crisis.",
            "exclude": "Receiving benefits; civic knowledge of government.",
            "useInstead": "F2.1; Y6.2.",
            "example": {
              "text": "Parents of children with disabilities reported increased knowledge of their child's rights under IDEA.",
              "goldId": "H059"
            },
            "source": "IDEA, 20 U.S.C. 1471(b); CSSP Strengthening Families, Concrete Support in Times of Need.",
            "basis": "IDEA 20 U.S.C. 1471(b) (verified); CSSP Concrete Support in Times of Need (verified). Mapp & Kuttner (2013) removed (CP-12-22): its capacities are broader than rights knowledge and navigation (CP-10-01 verifier, fit partial)."
          }
        ]
      },
      {
        "letter": "D",
        "name": "Family-program partnership",
        "description": "The family's relationship with the program or school: trust and communication, and taking part in program or school activities and decisions.",
        "codes": [
          {
            "id": "F1.8",
            "name": "Family Connection & Trust with the Program",
            "short": "Family-program trust",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "3.5",
            "definition": "The family's relationship with and trust in the program or school, and communication between them.",
            "include": "Families feeling welcome; trust in staff; feeling connected to the school community.",
            "exclude": "Parents' confidence in program safety or satisfaction; family participation in events or decisions.",
            "useInstead": "A2.2; F1.9.",
            "example": {
              "text": "Families will report trusting program staff and feeling welcome at the center.",
              "goldId": "S157"
            },
            "source": "Mapp & Kuttner (2013), Dual Capacity-Building Framework; Epstein, Type 2 Communicating.",
            "basis": "Mapp & Kuttner (2013) (verified, direct); Epstein et al. (2019), Type 2 Communicating (verified, partial: the communication clause only; claim f1-04)."
          },
          {
            "id": "F1.9",
            "name": "Family Participation & Leadership",
            "short": "Family participation & leadership",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Families volunteering, leading family activities, or taking part in program or school decisions.",
            "include": "Serving on advisory councils; volunteering; leading or co-hosting family events.",
            "exclude": "Family attendance at workshops or events, counted or per family; the organization creating structures.",
            "useInstead": "A2.5; A2.6.",
            "example": {
              "text": "Parents will serve on the program's family advisory council.",
              "goldId": "S164"
            },
            "source": "Epstein, Types 3 Volunteering and 5 Decision Making.",
            "basis": "Epstein Types 3 and 5 (located)."
          }
        ]
      }
    ]
  },
  {
    "id": "F2",
    "part": "F",
    "name": "Basic Needs & Economic Stability",
    "description": "The material stability of a household or of a young person living independently, and the basic goods a young person has: income and benefits, food, housing, clothing and supplies.",
    "frameworkBasis": "CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD; Eurostat EU-SILC child-specific deprivation items (Commission Regulation (EU) No 112/2013; F2.4 only); Global MHH Monitoring Group (2022), girls' menstrual health indicators (F2.4 only); JRF and I-SPHERE, Destitution in the UK (basic toiletries; F2.4 only); secondary: CFPB Financial Well-Being (financial cushion); Runaway and Homeless Youth Program, 45 CFR 1351 (stable housing and safe exits); Healthy People 2030, AHS-01, NWS-01 and SDOH-04; McKinney-Vento Act, including the HEARTH Act and 42 U.S.C. 11433(d)(15) (school supplies); Social Security Act, 42 U.S.C. 675(4)(A) (clothing and school supplies).",
    "categoryLine": "A. Economic stability (F2.1) · B. Food, housing & material necessities (F2.2–F2.4)",
    "categories": [
      {
        "letter": "A",
        "name": "Economic stability",
        "description": "Household or independent-youth income, public benefits and financial stability.",
        "codes": [
          {
            "id": "F2.1",
            "name": "Income, Benefits & Financial Stability",
            "short": "Income & benefits",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "12.5",
            "definition": "Household or independent-youth income, public benefits, and financial stability.",
            "include": "Household income; SNAP/TANF/Medicaid enrollment; household savings.",
            "exclude": "The youth's own money skills; caregiver job training.",
            "useInstead": "Y7.6; F1.6.",
            "example": {
              "text": "Families will enroll in SNAP and other public benefits they are eligible for.",
              "goldId": "S106"
            },
            "source": "Ascend at the Aspen Institute, 2Gen Approach (Economic Assets); CSSP Strengthening Families, Concrete Support in Times of Need.",
            "basis": "Ascend 2Gen Economic Assets (verified, direct); CSSP Concrete Support (verified, partial: crisis support, not income). CP-12-09: ACF NYTD, financial self-sufficiency (verified, direct; independent youth; claim f2-01); CFPB (2015) Financial Well-Being, section 2.1 (verified, direct; claim f2-02); Healthy People 2030 AHS-01 (verified, partial: any coverage, of which Medicaid is one; claim f2-03). Independent youth need no FD (decision G1)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Food, housing & material necessities",
        "description": "Having enough healthy food, a safe, stable place to live, and the clothing, shoes, gear and supplies a young person needs.",
        "codes": [
          {
            "id": "F2.2",
            "name": "Food Security",
            "short": "Food security",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P35",
            "from2x": "12.6",
            "definition": "Having enough food and access to healthy food.",
            "include": "Reduced food insecurity; fewer skipped meals; less reliance on emergency food.",
            "exclude": "Household eating practices; food distribution counts.",
            "useInstead": "F1.3; A2.5.",
            "example": {
              "text": "Households reported reduced food insecurity as measured by the USDA six-item screener.",
              "goldId": "H070"
            },
            "source": "USDA ERS, U.S. Household Food Security Survey Module.",
            "basis": "USDA ERS Household Food Security Survey Module (verified, direct: enough food). CP-12-09: Healthy People 2030 NWS-01 (verified, direct; claim f2-05). Access to healthy food: no verified source. USDA's 2022 nutrition-security report prints no title or issuing office (round-2 claim CP-12-09-V8, not supported), so it is not cited; codebook-defined element, FD-P35."
          },
          {
            "id": "F2.3",
            "name": "Housing Stability & Safe Living Situation",
            "short": "Housing stability",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "12.7",
            "definition": "Securing or keeping safe, stable housing, for a household or a young person living independently.",
            "include": "Exits to stable housing; avoiding eviction; keeping a lease; reduced rent burden.",
            "exclude": "Services delivered toward housing; school stability.",
            "useInstead": "A2.5; Y1.13.",
            "example": {
              "text": "Families will secure stable, safe housing within 90 days of program enrollment.",
              "goldId": "S198"
            },
            "source": "ACF NYTD (housing); McKinney-Vento Act.",
            "basis": "RHY Program rule, 45 CFR 1351.30(a)(1) and 1351.31(a)(1) Stable Housing, and 1351.1 safe and appropriate exits (verified, direct; claims f2-06, f2-07, CP-12-09); Healthy People 2030 SDOH-04 rent burden (verified, direct; claim f2-09); ACF NYTD, experience with homelessness (verified, partial); McKinney-Vento, 42 U.S.C. 11434a definition (verified, partial); McKinney-Vento as amended by HEARTH, 42 U.S.C. 11386a(b)(1)(A) (verified, partial: performance criteria; claim f2-08, official copy matched in round 2, claim CP-12-09-V11). Young people living independently are covered by the RHY rule (decision G1)."
          },
          {
            "id": "F2.4",
            "name": "Material Necessities (Clothing, Gear & Supplies)",
            "short": "Material necessities",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "A young person having, or being given, the basic goods a child needs, rather than going without them for lack of money (the statement need not name the cause): clothing, properly fitting shoes, outdoor leisure equipment, school supplies, enough menstrual materials, and basic toiletries.",
            "include": "Weather-appropriate clothing; shoes that fit; outdoor play gear such as a bike; school supplies, including students coming to class with the supplies they need; enough period products; soap, shampoo, toothpaste, a toothbrush, deodorant and other basic toiletries; the number of children who will have a coat or other goods; goods distributed, provided or given to named young people (\"coats distributed to students\", \"each student will receive a backpack of supplies\", \"cleats and a uniform for every player\").",
            "exclude": "Goods counted with no young people named, or access to goods (\"500 pairs of gloves handed out\", \"free period products available at school\"); devices and internet; food; housing; basic needs or material hardship in general; what having the goods leads to (school attendance, joining a team, physical activity, confidence or dignity, belonging, household costs).",
            "useInstead": "A2.3 goods counted with no young people named, access to goods, and devices or internet; Domain F2 with subcategory none for basic needs or material hardship in general; F2.1 household costs; F2.2 food; F2.3 housing; Y1.13 attendance; Y1.9 class participation; Y2.6 joining or staying in an activity; Y8.1 physical activity; Y5.4 confidence, self-worth or dignity; Y3.1 belonging.",
            "example": {
              "text": "Every student we serve will have a warm winter coat and properly fitting shoes by December."
            },
            "source": "Eurostat, EU-SILC child-specific material deprivation items (Commission Regulation (EU) No 112/2013, HD100, HD110, HD160); Global MHH Monitoring Group (2022), Priority List of Indicators for Girls' Menstrual Health and Hygiene, Indicator 1; Social Security Act, 42 U.S.C. 675(4)(A); McKinney-Vento Act, 42 U.S.C. 11433(d)(15); Joseph Rowntree Foundation and I-SPHERE, Destitution in the UK (essential 6, basic toiletries).",
            "basis": "Eurostat (2023, 24 April), child-specific material deprivation rate (verified, direct: new clothes, two pairs of shoes, outdoor leisure equipment; only items lacked for affordability count; claim f2new-01); Commission Regulation (EU) No 112/2013, Annex, HD100, HD110, HD160 (verified, direct; claim f2new-02); CSO Ireland (2025), SILC Module on Child Deprivation 2024, Table 6.1 (verified, direct, supporting only; claim f2new-03); Global MHH Monitoring Group (2022), Indicator 1 (verified, direct: enough menstrual materials; claim f2new-05). Clothing in general, not only new clothes: 42 U.S.C. 675(4)(A) (verified, partial: a duty to pay for a child's clothing and school supplies, decision G4; claim f2new-07); UN Convention on the Rights of the Child, Art. 27(3) (verified, partial: a right broader than the code, decision G3; claim f2new-09). School supplies: 42 U.S.C. 675(4)(A) and 42 U.S.C. 11433(d)(15) (verified, partial: statutory duties, decision G4; claims f2new-07, f2new-08). Outdoor sports gear is an instance of 'outdoor leisure equipment' and period products of 'menstrual materials' (decision G5). Goods given to young people, not only had (Severin, P-F24-01 to -03 and -26): 42 U.S.C. 675(4)(A) (payments to cover the cost of a child's clothing and school supplies) and 42 U.S.C. 11433(d)(15) ('The provision of school supplies') are provision duties (verified, partial, decision G4); gear and period products given are instances (G5). Basic toiletries: Bramley and Ayed (2026), Destitution in the UK: income thresholds for October 2025, Joseph Rowntree Foundation (verified, direct for the item: 'Basic toiletries (such as soap, shampoo, toothpaste, and a toothbrush)', lacked because unaffordable; an all-ages measure, broader than the code, decision G3; claim f2hyg-01); I-SPHERE, Destitution in the UK project page (verified, supporting only: counts about one million children; claim f2hyg-02); ACF Child Welfare Policy Manual 8.3B.1, Question 9 (verified, partial: a foster child's 'personal incidentals' include 'items related to personal hygiene', decision G4; claim f2hyg-03). Deodorant is an instance of basic toiletries (decision G5). The code names no foster-care or homeless population (decision G1). Innocenti Report Card 10 (claim f2new-04) waits for an official copy (decision G8). CSSP Concrete Support does not name clothing (claim f2new-13) and is not cited. No FD (CP-12-33)."
          }
        ]
      }
    ]
  },
  {
    "id": "A1",
    "part": "A",
    "name": "Staff & Volunteer Capacity",
    "description": "The adults who serve young people: what they learn, what they change in practice, and whether the workforce is stable and well.",
    "frameworkBasis": "Learning Forward (2022) Standards for Professional Learning; U.S. Surgeon General (2022) Framework for Workplace Mental Health & Well-Being; secondary: Guskey (2002), Levels 2 and 4 (participants' learning, and their use of new knowledge and skills); SAMHSA (2014), trauma-informed approach; NIOSH WellBQ (2021); BLS Job Openings and Labor Turnover Survey.",
    "categoryLine": "A. Staff learning & practice (A1.1–A1.2) · B. Workforce (A1.3)",
    "categories": [
      {
        "letter": "A",
        "name": "Staff learning & practice",
        "description": "What staff and volunteers learn and how they apply it in their practice.",
        "codes": [
          {
            "id": "A1.1",
            "name": "Staff & Volunteer Knowledge & Skills",
            "short": "Staff learning",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P36",
            "from2x": "11.1",
            "definition": "Staff, volunteers, mentors, coaches or case managers gaining knowledge or skills.",
            "include": "Training outcomes; staff confidence; volunteers' understanding.",
            "exclude": "Training hours completed (an output); applying the learning.",
            "useInstead": "A2.5; A1.2.",
            "example": {
              "text": "Coaches will report improved ability to de-escalate conflicts between players during games.",
              "goldId": "S142"
            },
            "source": "Learning Forward (2022), Standards for Professional Learning; Guskey (2002), Level 2 participants' learning.",
            "basis": "Re-verified 2026-09-27 (CP-10-01): Learning Forward (2022) (verified, partial: standards for designing professional learning, not an outcome list); Guskey (2002) Level 2 (verified, direct)."
          },
          {
            "id": "A1.2",
            "name": "Practice Change",
            "short": "Practice change",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "11.2",
            "definition": "Adults applying new practices, including trauma-informed care.",
            "include": "Implementing a curriculum or screener; adopting restorative or trauma-informed practice.",
            "exclude": "Program quality scores; learning only.",
            "useInstead": "A2.1; A1.1.",
            "example": {
              "text": "Staff will adopt trauma-informed practices in their classrooms.",
              "goldId": "S204"
            },
            "source": "Learning Forward (2022), Standards for Professional Learning; Guskey (2002), Level 4 participants' use of new knowledge and skills; SAMHSA (2014), trauma-informed approach.",
            "basis": "Re-verified 2026-09-27 (CP-10-01): Learning Forward (2022) (verified, partial); Guskey (2002) Level 4 (verified, direct); SAMHSA (2014) (verified, direct; full document on the HHS/ACF NCSACW copy, claim a1-05, CP-12-10)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Workforce",
        "description": "Whether the workforce stays and stays well: staff retention, turnover and well-being.",
        "codes": [
          {
            "id": "A1.3",
            "name": "Workforce Stability & Well-Being",
            "short": "Workforce stability",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Staff retention and turnover, and staff well-being.",
            "include": "Turnover rates; retention; burnout.",
            "exclude": "Staff learning.",
            "useInstead": "A1.1.",
            "example": {
              "text": "Staff turnover will decrease to below 20% annually.",
              "goldId": "S149"
            },
            "source": "U.S. Surgeon General (2022), Framework for Workplace Mental Health & Well-Being; NIOSH WellBQ (2021); BLS Job Openings and Labor Turnover Survey.",
            "basis": "U.S. Surgeon General (2022) (verified); NIOSH WellBQ (2021) (verified); BLS JOLTS (verified)."
          }
        ]
      }
    ]
  },
  {
    "id": "A2",
    "part": "A",
    "name": "Program Quality, Access & Reach",
    "description": "The program itself: quality, satisfaction, access and inclusion, reach and dosage (outputs), and systems for engaging families.",
    "frameworkBasis": "Weikart Center Youth Program Quality Assessment; UW-Madison Extension logic model (outputs); Mapp & Kuttner (2013); federal connectivity programs (47 CFR 54 Subpart Q, Digital Equity Act).",
    "categoryLine": "A. Quality & experience (A2.1–A2.2) · B. Access & inclusion (A2.3–A2.4) · C. Reach & engagement systems (A2.5–A2.6)",
    "categories": [
      {
        "letter": "A",
        "name": "Quality & experience",
        "description": "How good the program is and how it is experienced: assessed program quality and participant or family satisfaction.",
        "codes": [
          {
            "id": "A2.1",
            "name": "Program Quality",
            "short": "Program quality",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Observed or assessed program quality (safe, supportive, interactive, engaging environment) and accreditation.",
            "include": "YPQA or similar scores; accreditation; a more welcoming or affirming environment.",
            "exclude": "Participants' satisfaction; staff practice change.",
            "useInstead": "A2.2; A1.2.",
            "example": {
              "text": "Sites will improve their Youth Program Quality Assessment scores in the interaction and engagement domains.",
              "goldId": "S174"
            },
            "source": "Weikart Center, Youth Program Quality Assessment (program quality pyramid).",
            "basis": "Weikart Center Youth Program Quality pyramid (verified; accreditation not covered)."
          },
          {
            "id": "A2.2",
            "name": "Participant & Family Satisfaction",
            "short": "Satisfaction",
            "flag": "hybrid",
            "fidelity": "codebook-defined",
            "deviation": "FD-P18",
            "from2x": "new",
            "definition": "Participants' or families' satisfaction with the program and their perceptions of its quality and safety.",
            "include": "Satisfaction ratings; parents' confidence in program safety.",
            "exclude": "Youth enjoyment; family trust in staff.",
            "useInstead": "Y2.1; F1.8.",
            "example": {
              "text": "Parents reported feeling more confident that their child has a safe, supervised place to go after school.",
              "goldId": "H002"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "Urban Institute Candidate Outcome Indicators, mentoring (partial: youth only). Hybrid: family satisfaction is a codebook extension of it."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Access & inclusion",
        "description": "Making the program reachable for everyone: providing resources and removing barriers through accommodations and language access.",
        "codes": [
          {
            "id": "A2.3",
            "name": "Access to Resources",
            "short": "Access to resources",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "10.1",
            "definition": "Providing materials, devices, connectivity or facilities, including counts of resources distributed.",
            "include": "Laptops and hotspots; home internet; facilities access.",
            "exclude": "Participants' digital skills; clothing, shoes, gear, school supplies, menstrual materials or toiletries that young people are stated to have or to be given.",
            "useInstead": "Y1.4; F1.6; F2.4 when young people are stated to have, or to be given, clothing, shoes, gear, school supplies, menstrual materials or toiletries.",
            "example": {
              "text": "Families will receive a laptop and home internet access.",
              "goldId": "S196"
            },
            "source": "47 CFR 54 Subpart Q; ESSA, 20 U.S.C. 7119(a)(2); Digital Equity Act, 47 U.S.C. 1723(c)(1)(B).",
            "basis": "47 CFR 54 Subpart Q (verified); ESSA 20 U.S.C. 7119(a)(2) (verified); Digital Equity Act 47 U.S.C. 1723(c)(1)(B) (verified)."
          },
          {
            "id": "A2.4",
            "name": "Inclusion, Accommodations & Language Access",
            "short": "Inclusion & language access",
            "flag": "hybrid",
            "fidelity": "codebook-defined",
            "deviation": "FD-P19",
            "from2x": "10.2",
            "definition": "Removing barriers so that all participants can take part: accommodations, accessible formats, interpretation and translation.",
            "include": "Sensory kits and visual schedules; accessible materials; interpreters; home-language communications; youth with disabilities (or another group facing barriers) taking part alongside peers, when inclusion is the point.",
            "exclude": "A young person's choice to join or return; families learning to navigate systems.",
            "useInstead": "Y2.6; F1.7.",
            "example": {
              "text": "The program will provide accommodations (sensory kits, visual schedules) so all youth can participate.",
              "goldId": "S113"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "Re-verified 2026-09-27 (CP-10-01): ED & DOJ (2015) English learner letter dropped: ED rescinded it in August 2025. ADA Title II, 28 CFR 35.130(b)(7) reasonable modifications and 35.150(a) program access, verified as a legal duty, not an outcome framework; whether to cite it (and move A2.4 from codebook-defined to adapted) is left to Severin. Section 504 at 34 CFR 104.4 does not cover program access (104.21-22 unchecked)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Reach & engagement systems",
        "description": "How many people the program reaches and how much they receive, and the program's systems for engaging families.",
        "codes": [
          {
            "id": "A2.5",
            "name": "Participation, Dosage & Reach (Output)",
            "short": "Participation & reach (output)",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "11.5",
            "definition": "Program-level counts, rates and dosage: youth served, attendance rates, sessions, match length, training hours, and services staff delivered.",
            "include": "Number served; average daily attendance; per-person attendance thresholds (sessions, workshops); match duration; sessions delivered; applications submitted by staff.",
            "exclude": "An individual youth's choice to return; a student's school attendance.",
            "useInstead": "Y2.6; Y1.13.",
            "example": {
              "text": "The program will serve 300 youth across four sites.",
              "goldId": "S238"
            },
            "source": "University of Wisconsin-Madison Extension (2020), logic model (Outputs); Weiss, Little & Bouffard (2005).",
            "basis": "UW-Madison Extension (2020) logic model, Outputs (verified); Weiss, Little & Bouffard (2005) (located)."
          },
          {
            "id": "A2.6",
            "name": "Family Engagement Systems",
            "short": "Family engagement systems",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "11.4",
            "definition": "The organization's systems, events or policies for engaging families.",
            "include": "Creating a parent advisory council; family engagement policies; family events offered.",
            "exclude": "Parents serving on the council; interpretation services.",
            "useInstead": "F1.9; A2.4.",
            "example": {
              "text": "The program will establish a Parent Advisory Council."
            },
            "source": "Mapp & Kuttner (2013), Dual Capacity-Building Framework (organizational capacity); Epstein, Types 3 and 6.",
            "basis": "Epstein Types 3 and 6 (located); Mapp & Kuttner (2013) organizational capacity (verified)."
          }
        ]
      }
    ]
  },
  {
    "id": "A3",
    "part": "A",
    "name": "Systems, Policy & Community Conditions",
    "description": "Change beyond one program: policy and institutions, cross-sector partnerships, and community conditions.",
    "frameworkBasis": "Coffman (2009) and Reisman, Gienapp & Stachowiak (2007), policy change outcomes; Kania & Kramer (2011), Collective Impact; Sampson, Raudenbush & Earls (1997), collective efficacy.",
    "categoryLine": "A. Policy & institutions (A3.1) · B. Partnerships & community (A3.2–A3.3)",
    "categories": [
      {
        "letter": "A",
        "name": "Policy & institutions",
        "description": "Changes in policy, funding or institutional practice in schools, districts, cities or states.",
        "codes": [
          {
            "id": "A3.1",
            "name": "Policy & Institutional Change",
            "short": "Policy & institutional change",
            "flag": "hybrid",
            "fidelity": "framework",
            "from2x": "11.3",
            "definition": "Changes to policy, funding or institutional practice in schools, districts, cities or states.",
            "include": "New ordinances; district policies; dedicated budget funding.",
            "exclude": "Partnerships and data sharing; program quality.",
            "useInstead": "A3.2; A2.1.",
            "example": {
              "text": "The school district will adopt a policy guaranteeing afterschool transportation for all students.",
              "goldId": "S101"
            },
            "source": "Coffman (2009), A User's Guide to Advocacy Evaluation Planning (policy goals); Reisman, Gienapp & Stachowiak (2007), A Guide to Measuring Advocacy and Policy (improved policies).",
            "basis": "Re-verified 2026-09-27 (CP-10-02): Coffman (2009), HFRP, policy goals: development, adoption, implementation, maintenance (verified, direct, from a full copy hosted by County Health Rankings); Reisman, Gienapp & Stachowiak (2007), AECF, improved policies (verified, direct). Now Framework; FD-P20 closed."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Partnerships & community",
        "description": "Change across organizations and neighborhoods: cross-sector partnerships and community cohesion and collective efficacy.",
        "codes": [
          {
            "id": "A3.2",
            "name": "Cross-Sector Partnerships",
            "short": "Partnerships",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new (part of 11.3)",
            "definition": "Shared agendas, shared measurement and coordinated partnerships across organizations and sectors.",
            "include": "Data-sharing agreements; shared data systems; coalition collaboration.",
            "exclude": "Policy adoption.",
            "useInstead": "A3.1.",
            "example": {
              "text": "The coalition will establish a shared data system across five youth-serving agencies.",
              "goldId": "S195"
            },
            "source": "Reisman, Gienapp & Stachowiak (2007), A Guide to Measuring Advocacy and Policy (strengthened alliances); Kania & Kramer (2011), Collective Impact (shared agenda and shared measurement).",
            "basis": "Reisman, Gienapp & Stachowiak (2007), outcome category strengthened alliances (verified, direct; claim a3-01, CP-12-12); Coffman (2009), partnerships or alliances (verified, partial: advocacy framing; claim a3-02, registry only); Kania & Kramer (2011), Collective Impact (verified, direct for shared agenda and shared measurement)."
          },
          {
            "id": "A3.3",
            "name": "Community Conditions & Collective Efficacy",
            "short": "Collective efficacy",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Neighborhood cohesion, trust and willingness to act for the common good.",
            "include": "Residents' trust; willingness to intervene for youth safety.",
            "exclude": "Individual youth's felt safety.",
            "useInstead": "Y8.10.",
            "example": {
              "text": "Neighborhood residents will report increased trust in one another and willingness to intervene for youth safety.",
              "goldId": "S154"
            },
            "source": "Sampson, Raudenbush & Earls (1997), collective efficacy.",
            "basis": "Sampson, Raudenbush & Earls (1997), collective efficacy (verified, direct, on the PubMed record; claim a3-03, CP-12-12)."
          }
        ]
      }
    ]
  }
];
