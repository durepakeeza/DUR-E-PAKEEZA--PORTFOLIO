import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#22222A]/80 shadow-lg shadow-black/40'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single Brand Lockup with DP Monogram */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9C7FF]"
          aria-label="Dur E Pakeeza Home"
        >
          <Logo size={isScrolled ? 'sm' : 'md'} />
        </button>

        {/* Zone 2: Clean Typography Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`group relative text-xs tracking-[0.16em] uppercase font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#F3F1ED]'
                    : 'text-[#A7A7AE] hover:text-[#F3F1ED]'
                }`}
              >
                {item.label}
                {/* Subtle luxury lavender active line indicator */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C9C7FF] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100 opacity-90' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium text-[#F3F1ED] bg-[#121216] border border-[#262632] hover:border-[#C9C7FF]/60 hover:text-[#C9C7FF] transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A7A7AE] group-hover:text-[#C9C7FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F3F1ED] hover:text-[#C9C7FF] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0D]/98 border-b border-[#22222A] px-6 py-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left text-sm tracking-[0.18em] uppercase py-2 transition-colors ${
                  activeSection === item.id
                    ? 'text-[#C9C7FF] font-medium'
                    : 'text-[#A7A7AE] hover:text-[#F3F1ED]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#1C1C24] flex items-center justify-between">
              <span className="text-xs text-[#A7A7AE]">durepakeeza.web@gmail.com</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#0B0B0D] bg-[#F3F1ED] hover:bg-[#C9C7FF] font-medium transition-colors"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
