import Link from "next/link";

import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";

export default function PhotographyFooter() {
  const year =
    new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-photo-background text-white">
      <div className="site-container">
        <div className="grid gap-14 py-12 md:grid-cols-2 lg:py-16">
          <div>
            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.22em]"
            >
              Marc Austin
            </Link>

            <p className="mt-5 max-w-sm font-serif text-3xl leading-[1.05] text-white/70">
              Photography focused
              on people, place and
              visual storytelling.
            </p>
          </div>

          <div className="flex flex-col justify-between md:items-end">
            <PortfolioSwitchLink
              href="/developer"
              className="group flex items-center gap-4"
            >
              <div className="text-right">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Other portfolio
                </p>

                <p className="mt-1 font-serif text-2xl">
                  Developer
                </p>
              </div>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:bg-white group-hover:text-black">
                ↗
              </span>
            </PortfolioSwitchLink>

            <p className="mt-12 text-[8px] uppercase tracking-[0.18em] text-white/25">
              © {year} Marc Austin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}