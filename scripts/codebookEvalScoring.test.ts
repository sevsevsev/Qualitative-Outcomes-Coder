import { describe, it, expect } from 'vitest';
import { codePrefix, cohensKappa, parseCsvRecords, parseGold, regressions, scoreRows, selectScoreable, type CodedRow } from './codebookEvalScoring.js';

const GOLD = `gold_id,outcome_text,program_type,expected_code,acceptable_alternates,expected_uncoded,confusion_ids,requires_cp,rationale,origin,status,adjudicated_by,adjudicated_on
G-1,"Youth will budget, save, and bank.",fin,8.9,,false,CF-001,CP-01-05,r,o,adjudicated,Severin,2026-09-24
G-2,Students will learn breathing techniques.,sbmh,3.2.2,3.2.1,false,CF-003,,r,o,adjudicated,Severin,2026-09-24
G-3,Improve outcomes.,gen,none,,true,,,r,o,adjudicated,Severin,2026-09-24
G-4,Youth will feel safe.,comm,5.1,,false,CF-017,,r,o,proposed,,
`;

describe('codebook eval scoring', () => {
  it('parses quoted CSV fields with commas', () => {
    const recs = parseCsvRecords(GOLD);
    expect(recs).toHaveLength(4);
    expect(recs[0].outcome_text).toBe('Youth will budget, save, and bank.');
  });

  it('extracts numeric code prefixes', () => {
    expect(codePrefix('3.2.2 Stress management & coping skills')).toBe('3.2.2');
    expect(codePrefix('10.5 Program Participation')).toBe('10.5');
    expect(codePrefix('none')).toBe('none');
    expect(codePrefix(undefined)).toBe('none');
  });

  it('only scores adjudicated rows whose CP is applied (anti-drift rule)', () => {
    const gold = parseGold(GOLD);
    expect(selectScoreable(gold).map(g => g.gold_id)).toEqual(['G-2', 'G-3']);
    expect(selectScoreable(gold, { appliedCps: ['CP-01-05'] }).map(g => g.gold_id)).toEqual(['G-1', 'G-2', 'G-3']);
    expect(selectScoreable(gold, { includeProposed: true }).map(g => g.gold_id)).toEqual(['G-2', 'G-3', 'G-4']);
  });

  it('scores strict vs lenient and uncoded rows', () => {
    const gold = selectScoreable(parseGold(GOLD));
    const coded: CodedRow[] = [
      { gold_id: 'G-2', primary_codes: ['3.2.1'], confidences: ['high'], uncoded: false },
      { gold_id: 'G-3', primary_codes: ['none'], confidences: ['none'], uncoded: true },
    ];
    const s = scoreRows(gold, coded);
    expect(s.strict_accuracy).toBe(0.5);
    expect(s.lenient_accuracy).toBe(1);
    expect(s.by_confusion['CF-003']).toEqual({ n: 1, lenient_correct: 1 });
  });

  it('flags a regression when a previously-correct row goes wrong', () => {
    const gold = selectScoreable(parseGold(GOLD));
    const base = scoreRows(gold, [{ gold_id: 'G-2', primary_codes: ['3.2.2'], confidences: ['high'], uncoded: false }]);
    const cand = scoreRows(gold, [{ gold_id: 'G-2', primary_codes: ['7.2'], confidences: ['high'], uncoded: false }]);
    expect(regressions(base, cand).map(r => r.gold_id)).toEqual(['G-2']);
    expect(cand.error_pairs[0]).toMatchObject({ expected: '3.2.2', got: '7.2' });
  });

  it('computes Cohen kappa for run-to-run stability', () => {
    const a: CodedRow[] = [
      { gold_id: '1', primary_codes: ['1.1'], confidences: [], uncoded: false },
      { gold_id: '2', primary_codes: ['2.1'], confidences: [], uncoded: false },
    ];
    expect(cohensKappa(a, a).kappa).toBe(1);
    const b: CodedRow[] = [a[0], { gold_id: '2', primary_codes: ['1.1'], confidences: [], uncoded: false }];
    const k = cohensKappa(a, b);
    expect(k.agreement).toBe(0.5);
    expect(k.disagreements).toEqual(['2: 2.1 vs 1.1']);
  });
});
