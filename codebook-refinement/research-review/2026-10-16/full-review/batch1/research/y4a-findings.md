# Y4 Social & Emotional Skills, codes Y4.1-Y4.6 and the domain anchor: findings from "y4a"

Researcher: y4a. Date: 2026-10-16. Scope: the CASEL 2020 anchor check (is it current, revised, correctly attributed), Y4's category structure against CASEL's five competencies, and codes Y4.1-Y4.6. Researcher "y4b" covers Y4.7-Y4.12.

Everything below is a lead for an independent verifier. Excerpts are what WebFetch returned. The fetch tool caps each quote at about 125 characters, so long items are split at the point where it cut them. I read the design gold only and never opened the held-out file. Real-use counts are unique texts in the logic-model (LM) and no-logic-model (NLM) runs. These are model codes, not gold.

## Summary

| Code / question | Today | Suggestion | Confidence |
|---|---|---|---|
| Anchor: CASEL 2020 | verified, tier B | **Keep.** No revision since 2020. Fix the registry URL so it points at the titled document (y4a-10). | high |
| Structure: 5 categories | match CASEL's five names | **Keep.** Rebuild the CF-016 routing table in 3.x numbers (it is still in 2.x numbers) and add the unrouted CASEL skills. | medium |
| Y4.1 Emotion awareness | framework, direct | Keep. Optionally add "Linking feelings, values, and thoughts" (y4a-07). Decide how a bare "self-awareness" statement is coded. | medium |
| Y4.2 Regulation & coping | adapted (FD-P02) | Keep. The definition's "impulses" goes past the two cited bullets: cite the competency definition (y4a-08). | medium |
| Y4.3 Goals & self-discipline | adapted (FD-P03) | Keep. "Persistence" is not a cited bullet: cite the definition's "motivation & agency" clause (y4a-09) or reword. | medium |
| Y4.4 Empathy & social awareness | adapted (FD-P04) | **Fix citation.** Add gratitude, concern for feelings and situational demands to the registry and the source line (y4a-05, y4a-06). | high |
| Y4.5 Respect for diversity | framework, direct | **Log FD (merged-components)**, or relabel as adapted. It cites two competencies and neither is the category it sits in. Add the Social Awareness definition (y4a-04). Optionally add Learning for Justice Diversity standard 6 (y4a-03). | high (departure), medium (fix) |
| Y4.6 Communication & public speaking | framework, **partial** | **Fix citation.** Add CCSS Speaking & Listening Anchor Standard 4 for public speaking (y4a-01), and the CASEL definition clause for listening (y4a-02). Without these it is an unlogged departure. | high |

## Q1. Anchor check: CASEL (2020)

**Finding 1.1: current, not revised or superseded, correctly attributed to CASEL.**

- The live framework page (https://casel.org/fundamentals-of-sel/what-is-the-casel-framework/) lists the same five competencies and the same example skills the registry cites. Examples: Self-awareness "Identifying one's emotions", Relationship skills "Communicating effectively".
- The page metadata shows it was modified on 2026-07-14, and the footer reads "© 2026 CASEL". The page has no notice of any revision after 2020.
- The 2020 update is the latest one. CASEL's own event page (https://casel.org/events/a-reintroduction-to-social-and-emotional-learning, dated Oct 9, 2020) says it "Shares an updated definition and framework for SEL" with "enhanced descriptions of the five core social and emotional competencies".
- An op-ed by CASEL's CEO (The 74, Dec 15, 2020; https://www.the74million.org/article/niemi-casel-is-updating-the-most-widely-recognized-definition-of-social-emotional-learning-heres-why/) labels the change "CASEL's Definition of SEL (2020 Update)". The op-ed is corroboration only, not a citable source.
- A 2025 bibliometric review (https://link.springer.com/article/10.1007/s12310-025-09828-0) reports no CASEL revision after 2020. The only post-2020 revision it names is Jones et al. (2021), which is a separate framework.
- Attribution: the organization is the author and publisher, and the registry names it exactly (S1.4 satisfied).
- Confidence: high. I fetched the live page, the 2020 PDF and the event page.

**Finding 1.2: the registry URL does not show the cited title (fix citation, low stakes).**

- The registry URL (https://casel.s3.us-east-2.amazonaws.com/sites/5/CASEL-Framework-and-Skills.pdf) still loads. My fetch found "no printed title, date, copyright line, or publisher".
- The document that carries the cited title is https://casel.s3.us-east-2.amazonaws.com/CASEL-SEL-Framework-11.2020.pdf. Its heading reads "CASEL'S SEL FRAMEWORK: What Are the Core Competence Areas and Where Are They Promoted?" It prints no date either; the year 2020 comes from the filename and the event page.
- The 2026-09-27 verifier noted the same mismatch.
- Smallest change: switch the `url` to the 11.2020 PDF and keep the live casel.org page as a secondary link (claim y4a-10).

## Q4. Taxonomy: categories against CASEL's five competencies

**Finding 4.1: the categories match CASEL's five competencies one for one and keep CASEL's names.** Keep.

- Category A has only one code because identity, self-efficacy and growth mindset moved to Y5 (FD-P10 and FD-P11, both closed). The research basis states this openly.
- The weak evidence for that split is still EASEL. The best I found was a Harvard GSE news item (https://www.gse.harvard.edu/news/uk/20/01/defining-social-emotional-learning): "most frameworks incorporate elements of cognitive, emotional, social, value, perspectives, and identity domains". That is a news piece, so it can serve as a lead only.
- The EASEL taxonomy page (https://easel.gse.harvard.edu/taxonomy-project) does not define the domains. EASEL stays at "partial".
- Confidence: medium.

**Finding 4.2: CF-016, the routing table for CASEL skills that have no code of their own, is still written in 2.x numbers, and the 2020 list has skills nobody routes.**

The live list (fetched above) has 39 example skills, and 3.x codes or routes most of them. These are not cited or routed in any 3.x text:

- **Self-awareness**
  - "Linking feelings, values, and thoughts": proposed home Y4.1 (see Y4.1).
  - "Demonstrating honesty and integrity": Y6.1 uses it as an example but cites only the Search Institute.
  - "Developing interests and a sense of purpose": Y2 or Y5.5.
- **Self-management**
  - "Showing the courage to take initiative" and "Demonstrating personal and collective agency": Y5.6.
- **Social awareness**
  - "Recognizing strengths in others", "Showing concern for the feelings of others", "Understanding and expressing gratitude" and "Recognizing situational demands and opportunities": all Y4.4.
  - "Understanding the influences of organizations and systems on behavior": Y6.3.
- **Relationship skills**
  - "Standing up for the rights of others": Y4.11 or Y6.3 (y4b's scope).
- **Responsible decision-making**
  - "Demonstrating curiosity and open-mindedness": Y2.2.
  - The two critical-thinking items: Y1.7.

Two side notes:

- Y5.4's `basis` names "Identifying personal, cultural, and linguistic assets", but the registry support for Y5.4 lists only self-efficacy and growth mindset. That belongs to the Y5 researcher.
- Smallest change: a renumbered 3.x version of the CF-016 table, with no new codes. Confidence: medium. The routing choices are mine and need review.

## Y4.1 Emotion Awareness

- **Component fit:** direct. "Identifying one's emotions" appears word for word (fetched).
- **Real use:**
  - 16 unique texts in the LM run and 11 in the NLM run.
  - Several statements ask for more than naming feelings. Examples: "Increase in awareness of anger triggers and emotional responses."; "Students have enhanced self-awareness"; "foster self-awareness".
  - A bare "self-awareness" goes to Y4.1 (7 LM, 5 NLM) or Y5.1 (3 LM, 3 NLM). That is an unstable split.
  - No adjudicated design-gold row is coded Y4.1.
- **Fidelity:** the code's text stays inside its cited component. It is narrower than the category.
- **Better grounding (optional):** CASEL Self-awareness "Linking feelings, values, and thoughts" covers awareness of how one's emotions connect to thoughts and reactions (claim y4a-07).
- **Observability:** a bare "self-awareness" is CASEL's whole competency, which 3.x splits across Y4.1, Y5.1 and Y5.4. A tie-breaker should decide where it goes. Two options:
  - Y4 domain-only coding, consistent with 3.1.0.
  - Y4.1, cited on the competency definition "understand one's own emotions, thoughts, and values".
  - I lean toward domain-only, because Y4.1's text would otherwise widen. That is a matter for the confusion miner.
- **Confidence:** medium.
- **Smallest change:** keep. Optionally add the component. Decide the bare "self-awareness" rule in a cycle.

## Y4.2 Emotion Regulation & Coping

- **Component fit:** direct. "Managing one's emotions" and "Identifying and using stress-management strategies" appear word for word.
- **Fidelity:** the definition says "Managing strong emotions **and impulses**", and the include line lists "self-regulation". Neither cited bullet names impulses. CASEL's competency definition does: "The abilities to manage one's emotions, thoughts, and behaviors effectively in different situations" and "the capacities to delay gratification, manage stress, and feel motivation & agency". This is not a true departure, because the anchor covers it. The citation is simply incomplete.
- **Smallest change:** fix the citation by adding the definition clause (claim y4a-08). No FD needed.
- **Real use:**
  - 32 unique texts in the LM run and 48 in the NLM run. Examples: "increase self-regulation", "manage stress", "Improvement in anger. management and self-control".
  - "Resilience" splits across Y4.2, Y4.3 and Y5.4. LM unique texts: Y4.3 5, Y5.4 5, Y4.2 4. NLM: Y5.4 12, Y4.2 5.
  - CASEL names no resilience construct. This is a confusion-miner lead and needs no source change here.
- **Confidence:** medium.

## Y4.3 Goal-Setting, Organization & Self-Discipline

- **Component fit:** direct for goals, self-discipline and planning (verified, and re-confirmed in my fetch).
- **Fidelity:** the definition says "self-discipline **and persistence** outside schoolwork". "Persistence" is not a CASEL bullet. The closest CASEL text is "Exhibiting self-discipline and self-motivation" and the definition clause "feel motivation & agency to accomplish personal/collective goals".
- **Real use:**
  - Statements such as "Improved persistence" and "91% of students increased high level of motivation" land here, which matches the definition.
  - CP-09-09 already names a Y4.3/Y5.4 perseverance drift ([held-out row]).
- **Smallest change:** cite the definition clause (y4a-09), or reword "persistence" as "self-motivation and follow-through". The second option is closer to CASEL's words. The "outside schoolwork" limit narrows the construct and is a routing rule, so it is not a departure.
- **Confidence:** medium.

## Y4.4 Empathy, Perspective-Taking & Social Awareness

- **Component fit:** direct for perspectives, empathy and norms.
- **Fidelity (citation gap):** the definition and include line name **gratitude**, and the example statement is about gratitude (gold S082). The source line and the registry still omit it, and the `basis` says it "is not yet a registry support entry".
  - The live page has it word for word: "Understanding and expressing gratitude".
  - The definition's "caring about others' feelings" matches "Showing concern for the feelings of others".
  - "Reading social norms and expectations in different settings" matches "Recognizing situational demands and opportunities" better than the cited "Identifying diverse social norms, including unjust ones". The competency definition also says "understand broader historical and social norms for behavior in different settings".
- **Smallest change:** fix the citation by adding these components (y4a-05, y4a-06). FD-P04 (merged-components) stays as it is.
- **Real use:** 16 LM and 13 NLM unique texts. Mostly bare "empathy" and "social awareness"; they fit.
- **Confidence:** high. All are word-for-word bullets on the page I fetched.

## Y4.5 Respect for Diversity & Cultural Competence

- **Component fit:** each cited bullet is word for word. Relationship skills: "Demonstrating cultural competency". Self-awareness: "Examining prejudices and biases".
- **Fidelity (unlogged departure):**
  1. The code merges components from two different CASEL competencies.
  2. It sits in category C (Social awareness), which is neither of them. The registry verifier flagged this on 2026-09-27 ("check whether it should be 'adapted'"), and it was never acted on.
  - **S1.6 case:** merged-components. Logging it does not change the drift count, because merged-components entries are not counted.
  - The placement can be defended. The Social awareness definition reads "empathize with others, including those from diverse backgrounds, cultures, & contexts". Citing that clause (y4a-04) ties the code to the category it sits in.
  - "Respecting and **including** people" and "inclusive behavior" are not named in any CASEL bullet.
- **Better grounding (optional, medium):** Learning for Justice's Social Justice Standards, already in the registry for Y5.2.
  - The Diversity anchor standard 6 reads "Students will express comfort with people who are both similar to and different from them and engage respectfully with all people." Fetched from https://www.learningforjustice.org/sites/default/files/2022-09/LFJ-Social-Justice-Standards-September-2022-09292022.pdf.
  - Anchor standard 9 reads "Students will respond to diversity by building empathy, respect, understanding and connection."
  - That is a direct fit for "respect". The source is tier D, K-12 by its own statement, with the same sector widening as Y5.2 already uses.
  - Attribution: the copyright page reads "Social Justice Standards: The Learning for Justice Anti-Bias Framework Second Edition" and "© 2014-2022 The Southern Poverty Law Center, Inc." The registry's `cite_as` ("Learning for Justice — Social Justice Standards") omits the publisher and the edition. That is an S1.4 fix for whoever owns `learning-for-justice-sjs`.
- **Real use:**
  - 16 LM and 12 NLM unique texts. Examples: "multicultural understanding", "value cultural diversity", "appreciation for Arab cultural arts". The last follows CP-09-04's in-flight rule (appreciating other cultures goes to Y4.5), so I leave that boundary alone.
  - No adjudicated design-gold row is coded Y4.5.
- **Smallest change:** log FD (merged-components) and set the fidelity to adapted, or add the Social Awareness definition. Optionally add LfJ standard 6 as a second source.
- **Confidence:** high that a departure exists. Medium on which fix to choose.

## Y4.6 Communication & Public Speaking

- **Component fit:** partial (registry). "Communicating effectively" is word for word, and the competency definition covers "communicate clearly, listen actively". CASEL never mentions public speaking; my fetch confirms "The page does not mention public speaking."
- **Fidelity (unlogged departure):** the code's name, definition ("speaking to an audience") and include line ("presentations and public speaking") go past the cited component. Yet the code is marked `framework` with no FD. Public speaking is a real and frequent construct:
  - 11 LM and 5 NLM unique texts contain "public speaking".
  - Other examples: "extemporaneous speaking skills", "pitching ... to a panel".
  - The one adjudicated design-gold row for Y4.6 is S132, a 4-H county-fair demonstration.
  - Narrowing the code would orphan these statements.
- **Better grounding (tier B):** the Common Core College and Career Readiness Anchor Standards for Speaking and Listening (NGA Center & CCSSO, 2010).
  - Standard 4 sits under "Presentation of Knowledge and Ideas". It reads "Present information, findings, and supporting evidence such that listeners can follow the line of reasoning and the organization, development, and style are appropriate to task, purpose, and audience." The fetch returned this split into two pieces at the 120-character cut; the words are continuous. Source: https://thecorestandards.org/ELA-Literacy/CCRA/SL/.
  - The registry already holds the CCSS Writing anchors (`ccss-writing-anchors`, tier B), so this is a sibling entry.
  - Standard 1 ("Prepare for and participate effectively in a range of conversations and collaborations with diverse partners, ...") would also cover listening, but the CASEL definition clause is enough for that part.
- **Smallest change:** fix the citation by adding CCSS SL anchor standard 4 (y4a-01) and the CASEL definition clause (y4a-02). Y4.12 set the precedent: CASEL plus a second standards source, with fidelity Framework. If the CCSS link does not verify, log an FD for the public-speaking part under the codebook-defined case, with S132 as the gold row that has no other home.
- **Confidence:** high on the departure. High on the CCSS text, which I fetched.

## Not done

- I did not fetch the full Jones et al. (2021) EASEL framework.
- I could not curl any page, because the proxy refused the tunnel. Every excerpt came through WebFetch.
- I did not re-check links marked direct beyond the one live-page fetch, which re-confirmed them all.
