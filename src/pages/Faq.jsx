import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    headline: "Questions people usually ask.",
    subtitle: "The things that tend to come up before a project starts.",
    faqs: [
      {
        question: "Do you handle UI/UX design?",
        answer:
          "Not as a dedicated designer. I build from Figma files you provide, or from a clean Material 3 interface if you do not have a designer yet.",
      },
      {
        question: "Is iOS supported?",
        answer:
          "Not yet. I currently focus on Android to keep quality consistent with the hardware I have. iOS is a planned addition, not a permanent gap.",
      },
      {
        question: "Who owns the Google Play Console account?",
        answer:
          "You do, from day one. I either get invited as a collaborator on your existing account, or help you set one up. I never publish an app under my own developer account.",
      },
      {
        question:
          "What if I do not have a Play Console account and do not want one?",
        answer:
          "Firebase App Distribution works well for internal or team-only apps, or the APK can be distributed from your own server. Either way, the app stays under your control.",
      },
      {
        question: "Do I need my own backend?",
        answer:
          "Not necessarily. If you already have an API, I can build the app against it directly. If not, I can set up Firebase or Supabase under your own account.",
      },
      {
        question: "How long does a project take?",
        answer:
          "It depends on scope, typically a few days to a few weeks. The clock starts once the requirements checklist, design files, account access, and content, is complete.",
      },
      {
        question: "What happens after the app is done?",
        answer:
          "You get full source code, documentation, and account ownership. Ongoing support is available afterward if you want it.",
      },
    ],
    ctaTitle: "Still have questions?",
    ctaSubtitle: "Send a message and I will get back to you within a day or two.",
    contact: "Contact me",
  },
  id: {
    headline: "Pertanyaan yang sering ditanyakan.",
    subtitle: "Hal-hal yang biasanya muncul sebelum sebuah proyek dimulai.",
    faqs: [
      {
        question: "Apakah Anda menangani desain UI/UX?",
        answer:
          "Tidak sebagai designer khusus. Saya develop dari file Figma yang Anda sediakan, atau dari interface Material 3 yang rapi kalau Anda belum punya designer.",
      },
      {
        question: "Apakah iOS didukung?",
        answer:
          "Belum. Saat ini saya fokus di Android supaya kualitas tetap konsisten dengan hardware yang saya punya. iOS sudah masuk rencana pengembangan, bukan celah permanen.",
      },
      {
        question: "Siapa yang memegang akun Google Play Console?",
        answer:
          "Anda, sejak hari pertama. Saya diundang sebagai collaborator di akun Anda yang sudah ada, atau membantu Anda membuat akun baru. Saya tidak pernah publish aplikasi dari akun developer pribadi saya.",
      },
      {
        question:
          "Bagaimana kalau saya tidak punya akun Play Console dan tidak mau membuatnya?",
        answer:
          "Firebase App Distribution cocok untuk aplikasi internal atau khusus tim, atau APK bisa didistribusikan dari server Anda sendiri. Apa pun pilihannya, aplikasi tetap ada di bawah kendali Anda.",
      },
      {
        question: "Apakah saya perlu backend sendiri?",
        answer:
          "Tidak selalu. Kalau Anda sudah punya API, saya bisa langsung develop aplikasi berdasarkan itu. Kalau belum, saya bisa setup Firebase atau Supabase di bawah akun Anda sendiri.",
      },
      {
        question: "Berapa lama waktu pengerjaan proyek?",
        answer:
          "Tergantung scope, biasanya beberapa hari sampai beberapa minggu. Hitungan waktu dimulai setelah requirements checklist, file desain, akses akun, dan konten, lengkap.",
      },
      {
        question: "Apa yang terjadi setelah aplikasi selesai?",
        answer:
          "Anda mendapat source code lengkap, dokumentasi, dan kepemilikan akun. Dukungan berkelanjutan tersedia setelahnya kalau Anda mau.",
      },
    ],
    ctaTitle: "Masih ada pertanyaan?",
    ctaSubtitle: "Kirim pesan dan saya akan balas dalam satu sampai dua hari.",
    contact: "Hubungi saya",
  },
};

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-border py-2">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 py-4 text-left"
    >
      <span className="text-base font-medium text-foreground">
        {item.question}
      </span>
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`grid overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
        {item.answer}
      </p>
    </div>
  </div>
);

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <>
      <section className="pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="container mx-auto px-6">
          <Reveal>
            <SectionLabel>faq</SectionLabel>
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
        <div className="container mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="border-t border-border">
              {t.faqs.map((item, idx) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
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
