# Expert panel: settle 120 real outcome statements (2026-10-17)

Severin, the codebook owner, wants to test codebook 3.1.5 on outcome statements from real partner logic models. You are one member of an expert panel of qualitative researchers and coders. Work independently: do not read other panelists' files (`expert-*`).

Folder: /tmp/claude-0/-home-claude-Qualitative-Outcomes-Coder/9b5fa1ab-2566-5834-8723-5a0d320c0fda/scratchpad/real120/ (call it `real120/`).

## Inputs
- `real120/comparison.csv`: 120 statements (R001..R120). For each, the codes three independent blind coders (a, b, c) gave, split into separate outcomes where they split the statement, with confidence and any codebook issue they flagged. `agreement` says whether all three gave the same set of codes ("all") or two of three ("two").
- `real120/blind/codebook-3.1.5.md`: the live coding prompt (the codebook as the coder sees it). This is the rulebook.
- Context you may read: repo /home/claude/Qualitative-Outcomes-Coder: codebook-refinement/CONFUSIONS.md (tie-breakers), codebooks/youthOutcomesV3.data.ts, design gold codebook-refinement/gold/youth_outcomes_v3.gold.csv (settled examples), codebook-refinement/research-review/2026-10-16/full-review/panel/panel-edges.md (the previous panel's rulings on edge cases; apply them where they settle a question, and say so).

## What to decide
For every statement: the code(s) it should carry under codebook 3.1.5 as written: a code id like Y1.4, "<domain> domain only" (for example "F1 domain only"), or "uncoded". If the statement holds more than one outcome, give one code per outcome, separated by " | ", in the order they appear. Split only where the statement names distinct results; do not split a single result into parts.
Give the most attention to the 23 rows where coders disagreed, but check every unanimous row too: agreement is not accuracy.

## Limits (binding)
- Never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Never write an id of the form N followed by digits.
- You will not see, and must not look for, the codes the app's coder gave these statements (do not open real120/private/ or anything under /mnt/project-files/real-run-review/ or /mnt/project-files/review-desk/).
- Do not edit repo files, run state-changing git commands, or call any mcp__hearthbot__ tool.

## Output
- `real120/expert-<role>.csv` with columns: sid, determination, confidence (high/medium/low), gap (yes/no: a specific result the codebook has no code for), reason (25 words or fewer).
- Return a summary of 10 lines or fewer: how many rows you changed from the unanimous blind codes and the main patterns.
