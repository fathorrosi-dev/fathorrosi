export const MetaList = ({ items, className = "" }) => (
  <dl
    className={`divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface font-mono text-sm ${className}`}
  >
    {items.map((item) => (
      <div
        key={item.label}
        className="flex items-center justify-between gap-4 px-4 py-3"
      >
        <dt className="text-muted-foreground">{item.label}</dt>
        <dd className="text-right text-foreground">{item.value}</dd>
      </div>
    ))}
  </dl>
);
