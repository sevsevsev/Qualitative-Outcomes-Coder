// Narrative text (a program description or an organization's mission
// statement) mixes activities with results. Coding it whole would turn
// activities into outcome codes, so the coder first asks Gemini to quote only
// the results the text states (api/extract-results.ts), keeps the quotes that
// really appear in the text, and codes each quote as its own outcome.
//
// Everything here is pure and client-safe; the Gemini call lives in
// api/_lib/gemini.ts.

/** source_type values whose text goes through result extraction before coding. */
export const EXTRACTION_SOURCE_TYPES = ['description_narrative', 'mission_statement'] as const;

export const needsExtraction = (sourceType: unknown): boolean =>
  (EXTRACTION_SOURCE_TYPES as readonly string[]).includes(String(sourceType ?? '').trim());

export const EXTRACTION_INSTRUCTION = `You read short narrative texts about youth-serving programs: program descriptions and organization mission statements. For each text, quote the RESULTS it says the program or organization intends to bring about, and nothing else.

A result is a change in people or places: what young people, families, adult participants, staff, schools or communities will gain, become, do differently, or have. Examples of results: "increase self-awareness and self-regulation", "build confidence and enhance self esteem", "improve the overall health of students", "launching them towards success", "keep children off the streets".

Never quote:
- Activities, services, curricula or methods ("provides hands-on academic support", "weekly lessons during class", "facilitate twelve cohorts", "peer-to-peer leadership with horses").
- Who is served, where, when, how often or how many ("7th and 8th grade students", "in District-operated schools", "twelve middle schools").
- Funding, partners, history or credentials ("Funded by the City of Philadelphia", "Since 2017").
- Claims about research or the world ("Overwhelming evidence shows ...").
- Results for the organization itself (fundraising, growth, reputation).

Rules:
1. Each quote must be copied EXACTLY from the text: same words, same order, same spelling. Do not paraphrase, fix typos, join pieces from different places, or add words.
2. Quote the shortest span that states the whole result. When the same clause names whose change it is, start the quote there so the quote says who changes: "help parents feel confident, connected, and calm", not "feel confident, connected, and calm"; "enable individuals and families in predominantly Latino neighborhoods to achieve economic self-sufficiency", not "achieve economic self-sufficiency". Otherwise start at the result's verb or noun ("increase self-awareness and self-regulation", not "is designed to increase self-awareness and self-regulation").
3. When one span lists several results, quote the span once; the coder splits it later.
4. A purpose clause attached to an activity counts when it names a result: from "workshops that build confidence", quote "build confidence".
5. Vague results still count ("achieve success in school and in life"); the coder decides how specific they are.
6. Return an empty list when the text states no result. That is a correct, common answer.
7. Return at most 8 quotes per text, in the order they appear.
8. For each quote also return "who": the words in the text that name whose change it is ("parents", "students", "refugees and immigrants", "urban communities"), copied exactly. Use "" when the text does not say.

Return every input row_id exactly once.`;

const normalize = (s: string): string =>
  s
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const cleanQuote = (q: unknown): string => String(q ?? '').trim().replace(/^["'“‘]+|["'”’.,;:]+$/g, '').trim();

/**
 * Keeps only quotes that appear word for word in `text` (ignoring case,
 * whitespace and curly-vs-straight punctuation), drops duplicates and quotes
 * contained in another kept quote. Returns the kept quotes in the order they
 * appear in the text, plus how many were dropped as not verbatim.
 */
export const verifyQuotes = (text: string, quotes: unknown[]): { kept: string[]; notVerbatim: number } => {
  const source = normalize(text);
  const candidates: string[] = [];
  let notVerbatim = 0;
  for (const q of quotes) {
    const quote = cleanQuote(q);
    if (!quote) continue;
    if (!source.includes(normalize(quote))) { notVerbatim++; continue; }
    if (!candidates.some(c => normalize(c) === normalize(quote))) candidates.push(quote);
  }
  const kept = candidates.filter(q => !candidates.some(o => o !== q && normalize(o).includes(normalize(q))));
  kept.sort((a, b) => source.indexOf(normalize(a)) - source.indexOf(normalize(b)));
  return { kept, notVerbatim };
};

/** One stated result: the quote and, when the text names them, whose change it is. */
export interface StatedResult {
  quote: string;
  who: string;
}

/**
 * Checks the model's results against the text: quotes as in verifyQuotes, and
 * a "who" that does not appear word for word is blanked.
 */
export const verifyResults = (text: string, results: unknown[]): { kept: StatedResult[]; notVerbatim: number } => {
  const asResult = (r: any): StatedResult => (typeof r === 'string' ? { quote: r, who: '' } : { quote: String(r?.quote ?? ''), who: String(r?.who ?? '').trim() });
  const all = (results ?? []).map(asResult);
  const { kept, notVerbatim } = verifyQuotes(text, all.map(r => r.quote));
  const source = normalize(text);
  return {
    kept: kept.map(quote => {
      const who = all.find(r => normalize(cleanQuote(r.quote)) === normalize(quote))?.who ?? '';
      return { quote, who: who && source.includes(normalize(who)) ? who : '' };
    }),
    notVerbatim,
  };
};

export type ExtractionStatus = 'quoted' | 'no_stated_result' | 'error';

/** One input row turned into the rows the coder will see. */
export interface ExpandedRow {
  row: Record<string, any>;
  /** False when there is nothing to code (no stated result, or extraction failed). */
  code: boolean;
}

/**
 * Turns each narrative row into one row per kept quote (other rows pass
 * through unchanged, to be coded as they are). `outcome_text` becomes
 * the quote and the full text moves to `source_text`; the row_id gets a
 * `-q<n>` suffix so every quote can be traced back. A row with no stated
 * result stays as one uncoded row. `shared_text_count` says how many rows in
 * the batch carry the same text (boilerplate shared by several programs).
 */
export const expandExtractedRows = (
  rows: Record<string, any>[],
  quotesByText: Map<string, { quotes: (string | StatedResult)[]; notVerbatim?: number } | { error: string }>,
): ExpandedRow[] => {
  const counts = new Map<string, number>();
  rows.filter(r => needsExtraction(r.source_type)).forEach(r => {
    const key = normalize(String(r.outcome_text ?? ''));
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });

  return rows.flatMap((r): ExpandedRow[] => {
    if (!needsExtraction(r.source_type)) return [{ row: r, code: true }];
    const text = String(r.outcome_text ?? '');
    const base: Record<string, any> = { ...r, source_text: text, shared_text_count: counts.get(normalize(text)) ?? 1 };
    const found = text.trim() ? quotesByText.get(normalize(text)) : { quotes: [] };
    if (!found || 'error' in found) {
      return [{ row: { ...base, extraction_status: 'error' satisfies ExtractionStatus, notes: `Result extraction failed: ${found && 'error' in found ? found.error : 'no answer for this text'}` }, code: false }];
    }
    if (found.notVerbatim) base.quotes_not_verbatim = found.notVerbatim;
    if (found.quotes.length === 0) {
      return [{ row: { ...base, extraction_status: 'no_stated_result' satisfies ExtractionStatus, notes: 'The text states no result, so nothing was coded.' }, code: false }];
    }
    return found.quotes.map((q, i) => {
      const { quote, who } = typeof q === 'string' ? { quote: q, who: '' } : q;
      // The coder sees "group" next to each statement; naming whose change it
      // is keeps a parent or community result from being read as a youth one.
      const row: Record<string, any> = { ...base, row_id: `${r.row_id}-q${i + 1}`, outcome_text: quote, beneficiary: who, extraction_status: 'quoted' satisfies ExtractionStatus };
      if (who) row.group = who;
      return { row, code: true };
    });
  });
};

/** Key used to send each distinct text to extraction once. */
export const extractionKey = (text: string): string => normalize(text);
