# CP-12-28: Official-copy host rule, with a build check (G8)

**In plain words.** Every source record in the codebook's source list points to a web copy of the
document. Some point to the official copy (the government's own copy of a law, or the publisher's own
PDF), while others point to an unofficial copy on another website, such as a law-school mirror of the
U.S. Code or a course website. Severin decided that the source list should point to the official copy,
and that an unofficial copy is acceptable only when a checker has recorded that it is the same
document (same title, authors, date and section). This change adds a check to the script that builds
the source list, so that every website is labeled official or unofficial and every unofficial copy
must name its recorded match. A short waiting list, which shrinks as checkers report back, covers the
records that do not have a match yet. The coding model never reads source records, so all of this
lands now.

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | None directly. Registry build: new host check in `codebook-refinement/v3/build_registry.py`; new tables `HOSTS`, `SECONDARY_HOST_MATCH` and `HOST_PENDING` in a new module `codebook-refinement/v3/hosts.py`. Registry `notes` on the entries in table B below. No `basis`, Source line, `frameworkBasis`, definition, include, exclude, useInstead, example or rulesText changes. |
| Version bump | PATCH against the version current when applied |
| Requirement served | R1 frameworks |
| Status | draft, decisions settled 2026-10-16 (Severin: recommended options) |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none |

Framework deviation: none. Only where a source is read changes, not what it says or which code it backs.

## Decisions applied

| Decision | Effect on this CP |
|---|---|
| G8 (cite the official copy; a secondary host only with a recorded bibliographic match) | The rule is written into the build as a check. Entries with neither an official URL nor a recorded match are listed in `HOST_PENDING` and get a verification request. |
| G10 (no-prompt parts land now) | The whole CP is registry and build code; it lands now. |
| Renumbering-style discipline (shrinking wait list with a test) | `HOST_PENDING` works like `PAIRS_WITHOUT_CF`: an entry leaves it when its match or official URL is recorded, and the build fails if a listed entry no longer needs to be there. |

## What lands now and what waits

| Change | Reaches the coding prompt? | When |
|---|---|---|
| `hosts.py` (host table, match table, pending list) and the check in `build_registry.py` | no | now |
| Match notes on the entries in table B (match already recorded by a verifier) | no | now |
| URL moves to the official copy for the entries in table C | no | as each V-HOST request returns; the entry leaves `HOST_PENDING` in the same commit |
| `mckinney-vento` | no | after PR #66 (CP-11-01 re-pins its Y1.13 support), then V-HOST-4 |

Nothing waits for the gate.

**Shared rows (whichever lands first applies them; the other drops the rows).** The per-domain CPs
already move these entries to official copies or record their matches; this CP only lists them in
`HOSTS`/`SECONDARY_HOST_MATCH` so the check passes once they land, and adds no row of its own for them:

| Entry | Owning CP | Result the check expects |
|---|---|---|
| `perkins-v` | CP-12-06 | govinfo URL (official) |
| `essa-4109-tech-capacity` | CP-12-11 | govinfo URL (official) |
| `sampson-1997` | CP-12-12 | PubMed URL (official) |
| `samhsa-tic-2014` | CP-12-10 | NCSACW copy, secondary, match a1-05 |
| `learning-for-justice-sjs` | CP-12-21 / CP-12-04 | learningforjustice.org PDF (publisher) |
| `casel-2020` | CP-12-20 | CASEL's own S3 copy (publisher) |
| `hidi-renninger-2006`, Pekrun, SEVT | CP-12-01 | DOI as URL of record; copy read and its match in notes (Hidi: V3) |
| `chafee-42usc677-a2` and the other Y3 statute entries read on Cornell | CP-12-02 | secondary, matches y3-05, y3-09, y3-10 |
| `rehab-act-29usc733-pre-ets` | CP-12-04 (V-Y5-1) | official copy |
| `wioa-title-ii-aefla` | CP-12-08 (V10) | official copy |
| `hearth-42usc11386a` | CP-12-09 (V11) | official copy |
| `watts-diemer-voight-2011` | CP-12-05 | secondary (author's lab copy), match y6-01 |

Until an owning CP lands, its entry is in `HOST_PENDING` with that CP's name beside it.

## Problem

Batch 2 R-4 and SUMMARY item 7: the registry uses Cornell LII and other secondary hosts
inconsistently, and nothing in the build notices a secondary host. Grouping today's 87 entries by URL
host (from `youth_outcomes_v3.sources.json`):

- **Statutes on law.cornell.edu (7):** `chafee-42usc677`, `digital-equity-act`,
  `digital-equity-act-1723`, `essa-4109-tech-capacity`, `idea-671-pti`, `mckinney-vento`,
  `perkins-v`. The ESSA 6311/7801 entries are already on uscode.house.gov and `naep-9622-b2d` on
  govinfo, so the same kind of source sits on different hosts.
- **Repository and third-party copies (10):** ERIC full text or record (`circle-2002-civic-indicators`,
  `conley-2007-college-readiness`, `farrington-2012`, `mapp-kuttner-2013`, `hulleman-2010-utility-value`,
  `weiss-little-bouffard-2005`), IssueLab (`reisman-2007-advocacy-policy`), County Health Rankings
  (`coffman-2009-advocacy-evaluation`), Kansas Department of Corrections (`cjca-2009`), a course wiki
  (`eccles-expectancy-value`, acmd615.pbworks.com), an author's company site
  (`muhammad-five-pursuits`, hillpedagogies.com), Advocates for Youth (`nses-2020`).
- Several were read on secondary hosts by verifiers who recorded the bibliographic match; that match
  is in a verdict file but not in the registry, so a reader cannot see why the copy is acceptable.

## Change

### New module `codebook-refinement/v3/hosts.py`

```python
"""G8 host rule (CP-12-28). Every source URL's host is classified; a secondary host needs a recorded
bibliographic match (a verifier claim id) or a place on HOST_PENDING."""

HOSTS = {
    # official: a government's own copy, or the publisher's or author-organization's own site
    'acf.gov': 'official', 'ascend.aspeninstitute.org': 'official', 'casel.s3.us-east-2.amazonaws.com': 'official',
    'cdn.iste.org': 'official', 'consortium.uchicago.edu': 'official', 'cssp.org': 'official',
    'csteachers.org': 'official', 'educationtoworkforce.org': 'official', 'eepro.naaee.org': 'official',
    'forumfyi.org': 'official', 'fyi.extension.wisc.edu': 'official', 'headstart.gov': 'official',
    'journals.sagepub.com': 'official', 'mchb.hrsa.gov': 'official', 'namle.org': 'official',
    'nnps.jhucsos.com': 'official', 'nscresearchcenter.org': 'official', 'octae.ed.gov': 'official',
    'odphp.health.gov': 'official', 'pmc.ncbi.nlm.nih.gov': 'official', 'pubmed.ncbi.nlm.nih.gov': 'official',
    'searchinstitute.org': 'official', 'shapeamerica.org': 'official', 'ssir.org': 'official',
    'stacks.cdc.gov': 'official', 'standards.learningforward.org': 'official', 'learningforward.org': 'official',
    'uscode.house.gov': 'official', 'www.govinfo.gov': 'official', 'www.ecfr.gov': 'official',
    'wida.wisc.edu': 'official', 'www.aasa.org': 'official', 'www.ascd.org': 'official',
    'www.attendanceworks.org': 'official', 'www.bls.gov': 'official', 'www.cdc.gov': 'official',
    'www.consumerfinance.gov': 'official', 'files.consumerfinance.gov': 'official',
    'www.councilforeconed.org': 'official', 'www.ed.gov': 'official', 'www.ers.usda.gov': 'official',
    'www.hhs.gov': 'official', 'www.nationalartsstandards.org': 'official', 'www.nctsn.org': 'official',
    'www.nextgenscience.org': 'official', 'www.nichd.nih.gov': 'official', 'www.socialstudies.org': 'official',
    'www.splcenter.org': 'official', 'www.learningforjustice.org': 'official', 'www.thecorestandards.org': 'official',
    'doi.org': 'official',
    # secondary: mirrors, repositories, course and third-party copies
    'www.law.cornell.edu': 'secondary', 'files.eric.ed.gov': 'secondary', 'eric.ed.gov': 'secondary',
    'measureresults.issuelab.org': 'secondary', 'www.countyhealthrankings.org': 'secondary',
    'www.doc.ks.gov': 'secondary', 'acmd615.pbworks.com': 'secondary', 'works.swarthmore.edu': 'secondary',
    'faculty.washington.edu': 'secondary', 'www.hillpedagogies.com': 'secondary',
    'www.advocatesforyouth.org': 'secondary', 'ncsacw.acf.hhs.gov': 'secondary',
}
# Hosts added by a per-domain CP are classified in that CP's commit (the check fails on an unknown host).

SECONDARY_HOST_MATCH = {  # source id -> claim whose verifier recorded the bibliographic match
    'weiss-little-bouffard-2005': 'a2-10',        # "ERIC confirms the authors, title, 2005 date, pages 15-31, Jossey-Bass and DOI"
    'reisman-2007-advocacy-policy': 'a3-01',      # "The guide is by Reisman, Gienapp and Stachowiak of ORS (2007) and was commissioned by the Annie E. Casey Foundation"
    'coffman-2009-advocacy-evaluation': 'a3-02',  # "This is the full HFRP (Coffman, 2009) document, but it is hosted by County Health Rankings"
    'nses-2020': 'y8a-19',                        # "The document gives its own citation as Future of Sex Education Initiative (2020), Second Edition"
}

HOST_PENDING = {  # source id -> what clears it; shrinks to empty
    'chafee-42usc677': 'V-HOST-1',
    'digital-equity-act': 'V-HOST-2', 'digital-equity-act-1723': 'V-HOST-2',
    'idea-671-pti': 'V-HOST-3',
    'mckinney-vento': 'PR #66, then V-HOST-4',
    'circle-2002-civic-indicators': 'V-HOST-5', 'conley-2007-college-readiness': 'V-HOST-5',
    'farrington-2012': 'V-HOST-5', 'mapp-kuttner-2013': 'V-HOST-5', 'hulleman-2010-utility-value': 'V-HOST-5',
    'cjca-2009': 'V-HOST-6', 'eccles-expectancy-value': 'V-HOST-7', 'muhammad-five-pursuits': 'V-HOST-8',
    'perkins-v': 'CP-12-06', 'essa-4109-tech-capacity': 'CP-12-11', 'sampson-1997': 'CP-12-12',
    'samhsa-tic-2014': 'CP-12-10', 'hidi-renninger-2006': 'CP-12-01 (V3)',
}
```

`www.splcenter.org` stays `official` (the Southern Poverty Law Center publishes Learning for Justice),
even after CP-12-21 moves the URL.

### Check in `codebook-refinement/v3/build_registry.py`

Inserted after the last `apply_*` call and before `registry = {...}`:

```python
# CP-12-28 (G8): official copy, or a secondary host with a recorded bibliographic match.
from urllib.parse import urlparse
from hosts import HOSTS, SECONDARY_HOST_MATCH, HOST_PENDING
for sid, rec in out.items():
    host = urlparse(rec.get('url') or '').netloc
    kind = HOSTS.get(host)
    if kind is None:
        raise SystemExit(f'{sid}: host {host!r} is not classified in v3/hosts.py (G8)')
    if kind == 'secondary' and sid not in SECONDARY_HOST_MATCH and sid not in HOST_PENDING:
        raise SystemExit(f'{sid}: secondary host {host} needs a recorded bibliographic match (G8)')
    if sid in SECONDARY_HOST_MATCH:
        note = f'Secondary host ({host}); bibliographic match recorded in claim {SECONDARY_HOST_MATCH[sid]} (G8).'
        if note not in (rec.get('notes') or ''):
            rec['notes'] = ((rec.get('notes') or '') + ' ' + note).strip()
stale = [sid for sid in HOST_PENDING if sid in out and HOSTS.get(urlparse(out[sid].get('url') or '').netloc) == 'official']
if stale:
    raise SystemExit(f'remove from HOST_PENDING (now on an official host): {stale}')
```

The build fails on an unclassified host, on a secondary host with no match and no pending entry, and
on a pending entry that has already moved. That last rule makes the list shrink as the owning CPs
land. An entry that a verifier confirms on a secondary host moves from `HOST_PENDING` to
`SECONDARY_HOST_MATCH` instead.

### Registry, table B: match notes added now (from `SECONDARY_HOST_MATCH`)

| Entry | Host | Note text added by the build |
|---|---|---|
| `weiss-little-bouffard-2005` | eric.ed.gov | "Secondary host (eric.ed.gov); bibliographic match recorded in claim a2-10 (G8)." |
| `reisman-2007-advocacy-policy` | measureresults.issuelab.org | "... claim a3-01 (G8)." |
| `coffman-2009-advocacy-evaluation` | www.countyhealthrankings.org | "... claim a3-02 (G8)." |
| `nses-2020` | www.advocatesforyouth.org | "... claim y8a-19 (G8)." |

`weiss-little-bouffard-2005` is still `located` until CP-12-11 lands; the note does not change its status.

### Registry, table C: URL moves on return (in the batch module of the commit that clears each)

| Entry | Today | After V-HOST returns |
|---|---|---|
| `chafee-42usc677` | law.cornell.edu/uscode/text/42/677 | the official U.S. Code URL the verifier read (govinfo or uscode.house.gov) |
| `digital-equity-act`, `-1723` | law.cornell.edu/uscode/text/47/1721, /1723 | same |
| `idea-671-pti` | law.cornell.edu/uscode/text/20/1471 | same |
| `mckinney-vento` | law.cornell.edu/uscode/text/42/11432 | same, at the pinpoint PR #66 sets |
| ERIC entries (5), `cjca-2009`, `eccles-expectancy-value`, `muhammad-five-pursuits` | as listed above | the publisher's copy if the verifier finds and reads one; otherwise the URL stays and the entry moves to `SECONDARY_HOST_MATCH` with the verifier's match claim |

A URL move keeps the entry's excerpt only if the verifier read that excerpt on the new copy;
otherwise the new claim's excerpt replaces it (`SOURCE_EXCERPT`).

### `codebooks/`, rulesText, `CONFUSIONS.md`, `DEVIATIONS.md`

Unchanged.

## Sources

No new citations. The match claims above (a2-10, a3-01, a3-02, y8a-19) are verified rows in
`/mnt/project-files/research-review/full-review/batch3/verify/` and `batch4/verify/`
`verification-table.md`; they back notes only, not supports.

| Registry ID | Status | Component relied on |
|---|---|---|
| weiss-little-bouffard-2005 | located (verified by CP-12-11) | bibliographic match only (a2-10) |
| reisman-2007-advocacy-policy | verified | bibliographic match only (a3-01) |
| coffman-2009-advocacy-evaluation | verified | bibliographic match only (a3-02) |
| nses-2020 | verified | bibliographic match only (y8a-19) |

## Verification requests

Each goes to `codebook-citation-verifier`, which sees only these fields. The claimed component is
the source's existing component, so a returned verdict both checks the content and records the copy.

```
V-HOST-1  claim_id: host-chafee-677a1 · code: Y7.7 · cite_as: 42 U.S.C. 677(a)(1), John H. Chafee Foster Care Program for Successful Transition to Adulthood · claimed_component: the purpose in 677(a)(1) as worded in the registry component; record the official copy read and its section heading. · url: https://www.govinfo.gov/link/uscode/42/677
V-HOST-2  claim_id: host-dea-1721-1723 · code: F1.6, A2.3 · cite_as: Digital Equity Act of 2021, 47 U.S.C. 1721 and 1723(c)(1)(B) · claimed_component: the definitions and the State Digital Equity Plan measurable objectives as worded in the registry components; record the official copy read. · url: https://www.govinfo.gov/link/uscode/47/1721
V-HOST-3  claim_id: host-idea-1471 · code: F1.7 · cite_as: Individuals with Disabilities Education Act, section 671(b), 20 U.S.C. 1471(b): Parent Training and Information Centers · claimed_component: the 1471(b) required activities as worded in the registry component; record the official copy read. · url: https://www.govinfo.gov/link/uscode/20/1471
V-HOST-4  (send after PR #66 merges) claim_id: host-mckinney-vento · code: Y1.13, F2.3 · cite_as: the cite_as PR #66 leaves · claimed_component: the pinpoint PR #66 sets · url: https://www.govinfo.gov/link/uscode/42/11432
V-HOST-5  claim_id: host-eric-<entry> (one per entry: circle-2002-civic-indicators, conley-2007-college-readiness, farrington-2012, mapp-kuttner-2013, hulleman-2010-utility-value) · code: the entry's codes · cite_as: the entry's cite_as · claimed_component: the bibliographic details (authors, title, year, publisher, and for Hulleman the journal, volume, pages and DOI) of the copy at the URL; say whether the publisher's own copy is available and, if so, read the component there. · url: the entry's registry URL
V-HOST-6  claim_id: host-cjca-2009 · code: Y8.13 · cite_as: the cite_as CP-12-07 sets · claimed_component: whether the copy at the URL is the full 2009 CJCA white paper (title page, authors, date). · url: https://www.doc.ks.gov/juvenile-services/committee/documentation/6-2017/CJCA/view
V-HOST-7  claim_id: host-eccles-2000 · code: Y2.4 · cite_as: Wigfield, A., & Eccles, J. S. (2000). Expectancy-value theory of achievement motivation. Contemporary Educational Psychology · claimed_component: the bibliographic details (journal, volume, pages, DOI) of the copy at the URL, and the DOI landing page if the copy shows a DOI. · url: https://acmd615.pbworks.com/f/ExpectancyValueTheory.pdf
V-HOST-8  claim_id: host-muhammad · code: Y2.1, Y5.2, Y6.3 · cite_as: Muhammad, G. Five Pursuits Framework · claimed_component: whether the page is the author's own description of the framework (author named on the page) and the book it names. · url: https://www.hillpedagogies.com/
```

V-HOST-6 does not repeat CP-12-07's NCJRS work: y8b-14 confirmed the bibliographic record but not the
full text ("I could not find the 47-page full text online").

## Gold impact

- Rows expected to change code: none (no prompt change).
- New proposed rows: none. Held-out gold was not read.

## Judge result

Not run. The check runs in `python3 codebook-refinement/v3/build_registry.py`; `npm test`
(`registry.test.ts`) confirms the rebuilt JSON.
