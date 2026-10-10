import React from 'react';
import { qualityPolicy } from '../data/qualityInfo';
import { companyInfo } from '../data/companyInfo';
import { DynamicIcon } from '../components/IconHelper';
import { useQuote } from '../context/QuoteContext';
import { ShieldCheck, FileCheck, CheckCircle2, AlertCircle, Phone, ArrowRight, ExternalLink } from 'lucide-react';

export const Quality = () => {
  const { openQuote } = useQuote();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Metrology Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Quality Assurance & Accreditation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 leading-relaxed">
            Our quality policy is founded on transparency, documented laboratory protocols, and traceability to recognized national measurement standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Strictly Neutral Accreditation Status Policy Box per section 9 */}
        <div className="mb-12 p-6 rounded-lg bg-navy-950 text-white border border-navy-800 shadow-xl text-left">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-cyan-900/60 border border-cyan-700/80 text-[11px] font-semibold text-cyan-300">
                <span>{qualityPolicy.accreditationStatus.badge}</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Official Laboratory Accreditation Statement
              </h2>
              <p className="text-sm text-cyan-100 font-medium max-w-3xl">
                "{qualityPolicy.neutralNotice}"
              </p>
              <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
                {qualityPolicy.accreditationStatus.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${companyInfo.contact.phoneClean}`}
                className="px-4 py-2.5 bg-brand-secondary hover:bg-blue-600 text-white rounded text-xs font-semibold transition text-center"
              >
                Call Quality Coordinator
              </a>
              <button
                type="button"
                onClick={() => openQuote()}
                className="px-4 py-2.5 bg-navy-900 hover:bg-navy-800 border border-navy-700 text-slate-200 rounded text-xs font-semibold transition text-center"
              >
                Inquire Specific Scope
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Laboratory Quality */}
        <div className="mb-14 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">
            Standard Operating Quality Principles
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Structured processes designed to safeguard accuracy across all calibration cycles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPolicy.principles.map((principle, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                  <DynamicIcon name={principle.icon} className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calibration Certificate Structure */}
        <div className="mb-14 p-6 sm:p-8 rounded-lg border border-slate-200 bg-white shadow-card text-left">
          <div className="flex items-center space-x-2 text-navy-900 mb-2">
            <FileCheck className="w-5 h-5 text-brand-secondary" />
            <h3 className="text-lg font-bold">Calibration Certificate Structure & Elements</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Every instrument serviced is returned with an authentic calibration report providing traceable reference data for internal quality audits and ISO documentation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            {qualityPolicy.certificateFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-2 rounded hover:bg-slate-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How Client Teams Verify Scope */}
        <div className="p-6 sm:p-8 rounded-lg border border-slate-200 bg-slate-50 text-left">
          <h3 className="text-lg font-bold text-navy-900 mb-2">
            How to Verify Technical Scope for Your Audit Requirements
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            A three-step process for quality managers, vendor auditors, and procurement teams:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityPolicy.howToVerify.map((item) => (
              <div key={item.step} className="bg-white p-5 rounded-lg border border-slate-200 space-y-2">
                <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-navy-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quality;
