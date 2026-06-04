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
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-3 py-3 transition-opacity duration-300 sm:px-4 sm:py-6 ${
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
          className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-lg flex-col overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#00001F]/95 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.035),0_22px_70px_rgba(0,0,31,0.42),0_0_28px_rgba(124,60,255,0.06)] backdrop-blur-2xl sm:max-h-[calc(100dvh-3rem)] sm:rounded-[26px]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.07),transparent_34%),radial-gradient(circle_at_92%_10%,rgba(124,60,255,0.1),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018)_44%,rgba(0,0,31,0.44))] sm:rounded-[26px]" />

          <div className="relative flex items-start justify-between gap-4 border-b border-white/[0.08] bg-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-xl sm:p-5">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/70">
                Website inquiry
              </p>
              <h2
                id="website-inquiry-title"
                className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Send your details.
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/62">
                {websiteId
                  ? "Your selected website is prefilled and included with this inquiry."
                  : "Tell us about your website project."}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.045] text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="relative p-2.5 sm:p-3">
            <Suspense
              fallback={
                <div className="min-h-[320px] rounded-[18px] border border-white/[0.08] bg-white/[0.035]" />
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
