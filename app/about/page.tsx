import type { Metadata } from "next";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Compass,
  Eye,
  LayoutList,
  Paintbrush,
  RefreshCw,
  Search,
  Smartphone,
  Sparkles
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "The thinking, principles, and studio philosophy behind WEBuildYourBrands."
};

const principles = [
  {
    title: "Clear First",
    text: "Every page should feel easy to understand before it tries to impress.",
    Icon: Compass
  },
  {
    title: "Consistency Matters",
    text: "Typography, spacing, visuals, and tone should feel like one connected system.",
    Icon: Blocks
  },
  {
    title: "Less Noise",
    text: "A calm interface gives the important details more room to be noticed.",
    Icon: Eye
  },
  {
    title: "Designed To Age Well",
    text: "We avoid trendy clutter and build visual systems that still feel considered later.",
    Icon: Paintbrush
  }
];

const buildDetails = [
  {
    title: "Mobile-first layouts",
    Icon: Smartphone
  },
  {
    title: "Clean content hierarchy",
    Icon: LayoutList
  },
  {
    title: "Responsive structure",
    Icon: Blocks
  },
  {
    title: "Easy future updates",
    Icon: RefreshCw
  },
  {
    title: "Organized design systems",
    Icon: Sparkles
  },
  {
    title: "SEO-ready foundations",
    Icon: Search
  }
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About The Studio"
        title="We build websites with clarity, structure, and intention."
        description="Designed for businesses that want to feel easier to understand and easier to trust online."
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
        title="The studio began with a simple observation: most websites say too much and explain too little."
        description="We noticed how often good businesses were hidden behind crowded pages, unclear messages, and designs that did not feel connected to who they really were. WEBuildYourBrands exists to make that first impression calmer, sharper, and more honest."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <article className={`${glassCardClass} relative overflow-hidden p-6 text-white sm:p-9`}>
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.64),rgba(124,60,255,0.52),transparent)]" />
            <p className="text-sm uppercase tracking-[0.22em] text-white/42">
              The Thinking
            </p>
            <div className="mt-8 grid gap-6 text-base leading-8 text-white/66 sm:text-lg sm:leading-9">
              <p>
                A good website should create relief. It should help people know where they are, what matters, and why the business feels credible.
              </p>
              <p>
                Our work is about reducing confusion. We shape content, layout, and visual rhythm so a brand feels composed from the first screen.
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(22,216,255,0.026)_38%,rgba(124,60,255,0.08)_78%,rgba(0,0,31,0.5))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/58">
              Studio Lens
            </p>
            <h3 className="mt-8 max-w-sm text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              We design for the moment someone is deciding whether you feel right.
            </h3>
            <div className="mt-8 grid gap-3">
              {["Calm structure", "Thoughtful details", "A clearer identity"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.032] px-4 py-3 text-sm font-semibold text-white/68"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section
        className="py-0"
        eyebrow="Our Philosophy"
        title="Principles We Design By"
        description="A small set of rules keeps the work focused, balanced, and easy to live with."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="group relative min-h-[230px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.056),rgba(22,216,255,0.024)_38%,rgba(124,60,255,0.07)_78%,rgba(0,0,31,0.48))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_74px_rgba(0,0,31,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.58),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 text-white transition duration-300 group-hover:bg-white/[0.08]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-9 text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Inside The Build"
        title="The details are quiet, but they hold the whole website together."
        description="Behind the visual layer, we keep the structure organized so the site feels smooth to use and easier to maintain."
      >
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.052),rgba(0,0,31,0.52))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_86px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(22,216,255,0.014)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_74%)]" />
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {buildDetails.map(({ title, Icon }) => (
              <article
                key={title}
                className="flex min-h-[118px] items-center gap-4 rounded-2xl border border-white/10 bg-[#00001F]/44 p-5 text-white transition duration-300 hover:border-cyan-300/24 hover:bg-white/[0.045]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-white/82">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Featured Client"
        title="A clearer home for Organise With Kopal"
        description="One curated client note, kept here as a quiet example of the kind of clarity we care about."
      >
        <article className={`${glassCardClass} relative overflow-hidden p-6 text-white sm:p-9`}>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.64),rgba(124,60,255,0.52),transparent)]" />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-cyan-100/16 bg-cyan-100/[0.055] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100/72">
                Organise With Kopal
              </p>
              <h3 className="mt-8 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A calm, polished website for a personal organizing brand.
              </h3>
            </div>
            <div>
              <p className="text-xl leading-9 text-white/74 sm:text-2xl sm:leading-10">
                &quot;She delivered the website within 2 days - at an affordable price. All edits were done within minutes.&quot;
              </p>
              <p className="mt-6 text-sm font-semibold text-white">
                Kopal Dhir
              </p>
              <p className="mt-1 text-sm text-white/48">
                Founder at Organise With Kopal
              </p>
            </div>
          </div>
        </article>
      </Section>

      <Section className="pt-0">
        <div className={`${glassCardClass} relative overflow-hidden p-6 text-center text-white sm:p-10`}>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.64),rgba(124,60,255,0.52),transparent)]" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/44">
            Start With Clarity
          </p>
          <h2 className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something clear and memorable.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            We help businesses create websites that feel easier to understand and easier to trust.
          </p>
          <Button
            asChild
            className={`mt-8 h-12 rounded-full px-7 text-base font-bold ${neonButtonClass}`}
          >
            <CalendlyLink>
              Start Your Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CalendlyLink>
          </Button>
        </div>
      </Section>
    </>
  );
}
