
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AtomicBatchItem, BatchAnalysisResult, CodebookType } from '../types.js';
import { getCodebook, allDomainCodes, subcategoriesForDomain, subjectAreaMismatch } from '../codebooks/index.js';
import { atomicJsonToCSV } from '../services/geminiService.js';
import { saveReviewState, clearReviewState } from '../services/reviewStorage.js';
import { normalizeImportedCoding, upgradeLegacyLabel } from '../services/reviewNormalization.js';
import { toBool, needsReview, reviewProgress, editMarksChecked, exportFilename, withAiOriginal, assignSample, sampleStats, widenSample, reviewStatus, SAMPLE_RATES, WIDEN_CHANGE_RATE } from '../services/reviewState.js';

interface ReviewDashboardProps {
  result: BatchAnalysisResult;
  onReset: () => void;
  codebookType: CodebookType;
}

// Extend type locally to track React-specific unique ID
type ReviewItem = AtomicBatchItem & { internal_id: string };

const ITEMS_PER_PAGE = 20;
const AUTOSAVE_DEBOUNCE_MS = 800;

const ReviewDashboard: React.FC<ReviewDashboardProps> = ({ result, onReset, codebookType }) => {
  const codebookDef = getCodebook(codebookType);
  const domains = useMemo(() => allDomainCodes(codebookDef), [codebookDef]);
  const { hasSubcategories, hasSubjectArea, hasTargetPopulation } = codebookDef.capabilities;
  const subjectAreaOptions = codebookDef.subjectAreaOptions ?? [];
  const targetPopulationOptions = codebookDef.targetPopulationOptions ?? [];

  const domainHint = (domainCode: string): string | undefined =>
    codebookDef.domains.find(d => d.code === domainCode)?.hint;

  const subcategoryHint = (domainCode: string, subCode: string): string | undefined =>
    subcategoriesForDomain(codebookDef, domainCode).find(s => s.code === subCode)?.hint;

  // ---------------------------------------------------------------------------
  // 1. ROBUST INITIALIZATION & KEY GENERATION
  // ---------------------------------------------------------------------------
  const [items, setItems] = useState<ReviewItem[]>(() => {
    const rawItems = result.items || [];
    // Keep the AI's own answer beside the reviewer's, then draw the fixed
    // sample of medium/high rows (both kept as-is on a resumed review).
    return assignSample(rawItems.map((item, index) => {
        // GENERATE UNIQUE ID: Critical for handling CSVs with duplicate row_ids
        const internal_id = `row_${index}_${Math.random().toString(36).substr(2, 9)}`;

        const normalized = normalizeImportedCoding(item, codebookDef, codebookType);

        return {
            ...item,
            internal_id, // Use this for React Keys and Updates
            primary_domain: normalized.primary_domain,
            primary_subcategory: normalized.primary_subcategory,
            primary_confidence: normalized.primary_confidence as ReviewItem['primary_confidence'],
            uncoded: normalized.uncoded,
            is_corrected: toBool(item.is_corrected),
            codebook_version: item.codebook_version || `${codebookDef.id}@${codebookDef.version}`,
            // Secondary codes aren't re-validated here, but old labels (from a
            // renumbered or renamed code) are carried over to the current ones,
            // and so are bare old numbers on rows stamped before the renumbering.
            secondary_domain_1: upgradeLegacyLabel(item.secondary_domain_1, codebookDef, 'domain', item.codebook_version),
            secondary_subcategory_1: upgradeLegacyLabel(item.secondary_subcategory_1, codebookDef, 'subcategory', item.codebook_version),
            secondary_domain_2: upgradeLegacyLabel(item.secondary_domain_2, codebookDef, 'domain', item.codebook_version),
            secondary_subcategory_2: upgradeLegacyLabel(item.secondary_subcategory_2, codebookDef, 'subcategory', item.codebook_version),
        };
    }).map(withAiOriginal));
  });

  const [filterMode, setFilterMode] = useState<'all' | 'review'>('all');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // ---------------------------------------------------------------------------
  // 1b. AUTOSAVE -- persist review progress so a refresh/crash can't lose it
  // ---------------------------------------------------------------------------
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestItems = useRef(items);
  latestItems.current = items;
  const [saveStatus, setSaveStatus] = useState<{ ok: boolean; at: number } | null>(null);

  const saveNow = () => {
    const cleanItems = latestItems.current.map(({ internal_id, ...rest }) => rest);
    const at = Date.now();
    setSaveStatus({ ok: saveReviewState({ codebookType, items: cleanItems, savedAt: at }), at });
  };

  // Save right away on mount, so a finished coding run survives a closed tab
  // even before the first edit; after that, save shortly after each change.
  const hasSavedOnce = useRef(false);
  useEffect(() => {
    if (!hasSavedOnce.current) {
      hasSavedOnce.current = true;
      saveNow();
      return;
    }
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      autosaveTimer.current = null;
      saveNow();
    }, AUTOSAVE_DEBOUNCE_MS);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, codebookType]);

  // Closing or hiding the tab inside the debounce window would drop the last
  // edit; write it immediately instead.
  useEffect(() => {
    const flush = () => {
      if (!autosaveTimer.current) return;
      clearTimeout(autosaveTimer.current);
      autosaveTimer.current = null;
      saveNow();
    };
    const onVisibility = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('pagehide', flush);
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codebookType]);

  // ---------------------------------------------------------------------------
  // 2. NEEDS REVIEW LOGIC (services/reviewState.ts)
  // ---------------------------------------------------------------------------
  const checkNeedsReview = (item: ReviewItem) => needsReview(item);
  const progress = useMemo(() => reviewProgress(items), [items]);
  const sample = useMemo(() => sampleStats(items), [items]);
  const handleWiden = (level: 'medium' | 'high') => setItems(prev => widenSample(prev, level));

  // ---------------------------------------------------------------------------
  // 3. FILTERING & STATS
  // ---------------------------------------------------------------------------
  const { filteredItems, needsReviewCount, stats } = useMemo(() => {
    let reviewCount = 0;
    const currentStats = { total: items.length, uncoded: 0, lowConf: 0 };

    const filtered = items.filter(item => {
       if (item.uncoded) currentStats.uncoded++;
       if ((item.primary_confidence || '').trim().toLowerCase() === 'low') currentStats.lowConf++;

       const needsReview = checkNeedsReview(item);
       if (needsReview) reviewCount++;

       // Search Filter
       const term = searchQuery.toLowerCase().trim();
       let searchMatch = true;
       if (term) {
           const text = (item.outcome_text_atomic || '').toLowerCase();
           const id = String(item.row_id).toLowerCase();
           const orig = (item.outcome_text_original || '').toLowerCase();
           if (!text.includes(term) && !id.includes(term) && !orig.includes(term)) {
               searchMatch = false;
           }
       }

       // Mode Filter
       if (filterMode === 'review') {
           // Show if it needs review OR if it was just corrected (to prevent jumping)
           if (!needsReview && !item.is_corrected) return false;
       }

       return searchMatch;
    });

    return { filteredItems: filtered, needsReviewCount: reviewCount, stats: currentStats };
  }, [items, searchQuery, filterMode]);

  useEffect(() => {
    setPage(1);
  }, [filterMode, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const displayedItems = filteredItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Actual number of <th>/<td> columns rendered, given this codebook's
  // optional dimensions -- keeps the empty-state colSpan correct instead of
  // a number that only happened to match the "original" codebook's layout.
  const columnCount = 8 + (hasSubcategories ? 1 : 0) + (hasSubjectArea ? 1 : 0) + (hasTargetPopulation ? 1 : 0);

  // ---------------------------------------------------------------------------
  // 4. UPDATE HANDLERS (Using Internal ID)
  // ---------------------------------------------------------------------------
  const handleUpdate = (internalId: string, field: keyof AtomicBatchItem, value: any) => {
    setItems(prev => prev.map(item => {
      if (item.internal_id === internalId) {
        // A note alone doesn't mean the row's code was checked.
        const updated = { ...item, [field]: value, is_corrected: item.is_corrected || editMarksChecked(String(field)) };

        if (field === 'primary_domain') {
          updated.primary_subcategory = '';
          if (value && value !== "") {
              updated.uncoded = false;
              if ((updated.primary_confidence || 'none').toLowerCase() === 'none') {
                  updated.primary_confidence = 'medium';
              }
          }
        }

        if (field === 'uncoded') {
            if (value === true) {
                updated.primary_confidence = 'none';
                updated.primary_domain = '';
                updated.primary_subcategory = '';
            } else {
                if ((updated.primary_confidence || 'none').toLowerCase() === 'none') {
                     updated.primary_confidence = 'medium';
                }
            }
        }

        return updated;
      }
      return item;
    }));
  };

  const handleManualVerify = (internalId: string) => {
      setItems(prev => prev.map(item => {
          if (item.internal_id === internalId) {
              return { ...item, is_corrected: true };
          }
          return item;
      }));
  };

  const handleDownload = () => {
    // Strip internal_id before export
    const cleanItems = items.map(item => {
      const { internal_id: _id, ...rest } = item;
      return { ...rest, review_status: reviewStatus(item) };
    });
    const csvContent = atomicJsonToCSV(cleanItems);
    const filename = exportFilename(codebookDef.id, codebookDef.version);
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // The autosave is kept: the download may have been cancelled, and the
    // exported CSV can't be loaded back into this screen. "Start Over" clears it.
  };

  const handleStartOver = () => {
    if (!window.confirm('Start over? This clears the review saved in this browser. Export the CSV first if you want to keep it.')) return;
    clearReviewState();
    onReset();
  };

  // ---------------------------------------------------------------------------
  // 5. RENDER HELPERS
  // ---------------------------------------------------------------------------
  const getReviewReason = (item: ReviewItem) => {
      if (!checkNeedsReview(item)) return null;
      if (item.review_sample === 'sampled') return "Sampled check";
      if (item.review_sample === 'all_checked') return "Check all";
      if (item.uncoded) return "Verify Uncoded";
      if (!item.primary_domain) return "Missing Code";
      const conf = (item.primary_confidence || '').toLowerCase();
      if (conf === 'low') return "Low Conf.";
      if (conf === 'none' || !conf) return "No Conf.";
      return "Review";
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-fade-in pb-10">
      {/* Header & Stats */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Review & Verify Outcomes</h2>
            <p className="text-slate-500 text-sm mt-1">Review the AI's coding. Confirm a row when its code is right, or change it. A note alone doesn't count as checking a row.</p>
            <p className={`text-sm mt-1 ${saveStatus && !saveStatus.ok ? 'text-red-700 font-semibold' : 'text-slate-600'}`} role={saveStatus && !saveStatus.ok ? 'alert' : 'status'} aria-live="polite">
              {!saveStatus
                ? 'Saving…'
                : saveStatus.ok
                  ? `Saved in this browser at ${new Date(saveStatus.at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}. It comes back if you reload or reopen this page in this browser, but not in another browser or on another computer.`
                  : 'Not saved: this browser refused to store your progress (private window or storage full). Export the CSV before you leave this page.'}
            </p>
          </div>
          <div className="flex gap-3">
             <button
                onClick={handleStartOver}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
             >
                Start Over
             </button>
             <button
                onClick={handleDownload}
                className="px-5 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm transition-all flex items-center"
             >
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               Export Verified CSV
             </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
           <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
              <span className="block text-slate-500 text-xs font-semibold uppercase">Total Items</span>
              <span className="font-mono font-bold text-lg text-slate-800">{stats.total}</span>
           </div>
           <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100">
              <span className="block text-blue-700 text-xs font-semibold uppercase">Checked by a person</span>
              <span className="font-mono font-bold text-lg text-blue-800">{progress.checked} of {progress.total}</span>
              {progress.uncheckedNotFlagged > 0 && (
                <span className="block text-xs text-slate-600 mt-0.5">{progress.uncheckedNotFlagged} medium or high rows accepted without a check (not in the sample)</span>
              )}
           </div>
           {sample.filter(s => s.sampled > 0).map(s => (
             <div key={s.level} className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                <span className="block text-slate-600 text-xs font-semibold uppercase">{s.level} sample ({Math.round(SAMPLE_RATES[s.level] * 100)}%)</span>
                <span className="font-mono font-bold text-lg text-slate-800">{s.checked} of {s.sampled} checked</span>
                <span className="block text-xs text-slate-600 mt-0.5">
                  {s.checked > 0 ? `${s.changed} changed (${Math.round((s.changed / s.checked) * 100)}%)` : 'None checked yet'}
                </span>
             </div>
           ))}
           <div className="px-4 py-2 bg-red-50 rounded-lg border border-red-100">
              <span className="block text-red-500 text-xs font-semibold uppercase">Total Uncoded</span>
              <span className="font-mono font-bold text-lg text-red-700">{stats.uncoded}</span>
           </div>
           <div className="px-4 py-2 bg-orange-50 rounded-lg border border-orange-100">
              <span className="block text-orange-500 text-xs font-semibold uppercase">Low Confidence</span>
              <span className="font-mono font-bold text-lg text-orange-700">{stats.lowConf}</span>
           </div>
        </div>
      </div>

      {sample.filter(s => s.suggestWiden).map(s => (
        <div key={s.level} role="status" className="p-4 bg-amber-50 border border-amber-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-amber-900">
          <span>
            <span className="font-semibold">{s.changed} of {s.checked} checked {s.level}-confidence sample rows needed a change</span>{' '}
            (over {Math.round(WIDEN_CHANGE_RATE * 100)}%). The {s.notSampled} {s.level}-confidence rows outside the sample may need a look too.
          </span>
          <button
            onClick={() => handleWiden(s.level)}
            className="px-4 py-2 font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-lg flex-shrink-0"
          >
            Check all {s.notSampled} {s.level} rows
          </button>
        </div>
      ))}

      {/* Filters & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm sticky top-16 z-20">
         <div className="flex items-center gap-4">
           <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                 onClick={() => setFilterMode('all')}
                 className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filterMode === 'all' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' : 'text-slate-600 hover:text-slate-800'}`}
              >
                 All Items
              </button>
              <button
                 onClick={() => setFilterMode('review')}
                 className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center ${filterMode === 'review' ? 'bg-white text-red-600 shadow-sm ring-1 ring-red-100' : 'text-slate-600 hover:text-slate-800'}`}
              >
                 Needs Review <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${filterMode === 'review' ? 'bg-red-100 text-red-700' : 'bg-slate-200 text-slate-600'}`}>{needsReviewCount}</span>
              </button>
           </div>
           <div className="text-sm text-slate-500 font-medium hidden md:block">
              Showing {filteredItems.length} items
           </div>
         </div>

         <div className="relative w-full sm:w-auto">
            <input
               type="text"
               placeholder="Search text or ID..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64 bg-white text-slate-900 placeholder-slate-400"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
         </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[400px]">
        <div className="overflow-x-auto w-full pb-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                <th className="px-4 py-3 w-28 sticky left-0 bg-slate-50 z-20 border-r border-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">ID</th>
                <th className="px-4 py-3 w-32 min-w-[150px]">Organization</th>
                <th className="px-4 py-3 w-32 min-w-[150px]">Program</th>
                <th className="px-4 py-3 w-auto min-w-[200px]">Outcome Text</th>
                {/* WIDENED COLUMNS */}
                <th className="px-4 py-3 w-[20%] min-w-[240px]">Primary Domain</th>
                {hasSubcategories && <th className="px-4 py-3 w-[20%] min-w-[240px]">Subcategory</th>}
                <th className="px-4 py-3 w-28 min-w-[100px]">Confidence</th>
                {hasSubjectArea && <th className="px-4 py-3 w-32 min-w-[130px]">Subject Area</th>}
                {hasTargetPopulation && <th className="px-4 py-3 w-32 min-w-[130px]">Population</th>}
                <th className="px-4 py-3 w-16 text-center">Uncoded</th>
                <th className="px-4 py-3 w-48 min-w-[180px]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayedItems.length === 0 ? (
                 <tr>
                    <td colSpan={columnCount} className="px-6 py-16 text-center text-slate-500 flex flex-col items-center justify-center w-full">
                       <svg className="w-12 h-12 text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       <p className="text-lg font-medium text-slate-700">All caught up!</p>
                       <p className="text-sm">No items matching your current filters.</p>
                    </td>
                 </tr>
              ) : (
                displayedItems.map((item) => {
                  const reason = getReviewReason(item);
                  const rowLabel = `${item.row_id}_${item.atomic_outcome_index}`;
                  const selectedDomainHint = item.primary_domain ? domainHint(item.primary_domain) : undefined;
                  const selectedSubHint = item.primary_domain && item.primary_subcategory
                     ? subcategoryHint(item.primary_domain, item.primary_subcategory)
                     : undefined;
                  const expectedSubjects = hasSubjectArea && !item.uncoded && item.primary_subcategory
                     ? subjectAreaMismatch(codebookDef, item.primary_subcategory, item.primary_subject_area || '')
                     : null;
                  return (
                  // TALLER ROW via py-5
                  <tr key={item.internal_id} className={`hover:bg-slate-50/80 transition-colors group ${item.is_corrected ? 'bg-blue-50/20' : ''}`}>
                    <td className="px-4 py-5 text-xs font-mono text-slate-500 sticky left-0 bg-white group-hover:bg-slate-50/80 border-r border-slate-100 group-hover:border-slate-200 z-10 align-top shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                      <div className="font-semibold text-slate-600 flex items-center justify-between gap-1">
                          {item.row_id}_{item.atomic_outcome_index}
                          {!item.is_corrected && (
                              <button
                                onClick={() => handleManualVerify(item.internal_id)}
                                className="text-slate-500 hover:text-green-700 transition-colors p-1"
                                title="Confirm this code is right (marks the row checked)"
                                aria-label={`Confirm the code for row ${rowLabel}`}
                              >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </button>
                          )}
                      </div>

                      <div className="flex flex-col gap-1 mt-1.5">
                        {item.is_corrected && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold tracking-wide w-fit">
                            CHECKED
                          </span>
                        )}
                        {reason && !item.is_corrected && (
                           <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold tracking-wide w-fit border border-red-200">
                             {reason}
                           </span>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-5 align-top">
                       <div className="text-xs text-slate-600 font-medium truncate max-w-[150px]" title={item.organization || item.Organization || ''}>
                          {item.organization || item.Organization || '-'}
                       </div>
                    </td>
                    <td className="px-4 py-5 align-top">
                       <div className="text-xs text-slate-600 font-medium truncate max-w-[150px]" title={item.program || item.Program || ''}>
                          {item.program || item.Program || '-'}
                       </div>
                    </td>

                    <td className="px-4 py-5 align-top">
                       {/* UNCONSTRAINED TEXT */}
                       <div className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                          {item.outcome_text_atomic}
                       </div>
                       {item.outcome_text_original !== item.outcome_text_atomic && (
                          <div className="text-xs text-slate-500 mt-2 italic whitespace-pre-wrap border-t border-slate-100 pt-1">
                             Orig: {item.outcome_text_original}
                          </div>
                       )}
                    </td>

                    <td className="px-4 py-5 align-top">
                      <select
                         className={`w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 py-1.5 ${!item.primary_domain && !item.uncoded ? 'ring-2 ring-red-300 border-red-300' : ''}`}
                         value={item.primary_domain || ''}
                         onChange={(e) => handleUpdate(item.internal_id, 'primary_domain', e.target.value)}
                         aria-label={`Primary domain for row ${rowLabel}`}
                         disabled={!!item.uncoded}
                      >
                         <option value="">{item.uncoded ? '-- Uncoded --' : '-- Select Domain --'}</option>
                         {domains.map(d => (
                            <option key={d} value={d}>{d}</option>
                         ))}
                      </select>
                      {selectedDomainHint && (
                         <p className="mt-1 text-xs leading-snug text-slate-600 italic">{selectedDomainHint}</p>
                      )}
                    </td>

                    {hasSubcategories && (
                      <td className="px-4 py-5 align-top">
                         <select
                           className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 disabled:bg-slate-50 disabled:text-slate-400 py-1.5"
                           value={item.primary_subcategory || ''}
                           onChange={(e) => handleUpdate(item.internal_id, 'primary_subcategory', e.target.value)}
                           aria-label={`Code for row ${rowLabel}`}
                           disabled={!item.primary_domain || !!item.uncoded || subcategoriesForDomain(codebookDef, item.primary_domain).length === 0}
                        >
                           <option value="">{codebookDef.capabilities.domainOnly && item.primary_domain && !item.uncoded ? 'No specific code (domain only)' : '-- Select Subcategory --'}</option>
                           {subcategoriesForDomain(codebookDef, item.primary_domain).map(sc => (
                              <option key={sc.code} value={sc.code}>{sc.code}</option>
                           ))}
                        </select>
                        {selectedSubHint && (
                           <p className="mt-1 text-xs leading-snug text-slate-600 italic">{selectedSubHint}</p>
                        )}
                      </td>
                    )}

                    <td className="px-4 py-5 align-top">
                       <select
                         className={`w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 font-medium py-1.5 bg-white disabled:bg-slate-50 disabled:text-slate-400 ${
                            (item.primary_confidence || 'none').toLowerCase() === 'high' ? 'text-green-700' :
                            (item.primary_confidence || 'none').toLowerCase() === 'medium' ? 'text-yellow-700' :
                            (item.primary_confidence || 'none').toLowerCase() === 'low' ? 'text-orange-700 font-bold border-orange-300 bg-orange-50' : 'text-slate-400'
                         }`}
                         value={item.primary_confidence || 'none'}
                         onChange={(e) => handleUpdate(item.internal_id, 'primary_confidence', e.target.value)}
                         aria-label={`Confidence for row ${rowLabel}`}
                         disabled={!!item.uncoded}
                      >
                         <option value="high" className="text-green-700">High</option>
                         <option value="medium" className="text-yellow-700">Medium</option>
                         <option value="low" className="text-orange-700">Low</option>
                         <option value="none" className="text-slate-400">None</option>
                      </select>
                    </td>

                    {hasSubjectArea && (
                      <td className="px-4 py-5 align-top">
                         <select
                           className={`w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 py-1.5 disabled:bg-slate-50 disabled:text-slate-400 ${expectedSubjects ? 'ring-2 ring-amber-300 border-amber-300' : ''}`}
                           value={item.primary_subject_area || ''}
                           onChange={(e) => handleUpdate(item.internal_id, 'primary_subject_area', e.target.value)}
                           aria-label={`Subject area for row ${rowLabel}`}
                           disabled={!!item.uncoded}
                        >
                           <option value="">-- Select --</option>
                           {subjectAreaOptions.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                           ))}
                        </select>
                        {expectedSubjects && (
                           <p className="mt-1 text-[11px] leading-snug text-amber-700">Doesn't match {item.primary_subcategory.split(' ')[0]}, which expects {expectedSubjects.join(' or ')}. Fix the Subject Area, or pick the code for this subject.</p>
                        )}
                      </td>
                    )}

                    {hasTargetPopulation && (
                      <td className="px-4 py-5 align-top">
                         <select
                           className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 py-1.5 disabled:bg-slate-50 disabled:text-slate-400"
                           value={item.primary_target_population || ''}
                           onChange={(e) => handleUpdate(item.internal_id, 'primary_target_population', e.target.value)}
                           aria-label={`Population for row ${rowLabel}`}
                           disabled={!!item.uncoded}
                        >
                           <option value="">-- Select --</option>
                           {targetPopulationOptions.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                           ))}
                        </select>
                      </td>
                    )}

                    <td className="px-4 py-5 text-center align-top pt-2">
                       <input
                          type="checkbox"
                          className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300 cursor-pointer"
                          checked={!!item.uncoded}
                          onChange={(e) => handleUpdate(item.internal_id, 'uncoded', e.target.checked)}
                          title="Mark as Uncoded"
                          aria-label={`Uncoded, row ${rowLabel}`}
                       />
                    </td>

                    <td className="px-4 py-5 align-top">
                       <textarea
                          className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white resize-y min-h-[80px]"
                          value={item.notes || ''}
                          onChange={(e) => handleUpdate(item.internal_id, 'notes', e.target.value)}
                          placeholder="Notes..."
                          aria-label={`Notes for row ${rowLabel}`}
                          rows={3}
                       />
                    </td>
                  </tr>
                )})
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
         <div className="flex justify-center items-center gap-4 pt-2">
            <button
               onClick={() => setPage(p => Math.max(1, p - 1))}
               disabled={page === 1}
               className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white text-slate-700 bg-white font-medium transition-colors shadow-sm"
            >
               Previous
            </button>
            <span className="text-sm text-slate-600 font-medium">Page {page} of {totalPages}</span>
            <button
               onClick={() => setPage(p => Math.min(totalPages, p + 1))}
               disabled={page === totalPages}
               className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white text-slate-700 bg-white font-medium transition-colors shadow-sm"
            >
               Next
            </button>
         </div>
      )}
    </div>
  );
};

export default ReviewDashboard;
