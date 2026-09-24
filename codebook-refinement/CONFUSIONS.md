# Confusion Registry: tie-breakers for the Original codebook

Each entry is the single source of truth for one set of codes that coders confuse
(STANDARDS S3). `rulesText` and subcategory `hint`s must say the same thing as these
entries. If they disagree, this file wins.

**Status**

- **active** — already in codebook v1.1.1.
- **proposed** — waiting on the named CP.
- **open** — needs a human decision; options are listed.

**Gold** IDs point to rows in `gold/original.gold.csv`. Rows are `proposed` until a
human adjudicates them.

---

## General decision procedure (proposed, CP-01-12)

When a statement could fit more than one code, work through these questions in
order. Stop at the first one that decides it.

1. **Who changes?** Youth, caregiver, adult/staff, organization, or community.
   Caregiver-own outcomes go to Domain 12. Adult/org outcomes go to Domain 10.
2. **Output or outcome?** Program-level counts, dosage, or reach go to 10.5.
3. **What kind of result?** Classify it as one of:
   - **State or experience** (feels, enjoys, belongs) → Domains 1, 2, 5, or 7.2.
   - **Skill or competency** (can, uses, demonstrates) → Domains 3, 4, 8.2, or 8.5.
   - **Knowledge or learning gain** (knows, improves proficiency) → Domain 11, 8.1,
     8.9, or 6.1.
   - **Behavior incidence** (does less or more of a risk behavior) → 7.5–7.8.
   - **Status or attainment** (enrolls, graduates, is employed, is housed) → 11.5,
     11.6, 8.7, 8.8, or 12.5–12.7.
4. **What is the context?** The same skill routes by where it is framed:
   - schoolwork → Domain 4;
   - work or career → Domain 8;
   - civic or decision-making → Domain 6;
   - otherwise → Domain 3.
5. **Most specific code wins.** If two codes still fit, pick the one whose
   *definition* (not just its label) names the construct.

---

### CF-001: Financial literacy and financial capability · proposed (CP-01-05)

**Codes:** proposed **8.9 Financial Capability** · 12.5 · 8.8 · 11.2 · 3.2.x

**Rule:**

- Youth financial knowledge, habits, or decisions → **8.9**. This covers budgeting,
  saving, banking, credit, understanding a paycheck, and opening an account.
- Household income, benefits enrollment, or caregiver financial coaching → **12.5**
  (target population `families_caregivers`).
- A youth's *earnings or employment status* → **8.8**.
- Arithmetic proficiency that only uses money as the context ("will solve
  percentage problems with money") → **11.2**.
- Self-control or delaying gratification with no money context → **3.2.x**.

**Rationale:**

- The CFPB Building Blocks (2016) define youth financial capability as three blocks:
  executive function, financial habits and norms, and financial knowledge and
  decision-making skills.
- The Jump$tart/CEE National Standards (2021) define the knowledge content (earning
  income, spending, saving, investing, managing credit, managing risk).
- Domain 8 fits because the OCTAE Employability Skills Framework lists "Manages
  money" under Workplace Skills > Resource Management.
- Domain 12 does not fit, because Domain 12 is scoped to the caregiver's own
  stability.

**Open sub-decision (subject area):** `rulesText` currently lists "financial literacy"
under **Mathematics**. The National Standards are co-published by an *economics*
education body. See CP-01-05 for the options.

**Gold:** G-001, G-002, G-003, G-004, G-005

---

### CF-002: Skill vs. state (Domain 3 vs. Domains 1 and 2) · active

**Rule:**

- Feels, enjoys, or belongs → Domain 1 or 2.
- Can, uses, or demonstrates → Domain 3.
- A feeling counts as a skill only if the text implies growth in capacity.

**Gold:** G-006, G-007

### CF-003: Coping skill vs. symptom state vs. caregiver state · active

**Codes:** 3.2.2 · 7.2 · 12.2

**Rule:**

- A youth learns or uses a coping tool → 3.2.2.
- A youth's symptoms go down → 7.2.
- A caregiver's own stress goes down → 12.2.

**Gold:** G-008, G-009, G-010

### CF-004: Confidence (general vs. academic vs. identity) · active

**Codes:** 3.1.4 · 4.4 · 5.4

**Rule:**

- General self-belief → 3.1.4.
- Belief about succeeding in schoolwork → 4.4.
- Broad purpose or self-worth not framed as confidence → 5.4.

**Gold:** G-011, G-012, G-013, G-069

### CF-005: Growth mindset · proposed amendment (CP-01-06)

**Codes:** 4.4 · 3.1.4

**Rule:**

- A growth mindset about *learning, intelligence, or schoolwork* ("believe their
  math ability can grow with effort") → **4.4**.
- A growth mindset about challenges in general, or unspecified → **3.1.4**.

**Rationale:** Farrington et al. (2012) list "My ability and competence grow with my
effort" as an *academic mindset*. CASEL (2020) lists "Having a growth mindset" under
Self-Awareness with no academic scope. The context test (procedure step 4) separates
them. The current rule sends *all* growth mindset to 3.1.4, which conflicts with the
source for Domain 4.

**Gold:** G-014, G-015

### CF-006: Teamwork vs. friendship · active

**Codes:** 3.4.2 · 2.3

**Rule:**

- The skill of working together → 3.4.2.
- Friendship or acceptance → 2.3.

**Gold:** G-016, G-017

### CF-007: Habits about learning vs. demonstrated learning · active

**Codes:** Domain 4 · Domain 11

**Rule:**

- Behaviors or beliefs *about* learning → Domain 4.
- A demonstrated gain, or an attainment status → Domain 11.
- Split the statement if both are present.

**Gold:** G-018, G-019, G-068

### CF-008: Family codes · active (+ citation fix CP-01-03)

**Codes:** 2.5 · 10.4 · Domain 12

**Rule:**

- The family's relationship with the program → 2.5 (Epstein Type 2 Communicating,
  Type 3 Volunteering).
- The organization's systems for engaging families → 10.4 (Types 5 and 6).
- The caregiver's own knowledge, well-being, or home practice → Domain 12. Home
  learning is 12.4, which is Epstein Type 4 Learning at Home.

**Gold:** G-020, G-021, G-022

### CF-009: Output vs. outcome · active

**Codes:** 10.5 · 11.5 · 2.2

**Rule:**

- Program dosage, reach, or retention → 10.5.
- An individual student's school attendance → 11.5.
- The *quality* of a mentoring relationship (trust, feeling cared for) → 2.2.
  The duration of the match alone → 10.5.

**Gold:** G-023, G-024, G-025

### CF-010: Content knowledge · proposed amendment (CP-04-01)

**Codes:** 8.1 · 11.1 · 11.2 · 11.3 · 11.8 · 11.9

**Rule:**

- Content mastery explicitly framed around college/career readiness → 8.1.
- Anything else → the subject's Domain 11 code: literacy 11.1, math 11.2, science,
  technology & engineering 11.8, the arts 11.9, any other academic subject 11.3.

**Gold:** G-026, G-027, G-061

### CF-011: Values vs. choices · active

**Codes:** 5.2 · 3.5.2

**Rule:**

- A general character trait → 5.2.
- A decision made in a specific situation → 3.5.2.

**Gold:** G-028, G-029

### CF-012: Problem-solving cluster · active

**Codes:** 3.5.1 · 3.5.3 · 3.4.3 · 8.2

**Rule:**

- Weighing options before one decision → 3.5.1.
- The full identify → solve → act cycle → 3.5.3.
- Interpersonal conflict → 3.4.3.
- Academic or professional analysis → 8.2.

**Gold:** G-030, G-031

### CF-013: Contribution vs. service · active

**Codes:** 3.5.5 · 6.2

**Rule:**

- Small, daily contributions in the classroom or program → 3.5.5.
- Organized service or volunteering → 6.2.

**Gold:** G-032, G-033

### CF-014: Interest phases · proposed (CP-01-04)

**Codes:** 1.2 · proposed **1.6 Sustained & Individual Interest** · 1.3 · 5.3

**Rule:**

- Momentary curiosity, or trying something new → 1.2 (Hidi & Renninger phase 1).
- Interest that lasts, deepens, or becomes the youth's own ("discover a passion",
  "continue pursuing STEM") → **1.6** (phases 2–4).
- Seeing that learning is useful or relevant → 1.3 (Eccles utility value).
- Actually taking part in outside activities → 5.3.

**Rationale:** Today 1.2 is the only interest code. The live run put "discover a new
passion for dance" (validation row 16) into 1.2 at high confidence, but by the cited
model that is emerging individual interest, not triggered situational interest.

**Gold:** G-034, G-035, G-036

### CF-015: Leadership · proposed (CP-01-06)

**Codes:** 6.3 · 3.4.2 · 8.5

**Rule:**

- Influencing decisions in the program, school, or community (youth councils,
  advisory boards, presenting to decision-makers) → 6.3.
- Leading peers within a group task → 3.4.2 (CASEL Relationship Skills: "Showing
  leadership in groups").
- Leadership framed as workplace readiness → 8.5.

**Gold:** G-037, G-038, G-039

### CF-016: CASEL 2020 skills with no dedicated subcode · proposed (CP-01-06)

Routing table. Adding a new code for any of these would need its own CP.

| CASEL skill (2020) | Route to | Why |
|---|---|---|
| Resisting negative social pressure | 3.5.4 | In youth-program outcome statements it is almost always framed as risk refusal. |
| Demonstrating curiosity and open-mindedness | 1.2 | Hidi & Renninger triggered interest is the more specific construct. |
| Understanding and expressing gratitude | 3.3.1 | Closest social-awareness code. |
| Recognizing strengths in others | 3.3.1 | Social awareness of others. 3.1.3 is the youth's *own* strengths. |
| Standing up for the rights of others | 6.4 if systemic/injustice-framed; else 3.5.2 | Criticality vs. a situational ethical choice. |
| Showing the courage to take initiative; demonstrating personal and collective agency | 5.4 | Search Institute places 'Personal power' under Positive Identity (verified cycle-01b). Use 6.3 if civic. |
| Showing leadership in groups | see CF-015 | |
| Examining prejudices and biases | 3.3.2 | |

**Gold:** G-040, G-041

### CF-017: Safety · proposed (CP-01-07)

**Codes:** 5.1 · 2.1 · 3.5.4 · 7.7 · 7.3

**Rule:**

- Youth *feel* safe (neighborhood, general) → 5.1 (Search Institute Empowerment
  includes a Safety asset).
- Feel safe *and accepted in this program or school* → 2.1.
- *Make* safe choices → 3.5.4.
- Actual *incidence* of fights, bullying, or victimization goes down → 7.7.
- Psychological safety in a trauma-recovery context → 7.3.

**Note:** The 5.1 definition today talks about mattering, voice, and control but not
safety, even though its label and example are about safety. CP-01-07 fixes the
definition.

**Gold:** G-042, G-043, G-044

### CF-018: Whose stability? · proposed (CP-01-11)

**Codes:** 12.5 · 12.7 · 8.8

**Rule:**

- A household's, or an independent young adult's, *own* housing → 12.7.
- The same for *own* income or benefits → 12.5.
- A youth's *job* → 8.8.

**Rationale:** NYTD tracks "experience with homelessness" and "financial
self-sufficiency" as outcomes for the *youth* (ages 17–21). Domain 12's scope note
currently says caregiver-only, which leaves transition-age youth programs with no
code.

**Gold:** G-045, G-046

### CF-019: Trauma · active

**Codes:** 7.3 · 10.2

**Rule:**

- The youth's own recovery → 7.3.
- Staff or organization adopting trauma-informed practice → 10.2.

**Gold:** G-047, G-059

### CF-020: Exclusionary discipline · open (CP-01-09)

**Codes:** 11.6 · 3.2.1 · 7.7

**Problem:** The 11.6 definition includes "reduced exclusionary discipline", but its
cited source (the on-track indicator) covers credits and course failures only.

**Options:**

- (a) Keep it in 11.6 and add a verified source for discipline as an
  education-status indicator.
- (b) Route it to 7.7 when violence-driven and to 3.2.1 when behavior-driven.
- (c) Create a new Domain 11 code (11.8 is now taken by CP-04-01; this would be 11.10).

**Gold:** G-048, G-060

### CF-021: Technical or physical skill in arts and sports · arts resolved (CP-04-01); sports open (backlog B-04)

**Codes:** 11.9 · 11.3 · 1.4 · 7.1

**Resolved for the arts:** a technique or knowledge gain in an art form ("technical
proficiency on their chosen instrument") → 11.9, anchored in the National Core Arts
Standards. See CF-026 for 11.9 vs. 1.4/1.5.

**Still open for sports (B-04):** sport technique has no dedicated code.

**Options:**

- (a) Code it to 11.3 with Subject Area "Health & Physical Education". ESSA's
  well-rounded-education definition (20 U.S.C. 7801(52)), now 11.3's anchor, lists
  physical education.
- (b) Widen 7.1 to include motor skill. This needs a verified SHAPE America source,
  which is not yet in the registry.

**Gold:** G-049, G-050

### CF-022: Faith-specific language · active

**Rule:** Route to the closest secular construct (5.2, 5.4, 2.1, or 6.2). Never leave
it uncoded.

**Gold:** G-051, G-058

### CF-023: Transition pathway · active

**Codes:** 8.3 · 8.6 · 8.7 · 8.8

**Rule:**

- The process of getting there (FAFSA, applications) → 8.3.
- Training or credential completed → 8.6.
- Enrolled in or completed postsecondary → 8.7.
- Employed or earning → 8.8.

**Gold:** G-052, G-053

### CF-024: Digital · proposed clarification (CP-01-06)

**Codes:** 6.5 · 9.1 · 11.8 · 8.6

**Rule:**

- Safe, ethical online behavior → 6.5.
- Having a device or connectivity → 9.1.
- Coding or digital skills learned in general enrichment → 11.8 (subject: Computer
  Science & Technology). Amended by CP-04-01; was 11.3.
- An industry certification → 8.6.

**Gold:** G-054, G-055, G-070

### CF-025: Subject learning vs. grades and general performance · proposed (CP-04-02)

**Codes:** 11.1 · 11.2 · 11.3 · 11.8 · 11.9 · 11.6

**Rule:**

- A learning gain, test score, or proficiency level in a **named subject** → that
  subject's code.
- Grades, GPA, course passing or failure, and credits → 11.6, even when a subject is
  named. Record the subject in Subject Area.
- "Academic performance/achievement", grade-level proficiency, or test scores with
  **no subject named** → 11.6.

**Rationale:** Grades and GPA are the on-track indicator's status measures
(Allensworth & Easton), not evidence of learning in one subject. ESSA's standards
and assessments are defined per subject (20 U.S.C. 6311(b)(1)(C)).

**Gold:** G-019, G-062, G-063, G-064, G-065

### CF-026: Arts learning vs. creative expression and performance · proposed (CP-04-01)

**Codes:** 11.9 · 1.4 · 1.5

**Rule:**

- A stated **skill or knowledge gain** in an art form (technique, vocabulary, notation,
  the discipline's history or concepts) → 11.9.
- Self-expression through making something, with no stated skill gain → 1.4.
- Presenting finished work to an audience, or responding to art as an experience →
  1.5.
- If a statement names both a skill gain and a performance, split it.

**Rationale:** The National Core Arts Standards anchor all three. 11.9 uses them as a
content standard for learning in the discipline. 1.4 and 1.5 use the Creating and
Presenting/Responding processes as engagement and expression (Domain 1).

**Gold:** G-049, G-066, G-067, G-071

