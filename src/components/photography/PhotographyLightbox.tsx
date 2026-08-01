"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

import { useCallback, useEffect, useState } from "react";

import type { PhotographyItem } from "@/data/photography";

type PhotographyLightboxProps = {
  items: PhotographyItem[];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function PhotographyLightbox({
  items,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: PhotographyLightboxProps) {
  const [direction, setDirection] = useState<1 | -1>(1);

  const item = items[activeIndex];

  /*
  |--------------------------------------------------------------------------
  | Navigation
  |--------------------------------------------------------------------------
  */

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    onPrevious();
  }, [onPrevious]);

  const handleNext = useCallback(() => {
    setDirection(1);
    onNext();
  }, [onNext]);

  /*
  |--------------------------------------------------------------------------
  | Lock page
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Keyboard controls
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        handleNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext, handlePrevious, onClose]);

  if (!item) {
    return null;
  }

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} photograph viewer`}
      className="fixed inset-0 z-[9998] h-[100dvh] overflow-hidden bg-[#090909] text-white"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <span className="absolute left-1/4 top-0 h-full w-px bg-white/[0.035]" />

        <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.035]" />

        <span className="absolute left-3/4 top-0 h-full w-px bg-white/[0.035]" />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="site-container">
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 md:h-[88px]">
            {/* Counter */}

            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-[8px] uppercase tracking-[0.22em] text-white/70 md:text-[9px]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-4 bg-white/20 md:w-5" />

              <span className="text-[8px] uppercase tracking-[0.22em] text-white/25 md:text-[9px]">
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

            {/* Close */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close photograph viewer"
              data-cursor="close"
              className="group flex min-h-11 items-center gap-3 md:gap-4"
            >
              <span className="hidden text-[8px] uppercase tracking-[0.2em] text-white/45 transition-colors group-hover:text-white sm:block md:text-[9px]">
                Close
              </span>

              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-90 group-hover:bg-white group-hover:text-black md:h-11 md:w-11">
                <span className="absolute h-px w-4 rotate-45 bg-current" />

                <span className="absolute h-px w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-[150px] top-[78px] flex items-center justify-center px-4 sm:bottom-[145px] sm:px-6 md:bottom-[150px] md:top-[96px] md:px-20 lg:px-28 xl:px-36">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.id}
            custom={direction}
            data-cursor="drag"
            variants={{
              enter: (value: 1 | -1) => ({
                opacity: 0,

                x: value === 1 ? 45 : -45,

                scale: 0.985,
              }),

              center: {
                opacity: 1,
                x: 0,
                scale: 1,
              },

              exit: (value: 1 | -1) => ({
                opacity: 0,

                x: value === 1 ? -45 : 45,

                scale: 0.985,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,

              ease: [0.22, 1, 0.36, 1],
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.12}
            onDragEnd={(_event, info) => {
              const offsetThreshold = 55;

              const velocityThreshold = 450;

              if (
                info.offset.x < -offsetThreshold ||
                info.velocity.x < -velocityThreshold
              ) {
                handleNext();
                return;
              }

              if (
                info.offset.x > offsetThreshold ||
                info.velocity.x > velocityThreshold
              ) {
                handlePrevious();
              }
            }}
            className="relative h-full w-full touch-pan-y"
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="100vw"
                draggable={false}
                className="select-none object-contain"
              />
            ) : (
              <LightboxPlaceholder item={item} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          DESKTOP PREVIOUS
      ===================================================== */}

      <button
        type="button"
        aria-label="Previous photograph"
        onClick={handlePrevious}
        data-cursor="previous"
        className="group absolute left-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:bg-white group-hover:text-black">
          ←
        </span>
      </button>

      {/* =====================================================
          DESKTOP NEXT
      ===================================================== */}

      <button
        type="button"
        aria-label="Next photograph"
        onClick={handleNext}
        data-cursor="next"
        className="group absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:bg-white group-hover:text-black">
          →
        </span>
      </button>

      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <footer className="absolute bottom-0 left-0 right-0 z-30 bg-[#090909]">
        <div className="site-container">
          <div className="grid min-h-[145px] grid-cols-12 items-center gap-x-4 border-t border-white/10 py-4 md:min-h-[150px] md:py-6">
            {/* Title */}

            <div className="col-span-8 md:col-span-5">
              <p className="truncate font-serif text-2xl leading-none tracking-[-0.035em] sm:text-3xl md:text-4xl">
                {item.title}
              </p>

              <div className="mt-3 flex max-w-full items-center gap-2 overflow-hidden md:hidden">
                <span className="truncate text-[7px] uppercase tracking-[0.18em] text-white/35">
                  {item.category}

                  {item.location ? ` · ${item.location}` : ""}

                  {` · ${item.year}`}
                </span>
              </div>
            </div>

            {/* Desktop metadata */}

            <div className="hidden flex-wrap items-center gap-4 md:col-span-5 md:flex">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                {item.category}
              </span>

              {item.location && (
                <>
                  <span className="h-0.5 w-0.5 rounded-full bg-white/25" />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    {item.location}
                  </span>
                </>
              )}

              <span className="h-0.5 w-0.5 rounded-full bg-white/25" />

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                {item.year}
              </span>
            </div>

            {/* Controls */}

            <div className="col-span-4 flex justify-end gap-2 md:col-span-2">
              <button
                type="button"
                aria-label="Previous photograph"
                onClick={handlePrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black lg:hidden"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next photograph"
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black lg:hidden"
              >
                →
              </button>

              <p className="hidden text-[7px] uppercase leading-5 tracking-[0.2em] text-white/20 lg:block">
                Drag or use
                <br />
                arrow keys
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| Placeholder
|--------------------------------------------------------------------------
*/

function LightboxPlaceholder({ item }: { item: PhotographyItem }) {
  return (
    <div className="absolute inset-0 m-auto h-full w-full max-w-[1200px] overflow-hidden bg-white/[0.045]">
      <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

      <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

      <span className="absolute -bottom-7 -right-2 font-serif text-[150px] leading-none tracking-[-0.09em] text-white/[0.025] sm:text-[220px] md:text-[320px]">
        {String(item.id).padStart(2, "0")}
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-4xl italic text-white/[0.1] sm:text-5xl md:text-7xl">
            {item.category}
          </p>

          <p className="mt-4 text-[7px] uppercase tracking-[0.28em] text-white/20">
            Add photograph
          </p>
        </div>
      </div>
    </div>
  );
}
