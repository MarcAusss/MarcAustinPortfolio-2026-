import type { Metadata, Route } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import Reveal from "@/components/shared/Reveal";

import {
  getPhotographyJournalPost,
  photographyJournalPosts,
  type PhotographyJournalOrientation,
} from "@/data/photographyJournal";

type PhotographyJournalStoryProps = {
  params: Promise<{
    slug: string;
  }>;
};

const orientationClasses: Record<PhotographyJournalOrientation, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/8]",
};

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return photographyJournalPosts.map((post) => ({
    slug: post.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PhotographyJournalStoryProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getPhotographyJournalPost(slug);

  if (!post) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: post.title,

    description: post.excerpt,
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default async function PhotographyJournalStory({
  params,
}: PhotographyJournalStoryProps) {
  const { slug } = await params;

  const post = getPhotographyJournalPost(slug);

  if (!post) {
    notFound();
  }

  const nextPost =
    getPhotographyJournalPost(post.next ?? "") ?? photographyJournalPosts[0];

  const nextRoute = `/journal/${nextPost.slug}` as Route;

  return (
    <main className="bg-photo-background text-photo-foreground">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="site-container">
        <div className="pb-20 pt-20 md:pb-28 md:pt-28">
          <Reveal>
            <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5">
              <Link
                href="/journal"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/35"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Journal
              </Link>

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                {post.number} /{" "}
                {String(photographyJournalPosts.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          {/* Hero information */}

          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <Reveal delay={0.05}>
                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                    {post.category}
                  </span>

                  {post.location && (
                    <>
                      <span className="text-white/15">/</span>

                      <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                        {post.location}
                      </span>
                    </>
                  )}
                </div>

                <h1 className="font-serif max-w-300 text-[clamp(4.5rem,10vw,10rem)] leading-[0.78] tracking-[-0.06em]">
                  {post.title}
                </h1>
              </Reveal>
            </div>

            <div className="flex items-end lg:col-span-3 lg:justify-end">
              <Reveal delay={0.12}>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Captured
                  </p>

                  <p className="mt-2 font-serif text-2xl">{post.date}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <section className="px-5 md:px-10 lg:px-15">
        <Reveal>
          <StoryImage
            image={post.image}
            alt={post.title}
            orientation="wide"
            label="Opening frame"
            number={post.number}
            priority
          />
        </Reveal>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Introduction
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <p className="font-serif text-4xl leading-[1.08] tracking-[-0.035em] md:text-5xl lg:text-6xl">
                  {post.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      {post.sections.map((section, index) => {
        const orientation = section.orientation ?? "landscape";

        const isEven = index % 2 === 0;

        return (
          <section
            key={section.number}
            id={`section-${section.number}`}
            className="scroll-mt-32 border-t border-white/10 py-20 sm:py-24 md:py-32 lg:py-40"
          >
            <div className="site-container">
              {/* =============================================
                    SECTION TEXT
                ============================================= */}

              <div className="grid gap-14 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] text-white/25">
                        {section.number}
                      </span>

                      <span className="h-px w-8 bg-white/15" />
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.06}>
                    <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl">
                      {section.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.11}>
                    <div className="mt-10 max-w-2xl space-y-7">
                      {section.text.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-[15px] leading-8 text-white/42 md:text-base md:leading-9"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* =============================================
                    SECTION IMAGE
                ============================================= */}

              <div
                className={`mt-16 md:mt-24 ${
                  orientation === "portrait"
                    ? isEven
                      ? "lg:ml-[33.333%] lg:w-[41.666%]"
                      : "lg:ml-[8.333%] lg:w-[41.666%]"
                    : orientation === "wide"
                      ? ""
                      : isEven
                        ? "lg:ml-[8.333%] lg:w-[75%]"
                        : "lg:ml-[16.666%] lg:w-[75%]"
                }`}
              >
                <Reveal>
                  <StoryImage
                    image={section.image}
                    alt={section.imageAlt ?? `${post.title} — ${section.title}`}
                    orientation={orientation}
                    label={section.title}
                    number={section.number}
                  />
                </Reveal>
              </div>

              {/* =============================================
                    QUOTE AFTER SECOND SECTION
                ============================================= */}

              {index === 1 && post.quote && (
                <Reveal>
                  <blockquote className="mx-auto mt-24 max-w-5xl border-y border-white/10 py-16 text-center md:mt-32 md:py-24">
                    <span className="mb-8 block font-serif text-5xl text-white/15">
                      “
                    </span>

                    <p className="font-serif text-4xl italic leading-[1.08] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                      {post.quote}
                    </p>
                  </blockquote>
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

      {/* =====================================================
          PHOTO SEQUENCE
      ===================================================== */}

      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="px-5 md:px-10 lg:px-15">
          <Reveal>
            <div className="mb-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Frames / 01—03
                </p>
              </div>

              <div className="lg:col-span-6">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                  A few frames
                  <br />
                  from the story.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <StoryImage orientation="portrait" label="Frame 01" number="01" />
            </Reveal>

            <Reveal delay={0.08} className="md:col-span-7 md:pt-[12vw]">
              <StoryImage
                orientation="landscape"
                label="Frame 02"
                number="02"
              />
            </Reveal>

            <Reveal
              delay={0.1}
              className="md:col-span-8 md:col-start-3 md:mt-16"
            >
              <StoryImage orientation="wide" label="Frame 03" number="03" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL NOTE
      ===================================================== */}

      <section className="bg-[#111111] py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Final note
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.07}>
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-[90px]">
                  The photograph
                  <br />
                  remembers what
                  <br />
                  <em className="font-normal text-white/35">
                    attention noticed.
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-14 grid gap-8 border-t border-white/10 pt-9 md:grid-cols-2">
                  <p className="max-w-md text-sm leading-7 text-white/40">
                    Every story here is less about documenting every possible
                    moment and more about preserving the few that made me stop.
                  </p>

                  <div className="md:flex md:justify-end">
                    <Link
                      href="/portfolio"
                      className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/15 text-center text-[8px] uppercase leading-5 tracking-[0.16em] transition-all duration-500 hover:bg-white hover:text-black"
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
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT STORY
      ===================================================== */}

      <section className="border-b border-white/10">
        <Link href={nextRoute} className="group block py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Next story
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    {nextPost.category}
                  </span>

                  {nextPost.location && (
                    <>
                      <span className="text-white/15">/</span>

                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                        {nextPost.location}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.045em] transition-transform duration-700 group-hover:translate-x-3 md:text-7xl lg:text-8xl">
                  {nextPost.title}
                </h2>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 text-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
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
| Story Image
|--------------------------------------------------------------------------
*/

function StoryImage({
  image,
  alt,
  orientation,
  label,
  number,
}: {
  image?: string;

  alt?: string;

  orientation: PhotographyJournalOrientation;

  label: string;

  number: string;

  priority?: boolean;
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden bg-white/5.5 ${orientationClasses[orientation]}`}
      >
        {image ? (
          /*
           * Replace this with Next.js Image
           * once your actual photography files
           * are added.
           */

          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={alt ?? label}
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            {/* Grid */}

            <span className="absolute left-1/2 top-0 h-full w-px bg-white/5" />

            <span className="absolute left-0 top-1/2 h-px w-full bg-white/5" />

            {/* Number */}

            <span className="absolute -bottom-6 -right-2 font-serif text-[180px] leading-none tracking-[-0.08em] text-white/2.5 md:text-[260px]">
              {number}
            </span>

            {/* Placeholder */}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-4xl italic text-white/9 md:text-6xl">
                  {label}
                </p>

                <p className="mt-3 text-[7px] uppercase tracking-[0.28em] text-white/20">
                  Add photograph
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <figcaption className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
          {label}
        </span>

        <span className="text-[8px] text-white/20">{number}</span>
      </figcaption>
    </figure>
  );
}
