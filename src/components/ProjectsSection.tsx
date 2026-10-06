import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { ArrowUpRight, ArrowRight, Eye, Check } from 'lucide-react';

interface ProjectsSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onInquireProject
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight">
              Selected Work.
            </h2>
          </div>
          <p className="text-sm text-[#A7A7AE] max-w-md font-light leading-relaxed">
            Large-scale editorial case studies across bespoke WordPress platforms, e-commerce storefronts, and responsive frontend applications.
          </p>
        </div>

        {/* Large Editorial Project Presentations (Not basic small grid) */}
        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="group p-6 md:p-10 bg-[#111116] border border-[#22222B] hover:border-[#C9C7FF]/40 transition-all duration-500 shadow-xl"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Column (7 cols on desktop) */}
                  <div
                    className={`lg:col-span-7 cursor-pointer ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#181822] border border-[#22222E] group-hover:border-[#C9C7FF]/30 transition-colors duration-500">
                      <img
                        src={project.image}
                        alt={`${project.title} Interface Visual`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      {/* Gentle dark gradient scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                      {/* Top metadata badge */}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-xs uppercase px-2.5 py-1 bg-[#0B0B0D]/80 backdrop-blur-sm text-[#C9C7FF] border border-[#2E2E3C]">
                          {project.number} // {project.category}
                        </span>
                      </div>

                      {/* Subtle hover prompt */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B0B0D]/90 backdrop-blur-md text-xs uppercase tracking-wider text-[#F3F1ED] border border-[#C9C7FF]/40">
                          <Eye className="w-3.5 h-3.5 text-[#C9C7FF]" />
                          Inspect Case
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Story & Specs Column (5 cols on desktop) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#A7A7AE]">
                        <span className="text-[#C9C7FF]">ROLE</span>
                        <span>&bull;</span>
                        <span className="text-[#F3F1ED]">{project.role}</span>
                      </div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="font-editorial text-3xl sm:text-4xl text-[#F3F1ED] cursor-pointer group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#A7A7AE] font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-2 pt-2 border-t border-[#1E1E26]">
                      {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#D9D9E2]/90">
                          <Check className="w-3.5 h-3.5 text-[#C9C7FF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies (Zero-pill typography) */}
                    <div className="pt-2">
                      <div className="text-[11px] uppercase tracking-wider text-[#A7A7AE]/70 mb-2">
                        Stack Architecture
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A7A7AE]">
                        {project.technologies.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            <span className="font-mono text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors">
                              {tech}
                            </span>
                            {tIdx < project.technologies.length - 1 && (
                              <span className="text-[#323242]" aria-hidden="true">&bull;</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#F3F1ED] text-[#0B0B0D] hover:bg-[#C9C7FF] text-xs font-medium uppercase tracking-[0.14em] transition-all duration-200"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      <button
                        onClick={() => onInquireProject(project.title)}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#A7A7AE] hover:text-[#C9C7FF] transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
