# CP-12-11: A2 citation fixes and the FD-P18 anchor line

| Field | Value |
|---|---|
| Type | CITATION_FIX (with the FD-P18 text correction it requires; recommendations "CP-B4-02") |
| Codes touched | A2.2 (`basis`; FD-P18 text; new registry source). A2.3 (`basis`; registry `essa-4109-tech-capacity`; status note on `digital-equity-act` and `digital-equity-act-1723`, shared with F1.6). A2.5 (`basis`; registry `weiss-little-bouffard-2005` component and `cite_as`). A2.6, F1.7, F1.8 (registry note on `mapp-kuttner-2013` only). No definition, include, exclude, useInstead, example, Source line, `frameworkBasis` or rulesText changes. **A2.4 and A2.5 scope (PR #62) are not touched.** |
| Version bump | PATCH, against whatever version is current at apply time (3.1.4 today; after PR #62 / PR #66 if they merge first) |
| Requirement served | R1 frameworks |
| Status | draft (batch 4 research review, 2026-10-16); not applied |
| Enum cost | +0 (160 → 160) |
| Framework deviation | changed FD-P18 (text only: Anchor, Departs, Decided in, Revisit). Fidelity stays codebook-defined, and A2 drift is unchanged at 2/6. No new FD. |

Framework deviation: changed FD-P18 (text only); A2 drift unchanged at 2/6.

## Problem

From the recommendations ("Act now", CP-B4-02, items 6 to 10; item 11 is in CP-12-18):

6. **A2.2's `basis` and FD-P18 name a source that is not in the registry** ("Urban Institute
   Candidate Outcome Indicators, mentoring"). That breaks S1.1. a2-01 (PARTIAL) and a2-11
   (SUPPORTED) read the Urban Institute's *Building a Common Outcome Framework* (2006), which
   names satisfaction as a program-centered outcome. Families are not covered, and neither is
   perceived safety, which adjudicated row H002 depends on.
7. **ESSA 7119(a)(2) was read only on Cornell LII** (CP-10-01 note: "re-check on a government
   copy before upgrading"). a2-14 (SUPPORTED) reads it on govinfo.
8. **Digital Equity Act.** The review reports that the Act's grant programs were terminated
   while the statute stands. Those news items were not filed as claims (R-07), so they cannot be
   cited. One neutral status note covers both registry entries.
9. **Weiss, Little & Bouffard (2005).** The registry component ("participation measures") claims
   more than the abstract shows. a2-10 (SUPPORTED) confirms "participation = enrollment +
   attendance + engagement", and says 105 is the issue number, not a volume.
10. **Mapp & Kuttner (2013) vs Version 2 (2019).** One registry entry serves F1.7, F1.8 and A2.6.
    a2-13 (SUPPORTED) reads Version 2 at the publisher URL, but that PDF names no author or year.

## Change

### `codebooks/youthOutcomesV3.data.ts`: `basis` notes (data only, not in the prompt)

| Code | Before | After |
|---|---|---|
| A2.2 | `Urban Institute Candidate Outcome Indicators, mentoring (partial: youth only). Hybrid: family satisfaction is a codebook extension of it.` | `The Urban Institute & The Center for What Works (2006), Building a Common Outcome Framework to Measure Nonprofit Performance, program-centered outcomes: satisfaction (verified, partial: participants only; families and perceived safety are not covered; claim a2-01, CP-12-11). Hybrid: family satisfaction and perceived quality and safety are codebook-defined (FD-P18).` |
| A2.3 | `47 CFR 54 Subpart Q (verified); ESSA 20 U.S.C. 7119(a)(2) (verified); Digital Equity Act 47 U.S.C. 1723(c)(1)(B) (verified).` | `47 CFR 54 Subpart Q (verified); ESSA 20 U.S.C. 7119(a)(2) (verified, direct, on govinfo; claim a2-14, CP-12-11); Digital Equity Act 47 U.S.C. 1723(c)(1)(B) (verified).` |
| A2.5 | `UW-Madison Extension (2020) logic model, Outputs (verified); Weiss, Little & Bouffard (2005) (located).` | `UW-Madison Extension (2020) logic model, Outputs (verified); Weiss, Little & Bouffard (2005), participation equation: enrollment and attendance (located: ERIC abstract only; component narrowed by CP-12-11, claim a2-10).` |

**A2.5 status (this draft departs from item 9).** The recommendation says to move `basis` from
"located" to "verified". The registry's own status legend (CP-10-01) uses "verified" only when
the verifier read the document itself and "located" when only an abstract was reachable. a2-10
was fetched from the same ERIC abstract page (`https://eric.ed.gov/?id=EJ790687`) that kept the
source at "located" in CP-10-01. So this draft keeps "located" and narrows the component. If
Severin reads S1.5 as allowing an abstract excerpt, set `STATUS = {'weiss-little-bouffard-2005':
'verified'}` in the module and change the tag (decision W below).

### `codebook-refinement/DEVIATIONS.md`: FD-P18 (changed, text only)

Before:

```markdown
- **Anchor:** Urban Institute Candidate Outcome Indicators, mentoring (partial: youth
  only).
- **Departs:** covers family satisfaction too, which the source doesn't.
- **Evidence:** H002, S137.
- **Alternative considered:** route satisfaction to Y2.1 (as 2.4.0 did by force).
- **Decided in:** 3.0 proposal (PR #33).
- **Revisit:** if a verified satisfaction framework is found.
```

After:

```markdown
- **Anchor:** The Urban Institute & The Center for What Works (2006), Building a Common Outcome Framework to Measure Nonprofit Performance, program-centered outcomes: satisfaction (verified, partial; claim a2-01): "It includes program-centered outcomes (reach, participation, satisfaction);". Registered by CP-12-11; the "Candidate Outcome Indicators, mentoring" source named here before was never in the registry.
- **Departs:** covers families' satisfaction, and participants' and families' perceptions of the program's quality and safety, which the framework does not name. The participant half is only a partial fit: the indicator wording "participant satisfaction with the program" was not in the fetched text.
- **Evidence:** H002, S137.
- **Alternative considered:** route satisfaction to Y2.1 (as 2.4.0 did by force); SAMHSA URS Maine output table (claim a2-02, PARTIAL; rejected: one state's table, family respondents unconfirmed); drop "safety" (rejected: flips H002).
- **Decided in:** 3.0 proposal (PR #33); anchor line corrected by CP-12-11 (2026-10-16).
- **Revisit:** if a verified source names family satisfaction or perceived program safety as an outcome (unverified leads: national URS/YSS-F documentation).
```

Status, Fidelity and Case are unchanged (open, codebook-defined, codebook-defined). The drift
table is unchanged: A2 stays at 2/6. **Decided against:** moving A2.2 to `adapted`. That would
follow the FD-P12 / CP-11-02 Option B pattern (a code with a partial anchor plus a codebook-defined
element), but the recommendation keeps it codebook-defined because the anchor is partial even for
participants. Either way it counts.

### Registry

The module and record are those described in CP-12-10 §Registry. If this CP lands first, it
creates them. This CP's rows:

```python
URLS = {'essa-4109-tech-capacity': 'https://www.govinfo.gov/link/uscode/20/7119'}
SOURCE_EXCERPT = {'essa-4109-tech-capacity': 'a2-14'}
CITE_AS = {
    'weiss-little-bouffard-2005': 'Weiss, H. B., Little, P. M. D., & Bouffard, S. M. (2005). More than just being there: Balancing the participation equation. New Directions for Youth Development, no. 105, 15-31. Jossey-Bass. doi:10.1002/yd.105',
}
SUPPORT_RECHECK = {
    ('essa-4109-tech-capacity', 'A2.3'): ('a2-14', 'direct', None),
    ('weiss-little-bouffard-2005', 'A2.5'): ('a2-10', 'partial', '<note, see appendix>'),
}
COMPONENTS = {('weiss-little-bouffard-2005', 'A2.5'): 'participation equation: enrollment and attendance'}
NEW = [{'id': 'urban-cof-2006', 'source_claim': 'a2-11', 'tier': 'C', ...,
        'supports': [('A2.2', 'program-centered outcomes: participant satisfaction', 'a2-01', 'partial', None)]}]
NOTES = {'essa-4109-tech-capacity': ..., 'digital-equity-act': ..., 'digital-equity-act-1723': ..., 'mapp-kuttner-2013': ...}
```

The exact text is in the appendix. Notes on the choices:

- **Urban COF.** The source-level excerpt comes from a2-11 (SUPPORTED). The A2.2 support uses a2-01
  (PARTIAL) at `fit: partial`. `cite_as` uses the institutional form that a2-01's verifier
  suggested, and `notes` record that a2-11's verifier also accepts the eight-author form. No
  A2.5 support is added from a2-11: it is not an act-now item (the devil's advocate rejected it;
  "registry supporting row at most").
- **Side effect: A2.2 leaves `codebook_extensions`.** `build_registry.py` lists a code as an
  extension only when it has no support. `deviations.test.ts` requires each code to be supported
  XOR an extension. With the Urban row, A2.2 is supported, so the build drops it from
  `codebook_extensions` (which becomes [A2.4]) and the test passes. A2.2 stays codebook-defined
  with FD-P18 open, which the tests allow ("a code that is not Framework cites an open entry").
  The explorer will show the Urban source on A2.2's card.
- **A2.2 Source line.** It stays "Codebook-defined; no verified source yet." (prompt unchanged,
  as item 6 asks). After this CP the line is slightly stale, because a partial source now exists.
  Rewording it is a prompt change and is left to decision U below.
- **Digital Equity Act note.** It cites no news item and asserts no termination: "the support
  rests on statute text only. Reports that the Act's grant programs were terminated were not
  verified (batch 4 review, R-07) and are not cited". Batch 3's F1 citation CP (B3-CP2) shares
  `digital-equity-act` (F1.6). Whichever CP lands second checks for the note and does not add a
  second one.
- **Mapp.** The note records Version 2 (a2-13's excerpt and the dualcapacity.org URL) and keeps
  2013 as the cited component (B4-3 recommended). No support changes. Under the B4-3 alternative
  (cite v2 as current), replace the note with a new source `mapp-bergman-2019` carrying F1.8 and
  A2.6 supports from a2-13. That edit needs batch 3's f1-12 for F1.8, and f1-12 is PARTIAL on a
  secondary host. Batch 3 drops the F1.7 Mapp link (B3-CP2 item 20); this note does not depend
  on that.

Expected result with CP-12-10 and CP-12-12 also applied: 87 → 89 sources (WHO, Urban), supports
146 → 150 (+WHO A1.3, +Urban A2.2, +Reisman A3.2, +Coffman A3.2), `codebook_extensions` [A2.4].

### `rulesText`, Source lines, `CONFUSIONS.md`

Unchanged.

## Sources

| Registry ID | Status | Component relied on | claim_id and verifier excerpt |
|---|---|---|---|
| urban-cof-2006 (new) | verified; A2.2 fit partial | program-centered outcomes: satisfaction | a2-01 PARTIAL: "It includes program-centered outcomes (reach, participation, satisfaction);" a2-11 SUPPORTED: "program-centered outcomes (reach, participation, satisfaction)" |
| essa-4109-tech-capacity | verified (partial → direct) | 7119(a)(2) devices and equipment | a2-14 SUPPORTED: "(B) purchasing devices, equipment, and software applications in order to address readiness shortfalls;" |
| weiss-little-bouffard-2005 | located (component narrowed; fit partial) | participation equation: enrollment and attendance | a2-10 SUPPORTED: "The participation equation (participation = enrollment + attendance + engagement)" |
| mapp-kuttner-2013 | verified (no support change) | Version 2 note only | a2-13 SUPPORTED: "Systemic: embraced by leadership across the organization" |
| digital-equity-act, digital-equity-act-1723 | verified (no change) | status note only | none (R-07 news items were not claims) |

Not used: a2-02 (rejected), a2-03..08 (A2.4; later-cycle item 3, after PR #62), a2-09 (A2.5
APR, later-cycle item 5; touches CP-09-01), a2-12 (later-cycle item 6).

## Verification requests

None.

## Decisions for Severin

- **D (timing).** Recommended: land after PR #62, with CP-12-10 and CP-12-12.
- **B4-3 (Mapp edition).** Recommended: keep 2013 and add the v2 note (drafted). Alternative:
  cite v2 as current (see above).
- **B4-2 (A2.1 accreditation) and B4-5 (A2.3 facilities).** Not decided here and not touched.
  If B4-2 opens a counted FD, A2 goes to 3/6 (over the line) and S4.9 requires an A2 anchor
  re-review before further A2 changes. This CP does not change the count.
- **W (raised by this draft): Weiss status.** Keep "located" (drafted) or upgrade to "verified"
  as item 9 says.
- **U (raised by this draft): A2.2 Source line.** Leave "Codebook-defined; no verified source
  yet." (no prompt change, drafted), or reword it to name the Urban COF in a gated prompt CP
  (it could ride with CP-12-18).

## Gold impact

- Rows expected to change code: none (prompt unchanged; no scoring run needed).
- Rows the edited citations rest on: H002, S137 (A2.2); S196, S228, S240, H076 (A2.3); S238,
  H001 (A2.5).
- New proposed rows: none.
- Held-out gold was not read.

## Test plan

`npm test`, both typechecks, and `build_registry.py` run twice with no diff. **Not run yet:** the
drafter's scratch test run was refused by the permission system and was not retried.

## Judge result

Not run.

## Appendix: `verification_2026_10_16_batch4.py` (draft for CP-12-10, -11, -12, -18)

Rows are tagged by CP. Untested (see Test plan).

```python
"""Applies the batch 4 (A1, A2, A3) research-review verifications to the 3.x registry.

build_registry.py calls apply() after the 2026-09-27 re-verification (and after
the 2026-10-16 Y1 module, if CP-11-01 has landed). Every verdict and excerpt comes
from source-verification-2026-10-16-batch4.json, copied unchanged from the
batch 4 verifier output (verdicts-a.json, verdicts-b.json). The verifiers saw
only {claim_id, code, cite_as, claimed_component, url} (STANDARDS S4.2).
Nothing here is cited from memory.

Each table is marked with the CP that adds it. A CP that has not been approved
leaves its rows out.
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
RECORD = {r['claim_id']: r for r in json.loads((HERE / 'source-verification-2026-10-16-batch4.json').read_text())}
DATE = '2026-10-16'
BY = 'Batch 4 research review (independent codebook-citation-verifier, blind to proposer; WebFetch)'

# Source id -> new URL (the verifier's fetched URL).
URLS = {
    'learning-forward-2022': 'https://learningforward.org/wp-content/uploads/sites/29/2022/04/Standards-Summary.pdf',  # CP-12-10
    'samhsa-tic-2014': 'https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA%5FTrauma.pdf',  # CP-12-10
    'essa-4109-tech-capacity': 'https://www.govinfo.gov/link/uscode/20/7119',  # CP-12-11
    'sampson-1997': 'https://pubmed.ncbi.nlm.nih.gov/9252316/',  # CP-12-12
}

# Source id -> claim whose excerpt becomes the source-level excerpt (read at the new URL).
SOURCE_EXCERPT = {
    'learning-forward-2022': 'a1-01',  # CP-12-10
    'samhsa-tic-2014': 'a1-05',  # CP-12-10
    'essa-4109-tech-capacity': 'a2-14',  # CP-12-11
    'sampson-1997': 'a3-03',  # CP-12-12
}

# Citation text corrected by a verifier.
CITE_AS = {
    # CP-12-11: '105' is the issue number, not a volume (claim a2-10).
    'weiss-little-bouffard-2005': 'Weiss, H. B., Little, P. M. D., & Bouffard, S. M. (2005). More than just being there: Balancing the participation equation. New Directions for Youth Development, no. 105, 15-31. Jossey-Bass. doi:10.1002/yd.105',
}

# (source, code) -> (claim, fit, note); note None uses the verifier's own note.
# fit is set explicitly, not from the verdict, where the review set it.
SUPPORT_RECHECK = {
    ('samhsa-tic-2014', 'A1.2'): ('a1-05', 'direct', None),  # CP-12-10
    ('essa-4109-tech-capacity', 'A2.3'): ('a2-14', 'direct', None),  # CP-12-11
    ('weiss-little-bouffard-2005', 'A2.5'): ('a2-10', 'partial',  # CP-12-11
        'Re-checked 2026-10-16 (claim a2-10, SUPPORTED, read on the ERIC record): the component is now limited to enrollment and attendance, the parts of the participation equation that are program-level counts. Engagement, the third part, is not a count or dosage, so the fit stays partial. Only the ERIC abstract was read.'),
    ('sampson-1997', 'A3.3'): ('a3-03', 'direct', None),  # CP-12-12
}

# (source, code) -> component text.
COMPONENTS = {
    ('weiss-little-bouffard-2005', 'A2.5'): 'participation equation: enrollment and attendance',  # CP-12-11
    ('epstein-six-types', 'A2.6'): 'Type 3 Volunteering (families as volunteers and audiences)',  # CP-12-18
}

# (source, code) -> replacement verifier_note, where a support is narrowed without a new claim.
SUPPORT_NOTE = {
    # CP-12-18: Type 6 removed; the CP-10-01 verifier had already judged it a poor fit.
    ('epstein-six-types', 'A2.6'): "Type 3 fits organizational systems for engaging families (CP-10-01 verifier). Type 6 ('Coordinate community resources and services ...') was removed from A2.6 by CP-12-18: the CP-10-01 verifier judged it community collaboration, not family-engagement systems. The framework describes school practices, so the fit stays partial.",
}

# Supports added to sources already in the registry: (source, code, component, claim, fit, note or None).
NEW_SUPPORTS = [
    ('reisman-2007-advocacy-policy', 'A3.2',  # CP-12-12
     'outcome category: strengthened alliances (coordination, collaboration and mission alignment among community and system partners)',
     'a3-01', 'direct', None),
    ('coffman-2009-advocacy-evaluation', 'A3.2',  # CP-12-12
     'interim outcome: partnerships or alliances (new or stronger organizational relationships)',
     'a3-02', 'partial',
     "Verdict SUPPORTED (claim a3-02): the measure 'New or stronger organizational relationships developed' appears word for word. Fit set to partial by the batch 4 review: the outcome is defined within an advocacy strategy, and it also counts relationships with individuals. Supporting row only; not named in the A3.2 source line."),
]

# New sources: each support is (code, component, claim, fit, note or None).
NEW = [
    {  # CP-12-10
        'id': 'who-2019-burnout', 'source_claim': 'a1-07',
        'cite_as': 'World Health Organization (2019, May 28). Burn-out an "occupational phenomenon": International Classification of Diseases.',
        'codebook_names': [], 'tier': 'B', 'publisher': 'World Health Organization', 'year': 2019,
        'notes': 'Added by CP-12-10 as a supporting row for the burnout include; not named in the A1.3 source line. Tier B chosen by the proposer (WHO classification); confirm.',
        'supports': [('A1.3', 'ICD-11 burn-out: chronic workplace stress not successfully managed (exhaustion, mental distance from the job, reduced professional efficacy)', 'a1-07', 'direct', None)],
    },
    {  # CP-12-11
        'id': 'urban-cof-2006', 'source_claim': 'a2-11',
        'cite_as': 'The Urban Institute & The Center for What Works (2006). Building a Common Outcome Framework to Measure Nonprofit Performance.',
        'codebook_names': [], 'tier': 'C', 'publisher': 'The Urban Institute', 'year': 2006,
        'notes': "Added by CP-12-11. The PDF (dated December 2006) names no authors on the cover and lists eight people as 'Common Measures Project Staff'; Urban's publication page credits the same eight as authors and dates it January 5, 2007 (claims a2-01, a2-11). Cited in institutional form; the eight-author form is also acceptable. Replaces the unregistered 'Urban Institute Candidate Outcome Indicators, mentoring' named in A2.2's basis and FD-P18.",
        'supports': [('A2.2', 'program-centered outcomes: participant satisfaction', 'a2-01', 'partial', None)],
    },
]

# Source id -> status.
STATUS = {}

# Source id -> text appended to `notes` (no re-verification implied).
NOTES = {
    'learning-forward-2022': "URL pinned 2026-10-16 (CP-12-10) to the 2022 Standards Summary PDF (claim a1-01, PARTIAL: design standards, not an outcome list; the PDF states no year, which comes from the URL path and the history page). Learning Forward's history page says a 2025 edition now exists (claim a1-02, PARTIAL); the codebook keeps citing 2022 until a dated 2025 record is verified. The A1.1 and A1.2 support excerpts were read on the standards web page in CP-10-01.",
    'samhsa-tic-2014': 'URL moved 2026-10-16 (CP-12-10) to the full document on HHS/ACF NCSACW (claim a1-05, SUPPORTED); SAMHSA remains the author.',
    'essa-4109-tech-capacity': 'Re-checked 2026-10-16 (CP-12-11) on govinfo, a government copy (claim a2-14, SUPPORTED); fit partial -> direct.',
    'digital-equity-act': 'Status note (CP-12-11, 2026-10-16): the support rests on statute text only. Reports that the Act\'s grant programs were terminated were not verified (batch 4 review, R-07) and are not cited; re-check the statute at the next re-verification. Shared with digital-equity-act-1723.',
    'digital-equity-act-1723': 'Status note (CP-12-11, 2026-10-16): see digital-equity-act.',
    'mapp-kuttner-2013': "Version note (CP-12-11, 2026-10-16): Version 2 of the framework (Mapp & Bergman, 2019, per the suggested citation on dualcapacity.org; the PDF itself names no author or year) adds to the 2013 framework and keeps its organizational conditions, 'Systemic: embraced by leadership across the organization' (claim a2-13, SUPPORTED; https://www.dualcapacity.org/s/DCBF-VERSION-2-FINAL.pdf). The 2013 edition stays the cited component for F1.7, F1.8 and A2.6 (decision B4-3).",
    'sampson-1997': 'URL moved 2026-10-16 (CP-12-12) to the PubMed record (claim a3-03, SUPPORTED: the definition is in the abstract; the fetched page did not show author names). The full text was read in CP-10-01 on a course-reading copy.',
}

# Source id -> names added to codebook_names (CP-12-18, when a line names the source).
CODEBOOK_NAMES = {
    'guskey-2002-pd-evaluation': ['Guskey (2002)'],
    'reisman-2007-advocacy-policy': ['Reisman, Gienapp & Stachowiak (2007)'],
}


def _claim(cid):
    r = RECORD[cid]
    assert r['verdict'] in ('SUPPORTED', 'PARTIAL'), cid
    return r


def _support(out, sid, code):
    return next(s for s in out[sid]['supports'] if s['code'] == code)


def apply(out, codes):
    rechecked = set()
    for sid, url in URLS.items():
        out[sid]['url'] = url
        rechecked.add(sid)
    for sid, cid in SOURCE_EXCERPT.items():
        out[sid]['excerpt'] = _claim(cid)['excerpt']
        rechecked.add(sid)
    for sid, text in CITE_AS.items():
        out[sid]['cite_as'] = text
        rechecked.add(sid)
    for (sid, code), (cid, fit, note) in SUPPORT_RECHECK.items():
        r = _claim(cid)
        _support(out, sid, code).update(fit=fit, excerpt=r['excerpt'], verifier_note=note or r['notes'])
        rechecked.add(sid)
    for (sid, code), comp in COMPONENTS.items():
        _support(out, sid, code)['component'] = comp
    for (sid, code), note in SUPPORT_NOTE.items():
        _support(out, sid, code)['verifier_note'] = note
    for sid, code, comp, cid, fit, note in NEW_SUPPORTS:
        assert code in codes, code
        r = _claim(cid)
        out[sid]['supports'].append({'code': code, 'component': comp, 'fit': fit,
                                     'excerpt': r['excerpt'], 'verifier_note': note or r['notes']})
        rechecked.add(sid)
    for n in NEW:
        first = _claim(n['source_claim'])
        sups = []
        for code, comp, cid, fit, note in n['supports']:
            assert code in codes, code
            r = _claim(cid)
            sups.append({'code': code, 'component': comp, 'fit': fit, 'excerpt': r['excerpt'], 'verifier_note': note or r['notes']})
        out[n['id']] = {
            'id': n['id'], 'cite_as': n['cite_as'], 'codebook_names': n['codebook_names'], 'tier': n['tier'],
            'publisher': n['publisher'], 'year': n['year'], 'url': first['url_checked'], 'status': 'verified',
            'verified_on': DATE, 'verified_by': BY, 'excerpt': first['excerpt'], 'notes': n['notes'], 'supports': sups,
        }
    for sid, st in STATUS.items():
        out[sid]['status'] = st
    for sid, text in NOTES.items():
        out[sid]['notes'] = (out[sid].get('notes', '') + ' ' + text).strip()
    for sid, names in CODEBOOK_NAMES.items():
        out[sid]['codebook_names'] = sorted(set(out[sid].get('codebook_names', [])) | set(names))
    for sid in rechecked:
        out[sid]['verified_on'] = DATE
        out[sid]['verified_by'] = BY
    return out
```
