# A3 Systems, Policy & Community Conditions: research findings (a3)

Date: 2026-10-16. Scope: A3.1 to A3.3 (`codebooks/youthOutcomesV3.data.ts` from line 2115), codebook 3.1.4.
These are leads for independent verification. No repo file was changed. Real-use counts are unique
texts from `real-run-code-counts.csv` (LM = logic-model run, NLM = no-logic-model run). They are
model codes, not adjudicated gold.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| A3.1 | Framework; Coffman (2009) policy goals + Reisman et al. (2007) improved policies, both direct | Keep the citations. The definition's "institutional practice" half goes past both sources, and most real A3.1 use relies on that half. Either log an FD (codebook-defined half) or narrow to policy and funding. Severin decides. | High (the departure exists); medium (which fix) |
| A3.2 | Framework; Kania & Kramer (2011) Collective Impact | Fix the citation: add Reisman et al. (2007) "Strengthened alliances" and Coffman (2009) "Partnerships or Alliances" (both already verified in the registry). Collective Impact alone does not cover ordinary two-party partnerships, and K&K say so themselves. | High |
| A3.3 | Framework; Sampson et al. (1997), fit partial (host only) | Swap in the PubMed record so the fit can become direct. Fix the scope drift: the name "Community Conditions" pulls in community health, safety, norms and school climate that collective efficacy does not cover. Smallest fix: an exclude that sends those to the A3 domain only. | High (citation); medium (scope fix) |
| Domain | No school-climate home | School climate and culture statements land in A3.1 and A3.3 (about 9 unique texts). Lead: the U.S. Department of Education's Safe Supportive Schools model. Hint now; a new code goes to the backlog (enum +1). | Medium |

## 1. Anchor check (domain)

- **Coffman (2009), HFRP.** The citation still holds. HFRP closed and its archive moved (the verifier hit a robots error on archive.globalfrp.org). The full copy hosted by County Health Rankings is still served. I re-fetched it: https://www.countyhealthrankings.org/sites/default/files/media/document/resources/UserGuideAdvocacyEvaluationPlanning%20(2).pdf
  - Policy Adoption: "Successful passing of a policy proposal through an ordinance, ballot measure, legislation, or legal agreement."
  - "Policies formally established (bills, bonds, ballot measures, regulations, administrative policies)".
  - No change.
- **Reisman, Gienapp & Stachowiak (2007), AECF/ORS.** The citation still holds. I re-fetched the IssueLab copy: https://measureresults.issuelab.org/resources/1347/1347.pdf. Its six outcome categories are Shift in social norms, Strengthened organizational capacity, Strengthened alliances, Strengthened base of support, Improved policies and Changes in impact. A3 uses only "Improved policies". Two more categories fit A3 directly (see A3.2 and A3.3).
- **Kania & Kramer (2011).** Current and not superseded. I re-fetched https://ssir.org/articles/entry/collective_impact. The authors updated the framework in "Centering Equity in Collective Impact" (SSIR, Winter 2022; Kania, Williams, Schmitz, Brady, Kramer & Juster). The update keeps the five conditions. The Collective Impact Forum summary (https://collectiveimpactforum.org/resources/strategies-support-centering-equity-collective-impact) says equity is "integral implementation of all of the original five conditions and serve as the North Star." I could not fetch the SSIR 2022 PDF (it redirects to subscriber.ssir.org). Optional: note the update in `basis`. No code change.
- **Sampson, Raudenbush & Earls (1997).** A classic and still the defining source. The DOI landing page returned 403 to the 2026-09-27 verifier. PubMed has the primary abstract (see A3.3).
- **Research-basis drift.** `docs/codebook/research-basis.md` (A3 table) still says A3.1 is "codebook-defined" and lists Learning Forward (2022) as its source. CP-10-02 superseded both. The doc is a historical research map, so this is cosmetic. Suggest a one-line pointer to CP-10-02.

## 2. A3.1 Policy & Institutional Change

**Component fit.** Both cited components are direct for public policy, funding and implementation:
- Coffman: Policy Implementation is "Proper implementation of a policy, along with the funding, resources, or quality assurance to ensure it."
- Reisman: "the stages of policy change in the public policy arena. These stages include policy development, policy proposal, demonstration of support (e.g., cosponsorship), adoption, funding and implementation."

"Schools, districts, cities or states" is mostly covered:
- Coffman names city councils and "[state/federal/local]" agendas.
- Reisman's measurement table includes "How did students respond to new school policy about nutritious options in vending machines?" (Table A-5). School policy therefore sits inside its improved-policies examples.

**Fidelity of the code's own text (question 6): an unlogged departure.** The definition and the category description add "institutional practice". Neither source names it.
- Coffman: the fetch found no "institutional" or "school" policy anywhere in the document.
- Reisman: its policy category is "the public policy arena". It uses "institutional relationships" only under Strengthened alliances.

Real use rests mostly on this uncited half:
- LM run: of 28 unique texts, about 7 are policy or public funding ("Allocate new school funds to arts education", "Greater public investments & awareness for OST programming", "Increased policy changes informed by professional learning community participation"). About 21 are school practice, capacity or culture ("Schools adopt sustainable composting and greening programs", "Increased school capacity to sustain arts programming", "Sustaining inclusive school cultures", "Schools adopt health and wellness norms").
- NLM run: about 1 of 11 is policy ("Establishment of a robust CTE education pathway within the school district"). The rest are school effectiveness, culture or climate.
- The same split shows in model confidence: 23 of 34 LM rows are low or medium.

**S1.6 case.** None of the four cases fits cleanly:
- It is not sector widening, because the construct changes, not just the population.
- It is not merged components, because coders can tell a policy from a practice.
- The honest label is **codebook-defined** for the institutional-practice half. Under S1.6 that half must not be presented as part of Coffman or Reisman.

**Better grounding (lead, not fetched).** The program-sustainability and institutionalization literature fits "schools adopt and sustain a practice" more directly. Shediac-Rizkallah & Bone (1998), Health Education Research 13(1), is one example: it distinguishes continued benefits, institutionalization within an organization, and community capacity. PubMed (https://pubmed.ncbi.nlm.nih.gov/10178339/) and PMC both returned empty or captcha pages. **Not fetched: a lead only.**

**Smallest change (Severin decides):**
- (a) **Log FD** (case codebook-defined; departs: institutional practice in schools and districts beyond public policy). Keep the definition. Update A3's drift count from 0/3 to 1/3. Revisit if an institutionalization source is verified.
- (b) **Narrow**: change "institutional practice" to "formally adopted policy or administrative rules", and send practice adoption to A3 domain-only. This is MINOR and moves about 20 LM texts to A3/none.

I lean (a). The construct is real and frequent, and (b) leaves its statements with no code. Gold impact is small either way: only S101 and S019 are adjudicated A3.1, and both are policy or funding.

## 3. A3.2 Cross-Sector Partnerships

**Component fit.** Kania & Kramer is direct for common agenda and shared measurement: "Developing a shared measurement system is essential to collective impact."

**Fidelity of the code's own text: the code goes past its source.**
- The definition says "coordinated partnerships across organizations". The include says "coalition collaboration".
- K&K set collective impact apart from these. They write "Unlike most collaborations, collective impact initiatives involve a centralized infrastructure, a dedicated staff," and say it is "not merely a matter of encouraging more collaboration or public-private partnerships."
- Real use is mostly ordinary partnerships: "Stronger partnerships between Walnut Street Theatre and participating schools", "Spiral Q develops stronger partnerships with schools", "strengthen our partnerships with local K-12 schools". By my read, about 45 of 53 LM unique texts and 9 of 11 NLM are two-party or network partnerships, not collective-impact structures.

**Better grounding (fetched; both sources are already verified in the registry).**
- Reisman et al. (2007), Strengthened alliances (p. 17): "Description: the level of coordination, collaboration and mission alignment among community and system partners, including nontraditional alliances, e.g., bipartisan alliances, unlikely allies." Example outcomes (p. 18) include "Increased number of partners supporting an issue … Increased level of collaboration (e.g., coordination)". This excerpt was relayed through WebFetch's summary model, which broke the passage into pieces. The verifier should re-fetch it.
- Coffman (2009), Partnerships or Alliances: "Mutually beneficial relationships with other organizations or individuals who support or participate in an advocacy strategy". Its measures include "New or stronger organizational relationships developed". Caveat for the verifier: Coffman frames partnerships inside an advocacy strategy. Reisman is the closer fit for a general youth-serving partnership.

**Smallest change.** Fix the citation (PATCH): add Reisman "Strengthened alliances" as the component for partnership and collaboration, and keep K&K for shared agendas and shared measurement. Wording and enum stay the same, and no FD is needed once the citation covers the whole definition.

**Confusion note (low).** "Stronger family-school-community partnerships" texts sit between A3.2 and A2.6 Family Engagement Systems. Neither exclude names the other. A one-line tie-breaker would help: the organization's family-engagement structures go to A2.6, inter-organizational partnerships to A3.2.

## 4. A3.3 Community Conditions & Collective Efficacy

**Citation.** PubMed's record for the primary article (https://pubmed.ncbi.nlm.nih.gov/9252316/) confirms Science 277(5328):918-24, 1997, DOI 10.1126/science.277.5328.918, and quotes the abstract: "collective efficacy, defined as social cohesion among neighbors combined with their willingness to intervene". The registry fit is partial only because of the course-reading host, so adding the PubMed URL should let a verifier mark it direct. (PubMed's page did not show authors in my fetch. The metadata still matches.)

**Fidelity: the name goes past the source, and use follows the name.** The definition stays within Sampson: "Neighborhood cohesion, trust and willingness to act for the common good". But the code name and the category description say "community conditions", which Sampson does not cover. Real use follows the name:
- **Real collective-efficacy or cohesion fits:** about 8 of 32 LM and 2 of 9 NLM. Examples: "connected community members"; "Neighbors will be empowered and feel shared ownership of the space"; "Increased community cohesion through the execution of a Community Beautification Day".
- **The rest:**
  - community health: "Improved community-wide healthy behaviors", "Enhanced community immunity and reduction in preventable illness"
  - neighborhood condition: "Healthier, greener, safer neighborhoods"
  - social norms: "Communities normalize financial literacy conversations", "Our communities become more accepting of cultural differences"
  - school climate: "Improvement in school climate"
  - economy: "regional prosperity"
  - vague betterment
- Model confidence agrees: 31 of 40 LM rows and 8 of 9 NLM rows are low or medium, the highest share in A3.

**S1.6.** As long as the definition stays within Sampson, the departure is in the name and the category description, not the definition. No FD is required, but the coding drift is real.

**Smallest change, two options:**
- (a) **Narrow by exclude** (PATCH/MINOR): add the exclude "Community health, safety, economic or norm outcomes with no cohesion, trust or collective action → A3 domain only". With CP-09-09 these get A3/none with `uncoded` false, which is honest. Renaming to "Community Cohesion & Collective Efficacy" would be cleaner but is MAJOR, so defer it to the next MAJOR.
- (b) **Widen with a second component**: cite Reisman (2007) "Changes in impact": "the ultimate changes in social and physical lives and conditions", with example outcomes "Improved social and physical conditions (e.g., poverty, habitat diversity, health, equality, democracy)". The name would then be fully cited. But A3.3 would become a broad catch-all for anything at community level, and that works against S2's fewer, well-defined codes. Reisman's "Shift in social norms" ("the knowledge, attitudes, values and behaviors that compose the normative structure of culture and society") is a further lead for the norms texts. I do not recommend it as a code.

I lean (a). Confidence is medium: (a) leaves many texts at domain-only, which may be acceptable for vague community statements.

**Observability.** Collective efficacy in Sampson's own terms (trust, willingness to intervene) is rare in real statements. Only design-gold S154 is written that way. Program statements say "community connection" or "bring communities together". The include could name "residents' connection to one another" so that cohesion statements written that way stay in the code.

## 5. Taxonomy gap: school climate and culture

- **No home today.** No 3.x code mentions school climate or school culture (grep of data.ts). About 9 unique texts across the runs land in A3.1 or A3.3:
  - "Improvement in school climate"
  - "improving school culture"
  - "Development of a safer school climate through education on interpersonal safety"
  - "Positive school culture — Schools that adopt wellness practices…"
  - "Arts participation positively affects the school's climate and culture"
- **Lead framework.** youth.gov (https://youth.gov/youth-topics/components-positive-school-climate) describes the U.S. Department of Education's Safe Supportive Schools model: "This model includes three main components of school environment: Engagement, Safety, and Environment." NCSSLE's 2022 deck (https://www.schoolsafety.gov/sites/default/files/2022-07/March%202022_Improving%20School%20Climate%20in%20K-12%20Schools.pdf) shows the same model titled "U.S. Department of Education Safe Supportive Schools Model". This is tier B, federal and cross-sector. The primary EDSCLS document was not fetched.
- **Smallest change now:** a hint that sends school-wide climate or culture statements to A3 domain-only, not A3.1 or A3.3.
- **Backlog:** if adjudicated gold shows the volume, add a new code (A3.4 School & Organizational Climate, enum +1). Check its boundary against Y8.10 felt safety and A2.1 program quality.

## 6. Drift budget

- **Today:** A3 counts 0 of 3.
- **If A3.1 option (a) is taken:** 1 of 3 (33%), right at the one-third line. Note this in the cycle report.
- **A3.2:** the citation fix avoids a second entry.
- **A3.3 option (a):** adds none.
