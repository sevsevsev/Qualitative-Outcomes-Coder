
export type CodebookType = 'original' | 'accelerate_philly';

export interface SecondaryCode {
  domain: string;
  subcategory: string;
  confidence: "high" | "medium" | "low";
}

export interface SplitItem {
  text: string;
  primary_domain: string;
  primary_subcategory: string;
  primary_confidence: "high" | "medium" | "low" | "none";
  subject_area: string;
  target_population_primary: string;
  secondary_codes: SecondaryCode[];
  uncoded: boolean;
}

export interface AnalysisResult {
  original_text: string;
  split_needed: "yes" | "no";
  split_items: SplitItem[];
  notes: string;
}

export interface BatchItemResult extends AnalysisResult {
  row_id: number | string;
  organization?: string;
  program?: string;
  primary_domain?: string;
  primary_subcategory?: string;
  primary_confidence?: string;
  primary_subject_area?: string;
  primary_target_population?: string;
  uncoded?: boolean;
  [key: string]: any; // Allow other CSV columns to pass through
}

export interface AtomicBatchItem {
  row_id: string;
  atomic_outcome_id: string;
  outcome_text_original: string;
  outcome_text_atomic: string;
  atomic_outcome_index: number;
  primary_domain: string;
  primary_subcategory: string;
  primary_confidence: string;
  primary_subject_area: string;
  primary_target_population: string;
  secondary_domain_1: string;
  secondary_subcategory_1: string;
  secondary_confidence_1: string;
  secondary_domain_2: string;
  secondary_subcategory_2: string;
  secondary_confidence_2: string;
  uncoded: boolean;
  notes: string;
  is_corrected?: boolean;
  was_escalated?: boolean; // True if this row was re-reviewed by the escalation model
  [key: string]: any; // Allow original metadata columns to pass through
}

export interface BatchJsonResult {
  atomic_outcomes: AtomicBatchItem[];
}

// A logged instance where even the strongest available model, after a deliberate
// second look, could not find an appropriate label in the codebook. Meant to be
// reviewed by a researcher to decide whether the codebook needs new/expanded codes.
export interface CodebookGap {
  row_id: string;
  atomic_outcome_id: string;
  outcome_text: string;
  notes: string;
  model_used: string;
  group?: string;
  organization?: string;
  program?: string;
}

export interface BatchAnalysisResult {
  type: 'json' | 'csv';
  data: BatchJsonResult | string;
  items?: AtomicBatchItem[]; // Added items array for table display
  codebookGaps?: CodebookGap[]; // Items flagged as genuine codebook gaps for later review
}

export type LoadingState = 'idle' | 'analyzing' | 'success' | 'error';

export interface ProgressUpdate {
  processed: number;
  total: number;
  currentStage: string;
  logs: string[];
}