
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AnalysisResult, BatchAnalysisResult, BatchJsonResult, BatchItemResult, AtomicBatchItem, CodebookType, CodebookGap } from "../types";
import { CODEBOOK_CONTEXT, BATCH_MODE_INSTRUCTIONS, ACCELERATE_PHILLY_INSTRUCTIONS, CODEBOOK_DOMAINS, ACCELERATE_PHILLY_DOMAINS, ESCALATION_ADDENDUM } from "../constants";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

// Primary pass: fast/cheap model used for every item.
const PRIMARY_MODEL = 'gemini-3-flash-preview';
// Escalation pass: stronger model, only used for items the primary pass
// couldn't confidently code (uncoded, or low/no confidence).
const ESCALATION_MODEL = 'gemini-3-pro-preview';

// Confidence values (on either the row or a split item) that trigger escalation.
const LOW_CONFIDENCE_VALUES = ['low', 'none', ''];

// Decide whether a primary-pass result needs a second, more careful look from
// a stronger model: either nothing was coded at all, or any split came back
// uncoded / low / no confidence.
const needsEscalation = (item: BatchItemResult): boolean => {
  const splits = item.split_items && item.split_items.length > 0 ? item.split_items : null;
  if (!splits) return true; // Model returned no split items at all - treat as needing another attempt.

  return splits.some((s: any) => {
    if (s.uncoded === true || String(s.uncoded).toLowerCase() === 'true') return true;
    const conf = String(s.primary_confidence || '').trim().toLowerCase();
    return LOW_CONFIDENCE_VALUES.includes(conf);
  });
};

// Helper to sanitize codebook values (remove definitions/newlines if hallucinated)
const cleanCodebookString = (val: string | undefined): string => {
  if (!val) return "";
  
  // 1. Take only the first line (removes definitions starting on new lines)
  let clean = val.split(/[\r\n]+/)[0].trim();
  
  // 2. Aggressive truncation if it looks like a definition follows on the same line
  // Common patterns: " - Definition:", " : Definition"
  const defIndex = clean.indexOf(" - Definition");
  if (defIndex > -1) {
    clean = clean.substring(0, defIndex).trim();
  }
  
  // 3. Fallback: If it's still suspiciously long (> 100 chars), truncate it.
  if (clean.length > 100) {
    clean = clean.substring(0, 100).trim() + "...";
  }

  // 4. Strip trailing punctuation that shouldn't be there (like periods or colons at end of line)
  // unless it ends with a closing parenthesis which is common
  if (/[.:]$/.test(clean) && !clean.endsWith(")")) {
      clean = clean.slice(0, -1);
  }

  return clean;
};

// Helper to ensure "Domain " prefix exists for consistent output
const fixDomainPrefix = (domain: string | undefined, codebookType: CodebookType): string => {
  const cleaned = cleanCodebookString(domain);
  if (!cleaned) return "";
  
  if (codebookType === 'original') {
    // If it starts with a number and dot (e.g. "1. ") but lacks "Domain", prepend it
    if (/^\d+\./.test(cleaned) && !cleaned.toLowerCase().startsWith('domain')) {
      return `Domain ${cleaned}`;
    }
  } else if (codebookType === 'accelerate_philly') {
    if (/^\d+/.test(cleaned) && !cleaned.toLowerCase().startsWith('code')) {
      return `Code ${cleaned.padStart(2, '0')}`;
    }
  }
  return cleaned;
};

const splitItemSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    primary_domain: { type: Type.STRING },
    primary_subcategory: { type: Type.STRING },
    primary_confidence: { type: Type.STRING, enum: ["high", "medium", "low", "none"] },
    subject_area: { type: Type.STRING },
    target_population_primary: { 
      type: Type.STRING, 
      enum: [
        "students_youth", 
        "families_caregivers", 
        "educators_staff", 
        "mentors_volunteers", 
        "partner_organizations", 
        "school_district_system", 
        "community_neighborhood", 
        "multiple_populations", 
        "unclear",
        "none"
      ] 
    },
    secondary_codes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          domain: { type: Type.STRING },
          subcategory: { type: Type.STRING },
          confidence: { type: Type.STRING, enum: ["high", "medium", "low"] },
        },
      },
    },
    uncoded: { type: Type.BOOLEAN },
  },
  required: ["text", "primary_domain", "primary_subcategory", "primary_confidence", "subject_area", "target_population_primary", "secondary_codes", "uncoded"],
};

const parseCSV = (text: string): any[] => {
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

  results.forEach(item => {
    const splits = item.split_items && item.split_items.length > 0 ? item.split_items : [];
    const wasEscalated = !!(item as any)._escalated;
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
      _escalated,
      _escalation_model,
      ...metadata
    } = item as any;

    const safeRowId = String(item.row_id);

    if (splits.length === 0) {
      atomicItems.push({
        ...metadata,
        row_id: safeRowId,
        atomic_outcome_id: `${safeRowId}_1`,
        outcome_text_original: item.original_text,
        outcome_text_atomic: item.original_text,
        atomic_outcome_index: 1,
        primary_domain: fixDomainPrefix(item.primary_domain, codebookType),
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
        was_escalated: wasEscalated
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
          primary_domain: fixDomainPrefix(split.primary_domain, codebookType),
          primary_subcategory: cleanCodebookString(split.primary_subcategory),
          primary_confidence: split.primary_confidence || "none",
          primary_subject_area: split.subject_area === "none" ? "" : (split.subject_area || ""),
          primary_target_population: split.target_population_primary === "none" ? "" : (split.target_population_primary || ""),

          secondary_domain_1: fixDomainPrefix(sec1?.domain, codebookType),
          secondary_subcategory_1: cleanCodebookString(sec1?.subcategory),
          secondary_confidence_1: sec1?.confidence || "",

          secondary_domain_2: fixDomainPrefix(sec2?.domain, codebookType),
          secondary_subcategory_2: cleanCodebookString(sec2?.subcategory),
          secondary_confidence_2: sec2?.confidence || "",

          uncoded: isUncoded,
          notes: item.notes || "",
          is_corrected: false,
          was_escalated: wasEscalated
        });
      });
    }
  });

  return atomicItems;
};

export const atomicJsonToCSV = (items: AtomicBatchItem[]): string => {
  if (items.length === 0) return "";
  const fixedStart = ["row_id", "is_corrected", "outcome_text_original", "outcome_text_atomic", "atomic_outcome_index", "atomic_outcome_id"];
  const fixedEnd = ["primary_domain", "primary_subcategory", "primary_confidence", "primary_subject_area", "primary_target_population", "secondary_domain_1", "secondary_subcategory_1", "secondary_confidence_1", "secondary_domain_2", "secondary_subcategory_2", "secondary_confidence_2", "uncoded", "notes"];
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

export const codebookGapsToCSV = (gaps: CodebookGap[]): string => {
  if (gaps.length === 0) return "";
  const headers = ["row_id", "atomic_outcome_id", "outcome_text", "notes", "model_used", "group", "organization", "program"];
  const escapeCsv = (val: any) => {
    if (val === null || val === undefined) return "";
    const str = String(val);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };
  const headerRow = headers.map(escapeCsv).join(",");
  const rows = gaps.map(gap => headers.map(h => escapeCsv((gap as any)[h])).join(","));
  return [headerRow, ...rows].join("\n");
};

// Retry wrapper logic with Logging
const analyzeBatchChunkWithRetry = async (items: any[], codebookType: CodebookType, logCallback: (msg: string) => void, retries = 3, model: string = PRIMARY_MODEL): Promise<BatchItemResult[]> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await analyzeBatchChunk(items, codebookType, model);
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

const analyzeBatchChunk = async (items: any[], codebookType: CodebookType, model: string = PRIMARY_MODEL): Promise<BatchItemResult[]> => {
  if (!apiKey) throw new Error("API Key is missing.");

  const simplifiedInput = items.map(item => ({
    row_id: String(item.row_id),
    outcome_text: item.outcome_text || item.original_text,
    group: item.group || "General"
  }));

  const isEscalation = model === ESCALATION_MODEL;
  const baseInstruction = codebookType === 'accelerate_philly'
    ? ACCELERATE_PHILLY_INSTRUCTIONS
    : BATCH_MODE_INSTRUCTIONS;
  const systemInstruction = isEscalation ? baseInstruction + ESCALATION_ADDENDUM : baseInstruction;

  const response = await ai.models.generateContent({
    model,
    contents: `Analyze these ${items.length} items.\nInput Data:\n${JSON.stringify(simplifiedInput, null, 2)}`,
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      // Thinking Config: Forces the model to reason before answering.
      // Escalation pass gets a larger budget since it's meant to think harder about edge cases.
      thinkingConfig: { thinkingBudget: isEscalation ? 4096 : 1024 },
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          coded_items: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                row_id: { type: Type.STRING },
                outcome_text: { type: Type.STRING },
                split_needed: { type: Type.STRING, enum: ["yes", "no"] },
                split_items: { type: Type.ARRAY, items: splitItemSchema },
                primary_domain: { type: Type.STRING },
                primary_subcategory: { type: Type.STRING },
                primary_confidence: { type: Type.STRING },
                primary_subject_area: { type: Type.STRING },
                primary_target_population: { type: Type.STRING },
                uncoded: { type: Type.BOOLEAN },
                notes: { type: Type.STRING }
              },
              required: ["row_id", "split_needed", "split_items", "notes", "primary_domain", "primary_subcategory", "primary_confidence", "primary_subject_area", "primary_target_population", "uncoded"]
            }
          }
        }
      },
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  const result = JSON.parse(text);
  
  return items.map(original => {
    const coded = result.coded_items?.find((c: any) => String(c.row_id) === String(original.row_id));
    if (!coded) return { ...original, original_text: original.outcome_text, split_needed: "no", split_items: [], uncoded: true, notes: "Error: AI processing skipped this row." };

    return {
      ...original,
      original_text: coded.outcome_text || original.outcome_text,
      split_needed: coded.split_needed,
      split_items: (coded.split_items || []).map((si: any) => ({
        ...si,
        primary_domain: fixDomainPrefix(si.primary_domain, codebookType),
        primary_subcategory: cleanCodebookString(si.primary_subcategory),
        secondary_codes: si.secondary_codes?.map((sc: any) => ({
          ...sc,
          domain: fixDomainPrefix(sc.domain, codebookType),
          subcategory: cleanCodebookString(sc.subcategory)
        })) || []
      })),
      primary_domain: fixDomainPrefix(coded.primary_domain, codebookType),
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

  // ---------------------------------------------------------------------------
  // ESCALATION PASS: re-review anything uncoded/low-confidence with a stronger model.
  // ---------------------------------------------------------------------------
  const escalationTargets = allResults
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => needsEscalation(item));

  if (escalationTargets.length > 0) {
    onProgress(processedItems, total, `Escalation pass: ${escalationTargets.length} item(s) need a closer look from ${ESCALATION_MODEL}...`);

    const escalationInputs = escalationTargets.map(({ item }) => ({
      row_id: item.row_id,
      outcome_text: item.original_text || (item as any).outcome_text || "",
      group: (item as any).group || "General"
    }));

    const escChunks = [];
    for (let i = 0; i < escalationInputs.length; i += CHUNK_SIZE) {
      escChunks.push(escalationInputs.slice(i, i + CHUNK_SIZE));
    }

    const escalatedByRowId = new Map<string, BatchItemResult>();
    const escQueue = [...escChunks];
    let escChunksDone = 0;

    const escWorkers = Array(Math.min(CONCURRENCY, escChunks.length)).fill(null).map(async () => {
      while (escQueue.length > 0) {
        const chunk = escQueue.shift();
        if (!chunk) continue;
        escChunksDone++;
        const logPrefix = `[Escalation ${escChunksDone}/${escChunks.length}]`;
        const log = (msg: string) => onProgress(processedItems, total, `${logPrefix} ${msg}`);
        log(`Re-reviewing ${chunk.length} item(s) with ${ESCALATION_MODEL}...`);
        try {
          const results = await analyzeBatchChunkWithRetry(chunk, codebookType, log, 3, ESCALATION_MODEL);
          results.forEach(r => escalatedByRowId.set(String(r.row_id), r));
          log(`Done.`);
        } catch (e: any) {
          log(`❌ Escalation failed, keeping original result: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 500));
      }
    });

    await Promise.all(escWorkers);

    escalationTargets.forEach(({ idx, item }) => {
      const escalated = escalatedByRowId.get(String(item.row_id));
      if (escalated) {
        allResults[idx] = { ...escalated, _escalated: true, _escalation_model: ESCALATION_MODEL };
      }
    });

    onProgress(processedItems, total, `Escalation pass complete.`);
  }

  const atomicResults = flattenToAtomic(allResults, codebookType);

  // ---------------------------------------------------------------------------
  // CODEBOOK GAP LOG: items still uncoded even after the escalation model's
  // careful second look are logged separately so a researcher can review them
  // and decide whether the codebook needs new or expanded categories.
  // ---------------------------------------------------------------------------
  const codebookGaps: CodebookGap[] = atomicResults
    .filter(item => item.uncoded === true)
    .map(item => ({
      row_id: item.row_id,
      atomic_outcome_id: item.atomic_outcome_id,
      outcome_text: item.outcome_text_atomic,
      notes: item.notes,
      model_used: item.was_escalated ? ESCALATION_MODEL : PRIMARY_MODEL,
      group: (item as any).group,
      organization: (item as any).organization || (item as any).Organization,
      program: (item as any).program || (item as any).Program,
    }));

  // Return both items array and CSV string
  return { type: 'csv', data: atomicJsonToCSV(atomicResults), items: atomicResults, codebookGaps };
};
