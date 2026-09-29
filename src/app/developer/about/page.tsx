import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/shared/Reveal";
import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";
import { photographyPreview } from "@/data/photography";
import { DOLE_CONTEXT, projects } from "@/data/projects";
import { portrait } from "@/data/site";

import { developerPageMetadata } from "../metadata";

export const metadata: Metadata = developerPageMetadata({
  title: "About",
  description:
    "About Marc Austin, a Laravel & React developer in the Philippines building internal systems for DOLE Regional Office V. Available on US hours.",
  path: "/developer/about",
});

const principles = [
  {
    number: "01",
    title: "Understand first.",
    description:
      "Before writing code, I try to understand the workflow, the people using the system and the actual problem that needs to be solved.",
  },
  {
    number: "02",
    title: "Keep it intentional.",
    description:
      "Good interfaces do not need unnecessary decoration. Every component, interaction and visual decision should have a reason for being there.",
  },
  {
    number: "03",
    title: "Build for change.",
    description:
      "Projects evolve. I prefer clear architecture and reusable components so systems remain easier to extend and maintain.",
  },
];

const capabilities = [
  "Full Stack Development",
  "System Architecture",
  "UI / UX Design",
  "Frontend Development",
  "Database Design",
  "Responsive Design",
  "Laravel Development",
  "Next.js Development",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Laravel",
  "PHP",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "Figma",
];

// TODO(marc: start month) month you started at DOLE Regional Office V, e.g. "March"
const doleStartMonth: string | undefined = undefined;

// DOLE systems in the order they appear on the projects page. Names link to
// their project page once it's published.
const doleSystems = projects.filter(
  (project) => project.context === DOLE_CONTEXT,
);

// TODO(marc): was Mentor-Shift your capstone project? If so, set this to true.
const mentorShiftIsCapstone = false;

// TODO(marc): graduation year (your CV lists 2021–2025)
const graduationYear: string | undefined = undefined;

type TimelineItem = {
  period: string;
  title: string;
  organization?: string;
  description?: string;
  href?: string;
  systems?: typeof doleSystems;
};

const timeline: TimelineItem[] = [
  {
    period: `${doleStartMonth ? `${doleStartMonth} ` : ""}2026 – Present`,
    title: "Web Developer, Government Internship Program",
    organization: "DOLE Regional Office V",
    systems: doleSystems,
  },
  {
    period: "2025",
    title: mentorShiftIsCapstone ? "Mentor-Shift (Capstone project)" : "Mentor-Shift",
    description:
      "Designed and developed a personalized learning and mentorship platform.",
    href: "/developer/projects/mentor-shift",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[calc(100vh-92px)] gap-14 py-20 lg:grid-cols-12 lg:items-end lg:py-28">
          <div className="lg:col-span-8">
            <Reveal immediate>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-8 bg-dev-foreground" />

                <p className="text-[9px] uppercase tracking-[0.26em] text-dev-muted">
                  About / 01
                </p>
              </div>
            </Reveal>

            <Reveal immediate delay={0.08}>
              <h1 className="font-serif text-[clamp(4.6rem,10vw,10.5rem)] leading-[0.77] tracking-[-0.06em]">
                Developer,
                <br />
                <span className="ml-[8vw]">designer</span>
                <br />
                <em className="font-normal">& problem solver.</em>
              </h1>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pb-3">
            <Reveal immediate delay={0.15}>
              <p className="max-w-sm text-sm leading-7 text-dev-muted">
                I&apos;m interested in the point where technology, design and
                real-world workflows meet — turning complex requirements into
                digital products that feel clear, useful and intentional.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTRAIT + INTRODUCTION
      ===================================================== */}

      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Portrait */}

            {portrait && (
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d9d6cf]">
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />

                    <div className="absolute bottom-5 left-5 bg-dev-dark px-5 py-4 text-white">
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                        Based in
                      </p>

                      <p className="mt-1 text-xs">Philippines</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            )}

            {/* Introduction */}

            <div
              className={`flex items-end ${
                portrait ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-8"
              }`}
            >
              <div>
                <Reveal>
                  <p className="mb-8 text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                    A little about me
                  </p>

                  <h2 className="font-serif max-w-3xl text-5xl leading-[1] tracking-[-0.04em] md:text-7xl">
                    I don&apos;t just
                    <br />
                    write code.
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="mt-12 grid gap-8 border-t border-dev-border pt-9 md:grid-cols-2">
                    <p className="text-sm leading-7 text-dev-muted">
                      I think about how information moves through a system, how
                      users interact with it and how the interface can make
                      complicated workflows feel simpler.
                    </p>

                    <p className="text-sm leading-7 text-dev-muted">
                      My work combines development and design, allowing me to
                      consider both the technical architecture behind a product
                      and the experience people see in front of it.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="border-y border-dev-border py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:mb-24">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  02 / Approach
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  How I approach
                  <br />
                  <em className="font-normal">the work.</em>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid border-t border-dev-border lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 0.07}>
                <article
                  className={`flex min-h-[360px] flex-col justify-between border-b border-dev-border py-9 lg:border-b-0 lg:px-9 ${
                    index !== principles.length - 1 ? "lg:border-r" : ""
                  } ${index === 0 ? "lg:pl-0" : ""}`}
                >
                  <span className="text-[9px] text-dev-subtle">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-4xl tracking-[-0.035em]">
                      {principle.title}
                    </h3>

                    <p className="mt-6 max-w-sm text-sm leading-7 text-dev-muted">
                      {principle.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  03 / Experience
                </p>

                <h2 className="font-serif text-6xl tracking-[-0.045em] md:text-7xl">
                  Building,
                  <br />
                  learning,
                  <br />
                  improving.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-dev-border">
                {timeline.map((item, index) => (
                  <Reveal
                    key={`${item.period}-${item.title}`}
                    delay={index * 0.06}
                  >
                    <div className="grid gap-6 border-b border-dev-border py-10 md:grid-cols-12">
                      <div className="md:col-span-2">
                        <span className="text-[10px] text-dev-muted">
                          {item.period}
                        </span>
                      </div>

                      <div className="md:col-span-4">
                        <h3 className="font-serif text-3xl tracking-[-0.03em]">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="underline-offset-4 hover:underline"
                            >
                              {item.title}
                            </Link>
                          ) : (
                            item.title
                          )}
                        </h3>

                        {item.organization && (
                          <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-dev-muted">
                            {item.organization}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-6">
                        {item.description && (
                          <p className="max-w-md text-sm leading-7 text-dev-muted">
                            {item.description}
                          </p>
                        )}

                        {item.systems && (
                          <ul className="max-w-md space-y-3 text-sm leading-7 text-dev-muted">
                            {item.systems.map((system) => (
                              <li key={system.slug} className="flex gap-3">
                                <span aria-hidden="true">—</span>

                                {system.published ? (
                                  <Link
                                    href={`/developer/projects/${system.slug}`}
                                    className="border-b border-dev-border text-dev-foreground transition-colors hover:border-dev-foreground"
                                  >
                                    {system.title}
                                  </Link>
                                ) : (
                                  <span>{system.title}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section className="bg-[#dedbd4] py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  04 / Education
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-9">
              <Reveal delay={0.08}>
                <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                  Bachelor&apos;s Degree
                </p>

                <h2 className="font-serif max-w-5xl text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  Bachelor of Science
                  <br />
                  in Information
                  <em className="font-normal"> Technology.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-14 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-2">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                      Institution
                    </p>

                    <p className="mt-2 text-sm">
                      Divine Word College of Legazpi
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                      Field
                    </p>

                    <p className="mt-2 text-sm">Information Technology</p>
                  </div>

                  {graduationYear && (
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                        Graduated
                      </p>

                      <p className="mt-2 text-sm">{graduationYear}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  05 / Capabilities
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-serif text-5xl tracking-[-0.045em] md:text-7xl">
                  Things I can
                  <br />
                  help build.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-dev-border">
            {capabilities.map((capability, index) => (
              <Reveal key={capability} delay={index * 0.025}>
                <div className="group grid grid-cols-12 items-center border-b border-dev-border py-6">
                  <span className="col-span-2 text-[9px] text-dev-subtle md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="col-span-10 font-serif text-2xl tracking-[-0.02em] md:col-span-11 md:text-3xl">
                    {capability}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="border-t border-dev-border py-24 md:py-32">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  06 / Technology
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-9">
              <Reveal>
                <h2 className="font-serif mb-14 text-5xl tracking-[-0.04em] md:text-7xl">
                  Tools change.
                  <br />
                  Fundamentals remain.
                </h2>
              </Reveal>

              <div className="flex flex-wrap">
                {technologies.map((technology, index) => (
                  <Reveal key={technology} delay={index * 0.025}>
                    <div className="mr-3 mt-3 border border-dev-border px-5 py-3">
                      <span className="text-xs text-dev-muted">
                        {technology}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTOGRAPHY BRIDGE
      ===================================================== */}

      <section className="bg-dev-dark text-white">
        <div className="site-container">
          <div className="grid min-h-[75vh] items-center gap-16 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-8 text-[9px] uppercase tracking-[0.25em] text-white/60">
                  07 / Beyond development
                </p>

                <h2 className="font-serif text-6xl leading-[0.88] tracking-[-0.05em] md:text-8xl lg:text-[110px]">
                  Beyond code,
                  <br />
                  I tell stories
                  <br />
                  <em className="font-normal text-white/45">through images.</em>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.12}>
                <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.08]">
                  <Image
                    src={photographyPreview.src}
                    alt={photographyPreview.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>

                <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
                  Photography gives me another way to think about composition,
                  balance, detail and storytelling — the same ideas that
                  influence how I approach digital interfaces.
                </p>

                <PortfolioSwitchLink
                  href="/photography"
                  className="group mt-8 inline-flex items-center gap-4 border-b border-white/30 pb-2 text-[9px] uppercase tracking-[0.2em]"
                >
                  Photography portfolio
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </PortfolioSwitchLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
