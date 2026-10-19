# Search log, searcher A: 21st CCLC and after-school / out-of-school time (2026-10-18)

Scope: federal 21st CCLC evaluations, state 21st CCLC evaluations, city and network after-school evaluations, after-school
meta-analyses and reviews. Endpoints: SPOTlight indicators only (attendance/chronic absence, dropout, graduation, state
tests, Keystone-type end-of-course exams). Every item in `candidates_A.csv` is a lead. Nothing here is verified. Effect text marked
"Fetched" was read by this searcher in the downloaded PDF or the ERIC abstract. Effect text marked "lead" comes from search-engine
summaries or from memory. The checkers must still fetch each source and record a verbatim excerpt.

## Totals

- ERIC API: 133 queries (130 listed in the table below plus 3 title queries), run 2026-10-18. Deduplicated pool: 2,243 records
  (1990 onward). One query, `title:"21st Century"`, returned 4,237 hits, almost all about "21st century skills", so it was
  dropped from the pool.
- Screening: a keyword prescreen (program term AND outcome term AND design term) picked 345 records, and all titles and
  abstracts were read by hand. A second hand pass covered 183 records with 21st CCLC, ACE, ASES, TASC, LA's BEST, Boys & Girls
  Clubs or AfterZone in the title or abstract, and about 60 new program-related records from the third query batch.
  About 590 records were screened by hand in all.
- Web (WebSearch, standard and extended modes): 33 searches on state agency sites, evaluator sites (AIR, PSA, Chapin Hall,
  CRESST, RFA, Westat, Abt, Mathematica) and program names.
- Full documents downloaded with curl and searched for comparison-group and attendance terms: 26 PDFs. These cover the Texas
  2014-17 and 2017-18 reports, the NJ 2016-17 and 2022-23 reports, WA 2012-14 and 2018-19, the RI 2011-12 brief and impact report,
  PA 2022-23, MI 2018-19, OH 2023-24, DC 2013, Philadelphia 21C-5 2012, CO 2021-22, FL 2023-24, IL FY24, KY 2023-24, the
  TX Westat brief, RFA 2014 and 2015, RFA Exito 2022, and Evans & Wolford 2014.
- Afterschool Alliance Afterschool Impacts Database (statewide listing, all pages scraped, 126 records): used as a catalog of
  state evaluations, so every state with a published report is listed.
- Citation chasing: Semantic Scholar citations endpoint (forward) for Kremer et al. 2015 (123 citing works), Durlak et al. 2010,
  Lauer et al. 2006 and Lester et al. 2020. Filtered by title to US outcome studies, then screened. Backward: the reference
  list of the AIR Texas 2014-17 report.
- Candidates written: 68 (`candidates_A.csv`). Of these, about 30 are design-confirmed or abstract-confirmed comparison-group
  or longitudinal studies, and the rest are leads that need design confirmation.

## Sources that failed or were blocked

- nysed.gov (New York 21st CCLC Round 6 summative report and Round 8 Year 3 statewide report): TLS error "unable to get local
  issuer certificate", also with the proxy CA bundle. The connection was also reset. Not fetched. Lead URLs:
  https://www.nysed.gov/sites/default/files/programs/student-support-services/21stcclc-round-6-summative-evaluation-report.pdf
  (it has an "Overall Results of the Attendance Analysis" section).
- new.wvde.us (West Virginia quasi-experimental impact studies 2013 and 2014): proxy CONNECT 502. ERIC full-text copies
  (ED569698, ED569910) were proposed in their place.
- azed.gov (Arizona 2021-22 SEA evaluation): the server returned an HTML page in place of the PDF.
- OpenAlex: not used (budget exhausted, per protocol).

## State 21st CCLC evaluations: state-by-state screen

Keep rule: a comparison group (matched, PSM or IPTW) or a longitudinal analysis adjusted for prior outcomes, with a school-day
attendance, chronic absence, test, dropout or graduation outcome. "Participant-only" means a GPRA-style share of participants who
improved, with no comparison group. These reports are excluded. A GPRA attendance measure (the percentage of students below 90%
attendance the prior year who improved) is also open to regression to the mean, so it cannot show a program effect.

| State | Report(s) checked | Design | Decision |
|---|---|---|---|
| Texas (ACE) | AIR 2014-17 (fetched), AIR 2017-18 (fetched), Westat 2018 brief (fetched), AIR Yr2 2013 and Yr5 2016 (cited), Austin ISD ACE annual reports (ERIC) | PSM | Kept (A-001 to A-004, A-040) |
| New Jersey | AIR Yr5 2016-17 impact (fetched), AIR 2022-23 dosage/attendance study (fetched), 2015-16 and 2023-24 (listed) | PSM / IPTW | Kept (A-005 to A-007) |
| Washington | AIR 2012-14 (fetched), AIR 2018-19 (fetched), 2023-24 (search) | PSM; 2018-19 had no impact data | Kept 2012-14 (A-008); 2018-19 logged (A-009) |
| Rhode Island | AIR 2011-12 impact report and brief (fetched), 2018-19 report (search) | propensity stratification | Kept (A-010, A-011) |
| West Virginia | WVDE QE 2013, 2014 (ERIC); 2015-16 descriptive and QE | PSM | Kept (A-012), null on tests |
| South Carolina | 2019-21 effectiveness report (Impacts DB summary); 2012-13 quantitative report (listed) | comparison to nonparticipants (method to confirm) | Kept as lead (A-013) |
| North Dakota | 2023-24 state evaluation (Impacts DB summary) | participants vs nonparticipants | Lead (A-014) |
| Arkansas | 2023-24 (generalized propensity score); 2014-2023 annual (Weikart Center) | GPS dose-response | Lead (A-015) |
| Arizona | 2021-22 SEA evaluation (blocked), 2015 SEA report | impact analysis vs nonparticipants | Lead (A-016) |
| Connecticut | UConn/CREC 2019 multiyear study (press), CT state-funded 2015-16 report | longitudinal multiyear | Lead (A-017) |
| Indiana | Holstead & King 2011 (ERIC), statewide 2017-18 and 2019-20 (Impacts DB: "comparative analysis") | matched | Kept (A-018); state reports lead |
| Louisiana | Jenner & Jenner 2007 (ERIC) | QE | Kept (A-019) |
| California (ASES/21st CCLC/ASSETs) | CRESST 2012 final (CDE .doc), CRESST Yr2 ED520524, CDE biennial reports | longitudinal statewide | Lead (A-020) |
| Oregon | AIR 2011/2012 statewide (ResearchConnections) | matched QE | Lead (A-021) |
| District of Columbia | OSSE 2013 final report (fetched, not fully read) | effect sizes reported | Lead (A-022) |
| Pennsylvania | 2020-21, 2021-22, 2022-23 (fetched), 2023-24, 2016-17 | participant-only, hour bands | Excluded: participant-only (dose bands, GPRA) |
| New York | Round 6 summative 2012-17, Round 8 Yr3 MI annual 2024-25, 2011 summary | unknown (attendance analysis section) | Not fetched (TLS); open lead, not in CSV |
| Michigan | MSU 2013-14, 2016-17, 2018-19 (fetched), 2020-21; 2013 fact sheet | participant-only / within-participant dose | Excluded: participant-only |
| Ohio | 2022-23, 2023-24 (fetched), 2024-25; Year 5 2020 | regular vs non-regular participants, GPRA | Excluded: participant-only (regular vs non-regular, unadjusted) |
| Florida | AIR 2022-23, 2023-24 (fetched), 2018-19 | GPRA, participant-only | Excluded: participant-only |
| Illinois | FY17, FY19, FY24 (fetched), FY25, 2008-10 (NIU) | GPRA | Excluded: participant-only |
| Kentucky | CEPR 2018-19, 2021-25 (2023-24 fetched) | GPRA | Excluded: participant-only |
| Colorado | 2014-15 to 2021-22 (2021-22 fetched); Denver OST 2013-14 | GPRA | Excluded: participant-only |
| Wisconsin | DPI 2013-14, 2022-23, 2023-24 | GPRA, teacher survey | Excluded: participant-only |
| Virginia | CREP 2017-18, 2019-20 (ERIC) | participant attendance and test analysis, no comparison stated | Excluded: participant-only (recheck) |
| North Carolina | NCDPI progress monitoring 2014-22 | participants vs state population (not matched) | Excluded: unmatched population benchmark |
| Missouri | 2015-16, 2017-18 statewide; Nance et al. 2000 St. Louis (61 vs 217, not random, no adjustment) | participant-only / unadjusted | Excluded |
| Georgia | Reading Challenge 1999 (ERIC); dissertations (Hobbs 2012, Horton 2010, Flood 2013, Green 2022, Venzen 2011) | pre-post or unadjusted comparison | Excluded: weak design (dissertations not the only report of a strong design) |
| Nevada | 2015-16 statewide (Impacts DB) | descriptive | Excluded: participant-only |
| Massachusetts | FY2018 year-end report | descriptive | Excluded |
| Minnesota | 2016-17 performance report | descriptive | Excluded |
| Iowa, Kansas, Nebraska, Oklahoma, New Mexico, Montana, Wyoming, Idaho, Alaska, Hawaii, Maine, New Hampshire, Vermont, Delaware, Alabama, Mississippi | Impacts DB listings 2014-2026; Oklahoma QIS paper (ED611031) | descriptive / teacher survey / GPRA | Excluded: participant-only |
| Maryland | Montgomery County 21st CCLC 2003-04 brief (21st CCLC + ELO-SAIL vs ELO-SAIL only) | comparison of two participant groups | Excluded (no non-participant comparison); see Gottfredson RCT A-044 |
| Tennessee, Utah, South Dakota | no statewide impact report found | n/a | None found |

## City and network after-school programs

| Program | What was found | Decision |
|---|---|---|
| LA's BEST | CRESST 2000 decade, 2005 dropout, 2008/2009 attendance-achievement HLM, 2017 entropy balancing, 2019 graduation, 2014 crime | Kept A-028 to A-030 |
| TASC / ExpandED (NYC) | PSA 2004 summary (ED491883), supplementary papers, Birmingham 2005, ExpandED demonstration reports (descriptive) | Kept A-031; ExpandED demo reports excluded (descriptive) |
| After School Matters (Chicago) | Goerge et al. 2007 (adjusted longitudinal); Hirsch et al. 2011 RCT | Kept A-032, A-033 |
| Citizen Schools | PSA 2010 graduation study; Abt 2017 ELT QE | Kept A-034, A-035 |
| NYC DYCD OST initiative | PSA 2006-2009 reports | Lead A-036 |
| NYC Beacons | Warren et al. 1999 Phase I (implementation, surveys) | Excluded: no school-record outcomes |
| Providence AfterZone | Kauh 2011 | Already in map L-44 |
| Boston After School & Beyond | BoSTEM 2023 (SEL outcome only) | Excluded: outcome not an indicator |
| Philadelphia OST | RFA 21st CCLC 2013, 2014, 2015; RFA Exito 2022; SDP Evans & Wolford 2014; SDP 21C-5 2012 | Kept A-023 to A-027 |
| Boys & Girls Clubs | Springer & Diffily 2012; Schinke et al. 2000 Project Learn; P/PV Arbreton 2009 (survey outcomes); BGCA California 2024 (self-report + records, descriptive); McGarrie 2022 (behavior) | Kept A-041, A-042; others excluded (self-report or no indicator) |
| YMCA | Virtual Y 2005 (Fordham); YMCA High School Youth Institute 2014 (randomly selected matched comparison, Impacts DB) | Leads, not in CSV: designs unclear. Flag for checker |
| Baltimore | Family League OST 2013; Baltimore Community Schools 2016; OrchKids 2018 | Kept A-037 (Olson), A-038 (OrchKids) |
| Houston | SELF Foundation PSM 2015, 2016 | Kept A-039 |
| Chicago others | Urban Debate League (PSM, graduation); After-School All-Stars (secondary claim of 14% fewer absences; primary report not found) | Debate kept A-047; ASAS open lead |
| Durham NC StudentU | Komisarow 2022 lottery | Kept A-043 |
| Quantum Opportunity Program | Mathematica 2003, 2004, 2006 RCT | Kept A-048 (null) |
| Expanded learning time | MA ELT Abt 2013; BPS ELT AIR 2017; Kraft MATCH 2015 | Kept A-050 to A-052 |
| Girls Inc. | AIR 2017-19 QE (only promotional summaries found) | Open lead, not in CSV |
| Horizons National, BELL, Summer Boost, NSLP | summer programs | Left to the summer searcher; NSLP already L-07 |
| Higher Achievement | already in map L-10, L-11 (2020 college-attendance follow-up ED606561 is beyond SPOTlight indicators) | not added |

## Meta-analyses and reviews

Kremer/Maynard et al. 2015 (attendance, null), Lauer 2006 (map L-08), Kidron & Lindsay 2014 (map L-08), Durlak et al. 2010
(map L-43/L-99), Zief et al. 2006, Lester et al. 2020, Knopf et al. 2015 (Community Guide), Valentine et al. 2010 (12 syntheses),
Neild et al. 2019 (ESSA review), Little & Harris 2003, Yao et al. 2023, Levine & Viano 2025, Delen et al. 2026 (out-of-school
learning, broad and not after-school specific: excluded), Granger 2008 (policy synthesis, no new data: excluded), Gardner,
Roth & Brooks-Gunn 2009 (narrative review: excluded), Redd et al. 2012 Child Trends (narrative review: excluded), the Afterschool
Alliance "Evaluations Backgrounder" series 2004-2015 (advocacy compilations: excluded, but useful as reference lists).

## Main exclusion reasons (ERIC hand screen)

1. Participant-only pre-post or GPRA share-improved (most state reports and many district reports).
2. Dissertations with unadjusted comparisons or a single school (for example ED549796, ED549389, ED522857, ED597400, ED647100,
   ED664104, ED535893, ED655122, ED668834, ED646217). These are excluded under protocol rule "dissertation only if it is the only report of a
   design that meets the bar".
3. Outcome not a SPOTlight indicator (SEL scales, self-efficacy, STEM interest, physical activity, staff outcomes).
4. Non-US systems with low transfer (Korea, China, Taiwan, Timor-Leste, Peru, Uruguay; UK EEF Children's University kept out
   because its outcome is KS2 attainment in England. It is a possible lead for another searcher).
5. Implementation, cost or policy papers with no outcome data (sustainability guides, TASC resource guides, CCSSO briefs).
6. Topic false positives (TASC = Treatment Alternatives to Street Crime, Truancy Assessment and Service Centers, Thinking
   Actively in a Social Context; CCLC = Community College League of California).

## Web searches run (2026-10-18)

Texas ACE AIR evaluation PSM; AIR "measuring program success" literature review; Pennsylvania state evaluation; New York State
MI statewide; Michigan MSU; Ohio statewide; Florida PSM; California ASES CRESST; Illinois statewide; Oregon PSM; Kentucky;
Naftzger national scan 2015; Wisconsin/Missouri/Georgia QE; Nevada; South/North Carolina; Kremer/Maynard meta-analysis; NYC DYCD
OST PSA; Citizen Schools graduation; LA's BEST decade; After School Matters Chapin Hall; TASC Reisner 2004; Lester et al. 2020;
Philadelphia OST RFA/PERC; Vandell long-term; Zief Campbell 2006; Schinke Project Learn; DYCD 2009 final; multi-state PSM
absences (extended mode); Arizona SEA impact; Connecticut multiyear; Chicago After-School All-Stars; Girls Inc. AIR; StudentU;
South Carolina effectiveness report. Each search returned about 9 to 10 results. Every result was screened by title, and
the relevant PDFs were downloaded where possible.

## Findings worth flagging to the map team (leads, to verify)

- **Attendance.** The AIR state evaluations (TX, NJ, WA, RI) all use PSM or IPTW and prior-year outcomes. Across them, 21st CCLC
  participation (30+ or 60+ days) is consistently associated with small reductions in unexcused or total school-day absences,
  roughly 0.5 to 3.4 days a year. Test-score effects are mostly null or tiny. In contrast, the one RCT on attendance (Gottfredson et al. 2010) and
  the Kremer et al. 2015 meta-analysis found no significant attendance effect. A defensible wording: 21st CCLC participation
  "is associated with slightly better school-day attendance in matched comparisons". Avoid "improves test scores".
- **Dosage.** Effects appear at or above roughly 30 to 60 days a year and over more than one year (Texas 120+ days, LA's BEST three years,
  Exito "high" participation, Baltimore OrchKids persistence beyond one year). This supports program-level levers on retention and
  regular attendance (A2.5).
- **Philadelphia.** Philadelphia-specific evidence exists. RFA PSM studies of 21st CCLC grantees found fewer students with 10+ unexcused absences in
  elementary grades only, and Exito (Congreso, Kensington CAPA) found +15 percentage points on graduation.
- **GPRA measures.** State GPRA attendance measures ("percent of students below 90% attendance the prior year who improved") are no evidence
  of program effect, because of regression to the mean. A logic-model soundness checker should flag claims built on them.

## ERIC queries (all run 2026-10-18, rows=200 or 400, fields per protocol)

| id | query | hits |
|---|---|---|
| q01 | `"21st Century Community Learning Centers" AND attendance` | 25 |
| q02 | `"21st Century Community Learning Centers" AND (achievement OR "test scores")` | 57 |
| q03 | `"21st Century Community Learning Centers" AND evaluation` | 58 |
| q04 | `"21st CCLC" AND evaluation` | 24 |
| q05 | `"21st CCLC" AND (attendance OR absenteeism)` | 13 |
| q06 | `"21st Century" AND afterschool AND "comparison group"` | 0 |
| q07 | `afterschool AND (dropout OR graduation)` | 38 |
| q08 | `"after-school" AND (dropout OR graduation)` | 231 |
| q09 | `"out-of-school time" AND "school attendance"` | 7 |
| q10 | `afterschool AND "school attendance"` | 15 |
| q11 | `"after school" AND "chronic absenteeism"` | 11 |
| q12 | `afterschool AND "chronic absenteeism"` | 2 |
| q13 | `"out-of-school time" AND (achievement OR "test scores") AND (quasi-experimental OR "propensity score" OR random*)` | 26 |
| q14 | `afterschool AND "propensity score"` | 3 |
| q15 | `"after-school" AND "propensity score"` | 18 |
| q16 | `afterschool AND "meta-analysis"` | 2 |
| q17 | `"after-school" AND "meta-analysis"` | 23 |
| q18 | `"out-of-school time" AND "meta-analysis"` | 5 |
| q19 | `afterschool AND (randomized OR "random assignment")` | 26 |
| q20 | `"after-school" AND (randomized OR "random assignment")` | 95 |
| q21 | `"LA's BEST"` | 21 |
| q22 | `"The After-School Corporation" OR TASC` | 95 |
| q23 | `"After School Matters"` | 11 |
| q24 | `"Citizen Schools"` | 15 |
| q25 | `"Boston After School"` | 4 |
| q26 | `"Providence After School Alliance" OR AfterZone` | 6 |
| q27 | `"Beacon" AND (after-school OR community schools) AND evaluation` | 41 |
| q28 | `"Boys and Girls Clubs" AND (achievement OR attendance OR evaluation)` | 17 |
| q29 | `YMCA AND afterschool` | 13 |
| q30 | `"expanded learning time" AND (achievement OR attendance)` | 38 |
| q31 | `"extended learning time" AND (achievement OR attendance)` | 43 |
| q32 | `"Afterschool Education and Safety" OR ASES` | 42 |
| q33 | `"After School Education and Safety"` | 5 |
| q34 | `"Texas ACE" OR "Afterschool Centers on Education"` | 26 |
| q35 | `"21st Century Community Learning Centers" AND Texas` | 8 |
| q36 | `"21st Century Community Learning Centers" AND (Washington OR Oregon)` | 7 |
| q37 | `"21st Century Community Learning Centers" AND (Michigan OR Ohio OR Illinois OR Wisconsin)` | 7 |
| q38 | `"21st Century Community Learning Centers" AND (Florida OR Georgia OR Kentucky OR Missouri)` | 5 |
| q39 | `"21st Century Community Learning Centers" AND (Pennsylvania OR "New Jersey" OR "New York")` | 8 |
| q40 | `"21st Century Community Learning Centers" AND (Colorado OR Nevada OR "Rhode Island" OR California)` | 5 |
| q41 | `"When Schools Stay Open Late"` | 6 |
| q42 | `"enhanced academic instruction" AND after-school` | 5 |
| q43 | `"21st Century Community Learning Centers" AND "performance"` | 24 |
| q44 | `afterschool AND (math OR reading) AND "quasi-experimental"` | 10 |
| q45 | `"after-school program" AND "school day attendance"` | 0 |
| q46 | `"afterschool program" AND absences` | 7 |
| q47 | `"summer and afterschool" OR "summer learning" AND attendance` | 65 |
| q48 | `"out-of-school time" AND dropout` | 13 |
| q49 | `"after-school" AND "high school" AND (credits OR graduation)` | 83 |
| q50 | `afterschool AND "regression discontinuity"` | 2 |
| q51 | `"Promising Afterschool Programs"` | 6 |
| q52 | `"Higher Achievement" AND afterschool` | 4 |
| q53 | `"Philadelphia" AND ("out-of-school time" OR afterschool)` | 23 |
| q54 | `"Communities in Schools" AND afterschool` | 0 |
| q55 | `"21st Century Community Learning Centers" AND "dosage"` | 0 |
| q56 | `afterschool AND participation AND "school attendance" AND longitudinal` | 0 |
| q57 | `"21st Century Community Learning Centers" AND (Virginia OR Maryland OR Tennessee OR Arkansas OR Indiana)` | 19 |
| q58 | `"21st Century Community Learning Centers" AND (Minnesota OR Iowa OR Kansas OR Nebraska OR Oklahoma OR "New Mexico" OR Arizona OR Utah)` | 5 |
| q59 | `"21st Century Community Learning Centers" AND (Massachusetts OR Connecticut OR Vermont OR Maine OR "New Hampshire" OR Delaware)` | 6 |
| q60 | `"21st Century Community Learning Centers" AND (Alabama OR Mississippi OR Louisiana OR "South Carolina" OR "North Carolina" OR "West Virginia")` | 13 |
| q61 | `"21st Century Community Learning Centers" AND (Alaska OR Hawaii OR Idaho OR Montana OR Wyoming OR "North Dakota" OR "South Dakota")` | 5 |
| q62 | `"After-school programs" AND "systematic review"` | 19 |
| q63 | `"youth development" AND afterschool AND "school attendance"` | 0 |
| q64 | `"Say Yes" OR "Harlem Children's Zone" AND afterschool` | 0 |
| q65 | `"Woodcraft Rangers" OR "THINK Together" OR "BELL" AND afterschool` | 26 |
| q66 | `"Building Educated Leaders for Life" OR "BELL" AND summer` | 56 |
| q67 | `"Project GRAD" OR "Quantum Opportunities"` | 23 |
| q68 | `"21st Century Community Learning Centers" AND "high school"` | 13 |
| q69 | `"Afterschool Alliance" AND evaluation` | 25 |
| q70 | `"Wallace Foundation" AND afterschool` | 22 |
| r01 | `"21st Century Community Learning Centers"` | 127 |
| r02 | `title:"21st Century"` | 4237 |
| r03 | `"Twenty-First Century Community Learning Centers"` | 1 |
| r04 | `title:afterschool AND (achievement OR attendance OR outcomes OR impact)` | 568 |
| r05 | `title:"after-school" AND (achievement OR attendance OR outcomes OR impact OR effects)` | 395 |
| r06 | `title:"after school" AND (achievement OR attendance OR outcomes OR impact OR effects)` | 394 |
| r07 | `title:"out-of-school time" AND (outcomes OR effects OR impact)` | 131 |
| r08 | `"21st Century Community Learning Centers" AND absences` | 1 |
| r09 | `"school day attendance" AND afterschool` | 3 |
| r10 | `"school-day attendance"` | 14 |
| r11 | `afterschool AND attendance AND "matched comparison"` | 1 |
| r12 | `"after-school" AND "school attendance" AND effects` | 10 |
| r13 | `"extended day" AND (achievement OR attendance) AND (quasi-experimental OR randomized)` | 8 |
| r14 | `"before and after school" AND achievement` | 44 |
| r15 | `"out-of-school" AND attendance AND "comparison group"` | 9 |
| r16 | `afterschool AND "Texas Education Agency"` | 12 |
| r17 | `"Learning Point Associates" AND "21st Century"` | 4 |
| r18 | `"American Institutes for Research" AND "21st Century Community Learning Centers"` | 0 |
| r19 | `"Policy Studies Associates" AND after-school` | 62 |
| r20 | `"21st Century Community Learning Centers" AND "statewide evaluation"` | 2 |
| s01 | `"Out-of-School Time Initiative" AND (New York OR NYC) AND evaluation` | 4 |
| s02 | `"Beacon" AND "New York City" AND youth` | 5 |
| s03 | `"decade of results" AND LA's BEST` | 0 |
| s04 | `"Citizen Schools" AND (graduation OR "high school")` | 3 |
| s05 | `"After School Matters" AND (attendance OR graduation OR randomized)` | 1 |
| s06 | `"Boys & Girls Clubs" AND ("Making Every Day Count" OR "Project Learn" OR achievement)` | 3 |
| s07 | `"Communities Organizing to Advance Learning" OR CORAL` | 328 |
| s08 | `"Maryland After School" OR "After School Opportunity Fund"` | 1 |
| s09 | `"Sacramento START" OR "START program" AND after-school` | 518 |
| s10 | `Gottfredson AND "after-school" AND delinquency` | 1 |
| s11 | `"Zief" OR "impacts of after-school programs on student outcomes"` | 4 |
| s12 | `Kremer AND Maynard AND after-school` | 2 |
| s13 | `"Lester" AND "afterschool" AND meta-analysis` | 0 |
| s14 | `"Scott-Little" AND after-school` | 24 |
| s15 | `"expanded learning time" AND (quasi-experimental OR "difference-in-differences" OR "comparison schools")` | 5 |
| s16 | `"Philadelphia" AND "out-of-school time" AND evaluation` | 6 |
| s17 | `"Research for Action" AND (afterschool OR "out-of-school")` | 14 |
| s18 | `"Éxito" OR Exito AND Philadelphia` | 2 |
| s19 | `"ExpandED Schools" AND (attendance OR achievement)` | 11 |
| s20 | `"TASC" AND attendance AND evaluation` | 2 |
| s21 | `"Higher Achievement" AND random` | 17 |
| s22 | `"Promising Afterschool Programs" AND longitudinal` | 2 |
| s23 | `afterschool AND "school attendance" AND (matched OR propensity OR comparison)` | 0 |
| s24 | `"after school" AND "unexcused absences"` | 3 |
| s25 | `"21st Century Community Learning Centers" AND "unexcused absences"` | 1 |
| s26 | `"summer" AND "21st Century Community Learning Centers"` | 24 |
| s27 | `"Woodcraft Rangers" OR "THINK Together" OR "Bay Area Partnership"` | 40 |
| s28 | `"San Francisco Beacon" OR "Beacons Initiative"` | 11 |
| s29 | `"YMCA" AND (achievement OR attendance) AND (program OR evaluation)` | 15 |
| s30 | `"Boston After School and Beyond" OR "Boston Beyond"` | 0 |
| s31 | `"Say Yes to Education" AND (attendance OR graduation)` | 2 |
| s32 | `"Big Brothers Big Sisters" AND "school-based"` | 19 |
| s33 | `"after-school" AND "Campbell" AND "systematic review"` | 1 |
| s34 | `"out-of-school time" AND "chronic absence"` | 2 |
| s35 | `"afterschool" AND "credit recovery"` | 3 |
| s36 | `"Teen Outreach Program" AND (school failure OR dropout)` | 8 |
| s37 | `"Urban Debate League" AND graduation` | 0 |
| s38 | `"Children's Aid Society" AND (afterschool OR community schools)` | 37 |
| s39 | `"extended day" AND kindergarten AND achievement AND quasi-experimental` | 6 |
| s40 | `"summer youth" AND attendance` | 14 |
| r2a | `title:"Community Learning Centers"` | 83 |
| r2b | `title:"Community Learning Center"` | 83 |
| r2c | `"CCLC"` | 88 |
