# A1 Staff & Volunteer Capacity: research findings (researcher a1, 2026-10-16)

Scope: A1.1-A1.3 (`codebooks/youthOutcomesV3.data.ts` from line 1897), codebook 3.1.4. These are leads for
independent verification. No repo file was changed. Head Start was not reconsidered for A1.3.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Domain anchor | Learning Forward (2022) Standards; Surgeon General (2022) | **Fix citation:** the Learning Forward URL now serves a revised 2025 edition (the three "Equity ..." standards are renamed "Learning ..."). Either pin the 2022 summary PDF or re-cite as 2025. Surgeon General PDF still live. | High (revision); medium (which fix) |
| A1.1 | LF (partial) + Guskey L2 (direct); names volunteers, mentors, coaches, case managers; include "staff confidence" | Add Kirkpatrick Level 2 (cross-sector, names "confidence"), or log a sector-widening FD. Text names non-educators that both cited sources (educators only) do not | Medium |
| A1.2 | LF Implementation (partial) + Guskey L4 (direct) + SAMHSA 2014 (partial, host only) | Swap SAMHSA URL to an HHS-hosted copy (ncsacw.acf.hhs.gov); add Kirkpatrick Level 3 for non-educator practice change, or log the same FD | Medium |
| A1.3 | Surgeon General (direct), WellBQ (partial), JOLTS quits (direct) | Widen definition to name staffing levels (vacancies, positions filled), which adjudicated gold and CP-09-05 already put here; cite JOLTS job openings/hires. Optionally add WHO ICD-11 burn-out for "burnout" and an AmeriCorps-commissioned review for volunteer retention | Medium |
| Taxonomy | A (learning & practice) · B (workforce) | Keep. Matches Guskey Levels 2 and 4 plus a workforce block | Medium |
| Drift | 0 of 3 | Honest count is 0 to 2 of 3 depending on fixes above (over the one-third line if two FDs are logged without new sources) | Medium |

Enum cost of every suggestion: +0.

## Real use (model codes, not gold)

Unique texts, from `real-run-code-counts.csv`: A1.1 65 (logic-model run) / 34 (program-description run);
A1.2 49 / 14; A1.3 13 / 8. A1.3 is small but mostly uncertain: 9 of 13 rows and 8 of 11 rows were low or
medium confidence. What lands in A1.3 is mostly not retention or burnout:
- staffing and supply: "All libraries will be fully staffed with a trained library coordinator 4-5 days a week",
  "Strengthen the regional early-literacy educator pipeline", "Increased number of certified district teachers";
- volunteer experience: "Improve quality of life of senior volunteers", "Bigs live with a sense of satisfaction in
  positively contributing to their Little's development", "Mentors deepen involvement";
- true fits: "teacher retention", "experience increased job satisfaction", "Increased teacher retention through a
  three-year service commitment".
A1.1 also receives staff credentials ("gaining their PA Principal Certification", "earn certification"), which no
cited A1.1 component names. A1.2 use looks clean (curricula, PBIS, SEL tools, culturally responsive practice).

## 1. Anchor check

**Learning Forward has been revised since it was cited (high confidence that it changed).**
The registry URL https://standards.learningforward.org/standards-for-professional-learning/ is the live,
current edition. Learning Forward's history page (https://standards.learningforward.org/history) says:
"Developments in the ensuing years led to a 2025 edition to ensure access, relevance, and availability to all
educators." The 2022 summary PDF
(https://learningforward.org/wp-content/uploads/sites/29/2022/04/Standards-Summary.pdf) lists "Equity Practices",
"Equity Drivers", "Equity Foundations" and an Implementation standard beginning "Professional learning results in
equitable and excellent outcomes for all students when educators understand and apply". The live page now lists
Learning Practices, Learning Drivers and Learning Foundations, and its Implementation lead-in reads "Professional
learning results in excellent outcomes for all students when educators ...". The components A1.1/A1.2 rely on
(Implementation; "knowledge, skills, practices, and mindsets") survive, so the fit is unchanged; only the
year/URL pairing is wrong. It also resolves the 2026-09-27 verifier's "could not confirm the 2022 release year".
- Smallest change: **fix citation** (PATCH). Option 1: keep "Learning Forward (2022)" and point the URL at the
  2022 Standards-Summary PDF (stable, matches the year). Option 2: re-cite as "Learning Forward (2025)" at the live
  URL. Option 1 is the smaller change and needs no wording change; I could not fetch a 2025 publication record that
  gives an exact release date, so Option 2 would need that first.

**Surgeon General (2022)**: still hosted at the registry URL; it lists the five Essentials (Protection from Harm,
Connection and Community, Work-Life Harmony, Mattering at Work, Opportunity for Growth). Not rescinded. Keep.

**SAMHSA (2014)**: the 2026-09-27 PARTIAL was "only because of the host" (an NCTSN copy). An HHS-hosted copy
exists at https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA%5FTrauma.pdf (title, SAMHSA, (SMA) 14-4884, July 2014
confirmed). It also says "On-going training on trauma and peer-support are essential." I could not find the
document on SAMHSA's own library in search results, so whether SAMHSA still lists it is unconfirmed (lead only).
- Smallest change: **fix citation** (URL swap). Confidence medium (NCSACW is an HHS-funded center on an acf.hhs.gov
  host, not SAMHSA's own library).

**JOLTS** definitions page last modified May 6, 2026; definitions unchanged in substance. Keep.

## 2. A1.1 Staff & Volunteer Knowledge & Skills

Component fit: Guskey Level 2 direct; Learning Forward partial (design standards, not an outcome list). Both are
about educators.

Fidelity (Q6): the code's own definition names "Staff, volunteers, mentors, coaches or case managers" and the
include names "staff confidence" and "volunteers' understanding". Neither cited source names non-educator staff,
volunteers or confidence. Under the brief's age/population rule this counts: the code text names populations
outside its sources. Unlogged departure, S1.6 case **sector widening** (construct unchanged). "Confidence" is a
construct addition that Guskey L2 does not list.

Better grounding: Kirkpatrick's four levels are the general training-evaluation model that Guskey adapted for
educators, and they apply to any trainee. Kirkpatrick Partners, *The Kirkpatrick Model*
(https://www.kirkpatrickpartners.com/wp-content/uploads/2024/04/the-kirkpatrick-model-1.pdf): Level 2 Learning is
"The degree to which participants acquire the intended knowledge, skills, attitude, confidence and commitment".
That names confidence and any participant population, so it would cover volunteers, coaches and case managers
without an FD.
- Caveat on tier: Kirkpatrick Partners is a consultancy run by the model's successors. It is tier D at best, and a
  reviewer may call it vendor material (S1.2 "not allowed"). A federal restatement exists (OPM Training Evaluation
  Field Guide supplement on opm.gov), but every OPM URL I tried failed through the proxy, so it is unfetched and is a
  lead only.
- Smallest change: **fix citation** (add Kirkpatrick L2) if tier is accepted; otherwise **log FD** (sector widening,
  counted). Confidence medium.

Observation (no change proposed): credentials ("earn certification") land in A1.1. No cited component names
staff credential attainment. If Severin wants it here, it needs a source; otherwise a hint routing it is a
separate question. Low confidence, no claim filed.

## 3. A1.2 Practice Change

Component fit: Guskey Level 4 direct ("Did the new knowledge and skills that participants learned make a
difference in their professional practice?"); SAMHSA direct on content; Learning Forward Implementation partial.

Fidelity: definition says "Adults applying new practices"; Guskey L4 is educators. Same sector-widening issue as
A1.1, smaller because "adults" is generic and the trauma-informed half is cross-sector via SAMHSA. Kirkpatrick
Level 3 Behavior, same PDF: "The degree to which participants apply what they learned during training when they
are back on the job". That covers practice change for any staff role.
- Smallest change: **fix citation** (add Kirkpatrick L3; swap SAMHSA URL). If Kirkpatrick is rejected, log one FD
  covering A1.1 and A1.2 together. Confidence medium.

## 4. A1.3 Workforce Stability & Well-Being

Component fit: Surgeon General direct ("when the mental health of workers suffers, so does workplace productivity,
creativity, and retention"; also "Fatigue diminishes productivity as the risk of burnout soars."); WellBQ partial
(well-being half only); JOLTS quits direct.

**Staffing is already A1.3 by decision but not in the text.** CP-09-05 says "Staffing and program growth are not in
this list: they are A1.3 and A2.5" and protects [held-out row] (fully staffed libraries, A1.3). The definition says only
"Staff retention and turnover, and staff well-being". A coder reading the definition cannot place "fully staffed"
or "educator pipeline" there, which fits the low confidence seen in real use. The registry's JOLTS source already
defines the needed indicators (https://www.bls.gov/jlt/jltdef.htm): "JOLTS defines Job Openings as all positions
that are open (not filled) on the last business day of the month." and "JOLTS defines Hires as all additions to
the payroll during the month."
- Smallest change: **widen definition** to "Staff retention and turnover, staffing levels (positions filled,
  vacancies, hires), and staff well-being"; add JOLTS job openings and hires as components of the existing
  registry entry. MINOR (scope widened), though it only writes down an approved routing. Confidence medium-high.

**Burnout.** The include names burnout. The Surgeon General mentions it only in passing. WHO's ICD-11 entry is a
direct, cross-sector definition (https://www.who.int/news-room/detail/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases):
"Burn-out is a syndrome conceptualized as resulting from chronic workplace stress that has not been successfully
managed." Optional **fix citation** (add). Confidence medium; not required, since the Surgeon General link is
direct.

**Volunteers.** The domain is "Staff & Volunteer Capacity" but A1.3 names only staff, and real use sends volunteer
retention and satisfaction there ("Mentors deepen involvement"). A federal-commissioned review covers it: Spinney &
Clinton (2024), ICF for the AmeriCorps Office of Research and Evaluation, *Engaging Volunteers: A Comprehensive
Literature Review*
(https://americorps.gov/sites/default/files/document/Literature%20Review%20for%20Volunteer%20Management_0.pdf):
volunteer management practices "are positively associated with retention and other positive volunteer outcomes."
- Smallest change: an **include/hint** naming volunteer retention, with this source, if Severin wants it. S1.4:
  cite the authors and ICF, with AmeriCorps as funder. Confidence low-medium (a literature review, tier C).
- A separate boundary lead, no change proposed: statements about volunteers' own quality of life ("Improve quality
  of life of senior volunteers") are arguably outcomes for adult participants (Part F), not workforce well-being.
  This needs a tie-breaker decision, not a source.

## 5. Taxonomy and observability

Categories follow Guskey's Level 2 (learning) and Level 4 (use), not Learning Forward's 11 standards. That is fine,
because Learning Forward's standards describe how to design professional learning, not outcome dimensions. Guskey
Level 1 (reactions) is an output or satisfaction measure and Level 3 (organization support) belongs to A2/A3, so
nothing is missing from Guskey's outcome levels. The workforce block (stability, well-being) matches the Surgeon
General's framing of well-being plus retention. Possible missing construct: workforce supply/pipeline
(recruitment, certification counts), which the A1.3 widening above handles without a new code. All three
constructs are easy to state in a written outcome ("staff will report...", "will implement...", "turnover will
decrease..."). No observability departures.

## 6. Drift budget

DEVIATIONS.md says A1 is 0 of 3. If neither Kirkpatrick nor another cross-sector source is accepted, A1.1 (and
arguably A1.2) are unlogged sector widenings, which would make it 1 to 2 of 3, and 2 of 3 is over the one-third
line. Adding a cross-sector training-evaluation source keeps it at 0 and is the cheaper fix. Severin should decide
whether a Kirkpatrick Partners document meets tier D.

## Not fetched / limits

- OPM Training Evaluation Field Guide and its 2014 supplement (opm.gov): CONNECT 403 and fetch errors. Lead only.
- SAMHSA's own library page for SMA 14-4884: not found in search; status unknown.
- Learning Forward 2025 edition: confirmed by its own history page and the changed live text; no dated
  publication record fetched.
