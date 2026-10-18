# Evidence registry

The research reference for reviewing whole logic models: which program models have been
tested, what each one requires, and which steps from an outcome to a result the research
supports. It serves the logic model checks planned on 2026-10-18 (causal connections, and
match to tested program models). Why a registry and not a vector database:
[recommendation](https://claude.ai/code/artifact/fdc33556-a013-4889-9f21-5e4ede81f647).

It is not part of the codebook and never part of the coding prompt.

## Files

- `program_models.csv`: one row per tested program model. `source_links` names the tested
  SPOTlight links it comes from; `claim_ids` adds the registry's own checked claims.
  `required_features` (semicolon list, for example "who delivers: paid, trained tutors")
  is filled from the rubric for the match to tested program models; until then
  `features_status` says so.
- `pathways.csv`: the registry's own pathways, beyond the SPOTlight links: a step from an
  outcome code or an activity to a result, with `tier` = `tested`, `research-associated`
  or `checked, not supported`.
- `verification/batchN_claims.csv` and `batchN_results.csv`: what each independent checker
  was given, and what it found. Registry claim ids are `E-001`, `E-002` and so on.
- `evidence_registry.json`: built by `python3 codebook-refinement/evidence-registry/build_registry.py`.
  Never edit it by hand. `codebook-refinement/evidenceRegistry.test.ts` checks it.

The SPOTlight links (`../spotlight/`) come in as pathways unchanged, with their claims.
That folder belongs to the SPOTlight review; this folder only reads it. When the review
adds links or checked claims, rebuild here and they appear.

## The rules

- Evidence credits program models, not wording. A code or wording alone never earns more
  than "possible link, model not confirmed".
- A claim enters only after an independent checker, not the agent that found the study,
  fetched the source and recorded a verbatim excerpt of 40 words or fewer. Remembered
  knowledge is a lead, never evidence.
- A `tested` program model or pathway needs at least one fully supported claim.
  `research-associated` uses the SPOTlight bar: a meta-analysis, or several long-term
  studies that adjust for earlier achievement or attendance, worded "is associated with".
- "Checked, not supported" entries stay. They tell a reviewer the research was looked at.
- No partner scores or rankings are built from this file.

## Adding to it

The registry is meant to keep growing. Each round:

1. **Find leads.** Sources: program models named in partners' logic model activities that
   match no registry model; outcome codes with no pathway; program evaluation
   clearinghouses; the SPOTlight review's own new searches. Leads are unverified.
2. **Write the claims** to `verification/batchN_claims.csv` (claim_id, cite_as, url,
   claimed_finding), next free `E-` numbers.
3. **Check them independently.** A separate checker fetches each source (in cloud threads,
   with curl) and writes `batchN_results.csv`: claim_id, verdict (SUPPORTED, PARTIAL,
   UNSUPPORTED, MISATTRIBUTED), correct_citation, fetched_url, design, population_location,
   outcome, effect_as_reported, excerpt, note.
4. **Add the rows** to `program_models.csv` or `pathways.csv`, citing only accepted claims.
5. **Rebuild, run `npm test`, open a pull request.** Bump `VERSION` in the builder: minor
   for new models or pathways, patch for corrections. Severin merges.
