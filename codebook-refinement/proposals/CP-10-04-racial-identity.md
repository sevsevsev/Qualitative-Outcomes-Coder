# CP-10-04: Name racial identity where the codebook lists identities

| Field | Value |
|---|---|
| Type | HINT |
| Codes touched | Y5.2 (definition, include), Y5.1 (exclude), Y4.5 (include); category Y5.A (description, display only) |
| Version bump | PATCH (3.1.3 → 3.1.4) |
| Requirement served | R4 drift (the wording matches what the code and its source already cover) |
| Status | draft, requested by Severin 2026-10-13 in the outcomes-dashboard project ("Could we make sure that we include racial identity where appropriate?") |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. Y5.2's anchor, Nagaoka et al. (2015) integrated identity, names race/ethnicity (verified 2026-09-26, already in its `basis`); Y4.5's anchor, CASEL cultural competency, is unchanged. |

## Problem

Y5.2 Cultural & Social Identity listed "cultural, ethnic, linguistic, gender, sexual or other social
identity" but not racial identity, although its own source line cites Nagaoka's integrated identity
"across social identities (race/ethnicity, culture)". Racial identity was covered only through "other
social identity", so a reader of the dashboard or explorer could not see it, and the coder had to infer
it. The same gap ran through the lines that point at Y5.2 (Y5.1's exclude, the Y5.A category
description) and through Y4.5's list of differences to respect.

## Why this is the smallest fit (STANDARDS S2.2)

No code, category or citation is added. Each edit names a dimension the code already covers, so the
scope of each code is unchanged; that is why this is a PATCH rather than a MINOR scope change. If you
read "racial" as widening Y5.2, bump to 3.2.0 instead; nothing else changes.

## Change

`codebooks/youthOutcomesV3.data.ts`:

| Where | Before | After | In the coding prompt? |
|---|---|---|---|
| Y5.2 definition | Pride in, and acceptance of, one's own cultural, ethnic, linguistic, gender, sexual or other social identity. | Pride in, and acceptance of, one's own cultural, racial, ethnic, linguistic, gender, sexual or other social identity. | yes |
| Y5.2 include | Pride in heritage; self-acceptance of sexual orientation or gender identity; bicultural identity. | Pride in heritage; positive racial or ethnic identity; self-acceptance of sexual orientation or gender identity; bicultural identity. | yes |
| Y5.1 exclude | Pride in a cultural or social identity; self-confidence; purpose. | Pride in a racial, cultural or other social identity; self-confidence; purpose. | yes |
| Y4.5 include | Respect for peers of other cultures, religions, abilities; inclusive behavior; bias awareness. | Respect for peers of other races, cultures, religions, abilities; inclusive behavior; bias awareness. | yes |
| Y5.A description | … taking pride in their cultural and social identities, and seeing themselves … | … taking pride in their racial, cultural and other social identities, and seeing themselves … | no (display only) |

Looked at and left alone: Y4.C's description ("respecting people of different backgrounds") and Y4.5's
definition ("different backgrounds and identities") are already general; Y6.3 Critical Consciousness
already names systemic racism; no F or A code lists identity dimensions.

`rulesText`, hints, `CONFUSIONS.md`: unchanged.

## Sources

None new. Y5.2's `basis` already records Nagaoka et al. (2015) naming race/ethnicity (verified,
re-review 2026-09-26).

## Gold impact

No gold row changes. Design-set rows on the touched codes: S009 and S129 (Y5.2), S036 (Y5.3). None
mentions race, so the edit is not expected to flip any of them. Eval results: see below.

## Judge result

See the eval section below.
