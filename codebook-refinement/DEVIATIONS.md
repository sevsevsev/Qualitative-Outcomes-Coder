# Framework deviations log

Every code that departs from its domain's anchor framework has an entry here
(STANDARDS S1.6). Every CP states whether it adds or changes one (S4.1), and each
cycle report counts them per domain (S4.9). `deviations.test.ts` checks that this log,
the codebooks and the source registries agree.

**Fidelity** of a code is one of:

- **Framework:** matches a verified or located component of its domain's anchor. No
  entry needed.
- **Adapted:** anchored to a framework but departs from it in an allowed way
  (observability, sector widening, or merged components).
- **Codebook-defined:** no framework covers it; justified by adjudicated gold rows.

**Allowed cases (S1.6):** `observability` · `sector-widening` · `merged-components` ·
`codebook-defined`.

Each entry gives: code, fidelity, case, anchor and component, what departs, evidence,
alternative considered, where it was decided, and when to revisit it. Entries are
never deleted: a closed entry stays, with `Status: closed` and the reason.

---

## Live codebook (`codebooks/original.ts`)

### FD-001 · 4.3.4

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Domain 4 Framework Basis. 4.3.4 Awareness of supports and
  resources is not a CASEL example skill.
- **Departs:** sits inside the CASEL domain although CASEL doesn't list it. It was added
  before this log existed (the registry's `codebook_extensions` records the reason).
- **Evidence:** help-seeking prerequisites are a common outcome of school-based mental
  health programs (registry note); few gold rows.
- **Alternative considered:** anchor on CDC WSCC Counseling, Psychological, and Social
  Services (registry lead, unverified).
- **Decided in:** before cycle 02 (registry extension); logged here 2026-09-26.
- **Revisit:** the 3.0 proposal merges it into help-seeking (Y4.9, a CASEL skill),
  which would close this entry.

### FD-002 · 4.5.4

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** CASEL (2020). 4.5.4 Safety-oriented decisions & risk avoidance is not a
  2020 CASEL example skill (earlier CASEL definitions mentioned "safety concerns").
- **Departs:** sits inside the CASEL domain as the routing target for refusal skills and
  risk avoidance (CF-016).
- **Evidence:** registry `codebook_extensions` reason; CF-016.
- **Alternative considered:** CASEL Relationship Skills, "Resisting negative social
  pressure" (CP-01-06 source table; not yet a registry support).
- **Decided in:** before cycle 02; logged here 2026-09-26.
- **Revisit:** when the CASEL "resisting negative social pressure" component is
  verified into the registry, re-anchor and close (3.0 proposal Y4.12, FD-P09).

### FD-003 · 10.1

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** "Opportunity-to-Learn (OTL) Standards", which could not be verified as a
  single citable document.
- **Departs:** the cited framework is not a usable anchor, so the code is effectively
  codebook-defined.
- **Evidence:** registry note ("too generic to verify"); CP-01-10.
- **Alternative considered:** 47 CFR 54 Subpart Q, ESSA 20 U.S.C. 7119(a)(2), Digital
  Equity Act (verified; proposed for 3.0 A2.3).
- **Decided in:** registry extension, pending CP-01-10; logged here 2026-09-26.
- **Revisit:** when a verified source replaces the OTL citation.

### FD-004 · 10.2

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** "Opportunity-to-Learn (OTL) Standards" (as FD-003).
- **Departs:** as FD-003.
- **Evidence:** registry note; CP-01-10.
- **Alternative considered:** ADA Title II / Section 504 program-access language
  ([VERIFY], not fetched).
- **Decided in:** registry extension, pending CP-01-10; logged here 2026-09-26.
- **Revisit:** when a verified source replaces the OTL citation.

### FD-005 · 6.4

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute 40 Developmental Assets, Positive Identity (Domain 6
  Framework Basis).
- **Departs:** CF-022 routes faith-specific language (spiritual growth, faith formation)
  to 6.4 or 6.2. The Developmental Assets don't name faith growth as part of Positive
  Identity or Positive Values.
- **Evidence:** CF-022 gold G-051, G-058; Severin's gap tags on faith rows (H079, S125)
  show the routing is a known compromise.
- **Alternative considered:** a faith and spirituality code (no secular framework in the
  records; not proposed).
- **Decided in:** CF-022; logged here 2026-09-26.
- **Revisit:** if a verified framework for youth spiritual development is found. Trigger met 2026-10-16: Search Institute, Spiritual Development (claim y5-14, verified), used by CP-12-04 to close FD-P12 in 3.x. Codebook 2.5.x is retired, so this entry stays open as the record of 6.4's routing.

---

## Codebook 3.x (`codebooks/youthOutcomesV3.data.ts`, built, not yet the default)

These entries belong to codebook 3.x, approved by Severin on 2026-09-26 and built in
CP-08-01. They keep their FD-P numbers so the proposal documents still point at them.
Each code's `fidelity` and `deviation` fields in the data file must match its entry.

### FD-P01 · Y3.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** CDC (2009) School Connectedness (verified, partial: school only). Across settings, all verified and recorded as partial: U.S. Surgeon General (2023) advisory glossary, belonging, loneliness and social isolation (claim y3-04); Search Institute Developmental Assets, Community values youth (claim y3-02); NRC/IOM (2002), 'Opportunities to Belong' (claim y3-03).
- **Departs:** narrowed 2026-10-16 (CP-12-02). Belonging, mattering and less isolation outside school now have verified cross-setting sources. What still departs is the **"safe" element**: feeling safe in a program or community as part of connectedness rests only on CDC's school-based construct; none of the cross-setting sources names felt safety as part of belonging.
- **Evidence:** S163 ("Students will feel safe and accepted at the program.") and S131 ("LGBTQ+ youth will report feeling safe and affirmed in program spaces."), both gold Y3.1 with Y8.10 or Y5.2 as alternate; H063 ("a new community", the 3.0 evidence).
- **Alternative considered:** close the entry on the new sources (practitioner review; rejected because no verified source names safety); drop "safe" from the definition and route felt safety to Y8.10 (MINOR; would move S163 and S131 against Severin's adjudication).
- **Decided in:** 3.0 proposal (PR #33); narrowed by CP-12-02 (batch 1 research review); Severin, 2026-10-16 (decision Y3-1).
- **Revisit:** close if a verifier rates a source SUPPORTED for felt safety, as the young person's experience, as part of belonging in a program or community. Checked 2026-10-16: NRC/IOM (2002), "physical and psychological safety" (round-2 claim CP-12-02-V1) came back PARTIAL. Chapter 4, Table 4-1 describes safety as a trait of the setting, and the youth-felt framing is only in Chapter 5 ("Youth report that these guidelines for behavior are elemental to their own feelings of safety and comfort"). It is recorded as a partial support and does not close this entry (G3).

### FD-P02 · Y4.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Self-Management.
- **Departs:** one code for 2.4.0's 4.2.1 (now Y4.2) and 4.2.2 (now Y4.2) (two CASEL example skills); the
  definition names both.
- **Evidence:** the gold and the model could not separate them reliably
  (`current-inventory.md` 4.3).
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if statements start separating the two skills.

### FD-P03 · Y4.3

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Self-Management.
- **Departs:** one code for 4.2.3 (now Y4.3) and 4.2.4 (now Y4.3); the definition names both.
- **Evidence:** as FD-P02.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P04 · Y4.4

- **Status:** closed (2026-10-16, CP-12-03: G6 merged-components test. The entry's evidence is sparsity, not coders failing to tell the components apart, and statements separate them. Both components are verified CASEL Social Awareness items ('Taking others' perspectives', 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones'), with gratitude and concern for others added (claims y4a-05, y4a-06), so Y4.4 is Framework)
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Social Awareness.
- **Departs:** one code for 4.3.1 (now Y4.4) and 4.3.3 (now Y4.4); the definition names both.
- **Evidence:** 4.3.3 (now Y4.4) had no gold rows.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P05 · Y4.8

- **Status:** closed (2026-10-16, CP-12-03: G6 merged-components test. The entry's evidence is sparsity, not coders failing to tell the components apart. Both components are verified CASEL Relationship Skills items ('Developing positive relationships'; 'Resolving conflicts constructively'), with the definition's 'establish and maintain healthy and supportive relationships' (claim y4b-03), so Y4.8 is Framework)
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Relationship Skills.
- **Departs:** one code for 4.4.3 (now Y4.8) and 4.4.5 (now Y4.8); the definition names both.
- **Evidence:** 4.4.5 (now Y4.8) had almost no gold rows.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P06 · Y4.9

- **Status:** closed (2026-10-16, CP-12-03: the 3.0 premise that 4.3.4 had no source is false; CASEL's Social Awareness definition names 'recognize family, school, and community resources and supports' (claim y4b-04), with NHES 3.5.2 and 4.8.3 (claims y4b-05, y4b-06). Under the G6 test this is not merged-components: statements separate knowing about supports (S122) from seeking help (S007). Both elements are verified CASEL components, so Y4.9 is Framework. 'Willingness to seek help' (S007) is the attitude toward the act CASEL names, not a separate departure)
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Relationship Skills, "Seeking or offering support and help
  when needed".
- **Departs:** absorbs 2.4.0's 4.3.4 (now Y4.9) (FD-001) into help-seeking, alongside 4.4.4 (now Y4.9).
- **Evidence:** 4.3.4 (now Y4.9) had no source and few gold rows.
- **Alternative considered:** keep 4.3.4 (now Y4.9) as a codebook-defined code.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if awareness-of-supports statements turn out to be common and distinct.

### FD-P07 · Y4.10

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Responsible Decision-Making.
- **Departs:** one code for 4.5.1 (now Y4.10) and 4.5.3 (now Y4.10); the definition names both.
- **Evidence:** as FD-P02.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P08 · Y4.11

- **Status:** closed (2026-10-16, CP-12-03: G6 merged-components test. The entry's evidence is sparsity, not coders failing to tell the components apart. Both components are verified CASEL Responsible Decision-Making items ('Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being'), with the definition's 'make caring and constructive choices' (claim y4b-07), so Y4.11 is Framework)
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Responsible Decision-Making.
- **Departs:** one code for 4.5.2 (now Y4.11) and 4.5.5 (now Y4.11); the definition names both.
- **Evidence:** 4.5.5 (now Y4.11) had almost no gold rows.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P09 · Y4.12

- **Status:** closed (2026-09-27, CP-10-02: CASEL 'Resisting negative social pressure' verified word for word, with National Health Education Standard 4 refusal skills; Y4.12 is now Framework)
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Relationship Skills, "Resisting negative social pressure",
  cited in CP-01-06's source table but not yet a registry support.
- **Departs:** carries 2.4.0's 4.5.4 (now Y4.12) (FD-002) until that component is verified.
- **Evidence:** CF-016; CP-01-06.
- **Alternative considered:** a prevention-science anchor (none located).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** close when the CASEL component enters the registry as verified.

### FD-P10 · Y5.1

- **Status:** closed (2026-09-26 re-review: Y5 re-anchored on Nagaoka et al. (2015), whose key outcome 'integrated identity' Y5.1 now matches; the move out of CASEL stays visible in Y4.1's Use instead line)
- **Fidelity:** adapted
- **Case:** observability
- **Anchor:** CASEL (2020), Self-Awareness, "Integrating personal and social identities".
- **Departs:** moved out of the CASEL domain into Y5. Statements express identity as a
  belief about oneself, not a skill, and it formed the CF-004/CF-005 confusion.
  Y4.1's "Use instead" line points here.
- **Evidence:** CF-004, CF-005; EASEL taxonomy treats identity separately (partial).
- **Alternative considered:** keep in the CASEL domain (2.4.0's 4.1.2 (now Y5.1)).
- **Decided in:** 3.0 proposal (PR #33), following the v2 draft.
- **Revisit:** if the Y5 anchor is replaced (see the drift count below).

### FD-P11 · Y5.4

- **Status:** closed (2026-09-26 re-review: Y5.4 now matches Nagaoka et al. (2015) 'mindsets' and the Search Institute self-esteem asset, both verified)
- **Fidelity:** adapted
- **Case:** observability
- **Anchor:** CASEL (2020), Self-Awareness, "Experiencing self-efficacy", "Having a
  growth mindset".
- **Departs:** moved out of the CASEL domain into Y5, for the reason in FD-P10.
- **Evidence:** CF-004, CF-005 (the 4.1.4 (now Y5.4) / 5.4 (now Y1.12) / 6.4 (now Y5.5 and Y5.4) triangle).
- **Alternative considered:** keep in the CASEL domain (2.4.0's 4.1.3 (now Y5.4), 4.1.4 (now Y5.4)).
- **Decided in:** 3.0 proposal (PR #33), following the v2 draft.
- **Revisit:** as FD-P10.

### FD-P12 · Y5.5

- **Status:** closed (2026-10-16, CP-12-04: the revisit trigger is met; Search Institute, Spiritual Development, three core developmental processes, verified (claim y5-14), covers spiritual purpose and growth in faith, from the publisher already in Y5's framework basis. Y5.5 is now Framework. No merged-components entry: faith growth and optimism about the future are easy to tell apart, so S1.6's merged case does not apply (decisions Y5-1 and G6).)
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute Positive Identity, Sense of purpose (verified).
- **Departs:** carries the faith-growth routing from FD-005.
- **Evidence:** as FD-005.
- **Alternative considered:** as FD-005.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-005.

### FD-P13 · Y6.4

- **Status:** closed (2026-09-27, CP-10-02: CIRCLE's 2002 core civic engagement indicators, verified, added to Y6's framework basis; Y6.4 matches its political voice and electoral indicators. Scope of the closure, CP-12-05, 2026-10-16: CIRCLE covers Y6.4's behavioral core only, that is contacting officials, petitions, protest, boycotts and voting; civic efficacy rests on Watts, Diemer & Voight (2011) political efficacy and youth councils on Search Institute's useful-roles asset, both verified with the source broader than the code, so they need no entry (decision G3); "leadership" in the name needs no entry either (decision Y6-1), and its rule 7 line and exclude pointer to Y4.7 follow PR #62)
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** NCSS (2013) C3 Framework, Dimension 4 Taking Informed Action (partial).
- **Departs:** a K–12 social studies framework used for out-of-school civic action
  (youth organizing, voting).
- **Evidence:** S182, H028.
- **Alternative considered:** the "CIRCLE Framework" in 2.4.0 (does not exist as named).
- **Decided in:** 3.0 proposal (PR #33); CP-01-10.
- **Revisit:** if a verified youth civic engagement framework is found.

### FD-P14 · Y6.5

- **Status:** closed (2026-09-27, CP-10-02: Y6.5 matches CIRCLE's 2002 civic indicators, community problem solving and regular volunteering, verified)
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** NCSS C3 Dimension 4 (partial); Lerner et al. (2005), Contribution
  (partial).
- **Departs:** as FD-P13, for service and volunteering.
- **Evidence:** 2.4.0's 7.2 (now Y6.5) gold rows.
- **Alternative considered:** as FD-P13.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P13.

### FD-P15 · Y7.7

- **Status:** closed (2026-10-16, CP-12-06: the revisit trigger is met; Casey Family Programs (2022), Casey Life Skills Toolkit v1.4, verified, is for youth 14-21 "regardless of whether they are in foster care" (claim y7-13) and lists daily living and self-care. Vital documents rest on 42 U.S.C. 675(5)(I) (claim y7-18), a statutory duty counted as partial-fit support with no entry (decision G4), whose population matches the code's example ("before exiting care"); the code's own text names no population outside its sources (decision G1). Chafee stays the first source, Casey follows as cross-sector support (decision Y7-1). Y7.7 is now Framework.)
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified).
- **Departs:** a foster-care program's construct applied to any young person.
- **Evidence:** H046, H048, S120, S162, S224.
- **Alternative considered:** leave independent living forced into 9.3 (now Y7.2) or uncoded.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified cross-sector life-skills framework is found.

### FD-P16 · Y2.5

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** National Core Arts Standards (2014), Creating and Performing/Presenting/
  Producing (verified).
- **Departs:** one code for two artistic processes (2.4.0's 2.4 (now Y2.5) and 2.5 (now Y2.5)), kept apart from
  arts skill gains (Y1.6) by CP-04-01.
- **Evidence:** creating and presenting were never confused in the gold.
- **Alternative considered:** keep 2.4 (now Y2.5) and 2.5 (now Y2.5); or fold both into arts learning (v2).
- **Decided in:** 3.0 proposal (PR #33); CP-04-01.
- **Revisit:** if expression statements need the split.

### FD-P17 · Y3.4

- **Status:** closed (2026-09-26 re-review: Search Institute Developmental Assets 1-2 (family support, positive family communication) and Developmental Relationships with parents, both verified, now anchor Y3.4)
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** none names family relationships as a youth outcome on its own. Chafee/NYTD
  "positive connections" (verified for adult connections) is the nearest.
- **Departs:** new code with no framework.
- **Evidence:** S024, S070.
- **Alternative considered:** route to 3.2 (now Y3.2) (adult support) or F1.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified framework is found.

### FD-P18 · A2.2

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** Urban Institute Candidate Outcome Indicators, mentoring (partial: youth
  only).
- **Departs:** covers family satisfaction too, which the source doesn't.
- **Evidence:** H002, S137.
- **Alternative considered:** route satisfaction to Y2.1 (as 2.4.0 did by force).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified satisfaction framework is found.

### FD-P19 · A2.4

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** none verified. Leads: ADA Title II / Section 504 program access [VERIFY];
  ED & DOJ (2015) language access letter (partial; possible 2025 rescission [VERIFY]).
- **Departs:** carries FD-004 and adds language access.
- **Evidence:** 2.4.0's 10.2 (now A2.4) gold rows.
- **Alternative considered:** keep the OTL citation (unverifiable).
- **Decided in:** 3.0 proposal (PR #33).
- **Changed (CP-09-02, 3.2.0, 2026-10-08):** scope widened to youth with disabilities (or
  another group facing barriers) taking part alongside peers when inclusion is the point,
  following Severin's gold on S001 and H058; Y2.6 no longer takes those rows. Still
  codebook-defined; no new citation is claimed.
- **Revisit:** when the ADA/504 lead is verified.

### FD-P20 · A3.1

- **Status:** closed (2026-09-27, CP-10-02: Coffman (2009) and Reisman, Gienapp & Stachowiak (2007) policy-change outcomes, verified, added to A3's framework basis)
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** no policy-change framework in the records; Learning Forward (2022)
  systems (located) is the nearest.
- **Departs:** codebook-defined status code.
- **Evidence:** S019 (funding and sustainability, a gap row); 2.4.0's 11.3 (now A3.1 and A3.2) rows.
- **Alternative considered:** keep 11.3 (now A3.1 and A3.2) Systemic Improvement unsplit.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** when a policy-change framework is verified.

### FD-P21 · Y1.10

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Farrington et al. (2012), Academic Perseverance (verified): "a student's tendency to complete school assignments in a timely and thorough manner, to the best of one's ability, despite distractions, obstacles, or level of challenge."
- **Departs:** the source is a review about adolescents (middle grades up); Y1.10's definition and include name young children ("task persistence in young children"), a population outside the source, so an entry is needed under the age and sector rule (decision C / G1, 2026-10-16). The S220 example (puzzles and new tasks) also reaches past "school assignments", which strict sector widening ("construct and wording unchanged") does not allow; the rewording that would fix that is deferred (see Revisit).
- **Evidence:** S220 (adjudicated design row, Y1.10, also the code's prompt example); registry verifier note on farrington-2012 → Y1.10 (CP-10-01); CP-10-01 removed Head Start ELOF from Y1.10 under Severin's early-childhood rule, which left the young-children clause without a source.
- **Alternative considered:** narrow the definition to "difficult schoolwork or learning tasks despite setbacks, at any age" (MINOR; fidelity review proposal 1; pilot later item 6; S220 must be checked with Severin first). Re-citing ELOF Approaches to Learning on Y1.10 (rejected: contradicts the early-childhood rule, reaffirmed by decision Y1-1).
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16); decision C / G1 (Severin, 2026-10-16).
- **Revisit:** when the item-6 rewording is decided.

### FD-P22 · Y1.13

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** McKinney-Vento, 42 U.S.C. 11432(g)(3)(A)-(B), school of origin and school stability (verified); 42 U.S.C. 675(1)(G), educational stability of children in foster care (verified; added by CP-11-01). Both are statutory duties, which count as support with no FD for the homelessness and foster-care parts (decision G4).
- **Departs:** Y1.13's definition names a third population, students staying enrolled through pregnancy, which neither source covers (decision C / G1: the code's own text names a population outside its source). 34 CFR 106.40(b) (Title IX; claim y1-attainment-06) is PARTIAL and narrower than the code (a nondiscrimination rule, not an enrollment outcome), so under decision G3 it does not avoid this entry.
- **Evidence:** S051 (adjudicated design row, Y1.13: "Teen parents will stay enrolled in high school through the birth of their child"). The fidelity review said dropping "pregnancy" affects no gold row, having checked S251 (Y8.4); S051 is the row that relies on the word.
- **Alternative considered:** drop "pregnancy" from the definition (MINOR; the fidelity review's second proposal; pilot later item 6). The generic "staying enrolled in school through disruption" would still carry S051, so dropping the word alone would hide this departure rather than remove it.
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16); decisions C / G1, G3 and G4 (Severin, 2026-10-16).
- **Revisit:** if a verified source frames school continuation of pregnant or parenting students as an outcome, or when item 6 is decided.

### FD-P23 · Y1.15

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** Allensworth & Easton (2005, 2007), On-Track Indicator and course grades (verified), for grades, GPA, course passing, credits and promotion. The "no subject named" clause merges the subject achievement components of Y1's anchor statute that coders cannot tell apart when the subject is missing: the ESSA academic achievement indicator, 20 U.S.C. 6311(c)(4)(B)(i), proficiency on the reading or language arts and mathematics assessments (claim y1-fidelity-01, PARTIAL: names its subjects by cross-reference), corroborated by What Works Clearinghouse (2024, rev. November 2025), Study Review Protocol Version 5.1, Academic Achievement—PK–12, "Academic measures in preschool through grade 12 based on broad standardized student assessments across multiple subjects" (round-2 claim CP-11-02-V2, SUPPORTED on the domain text; it fits only the test-score part of Y1.15, and the protocol requires at least two of literacy, math, science and social studies). The v5.0 claim y1-wwc-01 (PARTIAL) is superseded by V2.
- **Departs:** "academic performance" or test scores with no subject named go to Y1.15 rather than to a subject code (Y1.1-Y1.6), because nothing in the statement says which subject's component is meant. With a subject named, the subject code applies (rule 9).
- **Strict test (decision G6):** passes, for the clause only. A statement in the clause names no subject by definition ("improved academic achievement", "better test scores"), so nothing in its text lets a coder choose reading over mathematics: the components cannot be told apart. Once a subject is named they can be, and the entry does not cover those statements (subject code, rule 9). "Academic performance" may also mean grades, which Y1.15 holds directly, so that ambiguity stays inside the code.
- **Evidence:** CP-09-09 decision 2 (Severin, 2026-09-27) kept this catch-all and sent only non-performance generics to Y1 domain-only (gold G-D06). Real-run use: about 59 of 95 Y1.15 rows in the district review are generic achievement (model codes, not gold; practitioner review). No adjudicated design row covers the clause yet; rows are proposed in CP-11-02.
- **Alternative considered:** codebook-defined element (counted; not chosen, decision B / Y1-2); a new general-achievement code (+1 enum, reverses CP-09-09; rejected in the pilot); domain-only Y1 for all generic achievement (reverses CP-09-09 decision 2).
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16); decisions B / Y1-2 and G6 (Severin, 2026-10-16).
- **Revisit:** S1.6 asks a merged code's definition to name both components. Y1.15's definition names "test scores with no subject named" but not the subjects; a follow-up wording CP names them (it reaches the prompt, so it goes through a two-run gate).

### FD-P24 · Y4.12

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Relationship Skills, "Resisting negative social pressure" (verified, partial); National Health Education Standards (SHAPE America, 2024), Standard 4 refusal-skills indicators 4.5.5, 4.8.5, 4.12.5 (verified, partial: refusal only; claim y4b-10, and round-2 claim CP-12-03-V1, which read 4.5.5 on the page: "Demonstrate refusal skills to use in a variety of situations.").
- **Departs:** the element "avoiding unsafe situations" (definition) and "leaving unsafe situations" (include). Only partial support exists, and in both rows the code is broader than the source: CASEL Responsible Decision-Making, "consider ethical standards and safety concerns" (claim y4b-09, PARTIAL: weighing safety when deciding, not avoiding a situation), and NHES 4.2.3, "Demonstrate communication skills and strategies to use if uncomfortable, unsafe, or harmed" (claim y4b-11, PARTIAL: communicating, not leaving). Under G3 such a partial row does not avoid an entry. FD-P09 (closed) stays closed: it covered refusal and peer pressure, which are verified.
- **Evidence:** S172 ("Youth will develop skills to resist peer pressure and avoid risky behaviors.", adjudicated design row, gold Y4.12, also the code's prompt example). Narrowing the code to refusal only would flip it.
- **Alternative considered:** narrow the definition to resisting pressure and refusing risky situations (MINOR; flips S172); treat CASEL category E "safety concerns" as covering the element, with no entry (not chosen: G3).
- **Decided in:** CP-12-03 (batch 1 research review); decisions settled 2026-10-16 (G3).
- **Revisit:** close if a verifier rates a source SUPPORTED for avoiding or leaving unsafe situations (first candidate: HECAT Safety HBO 4, a batch 3 lead not yet verified for Y4.12).

### FD-P25 · Y4.5

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Relationship Skills, "Demonstrating cultural competency", and Self-Awareness, "Examining prejudices and biases" (both verified, direct). Learning for Justice (2022), Social Justice Standards, Diversity standard 6 (verified, direct for respect; claim y4a-03).
- **Departs:** the element "including" people of different backgrounds and identities (definition). No verified component names inclusion: CASEL's Social Awareness definition, "empathize with others, including those from diverse backgrounds, cultures, & contexts" (claim y4a-04), is PARTIAL, and the code is broader than it (G3). Placement note: the code joins components of two CASEL competencies and sits in category C, Social awareness, which holds neither; under the G6 test this is not a merged-components case (coders can tell respecting others from examining one's own biases), and both components are verified CASEL items, so the grouping itself is framework coverage and is not counted.
- **Evidence:** thin, and stated plainly: no adjudicated design row has gold Y4.5 (S177 and S186 list it as an alternate). Real-run texts use it for inclusion (batch 1 practitioner review: 16 rows, 12 texts on cultural awareness, tolerance and inclusion, such as "increase more kindness & inclusion").
- **Alternative considered:** cite LfJ only and keep `framework` (not chosen: decision Y4-2); log the code as merged-components, not counted (not chosen: G6); drop "including" (MINOR, reaches the prompt; leaves the inclusion texts without a code); move the code to category D (renumbering, MAJOR; not proposed).
- **Decided in:** CP-12-03 (batch 1 research review); Severin, 2026-10-16 (decisions Y4-2 and G6).
- **Revisit:** close if a verified source names including people across difference as a social-emotional skill; review when an adjudicated row is coded Y4.5.

### FD-P26 · Y5.3

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Farrington et al. (2019), arts education and SEL, "identities as artists" (verified, claim y5-07; year and publishers rest on the file path and a press release, round-2 claim CP-12-04-V-Y5-3); Nagaoka et al. (2015), integrated identity, "profession" among social identities (verified, partial; supporting only). National Research Council (2009), Learning Science in Informal Environments, Strand 6, identity as a science learner, is not an anchor: round-2 claim CP-12-04-V-Y5-2 (PARTIAL) found the strand only on a secondary conference host, not a National Academies Press copy, so it was not added (G8).
- **Departs:** the verified source covers one field (the arts). Y5.3 applies the same construct, seeing oneself as a certain kind of person in a field, to any field, and its definition names fields no verified source names: science ("STEM person", until a National Academies copy of NRC (2009) Strand 6 is verified) and "an athlete, a reader, a writer". The construct and wording are unchanged; only the fields widen.
- **Evidence:** S036 (adjudicated design row, Y5.3, STEM identity; also the code's prompt example). No adjudicated row covers athlete, reader or writer; the practitioner review found "Students will see themselves as readers and writers" coded Y5.3 in the real run (model code, not gold).
- **Alternative considered:** narrow the definition to STEM and the arts (MINOR; nothing in design gold flips, but real "readers and writers" texts lose their home; rejected). No entry, reading the fields as named instances of Nagaoka's "profession" (rejected: decision G5 covers a named instance only where the registry quotes the general category, and Nagaoka's "profession" is a partial fit that the full report uses as a contrast case, claim y5-08).
- **Decided in:** CP-12-04 (batch 2 research review; decisions settled 2026-10-16).
- **Revisit:** if a verified source names domain or field identity in general (for example a sport or literacy identity framework); narrow the science part if NRC (2009) Strand 6 is verified on a National Academies Press copy.

### FD-P27 · Y6.6

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** NAAEE (2019), K-12 Environmental Education: Guidelines for Excellence, Personal and Civic Responsibility (verified), for pro-environmental behavior and stewardship.
- **Departs:** "connection to nature" (definition and include) is a codebook-defined element. The verified NAAEE text does not name it: round 2 read the full 2019 guidelines (claim CP-12-05-V-Y6-1, PARTIAL) and found no learner outcome on connection to nature in the K-4 and 5-8 guidelines, only a values outcome, "Identify, clarify, and express their beliefs and values regarding the environment" (K-4, 3.2A), recorded as a partial support; the 9-12 section did not come through and is unchecked. UNESCO-UNEP Tbilisi (1977) Recommendation No. 2, "an awareness of and sensitivity to the total environment and its allied problems" (claim y6-05, PARTIAL), is about environmental problems and protection, not connection to nature. In both cases the code is broader than the source, so neither avoids an entry (decision G3); Tbilisi is not cited.
- **Evidence:** S045 (adjudicated design row, Y6.6: "a sense of stewardship and connection to nature"). Real-run use: about 4 texts from nature programs (practitioner review; model codes, not gold).
- **Alternative considered:** drop "connection to nature" (flips S045); move it to Y8.7 well-being (Y6.6 already excludes "feeling restored in nature", so the boundary is drawn); cite Tbilisi as if it closed the gap (it does not).
- **Decided in:** CP-12-05 (batch 2 research review; decisions settled 2026-10-16).
- **Revisit:** if a verifier reads the NAAEE 9-12 guidelines and finds an outcome on connection to nature, or if another verified environmental-education or nature-connectedness framework names connection to nature as an outcome.

### FD-P28 · Y8.13

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper (verified, partial), recidivism measurement; OJJDP (2017), Model Programs Guide Literature Review: Diversion from Formal Juvenile Court Processing (verified, direct): "an attempt to divert, or channel out, youthful offenders from the juvenile justice system".
- **Departs:** Y8.13's definition ("completing diversion or probation") and include ("completing a restorative agreement") make completion of probation, court-ordered conditions or a diversion agreement an outcome. Neither verified source frames completion as an outcome: the CJCA paper measures recidivism, and the OJJDP review describes diversion as a process. The completion element is the codebook's own.
- **Evidence:** S018 ("Youth diverted from court will complete their restorative agreement." → Y8.13) and S189 ("Youth will successfully complete probation requirements and court-ordered conditions." → Y8.13), adjudicated design rows.
- **Alternative considered:** observability (proposed by the researcher; rejected by the taxonomy, fidelity and devil's-advocate reviewers because observability moves a construct out of a domain with a pointer, and nothing moves here); dropping the completion wording (would orphan S018 and S189).
- **Decided in:** CP-12-07 (batch 3 research review, 2026-10-16; decisions settled by Severin on the recommended options).
- **Revisit:** when the OJJDP performance-measures lead for completion outcomes is filed and verified.

### FD-P29 · Y8.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** SHAPE America (2024), National Physical Education Standards, Standard 1, "Develops a variety of motor skills" (verified).
- **Departs:** the definition ("fine and gross motor") and include ("fine motor skills") name fine motor skills, which no verified SHAPE indicator names: round-2 claim CP-12-07-V2 (not supported) found no Standard 1 indicator that mentions scissors, pencils, writing or grasping; "manipulative" there means whole-body object skills such as throwing and catching. Head Start ELOF's Fine Motor sub-domain covers the construct (claim y8a-13, SUPPORTED), but the early-childhood rule (Severin, 2026-09-24; reaffirmed by decision Y1-1, 2026-10-16) keeps ELOF for Y1.8, whose construct is about young children by definition, and fine motor is not. So no source the codebook may cite covers it. This is a codebook-defined element under a rule, not for lack of any framework.
- **Evidence:** S192 ("Children will demonstrate fine motor skills such as holding a pencil and using scissors." → Y8.2, alternate Y1.8), adjudicated design row.
- **Alternative considered:** an ELOF exception for Y8.2 (fit direct, no FD; the fidelity reviewer's option) and dropping "fine motor" with S192 moved to Y1.8 (MINOR); both rejected by decision Y1-1.
- **Decided in:** CP-12-07 (batch 3 research review, 2026-10-16), decision Y1-1.
- **Revisit:** if Severin changes the early-childhood rule, or if another verified physical-development framework names fine motor skills outside early childhood.

### FD-P30 · Y8.11

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC YRBSS, substance use behaviors (verified); Healthy People 2030 SU-05 (verified); Monitoring the Future (2026), perceived risk (verified, partial); CDC HECAT (2021) AOD1.5.9 and T1.5.1, knowledge of the risks and health effects of alcohol, marijuana, tobacco and vaping products (verified, direct; round-2 claims CP-12-07-V3, CP-12-07-V4).
- **Departs:** "intentions" (definition, include "lower intentions") is not named by any verified Y8.11 source. Round 2 checked the two leads: HECAT Tobacco has no intention measure, only the behavior "Avoid using (or experimenting with) any form of tobacco" (V4), and the Monitoring the Future volume reports no measure of future-use intentions (V4b, not supported). Knowledge of risks is covered by HECAT and is not part of this entry.
- **Evidence:** S065 ("Youth will report lower intentions to vape in the next year." → Y8.11; the code's prompt example). H038 (knowledge of vaping risks → Y8.11) rests on the HECAT rows, not on this entry.
- **Alternative considered:** merged-components, not counted (rejected by decision G6: coders can tell intentions from use); dropping the word (flips S065).
- **Decided in:** CP-12-07, decisions Y8-1 and G6; opened for intentions only after round 2 (2026-10-16).
- **Revisit:** if a verified prevention framework or survey names intentions to use as a measure.

### FD-P31 · Y8.12

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC (2025) 2025 National YRBS, violence items; CDC (2024) About Youth Violence; CDC YRBSS, community violence (all verified).
- **Departs:** "dating-violence warning signs" (include) is knowledge, not violence or victimization, and no verified Y8.12 source names it. Round 2 checked HECAT Violence Prevention (claim CP-12-07-V5: no HBO or expectation names warning signs of dating or relationship violence) and NHES Standard 1 (claim CP-12-07-V5b: no text on violent relationships); both not supported.
- **Evidence:** S248 ("Youth will be able to identify warning signs of dating violence." → Y8.12, alternate Y8.4).
- **Alternative considered:** merged-components, not counted (rejected by decision G6); dropping the words (flips S248).
- **Decided in:** CP-12-07, decisions Y8-1 and G6; opened after round 2 (2026-10-16).
- **Revisit:** if a verified dating-violence prevention framework names recognizing warning signs as an outcome.

### FD-P32 · Y8.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CDC HECAT (2021) PA, FN and PHW modules (verified); Healthy People 2030 PA-06 and SH-04 (verified); Healthy People 2030 PA-R02 (verified, partial): "Increase the proportion of parents who follow AAP recommendations on limiting screen time for children aged 6 to 17 years"; HECAT PA7.8.2 (verified, partial; round-2 claim CP-12-07-V12): "Analyze personal practices and behaviors that reduce or prevent sedentary behavior."
- **Departs:** "recreational screen time" (definition) and "less screen time" (include) make the young person's own screen time an outcome. PA-R02 measures whether parents follow screen-time limits, and HECAT PA names sedentary behavior at the skill level but never screen, TV or video games. Neither is broader than the code, so under decision G3 they do not cover the element.
- **Evidence:** S207 ("Participants will reduce screen time and increase physical activity outside of program hours." → Y8.1) and H086 ("Participants reduced recreational screen time to less than 2 hours per day." → Y8.1), adjudicated design rows.
- **Alternative considered:** treating PA-R02 or PA7.8.2 as covering it (ruled out by G3); dropping screen time (flips S207, H086).
- **Decided in:** CP-12-07, decision G3; opened after round 2 (2026-10-16).
- **Revisit:** if a current YRBS item or another verified youth-level source on the young person's own screen time is found; watch the PA-R02 revision (CP-12-24).

### FD-P33 · F1.6

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Ascend at the Aspen Institute, 2Gen Approach, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified); WIOA Title II, 29 U.S.C. 3272(1), 3272(6) (verified).
- **Departs:** the definition names "financial skills" of a caregiver or other adult participant. None of F1.6's verified sources names financial skills: they cover postsecondary and employment pathways, digital literacy, adult education and English. The element is the codebook's own.
- **Evidence:** no adjudicated design row codes a caregiver's financial-skill learning to F1.6. H027 ("Families reported feeling more confident managing household finances." → F2.1) and S006 (→ F2.1) set the line on the other side; decision F1-1 keeps learning a skill or completing a course in F1.6 (tie-breaker CF-034).
- **Alternative considered:** Ascend Economic Assets as a partial F1.6 row (rejected: F2's anchor, and it blurs skill against status); dropping "financial skills" (MINOR; leaves a caregiver's money-skill course with no code).
- **Decided in:** CP-12-08 (batch 3 research review, 2026-10-16), decision F1-1.
- **Revisit:** if an adult financial-education component in a verified F1 source is found.

### FD-P34 · F1.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Epstein et al. (2019), Type 4 Learning at Home (verified, direct); CSSP (n.d.), Core Meanings, Knowledge of Parenting and Child Development (verified, partial): "regular, predictable and consistent routines".
- **Departs:** "bedtime and daily routines" (include) as a household practice. Epstein Type 4 names homework and curriculum-related activities: round-2 claim CP-12-08-V14 (not supported) found that the Corwin handout's Learning at Home definition names no family or daily routines or schedules, and lists no sample practices. CSSP names routines only as something parents know about, which is not broader than the code (decision G3).
- **Evidence:** S022 ("Families will establish a consistent bedtime and daily routine at home." → F1.2, alternate Y8.1), adjudicated design row.
- **Alternative considered:** treating the CSSP row as covering it (ruled out by G3); dropping routines (flips S022).
- **Decided in:** CP-12-08, decision G3; opened after round 2 (2026-10-16).
- **Revisit:** if a verified F1 source names family routines as a practice.

### FD-P35 · F2.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** USDA ERS, U.S. Household Food Security Survey Module (verified): "Food security for a household means access by all members at all times to enough food for an active, healthy life."; Healthy People 2030 NWS-01 (verified).
- **Departs:** "access to healthy food" in F2.2's definition goes past "enough food"; no verified source frames healthy-food access as a household outcome. USDA's March 2022 nutrition-security report has the definition (claim f2-04, PARTIAL), but round-2 claim CP-12-09-V8 (not supported) found no printed title or issuing office in it, so it cannot be cited (S1.4).
- **Evidence:** S062 ("Families will report reduced food insecurity and increased access to healthy food." → F2.2), adjudicated design row.
- **Alternative considered:** narrowing F2.2 to "enough food" (rejected by all four reviewers; would flip S062's healthy-food half).
- **Decided in:** CP-12-09 (batch 3 research review, 2026-10-16); opened after round 2.
- **Revisit:** when a verified nutrition-security source is found (for example, if a person confirms the USDA report's title from its cover, which the verifier suggested may be an image).

### FD-P36 · A1.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Guskey (2002), Level 2 participants' learning (verified, direct): "Level 2: Participants' Learning ... In addition to liking their professional development experience, we also hope that participants learn something from it." Learning Forward (2022), Standards for Professional Learning (verified, partial).
- **Departs:** both anchors are about educators' professional learning. A1.1's definition names volunteers, mentors, coaches and case managers, and its include names "staff confidence", which Guskey's Level 2 ("New knowledge and skills of participants") does not name; Learning Forward's "knowledge, skills, practices, and mindsets" (partial) is the nearest.
- **Evidence:** adjudicated rows S043 (case managers), S083 (volunteers), S142 (coaches), S146 (mentors' confidence), S244 (college tutors), H014 (coaches). Narrowing the definition to educators would flip all six.
- **Alternative considered:** Kirkpatrick Level 2, "acquire the intended knowledge, skills, attitude, confidence and commitment" (claim a1-03, SUPPORTED), cross-sector and naming confidence, not admissible because Kirkpatrick Partners sells certification (S1.2; decision A1-1, 2026-10-16); narrowing to educators (rejected: flips six rows). OPM's restatement of the Kirkpatrick levels was sent to a verifier in round 2 (claim CP-12-10-V1) and could not be fetched (the opm.gov copies failed; a mirror stopped before the Level 2 definition).
- **Decided in:** CP-12-10 (batch 4 research review, 2026-10-16; decisions G1 and A1-1 settled by Severin 2026-10-16).
- **Revisit:** if a non-vendor statement of Kirkpatrick Level 2 (the OPM Training Evaluation Field Guide lead) is fetched and verified; then cite it on A1.1 in a gated CP and close this entry.

### FD-P37 · Y2.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Pekrun (2024), control-value theory, activity emotions: "concurrent activity emotions such as enjoyment or boredom during learning" (verified, claim y2-01). Y2.1's Source line names it from 3.3.0 (CP-12-16).
- **Departs:** the element "pride in being part of it" (definition) and "pride in the program" (include). Pekrun's pride is an outcome emotion after achievement, "retrospective outcome emotions like pride and shame" (claim y2-03), not pride in membership. The code is broader than the source, so the partial row does not avoid an entry (G3). No verified source names pride in belonging to a program as a youth outcome.
- **Evidence:** S008 ("Students will say they feel proud to be part of the program.", adjudicated design row, gold Y2.1, alternate Y3.1). Dropping the phrase would put S008 at risk of moving to Y3.1.
- **Alternative considered:** record y2-03 as partial support with no entry (not chosen: G3); drop the phrase (MINOR; flips S008).
- **Decided in:** CP-12-01 (batch 1 research review); Severin, 2026-10-16 (decision Y2-1). Provisional id FD-P40; applied 2026-10-17 in 3.3.0.
- **Revisit:** close if a verified source names pride in membership or belonging to a program as an outcome.

### FD-P38 · Y2.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Hidi & Renninger (2006), phase 1 triggered situational interest (verified, claim y2-07); CASEL (2020), "Demonstrating curiosity and open-mindedness" (verified, claim y2-05; partial fit after round-2 claim CP-12-20-V-CASEL-1-Y2.2).
- **Departs:** the element "willingness to try a new activity" (definition) and "trying new activities" (include). Round 2 found no source that contains it (G3): CASEL gives the bullet no further wording, and nothing describes curiosity or open-mindedness as willingness to try new activities (claim CP-12-01-V1, NOT SUPPORTED); Hidi & Renninger list phase-1 triggers (incongruous or surprising information, personal relevance, character identification, intensity) and never use "novel" or "new activity" (claim CP-12-01-V2, PARTIAL: the step to trying a new activity is the claimant's own).
- **Evidence:** S049 (trying an activity that made campers nervous, gold Y2.2, alternate Y5.4) and S080 (trying new enrichment activities, gold Y2.2, alternate Y2.6).
- **Alternative considered:** drop the element (MINOR; flips S049 and S080); move it to Y5.4 (confidence) or Y2.6 (participation) (against the adjudicated rows).
- **Decided in:** CP-12-01 (batch 1 research review; decisions settled 2026-10-16), opened on the round-2 verdicts under the CP's G3 rule. Provisional id FD-P41; applied 2026-10-17 in 3.3.0.
- **Revisit:** close if a verified source names willingness to try new activities as part of interest or open-mindedness.

---

## Drift count for codebook 3.x (S4.9)

Counted in the domain where the code sits, open entries only; merged-components entries
are logged but not counted. Updated after the 2026-09-26 re-review below, again for CP-10-02 (2026-09-27), which closed FD-P09, FD-P13, FD-P14 and FD-P20, and again for 3.1.5 (2026-10-16 research review, CP-11-01 to CP-12-32), which opened FD-P21, FD-P22 and FD-P24 to FD-P36 (FD-P23 is merged-components and not counted) and closed FD-P12 and FD-P15 (FD-P04, FD-P05, FD-P06 and FD-P08, also closed, were merged-components), and for 3.3.0 (2026-10-17), which opened FD-P37 and FD-P38 in Y2 (CP-12-01). The "Before" column is the count before 3.1.5.

| Domain | Codes | Before 3.1.5 | Counted deviations | Share | Over a third? |
|---|---|---|---|---|---|
| Y1 Academic | 18 | 0 | 2 (Y1.10, Y1.13) | 11% | no |
| Y2 Engagement | 6 | 0 | 2 (Y2.1, Y2.2) | 33% | no (at the line) |
| Y3 Belonging | 5 | 1 (Y3.1) | 1 (Y3.1) | 20% | no |
| Y4 SEL (CASEL) | 12 | 0 | 2 (Y4.5, Y4.12) | 17% | no |
| Y5 Identity | 6 | 1 (Y5.5) | 1 (Y5.3) | 17% | no |
| Y6 Character & Civic | 7 | 0 | 1 (Y6.6) | 14% | no |
| Y7 Career | 7 | 1 (Y7.7) | 0 | 0% | no |
| Y8 Health | 13 | 0 | 5 (Y8.1, Y8.2, Y8.11, Y8.12, Y8.13) | 38% | **yes: anchor re-review required (S4.9)** |
| F1 Family | 9 | 0 | 2 (F1.2, F1.6) | 22% | no |
| F2 Basic needs | 3 | 0 | 1 (F2.2) | 33% | no (at the line) |
| A1 Staff | 3 | 0 | 1 (A1.1) | 33% | no (at the line) |
| A2 Quality & access | 6 | 2 (A2.2, A2.4) | 2 (A2.2, A2.4) | 33% | no (at the line) |
| A3 Systems | 3 | 0 | 0 | 0% | no |

Most of the rise is not new departures but old ones now written down: the 2026-10-16 review read
each code's text against its verified sources and logged the elements no source names. Y8 is over
the line, so its anchor frameworks are re-reviewed (keep, replace or split) before any further Y8
change; see "Batch 3 review: Y8, F1 and F2" below. Y2, F2, A1 and A2 sit at the line: one more
counted entry in any of them triggers the same review.

## Anchor re-review, 2026-09-26 (S4.9)

In the approved proposal, Y3 (2 of 5) and Y5 (3 of 6) were over a third. Before building,
their anchors were re-reviewed. A citation verifier that did not see the proposer's
reasoning checked nine claims against the primary sources (excerpts are in
`sources/youth_outcomes_v3.sources.json`).

- **Y3 Belonging & Relationships: anchor kept and widened.** Search Institute's
  Developmental Relationships Framework covers relationships with parents and with peers
  (verified), and the Developmental Assets Support category names family support and
  positive family communication (content verified; publication year unconfirmed, so cited
  without one). Y3.4 now has a framework (FD-P17 closed). Y3.1 stays adapted (FD-P01).
- **Y5 Identity, Confidence & Agency: anchor replaced.** Nagaoka et al. (2015),
  *Foundations for Young Adult Success* (UChicago Consortium), names agency and integrated
  identity as key outcomes and mindsets as a foundational component (verified). With the
  Search Institute Positive Identity assets (content verified), Y5.1, Y5.2, Y5.3, Y5.4
  and Y5.6 now match the anchor (FD-P10, FD-P11 closed). Nagaoka does not support
  purpose (unsupported), so Y5.5 rests on the Search Institute purpose assets and keeps its
  faith-routing entry (FD-P12).
- **Not supported, and not used:** Nagaoka's report never says "growth mindset" (Y5.4
  keeps growth mindset through CASEL self-awareness) or "sense of purpose".

## Y1 review, 2026-10-16 (CP-11-02)

The Y1 research review (`research-review/2026-10-16/`) checked whether each Y1 code's own text goes past its sources. Three entries were opened (FD-P21 Y1.10, FD-P22 Y1.13, FD-P23 Y1.15). Two departures were checked and need no entry:

- **Y1.2, home-language maintenance.** Closed by a source, not logged. CP-11-01 cites the Seal of Biliteracy Guidelines (2020), section 1, "English learners should be encouraged to maintain and improve proficiency in their home or heritage language(s)" (claim y1-subject-04, SUPPORTED; authorship settled by round-2 claim CP-11-01-V1); CP-12-29 names it in Y1's Framework Basis as a secondary framework at the citation-text gate.
- **Y1.14, "alternatives that replace them".** FD none. Adjudicated S055 ("restorative circles to repair harm instead of receiving a suspension" → Y1.14) reads as a suspension replaced, i.e. a change in exclusionary discipline, which is what the CRDC discipline elements count directly. Read that way the code is no broader than its direct source, so no PARTIAL fit is needed to avoid an entry (decision G3). ESSA 20 U.S.C. 7118(5)(F), "designing and implementing a locally-tailored plan to reduce exclusionary discipline practices" (claim y1-attainment-08, PARTIAL: a plan provision, not an outcome), is context only. If a statement is ever coded Y1.14 for taking part in a restorative practice with no suspension, referral or expulsion it replaces, open a codebook-defined entry.

Age and sector rule (decision C / G1, Severin, 2026-10-16): an entry is opened only when a code's own text names a population, by age or by sector, outside its source. Farrington (middle grades up) and the On-Track Indicator (9th grade) are also applied to younger students in practice, but Y1.9 to Y1.12 and Y1.15 name no population, so they need no entry for that.

## Y2 review, 2026-10-16, applied 2026-10-17 (CP-12-01, 3.3.0)

CP-12-01 waited for PR #62 so that Y2 was counted on the merged Y2.5 and Y2.6 text (decision G7).

- **Y2.1** moves its anchor from Muhammad's Joy (a teaching aim) to Pekrun (2024), activity enjoyment (claim y2-01). No entry for the setting: Y2.1 names no population or sector outside the source (decision G1). Pride in being part of the program is FD-P37 (decision Y2-1, S008).
- **Y2.2** gains CASEL curiosity (partial: broader than the code, decision G3) and OECD SSES curiosity (direct). Willingness to try a new activity is FD-P38: round 2 found it in neither CASEL (CP-12-01-V1, not supported) nor Hidi & Renninger phase 1 (CP-12-01-V2, partial).
- **Y2.3, Y2.4.** Hidi & Renninger is now direct on the full text (CP-12-01-V3 records the match), and the 2020 Situated Expectancy-Value Theory is recorded beside the 2000 article.
- **S4.9.** Y2 is at 2 of 6 (33%), at the line but not over it. One more counted Y2 entry (such as a Y2.5 creative-writing entry) starts Y2's anchor re-review before any further Y2 change.

## Y3 review, 2026-10-16 (CP-12-02)

Batch 1 of the research review checked Y3's codes against their sources. FD-P01 was narrowed to the "safe" element. Two departures were checked and need no entry:

- **Y3.2, youth in care.** Closed by sources, not logged. 42 U.S.C. 677(a)(2) (Chafee), "to help children who have experienced foster care at age 14 or older achieve meaningful, permanent connections" (claim y3-05), and the NYTD outcome "positive connections with adults" (claim y3-06), both SUPPORTED, cover the population the include names (G1).
- **Y3.4, reunification.** No entry (G4, decided 2026-10-16). 42 U.S.C. 671(a)(15)(B) and 34 U.S.C. 11212(b)(3) (claims y3-09, y3-10, both SUPPORTED) name reunification and safe return as agency and grantee duties. They are recorded as partial-fit support, as Coffman (2009) and Reisman et al. (2007) were for A3.1.

## Y4 review, 2026-10-16 (CP-12-03)

Batch 1 of the research review checked Y4's codes against their sources, and applied the merged-components test Severin settled on 2026-10-16 (G6): a merged-components entry stands only when coders cannot tell the components apart, and the test is applied to every such entry at once.

- **Pass.** FD-P02 (Y4.2), FD-P03 (Y4.3) and FD-P07 (Y4.10) cite that test as their evidence ("the gold and the model could not separate them reliably"). They stay open and are not counted.
- **Closed.** FD-P04 (Y4.4), FD-P05 (Y4.8), FD-P06 (Y4.9) and FD-P08 (Y4.11) rested on sparsity. Each code names only verified CASEL components, so it is framework coverage, not a departure.
- **Y4.5.** Relabelled adapted (FD-P25, counted) for its unsourced "including" element; its cross-competency grouping is framework coverage, as Y4.12's use of a Relationship Skills bullet is.
- **Y4.12.** FD-P24, counted, for "avoiding unsafe situations" (only partial support, with the code the broader one; G3). The registry's NHES quote for Y4.12 is now indicator 4.5.5 as read on the 2024 page (round-2 claim CP-12-03-V1), recorded as a partial fit.
- **Not here.** Writing the test into STANDARDS.md is Severin's own edit. The other merged-components entries are tested in their own CPs (FD-P16 in the PR #62 note; Y1.15 in CP-11-02; Y8.11/Y8.12 in CP-12-07).

## Batch 2 review (Y5-Y7), 2026-10-16 (CP-12-04 to CP-12-06)

The batch 2 research review (`research-review/full-review/batch2/`) checked whether each Y5, Y6 and Y7 code's own text goes past its sources. Decisions applied: Severin's of 2026-10-16 (recommended options). Entries opened or changed: FD-P12 closed and FD-P26 opened (Y5.3); FD-P27 opened (Y6.6); FD-P13's closure note rescoped; FD-P15 closed (Y7.7). Checked and needing no entry:

- **Y5.2, sexual, gender and linguistic identity.** FD none. Learning for Justice (2022) ID.1, "Students will develop positive social identities based on their membership in multiple groups in society" (claim y5-11, verified), is the general category, and the registry quotes it; a named group is an instance of it, not a departure (decision G5). "Racial" rests on Muhammad, Pursuit 1 (direct), not on Nagaoka (partial).
- **Y5.6, self-advocacy and IEPs.** FD none. 29 U.S.C. 733(b)(5), "(5) instruction in self-advocacy, which may include peer mentoring" (round-2 claim CP-12-04-V-Y5-1, read on the official govinfo copy), is a required service for students with disabilities: partial-fit support with no FD (decision G4). The code's own text names IEPs, which is inside that population (decision G1).
- **Y5.4, "linguistic assets".** Not a departure: the bullet was named in `basis` without registry support and is removed (R-04).
- **Y5.3, failure paths taken in round 2.** NRC (2009) Strand 6 was found only on a secondary conference host (claim CP-12-04-V-Y5-2, PARTIAL), so it was not added and FD-P26 covers science too. Farrington et al. (2019) prints no year or publisher (claim CP-12-04-V-Y5-3, PARTIAL); the registry records that its year and publishers rest on the file path and a press release.
- **Y6.1, sportsmanship and faith-grounded values.** FD none. Both are named instances of Search Institute Positive Values (integrity, honesty, responsibility), which the registry quotes, practised in a setting with the construct unchanged (decision G5). Forgiveness is cited to VIA's Forgiveness component (claim y6-07). Gold: H015, S180, S125, S145, S167.
- **Y6.4, civic efficacy and youth councils.** FD none. Watts, Diemer & Voight (2011), "Political efficacy is the perceived capacity to effect social and political change" (claim y6-02), and Search Institute, "Young people are given useful roles on the community" (claim y6-03), are both PARTIAL because the source is broader than the code (decision G3). Gold: H030, S039, S211. Round 2 also found CIRCLE's own "engaged worldview" passage (claim CP-12-05-V-Y6-2, SUPPORTED), recorded for a later CP.
- **Y6.4, leadership.** FD none (decision Y6-1). A rule 7 line and an exclude pointer to Y4.7 follow PR #62 in their own CP; they must not flip S059 (leading a trail cleanup, Y4.7).
- **Y6.6, connection to nature.** FD-P27 opened (codebook-defined element). Round 2 read the full NAAEE Guidelines (claim CP-12-05-V-Y6-1, PARTIAL: only a values outcome comes close), so the entry stays open.
- **Y7.5, competitive integrated employment.** A citation gap, not a departure: 29 U.S.C. 705(5) (claim y7-11) defines the term the include already names. The code names no population (S151 does: youth with disabilities, inside the statute's population).
- **Y7.4, internships and work experience.** A citation gap, closed by 20 CFR 681.460(a)(3)-(4) (claim y7-09), program elements counted as partial-fit support with no entry (decision G4). Entrepreneurship is not in Y7.4's definition and is not added (later cycle; under decision G11, Severin first adjudicates two proposed design rows per side).
- **Y7.7, time management.** Not added. It stays in Y4.3 (R-06); Casey files it under Work and Study, not Daily Living.

Watch item (S4.9): Y5's anchor, Nagaoka et al. (2015), was reported to have an update due in fall 2026 (review lead, not verified). Re-review the anchor when it is published.

## Batch 3 review: Y8, F1 and F2, 2026-10-16 (CP-12-07 to CP-12-09)

The batch 3 research review (Y8, F1, F2) closed most of Y8's unlogged departures by citation (Y8.1, Y8.3, Y8.5 and Y8.13's diversion half, through CDC HECAT 2021, Healthy People 2030, the 2025 YRBS instruments (CP-12-23) and OJJDP 2017). Two entries were opened at once: FD-P28 (Y8.13) and FD-P29 (Y8.2, decision Y1-1). Round-2 verification (2026-10-16) then settled the gated elements:

- **Opened after round 2.** Y8.11 intentions (FD-P30; knowledge of risks is covered by HECAT AOD1.5.9 and T1.5.1, claims CP-12-07-V3 and V4), Y8.12 dating-violence warning signs (FD-P31; V5 and V5b not supported) and Y8.1 screen time (FD-P32; V12 partial, sedentary behavior only). These are counted entries (decisions Y8-1, G3, G6).
- **Not opened.** Y8.5 immunizations: HECAT PHW1.12.14 names immunizations in general (claim CP-12-07-V13, SUPPORTED). FD-P29 stays open: no SHAPE PE indicator names fine motor skills (claim CP-12-07-V2, not supported).
- **S4.9: Y8 is over a third.** Y8 now has 5 counted entries of 13 codes (38%): Y8.1, Y8.2, Y8.11, Y8.12 and Y8.13. Under decision G7, Y8's anchor must be re-reviewed before any further change to Y8. This log records the entries; it does not start the re-review.
- **Later Y8 CPs.** Y8.6 behavior is narrowed to symptoms after PR #66, with "use instead" Y1.14, Y4.2 or Y4 domain-only (decision Y8-3; a behavior with no code goes to domain-only with a `codebook_gap` flag, decision G9). Y8.7 "restored" stays while the Keyes positive-affect lead is verified (decision Y8-2). Y8.8 "processing trauma" gets one NCTSN recovery claim, and a codebook-defined entry if it fails (later item 4). All of these wait for the anchor re-review above.
- **F1 (CP-12-08).** F1.3 family eating habits and F1.6 adult education and English are now cited (SNAP-Ed MT1; WIOA Title II on the official copy, claim CP-12-08-V10). F1.6 "older adults" needs no entry (decision G1). F1.6 "financial skills" is logged as FD-P33, because decision F1-1 keeps a caregiver's money-skill learning in F1.6 (the tie-breaker is CF-034). F1.2 routines is logged as FD-P34: the Corwin Epstein handout names no routines (claim CP-12-08-V14, not supported). F1.3 needs no entry while the SNAP-Ed MT1 page is live (claim CP-12-08-V7 could not reach an archive copy and saw different live wording; re-check at the next review). F1.9 and CP-09-01's Epstein Type 3 question belong to PR #62 (decision F1-2). F1 is at 2/9 (22%).
- **F2 (CP-12-09).** F2.1 independent youth (NYTD, CFPB Financial Well-Being), F2.2 household food insecurity (Healthy People 2030 NWS-01) and F2.3 youth exits and rent burden (RHY 45 CFR 1351, SDOH-04) are now cited; the population rule needs no entry for them (decision G1). F2.1 "Medicaid" rests on AHS-01, a broader category (decisions G3, G5). F2.2 "access to healthy food" (S062) is logged as FD-P35: the USDA 2022 nutrition-security report prints no title (claim CP-12-09-V8, not supported). F2 is at 1/3, at the S4.9 line but not over it (decision G7); a second F2 entry would trigger an anchor re-review.
