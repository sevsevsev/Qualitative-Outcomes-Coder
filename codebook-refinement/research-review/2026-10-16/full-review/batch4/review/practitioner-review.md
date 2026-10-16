# Batch 4 (A1, A2, A3): practitioner review (2026-10-16)

Role: practitioner. Evidence: unique texts in the LM run (`real-run-review/coded_outcomes_youth_outcomes_v3-3.1.2_2026-10-02.csv`)
and the NLM run (`no-logic-model/full-run/full_run_export_2026-10-04.csv`), counted from `outcome_text_atomic`. These are model
codes, not gold. Design gold is from `youth_outcomes_v3.gold.csv` (all A rows adjudicated). I did not open the held-out file.
[held-out row] is not used (R-01). I also avoid quoting the one real staffing text that may be [held-out row]'s source.

**Decision C applied.** It matters in three places:
- **A1.1.** Its text names volunteers, mentors, coaches and case managers, and its sources (Guskey, Learning Forward) cover
  educators only. So A1.1 needs Kirkpatrick or an FD.
- **A1.2.** Its text says only "Adults", and SAMHSA is cross-sector, so it needs no FD. The reconciliation's A1 worst case is
  therefore 1 of 3, not 2 of 3.
- **A1.3.** A volunteer include would name a population that the Surgeon General and JOLTS (workers) do not cover.
- **A2.2, A2.4.** No outside population is named, so only the unsourced residues ("safety"; CP-09-02's "another group
  facing barriers") keep an FD alive, not sector widening.

Changes that move real rows are marked **moves rows**.

## A1 Staff & Volunteer Capacity

| Finding | Verdict | Reason | Smallest change I'd accept |
|---|---|---|---|
| Learning Forward: pin the 2022 PDF (a1-01, PARTIAL) | ACCEPT | Display only | Option 1 (2022 PDF URL) |
| SAMHSA URL to NCSACW (a1-05, SUPPORTED) | ACCEPT | Moves no rows | URL swap |
| A1.1 add Kirkpatrick L2 (a1-03), or log an FD | ACCEPT either way; never narrow | Non-educators are real and in gold. Real use: about 17 of 67 LM A1.1 texts are volunteers, mentors, tutors or partners (Bigs, Foster Grandparent volunteers, CCP tutors, mentors). Gold **S043, S083, S142, S146, S244, H014** are all non-educators coded A1.1 and would flip if the definition were narrowed. | Kirkpatrick as supporting if tier is accepted; otherwise one sector-widening FD. The wording stays as is. |
| A1.2 add Kirkpatrick L3 (a1-04) | ACCEPT (optional) | Decision C: no FD needed. Real A1.2 use is clean (curricula, PBIS, SEL tools). | Supporting cite only |
| A1.3 widen to staffing levels (a1-06 JOLTS openings/hires, PARTIAL) | ACCEPT WITH CHANGES, **moves rows** | Pipeline texts are real and scattered: "Strengthen the regional early-literacy educator pipeline" (A3.1), "Increased number of certified district teachers" (A1.3), "Sustained teaching workforce" (A1.3). JOLTS is partial for retention but direct for vacancies and hires, which is exactly the part being added. | Sequence after PR #62 (R-13). Justify from the real texts, not [held-out row]. Severin adds 2 design rows (vacancy and pipeline) before the CP. S149 stays. |
| A1.3 burnout: WHO ICD-11 (a1-07, SUPPORTED) | ACCEPT (optional) | Moves no rows | Supporting cite |
| A1.3 volunteer include (a1-08, PARTIAL) (R-03) | ACCEPT WITH CHANGES | Volunteer retention is real for mentoring partners ("Mentors deepen involvement", "Bigs live with a sense of satisfaction…", "Increased number of tutors remaining in the education field after service"). But the source is partial, and the prompt hard-codes `mentors_volunteers` → "A1.1 or A1.2" (`codebooks/youthOutcomesV3.ts` line 105), which the researchers missed. | Add "volunteer and mentor retention" with Spinney & Clinton as supporting, log the FD (decision C), and change the prompt's population line to "A1.1–A1.3" in the same CP |
| Staff credentials (R-04, no claim) | DEFER, with a tie-breaker now | About 12 NLM texts from teacher and leader pipeline programs ("gaining their PA Principal Certification"), all A1.1, mostly high confidence. Consistent today; the risk is the A1.3 widening splitting them. | Tie-breaker: one person earning a credential → A1.1; counts of staff hired, retained or filling roles → A1.3. Sourcing "credential" in A1.1 goes to the backlog. No gold rows exist; ask Severin for two. |
| Senior volunteers' quality of life (R-02) | DEFER | 1 real text. F1.4 is caregiver-only, so Part F has no code that fits either. | Send volunteers' own life outcomes that are unrelated to their role ("quality of life", "personal growth", "professional connections") to A1 domain-only. Skills for the role → A1.1. Retention and satisfaction with serving → A1.3. |

## A2 Program Quality, Access & Reach

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| A2.1 "accreditation": log it or drop it | ACCEPT log; REJECT drop | Dropping it would flip **S075** ("achieve accreditation from the state afterschool network", gold A2.1), which a2 missed | Note it in `basis` as a codebook-defined residue. Real texts never say "accreditation". |
| A2.2 re-anchor: Urban COF (a2-01, PARTIAL) + SAMHSA URS (a2-02, PARTIAL) | ACCEPT WITH CHANGES | Both are partial, and only a2-11 (Urban, SUPPORTED for "satisfaction" as a program-centered outcome) is clean. Real use is tiny (6/3) and mostly off-construct: "students who state Heights has helped them…", "schools report Ignite fellows had a positive impact…". | Cite the Urban COF from a2-11's verified excerpt. Keep FD-P18 for "safety". Dropping "safety" would flip **H002**: REJECT. |
| A2.3 7119 on govinfo (a2-14) + Digital Equity Act status note (R-07) | ACCEPT | Moves no rows | One status note shared with F1.6 |
| A2.3 "facilities": log or drop | ACCEPT log; REJECT drop | About 5 real texts depend on it: "Increased community usage of school facilities", "Outdoor spaces are transformed into school gardens…", "Completion of a high-quality mini-pitch installation…" | Note it in `basis` |
| A2.4 re-anchor: CDC (a2-03 SUPPORTED, a2-04 PARTIAL), 504 (PARTIAL), 6318(f) (SUPPORTED), CAST (SUPPORTED) | ACCEPT WITH CHANGES | No gold flips: S001, H058, S041, S098 and S113 hold. Real drift is the bigger problem: 11 of 13 real texts are general equity of access ("Increased accessibility of opera for all", "Eliminate the barriers of access to sports"), and 2 are vision screening ("Reduced barriers to learning for students requiring corrective eyewear", which belongs in Y8.5). Only "Bilingual signage will allow Spanish-speaking students to engage" fits. | Sequence after PR #62 (R-18). Send CP-09-02's "(or another group facing barriers)" to the #62 owner: drop it, or add an exclude "general access or equity of reach with no named barrier → A2.5 (reach) or A2 domain-only". That would move about 10 texts. |
| A2.5 21st CCLC "regular = 30+ days" (a2-09, PARTIAL) | ACCEPT as supporting | Grounds H001. The report also says "more than 30". | Citation only, quoting "30 days or more" |
| A2.5 Weiss rescoped to enrollment + attendance (a2-10) | ACCEPT | Housekeeping | Component text |
| A2.6 ESSA 6318(a)(2)/(c)(1) replaces Epstein Type 6 (a2-12); Mapp v2 (a2-13) | ACCEPT | Real use 3/0; no rows move | One Mapp decision across F1.7, F1.8 and A2.6 (R-05). Move Type 3 to the Corwin URL too (R-06). |

## A3 Systems, Policy & Community Conditions

| Finding | Verdict | Reason | Smallest change |
|---|---|---|---|
| A3.1 option (a) log FD vs (b) narrow (R-08) | ACCEPT (a) WITH CHANGES | (b) would push about 20 LM and 8 NLM texts to A3/none. Many of them are concrete and useful to funders: "Schools adopt sustainable composting and greening programs", "Schools will incorporate site based education into curriculum", "Integration of mindful movement practices into the daily school-wide routine". No gold flips either way (S101, S019, H089). But "institutional practice" collides with A1.2: **S148** (counselors implement an SEL screener) is gold A1.2 with alternate A3.1, and CF-019 already sends "organization adopting trauma-informed practice" to A1.2. | Log the FD. Add a tie-breaker: named adults applying a practice → A1.2; the school or district adopting a practice into its structure (routine, curriculum, budget, policy) → A3.1. Amend CF-019 to match. |
| A3.2 add Reisman alliances (a3-01) + Coffman partnerships (a3-02), both SUPPORTED | ACCEPT | It fits what real use already does: 54/11 texts, mostly high confidence, ordinary two-party partnerships. No rows move, and S195 and H090 hold. | Citation only |
| A2.6/A3.2 tie-breaker (R-12) | DEFER | It contradicts adjudicated **S176** (gold F1.9) | Wait for Severin's S176 ruling |
| A3.3 Sampson PubMed URL (a3-03, SUPPORTED) | ACCEPT | Housekeeping | URL |
| A3.3 option (a) exclude vs (b) widen with Reisman "Changes in impact" (R-09) | ACCEPT (a), **moves rows**; REJECT (b) | (b) turns A3.3 into a catch-all for 59 texts. Under (a), about 30 move to A3/none: community health ("Enhanced community immunity…"), norms ("Communities normalize financial literacy conversations"), economy ("regional prosperity") and about 10 vague Afro-Brazilian arts texts. Domain-only is honest for these. S154 holds. a3 undercounts the true fits: The Commons' five resident-participation texts ("Neighbors will help to lead events", "…feel shared ownership of the space") are collective action and should stay. | Exclude as a3 drafted. The include adds "residents' connection to one another and shared action for the neighborhood" (social cohesion; within Sampson). |
| School climate hint (a3-06 PARTIAL, secondary) (R-11) | ACCEPT WITH CHANGES, **moves rows** | a3 counted about 9 texts by looking only in A3. The full spread is about 21 unique texts: roughly 9 in **A2.1** ("enhance school climate", "Documented improvement in school climate and supportive learning environments"), 8 in A3.1 and 4 in A3.3, plus strays in Y8.7 and Y6.4. This is the largest inconsistency in Part A. | One hint across A2.1, A3.1 and A3.3: school-wide or classroom climate and culture → A3 domain-only. The program's own environment stays A2.1 (**H057** must hold). A discrete practice a school adopts stays A3.1. Promote A3.4 from backlog to the next cycle (about 21 texts justify enum +1), but only with a primary ED/EDSCLS source. youth.gov is a lead. |
| research-basis.md pointer to CP-10-02 | ACCEPT | Cosmetic | One line |

## Gold rows a change would flip (summary)

- Narrowing A1.1 to educators: S043, S083, S142, S146, S244, H014.
- Dropping "accreditation": S075.
- Dropping "safety" from A2.2: H002.
- The A2.6/A3.2 tie-breaker as drafted: S176.
- A school-climate hint worded too broadly: H057.
- As I accept them, no change flips a gold row.

## What the researchers missed

1. **School climate sits mostly in A2.1, not A3** (above). The scope of the hint and of A3.4 should be set from the whole run, not
   from A3 alone.
2. **Prompt line 105** routes volunteers only to A1.1 or A1.2. Any A1.3 volunteer change must edit it, or the include will be
   dead text.
3. **Organizational reputation and visibility** has no home and gets forced into A2.1, A3.2 and A3.3: "improved recognition of
   Musicopia due to stronger branding", "Program is locally and nationally recognized as a model…", "Musicopia recognized as a
   trusted community partner", "Community is aware of PACTS". That is about 7 texts. Lead: send them to A2 domain-only by hint.
   Reisman's "Strengthened base of support" is unverified for this purpose.
4. **Partner satisfaction.** "At least 90% of schools report that Ignite fellows had a positive impact…" is a host school's
   satisfaction. A2.2 names only participants and families. Decide whether partner satisfaction belongs there (a decision C
   question: the text would name a new population) or goes to A2 domain-only.
5. **Split multi-outcome statements in A:** "Improved adult well-being and instructional efficacy through professional
   coaching" (A1.3 + A1.1), "Teachers & coaches are trained and increased confidence", "Improved school climate and sense of
   community" (A3 + Y3.1), "Partnerships secure collaborative funding and develop complementary programming". Each was coded
   whole, so split enforcement would fix more rows here than any citation change.
6. **Volunteers' own outcomes** total about 20 texts across A1.1, A1.2, A1.3 and A1/none. Two are miscoded today: "Bigs make
   positive contributions in their communities and workplaces" (A1.2, but it is not practice change) and Students Run's adult
   "connectedness" texts. The routing rule under R-02 above would settle them.
7. **No design gold** covers staff credentials, staffing levels, school climate, volunteer retention or community-level norms.
   Each accepted change above needs 1-2 design rows from Severin before its CP. [held-out row] cannot fill that role.
