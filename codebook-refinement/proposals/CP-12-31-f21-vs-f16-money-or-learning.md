# CP-12-31: Tie-breaker for families: money result or adult learning (F2.1 vs F1.6)

**In plain words.** Two family codes sit close together: Income, Benefits & Financial Stability
(F2.1) and Adult Education, Skills & Employment (F1.6), whose definition also names a caregiver's
"financial skills". Severin confirmed how his own ruling on a design example, "Families reported
feeling more confident managing household finances.", should generalize: when a statement is about
the household's money (income, benefits, savings, stability, or confidence about money), it goes
to F2.1; when an adult learns a skill or finishes a course, it goes to F1.6. This change writes
that rule down as a tie-breaker in the reviewers' guide (`CONFUSIONS.md`), with the design examples
it rests on. The coding model does not read that guide, so this lands now; any change to the
codebook wording that the model reads comes later, in its own proposal.

| Field | Value |
|---|---|
| Type | TIEBREAKER |
| Codes touched | None in the codebook data. `CONFUSIONS.md`: new 3.x entry CF-P03 (provisional id) in the "Codebook 3.x tie-breakers" section. Tests: the CONFUSIONS scoping and the 3.x CF check, shared with CP-12-15. No definition, include, exclude, useInstead, example, Source line, `frameworkBasis`, rulesText or registry changes. |
| Version bump | PATCH against the version current when applied (CONFUSIONS and tests only) |
| Requirement served | R3 tie-breakers |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none (FD-P38, F1.6 "financial skills", is opened by CP-12-08, not here) |

Framework deviation: none. The entry sorts statements between two existing codes inside their
current text. It relies on F1.6 keeping "financial skills", which CP-12-08 logs as FD-P38
(provisional id; a codebook-defined element of F1.6 that none of its sources names).

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| F1-1 (confirm H027; approve a 3.x CF: money status, savings and confidence → F2.1; learning a skill or completing a course → F1.6) | This CP is that CF. It comes ahead of any F1.6 or F2.1 wording change, as F1-1 requires. |
| G10 | `CONFUSIONS.md` and tests do not reach the prompt; this lands now. |
| G11 | No hint ships here. A later hint CP that puts this line into `useInstead` or rule 11 needs two adjudicated design rows per side first; the money-skill case has none yet (proposed rows below). |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| CF-P03 in `CONFUSIONS.md` | no | now (after CP-12-08, whose FD-P38 the entry cites) |
| The "Codebook 3.x tie-breakers" section header and the test scoping (if CP-12-15 has not landed) | no | now |
| Any `useInstead` or rule 11 text carrying this line | yes | not in this CP: a later hint CP, after Severin adjudicates the proposed rows below (G11), with its own two-run gate |

**Shared rows (whichever lands first applies them; the other drops the rows).** CP-12-15 drafts
the same section header, the same scoping of `sync.test.ts` and `registry.test.ts`, and the same
`describe('3.x confusion entries (S3.1)')` in `codebooks/youthOutcomesV3.test.ts`. The text to use
is CP-12-15's, reproduced under "Change". CF ids are provisional: CF-P01 and CF-P02 are CP-12-15's,
CF-P03 is this CP's, CF-P04 and CF-P05 are CP-12-32's, CF-P06 to CF-P09 are CP-12-27's. They are
renumbered at merge.

## Problem

1. **The line is unwritten.** F1.6's definition names "financial skills" of a caregiver; F2.1's
   names household "financial stability" and its include names "household savings". A statement
   about a parent's money confidence fits both texts. The design gold settles the cases it holds,
   but no rule says why.
2. **The confirming row.** Design gold file `codebook-refinement/gold/youth_outcomes_v3.gold.csv`,
   row H027 (set `heldout`, the old 2.x held-out split now in the design file; adjudicated by
   Severin, 2026-09-26):

   > H027 · "Families reported feeling more confident managing household finances." → v3_gold
   > `F2.1 Income, Benefits & Financial Stability`, no alternates.

   Decision F1-1 confirms this ruling and generalizes it. Because H027 is now cited as design
   evidence, it is design gold for every later comparison, and it never appears in a prompt (the
   CF file is not prompt text).
3. **The other rows on the line** (same file, all adjudicated by Severin on 2026-09-26):

   | Row | Statement | v3_gold | Alternate |
   |---|---|---|---|
   | S006 | "Parents will receive financial coaching and increase household savings." | F2.1 | Y7.6 |
   | H067 | "Families increased household income while parents completed occupational skills training." | F2.1 | F1.6 |
   | S118 | "Parents will complete their GED or enroll in job training." | F1.6 | F2.1 |
   | H062 | "Adult participants improved their English language proficiency by one CASAS level." | F1.6 | Y1.2 |
   | S206 | "Family members will increase their digital literacy and confidence using technology for telehealth and school portals." | F1.6 | Y6.7, A2.3 |

   H067 shows the order when both appear: a household money result named next to training goes to
   F2.1. S206 shows that "confidence" alone does not pull to F2.1: confidence using technology is a
   skill outcome; only confidence about money is F2.1 (H027).
4. **Rule 11 of rulesText** says "Household or caregiver income, benefits or financial coaching
   for adults -> F2.1". It agrees with S006 and H027 and says nothing about an adult learning a
   money skill, so the CF does not contradict it (S3.2). Aligning rule 11 and the two `useInstead`
   lines with the CF is prompt text and belongs to the later hint CP.

## Change: `CONFUSIONS.md`

**Section.** If CP-12-15 has not landed, create the section at the end of the file, after CF-028
(CP-12-15's text):

```markdown
---

## Codebook 3.x tie-breakers

Entries for codebook 3.x (`codebooks/youthOutcomesV3.data.ts`) use `CF-P##` ids and 3.x code ids. Gold IDs point to `gold/youth_outcomes_v3.gold.csv` (design set; never held-out rows). The 2.x entries above keep their numbers. For 3.x, the text of `useInstead` and rulesText must say the same thing as these entries (S3.2). An entry marked "hint held" is in force for reviewers; its prompt text ships with the CP named.
```

**Entry**, appended to the section (before: no entry):

```markdown
### CF-P03: Money result or adult learning? · in force for reviewers; no hint yet (CP-12-31, decision F1-1)

**Codes:** **F2.1** · F1.6

**Rule:**

- The household's or an adult's money situation: income, public benefits, savings, debt, financial stability, or confidence or stress about money → **F2.1**. Financial coaching named as the service also goes here (rule 11).
- An adult participant learning a skill or completing education or training (GED, job training, English, digital skills, a financial-education course), with no household money result named → **F1.6**. A caregiver learning a money skill, such as budgeting, is F1.6 (its "financial skills" element, FD-P38).
- Both named (training and a money result): the money result → **F2.1**, with F1.6 as the secondary code.
- Confidence goes by its object: confidence about money → F2.1; confidence using a skill (technology, English) → F1.6.
- The young person's own money skills stay **Y7.6** (rule 11); a youth's wages stay Y7.5.

**Rationale:** F2.1's anchor, Ascend 2Gen Economic Assets, and the CFPB financial well-being definition (f2-02, "Having a financial 'cushion' against unexpected expenses and emergencies.", CP-12-09) describe a household's financial position. F1.6's sources (Ascend Postsecondary & Employment Pathways; WIOA Title II adult education, f1-06 and f1-07, CP-12-08; the Digital Equity Act) describe adults gaining education and skills; its "financial skills" element is the codebook's own (FD-P38). The line is status against learning, as Severin ruled on H027.

**Gold:** H027, S006, H067 (F2.1); S118, H062, S206 (F1.6).
```

The CF lists only adjudicated design rows on its **Gold:** line. No adjudicated row yet codes a
caregiver's money-skill learning to F1.6 (FD-P38's evidence line says the same); the rule's
second bullet rests on decision F1-1 until Severin rules on the proposed rows below.

## Change: tests (shared with CP-12-15; whichever lands first applies them)

1. `codebook-refinement/sync.test.ts` and `codebook-refinement/registry.test.ts`: read only the
   part of `CONFUSIONS.md` before `## Codebook 3.x tie-breakers`, e.g.
   `const confusions = fs.readFileSync(...).split(/^## Codebook 3\.x tie-breakers$/m)[0];`.
   Without it, `sync.test.ts`'s 2.x `CODE_REF` reads "F2.1" as 2.x "2.1" and "F1.6" as "1.6".
2. `codebooks/youthOutcomesV3.test.ts`, `describe('3.x confusion entries (S3.1)')` as CP-12-15
   specifies: for each `### CF-P\d{2}` block, every code on **Codes:** is a live 3.x code; every ID
   on **Gold:** is in `youth_outcomes_v3.gold.csv` with `status=adjudicated` and a `v3_gold` among
   the entry's codes; each listed code has at least one such row; no ID from the fresh held-out
   file appears (the test reads that file's ID column only to check absence; no agent reads it).

CF-P03 passes: F2.1 has H027, S006, H067; F1.6 has S118, H062, S206; all six are adjudicated with
`v3_gold` F2.1 or F1.6.

## Sources

No new citations.

| Registry ID | Status | Component relied on |
|---|---|---|
| ascend-2gen | verified | Economic Assets (F2.1); Postsecondary & Employment Pathways (F1.6) |
| cfpb-financial-well-being-2015 (new in CP-12-09) | verified | f2-02 SUPPORTED: "Having a financial "cushion" against unexpected expenses and emergencies." |
| wioa-title-ii-aefla (new in CP-12-08, after V10) | verified once added | f1-06 SUPPORTED: "academic instruction and education services below the postsecondary level that increase an individual's ability to" |
| digital-equity-act | verified | 47 U.S.C. 1721(12) |

If CP-12-08's V10 or CP-12-09's rows have not landed, the rationale names only the sources then in
the registry (Ascend and the Digital Equity Act); the rule does not change.

## Verification requests

None.

## Gold impact

- Rows expected to change code: none (no prompt change; the CF restates the existing rulings).
- Rows the CF rests on: H027 (quoted above), S006, H067, S118, H062, S206.
- **New proposed rows**, for the later hint CP (G11). These are candidates for Severin, not gold;
  the orchestrator adds them to `research-review/2026-10-16/full-review/proposed-design-rows.csv`
  with `status=proposed` (this CP does not edit that file or any gold file). All are invented,
  because the drafter searched only the design gold:
  - (F1.6 side) "Parents will learn how to build and stick to a monthly household budget."
  - (F1.6 side) "Caregivers will complete a six-week financial literacy course."
  - (F2.1 side) "Families will build an emergency savings fund of at least $500."
  - (F2.1 side) "Parents will report less stress about paying monthly bills."
  Severin should check each against the fresh held-out set before adding it to gold.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read.

## Judge result

Not run (no prompt change). `npm test` (`sync.test.ts`, `registry.test.ts`,
`youthOutcomesV3.test.ts`) is the check.
