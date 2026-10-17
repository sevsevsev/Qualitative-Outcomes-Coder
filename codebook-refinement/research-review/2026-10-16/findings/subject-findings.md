# Y1 category A (Subject learning, Y1.1-Y1.8): researcher "subject" findings

Date: 2026-10-16. Everything below is a lead for independent verification, not evidence.
Excerpts come from WebFetch runs on 2026-10-16. The fetch tool sometimes paraphrased
around the quotes, so a verifier should re-fetch before trusting any excerpt. I did not
re-check links marked direct unless the source had changed. I read the design-set gold
only, never the held-out gold.

## Summary of suggested changes

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Y1.1 | ESSA (direct); NRP (partial, the excerpt is headings); CCSS writing (partial) | Add the CCSS CCR Anchor Standards for Reading and Reading: Foundational Skills. Demote NRP to optional, or replace its excerpt with a sentence. | high |
| Y1.2 | WIDA and ESSA cover English only; the home-language half has no source | Add the Seal of Biliteracy Guidelines (2020, tier B). 20 U.S.C. 7011(7)(B) is a partial tier A. | high |
| Y1.3 | ESSA (direct) | Keep. | high |
| Y1.4 | CSTA 2017 | Re-anchor to the 2026 CSTA PK-12 standards. Add ESSA 7801(52) for engineering and CS. | high |
| Y1.5 | ESSA 7801(52), NAEP (direct) | Keep. | high |
| Y1.6 | NCAS (2014), partial on "definition of learning" | Add the NCCAS Conceptual Framework line on anchor standards. Note that Young Audiences now runs the site. | medium |
| Y1.7 | NAMLE (media only), Conley (located via a slide deck) | Add CCSS CCR W.7-W.8 (research, source credibility). Fix Conley's cite_as. C3 is optional. | medium-high |
| Y1.8 | Head Start ELOF (2015, date confirmed only secondarily) | Re-anchor to the joint ED-HHS 2013 RTT-ELC definitions, plus CCDBG 9858c(c)(2)(T). Keep ELOF as secondary, with the govinfo URL for the 2015 date. | high |

No change proposed here adds a code or touches the enum budget (S2.3).

---

## Y1.1 Literacy: Reading & Writing

**Finding 1 (anchor/component).** The NRP is tier A and correctly attributed (NICHD). It is
an instruction-research report on K-3 reading, not an outcome framework. It has no
writing, and the registry excerpt is a string of headings. The NICHD findings page does
contain full sentences that would serve as an excerpt.
- Evidence: https://www.nichd.nih.gov/publications/pubs/nrp/findings, "Fluency is one of
  several critical factors necessary for reading comprehension." The page shows no year
  ("accurate at the time it was published", "not being updated").
- Confidence: high. The page fetched, and the NRP's coverage is not in dispute.

**Finding 2 (better grounding).** The smallest fix uses a source the registry already
cites. The same CCSS publisher (NGA Center & CCSSO) has CCR Anchor Standards for Reading
and the Reading: Foundational Skills strand, which name the components the definition
lists: phonics, fluency and comprehension. With the writing anchors that are already
cited, one tier B standards set then covers both halves of Y1.1 with component-level
text. ESSA "reading or language arts" stays the tier A anchor.
- Evidence: https://www.thecorestandards.org/ELA-Literacy/CCRA/R/, R.10 "Read and comprehend
  complex literary and informational texts independently and proficiently." Copyright line:
  "© Copyright 2010. National Governors Association Center for Best Practices and Council of
  Chief State School Officers".
- Evidence: https://www.thecorestandards.org/ELA-Literacy/RF/introduction/, "directed toward
  fostering students' understanding and working knowledge of concepts of print, the
  alphabetic principle". The strand headings did not appear in my fetch, so the verifier
  should check them on the RF pages.
- Confidence: high for R.10. Medium for RF, where the fetch did not return the strand
  names.
- Caveat on currency: several states have renamed or revised their Common Core-based ELA
  standards. CCSS is still published and is still the common origin, and ESSA carries the
  state-standards anchor.
- **Change: fix citation.** Add `ccss-reading-anchors` (R.10) and RF (foundational
  skills). Mark NRP optional, or replace its excerpt with a sentence.

**Taxonomy.** ESSA itself groups "reading or language arts", so keeping reading and
writing in one code is not a merged-components deviation. CCSS and NAEP separate them,
but CP-04-02 settled this. Keep.

## Y1.2 English Language Development & Multilingualism

**Finding 1 (uncovered half).** WIDA treats home languages as an instructional asset and
does not name maintaining them as an outcome. The WIDA 2023 Implementation Guide says
"Leverage students' full linguistic repertoires", and its flyer says "fosters the assets,
contributions, and potential of multilingual learners"
(https://wida.wisc.edu/sites/default/files/resource/Implementation-Guide-WIDA-ELD-Standards-Framework.pdf;
https://wida.wisc.edu/sites/default/files/Website/Teach/ELDstandards/WIDA-ELD-standards-framework-big-ideas-flyer.pdf).
Widening the WIDA claim would therefore overstate it. The design gold needs this half:
S143, "Refugee youth will maintain fluency in their home language while learning
English", is gold Y1.2.

**Finding 2 (better grounding, tier B).** The *Guidelines for Implementing the Seal of
Biliteracy* name the construct outright. Seven national bodies present them: ACTFL,
Californians Together, MLA, NABE, NAELPA, NCSSFL and TESOL. The Seal itself is awarded by
state education agencies and districts, so it crosses sectors.
- Evidence: https://www.actfl.org/uploads/files/general/SOBL_Guidelines.pdf, "English
  learners should be encouraged to maintain and improve proficiency in their home or
  heritage language(s)". Also: "It encourages language learners to maintain and improve
  their first or heritage language while also acquiring proficiency in additional
  languages."
- Date: the cover shows none. The note citation and file name say October 2020, so the
  verifier must confirm it. The earlier 2015 version (ACTFL, NABE, NCSSFL, TESOL) is at
  https://sealofbiliteracy.org/2015-guidelines: "an award made by a state department of
  education or local district to recognize a student who has attained proficiency in
  English and one or more other world languages".
- Confidence: high on the fit. Medium on the exact date and author list.

**Finding 3 (tier A, partial).** ESSA Title III's definition of "language instruction
educational program", 20 U.S.C. 7011(7)(B), recognizes dual-language instruction aimed at
proficiency in two languages. It frames native-language use mainly as a route to English.
- Evidence:
  https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title20-section7011&num=0&edition=prelim,
  "may make instructional use of both English and a child's native language to enable the
  child to develop and attain English proficiency" … "to become proficient in English and a
  second language."
- Confidence: high on the text. The fit is partial.
- For Native youth only, the Native American Languages Act (25 U.S.C. 2903(3)) supports
  "the use of Native American languages as a medium of instruction"
  (https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title25-section2903&num=0&edition=prelim).
  It is a supplementary lead, not the main anchor.
- A federal contractor report, Boyle et al. (AIR, December 2015, prepared for ED OELA),
  defines dual language goals as "high levels of language proficiency and literacy in both
  program languages"
  (https://cached.air.org/sites/default/files/2021-06/Dual-Language-Education-Programs-Current-State-Policies-Feb-2017-rev.pdf).
  It is hosted on air.org, not ed.gov, so I would keep it as a lead only.
- **Change: fix citation.** Add the Seal Guidelines for home-language maintenance (direct)
  and 7011(7)(B) (partial). The code then keeps fidelity "framework". Without these, the
  home-language half needs an FD entry under S1.6, because no current source supports it.
- Boundary note: the Seal's "world languages" overlap Y1.5 (a native English speaker
  learning another language). The Y1.2/Y1.5 split by learner (English learner or heritage
  speaker vs native English speaker) stays as it is. The Seal supports the heritage side
  only.

## Y1.3 Mathematics

ESSA 6311(b)(1)(C) is direct and nothing has changed. **Keep.** Observability: high.

## Y1.4 Science, Engineering & Computer Science (narrowed scope per PR #62)

**Finding 1 (anchor currency).** The CSTA 2017 standards have been superseded at their
canonical URL. CSTA has published the 2026 CSTA PK-12 Computer Science Standards.
- Evidence: https://csteachers.org/pk12standards/about/development/, timeline:
  "Published the 2026 CSTA PK–12 Computer Science Standards", and "A revised set of
  Standards was published in 2017".
- Evidence: https://csteachers.org/pk12standards/about/ says the standards "define the
  essential knowledge, skills, and dispositions to prepare all students for a world powered
  by computing". Core concepts: "Algorithms, Programming, Data & Analysis, and Computing
  Systems". "Systems & Security" merges the 2017 "Computing Systems" and "Networks & the
  Internet". AI and emerging technologies are newly emphasized.
- Neither page says in so many words that 2017 is withdrawn. The 2017 PDF is still hosted.
- Confidence: high that a 2026 revision exists and is the current CSTA standard. The month
  of publication is "Summer 2026" per the development page, as paraphrased by the fetch.
- **Change: re-anchor** to CSTA (2026), the core concepts Algorithms & Programming and
  Data & Analysis, and change the year in cite_as. The 2026 standards add AI, so future
  "AI literacy" statements may test the Y1.4/Y7.3 line. That line is out of scope here;
  I only flag it.

**Finding 2 (tier A for the non-science half).** ESSA 6311(b)(1)(C) names only science
(partial). ESSA's well-rounded definition names technology, engineering and computer
science by name, so it gives a tier A anchor for the narrowed Y1.4.
- Evidence:
  https://www.govinfo.gov/content/pkg/USCODE-2023-title20/html/USCODE-2023-title20-chap70-subchapVIII-partA-sec7801.htm,
  "science, technology, engineering, mathematics, … computer science".
- Side note: the registry's uscode.house.gov URL for 7801 returned "Page Not Found" and
  other house.gov URLs returned a maintenance page on 2026-10-16. This is probably
  transient. If it persists, switch to the govinfo URLs.
- **Change: fix citation.** Add a Y1.4 support row to `essa-7801-52-well-rounded`.

**NGSS currency.** There is no sign of revision or supersession. The NGSS site is active,
with a "September 2026 NGSS NOW Newsletter", and its glossary definition of the three
dimensions is unchanged (https://www.nextgenscience.org/glossary/three-dimensions).
Stewardship seems to sit with WestEd, but attribution stays NGSS Lead States (2013) under
S1.4. **Keep.** Confidence: medium, because a negative search cannot be conclusive.

## Y1.5 Other Academic Subjects

ESSA 7801(52) and NAEP 9622(b)(2)(D) are both direct (7801(52) re-fetched on govinfo
above). **Keep.** The design gold has no Y1.5 row. Observability is fine ("explain the
causes of a historical event").

## Y1.6 Arts Learning

**Finding 1 (the partial "definition of learning" is closable).** The NCCAS Conceptual
Framework says what the standards describe in skill-and-knowledge terms. That matches
Y1.6's "technique, vocabulary or knowledge".
- Evidence:
  https://www.nationalartsstandards.org/sites/default/files/Conceptual%20Framework%2007-21-16.pdf,
  "Artistic literacy is the knowledge and understanding required to participate
  authentically in the arts." Also: "Anchor standards describe the general knowledge and
  skill that teachers expect students to demonstrate". The document is authored by NCCAS
  and shows no date in the text; the file name suggests 2016.
- Confidence: medium. The date is unclear, and the fetch summarized rather than quoted the
  author line.

**Finding 2 (attribution note).** nationalartsstandards.org now reads "© Young Audiences,
Inc. 2026". Under S1.4, attribution stays NCCAS (2014), with a note that the site is now
run by Young Audiences, Inc. The verifier should confirm whether stewardship formally
transferred.
- **Change: fix citation.** Add the conceptual-framework component, plus a publisher note.

## Y1.7 Critical Thinking, Inquiry & Media Literacy

**Finding 1 (better grounding for research and inquiry).** The writing anchors already in
the registry include a "Research to Build and Present Knowledge" cluster. It names both
research projects and evaluation of source credibility, the code's core indicators, at
tier B.
- Evidence: https://www.thecorestandards.org/ELA-Literacy/CCRA/W/, W.7 "Conduct short as
  well as more sustained research projects based on focused questions". W.8 "Gather
  relevant information from multiple print and digital sources, assess the credibility and
  accuracy of each source".
- Confidence: high.

**Finding 2 (Conley attribution).** The verifier relied on Conley's AASA article, not the
slide deck. The cite_as lacks a year and the document.
- Evidence: https://www.aasa.org/resources/resource/four-keys-college-career-readiness:
  Conley, D. T., "Four Keys to College and Career Readiness", *School Administrator*
  (AASA), April 2016. "Key Cognitive Strategies consist of problem formulation, research,
  interpretation, communication, and precision and accuracy."
- **Change: fix citation** (cite_as and year). A practitioner-magazine article is weaker
  than tier C, so CCSS should become the lead anchor.

**Finding 3 (cross-subject inquiry, optional).** The NCSS C3 Framework (2013) Inquiry Arc
has a dimension "Evaluating Sources and Using Evidence"
(https://www.socialstudies.org/sites/default/files/attach-pdf-2023-05/Introduction.pdf). It
is tier B but tied to social studies, and C3 also anchors civics material that belongs in
Y6. Medium confidence. Use it only if CCSS is judged too ELA-bound.

**Taxonomy.** Y1.7 joins three constructs (critical thinking, inquiry, media literacy), and
no single framework names them together. Each half now has a component (CCSS W.7-W.8 for
research and source evaluation, NAMLE for media literacy), but "critical thinking" as a
general disposition has no tier A-B anchor. I found no tier A-B framework for general
critical thinking. P21/Battelle is tier D at best and I did not fetch it. Suggestion:
narrow the definition's wording to "analyzing and evaluating information and sources",
which is already its first clause, so the code does not claim a framework for generic
"critical thinking", or log an FD "merged components" entry. Observability: design gold has
one Y1.7 row (S155) and confusions with Y6.7 (S107, S215), so the observable core is
source evaluation.

## Y1.8 Early Learning & School Readiness

**Test of the "inherently young children" argument.** It holds for the population: the
construct is defined by age ("below kindergarten age"), so early-childhood sources do not
narrow the sector. It does not hold for the choice of source. Head Start is one federal
program, and tier A, cross-program definitions exist that ED and HHS issued jointly for
whole state early-learning systems (child care, state pre-K, Head Start).

**Finding 1 (better tier A anchor).** The Race to the Top-Early Learning Challenge final
definitions were issued by ED and HHS together. They define "Essential Domains of School
Readiness" and "Kindergarten Entry Assessment", which are the code's "kindergarten
readiness" and "readiness assessments".
- Evidence:
  https://www.federalregister.gov/documents/2013/08/30/2013-21138/final-priorities-requirements-definitions-and-selection-criteria-race-to-the-top-early-learning-challenge
  (page text offset >100000): "the domains of language and literacy development, cognition
  and general knowledge (including early mathematics and early scientific development),
  approaches toward learning, physical well-being and motor development (including adaptive
  skills), and social and emotional development."
- 78 Fed. Reg. (Aug. 30, 2013). The PDF is
  https://www.govinfo.gov/content/pkg/FR-2013-08-30/pdf/2013-21138.pdf, which places the
  definitions near page 53979. The verifier should confirm the start page.
- Currency: RTT-ELC grants have ended, but the definitions were never rescinded. Confidence:
  high on the text, medium on currency.

**Finding 2 (statutory support).** CCDBG requires every state to keep early learning and
developmental guidelines covering birth to kindergarten entry, for statewide use by child
care providers.
- Evidence:
  https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap105-subchapII-B-sec9858c.htm,
  §9858c(c)(2)(T)(i): "appropriate for children from birth to kindergarten entry, describing
  what such children should know and be able to do, and covering the essential domains of
  early childhood development". 42 U.S.C. 9858n does not define the domains, so this
  provision anchors the construct's existence, not its components. Partial.

**Finding 3 (ELOF date).** The govinfo GPO copy gives the 2015 date directly: "Head Start
Early Learning Outcomes Framework: Ages Birth to Five", Office of Head Start, 2015
(https://www.govinfo.gov/content/pkg/GOVPUB-HE23_1100-PURL-gpo65456/pdf/GOVPUB-HE23_1100-PURL-gpo65456.pdf).
Its cover letter invites "all programs—Early Head Start, Head Start, and Child Care—to adopt
the Framework". The headstart.gov page says "This Framework replaces the 2010 Head Start
Child Development and Early Learning Framework" and was updated 17 November 2025.

**Finding 4 (definition drift).** The include list puts "broad developmental milestones on
screeners such as the ASQ" in Y1.8 (gold H064). Y1.8 then excludes motor and
social-emotional skills, which the ASQ also screens. The RTT-ELC domain list spans all five
domains, so it supports a "whole-child readiness" reading better than ELOF's Language &
Literacy and Cognition alone. The tie-breaker should stay as it is. I note it so the
verifier states the component honestly as "language and literacy development; cognition
and general knowledge" and "Kindergarten Entry Assessment".
- **Change: re-anchor.** Primary: RTT-ELC (ED & HHS 2013) definitions. Secondary: CCDBG
  9858c(c)(2)(T) and ELOF 2015 with the govinfo URL. The current basis line "Early-childhood-specific by
  necessity" should change to "age-defined construct; cross-program federal definition".

## Q4 Taxonomy (category A overall)

Category A matches the subject list in ESSA 6311(b)(1)(C) plus 7801(52) and NAEP: reading or
language arts, math, science, plus "other subjects". Y1.2 (EL) and Y1.8 (pre-K) are split
by population, which ESSA handles separately (Title III; early childhood). Y1.7 is the one
code without a single anchor (see above). I found nothing well established that is
missing. Social studies is not a named statutory subject: its parts (history, geography,
economics) sit in Y1.5 and civics in Y6.2, which follows 7801(52)'s own split. Computer
science is named separately in 7801(52), which supports keeping it inside the narrowed
Y1.4 instead of creating a new code (S2.2).

## Q5 Observability

All eight constructs appear in written outcome statements. Design-gold counts are Y1.1 ×6,
Y1.2 ×2, Y1.3 ×2, Y1.4 ×8, Y1.5 ×0, Y1.6 ×2, Y1.7 ×1, Y1.8 ×2. The weakest are Y1.5 (no
gold row, so its coverage is untested) and the generic "critical thinking" part of Y1.7,
which statements rarely tie to anything observable. Home-language maintenance is observable
(S143).
