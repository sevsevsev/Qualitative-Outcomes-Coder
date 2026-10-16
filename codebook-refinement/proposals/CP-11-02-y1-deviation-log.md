# CP-11-02: Log Y1's existing framework departures

| Field | Value |
|---|---|
| Type | RULES (deviation log: `DEVIATIONS.md` entries and the matching `fidelity`/`deviation` data fields) |
| Codes touched | Y1.10, Y1.13, Y1.15 (`fidelity`, new `deviation` field); Y1.14 (recorded as "no entry", nothing in the data changes). No definition, include, exclude, useInstead, example, source, `basis` or rulesText changes. **Y1.4 is not touched.** |
| Version bump | PATCH, relative to the version current when this is applied (3.1.4 today; if draft PR #62's 3.2.0 candidate merges first, 3.2.x). Ships in the same release as CP-11-01 or after it, never before (see Dependencies). |
| Requirement served | R4 drift |
| Status | draft (Y1 research review pilot, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | new FD-P21 (Y1.10, sector-widening, counted), new FD-P22 (Y1.13, sector-widening, counted), new FD-P23 (Y1.15: merged-components, not counted, recommended; or codebook-defined, counted). Y1.14: none, with the reason recorded. |

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
Rewording is later-cycle item 6 (MINOR) and is not bundled here.

## Change

### Numbering

3.x entries use `FD-P##`. The highest is FD-P20, so the new entries are **FD-P21, FD-P22,
FD-P23**. `FD-###` cannot be used: `deviations.test.ts` treats `FD-\d+` entries as live 2.x
entries and requires them to name a code in `codebooks/original.ts`.

### `codebooks/youthOutcomesV3.data.ts`

| Code | Field | Before | After |
|---|---|---|---|
| Y1.10 | `fidelity` | `"framework"` | `"adapted"` |
| Y1.10 | `deviation` | (absent) | `"FD-P21"`, inserted after `fidelity` as in the other 3.x codes |
| Y1.13 | `fidelity` | `"framework"` | `"adapted"` |
| Y1.13 | `deviation` | (absent) | `"FD-P22"` |
| Y1.15 | `fidelity` | `"framework"` | `"adapted"` (under either option below) |
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
- **Departs:** the source is a review about adolescents (middle grades up); Y1.10's definition and include apply it to young children ("task persistence in young children"). The S220 example (puzzles and new tasks) also reaches past "school assignments", which strict sector widening ("construct and wording unchanged") does not allow; the rewording that would fix that is deferred (see Revisit).
- **Evidence:** S220 (adjudicated design row, Y1.10, also the code's prompt example); registry verifier note on farrington-2012 → Y1.10 (CP-10-01); CP-10-01 removed Head Start ELOF from Y1.10 under Severin's early-childhood rule, which left the young-children clause without a source.
- **Alternative considered:** narrow the definition to "difficult schoolwork or learning tasks despite setbacks, at any age" (MINOR; fidelity review proposal 1; recommendations later-cycle item 6; S220 must be checked with Severin first). Re-citing ELOF Approaches to Learning on Y1.10 (rejected: contradicts the early-childhood rule).
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16), pending Severin.
- **Revisit:** when the item-6 rewording is decided, or when Severin rules on the age rule (recommendations decision C).

### FD-P22 · Y1.13

- **Status:** open
- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** McKinney-Vento, 42 U.S.C. 11432(g)(3)(A)-(B), school of origin and school stability (verified); 42 U.S.C. 675(1)(G), educational stability of children in foster care (verified; added by CP-11-01).
- **Departs:** both school-stability sources are written for one population (homeless youth; children in foster care). Y1.13's definition applies the same construct to students staying enrolled through pregnancy, which neither covers. 34 CFR 106.40(b) (Title IX; claim y1-attainment-06) is PARTIAL only: a nondiscrimination rule, not an enrollment outcome.
- **Evidence:** S051 (adjudicated design row, Y1.13: "Teen parents will stay enrolled in high school through the birth of their child"). The fidelity review said dropping "pregnancy" affects no gold row, having checked S251 (Y8.4); S051 is the row that relies on the word.
- **Alternative considered:** drop "pregnancy" from the definition (MINOR; fidelity review option (b); later-cycle item 6). Note that the generic "staying enrolled in school through disruption" would still carry S051, so dropping the word alone would hide this departure rather than remove it.
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16), pending Severin.
- **Revisit:** if a verified source frames school continuation of pregnant or parenting students as an outcome, or when Severin decides item 6.
```

**FD-P23 · Y1.15: two options for Severin** (recommendations decision B). Both set Y1.15 to
`fidelity: adapted`; they differ in case and in whether the entry counts toward drift.

*Option A, merged-components (recommended; not counted):*

```markdown
### FD-P23 · Y1.15

- **Status:** open
- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** Allensworth & Easton (2005, 2007), On-Track Indicator and course grades (verified) for grades, GPA, course passing, credits and promotion. The "no subject named" clause covers the subject achievement components that coders cannot tell apart when the subject is missing: the ESSA academic achievement indicator, 20 U.S.C. 6311(c)(4)(B)(i), proficiency on the reading or language arts and mathematics assessments (claim y1-fidelity-01, PARTIAL), and WWC Study Review Protocol v5.0, Academic Achievement—Pre-K–12, "broad standardized student assessments across multiple subjects" (claim y1-wwc-01, PARTIAL).
- **Departs:** "academic performance" or test scores with no subject named go to Y1.15 rather than to a subject code (Y1.1-Y1.6), because nothing in the statement says which subject's component is meant. With a subject named, the subject code applies (rule 9).
- **Evidence:** CP-09-09 decision 2 (Severin, 2026-09-27) kept this catch-all and sent only non-performance generics to Y1 domain-only (gold G-D06). Real-run use: about 59 of 95 Y1.15 rows in the district review are generic achievement (model codes, not gold; practitioner review). No adjudicated design row covers the clause yet; see the proposed rows in this CP.
- **Alternative considered:** codebook-defined element (counted; Option B); a new general-achievement code (+1 enum, reverses CP-09-09; deferred to Severin); domain-only Y1 for all generic achievement (reverses CP-09-09 decision 2).
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16), pending Severin.
- **Revisit:** S1.6 asks a merged code's definition to name both components. Y1.15's definition names "test scores with no subject named" but not the subjects; a follow-up wording CP should name them (draft below). Also revisit when WWC v5.1 is verified.
```

*Option B, codebook-defined element (counted):*

```markdown
### FD-P23 · Y1.15

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Allensworth & Easton (2005, 2007), On-Track Indicator and course grades (verified), for grades, GPA, course passing, credits and promotion only.
- **Departs:** the clause "'academic performance' or test scores with no subject named" is the codebook's own routing rule; no verified source has an "unspecified achievement" component (NASEM 2019 Indicator 5 and ESSA 6311(c)(4)(B)(i) always name subjects; claims y1-taxonomy-03 and y1-fidelity-01, both PARTIAL).
- **Evidence:** as Option A (CP-09-09 decision 2; real-run counts; no adjudicated design row yet).
- **Alternative considered:** merged-components (Option A); a new general-achievement code; domain-only Y1.
- **Decided in:** CP-11-02 (Y1 research review, 2026-10-16), pending Severin.
- **Revisit:** if a verified source names general or cross-subject achievement as an outcome.
```

Option B follows the FD-P12 and FD-005 pattern (fidelity adapted, case codebook-defined: a code
anchored on a framework that carries one codebook-defined element). The fidelity review cited
FD-P18 as precedent, but FD-P18 has `fidelity: codebook-defined` because A2.2 has no anchor at
all; Y1.15 keeps a direct anchor for grades and credits, so `adapted` fits better.

**Why Option A is recommended.** It describes the clause as what it does: when the subject is
missing, the code holds the subject achievement components that coders cannot separate.
Severin's CP-09-09 rule is kept, and Y1 stays at 2 counted entries. **The case against it,
stated plainly:**

- The taxonomy reviewer called merged-components "the wrong FD case: unspecified achievement is
  not a framework component". The fidelity reviewer answered by relabelling the merged items as
  the subject test-achievement components themselves, which is the reading used here.
- Both supporting claims are PARTIAL. ESSA (c)(4)(B)(i) "names its subjects by
  cross-reference", and WWC defines the domain as tests over at least two named subjects.
- The merged components belong to the subject codes' sources, not to Y1.15's anchor.
- S1.6's "its definition names both" is not met until the follow-up wording lands.

If Severin finds these decisive, take Option B. It is the more conservative of the two, and it
still keeps Y1 under a third.

Draft wording for the Option A follow-up (not part of this CP; a PATCH or MINOR of its own,
with the two-run gate): Y1.15 definition "… 9th-grade on-track status, and 'academic
performance' or achievement test scores across subjects (reading or language arts, mathematics,
science) when no single subject is named."

### `codebook-refinement/DEVIATIONS.md`: Y1.14 and Y1.2, recorded without an entry

A new dated section after "Anchor re-review, 2026-09-26":

```markdown
## Y1 review, 2026-10-16 (CP-11-02)

The Y1 research review (`research-review/2026-10-16/`) checked whether each Y1 code's own text goes past its sources. Three entries were opened (FD-P21 Y1.10, FD-P22 Y1.13, FD-P23 Y1.15). Two departures were checked and need no entry:

- **Y1.2, home-language maintenance.** Closed by a source, not logged. CP-11-01 cites the Seal of Biliteracy Guidelines (2020), section 1, "English learners should be encouraged to maintain and improve proficiency in their home or heritage language(s)" (claim y1-subject-04, SUPPORTED), and adds it to Y1's Framework Basis.
- **Y1.14, "alternatives that replace them".** FD none. Adjudicated S055 ("restorative circles to repair harm instead of receiving a suspension" → Y1.14) reads as a suspension replaced, i.e. a change in exclusionary discipline, which is what the CRDC discipline elements count. ESSA 20 U.S.C. 7118(5)(F), "designing and implementing a locally-tailored plan to reduce exclusionary discipline practices" (claim y1-attainment-08, PARTIAL: a plan provision, not an outcome), supports reading replacement as reduction. If a statement is ever coded Y1.14 for taking part in a restorative practice with no suspension, referral or expulsion it replaces, open a codebook-defined entry.

Age rule (recommendations decision C, pending Severin): an entry is opened only when a code's own text names a population outside its source. Farrington (middle grades up) and the On-Track Indicator (9th grade) are also applied to younger students in practice; under a stricter reading Y1.9 to Y1.12 and Y1.15 would count too, and Y1 would pass a third (S4.9).
```

The two bullets use "**Label.**" rather than "**Label:**" on purpose. `deviations.test.ts`
splits the log on `### ` headings, so this section is parsed as part of the last FD block, and
a "**Label:**" bullet would be read as one of that entry's fields.

### `codebook-refinement/DEVIATIONS.md`: drift table

Intro sentence, before:

```
Counted in the domain where the code sits, open entries only; merged-components entries
are logged but not counted. Updated after the 2026-09-26 re-review below, and again for CP-10-02 (2026-09-27), which closed FD-P09, FD-P13, FD-P14 and FD-P20.
```

After (append one clause):

```
Counted in the domain where the code sits, open entries only; merged-components entries
are logged but not counted. Updated after the 2026-09-26 re-review below, again for CP-10-02 (2026-09-27), which closed FD-P09, FD-P13, FD-P14 and FD-P20, and for CP-11-02 (2026-10-16), which opened FD-P21, FD-P22 and FD-P23 in Y1.
```

Y1 row, before:

```
| Y1 Academic | 18 | 0 | 0% | no |
```

After, Option A (recommended):

```
| Y1 Academic | 18 | 2 (Y1.10, Y1.13) | 11% | no |
```

After, Option B:

```
| Y1 Academic | 18 | 3 (Y1.10, Y1.13, Y1.15) | 17% | no |
```

Worst case, outside this CP: +1 (Y1.2) if V1 in CP-11-01 fails and the Seal cannot be cited.
That gives 3 of 18 (17%) with Option A, or 4 of 18 (22%) with Option B. Both stay under the
S4.9 line.

### `rulesText`, domain `hint`, `CONFUSIONS.md`, registry

Unchanged.

## Dependencies

- **CP-11-01 first, or in the same release.** FD-P22 names 42 U.S.C. 675(1)(G) as an anchor,
  and the "no entry" for Y1.2 depends on the Seal citation. If CP-11-01 is rejected or V1
  fails, then (a) FD-P22's anchor drops 675(1)(G) and its Departs line adds "foster placement
  changes" (homelessness law only), and (b) Y1.2 needs its own entry (FD-P24, adapted,
  codebook-defined, for the home-language half; evidence S143).
- **PR #62.** This CP touches no Y1.4 field. Check at apply time that #62 does not change the
  fidelity fields of Y1.10, Y1.13 or Y1.15, or the drift table.

## Sources

None new. Every source named in the entries is already in the registry or in
`research-review/2026-10-16/verification-table.md` with the verdict shown:

| Registry ID or claim | Status | Component relied on |
|---|---|---|
| farrington-2012 | verified (direct) | Academic Perseverance (FD-P21 anchor) |
| mckinney-vento | verified (direct) | school stability, 11432(g)(3)(A)-(B) (FD-P22 anchor) |
| usc-42-675-1g-educational-stability (CP-11-01) | verified, y1-attainment-05 SUPPORTED | foster care educational stability (FD-P22 anchor) |
| y1-attainment-06 | PARTIAL | Title IX 106.40(b), named in FD-P22 as partial only |
| allensworth-easton-2005, -2007 | verified (direct) | on-track, credits, grades (FD-P23 anchor) |
| y1-fidelity-01 | PARTIAL | ESSA 6311(c)(4)(B)(i) academic achievement indicator: "as measured by proficiency on the annual assessments required under subsection (b)(2)(B)(v)(I)" |
| y1-wwc-01 | PARTIAL | WWC SRP v5.0 Academic Achievement—Pre-K–12: "Academic measures in pre-k through Grade 12 based on broad standardized student assessments across multiple subjects, including at least two of literacy, mathematics, science, and social studies." |
| y1-taxonomy-03 | PARTIAL | NASEM 2019 Indicator 5 (named in Option B as not covering the clause) |
| y1-attainment-08 | PARTIAL | ESSA 7118(5)(F) (Y1.14 note) |

PARTIAL claims appear only as rationale inside the deviation log. None becomes a registry
support or a source line here.

## Verification requests

**V2 (only if Option A is chosen). WWC Study Review Protocol v5.1, Academic Achievement
domain.** y1-wwc-01 was verified on v5.0, which the verifier says v5.1 replaced (Dec 2024,
revised Nov 2025). Send to `codebook-citation-verifier`:

```
claim_id: y1-wwc-01b
code: Y1.15
cite_as: What Works Clearinghouse (2024, rev. 2025). Study Review Protocol, Version 5.1. National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education.
claimed_component: Outcome domain 'Academic Achievement—PK–12': academic measures based on broad standardized assessments across multiple subjects.
url: https://ies.ed.gov/ncee/wwc/Docs/ReferenceResources/WWC-SRP51-508.pdf
```

Until V2 returns, FD-P23 cites v5.0 as the verified version.

## Gold impact

- Rows expected to change code: none. Nothing in the prompt changes, so no scoring run is
  needed.
- Design rows the entries rest on: S220 (FD-P21), S051 and S096 (FD-P22), S056 and S109
  (Y1.15's framework part), S055 (Y1.14 note), S143 (Y1.2 note).
- **Proposed new gold rows** (for Severin to adjudicate; `status=proposed`, no code filled in by
  an agent beyond a suggestion). No adjudicated design row covers Y1.15's "no subject named"
  clause, which S1.6 expects for a codebook-defined element and which a future CF entry needs
  (S3.1). Candidate texts from the district real run (practitioner review): "Improved academic
  achievement" (suggested Y1.15), "Students will demonstrate academic success" (suggested Y1.15),
  "Improved academic skills" (suggested Y1 domain-only; the blind coders split, so this is a
  boundary row). IDs are to be assigned when they are added.
- Held-out gold was not read or used.

## Judge result

Not run. There is no prompt change to score. `npm test` (deviations.test.ts) is the check: it
fails if a `fidelity` field and its FD entry disagree.
