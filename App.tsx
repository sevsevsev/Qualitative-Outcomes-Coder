import React, { useState, useRef } from 'react';
import { processBatch } from './services/geminiService';
import { BatchAnalysisResult, LoadingState, CodebookType } from './types';
import ReviewDashboard from './components/ReviewDashboard';
import ProcessingStatus from './components/ProcessingStatus';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [batchResult, setBatchResult] = useState<BatchAnalysisResult | null>(null);
  const [status, setStatus] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [codebook, setCodebook] = useState<CodebookType>('original');
  
  // Progress State
  const [processedCount, setProcessedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    setBatchResult(null);
    setStatus('idle');
    setInputText('');
    setFileName(null);
    setError(null);
    setLogs([]);
    setProcessedCount(0);
    setTotalCount(0);
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
              <span className="font-bold text-xl text-slate-800 tracking-tight">QualCoder AI</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Optional: Add user profile or settings here later */}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content: Changed max-w-7xl to w-full to utilize full screen width */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col">
        
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
                  <option value="original">Original (Youth Development)</option>
                  <option value="accelerate_philly">Accelerate Philly Strategic Plan</option>
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