# CP-12-21: Learning for Justice, one citation as printed (2022, Second Edition)

**In plain words.** Two codes rest on Learning for Justice's Social Justice Standards: Cultural &
Social Identity (Y5.2) and Respect for Diversity & Cultural Competence (Y4.5). The source record
has no year or edition and links to a landing page, and two reviews wrote the citation two
slightly different ways. This change records one citation exactly as the document prints it (2022,
Second Edition, published by The Southern Poverty Law Center, Inc.) and links the document itself.
That part lands now. Adding the year "2022" to the Cultural & Social Identity (Y5.2) source line,
which the coding model reads, waits for the shared test run after the two open pull requests.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry: `learning-for-justice-sjs` (cite_as, publisher, year, url, source excerpt, note). Source line: Y5.2 (year and edition only; part b). No `basis`, definition, include, exclude, useInstead, example, `frameworkBasis` or rulesText changes. Y4.5's new support row is CP-12-03's; Y5.2's component re-check is CP-12-04's. |
| Version bump | Part (a): PATCH against the version current when applied. Part (b): inside the single Source/`frameworkBasis` PATCH after PRs #62 and #66 (G10). |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: the registry part (citation as printed, publisher, 2022, PDF URL, source excerpt, note with the old URL). Waits for the gate: the Y5.2 Source line year and edition. |
| Gate candidate | Part (b) applied 2026-10-17 in the 3.3.0 gate candidate, once, together with CP-12-04's Y5.2 line: "Learning for Justice (2022), Social Justice Standards, Second Edition (Identity)". |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. The edition and year are metadata; the component (Identity anchor ID.1, Diversity standard 6) is unchanged.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G8 (official copy) | The URL becomes the publisher's own 2022 PDF, the copy both verifiers read (y5-11, y4a-03). |
| G10 (no-prompt parts now; Source edits in one gate after PRs #62 and #66) | Registry now; the Y5.2 year at the gate. |
| G5 (named instance of a cited category) | Not changed here; CP-12-04 records it for Y5.2. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| (a) Registry: cite_as, publisher, year, url, source excerpt, note | no | now |
| (b) Y5.2 Source line: "Learning for Justice (2022), Social Justice Standards, Second Edition (Identity)" | yes ("Source Framework:") | shared gate after PRs #62 and #66 |

**Shared rows.** CP-12-04 (a3) drafts the same registry rows and CP-12-03 points here. Whichever
of CP-12-04 and CP-12-21 lands first applies them; the other drops the rows. The strings below are
the ones both must use. The Y5.2 Source-line year is one edit, applied once in the gate (CP-12-04
part b names it too).

## Problem

Batch 2 R-05 and R-15, batch 1 R-06, batch 2 item 4:

1. `learning-for-justice-sjs` has `year: null`, no edition, and the `cite_as`
   "Learning for Justice — Social Justice Standards (Identity, Diversity, Justice, Action)" (S1.4).
2. The URL is `https://www.splcenter.org/learning-for-justice/frameworks/social-justice-standards/`,
   a landing page, not the document.
3. The two verified claims spell the citation differently: y5-11 "Learning for Justice (2022).
   Social Justice Standards: The Learning for Justice Anti-bias Framework, Second Edition.
   Southern Poverty Law Center." and y4a-03 "Learning for Justice, Southern Poverty Law Center
   (2022). ... Anti-Bias Framework, Second Edition." The y5-11 verifier recorded the publisher as
   printed: "Second Edition, © 2014-2022, publisher printed as The Southern Poverty Law Center, Inc."
   The y4a-03 verifier: "The title, Second Edition and 2022 are confirmed."

## Change

### (a) Registry (`codebook-refinement/v3/`, not the JSON)

In the batch 2 module `verification_2026_10_16_b2.py` (created by CP-12-04 or by this CP,
whichever lands first; same shape as `verification_2026_09_27.py`), with y5-11 copied into the
batch 2 record file as CP-12-04 describes:

```python
CITE_AS['learning-for-justice-sjs'] = 'Learning for Justice (2022). Social Justice Standards: The Learning for Justice Anti-bias Framework, Second Edition. The Southern Poverty Law Center, Inc.'
    # was 'Learning for Justice — Social Justice Standards (Identity, Diversity, Justice, Action)'
PUBLISHER['learning-for-justice-sjs'] = 'The Southern Poverty Law Center, Inc. (Learning for Justice)'
    # was 'Learning for Justice (Southern Poverty Law Center)'
YEAR['learning-for-justice-sjs'] = 2022  # was null
URLS['learning-for-justice-sjs'] = 'https://www.learningforjustice.org/sites/default/files/2022-09/LFJ-Social-Justice-Standards-September-2022-09292022.pdf'
SOURCE_EXCERPT['learning-for-justice-sjs'] = 'y5-11'
NOTES['learning-for-justice-sjs'] = (
    'Second Edition, (c) 2014-2022, publisher printed as The Southern Poverty Law Center, Inc. (claim y5-11). '
    'One cite_as serves every code that cites LFJ (Y5.2; Y4.5 after CP-12-03); title casing ("Anti-bias") follows '
    'the verified claim. The earlier URL (splcenter.org landing page) is kept here as history.'
)
```

`codebook_names` stays `["Learning for Justice"]`; it already matches both Source lines.

### (b) Y5.2 Source line (`codebooks/youthOutcomesV3.data.ts`; gate)

Before:

```
Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (race/ethnicity, culture); Learning for Justice, Social Justice Standards (Identity); Muhammad, Five Pursuits (Pursuit 1: Identity).
```

After:

```
Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (race/ethnicity, culture); Learning for Justice (2022), Social Justice Standards, Second Edition (Identity); Muhammad, Five Pursuits (Pursuit 1: Identity).
```

Y4.5's Source line does not name Learning for Justice today and is not changed. Y5's
`frameworkBasis` names "Learning for Justice Social Justice Standards (Identity)" with no year;
it is left as is (an anchor name, not a citation of an edition). The line contains none of
"partial", "located", "(verified)" or "VERIFY".

### `basis`, rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged here. Y5.2's `basis` sentence naming the 2022 edition is CP-12-04's.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| learning-for-justice-sjs | verified | y5-11 SUPPORTED: "Students will develop positive social identities based on their membership in multiple groups in society." (edition, year and publisher as printed) |
| learning-for-justice-sjs → Y4.5 (CP-12-03) | verified | y4a-03 SUPPORTED: "Students will express comfort with people who are both similar to and different from them" |

## Verification requests

None.

## Gate (part b)

Rides the shared two-run design-set gate with CP-12-16, the Source parts of CP-12-04..06,
CP-12-14, CP-12-18, CP-12-26 and CP-12-29, after PRs #62 and #66 merge. Rows to watch: S129
(Y5.2). Expected flips: none (a year in a citation).

## Gold impact

- Rows expected to change code: none.
- New proposed rows: none.
- Held-out gold was not read.

## Judge result

Part (a): not run; `npm test` is the check. Part (b): judged in the shared gate.
