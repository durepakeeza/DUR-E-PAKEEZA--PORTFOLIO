import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Mail, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'WordPress Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Editorial Headings */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#C9C7FF]/60" />
                <span className="text-xs uppercase tracking-[0.22em] text-[#A7A7AE] font-medium">
                  Direct Inquiries
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3F1ED] font-normal tracking-tight text-balance">
                Have a project in mind?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#A7A7AE] font-light leading-relaxed">
              Let's create something thoughtful, responsive and built to make an impact.
            </p>

            {/* Direct Coordinates */}
            <div className="space-y-4 pt-4 border-t border-[#1E1E26]">
              {/* Email with copy affordance */}
              <div className="p-4 bg-[#121216] border border-[#22222B] flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-sm bg-[#1A1A22] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C9C7FF]" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase tracking-wider text-[#A7A7AE] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#A7A7AE] hover:text-[#C9C7FF] hover:bg-[#181820] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-[#C9C7FF]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 bg-[#121216] border border-[#22222B] flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#1A1A22] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D9D9E2]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A7A7AE] block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-[#F3F1ED]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#A7A7AE] block mb-3">
                Professional Networks
              </span>
              <div className="flex items-center gap-4 text-xs font-mono">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A7A7AE]" />
                </a>
                <span className="text-[#32323E]">&bull;</span>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors"
                >
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A7A7AE]" />
                </a>
                <span className="text-[#32323E]">&bull;</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A7A7AE]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Conversation Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-[#22222B] p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full border border-[#C9C7FF]/60 bg-[#C9C7FF]/10 text-[#C9C7FF] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-3xl text-[#F3F1ED]">
                  Message Received
                </h3>
                <p className="text-sm text-[#A7A7AE] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Dur E Pakeeza will review your brief and respond via{' '}
                  <span className="text-[#C9C7FF]">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', service: 'WordPress Development', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs uppercase tracking-widest bg-[#1A1A22] text-[#F3F1ED] hover:bg-[#252530] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1E1E26]">
                  <h3 className="font-editorial text-2xl text-[#F3F1ED]">
                    Start a Conversation
                  </h3>
                  <span className="text-[11px] font-mono text-[#A7A7AE]">
                    CONFIDENTIAL &bull; DIRECT
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs uppercase tracking-wider text-[#A7A7AE] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#0C0C0F] border border-[#262632] px-4 py-3 text-sm text-[#F3F1ED] placeholder-[#555562] focus:outline-none focus:border-[#C9C7FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-xs uppercase tracking-wider text-[#A7A7AE] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-[#0C0C0F] border border-[#262632] px-4 py-3 text-sm text-[#F3F1ED] placeholder-[#555562] focus:outline-none focus:border-[#C9C7FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-service"
                    className="block text-xs uppercase tracking-wider text-[#A7A7AE] mb-2"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="client-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0C0C0F] border border-[#262632] px-4 py-3 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#C9C7FF] transition-colors"
                  >
                    <option value="WordPress Development">WordPress Development (Elementor / WooCommerce)</option>
                    <option value="Frontend Development">Frontend Development (HTML5 / CSS / JavaScript)</option>
                    <option value="Responsive Website Design">Responsive Redesign &amp; Mobile Optimization</option>
                    <option value="Website Customization & Optimization">Speed Optimization &amp; Theme Customization</option>
                    <option value="General Consultation">Full Website Build / General Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-xs uppercase tracking-wider text-[#A7A7AE] mb-2"
                  >
                    Project Details &amp; Timeline
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your website objectives, target audience, and preferred timeline..."
                    className="w-full bg-[#0C0C0F] border border-[#262632] px-4 py-3 text-sm text-[#F3F1ED] placeholder-[#555562] focus:outline-none focus:border-[#C9C7FF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F3F1ED] text-[#0B0B0D] hover:bg-[#C9C7FF] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-md hover:shadow-[0_0_24px_rgba(201,199,255,0.25)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
