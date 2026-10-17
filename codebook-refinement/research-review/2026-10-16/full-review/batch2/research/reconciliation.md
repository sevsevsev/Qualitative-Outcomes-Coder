# Batch 2 reconciliation: Y5, Y6, Y7 (2026-10-16)

Inputs: y5, y6 and y7 findings and claims; batch1 (y2, y3, y4a, y4b), batch3 (f2) and batch4
(a1, a3) findings for cross-domain items; CP-09-01..09 and CP-11-01..03. Nothing is decided here.
`claims-reconciled.json` holds all 40 batch-2 claims (y5 15, y6 7, y7 18). No two claims are
duplicates (same code, component and URL), so `merged-ids.json` is an empty map. Two rows were
cleaned: "(PR #62 candidate wording)" was removed from y7-06 and y7-07, and the descriptive
parenthesis was removed from y5-14's cite_as.

## Held-out gold IDs (drop)

- **R-01.** y7-findings.md (Y7.1 fidelity paragraph) cites held-out **[held-out row]** ("gold such as S152
  and [held-out row] does code it"). Drop [held-out row] from that finding; S152 alone carries it. Elsewhere in the
  full review: y2-findings [held-out row], y4a-findings [held-out row] and a1-findings [held-out row] (all quoted from CP files),
  for their own batch reconcilers. No batch-2 claim row contains an N ID.

## Conflicts

- **R-02. Same CASEL bullet, two codes.** y5-12 cites "Linking feelings, values, and thoughts"
  for Y5.1 (articulating values); y4a-07 cites the same bullet for Y4.1 (emotion awareness).
- **R-03. CASEL citation form.** y5-03, y5-10 and y5-12 use the registry URL
  (`.../sites/5/CASEL-Framework-and-Skills.pdf`) and a cite_as without the publisher; y4a-10
  proposes moving the registry to `.../CASEL-SEL-Framework-11.2020.pdf` with the full publisher
  name. The batch-2 rows need whichever form is adopted.
- **R-04. CASEL "linguistic assets" bullet: Y5.2 or Y5.4.** y5-10 claims "Identifying personal,
  cultural, and linguistic assets" for Y5.2. y4a notes that Y5.4's `basis` already names this
  bullet while the registry does not support it for Y5.4. Either Y5.4's basis drops it or both
  codes cite it.
- **R-05. Learning for Justice cite_as (raised by y5 and y4a).** Both find the same S1.4 gap
  (2nd ed. 2022, SPLC; registry year null). Their strings differ: y5-11 "Learning for Justice
  (2022). Social Justice Standards: The Learning for Justice Anti-bias Framework, Second Edition.
  Southern Poverty Law Center." vs y4a-03 "Learning for Justice, Southern Poverty Law Center
  (2022). ... Anti-Bias Framework, Second Edition." (note also "Anti-bias" vs "Anti-Bias"). One
  registry entry (`learning-for-justice-sjs`) serves Y5.2 and, if y4a-03 is taken, Y4.5. One
  fix, one string.
- **R-06. Time management: Y4.3 or Y7.7.** y4b proposes Y4.3's definition name "time management"
  in any setting. y7-14 (Casey "Work and Study (time management)") and y7-17 (FCS 2.1.1 "time
  management") are claimed for Y7.7 "scheduling".
- **R-07. Resilience counts differ.** Both y5 and y4a report a Y5.4/Y4.2/Y4.3 split with no rule.
  y5: LM Y5.4 5, Y4.2 4, Y4.3 2, other 2; NLM Y5.4 10, Y4.2 5, Y4.12 2, other 5. y4a: LM Y4.3 5,
  Y5.4 5, Y4.2 4; NLM Y5.4 12, Y4.2 5. y5 proposes a tie-breaker (coping → Y4.2, confidence →
  Y5.4) and cites Catalano's resilience construct (not claimed); y4a leaves it to the confusion
  miner with no source. Same direction, different counts and next step.
- **R-08. Bare "life skills".** y7 proposes a hint: bare "life skills" → domain-only Y7 or the
  named SEL skill; Y7.7 only for practical skills. CP-09-09 (approved, applied 3.1.0, superseding
  CP-09-07) already settles whole-named SEL, soft or life skills (uncoded unless daily-living
  content → Y7.7). The y7 "domain-only Y7" route differs from that approved rule.

## Breaking changes

- **R-09. Y7.1 "aspiration" vs Y5.5 exclude.** y7's fallback narrows Y7.1 from "interest in or
  aspiration toward a career field" to "plans toward a career field". Y5.5 excludes career
  aspirations (y5 notes educational aspirations land in Y5.5 because only career ones are
  excluded). Narrowing Y7.1 without changing Y5.5 leaves career aspirations with no home.
- **R-10. Casey "online safety" vs Y6.7.** y7-07 cites Casey's "Computer literacy and online
  safety" for Y7.3 everyday digital skills. Online safety is Y6.7's construct (y6-06, ISTE 2024
  1.2.d). y7's real-use count already shows digital texts in Y6.7 (NLM 2). Citing the full
  component for Y7.3 blurs the Y6.7/Y7.3 line that y6 says CP-09-06 leaves intact.
- **R-11. Drift (S4.9).** Fallback FDs, if all logged, put Y5, Y6 and Y7 over one third (table
  below). y6 and y5 both say the citation fixes decide whether this happens.

## Duplicates and overlaps

- **R-12. Same source, different components (kept as separate rows):** Catalano et al. (y5-01,
  y5-02, y5-04); Watts, Diemer & Voight (y6-01 Y6.3, y6-02 Y6.4); Search Institute assets (y6-03,
  y6-04); 20 CFR 681.460 (y7-03, y7-05, y7-09); Perkins 2302 (y7-01, y7-02, y7-04, y7-08); Casey
  Toolkit (y7-07 Y7.3, y7-13 Y7.7); 29 U.S.C. 733 (y5-05 (b)(5) Y5.6, y7-16 (b)(4) Y7.7); Nagaoka
  2015 (y5-08 component, y5-13 publisher).
- **R-13. Leadership in Y6.4 vs Y4.7.** y6 finds "leadership" in Y6.4's name unsourced (CIRCLE has
  no leadership indicator; fallback codebook-defined FD). y4b adds CASEL "Showing leadership in
  groups" to Y4.7 and proposes a hint: leadership with no civic or workplace setting → Y4.7.
  Both describe the same split; CP-09-08 rule 7 (PR #62) also touches it. y5 adds "I am a Leader"
  / "leadership identity" (3 texts) as a Y5.3 edge case.
- **R-14. Unrouted CASEL skills (y4a) landing in batch-2 codes:** "Demonstrating honesty and
  integrity" → Y6.1 (y6 did not claim it; it would be a CASEL backup for Y6.1); "Developing
  interests and a sense of purpose" → Y2 or Y5.5 (y5-03 claims it for Y5.5; y2 made no claim);
  "Showing the courage to take initiative" and "Demonstrating personal and collective agency" →
  Y5.6 (y5 did not claim them; y5-04 Catalano is its fix); "Understanding the influences of
  organizations and systems on behavior" → Y6.3 (y6 did not claim it).
- **R-15. Racial identity (CP-10-04) spans Y5.2 and Y4.5.** y5 asks that CP-10-04's "racial"
  wording rest on Muhammad (direct), not Nagaoka (partial). CP-10-04 also edited Y4.5's include
  and Y5.1's exclude; y4a proposes an FD (merged-components) and LFJ for Y4.5. Whoever finalizes
  the Y5.2 citation should check Y4.5 at the same time.

## In-flight CPs and PR boundaries

- **R-16. Y7.3 / CP-09-06 (PR #62).** y7 proposes WIOA 29 U.S.C. 3272(17) "digital literacy
  skills" (y7-06) as a better fit than EC-01's OCTAE "Technology Use", and flags "or daily life"
  in the candidate include as unsourced (cite Casey y7-07 or drop the words). CP-09-06 says it is
  withdrawn, not logged, if EC-01 fails. These are notes for PR #62's verifier and judge; no
  change to the boundary is proposed. See R-10.
- **R-17. Y7.1/Y7.2 / CP-09-03 (PR #62).** y7 notes Perkins 2302(7)(B) "postsecondary options"
  (y7-04) as a possible backup for EC-02; not claimed for CP-09-03 itself. y7's "interview
  practice" include for Y7.2 is a further Y7.2 include change that would sit beside CP-09-03's.
  y7-02 (Perkins 2302(7)(A)) supports Y7.1's aspiration text, which CP-09-03 leaves in place.
- **R-18. Conley and Y7.2 (CP-11-01, PR #66).** CP-11-01 fixes Conley's attribution and leaves
  "whether Y7.2 needs a re-check" to the Y7 review. y7 did not re-fetch Conley (direct in the
  registry). The question CP-11-01 handed over is still open.
- **R-19. CP-09-08 rule 7 (PR #62).** y5 (Y5.6 voice) and y6 (Y6.4) both say rule 7 already
  settles the confidence / own choices / group decision line and propose nothing on it.
- **R-20. Y5.5 educational aspirations.** y5 leaves this boundary until PR #62 (Y7.1/Y7.2) merges.
  Ties to R-09.
- No batch-2 finding touches Y1 (PR #66 codes) or A2.4, A2.5, Y2.5, Y2.6, F1.9, Y1.4.

## Cross-domain hand-offs

- **R-21. Adult volunteering.** y6: an adult's own volunteering belongs in Part F or A, not Y6;
  at most add a Y6.5 exclude pointer once Part F has a home. f2 (batch3): caregiver volunteering →
  F1.9 (Epstein Type 3); volunteers as workforce → A1.1/A1.3; non-caregiver adult civic
  volunteering stays domain-only or uncoded; no new code; f2-11 (AmeriCorps CEV) is a lead. a1
  (batch4) proposes an A1.3 volunteer-retention include and calls "Improve quality of life of
  senior volunteers" arguably Part F. The three agree Y6.5 should not take adults. Open between
  f2 and a1: whether senior volunteers' own quality of life is F or A1.3 (it is A1.3 in the real
  run).
- **R-22. Resilience (Y5.4 / Y4.2).** For the Y4 owners (y4a) and the confusion miner; see R-07.
  Two gold rows per side are needed first (y5).
- **R-23. Body image** (2 texts → Y5.4) has no code; y5 notes it only. Possible Y8 owner.
- **R-24. "See college as a place for them"** (y5, Y5.3 edge case) → Y5.5 or Y7; ties to R-09.
- **R-25. Screen time.** y6 leaves ISTE 1.2.c (time online) out of Y6.7 and points screen time to
  its health home (Y8 owner).
- **R-26. Catalano as Y5 supporting framework** (y5) and **WIOA 681.460 as Y7 spine** (y7) are
  frameworkBasis additions, not code changes; Nagaoka's announced fall-2026 update (y5) is a
  watch item for an S4.9 anchor re-review.

## Drift per domain (S4.9: counted entries over codes)

| Domain | Today (DEVIATIONS) | After citation fixes all verify | If every proposed or fallback FD were logged |
|---|---|---|---|
| Y5 (6) | 1 (Y5.5, FD-P12) = 17% | 0/6 (FD-P12 closed, re-logged as merged-components, not counted) | Y5.2, Y5.3, Y5.5 = 3/6 (50%); 4/6 (67%) if Y5.6 is also logged, as in y5's "honest count today" |
| Y6 (7) | 0 = 0% | 1/7 (Y6.1 sportsmanship/faith FD is proposed outright) = 14% | Y6.1, Y6.4, Y6.6 = 3/7 (43%); Y6.6 drops out if logged as merged-components |
| Y7 (7) | 1 (Y7.7, FD-P15) = 14% | 0/7 (FD-P15 closed) | Y7.1, Y7.2, Y7.7 = 3/7 (43%); 4/7 (57%) if a Y7.3 FD were logged for "or daily life", though CP-09-06 says it would be withdrawn instead |

Notes. y5 says DEVIATIONS understates Y5 today (unlogged departures in Y5.2, Y5.3, Y5.6). y6
says FD-P13 was closed as if CIRCLE covered all of Y6.4. y7 rates the Y7.5 and Y7.7
vital-documents items as citation gaps, not departures, so they are not counted. Batch-1 Y4 FDs
(Y4.3, Y4.5) do not change these domains.
