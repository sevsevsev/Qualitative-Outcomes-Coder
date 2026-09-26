# Codebook Standards

These are the fixed rules every codebook change is checked against. Agents read this
file; they do not edit it. Only a human maintainer changes it, in a commit by itself
whose message explains why.

The standards apply to `codebooks/original.ts`. A new codebook can adopt them by
getting its own `sources/<id>.sources.json` and `gold/<id>.gold.csv`.

---

## S1. Every code is grounded in a real, established framework

1. **Each subcategory has at least one source in the registry**
   (`codebook-refinement/sources/original.sources.json`), with `status: "verified"`. Or
   the subcategory is listed in the registry's `codebook_extensions` block with a
   written reason (a construct the field needs but no framework names cleanly, such
   as 10.5 output metrics).
2. **Source tiers.** In order of preference:
   - **A: Statute, regulation, or federal-agency framework** (WIOA 20 CFR 677.155,
     ESSA, Head Start ELOF, CDC WSCC/YRBSS, CFPB Building Blocks, NYTD).
   - **B: Recognized standards body or consortium framework** (CASEL, National Core
     Arts Standards, ISTE, WIDA, Learning Forward, Jump$tart/CEE National Standards).
   - **C: Seminal, peer-reviewed or institution-published model** (Hidi & Renninger
     2006; Keyes' Dual Continua; Farrington et al. 2012 at UChicago Consortium;
     Allensworth & Easton 2005).
   - **D: Named practitioner framework from an established nonprofit** (Search
     Institute, CSSP Strengthening Families, Ascend 2Gen, MENTOR).
   - **Not allowed:** vendor or curriculum marketing, blog posts, uncited "research
     shows" claims, Wikipedia, or a framework the proposer "remembers" but could not
     retrieve.
3. **Cite the component, not just the framework.** "CASEL" alone is not enough.
   "CASEL 2020, Self-Management: 'Identifying and using stress-management strategies'"
   is. Every registry entry says which specific component supports which specific
   code.
4. **Attribution must be exact.** Name the author or publisher, not the funder or a
   popularizer. (Precedent: 7.8 was attributed to OJJDP, but the standard is CJCA's
   2009 white paper, which OJJDP only funded.) Renamed organizations keep the name
   they had at publication and add a note.
5. **Verification is evidence, not memory.** A source is `verified` only after an
   agent fetched it from a URL in the same run and recorded a short verbatim
   excerpt (40 words or fewer) that supports the specific claim. What a model
   remembers can *suggest* a source. It can never *confirm* one.
6. **Framework fidelity.** A code sits inside a domain whose Framework Basis names an
   anchor framework, and it should match a component of that framework. A code may
   depart from its anchor only in one of these four cases, and each departure has an
   `FD-###` entry in `DEVIATIONS.md`:
   - **Observability:** the framework's construct is a belief or state that outcome
     statements don't express as the framework defines it, so the construct moves to
     another domain and the anchored domain keeps a pointer to it.
   - **Sector widening:** a framework written for one sector or population is applied
     to all youth-serving programs (S2), with its construct and wording unchanged.
   - **Merged components:** coders can't tell two framework components apart in
     statements, so one code covers both and its definition names both.
   - **Codebook-defined:** adjudicated gold rows have no home and no framework covers
     them. The code is marked codebook-defined and is never presented as part of a
     framework that doesn't list it.

   Not allowed: redefining a construct while still citing the framework; adding a
   code to an anchored domain that the framework doesn't list, without an FD entry;
   and departing from a framework only because accuracy improves. Every code in the
   registry's `codebook_extensions` has an FD entry.

## S2. The codebook covers the full range of youth-serving programs

1. The coverage matrix (in each cycle report) lists the program types in
   `validation/synthetic-outcome-statements.csv` plus the extended list in
   `README.md § Coverage`. For each program type, the typical outcomes it states must
   code to a real subcategory at `high` or `medium` confidence. A `low` or uncoded
   result for a common outcome is a coverage gap.
2. A gap is closed by the **smallest change that fits**, in this order: an example →
   a hint → widening a definition's scope → a new subcategory → a new domain. Each
   step up has to explain why the smaller step would not work.
3. **Enum budget (a hard technical ceiling).** Gemini structured output rejects a
   schema whose total enum footprint is too large (it has worked live at 142 values and
   failed by ~220). `codebooks/geminiSchema.test.ts` caps it at 180. On
   2026-09-23 the footprint was **142** (12 domains counted twice, 82 subcategories
   + "none", and smaller enums). Each new subcategory costs 1, each new domain costs
   2. **No cycle may add more than 5 subcategories.** Once the footprint passes 165,
   stop adding codes and redesign the schema (for example, two-stage coding with
   domain first, then subcategory) before growing further.

## S3. Confusable codes have explicit, sourced tie-breakers

1. Every pair of codes that is known to be confusable has an entry in
   `CONFUSIONS.md` (CF-xxx) with:
   - a **decision rule** a coder can apply from the statement's text alone;
   - a **rationale** tied to registry sources, or to the codebook's own
     skill/state/behavior/status logic;
   - **at least two gold examples**, one for each side.
2. The tie-breaker text in `rulesText` and the subcategory `hint`s must say the same
   thing as the CF entry. If they disagree, CONFUSIONS.md wins and the prompt text is
   fixed.
3. A pair becomes a confusion candidate when any of these happen:
   - two coding runs disagree on it (self-consistency below 80% on that pair);
   - the model's code and the gold code disagree;
   - a human reviewer overrides the model on it more than twice in real use.

## S4. Refinement is iterative and cannot drift or bake in hallucinations

1. **Nothing changes without a change proposal (CP)** in
   `codebook-refinement/proposals/`, using `TEMPLATE.md`. One CP makes one kind of
   change.
   Every CP states its framework deviation: none, a new `FD-###`, or a changed
   `FD-###` (S1.6). A tie-breaker or hint that moves a construct across a framework's
   boundary counts, even as a PATCH. The regression judge fails a CP that changes
   the scope of a framework-anchored code without that statement.
2. **Separate roles, in separate contexts.** The agent that proposes a citation
   never verifies it. The verifier sees only `{claim, cite_as, url}`, not the
   proposer's reasoning.
3. **The gold set is the anchor.** `gold/original.gold.csv` rows with
   `status=adjudicated` were confirmed by a human. Agents may *propose* rows
   (`status=proposed`). They may never set `adjudicated`, change an adjudicated
   row's expected code, or delete an adjudicated row. Regression is scored only on
   adjudicated rows.
4. **Regression gate.** A CP cannot be approved if it lowers adjudicated-gold
   accuracy, or flips any adjudicated row, unless the CP names that row and explains
   why the flip is a correction.
5. **Stability gate.** The gold run is done twice. Any row whose primary code
   differs between the two runs gets reported as a confusion candidate (see S3).
6. **The human approves.** Agents draft. A human maintainer approves or rejects each
   CP. Approved CPs are applied in one commit per cycle that bumps
   `codebook.version`:
   - **PATCH:** hints, examples, citation text, rulesText clarifications.
   - **MINOR:** new subcategory, a definition's scope widened or narrowed.
   - **MAJOR:** a code removed, merged, renamed, or renumbered. Also requires a
     re-import mapping in `services/reviewNormalization.ts`.
7. **Deferred means deferred.** Items in the "Deferred" block of `original.ts`, and
   in the backlog of the latest cycle report, are only picked up again through a CP
   that cites new evidence.
8. **Every cycle leaves a paper trail.** `cycles/cycle-NN-YYYY-MM-DD.md` records what
   was examined, what was verified (and how), what was proposed, what was rejected,
   and the before/after gold scores.
9. **Drift budget.** Each cycle report counts, per domain, the codes that are adapted
   or codebook-defined (`DEVIATIONS.md`), in the domain where the code sits. A
   merged-components entry is logged but not counted, because the merged code stays
   wholly inside the framework. When more than a third of an anchored domain's codes
   deviate, the domain's anchor is re-reviewed (keep it, replace it,
   or split the domain) before any further change to that domain.
