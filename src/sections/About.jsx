import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean code",
    description:
      "Writing structured, readable, and maintainable Flutter applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building responsive UI and efficient data flows for smooth experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Comfortable working with mentors, teams, and product requirements.",
  },
  {
    icon: Lightbulb,
    title: "Continuous learning",
    description:
      "Actively improving through projects, courses, and experimentation.",
  },
];

const stack = [
  "Dart",
  "Flutter",
  "Kotlin",
  "Android",
  "JavaScript",
  "Node.js",
  "Firebase",
  "Git",
  "GitHub",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <Reveal>
              <SectionLabel>about</SectionLabel>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Crafting mobile solutions, one feature at a time.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I'm a mobile app developer specializing in Flutter and Dart,
                  with hands-on experience shipping real applications to
                  Android. My work leans on clean architecture, maintainable
                  code, and predictable state management with BLoC — turning
                  product requirements into mobile experiences people can
                  rely on.
                </p>
                <p>
                  Alongside mobile work, I build backend services with
                  Node.js and Hapi.js: REST APIs, authentication, relational
                  databases, and caching layers that support the apps in
                  front of them.
                </p>
                <p>
                  I keep improving through hands-on projects and structured
                  learning, working toward becoming a stronger Flutter
                  engineer one release at a time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <blockquote className="mt-8 border-l-2 border-primary pl-5 text-lg font-medium italic text-foreground">
                "My goal is to build applications that are reliable, easy to
                maintain, and genuinely useful — not just demos."
              </blockquote>
            </Reveal>
          </div>

          {/* Right column */}
          <div>
            <Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {highlights.map((item) => (
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

            <Reveal delay={120}>
              <div className="mt-6 rounded-xl border border-border bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Tools &amp; technologies
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
