# CP-12-03: Y4 citation fixes and deviation log (NHES re-quote, CASEL definition rows, Y4.5, Y4.9, Y4.12)

| Field | Value |
|---|---|
| Type | CITATION_FIX, with the deviation-log entries the citation findings require (S4.1). The recommendations name this a single "citation-and-deviation" CP (CP-B1-01). If Severin prefers the Y1 pilot's split (CP-11-01 / CP-11-02), the change splits cleanly into part A (registry, `basis`) and part B (`fidelity`/`deviation` fields, DEVIATIONS.md, CF-016 column). |
| Codes touched | Registry: shape-nhes-2024 (Y4.12, Y4.9; also the source entry behind Y8.3), casel-2020 (Y4.2, Y4.4, Y4.7, Y4.8, Y4.9, Y4.11, Y4.12), learning-for-justice-sjs (Y4.5 support only). `basis` notes: Y4.2, Y4.4, Y4.5, Y4.7, Y4.8, Y4.9, Y4.11, Y4.12. `fidelity`/`deviation`: Y4.5, Y4.12. DEVIATIONS.md: FD-P02 to FD-P08 (text only), FD-P06 (amended), new FD-P42, FD-P43, drift table. CONFUSIONS.md CF-016 (3.x column). **No definition, include, exclude, useInstead, example, source line, `frameworkBasis` or rulesText change.** Y4.3 is not touched (B1-5). |
| Version bump | PATCH, relative to the version current when applied (3.1.4 today, so 3.1.5; if PR #62's 3.2.0 candidate merges first, 3.2.1). Bumped once per release at merge, not on the branch. |
| Requirement served | R1 frameworks; R4 drift |
| Status | draft (batch 1 research review, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160; no code added, removed or renamed) |
| Framework deviation | **new FD-P42 (provisional id)** Y4.12, codebook-defined element "avoiding/leaving unsafe situations", counted (Y4 1 of 12); **new FD-P43 (provisional id)** Y4.5, merged-components, not counted (decision B1-7); **changed FD-P06** Y4.9, premise corrected to a cross-competency merge, not counted; **changed FD-P02 to FD-P08**, evidence restated from 2.x numbers to CASEL bullet names (no case, fidelity or count change). FD-P09 stays closed, on corrected evidence. Provisional ids are renumbered at merge. |

## Problem

Batch 1 of the full research review (`research-review/full-review/batch1/recommendations.md`,
"Act now" items 1, 2 and 13-16) found these faults in Y4. Every claim relied on below was rated by
an independent verifier who saw only `{claim_id, code, cite_as, claimed_component, url}`
(`verify/verification-table.md`); excerpts are the verifier's.

1. **Y4.12's NHES support carries a quote from a different document (S1.5, S1.4).** The
   `shape-nhes-2024` support for Y4.12 quotes "Demonstrate refusal skills to avoid or reduce health
   risks" against SHAPE America's 2024 page. The y4b researcher fetched that page on 2026-10-16 and
   the phrase is not there; the 2024 page has indicators 4.5.5, 4.8.5 and 4.12.5 (claim y4b-10,
   SUPPORTED). The 2026-09-27 record shows where the old quote came from: claim `new-nhes-std4` in
   `v3/source-verification-2026-09-27.json` was fetched at `https://www.schoolhealtheducation.org/standard-4/`,
   the National Consensus for School Health Education (NCSHE) site, and
   `verification_2026_09_27.py` (`EXTRA_SUPPORTS`) attached it to the SHAPE entry. So a verified
   NCSHE excerpt sits on a SHAPE source. The same entry has null `publisher`, `year` and `tier`,
   and no `codebook_names` although the Y4.12 source line names "National Health Education
   Standards" (R-07). CP-10-02 closed FD-P09 partly on this support.
2. **Y4.12 "avoiding unsafe situations" has only partial support.** CASEL "consider ethical
   standards and safety concerns" (y4b-09) and NHES 4.2.3 (y4b-11) are both PARTIAL. Under the
   batch's rule a PARTIAL row is recorded as `fit: partial` and never closes or prevents an FD on
   its own, so the element needs an entry. Narrowing the code instead would flip **S172**.
3. **Y4.5 is labelled `framework` but merges two CASEL competencies** (Relationship Skills
   "Demonstrating cultural competency" and Self-Awareness "Examining prejudices and biases") while
   sitting in category C, Social awareness. The CP-10-01 verifier already flagged it ("check
   whether it should be 'adapted'").
4. **FD-P06's premise is false.** It says Y4.9 absorbs 2.x 4.3.4, "which had no source". CASEL's
   Social Awareness definition names "recognize family, school, and community resources and
   supports" (y4b-04, SUPPORTED), and NHES 3.5.2 and 4.8.3 cover locating resources and
   seeking/offering help (y4b-05, y4b-06, SUPPORTED).
5. **Definition elements with no registry row (S1.3).** Y4.2 "impulses" (y4a-08), Y4.4 gratitude
   and concern for others (y4a-05, y4a-06; S082 and S242 rest on gratitude), Y4.7 "leadership"
   (the support names the bullet but its excerpt shows teamwork only; y4b-01), Y4.8 "maintaining"
   relationships (y4b-03), Y4.11 "making a choice" (y4b-07; the current support is partial
   because its bullets describe reflecting, not choosing).
6. **Stale 2.x numbers.** FD-P02 to FD-P08 give their evidence as "2.4.0's 4.2.1 and 4.2.2" and so
   on, and CF-016 routes CASEL skills to 2.x codes only.

## Change

### `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation` (not in the prompt)

| Code | Field | Before | After |
|---|---|---|---|
| Y4.5 | `fidelity` | `"framework"` | `"adapted"` |
| Y4.5 | `deviation` | (absent) | `"FD-P43"` (provisional), inserted after `fidelity` |
| Y4.12 | `fidelity` | `"framework"` | `"adapted"` |
| Y4.12 | `deviation` | (absent) | `"FD-P42"` (provisional) |

`definitionsText` prints neither field. The public explorer shows the new fidelity on both cards.

### `basis` notes (data only, not in the prompt)

| Code | Before | After |
|---|---|---|
| Y4.2 | CASEL (2020) SEL Framework (verified), Self-Management: 'Managing one's emotions'; 'Identifying and using stress-management strategies'. | CASEL (2020) SEL Framework (verified), Self-Management: 'Managing one's emotions'; 'Identifying and using stress-management strategies'; competency definition 'manage one's emotions, thoughts, and behaviors effectively in different situations' (verified, direct for impulses and self-regulation; claim y4a-08, CP-12-03). |
| Y4.4 | CASEL (2020) SEL Framework (verified), Social Awareness: 'Taking others' perspectives'; 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones' (registry). 'Understanding and expressing gratitude' is cited in CP-01-06's source table but is not yet a registry support entry. | CASEL (2020) SEL Framework (verified), Social Awareness: 'Taking others' perspectives'; 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones'; 'Understanding and expressing gratitude' (verified, direct; claim y4a-05); 'Showing concern for the feelings of others' (verified, direct; claim y4a-06). |
| Y4.5 | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Demonstrating cultural competency'; Self-Awareness: 'Examining prejudices and biases'. | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Demonstrating cultural competency'; Self-Awareness: 'Examining prejudices and biases'. Merges components of two competencies (FD-P43). Learning for Justice (2022), Social Justice Standards, Diversity standard 6 (verified, direct for respect and comfort across difference; claim y4a-03). 'Including' people has no verified component. |
| Y4.7 | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Practicing teamwork and collaborative problem-solving'; 'Showing leadership in groups' (the second is cited in CP-01-06's source table, not yet a registry support entry). | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Practicing teamwork and collaborative problem-solving'; 'Showing leadership in groups' (verified, direct; claim y4b-01). |
| Y4.8 | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Developing positive relationships'; 'Resolving conflicts constructively'. | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Developing positive relationships'; 'Resolving conflicts constructively'; competency definition 'establish and maintain healthy and supportive relationships' (verified, direct; claim y4b-03). |
| Y4.9 | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Seeking or offering support and help when needed'. Absorbs 2.4.0's 4.3.4, which had no source. | CASEL (2020) SEL Framework (verified), Relationship Skills: 'Seeking or offering support and help when needed'; Social Awareness definition 'recognize family, school, and community resources and supports' (verified, direct; claim y4b-04). National Health Education Standards (SHAPE America, 2024), 3.5.2 and 4.8.3 (verified, direct; claims y4b-05, y4b-06). Merges the two CASEL components (FD-P06, amended by CP-12-03). |
| Y4.11 | CASEL (2020) SEL Framework (verified), Responsible Decision-Making: 'Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being' (registry supports for 4.5.2 and 4.5.5). | CASEL (2020) SEL Framework (verified), Responsible Decision-Making: 'Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being' (verified, partial); competency definition 'make caring and constructive choices about personal behavior and social interactions across diverse situations' (verified, direct; claim y4b-07). |
| Y4.12 | Re-verified 2026-09-27 (CP-10-02): CASEL (2020), Relationship Skills: 'Resisting negative social pressure' (verified, partial: covers resisting peer pressure, not avoiding unsafe situations); National Health Education Standards (2024) Standard 4, 'Demonstrate refusal skills to avoid or reduce health risks' (verified, direct). Now Framework; FD-P09 closed. | CASEL (2020), Relationship Skills: 'Resisting negative social pressure' (verified, partial: peer pressure only). National Health Education Standards (SHAPE America, 2024), Standard 4 refusal-skills indicators 4.5.5, 4.8.5, 4.12.5 (verified, direct; claim y4b-10; replaces the CP-10-02 quote, which came from the separate NCSHE set). Avoiding unsafe situations: CASEL Responsible Decision-Making 'consider ethical standards and safety concerns' and NHES 4.2.3 (both verified, partial; claims y4b-09, y4b-11), logged as codebook-defined (FD-P42). FD-P09 stays closed for refusal and peer pressure. |

The `basis` strings are not tested for forbidden words (only `source` is), so "(verified,
partial)" tags are fine here, as in CP-11-01.

### Registry

Per CLAUDE.md, registry results change in the build scripts, never in
`sources/youth_outcomes_v3.sources.json`.

**Shared mechanics for CP-12-01, -02, -03 and -16** (whichever lands first creates the files; the
others add their tables):

- **Record file** `codebook-refinement/v3/source-verification-2026-10-16-b1.json`, same row shape
  as `source-verification-2026-09-27.json`. One row per claim used, copied unchanged from
  `batch1/verify/claims-*.json` and `verdicts-*.json`: `claim_id`, `kind: "research-review-b1"`,
  `source_id` (the registry id it lands on), `code`, `cite_as`, `claimed_component`, `url_given`
  (claim `url`), `verdict`, `url_checked` (verdict `fetched_url`), `source_kind`, `excerpt`,
  `corrected_cite_as` (empty unless the verifier gave one), `notes` (verdict `note`). The batch-1
  verdicts do not record `source_kind`; it is set from the verifier note: `primary` for a
  publisher or government host, `secondary` for a repository or course copy.
- **Module** `codebook-refinement/v3/verification_2026_10_16_b1.py`, same shape as
  `verification_2026_09_27.py` (docstring, `RECORD`, `DATE = '2026-10-16'`, `BY = 'Batch 1
  research review (independent codebook-citation-verifier, blind to proposer; WebFetch)'`, tables,
  `apply(out, codes)`). It asserts every claim it uses has verdict SUPPORTED or PARTIAL, and that
  each `fit` it writes is `partial` whenever the verdict is PARTIAL (a table may lower SUPPORTED to
  `partial`, never raise PARTIAL to `direct`). A dated, separate module keeps the 2026-09-27 script
  a faithful record of CP-10-01, and avoids the `verification_2026_10_16.py` name that CP-11-01
  (PR #66) uses.
- **`build_registry.py`**: after `apply_2026_09_27(out, CODES)` (and after CP-11-01's
  `apply_2026_10_16`, if it has merged), add
  `from verification_2026_10_16_b1 import apply as apply_2026_10_16_b1` and call it, before
  `SUPPORTED_CODES` is computed. `codebook_version_reviewed` and `last_reviewed` are set to the
  merge version and date.

**This CP's tables:**

```python
# shape-nhes-2024: attribution filled (R-07; claims y4b-05, y4b-06, y4b-10).
CITE_AS = {'shape-nhes-2024': 'SHAPE America - Society of Health and Physical Educators (2024). National Health Education Standards.'}
PUBLISHER = {'shape-nhes-2024': 'SHAPE America - Society of Health and Physical Educators'}  # was null
YEAR = {'shape-nhes-2024': 2024}   # was null; from SHAPE's press release of March 25, 2024 (verifier notes y4b-05, y4b-10)
TIER = {'shape-nhes-2024': 'B'}    # was null; recognized standards body (S1.2)
CODEBOOK_NAMES_ADD = {'shape-nhes-2024': ['National Health Education Standards']}  # already used in the Y4.12 and Y8.3 source lines
NOTES_APPEND = {
    'shape-nhes-2024': "CP-12-03 (2026-10-16): the Y4.12 support now quotes the 2024 Standard 4 refusal indicators (claim y4b-10). The CP-10-02 quote 'Demonstrate refusal skills to avoid or reduce health risks' was verified on schoolhealtheducation.org/standard-4/ (claim new-nhes-std4), the National Consensus for School Health Education's separate 2022 set, and was attached to this SHAPE entry by mistake. The earlier verifier note that this site 'is published by the National Consensus for School Health Education' conflated the two documents.",
}

# Existing supports re-checked: (source, code, current component) -> (claim, fit, new component).
SUPPORT_RECHECK = {
    ('shape-nhes-2024', 'Y4.12', "Standard 4: 'Demonstrate refusal skills to avoid or reduce health risks'"):
        ('y4b-10', 'direct', 'Standard 4 refusal-skills indicators 4.5.5, 4.8.5, 4.12.5'),
}
# casel-2020 -> Y4.7: CP-10-01's COMPONENTS override named both bullets but kept a teamwork-only
# excerpt. The teamwork support goes back to its own bullet; leadership gets its own support below.
COMPONENTS = {('casel-2020', 'Y4.7'): "Relationship Skills: 'Practicing teamwork and collaborative problem-solving'"}

# New supports on sources already in the registry: (source, code, component, claim, fit).
ADD_SUPPORTS = [
    ('shape-nhes-2024', 'Y4.12', "Standard 4, indicator 4.2.3: communication skills and strategies to use if uncomfortable, unsafe, or harmed", 'y4b-11', 'partial'),
    ('shape-nhes-2024', 'Y4.9', "Standard 3, indicator 3.5.2: locate home, school, and community resources to support health and well-being", 'y4b-05', 'direct'),
    ('shape-nhes-2024', 'Y4.9', "Standard 4, indicator 4.8.3: use various communication strategies to seek and offer support and assistance", 'y4b-06', 'direct'),
    ('casel-2020', 'Y4.2', "Self-Management definition: 'manage one's emotions, thoughts, and behaviors effectively in different situations'; 'delay gratification, manage stress'", 'y4a-08', 'direct'),
    ('casel-2020', 'Y4.4', "Social Awareness: 'Understanding and expressing gratitude'", 'y4a-05', 'direct'),
    ('casel-2020', 'Y4.4', "Social Awareness: 'Showing concern for the feelings of others'", 'y4a-06', 'direct'),
    ('casel-2020', 'Y4.7', "Relationship Skills: 'Showing leadership in groups'", 'y4b-01', 'direct'),
    ('casel-2020', 'Y4.8', "Relationship Skills definition: 'establish and maintain healthy and supportive relationships'", 'y4b-03', 'direct'),
    ('casel-2020', 'Y4.9', "Social Awareness definition: 'recognize family, school, and community resources and supports'", 'y4b-04', 'direct'),
    ('casel-2020', 'Y4.11', "Responsible Decision-Making definition: 'make caring and constructive choices about personal behavior and social interactions across diverse situations'; 'consider ethical standards'", 'y4b-07', 'direct'),
    ('casel-2020', 'Y4.12', "Responsible Decision-Making definition: 'consider ethical standards and safety concerns'", 'y4b-09', 'partial'),
    ('learning-for-justice-sjs', 'Y4.5', "Diversity standard 6: express comfort with people who are both similar to and different from them and engage respectfully with all people (2022 Second Edition PDF)", 'y4a-03', 'direct'),
]
```

Each added support takes `excerpt` and `verifier_note` from its claim. Notes on choices:

- **y4a-06** names two bullets, but its excerpt covers only "Showing concern for the feelings of
  others". "Recognizing situational demands and opportunities" is left out of the component until
  an excerpt shows it (S1.5). Y4.4's norms element is already covered by "Identifying diverse
  social norms".
- **LfJ (y4a-03)** was read on the learningforjustice.org 2022 PDF; the registry entry's URL is the
  splcenter.org page and its `cite_as` has no year or edition. This CP adds only the Y4.5 support.
  The `cite_as`, `year` and URL fix is one change shared with batch 2's y5-11 (R-06); it lands in
  whichever CP the orchestrator assigns to R-06, not here.
- **CASEL URL.** Every casel-2020 support keeps the registry URL. The CASEL URL change (R-01,
  item 17) waits for one cross-batch fix after all four batches; nothing here depends on it.
- **Not used**: y4a-04 (PARTIAL; Y4.5 rests on y4a-03), y4a-07 (rejected), y4a-09, y4b-12, y4b-13
  (Y4.3, deferred to B1-5), y4b-02 (not needed), y4b-08 (rejected; Y6.3 line).

Effect: +0 sources, +12 supports. `codebook_extensions` unchanged (A2.2, A2.4).

### `codebook-refinement/DEVIATIONS.md`

**New entries** (inserted after the last FD-P entry present at merge; field labels in the
`- **Label:** value` form that `deviations.test.ts` parses):

```markdown
### FD-P42 · Y4.12

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Relationship Skills, "Resisting negative social pressure" (verified, partial); National Health Education Standards (SHAPE America, 2024), Standard 4 refusal-skills indicators 4.5.5, 4.8.5, 4.12.5 (verified, direct; claim y4b-10: "4.12.5 Apply refusal skills and strategies in a variety of situations.").
- **Departs:** the element "avoiding unsafe situations" (definition) and "leaving unsafe situations" (include). Only partial support exists: CASEL Responsible Decision-Making, "consider ethical standards and safety concerns" (claim y4b-09, PARTIAL: weighing safety when deciding, not avoiding a situation), and NHES 4.2.3, "Demonstrate communication skills and strategies to use if uncomfortable, unsafe, or harmed" (claim y4b-11, PARTIAL: communicating, not leaving). Under the batch-1 rule a PARTIAL row never closes or prevents an entry. FD-P09 (closed) stays closed: it covered refusal and peer pressure, which are verified.
- **Evidence:** S172 ("Youth will develop skills to resist peer pressure and avoid risky behaviors.", adjudicated design row, gold Y4.12, also the code's prompt example). Narrowing the code to refusal only would flip it.
- **Alternative considered:** narrow the definition to resisting pressure and refusing risky situations (MINOR; flips S172); treat CASEL category E "safety concerns" as covering the element, with no entry (fidelity reviewer's view; rejected because y4b-09 is PARTIAL); HECAT Safety HBO 4 "avoid risky behaviors" (batch 3 lead, not verified for Y4.12).
- **Decided in:** CP-12-03 (batch 1 research review, 2026-10-16), pending Severin.
- **Revisit:** close if a verifier rates a source SUPPORTED for avoiding or leaving unsafe situations (first candidate: HECAT Safety HBO 4).

### FD-P43 · Y4.5

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Relationship Skills, "Demonstrating cultural competency", and Self-Awareness, "Examining prejudices and biases" (both verified, direct). Learning for Justice (2022), Social Justice Standards, Diversity standard 6 (verified, direct for respect; claim y4a-03), as a secondary.
- **Departs:** one code merges components from two CASEL competencies and sits in category C, Social awareness, which holds neither. The definition names both ("respecting ... people of different backgrounds", "examining one's own biases"). "Including" people has no verified component; CASEL's Social Awareness definition, "empathize with others, including those from diverse backgrounds, cultures, & contexts" (claim y4a-04), is PARTIAL only.
- **Evidence:** thin, and stated plainly: no adjudicated design row has gold Y4.5 (S177 and S186 list it as an alternate). The case rests on statements naming respect and bias awareness together, not on coders failing to separate them (see decision B1-6).
- **Alternative considered:** cite LfJ only and keep `framework` (devil's advocate; the Y4.12 cross-competency precedent); move the code to category D (renumbering, MAJOR; not proposed).
- **Decided in:** CP-12-03 (batch 1 research review, 2026-10-16), pending Severin (decision B1-7).
- **Revisit:** when B1-6 settles the merged-components test, or when an adjudicated row is coded Y4.5.
```

**FD-P06 amended** (Anchor, Departs, Evidence and Revisit replaced; the entry is not deleted):

```markdown
- **Anchor:** CASEL (2020), Relationship Skills, "Seeking or offering support and help when needed", and Social Awareness definition, "recognize family, school, and community resources and supports" (claim y4b-04, verified). National Health Education Standards (SHAPE America, 2024), 3.5.2 and 4.8.3 (claims y4b-05, y4b-06, verified) as corroboration.
- **Departs:** one code merges two CASEL components from different competencies: seeking or offering help (2.4.0's 4.4.4) and knowing family, school and community supports (2.4.0's 4.3.4). The definition names both. The include's "willingness to seek help" (S007) is an attitude toward the act CASEL names; noted, not a separate departure.
- **Evidence:** S122 (naming trusted adults or resources, gold Y4.9) and S007 (willingness to seek help, gold Y4.9). Corrected 2026-10-16 (CP-12-03): the 3.0 entry said 4.3.4 "had no source"; CASEL's Social Awareness definition names it.
- **Revisit:** if statements start separating knowing about supports from seeking them.
```

**FD-P02 to FD-P08, evidence restated** (each `Departs:` line keeps its 2.x numbers and gains the
CASEL bullet names in parentheses, taken from the registry components; nothing else changes):

| Entry | `Departs:` after |
|---|---|
| FD-P02 Y4.2 | one code for 2.4.0's 4.2.1 and 4.2.2 (CASEL Self-Management: "Managing one's emotions"; "Identifying and using stress-management strategies"); the definition names both. |
| FD-P03 Y4.3 | one code for 4.2.3 and 4.2.4 (CASEL Self-Management: "Setting personal and collective goals"; "Exhibiting self-discipline and self-motivation"; "Using planning and organizational skills"); the definition names both. |
| FD-P04 Y4.4 | one code for 4.3.1 and 4.3.3 (CASEL Social Awareness: "Taking others' perspectives"; "Demonstrating empathy and compassion"; "Identifying diverse social norms, including unjust ones"); the definition names both. |
| FD-P05 Y4.8 | one code for 4.4.3 and 4.4.5 (CASEL Relationship Skills: "Resolving conflicts constructively"; "Developing positive relationships"); the definition names both. |
| FD-P07 Y4.10 | one code for 4.5.1 and 4.5.3 (CASEL Responsible Decision-Making: "Anticipating and evaluating the consequences of one's actions"; "Identifying solutions for personal and social problems"); the definition names both. |
| FD-P08 Y4.11 | one code for 4.5.2 and 4.5.5 (CASEL Responsible Decision-Making: "Evaluating personal, interpersonal, community, and institutional impacts"; "Reflecting on one's role to promote personal, family, and community well-being"); the definition names both. |

FD-P06's 2.x numbers are restated in its amendment above. FD-P03's text does not touch Y4.3's
scope (B1-5 is deferred). The "sparsity" evidence lines ("no gold rows", "almost no gold rows")
are left as they are; B1-6 decides them once for all entries.

**Drift table.** Intro sentence: append ", and for CP-12-03 (2026-10-16), which opened FD-P42 and
FD-P43 in Y4". Y4 row, before → after:

```
| Y4 SEL (CASEL) | 12 | 0 | 0% | no |
| Y4 SEL (CASEL) | 12 | 1 (Y4.12) | 8% | no |
```

FD-P43 is merged-components and FD-P06 stays merged-components, so neither counts.

### `CONFUSIONS.md` CF-016 (2.x registry; text only)

Add a "3.x" column, filled by a script from `v3/crosswalk-2.5.1-to-3.0.0.csv`. Rows whose 2.x
target is a `split` in the crosswalk list every target and say "(split)". Below the table, add:
"The live 3.x routing for these skills is rulesText rule 14; this column is a lookup, not a new
routing." No route changes; y4a's proposed new routings (R-30) need their own CPs.

| CASEL skill (2020) | Route to (2.x) | 3.x (crosswalk) |
|---|---|---|
| Resisting negative social pressure | 4.5.4 | Y4.12 |
| Demonstrating curiosity and open-mindedness | 2.2 | Y2.2 |
| Understanding and expressing gratitude | 4.3.1 | Y4.4 |
| Recognizing strengths in others | 4.3.1 | Y4.4 |
| Standing up for the rights of others | 7.4 if systemic/injustice-framed; else 4.5.2 | Y6.3; else Y4.11 |
| Showing the courage to take initiative; ... agency | 6.4 (7.3 if civic) | Y5.5 / Y5.4 (split; rule 14 routes agency to Y5.6); Y6.4 if civic |
| Showing leadership in groups | see CF-015 | see CF-015 |
| Examining prejudices and biases | 4.3.2 | Y4.5 |

The "Why" column stays as it is. Test risk: `sync.test.ts` reads `\d.\d` code references from
every CF block, so "Y6.3", "Y5.5" and "Y5.4" add 2.x numbers 6.3, 5.5, 5.4 to CF-016's named set.
None of the `PAIRS_WITHOUT_CF` pairs appears to involve those codes, but `npm test` on the branch
decides; if a pair becomes "covered", move the 3.x column to a separate table under a `####`
heading outside the CF-016 block.

### Domain `hint`, `rulesText`, source lines, `frameworkBasis`

Unchanged. Y4's prompt-reaching lines (Y4.4, Y4.6, Y4.7, Y4.12 sources; Y4 `frameworkBasis`) are in
CP-12-16. Rule 14's heading ("CASEL SKILLS WITHOUT A DEDICATED CODE") now lists two skills that
have registry rows (gratitude, resisting pressure); its routing is still right, so it is left alone.

## Sources

Only SUPPORTED or PARTIAL rows from `batch1/verify/verification-table.md`; excerpts are the
verifier's. PARTIAL rows become `fit: partial` and support nothing on their own.

| Registry ID | Claim | Verdict → fit | Component relied on | Verifier excerpt |
|---|---|---|---|---|
| shape-nhes-2024 | y4b-10 | SUPPORTED → direct | Std 4 refusal indicators | "4.12.5 Apply refusal skills and strategies in a variety of situations." |
| shape-nhes-2024 | y4b-11 | PARTIAL → partial | 4.2.3 | "4.2.3 Demonstrate communication skills and strategies to use if uncomfortable, unsafe, or harmed." |
| shape-nhes-2024 | y4b-05 | SUPPORTED → direct | 3.5.2 | "3.5.2 Locate home, school, and community resources to support health and well-being." |
| shape-nhes-2024 | y4b-06 | SUPPORTED → direct | 4.8.3 | "4.8.3 Use various communication strategies to seek and offer support and assistance." |
| casel-2020 | y4a-08 | SUPPORTED → direct | Self-Management definition | "manage one's emotions, thoughts, and behaviors effectively in different situations and to achieve goals and aspirations" |
| casel-2020 | y4a-05 | SUPPORTED → direct | gratitude | "Understanding and expressing gratitude" |
| casel-2020 | y4a-06 | SUPPORTED → direct | concern for others | "Showing concern for the feelings of others" |
| casel-2020 | y4b-01 | SUPPORTED → direct | leadership in groups | "Showing leadership in groups" |
| casel-2020 | y4b-03 | SUPPORTED → direct | Relationship Skills definition | "establish and maintain healthy and supportive relationships" |
| casel-2020 | y4b-04 | SUPPORTED → direct | Social Awareness definition | "recognize family, school, and community resources and supports" |
| casel-2020 | y4b-07 | SUPPORTED → direct | RDM definition | "make caring and constructive choices about personal behavior and social interactions across diverse situations" |
| casel-2020 | y4b-09 | PARTIAL → partial | RDM definition | "consider ethical standards and safety concerns" |
| learning-for-justice-sjs | y4a-03 | SUPPORTED → direct | Diversity standard 6 | "Students will express comfort with people who are both similar to and different from them" |
| (record only) | new-nhes-std4 | SUPPORTED (2026-09-27) | NCSHE 2022 set | named in the shape-nhes-2024 note to explain the moved quote; not a support |

## Verification requests

**V1 (optional, recommended).** The S1.5 finding rests on one researcher's fetch. Send to
`codebook-citation-verifier`:

```
claim_id: y4b-14
code: Y4.12
cite_as: SHAPE America - Society of Health and Physical Educators (2024). National Health Education Standards.
claimed_component: Whether the phrase "Demonstrate refusal skills to avoid or reduce health risks" appears anywhere on this page (record the Standard 4 indicators that do appear).
url: https://shapeamerica.org/standards/health/new-he-standards/
```

The re-quote stands either way (y4b-10 is SUPPORTED); V1 only confirms the reason given in the
registry note. If the phrase is found on the page, the note drops the "attached by mistake"
sentence.

## Decisions for Severin (this CP depends on them)

- **B1-7 (Y4.5 relabel).** Recommended yes: `adapted` with FD-P43. If no, drop the Y4.5 rows from
  the data table and DEVIATIONS; keep the LfJ support.
- **B1-6 (merged-components test).** FD-P43 and amended FD-P06 use merged-components, as FD-P02 to
  P08 do. This CP does not change any case; if B1-6 rewrites the test, these entries follow it.
- **Y4.12 avoidance.** Recommended: FD-P42 (P, D; the PARTIAL rule). Dissent: F says category E
  covers it (no FD). If HECAT verifies for Y4.12 before merge, FD-P42 is dropped and HECAT is added.
- **C (age rule).** NHES grade-band indicators (4.2.3 is grade 2) are cited; no code text names an
  age, so no entry.
- **D (timing).** Recommended: land now, first among the batch-1 CPs (no prompt change).
- **Split.** One CP (as recommended) or the pilot's two (citations; deviation log).

## Dependencies and boundaries

- **PR #66 (CP-11-01..03).** CP-11-02 also edits the drift-table intro sentence and adds FD-P21 to
  P23; re-apply only this CP's clause and Y4 row. If CP-11-01 lands first, call this module after
  its `apply_2026_10_16`. No PR #66 boundary is touched (Y4.3, Y4.10/Y1.7 and rule 8 are left alone).
- **PR #62 (CP-09-01..08).** No Y4 field it edits is touched. CP-09-08 rule 7 (leadership) is left
  alone; the Y4.7 change here is registry and `basis` only.
- **CP-12-16** needs this CP's casel-2020 Y4.4 and Y4.7 rows and the NHES re-quote before its Y4
  source lines can cite them. Land this CP first or in the same release.

## Not bundled

Y4.3 scope and self-control (B1-5); bare "self-awareness", "improved behavior", leadership and
incidence hints (later cycle); the CASEL URL (item 17); the LfJ `cite_as` (R-06); an NCSHE 2022
registry entry (possible from `new-nhes-std4`, not needed); rule 14's heading.

## Gold impact

- Rows expected to change code: none. Nothing that reaches the prompt changes, so no scoring run
  is needed; `npm test` (deviations, registry, sync) is the check.
- Design rows these entries rest on: S172, S052 (Y4.12); S065 (incidence stays Y8.11); S122, S007
  (Y4.9); S082, S242 (Y4.4 gratitude); S027, S223, S227 (Y4.11); S103 (Y4.2); S059 (Y4.7). S177 and
  S186 (Y4.5 as alternate).
- New proposed rows: none here. Proposing two `status=proposed` Y4.5 rows would strengthen FD-P43;
  that is for the gold owner.
- Held-out gold was not read or used.

## Judge result

Not run.
