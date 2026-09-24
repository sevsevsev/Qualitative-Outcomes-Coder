# v2 source verification: 2026-09-24

PLAN.md phase 1, step 2 (cycle 03). This is a blind check of every source in
`v2-candidate-sources.json`, plus the four codes that had no source (Y8.4, A1.3, Y7.10,
F1.7).

- Full log, with each claim and each verdict: `source-verification-2026-09-24.json`.
- Per-source results: the `blind_verification` field of each entry in
  `v2-candidate-sources.json`.

## Summary

- **All 27 candidate sources exist.** The verifiers could fetch every one, and none
  was invented.
- **One source is misattributed.** The "Lerner 2007" Five Cs handout names no author.
  It credits Lerner only with adding "Caring". Its replacement is Lerner et al. (2005),
  which is confirmed on SAGE and ERIC.
- **Three source-to-code links fail the fit check.** The documents are real, but they
  don't describe the code:
  - SHAPE PE Standard 1 → Y10.1;
  - Positive Youth Justice → Y12.4;
  - the Digital Equity Act's definition of digital literacy → A2.3.
- **Three of the four unsourced codes now have verified sources:** Y8.4, F1.7 and
  A1.3. No framework was found for Y7.10, so it stays an extension.
- **A1.3 uses general workforce sources, not Head Start.** Severin ruled out
  early-childhood-specific sources for it, because the codebook covers every
  youth-serving program.

| Verdict (52 claims) | Count |
|---|---|
| SUPPORTED | 31 |
| PARTIAL | 15 |
| MISATTRIBUTED | 3 (all the Lerner handout) |
| UNSUPPORTED | 3 |
| UNREACHABLE | 0 |

The 11 sources that cycle 02 marked "verified" were checked again. Cycle 02's check
was done by the agent that proposed them, and STANDARDS S4.2 requires a separate
verifier. Ten came back SUPPORTED on every claim. The eleventh, the Digital Equity
Act, is SUPPORTED for F1.5 and UNSUPPORTED for A2.3.

## Results by code

The verdicts below are copied exactly from the verifier's output. Each PARTIAL has a
reason given in its notes:

- **scope:** the source supports only part of the code;
- **secondary:** the text could be fetched only from a mirror or a citing article;
- **wording:** the claim paraphrased or combined the source's components.

| Code | Source | Verdict | What limits it |
|---|---|---|---|
| outcome_type | UW Extension logic model | SUPPORTED | Cite as "UW–Madison Division of Extension (2020)". `output` comes from the Outputs column. |
| Y2 | Lerner handout | MISATTRIBUTED | Replace with Lerner et al. (2005). |
| Y2, Y4, Y5 | Lerner et al. (2005), Five Cs | PARTIAL | Secondary. The publisher's page names the Five Cs. The definitions are only in an academia.edu copy. |
| Y3, Y4, Y5 | Explore SEL domains | PARTIAL | The URL is the Five Cs profile page. The domain definitions could not be fetched. |
| Y4 | Nagaoka et al. (2015) | PARTIAL | Scope: agency and identity fit, but competencies does not. Use the primary UChicago PDF, not the Wallace summary. |
| Y2.4 | Positive Youth Justice, Relationships | PARTIAL | Scope: the domain covers peers, family and community. |
| Y2.5 | Education-to-Workforce, social capital | SUPPORTED | |
| Y4.6 | Shogren et al. (2015), Causal Agency | PARTIAL | Secondary: an unpaginated manuscript copy. Two fetches disagreed on the wording "agentic" vs. "causal" action. |
| Y4.7 | Carlone & Johnson (2007) | PARTIAL | Secondary: Wiley returned 403. The three dimensions are confirmed only through a citing article. |
| Y5.2 | NCSS C3, Civics | SUPPORTED | |
| Y5.3 | NCSS C3, Dimension 4 | PARTIAL | Scope: only "Taking Informed Action" fits. |
| Y5.6 | NAAEE, Personal & Civic Responsibility | SUPPORTED | "Connection to nature" is not covered. |
| Y7.2 | CCSS writing anchors | SUPPORTED | |
| Y7.4 | NGSS three dimensions | SUPPORTED | Cite as "NGSS Lead States (2013)". Computing and coding are not covered. |
| Y7.4 | NAAEE, Environmental Processes | PARTIAL | Scope: environmental science only. |
| Y7.5 | NCSS C3, Dimension 2 | SUPPORTED | |
| Y7.9 | NAMLE core principles | SUPPORTED | |
| Y8.4 | CRDC 2021-22 discipline elements | SUPPORTED | New. Covers suspension, expulsion, law-enforcement referral and arrest. |
| Y8.4 | Irvin et al. (2004), office discipline referrals | SUPPORTED | New. Covers the "office referrals" part of Y8.4. |
| Y8.7 | IDEA Indicator 14, Measure A | SUPPORTED | Enrollment only. |
| Y9.5 | IDEA Indicator 14 | PARTIAL | Wording: restate the claim as Measure C (education, training or employment). |
| Y9.6, Y9.7 | Chafee, 42 U.S.C. 677(a)(1) | SUPPORTED | |
| Y10.1 | SHAPE PE Standard 1 | UNSUPPORTED | Standard 1 is about motor skills. |
| Y10.1 | SHAPE PE Standard 4 | PARTIAL | New. It covers choosing physical activity, but not fitness or sedentary time. |
| Y10.2 | SHAPE PE Standard 1 | SUPPORTED | |
| Y10.4 | Healthy People 2030 SH-04 | SUPPORTED | Sleep only. |
| Y10.5 | SHAPE NHES Standard 1 | SUPPORTED | |
| Y10.6 | National Sex Education Standards (2020) | SUPPORTED | |
| Y10.7 | Healthy People 2030 AH-01, AHS-01 | SUPPORTED | |
| Y11.2 | Keyes MHC-SF | PARTIAL | Wording: the MHC-SF and Keyes (2002) are separate works. Cite them separately. |
| Y12.4 | Positive Youth Justice | UNSUPPORTED | It covers assets and domains, not justice-system status. |
| F1.5 | Digital Equity Act, 47 U.S.C. 1721(12) | SUPPORTED | Digital literacy only. |
| F1.6 | ED/DOJ (2015) LEP letter | PARTIAL | Secondary (the blog Wrightslaw). The fit is loose: it describes the district's duty to give notice. |
| F1.7 | MIECHV performance measures | SUPPORTED | New. Covers breastfeeding, well-child visits and safe sleep. |
| F1.7 | Healthy People 2030 MICH-14, MICH-15 | SUPPORTED | New. Covers safe sleep and breastfeeding. |
| F3.3 | ED/DOJ (2015) LEP letter | SUPPORTED | |
| A1.3 | Surgeon General (2022), Framework for Workplace Mental Health & Well-Being | SUPPORTED | New. Covers staff well-being, not turnover. |
| A1.3 | NIOSH WellBQ (2021) | SUPPORTED | New. Covers staff well-being, not turnover. |
| A1.3 | BLS JOLTS definitions (separations, quits) | SUPPORTED | New. Covers turnover, as general payroll definitions. |
| A1.3 | ISO/TS 30421:2021, turnover and retention metrics | PARTIAL | New. Scope matches. The full text is paywalled and the standard is under review. |
| A1.3 | Head Start 45 CFR 1302.93; Head Start PIR | SUPPORTED; PARTIAL | Rejected by Severin (early childhood). Kept only as a record. |
| A2.1 | Weikart Center YPQA pyramid | SUPPORTED | Accreditation is not covered. |
| A2.3 | Digital Equity Act, 47 U.S.C. 1721(12) | UNSUPPORTED | It defines users' skills, not the provision of resources. |
| A2.5 | Urban Institute mentoring indicators | PARTIAL | Scope: youth satisfaction only, not family satisfaction. |
| A3.2 | Kania & Kramer (2011) | SUPPORTED | |
| A3.3 | Sampson et al. (1997) | SUPPORTED | The copy is hosted on a course page, not the DOI. |
| Y7.10 | none | extension | The proposer searched and found no framework for a residual category. |

## What this leaves open for the phase 1 gate

The gate requires the v2 sources to be "verified or explicitly marked as extensions".
These items stand in the way:

1. **Codes left without a supporting v2 source:**
   - **A2.3:** its only v2 candidate failed, and v1's code 9.1 has an OTL citation that
     still needs replacement. It needs a new source or an extension entry.
   - **Y12.4:** it keeps CJCA (2009) from the v1 registry, but that entry is still
     `located`.
2. **Codes backed only by secondary copies:**
   - Y4.6, Y4.7 and F1.6, plus the definitions in Lerner (2005) and the PIR turnover
     items.
   - A person with library access could confirm the three journal articles from the
     publisher PDFs.
3. **Decision D4 in cycle 02** can now be answered with evidence:
   - **Y8.4:** cite CRDC and Irvin (2004).
   - **F1.7:** cite MIECHV and Healthy People 2030 MICH-14/15.
   - **A1.3:** cite the Surgeon General framework or NIOSH WellBQ for well-being, and
     BLS JOLTS for turnover. Severin ruled out the Head Start sources on 2026-09-24.
   - **F1.7:** keep MIECHV. It is a home-visiting (early childhood) measure set, but
     Severin decided on 2026-09-24 to keep it, because some parenting programs state
     these outcomes. He also noted that F1.7 is far from what most programs name as
     outcomes, so phase 2 should check whether it is used often enough to keep.
   - **Y7.10:** extension.

## Corrections the v2 draft needs (through a CP, not applied here)

- **Remove these citations:**
  - the Lerner 2007 handout;
  - SHAPE Standard 1 as a source for Y10.1;
  - Positive Youth Justice as a source for Y12.4;
  - the Digital Equity Act as a source for A2.3.
- **Fix these citations:**
  - UW–Madison Division of Extension (2020);
  - NGSS Lead States (2013);
  - Keyes: cite the MHC-SF separately from Keyes (2002);
  - Nagaoka: use the primary URL;
  - IDEA Indicator 14: restate the claim for Y9.5 as Measure C.
- **Add these sources:**
  - Y8.4, F1.7 and A1.3, as listed above;
  - SHAPE Standard 4 as a source for Y10.1.
- **Change the extension status line:** mark Y7.10 as an extension in the draft's
  status line.

## Method

1. **Claims.** The orchestrating session split each candidate source into one claim
   per code it supports (V01–V39). Each claim has five fields: `code`, `cite_as`,
   `claimed_component`, `url`, and a one-line `code_construct` for the fit check.
2. **Verification.** Four `codebook-citation-verifier` agents each took a batch of the
   claims. They ran in separate contexts and saw only the claim fields.
3. **Unsourced codes.** A separate general-purpose proposer searched for sources for
   the four unsourced codes. A fifth, fresh verifier checked what it found (U01–U07),
   plus two replacement leads raised in verifier notes (U08, U09).
4. **A1.3 re-check.** After Severin ruled out the Head Start sources, two more fresh
   verifiers checked general worker well-being frameworks (U10, U11) and general
   turnover definitions (U12, U13).
5. **Recording.** Verdicts are recorded exactly as returned. Three excerpts were over
   40 words (V31, V36, V37), so I trimmed them to a verbatim sub-span. The full
   original is kept in `excerpt_as_returned`.
