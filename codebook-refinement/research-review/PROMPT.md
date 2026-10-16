# Codebook research review: prompt for a new thread

Use a workflow for this. Review the research basis of codebook 3.x (`youth_outcomes_v3`): validate its sources, find better or newer ones, and test whether the taxonomy itself is well grounded. Then have independent agents challenge the findings and turn them into ranked recommendations. Do not edit the codebook, the registry or gold; stop at recommendations and draft CPs for my review.

**Scope:** {SCOPE: start with Y1 Academic as a pilot, then the remaining 12 domains in batches of 3-4}

## Ground rules (read first)
- Read CLAUDE.md, `codebook-refinement/STANDARDS.md`, `DEVIATIONS.md`, `CONFUSIONS.md`, `docs/codebook/research-basis.md`, the latest cycle report, and `codebook-refinement/sources/youth_outcomes_v3.sources.json`. STANDARDS wins over anything below.
- Research agents' findings are leads only. A citation counts only after our `codebook-citation-verifier` fetches it and records a verbatim excerpt of 40 words or fewer. The verifier gets only `{claim_id, code, cite_as, claimed_component, url}`, never the researcher's reasoning.
- Scope rule: the codebook covers any youth-serving program, not just out-of-school time. Prefer tier A-B sources (statute, federal framework, standards body) that span sectors; no early-childhood-specific sources (F1.7's MIECHV home-visiting measures are the one exception). Academic outcomes are the top priority.
- Settled decisions stay settled unless new evidence is verified: mobility is a tie-breaker, not a domain; any renumbering is a generated map applied by script, never by hand; open edge-case CPs CP-09-01..08 already exist, so build on them instead of duplicating them.
- The 2026-09-27 re-verification (PR #47) is the baseline: don't re-verify links already marked direct fit unless the source has changed. Prioritize partial fits, the two codebook-defined codes (A2.2, A2.4), and Weiss et al. 2005 (verified from its abstract only).
- Never put held-out gold statements in any prompt, and don't base a fix on held-out misses (that spends the set). Never set gold to adjudicated.
- Keep the enum budget in view (STANDARDS S2.3) and prefer the smallest change that fits (S2.2).

## Phase 1: Research (one research agent per domain, run in parallel)
For each domain in scope, run a research agent (WebSearch and WebFetch) that does an integrative literature review of the domain and a fact-check of its existing citations. Prefer primary sources (statutes, agency frameworks, standards bodies, peer-reviewed papers) and record a URL for every claim. Each pass answers, with sources:
1. **Anchor check.** Is the domain's anchor framework still current, authoritative and correctly attributed? Has it been revised, superseded or rescinded since it was cited?
2. **Component fit.** For each code: does its cited component actually say what the code claims (direct, partial, or no fit)? Flag codes whose definition drifts from the source.
3. **Better grounding.** For each adapted or codebook-defined code (DEVIATIONS.md) and each partial fit, is there an established framework that fits more directly?
4. **Taxonomy.** Do the domain's categories match the anchor framework's own dimensions? Are there constructs the field treats as distinct that we merge, or vice versa? Is anything well established in the literature on youth outcomes missing?
5. **Observability.** Can a program's written outcome statement actually express each construct (STANDARDS S1.6 observability case)?
Output per domain: a findings file with a claims list (every new or changed citation as a verifier-ready row) and a confidence note on each finding.
6. **Fidelity of the code's own text.** Does any code's definition, include or "use instead" go past what its cited components cover (a population, a construct or an indicator the source does not name)? Each such case is an unlogged departure: flag it with the S1.6 case it would fall under.
Give each researcher per-code counts of unique outcome texts (not rows) from the real runs (`/mnt/project-files/real-run-review/` and `/mnt/project-files/no-logic-model/full-run/`), so template copies don't inflate them.

## Phase 1b: Reconcile (added after the Y1 pilot)
One agent with fresh context reads every findings file for the batch and writes `reconciliation.md`: where researchers disagree (for example two different replacement anchors for one code), where one researcher's change breaks another's, duplicate or overlapping claims, and findings that touch in-flight CPs or PRs. It merges the claims into one list (dropping duplicates and stripping any reasoning from the rows) and marks each conflict for the reviewers. It decides nothing; reviewers see its file alongside the findings.

## Phase 2: Verify
Send every new or changed citation from the reconciled claim list to `codebook-citation-verifier` (claim list only). Tell the verifier to re-fetch rather than join fetch-tool fragments into one excerpt, and to give PARTIAL whenever its own note says the fit is partial. Record SUPPORTED / PARTIAL / MISATTRIBUTED / UNSUPPORTED with excerpts. Drop anything not verified from later phases, but list it as an unverified lead.

## Phase 3: Independent review (separate agents, fresh context, see only verified findings)
- **Taxonomy reviewer:** reads `docs/codebook/research-basis.md` plus the Phase 1 findings as if refereeing the methods section of a paper. Is the Part → domain → category → code structure defensible, and is each anchor choice justified?
- **Framework-fidelity reviewer:** checks each proposed change against STANDARDS S1.6 and the drift budget (S4.9).
- **Practitioner and coder reviewer:** would this change help code real Philadelphia partner logic models? Check against the real-run review leads (adult volunteering, digital and career skills, split multi-outcome statements) and against confusable pairs in CONFUSIONS.md.
- **Devil's advocate:** argues for keeping the current codebook as is on every recommendation, and names the cost of each change (enum footprint, retraining, comparability with past codings).

## Phase 4: Recommendations
Synthesize into one ranked list. Each item: the code or domain, the finding, the verified evidence (with excerpt), reviewer verdicts including dissent, the smallest change that fits (keep / fix citation / re-anchor / widen or narrow definition / new code / retire), CP type and version bump, framework-deviation line (none / new FD / changed FD), and enum cost. Separate "act now" from "worth a later cycle" from "rejected, and why".
Then have `codebook-change-drafter` write draft CPs for the "act now" items only, with status draft.

## Deliverables
- `codebook-refinement/research-review/<date>/`: per-domain findings, the verification table, reviewer reports, and `recommendations.md`.
- A draft PR with those files and the draft CPs (no codebook, registry or gold edits).
- One reply to me with the top recommendations and the decisions only I can make.
