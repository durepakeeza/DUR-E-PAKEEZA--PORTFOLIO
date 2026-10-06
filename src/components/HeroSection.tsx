import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Code2, Layers } from 'lucide-react';

interface HeroSectionProps {
  onViewWork: () => void;
  onWorkTogether: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewWork,
  onWorkTogether
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle cinematic mouse parallax dampening
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle ambient radial glow in deep background - strictly controlled, not neon */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C9C7FF]/[0.035] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D9D9E2]/[0.025] blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Luxury Editorial Typography (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 2: Eyebrow Label smooth reveal */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="w-8 h-[1px] bg-[#C9C7FF]/60" />
              <p className="text-xs uppercase tracking-[0.24em] font-medium text-[#A7A7AE]">
                Frontend Developer / WordPress Developer
              </p>
            </div>

            {/* Step 3: Main Heading line-by-line reveal */}
            <h1
              className={`font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-normal tracking-tight text-[#F3F1ED] leading-[1.06] text-balance transition-all duration-800 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Turning Ideas Into{' '}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F3F1ED] via-[#D9D9E2] to-[#C9C7FF]">
                Digital Experiences.
              </span>
            </h1>

            {/* Step 4: Professional Introduction fade upward */}
            <p
              className={`text-base sm:text-lg text-[#A7A7AE] font-light leading-relaxed max-w-xl transition-all duration-800 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I design and develop responsive websites that combine clean interfaces, thoughtful user experiences and reliable frontend development.
            </p>

            {/* Step 5: CTAs appear with slight delay and micro-interactions */}
            <div
              className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-800 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={onViewWork}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#F3F1ED] text-[#0B0B0D] font-medium text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#C9C7FF] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(201,199,255,0.25)]"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>

              <button
                onClick={onWorkTogether}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#121216] text-[#F3F1ED] border border-[#262632] font-medium text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:border-[#C9C7FF]/70 hover:text-[#C9C7FF] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(201,199,255,0.1)]"
              >
                <span>Let's Work Together</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]/80 group-hover:scale-125 transition-transform" />
              </button>
            </div>

            {/* Meta Line */}
            <div
              className={`pt-4 border-t border-[#1C1C24] flex items-center gap-3 text-xs tracking-wider text-[#A7A7AE]/90 transition-all duration-700 delay-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-[#C9C7FF] font-medium">3 Years of Experience</span>
              <span className="text-[#363644]">•</span>
              <span>Frontend</span>
              <span className="text-[#363644]">•</span>
              <span>WordPress</span>
              <span className="text-[#363644]">•</span>
              <span>UI/UX</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with subtle floating movement & mouse parallax */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative transition-all duration-1000 delay-300 ease-out ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Outer decorative architectural corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#C9C7FF]/50" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#C9C7FF]/50" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#C9C7FF]/50" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#C9C7FF]/50" />

              {/* Main Visual Frame */}
              <div className="relative overflow-hidden bg-[#121216] border border-[#22222B] shadow-2xl shadow-black/80">
                {/* Browser-like window header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#22222B] bg-[#0E0E12]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A36]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A36]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A36]" />
                  </div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#A7A7AE]/70 font-mono">
                    durepakeeza.studio
                  </span>
                  <div className="w-6 h-[1px] bg-[#2A2A36]" />
                </div>

                {/* Hero Editorial Visual with gentle floating motion */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#16161C] group">
                  <img
                    src="/src/assets/images/hero_editorial_workspace_1791260139683.jpg"
                    alt="Dur E Pakeeza Editorial Digital Workspace & Code Architecture"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Luxury gradient scrim at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Frame bottom metadata strip */}
                <div className="px-5 py-3.5 bg-[#0E0E12] border-t border-[#22222B] flex items-center justify-between text-xs text-[#A7A7AE]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
                    <span className="font-mono text-[11px]">STATUS // AVAILABLE FOR PROJECTS</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#A7A7AE]/70">SARGODHA, PK</span>
                </div>
              </div>

              {/* Minimal floating UI element 1 - Top Right */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-[#16161C]/95 backdrop-blur-md border border-[#2B2B38] px-3.5 py-2 shadow-xl shadow-black/60 hidden sm:flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-sm bg-[#C9C7FF]/10 flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5 text-[#C9C7FF]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A7A7AE]">Craft</div>
                  <div className="text-xs font-medium text-[#F3F1ED]">Semantic & Clean</div>
                </div>
              </div>

              {/* Minimal floating UI element 2 - Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#16161C]/95 backdrop-blur-md border border-[#2B2B38] px-3.5 py-2 shadow-xl shadow-black/60 hidden sm:flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-sm bg-[#D9D9E2]/10 flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5 text-[#D9D9E2]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A7A7AE]">Architecture</div>
                  <div className="text-xs font-medium text-[#F3F1ED]">100% Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
