# Batch 3 review: devil's advocate (Y8, F1, F2), 2026-10-16

My default is to leave the codebook as it is. Each change has to show what it buys and what it
costs. Three costs recur across the batch:

- **Prompt churn.** `frameworkBasis`, `definition`, `include`, `useInstead` and the code's
  `source` line are all printed into the prompt (`youthOutcomesV3.ts` lines 18-32). Editing a
  `source` line therefore changes the prompt: it needs a gold run and breaks comparability with
  past codings. A registry `supports` row does not. **Rule I apply:** new evidence goes into the
  registry. A `source` line is edited only where it is wrong. All prompt edits go in one CP with
  one regression run.
- **Maintenance.** Each new entry is a URL that can rot. Several sources here are already at
  risk: HP2030 (court-order banner), SNAP-Ed (defunded), USDA 2022 (status unclear) and the
  Digital Equity Act (grants terminated). One direct component per construct element is enough.
- **Enum.** Nothing in this batch adds a code, so the footprint stays at 160.

I read every row with neither SUPPORTED nor PARTIAL as an unverified lead, and every PARTIAL row
as a partial fit only. These leads support nothing: HECAT AOD, Tobacco and Violence (R-03, no
claim filed), HECAT PHW HBO 3 (vision), HP2030 V-01, Keyes 2006 beyond its title, the OJJDP JABG
measures, and the authorship of Dual Capacity V2.

## Y8

| Item | Verdict | Reason | Smallest acceptable change |
|---|---|---|---|
| HECAT as category-A source (A1/A5) | ACCEPT WITH CHANGES | The HBOs are verified; the index page (y8a-01) is only PARTIAL | One `cdc-hecat-2021` registry entry. Not in `frameworkBasis`, which would change the prompt for no coding gain. WSCC stays. |
| YRBS name gap and Y8.1 sleep row (A3, R-12) | ACCEPT | Registry fact | Add the name to `codebook_names` and a Y8.1 row. |
| Two YRBS questionnaires (R-02) | ACCEPT WITH CHANGES | Item numbers differ between the two | Register the National questionnaire only. Cite y8a's items by their wording, and re-verify their numbers on that PDF. |
| Y8.1: about 10 new links | ACCEPT WITH CHANGES | Redundant | HECAT PA HBO 1-2, FN HBO 3 and 10, PHW HBO 1-2, plus the existing SH-04. Reject PA-06. Screen time stays partial (PA-R02). Keep it, since S207 and H086 are adjudicated. |
| Y8.2: ELOF for fine motor (y8a-13) | REJECT / DEFER | Fine motor is not age-bound. CP-10-01 removed ELOF from Y1.10 on the same rule, and CP-11-03 keeps the entry Y1.8-only. | Keep the text, so S192 does not flip. A verifier should check SHAPE PE Std 1's K-2 indicators for fine-motor wording. If there is none, log a codebook-defined FD (counted). |
| Y8.3: NHES Std 3 and 1.x.3; HECAT S HBO 4/7 | ACCEPT / REJECT | NHES is SUPPORTED on an entry already cited; HBO 4 and 7 are PARTIAL | Two rows on `shape-nhes-2024`. |
| Y8.4: component rows | ACCEPT | Verified, registry only | NSES SH.8.CC.2 and SH.12.GS.1. |
| Y8.4 "puberty"; Y8.6 "suicidal thoughts or self-harm" | DEFER | No gold row and no measured confusion | A proposed gold row first. |
| Y8.5: HECAT PHW 9-11, IID-08, OH-08, MICH-17, Q80 | ACCEPT WITH CHANGES | IID-08 and HBO 11 are PARTIAL | HBO 9-10 (S094), OH-08 (S064), MICH-17 (S061: young children by definition, so the early-childhood rule allows it). Reject the rest. |
| Y8.6: CDC conduct-problems page (y8b-01) | REJECT | A diagnostic-criteria page, not an outcome framework. No Y8.6 gold is about behavior (S046, S067, H034 are internalizing). It would make "behavioral problems" a stronger magnet for school-conduct texts. | Leave Y8.6 alone until PR #66 (Y1.14) merges. Then consider narrowing it (MINOR) with "use instead: Y1.14"; that flips no gold. Q29 is fine as a registry row. |
| Y8.7: drop "restored" | REJECT | S144 ("calmer and more restored") is adjudicated, so dropping the word risks a flip with no measured gain | Keep the word. Lead only: Keyes 2002 (registered, partial) may list "calm and peaceful" in its positive affect. A verifier should check before any FD. |
| Y8.8: Core Concepts | ACCEPT WITH CHANGES | Concept 10 is about culture, not recovery (y8b-04) | Pin concept 5. Correct the title per S1.4 ("12 Core Concepts for Understanding Traumatic Stress Responses in Childhood"). Fix "located". |
| Y8.9: MHMD-03, MHMD-06, Q94 | ACCEPT WITH CHANGES | One direct source is enough | Add MHMD-03 as a row. Keep WSCC. |
| Y8.10: Q13 proxy | REJECT | Search Institute already matches word for word | None. |
| Y8.10: stale "PR #31, in flight" | ACCEPT | Process text that reaches the coder | Delete it in the shared regression run. Lines 244 and 779 belong to their owners. |
| Y8.11: MTF perceived risk | ACCEPT WITH CHANGES | PARTIAL: disapproval is outside the code | Partial row (S015). |
| Y8.11 knowledge/intentions and Y8.12 "warning signs" as merged components | REJECT the framing | S1.6 merged components means coders *can't tell two framework components apart*. Knowledge and behavior are easy to tell apart, so the label only keeps these items out of the S4.9 count | Knowledge (H038) and warning signs (S248): add an NHES Std 1 row (already verified, topic-neutral). That is a citation. Intentions (S065): one more verifier attempt, then a counted codebook-defined FD. |
| Y8.12: re-point YRBS to 2025 items; community violence | ACCEPT | Fixes a failed excerpt | Replace the excerpt. Skip y8b-13 (redundant). |
| Y8.13: `source` title, CJJA note, NCJRS | ACCEPT | S1.4 | Correct the title (prompt edit). Add the rename note. Use the NCJRS record (PARTIAL) as a catalog URL only. |
| Y8.13: OJJDP 2017 diversion | ACCEPT | SUPPORTED, tier A. Y8.13 today has no direct support at all. | Second row. Not primary: CJCA owns recidivism. |
| Y8.13: FD "observability" | ACCEPT WITH CHANGES | Wrong case: observability moves a construct to another domain, and nothing moves here | Codebook-defined FD for the completion element (S018, S189). Counted. Reject the archived reentry I-Guide. |
| R-13 watch; R-25 tiers | ACCEPT | Hygiene | Backlog line; `build_registry.py`. |
| R-18, R-19 | DEFER | No owner, no gold | Backlog. |

**Y8 drift:** under these verdicts, 1 to 4 of 13 (Y8.13, plus possibly Y8.11 intentions, Y8.12
and Y8.2), or 8% to 31%. The researchers' 1/13 relies on mislabeling two counted items as merged
components.

## F1

| Item | Verdict | Reason | Smallest change |
|---|---|---|---|
| Re-cite Mapp & Kuttner V2 (f1-12) | REJECT | S1.4 keeps the 2013 citation; the only V2 copy is on a district host | None. |
| F1.1 and F1.4: Core Meanings (f1-01, -02) | ACCEPT WITH CHANGES | SUPPORTED, but the PDF names neither CSSP nor a year | `cite_as` "CSSP (n.d.; resource page 2018)", not 2015, which is taken from the filename. |
| F1.2: Epstein via Corwin (f1-03) | ACCEPT | The publisher text replaces a "located" copy | Registry upgrade. |
| F1.2: WIOA 3272(9), CSSP routines | REJECT | Both PARTIAL, and f1-14 is parenting knowledge, which F1.2 excludes | Leave S022 as it is. |
| F1.3: SNAP-Ed MT1 (f1-11) | ACCEPT WITH CHANGES | SUPPORTED but defunded | Register it with an archived snapshot. Reject f1-13. If both copies fail, log a codebook-defined FD (H072 stays). |
| F1.6: WIOA 3272(1), (6) | ACCEPT | SUPPORTED; covers H062 and S118 | Rows. |
| F1.6: Ascend Economic Assets (f1-08) | REJECT | PARTIAL. It is F2's anchor, and it blurs the skill-vs-status line. H027 ("confident managing household finances") is adjudicated **F2.1**. | Flag H027 vs F1.6 "financial skills" to Severin. |
| F1.6: DEA 1721(8) (f1-09) | REJECT | Under decision C, F1.6 names "older adults", but WIOA and the DEA digital-literacy definition are age-neutral | None needed. |
| F1.7: drop the partial Mapp link | REJECT | No coding effect | Keep. |
| F1.9 Flag 1 | Out of scope (PR #62) | If Type 3 "audiences" is excluded and no S1.6 case fits, S1.6 does not allow the departure | Comment on PR #62: justify "not a departure" (Epstein types are school practices; counts are outputs), or narrow less. |
| F1.9 Flag 2 (S176) | Out of scope | Under S4.4 the CP must name S176 | Severin decides. |
| R-17: child-welfare entry | REJECT | 2 texts | Backlog. |

**F1 drift:** 0/9 either way. A CP-09-01 FD would make it 1/9.

## F2

| Item | Verdict | Reason | Smallest change |
|---|---|---|---|
| F2.1: NYTD (f2-01) | ACCEPT | CF-018 already rests on this | Row on `acf-nytd`. |
| F2.1: CFPB Financial Well-Being (f2-02) | ACCEPT WITH CHANGES | Tier A; fits H027 | Make it a separate entry whose names do not collide with Y7.6's CFPB (CF-001). **Keep** CSSP's partial row. Demoting it (R-06) forces a `frameworkBasis` prompt edit for no gain. |
| F2.1: Medicaid (f2-03) | REJECT both options | AHS-01 is PARTIAL. Dropping the word risks S139, and S191 already settles youth Medicaid as Y8.5. | Keep as is. |
| F2.1: bare "stability" hint | DEFER | Regression cannot measure it | Two proposed gold rows first. |
| F2.2: USDA nutrition security (f2-04) | ACCEPT WITH CHANGES | PARTIAL: the title is inferred from the URL | `cite_as` "USDA FNCS Mission Area (March 2022)" plus an archive copy. **Do not narrow:** S062 ("access to healthy food") is adjudicated. Reject NWS-01. |
| F2.3: RHY 1351 (f2-06, -07), SDOH-04 | ACCEPT | SUPPORTED; covers H049, S225, H074 | Rows. |
| F2.3: HEARTH (f2-08) | REJECT | PARTIAL: performance criteria | None. |
| F2.3: McKinney-Vento (R-08) | DEFER | The entry is shared with Y1.13 (PR #66) | After PR #66: a separate 11434a(2) row. Not in `frameworkBasis`. |
| Adult volunteering (f2-11, R-07, R-20) | REJECT hint | About 3 texts. A1.3's sources name workers, not volunteers. | Uncoded or domain-only; revisit at 10+ texts. |

**F2 drift (R-10):** 0/3, or 1/3 if f2-04 fails. One third is not "more than a third", so there is
no re-review. With only three codes the rule is coarse, which is a reason to prefer citations here.

## What the researchers missed

1. **Source lines are prompt text.** No finding prices its regression run, yet most of this batch
   can be registry-only.
2. **Merged components is used to dodge the drift count** (Y8.11, Y8.12). S4.9 exempts merged
   components only because the code "stays wholly inside the framework".
3. **Y8.13's FD case is mislabeled,** and Y8.13 has no direct support today.
4. **Gold flips are named but not priced:** S144 ("restored"), S192 ("fine motor"), S062 (F2.2
   narrowing), S139 (Medicaid), S176 (CP-09-01).
5. **H027 vs F1.6 "financial skills":** adjudicated gold already puts household financial
   confidence in F2.1.
6. **Decision C** removes f1-09 and the population worries about F2.1 independent youth and Keyes'
   adult sample (Y8.6 and Y8.7 name no age). It does not rescue ELOF for Y8.2; that is the
   early-childhood rule, not the age rule.
7. **Fragile federal sources** (SNAP-Ed, USDA 2022, DEA, HP2030): give every new link an archived
   URL from the start.
