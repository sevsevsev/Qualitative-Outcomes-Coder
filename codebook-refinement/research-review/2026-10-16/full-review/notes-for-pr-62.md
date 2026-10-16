# Notes for draft PR #62 (CP-09-01 to CP-09-08), from the 2026-10-16 research review

Draft pull request #62 holds eight proposed changes to codebook 3.x (CP-09-01 to CP-09-08). They
are about attendance and reach, inclusion, college visits, arts appreciation, statements that are
activities rather than outcomes, digital skills, general social-emotional growth, and defaults
when a statement gives little context. The research review of 2026-10-16 checked the sources
behind every 3.x code. Some of its findings touch the same codes as PR #62, so they are written
down here for whoever finishes that pull request, instead of being changed in it. Severin settled
the review's open questions on 2026-10-16 by taking every recommended option; each item below says
which of his decisions applies. Nothing here edits PR #62, a gold row or the codebook. Where an
item needs a gold row ruled on, only Severin can do that.

Decision ids (G1 to G16, and the per-domain ids such as A2-5) are those in `DECISIONS.md` in this
folder. Claim ids (such as y7-02) are rows of the verification tables in
`batch1/verify/` to `batch4/verify/` and the Y1 pilot's table; each was checked by an independent
verifier. "Proposed rows" are in `proposed-design-rows.csv` in this folder.

## Hold, or block until a gold row is ruled on

1. **CP-09-05 (activities that are not outcomes): hold (G16).** Its only evidence is a held-out
   row, so it cannot ship as drafted. Re-justify it from design gold or from real statements in
   the review queues, or leave it held. The A1.3 staffing widening (later-cycle item 4; proposed
   rows P-33 to P-36) follows it and waits with it. A further reason to wait: CP-12-32 (adult
   volunteers) would take Staff & Volunteer Capacity (A1) to 2 of 3 codes with a logged departure,
   which starts an A1 anchor re-review (STANDARDS S4.9, decision G7) before any further A1 change.
2. **S176 with CP-09-01 (G14).** S176, "The program will create a family advisory board", is
   adjudicated F1.9, but by the Part axis (who changes) it reads as Program-Level Family
   Engagement (A2.6). Severin re-reviews S176 alongside CP-09-01. Until he does, the row stays as
   it is, and the 3.x mirror of CF-008 (CF-P07 in CP-12-27) and any F1.9/A2.6/A3.2 tie-breaker
   stay blocked.

## Per code

3. **F1.9 and CP-09-01 (decision F1-2).** CP-09-01 narrows F1.9. It should state a reasoned "no
   deviation" for Epstein Type 3's "audiences" (families attending events as an audience): counts
   of attendance and reach are outputs (A2.5), as the 2.x tie-breaker CF-009 says, so no FD is
   logged. Read the verified
   Epstein excerpt against CP-09-01's F1.9 wording before any F1.9 row is added: f1-05,
   SUPPORTED, "Improve recruitment, training, and schedules to involve families as volunteers and
   audiences at the school" (Type 5 is confirmed in the same document). Also read the caregiver
   volunteering routing against it: a parent volunteering in the program is a caregiver (Part F,
   F1.9 by rule 1), while CP-12-32 sends adult volunteers who are not participants' caregivers to
   Part A (G15). The F1.9 registry rows (CP-12-22) and the F1.9 "(located" tag (CP-12-25) wait for
   this PR.
4. **A2.4 and CP-09-02 (decision A2-5): drop "(or another group facing barriers)".** The clause
   has no source, and 11 of 13 real texts under it are general equity of access. After the merge,
   re-anchor A2.4 on two verified sources (a separate CP): CDC (2025) Disability Inclusion
   Strategies, a2-03 SUPPORTED, "identify and remove barriers, such as physical, communication,
   and attitudinal, that hamper individuals' ability"; and ESSA 20 U.S.C. 6318(f), a2-07
   SUPPORTED, "parents and family members who have limited English proficiency, parents and family
   members with disabilities".
5. **A2.5 and CP-09-01.** The 21st CCLC Annual Performance Report, a2-09 PARTIAL, "'regular' is
   defined as attending 30 days or more throughout the academic year.", can be added as a partial
   row for H001. The verifier found two wordings in the report ("30 days or more" and "more than 30
   days"), so the row is partial. CP-09-01's owner may prefer the APR it already cites.
6. **A2 and S4.9 (decision A2-2).** CP-12-11 logs A2.1 "accreditation" as a codebook-defined FD
   (decision A2-1), which takes A2 over the one-third line and starts the A2 anchor re-review.
   PR #62's A2.4 (CP-09-02) and A2.5 (CP-09-01) changes should land before that FD, so A2 crosses
   the line only after them. CP-10-01's open question on ADA Title II and Section 504 program
   access for A2.4 still applies.
7. **Y7.1 and CP-09-03 (decision Y7-2).** Keep Y7.1's wording, including "aspiration": narrowing
   it flips H007. Cite Perkins V, 20 U.S.C. 2302(7)(A), on govinfo: y7-02 SUPPORTED, "information
   regarding career awareness exploration opportunities and planning with respect to an
   individual's occupational". Log a codebook-defined FD only if (7)(A) does not cover interest.
8. **Y7.2 and CP-09-03.** Resumes and interviews (S063) have only partial support: 2302(7)(B),
   y7-04 PARTIAL, and 20 CFR 681.460(a)(14), y7-05 PARTIAL (postsecondary side only). Ask a
   verifier to check the work side of Conley's Key Transition Knowledge & Skills before relying on
   it.
9. **Y7.3 and CP-09-06.** Cite WIOA, 29 U.S.C. 3272(17): y7-06 SUPPORTED, "critical thinking skills,
   digital literacy skills, and self-management skills, including competencies in utilizing
   resources,". The verifier notes it covers readiness for both postsecondary education and
   employment. On "or daily life" the reviewers split between dropping it and writing "work or
   study"; the PR owner chooses, and either way tests the three bare "digital literacy" texts that
   now go to Y1.4.
10. **Y7 routings (CP-09-03, CP-09-08).** Job interviews → Y7.2; pitching a business idea → Y4.6
    (speaking to an audience); starting a business → Y7.4. These match proposed rows P-11 to P-14,
    which Severin rules on before any hint ships (G11). The entrepreneurial-mindset case (P-15,
    P-16) is open.
11. **Leadership, Y4.7 vs Y6.4 (CP-09-08 rule 7; decision Y6-1).** Keep "leadership" in Y6.4 with
    no FD. Agree one hint wording with an exclude pointer to Y4.7 that does not flip S059; the
    first wording did ("leading peers in a group task, even a community project → Y4.7" is the
    wording that keeps S059).
12. **Y2 drift and CP-09-04 (decision G7).** Y2 is at 2 of 6 after CP-12-01. A Y2.5
    creative-writing FD would take it to 3 of 6 and freeze PR #62's Y2 changes until a re-review.
    The writing leads are not good enough to avoid that: the PISA creative-thinking draft (y2-11)
    is PARTIAL and only on a third-party copy, and CCSS W.3 is unverified. FD-P16's anchor line
    should list all four National Core Arts Standards processes; y2-13 SUPPORTED, "Understanding
    and evaluating how the arts convey meaning.", and y2-14 SUPPORTED, "Relating artistic ideas and
    work with personal meaning and external context.", add Responding and Connecting. Restate its
    evidence as "statements name them together" (S077).
13. **Y2.6 (CP-09-01, CP-09-02).** Y2.6's `basis` still says "(located)" for the Search
    Institute's Constructive Use of Time, which CP-10-01 verified. CP-12-25's script sets it after
    this PR merges, along with the `search-40-assets` Y2.6 component.
14. **Y1.4 and CP-09-06.** The 2026 CSTA PK-12 Computer Science Standards are published
    (y1-subject-07 PARTIAL), but the page does not say they supersede the 2017 standards, so keep
    citing 2017. ESSA 20 U.S.C. 7801(52) names "technology, engineering" and "computer science"
    among well-rounded subjects (y1-subject-08 SUPPORTED); it is a list of subjects with no outcome
    wording. Revisit both after this PR settles Y1.4.
15. **Y1.18 vs Y7.4.** Y1.18 includes "degree or certificate completion", while Y7.4 holds
    credentials. The Y1 pilot left this boundary to the Y7 work in this PR. ESSA
    6311(h)(1)(C)(xiii), postsecondary enrollment, is verified for Y1.18 (y1-attainment-16).

## Overlaps to rebase

16. **rulesText.** CP-09-05 and CP-09-07 edit the "Uncoded" bullets under CODING PROCESS, and
    CP-09-08 edits rules 7, 13 and 16. Nearby, CP-12-19 and CP-12-32 add one DOMAIN ONLY bullet
    (whichever lands first applies it), CP-12-32 edits the `mentors_volunteers` target-population
    line, and CP-12-19 appends rule 18 (check that the last rule is still 17 when it is applied).
    Whichever lands second rebases on the first.
17. **Waiting for this PR.** CP-12-01 (Y2), CP-12-11 (A2, because A2.5 is in this PR), the Y2.6
    and F1.9 tags in CP-12-25, CP-12-22's F1.9 part, FD-P16, the A2.4 re-anchor, and the shared
    Source-line and `frameworkBasis` gate (CP-12-16, CP-12-26, CP-12-29 and the others), which runs
    after this PR and PR #66 merge (G10).
