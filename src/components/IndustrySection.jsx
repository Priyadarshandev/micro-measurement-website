import React from 'react';
import { Link } from 'react-router-dom';
import { industriesServed } from '../data/industries';
import { DynamicIcon } from './IconHelper';
import { ArrowRight, Check } from 'lucide-react';

export const IndustrySection = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <span>Customer Segments & Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Industries Supported with Calibration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Potential industrial sectors and quality assurance environments where accurate calibration of measuring instruments is critical to plant operations and product compliance.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesServed.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-subtle hover:shadow-card transition flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-secondary">
                    <DynamicIcon name={ind.iconName} className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {ind.statusNote}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-900 mb-2">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {ind.summary}
                </p>

                <div className="p-3 bg-slate-50 rounded-md border border-slate-100 mb-4 text-xs text-slate-700">
                  <span className="font-semibold text-navy-900 block mb-1">Key Calibration Focus:</span>
                  <p>{ind.application}</p>
                </div>

                <div className="space-y-1.5 mb-2">
                  {ind.keyNeeds.map((need, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link
                  to={`/industries`}
                  className="text-xs font-semibold text-brand-secondary hover:text-navy-900 transition inline-flex items-center space-x-1"
                >
                  <span>Explore industrial use cases</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustrySection;
