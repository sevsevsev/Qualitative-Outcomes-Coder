# CP-08-01: Build Youth Outcomes Codebook 3.0 as a separate codebook

| Field | Value |
|---|---|
| Type | ADD_CODE · SPLIT · MERGE · RENAME (a restructure; PLAN phase 4, so one CP instead of one per kind of change) |
| Codes touched | All 87 codes of 2.5.1 map into 98 codes of 3.0.0 (`v3/crosswalk-2.5.1-to-3.0.0.csv`). `original` itself is unchanged. |
| Version bump | MAJOR: a new codebook `youth_outcomes_v3` at 3.0.0, beside `original` 2.5.x |
| Requirement served | R1 frameworks · R2 breadth · R3 tie-breakers · R4 drift |
| Status | ready-to-test. Structure approved by Severin 2026-09-26 ("I am good with 3.0 proposal"). The regression and held-out gates below still apply before 3.0 replaces 2.5.x anywhere. |
| Enum cost | 160 for 3.0.0 (13 domains counted twice, 98 codes + "none", unchanged smaller enums). 2.5.1 stays at 147. Under the 180 test cap and the 165 redesign line (S2.3). |
| Framework deviation | New FD-P01 to FD-P20 (three closed at build time: FD-P10, FD-P11, FD-P17). See `DEVIATIONS.md`. |

## Problem

2.x mixes axes across levels, with some domains that are constructs, some populations,
some settings and one a delivery condition. Its granularity is uneven (22 SEL codes, 2
opportunity-to-learn codes), 32 adjudicated gold rows were tagged "no good fit", and
several citations have no working source. Full evidence: `docs/codebook/current-inventory.md`.

## Why this is the smallest fit (STANDARDS S2.2)

The problems are structural, so hints, examples or single new codes can't fix them. The
cheaper steps were tried in cycles 01 to 07 (CP-01-xx, CP-04-xx, CP-07-xx). The v2 draft
tried 18 domains, and domain agreement fell from 94.4% to 88.9% (`v2/STRUCTURE.md`).
3.0 uses 13 domains and puts the finer structure in categories. Rationale:
`docs/codebook/research-basis.md`.

## Change

- **New files**:
  - `codebooks/youthOutcomesV3.data.ts`: the single source of truth, imported once from
    the approved `docs/codebook/proposed-codebook.md` by `v3/import_proposed.py`.
  - `codebooks/youthOutcomesV3.ts`: builds the prompt, enums and hints from the data.
  - `codebooks/youthOutcomesV3.types.ts`.
- **Registered** in `codebooks/index.ts` as `youth_outcomes_v3`, labeled "Youth Outcomes
  Codebook 3.0 (testing)". It is not the default. It is off the public explorer site
  (`DEFAULT_EXPLORER_CODEBOOKS` stays `['original']`) until Severin makes it live.
- **Prompt**:
  - The rules carry forward every 2.5.1 rule (splitting, uncoded, confidence, target
    population, Subject Area, tie-breakers 1 to 13), with codes translated.
  - The three new rules from the proposal come first: who changes, output vs outcome,
    and most specific definition.
  - The definitions give each code a Definition, Include, Exclude, Use instead and
    Source Framework line, and a typical example.
  - Examples that are held-out gold statements are left out of the prompt, which a test
    enforces.
  - Source Framework lines name only verified or located sources. Partial and [VERIFY]
    citations stay in the data's `basis` field and never reach the prompt.
- **Explorer and feedback**: the code parsers accept letter-prefixed codes ("Y1.4",
  "Domain Y1."). `sources/youth_outcomes_v3.sources.json` is registered in
  `services/codebookSources.ts`.
- **Source registry** (`v3/build_registry.py`):
  - 78 sources and 133 supports, all from existing verification records or the re-review
    below.
  - Six codes are codebook-defined and listed as extensions, each with an FD entry: Y4.12,
    Y6.4, Y6.5, A2.2, A2.4 and A3.1.
- **Crosswalk** (`v3/build_crosswalk.py`), generated from the approved map: 62
  one-to-one, 18 merge and 7 split rows. `codebooks/youthOutcomesV3.test.ts` checks that
  every 2.x code maps exactly once, targets exist, one-to-one rows stay one-to-one, and
  every 3.0 code is reached or new.

## Anchor re-review before build (S4.9)

The approved proposal had Y3 (2 of 5) and Y5 (3 of 6) over the drift budget. A blind
verifier checked nine claims.

- **Y3:** the anchor was widened with Search Institute Developmental Relationships
  (parents and peers) and the Developmental Assets Support category. Y3.4 is now
  Framework.
- **Y5:** the anchor was replaced with Nagaoka et al. (2015), which names agency,
  integrated identity and mindsets, plus the Search Institute Positive Identity assets.
  Y5.1 and Y5.4 are now Framework.
- **Result:** both domains are under a third (Y3 20%, Y5 17%). Details are in
  `DEVIATIONS.md`, "Anchor re-review".

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| nagaoka-2015-foundations | verified (2026-09-26) | agency; integrated identity; mindsets |
| search-40-assets | verified content, year unconfirmed (2026-09-26) | Support 1-2; Positive Identity 37-40 |
| search-developmental-relationships | verified (2026-09-26 re-check) | relationships with parents and peers |
| all others | as recorded in the live registry or the v2 candidate registry | see `sources/youth_outcomes_v3.sources.json` |

## Verification requests

None new. Open leads stay [VERIFY]:
- ADA Title II / Section 504 for A2.4;
- a policy-change framework for A3.1;
- NCSS C3 Dimension 4 for Y6.4 and Y6.5;
- CASEL "resisting negative social pressure" for Y4.12.

## Gold impact

- `gold/youth_outcomes_v3.gold.csv` proposes a 3.0.0 code for all 345 rows, with
  status=proposed. The primary suggestion comes from the adjudicated v2-draft code; the
  crosswalk route is an alternate.
- 116 rows are flagged `needs_review`:
  - 69 where the two routes disagree;
  - the rest because their 2.x code was split, or because the v2 code has no 3.0 home.
- Severin adjudicates. No row is set to adjudicated here.
- **2026-09-26:** Severin adjudicated all 345 rows on the review page. He decided the 116
  flagged rows one by one (8 changed, 1 codebook gap) and confirmed the 229 others in one
  step. See `v3/review/README.md`.
- **Held-out caveat:** the 3.0 structure was designed while looking at all 345 adjudicated
  rows, including the 90 held-out rows (for example, H046 and H048 justify Y7.7). So
  scores on those 90 rows are **not** held-out evidence for 3.0 (CLAUDE.md: "A held-out
  set that was used to make fixes is no longer held out"). A claim that 3.0 generalizes
  needs a fresh held-out set coded blind by the two blind coders and adjudicated by
  Severin.

## Test plan (before 3.0 replaces 2.5.x)

1. Severin adjudicates the proposed 3.0 gold, starting with the 116 flagged rows.
2. Two preview runs of the 255 design statements with "Youth Outcomes Codebook 3.0
   (testing)" selected, compared with the 2.5.x baseline on the same rows. A 2.x-to-3.0
   comparison is only meaningful against each codebook's own adjudicated gold.
3. A live schema check: the first preview run confirms Gemini accepts the 160-value
   footprint.
4. A fresh held-out set for any generalization claim.

## Judge result

Pending. The judge's G1 to G4 compare a candidate with a baseline on the same codebook.
For a new codebook, the comparison is 3.0 on its own gold against 2.5.x on its gold, and
the judge should report both and return NEEDS-HUMAN.
