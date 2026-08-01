"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";

const navigation = [
  {
    label: "Home",
    href: "/developer",
  },
  {
    label: "Projects",
    href: "/developer/projects",
  },
  {
    label: "About",
    href: "/developer/about",
  },
  {
    label: "Skills",
    href: "/developer/skills",
  },
  {
    label: "Journal",
    href: "/developer/journal",
  },
  {
    label: "Contact",
    href: "/developer/contact",
  },
] as const;

export default function DeveloperHeader() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | Lock body scroll while mobile menu is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
  |--------------------------------------------------------------------------
  | Active route
  |--------------------------------------------------------------------------
  */

  const isActive = (
    href: (typeof navigation)[number]["href"],
  ) => {
    if (href === "/developer") {
      return pathname === "/developer";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-dev-background/90 backdrop-blur-xl">
        <div className="site-container">
          <div className="flex h-[82px] items-center justify-between lg:h-[92px]">
            {/* Brand */}

            <Link
              href="/developer"
              onClick={closeMenu}
              className="relative z-50 text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              Marc Austin
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navigation.map((item) => {
                const active =
                  isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative py-3 text-[11px] uppercase tracking-[0.16em]"
                  >
                    <span
                      className={
                        active
                          ? "text-dev-foreground"
                          : "text-dev-muted transition-colors duration-300 group-hover:text-dev-foreground"
                      }
                    >
                      {item.label}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-dev-foreground transition-all duration-500 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                PHOTOGRAPHY SWITCH
            ================================================= */}

            <PortfolioSwitchLink
              href="/"
              className="group hidden items-center gap-3 text-[11px] uppercase tracking-[0.15em] lg:flex"
            >
              <span>
                Photography
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-black group-hover:text-white">
                ↗
              </span>
            </PortfolioSwitchLink>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen(
                  (current) => !current,
                )
              }
              className="relative z-50 flex items-center gap-3 lg:hidden"
            >
              <span className="text-[10px] uppercase tracking-[0.18em]">
                {menuOpen
                  ? "Close"
                  : "Menu"}
              </span>

              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 h-px bg-current transition-all duration-300 ${
                    menuOpen
                      ? "top-[8px] w-5 rotate-45"
                      : "top-[4px] w-5"
                  }`}
                />

                <span
                  className={`absolute right-0 h-px bg-current transition-all duration-300 ${
                    menuOpen
                      ? "bottom-[7px] w-5 -rotate-45"
                      : "bottom-[4px] w-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: 0.7,
              ease: [
                0.76,
                0,
                0.24,
                1,
              ],
            }}
            className="fixed inset-0 z-40 h-[100dvh] overflow-y-auto bg-dev-background lg:hidden"
          >
            <div className="site-container flex min-h-[100dvh] flex-col">
              {/* Header spacing */}

              <div className="h-[105px]" />

              {/* Navigation */}

              <nav className="flex flex-1 flex-col justify-center">
                <div className="border-t border-dev-border">
                  {navigation.map(
                    (item, index) => {
                      const active =
                        isActive(item.href);

                      return (
                        <motion.div
                          key={item.href}
                          initial={{
                            opacity: 0,
                            y: 30,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay:
                              0.15 +
                              index *
                                0.055,
                          }}
                          className="border-b border-dev-border"
                        >
                          <Link
                            href={
                              item.href
                            }
                            onClick={
                              closeMenu
                            }
                            className="group flex items-center justify-between py-5 sm:py-6"
                          >
                            <div className="flex items-start gap-4">
                              <span className="mt-2 text-[9px] text-dev-subtle">
                                {String(
                                  index +
                                    1,
                                ).padStart(
                                  2,
                                  "0",
                                )}
                              </span>

                              <span
                                className={`font-serif text-[clamp(2.25rem,11vw,3rem)] leading-none tracking-[-0.03em] ${
                                  active
                                    ? "text-dev-foreground"
                                    : "text-dev-muted"
                                }`}
                              >
                                {
                                  item.label
                                }
                              </span>
                            </div>

                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </motion.div>
                      );
                    },
                  )}
                </div>
              </nav>

              {/* Photography switch */}

              <div className="pb-8 pt-6">
                <PortfolioSwitchLink
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-t border-dev-border pt-6"
                >
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-dev-muted">
                      Switch portfolio
                    </p>

                    <p className="font-serif text-2xl">
                      Photography
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dev-border">
                    ↗
                  </span>
                </PortfolioSwitchLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}