import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { IndustrySection } from '../components/IndustrySection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { QualitySection } from '../components/QualitySection';
import { ContactSection } from '../components/ContactSection';
import { useQuote } from '../context/QuoteContext';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Home = () => {
  const { openQuote } = useQuote();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Calibration Services Catalog */}
      <ServicesSection />

      {/* Mid-page Quotation Callout Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-navy-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Immediate Commercial & Technical Inquiry
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Need a Custom Calibration Quotation for Your Plant?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Submit your instrument list and quantities. Our technical desk in Sector 64, Noida will review parameters and reply promptly.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openQuote()}
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 bg-brand-secondary hover:bg-blue-600 text-white font-semibold text-sm rounded-md shadow-lg transition"
          >
            <FileText className="w-4 h-4 text-cyan-300" />
            <span>Request Instant Quote</span>
          </button>
        </div>
      </section>

      {/* Industries Served */}
      <IndustrySection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Quality & Accreditation Section */}
      <QualitySection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
