# CP-12-08: F1 citations (component-level CSSP, WIOA Title II, SNAP-Ed) and the F1 deviation log

**In plain words.** This change ties several family codes to the exact parts of their checked sources: Parenting Knowledge and Practices (F1.1) and Caregiver Well-Being and Resilience (F1.4) to the Center for the Study of Social Policy's own definitions of its protective factors, Family Health Practices (F1.3) to the Department of Agriculture's nutrition-education framework for family eating, and Adult Education, Skills and Employment (F1.6) to the federal adult education law. It also logs one deviation: F1.6 names "financial skills", and no source the codebook may cite covers them; you confirmed that a caregiver learning a money skill stays in F1.6, so the gap is written down instead of hidden. Bedtime and daily routines in Home Learning Environment and Routines (F1.2) are sent to the source checker first and logged as a second deviation only if no source names them. None of this is shown to the coding model, so it can land now without a test run; the adult-education law rows wait only until the checker confirms the official copy of the law matches the copy that was read.

| Field | Value |
|---|---|
| Type | CITATION_FIX. It also adds the S1.6 deviation entry for the F1 element these citations leave uncovered, as this CP's required S4.1 deviation statement. |
| Codes touched | Registry and `basis`: F1.1, F1.2, F1.3, F1.4, F1.6. `fidelity` and `deviation`: F1.6 now; F1.2 only if V14 fails; F1.3 only if V7 fails and the live page is lost. **F1.7, F1.8 and F1.9 are not touched**, and the `epstein-six-types` entry is not changed here (CP-12-22 owns it, decision A2-3). No definition, include, exclude, useInstead, example, source line, `frameworkBasis` or rulesText changes. |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today; one PATCH later for each of PR #62 or PR #66 that lands first) |
| Requirement served | R1 frameworks · R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Reaches the coding prompt? | **No.** Registry, `basis`, `fidelity`, `deviation` and `DEVIATIONS.md` only. No scoring run; `npm test` is the gate. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **new FD-P38 (provisional id)**, F1.6 "financial skills", codebook-defined element, counted (decision F1-1 keeps the element in F1.6). **Verification-gated, counted:** FD-P39 (F1.2 routines; decision G3; opened only if V14 fails) and FD-P34 (F1.3 family eating; opened only if the SNAP-Ed MT1 page goes and V7 finds no verified archive). **None** for F1.1 parenting confidence (CSSP Parental Resilience, inside F1's own anchor) and F1.6 "older adults" (WIOA Title II covers any adult; decision G1). F1 drift goes from 0/9 to 1/9 (11%); the worst case is 3/9 (33%), at S4.9's line but not over it. |

## Decisions applied (2026-10-16)

| Decision | Effect on this CP |
|---|---|
| G1 | F1.6's text names "older adults"; WIOA Title II covers any adult, so the population is inside the source. No FD. |
| F1-1 | H027 is confirmed. Financial status, savings and confidence go to F2.1; learning a skill or completing a course goes to F1.6. The tie-breaker itself is CP-12-31 (drafted by another agent); this CP only follows from it: F1.6 keeps "financial skills", which no F1.6 source covers, so FD-P38 opens. |
| G3 | CSSP's routines item is framed as parenting knowledge, not as a household practice, so it is not broader than F1.2's "bedtime and daily routines". It does not avoid an FD on its own: V14 checks the Epstein Type 4 handout first, and FD-P39 opens if that fails. |
| A2-3 | Mapp & Kuttner (2013) stays the cited family-engagement component. The Epstein move to the Corwin 4th-edition copy, the F1.2 Type 4 and F1.8 Type 2 re-checks and the F1.7 Mapp & Kuttner link all belong to CP-12-22. The batch-3 draft's item 20 is settled there. |
| G8 | WIOA Title II was read on law.cornell.edu, a secondary host. Its rows land when V10 records the bibliographic match to the official U.S. Code copy. cssp.org and snaped.fns.usda.gov are the publishers' own hosts. |
| F1-2 | Note for PR #62 (below): CP-09-01 states a reasoned "none" for Epstein Type 3 "audiences", citing CF-009. |
| G13, G9 | "Prevention of youth entry into the child welfare system" goes to F1 domain-only with a `codebook_gap` flag. It is applied at the review desk with the G12 truancy correction and by a later Y3.4 exclude, not in this CP. Proposed rows P-41 and P-42 in `research-review/2026-10-16/full-review/proposed-design-rows.csv` test it. |
| G14 | S176 ("The program will create a family advisory board", F1.9) is re-reviewed alongside CP-09-01. It stays as adjudicated until Severin settles it. F1.9 is not touched here. |
| G15 | Adult program volunteers: skills for the role → A1.1, retention or satisfaction with serving → A1.3, their own life outcomes → A1 domain-only (CP-12-10's scope). Caregivers volunteering at their child's school stay a question for F1.9 in PR #62. Not applied here. |
| G7, G10 | S4.9 applies as written; F1 ends at or below its line. Everything here is no-prompt and lands now. |

## Problem

Batch 3 recommendations, "Act now", B3-CP2, items 15 to 20.

1. **F1.1 and F1.4 cite bare factor names.** The `cssp-strengthening-families` page "only lists
   the factors and does not define them" (CP-10-01 notes), and F1.4's link is partial.
2. **Epstein is cited from a secondary compilation.** Owned by CP-12-22 (decision A2-3).
3. **F1.2 routines** (S022, "consistent bedtime and daily routine") have no component.
4. **F1.3 family eating habits** (H072) have no component. MIECHV and MICH-14/15 cover infant
   practices only.
5. **F1.6 adult education and English** (H062, S118) rest on Ascend's Postsecondary & Employment
   Pathways and the DEA digital-literacy definition. Neither names adult basic education or ESL.
6. **F1.6 "financial skills"** is covered by no F1.6 support. The one candidate, Ascend Economic
   Assets (f1-08, PARTIAL), was rejected by the taxonomy, practitioner and devil's-advocate
   reviewers: it is F2's anchor, and it blurs skill against status. Decision F1-1 keeps the skill
   in F1.6, so the element is logged (FD-P38).

## Why this is the smallest fit (STANDARDS S2.2)

Not required for CITATION_FIX. Dropping "financial skills" from F1.6 (MINOR) would leave a
caregiver's money-skill course with no code, against decision F1-1's routing.

## What lands when

| Part | Reaches the prompt? | When |
|---|---|---|
| `cssp-core-meanings` and `snap-ed-framework-mt1` registry rows | no | now |
| `wioa-title-ii-aefla` registry rows | no | now, once V10 records the official-copy match (G8) |
| `basis` for F1.1, F1.2, F1.3, F1.4, F1.6 | no | now, after CP-12-22 (whose Corwin re-check the F1.2 string names); the F1.6 WIOA sentence goes in with the WIOA rows |
| F1.6 `fidelity`/`deviation`; FD-P38; DEVIATIONS bullet; F1 drift row | no | now |
| FD-P39 (F1.2) and FD-P34 (F1.3) | no | follow-up PATCH, only if V14 fails (FD-P39) or the MT1 page and any archive copy are lost (FD-P34) |
| WIOA Title II, SNAP-Ed and Healthy People 2030 named in F1's `frameworkBasis` | yes | CP-12-29 (G2), in the one gate after PRs #62 and #66. Not part of this CP. |

## Change

### Registry (`codebook-refinement/v3/verification_2026_10_16_b3.py`, F1 section)

The module and record file are created by CP-12-07. If CP-12-07 is rejected, this CP creates them
with the same shape. The record gains claim_ids f1-01, f1-02, f1-06, f1-07, f1-11 and f1-14
(copied from `batch3/verify/`). `source_kind`: cssp.org and snaped.fns.usda.gov are the
publishers' own hosts (primary). law.cornell.edu is a secondary host of the U.S. Code: under G8 the
WIOA entry's `url` is the official copy that V10 matches, and the LII fetch is recorded as the
read copy. **The coordinator records these values.**

```python
# --- CP-12-08 (F1) ---------------------------------------------------------

NEW += [
    {'id': 'cssp-core-meanings',
     'cite_as': 'Center for the Study of Social Policy (n.d.). Core Meanings of the Strengthening Families Protective Factors.',
     'tier': 'D', 'publisher': 'Center for the Study of Social Policy', 'year': None, 'codebook_names': [],
     'supports': [
        ('F1.1', 'Knowledge of Parenting and Child Development: understanding child development and parenting strategies', 'f1-02'),
        ('F1.4', 'Parental Resilience: managing stress and functioning well', 'f1-01'),
        ('F1.2', 'Knowledge of Parenting and Child Development: regular, predictable and consistent routines (framed as parenting knowledge; not broader than the code, G3)', 'f1-14')]},  # PARTIAL
    {'id': 'snap-ed-framework-mt1',
     'cite_as': 'U.S. Department of Agriculture, Food and Nutrition Service. SNAP-Ed Evaluation Framework, MT1: Nutrition-Related Behavioral Changes.',
     'tier': 'A', 'publisher': 'U.S. Department of Agriculture, Food and Nutrition Service', 'year': None, 'codebook_names': [],
     'supports': [('F1.3', 'MT1: changes in individual and family healthy eating behaviors, including fruit and vegetable intake', 'f1-11')]},
]

# Applied once V10 records the official-copy match (G8). url = the official U.S. Code copy V10 returns.
NEW_AFTER_V10 = [
    {'id': 'wioa-title-ii-aefla',
     'cite_as': 'Workforce Innovation and Opportunity Act, Title II (Adult Education and Family Literacy Act), 29 U.S.C. 3272(1) and 3272(6).',
     'tier': 'A', 'publisher': 'U.S. Congress', 'year': None, 'codebook_names': [],
     'supports': [
        ('F1.6', '3272(1) adult education: instruction below the postsecondary level in English and mathematics toward a secondary school diploma or equivalent, transition to postsecondary education, and employment', 'f1-06'),
        ('F1.6', '3272(6) English language acquisition program for adult English language learners', 'f1-07')]},
]

NOTES.update({
    'cssp-core-meanings': ("The PDF prints neither CSSP's name nor a year, only the cssp.org address, and the file is hosted on cssp.org. '2015' appears only in the file name, and "
                           "CSSP's resource page is dated October 16, 2018 (verifier notes f1-01, f1-02, f1-14), so no year is cited (S1.4). The Parental Resilience list's "
                           "placement is inferred from the table layout (f1-01). The F1.2 routines item is framed as parenting knowledge, hence partial (f1-14); it does not "
                           "cover F1.2's routines element on its own (G3; FD-P39 if V14 fails)."),
    'snap-ed-framework-mt1': ("Some MT1 respondents may be youth participants rather than families (f1-11 verifier). The archived-URL and defunding note is CP-12-24's; "
                              "it uses V7's snapshot. If the live page goes and no verified archive exists, FD-P34 opens (F1.3, H072)."),
    'wioa-title-ii-aefla': ("Read on law.cornell.edu (f1-06, f1-07); bibliographic match to the official U.S. Code copy recorded by V10 (G8). Covers any adult, including "
                            "older adults (decision G1: no FD for F1.6 'older adults'). 3272(9) family literacy (f1-10, PARTIAL) is not used: it lists program activities."),
})
```

The F1.4 rows on `cssp-strengthening-families` (partial) and
`cssp-sf-yt-research-foundation-2024` (partial) stay. F1.4 becomes direct through
`cssp-core-meanings`.

Result: **+3 sources, +6 supports** (one source and two supports arrive with the WIOA entry after V10).
`codebook_extensions` unchanged.

### G3 check (every PARTIAL row this CP relies on)

| Code, element | Partial row | Source broader than the code? | Result |
|---|---|---|---|
| F1.2 bedtime and daily routines | CSSP Core Meanings, routines (f1-14) | **no** (knowledge of routines, not the household practice) | verify (V14); FD-P39 if it fails |
| F1.4 resilience | `cssp-strengthening-families`, `cssp-sf-yt-research-foundation-2024` | not needed: `cssp-core-meanings` is direct | no FD |

### `codebooks/youthOutcomesV3.data.ts`: `basis` (data only)

| Code | Before | After |
|---|---|---|
| F1.1 | CSSP Strengthening Families, Knowledge of Parenting and Child Development (verified); Epstein Type 1 (located). | CSSP Strengthening Families, Knowledge of Parenting and Child Development (verified; component text from CSSP (n.d.), Core Meanings of the Strengthening Families Protective Factors, claim f1-02, CP-12-08); Epstein Type 1 (verified on the NNPS 2019 compilation, CP-10-01). Parenting confidence draws on CSSP Parental Resilience ("having self-confidence", claim f1-01), in the same framework. |
| F1.2 | Epstein Type 4, Learning at Home (located). | Epstein et al. (2019), Type 4 Learning at Home (verified, direct; Corwin handbook copy, claim f1-03, CP-12-22). Routines: CSSP (n.d.), Core Meanings, "regular, predictable and consistent routines" (verified, partial: framed as parenting knowledge; claim f1-14); household-practice source pending request V14 (FD-P39 if it fails). |
| F1.3 | MIECHV performance measures (verified); Healthy People 2030 MICH-14, MICH-15 (verified). Kept by Severin's decision despite being early-childhood sources. | *(unchanged text, then)* Family eating habits: USDA FNS, SNAP-Ed Evaluation Framework, MT1 Nutrition-Related Behavioral Changes (verified, direct; claim f1-11, CP-12-08). |
| F1.4 | CSSP Strengthening Families, Parental Resilience (verified). Re-verified 2026-09-27 (CP-10-01): the definition is recorded from Harper Browne (2024), CSSP's research foundation for the framework (verified, partial). | *(unchanged text, then)* CP-12-08: CSSP (n.d.), Core Meanings, Parental Resilience (verified, direct; claim f1-01). |
| F1.6 | Ascend 2Gen, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified). | Ascend 2Gen, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified); WIOA Title II, Adult Education and Family Literacy Act, 29 U.S.C. 3272(1) adult education and 3272(6) English language acquisition (verified, direct; claims f1-06, f1-07, CP-12-08). Older adults: covered by WIOA Title II (decision G1). Financial skills: no F1.6 source; codebook-defined, FD-P38 (decision F1-1). |

The F1.6 WIOA sentence goes in with the WIOA rows; until V10 returns, the F1.6 string ends
"(verified); Financial skills: no F1.6 source; codebook-defined, FD-P38 (decision F1-1)." F1.8's
and F1.9's `basis` lines are CP-12-22's and PR #62's.

### `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation` (lands now)

| Code | Field | Before | After |
|---|---|---|---|
| F1.6 | `fidelity` | `"framework"` | `"adapted"` |
| F1.6 | `deviation` | (absent) | `"FD-P38"` (provisional id), after `fidelity` |

### `codebook-refinement/DEVIATIONS.md`: new entry (lands now)

Inserted after CP-12-07's entries.

```markdown
### FD-P38 · F1.6

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Ascend at the Aspen Institute, 2Gen Approach, Postsecondary & Employment Pathways (verified); Digital Equity Act, 47 U.S.C. 1721(12) (verified); WIOA Title II, 29 U.S.C. 3272(1), 3272(6) (verified).
- **Departs:** the definition names "financial skills" of a caregiver or other adult participant. None of F1.6's verified sources names financial skills: they cover postsecondary and employment pathways, digital literacy, adult education and English. The element is the codebook's own.
- **Evidence:** no adjudicated design row codes a caregiver's financial-skill learning to F1.6. H027 ("Families reported feeling more confident managing household finances." → F2.1) and S006 (→ F2.1) set the line on the other side; decision F1-1 keeps learning a skill or completing a course in F1.6.
- **Alternative considered:** Ascend Economic Assets as a partial F1.6 row (rejected: F2's anchor, and it blurs skill against status); dropping "financial skills" (MINOR; leaves a caregiver's money-skill course with no code).
- **Decided in:** CP-12-08 (batch 3 research review, 2026-10-16), decision F1-1.
- **Revisit:** if an adult financial-education component in a verified F1 source is found.
```

Verification-gated entries, opened by a follow-up PATCH only if their condition holds:

```markdown
### FD-P39 · F1.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Epstein et al. (2019), Type 4 Learning at Home (verified, direct); CSSP (n.d.), Core Meanings, Knowledge of Parenting and Child Development (verified, partial): "regular, predictable and consistent routines".
- **Departs:** "bedtime and daily routines" (include) as a household practice. Epstein Type 4 names homework and curriculum-related activities, and CSSP names routines only as something parents know about, which is not broader than the code (decision G3).
- **Evidence:** S022 ("Families will establish a consistent bedtime and daily routine at home." → F1.2, alternate Y8.1), adjudicated design row.
- **Alternative considered:** treating the CSSP row as covering it (ruled out by G3); dropping routines (flips S022).
- **Decided in:** CP-12-08, decision G3.
- **Revisit:** if a verified F1 source names family routines as a practice (V14).

### FD-P34 · F1.3

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** MIECHV performance measures; Healthy People 2030 MICH-14, MICH-15 (verified; infant practices).
- **Departs:** "family eating habits" and "family fruit and vegetable intake" (definition, include) once the SNAP-Ed MT1 page is gone and no verified archive copy exists.
- **Evidence:** H072 ("Families increased their weekly consumption of fresh fruits and vegetables." → F1.3, alternate F2.2).
- **Alternative considered:** narrowing F1.3 to infant practices (flips H072).
- **Decided in:** CP-12-08.
- **Revisit:** when a verified archive (V7) or another verified family-nutrition source is recorded.
```

Append one bullet to the "Batch 3 review" section CP-12-07 creates:

```markdown
- **F1 (CP-12-08).** F1.2 routines, F1.3 family eating habits and F1.6 adult education and English are now cited (CSSP Core Meanings, SNAP-Ed MT1, WIOA Title II). F1.6 "older adults" needs no entry (decision G1). F1.6 "financial skills" is logged as FD-P38, because decision F1-1 keeps a caregiver's money-skill learning in F1.6 (the tie-breaker is CP-12-31). F1.2 routines (FD-P39) waits on request V14, and F1.3 (FD-P34) opens only if the SNAP-Ed page and any archive copy are lost. F1.9 and CP-09-01's Epstein Type 3 question belong to PR #62 (decision F1-2).
```

Drift table, F1 row before → after:

```
| F1 Family | 9 | 0 | 0% | no |
| F1 Family | 9 | 1 (F1.6) | 11% | no |
```

Worst case with FD-P39 and FD-P34: 3/9 (33%), at the line, not over.

### `frameworkBasis`, source lines, `rulesText`, hints, `CONFUSIONS.md`

Unchanged. WIOA Title II, SNAP-Ed, IDEA, DEA and Healthy People 2030 in F1's `frameworkBasis` are
CP-12-29 (decision G2, gated). The F1.6/F2.1 tie-breaker is CP-12-31.

## Handed to other CPs (not applied here)

The drafted text stays in
`/mnt/project-files/research-review/full-review/batch3/draft-cps/CP-12-08-f1-citations.md`
for each owner.

| Part of the batch-3 draft | Owner | Claims |
|---|---|---|
| `epstein-six-types` moved to the Corwin 4th-edition handout (URL, `cite_as`, publisher, year, source excerpt, notes); F1.2 Type 4 re-check (direct) and F1.8 Type 2 re-check (partial); F1.8 `basis` | CP-12-22 (decision A2-3) | f1-03, f1-04 |
| Item 20, F1.7: drop the partial `mapp-kuttner-2013 → F1.7` link | CP-12-22, part (b): the registry row goes together with the F1.7 Source-line edit at the one gate after PRs #62 and #66, so the registry never drops a source the live line still names. | none |
| SNAP-Ed archived URL and defunding note | CP-12-24 (uses V7) | f1-11 |
| F1 `frameworkBasis` names | CP-12-29 (decision G2) | none |

## Notes for PR #62 (not edited here)

- **F1-2.** CP-09-01 states a reasoned "none" for Epstein Type 3 "audiences", citing CF-009
  (counts of attendance are outputs). No FD; F1 stays as counted above.
- **f1-05** (Epstein Types 3 and 5, SUPPORTED on the Corwin copy) is applied to F1.9 after
  CP-09-01 settles F1.9's wording, through CP-12-22. The F1.9 `basis` "(located)" tag waits with it.
- **G14.** S176 is re-reviewed alongside CP-09-01; the row stays as adjudicated until Severin
  settles it.

## Sources

| Registry ID | Status | Component relied on | Claim and verifier excerpt |
|---|---|---|---|
| cssp-core-meanings (new) | verified | Knowledge of Parenting; Parental Resilience; routines (partial) | f1-02 "Understanding child development and parenting strategies that support physical, cognitive, language, social and emotional development."; f1-01 "Managing stress and functioning well when faced with challenges, adversity and trauma."; f1-14 PARTIAL "regular, predictable and consistent routines" |
| wioa-title-ii-aefla (new, after V10) | verified | 3272(1), 3272(6) | f1-06 "academic instruction and education services below the postsecondary level that increase an individual's ability to"; f1-07 "designed to help eligible individuals who are English language learners achieve competence in reading," |
| snap-ed-framework-mt1 (new) | verified | MT1 | f1-11 "Changes in individual and family healthy eating behaviors on the pathway to achieving the current Dietary Guidelines" |
| epstein-six-types (CP-12-22) | verified | Type 4 (named in F1.2 `basis` only) | f1-03 "Involve families with their children in learning at home, including homework, other curriculum-related activities," |

Verified but not used: f1-04 and f1-05 (CP-12-22 and PR #62), f1-08 (Ascend for F1.6; rejected),
f1-09 (DEA 1721(8); not needed under G1), f1-10 (WIOA 3272(9); rejected), f1-12 (Mapp & Bergman
V2; rejected), f1-13 (7 U.S.C. 2036a(b); rejected).

## Verification requests

```
V6  claim_id: f1-02b · code: F1.1 · cite_as: Center for the Study of Social Policy. Core Meanings of the Strengthening Families Protective Factors. · claimed_component: Publication year and publisher as printed on the document or on CSSP's resource page for it (the file name says 2015; the resource page is dated 2018). · url: https://cssp.org/wp-content/uploads/2025/03/Core-Meanings-of-the-SF-Protective-Factors-2015.pdf
V7  claim_id: f1-11b · code: F1.3 · cite_as: U.S. Department of Agriculture, Food and Nutrition Service. SNAP-Ed Evaluation Framework, MT1: Nutrition-Related Behavioral Changes (archived copy). · claimed_component: An archived snapshot (e.g. Internet Archive) of the MT1 page that shows the same text 'Changes in individual and family healthy eating behaviors'. Report the snapshot URL and date. · url: https://web.archive.org/web/2025/https://snaped.fns.usda.gov/framework/components/mt1
V10 claim_id: f1-06b · code: F1.6 · cite_as: Workforce Innovation and Opportunity Act, Title II (Adult Education and Family Literacy Act), 29 U.S.C. 3272(1) and 3272(6). · claimed_component: The official U.S. Code text of 29 U.S.C. 3272 paragraphs (1) and (6), matching the law.cornell.edu text read for claims f1-06 and f1-07. Report the official URL and whether the wording matches. · url: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section3272
V14 claim_id: f1-15 · code: F1.2 · cite_as: Epstein, J. L., et al. (2019). School, Family, and Community Partnerships: Your Handbook for Action (4th ed.). Corwin. Handout: Epstein's Six Types of Involvement. · claimed_component: A Type 4 (Learning at Home) definition or sample practice that names family or daily routines or schedules at home. · url: https://resources.corwin.com/sites/default/files/5_4-keys_to_partnerships.pdf
```

The V10 and V14 URLs are leads; the verifier locates the right page if they are wrong.

V6 is not blocking: the citation stays "(n.d.)" until V6 confirms a year. V7 is not blocking
either: the live page verified on 2026-10-16. V10 gates only the WIOA rows (G8). V14 decides
FD-P39.

## Gold impact

- Rows expected to change code: **none**.
- Design rows the edits rest on: S245, S173 (F1.1); S119, S022 (F1.2); H066, H072 (F1.3); S239
  (F1.4); S118, H062, H078 (F1.6); H027, S006 (the F1.6/F2.1 line, F2.1 side). S164 and S176
  (F1.9) are not touched.
- No gold row has to be adjudicated before this CP lands. S176 waits for Severin under G14, but
  nothing here depends on it.
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run (no prompt change). `npm test` and `npm run typecheck:server`.
