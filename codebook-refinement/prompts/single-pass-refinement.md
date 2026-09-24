# Single-pass refinement prompt

Use this when you want one careful review without the multi-agent loop. For example,
paste it into a Claude chat with `codebooks/original.ts`, `STANDARDS.md`,
`CONFUSIONS.md`, and the registry attached.

It is weaker than `/codebook-cycle` in one important way: the same model both
proposes and checks citations. So anything it marks verified must still go through
the citation verifier (or a human) before it is merged.

---

You are reviewing a qualitative codebook used to code youth-program outcome
statements (afterschool, mentoring, workforce, early childhood, juvenile justice,
family support, and similar). The codebook, its standards, its tie-breaker registry,
and its citation registry are attached. STANDARDS.md is binding.

## Your job

Propose improvements against four requirements:

1. **R1 Frameworks.** Every code is grounded in a real, established framework, cited
   down to the component.
2. **R2 Breadth.** The codebook covers the full range of youth-serving programs.
3. **R3 Tie-breakers.** Codes that get confused have clear, sourced tie-breakers.
4. **R4 No drift.** Changes are small, traceable, and testable.

## How to work

1. **List what you will check before you check it.** Cover:
   - each subcategory's citation;
   - each CF entry;
   - a coverage pass over these program types: afterschool/OST, tutoring/literacy,
     STEM/robotics, arts, sports, mentoring, college access, workforce/summer jobs,
     financial capability, civic/leadership, environmental/outdoor, school-based
     mental health, substance-use/violence prevention, juvenile justice/reentry,
     foster care/transition-age youth, runaway & homeless youth, early
     childhood/home visiting, family support/2Gen, food security, housing,
     immigrant/refugee, disability inclusion, digital equity, faith-based, and
     LGBTQ+ youth support.
2. **Label every factual claim about a framework** as one of:
   - `[retrieved]`: you fetched the source in this session. Include the URL and a
     verbatim excerpt of 40 words or fewer.
   - `[recalled]`: from memory. Treat it as a lead only.
   - `[unknown]`.

   Never write a title, year, section number, or CFR citation you cannot retrieve.
   Write `unknown` instead.
3. **Draft each proposed change as an atomic CP** (see proposals/TEMPLATE.md), and
   choose the smallest fit: example → hint → scope → new code → new domain.
   - Show the enum-budget cost of any new code. The footprint is 142 of a working
     ceiling of 165.
4. **For each tie-breaker,** write:
   - a rule that can be applied from the statement's text alone;
   - a rationale that points to a framework component;
   - at least two example statements, one for each side, marked
     `status=proposed`.
5. **Look for anything that contradicts itself:**
   - rulesText vs. hints vs. definitions;
   - a label vs. its definition;
   - a citation that supports only the domain header, not the subcategory.

## Output

1. **Decisions needed from the maintainer** (numbered, at most 7).
2. A citation findings table: code, current citation, problem, proposed fix, and
   evidence label.
3. The coverage matrix: program type, typical outcome, landing code, and fit
   (`clean` / `stretched` / `none`).
4. CPs, in priority order.
5. Proposed gold rows (CSV).
6. A backlog of things you considered and did not propose, with the reason for each.

Do not rewrite the codebook wholesale. Do not rename or renumber existing codes
unless a CP explicitly argues for a MAJOR version bump.
