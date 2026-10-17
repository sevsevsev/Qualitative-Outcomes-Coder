# Open edge cases and codebook gaps for the expert panel

Compiled 2026-10-16 from the 3.1.5 research review, the CP-11/CP-12 proposals, the notes for PR #62, the
proposed design rows, the review-desk corrections and the 2 October real-run review. Codebook 3.1.5
(`youth_outcomes_v3`). This list asks questions; it recommends no answers.

**Left out on purpose.** Everything DECISIONS.md settled (G1 to G16 and the per-domain decisions, all on the
recommended option) unless a later finding reopened it; the Y8 framework (anchor) re-review itself, which is a
separate job (Y8 coding edge cases are included). Where a decision settled the rule but the gold rows behind it
are still unruled, the rows are listed once in E-52, not as separate questions.

**Path shorthand.** `RR/` = `codebook-refinement/research-review/2026-10-16/full-review/`.
`PILOT/` = `codebook-refinement/research-review/2026-10-16/` (the Y1 pilot). `CP/` = `codebook-refinement/proposals/`.
`RRV/` = `/mnt/project-files/real-run-review/`. `DESK/` = `/mnt/project-files/review-desk/corrections-2026-10-16/`.

**Reviewer shorthand** (from the batch reviews): T taxonomy, F framework fidelity, P practitioner and coder,
D devil's advocate. "Bn" = research-review batch n.

**Gold and row ids.** Only design-set ids are named: S### (design rows) and H### (pre-3.0 held-out rows, now in the
design file). P-## ids are *proposed* rows in `RR/proposed-design-rows.csv`: candidates only, not gold, every one
`status=proposed`. The fresh held-out file was not read. Two adjudicated held-out rows that the CPs mention are
referred to only by description.

**Real-run counts** are model codes, not gold. "LM" = the logic-model run of 2 October (3.1.2, 2,441 rows); "NLM"
= the no-logic-model run of 4 October. Counts are per text unless they say rows; template copies inflate row
counts (see E-55).

---

## (A) Coding boundaries and tie-breakers

### E-01 · Bare "resilience": coping skill or belief about oneself?

- **Question.** When a statement says only "build resilience", with no coping skill and no belief about oneself named, which code does it take?
- **Codes.** Y4.2 Emotion Regulation & Coping; Y5.4 Confidence, Self-Efficacy & Self-Worth.
- **Options.**
  - Y4.2 as the default (P; the blind coders lean Y4.2).
  - Y5.4 as the default (the live Gemini choice on several desk items).
  - Y4 or Y5 domain-only (not proposed by any reviewer; open under G9).
  - Not on the table: triggering on the word "setbacks" (S243 forbids it).
- **Evidence.**
  - `RR/batch2/recommendations.md` §3 (resilience CF) and `RR/batch2/review/practitioner-review.md`.
  - `RR/batch1/recommendations.md` (later cycle: bare resilience).
  - `CP/CP-12-04-y5-citations-and-deviations.md` (Not bundled: the Y4.2/Y5.4 tie-breaker is blocked).
  - Catalano's resilience construct is unverified.
  - Gold: S243, S158 (Y5.4 framing).
  - Proposed rows: P-01 and P-02 (Y4.2); P-03 and P-04 (Y5.4); P-05 and P-06 (the side left open).
- **Real-run counts.** About 38 resilience texts (B2), about 17 of them bare (B1). About 10 of the 38 are unsplit compounds ("confidence and resilience"). The blind coders chose Y4.2 where Gemini chose Y5.4 on 3 desk items and split on 3 more.
- **What depends on it.**
  - The resilience CF and its hint.
  - The P-05 and P-06 rulings.
  - Comparability of Y4.2 and Y5.4 counts. In the LM run Y4.2 has 32 texts and 48 in NLM.

### E-02 · "Entrepreneurial mindset"

- **Question.** Where does an "entrepreneurial mindset" (risk-taking, initiative) go when no business skill or business launch is named?
- **Codes.** Y5.6 Agency, Voice & Self-Advocacy (the live choice); Y7.4 Work-Based Learning, Credentials & Entrepreneurship; Y7.3 Employability & Workplace Skills; the Y7 domain-only route.
- **Options.**
  - Y5.6 (the live run; blind coder A).
  - Y7.3 (blind coder B).
  - Y7.4.
  - Y7 domain-only.
  - P (B2) asks for two design rows first.
  - The settled sides, rows still unruled: business skills or a launch → Y7.4 (P-11, P-12); pitching → Y4.6 (P-13, P-14).
- **Evidence.**
  - `RR/notes-for-pr-62.md` item 10.
  - `RR/batch2/review/practitioner-review.md` (Y7.4 entrepreneurship row: DEFER).
  - `CP/CP-12-06-y7-citations-and-deviations.md`: 20 CFR 681.560 entrepreneurship, claim y7-10, PARTIAL, later cycle.
  - Proposed rows: P-15 and P-16 (open).
  - No gold row.
- **Real-run counts.** 6 entrepreneurship texts, 3 of them from one program (NFTE). "Workplace skills and entrepreneurial mindsets" was coded whole to Y7.1.
- **What depends on it.** A Y7.4 entrepreneurship include, which is deferred, and the PR #62 Y7 routings (CP-09-03, CP-09-08).

### E-03 · Whose health coverage, when a caregiver enrolls the child?

- **Question.** "Parents will enroll their uninsured children in Medicaid or CHIP" changes the child's coverage, but the parent is the subject. Which code applies? And which code takes a family-level enrollment rate that does not say whose coverage it is?
- **Codes.** Y8.5 Health Care Access & Condition Management; F2.1 Income, Benefits & Financial Stability; F1.3 Family Health Practices.
- **Options.**
  - Y8.5: the child's coverage changes.
  - F2.1: household benefit enrollment.
  - F1.3: the caregiver's health practice. Rule 1 ("the sentence's subject decides") and Y8.5's existing exclude for well-child visits point here.
  - The drafter of CP-12-15 says this is "a gold question" and the hint 29 wording follows the ruling.
- **Evidence.**
  - `CP/CP-12-15-y8-f1-f2-coding-hints.md` (hint 29, "Caregiver enrolling a child") and CF-029 in CONFUSIONS.md (hint held).
  - Verified support: AHS-01 (f2-03, PARTIAL) for F2.1 Medicaid.
  - Gold: S191 (Y8.5, the youth's own coverage); S139 (F2.1, Medicaid listed with SNAP and TANF).
  - Proposed rows: P-57 and P-58 (Y8.5); P-59 and P-60 (F2.1); P-61 and P-62 (open; P-62 is a real queue statement).
- **Real-run counts.**
  - Y8.5 has 21 NLM texts and 1 LM text.
  - "Health insurance enrollment among eligible District families" is coded F2.1 at high confidence.
- **What depends on it.**
  - Hint 29 text; it is revised if the ruling is neither Y8.5 nor F2.1.
  - CF-029 moving from "hint held" to active.
  - Y8 is over the S4.9 line, so whether the Y8.5 part can ship at all waits on the answer to E-47.

### E-04 · Bare "self-awareness"

- **Question.** Does "increase self-awareness", with neither emotions nor identity named, go to Y4 domain-only, or to Y4.1 or Y5.1?
- **Codes.** Y4.1 Emotion Awareness; Y5.1 Self-Understanding & Identity Exploration; the Y4 domain-only route.
- **Options.**
  - Y4 domain-only by hint (P, B1).
  - Uncoded as generic SEL: PR #62's CP-09-07 makes social-emotional skills "named only as a whole" uncoded.
  - Y4.1 or Y5.1 by a fixed default (no reviewer proposed this).
  - D defers.
- **Evidence.**
  - `RR/batch1/review/practitioner-review.md` (bare self-awareness row).
  - `CP/CP-12-20-casel-url-and-self-awareness-table.md`, the CASEL Self-Awareness allocation table. "Demonstrating honesty and integrity" is recorded as unallocated.
  - Gold: no adjudicated row is coded Y4.1.
  - Proposed rows: P-17 and P-18 (Y4 domain-only); P-19 and P-20 (Y4.1); P-21 and P-22 (Y5.1).
- **Real-run counts.** About 10 bare texts, split roughly evenly: Y4.1 got 6 LM and 5 NLM texts, Y5.1 got 5 and 3, all at medium confidence.
- **What depends on it.**
  - A Y4 hint.
  - How CP-09-07's uncoded bullet and G9's domain-only route interact.
  - Where honesty and integrity go: Y4.11, Y6.1 or neither.

### E-05 · Bare "life skills"

- **Question.** Does "life skills" with no skill named go to Y7.7, to the Y4 or Y7 domain, or stay uncoded?
- **Codes.** Y7.7 Independent Living Skills; Y4 and Y7 domain-only; the named skill's own code when a skill is listed (Y4.7, Y7.6 and others).
- **Options.**
  - Y7.7 include line, medium confidence, with named skills split out (P, B2).
  - Domain-only in Y7, or the named SEL skill (the B2 y7 researcher's hint). P rejected this "as written" because it contradicts an adjudicated held-out row that codes bare "life skills" to Y7.7.
  - Uncoded unless daily-living content is named (PR #62's CP-09-07 wording).
- **Evidence.**
  - `RR/batch2/review/practitioner-review.md` ("Life skills, in detail").
  - `CP/CP-09-07-generic-sel.md` and `CP/CP-09-09-domain-only-coding.md` (candidate table).
  - Gold: S120, H046, H048, S162, S224 (Y7.7).
  - Proposed rows: P-07 and P-08 (Y7.7); P-09 and P-10 (the named skill's code).
- **Real-run counts.** 18 unique texts. The LM run coded 5 bare ones Y7.7; the NLM run left 5 near-identical ones uncoded.
- **What depends on it.** A Y7.7 include. It must agree with CP-09-07 (PR #62) and with CP-09-09's handling of "life skills".

### E-06 · "Improved behavior" with no act named

- **Question.** Where do "improved behavior", "positive behavioral change" and "reduced behavioral incidents" go when no prosocial act, disciplinary measure or symptom is named?
- **Codes.** Y4.11 Ethical & Prosocial Choices; Y1.14 (discipline); Y8.6 Mental Health Symptoms & Distress; the Y4 domain-only route.
- **Options.**
  - Y4 domain-only, with disciplinary incidents → Y1.14 and named prosocial behavior staying Y4.11 (P, B1). F and D defer.
  - Y8.6 keeps conduct (today's routing). Decision Y8-3 narrows Y8.6 to symptoms after PR #66, so a home for conduct is needed.
  - Cite CDC conduct problems (y8b-01, SUPPORTED) as partial support for Y8.6. This is the rejected arm of Y8-3; it is listed only because the exclude target is still unset.
- **Evidence.**
  - `RR/batch1/recommendations.md` (later cycle: "Improved behavior").
  - `RR/batch3/recommendations.md` later #1.
  - DECISIONS.md Y8-3.
  - Gold: S027, S223, S227 (Y4.11).
  - No proposed rows exist for this boundary.
- **Real-run counts.** 5 LM bare conduct texts. The Y8.6 behavior texts are among its 5 LM and 9 NLM texts.
- **What depends on it.**
  - The useInstead line in Y8-3's later Y8 CP.
  - A Y4 hint.
  - Two proposed rows per side must be written first (G11).

### E-07 · Generic risk-behavior incidence

- **Question.** Does "reduce negative risk-taking behavior", with no skill, decision or refusal named, leave Y4.12 for the Y8 domain with the gap flag?
- **Codes.** Y4.12 Risk Avoidance & Refusal Skills; the Y8 domain-only route.
- **Options.**
  - Y8 domain-only, triggered by reduce or prevent verbs with no skill named (P's wording; T, F and P accept).
  - Keep Y4.12 (D defers).
  - Wait for the Y8 owner.
- **Evidence.**
  - `RR/batch1/recommendations.md` (later cycle: Y4.12 hint).
  - `CP/CP-12-03-y4-citations-and-deviations.md` (Not bundled).
  - Verified support: NHES 4.5.5 (y4b-10).
  - Gold: S172 and S052 (Y4.12; S172 blocks narrowing "avoid"), H037, S065 (incidence stays in Y8).
- **Real-run counts.** About 5 incidence texts. Y4.12 has 4 LM and 9 NLM texts.
- **What depends on it.**
  - A joint Y4/Y8 hint.
  - Proposed rows, none written yet (G11).
  - The answer to E-47 (Y8 frozen).

### E-08 · Mental-health edges in Y8.6

- **Question.** Should Y8.6 name suicidal thoughts or self-harm, and how are mental-health literacy, using a coping tool and fewer symptoms split?
- **Codes.** Y8.6 Mental Health Symptoms & Distress; Y8.3 Health Knowledge & Safety Skills; Y4.2 Emotion Regulation & Coping.
- **Options.**
  - Add "suicidal thoughts or self-harm" to the Y8.6 include (P accepts). T, F and D defer because no claim is verified; a YRBS 2025 suicide-item claim would need to be filed.
  - Routing hint: knowing → Y8.3; using a coping tool → Y4.2; fewer symptoms → Y8.6 (T and P accept, D defers; CF-031/CF-003 logic).
- **Evidence.**
  - `RR/batch3/recommendations.md` later #2 and #5.
  - `RR/batch3/review/practitioner-review.md`.
  - CF-031 in CONFUSIONS.md.
  - No gold rows for the split.
- **Real-run counts.** "Students gain knowledge of stress management, and mental health" already lands in Y8.3. Y8.6 has 5 LM and 9 NLM texts.
- **What depends on it.** A Y8.6 include change (MINOR) and a hint. Both are Y8 changes and wait on E-47.

### E-09 · Puberty (Y8.4 widening)

- **Question.** Does puberty knowledge belong in Y8.4, while hygiene habits stay in Y8.1 and general adolescent health knowledge stays in Y8.3?
- **Codes.** Y8.4 Sexual & Reproductive Health; Y8.1 Healthy Daily Habits; Y8.3 Health Knowledge & Safety Skills.
- **Options.**
  - Add "puberty" to the Y8.4 include (CP-12-14 item 28; B3 and P accept; the model already routes it there).
  - Leave the include as it is.
- **Evidence.**
  - `CP/CP-12-14-y8-f1-f2-prompt-text-fixes.md` item 28.
  - Verified support: NSES 2020 (y8a-20, SUPPORTED).
  - Proposed rows: P-65 and P-66 (Y8.4); P-67 (Y8.1); P-68 (Y8.3).
- **Real-run counts.** Y8.4 has 5 LM and 11 NLM texts.
- **What depends on it.**
  - CP-12-14 item 28, which would make this release 3.2.0.
  - The P-65 to P-68 rulings.
  - E-47, because the widening is a further Y8 change.

### E-10 · Whose eating: a young person's, a household's, or food security?

- **Question.** Is the trigger "whose eating changes", with access to enough or healthy food kept in F2.2?
- **Codes.** Y8.1 Healthy Daily Habits; F1.3 Family Health Practices; F2.2 Food & Nutrition Security.
- **Options.**
  - Hint 30 as drafted in CP-12-15: household practice → F1.3; the young person's own eating → Y8.1; having or getting enough or healthy food → F2.2.
  - Leave the boundary to coder judgement.
  - Narrowing F2.2 was rejected by all four reviewers.
- **Evidence.**
  - `CP/CP-12-15-y8-f1-f2-coding-hints.md` (hint 30) and CF-030 (hint held).
  - Verified support: SNAP-Ed MT1 (f1-11).
  - Gold: S121, S187 (Y8.1); H072 (F1.3); S062 (F2.2); H048, S224 (cooking stays Y7.7).
  - Proposed rows: P-37 and P-38 (Y8.1); P-39 and P-40 (F1.3); P-63 and P-64 (F2.2).
- **Real-run counts.** F1.3 has 4 NLM texts (24 rows); none in the LM run.
- **What depends on it.**
  - Hint 30 and CF-030.
  - The Y8.1 part also waits on E-47.

### E-11 · Leadership: wording of the Y4.7 vs Y6.4 hint

- **Question.** Decision Y6-1 keeps "leadership" in Y6.4. Which exact hint and exclude wording separates group leadership (Y4.7) from community leadership (Y6.4) without flipping S059?
- **Codes.** Y4.7 Teamwork, Collaboration & Group Leadership; Y6.4 Civic Efficacy & Leadership.
- **Options.**
  - P's wording: "leading peers in a group task, even a community project → Y4.7". This keeps S059.
  - The first CP-09-08 rule 7 wording, which flips S059.
  - No new rule (B2 P): today's "leadership with no setting → Y4.7" rule already separates the two.
- **Evidence.**
  - `RR/notes-for-pr-62.md` item 11.
  - `CP/CP-12-05-y6-citations-and-deviations.md` (Deferred).
  - Gold: S059 (community leadership → Y4.7); S004, S253 (leadership is not Y5.3); H030, S039, S211, S136 (Y6.4).
- **Real-run counts.** 14 "community leader(ship)" texts code Y6.4, and both blind coders agree.
- **What depends on it.**
  - PR #62's rule 7.
  - A later Y6.4 exclude CP, which needs its own two-run gate.

### E-12 · Critical analysis or civic efficacy?

- **Question.** Once Y6.3 and Y6.4 both cite Watts, Diemer & Voight (2011), what separates analysing injustice (Y6.3) from believing one can make a difference (Y6.4)?
- **Codes.** Y6.3 (critical consciousness and social analysis); Y6.4 Civic Efficacy & Leadership.
- **Options.**
  - A Y6.3/Y6.4 CF on analysis versus efficacy (T).
  - No CF until gold exists.
- **Evidence.**
  - `RR/batch2/recommendations.md` §3.
  - `CP/CP-12-05-y6-citations-and-deviations.md` (Deferred).
  - Verified support: y6-01 and y6-02 (Watts, SUPPORTED).
  - Optional lead: CIRCLE "engaged worldview" (V-Y6-2, not sent).
  - Gold: H030 (the only efficacy row), S123 (Y6.3).
- **Real-run counts.** Y6.3 has about 11 texts.
- **What depends on it.** A later CF, which needs one more efficacy row and rows on the analysis side (G11).

### E-13 · Bare "digital literacy": academic or workplace?

- **Question.** Where does an unqualified "digital literacy" go, and what wording should Y7.3 use?
- **Codes.** Y1.4 (STEM, technology and computer science learning); Y7.3 Employability & Workplace Skills; Y6.7 (digital citizenship).
- **Options for the routing.**
  - Y1.4: today's routing, following the 2.x CF-024 logic.
  - Y7.3: PR #62's CP-09-06 moves digital skills there and flips adjudicated H077.
- **Options for the Y7.3 wording.**
  - Drop "or daily life" (T and F).
  - Write "work or study" (D).
  - Notes for PR #62 leave this choice to the PR's owner.
- **Not on the table.** Citing Casey's "online safety" (y7-07), because it blurs Y6.7.
- **Evidence.**
  - `RR/notes-for-pr-62.md` items 9 and 14.
  - `CP/CP-12-06-y7-citations-and-deviations.md` (Deferred, item 17: "open, for PR #62").
  - `PILOT/reviews/practitioner-review.md` (real-run leads).
  - Verified support: 29 U.S.C. 3272(17) (y7-06, SUPPORTED); ESSA 7801(52) (y1-subject-08, SUPPORTED, a subject list only); CSTA 2026 (y1-subject-07, PARTIAL).
  - Gold: H077.
- **Real-run counts.** 3 or 4 bare texts in Y1.4 (PYN, Penn Talent Search, Mindset of Champions). Batch 3 found no adult digital-skills texts in F1.6.
- **What depends on it.**
  - CP-09-06 in PR #62, which must name H077 (S4.4).
  - Y1.4's later citation work.
  - The project's "digital skills" gap lead: is it closed by this routing, or is it still a gap?

### E-14 · Degree or certificate completion

- **Question.** Where is the line between Y1.18 "degree or certificate completion" and Y7.4's credentials?
- **Codes.** Y1.18 (postsecondary enrollment and completion); Y7.4 Work-Based Learning, Credentials & Entrepreneurship.
- **Options.**
  - Academic degrees → Y1.18 and industry or occupational credentials → Y7.4.
  - Every certificate → Y7.4.
  - Every completion → Y1.18.
  - No reviewer has proposed wording. The pilot handed the question to the Y7 work in PR #62.
- **Evidence.**
  - `RR/notes-for-pr-62.md` item 15.
  - `PILOT/recommendations.md` later #13.
  - Verified support: ESSA 6311(h)(1)(C)(xiii) (y1-attainment-16, SUPPORTED, enrollment only).
- **Real-run counts.** Not reported.
- **What depends on it.** Y7 wording in PR #62 and a later Y1.18 or Y7.4 exclude.

### E-15 · Strategy games and career decision-making

- **Question.** Is chess or strategy play critical thinking (Y1.7) or decision-making (Y4.10)? And where does "clarity in academic and career decision-making" belong?
- **Codes.** Y1.7 (critical thinking and inquiry); Y4.10 Decision-Making & Problem-Solving; Y7.1 (career awareness and aspiration); Y7.2 (postsecondary and career planning).
- **Options.**
  - Chess and strategy → Y4.10.
  - Chess and strategy → Y1.7.
  - A Y1.7 exclude for "thinking skills with no information object" (pilot later #11; D rejects it as churn).
  - Career decision-making → Y7.1 or Y7.2 instead of Y4.10 (B1 P).
- **Evidence.**
  - `PILOT/recommendations.md` (pilot item 11, later #11).
  - `RR/SUMMARY.md` (PR #66 notes).
  - `RR/batch1/review/practitioner-review.md` item 5.
- **Real-run counts.** One career decision-making misroute. Y4.10 has 24 LM and 25 NLM texts.
- **What depends on it.** A boundary note after PR #66 merges, and its own proposed rows.

### E-16 · "Interviewing" as a reporting skill, and resumes

- **Question.** Should Y7.2 exclude "interviewing" in the reporting sense, and do resumes and job interviews belong in Y7.2 at all?
- **Codes.** Y7.2 (postsecondary and career planning); Y4.6 (communication and speaking to an audience).
- **Options.**
  - Add a Y7.2 exclude: "interviewing as a reporting skill → Y4.6" (B2 P).
  - Add "interview practice" to the Y7.2 include. B2 P rejects this: it moves 0 rows correctly and up to 2 wrongly.
  - No change.
- **Evidence.**
  - `RR/batch2/review/practitioner-review.md` (Y7.2 rows).
  - Gold: S063 and H019 (Y7.2).
  - The source side is E-31.
- **Real-run counts.** 2 Healthy NewsWorks journalism texts are correctly Y4.6. 2 job-interview texts (Heights) are already Y7.2.
- **What depends on it.** A small Y7 hint after PR #62.

### E-17 · Bare "student engagement", and academic versus school belonging

- **Question.** Does bare "student engagement" go to Y1.9 or to the Y2 domain? And is belonging in a class (Y1.12) distinct from belonging at school (Y3.1)?
- **Codes.**
  - Y1.9 (school engagement and participation).
  - The Y2 codes: Y2.2 curiosity, Y2.3 interest, the Y2 domain.
  - Y1.12 (academic mindsets and beliefs).
  - Y3.1 Belonging & Mattering.
- **Options.**
  - An engagement CF that maps Fredricks's three dimensions onto existing codes, with Fredricks as secondary only (B1 P; pilot later #7). D rejects Fredricks; it was verified from the abstract only.
  - GPRA "engagement in learning" and ESSA "student engagement" as support (SUPPORTED, pilot).
  - No CF until gold exists.
  - For Y1.12 versus Y3.1: no action until a conflict appears (pilot later #15; S3.3 not triggered).
- **Evidence.**
  - `PILOT/recommendations.md` later #7 and #15.
  - `RR/batch1/recommendations.md` (later cycle: engagement CF).
  - Verified support: y2-04 (Fredricks, SUPPORTED).
  - No design gold for generic or subject engagement. P-52 (proposed) tests belonging in a class.
- **Real-run counts.** Not counted. The pilot names Y1.9 versus Y2 as the unstable pair.
- **What depends on it.** A later engagement CF after PRs #62 and #66, and its rows.

### E-18 · The three Y1 hints, and general academic terms

- **Question.** Do the three CP-11-03 lines hold on real statements, and should bare "academic growth" or "academic skills" go to Y1 domain-only?
- **The three lines.**
  - The stated grade or age, not the word "early", decides between Y1.8 and Y1.1 or Y1.3.
  - Value of schoolwork → Y2.4, not Y1.12.
  - Readiness for higher-level coursework → the subject code or Y1 domain-only, not Y1.16.
- **Codes.** Y1.8 Early Learning & School Readiness; Y1.1 Literacy: Reading & Writing; Y1.3; Y1.12; Y2.4; Y1.16 (advanced coursework); Y1.15 (general achievement); the Y1 domain-only route.
- **Options.**
  - Ship each hint as drafted.
  - Ship as a non-gating preview only. D on hint 1 wants a re-run first, because the atomizer may defeat it (E-54).
  - Add "academic growth" or "academic skills" as Y1 domain-only examples, batched with other domain-only examples (pilot later #9).
- **Evidence.**
  - `CP/CP-11-03-y1-coding-hints.md`.
  - `PILOT/recommendations.md` (act-now item 3, later #9).
  - Gold: S025 (no grade → stays Y1.8), S100 (Y1.1), S048, S249, S014 (Y1.16).
  - Proposed rows: P-45 to P-56.
- **Real-run counts.**
  - Hint 1: 35 template rows (already corrected at the desk under G12).
  - Hint 3: 3 to 4 rows. "Demonstrated readiness for high-level university coursework" got 3 different codes.
  - Y1.15 examples: 4 to 5 rows.
- **What depends on it.**
  - CP-11-03, which ships after PR #66.
  - Hint 3 also needs the G9 domain-only bullet (E-50, E-51).

### E-19 · A3.1 "institutional practice": the exact wording, and where school culture goes

- **Question.** Decision A3-1 option (a) keeps institutional practice in A3.1. What exact sentence replaces the definition? And do school culture and climate leave A3.1?
- **Codes.** A3.1 Policy & Institutional Change; A1.2 Practice Change; the A3 domain-only route.
- **Options.**
  - T's wording: "formal adoption of a policy, program or practice by a school, district or other institution". Funding and public bodies are kept.
  - Rule 18 of CP-12-19: named adults applying a practice → A1.2; an institution beyond the program adopting a practice → A3.1.
  - School culture with no formal adoption → A3 domain-only (P-25, P-26).
  - Not on the table: narrowing A3.1 to formal policy, rules or funding. That is option (b), rejected; it would move about 28 texts.
- **Evidence.**
  - `CP/CP-12-19-part-a-boundaries.md` (the prerequisite CP, not yet filed, and its draft FD for A3.1, a provisional id).
  - Verified support: a3-04 (PARTIAL; Coffman and Reisman do not cover school practice).
  - Gold: S101, S019, H089 (all policy); S148, S204 (A1.2); S176, S075 (must not move).
  - Proposed rows: P-23, P-24 (A3.1 practice); P-25, P-26 (A3 domain-only).
- **Real-run counts.** A3.1 has 28 LM and 11 NLM texts. About 20 LM and 8 NLM of them are practice.
- **What depends on it.**
  - The A3.1 deviation entry and wording CP.
  - CP-12-19 item 16.
  - A3 drift moves from 0/3 to 1/3.
  - The school-climate question (E-38).

### E-20 · A3.3 or the A3 domain: community health, safety and economy

- **Question.** Should statements about community health, safety or the economy that name no cohesion, trust or collective action leave A3.3 for the A3 domain with the gap flag?
- **Codes.** A3.3 Community Conditions & Collective Efficacy; the A3 domain-only route.
- **Options.**
  - CP-12-19 item 15: an A3.3 exclude plus an include for residents' shared action. All four reviewers accept.
  - Rename A3.3. This is MAJOR and deferred.
  - Widen A3.3 with Reisman's "Changes in impact" (a3-05). All four reviewers reject this.
- **Evidence.**
  - `CP/CP-12-19-part-a-boundaries.md`.
  - Verified support: Sampson (a3-03, SUPPORTED).
  - Gold: S154 (A3.3).
  - Proposed rows: P-73 (A3.3); P-74, P-75 (A3 domain-only).
  - CP-12-19 says 3 more rows are needed: 1 on the A3.3 side and 2 on the domain side.
- **Real-run counts.** About 22 LM and 7 NLM texts (D), or about 30 (P). A3.3 has 32 LM and 9 NLM texts in all.
- **What depends on it.**
  - CP-12-19.
  - Whether 3.1.x A3.3 counts can be compared with later ones.
  - The gap flag in exports (E-50).

### E-21 · S176: the family advisory board

- **Question.** Is "The program will create a family advisory board" a family outcome (F1.9) or a change in the program's own family-engagement system (A2.6)?
- **Codes.** F1.9 Family Participation & Leadership; A2.6 Family Engagement Systems; A3.1 Policy & Institutional Change (as an alternate).
- **Options.**
  - Keep F1.9 and write the tie-breaker around it.
  - Re-adjudicate as A2.6 by the Part axis (who changes).
  - Decision G14 settled only that S176 is re-reviewed together with CP-09-01; the ruling itself is Severin's alone.
- **Evidence.**
  - `RR/notes-for-pr-62.md` items 2 and 3.
  - `CP/CP-12-27-renumber-2x-references-by-script.md` (the 3.x copy of CF-008 is blocked).
  - `CP/CP-12-19-part-a-boundaries.md` (rule 18 is worded "beyond the program" to leave S176 alone).
  - Verified support: f1-05 (Epstein Types 3 and 5, SUPPORTED).
  - Gold: S176. A2.6 has no adjudicated row.
- **Real-run counts.** Not reported.
- **What depends on it.**
  - The 3.x restatement of CF-008.
  - The A2.6 / A3.2 / F1.9 tie-breaker.
  - The F1.9 rows of CP-12-22.
  - CP-09-01.

### E-22 · Staff credentials and staffing levels

- **Question.** Does one person earning a credential stay A1.1 while counts of certified, hired or retained staff go to A1.3? And should A1.3 cover staffing levels at all?
- **Codes.** A1.1 Staff & Volunteer Knowledge & Skills; A1.3 Workforce Stability & Well-Being.
- **Options.**
  - A tie-breaker now: an individual credential → A1.1, staff counts → A1.3 (P). T, F and D defer: there is no source and no gold.
  - The A1.3 staffing widening, citing JOLTS (a1-06, PARTIAL). It rests on CP-09-05, which is held under G16 (E-49).
  - Leave both until the A1 anchor re-review.
- **Evidence.**
  - `RR/batch4/recommendations.md` later #4 and #8.
  - `CP/CP-12-10-a1-citations-and-deviation.md` (Not bundled).
  - Gold: S149 (A1.3); S043, S083, S142, S146, S244, H014 (A1.1; they block narrowing).
  - Proposed rows: P-33, P-34 (A1.3); P-35, P-36 (A1.1).
- **Real-run counts.** About 12 NLM credential texts, all A1.1, mostly at high confidence. A1.3 has 13 LM and 8 NLM texts.
- **What depends on it.**
  - CP-09-05.
  - The A1 anchor re-review.
  - The teacher-time gap (E-30).

### E-23 · Staff building rapport

- **Question.** When staff build rapport with youth, is that the youth's relationship (Y3.2) or a staff practice (A1.2)?
- **Codes.** Y3.2 Supportive Adult Relationships; A1.2 Practice Change.
- **Options.**
  - A1.2 when it is framed as staff behaviour (T's role rule, B4).
  - Y3.2 when it is framed as the youth's relationship.
  - Add a Y3.2 example (B1, R-29).
- **Evidence.**
  - `RR/batch4/research/reconciliation.md` R-24 (no owner).
  - `RR/batch4/review/taxonomy-review.md` item 7.
  - Gold: S102 (Y3.2).
- **Real-run counts.** Not counted.
- **What depends on it.** A Y3.2 example or an A1.2 useInstead line. Nobody owns it yet.

### E-24 · "Diversion of families from regional truancy court"

- **Question.** Where does the truancy template's second outcome belong? It is now coded Y8.13 Justice Involvement in all 12 rows.
- **Codes.** Y8.13 Justice Involvement; Y1.13 (attendance); the F1 domain; F1.1 Parenting Knowledge & Practices; A2 (program access and quality); uncoded.
- **Options.**
  - Keep Y8.13 (the live code).
  - F1 domain-only, like the child-welfare outcome under G13.
  - An A2 route, if read as the program's diversion service.
  - Uncoded.
  - B4 says it sits on an A2/F line that nobody covers. No reviewer proposed an answer.
- **Evidence.**
  - `DESK/README.md` ("Things to check", item 2).
  - `RR/batch4/research/reconciliation.md` R-26.
  - `RR/SUMMARY.md` ("The DHS truancy template").
  - Verified support: OJJDP 2017 diversion (y8b-16, SUPPORTED, youth diversion).
  - Y8.13 also carries the open deviation entry FD-P28 ("completing diversion" as an outcome).
- **Real-run counts.**
  - 12 NLM rows across 8 "Truancy Provider" programs.
  - The template's attendance statements (13 rows coded Y1.13) look right and are unchanged.
- **What depends on it.**
  - A further review-desk correction. The approved list does not include it.
  - Any Y8.13 exclude, which is a Y8 change (E-47).

### E-25 · Bare "stability"

- **Question.** Does a family's "stability" with nothing named go to the F2 domain, and does "overall life stability" stay uncoded?
- **Codes.** F2.1 Income, Benefits & Financial Stability; F2.3 Housing Stability & Safe Living Situation; the F2 domain-only route.
- **Options.**
  - Household stability → F2 domain-only with the gap flag; "overall life stability" → uncoded (B3 P).
  - f2's rule, which would leave most such texts uncoded.
  - D wants two proposed rows first.
- **Evidence.**
  - `RR/batch3/recommendations.md` later #6.
  - `CP/CP-12-09-f2-citations.md` (Handed to later items).
  - No proposed rows written.
- **Real-run counts.** 4 low- or medium-confidence texts.
- **What depends on it.** A later F2 hint. F2 is at the S4.9 line (1/3), but a domain-only route adds no deviation entry.

### E-26 · "Sexual" in Y5.2

- **Question.** Should Y5.2 say "sexual orientation", so that statements about feeling positive about one's own sexuality go to Y8.4?
- **Codes.** Y5.2 (cultural, racial and social identity); Y8.4 Sexual & Reproductive Health.
- **Options.**
  - Reword to "sexual orientation" and re-record the NASEM 2019 gender-and-sexuality sentence as the excerpt (B2 P lead; D and F on the excerpt). MINOR.
  - Leave it as it is.
- **Evidence.**
  - `RR/batch2/recommendations.md` §3.
  - `CP/CP-12-04-y5-citations-and-deviations.md` (Not bundled).
  - Decision G5 already treats sexual orientation as a named instance of LfJ's "multiple groups".
  - Gold: S129 (unaffected).
- **Real-run counts.** 1 row (Girls Inc., "Positive feeling about own sexuality").
- **What depends on it.** A Y5.2 definition edit, with its own gate.

### E-27 · "Support overall youth development": the prompt and gold disagree

- **Question.** The prompt still lists "support overall youth development" as uncoded, but an adjudicated domain-only gold row codes it Y5. Which one should change?
- **Codes.** The Y5 domain-only route; uncoded.
- **Options.**
  - Remove the phrase from the prompt's uncoded list, so the prompt matches gold.
  - Ask Severin to re-rule the gold row.
  - CP-09-09 flagged the conflict, and it is still unfixed.
- **Evidence.**
  - `PILOT/reviews/practitioner-review.md` ("What the researchers missed", item 6).
  - `CP/CP-09-09-domain-only-coding.md`.
  - `codebook-refinement/gold/youth_outcomes_v3.domain-only.gold.csv`: the domain-only row CP-09-09 names. Its id is not an S or H id, so it is not named here.
- **Real-run counts.** Not counted.
- **What depends on it.**
  - The uncoded bullets that CP-09-05 and CP-09-07 edit in PR #62.
  - The domain-only eval.

---

## (B) Gaps: no home in the codebook

### E-28 · Adult volunteers' own life outcomes

- **Question.** Decision G15 sends a volunteer's own life outcomes (well-being, connectedness, personal growth, career path) to the A1 domain with the gap flag. Is that the end state, or does the gap need a code?
- **Codes.** A1.1, A1.2, A1.3 and the A1 domain-only route; Y6.5 Community Service & Action (young people only); F1.9 Family Participation & Leadership (caregivers who volunteer).
- **Options.**
  - Stay at A1 domain-only with the gap flag (G15, settled for now).
  - A new code for volunteer outcomes: no reviewer proposed one. The 2026-09-26 next-steps said to wait for frequency data.
  - For programs whose participants are themselves volunteers, such as AmeriCorps Seniors: decide workforce (Part A) or beneficiary (Part F) by whom the program serves, not by the word "volunteer" (B2 P). Part F has no code that fits (F1.4 is caregivers only).
- **Evidence.**
  - `RRV/coded_outcomes_3.1.2_2026-10-02_claude-recommended.csv`, 4 of the 15 rows marked `codebook_gap_lead`: Students Run Philly Style "connectedness to young adults and peers" and "sense of community contribution"; Beyond School Walls "Bigs gain personal growth" and "Bigs make positive contributions in their communities and workplaces".
  - `CP/CP-12-32-volunteer-and-child-welfare-routings.md`.
  - `RR/batch4/review/practitioner-review.md` items 2 and 6.
  - Gold: S083, S244, S146 (A1.1); S149 (A1.3); S005, S184 (Y6.5).
  - Proposed rows: P-31, P-32 (A1 domain-only).
- **Real-run counts.**
  - About 20 volunteer-outcome texts across A1.1, A1.2, A1.3 and A1/none.
  - 1 LM program (AmeriCorps Seniors, 5 texts) has volunteers as its participants.
- **What depends on it.**
  - CP-12-32: A1.3 widening, A1 at 2/3, A1 anchor re-review.
  - The `mentors_volunteers` prompt line (line 105).
  - The gap-flag export (E-50).

### E-29 · Networking and social capital for staff and teaching artists

- **Question.** Where do outcomes like "Opportunities for Teaching Artists to network with other artists and audiences" go? Part A has no code for staff social capital.
- **Codes.** A1.1 (knowledge and skills); A1.3 (retention and well-being); Y3.5 Social Capital (young people only); the A1 domain-only route.
- **Options.**
  - A1 domain-only with the gap flag.
  - A new code.
  - Uncoded.
  - B1's Y3 researcher noted the Search Institute Social Capital Framework "fits A2 better" (R-25: no claim filed, no owner).
- **Evidence.**
  - Gap-lead rows: SparQ in Schools "networking"; Opera on the Spot "Opportunities for Teaching Artists to network…".
  - `RR/batch4/research/reconciliation.md` R-25.
  - Decision G15's "professional connections" example for volunteers.
- **Real-run counts.** 2 gap-lead rows.
- **What depends on it.** An A1 note or code. It belongs to the A1 anchor re-review.

### E-30 · Staffing conditions such as teacher time

- **Question.** Is "Teachers have time to work with intervention students" a staffing condition with no code?
- **Codes.** A1.2 Practice Change (needs a change in practice); A1.3 (staffing levels only if CP-09-05 widens it); the A1 domain-only route.
- **Options.**
  - A1 domain-only with the gap flag.
  - A1.3, if the staffing widening lands.
  - A2.1 Program Quality.
  - Uncoded.
- **Evidence.**
  - Gap-lead row: Parent Classroom Assistants.
  - Staffing rows: P-33, P-34.
- **Real-run counts.** 1 gap-lead row.
- **What depends on it.** E-22 and CP-09-05.

### E-31 · The physical environment of a school or neighborhood

- **Question.** Where does "Cleaner, greener school campus" go? It is a physical condition, not cohesion (A3.3) and not a young person's stewardship (Y6.6).
- **Codes.** A3.3 Community Conditions & Collective Efficacy; Y6.6 (environmental stewardship); A2.3 (program facilities and resources); the A3 domain-only route.
- **Options.**
  - A3 domain-only with the gap flag (the same route as E-20).
  - A2.3, if the school is the program's own site. A2-4 keeps A2.3 "facilities" with a basis note until the A2 re-review.
  - Uncoded.
- **Evidence.**
  - Gap-lead row: School District of Philadelphia – 2025.
  - DECISIONS.md A2-4.
- **Real-run counts.** 1 gap-lead row.
- **What depends on it.** CP-12-19's A3.3 exclude wording, and the A2 re-review.

### E-32 · Childcare access for parents

- **Question.** Does "Trusted, licensed childcare option for parents" need its own home?
- **Codes.** F2.1 Income, Benefits & Financial Stability (closest; the live code); A2.4 (access); the F2 domain-only route.
- **Options.**
  - Keep F2.1.
  - F2 domain-only with the gap flag.
  - A2 (program access).
  - A new family-support code.
- **Evidence.** Gap-lead row: Play Loud Afterschool Program. The recommended code was kept, with the gap tagged.
- **Real-run counts.** 1 gap-lead row.
- **What depends on it.** F2 is at the S4.9 line (1/3), so any widening with a deviation triggers the F2 anchor re-review.

### E-33 · Adult health outside the caregiver role

- **Question.** Part F has no adult health code. Where do statements like "Neighbors will feel healthier physically" go?
- **Codes.** Y8.1 (young people only); F1.3 Family Health Practices (household practice); A3.3 or the A3 domain-only route (community health).
- **Options.**
  - A3 domain-only as community health (E-20's route).
  - An F domain-only route.
  - Uncoded.
  - A new adult-health code.
- **Evidence.**
  - Gap-lead row: The Commons (Grounds) – Health, Wellness.
  - `CP/CP-12-19-part-a-boundaries.md` (community health → A3/none).
- **Real-run counts.** 1 gap-lead row.
- **What depends on it.** The wording of the A3.3 exclude, and whether "neighbors" count as a community or as adult participants.

### E-34 · Caregivers' own feelings and attitudes

- **Question.** Where do outcomes like "pride in student achievement" or "Improved parent attitude/awareness toward dance" go? F1.1 is parenting practice, and nothing covers a caregiver's feelings about the child or the art form.
- **Codes.** F1.1 Parenting Knowledge & Practices; F1.9 Family Participation & Leadership; A2.2 Participant & Family Satisfaction; the F1 domain-only route.
- **Options.**
  - F1 domain-only with the gap flag.
  - A2.2, read as satisfaction.
  - Uncoded.
  - A new caregiver-attitude code.
- **Evidence.** Gap-lead rows: Musicopia "pride in student achievement" (one text in 3 programs); Dance Chance parent attitude.
- **Real-run counts.** 4 gap-lead rows (2 texts).
- **What depends on it.** An F1 note. F1 has 2/9 counted deviations, worst case 3/9.

### E-35 · Audiences and the general public

- **Question.** Where do outcomes for audiences and the general public go? Examples: "Audiences appreciate ballet…" and "More Philadelphians value the arts". They are not participants, and some are coded in Part Y today.
- **Codes.** A2.2 Participant & Family Satisfaction (participants only); A3.3 or the A3 domain-only route; Y2.4 and Y2.6 (young people; misused today).
- **Options.**
  - A3.3 or uncoded (B1 P).
  - A3 domain-only with the gap flag.
  - An audience-outcome code.
  - Epstein Type 3 "audiences" is already settled as an output (A2.5, F1-2), but that covers attendance counts, not appreciation.
- **Evidence.**
  - Gap-lead row: RockReach "Audiences appreciate…".
  - `RR/batch1/review/practitioner-review.md` item 3.
  - `RR/notes-for-pr-62.md` item 3.
- **Real-run counts.** 1 gap-lead row; about 6 adult or public texts are coded in Part Y.
- **What depends on it.**
  - A Part Y exclude ("adults or the public").
  - Re-checking the Y2.4 counts after CP-09-04 (PR #62).

### E-36 · An organization's reputation and visibility

- **Question.** Where do outcomes like "improved recognition of Musicopia due to stronger branding" or "Program is locally and nationally recognized as a model" go?
- **Codes.** A2.1 Program Quality; A3.2 (partnerships and alliances); A3.3; the A2 domain-only route.
- **Options.**
  - A2 domain-only by hint (B4 P).
  - Leave them spread across A2.1, A3.2 and A3.3, as today.
  - Reisman's "Strengthened base of support": unverified for this purpose, a lead only.
- **Evidence.** `RR/batch4/review/practitioner-review.md` item 3; `RR/batch4/recommendations.md` later #10.
- **Real-run counts.** About 7 texts.
- **What depends on it.** An A2 hint, which belongs in the A2 re-review.

### E-37 · Partner satisfaction

- **Question.** Is a host school's or partner's satisfaction ("90% of schools report that Ignite fellows had a positive impact") A2.2, or does it go to the A2 domain?
- **Codes.** A2.2 Participant & Family Satisfaction; the A2 domain-only route.
- **Options.**
  - Widen A2.2 to partners. Under G1 this names a new population and needs a deviation entry; A2 is already at the line, or over it after FD-P52.
  - A2 domain-only with the gap flag.
- **Evidence.**
  - `RR/batch4/review/practitioner-review.md` item 4.
  - Gold: H002, S137 (A2.2).
- **Real-run counts.** A2.2 has 4 LM and 3 NLM texts; partner texts were not counted separately.
- **What depends on it.** The A2 anchor re-review.

### E-38 · School climate

- **Question.** School-wide climate has no code, and it is split across A2.1, A3.1, A3.3 and Y3.1. Should the codebook route it by hint, or add a code?
- **Codes.**
  - A2.1 Program Quality: the program's own environment.
  - Y3.1 Belonging & Mattering and Y8.10: a young person's own perception.
  - A3.1, A3.3, the A3 domain-only route.
  - A proposed A3.4 School Climate (enum +1).
- **Options.**
  - A hint: program environment → A2.1 (H057); a youth's own perception → Y3.1 or Y8.10; school-wide climate or culture → A3 domain-only. T, F and P accept with changes; D rejects for now.
  - A new A3.4 code. All four reviewers defer it until a verified EDSCLS primary source and design gold exist.
  - Status quo.
- **Evidence.**
  - `RR/batch4/recommendations.md` later #1, #2 and #7.
  - `PILOT/reviews/practitioner-review.md` ("What the researchers missed", item 2).
  - Verified support: a3-06 (PARTIAL and secondary, so it cannot support a code).
  - Gold: H057 (A2.1), S011 (expected none).
  - Proposed rows: P-25, P-26.
  - "Improved school climate and sense of community" got both A2.1 and Y3.1.
- **Real-run counts.** About 21 texts (B4); about 12 rows (pilot). In NLM, 60 of 64 A2.1 rows are low or medium confidence.
- **What depends on it.**
  - The A3.1 wording (E-19).
  - The enum footprint (160 now; 161 with A3.4).
  - A2.1 confusion mining before the A2 re-review.

---

## (C) Deviation and framework-fidelity calls

### E-39 · Y7.1 "interest" and "aspiration"

- **Question.** Does 20 U.S.C. 2302(7)(A) cover career *interest* well enough that no deviation entry is needed for Y7.1?
- **Codes.** Y7.1 (career awareness, exploration and aspiration).
- **Options.**
  - Yes: no deviation entry.
  - No: log a codebook-defined-element entry, which takes Y7 from 0/7 to 1/7.
  - Decision Y7-2 fixed the wording and made the entry conditional; this judgement is what remains.
  - Narrowing Y7.1 is ruled out: it flips H007 and leaves career aspiration with no home, because Y5.5 excludes it.
- **Evidence.**
  - `RR/notes-for-pr-62.md` item 7.
  - `CP/CP-12-06-y7-citations-and-deviations.md` (Deferred, item 15).
  - Verified support: y7-02 (SUPPORTED, "career awareness exploration opportunities and planning…"); y7-01, y7-03 (SUPPORTED).
  - Gold: H007, S152, S115, S099.
- **Real-run counts.** "Students identify STEM career interests" and similar texts.
- **What depends on it.** CP B2-Y7b after PR #62, and the Y7 drift count.

### E-40 · Resumes and job interviews in Y7.2

- **Question.** Resumes and job interviews have only partial (college-side) support. Should a deviation entry be logged if Conley's work side does not verify?
- **Codes.** Y7.2 (postsecondary and career planning).
- **Options.**
  - Send Conley's Key Transition Knowledge & Skills (work side) to a verifier first. The request is drafted but has not been sent.
  - Log a codebook-defined-element entry now.
  - Accept the partial rows as enough. Under G3 they do not avoid an entry when the code is broader than the source.
- **Evidence.**
  - `CP/CP-12-06-y7-citations-and-deviations.md` (Deferred, item 16, request `y72-conley-work-side`).
  - Verified support: y7-04 and y7-05 (PARTIAL).
  - `CP/CP-11-01-y1-citation-fixes.md` (Handed over, item 1: the Conley excerpt may come from the 2011 EPIC slide deck).
  - Gold: S063, H019.
- **Real-run counts.** "Completion of professional resumes and participation in the Annual Interview Expo"; 2 job-interview texts.
- **What depends on it.** Y7 drift, which reaches 2/7 after PR #62 in the worst case.

### E-41 · Creative writing in Y2.5 and the FD-P16 anchor line

- **Question.** If neither CCSS W.3 nor the PISA creative-thinking framework verifies, does Y2.5 creative writing get a counted entry, which takes Y2 to 3/6 and freezes PR #62's Y2 changes? And should FD-P16 list all four NCAS processes?
- **Codes.** Y2.5 (creative expression); FD-P16.
- **Options.**
  - Verify CCSS W.3 and an OECD-hosted PISA 2022 framework, and log a counted entry only if both fail (B1).
  - Log the entry now.
  - Drop creative writing from Y2.5.
  - FD-P16: add Responding and Connecting and restate its evidence as "statements name them together" (T and F accept; P and D defer).
- **Evidence.**
  - `RR/notes-for-pr-62.md` item 12.
  - `RR/batch1/recommendations.md` (later cycle).
  - Verified support: y2-11 (PARTIAL, a third-party copy only); y2-13, y2-14 (SUPPORTED).
  - Gold: S077.
- **Real-run counts.** Not counted.
- **What depends on it.** CP-09-04 in PR #62, CP-12-01, and Y2's S4.9 status.

### E-42 · Y2.4 "or community"

- **Question.** Does Hulleman et al. (2010) support "or community" in Y2.4, and if not, should Y2.4 be narrowed or the element logged as a deviation?
- **Codes.** Y2.4 (relevance and utility value).
- **Options.**
  - Narrow now to "goals, future plans or daily life" (T and F).
  - Keep it (P: 3 real texts would be orphaned).
  - Defer until a verifier checks Hulleman (D).
  - A deviation entry would put Y2 over the line.
- **Evidence.**
  - `RR/batch1/recommendations.md` (later cycle, R-16).
  - `CP/CP-11-03-y1-coding-hints.md` hint 2 (its pointer to Y2.4 must fit either wording).
  - Gold: S115 (Y2.4).
- **Real-run counts.** 3 texts.
- **What depends on it.** Y2 drift and CP-11-03 hint 2.

### E-43 · Y2.2 "willingness to try"

- **Question.** Does CASEL's open-mindedness or Hidi & Renninger's triggered interest contain "willingness to try a new activity", so that FD-P41 is not opened?
- **Codes.** Y2.2 (curiosity and willingness to try).
- **Options.**
  - V1 or V2 SUPPORTED → a direct support, no entry.
  - PARTIAL → no entry only if the verifier's note shows the source is broader than the element (G3).
  - Otherwise open FD-P41 (a provisional id).
- **Evidence.**
  - `CP/CP-12-01-y2-citations-and-deviations.md` (V1, V2 and V3; not applied yet, waiting for PR #62).
  - Gold: S049, S080.
- **Real-run counts.** Not counted.
- **What depends on it.** Y2 drift: 2/6 after CP-12-01, at the line.

### E-44 · Re-anchoring A2.4 and its deviation case

- **Question.** After "(or another group facing barriers)" is dropped (decision A2-5), which partial sources join CDC and ESSA 6318(f) for A2.4? And is FD-P19 a sector widening (adapted), or a codebook-defined residue?
- **Codes.** A2.4 (inclusive access); FD-P19.
- **Options.**
  - Add the Section 504 regulations (a2-05, a2-06, PARTIAL): T, F and P as partial; D rejects.
  - Add CAST (a2-08): T and P; F as supplementary; D rejects.
  - Add the CDC "About" page (a2-04): D rejects it as joined passages.
  - FD-P19 → adapted, as a sector widening for the language half (F).
  - FD-P19 stays codebook-defined (D).
  - CP-10-01's ADA Title II and Section 504 program-access question is still open.
- **Evidence.**
  - `RR/batch4/recommendations.md` later #3.
  - `RR/notes-for-pr-62.md` items 4 and 6.
  - Verified support: a2-03 and a2-07 (SUPPORTED).
  - Gold: S001, H058, S041, S098, S113.
- **Real-run counts.** 11 of 13 real A2.4 texts under the clause are general equity of access.
- **What depends on it.** The A2 re-review. The deviation count is unchanged either way.

### E-45 · Other A2 items held for the A2 anchor re-review

- **Question.** Which held items enter the A2 re-review, and in what form?
- **Codes.** A2.1 Program Quality; A2.2 Participant & Family Satisfaction; A2.3; A2.5 (attendance and reach); A2.6 Family Engagement Systems.
- **Options**, one per item:
  - A2.6: add ESSA 6318(a)(2)/(c)(1) (a2-12, SUPPORTED). T, F and P accept; D rejects.
  - A2.6: the Epstein "Types 3 and 6" → "Type 3" Source line (CP-12-18 (c)).
  - A2.5: the 21st CCLC APR "30 days or more" (a2-09, PARTIAL; two wordings) as a partial row for H001. CP-09-01's owner may prefer the current APR.
  - A2.2: the Source line stays "Codebook-defined; no verified source yet", although a partial source now exists. Drafter-settled; "flag at approval".
  - Weiss stays "located", read on an ERIC abstract. Drafter-settled; "flag at approval".
  - A2.3 "facilities" basis note (decision A2-4).
- **Evidence.**
  - `CP/CP-12-11-a2-citations-and-fd-p18.md` ("Settled by the drafter", "Not resolved here").
  - `CP/CP-12-18-part-a-source-lines.md`.
  - `RR/batch4/recommendations.md` later #5 and #6.
  - Gold: H001, S238 (A2.5); S075 (A2.1).
- **Real-run counts.** A2.1 has 19 LM and 25 NLM texts.
- **What depends on it.** The scope and order of the A2 re-review (see E-48).

### E-46 · Smaller deviation and fidelity calls still open

- **Question.** Which of these smaller calls does the panel settle now, and which go to the backlog?
- **Codes.** Y8.8; Y1.10, Y1.13, Y1.14; Y5 and Y5.6; F2.3; F1.3; A1.1; Y1.4.
- **The calls.**
  - **Y8.8 "processing trauma" (S078).** File a claim on an NCTSN concept that names recovery, or log a codebook-defined entry (B3 later #4). Either way it is a Y8 change.
  - **Y1.10 "at any age", Y1.13 "pregnancy", Y1.14 "replacing them".** Reword the definitions or keep the logged entries (FD-P21, FD-P22). Dropping "pregnancy" flips S051; S220 and S055 constrain the other two (pilot later #6).
  - **Catalano as supporting framework basis for Y5 and Y5.6.** The content is verified, but the year and author line fail S1.4 (T and F; D rejects).
  - **The F2.3 McKinney-Vento support.** Drop the row (T, F, P) or add a separate 11434a(2) row (D). f2-10 is SUPPORTED but only a definition, and the entry is shared with Y1.13.
  - **F1.3 family eating.** SNAP-Ed MT1 is defunded and V7 is unreachable. The V7 verifier reported different live wording, flagged for follow-up. The F1.3 deviation entry (provisional) opens only if the page and any archive are lost.
  - **A1.1 FD-P36.** OPM's Kirkpatrick restatement (a1-09) is a lead with no URL, and V1 was unreachable.
  - **Y1.4 CSTA.** Keep the 2017 standards until supersession is confirmed (y1-subject-07, PARTIAL).
- **Evidence.**
  - `RR/batch3/recommendations.md` later #4 and #11.
  - `PILOT/recommendations.md` later #6.
  - `RR/batch2/recommendations.md` §3.
  - `RR/applied-3.1.5.md` (CP-12-08, CP-12-10).
  - `CP/CP-12-08-f1-citations.md`, `CP/CP-12-09-f2-citations.md`, `CP/CP-12-10-a1-citations-and-deviation.md`.
  - Gold: S078, S051, S220, S055, H072.
- **Real-run counts.** Not counted.
- **What depends on it.** The drift for Y8, Y1, Y5, F2 (at the line), F1 and A1 (at the line).

---

## (D) Process and ordering

### E-47 · Y8 is over the S4.9 line: which Y8 changes wait?

- **Question.** Y8 now has 5/13 counted entries (38%, FD-P28 to FD-P32), more than the worst case of 4 that the review forecast. Which pending Y8 changes must wait for the Y8 anchor re-review, and which are exempt?
- **What is pending.**
  - CP-12-14 item 26 (the Y8.13 CJCA title) and item 28 (puberty).
  - The Y8 parts of CP-12-15 hints 29 and 30.
  - The Y4.12 incidence hint (E-07).
  - The Y8.6 narrowing from decision Y8-3, and the E-08 includes.
  - The Y8.8 call (E-46).
  - The Y8.13 truancy-diversion question (E-24).
  - The Y8.8 source-title fix offered to the shared gate.
- **Codes.** Y8.1 to Y8.13.
- **Options.**
  - Read "before any further Y8 change" literally: everything waits.
  - Exempt citation-only and title fixes.
  - Exempt hints that change no definition.
  - The re-review itself is a separate job; only its effect on order is asked here.
- **Evidence.**
  - `RR/applied-3.1.5.md` (CP-12-07: "An anchor re-review is required before any further Y8 change").
  - `RR/SUMMARY.md` (drift table and order of landing).
  - DECISIONS.md G7.
- **Real-run counts.** Not applicable.
- **What depends on it.** The shared Source and `frameworkBasis` gate (G10), and the 3.2.0 bump if puberty lands.

### E-48 · Order of the A2 accreditation entry and the shared gate

- **Question.** FD-P52 (A2.1 accreditation) takes A2 over the line. Should it land before the shared Source-line gate, as planned, so that CP-12-18's A2.6 line is held? Or after the gate?
- **Codes.** A2.1 Program Quality (S075); A2.6 Family Engagement Systems.
- **Options.**
  - Before the gate, holding A2.6 for the re-review (the current plan).
  - After the gate. CP-12-11 says this "would need Severin's word", because decision A2-2 names only PR #62.
- **Evidence.** `CP/CP-12-11-a2-citations-and-fd-p18.md` ("Not resolved here"); DECISIONS.md A2-1 and A2-2.
- **Real-run counts.** Not applicable.
- **What depends on it.** CP-12-11, CP-12-18 (c), and the start of the A2 re-review.

### E-49 · CP-09-05 and the A1.3 staffing widening

- **Question.** CP-09-05's only evidence is a held-out row (G16). Is it re-justified from design gold or from real queue statements, or does it stay held indefinitely? And who does that work?
- **Codes.** A1.3 Workforce Stability & Well-Being; the uncoded bullets in rulesText.
- **Options.**
  - Re-justify from design gold or real texts. P-33 and P-34 are candidates, if adjudicated.
  - Keep it held until the A1 anchor re-review.
  - Withdraw it.
- **Evidence.**
  - `RR/notes-for-pr-62.md` item 1.
  - `CP/CP-12-11-a2-citations-and-fd-p18.md` (Notes for PR #62).
  - `RR/batch4/recommendations.md` later #4.
- **Real-run counts.** Not counted.
- **What depends on it.** PR #62's merge scope, E-22, and A1 drift (2/3 once CP-12-32 lands).

### E-50 · The gap flag: an app change with no owner, and its use on the truancy rows

- **Question.** Who builds the `codebook_gap` flag into exports? And should the 12 child-welfare truancy rows carry `codebook_gap = true` at the desk?
- **Codes.** The F1 domain-only route (G13); every G9 domain-only route.
- **Options.**
  - Keep the flag set to true on the 12 desk rows. The corrections README set it, but the 3.1.2 rule says domain-only means "no specific result".
  - Set it to false.
  - Ship the export flag with or before CP-12-19 and CP-12-32, so the dashboard does not mix "names only the domain" with "specific but uncoded".
  - Accept a gold-only flag for now.
- **Evidence.**
  - `DESK/README.md` ("Things to check", item 1).
  - `DESK/corrections.csv` (rows tagged with the truancy template).
  - `CP/CP-12-19-part-a-boundaries.md` ("Domain-only for specific results").
  - `CP/CP-12-32-volunteer-and-child-welfare-routings.md` (blocker 2).
- **Real-run counts.** 12 NLM rows (9 were Y3.4, 2 F1.1, 1 F2.3); 5 desk items need an override, not an approval.
- **What depends on it.**
  - Loading the desk corrections.
  - CP-12-19, CP-12-32 and CP-11-03 hint 3.
  - The `specificity` export column.

### E-51 · The shared DOMAIN ONLY bullet and rule numbering

- **Question.** CP-12-19 and CP-12-32 carry the same DOMAIN ONLY bullet, CP-12-19 adds rule 18, and PR #62 edits rules 7, 13 and 16 and the uncoded bullets. Which lands first, and who rebases?
- **Codes.** rulesText (CODING PROCESS, DOMAIN ONLY, HOW TO CHOOSE A CODE).
- **Options.**
  - Whichever lands first applies the bullet (current plan).
  - Fix an explicit order: PR #62, then CP-12-19, then CP-12-32.
- **Evidence.** `RR/notes-for-pr-62.md` item 16; `CP/CP-12-19-part-a-boundaries.md`; `CP/CP-12-32-volunteer-and-child-welfare-routings.md`.
- **Real-run counts.** Not applicable.
- **What depends on it.** Gate baselines and the S3.2 consistency between hints and rulesText.

### E-52 · The G11 adjudication queue, and boundaries with no rows

- **Question.** In what order does Severin rule on the 75 proposed rows? And who writes rows for the boundaries that have none?
- **The 75 rows.** P-01 to P-75: 10 from the LM queue, 22 from the NLM queue, 43 invented. Each must be checked against the fresh held-out set before entering gold, because the review queue and that set share statements.
- **Boundaries with no rows yet.**
  - The A3.3 side (1 row needed) and the A3 domain side (2 needed) of E-20.
  - "Improved behavior" (E-06).
  - Y4.12 incidence (E-07).
  - Bare "stability" (E-25).
  - Y6.3 vs Y6.4 (E-12).
  - School climate (E-38).
  - Engagement (E-17).
- **Settled rules whose rows are also unruled** (not repeated as questions above):
  - Volunteers, G15: P-27 to P-30.
  - Child-welfare entry, G13: P-41 to P-44.
  - Money, F1-1 and CF-034: P-69 to P-72.
  - Pitching and business, from the PR #62 notes: P-11 to P-14.
- **Codes.** All of the above.
- **Options.**
  - Rule all 75 rows in one sitting.
  - Rule per CP, in landing order.
  - Ship hints as non-gating previews meanwhile. This is G11's rejected option; it is listed only because many CPs now wait on rows.
- **Evidence.** `RR/proposed-design-rows.md` and `.csv`; DECISIONS.md G11; each CP's Gold impact section.
- **Real-run counts.** Not applicable.
- **What depends on it.** CP-11-03, CP-12-14 item 28, CP-12-15, CP-12-19, CP-12-31's later hint, CP-12-32, and the A3.1 deviation CP.

### E-53 · Multi-outcome statements: enforcing the split

- **Question.** How should the splitting rule, which the prompt already has, be enforced? Through the atomizer, an eval check, or the review desk?
- **Codes.** Rule 2 (split lists). Every domain is affected.
- **Options.**
  - Atomizer or splitter changes (B3 P: "splitter issue").
  - A split audit in the eval (pilot P).
  - Rely on secondary codes. B1 found these mostly work in Y2 to Y4.
- **Examples.**
  - "reading comprehension and critical thinking" (Y1.1 + Y1.7).
  - "academic and social confidence" (Y1.12 + Y5.4).
  - "Career-readiness skills (communication, financial empowerment, self-advocacy, and teamwork)", coded whole to Y7.3.
  - "Improved student health outcomes through on-site access to medical, dental, and behavioral services", coded Y8 domain-only although it names Y8.5 and Y8.9.
  - "manage food budgets while maintaining nutritional standards", coded F2.1 in one row and F2.2 in another.
  - "Improved adult well-being and instructional efficacy through professional coaching" (A1.3 + A1.1).
- **Evidence.**
  - `PILOT/reviews/practitioner-review.md`.
  - `RR/batch2/review/practitioner-review.md` item 3.
  - `RR/batch3/recommendations.md` later #13.
  - `RR/batch4/review/practitioner-review.md` item 5.
- **Real-run counts.**
  - 82 Y1-primary rows carry a secondary code and contain "and" or a comma; at least 10 of the top 25 are clearly two results.
  - About 10 of 38 resilience texts are compounds.
- **What depends on it.** This is the project's known "split multi-outcome statements" lead. B2 and B4 say it fixes more rows than any tie-breaker or citation change.

### E-54 · The atomizer drops the beneficiary

- **Question.** Should the atomizer carry the grade or beneficiary (for example "Elementary participants") into the atomic text, since its loss caused the Y1.8 template error and limits CP-11-03 hint 1?
- **Codes.** Y1.8 and Y1.1 directly. Any code whose part or age depends on who changes is also affected (rule 1).
- **Options.**
  - Change the atomizer.
  - Show the beneficiary column to the coder.
  - Rely on review-desk corrections (G12).
- **Evidence.**
  - `DESK/README.md` (correction 1).
  - `PILOT/reviews/practitioner-review.md` ("What the researchers missed", item 3).
  - `CP/CP-11-03-y1-coding-hints.md` ("Limit, stated plainly").
- **Real-run counts.** 35 of 36 NLM Y1.8 rows (one template, 35 programs).
- **What depends on it.** The value of CP-11-03 hint 1, and part routing for volunteer and caregiver statements.

### E-55 · Counting and consistency

- **Question.** Should priorities and real-run evidence count unique texts or programs instead of rows? And should the review desk add a same-text consistency check?
- **Codes.** All.
- **Options.**
  - Count unique texts.
  - Count programs (pilot P: "Program counts should drive the priority calls").
  - Keep row counts with template flags.
  - A same-text check on the desk would catch one text given several codes.
- **Evidence.**
  - `RR/SUMMARY.md` ("Template inflation").
  - `PILOT/reviews/practitioner-review.md` items 2 and 5.
  - `RR/real-run-code-counts.csv`, which already has unique-text columns.
- **Real-run counts.**
  - Y1.8: 36 rows from 2 texts.
  - Truancy template: 12 rows from one text.
  - Musicopia: 4 program keys.
- **What depends on it.** Every count quoted in this list, and the frequency threshold for new codes (E-28).

### E-56 · Verifications that would change answers above

- **Question.** Which outstanding verifier requests should run before the panel rules, because their verdicts open or close the questions above?
- **Requests not sent or not returned:**
  - Conley work side (E-40).
  - CCSS W.3 and an OECD-hosted PISA 2022 framework (E-41).
  - Hulleman on "or community" (E-42).
  - CP-12-01's V1, V2 and V3 (E-43).
  - A YRBS 2025 suicide item (E-08).
  - An NCTSN recovery concept (E-46).
  - The Keyes MHC "calm and peaceful" lead for Y8.7 "restored" (decision Y8-2 waits on it).
  - An EDSCLS primary source (E-38).
  - OPM Kirkpatrick, with a .gov URL still to be found (E-46).
  - The NAAEE full guidelines, for FD-P27 on Y6.6 (V-Y6-1 returned PARTIAL; the full text is not yet read).
  - CIRCLE "engaged worldview" (V-Y6-2, optional).
  - V-Y5-2 NRC 2009 on a National Academies Press copy (FD-P26, the science half of Y5.3).
  - WWC Study Review Protocol v5.1 (FD-P23 cites v5.0).
  - CSSP year (V6), CFPB age range (V9), and the SNAP-Ed live wording (V7 follow-up).
  - Hosts still pending: `hidi-renninger-2006`, `essa-4109-tech-capacity`, `muhammad-five-pursuits`.
- **Codes.** As listed in each item.
- **Options.**
  - Run them all before the panel.
  - Run only those that gate a panel question.
  - Let the panel rule with the current verdicts and revisit later.
- **Evidence.**
  - The "Verification requests" sections of CP-11-01, CP-11-02, CP-12-01, CP-12-04, CP-12-05, CP-12-06, CP-12-07, CP-12-08, CP-12-09, CP-12-10 and CP-12-28.
  - `RR/applied-3.1.5.md`.
- **Real-run counts.** Not applicable.
- **What depends on it.** E-08, E-38, E-40 to E-43 and E-46, plus Y2, Y5, Y6 and Y7 drift.

### E-57 · STANDARDS and CONFUSIONS housekeeping that only Severin can do

- **Question.** Should the strict merged-components test from G6 be written into STANDARDS.md (Severin's own edit)? And where are the 2.x-numbered tie-breakers restated?
- **Codes.** All merged-components entries: FD-P23 (Y1.15) and the closed Y4 entries; CF-019, CF-008, CF-016.
- **Options.**
  - Severin edits STANDARDS S1.6 to add the test.
  - Leave the test in DECISIONS.md only.
  - Restate CF-019 (A1.2 / A3.1, 2.x "8.3 · 11.2") in CP-12-27's 3.x section. CP-12-19 left it alone because the 2.x tests read "A3.1" as "3.1".
  - CF-008's 3.x copy waits on E-21.
  - CF ids are provisional and renumbered at merge.
- **Evidence.**
  - DECISIONS.md G6.
  - `CP/CP-12-19-part-a-boundaries.md` ("CONFUSIONS.md and CF-019").
  - `CP/CP-12-27-renumber-2x-references-by-script.md`.
  - `RR/applied-3.1.5.md` (CP-12-15: the tests now read only the 2.x part).
- **Real-run counts.** Not applicable.
- **What depends on it.** The consistency rule S3 ("this file wins"). Coders must not be pointed at retired numbers.
