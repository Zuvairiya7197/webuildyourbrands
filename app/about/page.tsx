import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Eye, Paintbrush, Route, Telescope, Workflow } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { glassCardClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, beliefs, and working philosophy behind WEBuildYourBrands."
};

const approach = [
  {
    title: "Clear First",
    text: "Visitors should understand you fast.",
    Icon: Compass
  },
  {
    title: "Built To Grow",
    text: "A foundation you can keep using.",
    Icon: Route
  },
  {
    title: "No Noise",
    text: "Fewer choices. Stronger message.",
    Icon: Paintbrush
  }
];

const focusAreas = [
  "Clear offer",
  "First-time visitor trust",
  "Every section has a job"
];

const process = [
  {
    title: "Discover",
    text: "What feels unclear?"
  },
  {
    title: "Design",
    text: "Shape the right flow."
  },
  {
    title: "Deliver",
    text: "Launch polished."
  }
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="We make businesses easier to understand online."
        description="Clear message. Premium design. A website people can trust quickly."
        videoSrc="/Abouthero.mp4"
        primaryLabel="Read Our Story"
        primaryHref="#our-story"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
      <Section
        id="our-story"
        className="pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Our Story"
        title="Most websites make people work too hard."
        description="We make the offer, design, and next step easier to see."
      >
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_12%_10%,rgba(22,216,255,0.13),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(124,60,255,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.5))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_30px_100px_rgba(0,0,31,0.28)] backdrop-blur-xl sm:p-5">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.6),transparent)]" />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <article className={`${glassCardClass} group relative overflow-hidden p-5 text-white transition duration-300 hover:border-cyan-300/35 sm:p-8`}>
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.8),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <p className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/58">
              Our Belief
            </p>
            <h2 className="mt-8 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              If people understand you faster, they trust you faster.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["What you do", "Why it matters", "What to do next"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#00001F]/42 p-4 text-sm font-bold text-white/76 transition duration-300 group-hover:border-cyan-300/22"
                >
                  <CheckCircle2 className="mb-3 h-4 w-4 text-cyan-100" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.12)_70%,rgba(0,0,31,0.52))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/28 sm:rounded-[32px] sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <Telescope className="h-10 w-10 text-cyan-100" aria-hidden="true" />
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/44">
                Future Ready
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
              Clear today. Useful tomorrow.
            </h3>
            <div className="mt-7 grid gap-3">
              {["Built to explain", "Easy to share", "Ready to grow"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-bold text-white/72"
                >
                  <Eye className="h-4 w-4 text-cyan-100" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </article>
          </div>
        </div>
      </Section>

      <Section
        className="py-0"
        eyebrow="Our Philosophy"
        title="Simple rules. Better websites."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {approach.map(({ title, text, Icon }, index) => (
            <article
              key={title}
              className="group relative min-h-[220px] overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.44))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 text-white transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-10 text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why It Matters"
        title="We design around the buyer’s next decision."
        description="Understand. Trust. Act."
      >
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(22,216,255,0.12),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.5))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-7">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)]" />
            <Workflow className="h-9 w-9 text-cyan-100" aria-hidden="true" />
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
              What We Care About
            </h3>
            <div className="mt-6 space-y-4">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-white/76 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-100" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`${glassCardClass} relative overflow-hidden p-5 text-white sm:p-7`}>
            <div className="pointer-events-none absolute left-8 right-8 top-1/2 hidden h-px bg-[linear-gradient(90deg,rgba(22,216,255,0),rgba(22,216,255,0.38),rgba(124,60,255,0.34),rgba(22,216,255,0))] md:block" />
            <h3 className="text-2xl font-semibold tracking-tight">
              How We Work
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {process.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative rounded-2xl border border-white/10 bg-[#00001F]/64 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/34">
                      0{index + 1}
                    </span>
                    {index < process.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-white/34 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-100" aria-hidden="true" />
                    )}
                  </div>
                  <h4 className="mt-8 text-lg font-bold">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
