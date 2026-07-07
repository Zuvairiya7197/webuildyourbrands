import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardList,
  Compass,
  LifeBuoy,
  MousePointerClick,
  Paintbrush,
  Palette,
  PanelsTopLeft,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wrench,
  Zap
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium website design, development, landing pages, redesigns, branding, SEO, and website support for modern businesses."
};

const serviceBadges = [
  { label: "Custom Built", Icon: PanelsTopLeft },
  { label: "Mobile First", Icon: Smartphone },
  { label: "SEO Ready", Icon: Search },
  { label: "Fast Loading", Icon: Zap }
];

const services = [
  {
    title: "Website Design & Development",
    category: "Core Build",
    summary: "A polished custom website shaped around your business and offer.",
    bestFor: "Complete website launches",
    image: "/Website Design & Development ICON.webp",
    Icon: PanelsTopLeft,
    highlights: ["Custom page design", "Responsive development", "Launch-ready structure"]
  },
  {
    title: "Landing Page Design",
    category: "Campaigns",
    summary: "A focused page for one offer, one audience, and one clear next step.",
    bestFor: "Ads, offers, and launches",
    image: "/Landing Page Design.webp",
    Icon: MousePointerClick,
    highlights: ["Sharp page flow", "Offer-first layout", "Clear form or booking path"]
  },
  {
    title: "Website Redesign",
    category: "Upgrade",
    summary: "A cleaner, more modern version of a site that has outgrown its current look.",
    bestFor: "Existing websites",
    image: "/Website Redesign.webp",
    Icon: Paintbrush,
    highlights: ["Visual refresh", "Content restructuring", "Better mobile experience"]
  },
  {
    title: "E-commerce",
    category: "Commerce",
    summary: "A store experience that makes browsing products and checking out feel simple.",
    bestFor: "Product-based brands",
    image: "/E-commerce Website Development.webp",
    Icon: ShoppingBag,
    highlights: ["Product page layout", "Checkout setup", "Store navigation"]
  },
  {
    title: "Branding",
    category: "Identity",
    summary: "A visual foundation that keeps your website, content, and brand presence aligned.",
    bestFor: "New or evolving brands",
    image: "/Brand Identity & Visual Design.webp",
    Icon: Palette,
    highlights: ["Logo direction", "Color and type system", "Visual guidelines"]
  },
  {
    title: "SEO",
    category: "Visibility",
    summary: "A cleaner foundation for pages that need to be understood by people and search engines.",
    bestFor: "Search-ready websites",
    image: "/SEO & Performance Optimization.webp",
    Icon: Search,
    highlights: ["Page metadata", "Content structure", "Technical cleanup"]
  },
  {
    title: "Maintenance",
    category: "Support",
    summary: "Ongoing updates and care so your website stays stable after launch.",
    bestFor: "Active websites",
    image: "/Website Maintenance & Support.webp",
    Icon: LifeBuoy,
    highlights: ["Content updates", "Bug fixes", "Routine checks"]
  },
  {
    title: "Strategy",
    category: "Planning",
    summary: "A clear website direction before design or development begins.",
    bestFor: "Unclear next steps",
    image: "/Website Strategy & Consultation.webp",
    Icon: ClipboardList,
    highlights: ["Page planning", "Content priorities", "Build roadmap"]
  }
];

const decisionPaths = [
  {
    Icon: Rocket,
    need: "New business or starting fresh",
    explanation: "You need a first website that looks credible and works from day one.",
    service: "Website Design & Development",
    href: "#services"
  },
  {
    Icon: Zap,
    need: "Running ads or campaigns",
    explanation: "You need a focused page built to convert clicks into leads.",
    service: "Landing Page Design",
    href: "#services"
  },
  {
    Icon: Paintbrush,
    need: "Existing website feels outdated",
    explanation: "You need a modern rebuild without losing what already works.",
    service: "Website Redesign",
    href: "#services"
  },
  {
    Icon: Search,
    need: "Need better search visibility",
    explanation: "You need a site structured to be found and trusted by search engines.",
    service: "SEO",
    href: "#services"
  },
  {
    Icon: Wrench,
    need: "Need ongoing website support",
    explanation: "You need updates, fixes, and monitoring after launch.",
    service: "Maintenance",
    href: "#services"
  }
];

const flowSteps = [
  {
    title: "Strategy",
    description: "Understand the business, audience, offer, and website direction."
  },
  {
    title: "Design",
    description: "Create a clear visual system, layout direction, and user experience."
  },
  {
    title: "Development",
    description: "Build a responsive, fast, SEO-ready website structure."
  },
  {
    title: "Optimization",
    description: "Improve speed, content, SEO, analytics, and conversion performance."
  }
];

const differentiators = [
  "Custom-built websites",
  "Clear communication",
  "Mobile-first execution",
  "SEO-ready structure",
  "Fast-loading pages",
  "Designed with intention"
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Strategy. Design. Development. SEO."
        title="Websites built to grow your business, not just look good."
        description="Custom-built, mobile-first, SEO-ready websites designed with conversion in mind."
        videoSrc="/Serviceshero.mp4"
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />

      <section className="px-4 pt-10 sm:px-8 sm:pt-12 lg:px-24 lg:pt-14 xl:px-32">
        <div className="mx-auto flex w-full flex-wrap justify-center gap-2.5 border-y border-white/10 py-6 sm:gap-3">
          {serviceBadges.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(22,216,255,0.03)_45%,rgba(124,60,255,0.05))] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/64 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            >
              <Icon className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICE CARDS — DO NOT MODIFY. Grid, data, and ServiceCard    */}
      {/* internals below are locked per client instruction. Only the  */}
      {/* eyebrow/title/description wrapper above the grid may change. */}
      {/* ============================================================ */}
      <Section
        id="services"
        className="scroll-mt-24 pt-10 sm:pt-12 lg:pt-16"
        eyebrow="The Lineup"
        title="Choose the website solution that fits your next business move."
        description="Every service below is built from scratch around your business, not a template."
      >
        <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ Icon, ...service }) => (
            <ServiceCard
              key={service.title}
              service={{
                ...service,
                icon: <Icon className="h-5 w-5" aria-hidden="true" />
              }}
            />
          ))}
        </div>
      </Section>
      {/* ======================= END SERVICE CARDS ==================== */}

      <Section className="pt-0">
        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(120deg,rgba(22,216,255,0.07),rgba(0,0,31,0.5)_38%,rgba(124,60,255,0.1))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-8">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.6),rgba(124,60,255,0.5),transparent)]" />
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                <Sparkles className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
                Powered by Zuvi
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Need brand visuals too?
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                Your website is only one part of your digital presence. Through Zuvi, WBYB
                connects you with logos, social media creatives, brand kits, and marketing
                graphics that keep your brand consistent everywhere.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full shrink-0 gap-1.5 whitespace-nowrap rounded-full border-white/12 bg-white/[0.04] px-6 text-sm font-bold backdrop-blur-md transition duration-300 hover:border-cyan-300/28 hover:bg-white hover:text-[#00001F] sm:w-auto"
            >
              <a href="https://zuvi.zarrarpalekar.com/" target="_blank" rel="noopener noreferrer">
                Brand &amp; Graphic Design
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Start Here"
        title="Not sure what you need?"
        description="Pick the situation closest to yours and use it as your starting point."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {decisionPaths.map(({ Icon, need, explanation, service, href }) => (
            <Link
              key={need}
              href={href}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#00001F]/44 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/40 transition duration-300 group-hover:border-cyan-300/24 group-hover:text-cyan-100">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
                  Start
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-100/58" aria-hidden="true" />
                </span>
              </div>
              <h2 className="mt-6 text-lg font-bold leading-tight text-white">
                {need}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/56">
                {explanation}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                {service}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="How Services Connect"
        title="A simple flow from first idea to improvement."
      >
        <div className={`${glassCardClass} overflow-hidden p-5 text-white sm:p-8`}>
          <div className="grid gap-4 md:grid-cols-4">
            {flowSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-cyan-300/24 hover:bg-white/[0.055]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition duration-300 group-hover:text-cyan-100/48">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/56">
                  {step.description}
                </p>
                {index < flowSteps.length - 1 ? (
                  <ArrowDown
                    className="mx-auto mt-5 h-4 w-4 text-white/34 md:absolute md:-right-2 md:top-8 md:mt-0 md:-rotate-90"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Why Choose WBYB"
        title="A focused studio approach"
      >
        <div className={`${glassCardClass} p-5 text-white sm:p-8`}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-white/76"
              >
                <Check className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className={`${glassCardClass} relative overflow-hidden p-6 text-center text-white sm:p-10`}>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.6),transparent)]" />
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/44">
            <Compass className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
            Choose Clearly
          </p>
          <h2 className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Not sure what your website actually needs?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            WBYB helps you choose the right mix of strategy, design, development, SEO, and
            support based on where your business is right now.
          </p>
          <Button
            asChild
            className={`mt-8 h-12 whitespace-nowrap rounded-full px-5 text-sm font-bold sm:px-7 sm:text-base ${neonButtonClass}`}
          >
            <CalendlyLink>
              Book a Free Call
            </CalendlyLink>
          </Button>
        </div>
      </Section>
    </>
  );
}
