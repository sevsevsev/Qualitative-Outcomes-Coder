# Search log K1: lane 1, Algebra I (S10) and high school math

Searcher K1, 2026-10-20. Protocol: `protocol.md` in this folder. Output: `candidates_K1.csv` (32 rows, K1-01 to K1-32).
Every `effect_as_reported` is copied from a fetched abstract, report or web page, except K1-13 (Oklahoma, press release, marked "lead") and K1-14 (Kraft 2015, already S-0049, not fetched again).
Prior screening was checked against `../exhaustive-search-2026-10-18/merged_studies.csv` (filtered for S10, algebra, EOC, PSAT, grade 10 and Keystone terms; 51 rows) and against `_already_in_map.md` (L-03, L-145, L-162, L-168, L-132 and others).

## Sources and tools

- ERIC API (`api.ies.ed.gov/eric`), 57 queries below. Abstracts read from the returned `description` field.
- ERIC full text PDFs: ED628646 (UPchieve), ED537606 and ED527394 (Heppen online Algebra I), ED662872 (CALDER recovery).
- NBER paper pages: w14240, w17494, w19581, w20211, w21395, w28531, w32510.
- Crossref API and OpenAlex DOI lookups (for DOIs and abstracts); RePEc for Taylor (2014).
- Evidence for ESSA WordPress JSON (`/wp-json/wp/v2/program?per_page=100&page=1..13`): 1,293 records, 511 math, 54 rated; 7 rated programs list high school grades.
- Web search (2 queries on Keystone, 2 on tutoring and summer bridge) and page fetches: MDRC (mdrc.org/node/104746), University of Oklahoma news.
- Semantic Scholar returned HTTP 429 on every try (shared rate limit). OpenAlex search was rate-limited; DOI lookups worked.

## ERIC queries (date 2026-10-20; hits = numFound; top 200 screened by title)

| # | Query | Hits | Kept |
|---|---|---|---|
| 1 | "Algebra I" AND (randomized OR quasi-experimental) AND (end-of-course OR achievement) | 103 | Heppen 2011, Kentucky hybrid, Pane, Intervene K-12, Campuzano/WWC leads |
| 2 | "double-dose" algebra (ERIC treated as OR; top 200 screened) | 11,754 | Nomi & Allensworth 2009, 2013; Cortes et al.; Nomi & Raudenbush 2016; 2024 SREE |
| 3 | tutoring AND ("high school" OR "ninth grade") AND mathematics AND (randomized OR "random assignment") | 13 | UPchieve; Saga (already) |
| 4 | "high-dosage tutoring" OR "high-impact tutoring" | 69 | none new for HS math (mostly literacy, elementary, implementation) |
| 5 | "summer bridge" AND algebra | 7 | none (college bridge programs) |
| 6 | "peer tutoring" AND (algebra OR "high school mathematics") AND (randomized OR quasi-experimental) | 3 | none (middle school, old) |
| 7 | ("after-school" OR "out-of-school") AND mathematics AND ("high school" OR secondary) AND (randomized OR quasi-experimental) | 29 | none for HS tests (Higher Achievement is middle school) |
| 8 | "eighth grade algebra" OR "8th grade algebra" OR "algebra for all" | 150 | Domina 2015, Clotfelter et al., McEachin 2020, Dougherty, Rickles, Sorensen |
| 9 | "Cognitive Tutor" AND (randomized OR experiment) AND algebra | 25 | Pane 2014 |
| 10 | "end-of-course" AND (randomized OR "regression discontinuity" OR "quasi-experimental" OR "propensity score") | 38 | PERC peer-led (Thomas 2015) |
| 11 | "Keystone" AND (algebra OR exam OR Pennsylvania) AND achievement | 15 | none causal |
| 12 | ("secondary mathematics" OR "high school mathematics") AND ("meta-analysis" OR "best-evidence synthesis" OR "systematic review") AND programs | 5 | Slavin, Lake & Groff 2009 |
| 13 | "Algebra I" AND "regression discontinuity" | 3 | Dougherty SREE 2014 |
| 14 | ("GEAR UP" OR "Upward Bound" OR "Talent Search" OR "Project GRAD") AND (mathematics OR algebra) AND (impact OR effects) | 25 | Project GRAD lead |
| 15 | ("ninth grade" OR "9th grade" OR freshman) AND (mathematics OR algebra) AND ("regression discontinuity" OR randomized OR "random assignment") | 38 | Dee & Huffaker |
| 16 | summer AND (algebra OR "high school mathematics") AND (randomized OR "random assignment" OR "quasi-experimental") | 14 | none new (Elevate in map; credit recovery in map) |
| 17 | ("Algebra Nation" OR "Math Nation" OR "Florida Virtual School") AND algebra | 17 | Math Nation field experiment |
| 18 | tutoring AND ("high school" OR secondary) AND (mathematics OR algebra) AND ("quasi-experimental" OR "propensity score" OR "regression discontinuity") | 21 | none new |
| 19 | ("Texas" AND "end-of-course") AND (algebra OR mathematics) AND (impact OR effect) | 20 | none (dissertations, district reports) |
| 20 | ("MCAS" AND "grade 10") AND (program OR intervention) AND (impact OR effect) | 0 | - |
| 21 | ("Tennessee" AND "end-of-course") AND (algebra OR tutoring) | 10 | none |
| 22 | Talent Development High School / Ninth Grade Success Academy / Transition to Advanced Mathematics / catch-up course | 19 | TDHS already S-0674 |
| 23-26 | title lookups: Pane 2014; Cortes et al.; Heppen; Barrow et al. "Technology's Edge" | 2, 1, 2, 4 | confirmed records |
| 27 | (software OR "computer-assisted") AND algebra AND randomized AND (NCEE OR IES) | 1 | Kentucky (dup) |
| 28 | title:"Injecting Charter School Best Practices" | 0 | found via NBER instead |
| 29 | ("early college" AND "Algebra I") AND (randomized OR lottery OR experimental) | 0 | - |
| 30 | "Effectiveness of Reading and Mathematics Software Products" | 4 | Campuzano 2009 |
| 31 | "early college" AND "end-of-course" | 5 | none |
| 32-34 | Taylor 2014; Dougherty 2017; "virtual school" Florida algebra | 0 each | found via RePEc/NBER |
| 35 | WWC "Intervention Report" AND (high school math OR algebra OR secondary mathematics) | 44 | curricula only (Cognitive Tutor WWC 2016 noted) |
| 36 | "Every Classroom, Every Day" | 8 | Early et al. 2016 |
| 37 | (Upward Bound OR college access OR college preparation) AND (state test OR test scores) AND mathematics AND design terms | 2 | none |
| 38 | mentoring AND (mathematics OR algebra) AND (high school OR adolescents) AND design terms AND achievement | 2 | none new |
| 39 | (peer tutoring OR cross-age tutoring OR peer-assisted) AND mathematics AND "meta-analysis" | 13 | Chang et al. 2025 |
| 40 | (online OR virtual OR on-demand tutoring) AND (mathematics OR algebra) AND design terms | 10 | UPchieve (dup); others elementary or Spain |
| 41 | "Keystone Exam" OR "Keystone Exams" OR "Keystone Algebra" | 10 | none causal |
| 42 | Philadelphia AND (algebra OR high school mathematics) AND (Research for Action OR PERC OR evaluation) | 2 | none causal |
| 43 | ("PSSA" AND "grade 11") AND program AND mathematics | 0 | - |
| 44 | Regents AND (algebra OR Integrated Algebra) AND design terms | 3 | none |
| 45 | ("North Carolina" AND "Algebra I") AND (impact OR effect) AND (program OR intervention OR policy) | 8 | Clotfelter (dup) |
| 46 | Florida Algebra 1 EOC AND (impact OR effect) | 8 | Math Nation (dup) |
| 47 | "Intensified Algebra" OR "Agile Mind" | 9 | Tidd et al. 2018 |
| 48 | "Ramp-Up to Algebra" OR "Ramp-Up to Advanced Mathematics" | 0 | - |
| 49 | "Project GRAD" AND (MDRC OR Snipes) | 3 | Snipes et al. 2006 (HS) |
| 50 | "College Preparatory Curriculum for All" OR (algebra for all AND Chicago AND ninth) | 14 | Allensworth et al. 2009 |
| 51 | (remedial OR intensive) AND mathematics AND "high school" AND "regression discontinuity" | 16 | none in lane 1 (college-remediation outcomes) |
| 52 | Edmunds AND "early college" AND (randomized OR lottery) | 11 | none with an HS math test in abstracts (lane 2) |
| 53 | "Building Mathematical Identity after School" OR (afterschool AND high school AND mathematics AND randomized) | 2 | none (elementary) |
| 54 | "educational technology" AND mathematics AND "meta-analysis" AND Slavin | 3 | Cheung & Slavin 2013; Morrison et al. 2024 |
| 55 | Hamlin AND tutoring AND Oklahoma | 0 | - |
| 56 | Saga AND (tutoring OR live-online) AND (Regents OR New York City) | 0 | found via web (MDRC) |
| 57 | ("Upward Bound" AND Myers) OR ("Upward Bound" AND "random assignment") | 8 | none for lane 1 (lane 2 outcomes only) |

## Web searches (2026-10-20)

1. Keystone Algebra I exam scores impact evaluation (randomized or quasi-experimental): 10 results, all descriptive (SDP trend briefs, Allegheny Institute, a correlational journal article). Kept 0.
2. Philadelphia high school math tutoring evaluation, Keystone Algebra outcomes: 9 results, descriptive SDP and RFA briefs. Kept 0.
3. High-dosage tutoring high school algebra end-of-course exam, randomized or RD, 2023-2025: 10 results. Kept MDRC Saga live-online evaluation (K1-08) and OU Transformative Tutoring Initiative (K1-13, lead).
4. Summer bridge program incoming ninth graders, math, randomized: 9 results, none with a comparison group at high school level. Kept 0.

## Counts

- Records screened by title: about 1,250 ERIC titles (with overlap), 1,293 Evidence for ESSA records (511 math, 54 rated), 39 web results.
- Abstracts or full texts read: about 85.
- Kept: 32 candidate rows. 31 lane 1 and 1 lane 2.
  - Tested-level designs with a high school math or Algebra I test outcome: 16 (Nomi & Allensworth 2009, Cortes et al. 2015, Nomi & Raudenbush 2016, Allensworth et al. 2009 null, Fryer 2014, Bhatt 2024, Pane 2014, Campuzano 2009, Barrow 2009, Heppen 2011, Kentucky null, Dee & Huffaker 2024, McEachin 2020, Domina 2015, Clotfelter 2015, Early 2016). Only Bhatt 2024 (already in) and the MDRC Saga QED are partner-runnable.
  - Nulls or negatives recorded: 10.
  - Marked school model, not a partner link: 20.
  - Already screened: 3 (K1-09 Bhatt, S-0282; K1-14 Kraft, S-0049; K1-08 partly, as Saga).

## Exclusions and reasons

- **Keystone-specific causal studies.** None found beyond those already screened (Cordes 2024 cyber charter, S-0697; PDE CTE brief, S-0678). The SDP and RFA Keystone briefs (ERIC ED665421, ED626030) and the Temple McGlynn article are descriptive or correlational.
- **Pennsylvania SWPBIS and Keystone dissertation** (ED642895) and other ProQuest dissertations (ED652122 double-dose vs single-dose, ED640778, ED554169 AVID, ED519359 summer readiness, ED668532): weak designs or no comparison group equivalence.
- **Middle school or elementary outcomes only.** Taylor 2014 is kept as context (K1-06). Excluded: Higher Achievement (middle school), Building Mathematical Identity (elementary), Air Tutors and Cignition (grades 4-6), ENpowered (middle school grades), Shah 2026 (middle school), Finseraas 2024 (Norway, ages 7-9), CALDER 2022-23 recovery (no high school interventions found in the text).
- **Correlational usage studies.** Leite et al. 2019 Algebra Nation (EJ1227078), Schaefle 2018 GEAR UP (district-level pass rates), Dwyer & Kelly 2025 acceleration (correlational), Howard et al. 2015 (HSLS descriptive).
- **Curriculum or tool trials adopted by teachers** (graphing calculators, TI-Navigator, comparison curriculum, UCSMP, Saxon, Core-Plus, I CAN Learn as such): school curricula, not partner programs. Cognitive Tutor (Pane), software products (Campuzano), CAI (Barrow) and the Kentucky hybrid are kept as the main tested technology results, marked school model.
- **College remediation or transition courses** (Kentucky Targeted Interventions, Tennessee SAILS, dual enrollment algebra in Florida): outcomes are college remediation and enrollment, not high school tests. These are lane 2 or beyond, and left to other searchers.
- **Upward Bound, Upward Bound Math-Science, Talent Search:** outcomes are transcripts, credits and college. No high school math test. Lane 2, left to the lane 2 searchers. Duke TIP summer (Li et al. 2009): gifted sample, AP course-taking only.
- **Online credit recovery** (Heppen 2017, Rickles 2023): already L-145. **Elevate Math summer:** already L-162. **BARR:** already L-132. **Math-in-CTE:** already L-168. **GO Tutor Corps:** already S-0225. **GEAR UP Bausmith & France:** already S-0850. **Talent Development High School:** already S-0674.
- **Peer tutoring syntheses:** Wexler et al. 2015 (13 studies, includes single-case designs) and Alegre et al. 2020 (no control group) excluded as below the bar.
- **NMSI College Readiness Program** (ED615919, AP outcomes, cluster RCT): lane 2 (AP), left to the lane 2 searchers.

## Notes for the checkers

- The double-dose papers (K1-01 to K1-04) are one Chicago natural experiment. Count them as one study.
- The only new partner-runnable evidence with an Algebra I end-of-course exam outcome is the MDRC matched-comparison study of Saga live-online tutoring in NYC (K1-08: Regents Algebra I pass 39 vs 31 percent). It needs the full report, its authors and its baseline-equivalence check before use.
- No randomized or strong quasi-experimental study was found of a community-run after-school, summer bridge or college-access program with a high school math test outcome. That gap is itself the result for those program types.
