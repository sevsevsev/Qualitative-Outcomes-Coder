# CP-04-08: Renumber Academic Learning & Achievement as Domain 1

| Field | Value |
|---|---|
| Type | RENUMBER |
| Codes touched | Every domain and subcategory except Domain 12 (numbers only; no label text, definition or scope changes) |
| Version bump | MAJOR (1.2.0 → 2.0.0), per STANDARDS S4.6: codes renumbered, with a re-import mapping in `services/reviewNormalization.ts` |
| Requirement served | usability (Severin's request, 2026-09-24) |
| Status | applied on branch `claude/project-thread-mpnj0j` |
| Enum cost | +0 (same 12 domains and 84 subcategories) |

## Problem

CP-04-04 listed the academic domain first but kept its number, 11. Severin asked on
2026-09-24 for it to be numbered 1 as well, with the other domains renumbered to
match, "without hallucinating".

## Change

**The rule.** Each domain is numbered by its place in the list, which CP-04-04 already
set. That gives:

| Old | New | Domain |
|---|---|---|
| 11 | 1 | Academic Learning & Achievement |
| 1–10 | 2–11 | each moves up one (Joy → 2, …, Adult & System Capacity → 11) |
| 12 | 12 | Family Strengthening & Basic Needs (unchanged) |

A subcategory keeps its position inside its domain: 11.3 → 1.3, 3.2.1 → 4.2.1,
10.5 → 11.5. SEL category headers (3.1–3.5 → 4.1–4.5) and codes proposed in open CPs
(8.9 → 9.9, 1.6 → 2.6, 11.10 → 1.10) move with their domain.

**How it was applied.** Nothing was renumbered by hand.

- `renumbering/renumber_v2_0_0.py` derives the map from a dump of the v1.2.0 codebook
  (`renumbering/v1.2.0-codebook-dump.json`) and writes it to
  `renumbering/v1.2.0-to-v2.0.0.csv` and `codebooks/originalV1Numbering.ts`.
- The same script rewrote code numbers in 28 files. It only touches code columns,
  our own prose and registry `code` fields. It never touches outcome text, verbatim
  source excerpts, quoted framework components, or numbers that are not codes
  (versions, statutes, percentages, ISTE's own standard numbers).
- A separate check compared every changed line with the previous commit. All 2,713
  changed numbers are exactly their mapped value, and no other character changed.

**Files renumbered (live material):**

- `codebooks/original.ts`: definitions, rules, hints, notes and the deferred list;
- `CONFUSIONS.md`, `sources/original.sources.json`;
- `gold/original.gold.csv`, `gold/gold-cycle02.csv` (v1 columns only),
  `v2/v1-to-v2-crosswalk.csv` (v1 column), `v2/STRUCTURE.md`;
- the open CPs (CP-01-01 to CP-01-13, CP-04-05, CP-04-06) and `TEMPLATE.md`;
- `.claude/agents/codebook-citation-verifier.md` (an example code);
- the tests that name codes.

**Left on the old numbers (records of what happened):** cycle reports, the applied
CPs (CP-04-01 to CP-04-04, CP-04-07), `eval/cycle02/` coder outputs, `validation/`
fixtures, and `v2/source-verification-2026-09-24.md`. Read them through the map.

**Hand edits (a script can't judge these), all in the second commit:**

- The version-history comment in `original.ts` gets a v2.0.0 paragraph. The older
  paragraphs keep the numbers they were written with.
- `4.5.5`'s note said "use 6.2 (formerly 8.3)". The "formerly" referred to a pre-v1.1
  number that now belongs to another code, so it is dropped.
- The two "listed first" notes now say numbering and order carry no weight.
- CP-01-09 option (c) proposed a new "11.8", which CP-04-01 has since taken. It now
  says 1.10, as CONFUSIONS.md CF-020 already did.
- The re-import labels for v1.1.1 (`11.1 Literacy & Reading Skill` and two others)
  keep their old numbers; they now point at the new codes.
- The same three v1.1.1 labels, and their v1.1.1 domain, in
  `services/reviewNormalization.test.ts`: the script had renumbered them and they
  were restored. The script's `PROTECT` list now skips them, so a re-run reproduces
  the result.
- Test fixes that look codes up by bare number (`byNumber('4')`, `/11\.5/`), the
  version test, and variable names that named old domains.

**Docs and records updated alongside:**

- The status lines of the applied CPs (CP-04-01 to CP-04-04, CP-04-07).
- A renumbering note at the top of each renumbered open CP.
- CONFUSIONS.md: a code-numbers note, "active" now meaning the live codebook, and
  CF-010 and CF-026 marked active (CP-04-01 shipped in v1.2.0).
- `sources/original.sources.json`: a `codes_renumbered` note.
- `CLAUDE.md` current state, `README.md` (12 domains, the fuzzy-match example),
  `codebook-refinement/README.md`, the cycle-04 addendum, and the `registry.test.ts`
  test names.
- The v2 draft, STRUCTURE.md and PLAN.md say the crosswalk's v1 column uses new
  numbers with v1.1.1 meanings.
- CP-04-05 proposes that the v2 draft follow the same rule (Y7/Y8 become Y1/Y2) at
  cut-over. This is a proposal inside a CP that is still waiting on Severin, not a
  decision.

**STANDARDS.md is not changed.** It cites 10.5 and 7.8 as examples, which are now
11.5 and 8.8. Only Severin can approve that edit.

**Re-importing old exports** (`services/reviewNormalization.ts`):

- A full old label ("Domain 1. Joy, Interest & Motivation in Learning") maps by its
  text, so it needs no version stamp. Only Domain 12 has the same label in both
  versions, and it maps to itself.
- A bare number ("Domain 11", "11.3") is translated only when the row is stamped
  with a version below 2.0.0. With no stamp, a domain number that changed is left
  blank for review rather than guessed (Domain 12 still matches).
- A domain written as "1. Joy…" is matched by its name before its number.
- Secondary codes with old labels are upgraded too, and so are bare old numbers on
  rows stamped below 2.0.0.
- Upgraded rows keep their original stamp, which records the version they were
  coded under.
- A current label is never remapped, so re-importing a re-saved file is safe.

**Tests** (`codebooks/renumbering.test.ts`) prove:

- every v1.2.0 code maps to exactly one v2.0.0 code, with nothing lost or added;
- the text after each number is unchanged;
- each domain's number equals its place in the list;
- every old label pair re-imports to its new pair.

## Why MAJOR, and the name clash with v2

STANDARDS S4.6 makes any renumbering MAJOR, so this is 2.0.0. PLAN.md also calls the
future restructured codebook "v2.0.0". That codebook will be a separate file
(`youthOutcomesV2.ts`, phase 4) with its own version, so the two will not share a
version string in code. The docs will need to say "original 2.0.0" and "the v2 draft"
to keep them apart.

## Merged alongside PR #10

PR #10 (sync checks) merged into main just before this CP. It added two registry
entries and CP-05-01 that used the old numbers, so main's sync test failed after
both merged. PR #12 moved them to the new numbers using the map in `renumbering/`:
Utility Value 1.3 → 2.3, Healing & Trauma 7.3 → 8.3, and Domain 7 → 8 in CP-05-01.

## Risk

- Codes may now be listed next to a lower number. The model may favor Domain 1 in
  borderline rows (for example Domain 5 vs. 1, engagement vs. learning gains). That is
  the same risk CP-04-04 named, and the same live edge-case re-run checks it.
- Anyone holding a printed or exported list of v1.x codes needs the map. The CSV
  in `renumbering/` is the reference.
- Codebook-tab links saved before 2.0.0 (for example `…/11.3`) now open the code
  that holds that number today.

## Gold impact

None. Expected codes moved to their new numbers, row for row. No row changed its
status, and none is adjudicated.

## Judge result

Filled in by `codebook-regression-judge`.
