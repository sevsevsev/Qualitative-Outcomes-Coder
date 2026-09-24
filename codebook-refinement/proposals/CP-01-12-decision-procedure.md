# CP-01-12: Add an ordered decision procedure to rulesText

| Field | Value |
|---|---|
| Type | RULES |
| Codes touched | none directly (rulesText only) |
| Version bump | PATCH |
| Requirement served | R3 |
| Status | draft. **Test this one last and alone.** It changes how *every* statement gets reasoned about. |
| Enum cost | +0 |

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

Insert before `SPECIFIC CODING RULES & TIE-BREAKERS:`. The wording is identical to
the "General decision procedure" section at the top of CONFUSIONS.md:

```
GENERAL DECISION PROCEDURE (apply in order; stop at the first step that decides):
1. WHO changes? Caregiver's own outcome -> Domain 12. Adult/staff/organization -> Domain 11. Otherwise continue.
2. OUTPUT or OUTCOME? Program-level counts/dosage/reach -> 11.5.
3. WHAT KIND of result? State/experience -> Domains 2, 3, 6, or 8.2. Skill/competency -> Domains 4, 5, 9.2, 9.5. Knowledge/learning gain -> Domain 1, 9.1, 9.9, 7.1. Change in risk-behavior incidence -> 8.5-8.8. Status/attainment -> 1.5, 1.6, 9.7, 9.8, 12.5-12.7.
4. WHAT CONTEXT? The same skill routes by framing: schoolwork -> Domain 5; work/career -> Domain 9; civic/decision-making -> Domain 7; otherwise Domain 4.
5. MOST SPECIFIC wins: pick the subcategory whose DEFINITION (not just its label) names the construct.
The specific tie-breakers below override this procedure where they apply.
```

**Dependency:** step 3 mentions 9.9, so apply this after CP-01-05. If CP-01-05 is
rejected, remove the 9.9 reference.

## Risk

This is a global prompt change. It is exactly the kind of change that can fix five
rows and quietly break ten. The judge must run it against the full adjudicated gold
set and the 94-row validation set, and compare stability kappa.

## Gold impact

Could affect all rows. Watch the regression list.
