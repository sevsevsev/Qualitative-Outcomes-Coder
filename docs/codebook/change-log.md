# Change log: Youth Outcomes Codebook 2.4.0 → proposed 3.0

**Status: proposal for Severin's review. Not applied.** Every change below is measured
against codebook 2.4.0 on `main` (`codebooks/original.ts`). The machine-readable map is
[`crosswalk-2.4.0-to-proposed.csv`](crosswalk-2.4.0-to-proposed.csv); the full entries
are in [`proposed-codebook.md`](proposed-codebook.md); the grounding is in
[`research-basis.md`](research-basis.md).

## Summary

| | 2.4.0 | Proposed |
|---|---|---|
| Parts (who changes) | none | 3 (Y youth, F families and adult participants, A staff, organizations, systems) |
| Domains | 12 | 13 |
| Categories | SEL only (5 CASEL headers inside Domain 4) | 39, in every domain |
| Codes | 87 | 98 |

- **62** codes carry over one-to-one (renumbered, some renamed or re-scoped).
- **18** old codes merge pairwise into 9 new codes.
- **7** old codes split: the old code maps to a default new code, and part of its scope
  moves to one or more other codes.
- **1** code is retired: 9.1 Key Content Knowledge (maps to the subject codes).
- **22** codes are new.

## Structural changes

1. **One axis per level.** Parts say who changes, domains say which broad construct,
   categories name the construct's dimensions, codes are observable indicators. In
   2.4.0 some domains were constructs (SEL), some populations (Families), some
   settings (Systems) and one a delivery condition (Opportunity to Learn).
2. **Letter-prefixed IDs (`Y1.1`, `F2.3`, `A3.1`).** Old and new numbers can never be
   confused in exports, feedback or gold. The domain becomes the code's prefix, so the
   model no longer has to pick the domain separately.
3. **Domain 4's three-level SEL numbering (4.1.1…4.5.5) is retired.** CASEL
   competencies become Y4's categories; 22 codes become 12. Self-awareness identity
   codes move to Y5 Identity, Confidence & Agency.
4. **Domain 6 (Safety, Character & Purpose) is dissolved.** Felt safety goes to Y8
   Health, Safety & Well-Being; character to Y6; purpose to Y5; participation to Y2.
5. **Domain 9 (College & Career Readiness) is split** between Y1 category C (the
   education-status continuum: postsecondary enrollment) and Y7 Career & Economic
   Readiness. 9.2 cognitive strategies moves to Y1.7.
6. **Domain 10 (Opportunity to Learn) moves to A2 Program Quality & Access.** Access and
   inclusion are conditions a program provides, not changes in a person. The OTL
   citation had no working source (see `current-inventory.md` 4.4).
7. **Domain 11 (Systems) becomes A1 Staff & Volunteers, A2 Program Quality & Access and
   A3 Systems & Community.** The output code (11.5) moves to A2.5.
8. **Domain 12 (Families) becomes F1 Family & Caregiver Strengthening and F2 Household
   Economic Stability.** 3.5 Family–Program Partnership moves to F1.8.
9. **Optional `outcome_type` field** (short / intermediate / long-term, UW Extension
   logic model, verified). Off by default; see the enum budget in
   `proposed-codebook.md`.

## Code by code (every 2.4.0 code)

"renumber" = same label and scope, new number. "rename" = new label or a stated scope
change. "merge" = two old codes share one new code. "split" = the old code maps to the
first new code listed; the parts in parentheses move elsewhere.

| 2.4.0 code | Proposed | Change | Reason |
|---|---|---|---|
| 1.1 Literacy: Reading & Writing | Y1.1 Literacy: Reading & Writing | renumber | Renumbered into the new structure; same scope. |
| 1.2 Numeracy & Mathematical Skill | Y1.3 Mathematics | rename | Renumbered; label shortened, same scope. |
| 1.3 Knowledge & Skill in Other Academic Subjects | Y1.5 Other Academic Subjects (+ Y6.2 (civics & government); Y8.3 (health education)) | split | Narrowed: civics and government move to Y6.2 and health education to Y8.3, so each has one home (S254 was scored 7.1 vs 1.3). |
| 1.4 English Language Proficiency & Multilingual Development | Y1.2 English Language Development & Multilingualism | rename | Renamed; widened to home-language maintenance (S143 had no clean home). |
| 1.5 Attendance, Chronic Absence & School Stability | Y1.13 Attendance & School Stability | rename | Renumbered into category C; label shortened. Same scope. |
| 1.6 Grades, Credits, On-Track Status & Graduation | Y1.15 Grades, Credits & On-Track Status (+ Y1.14 (suspension/expulsion); Y1.17 (graduation, GED, re-engagement)) | split | Split into three indicators: grades/credits/on-track (Y1.15), exclusionary discipline (Y1.14, CRDC + Irvin now verified; CP-01-09), graduation and re-engagement (Y1.17). |
| 1.7 School Readiness & Early Learning | Y1.8 Early Learning & School Readiness | rename | Renumbered; screenings RECEIVED move to Y8.5 (S061), motor skills to Y8.2 (S192). |
| 1.8 Science, Technology & Engineering | Y1.4 Science, Technology & Engineering | renumber | Renumbered into the new structure; same scope. |
| 1.9 Arts Learning & Performance | Y1.6 Arts Learning | rename | Renumbered; label shortened, same scope. |
| 2.1 Joy & Emotional Wellness | Y2.1 Enjoyment & Joy | rename | Scoped to enjoyment of the program or learning; general life satisfaction moves to Y8.7 (S071, S144). |
| 2.2 Triggered Situational Interest (Curiosity) | Y2.2 Curiosity & Triggered Interest | rename | Renumbered; label shortened, same scope. |
| 2.3 Value & Meaning (Utility Value) | Y2.4 Relevance & Utility Value | rename | Renumbered; label shortened, same scope. |
| 2.4 Creative Expression & Making | Y2.5 Creative Expression & Performance | merge | Merged with 2.5: creating and presenting were never confused in the gold, and one expression code is easier to apply. Skill gains stay in Y1.6 (CP-04-01 line kept). |
| 2.5 Performance, Presentation & Artistic Response | Y2.5 Creative Expression & Performance | merge | Merged into Y2.5 (see 2.4). |
| 2.6 Sustained & Individual Interest | Y2.3 Sustained & Individual Interest | renumber | Renumbered into the new structure; same scope. |
| 3.1 School/Program Connectedness (Belonging) | Y3.1 Belonging & Mattering | rename | Widened to any community (H063) and to safety AND acceptance in the program (follows PR #31's tie-breaker). |
| 3.2 Adult Support & Care | Y3.2 Supportive Adult Relationships | rename | Renumbered; label shortened, same scope. |
| 3.3 Peer Connection & Social Integration | Y3.3 Peer Relationships & Friendship | rename | Renumbered; label shortened, same scope. |
| 3.4 Cultural Identity & Affirmation | Y5.2 Cultural & Social Identity | rename | Moved to Y5 Identity: identity is not belonging (v2 finding; S009, S129). |
| 3.5 Family Partnership & Connection | F1.8 Family Connection & Trust with the Program | rename | Moved to F1 (family is the subject) as category D Family-program partnership. |
| 3.6 Social Capital & Networks | Y3.5 Social Capital & Networks | renumber | Renumbered into the new structure; same scope. |
| 4.1.1 Identifying and naming emotions | Y4.1 Emotion Awareness | rename | Renumbered; label shortened, same scope. |
| 4.1.2 Understanding self & identity | Y5.1 Self-Understanding & Identity Exploration | rename | Moved to Y5: identity is a self-belief, not a CASEL skill in practitioner statements (CF-004). |
| 4.1.3 Recognizing strengths | Y5.4 Confidence, Self-Efficacy & Self-Worth | merge | Merged into Y5.4 with confidence; recognising one's strengths had no gold rows of its own. |
| 4.1.4 Confidence, self-efficacy & growth mindset | Y5.4 Confidence, Self-Efficacy & Self-Worth | merge | Moved to Y5.4; academic growth mindset goes to Y1.12 (Farrington; CP-01-06 in flight sets the same line). |
| 4.2.1 Emotion regulation & impulse control | Y4.2 Emotion Regulation & Coping | merge | Merged with 4.2.2: the only SEL run-to-run disagreement (S179) and a contested gold pair; CASEL lists both under Self-Management. |
| 4.2.2 Stress management & coping skills | Y4.2 Emotion Regulation & Coping | merge | Merged into Y4.2 (see 4.2.1). |
| 4.2.3 Goal-setting & follow-through | Y4.3 Goal-Setting, Organization & Self-Discipline | merge | Merged with 4.2.4: 'setting' vs 'sticking with' a goal is not separable in one sentence; both are CASEL Self-Management. |
| 4.2.4 Organization, persistence & self-discipline | Y4.3 Goal-Setting, Organization & Self-Discipline | merge | Merged into Y4.3 (see 4.2.3). |
| 4.3.1 Empathy & perspective-taking | Y4.4 Empathy, Perspective-Taking & Social Awareness | merge | Merged with 4.3.3 as CASEL Social Awareness; gratitude named (S082, S242 gap). |
| 4.3.2 Respect for diversity & inclusion | Y4.5 Respect for Diversity & Cultural Competence | rename | Renumbered; label shortened, same scope. |
| 4.3.3 Understanding norms & expectations | Y4.4 Empathy, Perspective-Taking & Social Awareness | merge | Merged into Y4.4: no gold rows. |
| 4.3.4 Awareness of supports and resources | Y4.9 Help-Seeking & Offering Support | merge | Merged into Y4.9 help-seeking: it was a codebook extension with no source. |
| 4.4.1 Communication & active listening | Y4.6 Communication & Public Speaking | rename | Renamed to name public speaking (S132 gap). |
| 4.4.2 Cooperation, teamwork & collaboration | Y4.7 Teamwork, Collaboration & Group Leadership | rename | Renamed to include group leadership (CASEL 'Showing leadership in groups'; CP-01-06 in flight). |
| 4.4.3 Conflict management & problem-solving in relationships | Y4.8 Relationship-Building & Conflict Resolution | merge | Merged with 4.4.5 (relationship-building); both CASEL Relationship Skills, 4.4.5 had 2 gold rows and a skill-vs-outcome confusion. |
| 4.4.4 Help-seeking & providing support | Y4.9 Help-Seeking & Offering Support | merge | Renumbered; label shortened, same scope. |
| 4.4.5 Building and sustaining positive relationships | Y4.8 Relationship-Building & Conflict Resolution | merge | Merged into Y4.8 (see 4.4.3). |
| 4.5.1 Evaluating options & consequences | Y4.10 Decision-Making & Problem-Solving | merge | Merged with 4.5.3 (CF-012: no observable difference). |
| 4.5.2 Ethical and prosocial choices | Y4.11 Ethical & Prosocial Choices | merge | Merged with 4.5.5 (small daily contributions are prosocial choices; 1 gold row). |
| 4.5.3 Personal and social problem-solving | Y4.10 Decision-Making & Problem-Solving | merge | Merged into Y4.10 (see 4.5.1). |
| 4.5.4 Safety-oriented decisions & risk avoidance | Y4.12 Risk Avoidance & Refusal Skills | rename | Renamed; re-anchored on CASEL 'Resisting negative social pressure' (ends extension status). |
| 4.5.5 Contributions to class/program/community wellbeing | Y4.11 Ethical & Prosocial Choices | merge | Merged into Y4.11 (see 4.5.2). |
| 5.1 Academic Behaviors (Engagement) | Y1.9 Academic Engagement Behaviors | rename | Renumbered; label shortened, same scope. |
| 5.2 Academic Perseverance (Grit/Tenacity) | Y1.10 Academic Perseverance | rename | Renumbered; label shortened, same scope. |
| 5.3 Learning Strategies (Study Skills) | Y1.11 Learning Strategies & Study Skills | rename | Renumbered; label shortened, same scope. |
| 5.4 Academic Confidence (Self-Efficacy) | Y1.12 Academic Mindsets & Self-Efficacy | rename | Renamed Academic Mindsets; includes academic growth mindset (Farrington). |
| 6.1 Empowerment & Safety | Y8.10 Felt Safety (+ Y3.1 (mattering in the program); Y5.6 (voice/control over own life)) | split | Split by construct: felt safety (Y8.10), mattering in the program (Y3.1), voice or control over one's own life (Y5.6). Domain 6 dissolves (v2). PR #31 is reworking 6.1 now; the split follows its tie-breaker. |
| 6.2 Positive Values | Y6.1 Positive Values & Character | rename | Moved to Y6 with civic life (Lerner Character and Contribution); forgiveness and faith-grounded values named. |
| 6.3 Constructive Use of Time | Y2.6 Participation in Enriching Activities | rename | Moved to Y2 and widened to participation inside the program (S003). |
| 6.4 Positive Identity | Y5.5 Purpose & Future Orientation (+ Y5.4 (self-esteem)) | split | Split: purpose and future orientation (Y5.5, default), self-esteem (Y5.4). |
| 7.1 Civic Skills & Knowledge | Y6.2 Civic Knowledge | rename | Renamed Civic Knowledge; narrowed to government, elections and rights. Family system navigation moves to F1.7 (S017, H061). |
| 7.2 Community Service & Action | Y6.5 Community Service & Action | renumber | Renumbered into the new structure; same scope. |
| 7.3 Youth Voice & Leadership | Y6.4 Civic Voice, Leadership & Participation | rename | Renamed; voting and civic efficacy named (S182 gap). Self-advocacy moves to Y5.6 (H060, S032). |
| 7.4 Criticality & Social Justice | Y6.3 Critical Consciousness & Social Justice | rename | Renamed Critical Consciousness; re-anchored away from the misattributed 'Hill Model' label. |
| 7.5 Digital Citizenship & Safety | Y6.7 Digital Citizenship & Online Safety | rename | Renumbered; label shortened, same scope. |
| 8.1 Physical Activity & Nutrition | Y8.1 Healthy Daily Habits (+ Y8.2 (motor/sport skills); Y8.3 (first aid, safety skills); Y8.5 (screenings, chronic conditions)) | split | Split: daily habits incl. sleep and screen time stay (Y8.1); motor/sport skills (Y8.2), first aid and health knowledge (Y8.3), screenings and chronic conditions (Y8.5) move out. 9 of 13 gold rows were forced fits. |
| 8.2 Mental Health Status (Symptom Reduction) | Y8.6 Mental Health Symptoms & Distress | rename | Renamed; the flourishing side of Keyes' model gets its own code (Y8.7). |
| 8.3 Healing & Trauma Recovery | Y8.8 Healing & Trauma Recovery | renumber | Renumbered into the new structure; same scope. |
| 8.4 Access to Mental Health Services | Y8.9 Mental Health Service Access & Use | rename | Renumbered; label shortened, same scope. |
| 8.5 Substance Use Prevention & Reduction | Y8.11 Substance Use | rename | Renumbered; label shortened, same scope. |
| 8.6 Sexual & Reproductive Health Behaviors | Y8.4 Sexual & Reproductive Health | rename | Renumbered; label shortened, same scope. |
| 8.7 Violence, Bullying & Injury Prevention | Y8.12 Violence, Bullying & Victimization | rename | Renumbered; label shortened, same scope. |
| 8.8 Justice Involvement, Diversion & Reentry | Y8.13 Justice Involvement, Diversion & Reentry | renumber | Renumbered into the new structure; same scope. |
| 9.1 Key Content Knowledge | Y1.5 Other Academic Subjects (+ Y1.1/Y1.3/Y1.4/Y1.6 by Subject Area) | split | Retired: the only difference from the subject codes was framing (CF-010). Old rows map by Subject Area. |
| 9.2 Key Cognitive Strategies | Y1.7 Critical Thinking, Inquiry & Media Literacy | rename | Moved to Y1.7 Critical Thinking, Inquiry & Media Literacy (v2 Y7.9; NAMLE verified). |
| 9.3 Transition Knowledge & Skills | Y7.2 College & Career Transition Knowledge | rename | Renamed; vital documents move to Y7.7 (H046, S120). |
| 9.4 Career Awareness & Exploration | Y7.1 Career Awareness & Exploration | renumber | Renumbered into the new structure; same scope. |
| 9.5 Employability Skills | Y7.3 Employability & Workplace Skills | rename | Renumbered; label shortened, same scope. |
| 9.6 Technical Skills & Work-Based Learning | Y7.4 Technical Skills, Credentials & Work-Based Learning | rename | Renumbered; label shortened, same scope. |
| 9.7 Postsecondary Enrollment, Persistence & Completion | Y1.18 Postsecondary Enrollment, Persistence & Completion | renumber | Moved to Y1 category C: the education-status continuum (NSC benchmarks). |
| 9.8 Employment Placement, Retention & Earnings | Y7.5 Employment & Earnings | rename | Renumbered; label shortened, same scope. |
| 9.9 Financial Capability | Y7.6 Financial Capability | renumber | Renumbered into the new structure; same scope. |
| 10.1 Access to Resources | A2.3 Access to Resources | renumber | Moved to A2 (a condition provided by the program, not a change in a person); OTL citation dropped. |
| 10.2 Participation & Inclusion | A2.4 Inclusion, Accommodations & Language Access | rename | Moved to A2; widened to language access (deferred item); OTL citation dropped. |
| 11.1 Professional Knowledge & Skill | A1.1 Staff & Volunteer Knowledge & Skills | rename | Renamed to say it covers volunteers (the 2.4.0 note had to correct the label). |
| 11.2 Instructional Practice Change | A1.2 Practice Change | rename | Renumbered; label shortened, same scope. |
| 11.3 Systemic Improvement | A3.1 Policy & Institutional Change (+ A3.2 (partnerships)) | split | Split: policy and institutional change (A3.1, default), partnerships (A3.2). Community conditions get A3.3. |
| 11.4 Family Engagement Capacity | A2.6 Family Engagement Systems | rename | Moved to A2 as the organization's family-engagement systems. |
| 11.5 Program Participation, Retention & Reach (Output Metric) | A2.5 Participation, Dosage & Reach (Output) | rename | Moved to A2; training hours and staff services delivered named as outputs (H005, H075, S183). |
| 12.1 Parenting Knowledge & Practices | F1.1 Parenting Knowledge & Practices | renumber | Renumbered; family health practices get F1.3. |
| 12.2 Parental Resilience & Caregiver Well-being | F1.4 Caregiver Well-Being & Resilience | rename | Renumbered. |
| 12.3 Caregiver Social Connections & Support Networks | F1.5 Caregiver Social Connections | rename | Renumbered. |
| 12.4 Home Learning Environment | F1.2 Home Learning Environment & Routines | rename | Renumbered. |
| 12.5 Household Economic Stability & Benefits Access | F2.1 Income, Benefits & Financial Stability | rename | Renumbered; the independent-youth scope from 2.3.0 kept. |
| 12.6 Food Security & Nutrition Access | F2.2 Food Security | rename | Renumbered. |
| 12.7 Housing Stability | F2.3 Housing Stability & Safe Living Situation | rename | Renumbered; scope from CP-01-11 (2.3.0) kept. |

## Additions (22 new codes)

Each new code has at least one adjudicated gold row that had no clean home in 2.4.0
(forced fit, "no good fit" gap tag, or a split-off part of an overloaded code). The ids
are the examples used in each entry of `proposed-codebook.md`.

| New code | Why | Gold evidence |
|---|---|---|
| Y1.14 Exclusionary Discipline | Split from 1.6; suspension and expulsion are a distinct indicator in CRDC (verified) and CP-01-09. | S055, S085 |
| Y1.16 Advanced Coursework | AP/IB/dual enrollment is a CRDC indicator (verified); no 2.4.0 home. | S159 |
| Y1.17 High School Completion & Re-engagement | Split from 1.6 so graduation is not merged with grades. | H052, S241 |
| Y3.4 Family Relationships | Youth-side relationships with family had no home (F codes are about caregivers). | S024 |
| Y5.3 Domain Identity | "Sees self as a scientist / artist" (Carlone & Johnson lead, [VERIFY] journal access). | S036 |
| Y5.6 Agency & Self-Advocacy | Split from 6.1; self-determination construct (Shogren lead, [VERIFY]). | H060 |
| Y6.6 Environmental Stewardship | No 2.4.0 home. | S013, S045 |
| Y7.7 Independent Living Skills | Vital documents, driving, cooking, household management. | H046, H048, S120, S162, S224 |
| Y8.2 Motor & Sport Skills | Split from 8.1 (habits vs skills); SHAPE America standards. | H082, S068, S031, S074, S255 |
| Y8.3 Health Knowledge & Safety Skills | Split from 1.3 and 8.1 (health education). | H085, S108 |
| Y8.5 Health Care Access | Split from 8.1; screenings, insurance, a medical home. | S064, S094 |
| Y8.7 Flourishing | Positive side of Keyes' two continua (partial, primary [VERIFY]); life satisfaction had to go to 2.1 Joy. | S071 |
| Y8.10 Felt Safety | Split from 6.1; follows PR #31's safety routing. | H051, S038 |
| F1.3 Family Health Practices | MIECHV home-visiting measures (the one early-childhood exception already agreed). | H066, H072 |
| F1.6 Adult Education & Employment | Caregivers' own GED, ESL, job outcomes. | S118, H078 |
| F1.7 Navigation & Rights | Families navigating schools, services and rights (McKinney-Vento, IDEA). | S252, S017 |
| F1.9 Family Participation & Leadership | Per-family participation and leadership, parallel to Y2.6. | S164, S176 |
| A1.3 Workforce Stability | Staff retention (without Head Start, per the agreed scope rule). | S149 |
| A2.1 Program Quality | Observed quality (e.g. PQA) had no home. | H057, S174 |
| A2.2 Participant Satisfaction | Satisfaction statements had no clean home. | H002, S137 |
| A3.2 Partnerships | Split from 11.3. | H089, S195 |
| A3.3 Collective Efficacy & Community Conditions | Neighborhood-level outcomes (Sampson lead). | S154 |

A3.1 Policy & Institutional Change also takes funding and sustainability statements
(S019, which was a "no good fit" gap row).

**Still no home:** S247 (gardening). Proposed rule: code it by what the youth gains
(Y6.6 if stewardship is named, Y8.1 if nutrition), else uncoded. Severin's call.

## Removals

- **9.1 Key Content Knowledge.** Retired. The only difference from the subject codes
  was framing (CF-010); old rows map by Subject Area (literacy → Y1.1, math → Y1.3,
  STE → Y1.4, arts → Y1.6, anything else → Y1.5).
- No other code is dropped: every 2.4.0 code maps to at least one proposed code.
- **Considered and not adopted from v2:** the residual "applied skills" code (v2
  Y7.10). A residual code attracts statements that belong elsewhere.

## Interaction with in-flight work

These are being tested in the "Next phase of codebook refinement" thread. This proposal
does not re-propose their wording; it says where each boundary lands.

| In flight | Codes it touches | How this proposal handles it |
|---|---|---|
| PR #31, CP-01-07 (6.1 safety + tie-breaker Severin chose after S212 regressed) | 6.1, 3.1, 8.3 | 6.1 splits into Y8.10 felt safety, Y3.1 belonging (safety AND acceptance in the program) and Y5.6 agency. Y8.10's wording will copy whatever PR #31 merges. |
| CP-01-06 (CASEL tie-breakers) | 4.4.x, 4.1.x, 6.2 | Leadership: Y4.7 (relationship skill) vs Y6.4 (civic leadership) follows CP-01-06's rule. Growth mindset: Y1.12 (academic mindsets) vs Y5.4. Resisting peer pressure: Y4.12. Gratitude: Y4.4. If CP-01-06 decides differently, this proposal follows it. |
| CP-01-12 (decision procedure) | the rules section | "How to code" rules 1–3 cover the same ground. If CP-01-12 merges first, its text replaces rules 1–3 and this proposal adapts. |

## Divergences from the v2 draft

| v2 draft | This proposal | Why |
|---|---|---|
| 18 domains, 108 codes | 13 domains, 98 codes | Adding domains adds boundaries: domain agreement fell from 94.4% (v1.1.1) to 88.9% (v2) in v2's held-out test (`v2/STRUCTURE.md` §1). Categories carry the finer structure instead. |
| Mindsets, content learning and attainment as three domains (Y6, Y7, Y8) | One academic domain, Y1, with three categories | Same reason; keeps Academic as Domain 1 (CP-04-08). |
| Reading (Y7.1) and writing (Y7.2) as separate codes | One literacy code, Y1.1 | Keeps 1.2.0's approved literacy code (CP-04-02). |
| All arts, including expression and performance, in content learning (Y7.6) | Y2.5 Creative Expression & Performance apart from Y1.6 Arts Learning | Keeps CP-04-01 (expression as an experience is not a skill gain); 2.4 and 2.5 merge because the gold never confused them. |
| Self-worth (Y4.4) separate from confidence | One code, Y5.1 | No gold rows of its own; ends the confidence/self-worth/self-efficacy triangle. |
| Health split into three domains (Y10, Y11, Y12) | One health domain, Y8, with three categories, keeping v2's new motor, health-knowledge and health-care-access codes | Fewer domain boundaries; the new codes close nine forced or gap rows. |
| F3 Family–Program Partnership as its own domain | Category D of F1 | The subject is still the family; one family domain is easier to apply (CF-008). |
| Residual applied-skills extension (Y7.10) | Dropped | See Removals. |

## STANDARDS conflicts Severin needs to rule on

1. **S2.3 caps a cycle at 5 new subcategories** and says to stop adding codes and
   redesign the schema once the enum footprint passes 165. This is a redesign (22 new codes), so it cannot go through as one
   ordinary cycle. Recommendation: treat it as PLAN phase 4 (the v2 build), which
   already expects a new codebook.
2. **S4.6: a MAJOR version needs a re-import mapping** in
   `services/reviewNormalization.ts`. The crosswalk CSV is that map's draft; phase 4
   would turn it into a generated map applied by script, with a one-to-one test (per
   the renumbering rule).
3. **Enum budget.** With the current schema (domain + code enums) the footprint is about
   160, under the 180 test cap but near the 165 line. Deriving the domain from the code
   prefix brings it to about 134 (141 with `outcome_type`).

Recommendation: build this as a **new codebook id** alongside `original`, keeping 2.4.0
selectable, as PLAN phase 4 describes for v2. Old exports keep their meaning; nothing is
migrated silently.

## Migration path (phase 4, after approval)

1. Generate the old→new map from the crosswalk by script; test that every 2.4.0 code
   maps, every mapping target exists, and one-to-one rows round-trip.
2. **Auto-map** one-to-one and merge rows. **Flag for re-review** rows from the 7 split
   codes (the CSV's `re_review_targets` column lists the candidate codes) and
   low-confidence rows.
3. **Gold:** the gold's own v2 column already maps cleanly; every adjudicated row gets
   a proposed code except S247. But 100 of 345 rows land somewhere different from what
   a pure 2.4.0 auto-map would give (28 via split codes, 38 forced-fit or gap rows,
   34 others, e.g. H005, S003, S004, S034, S059, S127, S150, S212). So the proposed gold
   must be a new adjudication pass by Severin, not a mechanical conversion; a script can
   pre-fill suggestions only.
4. **For analysis of old data**, re-code with the new codebook rather than rely on the
   auto-map alone; the auto-map is right for most rows but silently wrong for the
   kinds of rows above.
5. Separately: the gold's `v1_gold` column was never moved to 1.8/1.9 after the subject
   split (S104, S147, S185, S203, S232, S199, H010, H031, H077). Flagged to the
   CP-scoring thread; not edited here.

## Open decisions for Severin

1. Approve the 13-domain, 3-part structure (or keep closer to v2's 18).
2. Build as a new codebook id beside `original` (recommended) or replace `original`.
3. Accept the redesign as PLAN phase 4 rather than an ordinary cycle (S2.3).
4. Derive the domain from the code prefix (saves ~26 enum slots).
5. `outcome_type`: on, or off for now (recommended off).
6. S247 gardening rule.
