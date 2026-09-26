# CP-NN-XX: <short title>

| Field | Value |
|---|---|
| Type | CITATION_FIX · HINT · EXAMPLE · DEFINITION_SCOPE · TIEBREAKER · ADD_CODE · SPLIT · MERGE · RENAME · RULES (choose one) |
| Codes touched | e.g. 9.9 (new), 12.5 |
| Version bump | PATCH / MINOR / MAJOR |
| Requirement served | R1 frameworks · R2 breadth · R3 tie-breakers · R4 drift |
| Status | draft → ready-to-test → judged (PASS/FAIL/NEEDS-HUMAN) → approved / rejected |
| Enum cost | +0 (or +N; footprint before → after) |
| Framework deviation | none · new FD-### · changed FD-### (STANDARDS S1.6; a tie-breaker that moves a construct across a framework's boundary counts) |

## Problem

What is wrong or missing? Include evidence: row IDs from validation, gold, or eval
data, or registry IDs.

## Why this is the smallest fit (STANDARDS S2.2)

Required for DEFINITION_SCOPE, ADD_CODE, SPLIT, and MERGE.

## Change

**definitionsText**, before:

```
...
```

**definitionsText**, after:

```
...
```

Also give before/after for any of these that change:

- `rulesText`
- the `domains` entry or hint
- `CONFUSIONS.md`
- the registry

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|

## Verification requests

New claims for the citation verifier. Leave empty if none.

## Gold impact

- Rows expected to change code: G-...
- New proposed rows: G-...

## Judge result

Filled in by `codebook-regression-judge`.
