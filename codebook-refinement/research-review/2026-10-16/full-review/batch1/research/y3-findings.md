# Y3 Belonging & Relationships: research findings (researcher "y3", 2026-10-16)

Scope: Y3.1 to Y3.5 in codebook 3.1.4. These are leads for independent verification and
change nothing in the repo. Each excerpt below is a contiguous passage I saw through WebFetch on
2026-10-16; where the fetch tool split a sentence, I say so. Real-use counts are unique texts:
LM is the logic-model run (3.1.2, 2026-10-02) and NLM is the no-logic-model run (2026-10-04).
Both are model codes, not gold.

## Summary

| Code | Today | Suggestion | Confidence |
|---|---|---|---|
| Domain anchor | Search Institute DR + Developmental Assets (Support) + CDC 2009 + E2W | Keep. All four are live and unrevised. Fix stale text in `research-basis.md` and Y3.4 `basis` (PATCH) | high |
| Y3.1 | adapted, FD-P01 (CDC school-only, partial) | Re-anchor to Developmental Assets (caring neighborhood, caring school climate, community values youth) and NRC/IOM 2002 (belonging in community programs). Cite the Surgeon General 2023 advisory for "loneliness / isolation". Then close FD-P01, or convert it to merged-components (not counted) | medium |
| Y3.1 (fidelity) | "less isolation; reduced loneliness" has no source | Unlogged construct widening. Fixed by the Surgeon General citation, or log it under FD-P01 | high (that it is unsourced) |
| Y3.2 | framework (CDC, DR direct) | Add Chafee 42 U.S.C. 677(a)(2) and NYTD for "permanent adult connections for youth in care". Optionally add Assets "Other adult relationships" and "Adult role models" | high |
| Y3.3 | framework (CDC direct; DR partial) | Keep. The DR partial is secondary, and CDC carries the code | high |
| Y3.4 | framework (Assets 1-2 direct; DR partial) | "Reunification" goes past Assets 1-2. Either cite 42 U.S.C. 671(a)(15)(B) and 34 U.S.C. 11212(b)(3) (both partial: they are agency duties), or log an FD. Add a hint that keeps "prevent entry into the child-welfare system" out of Y3.4 | medium |
| Y3.5 | framework (E2W direct) | Keep. Add the missing registry row for DR Expand Possibilities, "Connect", which `basis` already names | high |
| Taxonomy | A Connectedness / B Close relationships / C Networks | Keep. The split by relationship partner matches the Developmental Assets Support category and CDC's four factors. No missing construct justifies an enum cost | medium |

## 1. Anchor check (whole domain)

- **Search Institute Developmental Relationships Framework**
  (https://searchinstitute.org/resources-hub/developmental-relationships-framework): live and
  unchanged. It still has five elements and 20 actions, with no version or revision note (footer
  © 2026). Expand Possibilities reads "Connect me with people and places that broaden my world."
  No revision since the citation.
- **Search Institute Developmental Assets**
  (https://searchinstitute.org/resources-hub/developmental-assets-framework): live and
  unchanged. The page carries "Copyright ©1997 Search Institute", which may explain why the
  registry could not confirm the 2006 date. Cite it without a year, as now.
- **CDC (2009) School Connectedness**
  (https://www.cdc.gov/healthyyouth/protective/pdf/connectedness.pdf): the PDF still loads, with
  the same definition and the same four factors (Adult Support; Belonging to a Positive Peer
  Group; Commitment to Education; School Environment). CDC still uses this definition: Wilkins
  et al. (2023), *MMWR Supplements* 72(1):13-21
  (https://www.cdc.gov/mmwr/volumes/72/su/su7201a2.htm), quotes it and adds "School
  connectedness is the sense of being cared for, supported, and belonging". Search results show
  CDC's older healthyschools connectedness page has moved to archive.cdc.gov. Only the PDF is
  cited, so no change is needed. Watch this URL in future re-verifications.
- **Mathematica, E2W social capital** (https://educationtoworkforce.org/indicators/social-capital):
  live, with the definition unchanged: "Individuals have access to and are able to mobilize
  relationships that help them further their goals." The indicator sits under Postsecondary and
  Workforce Success, and its measures cover K-12 through workforce.
- **Stale documentation (PATCH).** `docs/codebook/research-basis.md` (Y3 table and "Where they
  don't fit") still lists Chafee/NYTD and Butts, Bazemore & Meroe as Y3.4 sources and calls Y3.4
  "hybrid". The registry has no Y3 row for any of them. The Y3.4 `basis` string still starts
  with the Chafee/Butts "Hybrid" text before the 2026-09-26 re-review note. Neither matches
  `source` or the registry. Rewrite both to match the registry. Confidence high.

## 2. Y3.1 Belonging & Mattering (adapted, FD-P01)

Real use: LM 57 unique texts, NLM 33 (14 and 15 rows at low or medium confidence). This is Y3's
largest code. Statements name many settings that are not school: "Increased feeling of
belonging in the community", "Feel welcome in their local museum", "comfort, safety, and
belonging in outdoor green spaces", "Reduction in feelings of isolation through a confidential,
peer-facilitated network". So the sector widening is real and common.

**Component fit today.** CDC 2009 is partial, as the registry says. The fetch confirmed the
definition is school-bound, and the PDF does not use the word "loneliness". It does describe
students who "are socially isolated, reporting few friends either inside or outside of school"
(as a risk group, not an outcome).

**Better grounding (FD-P01's revisit condition is "a verified cross-setting connectedness
framework").**
- Developmental Assets is already in Y3's `frameworkBasis` and has cross-setting items. Each
  quote below is the page's full definition:
  - Caring neighborhood: "Young person experiences caring neighbors."
  - Caring school climate: "School provides a caring, encouraging environment."
  - Community values youth: "Young person perceives that adults in the community value youth."
    This is a mattering item.

  The page lists the first two under Support and the third under Empowerment. The fetch tool
  inferred those groupings from page order, so the verifier should confirm them.
- National Research Council & Institute of Medicine (2002), *Community Programs to Promote
  Youth Development* (National Academies Press, doi 10.17226/10022). This covers the program
  setting that Assets lacks.
  - Chapter 5 (https://www.nationalacademies.org/read/10022/chapter/7), under "Opportunities to
    Belong": "Promoting a sense of belonging is fundamental to attracting and retaining the
    participation of young people."
  - Chapter 2 (https://www.nationalacademies.org/read/10022/chapter/4) lists the setting
    features, including "positive social norms; support for efficacy and mattering;
    opportunities for skill building;". The fetch tool split this list into pieces; the earlier
    piece reads "physical and psychological safety; appropriate structure; supportive
    relationships; opportunities to belong;".
  - Caveat: these are features of settings. As cited, they back belonging and mattering in
    program settings, not the code's outcome wording itself. The verifier will likely rate them
    partial.
- Office of the U.S. Surgeon General (2023), *Our Epidemic of Loneliness and Isolation*
  (https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf), glossary.
  This is a federal tier A source, it loads today, and it is cross-setting. The fetch tool would
  only return the opening of each definition:
  - Loneliness: "A subjective distressing experience that results from perceived isolation or
    inadequate meaningful connections."
  - Belonging: "A fundamental human need—the feeling of deep connection with social groups,
    physical places"
  - Social isolation: "Objectively having few social relationships, social roles, group
    memberships, and infrequent social interaction."

**Fidelity of the code's own text.** "less isolation" (definition) and "reduced loneliness"
(include) are a construct widening, not a sector widening. FD-P01 logs only "widened from
school to any program or community", so these clauses are an unlogged departure. No current Y3.1
source names loneliness, and adjudicated H055 ("decrease in feelings of isolation") depends on
it. The S1.6 case would be codebook-defined element, or sector widening if CDC's "socially
isolated" is read generously; neither fits cleanly. Smallest fix: cite the Surgeon General
glossary (claim y3-04). Confidence high that the clause is unsourced today, medium that the
advisory will verify as direct.

**Smallest change.** Citation-fix CP (PATCH): add claims y3-01 to y3-04 and keep CDC. If they
verify, set Y3.1 to `fidelity: framework` and close FD-P01, or convert it to merged-components
(not counted) if Severin judges that several sources make a composite. Drift for Y3 becomes 0 of
5. Enum +0.

**Observability.** Good. Statements say "feel welcome", "sense of belonging", "know they matter".

**Real-use leads (hint candidates, low priority).** Some texts sit at the edge of Y3.1: "School
pride through professional artist instruction" (pride in the program goes to Y2.1 by adjudicated
S008), "Young people have a greater understanding of how their personal stories connect to
school and community narratives" (medium confidence, more likely Y5), and "ease the transition
into new school environments". These are model behaviour, not a codebook gap. A one-line
example would cover the S008 boundary.

## 3. Y3.2 Supportive Adult Relationships

Real use: LM 40, NLM 10 unique texts. Statements are mostly mentors, staff, "trusted adults" and
"positive role models".

**Component fit.** CDC "Adult support" and DR Express Care / Challenge Growth / Provide Support
are both direct. The DR fetch confirmed "Be dependable—Be someone I can trust." and "Believe in
me—Make me feel known and valued." This matches adjudicated S116 ("someone believes in them") and
S175 ("challenges them").

**Fidelity gap.** The include line names "permanent adult connections for youth in care". That
is a population (youth in foster care) that neither CDC nor DR names, and adjudicated S102 and
H047 rely on it. `research-basis.md` claims Chafee/NYTD for Y3.2, but the registry has no Y3.2
row for either, so the support exists only in documentation. Under the brief's age rule this
counts as a population mismatch, so it is an unlogged departure today. Fix it by citation, not
by FD:
- 42 U.S.C. 677(a)(2) (https://www.law.cornell.edu/uscode/text/42/677): "to help children who
  have experienced foster care at age 14 or older achieve meaningful, permanent connections with
  a caring adult;". The fetch tool returned this in two consecutive pieces with nothing between
  them.
- ACF, About NYTD (https://acf.gov/cb/fact-sheet/about-nytd) lists the outcome "positive
  connections with adults" ("educational attainment, positive connections with adults, high-risk
  behavior"). This is already a verified source in the registry (`acf-nytd`); add a Y3.2 support
  row. The page has no date; its latest dated event is 2011.

**Optional strengthening (same framework family, tier D).**
- Developmental Assets, Other adult relationships: "Young person receives support from three or
  more nonparent adults."
- Developmental Assets, Adult role models: "Parent(s) and other adults model positive, responsible
  behavior."

  Real runs code "Exposure to positive role models", "positive LGBTQ+ adult role models" and
  "provide positive mentors" to Y3.2 at medium confidence. A role-model citation plus an include
  word ("positive adult role models") would ground that. Smallest change: citation now; add the
  include word only if Severin wants role-model exposure in Y3.2 (MINOR, widening).

**Real-use lead.** "Teachers' increased rapport with students" (LM) has staff as the subject. It
probably belongs with an A1 staff-practice code. One example, not a rule change.

Confidence high (Chafee and NYTD fix), medium (role-model widening).

## 4. Y3.3 Peer Relationships & Friendship

Real use: LM 26, NLM 9 unique texts. Coding is clean ("Positive peer relationships", "Stronger
peer connection").

CDC "Belonging to a Positive Peer Group" is direct and live. The DR peer link stays partial: the
fetch confirmed that peers appear only in the list "relationships with parents, teachers,
mentors, coaches, and peers". It is a secondary source and needs no action. "Friendships across
groups" (adjudicated S177 and S186) is still friendship, and no population is named, so it is not
a departure. CP-09-08 (in flight) routes "healthy relationships" to Y3.3 or Y3.4; nothing here
conflicts with it. **Keep.** Confidence high.

## 5. Y3.4 Family Relationships

Real use: LM 1 and NLM 3 unique texts, with 9 of 10 NLM rows at low or medium confidence. Two of
the three NLM texts are misroutes: "Documented prevention of youth entry into the formal child
welfare system through case management" and "preventing youth from entering the formal child
welfare system". Neither is the youth's relationship with family. The third, "Strengthened
father-son bonding", is a correct Y3.4.

**Fidelity gap.** The definition and include name "reunification", and adjudicated S024 is
"Runaway youth will be reunified with family when it is safe to do so". Assets 1-2 ("Family life
provides high levels of love and support"; positive family communication) describe the quality
of the relationship, not reunification as a placement status. The code's own `basis` already
says "no source names family reunification as a youth outcome on its own". The FD-P17 closure
therefore covers communication and connection but not "reunification". That word is an unlogged
departure; the nearest S1.6 case is codebook-defined element.

Candidate sources (both partial: each states a duty of an agency or grantee, not a youth
outcome):
- 42 U.S.C. 671(a)(15)(B) (https://www.law.cornell.edu/uscode/text/42/671): "reasonable efforts
  shall be made to preserve and reunify families—" and (ii) "to make it possible for a child to
  safely return to the child's home;". Child welfare.
- 34 U.S.C. 11212(b)(3) (https://www.law.cornell.edu/uscode/text/34/11212), the Runaway and
  Homeless Youth Act basic center plan requirements: "ensuring the safe return of the youth
  according to the best interests of the youth". This matches S024's runaway youth. 34 U.S.C.
  11201 and 11211 do not mention reunification; I checked.

**Smallest change.** Add y3-09 and y3-10 as citations. If the verifier rates them partial, log a
small FD for the reunification clause (codebook-defined element, counted). That would put Y3 at
1 of 5 if FD-P01 closes, or 2 of 5 (40%, over the one-third line) if it stays open. **So
sequence the FD-P01 closure first.** Separately, add a hint: "Preventing entry into the
child-welfare system, or a child's placement or safety status, is not Y3.4". The F1 and Y8
reviewers should name the target code; no current code names child-welfare entry. Confidence
medium.

## 6. Y3.5 Social Capital & Networks (CP-07-02)

Real use: LM 29, NLM 12 unique texts. Mostly correct ("expand their professional networks",
"building social capital among peers"). One edge misroute: "Successful connection of youth to
community-based support systems" is service linkage, not a relationship network.

E2W is direct and live. The code text names "employers" and "professionals". The E2W indicator's
definition says only "relationships that help them further their goals", and the fetch found
employers and job referrals only in its "Why it matters" text. That is within reach of the
definition, not a departure. **Registry gap:** `basis` cites "Developmental Relationships, Expand
Possibilities (partial, secondary)", but the registry has no Y3.5 support row. The fetched action
"Connect—Introduce me to people who can help me grow." supports "introductions" in the include
line (claim y3-11).

Search Institute also publishes a Social Capital Framework
(https://searchinstitute.org/youth-opportunity-toolkit/social-capital-framework). It is
organizational: its four domains are levers such as "Create a relationship-rich climate", and it
gives no outcome definition. It fits A2 better than Y3.5, so I do not propose it. **Keep.**
Confidence high.

## 7. Taxonomy and observability

- The categories group codes by relationship partner, not by DR's five elements. That is right
  for outcome statements, which name who the relationship is with, not which DR action was used.
  The grouping matches the Developmental Assets Support category: family support and
  communication go to Y3.4, other adult relationships to Y3.2, and neighborhood and school
  climate to Y3.1. It also matches CDC's factors (adult support goes to Y3.2, peer group to
  Y3.3).
- Things not split out, with no change proposed:
  - Interpersonal trust in general ("Ability to Trust Others", NLM, coded Y3.2).
  - Perceived social support with no partner named. CP-09-09 sends this to Y3 domain-only.
  - Romantic or dating relationships, which sit in Y8.4.

  None has enough real-use volume to justify +1 enum against the 165 redesign line.
- Every code is observable in written statements, and real runs show high confidence on most
  rows. Y3.4 is the exception: it is rare, and two of its three NLM texts are misroutes.

## Not fetched / limits

- CDC's 2019 adolescent-connectedness press release defines connectedness across family and
  other settings. The fetch tool returned only fragments, never one contiguous sentence (curl to
  cdc.gov is blocked by the proxy), so I do not put it forward.
- The Developmental Assets category placement (Support vs Empowerment) came from page order.
- The NRC/IOM pages are from the National Academies reading room, and the chapter numbers are as
  the tool reported them.
