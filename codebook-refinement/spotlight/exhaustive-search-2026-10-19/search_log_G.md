# Search log, searcher G (needs, health, family, systems, work, college, teacher attendance)

Date of all searches: 2026-10-18. Output: `candidates_G.csv` (165 candidates, G-001 to G-165).

Every candidate is a lead. Wherever the abstract or report text was retrieved, the effect is copied from it. Effects marked "lead" (25 rows) come from memory, a search-engine summary, or a title only, and need a fetch. URLs for ERIC records use `https://eric.ed.gov/?id=<ID>`. Where a DOI was available, it is given instead.

## Method

- **ERIC API.** I ran 34 queries (below). Each query requested up to 200 rows with the protocol fields. I screened only records typed "Reports - Research" or "Reports - Evaluative", and at most the first 40 to 70 of those per query by title. For likely candidates I then read the full ERIC abstract (`description`).
- **Web search** (US-only engine). I used it for program families that ERIC indexes poorly: laundry, transit passes, Success Mentors, telehealth, Medicaid, Family Rewards, teacher wellness, Talent Search, asthma telemedicine, air filters and heat, walking school bus, summer jobs, eyeglasses in LA, teacher absence economics, and attendance meta-analyses.
- **Citation chasing, forward.** I used the Semantic Scholar `citations` endpoint on Rogers & Feller (2018), which is in the map as L-27. It returned 174 citing works. I screened the titles that matched absen/attend/truan, and 15 new leads came from this chase. I looked these up through the Crossref works API, because the Semantic Scholar batch endpoint returned HTTP 429.
- **Not used.** I did not use OpenAlex (budget exhausted, per the protocol). I did not open WWC, Evidence for ESSA or Blueprints pages directly. WWC reviews surfaced through ERIC instead (Talent Search, ChalleNGe, Kalamazoo Promise, Career Academies, Early College).

## ERIC queries

"Hits" is ERIC's numFound. "Screened" is the number of rows returned, capped at 200; titles were screened among the research and evaluative types. "Kept" is how many returned records match a candidate row. Kept counts overlap across queries.

| # | Query (abbreviated) | Hits | Screened | Kept |
|---|---|---|---|---|
| q01 | (title:absenteeism OR title:attendance) AND (randomized OR experiment OR quasi-experimental) AND (intervention OR program) | 66 | 66 | 16 |
| q02 | (text OR texting OR "text messages" OR mailers OR postcards OR nudge) AND (absenteeism OR attendance) AND (randomized OR experiment) | 34 | 34 | 4 |
| q03 | "Success Mentors" OR "attendance mentor(ing)" OR "attendance team" OR "attendance works" | 43 | 43 | 1 |
| q04 | ("school bus" OR transportation OR "transit pass" OR "bus pass") AND (attendance OR absenteeism) | 628 | 200 | 10 |
| q05 | (laundry OR "washing machine" OR uniform(s) OR clothing) AND (attendance OR absenteeism) | 187 | 187 | 3 |
| q06 | ("school breakfast" OR "breakfast in the classroom" OR "universal free meals" OR "community eligibility") AND (attendance OR achievement OR test) | 78 | 78 | 13 |
| q07 | (eyeglasses OR "vision screening" OR glasses OR "vision program" OR "Vision to Learn") AND (achievement OR attendance OR reading) | 89 | 89 | 5 |
| q08 | (asthma OR dental OR "oral health" OR "school nurse(s)") AND (absenteeism OR attendance OR achievement) | 648 | 200 | 9 |
| q09 | "school-based health center(s)" AND (attendance OR achievement OR graduation OR dropout OR GPA) | 32 | 32 | 3 |
| q10 | ("school-based mental health" OR counseling OR telehealth OR "mental health services") AND attendance AND (randomized OR quasi-experimental OR propensity OR DiD) | 40 | 40 | 6 |
| q11 | (homeless(ness) OR "housing voucher" OR "housing assistance" OR McKinney-Vento OR eviction OR "housing instability") AND (attendance OR achievement OR "test scores" OR graduation) AND (impact OR effect) | 186 | 186 | 6 |
| q12 | "integrated student supports" OR "City Connects" OR "Communities In Schools" OR "Diplomas Now" OR wraparound | 448 | 200 | 6 |
| q13 | ("community school(s)" OR "full-service community") AND (attendance OR achievement OR graduation OR absenteeism) AND (impact OR effect OR evaluation) | 318 | 200 | 7 |
| q14 | (truancy OR truant) AND (court OR diversion OR program) AND (evaluation OR effect OR impact) AND attendance | 110 | 110 | 10 |
| q15 | (parent OR family) AND (engagement OR involvement OR program) AND randomized AND (achievement OR "test scores" OR attendance) AND peerreviewed:T | 254 | 200 | 13 |
| q16 | ("home visit(s)" OR "home visiting" OR "Parent Teacher Home Visits") AND (attendance OR achievement OR absenteeism) | 378 | 200 | 5 |
| q17 | ("cash transfer" OR "income support" OR "child tax credit" OR EITC OR SNAP OR "food stamps" OR "family income" OR welfare OR "conditional cash") AND (achievement OR tests OR attendance OR graduation) AND (effect OR impact OR experiment) | 924 | 200 | 9 |
| q18 | "two-generation" OR 2Gen OR "dual-generation" | 109 | 109 | 1 |
| q19 | ("summer youth employment" OR "summer jobs" OR internship(s) OR "work-based learning" OR apprenticeship) AND "high school" AND (attendance OR graduation OR tests OR dropout) AND (impact OR lottery) | 144 | 144 | 4 |
| q20 | ("career academ*" OR CTE OR "career pathways" OR "Linked Learning") AND (graduation OR dropout OR attendance OR tests) AND (impact OR lottery OR RD OR QED) | 203 | 200 | 20 |
| q21 | NOCTI OR "industry certification(s)" OR "industry-recognized credential" OR "technical skill assessment" | 176 | 176 | 4 |
| q22 | ("dual enrollment" OR "early college" OR "concurrent enrollment" OR "dual credit") AND (graduation OR attendance OR dropout) AND (impact OR lottery OR QED) | 496 | 200 | 10 |
| q23 | ("GEAR UP" OR "Talent Search" OR "Upward Bound" OR TRIO) AND (impact OR evaluation) AND (graduation OR achievement OR attendance OR dropout OR enrollment) | 233 | 200 | 8 |
| q24 | ("college advising" OR "near-peer" OR FAFSA OR "college access" OR "college-going culture" OR "college coaching") AND (randomized OR RD OR QED) AND "high school" | 82 | 82 | 0 |
| q25 | title: "teacher absence(s)" / "teacher absenteeism" / "teacher attendance" / "sick leave" | 147 | 147 | 14 |
| q26 | ("teacher absence" OR "teacher absenteeism" OR "teacher attendance") AND (incentive OR policy OR effect OR wellness OR climate OR principal) | 337 | 200 | 11 |
| q27 | AVID OR "Advancement Via Individual Determination" | 95 | 95 | 2 |
| q28 | ("promise scholarship" OR "Kalamazoo Promise" OR "Pittsburgh Promise" OR "Say Yes") AND (high school OR GPA OR graduation OR suspensions OR attendance) | 122 | 122 | 2 |
| q29 | (ChalleNGe OR YouthBuild OR "re-engagement" OR "transfer school" OR "credit recovery") AND (impact OR randomized) AND (diploma OR graduation OR GED OR dropout) | 260 | 200 | 10 |
| q30 | ("Math-in-CTE" OR "Rigor and Relevance") AND Stone | 3 | 3 | 0 |
| q31 | ("school counselor(s)" OR "counselor ratio" OR "school social worker" OR "school psychologist") AND (graduation OR attendance OR tests) AND (effect OR impact OR causal) | 131 | 131 | 2 |
| q32 | (incentive(s) OR rewards) AND (attendance OR absenteeism) AND (randomized OR experiment) | 304 | 200 | 7 |
| q33 | Philadelphia AND (attendance OR absenteeism OR "community schools" OR graduation) AND (evaluation OR impact) AND 2005-2026 | 38 | 38 | 4 |
| q34 | (text message OR texting OR Connect-Text OR "two-way messaging") AND (kindergarten OR preschool OR elementary) AND attendance | 12 | 12 | 5 |

## Web searches (all US-only, 2026-10-18)

| Query topic | Kept | Notes |
|---|---|---|
| Whirlpool Care Counts laundry and attendance | 1 (below bar) | Only sponsor-reported pre-post results, no comparison group. No peer-reviewed study found. **Null for evidence.** |
| Free transit passes and attendance | 3 | Minneapolis DiD (positive), Leon County FL synthetic control (negative), AC Transit before-after (null). |
| NYC Success Mentors | 0 new | Evidence is the Balfanz & Byrnes task-force report, already map L-25. |
| SBHC / telehealth, DiD, graduation | 3 | Hawai'i synthetic control, rural NY (design unconfirmed), New Mexico (descriptive; not kept). |
| Medicaid expansion and absences | 2 | Gangopadhyaya conference paper; Cohodes et al. 2016 JHR (high school completion). |
| Family Rewards and Family Rewards 2.0 (MDRC) | 2 | Mixed (1.0) and null (2.0) on high school outcomes. |
| Eklund 2022 and Gottfried-Le-Kim meta-analyses | 2 | Pooled estimates not retrieved for Gottfried et al. |
| Jacob (2013) probation and teacher absence; Herrmann & Rockoff (2012) | 2 | |
| Teacher wellness and teacher absence (CARE, MBSR) | 1 | **Null for evidence.** No RCT of a staff-wellness program measured teacher attendance; the Dutch MBSR trial is a protocol only. |
| Talent Search (Constantine 2006) | 1 | |
| SB-TEAM asthma telemedicine | 1 | Absence outcome not confirmed. |
| Air filters (Gilraine) and heat (Goodman et al.) | 2 | |
| Walking school bus and attendance | 0 | **Null for evidence.** RCTs measured active commuting, not attendance. |
| Blair 1986 educator health promotion | 1 (pre-1990, flagged) | |
| Cohodes et al. insurance and schooling | 1 | |
| Summer jobs: Gelber et al., Davis & Heller | 2 | Schooling effects null or postsecondary only (leads). |
| Dudovitz Vision to Learn LA | 0 | Qualitative (focus groups), so excluded. |
| Gilraine EdWorkingPaper | (same as above) | |

## Forward citation chase

- **Seed:** Rogers & Feller (2018) Nature Human Behaviour (map L-27), through the Semantic Scholar citations endpoint: 174 citing papers. I screened 66 titles that matched attendance terms.
- **Kept (15):** Strelitz et al. 2026 RCT meta-analysis; Sokol et al. 2025 (Michigan Pathways to Potential); Berger et al. 2025 (six RCTs); Musaddiq et al. 2023; Pedde et al. 2023 (EPA bus rebate lottery); Komisarow & Hemelt 2024 (telemedicine); Baker et al. 2022 (Norway, NBER); Gottfried & Kirksey 2022 (breakfast location); Mac Iver et al. 2021 (nudge letters, RD); Bartanen 2020 (principals); Tran & Gershenson 2021 (STAR); Bennett & Bergman 2021 (truancy networks); Komisarow 2026 (support staff); Leach et al. 2026 (nurse communities of practice RCT); Gottfried et al. 2024 (novice teachers; not written to the CSV because it measures teacher experience rather than a program).
- **Excluded:** preschool-only studies (Uruguay, Show Up to Grow Up), descriptive and qualitative papers, and non-US policy commentary.

## Main reasons for exclusion (across sources)

1. **Outcome not an indicator or the same measure.** The outcome was health only, self-report, program sign-ins, or postsecondary only. Most college-access RCTs fall here (FAFSA nudges, Bottom Line, College Possible, summer melt), and so does all of q24.
2. **Design below the bar with no compensating value.** Single-school pre-post, action research, or dissertations duplicating a published study. Some below-bar rows were kept on purpose, either because the program is widely promoted (laundry, uniforms, nurse demonstrations) or because they are Philadelphia-specific.
3. **Population.** Pre-K only (Head Start attendance studies; two-generation ESL kept once as below-bar), postsecondary students, or developing countries. This excluded the international teacher-absence literature, CCTs in Latin America, and India teacher monitoring; the review of developing countries is already L-47.
4. **Published before 1990.** For example, the Maynard & Murnane 1979 negative income tax study. Jacobson 1989 and Blair 1986 are kept but flagged, because they are the only US teacher-attendance incentive and staff-wellness evaluations found.
5. **Duplicates** of studies already in the map: Balfanz NYC (L-25), Rogers REL (L-27), Neitzel JAMA (L-64), Lovenheim SBHC (L-65), Bartfeld and Ruffini CEP (L-84/85), Family Options (L-86), Modestino and Leos-Urbel SYEP (L-71/72), Dougherty and Brunner CTE (L-74 to 76), Kemple career academies (L-77), P-TECH (L-78), Upward Bound (L-80).

## Recorded nulls and negatives (to stop overclaiming)

- **Nulls:**
  - Messaging improves attendance but not achievement (Heppen et al. 2020).
  - Mentoring, family engagement and postcards had no effect in the rural pilots (NCRERN).
  - Truancy court diversion (Lee et al. 2020).
  - Check & Connect run by Communities In Schools, attendance null (Maynard et al. 2014).
  - Check & Connect effects on test scores (Guryan et al. 2021).
  - Full-time LPNs (Leach et al. 2023).
  - CHECK care coordination (Martin et al. 2021).
  - HOME WORKS! home visits RCT (Scher & Lauver 2021).
  - Breakfast in the Classroom in NYC and Arkansas.
  - Uniforms and achievement.
  - Family Rewards 2.0.
  - Housing interventions in the Family Options education follow-up (Cutuli & Herbers 2019).
  - Busing distance (Angrist et al. 2022).
  - SBHCs on dropout (Pai 2026) and on graduation (Bersamin et al. 2016).
  - AVID schoolwide in rural Florida.
  - Baltimore student advocates RCT.
  - Depression prevention RCT on school outcomes.
- **Negatives:**
  - Perfect-attendance awards (Robinson et al. 2019).
  - A fare-free bus open to all riders (Leon County).
  - Rapid rehousing outside the district, which raised absences (Dizon-Ross 2020).
  - Community schools in Tennessee, which saw chronic absence rise (Truwit 2025).
  - Long bus rides and bus transfers.
  - Eviction (Collinson et al. 2025), which raised absences and lowered graduation.

## Gaps worth noting for the caller

- **Teacher attendance (S2).** The drivers with causal evidence are all policy: dismissal authority, tenure timing, accountability pressure, leave-pay rules, and the community-schools effect on teacher turnover (not absence). I found no rigorous study of a partner-deliverable staff-wellness program that measured teacher absences.
- **S13 (grade 12 industry test).** The only source using a NOCTI-type measure is Staklis & Klein (2010, Pennsylvania, descriptive). Certification studies treat earning a credential as the cause of S4 or postsecondary outcomes, not as an outcome partners can move.
