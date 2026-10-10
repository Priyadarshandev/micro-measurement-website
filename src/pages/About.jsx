import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { useQuote } from '../context/QuoteContext';
import { Target, Users, ShieldCheck, MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const About = () => {
  const { openQuote } = useQuote();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Company Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Parashar Micro Measurement Pvt. Ltd.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 leading-relaxed">
            A dedicated calibration laboratory committed to metrological integrity, repeatable measurement accuracy, and dependable technical support for industrial manufacturing.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Body */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                Precision Measurement Engineering
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>{companyInfo.legalName}</strong> operates a calibration laboratory situated at Block B, 59, Sector 64, Noida, Uttar Pradesh. Our laboratory provides specialized calibration services for measuring tools and instruments utilized in high-precision manufacturing, quality control laboratories, and heavy fabrication operations.
                </p>
                <p>
                  In modern manufacturing, measurement accuracy directly dictates component fit, assembly safety, and customer satisfaction. Even minor drifts in measuring instruments can lead to scrap rates, costly rework, or audit non-conformances. Our calibration workflows are established to verify instrument performance against known reference masters with strict documentation.
                </p>
              </div>
            </div>

            {/* Core Focus Pillars */}
            <div className="pt-4 space-y-4">
              <h3 className="text-lg font-bold text-navy-900">Our Core Operating Focus</h3>
              
              <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50 space-y-2">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm">
                  <Target className="w-5 h-5 text-brand-secondary" />
                  <span>Commitment to Measurement Reliability</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every instrument accepted by our laboratory undergoes methodical visual inspection, zero adjustment verification, multi-point calibration, and repeatable error logging under controlled ambient conditions.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50 space-y-2">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-brand-secondary" />
                  <span>Supporting Industrial Quality Requirements</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We assist plant quality departments, machining shops, and production engineers in maintaining timely recalibration cycles, maintaining audit-ready documentation for vendor assessments and ISO compliance.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50 space-y-2">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm">
                  <Users className="w-5 h-5 text-brand-secondary" />
                  <span>Professional Customer Support</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct communication channels with laboratory coordinators. Whether clarifying technical observation certificates or coordinating sample dispatches, we prioritize clarity and responsiveness.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openQuote()}
                className="px-5 py-2.5 bg-brand-primary hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm rounded-md transition shadow"
              >
                Request Quotation
              </button>

              <a
                href={`tel:${companyInfo.contact.phoneClean}`}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold text-xs sm:text-sm rounded-md border border-slate-300 transition inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-brand-secondary" />
                <span>Call Lab: {companyInfo.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Sidebar / Photography & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-card bg-slate-100">
              <img
                src="/images/instruments-close.jpg"
                alt="Precision calibration measurement tools"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-left">
                <p className="text-xs font-bold text-navy-900">Metrology Inspection Bench</p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Vernier calipers, micrometers, and precision gauge blocks on polished granite surface plate.
                </p>
              </div>
            </div>

            {/* Facility Location Card */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 text-left space-y-3">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-secondary" />
                <span>Laboratory Location</span>
              </h3>
              <p className="text-sm font-semibold text-navy-900">
                {companyInfo.legalName}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {companyInfo.address.full}
              </p>
              <div className="pt-2 text-xs text-slate-600 space-y-1 border-t border-slate-200">
                <p><strong>Operating Hours:</strong> {companyInfo.contact.businessHours.weekdays}</p>
                <p><strong>Direct Helpline:</strong> {companyInfo.contact.phoneDisplay}</p>
              </div>
            </div>

            {/* Transparent claims note */}
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 text-left">
              <p className="font-semibold text-amber-950">Laboratory Statement on Credentials:</p>
              <p className="mt-1 leading-relaxed">
                We present verified operational facts and welcome prospective clients to inspect our laboratory facility in Sector 64, Noida or request specific scope schedules directly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
