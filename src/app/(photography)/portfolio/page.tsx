import Link from "next/link";

import PhotographyGallery from "@/components/photography/PhotographyGallery";
import Reveal from "@/components/shared/Reveal";

export default function PortfolioPage() {
  return (
    <main className="bg-photo-background text-photo-foreground">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[68vh] items-end gap-14 pb-20 pt-20 lg:grid-cols-12 lg:pb-28 lg:pt-28">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[9px] uppercase tracking-[0.26em] text-white/35">
                Portfolio / 01
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.06}>
              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Selected
                <br />
                <em className="font-normal text-white/45">
                  photographs.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-white/40">
                  A collection of portraits,
                  places, passing moments and
                  visual experiments captured
                  through a quieter,
                  observational approach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <PhotographyGallery />

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="border-t border-white/10 py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Approach / 02
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.07}>
                <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[92px]">
                  The photograph
                  <br />
                  should feel like
                  <br />

                  <em className="font-normal text-white/35">
                    it already existed.
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.13}>
                <div className="mt-14 grid gap-8 border-t border-white/10 pt-9 md:grid-cols-2">
                  <p className="max-w-md text-sm leading-7 text-white/40">
                    I prefer images that feel
                    observed rather than overly
                    constructed. Small gestures,
                    natural light and the
                    relationship between a person
                    and their environment often
                    become more interesting than a
                    perfectly controlled frame.
                  </p>

                  <div className="md:flex md:justify-end">
                    <Link
                      href="/about"
                      className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/15 text-center text-[8px] uppercase leading-5 tracking-[0.16em] transition-all duration-500 hover:bg-white hover:text-black md:h-32 md:w-32"
                    >
                      <span>
                        About my
                        <br />
                        approach
                        <br />
                        ↗
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
          CONTACT CTA
      ===================================================== */}

      <section className="bg-[#111111] py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Work together
                </p>
              </div>

              <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  Have a story
                  <br />
                  worth
                  <em className="font-normal text-white/40">
                    {" "}
                    remembering?
                  </em>
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
                  For portraits, events,
                  creative collaborations or
                  photography inquiries.
                </p>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <Link
                  href="/contact"
                  className="group flex h-32 w-32 items-center justify-center rounded-full bg-white text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-black transition-transform duration-500 hover:-translate-y-2"
                >
                  <span>
                    Start a
                    <br />
                    conversation
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