# CP-01-07: Fix the 6.1 definition so it covers safety

> **Re-based onto codebook 2.1.0 (2026-09-25).** Code numbers were produced by
> `map_cp_codes.py` from the v1.1.1 draft at commit dff8c4b. Translations: 5.1 ->
> 6.1, 5.2 -> 6.2, 5.4 -> 6.4, 2.1 -> 3.1, 2.2 -> 3.2, 3.5.4 -> 4.5.4, 7.7 -> 8.7,
> 7.3 -> 8.3. All are one-to-one.
>
> **S4.1 split.** The draft made three kinds of change: DEFINITION_SCOPE (6.1),
> TIEBREAKER (safety), and CITATION_FIX (3.2). This file is now the 6.1
> DEFINITION_SCOPE only. The other two are carried under "Split out" and each needs
> its own CP ID. The safety tie-breaker depends on this CP. The 3.2 citation is
> independent.
>
> **Version bump corrected.** The draft said PATCH. The 6.1 definition both widens
> (adds safety) and narrows (drops "voice, and control over their own environment").
> Under S4.6 that is **MINOR**.
>
> **Later changes that touch this CP:**
> - CP-07-02 now cites the Developmental Relationships Framework for 3.6 (Expand
>   Possibilities). The split-out 3.2 citation uses a different component of the
>   same verified source, and CF-028 already separates 3.2 from 3.6 on exactly
>   those components, so there is no conflict.
> - CP-06-01 gave 6.1 and Domain 6 hints and a description. They still fit and are
>   unchanged.

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | 6.1 (definition; new Source Framework line) |
| Version bump | MINOR (the draft said PATCH; see note) |
| Requirement served | R1, R3 (CF-017) |
| Status | approved (Severin, 2026-09-26): 6.1 definition + safety tie-breaker (rule 10). Source Framework line held back (verifier PARTIAL) |
| Enum cost | +0 |

## Problem

1. **6.1 contradicts itself.** Its label is "Empowerment & Safety" and its example is
   "Youth will feel safe in their neighborhood". But its definition ("a sense of
   mattering, voice, and control over their own environment") never mentions safety.
   A coder reading only the definition would not choose 6.1 for its own example.
   The cycle-02 coders flagged the same problem on S038: "6.1 label 'Empowerment &
   Safety' but definition is mattering/voice; example is neighborhood safety."
2. **The definition's "control over their own environment" doesn't match its
   source.** The cycle-01b verifier found that phrase matches Search Institute's
   *Personal Power* asset, which sits under Positive Identity, not Empowerment.

## Why this is the smallest fit (STANDARDS S2.2)

- **A hint or example** can't fix a definition that contradicts its own label and
  example. The example already says "feel safe", and that alone didn't stop the
  coders from flagging the mismatch.
- **Rewording the definition** in place, with no new code, costs 0 enum slots.
  - Voice and influence are already routed to 7.3 by 6.1's own note.
  - Personal agency goes to 6.4, per CF-016 and the CP-01-06 rule.
  - Adjudicated 6.1 rows (H042, H051, S038) are all about safety, so no adjudicated
    row depends on the dropped wording.

## Change

**definitionsText, 6.1.**

Before:

```
6.1 Empowerment & Safety
   - Definition: Youth feel a sense of mattering, voice, and control over their own environment (a felt, individual state).
   - Note: For a student's sense of belonging specifically to the school/program, use 3.1 instead. For empowerment expressed through civic voice/influence, use 7.3.
   - Example: "Youth will feel safe in their neighborhood."
```

After (revised after cycle-01b):

```
6.1 Empowerment & Safety
   - Definition: Youth feel safe (at home, at school, in the neighborhood) and feel valued and useful in their community -- a felt, individual state.
   - Source Framework: Search Institute 40 Developmental Assets, Empowerment category (Community values youth; Youth as resources; Service to others; Safety).
   - Note: For a student's sense of belonging specifically to the school/program, use 3.1 instead. For empowerment expressed through civic voice/influence, use 7.3.
   - Example: "Youth will feel safe in their neighborhood."
```

**Re-base formatting change.** The draft put "Source Framework: ..." inside the
Definition sentence. Here it is its own `- Source Framework:` line, with the same
words.

- The explorer parser and `sync.test.ts` only read citations from that field, so an
  inline citation would go unchecked.
- As its own line, it passes the sync test: "40 Developmental Assets" is a
  registered `codebook_name` of `search-40-assets`, which has a 6.1 support entry.

**domains**: no change. The 6.1 hint ("A felt, individual state. For belonging to
school/program specifically, use 3.1. For empowerment via civic voice, use 7.3.")
and the Domain 6 hint and description ("feeling empowered and safe") still fit.

**rulesText**: no change in this CP. See the split-out tie-breaker.

**CONFUSIONS.md**: CF-017's **Note** ("The 6.1 definition today talks about
mattering, voice, and control but not safety ... CP-01-07 fixes the definition.")
should be deleted when this is applied. CF-016's routing of agency to 6.4 is
already in place.

**Registry** (`search-40-assets`, `located`). Update the 6.1 support's `component`
to "Empowerment: Community values youth; Youth as resources; Service to others;
Safety". The excerpt and status are unchanged. Verification is pending (see below).

### Split out A: safety TIEBREAKER (needs its own CP ID; depends on this CP)

- **Rule number.** The draft's tie-breaker 12 is now **13** (rule 8 is CP-07-01's;
  CP-01-05 takes 9 and CP-01-06 takes 10–12). If those are not applied first, use
  the next free number.

  ```
  13. SAFETY: feeling safe in general or in the neighborhood -> 6.1; feeling safe AND accepted in this program/school -> 3.1; making safe choices -> 4.5.4; reduced incidence of fights/bullying/victimization -> 8.7; psychological safety while recovering from trauma -> 8.3.
  ```

- **3.1 hint.** The draft listed "3.1 hint" under Codes touched but gave no text.
  Suggested wording:
  `"Feeling safe AND accepted in this program/school. Feeling safe in general or in the neighborhood -> 6.1."`
  CF-017 covers the 3.1–6.1 pair.
- **CF-017**: `· proposed (CP-01-07)` -> `· active`.
- **Pre-existing conflict, not caused by later changes.** Rule 1 (SKILL vs. STATE)
  gives "Student feels safe" as a Domain 3 example, and the Domain 3 hint says
  "feels safe". Both date from v1.1.1. Rule 13 sends general felt safety to 6.1. The
  tie-breaker CP should change rule 1's example to "Student feels safe at the
  program", or the judge will flag an S3.2 disagreement.

### Split out B: 3.2 CITATION_FIX (needs its own CP ID; independent)

- **3.2**, before:

  ```
  3.2 Adult Support & Care
     - Definition: Outcomes related to forming positive, supportive relationships with teachers, mentors, or staff.
     - Example: "Students will identify at least one adult they trust."
  ```

- **3.2**, after: insert
  `   - Source Framework: Search Institute Developmental Relationships Framework (Express Care; Provide Support).`
  after the Definition line.
- **Registry.** `search-developmental-relationships` is verified, and its
  `codebook_names` include "Developmental Relationships Framework". It already has
  a 3.2 support. Update its `notes`: "The 3.2 citation proposed in CP-01-07 is still
  unapplied" becomes applied, under the new CP ID.
- **Excerpt coverage, flagged.** The recorded excerpt shows "Express Care — Show me
  that I matter to you" but elides "Provide Support" ("..."). The verifier should
  confirm that component before approval.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| search-40-assets | located (PARTIAL for the old 6.1 wording). Verification pending for the new wording | Empowerment assets, including Safety. The excerpt "Safety: Young person feels safe at home, at school, and in the neighborhood." supports the safety half. "Community values youth" and "Youth as resources" have no recorded excerpt yet. |

## Verification requests

- Re-verify `search-40-assets` for 6.1 against the new definition. The claim:
  "Search Institute's Empowerment category comprises Community values youth, Youth
  as resources, Service to others, and Safety." The earlier PARTIAL verdict was
  about the dropped "control over their own environment" wording.
- For split-out B: confirm "Provide Support" in the Developmental Relationships
  Framework.

## Gold impact

- `gold/original.gold.csv` (all `proposed`, CF-017): G-042 (6.1), G-043 (3.1;
  requires the split-out tie-breaker), and G-044 (8.7).
- `gold/gold-cycle02.csv` (adjudicated):
  - This CP should firm up H042, S038 (6.1), and H030 (7.3 alt 6.1) with no flips.
  - The split-out tie-breaker may flip **H051** "sense of safety and trust in
    program staff" from 6.1 to 3.1 (its listed alternate). **NEEDS-HUMAN.**
  - It should keep S131 and S163 (3.1) and S078 and S212 (8.3).

## Test build (2026-09-25)

Applied on codebook 2.4.0 as 2.5.0 for a preview run: only the 6.1 Definition
line changes, and CF-017's Note is removed. The `- Source Framework:` line is not
in the test build. Its "Community values youth / Youth as resources" components
have no verified excerpt yet (CLAUDE.md: a citation needs evidence), and the model
coding does not depend on it. An independent verifier was asked to check the
Empowerment-category claim; the line goes in only if that comes back SUPPORTED.

Verifier result (2026-09-25, blind to this CP): **PARTIAL**. The Search Institute
page has all four asset names, but the fetch could not confirm from the primary
page that they are grouped as Empowerment. The four-asset Empowerment grouping was
confirmed only on a Search Institute-copyrighted reprint (Purdue Extension, 40
Assets list ages 12-18), excerpt: "9. Service to others—Young person serves in the
community one hour or more per week. 10. Safety—Young person feels safe at home,
school, and in the neighborhood." The Source Framework line stays out until a human
or a fetch of Search Institute's own PDF confirms the grouping (S1.5).

## Judge result

**First test (definition only, codebook 2.5.0).** Two preview runs, scored against
the 2.4.0 baseline: 92.5% / 92.9% lenient vs 92.9% / 92.9%. No design row
improved. S212 ("students who experienced trauma will report feeling safe at
school", gold 8.3 alt 3.1) went to 6.1 in both runs, failing S4.4. S017 and S154
changed in one run only (noise).

**Second test (definition + split-out A, still 2.5.0).** Severin chose (2026-09-25)
to add the safety tie-breaker to this test. Applied as rule **10** (rules 10-12 had
been reserved for CP-01-06, which is not applied yet; CP-01-06 now takes the next
free numbers). Also applied: the 3.1 hint, rule 1's example and the Domain 3 hint
changed from "feels safe" to "feels safe at the program", and CF-017 set active.
Result: 92.9% / 92.5% lenient vs 92.9% / 92.9% on 2.4.0. No row regressed in
both runs (passes S4.4). S212 is back to 8.3 in both runs. S017 went from wrong in
both to right in both (a no-good-fit row that shifts with prompt changes). S108,
S110 and S159 changed in one run only (noise). Run-to-run kappa 0.976.
