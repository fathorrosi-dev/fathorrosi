import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured, readable, and maintainable Flutter applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building responsive UI and efficient data flows for smooth user experiences.",
  },
  {
    icon: User,
    title: "Collaboration",
    description: "Comfortable working with mentors, teams, and product requirements.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Actively improving skills through projects, courses, and experimentation.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation delay-100 text-secondary-foreground">
              Crafting mobile solutions,
              <span className="font-display italic font-normal text-white">
                {" "}
                one feature at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-justify">
              <p>
                I am a Mobile App Developer specializing in Flutter (Dart), with
                experience developing and publishing real-world applications for
                Android. My work emphasizes clean architecture, maintainable
                code, and predictable state management using BLoC. I enjoy
                translating product requirements into stable and user-friendly
                mobile experiences.
              </p>
              <p>
                In addition to mobile development, I have backend experience
                using Node.js (Hapi.js), working with REST APIs, authentication,
                relational databases, and caching systems to support modern
                applications.
              </p>
              <p>
                I am continuously improving my skills through hands-on projects
                and structured learning, with a long-term goal of growing into a
                strong full-stack engineer.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 text-justify">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build applications that are reliable, easy to
                maintain, and genuinely useful for users — not just demos."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
