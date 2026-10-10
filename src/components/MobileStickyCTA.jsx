import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { companyInfo } from '../data/companyInfo';
import { Phone, FileText, MessageSquare } from 'lucide-react';

export const MobileStickyCTA = () => {
  const { openQuote } = useQuote();

  return (
    <aside aria-label="Mobile Quick Actions" className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${companyInfo.contact.phoneClean}`}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-md bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold text-xs border border-slate-300 transition"
        >
          <Phone className="w-3.5 h-3.5 text-brand-secondary" />
          <span>Call Lab</span>
        </a>

        <button
          type="button"
          onClick={() => openQuote()}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-md bg-brand-primary hover:bg-navy-800 text-white font-semibold text-xs shadow-sm transition"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-300" />
          <span>Request Quote</span>
        </button>
      </div>
    </aside>
  );
};

export default MobileStickyCTA;
