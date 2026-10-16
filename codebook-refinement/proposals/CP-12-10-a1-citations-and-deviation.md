# CP-12-10: A1 citation fixes and the A1.1 deviation entry

**In plain words.** The code Staff & Volunteer Knowledge & Skills (A1.1) names volunteers,
mentors, coaches and case managers and their confidence, but its two sources (Guskey's 2002
evaluation levels and Learning Forward's standards) are about teachers' professional learning
only. This change records that gap honestly in the deviations log, as an "adapted" code, instead
of narrowing the code, because six of your adjudicated rows depend on those other adults. It also
repairs three source records: the Learning Forward link now points at the 2022 edition the
codebook cites, the trauma-informed guidance used for Practice Change (A1.2) points at a
government copy, and the World Health Organization's definition of burnout is added behind the
"burnout" example in Workforce Stability & Well-Being (A1.3). Nothing the coding model reads
changes, so all of it can land now without a test run.

| Field | Value |
|---|---|
| Type | CITATION_FIX, plus the one deviation-log entry it requires (recommendations "CP-B4-01": "CITATION_FIX + deviation log"). Neither half reaches the prompt. |
| Codes touched | A1.1 (`fidelity`, new `deviation` field). A1.2 (`basis` host wording). A1.3 (registry supporting row only). Registry: `learning-forward-2022` (A1.1, A1.2), `samhsa-tic-2014` (A1.2), new `who-2019-burnout` (A1.3). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, against whatever version is current when this is applied (3.1.4 today, so 3.1.5; the next PATCH after PR #62 or PR #66 if either merges first). |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: Learning Forward URL and note, SAMHSA URL and A1.2 fit, new WHO burnout row (`v3/verification_2026_10_16_batch4.py`); A1.2 `basis`; A1.1 adapted (FD-P36 stays open: V1 could not fetch); drift row. Waits for the gate: nothing (Guskey in A1's `frameworkBasis` is CP-12-29's). |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new FD-P36 (provisional id; renumbered at merge): A1.1, adapted, sector widening, counted. A1 drift goes from 0/3 to 1/3 (at the line, not over). A1.2 needs none (G1). |

Framework deviation: new FD-P36 (provisional id), A1.1 sector widening, counted.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G1 (FD only when a code's own text names a population outside its source) | A1.1 names volunteers, mentors, coaches and case managers, so FD-P36 opens. A1.2 ("Adults applying new practices") names no outside population and SAMHSA is cross-sector, so A1.2 gets no FD; A1's worst case is 1/3, not 2/3 (R-14). |
| G3 (a partial fit avoids an FD only when the source is broader than the code) | Learning Forward is partial because the code is broader than the source, so it does not avoid FD-P36. |
| A1-1 (Kirkpatrick Partners not admissible) | FD-P36 stays open. Kirkpatrick Level 2 (a1-03) appears only as the alternative considered. OPM's restatement goes to a verifier (V1). |
| G8 (official copy; secondary host only with a recorded bibliographic match) | Learning Forward: the publisher's own PDF. WHO: who.int. SAMHSA: the NCSACW copy is an HHS/ACF federal host, not SAMHSA's own site; the a1-05 verifier recorded the bibliographic match (title, HHS Pub. No. (SMA) 14-4884, 2014), which the registry note repeats. |
| G10 (no-prompt CPs land now) | All of this CP lands now. |
| G15 (adult volunteers) | Volunteers' skills for the role stay in A1.1, which is what FD-P36 covers. Retention or satisfaction with serving → A1.3 and the volunteer's own life outcomes → A1 domain-only are later hint CPs (see "Not bundled"). |
| G16 (hold CP-09-05) | The A1.3 staffing widening is not touched and stays held with CP-09-05. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| A1.1 `fidelity` and `deviation` | no | now |
| A1.2 `basis` | no | now |
| DEVIATIONS.md: FD-P36 and the drift table | no | now |
| Registry: Learning Forward URL and note, SAMHSA URL and fit, new WHO row; the shared batch 4 module and record | no | now |
| (none) | yes | nothing in this CP waits for the gate. Guskey in A1's `frameworkBasis` moved to CP-12-29 (G2). |

## Problem

From the batch 4 recommendations ("Act now", CP-B4-01, items 1 to 4):

1. **A1.1 goes past its sources and has no FD entry (item 1).** A1.1's definition is "Staff,
   volunteers, mentors, coaches or case managers gaining knowledge or skills", and its include
   names "staff confidence". Guskey (2002) Level 2 (verified, direct) and Learning Forward (2022)
   (verified, partial) both cover only educators' professional learning. Under G1, A1.1 needs an
   entry. Narrowing is not an option: six adjudicated rows depend on the non-educator roles.
   Kirkpatrick Level 2 (a1-03, SUPPORTED) names those roles and "confidence", but the document is
   a certification seller's PDF, which decision A1-1 rules not admissible. The fidelity reviewer
   asked that the entry also name confidence.
2. **`learning-forward-2022` points at a page that now serves a newer edition (item 2).** a1-02
   (PARTIAL) says the history page reports "a 2025 edition". a1-01 (PARTIAL) reads the 2022
   Standards Summary PDF.
3. **SAMHSA (2014) was read on a third-party copy (item 3).** The CP-10-01 support is partial
   "only because of the host" (NCTSN). a1-05 (SUPPORTED) reads the full document on HHS/ACF's
   NCSACW site. The A1.2 `basis` also calls the support direct while the registry says partial.
4. **"Burnout" in A1.3's include has no defining source (item 4).** a1-07 (SUPPORTED) is WHO's
   definition. All reviewers accepted a registry row; the devil's advocate accepted it only as a
   supporting row with no name in the Source line, and that is how it is drafted here.

Item 5 (Guskey in A1's `frameworkBasis`) reaches the prompt. Under G2 it moved from CP-12-18 to
CP-12-29, the single gated `frameworkBasis` CP.

## Change

### `codebooks/youthOutcomesV3.data.ts` (lands now; not in the prompt)

| Code | Field | Before | After |
|---|---|---|---|
| A1.1 | `fidelity` | `"framework"` | `"adapted"` |
| A1.1 | `deviation` | (absent) | `"FD-P36"`, inserted after `fidelity` as in the other 3.x codes |
| A1.2 | `basis` | `Re-verified 2026-09-27 (CP-10-01): Learning Forward (2022) (verified, partial); Guskey (2002) Level 4 (verified, direct); SAMHSA (2014) (verified from the full document on an NCTSN copy, direct).` | `Re-verified 2026-09-27 (CP-10-01): Learning Forward (2022) (verified, partial); Guskey (2002) Level 4 (verified, direct); SAMHSA (2014) (verified, direct; full document on the HHS/ACF NCSACW copy, claim a1-05, CP-12-10).` |

None of these fields reaches the coding prompt (`definitionsText` prints definition, include,
exclude, use instead, source and example). The public explorer shows A1.1 as adapted.

A1.1 `basis` is left alone: it already reads "Learning Forward (2022) (verified, partial ...);
Guskey (2002) Level 2 (verified, direct)", which is still true.

### `codebook-refinement/DEVIATIONS.md`: new entry (lands now)

Inserted after the last 3.x entry in place at apply time, before "## Drift count for codebook 3.x
(S4.9)". Field labels follow the `- **Label:** value` format that `deviations.test.ts` parses.

```markdown
### FD-P36 · A1.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Guskey (2002), Level 2 participants' learning (verified, direct): "Level 2: Participants' Learning ... In addition to liking their professional development experience, we also hope that participants learn something from it." Learning Forward (2022), Standards for Professional Learning (verified, partial).
- **Departs:** both anchors are about educators' professional learning. A1.1's definition names volunteers, mentors, coaches and case managers, and its include names "staff confidence", which Guskey's Level 2 ("New knowledge and skills of participants") does not name; Learning Forward's "knowledge, skills, practices, and mindsets" (partial) is the nearest.
- **Evidence:** adjudicated rows S043 (case managers), S083 (volunteers), S142 (coaches), S146 (mentors' confidence), S244 (college tutors), H014 (coaches). Narrowing the definition to educators would flip all six.
- **Alternative considered:** Kirkpatrick Level 2, "acquire the intended knowledge, skills, attitude, confidence and commitment" (claim a1-03, SUPPORTED), cross-sector and naming confidence, not admissible because Kirkpatrick Partners sells certification (S1.2; decision A1-1, 2026-10-16); narrowing to educators (rejected: flips six rows).
- **Decided in:** CP-12-10 (batch 4 research review, 2026-10-16; decisions G1 and A1-1 settled by Severin 2026-10-16). Provisional id.
- **Revisit:** if a non-vendor statement of Kirkpatrick Level 2 (the OPM lead, verification request V1) is verified; then cite it on A1.1 in a gated CP and close this entry.
```

**Case.** Sector widening keeps "construct and wording unchanged", and the roles fit it.
"Confidence" is named under Departs. Either case is counted, so A1's drift is the same.

**Numbering.** FD-P36 is a provisional id and is renumbered at merge to the next free FD-P number.
`deviations.test.ts` accepts any `FD-P\d+`, and the A1.1 `deviation` field is renumbered with it.

### `codebook-refinement/DEVIATIONS.md`: drift table (lands now)

Intro sentence: append one clause, after any clause another CP has added first:

```
..., and for CP-12-10 (2026-10-16), which opened FD-P36 in A1.
```

A1 row, before → after:

```
| A1 Staff | 3 | 0 | 0% | no |
| A1 Staff | 3 | 1 (A1.1) | 33% | no (at the line) |
```

S4.9 triggers at *more than* a third, so 1 of 3 does not start an anchor re-review. Any later A1
FD (see "Not bundled": the volunteer routing and the A1.3 staffing widening) would take A1 to 2/3
and start one.

### Registry (lands now)

Registry results change in the build scripts, not in the JSON (CLAUDE.md). This CP uses a
separate dated module so it never touches PR #66's files (CP-11-01 creates
`verification_2026_10_16.py` and `source-verification-2026-10-16.json` for Y1; same date,
different names here).

**New record: `codebook-refinement/v3/source-verification-2026-10-16-batch4.json`.** Same row
shape as `source-verification-2026-09-27.json`: `claim_id`, `kind` (`"batch4"`), `source_id`,
`code`, `cite_as`, `claimed_component`, `url_given`, `verdict`, `url_checked`, `source_kind`,
`excerpt`, `corrected_cite_as`, `notes`. Each row is copied unchanged from
`batch4/verify/claims-{a,b}.json` (claim) and `verdicts-{a,b}.json` (`fetched_url` →
`url_checked`, `note` → `notes`). The batch 4 verifiers did not record `source_kind`, so it is
`null` and the module does not assert on it. The file holds the 12 claims used by CP-12-10,
-11 and -12: a1-01, a1-02, a1-05, a1-07, a2-01, a2-10, a2-11, a2-13, a2-14, a3-01, a3-02,
a3-03. Whichever of the three CPs lands first creates the file with all 12 rows; it is a record,
not a change.

**New module: `codebook-refinement/v3/verification_2026_10_16_batch4.py`.** It is shared by
CP-12-10, -11, -12 and -18. Each table row is tagged with the CP that adds it, and a CP that has
not landed leaves its rows out. The full draft, with every CP's rows, is the appendix of
CP-12-11. This CP's rows:

```python
URLS = {
    'learning-forward-2022': 'https://learningforward.org/wp-content/uploads/sites/29/2022/04/Standards-Summary.pdf',
    'samhsa-tic-2014': 'https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA%5FTrauma.pdf',
}
SOURCE_EXCERPT = {'learning-forward-2022': 'a1-01', 'samhsa-tic-2014': 'a1-05'}
SUPPORT_RECHECK = {('samhsa-tic-2014', 'A1.2'): ('a1-05', 'direct', None)}
NEW = [{
    'id': 'who-2019-burnout', 'source_claim': 'a1-07',
    'cite_as': 'World Health Organization (2019, May 28). Burn-out an "occupational phenomenon": International Classification of Diseases.',
    'codebook_names': [], 'tier': 'B', 'publisher': 'World Health Organization', 'year': 2019,
    'notes': 'Added by CP-12-10 as a supporting row for the burnout include; not named in the A1.3 source line. Tier B chosen by the proposer (WHO classification).',
    'supports': [('A1.3', 'ICD-11 burn-out: chronic workplace stress not successfully managed (exhaustion, mental distance from the job, reduced professional efficacy)', 'a1-07', 'direct', None)],
}]
NOTES = {
    'learning-forward-2022': "URL pinned 2026-10-16 (CP-12-10) to the 2022 Standards Summary PDF (claim a1-01, PARTIAL: design standards, not an outcome list; the PDF states no year, which comes from the URL path and the history page). Learning Forward's history page says a 2025 edition now exists (claim a1-02, PARTIAL); the codebook keeps citing 2022 until a dated 2025 record is verified. The A1.1 and A1.2 support excerpts were read on the standards web page in CP-10-01.",
    'samhsa-tic-2014': 'URL moved 2026-10-16 (CP-12-10) to the full document on HHS/ACF NCSACW, a federal host (claim a1-05, SUPPORTED). Bibliographic match recorded by the verifier: title, HHS Pub. No. (SMA) 14-4884, 2014. SAMHSA remains the author.',
}
```

Choices:

- **Learning Forward:** the two support excerpts and their `fit: partial` stay as they are. They
  were read on the standards web page in CP-10-01, and the note says so (as CP-11-01 did for
  ELOF). The 2025 edition is not cited: no dated record of it was verified (devil's advocate,
  taxonomy reviewer). CP-12-24 (status and rename notes) also lists "Learning Forward 2025
  edition": whichever CP lands second checks for this note and does not add a second one.
- **SAMHSA:** `samhsa-tic-2014` stays in `FULL_TEXT_ELSEWHERE` in the 2026-09-27 module. That is
  harmless, because this module runs after it and overrides the URL, excerpt and fit.
- **WHO:** tier B is the proposer's choice. S1.2's tier A is federal, and WHO is an
  intergovernmental agency publishing a classification. No fit depends on the tier.

**`codebook-refinement/v3/build_registry.py`.** Right after `apply_2026_09_27(out, CODES)` (and
after `apply_2026_10_16(out, CODES)` if PR #66 has landed), and before `SUPPORTED_CODES`:

```python
from verification_2026_10_16_batch4 import apply as apply_2026_10_16_batch4
apply_2026_10_16_batch4(out, CODES)
```

Also set `codebook_version_reviewed` to the version this ships in, and `last_reviewed` to the
apply date (unless PR #66 already did). Expected result from this CP alone: 87 → 88 sources and
146 → 147 supports. `codebook_extensions` stays [A2.2, A2.4].

### `rulesText`, domain `hint`, `CONFUSIONS.md`

Unchanged. The prompt is not touched.

## Sources

Only SUPPORTED or PARTIAL rows from `batch4/verify/verification-table.md` are used, with the
verifier's excerpts.

| Registry ID | Status | Component relied on | claim_id and verifier excerpt |
|---|---|---|---|
| guskey-2002-pd-evaluation | verified (direct) | Level 2 (FD-P36 anchor) | existing CP-10-01 record (no new claim) |
| learning-forward-2022 | verified (fit stays partial) | URL and edition only | a1-01 PARTIAL: "Professional learning results in equitable and excellent outcomes for all students when educators understand and apply"; a1-02 PARTIAL: "Developments in the ensuing years led to a 2025 edition to ensure access, relevance, and availability to all educators." |
| samhsa-tic-2014 | verified (partial → direct) | trauma-informed approach | a1-05 SUPPORTED: "responds by fully integrating knowledge about trauma into policies, procedures, and practices" |
| who-2019-burnout (new) | verified | ICD-11 burn-out | a1-07 SUPPORTED: "Burn-out is a syndrome conceptualized as resulting from chronic workplace stress that has not been successfully managed." |
| (not cited) Kirkpatrick Partners | SUPPORTED, not admissible (A1-1) | named in FD-P36 only as the alternative considered | a1-03: "The degree to which participants acquire the intended knowledge, skills, attitude, confidence and commitment based on their participation in the training" |

Not used: a1-04 (Kirkpatrick L3; not needed under G1, and not admissible under A1-1), a1-06
(JOLTS openings and hires, PARTIAL; waits on CP-09-05, held under G16), a1-08 (volunteer
retention, PARTIAL; rejected).

## Verification requests

**V1 (lead only; closes FD-P36 if SUPPORTED; decision A1-1 sends it).** OPM's restatement of the
Kirkpatrick levels is an unverified lead from the review ("Unverified leads"). Neither the review
nor this draft has recorded a URL for it, so the orchestrator finds a .gov URL before sending:

```
claim_id: a1-09
code: A1.1
cite_as: U.S. Office of Personnel Management. Training Evaluation Field Guide (Kirkpatrick levels). [title and year to be confirmed by the verifier]
claimed_component: Level 2 Learning: the degree to which participants acquire the intended knowledge, skills, attitude, confidence and commitment from training, for any workforce (not only educators)
url: <orchestrator to supply a .gov URL>
```

The title is the proposer's recollection, which makes it a lead and nothing more (CLAUDE.md).
If V1 comes back SUPPORTED, citing it on A1.1 changes the Source line, so it goes to a later
gated CP; this CP does not wait for it.

## Not bundled

- **Guskey in A1's `frameworkBasis`:** CP-12-29 (G2). **The research-basis.md sentence on A1's
  split:** CP-12-30.
- **Volunteer routing (G15), a later hint CP.** Skills for the role → A1.1 (already covered by
  FD-P36); retention or satisfaction with serving → A1.3; the volunteer's own life outcomes → A1
  domain-only with the `codebook_gap` flag (G9). It is blocked on G11: Severin adjudicates two
  proposed design rows per side first (P-27 to P-32 in
  `research-review/2026-10-16/full-review/proposed-design-rows.csv`). Warning for that CP: under G1, writing
  "volunteers" into A1.3's own text names a population outside A1.3's sources (a1-08 is PARTIAL
  and was rejected), so it would likely open a counted A1.3 FD and take A1 to 2/3, over the line,
  which starts an A1 anchor re-review (S4.9, G7). The `mentors_volunteers` prompt line
  (`youthOutcomesV3.ts`) changes in that CP too.
- **A1.3 staffing levels:** later-cycle item 4; held with CP-09-05 (G16) and blocked on G11
  (staffing rows P-33 to P-36 in the same file).
- **Staff-credential tie-breaker:** later-cycle item 8.

## Gold impact

- Rows expected to change code: none. Nothing in the prompt changes, so no scoring run is needed.
- Rows FD-P36 rests on: S043, S083, S142, S146, S244, H014. Other rows on edited citations: S204,
  S148 (A1.2), S149 (A1.3).
- New proposed rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read. CP-09-05's evidence row is
  not used.

## Test plan

`npm test`, `npm run typecheck`, `npm run typecheck:server`, then
`python3 codebook-refinement/v3/build_registry.py` with no diff on a second run.
`deviations.test.ts` fails if A1.1's `fidelity`/`deviation` and FD-P36 disagree.

**Not run yet.** The drafter tried these edits in a scratch copy, but the test run was refused
by the permission system and was not retried, so the module and edits here are untested.

## Judge result

Not run.

## Appendix: module draft (all batch 4 CPs)

The full draft of `verification_2026_10_16_batch4.py` is in CP-12-11's appendix (one copy, so
the two cannot drift apart).
