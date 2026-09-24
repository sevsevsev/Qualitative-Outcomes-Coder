# CP-04-06: Clean up Subject Area values, and add the Subject Area gold column that could reopen a subject-neutral design

| Field | Value |
|---|---|
| Type | RENAME |
| Codes touched | Subject Area enum ("SEL Only" and "N/A / General" → "Not a subject-matter outcome"; add "Non-subject-specific academic"); gold column `expected_subject_area` |
| Version bump | MAJOR for the Subject Area values (needs a re-import mapping) |
| Requirement served | R4 drift |
| Status | draft: awaiting Severin's approval. **Not applied**: it changes values that existing exports, filters and dashboards use |
| Enum cost | +0 (two values replaced by two) |

## Problem

- **Subject Area is filled on every row**, not only learning rows. In the live run,
  482 rows were "SEL Only" and 106 arts-program *joy* rows were tagged Visual &
  Performing Arts. Counting "programs with growth in subject X" from this field alone
  over-counts, so today it has to be combined with the learning codes.
- **"SEL Only" and "Early Childhood / Pre-K" are not subjects.** SEL is Domain 3, and
  early childhood is a grade span.

## Change (proposed)

1. **Subject Area values:**
   - Replace "Social & Emotional Learning (SEL Only)" and "N/A / General" with "Not a
     subject-matter outcome".
   - Add "Non-subject-specific academic" (SCED area 23) for 11.6 rows with no subject.
2. **Rule:** non-learning rows get "Not a subject-matter outcome". A program's subject
   context, if wanted, becomes a program-level field.
3. **Re-import:** map the old values in `services/reviewNormalization.ts`.
4. **SCED crosswalk:** add a comment table mapping each Subject Area value to its
   NCES SCED subject area.
5. **Gold:** add `expected_subject_area` to `gold/original.gold.csv`, and Subject Area
   columns for both coders to the phase-2 held-out set, with at least 30 learning rows
   and at least 2 per learning code.

## The gate this sets (from the debate verdict)

Severin's earlier pick was a subject-neutral design (subject carried only in Subject
Area). Revisit it if phase 2 shows all three of the following:
- Subject Area agreement on learning rows is at least the learning-code agreement and
  at least 90%;
- the code/Subject Area mismatch rate (CP-04-03's check) on a live run is 5% or lower;
- Severin rules that sources attached to Subject Area values satisfy STANDARDS S1.

## Judge result

Not judged: this CP is not applied to code.
