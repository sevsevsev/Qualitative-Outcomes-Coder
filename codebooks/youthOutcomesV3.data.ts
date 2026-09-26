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
    "frameworkBasis": "ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse.",
    "categoryLine": "A. Subject learning (Y1.1–Y1.8) · B. Learning behaviors & mindsets (Y1.9–Y1.12) · C. Educational progress & attainment (Y1.13–Y1.18)",
    "categories": [
      {
        "letter": "A",
        "name": "Subject learning",
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
            "basis": "ESSA 20 U.S.C. 6311(b)(1)(C) (verified); National Reading Panel (2000) (located); Common Core CCR Anchor Standards for Writing (verified)."
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
            "source": "WIDA English Language Development Standards Framework (2020 edition).",
            "basis": "WIDA English Language Development Standards Framework, 2020 ed. (located)."
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
            "definition": "A demonstrated gain in science (life, physical, earth, environmental), engineering design, or computing and coding, including digital-literacy skills.",
            "include": "Science test proficiency; ecosystem or ecology knowledge; engineering design process; coding, computational thinking, digital skills.",
            "exclude": "STEM interest; STEM identity; online safety; industry certifications; advanced course enrollment.",
            "useInstead": "Y2.2/Y2.3 interest; Y5.3 'a STEM person'; Y6.7 online safety; Y7.4 certifications; Y1.16 enrolling in advanced STEM courses.",
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
            "basis": "NAMLE, Core Principles of Media Literacy Education (verified); Conley, Key Cognitive Strategies (located)."
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
            "basis": "Head Start ELOF (2015), Language & Literacy and Cognition (located). Early-childhood-specific by necessity: the construct is about young children."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Learning behaviors & mindsets",
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
            "fidelity": "framework",
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
            "basis": "Farrington et al. (2012), Academic Perseverance (verified); Head Start ELOF Approaches to Learning (located) for young children."
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
            "useInstead": "Y5.4 general confidence and general growth mindset. CP-01-06 (in flight) sets the same line for 2.4.0.",
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
        "codes": [
          {
            "id": "Y1.13",
            "name": "Attendance & School Stability",
            "short": "Attendance & school stability",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "1.5",
            "definition": "A student's school attendance, chronic absence, or staying enrolled in school through disruption (homelessness, foster placement changes, pregnancy).",
            "include": "Attendance rates for participating students; chronic absenteeism; remaining enrolled or in the school of origin.",
            "exclude": "Program attendance or dosage; re-enrolling after dropping out.",
            "useInstead": "A2.5 program attendance; Y1.17 re-engagement after leaving school.",
            "example": {
              "text": "Participating students will reduce chronic absenteeism from school.",
              "goldId": "S233"
            },
            "source": "Attendance Works, chronic absence; McKinney-Vento Act, 42 U.S.C. 11432 (school stability).",
            "basis": "Attendance Works, chronic absence (verified); McKinney-Vento, 42 U.S.C. 11432 (located)."
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
            "fidelity": "framework",
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
            "basis": "Allensworth & Easton (2005) On-Track Indicator (located); Allensworth & Easton (2007) grades (verified)."
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
            "source": "U.S. Department of Education, Office for Civil Rights (2024), Civil Rights Data Collection: student access to advanced courses, including AP and dual enrollment.",
            "basis": "U.S. ED OCR (2024), 2020-21 CRDC: Student Access to and Enrollment in ... Courses and Academic Programs, AP and dual enrollment (verified, appendix A R04)."
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
            "source": "ESSA four-year adjusted cohort graduation rate, 20 U.S.C. 6311(c)(4)(B).",
            "basis": "ESSA four-year adjusted cohort graduation rate, 20 U.S.C. 6311(c)(4)(B) (located)."
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
    "frameworkBasis": "Hidi & Renninger (2006), Four-Phase Model of Interest Development; Muhammad, Five Pursuits (Joy); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time).",
    "categoryLine": "A. Enjoyment & interest (Y2.1–Y2.4) · B. Expression & participation (Y2.5–Y2.6)",
    "categories": [
      {
        "letter": "A",
        "name": "Enjoyment & interest",
        "codes": [
          {
            "id": "Y2.1",
            "name": "Enjoyment & Joy",
            "short": "Enjoyment",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "2.1",
            "definition": "A positive emotional experience of the program or of learning: fun, happiness, excitement, pride in being part of it.",
            "include": "Reports of enjoying activities; excitement to attend; pride in the program.",
            "exclude": "General life satisfaction or flourishing; feeling safe or accepted.",
            "useInstead": "Y8.7 life satisfaction; Y3.1 belonging.",
            "example": {
              "text": "Youth will report feeling excited and happy to attend program each day.",
              "goldId": "S234"
            },
            "source": "Muhammad, Five Pursuits (Pursuit 5: Joy).",
            "basis": "Muhammad, Five Pursuits, Joy (verified)."
          },
          {
            "id": "Y2.2",
            "name": "Curiosity & Triggered Interest",
            "short": "Curiosity",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "2.2",
            "definition": "Interest sparked in the moment: curiosity, asking questions about something new, willingness to try a new activity.",
            "include": "Asking questions during a demonstration; trying new activities; showing curiosity.",
            "exclude": "Interest that lasts or is pursued beyond the program; general confidence to take on challenges.",
            "useInstead": "Y2.3 sustained interest; Y5.4 confidence.",
            "example": {
              "text": "Students will ask questions and show curiosity during science demonstrations.",
              "goldId": "S128"
            },
            "source": "Hidi & Renninger (2006), Four-Phase Model of Interest Development, phase 1 (triggered situational interest).",
            "basis": "Hidi & Renninger (2006), phase 1 triggered situational interest (verified)."
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
            "basis": "Hidi & Renninger (2006), phases 2-4 (verified)."
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
            "source": "Eccles and colleagues, expectancy-value theory (utility value).",
            "basis": "Wigfield & Eccles (2000), utility value: 'how a task fits into an individual's future plans' (partial; appendix A R05)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Expression & participation",
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
            "include": "Composing, creating, exhibiting, performing, critiquing or connecting art to personal meaning.",
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
            "include": "Returning for another year; joining a team or club; participating fully alongside peers; per-person participation thresholds.",
            "exclude": "Aggregate program attendance, counts or rates; the program's accommodations.",
            "useInstead": "A2.5 program-level counts; A2.4 accommodations.",
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
    "frameworkBasis": "Search Institute Developmental Relationships Framework; CDC (2009) School Connectedness; Search Institute Developmental Assets (Support); Education-to-Workforce Indicator Framework (social capital).",
    "categoryLine": "A. Connectedness (Y3.1) · B. Close relationships (Y3.2–Y3.4) · C. Networks (Y3.5)",
    "categories": [
      {
        "letter": "A",
        "name": "Connectedness",
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
            "useInstead": "Y8.10 general felt safety; Y8.8 trauma recovery; Y3.2 a trusted adult; Y3.3 friends. Follows the safety tie-breaker being tested in PR #31.",
            "example": {
              "text": "Students will feel safe and accepted at the program.",
              "goldId": "S163"
            },
            "source": "CDC (2009), School Connectedness.",
            "basis": "CDC (2009) School Connectedness (verified)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Close relationships",
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
            "source": "Search Institute, Developmental Relationships Framework (Express Care; Challenge Growth; Provide Support); CDC (2009), School Connectedness (adult support).",
            "basis": "Search Institute Developmental Relationships (Express Care; Challenge Growth; Provide Support) (verified); CDC (2009) (verified)."
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
            "basis": "Chafee, 42 U.S.C. 677 / ACF NYTD 'positive connections' (verified for adult connections); Butts, Bazemore & Meroe (2010) relationships domain (partial). Hybrid: no source names family reunification as a youth outcome on its own. Re-review 2026-09-26 (STANDARDS S4.9): Search Institute Developmental Assets, Support assets 1-2 (content verified; publication year unconfirmed) and Developmental Relationships with parents (verified). Now Framework; FD-P17 closed."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Networks",
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
            "basis": "Mathematica (2022), Education-to-Workforce Indicator Framework, social capital (verified); Developmental Relationships, Expand Possibilities (partial, secondary)."
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
    "frameworkBasis": "CASEL (2020) SEL Framework: the five competencies are this domain's categories.",
    "categoryLine": "A. Self-awareness (Y4.1) · B. Self-management (Y4.2–Y4.3) · C. Social awareness (Y4.4–Y4.5) · D. Relationship skills (Y4.6–Y4.9) · E. Responsible decision-making (Y4.10–Y4.12)",
    "categories": [
      {
        "letter": "A",
        "name": "Self-awareness",
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
            "basis": "CASEL (2020) SEL Framework (verified), Self-Management: 'Managing one's emotions'; 'Identifying and using stress-management strategies'."
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
        "codes": [
          {
            "id": "Y4.4",
            "name": "Empathy, Perspective-Taking & Social Awareness",
            "short": "Empathy & social awareness",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P04",
            "from2x": "4.3.1, 4.3.3",
            "definition": "Understanding and caring about others' feelings and perspectives, expressing gratitude, and reading social norms and expectations in different settings.",
            "include": "Perspective-taking; compassion; gratitude; understanding expectations in class, online and community settings.",
            "exclude": "Respect for people of other backgrounds; listening as a behavior.",
            "useInstead": "Y4.5 respect for diversity; Y4.6 communication.",
            "example": {
              "text": "Youth will express gratitude toward family and mentors.",
              "goldId": "S082"
            },
            "source": "CASEL (2020) SEL Framework, Social Awareness: \"Taking others' perspectives\"; \"Demonstrating empathy and compassion\"; \"Identifying diverse social norms, including unjust ones\".",
            "basis": "CASEL (2020) SEL Framework (verified), Social Awareness: 'Taking others' perspectives'; 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones' (registry). 'Understanding and expressing gratitude' is cited in CP-01-06's source table but is not yet a registry support entry."
          },
          {
            "id": "Y4.5",
            "name": "Respect for Diversity & Cultural Competence",
            "short": "Respect for diversity",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "4.3.2",
            "definition": "Respecting and including people of different backgrounds and identities, and examining one's own biases.",
            "include": "Respect for peers of other cultures, religions, abilities; inclusive behavior; bias awareness.",
            "exclude": "Pride in one's own identity; friendships across groups.",
            "useInstead": "Y5.2 own identity; Y3.3 friendships.",
            "example": {
              "text": "Students will demonstrate respect for peers from different cultures and identities."
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Demonstrating cultural competency\"; Self-Awareness: \"Examining prejudices and biases\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Demonstrating cultural competency'; Self-Awareness: 'Examining prejudices and biases'."
          }
        ]
      },
      {
        "letter": "D",
        "name": "Relationship skills",
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
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Communicating effectively\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Communicating effectively'."
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
            "useInstead": "Y6.4 civic leadership; Y3.3 friendships; Y7.3 workplace. Same line as CP-01-06's leadership rule (in flight).",
            "example": {
              "text": "Youth will learn to work as part of a team to achieve a common goal.",
              "goldId": "S054"
            },
            "source": "CASEL (2020) SEL Framework, Relationship Skills: \"Practicing teamwork and collaborative problem-solving\".",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Practicing teamwork and collaborative problem-solving'; 'Showing leadership in groups' (the second is cited in CP-01-06's source table, not yet a registry support entry)."
          },
          {
            "id": "Y4.8",
            "name": "Relationship-Building & Conflict Resolution",
            "short": "Relationships & conflict resolution",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P05",
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
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Developing positive relationships'; 'Resolving conflicts constructively'."
          },
          {
            "id": "Y4.9",
            "name": "Help-Seeking & Offering Support",
            "short": "Help-seeking",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P06",
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
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Seeking or offering support and help when needed'. Absorbs 2.4.0's 4.3.4, which had no source."
          }
        ]
      },
      {
        "letter": "E",
        "name": "Responsible decision-making",
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
            "fidelity": "adapted",
            "deviation": "FD-P08",
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
            "basis": "CASEL (2020) SEL Framework (verified), Responsible Decision-Making: 'Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being' (registry supports for 4.5.2 and 4.5.5)."
          },
          {
            "id": "Y4.12",
            "name": "Risk Avoidance & Refusal Skills",
            "short": "Risk avoidance & refusal",
            "flag": "deductive",
            "fidelity": "codebook-defined",
            "deviation": "FD-P09",
            "from2x": "4.5.4",
            "definition": "Avoiding unsafe situations and resisting negative peer pressure.",
            "include": "Refusal skills; leaving unsafe situations; resisting pressure to use substances.",
            "exclude": "An actual change in substance use or violence; safety knowledge such as first aid.",
            "useInstead": "Y8.11/Y8.12 for incidence; Y8.3 safety knowledge.",
            "example": {
              "text": "Youth will develop skills to resist peer pressure and avoid risky behaviors.",
              "goldId": "S172"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "CASEL (2020) SEL Framework (verified), Relationship Skills: 'Resisting negative social pressure' (cited in CP-01-06's source table, in flight; not yet a registry support entry). Would end 4.5.4's extension status."
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
    "frameworkBasis": "Nagaoka et al. (2015), Foundations for Young Adult Success (agency, integrated identity, mindsets); Search Institute Developmental Assets (Positive Identity); Learning for Justice Social Justice Standards (Identity).",
    "categoryLine": "A. Identity (Y5.1–Y5.3) · B. Self-beliefs (Y5.4) · C. Purpose & agency (Y5.5–Y5.6)",
    "categories": [
      {
        "letter": "A",
        "name": "Identity",
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
            "exclude": "Pride in a cultural or social identity; self-confidence; purpose.",
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
            "definition": "Pride in, and acceptance of, one's own cultural, ethnic, linguistic, gender, sexual or other social identity.",
            "include": "Pride in heritage; self-acceptance of sexual orientation or gender identity; bicultural identity.",
            "exclude": "Respect for others' identities; home-language skill.",
            "useInstead": "Y4.5; Y1.2.",
            "example": {
              "text": "Youth will report greater self-acceptance of their sexual orientation and gender identity.",
              "goldId": "S129"
            },
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (race/ethnicity, culture); Learning for Justice, Social Justice Standards (Identity); Muhammad, Five Pursuits (Pursuit 1: Identity).",
            "basis": "Learning for Justice Social Justice Standards, Identity (verified); Muhammad, Pursuit 1 Identity (verified). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names race/ethnicity and culture (verified)."
          },
          {
            "id": "Y5.3",
            "name": "Domain Identity",
            "short": "Domain identity",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Seeing oneself as a certain kind of person in a field: 'a STEM person', an artist, an athlete, a reader, a writer.",
            "include": "'See themselves as' statements tied to a field.",
            "exclude": "Loving an activity; career interest.",
            "useInstead": "Y2.3 'I love doing ___'; Y7.1 career interest.",
            "example": {
              "text": "Girls in the program will increasingly see themselves as 'a STEM person.'",
              "goldId": "S036"
            },
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (including profession).",
            "basis": "Carlone & Johnson (2007), science identity: competence, performance, recognition (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names profession among social identities (verified)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Self-beliefs",
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
            "basis": "CASEL (2020) SEL Framework (verified), Self-Awareness: 'Experiencing self-efficacy'; 'Having a growth mindset'; 'Identifying personal, cultural, and linguistic assets'; Search Institute Positive Identity, Self-esteem (located). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) mindsets (verified for beliefs about oneself; the report does not name growth mindset). Search Institute self-esteem asset content verified. FD-P11 closed."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Purpose & agency",
        "codes": [
          {
            "id": "Y5.5",
            "name": "Purpose & Future Orientation",
            "short": "Purpose & future orientation",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P12",
            "from2x": "6.4",
            "definition": "A sense of purpose and meaning, optimism about the future, and aspirations, including spiritual purpose and growth in faith.",
            "include": "Sense of purpose; hopes and goals for life; growth in faith or spiritual life.",
            "exclude": "Faith-grounded values (Y6.1); belonging to a faith community (Y3.1); career aspirations (Y7.1).",
            "useInstead": "Y6.1; Y3.1; Y7.1.",
            "example": {
              "text": "Youth will develop a sense of purpose for their lives.",
              "goldId": "S250"
            },
            "source": "Search Institute, Developmental Assets Framework, Positive Identity (Sense of purpose; Positive view of personal future).",
            "basis": "Search Institute Positive Identity, Sense of purpose; Positive view of personal future (located). Re-review 2026-09-26 (STANDARDS S4.9): Search Institute sense of purpose and positive view of future assets (content verified). Nagaoka does not support purpose (verifier: unsupported)."
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
            "source": "Nagaoka et al. (2015), Foundations for Young Adult Success, key outcome: agency; Search Institute, Developmental Assets Framework, Positive Identity (Personal power).",
            "basis": "Shogren, Wehmeyer et al. (2015), Causal Agency Theory (partial); Search Institute Personal Power (located); Nagaoka et al. (2015) agency (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) agency (verified); Search Institute personal power asset (content verified)."
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
    "frameworkBasis": "Search Institute Developmental Assets (Positive Values); NCSS (2013) C3 Framework (Civics); Muhammad, Five Pursuits (Criticality); NAAEE (2019) Guidelines for Excellence; ISTE Standards for Students (Digital Citizen).",
    "categoryLine": "A. Character (Y6.1) · B. Civic understanding (Y6.2–Y6.3) · C. Civic action (Y6.4–Y6.6) · D. Digital citizenship (Y6.7)",
    "categories": [
      {
        "letter": "A",
        "name": "Character",
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
            "source": "Search Institute, 40 Developmental Assets, Positive Values.",
            "basis": "Search Institute 40 Developmental Assets, Positive Values (located); Lerner et al. (2005), Character (partial)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Civic understanding",
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
            "source": "Muhammad, Five Pursuits (Pursuit 4: Criticality).",
            "basis": "Muhammad, Five Pursuits, Pursuit 4 Criticality (verified). No measurement framework in the records [VERIFY before adding one]."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Civic action",
        "codes": [
          {
            "id": "Y6.4",
            "name": "Civic Voice, Leadership & Participation",
            "short": "Civic voice & participation",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P13",
            "from2x": "7.3",
            "definition": "Influencing collective decisions and taking part in civic life: youth councils, testimony, advocacy, co-design, organizing, voting, and civic efficacy.",
            "include": "Presenting to a city council; youth advisory boards; organizing campaigns; registering and voting; believing one can influence community decisions.",
            "exclude": "Leading peers within a group task; one's own IEP or personal choices.",
            "useInstead": "Y4.7; Y5.6.",
            "example": {
              "text": "Youth organizers will present testimony to the city council on a policy issue affecting their neighborhood.",
              "goldId": "S136"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "NCSS (2013) C3, Dimension 4 Taking Informed Action (partial: scope)."
          },
          {
            "id": "Y6.5",
            "name": "Community Service & Action",
            "short": "Community service & action",
            "flag": "deductive",
            "fidelity": "adapted",
            "deviation": "FD-P14",
            "from2x": "7.2",
            "definition": "Organized service or projects to improve the community, including identifying a community issue and planning action on it.",
            "include": "Service hours; service trips; food drives; community action plans.",
            "exclude": "Small daily help in the program; environmental action; civic advocacy aimed at decision-makers.",
            "useInstead": "Y4.11; Y6.6; Y6.4.",
            "example": {
              "text": "Youth will complete 20 hours of community service at local nonprofits.",
              "goldId": "S005"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "Lerner et al. (2005), Contribution (partial); NCSS C3 Dimension 4 (partial)."
          },
          {
            "id": "Y6.6",
            "name": "Environmental Stewardship",
            "short": "Environmental stewardship",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified; 'connection to nature' not covered)."
          }
        ]
      },
      {
        "letter": "D",
        "name": "Digital citizenship",
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
            "source": "ISTE Standards for Students (2016), Standard 2: Digital Citizen.",
            "basis": "ISTE Standards for Students (2016), Standard 2 Digital Citizen (verified)."
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
    "frameworkBasis": "Perkins V; WIOA performance indicators, 20 CFR 677.155; OCTAE Employability Skills Framework; CFPB Building Blocks and National Standards for Personal Financial Education; Conley, Four Keys; Chafee daily living skills.",
    "categoryLine": "A. Exploration & navigation (Y7.1–Y7.2) · B. Work readiness (Y7.3–Y7.4) · C. Employment & independence (Y7.5–Y7.7)",
    "categories": [
      {
        "letter": "A",
        "name": "Exploration & navigation",
        "codes": [
          {
            "id": "Y7.1",
            "name": "Career Awareness & Exploration",
            "short": "Career exploration",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.4",
            "definition": "Learning about careers and pathways, interest inventories, workplace and campus visits, and interest in or aspiration toward a career field.",
            "include": "Researching careers; exploring pathways; interest in a STEM career; college visits.",
            "exclude": "Applications and FAFSA; lasting interest in an activity.",
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
            "include": "FAFSA completion; college applications; comparing aid letters; resume writing.",
            "exclude": "Enrolment itself; employability behaviors on the job.",
            "useInstead": "Y1.18; Y7.3.",
            "example": {
              "text": "Seniors submitted the FAFSA and at least one college application by January 1.",
              "goldId": "H019"
            },
            "source": "Conley, Four Keys: Key Transition Knowledge & Skills.",
            "basis": "Conley, Key Transition Knowledge & Skills (located)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Work readiness",
        "codes": [
          {
            "id": "Y7.3",
            "name": "Employability & Workplace Skills",
            "short": "Employability skills",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "9.5",
            "definition": "Professionalism and workplace skills: punctuality, workplace communication, initiative, job performance.",
            "include": "Professional conduct; supervisor evaluations; workplace communication.",
            "exclude": "Having or keeping a job; general SEL skills outside a work context.",
            "useInstead": "Y7.5; Y4.",
            "example": {
              "text": "Youth will demonstrate punctuality, professional communication, and appropriate workplace attire.",
              "goldId": "S171"
            },
            "source": "U.S. Department of Education, OCTAE, Employability Skills Framework.",
            "basis": "U.S. ED OCTAE Employability Skills Framework (verified)."
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
            "source": "Perkins V; WIOA performance indicators, 20 CFR 677.155 (credential attainment).",
            "basis": "Perkins V (verified); WIOA 20 CFR 677.155, credential attainment (verified)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Employment & independence",
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
            "source": "WIOA performance indicators, 20 CFR 677.155.",
            "basis": "WIOA, 20 CFR 677.155 (verified)."
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
            "fidelity": "adapted",
            "deviation": "FD-P15",
            "from2x": "new",
            "definition": "Daily living skills for self-sufficiency: cooking, scheduling, transportation, self-care away from home, and obtaining vital documents.",
            "include": "Independent-living skill bundles; getting an ID, Social Security card and birth certificate; self-care at camp.",
            "exclude": "Money-only skills; own housing.",
            "useInstead": "Y7.6; F2.3.",
            "example": {
              "text": "Transition-age youth will obtain their birth certificate, Social Security card, and state ID before exiting care.",
              "goldId": "S120"
            },
            "source": "Chafee Foster Care Program for Successful Transition to Adulthood, 42 U.S.C. 677(a)(1) (daily living skills).",
            "basis": "Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified). Hybrid: scope widened beyond foster care."
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
        "codes": [
          {
            "id": "Y8.1",
            "name": "Healthy Daily Habits",
            "short": "Healthy daily habits",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "CDC/ASCD WSCC (verified); Healthy People 2030 SH-04 sleep (verified); CDC YRBS sleep item (verified 2025) and screen-time hours items (2021 and earlier only; partial)."
          },
          {
            "id": "Y8.2",
            "name": "Motor & Sport Skills",
            "short": "Motor & sport skills",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "SHAPE America (2024) National PE Standards, Standard 1 motor skills (verified)."
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
            "basis": "SHAPE America (2024) National Health Education Standards, Standard 1 (verified)."
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
            "basis": "National Sex Education Standards, 2nd ed. (2020) (verified); CDC YRBS (verified)."
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
            "basis": "Healthy People 2030 AH-01, AHS-01 (verified); ACF NYTD health insurance (verified)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Mental health",
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
            "basis": "NCTSN 12 Core Concepts (located)."
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
            "basis": "CDC WSCC, Counseling, Psychological, and Social Services (verified)."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Safety, risk & justice",
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
            "basis": "Search Institute 40 Developmental Assets, Safety (located; CP-01-07's use checked as partial)."
          },
          {
            "id": "Y8.11",
            "name": "Substance Use",
            "short": "Substance use",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "8.5",
            "definition": "Use, intentions or perceived risk of tobacco, vaping, alcohol or other drugs.",
            "include": "Reduced use; delayed first use; lower intentions; higher perceived risk; knowledge of risks.",
            "exclude": "Refusal skills; policy restricting access.",
            "useInstead": "Y4.12; A3.1.",
            "example": {
              "text": "Youth will report lower intentions to vape in the next year.",
              "goldId": "S065"
            },
            "source": "CDC Youth Risk Behavior Survey (tobacco, alcohol and other drug use); SAMHSA Strategic Prevention Framework.",
            "basis": "CDC YRBS (verified); SAMHSA Strategic Prevention Framework (located)."
          },
          {
            "id": "Y8.12",
            "name": "Violence, Bullying & Victimization",
            "short": "Violence & victimization",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "CDC YRBS (verified); CDC & U.S. ED (2014) bullying definitions (located)."
          },
          {
            "id": "Y8.13",
            "name": "Justice Involvement, Diversion & Reentry",
            "short": "Justice involvement",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "Harris, Lockwood & Mengers (2009), CJCA white paper (verified)."
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
    "frameworkBasis": "CSSP Strengthening Families Protective Factors; Ascend 2Gen Approach; Epstein's six types of involvement; Mapp & Kuttner (2013) Dual Capacity-Building Framework; MIECHV (F1.3 only).",
    "categoryLine": "A. Parenting & home learning (F1.1–F1.3) · B. Caregiver well-being & support (F1.4–F1.5) · C. Adult development & navigation (F1.6–F1.7) · D. Family-program partnership (F1.8–F1.9)",
    "categories": [
      {
        "letter": "A",
        "name": "Parenting & home learning",
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
            "basis": "CSSP Strengthening Families, Knowledge of Parenting and Child Development (verified); Epstein Type 1 (located)."
          },
          {
            "id": "F1.2",
            "name": "Home Learning Environment & Routines",
            "short": "Home learning",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "Epstein Type 4, Learning at Home (located)."
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
            "basis": "MIECHV performance measures (verified); Healthy People 2030 MICH-14, MICH-15 (verified). Kept by Severin's decision despite being early-childhood sources."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Caregiver well-being & support",
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
            "basis": "CSSP Strengthening Families, Parental Resilience (verified)."
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
        "codes": [
          {
            "id": "F1.6",
            "name": "Adult Education, Skills & Employment",
            "short": "Adult education & employment",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "Ascend 2Gen, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified)."
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
            "source": "IDEA, 20 U.S.C. 1471(b); CSSP Strengthening Families, Concrete Support in Times of Need; Mapp & Kuttner (2013), Dual Capacity-Building Framework.",
            "basis": "IDEA 20 U.S.C. 1471(b) (verified); CSSP Concrete Support in Times of Need (verified); Mapp & Kuttner (2013) (verified)."
          }
        ]
      },
      {
        "letter": "D",
        "name": "Family-program partnership",
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
            "basis": "Epstein Type 2, Communicating (located); Mapp & Kuttner (2013) (verified)."
          },
          {
            "id": "F1.9",
            "name": "Family Participation & Leadership",
            "short": "Family participation & leadership",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "Families attending, volunteering or taking part in program or school decisions.",
            "include": "Serving on advisory councils; attending workshops (per-family thresholds); volunteering.",
            "exclude": "Aggregate family attendance counts; the organization creating structures.",
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
    "description": "The material stability of a household or of a young person living independently: income and benefits, food, housing.",
    "frameworkBasis": "CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD.",
    "categoryLine": "A. Economic stability (F2.1) · B. Food & housing (F2.2–F2.3)",
    "categories": [
      {
        "letter": "A",
        "name": "Economic stability",
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
            "basis": "Ascend 2Gen Economic Assets (verified); CSSP Concrete Support (verified)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Food & housing",
        "codes": [
          {
            "id": "F2.2",
            "name": "Food Security",
            "short": "Food security",
            "flag": "deductive",
            "fidelity": "framework",
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
            "basis": "USDA ERS Household Food Security Survey Module (verified)."
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
            "basis": "McKinney-Vento (located); ACF NYTD (verified)."
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
    "frameworkBasis": "Learning Forward (2022) Standards for Professional Learning; U.S. Surgeon General (2022) Framework for Workplace Mental Health & Well-Being.",
    "categoryLine": "A. Staff learning & practice (A1.1–A1.2) · B. Workforce (A1.3)",
    "categories": [
      {
        "letter": "A",
        "name": "Staff learning & practice",
        "codes": [
          {
            "id": "A1.1",
            "name": "Staff & Volunteer Knowledge & Skills",
            "short": "Staff learning",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "11.1",
            "definition": "Staff, volunteers, mentors, coaches or case managers gaining knowledge or skills.",
            "include": "Training outcomes; staff confidence; volunteers' understanding.",
            "exclude": "Training hours completed (an output); applying the learning.",
            "useInstead": "A2.5; A1.2.",
            "example": {
              "text": "Coaches will report improved ability to de-escalate conflicts between players during games.",
              "goldId": "S142"
            },
            "source": "Learning Forward (2022), Standards for Professional Learning.",
            "basis": "Learning Forward (2022) (located)."
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
            "source": "Learning Forward (2022), Standards for Professional Learning; SAMHSA (2014), trauma-informed approach.",
            "basis": "Learning Forward (2022) (located); SAMHSA (2014) (located)."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Workforce",
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
            "exclude": "Participants' digital skills.",
            "useInstead": "Y1.4; F1.6.",
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
            "include": "Sensory kits and visual schedules; accessible materials; interpreters; home-language communications.",
            "exclude": "Youth participating alongside peers (their participation); families navigating systems.",
            "useInstead": "Y2.6; F1.7.",
            "example": {
              "text": "The program will provide accommodations (sensory kits, visual schedules) so all youth can participate.",
              "goldId": "S113"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "No verified source for accommodations in general [VERIFY: ADA Title II / Section 504 program access]; ED & DOJ (2015) LEP letter (partial; possible 2025 rescission [VERIFY])."
          }
        ]
      },
      {
        "letter": "C",
        "name": "Reach & engagement systems",
        "codes": [
          {
            "id": "A2.5",
            "name": "Participation, Dosage & Reach (Output)",
            "short": "Participation & reach (output)",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "11.5",
            "definition": "Program-level counts, rates and dosage: youth served, attendance rates, sessions, match length, training hours, and services staff delivered.",
            "include": "Number served; average daily attendance; match duration; sessions delivered; applications submitted by staff.",
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
    "frameworkBasis": "Kania & Kramer (2011), Collective Impact; Sampson, Raudenbush & Earls (1997), collective efficacy.",
    "categoryLine": "A. Policy & institutions (A3.1) · B. Partnerships & community (A3.2–A3.3)",
    "categories": [
      {
        "letter": "A",
        "name": "Policy & institutions",
        "codes": [
          {
            "id": "A3.1",
            "name": "Policy & Institutional Change",
            "short": "Policy & institutional change",
            "flag": "hybrid",
            "fidelity": "codebook-defined",
            "deviation": "FD-P20",
            "from2x": "11.3",
            "definition": "Changes to policy, funding or institutional practice in schools, districts, cities or states.",
            "include": "New ordinances; district policies; dedicated budget funding.",
            "exclude": "Partnerships and data sharing; program quality.",
            "useInstead": "A3.2; A2.1.",
            "example": {
              "text": "The school district will adopt a policy guaranteeing afterschool transportation for all students.",
              "goldId": "S101"
            },
            "source": "Codebook-defined; no verified source yet.",
            "basis": "No policy-change framework in the records [VERIFY before citing one]; Learning Forward (2022) systems (located). Hybrid."
          }
        ]
      },
      {
        "letter": "B",
        "name": "Partnerships & community",
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
            "source": "Kania & Kramer (2011), Collective Impact.",
            "basis": "Kania & Kramer (2011), Collective Impact (verified)."
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
            "basis": "Sampson, Raudenbush & Earls (1997) (verified)."
          }
        ]
      }
    ]
  }
];
