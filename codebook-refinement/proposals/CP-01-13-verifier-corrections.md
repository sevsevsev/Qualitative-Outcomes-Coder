# CP-01-13: Citation corrections from the independent verification pass (cycle-01b)

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | 8.2, 8.3, 8.5, 8.6, 1.1, 1.3, 1.4, 1.6, 12.7 (citation text only; no definitions change) |
| Version bump | PATCH |
| Requirement served | R1 |
| Status | draft, ready to test (except item 2, which needs a new source) |
| Enum cost | +0 |

## Problem

The cycle-01b verifier checked 32 claims across 19 previously unverified sources.
The verifier worked blind to the proposer's reasoning. Results:

| Verdict | Count |
|---|---|
| SUPPORTED | 23 |
| PARTIAL | 8 |
| UNSUPPORTED | 1 |
| Fabricated | 0 |

The items below are the corrections that followed. The full evidence is in
`sources/original.sources.json` (per-code `verdict`, `excerpt`, `url_checked`).

## Changes

1. **1.2 / 1.6: tighten the ESSA citation.**
   - Change `ESSA Academic Achievement & Progress Indicators` (Domain 1 header) to
     `ESSA (2015), 20 U.S.C. 6311(c)(4)(B): academic achievement indicator (math, reading/language arts) and four-year adjusted cohort graduation rate`.
   - ESSA supports only the *graduation* part of 1.6. The rest of 1.6 stays
     covered by Allensworth & Easton, and the discipline part is still open under
     CP-01-09.
2. **1.3 has no source.** The verifier found ESSA's achievement indicator covers
   only math and reading/language arts, so it does not support 1.3 (other
   subjects). 1.3 moves to `codebook_extensions` until a source is found.
   - Candidate leads, **not yet verified**: NGSS (science), the C3 Framework
     (social studies), and the National Core Arts Standards, which are already
     verified for 2.4/2.5 and could anchor arts *knowledge*.
   - A subject-specific set of sources may be the honest answer, since 1.3 is a
     catch-all.
3. **1.4: WIDA 2020 no longer uses "four language domains".** Change the 1.4 source
   line to:
   `WIDA English Language Development Standards Framework, 2020 Edition (interpretive and expressive modes of communication)`.
   The definition's "listening, speaking, reading, writing" is still accurate as
   description, but should not be attributed to the 2020 edition.
4. **1.1: reword the source.** Change it to:
   `Report of the National Reading Panel: Teaching Children to Read (NICHD, 2000): alphabetics (phonemic awareness, phonics), fluency, comprehension (vocabulary, text comprehension)`.
   The "five components" label comes from later summaries (Put Reading First,
   2001), not the NRP report itself.
5. **8.5: drop "SAMHSA Strategic Prevention Framework".** SPF is a community
   *planning process*, not an outcome framework. YRBSS (verified) already supports
   8.5 on its own.
6. **8.3: re-cite NCTSN precisely, and flag the weak fit.**
   - Change the source to:
     `NCTSN, The 12 Core Concepts for Understanding Traumatic Stress Responses in Children and Families (Layne, Strand et al., 2012)`.
   - The verifier noted it is a professional-knowledge framework, not a youth
     outcome framework. Added to backlog B-13: find an outcome-oriented anchor.
7. **8.2: pin Keyes to a specific work.** Change the source to:
   `Keyes Dual Continua Model (Westerhof & Keyes, 2010, Journal of Adult Development)`.
   The original 2002/2005 papers were unreachable. Pin one of them once it can be
   fetched.
8. **8.6: fix the source–definition mismatch.**
   - YRBSS measures sexual *behaviors*, but 8.6 also includes "reproductive/sexual
     health knowledge".
   - Either add a knowledge-oriented source (lead, not yet verified: the National
     Sex Education Standards), or add this note:
     `Knowledge outcomes are a codebook extension; YRBSS anchors the behavior outcomes.`
9. **12.7: McKinney-Vento is only a weak fit** (it is an eligibility definition).
   Lead with Ascend 2Gen "Economic Assets (housing)", which is verified. Keep
   McKinney-Vento as the definition of homelessness.

Also found, but handled elsewhere:

- **6.1:** the "control over environment" wording matches Search Institute's
  *Personal Power* (Positive Identity), not Empowerment. This is folded into
  CP-01-07.
- **8.1:** "hygiene" isn't covered by WSCC. This is minor; leave it.

## Sources

See the per-code verdicts in the registry. Registry state after this pass:

| Status | Count |
|---|---|
| verified | 23 |
| located | 18 |
| misattributed | 2 |
| needs_replacement | 2 |
| unverified | 0 |

## Gold impact

None. These are citation-only changes.
