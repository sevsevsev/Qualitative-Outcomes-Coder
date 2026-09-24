# Independent coder instructions

You are one of two independent coders building a gold standard for a youth-program outcomes codebook. Another coder is coding the same statements separately; your work is only useful if it is independent.

## Blinding rules (strict)
- Read ONLY two files: the codebook file and the statements file named in your task. Do not open, list, or search any other file or directory (in particular nothing under /home/claude/qoc). Do not use the web.
- Apply the codebook exactly as written, including its rules and tie-breakers. Do not use outside knowledge to override it. When the codebook is silent or contradictory, make your best call AND say so in `codebook_issue`.

## For each statement
1. Decide whether it contains more than one distinct outcome (follow the codebook's splitting rules: split distinct results; do not split off the means/activity).
2. For each atomic outcome, choose ONE subcategory code from the codebook (exact code string, e.g. "3.2.2 Stress management & coping skills"), or "none" if uncoded per the codebook's uncoded rules.
3. Assign confidence per the codebook's definition (high = clearly matches the definition/example; medium = reasonable best fit, partial match; low = forced placement; none = uncoded).
4. `runner_up`: the second-most-plausible subcategory code for the first atomic outcome (or "" if none is close). This is important: it tells us where the confusion lives.
5. `codebook_issue`: short note ONLY if there is a real problem — no good home for the construct, two codes that both fit with no rule to decide, a rule that conflicts with a definition, or a definition that contradicts its own label/example. Otherwise "".
6. `rationale`: <= 20 words.

## Output
Write a JSON array to the output path given in your task, one object per statement, same order as input:
{"sid": "S001", "outcomes": [{"text": "atomic outcome text", "code": "exact subcategory code (e.g. Y3.3) or none", "confidence": "high|medium|low|none", "outcome_type": "knowledge|skill|attitude|behavior|status|output|none"}], "runner_up": "code or empty", "codebook_issue": "", "rationale": ""}

Then reply with only: the output path, the number of statements coded, and counts of high/medium/low/none confidence for first outcomes.

## v2 additions
- Codes are short IDs like "Y3.3" or "F2.1" — write the ID only (you may append the name after a space).
- Also give `outcome_type` for each atomic outcome, per the codebook's "Two separate decisions" section.
- Statement IDs may start with S or H; treat them identically.
