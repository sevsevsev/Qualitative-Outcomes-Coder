# CP-12-09: F2 citations (NYTD and CFPB for F2.1, nutrition security and NWS-01 for F2.2, RHY and SDOH-04 for F2.3)

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry and `basis`: F2.1, F2.2, F2.3. Shared entries gain F2 rows only: `acf-nytd` (also Y8.5) and `hp2030-ah01-ahs01` (also Y8.5). **`mckinney-vento` and `cssp-concrete-support` are not changed.** No definition, include, exclude, useInstead, example, source line, `frameworkBasis`, `fidelity` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today; 3.2.x if PR #62 merges first) |
| Requirement served | R1 frameworks |
| Status | draft (batch 3 research review, 2026-10-16); not applied |
| Reaches the coding prompt? | **No.** Registry and `basis` only. No scoring run; `npm test` is the gate. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none.** Under decision C, F2.1 "independent-youth" is covered by NYTD (foster youth, "financial self-sufficiency") and CFPB Financial Well-Being (individual-level). F2.3 "a young person living independently" is covered by the RHY rule (45 CFR 1351). F2.1 "Medicaid" is kept as a partial fit (AHS-01), with no FD. **Contingent FD-P35 (provisional id)**, F2.2, codebook-defined element ("access to healthy food"), counted, only if the USDA nutrition-security re-check (V8) fails. That would put F2 at 1/3, at S4.9's line but not over it (decision B3-8). F2 drift stays 0/3. |

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
closes gaps by citation (decision B3-8).

## Change

### Registry (`codebook-refinement/v3/verification_2026_10_16_b3.py`, F2 section)

The record gains f2-01, f2-02, f2-03, f2-04, f2-05, f2-06, f2-07, f2-08 and f2-09. `source_kind`
is primary for acf.gov, files.consumerfinance.gov, odphp.health.gov, usda.gov and ecfr.gov.
law.cornell.edu (11386a) is treated as primary as in CP-11-01. **The coordinator confirms these
values.**

```python
# --- CP-12-09 (F2) ---------------------------------------------------------

EXTRA_SUPPORTS += [
    ('acf-nytd', 'F2.1', 'NYTD outcome: financial self-sufficiency (youth surveyed around ages 17, 19 and 21)', 'f2-01'),
    ('hp2030-ah01-ahs01', 'F2.1', 'AHS-01: persons under 65 with public or private health insurance (a coverage measure; Medicaid is one qualifying type)', 'f2-03'),  # PARTIAL
]

NEW += [
    {'id': 'cfpb-financial-well-being-2015',
     'cite_as': 'Consumer Financial Protection Bureau (2015, December). Measuring financial well-being: A guide to using the CFPB Financial Well-Being Scale.',
     'tier': 'A', 'publisher': 'Consumer Financial Protection Bureau', 'year': 2015, 'codebook_names': [],
     'supports': [('F2.1', 'Section 2.1, what financial well-being is: meeting current and ongoing obligations, control over finances, a financial cushion', 'f2-02')]},
    {'id': 'usda-fncs-nutrition-security-2022',
     # Title not printed in the fetched text (f2-04); confirmed or corrected by V8 before this CP leaves draft.
     'cite_as': 'U.S. Department of Agriculture, Food, Nutrition, and Consumer Services Mission Area (2022, March). [Nutrition security document; title per V8.]',
     'tier': 'A', 'publisher': 'U.S. Department of Agriculture, Food, Nutrition, and Consumer Services Mission Area', 'year': 2022, 'codebook_names': [],
     'supports': [('F2.2', "definition of nutrition security: consistent access, availability and affordability of foods that promote well-being", 'f2-04')]},  # PARTIAL (title only)
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
    {'id': 'hearth-42usc11386a',
     'cite_as': 'McKinney-Vento Homeless Assistance Act, as amended by the HEARTH Act, 42 U.S.C. 11386a(b)(1)(A)(i), (ii) and (vi): Continuum of Care selection criteria.',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None, 'codebook_names': [],
     'supports': [('F2.3', 'length of homelessness, returns to homelessness, and new homelessness (criteria for judging a recipient\'s performance)', 'f2-08')]},  # PARTIAL
]

NOTES.update({
    'cfpb-financial-well-being-2015': ("Separate from cfpb-building-blocks-2016 (Y7.6). A household's or adult's financial state goes to F2.1; a young person's own financial "
                                       "knowledge, habits or decisions go to Y7.6 (rulesText rule 11; CF-001 in 2.x terms). Its names must not collide with Y7.6's. "
                                       "The scale's adult age range is an unverified lead (V9)."),
    'usda-fncs-nutrition-security-2022': ("The PDF reads 'afordability' (an 'ff' ligature lost in extraction). The fetched text names the 'USDA Food, Nutrition, and Consumer "
                                          "Services Mission Area' and is dated March 2022; the title 'USDA Actions on Nutrition Security' comes only from the URL (f2-04), so "
                                          "the fit is partial until V8 confirms it. If V8 finds the document withdrawn or not USDA's, remove this source and open FD-P35."),
    'hearth-42usc11386a': 'These are performance criteria for Continuum of Care recipients, not household outcome definitions (f2-08), hence partial.',
    'rhy-45cfr1351': "f2-07's component paraphrase leaves out the 'another residential program' examples in 1351.1.",
})
```

Each support from f2-03 gets a `verifier_note` that starts with "Read at
https://odphp.health.gov/…/ahs-01/data-methodology", because the entry's `url` is the AH-01
page.

Result: **+6 sources, +9 supports**. `codebook_extensions` unchanged.

**Left alone on purpose.**
- `cssp-concrete-support → F2.1` stays partial ("Keep CSSP as partial", F, D). Demoting it
  would force a `frameworkBasis` edit for no coding gain.
- `mckinney-vento → F2.3` is left alone. The entry is shared with Y1.13, which PR #66 re-pins
  (R-08; later item 11).
- f2-10 (11434a(2)) is not added for the same reason.

### `codebooks/youthOutcomesV3.data.ts`: `basis` (data only)

| Code | Before | After |
|---|---|---|
| F2.1 | Ascend 2Gen Economic Assets (verified); CSSP Concrete Support (verified). | Ascend 2Gen Economic Assets (verified, direct); CSSP Concrete Support (verified, partial: crisis support, not income). CP-12-09: ACF NYTD, financial self-sufficiency (verified, direct; independent youth; claim f2-01); CFPB (2015) Financial Well-Being, section 2.1 (verified, direct; claim f2-02); Healthy People 2030 AHS-01 (verified, partial: any coverage, not benefits enrollment; claim f2-03). Independent youth need no FD (decision C). |
| F2.2 | USDA ERS Household Food Security Survey Module (verified). | USDA ERS Household Food Security Survey Module (verified, direct: enough food). CP-12-09: Healthy People 2030 NWS-01 (verified, direct; claim f2-05). Access to healthy food: USDA FNCS Mission Area (March 2022), definition of nutrition security (verified, partial until its title is confirmed; claim f2-04, request V8; FD-P35 if it fails). |
| F2.3 | McKinney-Vento (located); ACF NYTD (verified). | RHY Program rule, 45 CFR 1351.30(a)(1) and 1351.31(a)(1) Stable Housing, and 1351.1 safe and appropriate exits (verified, direct; claims f2-06, f2-07, CP-12-09); Healthy People 2030 SDOH-04 rent burden (verified, direct; claim f2-09); McKinney-Vento as amended by HEARTH, 42 U.S.C. 11386a(b)(1)(A) (verified, partial: performance criteria; claim f2-08); ACF NYTD, experience with homelessness (verified, partial); McKinney-Vento, 42 U.S.C. 11434a definition (verified, partial). Young people living independently are covered by the RHY rule (decision C). |

The F2.3 `basis` edit changes text in F2.3's data field only. It does not touch the
`mckinney-vento` entry's URL, pinpoint or Y1.13 support (R-08).

### `DEVIATIONS.md`

No entry. Append one bullet to the "Batch 3 review" section:

```markdown
- **F2 (CP-12-09).** No entry. F2.1 independent youth (NYTD, CFPB Financial Well-Being), F2.2 household food insecurity (Healthy People 2030 NWS-01) and F2.3 youth exits and rent burden (RHY 45 CFR 1351, SDOH-04) are now cited; the age rule needs no entry for them (decision C). F2.1 "Medicaid" rests on AHS-01 as a partial fit. F2.2 "access to healthy food" (S062) rests on USDA's 2022 nutrition-security definition pending a title re-check; if that fails, FD-P35 opens and F2 is at 1/3, at the S4.9 line (decision B3-8).
```

Drift table: F2 row unchanged (0/3).

### `frameworkBasis`, source lines, `rulesText`, hints, `CONFUSIONS.md`

Unchanged. CFPB, RHY, HP2030 and nutrition security in the F2 basis are CP-12-14 item 27
(decision B3-1). The insurance hint (F2.1 vs Y8.5) is CP-12-15.

## Sources

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| acf-nytd | verified | financial self-sufficiency (F2.1) | f2-01 "States will survey youth regarding six outcomes: financial self-sufficiency, experience with homelessness," |
| cfpb-financial-well-being-2015 (new) | verified | section 2.1 | f2-02 "Having a financial "cushion" against unexpected expenses and emergencies." |
| hp2030-ah01-ahs01 | verified (F2.1 fit partial) | AHS-01 | f2-03 PARTIAL "Number of persons under 65 years who report coverage by any type of public or private health insurance." |
| usda-fncs-nutrition-security-2022 (new) | verified (fit partial, title pending V8) | nutrition security definition | f2-04 PARTIAL "consistent access, availability, and afordability of foods and beverages that promote well-being, prevent disease" |
| hp2030-nws01 (new) | verified | NWS-01 | f2-05 "Reduce household food insecurity and in doing so reduce hunger." |
| rhy-45cfr1351 (new) | verified | Stable Housing; safe exits | f2-06 "(iii) Education or Employment; and (iv) Stable Housing."; f2-07 "To the private residence of a parent, guardian, another adult relative, or another adult" |
| hp2030-sdoh04 (new) | verified | SDOH-04 | f2-09 "Reduce the proportion of families that spend more than 30 percent of income on housing" |
| hearth-42usc11386a (new) | verified (fit partial) | CoC criteria | f2-08 PARTIAL "the extent to which individuals and families who leave homelessness experience additional spells of homelessness;" |

Verified but not used: f2-10 (11434a(2); later item 11, after PR #66) and f2-11 (AmeriCorps CEV;
rejected).

## Verification requests

```
V8  claim_id: f2-04b · code: F2.2 · cite_as: U.S. Department of Agriculture, Food, Nutrition, and Consumer Services Mission Area (2022, March). USDA Actions on Nutrition Security. · claimed_component: The document's title, issuing office and date as printed on the document (cover, header or first page), and whether USDA still hosts it or marks it archived or withdrawn. · url: https://www.usda.gov/sites/default/files/documents/usda-actions-nutrition-security.pdf
V9  claim_id: f2-02b · code: F2.1 · cite_as: Consumer Financial Protection Bureau (2015). Measuring financial well-being: A guide to using the CFPB Financial Well-Being Scale. · claimed_component: The age range of the population the scale was developed and normed for (e.g. adults 18 and older). · url: https://files.consumerfinance.gov/f/201512_cfpb_financial-well-being-user-guide-scale.pdf
```

**V8 gates the F2.2 nutrition-security row.** If V8 is SUPPORTED, set `cite_as` to the printed
title and fit `direct`. If the title differs, use the printed title, and set the fit by the
verifier's reading. If the document is not USDA's or not retrievable, drop the row and open FD-P35:

```markdown
### FD-P35 · F2.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** USDA ERS, U.S. Household Food Security Survey Module (verified): "Food security for a household means access by all members at all times to enough food for an active, healthy life."; Healthy People 2030 NWS-01 (verified).
- **Departs:** "access to healthy food" in F2.2's definition goes past "enough food"; no verified source frames healthy-food access as a household outcome.
- **Evidence:** S062 ("Families will report reduced food insecurity and increased access to healthy food." → F2.2), adjudicated design row.
- **Alternative considered:** narrowing F2.2 to "enough food" (rejected by all four reviewers; would flip S062's healthy-food half).
- **Decided in:** CP-12-09 (batch 3 research review, 2026-10-16), pending Severin.
- **Revisit:** when a verified nutrition-security source is found.
```

(F2.2 would then get `fidelity: "adapted"`, `deviation: "FD-P35"`, and the F2 drift row would read
`1 (F2.2) | 33% | no (at the line)`.)

V9 does not block anything. It strengthens the decision C reading for independent young adults.

## Decisions for Severin (this CP depends on)

- **C (age rule):** F2.1 independent youth (NYTD + CFPB) and F2.3 (RHY) need no FD.
- **B3-8:** F2's small denominator. Recommended: no STANDARDS change; prefer citations (this CP).
- **B3-5** (F1.6 vs F2.1) does not block this CP, but the CFPB note assumes financial *state* goes
  to F2.1.
- **D (timing):** recommended now (registry only).

## Not bundled

The McKinney-Vento F2.3 row (later item 11, after PR #66); bare "stability" (later item 6);
adult volunteering (later item 7); splitting multi-outcome texts (later item 13); the HP2030
court-order banner, the PA-R02 revision and the SNAP-Ed/USDA status watch items (later item 14).

## Gold impact

- Rows expected to change code: **none**.
- Design rows the edits rest on: S106, S139, S006, H027 (F2.1); S062, S210, H070 (F2.2); S198,
  S200, S225, H049, H074 (F2.3); S191 (Y8.5 on the shared `hp2030-ah01-ahs01` and `acf-nytd`
  entries; its supports are not changed).
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run (no prompt change). `npm test` and `npm run typecheck:server`.
