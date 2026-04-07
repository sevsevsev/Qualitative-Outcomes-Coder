import React, { useEffect, useRef } from 'react';

interface ProcessingStatusProps {
  processed: number;
  total: number;
  logs: string[];
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({ processed, total, logs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const percentage = total > 0 ? Math.round((processed / total) * 100) : 0;

  // Auto-scroll logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 max-w-4xl mx-auto mb-8 animate-fade-in">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Processing Batch...</h3>
      
      {/* Progress Bar */}
      <div className="mb-2 flex justify-between text-sm font-medium text-slate-600">
        <span>Progress</span>
        <span>{processed} / {total} items ({percentage}%)</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-4 mb-6 overflow-hidden">
        <div 
          className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Log Window */}
      <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300">
        <div className="h-48 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700" ref={scrollRef}>
          {logs.length === 0 && <span className="text-slate-500 italic">Initializing...</span>}
          {logs.map((log, i) => (
            <div key={i} className="border-b border-slate-800 pb-1 last:border-0">
              <span className="text-blue-400 mr-2">[{new Date().toLocaleTimeString()}]</span>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessingStatus;
