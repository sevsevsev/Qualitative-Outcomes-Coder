# CP-12-04: Y5 citation fixes and deviation log (batch 2 research review)

**In plain words.** This proposal fixes where the Identity domain's codes get their sources. It changes no wording that tells coders what a code means. Purpose and Future Orientation (Y5.5) now has a checked source for growth in faith (Search Institute's Spiritual Development), so the note that it departs from its framework is closed. Domain Identity (Y5.3) names athletes, readers and writers, which no checked source covers, so that departure is now written down openly; Agency, Self-Determination and Self-Advocacy (Y5.6) gets the federal disability-services law that requires "instruction in self-advocacy" once a checker reads the official government copy, and Cultural and Social Identity (Y5.2) gets its Learning for Justice edition and year. The record-keeping changes can land now; the source lines that coders see wait for one combined pair of test runs after the two open pull requests (#62 and #66) merge.

| Field | Value |
|---|---|
| Type | CITATION_FIX (with the matching `DEVIATIONS.md` entries, as in recommendations section 2: "Each item is a citation-and-deviation CP") |
| Codes touched | Source lines (part b only): Y5.2, Y5.3, Y5.5, Y5.6. `basis`: Y5.2, Y5.3, Y5.4, Y5.5, Y5.6. `fidelity`/`deviation`: Y5.3 (framework → adapted, FD-P26), Y5.5 (adapted → framework, FD-P12 removed). Registry: `nagaoka-2015-foundations`, `learning-for-justice-sjs`, plus 2 new sources now and 2 more when V-Y5-1 and V-Y5-2 return. No definition, include, exclude, useInstead, example, hint or rulesText changes. **Y5.1 is not touched. Y4.5 is not touched** (it shares the LFJ entry only if batch 1 adopts claim y4a-03). |
| Version bump | PATCH. Part (a): the next PATCH when applied (3.1.5 if it is the first after 3.1.4). Part (b): inside the single batched Source PATCH after PRs #62 and #66 merge (decision G10), with one two-run design-set gate. |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: registry rows in `v3/verification_2026_10_16_b2.py` (Learning for Justice 2022, Nagaoka publisher, Search spiritual development, Farrington 2019 after V-Y5-3 PARTIAL, Rehabilitation Act 733 Pre-ETS after V-Y5-1 PARTIAL); `basis` Y5.2-Y5.6; Y5.5 to framework (FD-P12 closed, FD-005 note); Y5.3 adapted (FD-P26, which also covers science because V-Y5-2 found NRC 2009 only on a secondary host, so that row was not added); Batch 2 bullets and drift row. Waits for the gate: Source lines Y5.2, Y5.3, Y5.5, Y5.6 and the Y5 `frameworkBasis` clause (CP-12-29). |
| Enum cost | +0 (160 → 160; no code added, removed or renamed) |
| Framework deviation | changed FD-P12 (closed: Y5.5's faith element now rests on Search Institute, Spiritual Development, claim y5-14; decision Y5-1); new **FD-P26 (provisional id)**, Y5.3, sector-widening, counted; FD-005 (2.x) gets a note that its revisit trigger is met, status unchanged. None for Y5.2 (decision G5), Y5.4, Y5.6 (decisions G1, G4); reasons recorded in `DEVIATIONS.md`, below. Y5 drift: 1/6 → 1/6 (Y5.5 out, Y5.3 in). |

## What lands when

Every change in this CP is either (a) outside the coding prompt, landing now with `npm test` as
the check, or (b) inside the prompt, waiting for the two live design-set runs after PRs #62 and
#66 merge (G10). This CP mixes both:

| Change | Reaches the prompt? | Lands |
|---|---|---|
| (a1) `fidelity`/`deviation`: Y5.3, Y5.5 | no | now |
| (a2) `basis`: Y5.2, Y5.3, Y5.4, Y5.5, and Y5.6 except its statute sentence | no | now |
| (a2) `basis`: Y5.6 statute sentence | no | now, once V-Y5-1 returns SUPPORTED or PARTIAL on the official copy |
| (a3) registry rows (module `verification_2026_10_16_b2.py`) | no | now; the rows for 733(b)(5) and NRC (2009) when V-Y5-1 and V-Y5-2 return |
| (a4) `DEVIATIONS.md`: FD-P12 closed, FD-005 note, FD-P26 opened, "Batch 2 review" section, drift table | no | now |
| (b) Source lines: Y5.2, Y5.3, Y5.5, Y5.6 | yes | the batched gate after PRs #62 and #66 |
| (b) Y5 `frameworkBasis` secondary clause (decision G2) | yes | in CP-12-29, in the same gate (not edited by this CP) |

## Problem

The batch 2 research review (`research-review/full-review/batch2/`, recommendations section 2,
"CP B2-Y5", items 1-6) found these faults in Y5. Evidence comes only from
`verify/verification-table.md`. Every excerpt below is the verifier's own.

1. **Y5.6 self-advocacy has no source.** The include names "Self-advocacy in IEP meetings;
   leading one's own IEP; requesting accommodations". Adjudicated rows **S032**, **S236** and
   **H060** depend on it. The current sources (Nagaoka agency, Search Personal power) do not name
   self-advocacy. The registry verifier said Personal power "does not cover the making of choices,
   self-advocacy or directing one's own supports". `basis` names Shogren, Wehmeyer et al. (2015),
   which has no registry entry (S1.1).
2. **FD-P12's trigger is met.** FD-P12 (Y5.5, faith growth) says "Revisit: as FD-005", and
   FD-005 says "if a verified framework for youth spiritual development is found". Claim y5-14
   (SUPPORTED) found one from the publisher Y5.5 already cites.
3. **Y5.3 athlete, reader and writer have no source.** The only Source line is Nagaoka's
   "profession" example (registry fit partial: "'Profession' appears only as a parenthetical
   example"). Claim y5-08 (PARTIAL) shows the full report uses a role-bound identity as the
   *contrast* to integrated identity. `basis` names Carlone & Johnson (2007), which has no registry
   entry. Adjudicated **S036** ("a STEM person") is the only design row.
4. **Learning for Justice has no edition or year** (registry `year: null`, `cite_as` with no
   edition). The URL is a landing page.
5. **Nagaoka publisher is wrong (S1.4).** The registry `publisher` gives the organization's later
   name; the copyright line prints the name at publication.
6. **`basis` drift.** Y5.4's `basis` names "Identifying personal, cultural, and linguistic
   assets", which the registry does not support for Y5.4 (R-04). Y5.4, Y5.5 and Y5.6 still say
   "(located)" for Search Institute assets that the registry has had `verified` since CP-10-01.

## Why this is the smallest fit (STANDARDS S2.2)

No definition, include or useInstead changes. Narrowing Y5.3 to STEM and the arts was rejected:
"readers and writers" is a real text (practitioner review), so the departure is logged, not
removed. Every fix is a citation, a `basis` note, a fidelity field or a log entry.

## Change

`youthOutcomesV3.ts` prints each code's definition, include, exclude, useInstead, example and
`source`, and each domain's `frameworkBasis`. It does not print `basis`, `fidelity`,
`deviation`, the registry or `DEVIATIONS.md`.

### Part (a): no prompt change (lands now; `npm test` is the check)

#### (a1) `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation`

| Code | Field | Before | After |
|---|---|---|---|
| Y5.3 | `fidelity` | `"framework"` | `"adapted"` |
| Y5.3 | `deviation` | (absent) | `"FD-P26"` (provisional id; renumbered at merge), inserted after `fidelity` |
| Y5.5 | `fidelity` | `"adapted"` | `"framework"` |
| Y5.5 | `deviation` | `"FD-P12"` | (removed) |

The public explorer shows the new fidelity on both code cards.

#### (a2) `codebooks/youthOutcomesV3.data.ts`: `basis` notes

| Code | Before | After |
|---|---|---|
| Y5.2 | Learning for Justice Social Justice Standards, Identity (verified); Muhammad, Pursuit 1 Identity (verified). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names race/ethnicity and culture (verified). | Learning for Justice (2022), Social Justice Standards, Second Edition, Identity anchor standard ID.1 (verified, direct; claim y5-11). Muhammad, Pursuit 1 Identity (verified, direct; names race, and is the source for "racial" added by CP-10-04). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names race/ethnicity and culture (verified, partial). Sexual, gender and linguistic identity are named instances of LFJ ID.1's "multiple groups in society", which the registry quotes (decision G5); no FD. |
| Y5.3 | Carlone & Johnson (2007), science identity: competence, performance, recognition (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names profession among social identities (verified). | Farrington et al. (2019), arts education and SEL, "identities as artists" (verified, direct; claim y5-07; year and publisher pending V-Y5-3). National Research Council (2009), Strand 6, identity as a science learner (pending re-verification on NAP, V-Y5-2). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) integrated identity names profession among social identities (verified, partial; supporting only: the full report uses a role-bound identity as the contrast to integrated identity, claim y5-08). Athlete, reader and writer go past these sources: sector widening, FD-P26. |
| Y5.4 | CASEL (2020) SEL Framework (verified), Self-Awareness: 'Experiencing self-efficacy'; 'Having a growth mindset'; 'Identifying personal, cultural, and linguistic assets'; Search Institute Positive Identity, Self-esteem (located). Re-review … FD-P11 closed. | CASEL (2020) SEL Framework (verified), Self-Awareness: 'Experiencing self-efficacy'; 'Having a growth mindset'; Search Institute Positive Identity, Self-esteem (verified). Re-review … FD-P11 closed. *(the rest of the string is unchanged)* |
| Y5.5 | Search Institute Positive Identity, Sense of purpose; Positive view of personal future (located). Re-review 2026-09-26 (STANDARDS S4.9): Search Institute sense of purpose and positive view of future assets (content verified). Nagaoka does not support purpose (verifier: unsupported). | Search Institute Positive Identity, Sense of purpose; Positive view of personal future (verified, direct). Re-review 2026-09-26 (STANDARDS S4.9): Search Institute sense of purpose and positive view of future assets (content verified). Nagaoka does not support purpose (verifier: unsupported). CP-12-04: Search Institute, Spiritual Development, three core developmental processes (verified, direct; claim y5-14) covers spiritual purpose and growth in faith. FD-P12 closed. |
| Y5.6 | Shogren, Wehmeyer et al. (2015), Causal Agency Theory (partial); Search Institute Personal Power (located); Nagaoka et al. (2015) agency (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) agency (verified); Search Institute personal power asset (content verified). | Search Institute Personal Power (verified, partial); Nagaoka et al. (2015) agency (partial). Re-review 2026-09-26 (STANDARDS S4.9): Nagaoka et al. (2015) agency (verified); Search Institute personal power asset (content verified). CP-12-04: Rehabilitation Act, 29 U.S.C. 733(b)(5), pre-employment transition services, "instruction in self-advocacy" (verified on the official copy, claim y5-05b; partial: a required service, counted as partial-fit support with no FD, decision G4). The code names IEPs, which is inside the statute's population (students with disabilities), so no FD (decision G1). |

Y5.6's last two sentences ("CP-12-04: Rehabilitation Act … (decision G1).") land only once
V-Y5-1 returns on the official copy. Under decision G8 the Cornell LII copy (claim y5-05) is not
enough: the verifier recorded no bibliographic match, only that "Cornell LII reproduces the
statute; it is not the official publisher". Until then only the Shogren and "(located)" edits
land for Y5.6. Y5.4's edit does not add the "linguistic assets" bullet to Y5.2 either
(recommendation item 6).

#### (a3) Registry

Per CLAUDE.md, registry results change in the build scripts, not in
`sources/youth_outcomes_v3.sources.json`.

**New verification record: `codebook-refinement/v3/source-verification-2026-10-16-b2.json`.**
Same row shape as `source-verification-2026-09-27.json` (`claim_id`, `kind`, `source_id`,
`code`, `cite_as`, `claimed_component`, `url_given`, `verdict`, `url_checked`, `source_kind`,
`excerpt`, `corrected_cite_as`, `notes`). Each row is copied unchanged from
`research-review/full-review/batch2/verify/claims-{a,b}.json` (the claim) and
`verdicts-{a,b}.json` (`verdict`, `fetched_url` → `url_checked`, `excerpt`, `note` → `notes`).
`source_kind` is `primary` when `url_checked` is the publisher's or a government host, else
`secondary`. CP-12-04 contributes these rows:

| claim_id | Verdict | source_kind | Used for |
|---|---|---|---|
| y5-07 | SUPPORTED | primary (consortium.uchicago.edu) | new source: Farrington et al. (2019) → Y5.3 |
| y5-08 | PARTIAL | primary | note on Nagaoka → Y5.3 (supporting only); not a support |
| y5-11 | SUPPORTED | primary (learningforjustice.org) | LFJ cite_as, year, URL and Y5.2 excerpt |
| y5-13 | SUPPORTED | primary | Nagaoka publisher as printed |
| y5-14 | SUPPORTED | primary (search-institute.org) | new source: Search Institute, Spiritual Development → Y5.5 |
| y5-05 | SUPPORTED | secondary (Cornell LII) | recorded as a content lead only; not used for the registry (G8); V-Y5-1's official-copy row replaces it |
| (V-Y5-1, V-Y5-2, V-Y5-3) | pending | | added when the verifier answers |

**New script: `codebook-refinement/v3/verification_2026_10_16_b2.py`**, shared by CP-12-04,
CP-12-05 and CP-12-06. Same shape as `verification_2026_09_27.py` (docstring, `RECORD`,
`DATE = '2026-10-16'`, `BY`, input tables, `apply(out, codes)`). Each CP adds its own rows to the
tables; whichever CP is applied first creates the module. If CP-11-01's
`verification_2026_10_16.py` is already in the repo, these tables may be appended to it instead.
A separate module keeps `verification_2026_09_27.py`, which PR #62 also edits, out of the way.
CP-12-04's inputs:

```python
RECORD = json.loads((HERE / 'source-verification-2026-10-16-b2.json').read_text())
DATE = '2026-10-16'
BY = 'Batch 2 research review, Y5-Y7 (independent codebook-citation-verifier, blind to proposer; WebFetch)'

# A copy of the document itself on a non-publisher host is accepted only where the
# verifier recorded a bibliographic match (decision G8). CP-12-05 adds its entry.
FULL_TEXT_ELSEWHERE = set()

CITE_AS = {
    'learning-for-justice-sjs': 'Learning for Justice (2022). Social Justice Standards: The Learning for Justice Anti-bias Framework, Second Edition. The Southern Poverty Law Center, Inc.',
}
PUBLISHER = {
    'nagaoka-2015-foundations': 'University of Chicago Consortium on Chicago School Research',  # was 'University of Chicago Consortium on School Research'
    'learning-for-justice-sjs': 'The Southern Poverty Law Center, Inc. (Learning for Justice)',  # was 'Learning for Justice (Southern Poverty Law Center)'
}
YEAR = {'learning-for-justice-sjs': 2022}  # was null
URLS = {
    'learning-for-justice-sjs': 'https://www.learningforjustice.org/sites/default/files/2022-09/LFJ-Social-Justice-Standards-September-2022-09292022.pdf',
}
SOURCE_EXCERPT = {'learning-for-justice-sjs': 'y5-11'}  # source-level excerpt from the new URL
NOTES = {  # appended to the source's existing `notes`
    'nagaoka-2015-foundations': "Publisher named as printed at publication: '©2015 University of Chicago Consortium on Chicago School Research' (claim y5-13, full report, 2026-10-16). The organization's later name is University of Chicago Consortium on School Research (S1.4 rename note). Watch item (S4.9): an update of this framework was reported for fall 2026 (review lead, not verified); re-review Y5's anchor before citing any new edition.",
    'learning-for-justice-sjs': 'Second Edition, (c) 2014-2022, publisher printed as The Southern Poverty Law Center, Inc. (claim y5-11). One cite_as serves every code that cites LFJ (R-05); title casing ("Anti-bias") follows the verified claim. Batch 1 (y4a-03, Y4.5) must reuse this string.',
}
COMPONENTS = {
    ('learning-for-justice-sjs', 'Y5.2'): "Identity anchor standard ID.1: 'develop positive social identities based on their membership in multiple groups in society'; grade outcome ID.9-12.4",
}
SUPPORT_RECHECK = {  # (source, code) -> (claim, fit, note or None for the claim's own note)
    ('learning-for-justice-sjs', 'Y5.2'): ('y5-11', 'direct', None),
}
SUPPORT_NOTE_APPEND = {
    ('nagaoka-2015-foundations', 'Y5.3'): " Supporting only (CP-12-04): the full report uses a role-bound identity ('as a songwriter who performs at regular open-mics') as the contrast to integrated identity (claim y5-08, PARTIAL). Y5.3's direct sources are Farrington et al. (2019) and, once re-verified, NRC (2009).",
}

NEW = [
    {
        'id': 'search-spiritual-development', 'claim': 'y5-14',
        'cite_as': 'Search Institute. (n.d.). Spiritual Development.',
        'codebook_names': ['Spiritual Development'],
        'tier': 'D', 'publisher': 'Search Institute', 'year': None,
        'supports': [('Y5.5', "three core developmental processes of spiritual development: 'Awareness or awakening', 'Interconnecting and belonging', 'Living an integrated life'")],
    },
    {
        'id': 'farrington-2019-arts-sel', 'claim': 'y5-07',
        # Year and publisher come from the URL and file name; V-Y5-3 confirms them from the document.
        'cite_as': 'Farrington, C. A., Maurer, J., Aska McBride, M. R., Nagaoka, J., Puller, J. S., Shewfelt, S., Weiss, E. M., & Wright, L. (2019). Arts Education and Social-Emotional Learning Outcomes Among K-12 Students: Developing a Theory of Action. University of Chicago Consortium on School Research and Ingenuity.',
        'codebook_names': ['Farrington et al. (2019)'],
        'tier': 'C', 'publisher': 'University of Chicago Consortium on School Research and Ingenuity (per V-Y5-3)', 'year': 2019,
        'supports': [('Y5.3', "social-emotional competency 'Self-expression and identity' (pp. 15, 22); 'identities as artists' (p. 18)")],
    },
    # Added when V-Y5-1 returns on the official copy (govinfo). The Cornell LII copy (y5-05)
    # is not used (decision G8: no bibliographic match recorded).
    {
        'id': 'rehab-act-29usc733-pre-ets', 'claim': 'y5-05b',
        'cite_as': '29 U.S.C. 733(b)(5), Rehabilitation Act of 1973, as amended by WIOA: pre-employment transition services, required activities.',
        'codebook_names': ['29 U.S.C. 733(b)(5)'],
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'fit': 'partial',  # a required service, not an outcome: partial-fit support, no FD (decision G4)
        'supports': [('Y5.6', "required activity (b)(5) for students with disabilities: 'instruction in self-advocacy, which may include peer mentoring'")],
    },
    # Added when V-Y5-2 returns SUPPORTED or PARTIAL from a NAP copy.
    {
        'id': 'nrc-2009-informal-science', 'claim': 'y5-06b',
        'cite_as': 'National Research Council (2009). Learning Science in Informal Environments: People, Places, and Pursuits. Washington, DC: The National Academies Press.',
        'codebook_names': ['National Research Council (2009)'],
        'tier': 'C', 'publisher': 'The National Academies Press', 'year': 2009,
        'supports': [('Y5.3', 'Strand 6: think about themselves as science learners and develop an identity as someone who knows about, uses, and sometimes contributes to science')],
    },
]
```

`apply()` follows the CP-11-01 draft: it sets `verified_on` and `verified_by` on each source it
touches, sets `notes: 'Added by CP-12-04.'` on new sources, takes `codebook_names` from the
table, and asserts every claim it uses is SUPPORTED or PARTIAL with `source_kind == 'primary'` or
the source in `FULL_TEXT_ELSEWHERE`. A support's `fit` comes from the row's `'fit'` key when
present (decision G4 rows), else from the verdict. It skips a `NEW` row whose claim is not yet
in the record, so the V-gated sources wait without blocking the rest.

**`codebook-refinement/v3/build_registry.py`**: after the existing `apply_2026_09_27(out, CODES)`
(and after CP-11-01's `apply_2026_10_16`, if present), add
`from verification_2026_10_16_b2 import apply as apply_2026_10_16_b2` and
`apply_2026_10_16_b2(out, CODES)`; set `codebook_version_reviewed` and `last_reviewed` to the
version and date this ships in.

Result for CP-12-04 alone: 87 → 89 sources and 146 → 148 supports now; 91 and 150 once V-Y5-1
and V-Y5-2 return. (Add CP-11-01's +3 if it lands first.) `codebook_extensions` unchanged.

**Shared with cross-batch CPs (one CP applies each, whichever lands first; the other drops the
rows).** The LFJ `CITE_AS`, `PUBLISHER`, `YEAR`, `URLS`, `SOURCE_EXCERPT` and `NOTES` rows are
also CP-12-21's; the Nagaoka `PUBLISHER` and `NOTES` rows (name as printed, fall-2026 watch item)
are also CP-12-24's; the "(located)" edits in (a2) are also CP-12-25's script sweep. The strings
here are the ones those CPs must use. The Y5.2 component and support re-check stay in this CP.

#### (a4) `codebook-refinement/DEVIATIONS.md`

**FD-P12, before:**

```markdown
### FD-P12 · Y5.5

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute Positive Identity, Sense of purpose (located).
- **Departs:** carries the faith-growth routing from FD-005.
- **Evidence:** as FD-005.
- **Alternative considered:** as FD-005.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-005.
```

**FD-P12, after** (only the Status and Anchor lines change; entries are never deleted):

```markdown
### FD-P12 · Y5.5

- **Status:** closed (2026-10-16, CP-12-04: the revisit trigger is met; Search Institute, Spiritual Development, three core developmental processes, verified (claim y5-14), covers spiritual purpose and growth in faith, from the publisher already in Y5's framework basis. Y5.5 is now Framework. No merged-components entry: faith growth and optimism about the future are easy to tell apart, so S1.6's merged case does not apply (decisions Y5-1 and G6).)
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute Positive Identity, Sense of purpose (verified).
- **Departs:** carries the faith-growth routing from FD-005.
- **Evidence:** as FD-005.
- **Alternative considered:** as FD-005.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-005.
```

**FD-005 (2.x), Revisit line, before:**

```
- **Revisit:** if a verified framework for youth spiritual development is found.
```

**After:**

```
- **Revisit:** if a verified framework for youth spiritual development is found. Trigger met 2026-10-16: Search Institute, Spiritual Development (claim y5-14, verified), used by CP-12-04 to close FD-P12 in 3.x. Codebook 2.5.x is retired, so this entry stays open as the record of 6.4's routing.
```

**New entry**, inserted after the last FD-P entry (FD-P20 today; FD-P23 if CP-11-02 lands
first), before the drift-count section:

```markdown
### FD-P26 · Y5.3

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Farrington et al. (2019), arts education and SEL, "identities as artists" (verified, claim y5-07); National Research Council (2009), Learning Science in Informal Environments, Strand 6, identity as a science learner (pending re-verification on NAP); Nagaoka et al. (2015), integrated identity, "profession" among social identities (verified, partial; supporting only).
- **Departs:** each source covers one field (the arts; science). Y5.3 applies the same construct, seeing oneself as a certain kind of person in a field, to any field, and its definition names three that no source names: "an athlete, a reader, a writer". The construct and wording are unchanged; only the fields widen.
- **Evidence:** S036 (adjudicated design row, Y5.3, STEM identity; also the code's prompt example). No adjudicated row covers athlete, reader or writer; the practitioner review found "Students will see themselves as readers and writers" coded Y5.3 in the real run (model code, not gold).
- **Alternative considered:** narrow the definition to STEM and the arts (MINOR; nothing in design gold flips, but real "readers and writers" texts lose their home; rejected). No entry, reading the fields as named instances of Nagaoka's "profession" (rejected: decision G5 covers a named instance only where the registry quotes the general category, and Nagaoka's "profession" is a partial fit that the full report uses as a contrast case, claim y5-08).
- **Decided in:** CP-12-04 (batch 2 research review; decisions settled 2026-10-16). Provisional id; renumbered at merge.
- **Revisit:** if a verified source names domain or field identity in general (for example a sport or literacy identity framework).
```

**New dated section** after "Anchor re-review, 2026-09-26" (and after CP-11-02's "Y1 review"
section if present). CP-12-05 and CP-12-06 add their own bullets to it. The bullets use
"**Label.**", not "**Label:**", because `deviations.test.ts` parses "**Label:**" lines after the
last `### ` heading as fields of the last FD entry.

```markdown
## Batch 2 review (Y5-Y7), 2026-10-16 (CP-12-04 to CP-12-06)

The batch 2 research review (`research-review/full-review/batch2/`) checked whether each Y5, Y6 and Y7 code's own text goes past its sources. Decisions applied: Severin's of 2026-10-16 (recommended options). Entries opened or changed: FD-P12 closed, FD-P26 opened (Y5.3). Checked and needing no entry:

- **Y5.2, sexual, gender and linguistic identity.** FD none. Learning for Justice (2022) ID.1, "Students will develop positive social identities based on their membership in multiple groups in society" (claim y5-11, verified), is the general category, and the registry quotes it; a named group is an instance of it, not a departure (decision G5). "Racial" rests on Muhammad, Pursuit 1 (direct), not on Nagaoka (partial).
- **Y5.6, self-advocacy and IEPs.** FD none. 29 U.S.C. 733(b)(5), "instruction in self-advocacy, which may include peer mentoring" (claim y5-05, re-read on the official copy as y5-05b), is a required service for students with disabilities: partial-fit support with no FD (decision G4). The code's own text names IEPs, which is inside that population (decision G1).
- **Y5.4, "linguistic assets".** Not a departure: the bullet was named in `basis` without registry support and is removed (R-04).

Watch item (S4.9): Y5's anchor, Nagaoka et al. (2015), was reported to have an update due in fall 2026 (review lead, not verified). Re-review the anchor when it is published.
```

The Y5.6 bullet lands with the Y5.6 statute sentence, once V-Y5-1 returns.

**Drift table.** Intro sentence: append ", and for CP-12-04 to CP-12-06 (2026-10-16, batch 2
review)". Y5 row, before and after:

```
| Y5 Identity | 6 | 1 (Y5.5) | 17% | no |
```

```
| Y5 Identity | 6 | 1 (Y5.3) | 17% | no |
```

#### (a5) `rulesText`, domain `hint`, `CONFUSIONS.md`

Unchanged. (`CONFUSIONS.md` is the 2.x registry; no 3.x tie-breaker depends on these citations.)

### Part (b): prompt-reaching changes (batched Source PATCH after PRs #62 and #66; two-run design-set gate)

#### Source lines (print as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y5.2 | Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (race/ethnicity, culture); Learning for Justice, Social Justice Standards (Identity); Muhammad, Five Pursuits (Pursuit 1: Identity). | Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (race/ethnicity, culture); Learning for Justice (2022), Social Justice Standards, Second Edition (Identity); Muhammad, Five Pursuits (Pursuit 1: Identity). |
| Y5.3 | Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (including profession). | Farrington et al. (2019), Arts Education and Social-Emotional Learning Outcomes Among K-12 Students (identities as artists); National Research Council (2009), Learning Science in Informal Environments, Strand 6 (identity as a science learner); Nagaoka et al. (2015), Foundations for Young Adult Success, integrated identity across social identities (including profession). |
| Y5.5 | Search Institute, Developmental Assets Framework, Positive Identity (Sense of purpose; Positive view of personal future). | Search Institute, Developmental Assets Framework, Positive Identity (Sense of purpose; Positive view of personal future); Search Institute, Spiritual Development (awareness or awakening; interconnecting and belonging; living an integrated life). |
| Y5.6 | Nagaoka et al. (2015), Foundations for Young Adult Success, key outcome: agency; Search Institute, Developmental Assets Framework, Positive Identity (Personal power). | Nagaoka et al. (2015), Foundations for Young Adult Success, key outcome: agency; Search Institute, Developmental Assets Framework, Positive Identity (Personal power); Rehabilitation Act, 29 U.S.C. 733(b)(5), pre-employment transition services (instruction in self-advocacy). |

Notes on the (b) lines:

- **Y5.2**'s year is the same edit as CP-12-21's Source-line year; it is applied once, in this gate.
- **Y5.3** keeps Nagaoka, last, as the link to Y5's anchor, as recommended: it stays as
  supporting only. Each item on the line prints only if its verification has returned by the
  gate: NRC needs V-Y5-2 (a NAP copy), and the Farrington year needs V-Y5-3. A verification that
  fails drops only its own item.
- **Y5.6**'s new item prints only if V-Y5-1 has returned on the official copy (G8).
- No line uses "partial", "located", "(verified)" or "VERIFY" (`youthOutcomesV3.test.ts`).

#### Domain Y5 `frameworkBasis`: in CP-12-29, not here

Decision G2: a framework that grounds an element outside the domain's anchor is named in
`frameworkBasis` as a "secondary" clause, and all such edits sit in one gated CP, CP-12-29. This
CP leaves Y5's `frameworkBasis` unedited and hands CP-12-29 these names for Y5's secondary
clause: Search Institute, Spiritual Development (Y5.5); Farrington et al. (2019), arts education
and SEL (Y5.3); National Research Council (2009), Learning Science in Informal Environments
(Y5.3, once V-Y5-2 returns); Rehabilitation Act, 29 U.S.C. 733(b)(5) (Y5.6, once V-Y5-1
returns). CP-12-29's list in the full-review SUMMARY does not yet include them; it must, because
its new `sync.test.ts` check requires every cited framework in its domain's `frameworkBasis`.
The clause's wording and format are CP-12-29's.

#### Gate

One two-run design-set eval for the Source parts of CP-12-04, CP-12-05 and CP-12-06, together
with the other gated citation CPs (CP-12-16, CP-12-29 and the rest listed in the full-review
SUMMARY), after PRs #62 and #66 merge (decision G10). Command from CP-11-03; output under
`codebook-refinement/eval/cp-12-b2-sources/`. Rows to watch: S036 (Y5.3), S129 (Y5.2), S016,
S250 (Y5.5), S032, S236, H060 (Y5.6). Expected flips: none.

## Sources

Only SUPPORTED or PARTIAL rows from `verify/verification-table.md` are used, with the
verifier's excerpts.

| Registry ID | Status | Component relied on | claim_id and verbatim excerpt (verifier's) |
|---|---|---|---|
| search-spiritual-development (new) | verified | three core developmental processes | y5-14 SUPPORTED: "It involves at least three core developmental processes" |
| farrington-2019-arts-sel (new) | verified; **year and publisher pending V-Y5-3** | identities as artists (p. 18) | y5-07 SUPPORTED: "students' artistic skills and identities as artists have an impact on the way they interact with the world from a social-emotional perspective." |
| learning-for-justice-sjs | verified | ID.1; edition, year, publisher | y5-11 SUPPORTED: "Students will develop positive social identities based on their membership in multiple groups in society." |
| nagaoka-2015-foundations | verified | publisher as printed | y5-13 SUPPORTED: "©2015 University of Chicago Consortium on Chicago School Research" |
| nagaoka-2015-foundations → Y5.3 | verified, partial (unchanged) | note only | y5-08 PARTIAL: "a strong identity and a set of competencies that allow her to act with agency in one role or setting (for example," |
| rehab-act-29usc733-pre-ets (new) | **located; verification pending V-Y5-1** (content verified on Cornell LII, not admissible under G8) | (b)(5) instruction in self-advocacy; fit partial (G4) | y5-05 SUPPORTED: "instruction in self-advocacy, which may include peer mentoring." |
| nrc-2009-informal-science (new) | **located; verification pending V-Y5-2** (PARTIAL, host only) | Strand 6 | y5-06 PARTIAL: "Think about themselves as science learners and develop an identity as someone who knows about, uses," |

Caveats carried into registry notes: y5-14's three process names sit in separate places on the
page, which has no year; y5-07's year and Ingenuity co-publisher are inferred from the URL and
file name; 733(b)(5) "describes a service activity, not an outcome" (verifier).

Considered and not used: Catalano et al. (y5-01, y5-02, y5-04; S1.4 year and publisher open,
later cycle; the Catalano-plus-merged-components route for Y5.5 is ruled out by decision Y5-1),
CASEL "Developing interests and a sense of purpose" (y5-03; not needed once y5-14 is in), CASEL
bullets for Y5.1 and Y5.2 (y5-12, y5-10; rejected), Damon et al. (y5-15; rejected), NASEM 2019
(y5-09; later cycle, excerpt must be re-recorded).

## Verification requests

Send each to `codebook-citation-verifier`, which sees only these fields.

**V-Y5-1. 29 U.S.C. 733(b)(5) on the official copy** (decision G8).

```
claim_id: y5-05b
code: Y5.6
cite_as: 29 U.S.C. 733(b)(5), Rehabilitation Act of 1973, as amended by WIOA: pre-employment transition services, required activities.
claimed_component: Required activity (b)(5) for students with disabilities: 'instruction in self-advocacy, which may include peer mentoring'.
url: https://www.govinfo.gov/link/uscode/29/733
```

**V-Y5-2. NRC (2009) Strand 6 on a National Academies Press copy.**

```
claim_id: y5-06b
code: Y5.3
cite_as: National Research Council (2009). Learning Science in Informal Environments: People, Places, and Pursuits. Washington, DC: The National Academies Press.
claimed_component: Strand 6 of science learning: learners think about themselves as science learners and develop an identity as someone who knows about, uses, and sometimes contributes to science.
url: https://www.nationalacademies.org/read/12190
```

Why: the y5-06 verifier read the strand on a conference website and said "the URL should point
to NAP"; the NAP page it opened did not render the strand text. A chapter page or the NAP PDF
is acceptable.

**V-Y5-3. Farrington et al. (2019): year and publisher as printed.**

```
claim_id: y5-07b
code: Y5.3
cite_as: Farrington, C. A., Maurer, J., Aska McBride, M. R., Nagaoka, J., Puller, J. S., Shewfelt, S., Weiss, E. M., & Wright, L. (2019). Arts Education and Social-Emotional Learning Outcomes Among K-12 Students: Developing a Theory of Action. University of Chicago Consortium on School Research and Ingenuity.
claimed_component: Attribution: the publication year and the publishing organizations as printed on the title page, copyright line or suggested citation.
url: https://consortium.uchicago.edu/sites/default/files/2019-05/Arts%20Education%20and%20Social-Emotional-June2019-Consortium%20and%20Ingenuity.pdf
```

Why: the y5-07 verifier: "The fetched text shows no copyright line or date, so the year 2019
and Ingenuity as co-publisher are inferred from the URL and file name only" (S1.4).

Gates: part (a) lands without them, except the Y5.6 registry row, `basis` sentence and
`DEVIATIONS.md` bullet (V-Y5-1) and the NRC registry row (V-Y5-2). In part (b) a failed request
drops only its own item.

## Decisions applied (settled 2026-10-16, Severin: recommended options)

| Decision | What it settles here |
|---|---|
| G10 | Part (a) lands now; part (b) waits for the one gate after PRs #62 and #66. |
| G5 | Y5.2: sexual, gender and linguistic identity are instances of LFJ ID.1's "multiple groups"; no FD. Y5 stays at 1/6. |
| Y5-1 | Y5.5: FD-P12 closes on Search Institute, Spiritual Development; no merged-components entry. |
| G8 | Y5.6's statute waits for the official copy (V-Y5-1); the Cornell copy is not used. NRC waits for NAP (V-Y5-2). |
| G1 | Y5.6: no FD; the code names IEPs, inside the statute's population. |
| G4 | 733(b)(5) is a required service, so it is partial-fit support with no FD. |
| G2 | Y5's secondary frameworks go into `frameworkBasis` through CP-12-29 (above). |
| G6 | No merged-components entry for Y5.5 (faith growth and future orientation are easy to tell apart). |

Y5.3 keeps Nagaoka, last, on its Source line (the CP's own recommendation; not a listed
decision).

## Dependencies and boundaries

- **PR #62** (CP-09-01..08) touches no Y5 data field. Its rule 7 adds a Y5.4/Y5.6/Y6.4 voice line
  in rulesText; this CP does not touch rulesText. Its edit to `verification_2026_09_27.py` is
  why this CP uses its own module.
- **PR #66** (CP-11-01..03) touches no Y5 code. CP-11-02's FD-P21..P23 may land first; FD-P26 is
  provisional either way. CP-11-01's `verification_2026_10_16.py` may host these tables instead.
- **Batch 1** (Y4): the LFJ `cite_as` here is the one string R-05 asks for; the Y4.5 support (if
  y4a-03 is adopted) belongs to the batch 1 CP.
- **Cross-batch CPs:** CP-12-21 (LFJ string), CP-12-24 (Nagaoka name and watch item), CP-12-25
  ("(located)" sweep), CP-12-29 (secondary clauses). See (a3) and (b).

## Not bundled (separate CPs if wanted)

Catalano as supporting framework basis for Y5 and for Y5.6 (later-cycle item 1); the resilience
tie-breaker Y4.2/Y5.4 (blocked: under decision G11 Severin first adjudicates two proposed design
rows per side, and none exist yet); Y5.2 "sexual" → "sexual orientation" (MINOR, later cycle);
the CASEL Self-Awareness allocation table (R-03, in CP-12-20); Y5.4's "linguistic assets" as a
new Y5.4 support (not proposed).

## Gold impact

- Rows expected to change code: none. No definition, include, exclude, useInstead, example or
  rule changes. The (b) gate confirms this.
- Design rows the edits rest on: S032, S236, H060 (Y5.6); S016, S250 (Y5.5); S036 (Y5.3); S129
  (Y5.2); S243, S158 (Y5.4); S004, S059, S253 (leadership is not Y5.3; unaffected).
- No change in this CP is blocked on a gold adjudication (G11 and G14 do not apply to it).
- New proposed rows: none required. A Y5.3 row for "readers and writers" would give FD-P26 its
  own gold evidence (suggested text from the real run: "Students will see themselves as readers
  and writers", suggested Y5.3); for Severin to adjudicate, ID assigned when added. No gold file
  is written by this CP.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read or used.

## Judge result

Not run. Part (a) has no prompt change; `npm test` (`deviations.test.ts`,
`youthOutcomesV3.test.ts`) is its check. Part (b) is judged with CP-12-05 and CP-12-06 in the
batched gate.
