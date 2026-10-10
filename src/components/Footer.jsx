import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import { calibrationServices } from '../data/services';
import { Phone, MapPin, ExternalLink, ShieldCheck, Mail, ArrowUpRight, X } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-navy-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-md bg-navy-900 border border-navy-700 flex items-center justify-center text-cyan-400">
                <span className="font-bold text-base">PM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-tight">PARASHAR MICRO</span>
                <span className="text-[11px] text-cyan-300 font-semibold tracking-wider uppercase">
                  MEASUREMENT PVT. LTD.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial calibration laboratory dedicated to measurement precision, technical rigor, and quality assurance compliance for manufacturing and engineering sectors.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">Laboratory Operations:</p>
              <p>{companyInfo.contact.businessHours.weekdays}</p>
              <p>{companyInfo.contact.businessHours.sunday}</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition flex items-center space-x-1.5">
                  <span className="text-cyan-500">•</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition flex items-center space-x-1.5">
                  <span className="text-cyan-500">•</span>
                  <span>About Laboratory</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition flex items-center space-x-1.5">
                  <span className="text-cyan-500">•</span>
                  <span>Calibration Services</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition flex items-center space-x-1.5">
                  <span className="text-cyan-500">•</span>
                  <span>Industries Served</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-cyan-400 transition flex items-center space-x-1.5">
                  <span className="text-cyan-500">•</span>
                  <span>Quality & Accreditation</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition flex items-center space-x-1.5">
                  <span className="text-cyan-500">•</span>
                  <span>Contact Information</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Calibration Disciplines */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">
              Calibration Services
            </h4>
            <ul className="space-y-2 text-xs">
              {calibrationServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition flex items-center justify-between text-slate-300 group"
                  >
                    <span>{service.title.replace(' Calibration', '')}</span>
                    <span className="text-[10px] text-cyan-400/80 group-hover:text-cyan-300">View</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Laboratory Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">
              Laboratory Location
            </h4>

            <div className="flex items-start space-x-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">M/s. Parashar Micro Measurement Pvt. Ltd.</p>
                <p className="text-slate-400 mt-0.5">{companyInfo.address.full}</p>
                <a
                  href={companyInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium mt-1 text-[11px]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-300 pt-2 border-t border-navy-800">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-400">Direct Telephone Desk:</p>
                <a
                  href={`tel:${companyInfo.contact.phoneClean}`}
                  className="font-semibold text-white hover:text-cyan-300 transition"
                >
                  {companyInfo.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={companyInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-300 border border-emerald-600/50 text-[11px] font-medium transition"
              >
                <span>WhatsApp Calibration Helpdesk</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Sub-section */}
        <div className="mt-10 pt-6 border-t border-navy-900 text-[11px] text-slate-400 leading-relaxed bg-navy-900/40 p-4 rounded-md">
          <p className="font-semibold text-slate-300 mb-1 flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Scope & Capability Disclaimer:</span>
          </p>
          <p>
            Service categories displayed represent proposed metrology offerings. Official measurement parameters, calibration and measurement capability (CMC), standards traceability, and formal reports are supplied subject to specific laboratory schedule evaluation. For exact scope inquiries or audit requirements, contact our laboratory desk.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <span>© {currentYear} {companyInfo.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600" aria-hidden="true">•</span>
            <span className="text-[11px] text-slate-400">
              Website crafted by{' '}
              <a
                href="https://priyadarshan-dev-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 underline underline-offset-2 decoration-slate-600 hover:decoration-cyan-300 font-medium"
              >
                Priyadarshan Kumar
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-cyan-300 transition underline underline-offset-2"
            >
              Privacy Policy & Terms
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Sector 64, Noida, UP, India</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white text-slate-800 max-w-lg w-full rounded-lg shadow-xl p-6 relative">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-navy-900 mb-3">Privacy & Information Handling Policy</h3>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-96 overflow-y-auto pr-1">
              <p>
                <strong>M/s. Parashar Micro Measurement Pvt. Ltd.</strong> respects client confidentiality. Information shared through this website (such as company name, contact numbers, instrument lists, and calibration requirements) is collected exclusively to evaluate technical feasibility and generate commercial quotations.
              </p>
              <p>
                <strong>Confidentiality of Calibration Data:</strong> All instrument serial numbers, calibration observation readings, and certificates remain strictly confidential between our laboratory and the client organization.
              </p>
              <p>
                <strong>Third-Party Sharing:</strong> We do not sell, rent, or distribute client contact details or proprietary measurement specifications to third parties.
              </p>
              <p>
                <strong>Questions:</strong> For questions regarding laboratory data retention or quality records, please reach us at our laboratory in Block B, 59, Sector 64, Noida.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-4 py-1.5 bg-navy-900 text-white rounded text-xs font-semibold hover:bg-navy-800 transition"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
