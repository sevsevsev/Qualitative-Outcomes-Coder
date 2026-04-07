
import React, { useState, useEffect, useMemo } from 'react';
import { AtomicBatchItem, BatchAnalysisResult, CodebookType } from '../types';
import { 
  CODEBOOK_DOMAINS, 
  CODEBOOK_SUBCATEGORIES, 
  ACCELERATE_PHILLY_DOMAINS,
  ACCELERATE_PHILLY_SUBCATEGORIES,
  SUBJECT_AREA_OPTIONS, 
  TARGET_POPULATION_OPTIONS 
} from '../constants';
import { atomicJsonToCSV } from '../services/geminiService';

interface ReviewDashboardProps {
  result: BatchAnalysisResult;
  onReset: () => void;
  codebookType: CodebookType;
}

// Extend type locally to track React-specific unique ID
type ReviewItem = AtomicBatchItem & { internal_id: string };

const ITEMS_PER_PAGE = 20;

const ReviewDashboard: React.FC<ReviewDashboardProps> = ({ result, onReset, codebookType }) => {
  const domains = codebookType === 'accelerate_philly' ? ACCELERATE_PHILLY_DOMAINS : CODEBOOK_DOMAINS;
  const subcategories = codebookType === 'accelerate_philly' ? ACCELERATE_PHILLY_SUBCATEGORIES : CODEBOOK_SUBCATEGORIES;

  // ---------------------------------------------------------------------------
  // 1. ROBUST INITIALIZATION & KEY GENERATION
  // ---------------------------------------------------------------------------
  const [items, setItems] = useState<ReviewItem[]>(() => {
    const rawItems = result.items || [];
    return rawItems.map((item, index) => {
        // GENERATE UNIQUE ID: Critical for handling CSVs with duplicate row_ids
        const internal_id = `row_${index}_${Math.random().toString(36).substr(2, 9)}`;

        let cleanDomain = (item.primary_domain || "").trim();
        let cleanSub = (item.primary_subcategory || "").trim();
        let cleanConf = (item.primary_confidence || "none").trim().toLowerCase();
        let isUncoded = item.uncoded === true || String(item.uncoded).toLowerCase() === 'true';

        // --- Domain Normalization ---
        let matchedDomain = domains.find(d => d.toLowerCase() === cleanDomain.toLowerCase());
        
        // Fuzzy match: "1. Joy..." -> "Domain 1. Joy..."
        if (!matchedDomain && cleanDomain) {
            let checkDomain = cleanDomain;
            if (codebookType === 'original') {
                // Handle "1. Joy"
                if (/^\d+(\.\d+)*\s/.test(checkDomain) && !checkDomain.toLowerCase().startsWith('domain')) {
                     checkDomain = "Domain " + checkDomain;
                }
                // Handle "Domain 1" -> "Domain 1."
                if (/^Domain \d+$/.test(checkDomain)) {
                    checkDomain += ".";
                }
                const domainParts = checkDomain.split(/[. ]/); 
                if (domainParts.length > 1 && domainParts[0].toLowerCase() === "domain") {
                     const prefix = `${domainParts[0]} ${domainParts[1]}.`; 
                     matchedDomain = domains.find(d => d.toLowerCase().startsWith(prefix.toLowerCase()));
                }
            } else if (codebookType === 'accelerate_philly') {
                if (/^\d+/.test(checkDomain) && !checkDomain.toLowerCase().startsWith('code')) {
                     checkDomain = "Code " + checkDomain.padStart(2, '0');
                }
                matchedDomain = domains.find(d => d.toLowerCase().includes(checkDomain.toLowerCase()));
            }
        }

        if (matchedDomain) {
            cleanDomain = matchedDomain;
            // Trust Domain over Uncoded flag if conflict
            if (isUncoded) isUncoded = false;
        } else {
            // Invalid Domain: Clear it to force selection
            cleanDomain = ""; 
            if (!isUncoded) {
                cleanConf = "none";
            }
        }

        // --- Subcategory Normalization ---
        if (cleanDomain) {
            const validSubs = subcategories[cleanDomain] || [];
            let matchedSub = validSubs.find(s => s.toLowerCase() === cleanSub.toLowerCase());
            
            if (!matchedSub && cleanSub) {
                 const subPrefix = cleanSub.split(' ')[0]; 
                 matchedSub = validSubs.find(s => s.startsWith(subPrefix));
            }
            cleanSub = matchedSub || ""; 
        } else {
            cleanSub = "";
        }

        return {
            ...item,
            internal_id, // Use this for React Keys and Updates
            primary_domain: cleanDomain,
            primary_subcategory: cleanSub,
            primary_confidence: cleanConf,
            uncoded: isUncoded,
            is_corrected: item.is_corrected || false
        };
    });
  });

  const [filterMode, setFilterMode] = useState<'all' | 'review'>('all');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // ---------------------------------------------------------------------------
  // 2. NEEDS REVIEW LOGIC
  // ---------------------------------------------------------------------------
  const checkNeedsReview = (item: ReviewItem) => {
      // RULE 1: If verified by user, it's done.
      if (item.is_corrected) return false;

      // RULE 2: If AI marked as Uncoded, verify it.
      if (item.uncoded) return true;

      // RULE 3: If Coded, verify completeness.
      if (!item.primary_domain) return true;
      
      const conf = (item.primary_confidence || 'none').trim().toLowerCase();
      // 'low', 'none', or empty string need review. 'medium' and 'high' are OK.
      if (['low', 'none', ''].includes(conf)) return true;

      return false;
  };

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

  // ---------------------------------------------------------------------------
  // 4. UPDATE HANDLERS (Using Internal ID)
  // ---------------------------------------------------------------------------
  const handleUpdate = (internalId: string, field: keyof AtomicBatchItem, value: any) => {
    setItems(prev => prev.map(item => {
      if (item.internal_id === internalId) {
        const updated = { ...item, [field]: value, is_corrected: true };
        
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
    const cleanItems = items.map(({ internal_id, ...rest }) => rest);
    const csvContent = atomicJsonToCSV(cleanItems);
    const filename = "verified_coded_outcomes.csv";
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ---------------------------------------------------------------------------
  // 5. RENDER HELPERS
  // ---------------------------------------------------------------------------
  const getReviewReason = (item: ReviewItem) => {
      if (!checkNeedsReview(item)) return null;
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
            <p className="text-slate-500 text-sm mt-1">Review the AI's coding. Items disappear from "Needs Review" as you verify them.</p>
          </div>
          <div className="flex gap-3">
             <button 
                onClick={onReset}
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
                {codebookType === 'original' && <th className="px-4 py-3 w-[20%] min-w-[240px]">Subcategory</th>}
                <th className="px-4 py-3 w-28 min-w-[100px]">Confidence</th>
                {codebookType === 'original' && <th className="px-4 py-3 w-32 min-w-[130px]">Subject Area</th>}
                {codebookType === 'original' && <th className="px-4 py-3 w-32 min-w-[130px]">Population</th>}
                <th className="px-4 py-3 w-16 text-center">Uncoded</th>
                <th className="px-4 py-3 w-48 min-w-[180px]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayedItems.length === 0 ? (
                 <tr>
                    <td colSpan={11} className="px-6 py-16 text-center text-slate-500 flex flex-col items-center justify-center w-full">
                       <svg className="w-12 h-12 text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       <p className="text-lg font-medium text-slate-700">All caught up!</p>
                       <p className="text-sm">No items matching your current filters.</p>
                    </td>
                 </tr>
              ) : (
                displayedItems.map((item) => {
                  const reason = getReviewReason(item);
                  return (
                  // TALLER ROW via py-5
                  <tr key={item.internal_id} className={`hover:bg-slate-50/80 transition-colors group ${item.is_corrected ? 'bg-blue-50/20' : ''}`}>
                    <td className="px-4 py-5 text-xs font-mono text-slate-500 sticky left-0 bg-white group-hover:bg-slate-50/80 border-r border-slate-100 group-hover:border-slate-200 z-10 align-top shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                      <div className="font-semibold text-slate-600 flex items-center justify-between gap-1">
                          {item.row_id}_{item.atomic_outcome_index}
                          {reason && !item.is_corrected && (
                              <button 
                                onClick={() => handleManualVerify(item.internal_id)}
                                className="text-slate-400 hover:text-green-600 transition-colors p-1"
                                title="Confirm/Verify this item (clears from Needs Review)"
                              >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </button>
                          )}
                      </div>
                      
                      <div className="flex flex-col gap-1 mt-1.5">
                        {item.is_corrected && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold tracking-wide w-fit">
                            VERIFIED
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
                         disabled={!!item.uncoded}
                      >
                         <option value="">{item.uncoded ? '-- Uncoded --' : '-- Select Domain --'}</option>
                         {domains.map(d => (
                            <option key={d} value={d}>{d}</option>
                         ))}
                      </select>
                    </td>

                    {codebookType === 'original' && (
                      <td className="px-4 py-5 align-top">
                         <select 
                           className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 disabled:bg-slate-50 disabled:text-slate-400 py-1.5"
                           value={item.primary_subcategory || ''}
                           onChange={(e) => handleUpdate(item.internal_id, 'primary_subcategory', e.target.value)}
                           disabled={!item.primary_domain || !!item.uncoded || subcategories[item.primary_domain]?.length === 0}
                        >
                           <option value="">-- Select Subcategory --</option>
                           {(subcategories[item.primary_domain] || []).map(sc => (
                              <option key={sc} value={sc}>{sc}</option>
                           ))}
                        </select>
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
                         disabled={!!item.uncoded}
                      >
                         <option value="high" className="text-green-700">High</option>
                         <option value="medium" className="text-yellow-700">Medium</option>
                         <option value="low" className="text-orange-700">Low</option>
                         <option value="none" className="text-slate-400">None</option>
                      </select>
                    </td>

                    {codebookType === 'original' && (
                      <td className="px-4 py-5 align-top">
                         <select 
                           className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 py-1.5 disabled:bg-slate-50 disabled:text-slate-400"
                           value={item.primary_subject_area || ''}
                           onChange={(e) => handleUpdate(item.internal_id, 'primary_subject_area', e.target.value)}
                           disabled={!!item.uncoded}
                        >
                           <option value="">-- Select --</option>
                           {SUBJECT_AREA_OPTIONS.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                           ))}
                        </select>
                      </td>
                    )}

                    {codebookType === 'original' && (
                      <td className="px-4 py-5 align-top">
                         <select 
                           className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 py-1.5 disabled:bg-slate-50 disabled:text-slate-400"
                           value={item.primary_target_population || ''}
                           onChange={(e) => handleUpdate(item.internal_id, 'primary_target_population', e.target.value)}
                           disabled={!!item.uncoded}
                        >
                           <option value="">-- Select --</option>
                           {TARGET_POPULATION_OPTIONS.map(opt => (
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
                       />
                    </td>

                    <td className="px-4 py-5 align-top">
                       <textarea 
                          className="w-full text-xs border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white resize-y min-h-[80px]"
                          value={item.notes || ''}
                          onChange={(e) => handleUpdate(item.internal_id, 'notes', e.target.value)}
                          placeholder="Notes..."
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
