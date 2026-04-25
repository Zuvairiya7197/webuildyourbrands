import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    <section className="min-h-screen bg-[var(--site-gradient)] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Packages
          </h1>
        </div>

        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex min-h-[680px] flex-col overflow-visible rounded-[28px] border px-8 py-14 text-center ${
                tier.featured
                  ? "border-[#7b00c7]/70 bg-[#08041f] shadow-[0_0_80px_rgba(160,0,255,0.22)] lg:-mt-12"
                  : "border-white/10 bg-[#0b0620]"
              }`}
            >
              {tier.featured && (
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#c600ff] px-8 py-3 text-lg font-medium shadow-[0_18px_45px_rgba(198,0,255,0.45)]">
                  Most Popular
                </div>
              )}
              <div
                className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_12%_62%,rgba(96,0,150,0.38),transparent_36%)]"
                aria-hidden="true"
              />
              <div className="relative flex flex-1 flex-col">
                <h2 className="text-2xl font-bold tracking-tight text-[#ffdc55]">
                  {tier.name}
                </h2>
                <p className="mx-auto mt-6 max-w-xs text-lg italic leading-8 text-white/58">
                  {tier.subtitle}
                </p>
                <p className="mt-10 text-4xl font-bold tracking-tight">
                  {tier.price}
                </p>
                <p className="mx-auto mt-4 max-w-xs text-base leading-7 text-white/55">
                  {tier.note}
                </p>
                <ul className="mt-12 grid gap-7 text-left">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-xl leading-8 text-white/88"
                    >
                      <ChevronRight
                        className="mt-1 h-5 w-5 shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-14">
                  <Button
                    asChild
                    className={
                      tier.featured
                        ? `h-14 rounded-full px-8 text-xl font-bold ${neonButtonClass}`
                        : "h-14 rounded-full border border-white/22 bg-transparent px-8 text-xl font-bold text-white hover:bg-white/10"
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
