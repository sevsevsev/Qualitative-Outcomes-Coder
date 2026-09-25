# CP-01-05: Add 9.9 Financial Capability

> **Re-based onto codebook 2.1.0 (2026-09-25).** Code numbers were produced by
> `map_cp_codes.py` from the v1.1.1 draft at commit dff8c4b. Translations: proposed
> 8.9 -> **9.9**, 8.8 -> 9.8, 8.5 -> 9.5, 11.2 -> 1.2, 3.2.x -> 4.2.x, 12.5 -> 12.5,
> Domain 8 -> Domain 9. All are one-to-one. 9.9 is still free in 2.1.0.
>
> **Conflicts found in the re-base:**
> - **Tie-breaker number.** Rule 8 is now CP-07-01's SOCIAL / ECONOMIC MOBILITY rule,
>   so this CP's tie-breaker is renumbered **8 -> 9**.
> - **Overlap with rule 8.** Rule 8 already sends "job or earnings" to 9.8 and
>   household income to 12.5. It agrees with this rule and needs no change.
> - **Domain 9 hint.** CP-06-01 added a Domain 9 hint and description saying the
>   domain is "EXPLICITLY framed around college or career". Most 9.9 outcomes aren't,
>   so both are updated below.
> - **1.3 now includes economics.** Since v1.2.0, 1.3 is re-anchored on ESSA's
>   "well-rounded" subjects, which include economics. CF-001 doesn't cover 9.9 vs.
>   1.3 yet. See Open issues.
>
> **S4.1 split.** The draft's Subject Area change to the Mathematics line is a RULES
> change that waits on decision D2. It is carried under "Split out" and is not part
> of this CP.

| Field | Value |
|---|---|
| Type | ADD_CODE |
| Codes touched | 9.9 (new); rulesText tie-breaker 9; Domain 9 Framework Basis, hint, and description; Deferred block |
| Version bump | MINOR |
| Requirement served | R2 breadth, R3 tie-breakers |
| Status | ready-to-test: applied on a draft PR for a preview run (not approved) |
| Enum cost | +1 (primary_subcategory). Footprint 145 -> 146 alone, or 146 -> 147 if CP-01-04 lands first. Test ceiling < 180; S2.3 stop line 165 |

## Problem

Youth financial literacy is one of the most common stated outcomes in OST, workforce,
college-access, and foster-care/transition programs. Right now it has no home:

- `rulesText` mentions "financial literacy" only as a *Subject Area* example, under
  Mathematics.
- The only money-related code is 12.5, and Domain 12's scope note restricts it to
  the caregiver ("the CAREGIVER'S OWN knowledge, well-being, and material
  stability").
- The v1.1.0 gap analysis already found this and deferred it. The Deferred block
  still says: "Financial capability & asset building for youth (CFPB Building
  Blocks) -- likely a Domain 9 subcategory". This CP reopens it with new evidence
  (S4.7):
  - verified sources (below);
  - NYTD lists "financial self-sufficiency" as a federally tracked outcome for
    transition-age youth;
  - **adjudicated gold (new since the draft).** Severin marked H025, S092, and S095
    (youth savings) "no good fit in the live codebook (codebook gap)". S089's
    adjudication note reads "Youth financial capability has no home (proposed
    9.9)".
- Without a code, these statements get forced into 1.2 (math), 1.3 (other
  subjects), 9.5 (employability), 4.2.x (self-management), or 12.5 (the wrong
  population).

## Why this is the smallest fit (STANDARDS S2.2)

| Smaller option | Why it doesn't work |
|---|---|
| An example on an existing code | No existing definition covers a youth's own financial habits, so an example alone would contradict whichever definition it sat under. |
| A hint on 12.5 | Would contradict Domain 12's caregiver scope, and would mix youth and household outcomes. (CP-01-11 widens Domain 12 only to a young person's *material stability* when living independently, not to financial knowledge or habits.) |
| Widen 9.5 Employability | ESF lists "Manages money" under workplace resource management, but most financial-literacy outcomes (saving, credit, banking) are not about the workplace. It would dilute 9.5. |
| Widen 1.2 or 1.3 | Financial capability is habits and decisions, not subject proficiency (CFPB separates "financial habits and norms" from knowledge). |

**Enum budget:** a new subcategory costs 1 slot. The footprint goes 145 -> 146
(or 147 with CP-01-04), well under the S2.3 stop line of 165. This cycle would add
at most 2 subcategories.

## Change

**definitionsText**: add after 9.8, before the blank line that precedes
`Domain 10.`.

Before (end of 9.8, unchanged):

```
9.8 Employment Placement, Retention & Earnings
   - Definition: Outcomes related to obtaining employment, retaining a job, or wage/earnings gains.
   - Source Framework: WIOA Title I Youth Primary Indicators of Performance (34 CFR 463.155).
   - Example: "Youth will obtain and retain employment for at least 6 months after program completion."
```

After (the 9.8 block above, then):

```
9.9 Financial Capability
   - Definition: Youth financial knowledge, habits, and decision-making -- budgeting, saving, banking, understanding pay and taxes, using credit responsibly, and managing financial risk.
   - Source Framework: Consumer Financial Protection Bureau, "Building Blocks to Help Youth Achieve Financial Capability" (2016) -- Financial Habits and Norms; Financial Knowledge and Decision-making Skills. Jump$tart Coalition & Council for Economic Education, National Standards for Personal Financial Education (2021) -- Earning Income, Spending, Saving, Investing, Managing Credit, Managing Risk.
   - Note: This is the YOUTH's own financial capability. For household income/benefits or caregiver financial coaching, use 12.5. For a youth's employment or earnings, use 9.8. For arithmetic proficiency that merely uses money as context, use 1.2.
   - Example: "Youth will create and follow a monthly budget." OR "Participants will open a savings account and make regular deposits."
```

**Domain 9 Framework Basis.**

Before:

```
Framework Basis: David Conley’s "Four Keys" & Perkins V (CTE Framework); National Student Clearinghouse Research Center & WIOA (9.7-9.8)
```

After:

```
Framework Basis: David Conley’s "Four Keys" & Perkins V (CTE Framework); National Student Clearinghouse Research Center & WIOA (9.7-9.8); CFPB Youth Financial Capability Building Blocks & National Standards for Personal Financial Education (9.9)
```

**domains array, Domain 9**: append after the 9.8 entry.

```ts
        {
          code: "9.9 Financial Capability",
          hint: "The YOUTH's own money knowledge/habits (budgeting, saving, banking, credit). Household income/benefits -> 12.5. A youth's job/earnings -> 9.8. Math proficiency with money as context -> 1.2.",
        },
```

**Domain 9 `hint` and `description`.** Both were added by CP-06-01 after the draft
was written, and both would be wrong once 9.9 exists.

Hint before:

```
Readiness for and results after high school, EXPLICITLY framed around college or career. General learning gains not framed that way -> Domain 1; general SEL skills outside a work context -> Domain 4.
```

Hint after:

```
Readiness for and results after high school, EXPLICITLY framed around college or career, plus the youth's own financial capability (9.9). General learning gains not framed that way -> Domain 1; general SEL skills outside a work context -> Domain 4.
```

Description before:

```
Outcomes about readiness for life after high school and what follows: college- and career-framed knowledge and thinking skills, navigating applications and financial aid, career exploration, employability and technical skills, and postsecondary enrollment, completion and employment.
```

Description after:

```
Outcomes about readiness for life after high school and what follows: college- and career-framed knowledge and thinking skills, navigating applications and financial aid, career exploration, employability and technical skills, managing their own money, and postsecondary enrollment, completion and employment.
```

**rulesText**: add tie-breaker **9** after rule 8 (SOCIAL / ECONOMIC MOBILITY),
before `CRITICAL for Formatting:`. The draft numbered it 8; 8 is now taken.

```
9. FINANCIAL CAPABILITY (9.9) vs. HOUSEHOLD ECONOMIC STABILITY (12.5) vs. EMPLOYMENT (9.8):
   - 9.9: the youth's own financial knowledge, habits, or decisions.
   - 12.5: household/caregiver income, benefits, or financial coaching for adults.
   - 9.8: the youth has a job or earns wages.
```

If CP-01-06 or CP-01-07 is applied first, use the next free rule number instead.
Rule numbers are not identifiers.

**Deferred block** (`original.ts`, bottom).

Before:

```
//   - Financial capability & asset building for youth (CFPB Building
//     Blocks) -- likely a Domain 9 subcategory.
```

After: delete both lines.

**CONFUSIONS.md**: CF-001 already exists with v2 numbers. When this is applied:

- change the heading `· proposed (CP-01-05)` to `· active`;
- change `proposed **9.9 Financial Capability**` on the Codes line to
  `**9.9 Financial Capability**`.

The rule text is unchanged, apart from Open issue 1 if Severin takes it. The
sync test needs a CF entry naming 9.9 with each of 12.5, 9.8, and 1.2, because the
9.9 hint names them. CF-001 names all three.

**Registry.** The sources are already `verified`.

- Remove `"proposed": true` from the 9.9 supports of `cfpb-building-blocks-2016`,
  `jumpstart-cee-2021`, and `octae-employability-skills-framework`.
- **Added in the re-base:** set `codebook_names`, which are currently absent for
  all three, so `sync.test.ts` can match the new citation lines. Per CLAUDE.md, a
  framework named in a citation line needs its name in the registry. The strings
  are copied from the draft's own lines:
  - `cfpb-building-blocks-2016`:
    `["Building Blocks to Help Youth Achieve Financial Capability", "CFPB Youth Financial Capability Building Blocks"]`
  - `jumpstart-cee-2021`: `["National Standards for Personal Financial Education"]`
  - `octae-employability-skills-framework`: none. It is placement evidence only and
    is not named in the codebook.

**Consistency test**: in `codebooks/consistency.test.ts`, "includes the new
postsecondary/employment subcategories under Domain 9", add
`expect(codes).toContain('9.9 Financial Capability')`. The version-pin test changes
at merge.

**Renumbering test.** This was found in the re-base by applying the CP to a scratch
copy. In `codebooks/renumbering.test.ts`, add `'9.9 Financial Capability'` to
`ADDED_SINCE_2_0_0`. Without it, "lands on every current domain and subcategory
exactly once" fails. With this change, the full `npm test` (154 tests) and both
typechecks passed on the scratch copy, together with CP-01-04. The footprint
measured there was 147 with both CPs applied.

### Split out: Subject Area line (RULES; needs its own CP ID and decision D2)

The Mathematics line still reads
`     - "Mathematics": Numeracy, algebra, geometry, statistics, calculus, financial literacy.`
The draft's options were:

- (a) leave it;
- (b) move personal finance to Social Studies, History & Civics (economics);
- (c) move it to CTE / Workforce.

**New interaction since v1.2.0.** The "Subject Area must agree with a Domain 1
learning code" line (CP-04-06) pins "Social Studies, History & Civics" to 1.3.
Option (b) would therefore make personal-finance rows tagged Social Studies look
like 1.3 rows, which strengthens the 9.9-vs-1.3 confusion in Open issue 1. The
agreement rule only covers Domain 1 codes, so a 9.9 row with any Subject Area is
not flagged. The recommendation is still (b), but only together with Open issue 1.

## Open issues (flagged, not in the Change above)

1. **9.9 vs. 1.3 (economics).** v1.2.0 re-anchored 1.3 on ESSA "well-rounded
   education", which names economics. CF-001 and the 9.9 note mention 1.2 but not
   1.3. Adjudicated H026, S044, and S089 are 1.3 today.
   - Suggested for Severin, not applied: add to the 9.9 note and to CF-001
     "Economics as an academic subject (markets, supply and demand, national
     economy) -> 1.3; the youth's own money knowledge or habits -> 9.9."
   - That would also need a 9.9–1.3 pair in CF-001 if it went into the hint.
2. **Domain placement.** Domain 9 is "College & Career Readiness". The hint change
   above documents the exception. v2's crosswalk places financial capability
   separately (v2_gold Y9.6 on these rows); no change is proposed here.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| cfpb-building-blocks-2016 | verified | Financial Habits and Norms; Financial Knowledge and Decision-making Skills |
| jumpstart-cee-2021 | verified | Six topic areas |
| octae-employability-skills-framework | verified | Resource Management: "Manages money" (Domain 9 placement) |
| acf-nytd | verified | "financial self-sufficiency" (breadth evidence for transition-age youth; not cited in codebook text) |

## Verification requests

None.

## Gold impact

- `gold/original.gold.csv` (all `proposed`, CF-001): G-001 (9.9), G-002 (9.9),
  G-003 (12.5), G-004 (9.8), and G-005 (1.2).
- `gold/gold-cycle02.csv` (adjudicated; v1 columns use v1.1.1 meanings). Expected
  flips, named per S4.4:
  - **H025** 12.5 -> 9.9 (Severin: codebook gap).
  - **S092** 12.5 -> 9.9 (Severin: codebook gap).
  - **S095** 12.5 -> 9.9 (Severin: codebook gap).
  - **S089** 1.3 -> 9.9 (adjudication note names proposed 9.9).
  - **H026** 1.3 -> 9.9 ("knowledge of budgeting, credit, and saving").
  - **S044** 1.3 -> 9.9 (debit vs. credit, cost of interest).
  - The first four are corrections by Severin's own notes. H026 and S044 are
    **NEEDS-HUMAN**: they were adjudicated under the old broad 11.3, and the live
    1.3 now includes economics (Open issue 1).
- Possible partial moves or splits: H048 and S224 (independent-living skills
  including budgeting; 4.2.4, Severin: codebook gap).
- Should not change: S006 and H027 (caregiver, 12.5), S050 (1.2), H021 and S081
  (9.3 financial aid), H067 (12.5).

## Judge result

Not run.
