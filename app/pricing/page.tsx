import type { Metadata } from "next";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Website packages for launch, growth, and premium custom brand websites."
};

const tiers = [
  {
    name: "LAUNCH",
    subtitle: "Perfect for businesses getting online the right way",
    price: "$ 599",
    note: "One-time payment • No monthly fees",
    cta: "Get Started",
    features: [
      "1-3 High-Impact Pages",
      "Mobile-Optimized Design",
      "Fast Loading Speed",
      "Basic SEO Setup",
      "Contact Form"
    ]
  },
  {
    name: "GROWTH",
    subtitle: "Built to convert visitors into customers",
    price: "$ 999",
    note: "Most Popular • One-time payment",
    cta: "Book A Call",
    featured: true,
    features: [
      "5-8 Conversion-Focused Pages",
      "Custom UI/UX Design",
      "SEO Optimization Setup",
      "Speed Optimization (Core Web Vitals)",
      "Lead-Driven Layout Strategy"
    ]
  },
  {
    name: "PREMIUM",
    subtitle: "For scaling businesses",
    price: "$ 1599+",
    note: "For serious businesses that want a competitive edge",
    cta: "Let's Build",
    features: [
      "Fully Custom Website",
      "Advanced UI/UX Experience",
      "Integrations (Forms, CRM, Payments, etc.)",
      "E-commerce / Advanced Features",
      "Full Branding + Strategy Support"
    ]
  }
];

export default function PricingPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--site-gradient)] px-5 pb-20 pt-40 text-white sm:px-8 sm:pt-44 lg:px-10">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(124,60,255,0.22),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(22,216,255,0.12),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(34,0,103,0.38),transparent_38%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Website packages built for clear growth.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Choose the right launch path for your brand, from lean websites to
            fully custom conversion systems.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className={`h-12 rounded-full px-6 text-base font-bold ${neonButtonClass}`}
            >
              <a href="#packages">
                Compare Packages
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-6 text-base font-bold"
            >
              <CalendlyLink>
                Book A Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CalendlyLink>
            </Button>
          </div>
        </div>

        <div id="packages" className="mt-24 grid scroll-mt-24 items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`pricing-card ${tier.featured ? "pricing-card-featured" : ""}`}
            >
              {tier.featured && (
                <div className="pricing-badge">
                  Most Popular
                </div>
              )}

              <div className="pricing-card-shine" aria-hidden="true" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="pricing-card-kicker">Plan 0{index + 1}</p>
                    <h2 className="pricing-card-title">{tier.name}</h2>
                  </div>
                  <span className="pricing-card-mark" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <p className="pricing-card-subtitle">
                  {tier.subtitle}
                </p>

                <div className="pricing-price-panel">
                  <p className="pricing-price">{tier.price}</p>
                  <p className="pricing-note">{tier.note}</p>
                </div>

                <ul className="mt-8 grid gap-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-7 text-white/78"
                    >
                      <ChevronRight
                        className="mt-1 h-4 w-4 shrink-0 text-[#8aa2ff]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <Button
                    asChild
                    variant={tier.featured ? "default" : "outline"}
                    className={
                      tier.featured
                        ? `h-12 w-full rounded-full px-6 text-base font-bold ${neonButtonClass}`
                        : "h-12 w-full rounded-full px-6 text-base font-bold"
                    }
                  >
                    <CalendlyLink>
                      {tier.cta}
                    </CalendlyLink>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
