"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

import { useEffect, useState } from "react";

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
  | Lock body scroll
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
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
        setDirection(1);
        onNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1);
        onPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (!item) {
    return null;
  }

  const handlePrevious = () => {
    setDirection(-1);
    onPrevious();
  };

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} photograph viewer`}
      className="fixed inset-0 z-[9998] bg-[#090909] text-white"
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
        duration: 0.4,
      }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute left-1/4 top-0 h-full w-px bg-white/[0.035]" />

        <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.035]" />

        <span className="absolute left-3/4 top-0 h-full w-px bg-white/[0.035]" />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="absolute left-0 right-0 top-0 z-30">
        <div className="site-container">
          <div className="flex h-[76px] items-center justify-between border-b border-white/10 md:h-[88px]">
            {/* Counter */}

            <div className="flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.22em] text-white/60">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-5 bg-white/20" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

            {/* Close */}

            <button
              type="button"
              onClick={onClose}
              autoFocus
              data-cursor="close"
              className="group flex items-center gap-4"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/45 transition-colors group-hover:text-white">
                Close
              </span>

              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-90 group-hover:bg-white group-hover:text-black">
                <span className="absolute h-px w-4 rotate-45 bg-current" />

                <span className="absolute h-px w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          IMAGE AREA
      ===================================================== */}

      <div className="absolute inset-0 flex items-center justify-center px-5 pb-[180px] pt-[105px] md:px-20 md:pb-[170px] md:pt-[115px] lg:px-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.id}
            custom={direction}
            data-cursor="drag"
            variants={{
              enter: (directionValue: 1 | -1) => ({
                opacity: 0,

                x: directionValue === 1 ? 55 : -55,

                scale: 0.985,
              }),

              center: {
                opacity: 1,
                x: 0,
                scale: 1,
              },

              exit: (directionValue: 1 | -1) => ({
                opacity: 0,

                x: directionValue === 1 ? -55 : 55,

                scale: 0.985,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,

              ease: [0.22, 1, 0.36, 1],
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.15}
            onDragEnd={(_event, info) => {
              const threshold = 60;

              if (info.offset.x < -threshold) {
                handleNext();
                return;
              }

              if (info.offset.x > threshold) {
                handlePrevious();
              }
            }}
            className="relative h-full w-full"
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="100vw"
                className="select-none object-contain"
                draggable={false}
              />
            ) : (
              <LightboxPlaceholder item={item} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          PREVIOUS
      ===================================================== */}

      <button
        type="button"
        aria-label="Previous photograph"
        onClick={handlePrevious}
        data-cursor="previous"
        className="group absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-3 md:flex lg:left-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:bg-white group-hover:text-black">
          ←
        </span>
      </button>

      {/* =====================================================
          NEXT
      ===================================================== */}

      <button
        type="button"
        aria-label="Next photograph"
        onClick={handleNext}
        data-cursor="next"
        className="group absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-3 md:flex lg:right-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:bg-white group-hover:text-black">
          →
        </span>
      </button>

      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-[#090909] via-[#090909]/95 to-transparent pt-14">
        <div className="site-container">
          <div className="grid min-h-[135px] gap-7 border-t border-white/10 py-6 md:grid-cols-12 md:items-end">
            {/* Title */}

            <div className="md:col-span-5">
              <p className="font-serif text-3xl leading-none tracking-[-0.035em] md:text-4xl">
                {item.title}
              </p>
            </div>

            {/* Metadata */}

            <div className="flex flex-wrap items-center gap-4 md:col-span-5">
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

            {/* Mobile navigation */}

            <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-3">
              <button
                type="button"
                aria-label="Previous photograph"
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black md:hidden"
              >
                ←
              </button>

              <p className="hidden text-[7px] uppercase leading-5 tracking-[0.2em] text-white/20 lg:block">
                Drag or use
                <br />
                arrow keys
              </p>

              <button
                type="button"
                aria-label="Next photograph"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-black md:hidden"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
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
    <div className="absolute inset-0 m-auto h-full max-h-[75vh] w-full max-w-[1200px] overflow-hidden bg-white/[0.045]">
      {/* Grid */}

      <span className="absolute left-1/4 top-0 h-full w-px bg-white/[0.05]" />

      <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

      <span className="absolute left-3/4 top-0 h-full w-px bg-white/[0.05]" />

      <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

      {/* Large number */}

      <span className="absolute -bottom-10 -right-3 font-serif text-[240px] leading-none tracking-[-0.09em] text-white/[0.025] md:text-[400px]">
        {String(item.id).padStart(2, "0")}
      </span>

      {/* Label */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-5xl italic text-white/[0.1] md:text-8xl">
            {item.category}
          </p>

          <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-white/20">
            Add photograph
          </p>
        </div>
      </div>
    </div>
  );
}
