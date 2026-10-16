# CP-12-12: A3 citation fixes (registry and `basis`)

**In plain words.** Cross-Sector Partnerships (A3.2) cites only the Collective Impact article,
which describes something larger than the ordinary two-organization partnerships the code
actually holds. This change records two advocacy-evaluation guides that do name ordinary
partnerships and alliances (Reisman and colleagues, 2007, as a direct fit; Coffman, 2009, as a
partial one), so the code is honestly sourced without changing what it covers. It also moves the
collective-efficacy study behind Community Conditions & Collective Efficacy (A3.3) to its PubMed
record. Nothing the coding model reads changes, so it lands now; naming Reisman on the code's
printed source line waits for the shared test run, in a separate change.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | A3.2 (`basis`; two new registry supports: Reisman 2007 direct, Coffman 2009 partial). A3.3 (`basis`; registry `sampson-1997` URL and fit). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis` or rulesText changes. The A3.2 Source line change is in CP-12-18. |
| Version bump | PATCH, against whatever version is current at apply time (3.1.4 today; after PR #62 / PR #66 if they merge first) |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. Reisman "strengthened alliances" covers the ordinary partnerships A3.2 already codes. Kania & Kramer alone did not (they set collective impact apart from "most collaborations"), so this closes an unlogged gap rather than opening an FD. A3 drift stays 0/3 here; the A3.1 FD decided under A3-1 takes it to 1/3 later. |

Framework deviation: none (closes an unlogged A3.2 gap; A3 stays 0/3).

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G8 (official copy; secondary host only with a recorded bibliographic match) | Sampson moves to PubMed (official). Reisman is read on IssueLab, the registry's existing URL for it. Coffman's A3.2 excerpt is read on the County Health Rankings copy, the registry's existing URL; the a3-02 verifier recorded the match ("This is the full HFRP (Coffman, 2009) document") and the note repeats it. No publisher copy of Coffman has been verified; moving it is for CP-12-28's sweep. |
| G10 (no-prompt CPs land now) | All of this CP lands now. |
| A3-1 option (a) (A3.1 codebook-defined FD after two practice rows) | A3 will go to 1/3 when that FD lands. This CP must land first, so that A3.2 is grounded and A3 cannot reach 2/3 (taxonomy reviewer). |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| A3.2, A3.3 `basis` | no | now |
| Registry: Reisman and Coffman A3.2 supports; Sampson URL, excerpt and fit | no | now |
| A3.2 Source line naming Reisman | yes | CP-12-18, in the shared gate after PRs #62 and #66 |

## Problem

From the recommendations ("Act now", CP-B4-03, items 12 to 14):

12. **A3.2 cites only Kania & Kramer (2011), who exclude "most collaborations"**, while the code
    holds ordinary two-party partnerships (about 54 LM texts; model codes, not gold) and
    adjudicated H090 ("increased collaboration"). a3-01 (SUPPORTED) reads Reisman, Gienapp &
    Stachowiak (2007), "Strengthened alliances". Reisman is already registered (for A3.1) and is
    already in A3's `frameworkBasis`. The devil's advocate called it "the one source change I
    back without reservation". The registry support lands here; the Source line lands in CP-12-18.
13. **Coffman (2009) "Partnerships or Alliances"** (a3-02, SUPPORTED) fits, but it is framed
    within an advocacy strategy. It is a registry row at `fit: partial` with no Source line name,
    which answers the devil's advocate's "redundant" objection.
14. **Sampson et al. (1997) were read on a course-reading copy** (CP-10-01: partial "only because
    of that host"). a3-03 (SUPPORTED) reads the definition on PubMed.

## Change

### `codebooks/youthOutcomesV3.data.ts`: `basis` (not in the prompt)

| Code | Before | After |
|---|---|---|
| A3.2 | `Kania & Kramer (2011), Collective Impact (verified).` | `Reisman, Gienapp & Stachowiak (2007), outcome category strengthened alliances (verified, direct; claim a3-01, CP-12-12); Coffman (2009), partnerships or alliances (verified, partial: advocacy framing; claim a3-02, registry only); Kania & Kramer (2011), Collective Impact (verified, direct for shared agenda and shared measurement).` |
| A3.3 | `Sampson, Raudenbush & Earls (1997) (verified).` | `Sampson, Raudenbush & Earls (1997), collective efficacy (verified, direct, on the PubMed record; claim a3-03, CP-12-12).` |

### Registry

The module and record are those described in CP-12-10 §Registry; the full module text is in
CP-12-11's appendix. This CP's rows:

```python
URLS = {'sampson-1997': 'https://pubmed.ncbi.nlm.nih.gov/9252316/'}
SOURCE_EXCERPT = {'sampson-1997': 'a3-03'}
SUPPORT_RECHECK = {('sampson-1997', 'A3.3'): ('a3-03', 'direct', None)}
NEW_SUPPORTS = [
    ('reisman-2007-advocacy-policy', 'A3.2',
     'outcome category: strengthened alliances (coordination, collaboration and mission alignment among community and system partners)',
     'a3-01', 'direct', None),
    ('coffman-2009-advocacy-evaluation', 'A3.2',
     'interim outcome: partnerships or alliances (new or stronger organizational relationships)',
     'a3-02', 'partial',
     "Verdict SUPPORTED (claim a3-02): the measure 'New or stronger organizational relationships developed' appears word for word. Fit set to partial by the batch 4 review: the outcome is defined within an advocacy strategy, and it also counts relationships with individuals. Read on the County Health Rankings copy; the verifier recorded it as the full HFRP (Coffman, 2009) document. Supporting row only; not named in the A3.2 source line."),
]
NOTES = {'sampson-1997': 'URL moved 2026-10-16 (CP-12-12) to the PubMed record (claim a3-03, SUPPORTED: the definition is in the abstract; the fetched page did not show author names). The full text was read in CP-10-01 on a course-reading copy.'}
```

- The Coffman fit is set explicitly to partial against a SUPPORTED verdict, as CP-11-01 did where
  a claim covers only part of a code. The note says why. CP-12-11's appendix carries the same
  note text; the two copies are kept identical when the module is written.
- The PubMed page carries only the abstract. The status stays "verified" because CP-10-01 read
  the full article; PubMed is the official record for the definition the code relies on (G8).
- The Reisman excerpt is the verifier's (a3-01). R-17's re-fetch warning was about the
  researcher's excerpt, not the verifier's.

### `rulesText`, Source lines, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged. Between this CP and the gate, the registry and `basis` name Reisman for A3.2 while the
A3.2 Source line still names only Kania & Kramer. That is consistent (a registry support need not
be named) but incomplete; CP-12-18 closes it at the gate.

## Order

- Lands now (G10), and before the A3.1 FD that decision A3-1 opens. That FD is blocked on two
  adjudicated A3.1 practice rows (G11, A3-1); see CP-12-19 §Prerequisite.

## Sources

| Registry ID | Status | Component relied on | claim_id and verifier excerpt |
|---|---|---|---|
| reisman-2007-advocacy-policy | verified; new A3.2 support, direct | outcome category strengthened alliances | a3-01 SUPPORTED: "the level of coordination, collaboration and mission alignment among community and system partners," |
| coffman-2009-advocacy-evaluation | verified; new A3.2 support, partial | partnerships or alliances | a3-02 SUPPORTED: "Mutually beneficial relationships with other organizations or individuals who support or participate in an advocacy strategy." |
| sampson-1997 | verified (partial → direct) | collective efficacy | a3-03 SUPPORTED: "defined as social cohesion among neighbors combined with their willingness to intervene on behalf of the common good" |

Not used: a3-04 (PARTIAL; the codebook's inference, rejected), a3-05 (rejected: it would make
A3.3 a catch-all), a3-06 (PARTIAL, secondary; later-cycle items 1 and 2).

## Verification requests

None.

## Gold impact

- Rows expected to change code: none (prompt unchanged).
- Rows the edited citations rest on: S195, H090 (A3.2); S154 (A3.3).
- New proposed rows: none.
- Held-out gold was not read.

## Test plan

`npm test`, both typechecks, and `build_registry.py` run twice with no diff. **Not run yet** (the
drafter's scratch run was refused by the permission system and was not retried).

## Judge result

Not run.
