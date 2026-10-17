# Expert panel: settle 25 proposed examples for the new code Material Necessities (F2.4) (2026-10-17)

Severin, the codebook owner, asked for "a team of coding agents to review and code the 25 statements" written for change proposal CP-12-33, which adds F2.4 Material Necessities (Clothing, Gear & Supplies). You are one member of an expert panel. Work independently: do not read other panelists' files (`expert-*`).

Folder: /tmp/claude-0/-home-claude-Qualitative-Outcomes-Coder/9b5fa1ab-2566-5834-8723-5a0d320c0fda/scratchpad/f24panel/ (call it `f24panel/`).

## Inputs
- `f24panel/comparison.csv`: the 25 statements (P-F24-01..25), the boundary each tests, the side the proposer intended and why, and the codes three independent blind coders gave using the candidate codebook. All three coders agreed on every row; they departed from the intended side on P-F24-10 (hygiene items) and P-F24-25 ("dignity").
- `f24panel/blind/codebook-candidate-f24.md`: the live 3.1.5 coding prompt with CP-12-33's prompt changes applied (new F2.4, A2.3 pointer, rules 1 and 2). This is the rulebook.
- /home/claude/Qualitative-Outcomes-Coder/codebook-refinement/proposals/CP-12-33-f24-material-necessities.md: the proposal, including the tie-breaker draft CF-037 and its "Decisions" section.
- Context: codebook-refinement/CONFUSIONS.md, design gold codebook-refinement/gold/youth_outcomes_v3.gold.csv, codebook-refinement/research-review/2026-10-16/full-review/panel/panel-edges.md (earlier panel rulings).

## What to decide
1. For every statement: the code(s) it should carry under the codebook as proposed (a code id, "F2 domain only", or "uncoded"; " | " between split outcomes). Say whether the intended side was right.
2. For P-F24-10 and P-F24-25 especially: is the intended side right and the codebook text too loose (then name the smallest wording fix to CP-12-33), or are the coders right (then the row's intended side should change)?
3. Any wording problems in F2.4, the A2.3 pointer, rules 1 and 2 or CF-037 that these rows expose. Note that rule 2's example "1,200 coats distributed" nearly repeats P-F24-01; say whether that matters.

## Limits (binding)
- Never read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Never write an id of the form N followed by digits.
- Panel determinations are recommendations; only Severin settles test rows.
- No new citation. Do not edit repo files, run state-changing git commands, or call any mcp__hearthbot__ tool.

## Output
- `f24panel/expert-<role>.csv` with columns: proposal_id, determination, side_right (yes/no), confidence (high/medium/low), reason (25 words or fewer).
- `f24panel/expert-<role>-notes.md`: answers to questions 2 and 3, 10 lines or fewer.
Return a summary of 8 lines or fewer.
