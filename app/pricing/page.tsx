import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

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
    <section className="relative min-h-screen overflow-hidden bg-[var(--site-gradient)] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
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
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex min-h-[620px] flex-col overflow-visible p-7 text-left transition duration-300 hover:-translate-y-1 ${
                glassCardClass
              } ${
                tier.featured
                  ? "border-[#7c3cff]/70 shadow-[0_24px_90px_rgba(23,70,216,0.18),0_0_44px_rgba(124,60,255,0.22)] lg:-mt-8"
                  : "border-white/10"
              }`}
            >
              {tier.featured && (
                <div className="absolute left-7 top-0 z-10 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[image:var(--button-gradient)] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(23,70,216,0.28)]">
                  Most Popular
                </div>
              )}
              <div
                className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_18%_16%,rgba(124,60,255,0.22),transparent_34%),radial-gradient(circle_at_86%_72%,rgba(22,216,255,0.08),transparent_30%)]"
                aria-hidden="true"
              />
              <div className="relative flex flex-1 flex-col">
                <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-white/58">
                  {tier.name}
                </h2>
                <p className="mt-5 min-h-14 text-lg font-semibold leading-7 text-white">
                  {tier.subtitle}
                </p>
                <p className="mt-9 text-5xl font-bold tracking-tight">
                  {tier.price}
                </p>
                <p className="mt-4 min-h-14 text-sm leading-7 text-white/58">
                  {tier.note}
                </p>
                <ul className="mt-9 grid gap-5">
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
                    <Link href="/contact">{tier.cta}</Link>
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
