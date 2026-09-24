# CP-01-11: Let Domain 12 cover an independent young person's own housing and economic stability

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | Domain 12 scope note, 12.5, 12.7 |
| Version bump | MINOR (scope change) |
| Requirement served | R2 (foster care / transition-age youth, runaway & homeless youth) |
| Status | draft |
| Enum cost | +0 |

## Problem

Domain 12's note scopes it to "the CAREGIVER'S OWN knowledge, well-being, and
material stability". That leaves no code for a **young person's own** housing or
economic stability. This is the primary outcome for:

- foster-care / transition-age youth programs;
- runaway and homeless youth programs;
- teen-parent programs.

The federal NYTD outcomes survey tracks exactly these for youth aged 17–21:
"financial self-sufficiency" and "experience with homelessness". Today, "Youth aging
out of foster care will secure stable housing" either gets forced to 12.7 in
violation of the scope note, or ends up coded `low`.

## Why this is the smallest fit

The constructs (housing stability, economic stability) are the same. Only the
subject differs. Widening the scope note costs nothing. A new "youth independent
living" domain would cost 2 or more enum slots and duplicate 12.5 and 12.7.

## Change

**Domain 12 note**, before:

```
(Note: This domain covers the CAREGIVER'S OWN knowledge, well-being, and material stability. ...
```

**Domain 12 note**, after:

```
(Note: This domain covers the CAREGIVER'S OWN knowledge, well-being, and material stability -- and, for 12.5-12.7, the material stability of a young person living independently (e.g., transition-age youth leaving foster care, runaway/homeless youth, teen parents; cf. ACF National Youth in Transition Database outcomes). ...
```

**12.7 definition**: change "a family securing or maintaining safe, stable housing"
to "a family, or a young person living independently, securing or maintaining safe,
stable housing".

**12.7 example**: add `OR "Youth aging out of foster care will secure stable housing by age 21."`

**Target Population:** such rows stay `students_youth`. The population says *who*,
and the code says *what*.

## Sources

| Registry ID | Status | Component |
|---|---|---|
| acf-nytd | verified | "experience with homelessness", "financial self-sufficiency" |

## Gold impact

- New proposed row: G-045.
- CF-018: G-045, G-046.
