import React, { useEffect } from 'react';
import { useQuote } from '../context/QuoteContext';
import { QuoteForm } from './QuoteForm';
import { X } from 'lucide-react';

export const QuoteModal = () => {
  const { isOpen, closeQuote, selectedService } = useQuote();

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeQuote();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeQuote]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeQuote}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-1 sm:p-2">
          <QuoteForm
            initialServiceId={selectedService}
            onCancel={closeQuote}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
