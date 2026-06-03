"use client";

import { Suspense, useEffect, useState } from "react";
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8 transition-opacity duration-300 ${
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
        <div className="relative w-full max-w-2xl rounded-[32px] border border-white/12 bg-[#00001F]/95 text-white shadow-[0_28px_100px_rgba(0,0,31,0.42),0_0_42px_rgba(124,60,255,0.08)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.07),transparent_34%),radial-gradient(circle_at_92%_10%,rgba(124,60,255,0.1),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018)_44%,rgba(0,0,31,0.44))]" />

          <div className="relative border-b border-white/10 bg-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-xl sm:p-8 flex items-start justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-100/70">
                Website inquiry
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Send your details.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
                {websiteId
                  ? "Your selected website is prefilled and included with this inquiry."
                  : "Tell us about your website project."}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-1 ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white transition hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative max-h-[calc(100vh-200px)] overflow-y-auto p-3 sm:p-5">
            <Suspense
              fallback={
                <div className="min-h-[420px] rounded-[26px] border border-white/10 bg-white/[0.035]" />
              }
            >
              <ContactInquiryForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
