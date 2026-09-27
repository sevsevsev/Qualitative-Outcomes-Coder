# Codebook 3.x source re-verification, 2026-09-27

Asked by Severin on 2026-09-27: resume source verification, find more research to support the
codebook, and fix the sources the public explorer still shows as unverified or that should go.
The fixes are applied through CP-10-01 (codebook 3.1.1). The verdicts, excerpts and verifier
notes are in `source-verification-2026-09-27.json` next to this file.

## Method

- **Every 3.x source-to-code link was re-checked**, including the ones marked verified, because
  many earlier checks were done by the same agent that proposed the source (STANDARDS S4.2).
  That is 133 links across 78 sources. Eight independent `codebook-citation-verifier` agents
  checked them. Each verifier got only the claim, the code's name and definition, and a URL. It
  fetched the source itself and recorded a verbatim excerpt of 40 words or fewer.
- **Twelve sources that appear only in the `basis` notes** (not in the registry) were checked
  the same way. They include Lerner et al. (2005), the ED/DOJ 2015 English learner letter and
  ADA Title II.
- **A separate proposer searched for stronger sources** for weak or unsourced codes. It found
  43 leads, and 15 of them went to two fresh verifiers. The proposer never verified its own
  leads.

## Results

| Set | Checked | Supported | Partial | Unsupported or wrong |
|---|---|---|---|---|
| Registry links | 133 | 91 | 42 | 0 |
| Basis-only sources | 12 | 5 | 7 | 0 |
| New candidates | 15 | 13 | 2 | 0 |
| Open [VERIFY] items (CP-09-06, Y4.7, Y4.12) | 3 | 2 | 1 | 0 |

No citation was fabricated or pointed at the wrong document. The problems fall into four groups.

1. **Links that must change.** The Epstein "six types" link (organizingengagement.org) now
   serves online-casino content. It is replaced by the National Network of Partnership Schools
   (Johns Hopkins) copy, which Epstein co-edits. Twelve other links moved to the document the
   verifier actually read, for example the CSTA 2017 standards PDF (the old link now shows the
   2026 standards) and the ISTE standards PDF (the old link was an advocacy brochure).
2. **Sources to remove.**
   - The SAMHSA Strategic Prevention Framework on Y8.11 is a planning process, not an outcome
     framework. This was flagged by CP-01-13 in the 2.x cycle and confirmed again here. It is
     replaced by Healthy People 2030 SU-05.
   - The ED/DOJ 2015 English learner letter in A2.4's notes was rescinded by ED in August 2025
     (Colorado Department of Education notice, 2025-09-09; EdWeek, 2025-08-20). Executive Order
     13166 was revoked by EO 14224 on 2025-03-01, and DOJ rescinded its 2002 LEP guidance on
     2025-03-21. None of them should be cited as current.
   - Head Start ELOF comes off Y1.10. Severin's scope rule keeps early-childhood frameworks for
     codes that are about young children only (Y1.8).
3. **Partial fits (42 links).** The source is real and was read, but it covers only part of the
   code. Examples: Y4.6 cites CASEL "communicating effectively", and CASEL never mentions public
   speaking. The CDC WSCC components are school services, not youth behaviors. Nagaoka (2015)
   names profession identity only as an example inside integrated identity. These are now
   recorded per link as `fit: partial` with the verifier's note, and the explorer shows them.
4. **Only one source is still unconfirmed.** Weiss, Little & Bouffard (2005) was reachable only
   as an ERIC abstract, so it stays "located".

## Status of every source after CP-10-01

"Verified" means a verifier read the document and recorded an excerpt. Fit is per code: an
asterisk marks a code the source covers only in part.

| Source | Codes (* = partial fit) | Before | After | Change |
|---|---|---|---|---|
| `acf-nytd` | Y8.5, F2.3* | verified | verified, mixed fit | component reworded |
| `allensworth-easton-2005` | Y1.15 | located | verified |  |
| `allensworth-easton-2007` | Y1.15 | verified | verified |  |
| `ascend-2gen` | F1.6, F2.1 | verified | verified |  |
| `attendance-works` | Y1.13 | verified | verified |  |
| `bls-jolts-definitions` | A1.3 | verified | verified |  |
| `casel-2020` | Y4.1, Y4.2, Y4.3, Y4.4, Y4.5, Y4.6*, Y4.7, Y4.8, Y4.9, Y4.10, Y4.11*, Y5.1*, Y5.4 | verified | verified, mixed fit |  |
| `ccss-writing-anchors` | Y1.1* | verified | verified, partial fit |  |
| `cdc-ed-bullying-2014` | Y8.12* | located | verified, partial fit | link replaced |
| `cdc-school-connectedness-2009` | Y3.1*, Y3.2, Y3.3 | verified | verified, mixed fit |  |
| `cdc-wscc` | Y8.1*, Y8.9* | verified | verified, partial fit |  |
| `cdc-yrbss` | Y8.4, Y8.11, Y8.12* | verified | verified, mixed fit | component reworded |
| `cfpb-building-blocks-2016` | Y7.6 | verified | verified |  |
| `chafee-42usc677` | Y7.7 | verified | verified |  |
| `cjca-2009` | Y8.13* | verified | verified, partial fit | component reworded |
| `conley-2007-college-readiness` | Y7.2 | (new) | verified | new source |
| `conley-four-keys` | Y1.7, Y7.2 | located | verified | link replaced; citation corrected |
| `crdc-2020-21-student-access` | Y1.16* | verified | verified, partial fit |  |
| `crdc-2021-22-discipline` | Y1.14 | verified | verified |  |
| `cssp-concrete-support` | F1.7, F2.1* | verified | verified, mixed fit |  |
| `cssp-sf-yt-research-foundation-2024` | F1.4* | (new) | verified, partial fit | new source |
| `cssp-strengthening-families` | F1.1, F1.4*, F1.5 | verified | verified, mixed fit |  |
| `csta-k12-2017` | Y1.4 | verified | verified | link replaced |
| `digital-equity-act` | F1.6 | verified | verified | link replaced |
| `digital-equity-act-1723` | A2.3 | verified | verified |  |
| `e2w-social-capital` | Y3.5 | verified | verified |  |
| `eccles-expectancy-value` | Y2.4* | located | verified, partial fit | link replaced; read from a full-text copy off the publisher site |
| `epstein-six-types` | F1.1, F1.2, F1.8*, F1.9, A2.6* | located | verified, mixed fit | link replaced; citation corrected; old link now serves casino spam |
| `essa-4109-tech-capacity` | A2.3* | verified | verified, partial fit | read from a full-text copy off the publisher site |
| `essa-6311-b1c-standards` | Y1.1, Y1.3, Y1.4* | verified | verified, mixed fit |  |
| `essa-6311-c4-elp` | Y1.2 | (new) | verified | new source |
| `essa-7801-52-well-rounded` | Y1.5 | verified | verified |  |
| `essa-indicators` | Y1.17* | located | verified, partial fit |  |
| `farrington-2012` | Y1.9, Y1.10, Y1.11, Y1.12 | verified | verified | citation corrected |
| `fcc-ecf-47cfr54-q` | A2.3 | verified | verified |  |
| `guskey-2002-pd-evaluation` | A1.1, A1.2 | (new) | verified | new source |
| `head-start-elof` | Y1.8 | located | verified | link replaced |
| `hidi-renninger-2006` | Y2.2*, Y2.3* | verified | verified, partial fit | link replaced; read from a full-text copy off the publisher site |
| `hp2030-ah01-ahs01` | Y8.5 | verified | verified |  |
| `hp2030-mich14` | F1.3 | verified | verified |  |
| `hp2030-mich15` | F1.3 | verified | verified |  |
| `hp2030-sh04` | Y8.1 | verified | verified |  |
| `hp2030-su05` | Y8.11 | (new) | verified | new source |
| `hulleman-2010-utility-value` | Y2.4 | (new) | verified | new source |
| `idea-671-pti` | F1.7 | verified | verified |  |
| `irvin-2004-odr` | Y1.14 | verified | verified | link replaced |
| `iste-students-2016` | Y6.7 | verified | verified | link replaced |
| `jumpstart-cee-2021` | Y7.6 | verified | verified |  |
| `kania-kramer-2011` | A3.2 | verified | verified |  |
| `keyes-dual-continua` | Y8.6, Y8.7 | verified | verified |  |
| `learning-for-justice-sjs` | Y5.2 | verified | verified |  |
| `learning-forward-2022` | A1.1*, A1.2* | located | verified, partial fit |  |
| `mapp-kuttner-2013` | F1.7*, F1.8, A2.6 | verified | verified, mixed fit |  |
| `mckinney-vento` | Y1.13, F2.3* | located | verified, mixed fit | component reworded |
| `miechv-performance-measures` | F1.3 | verified | verified |  |
| `muhammad-five-pursuits` | Y2.1*, Y5.2, Y6.3 | verified | verified, mixed fit |  |
| `naaee-k12-2019` | Y6.6 | verified | verified |  |
| `naep-9622-b2d` | Y1.5 | verified | verified |  |
| `nagaoka-2015-foundations` | Y5.1, Y5.2*, Y5.3*, Y5.4*, Y5.6 | verified | verified, mixed fit |  |
| `namle-core-principles` | Y1.7 | verified | verified |  |
| `national-core-arts-standards` | Y1.6, Y2.5 | verified | verified |  |
| `national-reading-panel-2000` | Y1.1* | located | verified, partial fit |  |
| `ncss-c3-2013` | Y6.2 | verified | verified |  |
| `nctsn-core-curriculum` | Y8.8* | located | verified, partial fit |  |
| `ngss-three-dimensions` | Y1.4 | verified | verified |  |
| `niosh-wellbq-2021` | A1.3* | verified | verified, partial fit |  |
| `nsc-hs-benchmarks` | Y1.18 | verified | verified |  |
| `nses-2020` | Y8.4 | verified | verified | citation corrected |
| `octae-employability-skills-framework` | Y7.3 | verified | verified |  |
| `perkins-v` | Y7.1*, Y7.4* | verified | verified, partial fit | read from a full-text copy off the publisher site |
| `samhsa-spf` | Y8.11 | located | **remove** | Planning process, not an outcome framework (CP-01-13 item 5). |
| `samhsa-tic-2014` | A1.2* | located | verified, partial fit | link replaced; read from a full-text copy off the publisher site |
| `sampson-1997` | A3.3* | verified | verified, partial fit | read from a full-text copy off the publisher site |
| `search-40-assets` | Y2.6, Y3.4, Y5.4, Y5.5, Y5.6*, Y6.1, Y8.10 | verified | verified, mixed fit |  |
| `search-developmental-relationships` | Y3.2, Y3.3*, Y3.4* | verified | verified, mixed fit |  |
| `shape-nhes-2024` | Y8.3 | verified | verified |  |
| `shape-pe-2024` | Y8.2 | verified | verified |  |
| `surgeon-general-2022-workplace-wellbeing` | A1.3 | verified | verified |  |
| `usda-hfssm` | F2.2 | verified | verified | link replaced |
| `uw-extension-logic-model` | A2.5 | verified | verified |  |
| `weiss-little-bouffard-2005` | A2.5* | located | partial (abstract only) | link replaced; citation corrected |
| `wida-eld` | Y1.2 | located | verified |  |
| `wioa-20cfr677155` | Y7.4, Y7.5 | verified | verified |  |
| `wioa-20cfr681460` | Y1.17 | (new) | verified | new source |
| `ypqa-pyramid` | A2.1 | verified | verified |  |

## New sources added by CP-10-01

| Code | Source | Fit |
|---|---|---|
| Y1.2 | ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv) | direct |
| Y1.17 | WIOA youth program elements, 20 CFR 681.460(a)(1)-(2) (dropout recovery, diploma or equivalent) | direct |
| Y2.4 | Hulleman, Godes, Hendricks & Harackiewicz (2010), utility value intervention | direct |
| Y7.2 | Conley (2007), Redefining College Readiness | direct |
| Y8.11 | Healthy People 2030 SU-05, adolescent drug use | direct |
| A1.1, A1.2 | Guskey (2002), Levels 2 and 4 of professional development evaluation | direct |
| F1.4 | Harper Browne (2024), CSSP research foundation: parental resilience definition | partial (the document is a research foundation, not the protective-factor brief) |

## Codes with no framework (applied by CP-10-02, Severin 2026-09-27)

These six codes have no framework (DEVIATIONS.md). Verified sources now exist for four of them,
but citing one changes the code's fidelity from codebook-defined to framework or adapted, and
closes or changes its deviation entry. Under S1.6 that is Severin's call. He approved it on
2026-09-27, and CP-10-02 applies it for Y4.12, Y6.4, Y6.5 and A3.1. For Y4.12 the anchor is
CASEL's own "Resisting negative social pressure", verified word for word (partial: it does not
cover avoiding unsafe situations), with NHES Standard 4 alongside. A2.2 and A2.4 stay as they
are, and Severin chose not to name the ADA on A2.4.

| Code | Verified source | Verdict | What it would take |
|---|---|---|---|
| Y4.12 Risk avoidance & refusal skills | National Health Education Standards, Standard 4: "Demonstrate refusal skills to avoid or reduce health risks" | supported | Cite NHES Std 4; close FD-P09 |
| Y6.4 Civic voice, leadership & participation | Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE: political voice indicators | supported | Cite CIRCLE; close FD-P13 |
| Y6.5 Community service & action | Same report: community problem solving, regular volunteering | supported | Cite CIRCLE; close FD-P14 |
| A3.1 Policy & institutional change | Coffman (2009), HFRP advocacy evaluation guide; Reisman, Gienapp & Stachowiak (2007), AECF | supported | Cite both; close FD-P20 |
| A2.2 Participant & family satisfaction | Urban Institute & Center for What Works, Candidate Outcome Indicators: youth satisfaction | partial (youth only) | Stays adapted at best |
| A2.4 Inclusion, accommodations & language access | ADA Title II, 28 CFR 35.130(b)(7) and 35.150(a) | partial (a legal duty, not an outcome) | Stays codebook-defined unless Severin wants the ADA named |

## Other leads, checked and not adopted

- Stein et al. (2003), the CBITS trial, for Y8.8 (partial). It measures PTSD and depression
  symptom reduction, which is narrower than healing. It is one trial, not a framework. NCTSN
  stays, marked partial.
- Lerner et al. (2005) Character for Y6.1 (supported from a full-text copy), and Contribution
  for Y6.5 (partial). These are available if Severin wants the Five Cs back in Y6.
- Carlone & Johnson (2007) for Y5.3, Shogren et al. (2015) for Y5.6, and Keyes (2002) for
  Y8.7 are all partial. The publishers' pages were blocked, so only secondary summaries or
  abstracts could be read.

## Older citation CPs

These are the six citation-only CPs from the 2.x cycle, judged against 3.x.

| CP | Verdict |
|---|---|
| CP-01-01 Muhammad framework name | Already in 3.0: Y2.1, Y5.2 and Y6.3 cite "Muhammad, Five Pursuits". Close as done. |
| CP-01-02 WIOA regulation | Already in 3.0: Y7.4 and Y7.5 cite 20 CFR 677.155 (re-verified). Close as done. |
| CP-01-03 Epstein types | Already in 3.0: F1.2 is Type 4, and F1.9 is Types 3 and 5. The link is fixed here. Close as done. |
| CP-01-08 OCTAE Employability Skills | Already in 3.0 on Y7.3 (re-verified). Close as done. |
| CP-01-13 Verifier corrections | Items 1, 3, 4 and 6 are reflected in 3.0's wording. Item 2 is moot, because Y1.5 has its own sources. Item 5 (drop SAMHSA SPF) is done by CP-10-01. Close. |
| CP-05-01 Domain 8 trauma source | Already in 3.0: the Y8 framework basis names NCTSN, not SAMHSA. Close as done. |

CP-09-06's open check (EC-01: does the OCTAE framework name Technology Use?) is answered: yes,
Technology Use is one of its five Workplace Skills (verified). CASEL's "Showing leadership in
groups", cited for Y4.7 in CP-01-06 but never recorded, is verified and added to Y4.7's component.

CP-09-03's open check (whether Conley's Key Transition Knowledge covers the college-going process)
is now answered: yes (Conley 2016 and 2007, both verified).
