# CP-12-26: Remove stale "in flight" notes from the coding prompt

**In plain words.** Four "use instead" lines, which the coding model reads for every statement,
end with an old note about the codebook's own history, such as "CP-01-06 (in flight) sets the same
line for 2.4.0" or "being tested in PR #31". Those proposals and that pull request closed long
ago, the notes mean nothing to a coder, and they name the retired 2.x codebook. This change deletes
those trailing notes from Academic Mindsets & Self-Efficacy (Y1.12), Belonging & Mattering (Y3.1),
Teamwork, Collaboration & Group Leadership (Y4.7) and Felt Safety (Y8.10). The routing advice
before each note stays word for word. Because the coding model reads these lines, the change waits
for the shared test run after the two open pull requests.

| Field | Value |
|---|---|
| Type | HINT (text removal only; no routing changes) |
| Codes touched | `useInstead` (and so the generated domain `hint`) of Y1.12, Y3.1, Y4.7, Y8.10. Fallback only: Y8.13 `source` (CP-12-14 item 26, if the coordinator moves it here). No definition, include, exclude, example, `frameworkBasis`, `basis`, registry or rulesText changes. |
| Version bump | PATCH, inside the single Source/`frameworkBasis`/stale-text PATCH after PRs #62 and #66 (G10) |
| Requirement served | R3 tie-breakers (hint text agrees with the live rules) |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. Only process notes are removed; every routing pointer stays.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G10 (prompt-reaching edits in one gate after PRs #62 and #66) | All four lines go in the shared gate; Y1.12 cannot be edited before PR #66 merges, because CP-11-03 (PR #66) edits the same line. |

## What lands now and what waits for the gate

| Change | Reaches the coding prompt? | When |
|---|---|---|
| Y3.1, Y4.7, Y8.10 `useInstead` | yes ("Use instead:" and the review hint) | shared gate after PRs #62 and #66 |
| Y1.12 `useInstead` | yes | same gate; applied to the string as PR #66 leaves it |
| Y8.13 `source` title (fallback) | yes | same gate, only if CP-12-14 item 28 is not ready |

Nothing lands before the gate. Y3.4's stale Chafee/Butts `basis` text (SUMMARY lists it beside
this CP) is not in the prompt and lands now in CP-12-02, which owns it.

**Shared rows (whichever lands first applies them; the other drops the rows).** CP-12-16's draft
removes the same Y4.7 note, and CP-12-14's draft held the Y8.10 note (item 25, now handed here).
CP-11-03 (PR #66) changes Y1.12's first sentence and leaves the stale second sentence to this CP;
whichever of the two lands second applies its edit to the other's result.

## Problem

`youthOutcomesV3.ts` prints `useInstead` as "Use instead:" under every code and as the review UI's
domain hint. These lines carry 2.x process notes (batch 1 R-32, batch 3 R-22, SUMMARY item 8):

| Code | Stale text | Why it is stale |
|---|---|---|
| Y1.12 | "CP-01-06 (in flight) sets the same line for 2.4.0." | CP-01-06 is closed; 2.4.0 is retired. |
| Y3.1 | "Follows the safety tie-breaker being tested in PR #31." | PR #31 is closed. |
| Y4.7 | "Same line as CP-01-06's leadership rule (in flight)." | CP-01-06 is closed; rule 13 is the live 3.x leadership rule. |
| Y8.10 | "Mirrors CP-01-07's tie-breaker (PR #31, in flight)." | PR #31 is closed; rule 12 is the live 3.x safety rule. |

## Change (`codebooks/youthOutcomesV3.data.ts`)

| Code | `useInstead` before | `useInstead` after |
|---|---|---|
| Y1.12 | `Y5.4 general confidence and general growth mindset. CP-01-06 (in flight) sets the same line for 2.4.0.` | `Y5.4 general confidence and general growth mindset.` (if CP-11-03 has landed: `Y5.4 general confidence and general growth mindset; Y2.4 believing schoolwork or a subject is valuable, useful or relevant.`) |
| Y3.1 | `Y8.10 general felt safety; Y8.8 trauma recovery; Y3.2 a trusted adult; Y3.3 friends. Follows the safety tie-breaker being tested in PR #31.` | `Y8.10 general felt safety; Y8.8 trauma recovery; Y3.2 a trusted adult; Y3.3 friends.` |
| Y4.7 | `Y6.4 civic leadership; Y3.3 friendships; Y7.3 workplace. Same line as CP-01-06's leadership rule (in flight).` | `Y6.4 civic leadership; Y3.3 friendships; Y7.3 workplace.` |
| Y8.10 | `Y3.1; Y8.8; Y4.12; Y8.12. Mirrors CP-01-07's tie-breaker (PR #31, in flight).` | `Y3.1; Y8.8; Y4.12; Y8.12.` |

Domain hints: `Use instead: ` + the new line (generated). The remaining pointers agree with rules
12 and 13 of rulesText, so S3.2 still holds.

**Fallback (only if moved here from CP-12-14 item 26).** Y8.13 `source`, before:
`Harris, Lockwood & Mengers (2009), CJCA white paper on juvenile justice performance measures.`
After: `Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism: A CJCA White Paper.`
(y8b-14 PARTIAL confirms the title; CP-12-07 corrects the registry `cite_as`.)

### Consistency test (same branch)

Add to `codebooks/youthOutcomesV3.test.ts`, "codebook 3.x prompt":

```ts
it('carries no proposal, PR or "in flight" notes in prompt text', () => {
  const cb = getCodebook('youth_outcomes_v3');
  expect(cb.definitionsText + cb.rulesText).not.toMatch(/\bCP-\d{2}-\d{2}\b|\bPR #\d+|in flight/);
});
```

(`getCodebook` is already imported by the test file.) The drafter checked every prompt-reaching
field of the 3.1.4 data (definition, include, exclude, useInstead, source, example,
`frameworkBasis`, category description): these four `useInstead` lines are the only CP, PR or
"in flight" mentions. The test must pass on the gate branch, which also carries CP-12-16 and
CP-12-14.

### `basis`, registry, rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged. Y4.4's and Y4.7's `basis` mentions of CP-01-06 are CP-12-03's (not in the prompt).

## Sources

No citations change, except the fallback Y8.13 title (y8b-14 PARTIAL: title, authors, date and
CJCA authorship confirmed on the NCJRS record).

## Verification requests

None.

## Gate

Shared two-run design-set gate after PRs #62 and #66. Rows to watch: Y3.1 S163, S131, H063;
Y4.7 S059 (community leadership stays Y4.7); Y8.10 S038, H042; Y1.12 rows named in CP-11-03.
Expected flips: none (no routing text changes).

## Gold impact

- Rows expected to change code: none.
- New proposed rows: none. Held-out gold was not read.

## Judge result

Judged in the shared gate.
