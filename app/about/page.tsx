import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { glassCardClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how WEBuildYourBrands combines strategy, design, and development to create modern websites that help businesses grow."
};

const values = [
  {
    title: "Who we are",
    text: "We are a focused web design and development studio for founders, teams, and service-led brands that need a stronger digital presence."
  },
  {
    title: "Mission",
    text: "Our mission is to turn business goals into websites that are clear, fast, trustworthy, and easy for customers to act on."
  },
  {
    title: "Approach",
    text: "We work from strategy outward: offer clarity, user flow, visual direction, development quality, and measurable launch readiness."
  },
  {
    title: "Short story",
    text: "WEBuildYourBrands was created to close the gap between pretty websites and useful ones. Every project is shaped to support growth."
  }
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A small, sharp team building websites with business intent."
        description="We blend strategy, refined design, and reliable development so your website becomes a growth asset instead of a static brochure."
        videoSrc="/Abouthero.mp4"
      />
      <Section
        className="pt-24 sm:pt-28 lg:pt-32"
        eyebrow="About"
        title="How we think about the work."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((item) => (
            <article
              key={item.title}
              className={`${glassCardClass} p-7 text-white`}
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
