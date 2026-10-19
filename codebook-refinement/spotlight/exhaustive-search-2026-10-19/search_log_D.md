# Search log D: citation chasing (backward and forward)

Searcher D. Run 2026-10-18 to 2026-10-19. Scope: backward (reference lists) and forward (citing works) chasing from the
meta-analyses, systematic reviews and major multi-site evaluations cited in `already_in_map.md`, plus a second wave of
reviews found in the first pass. Output: `candidates_D.csv` (150 leads). Every candidate is a lead; none is verified.

## Method

1. **Seeds.** 70 wave-1 seeds from `already_in_map.md` (meta-analyses, reviews, multi-site trials and key longitudinal
   studies across tutoring, after-school/21st CCLC, summer, SEL, mentoring, attendance nudges, family engagement,
   community schools/ISS, coaching, physical activity, arts, engagement, self-concept, summer jobs, CTE, school meals,
   income, preschool, health). 25 wave-2 seeds (T01-T25): reviews not in the map that wave 1 turned up (Kremer 2015,
   Eklund 2020, Maynard 2012 Campbell, Wilson 2011 Campbell, Freeman & Simonsen 2015, Vandell 2007, Cooper 2000,
   Lynch 2022, Sheldon 2007, Cipriano 2023, Child Trends ISS 2014, Maier 2017, Dietrichson 2017, Wang & Degol 2016,
   MDRC small schools, Page & Scott-Clayton 2016, BBBS school-based mentoring 2011, Neild & Balfanz 2006, Corcoran 2018,
   Ritter 2009, Hill & Tyson 2009, Fryer 2017). 8 retry seeds (suffix b) where the DOI lookup failed.
2. **Backward.** Semantic Scholar Graph API `/paper/{id}/references` (limit 1000, paged). Publishers (SAGE, Wiley, APA,
   T&F) hide reference lists for most journal seeds; then the Crossref `/works/{doi}` `reference` array was used.
   Crossref lists mark included studies with `*`, and those flags were kept.
3. **Forward.** Semantic Scholar `/paper/{id}/citations` (limit 1000, paged, capped at offset 9000). Durlak et al. 2011
   (8,349 citing) and Fredricks et al. 2004 (cap 9,000) were harvested close to fully. Duncan et al. 2007 gave 5,392.
4. **Rate limits.** About 1.1 s between calls, with up to 8 retries with backoff on 429. Semantic Scholar returned many
   429s (it was shared with the other searchers); the harvest took about 3 hours in total. The batch abstract endpoint
   failed under contention twice and succeeded after the harvest ended. OpenAlex was not used (budget exhausted). WebFetch
   was not used; all calls went through urllib/curl.
5. **Pooling and screening.** 50,738 unique titles across the 103 seed records (deduplicated by DOI, else normalised
   title). Automatic title screen: the title must name a program or exposure term AND an indicator-type outcome (attendance,
   absence, truancy, dropout, graduation, on-track, achievement, test scores, reading, math, science, proficiency,
   certification, credits, completion, attainment) AND a design term (meta-analysis, review, randomized, experiment,
   quasi, RD, evaluation, impact, effect, longitudinal, cohort, DiD, lottery, trial, matched), or carry a Crossref `*`
   included-study flag. Excluded: published before 1990; postsecondary or adult samples; protocols; low- and
   middle-income countries; clinical or disability-only samples (autism, ADHD, deaf); animal or medical studies.
   Result: 2,508 titles passed.
6. **Manual title screen.** All 2,508 passing titles read (lines 1-900 in full; 901 on, the subset that names a program
   term). About 245 kept for abstract review. Abstracts came from the Semantic Scholar batch endpoint (about 100 had one;
   the rest show only a title because the publisher withheld the abstract).
7. **Abstract screen.** 150 kept in `candidates_D.csv`. Where no abstract was available, `effect_as_reported` says
   "lead" or "verify" and anything from memory is marked "lead".

## Main reasons for exclusion (title and abstract stages)

- Outcome not an indicator: mental health, behaviour, self-report grades, motivation, interest, engagement, creativity,
  executive function. This was the largest group, driven by the Durlak 2011, Fredricks 2004 and Roorda 2011 forward sets.
- Population: preschool only (Duncan 2007 forward set), higher education, or low- and middle-income countries.
- Design: cross-sectional correlations, single-school pre-post studies, dissertations with no comparison group.
- Outcome measured by self-report or program records rather than school records or tests (e.g. BBBS 2023, Boys & Girls
  Clubs 2021). These were kept as `proposed_tier=none` where they bear on an existing link.
- Wrong seed resolution: T17 resolved to a charter-school paper instead of the teacher-absence paper; its 541 citing works
  were screened, and none was kept except as context. T19 and T22 did not resolve.
- Duplicates (working paper and journal versions merged into one row, with the earlier versions named in the notes).

## Per-seed counts

Columns: seed, label, map link, references retrieved (source), citing works retrieved, titles that passed the auto-screen
(a title can count for several seeds), candidates kept in the CSV (a candidate can count for several seeds).

| Seed | Paper | Map link | References | Citing | Auto-screen | Kept | Note |
|---|---|---|---|---|---|---|---|
| S01 | Nickow Oreopoulos Quan 2024 tutoring meta-analysis | L-01 | 127 (Crossref) | 77 | 26 | 2 |  |
| S02 | Kraft Schueler Falken 2024 tutoring at scale | L-01 | 61 (S2) | 15 | 9 | 1 |  |
| S03 | Guryan et al 2023 Not Too Late AER | L-03 | 0 (none) | 72 | 8 | 0 |  |
| S04 | Kim Quinn 2013 summer reading meta-analysis | L-06 | 109 (Crossref) | 210 | 55 | 3 |  |
| S05 | McCombs et al 2020 Every Summer Counts | L-07 | 0 (none) | 10 | 1 | 1 |  |
| S06 | Lauer et al 2006 OST meta-analysis | L-08 | 73 (Crossref) | 653 | 75 | 17 |  |
| S07 | Kidron Lindsay 2014 increased learning time meta-analysis | L-08 | 0 (none) | 65 | 3 | 0 |  |
| S08 | Black et al 2009 enhanced academic instruction afterschool | L-09 | 0 (none) | 45 | 5 | 1 |  |
| S09 | James-Burdumy Dynarski Deke 2007 21st CCLC national evaluation | L-12 | 28 (Crossref) | 70 | 8 | 6 |  |
| S10 | Durlak et al 2011 SEL meta-analysis | L-13 | 295 (Crossref) | 8349 | 146 | 11 |  |
| S11 | Ha McCarthy Strambler Cipriano 2025 SEL achievement meta-analysis | L-13 | 122 (S2) | 30 | 10 | 3 |  |
| S12 | Taylor et al 2017 SEL follow-up meta-analysis | L-14 | 63 (Crossref) | 2140 | 31 | 4 |  |
| S13 | Heller et al 2017 BAM QJE | L-15 | 57 (S2) | 392 | 10 | 2 |  |
| S14 | DuBois et al 2011 mentoring meta-analysis | L-22 | 236 (Crossref) | 951 | 23 | 3 |  |
| S15 | Raposa et al 2019 mentoring meta-analysis | L-22 | 77 (Crossref) | 334 | 7 | 3 |  |
| S16 | Roorda et al 2011 teacher-student relationships meta-analysis | L-26 | 143 (Crossref) | 2464 | 90 | 2 |  |
| S17 | Rogers Feller 2018 absence nudges | L-27 | 57 (Crossref) | 174 | 22 | 13 |  |
| S18 | Robinson Lee Dearing Rogers 2018 early grades absenteeism | L-27 | 60 (Crossref) | 154 | 32 | 14 |  |
| S19 | Bergman Chan 2021 parent text messaging | L-29 | 0 (none) | 25 | 1 | 1 |  |
| S20 | Kraft Rogers 2015 teacher-parent communication | L-29 | 27 (Crossref) | 0 | 2 | 0 | S2 lookup failed (429/404); see retry row |
| S20b | Kraft Rogers 2015 teacher-parent communication | L-29 | 8 (Crossref) | 235 | 17 | 1 |  |
| S21 | Bergman 2021 JPE information frictions | L-31 | 51 (Crossref) | 171 | 12 | 2 |  |
| S22 | Jeynes 2007 parental involvement meta-analysis | L-34 | 95 (Crossref) | 1257 | 79 | 2 |  |
| S23 | Jeynes 2012 parental involvement programs meta-analysis | L-34 | 90 (Crossref) | 775 | 50 | 4 |  |
| S24 | Walsh et al 2014 City Connects AERJ | L-40 | 76 (Crossref) | 78 | 5 | 2 |  |
| S25 | Lee-St John et al 2018 City Connects dropout | L-40 | 101 (S2) | 58 | 14 | 5 |  |
| S26 | Durlak Weissberg Pachan 2010 afterschool meta-analysis | L-43 | 114 (Crossref) | 1198 | 35 | 15 |  |
| S27 | Kraft Blazar Hogan 2018 coaching meta-analysis | L-45 | 152 (Crossref) | 1220 | 60 | 1 |  |
| S28 | Alvarez-Bueno et al 2017 physical activity meta-analysis | L-59 | 59 (Crossref) | 344 | 56 | 2 |  |
| S29 | Singh et al 2019 physical activity review | L-59 | 92 (Crossref) | 504 | 55 | 0 |  |
| S30 | Vasilopoulos et al 2023 PA multilevel meta-analysis | L-60 | 205 (S2) | 46 | 38 | 1 |  |
| S31 | Sala Gobet 2020 music training meta-analysis | L-50 | 81 (S2) | 175 | 6 | 1 |  |
| S32 | See Kokotsaki 2016 arts education review | L-50 | 208 (Crossref) | 0 | 29 | 0 | S2 lookup failed (429/404); see retry row |
| S32b | See Kokotsaki 2016 arts education review | L-50 | 0 (none) | 25 | 2 | 0 |  |
| S33 | Bowen Kisida 2023 arts education RCT | L-49 | 76 (Crossref) | 24 | 4 | 1 |  |
| S34 | Fortson et al 2013 Playworks | L-61 | 0 (none) | 31 | 0 | 0 |  |
| S35 | Fredricks Blumenfeld Paris 2004 school engagement review | L-63 | 165 (Crossref) | 9000 (cap 9000) | 252 | 4 |  |
| S36 | Heller 2014 summer jobs Science | L-70 | 88 (Crossref) | 175 | 6 | 1 |  |
| S37 | Leos-Urbel 2014 summer job worth | L-71 | 40 (Crossref) | 46 | 4 | 0 |  |
| S38 | Modestino Paulsen 2023 SYEP | L-71 | 57 (Crossref) | 6 | 5 | 2 |  |
| S39 | Schwartz et al 2021 SYEP Quantitative Economics | L-73 | 28 (Crossref) | 0 | 1 | 0 | S2 lookup failed (429/404); see retry row |
| S39b | Schwartz et al 2021 SYEP Quantitative Economics | L-73 | 0 (none) | 13 | 1 | 0 |  |
| S40 | Dougherty 2018 CTE Massachusetts | L-74 | 70 (Crossref) | 87 | 6 | 3 |  |
| S41 | Brunner Dougherty Ross 2023 CTE Connecticut | L-74 | 27 (Crossref) | 0 | 3 | 1 | S2 lookup failed (429/404); see retry row |
| S41b | Brunner Dougherty Ross 2023 CTE Connecticut | L-74 | 0 (none) | 69 | 4 | 0 |  |
| S42 | Kemple Snipes 2000 Career Academies | L-77 | 0 (none) | 299 | 23 | 4 |  |
| S43 | Yeager et al 2019 national growth mindset experiment | L-90 | 45 (S2) | 1231 | 41 | 2 |  |
| S44 | Valentine DuBois Cooper 2004 self-beliefs meta-analysis | L-91 | 145 (S2) | 1282 | 136 | 0 |  |
| S45 | Wu et al 2021 self-concept longitudinal meta-analysis | L-91 | 145 (Crossref) | 198 | 76 | 0 |  |
| S46 | Liu Lee Gershenson 2021 absences | L-82 | 51 (Crossref) | 140 | 32 | 5 |  |
| S47 | Gottfried 2010 attendance IV | L-83 | 69 (Crossref) | 285 | 46 | 10 |  |
| S48 | Gubbels van der Put Assink 2019 absenteeism dropout risk factors meta-analysis | L-105 | 130 (S2) | 558 | 50 | 5 |  |
| S49 | Balfanz Herzog Mac Iver 2007 early warning | L-100 | 56 (Crossref) | 884 | 63 | 15 |  |
| S50 | Middleton Watson Anderson 2025 persistent absence systematic review | L-67 | 87 (S2) | 8 | 11 | 5 |  |
| S51 | Schwartz Rothbart 2020 universal free meals | L-85 | 40 (Crossref) | 105 | 5 | 3 |  |
| S52 | Ruffini 2022 CEP achievement | L-85 | 0 (none) | 68 | 9 | 5 |  |
| S53 | Hanselman et al 2017 self-affirmation replications | L-21 | 57 (S2) | 82 | 6 | 1 |  |
| S54 | Borman et al 2019 belonging reappraisal | L-17 | 35 (S2) | 63 | 5 | 1 |  |
| S55 | Taylor? Raposa covered; Talsma et al 2018 self-efficacy meta-analysis | L-91 | 100 (S2) | 432 | 30 | 0 |  |
| S56 | Dahl Lochner 2012 EITC | L-88 | 32 (Crossref) | 0 | 0 | 0 | S2 lookup failed (429/404); see retry row |
| S56b | Dahl Lochner 2012 EITC | L-88 | 9 (Crossref) | 1124 | 76 | 4 |  |
| S57 | Wang Fredricks 2014 engagement dropout | L-106 | 71 (S2) | 766 | 31 | 2 |  |
| S58 | Durkin et al 2022 Tennessee pre-K | L-95 | 68 (S2) | 90 | 10 | 0 |  |
| S59 | Mahoney Cairns 1997 extracurricular dropout | L-56 | 0 (none) | 858 | 31 | 1 |  |
| S60 | Gray-Lobe Pathak Walters 2023 Boston preschool | L-95 | 111 (Crossref) | 0 | 6 | 0 | S2 lookup failed (429/404); see retry row |
| S60b | Gray-Lobe Pathak Walters 2023 Boston preschool | L-95 | 0 (none) | 139 | 8 | 0 |  |
| S61 | Lovenheim Reback Wedenoja 2016 SBHC | L-65 | 0 (none) | 22 | 1 | 1 |  |
| S62 | Catterall Dumais Hampden-Thompson 2012 arts at-risk | L-53 | 0 (none) | 305 | 23 | 2 |  |
| S63 | Allensworth Easton 2005 on-track indicator | L-81 | 0 (none) | 0 | 0 | 0 | S2 lookup failed (429/404); see retry row |
| S63b | Allensworth Easton 2007 what matters on-track | L-100 | 0 (none) | 441 | 47 | 3 |  |
| S64 | Farrington et al 2012 noncognitive factors | L-93 | 0 (none) | 931 | 41 | 3 |  |
| S65 | Jackson 2018 non-test score outcomes JPE | L-20 | 57 (Crossref) | 478 | 32 | 3 |  |
| S66 | Neitzel et al 2021 vision RCT | L-64 | 34 (Crossref) | 54 | 4 | 3 |  |
| S67 | Parise et al 2017 Communities In Schools RCT | L-41 | 0 (none) | 12 | 1 | 1 |  |
| S68 | Rogers et al 2017 REL attendance nudge | L-27 | 0 (none) | 29 | 6 | 4 |  |
| S69 | Barile et al 2012 teacher-student relationship climate | L-105 | 37 (Crossref) | 0 | 2 | 0 |  |
| S69b | Barile et al 2012 teacher-student relationship climate | L-105 | 37 (Crossref) | 168 | 12 | 0 |  |
| S70 | Duncan et al 2007 school readiness | L-104 | 0 (none) | 5392 | 418 | 2 |  |
| T01 | Kremer et al 2015 after-school attendance externalizing meta-analysis | new | 93 (S2) | 123 | 13 | 6 |  |
| T02 | Eklund et al 2022 attendance interventions meta-analysis | new | 69 (Crossref) | 52 | 9 | 0 |  |
| T03 | Maynard et al 2012 truancy interventions Campbell review | new | 220 (S2) | 47 | 27 | 2 |  |
| T04 | Wilson et al 2011 dropout prevention Campbell review | new | 20 (S2) | 124 | 16 | 2 |  |
| T05 | Freeman Simonsen 2015 dropout interventions review | new | 90 (Crossref) | 198 | 15 | 0 |  |
| T06 | Vandell Reisner Pierce 2007 promising afterschool programs | new | 0 (none) | 168 | 17 | 3 |  |
| T07 | Cooper et al 2000 summer school meta-analysis | new | 0 (none) | 419 | 60 | 6 |  |
| T08 | Lynch An Mancenido 2023 summer programs meta-analysis | new | 112 (Crossref) | 30 | 9 | 1 |  |
| T09 | Sheldon Jung? Smith et al family engagement attendance; Sheldon 2007 attendance partnerships | new | 46 (Crossref) | 301 | 36 | 2 |  |
| T10 | Cipriano et al 2023 SEL meta-analysis | new | 129 (Crossref) | 629 | 10 | 2 |  |
| T11 | Moore et al Child Trends integrated student supports review | new | 0 (none) | 30 | 3 | 0 |  |
| T12 | Maier et al 2017 community schools review | new | 0 (none) | 99 | 2 | 0 |  |
| T13 | Robinson Kraft Loeb? Kraft Falken 2021 tutoring blueprint; Dietrichson 2017 low SES interventions meta | new | 77 (Crossref) | 252 | 43 | 1 |  |
| T14 | Wang Degol 2016 school climate review | new | 237 (Crossref) | 1371 | 48 | 0 |  |
| T15 | Heppen? Bloom Unterman small schools of choice | new | 63 (Crossref) | 104 | 12 | 3 |  |
| T16 | Page Scott-Clayton 2016 college access review | new | 203 (Crossref) | 318 | 17 | 0 |  |
| T17 | Smith et al 2020 attendance family nudge? Gershenson teacher absence | new | 6 (Crossref) | 541 | 48 | 0 |  |
| T18 | Herrera Grossman Kauh McMaken 2011 school-based mentoring BBBS | new | 65 (Crossref) | 275 | 15 | 0 |  |
| T19 | Sanders? Grossman Tierney 1998 BBBS | new | 0 (none) | 0 | 0 | 0 | S2 lookup failed (429/404); see retry row |
| T20 | Neild Balfanz 2006 Unfulfilled Promise | L-81 | 0 (none) | 196 | 17 | 1 |  |
| T21 | Hattie? Durlak 2022 SEL review; Corcoran 2018 SEL achievement meta | new | 126 (Crossref) | 447 | 30 | 1 |  |
| T22 | Fischer Theis 2014 after-school quality? Neild? Vandell 2022 afterschool review | new | 0 (none) | 0 | 0 | 0 | S2 lookup failed (429/404); see retry row |
| T23 | Ritter et al 2009 volunteer tutoring meta | new | 49 (Crossref) | 194 | 38 | 3 |  |
| T24 | Hill Mulcahy? Hill Tyson 2009 parental involvement middle school meta | new | 141 (S2) | 2291 | 142 | 1 |  |
| T25 | Fryer 2017 production of human capital field experiments | new | 379 (Crossref) | 157 | 92 | 2 |  |
Notes on the table: where "References" is 0 (none), the reference list was neither in Semantic Scholar nor in Crossref
(reports such as RAND, MDRC, NCEE and AIR, and several NBER/QJE papers). For those, only forward chasing ran. Their
reference lists should be taken from the PDFs in a later pass; the highest priority are McCombs et al. 2020 (RAND),
Kidron & Lindsay 2014, Black et al. 2009, Guryan et al. 2023 and Parise et al. 2017.

## Totals

- Seed records harvested: 103 (70 wave 1, 25 wave 2, 8 retries); 95 resolved.
- Unique titles pooled: 50,738. Passed the auto-screen: 2,508. Kept after the title screen: about 245.
- Kept in `candidates_D.csv`: 150. `already_in_map` is filled only for the one row that reports the same evaluation as a
  map link (James-Burdumy et al. 2008, same study as L-12). 88 other rows bear on an existing link; the notes say
  "Bears on existing link L-xx". The other 61 bear on no existing link.
- Direction: 63 positive, 18 null, 7 mixed, 5 negative, 57 lead/unverified.
- Proposed tier: 116 tested, 16 research-associated, 18 none (fails the protocol, kept for context).

## Gaps and next steps

- Get the reference lists of report-type seeds from their PDFs (list above).
- Kremer et al. 2015 (D-001) references include 21st CCLC state evaluations (Florida 2007, the national behaviour paper)
  that were added. Other state 21st CCLC evaluations (Texas, New Jersey, Washington, Rhode Island) did not surface by
  citation; they need direct searches of state education agency sites (searcher A/B scope).
- Eklund 2020 and Strelitz 2026 have included-study lists that should be expanded study by study for S1.
