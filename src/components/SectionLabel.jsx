export const SectionLabel = ({ children }) => (
  <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
    <span aria-hidden="true" className="text-primary">
      //
    </span>
    {children}
  </p>
);
