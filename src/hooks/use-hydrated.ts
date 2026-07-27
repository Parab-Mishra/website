"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/**
 * Returns `false` during server rendering and the initial client render,
 * then `true` after hydration. Useful for components (like a theme toggle)
 * that must render a stable placeholder until client-only state is safe to
 * read, without triggering the "setState in effect" anti-pattern.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
