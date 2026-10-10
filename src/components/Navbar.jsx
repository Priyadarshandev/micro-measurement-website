import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import { useQuote } from '../context/QuoteContext';
import { Phone, MapPin, Menu, X, ArrowRight, Shield, Clock } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuote } = useQuote();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Calibration Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Quality & Accreditation', path: '/quality' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Block B, Sector 64, Noida, UP</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <a
              href={`tel:${companyInfo.contact.phoneClean}`}
              className="flex items-center space-x-1.5 text-slate-100 hover:text-cyan-300 font-medium transition"
              aria-label="Direct Call Parashar Micro Measurement"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{companyInfo.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Typographic Logo Placeholder */}
          <Link
            to="/"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md p-1"
            aria-label="Parashar Micro Measurement Home"
          >
            {/* Geometric Metrology Mark */}
            <div className="w-11 h-11 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-cyan-400 shadow-subtle group-hover:bg-navy-800 transition">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" strokeOpacity="0.4" strokeDasharray="2 2" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" />
                <path d="M12 7v2M12 15v2M7 12h2M15 12h2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[15px] sm:text-[17px] font-bold text-navy-900 tracking-tight leading-tight">
                PARASHAR MICRO MEASUREMENT
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                Pvt. Ltd. • Calibration Laboratory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition ${
                    isActive
                      ? 'text-brand-secondary bg-blue-50/80 font-semibold'
                      : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => openQuote()}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-brand-primary hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold rounded-md transition shadow-subtle focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-cyan-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              type="button"
              onClick={() => openQuote()}
              className="px-3 py-1.5 bg-brand-primary text-white text-xs font-semibold rounded-md"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150"
        >
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md text-base font-medium transition ${
                    isActive
                      ? 'text-brand-secondary bg-blue-50 font-semibold'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuote();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-brand-primary text-white font-semibold rounded-md shadow text-sm"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </button>

              <div className="p-3 bg-slate-50 rounded-md border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <a href={`tel:${companyInfo.contact.phoneClean}`} className="font-semibold text-navy-900">
                    {companyInfo.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sector 64, Noida, UP 201309</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
