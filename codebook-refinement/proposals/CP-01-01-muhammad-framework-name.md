# CP-01-01: Correct the name of Gholdy Muhammad's framework

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Domain 1 header, 1.1, 2.4, 6.4 (citation text only) |
| Version bump | PATCH |
| Requirement served | R1 |
| Status | draft |
| Enum cost | +0 |

## Problem

`definitionsText` calls it "Gholdy Muhammad's Hill Model" (1.1, 6.4). The framework
is the **Culturally and Historically Responsive Literacy (HRL) / Five Pursuits
framework** (Identity, Skills, Intellect, Criticality, Joy). It comes from
*Cultivating Genius* (2020), which had four pursuits, and *Unearthing Joy* (2023),
which added Joy. "HILL" is the acronym of her organization, HILL Pedagogies
(Histories, Identities, Literacies and Liberation). It is not the model's name. A
reader searching for "Hill Model" will not find the framework.

The pursuit numbers the codebook uses are correct (1 Identity, 4 Criticality,
5 Joy).

## Change

| Location | Before | After |
|---|---|---|
| 1.1 Source | `Gholdy Muhammad’s Hill Model (Pursuit 5: Joy).` | `Muhammad, Five Pursuits / Culturally and Historically Responsive Literacy framework (Pursuit 5: Joy; Unearthing Joy, 2023).` |
| 6.4 Source | `Gholdy Muhammad’s Hill Model (Pursuit 4: Criticality).` | `Muhammad, Five Pursuits / Culturally and Historically Responsive Literacy framework (Pursuit 4: Criticality; Cultivating Genius, 2020).` |
| 2.4 Source | `Learning for Justice (Identity) & Gholdy Muhammad (Pursuit 1).` | `Learning for Justice Social Justice Standards (Identity) & Muhammad, Five Pursuits framework (Pursuit 1: Identity).` |
| File header comment | `Gholdy Muhammad (Joy & Criticality)` | no change needed |

**Registry:** when applied, delete `muhammad-hill-model-label`.

## Sources

| Registry ID | Status | Component |
|---|---|---|
| muhammad-five-pursuits | verified | Pursuits 1, 4, 5 |

## Verification requests

- Pin book metadata for the verifier: *Cultivating Genius* (Scholastic, 2020) and
  *Unearthing Joy* (Scholastic, 2023). The year and publisher were recalled from
  memory, not retrieved.
- `learning-for-justice-sjs` is unverified.

## Gold impact

None expected. Text-only change to citations.
