# CP-12-16: Source and Framework Basis lines for Y2, Y3 and Y4 (prompt-reaching)

**In plain words.** This proposal updates the "Source Framework" lines that the coding model reads for
seven codes, so that each line names the research the records now verify; no definition or rule
changes. Enjoyment and Joy (Y2.1) will cite Pekrun's 2024 theory of enjoyment instead of a teaching
framework, and the Engagement domain's list of frameworks swaps the same two names; Curiosity and
Triggered Interest (Y2.2) adds the curiosity item of the Collaborative for Academic, Social, and
Emotional Learning framework; Supportive Adult Relationships (Y3.2) adds the federal foster-care
transition law and the national foster-youth survey. Empathy, Perspective-Taking and Social Awareness
(Y4.4) adds gratitude, Communication and Public Speaking (Y4.6) adds the Common Core speaking
standard for presenting to an audience, Teamwork, Collaboration and Group Leadership (Y4.7) adds
"showing leadership in groups", and Risk Avoidance and Refusal Skills (Y4.12) names the 2024 health
standards correctly. Because the model reads these lines, they wait for the one pair of scoring runs
on the design test set after pull requests #62 and #66, together with the separate proposal that adds
"secondary" frameworks to the domain lists; only the new registry records land now.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Source lines: Y2.1, Y2.2, Y3.2, Y4.4, Y4.6, Y4.7, Y4.12. `frameworkBasis`: Y2 (anchor swap, Muhammad → Pekrun, only). Registry: 1 new source (CCSS Speaking and Listening), casel-2020 (Y4.6), `codebook_names` on two sources. `basis`: Y4.6. Y2.A category description checked (no change). **No definition, include, exclude, useInstead, example, rulesText, hint, domain `description`, `fidelity` or DEVIATIONS change.** The "secondary" clauses for Y2, Y3 and Y4 are in CP-12-29 (G2); the Y4.7 `useInstead` fix is in CP-12-26. |
| Version bump | PATCH, relative to the version current when applied (after PR #62, so 3.2.x if its 3.2.0 candidate merges). Bumped at merge. |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Applied | Applied 2026-10-16 in 3.1.5: the registry part: new `ccss-speaking-listening-anchors` (y4a-01), the casel-2020 Y4.6 definition support (y4a-02), `codebook_names` on `acf-nytd` and `chafee-42usc677-a2`; the Y4.6 `basis`. Waits for the gate: Source lines Y2.1, Y2.2, Y3.2, Y4.4, Y4.6, Y4.7, Y4.12 and the Y2 `frameworkBasis` re-anchor. The note sentence "Named as a Y4 secondary by CP-12-29" was left out, because CP-12-29 has not landed. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. No code's scope changes. The lines name sources whose supports CP-12-01, -02, -03 and this CP add. Two existing unlogged departures close by citation, not by entry: Y4.6 public speaking (CCSS SL.4, named as a Y4 secondary by CP-12-29 under G2) and Y3.2 youth in care (Chafee/NYTD, G1). Y2.1's anchor moves from Muhammad to Pekrun with no new FD (G1); its pride element is FD-unassigned (Y2.1) (CP-12-01). |
| Reaches the prompt | **Yes.** `source` prints as "Source Framework:" and `frameworkBasis` as "Framework Basis:" in `definitionsText`. The prompt part waits for the one two-run design-set gate after PRs #62 and #66 (G10), shared with CP-12-29, CP-12-26 and the other Source-line CPs. |

## When each part lands

This CP mixes both kinds:

| Part | Kind | Reaches the prompt? | When |
|---|---|---|---|
| Registry: new `ccss-speaking-listening-anchors`, casel-2020 Y4.6 support, `codebook_names`, note | (a) | no | Now (G10), after CP-12-01, -02 and -03's rows, no eval |
| `basis` Y4.6 | (a) | no | Now, no eval |
| Source lines Y2.1, Y2.2, Y3.2, Y4.4, Y4.6, Y4.7, Y4.12 | (b) | yes | At the shared gate after PRs #62 and #66 |
| Y2 `frameworkBasis` (Muhammad → Pekrun) | (b) | yes | At the shared gate |
| Y2, Y3, Y4 `frameworkBasis` "secondary" clauses | (b) | yes | Not in this CP: CP-12-29, at the same gate; must land in the same release as this CP's Y4.6 line |
| Y2.A category description | none | no (display only) | No change |

## Problem

Batch 1 (`research-review/full-review/batch1/recommendations.md`, items 3, 5, 9, 12, 15 and 1)
found that the prompt's citation lines lag the registry:

- **Y2.1** names Muhammad's Joy, a teaching aim, for a learner's enjoyment (S1.6). The verified
  construct is Pekrun's activity enjoyment (CP-12-01).
- **Y2.2** is rule 14's target for CASEL curiosity, but its line names only Hidi & Renninger.
- **Y3.2** includes "permanent adult connections for youth in care" with no line naming a source
  that covers the population (G1; CP-12-02 adds Chafee/NYTD).
- **Y4.4** omits gratitude, which S082 and S242 rest on; **Y4.7** omits "Showing leadership in
  groups", its main real-run use; **Y4.6** cites only "Communicating effectively", while CASEL says
  nothing about speaking to an audience (CP-10-01 verifier, fit partial); S132 rests on it.
- **Y4.12** names "National Health Education Standards (2024), Standard 4" without the publisher or
  the indicators verified on the 2024 page (CP-12-03).
- **Framework Basis lines.** Y2's line still names Muhammad's Joy as an anchor. Sources these CPs
  use outside the anchor (CASEL for Y2, Chafee/NYTD for Y3, CCSS and NHES for Y4) appear in no
  Framework Basis line; under G2 they are named as "secondary" clauses in one gated CP, CP-12-29, not
  here.

## Change

### `frameworkBasis` (prints as "Framework Basis:")

**Y2**, before:

```
Hidi & Renninger (2006), Four-Phase Model of Interest Development; Muhammad, Five Pursuits (Joy); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time).
```

After (anchor swap only):

```
Hidi & Renninger (2006), Four-Phase Model of Interest Development; Pekrun (2024), control-value theory of achievement emotions (activity enjoyment); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time).
```

Y3 and Y4 `frameworkBasis` are not changed by this CP.

**Handed to CP-12-29 (G2).** The "secondary" clauses drafted for batch 1 move to CP-12-29, which
applies them in the same gate. This is the text the batch-1 review settled; CP-12-29's list in the
cross-batch summary names only "Y2 CASEL; Y4 CCSS", so its drafter should add the Y3 clause and the
Y4 NHES clause below:

- Y2, append: `; secondary: CASEL (2020) SEL Framework (curiosity and open-mindedness)` (before the
  final period).
- Y3, append: `; secondary: Chafee, 42 U.S.C. 677(a)(2), and the National Youth in Transition
  Database (permanent connections with caring adults for youth in foster care)`.
- Y4, append: ` Secondary, for elements CASEL words more generally: Common Core State Standards,
  Speaking and Listening anchor 4 (presenting to an audience); National Health Education Standards
  (SHAPE America, 2024), Standard 4 (refusal skills).`

Only sources with a `direct` fit for the element they ground are named as secondaries. Partial-fit
sources (NRC/IOM, the Surgeon General and the reunification statutes in Y3; the NHES 4.2.3 and
CASEL "safety concerns" rows in Y4) and corroborating ones (SSES, LfJ, NHES 3.5.2/4.8.3) stay in
the registry and `basis` only.

### Source lines (print as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y2.1 | Muhammad, Five Pursuits (Pursuit 5: Joy). | Pekrun (2024), control-value theory: activity emotions (enjoyment during learning). |
| Y2.2 | Hidi & Renninger (2006), Four-Phase Model of Interest Development, phase 1 (triggered situational interest). | Hidi & Renninger (2006), Four-Phase Model of Interest Development, phase 1 (triggered situational interest); CASEL (2020) SEL Framework, Responsible Decision-Making: "Demonstrating curiosity and open-mindedness". |
| Y3.2 | Search Institute, Developmental Relationships Framework (Express Care; Challenge Growth; Provide Support); CDC (2009), School Connectedness (adult support). | Search Institute, Developmental Relationships Framework (Express Care; Challenge Growth; Provide Support); CDC (2009), School Connectedness (adult support); Chafee, 42 U.S.C. 677(a)(2), and the National Youth in Transition Database (permanent connections with a caring adult for youth in foster care). |
| Y4.4 | CASEL (2020) SEL Framework, Social Awareness: "Taking others' perspectives"; "Demonstrating empathy and compassion"; "Identifying diverse social norms, including unjust ones". | CASEL (2020) SEL Framework, Social Awareness: "Taking others' perspectives"; "Demonstrating empathy and compassion"; "Showing concern for the feelings of others"; "Understanding and expressing gratitude"; "Identifying diverse social norms, including unjust ones". |
| Y4.6 | CASEL (2020) SEL Framework, Relationship Skills: "Communicating effectively". | CASEL (2020) SEL Framework, Relationship Skills: "Communicating effectively" (communicate clearly, listen actively); Common Core State Standards, Speaking and Listening anchor 4 (CCRA.SL.4): presenting information so listeners can follow the reasoning. |
| Y4.7 | CASEL (2020) SEL Framework, Relationship Skills: "Practicing teamwork and collaborative problem-solving". | CASEL (2020) SEL Framework, Relationship Skills: "Practicing teamwork and collaborative problem-solving"; "Showing leadership in groups". |
| Y4.12 | CASEL (2020) SEL Framework, Relationship Skills: "Resisting negative social pressure"; National Health Education Standards (2024), Standard 4: refusal skills. | CASEL (2020) SEL Framework, Relationship Skills: "Resisting negative social pressure"; National Health Education Standards (SHAPE America, 2024), Standard 4 refusal-skills indicators (4.5.5, 4.8.5, 4.12.5). |

The new lines avoid "partial", "located", "(verified)" and "VERIFY", which `youthOutcomesV3.test.ts`
forbids in a source line. Y2.2 does not name SSES: it corroborates CASEL and adds nothing a coder
uses. Y4.4 leaves out "Recognizing situational demands and opportunities" until an excerpt shows
it (S1.5; CP-12-03). Y4.12 names no avoidance source, because its avoidance element is logged
(FD-P24, CP-12-03).

The Y4.7 `useInstead` "(in flight)" fix drafted here moves to CP-12-26 (stale in-flight text), which
is at the same gate.

### `basis` (data only)

Y4.6, before: `CASEL (2020) SEL Framework (verified), Relationship Skills: 'Communicating effectively'.`

After: `CASEL (2020) SEL Framework (verified, partial), Relationship Skills: 'Communicating effectively'; competency definition 'communicate clearly, listen actively' (verified, direct; claim y4a-02). Common Core State Standards, CCRA.SL.4 (verified, direct for presenting to an audience; claim y4a-01).`

The other codes' `basis` notes are updated by CP-12-01, -02 and -03.

### Category description Y2.A (display only, not in the prompt)

Checked, as the recommendations ask (taxonomy review). The current text, "How young people feel
about learning and activities: enjoying them, becoming curious, developing a lasting interest of
their own, and seeing why learning matters for their goals.", names no framework and does not
depend on Muhammad, so the re-anchor leaves it accurate. **No change.** Y3 and Y4 category
descriptions are unaffected.

### Registry

Mechanics as in CP-12-03, "Shared mechanics". This CP's tables:

```python
NEW = [
    {'id': 'ccss-speaking-listening-anchors', 'claim': 'y4a-01',
     'cite_as': 'National Governors Association Center for Best Practices & Council of Chief State School Officers (2010). Common Core State Standards for English Language Arts: College and Career Readiness Anchor Standards for Speaking and Listening.',
     'codebook_names': ['Common Core State Standards, Speaking and Listening'],
     'tier': 'B', 'publisher': 'National Governors Association Center for Best Practices; Council of Chief State School Officers', 'year': 2010,
     'supports': [('Y4.6', 'Presentation of Knowledge and Ideas, CCRA.SL.4: present information, findings and supporting evidence to an audience', 'direct')]},
]
ADD_SUPPORTS = [
    ('casel-2020', 'Y4.6', "Relationship Skills definition: 'communicate clearly, listen actively'", 'y4a-02', 'direct'),
]
CODEBOOK_NAMES_ADD = {  # names the new lines use (CLAUDE.md: a name in a citation line goes into codebook_names)
    'acf-nytd': ['National Youth in Transition Database'],
    'chafee-42usc677-a2': ['Chafee, 42 U.S.C. 677(a)(2)'],
}  # 'Pekrun (2024)' is set when CP-12-01 creates the entry
NOTES_APPEND = {'ccss-speaking-listening-anchors': "Public speaking is an instance of CASEL 'Communicating effectively', which does not name speaking to an audience (CP-10-01 verifier). Read on thecorestandards.org, the publishers' own site (G8). Named as a Y4 secondary by CP-12-29 (G2). Added by CP-12-16."}
```

`casel-2020` already carries "CASEL"; "National Health Education Standards" is added to
`shape-nhes-2024` by CP-12-03. The `sync.test.ts` name checks run on the 2.x codebook only, so
these names are kept for the convention and the explorer, not for a test. They land with the
registry part (now), ahead of the lines that print them.

Effect: +1 source, +2 supports.

## Sources

Every source the new lines name has a verified support for that code once CP-12-01, -02, -03 and
this CP are applied. Excerpts are the verifier's.

| Line | Registry ID | Claim | Fit | Verifier excerpt |
|---|---|---|---|---|
| Y2.1, Y2 basis | pekrun-2024-control-value (CP-12-01) | y2-01 | direct | "concurrent activity emotions such as enjoyment or boredom during learning" |
| Y2.2 (Y2 secondary in CP-12-29) | casel-2020 (CP-12-01) | y2-05 | direct | "Demonstrating curiosity and open-mindedness" |
| Y3.2 (Y3 secondary in CP-12-29) | chafee-42usc677-a2 (CP-12-02) | y3-05 | direct | "to help children who have experienced foster care at age 14 or older achieve meaningful, permanent connections" |
| Y3.2 (Y3 secondary in CP-12-29) | acf-nytd (CP-12-02) | y3-06 | direct | "educational attainment, positive connections with adults, high-risk behavior, and access to health insurance." |
| Y4.4 | casel-2020 (CP-12-03) | y4a-05, y4a-06 | direct | "Understanding and expressing gratitude"; "Showing concern for the feelings of others" |
| Y4.6 (Y4 secondary in CP-12-29) | ccss-speaking-listening-anchors (new) | y4a-01 | direct | "Present information, findings, and supporting evidence such that listeners can follow the line of reasoning" |
| Y4.6 | casel-2020 (new support) | y4a-02 | direct | "This includes the capacities to communicate clearly, listen actively, cooperate, work collaboratively" |
| Y4.7 | casel-2020 (CP-12-03) | y4b-01 | direct | "Showing leadership in groups" |
| Y4.12 (Y4 secondary in CP-12-29) | shape-nhes-2024 (CP-12-03) | y4b-10 | direct | "4.12.5 Apply refusal skills and strategies in a variety of situations." |

## Verification requests

None. Every line cites a SUPPORTED claim.

## Decisions applied (settled 2026-10-16)

- **G2 (secondary frameworks).** Named in `frameworkBasis` as "secondary" clauses, in one gated CP:
  CP-12-29. This CP keeps only the Y2 anchor swap, and needs CP-12-29 in the same release so that
  Y4.6's CCSS line sits on a named Y4 secondary. No fallback FD for Y4.6 is needed.
- **G1 (age and sector rule).** Applies to Y3.2 (covered by Chafee/NYTD). CCSS is a K-12 standard
  and Pekrun's settings are achievement settings, but neither Y4.6 nor Y2.1 names a population or
  sector, so no entry.
- **G8 (official copy).** CCSS is read on thecorestandards.org; the other lines' sources are covered
  in CP-12-01, -02 and -03.
- **G10 (timing).** Registry and `basis` parts land now; the Source lines and Y2 `frameworkBasis`
  wait for the one two-run gate after PRs #62 and #66, with CP-12-26 and CP-12-29. The Y2 lines are
  not split off: there is one gate.

## Dependencies and boundaries

- **Needs first:** CP-12-01 (Pekrun and CASEL Y2.2 rows), CP-12-02 (Chafee (a)(2) and NYTD Y3.2
  rows), CP-12-03 (CASEL Y4.4 and Y4.7 rows, NHES re-quote). Without them a line would name a
  source with no support for that code. CP-12-01 lands after PR #62, which the gate already follows.
- **Same release:** CP-12-29 (secondary clauses) and CP-12-26 (Y4.7 `useInstead`), both at the
  same gate.
- **PR #62.** Touches no line edited here (it edits Y2.5, Y2.6 and rules 2, 7, 9, 10, 13, 16).
  Build the gate baseline on the version current at apply time.
- **PR #66.** CP-11-01 edits Y1's `frameworkBasis` only; CP-11-03 edits Y1 lines and rule 8. No
  overlap.
- **CASEL URL** (item 17) is not part of this CP.

## Gold impact

Prompt text changes, so this CP's part (b) needs the two-run design-set gate (S4.4, S4.5). Under G10
it is one shared run for every Source-line and `frameworkBasis` CP, after PRs #62 and #66:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-16/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-16/candidate-<version>-design.json --compare codebook-refinement/eval/cp-12-16/baseline-<version>-design.json
```

Pass: no adjudicated design row flips, design accuracy does not fall, and any row whose primary
code differs between the two runs is reported as a confusion candidate.

- Rows expected to change code: none. No definition, include, exclude or rule changes.
- No change here waits on a gold row (G11, G14 do not apply).
- Rows to watch (gold or alternate on an edited code): Y2.1 S008, S137, S234 (alt S071, S144);
  Y2.2 S049, S080, S128 (alt S111, S158); Y3.2 S026, S102, S116, S175, S222, S246 (alt S047, S086);
  Y4.4 S082, S242 (alt S138, S197); Y4.6 S132 (alt S077, S136, S150, S211, S236); Y4.7 S004, S054,
  S059, S169, S230 (alt S253); Y4.12 S052, S172 (alt S065, S108). Highest risk: S059 (leadership,
  alt Y6.4) after "Showing leadership in groups" enters Y4.7's line, and S077 (alt Y4.6) after
  "presenting information" enters Y4.6's line.
- New proposed rows: none.
- Held-out gold was not read or used, and nothing here puts a gold statement into the prompt.

## Judge result

Not run. To be filled in by `codebook-regression-judge` after the gate.
