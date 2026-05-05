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
      className="grid gap-4 rounded-[26px] border border-white/12 bg-white/[0.055] p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-xl sm:p-6"
    >
      <input type="hidden" name="website_source" value={websiteSource} />

      {websiteSource && (
        <div className="rounded-2xl border border-cyan-300/16 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-50">
          Interested Website: {websiteSource}
        </div>
      )}

      <label className="grid gap-2 text-sm font-semibold text-white/82">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="h-12 rounded-2xl border border-white/12 bg-[#00001F]/52 px-4 text-base text-white placeholder:text-white/34 focus-visible:ring-2 focus-visible:ring-white"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-white/82">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="h-12 rounded-2xl border border-white/12 bg-[#00001F]/52 px-4 text-base text-white placeholder:text-white/34 focus-visible:ring-2 focus-visible:ring-white"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-white/82">
        Message
        <textarea
          required
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          className="min-h-36 resize-y rounded-2xl border border-white/12 bg-[#00001F]/52 px-4 py-3 text-base leading-7 text-white placeholder:text-white/34 focus-visible:ring-2 focus-visible:ring-white"
          placeholder="Tell us what you want to launch."
        />
      </label>

      <Button
        type="submit"
        className={`mt-2 h-12 rounded-full text-base font-bold ${neonButtonClass}`}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Inquiry
      </Button>
    </form>
  );
}

export default memo(ContactInquiryForm);
