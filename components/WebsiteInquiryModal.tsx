"use client";

import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import ContactInquiryForm from "@/components/contact/ContactInquiryForm";

const STORAGE_KEY = "wbyb_selected_website";

type WebsiteInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  websiteId?: string;
};

export function WebsiteInquiryModal({
  isOpen,
  onClose,
  websiteId,
}: WebsiteInquiryModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && websiteId) {
      window.localStorage.setItem(STORAGE_KEY, websiteId);
    }
  }, [isOpen, websiteId]);

  if (!mounted) return null;

  return createPortal(
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-2 py-2 transition-opacity duration-300 sm:px-4 sm:py-6 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="website-inquiry-title"
          aria-hidden={!isOpen}
          className="relative flex max-h-[calc(100dvh-1rem)] w-full max-w-[22rem] flex-col overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#00001F]/95 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.035),0_22px_70px_rgba(0,0,31,0.42),0_0_28px_rgba(124,60,255,0.06)] backdrop-blur-2xl sm:max-h-[calc(100dvh-3rem)] sm:max-w-lg sm:rounded-[26px]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.07),transparent_34%),radial-gradient(circle_at_92%_10%,rgba(124,60,255,0.1),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018)_44%,rgba(0,0,31,0.44))] sm:rounded-[26px]" />

          <div className="relative flex items-start justify-between gap-3 border-b border-white/[0.08] bg-white/[0.025] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-xl sm:gap-4 sm:p-5">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-100/70 sm:text-[10px] sm:tracking-[0.22em]">
                Website inquiry
              </p>
              <h2
                id="website-inquiry-title"
                className="mt-1.5 text-lg font-semibold tracking-tight sm:mt-2 sm:text-2xl"
              >
                Send your details.
              </h2>
              <p className="mt-1.5 max-w-md text-xs leading-5 text-white/62 sm:mt-2 sm:text-sm sm:leading-6">
                {websiteId
                  ? "Your selected website is prefilled and included with this inquiry."
                  : "Tell us about your website project."}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.045] text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-9 sm:w-9"
              aria-label="Close modal"
            >
              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>

          <div className="relative overflow-y-auto p-2 sm:p-3">
            <Suspense
              fallback={
                <div className="min-h-[260px] rounded-[16px] border border-white/[0.08] bg-white/[0.035] sm:min-h-[320px] sm:rounded-[18px]" />
              }
            >
              <ContactInquiryForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
