import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={
        language === "en" ? "Switch to Indonesian" : "Switch to English"
      }
      className="inline-flex h-10 shrink-0 items-center justify-center gap-1 rounded-full border border-border px-3 font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className={language === "en" ? "text-primary" : undefined}>
        EN
      </span>
      <span aria-hidden="true">/</span>
      <span className={language === "id" ? "text-primary" : undefined}>
        ID
      </span>
    </button>
  );
};
