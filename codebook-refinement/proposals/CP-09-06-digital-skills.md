# CP-09-06: Everyday digital skills are work skills for young people

| Field | Value |
|---|---|
| Type | DEFINITION_SCOPE |
| Codes touched | Y1.4 (narrowed), Y7.3 (widened), rulesText rule 15; F1.6 unchanged |
| Version bump | MINOR (batched in 3.1.0) |
| Requirement served | R1 frameworks, R3 tie-breakers |
| Status | draft; blocked on verification EC-01 |
| Enum cost | +0 (160) |
| Framework deviation | none if EC-01 is verified: Y7.3 already cites the OCTAE Employability Skills Framework, and Technology Use would be one of its components. Y1.4 moves closer to NGSS/CSTA by dropping everyday digital literacy. If EC-01 fails, do not adopt this CP as written (it would be a new FD for Y7.3). |

## Problem

H077 "Participants improved their digital literacy skills, including email and video
conferencing." Gold Y1.4 with a codebook-gap tag; Severin's note: "skills that are not purely
academic. Perhaps they could be coded as being digital skills related to career readiness or
workforce skills?" Y1.4's definition includes "digital-literacy skills", which its anchors (NGSS,
CSTA computer science standards) do not describe. Adults already have F1.6 (Digital Equity Act,
verified). Only two such texts appear in the 2026-09-23 export, so this is about getting the
definition right.

## Change

**Y1.4** definition, before: `A demonstrated gain in science (life, physical, earth, environmental), engineering design, or computing and coding, including digital-literacy skills.`
after: `A demonstrated gain in science (life, physical, earth, environmental), engineering design, or computer science (coding, computational thinking, computing systems).`
Include, before: `...; coding, computational thinking, digital skills.` after: `...; coding, computational thinking.`
Exclude, add: `everyday digital skills (email, video calls, online forms, office software) (Y7.3; F1.6 for adults).`

**Y7.3** include, before: `Professional conduct; supervisor evaluations; workplace communication.`
after: `Professional conduct; supervisor evaluations; workplace communication; everyday digital skills for work or daily life (email, video calls, online forms, office software).`

**rulesText rule 15**, before: `... coding or digital skills learned -> Y1.4; ...`
after: `... coding or computer science learned -> Y1.4; everyday digital skills (email, video calls, online forms, office software) -> Y7.3 for young people, F1.6 for adults; ...`

## Sources

| Registry ID | Status | Component relied on |
|---|---|---|
| octae-employability-skills-framework | verified (excerpt covers Applied Knowledge, Effective Relationships, Workplace Skills, resource management only) | Workplace Skills: Technology Use [VERIFY] |

## Verification requests

- EC-01: OCTAE Employability Skills Framework, Workplace Skills, Technology Use ("understands and
  uses technology"). The registry's existing excerpt does not include this component, so it
  needs a fresh fetch. The first attempt stalled on permission prompts; URL list is in the
  thread reply.

## Gold impact

- H077 matches only if Severin moves its gold from Y1.4 to Y7.3 (his call). H077 is design data
  for 3.0, so this spends nothing.
- Must not flip: S232 (coding, Y1.4), N098 ("Skills in Engineering & Data", Y1.4), S206 and H076
  (adults / households: F1.6, A2.3).

## Judge result

Pending.
