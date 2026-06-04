"use client";

import { FormEvent, memo, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

const STORAGE_KEY = "wbyb_selected_website";

function ContactInquiryForm() {
  const searchParams = useSearchParams();
  const websiteFromQuery = searchParams.get("website")?.trim() ?? "";
  const [websiteSource, setWebsiteSource] = useState("");
  const [message, setMessage] = useState("");
  const labelClass =
    "grid gap-1 text-xs font-semibold text-white/82 sm:gap-1.5 sm:text-sm";
  const inputClass =
    "h-9 rounded-lg border border-white/[0.08] bg-white/95 px-2.5 text-[13px] text-black placeholder:text-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:rounded-xl sm:px-3 sm:text-sm";

  useEffect(() => {
    const storedWebsite = window.localStorage.getItem(STORAGE_KEY) ?? "";
    const nextWebsite = websiteFromQuery || storedWebsite;

    if (websiteFromQuery) {
      window.localStorage.setItem(STORAGE_KEY, websiteFromQuery);
    }

    setWebsiteSource(nextWebsite);
  }, [websiteFromQuery]);

  useEffect(() => {
    if (!websiteSource) {
      return;
    }

    setMessage((current) => {
      if (current.includes("Interested Website:")) {
        return current;
      }

      return `Interested Website: ${websiteSource}\n\n${current}`;
    });
  }, [websiteSource]);

  const subject = useMemo(
    () =>
      websiteSource
        ? `Website inquiry: ${websiteSource}`
        : "Website project inquiry",
    [websiteSource]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const formMessage = String(formData.get("message") ?? "");
    const source = String(formData.get("website_source") ?? "");
    const body = [
      `name: ${name}`,
      `email: ${email}`,
      `message: ${formMessage}`,
      `website_source: ${source}`
    ].join("\n");

    event.currentTarget.action = `mailto:contactus@webuildyourbrands.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
      className="grid gap-2 p-0.5 text-left sm:gap-3 sm:p-2"
    >
      <input type="hidden" name="website_source" value={websiteSource} />

      {websiteSource && (
        <div className="break-words px-1 text-[11px] font-semibold leading-4 text-cyan-50/85 sm:text-xs sm:leading-5">
          Interested Website: {websiteSource}
        </div>
      )}

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
        <label className={labelClass}>
          <span>
            Name <span className="text-cyan-100">*</span>
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </label>

        <label className={labelClass}>
          <span>
            Email <span className="text-cyan-100">*</span>
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className={labelClass}>
        <span>
          Message <span className="text-cyan-100">*</span>
        </span>
        <textarea
          required
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={3}
          className="min-h-20 resize-y rounded-lg border border-white/[0.08] bg-white/95 px-2.5 py-2 text-[13px] leading-5 text-black placeholder:text-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-28 sm:rounded-xl sm:px-3 sm:text-sm sm:leading-6"
          placeholder="Tell us what you want to launch."
        />
      </label>

      <Button
        type="submit"
        className={`mt-0.5 h-9 rounded-full text-[13px] font-bold sm:mt-1 sm:h-10 sm:text-sm ${neonButtonClass}`}
      >
        <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
        Send Inquiry
      </Button>
    </form>
  );
}

export default memo(ContactInquiryForm);
