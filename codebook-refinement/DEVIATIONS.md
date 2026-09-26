# Framework deviations log

Every code that departs from its domain's anchor framework has an entry here
(STANDARDS S1.6). Every CP states whether it adds or changes one (S4.1), and each
cycle report counts them per domain (S4.9). `deviations.test.ts` checks that this log,
the codebook, the source registry and the 3.0 proposal agree.

**Fidelity** of a code is one of:

- **Framework:** matches a verified or located component of its domain's anchor. No
  entry needed.
- **Adapted:** anchored to a framework but departs from it in an allowed way
  (observability, sector widening, or merged components).
- **Codebook-defined:** no framework covers it; justified by adjudicated gold rows.

**Allowed cases (S1.6):** `observability` · `sector-widening` · `merged-components` ·
`codebook-defined`.

Each entry gives: code, fidelity, case, anchor and component, what departs, evidence,
alternative considered, where it was decided, and when to revisit it. Entries are
never deleted: a closed entry stays, with `Status: closed` and the reason.

---

## Live codebook (`codebooks/original.ts`)

### FD-001 · 4.3.4

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Domain 4 Framework Basis. 4.3.4 Awareness of supports and
  resources is not a CASEL example skill.
- **Departs:** sits inside the CASEL domain although CASEL doesn't list it. It was added
  before this log existed (the registry's `codebook_extensions` records the reason).
- **Evidence:** help-seeking prerequisites are a common outcome of school-based mental
  health programs (registry note); few gold rows.
- **Alternative considered:** anchor on CDC WSCC Counseling, Psychological, and Social
  Services (registry lead, unverified).
- **Decided in:** before cycle 02 (registry extension); logged here 2026-09-26.
- **Revisit:** the 3.0 proposal merges it into help-seeking (Y4.9, a CASEL skill),
  which would close this entry.

### FD-002 · 4.5.4

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** CASEL (2020). 4.5.4 Safety-oriented decisions & risk avoidance is not a
  2020 CASEL example skill (earlier CASEL definitions mentioned "safety concerns").
- **Departs:** sits inside the CASEL domain as the routing target for refusal skills and
  risk avoidance (CF-016).
- **Evidence:** registry `codebook_extensions` reason; CF-016.
- **Alternative considered:** CASEL Relationship Skills, "Resisting negative social
  pressure" (CP-01-06 source table; not yet a registry support).
- **Decided in:** before cycle 02; logged here 2026-09-26.
- **Revisit:** when the CASEL "resisting negative social pressure" component is
  verified into the registry, re-anchor and close (3.0 proposal Y4.12, FD-P09).

### FD-003 · 10.1

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** "Opportunity-to-Learn (OTL) Standards", which could not be verified as a
  single citable document.
- **Departs:** the cited framework is not a usable anchor, so the code is effectively
  codebook-defined.
- **Evidence:** registry note ("too generic to verify"); CP-01-10.
- **Alternative considered:** 47 CFR 54 Subpart Q, ESSA 20 U.S.C. 7119(a)(2), Digital
  Equity Act (verified; proposed for 3.0 A2.3).
- **Decided in:** registry extension, pending CP-01-10; logged here 2026-09-26.
- **Revisit:** when a verified source replaces the OTL citation.

### FD-004 · 10.2

- **Status:** open
- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** "Opportunity-to-Learn (OTL) Standards" (as FD-003).
- **Departs:** as FD-003.
- **Evidence:** registry note; CP-01-10.
- **Alternative considered:** ADA Title II / Section 504 program-access language
  ([VERIFY], not fetched).
- **Decided in:** registry extension, pending CP-01-10; logged here 2026-09-26.
- **Revisit:** when a verified source replaces the OTL citation.

### FD-005 · 6.4

- **Status:** open
- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute 40 Developmental Assets, Positive Identity (Domain 6
  Framework Basis).
- **Departs:** CF-022 routes faith-specific language (spiritual growth, faith formation)
  to 6.4 or 6.2. The Developmental Assets don't name faith growth as part of Positive
  Identity or Positive Values.
- **Evidence:** CF-022 gold G-051, G-058; Severin's gap tags on faith rows (H079, S125)
  show the routing is a known compromise.
- **Alternative considered:** a faith and spirituality code (no secular framework in the
  records; not proposed).
- **Decided in:** CF-022; logged here 2026-09-26.
- **Revisit:** if a verified framework for youth spiritual development is found.

---

## Proposed for 3.0 (not live)

These entries belong to `docs/codebook/proposed-codebook.md`. They become live entries,
renumbered FD-###, only if the proposal is approved and built (PLAN phase 4).

### FD-P01 · Y3.1

- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** CDC (2009) School Connectedness (verified).
- **Departs:** widened from school to any program or community.
- **Evidence:** H063 ("a new community").
- **Alternative considered:** Search Institute Support assets (located).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified cross-setting connectedness framework is found.

### FD-P02 · Y4.2

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Self-Management.
- **Departs:** one code for 2.4.0's 4.2.1 and 4.2.2 (two CASEL example skills); the
  definition names both.
- **Evidence:** the gold and the model could not separate them reliably
  (`current-inventory.md` 4.3).
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if statements start separating the two skills.

### FD-P03 · Y4.3

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Self-Management.
- **Departs:** one code for 4.2.3 and 4.2.4; the definition names both.
- **Evidence:** as FD-P02.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P04 · Y4.4

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Social Awareness.
- **Departs:** one code for 4.3.1 and 4.3.3; the definition names both.
- **Evidence:** 4.3.3 had no gold rows.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P05 · Y4.8

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Relationship Skills.
- **Departs:** one code for 4.4.3 and 4.4.5; the definition names both.
- **Evidence:** 4.4.5 had almost no gold rows.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P06 · Y4.9

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Relationship Skills, "Seeking or offering support and help
  when needed".
- **Departs:** absorbs 2.4.0's 4.3.4 (FD-001) into help-seeking, alongside 4.4.4.
- **Evidence:** 4.3.4 had no source and few gold rows.
- **Alternative considered:** keep 4.3.4 as a codebook-defined code.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if awareness-of-supports statements turn out to be common and distinct.

### FD-P07 · Y4.10

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Responsible Decision-Making.
- **Departs:** one code for 4.5.1 and 4.5.3; the definition names both.
- **Evidence:** as FD-P02.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P08 · Y4.11

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** CASEL (2020), Responsible Decision-Making.
- **Departs:** one code for 4.5.2 and 4.5.5; the definition names both.
- **Evidence:** 4.5.5 had almost no gold rows.
- **Alternative considered:** keep both codes.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P02.

### FD-P09 · Y4.12

- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** CASEL (2020), Relationship Skills, "Resisting negative social pressure",
  cited in CP-01-06's source table but not yet a registry support.
- **Departs:** carries 2.4.0's 4.5.4 (FD-002) until that component is verified.
- **Evidence:** CF-016; CP-01-06.
- **Alternative considered:** a prevention-science anchor (none located).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** close when the CASEL component enters the registry as verified.

### FD-P10 · Y5.1

- **Fidelity:** adapted
- **Case:** observability
- **Anchor:** CASEL (2020), Self-Awareness, "Integrating personal and social identities".
- **Departs:** moved out of the CASEL domain into Y5. Statements express identity as a
  belief about oneself, not a skill, and it formed the CF-004/CF-005 confusion.
  Y4.1's "Use instead" line points here.
- **Evidence:** CF-004, CF-005; EASEL taxonomy treats identity separately (partial).
- **Alternative considered:** keep in the CASEL domain (2.4.0's 4.1.2).
- **Decided in:** 3.0 proposal (PR #33), following the v2 draft.
- **Revisit:** if the Y5 anchor is replaced (see the drift count below).

### FD-P11 · Y5.4

- **Fidelity:** adapted
- **Case:** observability
- **Anchor:** CASEL (2020), Self-Awareness, "Experiencing self-efficacy", "Having a
  growth mindset".
- **Departs:** moved out of the CASEL domain into Y5, for the reason in FD-P10.
- **Evidence:** CF-004, CF-005 (the 4.1.4 / 5.4 / 6.4 triangle).
- **Alternative considered:** keep in the CASEL domain (2.4.0's 4.1.3, 4.1.4).
- **Decided in:** 3.0 proposal (PR #33), following the v2 draft.
- **Revisit:** as FD-P10.

### FD-P12 · Y5.5

- **Fidelity:** adapted
- **Case:** codebook-defined
- **Anchor:** Search Institute Positive Identity, Sense of purpose (located).
- **Departs:** carries the faith-growth routing from FD-005.
- **Evidence:** as FD-005.
- **Alternative considered:** as FD-005.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-005.

### FD-P13 · Y6.4

- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** NCSS (2013) C3 Framework, Dimension 4 Taking Informed Action (partial).
- **Departs:** a K–12 social studies framework used for out-of-school civic action
  (youth organizing, voting).
- **Evidence:** S182, H028.
- **Alternative considered:** the "CIRCLE Framework" in 2.4.0 (does not exist as named).
- **Decided in:** 3.0 proposal (PR #33); CP-01-10.
- **Revisit:** if a verified youth civic engagement framework is found.

### FD-P14 · Y6.5

- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** NCSS C3 Dimension 4 (partial); Lerner et al. (2005), Contribution
  (partial).
- **Departs:** as FD-P13, for service and volunteering.
- **Evidence:** 2.4.0's 7.2 gold rows.
- **Alternative considered:** as FD-P13.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** as FD-P13.

### FD-P15 · Y7.7

- **Fidelity:** adapted
- **Case:** sector-widening
- **Anchor:** Chafee, 42 U.S.C. 677(a)(1), daily living skills (verified).
- **Departs:** a foster-care program's construct applied to any young person.
- **Evidence:** H046, H048, S120, S162, S224.
- **Alternative considered:** leave independent living forced into 9.3 or uncoded.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified cross-sector life-skills framework is found.

### FD-P16 · Y2.5

- **Fidelity:** adapted
- **Case:** merged-components
- **Anchor:** National Core Arts Standards (2014), Creating and Performing/Presenting/
  Producing (verified).
- **Departs:** one code for two artistic processes (2.4.0's 2.4 and 2.5), kept apart from
  arts skill gains (Y1.6) by CP-04-01.
- **Evidence:** creating and presenting were never confused in the gold.
- **Alternative considered:** keep 2.4 and 2.5; or fold both into arts learning (v2).
- **Decided in:** 3.0 proposal (PR #33); CP-04-01.
- **Revisit:** if expression statements need the split.

### FD-P17 · Y3.4

- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** none names family relationships as a youth outcome on its own. Chafee/NYTD
  "positive connections" (verified for adult connections) is the nearest.
- **Departs:** new code with no framework.
- **Evidence:** S024, S070.
- **Alternative considered:** route to 3.2 (adult support) or F1.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified framework is found.

### FD-P18 · A2.2

- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** Urban Institute Candidate Outcome Indicators, mentoring (partial: youth
  only).
- **Departs:** covers family satisfaction too, which the source doesn't.
- **Evidence:** H002, S137.
- **Alternative considered:** route satisfaction to Y2.1 (as 2.4.0 did by force).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified satisfaction framework is found.

### FD-P19 · A2.4

- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** none verified. Leads: ADA Title II / Section 504 program access [VERIFY];
  ED & DOJ (2015) language access letter (partial; possible 2025 rescission [VERIFY]).
- **Departs:** carries FD-004 and adds language access.
- **Evidence:** 2.4.0's 10.2 gold rows.
- **Alternative considered:** keep the OTL citation (unverifiable).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** when the ADA/504 lead is verified.

### FD-P20 · A3.1

- **Fidelity:** codebook-defined
- **Case:** codebook-defined
- **Anchor:** no policy-change framework in the records; Learning Forward (2022)
  systems (located) is the nearest.
- **Departs:** codebook-defined status code.
- **Evidence:** S019 (funding and sustainability, a gap row); 2.4.0's 11.3 rows.
- **Alternative considered:** keep 11.3 Systemic Improvement unsplit.
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** when a policy-change framework is verified.

---

## Drift count for the 3.0 proposal (S4.9)

Counted in the domain where the code sits; merged-components entries are logged but not
counted. "Anchored" means the domain's basis names a framework.

| Domain | Codes | Counted deviations | Share | Over a third? |
|---|---|---|---|---|
| Y1 Academic | 18 | 0 | 0% | no |
| Y2 Engagement | 6 | 0 | 0% | no |
| Y3 Belonging | 5 | 2 (Y3.1, Y3.4) | 40% | **yes** |
| Y4 SEL (CASEL) | 12 | 1 (Y4.12) | 8% | no |
| Y5 Identity | 6 | 3 (Y5.1, Y5.4, Y5.5) | 50% | **yes** |
| Y6 Character & Civic | 7 | 2 (Y6.4, Y6.5) | 29% | no |
| Y7 Career | 7 | 1 (Y7.7) | 14% | no |
| Y8 Health | 13 | 0 | 0% | no |
| F1 Family | 9 | 0 | 0% | no |
| F2 Basic needs | 3 | 0 | 0% | no |
| A1 Staff | 3 | 0 | 0% | no |
| A2 Quality & access | 6 | 2 (A2.2, A2.4) | 33% | no (at the line) |
| A3 Systems | 3 | 1 (A3.1) | 33% | no (at the line) |

Y3 and Y5 need their anchors re-reviewed before 3.0 is built. Y5 is expected: its codes
come from CASEL self-awareness, Search Institute and Nagaoka et al., and no single
framework anchors it (its strongest leads, Shogren and Carlone & Johnson, are partial).
