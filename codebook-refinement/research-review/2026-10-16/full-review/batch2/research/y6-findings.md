# Y6 Character, Values & Civic Life: research findings (researcher y6)

Date: 2026-10-16. Scope: Y6.1 to Y6.7, codebook 3.1.4. These are leads for independent
verification. No repo file was changed. Real-run counts are unique texts (logic-model run /
no-logic-model run) from `real-run-code-counts.csv`. They are model codes, not gold.

## Summary table

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Y6.1 | Search Institute Positive Values (direct); basis also names Lerner (2005) Character | Keep the anchor. Drop the Lerner mention from `basis` (it has no registry entry). Forgiveness, sportsmanship and faith-grounded values go past Positive Values: cite VIA Forgiveness (y6-07) and log an FD for sportsmanship/faith (sector widening), or log one FD for all three | medium |
| Y6.2 | NCSS C3 Dimension 2 Civics (direct) | Keep | high |
| Y6.3 | Muhammad, Pursuit 4 Criticality (direct) | Keep, and add Watts, Diemer & Voight (2011) critical reflection / critical action as the youth-development and measurement anchor. This settles the open "[VERIFY before adding one]" note | high |
| Y6.4 | CIRCLE (2002) political voice + electoral indicators (direct) | CIRCLE does not list civic efficacy, youth councils/co-design or leadership, but Y6.4 names all three and adjudicated gold depends on them (H030, S039, S211). Add Watts et al. (2011) political efficacy (y6-02) and Search Institute "Youth as resources" (y6-03), or log an FD | high (gap) / medium (fix) |
| Y6.5 | CIRCLE (2002) community problem solving + regular volunteering (direct) | Keep. Optionally add Search Institute "Service to others" (youth-specific). Adult volunteering does not belong in Y6 | high |
| Y6.6 | NAAEE (2019) K-12 Strand 4 (direct); `basis` admits "connection to nature" is not covered | This is an unlogged departure: `fidelity: framework` with no FD, and S045 is adjudicated on it. Add UNESCO Tbilisi (1978) Awareness/Attitudes objectives (y6-05), or log an FD | high (gap) / medium (fix) |
| Y6.7 | ISTE Standards for Students (2016), Std 2 Digital Citizen (direct) | The anchor was revised: ISTE+ASCD released updated standards in July 2024, and Digital Citizen was the largest change. Re-cite as ISTE Standards (2024) 1.2 with 1.2.d Digital Privacy (y6-06). No definition change | high |
| Domain | Basis line for Y6 | Basis line is current after CP-10-02. `research-basis.md` still shows Lerner and NCSS D4 for Y6.4/Y6.5 (historical 3.0 document; note only) | high |

## Anchor check (Q1)

- **Search Institute 40 Developmental Assets.** Current and unrevised: the page carries
  "Copyright ©1997 Search Institute" and is written for ages 12 to 18
  (https://searchinstitute.org/resources-hub/developmental-assets-framework). The registry
  entry's `component` string reads "Positive Values (live registry status: located)" while
  the entry is `verified`, and Y6.1's `basis` still says "(located)". This is the same stale
  "located" pattern as the Y1 pilot. Data PATCH.
- **Lerner et al. (2005), Character (partial)** is still named in Y6.1's `basis`, but the
  registry has no Lerner entry (grep finds none). S1.1 and S1.5 do not allow a basis line to
  name a source the registry lacks. I could not fetch the paper (the ResearchGate URL was
  rejected by the proxy), so I cannot verify it. Smallest change: remove it from `basis`.
- **NCSS C3 (2013)**: direct, no sign of supersession. Not re-checked, per the brief.
- **CIRCLE / Keeter et al. (2002)**: correct attribution, and the ERIC copy is fine. The survey
  covered "youth and adults, 15 years of age and older" (ED498892), so its indicators are not
  youth-only. That does not matter for Part Y.
- **Muhammad, Five Pursuits**: direct. Not re-checked.
- **NAAEE (2019) K-12 Guidelines**: NAAEE's series page gives no newer K-12 edition
  (https://naaee.org/programs/guidelines-excellence names the guidelines but no year). I
  found no evidence that the 2019 edition was superseded.
- **ISTE Standards for Students (2016) has been revised.** ASCD/ISTE post (Carolyn Sykora,
  2024-08-02, https://ascd.org/blogs/a-new-approach-to-updating-the-iste-standards):
  "ISTE+ASCD released an updated version of the ISTE Standards reflecting a new, incremental
  approach". The post calls Digital Citizen the most substantial change. The live standard
  (https://iste.org/standards/students, "ISTE Standards © 2024 4.02") reads: "Students
  recognize the responsibilities and opportunities for positively contributing to their
  digital communities." The 2016 phrase "safe, legal and ethical" now sits in 1.2.a, and the
  registry excerpt quotes the superseded 2016 wording. → fix citation (y6-06). Keep the 2016
  entry as historical (S1.4: name as published).

## Y6.1 Positive Values & Character

**Component fit (Q2).** Positive Values lists Caring, Equality and social justice, Integrity,
Honesty, Responsibility and Restraint. Honesty: "Young person 'tells the truth even when it is
not easy.'" Responsibility: "Young person accepts and takes personal responsibility." These are
direct for integrity, honesty and responsibility.

**Fidelity (Q6), unlogged departures.** Y6.1's definition names "sportsmanship, forgiveness,
faith-grounded values". The Search Institute page does not mention sportsmanship, forgiveness
or faith (the only faith-related asset is "religious community" attendance, under Constructive
Use of Time). Adjudicated rows depend on all three: H015 and S180 (sportsmanship), S167
(forgiveness), S125 and S145 (faith values). Real use is mostly sportsmanship and
responsibility (no-logic-model run: "Increased sportsmanship through participation in
structured tournaments").
- **Forgiveness**: no Positive Values component. VIA Institute on Character classification,
  Forgiveness (Temperance): "I forgive others when they upset me and/or when they behave badly
  towards me" (https://www.viacharacter.org/character-strengths). Tier D page; the underlying
  Peterson & Seligman (2004) classification would be tier C, but I did not fetch it. → fix
  citation (y6-07). Fallback: FD, codebook-defined element.
- **Sportsmanship**: the construct is honesty, integrity and responsibility applied in sport.
  → FD, sector widening (sports programs), wording unchanged. VIA Fairness ("applying the same
  rules to everyone") is a partial alternative.
- **Faith-grounded values**: the values are Search Institute's own, but their grounding in
  faith is the codebook's addition. → FD, sector widening (faith-based programs). This could go
  in one entry with sportsmanship.

Confidence: medium. Two small FD lines are the alternative to adding VIA, which would bring in
a large second framework whose other strengths (Leadership, Teamwork, Gratitude) overlap Y4
and could invite drift. If VIA is adopted, cite only the Forgiveness component.

## Y6.2 Civic Knowledge

Keep. C3 Civics is direct, and real use fits it ("learn about America's judicial system and
constitutional principles"). CIRCLE's fourth dimension, attentiveness ("Things people do to
follow and stay current with political and newsworthy happenings", ED498892), has no code.
I found no statements that need one; note only.

## Y6.3 Critical Consciousness & Social Justice

**Better grounding (Q3).** Watts, Diemer & Voight (2011), "Critical consciousness: Current
status and future directions", *New Directions for Child and Adolescent Development* 134,
43–57, DOI 10.1002/cd.310 (copy fetched at
https://spherelab.psych.ucla.edu/wp-content/uploads/sites/301/2023/03/Critical-consciousness-Current-status-and-future-directions.pdf):
- "Critical reflection refers to a social analysis and moral rejection of societal
  inequities," (p. 46)
- "Critical action refers to individual or collective action taken to change aspects of
  society," (pp. 46–47)

This is a peer-reviewed youth-development model (tier C) with a measurement line behind it
(the Critical Consciousness Scale; ICPSR 36564 credits Diemer; I did not verify the
validation article). It matches the definition's two halves, analyzing and acting, more
directly than a pedagogy model does. Add it beside Muhammad, and remove the "[VERIFY before
adding one]" note from `basis`. Confidence: high.

**Observability.** Expressible. Real use: "Improved understanding of local environmental
justice issues"; "explore social justice, race, and equity".

**Overlap note.** Search Institute's Positive Values includes "Equality and social justice"
("promoting equality and reducing hunger and poverty"), which routes to Y6.3 in practice. No
change.

## Y6.4 Civic Voice, Leadership & Participation

**Component fit (Q2).** CIRCLE's 19 indicators (Civic 5, Electoral 5, Political voice 9) cover
testimony and contacting officials, petitions, protest, canvassing and voting. They do **not**
cover three things Y6.4's own text names (verified against ED498892):
1. **Civic efficacy** ("believing one can influence community decisions"). CIRCLE treats it as
   an attitude, not an indicator: "Individuals who feel they can make a difference in their
   communities or believe they have a responsibility to get involved" (p. 37, "The Engaged
   Worldview"). Adjudicated H030 depends on it.
2. **Youth councils, advisory boards, co-design**. Not measured. The closest item is student
   government as a participation rate. Adjudicated S039 and S211 depend on these.
3. **"Leadership"** (in the code name). Not a CIRCLE indicator. The real runs put vague
   community-leadership statements here ("community leadership"; "empower young people as
   positive leaders in their community"). Y6.4 is the largest Y6 code: 27 / 18 unique texts.

FD-P13 was closed as if CIRCLE covered the whole code. It covers the behavioral core only.

**Smallest change.** Fix citations:
- Watts et al. (2011), political efficacy: "Political efficacy is the perceived capacity to
  effect social and political change" (p. 46). Fits civic efficacy and H030 (y6-02).
- Search Institute, Empowerment, Youth as resources: "Young people are given useful roles on
  the community." (sic; the page's wording). Partial for youth councils and advisory roles
  (y6-03).

If the verifiers find these partial, log an FD (sector widening for youth governance roles,
codebook-defined for leadership). I am not suggesting a definition change. CP-09-08 Rule 7 and
the Y4.7 leadership boundary already handle group leadership versus community leadership; do
not duplicate them. UN CRC Art. 12 ("the right to express those views freely in all matters
affecting the child") is a rights instrument, not an outcome framework. It is not proposed.

Confidence: high that the gap is real, medium on the fix.

## Y6.5 Community Service & Action

Keep. CIRCLE's civic cluster ("Things people do to help in their communities or ways in which
they contribute to charities") and its volunteer definition ("actually working in some way to
help others for no pay") cover service hours, food drives and mission or service trips (S076,
S226). Optional youth-specific second anchor: Search Institute, Service to others, "Young
person serves in the community one hour or more per week." (y6-04). CIRCLE's civic cluster
also lists charity fund-raising (walks, runs, rides). Y6.5's include could name it without
any new source. Low priority; no gold row needs it.

**Adult volunteering lead.** Y6 is not the place to name it. Part assignment follows who
changes, so an adult's own volunteering belongs in Part F or A. In the real runs, the adult
volunteering statements landed in A2.5 ("Provide meaningful community-based volunteer
opportunities for adults", Students Run Philly Style), A1.3 ("Improve quality of life of
senior volunteers") and F1.7. The only Y6.5 row worded as volunteering ("Volunteers or gives
back to the community", Girls Inc.) targets youth. CIRCLE covers people aged 15 and over, so
the source would not block an adult code, but that question belongs to the Part F reviewer.
No Y6 change. At most, once Part F has a home, add a Y6.5 exclude pointer.

## Y6.6 Environmental Stewardship

**Fidelity (Q6).** The code says "framework", but its own `basis` says "'connection to nature'
not covered". NAAEE's executive summary uses none of the words appreciation, connection,
sensitivity, care or concern. The definition still names "connection to nature", adjudicated
S045 ("stewardship and connection to nature") depends on it, and real use is heavy ("Students
build lifelong connection to nature"; "deeper appreciation for nature"; "positive attitude and
feeling towards ocean environments"). This is an unlogged departure.

**Better grounding (Q3).** UNESCO (in co-operation with UNEP), *Intergovernmental Conference
on Environmental Education, Tbilisi, Final Report* (ED/MD/49, Paris, April 1978),
Recommendation No. 2, categories of EE objectives (third-party copy at
https://gdrc.org/uem/ee/EE-Tbilisi_1977.pdf; a unesdoc copy should be preferred if one can be
found):
- Awareness: "to help social groups and individuals acquire an awareness of and sensitivity to
  the total environment and its allied problems"
- Attitudes: "to help social groups and individuals acquire a set of values and feelings of
  concern for the environment, and the motivation for actively participating in environmental
  improvement and protection"

This is an intergovernmental founding framework (tier A-B) that the EE field builds on.
"Sensitivity" and "feelings of concern" are close to connection to nature but not identical,
so expect PARTIAL. If PARTIAL, log an FD (codebook-defined element or merged components).
Strand 4 does cover belief-in-impact statements ("developing efficacy and agency"), which fits
"Belief that they can make an impact on the environment". Gardening as stewardship (S247)
rests on Strand 4 "accepting personal responsibility" at partial fit. Note only.

Confidence: high on the gap, medium on the fix.

## Y6.7 Digital Citizenship & Online Safety

Fix citation (see the anchor check). The 2024 standard fits better, component by component:
1.2.d Digital Privacy, "Students take action to protect their digital privacy on devices and
manage their personal data and security while online." (privacy, passwords, phishing); 1.2.b
Online Interactions ("empathetic, inclusive interactions online") for respectful conduct. 1.2.c
Safeguard Well-being covers time online, which Y6.7 does not claim. Leave it out, or point
screen time to its health home. No definition change. Real use is small (1 / 4). The
CP-09-06 Y7.3 boundary (everyday digital skills) is unaffected. Confidence: high.

## Taxonomy (Q4)

Category C matches CIRCLE's own clusters: Y6.4 covers electoral and political voice, and Y6.5
covers civic. Nothing well established is merged wrongly. Two minor gaps: CIRCLE attentiveness
(no code, not needed) and Search Institute's Positive Values, which is spread across Y6.1, Y6.3
and Y4 (Caring), Restraint going elsewhere. That spread is acceptable, since each code cites
its own component. Drift: Y6 shows 0 of 7 today. Logging the findings above honestly gives 2
to 3 of 7 (Y6.1, Y6.4, Y6.6) unless the new citations come back SUPPORTED. Three of 7 (43%)
would cross the one-third line (S4.9), so the citation fixes matter more here than in Y1.

## Observability (Q5)

All seven constructs appear in written statements. Civic efficacy and connection to nature
appear as self-report attitudes, which programs do write.
