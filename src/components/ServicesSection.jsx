import React from 'react';
import { calibrationServices } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { Info, HelpCircle } from 'lucide-react';

export const ServicesSection = ({ showScopeNotice = true, title = "Calibration Services", subtitle = "Proposed laboratory measurement categories for industrial quality assurance and testing equipment." }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <span>Metrology Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Developer / Client Scope Notice per requirement */}
        {showScopeNotice && (
          <div className="mb-8 p-4 rounded-md bg-amber-50/90 border border-amber-200/90 flex items-start space-x-3 text-xs text-amber-900 text-left">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Notice on Technical Scope & Parameter Verification:</p>
              <p className="mt-0.5 leading-relaxed text-amber-900">
                The categories below are proposed metrology disciplines. Exact measuring ranges, calibration tolerances, and CMC values are confirmed by laboratory management upon review of your instrument model and make.
              </p>
            </div>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calibrationServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
