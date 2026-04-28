"use client";

import { memo, useCallback, useRef, useState } from "react";
import { useModalAccessibility } from "@/hooks/useModalAccessibility";

function RouteLoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeOverlay = useCallback(() => setIsVisible(false), []);

  useModalAccessibility({
    isOpen: isVisible,
    onClose: closeOverlay,
    containerRef: dialogRef
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#00001F]/86 px-6 text-white backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="route-loading-title"
      tabIndex={-1}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(22,216,255,0.035)_40%,rgba(124,60,255,0.12))] px-8 py-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_80px_rgba(0,0,31,0.36)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.78),transparent)]" />
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/12 border-t-cyan-100" />
        <p
          id="route-loading-title"
          className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/58"
        >
          Loading
        </p>
      </div>
    </div>
  );
}

export default memo(RouteLoadingOverlay);
