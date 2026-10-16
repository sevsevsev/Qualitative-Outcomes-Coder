# CP-12-24: Status and rename notes on source records (cross-batch)

**In plain words.** Several sources the codebook cites have changed since they were checked: an
organization was renamed, a newer edition came out, a federal program lost its funding while its
law still stands, or a government website now carries a notice. This change adds a short dated
note to each affected source record, so a reader of the codebook explorer sees it. Where an
independent checker confirmed the change, the note says so and quotes it; where the change is only
a reviewer's report, the note says it is unconfirmed and asks a checker to look. No code's wording,
source line or meaning changes, and the coding model never reads these notes, so all of it lands now.

| Field | Value |
|---|---|
| Type | CITATION_FIX (notes and publisher names only) |
| Codes touched | Registry notes or publisher on: `nagaoka-2015-foundations`, `cjca-2009`, `learning-forward-2022`, `csta-k12-2017`, `digital-equity-act`, `digital-equity-act-1723`, `snap-ed-framework-mt1` (new in CP-12-08), `usda-fncs-nutrition-security-2022` (new in CP-12-09, if V8 passes), `hp2030-pa-r02` (new in CP-12-07) and every `hp2030-*` entry. No `basis`, Source line, `frameworkBasis`, definition, include, exclude, useInstead or rulesText changes. |
| Version bump | PATCH against the version current when applied |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: notes 2 (CJCA rename), 4 (CSTA 2026 watch), 5 (Digital Equity Act, unverified), 6 (SNAP-Ed: round-2 V-STATUS-2 PARTIAL, so the note quotes the FNS memo's dated end of required funding instead of a review lead), 8 (Healthy People 2030 court-order banner: V-STATUS-1 SUPPORTED, quoted on all 14 `hp2030-*` entries) and 9 (PA-R02 watch); items 1 and 3 were already applied by CP-12-04 and CP-12-10. Left out: item 7, because the USDA nutrition-security entry does not exist (CP-12-09 V8 failed). Waits for the gate: nothing. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. Notes do not change any code's construct or its sources.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G10 | Notes are not in the prompt; the whole CP lands now. |
| G8 | Where a note concerns a copy (SNAP-Ed archive), only a verifier-recorded copy is used. |
| CLAUDE.md "A citation needs evidence" | A status change is asserted only where a verifier recorded it (y5-13, y8b-15, a1-02, y1-subject-07). Every other note is worded as an unverified review lead with a verification request, and cites no news item. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| All notes and the Nagaoka publisher name | no | now |
| SNAP-Ed URL switch to an archived snapshot | no | when CP-12-08's V7 returns a recorded snapshot |
| Upgrading any "unverified" note to a confirmed one | no | when its V-request below returns |

Nothing waits for the gate.

**Shared rows (whichever lands first applies them; the other drops the rows).**

| Row | Also drafted in | String to use |
|---|---|---|
| Nagaoka `publisher` and `notes` (name as printed; fall-2026 watch item) | CP-12-04 (a3) | CP-12-04's, reproduced below |
| DEA status note on `digital-equity-act` and `digital-equity-act-1723` | CP-12-11 | CP-12-11's, reproduced below |
| Learning Forward 2025 edition note | CP-12-10 | CP-12-10's, reproduced below |
| Farrington and Allensworth & Easton rename notes | CP-11-01 (PR #66) | CP-11-01's; this CP sets the shared wording rule (item 10) |

## Problem and change

All rows go in the batch modules under `codebook-refinement/v3/` (not the JSON), as `NOTES`
(appended to `notes`) or `PUBLISHER` entries. The module named for each row is the one that already
touches that source.

### 1. Nagaoka publisher as printed (verified; batch 2 item 5) — `verification_2026_10_16_b2.py`

y5-13 SUPPORTED: "©2015 University of Chicago Consortium on Chicago School Research".

```python
PUBLISHER['nagaoka-2015-foundations'] = 'University of Chicago Consortium on Chicago School Research'
    # was 'University of Chicago Consortium on School Research'
NOTES['nagaoka-2015-foundations'] = (
    "Publisher named as printed at publication: '©2015 University of Chicago Consortium on Chicago School Research' "
    "(claim y5-13, full report, 2026-10-16). The organization's later name is University of Chicago Consortium on School "
    "Research (S1.4 rename note). Watch item (S4.9): an update of this framework was reported for fall 2026 (review lead, "
    "not verified); re-review Y5's anchor before citing any new edition."
)
```

### 2. CJCA renamed CJJA (verified for attribution; batch 3 item 10) — `verification_2026_10_16_b3.py`

y8b-15 PARTIAL (attribution only): "originally incorporated as the Council of Juvenile Correctional
Administrators on July 1, 1994".

```python
NOTES['cjca-2009'] = (
    "Rename note (CP-12-24, 2026-10-16): CJCA is now the Council of Juvenile Justice Administrators (CJJA), "
    "'originally incorporated as the Council of Juvenile Correctional Administrators on July 1, 1994' (claim y8b-15, "
    "PARTIAL: attribution only, no construct). The publication's name at release is kept (S1.4)."
)
```

CP-12-07's title correction and NCJRS catalog note on the same entry are separate and stay there.

### 3. Learning Forward 2025 edition (verified; batch 4 item 2) — `verification_2026_10_16_batch4.py`

a1-02 PARTIAL: "Developments in the ensuing years led to a 2025 edition to ensure access, relevance,
and availability to all educators." CP-12-10's note (URL pinned to the 2022 PDF; "the codebook keeps
citing 2022 until a dated 2025 record is verified") already says this. CP-12-24 adds nothing beyond
it; if CP-12-10 lands first, this row is dropped.

### 4. CSTA 2026 standards (verified as published; supersession not confirmed) — `verification_2026_10_16.py` (CP-11-01's module) or the b1 module

y1-subject-07 PARTIAL: "Algorithms, Programming, Data & Analysis, and Computing Systems"; the
verifier: "The page confirms 'The 2026 CSTA PK–12 Computer Science Standards' ... It does not say
the 2026 standards supersede or replace the 2017 K–12 standards."

```python
NOTES['csta-k12-2017'] = (
    "Watch item (CP-12-24, 2026-10-16): CSTA has published the 2026 CSTA PK-12 Computer Science Standards (claim "
    "y1-subject-07, PARTIAL). The page does not say they supersede the 2017 standards, so the codebook keeps citing "
    "2017. Y1.4 is in PR #62; any re-citation is that PR's or a later Y1 CP's."
)
```

### 5. Digital Equity Act grants (unverified report; batch 4 item 8, B3 F1.6) — `verification_2026_10_16_batch4.py`

No verified claim exists; the review's news items were not filed as claims (batch 4 R-07). The
note asserts no termination:

```python
NOTES['digital-equity-act'] = (
    "Status note (CP-12-11, 2026-10-16): the support rests on statute text only. Reports that the Act's grant programs "
    "were terminated were not verified (batch 4 review, R-07) and are not cited; re-check the statute at the next "
    "re-verification. Shared with digital-equity-act-1723."
)
NOTES['digital-equity-act-1723'] = 'Status note: see digital-equity-act (CP-12-11, 2026-10-16).'
```

### 6. SNAP-Ed funding (unverified report; batch 3 item 18) — `verification_2026_10_16_b3.py`

The F1 researcher reported that SNAP-Ed's federal funding ended; no claim verified it. CP-12-08
added `snap-ed-framework-mt1` from f1-11 (SUPPORTED on the live USDA page) and filed V7 for an
archived snapshot.

```python
NOTES['snap-ed-framework-mt1'] = (
    "Watch item (CP-12-24, 2026-10-16): the review reported that federal SNAP-Ed funding ended (review lead, not "
    "verified; V-STATUS-2). The MT1 page was live when read (claim f1-11). When CP-12-08's V7 records an archived "
    "snapshot, its URL becomes the URL of record."
)
# When V7 returns: URLS['snap-ed-framework-mt1'] = <V7 url_checked>
```

### 7. USDA 2022 nutrition-security page (watch; batch 3 later #14) — `verification_2026_10_16_b3.py`

Only if CP-12-09's V8 has added `usda-fncs-nutrition-security-2022`:

```python
NOTES['usda-fncs-nutrition-security-2022'] = (
    "Watch item (CP-12-24, 2026-10-16): the review could not confirm whether this 2022 USDA page is still current "
    "(review lead, not verified). Re-check at the next re-verification."
)
```

### 8. Healthy People 2030 court-order banner (unverified; batch 3 R-13) — `verification_2026_10_16_b3.py`

Two researchers saw a court-order banner on Healthy People 2030 pages; no verifier recorded its
wording. One note on every `hp2030-*` entry (today `hp2030-ah01-ahs01`, `hp2030-mich14`,
`hp2030-mich15`, `hp2030-sh04`, `hp2030-su05`; plus each `hp2030-*` entry CP-12-07 and CP-12-09 add):

```python
for sid in [s for s in out if s.startswith('hp2030-')]:
    NOTES[sid] = (
        "Watch item (CP-12-24, 2026-10-16): reviewers reported a court-order banner on Healthy People 2030 pages "
        "(review lead, not verified; V-STATUS-1). The objective text quoted here was read on the page."
    )
```

### 9. PA-R02 revision (watch; batch 3 R-13) — `verification_2026_10_16_b3.py`

```python
NOTES['hp2030-pa-r02'] = (
    "Watch item (CP-12-24, 2026-10-16): a 2026 revision of research objective PA-R02 was reported (review lead, not "
    "verified). Y8.1's screen-time support stays partial (claim y8a-12)."
)
```

### 10. Chicago Consortium names: one wording rule (pilot, batch 2; PR #66)

Every UChicago Consortium entry names the publisher **as printed on the document**, and its note
uses this sentence, filled in per entry: "Publisher named as printed at publication: '<printed
name>' (claim <id>). The organization's later name is University of Chicago Consortium on School
Research (S1.4 rename note)." Nagaoka (item 1) uses it. CP-11-01's `farrington-2012` and
`allensworth-easton-2005`/`-2007` notes (PR #66) should be brought to the same sentence when PR #66
is finalized; whichever lands second copies the first's wording. No row is added here for those
three entries.

### Not here

WWC Study Review Protocol v5.1 is not a registry source today; the pilot's note to cite v5.1 over
v5.0 (y1-wwc-02, y1-wwc-03 notes) belongs to whichever Y1 CP adds a WWC source. The HP2030
court-order and SNAP-Ed notes are notes only; no support, fit or status changes.

## Sources

| Registry ID | Status | Evidence for the note |
|---|---|---|
| nagaoka-2015-foundations | verified | y5-13 SUPPORTED: "©2015 University of Chicago Consortium on Chicago School Research" |
| cjca-2009 | verified | y8b-15 PARTIAL: "originally incorporated as the Council of Juvenile Correctional Administrators on July 1, 1994" |
| learning-forward-2022 | verified | a1-02 PARTIAL: "Developments in the ensuing years led to a 2025 edition to ensure access, relevance, and availability to all educators." |
| csta-k12-2017 | verified | y1-subject-07 PARTIAL: "Algorithms, Programming, Data & Analysis, and Computing Systems" |
| digital-equity-act(-1723), snap-ed-framework-mt1, usda-fncs-nutrition-security-2022, hp2030-*, hp2030-pa-r02 | unchanged status | no evidence; notes say "not verified" |

## Verification requests

Each goes to `codebook-citation-verifier`, which sees only these fields.

```
V-STATUS-1  claim_id: hp2030-banner · code: Y8 (all HP2030 objectives) · cite_as: U.S. DHHS, ODPHP. Healthy People 2030, objective SH-04. · claimed_component: The wording of any notice or banner shown at the top of the objective page about a court order. · url: https://odphp.health.gov/healthypeople/objectives-and-data/browse-objectives/sleep/increase-proportion-high-school-students-who-get-enough-sleep-sh-04
V-STATUS-2  claim_id: snap-ed-status · code: F1.3 · cite_as: U.S. Department of Agriculture, Food and Nutrition Service. SNAP-Ed Evaluation Framework, MT1. · claimed_component: Any statement on a USDA FNS page about the end of federal SNAP-Ed funding, with its date. · url: https://snaped.fns.usda.gov/framework/components/mt1
```

The SH-04 URL is the registry's `hp2030-sh04` URL; the verifier should use the URL in the registry
at send time. A confirmed result replaces "review lead, not verified" with the quoted wording and
claim id; a failed one leaves the note as it is.

## Gold impact

- Rows expected to change code: none (no prompt change).
- New proposed rows: none. Held-out gold was not read.

## Judge result

Not run. `npm test` is the check.
