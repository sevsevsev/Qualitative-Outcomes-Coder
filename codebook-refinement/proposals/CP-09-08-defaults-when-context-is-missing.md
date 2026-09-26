# CP-09-08: Defaults when a short statement gives no context

| Field | Value |
|---|---|
| Type | TIEBREAKER |
| Codes touched | rulesText rules 7, 13 and 16; Y2.4/Y7.2 line in rule 16 or a new line |
| Version bump | PATCH (batched in 3.1.0) |
| Requirement served | R3 tie-breakers |
| Status | draft; take only in the same batch as the other held-out-derived fixes |
| Enum cost | +0 (160) |
| Framework deviation | none (each default stays inside its code's anchor) |

## Problem

Four fresh held-out misses are short statements that don't trigger the existing tie-breakers:

| Row | Statement | Gold | App (both runs) |
|---|---|---|---|
| N099 | Students initiate more leadership action. | Y4.7 | Y6.4 |
| N035 | Student's increased confidence in their voice | Y5.4 | Y5.6 (run 1) |
| N088 | Girls develop healthy relationships. | Y3.3 | Y4.8 |
| N094 | Students/families better understand the employment security of having a college degree | Y2.4 | Y7.2 |

All four are held-out rows: **adopting this CP spends them.**

## Change (rulesText, appended to the named rules)

- Rule 13 (LEADERSHIP): `Leadership with no setting named ("students will show more leadership") -> Y4.7.`
- Rule 7 (CONFIDENCE): `Confidence in one's own voice -> Y5.4; using that voice to make one's own choices -> Y5.6, or to influence a group decision -> Y6.4.`
- Rule 16 (SEL DISAMBIGUATION): `"Healthy relationships" with no skill named -> Y3.3 for peers, Y3.4 for family; in a dating or sexual-health context -> Y8.4.`
- New line after rule 11: `Understanding why education or training pays off (value of a degree) -> Y2.4; knowing the steps to get there (applications, aid) -> Y7.2.`

## Sources

No new claims. Y4.7 (CASEL Relationship Skills), Y3.3 (Search Institute), Y2.4 (Eccles
expectancy-value, utility value) and Y7.2 (Conley) keep their current sources.

## Verification requests

None.

## Gold impact

- Now matches: N099, N035, N088, N094 (held-out).
- Watch: N017 "Participants contribute positively to their communities as future leaders"
  (gold Y6.4) must stay Y6.4 (a community setting is named); H032 (Y4.7) unchanged.

## Judge result

Pending.
