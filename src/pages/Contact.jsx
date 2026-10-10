import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { QuoteForm } from '../components/QuoteForm';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact Laboratory Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 leading-relaxed">
            Reach Parashar Micro Measurement Pvt. Ltd. in Sector 64, Noida for calibration quotes, turnaround scheduling, or sample delivery queries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards, Address, Map */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-card space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-brand-secondary shrink-0">
                  <Phone className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Telephone Assistance
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">Direct laboratory line (Click to call):</p>
                  <a
                    href={`tel:${companyInfo.contact.phoneClean}`}
                    className="text-lg font-bold text-brand-secondary hover:text-navy-900 transition block mt-0.5"
                  >
                    {companyInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={companyInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp (+91 99103 19947)</span>
                </a>
              </div>
            </div>

            {/* Address & Facility Card */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-card space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-brand-secondary shrink-0">
                  <MapPin className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Physical Facility Address
                  </h2>
                  <p className="text-sm font-semibold text-navy-900 mt-1">
                    {companyInfo.legalName}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {companyInfo.address.full}
                  </p>
                  <div className="mt-3">
                    <a
                      href={companyInfo.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-secondary hover:text-navy-900 transition"
                    >
                      <span>Open Location in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-card">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-brand-secondary shrink-0">
                  <Clock className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Laboratory Business Hours
                  </h2>
                  <div className="mt-2 text-xs sm:text-sm text-slate-700 space-y-1">
                    <p className="font-medium text-navy-900">{companyInfo.contact.businessHours.weekdays}</p>
                    <p className="text-slate-500">{companyInfo.contact.businessHours.sunday}</p>
                    <p className="text-[11px] text-slate-500 pt-1">
                      {companyInfo.contact.businessHours.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-card">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                <span className="font-bold text-navy-900">Map View: Sector 64, Noida</span>
                <a
                  href={companyInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-secondary hover:underline flex items-center space-x-1 text-[11px]"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-56 bg-slate-200">
                <iframe
                  title="Parashar Micro Measurement Location Map"
                  src={companyInfo.address.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Full Interactive Quotation & Inquiry Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
