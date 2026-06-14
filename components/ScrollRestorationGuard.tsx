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
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        requestAnimationFrame(() => window.scrollTo(0, 0));
      }
    } catch {
      // Some embedded/mobile browsers expose partial history/performance APIs.
      // Scroll restoration should never be allowed to break page hydration.
    }
  }, [pathname]);

  return null;
}
