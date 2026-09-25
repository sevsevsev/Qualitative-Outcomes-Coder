# CP-07-01: Route social and economic mobility statements

| Field | Value |
|---|---|
| Type | TIEBREAKER |
| Codes touched | 9.8, 12.5, 3.6 (rulesText rule 8; CONFUSIONS CF-027) |
| Version bump | PATCH (applied together with CP-07-02's MINOR: 2.0.1 -> 2.1.0) |
| Requirement served | R3 tie-breakers |
| Status | applied on the PR; Severin approves by merging |
| Enum cost | +0 |

## Problem

Severin, 2026-09-25, asked whether social/economic mobility should be its own
domain or a code under an existing one. He chose "rule + social capital": a
tie-breaker for mobility statements, plus a Social Capital & Networks code
(CP-07-02).

Mobility is usually the long-term "leading to…" tail of a statement whose
measurable part already has a code. The only real example in our data, project-files
gold G064, reads: "More students have access to critical skills for success in the
global workforce, leading to increased economic mobility." Nothing tells the coder
what to do with the mobility phrase, so it can pull the statement away from the
skill code, or land in different codes from run to run.

## Change

**rulesText**, new rule 8 after rule 7 (OUTPUT vs. OUTCOME):

```
8. SOCIAL / ECONOMIC MOBILITY:
   - "Economic mobility", "upward mobility", "breaking the cycle of poverty" and similar phrases are a long-term aim, not a code of their own. Code the concrete change the statement names (e.g. skills -> the skill's code; credential or college completion -> 9.6/9.7; job or earnings -> 9.8; household income or benefits -> 12.5).
   - If the statement names ONLY economic mobility for the young person, with no concrete lever, use 9.8. If it is about the family's or household's economic standing, use 12.5.
   - "Social mobility" framed as wider connections, networks or access to people who open doors -> 3.6.
```

**CONFUSIONS.md**: new CF-027 (same rule, with rationale).

No definitions, hints, or registry entries change in this CP. It adds no citation.

## Sources

None. The rule routes to existing codes and their existing sources.

## Verification requests

None.

## Gold impact

- New proposed rows: G-072, G-073, G-074 (adapted from project-files G064), G-075.
- No adjudicated row changes code; the rule applies only to statements that mention
  mobility.

## Judge result

Not run. A live gold run needs a preview upload (sessions can't reach Gemini).
