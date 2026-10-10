import React from 'react';
import { industriesServed } from '../data/industries';
import { DynamicIcon } from '../components/IconHelper';
import { useQuote } from '../context/QuoteContext';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const Industries = () => {
  const { openQuote } = useQuote();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Industrial Sectors</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Industries Supported
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 leading-relaxed">
            Exploring how precision calibration underpins quality compliance, part interchangeability, and operational safety across diverse manufacturing segments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Transparency note */}
        <div className="mb-8 p-4 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-blue-900 text-left">
          <p className="font-semibold text-blue-950">Sector Application Scope:</p>
          <p className="mt-0.5 leading-relaxed text-blue-900">
            These industrial sectors illustrate typical engineering domains served by industrial metrology laboratories in the National Capital Region. Capabilities are matched against your company’s specific drawing tolerances and quality standards.
          </p>
        </div>

        {/* Detailed Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesServed.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-lg border border-slate-200 shadow-card p-6 sm:p-8 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-secondary">
                    <DynamicIcon name={ind.iconName} className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {ind.statusNote}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-navy-900 mb-2">
                  {ind.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {ind.summary}
                </p>

                <div className="p-3.5 bg-slate-50 rounded-md border border-slate-200 mb-4 text-xs text-slate-700">
                  <span className="font-bold text-navy-900 block mb-1">Calibration Role & Application:</span>
                  <p className="leading-relaxed">{ind.application}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Critical Quality Drivers:
                  </span>
                  {ind.keyNeeds.map((need, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-brand-primary text-navy-900 hover:text-white rounded text-xs font-semibold transition group"
                >
                  <span>Request Calibration Consultation</span>
                  <ArrowRight className="w-4 h-4 text-brand-secondary group-hover:text-cyan-300 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Industries;
