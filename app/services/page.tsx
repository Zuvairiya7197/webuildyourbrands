import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardList,
  Gauge,
  LifeBuoy,
  MousePointerClick,
  Paintbrush,
  Palette,
  PanelsTopLeft,
  Search,
  ShoppingBag,
  Smartphone,
  Zap
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
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
    need: "New business or starting fresh",
    service: "Website Design & Development",
    href: "#services"
  },
  {
    need: "Running ads or campaigns",
    service: "Landing Page Design",
    href: "#services"
  },
  {
    need: "Existing site feels outdated",
    service: "Website Redesign",
    href: "#services"
  }
];

const flowSteps = ["Strategy", "Design", "Development", "Optimization"];

const differentiators = [
  "Built from scratch",
  "Clear communication",
  "Mobile-first thinking",
  "Designed with intention"
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Website services built around clarity, design, and performance."
        description="Choose the right mix of strategy, design, development, and support for your current stage."
        videoSrc="/Serviceshero.mp4"
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />

      <section className="px-4 pt-10 sm:px-8 sm:pt-12 lg:px-24 lg:pt-14 xl:px-32">
        <div className="mx-auto flex w-full flex-wrap gap-2 border-y border-white/10 py-5">
          {serviceBadges.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/58"
            >
              <Icon className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </section>

      <Section
        id="services"
        className="scroll-mt-24 pt-10 sm:pt-12 lg:pt-16"
        eyebrow="Services"
        title="Browse what we offer"
        description="A compact service catalog for common website needs."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.064),rgba(22,216,255,0.026)_38%,rgba(124,60,255,0.08)_78%,rgba(0,0,31,0.5))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.68),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative h-52 overflow-hidden bg-[#00001F]/66">
                <Image
                  src={service.image}
                  alt={`${service.title} service visual`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain object-center p-2 transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02),rgba(0,0,31,0.2)_52%,rgba(0,0,31,0.82))]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-[#00001F]/62 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                  <service.Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#00001F]/62 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100/66 backdrop-blur-md">
                  {service.category}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  {service.summary}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
                    Best For
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/76">
                    {service.bestFor}
                  </p>
                </div>

                <ul className="mt-5 grid gap-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm leading-6 text-white/68"
                    >
                      <Check
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-100"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 rounded-full border-white/12 bg-white/[0.035] px-4 text-xs font-bold hover:bg-white hover:text-[#00001F]"
                  >
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className={`h-10 rounded-full px-4 text-xs font-bold ${neonButtonClass}`}
                  >
                    <CalendlyLink>
                      Get Started
                    </CalendlyLink>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Start Here"
        title="Not sure what you need?"
        description="Pick the closest situation and use it as your starting point."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {decisionPaths.map((path) => (
            <Link
              key={path.need}
              href={path.href}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#00001F]/44 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
                  Start
                </p>
                <ArrowRight className="h-4 w-4 text-cyan-100/58 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="mt-7 text-sm font-semibold leading-7 text-white/62">
                {path.need}
              </p>
              <h2 className="mt-3 text-xl font-bold text-white">
                {path.service}
              </h2>
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
                key={step}
                className="group relative rounded-[24px] border border-white/10 bg-white/[0.035] p-5 text-center transition duration-300 hover:border-cyan-300/24 hover:bg-white/[0.055]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/48">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step}
                </h3>
                {index < flowSteps.length - 1 ? (
                  <ArrowDown
                    className="mx-auto mt-5 h-4 w-4 text-white/34 md:absolute md:-right-2 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:-rotate-90"
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
        eyebrow="Why Choose Us"
        title="A focused studio approach"
      >
        <div className={`${glassCardClass} p-5 text-white sm:p-8`}>
          <div className="grid gap-3 md:grid-cols-2">
            {differentiators.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-white/76"
              >
                <Check className="h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className={`${glassCardClass} relative overflow-hidden p-6 text-center text-white sm:p-10`}>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.6),transparent)]" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/44">
            Choose Clearly
          </p>
          <h2 className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Need clarity on what your website actually needs?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            We help businesses choose the right mix of strategy, design, and development.
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
