# Batch 3 practitioner review: Y8, F1, F2 (2026-10-16)

Role: practitioner. The question for each finding: does it help code real Philadelphia logic models?
Inputs:
- the findings, `reconciliation.md` and `verification-table.md` (47 SUPPORTED, 22 PARTIAL);
- unique-text counts (logic-model run / no-logic-model run) and the texts in both run exports;
- CONFUSIONS.md (2.x numbers, read through the crosswalk);
- design gold only.

I edited nothing in the repo.

Two corrections to f1's counts. F1.6 has real use (3 / 0: "Adult Financial Capability & Resilience",
"Financial Lit Agency", "financially literate community members"). F1.4 has no row, so its use is zero.

## Y8

| Finding | Verdict | Reason | Smallest change | Gold flips |
|---|---|---|---|---|
| Y8.1 HECAT HBOs, YRBS 2025 items, PA-06 (y8a-02..11) | ACCEPT | Busiest Y8 code (39 / 29); every claim SUPPORTED; citation only | Add the links with the verifier's YRBS title; WSCC stays at domain level | none |
| Y8.1 screen time partial (PA-R02) | ACCEPT | Keeps S207 and H086 | Record as partial; add a watch item | none |
| Y8.2 fine motor via ELOF (y8a-13) | REJECT ELOF, ACCEPT an FD | Fine motor is not about young children by definition (same ruling as Y1.10). Real use has no fine-motor text; Y8.2's 3 / 20 texts are all sport skills | Keep the words; log an FD (codebook-defined) | S192 if the words are dropped |
| Y8.2 SHAPE PE 1.8.1, 1.12.9 (y8a-14) | ACCEPT | Matches S255 and H082 | Add | none |
| Y8.3 NHES Std 3, 1.x.3, HECAT Safety 4/7 | ACCEPT | Grounds first aid and reliable info | Mark HBO 4/7 partial | none |
| Y8.4 add "puberty" (y8a-20) | ACCEPT | The model already routes puberty texts here | Add to include | none |
| Y8.5 HECAT PHW 9-11, IID-08, OH-08, MICH-17 | ACCEPT WITH CHANGES | Holds the school-health texts (21 no-logic-model texts: immunization compliance, vision screening, dental, asthma). Under decision C, MICH-17 is allowed because S061 is about infants by definition | Mark HBO 11 and IID-08 partial | none |
| Y8.6 keep "behavioral problems" via CDC ODD/CD (y8b-01, R-04) | REJECT | The worst practitioner fit in the batch. Real Y8.6 texts ("Reduced behavioral incidents due to trauma-informed practices", "positive behavioral change", "improved behavior of their youth") mean conduct, not disorder. A diagnostic citation would lock in the misroute | Narrow to "anxiety, depression or distress". Move "fewer outbursts" to Y4.2. Hint: bare "improved behavior" goes to Y4 domain-only; suspensions or referrals go to Y1.14 (after PR #66) | none: H034, S046 and S067 are all symptom rows |
| Y8.6 add suicidal thoughts or self-harm | ACCEPT | Obvious home | Include line | none |
| Y8.7 drop "restored" | REJECT | Nature and arts partners write "restorative" outcomes; S144 could drift to Y2.1 | Keep the word; log an FD | S144 if dropped |
| Y8.8 pin Core Concepts (y8b-04) | ACCEPT WITH CHANGES | Concept 10 is about culture, not recovery | Pin concept 5; fix the title | none |
| Y8.9 MHMD-03, MHMD-06, YRBS Q94 | ACCEPT | Direct, SUPPORTED | Add | none |
| Y8.10 stale "PR #31" text (R-22) | ACCEPT, do first | Reaches the prompt | Delete it here and at lines 244 and 779 (244 is Y1: coordinate with PR #66) | none |
| Y8.11 / Y8.12 knowledge, intentions, warning signs (R-03) | ACCEPT the FD; REJECT narrowing | Heavy use ("Increased knowledge of the risks associated with drug and alcohol use", "prevention literacy"). No verified HECAT AOD/Violence citation exists | One merged-components FD (SHAPE NHES), logged but not counted; MTF as partial | H038, S065, S248 if narrowed |
| Y8.12 YRBS items, CDC definition | ACCEPT | Decision C: the code names no age, so ages 10-24 need no FD | Add | none |
| Y8.13 observability FD, OJJDP 2017, CJCA title | ACCEPT | S018 and S189 rest on completion wording | Add, fix the title, log the FD | none |
| Mental-health literacy (R-18) | ACCEPT a hint | "Students gain knowledge of stress management, and mental health" already lands in Y8.3 | Knowing → Y8.3; using a coping tool → Y4.2; fewer symptoms → Y8.6 (CF-003) | none |

## F1

| Finding | Verdict | Reason | Smallest change | Gold flips |
|---|---|---|---|---|
| F1.1 Core Meanings (f1-02) | ACCEPT | SUPPORTED; covers S245 and S173 | Add | none |
| F1.2 Corwin Type 4 (f1-03); WIOA family literacy (f1-10); routines (f1-14) | ACCEPT f1-03 and f1-14 (partial); REJECT f1-10 | f1-10 describes program activities; f1-14 covers S022 | Add f1-03 and f1-14 | none |
| F1.3 SNAP-Ed MT1 (f1-11); 2036a (f1-13) | ACCEPT f1-11; REJECT f1-13 | MT1 covers H072; f1-13 is a funding clause | Add MT1 with a status note | none |
| F1.3 adult-health lead | DEFER | 4 texts, non-caregiver adults' own health; S2.2 | Backlog | — |
| F1.4 Core Meanings resilience (f1-01) | ACCEPT | Partial becomes direct | Add | none |
| F1.6 WIOA 3272(1),(6) | ACCEPT | Covers H062 and S118. Decision C matters here: F1.6 names "older adults", which parent-framed Ascend does not cover | Add | none |
| F1.6 Ascend Economic Assets (f1-08) | REJECT | PARTIAL, and it pulls financial education against the gold (Missed 1) | none | would contest H027, S006 |
| F1.6 DEA covered populations (f1-09) | REJECT | Names who, not an outcome; not needed | none | none |
| F1.7 drop Mapp & Kuttner | ACCEPT | Two direct sources remain; real use (8 / 2) is about resource access | Remove the link | none |
| F1.8 Version 2 (f1-12) | DEFER | Secondary host | none | none |
| F1.9 Flag 1, CP-09-01 vs Type 3 (R-15) | ACCEPT as a note | F1.9 is the most-used F code (13 / 4). About half of its texts are family attendance ("greater participation in concerts, performances and culminating events", "increased family engagement in the arts"). CP-09-01 moves these to A2.5, an output, so they drop out of family-outcome dashboards. The CP should say so | An FD line or a note in CP-09-01; Severin decides | none |
| F1.9 Flag 2, S176 | ACCEPT as a question | "Create a family advisory board" is an organization action; S164 is the true F1.9 case | Ask Severin | S176 if re-adjudicated |
| Child-welfare prevention (R-17) | DEFER | 2 low-confidence texts, split between F1.1 and F2.3, both wrong | F1 owns it; hint: F1 domain-only | none |

## F2

| Finding | Verdict | Reason | Smallest change | Gold flips |
|---|---|---|---|---|
| F2.1 NYTD (f2-01) | ACCEPT | Decision C applies: F2.1 names "independent-youth", which Ascend does not cover. NYTD closes the gap with no FD | Add | none |
| F2.1 CFPB well-being (f2-02) | ACCEPT WITH CHANGES | It is the tool for the F1.6/F2.1 line. Financial well-being, savings and paying bills are a state (F2.1); learning skills is F1.6 | Add with the CF line (Missed 1). Demote CSSP to partial | none; supports H027, S006 |
| F2.1 Medicaid via AHS-01 (f2-03) | ACCEPT WITH CHANGES | Keep "Medicaid": S139 and real use ("health insurance enrollment among eligible District families", high) need it | AHS-01 as partial. Hint: a family's enrollment → F2.1; a youth's own coverage → Y8.5 (S139 vs S191) | none |
| F2.1 bare "stability" hint | ACCEPT WITH CHANGES | 4 low/medium texts. f2's rule would leave most of them uncoded and lose the intended signal | A family's or household's "stability" with nothing named → F2 domain-only; "overall life stability" → uncoded | none |
| F2.2 nutrition security (f2-04) | ACCEPT WITH CHANGES; REJECT narrowing | 5 of the 6 logic-model F2.2 texts are about healthy-food or produce access. Narrowing would empty the code | Add once the title is confirmed | S062's healthy-food half if narrowed |
| F2.2 NWS-01 | ACCEPT (optional) | Tier-A frame | Add | none |
| "Manage food budgets" → F1.6 | DEFER | Contradicts H027 and CF-001 | Settle in the CF first | H027 |
| F2.3 RHY, SDOH-04 (f2-06, -07, -09); HEARTH (f2-08) | ACCEPT (HEARTH partial) | Cover H049, S225, S200 and H074 | Add | none |
| F2.3 McKinney-Vento (f2-10, R-08) | ACCEPT the drop | Adds nothing once RHY is in; re-pinning touches Y1.13 under PR #66 | Remove the F2.3 row only | none |
| Adult volunteering (R-07, R-20); f2-11 | ACCEPT the hint; REJECT f2-11 | "Increase volunteers' awareness of resources for older adults" and "volunteers' utilization of community resources" are program volunteers, wrongly in F1.7. Parent volunteers are correctly F1.9. CEV is population-wide | A1 hint: the program's own volunteers → A1.1 / A1.3. Caregivers → F1.9. Other adults' civic volunteering → uncoded. No code | none |

## Drift after these verdicts

- Y8: 3/13 (fine motor, "restored", Y8.13), plus one logged merged-components entry.
- F1: 0/9, or 1/9 if CP-09-01 logs Type 3.
- F2: 0/3. Only f2-04 is not yet SUPPORTED.

## What the researchers missed

1. **The F1.6/F2.1 line contradicts the gold.** F1.6 says caregiver "financial skills". CF-001 (2.x
   12.5 = F2.1) sends caregiver financial coaching to F2.1, and the gold puts H027 ("confident managing
   household finances") and S006 (coaching plus savings) there. Real use puts adult financial literacy
   in F1.6, with F2.1 as secondary. f1-08 and f2's food-budget routing would widen F1.6 against the
   gold. A 3.x CF entry is needed before any F1.6 or F2.1 CP. Severin should confirm H027.
2. **Split multi-outcome statements were not checked.** One is "Improved student health outcomes
   through on-site access to medical, dental, and behavioral services": coded Y8 domain-only, though it
   names Y8.5 and Y8.9. Another is "manage food budgets while maintaining nutritional standards":
   coded F2.1 in one row and F2.2 in another. These need the splitter or a secondary code, not a code
   change.
3. **Y8 domain-only already works.** 13 texts such as "Improve overall health and well being" land in
   Y8 domain-only. The Y8.6 narrowing and the "stability" hint depend on it, and nobody noted that.
4. **No adult digital-skills texts.** F1.6 has none in real use; the digital lead belongs to other
   batches.
5. **CONFUSIONS.md is still numbered 2.x.** Write every hint above into a 3.x CF entry as well, or
   S3's "this file wins" rule points coders at retired numbers.
