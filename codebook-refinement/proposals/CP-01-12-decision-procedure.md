# CP-01-12: Add an ordered decision procedure to rulesText

> **Re-based onto codebook 2.1.0 (2026-09-25).** Code numbers were produced by
> `map_cp_codes.py` from the v1.1.1 draft at commit dff8c4b.
>
> - **Code translations:** 7.2 -> 8.2, 10.5 -> 11.5, 3.1.4 -> 4.1.4, 4.4 -> 5.4,
>   8.1 -> 9.1, 8.2 -> 9.2, 8.5 -> 9.5, 6.1 -> 7.1, 7.5-7.8 -> 8.5-8.8, 11.5 -> 1.5,
>   8.7 -> 9.7, 8.8 -> 9.8, proposed 8.9 -> 9.9. 12.2, 12.5, and 12.7 are
>   unchanged.
> - **Domain translations:** "Domain 10" -> "Domain 11", "Domain 11" -> "Domain 1",
>   "Domains 1, 2, 5" -> "Domains 2, 3, 6", "Domains 3, 4" -> "Domains 4, 5",
>   "Domain 4/8/6/3" -> "Domain 5/9/7/4", "Domains 1/2 vs. 3 vs. 11" ->
>   "Domains 2/3 vs. 4 vs. 1".
> - **11.6 -> 1.6 is one-to-one but was relabeled and widened** in v1.2.0
>   (CP-04-02: grades, GPA, and general academic performance). Step 3 lists it as
>   status/attainment, which still fits.
> - **Insertion point.** The anchor line `SPECIFIC CODING RULES & TIE-BREAKERS:` is
>   unchanged in 2.1.0, so the procedure applies cleanly.
> - **Later changes that touch this CP:**
>   - rule 8 (mobility) and 3.6 (social capital), both 2.1.0;
>   - the subject split (rule 5b);
>   - CP-01-11's Domain 12 widening.
>
>   None of them conflicts with the procedure. See "Consistency with later changes".

| Field | Value |
|---|---|
| Type | RULES |
| Codes touched | none directly (rulesText only) |
| Version bump | PATCH |
| Requirement served | R3 |
| Status | testing (codebook 2.5.2, preview runs pending). Tested last and alone: it changes how *every* statement gets reasoned about. |
| Enum cost | +0 |
| Framework deviation | none (rulesText procedure only; no code departs from its domain framework) |

## Problem

The codebook's tie-breakers are pairwise (A vs. B). They already rely on an
unstated common logic:

- *who* changes (8.2 vs. 12.2);
- output vs. outcome (11.5);
- state vs. skill vs. gain (Domains 2/3 vs. 4 vs. 1);
- context (4.1.4 vs. 5.4 vs. 9.5).

Stating that logic once, in order, gives the model and human reviewers a fallback
for pairs that no tie-breaker covers yet. It also makes new tie-breakers easier to
write consistently.

## Change

**rulesText.**

Before (the anchor line, unchanged in 2.1.0; it comes right after rule 5's SEL
DEEP DIVE block):

```
SPECIFIC CODING RULES & TIE-BREAKERS:
```

After:

```
GENERAL DECISION PROCEDURE (apply in order; stop at the first step that decides):
1. WHO changes? Caregiver's own outcome -> Domain 12. Adult/staff/organization -> Domain 11. Otherwise continue.
2. OUTPUT or OUTCOME? Program-level counts/dosage/reach -> 11.5.
3. WHAT KIND of result? State/experience -> Domains 2, 3, 6, or 8.2. Skill/competency -> Domains 4, 5, 9.2, 9.5. Knowledge/learning gain -> Domain 1, 9.1, 9.9, 7.1. Change in risk-behavior incidence -> 8.5-8.8. Status/attainment -> 1.5, 1.6, 9.7, 9.8, 12.5-12.7.
4. WHAT CONTEXT? The same skill routes by framing: schoolwork -> Domain 5; work/career -> Domain 9; civic/decision-making -> Domain 7; otherwise Domain 4.
5. MOST SPECIFIC wins: pick the subcategory whose DEFINITION (not just its label) names the construct.
The specific tie-breakers below override this procedure where they apply.

SPECIFIC CODING RULES & TIE-BREAKERS:
```

The wording matches the "General decision procedure" section at the top of
CONFUSIONS.md, which already uses these v2 numbers.

**Dependency:** step 3 mentions 9.9, so apply this after CP-01-05. If CP-01-05 is
rejected, delete ", 9.9" from step 3 here and from CONFUSIONS.md step 3.

**CONFUSIONS.md**: when this is applied, change the heading
`## General decision procedure (proposed, CP-01-12)` to
`## General decision procedure`. No other change.

**definitionsText, domains, registry**: no change.

## Consistency with later changes (checked in the re-base)

- **Rule 8 (CP-07-01, mobility).** Step 1 sends a family's own outcome to Domain 12,
  and rule 8 sends household economic standing to 12.5. These agree.
- **3.6 Social Capital (CP-07-02).** Step 3's "State/experience -> Domains 2, 3, 6"
  sends Domain 3 codes there. 3.6 is about access to a network, which is closer to a
  resource than a feeling. Step 5 ("most specific definition wins") and CF-028 still
  pick 3.6 for network statements, so no edit is needed. The judge should watch
  S099 ("expand their professional network", adjudicated 9.4 as a forced fit).
- **Rule 5b (subject split).** Step 3 sends learning gains to Domain 1, and 5b then
  picks the subject code. These agree.
- **CP-01-11 (Domain 12 widened to independent youth).** Step 1 diverts only
  *caregivers* to Domain 12. An independent youth's own housing still reaches 12.7
  at step 3 (status/attainment -> 12.5-12.7). These agree.
- **Numbering.** The procedure's steps 1–5 are a separate list from the numbered
  RULES (1–5) and tie-breakers (1–8, plus 9–13 if the other CPs land). The heading
  keeps them apart.

## Risk

This is a global prompt change. It is exactly the kind of change that can fix five
rows and quietly break ten. The judge must:

- run it against the full adjudicated gold set, `gold/gold-cycle02.csv`: 345 rows,
  all adjudicated, and new since the draft;
- run it against the 94-row validation set;
- compare stability kappa.

The v1 columns of `gold-cycle02.csv` use v1.1.1 meanings. Score rows whose v1 code
is 1.3 through the CP-04-01 subject route (1.3/1.8/1.9) before comparing.

## Gold impact

Could affect all rows. Watch the regression list. No new proposed rows.

## Judge result

Not run.
