# CP-12-19: Part A boundaries (A3.3 exclude to A3 domain-only; A1.2 vs A3.1 subject rule)

**In plain words.** Two boundary hints for the coding model. First, Community Conditions &
Collective Efficacy (A3.3) is about neighbors trusting one another and acting together; general
statements about community health, safety or the local economy that say nothing about that will
go to the Systems, Policy & Community Conditions domain with no specific code, flagged as a gap in
the codebook, as you allowed. Second, a rule for who is acting: named adults such as counselors or
teachers putting a practice to use go to Practice Change (A1.2); a school, district or other
institution formally adopting a practice into its policy, budget, curriculum or routine goes to
Policy & Institutional Change (A3.1). Both change what the model reads, so they need their own
pair of test runs, and they stay blocked until you adjudicate the proposed example rows for each
side and the A3.1 deviation entry you approved has landed.

| Field | Value |
|---|---|
| Type | TIEBREAKER (two boundaries: A3.3 vs A3 domain-only, and A1.2 vs A3.1; one gate run) |
| Codes touched | A3.3 (include, exclude, useInstead). A1.2 (useInstead). A3.1 (exclude, useInstead). rulesText: one bullet under "DOMAIN ONLY", new rule 18 in "HOW TO CHOOSE A CODE". The domain hints follow from useInstead. No definition, source, example, `frameworkBasis` or registry changes. |
| Version bump | PATCH (hints, exclude lines, rulesText clarifications; no definition changes), against whatever version is current at apply time |
| Requirement served | R3 tie-breakers |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options). **Blocked** on: (1) Severin adjudicating the proposed design rows for this CP (G11; see Gold impact); (2) the A3.1 deviation and wording CP (decision A3-1 option (a); see Prerequisite), which is itself blocked on the two A3.1 practice rows; (3) the `codebook_gap` flag in exports (G9; app change, see below). **Reaches the coding prompt: its own two-run design-set gate.** |
| Gate candidate | **DOMAIN ONLY bullet only** applied 2026-10-17 in the 3.3.0 gate candidate, ahead of CP-12-33, which relies on it (shared with CP-12-32; this is the first to land, so CP-12-32 drops the row). Rebased: the example reads ("material hardship in general" -> Domain F2), not ("improved community health" -> Domain A3), because item 15's A3.3 exclude is not applied (blocked on G11 rows P-73 to P-75 and the A3.1 prerequisite), and an A3 example would route community-health statements to A3 domain-only with no Exclude line saying so (S3.2). Placed after the "A code whose definition already covers the general case" bullet, as drafted (the F2.4 panel retest placed it right after the first DOMAIN ONLY sentence). Items 15 and 16 and rule 18 stay blocked. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. Item 15 narrows what reaches A3.3 to Sampson's construct and adds an include inside it. Item 16's A1.2 arm stays inside Guskey Level 4 and SAMHSA. Item 16's A3.1 arm routes institutional practice into A3.1, which Coffman and Reisman do not cover (a3-04 PARTIAL); that departure is logged by the prerequisite's FD-P51 (provisional), which lands first, so this CP adds none. |

Framework deviation: none (the A3.1 practice departure is FD-P51, logged by the prerequisite CP).

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G9 (domain-only may hold a specific result that has no code, with a `codebook_gap` flag) | Item 15 goes ahead, with the DOMAIN ONLY bullet below. A3 domain-only rows from item 15 carry `codebook_gap` = 1 in gold. |
| G11 (two adjudicated design rows per side before any hint ships) | The CP is blocked until Severin adjudicates its proposed rows (listed by side under Gold impact). |
| A3-1 option (a) (adjudicate two practice rows, then a codebook-defined A3.1 FD with the taxonomy reviewer's wording) | Item 16 keeps only its option (a) arm (institutional practice → A3.1). The option (b) variants are deleted. The A3.1 FD and wording are a prerequisite CP. |
| G14 (S176 re-reviewed with CP-09-01) | Rule 18 is worded to leave S176 alone ("beyond the program"). S176 stays gold F1.9 until Severin settles it; the gate scores it at whatever code he has then set. This CP is not blocked on it. |
| G10 (hints get their own gate) | Its own pair of runs once the blockers clear (SUMMARY, "Order of landing" step 3). |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| A3.3 include, exclude, useInstead | yes | own gate, after the blockers |
| A1.2 useInstead; A3.1 exclude, useInstead | yes | own gate, after the prerequisite CP |
| rulesText: DOMAIN ONLY bullet, rule 18 | yes | own gate |
| (none) | no | nothing in this CP lands before the gate |

## Problem

From the recommendations ("CP-B4-05 · Part A boundaries", items 15 and 16):

15. **A3.3's name ("Community Conditions & Collective Efficacy") pulls in community health,
    safety, economy and norm statements** that collective efficacy does not cover: about 22 LM +
    7 NLM texts per the devil's advocate, about 30 per the practitioner (model codes, not gold).
    Its definition is pure Sampson ("Neighborhood cohesion, trust and willingness to act for the
    common good"; a3-03 SUPPORTED). All four reviewers accepted an exclude sending those texts to
    A3 domain-only, and rejected widening with Reisman "Changes in impact" (a3-05) as a
    catch-all. The rename is MAJOR and is deferred.
16. **A1.2 vs A3.1 has no subject rule.** S148 ("School counselors will implement a universal SEL
    screener") is gold A1.2 with alternate A3.1; S101 ("The school district will adopt a
    policy...") is gold A3.1. The Part A axis decides it: named adults applying a practice → A1.2;
    an institution building a practice into its structure → A3.1.

**Domain-only for specific results (G9).** CP-09-09 defined domain-only as "names one domain's
outcome area but no specific result inside it". Item 15 sends *specific* results that have no
code to domain-only. G9 allows this with a `codebook_gap` flag. The prompt half is the DOMAIN ONLY
bullet below. The flag has two halves:

- **Gold:** `youth_outcomes_v3.gold.csv` already has a `codebook_gap` column (read by
  `scripts/scoreAppExport.ts`). Proposed A3 domain-only rows for this CP suggest
  `codebook_gap` = 1; Severin sets it on adjudication.
- **Exports:** the derived `specificity` column would label these rows "domain". Marking them as
  codebook gaps in exports is an app change, not a codebook CP, and has no owner yet. It should
  ship with or before this CP so the dashboard does not mix "names only the domain" with "specific
  but uncoded".

## Why the smallest fit (S2.2)

Each change adds hint text: no definition is widened or narrowed, and no code is added. Item 15
could have been a definition change (MINOR) or a rename (MAJOR). The exclude does the same work
at PATCH, as the devil's advocate required.

## Prerequisite: the A3.1 deviation and wording (separate CP, not yet filed)

Decision A3-1 option (a) is its own DEFINITION_SCOPE CP with a deviation entry (MINOR), and it
lands before this one. It is not drafted as a file here; this is its content for the orchestrator
to file. It is blocked on G11: Severin adjudicates the two A3.1 practice rows first, because
S1.6's codebook-defined case needs adjudicated rows and S019, S101 and H089 are all policy.

- A3.1 definition, before: `Changes to policy, funding or institutional practice in schools,
  districts, cities or states.` After: built on the taxonomy reviewer's wording, "formal adoption
  of a policy, program or practice by a school, district or other institution", keeping funding
  and public bodies (S019, S101, H089 must hold). The exact sentence is that CP's to write; it
  moves culture and climate out of A3.1 (the later school-climate hint routes them).
- A3.1 `fidelity` `"framework"` → `"adapted"`; `deviation` `"FD-P51"` (provisional).
- DEVIATIONS.md:

```markdown
### FD-P51 · A3.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Coffman (2009), policy goals: development, adoption, implementation, maintenance (verified, direct); Reisman, Gienapp & Stachowiak (2007), improved policies (verified, direct).
- **Departs:** formal adoption of a program or practice by a school, district or other institution. Both anchors define policy change in the public policy arena; that school practice belongs there is the codebook's inference (claim a3-04, PARTIAL).
- **Evidence:** the two A3.1 practice rows Severin adjudicates from `research-review/2026-10-16/full-review/proposed-design-rows.csv` (proposed P-23 and P-24; gold ids filled in on adjudication).
- **Alternative considered:** narrow A3.1 to formal policy, rules or funding, with practice to A3 domain-only (fidelity reviewer; about 20 LM and 8 NLM texts would lose their code).
- **Decided in:** decision A3-1 (Severin, 2026-10-16); the A3.1 wording CP. Provisional id.
- **Revisit:** if a verified source names institutional adoption of practice as a policy or systems outcome.
```

- Drift: A3 0/3 → 1/3 (at the line, not over). CP-12-12 lands before it, so A3.2 cannot add a
  second.

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
| A1.2 | useInstead | `A2.1; A1.1.` | `A2.1; A1.1; A3.1 when a school, district or other institution beyond the program formally adopts a practice into its policy, budget, curriculum or routine.` |
| A3.1 | exclude | `Partnerships and data sharing; program quality.` | `Partnerships and data sharing; program quality; named staff or other adults applying a practice.` |
| A3.1 | useInstead | `A3.2; A2.1.` | `A3.2; A2.1; A1.2 when named adults (teachers, counselors, staff) are the subject applying the practice.` |

If the prerequisite CP has already changed A3.1's exclude or useInstead, append these clauses to
its text.

"Beyond the program" keeps the program's own structures out of A3.1: **S176** (gold F1.9,
alternates A2.6 and A3.1) and **S075** (gold A2.1, alternate A3.1) must not move. The A2.6 / A3.2
/ F1.9 boundary waits on G14 (S176) and is not touched.

### rulesText (`codebooks/youthOutcomesV3.ts`)

**DOMAIN ONLY: one new bullet** (G9), appended after the bullet "A code whose definition already
covers the general case keeps it: ...":

```
     - A specific result that a code's Exclude or Use instead line sends to the domain with subcategory none also takes the domain-only code ("improved community health" -> Domain A3).
```

This keeps rulesText and the hints saying the same thing (S3.2). Without it, the first DOMAIN
ONLY sentence ("no specific result inside it") contradicts the A3.3 exclude.

**New rule 18**, appended after rule 17, so no existing rule is renumbered (PR #62's CP-09-08
adds "a new line after rule 11"; at apply time, check that the last rule is still 17):

```
18. STAFF PRACTICE vs. INSTITUTIONAL CHANGE (when the result is a practice being adopted): named adults applying a practice ("counselors will implement a screener", "staff will adopt trauma-informed practices") -> A1.2. A school, district or other institution beyond the program formally adopting a practice into its policy, budget, curriculum or routine ("the district will add restorative practices to its code of conduct") -> A3.1. The program's own family-engagement systems stay A2.6 (rule 10).
```

The opening "when the result is a practice being adopted" keeps youth outcomes that follow staff
practice out of the rule: **H035** (gold Y8.9, alternate A1.2) and **S073** (gold Y8.12,
alternate A1.2) must not move.

### `CONFUSIONS.md` and CF-019

The recommendation says "One CF ... Amend CF-019 to match". This CP does **not** edit
CONFUSIONS.md, because:

- CONFUSIONS.md is the 2.x registry. CF-019 is "8.3 · 11.2" (codebook 2.5.x, retired), and its
  2.x hints must match it (S3.2). 3.x tie-breakers live in rulesText and useInstead (CP-11-03
  precedent).
- `registry.test.ts` requires each `### CF-` entry to have two rows in `gold/original.gold.csv`
  tagged with its id. A new 3.x CF would need edits to 2.x gold, which agents must not make.
- `sync.test.ts` matches code references with a pattern that reads "A3.1" as the 2.x code "3.1"
  (and "A1.2" as "1.2"). Writing 3.x ids into a CF block would add false 2.x coverage and could
  break the `PAIRS_WITHOUT_CF` check.

This point was raised by the draft, not the review, so DECISIONS.md does not cover it; CF-019 is
left as is. CP-12-27 (renumbering CONFUSIONS to 3.x ids) is the place to restate it.

### Registry, `DEVIATIONS.md`

Unchanged by this CP. FD-P51 belongs to the prerequisite CP.

## Sources

| Registry ID or claim | Status | Component relied on |
|---|---|---|
| sampson-1997 | verified (direct after CP-12-12) | a3-03 SUPPORTED: "defined as social cohesion among neighbors combined with their willingness to intervene on behalf of the common good" |
| guskey-2002-pd-evaluation | verified (direct) | Level 4 use of new knowledge and skills (A1.2 arm) |
| samhsa-tic-2014 | verified (direct after CP-12-10) | integrating trauma knowledge into practices (A1.2 arm) |
| coffman-2009-advocacy-evaluation, reisman-2007-advocacy-policy | verified (direct) | policy development, adoption, funding (A3.1 arm: policy and budget; practice is FD-P51) |
| a3-04 | PARTIAL | named only to show that the practice half of A3.1 is the codebook's inference |

## Verification requests

None.

## Gold impact

- **Rows expected to change code: none** among adjudicated rows.
- **Watch rows** (a flip fails the CP unless argued as a correction): S154 (A3.3); S148, S204
  (A1.2); S101, S019 (A3.1); S176, S075, S149, S195 (alternate A3.1); H089 (A3.1), H090, H028,
  H035, S073, H057 (`set=heldout` in the design file; see test plan).
- **Real-run rows that will move** (model codes, not gold): about 22 to 30 A3.3 texts to A3/none.
  The cycle report must say that 3.1.x A3.3 counts are not comparable with later counts (devil's
  advocate).
- **Proposed design rows (blocking, G11).** The proposed rows are not listed in this CP. They
  live in `codebook-refinement/research-review/2026-10-16/full-review/proposed-design-rows.csv`
  (`status=proposed`; ids as of 2026-10-16, which that file may renumber). This CP stays blocked
  until Severin has adjudicated two rows on each side of each boundary:

  | Boundary | Side | Adjudicated rows today | In the proposed file |
  |---|---|---|---|
  | A3.3 vs A3 domain-only | A3.3 (residents' cohesion or shared action) | S154 | none yet: 1 more needed |
  | | A3 domain-only (community health, safety or economy with no cohesion; `codebook_gap` = 1) | none | none yet: 2 needed |
  | A1.2 vs A3.1 | A1.2 (named adults applying a practice) | S148, S204 | none needed |
  | | A3.1 (an institution adopting a practice; also FD-P51's evidence) | none for practice (S101, S019, H089 are policy) | P-23, P-24 |

  P-25 and P-26 (school culture → A3 domain-only) belong to the prerequisite CP's boundary (A3.1's
  tightened wording), not to this CP. The item 15 rows have to be added to the proposed file
  before this CP can move.

  Before adding any of them to gold, Severin checks each against the held-out set. Agents never
  set `status=adjudicated`.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read. CP-09-05's evidence row is
  not used.

## Test plan (own two-run gate)

As in CP-12-18, with `cp-12-19` paths: `--set design` and `--set heldout` on
`codebook-refinement/gold/youth_outcomes_v3.gold.csv` (never the separate held-out file), with the
H### rows reported with the design rows; the newly adjudicated rows are scored as design rows.
Plus the domain-only file:

```
npx tsx scripts/codebook-eval.ts --gold codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv --codebook youth_outcomes_v3 --set design --runs 2 --out codebook-refinement/eval/cp-12-19/candidate-<version>-domain-only.json --compare <matching baseline>
```

G-D01..G-D10 must not move (the new DOMAIN ONLY bullet must not pull broad labels into a domain).
Then `npm test` and both typechecks. **Not run yet** (the drafter's scratch run was refused by the
permission system and was not retried).

## Judge result

Filled in by `codebook-regression-judge`.
