# CP-10-01: Re-verify every 3.x source and fix what the check found

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Source lines: Y1.2, Y1.17, Y2.4, Y7.2, Y8.11, A1.1, A1.2. Basis notes: Y1.10, F1.4, A2.4. Registry: every 3.x source. No definition, include, exclude, example or rule changes. |
| Version bump | PATCH (3.1.0 → 3.1.1) |
| Requirement served | R1 frameworks |
| Status | draft, for Severin's review |
| Enum cost | +0 (160 → 160; no code is added, removed or renamed) |
| Framework deviation | none. No code changes its anchor framework. The sources added sit beside each code's existing anchor, and the one removal (SAMHSA SPF) was never Y8.11's anchor (CDC YRBS is). |

## Problem

The public explorer shows each code's sources with a status. As of 3.1.0, 15 of the 78 sources
were only "located", and many "verified" ones had been checked by the agent that proposed them,
which STANDARDS S4.2 does not allow. The registry also said nothing about how well a source fits
a code: a verified source counted as full support even when it covers only half the code.

The re-verification (`codebook-refinement/v3/source-verification-2026-09-27.md`) checked all 133
source-to-code links with independent verifiers. It found:

- the Epstein link now serves online-casino content;
- SAMHSA's Strategic Prevention Framework is still on Y8.11, although CP-01-13 said to drop it;
- the ED/DOJ 2015 English learner letter in A2.4's notes was rescinded in August 2025;
- Head Start ELOF is on Y1.10, against Severin's early-childhood scope rule;
- 42 links fit the code only partly;
- 12 links point somewhere other than the document the verifier read, and five citations need
  correcting (for example, NSES is by the Future of Sex Education Initiative, and the Conley
  "Four Keys" citation named no document).

## Change

**Source lines (these reach the prompt).** Only citation text changes.

| Code | Before | After |
|---|---|---|
| Y1.2 | WIDA English Language Development Standards Framework (2020 edition). | … ; ESSA English language proficiency indicator, 20 U.S.C. 6311(c)(4)(B)(iv). |
| Y1.17 | ESSA four-year adjusted cohort graduation rate, 20 U.S.C. 6311(c)(4)(B). | … ; WIOA youth program elements, 20 CFR 681.460(a)(1)-(2) (dropout recovery toward a diploma or recognized equivalent). |
| Y2.4 | Eccles and colleagues, expectancy-value theory (utility value). | … ; Hulleman et al. (2010), utility value intervention. |
| Y7.2 | Conley, Four Keys: Key Transition Knowledge & Skills. | … ; Conley (2007), Redefining College Readiness (contextual skills and awareness). |
| Y8.11 | CDC Youth Risk Behavior Survey (tobacco, alcohol and other drug use); SAMHSA Strategic Prevention Framework. | CDC Youth Risk Behavior Survey (tobacco, alcohol and other drug use); Healthy People 2030, SU-05 adolescent drug use. |
| A1.1 | Learning Forward (2022), Standards for Professional Learning. | … ; Guskey (2002), Level 2 participants' learning. |
| A1.2 | Learning Forward (2022), Standards for Professional Learning; SAMHSA (2014), trauma-informed approach. | Learning Forward (2022) …; Guskey (2002), Level 4 participants' use of new knowledge and skills; SAMHSA (2014) … |

**Basis notes (data only, not in the prompt).** Y1.10 drops Head Start ELOF. A2.4 drops the
rescinded ED/DOJ letter and records the ADA Title II check. F1.4 records the verified CSSP
definition. Each touched note says "Re-verified 2026-09-27 (CP-10-01)". Basis notes on other
codes keep their older status tags; the registry is now the record of each source's status.

**Registry.** `codebook-refinement/v3/build_registry.py` now applies
`verification_2026_09_27.py` after it assembles the registry. That script:

- sets each source's status from the verifier's verdict (83 verified, 1 located);
- records each link's `fit` (98 direct, 42 partial), its excerpt and the verifier's note;
- replaces 13 links and corrects 5 citations;
- rewords 5 components to match what the source says;
- drops the SAMHSA SPF;
- adds 7 new sources: ESSA 6311(c)(4)(B)(iv), WIOA 20 CFR 681.460, Hulleman et al. 2010,
  Conley 2007, Healthy People 2030 SU-05, Guskey 2002 and Harper Browne 2024.

The registry grows from 78 to 84 sources.

**Explorer.** A source shown on a code card now uses that link's own excerpt. A partial fit
gets a "Partial fit" line with the verifier's note. The landing page's "sources checked against
the original text" count goes from 63 of 78 to 83 of 84.

## Sources

The new sources, each checked by a verifier that did not propose it:

| Registry ID | Status | Component relied on |
|---|---|---|
| essa-6311-c4-elp | verified | progress in achieving English language proficiency |
| wioa-20cfr681460 | verified | dropout recovery toward a diploma or recognized equivalent |
| hulleman-2010-utility-value | verified | perceived utility value |
| conley-2007-college-readiness | verified | contextual skills and awareness |
| hp2030-su05 | verified | adolescent past-month illicit drug use |
| guskey-2002-pd-evaluation | verified | Levels 2 and 4 |
| cssp-sf-yt-research-foundation-2024 | verified, partial fit | parental resilience definition |

## Verification requests

None open. Every claim in this CP has a recorded verdict in
`v3/source-verification-2026-09-27.json`.

## Decisions for Severin (not made by this CP)

1. Four codebook-defined codes now have verified sources: Y4.12 (NHES Standard 4), Y6.4 and
   Y6.5 (CIRCLE 2002), and A3.1 (Coffman 2009; Reisman et al. 2007). Citing them would move
   those codes to Framework and close FD-P09, FD-P13, FD-P14 and FD-P20. That would be a
   follow-up CP.
2. Should A2.4 name ADA Title II? It is a legal duty, not an outcome framework, so the code
   would stay codebook-defined either way.
3. The six old citation-only CPs (CP-01-01, 01-02, 01-03, 01-08, 01-13, 05-01) are already
   carried by 3.0 or by this CP. Close them.

## Gold impact

None. No definition, rule or example changes. The prompt changes only in the seven source lines
above, so no scoring run is needed (citation-only).

## Judge result

Not run. A citation-only PATCH with no coding text change has nothing for the regression judge
to score.
