"""Builds codebook-refinement/evidence-registry/evidence_registry.json.

The evidence registry is the research reference for reviewing whole logic models
(recommendation, 2026-10-18: https://claude.ai/code/artifact/fdc33556-a013-4889-9f21-5e4ede81f647).
It has three parts:

- program models: tested program models, their required features and the checked
  claims behind them (program_models.csv);
- pathways: every checked step from an outcome or activity to a result, with its
  level (tested, research-associated, or checked and not supported). The SPOTlight
  links come in as pathways unchanged; pathways.csv adds the registry's own;
- claims: only claims an independent verifier fetched, with a verbatim excerpt
  (../spotlight/verification and ./verification, *_results.csv).

The SPOTlight files are read, never changed. Change the CSVs and rebuild; never edit
the JSON by hand. Nothing here is cited from memory.

    python3 codebook-refinement/evidence-registry/build_registry.py
"""
import csv
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SPOT = HERE.parent / 'spotlight'
VERSION = '1.0.0'
ACCEPTED = {'SUPPORTED', 'PARTIAL'}
TIERS = {'recommend-with-conditions': 'tested', 'associated': 'research-associated',
         'not-recommended': 'checked, not supported'}
CLAIM_FIELDS = ('verdict', 'correct_citation', 'fetched_url', 'design', 'population_location',
                'outcome', 'effect_as_reported', 'excerpt')


def split(s, sep=';'):
    return [x.strip() for x in (s or '').split(sep) if x.strip()]


def read(path):
    with open(path, newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def load_claims():
    claims = {}
    for folder in (SPOT / 'verification', HERE / 'verification'):
        for path in sorted(folder.glob('*_results.csv')):
            for r in read(path):
                cid = r['claim_id'].strip()
                if cid in claims:
                    raise SystemExit(f'claim id {cid} appears twice ({path.name})')
                claims[cid] = {k: (r.get(k) or '').strip() for k in CLAIM_FIELDS}
                claims[cid]['checked_in'] = str(path.relative_to(HERE.parent))
    return claims


def main():
    claims = load_claims()
    links = {r['link_id']: r for r in read(SPOT / 'spotlight_relevance_links.csv')}

    def cited(ids, where, need_supported):
        ids = [c for c in ids if c in claims and claims[c]['verdict'] in ACCEPTED]
        if need_supported and not any(claims[c]['verdict'] == 'SUPPORTED' for c in ids):
            raise SystemExit(f'{where}: no fully supported checked claim')
        return ids

    pathways = []
    for r in links.values():
        tier = TIERS[r['final_recommendation']]
        definitional = 'definition' in (r['evidence_tier'] or '').lower() and not r['claim_ids'].strip()
        pathways.append({
            'id': r['link_id'], 'source': 'SPOTlight relevance review',
            'from': split(r['codes']), 'to': split(r['indicator_ids'], ','), 'tier': tier,
            'summary': r['pathway'].strip(), 'programModel': r['model_match_required'].strip(),
            'typicalEffect': r['typical_effect'].strip(), 'caveats': r['caveats'].strip(),
            'claims': cited(split(r['claim_ids']), r['link_id'], tier != 'checked, not supported' and not definitional),
        })
    for r in read(HERE / 'pathways.csv'):
        if r['tier'] not in TIERS.values():
            raise SystemExit(f"{r['pathway_id']}: unknown tier {r['tier']!r}")
        pathways.append({
            'id': r['pathway_id'], 'source': 'evidence registry',
            'from': split(r['from']), 'to': split(r['to']), 'tier': r['tier'],
            'summary': r['summary'].strip(), 'programModel': r['program_model'].strip(),
            'typicalEffect': '', 'caveats': r['caveats'].strip(),
            'claims': cited(split(r['claim_ids']), r['pathway_id'], r['tier'] != 'checked, not supported'),
        })
    ids = [p['id'] for p in pathways]
    if len(ids) != len(set(ids)):
        raise SystemExit('duplicate pathway id')

    models = []
    for r in read(HERE / 'program_models.csv'):
        src = split(r['source_links'])
        for l in src:
            if links.get(l, {}).get('final_recommendation') != 'recommend-with-conditions':
                raise SystemExit(f"{r['model_id']}: {l} is not a tested SPOTlight link")
        claim_ids = list(dict.fromkeys([c for l in src for c in split(links[l]['claim_ids'])] + split(r['claim_ids'])))
        models.append({
            'id': r['model_id'], 'name': r['name'].strip(), 'sourceLinks': src,
            'description': ' '.join(links[l]['model_match_required'].strip() for l in src),
            'outcomes': sorted({c for l in src for c in split(links[l]['codes'])}),
            'indicators': sorted({i for l in src for i in split(links[l]['indicator_ids'], ',')}, key=lambda s: int(s[1:])),
            'typicalEffect': ' '.join(links[l]['typical_effect'].strip() for l in src),
            'requiredFeatures': split(r['required_features']),
            'featuresStatus': r['features_status'].strip(),
            'claims': cited(claim_ids, r['model_id'], True),
        })

    used = sorted({c for x in pathways + models for c in x['claims']})
    out = {
        'registryVersion': VERSION,
        'rule': 'Evidence credits program models, not wording. A code or wording alone never earns more '
                'than "possible link, model not confirmed". Only claims an independent verifier fetched, '
                'with a verbatim excerpt, enter this file.',
        'tiers': {
            'tested': 'Causal studies of a matching program model.',
            'research-associated': 'Consistent correlational evidence (a meta-analysis, or several long-term '
                                   'studies that adjust for earlier achievement or attendance). Worded '
                                   '"is associated with"; earns no credit.',
            'checked, not supported': 'The review looked and found no evidence strong enough.',
        },
        'programModels': models,
        'pathways': pathways,
        'claims': {c: claims[c] for c in used},
    }
    (HERE / 'evidence_registry.json').write_text(json.dumps(out, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(f'{len(models)} program models, {len(pathways)} pathways, {len(used)} claims')


if __name__ == '__main__':
    main()
