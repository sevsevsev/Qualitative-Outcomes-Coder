# Search log K4: lane 2, high school academics broadly (2026-10-20)

Searcher K4. Focus: programs that change high school course passing, GPA, credits, on-track status, ACT/SAT/PSAT or
AP exam passing (school records or official scores), nulls included; plus research-associated links from outcomes a
code names to later high school grades or tests.

Output: `candidates_K4.csv` (43 rows: 31 tested or program rows, 12 research-associated rows). Every `effect_as_reported`
is copied from a fetched abstract or report text unless it is marked "lead".

## Sources and access this session

| Source | Status |
|---|---|
| ERIC API (`api.ies.ed.gov/eric`) | Worked. Main source. 62 queries, listed below. |
| ERIC full text (`files.eric.ed.gov`) | Blocked by a bot-check page (HTML returned instead of PDF). |
| NBER paper pages | Worked (w19014, w21178, w28406, w19562, w25349; two wrong-number fetches discarded). NBER PDF w19014 fetched and searched for "GPA". |
| Nature (Yeager et al. 2019 article page) | Worked. |
| Crossref API | Worked (9 title lookups). |
| Europe PMC REST API | Worked (2 title lookups). |
| Semantic Scholar API | HTTP 429 (rate limit) on both tries. |
| OpenAlex API | Daily free budget for the shared IP used up. |
| WWC site | Reachable, but my guessed intervention ID was wrong (gave PBIS+SEL); the ERIC record of the WWC report was used instead. |
| NYU Research Alliance (iMentor final report) | TLS name mismatch on the old host; the new site gave "Page Not Found". |

## Already-done check

I read `_already_in_map.md` (173 links) and searched `../exhaustive-search-2026-10-18/merged_studies.csv` with Python
for each program or author name before recording. Candidates already there are marked in `already_screened` and recorded
only when this search found a lane 2 outcome the earlier record lacks (Upward Bound high school credits, BAM GPA,
growth mindset advanced math course-taking, debate GPA/SAT, absences on course grades, self-beliefs on grades).

Already screened and **not** re-recorded (nothing new found): Talent Search (S-0069), GEAR UP Kim et al. 2025 (S-0849),
Freshmen success RCT (Flannery et al. 2020, S-0743: credits positive, GPA null), Project Arrive group mentoring (S-0369),
tutoring plus mentoring Detroit (S-0370), Achievement Mentoring (S-0367), Diplomas Now / City Year (S-0139, L-41),
City Year school-level QED (S-0409/S-0683, L-157), Talent Development High Schools (S-0674, S-0676), Project GRAD
(S-0523/S-0620), Big Brothers Big Sisters (S-0167 and others), After School Matters (S-0029, S-0030), Komisarow 2022 (S-0040),
BARR (L-132), Match/Saga tutoring (L-03), CCRE early-college strategies (S-0846), My Brother's Keeper Oakland (S-0858, L-143),
Check and Connect Chicago (Guryan et al. 2021: no GPA or test effect; L-109).

## Queries (ERIC API unless noted)

Dates: all 2026-10-20. "Hits" is ERIC numFound; "screened" is the number of returned titles I read (up to the row limit);
"kept" is candidates recorded from that query.

| # | Query | Hits | Screened | Kept | Notes |
|---|---|---|---|---|---|
| q1 | ("grade point average" OR "course failure" OR credits) AND "high school" AND randomized | 72 | 72 | K4-006, K4-009, K4-023/024 | BARR, credit recovery, early college, dual credit already in map or school models; college-level studies out of scope |
| q2 | "Upward Bound" AND (grades OR "grade point average" OR credits OR "test scores" OR SAT OR ACT) | 57 | 57 | K4-001, K4-002 | Laws 1999 (EJ602755) measures college freshman GPA: out of lane; pre-1990 items out |
| q3 | "Talent Search" AND (impact OR evaluation) AND "high school" | 47 | 47 | 0 | Constantine 2006 (already S-0069) has no high school grade or test outcome; "Academic Talent Search" is gifted programs |
| q4 | "GEAR UP" AND (impact OR "quasi-experimental" OR randomized OR "comparison group") | 34 | 34 | K4-003, K4-004 | Maultsby 2016 dissertation (ED575501): no ACT difference, weak design; Schaefle 2018 district pass rates, weak; College Crusade RI (Fogg & Harrington 2015) outcomes are persistence and graduation |
| q5 | "Advanced Placement" AND (incentive OR "National Math and Science Initiative" OR "College Readiness Program" OR "AP Strategies") | 55 | 55 | K4-010..014 | NMSI annual reports and policy briefs excluded; Ramsey 2012 dissertation pre-post only; Rahman 2026 teacher bonuses is a policy, not partner |
| q6 | "Becoming a Man" OR "cognitive behavioral therapy" AND "high school" AND (grades OR ...) | 2 | 2 | 0 | Both middle-school 1990s CBT; BAM found via NBER instead |
| q7 | OneGoal | 0 | 0 | 0 | No ERIC record. OneGoal not found in any source this session |
| q8 | iMentor | 11 | 11 | K4-007 | |
| q9 | "City Year" AND (impact OR evaluation OR outcomes) | 10 | 10 | 0 | Only school-level proficiency QED (already L-157) and Diplomas Now (already) |
| q10 | "Sponsor-a-Scholar" OR "Philadelphia Futures" | 1 | 1 | 0 | Not indexed; K4-020 kept as a lead from memory |
| q11 | "Citizen Schools" | 15 | 15 | 0 | Middle-school model; outcomes engagement and aspirations |
| q12 | "Freshman Connection" OR ("summer bridge" AND "ninth grade") | 4 | 4 | 0 | Policy brief and dissertations only |
| q13 | ("text message" OR texting OR nudge) AND "high school students" AND (grades OR course OR credits OR GPA) | 15 | 15 | K4-016 | Washington opt-out AP policy (ED625520) is descriptive; noted in K4-016 |
| q14 | mentoring AND "high school" AND (GPA terms) AND (design terms) | 7 | 7 | K4-008 | Others already screened |
| q15 | "utility value" AND ("high school" OR adolescents) AND (grades OR ACT OR "course-taking") | 23 | 23 | K4-027, K4-036 | Rest are correlational motivation studies |
| q16 | ("SAT" OR "ACT") AND (coaching OR "test preparation") AND (effect OR meta-analysis) | 191 | 80 | K4-022 | Most pre-1990 or commercial-coaching surveys; ACT working papers are self-selected retesters |
| q17 | debate AND "high school" AND (ACT OR GPA OR "test scores") | 101 | 80 | K4-021 | Boston and Chicago debate studies already in L-153 |
| q18 | (engagement OR self-regulation OR self-control OR belonging OR "academic mindsets") AND GPA AND "high school" AND longitudinal AND "prior achievement" | 0 | 0 | 0 | Too narrow; replaced by q19-q22, v12-v19 |
| q19 | meta-analysis AND ("student engagement" OR "school engagement") AND ("academic achievement" OR grades) | 946 | 60 | K4-038, K4-039 | Roorda 2011/2017 already L-26 |
| q20 | ("ninth grade" OR "9th grade") AND attendance AND ("course failure" OR "course performance" OR grades) AND (predict OR predictor) | 25 | 25 | 0 directly | Mac Iver et al. 2019 EWI trial: null on credits (school model; related L-121); Ninth Grade Academies QED (Somers & Garcia 2016) school model; Consortium reports led to v6 |
| q21 | (absences OR absenteeism) AND "high school" AND ("fixed effects" OR causal) AND (test scores OR grades OR GPA) | 15 | 15 | K4-032 | Yaow et al. 2026 (ED681843) covers tests and graduation, not grades |
| q22 | extracurricular AND (GPA OR grades OR "test scores") AND longitudinal AND adolescents | 12 | 12 | K4-042 | Darling 2005, Fredricks & Eccles 2006, Eccles & Barber 1999: grade source may be self-report; noted |
| q23 | (afterschool OR "after-school" OR "out-of-school time") AND "high school" AND (GPA terms) AND (design terms) | 1 | 1 | 0 | Too narrow |
| q24 | ("youth development" OR "Boys and Girls Clubs") AND adolescents AND GPA terms AND design terms | 1 | 1 | 0 | Off-topic hit |
| q25 | "college access" AND (GPA OR SAT OR ACT OR AP) AND (design terms) | 10 | 10 | 0 | Promise scholarships and dual enrollment: policies, not partner programs |
| q26 | "Working on Womanhood" OR "Youth Guidance" OR "Sources of Strength" AND grades | 1 | 1 | 0 | No WOW evaluation indexed |
| q27 | ("summer program" OR "summer bridge") AND ("high school" OR "ninth grade") AND (credits OR GPA OR Algebra) AND (randomized OR comparison) | 6 | 6 | 0 | Algebra readiness program already L-162; rest college bridge |
| q28 | afterschool high school grade point average impact (keyword) | 1,011,423 | 50 | 0 | Austin ACE reports are descriptive; Hmong afterschool small; already-screened items |
| q29 | mentoring program high school students grade point average randomized | 1,447,779 | 50 | 0 new | Project Arrive, Check and Connect, SBM reanalysis (Lyons & McQuillin 2019: effects near zero) already covered by L-110 |
| q30 | Advanced Placement program impact underrepresented students quasi-experimental exam passing | 1,224,638 | 50 | K4-015, K4-017 | Warne et al. 2015 (passing AP exam goes with higher ACT) is selection on course-taking, not a program; Rahman & Lawson 2025 fee waivers are state policy |
| q31 | ninth grade transition program randomized credits grade point average | 639,025 | 50 | K4-029 | Link Crew dissertation (Lifsey 2010) and Buhrman 2010 dissertation: weak designs, excluded; Philadelphia Starting Strong reports descriptive |
| q32 | college preparation program high school grades test scores impact evaluation | 1,490,750 | 50 | 0 | Florida Bright Futures is a state scholarship; ACT reports are self-selected |
| q33 | AmeriCorps members high school students course performance | 1,392,342 | 25 | 0 | Reading Corps elementary; Austin School Turnaround AmeriCorps descriptive |
| q34 | self-affirmation high school grade point average long-term Borman | 1,106,837 | 25 | K4-028 | Hanselman 2017 replication already L-21 |
| q35 | "student success coaches" OR "graduation coach" high school credits impact | 935,067 | 25 | 0 | Dissertations and qualitative |
| q36 | "near-peer" OR "college advising" high school students grades test scores randomized | 1,345,271 | 25 | K4-030 | Bettinger & Evans 2019 and Hyman 2023: college outcomes only, no high school academics |
| q37 | cognitive behavioral group program adolescents school grades randomized urban | 1,262,074 | 25 | K4-019 | BAM NBER 19014 also indexed |
| q38 | "Equal Opportunity Schools" | 7 | 7 | 0 | Montgomery County trend report and a dissertation; below bar |
| q39 | "College Track" OR "Summer Search" OR "SEO Scholars" OR "Breakthrough Collaborative" | 39 | 15 | 0 | College Track benchmark brief (postsecondary); Breakthrough math tutoring is grade 8 |
| q40 | "Project GRAD" high school | 846,039 | 15 | 0 | MDRC 2006 already screened |
| q41 | "Diplomas Now" OR "Talent Development High School" course passing ninth grade impact | 461,329 | 15 | 0 | Already screened |
| q42 | "Advanced Placement" summer bridge OR "AP readiness" OR "Saturday sessions" | 988,763 | 15 | 0 | College summer bridge only |
| v1-v20 | Title lookups to verify leads (Kirksey 2019; Hulleman 2009; Yeager 2014; Harackiewicz 2012; Duckworth 2005; Allensworth & Easton 2007; Jackson 2014; Sponsor-a-Scholar; UBMS; Yeager 2019; After School Matters; Cooper 2006; belonging meta; Valentine 2004; Marsh & Kleitman 2002; belonging longitudinal; self-control grades; Hulleman 2017; homework meta; Sponsor-a-Scholar again) | 0 to 1.8M | 1-12 each | K4-025..027, 033..037, 040..043 | Titles not in ERIC were checked in Crossref or Europe PMC |

Other fetches:
- NBER w19014 (BAM 2013) page and PDF; w21178 (BAM 2017); w28406 (Scope Challenges essay, no data, excluded); w19562 (College Possible).
- Nature s41586-019-1466-y (Yeager 2019) abstract and results text.
- Crossref: Hulleman & Harackiewicz 2009; Yeager 2014; Harackiewicz 2012; Duckworth & Seligman 2005; Jackson 2014; Yeager 2019; Sponsor-a-Scholar (no match); Fryer 2016 text messaging; Galla et al. 2019.
- Europe PMC: Yeager 2014 abstract; Hulleman & Harackiewicz 2009 abstract.

## Exclusions worth recording

- **Fryer (2016), text messages to students (Oklahoma City)**: grades 6-7, not high school. Excluded from lane 2.
- **Mental contrasting with implementation intentions (Duckworth et al. 2011, 2013)**: outcome is PSAT practice questions
  completed, not an official score. Excluded (lead only, from memory).
- **Hulleman et al. 2017 utility-value replication**: college course. Out of scope.
- **Blackwell, Trzesniewski & Dweck 2007**: 7th-8th grade math grades; growth mindset already handled through NSLM.
- **Galla et al. 2019**: high school grades index self-regulation, but no prior-achievement adjustment. Noted under K4-037.
- **Warne et al. 2015**: AP exam passers have higher ACT; this is course self-selection, not a program effect.
- **Talent Search, Bettinger & Evans near-peer advising, Hyman college-planning course, College Advising Corps**: no high
  school grade or test outcome.
- **Equal Opportunity Schools**: only a district trend report and a dissertation; below the bar.
- **Dissertations** on ninth-grade transition programs, Link Crew and GEAR UP (ED514470, ED519378, ED575501): weak designs.

## Gaps and leads for checkers

- OneGoal and College Possible beyond Avery 2013: no evaluation with high school grades or official test scores found.
- Becoming a Man: GPA effect comes from the first trial (grades 7-10). Whether the second trial (2013-15) reported GPA
  separately was not checked; Crime Lab reports no significant effect at the scaled sites (L-16).
- iMentor 12th-grade academic results: final report text not fetchable here.
- Sponsor-a-Scholar (Philadelphia, Mathematica 1998): lead from memory only; needs a verifier fetch.
- WWC ACT/SAT test prep: the effectiveness rating and improvement index were not in the fetched abstract.
- Rozek et al. 2017: check whether ACT scores came from official records or student report (self-report would not count).
- Kirksey 2019: results not in the abstract; fetch the AERA Open article.
- NMSI CRP: two independent quasi-experiments (AIR 2017, CRESST 2015) plus Jackson's difference-in-differences on the
  precursor program could reach "suggestive" for AP exam passing, but the Lone Star AP CSP null (AIR 2025) limits the
  claim, and it is a school-embedded model. AP passing has no SPOTlight indicator of its own; it can only be an
  intermediate step.
