# CP-12-20: CASEL registry link and a Self-Awareness allocation table (cross-batch)

**In plain words.** The codebook's social and emotional skills codes cite the CASEL framework,
but the source record points at a one-page CASEL handout that prints no title or date, while the
document the citation names (with its title) is a different CASEL file from November 2020. This
change makes that titled document the main link, keeps the handout as a second copy, and asks an
independent checker to re-read each quoted CASEL skill in the titled document. It also writes down,
once, which code each CASEL "self-awareness" skill belongs to, because two reviews tried to cite
the same skill for both Emotion Awareness (Y4.1) and Self-Understanding & Identity Exploration
(Y5.1). Nothing the coding model reads changes, so this can land now without a test run.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry only: `casel-2020` (url, source excerpt, notes; support excerpts re-pulled where a verifier already read them on the titled copy). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis`, `basis` or rulesText changes. Codes whose CASEL support rows are affected: Y2.2 (after CP-12-01), Y4.1-Y4.12, Y5.1, Y5.4. |
| Version bump | PATCH, against the version current when applied (3.1.4 today, so 3.1.5; the next PATCH if PR #62 or PR #66 merges first) |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: `casel-2020` URL of record (11.2020 PDF), source excerpt and note with the Self-Awareness allocation table (completed from round-2 claim V-CASEL-1 self-awareness-list; "Demonstrating honesty and integrity" is unallocated); V-CASEL-1 re-reads for Y4.1, Y4.3, Y4.4, Y4.5, Y4.6, Y4.10, Y4.12, Y5.1, Y5.4 with fits unchanged (Y5.1 came back PARTIAL and stays partial); a copy note on the other CP-10-01 rows; the Y2.2 claim is recorded only (no Y2.2 support until CP-12-01). Waits for the gate: nothing. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. Only the link and the excerpts change; every CASEL component the codebook relies on is word for word the same on both copies (orchestrator note in `batch1/verify/verification-table.md`).

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G8 (cite the official copy; a secondary host only with a recorded bibliographic match) | Both CASEL files are on CASEL's own S3 host, so both are official. The titled one becomes the URL of record because it carries the cited title (y4a-10). |
| G10 (no-prompt CPs land now) | The whole CP lands now. |
| Batch 1 item 17 ("One PATCH ... after all batches") | All four batches are in, so this is that PATCH. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| `casel-2020` url, source excerpt, notes (allocation table, alternate copies, year caveat) | no | now |
| Support excerpts already read on the titled copy (y4a-07..09, y4b-01..04, y4b-07..09, y4b-12) | no | now (rows owned by CP-12-03; this CP only fixes which copy they cite) |
| Support excerpts not yet read on the titled copy | no | when V-CASEL-1 returns; until then they keep their 2026-09-27 excerpts and a note saying which copy they were read on |

Nothing in this CP waits for the gate.

## Problem

1. **The URL of record is the wrong document (batch 1 R-01, item 17).** `casel-2020.url` is
   `https://casel.s3.us-east-2.amazonaws.com/sites/5/CASEL-Framework-and-Skills.pdf`. Verifiers
   agree it is a handout ("The CASEL 5") with no title or date. The cited title is in
   `https://casel.s3.us-east-2.amazonaws.com/CASEL-SEL-Framework-11.2020.pdf` (y4a-10 SUPPORTED:
   "CASEL'S SEL FRAMEWORK: What Are the Core Competence Areas and Where Are They Promoted?"). Two
   other verifiers found the title on the `casel.org/casel-sel-framework-11-2020/` page (y2-05,
   y5-03). The component wording is the same on all copies.
2. **The same CASEL Self-Awareness bullet is claimed for two codes (batch 2 R-02, R-04, R-14).**
   "Linking feelings, values, and thoughts" was claimed for Y4.1 (y4a-07) and Y5.1 (y5-12).
   "Identifying personal, cultural, and linguistic assets" sits in Y5.4's `basis` with no registry
   support and was claimed for Y5.2 (y5-10). The Self-Awareness competency feeds two domains (Y4
   and Y5) and nothing records which bullet goes where.

## Change

### Registry (`codebook-refinement/v3/`, not the JSON)

Per CLAUDE.md, registry results change in the build scripts. Add these tables to the batch 1
verification module that CP-12-03 creates (`verification_2026_10_16_b1.py`), or, if CP-12-03 has
not landed, create that module with the same shape as `verification_2026_09_27.py`. Rows y4a-10
and the y4a/y4b rows below are copied from `batch1/verify/` into the batch 1 record file, as
CP-12-03 describes.

```python
URLS['casel-2020'] = 'https://casel.s3.us-east-2.amazonaws.com/CASEL-SEL-Framework-11.2020.pdf'
    # was 'https://casel.s3.us-east-2.amazonaws.com/sites/5/CASEL-Framework-and-Skills.pdf'
SOURCE_EXCERPT['casel-2020'] = 'y4a-10'
    # "CASEL'S SEL FRAMEWORK: What Are the Core Competence Areas and Where Are They Promoted?"
NOTES_REPLACE['casel-2020'] = (
    "URL of record (CP-12-20, 2026-10-16): the 11.2020 PDF, which carries the cited title and all five "
    "competencies (claim y4a-10). Alternate copies with the same component wording: the handout titled "
    "'The CASEL 5' at https://casel.s3.us-east-2.amazonaws.com/sites/5/CASEL-Framework-and-Skills.pdf "
    "(read in CP-10-01) and the page https://casel.org/casel-sel-framework-11-2020/ (claims y2-05, y5-03). "
    "No copy prints a date; the year 2020 rests on the file name and URL slug (y4a-10, y5-03). "
    "Self-Awareness bullets by code (CP-12-20): 'Identifying one's emotions' -> Y4.1; "
    "'Examining prejudices and biases' -> Y4.5; 'Integrating personal and social identities' -> Y5.1; "
    "'Experiencing self-efficacy' and 'Having a growth mindset' -> Y5.4; 'Developing interests and a "
    "sense of purpose' -> Y5.5 (verified, y5-03; not cited, Y5.5 rests on Search Institute); "
    "'Linking feelings, values, and thoughts' and 'Identifying personal, cultural, and linguistic assets' "
    "-> no code cites them (partial fits only: y4a-07, y5-12, y5-10). Other CASEL skills with no code of "
    "their own are routed by rulesText rule 14."
)
# The 2.x pointer "see CONFUSIONS.md CF-016" is dropped from the note: CF-016 uses 2.x numbers.
# CP-12-27 adds its 3.x restatement; rule 14 is the live 3.x routing.
```

Support excerpts. `SUPPORT_RECHECK` rows that CP-12-03 already sets from claims read on the
11.2020 PDF need no change here (y4a-08 Y4.2, y4b-01 Y4.7, y4b-03 Y4.8, y4b-04 Y4.9, y4b-07
Y4.11, y4b-09 Y4.12). For every other `casel-2020` support (Y4.1, Y4.3, Y4.4, Y4.5, Y4.6, Y4.10,
Y4.12 "Resisting negative social pressure", Y5.1, Y5.4, and Y2.2 once CP-12-01 adds it from
y2-05), `apply()` appends to `verifier_note`: "Read on the sites/5 handout (same wording as the
URL of record); re-read on the 11.2020 PDF pending V-CASEL-1." When V-CASEL-1 returns, each
SUPPORTED or PARTIAL row replaces that support's `excerpt` and note through `SUPPORT_RECHECK`,
with its current `fit` unchanged unless the verifier says otherwise.

Result: 0 sources and 0 supports added or removed; `casel-2020` url, excerpt and notes change.

### Self-Awareness allocation (recorded in the note above)

| CASEL Self-Awareness bullet (verified wording) | Code | Evidence |
|---|---|---|
| "Identifying one's emotions" | Y4.1 Emotion Awareness | registry, direct (CP-10-01) |
| "Examining prejudices and biases" | Y4.5 Respect for Diversity & Cultural Competence | registry, direct (CP-10-01) |
| "Integrating personal and social identities" | Y5.1 Self-Understanding & Identity Exploration | registry, partial (CP-10-01) |
| "Experiencing self-efficacy"; "Having a growth mindset" | Y5.4 Confidence, Self-Efficacy & Self-Worth | registry, direct (CP-10-01) |
| "Developing interests and a sense of purpose" | Y5.5 Purpose & Future Orientation (not cited) | y5-03 SUPPORTED: "Developing interests and a sense of purpose" |
| "Linking feelings, values, and thoughts" | none | y4a-07 PARTIAL (Y4.1), y5-12 PARTIAL (Y5.1); both rejected by their batches |
| "Identifying personal, cultural, and linguistic assets" | none | y5-10 PARTIAL (Y5.2); removed from Y5.4's `basis` by CP-12-04 |

Any other Self-Awareness bullet is added to the table only after V-CASEL-1 records it.

### `codebooks/youthOutcomesV3.data.ts`, rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| casel-2020 | verified | y4a-10 SUPPORTED: "CASEL'S SEL FRAMEWORK: What Are the Core Competence Areas and Where Are They Promoted?" (title; all five competencies) |
| casel-2020 → Y5.5 (not a support) | verified wording only | y5-03 SUPPORTED: "Developing interests and a sense of purpose" |

## Verification requests

**V-CASEL-1. Re-read the CASEL components on the URL of record.** The same source, not a new
citation. Send one claim per component to `codebook-citation-verifier`:

```
claim_id: casel-11-2020-<code>
code: <Y4.1, Y4.3, Y4.4, Y4.5, Y4.6, Y4.10, Y4.12, Y5.1, Y5.4, Y2.2>
cite_as: CASEL (2020), CASEL's SEL Framework: What Are the Core Competence Areas and Where Are They Promoted?
claimed_component: <the support's current `component` string, unchanged>
url: https://casel.s3.us-east-2.amazonaws.com/CASEL-SEL-Framework-11.2020.pdf
```

Plus one claim, `casel-11-2020-self-awareness-list`, code Y4/Y5, claimed component: "the complete
list of bullets printed under Self-Awareness", so the allocation table can be completed.

## Gold impact

- Rows expected to change code: none (no prompt text changes).
- New proposed rows: none.

## Dependencies and boundaries

- **CP-12-03** owns the new Y4 CASEL support rows; this CP owns only the source-level url, excerpt
  and note. Whichever lands first creates the batch 1 module; the other adds its tables.
- **CP-12-01** adds the Y2.2 CASEL support (y2-05, read on the casel.org page); it gets the same
  "pending V-CASEL-1" note.
- **CP-12-27** restates CF-016 in 3.x ids; this note stops pointing at the 2.x entry.
- Held-out gold was not read.

## Judge result

Not run. No prompt change; `npm test` (`registry.test.ts`, `youthOutcomesV3.test.ts`) is the check.
