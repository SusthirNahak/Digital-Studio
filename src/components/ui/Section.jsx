export default function Section({
  children,
  className = '',
  as: Component = 'section',
  spacing = 'default',
  ...props
}) {
  const spacingClasses = {
    none: 'py-0',
    compact: 'py-8 sm:py-12',
    default: 'py-14 sm:py-20 lg:py-24',
    generous: 'py-20 sm:py-28 lg:py-32',
  };

  return (
    <Component
      className={`relative w-full ${spacingClasses[spacing] || spacingClasses.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
