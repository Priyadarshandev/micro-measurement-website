import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-lg border border-slate-200 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-brand-secondary flex items-center justify-center mx-auto">
          <span className="text-2xl font-black">404</span>
        </div>

        <div>
          <h1 className="text-2xl font-extrabold text-navy-900">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            The page or document you are seeking does not exist or has been relocated within our calibration portal.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-brand-primary hover:bg-navy-800 text-white font-medium text-xs rounded-md transition shadow-subtle"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-navy-900 font-medium text-xs rounded-md border border-slate-300 transition"
          >
            <span>View Calibration Services</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need immediate assistance? Call our desk:{' '}
          <a href={`tel:${companyInfo.contact.phoneClean}`} className="font-semibold text-brand-secondary hover:underline">
            {companyInfo.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
