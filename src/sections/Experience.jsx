import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    headline: "Where the work happened.",
    subtitle:
      "A timeline of my professional and learning journey, focused on building real applications and practical skills.",
    experiences: [
      {
        period: "2022 — Present",
        role: "Personal & Independent Projects",
        company: "Self Employed",
        description:
          "Built and published a Flutter mobile application on Google Play. Developed backend REST APIs using Node.js for learning and experimentation. Continuously explored clean architecture, state management, and API integration.",
        technologies: ["Flutter", "Node.js", "PostgreSQL", "Firebase"],
        current: true,
      },
      {
        period: "Feb 2022 – Jul 2022",
        role: "App Developer Intern",
        company: "Vocasia — West Jakarta",
        description:
          "Developed and maintained mobile application features using Flutter and Dart. Collaborated with cross-functional teams to integrate APIs and application logic. Applied mobile development best practices throughout the software development lifecycle.",
        technologies: ["Flutter", "Dart", "REST API"],
        current: false,
      },
      {
        period: "Aug 2021 – Jan 2022",
        role: "Independent Study (MBKM) — Android & Multi-Platform Developer",
        company: "Dicoding Academy (Online)",
        description:
          "Completed an industry-aligned program focused on Android and multi-platform development. Built multiple applications through guided modules and a team-based final project. Strengthened problem-solving, self-learning, and collaboration skills.",
        technologies: ["Flutter", "Dart", "Android", "Git"],
        current: false,
      },
    ],
  },
  id: {
    headline: "Di sinilah semua pekerjaan dimulai.",
    subtitle:
      "Linimasa perjalanan profesional dan belajar saya, fokus pada membangun aplikasi nyata dan skill praktis.",
    experiences: [
      {
        period: "2022 - Sekarang",
        role: "Proyek Pribadi & Mandiri",
        company: "Kerja Mandiri",
        description:
          "Membangun dan mempublikasikan aplikasi mobile Flutter di Google Play. Mengembangkan REST API backend menggunakan Node.js untuk belajar dan eksperimen. Terus mengeksplorasi Clean Architecture, state management, dan integrasi API.",
        technologies: ["Flutter", "Node.js", "PostgreSQL", "Firebase"],
        current: true,
      },
      {
        period: "Feb 2022 - Jul 2022",
        role: "Magang App Developer",
        company: "Vocasia, Jakarta Barat",
        description:
          "Mengembangkan dan memelihara fitur aplikasi mobile menggunakan Flutter dan Dart. Berkolaborasi dengan tim lintas fungsi untuk mengintegrasikan API dan logika aplikasi. Menerapkan best practice mobile development di sepanjang siklus pengembangan software.",
        technologies: ["Flutter", "Dart", "REST API"],
        current: false,
      },
      {
        period: "Agu 2021 - Jan 2022",
        role: "Studi Independen (MBKM) - Android & Multi-Platform Developer",
        company: "Dicoding Academy (Online)",
        description:
          "Menyelesaikan program yang selaras dengan kebutuhan industri, fokus pada pengembangan Android dan multi-platform. Membangun beberapa aplikasi lewat modul terpandu dan proyek akhir berbasis tim. Mengasah kemampuan problem-solving, belajar mandiri, dan kolaborasi.",
        technologies: ["Flutter", "Dart", "Android", "Git"],
        current: false,
      },
    ],
  },
};

export const Experience = () => {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionLabel>experience</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {t.experiences.map((exp, idx) => (
            <Reveal key={exp.role} delay={idx * 60}>
              <div className="grid gap-3 py-8 md:grid-cols-[10rem_1fr] md:gap-8">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground md:pt-1">
                  {exp.current && (
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                  )}
                  {exp.period}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
