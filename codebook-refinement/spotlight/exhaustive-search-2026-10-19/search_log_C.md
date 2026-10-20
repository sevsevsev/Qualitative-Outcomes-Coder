# Search log C: ERIC API outcome-by-program grid

- Searcher: C (subagent). Dates run: 2026-10-18 to 2026-10-19.
- Source: ERIC API, https://api.ies.ed.gov/eric/ (fetched with curl; JSON; rows=200 with `start` paging).
- Scripts (scratch, not in this folder): grid.py, grid2.py, prescreen.py, stage2.py, shortlist.py, kept.py, build_out.py.
- All kept studies are **leads only**. Effects quoted or paraphrased from ERIC abstracts; anything marked "lead" was not stated in the abstract and must be checked in full text by an independent verifier.

## Method

1. **Grid.** 4 outcome blocks (attendance; dropout/completion; achievement incl. PSSA, Keystone, end-of-course; CTE/industry certification) crossed with 26 program blocks (mentoring, tutoring, afterschool/OST, 21st CCLC, summer, community schools, wraparound/ISS, family engagement, school health, vision/asthma/dental, meals, arts, music, sports/physical activity, service learning, youth development, SEL, college access, work-based learning, career academies, attendance interventions/nudges, transportation, housing/homelessness, case management, violence/restorative, teacher attendance) = 104 cells. Every query also carried `publicationdateyear:[1990 TO 2026]`.
2. **Passes per cell.** `all` = outcome AND program AND design block (randomized, random assignment, quasi-experimental, comparison group, regression discontinuity, meta-analysis, longitudinal, propensity score, difference-in-differences); `peer` = same plus `peerreviewed:T`; `nodesign` = outcome AND program with no design block (retrieval capped at 600 records; cells over the cap were counted, not retrieved, since their design-filtered `all` pass was already retrieved in full).
3. **21st CCLC sweeps.** `sweep` = ("21st Century Community Learning Centers" OR "21st CCLC" OR "Twenty-First Century Community Learning"), no outcome or design filter; `sweep2` = "Community Learning Centers". Both retrieved in full.
4. **De-duplication** by ERIC id across all queries.
5. **Stage-1 rule screen** on title, abstract, subject and education level: pre-1990; postsecondary/adult only; low- or middle-income country (high-income systems kept); no protocol outcome term; no design term.
6. **Stage-2 rule screen**: stronger design regex; outcome must be a protocol indicator or an on-track step (not generic reading/math/credit only); guides/opinion/books removed.
7. **Title screen** of all stage-2 passes, then **abstract screen** of picks, plus manual rescue of studies seen in the excluded design buckets (for example day-level fixed-effects and teacher-absence studies that the design regex missed).

## Totals

| Measure | Count |
|---|---|
| Queries run | 314 (all 104, peer 104, nodesign 104, sweep 1, sweep2 1) |
| Sum of hit counts | 34,956 |
| Records retrieved (sum over queries) | 23,888 |
| Unique records (by ERIC id) | 14,205 |
| Stage-1 PASS | 2,235 |
| Stage-2 PASS, all title-screened | 1,945 |
| Screened on abstract | 316 (286 picks + 30 rescues) |
| Kept (candidates_C.csv) | 222 |
| Kept with already_in_map filled (same study, or a related map link noted in brackets) | 54 |
| Kept with already_in_map empty | 168 |

Kept by proposed tier (first word of tier field): tested: 163; research-associated: 34; below bar: 23; out of scope: 2.

## Exclusions by reason (unique records)

| Reason | Records |
|---|---|
| no eligible design in abstract | 7,697 |
| postsecondary/adult only | 2,381 |
| PASS | 1,945 |
| no indicator outcome in abstract | 1,303 |
| non-US system unlikely to transfer | 589 |
| stage2: outcome term only generic (reading/math/credit) | 229 |
| stage2: design term only weak (e.g. fixed effects/matching) or absent | 53 |
| stage2: guide/opinion/book | 8 |

Title screen: 1,945 stage-2 passes read by title; 286 picked for abstract screening; the rest excluded by title (off-protocol outcome, non-K-12, descriptive or implementation-only, duplicate report). Abstract screen: 316 read, 222 kept (including below-bar items kept for completeness, marked "below bar").

## Query log

| # | Outcome | Program | Pass | Hits | Retrieved | New unique | Note |
|---|---|---|---|---|---|---|---|
| 1 | attendance | mentoring | all | 71 | 71 | 71 |  |
| 2 | attendance | mentoring | peer | 36 | 36 | 0 |  |
| 3 | attendance | tutoring | all | 54 | 54 | 53 |  |
| 4 | attendance | tutoring | peer | 38 | 38 | 0 |  |
| 5 | attendance | afterschool_ost | all | 55 | 55 | 44 |  |
| 6 | attendance | afterschool_ost | peer | 31 | 31 | 0 |  |
| 7 | attendance | 21cclc | all | 6 | 6 | 1 |  |
| 8 | attendance | 21cclc | peer | 2 | 2 | 0 |  |
| 9 | attendance | summer | all | 37 | 37 | 34 |  |
| 10 | attendance | summer | peer | 16 | 16 | 0 |  |
| 11 | attendance | community_schools | all | 8 | 8 | 5 |  |
| 12 | attendance | community_schools | peer | 5 | 5 | 0 |  |
| 13 | attendance | wraparound_iss | all | 16 | 16 | 13 |  |
| 14 | attendance | wraparound_iss | peer | 6 | 6 | 0 |  |
| 15 | attendance | family_engagement | all | 78 | 78 | 63 |  |
| 16 | attendance | family_engagement | peer | 52 | 52 | 0 |  |
| 17 | attendance | school_health | all | 53 | 53 | 50 |  |
| 18 | attendance | school_health | peer | 44 | 44 | 0 |  |
| 19 | attendance | vision_asthma_dental | all | 31 | 31 | 20 |  |
| 20 | attendance | vision_asthma_dental | peer | 21 | 21 | 0 |  |
| 21 | attendance | nutrition_meals | all | 42 | 42 | 35 |  |
| 22 | attendance | nutrition_meals | peer | 31 | 31 | 0 |  |
| 23 | attendance | arts | all | 13 | 13 | 13 |  |
| 24 | attendance | arts | peer | 9 | 9 | 0 |  |
| 25 | attendance | music | all | 14 | 14 | 9 |  |
| 26 | attendance | music | peer | 6 | 6 | 0 |  |
| 27 | attendance | sports_pa | all | 45 | 45 | 35 |  |
| 28 | attendance | sports_pa | peer | 37 | 37 | 0 |  |
| 29 | attendance | service_learning | all | 21 | 21 | 11 |  |
| 30 | attendance | service_learning | peer | 7 | 7 | 0 |  |
| 31 | attendance | youth_development | all | 33 | 33 | 19 |  |
| 32 | attendance | youth_development | peer | 16 | 16 | 0 |  |
| 33 | attendance | sel | all | 42 | 42 | 30 |  |
| 34 | attendance | sel | peer | 19 | 19 | 0 |  |
| 35 | attendance | college_access | all | 99 | 99 | 89 |  |
| 36 | attendance | college_access | peer | 60 | 60 | 0 |  |
| 37 | attendance | work_based | all | 17 | 17 | 14 |  |
| 38 | attendance | work_based | peer | 6 | 6 | 0 |  |
| 39 | attendance | career_academies | all | 45 | 45 | 35 |  |
| 40 | attendance | career_academies | peer | 20 | 20 | 0 |  |
| 41 | attendance | attendance_interventions | all | 19 | 19 | 14 |  |
| 42 | attendance | attendance_interventions | peer | 14 | 14 | 0 |  |
| 43 | attendance | transportation | all | 18 | 18 | 13 |  |
| 44 | attendance | transportation | peer | 8 | 8 | 0 |  |
| 45 | attendance | housing_homeless | all | 47 | 47 | 37 |  |
| 46 | attendance | housing_homeless | peer | 24 | 24 | 0 |  |
| 47 | attendance | case_management | all | 18 | 18 | 4 |  |
| 48 | attendance | case_management | peer | 7 | 7 | 0 |  |
| 49 | attendance | violence_restorative | all | 13 | 13 | 9 |  |
| 50 | attendance | violence_restorative | peer | 9 | 9 | 0 |  |
| 51 | attendance | teacher_attendance | all | 41 | 41 | 32 |  |
| 52 | attendance | teacher_attendance | peer | 18 | 18 | 0 |  |
| 53 | dropout_completion | mentoring | all | 108 | 108 | 82 |  |
| 54 | dropout_completion | mentoring | peer | 66 | 66 | 0 |  |
| 55 | dropout_completion | tutoring | all | 54 | 54 | 38 |  |
| 56 | dropout_completion | tutoring | peer | 24 | 24 | 0 |  |
| 57 | dropout_completion | afterschool_ost | all | 28 | 28 | 20 |  |
| 58 | dropout_completion | afterschool_ost | peer | 10 | 10 | 0 |  |
| 59 | dropout_completion | 21cclc | all | 1 | 1 | 0 |  |
| 60 | dropout_completion | 21cclc | peer | 0 | 0 | 0 |  |
| 61 | dropout_completion | summer | all | 57 | 57 | 32 |  |
| 62 | dropout_completion | summer | peer | 35 | 35 | 0 |  |
| 63 | dropout_completion | community_schools | all | 3 | 3 | 2 |  |
| 64 | dropout_completion | community_schools | peer | 1 | 1 | 0 |  |
| 65 | dropout_completion | wraparound_iss | all | 20 | 20 | 8 |  |
| 66 | dropout_completion | wraparound_iss | peer | 8 | 8 | 0 |  |
| 67 | dropout_completion | family_engagement | all | 43 | 43 | 28 |  |
| 68 | dropout_completion | family_engagement | peer | 24 | 24 | 0 |  |
| 69 | dropout_completion | school_health | all | 27 | 27 | 21 |  |
| 70 | dropout_completion | school_health | peer | 15 | 15 | 0 |  |
| 71 | dropout_completion | vision_asthma_dental | all | 18 | 18 | 13 |  |
| 72 | dropout_completion | vision_asthma_dental | peer | 8 | 8 | 0 |  |
| 73 | dropout_completion | nutrition_meals | all | 13 | 13 | 5 |  |
| 74 | dropout_completion | nutrition_meals | peer | 11 | 11 | 0 |  |
| 75 | dropout_completion | arts | all | 13 | 13 | 13 |  |
| 76 | dropout_completion | arts | peer | 8 | 8 | 0 |  |
| 77 | dropout_completion | music | all | 6 | 6 | 3 |  |
| 78 | dropout_completion | music | peer | 2 | 2 | 0 |  |
| 79 | dropout_completion | sports_pa | all | 40 | 40 | 29 |  |
| 80 | dropout_completion | sports_pa | peer | 28 | 28 | 0 |  |
| 81 | dropout_completion | service_learning | all | 44 | 44 | 27 |  |
| 82 | dropout_completion | service_learning | peer | 22 | 22 | 0 |  |
| 83 | dropout_completion | youth_development | all | 31 | 31 | 10 |  |
| 84 | dropout_completion | youth_development | peer | 11 | 11 | 0 |  |
| 85 | dropout_completion | sel | all | 27 | 27 | 16 |  |
| 86 | dropout_completion | sel | peer | 18 | 18 | 0 |  |
| 87 | dropout_completion | college_access | all | 154 | 154 | 102 |  |
| 88 | dropout_completion | college_access | peer | 73 | 73 | 0 |  |
| 89 | dropout_completion | work_based | all | 64 | 64 | 50 |  |
| 90 | dropout_completion | work_based | peer | 30 | 30 | 0 |  |
| 91 | dropout_completion | career_academies | all | 118 | 118 | 60 |  |
| 92 | dropout_completion | career_academies | peer | 51 | 51 | 0 |  |
| 93 | dropout_completion | attendance_interventions | all | 13 | 13 | 7 |  |
| 94 | dropout_completion | attendance_interventions | peer | 8 | 8 | 0 |  |
| 95 | dropout_completion | transportation | all | 22 | 22 | 7 |  |
| 96 | dropout_completion | transportation | peer | 9 | 9 | 0 |  |
| 97 | dropout_completion | housing_homeless | all | 42 | 42 | 25 |  |
| 98 | dropout_completion | housing_homeless | peer | 17 | 17 | 0 |  |
| 99 | dropout_completion | case_management | all | 23 | 23 | 7 |  |
| 100 | dropout_completion | case_management | peer | 9 | 9 | 0 |  |
| 101 | dropout_completion | violence_restorative | all | 7 | 7 | 2 |  |
| 102 | dropout_completion | violence_restorative | peer | 3 | 3 | 0 |  |
| 103 | dropout_completion | teacher_attendance | all | 4 | 4 | 0 |  |
| 104 | dropout_completion | teacher_attendance | peer | 2 | 2 | 0 |  |
| 105 | achievement | mentoring | all | 75 | 75 | 55 |  |
| 106 | achievement | mentoring | peer | 47 | 47 | 0 |  |
| 107 | achievement | tutoring | all | 262 | 262 | 219 |  |
| 108 | achievement | tutoring | peer | 168 | 168 | 0 |  |
| 109 | achievement | afterschool_ost | all | 103 | 103 | 56 |  |
| 110 | achievement | afterschool_ost | peer | 56 | 56 | 0 |  |
| 111 | achievement | 21cclc | all | 10 | 10 | 3 |  |
| 112 | achievement | 21cclc | peer | 1 | 1 | 0 |  |
| 113 | achievement | summer | all | 115 | 115 | 92 |  |
| 114 | achievement | summer | peer | 62 | 62 | 0 |  |
| 115 | achievement | community_schools | all | 13 | 13 | 8 |  |
| 116 | achievement | community_schools | peer | 6 | 6 | 0 |  |
| 117 | achievement | wraparound_iss | all | 7 | 7 | 1 |  |
| 118 | achievement | wraparound_iss | peer | 4 | 4 | 0 |  |
| 119 | achievement | family_engagement | all | 155 | 155 | 115 |  |
| 120 | achievement | family_engagement | peer | 97 | 97 | 0 |  |
| 121 | achievement | school_health | all | 24 | 24 | 10 |  |
| 122 | achievement | school_health | peer | 16 | 16 | 0 |  |
| 123 | achievement | vision_asthma_dental | all | 42 | 42 | 34 |  |
| 124 | achievement | vision_asthma_dental | peer | 25 | 25 | 0 |  |
| 125 | achievement | nutrition_meals | all | 52 | 52 | 31 |  |
| 126 | achievement | nutrition_meals | peer | 38 | 38 | 0 |  |
| 127 | achievement | arts | all | 43 | 43 | 38 |  |
| 128 | achievement | arts | peer | 34 | 34 | 0 |  |
| 129 | achievement | music | all | 45 | 45 | 32 |  |
| 130 | achievement | music | peer | 24 | 24 | 0 |  |
| 131 | achievement | sports_pa | all | 56 | 56 | 40 |  |
| 132 | achievement | sports_pa | peer | 42 | 42 | 0 |  |
| 133 | achievement | service_learning | all | 24 | 24 | 8 |  |
| 134 | achievement | service_learning | peer | 10 | 10 | 0 |  |
| 135 | achievement | youth_development | all | 23 | 23 | 11 |  |
| 136 | achievement | youth_development | peer | 17 | 17 | 0 |  |
| 137 | achievement | sel | all | 68 | 68 | 38 |  |
| 138 | achievement | sel | peer | 37 | 37 | 0 |  |
| 139 | achievement | college_access | all | 39 | 39 | 13 |  |
| 140 | achievement | college_access | peer | 21 | 21 | 0 |  |
| 141 | achievement | work_based | all | 25 | 25 | 15 |  |
| 142 | achievement | work_based | peer | 10 | 10 | 0 |  |
| 143 | achievement | career_academies | all | 38 | 38 | 20 |  |
| 144 | achievement | career_academies | peer | 17 | 17 | 0 |  |
| 145 | achievement | attendance_interventions | all | 18 | 18 | 7 |  |
| 146 | achievement | attendance_interventions | peer | 8 | 8 | 0 |  |
| 147 | achievement | transportation | all | 9 | 9 | 1 |  |
| 148 | achievement | transportation | peer | 3 | 3 | 0 |  |
| 149 | achievement | housing_homeless | all | 34 | 34 | 18 |  |
| 150 | achievement | housing_homeless | peer | 13 | 13 | 0 |  |
| 151 | achievement | case_management | all | 7 | 7 | 0 |  |
| 152 | achievement | case_management | peer | 2 | 2 | 0 |  |
| 153 | achievement | violence_restorative | all | 4 | 4 | 2 |  |
| 154 | achievement | violence_restorative | peer | 3 | 3 | 0 |  |
| 155 | achievement | teacher_attendance | all | 14 | 14 | 1 |  |
| 156 | achievement | teacher_attendance | peer | 7 | 7 | 0 |  |
| 157 | cte | mentoring | all | 8 | 8 | 7 |  |
| 158 | cte | mentoring | peer | 3 | 3 | 0 |  |
| 159 | cte | tutoring | all | 1 | 1 | 0 |  |
| 160 | cte | tutoring | peer | 0 | 0 | 0 |  |
| 161 | cte | afterschool_ost | all | 1 | 1 | 0 |  |
| 162 | cte | afterschool_ost | peer | 1 | 1 | 0 |  |
| 163 | cte | 21cclc | all | 0 | 0 | 0 |  |
| 164 | cte | 21cclc | peer | 0 | 0 | 0 |  |
| 165 | cte | summer | all | 0 | 0 | 0 |  |
| 166 | cte | summer | peer | 0 | 0 | 0 |  |
| 167 | cte | community_schools | all | 0 | 0 | 0 |  |
| 168 | cte | community_schools | peer | 0 | 0 | 0 |  |
| 169 | cte | wraparound_iss | all | 0 | 0 | 0 |  |
| 170 | cte | wraparound_iss | peer | 0 | 0 | 0 |  |
| 171 | cte | family_engagement | all | 1 | 1 | 0 |  |
| 172 | cte | family_engagement | peer | 0 | 0 | 0 |  |
| 173 | cte | school_health | all | 2 | 2 | 1 |  |
| 174 | cte | school_health | peer | 0 | 0 | 0 |  |
| 175 | cte | vision_asthma_dental | all | 2 | 2 | 1 |  |
| 176 | cte | vision_asthma_dental | peer | 0 | 0 | 0 |  |
| 177 | cte | nutrition_meals | all | 0 | 0 | 0 |  |
| 178 | cte | nutrition_meals | peer | 0 | 0 | 0 |  |
| 179 | cte | arts | all | 0 | 0 | 0 |  |
| 180 | cte | arts | peer | 0 | 0 | 0 |  |
| 181 | cte | music | all | 0 | 0 | 0 |  |
| 182 | cte | music | peer | 0 | 0 | 0 |  |
| 183 | cte | sports_pa | all | 3 | 3 | 3 |  |
| 184 | cte | sports_pa | peer | 3 | 3 | 0 |  |
| 185 | cte | service_learning | all | 5 | 5 | 4 |  |
| 186 | cte | service_learning | peer | 1 | 1 | 0 |  |
| 187 | cte | youth_development | all | 1 | 1 | 1 |  |
| 188 | cte | youth_development | peer | 0 | 0 | 0 |  |
| 189 | cte | sel | all | 2 | 2 | 1 |  |
| 190 | cte | sel | peer | 0 | 0 | 0 |  |
| 191 | cte | college_access | all | 24 | 24 | 8 |  |
| 192 | cte | college_access | peer | 7 | 7 | 0 |  |
| 193 | cte | work_based | all | 30 | 30 | 12 |  |
| 194 | cte | work_based | peer | 14 | 14 | 0 |  |
| 195 | cte | career_academies | all | 318 | 318 | 173 |  |
| 196 | cte | career_academies | peer | 198 | 198 | 0 |  |
| 197 | cte | attendance_interventions | all | 0 | 0 | 0 |  |
| 198 | cte | attendance_interventions | peer | 0 | 0 | 0 |  |
| 199 | cte | transportation | all | 2 | 2 | 1 |  |
| 200 | cte | transportation | peer | 0 | 0 | 0 |  |
| 201 | cte | housing_homeless | all | 1 | 1 | 0 |  |
| 202 | cte | housing_homeless | peer | 1 | 1 | 0 |  |
| 203 | cte | case_management | all | 0 | 0 | 0 |  |
| 204 | cte | case_management | peer | 0 | 0 | 0 |  |
| 205 | cte | violence_restorative | all | 0 | 0 | 0 |  |
| 206 | cte | violence_restorative | peer | 0 | 0 | 0 |  |
| 207 | cte | teacher_attendance | all | 0 | 0 | 0 |  |
| 208 | cte | teacher_attendance | peer | 0 | 0 | 0 |  |
| 209 | attendance | mentoring | nodesign | 540 | 540 | 469 |  |
| 210 | attendance | tutoring | nodesign | 449 | 449 | 347 |  |
| 211 | attendance | afterschool_ost | nodesign | 456 | 456 | 337 |  |
| 212 | attendance | 21cclc | nodesign | 28 | 28 | 1 |  |
| 213 | attendance | summer | nodesign | 292 | 292 | 191 |  |
| 214 | attendance | community_schools | nodesign | 128 | 128 | 101 |  |
| 215 | attendance | wraparound_iss | nodesign | 77 | 77 | 43 |  |
| 216 | attendance | family_engagement | nodesign | 668 | 0 | 0 | over cap 600: count only |
| 217 | attendance | school_health | nodesign | 429 | 429 | 347 |  |
| 218 | attendance | vision_asthma_dental | nodesign | 343 | 343 | 220 |  |
| 219 | attendance | nutrition_meals | nodesign | 246 | 246 | 147 |  |
| 220 | attendance | arts | nodesign | 162 | 162 | 134 |  |
| 221 | attendance | music | nodesign | 111 | 111 | 68 |  |
| 222 | attendance | sports_pa | nodesign | 417 | 417 | 268 |  |
| 223 | attendance | service_learning | nodesign | 170 | 170 | 100 |  |
| 224 | attendance | youth_development | nodesign | 210 | 210 | 71 |  |
| 225 | attendance | sel | nodesign | 227 | 227 | 151 |  |
| 226 | attendance | college_access | nodesign | 502 | 502 | 347 |  |
| 227 | attendance | work_based | nodesign | 148 | 148 | 83 |  |
| 228 | attendance | career_academies | nodesign | 174 | 174 | 91 |  |
| 229 | attendance | attendance_interventions | nodesign | 74 | 74 | 40 |  |
| 230 | attendance | transportation | nodesign | 332 | 332 | 224 |  |
| 231 | attendance | housing_homeless | nodesign | 508 | 508 | 284 |  |
| 232 | attendance | case_management | nodesign | 72 | 72 | 29 |  |
| 233 | attendance | violence_restorative | nodesign | 140 | 140 | 90 |  |
| 234 | attendance | teacher_attendance | nodesign | 474 | 474 | 378 |  |
| 235 | dropout_completion | mentoring | nodesign | 1,234 | 0 | 0 | over cap 600: count only |
| 236 | dropout_completion | tutoring | nodesign | 664 | 0 | 0 | over cap 600: count only |
| 237 | dropout_completion | afterschool_ost | nodesign | 261 | 261 | 177 |  |
| 238 | dropout_completion | 21cclc | nodesign | 3 | 3 | 2 |  |
| 239 | dropout_completion | summer | nodesign | 369 | 369 | 228 |  |
| 240 | dropout_completion | community_schools | nodesign | 107 | 107 | 65 |  |
| 241 | dropout_completion | wraparound_iss | nodesign | 213 | 213 | 155 |  |
| 242 | dropout_completion | family_engagement | nodesign | 486 | 486 | 373 |  |
| 243 | dropout_completion | school_health | nodesign | 272 | 272 | 175 |  |
| 244 | dropout_completion | vision_asthma_dental | nodesign | 528 | 528 | 421 |  |
| 245 | dropout_completion | nutrition_meals | nodesign | 254 | 254 | 167 |  |
| 246 | dropout_completion | arts | nodesign | 205 | 205 | 159 |  |
| 247 | dropout_completion | music | nodesign | 133 | 133 | 93 |  |
| 248 | dropout_completion | sports_pa | nodesign | 569 | 569 | 417 |  |
| 249 | dropout_completion | service_learning | nodesign | 369 | 369 | 246 |  |
| 250 | dropout_completion | youth_development | nodesign | 390 | 390 | 242 |  |
| 251 | dropout_completion | sel | nodesign | 141 | 141 | 57 |  |
| 252 | dropout_completion | college_access | nodesign | 1,013 | 0 | 0 | over cap 600: count only |
| 253 | dropout_completion | work_based | nodesign | 686 | 0 | 0 | over cap 600: count only |
| 254 | dropout_completion | career_academies | nodesign | 665 | 0 | 0 | over cap 600: count only |
| 255 | dropout_completion | attendance_interventions | nodesign | 56 | 56 | 31 |  |
| 256 | dropout_completion | transportation | nodesign | 283 | 283 | 159 |  |
| 257 | dropout_completion | housing_homeless | nodesign | 647 | 0 | 0 | over cap 600: count only |
| 258 | dropout_completion | case_management | nodesign | 97 | 97 | 38 |  |
| 259 | dropout_completion | violence_restorative | nodesign | 111 | 111 | 64 |  |
| 260 | dropout_completion | teacher_attendance | nodesign | 24 | 24 | 1 |  |
| 261 | achievement | mentoring | nodesign | 536 | 536 | 406 |  |
| 262 | achievement | tutoring | nodesign | 1,145 | 0 | 0 | over cap 600: count only |
| 263 | achievement | afterschool_ost | nodesign | 497 | 497 | 268 |  |
| 264 | achievement | 21cclc | nodesign | 29 | 29 | 0 |  |
| 265 | achievement | summer | nodesign | 526 | 526 | 279 |  |
| 266 | achievement | community_schools | nodesign | 102 | 102 | 56 |  |
| 267 | achievement | wraparound_iss | nodesign | 26 | 26 | 11 |  |
| 268 | achievement | family_engagement | nodesign | 733 | 0 | 0 | over cap 600: count only |
| 269 | achievement | school_health | nodesign | 123 | 123 | 62 |  |
| 270 | achievement | vision_asthma_dental | nodesign | 450 | 450 | 320 |  |
| 271 | achievement | nutrition_meals | nodesign | 344 | 344 | 220 |  |
| 272 | achievement | arts | nodesign | 314 | 314 | 227 |  |
| 273 | achievement | music | nodesign | 265 | 265 | 168 |  |
| 274 | achievement | sports_pa | nodesign | 483 | 483 | 296 |  |
| 275 | achievement | service_learning | nodesign | 142 | 142 | 81 |  |
| 276 | achievement | youth_development | nodesign | 115 | 115 | 42 |  |
| 277 | achievement | sel | nodesign | 240 | 240 | 110 |  |
| 278 | achievement | college_access | nodesign | 236 | 236 | 147 |  |
| 279 | achievement | work_based | nodesign | 156 | 156 | 79 |  |
| 280 | achievement | career_academies | nodesign | 199 | 199 | 125 |  |
| 281 | achievement | attendance_interventions | nodesign | 50 | 50 | 21 |  |
| 282 | achievement | transportation | nodesign | 134 | 134 | 66 |  |
| 283 | achievement | housing_homeless | nodesign | 245 | 245 | 90 |  |
| 284 | achievement | case_management | nodesign | 17 | 17 | 1 |  |
| 285 | achievement | violence_restorative | nodesign | 53 | 53 | 27 |  |
| 286 | achievement | teacher_attendance | nodesign | 60 | 60 | 0 |  |
| 287 | cte | mentoring | nodesign | 120 | 120 | 107 |  |
| 288 | cte | tutoring | nodesign | 19 | 19 | 12 |  |
| 289 | cte | afterschool_ost | nodesign | 20 | 20 | 12 |  |
| 290 | cte | 21cclc | nodesign | 0 | 0 | 0 |  |
| 291 | cte | summer | nodesign | 10 | 10 | 4 |  |
| 292 | cte | community_schools | nodesign | 9 | 9 | 5 |  |
| 293 | cte | wraparound_iss | nodesign | 13 | 13 | 11 |  |
| 294 | cte | family_engagement | nodesign | 9 | 9 | 3 |  |
| 295 | cte | school_health | nodesign | 27 | 27 | 21 |  |
| 296 | cte | vision_asthma_dental | nodesign | 75 | 75 | 64 |  |
| 297 | cte | nutrition_meals | nodesign | 9 | 9 | 4 |  |
| 298 | cte | arts | nodesign | 16 | 16 | 15 |  |
| 299 | cte | music | nodesign | 13 | 13 | 9 |  |
| 300 | cte | sports_pa | nodesign | 23 | 23 | 13 |  |
| 301 | cte | service_learning | nodesign | 24 | 24 | 9 |  |
| 302 | cte | youth_development | nodesign | 13 | 13 | 7 |  |
| 303 | cte | sel | nodesign | 12 | 12 | 7 |  |
| 304 | cte | college_access | nodesign | 178 | 178 | 127 |  |
| 305 | cte | work_based | nodesign | 326 | 326 | 214 |  |
| 306 | cte | career_academies | nodesign | 3,613 | 0 | 0 | over cap 600: count only |
| 307 | cte | attendance_interventions | nodesign | 1 | 1 | 1 |  |
| 308 | cte | transportation | nodesign | 29 | 29 | 13 |  |
| 309 | cte | housing_homeless | nodesign | 31 | 31 | 15 |  |
| 310 | cte | case_management | nodesign | 1 | 1 | 0 |  |
| 311 | cte | violence_restorative | nodesign | 4 | 4 | 3 |  |
| 312 | cte | teacher_attendance | nodesign | 0 | 0 | 0 |  |
| 313 | any | 21cclc | sweep | 144 | 144 | 100 |  |
| 314 | any | 21cclc | sweep2 | 187 | 187 | 56 |  |

Full query strings (the outcome and program OR blocks) are in grid.py; each row above is outcome block AND program block [AND design block] AND years [AND peerreviewed:T].

### Outcome and program blocks

- outcome `attendance`: `("school attendance" OR "student attendance" OR "attendance rates" OR "chronic absenteeism" OR absenteeism OR truancy OR absences OR attendance)`
- outcome `dropout_completion`: `(dropout OR dropouts OR "dropping out" OR "high school completion" OR graduation OR "on-track" OR "on track")`
- outcome `achievement`: `("reading achievement" OR "mathematics achievement" OR "math achievement" OR "standardized test" OR "standardized tests" OR "state test" OR "state assessment" OR "test scores" OR PSSA OR "end-of-course" OR Keystone OR "science achievement")`
- outcome `cte`: `("industry certification" OR "industry-recognized" OR "industry credential" OR "career and technical education")`
- program `mentoring`: `(mentoring OR mentor OR mentors)`
- program `tutoring`: `(tutoring OR tutors OR tutor)`
- program `afterschool_ost`: `(afterschool OR "after-school" OR "after school" OR "out-of-school time" OR "out of school time" OR "extended day")`
- program `21cclc`: `("21st Century Community Learning Centers" OR "21st CCLC" OR "Twenty-First Century Community Learning")`
- program `summer`: `("summer program" OR "summer programs" OR "summer learning" OR "summer school" OR "summer camp")`
- program `community_schools`: `("community schools" OR "community school" OR "full-service community")`
- program `wraparound_iss`: `(wraparound OR "integrated student supports" OR "Communities In Schools" OR "City Connects" OR "student support services")`
- program `family_engagement`: `("family engagement" OR "parent involvement" OR "parental involvement" OR "parent engagement" OR "home visits" OR "home visiting")`
- program `school_health`: `("school-based health" OR "school health services" OR "school nurse" OR "school nurses" OR "health services")`
- program `vision_asthma_dental`: `(vision OR eyeglasses OR asthma OR dental OR "oral health")`
- program `nutrition_meals`: `("school breakfast" OR "school lunch" OR "school meals" OR "free meals" OR "community eligibility" OR nutrition)`
- program `arts`: `("arts education" OR "arts integration" OR "arts program" OR theater OR drama OR "visual arts" OR dance)`
- program `music`: `("music education" OR "music instruction" OR "music program" OR "instrumental music" OR band OR orchestra)`
- program `sports_pa`: `(sports OR athletics OR "physical activity" OR "physical education" OR recess)`
- program `service_learning`: `("service learning" OR "service-learning" OR "community service" OR volunteering)`
- program `youth_development`: `("youth development" OR "positive youth development" OR "youth programs" OR "Boys and Girls Clubs")`
- program `sel`: `("social emotional learning" OR "social-emotional learning" OR "social and emotional learning" OR SEL)`
- program `college_access`: `("college access" OR "college advising" OR "college counseling" OR "dual enrollment" OR "Upward Bound" OR "GEAR UP" OR "early college")`
- program `work_based`: `("work-based learning" OR "summer jobs" OR "summer youth employment" OR internship OR internships OR apprenticeship)`
- program `career_academies`: `("career academies" OR "career academy" OR "career pathways" OR "career and technical")`
- program `attendance_interventions`: `("attendance intervention" OR nudge OR nudges OR "text message" OR "text messages" OR "text messaging" OR mailings OR "attendance letters")`
- program `transportation`: `(transportation OR "school bus" OR busing OR "transit pass")`
- program `housing_homeless`: `(homeless OR homelessness OR housing OR "McKinney-Vento")`
- program `case_management`: `("case management" OR "case manager" OR "check and connect" OR "Check & Connect")`
- program `violence_restorative`: `("violence prevention" OR "restorative practices" OR "restorative justice" OR "conflict resolution" OR "bullying prevention")`
- program `teacher_attendance`: `("teacher attendance" OR "teacher absence" OR "teacher absences" OR "teacher absenteeism")`
- design: `(randomized OR "random assignment" OR "quasi-experimental" OR "comparison group" OR "regression discontinuity" OR "meta-analysis" OR longitudinal OR "propensity score" OR "difference-in-differences")`

## Limits

- 10 no-design cells exceeded the 600-record cap and were counted only: attendance x family_engagement (668); dropout_completion x mentoring (1,234); dropout_completion x tutoring (664); dropout_completion x college_access (1,013); dropout_completion x work_based (686); dropout_completion x career_academies (665); dropout_completion x housing_homeless (647); achievement x tutoring (1,145); achievement x family_engagement (733); cte x career_academies (3,613). Their design-filtered passes were retrieved in full, so missing records are those whose abstracts carry no design term.
- ERIC abstracts are often short or truncated; rule screens can miss studies whose design is described only in full text (fixed-effects and natural-experiment designs especially). Some were rescued by hand; more may remain in the "no design" bucket.
- The country rule is a regex; it may drop comparable high-income studies that mention an LMIC, or keep some it should not.
- The in-map check compared first-author surname and year with already_in_map.md and then by hand; a kept row with an empty already_in_map field may still overlap a map link under a different report.
- ERIC coverage of economics working papers (NBER, EdWorkingPapers) is partial; the grid will undercount them.
- Effects are from abstracts, not full text. Nothing here is verified evidence (CLAUDE.md: a citation needs a verifier fetch and a verbatim excerpt).
