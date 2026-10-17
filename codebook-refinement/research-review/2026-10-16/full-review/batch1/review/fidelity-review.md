# Batch 1 fidelity review (Y2, Y3, Y4), 2026-10-16

Role: fidelity. I checked each proposed change against STANDARDS S1.6 (the four allowed cases and
the not-allowed list) and S4.9 (drift). Only claims the verification table rates SUPPORTED (S) or
PARTIAL (P) count as evidence. Everything else is a lead, including NRC/IOM "physical and
psychological safety", NHES 3.2.2, Kashdan and the CDC 2019 release. R-00's held-out references are
ignored. The H-rows cited below are in the design gold file.

## Headline

1. **Today's drift counts are understated.** With the unlogged departures the researchers found, Y2
   is 4/6 (67%) and Y3 is 3/5 (60%). Both are over the S4.9 line now, before any change. Y4 is 0/12
   once its departures are logged correctly.
2. **Two current breaches of S1.6 or S1.5, separate from drift:**
   - Y2.1 redefines Muhammad's Joy while still citing it.
   - CP-10-02 closed FD-P09 (Y4.12) on NHES wording that is not on the cited 2024 page.
3. **Missed pattern: secondary frameworks.** Most fixes cite a source that is outside the domain's
   `frameworkBasis`: Pekrun, CASEL and SEVT in Y2; NRC/IOM, the Surgeon General, Chafee/NYTD and the
   statutes in Y3; CCSS, LfJ, SHAPE and EASEL in Y4. S1.6 measures fit against the domain's anchor.
   The precedent is mixed: CP-10-02 added CIRCLE and Coffman to the basis lines but left NHES out of
   Y4's. Smallest rule: a CP that grounds an element in a non-anchor source names that source in the
   domain's `frameworkBasis` as a secondary, in the same CP. Otherwise the explorer presents, say,
   public speaking as CASEL. The taxonomy reviewer should say whether "Y4 = CASEL" survives that.

## Drift (S4.9; open entries that are not merged-components)

| Domain | Logged | Honest today | After my verdicts | Worst case |
|---|---|---|---|---|
| Y2 (6) | 0 | 4: Y2.1 misfit, Y2.2 willingness, Y2.4 community, Y2.5 writing | **2**: Y2.1 pride, Y2.2 willingness (33%, at the line, not over) | 3 (50%) if no writing source verifies |
| Y3 (5) | 1 | 3: Y3.1, Y3.2 youth in care, Y3.4 reunification | **1**: Y3.4 (20%), if FD-P01 closes | 2 (40%) if FD-P01 stays open |
| Y4 (12) | 0 | 0 counted (Y4.5 and Y4.6 unlogged; Y4.6 would count) | **0** | 1 if CCSS is not accepted for Y4.6 |

y2's "1 of 6" counts pride *or* willingness. Neither has a verified source, so both count. At 2/6,
any further Y2 departure triggers an anchor re-review. R-08 is right: close FD-P01 before logging any
new Y3 entry.

## Verdicts

### Y2

- **Y2.1 re-anchor on Pekrun (y2-01 S, y2-02 P), with Fredricks (y2-04 S) as a secondary.** ACCEPT
  WITH CHANGES.
  - Why: the Muhammad citation fails S1.6, and Pekrun's activity emotions fit directly.
  - Smallest change: swap Muhammad for Pekrun in the source line and in `frameworkBasis`, and record
    the cross-setting fit as partial.
  - Decision C: the code names no population, so the move to program settings needs no FD.
  - R-17: the Y1 pilot rejected Fredricks only because it saw the abstract. This is a verified full
    text, so cite it by DOI.
- **Y2.1 "pride in being part of it" (S008).** ACCEPT an FD.
  - Why: y2-03 verifies only pride in an achievement, not pride in belonging. Calling it partial
    support would stretch the construct.
  - Smallest change: a counted FD for the codebook-defined element, with the FD-P12 precedent.
    Deleting the phrase puts S008 at risk.
- **Y2.2 CASEL curiosity (y2-05 S) and SSES (y2-06 S).** ACCEPT. This aligns the citation with rule
  14. Add CASEL to Y2's basis.
- **Y2.2 willingness to try (S049, S080).** ACCEPT a counted FD for the element. A verifier may rate
  CASEL "open-mindedness" first, and the FD is dropped if it comes back S.
- **Y2.3 full-text copy (y2-07, y2-08 S).** ACCEPT (citation hygiene).
- **Y2.4 SEVT rename (y2-09, y2-10 S), and narrowing out "or community".** ACCEPT both.
  - Why: "community" is in no cited source, and narrowing is the smallest fix.
  - Change: the definition becomes "goals, future plans or daily life" (MINOR).
  - R-16: carry the wording into CP-11-03.
- **Y2.5 FD-P16 restatement (y2-13, y2-14 S).** ACCEPT WITH CHANGES, after PR #62 merges (R-10).
  - Why: the anchor line omits Responding and Connecting, which the include line uses. Its evidence
    ("never confused") argues against the merged-components case.
  - Smallest change: list all four processes, and restate the evidence as "statements name them
    together" (S077, H008).
  - Do not switch the case to codebook-defined. That would count, and nothing shows coders separate
    the processes inside a statement.
- **Y2.5 writing via PISA (y2-11 P).** DEFER.
  - Why: the only copy is a draft on a blog. That is weak under S1.2 and S1.4.
  - Next step: verify an OECD-hosted copy of the PISA 2022 framework, or the CCSS lead below.
  - Until then, log writing as a counted FD.
- **Y2.5 hint "bare creativity → Y2.5" (y2-12 S).** REJECT.
  - Why: SSES creativity is a skill, but Y2.5 is "an experience rather than a stated skill gain".
    The hint would redefine the code while still citing NCAS.
  - Instead: Y2 domain-only coding.
- **Y2.6 "located" label.** ACCEPT (PATCH).
- **NSCH (y2-17 P).** ACCEPT WITH CHANGES. Credit CAHMI's Data Resource Center, as the verified page
  does (S1.4). Optional.
- **Y2.6 engagement widening.** DEFER to Y1 item 7 (R-12). No source covers engagement quality.
- **NCAS review notes (y2-15, y2-16 P).** ACCEPT as `basis` notes credited to NCAS, not as supports.

### Y3

- **Y3.1 re-anchor (y3-01 P, y3-02 S, y3-03 S, y3-04 S) and closing FD-P01.** ACCEPT WITH CHANGES.
  - Why: NRC/IOM verifies belonging in programs, and the Surgeon General verifies loneliness and
    isolation (H055). That meets FD-P01's revisit condition.
  - Caveat: "feeling safe in the program" still rests on CDC school connectedness only.
  - Smallest change: put both sources in Y3's basis and use the verifier's corrected chapter
    citation.
  - Close FD-P01 only if a verifier confirms a safety clause. Otherwise narrow FD-P01 to "safety
    widened from school" (counted).
  - Not merged-components: these are separate frameworks, not inseparable components.
- **Y3.2 Chafee/NYTD (y3-05, y3-06 S).** ACCEPT.
  - **Decision C matters here.** The include line names "youth in care", a population outside both
    CDC and Developmental Relationships, so this is an unlogged departure today.
  - Chafee covers that population, and S102 and H047 depend on it.
  - Change: add the citation rows and the basis line. No FD.
- **Y3.2 "other adult relationships" (y3-07 S).** ACCEPT, optional.
- **Y3.2 role-model widening (y3-08 P).** REJECT. The verifier says modeling is not a relationship.
- **Y3.4 reunification (y3-09, y3-10 S).** ACCEPT WITH CHANGES.
  - Why: both texts are agency or grantee duties, not youth-outcome components (S1.3). The y3-10
    verifier says so.
  - Smallest change: record both as `fit: partial`, and log a counted FD for the element (S024).
  - Sequence it after FD-P01.
  - If Severin accepts statutory duties (as in the A3.1 precedent), Y3 is 0/5.
- **Y3.4 child-welfare-entry exclude hint (R-26).** ACCEPT. It keeps the code inside its anchor. It
  needs one owner.
- **Y3.5 "Connect" (y3-11 S).** ACCEPT. It fills a registry gap that `basis` already claims.
- **Stale Y3.4 basis and research-basis.md text (R-32).** ACCEPT (PATCH). The docs claim supports
  the registry does not have.

### Y4

- **CASEL URL (y4a-10 S, R-01).** ACCEPT WITH CHANGES.
  - Move the URL to the titled 11.2020 PDF, where most excerpts were fetched.
  - Make the change in `v3/build_registry.py` and the verification script, not the JSON, and re-pull
    an excerpt for every `casel-2020` support.
  - Resolve y2-05's casel.org URL in the same CP.
- **Y4.12 NHES edition (y4b-10 S, R-07).** ACCEPT, top priority.
  - Re-quote 4.5.5, 4.8.5 and 4.12.5.
  - Fill in publisher, year 2024 and tier B, and add `codebook_names`.
  - This repairs the basis on which FD-P09 was closed.
- **Y4.12 avoidance (y4b-09 P, y4b-11 P).** ACCEPT WITH CHANGES. Show `fit: partial`. CASEL "safety
  concerns" sits in category E, so this is not a departure.
- **Y4.12 incidence → Y8 domain-only.** ACCEPT WITH CHANGES. It keeps the code a skill. Agree the
  wording with the Y8 owner (R-27).
- **Y4.6 CCSS SL.4 (y4a-01 S) and CASEL definition (y4a-02 S).** ACCEPT WITH CHANGES.
  - Why: public speaking is not in CASEL, so this is an unlogged departure today.
  - Change: cite CCSS as a Y4 secondary (Headline 3). Fallback: a counted FD with S132.
  - Decision C: no population is named, so no FD on that ground.
  - R-13: align with Y7.2.
- **Y4.5 (y4a-04 P, y4a-03 S).** ACCEPT WITH CHANGES.
  - Why: two competencies are merged, and "inclusive" is in no CASEL bullet.
  - Change: log a merged-components FD (not counted), set the code to adapted, and state the thin
    evidence plainly.
  - LfJ is optional (a secondary); fix its `cite_as` once (R-06).
- **Y4.4 gratitude (y4a-05, y4a-06 S).** ACCEPT.
  - S082 depends on gratitude, which the source line omits.
  - "Situational demands" still needs its own excerpt (S1.5).
- **Y4.2 definition clause (y4a-08 S).** ACCEPT. It covers "impulses".
- **Y4.3 (R-02).** ACCEPT y4a's reword: "persistence" becomes "self-motivation and follow-through",
  which matches a CASEL bullet already verified. Do not cite y4a-09 (P).
  - DEFER y4b's attention widening:
    - y4b-12 and y4b-13 are only partial.
    - EASEL is outside the anchor, so it would be a counted departure.
    - It crosses PR #66 (R-14).
    - The EASEL guide is preschool and elementary. That is allowed, but it is a weaker fit.
  - "Outside schoolwork" is a routing rule, not a departure. Sending self-control to Y4.2 is clean
    (y4a-08).
- **Y4.7 leadership (y4b-01 S, y4b-02 P).** ACCEPT WITH CHANGES.
  - The registry already lists "Showing leadership in groups", but its excerpt covers only teamwork.
  - Fix the data-file source line and the excerpt, and delete "(in flight)".
  - DEFER the leadership hint (R-28).
- **Y4.8 (y4b-03 S).** ACCEPT.
- **Y4.9 (y4b-04 S; y4b-05 and y4b-06 S are optional).** ACCEPT.
  - FD-P06's premise ("no source") is false.
  - Amend it to merged-components across the Relationship Skills bullet and the Social Awareness
    clause (not counted), and note the "willingness" stretch.
  - Drop NHES 3.2.2 (unverified).
- **Y4.11 (y4b-07 S, y4b-08 P).** ACCEPT. Record y4b-08 as partial because of the Y6.3 overlap.
  DEFER the generic-behavior hint.
- **Y4.1 "linking feelings" (y4a-07 P).** REJECT. Y4.1 is already direct, and a partial bullet
  invites widening. Send bare "self-awareness" to Y4 domain-only.
- **Y4.10 chess (R-15).** DEFER. Decide it together with Y1 item 11.
- **CF-016 in 3.x numbers.** ACCEPT WITH CHANGES. A routed CASEL bullet grounds the target code only
  if it has a registry row.

## What the researchers missed

1. The secondary-framework rule (Headline 3).
2. A writing lead for Y2.5: `ccss-writing-anchors` (tier B, already in the registry), CCRA.W.3
   narrative writing. Send it to a verifier.
3. Joined-ellipsis and half-excerpts are not unique to NCAS. The Y4.4 and Y4.7 CASEL excerpts have
   the same problem. Re-pull them all with the URL move.
4. FD-P02 to P08 still give their evidence in 2.x code numbers. Restate it against CASEL bullet names
   (PATCH).
5. Y2 has no single anchor, so S4.9's "anchored domain" test is ambiguous for it. At 2/6, Severin
   should say which anchor a re-review would test.
6. y4b-01 repeats an existing registry support, as y2-13 does (R-10).
