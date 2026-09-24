# CP-03-01: Correct the v2 draft's source lines from the cycle-03 verification

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | outcome_type; Y4, Y5, Y7, Y8, Y10, Y11, Y12, F1, F3, A1, A2 source lines; Y8.4, Y7.10, F1.6, F1.7, A1.3, A2.3, Y10.1, Y12.4 (citation text only) |
| Version bump | none in production; v2 draft rc1 → rc2 (the draft is not in code) |
| Requirement served | R1 frameworks |
| Status | draft: awaiting Severin's approval |
| Enum cost | +0 |

## Problem

In cycle 03 (2026-09-24), independent verifiers checked every source the v2 draft
cites from `v2/v2-candidate-sources.json`, plus new candidates for the codes that had
no source. They checked 62 claims. The draft's source lines are now out of date in
four ways:

- **They cite sources that failed.** One is the misattributed "Lerner 2007" handout.
  Three others don't fit the code they are listed for:
  - SHAPE PE Standard 1 → Y10.1;
  - Positive Youth Justice → Y12.4;
  - Digital Equity Act "digital literacy" → A2.3.
- **They carry stale status labels.** Many sources are still marked `located` but are
  now verified.
- **They omit the new sources** for Y8.4, F1.6, F1.7, A1.3 and A2.3.
- **Some attributions are imprecise:**
  - UW–Madison Division of Extension;
  - NGSS Lead States;
  - Keyes, where the MHC-SF and the 2002 article are cited as one work;
  - CJCA, which lacks its authors.

The evidence is in `v2/source-verification-2026-09-24.md` and `.json`.

Severin's decisions on 2026-09-24 that this CP reflects:

- A1.3 uses no early-childhood-specific sources.
- F1.7 keeps MIECHV.

## Change

The edits apply to `v2/codebook-v2-draft.md` only. Definitions, examples, rules and
the code list do not change.

### 1. Status legend (lines 17–21)

Add a row:

```
| partial | Fetched and supports the code, but only part of it, or only through a secondary copy |
```

### 2. Outcome types (line 32)

- **Before:** `Outcome types, based on the University of Wisconsin–Extension logic model`
- **After:** `Outcome types, based on the University of Wisconsin–Madison Division of Extension (2020) Program Action Logic Model`

### 3. Y4 sources

**Before:**

```
**Sources:** Search Institute 40 Developmental Assets, Positive Identity (verified);
Lerner, Five Cs, "Confidence" (located); Nagaoka et al. (2015), Foundations for
Young Adult Success, agency and integrated identity (located); Learning for Justice
Social Justice Standards, Identity (verified); Muhammad, Pursuit 1 Identity
(verified); Shogren, Wehmeyer et al., Causal Agency Theory / self-determination
(located); Carlone & Johnson (2007), science identity (located).
```

**After:**

```
**Sources:** Search Institute 40 Developmental Assets, Positive Identity (verified);
Lerner et al. (2005), Five Cs, "Confidence" (partial); Nagaoka et al. (2015),
Foundations for Young Adult Success, agency and integrated identity (partial);
Learning for Justice Social Justice Standards, Identity (verified); Muhammad,
Pursuit 1 Identity (verified); Shogren et al. (2015), Causal Agency Theory (partial);
Carlone & Johnson (2007), science identity (partial).
```

### 4. Y5 sources

**Before:**

```
**Sources:** Search Institute, Positive Values (verified); Lerner, Five Cs
(Character, Caring, Contribution) (located); NCSS (2013), C3 Framework (located);
Muhammad, Pursuit 4 Criticality (verified); ISTE Standards for Students (2016),
Digital Citizen (verified); NAAEE (2019), K–12 Environmental Education Guidelines,
Personal and Civic Responsibility strand (located).
```

**After:**

```
**Sources:** Search Institute, Positive Values (verified); Lerner et al. (2005), Five
Cs (Character, Caring, Contribution) (partial); NCSS (2013), C3 Framework, Dimension
2 Civics (verified) and Dimension 4 Taking Informed Action (partial); Muhammad,
Pursuit 4 Criticality (verified); ISTE Standards for Students (2016), Digital Citizen
(verified); NAAEE (2019), K–12 Environmental Education Guidelines, Personal and Civic
Responsibility strand (verified).
```

### 5. Y7 sources

Make these changes to the list:

- Change `Common Core anchor standards for writing (located)` to `(verified)`.
- Change `NGSS, three dimensions (located)` to
  `NGSS Lead States (2013), three dimensions (verified)`.
- Change `NCSS C3 Framework (located)` to `(verified)`.
- Change `NAMLE media literacy definition (located)` to `(verified)`.

### 6. Y8 sources

- **Before:** `IDEA Part B Indicator 14 (located). Y8.4 has no source yet (CRDC lead).`
- **After:** `IDEA Part B Indicator 14 (verified); U.S. ED Office for Civil Rights, CRDC 2021-22 discipline data elements (verified); Irvin et al. (2004), office discipline referrals (verified).`

### 7. Y9 sources

- **Change:** add `IDEA Part B Indicator 14, Measure C (partial)` for Y9.5.

### 8. Y10 sources

- **Change:** make both SHAPE PE edits:
  - replace `SHAPE America (2024), National PE Standards (verified)` with
    `SHAPE America (2024), National PE Standards: Standard 1 for Y10.2 (verified),
    Standard 4 for Y10.1 (partial)`;
  - change `Healthy People 2030 SH-04, AH-01, AHS-01 (located)` to `(verified)`.
- **Change:** change `National Sex Education Standards, 2nd ed. (located)` to
  `Future of Sex Education Initiative (2020), National Sex Education Standards, 2nd
  ed. (verified)`.

### 9. Y11 sources

- **Before:** `Keyes (2002), Mental Health Continuum (located)`
- **After:** `Keyes (2002), Mental Health Continuum, and Keyes's Mental Health Continuum–Short Form (MHC-SF), cited separately (partial)`

### 10. Y12 sources

- **Before:** `CJCA (2009) (located); Butts, Bazemore & Meroe (2010), Positive Youth Justice (located).`
- **After:** `Harris, Lockwood & Mengers (2009), Defining and Measuring Recidivism, CJCA (verified).`

This removes Positive Youth Justice, which failed the fit check for Y12.4.

### 11. F1 sources and rows

- **Change:** add these sources to the F1 line:
  - `CSSP Strengthening Families, Concrete Support in Times of Need (verified)`;
  - `IDEA section 671(b), Parent Training and Information Centers (verified)`;
  - `Mapp & Kuttner (2013), Dual Capacity-Building Framework (verified)`;
  - `HRSA MIECHV performance measures (verified)`;
  - `Healthy People 2030 MICH-14, MICH-15 (verified)`.
- **F1.7 row:**
  - **Before:** `Source still to be verified (Healthy People 2030 Maternal, Infant, and Child Health objectives are the lead).`
  - **After:** delete that sentence.

### 12. F3 sources

- **Change:** change `U.S. ED & DOJ (2015), Dear Colleague Letter on English Learner
  Students and LEP Parents (located)` to `(verified, for F3.3)`.
- **Note:** a verifier saw reports that ED rescinded the letter in August 2025.
  Confirm before rc2. If it was rescinded, keep the citation as the historical source
  and add a note.

### 13. A1 sources and rows

- **Change:** add these sources to the A1 line:
  - `U.S. Surgeon General (2022), Framework for Workplace Mental Health & Well-Being (verified)`;
  - `NIOSH (2021), Worker Well-Being Questionnaire (verified)`;
  - `BLS, JOLTS separations and quits definitions (verified)`.
- **A1.3 row:**
  - **Before:** `Staff retention and turnover; staff well-being. This is a codebook extension.`
  - **After:** `Staff retention and turnover; staff well-being.`

### 14. A2 sources

**Before:**

```
**Sources:** Weikart Center Youth PQA (located); Weiss, Little & Bouffard (2005)
(located); Urban Institute Candidate Outcome Indicators (located); Digital Equity Act
(verified).
```

**After:**

```
**Sources:** Weikart Center Youth PQA (verified); Weiss, Little & Bouffard (2005)
(located); Urban Institute Candidate Outcome Indicators, youth satisfaction (partial);
FCC Emergency Connectivity Fund, 47 CFR 54 Subpart Q (verified); ESSA section
4109(a)(2) (verified); Digital Equity Act, 47 U.S.C. 1723(c)(1)(B) (verified).
```

### 15. Registry

The per-source verdicts are already recorded:

- `v2/v2-candidate-sources.json`, in each source's `blind_verification`;
- `sources/original.sources.json`, where `cjca-2009` is now `verified`.

No further registry change is needed when this CP is applied.

## Sources

The full per-claim table is in `v2/source-verification-2026-09-24.md`. Every source
this CP adds or relabels has a blind verdict and an excerpt recorded there.

## Verification requests

- **Y4.6 and Y4.7:** confirm against the publishers' PDFs (Shogren et al. 2015;
  Carlone & Johnson 2007). Automated fetches are refused, so this needs library
  access.
- **ED/DOJ (2015) letter:** confirm whether it was rescinded.

## Gold impact

None. Only citation text changes. No definition, example or rule changes, so no gold
row's expected code moves.

## Judge result

Not run. There is no behavior to judge, because the draft is not in code. It will be
covered by the phase 2 held-out test.
