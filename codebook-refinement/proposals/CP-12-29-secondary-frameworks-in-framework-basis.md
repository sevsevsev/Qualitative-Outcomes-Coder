# CP-12-29: Secondary frameworks named in each domain's Framework Basis (G2)

**In plain words.** Each of the codebook's 13 domains has a "Framework Basis" line, which the coding
model reads, naming the frameworks the domain is built on. Over time, codes have come to cite
further sources that this line does not mention: some through the source fixes now in review, some
for years. Severin decided that each domain line should name these extra sources as "secondary"
frameworks. This change adds one "secondary:" list to each of 11 domain lines, updates the year of
the digital citizenship standards (ISTE) to 2024, and adds a test so the domain line and the code
lines cannot drift apart again. No code's meaning, wording or source changes; only the domain lines
gain names, so the change rides the one shared test run after the two open pull requests (PRs #62
and #66). The family-engagement items for program families (Program-Level Family Engagement, A2.6)
wait for the review of that domain's anchor.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | `frameworkBasis` of Y1, Y2, Y3, Y4, Y5, Y6, Y7, Y8, F1, F2, A1 (A2 and A3: none). Registry: `codebook_names` on the entries in table R. New test in `codebook-refinement/sync.test.ts`. No code's definition, include, exclude, useInstead, example, Source line, `basis` or rulesText changes. |
| Version bump | PATCH, inside the single Source/`frameworkBasis` PATCH after PRs #62 and #66 (G10) |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Gate candidate | Applied 2026-10-17 in the 3.3.0 gate candidate: `frameworkBasis` of Y1, Y2, Y3, Y4, Y5, Y6, Y7, F1, F2 and A1 as drafted, except: **Y8 is not edited** (Y8 is over the S4.9 line; its clause waits for the Y8 anchor re-review, and the three Y8 pairs the check finds, Y8.4 nses-2020, Y8.5 acf-nytd and Y8.10 search-40-assets, are listed in the test's `KNOWN_GAPS` with that reason, beside A2.6); Y5 leaves out the NRC (2009) item (no registry entry, V-Y5-2); F2 leaves out "USDA nutrition security (2022)" (V8 not supported) and names the HEARTH Act (V11 supported). Table R names are in `v3/verification_2026_10_16_batch4.py`, without the Y8-only part-2 names. The `sync.test.ts` block is as drafted. CP-12-33 later inserts the F2.4 anchors into F2's line. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. Each name added is already cited on a Source line, or is cited there by a
CP in the same gate. No code's construct moves.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G2 (secondary frameworks go in `frameworkBasis` as a "secondary" clause, in one gated CP) | This CP is that one CP. Every handoff from CP-11-01, CP-12-01..12, CP-12-14 (item 27), CP-12-16 and CP-12-18 (item 5) is carried below with its claim id. |
| G10 (prompt-reaching edits in one gate after PRs #62 and #66) | The `frameworkBasis` edits, the names that only these edits use, and the test go in the shared gate. Name variants for text already in the prompt land now. |
| G8 | Items whose registry entry waits for an official-copy check (733(b)(5), WIOA Title II, HEARTH) enter with that entry. |
| A2 anchor re-review (CP-12-18, held) | A2's line is not edited here. Its one detected gap (Epstein on A2.6) is listed in the test's `KNOWN_GAPS` until that review lands. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| R-now: `codebook_names` variants for names already printed in the prompt (table R, part 1) | no | now |
| `frameworkBasis` of Y1, Y2, Y3, Y4, Y5, Y6, Y7, Y8, F1, F2, A1 (below) | yes ("Framework Basis:") | the shared gate after PRs #62 and #66, with CP-12-16, CP-12-04..06 (Source parts), CP-12-14, CP-12-18, CP-12-21 (b) and CP-12-26 |
| R-gate: `codebook_names` used only by the new clauses (table R, part 2) | no | same commit as the clauses |
| `sync.test.ts` check | no | same commit as the clauses |
| Items blocked on a verification: Seal of Biliteracy (CP-11-01 V1), NRC 2009 (V-Y5-2), 29 U.S.C. 733(b)(5) (V-Y5-1), WIOA Title II (V10), USDA nutrition security (V8), HEARTH (V11) | yes | each enters with its registry entry; an entry not in the registry at gate time leaves its item out, and the item rides the next citation gate |

**Shared rows (whichever lands first applies them; the other drops the rows).**

| String or row | Also in | Rule |
|---|---|---|
| Y5 line, item "Learning for Justice Social Justice Standards (Identity)" | CP-12-21 (Learning for Justice 2022) | Neither CP edits this item: CP-12-21 leaves it as an anchor name with no edition, and this CP appends after it. The `learning-for-justice-sjs` registry rows are CP-12-21's and CP-12-04's; whichever lands first applies them; the other drops the rows. |
| Y5 line, item "Nagaoka et al. (2015), Foundations for Young Adult Success" | CP-12-24 (Nagaoka name) | The prompt string is unchanged; CP-12-24 changes only the registry `publisher` and note. If either CP comes to carry the other's row, whichever lands first applies it; the other drops the rows. |
| `search-40-assets` registry entry (this CP adds a `codebook_names` variant; CP-12-25 replaces components and the note) | CP-12-25 ("(located)" sweep) | Different fields; both apply. The "(located" tags in `basis` are CP-12-25's alone; this CP edits no `basis`. If either CP comes to carry the other's row, whichever lands first applies it; the other drops the rows. |
| Y2 line anchor swap (Muhammad → Pekrun) | CP-12-16 | CP-12-16's swap is applied first, in the same gate; the Y2 "after" below includes it. |
| Y1 Seal clause | CP-11-01 (handed here) | Carried here, text unchanged. |
| Y8, F1, F2 lists | CP-12-14 item 27 (batch-3 draft) | Carried here; reformatted to one "secondary:" clause; the names are unchanged. |
| ISTE year in Y6 | CP-12-05 (handed here) | Carried here, text unchanged. |
| Guskey in A1 | CP-12-18 item 5, CP-12-10 (handed here) | Carried here. CP-12-18 (a) adds the name "Guskey (2002)" now. |

## Problem

1. Under G2, a framework a code cites outside its domain's anchor must be named in the domain's
   Framework Basis. Six batch CPs and CP-11-01 add such citations and hand the naming here.
2. Older gaps exist. A prototype of the new check, run on the 3.1.4 data and registry
   (a scratch script, not committed), finds 22 code-and-source pairs whose
   source is named on the code's Source line but not in the domain line. 9 are spelling variants (seven
   Search Institute pairs, the UChicago On-Track Indicator and CFPB Building Blocks;
   for example, the Search Institute line items read "Search Institute Developmental Assets",
   while the registry knows "Developmental Assets Framework" and "40 Developmental Assets"). 13 are
   real gaps: Y1 (National Reading Panel, NAEP, Conley's Key Cognitive Strategies, Head Start
   ELOF, Attendance Works, McKinney-Vento, the ESSA graduation-rate indicator), Y2.4 (Eccles),
   Y5.1 and Y5.4 (CASEL), F2.3 (McKinney-Vento), A1.2 (SAMHSA), A2.6 (Epstein). A manual read of every Source line adds
   sources that have no registry name yet (so the prototype cannot see them): NAMLE and Irvin
   (Y1), Hulleman (Y2.4), Muhammad (Y5.2), 20 CFR 681.460 (Y1.17, Y7.4), NIOSH WellBQ and JOLTS
   (A1.3), Healthy People 2030, the Digital Equity Act and IDEA (F1). These are closed here too,
   because the check would otherwise pass only by accident of missing names.
3. Y6 names "ISTE Standards for Students (Digital Citizen)" with no year; CP-12-05 moves Y6.7 to
   the 2024 edition (y6-06).

## Change: `frameworkBasis` (`codebooks/youthOutcomesV3.data.ts`)

Format (one rule for all domains): the existing text, then `; secondary: ` and the items, separated
by semicolons, ending with a period. Y4, whose line is one full sentence, gets a second sentence
starting `Secondary: `. Each item names a framework in words, with the element it grounds in
parentheses; no code ids, and none of "partial", "located", "(verified)" or "VERIFY".

**Y1**, before:

```
ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse.
```

After:

```
ESSA State academic standards, 20 U.S.C. 6311(b)(1)(C), and well-rounded education, 20 U.S.C. 7801(52); subject standards (Common Core writing anchors, NGSS, CSTA, National Core Arts Standards, WIDA); Farrington et al. (2012), academic mindsets and behaviors; UChicago On-Track Indicator; Civil Rights Data Collection; National Student Clearinghouse; secondary: Seal of Biliteracy Guidelines (home-language maintenance); National Reading Panel (2000) (reading); NAEP (subjects of a well-rounded education); NAMLE, Core Principles of Media Literacy Education; Conley, Four Keys (key cognitive strategies); Head Start Early Learning Outcomes Framework (early childhood); Irvin et al. (2004) (office discipline referrals); Attendance Works (chronic absence); McKinney-Vento Act and 42 U.S.C. 675(1)(G) (school stability); ESSA State report cards (advanced coursework); ESSA graduation-rate indicator; WIOA youth program elements, 20 CFR 681.460 (dropout recovery).
```

The first item is CP-11-01's text unchanged. The 42 U.S.C. 675(1)(G) and "ESSA State report cards"
items match the Y1.13 and Y1.16 Source lines CP-11-01 (PR #66) sets; this edit is applied to the
string PR #66 leaves (CP-11-01 does not edit Y1's line).

**Y2**, before (after CP-12-16's anchor swap, same gate):

```
Hidi & Renninger (2006), Four-Phase Model of Interest Development; Pekrun (2024), control-value theory of achievement emotions (activity enjoyment); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time).
```

After:

```
Hidi & Renninger (2006), Four-Phase Model of Interest Development; Pekrun (2024), control-value theory of achievement emotions (activity enjoyment); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time); secondary: CASEL (2020) SEL Framework (curiosity and open-mindedness); Eccles and colleagues, expectancy-value theory (utility value); Hulleman et al. (2010), utility-value intervention.
```

**Y3**, before:

```
Search Institute Developmental Relationships Framework; CDC (2009) School Connectedness; Search Institute Developmental Assets (Support); Education-to-Workforce Indicator Framework (social capital).
```

After (CP-12-16's text):

```
Search Institute Developmental Relationships Framework; CDC (2009) School Connectedness; Search Institute Developmental Assets (Support); Education-to-Workforce Indicator Framework (social capital); secondary: Chafee, 42 U.S.C. 677(a)(2), and the National Youth in Transition Database (permanent connections with caring adults for youth in foster care).
```

**Y4**, before:

```
CASEL (2020) SEL Framework: the five competencies are this domain's categories.
```

After (CP-12-16's names, put in the common format):

```
CASEL (2020) SEL Framework: the five competencies are this domain's categories. Secondary: Common Core State Standards, Speaking and Listening anchor 4 (presenting to an audience); National Health Education Standards (SHAPE America, 2024), Standard 4 (refusal skills).
```

**Y5**, before:

```
Nagaoka et al. (2015), Foundations for Young Adult Success (agency, integrated identity, mindsets); Search Institute Developmental Assets (Positive Identity); Learning for Justice Social Justice Standards (Identity).
```

After:

```
Nagaoka et al. (2015), Foundations for Young Adult Success (agency, integrated identity, mindsets); Search Institute Developmental Assets (Positive Identity); Learning for Justice Social Justice Standards (Identity); secondary: CASEL (2020) SEL Framework (Self-Awareness); Muhammad, Five Pursuits (Identity); Search Institute, Spiritual Development (sense of purpose); Farrington et al. (2019), arts education and social-emotional learning (identity as an artist); National Research Council (2009), Learning Science in Informal Environments (science identity); Rehabilitation Act, 29 U.S.C. 733(b)(5) (self-advocacy).
```

**Y6**, before:

```
Search Institute Developmental Assets (Positive Values); NCSS (2013) C3 Framework (Civics); Muhammad, Five Pursuits (Criticality); NAAEE (2019) Guidelines for Excellence; ISTE Standards for Students (Digital Citizen); CIRCLE (2002) civic engagement indicators (civic voice and community action).
```

After (ISTE year from CP-12-05, unchanged):

```
Search Institute Developmental Assets (Positive Values); NCSS (2013) C3 Framework (Civics); Muhammad, Five Pursuits (Criticality); NAAEE (2019) Guidelines for Excellence; ISTE Standards for Students (2024) (Digital Citizen); CIRCLE (2002) civic engagement indicators (civic voice and community action); secondary: VIA Classification of Character Strengths (Forgiveness); Watts, Diemer & Voight (2011), critical consciousness.
```

**Y7**, before:

```
Perkins V; WIOA performance indicators, 20 CFR 677.155; OCTAE Employability Skills Framework; CFPB Building Blocks and National Standards for Personal Financial Education; Conley, Four Keys; Chafee daily living skills.
```

After (20 CFR 681.460 folded into the existing WIOA item, as CP-12-06's devil's-advocate review
proposed; it is WIOA, already in the anchor list, so it is not a secondary):

```
Perkins V; WIOA performance indicators, 20 CFR 677.155, and youth program elements, 20 CFR 681.460; OCTAE Employability Skills Framework; CFPB Building Blocks and National Standards for Personal Financial Education; Conley, Four Keys; Chafee daily living skills; secondary: Casey Life Skills Toolkit (2022) (daily living skills); 42 U.S.C. 675(5)(I) (documents for youth leaving foster care); 29 U.S.C. 705(5) (competitive integrated employment).
```

**Y8**, before:

```
CDC WSCC; Keyes, Dual Continua Model; CDC Youth Risk Behavior Survey; Healthy People 2030; SHAPE America national standards; NCTSN; CJCA (2009).
```

After (CP-12-14 item 27's names, all of them, in one clause):

```
CDC WSCC; Keyes, Dual Continua Model; CDC Youth Risk Behavior Survey; Healthy People 2030; SHAPE America national standards; NCTSN; CJCA (2009); secondary: CDC Health Education Curriculum Analysis Tool (HECAT, 2021); National Sex Education Standards (2020); Search Institute, 40 Developmental Assets (Safety); Monitoring the Future (perceived risk); CDC, About Youth Violence; OJJDP (2017), diversion; ACF NYTD (health insurance); CDC & U.S. Department of Education (2014), Bullying Surveillance Among Youths.
```

**F1**, before:

```
CSSP Strengthening Families Protective Factors; Ascend 2Gen Approach; Epstein's six types of involvement; Mapp & Kuttner (2013) Dual Capacity-Building Framework; MIECHV (F1.3 only).
```

After (CP-12-14 item 27's names, moved into one clause at the end):

```
CSSP Strengthening Families Protective Factors; Ascend 2Gen Approach; Epstein's six types of involvement; Mapp & Kuttner (2013) Dual Capacity-Building Framework; MIECHV (F1.3 only); secondary: WIOA Title II, Adult Education and Family Literacy Act (adult education); Digital Equity Act (digital skills); IDEA Parent Training and Information Centers, 20 U.S.C. 1471 (parent training); SNAP-Ed Evaluation Framework (family eating habits); Healthy People 2030, MICH-14 and MICH-15 (infant health practices).
```

**F2**, before:

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD.
```

After (CP-12-14 item 27's names):

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD; secondary: CFPB Financial Well-Being (financial cushion); Runaway and Homeless Youth Program, 45 CFR 1351 (stable housing and safe exits); Healthy People 2030, AHS-01, NWS-01 and SDOH-04; USDA nutrition security (2022); McKinney-Vento Act, including the HEARTH Act.
```

Until V8 returns, the item "USDA nutrition security (2022)" is left out. Until V11 returns, the last
item reads "McKinney-Vento Act" (the batch-3 rule: name HEARTH only while its row stands).

**A1**, before:

```
Learning Forward (2022) Standards for Professional Learning; U.S. Surgeon General (2022) Framework for Workplace Mental Health & Well-Being.
```

After:

```
Learning Forward (2022) Standards for Professional Learning; U.S. Surgeon General (2022) Framework for Workplace Mental Health & Well-Being; secondary: Guskey (2002), Levels 2 and 4 (participants' learning, and their use of new knowledge and skills); SAMHSA (2014), trauma-informed approach; NIOSH WellBQ (2021); BLS Job Openings and Labor Turnover Survey.
```

**A2, A3:** unchanged. A3's line already names every source its codes cite. A2's gaps (Epstein for
A2.6; Weiss, Little & Bouffard for A2.5; ESSA 7119 for A2.3) go to the A2 anchor re-review that
CP-12-18 holds, so A2's line is edited once.

### Every handed item, with its claim

| Domain | Item | Registry entry | Claim(s) | Handed by |
|---|---|---|---|---|
| Y1 | Seal of Biliteracy Guidelines | seal-of-biliteracy-guidelines-2020 (new) | y1-subject-04 (SUPPORTED); cite_as blocked on V1 | CP-11-01 |
| Y2 | CASEL (curiosity and open-mindedness) | casel-2020 | y2-05 (SUPPORTED) | CP-12-01, CP-12-16 |
| Y3 | Chafee 677(a)(2) and NYTD | chafee-42usc677-a2 (new), acf-nytd | y3-05, y3-06 (SUPPORTED) | CP-12-02, CP-12-16 |
| Y4 | CCSS Speaking and Listening anchor 4 | ccss-speaking-listening-anchors (new) | y4a-01 (SUPPORTED) | CP-12-03, CP-12-16 |
| Y4 | NHES 2024 Standard 4 | shape-nhes-2024 | y4b-10 (SUPPORTED) | CP-12-03, CP-12-16 |
| Y5 | Search Institute, Spiritual Development | search-spiritual-development (new) | y5-14 (SUPPORTED) | CP-12-04 |
| Y5 | Farrington et al. (2019) | farrington-2019-arts-sel (new) | y5-07 (SUPPORTED) | CP-12-04 |
| Y5 | National Research Council (2009) | nrc-2009-informal-science (new) | y5-06 (PARTIAL); entry blocked on V-Y5-2 | CP-12-04 |
| Y5 | 29 U.S.C. 733(b)(5) | rehab-act-29usc733-pre-ets (new) | y5-05 (SUPPORTED on Cornell; entry blocked on V-Y5-1, official copy) | CP-12-04 |
| Y6 | VIA Classification of Character Strengths | via-character-strengths (new) | y6-07 (SUPPORTED) | CP-12-05 |
| Y6 | Watts, Diemer & Voight (2011) | watts-diemer-voight-2011 (new) | y6-01, y6-02 (SUPPORTED) | CP-12-05 |
| Y6 | ISTE Standards for Students (2024) | iste-students-2024 (new) | y6-06 (SUPPORTED) | CP-12-05 |
| Y7 | Casey Life Skills Toolkit (2022) | casey-life-skills-toolkit (new) | y7-13 (SUPPORTED) | CP-12-06 |
| Y7 | 42 U.S.C. 675(5)(I) | usc-42-675-5i-vital-documents (new) | y7-18 (SUPPORTED; fit partial, G4) | CP-12-06 |
| Y7 | 29 U.S.C. 705(5) | rehab-act-29usc705-cie (new) | y7-11 (SUPPORTED) | CP-12-06 |
| Y7 | 20 CFR 681.460 | wioa-20cfr681460 | y7-09 (SUPPORTED; fit partial, G4) | CP-12-06 |
| Y8 | HECAT (2021) | cdc-hecat-2021 (new) | y8a-01 (PARTIAL), y8a-02..07, y8a-17, y8a-18 | CP-12-07, CP-12-14 |
| Y8 | National Sex Education Standards (2020) | nses-2020 | y8a-19, y8a-20 (SUPPORTED) | CP-12-07, CP-12-14 |
| Y8 | Search Institute, 40 Developmental Assets (Safety) | search-40-assets | CP-10-01 record (Y8.10 support excerpt) | CP-12-14 |
| Y8 | Monitoring the Future | mtf-2026-vol1 (new) | y8b-10 (PARTIAL) | CP-12-07, CP-12-14 |
| Y8 | CDC, About Youth Violence | cdc-youth-violence-2024 (new) | y8b-13 (SUPPORTED) | CP-12-07, CP-12-14 |
| Y8 | OJJDP (2017), diversion | ojjdp-2017-diversion-review (new) | y8b-16 (SUPPORTED) | CP-12-07, CP-12-14 |
| Y8 | ACF NYTD (health insurance) | acf-nytd | CP-10-01 record (Y8.5 support) | CP-12-14 |
| Y8 | CDC & ED (2014) bullying definitions | cdc-ed-bullying-2014 | CP-10-01 record (Y8.12 support) | CP-12-14 |
| F1 | WIOA Title II (AEFLA) | wioa-title-ii-aefla (new) | f1-06, f1-07 (SUPPORTED on Cornell; entry blocked on V10) | CP-12-08, CP-12-14 |
| F1 | Digital Equity Act | digital-equity-act | CP-10-01 record (F1.6 support) | CP-12-14 |
| F1 | IDEA Parent Training and Information Centers | idea-671-pti | CP-10-01 record (F1.7 support) | CP-12-14 |
| F1 | SNAP-Ed Evaluation Framework | snap-ed-framework-mt1 (new) | f1-11 (SUPPORTED) | CP-12-08, CP-12-14 |
| F1 | Healthy People 2030, MICH-14 and MICH-15 | hp2030-mich14, hp2030-mich15 | CP-10-01 records (F1.3 supports) | CP-12-08, CP-12-14 |
| F2 | CFPB Financial Well-Being | cfpb-financial-well-being-2015 (new) | f2-02 (SUPPORTED) | CP-12-09, CP-12-14 |
| F2 | Runaway and Homeless Youth Program, 45 CFR 1351 | rhy-45cfr1351 (new) | f2-06, f2-07 (SUPPORTED) | CP-12-09, CP-12-14 |
| F2 | Healthy People 2030, AHS-01, NWS-01, SDOH-04 | hp2030-ah01-ahs01, hp2030-nws01 (new), hp2030-sdoh04 (new) | f2-03 (PARTIAL), f2-05, f2-09 (SUPPORTED) | CP-12-09, CP-12-14 |
| F2 | USDA nutrition security (2022) | usda-fncs-nutrition-security-2022 (new) | f2-04 (PARTIAL); entry blocked on V8 | CP-12-09, CP-12-14 |
| F2 | McKinney-Vento, including HEARTH | mckinney-vento; hearth-42usc11386a (new) | CP-10-01 record (F2.3); f2-08 (PARTIAL; entry blocked on V11) | CP-12-09, CP-12-14 |
| A1 | Guskey (2002), Levels 2 and 4 | guskey-2002-pd-evaluation | CP-10-01 records new-guskey-2002-l2, new-guskey-2002-l4 | CP-12-10, CP-12-18 item 5 |

Items this CP adds that no batch CP handed (found by the check and a read of every Source line; all
existing CP-10-01 records, no new citation): Y1 National Reading Panel, NAEP, NAMLE, Conley Key
Cognitive Strategies, Head Start ELOF, Irvin et al. (2004), Attendance Works, McKinney-Vento and
675(1)(G) (CP-11-01's y1-attainment-03, y1-attainment-05), ESSA State report cards (CP-11-01's
y1-attainment-12), ESSA graduation-rate indicator, 20 CFR 681.460; Y2 Eccles and Hulleman; Y5 CASEL
and Muhammad; A1 SAMHSA (a1-05, CP-12-10), NIOSH WellBQ and JOLTS.

## Change: registry (`codebook-refinement/v3/`, new rows in the batch-4 module; not the JSON)

Table R. `CODEBOOK_NAMES_ADD`, so each name the check needs resolves (CLAUDE.md: a name in a
citation line goes into `codebook_names`).

```python
# Part 1, lands now: the name is already printed in the prompt today.
CODEBOOK_NAMES_ADD.update({
    'search-40-assets': ['Search Institute Developmental Assets'],          # Y2, Y3, Y5, Y6 domain lines
    'shape-nhes-2024': ['SHAPE America national standards'],               # Y8 line; Y8.3 Source names NHES
    'shape-pe-2024': ['SHAPE America national standards'],                 # Y8 line; Y8.2
    'cfpb-building-blocks-2016': ['CFPB Building Blocks'],                 # Y7 line
    'allensworth-easton-2005': ['UChicago On-Track Indicator'],            # Y1 line
    'allensworth-easton-2007': ['UChicago On-Track Indicator'],
    'namle-core-principles': ['NAMLE'],                                    # Y1.7 Source
    'irvin-2004-odr': ['Irvin et al. (2004)'],                             # Y1.14 Source
    'wioa-20cfr681460': ['20 CFR 681.460'],                                # Y1.17 Source (Y7.4 after CP-12-06)
    'hulleman-2010-utility-value': ['Hulleman et al. (2010)'],             # Y2.4 Source
    'muhammad-five-pursuits': ['Muhammad, Five Pursuits'],                 # Y2.1, Y5.2, Y6.3 Sources; Y2, Y6 lines
    'digital-equity-act': ['Digital Equity Act'],                          # F1.6 Source
    'digital-equity-act-1723': ['Digital Equity Act'],                     # A2.3 Source; A2 line
    'idea-671-pti': ['20 U.S.C. 1471'],                                    # F1.7 Source
    'hp2030-mich14': ['Healthy People 2030'], 'hp2030-mich15': ['Healthy People 2030'],
    'hp2030-ah01-ahs01': ['Healthy People 2030'], 'hp2030-sh04': ['Healthy People 2030'],
    'hp2030-su05': ['Healthy People 2030'],                                # Y8.1, Y8.5, Y8.11, F1.3 Sources; Y8 line
    'acf-nytd': ['ACF NYTD'],                                              # Y8.5, F2.3 Sources; F2 line
    'nses-2020': ['National Sex Education Standards'],                     # Y8.4 Source
    'niosh-wellbq-2021': ['NIOSH WellBQ'],                                 # A1.3 Source
    'bls-jolts-definitions': ['Job Openings and Labor Turnover Survey'],   # A1.3 Source
})
# Part 2, gate commit: the name is printed only by the new clauses, or its entry is new.
CODEBOOK_NAMES_ADD.update({
    'cdc-hecat-2021': ['HECAT'], 'mtf-2026-vol1': ['Monitoring the Future'],
    'cdc-youth-violence-2024': ['About Youth Violence'], 'ojjdp-2017-diversion-review': ['OJJDP (2017)'],
    'snap-ed-framework-mt1': ['SNAP-Ed'], 'wioa-title-ii-aefla': ['WIOA Title II'],
    'idea-671-pti': ['IDEA Parent Training and Information Centers'],
    'cfpb-financial-well-being-2015': ['CFPB Financial Well-Being'], 'rhy-45cfr1351': ['45 CFR 1351'],
    'hp2030-nws01': ['Healthy People 2030'], 'hp2030-sdoh04': ['Healthy People 2030'],
    'usda-fncs-nutrition-security-2022': ['USDA nutrition security'], 'hearth-42usc11386a': ['HEARTH Act'],
    'usc-42-675-1g-educational-stability': ['42 U.S.C. 675(1)(G)'],
    'essa-6311-advanced-coursework': ['ESSA State report cards'],
})
```

Each Part 2 row whose entry is created by another CP applies only once that entry exists.
`acf-nytd` also gets CP-12-16's "National Youth in Transition Database"; `chafee-42usc677-a2`
gets CP-12-16's "Chafee, 42 U.S.C. 677(a)(2)"; whichever of CP-12-16 and this CP lands first
applies those; the other drops the rows. The other new entries already carry the names their CPs
gave them (CP-12-04, -05, -06 and -16 above; "Guskey (2002)" from CP-12-18 (a)).

## Change: test (`codebook-refinement/sync.test.ts`, new `describe` at the end)

The existing blocks read the 2.x codebook; this block reads the 3.x data and registry only.

```ts
import { V3_DOMAINS } from '../codebooks/youthOutcomesV3.data.js';

describe('codebook 3.x: each cited framework is named in its domain line (G2, CP-12-29)', () => {
  const v3reg = JSON.parse(fs.readFileSync(path.join(here, 'sources/youth_outcomes_v3.sources.json'), 'utf-8'));
  const v3names: { name: string; source: any }[] = v3reg.sources
    .flatMap((s: any) => (s.codebook_names ?? []).map((name: string) => ({ name, source: s })))
    .sort((a: any, b: any) => b.name.length - a.name.length);
  const spansIn = (text: string) => {
    const spans: { start: number; end: number; source: any }[] = [];
    for (const { name, source } of v3names) {
      for (let at = text.indexOf(name); at !== -1; at = text.indexOf(name, at + name.length)) {
        const end = at + name.length;
        if (!spans.some(s => at < s.end && end > s.start)) spans.push({ start: at, end, source });
      }
    }
    return spans;
  };
  const backsDomain = (s: any, domain: string) => s.supports.some((x: any) => !x.proposed && x.code.split('.')[0] === domain);

  // Pairs left for the A2 anchor re-review (CP-12-18, held). Don't add to it; remove a pair once fixed.
  const KNOWN_GAPS = new Set(['A2.6 epstein-six-types']);

  it('names, in the domain line, every source a code line names', () => {
    const missing = new Set<string>();
    for (const d of V3_DOMAINS) for (const cat of d.categories) for (const c of cat.codes) {
      for (const { source } of spansIn(c.source)) {
        if (!(source.codebook_names ?? []).some((n: string) => d.frameworkBasis.includes(n))) missing.add(`${c.id} ${source.id}`);
      }
    }
    expect([...missing].filter(m => !KNOWN_GAPS.has(m))).toEqual([]);
    expect([...KNOWN_GAPS].filter(g => !missing.has(g)), 'fixed: remove from KNOWN_GAPS').toEqual([]);
  });

  it('resolves every "secondary:" item to a source that backs a code in the domain', () => {
    const bad: string[] = [];
    for (const d of V3_DOMAINS) {
      const m = d.frameworkBasis.match(/secondary:\s*(.*)$/i);
      if (!m) continue;
      let depth = 0, start = 0;
      const text = m[1].replace(/\.\s*$/, '');
      const items: string[] = [];
      [...text].forEach((ch, i) => {
        if (ch === '(') depth++;
        if (ch === ')') depth--;
        if (ch === ';' && depth === 0) { items.push(text.slice(start, i).trim()); start = i + 1; }
      });
      items.push(text.slice(start).trim());
      for (const item of items) {
        const ok = v3names.some(({ name, source }) => item.includes(name) && backsDomain(source, d.id));
        if (!ok) bad.push(`${d.id}: "${item}"`);
      }
    }
    expect(bad).toEqual([]);
  });
});
```

(`fs`, `path` and `here` are already defined in the file; `V3_DOMAINS` is the export the 3.x tests
use. If `V3_DOMAINS`' type names the domain id field differently, use that name.) The second test is
why every item must carry a registry name of a source supporting that domain: it keeps the clause
from naming a framework the registry does not hold, the 3.x form of the 2.x "names no framework
the registry does not know" check.

Expected result on the gate branch: the first test lists only `A2.6 epstein-six-types` (in
`KNOWN_GAPS`); the second passes. If a blocked entry (V1, V-Y5-1, V-Y5-2, V8, V10, V11) has not
landed, its item is left out of the clause, so both still pass.

### `basis`, rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`, `docs/`

Unchanged. `docs/codebook/research-basis.md`'s statement that A1's split comes from Guskey is
CP-12-30's.

## Sources

No new citations. Every item names a registry entry that is `verified` or added by a CP under its
verified claim (table above). Items whose entry waits on a verification enter only with that entry.

## Verification requests

None new. Blocking requests belong to their CPs: V1 (CP-11-01), V-Y5-1 and V-Y5-2 (CP-12-04), V8
(CP-12-09), V10 (CP-12-08), V11 (CP-12-09).

## Gate

The shared two-run design-set gate after PRs #62 and #66. Domain lines are read for every
statement, so the run report covers all design rows; rows to watch are those the handing CPs list
(CP-12-16: S129, S132, S059; CP-12-04: Y5.3, Y5.5, Y5.6 rows; CP-12-05: S012, H015; CP-12-07 and
CP-12-14: the Y8 rows; CP-12-08, CP-12-09: the F1 and F2 rows). Expected flips: none (names only).

## Gold impact

- Rows expected to change code: none.
- New proposed rows: none. Held-out gold was not read.

## Judge result

Judged in the shared gate.
