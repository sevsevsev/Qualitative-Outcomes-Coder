# CP-12-30: Bring `docs/codebook/research-basis.md` up to date with the 3.x sources

**In plain words.** The research-basis document explains, domain by domain, which frameworks the
codebook rests on. It was written on 2026-09-26, the day before independent checkers re-read every
source, so many sources are still marked "located" (found but not yet read) and a few
statements are no longer true. This change adds a dated note pointing readers to the source list as
the current record, and marks the domains whose categories are the codebook's own grouping and not
a framework's. It also says that the staff learning and practice codes follow Guskey's (2002)
evaluation levels, removes a youth-development framework the codebook no longer cites (Lerner's
Five Cs) and two stale family-relationship sources (Chafee/NYTD and Butts et al. for Family
Relationships, Y3.4), and records that Policy & Funding Change (A3.1) now rests on two verified
advocacy-evaluation guides. The document is never shown to the coding model, so this lands now.

| Field | Value |
|---|---|
| Type | CITATION_FIX (documentation only) |
| Codes touched | None. File: `docs/codebook/research-basis.md` only. No codebook data, registry, rulesText, `CONFUSIONS.md` or `DEVIATIONS.md` changes. |
| Version bump | none (docs only; no codebook text changes). If the orchestrator bundles it with a registry PATCH, it rides that PATCH. |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. The document describes deviations already logged; it opens none.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G10 (no-prompt parts land now) | The whole CP lands now. |
| G2 (secondary frameworks named in `frameworkBasis`, not in an anchor line here) | This document is not used to name secondary frameworks; CP-12-29 does that in the data. |
| A3-1 | The A3 text names the institutional-practice question and its provisional deviation (FD-P51, which records that formal adoption of a program or practice by a school goes beyond the two policy guides) without settling it; that is CP-12-19's prerequisite CP. |

## What lands now and what waits

| Change | Reaches the coding prompt? | When |
|---|---|---|
| Items 1-7 below | no | now |

Nothing waits for the gate.

**Shared rows (whichever lands first applies them; the other drops the rows).** Item 4 (Y3) is also
drafted in CP-12-02, which lands first by plan; CP-12-02's text, reproduced below, is the text to
use. Item 5's A1 sentence is the batch-4 draft of CP-12-18's text, handed here by CP-12-10 and
CP-12-18; it is used verbatim.

## Problem

SUMMARY item 9 and batch 4 later item 9: `research-basis.md`

- tags many sources "located" that CP-10-01 verified on 2026-09-27 (for example Y1 lines 104, 111,
  112, 115, 120; Y5 line 259; A1 lines 441-442), with no note saying the tags are dated;
- says categories are "taken from the domain's anchor framework where it has one" (line 67) but
  never says which domains have no such anchor;
- says A1's split follows Learning Forward (lines 447-448), while the codes cite Guskey (2002)
  Level 2 and Level 4 (registry: `guskey-2002-pd-evaluation`, direct for A1.1 and A1.2; Learning
  Forward partial);
- lists Lerner et al. (2005) for Y5 and Y6 (lines 264, 292, 309; appendix B line 501), which no 3.x
  code cites and the registry does not hold;
- lists Chafee/NYTD and Butts et al. (2010) for Y3.4 (lines 201-202, 211-213), which have no Y3.4
  support (batch 1 R-32);
- puts A3.1 on Learning Forward with "no dedicated framework ... [VERIFY]" (lines 475, 477-479),
  while CP-10-02 cites Coffman (2009) and Reisman, Gienapp & Stachowiak (2007) for A3.1 (both
  verified, direct) and closed FD-P20.

## Change (`docs/codebook/research-basis.md`)

### 1. Dated status note (new paragraph after line 24, before "## What the codebook is for")

```
**Status update, 2026-10-16 (CP-12-30).** The tags in this document are as of the 2026-09-26
review. On 2026-09-27 (CP-10-01, CP-10-02) independent verifiers re-read every 3.x source, and the
3.x registry, `codebook-refinement/sources/youth_outcomes_v3.sources.json`, now records each
source's status and, for each code, whether the fit is direct or partial. Most sources tagged
**located** below are now **verified**; at this update one 3.x source is still located (Weiss,
Little & Bouffard, 2005, A2.5). Where this document and the registry differ, the registry is
current. Tags are not edited one by one here; sections whose sources changed are updated in place
(Y3, Y5, Y6, A1, A3).
```

### 2. Structural rationale: which categories are codebook groupings

Insert a paragraph after the level table (after line 68):

```
Where a domain has one anchor framework, its categories are that framework's dimensions (for
example Y4, CASEL's five competencies). In Y1, Y2, Y3, Y5, Y6, Y7 and A2, and in category B of A3,
the categories are the codebook's own grouping of codes that rest on different frameworks; each of
those sections says so.
```

### 3. "Codebook grouping" mark under each listed domain's categories

Append to the **Categories:** line of Y1 (line 96-97), Y2 (160-161), Y3 (194-195), Y5 (254-255),
Y6 (286-287) and Y7 (316-317), after the last category:

```
 *Codebook grouping: these categories are the codebook's own arrangement, not one framework's dimensions.*
```

A2 has no categories line today. Insert after "### A2 Program Quality, Access & Reach":

```
**Categories:** A. Quality & experience (A2.1–A2.2) · B. Access & inclusion (A2.3–A2.4) ·
C. Reach & engagement systems (A2.5–A2.6). *Codebook grouping: these categories are the
codebook's own arrangement, not one framework's dimensions.*
```

A3 has none either. Insert after "### A3 Systems, Policy & Community Conditions":

```
**Categories:** A. Policy & institutions (A3.1) · B. Partnerships & community (A3.2–A3.3).
*Category B is a codebook grouping: it joins Collective Impact (A3.2) and collective efficacy
(A3.3), two separate frameworks.*
```

(Category names and code ranges are from `codebooks/youthOutcomesV3.data.ts`.)

### 4. Y3: drop Chafee/Butts for Y3.4 (CP-12-02's text)

Table, before (lines 201-202):

```
| Chafee / NYTD permanent connections | 42 U.S.C. 677; ACF NYTD outcomes survey | verified (`chafee-42usc677`, `acf-nytd`) | Y3.2, Y3.4 |
| Positive Youth Justice, relationships | Butts, Bazemore & Meroe (2010) | partial (covers peers, family and community together) | Y3.4 |
```

After:

```
| Chafee / NYTD permanent connections | 42 U.S.C. 677(a)(2); ACF NYTD outcomes survey | verified (`chafee-42usc677-a2`, `acf-nytd`) | Y3.2 |
| Developmental Assets | Search Institute (Support: family support, positive family communication, other adult relationships; Empowerment: community values youth) | verified (`search-40-assets`) | Y3.1 (partial), Y3.2, Y3.4 |
| Social connection advisory | Office of the U.S. Surgeon General (2023) | verified, partial (`surgeon-general-2023-social-connection`) | Y3.1 |
| Community programs, opportunities to belong | NRC/IOM (2002), chapter 5 | verified, partial: a program feature (`nrc-iom-2002-community-programs`) | Y3.1 |
| Reunification duties | 42 U.S.C. 671(a)(15)(B); 34 U.S.C. 11212(b)(3) | verified, partial: agency duties (`usc-42-671-a15b-reunification`, `rhya-34usc11212-b3`) | Y3.4 |
```

"Where they don't fit", before (lines 210-213):

```
**Where they don't fit.** CDC connectedness is school-specific; the code widens it to
any program or community (H063 "a new community"). No framework in the records names
family reunification as a youth relationship outcome; Y3.4 relies on the Chafee/NYTD
"positive connections" language and is flagged hybrid.
```

After:

```
**Where they don't fit.** CDC connectedness is school-specific. The Surgeon General's advisory,
the Developmental Assets and NRC/IOM cover belonging, mattering and loneliness in other settings,
but none names felt safety, so the "safe" part of Y3.1 stays a logged widening (FD-P01). Family
reunification appears only as an agency duty (42 U.S.C. 671; the Runaway and Homeless Youth Act),
recorded as partial support for Y3.4. The category level (grouping by relationship partner) is the
codebook's own, with convergent support from the Developmental Assets and CDC.
```

The rows name registry entries CP-12-02 adds; if CP-12-30 lands before CP-12-02, item 4 waits for
CP-12-02 so the document never names an entry the registry lacks.

### 5. A1: the split follows Guskey (CP-12-18 batch-4 text, verbatim)

Table, before (lines 441-442):

```
| Standards for Professional Learning | Learning Forward (2022) | located (`learning-forward-2022`) | A1.1, A1.2 |
| Trauma-informed approach | SAMHSA (2014), SMA 14-4884 | located (`samhsa-tic-2014`) | A1.2 |
```

After:

```
| Evaluating professional development | Guskey, T. R. (2002), Level 2 (participants' learning) and Level 4 (participants' use of new knowledge and skills) | verified (`guskey-2002-pd-evaluation`) | A1.1, A1.2 |
| Standards for Professional Learning | Learning Forward (2022) | verified, partial: how professional learning is designed (`learning-forward-2022`) | A1.1, A1.2 |
| Trauma-informed approach | SAMHSA (2014), SMA 14-4884 | verified (`samhsa-tic-2014`) | A1.2 |
```

"Structure and fit", before (lines 447-448):

```
**Structure and fit.** Adult learning vs practice change follows Learning Forward's
distinction between educator learning and changes in practice. A1.3 uses general
workforce sources, not Head Start, by Severin's decision.
```

After:

```
**Structure and fit.** Adult learning vs practice change follows Guskey's (2002) Level 2
(participants' learning) and Level 4 (participants' use of new knowledge and skills);
Learning Forward's standards (partial) describe how professional learning is designed. A1.3 uses
general workforce sources, not Head Start, by Severin's decision.
```

### 6. Drop Lerner (Y5, Y6, appendix B)

- Delete the Y5 table row (line 264): `| Five Cs, Confidence | Lerner, R. M., et al. (2005), *Journal of Early Adolescence* | partial (definitions only via a secondary copy) | domain |`
- Delete the Y6 table row (line 292): `| Five Cs, Character and Contribution | Lerner et al. (2005) | partial | Y6.1, Y6.5 |`
- Y6 "Structure" (line 309), before: `**Structure.** Positive values joins civic life (as in v2 and Lerner's Character and Contribution) because both ...`; after: `**Structure.** Positive values joins civic life (as in v2) because both ...` (rest of the sentence unchanged).
- Appendix B (lines 500-501), before: `**Library access** would close five partials at once: MacQueen (1998), Keyes (2002), Shogren et al. (2015), Carlone & Johnson (2007), Lerner et al. (2005).`; after: `**Library access** would close four partials at once: MacQueen (1998), Keyes (2002), Shogren et al. (2015), Carlone & Johnson (2007).`

### 7. A3.1 on CP-10-02

Table, before (line 475):

```
| Standards for Professional Learning (systems) | Learning Forward (2022) | located | A3.1 |
```

After:

```
| Policy change outcomes | Coffman, J. (2009), *A User's Guide to Advocacy Evaluation Planning*, Harvard Family Research Project | verified (`coffman-2009-advocacy-evaluation`; CP-10-02) | A3.1 |
| Improved policies | Reisman, J., Gienapp, A., & Stachowiak, S. (2007), *A Guide to Measuring Advocacy and Policy* | verified (`reisman-2007-advocacy-policy`; CP-10-02) | A3.1 |
```

"Where they don't fit", before (lines 477-479):

```
**Where they don't fit.** Policy change (A3.1) has no dedicated framework in the
records; it is a codebook-defined status (hybrid) [VERIFY before citing a
policy-change framework].
```

After:

```
**Where they don't fit.** Policy change (A3.1) rests on Coffman (2009) and Reisman, Gienapp &
Stachowiak (2007), re-verified 2026-09-27 (CP-10-02), which closed the earlier codebook-defined
entry (FD-P20). Both guides define policy change in the public policy arena; whether a school or
district formally adopting a program or practice also belongs in A3.1 is decided separately
(decision A3-1, provisional FD-P51), after Severin rules on the proposed practice rows.
```

Appendix B, "[VERIFY] leads not yet fetched" (lines 502-505): drop "a policy-change framework for
A3.1;" (closed by CP-10-02). The other leads stay.

## Sources

No new citations. Every status written in is the registry's current status (2026-10-16 dump of
`youth_outcomes_v3.sources.json`) or a CP-12-02 entry that lands first.

| Registry ID | Status | Component relied on |
|---|---|---|
| guskey-2002-pd-evaluation | verified, direct (A1.1, A1.2) | Level 2, Level 4 |
| learning-forward-2022 | verified, partial (A1.1, A1.2) | standards for designing professional learning |
| samhsa-tic-2014 | verified (A1.2) | trauma-informed approach |
| coffman-2009-advocacy-evaluation | verified, direct (A3.1) | policy goals |
| reisman-2007-advocacy-policy | verified, direct (A3.1) | improved policies |
| CP-12-02 entries (Y3) | as CP-12-02 records them | as in item 4 |

## Verification requests

None.

## Gold impact

- Rows expected to change code: none (docs only).
- New proposed rows: none. Held-out gold was not read.

## Judge result

Not run (documentation only).
