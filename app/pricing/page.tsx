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
    note: "Best for getting online fast without overthinking",
    cta: "Get Started",
    features: [
      "1-3 key pages",
      "Works smoothly where most users visit (mobile)",
      "Simple contact flow so visitors can reach you fast",
      "Basic SEO setup that helps Google understand your site"
    ]
  },
  {
    name: "GROWTH",
    subtitle: "For turning visitors into inquiries",
    bestFor: "Most businesses",
    outcome: "More booked calls",
    price: "$ 999",
    note: "Designed to bring consistent inquiries",
    cta: "Book a Free Call",
    featured: true,
    features: [
      "5-8 focused pages",
      "Custom UI/UX that builds trust faster",
      "Lead-driven layout that guides visitors to act",
      "Faster load times so visitors do not leave"
    ]
  },
  {
    name: "PREMIUM",
    subtitle: "For brands that need a deeper system",
    bestFor: "Custom build",
    outcome: "Competitive edge",
    price: "$ 1599+",
    note: "Built for brands that need a serious competitive edge",
    cta: "Request Custom Quote",
    features: [
      "Fully custom website built around your business goals",
      "Advanced UI/UX that improves trust and clarity",
      "Integrations that support your sales process",
      "Strategy support so the site has a clear plan"
    ]
  }
];

const trustPoints = ["100% Custom Built", "Fast Delivery", "Conversion-Focused"];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Choose the website that brings you more inquiries - not just a better design."
        description="Clear packages designed to help your business attract, build trust, and convert visitors into leads."
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
              Choose the right level for your business
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">
              Choose the level of trust your website needs to create.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58">
              Simple options. Clear outcomes. Book a call if you want help
              choosing the right path.
            </p>
            <p className="mx-auto mt-4 max-w-xl rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold leading-6 text-white/68">
              Not sure which plan fits you? We&apos;ll guide you on a quick call.
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

          <div className="mt-8 flex flex-wrap justify-center gap-2 border-y border-white/10 py-5">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/58"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-center text-sm font-semibold leading-7 text-white/62">
            Clear process. No confusion. Full support at every step.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 text-white sm:px-8 sm:pb-28 lg:px-24 lg:pb-32 xl:px-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.48))] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_26px_84px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:p-10">
          <p className="mx-auto max-w-2xl text-sm font-semibold leading-7 text-white/64 sm:text-base">
            If your website isn&apos;t bringing inquiries, it&apos;s costing you every day.
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-bold leading-tight sm:text-4xl">
            Ready to turn your website into a lead generator?
          </h2>
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
      </section>
    </>
  );
}
