import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import Reveal from "@/components/shared/Reveal";
import {
  getJournalPost,
  journalPosts,
} from "@/data/journal";

import { developerPageMetadata } from "../../metadata";

type JournalArticleProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalArticleProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getJournalPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return developerPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/developer/journal/${post.slug}`,
  });
}

export default async function JournalArticle({
  params,
}: JournalArticleProps) {
  const { slug } = await params;

  const post = getJournalPost(slug);

  if (!post) {
    notFound();
  }

  const nextPost =
    getJournalPost(post.next ?? "") ??
    journalPosts[0];

  return (
    <main>
      {/* HERO */}

      <section className="site-container">
        <div className="pb-20 pt-20 md:pb-28 md:pt-28 lg:pt-32">
          <Reveal>
            <div className="mb-16 flex items-center justify-between border-b border-dev-border pb-5">
              <Link
                href="/developer/journal"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-dev-muted"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                Journal
              </Link>

              <span className="text-[9px] uppercase tracking-[0.2em] text-dev-subtle">
                {post.number} /{" "}
                {journalPosts.length
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <Reveal delay={0.06}>
                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.23em] text-dev-muted">
                    {post.category}
                  </span>

                  <span className="text-dev-border">
                    /
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-dev-subtle">
                    {post.readTime} read
                  </span>
                </div>

                <h1 className="font-serif max-w-300 text-[clamp(4rem,9vw,9.5rem)] leading-[0.82] tracking-[-0.06em]">
                  {post.title}
                </h1>
              </Reveal>
            </div>

            <div className="flex items-end lg:col-span-3 lg:justify-end">
              <Reveal delay={0.12}>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-dev-subtle">
                    Published
                  </p>

                  <p className="mt-2 text-xs">
                    {post.date}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE INTRO */}

      <section className="border-y border-dev-border">
        <div className="site-container py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Introduction
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <p className="font-serif text-4xl leading-[1.12] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                  {post.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DECORATIVE VISUAL */}

      <section className="site-container py-10 md:py-16">
        <Reveal>
          <div className="relative aspect-16/7 overflow-hidden bg-[#dedbd4]">
            <span className="absolute left-1/4 top-0 h-full w-px bg-black/6" />
            <span className="absolute left-1/2 top-0 h-full w-px bg-black/6" />
            <span className="absolute left-3/4 top-0 h-full w-px bg-black/6" />

            <span className="absolute left-0 top-1/2 h-px w-full bg-black/6" />

            <span className="absolute -bottom-10 right-0 font-serif text-[260px] leading-none tracking-[-0.08em] text-black/[0.035] md:text-[420px]">
              {post.number}
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-serif text-5xl italic text-black/12 md:text-7xl">
                Notes
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ARTICLE CONTENT */}

      <section className="pb-24 pt-12 md:pb-32 lg:pb-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32">
                <Reveal>
                  <p className="mb-7 text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                    In this article
                  </p>

                  <div className="space-y-4">
                    {post.sections.map((section) => (
                      <a
                        key={section.number}
                        href={`#section-${section.number}`}
                        className="flex gap-4 text-xs leading-5 text-dev-muted transition-colors hover:text-dev-foreground"
                      >
                        <span className="text-[8px] text-dev-subtle">
                          {section.number}
                        </span>

                        <span>
                          {section.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </Reveal>
              </div>
            </aside>

            <article className="lg:col-span-7 lg:col-start-5">
              {post.sections.map((section, index) => (
                <Reveal
                  key={section.number}
                  delay={0.04}
                >
                  <section
                    id={`section-${section.number}`}
                    className={`scroll-mt-32 ${
                      index === 0
                        ? ""
                        : "border-t border-dev-border pt-16"
                    } pb-16 md:pb-20`}
                  >
                    <div className="mb-8 flex items-center gap-5">
                      <span className="text-[9px] text-dev-subtle">
                        {section.number}
                      </span>

                      <span className="h-px flex-1 bg-dev-border" />
                    </div>

                    <h2 className="font-serif text-4xl leading-none tracking-[-0.035em] md:text-5xl lg:text-6xl">
                      {section.title}
                    </h2>

                    <div className="mt-9 space-y-7">
                      {section.paragraphs.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-[15px] leading-8 text-dev-muted md:text-base md:leading-9"
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>

                    {index === 1 && post.quote && (
                      <blockquote className="my-16 border-y border-dev-border py-12 md:my-20 md:py-16">
                        <p className="font-serif text-4xl italic leading-[1.1] tracking-[-0.035em] md:text-5xl">
                          “{post.quote}”
                        </p>
                      </blockquote>
                    )}
                  </section>
                </Reveal>
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* AUTHOR NOTE */}

      <section className="bg-dev-dark py-20 text-white md:py-28">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/60">
                  Author
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.06}>
                <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-6xl">
                  Marc Austin
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
                  Developer and designer writing about
                  systems, interfaces and the decisions
                  behind building digital products.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-3 lg:flex lg:justify-end">
              <Reveal delay={0.1}>
                <Link
                  href="/developer/about"
                  className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/20 text-center text-[9px] uppercase leading-5 tracking-[0.15em] transition-all duration-500 hover:bg-white hover:text-black"
                >
                  <span>
                    About
                    <br />
                    the author
                    <br />
                    ↗
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT ARTICLE */}

      <section className="border-b border-dev-border">
        <Link
          href={`/developer/journal/${nextPost.slug}`}
          className="group block py-24 md:py-32 lg:py-36"
        >
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Next article
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                  {nextPost.category} · {nextPost.readTime}
                </p>

                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] transition-transform duration-700 group-hover:translate-x-3 md:text-7xl">
                  {nextPost.title}
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