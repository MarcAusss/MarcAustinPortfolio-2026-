import Link from "next/link";

import Reveal from "@/components/shared/Reveal";
import { journalPosts } from "@/data/journal";

export default function JournalPage() {
  const featuredPost =
    journalPosts.find((post) => post.featured) ?? journalPosts[0];

  const remainingPosts = journalPosts.filter(
    (post) => post.slug !== featuredPost.slug,
  );

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
                Journal / Notes
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.08}>
              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Thoughts on
                <br />
                code, systems
                <br />
                <em className="font-normal">& design.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-dev-muted">
                  Notes about development, system architecture, interface
                  design and the lessons that come from building real
                  applications.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      <section className="border-t border-dev-border">
        <div className="site-container py-20 md:py-28 lg:py-32">
          <Reveal>
            <p className="mb-10 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
              Featured article
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <Link
              href={`/developer/journal/${featuredPost.slug}`}
              className="group grid gap-12 lg:grid-cols-12"
            >
              {/* Visual */}

              <div className="lg:col-span-6">
                <div className="relative aspect-4/3 overflow-hidden bg-[#dcd9d2]">
                  <span className="absolute left-1/2 top-0 h-full w-px bg-black/6" />

                  <span className="absolute left-0 top-1/2 h-px w-full bg-black/6" />

                  <span className="absolute -bottom-7 -right-3 font-serif text-[180px] leading-none tracking-[-0.08em] text-black/4 md:text-[240px]">
                    {featuredPost.number}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-5xl italic text-black/15">
                        Journal
                      </p>

                      <p className="mt-3 text-[8px] uppercase tracking-[0.27em] text-black/30">
                        Featured essay
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-dev-dark opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex translate-y-6 items-center justify-center opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-serif text-4xl italic text-white md:text-5xl">
                      Read article →
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="flex flex-col justify-between lg:col-span-5 lg:col-start-8">
                <div>
                  <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                      {featuredPost.category}
                    </span>

                    <span className="text-dev-border">
                      /
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-dev-subtle">
                      {featuredPost.readTime} read
                    </span>
                  </div>

                  <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl lg:text-7xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-8 max-w-lg text-sm leading-7 text-dev-muted">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-12 flex items-end justify-between border-t border-dev-border pt-7">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                      Published
                    </p>

                    <p className="mt-2 text-xs">
                      {featuredPost.date}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dev-border transition-all duration-500 group-hover:bg-dev-dark group-hover:text-white">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          JOURNAL INDEX
      ===================================================== */}

      <section className="border-t border-dev-border">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-8 py-16 lg:grid-cols-12 lg:py-20">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  All notes
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">
                  Latest writing.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-dev-border">
            {remainingPosts.map((post, index) => (
              <Reveal
                key={post.slug}
                delay={index * 0.04}
              >
                <Link
                  href={`/developer/journal/${post.slug}`}
                  className="group grid gap-8 border-b border-dev-border py-10 md:grid-cols-12 md:items-start lg:py-14"
                >
                  {/* Number */}

                  <div className="md:col-span-1">
                    <span className="text-[9px] text-dev-subtle">
                      {post.number}
                    </span>
                  </div>

                  {/* Main */}

                  <div className="md:col-span-6">
                    <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                      {post.category}
                    </p>

                    <h3 className="font-serif max-w-2xl text-4xl leading-none tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                      {post.title}
                    </h3>
                  </div>

                  {/* Metadata */}

                  <div className="md:col-span-3">
                    <p className="max-w-sm text-xs leading-6 text-dev-muted">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Date */}

                  <div className="flex items-start justify-between md:col-span-2 md:justify-end md:gap-8">
                    <div>
                      <p className="text-[9px] text-dev-muted">
                        {post.year}
                      </p>

                      <p className="mt-2 text-[8px] uppercase tracking-[0.16em] text-dev-subtle">
                        {post.readTime}
                      </p>
                    </div>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPICS
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Topics
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-9">
              <Reveal>
                <h2 className="font-serif max-w-4xl text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl">
                  Things I&apos;m
                  <br />
                  interested in.
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-14 flex flex-wrap gap-3">
                  {[
                    "System Design",
                    "Laravel",
                    "Next.js",
                    "Frontend",
                    "UI / UX",
                    "Architecture",
                    "Workflow Design",
                    "Design Systems",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="border border-dev-border px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-dev-muted transition-colors duration-300 hover:bg-dev-dark hover:text-white"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNAL PHILOSOPHY
      ===================================================== */}

      <section className="bg-dev-dark py-24 text-white md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Why write?
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[92px]">
                  Building teaches.
                  <br />
                  Writing forces me
                  <br />
                  <span className="text-white/35">
                    to understand why.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-12 max-w-xl text-sm leading-7 text-white/55">
                  The journal is where I document patterns, mistakes,
                  decisions and ideas that come from actually developing
                  systems instead of only reading about them.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Continue the conversation
                </p>
              </div>

              <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  Have a different
                  <br />
                  perspective?
                </h2>

                <p className="mt-8 max-w-lg text-sm leading-7 text-dev-muted">
                  I&apos;m always interested in discussing development,
                  system design, interface decisions and how products can be
                  improved.
                </p>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <Link
                  href="/developer/contact"
                  className="group flex h-32 w-32 items-center justify-center rounded-full bg-dev-dark text-center text-[9px] uppercase leading-5 tracking-[0.17em] text-white! transition-transform duration-500 hover:-translate-y-2"
                >
                  <span>
                    Let&apos;s
                    <br />
                    talk
                    <br />
                    ↗
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