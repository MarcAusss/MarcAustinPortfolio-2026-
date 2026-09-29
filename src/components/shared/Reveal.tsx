"use client";

import { MotionConfig, motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;

  // Above-the-fold content: animate with CSS on first paint instead of
  // waiting for hydration, so it doesn't delay Largest Contentful Paint.
  immediate?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  immediate = false,
}: RevealProps) {
  if (immediate) {
    return (
      <div
        className={`reveal-immediate ${className}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    );
  }

  return (
    // "user" drops the movement (keeps the fade) under prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
