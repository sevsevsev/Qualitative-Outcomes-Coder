# A2 Program Quality, Access & Reach: research findings (researcher a2)

Date: 2026-10-16. Scope: A2.1-A2.6 (codebook 3.1.4, `youthOutcomesV3.data.ts` line 1975). A2.4 and A2.5
are treated under the CP-09-02 and CP-09-01 candidate wording (PR #62). This document proposes no
boundary changes to either code, only grounding. Everything here is a lead for independent
verification. I fetched every excerpt myself in this run through WebFetch; curl to betterevaluation.org
was blocked by the proxy. Real-use counts are unique texts (logic-model run / no-logic-model run) and
come from model codes, not adjudicated gold.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| A2.1 | YPQA pyramid (direct; accreditation not covered) | Keep. Accreditation remains an unsourced include item (low priority). | high |
| A2.2 | Codebook-defined (FD-P18); Urban COI mentoring named in `basis` but **not in the registry** | Re-anchor: Urban Institute Common Outcome Framework (2006), program-centered "satisfaction" (cross-sector) + SAMHSA URS YSS-F "General Satisfaction" (families of youth served). Move to **adapted** (sector widening for the family half). "Perceptions of ... safety" is still unsourced: narrow it, or keep that part in FD-P18. | medium |
| A2.3 | 47 CFR 54 Q; ESSA 7119(a)(2) (partial: Cornell only); DEA 1723 | Fix the citation URL: 7119(a)(2) is now confirmed on govinfo. Keep the DEA, noting that its grants were terminated in May 2025 while the statute stands. | high |
| A2.4 | Codebook-defined (FD-P19) | Re-anchor: CDC Disability Inclusion Strategies (tier A, cross-sector) + 34 CFR 104.34(b)/104.37(a) (alongside peers; extracurricular and recreation) + ESSA 20 U.S.C. 6318(f) (family language and disability access). Move to **adapted** (sector widening) and rewrite FD-P19. | medium-high |
| A2.5 | UW logic model Outputs (direct); Weiss, Little & Bouffard (2005) (partial, abstract only) | Could not get the full text. Rescope the Weiss component to "enrollment + attendance". Add ED 21st CCLC annual performance data (tier A: people served; "regular" = 30+ days), which directly grounds CP-09-01's per-person thresholds. | medium |
| A2.6 | Epstein Types 3 and 6 (partial, URL compromised); Mapp & Kuttner 2013 (direct) | Replace Epstein Type 6 with ESSA 20 U.S.C. 6318(a)(2)/(c)(1) (policy, annual meeting). Note that Mapp & Kuttner has a Version 2 (Mapp & Bergman 2019). | medium |

Drift: if A2.2 and A2.4 move to adapted, A2 still counts 2 of 6 deviations, because adapted codes keep
FD entries. They stop being codebook-defined, which is the status the brief asked about.

---

## A2.2 Participant & Family Satisfaction

**Registry gap.** The code's `basis` line and FD-P18 name "Urban Institute Candidate Outcome
Indicators, mentoring (partial: youth only)", but the registry has no Urban Institute entry (I
grepped `youth_outcomes_v3.sources.json`: zero hits). The partial anchor that FD-P18 relies on was
never registered, so the code is effectively unsourced.

**Finding 1: cross-sector anchor for participant satisfaction (tier C, institution-published).**
Urban Institute & Center for What Works, *Building a Common Outcome Framework to Measure Nonprofit
Performance* (Dec 2006 on the PDF; urban.org lists it 5 Jan 2007; authors Lampkin, Winkler, Kerlin,
Hatry, Natenshon, Saul, Melkers, Seshadri).
URL: https://www.urban.org/sites/default/files/publication/43036/411404-Building-a-Common-Outcome-Framework-To-Measure-Nonprofit-Performance.PDF
- p. 12: "It includes program-centered outcomes (reach, participation, satisfaction);"
- p. 9: "Satisfaction indicators tend to be similar across program areas, so they are included in a box below the chart."

This is the umbrella framework behind the 14 Candidate Outcome Indicator sets. Its youth sets name
the indicator directly. The Youth Mentoring set (https://clasi.edvance360.com/upload/nyack/media/dropbox/593016-appendixa_candidateoutcomeindicators_youth_mentoring110119.pdf;
the host is a course-dropbox copy, so verify on urban.org or betterevaluation.org) says: "Number and
percent of youth satisfied with youth mentoring programs and services." The Youth Tutoring set
(https://betterevaluation.org/sites/default/files/youth_tutoring.pdf) gives the outcome as
"Participant satisfaction". Neither set mentions satisfied parents or families. The framework also
groups satisfaction with reach and participation, which matches how A2 groups them (see the
taxonomy note).

**Finding 2: family satisfaction with services for their child (tier A, behavioral health).**
SAMHSA, *2023 Uniform Reporting System (URS) Output Tables*, state table (Maine).
URL: https://www.samhsa.gov/data/sites/default/files/reports/rpt53122/Maine.pdf. It has the
section heading "Consumer Perception of Care: (Children/Adolescents)" with the row "Overall Satisfaction
with Care", the survey type "YSS-F", and the race breakdown "Reporting Positively About General
Satisfaction with Services". A state YSS-F report (Kentucky BHDID,
https://dbhdid.ky.gov/documents/cmhc/qmot/YSSF.pdf) shows that the items are answered by families:
"Overall, I Am Satisfied With The Services My Child Received". That makes it a federal-agency
measure of families' satisfaction with a youth service, but in a single sector, so it would be cited
under S1.6 sector widening. The national URS documentation was not fetched; I used a state table
that SAMHSA publishes.

**Remaining gap.** The definition ("perceptions of its quality and safety") and include ("parents'
confidence in program safety", gold H002) go further than both sources: neither names *safety*
perceptions. I found no tier A-C source (an America After 3PM parent survey is a tier D lead that I
did not fetch). Real use is small (4/3 unique texts), and much of it is "students who state [program]
helped them transition", which is perceived helpfulness rather than satisfaction.

**Smallest change.** Fix the citation: register the Urban COF (program-centered satisfaction) and
SAMHSA URS YSS-F. Set fidelity to adapted. Rewrite FD-P18 as **sector widening** (family satisfaction
from behavioral-health YSS-F applied to all youth programs), and keep "perceived safety" logged as a
codebook extension inside FD-P18. Alternatively, drop "and safety" from the definition, but H002 is
adjudicated A2.2, so Severin decides. Confidence medium: both sources fit the core construct, but the
YSS-F is single-sector and the safety part stays open.

## A2.4 Inclusion, Accommodations & Language Access (under CP-09-02 wording)

**Status of earlier leads.** ED & DOJ (2015) was rescinded (CP-10-01). EO 13166 on LEP access has
also been revoked: EO 14224, 90 FR 11363 (6 Mar 2025),
https://www.govinfo.gov/content/pkg/FR-2025-03-06/html/2025-03694.htm, says "Executive Order 13166 of
August 11, 2000 (Improving Access to Services for Persons with Limited English Proficiency)" "is
hereby revoked." No language-access framework that rests on an executive order should be cited.
Statutory text still stands.

**Finding 3: cross-sector disability inclusion framework (tier A, federal agency).** This is the
strongest candidate. It is an inclusion *framework*, not just a legal duty, and it fits the code's
definition ("Removing barriers so that all participants can take part") almost word for word.
CDC, *Disability Inclusion Strategies* (last reviewed 3 Apr 2025),
https://cdc.gov/disability-inclusion/strategies/index.html:
"Inclusion of people with disabilities into everyday activities involves practices and policies
designed to identify and remove barriers, such as physical, communication, and attitudinal, that
hamper individuals' ability to have full participation in society, the same as people without disabilities." (40 words)
The same page lists reasonable accommodations: "Accommodations are alterations that have been made to
items, procedures, or systems". CDC *Disability Inclusion* (About), https://www.cdc.gov/disability-inclusion/about:
"Including people with disabilities in these activities begins with identifying and eliminating
barriers to their participation." The "the same as people without disabilities" clause directly
grounds CP-09-02's alongside-peers include (S001, H058) without changing that boundary. I found no
notice on either page that it had been modified under 2025 executive orders.

**Finding 4: participation alongside peers in extracurricular and recreational activities (tier A
regulation).** 34 CFR 104.34(b) (https://www.law.cornell.edu/cfr/text/34/104.34; eCFR current as of
9/29/2026): "a recipient shall ensure that handicapped persons participate with nonhandicapped
persons in such activities and services to the maximum extent appropriate to the needs of the
handicapped person in question." 34 CFR 104.37(a)(1)
(https://www.ecfr.gov/current/title-34/subtitle-B/chapter-I/part-104/subpart-D/section-104.37):
"...in such manner as is necessary to afford handicapped students an equal opportunity for
participation in such services and activities." Paragraph (a)(2) names "recreational activities,
special interest groups or clubs". This closes the open "104.21-22 unchecked" note with a better
subpart. Caveats: Subpart D covers education recipients, so it is sector widening, and it is a legal
duty (the same objection CP-10-01 raised to ADA Title II). Use it as support, with CDC as the anchor.

**Finding 5: family language and disability access (tier A statute).** ESSA, 20 U.S.C. 6318(f)
Accessibility, on govinfo (https://www.govinfo.gov/link/uscode/20/6318): "shall provide opportunities
for the informed participation of parents and family members (including parents and family members
who have limited English proficiency, parents and family members with disabilities, and parents and
family members of migratory children)". The subsection ends "in a format and, to the extent
practicable, in a language such parents understand." This grounds S041 (home-language communications)
directly and S098 (interpretation) in part, since interpretation is not named. It is Title I, so
it is school-sector widening.

**Optional (tier C/D): CAST UDL Guidelines 3.0 (2024),** https://udlguidelines.cast.org/,
Consideration 4.2: "Optimize access to accessible materials and assistive and accessible technologies
and tools". It fits accessible materials and visual schedules (S113). CAST is a nonprofit, so treat
it as supplementary.

**Fidelity of the code's text.** CP-09-02 adds "(or another group facing barriers)". Disability
(CDC, 504) and LEP or migratory families (ESSA) are covered; an unnamed "another group" is not. Real
use shows the drift: 7/6 unique texts, almost all about general equity of access ("Increased
accessibility of opera for all", "Greater access to Afro-Brazilian arts education for underserved
communities", "Increase DEI in sport-based mentoring"). None of these is about disability or
language. This is a confusion-mining lead, likely with A2.5 reach or A2.3. It is not a boundary
proposal here.

**Smallest change.** Fix the citation and re-anchor: cite CDC Disability Inclusion Strategies
(primary), 34 CFR 104.34(b)/104.37(a) and 20 U.S.C. 6318(f). Set fidelity to adapted, and rewrite
FD-P19 as **sector widening** (school-sector 504 and Title I duties applied to all programs), with
the "another group facing barriers" residue noted as a codebook extension. Decide the ADA question
from CP-10-01 together with this. Confidence medium-high for the disability half (direct, tier A,
cross-sector) and medium for the language half (statute, school-only, interpretation not named).

## A2.5 Participation, Dosage & Reach (under CP-09-01 wording)

**Weiss, Little & Bouffard (2005): full text not obtained.** I tried the following. Wiley DOI
https://onlinelibrary.wiley.com/doi/10.1002/yd.105 returned a fetch error. The ERIC record EJ790687
links only that DOI. PubMed 15943135 returned a captcha. The Unpaywall and Semantic Scholar APIs
returned fetch errors. The GFRP archive issue page
(https://archive.globalfrp.org/evaluation/publications-resources/participation-in-youth-programs-enrollment-attendance-and-engagement)
gives the equation but no article text. I also checked a GFRP slide deck
(https://archive.globalfrp.org/var/hfrp/storage/fckeditor/File/Plus_Time_participation.pdf). The
ERIC record confirms the citation: *New Directions for Youth Development* no. 105, pp. 15-31,
Jossey-Bass. Per the abstract, the article's argument is that "merely being there is not what makes
real improvements in youth outcomes". That argues *against* treating dosage as the outcome, though it
fits the output framing.

**Component check (abstract only).** The cited component, "participation measures", does not appear
in the abstract. Two of the three parts of the equation (enrollment, attendance) fit A2.5's counts and
attendance. Engagement does not fit; it belongs to Y2. **Fit: partial, unchanged.** Smallest change:
rename the component to "participation equation: enrollment and attendance" and keep the status as
located. The same issue has Fiester, Simpkins & Bouffard (2005), "Present and Accounted For: Measuring
Attendance in Out-of-School-Time Programs", pp. 91-107 (ERIC EJ790694, https://eric.ed.gov/?id=EJ790694),
which is closer to dosage, but I saw only its abstract, so it is a lead and not a claim.

**Finding 6: better tier A grounding.** ED OESE, *21st CCLC Overview of the Annual Performance Data:
2019-2020* (Dec 2021),
https://www.ed.gov/sites/ed/files/2022/11/21st-CCLC-Overview-of-the-Annual-Performance-Data-2019-2020.pdf:
"For the purposes of reporting on the GPRA measures, "regular" is defined as attending 30 days or
more throughout the academic year." and "During 2019-2020, over 1.8 million people were served by the
21st CCLC program." A federal program reports a per-person attendance threshold as program
performance data, which grounds CP-09-01's move (H001 "85% ... attended at least 30 program
sessions") without any boundary change. Caveat: GPRA measures were revised from 2022 (my lead; the
2022 implementation guide at
https://www.ed.gov/sites/ed/files/2023/04/21APR-New-GPRA-Final-Implementation-Guide-v.-1.5.1.pdf
would not fetch). A verifier should check whether a later APR overview carries the same threshold or
hour bands, and cite the newest one. The Urban COF "program-centered outcomes (reach, participation,
...)" (Finding 1) is a cross-sector second source for reach.

**Smallest change.** Fix the citation: rescope the Weiss component, and add the 21st CCLC APR and,
optionally, the Urban COF. Keep fidelity at framework (UW Outputs stays direct). Confidence medium.

## A2.6 Family Engagement Systems

The registry marks the Epstein URL "compromised" and judges Type 6 (community collaboration) a poor
fit. Finding 7: ESSA 20 U.S.C. 6318 (govinfo, above) names the organizational systems directly.
(a)(2): "a written parent and family engagement policy". (c)(1): "convene an annual meeting, at a
convenient time, to which all parents of participating children shall be invited". These match the
include line ("family engagement policies; family events offered"). Anchor currency: Mapp & Kuttner
(2013) has a Version 2. Suggested citation from https://www.dualcapacity.org/: "Mapp, K. L. & Bergman,
E. (2019). Dual capacity-building framework for family-school partnerships (Version 2)." Its PDF lists
the organizational conditions as "Systemic: embraced by leadership across the organization",
"Integrated: embedded in all strategies" and "Sustained: with resources and infrastructure". Version 2
adds to v1 and does not overturn it, so keep 2013 and add the v2 note. **Smallest change:** fix the
citation by dropping Epstein Type 6, keeping Type 3, adding 6318(a)(2)/(c)(1) and noting v2. Note
that the ESSA source is school-sector, but A2.6's anchor (Mapp) is already school-based. Confidence
medium. Real use is minimal (4/0 unique texts).

## A2.1 Program Quality

Direct link; not re-checked per the brief. "Accreditation" in the definition and include line is
still unsourced (the verifier note says "accreditation not covered"). A search for an accreditation
standards body (COA after-school standards) found nothing I could fetch from a primary source. Low
priority: log it in the code's basis, or drop "accreditation" if no source turns up. Real use is
19/25 unique texts.

## A2.3 Access to Resources

The ESSA 7119(a)(2) verifier note asked for a government copy. It is now confirmed on govinfo
(https://www.govinfo.gov/link/uscode/20/7119): "(B) purchasing devices, equipment, and software
applications in order to address readiness shortfalls;". **Fix the citation URL, PATCH.** 47 CFR 54
Subpart Q is still in eCFR (current as of 9/22/2026); no section is reserved. On the Digital Equity
Act, NTIA "sent termination of funding letters to recipients of grants authorized under the Digital
Equity Act" (NACo, 14 May 2025, https://www.naco.org/news/ntia-terminates-digital-equity-act-grants).
The statute itself was not reported repealed, so keep the citation and add a note that the programs
were defunded. "Facilities" is still unsourced (research-basis already says so).

## Domain-level questions

- **Anchor (Q1):** YPQA, UW logic model and Mapp & Kuttner are current (Mapp has a v2). The domain's
  frameworkBasis cites "Digital Equity Act" and "federal connectivity programs". Both statutes stand,
  but the DEA grants were terminated in 2025 and ECF windows have closed. They still work as
  definitions of construct components, which is how the codebook uses them.
- **Taxonomy (Q4):** the Urban COF's "program-centered outcomes (reach, participation, satisfaction)"
  is a cross-sector framework that matches A2's categories A and C closely. It could be added to
  frameworkBasis as the domain anchor for "program-level results". The report itself notes debate
  over whether ease or timeliness is satisfaction or quality, which supports keeping A2.1 and A2.2
  adjacent. Nothing is missing that the field treats as distinct, though "access/equity of reach"
  (the real-use A2.4 drift) has no clear home.
- **Observability (Q5):** all six are expressible in written statements. A2.2 and A2.5 appear as
  targets ("90% of parents satisfied", "serve 300").
- **Fidelity (Q6), unlogged departures:** A2.1 "accreditation" (no source; case: codebook-defined
  residue). A2.2 "safety perceptions" (case: codebook-defined, inside FD-P18). A2.3 "facilities" (no
  source; case: codebook-defined residue; already acknowledged in research-basis but not in
  DEVIATIONS). A2.4 "another group facing barriers" under CP-09-02 (case: codebook-defined residue).
  A2.5 "applications submitted by staff" and "training hours" sit inside UW Outputs ("Deliver
  services", "Conduct workshops"), so these are not departures.
