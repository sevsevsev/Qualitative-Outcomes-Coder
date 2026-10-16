# CP-12-10: A1 citation fixes and the A1.1 deviation entry

| Field | Value |
|---|---|
| Type | CITATION_FIX, plus the one deviation-log entry it requires (recommendations "CP-B4-01": "CITATION_FIX + deviation log"). If the judge applies S4.1's "one kind of change" strictly, split it: CP-12-10a (registry and `basis`) and CP-12-10b (FD-P50). Neither part changes the prompt. |
| Codes touched | A1.1 (`fidelity`, new `deviation` field). A1.2 (`basis` host wording). A1.3 (registry supporting row only). Registry: `learning-forward-2022` (A1.1, A1.2), `samhsa-tic-2014` (A1.2), new `who-2019-burnout` (A1.3). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, against whatever version is current when this is applied (3.1.4 today, so 3.1.5). If draft PR #62 (3.2.0 candidate) or PR #66 (CP-11-01..03) merges first, it is the next PATCH after them. |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft (batch 4 research review, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new FD-P50 (provisional id; renumbered at merge): A1.1, adapted, sector widening, counted. A1 drift goes from 0/3 to 1/3 (at the line, not over). Nothing else departs. |

Framework deviation: new FD-P50 (provisional id), A1.1 sector widening, counted.

## Problem

From the batch 4 recommendations ("Act now", CP-B4-01, items 1 to 4):

1. **A1.1 goes past its sources and has no FD entry (item 1).** A1.1's definition is "Staff,
   volunteers, mentors, coaches or case managers gaining knowledge or skills", and its include
   names "staff confidence". Guskey (2002) Level 2 (verified, direct) and Learning Forward (2022)
   (verified, partial) both cover only educators' professional learning. Under decision C (an FD
   only when a code's own text names a population outside its source), A1.1 needs an entry.
   Narrowing is not an option: six adjudicated rows depend on the non-educator roles.
   Kirkpatrick Level 2 (a1-03, SUPPORTED) names those roles and "confidence", but the document is
   a certification seller's PDF, so its S1.2 tier is open (decision B4-1). The fidelity reviewer
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

Item 5 (Guskey in A1's `frameworkBasis`) reaches the prompt, so it is in CP-12-18.

## Change

### `codebooks/youthOutcomesV3.data.ts`

| Code | Field | Before | After |
|---|---|---|---|
| A1.1 | `fidelity` | `"framework"` | `"adapted"` |
| A1.1 | `deviation` | (absent) | `"FD-P50"`, inserted after `fidelity` as in the other 3.x codes |
| A1.2 | `basis` | `Re-verified 2026-09-27 (CP-10-01): Learning Forward (2022) (verified, partial); Guskey (2002) Level 4 (verified, direct); SAMHSA (2014) (verified from the full document on an NCTSN copy, direct).` | `Re-verified 2026-09-27 (CP-10-01): Learning Forward (2022) (verified, partial); Guskey (2002) Level 4 (verified, direct); SAMHSA (2014) (verified, direct; full document on the HHS/ACF NCSACW copy, claim a1-05, CP-12-10).` |

None of these fields reaches the coding prompt (`definitionsText` prints definition, include,
exclude, use instead, source and example). The public explorer shows A1.1 as adapted.

A1.1 `basis` is left alone: it already reads "Learning Forward (2022) (verified, partial ...);
Guskey (2002) Level 2 (verified, direct)", which is still true.

### `codebook-refinement/DEVIATIONS.md`: new entry

Inserted after the last 3.x entry (FD-P20 today; after FD-P23 if CP-11-02 has landed), before
"## Drift count for codebook 3.x (S4.9)". Field labels follow the `- **Label:** value` format
that `deviations.test.ts` parses.

```markdown
### FD-P50 · A1.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Guskey (2002), Level 2 participants' learning (verified, direct): "Level 2: Participants' Learning ... In addition to liking their professional development experience, we also hope that participants learn something from it." Learning Forward (2022), Standards for Professional Learning (verified, partial).
- **Departs:** both anchors are about educators' professional learning. A1.1's definition names volunteers, mentors, coaches and case managers, and its include names "staff confidence", which Guskey's Level 2 ("New knowledge and skills of participants") does not name; Learning Forward's "knowledge, skills, practices, and mindsets" (partial) is the nearest.
- **Evidence:** adjudicated rows S043 (case managers), S083 (volunteers), S142 (coaches), S146 (mentors' confidence), S244 (college tutors), H014 (coaches). Narrowing the definition to educators would flip all six.
- **Alternative considered:** Kirkpatrick Level 2, "acquire the intended knowledge, skills, attitude, confidence and commitment" (claim a1-03, SUPPORTED), cross-sector and naming confidence, held back because Kirkpatrick Partners sells certification (S1.2 tier, decision B4-1); narrowing to educators (rejected: flips six rows).
- **Decided in:** CP-12-10 (batch 4 research review, 2026-10-16), pending Severin. Provisional id.
- **Revisit:** if Severin rules Kirkpatrick Partners admissible (B4-1), or a non-vendor statement of Kirkpatrick Level 2 (the OPM lead, V1 below) is verified; then cite it on A1.1 and close this entry.
```

**Case, stated plainly.** Strict sector widening keeps "construct and wording unchanged". The
roles fit that case. "Confidence" is arguably a codebook-defined element instead. Both cases are
counted, so A1's drift is the same either way. If the judge prefers codebook-defined, change only
the `Case` line.

**Numbering.** FD-P50 is a provisional id (coordinator's instruction) and is renumbered at merge
to the next free FD-P number. `deviations.test.ts` accepts any `FD-P\d+`, and the A1.1 `deviation`
field must be renumbered with it.

### `codebook-refinement/DEVIATIONS.md`: drift table

Intro sentence: append one clause, after any clause CP-11-02 has added:

```
..., and for CP-12-10 (2026-10-16), which opened FD-P50 in A1.
```

A1 row, before → after:

```
| A1 Staff | 3 | 0 | 0% | no |
| A1 Staff | 3 | 1 (A1.1) | 33% | no (at the line) |
```

S4.9 triggers at *more than* a third, so 1 of 3 does not trigger an anchor re-review. Under
decision C, A1.2 ("Adults applying new practices") names no outside population and SAMHSA is
cross-sector, so the reconciliation's 2 of 3 worst case (R-14) does not apply.

### Registry

Registry results change in the build scripts, not in the JSON (CLAUDE.md). This draft uses a
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
CP-12-10, -11, -12 and -18. Each table row is tagged with the CP that adds it, and a CP that is
rejected leaves its rows out. Skeleton (the full draft, with every CP's rows, is the appendix
of CP-12-11):

```python
RECORD = {r['claim_id']: r for r in json.loads((HERE / 'source-verification-2026-10-16-batch4.json').read_text())}
DATE = '2026-10-16'
BY = 'Batch 4 research review (independent codebook-citation-verifier, blind to proposer; WebFetch)'
URLS, SOURCE_EXCERPT, CITE_AS, SUPPORT_RECHECK, COMPONENTS, SUPPORT_NOTE, NEW_SUPPORTS, NEW, STATUS, NOTES, CODEBOOK_NAMES
def apply(out, codes): ...  # asserts every claim used is SUPPORTED or PARTIAL; sets verified_on/by only on sources re-read
```

This CP's rows:

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
    'notes': 'Added by CP-12-10 as a supporting row for the burnout include; not named in the A1.3 source line. Tier B chosen by the proposer (WHO classification); confirm.',
    'supports': [('A1.3', 'ICD-11 burn-out: chronic workplace stress not successfully managed (exhaustion, mental distance from the job, reduced professional efficacy)', 'a1-07', 'direct', None)],
}]
NOTES = {
    'learning-forward-2022': "URL pinned 2026-10-16 (CP-12-10) to the 2022 Standards Summary PDF (claim a1-01, PARTIAL: design standards, not an outcome list; the PDF states no year, which comes from the URL path and the history page). Learning Forward's history page says a 2025 edition now exists (claim a1-02, PARTIAL); the codebook keeps citing 2022 until a dated 2025 record is verified. The A1.1 and A1.2 support excerpts were read on the standards web page in CP-10-01.",
    'samhsa-tic-2014': 'URL moved 2026-10-16 (CP-12-10) to the full document on HHS/ACF NCSACW (claim a1-05, SUPPORTED); SAMHSA remains the author.',
}
```

Choices:

- **Learning Forward:** the two support excerpts and their `fit: partial` stay as they are. They
  were read on the standards web page in CP-10-01, and the note says so (as CP-11-01 did for
  ELOF). The 2025 edition is not cited: no dated record of it was verified (devil's advocate,
  taxonomy reviewer).
- **SAMHSA:** `samhsa-tic-2014` stays in `FULL_TEXT_ELSEWHERE` in the 2026-09-27 module. That is
  harmless, because this module runs after it and overrides the URL, excerpt and fit.
- **WHO:** tier B is the proposer's choice. S1.2's tier A is federal, and WHO is an
  intergovernmental agency publishing a classification. Severin can change it; no fit depends on
  it.

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
| guskey-2002-pd-evaluation | verified (direct) | Level 2 (FD-P50 anchor) | existing CP-10-01 record (no new claim) |
| learning-forward-2022 | verified (fit stays partial) | URL and edition only | a1-01 PARTIAL: "Professional learning results in equitable and excellent outcomes for all students when educators understand and apply"; a1-02 PARTIAL: "Developments in the ensuing years led to a 2025 edition to ensure access, relevance, and availability to all educators." |
| samhsa-tic-2014 | verified (partial → direct) | trauma-informed approach | a1-05 SUPPORTED: "responds by fully integrating knowledge about trauma into policies, procedures, and practices" |
| who-2019-burnout (new) | verified | ICD-11 burn-out | a1-07 SUPPORTED: "Burn-out is a syndrome conceptualized as resulting from chronic workplace stress that has not been successfully managed." |
| (not cited) Kirkpatrick Partners | SUPPORTED, tier open | named in FD-P50 only as the alternative considered | a1-03: "The degree to which participants acquire the intended knowledge, skills, attitude, confidence and commitment based on their participation in the training" |

Not used: a1-04 (Kirkpatrick L3; not needed under decision C), a1-06 (JOLTS openings and hires,
PARTIAL; later-cycle item 4, waits on CP-09-05), a1-08 (volunteer retention, PARTIAL; rejected).

## Verification requests

**V1 (lead only; closes FD-P50 if SUPPORTED).** OPM's restatement of the Kirkpatrick levels is
an unverified lead from the review ("Unverified leads"). Neither the review nor this draft has
recorded a URL for it, so the orchestrator finds a .gov URL before sending:

```
claim_id: a1-09
code: A1.1
cite_as: U.S. Office of Personnel Management. Training Evaluation Field Guide (Kirkpatrick levels). [title and year to be confirmed by the verifier]
claimed_component: Level 2 Learning: the degree to which participants acquire the intended knowledge, skills, attitude, confidence and commitment from training, for any workforce (not only educators)
url: <orchestrator to supply a .gov URL>
```

The title is the proposer's recollection, which makes it a lead and nothing more (CLAUDE.md).

## Decisions for Severin (recommendation IDs)

- **C (age/population rule).** FD-P50 exists only because of C. Recommended: confirm.
- **D (timing).** Recommended: land after PR #62, with CP-12-11 and CP-12-12.
- **B4-1 (Kirkpatrick Partners' tier).** Recommended: not admissible; keep FD-P50 and send V1.
  Alternative: tier D, then a later CP cites L2 on A1.1 (prompt change) and closes FD-P50.
- **B3-9 / B4-7 (volunteers' own outcomes).** Not decided here. FD-P50 covers volunteers' skills
  for the role only; it adds no volunteer include.

## Not bundled

Guskey in `frameworkBasis` and the research-basis sentence (CP-12-18); A1.3 staffing levels
(later-cycle item 4, waits on decision B4-9 about CP-09-05); the staff-credential tie-breaker
(later-cycle item 8); the `mentors_volunteers` prompt line (rejected item).

## Gold impact

- Rows expected to change code: none. Nothing in the prompt changes, so no scoring run is needed.
- Rows FD-P50 rests on: S043, S083, S142, S146, S244, H014. Other rows on edited citations: S204,
  S148 (A1.2), S149 (A1.3).
- New proposed rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read. CP-09-05's evidence row is
  not used.

## Test plan

`npm test`, `npm run typecheck`, `npm run typecheck:server`, then
`python3 codebook-refinement/v3/build_registry.py` with no diff on a second run.
`deviations.test.ts` fails if A1.1's `fidelity`/`deviation` and FD-P50 disagree.

**Not run yet.** The drafter tried these edits in a scratch copy, but the test run was refused
by the permission system and was not retried, so the module and edits here are untested.

## Judge result

Not run.

## Appendix: module draft (all batch 4 CPs)

The full draft of `verification_2026_10_16_batch4.py` is in CP-12-11's appendix (one copy, so
the two cannot drift apart).
