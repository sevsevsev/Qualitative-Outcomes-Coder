# CP-04-07: Give 11.2 a source line

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | 11.2 (citation text only) |
| Version bump | PATCH |
| Requirement served | R1 frameworks |
| Status | applied in v1.2.0 (PR #9, merged 2026-09-24). Codes here use the pre-2.0.0 numbering; see CP-04-08 |
| Enum cost | +0 |

## Problem

11.2 has no per-subcategory source line in `definitionsText`. Only the Domain 11
header cites anything for it (see the note on `essa-indicators` in the registry).

## Change

Add under 11.2:

```
   - Source Framework: ESSA State academic standards for mathematics, 20 U.S.C. 6311(b)(1)(C).
```

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| essa-6311-b1c-standards | verified (SUPPORTED, V04-02) | State academic standards for mathematics |

## Gold impact

None. This is a citation-only change.

## Judge result

Filled in by `codebook-regression-judge`.
