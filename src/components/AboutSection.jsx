import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import { ShieldCheck, CheckCircle, ArrowRight, Target, Users, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photograph of Precision Metrology Equipment */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-card bg-slate-100">
                <img
                  src="/images/instruments-close.jpg"
                  alt="Close-up of digital vernier caliper, micrometer, and precision gauge blocks on granite surface plate"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Lab location tag badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-navy-950 text-white p-4 rounded-lg shadow-xl border border-navy-800 text-left max-w-xs">
                <p className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">Facility Address</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">
                  Block B, 59, Sector 64, Noida, UP 201309
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Introduction & Core Tenets */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              <span>About The Laboratory</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Dedicated to Measurement Accuracy & Industrial Quality Assurance
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong>{companyInfo.legalName}</strong> is an industrial calibration laboratory established to provide precise, technically rigorous instrument calibration services for industrial manufacturing units, fabrication facilities, and quality inspection divisions across Delhi-NCR and beyond.
              </p>
              <p>
                Operating from Sector 64, Noida, our laboratory focuses on helping engineering enterprises maintain compliance with stringent quality benchmarks, prevent out-of-tolerance production deviations, and ensure measurement consistency across production cycles.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-xs uppercase tracking-wide mb-1">
                  <Target className="w-4 h-4 text-brand-secondary" />
                  <span>Measurement Reliability</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Standardized calibration procedures designed to identify drift, zero error, and linearity deviations with repeatable accuracy.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-xs uppercase tracking-wide mb-1">
                  <ShieldCheck className="w-4 h-4 text-brand-secondary" />
                  <span>Industrial Quality Support</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Supporting client QA departments in meeting periodic recalibration schedules, audit documentation, and customer compliance.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-xs uppercase tracking-wide mb-1">
                  <Users className="w-4 h-4 text-brand-secondary" />
                  <span>Professional Coordination</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Dedicated customer support for purchase managers and plant engineers to handle instrument dispatch, quotation, and reports.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-xs uppercase tracking-wide mb-1">
                  <CheckCircle className="w-4 h-4 text-brand-secondary" />
                  <span>Documented Reporting</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Clear calibration certificates detailing observed readings, master standard information, and recalibration intervals.
                </p>
              </div>
            </div>

            {/* Link to full About page */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-secondary hover:text-navy-900 transition"
              >
                <span>Read more about our laboratory operations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
