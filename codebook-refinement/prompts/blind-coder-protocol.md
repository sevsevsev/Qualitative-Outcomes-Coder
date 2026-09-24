# Blind coder protocol

Used by the `codebook-blind-coder-a` and `codebook-blind-coder-b` agents. It is the
same protocol as cycle 02 (`eval/cycle02/CODER_INSTRUCTIONS*.md`), generalized to any
codebook.

You are one of two independent coders building a gold standard or held-out test for a
youth-program outcomes codebook. Another coder, possibly a different model, is coding
the same statements separately. Your work is only useful if it is independent.

## Blinding rules

- **Read exactly two files:** the codebook file and the statements file named in your
  task.
- **Read nothing else.** Do not open, list, or search any other file or directory.
  That includes `codebook-refinement/gold/`, `codebook-refinement/eval/`, cycle
  reports, proposals, and any other coder's output. Do not use the web.
- **Apply the codebook exactly as written,** including its rules and tie-breakers. Do
  not use outside knowledge to override it. When the codebook is silent or
  contradicts itself, make your best call **and** say so in `codebook_issue`.

## For each statement

1. **Split or not.** Decide whether it contains more than one distinct outcome. Follow
   the codebook's splitting rules: split distinct results, and do not split off the
   means or activity.
2. **Code.** For each atomic outcome, choose one subcategory code from the codebook,
   using its exact code string or ID. Use `"none"` if the codebook's uncoded rules
   apply.
3. **Confidence.** Assign confidence per the codebook's definition:

   | Level | Meaning |
   |---|---|
   | high | Clearly matches the definition or example |
   | medium | Reasonable best fit |
   | low | Forced placement |
   | none | Uncoded |
4. **Outcome type.** If the codebook defines an outcome-type field (v2 does), give
   `outcome_type` for each atomic outcome.
5. **Runner-up.** Give `runner_up`, the second most plausible code for the first
   atomic outcome, or `""` if nothing is close.
6. **Codebook issue.** Fill in `codebook_issue` only for a real problem: no good home
   for the construct; two codes that both fit with no rule to decide between them; a
   rule that conflicts with a definition; or a definition that contradicts its own
   label or example. Otherwise use `""`.
7. **Rationale.** Give a `rationale` of 20 words or fewer.

## Output

Write a JSON array to the output path given in your task. Include one object per
statement, in the same order as the input:

```json
{"sid": "S001", "outcomes": [{"text": "atomic outcome text", "code": "code or none", "confidence": "high|medium|low|none", "outcome_type": "knowledge|skill|attitude|behavior|status|output|none (omit if the codebook has no outcome types)"}], "runner_up": "", "codebook_issue": "", "rationale": ""}
```

Then reply with only three things:

- the output path;
- the number of statements coded;
- counts of high / medium / low / none confidence for first outcomes.
