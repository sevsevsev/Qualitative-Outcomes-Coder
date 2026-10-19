# Search log B: evidence clearinghouses

Searcher B. Searched 2026-10-18; files written 2026-10-19. All fetches used `curl -sSL -A "Mozilla/5.0"` (a Chrome UA where noted) or the clearinghouse's own JSON/data endpoints. Downloads were parsed with `python3 -I` from a scratch folder outside the shared folder. Output: `candidates_B.csv`, 325 rows (B-001 to B-325).

**Status of the rows.** Every row is a lead. Where an effect was taken from a clearinghouse summary or from memory, `effect_as_reported` says "(lead)". The WWC rows are the exception: their effect sizes and significance come directly from the WWC export, but each citation still needs independent verification. Most `url` values point to a DOI or the clearinghouse record. Where only a clearinghouse landing page was available, the row note says so and the verifier must find the study.

**Scope rule applied throughout.** A row is kept only if the program could be run by a community partner, after-school provider, mentoring or youth-development organization, health or family-service provider, or school partner, and it has an outcome on one of the 13 SPOTlight indicators. Grades and credits count only as on-track steps toward S3 and S4.

## Totals

- 325 rows: 204 positive, 101 null, 16 mixed, 4 negative.
- 30 rows are tagged in or related to the existing map (L-xx).
- Tiers: 310 tested, 5 research-associated, 7 below-bar, 3 "tested (check design)".

## 1. What Works Clearinghouse (study-findings data export)

- **Query and method.** POST to `https://ies.ed.gov/ncee/wwc/StudyFindings/AllDataExport` with every filter empty, which returns the full export. The older 2016 CSV URL returned 404.
- **Hits.** 14,483 findings rows in `Interventions_Studies_And_Findings.csv`.
- **Outcome-domain filter.** Domains were grouped as follows:
  - Attendance (S1).
  - Staying in school, completing school, graduation, progressing in school (S3, S4).
  - Credit accumulation (S3/S4 on-track).
  - Industry certification or credentials (S13).
  - Science (S9/S11).
  - Algebra (S10).
  - Mathematics (S7/S8).
  - Reading, literacy, comprehension, alphabetics, fluency, English language arts (S5/S6/S12).
  - General academic achievement.
- **Other filters.**
  - K-12 grade flags; where a study had no grade flags, the protocol had to be neither postsecondary nor early childhood.
  - Study rating "Meets WWC standards" (with or without reservations).
- **Screened.** 7,430 findings across 787 interventions. 77 interventions have attendance outcomes and 84 have dropout or graduation outcomes.
- **Kept.** About 120 intervention prefixes were mapped as partner-runnable, giving about 200 study rows before exclusions. After removing whole-school rows and merging duplicates, about 170 rows remain in the CSV.
  - Umbrella entries were split into named programs: "Dropout Prevention" and "IES funded" became CIS, Diplomas Now, Bridges/Puentes, Jobs for Youth, SDDAP sites, PGC, ALAS, QOP, and Guryan's Check & Connect.
  - Study arms were merged by WWC study URL: the Heppen texting arms and the Lasky-Fink notice arms.
- **Main exclusions.**
  - Whole-school reform: Early College, Small Schools, Green Dot and other charters, CTE schools, Linked Learning, Ninth Grade Academies.
  - District-adopted classroom core curricula and edtech.
  - Character or SEL curricula taught by teachers: Lessons in Character, Caring School Community, SSDP, ethnic studies, CRRP, PREP.
  - Postsecondary-only outcomes and preschool-only outcomes.
  - Studies that do not meet standards.
- **Supplement.** A search by citation name found WWC after-school studies the domain filter had missed:
  - READ 180 after-school, Kim et al. 2011 (WWC study 89781), and Fitzgerald & Hartry 2008 (WWC study 82599).
  - Roberts 2018, Perry 2014, Craig 2013 and Christodoulou 2017.
  - BELL, Accelerating Scholars and Reading Rescue.
- **Caveat for verifiers.** For absence and dropout outcomes, the sign of an effect in the WWC export depends on how the outcome is coded. Direction was taken from significant main findings with ES>0 or ES<0. Check the sign against the study.

## 2. Evidence for ESSA

- **Query and method.** `https://www.evidenceforessa.org/wp-json/wp/v2/program?per_page=100&page=1..12`.
- **Hits.** 1,200 program records, of which 196 are rated.
- **Screened.** 196.
- **Kept.** About 60 partner-relevant programs:
  - Tutoring: Ed Corps, Reading Corps, Math Corps, Saga, Experience Corps, Pirate Math, Number Rockets, Fraction Face-Off, GO Tutor Corps, and others.
  - Family engagement: TIPS, INSIGHTS, Ready4K, NNPS, TalkingPoints, FAST, PTHV, ParentCorps, Springboard Summer.
  - Attendance: EveryDay Labs, PowerSchool Attendance (texting), ATI-UP, BARR, SaferSanerSchools.
- **Main exclusions.** Whole-class curricula and software adopted by districts, and programs with only non-K-12 outcomes.
- **Note.** The E4E JSON gives a rating and an ES but no study URLs. Study citations need lookup.

## 3. Blueprints for Healthy Youth Development

- **Query and method.** Parsed the program-search page, then fetched fact sheets for programs with education outcomes (academic performance, truancy, dropout, graduation).
- **Hits.** 118 programs, 31 with education outcomes.
- **Screened.** 31.
- **Kept.** About 12, including:
  - Achievement Mentoring (Bry).
  - PACE Center for Girls (Millenky et al. 2019).
  - Eisenhower Quantum Opportunities.
  - BBBS.
  - Literacy First.
  - Olweus (self-report truancy).
  - Raising Healthy Children.
  - Wyman TOP (L-97).
  - YouthBuild.
  - Growth Mindset (L-90).
  - Number Rockets and Fraction Face-Off (via WWC/E4E rows).
  - ParentCorps and Positive Action (via WWC/E4E rows).
- **Main exclusions.** Outcomes limited to behavior or substance use; preschool-only programs; clinical treatment programs.

## 4. Social Programs That Work (Arnold Ventures)

- **Query and method.** Fetched the program pages for the K-12, early childhood, crime, postsecondary and employment policy areas.
- **Hits.** 38 programs across 5 policy areas.
- **Screened.** 38.
- **Kept.** 9:
  - Annual Book Fairs (Allington 2010).
  - Learning Accounts.
  - Saga.
  - SMART.
  - LiPS.
  - Check & Connect.
  - Montreal Prevention.
  - NFP (Kitzman 2010).
  - First Grade Classroom Prevention (Bradshaw 2009).
- **Main exclusions.** Postsecondary or employment-only outcomes, and health-only outcomes.

## 5. CrimeSolutions (NIJ)

- **Query and method.** Fetched the rated-programs listing, kept the programs tagged with education outcomes, and fetched their profiles.
- **Hits.** 666 rated programs, 74 with education outcomes.
- **Screened.** 74 (41 profiles fetched).
- **Kept.** About 33 programs, plus 2 practice profiles: Targeted Truancy Interventions (rated Effective for attendance) and Dropout Prevention Programs.
- **Main exclusions.** Juvenile-justice-only outcomes, self-report delinquency, programs delivered in facilities, and non-indicator school outcomes. Several Ineffective or Negative ratings were kept because they are null or negative evidence: Citizen Schools tests, My Life, ESTEP, CHP-AS, Success for Kids, Reconnecting Youth, PGC.

## 6. Campbell Collaboration

- **Query and method.** Crossref API, ISSN 1891-1803 (Campbell Systematic Reviews). About 20 queries: truancy, attendance, absenteeism, dropout, graduation, after-school, tutoring, mentoring, parent involvement, summer, school feeding, school-based health, service learning, mindfulness, sport, homework, exclusion, law enforcement, school start time, academic difficulties.
- **Hits.** 189 unique items.
- **Screened.** 189 (titles).
- **Kept.** 19 reviews plus 1 related review outside Campbell (Keppens & Spruyt 2020).
- **Main exclusions.** Topics outside K-12, reviews limited to low- and middle-income countries (except school feeding, which is logged with that caveat), protocols already superseded by a completed review, and non-indicator outcomes.
- **Note.** Semantic Scholar returned 429, so abstracts were not retrieved. Effects are marked "(lead)".

## 7. Results First Clearinghouse (Pew)

- **Query and method.** A direct fetch returned 403 with the Mozilla UA. With a Chrome UA the page loaded, but the database is an interactive app with no downloadable data. The Wayback Machine returned 429.
- **Hits.** Not accessible. 0 kept.
- **Note.** Results First aggregates ratings from the clearinghouses covered here (WWC, Blueprints, CrimeSolutions, SPW), so coverage is largely redundant.

## 8. Child Trends LINKS / What Works

- The database was retired in 2019. It was not reachable. 0 kept.

## 9. Youth.gov program directory

- The directory defers to CrimeSolutions ratings, which are covered in section 5. 0 additional kept.

## 10. National Dropout Prevention Center model programs

- The model-programs database URL (mpdb) redirects to an image or returns 404, so it is no longer reachable. 0 kept.
- Its content is partly duplicated by the WWC dropout domain and by the CrimeSolutions Dropout Prevention practice.

## 11. Attendance Works research list

- **Query and method.** wp-json `posts?categories=3` ("All Research Articles"), all pages.
- **Hits.** 196 posts.
- **Screened.** 196.
- **Kept.** 25. They cover:
  - School-based health and telemedicine.
  - School nurses.
  - Asthma care.
  - Flu vaccination.
  - Hand hygiene.
  - Breakfast and universal meals.
  - Transit passes.
  - Home visits (CT LEAP).
  - NNPS family-community partnerships.
  - Truancy diversion.
  - Two-generation programs.
  - Text-message spillovers.
  - After-school and OST attendance (Rochester, Baltimore).
  - SROs (a negative result).
- **Main exclusions.** Policy commentary, descriptive reports with no comparison group, and studies already in the map (Rogers & Feller, Robinson et al., Kraft & Rogers, Bergman & Chan).
- **Tiers.** Correlational and pre-post designs are tagged "below-bar" or "research-associated".

## 21st CCLC note

21st CCLC appears in the clearinghouses only through the national evaluation (James-Burdumy et al., already L-12) and through the Zief et al. 2006 Campbell after-school review (B-281, null on academics). Partner-delivered after-school studies in the WWC export add more:

- READ 180 after-school RCTs (B-164, B-165).
- Roberts 2018 (null), Perry 2014 and Craig 2013 (null).
- SPARK / Boys & Girls Clubs of Greater Milwaukee (B-040, B-041, B-058, B-121, B-150).
- Citizen Schools (CrimeSolutions).
- Boys & Girls Clubs Project Learn.
- United Way Rochester and Family League Baltimore attendance studies (Attendance Works).

State 21st CCLC evaluations are not indexed by these clearinghouses. They need an ERIC or state-report search, which is outside B's scope.
