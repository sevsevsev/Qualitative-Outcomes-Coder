# CP-12-09: F2 citations (NYTD and CFPB for F2.1, nutrition security and NWS-01 for F2.2, RHY and SDOH-04 for F2.3)

**In plain words.** The three basic-needs codes get checked sources for the parts that had none: Income, Benefits and Financial Stability (F2.1) gains the federal survey of young people leaving foster care and the Consumer Financial Protection Bureau's financial well-being measure, Food Security (F2.2) gains the Healthy People 2030 food-insecurity objective, and Housing Stability and Safe Living Situation (F2.3) gains the federal runaway and homeless youth rule and the Healthy People 2030 rent-burden objective. Under your rule on who a source covers, young people living on their own need no deviation, because these sources cover them. One gap may remain: "access to healthy food" in Food Security (F2.2) rests on a Department of Agriculture nutrition-security document whose title still has to be confirmed; if it cannot be, one deviation is logged and the domain sits exactly at the one-third limit, which is allowed. None of this is shown to the coding model, so it can land now without a test run.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry and `basis`: F2.1, F2.2, F2.3. Shared entries gain F2 rows only: `acf-nytd` (also Y8.5) and `hp2030-ah01-ahs01` (also Y8.5). **`mckinney-vento` and `cssp-concrete-support` are not changed.** `fidelity` and `deviation`: F2.2 only if V8 fails. No definition, include, exclude, useInstead, example, source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today; one PATCH later for each of PR #62 or PR #66 that lands first) |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: NYTD and AHS-01 F2.1 rows; new CFPB financial well-being, NWS-01, RHY 45 CFR 1351, SDOH-04 and HEARTH 11386a (after V11) entries; `basis` F2.1, F2.2, F2.3; V8 not supported, so no USDA nutrition-security row and F2.2 adapted (FD-P35); F2 drift row (1/3, at the line). Waits for the gate: F2 `frameworkBasis` names (CP-12-29). |
| Reaches the coding prompt? | **No.** Registry and `basis` only (plus, if V8 fails, F2.2's `fidelity` and one DEVIATIONS entry). No scoring run; `npm test` is the gate. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none.** F2.1 "independent-youth" is covered by NYTD (foster youth, "financial self-sufficiency") and CFPB Financial Well-Being (individual-level), and F2.3 "a young person living independently" by the RHY rule (45 CFR 1351) (decision G1). F2.1 "Medicaid" rests on AHS-01, a partial fit whose source is broader than the element (decisions G3, G5). **Verification-gated FD-P35 (provisional id)**, F2.2, codebook-defined element ("access to healthy food"), counted, opened only if V8 fails. That would put F2 at 1/3, at S4.9's line but not over it (decision G7). F2 drift stays 0/3. |

## Decisions applied (2026-10-16)

| Decision | Effect on this CP |
|---|---|
| G1 | F2.1 names "independent-youth" income and F2.3 "a young person living independently". NYTD, CFPB and the RHY rule cover those populations, so no FD. |
| G3, G5 | AHS-01 measures "any type of public or private health insurance"; Medicaid enrollment is a named instance of that broader category, and the registry quotes it. The partial fit avoids an FD. |
| G4 | The HEARTH Continuum of Care criteria (42 U.S.C. 11386a) are a statutory duty and count as partial-fit support with no FD. F2.3's elements are covered directly by the RHY rule and SDOH-04 in any case. |
| G7 | S4.9 applies to F2 as written, with no STANDARDS change. One counted entry puts F2 at the line; a second would cross it and trigger an anchor re-review. This domain therefore closes gaps by citation. |
| G8 | acf.gov, files.consumerfinance.gov, odphp.health.gov, usda.gov and ecfr.gov (the Office of the Federal Register's own site) are publishers' hosts. 42 U.S.C. 11386a was read on law.cornell.edu, a secondary host: the HEARTH row lands when V11 records the official-copy match. |
| G10 | Everything here is no-prompt and lands now, except the two rows that wait for V8 and V11. |
| G2 | CFPB, RHY, Healthy People 2030 and USDA nutrition security are named in F2's `frameworkBasis` by CP-12-29 (gated), not here. |
| F1-1 | H027 is confirmed: a household's financial state, savings and confidence go to F2.1 (tie-breaker: CP-12-31). The CFPB note below follows it. |
| G13 | Prevention of youth entry into the child welfare system goes to F1 domain-only, not F2.3. Nothing changes here. |

## Problem

Batch 3 recommendations, "Act now", B3-CP3, items 21 to 24.

1. **F2.1** names "independent-youth income" and "financial stability". Ascend Economic Assets is
   family-framed, and CSSP Concrete Support is crisis support. The CP-10-01 verifier found "no text
   in the document about income or benefits".
2. **F2.1 "Medicaid enrollment"** (S139) has no component.
3. **F2.2 "access to healthy food"** (S062) is not measured by the HFSSM ("measures having enough
   food, not access to healthy food specifically", CP-10-01).
4. **F2.3** youth exits to safe housing (S225, H049, S200) and reduced rent burden (H074) have no
   direct component. NYTD "experience with homelessness" and the McKinney-Vento definition are
   both partial.

F2 has three codes, so one counted FD already reaches one third (R-10). That is why this domain
closes gaps by citation (decision G7).

## What lands when

| Part | Reaches the prompt? | When |
|---|---|---|
| `acf-nytd` and `hp2030-ah01-ahs01` F2.1 rows; `cfpb-financial-well-being-2015`, `hp2030-nws01`, `rhy-45cfr1351`, `hp2030-sdoh04` | no | now |
| `basis` for F2.1 and F2.3 (without the HEARTH sentence) and F2.2 (without the nutrition-security sentence) | no | now |
| `usda-fncs-nutrition-security-2022` row and its F2.2 `basis` sentence | no | when V8 returns SUPPORTED, with the printed title |
| FD-P35, F2.2 `fidelity`/`deviation`, F2 drift row | no | only if V8 fails |
| `hearth-42usc11386a` row and its F2.3 `basis` sentence | no | when V11 records the official-copy match (G8) |
| CFPB, RHY, Healthy People 2030, USDA nutrition security and McKinney-Vento/HEARTH named in F2's `frameworkBasis` | yes | CP-12-29 (G2), in the one gate after PRs #62 and #66. Not part of this CP. |

## Change

### Registry (`codebook-refinement/v3/verification_2026_10_16_b3.py`, F2 section)

The record gains f2-01, f2-02, f2-03, f2-05, f2-06, f2-07 and f2-09 now, f2-04 with V8 and f2-08
with V11. `source_kind` is primary for every host above except law.cornell.edu (G8; see V11).
**The coordinator records these values.**

```python
# --- CP-12-09 (F2) ---------------------------------------------------------

EXTRA_SUPPORTS += [
    ('acf-nytd', 'F2.1', 'NYTD outcome: financial self-sufficiency (youth surveyed around ages 17, 19 and 21)', 'f2-01'),
    ('hp2030-ah01-ahs01', 'F2.1', 'AHS-01: persons under 65 with public or private health insurance (a coverage measure; Medicaid is one qualifying type, G5)', 'f2-03'),  # PARTIAL
]

NEW += [
    {'id': 'cfpb-financial-well-being-2015',
     'cite_as': 'Consumer Financial Protection Bureau (2015, December). Measuring financial well-being: A guide to using the CFPB Financial Well-Being Scale.',
     'tier': 'A', 'publisher': 'Consumer Financial Protection Bureau', 'year': 2015, 'codebook_names': [],
     'supports': [('F2.1', 'Section 2.1, what financial well-being is: meeting current and ongoing obligations, control over finances, a financial cushion', 'f2-02')]},
    {'id': 'hp2030-nws01',
     'cite_as': 'Healthy People 2030, objective NWS-01: Reduce household food insecurity and hunger. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None, 'codebook_names': [],
     'supports': [('F2.2', 'household food insecurity and hunger', 'f2-05')]},
    {'id': 'rhy-45cfr1351',
     'cite_as': "Runaway and Homeless Youth Program, 45 CFR Part 1351 (U.S. Department of Health and Human Services, Administration for Children and Families): 1351.30(a)(1) and 1351.31(a)(1) core outcome areas; 1351.1 'safe and appropriate exits', 1351.30(d), 1351.31(e).",
     'tier': 'A', 'publisher': 'U.S. DHHS, Administration for Children and Families', 'year': None, 'codebook_names': [],
     'supports': [
        ('F2.3', "core outcome area '(iv) Stable Housing' for Basic Center and Transitional Living youth", 'f2-06'),
        ('F2.3', 'safe and appropriate exits (to a parent, relative or other adult, or to independent living; not to the street or an unknown situation)', 'f2-07')]},
    {'id': 'hp2030-sdoh04',
     'cite_as': 'Healthy People 2030, objective SDOH-04: Reduce the proportion of families that spend more than 30 percent of income on housing. U.S. DHHS, ODPHP.',
     'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None, 'codebook_names': [],
     'supports': [('F2.3', 'housing cost burden over 30 percent of income', 'f2-09')]},
]

# Applied when V8 returns SUPPORTED: cite_as takes the printed title; fit 'direct' unless the verifier's reading says otherwise.
NEW_AFTER_V8 = [
    {'id': 'usda-fncs-nutrition-security-2022',
     'cite_as': 'U.S. Department of Agriculture, Food, Nutrition, and Consumer Services Mission Area (2022, March). <printed title from V8>.',
     'tier': 'A', 'publisher': 'U.S. Department of Agriculture, Food, Nutrition, and Consumer Services Mission Area', 'year': 2022, 'codebook_names': [],
     'supports': [('F2.2', "definition of nutrition security: consistent access, availability and affordability of foods that promote well-being", 'f2-04')]},
]

# Applied when V11 records the official-copy match (G8). url = the official U.S. Code copy V11 returns.
NEW_AFTER_V11 = [
    {'id': 'hearth-42usc11386a',
     'cite_as': 'McKinney-Vento Homeless Assistance Act, as amended by the HEARTH Act, 42 U.S.C. 11386a(b)(1)(A)(i), (ii) and (vi): Continuum of Care selection criteria.',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None, 'codebook_names': [],
     'supports': [('F2.3', 'length of homelessness, returns to homelessness, and new homelessness (criteria for judging a recipient\'s performance; statutory duty, partial-fit support, G4)', 'f2-08')]},  # PARTIAL
]

NOTES.update({
    'cfpb-financial-well-being-2015': ("Separate from cfpb-building-blocks-2016 (Y7.6). A household's or adult's financial state goes to F2.1; a young person's own financial "
                                       "knowledge, habits or decisions go to Y7.6 (rulesText rule 11; CF-001 in 2.x terms). A caregiver learning a financial skill goes to F1.6 "
                                       "(decision F1-1; CP-12-31). Its names must not collide with Y7.6's. The scale's adult age range is an unverified lead (V9)."),
    'usda-fncs-nutrition-security-2022': ("The PDF reads 'afordability' (an 'ff' ligature lost in extraction). The fetched text names the 'USDA Food, Nutrition, and Consumer "
                                          "Services Mission Area' and is dated March 2022; the title comes from V8 (f2-04 found it only in the URL)."),
    'hearth-42usc11386a': ('These are performance criteria for Continuum of Care recipients, not household outcome definitions (f2-08), hence partial; a statutory duty counts '
                           'as partial-fit support with no FD (G4). Read on law.cornell.edu; official-copy match recorded by V11 (G8).'),
    'rhy-45cfr1351': "f2-07's component paraphrase leaves out the 'another residential program' examples in 1351.1.",
})
```

Each support from f2-03 gets a `verifier_note` that starts with "Read at
https://odphp.health.gov/…/ahs-01/data-methodology", because the entry's `url` is the AH-01
page.

Result: **+6 sources, +9 supports** (one source and one support each arrive with V8 and V11).
`codebook_extensions` unchanged.

**Left alone on purpose.**
- `cssp-concrete-support → F2.1` stays partial ("Keep CSSP as partial", fidelity and
  devil's-advocate reviewers). Demoting it would force a `frameworkBasis` edit for no coding gain.
- `mckinney-vento → F2.3` is left alone. The entry is shared with Y1.13, which PR #66 re-pins
  (R-08; later item 11, after PR #66).
- f2-10 (11434a(2)) is not added for the same reason.

### G3 check (every PARTIAL row this CP relies on)

| Code, element | Partial row | Source broader than the code? | Result |
|---|---|---|---|
| F2.1 Medicaid enrollment | AHS-01 (f2-03) | yes (any public or private coverage; Medicaid is a named instance) | no FD (G3, G5) |
| F2.1 financial stability | CSSP Concrete Support (unchanged) | not needed: NYTD and CFPB are direct | no FD |
| F2.2 access to healthy food | USDA nutrition security (f2-04) | the definition is at least as broad as the element; the PARTIAL rating is bibliographic (title) | V8 decides; FD-P35 if it fails |
| F2.3 returns to homelessness | HEARTH 11386a (f2-08) | statutory duty (G4); RHY and SDOH-04 are direct | no FD |

### `codebooks/youthOutcomesV3.data.ts`: `basis` (data only)

| Code | Before | After |
|---|---|---|
| F2.1 | Ascend 2Gen Economic Assets (verified); CSSP Concrete Support (verified). | Ascend 2Gen Economic Assets (verified, direct); CSSP Concrete Support (verified, partial: crisis support, not income). CP-12-09: ACF NYTD, financial self-sufficiency (verified, direct; independent youth; claim f2-01); CFPB (2015) Financial Well-Being, section 2.1 (verified, direct; claim f2-02); Healthy People 2030 AHS-01 (verified, partial: any coverage, of which Medicaid is one; claim f2-03). Independent youth need no FD (decision G1). |
| F2.2 | USDA ERS Household Food Security Survey Module (verified). | USDA ERS Household Food Security Survey Module (verified, direct: enough food). CP-12-09: Healthy People 2030 NWS-01 (verified, direct; claim f2-05). *(With V8:)* Access to healthy food: USDA FNCS Mission Area (March 2022), *<printed title>*, definition of nutrition security (verified; claim f2-04). |
| F2.3 | McKinney-Vento (located); ACF NYTD (verified). | RHY Program rule, 45 CFR 1351.30(a)(1) and 1351.31(a)(1) Stable Housing, and 1351.1 safe and appropriate exits (verified, direct; claims f2-06, f2-07, CP-12-09); Healthy People 2030 SDOH-04 rent burden (verified, direct; claim f2-09); ACF NYTD, experience with homelessness (verified, partial); McKinney-Vento, 42 U.S.C. 11434a definition (verified, partial). *(With V11:)* McKinney-Vento as amended by HEARTH, 42 U.S.C. 11386a(b)(1)(A) (verified, partial: performance criteria; claim f2-08). Young people living independently are covered by the RHY rule (decision G1). |

The F2.3 `basis` edit changes text in F2.3's data field only. It does not touch the
`mckinney-vento` entry's URL, pinpoint or Y1.13 support (R-08).

### `DEVIATIONS.md`

No entry now. Append one bullet to the "Batch 3 review" section:

```markdown
- **F2 (CP-12-09).** No entry. F2.1 independent youth (NYTD, CFPB Financial Well-Being), F2.2 household food insecurity (Healthy People 2030 NWS-01) and F2.3 youth exits and rent burden (RHY 45 CFR 1351, SDOH-04) are now cited; the population rule needs no entry for them (decision G1). F2.1 "Medicaid" rests on AHS-01, a broader category (decisions G3, G5). F2.2 "access to healthy food" (S062) rests on USDA's 2022 nutrition-security definition once request V8 confirms its title; if V8 fails, FD-P35 opens and F2 is at 1/3, at the S4.9 line (decision G7).
```

Drift table: F2 row unchanged (0/3).

**Opened only if V8 fails** (the document is not USDA's, is withdrawn, or cannot be retrieved). The
follow-up PATCH then drops the nutrition-security row, sets F2.2 `fidelity: "adapted"` and
`deviation: "FD-P35"`, sets the F2 drift row to `1 (F2.2) | 33% | no (at the line)`, and adds:

```markdown
### FD-P35 · F2.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** USDA ERS, U.S. Household Food Security Survey Module (verified): "Food security for a household means access by all members at all times to enough food for an active, healthy life."; Healthy People 2030 NWS-01 (verified).
- **Departs:** "access to healthy food" in F2.2's definition goes past "enough food"; no verified source frames healthy-food access as a household outcome.
- **Evidence:** S062 ("Families will report reduced food insecurity and increased access to healthy food." → F2.2), adjudicated design row.
- **Alternative considered:** narrowing F2.2 to "enough food" (rejected by all four reviewers; would flip S062's healthy-food half).
- **Decided in:** CP-12-09 (batch 3 research review, 2026-10-16).
- **Revisit:** when a verified nutrition-security source is found.
```

### `frameworkBasis`, source lines, `rulesText`, hints, `CONFUSIONS.md`

Unchanged. CFPB, RHY, Healthy People 2030 and nutrition security in F2's `frameworkBasis` are
CP-12-29 (decision G2, gated). The insurance hint (F2.1 vs Y8.5) is CP-12-15. The F1.6/F2.1
tie-breaker is CP-12-31.

## Handed to other CPs or later items (not applied here)

| Item | Owner |
|---|---|
| The McKinney-Vento F2.3 row (drop it, or add 11434a(2)) | later item 11, after PR #66 |
| Bare "stability": household stability → F2 domain-only, with a `codebook_gap` flag where a specific result has no code (decision G9) | a later CP; G11's two proposed rows per side come first |
| SNAP-Ed and USDA 2022 status watch; HP2030 court-order banner | CP-12-24 |
| Adult volunteering (decision G15: A1.1, A1.3 or A1 domain-only) | CP-12-10 and later CPs |
| Splitting multi-outcome texts ("on-site medical, dental, and behavioral services") | later item 13 (splitter) |

## Sources

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| acf-nytd | verified | financial self-sufficiency (F2.1) | f2-01 "States will survey youth regarding six outcomes: financial self-sufficiency, experience with homelessness," |
| cfpb-financial-well-being-2015 (new) | verified | section 2.1 | f2-02 "Having a financial "cushion" against unexpected expenses and emergencies." |
| hp2030-ah01-ahs01 | verified (F2.1 fit partial) | AHS-01 | f2-03 PARTIAL "Number of persons under 65 years who report coverage by any type of public or private health insurance." |
| usda-fncs-nutrition-security-2022 (new, after V8) | verified (title pending V8) | nutrition security definition | f2-04 PARTIAL "consistent access, availability, and afordability of foods and beverages that promote well-being, prevent disease" |
| hp2030-nws01 (new) | verified | NWS-01 | f2-05 "Reduce household food insecurity and in doing so reduce hunger." |
| rhy-45cfr1351 (new) | verified | Stable Housing; safe exits | f2-06 "(iii) Education or Employment; and (iv) Stable Housing."; f2-07 "To the private residence of a parent, guardian, another adult relative, or another adult" |
| hp2030-sdoh04 (new) | verified | SDOH-04 | f2-09 "Reduce the proportion of families that spend more than 30 percent of income on housing" |
| hearth-42usc11386a (new, after V11) | verified (fit partial) | CoC criteria | f2-08 PARTIAL "the extent to which individuals and families who leave homelessness experience additional spells of homelessness;" |

Verified but not used: f2-10 (11434a(2); later item 11, after PR #66) and f2-11 (AmeriCorps CEV;
rejected).

## Verification requests

```
V8  claim_id: f2-04b · code: F2.2 · cite_as: U.S. Department of Agriculture, Food, Nutrition, and Consumer Services Mission Area (2022, March). USDA Actions on Nutrition Security. · claimed_component: The document's title, issuing office and date as printed on the document (cover, header or first page), and whether USDA still hosts it or marks it archived or withdrawn. · url: https://www.usda.gov/sites/default/files/documents/usda-actions-nutrition-security.pdf
V9  claim_id: f2-02b · code: F2.1 · cite_as: Consumer Financial Protection Bureau (2015). Measuring financial well-being: A guide to using the CFPB Financial Well-Being Scale. · claimed_component: The age range of the population the scale was developed and normed for (e.g. adults 18 and older). · url: https://files.consumerfinance.gov/f/201512_cfpb_financial-well-being-user-guide-scale.pdf
V11 claim_id: f2-08b · code: F2.3 · cite_as: McKinney-Vento Homeless Assistance Act, as amended by the HEARTH Act, 42 U.S.C. 11386a(b)(1)(A). · claimed_component: The official U.S. Code text of 42 U.S.C. 11386a(b)(1)(A)(i), (ii) and (vi), matching the law.cornell.edu text read for claim f2-08. Report the official URL and whether the wording matches. · url: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title42-section11386a
```

**V8 gates the F2.2 nutrition-security row.** SUPPORTED: `cite_as` takes the printed title, fit
`direct`, unless the verifier's reading of the content says partial. Not USDA's, withdrawn or not
retrievable: the row is not added and FD-P35 opens (above). V9 does not block anything; it
strengthens the G1 reading for independent young adults. V11 gates the HEARTH row only (G8). The
V11 URL is a lead; the verifier locates the official page if it is wrong.

## Gold impact

- Rows expected to change code: **none**.
- Design rows the edits rest on: S106, S139, S006, H027 (F2.1); S062, S210, H070 (F2.2); S198,
  S200, S225, H049, H074 (F2.3); S191 (Y8.5 on the shared `hp2030-ah01-ahs01` and `acf-nytd`
  entries; its supports are not changed).
- No gold row has to be adjudicated before this CP lands (no hint or widening).
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run (no prompt change). `npm test` and `npm run typecheck:server`.
