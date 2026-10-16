# CP-12-18: Part A source lines (Guskey anchor for A1, Epstein Type 6 off A2.6, Reisman on A3.2)

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Domain A1 `frameworkBasis`. Source lines: A2.6, A3.2. `basis`: A2.6. Registry: `epstein-six-types` (A2.6 support component and note), `codebook_names` on `guskey-2002-pd-evaluation` and `reisman-2007-advocacy-policy`. Docs: one sentence in `docs/codebook/research-basis.md`. No definition, include, exclude, useInstead, example or rulesText changes. |
| Version bump | PATCH, against whatever version is current at apply time (after CP-12-10..12; after PR #62 / PR #66 if they merge first) |
| Requirement served | R1 frameworks |
| Status | draft (batch 4 research review, 2026-10-16); not applied. **Reaches the coding prompt: two-run design-set gate required.** |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. Guskey is already A1.1's and A1.2's direct source and becomes visible as the anchor. Removing Epstein Type 6 drops a poor-fit link (A2.6 keeps Mapp & Kuttner, direct, and Type 3). Reisman covers what A3.2 already codes; Kania & Kramer did not (closes an unlogged gap). No code's scope changes. |

Framework deviation: none.

## Problem

Recommendations "CP-B4-04 · Part A Source lines" bundle items 5, 11 and 12 so that one pair of
runs covers them:

5. **A1's structure follows Guskey (2002) Levels 2 and 4, but `frameworkBasis` does not name
   Guskey.** It names Learning Forward, which is verified only at `fit: partial` (design standards,
   not outcome levels). `research-basis.md` says the split "follows Learning Forward's distinction".
   Guskey is verified direct for A1.1 and A1.2 (CP-10-01). Whether this matters depends on
   decision B3-1 (does a source close a fidelity gap only when its framework is in
   `frameworkBasis`?).
11. **A2.6 cites "Epstein, Types 3 and 6".** Type 6 is community collaboration, which the CP-10-01
    verifier already judged a poor fit ("not family-engagement systems"), and taxonomically it
    belongs to A3.2.
12. **A3.2's Source line names only Kania & Kramer (2011), Collective Impact**, which sets itself
    apart from ordinary collaborations. CP-12-12 registers Reisman (2007) "strengthened alliances"
    (a3-01, SUPPORTED, direct) for A3.2. This CP names it on the line.

## Change

### `codebooks/youthOutcomesV3.data.ts`: Domain A1 `frameworkBasis` (prompt: "Framework Basis:")

Before:

```
Learning Forward (2022) Standards for Professional Learning; U.S. Surgeon General (2022) Framework for Workplace Mental Health & Well-Being.
```

After:

```
Guskey (2002), evaluating professional development: participants' learning (Level 2) and use of new knowledge and skills (Level 4); Learning Forward (2022) Standards for Professional Learning; U.S. Surgeon General (2022) Framework for Workplace Mental Health & Well-Being.
```

Only verified wording is used: the Level 2 and Level 4 headings come from the CP-10-01 verifier's
notes. Nothing like "five levels" is claimed. If decision B3-1 goes the devil's advocate's way
(registry only, no `frameworkBasis` additions), drop this item; items 11 and 12 stand alone.

### Source lines (prompt: "Source Framework:")

| Code | Before | After |
|---|---|---|
| A2.6 | Mapp & Kuttner (2013), Dual Capacity-Building Framework (organizational capacity); Epstein, Types 3 and 6. | Mapp & Kuttner (2013), Dual Capacity-Building Framework (organizational capacity); Epstein, Type 3. |
| A3.2 | Kania & Kramer (2011), Collective Impact. | Reisman, Gienapp & Stachowiak (2007), A Guide to Measuring Advocacy and Policy (strengthened alliances); Kania & Kramer (2011), Collective Impact (shared agenda and shared measurement). |

Neither line contains "partial", "located", "(verified)" or "VERIFY", which
`youthOutcomesV3.test.ts` forbids. Reisman is already in A3's `frameworkBasis` (CP-10-02), so the
A3.2 line meets B3-1 either way. A2's `frameworkBasis` does not name Epstein. Under B3-1 "yes",
that gap already exists today and is not widened here; it belongs to batch 3's frameworkBasis
CP (B3-CP4 #27) or an A2 one.

### `basis` (not in the prompt)

| Code | Before | After |
|---|---|---|
| A2.6 | `Epstein Types 3 and 6 (located); Mapp & Kuttner (2013) organizational capacity (verified).` | `Epstein Type 3 (verified, partial: school practices; Type 6 removed by CP-12-18); Mapp & Kuttner (2013) organizational capacity (verified).` |

This also corrects a stale tag: the registry has had `epstein-six-types` verified since CP-10-01.

### Registry (module of CP-12-10; full text in CP-12-11's appendix)

```python
COMPONENTS = {('epstein-six-types', 'A2.6'): 'Type 3 Volunteering (families as volunteers and audiences)'}
SUPPORT_NOTE = {('epstein-six-types', 'A2.6'): "Type 3 fits organizational systems for engaging families (CP-10-01 verifier). Type 6 ('Coordinate community resources and services ...') was removed from A2.6 by CP-12-18: the CP-10-01 verifier judged it community collaboration, not family-engagement systems. The framework describes school practices, so the fit stays partial."}
CODEBOOK_NAMES = {
    'guskey-2002-pd-evaluation': ['Guskey (2002)'],
    'reisman-2007-advocacy-policy': ['Reisman, Gienapp & Stachowiak (2007)'],
}
```

No new claim is needed. The A2.6 support excerpt (Type 3 text) and its fit are unchanged, and
only the component and note narrow. `codebook_names` follows CLAUDE.md ("when a codebook citation
line names a framework, add that name"). **Coordination with batch 3 (R-06):** B3-CP2 item 16
moves `epstein-six-types` to the Corwin copy (f1-03/f1-05). If that lands first, the A2.6 support
must be re-pointed to the Corwin Type 3 text (f1-05: "Improve recruitment, training, and
schedules to involve families as volunteers and audiences at the school"). If this CP lands
first, B3-CP2 carries the A2.6 row.

### `docs/codebook/research-basis.md` (docs only; item 5)

A1 "Structure and fit", before:

```
**Structure and fit.** Adult learning vs practice change follows Learning Forward's
distinction between educator learning and changes in practice.
```

After:

```
**Structure and fit.** Adult learning vs practice change follows Guskey's (2002) Level 2
(participants' learning) and Level 4 (participants' use of new knowledge and skills);
Learning Forward's standards (partial) describe how professional learning is designed.
```

The rest of research-basis.md (stale "located" tags, the A3.1 pointer to CP-10-02, A2 and A3-B as
codebook groupings) is later-cycle item 9 and is not bundled here.

### `rulesText`, domain `hint`, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged.

## Dependencies

- **CP-12-12 first, or in the same release**: the A3.2 Source line names a source whose A3.2
  support CP-12-12 adds.
- **CP-12-10's module** must exist (this CP adds rows to it).
- Before any A3.1 FD (B4-4), per the taxonomy reviewer.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| guskey-2002-pd-evaluation | verified (direct, CP-10-01) | Level 2, Level 4 |
| epstein-six-types | verified (A2.6 fit partial) | Type 3 only |
| mapp-kuttner-2013 | verified (direct) | organizational capacity (unchanged) |
| reisman-2007-advocacy-policy | verified; A3.2 direct after CP-12-12 | strengthened alliances: a3-01 SUPPORTED, "the level of coordination, collaboration and mission alignment among community and system partners," |
| kania-kramer-2011 | verified (direct) | common agenda, shared measurement |

## Verification requests

None.

## Decisions for Severin

- **D (timing).** Recommended: at the next gate, after CP-12-10..12.
- **B3-1 (frameworkBasis rule).** Governs item 5. Recommended as in batch 3: yes, add the name.
- **Eval cost.** Three prompt strings change, so the devil's advocate's cost note applies: one
  pair of runs covers all three items.

## Gold impact

- **Rows expected to change code: none.** No definition or boundary changes.
- **Rows to watch in the gate** (a flip fails the CP unless it is argued as a correction, S4.4):
  S195, H090 (A3.2 must hold); S176 (F1.9, alternates A2.6 and A3.1); S041, S098 (A2.4, alternate
  A2.6); S043, S083, S142, S146, S244, H014 (A1.1); S204, S148 (A1.2); S149 (A1.3).
- New proposed rows: none. A2.6 still has no adjudicated primary row (taxonomy reviewer); that
  waits on B3-6 (S176).
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) is not used, in the gate or anywhere else.

## Test plan (two-run gate, S4.4 and S4.5)

On a branch with exactly this edit, against a baseline of the version it applies to:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-18/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-18/candidate-<version>-design.json --compare codebook-refinement/eval/cp-12-18/baseline-<version>-design.json
```

In `youth_outcomes_v3.gold.csv` the pre-3.0 H### rows carry `set=heldout`, so `--set design`
does not score them. The review treats them as design (recommendations, last line), and H090 and
H014 are watch rows. So repeat both commands with `--set heldout` on **the same file**. Never use
`youth_outcomes_v3.heldout.gold.csv`. Severin decides whether those H-row runs count as a gate or
as information.

Pass: no adjudicated row flips; accuracy does not fall; rows whose primary code differs between
the two runs are reported as confusion candidates (S4.5). The devil's advocate asked for one more
number: report the share of A3.2 rows at low or medium confidence before and after (it is
information, not a gate).

Then `npm test`, `npm run typecheck`, `npm run typecheck:server`, `build_registry.py` (no diff on
a second run). **Not run yet** (the drafter's scratch run was refused by the permission system
and was not retried).

## Judge result

Filled in by `codebook-regression-judge`.
