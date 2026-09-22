import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-tight transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantClasses = {
    primary:
      'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 active:scale-[0.985] shadow-xs border border-transparent',
    secondary:
      'bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.985] shadow-xs',
    accent:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] active:scale-[0.985] shadow-xs border border-transparent',
    outline:
      'bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-100 active:scale-[0.985]',
    text:
      'bg-transparent text-neutral-800 hover:text-neutral-950 p-0 underline-offset-4 hover:underline active:opacity-75',
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 rounded-[var(--radius-subtle)] gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-[var(--radius-default)] gap-2',
    lg: 'text-base px-5 py-3 rounded-[var(--radius-default)] gap-2.5',
    text: '',
  };

  const resolvedSize = variant === 'text' ? sizeClasses.text : sizeClasses[size] || sizeClasses.md;
  const fullClassName = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${resolvedSize} ${className}`;

  if (href) {
    return (
      <Link href={href} className={fullClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullClassName}
      {...props}
    >
      {children}
    </button>
  );
}
