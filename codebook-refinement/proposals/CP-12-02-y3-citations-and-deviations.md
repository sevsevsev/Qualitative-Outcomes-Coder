# CP-12-02: Y3 citation fixes and deviation log (cross-setting belonging, youth in care, reunification, FD-P01 narrowed)

| Field | Value |
|---|---|
| Type | CITATION_FIX, with the FD-P01 change the citation findings require (S4.1; R-08 requires the FD-P01 change and any Y3.4 decision in one CP). Splits into citations and deviation log if Severin prefers the pilot's two-CP form. |
| Codes touched | Registry: search-40-assets (Y3.1, Y3.2), acf-nytd (Y3.2), search-developmental-relationships (Y3.5), plus 5 new sources (Y3.1 ×2, Y3.2, Y3.4 ×2). `basis` notes: Y3.1, Y3.2, Y3.4, Y3.5. DEVIATIONS.md: FD-P01 (narrowed), a dated no-entry note, drift table. `docs/codebook/research-basis.md` Y3 table and paragraph. **No definition, include, exclude, useInstead, example, source line, `frameworkBasis`, `fidelity` or rulesText change.** |
| Version bump | PATCH, relative to the version current when applied (3.1.4 today, so 3.1.5; 3.2.1 if PR #62's 3.2.0 merges first). Bumped at merge. |
| Requirement served | R1 frameworks; R4 drift |
| Status | draft (batch 1 research review, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | **changed FD-P01** (Y3.1): narrowed from "widened from school to any program or community" to the **"safe" element** only; case sector-widening, still open and counted (Y3 stays 1 of 5). Y3.2 "youth in care": none (decision C; closed by Chafee/NYTD). Y3.4 reunification: none, under decision B1-3 as recommended. If Severin takes B1-3's alternative, **new FD-P44 (provisional id)**, counted, which puts Y3 at 2 of 5 (40%, over the line; R-08). |

## Problem

Batch 1 (`research-review/full-review/batch1/recommendations.md`, "Act now" items 8, 9, 10, 11)
found:

1. **Y3.1 rests on CDC (2009) school connectedness alone** (registry fit partial: "limited to
   school"), while its text covers programs and communities, mattering and "less isolation".
   Verified cross-setting sources now exist for belonging, mattering and loneliness (y3-02, y3-03,
   y3-04, all SUPPORTED). None names **felt safety**, and adjudicated **S163** ("feel safe and
   accepted at the program") and **S131** ("feeling safe and affirmed in program spaces") depend on
   that word. So FD-P01 cannot close, but its stated departure is now too broad.
2. **Y3.2's include names "permanent adult connections for youth in care"**, a population neither
   CDC nor Developmental Relationships covers. Decision C (age and population rule) applies here,
   the one place in the batch it bites. Chafee (a)(2) and NYTD verify it (y3-05, y3-06); **S102**
   rests on it.
3. **Y3.4 "reunification" goes past Developmental Assets 1-2.** Two statutes name reunification and
   safe return (y3-09, y3-10, SUPPORTED), but they are agency or grantee duties, not youth outcomes
   (y3-10 verifier note; taxonomy review), so their fit is partial. **S024** ("Runaway youth will
   be reunified with family when it is safe to do so") rests on the element.
4. **Stale text and a missing row (R-32).** Y3.4's `basis` still names Chafee/NYTD and Butts et al.
   (2010), which have no Y3.4 support; `docs/codebook/research-basis.md` says the same. Y3.5's
   `basis` names Developmental Relationships "Expand Possibilities" with no registry row (y3-11).

## Change

### `basis` notes (data only, not in the prompt)

| Code | Before | After |
|---|---|---|
| Y3.1 | CDC (2009) School Connectedness (verified). | CDC (2009) School Connectedness (verified, partial: school only). Across settings (CP-12-02, all verified, partial): U.S. Surgeon General (2023), social connection advisory, glossary: belonging, loneliness, social isolation (claim y3-04); Search Institute Developmental Assets, Community values youth (mattering; claim y3-02); NRC/IOM (2002), Community Programs to Promote Youth Development, chapter 5, 'Opportunities to Belong' (a program feature; claim y3-03). Feeling safe rests on CDC alone (FD-P01, narrowed). |
| Y3.2 | Search Institute Developmental Relationships (Express Care; Challenge Growth; Provide Support) (verified); CDC (2009) (verified). | Search Institute Developmental Relationships (Express Care; Challenge Growth; Provide Support) (verified); CDC (2009) (verified); Search Institute Developmental Assets, Other adult relationships (verified; claim y3-07). Youth in care: 42 U.S.C. 677(a)(2), Chafee, meaningful, permanent connections with a caring adult (verified; claim y3-05); ACF NYTD outcome 'positive connections with adults' (verified; claim y3-06). |
| Y3.4 | Chafee, 42 U.S.C. 677 / ACF NYTD 'positive connections' (verified for adult connections); Butts, Bazemore & Meroe (2010) relationships domain (partial). Hybrid: no source names family reunification as a youth outcome on its own. Re-review 2026-09-26 (STANDARDS S4.9): Search Institute Developmental Assets, Support assets 1-2 (content verified; publication year unconfirmed) and Developmental Relationships with parents (verified). Now Framework; FD-P17 closed. | Search Institute Developmental Assets, Support assets 1-2, family support and positive family communication (verified, direct; publication year unconfirmed) and Developmental Relationships with parents (verified, partial). Reunification: 42 U.S.C. 671(a)(15)(B), reasonable efforts to preserve and reunify families (claim y3-09), and Runaway and Homeless Youth Act, 34 U.S.C. 11212(b)(3), safe return of the youth (claim y3-10) (both verified, partial: agency and grantee duties, not youth outcomes; decision B1-3). FD-P17 closed 2026-09-26. |
| Y3.5 | Mathematica (2022), Education-to-Workforce Indicator Framework, social capital (verified); Developmental Relationships, Expand Possibilities (partial, secondary). | Mathematica (2022), Education-to-Workforce Indicator Framework, social capital (verified); Search Institute Developmental Relationships, Expand Possibilities: Connect, 'Introduce me to people who can help me grow' (verified, direct for introductions; claim y3-11). |

Y3.1's `fidelity` (`adapted`) and `deviation` (`FD-P01`) are unchanged.

### Registry

Mechanics (record file `v3/source-verification-2026-10-16-b1.json`, module
`v3/verification_2026_10_16_b1.py`, the `build_registry.py` call) are as set out in CP-12-03,
"Shared mechanics"; whichever batch-1 CP lands first creates them. This CP's tables:

```python
ADD_SUPPORTS = [  # (source, code, component, claim, fit)
    ('search-40-assets', 'Y3.1', 'Empowerment: Community values youth (young person perceives that adults in the community value youth)', 'y3-02', 'partial'),
    ('search-40-assets', 'Y3.2', 'Support: Other adult relationships (support from three or more nonparent adults)', 'y3-07', 'direct'),
    ('acf-nytd', 'Y3.2', "NYTD outcome 'positive connections with adults' (youth in or aging out of foster care)", 'y3-06', 'direct'),
    ('search-developmental-relationships', 'Y3.5', "Expand Possibilities: Connect ('Introduce me to people who can help me grow')", 'y3-11', 'direct'),
]
# fit for y3-02 is set to partial although the verdict is SUPPORTED: mattering is one part of Y3.1
# (recommendations item 8: y3-02, y3-03 and y3-04 are all recorded as partial for Y3.1).

NEW = [
    {'id': 'surgeon-general-2023-social-connection', 'claim': 'y3-04',
     'cite_as': "Office of the U.S. Surgeon General (2023). Our Epidemic of Loneliness and Isolation: The U.S. Surgeon General's Advisory on the Healing Effects of Social Connection and Community. U.S. Department of Health and Human Services.",
     'codebook_names': [], 'tier': 'A', 'publisher': 'U.S. Department of Health and Human Services, Office of the Surgeon General', 'year': 2023,
     'supports': [('Y3.1', 'Glossary (p. 7): belonging, loneliness, social isolation', 'partial')]},
    {'id': 'nrc-iom-2002-community-programs', 'claim': 'y3-03',
     'cite_as': 'National Research Council and Institute of Medicine (2002). Community Programs to Promote Youth Development. Washington, DC: The National Academies Press.',
     'codebook_names': [], 'tier': 'C', 'publisher': 'The National Academies Press', 'year': 2002,
     'supports': [('Y3.1', "Chapter 5, The Landscape of Community Programs for Youth, section 'Features of Community Programs for Youth', subsection 'Opportunities to Belong'", 'partial')]},
    {'id': 'chafee-42usc677-a2', 'claim': 'y3-05',
     'cite_as': '42 U.S.C. 677(a)(2), John H. Chafee Foster Care Program for Successful Transition to Adulthood',
     'codebook_names': [], 'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('Y3.2', 'purpose (a)(2): meaningful, permanent connections with a caring adult, for youth who experienced foster care at age 14 or older', 'direct')]},
    {'id': 'usc-42-671-a15b-reunification', 'claim': 'y3-09',
     'cite_as': '42 U.S.C. 671(a)(15)(B), State plan for foster care and adoption assistance: reasonable efforts to preserve and reunify families',
     'codebook_names': [], 'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('Y3.4', "(a)(15)(B): reasonable efforts to preserve and reunify families, including making it possible for a child to safely return to the child's home", 'partial')]},
    {'id': 'rhya-34usc11212-b3', 'claim': 'y3-10',
     'cite_as': '34 U.S.C. 11212(b)(3), Runaway and Homeless Youth Act, Basic Center Grant Program: eligibility; plan requirements',
     'codebook_names': [], 'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
     'supports': [('Y3.4', '(b)(3): ensuring the safe return of the youth according to the best interests of the youth', 'partial')]},
]
NOTES_APPEND = {
    'nrc-iom-2002-community-programs': "Chapter citation corrected by the verifier (claim y3-03): the chapter is 'Chapter 5: The Landscape of Community Programs for Youth'; 'Features of Community Programs for Youth' is a section in it and 'Opportunities to Belong' a subsection. It describes a feature of program settings, not the young person's felt belonging, so the fit is partial. Added by CP-12-02.",
    'usc-42-671-a15b-reunification': "Agency duty, not a measured youth outcome; recorded as partial (decision B1-3, A3.1 precedent). Clause (ii) adds 'to make it possible for a child to safely return to the child's home' (verifier note). Added by CP-12-02.",
    'rhya-34usc11212-b3': 'A grantee plan assurance rather than a youth outcome (verifier note), so partial. Added by CP-12-02.',
    'chafee-42usc677-a2': 'Separate pinpoint entry, in the pattern of the essa-6311-* entries, so chafee-42usc677 (677(a)(1), Y7.7) is untouched. Added by CP-12-02.',
}
```

Each support takes `excerpt` and `verifier_note` from its claim. Effect: +5 sources, +9 supports.
`codebook_extensions` unchanged.

Not used: y3-01 (PARTIAL, and a caring setting, not felt belonging), y3-08 (PARTIAL, role models;
rejected).

### `codebook-refinement/DEVIATIONS.md`

**FD-P01, changed** (Anchor, Departs, Evidence, Alternative, Decided in and Revisit replaced; Status,
Fidelity and Case unchanged):

```markdown
### FD-P01 · Y3.1

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** CDC (2009) School Connectedness (verified, partial: school only). Across settings, all verified and recorded as partial: U.S. Surgeon General (2023) advisory glossary, belonging, loneliness and social isolation (claim y3-04); Search Institute Developmental Assets, Community values youth (claim y3-02); NRC/IOM (2002), 'Opportunities to Belong' (claim y3-03).
- **Departs:** narrowed 2026-10-16 (CP-12-02). Belonging, mattering and less isolation outside school now have verified cross-setting sources. What still departs is the **"safe" element**: feeling safe in a program or community as part of connectedness rests only on CDC's school-based construct; none of the cross-setting sources names felt safety.
- **Evidence:** S163 ("Students will feel safe and accepted at the program.") and S131 ("LGBTQ+ youth will report feeling safe and affirmed in program spaces."), both gold Y3.1 with Y8.10 or Y5.2 as alternate; H063 ("a new community", the 3.0 evidence).
- **Alternative considered:** close the entry on the new sources (practitioner review; rejected because no verified source names safety); drop "safe" from the definition and route felt safety to Y8.10 (MINOR; would move S163 and S131 against Severin's adjudication).
- **Decided in:** 3.0 proposal (PR #33); narrowed by CP-12-02 (batch 1 research review, 2026-10-16), pending Severin.
- **Revisit:** close if a verifier rates a source SUPPORTED for felt safety as part of belonging in a program or community (first candidate: NRC/IOM (2002), "physical and psychological safety"; request V1).
```

**Dated note** (a new section after "Anchor re-review, 2026-09-26", or after CP-11-02's "Y1
review" section if that has merged). Bullets use "**Label.**", not "**Label:**", so
`deviations.test.ts` does not read them as fields of the last FD block (the CP-11-02 precedent):

```markdown
## Y3 review, 2026-10-16 (CP-12-02)

Batch 1 of the research review checked Y3's codes against their sources. FD-P01 was narrowed to the "safe" element. Two departures were checked and need no entry:

- **Y3.2, youth in care.** Closed by sources, not logged. 42 U.S.C. 677(a)(2) (Chafee), "to help children who have experienced foster care at age 14 or older achieve meaningful, permanent connections" (claim y3-05), and the NYTD outcome "positive connections with adults" (claim y3-06), both SUPPORTED, cover the population the include names (decision C).
- **Y3.4, reunification.** No entry (decision B1-3). 42 U.S.C. 671(a)(15)(B) and 34 U.S.C. 11212(b)(3) (claims y3-09, y3-10, both SUPPORTED) name reunification and safe return as agency and grantee duties. They are recorded as partial-fit support, as Coffman (2009) and Reisman et al. (2007) were for A3.1. If Severin instead counts the element as codebook-defined, FD-P01 must close first, or Y3 passes a third (R-08).
```

**Drift table.** Y3 row text only (count unchanged):

```
| Y3 Belonging | 5 | 1 (Y3.1) | 20% | no |
| Y3 Belonging | 5 | 1 (Y3.1, "safe" only) | 20% | no |
```

Intro sentence: append ", and for CP-12-02 (2026-10-16), which narrowed FD-P01".

**Alternative under B1-3 (not recommended):**

```markdown
### FD-P44 · Y3.4

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute Developmental Assets, Support assets 1-2 (verified, direct).
- **Departs:** "reunification" (definition and include). The statutes that name it (claims y3-09, y3-10) set agency duties, not youth outcomes.
- **Evidence:** S024 (gold Y3.4).
- **Alternative considered:** partial-fit support with no entry (B1-3, recommended).
- **Decided in:** CP-12-02 (batch 1 research review, 2026-10-16), pending Severin.
- **Revisit:** if a verified source names family reunification as a youth outcome.
```

With it, Y3.4 becomes `adapted` / `FD-P44` and the Y3 row reads 2 of 5 (40%, over a third), which
triggers an anchor re-review (S4.9) unless FD-P01 has closed.

### `docs/codebook/research-basis.md`, Y3 section (docs only)

Table, before (two rows):

```
| Chafee / NYTD permanent connections | 42 U.S.C. 677; ACF NYTD outcomes survey | verified (`chafee-42usc677`, `acf-nytd`) | Y3.2, Y3.4 |
| Positive Youth Justice, relationships | Butts, Bazemore & Meroe (2010) | partial (covers peers, family and community together) | Y3.4 |
```

After (replaces those two rows; Developmental Relationships row gains nothing in its codes column
because Y3.5 is already listed):

```
| Chafee / NYTD permanent connections | 42 U.S.C. 677(a)(2); ACF NYTD outcomes survey | verified (`chafee-42usc677-a2`, `acf-nytd`) | Y3.2 |
| Developmental Assets | Search Institute (Support: family support, positive family communication, other adult relationships; Empowerment: community values youth) | verified (`search-40-assets`) | Y3.1 (partial), Y3.2, Y3.4 |
| Social connection advisory | Office of the U.S. Surgeon General (2023) | verified, partial (`surgeon-general-2023-social-connection`) | Y3.1 |
| Community programs, opportunities to belong | NRC/IOM (2002), chapter 5 | verified, partial: a program feature (`nrc-iom-2002-community-programs`) | Y3.1 |
| Reunification duties | 42 U.S.C. 671(a)(15)(B); 34 U.S.C. 11212(b)(3) | verified, partial: agency duties (`usc-42-671-a15b-reunification`, `rhya-34usc11212-b3`) | Y3.4 |
```

"Where they don't fit", before: "CDC connectedness is school-specific; the code widens it to any
program or community (H063 "a new community"). No framework in the records names family
reunification as a youth relationship outcome; Y3.4 relies on the Chafee/NYTD "positive
connections" language and is flagged hybrid."

After: "CDC connectedness is school-specific. The Surgeon General's advisory, the Developmental
Assets and NRC/IOM cover belonging, mattering and loneliness in other settings, but none names
felt safety, so the "safe" part of Y3.1 stays a logged widening (FD-P01). Family reunification
appears only as an agency duty (42 U.S.C. 671; the Runaway and Homeless Youth Act), recorded as
partial support for Y3.4. The category level (grouping by relationship partner) is the codebook's
own, with convergent support from the Developmental Assets and CDC."

### Domain `hint`, `rulesText`, source lines, `frameworkBasis`, `CONFUSIONS.md`

Unchanged. Y3.2's source line and Y3's `frameworkBasis` are in CP-12-16.

## Sources

| Registry ID | Claim | Verdict → fit | Component | Verifier excerpt |
|---|---|---|---|---|
| surgeon-general-2023-social-connection (new) | y3-04 | SUPPORTED → partial | glossary | "A subjective distressing experience that results from perceived isolation or inadequate meaningful connections," |
| search-40-assets | y3-02 | SUPPORTED → partial | Community values youth | "Young person perceives that adults in the community value youth." |
| nrc-iom-2002-community-programs (new) | y3-03 | SUPPORTED → partial | Opportunities to Belong | "Promoting a sense of belonging is fundamental to attracting and retaining the participation of young people," |
| chafee-42usc677-a2 (new) | y3-05 | SUPPORTED → direct | 677(a)(2) | "to help children who have experienced foster care at age 14 or older achieve meaningful, permanent connections" |
| acf-nytd | y3-06 | SUPPORTED → direct | positive connections with adults | "educational attainment, positive connections with adults, high-risk behavior, and access to health insurance." |
| search-40-assets | y3-07 | SUPPORTED → direct | Other adult relationships | "Young person receives support from three or more nonparent adults." |
| usc-42-671-a15b-reunification (new) | y3-09 | SUPPORTED → partial | 671(a)(15)(B) | "except as provided in subparagraph (D), reasonable efforts shall be made to preserve and reunify families—" |
| rhya-34usc11212-b3 (new) | y3-10 | SUPPORTED → partial | 11212(b)(3) | "ensuring the safe return of the youth according to the best interests of the youth" |
| search-developmental-relationships | y3-11 | SUPPORTED → direct | Expand Possibilities: Connect | "Introduce me to people who can help me grow." |

Every SUPPORTED row lowered to `partial` is lowered because it covers only part of a broad code
(Y3.1) or is an agency duty (Y3.4); no PARTIAL row is raised.

## Verification requests

**V1. NRC/IOM "physical and psychological safety"** (the one lead that could close FD-P01; listed
under "Unverified leads"). Send to `codebook-citation-verifier`:

```
claim_id: y3-12
code: Y3.1
cite_as: National Research Council and Institute of Medicine (2002). Community Programs to Promote Youth Development. Washington, DC: The National Academies Press.
claimed_component: Features of positive developmental settings: 'physical and psychological safety', and whether it is framed as young people feeling safe in the program (an experience of the youth) or as a property of the setting.
url: https://www.nationalacademies.org/read/10022/chapter/7
```

Outcomes: if SUPPORTED and framed as the youth's experience, a follow-up CP closes FD-P01 (Y3 goes
to 0 of 5). If SUPPORTED only as a setting feature, record it as partial; FD-P01 stays open and
Severin decides whether a setting feature can close it (the B1-3 reasoning). If PARTIAL or
unsupported, nothing changes. This CP does not wait for V1.

## Decisions for Severin (this CP depends on them)

- **B1-3 (Y3.4 reunification).** Recommended: partial-fit support, no FD (T, P, D). Alternative: a
  counted FD-P44 (F), which needs FD-P01 closed first.
- **C (age and population rule).** Recommended: keep the pilot rule. It bites only on Y3.2 ("youth
  in care"), which Chafee/NYTD close. Developmental Assets is written for ages 12-18, but Y3.1 names
  no age, so no entry.
- **FD-P01 closure.** Recommended: keep open, narrowed (T, F, D). The practitioner would close it now.
- **D (timing).** Recommended: land now (no prompt change).
- **E (review desk).** Not part of this CP; the Truancy Provider rows coded Y3.4 wait for an owner
  of R-26.

## Dependencies and boundaries

- **R-08.** FD-P01's change and the Y3.4 decision are in this one CP, as required.
- **CP-12-16** needs this CP's Y3.2 rows (y3-05, y3-06) before the Y3.2 source line can cite them.
- **PR #62 / #66.** No Y3 field either PR edits is touched (CP-09-04 sends "welcome in arts spaces"
  to Y3.1, which the new cross-setting sources support; R-18). CP-11-02 also adds a dated section
  and edits the drift intro; re-apply only this CP's parts.

## Not bundled

Y3.4 exclude for "prevention of entry into child welfare" (R-26, needs an owner); Y3.2 staff-rapport
example (R-29); Y3.2 role models (rejected); Y3.1 useInstead's stale "Follows the safety
tie-breaker being tested in PR #31" (prompt text; a separate PATCH if wanted); the null `tier` and
`publisher` on `chafee-42usc677` (Y7.7's entry).

## Gold impact

- Rows expected to change code: none (no prompt text changes).
- Design rows these records rest on: S163, S131 (Y3.1 "safe"; keep FD-P01 open), S112 (isolation
  with friends → Y3.3, alternate Y3.1; unaffected), S102 (Y3.2 youth in care), S026 (Y3.2), S024,
  S070 (Y3.4), S099 (Y3.5).
- New proposed rows: none.
- Held-out gold was not read or used.

## Judge result

Not run.
