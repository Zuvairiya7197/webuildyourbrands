import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
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
      <Section className="pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
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
          <form className="relative overflow-hidden rounded-[32px] border border-white/15 bg-background p-7 text-white">
            <Image
              src="/form-backround.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover opacity-[0.07]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#00001F]/86" aria-hidden="true" />
            <div className="relative grid gap-5">
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
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
