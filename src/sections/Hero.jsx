import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/Button";
import { OutlineButton } from "@/components/OutlineButton";
import { MetaList } from "@/components/MetaList";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    headline: "Flutter apps built to ship, not just to demo.",
    paragraph:
      "I'm Fathorrosi, a mobile developer who turns product requirements into production Flutter apps — published on Google Play, backed by clean architecture and predictable state management with BLoC.",
    contact: "Contact me",
    downloadCv: "Download CV",
    findMeOn: "Find me on",
    status: "Available for work",
  },
  id: {
    headline: "Aplikasi Flutter yang dibangun untuk rilis, bukan sekadar demo.",
    paragraph:
      "Saya Fathorrosi, mobile developer yang mengubah kebutuhan produk menjadi aplikasi Flutter production-ready, sudah dipublikasikan di Google Play, dibangun dengan Clean Architecture dan state management yang terstruktur menggunakan BLoC.",
    contact: "Hubungi saya",
    downloadCv: "Unduh CV",
    findMeOn: "Temukan saya di",
    status: "Tersedia untuk bekerja",
  },
};

export const Hero = () => {
  const { language } = useLanguage();
  const t = copy[language];

  const meta = [
    { label: "role", value: "Flutter Developer" },
    { label: "based", value: "Probolinggo, ID" },
    { label: "stack", value: "Dart · Flutter · Firebase" },
    { label: "status", value: t.status },
  ];

  return (
    <section className="relative pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          {/* Text column */}
          <div>
            <Reveal>
              <SectionLabel>hero</SectionLabel>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t.headline}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t.paragraph}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView()
                  }
                >
                  {t.contact}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <OutlineButton href="https://drive.google.com/file/d/1wZylbUZt3TyFo63v4c-buEwEp6pumxaU/view?usp=sharing">
                  <Download className="h-4 w-4" />
                  {t.downloadCv}
                </OutlineButton>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-5 text-muted-foreground">
                <span className="text-sm">{t.findMeOn}</span>
                <a
                  href="https://github.com/fathorrosi-dev"
                  aria-label="GitHub"
                  className="transition-colors hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fathorrosi-fathor-b95b213a5/"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Photo + meta column */}
          <Reveal delay={200} className="lg:justify-self-end">
            <div className="mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src="/photo-profile.png"
                  alt="Fathorrosi"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <MetaList items={meta} className="mt-6" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
