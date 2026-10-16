# CP-12-16: Source and Framework Basis lines for Y2, Y3 and Y4 (prompt-reaching)

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Source lines: Y2.1, Y2.2, Y3.2, Y4.4, Y4.6, Y4.7, Y4.12. `frameworkBasis`: Y2, Y3, Y4. Y4.7 `useInstead` (stale "(in flight)" reference only). Registry: 1 new source (CCSS Speaking and Listening), casel-2020 (Y4.6), `codebook_names` on four sources. `basis`: Y4.6. Y2.A category description checked (no change proposed). **No definition, include, exclude, example, rulesText, hint, domain `description`, `fidelity` or DEVIATIONS change.** |
| Version bump | PATCH, relative to the version current when applied (after PR #62, so 3.2.x if its 3.2.0 candidate merges). Bumped at merge. |
| Requirement served | R1 frameworks |
| Status | draft (batch 1 research review, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. No code's scope changes. The lines name sources whose supports CP-12-01, -02, -03 and this CP add. Two existing unlogged departures close by citation, not by entry: Y4.6 public speaking (CCSS SL.4) and Y3.2 youth in care (Chafee/NYTD, decision C). Y2.1's anchor moves from Muhammad to Pekrun with no new FD (decision C); its pride element is FD-P40 (CP-12-01). If B1-1 is rejected, Y4.6 needs a counted entry (fallback **FD-P45, provisional id**, below). |
| Reaches the prompt | **Yes.** `source` prints as "Source Framework:" and `frameworkBasis` as "Framework Basis:" in `definitionsText`; `useInstead` prints as "Use instead:". One two-run design-set gate for the whole CP. |

## Problem

Batch 1 (`research-review/full-review/batch1/recommendations.md`, items 3, 5, 9, 12, 15, 1 and
decision B1-1) found that the prompt's citation lines lag the registry:

- **Y2.1** names Muhammad's Joy, a teaching aim, for a learner's enjoyment (S1.6). The verified
  construct is Pekrun's activity enjoyment (CP-12-01).
- **Y2.2** is rule 14's target for CASEL curiosity, but its line names only Hidi & Renninger.
- **Y3.2** includes "permanent adult connections for youth in care" with no line naming a source
  that covers the population (decision C; CP-12-02 adds Chafee/NYTD).
- **Y4.4** omits gratitude, which S082 and S242 rest on; **Y4.7** omits "Showing leadership in
  groups", its main real-run use; **Y4.6** cites only "Communicating effectively", while CASEL says
  nothing about speaking to an audience (CP-10-01 verifier, fit partial); S132 rests on it.
- **Y4.12** names "National Health Education Standards (2024), Standard 4" without the publisher or
  the indicators verified on the 2024 page (CP-12-03).
- **Framework Basis lines (B1-1).** S1.6 measures a code against its domain's anchor. Sources these
  CPs use outside the anchor (CASEL for Y2, Chafee/NYTD for Y3, CCSS and NHES for Y4) appear in no
  Framework Basis line, so the explorer would present, say, public speaking as CASEL. CP-10-02 set
  the precedent of naming added sources there (CIRCLE, Coffman) but left NHES out of Y4's.
- **Y4.7 useInstead** calls CP-01-06's leadership rule "in flight"; CP-01-06 was approved on
  2026-09-26 (R-32). This is the one non-citation string here; it is a stale reference to a CP's
  status and is included only because this is the batch's single prompt-reaching CP. Severin can
  drop it to its own PATCH.

## Change

### `frameworkBasis` (prints as "Framework Basis:")

**Y2**, before:

```
Hidi & Renninger (2006), Four-Phase Model of Interest Development; Muhammad, Five Pursuits (Joy); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time).
```

After:

```
Hidi & Renninger (2006), Four-Phase Model of Interest Development; Pekrun (2024), control-value theory of achievement emotions (activity enjoyment); National Core Arts Standards (artistic processes); Search Institute Developmental Assets (Constructive Use of Time); secondary: CASEL (2020) SEL Framework (curiosity and open-mindedness).
```

**Y3**, before:

```
Search Institute Developmental Relationships Framework; CDC (2009) School Connectedness; Search Institute Developmental Assets (Support); Education-to-Workforce Indicator Framework (social capital).
```

After:

```
Search Institute Developmental Relationships Framework; CDC (2009) School Connectedness; Search Institute Developmental Assets (Support); Education-to-Workforce Indicator Framework (social capital); secondary: Chafee, 42 U.S.C. 677(a)(2), and the National Youth in Transition Database (permanent connections with caring adults for youth in foster care).
```

**Y4**, before:

```
CASEL (2020) SEL Framework: the five competencies are this domain's categories.
```

After:

```
CASEL (2020) SEL Framework: the five competencies are this domain's categories. Secondary, for elements CASEL words more generally: Common Core State Standards, Speaking and Listening anchor 4 (presenting to an audience); National Health Education Standards (SHAPE America, 2024), Standard 4 (refusal skills).
```

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
(FD-P42, CP-12-03).

### Y4.7 `useInstead` (prints as "Use instead:")

Before: `Y6.4 civic leadership; Y3.3 friendships; Y7.3 workplace. Same line as CP-01-06's leadership rule (in flight).`

After: `Y6.4 civic leadership; Y3.3 friendships; Y7.3 workplace. Same line as CP-01-06's leadership rule.`

No routing words change. CP-09-08 rule 7 (PR #62) owns the leadership boundary and is not touched.

### `basis` (data only)

Y4.6, before: `CASEL (2020) SEL Framework (verified), Relationship Skills: 'Communicating effectively'.`

After: `CASEL (2020) SEL Framework (verified, partial), Relationship Skills: 'Communicating effectively'; competency definition 'communicate clearly, listen actively' (verified, direct; claim y4a-02). Common Core State Standards, CCRA.SL.4 (verified, direct for presenting to an audience; claim y4a-01).`

The other codes' `basis` notes are updated by CP-12-01, -02 and -03.

### Category description Y2.A (display only, not in the prompt)

Checked, as the recommendations ask (taxonomy review). The current text, "How young people feel
about learning and activities: enjoying them, becoming curious, developing a lasting interest of
their own, and seeing why learning matters for their goals.", names no framework and does not
depend on Muhammad, so the re-anchor leaves it accurate. **No change proposed.** If Severin wants
the description to cover Y2.1's pride element too, an optional wording is: "... enjoying them and
taking pride in being part of them, becoming curious, ...". Y3 and Y4 category descriptions are
unaffected.

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
    'pekrun-2024-control-value': ['Pekrun (2024)'],
    'acf-nytd': ['National Youth in Transition Database'],
    'chafee-42usc677-a2': ['Chafee, 42 U.S.C. 677(a)(2)'],
}
NOTES_APPEND = {'ccss-speaking-listening-anchors': "Public speaking is an instance of CASEL 'Communicating effectively', which does not name speaking to an audience (CP-10-01 verifier). Named as a Y4 secondary (decision B1-1). Added by CP-12-16."}
```

`casel-2020` already carries "CASEL"; "National Health Education Standards" is added to
`shape-nhes-2024` by CP-12-03. The `sync.test.ts` name checks run on the 2.x codebook only, so
these names are kept for the convention and the explorer, not for a test.

Effect: +1 source, +2 supports.

## Sources

Every source the new lines name has a verified support for that code once CP-12-01, -02, -03 and
this CP are applied. Excerpts are the verifier's.

| Line | Registry ID | Claim | Fit | Verifier excerpt |
|---|---|---|---|---|
| Y2.1, Y2 basis | pekrun-2024-control-value (CP-12-01) | y2-01 | direct | "concurrent activity emotions such as enjoyment or boredom during learning" |
| Y2.2, Y2 basis | casel-2020 (CP-12-01) | y2-05 | direct | "Demonstrating curiosity and open-mindedness" |
| Y3.2, Y3 basis | chafee-42usc677-a2 (CP-12-02) | y3-05 | direct | "to help children who have experienced foster care at age 14 or older achieve meaningful, permanent connections" |
| Y3.2, Y3 basis | acf-nytd (CP-12-02) | y3-06 | direct | "educational attainment, positive connections with adults, high-risk behavior, and access to health insurance." |
| Y4.4 | casel-2020 (CP-12-03) | y4a-05, y4a-06 | direct | "Understanding and expressing gratitude"; "Showing concern for the feelings of others" |
| Y4.6, Y4 basis | ccss-speaking-listening-anchors (new) | y4a-01 | direct | "Present information, findings, and supporting evidence such that listeners can follow the line of reasoning" |
| Y4.6 | casel-2020 (new support) | y4a-02 | direct | "This includes the capacities to communicate clearly, listen actively, cooperate, work collaboratively" |
| Y4.7 | casel-2020 (CP-12-03) | y4b-01 | direct | "Showing leadership in groups" |
| Y4.12, Y4 basis | shape-nhes-2024 (CP-12-03) | y4b-10 | direct | "4.12.5 Apply refusal skills and strategies in a variety of situations." |

## Verification requests

None. Every line cites a SUPPORTED claim.

## Fallback if B1-1 is rejected

If Severin decides non-anchor sources do not go into `frameworkBasis`, drop the three
`frameworkBasis` edits and keep the source lines. Y4.6's public-speaking element then sits on a
source outside Y4's stated anchor, which S1.6 counts as a departure:

```markdown
### FD-P45 · Y4.6

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Relationship Skills, "Communicating effectively" (verified, partial).
- **Departs:** "speaking to an audience" (definition) and "presentations and public speaking" (include); grounded in Common Core CCRA.SL.4 (claim y4a-01), which is not Y4's anchor.
- **Evidence:** S132 (public speaking at the county fair, gold Y4.6).
- **Alternative considered:** name CCSS as a Y4 secondary (B1-1, rejected in this branch).
- **Decided in:** CP-12-16 (batch 1 research review, 2026-10-16), pending Severin.
- **Revisit:** if B1-1 is reconsidered.
```

Y4.6 would become `adapted` / `FD-P45` and Y4 would count 2 of 12 (17%). The Y2 (CASEL curiosity)
and Y3 (Chafee/NYTD) cases would need the same look; under the reviewers' verdicts both close by
citation with or without B1-1, but the fidelity reviewer would count them.

## Decisions for Severin (this CP depends on them)

- **B1-1 (secondary frameworks in `frameworkBasis`).** Recommended yes, as a "secondary" clause, in
  this CP. This is why the CP reaches the prompt.
- **C (age rule).** Applies to Y3.2 (closed by Chafee/NYTD). CCSS is a K-12 standard and Pekrun's
  settings are achievement settings, but neither Y4.6 nor Y2.1 names a population, so no entry.
- **D (timing).** Recommended: one gate run, after CP-12-01, -02 and -03 (or in the same release).
  Because CP-12-01 waits on PR #62, the Y2 rows here can be split off if Severin wants the Y3/Y4
  lines earlier; that costs a second gate run.
- **Y4.7 useInstead.** Keep in this CP (recommended, to share the gate) or move to its own PATCH.

## Dependencies and boundaries

- **Needs first (or in the same release):** CP-12-01 (Pekrun and CASEL Y2.2 rows), CP-12-02
  (Chafee (a)(2) and NYTD Y3.2 rows), CP-12-03 (CASEL Y4.4 and Y4.7 rows, NHES re-quote). Without
  them a line would name a source with no support for that code.
- **PR #62.** Touches no line edited here (it edits Y2.5, Y2.6 and rules 2, 7, 9, 10, 13, 16).
  Build the gate baseline on the version current at apply time.
- **PR #66.** CP-11-01 edits Y1's `frameworkBasis` only; CP-11-03 edits Y1 lines and rule 8. No
  overlap.
- **CASEL URL** (item 17) is not part of this CP.

## Gold impact

Prompt text changes, so this CP needs the two-run design-set gate (S4.4, S4.5):

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-16/baseline-<version>-design.json
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-16/candidate-<version>-design.json --compare codebook-refinement/eval/cp-12-16/baseline-<version>-design.json
```

Pass: no adjudicated design row flips, design accuracy does not fall, and any row whose primary
code differs between the two runs is reported as a confusion candidate.

- Rows expected to change code: none. No definition, include, exclude or rule changes.
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
