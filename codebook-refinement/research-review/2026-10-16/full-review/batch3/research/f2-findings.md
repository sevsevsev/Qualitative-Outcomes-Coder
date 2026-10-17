# F2 Basic Needs & Economic Stability: research findings (researcher f2)

Date: 2026-10-16. Scope: F2.1-F2.3 (`codebooks/youthOutcomesV3.data.ts` from line 1819), plus the
adult-volunteering lead. These are leads for independent verification. No repo file was changed.
Real-use counts are unique texts (logic-model run / no-logic-model run), from
`real-run-code-counts.csv`; they are model codes, not gold.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| F2 anchor | Ascend Economic Assets (direct); CSSP Concrete Support (partial) | Keep Ascend as the anchor. Demote CSSP to background. Add McKinney-Vento to the frameworkBasis line, or drop it from F2.3 | high |
| F2.1 | Ascend (direct), CSSP (partial); 9 / 5 unique texts | Fix citation: add NYTD "financial self-sufficiency" for the independent-youth half (f2-01). Add CFPB Financial Well-Being (f2-02) as a tier-A replacement for CSSP. Add HP2030 AHS-01 or drop "Medicaid" from include (f2-03). Add a hint for bare "stability" statements | high (NYTD), medium (CFPB, Medicaid) |
| F2.2 | USDA HFSSM (direct for "enough food"); 6 / 3 | Fix citation: "access to healthy food" goes past HFSSM. Add USDA nutrition security (f2-04), or narrow the definition. HP2030 NWS-01 is optional (f2-05) | medium |
| F2.3 | NYTD (partial), McKinney-Vento (partial, wrong section); 1 / 3 | Re-anchor on 45 CFR 1351 RHY "Stable Housing" and "safe and appropriate exits" (f2-06, f2-07) plus HEARTH 42 U.S.C. 11386a(b)(1)(A) (f2-08) and HP2030 SDOH-04 for rent burden (f2-09). Fix the McKinney-Vento URL to 11434a or drop it (f2-10) | high (RHY, HEARTH), medium (SDOH-04) |
| Adult volunteering | Parents: F1.9 (Epstein Type 3). Other adults: no home | F2 is not a fit. Add a hint: caregiver volunteering → F1.9; volunteers as program workforce → A1. No new code (about 3 unique texts). Lead: AmeriCorps CEV (f2-11) | medium |
| Drift | DEVIATIONS shows F2 at 0 of 3 | Four unlogged go-beyonds (listed under Q6). All close with citation fixes, so none needs an FD entry if the fixes land | medium |

## Q1. Anchor check

- **Ascend 2Gen, Economic Assets: current, direct.** The page was fetched today (metadata last
  modified 2025-10-01). Excerpt: "Within the 2Gen approach we refer to Economic Assets as including
  housing, transportation, financial education and asset building, tax credits, student financial
  aid, nutrition assistance, and more."
  (https://ascend.aspeninstitute.org/2gen-approach/). Its scope covers all of F2: income, food
  and housing together. That supports F2 as a single domain. Ascend is tier D.
- **CSSP Concrete Support: current (2025 PDF) but partial.** Fetched today, the PDF contains
  "no sentences that mention income, financial matters, or benefits". It frames support as
  services received in a crisis, for example "not being able to feed their family or trauma".
  This confirms the 2026-09-27 verifier. As an F2.1 anchor it fits poorly. F1.7 is the better
  use of this source, and F1.7 already cites it.
- **Attribution.** F2.3 cites McKinney-Vento, but F2's `frameworkBasis` does not name it.
  This is a small inconsistency, fixed by data PATCH.
- **No rescissions found.** USDA HFSSM and NYTD are both still live; NYTD was fetched today.

## F2.1 Income, Benefits & Financial Stability

**Q2 fit.** Ascend Economic Assets is direct. CSSP is partial; see Q1.

**Q6 fidelity: three go-beyonds.**
1. *"independent-youth"* (definition) names a population. Ascend frames Economic Assets around
   "a family's economic and social mobility", and CSSP is about parents. Neither covers young
   people living alone. Fix with a citation, not an FD entry: NYTD already lists the outcome.
   Fetched today from https://acf.gov/cb/fact-sheet/about-nytd: "States will survey youth
   regarding six outcomes: financial self-sufficiency, experience with homelessness". Youth are
   surveyed at about ages 17, 19 and 21. The source is already verified in the registry, so this
   needs only a new `supports` link (**f2-01**). Confidence: high.
2. *"Medicaid enrollment"* (include). On the Ascend page, Medicaid sits under the Health block,
   not Economic Assets ("Health insurance is not mentioned by name… The Health section refers…
   to … Medicaid"). Healthy People 2030 AHS-01, fetched today, has the title "Increase the
   proportion of people with health insurance" and covers persons under 65
   (https://odphp.health.gov/.../increase-proportion-people-health-insurance-ahs-01/data-methodology).
   AHS-01 is already registered for Y8.5. There are two smallest changes. One is to add AHS-01 as
   F2.1 support (**f2-03**). The other is to drop "Medicaid" from the include line and leave
   health insurance to Y8.5. Y8.5 is a youth code, though, and real use includes "Increased rate
   of health insurance enrollment among eligible District families", coded F2.1 high, so the
   family case needs F2.1. Recommendation: add the citation. Without it, this is a
   merged-components case (Ascend Economic Assets plus Health). Confidence: medium.
3. *"financial stability"* is covered loosely by Ascend's "Financial stability is critical…".
   A tier-A source that defines it as an outcome is the CFPB Financial Well-Being Scale (Dec
   2015), fetched from
   https://files.consumerfinance.gov/f/201512_cfpb_financial-well-being-user-guide-scale.pdf:
   "a state of being wherein a person can fully meet current and ongoing financial obligations".
   It also lists "a financial 'cushion' against unexpected expenses and emergencies". The scale
   is for adults ("ages 18 and older"), so it fits the household and independent-adult scope.
   **f2-02** would replace CSSP's partial link with a tier-A direct one. Check CF-001 first:
   CFPB's youth Building Blocks is already the Y7.6 basis, and the adult scale must not pull
   youth money skills into F2.1. Confidence: medium.

**Real use (Q5).** Clear cases code well: "Short-Term Fiscal Stability", "Improved actor
financial stability", benefits and insurance enrollment. The weak rows are bare "stability"
statements, coded F2.1 at low or medium confidence: "Families experience greater stability",
"overall life stability", "Immigrant and EL families experience increased stability", "increase
family stability- intergenerational ripple effects". None of them names money, food or housing,
so they arguably go to F2 domain-only (CP-09-09) at best, or to uncoded. "Trusted, licensed
childcare option for parents" (low) and "receive full tuition" (medium) are also edge cases.
Ascend puts child care under Early Childhood Education and tuition under student financial aid,
which is in Economic Assets. Smallest change: a hint. "Stability" with no named material result
(income, benefits, food, housing) is not F2.1; code F2 domain-only only if the text names
economic or household material needs. Confidence: medium. This is a coding issue, not a
grounding issue.

## F2.2 Food Security

**Q2 fit.** HFSSM is direct for "enough food". The registry's verifier note says the module
"measures having enough food, not access to healthy food specifically."

**Q6 fidelity.** The definition says "and access to healthy food". That is a construct HFSSM does
not name, so it is an unlogged go-beyond. It matters in real use: "Increased access to
nutritional foods", "Improved nutrition security", "Families access supplemental produce" and
"access to fresh produce" are all coded F2.2 high.

**Q3 better grounding.** USDA's nutrition-security definition covers it. Fetched from
https://www.usda.gov/sites/default/files/documents/usda-actions-nutrition-security.pdf (March
2022): "Nutrition security, in turn, means consistent access, availability, and affordability of
foods and beverages that promote well-being, prevent disease". There was no archive notice in
the fetched text. The usda.gov/nutrition-security page also fetched, but its status under the
current administration is uncertain. **The verifier should confirm the 2022 PDF is not
withdrawn** (**f2-04**). If it is withdrawn, the smallest change is to narrow the definition to
"Having enough food". "Access to fresh produce" would then fall to F2 domain-only, or to F1.3
for household eating practices. Confidence: medium.

HP2030 NWS-01, fetched today, is titled "Reduce household food insecurity and hunger", status
"Getting worse". Its data source is the CPS Food Security Supplement, which is HFSSM-based. It
is an optional second tier-A anchor framed as an outcome objective (**f2-05**), and it adds
nothing on healthy food.

**Edge cases in real use.** "Enhanced family ability to manage food budgets…" appears in the
no-logic-model run as both F2.1 and F2.2. That is a caregiver skill, so F1.6 (financial skills)
fits better than either F2 code. A CF note or hint would settle it. "Expanding community-based
food production" and "Increased local food security" are community-level outcomes. They sit
near A3 or F2 domain-only, and there are too few to act on.

## F2.3 Housing Stability & Safe Living Situation

**Q2 fit.** Both cited links are partial. NYTD frames the outcome as "experience with
homelessness". McKinney-Vento defines homelessness for school eligibility, and the registry URL
points to 11432 while the definition is in 11434a. Neither covers "safe living situation",
"keeping a lease" or "reduced rent burden".

**Q3 better grounding (re-anchor).**
- **45 CFR part 1351 (RHY Program, ACF), tier A.** eCFR fetched today ("up to date as of
  10/14/2026"):
  https://www.ecfr.gov/current/title-45/subtitle-B/chapter-XIII/subchapter-D/part-1351.
  §1351.30(a)(1): "Grantees shall consistently enhance outcomes for youth in the following four
  core areas:". The fourth area is "(iv) Stable Housing", and §1351.31(a)(1) has the same for
  Transitional Living. §1351.30(d): "Grantees shall ensure that youth have safe and appropriate
  exits when leaving the program." §1351.1 defines safe exits, including "To independent living
  if consistent with the youth's needs and abilities", and excludes exits "To the street". This
  is a direct, outcome-framed source for both "stable housing" and "safe living situation" for a
  young person (**f2-06, f2-07**). Confidence: high.
- **HEARTH, 42 U.S.C. 11386a(b)(1)(A), tier A**, fetched today
  (https://www.law.cornell.edu/uscode/text/42/11386a). It covers households:
  "(i) the length of time individuals and families remain homeless;" and "(ii) the extent to
  which individuals and families who leave homelessness experience additional spells of
  homelessness;". These are the statutory basis of HUD's System Performance Measures
  (**f2-08**). Confidence: high on the text, medium on fit, because the framing is homelessness
  rather than tenancy.
- **HP2030 SDOH-04**, fetched today: "Reduce the proportion of families that spend more than 30
  percent of income on housing", data from the American Housing Survey (HUD & Census). This
  covers "reduced rent burden" (**f2-09**). Confidence: medium.
- **McKinney-Vento.** Its natural home is Y1.13 school stability, which already cites
  11432(g)(3) per the Y1 pilot. For F2.3 there are two options: fix the URL to 11434a (**f2-10**;
  I did not fetch 11434a, and the excerpt is the 2026-09-27 verifier's) or drop it from F2.3
  once the RHY and HEARTH links are in. Recommendation: drop it (smallest honest citation).

**Q6 fidelity.** "Safe living situation", "keeping a lease" and "reduced rent burden" go past
today's sources. The new links cover all three, so no FD entry is needed if they verify.
"Avoiding eviction" and "keeping a lease" are covered only loosely, through additional spells
of homelessness and housing cost burden. That is acceptable as indicators of stable housing.

**Real use.** There are few rows. "Achievement of immediate housing stability and safety for
youth at risk of homelessness" fits well. "Documented prevention of youth entry into the formal
child welfare system" was coded F2.3 at low confidence. That is a mis-route: child-welfare entry
is not housing. Flag it for the A3 or F1 researchers; it is not an F2 change.

## Q4 Taxonomy

The two categories (A economic stability; B food & housing) match Ascend's own list. Ascend also
names **transportation**, and puts **child care** under Early Childhood Education. Real use
shows one child-care text and no transportation outcomes. Y7.7 covers a youth's own
transportation skills, and A3 has an afterschool transportation policy example. No new code is
justified (S2.2, enum budget). HFSSM, RHY and HEARTH treat food and housing as distinct
constructs, as F2 does. Nothing well established is merged wrongly.

## Q5 Observability

All three constructs show up as plain status statements ("enroll in SNAP", "reduced food
insecurity", "secure stable housing"). No observability issue.

## Q6 summary: unlogged go-beyonds

| Code | Text | S1.6 case if not fixed | Closing fix |
|---|---|---|---|
| F2.1 | "independent-youth" | sector widening (population) | f2-01 NYTD |
| F2.1 | "Medicaid enrollment" | merged components (Ascend Health) | f2-03 AHS-01 |
| F2.2 | "access to healthy food" | codebook-defined element (construct) | f2-04 USDA, or narrow |
| F2.3 | "safe living situation", lease, rent burden | sector widening / construct | f2-06..09 |

With these fixes F2 stays at 0 of 3 counted deviations.

## Adult-volunteering lead

**Real use (unique texts, logic-model run):**
- "Parents will assist library coordinators as volunteers" and "Parent volunteers will take the
  lead…" → F1.9, which is correct.
- "Increase volunteers' awareness of resources for older adults" → F1.7.
- "Improve quality of life of senior volunteers" → A1.3.
- "Provide meaningful community-based volunteer opportunities for adults" → A2.5, an output.
- "Volunteers or gives back to the community" → Y6.5, population unclear.

That makes about 2-3 texts where the subject is a non-caregiver adult volunteer's own outcome.
In the no-logic-model run, "older adult volunteers will provide…tutoring" is a program
description and correctly uncoded.

**Is F2 the smallest fit?** No. F2 is material stability. No F2 source (Ascend Economic Assets,
CSSP Concrete Support, HFSSM, NYTD, RHY, HEARTH) names volunteering. Confidence: high.

**Does an adult/family framework cover it?**
- *Caregivers:* yes. Epstein Type 3 Volunteering is already F1.9's anchor and is reinforced by
  candidate CP-09-01 ("Families volunteering, leading family activities…"). Nothing to change.
- *Other adult participants (older adults, community members):* none of F1's anchors (CSSP,
  Ascend, Epstein, Mapp & Kuttner) covers volunteering by non-family adults. The closest tier-A
  measure is the AmeriCorps/Census CPS Civic Engagement and Volunteering Supplement. Its
  December 2024 summary, fetched from
  https://americorps.gov/sites/default/files/document/2025-01/CEV2023_HeadlineReport_12192024_508.pdf,
  refers to "formally volunteering through an organization" and says "Over 47,000 Americans age
  16 and up completed the latest survey". It is a measurement survey, not a framework, and the
  report gives no formal definition (**f2-11**, a lead). AmeriCorps' Longitudinal Study of
  Foster Grandparent and Senior Companion Programs, on volunteers' own health, is a study and
  not a framework; I did not fetch it.
- *Volunteers as program workforce:* A1 ("Staff & Volunteer Capacity") already takes their
  learning (A1.1). Their well-being (A1.3) rests on workplace sources that name workers, not
  volunteers. That is a possible small go-beyond for the A1 researcher to check.

**Smallest change:** a hint or CF line. Caregivers volunteering → F1.9. Volunteers' training or
well-being as the program's workforce → A1.1 or A1.3. A non-caregiver adult participant's own
civic volunteering stays domain-only or uncoded until more rows appear. No new code: the volume
is about 3 texts, it would cost +1 enum, and widening F1.9 to all adults would be a
sector-widening FD on Epstein. Confidence: medium. Coordinate with the Y6 researcher: if Y6.5's
CIRCLE (2002) source is age-neutral, "regular volunteering" could be cited for adults, but Y6.5
sits in Part Y and should not take adult subjects.
