# CP-12-05: Y6 citation fixes and deviation log (batch 2 research review)

**In plain words.** This proposal fixes the sources behind the Character and Civic domain's codes, with no change to what any code means. Positive Values and Character (Y6.1) gets a checked source for forgiveness, Critical Consciousness and Social Justice (Y6.3) gets a published research article on critical consciousness, and Civic Voice, Leadership and Participation (Y6.4) gets sources for believing one can make a difference and for youth councils. Environmental Stewardship (Y6.6) includes "connection to nature", which no checked part of its framework covers, so that gap is now written down openly while a checker reads the full guidelines; Digital Citizenship and Online Safety (Y6.7) moves from the 2016 to the 2024 edition of the technology standards it cites. The record-keeping changes land now; the source lines coders see wait for one combined pair of test runs after the two open pull requests (#62 and #66) merge.

| Field | Value |
|---|---|
| Type | CITATION_FIX (with the matching `DEVIATIONS.md` entries, as in recommendations section 2) |
| Codes touched | Source lines (part b only): Y6.1, Y6.3, Y6.4, Y6.7. `basis`: Y6.1, Y6.3, Y6.4, Y6.6, Y6.7. `fidelity`/`deviation`: Y6.6 (framework → adapted, FD-P27). Registry: `search-40-assets` (Y6.1 component, new Y6.4 support), `iste-students-2016` (note), plus 3 new sources. No definition, include, exclude, useInstead, example, hint or rulesText changes. **Y6.2 and Y6.5 are not touched. "Leadership" in Y6.4 is not touched** (it stays, with no FD, decision Y6-1; its rule and exclude wait for PR #62, see Deferred). Domain Y6 `frameworkBasis` is not edited here (the ISTE year and the secondary clause are in CP-12-29). |
| Version bump | PATCH. Part (a): the next PATCH when applied (same release as CP-12-04 if both are approved). Part (b): inside the single batched Source PATCH after PRs #62 and #66 merge (decision G10). |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: registry rows (VIA, Watts-Diemer-Voight, ISTE 2024, Developmental Assets Y6.4, NAAEE Y6.6 as a partial row after V-Y6-1 PARTIAL); `basis` Y6.1, Y6.3, Y6.4, Y6.6, Y6.7; Y6.6 adapted (FD-P27 stays open, G3); FD-P13 closure note; Batch 2 bullets and drift row. Waits for the gate: Source lines Y6.1, Y6.3, Y6.4, Y6.7 and the Y6 `frameworkBasis` (CP-12-29). |
| Gate candidate | Part (b) applied 2026-10-17 in the 3.3.0 gate candidate: Source lines Y6.1, Y6.3, Y6.4, Y6.7 as drafted. The ISTE year and the Y6 secondary clause are applied through CP-12-29. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new **FD-P27 (provisional id)**, Y6.6, codebook-defined element "connection to nature", counted (decision G3: the only partial source, Tbilisi, is narrower than the code); changed FD-P13 (closed entry; its closure note is rescoped to say what CIRCLE covers; stays closed). None for Y6.1 (decision G5), Y6.3, Y6.4 (decisions G3 and Y6-1), Y6.7; reasons recorded. Y6 drift: 0/7 → 1/7. |

## What lands when

| Change | Reaches the prompt? | Lands |
|---|---|---|
| (a1) `fidelity`/`deviation`: Y6.6 → adapted, FD-P27 | no | now |
| (a2) `basis`: Y6.1, Y6.3, Y6.4, Y6.6, Y6.7 | no | now |
| (a3) registry rows (shared module `verification_2026_10_16_b2.py`) | no | now |
| (a4) `DEVIATIONS.md`: FD-P13 closure note, FD-P27, "Batch 2 review" bullets, drift table | no | now |
| (b) Source lines: Y6.1, Y6.3, Y6.4, Y6.7 | yes | the batched gate after PRs #62 and #66 |
| (b) Y6 `frameworkBasis`: ISTE year and secondary clause (decision G2) | yes | in CP-12-29, same gate (not edited by this CP) |

## Problem

The batch 2 research review (`research-review/full-review/batch2/`, recommendations section 2,
"CP B2-Y6", items 7-11). Evidence comes only from `verify/verification-table.md`; every excerpt
below is the verifier's own.

1. **Y6.6 "connection to nature" has no source**, yet `fidelity` says framework. `basis` already
   admits it: "NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified;
   'connection to nature' not covered)". The registry verifier checked "the executive summary,
   not the full guidelines". Adjudicated **S045** ("a sense of stewardship and connection to
   nature") depends on the element.
2. **FD-P13's closure overclaims.** It says Y6.4 "matches [CIRCLE's] political voice and
   electoral indicators", but Y6.4 also names "civic efficacy" ("believing one can influence
   community decisions", adjudicated **H030**) and youth councils and co-design (**S039**,
   **S211**). CIRCLE's verified indicators are behaviors only.
3. **Y6.1 forgiveness has no source** (adjudicated **S167**). `basis` names Lerner et al. (2005),
   which has no registry entry (S1.1), and still says "(located)" while the registry's Positive
   Values support is verified content with a stale "(live registry status: located)" tag in its
   component.
4. **Y6.3 `basis` still carries "[VERIFY before adding one]"** for a measurement framework.
5. **Y6.7 cites ISTE 2016**, which the 2024 edition supersedes. The registry excerpt quotes the
   2016 wording.

## Why this is the smallest fit (STANDARDS S2.2)

No definition, include or useInstead changes. Dropping "connection to nature" from Y6.6 would
flip S045 and lose about 4 real texts (practitioner review), so the gap is logged, not removed.
Rewording Y6.1 to move "sportsmanship" and "faith-grounded values" into the include is not
needed under decision G5, and is not bundled.

## Change

### Part (a): no prompt change (lands now; `npm test` is the check)

#### (a1) `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation`

| Code | Field | Before | After |
|---|---|---|---|
| Y6.6 | `fidelity` | `"framework"` | `"adapted"` |
| Y6.6 | `deviation` | (absent) | `"FD-P27"` (provisional id; renumbered at merge), inserted after `fidelity` |

The verified NAAEE text does not name connection to nature, so the departure is logged now.
V-Y6-1 (the full NAAEE K-12 Guidelines) is sent at the same time; it is FD-P27's revisit
trigger. If it finds a component that covers connection to nature, a later PATCH closes FD-P27,
sets `fidelity` back to `"framework"` and updates the NAAEE support from the new record.

#### (a2) `codebooks/youthOutcomesV3.data.ts`: `basis` notes

| Code | Before | After |
|---|---|---|
| Y6.1 | Search Institute 40 Developmental Assets, Positive Values (located); Lerner et al. (2005), Character (partial). | Search Institute 40 Developmental Assets, Positive Values (verified, direct: integrity, honesty, responsibility). VIA Institute on Character, VIA Classification of Character Strengths, Forgiveness (verified, direct; claim y6-07; cited for this component only). Sportsmanship and faith-grounded values are named instances of Positive Values (honesty, integrity) practised in a setting, which the registry quotes (decision G5); no FD. |
| Y6.3 | Muhammad, Five Pursuits, Pursuit 4 Criticality (verified). No measurement framework in the records [VERIFY before adding one]. | Muhammad, Five Pursuits, Pursuit 4 Criticality (verified, direct). Watts, Diemer & Voight (2011), critical consciousness: critical reflection and critical action (verified, direct; claim y6-01). |
| Y6.4 | Re-verified 2026-09-27 (CP-10-02): CIRCLE (2002) core civic engagement indicators, political voice (contacting officials, petitions, protest, boycotts) and electoral participation (verified, direct). Now Framework; FD-P13 closed. NCSS C3 Dimension 4 (partial) no longer cited. | *(unchanged text, then)* CP-12-05: CIRCLE covers the behavioral core only. Civic efficacy rests on Watts, Diemer & Voight (2011), political efficacy (verified, partial; claim y6-02), and youth councils and advisory roles on Search Institute, 40 Developmental Assets, "Young people are given useful roles on the community" (verified, partial; claim y6-03). Both sources are broader than the code, so no FD (decision G3). "Leadership" in the name needs no FD (decision Y6-1); its rule 7 line and an exclude pointer to Y4.7 follow PR #62. |
| Y6.6 | NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified; 'connection to nature' not covered). | NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified, direct for stewardship and pro-environmental behavior). Connection to nature: not in the verified NAAEE text (the registry's copy is the executive summary); codebook-defined element, FD-P27. The full guidelines are with a verifier (V-Y6-1). |
| Y6.7 | ISTE Standards for Students (2016), Standard 2 Digital Citizen (verified). | ISTE Standards for Students (2024), 1.2 Digital Citizen: 1.2.b Online Interactions, 1.2.d Digital Privacy (verified, direct; claim y6-06). The 2016 edition, Standard 2 (verified 2026-09-27), is superseded and kept in the registry as history. |

#### (a3) Registry (rows added to the shared module defined in CP-12-04)

New rows in `codebook-refinement/v3/source-verification-2026-10-16-b2.json`, copied from
`verify/claims-{a,b}.json` and `verdicts-{a,b}.json` as described in CP-12-04:

| claim_id | Verdict | source_kind | Used for |
|---|---|---|---|
| y6-01 | SUPPORTED | secondary, author's lab copy with bibliographic match recorded (admissible under G8) | new source: Watts et al. (2011) → Y6.3 |
| y6-02 | PARTIAL | same | Watts et al. (2011) → Y6.4 (partial) |
| y6-03 | PARTIAL | primary (searchinstitute.org) | search-40-assets → Y6.4 (partial) |
| y6-06 | SUPPORTED | primary (iste.org) | new source: ISTE 2024 → Y6.7 |
| y6-07 | SUPPORTED | primary (viacharacter.org) | new source: VIA, Forgiveness → Y6.1 |
| (V-Y6-1, V-Y6-2) | pending | | added when the verifier answers |

Tables in `codebook-refinement/v3/verification_2026_10_16_b2.py`:

```python
# Watts et al. (2011) was read on the authors' lab site; the verifier recorded "the citation
# details match (NDCAD 134, 43-57, doi 10.1002/cd.310)". Admissible under decision G8 (a
# secondary host with a recorded bibliographic match); same precedent as CP-10-01's
# FULL_TEXT_ELSEWHERE (an article in the author's institutional repository).
FULL_TEXT_ELSEWHERE |= {'watts-diemer-voight-2011'}

COMPONENTS.update({
    ('search-40-assets', 'Y6.1'): 'Positive Values (Integrity, Honesty, Responsibility)',  # drops the stale "(live registry status: located)"
})
NOTES.update({
    'iste-students-2016': 'Superseded by the 2024 edition (iste-students-2024, CP-12-05). Kept as history: the codebook cited it until 3.1.x.',
})
SUPPORT_NOTE_APPEND.update({
    ('iste-students-2016', 'Y6.7'): ' Superseded (CP-12-05): the Source line cites the 2024 edition, 1.2.b and 1.2.d.',
    ('naaee-k12-2019', 'Y6.6'): ' CP-12-05: connection to nature is not in this verified text (executive summary); logged as FD-P27. V-Y6-1 checks the full guidelines.',
})
EXTRA_SUPPORTS = [  # (source, code, component, claim); fit from the verdict
    ('search-40-assets', 'Y6.4', "Empowerment asset (by page order): 'Young people are given useful roles on the community' (youth councils and advisory roles)", 'y6-03'),
]

NEW += [
    {
        'id': 'via-character-strengths', 'claim': 'y6-07',
        'cite_as': 'VIA Institute on Character. VIA Classification of Character Strengths (Forgiveness, under Temperance).',
        'codebook_names': ['VIA Classification of Character Strengths'],
        'tier': 'D', 'publisher': 'VIA Institute on Character', 'year': None,
        'supports': [('Y6.1', 'Forgiveness (virtue of Temperance); cited for this component only')],
    },
    {
        'id': 'watts-diemer-voight-2011', 'claim': ['y6-01', 'y6-02'],
        'cite_as': 'Watts, R. J., Diemer, M. A., & Voight, A. M. (2011). Critical consciousness: Current status and future directions. New Directions for Child and Adolescent Development, 134, 43-57.',
        'codebook_names': ['Watts, Diemer & Voight (2011)'],
        'tier': 'C', 'publisher': None, 'year': 2011,  # journal named in cite_as; no verifier recorded the publisher
        'supports': [('Y6.3', 'critical reflection (social analysis and moral rejection of societal inequities) and critical action'),
                     ('Y6.4', 'political efficacy: perceived capacity to effect social and political change')],
    },
    {
        'id': 'iste-students-2024', 'claim': 'y6-06',
        'cite_as': 'ISTE (2024). ISTE Standards for Students, 1.2 Digital Citizen (1.2.b Online Interactions; 1.2.d Digital Privacy).',
        'codebook_names': ['ISTE Standards for Students (2024)'],
        'tier': 'B', 'publisher': 'International Society for Technology in Education', 'year': 2024,
        'supports': [('Y6.7', '1.2 Digital Citizen: 1.2.b Online Interactions; 1.2.d Digital Privacy')],
    },
]
```

Watts `publisher` is `None`: the verifier recorded the journal, volume, pages and DOI, but not
a publisher name, and S1.4 forbids filling it from memory.

Result for CP-12-05 alone: +3 sources and +5 supports (87 → 90, 146 → 151 on today's base).
`codebook_extensions` unchanged: Y6.6 keeps its NAAEE support.

#### (a4) `codebook-refinement/DEVIATIONS.md`

**FD-P13, Status line, before:**

```
- **Status:** closed (2026-09-27, CP-10-02: CIRCLE's 2002 core civic engagement indicators, verified, added to Y6's framework basis; Y6.4 matches its political voice and electoral indicators)
```

**After** (one line; the test requires `closed (…)`):

```
- **Status:** closed (2026-09-27, CP-10-02: CIRCLE's 2002 core civic engagement indicators, verified, added to Y6's framework basis; Y6.4 matches its political voice and electoral indicators. Scope of the closure, CP-12-05, 2026-10-16: CIRCLE covers Y6.4's behavioral core only, that is contacting officials, petitions, protest, boycotts and voting; civic efficacy rests on Watts, Diemer & Voight (2011) political efficacy and youth councils on Search Institute's useful-roles asset, both verified with the source broader than the code, so they need no entry (decision G3); "leadership" in the name needs no entry either (decision Y6-1), and its rule 7 line and exclude pointer to Y4.7 follow PR #62)
```

**New entry**, inserted after FD-P26 (CP-12-04):

```markdown
### FD-P27 · Y6.6

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** NAAEE (2019), K-12 Environmental Education: Guidelines for Excellence, Personal and Civic Responsibility (verified), for pro-environmental behavior and stewardship.
- **Departs:** "connection to nature" (definition and include) is a codebook-defined element. The verified NAAEE text does not name it. UNESCO-UNEP Tbilisi (1977) Recommendation No. 2, "an awareness of and sensitivity to the total environment and its allied problems" (claim y6-05, PARTIAL), is about environmental problems and protection, not connection to nature: the code is broader than that source, so it does not avoid an entry (decision G3), and it is not cited.
- **Evidence:** S045 (adjudicated design row, Y6.6: "a sense of stewardship and connection to nature"). Real-run use: about 4 texts from nature programs (practitioner review; model codes, not gold).
- **Alternative considered:** drop "connection to nature" (flips S045); move it to Y8.7 well-being (Y6.6 already excludes "feeling restored in nature", so the boundary is drawn); cite Tbilisi as if it closed the gap (it does not).
- **Decided in:** CP-12-05 (batch 2 research review; decisions settled 2026-10-16). Provisional id; renumbered at merge.
- **Revisit:** when V-Y6-1 (the full NAAEE K-12 Guidelines) returns, or if another verified environmental-education or nature-connectedness framework names connection to nature as an outcome.
```

The case follows the FD-P12 and FD-005 pattern (fidelity adapted, case codebook-defined: an
anchored code with one codebook-defined element), as recommended. The fidelity reviewer noted
that this pairing reads oddly against S1.6's wording ("The code is marked codebook-defined");
`fidelity: codebook-defined` would misdescribe Y6.6, which keeps a direct anchor for its
behavior half. Merged-components is not used: Tbilisi is not in Y6's Framework Basis, and
connection to nature and stewardship behavior are easy to tell apart (decision G6).

**Bullets added to the "Batch 2 review (Y5-Y7), 2026-10-16" section** (created by CP-12-04;
create it here if CP-12-05 lands first):

```markdown
- **Y6.1, sportsmanship and faith-grounded values.** FD none. Both are named instances of Search Institute Positive Values (integrity, honesty, responsibility), which the registry quotes, practised in a setting with the construct unchanged (decision G5). Forgiveness is cited to VIA's Forgiveness component (claim y6-07). Gold: H015, S180, S125, S145, S167.
- **Y6.4, civic efficacy and youth councils.** FD none. Watts, Diemer & Voight (2011), "Political efficacy is the perceived capacity to effect social and political change" (claim y6-02), and Search Institute, "Young people are given useful roles on the community" (claim y6-03), are both PARTIAL because the source is broader than the code (decision G3). Gold: H030, S039, S211.
- **Y6.4, leadership.** FD none (decision Y6-1). A rule 7 line and an exclude pointer to Y4.7 follow PR #62 in their own CP; they must not flip S059 (leading a trail cleanup, Y4.7).
- **Y6.6, connection to nature.** FD-P27 opened (codebook-defined element). V-Y6-1 checks the full NAAEE Guidelines.
```

**Drift table.** Y6 row, before and after:

```
| Y6 Character & Civic | 7 | 0 | 0% | no |
```

```
| Y6 Character & Civic | 7 | 1 (Y6.6) | 14% | no |
```

#### (a5) `rulesText`, domain `hint`, `CONFUSIONS.md`

Unchanged.

### Part (b): prompt-reaching changes (batched Source PATCH after PRs #62 and #66; two-run design-set gate)

#### Source lines (print as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y6.1 | Search Institute, 40 Developmental Assets, Positive Values. | Search Institute, 40 Developmental Assets, Positive Values; VIA Institute on Character, VIA Classification of Character Strengths (Forgiveness). |
| Y6.3 | Muhammad, Five Pursuits (Pursuit 4: Criticality). | Muhammad, Five Pursuits (Pursuit 4: Criticality); Watts, Diemer & Voight (2011), critical consciousness (critical reflection and critical action). |
| Y6.4 | Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE, The Civic and Political Health of the Nation: political voice and electoral indicators. | Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE, The Civic and Political Health of the Nation: political voice and electoral indicators; Watts, Diemer & Voight (2011), critical consciousness (political efficacy); Search Institute, 40 Developmental Assets (young people given useful roles in the community). |
| Y6.7 | ISTE Standards for Students (2016), Standard 2: Digital Citizen. | ISTE Standards for Students (2024), 1.2 Digital Citizen (1.2.b Online Interactions; 1.2.d Digital Privacy). |

Y6.7 does not cite 1.2.a (unverified) or 1.2.c (screen time belongs to health, R-25). Y6.6's
Source line is unchanged. No line uses "partial", "located", "(verified)" or "VERIFY".

#### Domain Y6 `frameworkBasis`: in CP-12-29, not here

The full-review SUMMARY moves "the Y6.7 ISTE year" into CP-12-29, so this CP no longer edits
Y6's `frameworkBasis`. For reference, CP-12-29's ISTE edit is:

```
Before: … ISTE Standards for Students (Digital Citizen); …
After:  … ISTE Standards for Students (2024) (Digital Citizen); …
```

Decision G2 also puts the secondary frameworks this CP adds into Y6's `frameworkBasis` as a
"secondary" clause, through CP-12-29: VIA Institute on Character, VIA Classification of
Character Strengths (Y6.1, Forgiveness only); Watts, Diemer & Voight (2011), critical
consciousness (Y6.3, Y6.4). Search Institute is already in Y6's `frameworkBasis`. CP-12-29's
list in the SUMMARY does not yet name VIA or Watts; it must, for its `sync.test.ts` check. The
clause's wording is CP-12-29's.

#### Gate

In the batched gate described in CP-12-04 (after PRs #62 and #66). Rows to watch: S012, H015,
S180, S125, S145, S167 (Y6.1); H030, S039, S211, S136 (Y6.4); S059 (stays Y4.7); S123 (Y6.3);
S107 (Y6.7). Y6.3 and Y6.4 now both cite Watts; watch the Y6.3/Y6.4 pair for instability (S4.5).
Expected flips: none.

## Sources

| Registry ID | Status | Component relied on | claim_id and verbatim excerpt (verifier's) |
|---|---|---|---|
| via-character-strengths (new) | verified | Forgiveness | y6-07 SUPPORTED: "I forgive others when they upset me and/or when they behave badly towards me" |
| watts-diemer-voight-2011 (new) → Y6.3 | verified (author's lab copy; bibliographic match recorded; G8) | critical reflection | y6-01 SUPPORTED: "Critical reflection refers to a social analysis and moral rejection of societal inequities" |
| watts-diemer-voight-2011 → Y6.4 | verified, partial | political efficacy | y6-02 PARTIAL: "Political efficacy is the perceived capacity to effect social and political change" |
| search-40-assets → Y6.4 | verified, partial | useful roles (Empowerment by page order) | y6-03 PARTIAL: "Young people are given useful roles on the community." |
| iste-students-2024 (new) | verified | 1.2.d (and 1.2.b, in the verifier's note) | y6-06 SUPPORTED: "Students take action to protect their digital privacy on devices and manage their personal data and security while online." |
| naaee-k12-2019 | verified (unchanged) | Personal and Civic Responsibility | existing CP-10-01 record; V-Y6-1 pending (FD-P27's revisit trigger) |

Caveats carried into registry notes: y6-03's Empowerment placement is by page order; y6-06's
excerpt covers 1.2.d only and 1.2.b is in the note; y6-07's classification originates with
Peterson & Seligman (2004), published by VIA (verifier: "the attribution is acceptable").

Considered and not used: UNESCO-UNEP Tbilisi (y6-05, PARTIAL, third-party host; narrower than
the code, so it does not close FD-P27, and it is not cited); Search "Service to others" for Y6.5
(y6-04; later cycle).

## Verification requests

**V-Y6-1. NAAEE K-12 Guidelines, full text, for connection to nature** (FD-P27's revisit
trigger; non-gating for this CP).

```
claim_id: y66-naaee-full
code: Y6.6
cite_as: NAAEE (2019). K-12 Environmental Education: Guidelines for Excellence. North American Association for Environmental Education.
claimed_component: A guideline or learner outcome on connection to nature (for example, feeling connected to, caring about, or valuing the natural world), anywhere in the full guidelines, not only the executive summary.
url: https://naaee.org/programs/guidelines-excellence
```

The URL is a lead to the publisher's guidelines page, not evidence; the verifier locates the
full K-12 document from it (the registry's executive summary is at
`https://eepro.naaee.org/sites/default/files/eepro-post-files/k-12_ee.executive_summary_2019_0.pdf`).
Why: the devil's-advocate review, "The researcher searched only NAAEE's executive summary".

**V-Y6-2 (optional, non-gating). CIRCLE (2002), "Engaged Worldview", for civic efficacy.**

```
claim_id: y64-circle-worldview
code: Y6.4
cite_as: Keeter, S., Zukin, C., Andolina, M., & Jenkins, K. (2002). The Civic and Political Health of the Nation: A Generational Portrait. CIRCLE.
claimed_component: The report's "engaged worldview" passage: young people who feel they can make a difference in their community (civic efficacy).
url: https://files.eric.ed.gov/fulltext/ED498892.pdf
```

Why: a review lead (recommendations section 5). If SUPPORTED, a later CP may rest Y6.4's
efficacy element on the existing anchor; this CP does not wait for it.

## Decisions applied (settled 2026-10-16, Severin: recommended options)

| Decision | What it settles here |
|---|---|
| G10 | Part (a) lands now; part (b) waits for the one gate after PRs #62 and #66. |
| G5 | Y6.1: sportsmanship and faith-grounded values are instances of Positive Values; no FD. |
| G3 | Y6.4: Watts and Search Institute are broader than the code, so no FD. Y6.6: Tbilisi is narrower than the code, so FD-P27 opens. |
| G8 | The Watts lab copy is admissible (bibliographic match recorded). Tbilisi's third-party copy would not be, and it is not used. |
| Y6-1 | "Leadership" stays in Y6.4 with no FD; rule 7 and an exclude pointer to Y4.7 follow PR #62 in their own CP. |
| G2 | VIA and Watts go into Y6's `frameworkBasis` as a secondary clause, through CP-12-29, with the ISTE year. |
| G6 | No merged-components entry for Y6.6. |

The batch's optional Tbilisi support is not taken (its recommendation was no).

## Dependencies and boundaries

- **PR #62.** Its rule 7 (voice → Y5.4 / Y5.6 / Y6.4) and rule 13 (leadership) touch Y6.4's
  boundary. This CP changes no Y6.4 definition, include, exclude, rule or name.
- **PR #66.** No Y6 code. CP-11-02's FD-P21..P23 may land first.
- **CP-12-04.** Creates the shared module and the "Batch 2 review" section in `DEVIATIONS.md`;
  this CP adds rows to both. FD-P27 assumes FD-P26 exists; both ids are provisional.
- **CP-12-29.** Owns the Y6 `frameworkBasis` edits (ISTE year, secondary clause).
- **CP-12-25** sweeps stale "(located)" in `basis`; the Y6.1 edit here is the same change.

## Deferred (not in this CP)

- **Y6.4 "leadership"** (decision Y6-1, settled): after PR #62 merges, a rule 7 line and a Y6.4
  exclude pointer to Y4.7 (S059: leading a trail cleanup → Y4.7). A RULES/DEFINITION_SCOPE
  change, so it needs its own CP and the two-run gate; one hint wording for Y4.7 vs Y6.4 is agreed
  with PR #62's CP-09-08.
- **Y6.3/Y6.4 tie-breaker** (analysis vs efficacy) once both cite Watts: later cycle, needs gold
  (H030 is the only efficacy row; G11's two-rows-per-side rule applies).
- **Y6.5** Search "Service to others" (later cycle) and the adult-volunteering exclude, which
  follows decision G15: an adult volunteer's skills for the role → A1.1, their retention or
  satisfaction with serving → A1.3, their own life outcomes → A1 domain-only. That exclude is a
  later Y6.5 CP.

## Gold impact

- Rows expected to change code: none. No definition, include, exclude, useInstead or rule
  changes; the (b) gate confirms this.
- Design rows the edits rest on: S012, H015, S180, S125, S145, S167 (Y6.1); H030, S039, S211,
  S136 (Y6.4); S059 (Y4.7, unaffected); S045, S247 (Y6.6); S107 (Y6.7); S123 (Y6.3).
- No change in this CP is blocked on a gold adjudication (G11 and G14 do not apply to it).
- New proposed rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read or used.

## Judge result

Not run. Part (a): `npm test`. Part (b): judged in the batched gate with CP-12-04 and CP-12-06.
