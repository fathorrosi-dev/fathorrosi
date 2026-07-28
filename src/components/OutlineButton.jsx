export const OutlineButton = ({
  as,
  href,
  children,
  className = "",
  ...props
}) => {
  const Component = as || (href ? "a" : "button");
  const isExternal = Component === "a" && href?.startsWith("http");

  return (
    <Component
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
