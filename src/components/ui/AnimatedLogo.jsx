'use client';

export default function AnimatedLogo({
  size = 'md', // 'sm' | 'md' | 'lg'
  withText = true,
  theme = 'auto', // 'light' | 'dark' | 'auto'
  className = '',
}) {
  const iconDimensions = {
    sm: { box: 28, stroke: 2 },
    md: { box: 34, stroke: 2.2 },
    lg: { box: 44, stroke: 2.5 },
  }[size] || { box: 34, stroke: 2.2 };

  const textSize = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }[size] || 'text-lg';

  const subtextSize = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  }[size] || 'text-[10px]';

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 select-none group/logo ${className}`}>
      {/* Animated Kinetic Vector Glyph */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover/logo:scale-105"
        style={{ width: iconDimensions.box, height: iconDimensions.box }}
      >
        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-lg bg-blue-500/20 blur-xs transition-opacity duration-300 group-hover/logo:opacity-100 opacity-60"
        />

        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <defs>
            {/* Gradient definition for futuristic motion */}
            <linearGradient id="sd-gradient-1" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>

            <linearGradient id="sd-gradient-2" x1="40" y1="4" x2="4" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818CF8" />
              <stop offset="0.5" stopColor="#6366F1" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>

            <filter id="sd-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Rounded Architectural Frame with moving dashed beam on hover */}
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            rx="10"
            className={`${
              isDark
                ? 'stroke-neutral-800 group-hover/logo:stroke-blue-500/60'
                : 'stroke-neutral-200 group-hover/logo:stroke-blue-500/50'
            } transition-colors duration-300`}
            strokeWidth="1.5"
            fill={isDark ? '#0A0A0C' : '#FFFFFF'}
          />

          {/* Precision Corner Accent Crossbars */}
          <path
            d="M8 12L8 8L12 8"
            stroke="url(#sd-gradient-1)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M36 32L36 36L32 36"
            stroke="url(#sd-gradient-2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Kinetic Interlocking Monogram - "S" (Curve 1) */}
          <path
            d="M27 14C23 13 16 14.5 16 19C16 23.5 28 22 28 26.5C28 30.5 21 31.5 17 30"
            stroke="url(#sd-gradient-1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover/logo:[stroke-dashoffset:40]"
            style={{ strokeDasharray: '40', strokeDashoffset: '0' }}
          />

          {/* Kinetic Interlocking Monogram - "D" (Loop 2) */}
          <path
            d="M21 14.5V29.5M21 15C25.5 15 31 17.5 31 22C31 26.5 25.5 29 21 29"
            stroke="url(#sd-gradient-2)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Pulsating Center Energy Node */}
          <circle
            cx="21"
            cy="22"
            r="2"
            fill="#3B82F6"
            className="animate-ping origin-center"
            style={{ animationDuration: '2.5s' }}
          />
          <circle cx="21" cy="22" r="2.2" fill="#60A5FA" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {withText && (
        <div className="flex flex-col tracking-tight leading-none text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-bold tracking-tight ${textSize} ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Susthir
            </span>
            <span
              className={`font-semibold tracking-tight ${textSize} ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              } group-hover/logo:text-blue-500 transition-colors`}
            >
              Digital
            </span>
          </div>
          <span
            className={`font-mono uppercase tracking-widest ${subtextSize} ${
              isDark ? 'text-neutral-500' : 'text-neutral-400'
            } mt-0.5`}
          >
            STUDIO // ODISHA
          </span>
        </div>
      )}
    </div>
  );
}
