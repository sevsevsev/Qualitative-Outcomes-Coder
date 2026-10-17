# Y1 pilot: reviewer brief (2026-10-16)

You are an independent reviewer of a research review of Domain Y1 "Academic Learning &
Achievement" in codebook 3.x (repo /home/claude/Qualitative-Outcomes-Coder). You did not do
the research. Challenge it.

Inputs:
- Findings: /mnt/project-files/research-review/y1-pilot/research/{subject,mindsets,attainment,taxonomy}-findings.md
- Verification table: /mnt/project-files/research-review/y1-pilot/verify/verification-table.md
  (independent verifiers fetched each new citation; SUPPORTED or PARTIAL). Treat any source in
  the findings that is NOT in this table, or anything the findings call a lead, as an
  unverified lead: it cannot support a recommendation.
- Repo: CLAUDE.md, codebook-refinement/STANDARDS.md (binding), DEVIATIONS.md, CONFUSIONS.md,
  docs/codebook/research-basis.md, codebooks/youthOutcomesV3.data.ts lines 1-371 (Y1),
  codebook-refinement/sources/youth_outcomes_v3.sources.json.
- In flight, do not touch: draft PR #62 (candidate 3.2.0) narrows Y1.4 (everyday digital skills
  -> Y7.3) and changes A2.4/A2.5/Y2.6/Y7.1/Y7.2 boundaries; CP-09-01..08 exist.
- Rules: never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Only the
  owner (Severin) adjudicates gold and edits STANDARDS.md. Scope is any youth-serving program;
  no early-childhood-specific sources except where the construct is inherently about young
  children. Mobility is a tie-breaker. Enum footprint is 160 (cap 180, redesign line 165).
- Do not call any mcp__hearthbot__ tool, and do not edit repo files or git.

Output: write your report to the path your task gives (<= ~1,500 words). For each finding you
judge, give a verdict (ACCEPT / ACCEPT WITH CHANGES / REJECT / DEFER), one-line reason, and
the smallest change you would accept. End with a short list of anything the researchers
missed. Return a 10-line summary as your final message.
