export default function Eyebrow({
  children,
  className = '',
  as: Component = 'span',
  variant = 'default',
  ...props
}) {
  const variantClasses = {
    default: 'text-neutral-500',
    accent: 'text-[var(--color-accent)]',
    dark: 'text-neutral-400',
  };

  return (
    <Component
      className={`inline-block text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
