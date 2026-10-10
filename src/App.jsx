import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-primary text-white rounded-md shadow-lg outline-none ring-2 ring-cyan-400 text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Auto scroll restoration */}
      <ScrollToTop />

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Interactive Elements */}
      <Footer />
      <QuoteModal />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
