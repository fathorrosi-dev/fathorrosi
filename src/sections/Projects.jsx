import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { OutlineButton } from "@/components/OutlineButton";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const baseProjects = [
  {
    title: "Baseline",
    image: ["baseline/baseline1.png", "baseline/baseline2.png"],
    tags: ["Mobile", "Dart", "Flutter", "Supabase", "Riverpod"],
    link: "",
    github: "https://github.com/fathorrosi-dev/baseline",
  },
  {
    title: "Movieverse",
    image: ["movieverse/movieverse.png", "movieverse/movieverse1.png"],
    tags: ["Mobile", "Dart", "Flutter", "Firebase", "REST API", "BLoC"],
    link: "https://play.google.com/store/apps/details?id=com.fathorrosi.movieverse&pli=1",
    github: "https://github.com/fathorrosi-dev/movieverse",
  },
  {
    title: "Foodie Fly",
    image: [
      "foodie_fly/foodie_fly.png",
      "foodie_fly/foodie_fly1.png",
      "foodie_fly/foodie_fly2.png",
    ],
    tags: ["Mobile", "Dart", "Flutter", "Firebase"],
    link: "",
    github: "https://github.com/fathorrosi-dev/foodie_fly",
  },
  {
    title: "X Clone",
    image: ["x_clone/x_clone.png", "x_clone/x_clone1.png", "x_clone/x_clone2.png"],
    tags: ["Mobile", "Dart", "Flutter", "Firebase"],
    link: "",
    github: "https://github.com/fathorrosi-dev/x_clone",
  },
  {
    title: "Sneakers Shop",
    image: ["snekers_shop/snekers_shop.png"],
    tags: ["Mobile", "Dart", "Flutter"],
    link: "",
    github: "https://github.com/fathorrosi-dev/snekers_shop",
  },
  {
    title: "Titans Crypto",
    image: [
      "titans_crypto/titans_crypto.png",
      "titans_crypto/titans_crypto2.png",
      "titans_crypto/titans_crypto3.png",
    ],
    tags: ["Mobile", "Dart", "Flutter", "REST API"],
    link: "",
    github: "https://github.com/fathorrosi-dev/titans_crypto",
  },
  {
    title: "Taskly",
    image: ["taskly/taskly.png"],
    tags: ["Mobile", "Dart", "Flutter", "SQLite"],
    link: "",
    github: "https://github.com/fathorrosi-dev/taskly",
  },
  {
    title: "Notes App",
    image: ["notes_app/notes_app.png"],
    tags: ["Mobile", "Dart", "Flutter", "SQLite"],
    link: "",
    github: "https://github.com/fathorrosi-dev/notes_app",
  },
  {
    title: "Coffee Shop",
    image: ["coffe_shop/coffe_shop.png"],
    tags: ["Mobile", "Dart", "Flutter", "Provider"],
    link: "",
    github: "https://github.com/fathorrosi-dev/coffe_shop",
  },
  {
    title: "Slide Drawer",
    image: ["slide_drawer/slide_drawer.png"],
    tags: ["Mobile", "Dart", "Flutter"],
    link: "",
    github: "https://github.com/fathorrosi-dev/slide_drawer",
  },
  {
    title: "Onboarding UI",
    image: [
      "onboarding_ui/onboarding_ui.png",
      "onboarding_ui/onboarding_ui1.png",
    ],
    tags: ["Mobile", "Dart", "Flutter"],
    link: "",
    github: "https://github.com/fathorrosi-dev/onboarding_ui",
  },
  {
    title: "Open Music Back-End",
    image: ["open-music-back-end/illustration.png"],
    tags: ["Back-End", "Javascript", "Node.js"],
    link: "",
    github: "https://github.com/fathorrosi-dev/open-music-back-end",
  },
  {
    title: "Quill",
    image: ["quill/quill_sc.png"],
    tags: ["Web", "HTML", "CSS"],
    link: "https://fathorrosi-dev.github.io/quill/",
    github: "https://github.com/fathorrosi-dev/quill",
  },
  {
    title: "Fcode",
    image: ["fcode/fcode_sc.png"],
    tags: ["Web", "HTML", "CSS"],
    link: "https://fathorrosi-dev.github.io/fcode/",
    github: "https://github.com/fathorrosi-dev/fcode",
  },
  {
    title: "Sushiman",
    image: ["sushiman/sushiman_sc.png"],
    tags: ["Web", "HTML", "CSS"],
    link: "https://fathorrosi-dev.github.io/sushiman/",
    github: "https://github.com/fathorrosi-dev/sushiman",
  },
];

const descriptions = {
  en: [
    "A retainer utilization tracker for agencies and freelancers, built with Flutter and Supabase (PostgreSQL, Auth, RLS, RPC). Features offline-first usage logging, real-time multi-client dashboards, and automatic overage alerts triggered directly in Postgres.",
    "A cross-platform Flutter application to browse movies and TV shows (powered by The Movie Database), manage a personal watchlist, and authenticate users via Firebase.",
    "A cross-platform Flutter food-ordering demo app using Firebase (Authentication + Firestore), BLoC state management, and a clean layered architecture.",
    "A Flutter app inspired by the Twitter/X experience.",
    "A small Flutter demo shop app that showcases a product listing (sneakers), a cart powered by Provider, and a simple navigation flow using go_router. This project is a good starting point for learning small-scale app structure, theming, and state management in Flutter.",
    "A cross-platform Flutter app that displays popular cryptocurrencies and interactive charts. It uses CoinGecko's public API for data and demonstrates a small production-friendly architecture with dependency injection, repository pattern, and BLoC state management.",
    "Taskly is a lightweight Flutter todo app that demonstrates a clean architecture approach (data, domain, presentation) with local persistence using SQLite. It provides simple task management using BLoC/Cubit for state management and organized use-cases for business logic.",
    "A modern, feature-rich Flutter application for creating, managing, and organizing personal notes. This app provides a clean and intuitive interface with support for both light and dark themes, local data persistence, and a smooth user experience.",
    "A beautiful and intuitive Flutter application for browsing, customizing, and purchasing premium coffee beverages.",
    "Slide Drawer is a modern Flutter application that makes pet adoption easy and enjoyable. Users can browse through various types of pets (cats, dogs, parrots, and rabbits), view detailed information about each pet, and discover new companions available for adoption in their area.",
    "A professional, cross-platform onboarding UI application built with Flutter. HealthFirst provides a comprehensive healthcare app experience with a beautiful, responsive onboarding journey that introduces users to personalized health management features.",
    "A comprehensive RESTful API backend for a music streaming application built with Node.js and Hapi.js. Open Music provides robust user authentication, playlist management, song cataloging, album management with cover art support, user preferences tracking, and real-time export functionality.",
    "Quill is a modern, user-friendly bullet journal and note-taking web application designed to help users document, reflect, and embrace their personal journeys in the digital age. Quill transforms the traditional bullet journaling experience into an accessible, beautifully designed web application that enables mindful living for everyone.",
    "FCODE is a modern, responsive landing page for a developer-focused email delivery platform. It showcases a professional web application designed to help developers send transactional and marketing emails reliably, ensuring messages reach inboxes instead of spam folders.",
    "Sushiman is a modern, responsive web application designed to showcase authentic Japanese cuisine and beverages. It serves as a digital storefront for a Japanese food delivery and dining experience, featuring a beautiful interface built with contemporary web technologies.",
  ],
  id: [
    "Retainer utilization tracker untuk agency dan freelancer, dibangun dengan Flutter dan Supabase (PostgreSQL, Auth, RLS, RPC). Punya fitur offline-first usage logging, dashboard multi-client real-time, dan overage alert otomatis yang dipicu langsung dari Postgres.",
    "Aplikasi Flutter cross-platform untuk menjelajahi film dan serial TV (didukung oleh The Movie Database), mengelola watchlist pribadi, dan autentikasi pengguna lewat Firebase.",
    "Demo aplikasi pemesanan makanan Flutter cross-platform menggunakan Firebase (Authentication + Firestore), state management BLoC, dan layered architecture yang rapi.",
    "Aplikasi Flutter yang terinspirasi dari pengalaman Twitter/X.",
    "Demo aplikasi toko Flutter berskala kecil yang menampilkan listing produk (sneakers), keranjang belanja dengan Provider, dan alur navigasi sederhana menggunakan go_router. Proyek ini jadi titik awal yang bagus untuk belajar struktur aplikasi skala kecil, theming, dan state management di Flutter.",
    "Aplikasi Flutter cross-platform yang menampilkan cryptocurrency populer dan chart interaktif. Menggunakan public API dari CoinGecko untuk data, dan menunjukkan arsitektur berskala kecil yang production-friendly dengan dependency injection, repository pattern, dan state management BLoC.",
    "Taskly adalah aplikasi todo Flutter ringan yang menunjukkan pendekatan Clean Architecture (data, domain, presentation) dengan local persistence menggunakan SQLite. Menyediakan task management sederhana dengan BLoC/Cubit untuk state management dan use-case yang terorganisir untuk business logic.",
    "Aplikasi Flutter modern dengan fitur lengkap untuk membuat, mengelola, dan mengatur catatan pribadi. Aplikasi ini punya interface yang bersih dan intuitif, mendukung tema light dan dark, local data persistence, dan pengalaman pengguna yang mulus.",
    "Aplikasi Flutter yang menarik dan intuitif untuk menjelajahi, menyesuaikan, dan membeli minuman kopi premium.",
    "Slide Drawer adalah aplikasi Flutter modern yang membuat adopsi hewan peliharaan jadi mudah dan menyenangkan. Pengguna bisa menjelajahi berbagai jenis hewan (kucing, anjing, burung beo, dan kelinci), melihat detail tiap hewan, dan menemukan teman baru yang siap diadopsi di area mereka.",
    "Aplikasi onboarding UI cross-platform yang profesional, dibangun dengan Flutter. HealthFirst menghadirkan pengalaman aplikasi healthcare yang lengkap dengan alur onboarding yang menarik dan responsif, memperkenalkan pengguna pada fitur pengelolaan kesehatan yang personal.",
    "Backend RESTful API yang lengkap untuk aplikasi music streaming, dibangun dengan Node.js dan Hapi.js. Open Music menyediakan autentikasi pengguna yang kuat, playlist management, katalog lagu, album management dengan dukungan cover art, pelacakan preferensi pengguna, dan fungsi export real-time.",
    "Quill adalah aplikasi web bullet journal dan pencatatan modern yang mudah digunakan, dirancang untuk membantu pengguna mendokumentasikan dan merefleksikan perjalanan pribadi mereka di era digital. Quill mengubah pengalaman bullet journaling tradisional menjadi aplikasi web yang mudah diakses dan dirancang dengan baik untuk mendukung mindful living bagi semua orang.",
    "FCODE adalah landing page modern dan responsif untuk platform pengiriman email yang ditujukan bagi developer. Menampilkan aplikasi web profesional yang dirancang untuk membantu developer mengirim email transaksional dan marketing secara andal, memastikan pesan sampai ke inbox, bukan folder spam.",
    "Sushiman adalah aplikasi web modern dan responsif yang dirancang untuk menampilkan kuliner dan minuman Jepang otentik. Berfungsi sebagai etalase digital untuk pengalaman pesan-antar dan dine-in makanan Jepang, dengan interface menarik yang dibangun menggunakan teknologi web modern.",
  ],
};

const copy = {
  en: {
    headline: "Projects that make an impact.",
    subtitle:
      "A selection of my recent work, from mobile apps published on Google Play to backend services and web builds.",
    viewAll: "View all projects",
  },
  id: {
    headline: "Proyek yang punya dampak nyata.",
    subtitle:
      "Sebagian dari pekerjaan terbaru saya, mulai dari aplikasi mobile yang dipublikasikan di Google Play sampai backend service dan web.",
    viewAll: "Lihat semua proyek",
  },
};

export const Projects = () => {
  const { language } = useLanguage();
  const t = copy[language];
  const projects = baseProjects.map((project, idx) => ({
    ...project,
    description: descriptions[language][idx],
  }));

  const [indexes, setIndexes] = useState(() => projects.map(() => 0));

  const handlePrev = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) =>
        idx === i
          ? (val -
              1 +
              (Array.isArray(projects[i].image)
                ? projects[i].image.length
                : 1)) %
            (Array.isArray(projects[i].image) ? projects[i].image.length : 1)
          : val,
      ),
    );
  };

  const handleNext = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) =>
        idx === i
          ? (val + 1) %
            (Array.isArray(projects[i].image) ? projects[i].image.length : 1)
          : val,
      ),
    );
  };

  const hasTag = (project, tagName) =>
    project.tags &&
    project.tags.some((t) => t.toLowerCase() === tagName.toLowerCase());

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionLabel>projects</SectionLabel>
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => {
            const imgs = Array.isArray(project.image)
              ? project.image
              : [project.image];
            const current = indexes[idx] ?? 0;
            const isMobile = hasTag(project, "Mobile");
            const hasLink = project.link && project.link.trim().length > 0;
            const primaryHref = hasLink ? project.link : project.github || "#";
            const showPrimary =
              !(isMobile && !hasLink) && (hasLink || project.github);

            return (
              <Reveal key={project.title} delay={(idx % 4) * 60}>
                <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/40">
                  {/* Image area */}
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <img
                      src={imgs[current]}
                      alt={`${project.title} screenshot ${current + 1} of ${
                        imgs.length
                      }`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {imgs.length > 1 && (
                      <>
                        <button
                          onClick={() => handlePrev(idx)}
                          aria-label={`Previous screenshot for ${project.title}`}
                          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group-hover:opacity-100"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleNext(idx)}
                          aria-label={`Next screenshot for ${project.title}`}
                          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group-hover:opacity-100"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}

                    <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {showPrimary && (
                        <>
                          {isMobile && hasLink ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} on Google Play`}
                              className="rounded-full border border-border bg-background/80 p-3 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              <img
                                src="google-play.svg"
                                alt=""
                                className="h-5 w-5"
                              />
                            </a>
                          ) : (
                            <a
                              href={primaryHref}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open ${project.title}`}
                              className="rounded-full border border-border bg-background/80 p-3 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </a>
                          )}
                        </>
                      )}

                      {project.github && project.github.trim().length > 0 && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} source on GitHub`}
                          className="rounded-full border border-border bg-background/80 p-3 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 p-6">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <OutlineButton href="https://github.com/fathorrosi-dev?tab=repositories">
            {t.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </OutlineButton>
        </Reveal>
      </div>
    </section>
  );
};
