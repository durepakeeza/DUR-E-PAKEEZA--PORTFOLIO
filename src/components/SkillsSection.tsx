import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { Sparkles, Terminal, Palette, Laptop, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-[#C9C7FF]" />;
      case 1:
        return <Laptop className="w-4 h-4 text-[#D9D9E2]" />;
      case 2:
        return <Palette className="w-4 h-4 text-[#C9C7FF]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D9D9E2]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
                Disciplines &amp; Proficiencies
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
              Technical Expertise.
            </h2>
          </div>
          <p className="text-sm text-[#A7A7AE] max-w-md font-light leading-relaxed">
            Honest, verified proficiencies acquired over commercial production cycles. No fabricated percentage bars—pure execution capabilities.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#1E1E26] scrollbar-none">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-all duration-200 border ${
                activeTab === idx
                  ? 'bg-[#18181F] text-[#F3F1ED] border-[#C9C7FF]/60 shadow-sm'
                  : 'bg-transparent text-[#A7A7AE] border-transparent hover:text-[#F3F1ED] hover:border-[#262632]'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display & Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Overview of current category */}
          <div className="lg:col-span-4 bg-[#121216] border border-[#22222B] p-8 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C9C7FF]">
              CATEGORY 0{activeTab + 1}
            </div>
            <h3 className="font-editorial text-3xl text-[#F3F1ED]">
              {SKILL_CATEGORIES[activeTab].name}
            </h3>
            <p className="text-sm text-[#A7A7AE] leading-relaxed">
              {SKILL_CATEGORIES[activeTab].description}
            </p>
            <div className="pt-4 border-t border-[#1E1E26] text-xs text-[#A7A7AE] space-y-2">
              <div className="flex items-center justify-between">
                <span>Verified Commercial Use</span>
                <span className="text-[#F3F1ED] font-medium">Yes</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total Specialized Items</span>
                <span className="text-[#C9C7FF] font-medium tabular-nums">
                  {SKILL_CATEGORIES[activeTab].skills.length} Capabilities
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Skill Cards in Selected Category */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
              <div
                key={skill}
                className="group p-6 bg-[#121216] border border-[#22222B] hover:border-[#C9C7FF]/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle lavender hover indicator bar */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#C9C7FF] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[11px] text-[#A7A7AE]/60">
                    0{index + 1}
                  </span>
                  <div className="w-5 h-5 rounded-full border border-[#2A2A36] group-hover:border-[#C9C7FF]/50 flex items-center justify-center transition-colors">
                    <Check className="w-3 h-3 text-[#C9C7FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <h4 className="text-base font-medium text-[#F3F1ED] group-hover:text-white transition-colors">
                  {skill}
                </h4>

                <p className="text-xs text-[#A7A7AE] mt-2 leading-relaxed">
                  Production-grade implementation with cross-device reliability and maintainable architecture.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Overview All-Skills Strip (Zero-Pill Typography) */}
        <div className="mt-16 pt-10 border-t border-[#1C1C24]">
          <div className="text-xs uppercase tracking-[0.2em] text-[#A7A7AE] mb-4">
            Full Competency Landscape
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A7A7AE]">
            {SKILL_CATEGORIES.flatMap((c) => c.skills).map((skill, index, arr) => (
              <React.Fragment key={skill}>
                <span className="hover:text-[#F3F1ED] transition-colors">{skill}</span>
                {index < arr.length - 1 && (
                  <span className="text-[#32323E]" aria-hidden="true">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
