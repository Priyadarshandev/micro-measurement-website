import React, { useState } from 'react';
import { calibrationServices } from '../data/services';
import { useQuote } from '../context/QuoteContext';
import { DynamicIcon } from '../components/IconHelper';
import { Search, ArrowRight, Info, Check, Filter } from 'lucide-react';

export const Services = () => {
  const { openQuote } = useQuote();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = calibrationServices.filter((service) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = service.title.toLowerCase().includes(query);
    const descMatch = service.shortDescription.toLowerCase().includes(query);
    const instMatch = service.typicalInstruments.some(inst => inst.toLowerCase().includes(query));
    return titleMatch || descMatch || instMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Metrology Disciplines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Calibration Services Catalog
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 leading-relaxed">
            Proposed calibration and testing categories for industrial instruments across dimensional, pressure, thermal, electrical, and mass measurement domains.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Verification Notice */}
        <div className="mb-8 p-4 rounded-lg bg-amber-50 border border-amber-200 flex items-start space-x-3 text-xs text-amber-900 text-left">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-950">Laboratory Scope Notice:</p>
            <p className="mt-0.5 leading-relaxed">
              These categories represent proposed calibration disciplines. Specific instrument range limits, measurement uncertainty (CMC), and master standard traceability are confirmed on a case-by-case basis by laboratory management in Sector 64, Noida.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md text-left">
          <label htmlFor="search-input" className="block text-xs font-medium text-slate-700 mb-1.5">
            Search by Instrument Name or Parameter:
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. micrometer, pressure gauge, thermocouple, multimeter..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-cyan-100 bg-white"
            />
          </div>
        </div>

        {/* Services List / Cards */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-lg border border-slate-200">
            <p className="text-slate-600 text-sm">No calibration category matches your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-semibold text-brand-secondary hover:underline"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 shadow-card p-6 sm:p-8 text-left transition hover:border-slate-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Icon, Title & Overview */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-secondary shrink-0">
                        <DynamicIcon name={service.iconName} className="w-6 h-6 text-brand-secondary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h2 className="text-lg sm:text-xl font-bold text-navy-900">
                            {service.title}
                          </h2>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                            {service.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Category ID: {service.id}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-md border border-slate-200 text-xs text-slate-700">
                      <span className="font-semibold text-navy-900 block mb-0.5">Calibration Focus:</span>
                      <p>{service.calibrationFocus}</p>
                    </div>
                  </div>

                  {/* Right Column: Typical Instruments & Action */}
                  <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-slate-100 lg:pl-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Common Instruments Tested:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {service.typicalInstruments.map((inst, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                            <span>{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openQuote(service.id)}
                        className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-brand-primary hover:bg-navy-800 text-white font-medium text-xs sm:text-sm rounded-md transition shadow-subtle"
                      >
                        <span>Enquire About {service.title.split(' ')[0]} Calibration</span>
                        <ArrowRight className="w-4 h-4 text-cyan-300" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Services;
