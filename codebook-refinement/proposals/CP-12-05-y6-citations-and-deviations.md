# CP-12-05: Y6 citation fixes and deviation log (batch 2 research review)

| Field | Value |
|---|---|
| Type | CITATION_FIX (with the matching `DEVIATIONS.md` entries, as in recommendations section 2) |
| Codes touched | Source lines (part b only): Y6.1, Y6.3, Y6.4, Y6.7. Domain Y6 `frameworkBasis` (part b: ISTE year). `basis`: Y6.1, Y6.3, Y6.4, Y6.6, Y6.7. `fidelity`/`deviation`: Y6.6 (framework → adapted, FD-P25), only if V-Y6-1 fails. Registry: `search-40-assets` (Y6.1 component, new Y6.4 support), `iste-students-2016` (note), plus 3 new sources (4 with the optional Tbilisi). No definition, include, exclude, useInstead, example, hint or rulesText changes. **Y6.2 and Y6.5 are not touched. "Leadership" in Y6.4 is not touched** (deferred to PR #62, B2-7). |
| Version bump | PATCH. Part (a): relative to the version current when applied (3.1.4 today; after PR #66 or PR #62, the next PATCH; same release as CP-12-04 if both are approved). Part (b): inside the single batched Y5-Y7 Source PATCH after PR #62 merges (decision D). |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft (batch 2 research review, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new **FD-P25 (provisional id)**, Y6.6, codebook-defined element "connection to nature", counted, opened only if V-Y6-1 (full NAAEE K-12 Guidelines) does not cover it; changed FD-P13 (closed entry; its closure note is rescoped to say what CIRCLE covers; stays closed). None for Y6.1, Y6.3, Y6.4, Y6.7 (reasons recorded). Y6 drift: 0/7 → 1/7 (0/7 if V-Y6-1 covers connection to nature). |

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
Rewording Y6.1 to move "sportsmanship" and "faith-grounded values" into the include (T's option)
is not needed under decision B2-1, and is not bundled.

## Change

### Part (a): no prompt change (lands now; `npm test` is the check)

#### (a1) `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation` (conditional)

Only if V-Y6-1 does **not** find "connection to nature" (or an equivalent component) in the full
NAAEE K-12 Guidelines:

| Code | Field | Before | After |
|---|---|---|---|
| Y6.6 | `fidelity` | `"framework"` | `"adapted"` |
| Y6.6 | `deviation` | (absent) | `"FD-P25"` (provisional id; renumbered at merge) |

If V-Y6-1 does cover it, nothing in (a1) changes; the NAAEE support's component and excerpt are
updated from V-Y6-1 instead (a3), and Y6 stays at 0/7.

#### (a2) `codebooks/youthOutcomesV3.data.ts`: `basis` notes

| Code | Before | After |
|---|---|---|
| Y6.1 | Search Institute 40 Developmental Assets, Positive Values (located); Lerner et al. (2005), Character (partial). | Search Institute 40 Developmental Assets, Positive Values (verified, direct: integrity, honesty, responsibility). VIA Institute on Character, VIA Classification of Character Strengths, Forgiveness (verified, direct; claim y6-07; cited for this component only). Sportsmanship and faith-grounded values are read as Positive Values practised in a setting (decision B2-1); no FD. |
| Y6.3 | Muhammad, Five Pursuits, Pursuit 4 Criticality (verified). No measurement framework in the records [VERIFY before adding one]. | Muhammad, Five Pursuits, Pursuit 4 Criticality (verified, direct). Watts, Diemer & Voight (2011), critical consciousness: critical reflection and critical action (verified, direct; claim y6-01). |
| Y6.4 | Re-verified 2026-09-27 (CP-10-02): CIRCLE (2002) core civic engagement indicators, political voice (contacting officials, petitions, protest, boycotts) and electoral participation (verified, direct). Now Framework; FD-P13 closed. NCSS C3 Dimension 4 (partial) no longer cited. | *(unchanged text, then)* CP-12-05: CIRCLE covers the behavioral core only. Civic efficacy rests on Watts, Diemer & Voight (2011), political efficacy (verified, partial; claim y6-02), and youth councils and advisory roles on Search Institute, 40 Developmental Assets, "Young people are given useful roles on the community" (verified, partial; claim y6-03). Both sources are broader than the code, so no FD (decision B2-3). "Leadership" in the name waits for PR #62 (B2-7). |
| Y6.6 | NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified; 'connection to nature' not covered). | NAAEE (2019) K-12 Guidelines, Personal and Civic Responsibility (verified). Connection to nature: [if V-Y6-1 fails] not in the NAAEE Guidelines (full text checked, V-Y6-1); codebook-defined element, FD-P25. [if V-Y6-1 succeeds] NAAEE (2019) K-12 Guidelines, <component found> (verified; V-Y6-1). |
| Y6.7 | ISTE Standards for Students (2016), Standard 2 Digital Citizen (verified). | ISTE Standards for Students (2024), 1.2 Digital Citizen: 1.2.b Online Interactions, 1.2.d Digital Privacy (verified, direct; claim y6-06). The 2016 edition, Standard 2 (verified 2026-09-27), is superseded and kept in the registry as history. |

#### (a3) Registry (rows added to the shared module defined in CP-12-04)

New rows in `codebook-refinement/v3/source-verification-2026-10-16-b2.json`, copied from
`verify/claims-{a,b}.json` and `verdicts-{a,b}.json` as described in CP-12-04:

| claim_id | Verdict | source_kind | Used for |
|---|---|---|---|
| y6-01 | SUPPORTED | secondary, author's lab copy with bibliographic match recorded | new source: Watts et al. (2011) → Y6.3 |
| y6-02 | PARTIAL | same | Watts et al. (2011) → Y6.4 (partial) |
| y6-03 | PARTIAL | primary (searchinstitute.org) | search-40-assets → Y6.4 (partial) |
| y6-06 | SUPPORTED | primary (iste.org) | new source: ISTE 2024 → Y6.7 |
| y6-07 | SUPPORTED | primary (viacharacter.org) | new source: VIA, Forgiveness → Y6.1 |
| y6-05 | PARTIAL | secondary (gdrc.org) | optional Tbilisi support, only if Severin chooses it (Decisions item 5) |
| (V-Y6-1, V-Y6-2) | pending | | added when the verifier answers |

Tables in `codebook-refinement/v3/verification_2026_10_16_b2.py`:

```python
# Watts et al. (2011) was read on the authors' lab site; the verifier recorded "the citation
# details match (NDCAD 134, 43-57, doi 10.1002/cd.310)". Same precedent as CP-10-01's
# FULL_TEXT_ELSEWHERE (an article in the author's institutional repository). Needs B2-4.
FULL_TEXT_ELSEWHERE |= {'watts-diemer-voight-2011'}

COMPONENTS.update({
    ('search-40-assets', 'Y6.1'): 'Positive Values (Integrity, Honesty, Responsibility)',  # drops the stale "(live registry status: located)"
})
NOTES.update({
    'iste-students-2016': 'Superseded by the 2024 edition (iste-students-2024, CP-12-05). Kept as history: the codebook cited it until 3.1.x.',
})
SUPPORT_NOTE_APPEND.update({
    ('iste-students-2016', 'Y6.7'): ' Superseded (CP-12-05): the Source line cites the 2024 edition, 1.2.b and 1.2.d.',
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

If V-Y6-1 covers connection to nature, add to the module:

```python
SUPPORT_RECHECK.update({('naaee-k12-2019', 'Y6.6'): ('y66-naaee-full', 'direct', None)})
URLS.update({'naaee-k12-2019': '<url_checked from V-Y6-1>'})
```

The optional Tbilisi row (Decisions item 5) would be:

```python
NEW += [{
    'id': 'unesco-tbilisi-1978', 'claim': 'y6-05',  # or the unesdoc re-fetch, V-Y6-3
    'cite_as': 'UNESCO, in co-operation with UNEP (1978). Intergovernmental Conference on Environmental Education, Tbilisi (USSR), 14-26 October 1977: Final Report (ED/MD/49).',
    'codebook_names': [], 'tier': 'A', 'publisher': 'UNESCO', 'year': 1978,
    'supports': [('Y6.6', 'Recommendation No. 2, Awareness: sensitivity to the total environment (partial: environmental problems, not connection to nature)')],
}]
```

It is not proposed by default: it is PARTIAL, on a third-party host, and it does not close the
gap (F, T keep it as partial support; D rejects it).

Result for CP-12-05 alone: +3 sources and +5 supports (87 → 90, 146 → 151 on today's base).
`codebook_extensions` unchanged: Y6.6 keeps its NAAEE support.

#### (a4) `codebook-refinement/DEVIATIONS.md`

**FD-P13, Status line, before:**

```
- **Status:** closed (2026-09-27, CP-10-02: CIRCLE's 2002 core civic engagement indicators, verified, added to Y6's framework basis; Y6.4 matches its political voice and electoral indicators)
```

**After** (one line; the test requires `closed (…)`):

```
- **Status:** closed (2026-09-27, CP-10-02: CIRCLE's 2002 core civic engagement indicators, verified, added to Y6's framework basis; Y6.4 matches its political voice and electoral indicators. Scope of the closure, CP-12-05, 2026-10-16: CIRCLE covers Y6.4's behavioral core only, that is contacting officials, petitions, protest, boycotts and voting; civic efficacy rests on Watts, Diemer & Voight (2011) political efficacy and youth councils on Search Institute's useful-roles asset, both verified with the source broader than the code, so they need no entry (decision B2-3); "leadership" in the name is deferred to PR #62)
```

**New entry (only if V-Y6-1 fails)**, inserted after FD-P24 (CP-12-04):

```markdown
### FD-P25 · Y6.6

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** NAAEE (2019), K-12 Environmental Education: Guidelines for Excellence, Personal and Civic Responsibility (verified), for pro-environmental behavior and stewardship.
- **Departs:** "connection to nature" (definition and include) is a codebook-defined element. The full NAAEE K-12 Guidelines (V-Y6-1) do not name it. UNESCO-UNEP Tbilisi (1977) Recommendation No. 2, "an awareness of and sensitivity to the total environment and its allied problems" (claim y6-05, PARTIAL), is about environmental problems and protection, not connection to nature.
- **Evidence:** S045 (adjudicated design row, Y6.6: "a sense of stewardship and connection to nature"). Real-run use: about 4 texts from nature programs (practitioner review; model codes, not gold).
- **Alternative considered:** drop "connection to nature" (flips S045); move it to Y8.7 well-being (Y6.6 already excludes "feeling restored in nature", so the boundary is drawn); cite Tbilisi as if it closed the gap (it does not; PARTIAL, code broader than source).
- **Decided in:** CP-12-05 (batch 2 research review, 2026-10-16), pending Severin. Provisional id; renumbered at merge.
- **Revisit:** if a verified environmental-education or nature-connectedness framework names connection to nature as an outcome.
```

The case follows the FD-P12 and FD-005 pattern (fidelity adapted, case codebook-defined: an
anchored code with one codebook-defined element), as recommended. The fidelity reviewer noted
that this pairing reads oddly against S1.6's wording ("The code is marked codebook-defined");
`fidelity: codebook-defined` would misdescribe Y6.6, which keeps a direct anchor for its
behavior half. Merged-components is not used: Tbilisi is not in Y6's Framework Basis.

**Bullets added to the "Batch 2 review (Y5-Y7), 2026-10-16" section** (created by CP-12-04;
create it here if CP-12-05 lands first):

```markdown
- **Y6.1, sportsmanship and faith-grounded values.** FD none. Both are Search Institute Positive Values (integrity, honesty, responsibility) practised in a setting, with the construct unchanged (decision B2-1, pending Severin; P dissents and would log a sector-widening entry). Forgiveness is cited to VIA's Forgiveness component (claim y6-07). Gold: H015, S180, S125, S145, S167.
- **Y6.4, civic efficacy and youth councils.** FD none. Watts, Diemer & Voight (2011), "Political efficacy is the perceived capacity to effect social and political change" (claim y6-02), and Search Institute, "Young people are given useful roles on the community" (claim y6-03), are both PARTIAL because the source is broader than the code (decision B2-3; T and P dissent and would log an entry). Gold: H030, S039, S211. "Leadership" in the name is not logged here: it waits for PR #62's rule 7 (B2-7).
- **Y6.6, connection to nature.** [FD-P25 opened | FD none, covered by the full NAAEE Guidelines per V-Y6-1].
```

**Drift table.** Y6 row, before and after:

```
| Y6 Character & Civic | 7 | 0 | 0% | no |
```

```
| Y6 Character & Civic | 7 | 1 (Y6.6) | 14% | no |
```

(Unchanged at 0 if V-Y6-1 covers connection to nature.)

#### (a5) `rulesText`, domain `hint`, `CONFUSIONS.md`

Unchanged.

### Part (b): prompt-reaching changes (batched Y5-Y7 Source PATCH after PR #62; two-run design-set gate)

#### Domain Y6 `frameworkBasis` (prints as "Framework Basis:")

Before:

```
Search Institute Developmental Assets (Positive Values); NCSS (2013) C3 Framework (Civics); Muhammad, Five Pursuits (Criticality); NAAEE (2019) Guidelines for Excellence; ISTE Standards for Students (Digital Citizen); CIRCLE (2002) civic engagement indicators (civic voice and community action).
```

After (only the ISTE year is added):

```
Search Institute Developmental Assets (Positive Values); NCSS (2013) C3 Framework (Civics); Muhammad, Five Pursuits (Criticality); NAAEE (2019) Guidelines for Excellence; ISTE Standards for Students (2024) (Digital Citizen); CIRCLE (2002) civic engagement indicators (civic voice and community action).
```

VIA and Watts are not added to `frameworkBasis` (VIA's other strengths overlap Y4; T, D).
Search Institute already covers the Y6.4 useful-roles support.

#### Source lines (print as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y6.1 | Search Institute, 40 Developmental Assets, Positive Values. | Search Institute, 40 Developmental Assets, Positive Values; VIA Institute on Character, VIA Classification of Character Strengths (Forgiveness). |
| Y6.3 | Muhammad, Five Pursuits (Pursuit 4: Criticality). | Muhammad, Five Pursuits (Pursuit 4: Criticality); Watts, Diemer & Voight (2011), critical consciousness (critical reflection and critical action). |
| Y6.4 | Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE, The Civic and Political Health of the Nation: political voice and electoral indicators. | Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE, The Civic and Political Health of the Nation: political voice and electoral indicators; Watts, Diemer & Voight (2011), critical consciousness (political efficacy); Search Institute, 40 Developmental Assets (young people given useful roles in the community). |
| Y6.7 | ISTE Standards for Students (2016), Standard 2: Digital Citizen. | ISTE Standards for Students (2024), 1.2 Digital Citizen (1.2.b Online Interactions; 1.2.d Digital Privacy). |

Y6.7 does not cite 1.2.a (unverified) or 1.2.c (screen time belongs to health, R-25). Y6.6's
Source line is unchanged under either V-Y6-1 outcome, unless V-Y6-1 finds a named NAAEE
component worth printing (then a one-item change, in this batch). No line uses "partial",
"located", "(verified)" or "VERIFY".

#### Gate

In the batched gate described in CP-12-04. Rows to watch: S012, H015, S180, S125, S145, S167
(Y6.1); H030, S039, S211, S136 (Y6.4); S059 (stays Y4.7); S123 (Y6.3); S107 (Y6.7). Y6.3 and Y6.4
now both cite Watts; watch the Y6.3/Y6.4 pair for instability (S4.5). Expected flips: none.

## Sources

| Registry ID | Status | Component relied on | claim_id and verbatim excerpt (verifier's) |
|---|---|---|---|
| via-character-strengths (new) | verified | Forgiveness | y6-07 SUPPORTED: "I forgive others when they upset me and/or when they behave badly towards me" |
| watts-diemer-voight-2011 (new) → Y6.3 | verified (author's lab copy; bibliographic match recorded; B2-4) | critical reflection | y6-01 SUPPORTED: "Critical reflection refers to a social analysis and moral rejection of societal inequities" |
| watts-diemer-voight-2011 → Y6.4 | verified, partial | political efficacy | y6-02 PARTIAL: "Political efficacy is the perceived capacity to effect social and political change" |
| search-40-assets → Y6.4 | verified, partial | useful roles (Empowerment by page order) | y6-03 PARTIAL: "Young people are given useful roles on the community." |
| iste-students-2024 (new) | verified | 1.2.d (and 1.2.b, in the verifier's note) | y6-06 SUPPORTED: "Students take action to protect their digital privacy on devices and manage their personal data and security while online." |
| naaee-k12-2019 | verified (unchanged) | Personal and Civic Responsibility | existing CP-10-01 record; V-Y6-1 pending |
| unesco-tbilisi-1978 (optional) | PARTIAL | Recommendation No. 2, Awareness | y6-05 PARTIAL: "to help social groups and individuals acquire an awareness of and sensitivity to the total environment and its allied problems." |

Caveats carried into registry notes: y6-03's Empowerment placement is by page order; y6-06's
excerpt covers 1.2.d only and 1.2.b is in the note; y6-07's classification originates with
Peterson & Seligman (2004), published by VIA (verifier: "the attribution is acceptable").

Considered and not used: Search "Service to others" for Y6.5 (y6-04; optional, D calls it
churn; later cycle).

## Verification requests

**V-Y6-1. NAAEE K-12 Guidelines, full text, for connection to nature** (gates FD-P25).

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
Why: D, "The researcher searched only NAAEE's executive summary".

**V-Y6-2 (optional, non-gating). CIRCLE (2002), "Engaged Worldview", for civic efficacy.**

```
claim_id: y64-circle-worldview
code: Y6.4
cite_as: Keeter, S., Zukin, C., Andolina, M., & Jenkins, K. (2002). The Civic and Political Health of the Nation: A Generational Portrait. CIRCLE.
claimed_component: The report's "engaged worldview" passage: young people who feel they can make a difference in their community (civic efficacy).
url: https://files.eric.ed.gov/fulltext/ED498892.pdf
```

Why: a review lead (D, recommendations section 5). If SUPPORTED, Y6.4's efficacy element rests on
the existing anchor and the Watts link becomes optional.

**V-Y6-3 (only if Severin picks Tbilisi). The same report on unesdoc** (B2-4): cite_as as
above for `unesco-tbilisi-1978`, claimed component Recommendation No. 2 Awareness and Attitudes,
url: the unesdoc record for ED/MD/49 (the verifier locates it from `https://unesdoc.unesco.org/`).

## Decisions for Severin (this CP depends on them)

1. **D** (timing). Recommended: (a) now, (b) in the one batched Source PATCH after PR #62.
2. **B2-1.** Decides "no FD" for Y6.1 sportsmanship and faith-grounded values. If rejected, log
   one codebook-defined-element entry for them (P's view; Y6 then 2/7, or 3/7 with FD-P25, which
   is over a third and triggers an S4.9 anchor re-review).
3. **B2-3** (a PARTIAL fit where the source is broader is not a departure). Decides "no FD" for
   Y6.4 and the FD for Y6.6. If rejected, Y6.4 needs an entry (T, P), and Y6 is 2/7.
4. **B2-4.** Decides whether the Watts lab copy is accepted (bibliographic match recorded). If
   not, Watts waits for a publisher-copy re-fetch, and Y6.3 keeps the `basis` note without the
   "[VERIFY]" text until then.
5. **Tbilisi as partial support for Y6.6.** Recommended: no (D); optional per the
   recommendations. It does not change the FD.
6. **B2-7** (after PR #62: keep "leadership" in Y6.4's name, no FD, rule 7 plus an exclude pointer
   to Y4.7). Not decided here; listed because FD-P13's new closure note defers to it.

## Dependencies and boundaries

- **PR #62.** Its rule 7 (voice → Y5.4 / Y5.6 / Y6.4) and rule 13 (leadership) touch Y6.4's
  boundary. This CP changes no Y6.4 definition, include, exclude, rule or name. The leadership
  item is deferred (below).
- **PR #66.** No Y6 code. CP-11-02's FD-P21..P23 may land first.
- **CP-12-04.** Creates the shared module and the "Batch 2 review" section in `DEVIATIONS.md`;
  this CP adds rows to both. FD-P25 assumes FD-P24 exists; both ids are provisional.

## Deferred (not in this CP)

- **Y6.4 "leadership"** (B2-7): after PR #62 merges, a rule 7 line and a Y6.4 exclude pointer to
  Y4.7 (S059: leading a trail cleanup → Y4.7). Needs its own CP and the two-run gate.
- **Y6.3/Y6.4 tie-breaker** (analysis vs efficacy) once both cite Watts: later cycle, needs gold
  (H030 is the only efficacy row).
- **Y6.5** Search "Service to others" and the adult-volunteering pointer (R-21): later cycle.

## Gold impact

- Rows expected to change code: none. No definition, include, exclude, useInstead or rule
  changes; the (b) gate confirms this.
- Design rows the edits rest on: S012, H015, S180, S125, S145, S167 (Y6.1); H030, S039, S211,
  S136 (Y6.4); S059 (Y4.7, unaffected); S045, S247 (Y6.6); S107 (Y6.7); S123 (Y6.3).
- New proposed rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read or used.

## Judge result

Not run. Part (a): `npm test`. Part (b): judged in the batched gate with CP-12-04 and CP-12-06.
