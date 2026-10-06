export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  image: string;
  role: string;
  duration: string;
  keyFeatures: string[];
  responsiveDetails: string;
  overview: string;
}

export interface Service {
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  techSkills: string[];
}

export interface EducationItem {
  number: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "DUR E PAKEEZA",
  role: "Frontend Developer | WordPress Developer",
  experienceYears: "3",
  location: "Sargodha, Pakistan",
  email: "durepakeeza.web@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  behance: "https://behance.net",
  bio: "Frontend and WordPress developer specializing in responsive websites, clean code architectures, and thoughtful editorial interfaces. 3 years of commercial experience delivering client projects across e-commerce, custom WordPress development, and modern web applications.",
};

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-platform",
    number: "01",
    title: "E-Commerce Website",
    category: "WordPress / WooCommerce",
    technologies: ["WordPress", "WooCommerce", "Elementor Pro", "Custom CSS", "JavaScript"],
    description: "A responsive e-commerce website focused on clean product presentation, user-friendly layouts and smooth browsing across different screen sizes.",
    image: "/src/assets/images/project_ecommerce_store_1791260153642.jpg",
    role: "Lead WordPress & WooCommerce Developer",
    duration: "6 Weeks",
    overview: "Built a high-converting, luxury-grade e-commerce storefront designed for bespoke lifestyle goods. Focused on intuitive visual hierarchy, rapid product discovery, and frictionless checkout across all devices.",
    keyFeatures: [
      "Custom product catalogue and taxonomy filtering",
      "Tailored cart and checkout flows optimized for high conversion",
      "Dynamic AJAX search and variant selection",
      "Speed optimization achieving 95+ Mobile Google PageSpeed metrics"
    ],
    responsiveDetails: "Fluid typographic scaling with custom CSS clamps, zero layout shift on mobile viewports, and touch-optimized navigation drawers."
  },
  {
    id: "portfolio-website",
    number: "02",
    title: "Personal Portfolio Website",
    category: "WordPress & Custom Frontend",
    technologies: ["WordPress", "Elementor Pro", "HTML5", "CSS3", "JavaScript"],
    description: "A professional portfolio website designed with responsive sections and a clean visual structure.",
    image: "/src/assets/images/project_portfolio_site_1791260163614.jpg",
    role: "UI/UX & Frontend Developer",
    duration: "3 Weeks",
    overview: "Created an editorial showcase for a multidisciplinary architect and designer. Featuring asymmetric grid balance, micro-interactions, and custom Elementor components.",
    keyFeatures: [
      "Custom responsive layout architecture",
      "Smooth scroll transitions and interactive case study modals",
      "Refined typography system combining modern serif with clean sans-serif",
      "Lightweight custom CSS styling overriding generic theme bloat"
    ],
    responsiveDetails: "Adaptive two-column desktop to single-column mobile view with prioritized content hierarchy and zero horizontal scrolling."
  },
  {
    id: "notes-taking-app",
    number: "03",
    title: "Notes Taking App",
    category: "Frontend Web Application",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage API", "Responsive UI"],
    description: "A simple notes-taking application with a clean and user-friendly interface.",
    image: "/src/assets/images/project_notes_app_1791260172990.jpg",
    role: "Frontend Developer",
    duration: "2 Weeks",
    overview: "Developed a focused, distraction-free web application for note creation, tag-based categorization, and markdown notes management. Designed with dark mode ergonomics and instant client-side retrieval.",
    keyFeatures: [
      "Real-time client-side search and tag filtering",
      "Persistent state management via modern LocalStorage API",
      "Markdown formatting preview with split layout",
      "Keyboard shortcut support for rapid note capture and editing"
    ],
    responsiveDetails: "Collapsible sidebar drawer on mobile with full-width reading view and touch gestures for quick management."
  }
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Frontend Development",
    shortDesc: "Translating bespoke designs into performant, accessible, and clean semantic code.",
    deliverables: ["HTML5 / Modern CSS / JavaScript", "Cross-browser consistency", "Pixel-perfect implementation"],
    details: "I construct durable, responsive frontend architectures with meticulous attention to typography, spacing rhythm, and fluid animations."
  },
  {
    number: "02",
    title: "WordPress Development",
    shortDesc: "Building custom WordPress environments powered by Elementor Pro & custom themes.",
    deliverables: ["Elementor Pro custom layouts", "Theme customization & hooks", "WooCommerce storefronts"],
    details: "Developing clean, easy-to-manage WordPress websites that give clients complete autonomy without sacrificing site speed or aesthetic integrity."
  },
  {
    number: "03",
    title: "Responsive Website Design",
    shortDesc: "Crafting interfaces that adapt gracefully across mobile, tablet, and widescreen displays.",
    deliverables: ["Mobile-first fluid design", "Touch gesture optimization", "Zero layout shift guarantee"],
    details: "Every breakpoint is thoughtfully calibrated so your brand communicates elegance whether viewed on a flagship smartphone or a 4K studio monitor."
  },
  {
    number: "04",
    title: "Website Customization & Optimization",
    shortDesc: "Auditing, refactoring, and accelerating existing WordPress and frontend websites.",
    deliverables: ["Core Web Vitals acceleration", "Custom code fixes & plugins", "Basic SEO & metadata alignment"],
    details: "Eliminating theme bloat, optimizing asset loading, and refining visual consistency to elevate user retention and search ranking."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "WordPress Developer",
    company: "FoxDev Studio",
    period: "Oct 2024 – Apr 2026",
    location: "Remote",
    type: "Commercial Agency",
    responsibilities: [
      "Developed and customized responsive WordPress websites using Elementor and Elementor Pro.",
      "Created modern layouts focused on usability, responsiveness, and visual consistency across all client deliverables.",
      "Customized pages, landing pages, and website components according to strict project specifications.",
      "Optimized website performance and rendering for desktop, tablet, and mobile devices."
    ],
    techSkills: [
      "WordPress",
      "Elementor Pro",
      "WooCommerce",
      "HTML5 / CSS3",
      "Responsive Web Design",
      "Performance Optimization",
      "Cross-Browser Compatibility"
    ]
  },
  {
    role: "WordPress Developer",
    company: "CodeHub",
    period: "Aug 2022 – Apr 2024",
    location: "Remote",
    type: "Tech Solutions",
    responsibilities: [
      "Developed and maintained WordPress websites based on comprehensive project and client requirements.",
      "Customized website layouts and content using WordPress and Elementor ecosystem.",
      "Implemented responsive designs ensuring seamless cross-browser and cross-device compatibility.",
      "Worked on website customization, troubleshooting frontend defects, and performance enhancements."
    ],
    techSkills: [
      "WordPress",
      "Elementor",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Website Customization",
      "UI/UX Implementation",
      "Cross-Device Debugging"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    number: "01",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Sargodha",
    location: "Pakistan",
    period: "2017 — 2021",
    description: "Built a strong foundation in computer science and technology, supporting my professional work in frontend and web development."
  },
  {
    number: "02",
    degree: "ICS — Intermediate in Computer Science",
    institution: "Punjab Group of Colleges",
    location: "Pakistan",
    period: "2015 — 2017",
    description: "Developed an early foundation in computer science and technology that led to my journey in web development."
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    description: "Core web standards and modern client-side development",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"]
  },
  {
    name: "WordPress",
    description: "CMS architecture, visual builders, and e-commerce setups",
    skills: ["WordPress", "Elementor", "Elementor Pro", "WooCommerce", "Website Customization"]
  },
  {
    name: "Design & Optimization",
    description: "User experience, conversion optimization, and technical performance",
    skills: ["UI/UX Design", "Landing Page Development", "Basic SEO", "Performance Optimization", "Cross-Browser Compatibility"]
  },
  {
    name: "Tools",
    description: "Development workflow, version control, and IDEs",
    skills: ["Git", "GitHub", "Visual Studio Code"]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    summary: "Discovery & Requirements",
    description: "Deep dive into your business goals, target audience, brand identity, and technical parameters to establish clear deliverables."
  },
  {
    step: "02",
    title: "Design",
    summary: "Visual Architecture & Wireframes",
    description: "Crafting thoughtful wireframes, editorial typography systems, and responsive layouts tailored to high-end aesthetic standards."
  },
  {
    step: "03",
    title: "Develop",
    summary: "Clean Code & WordPress Build",
    description: "Engineering clean frontend markup, custom CSS, Elementor components, or JavaScript functionality with clean structure."
  },
  {
    step: "04",
    title: "Refine",
    summary: "Cross-Device Testing & Speed",
    description: "Rigorous testing across screen resolutions, mobile touch points, cross-browser compatibility, and Core Web Vitals optimization."
  },
  {
    step: "05",
    title: "Launch",
    summary: "Deployment & Delivery",
    description: "Smooth deployment, DNS configuration, client handover, and documentation for seamless ongoing maintenance."
  }
];
