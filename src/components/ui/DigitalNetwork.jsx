'use client';

export default function DigitalNetwork() {
  return (
    <div className="relative inline-flex items-center gap-3 px-3 py-2 rounded-[var(--radius-default)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs">
      {/* Interactive / Rotating SVG Globe Network */}
      <div className="relative h-10 w-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full motion-safe:animate-[spin_40s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer circle */}
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" className="text-neutral-200" />
          
          {/* Latitude lines */}
          <ellipse cx="50" cy="50" rx="46" ry="18" stroke="currentColor" strokeWidth="0.8" className="text-neutral-300" />
          <ellipse cx="50" cy="50" rx="46" ry="34" stroke="currentColor" strokeWidth="0.8" className="text-neutral-200" />
          
          {/* Longitude lines */}
          <ellipse cx="50" cy="50" rx="18" ry="46" stroke="currentColor" strokeWidth="0.8" className="text-neutral-300" />
          <ellipse cx="50" cy="50" rx="34" ry="46" stroke="currentColor" strokeWidth="0.8" className="text-neutral-200" />
          <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.8" className="text-neutral-300" />
          <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.8" className="text-neutral-300" />

          {/* Connection Arc */}
          <path
            d="M 28 35 Q 50 15 72 35"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="text-[var(--color-accent)] opacity-80"
          />
          <path
            d="M 28 65 Q 50 85 72 65"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="text-[var(--color-accent)] opacity-60"
          />

          {/* Geographic Node (Odisha Coordinates Representation) */}
          <circle cx="58" cy="46" r="3" fill="var(--color-accent)" className="animate-pulse" />
          <circle cx="58" cy="46" r="6" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.5" />

          {/* Remote Network Nodes */}
          <circle cx="28" cy="35" r="2" fill="#171717" />
          <circle cx="72" cy="35" r="2" fill="#171717" />
          <circle cx="34" cy="65" r="2" fill="#171717" />
          <circle cx="72" cy="65" r="2" fill="#171717" />
        </svg>

        {/* Static center pulse indicator */}
        <span className="absolute h-1 w-1 rounded-full bg-[var(--color-accent)]" />
      </div>

      {/* Signature Studio Typography */}
      <div className="space-y-0.5 pr-1 text-left">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-800 font-semibold">
            Engineered in Odisha
          </span>
        </div>
        <p className="text-[11px] font-mono text-neutral-500">
          Built for the Web Worldwide
        </p>
      </div>
    </div>
  );
}
