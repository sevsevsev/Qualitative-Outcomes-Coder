import React from 'react';
import { BatchAnalysisResult, BatchJsonResult } from '../types';

interface BatchResultDisplayProps {
  result: BatchAnalysisResult;
  onReset: () => void;
}

const BatchResultDisplay: React.FC<BatchResultDisplayProps> = ({ result, onReset }) => {
  
  const handleDownload = () => {
    // Assume CSV
    const content = result.data as string;
    const filename = "coded_outcomes.csv";
    const mimeType = "text/csv";

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Batch Analysis Results (CSV)
        </h2>
        <div className="flex gap-4">
          <button 
            onClick={handleDownload}
            className="px-4 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CSV
          </button>
          <button 
            onClick={onReset}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Analyze Another
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> The output is flattened. If an original row contained multiple outcomes, it has been split into multiple rows (e.g., Row 1_1, Row 1_2) so each outcome is coded individually.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-xs text-green-400 font-mono whitespace-pre">
          {result.data as string}
        </pre>
      </div>
    </div>
  );
};

export default BatchResultDisplay;