import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Layers3, Sparkles, Target, TimerReset } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, beliefs, and working philosophy behind WEBuildYourBrands."
};

const approach = [
  {
    title: "Clarity Over Complexity",
    text: "We believe the best websites make decisions easier for the person reading them.",
    Icon: Compass
  },
  {
    title: "Long-Term Thinking",
    text: "We think beyond launch day so the foundation can grow with the business.",
    Icon: TimerReset
  },
  {
    title: "Purposeful Design",
    text: "We prefer fewer, sharper choices over pages filled with decoration.",
    Icon: Sparkles
  }
];

const focusAreas = [
  "We ask why before deciding what to design",
  "We care about how the website feels to a first-time visitor",
  "We keep every section tied to trust, meaning, or action"
];

const process = [
  {
    title: "Discover",
    text: "We listen first: what you do, who you help, and what feels unclear right now."
  },
  {
    title: "Design",
    text: "We turn that understanding into structure, hierarchy, and a visual direction."
  },
  {
    title: "Deliver",
    text: "We refine the details until the website feels clear, finished, and useful."
  }
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A small studio for businesses that want to be understood."
        description="WBYB exists for businesses that have something valuable to offer, but need a clearer way to present it online."
        videoSrc="/Abouthero.mp4"
      />
      <Section
        className="pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Our Story"
        title="We started with one belief: clarity matters."
        description="We saw too many websites that looked busy but said very little. WBYB was created to help businesses turn scattered ideas into a website that feels clear, confident, and easy to trust."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <article className={`${glassCardClass} group relative overflow-hidden p-8 text-white transition duration-300 hover:-translate-y-2 hover:border-cyan-300/45 hover:shadow-[0_30px_90px_rgba(22,216,255,0.13),0_24px_90px_rgba(124,60,255,0.2)]`}>
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.8),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <p className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/58">
              Our belief
            </p>
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A website should make your business easier to understand.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Before a visitor trusts a brand, they need to understand it. What do you do? Who is it for? Why should it matter? We build around those answers first.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Understand", "Simplify", "Shape"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#00001F]/42 p-4 text-sm font-bold text-white/76 transition duration-300 group-hover:border-cyan-300/22"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.12)_70%,rgba(0,0,31,0.52))] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28">
            <Target className="h-10 w-10 text-cyan-100" aria-hidden="true" />
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
              Long-Term Goal
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/72">
              To help businesses build digital homes they can grow into, not websites they outgrow the moment they launch.
            </p>
            <div className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-bold ${neonButtonClass}`}>
              clear today, useful tomorrow
            </div>
          </article>
        </div>
      </Section>

      <Section
        className="py-0"
        eyebrow="Our Philosophy"
        title="The way we think shapes the way we build."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {approach.map(({ title, text, Icon }, index) => (
            <article
              key={title}
              className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.44))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 text-white transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-12 text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why It Matters"
        title="What makes us different."
        description="We do not start by asking how flashy the website can look. We start by asking what the visitor needs to understand, feel, and do next."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="rounded-[28px] border border-white/10 bg-[#00001F]/44 p-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
            <Layers3 className="h-9 w-9 text-cyan-100" aria-hidden="true" />
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

          <div className={`${glassCardClass} p-7 text-white`}>
            <h3 className="text-2xl font-semibold tracking-tight">
              How We Work
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {process.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-[#00001F]/44 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
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
