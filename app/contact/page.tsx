import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { glassCardClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WEBuildYourBrands to discuss your next website, brand, or landing page project."
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell us what you are building, where the website fits in your growth plan, and what a successful launch should achieve."
        videoSrc="/Contact page hero.mp4"
      />
      <section className="relative overflow-hidden px-5 py-20 pt-16 sm:px-8 lg:px-10">
        <Image
          src="/form-backround.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#00001F]/84" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,60,255,0.2),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(22,216,255,0.12),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <aside className={`${glassCardClass} p-7 text-white`}>
            <h2 className="text-2xl font-semibold tracking-tight">
              Start with an email
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Share your goals, timeline, and any existing website or brand
              materials. We will reply with next steps.
            </p>
            <a
              href="mailto:hello@webuildyourbrands.com"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@webuildyourbrands.com
            </a>
          </aside>
          <form className="grid gap-5 rounded-[32px] border border-white/15 bg-[#00001F]/78 p-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_90px_rgba(0,0,31,0.28)] backdrop-blur-xl">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <Input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <Input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Message
              <Textarea name="message" required />
            </label>
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
