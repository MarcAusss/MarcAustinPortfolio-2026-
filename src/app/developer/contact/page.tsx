import Image from "next/image";

import Reveal from "@/components/shared/Reveal";
import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";
import DeveloperContactForm from "@/components/developer/DeveloperContactForm";
import { photographyPreview } from "@/data/photography";
import { contact } from "@/data/site";

const services = [
  "Web Development",
  "System Development",
  "UI / UX Design",
  "Frontend Development",
];

const contactLinks = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "GitHub",
    value: `github.com/${contact.github.handle}`,
    href: contact.github.url,
  },
  {
    label: "LinkedIn",
    value: `linkedin.com/in/${contact.linkedin.handle}`,
    href: contact.linkedin.url,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[72vh] items-end gap-14 pb-20 pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                Contact / 06
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.08}>
              <p className="mb-7 text-[10px] uppercase tracking-[0.24em] text-dev-muted">
                Have an idea?
              </p>

              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Let&apos;s make
                <br />
                something
                <br />
                <em className="font-normal">worth using.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-dev-muted">
                  Whether it&apos;s a web application, internal system,
                  interface redesign or a new digital product, I&apos;m
                  interested in thoughtful projects with a clear purpose.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="border-y border-dev-border">
        <div className="site-container">
          <div className="grid lg:grid-cols-12">
            {/* Available for */}

            <div className="border-b border-dev-border py-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
              <Reveal>
                <p className="mb-9 text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Available for
                </p>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-center gap-5">
                      <span className="text-[8px] text-dev-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-serif text-2xl tracking-[-0.02em]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Contact methods */}

            <div className="py-12 lg:col-span-8 lg:py-16 lg:pl-12">
              <Reveal delay={0.08}>
                <p className="mb-9 text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Reach me directly
                </p>
              </Reveal>

              <div className="border-t border-dev-border">
                {contactLinks.map((link, index) => (
                  <Reveal key={link.label} delay={index * 0.05}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="group grid gap-4 border-b border-dev-border py-6 md:grid-cols-12 md:items-center"
                    >
                      <div className="md:col-span-2">
                        <span className="text-[9px] uppercase tracking-[0.18em] text-dev-subtle">
                          {link.label}
                        </span>
                      </div>

                      <div className="md:col-span-8">
                        <span className="inline-block font-serif text-2xl tracking-tight wrap-anywhere transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                          {link.value}
                        </span>
                      </div>

                      <div className="md:col-span-2 md:text-right">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM
      ===================================================== */}

      <section className="py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
                  Project inquiry
                </p>

                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                  Tell me what
                  <br />
                  you&apos;re building.
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-dev-muted">
                  Share the goal, the problem you&apos;re trying to solve and
                  anything already defined about the project.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.08}>
                <DeveloperContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AVAILABILITY
      ===================================================== */}

      <section className="border-y border-dev-border">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-10 py-12 md:grid-cols-12 md:items-center md:py-16">
              <div className="md:col-span-3">
                <p className="text-[9px] uppercase tracking-[0.24em] text-dev-muted">
                  Current status
                </p>
              </div>

              <div className="md:col-span-6">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-20" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
                  </span>

                  <p className="font-serif text-3xl tracking-tight md:text-4xl">
                    Open to interesting projects.
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 md:text-right">
                <p className="text-[9px] uppercase tracking-[0.2em] text-dev-subtle">
                  Philippines / GMT+8
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PHOTOGRAPHY BRIDGE
      ===================================================== */}

      <section className="bg-dev-dark text-white">
        <div className="site-container">
          <div className="grid min-h-[70vh] gap-16 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-8 text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Another side of my work
                </p>

                <h2 className="font-serif text-6xl leading-[0.88] tracking-tighter md:text-8xl lg:text-[110px]">
                  Prefer
                  <br />
                  something
                  <br />
                  <em className="font-normal text-white/40">more visual?</em>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="relative aspect-4/5 overflow-hidden bg-white/[0.07]">
                  <Image
                    src={photographyPreview.src}
                    alt={photographyPreview.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>

                <PortfolioSwitchLink
                  href="/"
                  className="group mt-8 flex items-center justify-between border-t border-white/15 pt-6"
                >
                  <div>
                    <p className="mb-2 text-[8px] uppercase tracking-[0.2em] text-white/35">
                      Switch portfolio
                    </p>

                    <p className="font-serif text-3xl">Photography</p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-black">
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
