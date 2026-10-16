# Batch 1 review: devil's advocate (Y2, Y3, Y4), 2026-10-16

My role is to argue for keeping 3.1.4 as it is, name what each change costs, and catch over-reach.
Two rules decide most of my verdicts.

- **PARTIAL claims cannot support a recommendation.** Sixteen rows are PARTIAL: y2-02, y2-11, y2-15,
  y2-16, y2-17, y3-01, y3-08, y4a-04, y4a-07, y4a-09, y4b-02, y4b-08, y4b-09, y4b-11, y4b-12 and
  y4b-13.
- **Decision C (age and population rule).** A population mismatch needs an FD only when the code's
  own text names that population.

I used design gold only. R-00's held-out reference is dropped.

**Costs that apply to every item.**

- No finding adds a code, so the enum footprint stays at 160.
- Citation-only fixes (source line, `basis`, registry) leave code boundaries alone and keep past
  codings comparable.
- Changes to a definition, include, exclude, useInstead or hint are prompt text. They can change how
  past statements are coded, so each needs a regression run.
- Y2.5 and Y2.6 are in PR #62, and the Y1.7 and Y1.9 lines are in PR #66. Editing those codes now
  causes merge conflicts.

## Cross-cutting

| Item | Verdict | Reason | Smallest change I'd accept |
|---|---|---|---|
| R-01 CASEL URL (y4a-10) | ACCEPT WITH CHANGES | Supported, but the verifiers disagree on which copy carries the title, and the change touches every CASEL row in all batches | One registry PATCH after all batches: use the 11.2020 PDF and keep sites/5 as an alternate |
| CF-016 renumbering | ACCEPT WITH CHANGES | The renumbering is mechanical. y4a's *new* routings (honesty to Y6.1, agency to Y5.6, interests to Y2/Y5.5) are boundary decisions presented as housekeeping | Renumber by crosswalk script only. Each new routing gets its own CP, signed off by the owning domain |
| R-07 NHES registry fields | ACCEPT | Publisher, year and tier are null | One fix that serves Y4.9, Y4.12 and Y8 |
| R-32 stale text | ACCEPT | Contradicts the registry | PATCH. Y4.7's useInstead is prompt text, so include it in a gold run |

## Y2 Engagement

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Y2.1 re-anchor on Pekrun (y2-01) | ACCEPT WITH CHANGES | The current state breaks S1.6: a `framework` code cites a pedagogy for a learner's feelings. y2-01 is supported. The definition is unchanged, and Muhammad keeps its Y5.2 and Y6.3 supports | Change the source line only. Keep Muhammad as a pointer in `basis`. Do not use y2-02. No FD under C |
| Y2.1 Fredricks (y2-04) | REJECT | A classroom construct. It reopens a rejection from the pilot (R-17) and adds nothing Pekrun lacks | None |
| Y2.1 "pride in being part of it" | ACCEPT WITH CHANGES | Pekrun's pride is pride in an outcome (y2-03). Cutting the phrase would flip S008 (gold Y2.1) | Keep the wording and state the partial fit in `basis`. Severin decides whether it is an FD (Y2 would be 1 of 6) |
| Y2.2 CASEL curiosity (y2-05) | ACCEPT | Supported. Matches rule 14 and costs nothing | As proposed |
| Y2.2 "willingness to try" FD | DEFER | S049 and S080 rest on it. Logging the FD now spends drift budget before the existing sources are rated | Have a verifier rate CASEL "open-mindedness" or phase 1 novelty. Log the FD only if both fail |
| Y2.3 H&R copy (y2-07/08) | ACCEPT WITH CHANGES | The current URL has no full text, and the proposed copy is a course upload | DOI as the URL of record, the copy as the access link. Drop the optional pointer, since no data shows the confusion |
| Y2.4 SEVT rename (y2-09/10) | ACCEPT WITH CHANGES | Supported. A change of name only | Add 2020 by DOI and keep 2000 |
| Y2.4 drop "community" | DEFER | Narrowing is MINOR and changes the prompt. It orphans real texts ("impact STEM has on their community") and changes R-16's target. The problem is a missing citation, not a wrong boundary | Have a verifier rate Hulleman's "relevant to their lives" (already in the registry) for community. S115 flips in neither outcome |
| Y2.5 FD-P16 rewrite | DEFER | PR #62 says "FD-P16 unchanged" (R-10). Changing the case could make Y2.5 counted | After #62 merges: add Connecting (y2-14) to the anchor line. The case is Severin's call |
| Y2.5 PISA writing (y2-11) | REJECT for now | PARTIAL, from a third-party copy | Before any FD, have a verifier rate the verified `ccss-writing-anchors` source (imagined narratives) for creative writing |
| Y2.5 creativity hint (y2-12) | REJECT | A boundary change on a code in PR #62, with no gold row. Domain-only coding (3.1.0) already gives these texts a home | None |
| NCAS review (y2-15/16) | REJECT as cited | Both PARTIAL. The 2014 standards still stand | A registry note once a supported excerpt exists |
| Y2.6 "located" label | ACCEPT WITH CHANGES | A real fix, but the code is in PR #62 | Make it after #62 merges |
| Y2.6 NSCH (y2-17) | REJECT | PARTIAL, and it names the wrong body (CAHMI, not HRSA) | None |
| Y2.6 engagement widening | REJECT | Cuts against CP-09-01/02. It belongs to Y1 pilot item 7 | Keep it in the backlog |

**Y2 drift** is 0 or 1 of 6 under my verdicts. Each deferred item looks cheap on its own. If all four
are logged (pride, willingness to try, community, writing), Y2 reaches 4 of 6. S4.9 would then freeze
every Y2 change until the anchor is re-reviewed, and the freeze would catch PR #62's Y2.5 and Y2.6
CPs. A further problem: S4.9 speaks of "an anchored domain", and Y2 has no single anchor. Severin
should rule on whether the one-third line applies to Y2 before any Y2 FD is logged.

## Y3 Belonging

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Y3.1 close FD-P01 (y3-01..04) | REJECT the closure; ACCEPT the citations | FD-P01 asks for "a verified cross-setting connectedness *framework*". What was offered is a patchwork. y3-01 is PARTIAL. y3-02 is one asset. y3-03 describes a feature of a setting, not a youth outcome. y3-04 is a glossary entry. Converting the FD to merged-components is also the wrong case | Keep FD-P01 open (sector widening). Add y3-02, y3-03 and y3-04. Y3 stays 1 of 5 |
| Y3.1 loneliness (y3-04) | ACCEPT | Supported. Closes an unlogged widening of the construct. H055 depends on it | Cite it, and narrow FD-P01's text to the sector widening |
| Y3.2 Chafee/NYTD (y3-05/06) | ACCEPT | Decision C bites here: "youth in care" is a population outside CDC and DR. Both supported. Protects S102 and H047 | Registry and source line. No FD |
| Y3.2 Assets adult relationships (y3-07) | ACCEPT | Supported. Registry only | Registry row |
| Y3.2 role models (y3-08) | REJECT | PARTIAL, and it would widen the prompt boundary | None |
| Y3.4 reunification (y3-09/10) | ACCEPT WITH CHANGES | Both supported, but they state agency duties, not youth outcomes. S024 depends on the clause. No population named, so no FD under C | Cite both, and mark the fit partial in `basis`. With this, **R-08 is moot**: Y3 stays 1 of 5 whether or not FD-P01 closes |
| Y3.4 child-welfare hint | DEFER | A negative hint with no target moves texts unpredictably. R-26 has no owner | Name an owner first, then write one hint with a target |
| Y3.3 keep; Y3.5 "Connect" (y3-11) | ACCEPT | Y3.5's row is supported and fills a registry gap | Registry row |

## Y4 SEL

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Y4.1 "Linking feelings" (y4a-07) | REJECT | PARTIAL. Y5.1 also claims it (R-03) | None |
| Y4.1 bare "self-awareness" | DEFER | Routing to domain-only lowers the specificity of about 12 unique texts | Confusion miner |
| Y4.2 competency definition (y4a-08) | ACCEPT | Supported. Covers "impulses" | Registry row |
| Y4.3 "persistence" (y4a-09) | ACCEPT WITH CHANGES | y4a-09 is PARTIAL. A rewording would be MINOR, and no gold row (H045, S086, H084) hinges on the word | Add a line in FD-P03 (not counted) reading "persistence" as CASEL's "self-motivation". Leave the definition alone |
| Y4.3 y4b rewrite (R-02, R-14) | REJECT | y4b-12 and y4b-13 are both PARTIAL. It widens the definition, crosses PR #66's Y1.9 focus rule, removes a line that Y1.10 and Y1.11 depend on, and may add a counted FD | None now. Revisit self-control → Y4.2 after #66 (S103 points that way) |
| Y4.4 gratitude etc. (y4a-05/06) | ACCEPT | Supported word for word. S082 and S242 depend on it | Registry and source line |
| Y4.5 FD and relabel | REJECT | y4a-04 is PARTIAL. Y4.12 sets the precedent: it cites a bullet from a different competency and is still `framework`. A relabel shows on the public explorer for no coding gain | Add LfJ standard 6 (y4a-03, supported). Make one `cite_as` fix (R-06) |
| Y4.6 CCSS SL.4 and CASEL (y4a-01/02) | ACCEPT | Both supported. They close a real departure. S132 depends on it, with 43/28 unique real texts. K-12 standard, but no population named | Registry, source line, upgrade the fit. R-13 stays with PR #62 |
| Y4.7 leadership (y4b-01) | ACCEPT | Supported. Covers most real use (61/47 unique texts) | Registry and source line. Drop y4b-02 |
| Y4.7 leadership hint | REJECT | S059 (leading a *community* cleanup) is gold Y4.7 with alt Y6.4. "No civic setting → Y4.7" invites the converse reading and could flip it. CP-09-08 rule 7 owns this line | None |
| Y4.8 (y4b-03); Y4.11 (y4b-07) | ACCEPT | Supported. Registry only | Registry rows. Defer both hints |
| Y4.9 (y4b-04/05/06) | ACCEPT | All supported. FD-P06's "no source" premise is wrong | Registry rows. Amend FD-P06's text (not counted) and note the stretch on "willingness" |
| Y4.10 vs Y1.7 | DEFER | PR #66 item 11 (R-15) | Decide it in one place |
| Y4.11 "rights of others" (y4b-08) | REJECT | PARTIAL. Blurs the Y6.3 line that S223's alternate tests | None |
| Y4.12 NHES re-quote (y4b-10) | ACCEPT | Supported. The registry quotes the wrong edition (S1.5). This is the batch's most serious citation defect | Re-quote 4.5.5, 4.8.5 and 4.12.5. Fill in the registry fields |
| Y4.12 "avoid unsafe situations" (y4b-09/11) | ACCEPT WITH CHANGES | Both PARTIAL, so this half has no citation. Narrowing would flip S172 | Log a small codebook-defined FD (Y4 1 of 12, 8%). It changes no prompt text |
| Y4.12 incidence → Y8 domain-only | DEFER | Moves about 6 texts to a less specific bucket. Y8 is unconfirmed (R-27) | Decide with Y8 |

**Y4 drift** is 0 or 1 of 12.

## What the researchers missed

1. **The PARTIAL rule removes the core of four proposals:** Y4.3 (R-02), the Y4.5 relabel, the
   Y3.1 closure and the Y2.5 writing fix. The reconciliation's drift column assumes they all verify.
   Recounted, Y2 is 0-1 of 6, Y3 is 1 of 5 and Y4 is 0-1 of 12.
2. **A Y2 freeze would spread to PR #62.** Nobody sequenced this, and it is unclear whether S4.9
   applies to Y2 at all, since Y2 has no single anchor.
3. **Verified sources already in the registry were not tried first.** Hulleman ("relevant to their
   lives") might cover "community", and the CCSS writing anchors might cover creative writing. Either
   could make an FD unnecessary. Both need a verifier pass, not a new search.
4. **Y4 fidelity labels are inconsistent.** Y4.5 and Y4.12 merge components across CASEL competencies
   and are marked `framework`. Y4.2 and Y4.3 are marked `adapted` only because they merge 2.x codes.
   That is for the taxonomy reviewer, not grounds to relabel a single code.
5. **Gold rows that block cuts:** S008, S049, S080, S172, S024, S102, H047, H055, S132 and S059. None
   of my accepted changes flips any of them.
6. **Decision C matters only once in this batch:** Y3.2 ("youth in care"), and the Chafee/NYTD
   citation fixes it. Y2.1 (Pekrun), Y3.4 (statutes) and Y4.6 (CCSS) need no FD under it.
