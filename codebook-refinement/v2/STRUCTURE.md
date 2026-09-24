# Framework review and proposed v2 structure (cycle 02)

This document answers three questions:

1. Are we using the best frameworks for the existing domains?
2. Do the existing domains make sense?
3. Should they be split or reorganized?

It also covers which frameworks to use for the missing constructs.

**Evidence base:**

- The framework research done in cycle 02. Verification status for each source is in
  `v2-candidate-sources.json`.
- Double-blind coding of 345 statements by two independent coder agents (Opus and
  Sonnet), described below.

## 1. How we measured

| Set | Statements | Coded under | Purpose |
|---|---|---|---|
| Design set | 255 (60 gold rows from cycle 01, 94 validation rows, 101 new gap/coverage statements) | v1.1.1 **and** v2 draft | Find where v1 breaks; build v2 |
| Held-out set | 90, written by a separate agent that never saw v2 | v1.1.1 **and** v2 draft | A fair test of v2 |

For each set, two coders worked blind to each other and to the expected answers. We
measured:

- **Agreement:** whether both coders chose the same primary code.
- **Forced fits:** outcomes where a coder said no subcategory really fits.

| | v1.1.1, design | v2, design | **v1.1.1, held-out** | **v2, held-out** |
|---|---|---|---|---|
| Primary-code agreement | 90.2% (κ 0.90) | 96.1% (κ 0.96) | **91.1%** (κ 0.91) | **88.9%** (κ 0.89) |
| Domain agreement | 92.9% | 97.6% | **94.4%** | **88.9%** |
| Both coders "high" confidence | 53% | 84% | **41%** | **57%** |
| Statements with a "no home" flag | 44 (17%) | 2 (1%) | **22 (24%)** | **14 (16%)** |

**How to read this honestly**

- **Counts in parentheses** in §2 and §5 are v1 forced-fit statements from both sets
  (72 of 345). They are listed in `gold/gold-cycle02.csv` (`v1_forced_fit=1`).
- **The design-set gains are inflated.** v2 was written after seeing where v1 failed on
  those same statements.
- **The held-out set is the fair test.** On it:
  - **v2 fits much better.** "No home" flags dropped by about a third, and
    both-coders-high rose from 41% to 57%.
  - **v2 is *not yet* more reliable.** Agreement is about the same and slightly
    lower: 88.9% vs. 91.1%. Domain agreement fell, because more domains mean more
    boundaries.
- **What drove the held-out disagreements:**
  - adults who are not caregivers;
  - teen parents;
  - per-person vs. aggregate participation;
  - career interest;
  - resource connection vs. benefits.
- **rc1 targets exactly those.** rc1 added about 15 tie-breakers and scope fixes, all
  marked "(rc1)" in the draft. Because the fixes came from this held-out set, it
  can no longer test them. A **fresh held-out set** is needed before calling v2
  better. See PLAN.md, phase 2.
- **Agreement is not accuracy.** Both coders are Claude models reading the same
  codebook, so they share blind spots. For example, in v1 both put sport skills in
  8.1 at *low* confidence. Human adjudication of the gold set is still the anchor.

## 2. Do the existing domains make sense?

v1.1.1 mixes **four different organizing axes**. That mix is the root cause of most
of the confusions in CONFUSIONS.md.

| Axis | v1 domains organized by it |
|---|---|
| **Who** changes | D11 (adults and system), D12 (caregiver) |
| **Kind of result** | D2/D3 (experiences), D4 (skills), D5 vs. D1 (behaviors vs. gains) |
| **Life area** | D7 civic, D8 health, D9 career |
| **Output vs. outcome** | 11.5; D10 access (a condition, not an outcome) |

Domain-by-domain assessment:

| v1 domain | Verdict | Why (evidence) |
|---|---|---|
| D2 Joy, Interest & Motivation | **Keep the core; move arts out** | The interest anchors are strong (Hidi & Renninger, Eccles). But 2.4/2.5 (creating and performing art) are content learning under the National Core Arts Standards, not motivation. Coders split "instrument proficiency" between 1.3 and 2.4. Phases 2–4 of interest had no code (validation row 16). |
| D3 Belonging | **Keep; move identity and family out** | CDC connectedness and Developmental Relationships fit well. 3.4 (identity) is not belonging; coders confused it with 4.1.2 and 6.4 (LGBTQ+ identity, STEM identity). 3.5 is a family construct. |
| D4 SEL (CASEL) | **Keep; make it skills-only and tighten to CASEL 2020** | CASEL is the right anchor (verified). Moving self-beliefs out (4.1.2–4.1.4 → Y4) removes the 4.1.4/5.4/6.4 triangle. Merging 4.5.1 and 4.5.3 removes a pair with no observable difference. Several CASEL skills (gratitude, refusal, group leadership) now have homes. |
| D5 Academic habits (Farrington) | **Keep as is** | Strong anchor. The domain was clean in both runs. |
| D6 PYD Assets (Search Institute) | **Dissolve** | The 40 Assets framework spans the whole field. As one domain it is a grab-bag: felt safety, values, activity participation, identity. The verifier found 6.1's definition matched the wrong asset category. Each piece now has a better home. |
| D7 Civic | **Keep; re-anchor** | The "CIRCLE Framework" does not exist as a named framework. Use the NCSS C3 Framework and the Five Cs "Contribution". Voting, civic efficacy, and environmental stewardship had no home (validation rows 23 and 58). |
| D8 Physical & Behavioral Health | **Split into three** | It bundled physical health, mental health, risk behavior, and justice. Nine statements were forced into 8.1: sleep, screenings, asthma, sport skills, cooking, gardening, screen time. Split into Y10 Physical Health, Y11 Mental Health, and Y12 Safety, Risk & Justice. |
| D9 College & Career | **Keep; drop 9.1; add financial capability and life skills** | 9.1 vs. 1.3 was pure framing (CF-010). Financial literacy (6 statements) and independent-living skills (5) were forced fits. |
| D10 Access & Equity | **Move to the program level** | These are conditions and inputs, not changes in people. The OTL citation can't be verified. |
| D11 Adult & System | **Split by level** | Adult learning, program quality, family-engagement systems, outputs, and policy were all in one domain. YPQA (program quality) had no home; turnover, partnerships, and collective efficacy were forced fits. |
| D1 Academic Learning | **Split learning from attainment** | Gains (reading, math) and statuses (attendance, credits, graduation) are different kinds of result. Also: writing had no home (reading-only 1.1), 1.3 had no valid source, and course-taking and grades were forced. |
| D12 Family | **Split; widen scope** | Caregiver-only scope stranded transition-age youth (own housing, own insurance) and non-caregiver adults (adult learners, older adults). See the gap table. Basic needs apply to any household, including a young person living independently. |

## 3. The proposed v2 structure

**The organizing principle is one axis per level:**

1. **Part** = who changes: Youth / Families & adult participants / Adults, organizations
   & systems.
2. **Domain** = life area.
3. **Kind of change** = a separate `outcome_type` field (knowledge, skill, attitude,
   behavior, status, output). It is anchored in the University of Wisconsin–Extension
   logic model (verified).

Coders agreed on `outcome_type` for 85% of statements.

| Part Y: Young people | Part F: Families & adults | Part A: Adults, orgs & systems |
|---|---|---|
| Y1 Engagement, Interest & Enjoyment (5) | F1 Family Strengthening & Adult Development (7) | A1 Staff & Volunteer Capacity (3) |
| Y2 Belonging & Relationships (5) | F2 Basic Needs & Economic Stability (3) | A2 Program Quality, Access & Reach (5) |
| Y3 Social & Emotional Skills, CASEL (17) | F3 Family–Program Partnership (3) | A3 Systems, Policy & Community Conditions (3) |
| Y4 Identity, Confidence & Agency (7) | | |
| Y5 Character, Values & Civic Life (7) | | |
| Y6 Academic Mindsets & Learning Behaviors (4) | | |
| Y7 Academic & Content Learning (10) | | |
| Y8 Educational Progress & Attainment (7) | | |
| Y9 Career & Economic Readiness (7) | | |
| Y10 Physical Health & Healthy Behaviors (7) | | |
| Y11 Mental Health & Well-Being (4) | | |
| Y12 Safety, Risk Behavior & Justice (4) | | |

The totals are 18 domains and 108 subcategories. In v1.1.1 there were 12 domains and
82 subcategories.

**Code format.** v2 uses flat two-level codes (e.g., Y3.3). There are no "category
header — do not use" levels, which retires one of v1's standing rules.

**The Gemini enum budget.** More codes need a schema change: **drop the domain enums
and derive the domain from the code prefix** (Y3.3 → Y3). The model no longer names
the domain at all, which saves 24 enum values.

| Schema | Estimated footprint | Status |
|---|---|---|
| v1.1.1 | 142 | Known to work live |
| v2 with the change | ≈151 (109 subcategories + 16 subject + 10 population + 7 confidence + 2 split + 7 outcome type) | Must be tested live before cut-over |

If the live test fails, the fallback is two-stage coding: Part/domain first, then the
subcategory.

**Old exports.** The crosswalk (`v1-to-v2-crosswalk.csv`) maps every v1 code:

| Mapping | Count | Handling |
|---|---|---|
| 1:1 or merge | 70 | Old exports convert automatically |
| Split | 12 | Need re-coding or a rule (e.g., 8.1 → Y10.1/Y10.3/Y10.4) |

## 4. Are we using the best frameworks?

For most existing domains, **yes**. The weak spots were imprecision (cycle 01b), plus
four places where a better framework exists:

| Area | v1 anchor | Better or added anchor (status) |
|---|---|---|
| Civic | "CIRCLE Framework" (doesn't exist as named) | NCSS C3 Framework (2013), Dimension 4 "Taking Informed Action" and the civics discipline (located); Lerner Five Cs "Contribution" (located) |
| Arts | NCAS placed under motivation | NCAS as a **content** standard in Y7.6 (verified) |
| Employability | "Perkins V / Soft Skills" | OCTAE Employability Skills Framework (verified) |
| Mental health | Keyes, illness continuum only | Keyes, both continua: MHC-SF flourishing (located) |
| Access | "OTL Standards" (unverifiable) | Digital Equity Act, 47 U.S.C. 1721 (verified); ED/DOJ 2015 LEP guidance (located); Weiss, Little & Bouffard (2005) participation (located) |
| Domain 6 | Search 40 Assets as one domain | Search 40 Assets used **per category** across Y1, Y4, Y5, and Y12 (verified) |

**Cross-cutting frameworks considered for the overall structure:**

- **UChicago "Foundations for Young Adult Success"** (Nagaoka et al., 2015): agency,
  integrated identity, competencies (located). This is the main justification for the
  new **Y4 Identity, Confidence & Agency** domain.
- **Lerner's Five (Six) Cs**: competence, confidence, connection, character, caring,
  contribution (located). This validates the Y2/Y4/Y5 split. Five Cs as the *top*
  level was rejected: it has no home for academics, health, attainment, family, or
  program outputs.
- **Harvard EASEL Explore SEL**: six domains, cognitive, emotion, social, values,
  perspectives, identity (located). It confirms that "identity" and "values" are
  treated as separate from CASEL's skill domains in the SEL field, which supports
  Y4 and Y5 being separate from Y3.
- **Urban Institute Candidate Outcome Indicators** (located). A breadth check: its
  mentoring indicators (attendance, study time, well-being, behavior, achievement,
  employment, participant satisfaction) all have v2 homes. "Participant
  satisfaction" became A2.5.
- **University of Wisconsin–Extension logic model** (verified). The basis of the
  `outcome_type` field.

## 5. Frameworks for the missing constructs

| Gap (evidence) | v2 home | Framework | Status |
|---|---|---|---|
| Youth financial capability (6 forced) | Y9.6 | CFPB (2016) Building Blocks; Jump$tart/CEE (2021) National Standards | verified |
| Independent-living skills, vital documents (5) | Y9.7 | Chafee, 42 U.S.C. 677(a)(1) "daily living skills" | verified |
| Youth's own housing (3) | F2 (scope) | ACF NYTD outcomes | verified |
| Sustained interest, passion (2) | Y1.3 | Hidi & Renninger phases 2–4 | verified |
| STEM or other field identity (1) | Y4.7 | Carlone & Johnson (2007), science identity | located |
| Self-advocacy, self-determination (2) | Y4.6 | Shogren, Wehmeyer et al., Causal Agency Theory | located |
| Sport and motor skills (3; plus 2 arts-technique rows → Y7.6) | Y10.2 | SHAPE America (2024) PE Standard 1; Head Start ELOF Perceptual, Motor & Physical | verified; located |
| Sleep, hygiene (1) | Y10.4 | Healthy People 2030 SH-04 | located |
| Health care access, screenings, chronic conditions, youth insurance (3) | Y10.7 | Healthy People 2030 AH-01, AHS-01; NYTD "access to health insurance" | located; verified |
| First aid, health knowledge (1) | Y10.5 | SHAPE America (2024) National Health Education Standards | verified |
| Sexual health *knowledge* (source gap) | Y10.6 | National Sex Education Standards, 2nd ed. (2020) | located |
| Flourishing (1) | Y11.2 | Keyes, MHC-SF | located |
| Writing (1) | Y7.2 | Common Core College & Career Readiness Anchor Standards for Writing | located |
| Science and engineering content (source gap in 1.3) | Y7.4 | NGSS three dimensions | located |
| Social studies content | Y7.5 | NCSS C3 Framework | located |
| Media literacy (1) | Y7.9 | NAMLE definition ("access, analyze, evaluate, create, and act") | verified |
| Environmental stewardship (2) | Y5.6 | NAAEE (2019) K–12 Guidelines, "Personal and Civic Responsibility" | verified (strand names) |
| Voting, civic efficacy (1) | Y5.3 | NCSS C3, Dimension 4 | located |
| Social capital, networks (1) | Y2.5 | Search Institute DR "Expand Possibilities" (verified); Mathematica Education-to-Workforce framework (located) | |
| Youth–family relationship, reunification (3) | Y2.4 | Chafee/NYTD "positive connections with adults"; Positive Youth Justice "attaching/belonging" | verified; located |
| Justice outcomes framed developmentally | Y12.4 | Butts, Bazemore & Meroe (2010), Positive Youth Justice | located |
| Family language access (v1 routed it to 10.2) | F3.3 | ED & DOJ (2015) Dear Colleague Letter, LEP parents | located |
| Caregiver or adult education, digital and financial literacy (6) | F1.5 | Ascend 2Gen "Postsecondary & Employment Pathways" (verified); Digital Equity Act "digital literacy" (verified) | |
| Family system navigation, rights (4) | F1.6 | CSSP "Concrete Support in Times of Need" (verified); ED/DOJ (2015) (located) | |
| Program quality (YPQA) (2) | A2.1 | Weikart Center YPQA pyramid: safe, supportive, interactive, engaging | located |
| Partnerships, collective impact (no forced rows; v1's 11.3 was too broad) | A3.2 | Kania & Kramer (2011), five conditions | verified |
| Community collective efficacy (1) | A3.3 | Sampson, Raudenbush & Earls (1997) | verified |
| Participant satisfaction | A2.5 | Urban Institute Candidate Outcome Indicators | located |
| **Still without a source** | Y8.4 discipline; A1.3 workforce stability; Y7.10 other applied skills; F1.7 family health practices | CRDC (lead); none; extension; Healthy People 2030 MICH (lead) | open |

## 6. What v2 deliberately does *not* change

- **CASEL stays the SEL spine,** and Farrington stays the spine for academic mindsets.
  Both were clean in every run.
- **Faith language is still routed to secular constructs** (Y4.5, Y5.1). There is no
  spiritual domain; rc1 only adds a rule for choosing between the two.
- **Subject area and target population stay separate fields.** Their values are
  unchanged.
