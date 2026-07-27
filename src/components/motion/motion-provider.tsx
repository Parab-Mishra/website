"use client";

import * as React from "react";
import { MotionConfig } from "motion/react";

/**
 * Globally honors the OS-level `prefers-reduced-motion` setting for every
 * `motion/react` animation in the tree, on top of the manual reduced-motion
 * handling used for canvas/CSS effects.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </MotionConfig>
  );
}
