# CP-05-01: Name the trauma source Domain 8 actually uses

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Domain 8 header (citation text only) |
| Version bump | PATCH |
| Requirement served | R1 frameworks |
| Status | draft |
| Enum cost | +0 |

## Problem

The Domain 8 "Framework Basis:" line names "SAMHSA (Trauma)". In the registry,
`samhsa-tic-2014` (SAMHSA's Concept of Trauma and Guidance for a Trauma-Informed
Approach) supports only 11.2, where staff and organizations adopt trauma-informed
practice. No Domain 8 code relies on it. 8.3 Healing & Trauma Recovery cites the
NCTSN Core Curriculum (`nctsn-core-curriculum`).

Found by `codebook-refinement/sync.test.ts`. Until this CP is applied or rejected,
the registry records the mismatch as an `unsupported` 8.3 support on
`samhsa-tic-2014` with `open_cp: CP-05-01`.

## Change

**definitionsText**, before:

```
Framework Basis: CDC WSCC (Physical), Dual Continua Model (Mental Health), SAMHSA (Trauma), & CDC Youth Risk Behavior Surveillance System (Risk Behaviors, 8.5-8.7)
```

**definitionsText**, after:

```
Framework Basis: CDC WSCC (Physical), Dual Continua Model (Mental Health), National Child Traumatic Stress Network Core Curriculum (Trauma), & CDC Youth Risk Behavior Surveillance System (Risk Behaviors, 8.5-8.7)
```

**Registry:** remove the `unsupported` 8.3 entry from `samhsa-tic-2014`.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| nctsn-core-curriculum | located | Already the 8.3 source; no new claim |

## Verification requests

None. No new claim is made.

## Gold impact

None. This is a citation-only change.

## Judge result

Filled in by `codebook-regression-judge`.
