# CP-12-08: F1 citations (component-level CSSP, primary Epstein, WIOA Title II, SNAP-Ed)

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Registry and `basis`: F1.1, F1.2, F1.3, F1.4, F1.6, F1.8. Registry entry `epstein-six-types` (shared with F1.9 and A2.6; their supports are not changed). **F1.7 and F1.9 are not touched** (see items 20 and 16). No definition, include, exclude, useInstead, example, source line, `frameworkBasis`, `fidelity` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today; 3.2.x if PR #62 merges first) |
| Requirement served | R1 frameworks |
| Status | draft (batch 3 research review, 2026-10-16); not applied |
| Reaches the coding prompt? | **No.** Registry and `basis` only. No scoring run; `npm test` is the gate. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **none.** F1.1 "parenting confidence" draws on CSSP Parental Resilience ("having self-confidence", claim f1-01), inside F1's own CSSP anchor, so it is not a departure (if Severin wants it logged, it is merged-components, not counted). F1.6 "older adults": WIOA Title II covers any adult (decision C). **Contingent FD-P34 (provisional id)**, F1.3, codebook-defined, counted, only if the SNAP-Ed MT1 page and a verified archive copy are both lost (request V7). **Open, not logged:** F1.6 "financial skills" has no F1.6 support after this CP; it depends on decision B3-5 (see Problem 6). F1 drift stays 0/9. |

## Problem

Batch 3 recommendations, "Act now", B3-CP2, items 15 to 20.

1. **F1.1 and F1.4 cite bare factor names.** The `cssp-strengthening-families` page "only lists
   the factors and does not define them" (CP-10-01 notes), and F1.4's link is partial.
2. **Epstein is cited from a secondary compilation.** `epstein-six-types` notes say the status
   "stays 'located' until the primary source ... is checked", and the F1.1, F1.2, F1.8 and F1.9
   `basis` lines still say "(located)".
3. **F1.2 routines** (S022, "consistent bedtime and daily routine") have no component.
4. **F1.3 family eating habits** (H072) have no component. MIECHV and MICH-14/15 cover infant
   practices only.
5. **F1.6 adult education and English** (H062, S118) rest on Ascend's Postsecondary & Employment
   Pathways and the DEA digital-literacy definition. Neither names adult basic education or ESL.
6. **F1.6 "financial skills"** is covered by no F1.6 support. The one candidate, Ascend Economic
   Assets (f1-08, PARTIAL), was rejected by T, P and D: it is F2's anchor, and adjudicated H027 puts
   household financial confidence in F2.1. The recommendations count F1 at 0/9 without logging
   this. It is listed here so it is not lost; decision B3-5 settles it.

## Change

### Registry (`codebook-refinement/v3/verification_2026_10_16_b3.py`, F1 section)

The module and record file are created by CP-12-07. If CP-12-07 is rejected, this CP creates them
with the same shape. The record gains claim_ids f1-01, f1-02, f1-03, f1-04, f1-06, f1-07, f1-11
and f1-14 (copied from `batch3/verify/`). `source_kind`: cssp.org, resources.corwin.com and
snaped.fns.usda.gov are the publisher's own hosts (primary). law.cornell.edu is a full-text copy
of the statute, treated as primary as in CP-11-01 (42 U.S.C. 675). **The coordinator confirms
these values.**

```python
# --- CP-12-08 (F1) ---------------------------------------------------------

NEW += [
    {'id': 'cssp-core-meanings',
     'cite_as': 'Center for the Study of Social Policy (n.d.). Core Meanings of the Strengthening Families Protective Factors.',
     'tier': 'D', 'publisher': 'Center for the Study of Social Policy', 'year': None, 'codebook_names': [],
     'supports': [
        ('F1.1', 'Knowledge of Parenting and Child Development: understanding child development and parenting strategies', 'f1-02'),
        ('F1.4', 'Parental Resilience: managing stress and functioning well', 'f1-01'),
        ('F1.2', 'Knowledge of Parenting and Child Development: regular, predictable and consistent routines (framed as parenting knowledge)', 'f1-14')]},  # PARTIAL
    {'id': 'wioa-title-ii-aefla',
     'cite_as': 'Workforce Innovation and Opportunity Act, Title II (Adult Education and Family Literacy Act), 29 U.S.C. 3272(1) and 3272(6).',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None, 'codebook_names': [],
     'supports': [
        ('F1.6', '3272(1) adult education: instruction below the postsecondary level in English and mathematics toward a secondary school diploma or equivalent, transition to postsecondary education, and employment', 'f1-06'),
        ('F1.6', '3272(6) English language acquisition program for adult English language learners', 'f1-07')]},
    {'id': 'snap-ed-framework-mt1',
     'cite_as': 'U.S. Department of Agriculture, Food and Nutrition Service. SNAP-Ed Evaluation Framework, MT1: Nutrition-Related Behavioral Changes.',
     'tier': 'A', 'publisher': 'U.S. Department of Agriculture, Food and Nutrition Service', 'year': None, 'codebook_names': [],
     'supports': [('F1.3', 'MT1: changes in individual and family healthy eating behaviors, including fruit and vegetable intake', 'f1-11')]},
]

# Epstein: move the entry to the primary handbook copy.
URLS['epstein-six-types'] = 'https://resources.corwin.com/sites/default/files/5_4-keys_to_partnerships.pdf'
CITE_AS['epstein-six-types'] = ("Epstein, J. L., et al. (2019). School, Family, and Community Partnerships: Your Handbook for Action (4th ed.). Corwin. "
                                "Handout: Epstein's Six Types of Involvement (1 Parenting, 2 Communicating, 3 Volunteering, 4 Learning at Home, 5 Decision Making, 6 Collaborating with the Community).")
PUBLISHER['epstein-six-types'] = 'Corwin'          # was 'Johns Hopkins University / National Network of Partnership Schools'
YEAR['epstein-six-types'] = 2019                   # was null
SOURCE_EXCERPT['epstein-six-types'] = 'f1-03'
SUPPORT_RECHECK.update({
    ('epstein-six-types', 'F1.2'): ('f1-03', 'direct', 'Type 4 Learning at Home'),
    ('epstein-six-types', 'F1.8'): ('f1-04', 'partial', 'Type 2 Communicating (the communication clause of F1.8 only)'),
})
NOTES_REPLACE['epstein-six-types'] = (
    "Primary copy checked 2026-10-16 (CP-12-08, claim f1-03): Corwin handout, footer 'School, Family, and Community Partnerships, Fourth Edition by J. L. Epstein et al. "
    "Copyright © 2019 by Corwin.' The F1.2 and F1.8 supports were re-read there (f1-03, f1-04). The F1.1, F1.9 and A2.6 support excerpts were read on the NNPS (2019) "
    "Promising Partnership Practices compilation in CP-10-01 and are kept. The F1.9 support is left as it is until draft PR #62 (CP-09-01) settles F1.9's wording; "
    "claim f1-05 (Types 3 and 5, SUPPORTED on the Corwin copy) is to be applied after that. The old organizingengagement.org URL serves unrelated content (CP-10-01).")
    # Drops the stale 2.x note ("Current codebook mapping errors: 3.5 cites Type 4 ...") and the stale "stays 'located'" sentence.

NOTES.update({
    'cssp-core-meanings': ("The PDF prints neither CSSP's name nor a year, only the cssp.org address, and the file is hosted on cssp.org. '2015' appears only in the file name, and "
                           "CSSP's resource page is dated October 16, 2018 (verifier notes f1-01, f1-02, f1-14), so no year is cited (S1.4). The Parental Resilience list's "
                           "placement is inferred from the table layout (f1-01). The F1.2 routines item is framed as parenting knowledge, hence partial (f1-14)."),
    'snap-ed-framework-mt1': ("Some MT1 respondents may be youth participants rather than families (f1-11 verifier). The reported end of SNAP-Ed funding (2025) is an unverified "
                              "lead; an archived copy is requested (V7). If the live page goes and no verified archive exists, open FD-P34 (F1.3, H072)."),
    'wioa-title-ii-aefla': 'Covers any adult, including older adults (decision C: no FD for F1.6 "older adults"). 3272(9) family literacy (f1-10, PARTIAL) is not used: it lists program activities.',
})
```

The F1.4 rows on `cssp-strengthening-families` (partial) and
`cssp-sf-yt-research-foundation-2024` (partial) stay. F1.4 becomes direct through
`cssp-core-meanings`.

Result: **+3 sources, +6 supports**, two support rechecks. `codebook_extensions` unchanged.

**Item 20, F1.7 (held, not applied).** The recommendation is to drop `mapp-kuttner-2013 → F1.7`
(partial). But F1.7's *source line*, which reaches the prompt, names "Mapp & Kuttner (2013),
Dual Capacity-Building Framework". Dropping the registry row alone would leave the prompt citing
a source the registry no longer lists for that code, which CLAUDE.md's citation-line rule forbids.
There are two options:
(a) do it in CP-12-14, together with removing Mapp & Kuttner from F1.7's source line (a prompt
edit; offered there as an optional addition), or (b) keep the row, as the devil's advocate prefers
("No coding effect"). This CP takes neither, and leaves F1.7 as it is.

**Item 20, F1.8.** The recommendation says "add Epstein T2 to F1.8 as partial". F1.8 already has
that row (partial, from the NNPS copy). This CP re-points it to the primary copy (f1-04) and narrows
the component to the communication clause.

### `codebooks/youthOutcomesV3.data.ts`: `basis` (data only)

| Code | Before | After |
|---|---|---|
| F1.1 | CSSP Strengthening Families, Knowledge of Parenting and Child Development (verified); Epstein Type 1 (located). | CSSP Strengthening Families, Knowledge of Parenting and Child Development (verified; component text from CSSP (n.d.), Core Meanings of the Strengthening Families Protective Factors, claim f1-02, CP-12-08); Epstein Type 1 (verified on the NNPS 2019 compilation, CP-10-01). Parenting confidence draws on CSSP Parental Resilience ("having self-confidence", claim f1-01), in the same framework. |
| F1.2 | Epstein Type 4, Learning at Home (located). | Epstein et al. (2019), Type 4 Learning at Home (verified, direct; Corwin handbook copy, claim f1-03). Routines: CSSP (n.d.), Core Meanings, "regular, predictable and consistent routines" (verified, partial: framed as parenting knowledge; claim f1-14). |
| F1.3 | MIECHV performance measures (verified); Healthy People 2030 MICH-14, MICH-15 (verified). Kept by Severin's decision despite being early-childhood sources. | *(unchanged text, then)* Family eating habits: USDA FNS, SNAP-Ed Evaluation Framework, MT1 Nutrition-Related Behavioral Changes (verified, direct; claim f1-11, CP-12-08). |
| F1.4 | CSSP Strengthening Families, Parental Resilience (verified). Re-verified 2026-09-27 (CP-10-01): the definition is recorded from Harper Browne (2024), CSSP's research foundation for the framework (verified, partial). | *(unchanged text, then)* CP-12-08: CSSP (n.d.), Core Meanings, Parental Resilience (verified, direct; claim f1-01). |
| F1.6 | Ascend 2Gen, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified). | Ascend 2Gen, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified); WIOA Title II, Adult Education and Family Literacy Act, 29 U.S.C. 3272(1) adult education and 3272(6) English language acquisition (verified, direct; claims f1-06, f1-07, CP-12-08). Older adults: covered by WIOA Title II (decision C). Financial skills: no F1.6 source; pending decision B3-5. |
| F1.8 | Epstein Type 2, Communicating (located); Mapp & Kuttner (2013) (verified). | Mapp & Kuttner (2013) (verified, direct); Epstein et al. (2019), Type 2 Communicating (verified, partial: the communication clause only; claim f1-04). |

F1.9's `basis` ("Epstein Types 3 and 5 (located)") is stale too. It is left alone for PR #62.

### `DEVIATIONS.md`

No entry. Append one bullet to the "Batch 3 review" section CP-12-07 creates (or create the
section with this bullet):

```markdown
- **F1 (CP-12-08).** No entry. F1.2 routines, F1.3 family eating habits and F1.6 adult education and English are now cited (CSSP Core Meanings, SNAP-Ed MT1, WIOA Title II). F1.6 "older adults" needs none under the age rule (decision C). F1.6 "financial skills" has no F1.6 source and waits on decision B3-5; if B3-5 keeps it in F1.6 without a source, it needs an entry (F1 1/9). F1.9 and CP-09-01's Epstein Type 3 question belong to PR #62 (decision B3-7).
```

Drift table: F1 row unchanged (0/9).

### `frameworkBasis`, source lines, `rulesText`, hints, `CONFUSIONS.md`

Unchanged. WIOA Title II, SNAP-Ed, IDEA, DEA and HP2030 in the F1 basis are CP-12-14 item 27
(decision B3-1).

## Sources

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| cssp-core-meanings (new) | verified | Knowledge of Parenting; Parental Resilience; routines (partial) | f1-02 "Understanding child development and parenting strategies that support physical, cognitive, language, social and emotional development."; f1-01 "Managing stress and functioning well when faced with challenges, adversity and trauma."; f1-14 PARTIAL "regular, predictable and consistent routines" |
| epstein-six-types | verified (primary copy) | Type 4; Type 2 (partial) | f1-03 "Involve families with their children in learning at home, including homework, other curriculum-related activities,"; f1-04 PARTIAL "Communicate with families about school programs and student progress through effective school-to-home" |
| wioa-title-ii-aefla (new) | verified | 3272(1), 3272(6) | f1-06 "academic instruction and education services below the postsecondary level that increase an individual's ability to"; f1-07 "designed to help eligible individuals who are English language learners achieve competence in reading," |
| snap-ed-framework-mt1 (new) | verified | MT1 | f1-11 "Changes in individual and family healthy eating behaviors on the pathway to achieving the current Dietary Guidelines" |

Verified but not used: f1-05 (F1.9; waits for PR #62), f1-08 (Ascend for F1.6; rejected), f1-09
(DEA 1721(8); not needed under C), f1-10 (WIOA 3272(9); rejected), f1-12 (Mapp & Bergman V2;
rejected), f1-13 (7 U.S.C. 2036a(b); rejected).

## Verification requests

```
V6  claim_id: f1-02b · code: F1.1 · cite_as: Center for the Study of Social Policy. Core Meanings of the Strengthening Families Protective Factors. · claimed_component: Publication year and publisher as printed on the document or on CSSP's resource page for it (the file name says 2015; the resource page is dated 2018). · url: https://cssp.org/wp-content/uploads/2025/03/Core-Meanings-of-the-SF-Protective-Factors-2015.pdf
V7  claim_id: f1-11b · code: F1.3 · cite_as: U.S. Department of Agriculture, Food and Nutrition Service. SNAP-Ed Evaluation Framework, MT1: Nutrition-Related Behavioral Changes (archived copy). · claimed_component: An archived snapshot (e.g. Internet Archive) of the MT1 page that shows the same text 'Changes in individual and family healthy eating behaviors'. Report the snapshot URL and date. · url: https://web.archive.org/web/2025/https://snaped.fns.usda.gov/framework/components/mt1
```

V6 is not blocking: the citation stays "(n.d.)" until V6 confirms a year. V7 is not blocking
either: the live page verified on 2026-10-16. A verified snapshot URL is added to `notes` when it
returns.

## Decisions for Severin (this CP depends on)

- **C (age rule):** "older adults" in F1.6 needs no FD (WIOA covers any adult).
- **B3-5:** F1.6 "financial skills" against H027 and the F2.1 line. Until it is decided, F1.6 has
  an unlogged element (Problem 6).
- **D (timing):** recommended now (registry only).
- **Item 20 (F1.7):** move the drop into CP-12-14 together with the source-line edit, or keep the
  row.
- **A2.6 owner (batch 4):** `epstein-six-types` changes URL, cite_as and publisher; the A2.6
  support's excerpt and fit do not change.

## Not bundled

f1-05 on F1.9 (PR #62); the F1.9 `basis` "(located)" tag (PR #62); later items 7, 8, 9 and 12
(volunteering, the F1.6/F2.1 CF, CF-008 renumbering, child-welfare entry); B3-6 (S176).

## Gold impact

- Rows expected to change code: **none**.
- Design rows the edits rest on: S245, S173 (F1.1); S119, S022 (F1.2); H066, H072 (F1.3); S239
  (F1.4); S118, H062, H078 (F1.6); S157 (F1.8). S164 and S176 (F1.9) are not touched.
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run (no prompt change). `npm test` and `npm run typecheck:server`.
