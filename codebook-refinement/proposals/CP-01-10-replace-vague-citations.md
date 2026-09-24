# CP-01-10: Replace the two unverifiable citations (CIRCLE "Framework"; "OTL Standards")

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Domain 6 header (6.1–6.3), Domain 9 header (9.1–9.2) |
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
  what 9.1 and 9.2 are grounded in.

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
3. If nothing verifies for Domain 9, move 9.1 and 9.2 permanently to
   `codebook_extensions`, with a written reason.

## Gold impact

None.
