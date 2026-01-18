import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Movieverse",
    description:
      "A cross‑platform Flutter application to browse movies and TV shows (powered by The Movie Database), manage a personal watchlist, and authenticate users via Firebase.",
    image: ["movieverse/movieverse.png", "movieverse/movieverse1.png"],
    tags: ["Mobile", "Dart", "Flutter", "Firebase", "REST API", "BLoC"],
    link: "https://play.google.com/store/apps/details?id=com.fathorrosi.movieverse&pli=1",
    github: "https://github.com/fathorrosi-dev/movieverse",
  },
  {
    title: "Foodie Fly",
    description:
      "A cross-platform Flutter food-ordering demo app using Firebase (Authentication + Firestore), BLoC state management, and a clean layered architecture.",
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
    description: "A Flutter app inspired by the Twitter/X experience.",
    image: [
      "x_clone/x_clone.png",
      "x_clone/x_clone1.png",
      "x_clone/x_clone2.png",
    ],
    tags: ["Mobile", "Dart", "Flutter", "Firebase"],
    link: "",
    github: "https://github.com/fathorrosi-dev/x_clone",
  },
  {
    title: "Sneakers Shop",
    description:
      "A small Flutter demo shop app that showcases a product listing (sneakers), a cart powered by Provider, and a simple navigation flow using go_router. This project is a good starting point for learning small-scale app structure, theming, and state management in Flutter.",
    image: ["snekers_shop/snekers_shop.png"],
    tags: ["Mobile", "Dart", "Flutter"],
    link: "",
    github: "https://github.com/fathorrosi-dev/snekers_shop",
  },
  {
    title: "Titans Crypto",
    description:
      "A cross-platform Flutter app that displays popular cryptocurrencies and interactive charts. It uses CoinGecko's public API for data and demonstrates a small production-friendly architecture with dependency injection, repository pattern, and BLoC state management.",
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
    description:
      "Taskly is a lightweight Flutter todo app that demonstrates a clean architecture approach (data, domain, presentation) with local persistence using SQLite. It provides simple task management using BLoC/Cubit for state management and organized use-cases for business logic.",
    image: ["taskly/taskly.png"],
    tags: ["Mobile", "Dart", "Flutter", "SQLite"],
    link: "",
    github: "https://github.com/fathorrosi-dev/taskly",
  },
  {
    title: "Notes App",
    description:
      "A modern, feature-rich Flutter application for creating, managing, and organizing personal notes. This app provides a clean and intuitive interface with support for both light and dark themes, local data persistence, and a smooth user experience.",
    image: ["notes_app/notes_app.png"],
    tags: ["Mobile", "Dart", "Flutter", "SQLite"],
    link: "",
    github: "https://github.com/fathorrosi-dev/taskly",
  },
  {
    title: "Coffee Shop",
    description:
      "A beautiful and intuitive Flutter application for browsing, customizing, and purchasing premium coffee beverages.",
    image: ["coffe_shop/coffe_shop.png"],
    tags: ["Mobile", "Dart", "Flutter", "Provider"],
    link: "",
    github: "https://github.com/fathorrosi-dev/coffe_shop",
  },
  {
    title: "Slide Drawer",
    description:
      "Slide Drawer is a modern Flutter application that makes pet adoption easy and enjoyable. Users can browse through various types of pets (cats, dogs, parrots, and rabbits), view detailed information about each pet, and discover new companions available for adoption in their area.",
    image: ["slide_drawer/slide_drawer.png"],
    tags: ["Mobile", "Dart", "Flutter"],
    link: "",
    github: "https://github.com/fathorrosi-dev/slide_drawer",
  },
  {
    title: "Onboarding UI",
    description:
      "A professional, cross-platform onboarding UI application built with Flutter. HealthFirst provides a comprehensive healthcare app experience with a beautiful, responsive onboarding journey that introduces users to personalized health management features.",
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
    description:
      "A comprehensive RESTful API backend for a music streaming application built with Node.js and Hapi.js. Open Music provides robust user authentication, playlist management, song cataloging, album management with cover art support, user preferences tracking, and real-time export functionality.",
    image: ["open-music-back-end/illustration.png"],
    tags: ["Back-End", "Javascript", "Node.js"],
    link: "",
    github: "https://github.com/fathorrosi-dev/open-music-back-end",
  },
  {
    title: "Quill",
    description:
      "Quill is a modern, user-friendly bullet journal and note-taking web application designed to help users document, reflect, and embrace their personal journeys in the digital age. Quill transforms the traditional bullet journaling experience into an accessible, beautifully designed web application that enables mindful living for everyone.",
    image: ["quill/quill_sc.png"],
    tags: ["Web", "HTML", "CSS"],
    link: "https://fathorrosi-dev.github.io/quill/",
    github: "https://github.com/fathorrosi-dev/quill",
  },
  {
    title: "Fcode",
    description:
      "FCODE is a modern, responsive landing page for a developer-focused email delivery platform. It showcases a professional web application designed to help developers send transactional and marketing emails reliably, ensuring messages reach inboxes instead of spam folders.",
    image: ["fcode/fcode_sc.png"],
    tags: ["Web", "HTML", "CSS"],
    link: "https://fathorrosi-dev.github.io/fcode/",
    github: "https://github.com/fathorrosi-dev/fcode",
  },
  {
    title: "Sushiman",
    description:
      "Sushiman is a modern, responsive web application designed to showcase authentic Japanese cuisine and beverages. It serves as a digital storefront for a Japanese food delivery and dining experience, featuring a beautiful interface built with contemporary web technologies.",
    image: ["sushiman/sushiman_sc.png"],
    tags: ["Web", "HTML", "CSS"],
    link: "https://fathorrosi-dev.github.io/sushiman/",
    github: "https://github.com/fathorrosi-dev/sushiman",
  },
];

export const Projects = () => {
  // track current image index per project
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
          : val
      )
    );
  };

  const handleNext = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) =>
        idx === i
          ? (val + 1) %
            (Array.isArray(projects[i].image) ? projects[i].image.length : 1)
          : val
      )
    );
  };

  // helpers
  const hasTag = (project, tagName) =>
    project.tags &&
    project.tags.some((t) => t.toLowerCase() === tagName.toLowerCase());

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-display italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const imgs = Array.isArray(project.image)
              ? project.image
              : [project.image];
            const current = indexes[idx] ?? 0;
            const isMobile = hasTag(project, "Mobile");
            const hasLink = project.link && project.link.trim().length > 0;
            const primaryHref = hasLink ? project.link : project.github || "#";
            // For mobile + no link, we DO NOT show primary Arrow/Play button (only github)
            const showPrimary =
              !(isMobile && !hasLink) && (hasLink || project.github);
            return (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image area */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={imgs[current]}
                    alt={`${project.title} ${current + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                  />

                  {/* Prev / Next (only if multiple images) */}
                  {imgs.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrev(idx)}
                        aria-label={`Previous image ${project.title}`}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all z-20 pointer-events-auto"
                      >
                        {/* left chevron */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleNext(idx)}
                        aria-label={`Next image ${project.title}`}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all z-20 pointer-events-auto"
                      >
                        {/* right chevron */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                    {/* Primary (Play or Arrow) */}
                    {showPrimary && (
                      <>
                        {isMobile && hasLink ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            <img
                              src="google-play.svg"
                              alt="Google Play"
                              className="w-5 h-5"
                            />
                          </a>
                        ) : (
                          // For non-mobile or fallback arrow -> use primaryHref (which may be github)
                          <a
                            href={primaryHref}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </a>
                        )}
                      </>
                    )}

                    {/* Github (show if present) */}
                    {project.github && project.github.trim().length > 0 && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Icon next to title with logic:
                        - If mobile + link => Google Play icon linking to project.link
                        - Else show ArrowUpRight linking to project.link || project.github
                        - If mobile + no link => ArrowUpRight linking to github (per requirement)
                    */}
                    <div>
                      {isMobile && hasLink ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center"
                        >
                          <img
                            src="google-play.svg"
                            alt="Google Play"
                            className="w-5 h-5 
        text-muted-foreground group-hover:text-primary
        group-hover:translate-x-1 
        group-hover:-translate-y-1 transition-all"
                          />
                        </a>
                      ) : (
                        <a
                          href={
                            project.link && project.link.trim().length > 0
                              ? project.link
                              : project.github
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center"
                        >
                          <ArrowUpRight
                            className="w-5 h-5 
        text-muted-foreground group-hover:text-primary
        group-hover:translate-x-1 
        group-hover:-translate-y-1 transition-all"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
