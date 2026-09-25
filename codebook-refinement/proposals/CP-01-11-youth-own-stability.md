# CP-01-11: Let 12.7 cover an independent young person's own housing

> **Narrowed after the first test (2026-09-25).** The first version widened the
> Domain 12 scope note, hint and description (12.5-12.7). In two preview runs on the
> 255 design rows it scored 92.5% / 92.2% lenient vs 92.2% / 92.9% on 2.2.0. S191
> became stably 12.5, but S017 (newcomer families' school-enrollment rights, gold 7.1,
> alt 12.1) went from right in both baseline runs to wrong in both (1.5, 10.2), which
> fails the S4.4 regression gate. Severin chose to rework it: only the 12.7
> definition and example change now. The Domain 12 note, hint and description stay
> as in 2.2.0, and the 12.5 registry support is dropped. The first version's text is
> kept below as history.

> **Re-based onto codebook 2.1.0 (2026-09-25).**
>
> - **Numbering.** `map_cp_codes.py` found only 12.5, 12.7, and Domain 12, which are
>   unchanged from v1.1.1 to v2.0.0. This CP never carried the CP-04-08 banner
>   because it had nothing to renumber.
> - **Text drift.** The draft quoted the Domain 12 note with "...". The full 2.1.0
>   text is used below.
> - **New since the draft.** CP-06-01 added a Domain 12 `hint` and `description`
>   that say "caregiver" only. Both are updated here.
> - **Overlap with CP-07-01 rule 8 (mobility).** Rule 8 sends youth-only "economic
>   mobility" to 9.8 and family/household economic standing to 12.5. After this CP,
>   an independent young person's own economic stability is 12.5. The two meet on
>   statements like "transition-age youth will achieve economic self-sufficiency".
>   See Open issues.

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | 12.7 definition and example only (narrowed; the first version also changed the Domain 12 scope note, hint and description) |
| Version bump | MINOR (scope change) |
| Requirement served | R2 (foster care / transition-age youth, runaway & homeless youth) |
| Status | approved (narrowed version; Severin, 2026-09-25) |
| Enum cost | +0 |

## Problem

Domain 12's note scopes it to "the CAREGIVER'S OWN knowledge, well-being, and
material stability". That leaves no code for a **young person's own** housing or
economic stability. This is the primary outcome for:

- foster-care / transition-age youth programs;
- runaway and homeless youth programs;
- teen-parent programs.

The federal NYTD outcomes survey tracks exactly these for youth aged 17–21:
"financial self-sufficiency" and "experience with homelessness".

**Adjudicated evidence (new since the draft).** In `gold/gold-cycle02.csv`, youth
housing rows are already coded 12.7, but as forced fits against the scope note:

- S029 "Youth aging out of foster care will secure stable housing by age 21" (forced).
- H049 "Youth exited the shelter into safe and stable housing" (forced; "12.7
  defined for families").
- H044 (forced).
- S200 and S225 ("Housing stability framed for families; youth shelter exits not
  addressed").
- S037 "Young adults will maintain their own apartment lease".

The codes are right. The definition is what's wrong.

## Why this is the smallest fit (STANDARDS S2.2)

- **An example alone** would contradict the scope note. The coders already record
  forced fits because the note says caregiver-only.
- **Widening the scope note** works because the constructs (housing stability,
  economic stability) are the same; only the subject differs. It costs nothing.
- **A new "youth independent living" domain** would cost 2 or more enum slots
  (footprint 145 -> 147+) and duplicate 12.5 and 12.7.

## Change

**Narrowed version (under test):** only the 12.7 block below. The Domain 12
note, hint and description changes further down were in the first version and
are no longer applied.

**Domain 12 note (definitionsText).**

Before:

```
(Note: This domain covers the CAREGIVER'S OWN knowledge, well-being, and material stability. It is distinct from 3.5, which covers the family's relationship WITH the program, and from 11.4, which covers the organization's systems for engaging families.)
```

After:

```
(Note: This domain covers the CAREGIVER'S OWN knowledge, well-being, and material stability -- and, for 12.5-12.7, the material stability of a young person living independently (e.g., transition-age youth leaving foster care, runaway/homeless youth, teen parents; cf. ACF National Youth in Transition Database outcomes). It is distinct from 3.5, which covers the family's relationship WITH the program, and from 11.4, which covers the organization's systems for engaging families.)
```

**12.7 (definitionsText).**

Before:

```
12.7 Housing Stability
   - Definition: Outcomes related to a family securing or maintaining safe, stable housing.
   - Source Framework: McKinney-Vento Act (housing instability definition).
   - Example: "Families will secure stable, safe housing within 90 days of program enrollment."
```

After:

```
12.7 Housing Stability
   - Definition: Outcomes related to a family, or a young person living independently, securing or maintaining safe, stable housing.
   - Source Framework: McKinney-Vento Act (housing instability definition).
   - Example: "Families will secure stable, safe housing within 90 days of program enrollment." OR "Youth aging out of foster care will secure stable housing by age 21."
```

**Domain 12 `hint`** (CP-06-01; it isn't sent to the model, but the review UI
shows it).

Before:

```
The CAREGIVER'S OWN knowledge/well-being/stability -- distinct from 3.5 (family-program relationship) and 11.4 (org's family-engagement systems).
```

After:

```
The CAREGIVER'S OWN knowledge/well-being/stability -- or, for 12.5-12.7, a young person living independently. Distinct from 3.5 (family-program relationship) and 11.4 (org's family-engagement systems).
```

**Domain 12 `description`.**

Before:

```
Outcomes about caregivers and households: parenting knowledge and practices, caregiver well-being and support networks, the home learning environment, and economic, food and housing stability.
```

After:

```
Outcomes about caregivers and households: parenting knowledge and practices, caregiver well-being and support networks, the home learning environment, and economic, food and housing stability -- including for young people living on their own.
```

**Target Population:** such rows stay `students_youth`. The population says *who*,
and the code says *what*.

**rulesText**: no change. Rule 6's Domain 12 line ("the caregiver's OWN knowledge,
well-being, home practices, or material/economic stability") contrasts Domain 12
with 3.5 and 11.4 and doesn't forbid a youth subject. It is left alone to keep this
CP to a scope change. See Open issues.

**CONFUSIONS.md** (first version): CF-018 already states the rule. The narrowed
version leaves CF-018 proposed, because its 12.5 half is no longer in the codebook. When this is applied, change its
heading `· proposed (CP-01-11)` to `· active`.

**Registry** (`acf-nytd`, verified). The narrowed version only removes
`"proposed": true` from the 12.7 support.

- Remove `"proposed": true` from its 12.7 support.
- Add `{ "code": "12.5", "component": "Financial self-sufficiency (youth's own economic stability)" }`.
  The verified excerpt contains "financial self-sufficiency" verbatim.
- NYTD is named in a scope *note*, not a `Source Framework` line, so `sync.test.ts`
  doesn't require `codebook_names`. Adding `"National Youth in Transition Database"`
  would be harmless, but it is not needed.

## Open issues (flagged, not in the Change above)

1. **Rule 8 (CP-07-01) vs. the widened 12.5.**
   - For a young person, rule 8 says "names ONLY economic mobility ... use 9.8".
   - After this CP, "an independent young person's own income/benefits" is 12.5
     (CF-018).
   - The rules don't conflict on concrete outcomes (benefits and housing go to 12.5
     or 12.7; jobs to 9.8), but "economic self-sufficiency" could go either way.
   - Suggested for Severin, not applied: add to CF-018 and CF-027 "a transition-age
     youth's own benefits, income supports or housing -> 12.5/12.7; a job or earnings
     -> 9.8".
2. **CP-01-05 (9.9) interaction.** A youth's financial *habits or knowledge* go to
   9.9, and their *material stability* to 12.5. CF-001 and CF-018 together already
   say this. No text change is needed.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| acf-nytd | verified | "experience with homelessness", "financial self-sufficiency" |

## Verification requests

None.

## Gold impact

- `gold/original.gold.csv` (all `proposed`): G-045 (12.7). CF-018: G-045, G-046
  (12.5).
- `gold/gold-cycle02.csv` (adjudicated). No flips expected; forced fits become
  clean fits:
  - 12.7: S029, H049, H044, S200, S225, S037, H073.
  - 12.5: S191 (a youth enrolling in Medicaid).
- Watch: S024 (reunification, 12.7; Severin: codebook gap) is not a housing outcome
  and should stay a gap. H044 is a composite (housing plus school or work), so its
  split behavior may change.

## Judge result

First version (codebook 2.3.0, two preview runs, scored against baseline-2.2.0 with
`scripts/scoreAppExport.ts`, design set only):

| | Run 1 | Run 2 |
|---|---|---|
| 2.2.0 baseline, lenient | 92.2% | 92.9% |
| First version, lenient | 92.5% | 92.2% |

- Improved: S191 12.5 in both runs (was one).
- Regressed in both runs: S017 (gold 7.1, alt 12.1 -> 1.5 / 10.2). Fails S4.4.
- One-run noise: S082, S110, S131, S193.

Narrowed version (12.7 only, codebook 2.3.0, two preview runs, same scoring):

| | Run 1 | Run 2 |
|---|---|---|
| 2.2.0 baseline, lenient | 92.2% | 92.9% |
| Narrowed version, lenient | 93.3% | 93.3% |

- No regressions against the baseline (S017 right in both runs).
- Improved: S191 12.5 in both runs (was one).
- S082, S110 and S131 were right in one baseline run and are right in both now; they
  are baseline noise, not effects of this change.
- Run-to-run kappa 0.972 (7 unstable rows, all still lenient-correct except S224,
  which was wrong in both baseline runs too).
