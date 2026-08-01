import Link from "next/link";

import Reveal from "@/components/shared/Reveal";

import {
  photographyJournalPosts,
  type PhotographyJournalPost,
} from "@/data/photographyJournal";

const orientationClasses: Record<
  PhotographyJournalPost["orientation"],
  string
> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/9]",
};

export default function PhotographyJournalPage() {
  const featured =
    photographyJournalPosts.find((post) => post.featured) ??
    photographyJournalPosts[0];

  const remaining = photographyJournalPosts.filter(
    (post) => post.slug !== featured.slug,
  );

  return (
    <main className="bg-photo-background text-photo-foreground">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[70vh] items-end gap-14 pb-20 pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[9px] uppercase tracking-[0.26em] text-white/30">
                Journal / Stories
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.07}>
              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Notes from
                <br />
                behind the
                <br />
                <em className="font-normal text-white/40">camera.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-white/40">
                  Photo stories, field notes and observations about light,
                  people, places and the process behind making photographs.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED STORY
      ===================================================== */}

      <section className="border-t border-white/10">
        <div className="site-container py-20 md:py-28 lg:py-32">
          <Reveal>
            <div className="mb-10 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Featured story
              </p>

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                {featured.number}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid gap-12 lg:grid-cols-12 lg:items-end"
            >
              {/* Visual */}

              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.06]">
                  {featured.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                    />
                  ) : (
                    <>
                      <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

                      <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

                      <span className="absolute -bottom-8 -right-2 font-serif text-[260px] leading-none tracking-[-0.08em] text-white/[0.025]">
                        {featured.number}
                      </span>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="font-serif text-6xl italic text-white/[0.1]">
                            Photo Story
                          </p>

                          <p className="mt-3 text-[8px] uppercase tracking-[0.28em] text-white/20">
                            Featured journal image
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />

                  <div className="absolute bottom-6 right-6 flex h-14 w-14 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="lg:col-span-4 lg:col-start-9">
                <div className="flex flex-wrap gap-4">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                    {featured.category}
                  </span>

                  {featured.location && (
                    <>
                      <span className="text-white/15">/</span>

                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                        {featured.location}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                  {featured.title}
                </h2>

                <p className="mt-7 text-sm leading-7 text-white/40">
                  {featured.excerpt}
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    {featured.date}
                  </span>

                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          STORIES
      ===================================================== */}

      <section className="border-t border-white/10 py-20 md:py-28 lg:py-32">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Recent stories
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-serif text-5xl tracking-[-0.045em] md:text-7xl">
                  Recent
                  <br />
                  observations.
                </h2>
              </div>
            </div>
          </Reveal>

          {/* Visual editorial grid */}

          <div className="grid gap-x-5 gap-y-20 md:grid-cols-12">
            {remaining.map((post, index) => {
              const large = index % 3 === 0;

              const columnClass = large ? "md:col-span-7" : "md:col-span-5";

              return (
                <Reveal
                  key={post.slug}
                  delay={(index % 2) * 0.07}
                  className={columnClass}
                >
                  <Link href={`/journal/${post.slug}`} className="group block">
                    {/* Image */}

                    <div
                      className={`relative overflow-hidden bg-white/[0.055] ${
                        large
                          ? "aspect-[4/3]"
                          : orientationClasses[post.orientation]
                      }`}
                    >
                      {post.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                        />
                      ) : (
                        <>
                          <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

                          <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

                          <span className="absolute -bottom-6 -right-2 font-serif text-[180px] leading-none tracking-[-0.08em] text-white/[0.025]">
                            {post.number}
                          </span>

                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="font-serif text-4xl italic text-white/[0.09] md:text-5xl">
                              {post.category}
                            </p>
                          </div>
                        </>
                      )}

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />

                      <span className="absolute left-5 top-5 text-[8px] tracking-[0.2em] text-white/30">
                        {post.number}
                      </span>

                      <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    {/* Text */}

                    <div className="mt-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[8px] uppercase tracking-[0.19em] text-white/30">
                          {post.category}
                        </span>

                        {post.location && (
                          <>
                            <span className="h-0.5 w-0.5 rounded-full bg-white/20" />

                            <span className="text-[8px] uppercase tracking-[0.19em] text-white/20">
                              {post.location}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="mt-4 max-w-xl font-serif text-4xl leading-[0.98] tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                        {post.title}
                      </h3>

                      <p className="mt-5 max-w-lg text-sm leading-7 text-white/35">
                        {post.excerpt}
                      </p>

                      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                          {post.date}
                        </span>

                        <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTE / PHILOSOPHY
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#111111] py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Field note
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <blockquote className="font-serif text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[90px]">
                  “The camera
                  <br />
                  gives me a reason
                  <br />
                  to look
                  <em className="font-normal text-white/35"> twice.”</em>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHIVE
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Archive
                </p>
              </div>

              <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  More photographs
                  <br />
                  than stories
                  <em className="font-normal text-white/35"> written.</em>
                </h2>

                <p className="mt-8 max-w-lg text-sm leading-7 text-white/40">
                  The portfolio contains the images. The journal keeps some of
                  the thoughts, decisions and experiences around making them.
                </p>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <Link
                  href="/portfolio"
                  className="group flex h-32 w-32 items-center justify-center rounded-full bg-white text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-black transition-transform duration-500 hover:-translate-y-2"
                >
                  <span>
                    View
                    <br />
                    portfolio
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
