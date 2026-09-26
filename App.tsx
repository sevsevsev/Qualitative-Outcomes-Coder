import React, { useState, useRef, useEffect } from 'react';
import { processBatch, atomicJsonToCSV } from './services/geminiService.js';
import { BatchAnalysisResult, LoadingState, CodebookType } from './types.js';
import { CODEBOOK_REGISTRY, DEFAULT_CODEBOOK_ID, isSelectableCodebook, SELECTABLE_CODEBOOK_LIST } from './codebooks/index.js';
import { loadReviewState, clearReviewState, SavedReviewState } from './services/reviewStorage.js';
import ReviewDashboard from './components/ReviewDashboard.js';
import ProcessingStatus from './components/ProcessingStatus.js';
import CodebookExplorer, { parseExplorerRoute } from './components/CodebookExplorer.js';

// Screens are addressed by URL hash so the explorer can be linked to
// directly: "#/codebook/<codebookId>/<code>". Anything else is the coder.
const readHash = () => window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [batchResult, setBatchResult] = useState<BatchAnalysisResult | null>(null);
  const [status, setStatus] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [codebook, setCodebook] = useState<CodebookType>(DEFAULT_CODEBOOK_ID);
  const [restorableSession, setRestorableSession] = useState<SavedReviewState | null>(null);

  // Progress State
  const [processedCount, setProcessedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [hashPath, setHashPath] = useState<string[]>(readHash);
  useEffect(() => {
    const onHash = () => setHashPath(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const view: 'coder' | 'codebook' = hashPath[0] === 'codebook' ? 'codebook' : 'coder';

  // Offer to resume an autosaved review session (see services/reviewStorage)
  // if one exists from before a refresh, crash, or closed tab.
  useEffect(() => {
    setRestorableSession(loadReviewState());
  }, []);

  const handleResumeSession = () => {
    if (!restorableSession) return;
    const { codebookType, items } = restorableSession;
    setCodebook(codebookType);
    setBatchResult({ type: 'csv', data: atomicJsonToCSV(items), items });
    setStatus('success');
    setRestorableSession(null);
  };

  const handleDiscardSession = () => {
    clearReviewState();
    setRestorableSession(null);
  };

  const handleReset = () => {
    setBatchResult(null);
    setStatus('idle');
    setInputText('');
    setFileName(null);
    setError(null);
    setLogs([]);
    setProcessedCount(0);
    setTotalCount(0);
    // A resumed session may use a retired codebook; new runs go back to one the picker offers.
    setCodebook(current => (isSelectableCodebook(current) ? current : DEFAULT_CODEBOOK_ID));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.csv')) {
      setError('Please upload a valid .csv file');
      return;
    }

    setError(null);
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setInputText(text);
    };
    reader.onerror = () => {
      setError('Failed to read file');
    };
    reader.readAsText(file);
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setStatus('analyzing');
    setError(null);
    setBatchResult(null);
    setLogs([]);
    setProcessedCount(0);
    setTotalCount(0);

    try {
      const data = await processBatch(
        inputText, 
        codebook,
        (processed, total, log) => {
          setProcessedCount(processed);
          setTotalCount(total);
          setLogs(prev => [...prev, log]);
        }
      );
      
      setBatchResult(data);
      setStatus('success');
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setError(err.message || 'An unknown error occurred during analysis.');
      setLogs(prev => [...prev, `ERROR: ${err.message}`]);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleReset();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="hidden sm:inline font-bold text-xl text-slate-800 tracking-tight">QualCoder AI</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {([
                ['coder', 'Code outcomes', '#/'],
                ['codebook', 'Codebook', `#/codebook/${codebook}`],
              ] as const).map(([id, label, href]) => (
                <a
                  key={id}
                  href={href}
                  aria-current={view === id ? 'page' : undefined}
                  className={`whitespace-nowrap px-3 py-2 rounded-lg font-medium transition-colors ${
                    view === id ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content: Changed max-w-7xl to w-full to utilize full screen width */}
      {view === 'codebook' && (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
          <CodebookExplorer route={parseExplorerRoute(hashPath.slice(1))} />
        </div>
      )}

      {/* The coder stays mounted while the explorer is open so an in-progress
          review isn't lost by switching screens. */}
      <main className={`w-full px-4 sm:px-6 lg:px-8 py-10 flex-col ${view === 'coder' ? 'flex' : 'hidden'}`}>

        {/* Restorable Session Banner */}
        {restorableSession && !batchResult && status !== 'analyzing' && (
          <div className="max-w-4xl mx-auto w-full mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-sm text-blue-900">
              <span className="font-semibold">Unsaved review session found</span> from{' '}
              {new Date(restorableSession.savedAt).toLocaleString()} ({restorableSession.items.length} items, codebook: {CODEBOOK_REGISTRY[restorableSession.codebookType].label}{CODEBOOK_REGISTRY[restorableSession.codebookType].deprecated ? ', retired: you can review and export it, and new runs use the current codebook' : ''}).
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={handleResumeSession}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Resume Session
              </button>
              <button
                onClick={handleDiscardSession}
                className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-900 bg-white border border-blue-200 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {/* Intro / Hero - Hide when analyzing or showing results */}
        {!batchResult && status !== 'analyzing' && (
          <div className="text-center max-w-2xl mx-auto mb-10 flex-grow-0">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              Batch Processing
            </h1>
            <p className="text-lg text-slate-600">
              Upload a CSV file with headers. Must include 'outcome_text'. The system will return an enriched CSV with coding columns appended.
            </p>
          </div>
        )}

        {/* Processing Status View */}
        {status === 'analyzing' && (
           <ProcessingStatus processed={processedCount} total={totalCount} logs={logs} />
        )}

        {/* Input Form */}
        {!batchResult && status !== 'analyzing' && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 flex-grow-0">
            <form onSubmit={handleAnalyze}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Codebook
                </label>
                <select
                  value={codebook}
                  onChange={(e) => setCodebook(e.target.value as CodebookType)}
                  className="w-full sm:w-1/2 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                >
                  {SELECTABLE_CODEBOOK_LIST.map(cb => (
                    <option key={cb.id} value={cb.id}>{cb.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Upload CSV File
                </label>
                
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors cursor-pointer relative bg-white
                    ${fileName 
                      ? 'border-blue-500 bg-blue-50/30' 
                      : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
                    }
                  `}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".csv"
                    onChange={handleFileUpload}
                  />
                  
                  {!fileName ? (
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-12 h-12 text-slate-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm font-medium text-slate-900">
                        Click to select a CSV file
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Must include "outcome_text" header
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                        <svg className="w-10 h-10 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-lg font-medium text-slate-900 truncate max-w-sm px-4">{fileName}</p>
                        <p className="text-sm text-slate-500 mt-1 mb-3">Ready to process</p>
                        <button 
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-xs text-red-600 hover:text-red-800 underline font-medium"
                        >
                          Remove file
                        </button>
                    </div>
                  )}
                </div>
              </div>

              {error && (
                 <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded border border-red-200">
                    Error: {error}
                 </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`
                    inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white 
                    transition-all duration-200
                    ${!inputText.trim() 
                      ? 'bg-blue-300 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-0.5'
                    }
                  `}
                >
                  Process Batch
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Dashboard View */}
        {batchResult && (
          <ReviewDashboard result={batchResult} onReset={handleReset} codebookType={codebook} />
        )}

      </main>
    </div>
  );
};

export default App;