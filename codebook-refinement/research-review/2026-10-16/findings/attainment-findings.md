# Y1 category C (Y1.13-Y1.18): attainment findings

Researcher: attainment · 2026-10-16 · Leads only, for independent verification. No repo file changed.
All excerpts below were seen in a WebFetch made today. Statute text for 20 U.S.C. 6311 and 7118
came from govinfo's USCODE-2023 HTML (the Cornell page for 6311 is cut off at (b)(2)(J); the
uscode.house.gov URL in the registry returns only a 2,323-character shell to WebFetch).

## Cross-cutting finding: ESSA report cards cover almost all of category C

**Finding.** The ESSA state report card clause, 20 U.S.C. 6311(h)(1)(C), names five of the six
category-C constructs in one tier-A, cross-sector place: suspensions, expulsions and chronic
absenteeism ((viii)(I)), accelerated coursework for postsecondary credit ((viii)(II)(bb)), and the
postsecondary enrollment rate ((xiii)); graduation rate is in (c)(4)(B)(iii), and (c)(4)(B)(v) lists
"advanced coursework" as an optional school-quality measure. Today category C leans on two tier-D
anchors (Attendance Works, NSC) and a CRDC PDF that cannot be fetched.
**Evidence.** https://www.govinfo.gov/content/pkg/USCODE-2023-title20/html/USCODE-2023-title20-chap70-subchapI-partA-subpart1-sec6311.htm
(h)(1)(C)(viii)(I): "measures of school quality, climate, and safety, including rates of in-school
suspensions, out-of-school suspensions," [then expulsions, arrests, referrals, chronic absenteeism];
"chronic absenteeism (including both excused and unexcused absences)"; (viii)(II): "the number and
percentage of students enrolled in— ... (bb) accelerated coursework to earn postsecondary credit while
still in high school,"; (c)(4)(B)(v): "student access to and completion of advanced coursework;".
**Confidence.** High that the text exists (seen); medium on the exact clause lettering, because
WebFetch returned paraphrase between quoted fragments.
**Smallest change.** Fix citation (PATCH): add the ESSA clause per code as the tier-A component cite
(rows below), keep the existing sources as secondary. It also gives category C a coherent anchor for
Q4: "the outcomes ESSA requires schools to report", with Allensworth & Easton for grades and credits.

Housekeeping: `docs/codebook/research-basis.md` still lists McKinney-Vento, ESSA graduation rate and
On-Track (2005) as "located", while the registry has them verified on 2026-09-27. Doc is stale.

## Y1.13 Attendance & School Stability

**1. Chronic absence: the "15 days vs 10%" lead is outdated; there is no conflict.**
*Finding.* ED's own current definition (EDFacts FS195, SY 2023-24) uses the same 10% threshold as
Attendance Works. The 15-day definition was the old CRDC one (2013-14), and the 2023-24 CRDC School
Form has no absenteeism module at all. So the code's construct matches ED; the only problem is tier:
the code cites a tier-D nonprofit where a tier-A federal source says the same.
*Evidence.* https://www.ed.gov/sites/ed/files/2024-11/fs195-20-2.pdf (FS195 Chronic Absenteeism
File Specifications v20.2, SY 2023-24, Aug 2024): "The unduplicated number of students absent 10% or
more school days during the school year." Absence = "not physically on school grounds and was not
participating in instruction ... for at least half the school day." Old CRDC:
https://catalog-beta.data.gov/dataset/2013-14-student-absenteeism-civil-rights-data-collection:
"students absent 15 or more days during the school year." 2023-24 CRDC School Form table of contents
(https://crdc.communities.ed.gov/sites/default/files/2025-01/2023-24-crdc-school-form.pdf) lists
SCHR ... DISC, ARRS ... INET and no absenteeism module. Attendance Works page re-fetched, unchanged
("missing 10 percent or more of school days due to absence for any reason").
*Confidence.* High (all three fetched).
*Change.* Fix citation: cite ESSA 6311(h)(1)(C)(viii)(I) (chronic absenteeism must be reported) and
ED EDFacts FS195 (the 10% operational definition) as primary; Attendance Works may stay as secondary.

**2. McKinney-Vento: the phrase "school stability" does exist; cite the subparagraph.**
*Finding.* "School stability" is the heading of 42 U.S.C. 11432(g)(3)(B). The verifier's note
("the phrase was not quoted") is resolved by citing (g)(3)(A)-(B) instead of the whole section.
*Evidence.* https://www.law.cornell.edu/uscode/text/42/11432: (g)(3)(B) "School stability — In
determining the best interest of the child or youth under subparagraph (A), the local educational
agency shall…"; (g)(3)(A)(i) "continue the child's or youth's education in the school of origin for
the duration of homelessness".
*Confidence.* High. *Change.* Fix citation (component only).

**3. Foster-placement stability has its own tier-A sources.**
*Finding.* The code names "foster placement changes", which McKinney-Vento does not cover (it is
homelessness only). Two statutes cover it directly: ESSA 6311(g)(1)(E) (education side) and
42 U.S.C. 675(1)(G) (child-welfare case plan, the Fostering Connections provision).
*Evidence.* govinfo 6311 (URL above): (g)(1)(E) the SEA must "ensure the educational stability of
children in foster care" (school of origin unless not in best interest; immediate enrollment).
https://www.law.cornell.edu/uscode/text/42/675: (1)(G) "A plan for ensuring the educational
stability of the child while in foster care, including—" (then proximity to school of origin and
staying in the same school at each placement). ED's foster care page
(https://www.ed.gov/teaching-and-administration/supporting-students/special-populations/students-foster-care/students-in-foster-care)
lists the 2016 joint ED/HHS guidance and "Implementing the Fostering Connections Act, May 30, 2014".
*Confidence.* High for the statute text; I did not fetch P.L. 110-351 itself, so attribute to the U.S.
Code section, not the Act name, until a verifier confirms the amendment history.
*Change.* Fix citation: add 6311(g)(1)(E) and/or 42 U.S.C. 675(1)(G) for the foster-care element.

**4. Pregnancy is ungrounded.** The definition's "(pregnancy)" has no source. The nearest federal
text is Title IX, 34 CFR 106.40(b), a nondiscrimination rule, not an outcome measure.
*Evidence.* https://www.ecfr.gov/current/title-34/subtitle-B/chapter-I/part-106/subpart-D/section-106.40
(current as of 10/08/2026): "A recipient shall not discriminate against any student, or exclude any
student from its education program or activity"; "(b)(5) ... the student shall be reinstated to the
status which she held when the leave began." *Confidence.* Medium (partial fit only).
*Change.* Either cite 106.40(b) as partial or drop "pregnancy" from the parenthetical and keep it as an
include example; the construct (staying enrolled) is already covered by the attendance/enrollment
sources. Owner's call; smallest is to leave the definition and log the partial.

**Q4/Q5.** Attendance and stability are both enrollment-status constructs and ESSA treats them in
neighbouring clauses; the merge is defensible. Both are commonly stated by programs (S233). Keep.

## Y1.14 Exclusionary Discipline

**1. CRDC currency.** The 2023-24 CRDC is collected and its data were released in early Sept 2026; the
2021-22 element list is no longer the latest. Discipline elements are unchanged in kind.
*Evidence.* https://www.ed.gov/laws-and-policy/civil-rights-laws/civil-rights-data-collection-crdc/civil-rights-data:
"The 2023-24 CRDC data submission period occurred from December 9, 2024 through April 7, 2025."
NPR/HPPR 2026-09-04 (https://www.hppr.org/npr-news/2026-09-04/federal-civil-rights-data-about-students-is-finally-out-its-different-under-trump):
release covers 2023-24, nonbinary data suppressed, "This time, there is no First Look Report".
2023-24 School Form (URL above): "DISC-21: Instances of Out-of-School Suspension"; "DISC-15:
Discipline of Students without Disabilities – Expulsion without Educational Services". An ed.gov copy
of the 2023-24 data-element list would not fetch; a UCSB mirror
(git.lsit.ucsb.edu/.../2023-24-crdc-data-elements.pdf) shows "Students who received one out-of-school
suspension" but is not a citable host.
*Confidence.* High. *Change.* Fix citation: update to the 2023-24 CRDC School Form, DISC and ARRS
modules (or keep 2021-22, which is still a valid, verified ED document; this is optional tidying).
Note: the 2025-26 ICR was revising items; re-check at the next collection.

**2. "Alternatives that replace suspension": partial federal grounding, no restorative-practice source.**
*Finding.* Neither CRDC 2021-22 nor 2023-24 has any element on restorative practices or alternatives
(the 2023-24 list has only "Whether the school is an alternative school (and if so, for academic,
discipline, or both)"). ESSA names the aim of reducing exclusionary discipline, not restorative
practice as such.
*Evidence.* https://www.govinfo.gov/content/pkg/USCODE-2023-title20/html/USCODE-2023-title20-chap70-subchapIV-partA-subpart1-sec7118.htm
(5)(F): "designing and implementing a locally-tailored plan to reduce exclusionary discipline
practices"; (5)(G): "implementation of schoolwide positive behavioral interventions and supports".
govinfo 6311 (g)(1)(C)(ii): "the overuse of discipline practices that remove students from the
classroom; and". No tier A-B source naming "restorative" was found in what I fetched.
*Confidence.* Medium (I searched ESSA and CRDC, not OJJDP/JJDPA or state standards).
*Change.* Narrow the definition wording (MINOR, needs CP and FD check): "Suspensions, expulsions,
office discipline referrals, and reductions in their use, including by replacing them with
alternatives." This keeps the outcome as reduced exclusion (grounded by ESSA 7118(5)(F) and
6311(g)(1)(C)(ii)) and treats restorative alternatives as the means. If the owner wants restorative
participation itself coded here, that is a codebook-defined element and needs an FD entry.
ESSA (h)(1)(C)(viii)(I) also gives a tier-A, statute-level cite for suspension and expulsion rates.

**Q5.** Observable; programs state suspension counts often (S085). Keep.

## Y1.15 Grades, Credits & On-Track Status

**1. Currency and status.** The 2005 On-Track report fetches today and the definition matches; the
registry already holds it verified/direct, so "located" in research-basis.md is stale. Nothing
superseded it; UChicago still publishes the report page
(https://consortium.uchicago.edu/publications/track-indicator-predictor-high-school-graduation, not
re-fetched).
*Evidence.* https://consortium.uchicago.edu/sites/default/files/2023-06/The%20On-Track%20Indicator-Jun2005-Consortium.pdf:
"no more than one semester F (that is, one-half of a full credit) in a core subject"; "We created the
on-track indicator from two of them, credits earned and number of F's in core courses."
*Confidence.* High. *Change.* Keep; fix research-basis.md status.

**2. "Test scores with no subject" is not in either Allensworth & Easton source.**
*Finding.* The 2005 report treats test scores only as correlates, not components (fetch above);
2007 is about grades, failures and attendance. ESSA's achievement indicator is per subject. So the
"no subject named" element is a codebook routing rule (the CONFUSIONS entry for codes 1.1-1.9/1.6, kept by
CP-09-09), not a framework component, and Y1.15 has no FD entry for it.
*Confidence.* Medium-high. *Change.* No citation fix exists that I could find; the smallest honest
change is an FD entry (codebook-defined element of a framework code) or a sentence in the Source line
saying the catch-all is a codebook rule. Do not claim it for Allensworth & Easton.

**3. Promotion and credit recovery have a tier-A data source.** CRDC 2023-24 has a RETN (Retention)
module and PENR credit recovery; the mirror element list reads "Number of students retained in
specified grade, by grade (K-12)" and "Number of students (grades 9-12) who participate in at least one
credit recovery program". *Confidence.* Medium (table of contents seen on the ed.gov-hosted form; item
text seen only on a mirror). *Change.* Optional added cite for "promotion"; not needed for fit.

## Y1.16 Advanced Coursework & Dual Credit

**Finding.** The cited 2020-21 report PDF returned 403 to the 2026-09-27 verifier (I did not retry it; the
2021-22 data-element PDF on the same ed.gov path also failed to fetch today). The 2023-24 CRDC School Form is fetchable on ED's CRDC site and names AP, IB and dual
enrollment directly; ESSA names dual credit and advanced coursework at statute level.
*Evidence.* https://crdc.communities.ed.gov/sites/default/files/2025-01/2023-24-crdc-school-form.pdf:
module "APIB: Advanced Placement (AP) & International Baccalaureate Diploma Programme (IB)
Enrollment"; tables "Advanced Placement (AP) Student Enrollment" (APIB-6); PENR-3 "did this school have
any students enrolled in a dual enrollment/dual credit program?". ESSA (h)(1)(C)(viii)(II)(bb) and
(c)(4)(B)(v), quoted above.
*Gap.* "Honors" is in neither CRDC nor ESSA by name; "advanced STEM electives" is covered by CRDC
COUR course tables (advanced math, calculus, physics, chemistry, computer science; seen only as course
definitions such as "Mathematics courses include Advanced Placement courses and International
Baccalaureate Diploma Programme courses.").
*Confidence.* High for AP/IB/dual; medium for honors (ESSA's generic "advanced coursework" arguably
covers it).
*Change.* Re-anchor (PATCH): replace the 2020-21 report with the 2023-24 CRDC School Form (APIB,
PENR-3) plus ESSA 6311(h)(1)(C)(viii)(II)(bb); this should move the fit from partial to direct.

## Y1.17 High School Completion & Re-engagement

**1. GED/equivalency has tier-A outcome measures.**
*Evidence.* (a) WIOA performance indicator, https://www.ecfr.gov/current/title-20/chapter-V/part-677/subpart-A/section-677.155
(current as of 10/13/2026): (a)(1)(iv)(A) participants "who attained a recognized postsecondary
credential or a secondary school diploma, or its recognized equivalent," "during participation in or
within 1 year after exit"; (a)(1)(iv)(B) counts the diploma/equivalent "only if the participant also
is employed or is enrolled in an education or training program". (b) NCES Digest table 219.67,
https://nces.ed.gov/programs/digest/d21/tables/dt21_219.67.asp: "High school completers include
those with a high school diploma, as well as those with an alternative credential, such as a GED."
*Confidence.* High (both fetched). WIOA is conditional (needs employment/enrollment too), so partial;
NCES status completion is a population rate but its completer definition fits directly.
*Change.* Fix citation: add NCES status completion (diploma or GED) as the equivalency component;
WIOA 677.155(a)(1)(iv) is an alternative tier-A cite. Keep 681.460 only as secondary (it is a service
list, as the verifier noted).

**2. Re-enrollment after leaving school: EDFacts FS221 is a direct federal outcome measure.**
*Finding.* ED's Title I, Part D exit-outcome file counts youth who, within 90 days of leaving a
neglected/delinquent facility, "Enrolled in local district school", "Earned a GED" or "Obtained high
school diploma". This matches the code's example (S241, "following release") exactly.
*Evidence.* https://www.ed.gov/sites/ed/files/2025-02/fs221-20-3.pdf (FS221 N or D Exit Outcomes –
LEA, v20.3, SY 2023-24, Jan 2025): categories "Enrolled in local district school", "Earned a GED",
"Obtained high school diploma"; window "up to 90 calendar days after exiting the program"; basis
ESEA Title I, Part D, Subpart 2.
*Confidence.* High for content. It is written for N or D youth, so using it for re-engagement after
any dropout is sector widening (S1.6); an FD entry may be needed if Y1.17 is treated as anchored on it.
*Change.* Fix citation: add FS221 for re-engagement and equivalency. No definition change.
I found no cross-sector tier A-B *outcome* measure of dropout re-engagement (only WIOA's service
element and FS221's population-specific one).

## Y1.18 Postsecondary Enrollment, Persistence & Completion

**1. Anchor currency.** NSC High School Benchmarks is current: fourteenth edition, 2026-09-17,
"postsecondary enrollment, persistence, and completion outcomes" (https://nscresearchcenter.org/high-school-benchmarks/).
Its metrics are degree-focused; the page does not mention non-degree training. Keep.

**2. Enrollment has a tier-A statute cite.** ESSA (h)(1)(C)(xiii): report cards show "the cohort rate
(in the aggregate, and disaggregated for each subgroup ...)" at which graduates enroll in postsecondary
programs in the first academic year after graduation (govinfo URL above). *Confidence.* High.
*Change.* Fix citation: add as tier-A for enrollment; NSC stays for persistence and completion.

**3. "Other postsecondary education or training".**
*Finding.* The phrase is IDEA Indicator 14 Measure C's wording, but Measure C is an OR with
employment, and WIOA youth 677.155(c)(1) is the same kind of combined indicator. Y1.18 explicitly
sends combined indicators to Y7.5, so neither *measure* fits; only the education/training component
does. The lead "WIOA 677.155(a)(1)(ii) for youth" is wrong: (a)(1)(ii) is for adult programs; youth is
(c)(1) "in education or training activities, or in unsubsidized employment".
*Evidence.* https://sites.ed.gov/idea/part-b-spp-apr-indicator-14/ (modified 2025-01-16): Measure A
"Enrolled in higher education within one year of leaving high school."; Measure C "Enrolled in higher
education or in some other postsecondary education or training program;" [or employed]. eCFR 677.155
above. FS221 also counts "Were accepted and/or enrolled into post-secondary education" and "Enrolled
in job training courses/programs".
*Confidence.* High on the texts; medium on the component-level reading.
*Change.* Fix citation: cite IDEA Indicator 14 Measure C's education/training component (partial,
component only) for "other postsecondary education or training". I did not fetch IPEDS; not checked.

**4. Boundary lead (Q4).** Y1.18 includes "degree or certificate completion" while Y7.4 holds
"recognized credentials and certifications". CF-023 (2.x numbers) separates "training or credential
completed" from "enrolled in or completed postsecondary", which leaves a college certificate ambiguous.
*Confidence.* Medium. *Change.* Hint or CF update only (degree/certificate from a postsecondary
institution → Y1.18; industry credential → Y7.4); no source change.

## Q4 Taxonomy, summary

Category C's six codes line up with ESSA report-card constructs plus the UChicago grades/credits
measures; nothing the field treats as distinct appears merged except attendance with school stability
(defensible) and the "no subject" achievement catch-all in Y1.15 (codebook rule, see above).
Possibly missing: college-entrance exam taking (CRDC EXAM module; SAT/ACT) has no obvious home; check
the design-set gold before proposing anything. I did not.

## Q5 Observability

All six constructs appear in program outcome statements as written (examples S233, S085, S056, S219,
S241, S190). No observability problem found.
