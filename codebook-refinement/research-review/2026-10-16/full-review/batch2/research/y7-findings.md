# Y7 Career & Economic Readiness: research findings (researcher y7)

Date: 2026-10-16. Codebook 3.1.4; Y7.1-Y7.3 are read under PR #62's candidate wording (CP-09-03 and
CP-09-06). These are leads for independent verification. They are not evidence, and no repo
file was changed. The claims are in `y7-claims.json` (18 rows). Real-use counts are unique texts from both real runs
(LM = logic-model run, 3.1.2; NLM = no-logic-model run). These are model codes, not gold.

## Summary

| Code | Today | Suggestion | Conf. |
|---|---|---|---|
| Y7 (domain) | Bundle of 7 frameworks, no structural anchor | Add WIOA youth program elements, 20 CFR 681.460(a), as the cross-sector spine (it lists exploration, transition, work experience, credentials, financial literacy and entrepreneurship). Keep the current citations. | medium |
| Y7.1 | Perkins 2302 via Cornell (partial, host only) | Fix the citation: use the govinfo URL. Add Perkins 2302(7)(A) and 20 CFR 681.460(a)(13). "Aspiration toward a career field" is only partly covered. | high (URL); medium (aspiration) |
| Y7.2 | Conley Four Keys (direct, loose for work); Conley 2007 | Add Perkins 2302(7)(B) and 681.460(a)(14) for the work and training side. Resumes and interviews are still unsourced. Add "interview practice" to include (2 LM texts went to Y4.6). | medium |
| Y7.3 | OCTAE ESF (direct). PR #62 adds everyday digital skills "for work or daily life". | For PR #62's EC-01, WIOA 29 U.S.C. 3272(17) names "digital literacy skills" outright, which fits better than ESF Technology Use. The "or daily life" half is outside OCTAE: cite Casey CLS or drop those words. | high (fidelity flag); medium (fix) |
| Y7.4 | Perkins via Cornell (partial, host only); WIOA 677.155 | Fix the citation (govinfo). Add 681.460(a)(3)-(4). Entrepreneurship has no home (7 texts across 5 codes): add it to Y7.4's include, citing 20 CFR 681.560. | high (URL); medium (entrepreneurship) |
| Y7.5 | WIOA 677.155 (direct) | Its include names "competitive integrated employment", which 677.155 does not contain. Cite 29 U.S.C. 705(5). | high |
| Y7.6 | CFPB Building Blocks; Jump$tart/CEE 2021 (both direct) | Keep. Both are current. Optionally add 20 CFR 681.500 (a youth workforce anchor). | high |
| Y7.7 | Chafee 677(a)(1), adapted, FD-P15 open | FD-P15's revisit trigger is met in principle. Casey Life Skills states it is for all youth regardless of foster care. Re-anchor on Casey CLS (+ IDEA 300.43, Rehab Act 733(b)(4), FCS 3.0) and close FD-P15 once verified. Cite 42 U.S.C. 675(5)(I) for vital documents. | medium |

If FD-P15 closes, Y7's drift falls from 1/7 to 0/7.

## Q1. Anchor check

All cited Y7 sources are live and none has been superseded or rescinded:

- **OCTAE ESF** page loads with no archive or move notice. Technology Use reads "applying information
  technology appropriately and effectively" (https://octae.ed.gov/cte/initiatives/employability-skills-framework).
- **CFPB Building Blocks** page: "Page last modified Dec. 12, 2024", no archive notice. The three blocks
  are named ("Executive function", "Financial habits and norms", "Financial knowledge and
  decision-making skills").
- **Jump$tart/CEE**: "The current, 2021 edition" (https://jumpstart.org/education/national-standards/).
  No newer edition is shown.
- **Chafee 677(a)(1)** (Cornell) still reads "training and opportunities to practice daily living
  skills (such as financial literacy training and driving instruction)". The last amendment Cornell
  lists is Pub. L. 115-123 (2018). Cornell may lag, so a verifier should check govinfo for 2025
  amendments (Pub. L. 118-258) before re-citing. Confidence: medium.
- **Perkins V** on govinfo (https://www.govinfo.gov/link/uscode/20/2302) reflects amendments through
  Pub. L. 116-6 (2019). Y7.1 and Y7.4 were marked partial only because Cornell is not a government host
  (registry verifier_note). The same text is on govinfo, which lifts the partial with no change in
  meaning. Smallest change: fix the citation URL (claims y7-01, y7-08). Confidence: high.

**Structural anchor.** Y7 has no single anchor; its frameworkBasis lists seven. The WIOA youth
program's 14 required elements (20 CFR 681.460(a), eCFR) cover almost every Y7 category in one
federal list: "(13) ... such as career awareness, career counseling, and career exploration
services", "(14) Activities that help youth prepare for and transition to postsecondary
education and training", "(3) ... Pre-apprenticeship programs; ... Internships and job
shadowing", "(11) Financial literacy education;" and "(12) Entrepreneurial skills training;". This
fits the brief's preference for tier A, cross-sector sources: WIOA Title I youth serves both
in-school and out-of-school youth. The smallest change is to add 681.460 to frameworkBasis as a
supporting source. No recategorization is needed. Confidence: medium. The structure argument is mine;
the element text is verified-ready.

## Q2-Q3. Component fit and better grounding, by code

### Y7.1 Career Awareness & Exploration
- Perkins 2302(5)(D): "may include career exploration at the high school level or as early as the
  middle grades" (govinfo). This is direct, and only the host needs fixing.
- Two further components fit directly. Perkins 2302(7)(A): "information regarding career awareness
  exploration opportunities and planning" "with respect to an individual's occupational and academic
  future". And 681.460(a)(13), quoted above.
- **Fidelity (Q6):** the definition names "interest in or aspiration toward a career field". Perkins
  and WIOA name exploration, awareness and *planning*, not aspiration, which is an attitudinal construct.
  2302(7)(A)'s "planning with respect to an individual's occupational ... future" covers part of it.
  If a verifier rejects that reading, this is an unlogged departure with no clean S1.6 case. It is
  closest to codebook-defined, though gold such as S152 and [held-out row] does code it. Smallest change: add
  claim y7-02; if it fails, either narrow to "plans toward a career field" or log an FD. Confidence:
  medium.
- Real use: LM 66 unique texts, NLM 44, about 15-20% at medium. Low-confidence texts are vague
  "pathways" or "careers" statements ("STEM & Environmental Careers" went to Y7.5). That is wording,
  not a framework problem.

### Y7.2 College & Career Transition Knowledge
- Conley covers the college side directly. The registry says the work side (resumes, interviews) is
  "loose". Perkins 2302(7)(B) adds "career options, financial aid, job training, secondary and
  postsecondary options", and 681.460(a)(14) adds transition to postsecondary education and *training*.
  Both widen the cited basis to the training and work route (claims y7-04, y7-05).
- **Fidelity (Q6):** "resumes, interviews" in the definition are still not named by any fetched
  source. I found no tier A-B source naming them in the time available; a 20 CFR 686 (Job Corps) search
  did not surface usable text. This is a minor unlogged widening and should be flagged for a later
  source search. Confidence: medium.
- Real use: "interviewing skills, and communication" and "Academic Skills — Interviewing skills"
  went to Y4.6 (2 LM texts). Two other interview texts went to Y7.2. Smallest change (S2.2, an
  example or hint step): add "interview practice" to Y7.2's include, which matches its existing
  definition. Confidence: medium.
- CP-09-03 (college visits to Y7.2) fits Perkins 2302(7)(B)'s "postsecondary options" as well as
  Conley. That is a possible backup for its EC-02, but I have not duplicated it as a claim.

### Y7.3 Employability & Workplace Skills (PR #62 candidate wording)
- OCTAE ESF fits as direct for professionalism.
- **The H077 lead and PR #62's EC-01.** CP-09-06 rests the new digital-skills include on ESF
  "Technology Use". The page's wording is "applying information technology appropriately and
  effectively", and the word "digital" does not appear. A closer statutory fit is WIOA sec. 203(17),
  29 U.S.C. 3272(17), workforce preparation activities: "critical thinking skills, digital literacy
  skills, and self-management skills, including competencies in utilizing resources" (Cornell; govinfo
  URL in claim y7-06). This is tier A, names digital literacy as a workforce-readiness skill, and is
  cross-sector.
- **Fidelity flag on PR #62 (Q6).** The candidate include reads "everyday digital skills for work
  **or daily life**". Neither OCTAE (workplace) nor 3272(17) (employment and postsecondary
  transition) covers daily-life digital skills. As written, that is an unlogged widening, most likely
  sector-widening. Two fixes: cite Casey Life Skills, whose listed areas include "Computer literacy and
  online safety" (https://www.casey.org/casey-life-skills/, claim y7-07), or drop "or daily life".
  I am not proposing a new boundary; this is a note for PR #62's verifier and judge. Confidence: high
  that the gap exists; medium on the fix.
- Real use: digital-skills texts are scattered. There are 13 unique texts across 9 codes (LM: Y1.4 ×2;
  NLM: Y6.7 ×2, Y1.4 ×2, Y1.7, Y5.4, Y4.2, uncoded and others). Several are "beyond the digital arena"
  confidence or resilience statements that are correctly not Y7. Only about 4 are genuine
  digital-literacy outcomes. This confirms CP-09-06's own estimate that the problem is about definition
  accuracy, not volume.

### Y7.4 Technical Skills, Credentials & Work-Based Learning
- Perkins 2302(5)(A)(ii): "provides technical skill proficiency or a recognized postsecondary
  credential". 2302(5)(B): "include competency-based, work-based, or other applied learning". Both
  are direct on govinfo. Fix the host (y7-08).
- 681.460(a)(3)-(4) names internships, job shadowing, pre-apprenticeship and occupational skill
  training "that lead to recognized postsecondary credentials" (y7-09). This is a youth-specific
  source for "completing internships or apprenticeships".
- **Missing construct (Q4): entrepreneurship.** The field treats it as distinct: WIOA lists it as
  youth element 12, and 20 CFR 681.560 defines it as training that "provides the basics of starting
  and operating a small business" (claim y7-10). Real use has 7 unique texts spread over 5 codes. In
  NLM: "learn the fundamentals of entrepreneurship" and "create and pitch original business
  opportunities" went to Y7.4, "activating students' entrepreneurial mindset" to Y7.3, "Mastery of
  the fundamentals of the entrepreneurial mindset" to Y5.6, and "entrepreneurial confidence" to Y5.4.
  In LM, one text went to Y7.1. Smallest change (S2.2): widen Y7.4's include with "entrepreneurship
  and business-planning skills" and cite 681.560, with enum +0. A new code is not justified by 7 texts.
  Mindset and confidence wording can stay in Y5. Confidence: medium.

### Y7.5 Employment & Earnings
- 677.155 fits as direct for employment, earnings and the youth "education or training activities,
  or in unsubsidized employment" indicator (eCFR, re-fetched).
- **Fidelity (Q6):** the include names "competitive integrated employment". I checked eCFR 677.155,
  and the phrase does not appear. The term is defined in the Rehabilitation Act, 29 U.S.C. 705(5):
  "means work that is performed on a full-time or part-time basis (including self-employment)". This
  is a citation gap, not a scope change, because the Rehab Act is WIOA Title IV and shares 677.155's
  indicators. Smallest change: add the citation (y7-11). Confidence: high.
- Real use: 14 of 20 NLM texts are at medium. Several are mobility or "career success" statements
  ("Equitable Economic Mobility", "help alumni progress in their careers"). Mobility is a tie-breaker
  under the settled rules, so I make no domain change.

### Y7.6 Financial Capability
- Both anchors are current and direct. Keep them.
- Optional: 20 CFR 681.500 lists youth financial-literacy activities, beginning "The financial
  literacy education program element may include activities which:", and covers budgets, bank
  accounts, credit and debt including student loans (y7-12). It ties Y7.6 to the WIOA youth spine
  and covers "manageable debt" and student-loan statements (LM: "Graduate with manageable debt").
  Confidence: high, but low priority.

### Y7.7 Independent Living Skills (FD-P15)
- Chafee 677(a)(1) is still direct for "daily living skills", but its scope is "youth who have
  experienced foster care at age 14 or older". That is why FD-P15 records a sector-widening.
- **FD-P15's revisit trigger is met, pending verification.** Casey Family Programs' Casey Life Skills
  (CLS) says the tool is for "any youth between the ages of 14 and 21" and "can be used by all youth
  regardless of whether they are in foster care" (https://www.casey.org/casey-life-skills/; Toolkit
  v1.4, Dec. 2022, current). Its areas include "Daily living and self-care activities" and "Money
  management". The 2021 Practitioner's Guide (hosted by Maine DOE) says "These assessments are
  appropriate for all youth ages 14 to 21 years regardless of living circumstances". It places
  "healthy meal planning, and home maintenance" under Daily Living, "access to reliable
  transportation" under Housing, Money Management and Transportation, and "study skills, and time
  management" under Work and Study. That covers Y7.7's cooking, transportation, scheduling and
  self-care (claims y7-13, y7-14).
- **Tier caveat.** Casey is a nonprofit practitioner framework (tier D), while Chafee is tier A. Three
  tier A-B sources outside foster care show the construct is cross-sector:
  - IDEA 34 CFR 300.43(a)(2)(v): "If appropriate, acquisition of daily living skills" (education,
    students with disabilities; y7-15).
  - Rehabilitation Act 29 U.S.C. 733(b)(4): "workplace readiness training to develop social skills and
    independent living" (y7-16).
  - NASAFACS (2018) FCS National Standards 3.0, a school standards body (tier B) for all FCS students:
    14.3.3 "Demonstrate ability to select, store, prepare, and serve nutritious, aesthetically pleasing
    food and food product" and 2.1.1 "Apply time management, organizational, and process skills to
    prioritize tasks and achieve goals" (y7-17).

  None of these three is "all youth" on its own; together they show the construct is not a
  foster-care construct.
- **Vital documents.** Y7.7's include names "getting an ID, Social Security card and birth
  certificate". Casey CLS does not mention these, and Chafee 677(a)(1) does not list them either. The
  right cite is 42 U.S.C. 675(5)(I): "an official or certified copy of the United States birth
  certificate of the child", with an SSN card and state ID (y7-18). This item is foster-care specific
  by source. That is acceptable, because the statements that name it come from transition programs
  (S120).
- **Smallest change:** re-anchor Y7.7 on Casey CLS Daily Living and Self-Care, add IDEA, Rehab Act and
  FCS as supporting sources, keep Chafee and 675(5)(I) for the transition and documents items, and set
  fidelity to framework. This closes FD-P15. If the verifier or Severin rejects tier D as the primary
  anchor, keep FD-P15 open and add the tier A-B citations as supporting, which still shows the
  widening is cross-sector. Confidence: medium.
- **Real-use observation (Q5).** Generic "life skills" texts default to Y7.7 (LM: "life skills",
  "build other life skills.", "An after school garden club will allow students to gain life
  skills"). Other "life skills" texts go to Y4 or are uncoded (NLM: 5 uncoded, e.g. "develop the
  necessary life skills (attributes, attitudes, and characteristics)"). In youth development, "life
  skills" often means psychosocial skills (for example, "learn key life skills such as team work",
  coded Y4.7). A hint would help: send bare "life skills" with no daily-living content to domain-only
  Y7 or the named SEL skill, and reserve Y7.7 for practical self-sufficiency skills. I have no new
  source for this; it is a coding-consistency lead for the confusion miner. Confidence: low-medium.

## Q4. Taxonomy

The three categories (exploration and navigation; work readiness; employment and independence) map
onto WIOA's element groups and Perkins' CTE definition. I see no merges the field treats as wrong.
There are two gaps:
1. Entrepreneurship. Handle it through the Y7.4 include and 681.560, not a new code.
2. Daily-life digital skills. This is in flight in PR #62; see the fidelity flag under Y7.3.

Category C combines employment outcomes with independent-living skills. Casey CLS and Chafee both
group work and daily living under "transition to adulthood", so the grouping is defensible.

## Q5. Observability

Every Y7 construct appears in real program statements. The weakest is Y7.6 (LM 11, NLM 8 unique
texts), and its texts are clear. Y7.7's observability problem is the ambiguity of "life skills"
described above, not absence.

## Q6. Unlogged departures found

| Code | Text beyond source | S1.6 case | Smallest fix |
|---|---|---|---|
| Y7.1 | "aspiration toward a career field" | none clean (nearest codebook-defined) | add Perkins 2302(7)(A) (planning); narrow or log if it fails |
| Y7.2 | "resumes, interviews" | sector-widening (minor) | find a source; otherwise log |
| Y7.3 (PR #62) | digital skills "for ... daily life" | sector-widening | cite Casey CLS or drop the words |
| Y7.5 | "competitive integrated employment" | citation gap, not a departure | cite 29 U.S.C. 705(5) |
| Y7.7 | vital documents not in 677(a)(1) | citation gap | cite 42 U.S.C. 675(5)(I) |

## Not fetched or not resolved
- eCFR 34 CFR 361.48 returned a fetch error. I used the statute, 29 U.S.C. 733(b), instead.
- I did not check govinfo for a 2025 amendment to 42 U.S.C. 677; Cornell shows none.
- I did not re-fetch Conley Four Keys or Conley (2007). Both are direct in the registry and unchanged.
- I found no tier A-B source for resumes or interviews.
