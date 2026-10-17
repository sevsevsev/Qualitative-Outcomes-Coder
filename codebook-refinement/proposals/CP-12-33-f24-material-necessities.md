# CP-12-33: New code for young people having the clothing, gear and supplies they need (F2.4)

Status: draft, 2026-10-17 (Severin asked for it)

**In plain words.** Many donors and programs give young people coats, shoes, sports gear, school
supplies or period products, and their statements of what this achieves have no code today. This
change adds one code, Material Necessities (Clothing, Gear & Supplies) (F2.4), under Basic Needs
and Economic Stability, for a young person *having* those goods rather than going without. Handing
out or counting the goods stays with Access to Resources (A2.3), and what the goods lead to (going
to school more, joining a team, feeling confident) keeps its own code. The code rests on European
Union child-poverty survey items for clothes, shoes and outdoor equipment, a girls' menstrual-health
indicator, and two U.S. laws that name school supplies, so it needs no logged departure from its
sources; nothing ships until Severin rules on 29 example statements and a test run has passed.

| Field | Value |
|---|---|
| Type | ADD_CODE |
| Codes touched | F2.4 (new). F2: `description`, `frameworkBasis`, `categoryLine`, category B `name` and `description`. A2.3: exclude, useInstead. rulesText: rule 1 (one clause), rule 2 (one sentence). `CONFUSIONS.md`: CF-037 (provisional id). `DEVIATIONS.md`: F2 drift row only (no FD). Registry: seven new entries, one note. Tests: code count 98 → 99. No change to F2.2, F2.3, Y8.1, Y2.6, Y1.13 (reasons under "Neighbouring codes"). |
| Version bump | MINOR: 3.2.0 if it is the first MINOR after 3.1.5, otherwise the next minor (version bumped at merge) |
| Requirement served | R2 breadth (with R1 frameworks and R3 tie-breakers for the new code) |
| Status | draft, 2026-10-17 (Severin asked for it). **Blocked** on: (1) Severin settling the 29 proposed rows P-F24-01 to P-F24-29 (decision G11); (2) the live design-set gate after PRs #62 and #66 (decision G10). |
| Enum cost | +1 (160 → 161; redesign line 165; test cap 180) |
| Framework deviation | none. F2.4 enters as `framework`; F2 drift 1 of 3 (33%, at the line) → 1 of 4 (25%, below it). |

Framework deviation: none. Every element the code text names has verified support: clothes, shoes
and outdoor leisure equipment and the affordability condition directly (Eurostat 2023; Commission
Regulation (EU) No 112/2013 items HD100, HD110, HD160), menstrual materials directly (Global MHH
Monitoring Group 2022, Indicator 1), clothing in general and school supplies as statutory duties
(42 U.S.C. 675(4)(A); 42 U.S.C. 11433(d)(15); partial, decision G4). The anchors are named in F2's
Framework Basis with an "(F2.4 only)" tag, as F1 names MIECHV for F1.3 only. The text names no
foster-care or homeless population (decision G1) and no general hygiene item. If Severin answers
decision 2 were overruled, F2.4 becomes codebook-defined with an FD, F2 goes to 2 of 4 (50%, over the line),
and the F2 anchor re-review (S4.9) comes first.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G1 (an FD only when a code's own text names a population outside its source) | The text says "a young person", not foster care or homelessness, so the two statutes' populations add no FD. |
| G2 (frameworks outside the anchor are named in `frameworkBasis`) | EU-SILC and the MHH indicators enter F2's line as anchors for F2.4 only; the two statutes enter its "secondary:" clause. |
| G3 (a PARTIAL fit avoids an FD only when the source is broader than the code) | The UN Convention on the Rights of the Child, Art. 27(3) is broader (a right to an adequate standard of living) and is supporting only. HD100 ("new (not second-hand) clothes") is *narrower* than "clothing", so clothing in general rests on 675(4)(A) under G4, not on HD100 alone. |
| G4 (a SUPPORTED statutory duty is partial support with no FD) | School supplies (675(4)(A), 11433(d)(15)) and clothing in general (675(4)(A)). |
| G5 (a named instance of a cited general category is not a departure) | "Outdoor sports gear" in the include is read as an instance of HD160 "Outdoor leisure equipment"; "period products" as an instance of "menstrual materials". |
| G7 (S4.9 as written; F2 is at the line) | Wording chosen so that F2.4 stays `framework`. Drift shown below. |
| G8 (official copy; secondary host only with a recorded match), CP-12-28 | Innocenti Report Card 10 (claim f2new-04) was read only on a UNICEF Hong Kong test server: not cited; a lead with verification request V-F24-1. |
| G9 (domain-only may hold a specific result with no code, with a `codebook_gap` flag) | General hygiene items and generic "basic needs" go to Domain F2, subcategory none. Relies on CP-12-19's DOMAIN ONLY bullet (shared with CP-12-32). |
| G10 (prompt-reaching edits after PRs #62 and #66, in a gate) | Everything that reaches the prompt waits; see "What lands when". |
| G11 (two adjudicated design rows per side before a hint or widening ships) | 29 proposed rows; the code, its CF and its example wait for Severin. |

## Problem

1. **No home for the construct.** F2 has F2.1 (income, benefits), F2.2 (food), F2.3 (housing). No
   code covers a young person having the clothing, shoes, equipment, school supplies or period
   products they need. A2.3 covers *providing* "materials, devices, connectivity or facilities,
   including counts of resources distributed", which is the program's side. Rule 1 sends what a
   young person has (their housing, food, income) to F2, so a statement such as "every student will
   have a warm coat and shoes that fit" today lands at a forced code or at low confidence.
2. **Why now.** Severin, 2026-10-17: "Many programs/donors do not yet have logic models (but we will
   push them to produce them soon), which is why I want to account for outcomes related to donations
   of clothes and supplies."
3. **Evidence in gold.** Design gold (`gold/youth_outcomes_v3.gold.csv`) has no row about clothing,
   shoes, school supplies, sports gear, hygiene or period products (searched 2026-10-17), and the
   domain-only gold has no F2 row. The real-run exports are not in this checkout, so every proposed
   row below is invented. The code therefore starts with no adjudicated example, which is why it
   waits for G11.
4. **The anchor CSSP does not reach it.** F2.1's CSSP Concrete Support brief names "basic
   necessities ... (e.g., healthy food, a safe environment)" but not clothing (claim f2new-13,
   PARTIAL; the verifier notes the negative rests on the page reader, not a raw-text search). CSSP
   is not used as support for F2.4.

## Why this is the smallest fit (STANDARDS S2.2)

1. **Example or hint.** No code's definition names the construct; a hint would push statements
   into a code that does not fit (A2.3 is provision; F2.1 is money).
2. **Widening A2.3** ("having clothing or supplies → A2.3", by analogy with rule 15 for devices).
   Rule 1 puts a young person's own material state in Part F, not Part A, and A2.3's three sources
   are digital-equity statutes, so the widened scope would need a counted FD. A2 is at the line
   (2 of 6); one more entry starts its anchor re-review.
3. **Widening F2.1** to material deprivation. F2.1's sources (Ascend, CFPB, NYTD) do not name goods,
   and EU-SILC keeps child items apart from income. It would need an FD on F2, which is at the line.
4. **F2 domain-only for all of it.** Possible under G9, but it gives donors' most common stated
   result no code, and the construct has a direct, child-level indicator, so a code is warranted.
5. **A new category.** Not needed: one code in category B costs the same enum (+1) and keeps 39
   categories.

So: one code, F2.4, in category B, renamed "Food, housing & material necessities". The id F2.4 has
never been a 3.x code; "F2.4" in `research-review/2026-10-16/findings/taxonomy-findings.md` and
the reviews is a finding number, not a code.

## Enum budget

Measured 2026-10-17 with `buildBatchResponseSchema` and the `sumEnumSizes` logic of
`codebooks/geminiSchema.test.ts` (scratch script; repo unchanged), on `youth_outcomes_v3` 3.1.5,
before and after adding one subcategory to the F2 domain:

| | Footprint |
|---|---|
| Today (3.1.5) | 160 |
| With F2.4 | 161 (+1: the subcategory enum only; no new domain) |
| Redesign line (S2.3) | 165 (4 left after this CP) |
| Test cap (`toBeLessThan(180)`) | 180 |

One subcategory this cycle, within S2.3's limit of 5.

## Change: codebook data (`codebooks/youthOutcomesV3.data.ts`)

### F2 domain

| Field | Before | After |
|---|---|---|
| `description` (prompt, "Note:" line) | `The material stability of a household or of a young person living independently: income and benefits, food, housing.` | `The material stability of a household or of a young person living independently, and the basic goods a young person has: income and benefits, food, housing, clothing and supplies.` |
| `categoryLine` (review hint) | `A. Economic stability (F2.1) · B. Food & housing (F2.2–F2.3)` | `A. Economic stability (F2.1) · B. Food, housing & material necessities (F2.2–F2.4)` |
| category B `name` (prompt header) | `Food & housing` | `Food, housing & material necessities` |
| category B `description` (display only, CP-10-03) | `Having enough healthy food and a safe, stable place to live.` | `Having enough healthy food, a safe, stable place to live, and the clothing, shoes, gear and supplies a young person needs.` |

**`frameworkBasis`** (prompt, "Framework Basis:" line), before (3.1.5):

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD.
```

After, if CP-12-29 has landed (its F2 text, with the new items inserted):

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD; Eurostat EU-SILC child-specific deprivation items (F2.4 only); Global MHH Monitoring Group (2022), girls' menstrual health indicators (F2.4 only); secondary: CFPB Financial Well-Being (financial cushion); Runaway and Homeless Youth Program, 45 CFR 1351 (stable housing and safe exits); Healthy People 2030, AHS-01, NWS-01 and SDOH-04; USDA nutrition security (2022); McKinney-Vento Act, including the HEARTH Act; Social Security Act, 42 U.S.C. 675(4)(A) (clothing and school supplies).
```

(CP-12-29's own rules for the USDA and HEARTH items still apply.) If CP-12-29 has not landed:

```
CSSP Strengthening Families (Concrete Support); Ascend 2Gen (Economic Assets); USDA Household Food Security Survey Module; ACF NYTD; Eurostat EU-SILC child-specific deprivation items (F2.4 only); Global MHH Monitoring Group (2022), girls' menstrual health indicators (F2.4 only); secondary: McKinney-Vento Act; Social Security Act, 42 U.S.C. 675(4)(A) (clothing and school supplies).
```

### F2.4 (new), appended to category B after F2.3

```ts
          {
            "id": "F2.4",
            "name": "Material Necessities (Clothing, Gear & Supplies)",
            "short": "Material necessities",
            "flag": "deductive",
            "fidelity": "framework",
            "from2x": "new",
            "definition": "A young person having the basic goods a child needs, rather than going without them for lack of money (the statement need not name the cause): clothing, properly fitting shoes, outdoor leisure equipment, school supplies, and enough menstrual materials.",
            "include": "Weather-appropriate clothing; shoes that fit; outdoor play gear such as a bike; school supplies, including students coming to class with the supplies they need; enough period products; the number of children who will have a coat or other goods.",
            "exclude": "Goods given, received, distributed or counted, or access to them; devices and internet; food; housing; general hygiene items (soap, deodorant, toothpaste) and basic needs or material hardship in general; what having the goods leads to (school attendance, joining a team, physical activity, confidence or dignity, belonging, household costs).",
            "useInstead": "A2.3 goods provided, counted or made accessible, and devices or internet; Domain F2 with subcategory none for general hygiene items or basic needs in general; F2.1 household costs; F2.2 food; F2.3 housing; Y1.13 attendance; Y1.9 class participation; Y2.6 joining or staying in an activity; Y8.1 physical activity; Y5.4 confidence, self-worth or dignity; Y3.1 belonging.",
            "example": {
              "text": "<the first F2.4 row Severin confirms; draft: P-F24-04, \"Every student we serve will have a warm winter coat and properly fitting shoes by December.\">",
              "goldId": "<the design gold id Severin gives that row>"
            },
            "source": "Eurostat, EU-SILC child-specific material deprivation items (Commission Regulation (EU) No 112/2013, HD100, HD110, HD160); Global MHH Monitoring Group (2022), Priority List of Indicators for Girls' Menstrual Health and Hygiene, Indicator 1; Social Security Act, 42 U.S.C. 675(4)(A); McKinney-Vento Act, 42 U.S.C. 11433(d)(15).",
            "basis": "Eurostat (2023, 24 April), child-specific material deprivation rate (verified, direct: new clothes, two pairs of shoes, outdoor leisure equipment; only items lacked for affordability count; claim f2new-01); Commission Regulation (EU) No 112/2013, Annex, HD100, HD110, HD160 (verified, direct; claim f2new-02); CSO Ireland (2025), SILC Module on Child Deprivation 2024, Table 6.1 (verified, direct, supporting only; claim f2new-03); Global MHH Monitoring Group (2022), Indicator 1 (verified, direct: enough menstrual materials; claim f2new-05). Clothing in general, not only new clothes: 42 U.S.C. 675(4)(A) (verified, partial: a duty to pay for a child's clothing and school supplies, decision G4; claim f2new-07); UN Convention on the Rights of the Child, Art. 27(3) (verified, partial: a right broader than the code, decision G3; claim f2new-09). School supplies: 42 U.S.C. 675(4)(A) and 42 U.S.C. 11433(d)(15) (verified, partial: statutory duties, decision G4; claims f2new-07, f2new-08). Outdoor sports gear is an instance of 'outdoor leisure equipment' and period products of 'menstrual materials' (decision G5). The code names no foster-care or homeless population (decision G1). Innocenti Report Card 10 (claim f2new-04) waits for an official copy (decision G8). CSSP Concrete Support does not name clothing (claim f2new-13) and is not cited. No FD (CP-12-33)."
          }
```

Element check (what the text names, and what supports it):

| Element in the text | Support | Fit | FD? |
|---|---|---|---|
| "having ... rather than going without them for lack of money" | Eurostat 2023 (affordability condition, verifier note) | direct | no |
| clothing | HD100 (new clothes: narrower); 675(4)(A) "clothing" (G4); CRC 27(3) (G3, broader) | direct for the item; partial for "not only new" | no |
| properly fitting shoes | HD110 "Two pairs of properly fitting shoes" | direct | no |
| outdoor leisure equipment; include "a bicycle or the outdoor gear they need to play" | HD160 "Outdoor leisure equipment"; Eurostat 2023 | direct; gear as instance (G5) | no |
| school supplies | 675(4)(A) "school supplies"; 11433(d)(15) "The provision of school supplies" | partial (G4) | no |
| enough menstrual materials; include "period products" | MHH Indicator 1 "having enough menstrual materials" | direct; products as instance (G5) | no |
| *not named:* general hygiene items (soap, deodorant), indoor sports equipment and uniforms in general, devices | no verified source frames the first two as a child outcome; devices stay A2.3 | — | would need an FD if named; routed instead (CF-037) |

Two wording choices keep it `framework`: "outdoor leisure equipment" in the definition (HD160's words,
not "sports equipment"), and no hygiene items in any field. Both are open questions 4 and 5.

### A2.3 Access to Resources (pointer only)

| Field | Before | After |
|---|---|---|
| exclude | `Participants' digital skills.` | `Participants' digital skills; young people stated to have the clothing, shoes, gear, school supplies or menstrual materials they need (not given or counted).` |
| useInstead | `Y1.4; F1.6.` | `Y1.4; F1.6; F2.4 when young people are stated to have the clothing, shoes, gear, school supplies or menstrual materials they need.` |

Definition, include, fidelity and basis unchanged. A2.3 never covered a young person's state of
having non-digital goods, so the pointer narrows nothing and moves no construct across a framework
(no FD; A2 stays 2 of 6).

### Neighbouring codes: no edit (smallest fit)

| Code | Edit? | Why |
|---|---|---|
| F2.2 Food Security | no | F2.4 excludes food and points to F2.2; food and clothing are not confused in gold. |
| F2.3 Housing Stability | no | Same: F2.4 points to F2.3. |
| Y8.1 Healthy Daily Habits | no | Y8 is over the S4.9 line (5 of 13); no Y8 change before its anchor re-review. F2.4's pointer to Y8.1 is not a Y8 change. Log for the Y8 re-review: whether Y8.1 should point back to F2.4 for "has the gear to be active". |
| Y2.6 Participation in Enriching Activities | no | Rule 2's "do not split off the means" already sends "with donated gear, youth will join a team" to Y2.6; F2.4's pointer covers the reverse. Revisit only if the gate shows Y2.6 pulling F2.4 rows. |
| Y1.13 Attendance & School Stability | no | Same reasoning; Y1.13 is adapted (FD-P22) and a pointer would not change that, but no gold row needs it. |

### Domain hints

Generated from `useInstead` and `categoryLine`: F2's hint gains category B's new name; A2.3's hint
gains the F2.4 line; F2.4 gets its own.

## Change: rulesText (`codebooks/youthOutcomesV3.ts`)

**Rule 1**, last sentence, before:

```
A young person's own housing, food or income is F2, with target population "students_youth".
```

After:

```
A young person's own housing, food, income, or clothing and supplies is F2, with target population "students_youth".
```

**Rule 2**, appended after "A specific student's school attendance -> Y1.13." (before: no text):

```
Goods given, received, distributed, counted or made accessible ("500 pairs of gloves handed out", "families can pick up free hats and scarves") -> A2.3; young people stated to have, or a number of children who will have, the clothing, shoes, gear, supplies or menstrual materials they need -> F2.4, and what the goods lead to (attendance, joining a team, confidence) takes its own code. Devices and internet stay A2.3 either way (rule 15).
```

Rule 15 is unchanged. The rule 2 sentence restates CF-037 (S3.2).

## Change: `CONFUSIONS.md` (lands with the code, not before)

The 3.x CF test in `codebooks/youthOutcomesV3.test.ts` requires every code on **Codes:** to be live
and to have at least one adjudicated design row. F2.4 has neither until this CP ships and Severin
settles the rows, so CF-037 is appended in the same commit as the code. Appended to "Codebook 3.x
tie-breakers" (before: no entry):

```markdown
### CF-037: Goods had, goods given, or what they lead to · active with F2.4 (CP-12-33)

**Codes:** **F2.4** · A2.3

**Rule:**

- Young people stated to have, or no longer go without, clothing, shoes, outdoor leisure equipment, school supplies or menstrual materials ("every student will have a coat that fits", "fewer students without supplies", "girls report having enough period products") → **F2.4**.
- The program giving, distributing or counting goods, or young people receiving them ("1,200 coats distributed", "students will receive a backpack of supplies") → **A2.3**.
- Devices and internet → **A2.3** whether given or had (rule 15; S240). Only non-digital goods split by had or given.
- What the goods lead to takes its own code; the goods are the means (rule 2): school attendance → Y1.13; joining or staying in a sport or activity → Y2.6; physical activity → Y8.1; taking part in class → Y1.9; confidence or self-worth → Y5.4; fitting in or not being singled out → Y3.1; less household spending → F2.1 (CF-034). When the statement names both having the goods and a further result, split (rule 2).
- Basic needs in general, material hardship in general, or general hygiene items (named in F2.4's exclude) → **Domain F2, subcategory none**, with `codebook_gap` = 1 in gold for hygiene items (decision G9).
- Warmth or physical comfort alone ("clothes that keep them warm") → **F2.4**; dignity, pride or self-worth → **Y5.4** (the goods are the means).
- A count of goods given out ("500 pairs of gloves handed out") or access to goods the program supplies ("access to free period products") → **A2.3**. A number of children who will have the goods ("put a warm coat on 1,200 kids") → **F2.4** (Severin, P-F24-26). Students coming to class with the supplies they need → **F2.4**, not Y1.9 (Severin, P-F24-28).

**Rationale:** F2.4's anchors measure a child's state: the EU-SILC child items (Eurostat 2023; Regulation (EU) No 112/2013, HD100, HD110, HD160) count children lacking clothes, shoes or outdoor leisure equipment, and Global MHH Indicator 1 counts girls having enough menstrual materials. A2.3's definition is provision ("Providing materials ... including counts of resources distributed"), and the output/outcome line is the codebook's own (rule 2; CF-009 in 2.x). Devices stay with A2.3's digital-equity sources (47 CFR 54 Subpart Q; ESSA 7119(a)(2); Digital Equity Act), which frame device access as access, and S240 is adjudicated there.

**Gold:** S196, S228, S240 (A2.3); <F2.4 rows Severin confirms from P-F24-04, -05, -06, -11, -12, -22, -23> (F2.4).
```

CF id 037 is provisional (CF-034 is CP-12-31's; CF-035 and CF-036 are CP-12-32's), renumbered at
merge if another CP takes it first.

## Change: `DEVIATIONS.md` (with the code)

No FD entry. Drift table, F2 row, before:

```
| F2 Basic needs | 3 | 0 | 1 (F2.2) | 33% | no (at the line) |
```

After:

```
| F2 Basic needs | 4 | 0 | 1 (F2.2) | 25% | no |
```

And in the paragraph under the table, "F2, A1 and A2 sit at the line" becomes "A1 and A2 sit at the
line" (if CP-12-32's A1 arm has landed, A1 is already over it; take the text current at merge).
If Severin overrules decision 2, 4 or 5 in a way that names an unsupported element, the row becomes
`2 (F2.2, F2.4) | 50% | **yes: anchor re-review required (S4.9)**`, and the re-review runs before
this CP lands.

## Change: registry (through the build scripts, never the JSON)

A new verification script, `codebook-refinement/v3/verification_2026_10_17_f24.py`, built like
`verification_2026_10_16_b3.py`, with its record file `v3/source-verification-2026-10-17-f24.json`
copied from `research-review/2026-10-16/full-review/verify-f24/verdicts.json`. `v3/hosts.py` gains
`ec.europa.eu`, `eur-lex.europa.eu`, `www.cso.ie`, `www.ohchr.org` and
`www.publichealth.columbia.edu` as `official` (the issuing body's or publisher's own site; the MHH
document's recommended citation names Columbia University, verifier note on f2new-05).
`build_registry.py` gains `'F2.4'` in its code-to-source map. Before: no entries. After:

| New id | cite_as | Tier | Supports | Fit | Excerpt (verifier's) | `codebook_names` |
|---|---|---|---|---|---|---|
| `eurostat-child-deprivation-2023` | Eurostat (2023, 24 April). 13% of EU children faced material deprivation. Eurostat News; child-specific material deprivation rate. | A (decision 2) | F2.4: child items new clothes, two pairs of shoes, outdoor leisure equipment; affordability condition | direct | f2new-01 | "Eurostat, EU-SILC child-specific material deprivation items"; "Eurostat EU-SILC child-specific deprivation items" |
| `eu-reg-112-2013-silc-child-items` | European Commission (2013). Commission Regulation (EU) No 112/2013 of 7 February 2013 implementing Regulation (EC) No 1177/2003, Annex, children's items HD100, HD110, HD160. | A (decision 2) | F2.4: HD100, HD110, HD160 | direct | f2new-02 | "Commission Regulation (EU) No 112/2013" |
| `cso-ireland-silc-child-deprivation-2024` | Central Statistics Office Ireland (2025). SILC Module on Child Deprivation 2024, Background Notes, Table 6.1. | A (decision 2) | F2.4: same items, supporting only | direct | f2new-03 | none (not on the Source line) |
| `global-mhh-indicators-2022` | Global MHH Monitoring Group (2022). Priority List of Indicators for Girls' Menstrual Health and Hygiene: Technical Guidance for National Monitoring. Columbia University. Indicator 1. | B | F2.4: enough menstrual materials | direct | f2new-05 | "Global MHH Monitoring Group (2022)" |
| `usc-42-675-4a-maintenance-payments` | Social Security Act sec. 475(4)(A), 42 U.S.C. 675(4)(A): foster care maintenance payments. | A | F2.4: clothing, school supplies (statutory duty, G4) | partial | f2new-07 | "Social Security Act, 42 U.S.C. 675(4)(A)" |
| `usc-42-11433-d15-school-supplies` | McKinney-Vento Homeless Assistance Act, 42 U.S.C. 11433(d)(15): authorized activities, provision of school supplies. | A | F2.4: school supplies (statutory duty, G4) | partial | f2new-08 | "McKinney-Vento Act, 42 U.S.C. 11433(d)(15)" |
| `un-crc-art27` | United Nations (1989). Convention on the Rights of the Child, Article 27(1) and 27(3). | A (decision 2) | F2.4: clothing as a child's material need (a right broader than the code, G3) | partial | f2new-09 | none (not on the Source line) |

Notes to carry: on `eurostat-child-deprivation-2023` and `eu-reg-112-2013-silc-child-items`, "HD100
counts new (not second-hand) clothes; F2.4 does not require new clothes, which rests on 675(4)(A)
and CRC 27(3) (CP-12-33)". On `usc-42-11433-d15-school-supplies`, "a provision duty; also a lead for
A2.3 'materials' (separate CP, A2 re-review)". On the existing `cssp-concrete-support`, a note only:
"Does not name clothing (claim f2new-13, PARTIAL, 2026-10-17); not cited for F2.4. The verifier's
corrected cite: Center for the Study of Social Policy (n.d.). Strengthening Families: Concrete
Support in Times of Need." (The entry's `cite_as` already carries no year, so it does not change.)

Not entered: f2new-04 (Innocenti Report Card 10; lead, V-F24-1); f2new-06, -10, -11, -12 (routing
only, below; they support no code's text). Attendance Works is already a Y1.13 source.

## Downstream results donors claim, and where they go

Routing only: the sources show that donors' link claims are real, not that the downstream code
changes. None enters the registry for this CP.

| Claimed result | Code | Verified source showing the link (routing only) |
|---|---|---|
| Better school attendance, fewer missed days | Y1.13 | Illinois 105 ILCS 5/34-18.56(a)(3), General Assembly finding: "When students do not have access to affordable menstrual hygiene products, they may miss multiple days of school every month." (f2new-10; host `witnessslips.ilga.gov` not yet classified under G8). Attendance Works, Strategies for School Sites: "family needs such as food or clothing" as a root cause of absence (f2new-12). |
| Joining or staying in a sport | Y2.6 | HHS (2019), National Youth Sports Strategy, Barriers to Sustained Participation: Cost: "The cost of equipment ... create additional financial strain." (f2new-11) |
| Physical activity | Y8.1 | none verified; codebook logic (rule 2) |
| Taking part in class (during menstruation) | Y1.9 | Global MHH Monitoring Group (2022), Indicator 19: "% of girls whose class participation was not impacted by their last menstrual period." (f2new-06; not checked against Y1.9's definition) |
| Confidence, self-esteem, self-worth | Y5.4 | none verified; codebook logic |
| Belonging, fitting in, not being singled out | Y3.1 | none verified; codebook logic |
| Household cost relief | F2.1 | none verified; CF-034 (money status) |
| "Ready to learn" with supplies, no learning result | F2.4 | Y1.8 is only for children below kindergarten age |

## Devices: the asymmetry, and the recommendation

Under CF-037, "every student will have a coat that fits" goes to F2.4 while "every family will have
a working laptop and home internet" stays A2.3 (S240, adjudicated; rule 15; CF-024 in 2.x).
**Recommendation: devices stay in A2.3**, and the asymmetry is logged for the A2 anchor re-review:

1. S240 is adjudicated A2.3; moving devices flips it and needs Severin's ruling.
2. A2.3's verified sources are digital-equity statutes that frame a household's device and
   connectivity access as the outcome; F2.4's verified items name no device.
3. Moving devices into F2.4 would add an element with no F2.4 source: an FD, F2 2 of 4, over the
   line.

Logged for the A2 re-review (not this CP): A2.3's "materials" (non-digital goods) has no A2.3 source,
the same position as "facilities" (decision A2-4). 42 U.S.C. 11433(d)(15) ("The provision of school
supplies", f2new-08, verified) is a lead to ground it in a separate CITATION_FIX CP.

## What lands when

| Change | Reaches the coding prompt? | When |
|---|---|---|
| `verify-f24/verdicts.json` and `verify-f24/verification-table.md` | no | now (research record) |
| `proposed-design-rows-f24.csv` (29 rows, `status=proposed`) | no | now, for Severin |
| F2.4 code; F2 `description`, `frameworkBasis`, `categoryLine`, category B name | yes | after the shared gate after PRs #62 and #66 (G10), after Severin's answers and his rulings on the rows (G11), then this CP's own two-run gate |
| A2.3 exclude and useInstead; rule 1 and rule 2 text | yes | same commit as F2.4 |
| Category B `description` | no (display) | same commit as F2.4 (it names F2.4's goods) |
| CF-037 in `CONFUSIONS.md` | no | same commit as F2.4 (the CF test needs F2.4 live and adjudicated F2.4 rows) |
| `DEVIATIONS.md` F2 drift row | no | same commit as F2.4 |
| Registry entries, hosts, verification script | no | same commit as F2.4 (the registry test checks that supported codes exist) |
| Test count 98 → 99 codes; CLAUDE.md, `youthOutcomesV3.ts` header comment and `docs/codebook/change-log.md` code counts | no | same commit; version bump at merge |

Nothing in this CP lands in the codebook now.

**Shared rows (whichever lands first applies them; the other drops the rows).** The DOMAIN ONLY
bullet that sends excluded specific results to the domain is CP-12-19's (also carried by CP-12-32);
this CP relies on it and does not carry it. F2's `frameworkBasis` "secondary:" clause is CP-12-29's;
this CP inserts into whichever text is current. The `codebook_gap` flag is decision G9's app change
(no owner yet, as CP-12-19 notes); until it exists, the hygiene-item rows carry the suggestion in
their "why" text.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| eurostat-child-deprivation-2023 (new) | verified once added (f2new-01 SUPPORTED) | "The child-specific deprivation rate is the percentage of children below 16 ... Child: Some new clothes ... Child: Two pairs of shoes ... Child: Outdoor leisure equipment" |
| eu-reg-112-2013-silc-child-items (new) | verified once added (f2new-02 SUPPORTED) | "HD100 Some new (not second-hand) clothes ... HD110 Two pairs of properly fitting shoes (including a pair of all-weather shoes) ... HD160 Outdoor leisure equipment ..." |
| cso-ireland-silc-child-deprivation-2024 (new) | verified once added (f2new-03 SUPPORTED) | "A child is considered as deprived if they suffer from an enforced lack of at least three items out of the 17 items." (supporting only) |
| global-mhh-indicators-2022 (new) | verified once added (f2new-05 SUPPORTED) | "% of girls who reported having enough menstrual materials during their last menstrual period." |
| usc-42-675-4a-maintenance-payments (new) | verified once added (f2new-07 SUPPORTED; partial fit, G4) | "payments to cover the cost of (and the cost of providing) food, clothing, shelter, daily supervision, school supplies, a child's personal incidentals" |
| usc-42-11433-d15-school-supplies (new) | verified once added (f2new-08 SUPPORTED; partial fit, G4) | "The provision of school supplies, including those supplies to be distributed at shelters or temporary housing facilities" |
| un-crc-art27 (new) | verified once added (f2new-09 SUPPORTED; partial fit, G3) | "shall in case of need provide material assistance and support programmes, particularly with regard to nutrition, clothing and housing." |
| 47 CFR 54 Subpart Q; essa-4109-tech-capacity; digital-equity-act (existing, A2.3) | verified | device and connectivity access (CF-037 rationale for devices) |

Leads, not cited: Innocenti Report Card 10 (f2new-04, PARTIAL: test-server copy only). Not support
for F2.4: CSSP Concrete Support (f2new-13, PARTIAL: no clothing).

All excerpts are the independent verifier's (one fetch each, 40 words or fewer); the full table is
`codebook-refinement/research-review/2026-10-16/full-review/verify-f24/verification-table.md`.

## Verification requests

- **V-F24-1.** Claim: Adamson, P. (2012). Measuring Child Poverty: New league tables of child
  poverty in the world's rich countries. Innocenti Report Card 10. UNICEF Innocenti Research
  Centre. Child Deprivation Index items 5 ("Outdoor leisure equipment (bicycle, roller-skates,
  etc.)"), 11 and 12. Find an official UNICEF Innocenti or UN Digital Library copy (record
  4031924 failed to load) and record a bibliographic match (G8). If it matches, it can be added as
  supporting (direct) and settles that a bicycle is outdoor leisure equipment.
- **V-F24-2.** Claim: Eurostat's EU-SILC methodological guidelines describe the child item
  "outdoor leisure equipment" (HD160) with examples. Find the guidelines on Eurostat's own site and
  quote the item's description. This tells decision 4 whether sports gear is inside HD160 (G5).

## Gate

Its own two-run design-set gate, after the shared gate after PRs #62 and #66 and after Severin's
rulings.

- Rows that must not move: S196, S228, S240, H076 (A2.3); S106, S139, H027, S006, H067 (F2.1);
  S062, S210, H070 (F2.2); S198, S029, S035, S037, S200, S225 (F2.3); S233 (Y1.13); S003 (Y2.6);
  H013 (Y8.1); S235 (Y1.9); S158 (Y5.4); S163 (Y3.1); G-D01 to G-D10 (domain-only).
- Rows expected to move: none of the adjudicated rows. The 29 proposed rows, once adjudicated,
  should land as Severin rules; the gate reports them separately (they become design rows, never
  held-out).

## Gold impact

- Rows expected to change code: none.
- New proposed rows: P-F24-01 to P-F24-29 in
  `codebook-refinement/research-review/2026-10-16/full-review/proposed-design-rows-f24.csv`
  (`status=proposed`; same columns as `proposed-design-rows.csv`; all invented, because the real-run
  exports are not in this checkout). Per boundary:

  | Boundary | Sides (rows) |
  |---|---|
  | F2.4 or A2.3 | A2.3: P-F24-01, -02, -03, -26, -27, and the device check -07; F2.4: -04, -05, -06 |
  | F2.4 or F2 domain-only | F2 domain-only: -08, -09, -10 (hygiene items, suggest `codebook_gap` = 1); F2.4: -11, -12 |
  | F2.4 or the downstream result | Y1.13: -13, -14; Y2.6: -15, -16; Y8.1: -17; Y1.9: -18, -28; Y5.4: -19, -25; Y3.1: -20; F2.1: -21, -29; F2.4: -22, -23; split F2.4 and Y1.13: -24 |

  Severin settles them before the code ships (G11). All 29 are invented, so none can repeat a
  held-out statement. No agent adds them to gold or marks them adjudicated.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read.

## Expert panel (2026-10-17)

Severin asked for "a team of coding agents to review and code the 25 statements". Three blind
coders coded the rows from the 3.1.5 prompt with this CP's prompt changes; four experts
(methodologist, youth development, frameworks, skeptic) then reviewed each row. Files:
`research-review/2026-10-16/full-review/panel-f24/`.

- Blind coders agreed on all 25 rows and matched the intended side on 23.
- All four experts kept 24 intended sides and moved P-F24-25 ("feel dignity") to Y5.4: the feeling
  is the result and the clothes are the means (rule 2). CF-037's dignity line is rewritten above.
- P-F24-10 (soap, deodorant, toothpaste): the experts kept F2 domain-only, but the prompt could not
  produce it: the hygiene rule was only in CF-037. F2.4's exclude and useInstead now name it, and the
  row also needs CP-12-19's DOMAIN ONLY bullet (a specific result an Exclude line sends to the
  domain). This CP lands after CP-12-19, or carries that bullet.
- The prompt leaked answers: rule 2's examples nearly repeated P-F24-01 and -02, and F2.4's include
  paraphrased -04, -05, -06 and -22. Both are reworded above. The skeptic's four harder rows are
  added as P-F24-26 to -29.
- Edits made from the panel: F2.4 definition (cause need not be stated), include, exclude and
  useInstead; A2.3 pointer lists the full set of goods; rule 2 examples; CF-037 dignity, count and
  access lines.
- Retest with the revised wording (and CP-12-19's DOMAIN ONLY bullet): three fresh blind coders
  coded 10 rows (P-F24-01, -02, -04, -10, -22, -25, -26 to -29) and matched the panel's side on all
  30 codings (`panel-f24/retest/`). Rows invented and seen by the panel are design evidence only.
- Logged, not changed here: Y2.6 should point class participation to Y1.9 (Y2 edits wait for its
  own CP); team-sport gear rests on reading it as "outdoor leisure equipment" (V-F24-2), so rows like
  P-F24-22 are medium confidence; hygiene kits are a common donor item, so expect many F2
  domain-only rows with the gap flag.

## Severin's decisions on the example statements (2026-10-17)

Severin ruled on the 11 flagged statements on the review page
(https://claude.ai/artifact/UtpiYrSBsnyYioHhi9jtc5); the other 18 wait for his confirmation.

- Agreed with the panel on 8: P-F24-08, -09 (F2 domain only), -18 (Y1.9), -21, -29 (F2.1), -22
  (F2.4), -25 (Y5.4), -27 (A2.3).
- P-F24-26 "Our coat drive will put a warm coat on 1,200 kids this winter": **F2.4** (panel: A2.3).
  A number of children who will have the goods is F2.4; only counts of goods given out stay A2.3.
  F2.4 include and CF-037 updated.
- P-F24-28 "Students will come to class every day with their notebook, pencils and calculator":
  **F2.4** (panel: Y1.9). Coming to class with supplies is having them. F2.4 exclude, useInstead and
  CF-037 updated.
- P-F24-10 "Students will have the soap, deodorant and toothpaste they need each week": **F2.4**
  (panel: F2 domain only). This puts general hygiene items inside F2.4. No verified source names
  them yet, so a search for one is running. If one is verified, F2.4 names hygiene items and stays
  framework. If none is, hygiene items are a codebook-defined element of F2.4 with a counted
  deviation; F2 goes to 2 of 4 (over the S4.9 line) and its anchor frameworks are re-reviewed
  before the code ships. F2.4's text, the hygiene line in CF-037 and decision 5 above change once
  the search is settled.

## Decisions

Severin asked for this code on 2026-10-17 ("I want to account for outcomes related to donations of
clothes and supplies"), which settles whether to add it. He has deferred edge-case and source
calls to Claude (2026-10-08), so the drafter's other questions are settled on the recommended
option and listed here so he can overrule any of them:

1. Add one new code, Material Necessities (F2.4), as drafted.
2. Eurostat and Commission Regulation (EU) No 112/2013 are accepted as top-tier sources (official
   statistics and a regulation); the U.S. laws are partial support. No U.S. federal survey item for
   a child's clothing or shoes was found.
3. Devices stay with Access to Resources (A2.3), as in S240; the mismatch with "having a coat" is
   logged for the Access domain's re-review.
4. The code keeps the source's "outdoor leisure equipment" wording; uniforms and indoor-sport gear
   still go to F2.4 at medium confidence.
5. General hygiene items (soap, deodorant, toothpaste) go to Basic Needs domain-only with the
   codebook-gap flag.
6. The code says "clothing", not "new clothing", resting on the foster-care payment law and the UN
   children's-rights treaty, so donated second-hand clothes count.
7. School supplies stay in the code on the two U.S. laws (decision G4, partial support).

## Open for Severin

Will you rule on the 29 example statements in `proposed-design-rows-f24.csv` (which code each
should get) before the code ships? **Yes (recommended; required by decision G11)** · No; ship the
code as a non-scoring preview only.

## Judge result

Filled in by `codebook-regression-judge` after its gate.
