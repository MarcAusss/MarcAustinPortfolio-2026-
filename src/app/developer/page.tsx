import Link from "next/link";
import Image from "next/image";

import Reveal from "@/components/shared/Reveal";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "PHP",
  "Tailwind CSS",
  "MySQL",
  "Git",
];

const projects = [
  {
    number: "01",
    title: "CLPMIS",
    category: "Information System",
    description:
      "A centralized child labor profiling, monitoring and administrative information system.",
    href: "/developer/projects/clpmis",
  },
  {
    number: "02",
    title: "TUPAD PPE Inventory",
    category: "Inventory Management",
    description:
      "A complete PPE inventory, provincial allocation and distribution management platform.",
    href: "/developer/projects/tupad-ppe-inventory",
  },
  {
    number: "03",
    title: "Lease For Me",
    category: "Property Platform",
    description:
      "A modern property leasing experience focused on simplified discovery and leasing services.",
    href: "/developer/projects/lease-for-me",
  },
] as const;

export default function DeveloperPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[calc(100dvh-82px)] items-center gap-14 py-12 sm:py-16 lg:min-h-[calc(100dvh-92px)] lg:grid-cols-12 lg:py-20">
          {/* Left content */}

          <div className="relative z-10 lg:col-span-7">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-8 bg-dev-foreground" />

                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-dev-muted">
                  Full Stack Developer
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-serif text-[clamp(3.8rem,15vw,8.8rem)] leading-[0.84] tracking-[-0.055em]">
                I build digital
                <br />
                <span className="lg:ml-[5vw]">experiences</span>
                <br />
                <em className="font-normal">with clean code.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:max-w-[760px]">
                <p className="max-w-md text-sm leading-7 text-dev-muted">
                  I create thoughtful digital products where engineering,
                  usability and visual design work together.
                </p>

                <div className="md:text-right">
                  <p className="text-[9px] uppercase leading-5 tracking-[0.2em] text-dev-subtle">
                    Based in
                    <br />
                    Philippines
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Link
                  href="/developer/projects"
                  className="group flex items-center gap-8 bg-dev-dark px-6 py-4 text-xs text-white transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="text-white">View selected work</span>

                  <span className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>

                <a
                  href="/resume/marc-austin-cv.pdf"
                  className="group flex items-center gap-3 border-b border-black/30 pb-1 text-xs"
                >
                  Download CV
                  <span className="transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right visual */}

          <Reveal delay={0.18} className="relative lg:col-span-5">
            <div className="relative ml-auto w-full max-w-[500px]">
              {/* Developer hero image */}

              <div className="group relative aspect-[4/5] overflow-hidden bg-transparent">
                <Image
                  src="/images/developer/hero.png"
                  alt="Developer working on a laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
                />

                {/* Subtle editorial grading */}

                <div className="pointer-events-none absolute inset-0 bg-transparent" />

                {/* Fine border */}

                <div className="pointer-events-none absolute inset-0" />

                {/* Top metadata */}

                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />

                  <span className="text-[8px] uppercase tracking-[0.22em] text-black/70 drop-shadow">
                    Developer / 2026
                  </span>
                </div>

                {/* Bottom subtle gradient */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* Floating status card */}

              <div className="absolute -bottom-5 left-4 bg-dev-dark px-5 py-4 text-white shadow-xl sm:left-6 md:-left-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30" />

                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <p className="text-[8px] uppercase tracking-[0.22em] text-white/50">
                    Currently
                  </p>
                </div>

                <p className="mt-2 text-xs">Designing & developing System for <br/> DOLE Integrated Livelihood Program</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STRIP
      ===================================================== */}

      <section className="border-y border-dev-border">
        <div className="site-container">
          <div className="flex min-h-28 flex-wrap items-center justify-between gap-8 py-7">
            <p className="text-[9px] uppercase tracking-[0.24em] text-dev-subtle">
              Selected stack
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end">
              {technologies.map((technology) => (
                <span key={technology} className="text-xs text-dev-muted">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-24">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  01 / Selected work
                </p>

                <h2 className="font-serif text-6xl leading-none tracking-[-0.045em] md:text-8xl lg:text-9xl">
                  Projects
                </h2>
              </div>

              <Link
                href="/developer/projects"
                className="group flex w-fit items-center gap-4 border-b border-dev-foreground pb-2 text-[10px] uppercase tracking-[0.18em]"
              >
                View all projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="border-t border-dev-border">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <Link
                  href={project.href}
                  className="group grid gap-7 border-b border-dev-border py-10 md:grid-cols-12 md:items-center lg:py-14"
                >
                  <div className="md:col-span-1">
                    <span className="text-[9px] text-dev-subtle">
                      {project.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                      {project.category}
                    </p>

                    <h3 className="font-serif text-4xl tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="md:col-span-5">
                    <p className="max-w-md text-sm leading-7 text-dev-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-end md:col-span-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dev-border transition-all duration-500 group-hover:bg-dev-dark group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}

      <section className="bg-dev-dark py-24 text-white md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  02 / About
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <h2 className="font-serif max-w-5xl text-5xl leading-[0.96] tracking-[-0.04em] md:text-7xl lg:text-[90px]">
                  Development should be
                  <span className="text-white/35"> functional.</span>
                  <br />
                  Design should make it
                  <span className="italic"> memorable.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-2 lg:mt-24">
                  <p className="max-w-md text-sm leading-7 text-white/60">
                    My approach combines technical problem solving with
                    intentional interface design.
                  </p>

                  <div className="md:flex md:justify-end">
                    <Link
                      href="/developer/about"
                      className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/20 text-center text-[9px] uppercase leading-5 tracking-[0.16em] transition-all duration-500 hover:bg-white hover:text-black md:h-32 md:w-32"
                    >
                      <span>
                        More about
                        <br />
                        me ↗
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 py-5 md:px-10 md:py-10 lg:px-[60px] lg:py-[60px]">
        <Reveal>
          <div className="relative overflow-hidden bg-[#dedbd4] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
            <span className="absolute -right-12 -top-20 font-serif text-[240px] leading-none text-black/[0.035] md:text-[400px]">
              &
            </span>

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <p className="mb-7 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Have something in mind?
                </p>

                <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[110px]">
                  Let&apos;s create
                  <br />
                  something
                  <em className="font-normal"> useful.</em>
                </h2>
              </div>

              <div className="lg:col-span-3 lg:flex lg:justify-end">
                <Link
                  href="/developer/contact"
                  className="group flex h-32 w-32 items-center justify-center rounded-full bg-dev-dark text-center text-[9px] uppercase leading-5 tracking-[0.17em] text-white! transition-transform duration-500 hover:-translate-y-2 md:h-36 md:w-36"
                >
                  <span>
                    Start a
                    <br />
                    conversation
                    <br />↗
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
