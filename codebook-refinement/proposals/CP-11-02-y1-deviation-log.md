# CP-11-02: Log Y1's existing framework departures

**In plain words.** Three Academic codes already reach a little past the sources they cite, and
the deviation log (the file that records every place a code departs from its source framework)
does not say so yet; this change records them without changing any code's wording or how
anything is coded. Academic Perseverance (Y1.10) applies a source written about teenagers to
young children, and Attendance & School Stability (Y1.13) applies laws written for homeless and
foster youth to students staying in school through pregnancy; both count toward the Academic
domain's departure total. Grades, Credits & On-Track Status (Y1.15) also holds "academic
achievement" when no subject is named; it is logged as a merger of the subject test components,
which does not count, because coders cannot tell from such a statement which subject is meant.
After this change the Academic domain has 2 counted departures out of 18 codes, well under the
one-third line that would trigger a review of its anchor, and the whole change can land now
because nothing here reaches the coding prompt.

| Field | Value |
|---|---|
| Type | RULES (deviation log: `DEVIATIONS.md` entries and the matching `fidelity`/`deviation` data fields) |
| Codes touched | Y1.10, Y1.13, Y1.15 (`fidelity`, new `deviation` field); Y1.14 and Y1.2 (recorded as "no entry", nothing in the data changes). No definition, include, exclude, useInstead, example, source, `basis` or rulesText changes. **Y1.4 is not touched.** |
| Version bump | PATCH when applied (3.1.4 today; one PATCH later if another release lands first). Ships in the same release as CP-11-01 part (a) or after it, never before (see Dependencies). |
| Requirement served | R4 drift |
| Status | Status: draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Reaches the coding prompt? | **No.** Every change is in `fidelity`, `deviation` and `DEVIATIONS.md`, none of which `definitionsText` prints. Lands now (G10); `npm test` is the gate. |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new FD-P21 (provisional id; Y1.10, sector-widening, counted), new FD-P22 (provisional id; Y1.13, sector-widening, counted), new FD-P23 (provisional id; Y1.15, merged-components, not counted; passes the G6 strict test, see below). Y1.14 and Y1.2: none, with the reason recorded. Y1 drift 0/18 → 2/18 (11%). |

## Decisions applied (Severin, 2026-10-16)

- **C / G1, age and sector rule.** An FD is needed only when a code's own text names a
  population (by age or by sector) outside its source. Y1.10 names "young children" and Y1.13
  names pregnancy, so both get counted sector-widening entries. Y1.9 to Y1.12 and Y1.15 rest on
  sources written for older students (Farrington: middle grades up; the On-Track Indicator: 9th
  grade) but their text names no population, so they need no entry for being used with younger
  students.
- **B / Y1-2, Y1.15.** Logged as merged-components (not counted), with the G6 strict test
  applied and stated below.
- **G6.** Merged-components is allowed only when coders cannot tell the components apart. The
  test is applied to FD-P23 here; the other merged-components entries are tested together in
  CP-12-03, CP-12-07 and the FD-P16 note for PR #62.
- **G3.** A PARTIAL fit avoids an FD only when the source is broader than the code. It is
  applied to Y1.13 (Title IX 106.40(b), PARTIAL and narrower than the code: the FD stays) and to
  Y1.14 (below).
- **G4.** SUPPORTED statutory duties count as partial-fit support with no FD: McKinney-Vento
  and 42 U.S.C. 675(1)(G) cover Y1.13's homelessness and foster-care parts, so FD-P22 is about
  pregnancy only.
- **D / G10.** This CP reaches no prompt text, so it lands now.

## Problem

`DEVIATIONS.md` shows Y1 at 0 of 18 counted deviations, and every Y1 code has
`fidelity: "framework"`. The Y1 research review found that five Y1 codes already go past their
cited sources in their own text, with no FD entry (recommendations "Act now" item 2; fidelity
review, "Headline" and "Drift recount"):

| Code | What the code's own text claims | What the cited source covers |
|---|---|---|
| Y1.2 | "maintenance and development of a home language alongside English" | WIDA and ESSA 6311(c)(4)(B)(iv): English proficiency only. **Closed by CP-11-01** (Seal of Biliteracy Guidelines). |
| Y1.10 | "including task persistence in young children"; include "early-childhood task persistence"; example S220 (puzzles) | Farrington et al. (2012), Academic Perseverance: "a student's tendency to complete school assignments". Registry verifier note (CP-10-01): "The source is about adolescents, so the code's 'task persistence in young children' goes beyond it." |
| Y1.13 | "staying enrolled in school through disruption (homelessness, foster placement changes, pregnancy)" | McKinney-Vento (homeless youth) and, after CP-11-01, 42 U.S.C. 675(1)(G) (children in foster care). Nothing verified frames staying enrolled through pregnancy as an outcome. |
| Y1.14 | "and alternatives that replace them"; include "restorative alternatives to suspension" | CRDC discipline elements and Irvin et al. (2004) count suspensions, expulsions and referrals. |
| Y1.15 | "'academic performance' or test scores with no subject named" | Allensworth & Easton (2005, 2007): credits, course failures, grades, GPA. Neither covers test scores or unspecified achievement. |

S1.6 forbids a code that departs from its anchor without an FD entry, and the `fidelity` field
must say so (`deviations.test.ts`). This CP records the departures; it does not reword any code.
Rewording is pilot later item 6 (MINOR) and is not bundled here.

## What lands when (G10)

| Part | What | Reaches the prompt? | When |
|---|---|---|---|
| (a) | `fidelity` and `deviation` fields for Y1.10, Y1.13, Y1.15 | no | now |
| (a) | `DEVIATIONS.md`: FD-P21, FD-P22, FD-P23; the dated Y1 section; drift table | no | now, with or after CP-11-01 part (a) |
| (a) | `DEVIATIONS.md`: the Y1.2 "no entry" bullet | no | with the Seal of Biliteracy registry entry in CP-11-01 (after its V1) |
| (b) | none | — | — |

## Change (all part (a): does not reach the prompt)

### Numbering

3.x entries use `FD-P##`. The highest live entry is FD-P20, so the new entries are **FD-P21,
FD-P22, FD-P23** (provisional: renumbered when applied, since the CP-12 drafts also take FD-P
ids). `FD-###` cannot be used: `deviations.test.ts` treats `FD-\d+` entries as live 2.x entries
and requires them to name a code in `codebooks/original.ts`.

### `codebooks/youthOutcomesV3.data.ts`

| Code | Field | Before | After |
|---|---|---|---|
| Y1.10 | `fidelity` | `"framework"` | `"adapted"` |
| Y1.10 | `deviation` | (absent) | `"FD-P21"`, inserted after `fidelity` as in the other 3.x codes |
| Y1.13 | `fidelity` | `"framework"` | `"adapted"` |
| Y1.13 | `deviation` | (absent) | `"FD-P22"` |
| Y1.15 | `fidelity` | `"framework"` | `"adapted"` (as for the other merged-components entries, FD-P02 to FD-P08) |
| Y1.15 | `deviation` | (absent) | `"FD-P23"` |

Neither field reaches the coding prompt (`definitionsText` prints definition, include, exclude,
use instead, source and example only). The public explorer shows the new fidelity on the three
code cards.

Registry: no change. All three codes keep verified supports, so none enters
`codebook_extensions`, and the `deviations.test.ts` check (each code is supported or an
extension, never both) still holds.

### `codebook-refinement/DEVIATIONS.md`: new entries

Inserted after FD-P20, before the drift-count section. Field labels follow the format the test
parses (`- **Label:** value`).

```markdown
### FD-P21 · Y1.10

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Farrington et al. (2012), Academic Perseverance (verified): "a student's tendency to complete school assignments in a timely and thorough manner, to the best of one's ability, despite distractions, obstacles, or level of challenge."
- **Departs:** the source is a review about adolescents (middle grades up); Y1.10's definition and include name young children ("task persistence in young children"), a population outside the source, so an entry is needed under the age and sector rule (decision C / G1, 2026-10-16). The S220 example (puzzles and new tasks) also reaches past "school assignments", which strict sector widening ("construct and wording unchanged") does not allow; the rewording that would fix that is deferred (see Revisit).
- **Evidence:** S220 (adjudicated design row, Y1.10, also the code's prompt example); registry verifier note on farrington-2012 → Y1.10 (CP-10-01); CP-10-01 removed Head Start ELOF from Y1.10 under Severin's early-childhood rule, which left the young-children clause without a source.
- **Alternative considered:** narrow the definition to "difficult schoolwork or learning tasks despite setbacks, at any age" (MINOR; fidelity review proposal 1; pilot later item 6; S220 must be checked with Severin first). Re-citing ELOF Approaches to Learning on Y1.10 (rejected: contradicts the early-childhood rule, reaffirmed by decision Y1-1).
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16); decision C / G1 (Severin, 2026-10-16).
- **Revisit:** when the item-6 rewording is decided.

### FD-P22 · Y1.13

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** McKinney-Vento, 42 U.S.C. 11432(g)(3)(A)-(B), school of origin and school stability (verified); 42 U.S.C. 675(1)(G), educational stability of children in foster care (verified; added by CP-11-01). Both are statutory duties, which count as support with no FD for the homelessness and foster-care parts (decision G4).
- **Departs:** Y1.13's definition names a third population, students staying enrolled through pregnancy, which neither source covers (decision C / G1: the code's own text names a population outside its source). 34 CFR 106.40(b) (Title IX; claim y1-attainment-06) is PARTIAL and narrower than the code (a nondiscrimination rule, not an enrollment outcome), so under decision G3 it does not avoid this entry.
- **Evidence:** S051 (adjudicated design row, Y1.13: "Teen parents will stay enrolled in high school through the birth of their child"). The fidelity review said dropping "pregnancy" affects no gold row, having checked S251 (Y8.4); S051 is the row that relies on the word.
- **Alternative considered:** drop "pregnancy" from the definition (MINOR; the fidelity review's second proposal; pilot later item 6). The generic "staying enrolled in school through disruption" would still carry S051, so dropping the word alone would hide this departure rather than remove it.
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16); decisions C / G1, G3 and G4 (Severin, 2026-10-16).
- **Revisit:** if a verified source frames school continuation of pregnant or parenting students as an outcome, or when item 6 is decided.

### FD-P23 · Y1.15

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** Allensworth & Easton (2005, 2007), On-Track Indicator and course grades (verified), for grades, GPA, course passing, credits and promotion. The "no subject named" clause merges the subject achievement components of Y1's anchor statute that coders cannot tell apart when the subject is missing: the ESSA academic achievement indicator, 20 U.S.C. 6311(c)(4)(B)(i), proficiency on the reading or language arts and mathematics assessments (claim y1-fidelity-01, PARTIAL: names its subjects by cross-reference), corroborated by WWC Study Review Protocol v5.0, Academic Achievement—Pre-K–12, "broad standardized student assessments across multiple subjects" (claim y1-wwc-01, PARTIAL).
- **Departs:** "academic performance" or test scores with no subject named go to Y1.15 rather than to a subject code (Y1.1-Y1.6), because nothing in the statement says which subject's component is meant. With a subject named, the subject code applies (rule 9).
- **Strict test (decision G6):** passes, for the clause only. A statement in the clause names no subject by definition ("improved academic achievement", "better test scores"), so nothing in its text lets a coder choose reading over mathematics: the components cannot be told apart. Once a subject is named they can be, and the entry does not cover those statements (subject code, rule 9). "Academic performance" may also mean grades, which Y1.15 holds directly, so that ambiguity stays inside the code.
- **Evidence:** CP-09-09 decision 2 (Severin, 2026-09-27) kept this catch-all and sent only non-performance generics to Y1 domain-only (gold G-D06). Real-run use: about 59 of 95 Y1.15 rows in the district review are generic achievement (model codes, not gold; practitioner review). No adjudicated design row covers the clause yet; rows are proposed in CP-11-02.
- **Alternative considered:** codebook-defined element (counted; not chosen, decision B / Y1-2); a new general-achievement code (+1 enum, reverses CP-09-09; rejected in the pilot); domain-only Y1 for all generic achievement (reverses CP-09-09 decision 2).
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16); decisions B / Y1-2 and G6 (Severin, 2026-10-16).
- **Revisit:** S1.6 asks a merged code's definition to name both components. Y1.15's definition names "test scores with no subject named" but not the subjects; a follow-up wording CP names them (it reaches the prompt, so it goes through a two-run gate). Also revisit when WWC v5.1 is verified (V2).
```

**The G6 test, stated plainly.** The components pass because the statement lacks the
information, not because the components are alike. The taxonomy reviewer's objection
("unspecified achievement is not a framework component") is answered by naming what is merged:
the subject test components of ESSA's achievement indicator, not "unspecified achievement" as
a component of its own. What is still weak, and stays visible in the entry: both supporting
claims are PARTIAL (ESSA names its subjects by cross-reference; WWC defines its domain as tests
over at least two named subjects), and S1.6's "its definition names both" is not met until the
follow-up wording lands. Under G3 those PARTIAL claims are not used to avoid an entry; they
anchor a logged one.

Draft wording for the follow-up (not part of this CP; its own PATCH or MINOR, with the two-run
gate): Y1.15 definition "… 9th-grade on-track status, and 'academic performance' or achievement
test scores across subjects (reading or language arts, mathematics, science) when no single
subject is named."

### `codebook-refinement/DEVIATIONS.md`: dated Y1 section (Y1.14 and Y1.2 without an entry)

A new dated section after "Anchor re-review, 2026-09-26":

```markdown
## Y1 review, 2026-10-16 (CP-11-02)

The Y1 research review (`research-review/2026-10-16/`) checked whether each Y1 code's own text goes past its sources. Three entries were opened (FD-P21 Y1.10, FD-P22 Y1.13, FD-P23 Y1.15). Two departures were checked and need no entry:

- **Y1.2, home-language maintenance.** Closed by a source, not logged. CP-11-01 cites the Seal of Biliteracy Guidelines (2020), section 1, "English learners should be encouraged to maintain and improve proficiency in their home or heritage language(s)" (claim y1-subject-04, SUPPORTED); CP-12-29 names it in Y1's Framework Basis as a secondary framework.
- **Y1.14, "alternatives that replace them".** FD none. Adjudicated S055 ("restorative circles to repair harm instead of receiving a suspension" → Y1.14) reads as a suspension replaced, i.e. a change in exclusionary discipline, which is what the CRDC discipline elements count directly. Read that way the code is no broader than its direct source, so no PARTIAL fit is needed to avoid an entry (decision G3). ESSA 20 U.S.C. 7118(5)(F), "designing and implementing a locally-tailored plan to reduce exclusionary discipline practices" (claim y1-attainment-08, PARTIAL: a plan provision, not an outcome), is context only. If a statement is ever coded Y1.14 for taking part in a restorative practice with no suspension, referral or expulsion it replaces, open a codebook-defined entry.

Age and sector rule (decision C / G1, Severin, 2026-10-16): an entry is opened only when a code's own text names a population, by age or by sector, outside its source. Farrington (middle grades up) and the On-Track Indicator (9th grade) are also applied to younger students in practice, but Y1.9 to Y1.12 and Y1.15 name no population, so they need no entry for that.
```

The two bullets use "**Label.**" rather than "**Label:**" on purpose. `deviations.test.ts`
splits the log on `### ` headings, so this section is parsed as part of the last FD block, and
a "**Label:**" bullet would be read as one of that entry's fields. The Y1.2 bullet is added when
the Seal registry entry is (CP-11-01, after V1); until then the section lists Y1.14 only and its
intro says "One departure was checked".

### `codebook-refinement/DEVIATIONS.md`: drift table

Intro sentence, before:

```
Counted in the domain where the code sits, open entries only; merged-components entries
are logged but not counted. Updated after the 2026-09-26 re-review below, and again for CP-10-02 (2026-09-27), which closed FD-P09, FD-P13, FD-P14 and FD-P20.
```

After (append one clause):

```
Counted in the domain where the code sits, open entries only; merged-components entries
are logged but not counted. Updated after the 2026-09-26 re-review below, again for CP-10-02 (2026-09-27), which closed FD-P09, FD-P13, FD-P14 and FD-P20, and for CP-11-02 (2026-10-16), which opened FD-P21, FD-P22 and FD-P23 (merged-components, not counted) in Y1.
```

Y1 row, before:

```
| Y1 Academic | 18 | 0 | 0% | no |
```

After:

```
| Y1 Academic | 18 | 2 (Y1.10, Y1.13) | 11% | no |
```

If whichever CP-12 drafts land first also edit this intro sentence, the second one appends its
clause to the first's text.

### `rulesText`, domain `hint`, `CONFUSIONS.md`, registry

Unchanged.

## Dependencies

- **CP-11-01 part (a) first, or in the same release.** FD-P22 names 42 U.S.C. 675(1)(G) as an
  anchor, and that registry entry comes from CP-11-01. The Y1.2 bullet waits for the Seal
  registry entry (CP-11-01, V1). Open item, not a decision: if V1 shows the Seal document cannot
  be cited at all, Y1.2 needs its own entry (adapted, codebook-defined, evidence S143), which
  would make Y1 3 of 18 (17%), still under the line.
- **PR #62.** This CP touches no Y1.4 field. Check at apply time that #62 does not change the
  fidelity fields of Y1.10, Y1.13 or Y1.15, or the drift table.

## Sources

None new. Every source named in the entries is already in the registry, added by CP-11-01, or
in `research-review/2026-10-16/verification-table.md` with the verdict shown:

| Registry ID or claim | Status | Component relied on |
|---|---|---|
| farrington-2012 | verified (direct) | Academic Perseverance (FD-P21 anchor) |
| mckinney-vento | verified (direct) | school stability, 11432(g)(3)(A)-(B) (FD-P22 anchor) |
| usc-42-675-1g-educational-stability (CP-11-01) | verified, y1-attainment-05 SUPPORTED | foster care educational stability (FD-P22 anchor) |
| y1-attainment-06 | PARTIAL | Title IX 106.40(b), named in FD-P22 as partial only |
| allensworth-easton-2005, -2007 | verified (direct) | on-track, credits, grades (FD-P23 anchor) |
| y1-fidelity-01 | PARTIAL | ESSA 6311(c)(4)(B)(i) academic achievement indicator: "as measured by proficiency on the annual assessments required under subsection (b)(2)(B)(v)(I)" |
| y1-wwc-01 | PARTIAL | WWC SRP v5.0 Academic Achievement—Pre-K–12: "Academic measures in pre-k through Grade 12 based on broad standardized student assessments across multiple subjects, including at least two of literacy, mathematics, science, and social studies." |
| y1-attainment-08 | PARTIAL | ESSA 7118(5)(F) (Y1.14 note, context only) |

PARTIAL claims appear only as rationale inside the deviation log. None becomes a registry
support or a source line here.

## Verification requests

**V2. WWC Study Review Protocol v5.1, Academic Achievement domain.** y1-wwc-01 was verified on
v5.0, which the verifier says v5.1 replaced (Dec 2024, revised Nov 2025). Send to
`codebook-citation-verifier`:

```
claim_id: y1-wwc-01b
code: Y1.15
cite_as: What Works Clearinghouse (2024, rev. 2025). Study Review Protocol, Version 5.1. National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education.
claimed_component: Outcome domain 'Academic Achievement—PK–12': academic measures based on broad standardized assessments across multiple subjects.
url: https://ies.ed.gov/ncee/wwc/Docs/ReferenceResources/WWC-SRP51-508.pdf
```

Until V2 returns, FD-P23 cites v5.0 as the verified version. V2 does not block this CP: WWC is
corroboration, and the merged components are ESSA's.

## Gold impact

- Rows expected to change code: none. Nothing in the prompt changes, so no scoring run is
  needed.
- Design rows the entries rest on: S220 (FD-P21), S051 and S096 (FD-P22), S056 and S109
  (Y1.15's framework part), S055 (Y1.14 note), S143 (Y1.2 note).
- **Proposed new gold rows** (for Severin to adjudicate; `status=proposed`, suggestions only;
  IDs assigned when added; no gold file is written by this CP). No adjudicated design row covers
  Y1.15's "no subject named" clause; the follow-up wording CP and any 3.x CF entry (S3.1) need
  them. They do not block this CP, which ships no hint or widening (G11 does not apply).
  Candidate texts from the district real run (practitioner review):
  - "Improved academic achievement" (suggested Y1.15)
  - "Students will demonstrate academic success" (suggested Y1.15)
  - "Improved academic skills" (suggested Y1 domain-only, no specific result, `codebook_gap` 0;
    the blind coders split, so this is a boundary row)
- Held-out gold was not read or used.

## Judge result

Not run. There is no prompt change to score. `npm test` (deviations.test.ts) is the check: it
fails if a `fidelity` field and its FD entry disagree.
