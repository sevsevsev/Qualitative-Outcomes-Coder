# Y8 category A (Physical health, Y8.1-Y8.5) and Y8 domain anchors: researcher "y8a" findings

Date: 2026-10-16. Everything below is a lead for independent verification, not evidence. Excerpts
come from WebFetch runs on 2026-10-16; the fetch tool summarises around its quotes, so a verifier
should re-fetch and not join fragments. I did not re-check links marked direct unless the source
changed. I read only design gold. y8b covers Y8.6-Y8.13; the YRBS registry point (A3) touches
their codes too and is flagged for reconciliation.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Domain anchors | WSCC, HP2030, SHAPE 2024 | All current. Add CDC HECAT (2021) as the category-A component framework. Fix the YRBS name gap and the null tiers in the registry. | high |
| Y8.1 | WSCC (partial), SH-04 (direct); YRBS cited in the source line but **no registry link** | Add HECAT HBOs (activity, fruit and vegetables, cooking, hygiene, sleep) and YRBS 2025 items; add HP2030 PA-06. Screen time stays partial (PA-R02). Demote WSCC to domain context. | high |
| Y8.2 | SHAPE PE Std 1 (direct) | Keep. "Fine motor" goes past SHAPE: cite Head Start ELOF Fine Motor, or drop "fine motor" from the text. | medium |
| Y8.3 | NHES Std 1 (direct, but first aid and safety not named) | Add NHES Std 3 (reliable resources), indicator 1.x.3 (injuries), and HECAT Safety HBO 4 and 7. | high |
| Y8.4 | NSES 2nd ed. (direct), YRBS (direct, category only) | Keep. Optional: component-level NSES and YRBS 2025 items; add "puberty" to include (NSES PD strand). | medium-high |
| Y8.5 | HP2030 AH-01, AHS-01; NYTD (all direct) | The text names dental and vision visits, screenings, immunizations and chronic-condition management, which no cited component covers. Add HECAT PHW HBO 9-11, HP2030 IID-08, OH-08, MICH-17; optional YRBS 2025 dental item. | high |

No change here adds a code or touches the enum budget (S2.3). Every fidelity gap below is
closable by citation inside tier A, so none needs an FD entry if the citations verify.

---

## A. Domain-level anchor check

**A1. CDC WSCC: current, attribution needs a note.** The CDC page is live, not archived, and
shows no supersession: "CDC and ASCD (formerly the Association for Supervision and Curriculum
Development) developed the WSCC framework." Page date June 26, 2024; metadata last published
July 22, 2026. https://www.cdc.gov/whole-school-community-child/about/index.html
ASCD has since merged with ISTE: "ASCD members approved the merger on November 14, 2022."
https://www.ascd.org/news-media/ascd-iste-unite-to-design-the-future-of-learning
Under S1.4 the citation keeps "ASCD" and adds a note on the merger.
- Fit concern (already recorded by the 2026-09-27 verifier): the ten WSCC components ("Physical
  education and physical activity", "Nutrition environment and services", ...) are school
  services and environments, not youth outcomes. WSCC is fine as domain context but is a weak
  component-level source for any Y8 code.
- Confidence: high. **Change:** add the merger note to `cdc-wscc`. Keep WSCC in frameworkBasis;
  stop relying on it as Y8.1's component source (see Y8.1).

**A2. Healthy People 2030: current, with two things to watch.**
- The timeline page lists "Begin Healthy People 2040 development (in 2026)" and carries a banner:
  "Per a court order, HHS is required to restore this website to its version as of 12:00 AM on
  January 29, 2025." https://odphp.health.gov/healthypeople/about/timeline
- ODPHP sought comment (June 23 to July 16, 2026) to "refine or expand two existing Healthy
  People 2030 objectives" on screen time (PA-13, PA-R02).
  https://odphp.health.gov/news/202606/healthy-people-2030-seeks-public-comments-proposed-new-objectives-and-refinement-existing-screen-time-objectives
  This bears directly on Y8.1's screen-time component; recheck PA-R02 when the result is posted.
- Confidence: high. **Change:** none now; add a watch item to the next cycle's backlog.

**A3. CDC YRBS: current (2025 cycle), but a registry gap.** The 2025 standard high school
questionnaire is published (https://cdc.gov/yrbs/media/pdf/2025/2025-YRBS-Standard-HS-Questionnaire508.pdf).
The codebook writes "CDC Youth Risk Behavior Survey" in frameworkBasis and in the source lines of
Y8.1, Y8.4, Y8.11 and Y8.12, but `cdc-yrbss.codebook_names` holds only "CDC Youth Risk Behavior
Surveillance System" and "CDC YRBSS", so `sync.test.ts` does not link those mentions. Y8.1's
"CDC Youth Risk Behavior Survey (sleep)" has **no** `supports` row at all. The `about` page
(cited URL) names no sleep category: "Youth health behaviors and conditions: sexual, injury and
violence, bullying, diet and physical activity, obesity, and mental health including suicide."
- Confidence: high (repo facts plus fetched pages). **Change:** fix citation: add "CDC Youth Risk
  Behavior Survey" to `codebook_names`, and add a Y8.1 support pointing at the 2025 questionnaire
  (see Y8.1). Reconcile with y8b, who owns Y8.11 and Y8.12.

**A4. SHAPE America standards: current 2024 sets.** The NHES page lists the eight 2024
standards and keeps "2007 Standards" as a separate older set; the PE page labels "2024
Standards" and lists "2013 Standards" as the earlier set. No newer revision found.
https://shapeamerica.org/standards/health/new-he-standards/ ,
https://shapeamerica.org/standards/pe/new-pe-standards/
- Registry hygiene: `shape-nhes-2024`, `shape-pe-2024`, `nses-2020`, `hp2030-sh04` and
  `hp2030-ah01-ahs01` have `tier: null` (and mostly `publisher: null`). HP2030 is tier A; SHAPE
  and NSES read as tier B (standards bodies). Confidence: high. **Change:** fill tier and
  publisher in `build_registry.py`.

**A5. Taxonomy: CDC HECAT (2021) fits category A better than WSCC.** CDC's Health Education
Curriculum Analysis Tool lists topic modules "Food and Nutrition", "Physical Activity",
"Personal Health and Wellness", "Safety", "Sexual Health", "Mental and Emotional Health",
"Violence Prevention", "Alcohol and Other Drugs", "Tobacco", and states "The 2021 edition of HECAT
is available for download". https://www.cdc.gov/healthy-youth/hecat/index.html
Each module has numbered Healthy Behavior Outcomes (HBOs): youth behaviors, tier A, cross-sector
in wording, and they map onto Y8 codes almost one for one (PA, FN and PHW to Y8.1; Safety to
Y8.3; Sexual Health to Y8.4; PHW HBO 9-11 to Y8.5; MEH, AOD, Tobacco and Violence to y8b's codes).
It confirms the current category split rather than suggesting a new one: nothing well established
in HECAT is missing from category A, and nutrition, activity and sleep sit together only because
Y8.1 groups them (HECAT keeps them in separate modules; the gold never needed them apart, per
research-basis.md, so this is an S1.6 merged-components question only if Y8.1 is presented as one
HECAT component; it is not).
- Caveat: HECAT is a curriculum analysis tool for schools; its HBOs are what a curriculum
  "should enable students to" do, which is outcome language. Confidence: high for fit; medium on
  whether Severin wants it in frameworkBasis or only at code level. **Change:** add HECAT at code
  level (below); optionally add it to frameworkBasis.

---

## Y8.1 Healthy Daily Habits

Real use: 39 unique texts (logic-model run), 29 (no-logic-model); 19 and 10 low/medium. Examples:
"Improved oral hygiene habits among K-8 students", "Girls increase amount of physical activity
and decrease amount of sedentary behaviors". Design gold: S093, S121, S187, S205, S207.

**Fidelity (Q6).** The definition names physical activity, fitness, nutrition, sleep, hygiene
and recreational screen time. Registry support covers only WSCC (partial, no behaviors) and sleep
(SH-04). Hygiene, healthy cooking and screen time have no cited component, and activity and
nutrition have only the partial WSCC link. This is an unlogged departure in effect; no S1.6 case
fits, because a source exists. It is a citation gap.

**Better grounding (fetched):**
- HECAT PA, HBO 1: "Engage in moderate to vigorous physical activity for at least 60 minutes
  every day." HBO 2 names "cardio-respiratory endurance, flexibility, muscle endurance" (fitness,
  S093). https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_pa.pdf
- HECAT FN, HBO 3: "Eat lots of fruits and vegetables." HBO 10: "Prepare good-tasting,
  nutrient-dense foods for yourself and others." (healthy cooking, S187)
  https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_fn.pdf
- HECAT PHW, HBO 1: "Practice appropriate hygiene habits." HBO 2: "Get an appropriate amount of
  sleep and rest." https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_phw.pdf
- YRBS 2025 questionnaire: Q83 "On an average school night, how many hours of sleep do you get?";
  Q73 "During the past 7 days, on how many days were you physically active for a total of at
  least 60 minutes per day?"; Q66 "During the past 7 days, how many times did you eat fruit?"
- HP2030 PA-06: "Increase the proportion of adolescents who do enough aerobic physical activity"
  https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/physical-activity/increase-proportion-adolescents-who-do-enough-aerobic-physical-activity-pa-06
- **Screen time stays partial.** The 2025 YRBS has only Q77 "How often do you use social media?"
  (no hours of TV, games or computer), and no HECAT HBO names screen time. The best current
  federal text is HP2030 PA-R02, a research objective about parents: "Increase the proportion of
  parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years"
  https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/physical-activity/increase-proportion-parents-who-follow-aap-recommendations-limiting-screen-time-children-aged-6-17-years-pa-r02
  It names the construct for the right ages but makes parents the actor, so it is partial. Two
  design-gold rows (S207, H086) use screen time, so dropping it from the definition would orphan
  adjudicated gold.

**Confidence:** high for HECAT and YRBS (fetched, wording matches the code); medium for PA-R02.
**Change:** fix citation. Replace WSCC as the component source with HECAT PA HBO 1-2, FN HBO 3 and
10, PHW HBO 1-2, YRBS 2025 Q73/Q66/Q83 and HP2030 PA-06; record PA-R02 as partial for screen
time. Keep WSCC in frameworkBasis. Update the basis line, which says the YRBS sleep item is
"verified 2025" though no registry row holds it.

## Y8.2 Motor & Sport Skills

Real use: 3 / 20 unique texts, almost all sport skills ("Improved basketball technical skills",
"gain dexterity and coordination"). Gold: S031, S068, S074, S192, S255.

**Component fit.** SHAPE PE Standard 1 ("Develops a variety of motor skills.") is direct. The
grade-span indicators cover two include items explicitly: "Demonstrates correct technique in a
variety of outdoor activities." (1.8.1) and "Demonstrates water safety skills. If a pool facility
is available, demonstrates water safety and basic swimming skills." (1.12.9).
https://shapeamerica.org/standards/pe/new-pe-standards/ Optional: cite these indicators.

**Fidelity (Q6).** The definition and include name "fine motor" skills (gold S192, "holding a
pencil and using scissors"). The SHAPE PE page does not mention fine motor; it is a gross-motor
and movement framework. The natural source is Head Start ELOF, Perceptual, Motor, and Physical
Development, sub-domain "Fine Motor": "Fine motor skills refer to use of the small muscles found
in individual body parts" (descriptive page, not goal text).
https://headstart.gov/school-readiness/effective-practice-guides/perceptual-motor-physical-development
The brief allows early-childhood sources only when the construct is about young children by
definition. Fine-motor outcomes in program statements are almost always early-childhood ones
(S192 says "Children"), but the construct itself is not age-bound. HECAT PA has no motor-skill HBO.
- Confidence: medium (the ELOF page fetched, but not the framework's goal text; the age rule is a
  judgment call). **Change:** either cite ELOF Fine Motor (verifier should fetch the ELOF goal
  text), or, if Severin rules ELOF out, log FD (sector widening does not fit; this is
  codebook-defined for the fine-motor half) or drop "fine motor" and route S192 by tie-breaker.
  The citation is the smallest change.

## Y8.3 Health Knowledge & Safety Skills

Real use: 17 / 19 unique texts; generic health literacy dominates ("Increased health knowledge").
Several are mental-health literacy ("recognize the early warning signs of mental health
conditions"); that boundary with Y8.6-Y8.9 is y8b's, flagged for reconciliation. Gold: S108.

**Fidelity (Q6).** The definition lists first aid, injury prevention, finding reliable health
information, and the include names outdoor safety and responding to an allergic reaction. The
only cited component, NHES Standard 1 ("Use functional health information..."), names none of
these, as the 2026-09-27 verifier noted.

**Better grounding (fetched, same publisher already cited):**
- NHES 2024 Standard 3: "Access valid and reliable resources to support health and well-being of
  self and others."; indicator 3.8.3: "Access valid and reliable sources of health information,
  products, services, and other resources."
- NHES indicator 1.2.3: "Identify ways to prevent or reduce risks for illnesses and injuries."
  https://shapeamerica.org/standards/health/new-he-standards/
- HECAT Safety (2021), HBO 4: "Apply safety rules and procedures to avoid risky behaviors and
  injury." HBO 7: "Get help for oneself or others when injured or suddenly ill."
  https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_s.pdf
  No HBO uses the words "first aid"; HBO 7 is the closest (allergic reaction, first aid response).
- Confidence: high for Standard 3 and 1.x.3; medium for HBO 7 as "first aid" (close, not
  verbatim). **Change:** fix citation; no text change.

## Y8.4 Sexual & Reproductive Health

Real use: 5 / 11 unique texts. Several are puberty statements ("understand the physical,
emotional, and social changes that may occur during puberty") and one is violence prevention
("strategies to prevent interpersonal and sexual violence"), which belongs to Y8.12 by Y8.4's own
exclude. Gold: S002, S251.

**Currency.** NSES is still the second edition; the PDF loads with the title "National Sex
Education Standards: Core Content and Skills, K-12 (Second Edition)". No later edition found.
https://www.advocatesforyouth.org/wp-content/uploads/2020/03/NSES-2020-web.pdf

**Component fit.** Direct. The include items are each in NSES: SH.8.CC.2 "Explain there are many
methods of short- and long-term contraception that are safe and effective"; SH.12.GS.1 "Develop a
plan to access local resources and services related to reducing the risk of pregnancy and/or STDs
(including HIV)" (accessing services). YRBS 2025 has Q59 "The last time you had sexual
intercourse, did you or your partner use a condom?" and Q60 on the pregnancy-prevention method.
The registry's YRBS row names only the category "sexual"; component-level items are optional.

**Observability / scope.** NSES has a Puberty and Adolescent Sexual Development strand ("pivotal
milestones for every person..."). Y8.4's definition does not name puberty, yet the model already
routes puberty statements there. Adding "puberty and sexual development" to the include is a
widening inside the cited source (S2.2 step 3), not a deviation. Confidence: medium-high.
**Change:** keep; optional component-level citations; optionally add puberty to include.

## Y8.5 Health Care Access & Condition Management

Real use: 1 / 21 unique texts, mostly school-health services: "Increased compliance with
state-mandated immunization requirements", "improve asthma management", "Successful
identification of vision impairments through school-wide screenings", on-site dental care.
Gold: S061 (infant developmental screening), S064 (dental and vision), S094 (asthma), S191.

**Fidelity (Q6).** Cited components: AH-01 (adolescent preventive visit), AHS-01 (insurance),
NYTD (insurance). The definition goes past them: dental and vision visits, screenings,
immunizations, chronic-condition management, and developmental screenings in the include. All
are real-use constructs and three have adjudicated gold. Citation gap, not a construct problem.

**Better grounding (fetched):**
- HECAT PHW HBO 9: "Prevent serious health problems that result from common chronic diseases and
  conditions, such as allergies, asthma," (continues with diabetes and epilepsy); HBO 10: "Use
  healthcare services to address common infectious diseases and manage chronic diseases and
  conditions."; HBO 11: "Seek out healthcare professionals for appropriate screenings and
  examinations." https://www.cdc.gov/healthy-youth/hecat/pdfs/hecat_module_phw.pdf
- HP2030 IID-08: "Increase the proportion of adolescents who get recommended doses of the HPV
  vaccine" https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/vaccination/increase-proportion-adolescents-who-get-recommended-doses-hpv-vaccine-iid-08
  (IID-04, kindergarten MMR, is the school-entry analogue if wanted.)
- HP2030 OH-08: "Increase use of the oral health care system"; baseline covers "children,
  adolescents, and adults". https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/health-care/increase-use-oral-health-care-system-oh-08
- HP2030 MICH-17: "Increase the proportion of children who receive a developmental screening";
  screening ages "9, 18, and 24 to 30 months". This is about young children by definition, so the
  early-childhood rule allows it; it grounds the "developmental screenings received" include
  (S061). https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/children/increase-proportion-children-who-receive-developmental-screening-mich-17
- Optional: YRBS 2025 Q80 "When was the last time you saw a dentist for a check-up, exam, teeth
  cleaning, or other dental work?"
- Vision: HP2030 V-01 exists for ages 3-5 only (search result title; not fetched); HECAT HBO 11
  (screenings) covers vision for all ages, so V-01 is not needed.
- Confidence: high. **Change:** fix citation (HECAT PHW HBO 9-11; HP2030 IID-08, OH-08, MICH-17).
  No text change.

---

## What I could not do or did not check
- I did not fetch ELOF goal text for Fine Motor, HP2030 V-01, or the YRBS 2025 MMWR overview.
- The YRBS questionnaire and HECAT PDFs were read through the fetch tool's summary; item numbers
  and wording need a verifier re-fetch.
- I did not re-check the direct links (SH-04, AH-01/AHS-01, NYTD, SHAPE PE Std 1, NSES) beyond the
  currency checks above.
