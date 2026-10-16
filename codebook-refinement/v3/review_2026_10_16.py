"""Shared engine for the 2026-10-16 research review registry changes (3.1.5).

The dated modules verification_2026_10_16*.py each hold the input tables of one
group of change proposals (CP-11-01, CP-12-02 ... CP-12-28) and a record file
(source-verification-2026-10-16*.json) with a copy of every verifier verdict
they rely on. build_registry.py calls each module's apply() after the CP-10-01
results, so rerunning the build keeps these results.

Every verdict comes from an independent codebook-citation-verifier run that saw
only {claim_id, code, cite_as, claimed_component, url} (STANDARDS S4.2):
- the pilot review: research-review/2026-10-16/verification/;
- round 1 of the full review: research-review/2026-10-16/full-review/batch*/verify/;
- round 2, after Severin's decisions: research-review/2026-10-16/full-review/verify-round2/.
Nothing here is cited from memory.

Rules the engine enforces:
- only SUPPORTED or PARTIAL claims are used;
- a PARTIAL claim never gives a `direct` fit (decision G3);
- every excerpt it writes is 40 words or fewer (S1.5).

Regenerate the record files from the review folders with

    python3 codebook-refinement/v3/review_2026_10_16.py
"""
import glob
import importlib
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
REVIEW = HERE.parent / 'research-review/2026-10-16'
DATE = '2026-10-16'
BY = '2026-10-16 research review (independent codebook-citation-verifier, blind to proposer; WebFetch)'
MODULES = [
    'verification_2026_10_16',
    'verification_2026_10_16_b1',
    'verification_2026_10_16_b2',
    'verification_2026_10_16_b3',
    'verification_2026_10_16_batch4',
    'verification_2026_10_16_hosts',
]


def _rows(pattern):
    out = []
    for f in sorted(glob.glob(str(REVIEW / pattern))):
        out += json.loads(Path(f).read_text())
    return out


def collect():
    """Every claim of the review, normalized to the 2026-09-27 record shape."""
    sets = [
        ('pilot', 'verification/batch-*.json', 'verification/verifier-results.json'),
        ('round1', 'full-review/batch*/verify/claims-*.json', 'full-review/batch*/verify/verdicts-*.json'),
        ('round2', 'full-review/verify-round2/claims-*.json', 'full-review/verify-round2/verdicts-*.json'),
    ]
    out = {}
    for kind, claims, verdicts in sets:
        verdict = {v['claim_id']: v for v in _rows(verdicts)}
        for c in _rows(claims):
            v = verdict[c['claim_id']]
            assert c['claim_id'] not in out, c['claim_id']
            out[c['claim_id']] = {
                'claim_id': c['claim_id'], 'kind': kind, 'code': c['code'], 'cite_as': c['cite_as'],
                'claimed_component': c['claimed_component'], 'url_given': c['url'],
                'verdict': v['verdict'],
                'url_checked': v.get('url_checked', v.get('fetched_url', '')),
                # Round-1 verdicts did not record the copy read; their notes say so where it matters.
                'source_kind': v.get('source_kind', 'not recorded'),
                'excerpt': v.get('excerpt', ''),
                'corrected_cite_as': v.get('corrected_cite_as', ''),
                'notes': v.get('notes', v.get('note', '')),
            }
    return out


def claims_used(mod):
    """Every claim id a module's tables name."""
    used = set(getattr(mod, 'RECORD_ONLY', []))
    for t in ('SOURCE_EXCERPT',):
        used |= set(getattr(mod, t, {}).values())
    for v in getattr(mod, 'SUPPORT_RECHECK', {}).values():
        used.add(v[0])
    used |= set(getattr(mod, 'QUOTE_ONLY', {}).values())
    for s in getattr(mod, 'NEW_SUPPORTS', []):
        used.add(s[3])
    for n in getattr(mod, 'NEW', []):
        used.add(n['claim'])
        for s in n['supports']:
            if len(s) > 2 and s[2]:
                used.add(s[2])
    return used


def load_record(name):
    return {r['claim_id']: r for r in json.loads((HERE / name).read_text())}


def _words(s):
    return len(s.split())


def _claim(rec, cid):
    r = rec[cid]
    assert r['verdict'] in ('SUPPORTED', 'PARTIAL'), f'{cid}: {r["verdict"]} cannot back a citation'
    assert r['source_kind'] != 'secondary' or cid in rec.get('_secondary_ok', ()), f'{cid}: secondary copy'
    assert r['excerpt'].strip() and _words(r['excerpt']) <= 40, f'{cid}: excerpt missing or over 40 words'
    return r


def _fit(r, fit):
    if fit is None:
        fit = 'direct' if r['verdict'] == 'SUPPORTED' else 'partial'
    assert not (fit == 'direct' and r['verdict'] != 'SUPPORTED'), f'{r["claim_id"]}: a PARTIAL never gives a direct fit (G3)'
    return fit


def _touch(src):
    src['verified_on'] = DATE
    src['verified_by'] = BY


def _sup(out, key):
    """A support by (source, code), or by (source, code, component) where a source backs a code twice."""
    sid, code = key[0], key[1]
    hits = [x for x in out[sid]['supports'] if x['code'] == code and (len(key) < 3 or x['component'] == key[2])]
    assert len(hits) == 1, (key, len(hits))
    return hits[0]


def apply_module(out, codes, mod):
    rec = load_record(mod.RECORD_FILE)
    rec['_secondary_ok'] = set(getattr(mod, 'SECONDARY_OK', ()))

    for n in getattr(mod, 'NEW', []):
        assert n['id'] not in out, n['id']
        first = _claim(rec, n['claim'])
        sups = []
        for s in n['supports']:
            code, comp = s[0], s[1]
            assert code in codes, code
            r = _claim(rec, s[2]) if len(s) > 2 and s[2] else first
            fit = _fit(r, s[3] if len(s) > 3 else None)
            note = s[4] if len(s) > 4 and s[4] else r['notes']
            if n.get('prefix_url'):  # supports read in different documents of one source (CP-12-07, HECAT modules)
                note = f"Read at {r['url_checked']}. {note}"
            sups.append({'code': code, 'component': comp, 'fit': fit, 'excerpt': r['excerpt'], 'verifier_note': note})
        out[n['id']] = {
            'id': n['id'], 'cite_as': n['cite_as'], 'codebook_names': list(n.get('codebook_names', [])),
            'tier': n['tier'], 'publisher': n['publisher'], 'year': n['year'],
            'url': n.get('url') or first['url_checked'], 'status': 'verified', 'verified_on': DATE,
            'verified_by': BY, 'excerpt': first['excerpt'],
            'notes': f"Added by {n['cp']}." + (f" {n['notes_extra']}" if n.get('notes_extra') else ''),
            'supports': sups,
        }

    touched = set()
    for table, field in (('CITE_AS', 'cite_as'), ('PUBLISHER', 'publisher'), ('YEAR', 'year'), ('TIER', 'tier'), ('URLS', 'url'), ('STATUS', 'status')):
        for sid, val in getattr(mod, table, {}).items():
            out[sid][field] = val
            touched.add(sid)
    for sid, (tier, pub) in getattr(mod, 'TIER_PUBLISHER', {}).items():  # fills nulls only (CP-12-25)
        if out[sid].get('tier') is None:
            out[sid]['tier'] = tier
        if out[sid].get('publisher') is None:
            out[sid]['publisher'] = pub
    for sid, cid in getattr(mod, 'SOURCE_EXCERPT', {}).items():
        out[sid]['excerpt'] = _claim(rec, cid)['excerpt']
        touched.add(sid)
    for sid, names in getattr(mod, 'CODEBOOK_NAMES', {}).items():
        for nm in names:
            if nm not in out[sid].setdefault('codebook_names', []):
                out[sid]['codebook_names'].append(nm)
    for sid, text in getattr(mod, 'NOTES_REPLACE', {}).items():
        out[sid]['notes'] = text
    for sid, text in getattr(mod, 'NOTES', {}).items():
        out[sid]['notes'] = (out[sid].get('notes') or '').rstrip() + ' ' + text if out[sid].get('notes') else text

    remove = set(getattr(mod, 'REMOVE', ()))
    for sid in {s for s, _ in remove}:
        before = len(out[sid]['supports'])
        out[sid]['supports'] = [x for x in out[sid]['supports'] if (sid, x['code']) not in remove]
        assert len(out[sid]['supports']) < before, sid
    for key, (cid, fit, note) in getattr(mod, 'SUPPORT_RECHECK', {}).items():
        sup = _sup(out, key)
        r = _claim(rec, cid)
        sup['fit'] = _fit(r, fit)
        sup['excerpt'] = r['excerpt']
        sup['verifier_note'] = note if note else r['notes']
        touched.add(key[0])
    # The verifier's own verbatim text from the page, used as the support's quote only. The
    # support's fit rests on the SUPPORT_RECHECK claim (so a claim whose verdict was about a
    # different phrase can still supply a quote that is on the page; CP-12-03 V1).
    for key, cid in getattr(mod, 'QUOTE_ONLY', {}).items():
        r = rec[cid]
        assert r['excerpt'].strip() and _words(r['excerpt']) <= 40 and r['source_kind'] == 'primary', cid
        _sup(out, key)['excerpt'] = r['excerpt']
    for key, comp in getattr(mod, 'COMPONENTS', {}).items():
        _sup(out, key)['component'] = comp
    for key, text in getattr(mod, 'SUPPORT_NOTE_APPEND', {}).items():
        sup = _sup(out, key)
        sup['verifier_note'] = (sup.get('verifier_note') or '').rstrip() + text
    for sid, code, comp, cid, fit, note in getattr(mod, 'NEW_SUPPORTS', []):
        assert code in codes, code
        assert not any(x['code'] == code and x['component'] == comp for x in out[sid]['supports']), (sid, code)
        r = _claim(rec, cid)
        out[sid]['supports'].append({'code': code, 'component': comp, 'fit': _fit(r, fit),
                                     'excerpt': r['excerpt'], 'verifier_note': note if note else r['notes']})
        touched.add(sid)
    for sid in touched:
        if sid in out and out[sid].get('verified_on') != DATE:
            _touch(out[sid])
    for sid in list(out):
        if not out[sid]['supports']:
            del out[sid]
    return out


def apply_all(out, codes):
    for name in MODULES:
        try:
            mod = importlib.import_module(name)
        except ModuleNotFoundError as e:
            if e.name == name:
                continue
            raise
        apply_module(out, codes, mod)
    return out


if __name__ == '__main__':
    import sys
    sys.path.insert(0, str(HERE))
    allc = collect()
    for name in MODULES:
        try:
            mod = importlib.import_module(name)
        except ModuleNotFoundError as e:
            if e.name == name:
                continue
            raise
        rows = [allc[c] for c in sorted(claims_used(mod))]
        (HERE / mod.RECORD_FILE).write_text(json.dumps(rows, indent=2, ensure_ascii=False) + '\n')
        print(f'wrote v3/{mod.RECORD_FILE}: {len(rows)} claims')
