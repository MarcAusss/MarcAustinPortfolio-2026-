import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Reveal from "@/components/shared/Reveal";
import {
  getProject,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Generate project routes
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| Dynamic metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,

    description: project.summary,
  };
}

/*
|--------------------------------------------------------------------------
| Project Page
|--------------------------------------------------------------------------
*/

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject =
    getProject(project.next ?? "") ??
    projects[0];

  const cover = project.images?.cover;
  const details = project.images?.details?.slice(0, 2) ?? [];
  const wide = project.images?.wide;

  return (
    <main>
      {/* =====================================================
          PROJECT HERO
      ===================================================== */}

      <section className="site-container">
        <div className="pb-20 pt-20 md:pt-28 lg:pb-28 lg:pt-32">
          {/* Breadcrumb */}

          <Reveal>
            <div className="mb-16 flex items-center justify-between border-b border-dev-border pb-5">
              <Link
                href="/developer/projects"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-dev-muted"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                All projects
              </Link>

              <span className="text-[9px] uppercase tracking-[0.2em] text-dev-subtle">
                {project.number} /{" "}
                {projects.length
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main title */}

            <div className="lg:col-span-9">
              <Reveal delay={0.05}>
                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  {project.category}
                </p>

                <h1 className="font-serif text-[clamp(4.5rem,10vw,10rem)] leading-[0.8] tracking-[-0.06em]">
                  {project.title}
                </h1>
              </Reveal>
            </div>

            {/* Year */}

            <div className="flex items-end lg:col-span-3 lg:justify-end">
              <Reveal delay={0.12}>
                <div>
                  <p className="mb-2 text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                    Year
                  </p>

                  <p className="font-serif text-3xl">
                    {project.year}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Summary */}

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.22em] text-dev-subtle">
                  Overview
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.08}>
                <p className="font-serif text-3xl leading-[1.15] tracking-[-0.025em] md:text-4xl lg:text-5xl">
                  {project.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO PROJECT VISUAL
      ===================================================== */}

      {cover && (
        <section className="site-container">
          <Reveal>
            <div className="relative aspect-video overflow-hidden bg-[#dcd9d2] md:aspect-16/8">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1320px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </section>
      )}

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Metadata */}

            <div className="lg:col-span-4">
              <Reveal>
                <div className="border-t border-dev-border">
                  <ProjectMeta
                    label="Role"
                    value={project.role}
                  />

                  <ProjectMeta
                    label="Year"
                    value={project.year}
                  />

                  <ProjectMeta
                    label="Status"
                    value={project.status}
                  />

                  <div className="border-b border-dev-border py-5">
                    <p className="mb-4 text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                      Technology
                    </p>

                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="text-xs text-dev-muted"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Description */}

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.08}>
                <p className="mb-6 text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Project overview
                </p>

                <p className="font-serif text-4xl leading-[1.15] tracking-[-0.03em] md:text-5xl">
                  {project.description}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGE
      ===================================================== */}

      <section className="border-t border-dev-border py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  01 / Challenge
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <h2 className="font-serif mb-10 text-5xl tracking-[-0.04em] md:text-7xl">
                  Understanding
                  <br />
                  the problem.
                </h2>

                <p className="max-w-3xl text-sm leading-8 text-dev-muted md:text-base">
                  {project.challenge}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL VISUAL
      ===================================================== */}

      {details.length > 0 && (
        <section className="px-5 md:px-10 lg:px-[60px]">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {details.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-4/5 overflow-hidden bg-[#dad7d0]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* =====================================================
          SOLUTION
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  02 / Solution
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <h2 className="font-serif mb-10 text-5xl tracking-[-0.04em] md:text-7xl">
                  Designing a
                  <br />
                  better workflow.
                </h2>

                <p className="max-w-3xl text-sm leading-8 text-dev-muted md:text-base">
                  {project.solution}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESPONSIBILITIES
      ===================================================== */}

      <section className="bg-dev-dark py-24 text-white md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-white/40">
                  03 / Contribution
                </p>

                <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">
                  My role.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/15">
                {project.responsibilities.map(
                  (responsibility, index) => (
                    <Reveal
                      key={responsibility}
                      delay={index * 0.035}
                    >
                      <div className="grid grid-cols-12 border-b border-white/15 py-6">
                        <span className="col-span-2 text-[9px] text-white/30">
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <p className="col-span-10 font-serif text-2xl md:text-3xl">
                          {responsibility}
                        </p>
                      </div>
                    </Reveal>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  04 / Highlights
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">
                  Key system
                  <br />
                  capabilities.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid border-t border-dev-border md:grid-cols-2">
            {project.highlights.map(
              (highlight, index) => (
                <Reveal
                  key={highlight}
                  delay={index * 0.04}
                >
                  <div
                    className={`flex min-h-40 items-end border-b border-dev-border py-8 md:min-h-52 ${
                      index % 2 === 0
                        ? "md:border-r md:pr-10"
                        : "md:pl-10"
                    }`}
                  >
                    <div>
                      <span className="mb-5 block text-[9px] text-dev-subtle">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <h3 className="font-serif text-3xl tracking-[-0.03em] md:text-4xl">
                        {highlight}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL-WIDTH SCREENSHOT
      ===================================================== */}

      {wide && (
        <section className="site-container pb-24 md:pb-32 lg:pb-40">
          <Reveal>
            <div className="relative aspect-video overflow-hidden bg-[#d8d5ce] md:aspect-16/7">
              <Image
                src={wide.src}
                alt={wide.alt}
                fill
                sizes="(max-width: 1440px) 100vw, 1320px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </section>
      )}

      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}

      <section className="border-t border-dev-border">
        <Link
          href={`/developer/projects/${nextProject.slug}`}
          className="group block py-24 md:py-32"
        >
          <div className="site-container">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Next project
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                  {nextProject.category}
                </p>

                <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] transition-transform duration-700 group-hover:translate-x-3 md:text-8xl lg:text-9xl">
                  {nextProject.title}
                </h2>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dev-border text-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-dev-dark group-hover:text-white">
                  ↗
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}

/*
|--------------------------------------------------------------------------
| Project Metadata Component
|--------------------------------------------------------------------------
*/

function ProjectMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-dev-border py-5">
      <p className="mb-2 text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
        {label}
      </p>

      <p className="text-xs leading-6">
        {value}
      </p>
    </div>
  );
}