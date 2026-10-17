import csv,json,collections,re,sys,os
D=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
roles=['methodologist','youth-development','framework','skeptic']
E={r:{x['sid']:x for x in csv.DictReader(open(f'{D}/expert-{r}.csv'))} for r in roles}
chair={x['sid']:x for x in csv.DictReader(open(f'{D}/chair.csv'))} if os.path.exists(f'{D}/chair.csv') else {}
st={r['sid']:r for r in csv.DictReader(open(f'{D}/blind/statements.csv'))}
ai=json.load(open(f'{D}/private/ai_codes.json'))
def tok(p):
  p=p.strip()
  if 'uncoded' in p.lower(): return 'uncoded'
  m=re.match(r'([YFA]\d+(\.\d+)?)',p)
  return m.group(1)+(' domain only' if 'domain' in p.lower() and '.' not in m.group(1) else '') if m else p
def norm(d): return tuple(sorted(tok(p) for p in d.split('|')))
dom=lambda c: 'uncoded' if c=='uncoded' else c.split('.')[0].split()[0]
rows=[]
for sid in sorted(st):
  v=collections.Counter(norm(E[r][sid]['determination']) for r in roles)
  top,n=v.most_common(1)[0]
  if sid in chair: panel=norm(chair[sid]['determination']); how='chair'
  else: panel=top; how=f'{n} of 4'
  gap=(chair[sid]['gap'] if sid in chair else collections.Counter(E[r][sid]['gap'] for r in roles).most_common(1)[0][0])
  a=tuple(sorted(tok(x['ai_code']) for x in ai[sid]))
  exact=a==panel
  setm=set(a)==set(panel)
  domm=set(map(dom,a))==set(map(dom,panel))
  rec=len(set(a)&set(panel))/len(set(panel)); 
  rows.append(dict(sid=sid,statement=st[sid]['outcome_text'],panel=' | '.join(panel),panel_how=how,gap=gap,
    coder_2oct=' | '.join(a),coder_conf=' | '.join(x['conf'] for x in ai[sid]),
    exact=exact,same_codes=setm,same_domains=domm,panel_codes_found=f'{rec:.2f}'))
w=csv.DictWriter(open(f'{D}/scorecard.csv','w'),fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)
N=len(rows)
for k in ['exact','same_codes','same_domains']: print(k,sum(r[k] for r in rows),N)
print('how',collections.Counter(r['panel_how'] for r in rows))
print('gap',sum(r['gap']=='yes' for r in rows))
# per-code: partial credit
print('mean found',sum(float(r['panel_codes_found']) for r in rows)/N)
