import React from 'react';
import { Link } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { companyInfo } from '../data/companyInfo';
import { ArrowRight, CheckCircle2, Shield, MapPin, Sparkles, Sliders } from 'lucide-react';

export const Hero = () => {
  const { openQuote } = useQuote();

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden py-14 lg:py-20 border-b border-navy-800">
      {/* Background subtle metrology grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>

      {/* Decorative gradient flare */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Facility Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-navy-900 border border-navy-700/80 text-xs text-cyan-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-semibold tracking-wide">CALIBRATION LABORATORY</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">Sector 64, Noida</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Precision You Can Measure.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-white">
                Quality You Can Trust.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {companyInfo.subTagline}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openQuote()}
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-brand-secondary hover:bg-blue-600 text-white font-semibold text-sm rounded-md transition shadow-lg hover:shadow-cyan-900/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-navy-900/90 hover:bg-navy-800 text-slate-200 hover:text-white font-semibold text-sm rounded-md border border-navy-700 transition"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* 3 Compact Benefit Statements per Section 4 requirement */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {companyInfo.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-navy-900/40 p-2.5 rounded border border-navy-800/50">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-100">
                      {pillar.title}
                    </span>
                    <span className="block text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                      {pillar.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Industrial Metrology Photograph */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer frame styling */}
              <div className="relative rounded-lg overflow-hidden border border-navy-700/80 shadow-2xl bg-navy-900">
                <img
                  src="/images/hero-lab.jpg"
                  alt="Precision metrology laboratory with gauge blocks, digital micrometer, and calibration equipment"
                  className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/95 via-navy-950/80 to-transparent p-4 sm:p-5 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                        Metrology Benchmark
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Precision Measurement Laboratory Bench
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded bg-navy-800/80 border border-navy-700 text-[10px] text-slate-300">
                      Noida Facility
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent card floating */}
              <div className="hidden sm:block absolute -bottom-5 -right-4 bg-white text-navy-900 p-3.5 rounded-lg shadow-xl border border-slate-200 text-left max-w-xs animate-in fade-in duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center text-brand-secondary shrink-0">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900 leading-tight">Prompt Turnaround</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Coordinated for manufacturing schedules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
