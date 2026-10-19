# Search log: searcher E (Philadelphia, Pennsylvania, Pennsylvania measures)

Date of all searches: 2026-10-18. Output: `candidates_E.csv` (60 rows, E-001 to E-060). Every row is a lead. Rows marked "Fetched" in `effect_as_reported` were read by searcher E from the source itself. All others come from an ERIC abstract, a search-engine summary, or memory ("lead"). Independent verification is still required.

## Scope

Studies set in Philadelphia or Pennsylvania, plus studies that use Pennsylvania measures: PSSA, Keystone, NOCTI/industry certification, and Pennsylvania attendance and truancy definitions.

## 1. ERIC API (`api.ies.ed.gov/eric`, rows=200, fields as in the protocol)

| Query tag | Query | Hits | Retrieved |
|---|---|---|---|
| phl_att | Philadelphia AND (attendance OR absenteeism OR truancy) | 143 | 143 |
| phl_afterschool | Philadelphia AND ("after school" OR afterschool OR "out-of-school time" OR "out of school time") | 52 | 52 |
| phl_dropout | Philadelphia AND (dropout OR graduation OR "on track") | 154 | 154 |
| phl_mentor | Philadelphia AND (mentoring OR mentor) | 30 | 30 |
| phl_summer | Philadelphia AND summer | 115 | 115 |
| phl_rct | Philadelphia AND (randomized OR experiment OR "quasi-experimental" OR "regression discontinuity") | 61 | 61 |
| pa_21 | "21st Century Community Learning Centers" AND Pennsylvania | 1 | 1 |
| pssa | PSSA OR "Pennsylvania System of School Assessment" | 139 | 139 |
| keystone | "Keystone Exam" OR "Keystone Exams" OR "Keystone Algebra" | 10 | 10 |
| nocti | NOCTI OR ("industry certification" AND Pennsylvania) OR ("career and technical" AND Pennsylvania) | 96 | 96 |
| pa_truancy | Pennsylvania AND (truancy OR "chronic absenteeism" OR attendance) | 242 | 200 |
| phl_tutor | Philadelphia AND (tutoring OR tutor OR literacy OR reading) | 536 | 200 |
| phl_community | Philadelphia AND ("community schools" OR "community school") | 27 | 27 |
| phl_family | Philadelphia AND (parent OR family) AND (achievement OR attendance) | 107 | 107 |
| phl_math | Philadelphia AND (mathematics OR math) AND (program OR intervention) | 152 | 152 |
| phl_college | Philadelphia AND (college access OR "college access" OR "Philadelphia Futures" OR scholarship) | 678 | 200 |
| phl_cte | Philadelphia AND ("career and technical" OR vocational OR "career academy" OR "career academies") | 166 | 166 |
| phl_health | Philadelphia AND (health OR asthma OR nutrition OR vision OR meals) AND school | 169 | 169 |
| pa_afterschool | Pennsylvania AND ("after school" OR afterschool OR "out-of-school") | 98 | 98 |
| phl_arts | Philadelphia AND (arts OR music OR theater) AND students | 96 | 96 |

- After deduplication: 1,679 unique records, of which 1,031 were from 1990 onward.
- Each record was scored on three things: location (Philadelphia, Pennsylvania, PSSA or Keystone), an indicator-type outcome, and a design keyword.
- All 302 records scoring 3 of 3 were screened by title. About 260 records scoring 2 of 3 that named Philadelphia or Pennsylvania plus a program or evaluation term were also screened by title.
- About 75 abstracts were read in full.
- Kept from ERIC: about 40 rows.
- Note: four of the queries hit the 200-row cap (pa_truancy, phl_tutor, phl_college, phl_cte). Their remaining hits were not retrieved. phl_college is mostly community-college and university records. phl_tutor is mostly adult literacy. A second pass with year filters would close this gap.

Main reasons for exclusion from ERIC:
- Postsecondary or adult education: Community College of Philadelphia, GED, adult ESL. This was the largest group.
- Descriptive, policy or historical pieces with no outcome.
- Outcome not an indicator: college enrollment, self-report, or teacher perceptions.
- Single-school dissertations with no comparison group: many PSSA "impact of X software" studies (Study Island, Reflex Math, READ 180, block scheduling).
- Psychometric studies that link the PSSA to MAP, DIBELS or CDT. These are kept in mind as measure references but not listed.
- Not in the United States (for example, the Ugandan "PSSA" program).

## 2. School District of Philadelphia Office of Research and Evaluation (philasd.org/research, WordPress API)

- Queries: attendance (42 posts), out-of-school (0), afterschool (0), 21st century (3), evaluation (100, capped), community schools (20), tutoring (4), summer (31), mentoring (0), career and technical (19), keystone (11), dropout (2), on track (37), literacy (34), math (53), impact (24).
- 242 unique posts; about 100 program or outcome titles screened.
- Fetched and read: 6 PDFs and about 15 post summaries.
  - PDFs: Playworks Year 2, the AARP Experience Corps summary, the kindergarten attendance brief, the 9th-grade attendance brief, CTE 2015, and the 21st CCLC Cohort 5.
  - Post summaries: ELS report 4, PBIS five-year, Star summer 2021, APTT, City Year Year 1, and others.
- Kept: 12 rows.
- Excluded: survey-only reports (teacher evaluation surveys, CTE graduate follow-up surveys, senior exit surveys), implementation-only reports (Literacy and Learning Centers, QTEL, Second Step strategies), and descriptive PSSA or Keystone trend reports.

## 3. Pennsylvania Department of Education: 21st CCLC state evaluations

- Found the state evaluation reports for 2020-21, 2021-22, 2022-23 and 2023-24 (pa.gov and education.pa.gov URLs are in the E-001 notes).
- Fetched and read the 2023-24 report: Student Outcomes section and attendance section.
- The design is descriptive change by hour band, with no comparison group. It is kept as E-001, tier "below bar". The attendance "improvement" figure is restricted to students at or below 90% attendance in the prior year, so it is open to regression to the mean.
- Local Pennsylvania grantee evaluations exist (for example, the Private Industry Council of Westmoreland/Fayette). They use the same template and were not listed.

## 4. Research for Action / Philadelphia Education Research Consortium

- RFA WordPress search API: attendance (9), out-of-school (29), 21st Century (3), mentoring (2), community schools (31), dropout (1), summer (6), career and technical (7), impact (54).
- Most hits are news posts or briefs. RFA's research reports are better indexed in ERIC (section 1), and the kept RFA/PERC items come from there.
- Community Schools evaluations: the Year 1 report (2018) is implementation-only. No later report with an attendance comparison was found. This is flagged as a gap: a second searcher should check RFA's Community Schools reports for years 2 to 5 directly.
- RFA citywide 21st CCLC reports (2014, 2015) were found and added to the notes of E-002.
- The RFA Joyful Readers tutoring evaluation was found only as an advocacy summary: about 8 percentile points gained, comparison design unknown. It was not listed. It is a lead for a checker.

## 5. Web search (WebSearch tool; DuckDuckGo HTML blocked by a captcha)

25 queries were run, on these topics:
- the Pennsylvania 21st CCLC state evaluation
- WorkReady summer jobs
- Sponsor-A-Scholar / Philadelphia Futures
- Philadelphia Community Schools (twice)
- school closures
- Connect-Text
- breakfast in the classroom
- Philadelphia asthma
- City Year
- Philadelphia CTE
- Pre-K Counts
- the Philadelphia Renaissance initiative
- Pennsylvania CTE and NOCTI quasi-experimental studies
- Gottfried's absence studies
- high-dosage tutoring in the district
- PHLConnectED
- school mental health (twice)
- E3 Power Centers
- Experience Corps
- teacher absence
- Keystone and dropout
- mentoring trials
- out-of-school time outcomes
- sports-based youth development (SquashSmarts, PYSC)
- the Netter Center
- vision programs
- Fantuzzo's KIDS data
- PROSPER
- kindergarten attendance
- restorative practices in Pittsburgh
- Head Start REDI
- the Talent Development middle school model
- the Children's Literacy Initiative i3 trial
- the Pittsburgh Promise
- Check & Connect

Each query returned about 10 results, all screened. About 18 rows were kept.

Searches that found no study meeting even the descriptive bar with an indicator outcome (recorded so they are not repeated):
- WorkReady results paper: the J-PAL page lists the trial (already in the map as L-71/L-72), but no attendance or graduation results were located.
- Philadelphia Community Schools: no attendance-impact report.
- Philadelphia truancy court: no rigorous evaluation. A Juvenile Court Judges' Commission newsletter reports program self-data only.
- PHLConnectED: no attendance evaluation.
- Netter Center university-assisted community schools: no outcome evaluation.
- Philadelphia Youth Sports Collaborative and SquashSmarts: self-reported figures only.
- Wills Eye and other Philadelphia vision programs: no academic outcome study. The Baltimore trial is already in the map.
- Pre-K Counts: evaluations stop at kindergarten.
- Keystone graduation requirement and dropout: no causal study.
- Teacher attendance (indicator 2) in Philadelphia: advocacy reports only (Philadelphia School Partnership; Excellent Schools PA). No study links a program to teacher attendance.
- E3 Power Centers: no outcome evaluation.
- Mighty Writers: not searched separately. No hits in the ERIC Philadelphia literacy queries.

## 6. PubMed E-utilities

- Query 1: Philadelphia[tiab] AND (school absence OR absenteeism OR school attendance OR missed school). 7 hits, 2 relevant: Rappaport et al. 2011, kept as E-016; and Murphy et al. 1998, noted under E-043.
- Query 2: (Pennsylvania OR Pittsburgh) AND absenteeism AND (intervention OR program OR trial). 32 hits, none relevant (mostly workplace absenteeism).

## 7. Semantic Scholar and Crossref

Semantic Scholar returned HTTP 429 (rate limited) on every attempt, so no citation chasing was done through it. Crossref was reachable, but there was no time to run forward-citation chasing. This is a gap: forward chasing from Rogers & Feller (2018), Neild et al. (2015) and Kemple et al. (2005) is still to do.

## Totals

- About 2,200 records screened by title across all sources; about 130 abstracts or summaries read; 11 sources fetched and read in full or in part.
- 60 candidates kept: 23 proposed "tested", 10 "research-associated", 23 "below bar", 4 "exclude".
- Kept for what-not-to-claim: 9 null and 11 negative-direction rows. Most of the negative-direction rows are associations of absence with achievement, which support the map's existing Y1.13 links.
- 7 rows are already in the map, or are another report of a study in the map.
- 1 row (E-058, Check & Connect) is outside E's geography. It is passed on to the mentoring searcher.

## Known gaps for the next pass

1. Four ERIC queries hit the 200-row cap. Re-run them split by year.
2. The RFA Community Schools reports for years 2 to 5 and the full RFA 21st CCLC citywide reports. Fetch them and check whether any model adjusts for prior attendance.
3. The full Mathematica Sponsor-A-Scholar report and the WorkReady results paper, if released.
4. CAPP trial NCT00005715: whether school absence results were ever published.
5. Forward citation chasing, once Semantic Scholar is reachable.
