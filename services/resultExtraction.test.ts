import { afterEach, describe, expect, it, vi } from 'vitest';
import { expandExtractedRows, extractionKey, needsExtraction, verifyQuotes, verifyResults } from './resultExtraction.js';
import { processBatch } from './geminiService.js';
import { DEFAULT_CODEBOOK_ID } from '../codebooks/index.js';

const DESC = 'Leading the Way is an equine-assisted curriculum designed to increase self-awareness and self-regulation. Gateway HorseWorks will facilitate twelve cohorts.';

describe('verifyQuotes', () => {
  it('keeps quotes found word for word, ignoring case, spacing and curly punctuation', () => {
    const text = 'Students build confidence and enhance self esteem, identity and self expression. They gain new skills.';
    const r = verifyQuotes(text, ['build  Confidence and enhance self esteem, identity and self expression.', 'gain new skills']);
    expect(r).toEqual({ kept: ['build  Confidence and enhance self esteem, identity and self expression', 'gain new skills'], notVerbatim: 0 });
    expect(verifyQuotes('ATY’s goal is to keep kids safe', ["ATY's goal is to keep kids safe"]).kept).toHaveLength(1);
  });

  it('drops paraphrases, duplicates and quotes inside a longer kept quote, and orders by position', () => {
    const r = verifyQuotes(DESC, ['self-regulation', 'improve emotional skills', 'increase self-awareness and self-regulation', 'increase self-awareness and self-regulation', '', null]);
    expect(r).toEqual({ kept: ['increase self-awareness and self-regulation'], notVerbatim: 1 });
    expect(verifyQuotes('a gains x; b gains y', ['b gains y', 'a gains x']).kept).toEqual(['a gains x', 'b gains y']);
  });
});

describe('verifyResults', () => {
  it('keeps who only when it appears in the text, and accepts plain strings', () => {
    const text = 'At Baby B Soothed, we help parents feel confident, connected, and calm.';
    expect(verifyResults(text, [{ quote: 'help parents feel confident, connected, and calm.', who: 'parents' }, { quote: 'feel calm', who: 'mothers' }, 'feel confident'])).toEqual({
      kept: [{ quote: 'help parents feel confident, connected, and calm', who: 'parents' }],
      notVerbatim: 1,
    });
    expect(verifyResults(text, [{ quote: 'help parents feel confident', who: 'grandparents' }]).kept).toEqual([{ quote: 'help parents feel confident', who: '' }]);
  });
});

describe('expandExtractedRows', () => {
  const quotes = new Map<string, any>([
    [extractionKey(DESC), { quotes: ['increase self-awareness and self-regulation'], notVerbatim: 2 }],
    [extractionKey('We serve 7th graders.'), { quotes: [] }],
    [extractionKey('Broken text'), { error: 'timeout' }],
  ]);

  it('turns a narrative row into one row per quote and passes other rows through', () => {
    const rows = [
      { row_id: 'D1', outcome_text: DESC, source_type: 'description_narrative', program_key: '1_2' },
      { row_id: 'L1', outcome_text: 'Students read more', source_type: 'logic_model' },
    ];
    const out = expandExtractedRows(rows, quotes);
    expect(out).toEqual([
      { code: true, row: { row_id: 'D1-q1', outcome_text: 'increase self-awareness and self-regulation', beneficiary: '', source_text: DESC, source_type: 'description_narrative', program_key: '1_2', shared_text_count: 1, quotes_not_verbatim: 2, extraction_status: 'quoted' } },
      { code: true, row: rows[1] },
    ]);
  });

  it('keeps rows with no stated result, a failed extraction or blank text as single uncoded rows', () => {
    const out = expandExtractedRows([
      { row_id: 'M1', outcome_text: 'We serve 7th graders.', source_type: 'mission_statement' },
      { row_id: 'M2', outcome_text: 'Broken text', source_type: 'mission_statement' },
      { row_id: 'M3', outcome_text: '  ', source_type: 'mission_statement' },
    ], quotes);
    expect(out.map(e => [e.code, e.row.row_id, e.row.extraction_status])).toEqual([
      [false, 'M1', 'no_stated_result'], [false, 'M2', 'error'], [false, 'M3', 'no_stated_result'],
    ]);
    expect(out[1].row.notes).toContain('timeout');
  });

  it('puts whose change it is into beneficiary and group', () => {
    const [e] = expandExtractedRows([{ row_id: 'M9', outcome_text: 'help parents feel calm', source_type: 'mission_statement', group: 'General' }],
      new Map([[extractionKey('help parents feel calm'), { quotes: [{ quote: 'help parents feel calm', who: 'parents' }] }]]));
    expect(e.row).toMatchObject({ beneficiary: 'parents', group: 'parents' });
  });

  it('counts rows that share the same text', () => {
    const out = expandExtractedRows([
      { row_id: 'A', outcome_text: DESC, source_type: 'description_narrative' },
      { row_id: 'B', outcome_text: ` ${DESC.toUpperCase()} `, source_type: 'description_narrative' },
    ], quotes);
    expect(out.map(e => e.row.shared_text_count)).toEqual([2, 2]);
  });

  it('only extracts the two narrative source types', () => {
    expect(['description_narrative', 'mission_statement'].every(needsExtraction)).toBe(true);
    expect(['logic_model', 'program_description', '', undefined].some(needsExtraction)).toBe(false);
  });
});

describe('processBatch with narrative rows', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('extracts and codes each distinct text once, codes only the quotes, and keeps uncoded rows for texts with no result', async () => {
    const calls: { url: string; body: any }[] = [];
    vi.stubGlobal('fetch', vi.fn(async (url: string, init: any) => {
      const body = JSON.parse(init.body);
      calls.push({ url, body });
      const json = url.includes('extract-results')
        ? { items: body.items.map((i: any) => ({ row_id: i.row_id, results: i.text.startsWith('Leading') ? [{ quote: 'increase self-awareness and self-regulation', who: '' }, { quote: 'make them happier', who: '' }] : [] })) }
        : { coded_items: body.items.map((i: any) => ({ row_id: i.row_id, outcome_text: i.outcome_text, split_needed: 'no', split_items: [{ text: i.outcome_text, primary_domain: 'Y4', primary_subcategory: 'none', primary_confidence: 'medium', uncoded: false }], notes: '' })) };
      return { ok: true, json: async () => json, headers: { get: () => 'test-model' } } as any;
    }));
    const csv = [
      'row_id,outcome_text,source_type',
      `D1,"${DESC}",description_narrative`,
      `D2,"${DESC}",description_narrative`,
      'M1,To serve families.,mission_statement',
      'L1,Students read more,logic_model',
    ].join('\n');
    const result = await processBatch(csv, DEFAULT_CODEBOOK_ID, () => {});

    const extractCalls = calls.filter(c => c.url.includes('extract-results'));
    expect(extractCalls).toHaveLength(1);
    expect(extractCalls[0].body.items).toHaveLength(2);
    const coded = calls.filter(c => c.url.includes('analyze-batch')).flatMap(c => c.body.items.map((i: any) => i.outcome_text));
    expect(coded).toEqual(['increase self-awareness and self-regulation', 'Students read more']);

    expect(result.items.map(i => [i.row_id, i.extraction_status ?? '', i.uncoded])).toEqual([
      ['D1-q1', 'quoted', false], ['D2-q1', 'quoted', false], ['M1', 'no_stated_result', true], ['L1', '', false],
    ]);
    expect(result.items[0]).toMatchObject({ source_text: DESC, shared_text_count: 2, quotes_not_verbatim: 1 });
    // The second program's copy carries its own row and the first one's codes.
    expect(result.items[1]).toMatchObject({ row_id: 'D2-q1', atomic_outcome_id: 'D2-q1_1', primary_domain: 'Y4', model_used: 'test-model' });
    expect(result.data).toContain('extraction_status');
  });
});
