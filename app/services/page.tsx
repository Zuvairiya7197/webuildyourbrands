import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Gauge,
  LifeBuoy,
  MessagesSquare,
  MousePointerClick,
  Paintbrush,
  Palette,
  PanelsTopLeft,
  ShoppingBag,
  TrendingUp,
  Workflow
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, landing pages, branding, revamps, and SEO optimization for modern businesses."
};

const services = [
  {
    title: "Website Design & Development",
    category: "Core Build",
    description:
      "A custom website built to explain your offer clearly, build trust fast, and guide visitors toward inquiry.",
    outcome: "Best for complete website launches",
    image: "/Website Design & Development ICON.webp",
    Icon: PanelsTopLeft,
    features: [
      "Custom design that makes your brand feel trusted",
      "SEO-ready structure so your site can get found",
      "WordPress development that is easy to manage",
      "Faster load times so visitors do not leave",
      "Mobile-first design that works where most users are"
    ]
  },
  {
    title: "Landing Page Design",
    category: "Conversion",
    description:
      "Focused pages built to turn campaign traffic into leads with one clear message and one clear next step.",
    outcome: "Best for lead generation",
    image: "/Landing Page Design.webp",
    Icon: MousePointerClick,
    features: [
      "Sales pages that explain the offer fast",
      "Funnel pages that reduce decision friction",
      "Lead capture pages that make action easy",
      "Launch pages that guide attention to one goal"
    ]
  },
  {
    title: "Website Redesign",
    category: "Upgrade",
    description:
      "Turn an outdated or confusing website into a clearer experience that feels more trusted and easier to act on.",
    outcome: "Best for turning an underperforming site into a trusted one",
    image: "/Website Redesign.webp",
    Icon: Paintbrush,
    features: [
      "UI/UX improvements that make the site easier to use",
      "Clearer structure so visitors know what matters",
      "Modern visuals that improve first impressions",
      "Performance fixes so the experience feels smoother"
    ]
  },
  {
    title: "E-commerce Website Development",
    category: "Commerce",
    description:
      "Online stores designed to make browsing, choosing, and checkout feel simple enough to complete.",
    outcome: "Best for selling products online",
    image: "/E-commerce Website Development.webp",
    Icon: ShoppingBag,
    features: [
      "WooCommerce setup that gets your store ready to sell",
      "Payment integration that makes checkout simple",
      "Cart and checkout improvements that reduce drop-off",
      "Product pages that make buying decisions easier"
    ]
  },
  {
    title: "Brand Identity & Visual Design",
    category: "Brand System",
    description:
      "A visual foundation that makes your business look consistent, recognizable, and ready to be trusted.",
    outcome: "Best before a new website build",
    image: "/Brand Identity & Visual Design.webp",
    Icon: Palette,
    features: [
      "Logo design that gives your brand a clear mark",
      "Color and type choices that feel consistent",
      "Brand guidelines that keep the look aligned",
      "Website visuals that feel intentional everywhere"
    ]
  },
  {
    title: "Website Maintenance & Support",
    category: "Support",
    description: "Ongoing care that keeps your website updated, protected, and working smoothly after launch.",
    outcome: "Best for keeping the site healthy",
    image: "/Website Maintenance & Support.webp",
    Icon: LifeBuoy,
    features: [
      "Regular updates so your site stays current",
      "Security monitoring that reduces risk",
      "Bug fixes that protect the user experience",
      "Performance checks that keep pages feeling fast"
    ]
  },
  {
    title: "SEO & Performance Optimization",
    category: "Visibility",
    description:
      "Improve how your site loads, reads, and performs so visitors and search engines can understand it faster.",
    outcome: "Best for better search readiness",
    image: "/SEO & Performance Optimization.webp",
    Icon: Gauge,
    features: [
      "On-page SEO that helps Google understand your pages",
      "Technical fixes that remove hidden performance issues",
      "Speed optimization that keeps visitors engaged",
      "Keyword structure that supports better search intent"
    ]
  },
  {
    title: "Conversion Optimization",
    category: "Growth",
    description:
      "Improve page flow, messaging, and CTAs so more visitors understand the next step and take it.",
    outcome: "Best for improving inquiries",
    image: "/Conversion Optimization.webp",
    Icon: TrendingUp,
    features: [
      "CTA placement that makes action easier",
      "Testing guidance that shows what to improve",
      "User journey improvements that reduce confusion",
      "Layout updates that guide attention toward inquiry"
    ]
  },
  {
    title: "Website Strategy & Consultation",
    category: "Planning",
    description:
      "Get a clear website plan before you invest in design, development, or redesign work.",
    outcome: "Best before design starts",
    image: "/Website Strategy & Consultation.webp",
    Icon: ClipboardList,
    features: [
      "Website planning that removes guesswork",
      "Business-focused strategy tied to inquiries",
      "Growth roadmap that shows what to build next",
      "Page mapping that makes the site easier to navigate"
    ]
  }
];

const decisionPaths = [
  {
    need: "New business or starting fresh",
    service: "Website Design & Development"
  },
  {
    need: "Running ads or campaigns",
    service: "Landing Page Design"
  },
  {
    need: "Existing site not performing",
    service: "Website Redesign"
  }
];

const trustPoints = ["100% Custom Builds", "Fast Delivery", "Conversion-Focused"];

const differentiators = [
  "No templates - everything built from scratch",
  "Designed for leads, not just looks",
  "Clear communication throughout",
  "Focused on results and performance"
];

const serviceSystems = [
  {
    title: "Plan the Message",
    description:
      "We clarify the offer, audience, page structure, and conversion goal before the visuals take over.",
    Icon: MessagesSquare
  },
  {
    title: "Build the Experience",
    description:
      "We turn the plan into responsive sections, clear navigation, polished visuals, and a smooth user flow.",
    Icon: Workflow
  },
  {
    title: "Improve the Outcome",
    description:
      "We strengthen speed, SEO basics, CTAs, and trust signals so the site has a better chance to perform.",
    Icon: Gauge
  }
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Services designed to turn your website into a lead-generating system."
        description="Strategy, design, speed, and conversion - built to help you get more inquiries, not just a better-looking site."
        videoSrc="/Serviceshero.mp4"
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
        align="center"
      />

      <Section
        className="pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Start Here"
        title="Not sure what you need? Start here:"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {decisionPaths.map((path, index) => (
            <article
              key={path.need}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#00001F]/44 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/30">
                  0{index + 1}
                </span>
                <ArrowRight className="h-4 w-4 text-cyan-100/58 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="mt-7 text-sm font-semibold leading-7 text-white/62">
                {path.need}
              </p>
              <h2 className="mt-3 text-xl font-bold text-white">
                {path.service}
              </h2>
            </article>
          ))}
        </div>
      </Section>

      <section className="px-4 pb-8 sm:px-8 sm:pb-10 lg:px-24 lg:pb-12 xl:px-32">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 border-y border-white/10 py-5">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/58"
            >
              <Check className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              {point}
            </span>
          ))}
        </div>
      </section>

      <Section
        id="services"
        className="pt-8 sm:pt-10 lg:pt-12"
        eyebrow="Services We Offer"
        title="Everything your website needs to attract, convince, and convert visitors."
        description="Pick one focused service, or combine multiple services into a complete website system."
      >
        <div className="grid gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative grid overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.48))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_90px_rgba(22,216,255,0.12),0_18px_70px_rgba(124,60,255,0.16)] sm:rounded-[32px] lg:grid-cols-[0.38fr_0.62fr]"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative min-h-[240px] overflow-hidden bg-[#00001F]/70 sm:min-h-[320px] lg:min-h-full">
                <Image
                  src={service.image}
                  alt={`${service.title} service visual`}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-contain object-center transition duration-700 sm:object-cover sm:object-[center_58%] sm:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0)_0%,rgba(0,0,31,0.04)_48%,rgba(0,0,31,0.42)_100%)]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-[#00001F]/62 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(53,92,255,0.22)] backdrop-blur-md transition duration-300 group-hover:border-cyan-300/28 group-hover:bg-[image:var(--button-gradient)]">
                  <service.Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/12 bg-[#00001F]/56 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white/62 backdrop-blur-md transition duration-300 group-hover:text-cyan-100/80">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col p-5 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100/58">
                  {service.category}
                </p>
                <h2 className="mt-3 max-w-2xl bg-[linear-gradient(135deg,#fff4a8_0%,#f5ca4a_42%,#d99019_76%,#fff0a0_100%)] bg-clip-text text-xl font-bold tracking-tight text-transparent min-[360px]:text-2xl sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  {service.description}
                </p>
                <div className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/72 transition duration-300 group-hover:border-cyan-300/24 group-hover:text-white">
                  {service.outcome}
                </div>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-white/70"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-3 pt-7 text-xs font-bold uppercase tracking-[0.18em] text-white/36 transition duration-300 group-hover:text-white/78">
                  Included
                  <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.24),transparent)]" />
                  <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Why Choose Us"
        title="Built for decisions, not decoration."
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

      <section className="px-4 pb-16 sm:px-8 sm:pb-28 lg:px-24 lg:pb-32 xl:px-32">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`${glassCardClass} p-5 text-white sm:p-8`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
              Service System
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
              Services that connect instead of sitting in separate boxes.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              A website usually needs more than one task. Strategy, visuals,
              structure, performance, and conversion all work better when they
              are shaped together.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceSystems.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group flex gap-4 rounded-[24px] border border-white/10 bg-[#00001F]/44 p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055] sm:gap-5 sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/30">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section className="pt-0">
        <div className={`${glassCardClass} relative overflow-hidden p-6 text-center text-white sm:p-10`}>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.6),transparent)]" />
          <p className="mx-auto max-w-2xl text-sm font-semibold leading-7 text-white/64 sm:text-base">
            If your website isn&apos;t bringing inquiries, it&apos;s costing you every day.
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Get a Website Plan That Fits Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            No pressure. Just clarity on what your website needs.
          </p>
          <Button
            asChild
            className={`mt-8 h-12 whitespace-nowrap rounded-full px-5 text-sm font-bold sm:px-7 sm:text-base ${neonButtonClass}`}
          >
            <CalendlyLink>
              Book a Free Strategy Call →
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
