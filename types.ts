
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
  [key: string]: any; // Allow original metadata columns to pass through
}

export interface BatchJsonResult {
  atomic_outcomes: AtomicBatchItem[];
}

export interface BatchAnalysisResult {
  type: 'json' | 'csv';
  data: BatchJsonResult | string;
  items?: AtomicBatchItem[]; // Added items array for table display
}

export type LoadingState = 'idle' | 'analyzing' | 'success' | 'error';

export interface ProgressUpdate {
  processed: number;
  total: number;
  currentStage: string;
  logs: string[];
}