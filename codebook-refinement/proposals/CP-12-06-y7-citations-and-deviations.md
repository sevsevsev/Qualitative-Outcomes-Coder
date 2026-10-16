# CP-12-06: Y7 citation fixes and deviation log, Y7.4-Y7.7 (batch 2 research review)

**In plain words.** This proposal fixes the sources behind three Career domain codes and changes no wording that tells coders what a code means. Independent Living Skills (Y7.7) was logged as stretching a foster-care law to all young people. A checked life-skills toolkit written for any young person aged 14 to 21, plus the federal law that requires giving youth leaving foster care their birth certificate, Social Security card and state ID, now cover it, so that note is closed. Employment and Earnings (Y7.5) gets the legal definition of "competitive integrated employment", and Technical Skills, Credentials and Work-Based Learning (Y7.4) gets the federal youth-program rules that name internships and work experience, plus the official government copy of the career and technical education law it already cites. The record-keeping changes land now; the source lines coders see wait for one combined pair of test runs after the two open pull requests (#62 and #66) merge.

| Field | Value |
|---|---|
| Type | CITATION_FIX (with the matching `DEVIATIONS.md` change, as in recommendations section 2) |
| Codes touched | Source lines (part b only): Y7.4, Y7.5, Y7.7. `basis`: Y7.4, Y7.5, Y7.7. `fidelity`/`deviation`: Y7.7 (adapted → framework, FD-P15 removed). Registry: `perkins-v` (URL and the Y7.4 support), `wioa-20cfr681460` (cite_as and a new Y7.4 support), plus 4 new sources. No definition, include, exclude, useInstead, example, hint or rulesText changes. **Y7.1, Y7.2, Y7.3 and Y7.6 are not touched** (Y7.1-Y7.3 are in PR #62; see Deferred). `flag: "hybrid"` on Y7.7 is not touched. Domain Y7 `frameworkBasis` is not edited here (secondary clause in CP-12-29). |
| Version bump | PATCH. Part (a): the next PATCH when applied (same release as CP-12-04/05 if approved together). Part (b): inside the single batched Source PATCH after PRs #62 and #66 merge (decision G10). |
| Requirement served | R1 frameworks, R4 drift |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | changed FD-P15 (closed: Y7.7's cross-sector scope now rests on the Casey Life Skills Toolkit, which is for youth "regardless of whether they are in foster care", claim y7-13; vital documents on 42 U.S.C. 675(5)(I), claim y7-18, partial-fit support as a statutory duty; decisions G1, G4 and Y7-1). None for Y7.4, Y7.5. Y7 drift: 1/7 → 0/7. |

## What lands when

| Change | Reaches the prompt? | Lands |
|---|---|---|
| (a1) `fidelity`/`deviation`: Y7.7 → framework, FD-P15 removed | no | now |
| (a2) `basis`: Y7.4, Y7.5, Y7.7 | no | now |
| (a3) registry rows (shared module `verification_2026_10_16_b2.py`) | no | now |
| (a4) `DEVIATIONS.md`: FD-P15 closed, "Batch 2 review" bullets, drift table | no | now |
| (b) Source lines: Y7.4, Y7.5, Y7.7 | yes | the batched gate after PRs #62 and #66 |
| (b) Y7 `frameworkBasis` secondary clause (decision G2) | yes | in CP-12-29, same gate (not edited by this CP) |

## Problem

The batch 2 research review (`research-review/full-review/batch2/`, recommendations section 2,
"CP B2-Y7a", items 12-14). Evidence comes only from `verify/verification-table.md`; every
excerpt below is the verifier's own.

1. **FD-P15's trigger is met, and the vital-documents include has no source.** FD-P15 (Y7.7,
   sector widening of Chafee) says "Revisit: if a verified cross-sector life-skills framework is
   found". Claim y7-13 (SUPPORTED) found one. Separately, Chafee's verified component, 42 U.S.C.
   677(a)(1) "daily living skills (such as financial literacy training and driving instruction)",
   does not name documents, yet the include names "getting an ID, Social Security card and birth
   certificate" and adjudicated **S120** and **H046** depend on it.
2. **Y7.5 "competitive integrated employment" has no source.** The include names the term, and
   adjudicated **S151** ("transition into competitive integrated employment") depends on it. 20
   CFR 677.155 does not define it.
3. **Y7.4's Perkins support is a host-only partial.** The registry marks it partial only because
   it was read on Cornell LII ("The verdict is PARTIAL only because Cornell LII is not a
   government host"). Internships and work experience, named in Y7.4's definition, have no
   youth-program citation.

## Why this is the smallest fit (STANDARDS S2.2)

No definition, include or useInstead changes. The fixes are citations, `basis` notes, one
fidelity field and one log entry. Time management (R-06 → Y4.3) and FCS (y7-17) are left out, so
Y7.7's scope does not grow.

## Change

### Part (a): no prompt change (lands now; `npm test` is the check)

#### (a1) `codebooks/youthOutcomesV3.data.ts`: `fidelity` and `deviation`

| Code | Field | Before | After |
|---|---|---|---|
| Y7.7 | `fidelity` | `"adapted"` | `"framework"` |
| Y7.7 | `deviation` | `"FD-P15"` | (removed) |

#### (a2) `codebooks/youthOutcomesV3.data.ts`: `basis` notes

| Code | Before | After |
|---|---|---|
| Y7.4 | Perkins V (verified); WIOA 20 CFR 677.155, credential attainment (verified). | Perkins V, 20 U.S.C. 2302(5)(A)(ii) and (5)(B) (verified, direct, on govinfo; claim y7-08); WIOA 20 CFR 677.155, credential attainment (verified); WIOA youth program elements, 20 CFR 681.460(a)(3)-(4), work experience (including pre-apprenticeship, internships and job shadowing) and occupational skill training (verified, partial: program elements a local area must provide, counted as partial-fit support with no FD, decision G4; claim y7-09). |
| Y7.5 | WIOA, 20 CFR 677.155 (verified). | WIOA, 20 CFR 677.155 (verified); Rehabilitation Act, 29 U.S.C. 705(5), competitive integrated employment (verified, direct; claim y7-11). |
| Y7.7 | Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified). Hybrid: scope widened beyond foster care. | Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified). Casey Family Programs (2022), Casey Life Skills Toolkit v1.4, daily living and self-care activities, for any youth 14-21 "regardless of whether they are in foster care" (verified, direct; claim y7-13). 42 U.S.C. 675(5)(I), birth certificate, Social Security card and state ID for youth leaving foster care (verified, partial: a statutory duty, counted as partial-fit support with no FD, decision G4; claim y7-18). IDEA, 34 CFR 300.43(a)(2)(v), daily living skills in transition services (verified, partial; supporting only; claim y7-15). FD-P15 closed (CP-12-06). |

#### (a3) Registry (rows added to the shared module defined in CP-12-04)

New rows in `codebook-refinement/v3/source-verification-2026-10-16-b2.json`:

| claim_id | Verdict | source_kind | Used for |
|---|---|---|---|
| y7-08 | SUPPORTED | primary (govinfo) | perkins-v URL, source excerpt and the Y7.4 support |
| y7-09 | SUPPORTED | primary (eCFR) | wioa-20cfr681460 → Y7.4 (fit partial, G4) |
| y7-11 | SUPPORTED | primary (govinfo) | new source: 29 U.S.C. 705(5) → Y7.5 |
| y7-13 | SUPPORTED | primary (casey.org) | new source: Casey Life Skills Toolkit → Y7.7 |
| y7-15 | SUPPORTED | primary (eCFR) | new source: IDEA 34 CFR 300.43(a)(2)(v) → Y7.7 (supporting; fit partial, G4) |
| y7-18 | SUPPORTED | primary (govinfo) | new source: 42 U.S.C. 675(5)(I) → Y7.7 (fit partial, G4) |

Tables in `codebook-refinement/v3/verification_2026_10_16_b2.py`:

```python
URLS.update({
    'perkins-v': 'https://www.govinfo.gov/link/uscode/20/2302',  # was Cornell LII
})
SOURCE_EXCERPT.update({'perkins-v': 'y7-08'})
SUPPORT_RECHECK.update({
    ('perkins-v', 'Y7.4'): ('y7-08', 'direct', None),  # was partial (host only)
})
COMPONENTS.update({
    ('perkins-v', 'Y7.4'): "20 U.S.C. 2302(5)(A)(ii) 'technical skill proficiency or a recognized postsecondary credential'; 2302(5)(B) competency-based, work-based, or other applied learning",
    ('wioa-20cfr681460', 'Y1.17'): '681.460(a)(1)-(2): dropout prevention and recovery leading to a secondary school diploma or its recognized equivalent',  # moved out of cite_as; wording unchanged
})
CITE_AS.update({
    # was 'WIOA youth program elements, 20 CFR 681.460(a)(1)-(2): dropout prevention and recovery ...'
    # The entry now backs two codes, so the pinpoints move to the components.
    'wioa-20cfr681460': 'WIOA youth program elements, 20 CFR 681.460(a).',
})
NOTES.update({
    'perkins-v': 'URL moved to the govinfo official copy (CP-12-06, claim y7-08). The Y7.1 support still carries the CP-10-01 Cornell note and partial fit; it is re-checked after PR #62 (CP B2-Y7b, claims y7-01, y7-02).',
})
EXTRA_SUPPORTS += [  # (source, code, component, claim[, fit])
    ('wioa-20cfr681460', 'Y7.4', '681.460(a)(3)-(4): paid and unpaid work experiences (pre-apprenticeship, internships and job shadowing); occupational skill training toward recognized postsecondary credentials', 'y7-09', 'partial'),  # program elements: partial-fit support, no FD (decision G4)
]

NEW += [
    {
        'id': 'rehab-act-29usc705-cie', 'claim': 'y7-11',
        'cite_as': '29 U.S.C. 705(5), Rehabilitation Act of 1973, as amended by WIOA: definition of competitive integrated employment.',
        'codebook_names': ['29 U.S.C. 705(5)'],
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'supports': [('Y7.5', "definition of 'competitive integrated employment': full-time or part-time work, including self-employment, at competitive wages in an integrated setting")],
    },
    {
        'id': 'casey-life-skills-toolkit', 'claim': 'y7-13',
        'cite_as': 'Casey Family Programs (2022). Casey Life Skills Toolkit, Version 1.4.',
        'codebook_names': ['Casey Life Skills Toolkit'],
        'tier': 'D', 'publisher': 'Casey Family Programs', 'year': 2022,
        'supports': [('Y7.7', "life skill area 'Daily living and self-care activities'; for any youth 14-21 regardless of foster care status")],
    },
    {
        'id': 'usc-42-675-5i-vital-documents', 'claim': 'y7-18',
        'cite_as': 'Social Security Act sec. 475(5)(I), 42 U.S.C. 675(5)(I): documents for a child leaving foster care.',
        'codebook_names': ['42 U.S.C. 675(5)(I)'],
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': None,
        'fit': 'partial',  # a statutory duty: partial-fit support, no FD (decision G4)
        'supports': [('Y7.7', 'certified copy of the U.S. birth certificate, Social Security card, and driver\'s license or state ID for a child leaving foster care at 18 or older')],
    },
    {
        'id': 'idea-34cfr300-43-transition', 'claim': 'y7-15',
        'cite_as': 'Individuals with Disabilities Education Act regulations, 34 CFR 300.43(a)(2)(v): transition services.',
        'codebook_names': [],  # supporting only; not named on a Source line
        'tier': 'A', 'publisher': None, 'year': None,  # no verifier recorded an issuing body
        'fit': 'partial',  # services a school must provide: partial-fit support, no FD (decision G4)
        'supports': [('Y7.7', 'transition services include, if appropriate, acquisition of daily living skills')],
    },
]
```

Notes:

- **`fit` overrides.** The optional `'fit'` key on `NEW` rows (defined in CP-12-04's `apply()`)
  and an optional fifth element on `EXTRA_SUPPORTS` rows (the table CP-12-05 creates; this CP
  makes `apply()` read the fifth element when present) set `partial` for the statutory and
  program duties under decision G4; every other support takes its fit from the verdict.
- **`wioa-20cfr681460` cite_as** changes because the entry now backs Y1.17 and Y7.4. Y1.17's
  component, excerpt and fit are unchanged, and Y1.17's Source line does not name the entry.
  This is a registry display change only. CP-11-01 (PR #66) does not touch this entry.
- **`usc-42-675-5i-vital-documents`** is separate from CP-11-01's proposed
  `usc-42-675-1g-educational-stability` (42 U.S.C. 675(1)(G), Y1.13). If both land, a later
  registry PATCH may merge them into one `usc-42-675` entry with two supports; this CP does not
  assume either.
- **The Y7.4 support from y7-08** has one excerpt for 2302(5)(A)(ii); (5)(B) is in the verifier's
  note ("The two parts are not adjacent, so one excerpt cannot cover both").
- The IDEA `publisher` is `None`: the verifier's note says only "34 CFR 300.43(a)(2)(v) matches
  the claim", and S1.4 forbids filling an issuing body from memory.

Result for CP-12-06 alone: +4 sources and +5 supports (87 → 91, 146 → 151 on today's base).
`codebook_extensions` unchanged.

#### (a4) `codebook-refinement/DEVIATIONS.md`

**FD-P15, before:**

```markdown
### FD-P15 · Y7.7

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified).
- **Departs:** a foster-care program's construct applied to any young person.
- **Evidence:** H046, H048, S120, S162, S224.
- **Alternative considered:** leave independent living forced into 9.3 or uncoded.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified cross-sector life-skills framework is found.
```

**FD-P15, after:** only the Status line changes.

```markdown
- **Status:** closed (2026-10-16, CP-12-06: the revisit trigger is met; Casey Family Programs (2022), Casey Life Skills Toolkit v1.4, verified, is for youth 14-21 "regardless of whether they are in foster care" (claim y7-13) and lists daily living and self-care. Vital documents rest on 42 U.S.C. 675(5)(I) (claim y7-18), a statutory duty counted as partial-fit support with no entry (decision G4), whose population matches the code's example ("before exiting care"); the code's own text names no population outside its sources (decision G1). Chafee stays the first source, Casey follows as cross-sector support (decision Y7-1). Y7.7 is now Framework.)
```

**Bullets added to the "Batch 2 review (Y5-Y7), 2026-10-16" section** (created by CP-12-04;
create it here if CP-12-06 lands first):

```markdown
- **Y7.5, competitive integrated employment.** A citation gap, not a departure: 29 U.S.C. 705(5) (claim y7-11) defines the term the include already names. The code names no population (S151 does: youth with disabilities, inside the statute's population).
- **Y7.4, internships and work experience.** A citation gap, closed by 20 CFR 681.460(a)(3)-(4) (claim y7-09), program elements counted as partial-fit support with no entry (decision G4). Entrepreneurship is not in Y7.4's definition and is not added (later cycle; under decision G11, Severin first adjudicates two proposed design rows per side).
- **Y7.7, time management.** Not added. It stays in Y4.3 (R-06); Casey files it under Work and Study, not Daily Living.
```

**Drift table.** Y7 row, before and after:

```
| Y7 Career | 7 | 1 (Y7.7) | 14% | no |
```

```
| Y7 Career | 7 | 0 | 0% | no |
```

After the PR #62 items (CP B2-Y7b), Y7 could reach 2/7 (Y7.1 interest, if Perkins 2302(7)(A)
does not cover it, and Y7.2 resumes and interviews, if no source verifies), still under one
third. That is a reason to land this CP before B2-Y7b.

#### (a5) `rulesText`, domain `hint`, `CONFUSIONS.md`

Unchanged.

### Part (b): prompt-reaching changes (batched Source PATCH after PRs #62 and #66; two-run design-set gate)

#### Source lines (print as "Source Framework:")

| Code | Before | After |
|---|---|---|
| Y7.4 | Perkins V; WIOA performance indicators, 20 CFR 677.155 (credential attainment). | Perkins V; WIOA performance indicators, 20 CFR 677.155 (credential attainment); WIOA youth program elements, 20 CFR 681.460(a)(3)-(4) (work experience, including internships and pre-apprenticeship; occupational skill training). |
| Y7.5 | WIOA performance indicators, 20 CFR 677.155. | WIOA performance indicators, 20 CFR 677.155; Rehabilitation Act, 29 U.S.C. 705(5) (competitive integrated employment). |
| Y7.7 | Chafee Foster Care Program for Successful Transition to Adulthood, 42 U.S.C. 677(a)(1) (daily living skills). | Chafee Foster Care Program for Successful Transition to Adulthood, 42 U.S.C. 677(a)(1) (daily living skills); Casey Family Programs (2022), Casey Life Skills Toolkit (daily living and self-care); Social Security Act sec. 475(5)(I), 42 U.S.C. 675(5)(I) (birth certificate, Social Security card and state ID for youth leaving foster care). |

Order on Y7.7 follows decision Y7-1: Chafee (tier A) first, Casey (tier D) second, 675(5)(I)
third. IDEA stays in the registry and `basis` only. No line uses "partial", "located",
"(verified)" or "VERIFY".

#### Domain Y7 `frameworkBasis`: in CP-12-29, not here

Decision G2 puts the frameworks this CP adds outside Y7's anchor into Y7's `frameworkBasis` as a
"secondary" clause, through CP-12-29: Casey Family Programs (2022), Casey Life Skills Toolkit
(Y7.7); Social Security Act sec. 475(5)(I), 42 U.S.C. 675(5)(I) (Y7.7); Rehabilitation Act,
29 U.S.C. 705(5) (Y7.5); WIOA youth program elements, 20 CFR 681.460 (Y7.4; the batch's
devil's-advocate review would fold it into the existing WIOA item, which is CP-12-29's call).
Chafee and Perkins are already there. CP-12-29's list in the full-review SUMMARY does not yet
name these; it must, for its `sync.test.ts` check. The clause's wording is CP-12-29's.

#### Gate

In the batched gate described in CP-12-04 (after PRs #62 and #66). Rows to watch: S166 (Y7.4);
S151, S218 (Y7.5); S120, H046, H048, S162, S224 (Y7.7); S187 (must stay Y8.1: no food or cooking
source is added). The Y7.7 line now names documents for "youth leaving foster care"; watch
S120/H046 for a drift to Y7.2 (their recorded alternate). Expected flips: none.

## Sources

| Registry ID | Status | Component relied on | claim_id and verbatim excerpt (verifier's) |
|---|---|---|---|
| casey-life-skills-toolkit (new) | verified | scope; Daily living and self-care | y7-13 SUPPORTED: "regardless of whether they are in foster care, live with biological parents or reside in a group home." |
| usc-42-675-5i-vital-documents (new) | verified; fit partial (G4) | 675(5)(I) | y7-18 SUPPORTED: "an official or certified copy of the United States birth certificate of the child, a social security card issued by the" |
| idea-34cfr300-43-transition (new, supporting) | verified; fit partial (G4) | 300.43(a)(2)(v) | y7-15 SUPPORTED: "If appropriate, acquisition of daily living skills and provision of a functional vocational evaluation." |
| rehab-act-29usc705-cie (new) | verified | 705(5) definition | y7-11 SUPPORTED: "The term ‘‘competitive integrated employment’’ means work that is performed on a fulltime or part-time basis" |
| perkins-v → Y7.4 | verified, partial → direct | 2302(5)(A)(ii), (5)(B) | y7-08 SUPPORTED: "provides technical skill proficiency or a recognized postsecondary credential, which may include" |
| wioa-20cfr681460 → Y7.4 | verified; fit partial (G4) | 681.460(a)(3)-(4) | y7-09 SUPPORTED: "(ii) Pre-apprenticeship programs; (iii) Internships and job shadowing; and" |

Caveats carried into registry notes: 675(5)(I) applies to a child leaving foster care at 18 or
an older state-elected age; 681.460 elements and 2302 are services and definitions, not
measured outcomes; govinfo drops the hyphen in "full-time"; the y7-09 excerpt covers element 3
only, element 4 is in the note; Casey Toolkit v1.4 is dated December 19, 2022 in its release
notes.

Considered and not used: Casey Practitioner's Guide (y7-14, PARTIAL, Maine DOE host), 29 U.S.C.
733(b)(4) (y7-16, PARTIAL), FCS Standards (y7-17, PARTIAL, misquoted component, secondary host;
also pulls time management and S187), 681.560 entrepreneurship (y7-10, later cycle), 681.500 for
Y7.6 (y7-12, optional, later cycle).

## Verification requests

None. Every source used here was read on a primary host. (The request for the deferred Y7.2
item is listed under Deferred, for CP B2-Y7b.)

## Decisions applied (settled 2026-10-16, Severin: recommended options)

| Decision | What it settles here |
|---|---|
| G1 | An FD is needed only when the code's own text names a population outside its sources; Y7.7's does not, so FD-P15 closes. |
| Y7-1 | Y7.7 cites Chafee (tier A) first, Casey (tier D) as cross-sector support; FD-P15 closes. Chafee is not replaced. |
| G4 | 675(5)(I), 681.460 and IDEA 300.43 are statutory or program duties: partial-fit support, no FD. |
| G8 | All sources here are official or publisher copies. The Y7.1 Perkins support (Cornell) moves to govinfo in B2-Y7b. |
| G10 | Part (a) lands now; part (b) waits for the one gate after PRs #62 and #66. |
| G2 | Casey, 675(5)(I), 705(5) and 681.460 go into Y7's `frameworkBasis` as a secondary clause, through CP-12-29. |
| Y7-2 | Note for PR #62 (Deferred, item 15). |

## Dependencies and boundaries

- **PR #62** edits Y7.1, Y7.2 and Y7.3 (CP-09-03, CP-09-06) and adds an OCTAE Y7.3 support. This
  CP touches none of those fields or supports. It does change the `perkins-v` URL, which Y7.1's
  support shares; the Y7.1 support row itself is left as it is.
- **PR #66.** CP-11-01 fixes `conley-four-keys` attribution (Y7.2's source). Not touched here.
- **CP-12-04** creates the shared module, the `'fit'` override and the "Batch 2 review" section;
  this CP adds rows.
- **CP-12-29** owns Y7's `frameworkBasis` secondary clause.

## Deferred: CP B2-Y7b, after PR #62 merges (notes for PR #62's verifier and judge)

Not part of this CP. Listed so the work is not lost (recommendations section 2, items 15-17).

| # | Code | What waits | Evidence | Decision |
|---|---|---|---|---|
| 15 | Y7.1 | Move the Y7.1 Perkins support to govinfo and re-check its fit (y7-01, SUPPORTED); add Perkins 2302(7)(A) (y7-02, SUPPORTED, "information regarding career awareness exploration opportunities and planning with respect to an individual's occupational") and 681.460(a)(13) (y7-03, SUPPORTED). Keep the wording: narrowing "aspiration" would flip adjudicated **H007** and leave career aspiration with no home (R-09). Log a codebook-defined-element FD only if 2302(7)(A) does not cover interest. | y7-01, y7-02, y7-03 | Y7-2 (settled: keep the wording) |
| 16 | Y7.2 | Resumes and interviews have no source; adjudicated **S063** depends on them. No include change. Send Conley's work side to a verifier (R-18); if nothing verifies, log a codebook-defined-element FD. Perkins 2302(7)(B) and 681.460(a)(14) are partial (college side only). | y7-04, y7-05 PARTIAL | none needed (the FD follows from the verifier's answer) |
| 17 | Y7.3 | Note for PR #62: cite 29 U.S.C. 3272(17), "digital literacy skills" (y7-06, SUPPORTED), as EC-01's backup. The reviewers split on the wording: drop "or daily life" (two reviewers) or write "work or study" (one); this was not among the 2026-10-16 decisions, so PR #62's own Y7.3 CP chooses and the judge checks it. Test the three bare "digital literacy" real texts that go to Y1.4. Do not cite Casey "online safety" (y7-07; blurs Y6.7). | y7-06 | open, for PR #62 |

Verification request to send with B2-Y7b (not now):

```
claim_id: y72-conley-work-side
code: Y7.2
cite_as: Conley, D. T. (2016, April). Four Keys to College and Career Readiness. School Administrator. AASA, The School Superintendents Association.
claimed_component: Key Transition Knowledge & Skills, work side: knowledge and skills for entering the workplace (for example resumes, job applications or interviews).
url: https://www.aasa.org/resources/resource/four-keys-college-career-readiness
```

(The cite_as follows CP-11-01's corrected attribution; use whatever CP-11-01 lands with.)

## Gold impact

- Rows expected to change code: none. No definition, include, exclude, useInstead or rule
  changes; the (b) gate confirms this.
- Design rows the edits rest on: S166 (Y7.4); S151, S218 (Y7.5); S120, H046, H048, S162, S224
  (Y7.7); S187 (stays Y8.1).
- Rows behind the deferred items: H007, S152, S115, S099 (Y7.1); S063, H019 (Y7.2).
- No change in this CP is blocked on a gold adjudication (G11 and G14 do not apply to it; the
  entrepreneurship item left out of Y7.4 would need G11's rows first).
- New proposed rows: none.
- Held-out gold (`youth_outcomes_v3.heldout.gold.csv`) was not read or used.

## Judge result

Not run. Part (a): `npm test`. Part (b): judged in the batched gate with CP-12-04 and CP-12-05.
