# Expert panel: settle the proposed examples and the open edge cases (2026-10-16)

Severin, the codebook owner, asked for "a team of expert qualitative researchers and coders to settle the examples and make determinations about edge cases or gaps in the codebook." You are one member of that panel. Work independently: do not read other panelists' files (`panel/expert-*`).

Repo: /home/claude/Qualitative-Outcomes-Coder (codebook 3.1.5). Panel folder: /tmp/claude-0/-home-claude-Qualitative-Outcomes-Coder/9b5fa1ab-2566-5834-8723-5a0d320c0fda/scratchpad/panel/ (call it `panel/`).

## Inputs
- `panel/comparison.csv`: the 75 proposed examples (P-01..P-75). For each: the boundary it tests, the side the proposer intended, the statement, and the codes three independent blind coders gave (a, b, c) with any codebook issues they flagged. The blind coders used the live 3.1.5 coding prompt, which does not yet contain the proposed hints.
- `codebook-refinement/research-review/2026-10-16/full-review/proposed-design-rows.csv` and `.md`: why each row was proposed.
- The proposals that the rows test: codebook-refinement/proposals/CP-11-03, CP-12-14, CP-12-15, CP-12-19, CP-12-31, CP-12-32 (hint and boundary text).
- `panel/edge-cases.md`: 57 open questions E-01..E-57, with options and evidence.
- Context: CLAUDE.md, codebook-refinement/STANDARDS.md (binding), DEVIATIONS.md, CONFUSIONS.md, codebooks/youthOutcomesV3.data.ts, codebook-refinement/research-review/2026-10-16/full-review/DECISIONS.md (Severin's settled decisions: all on the recommended option), design gold codebook-refinement/gold/youth_outcomes_v3.gold.csv, real-use counts /mnt/project-files/research-review/full-review/real-run-code-counts.csv.

## What to decide
1. For every example P-01..P-75: the code it should carry under the codebook as it should be (with the proposed hint if you accept it): a code id, "<domain> domain only", or "uncoded". Say whether the intended side was right, and whether the boundary rule it tests should be adopted, changed or dropped.
2. For every edge case E-01..E-57: your determination (one of the listed options, or a better one), in one or two sentences with the reason. Prefer the smallest change that fixes the problem (STANDARDS S2.2). A gap gets a home only if real statements need one; otherwise "stays uncoded" or "domain only with gap flag" is a fine answer.

## Limits (binding)
- Never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Never write an id of the form N followed by digits.
- Panel determinations are recommendations to the codebook. Only Severin marks a gold row "adjudicated" and only he edits STANDARDS.md: where a determination needs either, say so.
- No new citation: rely only on sources already recorded as verified or partial in the registry or the verification tables.
- Do not edit repo files, run state-changing git commands, or call any mcp__hearthbot__ tool.

## Output
- `panel/expert-<role>-rows.csv` with columns: proposal_id, determination, side_right (yes/no/partly), rule (adopt/change/drop), confidence (high/medium/low), reason (25 words or fewer).
- `panel/expert-<role>-edges.md`: one line per E-xx: "E-xx: <determination>. <reason>." Then up to five "missed issues" the list overlooked.
Return a 10-line summary.
