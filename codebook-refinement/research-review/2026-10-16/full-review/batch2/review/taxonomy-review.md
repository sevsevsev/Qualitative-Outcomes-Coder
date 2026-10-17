# Batch 2 (Y5, Y6, Y7): taxonomy and methods review (2026-10-16)

Reviewer: taxonomy/methods (independent). Inputs: findings, reconciliation, verification table
(26 SUPPORTED, 14 PARTIAL), STANDARDS, Y5-Y7 data, research-basis.md, DEVIATIONS, design gold,
real-run unique-text counts. Held-out gold not opened. A PARTIAL source can be cited with
`fit: partial` but does not close a gap where the code's text goes past it.

## 1. Overall judgement

The hierarchy holds for all three domains, and Part (who changes) is applied correctly. The weak
level is the **category**. research-basis.md says a category is "a dimension of that
construct, taken from the domain's anchor framework where it has one". None of the three domains
has one anchor that produces its categories:

- **Y5**: Nagaoka yields identity (A) and agency (half of C); B is Nagaoka "mindsets" only
  loosely; purpose (half of C) is not in Nagaoka.
- **Y6**: six frameworks, one per category or code. The only stated reason for putting values
  and civic life in one domain is "Lerner's Character and Contribution", and y6 shows Lerner has no
  registry entry.
- **Y7**: seven frameworks and no anchor. y7 offers WIOA 681.460(a) as a "spine".

As in the Y1 pilot, research-basis.md should say these categories are **codebook-defined
groupings**, each code anchored at the component level. Two findings repeat the pilot's
confirmation-bias pattern: y5's Catalano "almost one to one" and y7's 681.460 "spine". The
verifiers checked one component per claim, never the mapping.

## 2. Verdicts

### Y5 Identity, Confidence & Agency

| Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|
| Keep Nagaoka; watch the fall-2026 update; fix the publisher to the printed name (y5-13) | ACCEPT | SUPPORTED. Re-anchoring now and again after the release would be churn. | Publisher "University of Chicago Consortium on Chicago School Research" plus a rename note; add the full-report URL; record the S4.9 watch item. |
| Catalano (PYD constructs) added to Y5 `frameworkBasis` | ACCEPT WITH CHANGES | The components are SUPPORTED (y5-01, -02, -04). "One to one" is unverified. The constructs are what programs foster, not youth outcomes. There is no year and the attribution is loose. | Add it as a supporting framework at the component level only, as "Catalano et al., SDRG, hosted by ASPE", with the year left open until it is confirmed. Make no structural claim. Decide the anchor after Nagaoka's release. |
| Y5.1: CASEL "Linking feelings, values, and thoughts" (y5-12) | REJECT | PARTIAL. It is an emotion-awareness skill, so its taxonomic home is Y4.1 (R-02). Citing one bullet for two codes in different domains blurs the Y4/Y5 seam. | None. If "articulating values" needs support, put the CASEL Self-Awareness *definition* to a verifier as a new claim. |
| Y5.2: Muhammad as CP-10-04's support for "racial" (R-15) | ACCEPT | Muhammad's fit is direct and Nagaoka's is partial. | Cite Muhammad on the racial clause. Check Y4.5's CP-10-04 edit in the same CP. |
| Y5.2: NASEM 2019 for sexual and gender identity (y5-09) | ACCEPT WITH CHANGES | SUPPORTED for the text. But NASEM describes identity *forming*, which is Y5.1 exploration, not the pride and acceptance that Y5.2 covers. | Read LFJ "positive social identities based on their membership in multiple groups" as the construct, so that naming sexual or gender identity is an instance of it, not a departure. Add NASEM at `fit: partial` as evidence that these are recognized identity domains in adolescence. No FD is needed; S129 is safe. |
| Y5.2: CASEL "linguistic assets" (y5-10; R-04) | REJECT for Y5.2 | PARTIAL, and the verifier says it is about recognizing assets. Identifying one's assets is "naming one's strengths", which is Y5.4's include. | Resolve R-04 toward Y5.4: either put "linguistic assets" to a verifier for Y5.4, or drop it from Y5.4's `basis`. For "linguistic" in Y5.2, use the LFJ instance reading above. |
| Y5.2: LFJ 2nd ed. 2022 (y5-11; R-05) | ACCEPT | SUPPORTED. | One string, with the publisher and title casing as printed: "The Southern Poverty Law Center, Inc.", "Anti-bias". |
| Y5.3: NRC 2009 Strand 6 and Farrington 2019 arts identity (y5-06, -07) | ACCEPT WITH CHANGES | y5-07 is SUPPORTED. y5-06 is PARTIAL, but only because of where the copy is hosted. Each source covers one sector, and Y5.3 generalizes both to any field. | Cite both, with y5-06 re-pointed to NAP. Log one **sector-widening FD** for "athlete, reader, writer" (counted). Do not lean on Nagaoka's "one role or setting" (y5-08, PARTIAL: the report gives it as an example of an identity that is *not* integrated). Fix the Carlone & Johnson basis/source mismatch. |
| Y5.3 edge case: "I am a Leader" / leadership identity | ACCEPT the finding | A role is not a field. Gold always routes leadership to Y4.7 (S004, S059) or Y7.3 (S253). | No hint until two gold rows exist (S3.1). Note it in R-13's eventual CF. |
| Y5.4: resilience routing (R-07, R-22) | ACCEPT WITH CHANGES | Real (LM 5/4/2, NLM 10/5/2), but the design gold has no row on it. Catalano "resilience" was never claimed, so it cannot be the rationale. | Rest the CF on the codebook's own skill/belief logic, which S3.1 allows: coping with stress is a skill (Y4.2); believing one can handle challenges is a self-belief (Y5.4). Add two gold rows per side first. Run one CF for y5 and y4a, not two. |
| Y5.5: re-anchor faith on Catalano; close FD-P12 (y5-01, -02, -03) | ACCEPT WITH CHANGES | All SUPPORTED. FD-P12's revisit condition (a verified youth spiritual-development framework) is met. y5-03's URL is wrong, per the verifier. | Close FD-P12 and log it as **merged components** (belief in the future + spirituality), not counted. Use the corrected CASEL URL. Do not add Damon (y5-15) or Search Institute spiritual development (y5-14): with Catalano verified they add nothing, and Damon is narrower than the code. |
| Y5.6: Catalano self-determination plus 29 U.S.C. 733(b)(5) for self-advocacy (y5-04, -05) | ACCEPT | Both SUPPORTED. This closes a real unlogged gap that S032 and H060 depend on. | Add both and drop Shogren from `basis`. **Decision C applies:** 733(b)(5) is for students with disabilities, and Y5.6's text names IEPs, so the population matches and no FD is needed. |

### Y6 Character, Values & Civic Life

| Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|
| Drop Lerner from Y6.1 `basis`; fix the stale "located" status | ACCEPT | S1.1: no registry entry. | Remove it, and also rewrite research-basis.md's Y6 "Structure" paragraph, which rests on Lerner: say the values-plus-civic grouping is codebook-defined. |
| Y6.1: VIA Forgiveness (y6-07) | ACCEPT WITH CHANGES | SUPPORTED, and S167 depends on it. y6 is right that VIA's other strengths overlap Y4. | Cite only the Forgiveness component. Do not add VIA to `frameworkBasis`. |
| Y6.1: an FD for sportsmanship and faith-grounded values (sector widening) | REJECT the case; ACCEPT the gap | Sector widening requires wording unchanged, and here the definition adds new trait words. Both terms are better read as Positive Values (honesty, integrity, responsibility) *practised in* sport or faith. | Move "sportsmanship" and "faith-grounded values" from the definition into the include ("honesty and responsibility in sport (sportsmanship) or as faith-based values"). The scope stays the same (PATCH, no FD), and H015, S180, S125 and S145 do not flip. If Severin wants them kept as named traits, log a codebook-defined element instead. |
| Y6.3: Watts, Diemer & Voight 2011 (y6-01) | ACCEPT | SUPPORTED. It is a youth-development model with a measurement line, and it settles the "[VERIFY]" note. | Add it beside Muhammad. |
| Y6.4: Watts political efficacy (y6-02) and Search "Youth as resources" (y6-03) | ACCEPT WITH CHANGES | Both PARTIAL. Watts also puts efficacy *inside* critical consciousness, beside Y6.3, so the citation fixes the source gap without justifying the grouping. | Cite both at `fit: partial` and reopen an FD for Y6.4: civic efficacy and youth-governance roles as sector widening (H030, S039, S211). FD-P13 was closed on a reading of CIRCLE that covers only the behavioural core. |
| Y6.4 "Leadership" in the name (R-13) | DEFER to PR #62 rule 7 | No source, and design gold sends community-setting leadership to Y4.7 (S059: leading a trail cleanup). A rename is MAJOR. | Once PR #62 lands, an exclude or hint ("leadership skills, even in a community setting → Y4.7, S059") is enough. Do not log leadership as a construct of Y6.4. |
| Y6.6: UNESCO Tbilisi for connection to nature (y6-05) | ACCEPT WITH CHANGES | PARTIAL: sensitivity and concern are not connection. The gap is real and unlogged (S045). | Cite Tbilisi at `fit: partial` and log a **codebook-defined element** FD for "connection to nature" (counted). Do not call it merged components: NAAEE is the anchor, and Tbilisi is not in `frameworkBasis`. |
| Y6.7: ISTE 2024, 1.2.d and 1.2.b (y6-06) | ACCEPT | SUPPORTED. A currency fix with no change to scope. | Re-cite and keep the 2016 entry as history. Category D's description already matches 1.2.a. |

### Y7 Career & Economic Readiness

| Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|
| WIOA 681.460(a) as the Y7 "spine" | ACCEPT WITH CHANGES | The elements are SUPPORTED one at a time, but they are **services**, and the 14-element list also covers tutoring, mentoring, leadership development and supportive services (Y1, Y3, Y6, F2). It is a program-design list, not an outcome taxonomy. | Cite each element at code level and add 681.460 to `frameworkBasis` as "supporting". In research-basis.md, say that Y7's categories are codebook-defined and mirror the Perkins and WIOA groupings. |
| Y7.1, Y7.4: govinfo URLs; 2302(7)(A); 681.460(a)(13); 2302(5); 681.460(a)(3)-(4) (y7-01, -02, -03, -08, -09) | ACCEPT | SUPPORTED. | Citation PATCH, after PR #62. |
| Y7.1 "aspiration" (R-09) | DEFER until PR #62 merges | "Planning" is not aspiration. No design-gold row codes career *aspiration* (S152 is exploration). Narrowing would leave career aspiration with no home, given Y5.5's exclude, and Y7.1 is heavily used (66/44 texts). | After PR #62, log a codebook-defined element FD rather than narrow. The alternative of moving all aspiration to Y5.5 (where Catalano's verified "belief in the future" names goals and options) is a bigger, MINOR boundary move that needs gold. |
| Y7.2: 2302(7)(B), 681.460(a)(14); add "interview practice" | ACCEPT WITH CHANGES | Both PARTIAL. The include addition is an example step (S2.2) inside the existing definition. | Sequence it after PR #62's CP-09-03. Note "resumes, interviews" as unsourced. R-18 (re-check Conley's work side) is still open: put it to the PR #62 verifier. |
| Y7.3 / PR #62 notes: WIOA 3272(17); "or daily life" (R-10, R-16) | ACCEPT as notes | y7-06 is SUPPORTED. y7-07 (Casey) is PARTIAL and pulls online safety (Y6.7) into Y7.3. | Prefer dropping "or daily life". Taxonomically, daily-life computer skills are a Casey life-skill area, so if Casey anchors Y7.7 they belong there, not in Y7.3. |
| Y7.4: entrepreneurship via 681.560 (y7-10) | DEFER | PARTIAL. WIOA itself keeps entrepreneurship (element 12) separate from occupational training (element 4), so folding it into "industry-specific skills" goes against the source. There are 7 texts across 5 codes and no gold rows. | Collect two gold rows, then decide between a hint and an include. Mindset and confidence wording stays in Y5. |
| Y7.5: 29 U.S.C. 705(5) (y7-11); optional: Y6.5 Search "Service to others" (y6-04), Y7.6 681.500 (y7-12) | ACCEPT | All SUPPORTED; citation gaps or optional extras. | Add 705(5); the two optional ones are low priority. |
| Y7.7: re-anchor on Casey CLS; close FD-P15 (y7-13 to -17) | ACCEPT WITH CHANGES | y7-13 is SUPPORTED and meets FD-P15's revisit trigger, but Casey is tier D replacing tier A. y7-14 and y7-17 are PARTIAL, and y7-17's component text was wrong. | Add Casey as the cross-sector component and keep Chafee. Close FD-P15 only on Severin's call on tier (S1.2 prefers A). **Decision C:** the include "self-care at camp" names a setting outside Chafee. So under Chafee alone FD-P15 stays, and under Casey (all youth 14-21) it can close. Cite IDEA 300.43 (SUPPORTED); keep 733(b)(4) and FCS as partial or drop them. |
| Y7.7: vital documents, 42 U.S.C. 675(5)(I) (y7-18) | ACCEPT | SUPPORTED. **Decision C:** the include names no population and the example is "before exiting care", so this foster-only source needs no FD. | Add it. |
| Time management: Y4.3 or Y7.7 (R-06) | Y4.3 | Casey files time management under *Work and Study*, not Daily Living, so y7-14 does not support it for Y7.7. It is a general self-management skill. | Y7.7 keeps "scheduling" for daily-life logistics. Do not cite y7-14 or y7-17 (2.1.1) for time management in Y7.7. |
| Bare "life skills" (R-08) | REJECT y7's domain-only route | The rules say a label spanning more than one domain stays uncoded and is never coded domain-only (the domain-only rule in the prompt). "Life skills" means psychosocial skills (Y4) in youth development and daily living (Y7.7) in Casey. CP-09-09's calibration chose not to list it. | Re-open only through a CP with design-gold rows. Y7.7 should require named daily-living content. |

## 3. Cross-cutting (R-03, R-11, R-12, R-21)

- **R-03**: adopt one CASEL entry for all batches, using the y4a-10 form if it verifies (the
  verifier found the titled document at casel.org/casel-sel-framework-11-2020/), with the year
  marked as coming from the slug.
- **R-11 drift**: on my verdicts, Y5 ends at 1/6 (Y5.3), Y6 at 2/7 (Y6.4, Y6.6) and Y7 at 0-1/7
  (Y7.1 after PR #62; Y7.7 depends on the tier call). All are under one third. The researchers
  treated a PARTIAL citation as something that could make an FD unnecessary; I did not.
- **R-21**: who changes decides the Part. Senior volunteers' own quality of life is Part F (adult
  participants). Volunteer retention or skill is A1.3. Y6.5 takes youth only.

## 4. What the researchers missed

1. **CASEL Self-Awareness is split across Y4 and Y5 with no allocation rule.** Y4 says "the five
   competencies are this domain's categories", yet Y5.1, Y5.4 and Y5.5 cite Self-Awareness
   bullets (identity, self-efficacy, growth mindset, purpose). R-02, R-04 and R-14 are all
   symptoms of this. The fix is a one-table allocation in research-basis.md: each CASEL bullet
   goes to exactly one code. Skills go to Y4. Identity, beliefs and purpose go to Y5, with Harvard
   EASEL's skills, identity and values split as the stated reason once it is verified.
2. **Y7 category C mixes results and skills.** Y7.5 is a status, while Y7.6 and Y7.7 are skills,
   yet the description says "Results in work and adult independence". A display-only description
   fix (3.1.3 style) is enough; regrouping is not worth it.
3. **Watts places efficacy beside critical reflection.** If Y6.4 and Y6.3 both cite Watts, the
   CF between them (efficacy vs analysis) should say which statements go where. H030 is the only
   gold row.
4. **One CP per domain**: the Y5 and Y6 citation fixes, FD openings and closings, and drift table
   updates should each go in one CP, as y5 suggests. Y7's must wait for PR #62.
