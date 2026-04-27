"use client";

import { forwardRef, useEffect, useState } from "react";
import { X } from "lucide-react";
import { CALENDLY_EMBED_URL, CALENDLY_URL } from "@/lib/constants";

const CALENDLY_EVENT = "wbyb:open-calendly";

type CalendlyLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const CalendlyLink = forwardRef<HTMLAnchorElement, CalendlyLinkProps>(
  ({ children, onClick, ...props }, ref) => {
    return (
      <a
        {...props}
        ref={ref}
        href={CALENDLY_URL}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          event.preventDefault();
          window.dispatchEvent(new Event(CALENDLY_EVENT));
        }}
      >
        {children}
      </a>
    );
  }
);

CalendlyLink.displayName = "CalendlyLink";

export function CalendlyModalProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openCalendly = () => setIsOpen(true);

    window.addEventListener(CALENDLY_EVENT, openCalendly);

    return () => {
      window.removeEventListener(CALENDLY_EVENT, openCalendly);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-[radial-gradient(circle_at_20%_10%,rgba(124,60,255,0.2),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(22,216,255,0.14),transparent_30%),rgba(0,0,0,0.84)] px-3 py-4 backdrop-blur-md sm:px-6 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close scheduling modal"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative mx-auto flex h-[calc(100dvh-2rem)] max-w-6xl flex-col overflow-hidden rounded-[22px] border border-[#7c3cff]/35 bg-[#05030c] shadow-[0_36px_120px_rgba(0,0,0,0.62),0_0_90px_rgba(124,60,255,0.28),0_0_46px_rgba(22,216,255,0.1)] sm:h-[calc(100dvh-4rem)] sm:rounded-[28px]">
        <div className="pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.85),rgba(124,60,255,0.85),transparent)]" />
        <div className="flex items-center justify-between gap-6 border-b border-[#7c3cff]/20 bg-[radial-gradient(circle_at_15%_0%,rgba(22,216,255,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(124,60,255,0.18)_48%,rgba(0,0,31,0.62))] px-5 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-cyan-100">
              Schedule a call
            </p>
            <h2
              id="calendly-title"
              className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
              Book time with Zarrar Palekar
            </h2>
          </div>
          <button
            type="button"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(124,60,255,0.18)] transition hover:border-cyan-300/35 hover:bg-white/[0.08] hover:text-white"
            aria-label="Close scheduling modal"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto bg-[#05030c] [scrollbar-color:rgba(124,60,255,0.65)_rgba(255,255,255,0.08)]">
          <iframe
            src={CALENDLY_EMBED_URL}
            title="Calendly scheduling page"
            className="h-[1040px] min-h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
