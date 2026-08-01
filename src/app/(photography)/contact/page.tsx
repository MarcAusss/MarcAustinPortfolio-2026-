import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";
import Reveal from "@/components/shared/Reveal";

const services = [
  "Portrait Sessions",
  "Events",
  "Creative Shoots",
  "Brand / Editorial",
];

const contactLinks = [
  {
    label: "Email",
    value: "marcaustinbonagua@gmail.com",
    href: "mailto:marcaustinbonagua@gmail.com",
  },
  {
    label: "Instagram",
    value: "@yourusername",
    href: "https://instagram.com/",
  },
  {
    label: "Facebook",
    value: "Marc Austin Photography",
    href: "https://facebook.com/",
  },
];

export default function PhotographyContactPage() {
  return (
    <main className="bg-photo-background text-photo-foreground">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="site-container">
        <div className="grid min-h-[72vh] items-end gap-14 pb-20 pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[9px] uppercase tracking-[0.26em] text-white/30">
                Contact / Photography
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal delay={0.07}>
              <p className="mb-7 text-[9px] uppercase tracking-[0.24em] text-white/35">
                Have something worth remembering?
              </p>

              <h1 className="font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.06em]">
                Let&apos;s make
                <br />
                something
                <br />
                <em className="font-normal text-white/40">memorable.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div />

                <p className="max-w-md text-sm leading-7 text-white/40">
                  For portraits, events, creative collaborations or photography
                  projects, send a few details about what you have in mind.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFO
      ===================================================== */}

      <section className="border-y border-white/10">
        <div className="site-container">
          <div className="grid lg:grid-cols-12">
            {/* Services */}

            <div className="border-b border-white/10 py-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
              <Reveal>
                <p className="mb-9 text-[9px] uppercase tracking-[0.24em] text-white/30">
                  Available for
                </p>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-center gap-5">
                      <span className="text-[8px] text-white/20">
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

            {/* Contact links */}

            <div className="py-12 lg:col-span-8 lg:py-16 lg:pl-12">
              <Reveal delay={0.08}>
                <p className="mb-9 text-[9px] uppercase tracking-[0.24em] text-white/30">
                  Reach me directly
                </p>
              </Reveal>

              <div className="border-t border-white/10">
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
                      className="group grid gap-4 border-b border-white/10 py-6 md:grid-cols-12 md:items-center"
                    >
                      <div className="md:col-span-2">
                        <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                          {link.label}
                        </span>
                      </div>

                      <div className="md:col-span-8">
                        <span className="font-serif text-2xl tracking-[-0.025em] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                          {link.value}
                        </span>
                      </div>

                      <div className="md:col-span-2 md:text-right">
                        <span className="inline-block text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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
          INQUIRY FORM
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Intro */}

            <div className="lg:col-span-4">
              <Reveal>
                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Booking inquiry
                </p>

                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-6xl">
                  Tell me
                  <br />
                  about the
                  <br />
                  <em className="font-normal text-white/40">moment.</em>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-white/35">
                  Include the type of shoot, preferred date, location and
                  anything else that helps describe what you&apos;re looking
                  for.
                </p>
              </Reveal>
            </div>

            {/* Form */}

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.08}>
                <form className="space-y-10">
                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base sm:text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-white focus:ring-0"
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@gmail.com"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base sm:text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-white focus:ring-0"
                    />
                  </div>

                  {/* Shoot type */}

                  <div>
                    <label
                      htmlFor="shootType"
                      className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
                    >
                      Type of shoot
                    </label>

                    <select
                      id="shootType"
                      name="shootType"
                      defaultValue=""
                      className="w-full border-0 border-b border-white/15 bg-photo-background px-0 py-4 text-base sm:text-lg text-white outline-none transition-colors focus:border-white focus:ring-0"
                    >
                      <option value="" disabled>
                        Select photography service
                      </option>

                      <option value="portrait">Portrait Session</option>

                      <option value="event">Event Photography</option>

                      <option value="creative">Creative Shoot</option>

                      <option value="brand">Brand / Editorial</option>

                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Date */}

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
                    >
                      Preferred date
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base sm:text-lg text-white outline-none transition-colors focus:border-white focus:ring-0 [color-scheme:dark]"
                    />
                  </div>

                  {/* Location */}

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
                    >
                      Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City / Venue / Location"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base sm:text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-white focus:ring-0"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-[8px] uppercase tracking-[0.2em] text-white/30"
                    >
                      Tell me about the shoot
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Describe what you have in mind..."
                      className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-4 text-base sm:text-lg leading-8 text-white outline-none transition-colors placeholder:text-white/20 focus:border-white focus:ring-0"
                    />
                  </div>

                  {/* Submit */}

                  <div className="flex justify-end pt-5">
                    <button
                      type="submit"
                      className="group flex h-36 w-36 items-center justify-center rounded-full bg-white text-center text-[8px] uppercase leading-5 tracking-[0.17em] text-black transition-transform duration-500 hover:-translate-y-2"
                    >
                      <span>
                        Send
                        <br />
                        inquiry
                        <br />
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AVAILABILITY
      ===================================================== */}

      <section className="border-y border-white/10">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-10 py-12 md:grid-cols-12 md:items-center md:py-16">
              <div className="md:col-span-3">
                <p className="text-[8px] uppercase tracking-[0.24em] text-white/30">
                  Availability
                </p>
              </div>

              <div className="md:col-span-6">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-20" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>

                  <p className="font-serif text-3xl tracking-[-0.025em] md:text-4xl">
                    Available for selected shoots.
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 md:text-right">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Philippines / GMT+8
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          VISUAL SECTION
      ===================================================== */}

      <section className="px-5 py-5 md:px-10 md:py-10 lg:px-[60px] lg:py-[60px]">
        <Reveal>
          <div className="relative aspect-[16/7] overflow-hidden bg-white/[0.055]">
            <span className="absolute left-1/4 top-0 h-full w-px bg-white/[0.05]" />
            <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />
            <span className="absolute left-3/4 top-0 h-full w-px bg-white/[0.05]" />

            <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-5xl italic text-white/[0.09] md:text-7xl">
                  Your story,
                  <br />
                  your frame.
                </p>

                <p className="mt-5 text-[8px] uppercase tracking-[0.27em] text-white/20">
                  Photography
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          DEVELOPER BRIDGE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#e5e2dc] text-[#141414]">
        {/* Grid */}

        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-1/4 top-0 h-full w-px bg-black/[0.05]" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-black/[0.05]" />
          <span className="absolute left-3/4 top-0 h-full w-px bg-black/[0.05]" />
        </div>

        <div className="site-container relative">
          <div className="grid min-h-[70vh] gap-16 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-8 text-[9px] uppercase tracking-[0.25em] text-black/35">
                  Looking for developer?
                </p>

                <h2 className="font-serif text-6xl leading-[0.87] tracking-[-0.055em] md:text-8xl lg:text-[110px]">
                  Different
                  <br />
                  medium. 
                  <br />
                  <em className="font-normal text-black/35">Same attention.</em>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <p className="max-w-sm text-sm leading-7 text-black/50">
                  I also design and develop web applications, information
                  systems and modern digital interfaces.
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
    </main>
  );
}
