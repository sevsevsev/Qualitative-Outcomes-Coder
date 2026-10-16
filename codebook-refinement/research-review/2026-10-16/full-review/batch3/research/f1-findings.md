# F1 Family & Caregiver Strengthening: research findings (f1)

Researcher: f1. Date: 2026-10-16. Scope: F1.1 to F1.9 (data.ts line 1619), codebook 3.1.4. F1.9 is
read under the CP-09-01 candidate wording (draft PR #62); no F1.9 boundary change is proposed.
Everything here is a lead for independent verification. No repo file was changed.

Note on the task line "F1.7 keeps MIECHV": in data.ts MIECHV supports **F1.3** (frameworkBasis
"MIECHV (F1.3 only)"); F1.7 cites no MIECHV source. I treated the settled decision as applying to
F1.3 and did not reopen it.

Real use (unique texts, logic-model run / no-logic-model run): F1.1 9/4, F1.2 2/2, F1.3 0/4,
F1.4 0/0, F1.5 2/0, F1.6 none listed, F1.7 8/2, F1.8 5/2, F1.9 13/4. Design gold (adjudicated):
F1.1 8, F1.2 3, F1.3 3, F1.4 2, F1.5 1, F1.6 4, F1.7 6, F1.8 2, F1.9 2.

## Summary table

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Domain anchor | CSSP SF, Ascend 2Gen, Epstein, Mapp & Kuttner 2013 | Keep CSSP, Ascend, Epstein. Note Mapp & Kuttner 2013 is superseded by Version 2 (Mapp & Bergman 2019) | high (superseded), medium (V2 text) |
| F1.1 | CSSP Knowledge (direct, name only); Epstein T1 | Keep; add CSSP *Core Meanings* (2015) component text (positive discipline, nurturing) | high |
| F1.2 | Epstein T4 (located) | Keep; upgrade Epstein to primary (Corwin 2019); optional tier-A add: WIOA family literacy, 29 U.S.C. 3272(9)(B)-(C) | high / medium |
| F1.3 | MIECHV; HP2030 MICH-14/15 | Fix citation: "family eating habits / fruit and vegetable intake" has no cited support. Add USDA FNS SNAP-Ed Evaluation Framework MT1, or log an FD | high (gap), medium (fix) |
| F1.4 | CSSP Parental Resilience (partial x2) | Fix citation: CSSP *Core Meanings* (2015) defines it on cssp.org; should make fit direct | high |
| F1.5 | CSSP Social Connections (direct) | Keep | high |
| F1.6 | Ascend Postsecondary; DEA 1721(12) | Fix citation: English proficiency, financial skills and "older adults" are uncovered. Add WIOA 29 U.S.C. 3272(1),(6); Ascend Economic Assets; DEA 1721(8) | high |
| F1.7 | IDEA 1471(b); CSSP Concrete Support (direct); Mapp & Kuttner (partial) | Drop the partial Mapp & Kuttner link from F1.7; keep the two direct ones | medium |
| F1.8 | Mapp & Kuttner (direct); Epstein T2 (partial) | Keep; consider re-citing Version 2 "Relational: built on mutual trust"; keep Epstein T2 as communication-only | medium |
| F1.9 | Epstein T3 + T5 (direct) | No boundary change. Flag 1: Epstein Type 3 includes families as "audiences", so CP-09-01's "Framework deviation: none" is inaccurate. Flag 2: design gold S176 conflicts with F1.9's exclude / A2.6's include | high |

## Domain anchor check (Q1, Q4)

- **CSSP Strengthening Families is current.** The project page (https://cssp.org/project/strengthening-families/)
  still lists the five factors: "Parental resilience ... Social connections ... Knowledge of parenting
  and child development ... Concrete support in times of need ... Social and emotional competence of
  children". The page does not mention a revision. CSSP now ships per-factor briefs headed "PROTECTIVE
  & PROMOTIVE FACTORS 4 OF 5" (the registry's Concrete Support PDF), alongside Youth Thrive. That is a
  repackaging; the factor names have not changed. The fifth factor (the child's social-emotional
  competence) belongs in Part Y, which is correct.
- **Epstein: a primary text is now reachable.** Corwin, the publisher of Epstein et al., *School,
  Family, and Community Partnerships* (4th ed.), hosts "Epstein's Six Types of Involvement"
  (https://resources.corwin.com/sites/default/files/5_4-keys_to_partnerships.pdf, "Copyright © 2019
  by Corwin"). This should let the registry move `epstein-six-types` from "located" (secondary NNPS
  compilation) to verified against the publisher. Verifier rows f1-03 to f1-05.
- **Mapp & Kuttner (2013) is superseded.** dualcapacity.org: "Version 2 has been adapted from the
  first version of the framework." Harvard's Ed Redesign lists "Karen L. Mapp and Eyal Bergman", dated
  2019-09-04. Under S1.4 the 2013 citation stays accurate as a citation of the 2013 publication, so
  this is low urgency. If the domain's frameworkBasis keeps the framework, cite Version 2. I fetched
  V2's text only from a district-hosted copy (https://aps2016.apsva.us/wp-content/uploads/2021/11/DCBFVERSION2FINAL.pdf),
  which lists "Relational: built on mutual trust" under process conditions. A verifier should find a
  publisher-hosted copy.
- **Ascend 2Gen is current** (page fetched; it has six building blocks including Economic Assets).
- **Taxonomy.** The four categories map well. A covers CSSP Knowledge, Epstein T1/T4 and MIECHV health.
  B covers CSSP Resilience and Social Connections. C covers Ascend, WIOA/DEA, CSSP Concrete Support
  and IDEA. D covers Epstein T2/T3/T5 and Mapp. Nothing well established is missing that programs
  write about, with one possible exception: child-maltreatment prevention, which is CSSP's own stated
  purpose and a MIECHV measure. Two real-run texts ("Documented prevention of youth entry into the
  formal child welfare system") were forced into F1.1 at low confidence. Two texts is too few to
  justify a code (S2.2). Log it as a backlog lead only.

## F1.1 Parenting Knowledge & Practices

- Evidence: CSSP, *Core Meanings of the Strengthening Families Protective Factors*
  (https://cssp.org/wp-content/uploads/2025/03/Core-Meanings-of-the-SF-Protective-Factors-2015.pdf).
  Knowledge of Parenting: "Understanding child development and parenting strategies that support
  physical, cognitive, language, social and emotional development", with sub-items including "positive
  discipline techniques" and "appropriate developmental expectations".
- Fit: direct for knowledge, discipline and interaction. Today the registry's CSSP link rests on the
  two-word factor name only (verifier note: "does not define them"), so adding the component text
  strengthens it.
- Fidelity (Q6): "parenting confidence" sits under CSSP's *Parental Resilience* ("having a positive
  attitude about one's parenting role"; "having self-confidence"), not under Knowledge. That is a
  boundary wrinkle with F1.4, not an unlogged departure: both codes are CSSP. "Including teen parents"
  is not a population mismatch, because CSSP covers all parents.
- Change: fix citation (add Core Meanings). PATCH. Claim f1-02.

## F1.2 Home Learning Environment & Routines

- Evidence: Corwin/Epstein Type 4: "Involve families with their children in learning at home,
  including homework, other curriculum-related activities, and individual course and program
  decisions." Tier-A option: WIOA, 29 U.S.C. 3272(9) "family literacy activities", including "(B)
  Interactive literacy activities between parents or family members and their children" and "(C)
  Training for parents or family members regarding how to be the primary teacher for their children"
  (https://www.law.cornell.edu/uscode/text/29/3272).
- Fidelity: "bedtime and daily routines" is not named in Type 4 (the verifier said so too). CSSP
  Core Meanings names "using predictable routines" under Knowledge. The departure is minor. Fix it by
  adding that component, not by logging an FD.
- Confidence: high (Epstein upgrade); medium (WIOA is optional, since one tier-A source is enough).

## F1.3 Family Health Practices (MIECHV kept, settled)

- Gap: the code includes "family eating habits" and "family fruit and vegetable intake", and
  adjudicated gold H072 ("Families increased their weekly consumption of fresh fruits and vegetables")
  sits here. None of the three cited sources covers it. The MIECHV summary's 19 measures cover
  breastfeeding, safe sleep, well-child visits and so on, but no nutrition measure. MICH-14/15 cover
  safe sleep and breastfeeding only. This is an **unlogged departure**. Without a new source it would
  be S1.6 *codebook-defined* (gold rows with no framework home).
- Better grounding: USDA FNS SNAP-Ed Evaluation Framework, MT1
  (https://snaped.fns.usda.gov/framework/components/mt1): "Changes in individual and family healthy
  eating behaviors on the pathway to achieving the current Dietary Guidelines for Americans
  recommendations". Indicators include "Cups of fruit consumed per day". This is tier A, cross-age
  (population listed: "Older adults, adults, adolescents, children, preschoolers, and toddlers"), and
  not early-childhood-specific. Statutory basis: 7 U.S.C. 2036a(b), "promotes healthy food choices
  and physical activity consistent with the most recent Dietary Guidelines for Americans".
- Caveat: Congress ended SNAP-Ed. The University of Guam reports "the federal termination of the
  program under the One Big Beautiful Bill Act" (signed 2025-07-04; the program ended 2025-09-30;
  https://www.uog.edu/news-announcements/2025-2026/guams-snap-ed-nutrition-education-program-to-phase-out-following-federal-cuts).
  The framework is still a published federal-agency framework, but it is no longer funded. A
  verifier should confirm the page stays up. If it doesn't, log an FD instead.
- Real use: the no-logic-model run put SNAP-Ed's own goal ("make healthy food choices", "adopt
  physically active lifestyles", "prevent obesity", "reduce chronic disease"; 4 unique texts) in F1.3
  at medium. Those are about SNAP-eligible *individuals*, while F1.3 says "for children". Treat this
  as a lead for an adult-health hint later, not as a change now.
- Change: fix citation (add MT1), or log FD (codebook-defined). PATCH either way. Confidence: high
  that the gap exists; medium on the fix, given the program's status. Claim f1-11.

## F1.4 Caregiver Well-Being & Resilience (partial x2)

- Evidence: CSSP Core Meanings, Parental Resilience: "Managing stress and functioning well when faced
  with challenges, adversity and trauma". Sub-items include "managing anger, anxiety, sadness, feelings
  of loneliness and other negative feelings" and "seeking help for self when needed". The document is
  hosted on cssp.org, which answers the verifier's note that the definition was found only on a
  secondary host (cantasd.acf.hhs.gov).
- Fit: direct for stress and resilience. "Lower caregiver depression" is close (sadness, help-seeking)
  but the source never names depression. That is acceptable as a reading of the source; it is not a
  departure.
- Change: fix citation; replace the two partial links' reliance with this component. PATCH. Confidence
  high. Zero real-run use, 2 gold rows. Claim f1-01.

## F1.5 Caregiver Social Connections

Keep. Core Meanings: "Positive relationships that provide emotional, informational, instrumental and
spiritual support". This could be added in the same citation PATCH, but it is not needed.

## F1.6 Adult Education, Skills & Employment

- Fidelity gap: the definition names "English proficiency", "financial skills" and "older adults".
  Ascend Postsecondary covers higher education and workforce development. DEA 1721(12) covers digital
  literacy. Neither names English acquisition or financial skills. Ascend is parent-framed, while the
  code covers "other adult participant[s]" (gold H062 English, H078 older adults' tech anxiety). These
  are unlogged departures, closable by citation:
  - WIOA, 29 U.S.C. 3272(1) "adult education": "academic instruction and education services below the
    postsecondary level that increase an individual's ability to" read, write and speak English,
    attain a secondary credential, and obtain employment. 3272(6) "English language acquisition
    program". This is tier A, covers any adult, and matches the GED and CASAS gold rows.
  - Ascend, Economic Assets: "Economic Assets as including housing, transportation, financial
    education and asset building".
  - DEA, 47 U.S.C. 1721(8) "covered populations" includes aging individuals (1721(3), the "older
    individual" of 42 U.S.C. 3002).
- Status note: NTIA "sent termination of funding letters to recipients of grants authorized under the
  Digital Equity Act" (NACo, 2025-05-14), and Broadband Breakfast (2026-08-25) reports a first step
  toward reopening. The statute and its definition still stand (Cornell shows no repeal), so keep it.
  WIOA is the steadier tier-A anchor.
- Change: fix citation (three adds). PATCH. Confidence high. Claims f1-06 to f1-09.

## F1.7 System Navigation & Rights Knowledge

- IDEA 1471(b) and CSSP Concrete Support are direct and need no recheck. Core Meanings repeats the
  sub-items "understanding one's rights in accessing eligible services ... navigating through service
  systems". The Mapp & Kuttner link is partial (verifier: the 4 C's "are broader than rights knowledge
  and system navigation").
- Change: drop the Mapp & Kuttner link from F1.7 (fix citation, PATCH). The code keeps two direct
  sources. Confidence medium: removing a link is low-risk but optional.
- Real use: 8+2 unique texts, mostly "access to resources" and "connection to community resources".
  These fit CSSP Concrete Support. No change.

## F1.8 Family Connection & Trust with the Program

- Mapp & Kuttner 2013 is direct (trust). Epstein T2 is partial (communication only). Keep both;
  Epstein T2 should be read as supporting only the "communication between them" clause. If the domain
  moves to Version 2, the trust component is "Relational: built on mutual trust" (claim f1-12; medium,
  district-hosted copy only).
- Change: keep; optional re-cite. Confidence medium.

## F1.9 Family Participation & Leadership (CP-09-01 candidate; no boundary change proposed)

- Evidence (Corwin, Epstein et al. 2019): Type 3 "Improve recruitment, training, and schedules to
  involve families as volunteers and audiences at the school"; Type 5 "Include families as
  participants in school decisions, governance, and advocacy through the PTA/PTO, school councils".
- **Flag 1 (fidelity of CP-09-01's own statement).** CP-09-01 says "Framework deviation: none. F1.9
  moves closer to its anchor". But Type 3 names families as "audiences", and the candidate exclude
  ("Family attendance at workshops or events, counted or per family") sends exactly that to A2.5. The
  narrowing may still be right as an outcome-versus-output rule. However, it moves part of an
  Epstein component out of its anchored code, and under S4.1 the CP should say so (a new FD, or a
  note on why it is not one; none of the four S1.6 cases fits cleanly). "Leading or co-hosting
  family events" fits Type 3 (volunteers) better than Type 5 (decisions). Confidence high on the
  text; the decision is Severin's.
- **Flag 2 (gold vs text).** Adjudicated design row S176 ("The program will create a family advisory
  board with parent representatives.") is gold F1.9. F1.9 excludes "the organization creating
  structures", and A2.6 *includes* "Creating a parent advisory council". The text and the
  adjudication disagree. Ask Severin; do not touch gold.
- Real use: many F1.9 texts are bare "family/parent engagement" at medium confidence. Once PR #62
  settles, consider whether CP-09-09 domain-only coding (F1, "none") is the better home for bare
  "engagement". This is a lead only.

## Drift (S4.9)

F1 shows 0 of 9 in DEVIATIONS.md. If the citation fixes above are not made, the honest count is 2 of 9
(F1.3 codebook-defined; F1.6 adapted for English, financial skills and older adults). That is under the
one-third line either way. With the fixes it stays 0 of 9. The CP-09-01 Type 3 point could add one.

## Could not fetch / not done

- Oregon State Extension SNAP-Ed notice (fetch error); used the University of Guam instead.
- No publisher-hosted PDF of Dual Capacity Version 2 found.
- Epstein Type 1 text was not checked on the Corwin page (F1.1's T1 link was already verified via NNPS).
