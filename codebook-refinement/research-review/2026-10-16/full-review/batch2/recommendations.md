# Batch 2 research review (Y5 Identity, Y6 Character & Civic, Y7 Career): recommendations

Date: 2026-10-16. Scope: 20 codes, codebook 3.1.4. The inputs were the reconciliation (R-01 to
R-26), the verification table (40 claims: 26 SUPPORTED, 14 PARTIAL, none failed), and four
reviews: T (taxonomy), F (fidelity), P (practitioner) and D (devil's advocate). Nothing here
edits the codebook, the registry, gold or PRs #62 and #66. Verdicts: A accept, AC accept with
changes, R reject, Df defer.

**What reaches the prompt.** `youthOutcomesV3.ts` prints each code's definition, include,
exclude, useInstead and **`source`**, and each domain's **`frameworkBasis`**, into the coding
prompt. It does not print `basis`, `fidelity`, the registry or DEVIATIONS.md. So each CP below
has two parts. Part **(a)** is data only and needs no eval. Part **(b)** changes Source or
frameworkBasis lines and needs the two-run design-set gate.

## 1. Summary

1. **What holds.** All Y5-Y7 sources hold, none is misattributed, and the anchors stay.
2. **What is wrong.** Adjudicated gold depends on text with no source: Y5.6 self-advocacy, Y5.5
   faith, Y5.3 athlete/reader/writer, Y6.1 forgiveness, Y6.4 efficacy and councils, Y6.6
   connection to nature, Y7.5 and the Y7.7 documents. Metadata is stale: the Nagaoka publisher,
   the LFJ edition, ISTE 2016, and Lerner, Shogren and Carlone & Johnson in `basis`. FD-P13's
   closure overclaims.
3. **Drift, logged today → after the act-now CPs.** Y5 stays at 1/6 (Y5.5 closes, Y5.3 opens).
   Y6 goes from 0/7 to 1/7 (Y6.6). Y7 goes from 1/7 to 0/7, and to at most 2/7 after the PR #62
   items. F's honest count today (Y5 2/6, Y6 3/7, Y7 3/7) puts Y6 and Y7 over a third (S4.9), so
   these CPs go first.

## 2. Act now

Each item is a citation-and-deviation CP (CITATION_FIX, with the DEVIATIONS log), PATCH, enum
+0. There are no hints yet: every candidate needs two gold rows per side first (S3.1). The (a)
parts land now. All the (b) parts go in **one Source PATCH after PR #62 merges**, with one
two-run gate (D; decision D).

### CP B2-Y5

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 1 | Y5.6 | Self-advocacy (S032, S236, H060) has no source, and Shogren is unregistered. | y5-05 SUPPORTED: "instruction in self-advocacy, which may include peer mentoring." | A/AC/A/AC | (a) Link 29 U.S.C. 733(b)(5), re-fetched on govinfo (B2-4), and drop Shogren. (b) Put it on the Source line. | none (C: IEPs are inside 733's population) | (b) |
| 2 | Y5.5 | FD-P12's trigger is met. | y5-14 SUPPORTED, Search Spiritual Development: "three core developmental processes". y5-01 SUPPORTED, Catalano: "beliefs in a higher power" | All close it. Source: D y5-14; T, P Catalano | (a) Close FD-P12 and note that FD-005's trigger is met. Set `framework` and link y5-14 (the publisher is already in frameworkBasis). (b) Put it on the Source line. Log no merged-components entry (B2-2). | changed (closed) | (b) |
| 3 | Y5.3 | Athlete, reader and writer have no source. Nagaoka's "profession" is a contrast case. | y5-07 SUPPORTED, Farrington 2019: "identities as artists". y5-06 PARTIAL (host only), NRC 2009 Strand 6 | AC ×4 (D: no FD) | (a) New FD (sector widening), set `adapted`, drop Carlone & Johnson, and keep Nagaoka as supporting only. (b) Source line: Farrington, plus NRC once re-verified on nap.edu. Do not narrow ("readers and writers" is a real text). | new (counted) | (b) |
| 4 | Y5.2 | LFJ has no edition or year. "Racial" rests on Nagaoka (partial), not Muhammad. | y5-11 SUPPORTED: "positive social identities based on their membership in multiple groups" | A ×4 | (a) One LFJ string as printed (2022, Second Edition, "The Southern Poverty Law Center, Inc."), shared with Y4.5 (R-05, R-15). Name Muhammad in `basis`. (b) The year. Sexual and gender identity need no FD (B2-1). | none | (b) |
| 5 | Y5 | The Nagaoka publisher name is wrong. | y5-13 SUPPORTED: "©2015 University of Chicago Consortium on Chicago School Research" | A ×4 | (a) Publisher plus a rename note, as in CP-11-01. Add a watch line for the fall-2026 update. | none | no |
| 6 | Y5.4 | `basis` names "linguistic assets", which the registry does not support for Y5.4 (R-04). | y5-10 PARTIAL | AC; F, D drop; P keep | (a) Drop it, and do not add it to Y5.2. Refresh "(located)" in Y5.4-Y5.6. | none | no |

### CP B2-Y6

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 7 | Y6.6 | "Connection to nature" (S045; 17/10 real texts) has no source. `basis` admits this, yet `fidelity` says framework. | y6-05 PARTIAL, Tbilisi: "awareness of and sensitivity to the total environment" | AC ×4 (D: fetch NAAEE first) | (a) New FD (codebook-defined element), set `adapted`. First have a verifier fetch the full NAAEE Guidelines; if they cover it, no FD. Tbilisi is optional, at partial. | new (counted) | no |
| 8 | Y6.4 | CIRCLE covers only the behavioral core. Efficacy (H030) and councils (S039, S211) have no source. | y6-03 PARTIAL, Search: "given useful roles on the community". y6-02 PARTIAL, Watts: "perceived capacity to effect social and political change" | Search: all four. Watts: T, F, P (D R). FD: T, P yes; F, D no | (a) Make FD-P13's closure note name what CIRCLE covers. Link both at partial. (b) Put both on the Source line. No FD because the source is broader (B2-3). Leadership waits for PR #62 (B2-7). | none (T, P dissent) | (b) |
| 9 | Y6.1 | Forgiveness (S167) has no source. Lerner is unregistered, and the status is stale. | y6-07 SUPPORTED, VIA: "I forgive others when they upset me" | A/AC/AC/AC | (a) Drop Lerner and link the Forgiveness component only. (b) Put it on the Source line, not in frameworkBasis (F dissents). Sportsmanship and faith: no FD, no rewording (B2-1). | none (P dissents) | (b) |
| 10 | Y6.3 | `basis` still has the "[VERIFY]" note. | y6-01 SUPPORTED, Watts: "social analysis and moral rejection of societal inequities" | A/A/A/AC | (a) Link it and remove the note. (b) Add it beside Muhammad. | none | (b) |
| 11 | Y6.7 | ISTE 2016 is superseded. | y6-06 SUPPORTED, ISTE 2024 1.2.d: "protect their digital privacy" | A/A/A/AC | (a) Add a 2024 entry and keep 2016 as history. (b) Source line "ISTE (2024) 1.2.b, 1.2.d", and update the frameworkBasis year. Do not cite 1.2.a or 1.2.c. | none | (b) |

### CP B2-Y7a (Y7.4-Y7.7, outside PR #62)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 12 | Y7.7 | FD-P15's trigger is met. The documents are not in 677(a)(1). | y7-13 SUPPORTED, Casey: "regardless of whether they are in foster care". y7-18 SUPPORTED, 675(5)(I): "certified copy of the United States birth certificate". y7-15 SUPPORTED (IDEA) | Casey AC ×4. Close: P, D; T on the tier call; F rescopes to documents. IDEA: D R | (a) Close FD-P15 and set `framework`. Link Casey (Daily Living), 675(5)(I), and IDEA as supporting. (b) Source line: Chafee first, then Casey, then 675(5)(I) (B2-5). No FCS (y7-17), and no time management (R-06 → Y4.3). | changed (closed; F: still counted) | (b) |
| 13 | Y7.5 | "Competitive integrated employment" (S151) has no source. | y7-11 SUPPORTED, 705(5): "work that is performed on a fulltime or part-time basis" | A ×4 | (a) Link it. (b) Put it on the Source line. | none | (b) |
| 14 | Y7.4 | The Perkins citation is a host-only partial. | y7-08 SUPPORTED: "technical skill proficiency or a recognized postsecondary credential". y7-09 SUPPORTED: "Internships and job shadowing" | A ×4 | (a) Use the govinfo URL and add the links. (b) Name 681.460(a)(3)-(4). | none | (b) |

### After PR #62 merges (CP B2-Y7b; notes for PR #62)

| # | Code | Finding | Evidence | T/F/P/D | Smallest change | FD | Prompt |
|---|---|---|---|---|---|---|---|
| 15 | Y7.1 | "Aspiration" has no source. Narrowing it would flip H007 and leave career aspiration with no home (R-09). | y7-02 SUPPORTED, 2302(7)(A): "career awareness exploration opportunities and planning". y7-01 and y7-03 SUPPORTED | Narrow: F, P, D R; T Df | Use the govinfo URL and add the links, keeping the wording. If (7)(A) is not accepted as covering interest, log a codebook-defined FD (B2-8). | none or new | (b) |
| 16 | Y7.2 | Resumes and interviews have no source, and S063 depends on them. | y7-04 and y7-05 PARTIAL (college side only) | "Interview practice": T AC, F Df, P R, D R | Make no include change. Give a verifier Conley's work side (R-18). If nothing verifies, log a codebook-defined FD. | possible new | no |
| 17 | Y7.3 | Note for PR #62's verifier and judge. | y7-06 SUPPORTED, 3272(17): "digital literacy skills". Casey y7-07 rejected by all four | Note only, all four | Cite 3272(17). Drop "or daily life" (T, F) or write "work or study" (D). Test the three bare "digital literacy" texts that go to Y1.4 (P). | per PR #62 | per PR #62 |

## 3. Worth a later cycle

| Item | Why later |
|---|---|
| Catalano as *supporting* frameworkBasis for Y5, and its self-determination excerpt for Y5.6 | Verified content, but the year and author/publisher line fail S1.4 until confirmed (T, F; D rejects). It reaches the prompt. |
| Resilience CF: coping → Y4.2, belief in handling challenges → Y5.4 | About 38 real texts, and the blind coders lean Y4.2 (P). There is no gold. Do not trigger on "setbacks" (S243). One CF with batch 1's y4a. |
| Enforce splitting of compounds ("confidence and resilience", skill lists) | P: as many rows as any tie-breaker. This is an eval lead. |
| Y5.2 "sexual" → "sexual orientation"; NASEM 2019 with its gender-and-sexuality sentence re-recorded as the excerpt | P lead (1 row); D and F on the excerpt. |
| One CASEL registry entry (R-03) and a table assigning each Self-Awareness bullet to Y4 or Y5 | T. This is the root of R-02, R-04 and R-14. Do it with batch 1. |
| Y6.3/Y6.4 CF (analysis vs efficacy) | T, once both cite Watts. |
| Y6.5 Search "Service to others"; Y7.6 681.500 | Optional; D calls them churn. |
| 681.460 in Y7 frameworkBasis | Supporting only. D: fold it into the existing WIOA item. |
| Y7.4 entrepreneurship; bare "life skills" → Y7.7 include (P); Y7.2 exclude for journalism interviewing (P) | Each needs design gold first, or has only a couple of rows. |
| Y7 category C description; research-basis.md says the Y5-Y7 categories are codebook-defined and drops the Lerner paragraph | T. Display and docs only. |
| Y6.5 pointer for adult volunteering | After batches 3 and 4 settle F vs A1.3 (R-21). |

## 4. Rejected, and why

- **CASEL bullets for Y5.1 (y5-12) and Y5.2 (y5-10).** PARTIAL fits that collide with Y4.1
  and Y5.4. Rejected by all four.
- **Nagaoka for Y5.3 (y5-08).** It is the report's contrast case (T, F).
- **Damon (y5-15).** Narrower than the code, and redundant (T, D).
- **Catalano or 681.460 as an anchor.** Program and service lists, not outcomes (all four).
- **An FD for Y6.1 sportsmanship and faith.** These are values practised in a setting (T, F,
  D); P dissents.
- **Renaming Y6.4 or dropping "leadership".** MAJOR, and it would move about 14 texts (T, P,
  D).
- **VIA in frameworkBasis.** It overlaps Y4 (T, D); F dissents.
- **Narrowing Y7.1.** It would flip H007 (F, P, D).
- **A Y7.2 "interview practice" include.** It rests on misread journalism texts (P, D).
- **Casey "online safety" for Y7.3.** It blurs Y6.7 (all four).
- **FCS (y7-17) and time management in Y7.7.** The component was misquoted, the copy is on a
  secondary host, and time management stays in Y4.3 (T, P, D).
- **y7's bare "life skills" → domain-only Y7.** It contradicts CP-09-09 (all four).
- **ISTE 1.2.c.** Screen time belongs to health (R-25).

## 5. Unverified leads

- CIRCLE (2002) p. 37, "Engaged Worldview": may cover Y6.4 efficacy (D).
- NAAEE full K-12 Guidelines, for connection to nature (D).
- Conley Four Keys work side, for Y7.2 (R-18).
- Catalano's resilience construct, year and peer-reviewed versions; Harvard EASEL; Peterson &
  Seligman; Lerner; Shogren; Carlone & Johnson.
- The CASEL Self-Awareness definition for Y5.1, and y4a's unrouted CASEL bullets (honesty →
  Y6.1; agency → Y5.6; systems → Y6.3).
- ISTE 1.2.a; WIOA 681.460(a)(12); AmeriCorps CEV (f2-11); Nagaoka's fall-2026 update.

## 6. Decisions for Severin

- **C (extended).** Should C cover sector populations (foster care, disability) as well as age?
  Recommended: yes, as the pilot worded it: an FD is needed only when the code's own text names
  a population outside its source (T, P, D). F would limit C to age, which keeps a counted FD
  for the Y7.7 documents.
- **D.** Land the (a) parts now. Land the (b) parts across Y5-Y7 as one PATCH after PR #62,
  with one gate.
- **B2-1.** A named instance of a cited general category (sexual orientation within LFJ's
  "multiple groups"; sport as a setting for honesty) is not a departure, provided the registry
  quotes the category. Recommended: yes (T, F, D; P dissents on Y6.1).
- **B2-2.** For Y5.5: close FD-P12 on Search Spiritual Development, with no merged-components
  entry (F, D). Recommended first. The alternative is Catalano plus merged-components (T, P).
- **B2-3.** A PARTIAL fit where the source is broader than the code is not a departure (F).
  Recommended: yes. This decides Y6.4 (no FD) and Y6.6 (FD).
- **B2-4.** Cite the official copy (govinfo, NAP, unesdoc). A secondary host is allowed only
  with a recorded bibliographic match. Recommended: yes, and re-fetch 733(b)(5). The registry is
  inconsistent on Cornell LII today.
- **B2-5.** For Y7.7: Chafee (tier A) first, Casey (tier D) as cross-sector support, and close
  FD-P15. Recommended: yes.
- **B2-6.** Adjudicate two design rows per side for resilience first, then for "life skills"
  and entrepreneurship. Recommended: yes.
- **B2-7.** Keep "leadership" in Y6.4's name with no FD. After PR #62, add rule 7 and an
  exclude pointer to Y4.7 (T, F, D). Recommended. P would log an FD.
- **B2-8.** For Y7.1 after PR #62: keep the wording, and log a codebook-defined FD if (7)(A)
  does not cover interest. Never narrow (H007). Recommended.

## 7. Gold rows that constrain these changes

These rows come from the 345-row design file; H rows are its old held-out rows. No fresh
held-out row was read.

- **Y5:** S032, S236, H060 (Y5.6); S016, S250 (Y5.5); S036 (Y5.3); S129 (Y5.2); S243, S158
  (Y5.4 resilience trigger); S004, S059, S253 (leadership is not Y5.3).
- **Y6:** S012, H015, S180, S125, S145, S167 (Y6.1); H030, S039, S211, S136 (Y6.4); S059
  (community leadership → Y4.7); S045, S247 (Y6.6); S107 (Y6.7); S123 (Y6.3).
- **Y7:** H007, S152, S115, S099 (Y7.1); S063, H019 (Y7.2); S151 (Y7.5); S120, H046, H048,
  S162, S224 (Y7.7); S187 (nutrition stays in Y8.1).
- No act-now item changes a definition, include or useInstead, so none should flip an
  adjudicated row. The batched gate in (b) confirms this.
