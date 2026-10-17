#!/usr/bin/env python3
"""3.x code numbers in CONFUSIONS.md and DEVIATIONS.md, generated from the crosswalk (CP-12-27, 3.1.5).

House rule (CLAUDE.md): code numbers are never changed by hand; a script applies a generated
map and a test checks the result. The map is v3/crosswalk-2.5.1-to-3.0.0.csv (built by
v3/build_crosswalk.py). This script:

1. DEVIATIONS.md, the 3.x entries only (between "## Codebook 3.x" and "## Drift count"), field
   lines other than **Status:**: each 2.x code token that is a crosswalk key becomes
   "<old> (now <new>)", or "<old> (now <new> and <targets>)" for a split row. A token already
   followed by " (now " is skipped, so the script can be re-run after other CPs edit an entry.
   Only FD-P01..FD-P20, the entries written when 3.0 was built from 2.x, are annotated; the 2.x
   section (FD-001..FD-005) describes codebooks/original.ts and is not touched.
2. CONFUSIONS.md: for each 2.x entry in SOURCES, writes a 3.x copy into the "Codebook 3.x
   tie-breakers" section (replacing an earlier generated copy of it, so a re-run gives the same
   file). Each one-to-one or merge token becomes its 3.x code; a split token is written as
   "<old> [2.x; split in 3.0: ...]" and makes the entry "open". Each **Gold:** G-id is mapped to
   the v3 design row with the same outcome_text, and that row's adjudicated code must be one of
   the entry's 3.x codes, or the entry is "open". The 2.x block is left exactly as it is.

CF-008 (family codes) is not generated: its 3.x copy contradicts live F1.9 and A2.6 and waits
for S176's re-review (decision G14). Held-out gold is never read.

    python3 codebook-refinement/v3/renumber_2x_refs.py            # dry run: print changes
    python3 codebook-refinement/v3/renumber_2x_refs.py --write
"""
import csv
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REF = HERE.parent
CROSSWALK = HERE / 'crosswalk-2.5.1-to-3.0.0.csv'
DEVIATIONS = REF / 'DEVIATIONS.md'
CONFUSIONS = REF / 'CONFUSIONS.md'
GOLD_2X = REF / 'gold/original.gold.csv'
GOLD_V3 = REF / 'gold/youth_outcomes_v3.gold.csv'

# 2.x entry -> real 3.x id (provisional CF-P06, CF-P08, CF-P09; see full-review/id-map.csv).
SOURCES = {'CF-003': 'CF-031', 'CF-016': 'CF-032', 'CF-019': 'CF-033'}
# The one non-generated input: the live 3.x rule already routes this CASEL skill (tested).
OVERRIDE = {('CF-016', '6.4'): ('Y5.6', 'rulesText rule 14: "initiative or personal agency -> Y5.6 (Y6.4 if civic)"')}

# The entries written when 3.0 was built from 2.x (CP-08-01). Later entries (FD-P21 on) were written
# with 3.x ids, and their numbers (standard indicators such as NHES 4.5.5) are not 2.x codes.
ENTRIES_3_0 = {f'FD-P{n:02d}' for n in range(1, 21)}
TOKEN = re.compile(r'(?<![\w.#§$-])(\d{1,2}\.\d{1,2}(?:\.\d)?)(?![.\d]\d|\.x)')
SECTION_3X = '## Codebook 3.x tie-breakers'


def crosswalk():
    """{2.x code: (3.x code, [split targets])}."""
    out = {}
    with CROSSWALK.open() as f:
        for r in csv.DictReader(f):
            old, new = r['old_code'].split(' ')[0], r['new_code'].split(' ')[0]
            targets = [t.strip().split(' ')[0] for t in r['re_review_targets'].split('|') if t.strip()] if r['mapping'] == 'split' else []
            out[old] = (new, targets)
    return out


def annotate_deviations(text, cw):
    start, end = text.index('\n## Codebook 3.x'), text.index('\n## Drift count')
    lines, changed, entry = text[start:end].split('\n'), [], None
    for k, line in enumerate(lines):
        if line.startswith('### '):
            entry = line[4:].split(' ')[0]
        if entry not in ENTRIES_3_0 or not line.startswith('- **') or line.startswith('- **Status:**'):
            continue

        def sub(m):
            tok = m.group(1)
            if tok not in cw or line[m.end():].startswith(' (now '):
                return tok
            new, targets = cw[tok]
            return f"{tok} (now {' and '.join([new] + targets)})"
        after = TOKEN.sub(sub, line)
        if after != line:
            changed.append((line, after))
            lines[k] = after
    return text[:start] + '\n'.join(lines) + text[end:], changed


def blocks(text):
    """{CF id: block text} for '### CF-xxx' headings."""
    out = {}
    for m in re.finditer(r'^### (CF-\d{3}):.*?(?=^### |^## |^---$|\Z)', text, re.M | re.S):
        out.setdefault(m.group(1), m.group(0))
    return out


def read_csv(path):
    with path.open() as f:
        return list(csv.DictReader(f))


def generate(src_id, new_id, block, cw, gold2x, goldv3):
    flags = []
    head, body = block.split('\n', 1)
    title = re.match(r'^### CF-\d{3}: (.*?) · (\w+)\s*$', head).group(1)

    def sub(m):
        tok = m.group(1)
        if (src_id, tok) in OVERRIDE:
            return OVERRIDE[(src_id, tok)][0]
        if tok not in cw:
            return tok
        new, targets = cw[tok]
        if targets:
            flags.append(f'{tok} is a split row in 3.0 ({new}, {", ".join(targets)})')
            return f"{tok} [2.x; split in 3.0: {', '.join([new] + targets)}]"
        return new

    out_lines = []
    for line in body.rstrip('\n').split('\n'):
        if line.startswith('**Gold:**'):
            continue
        out_lines.append(TOKEN.sub(sub, line))
    body3 = '\n'.join(out_lines).strip('\n')
    codes3 = set(re.findall(r'\b([YFA]\d+\.\d+)\b', body3))

    gold_ids = re.findall(r'\bG-\d{3}\b', re.search(r'^\*\*Gold:\*\*(.*)$', block, re.M).group(1))
    by_text = {}
    for r in goldv3:
        by_text.setdefault(r['outcome_text'].strip(), []).append(r)
    mapped = []
    for g in gold_ids:
        text = gold2x[g]['outcome_text'].strip()
        hits = by_text.get(text, [])
        if len(hits) != 1:
            flags.append(f'{g}: {len(hits)} v3 design rows with the same text')
            continue
        r = hits[0]
        code = r['v3_gold'].split(' ')[0]
        if r['status'] != 'adjudicated' or code not in codes3:
            flags.append(f'{g} -> {r["gold_id"]} is {r["status"]} {code}, not one of the entry\'s codes')
        mapped.append(f'{r["gold_id"]} ({code})')

    status = 'open' if flags else 'active'
    note = f'_Renumbered from {src_id} by `v3/renumber_2x_refs.py`; do not edit by hand.'
    over = [f' One override: {tok} → {code}, from {why.split(":")[0]}.' for (s, tok), (code, why) in OVERRIDE.items() if s == src_id]
    note += ''.join(over) + '_'
    text = f'### {new_id}: {title} (3.x ids) · {status} (generated)\n\n{note}\n\n{body3}\n\n**Gold:** {", ".join(mapped)}\n'
    if flags:
        text += '\n**Generated flags:** ' + '; '.join(flags) + '. Do not apply this entry until it is restated.\n'
    return text, flags


def update_confusions(text, cw):
    assert SECTION_3X in text, 'CP-12-15 creates the 3.x section first'
    two_x = blocks(text.split(SECTION_3X)[0])
    gold2x = {r['gold_id']: r for r in read_csv(GOLD_2X)}
    goldv3 = read_csv(GOLD_V3)
    out = text
    report = []
    for src_id, new_id in SOURCES.items():
        new_block, flags = generate(src_id, new_id, two_x[src_id], cw, gold2x, goldv3)
        old = re.search(rf'^### {new_id}:.*?(?=^### |^## |^---$|\Z)', out, re.M | re.S)
        if old:
            out = out[:old.start()] + new_block + ('\n' if out[old.end():] else '') + out[old.end():]
        else:
            out = out.rstrip('\n') + '\n\n' + new_block
        report.append((new_id, src_id, flags))
    return out, report


def main(write):
    cw = crosswalk()
    dev, changed = annotate_deviations(DEVIATIONS.read_text(), cw)
    for before, after in changed:
        print(f'DEVIATIONS.md\n  - {before}\n  + {after}')
    conf_before = CONFUSIONS.read_text()
    conf, report = update_confusions(conf_before, cw)
    for new_id, src_id, flags in report:
        print(f'CONFUSIONS.md {new_id} from {src_id}: {"open: " + "; ".join(flags) if flags else "active"}')
    print(f'{len(changed)} DEVIATIONS line(s); CONFUSIONS {"changed" if conf != conf_before else "unchanged"}')
    if write:
        DEVIATIONS.write_text(dev)
        CONFUSIONS.write_text(conf)
    else:
        print('dry run; pass --write')


if __name__ == '__main__':
    main('--write' in sys.argv[1:])
