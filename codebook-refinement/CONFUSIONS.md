# Confusion Registry: tie-breakers for the Original codebook

Each entry is the single source of truth for one set of codes that coders confuse
(STANDARDS S3). `rulesText` and subcategory `hint`s must say the same thing as these
entries. If they disagree, this file wins.

**Status**

- **active** — already in the live codebook.
- **proposed** — waiting on the named CP.
- **open** — needs a human decision; options are listed.

**Gold** IDs point to rows in `gold/original.gold.csv`. Rows are `proposed` until a
human adjudicates them.

**Code numbers** follow v2.0.0, where Academic Learning & Achievement is Domain 1
(CP-04-08). Entries written earlier were renumbered by script; the old-to-new map is
`renumbering/v1.2.0-to-v2.0.0.csv`.

---

## General decision procedure (proposed, CP-01-12)

When a statement could fit more than one code, work through these questions in
order. Stop at the first one that decides it.

1. **Who changes?** Youth, caregiver, adult/staff, organization, or community.
   Caregiver-own outcomes go to Domain 12. Adult/org outcomes go to Domain 11.
2. **Output or outcome?** Program-level counts, dosage, or reach go to 11.5.
3. **What kind of result?** Classify it as one of:
   - **State or experience** (feels, enjoys, belongs) → Domains 2, 3, 6, or 8.2.
   - **Skill or competency** (can, uses, demonstrates) → Domains 4, 5, 9.2, or 9.5.
   - **Knowledge or learning gain** (knows, improves proficiency) → Domain 1, 9.1,
     9.9, or 7.1.
   - **Behavior incidence** (does less or more of a risk behavior) → 8.5–8.8.
   - **Status or attainment** (enrolls, graduates, is employed, is housed) → 1.5,
     1.6, 9.7, 9.8, or 12.5–12.7.
4. **What is the context?** The same skill routes by where it is framed:
   - schoolwork → Domain 5;
   - work or career → Domain 9;
   - civic or decision-making → Domain 7;
   - otherwise → Domain 4.
5. **Most specific code wins.** If two codes still fit, pick the one whose
   *definition* (not just its label) names the construct.

---

### CF-001: Financial literacy and financial capability · proposed (CP-01-05)

**Codes:** proposed **9.9 Financial Capability** · 12.5 · 9.8 · 1.2 · 4.2.x

**Rule:**

- Youth financial knowledge, habits, or decisions → **9.9**. This covers budgeting,
  saving, banking, credit, understanding a paycheck, and opening an account.
- Household income, benefits enrollment, or caregiver financial coaching → **12.5**
  (target population `families_caregivers`).
- A youth's *earnings or employment status* → **9.8**.
- Arithmetic proficiency that only uses money as the context ("will solve
  percentage problems with money") → **1.2**.
- Self-control or delaying gratification with no money context → **4.2.x**.

**Rationale:**

- The CFPB Building Blocks (2016) define youth financial capability as three blocks:
  executive function, financial habits and norms, and financial knowledge and
  decision-making skills.
- The Jump$tart/CEE National Standards (2021) define the knowledge content (earning
  income, spending, saving, investing, managing credit, managing risk).
- Domain 9 fits because the OCTAE Employability Skills Framework lists "Manages
  money" under Workplace Skills > Resource Management.
- Domain 12 does not fit, because Domain 12 is scoped to the caregiver's own
  stability.

**Open sub-decision (subject area):** `rulesText` currently lists "financial literacy"
under **Mathematics**. The National Standards are co-published by an *economics*
education body. See CP-01-05 for the options.

**Gold:** G-001, G-002, G-003, G-004, G-005

---

### CF-002: Skill vs. state (Domain 4 vs. Domains 2 and 3) · active

**Rule:**

- Feels, enjoys, or belongs → Domain 2 or 2.
- Can, uses, or demonstrates → Domain 4.
- A feeling counts as a skill only if the text implies growth in capacity.

**Gold:** G-006, G-007

### CF-003: Coping skill vs. symptom state vs. caregiver state · active

**Codes:** 4.2.2 · 8.2 · 12.2

**Rule:**

- A youth learns or uses a coping tool → 4.2.2.
- A youth's symptoms go down → 8.2.
- A caregiver's own stress goes down → 12.2.

**Gold:** G-008, G-009, G-010

### CF-004: Confidence (general vs. academic vs. identity) · active

**Codes:** 4.1.4 · 5.4 · 6.4

**Rule:**

- General self-belief → 4.1.4.
- Belief about succeeding in schoolwork → 5.4.
- Broad purpose or self-worth not framed as confidence → 6.4.

**Gold:** G-011, G-012, G-013, G-069

### CF-005: Growth mindset · proposed amendment (CP-01-06)

**Codes:** 5.4 · 4.1.4

**Rule:**

- A growth mindset about *learning, intelligence, or schoolwork* ("believe their
  math ability can grow with effort") → **5.4**.
- A growth mindset about challenges in general, or unspecified → **4.1.4**.

**Rationale:** Farrington et al. (2012) list "My ability and competence grow with my
effort" as an *academic mindset*. CASEL (2020) lists "Having a growth mindset" under
Self-Awareness with no academic scope. The context test (procedure step 4) separates
them. The current rule sends *all* growth mindset to 4.1.4, which conflicts with the
source for Domain 5.

**Gold:** G-014, G-015

### CF-006: Teamwork vs. friendship · active

**Codes:** 4.4.2 · 3.3

**Rule:**

- The skill of working together → 4.4.2.
- Friendship or acceptance → 3.3.

**Gold:** G-016, G-017

### CF-007: Habits about learning vs. demonstrated learning · active

**Codes:** Domain 5 · Domain 1

**Rule:**

- Behaviors or beliefs *about* learning → Domain 5.
- A demonstrated gain, or an attainment status → Domain 1.
- Split the statement if both are present.

**Gold:** G-018, G-019, G-068

### CF-008: Family codes · active (+ citation fix CP-01-03)

**Codes:** 3.5 · 11.4 · Domain 12

**Rule:**

- The family's relationship with the program → 3.5 (Epstein Type 2 Communicating,
  Type 3 Volunteering).
- The organization's systems for engaging families → 11.4 (Types 5 and 6).
- The caregiver's own knowledge, well-being, or home practice → Domain 12. Home
  learning is 12.4, which is Epstein Type 4 Learning at Home.

**Gold:** G-020, G-021, G-022

### CF-009: Output vs. outcome · active

**Codes:** 11.5 · 1.5 · 3.2

**Rule:**

- Program dosage, reach, or retention → 11.5.
- An individual student's school attendance → 1.5.
- The *quality* of a mentoring relationship (trust, feeling cared for) → 3.2.
  The duration of the match alone → 11.5.

**Gold:** G-023, G-024, G-025

### CF-010: Content knowledge · active (amended by CP-04-01)

**Codes:** 9.1 · 1.1 · 1.2 · 1.3 · 1.8 · 1.9

**Rule:**

- Content mastery explicitly framed around college/career readiness → 9.1.
- Anything else → the subject's Domain 1 code: literacy 1.1, math 1.2, science,
  technology & engineering 1.8, the arts 1.9, any other academic subject 1.3.

**Gold:** G-026, G-027, G-061

### CF-011: Values vs. choices · active

**Codes:** 6.2 · 4.5.2

**Rule:**

- A general character trait → 6.2.
- A decision made in a specific situation → 4.5.2.

**Gold:** G-028, G-029

### CF-012: Problem-solving cluster · active

**Codes:** 4.5.1 · 4.5.3 · 4.4.3 · 9.2

**Rule:**

- Weighing options before one decision → 4.5.1.
- The full identify → solve → act cycle → 4.5.3.
- Interpersonal conflict → 4.4.3.
- Academic or professional analysis → 9.2.

**Gold:** G-030, G-031

### CF-013: Contribution vs. service · active

**Codes:** 4.5.5 · 7.2

**Rule:**

- Small, daily contributions in the classroom or program → 4.5.5.
- Organized service or volunteering → 7.2.

**Gold:** G-032, G-033

### CF-014: Interest phases · proposed (CP-01-04)

**Codes:** 2.2 · proposed **2.6 Sustained & Individual Interest** · 2.3 · 6.3

**Rule:**

- Momentary curiosity, or trying something new → 2.2 (Hidi & Renninger phase 1).
- Interest that lasts, deepens, or becomes the youth's own ("discover a passion",
  "continue pursuing STEM") → **2.6** (phases 2–4).
- Seeing that learning is useful or relevant → 2.3 (Eccles utility value).
- Actually taking part in outside activities → 6.3.

**Rationale:** Today 2.2 is the only interest code. The live run put "discover a new
passion for dance" (validation row 16) into 2.2 at high confidence, but by the cited
model that is emerging individual interest, not triggered situational interest.

**Gold:** G-034, G-035, G-036

### CF-015: Leadership · proposed (CP-01-06)

**Codes:** 7.3 · 4.4.2 · 9.5

**Rule:**

- Influencing decisions in the program, school, or community (youth councils,
  advisory boards, presenting to decision-makers) → 7.3.
- Leading peers within a group task → 4.4.2 (CASEL Relationship Skills: "Showing
  leadership in groups").
- Leadership framed as workplace readiness → 9.5.

**Gold:** G-037, G-038, G-039

### CF-016: CASEL 2020 skills with no dedicated subcode · proposed (CP-01-06)

Routing table. Adding a new code for any of these would need its own CP.

| CASEL skill (2020) | Route to | Why |
|---|---|---|
| Resisting negative social pressure | 4.5.4 | In youth-program outcome statements it is almost always framed as risk refusal. |
| Demonstrating curiosity and open-mindedness | 2.2 | Hidi & Renninger triggered interest is the more specific construct. |
| Understanding and expressing gratitude | 4.3.1 | Closest social-awareness code. |
| Recognizing strengths in others | 4.3.1 | Social awareness of others. 4.1.3 is the youth's *own* strengths. |
| Standing up for the rights of others | 7.4 if systemic/injustice-framed; else 4.5.2 | Criticality vs. a situational ethical choice. |
| Showing the courage to take initiative; demonstrating personal and collective agency | 6.4 | Search Institute places 'Personal power' under Positive Identity (verified cycle-01b). Use 7.3 if civic. |
| Showing leadership in groups | see CF-015 | |
| Examining prejudices and biases | 4.3.2 | |

**Gold:** G-040, G-041

### CF-017: Safety · proposed (CP-01-07)

**Codes:** 6.1 · 3.1 · 4.5.4 · 8.7 · 8.3

**Rule:**

- Youth *feel* safe (neighborhood, general) → 6.1 (Search Institute Empowerment
  includes a Safety asset).
- Feel safe *and accepted in this program or school* → 3.1.
- *Make* safe choices → 4.5.4.
- Actual *incidence* of fights, bullying, or victimization goes down → 8.7.
- Psychological safety in a trauma-recovery context → 8.3.

**Note:** The 6.1 definition today talks about mattering, voice, and control but not
safety, even though its label and example are about safety. CP-01-07 fixes the
definition.

**Gold:** G-042, G-043, G-044

### CF-018: Whose stability? · proposed (CP-01-11)

**Codes:** 12.5 · 12.7 · 9.8

**Rule:**

- A household's, or an independent young adult's, *own* housing → 12.7.
- The same for *own* income or benefits → 12.5.
- A youth's *job* → 9.8.

**Rationale:** NYTD tracks "experience with homelessness" and "financial
self-sufficiency" as outcomes for the *youth* (ages 17–21). Domain 12's scope note
currently says caregiver-only, which leaves transition-age youth programs with no
code.

**Gold:** G-045, G-046

### CF-019: Trauma · active

**Codes:** 8.3 · 11.2

**Rule:**

- The youth's own recovery → 8.3.
- Staff or organization adopting trauma-informed practice → 11.2.

**Gold:** G-047, G-059

### CF-020: Exclusionary discipline · open (CP-01-09)

**Codes:** 1.6 · 4.2.1 · 8.7

**Problem:** The 1.6 definition includes "reduced exclusionary discipline", but its
cited source (the on-track indicator) covers credits and course failures only.

**Options:**

- (a) Keep it in 1.6 and add a verified source for discipline as an
  education-status indicator.
- (b) Route it to 8.7 when violence-driven and to 4.2.1 when behavior-driven.
- (c) Create a new Domain 1 code (1.8 is now taken by CP-04-01; this would be 1.10).

**Gold:** G-048, G-060

### CF-021: Technical or physical skill in arts and sports · arts resolved (CP-04-01); sports open (backlog B-04)

**Codes:** 1.9 · 1.3 · 2.4 · 8.1

**Resolved for the arts:** a technique or knowledge gain in an art form ("technical
proficiency on their chosen instrument") → 1.9, anchored in the National Core Arts
Standards. See CF-026 for 1.9 vs. 2.4/2.5.

**Still open for sports (B-04):** sport technique has no dedicated code.

**Options:**

- (a) Code it to 1.3 with Subject Area "Health & Physical Education". ESSA's
  well-rounded-education definition (20 U.S.C. 7801(52)), now 1.3's anchor, lists
  physical education.
- (b) Widen 8.1 to include motor skill. This needs a verified SHAPE America source,
  which is not yet in the registry.

**Gold:** G-049, G-050

### CF-022: Faith-specific language · active

**Rule:** Route to the closest secular construct (6.2, 6.4, 3.1, or 7.2). Never leave
it uncoded.

**Gold:** G-051, G-058

### CF-023: Transition pathway · active

**Codes:** 9.3 · 9.6 · 9.7 · 9.8

**Rule:**

- The process of getting there (FAFSA, applications) → 9.3.
- Training or credential completed → 9.6.
- Enrolled in or completed postsecondary → 9.7.
- Employed or earning → 9.8.

**Gold:** G-052, G-053

### CF-024: Digital · proposed clarification (CP-01-06)

**Codes:** 7.5 · 10.1 · 1.8 · 9.6

**Rule:**

- Safe, ethical online behavior → 7.5.
- Having a device or connectivity → 10.1.
- Coding or digital skills learned in general enrichment → 1.8 (subject: Computer
  Science & Technology). Amended by CP-04-01; was 1.3.
- An industry certification → 9.6.

**Gold:** G-054, G-055, G-070

### CF-025: Subject learning vs. grades and general performance · proposed (CP-04-02)

**Codes:** 1.1 · 1.2 · 1.3 · 1.8 · 1.9 · 1.6

**Rule:**

- A learning gain, test score, or proficiency level in a **named subject** → that
  subject's code.
- Grades, GPA, course passing or failure, and credits → 1.6, even when a subject is
  named. Record the subject in Subject Area.
- "Academic performance/achievement", grade-level proficiency, or test scores with
  **no subject named** → 1.6.

**Rationale:** Grades and GPA are the on-track indicator's status measures
(Allensworth & Easton), not evidence of learning in one subject. ESSA's standards
and assessments are defined per subject (20 U.S.C. 6311(b)(1)(C)).

**Gold:** G-019, G-062, G-063, G-064, G-065

### CF-026: Arts learning vs. creative expression and performance · active (CP-04-01)

**Codes:** 1.9 · 2.4 · 2.5

**Rule:**

- A stated **skill or knowledge gain** in an art form (technique, vocabulary, notation,
  the discipline's history or concepts) → 1.9.
- Self-expression through making something, with no stated skill gain → 2.4.
- Presenting finished work to an audience, or responding to art as an experience →
  2.5.
- If a statement names both a skill gain and a performance, split it.

**Rationale:** The National Core Arts Standards anchor all three. 1.9 uses them as a
content standard for learning in the discipline. 2.4 and 2.5 use the Creating and
Presenting/Responding processes as engagement and expression (Domain 2).

**Gold:** G-049, G-066, G-067, G-071

### CF-027: Social and economic mobility · proposed (CP-07-01)

**Codes:** 9.8 · 12.5 · 3.6 · 9.5 · 9.7

**Rule:**

- "Economic mobility", "upward mobility" or "breaking the cycle of poverty" is a
  long-term aim, not a code. Code the concrete change the statement names: skills →
  the skill's code (e.g. 9.5); credential or college completion → 9.6 or 9.7; a job
  or earnings → 9.8; household income or benefits → 12.5.
- Only economic mobility named, for the young person → 9.8.
- Only economic mobility named, for the family or household → 12.5.
- "Social mobility" framed as wider connections or access to people who open doors
  → 3.6.

**Rationale:** Programs almost always state mobility as the "leading to…" tail of a
statement whose measurable part already has a code (project-files gold G064). A
mobility code would pull those statements away from the code that fits. Severin
chose a tie-breaker over a new domain or code on 2026-09-25.

**Gold:** G-072, G-073, G-074, G-075

### CF-028: One relationship vs. a wider network · proposed (CP-07-02)

**Codes:** 3.2 · 3.3 · 3.6

**Rule:**

- One trusted or caring adult → 3.2.
- Making friends or feeling accepted by peers → 3.3.
- The breadth of a network, or using contacts to pursue an opportunity
  (introductions, references, professionals in a field) → 3.6.

**Rationale:** The Developmental Relationships Framework separates caring and
support from "Expand Possibilities" (connecting a young person with people and
places that broaden their world). The Education-to-Workforce framework's social
capital indicator is about mobilizing relationships to further one's goals.

**Gold:** G-075, G-076, G-077
