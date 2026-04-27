import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Check,
  Gauge,
  Layers3,
  RefreshCcw,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Target,
  Wrench
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { glassCardClass } from "@/lib/utils";

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
      "Fast, modern, conversion-focused websites built around your offer, audience, and next step.",
    outcome: "Best for complete website launches",
    image: "/Website Design & Development ICON.webp",
    Icon: Layers3,
    features: [
      "Custom website design",
      "SEO-ready structure",
      "WordPress development",
      "Speed optimization",
      "Mobile-first responsive design"
    ]
  },
  {
    title: "Landing Page Design",
    category: "Conversion",
    description:
      "Focused pages built for campaigns, launches, and offers that need one clear action.",
    outcome: "Best for lead generation",
    image: "/Landing Page Design.webp",
    Icon: Target,
    features: [
      "Sales pages",
      "Funnel landing pages",
      "Lead capture pages",
      "Product launch pages"
    ]
  },
  {
    title: "Website Redesign",
    category: "Upgrade",
    description:
      "Already have a website but it feels outdated or messy? We reshape it into something sharper.",
    outcome: "Best for improving trust quickly",
    image: "/Website Redesign.webp",
    Icon: RefreshCcw,
    features: [
      "UI/UX improvement",
      "Better structure & clarity",
      "Modern visual upgrade",
      "Performance fixes"
    ]
  },
  {
    title: "E-commerce Website Development",
    category: "Commerce",
    description:
      "Clean online stores designed to make browsing, buying, and checkout feel simple.",
    outcome: "Best for selling products online",
    image: "/E-commerce Website Development.webp",
    Icon: ShoppingBag,
    features: [
      "WooCommerce setup",
      "Payment gateway integration",
      "Cart & checkout optimization",
      "Product page design"
    ]
  },
  {
    title: "Brand Identity & Visual Design",
    category: "Brand System",
    description:
      "A stronger visual foundation so your website feels consistent, recognizable, and intentional.",
    outcome: "Best before a new website build",
    image: "/Brand Identity & Visual Design.webp",
    Icon: Brush,
    features: [
      "Logo design",
      "Color palette & typography",
      "Brand guidelines",
      "Visual consistency across website"
    ]
  },
  {
    title: "Website Maintenance & Support",
    category: "Support",
    description: "Ongoing care for updates, fixes, security, and performance after launch.",
    outcome: "Best for keeping the site healthy",
    image: "/Website Maintenance & Support.webp",
    Icon: ShieldCheck,
    features: [
      "Regular updates",
      "Security monitoring",
      "Bug fixes",
      "Performance checks"
    ]
  },
  {
    title: "SEO & Performance Optimization",
    category: "Visibility",
    description:
      "Make sure your website does not just look good, but loads fast and can be found.",
    outcome: "Best for better search readiness",
    image: "/SEO & Performance Optimization.webp",
    Icon: Gauge,
    features: [
      "On-page SEO setup",
      "Technical SEO fixes",
      "Speed optimization",
      "Basic keyword structure"
    ]
  },
  {
    title: "Conversion Optimization",
    category: "Growth",
    description:
      "Improve the structure, CTAs, and page flow so more visitors know what to do next.",
    outcome: "Best for improving inquiries",
    image: "/Conversion Optimization.webp",
    Icon: BadgeCheck,
    features: [
      "CTA placement strategy",
      "A/B testing guidance",
      "User journey improvement",
      "Layout optimization"
    ]
  },
  {
    title: "Website Strategy & Consultation",
    category: "Planning",
    description:
      "Not sure what you need yet? We help you make the website plan clear before spending.",
    outcome: "Best before design starts",
    image: "/Website Strategy & Consultation.webp",
    Icon: SearchCheck,
    features: [
      "Website planning",
      "Business-focused strategy",
      "Growth roadmap",
      "Structure & page mapping"
    ]
  }
];

const serviceSystems = [
  {
    title: "Plan the Message",
    description:
      "We clarify the offer, audience, page structure, and conversion goal before the visuals take over.",
    Icon: SearchCheck
  },
  {
    title: "Build the Experience",
    description:
      "We turn the plan into responsive sections, clear navigation, polished visuals, and a smooth user flow.",
    Icon: Wrench
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
        title="Strategic services for websites that need to win trust fast."
        description="Choose a focused service or combine them into a complete website launch."
        videoSrc="/Serviceshero.mp4"
        primaryLabel="View Services"
        primaryHref="#services"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
        align="center"
      />
      <Section
        id="services"
        className="pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Services We Offer"
        title="Everything your website needs to look sharp, load fast, and convert."
        description="Pick one focused service, or combine multiple services into a complete website system."
      >
        <div className="grid gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative grid overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.48))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_90px_rgba(22,216,255,0.12),0_18px_70px_rgba(124,60,255,0.16)] lg:grid-cols-[0.38fr_0.62fr]"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative min-h-[220px] overflow-hidden bg-[#00001F]/70 lg:min-h-full">
                <Image
                  src={service.image}
                  alt={`${service.title} service visual`}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-contain object-center p-5 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02)_0%,rgba(0,0,31,0.18)_48%,rgba(0,0,31,0.68)_100%)]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-[#00001F]/62 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(53,92,255,0.22)] backdrop-blur-md transition duration-300 group-hover:border-cyan-300/28 group-hover:bg-[image:var(--button-gradient)]">
                  <service.Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/12 bg-[#00001F]/56 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white/62 backdrop-blur-md transition duration-300 group-hover:text-cyan-100/80">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col p-7 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100/58">
                  {service.category}
                </p>
                <h2 className="mt-3 max-w-2xl bg-[linear-gradient(135deg,#fff4a8_0%,#f5ca4a_42%,#d99019_76%,#fff0a0_100%)] bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-white/70">
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

      <section className="px-5 pb-24 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`${glassCardClass} p-8 text-white`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
              Service System
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
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
                className="group flex gap-5 rounded-[24px] border border-white/10 bg-[#00001F]/44 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055]"
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
    </>
  );
}
