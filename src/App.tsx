import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [inquiryService, setInquiryService] = useState('');

  // Intersection observer for updating active nav section
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    scrollTo('contact');
  };

  const handleInquireProject = (projectTitle: string) => {
    setInquiryService(`Project Inquiry: ${projectTitle}`);
    scrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F3F1ED] font-sans selection:bg-[#C9C7FF]/20 selection:text-[#F3F1ED]">
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollTo}
        onOpenContact={() => scrollTo('contact')}
      />

      {/* Main Content Area */}
      <main>
        <HeroSection
          onViewWork={() => scrollTo('projects')}
          onWorkTogether={() => scrollTo('contact')}
        />

        <AboutSection
          onContactClick={() => scrollTo('contact')}
        />

        <SkillsSection />

        <ExperienceSection />

        <EducationSection />

        <ProjectsSection
          onInquireProject={handleInquireProject}
        />

        <ServicesSection
          onSelectService={handleSelectService}
        />

        <ProcessSection />

        <ContactSection
          initialService={inquiryService}
        />
      </main>

      {/* Luxury Footer */}
      <Footer onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
