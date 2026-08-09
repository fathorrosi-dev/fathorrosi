import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    headline: "Let's build something worth shipping.",
    subtitle:
      "Have a project in mind? Tell me about it and I'll get back to you within a day or two.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project or opportunity",
    sending: "Sending...",
    send: "Send message",
    successMessage: "Message sent, I'll get back to you soon.",
    errorFallback: "Couldn't send your message. Please try again later.",
    contactInfoTitle: "Contact information",
    contactInfo: [
      { icon: Mail, label: "Email", value: "fathorrosi-dev@proton.me", href: "mailto:fathorrosi-dev@proton.me" },
      { icon: Phone, label: "Phone", value: "+62 (895) 8072-97777", href: "tel:+62895807297777" },
      { icon: MapPin, label: "Location", value: "Probolinggo, East Java, Indonesia", href: null },
    ],
    available: "Currently available",
    availableBlurb:
      "Open to Flutter Developer and Mobile App Developer opportunities. If you're looking for someone committed to learning, building, and improving continuously, feel free to reach out.",
  },
  id: {
    headline: "Ayo bangun sesuatu yang layak dirilis.",
    subtitle:
      "Punya proyek yang ingin dikerjakan? Ceritakan ke saya, saya akan balas dalam satu sampai dua hari.",
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    emailLabel: "Email",
    emailPlaceholder: "anda@email.com",
    messageLabel: "Pesan",
    messagePlaceholder: "Ceritakan tentang proyek atau peluang Anda",
    sending: "Mengirim...",
    send: "Kirim pesan",
    successMessage: "Pesan terkirim, saya akan segera membalas.",
    errorFallback: "Pesan gagal terkirim. Silakan coba lagi nanti.",
    contactInfoTitle: "Informasi kontak",
    contactInfo: [
      { icon: Mail, label: "Email", value: "fathorrosi-dev@proton.me", href: "mailto:fathorrosi-dev@proton.me" },
      { icon: Phone, label: "Telepon", value: "+62 (895) 8072-97777", href: "tel:+62895807297777" },
      { icon: MapPin, label: "Lokasi", value: "Probolinggo, Jawa Timur, Indonesia", href: null },
    ],
    available: "Saat ini tersedia",
    availableBlurb:
      "Terbuka untuk peluang sebagai Flutter Developer maupun Mobile App Developer. Kalau Anda mencari seseorang yang berkomitmen untuk terus belajar, membangun, dan berkembang, jangan ragu untuk menghubungi saya.",
  },
};

export const Contact = () => {
  const { language } = useLanguage();
  const t = copy[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitStatus({
        type: "success",
        message: t.successMessage,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || t.errorFallback,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionLabel>contact</SectionLabel>
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

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {t.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {t.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  t.sending
                ) : (
                  <>
                    {t.send}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  role="status"
                  className={`flex items-center gap-3 rounded-lg p-4 text-sm ${
                    submitStatus.type === "success"
                      ? "border border-primary/30 bg-primary/10 text-primary"
                      : "border border-red-500/30 bg-red-500/10 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={260}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="text-base font-semibold text-foreground">
                  {t.contactInfoTitle}
                </h3>
                <div className="mt-5 space-y-1">
                  {t.contactInfo.map((item) => {
                    const content = (
                      <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {item.value}
                          </div>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-background"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-lg p-3"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="font-medium text-foreground">
                    {t.available}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.availableBlurb}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
