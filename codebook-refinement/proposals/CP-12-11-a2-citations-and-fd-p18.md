# CP-12-11: A2 citation fixes, the FD-P18 anchor line, and the A2.1 accreditation deviation

**In plain words.** Participant & Family Satisfaction (A2.2) has been resting on an Urban
Institute source that was never actually recorded; this change records the Urban Institute's 2006
outcome framework instead, which names participant satisfaction but not families or safety, and
corrects the matching deviations-log entry. Program Quality (A2.1) includes "accreditation", which
no source covers, so, as you decided, it is logged as a codebook-defined part of the code. That
puts three of the six Program Quality, Access & Reach codes on the deviations list, more than the
one-third limit, so a review of that domain's anchor framework starts and no other change to the
domain may land until it ends. The other repairs are bookkeeping: a government copy of the
education law behind Access to Resources (A2.3), a note that "facilities" in A2.3 waits for that
review, and a narrower, corrected citation for Participation, Dosage & Reach (A2.5). Nothing the
coding model reads changes; it lands right after the open pull request #62, whose A2 changes go
first.

| Field | Value |
|---|---|
| Type | CITATION_FIX, with the deviation-log entries it requires (recommendations "CP-B4-02"; decisions A2-1 and A2-4). Nothing reaches the prompt. |
| Codes touched | A2.1 (`fidelity`, new `deviation`, `basis`). A2.2 (`basis`; FD-P18 text; new registry source). A2.3 (`basis`; registry `essa-4109-tech-capacity`; status note on `digital-equity-act` and `digital-equity-act-1723`, shared with F1.6). A2.5 (`basis`; registry `weiss-little-bouffard-2005` component and `cite_as`). A2.6, F1.7, F1.8 (registry note on `mapp-kuttner-2013` only). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis` or rulesText changes. A2.4 and A2.5 scope (PR #62) are not touched. |
| Version bump | PATCH, against whatever version is current at apply time (after PR #62, decision A2-2; after PR #66 too if it merges first) |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new FD-P52 (provisional id; renumbered at merge): A2.1, adapted, codebook-defined element "accreditation", counted. Changed FD-P18 (text only). A2 drift goes from 2/6 to 3/6 (50%, over the line): S4.9 starts the A2 anchor re-review, and no further A2 change lands until it ends (G7). |

Framework deviation: new FD-P52 (provisional id), A2.1 codebook-defined element, counted; changed FD-P18 (text only); A2 at 3/6, over the line.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| A2-1 (log accreditation as codebook-defined) | New FD-P52. A2.1 becomes adapted. A2 goes to 3/6 and the A2 anchor re-review starts. |
| A2-2 (PR #62's A2.4 and A2.5 CPs land first) | This CP lands after PR #62 merges, so A2 crosses the line only after PR #62's A2 work is in. |
| A2-3 (keep Mapp & Kuttner 2013; note Version 2) | Registry note only; no support change. |
| A2-4 (keep A2.3 "facilities" with a `basis` note until the re-review) | One clause in A2.3's `basis`; no FD for facilities now. The re-review decides it. |
| A2-5 (drop A2.4's "(or another group facing barriers)") | Note for PR #62 only (below); this CP does not edit A2.4. |
| G3 (a partial fit avoids an FD only when the source is broader than the code) | The Urban framework is narrower than A2.2 (no families, no safety), so FD-P18 stays open and A2.2 stays codebook-defined. |
| G7 (S4.9 as written) | After FD-P52, every further A2 change waits for the re-review (list below). |
| G8 (official copy) | ESSA moves to govinfo. The Urban PDF and ERIC record are the publisher's and ED's own pages. Mapp Version 2: dualcapacity.org (publisher) redirects to its own Squarespace-hosted PDF; the verifier recorded the suggested citation from dualcapacity.org. |
| G10 (no-prompt CPs land now) | All of this CP is no-prompt; "now" here means right after PR #62 (A2-2). |
| G14 (S176 re-reviewed with CP-09-01) | Not touched here. S176 stays gold F1.9 until Severin re-adjudicates it alongside CP-09-01; the code he settles is an input to the A2 re-review (A2.6 has no adjudicated primary row). |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| A2.1 `fidelity`, `deviation`, `basis`; FD-P52; drift table | no | after PR #62 (A2-2) |
| A2.2, A2.3, A2.5 `basis` | no | same release as FD-P52 |
| FD-P18 text | no | same release |
| Registry: Urban COF (new), ESSA URL and fit, Weiss component and `cite_as`, DEA and Mapp notes | no | same release |
| (none) | yes | nothing here waits for the gate. The A2.2 Source line stays as it is (see "Settled by the drafter"). |

**Ordering inside A2.** Everything in this CP lands in one release, after PR #62. Because the
release puts A2 over the line, these A2 items, all queued elsewhere, may not land after it until
the re-review ends: CP-12-18's A2.6 Source line (Epstein Type 6), CP-12-22's A2.6 Epstein row
move, the A2.4 re-anchor on CDC Strategies and ESSA 6318(f), and the A2.5 21st CCLC APR row. See
"Not resolved here".

## Problem

From the recommendations ("Act now", CP-B4-02, items 6 to 10; item 11 is in CP-12-18) and
decisions A2-1 and A2-4:

6. **A2.2's `basis` and FD-P18 name a source that is not in the registry** ("Urban Institute
   Candidate Outcome Indicators, mentoring"). That breaks S1.1. a2-01 (PARTIAL) and a2-11
   (SUPPORTED) read the Urban Institute's *Building a Common Outcome Framework* (2006), which
   names satisfaction as a program-centered outcome. Families are not covered, and neither is
   perceived safety, which adjudicated row H002 depends on.
7. **ESSA 7119(a)(2) was read only on Cornell LII** (CP-10-01 note: "re-check on a government
   copy before upgrading"). a2-14 (SUPPORTED) reads it on govinfo.
8. **Digital Equity Act.** The review reports that the Act's grant programs were terminated
   while the statute stands. Those news items were not filed as claims (R-07), so they cannot be
   cited. One neutral status note covers both registry entries.
9. **Weiss, Little & Bouffard (2005).** The registry component ("participation measures") claims
   more than the abstract shows. a2-10 (SUPPORTED) confirms "participation = enrollment +
   attendance + engagement", and says 105 is the issue number, not a volume.
10. **Mapp & Kuttner (2013) vs Version 2 (2019).** One registry entry serves F1.7, F1.8 and A2.6.
    a2-13 (SUPPORTED) reads Version 2 at the publisher URL, but that PDF names no author or year.

Two more items come from Severin's decisions rather than the act-now list:

- **A2.1 "accreditation" has no source (decision A2-1).** A2.1's definition ends "and
  accreditation" and its include lists "accreditation"; its `basis` already says "accreditation
  not covered". No source naming accreditation as assessed program quality was found. Dropping
  the word flips adjudicated **S075** ("achieve accreditation from the state afterschool
  network", gold A2.1). It is an unlogged codebook-defined element.
- **A2.3 "facilities" has no source (decision A2-4).** The three connectivity statutes cover
  devices and internet. About 5 real-run texts depend on "facilities" (practitioner reviewer:
  school facilities, gardens, a mini-pitch); no design row does.

## Change

### `codebooks/youthOutcomesV3.data.ts`: `fidelity`, `deviation` and `basis` (not in the prompt)

| Code | Field | Before | After |
|---|---|---|---|
| A2.1 | `fidelity` | `"framework"` | `"adapted"` |
| A2.1 | `deviation` | (absent) | `"FD-P52"`, inserted after `fidelity` |
| A2.1 | `basis` | `Weikart Center Youth Program Quality pyramid (verified; accreditation not covered).` | `Weikart Center Youth Program Quality pyramid (verified; accreditation not covered: a codebook-defined element, FD-P52, CP-12-11).` |
| A2.2 | `basis` | `Urban Institute Candidate Outcome Indicators, mentoring (partial: youth only). Hybrid: family satisfaction is a codebook extension of it.` | `The Urban Institute & The Center for What Works (2006), Building a Common Outcome Framework to Measure Nonprofit Performance, program-centered outcomes: satisfaction (verified, partial: participants only; families and perceived safety are not covered; claim a2-01, CP-12-11). Hybrid: family satisfaction and perceived quality and safety are codebook-defined (FD-P18).` |
| A2.3 | `basis` | `47 CFR 54 Subpart Q (verified); ESSA 20 U.S.C. 7119(a)(2) (verified); Digital Equity Act 47 U.S.C. 1723(c)(1)(B) (verified).` | `47 CFR 54 Subpart Q (verified); ESSA 20 U.S.C. 7119(a)(2) (verified, direct, on govinfo; claim a2-14, CP-12-11); Digital Equity Act 47 U.S.C. 1723(c)(1)(B) (verified). "Facilities" is not covered by these sources; it is kept until the A2 anchor re-review decides it (decision A2-4, CP-12-11).` |
| A2.5 | `basis` | `UW-Madison Extension (2020) logic model, Outputs (verified); Weiss, Little & Bouffard (2005) (located).` | `UW-Madison Extension (2020) logic model, Outputs (verified); Weiss, Little & Bouffard (2005), participation equation: enrollment and attendance (located: ERIC abstract only; component narrowed by CP-12-11, claim a2-10).` |

If PR #62 has already rewritten any of these `basis` strings, apply the same additions to the
merged text.

### `codebook-refinement/DEVIATIONS.md`: new FD-P52

Inserted after the last 3.x entry in place at apply time, before "## Drift count for codebook 3.x
(S4.9)".

```markdown
### FD-P52 · A2.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Weikart Center, Youth Program Quality Assessment (program quality pyramid) (verified).
- **Departs:** the element "accreditation" (definition "... and accreditation"; include "accreditation"). The pyramid describes observed program quality; no verified source names accreditation as a program-quality outcome.
- **Evidence:** S075 ("achieve accreditation from the state afterschool network", adjudicated design row, gold A2.1). Dropping the word would flip it.
- **Alternative considered:** a `basis` note only until the A2 re-review (devil's advocate, practitioner); ground accreditation as assessed program quality once a source verifies (fidelity reviewer; none found in the batch 4 review); drop "accreditation" (rejected by all four reviewers: flips S075).
- **Decided in:** CP-12-11 (batch 4 research review; decisions A2-1 and A2-2 settled by Severin 2026-10-16). Provisional id. Starts the A2 anchor re-review (S4.9).
- **Revisit:** in the A2 anchor re-review; or if a verified source names accreditation as assessed program quality (unverified lead, none found).
```

### `codebook-refinement/DEVIATIONS.md`: FD-P18 (changed, text only)

Before:

```markdown
- **Anchor:** Urban Institute Candidate Outcome Indicators, mentoring (partial: youth
  only).
- **Departs:** covers family satisfaction too, which the source doesn't.
- **Evidence:** H002, S137.
- **Alternative considered:** route satisfaction to Y2.1 (as 2.4.0 did by force).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified satisfaction framework is found.
```

After:

```markdown
- **Anchor:** The Urban Institute & The Center for What Works (2006), Building a Common Outcome Framework to Measure Nonprofit Performance, program-centered outcomes: satisfaction (verified, partial; claim a2-01): "It includes program-centered outcomes (reach, participation, satisfaction);". Registered by CP-12-11; the "Candidate Outcome Indicators, mentoring" source named here before was never in the registry.
- **Departs:** covers families' satisfaction, and participants' and families' perceptions of the program's quality and safety, which the framework does not name. The participant half is only a partial fit: the indicator wording "participant satisfaction with the program" was not in the fetched text.
- **Evidence:** H002, S137.
- **Alternative considered:** route satisfaction to Y2.1 (as 2.4.0 did by force); SAMHSA URS Maine output table (claim a2-02, PARTIAL; rejected: one state's table, family respondents unconfirmed); drop "safety" (rejected: flips H002).
- **Decided in:** 3.0 proposal (PR #33); anchor line corrected by CP-12-11 (2026-10-16).
- **Revisit:** in the A2 anchor re-review; or if a verified source names family satisfaction or perceived program safety as an outcome (unverified leads: national URS/YSS-F documentation).
```

Status, Fidelity and Case are unchanged (open, codebook-defined, codebook-defined). A2.2 stays
codebook-defined, not adapted: the anchor is partial even for participants, and under G3 a
source narrower than the code does not avoid an entry. Either label counts.

### `codebook-refinement/DEVIATIONS.md`: drift table

Intro sentence: append one clause, after any clause another CP has added first:

```
..., and for CP-12-11 (2026-10-16), which opened FD-P52 in A2 and started the A2 anchor re-review.
```

A2 row, before → after (if PR #62 has moved A2.4 to adapted, it still counts, so the row is the
same):

```
| A2 Quality & access | 6 | 2 (A2.2, A2.4) | 33% | no (at the line) |
| A2 Quality & access | 6 | 3 (A2.1, A2.2, A2.4) | 50% | yes: anchor re-review started 2026-10-16 (CP-12-11) |
```

The re-review itself (keep, replace or split the anchor, S4.9) is a later-cycle item; this CP
only records that it has started. Inputs already known: the A2.1 confusion mining (later-cycle
item 7: 60 of 64 no-logic-model A2.1 rows were low or medium confidence; check S011), accreditation
(FD-P52), facilities (A2-4), the A2.4 re-anchor, A2.6's lack of an adjudicated primary row and
S176 (G14), and the taxonomy reviewer's point that A2's categories are codebook groupings.

### Registry

The module and record are those described in CP-12-10 §Registry. If this CP lands first, it
creates them. This CP's rows:

```python
URLS = {'essa-4109-tech-capacity': 'https://www.govinfo.gov/link/uscode/20/7119'}
SOURCE_EXCERPT = {'essa-4109-tech-capacity': 'a2-14'}
CITE_AS = {
    'weiss-little-bouffard-2005': 'Weiss, H. B., Little, P. M. D., & Bouffard, S. M. (2005). More than just being there: Balancing the participation equation. New Directions for Youth Development, no. 105, 15-31. Jossey-Bass. doi:10.1002/yd.105',
}
SUPPORT_RECHECK = {
    ('essa-4109-tech-capacity', 'A2.3'): ('a2-14', 'direct', None),
    ('weiss-little-bouffard-2005', 'A2.5'): ('a2-10', 'partial', '<note, see appendix>'),
}
COMPONENTS = {('weiss-little-bouffard-2005', 'A2.5'): 'participation equation: enrollment and attendance'}
NEW = [{'id': 'urban-cof-2006', 'source_claim': 'a2-11', 'tier': 'C', ...,
        'supports': [('A2.2', 'program-centered outcomes: participant satisfaction', 'a2-01', 'partial', None)]}]
NOTES = {'essa-4109-tech-capacity': ..., 'digital-equity-act': ..., 'digital-equity-act-1723': ..., 'mapp-kuttner-2013': ...}
```

FD-P52 needs no registry row: accreditation has no source. The exact text is in the appendix.
Notes on the choices:

- **Urban COF.** The source-level excerpt comes from a2-11 (SUPPORTED). The A2.2 support uses a2-01
  (PARTIAL) at `fit: partial`. `cite_as` uses the institutional form that a2-01's verifier
  suggested, and `notes` record that a2-11's verifier also accepts the eight-author form. No
  A2.5 support is added from a2-11: it is not an act-now item (the devil's advocate rejected it;
  "registry supporting row at most").
- **Side effect: A2.2 leaves `codebook_extensions`.** `build_registry.py` lists a code as an
  extension only when it has no support. `deviations.test.ts` requires each code to be supported
  XOR an extension. With the Urban row, A2.2 is supported, so the build drops it from
  `codebook_extensions` (which becomes [A2.4], or [] if PR #62 has given A2.4 a support) and the
  test passes. A2.2 stays codebook-defined with FD-P18 open, which the tests allow ("a code that
  is not Framework cites an open entry"). The explorer will show the Urban source on A2.2's card.
- **A2.1.** It keeps its Weikart support, so it is not an extension; it becomes adapted with an
  open entry, which the tests allow.
- **Digital Equity Act note.** It cites no news item and asserts no termination: "the support
  rests on statute text only. Reports that the Act's grant programs were terminated were not
  verified (batch 4 review, R-07) and are not cited". Batch 3's F1 citation CP shares
  `digital-equity-act` (F1.6), and CP-12-24 (status notes) lists the same note. Whichever CP
  lands second checks for the note and does not add a second one; CP-12-24 must not assert the
  termination as fact without a verified claim.
- **Mapp.** The note records Version 2 (a2-13's excerpt and the dualcapacity.org URL) and keeps
  2013 as the cited component (decision A2-3). No support changes. CP-12-22 (family-engagement
  entries) carries the same decision; whichever lands second does not add a second note.

Expected result with CP-12-10 and CP-12-12 also applied: 87 → 89 sources (WHO, Urban), supports
146 → 150 (+WHO A1.3, +Urban A2.2, +Reisman A3.2, +Coffman A3.2), `codebook_extensions` [A2.4].

### `rulesText`, Source lines, `CONFUSIONS.md`

Unchanged.

## Settled by the drafter (not on Severin's decision list)

These two points were raised by this draft, not by the review, so DECISIONS.md does not cover
them. Both take the option that changes less; flag either at approval if you want the other.

- **Weiss status stays "located".** Item 9 says to move `basis` to "verified". The registry's
  status legend (CP-10-01) uses "verified" only when the verifier read the document itself, and
  a2-10 was read on the same ERIC abstract page (`https://eric.ed.gov/?id=EJ790687`) that kept the
  source "located" in CP-10-01. The component is narrowed instead.
- **A2.2 Source line stays "Codebook-defined; no verified source yet."** After this CP the line is
  slightly stale, because a partial source now exists. Rewording it reaches the prompt and would
  be a further A2 change after FD-P52, so it goes to the A2 anchor re-review, not to the gate.

## Notes for PR #62 (notes only; the PR is not edited)

- **A2.4 (CP-09-02), decision A2-5:** drop "(or another group facing barriers)". It has no source,
  and 11 of 13 real A2.4 texts under it are general equity of access. S001 and H058 do not flip.
- **Order, decision A2-2:** PR #62's A2.4 and A2.5 CPs land before this CP. After this CP, A2 is
  over the line and further A2 changes wait for the re-review.
- **A2.4 re-anchor** on CDC Strategies (a2-03) and ESSA 6318(f) (a2-07): queued for after PR #62,
  now inside the A2 re-review.
- **CP-09-05 (A1.3), G16:** held until re-justified from design gold or real texts.

## Sources

| Registry ID | Status | Component relied on | claim_id and verifier excerpt |
|---|---|---|---|
| urban-cof-2006 (new) | verified; A2.2 fit partial | program-centered outcomes: satisfaction | a2-01 PARTIAL: "It includes program-centered outcomes (reach, participation, satisfaction);" a2-11 SUPPORTED: "program-centered outcomes (reach, participation, satisfaction)" |
| essa-4109-tech-capacity | verified (partial → direct) | 7119(a)(2) devices and equipment | a2-14 SUPPORTED: "(B) purchasing devices, equipment, and software applications in order to address readiness shortfalls;" |
| weiss-little-bouffard-2005 | located (component narrowed; fit partial) | participation equation: enrollment and attendance | a2-10 SUPPORTED: "The participation equation (participation = enrollment + attendance + engagement)" |
| mapp-kuttner-2013 | verified (no support change) | Version 2 note only | a2-13 SUPPORTED: "Systemic: embraced by leadership across the organization" |
| digital-equity-act, digital-equity-act-1723 | verified (no change) | status note only | none (R-07 news items were not claims) |
| (existing) Weikart YPQA | verified (no change) | FD-P52 anchor | existing CP-10-01 record |

Not used: a2-02 (rejected), a2-03..08 (A2.4; after PR #62, inside the A2 re-review), a2-09 (A2.5
APR; inside the A2 re-review; touches CP-09-01), a2-12 (later-cycle item 6).

## Verification requests

None.

## Not resolved here

- **CP-12-18's A2.6 Source line.** That line (Epstein "Types 3 and 6" → "Type 3") is in the
  shared gate after PRs #62 and #66, which runs after this CP lands. Under S4.9 as written (G7) it
  is then a further A2 change, so CP-12-18 holds its A2.6 part for the A2 re-review. The
  alternative, landing FD-P52 only after the gate, would need Severin's word, because A2-2 names
  only PR #62.

## Gold impact

- Rows expected to change code: none (prompt unchanged; no scoring run needed).
- Rows the edited citations and entries rest on: S075 (A2.1, FD-P52); H002, S137 (A2.2); S196,
  S228, S240, H076 (A2.3); S238, H001 (A2.5).
- New proposed rows: none.
- Held-out gold was not read.

## Test plan

`npm test`, both typechecks, and `build_registry.py` run twice with no diff.
`deviations.test.ts` fails if A2.1's `fidelity`/`deviation` and FD-P52 disagree. **Not run yet:**
the drafter's scratch test run was refused by the permission system and was not retried.

## Judge result

Not run.

## Appendix: `verification_2026_10_16_batch4.py` (draft for CP-12-10, -11, -12, -18)

Rows are tagged by CP. Untested (see Test plan). CP-12-18's A2.6 rows (`COMPONENTS` and `SUPPORT_NOTE` for `epstein-six-types`) are held for the A2 anchor re-review with CP-12-18's A2.6 part; leave them out until then.

```python
"""Applies the batch 4 (A1, A2, A3) research-review verifications to the 3.x registry.

build_registry.py calls apply() after the 2026-09-27 re-verification (and after
the 2026-10-16 Y1 module, if CP-11-01 has landed). Every verdict and excerpt comes
from source-verification-2026-10-16-batch4.json, copied unchanged from the
batch 4 verifier output (verdicts-a.json, verdicts-b.json). The verifiers saw
only {claim_id, code, cite_as, claimed_component, url} (STANDARDS S4.2).
Nothing here is cited from memory.

Each table is marked with the CP that adds it. A CP that has not been approved
leaves its rows out.
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
RECORD = {r['claim_id']: r for r in json.loads((HERE / 'source-verification-2026-10-16-batch4.json').read_text())}
DATE = '2026-10-16'
BY = 'Batch 4 research review (independent codebook-citation-verifier, blind to proposer; WebFetch)'

# Source id -> new URL (the verifier's fetched URL).
URLS = {
    'learning-forward-2022': 'https://learningforward.org/wp-content/uploads/sites/29/2022/04/Standards-Summary.pdf',  # CP-12-10
    'samhsa-tic-2014': 'https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA%5FTrauma.pdf',  # CP-12-10
    'essa-4109-tech-capacity': 'https://www.govinfo.gov/link/uscode/20/7119',  # CP-12-11
    'sampson-1997': 'https://pubmed.ncbi.nlm.nih.gov/9252316/',  # CP-12-12
}

# Source id -> claim whose excerpt becomes the source-level excerpt (read at the new URL).
SOURCE_EXCERPT = {
    'learning-forward-2022': 'a1-01',  # CP-12-10
    'samhsa-tic-2014': 'a1-05',  # CP-12-10
    'essa-4109-tech-capacity': 'a2-14',  # CP-12-11
    'sampson-1997': 'a3-03',  # CP-12-12
}

# Citation text corrected by a verifier.
CITE_AS = {
    # CP-12-11: '105' is the issue number, not a volume (claim a2-10).
    'weiss-little-bouffard-2005': 'Weiss, H. B., Little, P. M. D., & Bouffard, S. M. (2005). More than just being there: Balancing the participation equation. New Directions for Youth Development, no. 105, 15-31. Jossey-Bass. doi:10.1002/yd.105',
}

# (source, code) -> (claim, fit, note); note None uses the verifier's own note.
# fit is set explicitly, not from the verdict, where the review set it.
SUPPORT_RECHECK = {
    ('samhsa-tic-2014', 'A1.2'): ('a1-05', 'direct', None),  # CP-12-10
    ('essa-4109-tech-capacity', 'A2.3'): ('a2-14', 'direct', None),  # CP-12-11
    ('weiss-little-bouffard-2005', 'A2.5'): ('a2-10', 'partial',  # CP-12-11
        'Re-checked 2026-10-16 (claim a2-10, SUPPORTED, read on the ERIC record): the component is now limited to enrollment and attendance, the parts of the participation equation that are program-level counts. Engagement, the third part, is not a count or dosage, so the fit stays partial. Only the ERIC abstract was read.'),
    ('sampson-1997', 'A3.3'): ('a3-03', 'direct', None),  # CP-12-12
}

# (source, code) -> component text.
COMPONENTS = {
    ('weiss-little-bouffard-2005', 'A2.5'): 'participation equation: enrollment and attendance',  # CP-12-11
    ('epstein-six-types', 'A2.6'): 'Type 3 Volunteering (families as volunteers and audiences)',  # CP-12-18 A2.6 part: held for the A2 re-review
}

# (source, code) -> replacement verifier_note, where a support is narrowed without a new claim.
SUPPORT_NOTE = {
    # CP-12-18 A2.6 part (held for the A2 re-review): Type 6 removed; the CP-10-01 verifier had already judged it a poor fit.
    ('epstein-six-types', 'A2.6'): "Type 3 fits organizational systems for engaging families (CP-10-01 verifier). Type 6 ('Coordinate community resources and services ...') was removed from A2.6 by CP-12-18: the CP-10-01 verifier judged it community collaboration, not family-engagement systems. The framework describes school practices, so the fit stays partial.",
}

# Supports added to sources already in the registry: (source, code, component, claim, fit, note or None).
NEW_SUPPORTS = [
    ('reisman-2007-advocacy-policy', 'A3.2',  # CP-12-12
     'outcome category: strengthened alliances (coordination, collaboration and mission alignment among community and system partners)',
     'a3-01', 'direct', None),
    ('coffman-2009-advocacy-evaluation', 'A3.2',  # CP-12-12
     'interim outcome: partnerships or alliances (new or stronger organizational relationships)',
     'a3-02', 'partial',
     "Verdict SUPPORTED (claim a3-02): the measure 'New or stronger organizational relationships developed' appears word for word. Fit set to partial by the batch 4 review: the outcome is defined within an advocacy strategy, and it also counts relationships with individuals. Read on the County Health Rankings copy; the verifier recorded it as the full HFRP (Coffman, 2009) document. Supporting row only; not named in the A3.2 source line."),
]

# New sources: each support is (code, component, claim, fit, note or None).
NEW = [
    {  # CP-12-10
        'id': 'who-2019-burnout', 'source_claim': 'a1-07',
        'cite_as': 'World Health Organization (2019, May 28). Burn-out an "occupational phenomenon": International Classification of Diseases.',
        'codebook_names': [], 'tier': 'B', 'publisher': 'World Health Organization', 'year': 2019,
        'notes': 'Added by CP-12-10 as a supporting row for the burnout include; not named in the A1.3 source line. Tier B chosen by the proposer (WHO classification).',
        'supports': [('A1.3', 'ICD-11 burn-out: chronic workplace stress not successfully managed (exhaustion, mental distance from the job, reduced professional efficacy)', 'a1-07', 'direct', None)],
    },
    {  # CP-12-11
        'id': 'urban-cof-2006', 'source_claim': 'a2-11',
        'cite_as': 'The Urban Institute & The Center for What Works (2006). Building a Common Outcome Framework to Measure Nonprofit Performance.',
        'codebook_names': [], 'tier': 'C', 'publisher': 'The Urban Institute', 'year': 2006,
        'notes': "Added by CP-12-11. The PDF (dated December 2006) names no authors on the cover and lists eight people as 'Common Measures Project Staff'; Urban's publication page credits the same eight as authors and dates it January 5, 2007 (claims a2-01, a2-11). Cited in institutional form; the eight-author form is also acceptable. Replaces the unregistered 'Urban Institute Candidate Outcome Indicators, mentoring' named in A2.2's basis and FD-P18.",
        'supports': [('A2.2', 'program-centered outcomes: participant satisfaction', 'a2-01', 'partial', None)],
    },
]

# Source id -> status.
STATUS = {}

# Source id -> text appended to `notes` (no re-verification implied).
NOTES = {
    'learning-forward-2022': "URL pinned 2026-10-16 (CP-12-10) to the 2022 Standards Summary PDF (claim a1-01, PARTIAL: design standards, not an outcome list; the PDF states no year, which comes from the URL path and the history page). Learning Forward's history page says a 2025 edition now exists (claim a1-02, PARTIAL); the codebook keeps citing 2022 until a dated 2025 record is verified. The A1.1 and A1.2 support excerpts were read on the standards web page in CP-10-01.",
    'samhsa-tic-2014': 'URL moved 2026-10-16 (CP-12-10) to the full document on HHS/ACF NCSACW (claim a1-05, SUPPORTED); SAMHSA remains the author.',
    'essa-4109-tech-capacity': 'Re-checked 2026-10-16 (CP-12-11) on govinfo, a government copy (claim a2-14, SUPPORTED); fit partial -> direct.',
    'digital-equity-act': 'Status note (CP-12-11, 2026-10-16): the support rests on statute text only. Reports that the Act\'s grant programs were terminated were not verified (batch 4 review, R-07) and are not cited; re-check the statute at the next re-verification. Shared with digital-equity-act-1723.',
    'digital-equity-act-1723': 'Status note (CP-12-11, 2026-10-16): see digital-equity-act.',
    'mapp-kuttner-2013': "Version note (CP-12-11, 2026-10-16): Version 2 of the framework (Mapp & Bergman, 2019, per the suggested citation on dualcapacity.org; the PDF itself names no author or year) adds to the 2013 framework and keeps its organizational conditions, 'Systemic: embraced by leadership across the organization' (claim a2-13, SUPPORTED; https://www.dualcapacity.org/s/DCBF-VERSION-2-FINAL.pdf). The 2013 edition stays the cited component for F1.7, F1.8 and A2.6 (decision A2-3, 2026-10-16).",
    'sampson-1997': 'URL moved 2026-10-16 (CP-12-12) to the PubMed record (claim a3-03, SUPPORTED: the definition is in the abstract; the fetched page did not show author names). The full text was read in CP-10-01 on a course-reading copy.',
}

# Source id -> names added to codebook_names (CP-12-18 part (a), lands now: both names already appear on live lines,
# Guskey on the A1.1 and A1.2 Source lines, Reisman on the A3.1 Source line and A3's frameworkBasis).
CODEBOOK_NAMES = {
    'guskey-2002-pd-evaluation': ['Guskey (2002)'],
    'reisman-2007-advocacy-policy': ['Reisman, Gienapp & Stachowiak (2007)'],
}


def _claim(cid):
    r = RECORD[cid]
    assert r['verdict'] in ('SUPPORTED', 'PARTIAL'), cid
    return r


def _support(out, sid, code):
    return next(s for s in out[sid]['supports'] if s['code'] == code)


def apply(out, codes):
    rechecked = set()
    for sid, url in URLS.items():
        out[sid]['url'] = url
        rechecked.add(sid)
    for sid, cid in SOURCE_EXCERPT.items():
        out[sid]['excerpt'] = _claim(cid)['excerpt']
        rechecked.add(sid)
    for sid, text in CITE_AS.items():
        out[sid]['cite_as'] = text
        rechecked.add(sid)
    for (sid, code), (cid, fit, note) in SUPPORT_RECHECK.items():
        r = _claim(cid)
        _support(out, sid, code).update(fit=fit, excerpt=r['excerpt'], verifier_note=note or r['notes'])
        rechecked.add(sid)
    for (sid, code), comp in COMPONENTS.items():
        _support(out, sid, code)['component'] = comp
    for (sid, code), note in SUPPORT_NOTE.items():
        _support(out, sid, code)['verifier_note'] = note
    for sid, code, comp, cid, fit, note in NEW_SUPPORTS:
        assert code in codes, code
        r = _claim(cid)
        out[sid]['supports'].append({'code': code, 'component': comp, 'fit': fit,
                                     'excerpt': r['excerpt'], 'verifier_note': note or r['notes']})
        rechecked.add(sid)
    for n in NEW:
        first = _claim(n['source_claim'])
        sups = []
        for code, comp, cid, fit, note in n['supports']:
            assert code in codes, code
            r = _claim(cid)
            sups.append({'code': code, 'component': comp, 'fit': fit, 'excerpt': r['excerpt'], 'verifier_note': note or r['notes']})
        out[n['id']] = {
            'id': n['id'], 'cite_as': n['cite_as'], 'codebook_names': n['codebook_names'], 'tier': n['tier'],
            'publisher': n['publisher'], 'year': n['year'], 'url': first['url_checked'], 'status': 'verified',
            'verified_on': DATE, 'verified_by': BY, 'excerpt': first['excerpt'], 'notes': n['notes'], 'supports': sups,
        }
    for sid, st in STATUS.items():
        out[sid]['status'] = st
    for sid, text in NOTES.items():
        out[sid]['notes'] = (out[sid].get('notes', '') + ' ' + text).strip()
    for sid, names in CODEBOOK_NAMES.items():
        out[sid]['codebook_names'] = sorted(set(out[sid].get('codebook_names', [])) | set(names))
    for sid in rechecked:
        out[sid]['verified_on'] = DATE
        out[sid]['verified_by'] = BY
    return out
```
