import React from 'react';
import { SplitItem } from '../types';

interface OutcomeCardProps {
  item: SplitItem;
  index: number;
}

const ConfidenceBadge: React.FC<{ level: string }> = ({ level }) => {
  const colors = {
    high: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-orange-100 text-orange-800 border-orange-200',
    none: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  const style = colors[level as keyof typeof colors] || colors.none;

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${style} uppercase tracking-wide`}>
      {level} Conf.
    </span>
  );
};

const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const parseBold = (str: string) => {
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        
        // Match bullets or numbered lists
        const bulletMatch = trimmed.match(/^([-*•]|\d+\.)\s+/);
        if (bulletMatch) {
          return (
            <div key={i} className="flex gap-2 pl-4">
              <span className="text-slate-400 mt-1 flex-shrink-0">•</span>
              <span className="flex-1 text-slate-800">{parseBold(trimmed.replace(/^([-*•]|\d+\.)\s+/, ''))}</span>
            </div>
          );
        }
        return <div key={i} className="text-slate-800">{parseBold(line)}</div>;
      })}
    </div>
  );
};

const OutcomeCard: React.FC<OutcomeCardProps> = ({ item, index }) => {
  if (item.uncoded) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2 h-full bg-red-400"></div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Uncoded Item</span>
          <ConfidenceBadge level={item.primary_confidence} />
        </div>
        <div className="text-lg font-medium text-gray-900 mb-3 font-serif">
          <FormattedText text={`"${item.text}"`} />
        </div>
        <div className="text-sm text-red-700 italic">
          Could not assign a primary code. Check notes for details.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 mb-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
         <div className="flex gap-2 items-center flex-wrap">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Atomic Outcome #{index + 1}</span>
             
             {item.subject_area && item.subject_area !== "Not Academic / N/A" && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
                  {item.subject_area}
                </span>
             )}

             {item.target_population_primary && item.target_population_primary !== "students_youth" && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                  {item.target_population_primary.replace('_', ' ')}
                </span>
             )}
         </div>
         <ConfidenceBadge level={item.primary_confidence} />
      </div>

      <div className="text-lg font-medium text-slate-900 mb-6 font-serif leading-relaxed">
        <span className="text-slate-300">"</span>
        <FormattedText text={item.text} />
        <span className="text-slate-300">"</span>
      </div>

      <div className="bg-slate-50 rounded-md p-3 mb-3 border border-slate-100">
        <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Primary Code</div>
        <div className="font-semibold text-blue-700 text-sm mb-0.5">{item.primary_domain}</div>
        <div className="text-slate-700 text-sm">{item.primary_subcategory}</div>
      </div>

      {item.secondary_codes.length > 0 && (
        <div className="mt-3">
           <div className="text-xs text-slate-400 uppercase font-semibold mb-2">Secondary Codes</div>
           <div className="space-y-2">
             {item.secondary_codes.map((code, idx) => (
               <div key={idx} className="flex items-start gap-2 text-sm bg-gray-50 p-2 rounded border border-gray-100">
                 <div className="flex-1">
                   <span className="font-medium text-slate-700 block">{code.domain}</span>
                   <span className="text-slate-600 block text-xs">{code.subcategory}</span>
                 </div>
                 <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                    code.confidence === 'high' ? 'bg-green-50 text-green-700 border-green-100' : 
                    code.confidence === 'medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                    'bg-orange-50 text-orange-700 border-orange-100'
                 }`}>
                   {code.confidence}
                 </span>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default OutcomeCard;