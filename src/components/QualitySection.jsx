import React from 'react';
import { qualityPolicy } from '../data/qualityInfo';
import { DynamicIcon } from './IconHelper';
import { Shield, FileCheck, CheckCircle2, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const QualitySection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <span>Quality Assurance & Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            {qualityPolicy.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {qualityPolicy.subheading}
          </p>
        </div>

        {/* Mandatory Neutral Status Message per Section 9 specification */}
        <div className="mb-10 p-5 rounded-lg bg-navy-950 text-white shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left border border-navy-800">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-md bg-navy-900 border border-navy-700 flex items-center justify-center text-cyan-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block">
                Official Capability Notice
              </span>
              <p className="text-sm sm:text-base font-medium text-slate-100 mt-0.5">
                "{qualityPolicy.neutralNotice}"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Formal accreditation details, measurement uncertainty schedules, and calibration certificates are shared upon specific instrument inquiry.
              </p>
            </div>
          </div>

          <a
            href={`tel:${companyInfo.contact.phoneClean}`}
            className="shrink-0 px-4 py-2 bg-brand-secondary hover:bg-blue-600 text-white rounded text-xs font-semibold transition"
          >
            Speak to Quality Desk
          </a>
        </div>

        {/* Two Column Layout: Photo & Core Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photograph of calibration procedure */}
          <div className="lg:col-span-5 text-left">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-card bg-slate-100">
              <img
                src="/images/calibration-process.jpg"
                alt="Calibration technician inspecting pressure gauge and testing equipment in laboratory"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs font-bold text-navy-900">
                  Precision Inspection Environment
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Controlled conditions for zero-error comparison, repeatability, and calibration documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Quality Principles */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {qualityPolicy.principles.map((principle, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition flex items-start space-x-3.5"
              >
                <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                  <DynamicIcon name={principle.icon} className="w-4 h-4 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Certificate Transparency Schedule */}
        <div className="mt-12 p-6 rounded-lg border border-slate-200 bg-slate-50/70 text-left">
          <h3 className="text-base font-bold text-navy-900 mb-2 flex items-center space-x-2">
            <FileCheck className="w-5 h-5 text-brand-secondary" />
            <span>Standard Calibration Certificate Elements</span>
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            Our calibration documentation is structured to provide clear audit trail evidence for internal quality systems, ISO compliance reviews, and customer evaluations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
            {qualityPolicy.certificateFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualitySection;
