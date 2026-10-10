import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { DynamicIcon } from './IconHelper';
import { ArrowRight, HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';

export const ServiceCard = ({ service, onSelect }) => {
  const { openQuote } = useQuote();

  const handleEnquire = () => {
    if (onSelect) {
      onSelect(service.id);
    } else {
      openQuote(service.id);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 p-6 shadow-subtle hover:shadow-hover transition duration-200 flex flex-col justify-between group text-left relative">
      <div>
        {/* Top Header: Icon & Category Status Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-navy-50 group-hover:bg-blue-50 border border-slate-200 group-hover:border-blue-200 flex items-center justify-center text-brand-secondary transition">
            <DynamicIcon name={service.iconName} className="w-6 h-6 text-brand-secondary" />
          </div>

          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200/80"
            title={service.developerNote}
          >
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-secondary transition mb-2">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Typical Instruments Calibrated */}
        <div className="mb-4 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Typical Instruments Tested
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.typicalInstruments.slice(0, 4).map((inst, idx) => (
              <span
                key={idx}
                className="inline-block text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded transition"
              >
                {inst}
              </span>
            ))}
            {service.typicalInstruments.length > 4 && (
              <span className="inline-block text-[11px] bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded">
                +{service.typicalInstruments.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-100 mt-2">
        <button
          type="button"
          onClick={handleEnquire}
          className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-md bg-slate-50 hover:bg-brand-primary text-navy-900 hover:text-white font-semibold text-xs sm:text-sm transition group/btn"
        >
          <span>Enquire About This Service</span>
          <ArrowRight className="w-4 h-4 text-brand-secondary group-hover/btn:text-cyan-300 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
