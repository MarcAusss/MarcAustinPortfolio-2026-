import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

const capabilityGroups = [
  {
    number: "01",
    title: "Engineering",
    description:
      "Building reliable application logic, reusable components and maintainable full-stack systems.",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Laravel", "PHP"],
  },
  {
    number: "02",
    title: "Interface",
    description:
      "Creating responsive interfaces with strong hierarchy, interaction design and reusable visual systems.",
    items: [
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
      "Accessibility",
      "Interaction Design",
      "Frontend Performance",
    ],
  },
  {
    number: "03",
    title: "Systems",
    description:
      "Designing the structure behind applications, from data relationships to permissions and workflow logic.",
    items: [
      "MySQL",
      "Database Design",
      "Authentication",
      "Authorization",
      "Role Management",
      "Workflow Design",
    ],
  },
  {
    number: "04",
    title: "Design",
    description:
      "Turning requirements into clear interface structures before they become production code.",
    items: [
      "Figma",
      "UI / UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Visual Hierarchy",
    ],
  },
  {
    number: "05",
    title: "Workflow",
    description:
      "Managing implementation, debugging and collaboration through a practical development workflow.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "API Integration",
      "Debugging",
      "Deployment",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    text: "Identify the actual problem, workflow, users and constraints before deciding how the system should work.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Translate requirements into information architecture, data relationships, reusable components and system rules.",
  },
  {
    number: "03",
    title: "Design",
    text: "Create an interface hierarchy that makes the workflow clear and reduces unnecessary friction.",
  },
  {
    number: "04",
    title: "Develop",
    text: "Build the application with maintainability, responsive behavior and real usage scenarios in mind.",
  },
  {
    number: "05",
    title: "Refine",
    text: "Test, debug and improve both the technical implementation and the experience around it.",
  },
];

export default function SkillsPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[72vh] items-end gap-12 pb-20 pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                Capabilities / 05
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.08}>
              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Tools,
                <br />
                systems &
                <br />
                <em className="font-normal">thinking.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-dev-muted">
                  My skill set spans both engineering and interface design.
                  I&apos;m most effective when I can understand the full product
                  instead of treating development and design as completely
                  separate disciplines.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY GROUPS
      ===================================================== */}

      <section className="border-t border-dev-border">
        <div className="site-container">
          {capabilityGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <article className="grid gap-10 border-b border-dev-border py-14 md:py-16 lg:grid-cols-12 lg:py-20">
                <div className="lg:col-span-1">
                  <span className="text-[9px] text-dev-subtle">
                    {group.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                    Capability
                  </p>

                  <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-6xl">
                    {group.title}
                  </h2>
                </div>

                <div className="lg:col-span-3">
                  <p className="max-w-sm text-sm leading-7 text-dev-muted">
                    {group.description}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <div className="border-t border-dev-border">
                    {group.items.map((item, itemIndex) => (
                      <div
                        key={item}
                        className="group flex items-center justify-between border-b border-dev-border py-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[8px] text-dev-subtle">
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                            {item}
                          </span>
                        </div>

                        <span className="text-xs text-dev-subtle">↗</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          PRINCIPLE
      ===================================================== */}

      <section className="bg-dev-dark py-24 text-white md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Philosophy
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[92px]">
                  Frameworks change.
                  <br />
                  Technologies evolve.
                  <br />
                  <span className="text-white/35">Problem solving stays.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-12 max-w-xl text-sm leading-7 text-white/55">
                  I don&apos;t treat a technology list as the portfolio itself.
                  The more important skill is knowing how to choose the right
                  structure, understand a problem and create something that
                  remains understandable after the first version ships.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:mb-24">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Process / 01—05
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  From problem
                  <br />
                  to product.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-dev-border">
            {workflow.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.04}>
                <div className="group grid gap-7 border-b border-dev-border py-9 md:grid-cols-12 md:items-start md:py-11">
                  <div className="md:col-span-1">
                    <span className="text-[9px] text-dev-subtle">
                      {step.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-4xl tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                      {step.title}
                    </h3>
                  </div>

                  <div className="md:col-span-5">
                    <p className="max-w-lg text-sm leading-7 text-dev-muted">
                      {step.text}
                    </p>
                  </div>

                  <div className="hidden md:col-span-2 md:flex md:justify-end">
                    <span className="text-dev-subtle">↘</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESIGN + DEVELOPMENT
      ===================================================== */}

      <section className="border-y border-dev-border">
        <div className="site-container">
          <div className="grid lg:grid-cols-2">
            <Reveal>
              <div className="flex min-h-130 flex-col justify-between border-b border-dev-border py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-14">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                    Development
                  </p>

                  <h2 className="mt-8 font-serif text-6xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                    Logic,
                    <br />
                    architecture
                    <br />& structure.
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-dev-muted">
                  Application behavior, APIs, databases, permissions, reusable
                  components and the technical structure that keeps a system
                  working.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex min-h-130 flex-col justify-between py-12 lg:py-16 lg:pl-14">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                    Design
                  </p>

                  <h2 className="mt-8 font-serif text-6xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                    Hierarchy,
                    <br />
                    interaction
                    <br />& clarity.
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-dev-muted">
                  Information hierarchy, responsive behavior, interface systems
                  and visual decisions that make the technical product easier to
                  understand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORK CTA
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Applied skills
                </p>
              </div>

              <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  Skills matter more
                  <br />
                  when they solve
                  <em className="font-normal"> something real.</em>
                </h2>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <Link
                  href="/developer/projects"
                  className="group flex h-32 w-32 items-center justify-center rounded-full bg-dev-dark text-center text-[9px] uppercase leading-5 tracking-[0.17em] text-white! transition-transform duration-500 hover:-translate-y-2"
                >
                  <span>
                    View
                    <br />
                    projects
                    <br />↗
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
