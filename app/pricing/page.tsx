import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Sparkles, Target } from "lucide-react";
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
    subtitle: "For getting online with confidence",
    bestFor: "New website",
    outcome: "Look credible fast",
    price: "$ 599",
    note: "One-time payment",
    cta: "Get Started",
    features: [
      "1-3 key pages",
      "Mobile-first design",
      "Contact-ready flow",
      "Basic SEO setup"
    ]
  },
  {
    name: "GROWTH",
    subtitle: "For turning visitors into inquiries",
    bestFor: "Most businesses",
    outcome: "More booked calls",
    price: "$ 999",
    note: "Recommended path",
    cta: "Book A Call",
    featured: true,
    features: [
      "5-8 focused pages",
      "Custom UI/UX",
      "Lead-driven layout",
      "Speed optimization"
    ]
  },
  {
    name: "PREMIUM",
    subtitle: "For brands that need a deeper system",
    bestFor: "Custom build",
    outcome: "Competitive edge",
    price: "$ 1599+",
    note: "Custom scope",
    cta: "Let's Build",
    features: [
      "Fully custom website",
      "Advanced UI/UX",
      "Integrations",
      "Strategy support"
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
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-100/58">
              Pick Your Path
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">
              Choose the level of trust your website needs to create.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58">
              Simple options. Clear outcomes. Book a call if you want help
              choosing the right path.
            </p>
          </div>

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

                <div className="pricing-fit-panel">
                  <div>
                    <p className="pricing-fit-label">Best for</p>
                    <p className="pricing-fit-value">{tier.bestFor}</p>
                  </div>
                  <Target className="h-5 w-5 text-cyan-100/70" aria-hidden="true" />
                </div>

                <div className="pricing-price-panel">
                  <p className="pricing-price">{tier.price}</p>
                  <p className="pricing-note">{tier.note}</p>
                </div>

                <div className="pricing-outcome">
                  <Sparkles className="h-4 w-4 text-cyan-100" aria-hidden="true" />
                  <span>{tier.outcome}</span>
                </div>

                <ul className="mt-5 grid gap-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5 text-white/76"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#8aa2ff]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
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
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
