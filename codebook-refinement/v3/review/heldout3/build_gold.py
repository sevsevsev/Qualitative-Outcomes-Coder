"""Rebuild gold/youth_outcomes_v3.heldout.gold.csv from Severin's saved review-page decisions.

Usage: python3 codebook-refinement/v3/review/heldout3/build_gold.py codebook-refinement/gold/youth_outcomes_v3.heldout.gold.csv
Only rows with a recorded decision (one by one, or bulk-confirmed unflagged rows) become adjudicated.
"""
import json,os,csv,sys
H=os.path.dirname(os.path.abspath(__file__))
D=json.load(open(H+'/review-page-data.json'))
names={c['id']:c['n'] for d in D['codes'] for cat in d['cats'] for c in cat['codes']}
V=json.load(open(H+'/verdicts-2026-09-26.json'))
B=json.load(open(H+'/bulk-2026-09-26.json'))
name=lambda i: 'none' if i=='none' else (i+' '+names[i] if i in names else i)
cols=['gold_id','set','outcome_text','v3_gold','v3_suggested','v3_alternates','coder_a','coder_b','needs_review','review_reason','codebook_gap','expected_uncoded','adjudication_note','status','adjudicated_by','adjudicated_on']
out=csv.DictWriter(open(sys.argv[1],'w',newline=''),fieldnames=cols,lineterminator='\n'); out.writeheader()
rows=sorted(D['rows'],key=lambda r:r['id']); undecided=[]
for r in rows:
    v=V.get(r['id']); bulk= (not r['f']) and r['id'] in B.get('ids',[])
    d=bool(v) or bulk
    if not d: undecided.append(r['id'])
    code=v['code'] if v else (r['s'] if d else '')
    alts=(v.get('alts') or []) if v else (r['a'] if d else [])
    on=v['on'] if v else (B.get('on','') if d else '')
    out.writerow(dict(gold_id=r['id'],set='heldout3',outcome_text=r['t'],v3_gold=name(code) if d else '',v3_suggested=name(r['s']) if r['s'] else '',
      v3_alternates=' | '.join(name(a) for a in alts),coder_a=' | '.join(c[0] for c in r['ca']),coder_b=' | '.join(c[0] for c in r['cb']),
      needs_review='yes' if r['f'] else 'no',review_reason=r['why'],codebook_gap='1' if v and v.get('gap') else '0',
      expected_uncoded=str(code=='none').lower() if d else '',adjudication_note=('Severin: '+v['note']) if v and v.get('note') else '',
      status='adjudicated' if d else 'proposed',adjudicated_by='Severin' if d else '',adjudicated_on=on))
print('undecided',undecided)
