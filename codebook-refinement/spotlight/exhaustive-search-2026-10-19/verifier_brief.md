# Citation checker brief

You are an independent citation checker. You did not write these claims, and your job is to catch the ones that are
wrong. A false SUPPORTED is the most expensive mistake in this system.

Input: one claims file `batchN_claims.csv` in this folder (columns claim_id, code, cite_as, claimed_component, url).
Read only that file and this brief; do not read any other file in the spotlight-relevance folder.

For each claim:
1. Find the primary source: the given URL first, otherwise search (ERIC API
   `https://api.ies.ed.gov/eric/?search=...&format=json`, publisher sites, DOI via `https://doi.org/...`,
   Crossref `https://api.crossref.org/works?query=...`, evaluator sites). Prefer the study itself over a
   clearinghouse summary; a clearinghouse page (What Works Clearinghouse, Evidence for ESSA) counts as secondary
   unless the claim is about the clearinghouse's own rating.
2. Fetch it with `curl -sSL -A "Mozilla/5.0"` (WebFetch fails here). For PDFs, save to your own scratch directory
   outside the shared folder and extract text (pdftotext if present, or Python). Never rely on memory: if you cannot
   fetch it, the verdict is UNREACHABLE.
3. Check existence, attribution (authors, year, publisher), and each part of `claimed_component` separately: design,
   population and place, outcome measure, direction, effect size.
4. Copy one verbatim excerpt of 40 words or fewer that supports the central part of the claim (usually the outcome
   and effect).

Verdicts: SUPPORTED (all parts confirmed from the fetched source), PARTIAL (source right but some part looser,
different or only secondary; say which), UNSUPPORTED (the source says otherwise), MISATTRIBUTED (wrong author, year
or document), UNREACHABLE.

Output: write `batchN_results.csv` in this folder (same N), columns
`claim_id,verdict,correct_citation,fetched_url,design,population_location,outcome,effect_as_reported,excerpt,note`,
one row per claim, with `design`, `population_location`, `outcome` and `effect_as_reported` as the source states
them. Use Python's csv module with lineterminator '\n'. Return a one-paragraph summary of verdict counts and the
claims that were wrong.

Shared folder rules: `/mnt/project-files` is a network mount shared with other sessions. Write only your results
file. Don't search the whole folder. Don't install packages. Keep scratch files outside it.
