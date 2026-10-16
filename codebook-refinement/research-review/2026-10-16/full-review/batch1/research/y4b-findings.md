# Y4 Social & Emotional Skills, codes Y4.7-Y4.12 (plus Y4.3's scope): research findings (y4b)

Researcher: y4b. Date: 2026-10-16. Codebook 3.1.4. These are leads for independent verification. No repo file was changed, and no held-out gold was read. Real-use counts are unique texts from both real runs (LM = logic-model run 3.1.2, NLM = no-logic-model run). They are model codes, not gold. Y4.1-Y4.6 and the CASEL anchor check belong to the other Y4 researcher. I re-read the CASEL PDF only to quote competency definitions.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Y4.12 | Framework. Cites CASEL RS "Resisting negative social pressure" (partial) and "NHES (2024) Standard 4" (direct) | **Fix citation.** The NHES wording in the registry and `basis` is not on the cited 2024 SHAPE America page; it matches the separate 2022 NCSHE set. Re-quote the 2024 refusal indicators, fill the registry's empty publisher, year, tier and `codebook_names`, and close the "avoid unsafe situations" half with CASEL's RDM definition ("safety concerns") | High |
| Y4.12 | ~6 of 13 unique texts are generic "reduced risky behavior" (incidence) | Hint: incidence with no named behavior goes to Y8 domain-only. Severin decides | Medium-low |
| Y4.9 | Adapted, FD-P06 says absorbed 4.3.4 "had no source" | **Fix citation and amend FD-P06.** CASEL's Social Awareness definition names "recognize family, school, and community resources and supports". SHAPE 2024 NHES 3.5.2 and 4.8.3 add tier-B support | High |
| Y4.7 | Framework. The registry cites only the teamwork bullet | **Fix citation.** Add "Showing leadership in groups" (and the RS definition's "provide leadership"). About 40 unique real texts are bare "leadership". Drop the stale "(in flight)" note | High |
| Y4.11 | Adapted, partial fit | **Fix citation.** Add the RDM competency definition ("caring and constructive choices ... ethical standards") and RS "Standing up for the rights of others" (gold S223). Optional hint for generic "improved behavior" | High (citation) / Low (hint) |
| Y4.8 | Adapted, direct | Keep. Add the RS definition ("establish and maintain healthy and supportive relationships") for "maintaining". Optional hint on "healthy relationships" | Medium |
| Y4.10 | Adapted, direct | Keep. Chess, puzzles and "strategic thinking" split Y4.10/Y1.7: decision item, no source change | Low |
| Y4.3 | Adapted (FD-P03), "outside schoolwork" | **Narrow the setting rule to persistence and study techniques only.** Name focus/attention and time management, and send self-control to Y4.2. Cite CASEL's Self-Management definition (partial) and EASEL "attention control". Amend FD-P03 | Medium |

---

## Y4.12 Risk Avoidance & Refusal Skills

**1. The NHES component is quoted from the wrong edition (S1.4, S1.5). High.**
The registry (`v3/verification_2026_09_27.py` line 157) and the code's `basis` quote Standard 4 as "Demonstrate refusal skills to avoid or reduce health risks". The URL is SHAPE America's 2024 page. I fetched it on 2026-10-16. The phrase does not appear on it. The 2024 page reads:

- Standard 4: "Use interpersonal communication skills to support health and well-being of self and others."
- Refusal indicators: 4.5.5 "Demonstrate refusal skills to use in a variety of situations."; 4.8.5 "Use refusal skills and strategies in a variety of situations."; 4.12.5 "Apply refusal skills and strategies in a variety of situations."

URL: https://shapeamerica.org/standards/health/new-he-standards/ (page metadata shows an update on 2026-06-24, before the 2026-09-27 verification).

The quoted wording belongs to a different set. A HealthSmart alignment PDF quotes "4.8.5 Demonstrate refusal skills to avoid or reduce health risks." under the heading "National Consensus for School Health Education's National Health Education Standards" (https://www.etr.org/healthsmart/assets/File/standards/NCSHE-2022-NHE-standards-healthsmart-6-8-3dEd.pdf; this is a vendor document, so treat it as a lead only).

There are now two national sets:
- SOPHE: the standards were released by "The National Consensus for School Health Education", dated "September 1, 2022" (https://sophe.org/news/release-of-the-national-health-education-standards-3rd-edition).
- SHAPE America announced "the release of the new" standards, "launched on March 12" (press release dated March 25, 2024; https://shapeamerica.org/pressroom/2024/shape-america-releases-new-national-standards-for-physical-education-and-health-education.aspx).
- Human Kinetics: "One set was developed in 2022 by the National Consensus for School Health Education." (https://us.humankinetics.com/blogs/excerpt/comparing-the-two-sets-of-national-health-education-standards)

The 2026-09-27 verifier's note says the site "is published by the National Consensus for School Health Education", which conflates the two. The NCSHE standards page (schoolhealtheducation.org/standards) blocks fetching (robots), so I could not check the NCSHE text first-hand.

The registry entry `shape-nhes-2024` also has `publisher`, `year` and `tier` set to null and `codebook_names` empty, while the Y4.12 source line names "National Health Education Standards".

*Smallest change:* a CITATION_FIX PATCH. Cite "SHAPE America (2024), National Health Education Standards, Standard 4, indicators 4.5.5/4.8.5/4.12.5" with a 2024 excerpt. Set publisher, year and tier (B), and add "National Health Education Standards" to `codebook_names`. Add a note that the 2022 NCSHE set is a distinct document. Fit stays direct for refusal skills. Claims y4b-10, y4b-11.

**2. Close the "avoiding unsafe situations" half with an RDM component. High.**
The CASEL bullet is partial because it covers only peer pressure. CASEL's own Responsible Decision-Making definition reads: "This includes the capacities to consider ethical standards and safety concerns, and to evaluate the benefits and consequences of various actions for personal, social, and collective well-being." (CASEL PDF, https://casel.s3.us-east-2.amazonaws.com/sites/5/CASEL-Framework-and-Skills.pdf, extracted with pdftotext.)

This also fixes a taxonomy oddity. Y4.12 sits in category E (Responsible decision-making), but its only CASEL component is a Relationship Skills (D) bullet. With the RDM clause, the code has a component in its own category. The 2024 NHES indicator 4.2.3, "Demonstrate communication skills and strategies to use if uncomfortable, unsafe, or harmed.", is partial support for young children. Adjudicated S172 ("resist peer pressure and avoid risky behaviors") depends on the avoidance half. *Change:* fix citation. No FD. Claims y4b-09, y4b-11.

**3. Real use: incidence lands in a skill code. Medium-low.**
Y4.12 has 4 LM and 9 NLM unique texts. About six are generic incidence with no named behavior: "Reduced risk of negative behaviors", "lessens youth negative risk-taking behavior", "prevention of negative & risky behaviors", "Reduction in negative risk-taking behavior through group-based social-emotional learning projects". The exclude sends "an actual change in substance use or violence" to Y8.11/Y8.12, but unnamed risk behavior has no Y8 code. That is why the model falls back to Y4.12.

*Options for Severin:* (a) a hint that generic risk-behavior incidence goes to Y8 domain-only (CP-09-09), which keeps Y4.12 a skill; or (b) widen Y4.12 to take generic avoidance behavior. I recommend (a). It matches the code's skill/incidence line and gold S172/S052 (both skills). Enum +0.

## Y4.9 Help-Seeking & Offering Support

**FD-P06's premise is wrong: CASEL does name awareness of supports. High.**
FD-001 and FD-P06 say 4.3.4 "Awareness of supports and resources" had no source and is "not a CASEL example skill". That is true of the bullets, but CASEL's Social Awareness definition reads: "This includes the capacities to feel compassion for others, understand broader historical and social norms for behavior in different settings, and recognize family, school, and community resources and supports." (CASEL PDF, URL above.)

So "knowing where to find support" (definition) and "naming resources to contact in a crisis" (include; adjudicated S122) have a CASEL component, though in category C while Y4.9 sits in D. Tier-B cross-sector support comes from the SHAPE America (2024) NHES:
- 3.5.2: "Locate home, school, and community resources to support health and well-being."
- 3.2.2: "Demonstrate when and how to seek help from others at home, at school, or in the community."
- 4.8.3: "Use various communication strategies to seek and offer support and assistance."

*Smallest change:* a CITATION_FIX PATCH adding the Social Awareness definition clause (and optionally NHES 3.5.2 / 4.8.3) as registry supports. Amend FD-P06 so it reads as merged components across two CASEL competencies (RS bullet plus SA definition clause), not a merge with an unsourced extension. It is still merged-components, so the drift count does not change. Claims y4b-04, y4b-05, y4b-06.

*Fidelity note.* The include "willingness to seek help" and the real-use stigma rows (NLM: "Reduction in the stigma associated with seeking help", four similar texts) are help-seeking attitudes. The CASEL bullet names the behavior. This is a small observability stretch. I would log it in FD-P06's text rather than open a new FD. Medium.

Real use: 6 LM and 9 NLM unique texts, all plausible (help-seeking, awareness of supports, stigma, peer support, recognizing suicidal ideation in peers).

## Y4.7 Teamwork, Collaboration & Group Leadership

**Half the code is uncited in the registry (S1.3). High.**
The registry supports Y4.7 with "Practicing teamwork and collaborative problem-solving" only. The verifier's note says the leadership half "matches a separate bullet ('Showing leadership in groups') that the claim does not cite". The `source` line omits it too. Both texts are in the CASEL PDF:
- Relationship Skills bullet: "Showing leadership in groups".
- The RS definition lists the capacities to "cooperate, work collaboratively to problem solve and negotiate conflict constructively, navigate settings with differing social and cultural demands and opportunities, provide leadership, and seek or offer help when needed."

This matters because leadership is the bulk of the code's real use. About 26 LM and 24 NLM unique texts mention leadership in Y4.7, against 6 LM and 10 NLM in Y6.4. Most are bare: "leadership skills", "be leaders", "grow into leadership roles", "Increased leadership". Adjudicated S004, S059 and H032 rest on the leadership half.

*Smallest change:* add both components to the registry and source line (PATCH). Also delete the stale useInstead text "Same line as CP-01-06's leadership rule (in flight)". CP-01-06 was approved on 2026-09-26 for 2.5.1 and is not in flight.

*Coding note.* The definition says "leading peers within a group task", but the model already sends bare "leadership" to Y4.7 and community-framed leadership to Y6.4. That split is consistent and fits CASEL's "provide leadership". A one-line hint ("leadership with no civic or workplace setting → Y4.7") would make it explicit. Medium. Claims y4b-01, y4b-02.

## Y4.11 Ethical & Prosocial Choices

**Partial fit, with a better component in the same framework. High.**
The 2026-09-27 verifier rated the two RDM bullets partial and pointed to the competency definition. The full text reads: "RESPONSIBLE DECISION-MAKING: The abilities to make caring and constructive choices about personal behavior and social interactions across diverse situations." The next sentence includes "consider ethical standards" (CASEL PDF).

The include "standing up for a classmate" (adjudicated S223, "stand up for classmates who are being treated unfairly") matches the RS bullet "Standing up for the rights of others" word for word. CF-016 already routes that skill to 4.5.2 (now Y4.11) but never cited it.

*Smallest change:* add the RDM definition and the RS bullet as registry supports, keep the two bullets, and mark the fit direct if verified. FD-P08 stays (merged components). Claims y4b-07, y4b-08.

**Real use: generic behavior. Low.**
6 of 7 LM unique texts are bare behavior: "Improved behavior", "Soft Skills — Positive behaviors", "Youth will model positive behaviors for peers". These are not "a choice in a specific situation". Y6.1 excludes the specific-choice case, and Y8.6 holds "behavioral problems". Leave this to the practitioner reviewer. If acted on, add a hint: "positive/improved behavior with no ethical or prosocial act named → Y4 domain-only" (CP-09-09). No source change.

Fidelity: "small daily contributions to the class or program" (S227) is covered by "caring and constructive choices about personal behavior". No FD.

## Y4.8 Relationship-Building & Conflict Resolution

The bullets are direct. The definition's "maintaining" is covered by the RS definition: "The abilities to establish and maintain healthy and supportive relationships". I propose it as an added component (claim y4b-03). "Repairing" rests on "Resolving conflicts constructively". Medium. No FD change.

Real use: 21 LM and 19 NLM unique texts, mostly conflict resolution. Some are states, not skills ("Has healthy relationships with others", "Youth will maintain healthy relationships"), and the exclude sends those to Y3.3/Y3.4. Others are boundaries education ("Increased understanding of healthy relationships and personal boundaries"). A hint that "healthy relationships" taught as skills or knowledge goes to Y4.8, and a named relationship as a state goes to Y3.3/Y3.4, would match the current exclude. Low priority.

## Y4.10 Decision-Making & Problem-Solving

The two bullets are direct; keep. One coding observation, low confidence: about 10 unique texts on critical thinking, chess or strategy land in Y4.10 ("Mastery of fundamental chess rules, tactics, and classic strategic planning.", "strategic thinking", "Improved critical thinking and problem-solving skills through puzzles and guided play."), against 21 in Y1.7.

CASEL itself places critical thinking under RDM ("Recognizing how critical thinking skills are useful both inside & outside of school"), while the codebook keeps it in Y1.7. The Y1 pilot's deferred item 11 proposed a Y1.7 exclude for "thinking skills with no information object", which would send such texts here. Decide that boundary in one place: either Y1.7 (information object) or Y4.10 (personal or social problem), with games and puzzles named. No gold row covers chess. S208 (math problem-solving → Y1.3) and S220 (puzzle persistence → Y1.10) constrain the wording.

## Y4.3 Goal-Setting, Organization & Self-Discipline: the "outside schoolwork" rule

**The rule is the codebook's own, and it contradicts how focus is coded. Medium.**
The verifier already noted "The code's limit to 'outside schoolwork' is the codebook's own scope rule, not the framework's". CASEL's Self-Management definition has no setting limit: "The abilities to manage one's emotions, thoughts, and behaviors effectively in different situations and to achieve goals and aspirations."

Real use shows the conflict:
- Focus and attention split across Y4.3 (LM "Improved focus and discipline", NLM "Increased mental focus and self-discipline in the school setting.", "executive functioning", "mental focus"), Y4.2 (NLM "focus", "greater focus", "strengthen attention", "augment focus"), Y1.9 ("Improved Focus", "Brain Break" classroom focus) and Y1.11.
- "Self-control" goes to Y4.3 in LM and Y4.2 in NLM.

Gold S103 ("self-regulation and ability to follow classroom routines" → Y4.2, alternate Y4.3) supports the Y4 home. The Y1 pilot's practitioner reviewer proposed the same split and deferred it to this review.

*Smallest change (MINOR, definition scope):*
- Definition: "Setting personal goals and working toward them; organization, time management, self-discipline and sustained focus or attention, in any setting."
- Exclude: "persistence on schoolwork; named study techniques; impulse control and self-control."
- Use instead: Y1.10 / Y1.11 / Y4.2.

The setting rule then applies only where Y1.10 and Y1.11 already draw it. Time management is direct under "Using planning and organizational skills". Focus and attention are only partly covered by CASEL ("manage ... thoughts"). The EASEL Lab's *Navigating SEL from the Inside Out* (2nd ed., Harvard GSE, Wallace-funded; attribute to the EASEL Lab, not Wallace) defines attention control as "The ability to attend to relevant information and goal-directed tasks while resisting distractions". It lists Cognitive-domain skills as "attention control, inhibitory control, working memory and planning skills, cognitive flexibility, and critical thinking" (https://wallacefoundation.org/sites/default/files/2024-10/navigating-social-and-emotional-learning-from-the-inside-out-2ed.doi_.10.59656%252FYD-OS5671.001.pdf). I could not confirm the publication year from the fetched pages.

*FD:* amend FD-P03. If the verifier rates CASEL's "manage ... thoughts" partial for attention, the attention element is a departure from the CASEL anchor supported by a second framework. The closest S1.6 case is codebook-defined, which is counted: Y4 would go from 0 to 1 of 12. Otherwise it stays merged-components. Severin decides. Enum +0. Claims y4b-12, y4b-13.

## Taxonomy note (Y4.7-Y4.12)

Category E holds Y4.12, whose only CASEL bullet sits in D; finding Y4.12-2 fixes that without renumbering. Y4.9 now draws on C (definition) and D (bullet), which is fine under merged-components if FD-P06 says so. CASEL RS "Standing up for the rights of others" is used by Y4.11 (E). This is CF-016's existing routing; cite it there. No construct the field treats as distinct is missing from D-E. Prosocial behavior (EASEL Social domain: "conflict resolution/social problem solving, and prosocial/cooperative behavior") maps to Y4.8 and Y4.11. No new codes are proposed.

## Unlogged departures found (Q6)

- **Y4.3, focus/attention:** only if the definition is widened as above. See the FD-P03 amendment.
- **Y4.9, "willingness" (an attitude):** a small observability stretch. Note it in FD-P06.
- **Y4.12:** none once the RDM clause is cited. Without it, "avoiding unsafe situations" is an unlogged widening of a code marked framework.

No code in Y4.7-Y4.12 names a population outside its sources.

## Could not fetch

- schoolhealtheducation.org/standards (robots-blocked).
- The NCSHE 2022 primary text, so its wording is known only through a vendor alignment document.
- The publication year of the EASEL guide.
