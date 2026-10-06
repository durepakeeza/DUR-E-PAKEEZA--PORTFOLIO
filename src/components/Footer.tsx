import React from 'react';
import { Logo } from './Logo.tsx';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="border-t border-[#1C1C24] bg-[#08080A] py-16 text-[#A7A7AE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#1A1A22]">
          {/* Logo & Identity */}
          <div className="space-y-2">
            <Logo size="md" showSubtitle={true} />
            <p className="text-xs text-[#A7A7AE]/70 font-light max-w-sm mt-3">
              Crafting responsive web experiences through semantic frontend engineering and custom WordPress solutions.
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <nav className="flex items-center gap-6 text-xs uppercase tracking-wider">
              <a href="#about" className="hover:text-[#F3F1ED] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#F3F1ED] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#F3F1ED] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#F3F1ED] transition-colors">Contact</a>
            </nav>

            <button
              onClick={onBackToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider text-[#F3F1ED] bg-[#121216] border border-[#242430] hover:border-[#C9C7FF]/50 hover:text-[#C9C7FF] transition-all"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7A7AE]/70">
          <div>
            &copy; {new Date().getFullYear()} DUR E PAKEEZA. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>DESIGNED WITH RESTRAINT</span>
            <span className="text-[#32323E]">&bull;</span>
            <span className="text-[#C9C7FF]/80">SARGODHA, PAKISTAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
