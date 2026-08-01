"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

import { useMemo, useState } from "react";

import PhotographyLightbox from "@/components/photography/PhotographyLightbox";

import {
  photographyCategories,
  photographyItems,
  type PhotographyFilter,
  type PhotographyItem,
} from "@/data/photography";

/*
|--------------------------------------------------------------------------
| Grid width
|--------------------------------------------------------------------------
*/

const sizeClasses: Record<PhotographyItem["size"], string> = {
  large: "md:col-span-8",

  portrait: "md:col-span-4",

  wide: "md:col-span-8",

  standard: "md:col-span-4",
};

/*
|--------------------------------------------------------------------------
| Aspect ratio
|--------------------------------------------------------------------------
*/

const aspectClasses: Record<PhotographyItem["size"], string> = {
  large: "aspect-[4/3]",

  portrait: "aspect-[4/5]",

  wide: "aspect-[16/9]",

  standard: "aspect-[4/3]",
};

/*
|--------------------------------------------------------------------------
| Gallery
|--------------------------------------------------------------------------
*/

export default function PhotographyGallery() {
  const [activeFilter, setActiveFilter] = useState<PhotographyFilter>("All");

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Filter images
  |--------------------------------------------------------------------------
  */

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return photographyItems;
    }

    return photographyItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  /*
  |--------------------------------------------------------------------------
  | Lightbox
  |--------------------------------------------------------------------------
  */

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevious = () => {
    setLightboxIndex((current) => {
      if (current === null) {
        return null;
      }

      if (current === 0) {
        return filteredItems.length - 1;
      }

      return current - 1;
    });
  };

  const showNext = () => {
    setLightboxIndex((current) => {
      if (current === null) {
        return null;
      }

      if (current === filteredItems.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  return (
    <>
      {/* =====================================================
          FILTERS
      ===================================================== */}

      <div className="sticky top-[82px] z-30 border-y border-white/10 bg-photo-background/90 backdrop-blur-xl lg:top-[92px]">
        <div className="site-container">
          <div className="hide-scrollbar flex items-center gap-6 overflow-x-auto overscroll-x-contain py-4 pr-6 md:gap-7 md:py-5">
            <span className="shrink-0 text-[8px] uppercase tracking-[0.24em] text-white/25">
              Filter
            </span>

            <span className="h-4 w-px shrink-0 bg-white/10" />

            {photographyCategories.map((category) => {
              const active = category === activeFilter;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveFilter(category);

                    /*
                     * Make sure an old
                     * filtered lightbox
                     * can't remain open.
                     */

                    setLightboxIndex(null);
                  }}
                  className="group relative min-h-10 shrink-0 py-3 text-[9px] uppercase tracking-[0.19em]"
                >
                  <span
                    className={
                      active
                        ? "text-white"
                        : "text-white/35 transition-colors duration-300 group-hover:text-white"
                    }
                  >
                    {category}
                  </span>

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}

            <div className="ml-auto hidden shrink-0 md:block">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                {String(filteredItems.length).padStart(2, "0")} Frames
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <div className="site-container py-7 sm:py-9 md:py-12">
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredItems.map((item, index) => (
              <PhotographyCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => openLightbox(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <PhotographyLightbox
            items={filteredItems}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Photography Card
|--------------------------------------------------------------------------
*/

function PhotographyCard({
  item,
  index,
  onOpen,
}: {
  item: PhotographyItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.98,
      }}
      transition={{
        duration: 0.6,

        delay: Math.min(index * 0.035, 0.2),

        ease: [0.22, 1, 0.36, 1],
      }}
      className={sizeClasses[item.size]}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${item.title} photograph`}
        data-cursor="view"
        className="group block w-full text-left"
      >
        {/* =============================================
            IMAGE
        ============================================= */}

        <div
          className={`relative overflow-hidden bg-white/[0.055] ${
            aspectClasses[item.size]
          }`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={
                item.size === "large" || item.size === "wide"
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 100vw, 34vw"
              }
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
            />
          ) : (
            <PhotographyPlaceholder item={item} />
          )}

          {/* Dark hover */}

          <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />

          {/* Number */}

          <span className="absolute left-4 top-4 text-[8px] uppercase tracking-[0.2em] text-white/40 md:left-5 md:top-5">
            {String(item.id).padStart(2, "0")}
          </span>

          {/* View indicator */}

          <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            ↗
          </div>

          {/* Mobile indicator */}

          <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-[10px] backdrop-blur-sm md:hidden">
            ↗
          </div>
        </div>

        {/* =============================================
            CAPTION
        ============================================= */}

        <div className="mt-5 flex items-start justify-between gap-6 border-t border-white/10 pt-4">
          <div>
            <p className="font-serif text-2xl leading-none tracking-[-0.025em] md:text-3xl">
              {item.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-[8px] uppercase tracking-[0.19em] text-white/30">
                {item.category}
              </span>

              {item.location && (
                <>
                  <span className="h-0.5 w-0.5 rounded-full bg-white/20" />

                  <span className="text-[8px] uppercase tracking-[0.19em] text-white/25">
                    {item.location}
                  </span>
                </>
              )}
            </div>
          </div>

          <span className="text-[9px] text-white/25">{item.year}</span>
        </div>
      </button>
    </motion.article>
  );
}

/*
|--------------------------------------------------------------------------
| Gallery Placeholder
|--------------------------------------------------------------------------
*/

function PhotographyPlaceholder({ item }: { item: PhotographyItem }) {
  return (
    <div className="absolute inset-0">
      {/* Grid */}

      <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

      <span className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

      {/* Background number */}

      <span className="absolute -bottom-5 -right-2 font-serif text-[140px] leading-none tracking-[-0.08em] text-white/[0.025] md:text-[200px]">
        {String(item.id).padStart(2, "0")}
      </span>

      {/* Center */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-4xl italic text-white/[0.1] md:text-5xl">
            {item.category}
          </p>

          <p className="mt-3 text-[7px] uppercase tracking-[0.28em] text-white/20">
            Add photograph
          </p>
        </div>
      </div>
    </div>
  );
}
