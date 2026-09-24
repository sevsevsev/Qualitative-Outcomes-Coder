# CP-01-05: Add 8.9 Financial Capability

| Field | Value |
|---|---|
| Type | ADD_CODE |
| Codes touched | 8.9 (new); hints on 12.5 and 8.8; rulesText Subject Area line for Mathematics |
| Version bump | MINOR |
| Requirement served | R2 breadth, R3 tie-breakers |
| Status | draft |
| Enum cost | +1 (footprint 142 → 143) |

## Problem

Youth financial literacy is one of the most common stated outcomes in OST, workforce,
college-access, and foster-care/transition programs. Right now it has no home:

- `rulesText` mentions "financial literacy" only as a *Subject Area* example, under
  Mathematics.
- The only money-related code is 12.5, and Domain 12's own scope note restricts it
  to the caregiver ("the CAREGIVER'S OWN knowledge, well-being, and material
  stability").
- The v1.1.0 gap analysis already found this and deferred it ("Financial capability
  & asset building for youth (CFPB Building Blocks) -- likely a Domain 8
  subcategory"). This CP reopens it with new evidence: verified sources (below),
  plus NYTD listing "financial self-sufficiency" as a federally tracked outcome for
  transition-age youth.
- Without a code, these statements get forced into 11.2 (math), 8.5 (employability),
  3.2.x (self-management), or 12.5 (the wrong population).

## Why this is the smallest fit

| Smaller option | Why it doesn't work |
|---|---|
| A hint on 12.5 | Would contradict Domain 12's caregiver scope, and would mix youth and household outcomes. |
| Widen 8.5 Employability | ESF lists "Manages money" under workplace resource management, but most financial-literacy outcomes (saving, credit, banking) are not about the workplace. It would dilute 8.5. |
| Widen 11.2 | Financial capability is habits and decisions, not math proficiency (CFPB separates "financial habits and norms" from knowledge). |

A new subcategory costs 1 enum slot, and there is room (142 of 165).

## Change

**definitionsText**: add after 8.8.

```
8.9 Financial Capability
   - Definition: Youth financial knowledge, habits, and decision-making -- budgeting, saving, banking, understanding pay and taxes, using credit responsibly, and managing financial risk.
   - Source Framework: Consumer Financial Protection Bureau, "Building Blocks to Help Youth Achieve Financial Capability" (2016) -- Financial Habits and Norms; Financial Knowledge and Decision-making Skills. Jump$tart Coalition & Council for Economic Education, National Standards for Personal Financial Education (2021) -- Earning Income, Spending, Saving, Investing, Managing Credit, Managing Risk.
   - Note: This is the YOUTH's own financial capability. For household income/benefits or caregiver financial coaching, use 12.5. For a youth's employment or earnings, use 8.8. For arithmetic proficiency that merely uses money as context, use 11.2.
   - Example: "Youth will create and follow a monthly budget." OR "Participants will open a savings account and make regular deposits."
```

**Domain 8 header**: append to the Framework Basis line.

```
; CFPB Youth Financial Capability Building Blocks & National Standards for Personal Financial Education (8.9)
```

**domains array**: add under Domain 8.

```ts
{
  code: "8.9 Financial Capability",
  hint: "The YOUTH's own money knowledge/habits (budgeting, saving, banking, credit). Household income/benefits -> 12.5. A youth's job/earnings -> 8.8. Math proficiency with money as context -> 11.2.",
},
```

**rulesText**: add tie-breaker 8.

```
8. FINANCIAL CAPABILITY (8.9) vs. HOUSEHOLD ECONOMIC STABILITY (12.5) vs. EMPLOYMENT (8.8):
   - 8.9: the youth's own financial knowledge, habits, or decisions.
   - 12.5: household/caregiver income, benefits, or financial coaching for adults.
   - 8.8: the youth has a job or earns wages.
```

**Subject Area** (needs a decision from Severin; see D2 in the cycle report). The
Mathematics line currently says "financial literacy". Options:

- (a) Leave it. Least change. Personal finance stays tagged as Mathematics.
- (b) Move "financial literacy / personal finance" to **Social Studies, History &
  Civics** (economics). This matches the National Standards being co-published by
  the Council for Economic Education.
- (c) Move it to **Career & Technical Education (CTE) / Workforce**. This matches
  ESF "Manages money".

Recommendation: (b). No enum cost.

**CONFUSIONS.md**: CF-001 is already drafted.

**Registry**: `cfpb-building-blocks-2016`, `jumpstart-cee-2021`, and
`octae-employability-skills-framework` are already `verified`. Remove
`proposed: true` from their 8.9 supports when this is applied.

**Consistency test**: add `8.9 Financial Capability` to the Domain 8 expectations.

**Deferred block**: delete the "Financial capability & asset building for youth"
line.

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| cfpb-building-blocks-2016 | verified | Financial Habits and Norms; Financial Knowledge and Decision-making Skills |
| jumpstart-cee-2021 | verified | Six topic areas |
| octae-employability-skills-framework | verified | Resource Management: "Manages money" (Domain 8 placement) |
| acf-nytd | verified | "financial self-sufficiency" (breadth evidence for transition-age youth) |

## Verification requests

None.

## Gold impact

- New proposed rows: G-001 through G-005 (CF-001).
- Existing rows expected to change: none. No validation row mentions financial
  literacy, which is itself a sign of the coverage gap. The next validation refresh
  should add some.

## Judge result

Pending.
