import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <a
      href={companyInfo.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat with Parashar Micro Measurement"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition duration-200 border-2 border-white group"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 text-white fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping"></span>
      </div>
      <span className="text-xs font-semibold pr-1">Chat on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
