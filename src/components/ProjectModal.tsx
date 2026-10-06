import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData.ts';
import { X, ArrowUpRight, Check, ShieldCheck, Monitor, Smartphone, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-[#101014] border border-[#262633] shadow-2xl shadow-black z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#20202A] bg-[#0C0C0F]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C9C7FF]">
              PROJECT {project.number}
            </span>
            <span className="text-[#32323E]" aria-hidden="true">/</span>
            <span className="text-xs uppercase tracking-widest text-[#A7A7AE]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A7A7AE] hover:text-[#F3F1ED] hover:bg-[#1A1A22] transition-colors focus:outline-none"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Unique High-Resolution Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#181820] border border-[#22222D]">
            <img
              src={project.image}
              alt={`${project.title} Interface & Architectural Layout`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent pointer-events-none opacity-60" />
          </div>

          {/* Title & Metadata Header */}
          <div className="space-y-3">
            <h3
              id="modal-project-title"
              className="font-editorial text-3xl sm:text-4xl text-[#F3F1ED]"
            >
              {project.title}
            </h3>
            <p className="text-[#A7A7AE] text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Quick specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#14141A] border border-[#22222E]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A7A7AE] block mb-1">
                Role
              </span>
              <span className="text-sm font-medium text-[#F3F1ED]">
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A7A7AE] block mb-1">
                Delivery Duration
              </span>
              <span className="text-sm font-medium text-[#F3F1ED]">
                {project.duration}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A7A7AE] block mb-1">
                Target Viewports
              </span>
              <span className="text-sm font-medium text-[#C9C7FF]">
                Desktop &bull; Tablet &bull; Mobile
              </span>
            </div>
          </div>

          {/* Technologies Used (Zero-Pill Typography) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#A7A7AE] font-medium">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#F3F1ED]">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-xs text-[#D9D9E2]">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-[#363646]" aria-hidden="true">&bull;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#A7A7AE] font-medium">
              Key Architectural Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-[#14141A] border border-[#20202B]">
                  <Check className="w-4 h-4 text-[#C9C7FF] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#D9D9E2] leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Design Details */}
          <div className="p-5 bg-[#14141A] border border-[#20202B] space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9C7FF] font-medium">
              <Smartphone className="w-4 h-4" />
              <span>Responsive Architecture &amp; Breakpoint Handling</span>
            </div>
            <p className="text-xs text-[#A7A7AE] leading-relaxed">
              {project.responsiveDetails}
            </p>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-[#20202A] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3F1ED] text-[#0B0B0D] hover:bg-[#C9C7FF] text-xs font-medium uppercase tracking-[0.14em] transition-colors"
            >
              <span>Discuss Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="px-5 py-3 text-xs uppercase tracking-[0.14em] text-[#A7A7AE] hover:text-[#F3F1ED] transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
