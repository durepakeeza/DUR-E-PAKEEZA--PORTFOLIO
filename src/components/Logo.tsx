import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export const DPMonogram: React.FC<{ sizeClass?: string; idPrefix?: string }> = ({
  sizeClass = 'w-9 h-9',
  idPrefix = 'nav'
}) => {
  const gradId = `dp-monogram-grad-${idPrefix}`;
  const silverId = `dp-silver-grad-${idPrefix}`;
  const hoverGradId = `dp-hover-grad-${idPrefix}`;

  return (
    <div className={`relative ${sizeClass} shrink-0`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        aria-label="Dur E Pakeeza DP Monogram"
      >
        <defs>
          {/* Base silver/ivory with faint lavender undertone */}
          <linearGradient id={silverId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9D9E2" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#ECEAF0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F3F1ED" stopOpacity="0.98" />
          </linearGradient>

          {/* Soft luxury lavender highlight gradient for hover */}
          <linearGradient id={hoverGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9C7FF" stopOpacity="1" />
            <stop offset="60%" stopColor="#DDD5FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#D9D9E2" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9C7FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D9D9E2" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Outer alignment hairline border */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="2"
          className="stroke-[#2A2A36] group-hover:stroke-[#C9C7FF]/40 transition-colors duration-500"
          strokeWidth="0.75"
        />

        {/* DP Letterforms */}
        {/* D Stem */}
        <path
          d="M 18 13 L 18 51"
          stroke={`url(#${silverId})`}
          className="group-hover:stroke-[#C9C7FF] transition-all duration-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Top Serif */}
        <path
          d="M 15 13 L 21 13"
          stroke={`url(#${silverId})`}
          className="group-hover:stroke-[#C9C7FF] transition-all duration-500"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Bottom Serif */}
        <path
          d="M 15 51 L 22 51"
          stroke={`url(#${silverId})`}
          className="group-hover:stroke-[#C9C7FF] transition-all duration-500"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* D Outer Arch */}
        <path
          d="M 18 13.5 H 32 C 45 13.5 45 50.5 32 50.5 H 18"
          stroke={`url(#${silverId})`}
          className="group-hover:stroke-[#D9D9E2] transition-all duration-500"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* P Stem */}
        <path
          d="M 28 19 L 28 47"
          stroke={`url(#${gradId})`}
          className="group-hover:stroke-[#C9C7FF] transition-all duration-500"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* P Loop */}
        <path
          d="M 28 19.5 H 38.5 C 44 19.5 44 34.5 38.5 34.5 H 28"
          stroke={`url(#${gradId})`}
          className="group-hover:stroke-[#C9C7FF] transition-all duration-500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Harmonic Accent Dot */}
        <circle
          cx="33"
          cy="27"
          r="1.2"
          fill="#C9C7FF"
          className="group-hover:scale-125 transition-transform duration-500 origin-center"
        />
      </svg>
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showSubtitle = false,
  className = ''
}) => {
  const monogramSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.22em]',
    md: 'text-base tracking-[0.24em]',
    lg: 'text-xl tracking-[0.26em]',
    xl: 'text-2xl tracking-[0.28em]'
  };

  return (
    <div className={`group flex items-center gap-3 select-none cursor-pointer ${className}`}>
      <DPMonogram sizeClass={monogramSizes[size]} idPrefix={size} />

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-editorial font-medium uppercase text-[#F3F1ED] transition-colors duration-500 group-hover:text-white ${titleSizes[size]}`}
          >
            DUR E PAKEEZA
          </span>
          {showSubtitle && (
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#A7A7AE] group-hover:text-[#C9C7FF]/80 transition-colors duration-500 -mt-0.5">
              Frontend &bull; WordPress
            </span>
          )}
        </div>
      )}
    </div>
  );
};
