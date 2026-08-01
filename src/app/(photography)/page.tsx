import Link from "next/link";

import Reveal from "@/components/shared/Reveal";
import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";

export default function PhotographyHome() {
  return (
    <main className="bg-photo-background text-photo-foreground">
      {/* HERO */}

      <section className="site-container">
        <div className="grid min-h-[calc(100vh-92px)] items-center gap-14 py-16 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-7">
            <Reveal>
              <p className="mb-8 text-[9px] uppercase tracking-[0.28em] text-white/40">
                Photographer / Visual Storyteller
              </p>
            </Reveal>

            <Reveal delay={0.07}>
              <h1 className="font-serif text-[clamp(4.5rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.055em]">
                Capturing
                <br />
                timeless
                <br />
                <em className="font-normal text-white/45">moments.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between lg:max-w-[760px]">
                <p className="max-w-md text-sm leading-7 text-white/45">
                  Photography centered on emotion, composition and honest visual
                  storytelling.
                </p>

                <p className="text-[8px] uppercase leading-5 tracking-[0.22em] text-white/25">
                  Based in                                                                
                  <br />
                  Philippines
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Link
                  href="/portfolio"
                  className="group flex items-center gap-8 bg-white px-6 py-4 text-[10px] uppercase tracking-[0.16em] text-black"
                >
                  Explore work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <PortfolioSwitchLink
                  href="/developer"
                  className="group flex items-center gap-3 border-b border-white/20 pb-1 text-[10px] uppercase tracking-[0.16em]"
                >
                  Developer Portfolio
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </PortfolioSwitchLink>
              </div>
            </Reveal>
          </div>

          {/* Hero image placeholder */}

          <Reveal delay={0.14} className="lg:col-span-5">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[500px] overflow-hidden bg-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

              <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.07]" />

              <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.07]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-6xl italic text-white/10">
                    Image
                  </p>

                  <p className="mt-3 text-[8px] uppercase tracking-[0.27em] text-white/25">
                    Hero photograph
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 left-5">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Selected frame
                </p>

                <p className="mt-1 font-serif text-xl">Portrait / 2026</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}

      <section className="border-t border-white/10 py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-white/35">
                  01 / Selected work
                </p>

                <h2 className="font-serif text-6xl tracking-[-0.045em] md:text-8xl">
                  Stories
                  <br />
                  in frames.
                </h2>
              </div>

              <Link
                href="/portfolio"
                className="group w-fit border-b border-white/25 pb-2 text-[9px] uppercase tracking-[0.18em]"
              >
                View all work
                <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.06]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-serif text-5xl italic text-white/10">
                      Portraits
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-between">
                  <div>
                    <p className="font-serif text-2xl">Portraits</p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/30">
                      People / Emotion
                    </p>
                  </div>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.08} className="md:col-span-5">
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.08]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-serif text-5xl italic text-white/10">
                      Places
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-between">
                  <div>
                    <p className="font-serif text-2xl">Places</p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/30">
                      Travel / Landscape
                    </p>
                  </div>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}

      <section className="bg-[#111111] py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  02 / About
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.06}>
                <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[90px]">
                  Photography is
                  <br />
                  how I preserve
                  <br />
                  <em className="font-normal text-white/35">
                    what disappears.
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-14 grid gap-8 border-t border-white/10 pt-9 md:grid-cols-2">
                  <p className="text-sm leading-7 text-white/45">
                    I&apos;m drawn to natural moments, subtle emotion and
                    compositions that feel calm rather than manufactured.
                  </p>

                  <div className="md:flex md:justify-end">
                    <Link
                      href="/about"
                      className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/15 text-center text-[8px] uppercase leading-5 tracking-[0.16em] transition-all duration-500 hover:bg-white hover:text-black"
                    >
                      About me
                      <br />↗
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO BRIDGE */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Another discipline
                </p>
              </div>

              <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  The same eye
                  <br />
                  also shapes
                  <br />
                  <em className="font-normal text-white/35">
                    digital products.
                  </em>
                </h2>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <PortfolioSwitchLink
                  href="/developer"
                  className="group flex h-32 w-32 items-center justify-center rounded-full bg-white text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-black transition-transform duration-500 hover:-translate-y-2"
                >
                  Developer
                  <br />
                  portfolio
                  <br />↗
                </PortfolioSwitchLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
