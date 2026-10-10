import React, { useState } from 'react';
import { companyInfo } from '../data/companyInfo';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Parashar Micro Measurement,%0A*Name:* ${encodeURIComponent(formState.name || 'Client')}%0A*Phone:* ${encodeURIComponent(formState.phone || 'N/A')}%0A*Message:* ${encodeURIComponent(formState.message || 'I would like to enquire about calibration services.')}`;
    window.open(`https://wa.me/919910319947?text=${text}`, '_blank');
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <span>Direct Laboratory Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Contact Parashar Micro Measurement Pvt. Ltd.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Reach our calibration desk directly in Sector 64, Noida for instrument queries, quotation timelines, and sample drop-off arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Location & Verified Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Address Card */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-card">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-brand-secondary shrink-0">
                  <MapPin className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Laboratory Address
                  </h3>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
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
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-card">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-brand-secondary shrink-0">
                  <Phone className="w-5 h-5 text-brand-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Direct Contact Desk
                  </h3>
                  <div className="mt-2">
                    <p className="text-xs text-slate-500">Click to call directly:</p>
                    <a
                      href={`tel:${companyInfo.contact.phoneClean}`}
                      className="text-lg font-bold text-brand-secondary hover:text-navy-900 transition block mt-0.5"
                    >
                      {companyInfo.contact.phoneDisplay}
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <a
                      href={companyInfo.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-medium transition shadow-sm w-full justify-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp (+91 99103 19947)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-card">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-brand-secondary shrink-0">
                  <Clock className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                    Laboratory Business Hours
                  </h3>
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

          </div>

          {/* Right Column: Google Maps Interactive Embed & Direct Message */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Embedded Google Map */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-card">
              <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-navy-900">Facility Location Map</p>
                  <p className="text-[11px] text-slate-500">Block B, Sector 64, Noida</p>
                </div>
                <a
                  href={companyInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-secondary hover:underline flex items-center space-x-1"
                >
                  <span>Expand Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-64 sm:h-72 bg-slate-200 relative">
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

            {/* Quick General Inquiry Form */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-card">
              <h3 className="text-base font-bold text-navy-900 mb-1">
                Direct Laboratory Message
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Have a question regarding instrument testing or site collection? Send a brief message.
              </p>

              {submitted ? (
                <div className="p-4 rounded-md bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Message Formatted</span>
                  </div>
                  <p>
                    Your enquiry details are ready. You can forward this directly to our desk on WhatsApp for immediate attention:
                  </p>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium text-xs transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && (
                    <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Amit Kumar"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-brand-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 99103 19947"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-brand-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">Inquiry / Message</label>
                    <textarea
                      rows="3"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Specify instrument type, quantity, or calibration requirements..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-brand-accent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-brand-primary hover:bg-navy-800 text-white text-xs font-semibold rounded transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Format & Prepare Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
