"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestorationGuard() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const hasHash = window.location.hash.length > 0;

      if (!hasHash) {
        // `scroll-behavior: smooth` on <html> hijacks even "auto" scrollTo calls
        // in some browsers, animating the jump to top on every route change.
        // Disable it for the instant reset, then restore it.
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          root.style.scrollBehavior = previousScrollBehavior;
        });
      }
    } catch {
      // Some embedded/mobile browsers expose partial history/performance APIs.
      // Scroll restoration should never be allowed to break page hydration.
    }
  }, [pathname]);

  return null;
}
