import React from 'react';
import { Target, MessageSquare, Briefcase, Headphones, FileCheck2, Clock } from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: "Attention to Measurement Accuracy",
      desc: "Our calibration procedures focus on repeatability, zero error identification, and rigorous comparison against defined reference tolerances."
    },
    {
      icon: MessageSquare,
      title: "Clear, Transparent Communication",
      desc: "We discuss calibration scope, instrument conditions, and turnaround expectations candidly before accepting instruments for service."
    },
    {
      icon: Briefcase,
      title: "Professional Service Coordination",
      desc: "Dedicated handling for industrial purchase managers and QA leads, ensuring organized receipt, tracking, and dispatch of plant instruments."
    },
    {
      icon: Headphones,
      title: "Customer-Focused Technical Support",
      desc: "Direct access to laboratory personnel for clarifying certificate readings, observation data, and recalibration interval recommendations."
    },
    {
      icon: FileCheck2,
      title: "Structured Documentation & Reports",
      desc: "Every completed calibration includes a clear certificate tabulating observations, master standard validity, and technician sign-offs."
    },
    {
      icon: Clock,
      title: "Committed Turnaround Schedules",
      desc: "We respect plant maintenance schedules and shutdown windows, aiming to minimize downtime for critical production tooling."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-secondary bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <span>Our Professional Values</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Why Partner with Parashar Micro Measurement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Built around technical integrity, disciplined laboratory protocols, and reliable service for industrial manufacturing teams.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-card transition text-left"
              >
                <div className="w-10 h-10 rounded-md bg-navy-900 text-cyan-400 flex items-center justify-center mb-4 shadow-xs">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verification transparency banner */}
        <div className="mt-10 p-4 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-600 text-left flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
          <p>
            <strong>Commitment to Transparency:</strong> We operate strictly on confirmed technical capabilities. We do not display unsubstantiated client claims or unverified awards. All calibration scopes and master certificates are provided in formal documentation upon request.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
