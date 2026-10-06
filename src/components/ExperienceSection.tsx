import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../data/portfolioData.ts';
import { Calendar, MapPin, Code2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1C1C24] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
              Career Trajectory
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
            Commercial Experience.
          </h2>
          <p className="text-sm text-[#A7A7AE] mt-4 max-w-xl font-light leading-relaxed">
            Hands-on agency and remote studio engagements delivering reliable WordPress platforms, custom layouts, and responsive frontend interfaces.
          </p>
        </div>

        {/* Vertical Timeline with gradual reveal */}
        <div className="relative ml-3 md:ml-6 pl-8 md:pl-12 space-y-16">
          {/* Animated Timeline line */}
          <div
            className={`absolute left-0 top-2 bottom-2 w-[1px] bg-[#2A2A38] transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-y-100 origin-top' : 'opacity-0 scale-y-0'
            }`}
          />

          {EXPERIENCE.map((exp, index) => {
            const delayClass = index === 0 ? 'delay-200' : 'delay-400';

            return (
              <div
                key={`${exp.company}-${index}`}
                className={`relative group transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                } ${delayClass}`}
              >
                {/* Timeline Node Indicator */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full bg-[#0B0B0D] border-2 transition-all duration-500 flex items-center justify-center ${
                      isVisible
                        ? 'border-[#C9C7FF] shadow-[0_0_12px_rgba(201,199,255,0.3)]'
                        : 'border-[#2A2A38]'
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-[#111116] border border-[#22222B] p-8 transition-all duration-300 hover:border-[#C9C7FF]/40">
                  {/* Header row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1E1E26]">
                    <div>
                      <div className="flex items-center gap-2.5 text-xs text-[#A7A7AE] mb-1">
                        <span className="text-[#C9C7FF] font-medium">{exp.company}</span>
                        <span>&bull;</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#F3F1ED]">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A7A7AE]">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#181820] border border-[#262632] text-[#F3F1ED]">
                        <Calendar className="w-3.5 h-3.5 text-[#C9C7FF]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#A7A7AE]">
                        <MapPin className="w-3.5 h-3.5 text-[#D9D9E2]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="pt-6">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#A7A7AE] mb-4">
                      Key Impact &amp; Contributions
                    </div>
                    <ul className="space-y-3.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm text-[#A7A7AE] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF] mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Skills specific to this role / company */}
                  {exp.techSkills && exp.techSkills.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-[#1E1E26]">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="w-3.5 h-3.5 text-[#C9C7FF]" />
                        <span className="text-xs uppercase tracking-[0.16em] text-[#A7A7AE] font-medium">
                          Core Technologies &amp; Applied Skills
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs">
                        {exp.techSkills.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            <span className="font-mono text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors">
                              {tech}
                            </span>
                            {tIdx < exp.techSkills.length - 1 && (
                              <span className="text-[#363646]" aria-hidden="true">&bull;</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
