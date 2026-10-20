# Search log K3: Keystone Biology (S11), lane 1 focus, with science lane 2 (2026-10-20)

Searcher K3. Protocol: `protocol.md` (2026-10-20). Every row in `candidates_K3.csv` is a lead for independent verification. Text in `effect_as_reported` was copied from a fetched abstract, a fetched report or the WWC export, unless it is marked "lead".

## Checked before searching

- Read `_already_in_map.md`. Science links already there: L-48 (girls' after-school science), L-169 (Urban Advantage museum partnerships, grade 8), L-170 (out-of-school STEM, inconsistent), L-171 (gardens), L-172 (parent science texts), L-73 (summer jobs and end-of-course exams), L-76 (technical high schools), L-135 (early college and S4), L-132 (BARR), L-80 (regular Upward Bound). None of these is repeated except where a candidate adds a biology outcome (L-135).
- Searched `../exhaustive-search-2026-10-18/merged_studies.csv` with grep for: Hulleman, Harackiewicz, Rozek, Schneider, Crafting, Saavedra, Knowledge in Action, Cheung, biology, end-of-course, Project-based, utility value, After School Matters, Upward Bound, Yeager, Advanced Placement, NMSI, Greenleaf, Reading Apprenticeship, early college, Talent Search, GEAR UP, Regents, Edmunds, MESA, BARR, Neild, Phelan, Sherman, Holtzman, INSPIRE, BSCS, Enhanced Units, STEM21, Learning by Making. Hits: S-0687 (RAISE), S-0845 (Edmunds 2020), S-0146 (regular Upward Bound), S-0495 (Oregon MESA, graduation), the BARR rows, S-0001 (Texas ACE). Almost none of the science candidates had been screened.
- The other searchers' files (K1, K2, K4) were present. A grep shows that K4 also lists NMSI, APIP, Upward Bound, Hulleman, Rozek and Yeager. K3 lists them again from the science side. Count each study once when merging.

## Sources and queries

Hits are the totals the source reported. "Screened" means I read the titles, and I read the abstracts of anything plausible. "Kept" counts the rows in the CSV.

### ERIC API (api.ies.ed.gov/eric), 2026-10-20

| # | Query | Hits | Kept | Main exclusions |
|---|---|---|---|---|
| q1 | biology AND ("end-of-course" OR achievement) AND (randomized OR "quasi-experimental") AND "high school" | 52 | 0 directly (led to PlantingScience, Learning by Making) | Mostly non-US classroom-method studies (concept maps, flipped classes; Nigeria, Indonesia, Turkey); tiny teacher studies |
| q2 | "end-of-course" AND biology | 114 | 3 (PERC, JROTC, freshman academy noted) | State score reports, test technical reports, block scheduling and virtual school comparisons, correlational dissertations |
| q3 | "utility value" AND (science OR biology) AND (intervention OR randomized) | 40 | 2 (Rozek 2015 moderation note, Rozek 2017) | College samples (Harackiewicz 2016, Canning 2018 and others: introductory biology); outcomes are motivation only (Shin 2023, grades 5-6, Korea) |
| q4 | (afterschool OR "after-school" OR "out-of-school" OR summer) AND science AND "high school" AND (achievement OR "test scores") AND (randomized OR "quasi-experimental" OR "comparison group") | 12 | 3 (UBMS, SSMV, KIA) | FIRST robotics (attitudes only); Stanford SMYSP (design paper, postsecondary outcomes) |
| q5 | "science tutoring" OR (tutoring AND (biology OR chemistry) AND "high school") | 45 | 1 (Davis 2013, below bar) | Intelligent tutoring systems, college, international cross-country (Huang 2013) |
| q6 | (museum OR "research internship" OR "research apprenticeship" OR "summer research") AND "high school students" AND science AND (achievement OR "test scores" OR grades OR "course-taking") | 12 | 2 (Suter 2014, SSMV) | AMNH-ITEST evaluation (descriptive); George Mason ASSIP (survey) |
| q7 | ("science achievement" OR "science test") AND "high school" AND (afterschool OR "after school" OR "out-of-school time" OR "informal science") | 11 | 0 | Oregon MESA 2016 (middle school grades); Urban Advantage (already L-169) |
| q8 | Hulleman AND (relevance OR "utility value") AND "high school" | 11 | 0 new | German grade 9 math relevance trials (Gaspard 2015; Nagengast 2018): math, motivation outcomes, left to the Algebra searcher |
| q9 | Harackiewicz AND parents AND (mathematics OR science) AND "course-taking" | 5 | 0 new | Correlational papers on social class |
| q10, q13, q14 | CESE / Schneider-Krajcik project-based queries | 9, 4, 1 | 0 (CESE found through Crossref) | Elementary PBL; a treatment-only prediction paper (He et al. 2022) |
| q11 | "Knowledge in Action" OR ("project-based learning" AND "Advanced Placement") | 79 | 1 (Saavedra) | Practitioner pieces, government-only courses |
| q12 | (meta-analysis OR "best-evidence synthesis") AND "secondary science" | 519 | 1 (Cheung et al. 2017) | Teacher education, curriculum analyses |
| q15 | "Upward Bound Math-Science" | 15 | 1 (UBMS) | Profiles and APR descriptive reports |
| q16 | ("Advanced Placement" AND (incentive OR "College Readiness Program" OR "National Math and Science Initiative")) AND (impact OR effect) | 12 | 3 (Jackson, NMSI QE, CRESST) | Policy briefs; Ramsey 2012 dissertation (pre-post) |
| q17 | STEM high school / T-STEM / inclusive STEM with QE terms | 7 | 1 (T-STEM, lead) | Means et al. 2018 (college-major outcome only) |
| q18 | "North Carolina" AND biology AND ("end-of-course" OR EOC) AND (impact OR effect OR evaluation) | 8 | 0 | NC alternative learning programs 1997 (descriptive); block scheduling |
| q19 | summer AND (science OR STEM) AND "high school" AND (randomized OR lottery OR matched OR propensity) | 14 | 0 | Cohodes, Ho & Robles 2022 MIT summer RCT: postsecondary outcomes only (full text checked, no high school test or GPA outcome); single-sex STEM programs (attitudes); MADDPR (career intentions) |
| q20 | parents AND course-taking AND (mathematics OR science) AND (randomized OR experiment OR intervention) AND "high school" | 3 | 0 new | Only the Wisconsin trial |
| q21 | Keystone AND (biology OR "Keystone Exam") AND Pennsylvania | 9 | 1 (Cipolla 2021, below bar) | Descriptive PERA briefs on Keystone timing (ED665421), graduation policy briefs, scheduling dissertations |
| q22 | (STAAR OR TAKS) AND biology AND (program OR intervention) AND comparison terms | 1 | 0 | Teacher development specialists (teacher PD) |
| q23 | "Living Environment" AND Regents | 9 | 0 | Correlational and alignment studies |
| q24 | Virginia SOL biology / Florida Biology 1 EOC / Tennessee Biology I | 7 | 0 | Score reports; one freshman-academy dissertation comparing two academy models (null, no non-academy comparison) |
| q25 | "Teach For America" AND "high school" AND ("end-of-course" OR science) | 13 | 1 (Xu et al. 2011) | |
| q26 | meta-analysis AND (PBL OR inquiry) AND science AND achievement | 287 | 0 | International meta-analyses mixing grades and researcher tests; not partner models |
| q27 | meta-analysis AND (out-of-school OR afterschool OR informal) AND (STEM OR science) AND (achievement OR performance) | 263 | 0 | Mostly attitude and interest outcomes; Chinese after-school meta-analysis (2023, outside scope) |
| q28 | "Making Connections" AND "utility value" AND Hulleman | 1 | 0 | College sample (Hulleman et al. 2017) |
| q29 | utility value / relevance / purpose / values affirmation AND high school AND grades AND randomized | 12 | 0 new | German math trials; Nepal; small field experiments |
| q30 | scientists / near-peer / university partnership AND high school AND science AND RCT/QE AND achievement | 5 | 1 (PlantingScience) | Taiwan; Yellowstone STSP (QE, researcher test) |
| q31 | "21st Century Community Learning Centers" AND high school AND science/EOC/biology | 3 | 0 | Newsletters |
| q32 | "Project Lead the Way" AND achievement AND comparison | 3 | 0 | Postsecondary outcomes |
| q33 | career/health/biomedical academy AND biology/science AND test terms AND comparison | 3 | 0 | STEAM magnet schools (elementary) |
| q34, q35 | longitudinal motivation/interest/identity with science achievement and prior-achievement adjustment | 1, 2 | 0 | Math or civic outcomes. No research-associated link for Y2.3, Y2.4 or Y5.3 to science tests was found in ERIC. |
| id lookups | ED575019, ED591365, ED615910, ED577450, EJ1074631, ED603235, EJ938590 | 1 each | details | |

### What Works Clearinghouse, 2026-10-20

- POST `https://ies.ed.gov/ncee/wwc/StudyFindings/AllDataExport` with an empty body returned a zip (Interventions_Studies_And_Findings.csv, 14,483 finding rows).
- Filter: the study sample includes grades 9 to 12, and the outcome measure or domain matches biology, science, living environment, chemistry, physics, Advanced Placement or AP. Result: 31 studies.
- Kept: Edmunds 2017 (Biology EOC), Xu 2011 (TFA), Greenleaf (CST Biology), Taylor 2015 (BSCS), CESE, Enhanced Units, INSPIRE, STEM21, Learning by Making, APTIP (Holtzman 2010), NMSI (Sherman 2017; Phelan 2018 RCT; Brown & Choi 2015), ERO science outcomes.
- Not kept: these are school choice or school models with science outcomes and no partner relevance: Boston charters, KIPP, Kauffman School, charter management organizations, the NC Transformation reform, Deeper Learning Network (null, PISA-based science), Wake County career academies (null on AP math or science), Philadelphia CTE schools (Neild 2015, college-prep science sequence; L-74 and L-76 already cover CTE schools), Northeast Tennessee consortium (AP any subject), Hemelt 2020 dual credit (AP calculus), MEGA unit (researcher test), the iRAISE literacy null, and BARR (already L-132; it had a science credits finding of ES 0.53).

### Crossref and PubMed (to fetch abstracts of the named leads), 2026-10-20

- PubMed: Hulleman & Harackiewicz 2009 (PMID 19965759); Harackiewicz et al. 2012 (PMID 22760887); Yeager et al. 2014 (PMID 25222648). A search for Hulleman et al. 2017 returned nothing.
- Crossref: Schneider et al. 2022 (CESE); Jackson 2010 and 2014; Greenleaf et al. 2011; Lazowski & Hulleman 2016; Xu et al. 2011; Young et al. 2016; Hulleman et al. 2017.
- Lazowski & Hulleman 2016 (RER, motivation interventions meta-analysis, d=0.49): not kept. It pools all ages and outcomes and gives no high school science test estimate.

### Full texts fetched

- ED616435 (KIA two-year report), ED497631 (UBMS interim report), ED618258 (CRESST NMSI), RAISE final report (empiricaleducation.com), ED672098 (MIT summer RCT, checked for high school outcomes), Texas ACE 2014-17 report (tea.texas.gov: high school EOC analyses cover Algebra I and English only, no Biology), SSMV article (Europe PMC PMC4041506).

### Sources that failed

- Semantic Scholar API: HTTP 429 (rate limit) on both tries.
- OpenAlex: the daily budget for the shared IP was used up.
- ERIC full text for EJ1029528 returned HTML (worked around through Europe PMC).
- Europe PMC full text for PMC4643833 (Yeager 2014) returned 500, so the Study 2 sample size and effect size are leads.

## Caller's leads (from memory): outcome of checking

- Hulleman & Harackiewicz 2009, Science: verified. The effect is on science course grades for low-expectancy students only (lane 2).
- Harackiewicz, Rozek, Hulleman & Hyde 2012: verified, but it appeared in Psychological Science, not PNAS. Outcome: course-taking.
- Rozek et al. 2017, PNAS: verified. ACT math and science up 12 percentile points. Same trial as 2012.
- Schneider et al. CESE: verified. Educational Researcher 2022, ES 0.20 on a chemistry and physics test. There is no biology outcome.
- Saavedra et al. KIA: verified. EEPA 2022 and ED616435. AP Environmental Science and AP Government qualifying scores up about 4 percentage points (all students).
- North Carolina biology EOC studies: found Edmunds et al. 2017 (early college, Biology EOC pass 68% vs 53%), Xu et al. 2011 (TFA, science EOCs) and INSPIRE (null). No partner-run program with an NC Biology EOC outcome was found.
- Cheung, Slavin and colleagues' secondary science review: verified (JRST 2017).

## What the search shows

1. No partner-runnable program (out-of-school, summer, museum, tutoring, internship, parent-facing) has a strong-design test on a Biology end-of-course exam. The two partner-like programs with Biology EOC outcomes, SSMV (university research program) and PERC (peer leaders), rest on weak or single quasi-experiments. Science tutoring has only a one-group dissertation.
- The strong Biology EOC evidence is about school models: early college (RCT, +15 points pass rate), Teach For America (strong QE), Reading Apprenticeship PD (RCT, CST Biology, not significant under WWC), BSCS curriculum (RCT, small state-test effect), and the Cheung et al. synthesis.
- Partner-runnable lane 2 science evidence: the parent utility-value trial (course-taking, then ACT math and science), Upward Bound Math-Science (QE, science GPA and chemistry and physics course-taking), and brief student relevance or purpose exercises (Hulleman 2009; Yeager 2014; one RCT each, grades).
- Nulls that limit claims: the NMSI College Readiness Program RCT found no first-year AP math or science gain (QEs were positive). Enhanced Units, INSPIRE and SWPBIS (Keystone) were null. RAISE has no Keystone Biology outcome, which answers the open check on S-0687. The MIT STEM summer RCT has no high school outcome.
- Research-associated: no meta-analysis or pair of independent prior-achievement-adjusted longitudinal studies linking interest, utility value or science identity to high school science tests turned up. Suter 2014 (museum visits) is one exploratory study.

Counts: about 1,600 ERIC records returned across 35 queries, plus 31 WWC studies and 10 Crossref or PubMed lookups. About 140 abstracts screened; 30 candidates kept. By lane: 19 lane 1, 11 lane 2. Proposed tiers (overlapping): about 15 tested (strong design, mostly school models), 8 below bar, 5 null, 1 lead.
