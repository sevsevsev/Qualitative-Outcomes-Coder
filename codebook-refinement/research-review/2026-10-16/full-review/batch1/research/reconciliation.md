# Batch 1 reconciliation (Y2, Y3, Y4; researchers y2, y3, y4a, y4b), 2026-10-16

This lists conflicts and overlaps. It decides nothing. Item IDs (R-xx) are for reviewers to cite.
Claims: 51 rows in `claims-reconciled.json` (y2 17, y3 11, y4a 10, y4b 13). No two claims were
exact duplicates (same code, source and component), so `merged-ids.json` is `{}`. Edits made
there: (a) every CASEL row now uses the registry `cite_as` and the registry URL (`.../sites/5/CASEL-Framework-and-Skills.pdf`), except y4a-10, which is the URL-change claim itself
(see R-01); y4a-02 and y4a-04..09 originally pointed at `.../CASEL-SEL-Framework-11.2020.pdf`;
(b) reasoning was trimmed from y2-02, y2-09, y2-15 and y4a-04.

## Held-out IDs (drop before review)

- **R-00.** Two findings cite held-out gold IDs, copied from in-flight CP text: y2-findings.md line 217
  (Finding 14, engagement in sessions) and y4a-findings.md line 106 (Y4.3 real use, the CP-09-09
  perseverance drift). Drop both references. No claim row cites one.

## Conflicts

- **R-01. CASEL URL.** y4a (Finding 1.2, y4a-10) proposes moving the `casel-2020` registry URL to
  `CASEL-SEL-Framework-11.2020.pdf` because the current PDF prints no title. y2 (y2-05), y4b
  (y4b-01..12) and batch2 y5 (y5-10, y5-12, three rows) all cite the current `sites/5` URL, and y4b
  extracted the competency definitions from it. The claims now agree on `sites/5`. If y4a-10 is
  accepted, every CASEL support (registry and these claims) moves at once.
- **R-02. Y4.3 scope (y4a vs y4b).** y4a: keep "outside schoolwork" (a routing rule, not a departure)
  and fix "persistence" by citing the Self-Management "motivation & agency" clause (y4a-09) or
  rewording to "self-motivation and follow-through". y4b: drop the setting limit, add focus/attention
  and time management, move "persistence on schoolwork" to the exclude, send self-control to Y4.2,
  cite the Self-Management definition (y4b-12) and EASEL attention control (y4b-13), and amend FD-P03
  (possibly to codebook-defined, counted). The two definitions are incompatible.
- **R-03. One CASEL bullet, two codes.** "Linking feelings, values, and thoughts": y4a-07 for Y4.1,
  batch2 y5-12 for Y5.1 ("articulating one's values").
- **R-04. "Identifying personal, cultural, and linguistic assets".** y4a says Y5.4's `basis` names it
  without a registry row (hand-off to y5); y5 proposes it for Y5.2 (y5-10), not Y5.4.
- **R-05. Resilience counts.** y4a and batch2 y5 agree there is no home rule, and y5 proposes resilience →
  Y4.2 (coping) / Y5.4 (confidence). Their unique-text counts differ: LM Y4.3 5 (y4a) vs 2 (y5); NLM
  Y5.4 12 (y4a) vs 10 (y5); y5 also counts Y4.12 2. The confusion miner should recount.
- **R-06. Learning for Justice `cite_as`.** y4a-03: "Learning for Justice, Southern Poverty Law Center
  (2022). ... Anti-Bias Framework, Second Edition." y5-11: "Learning for Justice (2022). ... Anti-bias
  Framework, Second Edition. Southern Poverty Law Center." y4a quotes the copyright page as "Anti-Bias".
  Both use the learningforjustice.org 2022 PDF, while the registry URL is a splcenter.org page. Both
  want year 2022 and the edition set on `learning-for-justice-sjs`; one registry fix should cover both.
- **R-07. SHAPE NHES `cite_as`.** y4b writes "SHAPE America - Society of Health and Physical Educators
  (2024)"; the registry has "SHAPE America (2024)". y4b and batch3 y8a both report null publisher,
  year and tier on `shape-nhes-2024`. y4b also reports that the quoted Standard 4 wording belongs to the
  2022 NCSHE set, not the 2024 page. One registry fix should serve Y4.9, Y4.12 and Y8.

## Breaking changes and S4.9 drift

| Domain | Codes | Counted today | If every proposed FD is logged | With the proposed citation fixes |
|---|---|---|---|---|
| Y2 | 6 | 0 (0%) | 4: Y2.1 pride, Y2.2 willingness to try, Y2.4 "community", Y2.5 creative writing (or FD-P16 moved to codebook-defined) = 67%, **over** | 1 of 6 (y2's estimate) |
| Y3 | 5 | 1 Y3.1 (20%) | 2: Y3.1 (FD-P01 kept, loneliness added) + Y3.4 reunification = 40%, **over**; 3 (60%) if the Y3.2 youth-in-care citation fails and is logged | 0 if FD-P01 closes and reunification verifies |
| Y4 | 12 | 0 (0%) | 2: Y4.3 attention (y4b, if codebook-defined) + Y4.6 public speaking (y4a fallback) = 17%; 3 (25%) if the Y4.12 widening is logged instead of cited | 0; Y4.5, FD-P03, FD-P06 changes are merged-components (not counted) |

- **R-08. Y3 sequencing.** y3 says to close FD-P01 before logging the Y3.4 reunification FD; in the
  other order Y3 is over the line.
- **R-09. Y2 depends on four fixes landing together.** Y2.1 re-anchor (Pekrun), Y2.2 CASEL curiosity,
  Y2.4 narrowing, Y2.5 PISA writing. Any two failing at verification leaves Y2 at or over a third.

## In-flight CPs and PR boundaries

- **R-10. FD-P16 (Y2.5, PR #62).** CP-09-04 says "FD-P16 unchanged" and that Responding is "already
  cited". The registry does list Responding for Y2.5 (direct), so y2-13 repeats an existing support.
  y2's Finding 8 (FD-P16 anchor line names 2 of 4 processes; its evidence argues against its case) and
  y2-14 (Connecting) would change an FD that CP-09-04 leaves alone. Coordinate with PR #62.
- **R-11. Y2.5 routing (PR #62).** y2 Finding 10 proposes a hint "creativity / creative thinking with
  no product → Y2.5" (y2-12, SSES) and Finding 9 adds PISA creative writing (y2-11). Both touch a PR #62
  code; the hint is a boundary change.
- **R-12. Y2.6 (PR #62).** y2 Finding 14 floats widening Y2.6 to engagement quality; CP-09-01/02
  narrow Y2.6 to a choice to take part. y2 itself defers it to the Y1 pilot's item 7 (Y1.9 vs Y2).
  The "located" label fix and y2-17 (NSCH) are citation-only.
- **R-13. Y7.2 vs Y4.6 (PR #62).** Batch2 y7 adds "interview practice" to Y7.2 (2 LM texts went to
  Y4.6); y4a widens Y4.6's grounding to presentations, including "pitching to a panel". Both should
  agree where interviews and pitches go.
- **R-14. Y4.3 vs Y1.9 (PR #66).** The Y1 pilot deferred item 8 (focus/executive function → Y4.3,
  self-control → Y4.2) to this review; y4b takes it up (R-02). The Y1.9 side of "focus" ("Brain Break"
  classroom focus) stays with PR #66 / CP-11-03 rule 8, which y4b's "any setting" wording would cross.
- **R-15. Y4.10 vs Y1.7 (PR #66).** y4b: chess, puzzles and strategic thinking split Y4.10/Y1.7; the
  pilot's deferred item 11 (Y1.7 exclude for thinking skills with no information object) decides the
  same line. y4a's CF-016 table routes CASEL's critical-thinking bullets to Y1.7. Decide once.
- **R-16. Y2.4 vs CP-11-03 (PR #66).** CP-11-03 rule 8 sends the value of schoolwork to Y2.4. y2's
  narrowing ("goals, future plans or daily life", dropping "community") does not conflict but changes
  the target's wording.
- **R-17. Y2.1 and Fredricks.** The Y1 pilot rejected Fredricks et al. (2004) on an abstract-only
  basis; y2-04 reintroduces it from a full text (ISBE copy) as partial support. Reviewers should know
  of the earlier rejection.
- **R-18. Y3.1 and CP-09-04.** CP-09-04 sends "welcome in arts spaces" to Y3.1; y3's cross-setting
  re-anchor (y3-01..04) supports that routing. No conflict.

## Duplicates and overlaps

- **R-19.** y4a-08 (Y4.2) and y4b-12 (Y4.3) quote the same Self-Management clause ("manage one's
  emotions, thoughts, and behaviors effectively in different situations") for two codes; y4a-09 and
  y4b-12 cite different clauses of the same definition for Y4.3. Kept separate (different codes or
  components).
- **R-20.** y4a-04 (Y4.5) and y4b-04 (Y4.9) cite different clauses of the Social Awareness definition.
- **R-21.** y2-05 (CASEL curiosity → Y2.2) matches y4a's CF-016 table, which routes the same bullet
  to Y2.2. Agreement.
- **R-22.** CASEL "Standing up for the rights of others": y4a routes to "Y4.11 or Y6.3"; y4b claims it
  for Y4.11 (y4b-08). Batch2 y6 does not claim it.
- **R-23.** Pride: y2 (Finding 2) wants an FD or partial Pekrun support for "pride in being part of the
  program" in Y2.1; y3 proposes a one-line example for the same Y2.1/Y3.1 boundary. Compatible.
- **R-24.** y2-06 and y2-12 cite the same OECD SSES report for different codes (Y2.2 curiosity,
  Y2.5 creativity).
- **R-25.** y2-17's component says "sports teams, lessons, clubs or organizations"; y2's fetched excerpt
  shows only "sports teams or lessons". The verifier should check the wider wording.

## Cross-domain hand-offs

- **R-26. Child-welfare entry (Y3.4 misroute).** Three researchers saw "prevention of youth entry
  into the formal child welfare system": y3 (coded Y3.4 in NLM; wants a Y3.4 exclude hint, asks F1/Y8
  to name a target), batch3 f1 (forced into F1.1; backlog lead) and batch3 f2 (coded F2.3; flags A3 or
  F1). Nobody owns it, and no code names it. Needs one owner.
- **R-27. Y4.12 incidence → Y8.** y4b proposes "generic risk-behavior incidence → Y8 domain-only"
  (CP-09-09). Batch3 y8a cites HECAT Safety HBO 4 ("avoid risky behaviors") for Y8.3, which overlaps
  y4b's "avoiding unsafe situations" half of Y4.12 (y4b-09, y4b-11). No y8b findings were in batch3 to
  confirm the Y8 side.
- **R-28. Leadership (Y4.7 vs Y6.4).** y4b proposes a hint "leadership with no civic or workplace
  setting → Y4.7" and citations for the leadership half (y4b-01/02). Batch2 y6 proposes citations for
  Y6.4's leadership and youth-council elements (y6-02/03) and may log an FD for leadership. Both
  defer to CP-09-08 rule 7; the hint wording should be agreed by both.
- **R-29. Y3.2 staff rapport → A1.** y3: "Teachers' increased rapport with students" belongs with an A1
  staff-practice code (example only).
- **R-30. CF-016 renumbering (y4a).** A 3.x CF-016 table touches Y2.2, Y5.4/Y5.5/Y5.6, Y6.1, Y6.3,
  Y1.7. Owners of those domains should review the routings y4a chose.
- **R-31. Bare "life skills" (batch2 y7)** sometimes lands in Y4.7. Y7's proposed hint routes it to
  the named SEL skill; Y4 owners should see it.
- **R-32. Stale text.** Y3.4 `basis` and research-basis.md still name Chafee/Butts (y3); Y4.7
  useInstead still calls CP-01-06 "in flight" (y4b). These are PATCH items with no claim.
