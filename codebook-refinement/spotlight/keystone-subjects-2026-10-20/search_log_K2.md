# Search log K2: lane 1, Keystone Literature (S12) (2026-10-20)

Searcher K2. Scope: programs that raise high school English, reading comprehension or literature test results
(grades 8 to 12), and nulls. Output: `candidates_K2.csv` (24 candidates). All quoted effects were copied from a
fetched abstract or report, except K2-19, which comes second-hand from the fetched Baye et al. text and is marked lead.
Independent checkers must verify every row before use.

## Sources and tools

- ERIC API (api.ies.ed.gov/eric), 41 queries, all logged below. Used throughout.
- ERIC full-text PDFs (files.eric.ed.gov), fetched with curl and read with pdftotext: ED511811 (ERO final report),
  ED560732 (Striving Readers summary), ED566986 (RAISE SREE paper), ED622055 (RAAD report) and ED612242 (Baye et al., EEF
  version). ED571000 and ED570998 returned an ERIC redirect page instead of a PDF, so the RAISE report was fetched from
  empiricaleducation.com/pdfs/RAISEfr.pdf.
- Semantic Scholar API: every call returned HTTP 429 (rate limit), so no results.
- OpenAlex API: every call returned "Insufficient budget" (the shared daily limit), so no results.
- WebSearch (lead-finding only, nothing taken as evidence), 3 queries: (1) high school reading intervention RCT with a
  state English test in grade 10; (2) 826 Valencia/826 Boston evaluations; (3) after-school or summer programs for high
  school students with state ELA outcomes (Regents, MCAS, Keystone). WWC study pages (ies.ed.gov/ncee/WWC/Study/89250,
  39358) only return script, with no usable text.

## ERIC queries (date 2026-10-20; hits = numFound / returned)

| # | Query | Hits | Kept |
|---|---|---|---|
| q01 | ("adolescent literacy" OR "high school" reading) AND randomized AND comprehension | 454/200 | K2-13, K2-23, K2-24 (titles screened for high school; most are middle school, non-US, EFL or dissertations) |
| q02 | "struggling readers" AND (ninth OR "high school") AND (randomized OR "quasi-experimental") | 10/10 | K2-20; Fusion already S-0147 |
| q03 | "Striving Readers" AND evaluation | 34/34 | K2-02 to K2-07 |
| q04 | "READ 180" AND (high school OR adolescent OR ninth) | 69/69 | via K2-04, K2-07; rest are dissertations, single-school pre-post studies or vendor compendia |
| q05 | "Reading Apprenticeship" AND (randomized OR impact) | 19/19 | K2-01, K2-13; RAAD excluded (grades 7-8) |
| q06 | "Xtreme Reading" OR "Strategic Instruction Model" AND reading | 9/9 | via K2-03, K2-04 |
| q07 | "secondary" AND reading AND "best-evidence synthesis" | 6/6 | none (off topic) |
| q08 | "older/adolescent struggling readers" AND (meta-analysis OR synthesis) | 23/23 | K2-15 (2007 version), K2-17 |
| q09 | "high school" AND tutoring AND (reading OR English) AND (randomized OR QED) | 13/13 | none (elementary, EFL or math) |
| q10 | after-school/out-of-school AND "high school" AND reading/literacy/writing AND design terms | 8/8 | K2-11 |
| q11 | summer AND (high school OR adolescents) AND (reading OR writing) AND design terms | 9/9 | none new (Texas ninth-grade transition already S-0403) |
| q12 | "end-of-course" AND (English OR literature OR reading) | 398/200 | none (policy profiles and descriptive studies) |
| q13 | "ninth grade" AND (literacy OR reading) AND (course OR class) AND impact | 34/34 | K2-05, K2-12; Greenleaf 1996-97 pilot (ED473949) excluded: one school with no comparison group |
| q14 | writing AND (high school OR adolescents) AND design terms AND (state test OR achievement) | 100/100 | none beyond K2-18 |
| q15 | "National Writing Project" OR "College-Ready Writers Program" | 400/200 | none with a high school reading or ELA test outcome in the abstract (CRWP outcome is writing) |
| q16 | "826" OR "writing center" AND youth AND evaluation | 1/1 | none |
| q17 | "Upward Bound" AND (reading OR English OR test scores) | 68/68 | none (pre-1990 or descriptive; national Upward Bound evaluation already S-0146) |
| q18 | college access/readiness AND English/reading AND test scores AND design terms | 844/200 | none new (screened titles) |
| q19 | Baye AND Slavin AND secondary AND reading | 4/4 | K2-14 |
| q20 | Herrera AND Foorman AND adolescent literacy | 1/1 | K2-16 |
| q21 | Scammacca AND (grades 4-12 OR meta-analysis) | 44/44 | K2-15 |
| q22 | "Kemple" AND reading | 13/13 | K2-01 (earlier reports ED499778, ED503380) |
| q23 | "Structured Literacy" AND Chicago AND high school | 1/1 | K2-11 |
| q24 | tutoring AND (grade 9 OR ninth grade OR high school) AND literacy/reading AND randomized | 86/86 | none at high school (all elementary or middle; PLI interim ED678145 noted, not split by grade in the abstract) |
| q25 | debate AND (urban/policy debate OR debate league) AND outcomes | 74/74 | K2-22; the rest are already L-153 or out of scope |
| q26 | "independent reading" AND high school/adolescents AND design AND comprehension | 1/1 | none |
| q27 | book clubs/book access/free books AND adolescents AND reading achievement | 51/51 | none (Tijms 2018 excluded: Dutch first-year secondary, n=90, not high school) |
| q28 | "Talent Development High School" AND (reading OR English) | 5/5 | already S-0674/S-0676; Baye cites Balfanz et al. 2004 reading ES +0.32 (not significant, 6 schools) |
| q29 | ERWC OR "Pathway Project" AND design | 5/5 | K2-18 |
| q30 | youth development/mentoring AND high school AND reading/ELA AND test scores AND design | 1/1 | none (a single-school dissertation) |
| q31 | Lang AND Torgesen AND "high school" | 2/2 | K2-08 |
| q32 | Vaughn AND "high school" AND reading AND randomized | 9/9 | K2-09; PACCT grade 11 (EJ1057099) excluded: null on reading comprehension, content-knowledge outcome only |
| q33 | "high school" AND "reading intervention" AND state test terms | 2/2 | none (one partnership report with no design; one dissertation) |
| q34 | ELA AND high school AND (RCT OR RD) AND (tutoring/mentoring/after-school/summer/youth program) | 2/2 | none |
| q35 | 21st CCLC AND high school/secondary AND reading/English AND design | 5/5 | none (West Virginia QED reports cover mixed grades; not checked further) |
| q36 | Saturday/extended learning/extended day AND high school AND English/reading AND design | 0 | none |
| q37 | writing program AND high school AND state writing/English exam AND design | 5/5 | via K2-18 |
| q38 | Quantum Opportunities/Upward Bound/Talent Search/GEAR UP AND reading/English/test scores | 109/109 | none (GEAR UP meta already L-138; local GEAR UP studies descriptive or single-site) |
| q39 | credit recovery/double dose AND English/reading AND ninth grade | 3/3 | none (online credit recovery is a lane 2 credit outcome; left to the lane 2 searcher) |
| q40 | high school AND Regents/exit exam/end-of-course AND English AND impact AND program | 77/77 | none (exit-exam policy profiles) |
| q41 | "extensive reading intervention" AND "English learners" AND "high school" | 2/2 | K2-10 |

## Leads given at the start, and what became of each

- MDRC Enhanced Reading Opportunities (RAAL, Xtreme Reading): found, K2-01. It is new (merged_studies S-0256 cites it
  only inside an Evidence for ESSA reference list).
- Fancsali et al. RAISE i3 trial: already S-0687. K2-13 adds that the Keystone Literature exam was not an impact outcome
  (it was used only to validate the ETS test).
- Kim and colleagues' READ 180 trials: grades 4-6 after-school (S-0215, in map). No Kim high school READ 180 trial was
  found. The high school READ 180 RCTs are the Striving Readers sites (K2-04, K2-07, and Milwaukee grades 6-9).
- Strategic Instruction Model content literacy: the Learning Strategies Curriculum grade 9 RCT is K2-05, and Xtreme
  Reading is K2-03 and K2-04. No content enhancement routine trial with a high school test was found.
- Boston 826 and writing centers: no comparison-group study found. The press-reported gains are a pre-post rubric
  measure. Excluded.
- "Kemple's Striving Readers evaluations": Kemple led the ERO study, not Striving Readers. The Striving Readers evidence
  is in Boulay et al. (K2-02).

## Exclusions that matter

- RAAD (Pyatigorsky et al. 2019, ED622055): Reading Apprenticeship PD RCT, grades 7-8, with no impact on state ELA tests.
  Out of the grade range, but consistent with the K2-13 null.
- Shackelford (2019) Baltimore Urban Debate League: pre-adolescent participants. Anderson & Mezuk (2015): mediation
  follow-up of L-153 data.
- Fryer & Howard-Noveck, NYC high-dosage tutoring: grades 6-8 (a lead from the web search), out of range.
- Pyne, Messner & Dee summer program: middle school (web lead), out of range.

## Overall reading

No partner-run program (after-school, summer, tutoring by an outside organization, college access) with a high school
English, reading or literature test outcome passed a strong design in this search. All of the strong evidence is for
school-run supplemental reading courses for struggling ninth graders: small positive effects (ERO state ELA ES 0.11
that faded by grade 10; Lang FCAT 0.27-0.30; Striving Readers effects mostly on non-state tests), alongside several
nulls (ALFA, Voyager grade 9, the English learner trial, Solís) and one negative result (LLI pull-out). Baye et al. found no
US secondary tutoring study that met inclusion, and Herrera et al. found no effective program in a high school setting.
