# y8b findings: Y8 Health, Safety & Well-Being, categories B and C (Y8.6 to Y8.13)

Researcher: y8b. Date: 2026-10-16. Codebook 3.1.4, `codebooks/youthOutcomesV3.data.ts` lines 1458 to 1615.
These are leads for independent verification. I changed no repo file. Use counts are unique texts from
`real-run-code-counts.csv` (logic-model run / no-logic-model run). Those are model codes, not gold.

## Summary table

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Y8.6 Symptoms & distress | Keyes Dual Continua (direct) | Keep Keyes. Add CDC Children's Mental Health (behavior or conduct problems), because the code names "behavioral problems" and "outbursts" and Keyes does not. Optional: YRBS 2025 Q29 (sad or hopeless). | medium |
| Y8.7 Flourishing | Keyes (direct); Keyes 2002 (partial) | Keep. Lead: Keyes (2006) on adolescent flourishing, which I could not fetch. "Feeling restored" goes past Keyes: drop the word or log an FD. | medium / low |
| Y8.8 Trauma recovery | NCTSN 12 Core Concepts (partial) | Pin the component to Core Concept 5 (danger and safety) plus concepts 3, 9 and 10 (recovery). Fix the stale "located" in `basis`. | medium |
| Y8.9 MH service use | CDC WSCC CPSS (partial) | Add Healthy People 2030 MHMD-03 and MHMD-06, and the new 2025 YRBS counseling or therapy item (Q94). All three are direct for service use. | high |
| Y8.10 Felt safety | Search Institute Safety asset (direct, tier D) | Keep. Optional tier-A proxy: YRBS Q13 (missed school because they felt unsafe). Remove the stale "PR #31, in flight" text from `useInstead` (it reaches the prompt). Fix the stale "located" in `basis`. | high (cleanup) |
| Y8.11 Substance use | YRBS (direct); HP2030 SU-05 (direct) | Keep. Add Monitoring the Future for "perceived risk". "Knowledge of risks" and "intentions" go past both sources: log merged-components (SHAPE NHES, y8a's source) or cite. | medium |
| Y8.12 Violence & bullying | YRBS (partial); CDC & ED 2014 bullying (partial) | Re-point the YRBS component to the 2025 questionnaire items (fights, weapons, bullying, dating violence) and to the About page's "exposure to community violence". Add the CDC youth-violence definition. "Warning signs" (knowledge) goes past the sources. | high |
| Y8.13 Justice | Harris, Lockwood & Mengers (2009), CJCA (partial, tier D) | Fix `source` text: the paper is "Defining and Measuring Recidivism", not "performance measures". Add the NCJRS record (NCJ 237765) as a stable URL. Add a CJCA→CJJA rename note; the citation itself stays. Add OJJDP's MPG diversion review (2017). Completing probation or a restorative agreement goes past the sources: log an FD (observability). | high (citation) / medium (FD) |

**YRBS 2023 and 2025 changes.** No item behind Y8.11 or Y8.12 was removed. The 2023 cycle added
social media, racism at school, ACEs, transgender identity, consent and unfair discipline. The 2025
cycle added a counseling or therapy item and binge eating. The 2025 change helps Y8.9. It harms
nothing in my scope. YRBS has no justice-involvement item, so it cannot support Y8.13.

**CJCA → CJJA.** The publisher is now the Council of Juvenile Justice Administrators. The 2009
paper was published under the old name, so S1.4 keeps "Council of Juvenile Correctional
Administrators" as written. Add a rename note only.

**Drift.** DEVIATIONS.md shows Y8 at 0 of 13. Logging what I found gives 2 counted
(Y8.13 observability; Y8.7 if "restored" stays) plus 2 merged-components entries that are not
counted (Y8.11, Y8.12). That is under the one-third line.

---

## Anchors (Q1)

**Keyes Dual Continua (category B).** The registry anchors it in Westerhof & Keyes (2010), whose
sample is adults. The model is current and still widely used, and nothing supersedes it. The code
text names no age group, so under the brief's age rule there is no population mismatch. I looked
for an adolescent statement: Keyes, "Mental health in adolescence: is America's youth
flourishing?" (*American Journal of Orthopsychiatry*, 2006). PubMed returned a CAPTCHA, NCBI
E-utilities were blocked by robots, and Europe PMC returned HTTP 429 (rate limited). **I could not
fetch it.** It is a lead only. Its claims row is included so a verifier can try.

**CDC YRBS (category C).** It is current. The About page (cdc.gov/yrbs/about/index.html, last
published 2025-04-25) still lists the excerpt the registry holds: "Substance use behaviors:
electronic vapor product and tobacco product use, alcohol use, and other drug use."

- **2023:** "These new questions assessed social media use, experiences of racism at school,
  adverse childhood experiences" (MMWR 73(4), https://cdc.gov/mmwr/volumes/73/su/su7304a1.htm).
  No violence, substance or safety item changed.
- **2025:** "a new YRBS question assessing receipt of mental health counseling or therapy was
  added in 2025." (MMWR 75 Suppl 1, https://www.cdc.gov/mmwr/volumes/75/su/su7501a1.htm). The
  2025 standard questionnaire has 106 questions. The overview names no deleted items.
- **Gender identity:** the 2025 national questionnaire still asks Q68 "Are you transgender?"

**CJCA (Y8.13).** The organization's own site says it was "originally incorporated as the Council
of Juvenile Correctional Administrators on July 1, 1994" (https://cjja.net/about/), so CJJA is the
same body renamed. The paper's federal catalog record lists Harris, Lockwood and Mengers, November
2009, NCJ 237765 (https://www.ojp.gov/ncjrs/virtual-library/abstracts/cjca-white-paper-defining-and-measuring-recidivism).
That record is a steadier URL than the Kansas DOC copy now in the registry. The citation
stays, plus a rename note in `cite_as`. Confidence: high.

**Healthy People 2030 (SU-05, plus the new MHMD leads).** Every page I fetched now carries this
banner: "Per a court order, HHS is required to restore this website to its version as of 12:00 AM
on January 29, 2025." The content is unchanged, but the pages may move. y8a owns HP2030 as an
anchor; I flag the banner only.

## Y8.6 Mental Health Symptoms & Distress

- **Fit (Q2).** Keyes' mental illness continuum covers symptoms such as depression and anxiety
  (registry, direct). That fit holds.
- **Fidelity (Q6).** The definition adds "behavioral problems" and the include adds "fewer
  outbursts". These are externalizing symptoms, and the Westerhof & Keyes statement does not name
  them. That is an unlogged construct widening.
- **Smallest fix: add a source.** CDC's Children's Mental Health pages put conduct problems inside
  children's mental health. The Behavior or Conduct Problems page (dated 2026-05-15) says: "Oppositional
  Defiant Disorder and Conduct Disorder are two types of disruptive behavior disorders"
  (https://www.cdc.gov/children-mental-health/about/about-behavior-or-conduct-problems-in-children.html).
  Its symptom list includes "Often being angry or losing one's temper". Confidence: medium. The page
  lists diagnostic criteria, not an outcome framework.
- **Optional tier-A support.** YRBS 2025 Q29: "did you ever feel so sad or hopeless almost every day
  for two weeks or more in a row"
  (https://www.cdc.gov/yrbs/media/pdf/2025/2025-YRBS-national-HS-questionnaire508.pdf).
- **Real use (5 / 9 unique texts).** Generic behavior statements land here: "Reduced behavioral
  incidents due to trauma-informed practices", "Improved student functional behavior", "positive
  behavioral change". The words "behavioral problems" pull in school conduct statements that may
  belong to Y1.14 or Y4.2. This is a confusion lead, not a source finding. If the CDC citation is
  not adopted, the alternative is to narrow the definition to "emotional or behavioral symptoms"
  with "use instead: Y1.14 school discipline incidents".

## Y8.7 Flourishing & Life Satisfaction

- **Fit.** Keyes' mental health continuum is direct. Use is the highest in my scope (15 / 18 unique
  texts), almost all "well-being" statements. Observability is good.
- **Fidelity.** The definition says "feeling restored or well". Restoration (as in S144: "feeling
  calmer and more restored after time spent in nature") comes from attention-restoration research,
  not from Keyes' emotional, psychological and social well-being. Smallest change: drop
  "restored" from the definition. S144 should still fit under "feeling well". If Severin wants to
  keep the word, log an FD (sector widening) instead. Confidence: low to medium.
- **Better grounding (lead).** Keyes (2006), the adolescent flourishing study (not fetched; see
  Anchors).

## Y8.8 Healing & Trauma Recovery

- **Fit.** The registry has it as partial: the 12 Core Concepts explain traumatic stress responses
  and are not an outcome list. In the fetched PDF, Core Concept 5 reads "Danger and safety are core
  concerns in the lives of traumatized children" and goes on: "Ensuring children's physical safety is
  critically important to restoring the sense of a protective shield." Concepts 3, 9, 10 and 11 name
  "recovery". Pinning the component to concept 5 (psychological safety) and concept 10 ("Culture is
  closely interwoven with traumatic experiences, response, and recovery") makes the citation
  component-level (S1.3). The fit stays partial for "processing trauma". Confidence: medium.
- **Better grounding.** I found no tier A to B youth outcome framework for healing.
  Healthy People 2030 AH-D02 ("Increase the proportion of children and adolescents with symptoms of
  trauma who get treatment") is about getting treatment, which is Y8.9, not recovery.
- **Data fix.** `basis` says "NCTSN 12 Core Concepts (located)" while the registry says verified.
  Data PATCH.
- **Real use (1 / 5).** "safely process trauma" and "process complex emotions and trauma through
  music" fit. "prevention and treatment of other traumas" is service use (Y8.9).

## Y8.9 Mental Health Service Access & Use

- **Fit.** WSCC's Counseling, Psychological, and Social Services is a school service component and
  is partial (registry note). Three direct tier-A sources now exist:
  - HP2030 MHMD-03: "Increase the proportion of children with mental health problems who receive
    treatment", ages 4 to 17, NHIS
    (https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/mental-health-and-mental-disorders/increase-proportion-children-mental-health-problems-who-get-treatment-mhmd-03).
  - HP2030 MHMD-06: "Increase the proportion of adolescents with major depressive episodes (MDEs)
    who receive treatment", ages 12 to 17, NSDUH
    (https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/mental-health-and-mental-disorders/increase-proportion-adolescents-depression-who-get-treatment-mhmd-06).
  - YRBS 2025 Q94: "which of the following best describes your experience with counseling or
    therapy" (national HS questionnaire), new in 2025 per MMWR 75.
- **Smallest change.** Fix the citation: add MHMD-03 as the primary source, keep WSCC. PATCH, enum
  +0. Confidence: high.
- **Real use (0 / 5).** "access to mental health and substance abuse services" and "Successful
  referral of at-risk individuals" fit. Observability is good.

## Y8.10 Felt Safety

- **Fit.** The Search Institute Safety asset ("Young person feels safe at home, at school, and in
  the neighborhood") matches the definition word for word. It is direct but tier D.
- **Optional tier-A proxy.** YRBS 2025 Q13: "on how many days did you not go to school because you
  felt you would be unsafe at school". This is a behavior proxy for felt safety, partial.
- **Cleanup (high).** `useInstead` ends "Mirrors CP-01-07's tie-breaker (PR #31, in flight)."
  `docs/codebook/change-log.md` says main "moved to 2.5.1 (PR #31, 6.1 safety wording and
  tie-breaker ...)", so PR #31 has merged. `useInstead` is printed into the prompt
  (`youthOutcomesV3.ts:60`), so this stale process note reaches the coder. Delete it (PATCH). The
  same pattern appears at data.ts lines 244 and 779 (CP-01-06, outside my scope). `basis` also says
  "located" while the registry says verified.
- **Real use (1 / 1).** It is barely used. Keep it: the construct is distinct and observable.

## Y8.11 Substance Use

- **Fit.** YRBS and SU-05 are direct for use. Neither covers "perceived risk", "intentions" or
  "knowledge of risks", all of which the include names. Real use leans on knowledge ("Increased
  knowledge of the risks associated with drug and alcohol use", "Drug/Alcohol prevention
  literacy").
- **Perceived risk.** Monitoring the Future tracks "in particular perceived risk and disapproval
  associated with use of the various substances tracked by the survey." Miech et al. (2026),
  Institute for Social Research, University of Michigan
  (https://monitoringthefuture.org/wp-content/uploads/2025/12/mtfvol12026.pdf). Tier A to B,
  NIDA-funded. Confidence: medium (the quote is short; a verifier should confirm it is
  adolescent-level).
- **Knowledge and intentions.** Knowledge is health-education content. y8a's SHAPE NHES citation
  covers health knowledge, so this is a merged-components FD inside the domain anchor (logged, not
  counted). I found no fetched source for intentions. Keep the word and include it in the FD, or
  drop it.
- **Gap (low).** Two no-logic-model texts about gambling disorder were coded Y8.11 at low
  confidence. None of the sources covers gambling. Do not add a code (S2.2); the
  low-confidence routing is acceptable.

## Y8.12 Violence, Bullying & Victimization

- **Fit fix.** The verifier found the claimed YRBS phrase is old wording. Re-point the component
  to the 2025 national questionnaire items: Q16 "how many times were you in a physical fight?", Q11
  and Q12 (weapon and gun carrying), Q26 and Q27 (bullied, electronically bullied), and Q21 and Q22
  (dating violence). Together these cover fighting, weapon carrying, bullying and dating violence
  directly. Community violence is covered by the About page's "Student experiences: parental
  monitoring, school connectedness, unstable housing, and exposure to community violence."
- **Add.** CDC, About Youth Violence: "Youth violence is the intentional use of physical force or
  power to threaten or harm others by young people ages 10-24."
  (https://www.cdc.gov/youth-violence/about/index.html). Ages 10 to 24 is wider than the code
  needs. The code text names no age, so this is not a mismatch.
- **Fidelity.** The include "dating-violence warning signs" (adjudicated S248, "identify warning
  signs") is knowledge, not behavior. Same treatment as Y8.11: a merged-components FD with SHAPE
  NHES. "Harassment" (S141) fits under bullying and electronic bullying.
- **Data fix.** `basis` says the bullying definitions are "located"; the registry says verified.
- Confidence: high.

## Y8.13 Justice Involvement, Diversion & Reentry

- **Citation text (S1.4, high).** `source` says "white paper on juvenile justice performance
  measures". The paper's title is *Defining and Measuring Recidivism: A CJCA White Paper*, and the
  verifier found no "performance measures" phrase in it. Fix the text. Add the NCJRS record URL.
- **What the paper covers.** It recommends recidivism measures ("Recidivism is defined as
  commission of an offense that would be a crime for an adult," p. 31: arrest, charge,
  adjudication, commitment). It treats diversion as a decision point. It does not discuss completing
  probation or diversion conditions.
- **Fidelity.** The definition ("completing diversion or probation") and include ("completing a
  restorative agreement") go past the source. Adjudicated S018 and S189 depend on that wording.
  - **Better grounding, partial.** OJJDP (2017), *Model Programs Guide Literature Review: Diversion
    from Formal Juvenile Court Processing*, NCJ 249701. It defines diversion as "an attempt to
    divert, or channel out, youthful offenders from the juvenile justice system"
    (https://ojjdp.ojp.gov/library/publications/model-programs-guide-literature-review-diversion).
    This is tier A for diversion, not for completion.
  - **Reentry.** OJJDP's Juvenile Reentry Programs I-Guide (2018, archived) names "reducing their
    recidivism rates" as the reentry aim.
  - **Smallest change.** Log an FD, case observability: programs report completion of conditions
    as the observable marker of avoiding further processing. Do not change the definition, because
    the gold depends on it. I could not fetch OJJDP's legacy performance measures, which may name
    completion directly (the JABG core-measures file came back as binary). That is a lead.
    Confidence: medium.
- **Real use (4 / 7).** "Successful diversion of families from regional truancy court" is coded
  here. Truancy court is a status-offense path, so it fits, but note the A2/F boundary for
  "families". "Strengthen readiness for re-entry" fits.
- **Tier.** The CJCA paper is tier D. OJJDP is federal (tier A). Consider making the OJJDP review
  the primary citation for diversion and keeping CJCA for recidivism.

## Taxonomy (Q4) and observability (Q5)

- **Category B** follows Keyes' two continua (Y8.6, Y8.7). Trauma recovery and service use are
  additions, not Keyes dimensions. They sit in "mental health" by topic, which is reasonable. No
  split is needed.
- **Category C** follows the YRBS groupings (substance use; injury and violence; bullying) plus
  felt safety and justice. Suicidal ideation and self-harm are a YRBS mental-health block. Today
  they would fall under Y8.6, but the code text does not name them. Suggest adding "suicidal
  thoughts or self-harm" to the Y8.6 include (YRBS mental health, "including suicide"). PATCH or
  MINOR wording, enum +0. Confidence: medium.
- **Observability.** Every construct appears in real program statements. Y8.10 is the thinnest
  (2 texts across both runs).

## Could not fetch

- Keyes (2006) adolescent flourishing study. PubMed showed a CAPTCHA; E-utilities is blocked by
  robots; Europe PMC returned HTTP 429.
- OJJDP JABG legacy core measures (returned as binary).
