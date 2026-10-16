# Batch 3 (Y8, F1, F2): taxonomy and methods review (2026-10-16)

Reviewer: taxonomy (independent). Read: findings, reconciliation, verification table,
STANDARDS, DEVIATIONS, CONFUSIONS, research-basis, Y8/F1/F2 data, cited design gold, real-run
counts (unique texts). Anything not SUPPORTED/PARTIAL in the table is a lead.

## 1. Overall judgement

The Part → domain → category → code hierarchy holds for all three domains: Part (who
changes) does the most work, and it decides most of the hard cases below. The weak level is
the category. The research basis says categories are "taken from the domain's anchor
framework". None of these three domains has a single anchor:

- **Y8:** A is a health-education topic list (SHAPE, and HECAT if adopted). B is Keyes for
  Y8.6 and Y8.7 only; Y8.8 and Y8.9 are topical additions. C is YRBS for Y8.11 and Y8.12, plus
  Search Institute (Y8.10) and CJCA/OJJDP (Y8.13). Justice in a health domain is a pragmatic
  grouping (fewer domain boundaries), not a framework's.
- **F1:** A mixes CSSP, Epstein and MIECHV. B is CSSP. C is Ascend/WIOA plus CSSP/IDEA. D is
  Epstein and Mapp & Kuttner. Only B and D are single-framework categories.
- **F2:** Ascend's Economic Assets covers income, housing and nutrition together (f1-08
  excerpt), so the A/B split is the codebook's own.

That is defensible. The methods problem is what the batch does to it: every researcher
closes gaps by adding a framework at code level (HECAT, MHMD, MTF, OJJDP, WIOA, SNAP-Ed,
CFPB, RHY, HEARTH, SDOH-04). S1.6 measures fidelity against "the domain's anchor"; if every
verified source becomes an anchor, the test is vacuous. **Smallest fix:** a named anchor line
per category in research-basis.md ("codebook-grouped" where true); new sources join it on
purpose or stay supporting. Enum 0, no STANDARDS edit.

Second pattern: fallback FDs often name the wrong S1.6 case: Y8.7 "sector widening" (no
population involved), Y8.13 "observability" (recidivism is observable; completion is an added
indicator), Y8.11/Y8.12 "merged components" (coders easily tell knowledge from use), F2.1
"independent youth" (NYTD already covers it). The case matters: merged-components is not
counted.

## 2. Verdicts

### Y8

| Finding | Verdict | Reason | Smallest change I accept |
|---|---|---|---|
| A5: HECAT 2021 as category-A framework (y8a-01 PARTIAL; HBOs y8a-02..07, -22 SUPPORTED) | ACCEPT WITH CHANGES | The HBOs are tier-A youth behaviors that fit Y8.1, Y8.3 and Y8.5. The index page defines nothing, and the MEH, AOD, Tobacco and Violence modules were never filed or verified. | Category-A anchor *by HBO* (with SHAPE PE for Y8.2, NSES for Y8.4); no claim on B or C until those HBOs verify. |
| A1: demote WSCC to context | ACCEPT | Its ten components are school services, not youth outcomes. | Drop from Y8.1 now and Y8.9 once MHMD-03 lands. Merger note unverified and optional (S1.4 keeps "ASCD"). |
| A3, R-02, R-12: YRBS name gap, two questionnaires | ACCEPT WITH CHANGES | Item numbers differ between the State/Local and National questionnaires (verifier-corrected titles). | Two registry entries, or one entry with two URLs and each item pinned to its own instrument. Add "CDC Youth Risk Behavior Survey" to `codebook_names`. |
| Y8.1 re-cite; screen time partial (PA-R02 PARTIAL) | ACCEPT | The actor is the parent, not the youth, so this is a fit gap, not a population gap. Decision C does not apply. | Keep PA-R02 as partial. H086 and S207 keep screen time in scope. |
| Y8.2 fine motor via ELOF (R-09) | REJECT ELOF; DEFER the fix | Fine motor is not age-bound by definition, and CP-10-01 removed ELOF from Y1.10 under the same rule. Decision C is not the issue: the code names no population. The gap is the construct (SHAPE PE has no fine motor). | After PR #66: FD, codebook-defined, for the fine-motor clause (S192). Owner option: route preschool fine motor to Y1.8 (ELOF anchors it); flips S192 and reopens CP-11-03. |
| Y8.3 NHES Std 3 and 1.x.3 (SUPPORTED); HECAT S HBO 4, 7 (PARTIAL) | ACCEPT | Same publisher, component-level. | As proposed. Record the HECAT links as partial. |
| Y8.4 add puberty (y8a-20 SUPPORTED) | ACCEPT | A widening inside the cited NSES strand (S2.2 step 3). | Include line only. |
| Y8.5 HECAT PHW 9-11, OH-08, MICH-17, IID-08 | ACCEPT WITH CHANGES | IID-08 and HBO 11 are PARTIAL. MICH-17 is early-childhood by definition, which the rule allows. | MICH-17 supports only infant/toddler screening (S061). Record HBO 3 for vision (verifier note). |
| Y8.6 CDC conduct problems (y8b-01 SUPPORTED); R-04 | ACCEPT WITH CHANGES | Diagnostic text, not an outcome framework; without a boundary Y8.6 becomes home for any "improved behavior", which Keyes' illness continuum does not describe. | Cite it as partial for clinical conduct symptoms. Add exclude: "school behavior incidents or general behavior → Y1.14 / Y4 domain-only". Land the exclude after PR #66, because Y1.14 is in it. |
| Y8.6 add suicidal thoughts and self-harm | DEFER | The fit is logical, but no claim was filed or verified ("including suicide" appears only in y8a's text). | File a YRBS suicide-item claim; then add it to the include. |
| Y8.7 drop "restored" or log FD | ACCEPT WITH CHANGES | Neither is needed, and "sector widening" is the wrong case. Keyes' emotional well-being is positive affect; "calmer and more restored" (S144, adjudicated Y8.7) is positive affect. | Reword to "positive feelings or feeling well". Re-run S144. Keyes 2006 is PARTIAL (title only): a lead. |
| Y8.8 pin NCTSN concepts 5 and 10 (y8b-04 PARTIAL) | ACCEPT WITH CHANGES | Concept 10 is about culture, not recovery. | Pin concept 5 only. Correct the title ("...Responses in Childhood"). Fit stays partial. Fix "located" in `basis`. |
| Y8.9 MHMD-03, -06, YRBS Q94 (SUPPORTED) | ACCEPT | Direct, tier A. | MHMD-03 becomes primary. |
| Y8.10 stale "PR #31, in flight"; YRBS Q13 proxy | ACCEPT | Process text reaches the prompt. | Delete it, and the same note at data.ts:528 (Y3.1, missed by y8b). Lines 244 and 779 belong to the Y1/Y4 owners. Q13 is partial. |
| Y8.11 MTF perceived risk (y8b-10 PARTIAL); knowledge/intentions FD (R-03) | ACCEPT MTF; REJECT merged-components | See §3. | MTF supports "perceived risk" only. Knowledge and intentions: §3. "Intentions" cannot be dropped, because S065 is the code's own example. |
| Y8.12 re-point YRBS items; CDC youth violence (SUPPORTED) | ACCEPT | Component-level, tier A. | As proposed. "Warning signs" (S248): §3. |
| Y8.13 title fix, NCJRS URL, rename note, OJJDP 2017 and 2018 (SUPPORTED); FD for completion | ACCEPT citations; ACCEPT WITH CHANGES on FD | CJCA full text unverified (y8b-14 PARTIAL); FD case is wrong. | OJJDP (tier A) primary for diversion and reentry; completion clause (S018, S189) logged codebook-defined. |
| R-25 registry tier and publisher nulls; R-13 HP2030 banner and PA-R02 watch | ACCEPT | Hygiene and backlog. | `build_registry.py`; one backlog watch item. |

### F1

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Mapp & Kuttner superseded; re-cite V2 (f1-12 PARTIAL) | ACCEPT the note; REJECT the re-cite now | 2013 stays accurate (S1.4). V2's authorship and year are unconfirmed, and the copy is on a secondary host. | Note only. |
| Epstein via Corwin 2019 (f1-03, -05 SUPPORTED) | ACCEPT | Moves the Epstein components to verified. | As proposed, coordinated with the A2 owner (A2.6 shares the entry). |
| F1.1 CSSP Core Meanings (f1-02); F1.4 (f1-01) | ACCEPT | Component text replaces bare factor names. | As proposed. "Parenting confidence" (CSSP Resilience) stays in F1.1 as a noted wrinkle, not an FD: both codes are CSSP. |
| F1.2 routines (f1-14 PARTIAL); WIOA 3272(9) (f1-10 PARTIAL) | ACCEPT WITH CHANGES | Both lean toward F1.1, per the verifier. | Epstein T4 primary. Routines partial. Skip WIOA. |
| F1.3 SNAP-Ed MT1 (f1-11 SUPPORTED); 2036a (PARTIAL); R-05 | ACCEPT WITH CHANGES | Termination unverified; S1 does not require funding. | Cite MT1; one nutrition rule: youth's own eating → Y8.1; household eating practice → F1.3; having/accessing food → F2.2. Skip 2036a. |
| F1.6 WIOA 3272(1), (6) (SUPPORTED); Ascend Economic Assets (PARTIAL); DEA 1721(8) (PARTIAL) | ACCEPT WIOA; REJECT Ascend for F1.6 | Economic Assets is F2's anchor; citing it here blurs the F1.6/F2.1 skill-vs-status line. | WIOA plus DEA; "financial skills" partial. Decision C: "older adults" is covered (WIOA any adult; DEA aging individuals), no FD. |
| F1.7 drop Mapp & Kuttner link | ACCEPT | A partial link adds nothing; two direct links remain. | As proposed. |
| F1.8 keep; Epstein T2 partial (f1-04) | ACCEPT | | Read T2 as supporting the communication clause only. |
| F1.9 Flag 1, CP-09-01 (R-15) | DEFER to PR #62 | Moving aggregate attendance to A2.5 applies the output-vs-outcome axis (CF-009), not a construct departure. | One line in CP-09-01 citing CF-009; no FD. |
| F1.9 Flag 2, S176 | Owner only | By the Part axis, "The program will create..." is Part A (A2.6). The adjudication contradicts the Part rule. | Ask Severin; gold untouched. |
| Child-welfare-entry prevention (R-17) | DEFER | 2 texts. | Owner: F1 (CSSP's stated purpose). Code F1 domain-only until rows accumulate. |

### F2

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| Ascend as anchor; demote CSSP Concrete Support (R-06) | ACCEPT | The verifier confirms CSSP names no income or benefits. | Name Ascend as F2's anchor. State that the A/B split is codebook-defined. |
| F2.1 NYTD (f2-01 SUPPORTED) | ACCEPT | CF-018 already rests on exactly this. | Add the support row. |
| F2.1 CFPB well-being (f2-02 SUPPORTED) | ACCEPT WITH CHANGES | An adult state scale. It must not pull youth money skills in (CF-001, Y7.6). | Keep the F2.1 exclude; add a CF-001 note. |
| F2.1 Medicaid, AHS-01 (PARTIAL) | ACCEPT as partial | The family case needs F2.1. | No merged-components FD. |
| F2.2 USDA nutrition security (PARTIAL); NWS-01 (SUPPORTED) | ACCEPT WITH CHANGES | The title is taken only from the URL. | Cite with the verifier-corrected title. Narrow to "enough food" only if the PDF is withdrawn. |
| F2.3 RHY 1351 (SUPPORTED) primary; SDOH-04; HEARTH (PARTIAL); drop McKinney-Vento (R-08) | ACCEPT; drop rather than add 11434a | 11434a is a definition; dropping leaves Y1.13 and PR #66 untouched. | Remove F2.3's link only. Decision C: RHY and SDOH-04 cover F2.3's named populations; no FD. |
| Bare "stability" hint | ACCEPT WITH CHANGES | f2's wording is circular: a statement that names a material result gets a code. | "F2 codes need a named money, food or housing result; bare 'stability' with no named domain stays uncoded." |
| Adult volunteering (R-07, R-20) | ACCEPT no new code | The Part axis settles it: volunteers serving youth are Part A, so senior volunteers' quality of life → A1.3; caregivers → F1.9; other civic volunteering → uncoded. | A hint only. Do not cite AmeriCorps CEV (PARTIAL) on F1.9. |

## 3. Topic versus kind of change (R-03, R-18, R-19)

The codebook already routes topic knowledge to the topic code (Y8.4 "knowledge and behavior";
Y8.3 excludes sexual-health and substance-risk knowledge; Y8.11 knowledge of risks; Y8.12
warning signs), following "kind of change as a field, not a domain". No framework states that
rule, so the S1.6 status of these clauses is an owner question. Merged-components does not fit.

- **Smallest honest path:** file HECAT AOD and Violence Prevention claims (y8a said they map,
  filed none). If they verify, no FD. If not, log Y8.11 and Y8.12 as adapted (counted).
- **Write the rule:** topic knowledge → topic code; health knowledge with no topic code → Y8.3.
  So mental-health literacy (R-18) → Y8.3, since Y8.6-Y8.9 are state/service codes.
- R-19 (generic risk-behavior incidence → Y8 domain-only): consistent; ACCEPT, Y8 owner confirms.

**Drift if HECAT fails:** Y8.11, Y8.12, Y8.13, Y8.2 = 4/13 (31%); one more crosses a third.
Y8.7 adds none under my wording. F1 0/9 and F2 0/3 with the accepted citations.

## 4. What the researchers missed

1. **Anchor sprawl** (§1): no one asked whether frameworkBasis should grow; every finding grows it.
2. **S4.9 small denominators** (R-10): in F2 one FD is 33%, two are 67%. Flag to Severin
   (STANDARDS is his).
3. **Stale CONFUSIONS.** CF-003, CF-008, CF-019 use 2.x numbers. CF-008 (Type 3 → family
   relationship; Types 5-6 → organization) contradicts live F1.9 and A2.6. Epstein's types are
   school practices; the Part axis splits each by who acts. Restating CF-008 in 3.x terms is
   the real fix behind the S176 conflict.
4. **data.ts:528** (Y3.1) carries the same stale PR #31 note into the prompt.
5. **F1's name vs scope:** non-caregiver adults (H062, H078) sit in "Family & Caregiver";
   WIOA now grounds them; the name should follow the description ("and other adult participants").
6. **Volume:** Y8.5 (1/21), Y8.2 (3/20) and F1.4 (0/0) barely move real coding. Prioritize
   Y8.1, Y8.3, Y8.7, F1.9 and F2.1.
