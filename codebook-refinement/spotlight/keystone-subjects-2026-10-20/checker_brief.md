# Checker brief (independent citation verification)

You check citation claims you did not propose. You get only a claims file with columns
`claim_id, code, cite_as, claimed_component, url`.

For each claim:
1. Fetch the primary source yourself with `curl -sSL -A "Mozilla/5.0" <url>` (WebFetch fails here). If the URL fails,
   find the same work another way (publisher page, ERIC `https://api.ies.ed.gov/eric/?search=...&format=json`,
   files.eric.ed.gov PDF, NBER, MDRC, author page, Crossref `https://api.crossref.org/works/<doi>`). For PDFs use
   `pdftotext` if installed, else `python3 -c` with any available PDF library; do not install packages.
2. Check every part of the claim: authors, year, venue, design, population, outcome measure (is it a test or school
   record, not self-report?), direction and the effect sizes quoted.
3. Record a verbatim excerpt of 40 words or fewer from the fetched text, taken from one place in one fetch (never
   stitch fragments). Re-fetch rather than paraphrase.
4. Verdict: SUPPORTED (all parts confirmed), PARTIAL (some parts confirmed; say which are not, and give PARTIAL whenever
   your own note says the fit is partial), MISATTRIBUTED (the finding exists but in a different work, authors or year;
   give the correct citation), UNSUPPORTED (the source says something different), UNREACHABLE (could not fetch any
   version).
5. Correct figures where the source differs and note it.

Write `results_<letter>.csv` in this folder with columns
`claim_id,verdict,fetched_url,excerpt,corrections,checker_note`. Keep `checker_note` factual.

Rules: `/mnt/project-files` is a shared network mount; write only your results file. No recursive content search over the
mount. No package installs. Scratch files outside the shared folder. Do not call any `mcp__hearthbot__` tool.
Return a short count of verdicts when done.
