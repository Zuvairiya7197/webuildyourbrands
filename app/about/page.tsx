import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Eye, Paintbrush, Route, Telescope, Workflow } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, beliefs, and working philosophy behind WEBuildYourBrands."
};

const approach = [
  {
    title: "Clear First",
    text: "Visitors should understand what you do in seconds.",
    Icon: Compass
  },
  {
    title: "Built To Convert",
    text: "A website that guides people toward action.",
    Icon: Route
  },
  {
    title: "No Noise",
    text: "Fewer distractions. Stronger decisions.",
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
    text: "Find what stops visitors from taking action."
  },
  {
    title: "Design",
    text: "Shape a clear path from trust to inquiry."
  },
  {
    title: "Deliver",
    text: "Launch fast, polished, and ready for leads."
  }
];

const testimonials = [
  {
    name: "Saquib Dalvi",
    role: "Education Brand",
    title: "Our website became clear for parents.",
    lines: [
      "Important information was easy to find.",
      "Updates were handled fast, with helpful ideas."
    ],
    featured: true
  },
  {
    name: "Kopal Dhir",
    role: "Founder at Organise With Kopal",
    title: "My website was delivered fast and stress-free.",
    lines: [
      "The process felt clear from start to finish.",
      "Edits were quick, and the site felt easy to share."
    ]
  },
  {
    name: "Zarrar Palekar",
    role: "Portfolio Website Client",
    title: "My work became easier to trust.",
    lines: [
      "The portfolio gave my projects a sharper presence.",
      "Clients could understand my work faster."
    ]
  }
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="We turn confusing websites into clear, client-winning machines."
        description="Clear message. Premium design. A website people trust in seconds - and act on."
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
        title="If people don't understand your website in seconds, they leave."
        description="Most websites look good. But they quietly lose attention. People don't understand. They don't trust. They leave. We make the offer, design, and next step easier to see."
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
              If people understand you faster, they trust you faster - and take action.
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
              Built to stay clear as you grow.
            </h3>
            <div className="mt-7 grid gap-3">
              {["Easy to update", "Easy to scale", "Ready for more traffic"].map((item) => (
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
        title="Simple rules. Websites that actually work."
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
        title="Every section is built to guide one thing: action."
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

      <Section
        className="pt-0"
        eyebrow="Trust"
        title="Trusted by businesses that wanted better results"
      >
        <div className="-mt-4 mb-8 flex flex-wrap gap-2">
          {["Fast delivery", "Clear communication", "Built to convert"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/58"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`group relative min-h-[260px] overflow-hidden rounded-[26px] border bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.44))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 ${
                testimonial.featured ? "border-cyan-100/24" : "border-white/10"
              }`}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              {testimonial.featured ? (
                <p className="mb-4 inline-flex rounded-full border border-cyan-100/16 bg-cyan-100/[0.055] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100/72">
                  Featured Client
                </p>
              ) : null}
              <p className="text-sm font-bold text-white">{testimonial.name}</p>
              <p className="mt-1 text-xs leading-5 text-white/48">{testimonial.role}</p>
              <h3 className="mt-8 text-lg font-bold leading-snug text-white">
                &quot;{testimonial.title}&quot;
              </h3>
              <div className="mt-4 grid gap-2 text-sm leading-6 text-white/64">
                {testimonial.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className={`${glassCardClass} relative overflow-hidden p-6 text-center text-white sm:p-10`}>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.6),transparent)]" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/44">
            Build a website that actually works
          </p>
          <h2 className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            If your website isn&apos;t bringing inquiries, it&apos;s costing you business.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            Let&apos;s fix it with a clear, fast, conversion-focused website.
          </p>
          <Button
            asChild
            className={`mt-8 h-12 rounded-full px-7 text-base font-bold ${neonButtonClass}`}
          >
            <CalendlyLink>
              Book a Free Call →
            </CalendlyLink>
          </Button>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
            Limited projects each month to maintain quality.
          </p>
        </div>
      </Section>
    </>
  );
}
