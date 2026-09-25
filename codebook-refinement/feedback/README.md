# Visitor feedback from the public explorer site

Approved feedback from the public codebook explorer (see "Public codebook explorer
site" in the root README) is exported here as CSV files, one per export:
`feedback-YYYY-MM-DD.csv`, downloaded from the site's `#/admin` page with the
"Approved" tab selected and "Include emails" left off.

## What these files are, and are not

- **Leads, not evidence.** A visitor saying "X is missing" or "this code is unclear"
  is a reason to look, like a coverage-audit finding. It is never a citation and
  never a gold label.
- **Nothing here changes a codebook.** Any change it prompts goes through a change
  proposal in `../proposals/` and the gates in `../STANDARDS.md` S4, like any other
  change. Only Severin approves.
- **Codes are as the visitor saw them.** Each row records `codebook_version`,
  `target_code` and `target_label`. If the version is older than the current
  codebook, translate numbers with `../renumbering/` before acting on them.
- **No emails in the repo.** Keep the default export, which leaves emails out.

## Columns

`id, created_at, status, reviewed_at, codebook_id, codebook_version, target_type,
target_code, target_label, kind, body, example_statement, related_code, name, organization`

- `target_type`: `code`, `domain`, or `general` (the whole codebook; `target_code` is blank).
- `kind`: the prompt the visitor tapped, or `comment` when they tapped none:
  `unclear` (definition unclear), `overlap` (hard to tell apart from another code),
  `missing` (an outcome with no home), `wording` (how their program would word it),
  `source` (a source to check; still needs a verifier before it can be cited).
  Rows exported before 2026-09-25 only use `comment` and `missing`.
- `example_statement`: an outcome statement from the visitor's own program, when given.
  It is a candidate edge case, not a gold row: it needs human coding first.
- `related_code`: for `overlap`, the code the visitor says it gets confused with, when
  picked. Treat the pair as a lead for `../CONFUSIONS.md`, not as a tie-breaker.
- Feedback sent from "Try it" starts with `Statement:` and `Coded as:` lines, so it
  can also be read as a candidate edge case for `../eval/`, after human coding.

## Using it in a cycle

The coverage auditor and confusion miner can read these files as input. Group rows by
target, drop duplicates, and treat each theme as a finding that still needs its own
evidence before a CP is drafted.
