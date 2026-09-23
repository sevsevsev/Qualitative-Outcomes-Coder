
import { BatchAnalysisResult, BatchItemResult, AtomicBatchItem, CodebookType } from "../types.js";
import { getCodebook } from "../codebooks/index.js";
import { normalizeSecondarySubcategory } from "./reviewNormalization.js";

// Trim/normalize a codebook string coming back from the model. Domain and
// subcategory values are now constrained via enum in the response schema
// (see codebooks/geminiSchema.ts + api/analyze-batch.ts), so the model
// cannot return a value outside the codebook's own list -- this is just a
// defensive whitespace trim, not the string-surgery it used to be.
const cleanCodebookString = (val: string | undefined): string => (val ?? "").trim();

export const parseCSV = (text: string): any[] => {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let insideQuotes = false;

  // Remove BOM and normalize newlines
  const cleanText = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const nextChar = cleanText[i+1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++; // Skip next quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell);
      currentCell = '';
    } else if (char === '\n' && !insideQuotes) {
       currentRow.push(currentCell);
       // Only add row if it has content
       if (currentRow.some(c => c.trim().length > 0)) {
         rows.push(currentRow);
       }
       currentRow = [];
       currentCell = '';
    } else {
      currentCell += char;
    }
  }

  // Handle last row if no newline at EOF
  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell);
    if (currentRow.some(c => c.trim().length > 0)) {
        rows.push(currentRow);
    }
  }

  if (rows.length < 1) throw new Error("File appears to be empty.");
  // We allow headers only (length 1) but generally expect data

  const headers = rows[0].map(h => h.trim());

  // Robust matching for Outcome Text
  const outcomeHeaderIndex = headers.findIndex(h => {
    const lower = h.toLowerCase().replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    return [
      'outcome text',
      'outcome',
      'outcomes',
      'objective',
      'goal'
    ].includes(lower);
  });

  if (outcomeHeaderIndex === -1) {
    // Check for semi-colon delimiter issue
    if (headers.length === 1 && headers[0].includes(';')) {
      throw new Error("It looks like your CSV uses semicolons (;) as delimiters. Please save it as a standard Comma Separated Value (CSV) file.");
    }
    throw new Error(`CSV must contain an 'outcome_text' column header. Found headers: [${headers.join(', ')}]`);
  }
  headers[outcomeHeaderIndex] = 'outcome_text';

  // Robust matching for Row ID
  const idHeaderIndex = headers.findIndex(h => {
    const lower = h.toLowerCase().replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    return [
      'row id',
      'id',
      'identifier',
      'ref',
      'number',
      '#'
    ].includes(lower);
  });
  if (idHeaderIndex !== -1) {
    headers[idHeaderIndex] = 'row_id';
  }

  // Robust matching for Group
  const groupHeaderIndex = headers.findIndex(h => {
    const lower = h.toLowerCase().replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    return [
      'group',
      'target group',
      'population',
      'segment'
    ].includes(lower);
  });
  if (groupHeaderIndex !== -1) {
    headers[groupHeaderIndex] = 'group';
  }

  return rows.slice(1).map(row => {
    const obj: any = {};
    headers.forEach((h, i) => {
      // Handle cases where row might be shorter than header (missing trailing commas)
      obj[h] = row[i] !== undefined ? row[i] : "";
    });
    return obj;
  });
};

const flattenToAtomic = (results: BatchItemResult[], codebookType: CodebookType): AtomicBatchItem[] => {
  const atomicItems: AtomicBatchItem[] = [];
  const codebook = getCodebook(codebookType);
  const codebookVersion = `${codebook.id}@${codebook.version}`;

  results.forEach(item => {
    const splits = item.split_items && item.split_items.length > 0 ? item.split_items : [];
    const {
      split_items,
      split_needed,
      original_text,
      outcome_text,
      primary_domain,
      primary_subcategory,
      primary_confidence,
      primary_subject_area,
      primary_target_population,
      uncoded,
      notes,
      model_used,
      ...metadata
    } = item;

    const safeRowId = String(item.row_id);

    if (splits.length === 0) {
      atomicItems.push({
        ...metadata,
        row_id: safeRowId,
        atomic_outcome_id: `${safeRowId}_1`,
        outcome_text_original: item.original_text,
        outcome_text_atomic: item.original_text,
        atomic_outcome_index: 1,
        primary_domain: cleanCodebookString(item.primary_domain),
        primary_subcategory: cleanCodebookString(item.primary_subcategory),
        primary_confidence: "none",
        primary_subject_area: "",
        primary_target_population: "",
        secondary_domain_1: "",
        secondary_subcategory_1: "",
        secondary_confidence_1: "",
        secondary_domain_2: "",
        secondary_subcategory_2: "",
        secondary_confidence_2: "",
        uncoded: true,
        notes: item.notes || "Processing failed or no codes assigned",
        is_corrected: false,
        codebook_version: codebookVersion,
        model_used: model_used || "",
      });
    } else {
      splits.forEach((split, index) => {
        const idx = index + 1;
        const sec1 = split.secondary_codes?.[0];
        const sec2 = split.secondary_codes?.[1];

        // Ensure boolean type for uncoded to prevent string "false" issues
        const isUncoded = split.uncoded === true || String(split.uncoded).toLowerCase() === 'true';

        atomicItems.push({
          ...metadata,
          row_id: safeRowId,
          atomic_outcome_id: `${safeRowId}_${idx}`,
          outcome_text_original: item.original_text,
          outcome_text_atomic: split.text,
          atomic_outcome_index: idx,
          primary_domain: cleanCodebookString(split.primary_domain),
          primary_subcategory: cleanCodebookString(split.primary_subcategory),
          primary_confidence: split.primary_confidence || "none",
          primary_subject_area: split.subject_area === "none" ? "" : (split.subject_area || ""),
          primary_target_population: split.target_population_primary === "none" ? "" : (split.target_population_primary || ""),

          secondary_domain_1: cleanCodebookString(sec1?.domain),
          secondary_subcategory_1: cleanCodebookString(sec1?.subcategory),
          secondary_confidence_1: sec1?.confidence || "",

          secondary_domain_2: cleanCodebookString(sec2?.domain),
          secondary_subcategory_2: cleanCodebookString(sec2?.subcategory),
          secondary_confidence_2: sec2?.confidence || "",

          uncoded: isUncoded,
          notes: item.notes || "",
          is_corrected: false,
          codebook_version: codebookVersion,
          model_used: model_used || "",
        });
      });
    }
  });

  return atomicItems;
};

export const atomicJsonToCSV = (items: AtomicBatchItem[]): string => {
  if (items.length === 0) return "";
  const fixedStart = ["row_id", "is_corrected", "outcome_text_original", "outcome_text_atomic", "atomic_outcome_index", "atomic_outcome_id"];
  const fixedEnd = ["primary_domain", "primary_subcategory", "primary_confidence", "primary_subject_area", "primary_target_population", "secondary_domain_1", "secondary_subcategory_1", "secondary_confidence_1", "secondary_domain_2", "secondary_subcategory_2", "secondary_confidence_2", "uncoded", "notes", "codebook_version", "model_used"];
  const allKeys = new Set<string>();
  items.forEach(item => Object.keys(item).forEach(k => allKeys.add(k)));
  const dynamicKeys = Array.from(allKeys).filter(k => !fixedStart.includes(k) && !fixedEnd.includes(k) && k !== 'is_corrected').sort();
  const allHeaders = [...fixedStart, ...dynamicKeys, ...fixedEnd];
  const escapeCsv = (val: any) => {
    if (val === null || val === undefined) return "";
    const str = String(val);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };
  const headerRow = allHeaders.map(escapeCsv).join(",");
  const rows = items.map(item => allHeaders.map(header => escapeCsv(item[header])).join(","));
  return [headerRow, ...rows].join("\n");
};

// Retry wrapper logic with Logging
const analyzeBatchChunkWithRetry = async (items: any[], codebookType: CodebookType, logCallback: (msg: string) => void, retries = 3): Promise<BatchItemResult[]> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await analyzeBatchChunk(items, codebookType);
    } catch (e: any) {
      const isLastAttempt = attempt === retries;
      if (isLastAttempt) throw e;

      const delay = 1000 * Math.pow(2, attempt - 1); // Exponential backoff: 1s, 2s, 4s
      logCallback(`⚠️ Error: ${e.message.slice(0, 50)}... Retrying in ${delay/1000}s (Attempt ${attempt})`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  return [];
};

// Calls our own /api/analyze-batch serverless function rather than the
// Gemini SDK directly -- the API key lives server-side only (see
// api/analyze-batch.ts) so it never ships in the client bundle.
const analyzeBatchChunk = async (items: any[], codebookType: CodebookType): Promise<BatchItemResult[]> => {
  const codebook = getCodebook(codebookType);
  const simplifiedInput = items.map(item => ({
    row_id: String(item.row_id),
    outcome_text: item.outcome_text || item.original_text,
    group: item.group || "General"
  }));

  const response = await fetch('/api/analyze-batch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: simplifiedInput, codebookType }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `Analysis request failed (${response.status})`);
  }

  const result = await response.json();
  const model_used = response.headers.get('X-Gemini-Model-Used') || "";

  return items.map(original => {
    const coded = result.coded_items?.find((c: any) => String(c.row_id) === String(original.row_id));
    if (!coded) return { ...original, original_text: original.outcome_text, split_needed: "no", split_items: [], uncoded: true, notes: "Error: AI processing skipped this row.", model_used };

    return {
      ...original,
      model_used,
      original_text: coded.outcome_text || original.outcome_text,
      split_needed: coded.split_needed,
      split_items: (coded.split_items || []).map((si: any) => ({
        ...si,
        primary_domain: cleanCodebookString(si.primary_domain),
        primary_subcategory: cleanCodebookString(si.primary_subcategory),
        secondary_codes: si.secondary_codes?.map((sc: any) => {
          const domain = cleanCodebookString(sc.domain);
          return { ...sc, domain, subcategory: normalizeSecondarySubcategory(sc.subcategory, domain, codebook) };
        }) || []
      })),
      primary_domain: cleanCodebookString(coded.primary_domain),
      primary_subcategory: cleanCodebookString(coded.primary_subcategory),
      primary_confidence: coded.primary_confidence,
      primary_subject_area: coded.primary_subject_area,
      primary_target_population: coded.primary_target_population,
      uncoded: coded.uncoded,
      notes: coded.notes
    };
  });
};

export const processBatch = async (fileContent: string, codebookType: CodebookType, onProgress: (processed: number, total: number, log: string) => void): Promise<BatchAnalysisResult> => {
  let itemsToProcess: any[] = [];
  try {
    onProgress(0, 0, "Parsing input file...");
    itemsToProcess = parseCSV(fileContent);
    itemsToProcess = itemsToProcess.map((item, index) => ({ ...item, row_id: String(item.row_id || item.id || `gen_row_${index + 1}`) }));
  } catch (e: any) { throw new Error(`Failed to parse file: ${e.message}`); }

  const total = itemsToProcess.length;
  if (total === 0) throw new Error("No items found to process.");
  onProgress(0, total, `Found ${total} items. Starting batch analysis...`);

  const CHUNK_SIZE = 5;
  const CONCURRENCY = 2; // Reduced from 3 to help with Rate Limiting stability

  // Create chunks
  const chunks = [];
  for (let i = 0; i < total; i += CHUNK_SIZE) {
    chunks.push({
      index: i,
      data: itemsToProcess.slice(i, i + CHUNK_SIZE)
    });
  }

  const resultsMap = new Map<number, BatchItemResult[]>();
  let processedItems = 0;

  // Worker function
  const processChunk = async (chunk: {index: number, data: any[]}) => {
    // Unique logger for this chunk to bubble up retries
    const chunkNum = Math.floor(chunk.index/CHUNK_SIZE) + 1;
    const totalChunks = chunks.length;
    const logPrefix = `[Chunk ${chunkNum}/${totalChunks}]`;

    const log = (msg: string) => onProgress(processedItems, total, `${logPrefix} ${msg}`);

    log(`Starting analysis of ${chunk.data.length} items...`);

    try {
      const chunkResults = await analyzeBatchChunkWithRetry(chunk.data, codebookType, log);
      resultsMap.set(chunk.index, chunkResults);
      const modelUsed = chunkResults[0]?.model_used;
      if (modelUsed) log(`Coded with ${modelUsed}.`);
    } catch (e: any) {
       const errorResults = chunk.data.map(item => ({
         ...item,
         split_needed: "no",
         split_items: [],
         uncoded: true,
         notes: `System Error: ${e.message}`
       }));
       resultsMap.set(chunk.index, errorResults);
       log(`❌ Failed: ${e.message}`);
    } finally {
      processedItems += chunk.data.length;
      onProgress(processedItems, total, `${logPrefix} Finished.`);
    }
  };

  // Run with concurrency limit
  const queue = [...chunks];
  const workers = Array(Math.min(CONCURRENCY, chunks.length)).fill(null).map(async () => {
    while(queue.length > 0) {
      const chunk = queue.shift();
      if(chunk) {
         await processChunk(chunk);
         // Small jitter to prevent thundering herd on API
         await new Promise(r => setTimeout(r, 500));
      }
    }
  });

  await Promise.all(workers);

  // Reassemble sorted by index
  let allResults: BatchItemResult[] = [];
  chunks.sort((a,b) => a.index - b.index).forEach(c => {
    const res = resultsMap.get(c.index);
    if(res) allResults = allResults.concat(res);
  });

  const atomicResults = flattenToAtomic(allResults, codebookType);
  // Return both items array and CSV string
  return { type: 'csv', data: atomicJsonToCSV(atomicResults), items: atomicResults };
};
