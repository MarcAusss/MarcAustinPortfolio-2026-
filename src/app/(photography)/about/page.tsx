import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/shared/Reveal";
import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";

const disciplines = [
  {
    number: "01",
    title: "Portraits",
    description:
      "Images focused on personality, subtle expression and the relationship between a person and their surroundings.",
  },
  {
    number: "02",
    title: "Street",
    description:
      "Unplanned moments, movement and everyday scenes that reveal something interesting through timing and composition.",
  },
  {
    number: "03",
    title: "Landscape",
    description:
      "Places, atmosphere and natural light captured with an emphasis on scale, quietness and visual balance.",
  },
  {
    number: "04",
    title: "Events",
    description:
      "Documenting meaningful moments naturally while preserving the energy and details that make each event distinct.",
  },
];

const philosophy = [
  {
    number: "01",
    title: "Observe",
    text: "I prefer to understand the environment before deciding what the photograph should become.",
  },
  {
    number: "02",
    title: "Wait",
    text: "Some of the strongest frames happen between planned moments rather than during them.",
  },
  {
    number: "03",
    title: "Compose",
    text: "Light, negative space, depth and visual relationships should guide attention without overwhelming the subject.",
  },
  {
    number: "04",
    title: "Preserve",
    text: "The final image should retain the feeling of the moment instead of becoming overly processed or artificial.",
  },
];

const equipment = [
  "Canon DSLR Camera",
  "Prime Lenses",
  "Natural Light",
  "Adobe Lightroom",
];

export default function PhotographyAboutPage() {
  return (
    <main className="bg-photo-background text-photo-foreground">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[calc(100dvh-82px)] gap-14 py-20 lg:min-h-[calc(100dvh-92px)] lg:grid-cols-12 lg:items-end lg:py-28">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-8 bg-white" />

                <p className="text-[9px] uppercase tracking-[0.27em] text-white/35">
                  About / Photographer
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <h1 className="font-serif text-[clamp(4.5rem,15vw,10.5rem)] leading-[0.77] tracking-[-0.06em]">
                Behind
                <br />
                <span className="sm:ml-[5vw] lg:ml-[8vw]">the</span>
                <br />
                <em className="font-normal text-white/40">camera.</em>
              </h1>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <Reveal delay={0.14}>
              <p className="max-w-sm text-sm leading-7 text-white/40">
                Photography gives me a reason to pay closer attention — to
                light, expression, movement and the small details that usually
                disappear too quickly.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTRAIT
      ===================================================== */}

      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Main portrait */}

            <div className="lg:col-span-6">
              <Reveal>
                <div className="group relative aspect-[4/5] overflow-hidden bg-[#111111]">
                  <Image
                    src="/images/photography/IMG_20240505_011352_959.jpg"
                    alt="Photographer holding a camera"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[50%_35%] transition-transform duration-1400 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Slight cinematic treatment */}

                  <div className="pointer-events-none absolute inset-0 bg-black/6" />

                  {/* Bottom gradient */}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-linear-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Border */}

                  <div className="pointer-events-none absolute inset-0 border border-white/[0.07]" />

                  {/* Top metadata */}

                  <div className="absolute right-5 top-5">
                    <span className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                      01 / Portrait
                    </span>
                  </div>

                  {/* Bottom caption */}

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/45">
                        Photographer
                      </p>

                      <p className="mt-2 font-serif text-2xl text-white md:text-3xl">
                        Marc Austin
                      </p>
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                      B&W / 2026
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Story */}

            <div className="flex items-end lg:col-span-5 lg:col-start-8">
              <div>
                <Reveal>
                  <p className="mb-8 text-[9px] uppercase tracking-[0.25em] text-white/30">
                    01 / Story
                  </p>

                  <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl">
                    Photography
                    <br />
                    taught me
                    <br />
                    <em className="font-normal text-white/40">to notice.</em>
                  </h2>
                </Reveal>

                <Reveal delay={0.09}>
                  <div className="mt-12 space-y-7 border-t border-white/10 pt-9">
                    <p className="max-w-xl text-sm leading-7 text-white/45">
                      I&apos;m interested in photographs that feel quiet, honest
                      and naturally composed. Rather than forcing every frame
                      into a predetermined idea, I prefer to observe what is
                      already happening and work around it.
                    </p>

                    <p className="max-w-xl text-sm leading-7 text-white/45">
                      That usually means waiting for the right expression,
                      recognizing how light changes a scene or finding a
                      composition inside something that initially appears
                      ordinary.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="border-y border-white/10 py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  02 / Philosophy
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  Less directing.
                  <br />
                  More
                  <em className="font-normal text-white/40"> observing.</em>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {philosophy.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.04}>
                <div className="group grid gap-7 border-b border-white/10 py-9 md:grid-cols-12 md:items-start md:py-11">
                  <div className="md:col-span-1">
                    <span className="text-[8px] text-white/25">
                      {item.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-4xl tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="max-w-lg text-sm leading-7 text-white/40">
                      {item.text}
                    </p>
                  </div>

                  <div className="hidden md:col-span-1 md:flex md:justify-end">
                    <span className="text-white/20">↘</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL IMAGE BREAK
      ===================================================== */}

      <section className="px-5 py-5 md:px-10 md:py-10 lg:p-15">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Large landscape */}

          <Reveal className="md:col-span-8">
            <div className="group relative aspect-[16/10] overflow-hidden bg-white/5.5">
              <Image
                src="/images/photography/IMG_20263123_123123_232.jpg"
                alt="Photographer working behind the scenes"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.015]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/8" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                  Behind the scenes
                </p>
              </div>

              <div className="absolute right-6 top-6">
                <span className="text-[8px] uppercase tracking-[0.22em] text-white/35">
                  02 / Process
                </span>
              </div>
            </div>
          </Reveal>

          {/* Vertical detail */}

          <Reveal delay={0.08} className="md:col-span-4">
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#171717]">
              <Image
                src="/images/photography/portfolio/IMG_0646.JPG"
                alt="Photography portrait detail"
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className="object-cover object-center transition-transform duration-1200 ease-out group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/6" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/55 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/40">
                  Photographer / Detail
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          WHAT I SHOOT
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  03 / What I photograph
                </p>

                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                  Different
                  <br />
                  subjects.
                  <br />
                  Same eye.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {disciplines.map((item, index) => (
                  <Reveal key={item.number} delay={index * 0.05}>
                    <div className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-12">
                      <div className="md:col-span-1">
                        <span className="text-[8px] text-white/25">
                          {item.number}
                        </span>
                      </div>

                      <div className="md:col-span-4">
                        <h3 className="font-serif text-3xl tracking-[-0.03em] md:text-4xl">
                          {item.title}
                        </h3>
                      </div>

                      <div className="md:col-span-6">
                        <p className="max-w-lg text-sm leading-7 text-white/40">
                          {item.description}
                        </p>
                      </div>

                      <div className="hidden md:col-span-1 md:flex md:justify-end">
                        <span className="text-white/20">↗</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <Link
                  href="/portfolio"
                  className="group mt-10 inline-flex items-center gap-4 border-b border-white/25 pb-2 text-[9px] uppercase tracking-[0.19em]"
                >
                  Explore portfolio
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EQUIPMENT
      ===================================================== */}

      <section className="bg-[#111111] py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  04 / Tools
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-9">
              <Reveal>
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl">
                  The camera is
                  <br />
                  only part of
                  <em className="font-normal text-white/35"> the process.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-10 max-w-xl text-sm leading-7 text-white/40">
                  Equipment matters when it helps achieve an idea, but the
                  decisions behind the frame — timing, composition and light —
                  matter more than the specific camera used to capture it.
                </p>
              </Reveal>

              <div className="mt-14 border-t border-white/10">
                {equipment.map((item, index) => (
                  <Reveal key={item} delay={index * 0.03}>
                    <div className="grid grid-cols-12 border-b border-white/10 py-5">
                      <span className="col-span-2 text-[8px] text-white/20 md:col-span-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="col-span-10 font-serif text-2xl tracking-[-0.02em] md:col-span-11 md:text-3xl">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPER CONNECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#e5e2dc] text-[#141414]">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-1/4 top-0 h-full w-px bg-black/5" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-black/5" />
          <span className="absolute left-3/4 top-0 h-full w-px bg-black/5" />
        </div>

        <div className="site-container relative">
          <div className="grid min-h-[75vh] gap-16 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-8 text-[9px] uppercase tracking-[0.25em] text-black/35">
                  05 / Another discipline
                </p>

                <h2 className="font-serif text-6xl leading-[0.86] tracking-[-0.055em] md:text-8xl lg:text-[110px]">
                  The same
                  <br />
                  attention
                  <br />
                  <em className="font-normal text-black/35">goes into code.</em>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <p className="max-w-sm text-sm leading-7 text-black/50">
                  Composition, hierarchy, rhythm and attention to detail are not
                  limited to photography. They also influence how I design and
                  develop digital interfaces.
                </p>

                <div className="mt-10 border-t border-black/10 pt-7">
                  <p className="mb-2 text-[8px] uppercase tracking-[0.2em] text-black/30">
                    Switch portfolio
                  </p>

                  <PortfolioSwitchLink
                    href="/developer"
                    className="group flex items-center justify-between"
                  >
                    <span className="font-serif text-3xl">Developer</span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-500 group-hover:bg-black group-hover:text-white">
                      ↗
                    </span>
                  </PortfolioSwitchLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Work together
                </p>
              </div>

              <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                  Let&apos;s create
                  <br />
                  something
                  <em className="font-normal text-white/35"> memorable.</em>
                </h2>
              </div>

              <div className="lg:col-span-2 lg:flex lg:justify-end">
                <Link
                  href="/contact"
                  className="group flex h-28 w-28 items-center justify-center rounded-full bg-white text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-black! transition-transform duration-500 hover:-translate-y-2 sm:h-32 sm:w-32"
                >
                  <span>
                    Contact
                    <br />
                    me
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
