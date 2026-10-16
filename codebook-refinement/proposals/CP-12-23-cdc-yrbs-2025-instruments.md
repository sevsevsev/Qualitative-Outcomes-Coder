# CP-12-23: CDC Youth Risk Behavior Survey, the two 2025 questionnaires (cross-batch)

**In plain words.** Several health codes cite the CDC Youth Risk Behavior Survey, but the source
record is only CDC's "about" page, it does not carry the name the codebook uses, and one note
claims a sleep question was verified when no record shows it. CDC publishes two 2025 versions of
the survey (one for state and local surveys, one national) whose question numbers differ, so this
change records each as its own source and ties each question to the code it backs: Healthy Daily
Habits (Y8.1), Sexual & Reproductive Health (Y8.4), Health Care Access & Condition Management
(Y8.5), Mental Health Service Access & Use (Y8.9), and Violence, Bullying & Victimization (Y8.12).
Nothing the coding model reads changes, so this lands now without a test run.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry: two new sources (`cdc-yrbs-2025-standard-hs`, `cdc-yrbs-2025-national-hs`); `cdc-yrbss` (`codebook_names`, notes, Y8.12 support re-check). `basis`: Y8.1 (the YRBS sentence only). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH against the version current when applied |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. Every item backs a construct its code already names; the Y8 drift count is unchanged by this CP.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G8 (official copy) | Both questionnaires and the About page are on cdc.gov. |
| G10 | No prompt text; lands now. |
| G2 | "CDC Youth Risk Behavior Survey" is already in Y8's `frameworkBasis`; nothing to add. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| Two new registry sources with item-level supports; `cdc-yrbss` name, note and Y8.12 re-check | no | now |
| Y8.1 `basis`: replace the unsupported "YRBS sleep item (verified 2025)" claim | no | now |

Nothing waits for the gate.

**Shared rows.** CP-12-07's batch-3 draft carries the same rows (its `NEW` entries
`cdc-yrbs-2025-standard-hs` and `cdc-yrbs-2025-national-hs`, `CODEBOOK_NAMES_ADD` for `cdc-yrbss`,
the `cdc-yrbss` note, and the `('cdc-yrbss', 'Y8.12')` re-check). Whichever of CP-12-07 and
CP-12-23 lands first applies them; the other drops the rows. The strings below are the ones to use.
The Y8.1 `basis` sentence is likewise shared with CP-12-07's Y8.1 `basis` rewrite, which must use
the YRBS wording below.

## Problem

Batch 3 items 1, 2, 4, 5, 7 and 9 (R-02, R-12):

1. Y8 Source lines say "CDC Youth Risk Behavior Survey" (Y8.1, Y8.4, Y8.11, Y8.12), but
   `cdc-yrbss.codebook_names` is `["CDC Youth Risk Behavior Surveillance System", "CDC YRBSS"]`.
2. The verifiers read two 2025 instruments with different item numbers: the standard high school
   questionnaire (y8a-08: "83. On an average school night, how many hours of sleep do you get?";
   the verifier: "The document's own title is '2025 State and Local Youth Risk Behavior Survey'")
   and the national high school questionnaire (y8b-11; "The document calls itself '2025 National
   Youth Risk Behavior Survey'").
3. Y8.1's `basis` says "CDC YRBS sleep item (verified 2025)", but no registry support or
   2026-09-27 record backs it (batch 3 item 2).
4. The Y8.12 support excerpt is the About page's generic list, with a component the CP-10-01
   verifier called older wording ("injury and violence; bullying", partial).

## Change

### Registry (`codebook-refinement/v3/verification_2026_10_16_b3.py`, not the JSON)

The claims (y8a-08, -09, -10, -21, -27; y8b-07, -11, -12) are copied into the batch 3 record file
as CP-12-07 describes; their `source_kind` is `primary` (cdc.gov).

```python
NEW += [
    {'id': 'cdc-yrbs-2025-standard-hs',
     'cite_as': 'Centers for Disease Control and Prevention (2025). 2025 State and Local Youth Risk Behavior Survey (standard high school questionnaire).',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2025,
     'codebook_names': ['CDC Youth Risk Behavior Survey'],
     'supports': [
        ('Y8.1', 'Q83 hours of sleep on an average school night', 'y8a-08'),
        ('Y8.1', 'Q73 days physically active at least 60 minutes', 'y8a-09'),
        ('Y8.1', 'Q66, Q67, Q69, Q70 fruit and vegetable items', 'y8a-10'),
        ('Y8.4', 'Q59 condom use and Q60 pregnancy-prevention method at last sexual intercourse', 'y8a-21'),
        ('Y8.5', 'Q80 last dental check-up, exam or cleaning', 'y8a-27')]},
    {'id': 'cdc-yrbs-2025-national-hs',
     'cite_as': 'Centers for Disease Control and Prevention (2025). 2025 National Youth Risk Behavior Survey (high school questionnaire).',
     'tier': 'A', 'publisher': 'Centers for Disease Control and Prevention', 'year': 2025,
     'codebook_names': ['CDC Youth Risk Behavior Survey'],
     'supports': [
        ('Y8.9', 'Q94 experience with counseling or therapy', 'y8b-07'),
        ('Y8.12', 'Q11, Q12 weapon and gun carrying; Q16 physical fight; Q21, Q22 sexual and physical dating violence; Q26, Q27 bullied at school and electronically', 'y8b-11')]},
]
SUPPORT_RECHECK[('cdc-yrbss', 'Y8.12')] = ('y8b-12', 'direct', 'Student experiences: exposure to community violence')
CODEBOOK_NAMES_ADD['cdc-yrbss'] = ['CDC Youth Risk Behavior Survey']
NOTES['cdc-yrbss'] = ('This entry is the YRBSS About page. Item-level supports use the two 2025 instruments as separate entries '
                      '(cdc-yrbs-2025-standard-hs, cdc-yrbs-2025-national-hs), because their item numbers differ (batch 3 R-02).')
```

Why the name sits on all three entries: each Source line that says "CDC Youth Risk Behavior
Survey" must resolve to a source that supports that code. Y8.11 resolves through `cdc-yrbss`;
Y8.1 and Y8.4 through the standard questionnaire; Y8.12 through both.

Result: +2 sources, +7 supports; the `cdc-yrbss` Y8.12 support changes fit partial → direct
(community violence, y8b-12). Not added: Y8.6 Q29 (y8b-02, SUPPORTED), which waits with the Y8.6
behavior boundary (decision Y8-3, after PR #66).

### Y8.1 `basis` (`codebooks/youthOutcomesV3.data.ts`; not in the prompt)

Before:

```
CDC/ASCD WSCC (verified); Healthy People 2030 SH-04 sleep (verified); CDC YRBS sleep item (verified 2025) and screen-time hours items (2021 and earlier only; partial).
```

After (YRBS sentence only; CP-12-07 adds its HECAT and PA-06 sentences around it):

```
CDC/ASCD WSCC (verified); Healthy People 2030 SH-04 sleep (verified); CDC (2025) 2025 State and Local YRBS, standard high school questionnaire, Q83 sleep, Q73 physical activity, Q66-Q70 fruit and vegetables (verified, direct; CP-12-23). YRBS screen-time hours items exist only in 2021 and earlier questionnaires (research-basis appendix A, R03); not cited.
```

### rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| cdc-yrbs-2025-standard-hs (new) | verified | y8a-08 "83. On an average school night, how many hours of sleep do you get?"; y8a-09 "73. During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?"; y8a-10 "66. During the past 7 days, how many times did you eat fruit? (Do not count fruit juice.)"; y8a-21 "The last time you had sexual intercourse, did you or your partner use a condom?"; y8a-27 "When was the last time you saw a dentist for a check-up, exam, teeth cleaning, or other dental work?" |
| cdc-yrbs-2025-national-hs (new) | verified | y8b-07 "During the past 12 months, which of the following best describes your experience with counseling or therapy"; y8b-11 "During the past 12 months, how many times were you in a physical fight?" |
| cdc-yrbss → Y8.12 | verified, direct | y8b-12 "Student experiences: parental monitoring, school connectedness, unstable housing, and exposure to community violence." |

## Verification requests

None.

## Gold impact

- Rows expected to change code: none (no prompt change).
- Design rows the citations rest on: S205 (sleep), H013 (activity), S121 (fruit and vegetables)
  (Y8.1); S002, S251 (Y8.4); S064 (dental) (Y8.5); S114, H035 (Y8.9); S134 (fights), S229
  (weapons), S141 (harassment), S248 (dating violence) (Y8.12).
- New proposed rows: none. Held-out gold was not read.

## Judge result

Not run. `npm test` (`registry.test.ts`, `youthOutcomesV3.test.ts`) is the check.
