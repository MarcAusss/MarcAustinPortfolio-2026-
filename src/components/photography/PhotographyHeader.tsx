"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import PortfolioSwitchLink from "@/components/transitions/PortfolioSwitchLink";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function PhotographyHeader() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-photo-background/85 backdrop-blur-xl">
        <div className="site-container">
          <div className="flex h-[82px] items-center justify-between lg:h-[92px]">
            {/* Brand */}

            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-50 text-[10px] font-medium uppercase tracking-[0.22em]"
            >
              Marc Austin
            </Link>

            {/* Desktop navigation */}

            <nav className="hidden items-center gap-9 lg:flex">
              {navigation.map((item) => {
                const active =
                  isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative py-3 text-[10px] uppercase tracking-[0.17em]"
                  >
                    <span
                      className={
                        active
                          ? "text-white"
                          : "text-white/45 transition-colors duration-300 group-hover:text-white"
                      }
                    >
                      {item.label}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Developer switch */}

            <PortfolioSwitchLink
              href="/developer"
              className="group hidden items-center gap-3 text-[10px] uppercase tracking-[0.17em] lg:flex"
            >
              <span>
                Developer
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-black">
                ↗
              </span>
            </PortfolioSwitchLink>

            {/* Mobile */}

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              onClick={() =>
                setMenuOpen(
                  (current) => !current,
                )
              }
              className="relative z-50 flex items-center gap-3 lg:hidden"
            >
              <span className="text-[9px] uppercase tracking-[0.2em]">
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

      {/* Mobile menu */}

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
              duration: 0.75,
              ease: [
                0.76,
                0,
                0.24,
                1,
              ],
            }}
            className="fixed inset-0 z-40 h-[100dvh] overflow-y-auto bg-photo-background text-white lg:hidden"
          >
            <div className="site-container flex min-h-dvh flex-col">
              <div className="h-[105px]" />

              <nav className="flex flex-1 flex-col justify-center">
                <div className="border-t border-white/10">
                  {navigation.map(
                    (item, index) => {
                      const active =
                        isActive(
                          item.href,
                        );

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
                            delay:
                              0.15 +
                              index *
                                0.06,
                            duration: 0.5,
                          }}
                          className="border-b border-white/10"
                        >
                          <Link
                            href={
                              item.href
                            }
                            onClick={
                              closeMenu
                            }
                            className="group flex items-center justify-between py-5"
                          >
                            <div className="flex items-start gap-4">
                              <span className="mt-2 text-[8px] text-white/25">
                                {String(
                                  index +
                                    1,
                                ).padStart(
                                  2,
                                  "0",
                                )}
                              </span>

                              <span
                                className={`font-serif text-[clamp(2.25rem,11vw,3rem)] leading-none tracking-[-0.035em] ${
                                  active
                                    ? "text-white"
                                    : "text-white/45"
                                }`}
                              >
                                {
                                  item.label
                                }
                              </span>
                            </div>

                            <span className="text-white/50 transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </motion.div>
                      );
                    },
                  )}
                </div>
              </nav>

              <div className="pb-8">
                <PortfolioSwitchLink
                  href="/developer"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-t border-white/10 pt-6"
                >
                  <div>
                    <p className="mb-1 text-[8px] uppercase tracking-[0.2em] text-white/30">
                      Switch portfolio
                    </p>

                    <p className="font-serif text-2xl">
                      Developer
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15">
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