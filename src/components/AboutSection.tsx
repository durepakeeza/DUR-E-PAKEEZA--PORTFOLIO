import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subtle number counter when visible
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const target = 3;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 180);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-[#1C1C24] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
              About Dur E Pakeeza
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
            Building With Purpose.
          </h2>
        </div>

        {/* Two-column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-7 space-y-6 text-[#A7A7AE] font-light leading-relaxed text-base sm:text-lg">
            <p className="text-[#F3F1ED] text-lg sm:text-xl font-normal leading-relaxed">
              I am a dedicated Frontend Developer and WordPress Developer based in Sargodha, Pakistan, turning digital aspirations into refined, highly performant web realities.
            </p>

            <p>
              Over 3 years of commercial and freelance practice, my work has centered on bridging the gap between bespoke visual aesthetics and structural code integrity. Whether engineering responsive layouts from ground zero or configuring bespoke WordPress environments with Elementor and Elementor Pro, my focus is unwavering: clean code, seamless user flow, and cross-device fluidity.
            </p>

            <p>
              I believe every interactive website should communicate value immediately. That requires disciplined typography, fast loading speeds, zero layout shift, and thoughtful responsive choreography that respects the user on any device.
            </p>

            {/* Principles list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#111116] border border-[#202028] hover:border-[#C9C7FF]/30 transition-colors">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#C9C7FF] font-medium mb-1.5">
                  Clean Semantic Code
                </h4>
                <p className="text-xs text-[#A7A7AE] leading-normal">
                  Standardized HTML5, modular CSS, and purposeful JavaScript without unnecessary dependencies.
                </p>
              </div>

              <div className="p-4 bg-[#111116] border border-[#202028] hover:border-[#D9D9E2]/30 transition-colors">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#D9D9E2] font-medium mb-1.5">
                  WordPress &amp; Elementor Mastery
                </h4>
                <p className="text-xs text-[#A7A7AE] leading-normal">
                  Custom-tailored themes, WooCommerce storefronts, and client-friendly visual editing systems.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors group"
              >
                <span>Initiate a Project Collaboration</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C9C7FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Refined Experience / Stat Area with subtle animated reveal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111116] border border-[#22222B] p-8 space-y-8 shadow-xl">
              {/* Stat 1: 03+ Years Experience with animated counter */}
              <div className="border-b border-[#1E1E26] pb-6">
                <div className="font-editorial text-5xl md:text-6xl text-[#F3F1ED] tabular-nums font-light flex items-baseline">
                  <span>0{count}</span>
                  <span className="text-[#C9C7FF] font-normal">+</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#A7A7AE] mt-2 font-medium">
                  Years Commercial Experience
                </div>
                <p className="text-xs text-[#A7A7AE]/80 mt-1 leading-relaxed">
                  Active agency and client delivery in modern web environments.
                </p>
              </div>

              {/* Stat 2: WordPress Development */}
              <div className="border-b border-[#1E1E26] pb-6">
                <div className="font-editorial text-2xl md:text-3xl text-[#F3F1ED] font-normal">
                  WordPress
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#C9C7FF] mt-1 font-medium">
                  Specialized Development
                </div>
                <p className="text-xs text-[#A7A7AE]/80 mt-1 leading-relaxed">
                  Elementor, Elementor Pro, WooCommerce, and tailored component hooks.
                </p>
              </div>

              {/* Stat 3: Responsive Web Design */}
              <div>
                <div className="font-editorial text-2xl md:text-3xl text-[#F3F1ED] font-normal">
                  Responsive
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#D9D9E2] mt-1 font-medium">
                  Adaptive Web Engineering
                </div>
                <p className="text-xs text-[#A7A7AE]/80 mt-1 leading-relaxed">
                  Zero layout-shift guarantee across smartphone, tablet, and ultra-wide.
                </p>
              </div>
            </div>

            {/* Quick credentials card */}
            <div className="p-6 bg-[#0E0E12] border border-[#1E1E26] flex items-center justify-between text-xs">
              <div>
                <span className="text-[#A7A7AE] block text-[11px] tracking-wider uppercase">Base of Operations</span>
                <span className="text-[#F3F1ED] font-medium">Sargodha, Punjab, Pakistan</span>
              </div>
              <div className="text-right">
                <span className="text-[#A7A7AE] block text-[11px] tracking-wider uppercase">Availability</span>
                <span className="text-[#C9C7FF] font-medium flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
                  Remote Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
