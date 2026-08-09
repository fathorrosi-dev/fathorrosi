import { ArrowRight, FolderLock, ScrollText, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    headline: "How a project comes together.",
    subtitle:
      "From the first message to the day you get your app, this is the path every project follows.",
    steps: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We align on scope, platform, and package over chat before anything is written down formally.",
      },
      {
        step: "02",
        title: "Scope of Work",
        description:
          "A written SOW covers deliverables, design source, backend ownership, and the publishing plan. It goes out before any payment happens.",
      },
      {
        step: "03",
        title: "Kickoff",
        description:
          "Once the order is confirmed, a requirements checklist follows: design files, account access, and content needed to start.",
      },
      {
        step: "04",
        title: "Development",
        description:
          "Work proceeds against the SOW with milestone check-ins, so progress stays visible instead of silent.",
      },
      {
        step: "05",
        title: "Review",
        description:
          "A build goes out for testing. Revisions are scoped against what the SOW already covers, not open-ended.",
      },
      {
        step: "06",
        title: "Handover",
        description:
          "Source code, documentation, and full account ownership transfer to you. Nothing stays tied to a personal account.",
      },
    ],
    principles: [
      {
        icon: ShieldCheck,
        title: "You own every account",
        description:
          "Play Console, Firebase, Supabase. I work as an invited collaborator, never as the account holder.",
      },
      {
        icon: ScrollText,
        title: "Scope before payment",
        description:
          "You see exactly what is included, and what is not, before you commit to anything.",
      },
      {
        icon: FolderLock,
        title: "A clean handover",
        description:
          "Full source code and documentation, not a black box you depend on me to explain.",
      },
    ],
    ctaTitle: "Have a project in mind?",
    ctaSubtitle: "Tell me about it and I will get back to you within a day or two.",
    contact: "Contact me",
  },
  id: {
    headline: "Bagaimana sebuah proyek berjalan.",
    subtitle:
      "Dari pesan pertama sampai hari Anda menerima aplikasi, inilah alur yang diikuti setiap proyek.",
    steps: [
      {
        step: "01",
        title: "Diskusi Awal",
        description:
          "Kita samakan scope, platform, dan paket lewat chat sebelum apa pun ditulis secara formal.",
      },
      {
        step: "02",
        title: "Scope of Work",
        description:
          "SOW tertulis mencakup deliverable, sumber desain, kepemilikan backend, dan rencana publikasi. Dikirim sebelum ada pembayaran.",
      },
      {
        step: "03",
        title: "Kickoff",
        description:
          "Setelah order dikonfirmasi, requirements checklist dikirim: file desain, akses akun, dan konten yang dibutuhkan untuk mulai.",
      },
      {
        step: "04",
        title: "Pengerjaan",
        description:
          "Pengerjaan berjalan sesuai SOW dengan checkpoint di tiap milestone, jadi progres tetap terlihat, bukan diam tanpa kabar.",
      },
      {
        step: "05",
        title: "Review",
        description:
          "Build dikirim untuk ditest. Revisi mengacu pada scope yang sudah tercakup di SOW, bukan tanpa batas.",
      },
      {
        step: "06",
        title: "Handover",
        description:
          "Source code, dokumentasi, dan kepemilikan penuh akun diserahkan ke Anda. Tidak ada yang tertinggal di akun pribadi saya.",
      },
    ],
    principles: [
      {
        icon: ShieldCheck,
        title: "Semua akun milik Anda",
        description:
          "Play Console, Firebase, Supabase. Saya bekerja sebagai collaborator yang diundang, bukan sebagai pemilik akun.",
      },
      {
        icon: ScrollText,
        title: "Scope jelas sebelum bayar",
        description:
          "Anda tahu persis apa yang termasuk, dan apa yang tidak, sebelum berkomitmen pada apa pun.",
      },
      {
        icon: FolderLock,
        title: "Handover yang rapi",
        description:
          "Source code dan dokumentasi lengkap, bukan black box yang bikin Anda bergantung ke saya.",
      },
    ],
    ctaTitle: "Punya proyek yang ingin dikerjakan?",
    ctaSubtitle: "Ceritakan ke saya, saya akan balas dalam satu sampai dua hari.",
    contact: "Hubungi saya",
  },
};

export const Process = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <>
      <section className="pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionLabel>process</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.headline}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {t.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="divide-y divide-border border-t border-border">
            {t.steps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 60}>
                <div className="grid gap-3 py-8 md:grid-cols-[6rem_1fr] md:gap-8">
                  <div className="font-mono text-sm text-muted-foreground md:pt-1">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {t.principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-6"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {t.ctaTitle}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.ctaSubtitle}
                </p>
              </div>
              <Button size="lg" onClick={() => navigate("/#contact")}>
                {t.contact}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
