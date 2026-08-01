import Link from "next/link";

import Reveal from "@/components/shared/Reveal";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[65vh] items-end gap-12 pb-20 pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                Selected work / {projects.length.toString().padStart(2, "0")}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.08}>
              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Selected
                <br />
                <em className="font-normal">work.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-dev-muted">
                  A selection of systems, applications and digital
                  experiences I&apos;ve designed and developed — focusing on
                  solving real problems through thoughtful engineering and
                  interface design.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT INDEX
      ===================================================== */}

      <section className="border-t border-dev-border">
        <div className="site-container">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.04}
            >
              <Link
                href={`/developer/projects/${project.slug}`}
                className="group block border-b border-dev-border py-12 md:py-16 lg:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  {/* NUMBER */}

                  <div className="lg:col-span-1">
                    <span className="text-[9px] text-dev-subtle">
                      {project.number}
                    </span>
                  </div>

                  {/* TITLE */}

                  <div className="lg:col-span-5">
                    <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                      {project.category}
                    </p>

                    <h2 className="font-serif text-[clamp(3rem,5vw,5.6rem)] leading-[0.9] tracking-[-0.045em] transition-transform duration-700 ease-out group-hover:translate-x-3">
                      {project.title}
                    </h2>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="lg:col-span-4">
                    <p className="max-w-md text-sm leading-7 text-dev-muted">
                      {project.summary}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-[9px] uppercase tracking-[0.15em] text-dev-subtle"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* YEAR / ACTION */}

                  <div className="flex items-start justify-between lg:col-span-2 lg:justify-end lg:gap-8">
                    <span className="text-[10px] text-dev-muted">
                      {project.year}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dev-border transition-all duration-500 group-hover:rotate-45 group-hover:border-dev-dark group-hover:bg-dev-dark group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>

                {/* VISUAL */}

                <div className="mt-12 overflow-hidden lg:ml-[8.333%] lg:mt-16">
                  <div className="relative aspect-[16/8] overflow-hidden bg-[#dedbd4]">
                    {/* decorative grid */}

                    <div className="absolute inset-0 opacity-50">
                      <div className="absolute left-1/3 top-0 h-full w-px bg-black/[0.08]" />

                      <div className="absolute left-2/3 top-0 h-full w-px bg-black/[0.08]" />

                      <div className="absolute left-0 top-1/2 h-px w-full bg-black/[0.08]" />
                    </div>

                    {/* project number */}

                    <span className="absolute -bottom-8 -right-2 font-serif text-[160px] leading-none tracking-[-0.08em] text-black/[0.045] md:text-[240px] lg:text-[320px]">
                      {project.number}
                    </span>

                    {/* center */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-serif text-4xl tracking-[-0.04em] text-black/20 md:text-6xl">
                          {project.title}
                        </p>

                        <p className="mt-4 text-[8px] uppercase tracking-[0.3em] text-black/30">
                          Project preview
                        </p>
                      </div>
                    </div>

                    {/* hover overlay */}

                    <div className="absolute inset-0 flex items-center justify-center bg-dev-dark opacity-0 transition-all duration-700 group-hover:opacity-100">
                      <div className="translate-y-5 text-center text-white opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="font-serif text-4xl italic md:text-6xl">
                          View case study
                        </p>

                        <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-white/50">
                          Explore project ↗
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          MORE
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Archive
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="font-serif max-w-5xl text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  There&apos;s always
                  <br />
                  something else
                  <em className="font-normal"> being built.</em>
                </h2>

                <p className="mt-10 max-w-lg text-sm leading-7 text-dev-muted">
                  Additional experiments, prototypes and smaller projects
                  will be added as the portfolio develops.
                </p>

                <a
                  href="#"
                  className="group mt-10 inline-flex items-center gap-4 border-b border-dev-foreground pb-2 text-[10px] uppercase tracking-[0.18em]"
                >
                  Visit GitHub

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}