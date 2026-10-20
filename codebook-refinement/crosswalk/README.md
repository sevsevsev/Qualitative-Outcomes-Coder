# Outcome crosswalk

`youth_outcomes_v3.crosswalk.json` places every codebook 3.x code (and each domain-only code) in one lane. A lane is the District priority the outcome serves, or a lane valued on its own terms:

| Lane | What it means |
| --- | --- |
| Names a SPOTlight indicator | The outcome is the subject of an indicator: reading, math, science, attendance, graduation, the career and technical education industry test. |
| Steps toward an indicator | Research follows the outcome to an indicator: grades and on-track status, engagement, persistence, mindsets, suspensions, school readiness. |
| Board goal: graduate college and career ready | No SPOTlight measure apart from graduation. |
| Guardrail: safe, welcoming and healthy schools | Social, emotional and mental health supports. |
| Guardrail: a well-rounded education | Co-curricular opportunities, including arts and athletics. |
| Guardrail: parents and guardians as partners | Family partnership in the school community. |
| Family outcome, valued on its own terms | Family well-being, skills and basic needs. |
| Condition for quality, not a student outcome | Staff, program, access and system results. |

The goals and guardrails come from Board Bylaw 003.1. An independent verifier fetched each quote with a verbatim excerpt of 40 words or fewer (`verification/bylaw_results.csv`).

The file holds no counts and no evidence. For the research behind a code, join it by code with `../spotlight/youth_outcomes_v3.spotlight-links.json`, keeping tested and research-associated links apart. A lane says what a partner works toward, never that it moves an indicator, and it is never a score for a partner.

To change a lane, edit `lanes.csv`, then run `python3 build_crosswalk.py` and `npm test`. The lanes were drafted on 2026-10-19 for Severin's review. The working analysis, with counts and the indicator statement check, sits in the project's shared folder, `outcome-crosswalk/`.
