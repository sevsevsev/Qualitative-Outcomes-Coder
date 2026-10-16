# CP-12-22: Family-engagement source entries (Mapp & Kuttner, Epstein) in one place

**In plain words.** Two family-engagement sources stand behind five codes: Home Learning
Environment & Routines (F1.2), System Navigation & Rights Knowledge (F1.7), Family Connection &
Trust with the Program (F1.8), Family Participation & Leadership (F1.9) and Family Engagement
Systems (A2.6). Three reviews each wanted to edit the same two source records, so this change does
it once. Epstein's six types of involvement move from a secondary compilation to the publisher's
own 2019 handbook copy, and the Mapp & Kuttner (2013) framework stays the cited version, with a
note that a 2019 "Version 2" exists. Those record changes land now. Removing Mapp & Kuttner from
System Navigation & Rights Knowledge (F1.7), where it fits only loosely, also changes a source line
the coding model reads, so that part waits for the shared test run after the two open pull requests.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry: `epstein-six-types` (url, cite_as, publisher, year, source excerpt, notes; F1.2 and F1.8 supports re-read; the F1.1, F1.9 and A2.6 supports keep their excerpts with a copy note), `mapp-kuttner-2013` (F1.7 support removed in part b; the Version 2 note is CP-12-11's). `basis`: F1.8 now; F1.7 in part b. Source line: F1.7 (part b). No definition, include, exclude, useInstead, example, `frameworkBasis` or rulesText changes. |
| Version bump | Part (a): PATCH against the version current when applied. Part (b): inside the single Source/`frameworkBasis` PATCH after PRs #62 and #66 (G10). |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. F1.7 keeps two direct sources (IDEA 20 U.S.C. 1471(b); CSSP Concrete Support) after the loose Mapp & Kuttner link goes, so F1.7 stays Framework; F1 drift is unchanged by this CP.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| A2-3 (keep Mapp & Kuttner 2013 as the cited component; note Version 2) | `mapp-kuttner-2013` keeps its citation and its F1.8 and A2.6 supports. The Version 2 note (a2-13, dualcapacity.org URL) is written once, in CP-12-11's `NOTES`; this CP does not repeat it. Mapp & Bergman (2019) is not added as a source (f1-12 PARTIAL, secondary host, no author or year in the PDF). |
| G8 (official copy) | Epstein moves to the publisher's (Corwin's) own handout, f1-03. |
| G10 | Registry and F1.8 `basis` now; F1.7 Source line at the gate. |
| G14 (S176 re-reviewed with CP-09-01; row unchanged until Severin settles it) | F1.9's support is not re-pointed to f1-05 here; that waits for CP-09-01's F1.9 wording (PR #62). |
| A2-1, A2-2 (A2 anchor re-review) | A2.6's component change (Types 3 and 6 → Type 3) stays held in CP-12-18 for the A2 re-review. Only the copy the Type 3 text was read on is updated here. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| (a1) `epstein-six-types` → Corwin 4th edition handout (url, cite_as, publisher, year, source excerpt, notes) | no | now |
| (a2) F1.2 Type 4 support re-read (f1-03, direct); F1.8 Type 2 support re-read, communication clause only (f1-04, partial) | no | now |
| (a3) F1.1, F1.9 and A2.6 Epstein supports: note that their excerpts were read on the 2019 NNPS compilation | no | now |
| (a4) F1.8 `basis` | no | now |
| (b1) F1.7 Source line: drop Mapp & Kuttner | yes ("Source Framework:") | shared gate after PRs #62 and #66 |
| (b2) `mapp-kuttner-2013 → F1.7` support removed; F1.7 `basis` | no, but tied to (b1) | with (b1), so the registry never drops a source the live line still names |

**Shared rows.** CP-12-08's batch-3 draft carried the Epstein move (its `URLS`, `CITE_AS`,
`PUBLISHER`, `YEAR`, `SOURCE_EXCERPT`, `SUPPORT_RECHECK` and `NOTES_REPLACE` rows for
`epstein-six-types`); its finalized text hands them here. If any copy of those rows has already
landed through CP-12-08, whichever lands first applies them and the other drops the rows. The
strings below are the ones to use. CP-12-25's "(located)" sweep would also touch F1.8's `basis`;
whichever lands first applies it, and the other drops it.

## Problem

1. **Epstein is cited from a secondary compilation (batch 3 item 16, R-06).** `epstein-six-types`
   points at NNPS (2019), *Promising Partnership Practices*, and its notes still say "the status
   stays 'located' until the primary source ... is checked" and list 2.x mapping errors ("3.5 cites
   Type 4 ..."), although the entry has been `verified` since CP-10-01. Claim f1-03 read the
   publisher's handout: "Involve families with their children in learning at home, including
   homework, other curriculum-related activities," with the footer "School, Family, and Community
   Partnerships, Fourth Edition by J. L. Epstein et al. Copyright © 2019 by Corwin."
2. **F1.8's Type 2 row should cover only the communication clause (item 20).** f1-04 PARTIAL:
   "Communicate with families about school programs and student progress through effective
   school-to-home"; the verifier: "Type 2 describes communications the school designs, while F1.8's
   core is the family's relationship with and trust in the program."
3. **F1.7's Mapp & Kuttner link is loose (item 20; T, F, P accept, D rejects).** The CP-10-01
   verifier: "The 4 C's ... are broader than rights knowledge and system navigation. Only
   'connections' relates loosely to F1.7." F1.7 has two direct sources besides it.
4. **One Mapp entry serves F1.7, F1.8 and A2.6 (batch 4 item 10, A2-3).** Version 2 (2019) exists;
   decision A2-3 keeps 2013. CP-12-11 writes the note.

## Change

### (a) Registry (`codebook-refinement/v3/`, not the JSON)

In the batch 3 module `verification_2026_10_16_b3.py` (CP-12-07 creates it; whichever of CP-12-07,
-08, -09 and -22 lands first does), with f1-03 and f1-04 copied into the batch 3 record file:

```python
URLS['epstein-six-types'] = 'https://resources.corwin.com/sites/default/files/5_4-keys_to_partnerships.pdf'
    # was 'https://nnps.jhucsos.com/wp-content/uploads/2019/10/PPP-2019-Final-Book-web.pdf'
CITE_AS['epstein-six-types'] = ("Epstein, J. L., et al. (2019). School, Family, and Community Partnerships: Your Handbook for Action (4th ed.). Corwin. "
                                "Handout: Epstein's Six Types of Involvement (1 Parenting, 2 Communicating, 3 Volunteering, 4 Learning at Home, 5 Decision Making, 6 Collaborating with the Community).")
PUBLISHER['epstein-six-types'] = 'Corwin'  # was 'Johns Hopkins University / National Network of Partnership Schools'
YEAR['epstein-six-types'] = 2019           # was null
SOURCE_EXCERPT['epstein-six-types'] = 'f1-03'
SUPPORT_RECHECK.update({
    ('epstein-six-types', 'F1.2'): ('f1-03', 'direct', 'Type 4 Learning at Home'),
    ('epstein-six-types', 'F1.8'): ('f1-04', 'partial', 'Type 2 Communicating (the communication clause of F1.8 only)'),
})
SUPPORT_NOTE_APPEND.update({
    ('epstein-six-types', 'F1.1'): ' Excerpt read on the NNPS (2019) compilation (CP-10-01); the URL of record is now the Corwin handout (CP-12-22).',
    ('epstein-six-types', 'F1.9'): ' Excerpt read on the NNPS (2019) compilation (CP-10-01). Claim f1-05 (Types 3 and 5, SUPPORTED on the Corwin handout) is applied after CP-09-01 settles F1.9 (PR #62).',
    ('epstein-six-types', 'A2.6'): ' Type 3 excerpt read on the NNPS (2019) compilation (CP-10-01); the same Type 3 text is verified on the Corwin handout (claim f1-05). The component change (Type 6 removed) is held in CP-12-18 for the A2 anchor re-review.',
})
NOTES_REPLACE['epstein-six-types'] = (
    "Primary copy checked 2026-10-16 (CP-12-22, claim f1-03): Corwin handout, footer 'School, Family, and Community Partnerships, "
    "Fourth Edition by J. L. Epstein et al. Copyright © 2019 by Corwin.' F1.2 and F1.8 were re-read there (f1-03, f1-04). "
    "Earlier copy: NNPS (2019), Promising Partnership Practices, Johns Hopkins University. The old organizingengagement.org URL "
    "serves unrelated content (CP-10-01)."
)
# Drops the stale "status stays 'located'" sentence and the 2.x mapping-error note.
```

`codebook_names` stays `["Epstein"]`. Result: 0 sources and 0 supports added or removed now; part
(b2) removes one support.

### (a4) F1.8 `basis` (`codebooks/youthOutcomesV3.data.ts`; not in the prompt)

| Code | Before | After |
|---|---|---|
| F1.8 | `Epstein Type 2, Communicating (located); Mapp & Kuttner (2013) (verified).` | `Mapp & Kuttner (2013) (verified, direct; Version 2 of 2019 noted in the registry, decision A2-3); Epstein et al. (2019), Type 2 Communicating (verified, partial: the communication clause only; claim f1-04).` |

F1.2's `basis` sentence is CP-12-08's (it names this CP's re-check). F1.9's and A2.6's `basis` stay
with PR #62 and CP-12-18 respectively.

### (b) F1.7 (gate)

**(b1) Source line**, before:

```
IDEA, 20 U.S.C. 1471(b); CSSP Strengthening Families, Concrete Support in Times of Need; Mapp & Kuttner (2013), Dual Capacity-Building Framework.
```

After:

```
IDEA, 20 U.S.C. 1471(b); CSSP Strengthening Families, Concrete Support in Times of Need.
```

**(b2) Registry**: `REMOVE.add(('mapp-kuttner-2013', 'F1.7'))`. **F1.7 `basis`**, before:
`IDEA 20 U.S.C. 1471(b) (verified); CSSP Concrete Support in Times of Need (verified); Mapp & Kuttner (2013) (verified).`
After: `IDEA 20 U.S.C. 1471(b) (verified); CSSP Concrete Support in Times of Need (verified). Mapp & Kuttner (2013) removed (CP-12-22): its capacities are broader than rights knowledge and navigation (CP-10-01 verifier, fit partial).`

F1's `frameworkBasis` keeps "Mapp & Kuttner (2013) Dual Capacity-Building Framework", because
F1.8 still cites it.

### rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged. CF-008's 3.x restatement (Epstein types by code) is CP-12-27's and waits on G14.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| epstein-six-types | verified (primary copy) | f1-03 SUPPORTED: "Involve families with their children in learning at home, including homework, other curriculum-related activities," |
| epstein-six-types → F1.8 | verified, partial | f1-04 PARTIAL: "Communicate with families about school programs and student progress through effective school-to-home" |
| epstein-six-types (Type 3, named in notes only) | verified | f1-05 SUPPORTED: "Improve recruitment, training, and schedules to involve families as volunteers and audiences at the school" |
| mapp-kuttner-2013 | verified (no change here) | Version 2 note in CP-12-11, a2-13 SUPPORTED: "Systemic: embraced by leadership across the organization" |

Not used: f1-12 (Mapp & Bergman Version 2 on a secondary host; PARTIAL; no author or year).

## Verification requests

None.

## Gate (part b)

Shared two-run design-set gate after PRs #62 and #66. Rows to watch: S193 (F1.7, "knowing where
to turn for help in a crisis"), H069 (F1.7). Expected flips: none (a citation is removed; F1.7's
definition, include and exclude are unchanged).

## Gold impact

- Rows expected to change code: none.
- Design rows the edits rest on: S119 (F1.2), S157 (F1.8), S193, H069 (F1.7). S176 (F1.9, alternates
  A2.6, A3.1) is untouched and waits for Severin's re-review with CP-09-01 (G14).
- New proposed rows: none.
- Held-out gold was not read.

## Dependencies and boundaries

- **CP-12-08** hands the Epstein move and the F1.7 decision here; its F1.2 `basis` names f1-03.
- **CP-12-11** writes the Mapp Version 2 note (decision A2-3).
- **CP-12-18** keeps the A2.6 component and Source-line change held for the A2 re-review.
- **PR #62** (CP-09-01) owns F1.9; f1-05 is applied to F1.9 after it merges.

## Judge result

Part (a): not run; `npm test` is the check. Part (b): judged in the shared gate.
