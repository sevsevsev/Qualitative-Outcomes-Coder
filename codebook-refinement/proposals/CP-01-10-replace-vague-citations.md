# CP-01-10: Replace the two unverifiable citations (CIRCLE "Framework"; "OTL Standards")

> Code numbers in this proposal were updated to the v2.0.0 numbering by CP-04-08 (mechanical; see `renumbering/v1.2.0-to-v2.0.0.csv`).

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Domain 7 header (7.1–7.3), Domain 10 header (10.1–10.2) |
| Version bump | PATCH |
| Requirement served | R1 |
| Status | **blocked on verification** |
| Enum cost | +0 |

## Problem

- **"CIRCLE Framework."** CIRCLE (Tufts) is a research center. Its "Understanding
  Youth Civic Engagement" page, checked 2026-09-23, presents no named framework. The
  citation cannot be verified as written.
- **"Opportunity-to-Learn (OTL) Standards."** OTL standards were a 1990s policy
  concept (Goals 2000). They are not a single document, so a reader cannot look up
  what 10.1 and 10.2 are grounded in.

## Proposed process

No replacement text is proposed yet. Under STANDARDS S1.5, no model-recalled
replacement goes in until it is verified.

1. Send the verifier these candidate leads (recalled, not retrieved):
   - **Civics:** Educating for American Democracy, *Roadmap to Educating for
     American Democracy* (2021). A specific CIRCLE working paper on civic outcome
     indicators (ERIC ED494039 turned up in search: "Developing Indicators and
     Measures of Civic Outcomes for Elementary School Students", CIRCLE Working
     Paper 47, 2006).
   - **Access:** the Learning Policy Institute's opportunity-to-learn work; the
     National Academies' *Monitoring Educational Equity* (2019).
2. Whatever comes back `SUPPORTED` becomes the replacement text in a follow-up
   revision of this CP.
3. If nothing verifies for Domain 10, move 10.1 and 10.2 permanently to
   `codebook_extensions`, with a written reason.

## Gold impact

None.
