# CP-12-01: Y2 citation fixes and deviation log (Pekrun, CASEL and SSES curiosity, SEVT, Y2.1 pride, Y2.2 willingness)

**In plain words.** This proposal corrects the research references behind the Engagement codes and
records where the codes go beyond their research; nothing the coding model reads changes here.
Enjoyment and Joy (Y2.1) is re-based on a psychology theory of enjoyment during learning (Pekrun,
2024) instead of a teaching framework, and its phrase "pride in being part of the program" is written
into the deviations log as the codebook's own addition, so test row S008 stays where you settled it.
Curiosity and Triggered Interest (Y2.2) gains the curiosity item of the Collaborative for Academic,
Social, and Emotional Learning framework; its phrase "willingness
to try a new activity" waits for two source checks, and is logged as the codebook's own addition only
if neither source covers it. Sustained and Individual Interest (Y2.3) and Relevance and Utility Value
(Y2.4) get tidier records (the publisher's link, and the 2020 renamed version of the theory). Because
the Engagement domain sits close to the one-third limit on deviations, this lands right after the
pending pull request #62, with no scoring run.

| Field | Value |
|---|---|
| Type | CITATION_FIX, with the deviation-log entries the citation findings require (S4.1). One CP. |
| Codes touched | Registry: 3 new sources (Pekrun 2024; OECD SSES 2021; Eccles & Wigfield 2020), casel-2020 (Y2.2), hidi-renninger-2006 (Y2.2, Y2.3 re-checked), eccles-expectancy-value (note, year), muhammad-five-pursuits (Y2.1 note). `basis` notes: Y2.1, Y2.2, Y2.3, Y2.4. `fidelity`/`deviation`: Y2.1; Y2.2 only if FD-P41 opens (blocked on V1/V2). DEVIATIONS.md: FD-P40, FD-P41 (blocked), drift table. **No definition, include, exclude, useInstead, example, source line, `frameworkBasis` or rulesText change.** Y2.5 and Y2.6 (PR #62) are not touched. |
| Version bump | PATCH, relative to the version current when applied (after PR #62, so 3.2.x if its 3.2.0 candidate merges). Bumped at merge. |
| Requirement served | R1 frameworks; R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **new FD-P40 (provisional id)** Y2.1, codebook-defined element "pride in being part of it", counted (decision Y2-1). **FD-P41 (provisional id)** Y2.2, codebook-defined element "willingness to try a new activity", counted; blocked on verification requests V1/V2 and opened under the G3 rule below, not by a decision. Y2 after: 1 of 6 (17%); 2 of 6 (33%, at the line, not over) if FD-P41 opens. The Y2.1 move from Muhammad to Pekrun needs no FD (G1: the code names no population or setting outside the source). FD-P16 (Y2.5) is unchanged; G6 reaches it through the PR #62 note. Provisional ids are renumbered when applied. |
| Reaches the prompt | No. The Y2.1 and Y2.2 source lines and Y2's `frameworkBasis` are in CP-12-16 (anchor swap) and CP-12-29 (CASEL secondary, G2), at the shared gate. |

## When each part lands

| Part | Reaches the prompt? | When |
|---|---|---|
| Registry: Pekrun, SSES, SEVT, CASEL Y2.2 support, notes, year | no | After PR #62 merges (G7 sequencing), no eval |
| Registry: Hidi & Renninger re-check raised to `direct` | no | After V3 records the bibliographic match (G8), then with the row above |
| `basis` Y2.1, Y2.3, Y2.4 | no | After PR #62 merges, no eval |
| `basis` Y2.2 (last sentence) | no | After PR #62; its willingness sentence is written once V1/V2 return |
| `fidelity`/`deviation` Y2.1; FD-P40; drift row | no | After PR #62 merges, no eval |
| `fidelity`/`deviation` Y2.2; FD-P41 | no | Only if V1/V2 open it (G3 rule below) |
| Source lines, `frameworkBasis` | yes | Not in this CP: CP-12-16 and CP-12-29, at the one gate after PRs #62 and #66 (G10) |

Every part of this CP is of kind (a): nothing here waits for the two live design-set runs. It waits
for PR #62 only so that the Y2 deviation count is taken on the merged Y2.5/Y2.6 text (G7: S4.9
applies to Y2 as written).

## Problem

Batch 1 (`research-review/full-review/batch1/recommendations.md`, "Act now" items 3-7):

1. **Y2.1 cites a teaching aim for a feeling (S1.6).** Its only support is Muhammad's Joy pursuit,
   which the CP-10-01 verifier called "a pedagogical aim ... not the same as enjoying a program"
   (fit partial), while the code is marked `framework`. Pekrun (2024) names the construct directly:
   "concurrent activity emotions such as enjoyment or boredom during learning" (y2-01, SUPPORTED).
   The move to program settings is partial (y2-02, PARTIAL) but needs no FD under G1, because the
   code names no population or setting outside the source.
2. **Y2.1 "pride in being part of it"** (definition; include "pride in the program") is pride in
   membership. Pekrun's pride is an outcome emotion tied to achievement (y2-03: "retrospective
   outcome emotions like pride and shame"). The code is broader than the source here, so under G3
   the partial row cannot avoid an FD. Adjudicated **S008** ("Students will say they feel proud to
   be part of the program", gold Y2.1, alternate Y3.1) depends on the wording, so it is kept and
   logged (decision Y2-1).
3. **Y2.2 curiosity** is the routing target of rule 14 for CASEL "Demonstrating curiosity and
   open-mindedness", but CASEL is not cited for Y2.2 (y2-05, y2-06, SUPPORTED).
4. **Y2.2 "willingness to try a new activity"** has no source. **S049** and **S080** depend on it.
   Before logging anything, two existing sources get a verifier pass (V1, V2).
5. **Y2.3, Y2.4 citation hygiene.** Hidi & Renninger is supported only from a repository copy (fit
   partial on both codes for that reason); a full text verifies phases 1-4 (y2-07, y2-08). Eccles and
   Wigfield renamed the theory in 2020 (SEVT; y2-09, y2-10), and the registry cites only the 2000
   article, read on a third-party wiki.

## Change

### `codebooks/youthOutcomesV3.data.ts` (not in the prompt)

| Code | Field | Before | After |
|---|---|---|---|
| Y2.1 | `fidelity` | `"framework"` | `"adapted"` |
| Y2.1 | `deviation` | (absent) | `"FD-P40"` (provisional) |
| Y2.2 | `fidelity` | `"framework"` | unchanged; `"adapted"` only if FD-P41 opens (V1/V2) |
| Y2.2 | `deviation` | (absent) | unchanged; `"FD-P41"` only if FD-P41 opens (V1/V2) |

`basis` notes:

| Code | Before | After |
|---|---|---|
| Y2.1 | Muhammad, Five Pursuits, Joy (verified). | Pekrun (2024), control-value theory: activity emotions, enjoyment during learning (verified, direct; claim y2-01); achievement settings beyond school (verified, partial; claim y2-02); outcome-emotion pride (verified, partial: achievement pride only; claim y2-03). Pride in being part of a program is codebook-defined (FD-P40). Muhammad, Five Pursuits, Joy (verified, partial: a teaching aim, not the learner's enjoyment) is kept as a pointer, not as the anchor. |
| Y2.2 | Hidi & Renninger (2006), phase 1 triggered situational interest (verified). | Hidi & Renninger (2006), phase 1 triggered situational interest (verified, direct, full text; claim y2-07). CASEL (2020), Responsible Decision-Making: 'Demonstrating curiosity and open-mindedness' (verified, direct; claim y2-05); OECD (2021), SSES Houston, Open-mindedness: Curiosity (verified, direct; claim y2-06). [Willingness sentence: see below.] |
| Y2.3 | Hidi & Renninger (2006), phases 2-4 (verified). | Hidi & Renninger (2006), phases 2-4 (verified, direct, full text; claim y2-08). |
| Y2.4 | Re-verified 2026-09-27 (CP-10-01): Wigfield & Eccles (2000), utility value: 'how a task fits into an individual's future plans' (verified from a full-text copy, not the publisher's); Hulleman, Godes, Hendricks & Harackiewicz (2010) (verified, direct). | Re-verified 2026-09-27 (CP-10-01): Wigfield & Eccles (2000), utility value: 'how a task fits into an individual's future plans' (verified from a full-text copy, not the publisher's); Hulleman, Godes, Hendricks & Harackiewicz (2010) (verified, direct). Eccles & Wigfield (2020), Situated Expectancy-Value Theory, utility value: 'how well a particular task fits into an individual's present or future plans' (verified, direct; claims y2-09, y2-10). |

The "(verified, direct, full text)" wording on the Y2.2 and Y2.3 Hidi & Renninger sentences is
written once V3 records the bibliographic match; until then those two sentences stay as they are.

Y2.2's willingness sentence is written when V1/V2 return: either "Willingness to try a new activity:
<source> (verified; claim y2-18 or y2-19)." or "Willingness to try a new activity is codebook-defined
(FD-P41)."

### Registry

Mechanics as in CP-12-03, "Shared mechanics" (record file `v3/source-verification-2026-10-16-b1.json`,
module `v3/verification_2026_10_16_b1.py`). This CP's tables:

```python
NEW = [
    {'id': 'pekrun-2024-control-value', 'claim': ['y2-01', 'y2-02', 'y2-03'],
     'cite_as': 'Pekrun, R. (2024). Control-Value Theory: From Achievement Emotion to a General Theory of Human Emotions. Educational Psychology Review, 36, Article 83.',
     'codebook_names': ['Pekrun (2024)'],  # named by the Y2.1 source line in CP-12-16 (gate)
     'tier': 'C', 'publisher': 'Educational Psychology Review', 'year': 2024,
     'url': 'https://doi.org/10.1007/s10648-024-09909-7',
     'supports': [
         ('Y2.1', 'activity emotions: enjoyment during learning', 'direct'),
         ('Y2.1', 'achievement settings named as school, university and the workplace', 'partial'),
         ('Y2.1', 'outcome emotions: pride (pride in an achievement outcome only)', 'partial'),  # verdict SUPPORTED, lowered: membership pride is FD-P40
     ]},
    {'id': 'oecd-sses-2021-houston', 'claim': 'y2-06',
     'cite_as': 'OECD (2021). Survey on Social and Emotional Skills (SSES): Houston (United States). OECD.',
     'codebook_names': [], 'tier': 'B', 'publisher': 'OECD', 'year': 2021,
     'supports': [('Y2.2', 'Open-mindedness: Curiosity', 'direct')]},
    {'id': 'eccles-wigfield-2020-sevt', 'claim': 'y2-10',
     'cite_as': 'Eccles, J. S., & Wigfield, A. (2020). From expectancy-value theory to situated expectancy-value theory: A developmental, social cognitive, and sociocultural perspective on motivation. Contemporary Educational Psychology, 61, 101859.',
     'codebook_names': [], 'tier': 'C', 'publisher': 'Contemporary Educational Psychology', 'year': 2020,
     'url': 'https://doi.org/10.1016/j.cedpsych.2020.101859',
     'supports': [('Y2.4', "subjective task value: utility value, how well a task fits into an individual's present or future plans", 'direct')]},
]
ADD_SUPPORTS = [
    ('casel-2020', 'Y2.2', "Responsible Decision-Making: 'Demonstrating curiosity and open-mindedness'", 'y2-05', 'direct'),
]
SUPPORT_RECHECK = {  # (source, code, current component) -> (claim, fit, component unchanged); applied after V3
    ('hidi-renninger-2006', 'Y2.2', 'Phase 1: triggered situational interest'): ('y2-07', 'direct', None),
    ('hidi-renninger-2006', 'Y2.3', 'Phases 2-4: maintained situational, emerging and well-developed individual interest'): ('y2-08', 'direct', None),
}
SOURCE_EXCERPT = {'hidi-renninger-2006': 'y2-08'}  # applied after V3
URLS = {'hidi-renninger-2006': 'https://doi.org/10.1207/s15326985ep4102_4'}
YEAR = {'eccles-expectancy-value': 2000}  # was null; cite_as already says 2000 and CP-10-01 read the 2000 article
FULL_TEXT_ELSEWHERE = {'pekrun-2024-control-value', 'hidi-renninger-2006', 'eccles-wigfield-2020-sevt'}
NOTES_APPEND = {
    'pekrun-2024-control-value': "Full text read on the University of Essex repository copy (https://repository.essex.ac.uk/39185/1/Pekrun%20Ed%20Psych%20Rev%202024%20Control-Value%20Theory.pdf). Bibliographic match recorded by the verifier (claim y2-01): the header reads 'Educational Psychology Review (2024) 36:83' with DOI 10.1007/s10648-024-09909-7. Replaces Muhammad's Joy as Y2.1's anchor (S1.6). Added by CP-12-01.",
    'oecd-sses-2021-houston': 'OECD-hosted report (official copy). The SSES creativity definition (claim y2-12) is not used: bare creativity is not routed to Y2.5 (recommendations, Rejected). Added by CP-12-01.',
    'eccles-wigfield-2020-sevt': "Claim y2-09 (ACU repository record, SUPPORTED): 'justify our decision to call the theory Situated Expectancy-Value Theory (SEVT)'. Bibliographic match recorded there: authors, Contemporary Educational Psychology 61, article 101859 (2020), DOI 10.1016/j.cedpsych.2020.101859. Excerpt y2-10 read on a third-party full-text copy (msofc.org), which shows the Elsevier copyright; the verifier tied it to the ACU record. The 2000 statement stays as eccles-expectancy-value. Added by CP-12-01.",
    'eccles-expectancy-value': 'The theory was renamed Situated Expectancy-Value Theory in 2020 (eccles-wigfield-2020-sevt, CP-12-01); this entry keeps the 2000 utility-value definition.',
    'hidi-renninger-2006': "URL of record is the DOI (G8). Full text read 2026-10-16 on a University of Tartu course copy (https://sciencecommunication.ut.ee/wp-content/uploads/2018/09/Article-5-The-Four-Phase-Model-of-Interest-Development.pdf; claims y2-07, y2-08; bibliographic match: claim y2-20) and in CP-10-01 on the Swarthmore repository. Phase 1 is 'typically, but not exclusively, externally supported' (y2-07 note).",
    'muhammad-five-pursuits': 'Y2.1: no longer the anchor; Pekrun (2024) replaces it in the Y2.1 source line (CP-12-16). The support is kept as a partial pointer.',
}
```

Choices:

- **URL of record (G8).** The DOI is the URL of record for Pekrun, Hidi & Renninger and SEVT (the
  official copy). The copy actually read goes in `notes`, with its bibliographic match: recorded by
  the verifier for Pekrun (y2-01) and SEVT (y2-09); requested for Hidi & Renninger (V3).
- **Pekrun's three supports** stay separate so each keeps its own claim, excerpt and fit. The
  explorer lists all three under Y2.1.
- **`codebook_names`.** "Pekrun (2024)" is added now with the entry (registry, no prompt); the
  Y2.1 source line that uses it prints after the gate (CP-12-16).
- **Fredricks et al. (2004)** (y2-04, SUPPORTED) is not added. The recommendations defer it to the
  engagement CF entry (later cycle; R-17); the devil's advocate rejects it.
- **Not used**: y2-11 to y2-17 (Y2.5, Y2.6; PR #62 or rejected).

Effect: +3 sources, +6 supports (3 Pekrun, 1 SSES, 1 SEVT, 1 CASEL), +2 re-checked supports after V3.
`codebook_extensions` unchanged.

### `codebook-refinement/DEVIATIONS.md`

```markdown
### FD-P40 · Y2.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Pekrun (2024), control-value theory, activity emotions: "concurrent activity emotions such as enjoyment or boredom during learning" (verified, claim y2-01). Becomes Y2.1's source line with CP-12-16; until then the source line still names Muhammad's Joy.
- **Departs:** the element "pride in being part of it" (definition) and "pride in the program" (include). Pekrun's pride is an outcome emotion after achievement, "retrospective outcome emotions like pride and shame" (claim y2-03), not pride in membership. The code is broader than the source, so the partial row does not avoid an entry (G3). No verified source names pride in belonging to a program as a youth outcome.
- **Evidence:** S008 ("Students will say they feel proud to be part of the program.", adjudicated design row, gold Y2.1, alternate Y3.1). Dropping the phrase would put S008 at risk of moving to Y3.1.
- **Alternative considered:** record y2-03 as partial support with no entry (not chosen: G3); drop the phrase (MINOR; flips S008).
- **Decided in:** CP-12-01 (batch 1 research review); Severin, 2026-10-16 (decision Y2-1).
- **Revisit:** close if a verified source names pride in membership or belonging to a program as an outcome.
```

**FD-P41 (blocked on V1/V2).** Added only under this rule (G3): it is **not** opened if V1 or V2 is
SUPPORTED, or PARTIAL with a verifier note showing the source is broader than "willingness to try a
new activity" and contains it. In every other case it opens, as below.

```markdown
### FD-P41 · Y2.2

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Hidi & Renninger (2006), phase 1 triggered situational interest (verified, claim y2-07); CASEL (2020), "Demonstrating curiosity and open-mindedness" (verified, claim y2-05).
- **Departs:** the element "willingness to try a new activity" (definition) and "trying new activities" (include). Verifier passes on CASEL open-mindedness (claim y2-18) and Hidi & Renninger phase 1 (claim y2-19) did not find a source that contains it (G3).
- **Evidence:** S049 (trying an activity that made campers nervous, gold Y2.2, alternate Y5.4) and S080 (trying new enrichment activities, gold Y2.2, alternate Y2.6).
- **Alternative considered:** drop the element (MINOR; flips S049 and S080); move it to Y5.4 (confidence) or Y2.6 (participation) (against the adjudicated rows).
- **Decided in:** CP-12-01 (batch 1 research review; decisions settled 2026-10-16), on the V1/V2 verdicts.
- **Revisit:** close if a verified source names willingness to try new activities as part of interest or open-mindedness.
```

**Drift table.** Y2 row, before → after:

```
| Y2 Engagement | 6 | 0 | 0% | no |
| Y2 Engagement | 6 | 1 (Y2.1) | 17% | no |
```

If FD-P41 opens: `| Y2 Engagement | 6 | 2 (Y2.1, Y2.2) | 33% | no (at the line) |`. FD-P16 (Y2.5)
is merged-components and stays uncounted: PR #62 leaves it unchanged, and the G6 test reaches it
through the PR #62 note (restate its evidence as "statements name the processes together", S077).
Intro sentence: append ", and for CP-12-01 (2026-10-16), which opened FD-P40 in Y2" (and FD-P41 if
it opens).

Under G7, S4.9 applies to Y2 as written: at 2 of 6, any further counted Y2 entry (such as a Y2.5
creative-writing FD after PR #62) triggers Y2's anchor re-review before any other Y2 change.

### `rulesText`, domain `hint`, source lines, `frameworkBasis`, category description, `CONFUSIONS.md`

Unchanged here. The Y2.1 and Y2.2 source lines and the Y2 `frameworkBasis` anchor swap (Muhammad →
Pekrun) are in CP-12-16; the CASEL "secondary" clause in Y2's `frameworkBasis` is in CP-12-29 (G2).
The Y2.A description is checked in CP-12-16 (no change).

## Sources

| Registry ID | Claim | Verdict → fit | Component | Verifier excerpt |
|---|---|---|---|---|
| pekrun-2024-control-value (new) | y2-01 | SUPPORTED → direct | activity emotions | "concurrent activity emotions such as enjoyment or boredom during learning" |
| pekrun-2024-control-value (new) | y2-02 | PARTIAL → partial | settings beyond school | "Achievement settings in today's world, such as school, university, and the workplace, are recent products of civilization." |
| pekrun-2024-control-value (new) | y2-03 | SUPPORTED → partial | outcome pride | "retrospective outcome emotions like pride and shame" |
| casel-2020 | y2-05 | SUPPORTED → direct | curiosity bullet | "Demonstrating curiosity and open-mindedness" |
| oecd-sses-2021-houston (new) | y2-06 | SUPPORTED → direct | Curiosity | "Interest in ideas and love of learning, understanding and intellectual exploration; an inquisitive mind-set." |
| hidi-renninger-2006 | y2-07 | SUPPORTED → direct (after V3) | phase 1 | "Triggered situational interest can be sparked by environmental or text features" |
| hidi-renninger-2006 | y2-08 | SUPPORTED → direct (after V3) | phases 2-4 | "maintained situational interest, emerging (less-developed) individual interest, and well-developed individual interest" |
| eccles-wigfield-2020-sevt (new) | y2-09 | SUPPORTED (note only) | rename | "justify our decision to call the theory Situated Expectancy-Value Theory (SEVT)" |
| eccles-wigfield-2020-sevt (new) | y2-10 | SUPPORTED → direct | utility value | "how well a particular task fits into an individual's present or future plans" |

y2-05 was verified at `casel.org/casel-sel-framework-11-2020/?view=1`; the casel-2020 URL is not
changed here (CP-12-20).

## Verification requests

Send each to `codebook-citation-verifier` (it sees only these fields). None introduces a new
source: V1 and V2 test existing registry sources against one element, and V3 records a
bibliographic match (G8).

**V1. CASEL open-mindedness and willingness to try**

```
claim_id: y2-18
code: Y2.2
cite_as: CASEL (2020), CASEL's SEL Framework: What Are the Core Competence Areas and Where Are They Promoted?
claimed_component: Responsible Decision-Making, 'Demonstrating curiosity and open-mindedness': whether the framework text describes open-mindedness or curiosity as including willingness to try new or unfamiliar activities or experiences.
url: https://casel.org/casel-sel-framework-11-2020/?view=1
```

**V2. Hidi & Renninger phase 1 and trying a new activity**

```
claim_id: y2-19
code: Y2.2
cite_as: Hidi, S., & Renninger, K. A. (2006). The Four-Phase Model of Interest Development. Educational Psychologist, 41(2), 111-127.
claimed_component: Phase 1, triggered situational interest: whether the article describes interest triggered by novel or new activities or experiences, such that engaging with (trying) a new activity expresses phase-1 interest.
url: https://sciencecommunication.ut.ee/wp-content/uploads/2018/09/Article-5-The-Four-Phase-Model-of-Interest-Development.pdf
```

A SUPPORTED verdict becomes a `direct` support for Y2.2 with component "willingness to try a new
activity". A PARTIAL verdict becomes a `partial` support, and avoids FD-P41 only when the verifier's
note shows the source is broader than the element and contains it (G3). The Y2.1 part of this CP
does not wait for V1/V2.

**V3. Hidi & Renninger course copy: bibliographic match (G8)**

```
claim_id: y2-20
code: Y2.2, Y2.3
cite_as: Hidi, S., & Renninger, K. A. (2006). The Four-Phase Model of Interest Development. Educational Psychologist, 41(2), 111-127.
claimed_component: Whether this copy is the cited article: record the title, authors, journal, volume, issue, pages and DOI as they appear on the copy.
url: https://sciencecommunication.ut.ee/wp-content/uploads/2018/09/Article-5-The-Four-Phase-Model-of-Interest-Development.pdf
```

Only the Hidi & Renninger re-check (raising Y2.2 and Y2.3 to `direct`) waits for V3. If the copy does
not match, those supports stay as they are today and the rest of the CP is unaffected.

## Decisions applied (settled 2026-10-16)

- **Y2-1 (Y2.1 pride in membership).** FD-P40, keeping the wording for S008.
- **G1 (age and sector rule).** Pekrun's "achievement settings" do not name youth programs (y2-02
  PARTIAL), but Y2.1 names no population or setting outside the source, so no FD on that ground.
- **G3 (partial fits).** Pride: the code is broader than the source, so FD-P40. Willingness: the rule
  for FD-P41 above.
- **G6 (merged-components test).** No Y2 entry here is merged-components. FD-P16 is handled in the
  PR #62 note.
- **G7 (S4.9 for Y2).** Applies as written. This CP merges after PR #62 so the count is taken on the
  merged Y2.5/Y2.6 text.
- **G8 (official copy).** DOI as URL of record; the copy read and its bibliographic match in
  `notes` (V3 for Hidi & Renninger).
- **G10 (timing).** No part of this CP reaches the prompt, so it needs no eval; it lands after PR #62.

## Dependencies and boundaries

- **PR #62.** Y2.5 (CP-09-04, FD-P16 unchanged) and Y2.6 (CP-09-01/02) are not touched; merge after
  #62 (G7).
- **PR #66.** CP-11-03 rule 8 sends the value of schoolwork to Y2.4; this CP changes no Y2.4 text
  (registry and `basis` only), so the target is unchanged (R-16).
- **CP-12-16** puts Pekrun and CASEL into the Y2.1 and Y2.2 source lines and swaps Muhammad for
  Pekrun in Y2's `frameworkBasis`; **CP-12-29** adds CASEL as a Y2 secondary. Both are at the gate
  and need this CP's rows first. FD-P40's anchor text holds in either order.

## Not bundled

Y2.4 "or community" (verifier pass on Hulleman first; later cycle); Y2.5 creative writing and
FD-P16's anchor line (PR #62 note); Y2.6 "located" label (PR #62); Fredricks (later engagement CF
entry); Eccles/Hulleman in Y2's `frameworkBasis` (no recommendation covers it); the CASEL URL
(CP-12-20).

## Gold impact

- Rows expected to change code: none (no prompt text changes).
- Design rows these records rest on: S008 (Y2.1 pride; must not narrow), S234 (Y2.1 example), S137
  (Y2.1), S049, S080 (Y2.2 willingness), S128 (Y2.2 example), S213, S214 (Y2.3), S115 (Y2.4).
- No change here waits on a gold row (G11, G14 do not apply).
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run.
