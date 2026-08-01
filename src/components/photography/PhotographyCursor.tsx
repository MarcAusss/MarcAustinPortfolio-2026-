"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

type CursorMode =
  | "default"
  | "view"
  | "next"
  | "previous"
  | "close"
  | "drag";

const labels: Record<
  CursorMode,
  string
> = {
  default: "",
  view: "VIEW",
  next: "NEXT",
  previous: "PREV",
  close: "CLOSE",
  drag: "DRAG",
};

export default function PhotographyCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 700,
    damping: 45,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 700,
    damping: 45,
    mass: 0.2,
  });

  const [mode, setMode] =
    useState<CursorMode>("default");

  const [visible, setVisible] =
    useState(false);

  const [enabled, setEnabled] =
    useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine)",
    );

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches);
    };

    updateEnabled();

    mediaQuery.addEventListener(
      "change",
      updateEnabled,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateEnabled,
      );
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);

      const target =
        event.target as HTMLElement;

      const cursorTarget =
        target.closest<HTMLElement>(
          "[data-cursor]",
        );

      if (!cursorTarget) {
        setMode("default");
        return;
      }

      const requestedMode =
        cursorTarget.dataset
          .cursor as CursorMode;

      if (
        requestedMode &&
        requestedMode in labels
      ) {
        setMode(requestedMode);
      } else {
        setMode("default");
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
    };
  }, [
    enabled,
    mouseX,
    mouseY,
  ]);

  if (!enabled) {
    return null;
  }

  const expanded =
    mode !== "default";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000]"
      style={{
        x,
        y,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.div
        animate={{
          width: expanded ? 72 : 12,
          height: expanded ? 72 : 12,

          x: expanded ? -36 : -6,
          y: expanded ? -36 : -6,

          backgroundColor: expanded
            ? "rgba(243, 240, 233, 0.96)"
            : "rgba(243, 240, 233, 0.9)",
        }}
        transition={{
          duration: 0.28,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="flex items-center justify-center rounded-full"
      >
        <motion.span
          animate={{
            opacity: expanded ? 1 : 0,

            scale:
              expanded ? 1 : 0.7,
          }}
          transition={{
            duration: 0.18,
          }}
          className="text-[8px] font-medium uppercase tracking-[0.15em] text-black"
        >
          {labels[mode]}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}