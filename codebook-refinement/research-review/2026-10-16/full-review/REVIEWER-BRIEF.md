# Full codebook research review: reviewer brief (Phase 3, 2026-10-16)

You are an independent reviewer of one batch of a research review of codebook 3.x
(repo /home/claude/Qualitative-Outcomes-Coder). You did not do the research. Challenge it.
Your task names the batch folder, the domains, and your role.

Inputs:
- Findings: `<batch>/research/*-findings.md`.
- Reconciliation: `<batch>/research/reconciliation.md` (conflicts flagged R-01...; give a view on
  every conflict that touches your role).
- Verification table: `<batch>/verify/verification-table.md` (independent verifiers fetched each
  new citation). Any source in the findings that is NOT SUPPORTED or PARTIAL in this table is an
  unverified lead: it cannot support a recommendation.
- Repo: CLAUDE.md, codebook-refinement/STANDARDS.md (binding), DEVIATIONS.md, CONFUSIONS.md,
  docs/codebook/research-basis.md, codebooks/youthOutcomesV3.data.ts (your domains),
  codebook-refinement/sources/youth_outcomes_v3.sources.json, design gold
  codebook-refinement/gold/youth_outcomes_v3.gold.csv.
- Real use: /mnt/project-files/research-review/full-review/real-run-code-counts.csv (use unique-text
  counts, not rows).
- In flight, do not touch: draft PR #62 (candidate 3.2.0; CP-09-01..08: Y1.4, A2.4, A2.5, Y2.5,
  Y2.6, Y7.1, Y7.2, Y7.3, F1.9) and draft PR #66 (Y1; CP-11-01..03). The Y1 pilot's
  recommendations and open decisions are in codebook-refinement/research-review/2026-10-16/; one
  of them (decision C) is an age rule: a population mismatch needs an FD only when the code's own
  text names a population outside its source. Apply it, and say where it matters.
- Rules: never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Only the owner
  (Severin) adjudicates gold and edits STANDARDS.md. Scope is any youth-serving program; no
  early-childhood-specific sources unless the construct is about young children by definition.
  Mobility is a tie-breaker. Enum footprint is 160 (cap 180, redesign line 165). Do not call any
  mcp__hearthbot__ tool, and do not edit repo files or run git.

Roles:
- taxonomy: referee the methods. Is Part → domain → category → code defensible here, and is each
  anchor choice justified?
- fidelity: check each proposed change against STANDARDS S1.6 (four allowed cases) and S4.9 (drift
  budget); count drift per domain before and after.
- practitioner: would this help code real Philadelphia partner logic models? Check real-run counts
  and example statements, confusable pairs in CONFUSIONS.md, and the leads (adult volunteering,
  digital and career skills, split multi-outcome statements). Name gold rows a change would flip.
- devils-advocate: argue for keeping the codebook as is on every recommendation; name each change's
  cost (enum footprint, retraining, comparability with past codings), and catch over-reach.

Output: write `<batch>/review/<role>-review.md` (<= ~1,800 words). For each finding you judge, give
a verdict (ACCEPT / ACCEPT WITH CHANGES / REJECT / DEFER), a one-line reason, and the smallest change
you would accept. End with anything the researchers missed. Return a 10-line summary as your final
message.
