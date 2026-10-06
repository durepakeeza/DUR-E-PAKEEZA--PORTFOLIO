import React from 'react';
import { SERVICES } from '../data/portfolioData.ts';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Custom bespoke typographic symbol/SVGs for each service
  const renderServiceSymbol = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#C9C7FF]" fill="none" stroke="currentColor">
            <path d="M12 10 L6 20 L12 30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 10 L34 20 L28 30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="17" y1="26" x2="23" y2="14" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
        );
      case 1:
        return (
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#D9D9E2]" fill="none" stroke="currentColor">
            <rect x="7" y="7" width="26" height="26" strokeWidth="1.2" strokeOpacity="0.4" />
            <path d="M12 13 L17 27 L20 18 L23 27 L28 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#C9C7FF]" fill="none" stroke="currentColor">
            <rect x="6" y="8" width="28" height="20" strokeWidth="1.3" />
            <rect x="22" y="16" width="12" height="16" strokeWidth="1.3" fill="#0B0B0D" />
            <circle cx="28" cy="29" r="0.75" fill="currentColor" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#D9D9E2]" fill="none" stroke="currentColor">
            <circle cx="20" cy="20" r="13" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M20 12 V20 L26 24" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
                Capabilities &amp; Solutions
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
              What I Can Build.
            </h2>
          </div>
          <p className="text-sm text-[#A7A7AE] max-w-md font-light leading-relaxed">
            Tailored engineering capabilities delivering tangible business outcomes for businesses, agencies, and creative founders.
          </p>
        </div>

        {/* Four Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.number}
              className="group relative p-8 bg-[#111116] border border-[#22222B] hover:border-[#C9C7FF]/40 transition-all duration-300 hover:-translate-y-1 hover:translate-x-0.5 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Thin lavender line revealed on hover */}
              <div
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C9C7FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                aria-hidden="true"
              />

              <div>
                {/* Header line with symbol and number */}
                <div className="flex items-center justify-between pb-6 border-b border-[#1E1E26]">
                  <div className="p-2.5 bg-[#17171E] border border-[#242430] group-hover:border-[#C9C7FF]/40 transition-colors">
                    {renderServiceSymbol(index)}
                  </div>
                  <span className="font-mono text-xs text-[#C9C7FF]">
                    {service.number}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="pt-6 space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F3F1ED] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A7A7AE] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#A7A7AE]/70">
                    Typical Deliverables
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#D9D9E2]">
                    {service.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#C9C7FF]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 border-t border-[#1C1C24] mt-6 flex items-center justify-between">
                <span className="text-xs text-[#A7A7AE]">Bespoke specifications available</span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#F3F1ED] group-hover:text-[#C9C7FF] transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
