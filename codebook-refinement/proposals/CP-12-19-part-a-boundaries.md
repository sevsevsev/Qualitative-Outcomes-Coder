# CP-12-19: Part A boundaries (A3.3 exclude to A3 domain-only; A1.2 vs A3.1 subject rule)

| Field | Value |
|---|---|
| Type | TIEBREAKER (two boundaries: A3.3 vs A3 domain-only, and A1.2 vs A3.1). If the judge treats them as two kinds of change, split into CP-12-19a (item 15) and CP-12-19b (item 16). They share one gate run and the B4-6 dependency. |
| Codes touched | A3.3 (include, exclude, useInstead). A1.2 (useInstead). A3.1 (exclude, useInstead). rulesText: one bullet under "DOMAIN ONLY", new rule 18 in "HOW TO CHOOSE A CODE". The domain hints follow from useInstead. No definition, source, example, `frameworkBasis` or registry changes. |
| Version bump | PATCH (hints, exclude lines, rulesText clarifications; no definition changes), against whatever version is current at apply time |
| Requirement served | R3 tie-breakers |
| Status | draft (batch 4 research review, 2026-10-16); not applied. **Blocked on decision B4-6; the A3.1 arm also on B4-4.** **Reaches the coding prompt: two-run design-set gate required.** |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none, conditional. Item 15 narrows what reaches A3.3 to Sampson's construct and adds an include inside it. Item 16's A1.2 arm stays inside Guskey L4 and SAMHSA. Item 16's A3.1 arm ("adopting a practice into its policy, budget, curriculum or routine") routes institutional *practice* into A3.1, which Coffman and Reisman do not cover (a3-04 PARTIAL). By S4.1 that would move a construct past A3.1's framework. So the arm is "none" only if B4-4 option (a) has already opened an A3.1 codebook-defined FD (not drafted here; it would take FD-P51, provisional), or if under option (b) the arm reads "→ Domain A3 with subcategory none". Both variants are drafted below. |

Framework deviation: none, conditional on B4-4 (see the table row above).

## Problem

From the recommendations ("CP-B4-05 · Part A boundaries", items 15 and 16):

15. **A3.3's name ("Community Conditions & Collective Efficacy") pulls in community health,
    safety, economy and norm statements** that collective efficacy does not cover: about 22 LM +
    7 NLM texts per the devil's advocate, about 30 per the practitioner (model codes, not gold).
    Its definition is pure Sampson ("Neighborhood cohesion, trust and willingness to act for the
    common good"; a3-03 SUPPORTED). All four reviewers accepted option (a), an exclude sending
    those texts to A3 domain-only, and rejected widening with Reisman "Changes in impact" (a3-05)
    as a catch-all. The rename is MAJOR and is deferred.
16. **A1.2 vs A3.1 has no subject rule.** S148 ("School counselors will implement a universal SEL
    screener") is gold A1.2 with alternate A3.1; S101 ("The school district will adopt a
    policy...") is gold A3.1. The Part A axis decides it: named adults applying a practice → A1.2;
    an institution building a practice into its structure → A3.1.

**Why this waits on B4-6.** CP-09-09 defined domain-only as "names one domain's outcome area but
no specific result inside it". Item 15 (and item 16 under B4-4 option (b)) sends *specific*
results that have no code to domain-only, so the derived `specificity` column would label them
"domain" (taxonomy reviewer). The recommendation is to allow this with a `codebook_gap` flag. The
prompt half of that is drafted below as one DOMAIN ONLY bullet. Any export or schema flag is an
app change and is **not** in this CP. If B4-6 keeps the current definition, item 15 is withdrawn,
and item 16 keeps only its A1.2 arm and, under (a), its A3.1 arm.

## Why the smallest fit (S2.2)

Each change adds hint text: no definition is widened or narrowed, and no code is added. Item 15
could have been a definition change (MINOR) or a rename (MAJOR). The exclude does the same work
at PATCH, as the devil's advocate required.

## Change

### Item 15: A3.3 (`codebooks/youthOutcomesV3.data.ts`)

| Field | Before | After |
|---|---|---|
| include | `Residents' trust; willingness to intervene for youth safety.` | `Residents' trust; willingness to intervene for youth safety; residents' connection to one another and shared action for the neighborhood.` |
| exclude | `Individual youth's felt safety.` | `Individual youth's felt safety; community health, safety, economic or norm outcomes that name no cohesion, trust or collective action.` |
| useInstead | `Y8.10.` | `Y8.10; Domain A3 with subcategory none for community health, safety, economic or norm outcomes that name no cohesion, trust or collective action.` |

Domain hint: `Use instead: ` + the new useInstead (generated).

The include keeps the practitioner's resident-participation texts ("neighbors will help to lead
events") inside A3.3, because shared action for the common good is Sampson's second half. **S154**
(residents' trust and willingness to intervene for youth safety) names cohesion and intervention,
so it stays A3.3. A safety statement that names neither ("neighborhood crime will fall") goes to
A3/none.

### Item 16: A1.2 and A3.1

| Code | Field | Before | After |
|---|---|---|---|
| A1.2 | useInstead | `A2.1; A1.1.` | `A2.1; A1.1; A3.1 when the subject is a school, district or other institution beyond the program adopting a practice into its policy, budget, curriculum or routine.` |
| A3.1 | exclude | `Partnerships and data sharing; program quality.` | `Partnerships and data sharing; program quality; named staff or other adults applying a practice.` |
| A3.1 | useInstead | `A3.2; A2.1.` | `A3.2; A2.1; A1.2 when named adults (teachers, counselors, staff) are the subject applying the practice.` |

**Variant (b)**, if B4-4 narrows A3.1 to formal policy, rules or funding: in A1.2's useInstead,
replace "A3.1 when the subject ... routine" with "A3.1 when a school, district or other
institution adopts a policy, rule or budget; Domain A3 with subcategory none when it adopts a
practice into its curriculum or routine". The A3.1 lines stay as above.

"Beyond the program" keeps the program's own structures out of A3.1: **S176** (gold F1.9,
alternates A2.6 and A3.1) and **S075** (gold A2.1, alternate A3.1) must not move. The A2.6 / A3.2
/ F1.9 boundary waits on B3-6 (R-12) and is not touched.

### rulesText (`codebooks/youthOutcomesV3.ts`)

**DOMAIN ONLY: one new bullet** (only if B4-6 = allow), appended after the bullet "A code whose
definition already covers the general case keeps it: ...":

```
     - A specific result that a code's Exclude or Use instead line sends to the domain with subcategory none also takes the domain-only code ("improved community health" -> Domain A3).
```

This keeps rulesText and the hints saying the same thing (S3.2). Without it, the first DOMAIN
ONLY sentence ("no specific result inside it") contradicts the A3.3 exclude.

**New rule 18**, appended after rule 17, so no existing rule is renumbered (PR #62's CP-09-08
adds "a new line after rule 11"; at apply time, check that the last rule is still 17):

```
18. STAFF PRACTICE vs. INSTITUTIONAL CHANGE (when the result is a practice being adopted): named adults applying a practice ("counselors will implement a screener", "staff will adopt trauma-informed practices") -> A1.2. A school, district or other institution beyond the program adopting a practice into its policy, budget, curriculum or routine ("the district will add restorative practices to its code of conduct") -> A3.1. The program's own family-engagement systems stay A2.6 (rule 10).
```

Variant (b): replace the second sentence with "A school, district or other institution adopting a
policy, rule or budget -> A3.1; adopting a practice into its curriculum or routine -> Domain A3,
subcategory none."

The opening "when the result is a practice being adopted" keeps youth outcomes that follow staff
practice out of the rule: **H035** (gold Y8.9, alternate A1.2) and **S073** (gold Y8.12,
alternate A1.2) must not move.

### `CONFUSIONS.md` and CF-019

The recommendation says "One CF ... Amend CF-019 to match". This draft does **not** edit
CONFUSIONS.md, because:

- CONFUSIONS.md is the 2.x registry. CF-019 is "8.3 · 11.2" (codebook 2.5.x, retired), and its
  2.x hints must match it (S3.2). 3.x tie-breakers live in rulesText and useInstead (CP-11-03
  precedent).
- `registry.test.ts` requires each `### CF-` entry to have two rows in `gold/original.gold.csv`
  tagged with its id. A new 3.x CF would need edits to 2.x gold, which agents must not make.
- `sync.test.ts` matches code references with a pattern that reads "A3.1" as the 2.x code "3.1"
  (and "A1.2" as "1.2"). Writing 3.x ids into a CF block would add false 2.x coverage and could
  break the `PAIRS_WITHOUT_CF` check.

Option for Severin (decision X): append one prose line to CF-019 with no code ids, for example
"Codebook 3.x splits the organization arm: see `youthOutcomesV3.ts` rule STAFF PRACTICE vs.
INSTITUTIONAL CHANGE." Recommended: leave CF-019 as is.

### Registry, `DEVIATIONS.md`

Unchanged by this CP. Under B4-4 option (a), the A3.1 FD (codebook-defined, provisional FD-P51,
A3 at 1/3) is its own CP and must land before this one. S1.6 asks that adjudicated practice rows
exist first, which is why B4-4 recommends two proposed design rows; see below.

## Sources

| Registry ID or claim | Status | Component relied on |
|---|---|---|
| sampson-1997 | verified (direct after CP-12-12) | a3-03 SUPPORTED: "defined as social cohesion among neighbors combined with their willingness to intervene on behalf of the common good" |
| guskey-2002-pd-evaluation | verified (direct) | Level 4 use of new knowledge and skills (A1.2 arm) |
| samhsa-tic-2014 | verified (direct after CP-12-10) | integrating trauma knowledge into practices (A1.2 arm) |
| coffman-2009-advocacy-evaluation, reisman-2007-advocacy-policy | verified (direct) | policy development, adoption, funding (A3.1 arm: policy and budget only) |
| a3-04 | PARTIAL | named only to show that the practice half of A3.1 is the codebook's inference |

## Verification requests

None.

## Decisions for Severin

- **B4-6 (may domain-only hold specific results?).** Blocking. Recommended: allow (with a
  `codebook_gap` flag; that flag is an app change outside this CP). If "keep the definition":
  withdraw item 15 and the DOMAIN ONLY bullet.
- **B4-4 (A3.1 "institutional practice").** Picks the variant for item 16's A3.1 arm. Under (a),
  the A3.1 FD lands first.
- **D (timing).** Recommended: at the next gate, after B4-6 and after CP-12-12 (the A3.3 Sampson
  fit).
- **B3-6 (S176).** Not decided here; rule 18 is worded to leave S176 alone.
- **X (raised by this draft): CF-019.** Leave it (recommended) or add a prose pointer.

## Gold impact

- **Rows expected to change code: none** among adjudicated rows.
- **Watch rows** (a flip fails the CP unless argued as a correction): S154 (A3.3); S148, S204
  (A1.2); S101, S019 (A3.1); S176, S075, S149, S195 (alternate A3.1); H089 (A3.1), H090, H028,
  H035, S073, H057 (`set=heldout` in the design file; see test plan).
- **Real-run rows that will move** (model codes, not gold): about 22 to 30 A3.3 texts to A3/none.
  The cycle report must say that 3.1.x A3.3 counts are not comparable with later counts (devil's
  advocate).
- **Proposed new gold rows** (for Severin; `status=proposed`; suggestions only; IDs assigned when
  added). There is no Part A domain-only gold, and A3.1 has no practice row. These texts are
  written by the drafter, not copied from the real runs, because a real-run text could duplicate a
  protected held-out row. Severin should still check each one against the held-out set before
  adding it.
  - "Neighbors will organize and lead monthly events at the community garden." (suggested A3.3)
  - "Flu vaccination rates across the neighborhood will rise." (suggested A3 domain-only)
  - "The region will become more economically prosperous." (suggested A3 domain-only)
  - "Teachers will use restorative circles in their classrooms." (suggested A1.2)
  - "The school will build a daily mindfulness routine into its school-wide schedule." (suggested
    A3.1 under B4-4 (a), A3 domain-only under (b); this is one of the practice rows B4-4 needs)
  - "The district will add place-based environmental education to its required curriculum."
    (same as above)
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read. CP-09-05's evidence row is
  not used.

## Test plan (two-run gate)

As in CP-12-18, with `cp-12-19` paths: `--set design` and `--set heldout` on
`codebook-refinement/gold/youth_outcomes_v3.gold.csv` (never the separate held-out file), plus
the domain-only file:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-19/candidate-<version>-domain-only.json --compare <matching baseline>
```

G-D01..G-D10 must not move (the new DOMAIN ONLY bullet must not pull broad labels into a domain).
Optional non-gating preview: `--include-proposed` once the rows above are added. Then `npm test`
and both typechecks. **Not run yet** (the drafter's scratch run was refused by the permission
system and was not retried).

## Judge result

Filled in by `codebook-regression-judge`.
