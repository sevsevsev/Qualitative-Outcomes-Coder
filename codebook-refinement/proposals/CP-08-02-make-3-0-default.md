# CP-08-02: Make codebook 3.0 the default

| Field | Value |
|---|---|
| Type | RULES (which codebook is the default; no codebook text changes) |
| Codes touched | none |
| Version bump | none: 3.0.0 content is unchanged; only the label drops "(testing)" |
| Requirement served | R1 frameworks · R2 breadth · R3 tie-breakers · R4 drift (through CP-08-01) |
| Status | approved (Severin, 2026-09-26) |
| Enum cost | +0 (160) |
| Framework deviation | none |

## Problem

Codebook 3.0 (CP-08-01) was built beside 2.5.x as a testing codebook. The coder app still
opened on 2.5.x, and the public explorer showed only 2.5.x.

## Evidence (CP-08-01 results)

- Design set, 153 rows quoted in neither prompt: 3.0 96.7% lenient vs 2.5.2 about 92.5%,
  each on its own adjudicated gold.
- Fresh held-out set (100 unseen statements, adjudicated by Severin without seeing the
  app's answers): 86.0% lenient, 85.0% strict in both runs, kappa 0.969. On the 36 hard
  rows the app matched about as often as either blind coder (25 and 24 vs 22 and 24).
- Gemini accepted the 160-value schema in every live run.

## Change

- `codebooks/index.ts`: `DEFAULT_CODEBOOK_ID` = `youth_outcomes_v3`. The coder app opens on
  3.0; 2.5.x and Accelerate Philly stay in the codebook menu.
- `codebooks/youthOutcomesV3.ts`: label "Youth Outcomes Codebook 3.0" (was "... (testing)").
- `services/explorerCodebooks.ts`: `DEFAULT_EXPLORER_CODEBOOKS` = `['youth_outcomes_v3']`.
  Severin asked (2026-09-26) that the public explorer show only 3.0 and that the landing
  sunburst show 3.0's domains. With one codebook the site shows no switcher, and the
  landing page and Try-it box use 3.0. Setting `VITE_EXPLORER_CODEBOOKS` in Vercel still
  overrides this.
- CLAUDE.md "Current state" and the README explorer settings line.

Existing visitor feedback was left on 2.5.x codes. The explorer no longer shows it, and
new feedback is on 3.0 codes. Past feedback in `codebook-refinement/feedback/` stays as
leads.

## Sources

None changed.

## Gold impact

None. Future default-codebook evals use `gold/youth_outcomes_v3.gold.csv`; the fresh
held-out set has been used once and is design data for any fix made from its misses.

## Judge result

Not run: no codebook content changes. Approval is Severin's decision on the CP-08-01
results.
