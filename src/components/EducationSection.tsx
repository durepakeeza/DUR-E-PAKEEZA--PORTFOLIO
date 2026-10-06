import React, { useEffect, useRef, useState } from 'react';
import { EDUCATION } from '../data/portfolioData.ts';
import { GraduationCap, MapPin, BookOpen, Check } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1C1C24] relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-[#C9C7FF]/[0.02] blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
              Academic Foundation
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
            Education.
          </h2>
          <p className="text-sm text-[#A7A7AE] mt-3 max-w-xl font-light leading-relaxed">
            Formal training in computational thinking, software principles, and core systems that empower my frontend engineering practice.
          </p>
        </div>

        {/* Distinctive Luxury Academic Timeline */}
        <div className="relative">
          {/* Thin Silver Timeline Track */}
          <div
            className={`absolute left-0 md:left-1/3 top-0 bottom-0 w-[1px] bg-[#D9D9E2]/20 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-y-100 origin-top' : 'opacity-0 scale-y-0'
            }`}
          />

          <div className="space-y-16 md:space-y-24">
            {EDUCATION.map((item, index) => {
              const delayClass = index === 0 ? 'delay-200' : 'delay-400';

              return (
                <div
                  key={item.number}
                  className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start transition-all duration-700 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  } ${delayClass}`}
                >
                  {/* Left Column (Desktop): Large Year Typography & Period (4 cols) */}
                  <div className="md:col-span-4 pl-8 md:pl-0 md:text-right md:pr-12 relative">
                    <span className="font-mono text-xs text-[#C9C7FF] tracking-widest uppercase block mb-1">
                      PHASE {item.number}
                    </span>
                    <div className="font-editorial text-3xl sm:text-4xl text-[#F3F1ED] font-light tracking-wide tabular-nums">
                      {item.period}
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#A7A7AE] block mt-1">
                      Formal Degree
                    </span>
                  </div>

                  {/* Active Indicator on Silver Line */}
                  <div className="absolute left-[-5.5px] md:left-[calc(33.333333%-5.5px)] top-2.5 z-10 flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full bg-[#0B0B0D] border border-[#D9D9E2] flex items-center justify-center transition-all duration-500 ${
                        isVisible
                          ? 'border-[#C9C7FF] shadow-[0_0_10px_rgba(201,199,255,0.4)]'
                          : ''
                      }`}
                    >
                      <div className="w-1 h-1 rounded-full bg-[#C9C7FF]" />
                    </div>
                  </div>

                  {/* Right Column (Desktop): Degree Details & Institution (8 cols) */}
                  <div className="md:col-span-8 pl-8 md:pl-10 space-y-4">
                    <div className="p-7 md:p-8 bg-[#111116] border border-[#22222B] hover:border-[#C9C7FF]/40 transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#1E1E26]">
                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#F3F1ED] group-hover:text-white transition-colors">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#D9D9E2]/80">
                          <MapPin className="w-3.5 h-3.5 text-[#C9C7FF]" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#C9C7FF] font-medium">
                        <GraduationCap className="w-4 h-4 text-[#C9C7FF]" />
                        <span>{item.institution}</span>
                      </div>

                      <p className="text-sm text-[#A7A7AE] leading-relaxed font-light mt-3">
                        {item.description}
                      </p>

                      {/* Academic alignment highlight */}
                      <div className="mt-5 pt-4 border-t border-[#1C1C24] flex items-center gap-2 text-xs text-[#A7A7AE]/90">
                        <Check className="w-3.5 h-3.5 text-[#C9C7FF]" />
                        <span>Core Curriculum: Algorithms, Web Technologies, Database Systems &amp; Software Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
