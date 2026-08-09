import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    links: [
      { to: "/#about", label: "About" },
      { to: "/#projects", label: "Projects" },
      { to: "/#experience", label: "Experience" },
      { to: "/process", label: "Process" },
      { to: "/faq", label: "FAQ" },
    ],
    contact: "Contact me",
  },
  id: {
    links: [
      { to: "/#about", label: "Tentang" },
      { to: "/#projects", label: "Proyek" },
      { to: "/#experience", label: "Pengalaman" },
      { to: "/process", label: "Proses Kerja" },
      { to: "/faq", label: "FAQ" },
    ],
    contact: "Hubungi saya",
  },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = copy[language];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const goToContact = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-border bg-background/90 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          fathorrosi<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {t.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button size="sm" onClick={goToContact}>
            {t.contact}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-6 py-6">
            {t.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="rounded-md px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                closeMenu();
                goToContact();
              }}
            >
              {t.contact}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
