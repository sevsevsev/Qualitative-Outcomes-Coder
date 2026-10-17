# Batch 2 review (Y5, Y6, Y7): devil's advocate (2026-10-16)

Role: argue for keeping Y5, Y6 and Y7 as they are. I concede only where a cited source is wrong,
superseded or misattributed, or where an adjudicated design-gold row rests on text that no source
covers. No held-out (N) gold was read. Every verdict below costs enum +0.

## What each kind of change costs

- **Prompt.** `youthOutcomesV3.ts` (line 61) writes each code's `source` into the coding prompt,
  along with `include` and `useInstead`. `basis`, `fidelity`, the registry and DEVIATIONS.md do not
  reach the prompt. A registry-only or DEVIATIONS-only fix therefore needs no eval. A change to a
  Source line is a prompt change: it needs the two-run regression and stability gate (S4.4–4.5) and
  Severin's review. The researchers never separate these two kinds of change, and that is the main
  lever for keeping costs down.
- **Comparability.** A widened include is a MINOR change (S4.6). It breaks comparability with the
  3.1.x exports (Y7 alone has about 270 LM and 210 NLM unique texts) unless those rows are re-coded.
- **Explorer.** Every new link is public and can break. Third-party hosts (gdrc.org,
  2014conf.asc.asn.au, maine.gov, portal.ct.gov) are fragile.
- **One adjudicator, and PR #62 is in flight.** It rewrites Y7.1, Y7.2 and Y7.3 (CP-09-03,
  CP-09-06) and touches the Y5.6/Y6.4 voice line (CP-09-08 rule 7). Nothing in Y7 category A or B
  should be stacked on top of it.

## Overreach in the evidence

1. **Some SUPPORTED verdicts do not show the claim.** For y5-09 (NASEM), the recorded excerpt covers
   ethnic-racial identity, which Y5.2 already has from Muhammad. The sexual-identity sentence, the
   reason for the claim, appears only in the verifier's note. For y5-01 (Catalano, spirituality),
   the excerpt stops before "spiritual identity, meaning, or practice", and the verifier says the
   tool only paraphrased that clause.
2. **Program classification is not an outcome.** The Catalano constructs say what *programs foster*.
   The report has no year, and ASPE funded and hosts it. S1.4's own precedent (OJJDP) forbids
   naming the funder. Perkins 2302(7) and the 681.460 elements are services, not outcomes (the
   verifier notes say so).
3. **Wrong URLs.** The CASEL claims (y5-03, y5-10, y5-12) point at a different one-page PDF, and
   the year 2020 comes only from a URL slug. The NRC 2009 text came from a conference site.
4. **"Unlogged departure" is applied to instances of a cited general construct.** LFJ ID.1
   ("positive social identities based on their membership in multiple groups in society") already
   covers sexual orientation as one such group. Sportsmanship is honesty and responsibility in a
   sports setting. S1.6 forbids *redefining* a construct. Listing instances of it is not
   redefining. The "honest count" of 4/6 for Y5 inflates drift and could trigger an S4.9 anchor
   re-review that nobody needs.
5. **The real-use base is thin where the changes are proposed.** Faith texts: 0 in both runs.
   Y5.2: 6/0. Y6.7: 1/4. Entrepreneurship: about 3 genuine texts. Resilience: about 13/22 unique
   texts with no gold row. All of these are model codes, not gold.
6. **"Merged components" is misused for Y5.5.** S1.6 allows it only when "coders can't tell two
   framework components apart in statements". Faith growth ("relationship with God", S016) is
   trivially easy to tell apart from optimism about the future.

## Verdicts

### Y5

| Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|
| Nagaoka publisher as printed (y5-13); fall-2026 update | ACCEPT | S1.4 misattribution, same as the CP-11-01 precedent | Registry `publisher` plus a rename note; a watch item, not a CP |
| Y5.1 CASEL "Linking feelings, values, and thoughts" (y5-12) | REJECT | PARTIAL, and Nagaoka is already direct. It collides with y4a-07 (R-02) | None |
| Y5.2 LFJ 2nd ed. 2022 (y5-11); "racial" rests on Muhammad | ACCEPT | Metadata and attribution only. Muhammad is already on the Source line | Registry year, edition and one cite string (R-05); move the CP-10-04 justification to Muhammad in `basis`. Check Y4.5 in the same edit (R-15) |
| Y5.2 "sexual"/"linguistic" unsourced; add NASEM, CASEL assets | REJECT (DEFER to Severin) | These are instances of LFJ ID.1's "multiple groups". NASEM's recorded excerpt is not about sexual identity, and CASEL assets is PARTIAL | None. If Severin rules that instances need their own source, log a codebook-defined FD (keeps S129) |
| R-04 "linguistic assets" bullet | ACCEPT WITH CHANGES | The registry does not support it for Y5.4 | Drop it from Y5.4 `basis`; do not add it to Y5.2 |
| Y5.3: NRC 2009 Strand 6, Farrington 2019 arts | ACCEPT WITH CHANGES | The only current source is partial, and S036 is adjudicated on STEM identity | Add Farrington 2019 (SUPPORTED) and NRC 2009 **after re-verifying on nap.edu**. Remove Carlone & Johnson from `basis` (unregistered). No FD for athlete/reader/writer unless Severin rejects the instance rule |
| Y5.3 "leadership identity", "college as a place for me" | REJECT | 3 texts, no gold row | None |
| Y5.4 resilience tie-breaker | DEFER | No gold row on either side (S3.1 needs two), the counts conflict (R-07), and Catalano "resilience" was never claimed or verified | Hand to the confusion miner |
| Y5.5 re-anchor the faith element, close FD-P12 | ACCEPT WITH CHANGES | FD-005's revisit trigger is met. Use **y5-14, Search Institute Spiritual Development** (SUPPORTED): its publisher already anchors Y5.5 and sits in Y5's frameworkBasis, so no new framework enters | Add y5-14 to the registry and the Source line. Close FD-P12 with **no** merged-components entry. Note on FD-005 that its trigger is met. Reject adding Catalano to frameworkBasis (R-26). Reject Damon (narrower). CASEL purpose (y5-03) is optional, on the corrected URL |
| Y5.6 self-advocacy | ACCEPT WITH CHANGES | S032 and S236 depend on it. 733(b)(5) is SUPPORTED, tier A | Add 29 U.S.C. 733(b)(5) only, on govinfo. Skip Catalano. Drop Shogren from `basis`. Decision C: the code names IEPs, which is inside the statute's population, so no FD |

### Y6

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Y6.1 stale "located"; Lerner in `basis` with no registry entry | ACCEPT | Violates S1.1/S1.5. Not in the prompt | `basis` and registry text only |
| Y6.1 sportsmanship and faith-grounded values: FD | REJECT | Both are Search Positive Values (honesty, integrity, responsibility) applied in a setting, with the construct unchanged. Search Institute is written for all youth, so this is not sector widening | None |
| Y6.1 forgiveness via VIA (y6-07) | ACCEPT WITH CHANGES | S167 is adjudicated on it, and the claim is SUPPORTED | Cite **only** the Forgiveness component, as supporting, in the registry and Source line. Do not add VIA to frameworkBasis (its other strengths overlap Y4) |
| Y6.2 | ACCEPT keep | Direct | None |
| Y6.3 Watts et al. 2011 (y6-01) | ACCEPT WITH CHANGES | SUPPORTED, and it settles a "[VERIFY]" note. Muhammad is already direct | Registry and `basis` now. The Source line only in the batched PATCH |
| Y6.4 civic efficacy / councils / "leadership" | ACCEPT WITH CHANGES | Real gap for co-design (S039). Less real for civic efficacy: y6 itself quotes **CIRCLE p. 37 "Engaged Worldview"** ("feel they can make a difference in their communities"). That passage is in the existing anchor but unverified. S211 (presenting to a city council) is political voice and already covered | Have a verifier fetch the CIRCLE p. 37 passage. Add Search "Youth as resources" (PARTIAL; Search is already in Y6's frameworkBasis). If co-design stays partial, log one FD for that element only. REJECT Watts for Y6.4 (PARTIAL, broader construct). REJECT any rename (MAJOR). Leadership stays with rule 7 (R-13) |
| Y6.5 Search "Service to others"; fund-raising include | REJECT | CIRCLE is direct, and no gold row needs it | None |
| Adult volunteering (R-21) | ACCEPT (no Y6 change) | Part follows who changes | At most an exclude pointer, after Part F settles it |
| Y6.6 "connection to nature" | ACCEPT WITH CHANGES | S045 is adjudicated on it, and real use is heavy (17/10). Tbilisi is PARTIAL, on a third-party host, and from 1978. The researcher searched only NAAEE's **executive summary** | A verifier fetches the full NAAEE K-12 Guidelines first. If they do not cover it, log a codebook-defined FD. Do not cite Tbilisi |
| Y6.7 ISTE 2024 (y6-06) | ACCEPT WITH CHANGES | The anchor is superseded, and the registry excerpt quotes the withdrawn wording. The content is unchanged | Add a 2024 entry and keep 2016 as historical. Change the Source line to 2024 Std 1.2 in the batched PATCH. No definition change, no 1.2.c |

### Y7

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| WIOA 681.460 as the Y7 "spine" | REJECT as anchor; ACCEPT folded in | It lists service elements, not outcomes, and an eighth framework adds sprawl | Extend the existing "WIOA" frameworkBasis item to "20 CFR 677.155; 681.460". No new item |
| Y7.1, Y7.4 govinfo URLs (y7-01, y7-08) | ACCEPT | Lifts a host-only partial. No change in meaning | Registry URL only |
| Y7.1 (7)(A), 681.460(a)(13); narrow "aspiration" | ACCEPT registry / REJECT narrowing | Narrowing would leave career aspirations with no home (R-09), and PR #62 is editing Y7.1 | Registry entries after #62 merges |
| Y7.2 (7)(B), (a)(14) | DEFER | PARTIAL, and Y7.2 is in PR #62 | Revisit with R-18 (the Conley re-check is still open) |
| Y7.2 add "interview practice" | REJECT | The definition already says "interviews", and S063 (resume and interview skills) is gold Y7.2. Two LM texts in Y4.6 are model noise | None |
| Y7.3 / PR #62 EC-01 | Note to PR #62 only | WIOA 3272(17) (SUPPORTED) fits better than ESF "Technology Use". "or daily life" is unsourced. Casey (PARTIAL) blurs Y6.7 (R-10) | In CP-09-06, change "for work or daily life" to "for work or study", which matches 3272(17). Do not cite Casey |
| Y7.4 681.460(a)(3)-(4) | ACCEPT | SUPPORTED. A youth-specific source for internships | Registry entry |
| Y7.4 entrepreneurship include | DEFER | 681.560 is PARTIAL to Y7.4 as defined. It is a MINOR widening ("industry-specific"). About 3 genuine texts, no gold row | Collect gold rows first |
| Y7.5 "competitive integrated employment" (y7-11) | ACCEPT | A term already in the prompt has no source. SUPPORTED, tier A | Registry entry; Source line in the batched PATCH |
| Y7.6 681.500 | REJECT | Two direct, current sources. Churn | None |
| Y7.7 Casey CLS; close FD-P15 | ACCEPT WITH CHANGES | FD-P15's trigger is literally met: y7-13 says "regardless of whether they are in foster care" | **Keep Chafee first** (tier A) and add Casey Toolkit as cross-sector support. Close FD-P15. Add 42 U.S.C. 675(5)(I) for vital documents. REJECT IDEA, 733(b)(4) and FCS as clutter (FCS 2.1.1 would also pull time management from Y4.3, R-06) |
| Bare "life skills" hint (R-08) | REJECT | It reverses an owner decision. CP-09-09 deliberately took "life skills" out of the broad-label list (variant c3→c4) so that an adjudicated bare "life skills" row stays Y7.7. R-08's summary of that rule is inaccurate | None |

## Decision C (age and population rule): where it matters

- **Y5.6:** 733(b)(5) covers students with disabilities, and the code names IEPs, which is inside
  that population, so no FD.
- **Y7.7:** the code names no population, only "self-care at camp" (a setting). Read literally, C
  would close FD-P15 even without Casey. The Casey closure is cleaner. 675(5)(I)'s population
  matches the example ("exiting care").
- **Y6.2, Y6.4, Y6.6, Y5.3:** the sources are K-12, ages 15 and over, or informal science, and the
  codes name no out-of-scope population, so none needs an FD.

## Drift (S4.9) under these verdicts

| Domain | Today | After |
|---|---|---|
| Y5 (6) | 1/6 (FD-P12) | 0/6 (1/6 if Severin wants a Y5.3 FD or rejects the instance rule) |
| Y6 (7) | 0/7 | 0–2/7, if the CIRCLE and NAAEE fetches fail (Y6.4 co-design, Y6.6); under one third |
| Y7 (7) | 1/7 (FD-P15) | 0/7 |

No domain crosses one third, so no anchor re-review is triggered. The researchers' fallback scenario
(3/7 or 4/6) depends on counting instances as departures and on choosing FD routes where cheaper
verified citations exist.

## What the researchers missed

1. The prompt/non-prompt split (see the costs section). Do every fix in the registry, `basis` and
   DEVIATIONS now. Batch the Source-line edits for Y5–Y7 into **one** citation PATCH per domain
   after PR #62 merges, with one two-run eval, to avoid repeated gates.
2. CIRCLE's own "Engaged Worldview" passage may already cover civic efficacy. It is cheaper than
   any new framework, but it needs a verifier fetch.
3. The Y5.5 fix needs no new framework: Search Institute's spiritual-development page (y5-14)
   comes from the publisher already cited.
4. A decision only Severin can make, parallel to decision C: **is an element that is an instance
   of a cited component's general category (a named social identity, sport as a setting for
   integrity) a departure?** Several "unlogged departures" in this batch turn on that question.
5. The NAAEE full-text search was not done. Only the executive summary was checked.
6. H015 and H030 are old held-out rows, cited only to show which text gold depends on. No accepted
   change moves a boundary, so no gold row should flip.
