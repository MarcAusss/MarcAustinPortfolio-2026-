"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { usePathname, useRouter } from "next/navigation";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PortfolioMode = "developer" | "photography";

export type PortfolioRoute = "/" | "/developer";

type TransitionPhase = "cover" | "waiting" | "reveal";

type TransitionState = {
  target: PortfolioRoute;
  mode: PortfolioMode;
  phase: TransitionPhase;
};

type PortfolioTransitionContextType = {
  startPortfolioTransition: (target: PortfolioRoute) => void;

  isTransitioning: boolean;
};

/*
|--------------------------------------------------------------------------
| Context
|--------------------------------------------------------------------------
*/

const PortfolioTransitionContext =
  createContext<PortfolioTransitionContextType | null>(null);

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function normalizePath(path: string) {
  if (path === "/") {
    return "/";
  }

  return path.replace(/\/+$/, "");
}

function getPortfolioMode(target: PortfolioRoute): PortfolioMode {
  return target === "/developer" ? "developer" : "photography";
}

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
*/

export default function PortfolioTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const prefersReducedMotion = useReducedMotion();

  const [transition, setTransition] = useState<TransitionState | null>(null);

  const isTransitioning = transition !== null;

  /*
  |--------------------------------------------------------------------------
  | Current route
  |--------------------------------------------------------------------------
  */

  const currentPath = normalizePath(pathname);

  const targetPath = transition ? normalizePath(transition.target) : null;

  /*
  |--------------------------------------------------------------------------
  | Derive transition phase
  |--------------------------------------------------------------------------
  |
  | We intentionally derive "reveal" from the current pathname instead
  | of calling setState inside useEffect.
  |
  */

  const effectivePhase: TransitionPhase | null =
    transition?.phase === "waiting" && targetPath === currentPath
      ? "reveal"
      : (transition?.phase ?? null);

  /*
  |--------------------------------------------------------------------------
  | Start portfolio transition
  |--------------------------------------------------------------------------
  */

  const startPortfolioTransition = (target: PortfolioRoute) => {
    const nextPath = normalizePath(target);

    /*
     * Don't transition to the page
     * we're already viewing.
     */

    if (currentPath === nextPath) {
      return;
    }

    /*
     * Respect reduced-motion settings.
     */

    if (prefersReducedMotion) {
      router.push(target);
      return;
    }

    /*
     * Prevent duplicate transitions.
     */

    if (transition) {
      return;
    }

    setTransition({
      target,
      mode: getPortfolioMode(target),
      phase: "cover",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | Prevent scrolling while overlay is active
  |--------------------------------------------------------------------------
  |
  | This effect only synchronizes React state with the browser DOM.
  | It does not update React state itself.
  |
  */

  useEffect(() => {
    if (!transition) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [transition]);

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <PortfolioTransitionContext.Provider
      value={{
        startPortfolioTransition,
        isTransitioning,
      }}
    >
      {children}

      <AnimatePresence>
        {transition && effectivePhase && (
          <PortfolioTransitionOverlay
            key={`${transition.mode}-${transition.target}`}
            transition={{
              ...transition,
              phase: effectivePhase,
            }}
            onCovered={() => {
              /*
               * The overlay completely covers
               * the current page.
               *
               * Switch to waiting state,
               * then change route underneath it.
               */

              setTransition((current) => {
                if (!current) {
                  return null;
                }

                if (current.phase !== "cover") {
                  return current;
                }

                return {
                  ...current,
                  phase: "waiting",
                };
              });

              router.push(transition.target);
            }}
            onFinished={() => {
              /*
               * Destination page has been
               * revealed.
               */

              setTransition(null);
            }}
          />
        )}
      </AnimatePresence>
    </PortfolioTransitionContext.Provider>
  );
}

/*
|--------------------------------------------------------------------------
| Transition Overlay
|--------------------------------------------------------------------------
*/

function PortfolioTransitionOverlay({
  transition,
  onCovered,
  onFinished,
}: {
  transition: TransitionState;

  onCovered: () => void;

  onFinished: () => void;
}) {
  const isDeveloper = transition.mode === "developer";

  /*
  |--------------------------------------------------------------------------
  | Direction
  |--------------------------------------------------------------------------
  |
  | Photography → Developer
  |
  |     enters from LEFT
  |     exits to RIGHT
  |
  | Developer → Photography
  |
  |     enters from RIGHT
  |     exits to LEFT
  |
  */

  const startX = isDeveloper ? "-100%" : "100%";

  const endX = isDeveloper ? "100%" : "-100%";

  /*
  |--------------------------------------------------------------------------
  | Theme
  |--------------------------------------------------------------------------
  */

  const background = isDeveloper ? "#f3f1ec" : "#090909";

  const foreground = isDeveloper ? "#141414" : "#f3f0e9";

  const subtle = isDeveloper
    ? "rgba(20, 20, 20, 0.35)"
    : "rgba(255, 255, 255, 0.35)";

  const border = isDeveloper
    ? "rgba(20, 20, 20, 0.12)"
    : "rgba(255, 255, 255, 0.12)";

  /*
  |--------------------------------------------------------------------------
  | Content
  |--------------------------------------------------------------------------
  */

  const title = isDeveloper ? "Developer" : "Photography";

  const subtitle = isDeveloper
    ? "Code × Systems × Design"
    : "Stories × Light × Moments";

  const footerText = isDeveloper
    ? "From imagery / to interaction"
    : "From interaction / to imagery";

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label={`Opening ${title} portfolio`}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background,
        color: foreground,
      }}
      initial={{
        x: startX,
      }}
      animate={{
        x: transition.phase === "reveal" ? endX : 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: transition.phase === "reveal" ? 0.9 : 0.85,

        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        /*
         * Once the cover animation finishes,
         * navigate underneath it.
         */

        if (transition.phase === "cover") {
          onCovered();
        }

        /*
         * Once the reveal animation finishes,
         * remove the overlay entirely.
         */

        if (transition.phase === "reveal") {
          onFinished();
        }
      }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        aria-hidden="true"
      >
        <span
          className="absolute left-1/4 top-0 h-full w-px"
          style={{
            background: border,
          }}
        />

        <span
          className="absolute left-1/2 top-0 h-full w-px"
          style={{
            background: border,
          }}
        />

        <span
          className="absolute left-3/4 top-0 h-full w-px"
          style={{
            background: border,
          }}
        />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="absolute left-0 right-0 top-0">
        <div className="site-container">
          <div
            className="flex h-[82px] items-center justify-between border-b lg:h-[92px]"
            style={{
              borderColor: border,
            }}
          >
            <span className="text-[9px] uppercase tracking-[0.24em]">
              Marc Austin
            </span>

            <span
              className="text-[8px] uppercase tracking-[0.24em]"
              style={{
                color: subtle,
              }}
            >
              Portfolio transition
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="site-container flex h-full items-center">
        <div className="relative w-full">
          {/* Entering */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: transition.phase === "reveal" ? 0 : 1,

              y: transition.phase === "reveal" ? -10 : 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.15,
            }}
            className="mb-7 text-[9px] uppercase tracking-[0.3em]"
            style={{
              color: subtle,
            }}
          >
            Entering
          </motion.p>

          {/* Main title */}

          <div className="overflow-hidden">
            <motion.h2
              initial={{
                y: "110%",
              }}
              animate={{
                y: transition.phase === "reveal" ? "-110%" : 0,
              }}
              transition={{
                duration: 0.85,

                delay: transition.phase === "reveal" ? 0 : 0.1,

                ease: [0.76, 0, 0.24, 1],
              }}
              className="font-serif text-[clamp(3.6rem,18vw,15rem)] leading-[0.76] tracking-[-0.06em] sm:leading-[0.72]"
            >
              {title}
            </motion.h2>
          </div>

          {/* Subtitle */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: transition.phase === "reveal" ? 0 : 1,

              y: transition.phase === "reveal" ? 10 : 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.3,
            }}
            className="mt-8 flex items-center gap-5"
          >
            <span
              className="h-px w-12"
              style={{
                background: foreground,
              }}
            />

            <span
              className="text-[9px] uppercase tracking-[0.25em]"
              style={{
                color: subtle,
              }}
            >
              {subtitle}
            </span>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="absolute bottom-5 left-0 right-0 sm:bottom-8">
        <div className="site-container">
          <div className="flex items-end justify-between">
            <p
              className="max-w-[180px] text-[7px] uppercase leading-4 tracking-[0.18em] sm:max-w-none sm:text-[8px] sm:leading-5 sm:tracking-[0.22em]"
              style={{
                color: subtle,
              }}
            >
              {footerText}
            </p>

            <motion.span
              animate={{
                x: isDeveloper ? [0, 7, 0] : [0, -7, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-serif text-3xl"
            >
              {isDeveloper ? "→" : "←"}
            </motion.span>
          </div>
        </div>
      </div>

      {/* =====================================================
          PROGRESS LINE
      ===================================================== */}

      <motion.div
        className="absolute bottom-0 h-[2px]"
        style={{
          background: foreground,
        }}
        initial={{
          left: isDeveloper ? 0 : "auto",

          right: isDeveloper ? "auto" : 0,

          width: 0,
        }}
        animate={{
          width: transition.phase === "reveal" ? "100%" : "65%",
        }}
        transition={{
          duration: 0.8,

          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| Hook
|--------------------------------------------------------------------------
*/

export function usePortfolioTransition() {
  const context = useContext(PortfolioTransitionContext);

  if (!context) {
    throw new Error(
      "usePortfolioTransition must be used inside PortfolioTransitionProvider",
    );
  }

  return context;
}
