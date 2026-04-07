import React from 'react';
import { AnalysisResult } from '../types';
import OutcomeCard from './OutcomeCard';

interface ResultDisplayProps {
  result: AnalysisResult;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Analysis Results</h2>
        <button 
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          Analyze Another
        </button>
      </div>

      {/* Split Notification Banner */}
      {result.split_needed === "yes" ? (
        <div className="mb-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-md flex items-start">
           <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm8.486-8.486a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243z" />
           </svg>
           <div>
             <h3 className="text-sm font-bold text-purple-900">Outcome Split Detected</h3>
             <p className="text-sm text-purple-800 mt-1">
               The original statement contained multiple distinct outcomes. It has been split into {result.split_items.length} atomic items for coding.
             </p>
           </div>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md flex items-start">
             <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
             </svg>
             <div>
               <h3 className="text-sm font-bold text-blue-900">Single Integrated Outcome</h3>
               <p className="text-sm text-blue-800 mt-1">
                 The statement was treated as a single outcome unit.
               </p>
             </div>
        </div>
      )}

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {result.split_items.map((item, index) => (
          <OutcomeCard key={index} item={item} index={index} />
        ))}
      </div>

      {/* Notes Section */}
      {result.notes && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-8">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">System Notes</h4>
          <p className="text-sm text-gray-700 italic">{result.notes}</p>
        </div>
      )}

      {/* Raw JSON Toggle (Optional utility) */}
      <details className="mt-8">
        <summary className="cursor-pointer text-xs text-slate-400 hover:text-slate-600">View Raw JSON Response</summary>
        <pre className="mt-2 bg-slate-900 text-slate-50 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      </details>
    </div>
  );
};

export default ResultDisplay;