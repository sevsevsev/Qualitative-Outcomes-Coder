# Y1 pilot review: devil's advocate (2026-10-16)

Role: argue for keeping Y1 exactly as it is, and concede only where a source is wrong, superseded, misattributed, or missing for something a code claims.

## Costs every change carries

- **Prompt.** `youthOutcomesV3.ts` writes each code's `source`, `include` and `useInstead` into the coding prompt. Any edit to a Source line is therefore a prompt change. It needs the two-run regression and stability gate on the 345 design rows (S4.4–4.5), and that eval needs Severin's review.
- **Re-coding.** About 2,441 LM rows and 1,859 NLM rows (785 of them primary Y1) were coded under 3.1.2. A MINOR change (scope widened or narrowed) breaks comparability with those exports and dashboards unless the rows are re-coded. A new code also costs enum budget (160 now, with a redesign line at 165).
- **Public explorer.** The explorer shows every source and every partial fit. Swapping a well-known anchor (Attendance Works, Head Start ELOF, CSTA 2017) for a Federal Register notice or a versioned EDFacts file spec makes the page harder for practitioners to read and adds new links that can break.
- **One adjudicator.** Every CP, FD entry and flipped gold row goes to Severin. Draft PR #62 already touches Y1.4 and A2/Y2/Y7 boundaries.

## Overreach in the evidence

1. **Verdicts that contradict their own notes.** Rows y1-mindsets-03 (Pashler) and y1-mindsets-04 (Halpern) are marked SUPPORTED, but both notes say "the fit … is partial". In the registry they must be stored as partial fits.
2. **An excerpt that does not show the claim.** For y1-attainment-04 (6311(g)(1)(E)), the excerpt is about agency collaboration. The "educational stability" wording appears only in the verifier's note.
3. **A wrong URL.** The URL claimed for y1-subject-12 (C3) is a secondary methods text. The verifier had to substitute the real one.
4. **Supersession is not verified.** The verifier rated y1-subject-07 (CSTA 2026) PARTIAL precisely because "supersedes" could not be confirmed.
5. **Joined fragments.** Several excerpts (W.7, NCAS, Conley, GPRA, RF) are fragments that the fetch tool returned in pieces and the verifier joined without checking the join. These are not clean verbatim excerpts under S1.5.
6. **Tier claims.** Head Start ELOF is already a named tier-A example in S1.2 and already sits in the registry as `verified/direct`. Re-anchoring Y1.8 on RTT-ELC (also tier A) or on NASEM (tier B–C) gains no tier. It only changes which source is shown.
7. **The real-use counts are model codes, not adjudicated gold** (S4 says score only on adjudicated rows). They are also inflated by templates: NLM Y1.8 has 36 rows but only 2 unique texts, and NLM Y1.10 has 19 rows but only 3. "About 15" engagement statements and "about 10" focus statements are anecdotes, not rates. The taxonomy researcher concedes that the sample comes from one district.
8. **The researchers' own data argue against them on engagement.** "Engagement" went to Y1.9 and "connectedness" went to Y3.1 consistently. That is the rule F1.3 proposes, so no confusion is shown.

## Verdicts

### Category A (Y1.1–Y1.8)

| Finding | Verdict | Reason | Smallest change I would accept |
|---|---|---|---|
| Y1.1: add CCSS reading anchors and RF | REJECT | ESSA is already direct at tier A. RF is PARTIAL (the strands are not on the cited page). The verifier saw the site call itself "unofficial". Many states have repealed or renamed CCSS, which is a bad look on a public page. | None. |
| Y1.1: NRP excerpt is only headings | ACCEPT | The current excerpt fails S1.5, and the replacement sentence is SUPPORTED. | Registry excerpt only. The Source line and prompt are unchanged. |
| Y1.2: home-language half has no source | ACCEPT WITH CHANGES | The definition claims "maintenance … of a home language" under framework fidelity, and adjudicated row S143 depends on it. This is a real gap. | Add the Seal of Biliteracy Guidelines (SUPPORTED) only after settling whether SealofBiliteracy.org is a co-author (S1.4). Reject 7011(7)(B) and NALA, which are both PARTIAL. |
| Y1.4: move to CSTA 2026 and add 7801(52) | REJECT and DEFER | The verifier rated this PARTIAL and supersession is unverified. The standards were published in summer 2026 and no state has adopted them yet, while every program statement was written against 2017. PR #62 is rewriting Y1.4 now. 7801(52) is a list of subjects with no outcome wording. | Revisit after #62 merges and once states adopt the 2026 standards. |
| Y1.6: NCCAS conceptual framework, Young Audiences note | REJECT | Rated PARTIAL, and the date (2014 vs 2016) is unconfirmed. The existing NCAS link is already verified/direct, and the stewardship change is unverified. | None. |
| Y1.7: add CCSS W.7–8 and C3; narrow "critical thinking" | REJECT | Conley and NAMLE are both direct. Narrowing would leave about 60 real rows without a home ("Improved logical thinking") and would need a rename, which is MAJOR. | Conley cite_as: add "School Administrator, April 2016" and the `year` field. This is a PATCH and the content does not change. |
| Y1.8: re-anchor to RTT-ELC, CCDBG or NASEM | REJECT | No tier is gained (see overreach item 6). RTT-ELC is a grant notice for an expired program, and its five domains include the motor and social-emotional domains that Y1.8 excludes. CCDBG names no domains. The "early-childhood exception" holds because the construct is defined by age. | Add the govinfo ELOF URL (SUPPORTED, settles the 2015 date) and fix the stale "located" in `basis`. |
| Y1.8: K–3 literacy misrouted (35 rows) | DEFER | The definition already says "below kindergarten age". This is a model error on one template (2 unique texts), not a codebook error. | Correct the exports in review. Add a useInstead pointer only if a two-run test of that template still misroutes it. |

### Category B (Y1.9–Y1.12)

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Farrington publisher name in `cite_as` | ACCEPT | This is a misattribution under S1.4: renamed organizations keep the name they had at publication. | Correct `cite_as` and add a rename note. |
| Y1.9: Farrington's attendance element sits at Y1.13 | ACCEPT | It is a note in `basis`, which is not in the prompt, so it costs nothing. | One sentence. |
| Y1.10: young-children clause | ACCEPT WITH CHANGES | "Framework" fidelity plus a widened construct is exactly what S1.6 forbids, and the 2026-09-27 verifier already flagged it. | Set `fidelity: adapted` and open an FD entry (sector widening). REJECT the narrower wording: it is MINOR and risks flipping adjudicated row S220. |
| Y1.11: add Conley 2007 and Pashler | REJECT | Farrington is already direct. Pashler describes teacher practice (the note says partial). | None. |
| Y1.12: add a useInstead pointer to Y2.4 | ACCEPT | S1.6 Observability requires the anchored domain to keep a pointer to the value mindset placed elsewhere. | About 8 words in useInstead. |
| Y1.12: narrow academic belonging, add Halpern | DEFER / REJECT | No gold row and no real-run conflict. Under S3.3 nothing has triggered yet. Halpern is a partial fit about girls in math and science. | None until a confusion actually appears. |
| Y2.4: add Farrington's value mindset | REJECT | Y2.4 already has two direct sources. This would be churn outside Y1. | None. |

### Category C (Y1.13–Y1.18)

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Y1.13: ESSA and FS195 as primary over Attendance Works | REJECT | It is the same 10% definition. FS195 is a versioned data spec (v20.2) that will be re-issued every year, which means link rot. The ESSA clause sets no threshold. Tier D is allowed under S1.2. | None. |
| Y1.13: McKinney-Vento pinpoint (g)(3)(A)–(B) | ACCEPT | It resolves an earlier verifier note, and only the component text changes. | Registry component only. |
| Y1.13: foster-placement element | ACCEPT WITH CHANGES | The definition names foster care, but its only source covers homelessness. That is a real gap. | Add 42 U.S.C. 675(1)(G) only. Its excerpt shows the claim; the excerpt for 6311(g)(1)(E) does not. |
| Y1.13: pregnancy | DEFER | Title IX is PARTIAL and is not an outcome measure. | Owner's call. Leave it as is. |
| Y1.14: CRDC 2023-24 and narrower "alternatives" wording | REJECT | 2021-22 is still a valid, verified ED document. The rewording is MINOR and its support is only PARTIAL. | None. |
| Y1.15: the "no subject" clause is a codebook rule | ACCEPT WITH CHANGES | Allensworth & Easton do not cover it, and NASEM Indicator 5 is PARTIAL. | Open an FD entry (codebook-defined element). REJECT a new code (+1 enum, about 95 rows to re-code). DEFER the domain-only CF line, because CP-09-09 is too new to judge. |
| Y1.16: re-anchor | ACCEPT WITH CHANGES | The only source is partial and its PDF returns 403. That makes it effectively broken. | Add ESSA 6311(h)(1)(C)(viii)(II)(bb) (SUPPORTED). Keep 2020-21. Do not call the School Form "direct": PENR-3 is a school-level yes/no question. |
| Y1.17: add NCES 219.67, FS221, WIOA 677.155 | REJECT | 681.460 is already direct. FS221 covers only N-or-D youth, so adding it would create a sector-widening FD. WIOA is PARTIAL. | None. |
| Y1.18: ESSA (xiii), IDEA Measure C, certificate hint | REJECT / DEFER | NSC is direct and current. Measure C is PARTIAL. The certificate boundary belongs with Y7 and #62. | None now. |

### Taxonomy (domain level)

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| NASEM as the structural anchor for Y1 | REJECT | It is PARTIAL (y1-taxonomy-04), so it cannot support a recommendation. | Optionally, a sentence in research-basis.md. |
| Engagement CF (Y1.9 vs Y3.1), GPRA/ESSA SQSS for Y1.9 | REJECT | The data show no confusion (overreach item 8). ESSA does not define engagement, and Fredricks is PARTIAL. | None. |
| Hints for executive function, high-school transition, ACT, Act 158, readiness | REJECT / DEFER | Each rests on 1–6 rows. Act 158 is a Pennsylvania-only rule in a national codebook. The executive-function hint would contradict Y4.3 (out of scope). | Flag Y4.3's "outside schoolwork" wording to the Y4 owner. |
| research-basis.md statuses are stale; Farrington's Social Skills sit in Y4 | ACCEPT | Documentation only. No prompt or coding cost. | Edit the doc. |

## What the researchers missed

- **The prompt-cost question.** No finding says which proposed edits touch `source` (and so the prompt) and which touch only the registry or `basis`. That split decides which ones need an eval.
- **Accepting the citation fixes adds three FD entries to Y1 (Y1.10, Y1.15, possibly Y1.17).** DEVIATIONS.md has no Y1 entries today, and the explorer will show the new ones.
- **Versioned sources need a review date.** FS195, FS221, CRDC and CSTA are re-issued on a cycle. Any that get adopted need a recorded re-check date, or they will go stale in a year.
- **No real-run row was checked against gold.** The misroutes are model output. Before any hint, a re-run of the 35-row OCF template and of the engagement statements would show whether the problem exists in 3.1.4 at all.
- **The data.ts `basis` lines disagree with the registry.** ELOF and McKinney-Vento read "located" in `basis` but "verified" in the registry. This is a sync gap that `sync.test.ts` does not catch.
