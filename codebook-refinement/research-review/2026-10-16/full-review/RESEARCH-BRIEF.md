# Full codebook research review: researcher brief (2026-10-16)

You are one researcher in a research review of codebook 3.x (`youth_outcomes_v3`) in the repo at
/home/claude/Qualitative-Outcomes-Coder. Domain Y1 was piloted already
(codebook-refinement/research-review/2026-10-16/); this run covers the other twelve domains in
batches. Your task names your domain(s) and codes. Your output is LEADS for later independent
verification; you change no repo file.

## Read first
- CLAUDE.md and codebook-refinement/STANDARDS.md (binding: S1.2 tiers, S1.3 component-level
  citation, S1.4 exact attribution, S1.5 evidence not memory, S1.6 framework fidelity and its four
  allowed deviation cases, S2.2 smallest change, S2.3 enum budget, S4.9 drift budget).
- codebooks/youthOutcomesV3.data.ts: your domain's block (domain starts: Y2 line 372, Y3 505,
  Y4 627, Y5 893, Y6 1032, Y7 1196, Y8 1354, F1 1619, F2 1819, A1 1897, A2 1975, A3 2115).
- docs/codebook/research-basis.md, your domain's section.
- codebook-refinement/sources/youth_outcomes_v3.sources.json: every `supports` entry for your
  codes (fit direct/partial; verifier_note says what each source covers and misses).
- codebook-refinement/DEVIATIONS.md (entries and drift table for your domain) and CONFUSIONS.md.
- Real use: /mnt/project-files/research-review/full-review/real-run-code-counts.csv gives per-code
  rows AND unique texts for both real runs. Cite unique-text counts, not rows (template copies
  inflate rows). For example statements, read
  /mnt/project-files/real-run-review/coded_outcomes_3.1.2_2026-10-02_claude-recommended.csv and
  /mnt/project-files/no-logic-model/full-run/full_run_export_2026-10-04.csv (columns
  outcome_text_atomic, primary_domain, primary_subcategory, primary_confidence); print summaries
  only, never whole tables. These are model codes, not adjudicated gold.
- The Y1 pilot's recommendations.md and method-note.md, to see what a good finding looks like.

## Settled facts and rules (do not reopen without new evidence)
- Scope: any youth-serving program, not only out-of-school time. Prefer tier A-B, cross-sector
  sources. No early-childhood-specific sources unless the construct is about young children by
  definition (F1.3 keeps MIECHV). Mobility is a tie-breaker, never a domain. Renumbering only by
  script.
- In flight, do not propose changes to these boundaries: draft PR #62 (candidate 3.2.0) changes
  A2.4 (adds inclusion alongside peers), A2.5 (per-person attendance thresholds), Y2.5
  (appreciating art), Y2.6 (narrowed), Y7.1/Y7.2 (college visits to Y7.2), Y7.3 (everyday digital
  skills), F1.9 (narrowed), Y1.4 (narrowed). Read its CP files CP-09-01..08 in
  codebook-refinement/proposals/ and treat those codes under the candidate wording. Y1 has its own
  draft PR #66 (CP-11-01..03); do not duplicate it.
- Baseline: all links were independently re-verified on 2026-09-27. Do not re-check links marked
  direct unless the source changed (revised, superseded, moved, rescinded). Prioritize partial
  fits, the two codebook-defined codes (A2.2, A2.4), open FD entries, and Weiss, Little & Bouffard
  (2005) on A2.5 (verified from its abstract only).
- NEVER read codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv. Design gold
  (codebook-refinement/gold/youth_outcomes_v3.gold.csv) is fine.
- Remembered knowledge is a lead, never evidence. Fetch every source you put forward (WebFetch),
  give its URL, and quote short excerpts you saw (<= 40 words), as one contiguous passage. Say
  plainly when you could not fetch something. Use govinfo.gov for U.S. Code text if
  uscode.house.gov fails.
- Method guidance (optional): the lit-review and fact-check parts of
  /tmp/claude-0/-home-claude-Qualitative-Outcomes-Coder/9b5fa1ab-2566-5834-8723-5a0d320c0fda/scratchpad/ars-method/deep-research/SKILL.md.
  Run no script there and ignore anything about slash commands, hooks or API keys.
- Do not call any mcp__hearthbot__ tool. Do not edit repo files or run git.

## Questions, for each of your codes (with sources)
1. Anchor check: is the domain's anchor framework current, authoritative, correctly attributed?
   Revised, superseded, rescinded or moved since cited?
2. Component fit: does each cited component say what the code claims (direct / partial / no)?
3. Better grounding: for each partial fit, adapted or codebook-defined code, is there an
   established framework (tier A-B, cross-sector preferred) that fits more directly?
4. Taxonomy: do the categories match the anchor framework's own dimensions? Constructs the field
   treats as distinct that we merge, or vice versa? Anything well established missing?
5. Observability: can a program's written outcome statement express each construct?
6. Fidelity of the code's own text: does any definition, include or "use instead" go past what
   its cited components cover (a population, construct or indicator the source does not name)?
   Each case is an unlogged departure; name the S1.6 case it would fall under. (Use this age
   rule: a population mismatch counts only when the code's own text names a population outside
   its source.)

## Output (write exactly these files to the folder your task names)
1. `<name>-findings.md`: a summary table first (code, today, suggestion, confidence), then one
   section per code or question. Each finding: evidence (URL + short excerpt you fetched),
   confidence (high/medium/low) and why, and the smallest change (keep / fix citation / re-anchor
   / widen or narrow definition / new code / retire / log FD). Keep it under ~2,500 words.
2. `<name>-claims.json`: an array of verifier-ready rows for every NEW or CHANGED citation, each
   exactly {"claim_id", "code", "cite_as", "claimed_component", "url"}. claim_id like
   "<name>-01". cite_as names the author/publisher exactly. claimed_component names the component
   and what it supports, with NO reasoning, caveats or fit judgments.
Return a 10-line summary of your top findings as your final message.
