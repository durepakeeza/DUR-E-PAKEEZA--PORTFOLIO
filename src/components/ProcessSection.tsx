import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData.ts';
import { ChevronRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
              Methodology &amp; Execution
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
            From Idea To Launch.
          </h2>
          <p className="text-sm text-[#A7A7AE] mt-3 max-w-xl font-light leading-relaxed">
            A structured, transparent 5-stage deployment framework engineered for zero surprises and timely delivery.
          </p>
        </div>

        {/* Process Horizontal Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#16161D] border-[#C9C7FF]/60 shadow-lg'
                    : 'bg-[#121216] border-[#22222B] hover:border-[#2C2C38]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs ${
                        isSelected ? 'text-[#C9C7FF]' : 'text-[#A7A7AE]/70'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-[#C9C7FF]' : 'bg-[#2A2A36]'
                      }`}
                    />
                  </div>

                  <h3 className="font-editorial text-2xl text-[#F3F1ED] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[11px] uppercase tracking-wider text-[#A7A7AE] mb-3">
                    {step.summary}
                  </div>
                </div>

                <p className="text-xs text-[#A7A7AE] leading-relaxed pt-3 border-t border-[#1C1C24]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
