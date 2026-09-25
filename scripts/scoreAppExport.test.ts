import { describe, it, expect } from 'vitest';
import { parseAppExport, parseCycle02Gold } from './scoreAppExport.js';
import { scoreRows, selectScoreable } from './codebookEvalScoring.js';

const GOLD = `gold_id,set,program_type,outcome_text,v1_gold,v1_alternates,v1_forced_fit,expected_uncoded,status,adjudicated_by,adjudicated_on
S001,design,gen,"Youth will read, write.",1.2,1.3,0,false,adjudicated,Severin,2026-09-25
S002,design,gen,Youth feel safe.,5.1,,1,false,adjudicated,Severin,2026-09-25
S003,design,gen,Improve outcomes.,none,,0,true,adjudicated,Severin,2026-09-25
H001,heldout,gen,Held out.,2.1,,0,false,adjudicated,Severin,2026-09-25
`;

const EXPORT = `row_id,is_corrected,outcome_text_original,outcome_text_atomic,atomic_outcome_index,atomic_outcome_id,primary_domain,primary_subcategory,primary_confidence,uncoded,codebook_version
S001,false,x,x,2,S001_2,d,1.3 Writing,high,false,original@2.1.0
S001,false,x,x,1,S001_1,d,1.1 Reading,medium,false,original@2.1.0
S002,false,x,x,1,S002_1,d,5.1 Safety,high,false,original@2.1.0
S003,false,x,x,1,S003_1,,,none,true,original@2.1.0
`;

describe('scoring app exports against gold-cycle02', () => {
  it('reads only the requested set, from the live-codebook columns, and flags gaps', () => {
    const gold = parseCycle02Gold(GOLD, 'design');
    expect(gold.map(g => g.gold_id)).toEqual(['S001', 'S002', 'S003']);
    expect(gold[0]).toMatchObject({ expected_code: '1.2', acceptable_alternates: ['1.3'], gap: false });
    expect(gold[1].gap).toBe(true);
    expect(gold[2].expected_uncoded).toBe(true);
  });

  it('groups split items by row in atomic order and reads uncoded rows', () => {
    const { rows, codebookVersions } = parseAppExport(EXPORT);
    expect(rows.find(r => r.gold_id === 'S001')!.primary_codes).toEqual(['1.1', '1.3']);
    expect(rows.find(r => r.gold_id === 'S003')!.uncoded).toBe(true);
    expect(codebookVersions).toEqual(['original@2.1.0']);
  });

  it('scores an export with the shared rules (alternate on a later split counts as lenient)', () => {
    const s = scoreRows(selectScoreable(parseCycle02Gold(GOLD, 'design')), parseAppExport(EXPORT).rows);
    expect(s.rows.map(r => [r.gold_id, r.strict, r.lenient])).toEqual([
      ['S001', false, true],
      ['S002', true, true],
      ['S003', true, true],
    ]);
  });
});
