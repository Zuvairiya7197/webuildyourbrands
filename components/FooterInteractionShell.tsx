"use client";

import { useRef } from "react";
import { ArrowUp } from "lucide-react";

export function FooterInteractionShell({
  children
}: {
  children: React.ReactNode;
}) {
  const footerRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef(0);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = `${((event.clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((event.clientY - rect.top) / rect.height) * 100}%`;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      footerRef.current?.style.setProperty("--footer-spotlight-x", x);
      footerRef.current?.style.setProperty("--footer-spotlight-y", y);
    });
  }

  return (
    <footer
      ref={footerRef}
      className="group/footer relative overflow-hidden border-t border-cyan-300/10 px-4 text-white sm:px-8 lg:px-24 xl:px-32"
      onMouseMove={handleMouseMove}
      style={
        {
          "--footer-spotlight-x": "50%",
          "--footer-spotlight-y": "50%"
        } as React.CSSProperties
      }
    >
      {children}
    </footer>
  );
}

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group/top flex h-11 items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-5 text-xs font-bold uppercase tracking-[0.16em] text-white/62 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[image:var(--button-gradient)] hover:text-white hover:shadow-[0_0_28px_rgba(22,216,255,0.18)] md:justify-self-end"
      aria-label="Back to top"
    >
      Back to top
      <ArrowUp
        className="h-4 w-4 transition duration-300 group-hover/top:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  );
}
