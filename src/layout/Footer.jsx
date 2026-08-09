import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: Github, href: "https://github.com/fathorrosi-dev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/fathorrosi-fathor-b95b213a5/",
    label: "LinkedIn",
  },
];

const copy = {
  en: {
    links: [
      { to: "/#about", label: "About" },
      { to: "/#projects", label: "Projects" },
      { to: "/process", label: "Process" },
      { to: "/faq", label: "FAQ" },
      { to: "/#contact", label: "Contact" },
    ],
    rights: "All rights reserved.",
  },
  id: {
    links: [
      { to: "/#about", label: "Tentang" },
      { to: "/#projects", label: "Proyek" },
      { to: "/process", label: "Proses Kerja" },
      { to: "/faq", label: "FAQ" },
      { to: "/#contact", label: "Kontak" },
    ],
    rights: "Hak cipta dilindungi.",
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-display text-lg font-semibold tracking-tight text-foreground"
            >
              fathorrosi<span className="text-primary">.dev</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              © {currentYear} Fathorrosi. {t.rights}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {t.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
