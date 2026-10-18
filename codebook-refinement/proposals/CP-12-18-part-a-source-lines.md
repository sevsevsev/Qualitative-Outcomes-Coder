# CP-12-18: Part A source lines (Reisman on A3.2; Epstein Type 6 off A2.6, held for the A2 review)

**In plain words.** The printed source line for Cross-Sector Partnerships (A3.2) will name the
Reisman and colleagues (2007) advocacy guide, whose "strengthened alliances" outcome matches the
ordinary partnerships the code holds, next to the Collective Impact article it already names.
Because the coding model reads source lines, this waits for the shared pair of test runs after
pull requests #62 and #66. The second fix, removing a poorly fitting Epstein type (community
collaboration) from Family Engagement Systems (A2.6), is held: once the accreditation deviation
lands, the Program Quality, Access & Reach domain is over its deviation limit, and no change to
it may land until its anchor review ends. Two small source-record name fixes land now; adding
Guskey to the Staff & Volunteer Capacity domain's framework line moved to the single
framework-line change you approved.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Gate part: A3.2 Source line. Held part (A2 anchor re-review): A2.6 Source line, A2.6 `basis`, registry `epstein-six-types` A2.6 component and note. Lands now: `codebook_names` on `guskey-2002-pd-evaluation` and `reisman-2007-advocacy-policy`. No definition, include, exclude, useInstead, example, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, against whatever version is current at the gate (after CP-12-10..12 and PRs #62 and #66) |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options). **The A3.2 part reaches the coding prompt: shared two-run design-set gate after PRs #62 and #66. The A2.6 part is held for the A2 anchor re-review.** |
| Applied | Applied 2026-10-16 in 3.1.5: part (a): `codebook_names` "Guskey (2002)" and "Reisman, Gienapp & Stachowiak (2007)". Waits for the gate: the A3.2 Source line. Held for the A2 anchor re-review: the A2.6 Source line, `basis` and Epstein component. |
| Gate candidate | Part (b) applied 2026-10-17 in the 3.3.0 gate candidate: the A3.2 Source line names Reisman, Gienapp & Stachowiak (2007) before Kania & Kramer. Part (c), A2.6, stays held for the A2 anchor re-review. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. Reisman covers what A3.2 already codes; Kania & Kramer did not (closes an unlogged gap). Removing Epstein Type 6 drops a poor-fit link (A2.6 keeps Mapp & Kuttner, direct, and Type 3). No code's scope changes. |

Framework deviation: none.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G2 (secondary frameworks in `frameworkBasis` in one gated CP) | Item 5 (Guskey (2002) in A1's `frameworkBasis`) moved to CP-12-29. A2's `frameworkBasis` not naming Epstein is also CP-12-29's (or the A2 re-review's) concern. |
| G10 (Source and `frameworkBasis` edits in one gate after PRs #62 and #66; no-prompt parts now) | The A3.2 Source line rides the shared gate. The `codebook_names` fixes land now. |
| A2-1, A2-2, G7 (accreditation FD after PR #62; S4.9 as written) | CP-12-11 puts A2 at 3/6 right after PR #62, before the gate. The A2.6 Source line would then be a further A2 change, so it is held for the A2 anchor re-review. |
| G14 (S176 re-reviewed with CP-09-01) | S176 (gold F1.9, alternates A2.6 and A3.1) is a watch row for the held A2.6 part; the A2 re-review takes whatever code Severin settles. |
| A3-1 (A3.1 FD, option (a)) | The taxonomy reviewer asked that A3.2's line be grounded before any A3.1 FD. CP-12-12 already grounds A3.2 in the registry; this line completes it. |
| Research-basis.md sentence on A1's split | Moved to CP-12-30 (docs), which owns that file. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| (a) `codebook_names`: "Guskey (2002)" on `guskey-2002-pd-evaluation`, "Reisman, Gienapp & Stachowiak (2007)" on `reisman-2007-advocacy-policy` | no | now. Both names already appear on live lines (Guskey on the A1.1 and A1.2 Source lines; Reisman on the A3.1 Source line and in A3's `frameworkBasis`), so the registry is only catching up (CLAUDE.md). |
| (b) A3.2 Source line | yes | shared gate after PRs #62 and #66 |
| (c) A2.6 Source line | yes | held for the A2 anchor re-review |
| (c) A2.6 `basis`; `epstein-six-types` A2.6 component and note | no, but they describe the Source change | held with the A2.6 Source line, so the registry never contradicts the live line |

## Problem

Recommendations "CP-B4-04 · Part A Source lines" bundled items 5, 11 and 12 so that one pair of
runs covers them. Item 5 has moved to CP-12-29 (G2). The two that remain:

11. **A2.6 cites "Epstein, Types 3 and 6".** Type 6 is community collaboration, which the CP-10-01
    verifier already judged a poor fit ("not family-engagement systems"), and taxonomically it
    belongs to A3.2.
12. **A3.2's Source line names only Kania & Kramer (2011), Collective Impact**, which sets itself
    apart from ordinary collaborations. CP-12-12 registers Reisman (2007) "strengthened alliances"
    (a3-01, SUPPORTED, direct) for A3.2. This CP names it on the line.

## Change

### (a) Registry, lands now (module of CP-12-10; full text in CP-12-11's appendix)

```python
CODEBOOK_NAMES = {
    'guskey-2002-pd-evaluation': ['Guskey (2002)'],
    'reisman-2007-advocacy-policy': ['Reisman, Gienapp & Stachowiak (2007)'],
}
```

### (b) A3.2 Source line, shared gate (prompt: "Source Framework:")

| Code | Before | After |
|---|---|---|
| A3.2 | Kania & Kramer (2011), Collective Impact. | Reisman, Gienapp & Stachowiak (2007), A Guide to Measuring Advocacy and Policy (strengthened alliances); Kania & Kramer (2011), Collective Impact (shared agenda and shared measurement). |

The line contains none of "partial", "located", "(verified)" or "VERIFY", which
`youthOutcomesV3.test.ts` forbids. Reisman is already in A3's `frameworkBasis` (CP-10-02), so the
line meets G2 with no `frameworkBasis` change.

### (c) A2.6, held for the A2 anchor re-review

Source line (prompt: "Source Framework:"):

| Code | Before | After |
|---|---|---|
| A2.6 | Mapp & Kuttner (2013), Dual Capacity-Building Framework (organizational capacity); Epstein, Types 3 and 6. | Mapp & Kuttner (2013), Dual Capacity-Building Framework (organizational capacity); Epstein, Type 3. |

`basis` (not in the prompt; moves with the line):

| Code | Before | After |
|---|---|---|
| A2.6 | `Epstein Types 3 and 6 (located); Mapp & Kuttner (2013) organizational capacity (verified).` | `Epstein Type 3 (verified, partial: school practices; Type 6 removed by CP-12-18); Mapp & Kuttner (2013) organizational capacity (verified).` |

This also corrects a stale tag: the registry has had `epstein-six-types` verified since CP-10-01.

Registry rows (moves with the line):

```python
COMPONENTS = {('epstein-six-types', 'A2.6'): 'Type 3 Volunteering (families as volunteers and audiences)'}
SUPPORT_NOTE = {('epstein-six-types', 'A2.6'): "Type 3 fits organizational systems for engaging families (CP-10-01 verifier). Type 6 ('Coordinate community resources and services ...') was removed from A2.6 by CP-12-18: the CP-10-01 verifier judged it community collaboration, not family-engagement systems. The framework describes school practices, so the fit stays partial."}
```

No new claim is needed. The A2.6 support excerpt (Type 3 text) and its fit are unchanged; only
the component and note narrow. **Coordination with CP-12-22 (R-06):** CP-12-22 moves
`epstein-six-types` to the Corwin 4th edition copy and moves A2.6's Type 3 row with it; that row
move is also an A2 change and waits for the same re-review. Whichever lands first, the other
re-points the A2.6 support to the Corwin Type 3 text (f1-05: "Improve recruitment, training, and
schedules to involve families as volunteers and audiences at the school").

The A2 re-review may take this part as drafted, or fold it into a re-anchored A2.6.

### `rulesText`, domain `hint`, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged.

## Dependencies

- **CP-12-12 first** (it lands now): the A3.2 Source line names a source whose A3.2 support
  CP-12-12 adds.
- **CP-12-10's module** must exist (this CP adds rows to it).
- **The A2.6 part** waits for the A2 anchor re-review that CP-12-11 starts.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| reisman-2007-advocacy-policy | verified; A3.2 direct after CP-12-12 | strengthened alliances: a3-01 SUPPORTED, "the level of coordination, collaboration and mission alignment among community and system partners," |
| kania-kramer-2011 | verified (direct) | common agenda, shared measurement |
| guskey-2002-pd-evaluation | verified (direct, CP-10-01) | name only (`codebook_names`) |
| epstein-six-types | verified (A2.6 fit partial) | Type 3 only (held part) |
| mapp-kuttner-2013 | verified (direct) | organizational capacity (unchanged; held part) |

## Verification requests

None.

## Gold impact

- **Rows expected to change code: none.** No definition or boundary changes.
- **Rows to watch in the gate (A3.2 part)** (a flip fails the CP unless it is argued as a
  correction, S4.4): S195, H090 (A3.2 must hold).
- **Rows to watch when the A2.6 part runs** (in or after the A2 re-review): S176 (F1.9,
  alternates A2.6 and A3.1; G14, Severin re-adjudicates it alongside CP-09-01, and the row is
  unchanged until then), S041, S098 (A2.4, alternate A2.6).
- New proposed rows: none here. A2.6 still has no adjudicated primary row; that is an A2
  re-review input and waits on G14 (S176).
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) is not used, in the gate or anywhere else.

## Test plan (shared two-run gate, S4.4 and S4.5)

The A3.2 line rides the single gate that also carries CP-12-16, CP-12-29 and the other Source
edits (SUMMARY, "Order of landing" step 2): one pair of runs on a branch with all of them,
against a baseline of the version they apply to:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/gate-2026-10/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/gate-2026-10/candidate-<version>-design.json --compare codebook-refinement/eval/gate-2026-10/baseline-<version>-design.json
```

In `youth_outcomes_v3.gold.csv` the pre-3.0 H### rows carry `set=heldout`, so `--set design`
does not score them. The batch 4 review treats them as design (they are not the separate
held-out file), and H090 is a watch row, so repeat both commands with `--set heldout` on **the
same file** and report those rows with the design rows. Never use
`youth_outcomes_v3.heldout.gold.csv`.

Pass: no adjudicated row flips; accuracy does not fall; rows whose primary code differs between
the two runs are reported as confusion candidates (S4.5). As the devil's advocate asked, also
report the share of A3.2 rows at low or medium confidence before and after (information, not a
gate).

Then `npm test`, `npm run typecheck`, `npm run typecheck:server`, `build_registry.py` (no diff on
a second run). **Not run yet** (the drafter's scratch run was refused by the permission system
and was not retried).

## Judge result

Filled in by `codebook-regression-judge`.
