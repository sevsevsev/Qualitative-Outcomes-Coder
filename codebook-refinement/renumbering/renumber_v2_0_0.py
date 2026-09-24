#!/usr/bin/env python3
"""Renumber the original codebook's domains to match their listed order (CP-04-08).

v1.2.0 lists Domain 11 (Academic Learning & Achievement) first but keeps its
number. v2.0.0 numbers every domain by its position in the list, so Academic
becomes Domain 1, Domains 1-10 each move up by one, and Domain 12 stays 12.

This script is the only thing that changed code numbers in CP-04-08. It:
  1. derives the old -> new map from the codebook itself (list position),
     using a JSON dump of the v1.2.0 codebook (see --dump);
  2. writes that map to v1.2.0-to-v2.0.0.csv next to this file;
  3. rewrites code numbers in the files listed in TARGETS, touching only the
     columns/keys/lines named there, never outcome text or quoted source text;
  4. prints every changed line so a person can review it.

It refuses to rewrite files twice: codebooks/original.ts must still say
version 1.2.0. --map-only regenerates just the map CSV and
codebooks/originalV1Numbering.ts from the dump, which is safe to repeat.
Usage: python3 renumber_v2_0_0.py --dump <old_codebook.json> [--dry-run | --map-only]
The dump is {"version", "domains": [{"code", "subs": [labels]}]} for v1.2.0,
printed from codebooks/original.ts at commit 2b06b6a and saved next to
this file as v1.2.0-codebook-dump.json.
"""
import argparse, csv, io, json, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
HERE = os.path.dirname(os.path.abspath(__file__))

# Codes that appear in open change proposals or the gold set but are not in
# v1.2.0 yet. They renumber with their domain like any other code.
PROPOSED = {'8.9': 'CP-01-05', '1.6': 'CP-01-04', '11.10': 'CONFUSIONS.md backlog'}


def build_map(dump):
    domain_map, code_map, rows = {}, {}, []
    for pos, d in enumerate(dump['domains'], start=1):
        m = re.match(r'^Domain (\d+)\. (.+)$', d['code'])
        old, name = m.group(1), m.group(2)
        domain_map[old] = str(pos)
        rows.append(['domain', old, str(pos), d['code'], f'Domain {pos}. {name}'])
    for d in dump['domains']:
        old_d = re.match(r'^Domain (\d+)\.', d['code']).group(1)
        for s in d['subs']:
            code, label = s.split(' ', 1)
            assert code.split('.')[0] == old_d, s
            new = domain_map[old_d] + code[len(old_d):]
            code_map[code] = new
            rows.append(['subcategory', code, new, s, f'{new} {label}'])
    for h in ['3.1', '3.2', '3.3', '3.4', '3.5']:  # SEL category headers (not selectable)
        code_map[h] = domain_map['3'] + h[1:]
        rows.append(['sel_header', h, code_map[h], '', ''])
    for code, where in PROPOSED.items():
        d = code.split('.')[0]
        code_map[code] = domain_map[d] + code[len(d):]
        rows.append(['proposed', code, code_map[code], where, ''])
    return domain_map, code_map, rows


# Numbers that look like codes but are not ours. Left exactly as written.
PROTECT = [
    'The 2024 revision renumbers it as 1.2.',  # ISTE's own standard number (sources registry)
]


TS_HEADER = """// codebooks/originalV1Numbering.ts
//
// GENERATED from codebook-refinement/renumbering/v1.2.0-to-v2.0.0.csv by
// codebook-refinement/renumbering/renumber_v2_0_0.py (CP-04-08). Do not edit
// by hand; codebooks/renumbering.test.ts checks this file against the CSV.
//
// v2.0.0 renumbered the original codebook's domains to match their listed
// order (Academic Learning & Achievement became Domain 1). Each pair is
// [v1.2.0 label, v2.0.0 label]. Only the number changes; the text after it
// is identical. Used to re-import exports coded under v1.2.0 or earlier.

/** Exports stamped with an original codebook version below this use the old numbers. */
export const RENUMBERED_IN_VERSION = '2.0.0';
"""


def write_ts_module(rows):
    q = lambda x: json.dumps(x, ensure_ascii=False)
    out = [TS_HEADER, 'export const V1_2_0_DOMAIN_LABELS: ReadonlyArray<readonly [string, string]> = [']
    out += [f'  [{q(r[3])}, {q(r[4])}],' for r in rows if r[0] == 'domain']
    out += ['];', '', 'export const V1_2_0_SUBCATEGORY_LABELS: ReadonlyArray<readonly [string, string]> = [']
    out += [f'  [{q(r[3])}, {q(r[4])}],' for r in rows if r[0] == 'subcategory']
    out += ['];', '',
            '/** Old code number -> new code number, e.g. "11.3" -> "1.3", "3.2.1" -> "4.2.1", "11" -> "1" for a domain. */',
            'export const V1_2_0_CODE_NUMBERS: ReadonlyMap<string, string> = new Map([',
            "  ...V1_2_0_DOMAIN_LABELS.map(([from, to]) => [from.split(' ')[1].replace(/\\.$/, ''), to.split(' ')[1].replace(/\\.$/, '')] as const),",
            "  ...V1_2_0_SUBCATEGORY_LABELS.map(([from, to]) => [from.split(' ')[0], to.split(' ')[0]] as const),",
            ']);', '']
    with open(os.path.join(ROOT, 'codebooks/originalV1Numbering.ts'), 'w') as fh:
        fh.write('\n'.join(out))


def make_prose(domain_map, code_map):
    sep = r'(?:\s*,\s*(?:or\s+|and\s+)?|\s+and\s+|\s+or\s+|\s*/\s*|\s+vs\.\s+)'
    num = r'\d{1,2}(?![.\d]\d)'
    pat = re.compile(
        r'(?P<plural>\b[Dd]omains\s+' + num + r'(?:' + sep + num + r')*)'
        r'|(?P<single>\b(?:[Dd]omain|DOMAIN)\s+(?P<sn>\d{1,2})\b(?!\.\d))'
        r'|(?P<xcode>(?<![\w.])(?P<xd>\d{1,2})(?P<xr>\.x(?:\.x)?)\b)'
        r'|(?P<code>(?<![A-Za-z0-9_.§-])\d{1,2}\.\d{1,2}(?:\.\d{1,2})?(?![0-9]|\.\d))'
        r'|(?P<rcode>(?<=\d-)\d{1,2}\.\d{1,2}(?:\.\d{1,2})?(?![0-9]|\.\d))'
    )

    def sub(m):
        if m.group('plural'):
            if re.search(r'\d\s*[-–]\s*\d', m.group('plural')):
                raise ValueError(f'domain range needs a hand edit: {m.group(0)!r}')
            return re.sub(r'\d{1,2}', lambda n: domain_map[n.group(0)], m.group('plural'))
        if m.group('single'):
            return m.group('single')[: m.start('sn') - m.start('single')] + domain_map[m.group('sn')]
        if m.group('xcode'):
            return domain_map[m.group('xd')] + m.group('xr')
        tok = m.group('code') or m.group('rcode')
        return code_map.get(tok, tok)

    def prose(text):
        for p in PROTECT:
            if p in text:
                return p.join(prose(part) for part in text.split(p))
        return pat.sub(sub, text)

    return prose


def map_code_cell(value, code_map, domain_map):
    """A cell that holds only codes ("3.2.2", "12.2;5.1", "11.6 + 8.6", "none")."""
    def one(m):
        tok = m.group(0)
        if tok in code_map:
            return code_map[tok]
        d = tok.split('.')[0]
        raise ValueError(f'unknown code {tok!r} in cell {value!r}')
    out = re.sub(r'\d{1,2}(?:\.\d{1,2}){1,2}', one, value)
    rest = re.sub(r'\d{1,2}(?:\.\d{1,2}){1,2}', '', value)
    assert re.fullmatch(r'[\s;+,/|]*(none|uncoded)?[\s;+,/|]*', rest), f'unexpected text in code cell: {value!r}'
    return out


# file -> how to rewrite it
TARGETS = {
    # Lines 1-33 (the version history comment) and 566-568 (the comment on the
    # v1.1.1 re-import labels) describe older numbering and are edited by hand;
    # `from:` labels are old export labels and must keep their old numbers.
    'codebooks/original.ts': ('prose_lines', {'skip_lines': set(range(1, 34)) | {566, 567, 568},
                                              'skip_line': r'^\s*(\{ )?from: "'}),
    'codebook-refinement/CONFUSIONS.md': ('prose', {}),
    # STRUCTURE.md also names v1 domains as "D1".."D12" (elsewhere "D4" is a decision id).
    'codebook-refinement/v2/STRUCTURE.md': ('prose', {'dshort': True}),
    'codebook-refinement/proposals/TEMPLATE.md': ('prose', {}),
    '.claude/agents/codebook-citation-verifier.md': ('prose', {}),
    **{f'codebook-refinement/proposals/{f}': ('prose', {}) for f in sorted(os.listdir(os.path.join(ROOT, 'codebook-refinement/proposals')))
       if f.startswith('CP-01-') or f.startswith('CP-04-05') or f.startswith('CP-04-06')},
    'codebooks/consistency.test.ts': ('prose', {}),
    'codebooks/geminiSchema.test.ts': ('prose', {}),
    'services/codebookExplorer.test.ts': ('prose', {}),
    'services/geminiService.test.ts': ('prose', {}),
    'services/reviewNormalization.test.ts': ('prose', {}),
    'codebook-refinement/sources/original.sources.json': ('sources', {}),
    'codebook-refinement/gold/original.gold.csv': ('csv', {'codes': ['expected_code', 'acceptable_alternates'], 'prose': ['rationale']}),
    'codebook-refinement/gold/gold-cycle02.csv': ('csv', {'codes': ['v1_coder_a', 'v1_coder_b', 'v1_gold', 'v1_alternates'], 'prose': ['codebook_issues', 'adjudication_note']}),
    'codebook-refinement/v2/v1-to-v2-crosswalk.csv': ('csv', {'codes': ['v1_code'], 'prose': ['note']}),
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dump', required=True)
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--map-only', action='store_true')
    args = ap.parse_args()
    dump = json.load(open(args.dump))
    if dump['version'] != '1.2.0':
        sys.exit(f"codebook version is {dump['version']}, not 1.2.0: already renumbered?")
    domain_map, code_map, rows = build_map(dump)
    assert len(set(domain_map.values())) == len(domain_map)
    assert len(set(code_map.values())) == len(code_map)
    prose = make_prose(domain_map, code_map)

    if not args.dry_run:
        with open(os.path.join(HERE, 'v1.2.0-to-v2.0.0.csv'), 'w', newline='') as fh:
            w = csv.writer(fh, lineterminator='\n')
            w.writerow(['kind', 'old_code', 'new_code', 'old_label', 'new_label'])
            w.writerows(rows)
        write_ts_module(rows)
    if args.map_only:
        return
    if "version: '1.2.0'" not in open(os.path.join(ROOT, 'codebooks/original.ts')).read():
        sys.exit('codebooks/original.ts is no longer v1.2.0: files were already renumbered')

    for rel, (mode, opt) in TARGETS.items():
        path = os.path.join(ROOT, rel)
        text = open(path, newline='').read()
        changes = []
        if mode == 'prose':
            new = prose(text)
            if opt.get('dshort'):
                new = re.sub(r'(?<![\w])D(\d{1,2})\b(?!\.\d)', lambda m: 'D' + domain_map[m.group(1)], new)
        elif mode == 'prose_lines':
            out = []
            for n, line in enumerate(text.split('\n'), start=1):
                skip = n in opt['skip_lines'] or re.search(opt['skip_line'], line)
                out.append(line if skip else prose(line))
            new = '\n'.join(out)
        elif mode == 'sources':
            data = json.loads(text)
            for s in data['sources']:
                if 'notes' in s: s['notes'] = prose(s['notes'])
                for sup in s['supports']:
                    sup['code'] = code_map[sup['code']]
                    if 'verifier_note' in sup: sup['verifier_note'] = prose(sup['verifier_note'])
            for e in data['codebook_extensions']:
                e['code'] = code_map[e['code']]
                e['reason'] = prose(e['reason'])
            new = json.dumps(data, indent=2, ensure_ascii=False) + '\n'
        elif mode == 'csv':
            table = list(csv.reader(io.StringIO(text)))
            head = table[0]
            for r in table[1:]:
                for col in opt['codes']:
                    i = head.index(col); r[i] = map_code_cell(r[i], code_map, domain_map)
                for col in opt['prose']:
                    i = head.index(col); r[i] = prose(r[i])
            o = io.StringIO(); csv.writer(o, lineterminator='\n').writerows(table)
            new = o.getvalue()
        old_lines, new_lines = text.split('\n'), new.split('\n')
        if len(old_lines) == len(new_lines):
            changes = [(i + 1, a, b) for i, (a, b) in enumerate(zip(old_lines, new_lines)) if a != b]
        else:
            changes = [(0, '<line count changed>', '')]
        print(f'### {rel}: {len(changes)} lines changed')
        for n, a, b in changes:
            print(f'  {n}: - {a[:300]}\n  {n}: + {b[:300]}')
        if not args.dry_run and new != text:
            open(path, 'w', newline='').write(new)


if __name__ == '__main__':
    main()
