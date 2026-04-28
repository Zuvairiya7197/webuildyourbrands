import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
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
    <>
      <Hero
        eyebrow="Pricing"
        title="Website packages built for clear growth."
        description="Choose the right launch path for your brand, from lean websites to fully custom conversion systems."
        videoSrc="/Serviceshero.mp4"
        primaryLabel="Compare Packages"
        primaryHref="#packages"
        secondaryLabel="Book A Call"
        secondaryHref={CALENDLY_URL}
      />

      <section className="relative overflow-hidden bg-[var(--site-gradient)] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-24 lg:py-32 xl:px-32">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(124,60,255,0.18),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(22,216,255,0.1),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(34,0,103,0.32),transparent_38%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <div id="packages" className="grid scroll-mt-24 items-stretch gap-6 lg:grid-cols-3">
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
                      <CheckCircle2
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
    </>
  );
}
