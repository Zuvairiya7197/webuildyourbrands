import type { Metadata } from "next";
import { Check } from "lucide-react";
import CTA from "@/components/CTA";
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
    description:
      "We build fast, modern, conversion-focused websites that actually work for your business.",
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
    description:
      "High-converting pages built to turn visitors into leads or customers.",
    features: [
      "Sales pages",
      "Funnel landing pages",
      "Lead capture pages",
      "Product launch pages"
    ]
  },
  {
    title: "Website Redesign",
    description:
      "Already have a website but it feels outdated or messy? We upgrade it into something powerful.",
    features: [
      "UI/UX improvement",
      "Better structure & clarity",
      "Modern visual upgrade",
      "Performance fixes"
    ]
  },
  {
    title: "E-commerce Website Development",
    description:
      "Sell your products smoothly with a clean and optimized online store.",
    features: [
      "WooCommerce setup",
      "Payment gateway integration",
      "Cart & checkout optimization",
      "Product page design"
    ]
  },
  {
    title: "Brand Identity & Visual Design",
    description:
      "Because a website without branding is just pixels.",
    features: [
      "Logo design",
      "Color palette & typography",
      "Brand guidelines",
      "Visual consistency across website"
    ]
  },
  {
    title: "Website Maintenance & Support",
    description: "We don't disappear after launch.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Bug fixes",
      "Performance checks"
    ]
  },
  {
    title: "SEO & Performance Optimization",
    category: "Website Design Services",
    description:
      "Make sure your website doesn't just look good but also gets found.",
    features: [
      "On-page SEO setup",
      "Technical SEO fixes",
      "Speed optimization",
      "Basic keyword structure"
    ]
  },
  {
    title: "Conversion Optimization",
    description:
      "Turn visitors into customers instead of letting them bounce.",
    features: [
      "CTA placement strategy",
      "A/B testing guidance",
      "User journey improvement",
      "Layout optimization"
    ]
  },
  {
    title: "Website Strategy & Consultation",
    category: "Website Design Services",
    description:
      "Not sure what you need? We help you figure it out before you waste money.",
    features: [
      "Website planning",
      "Business-focused strategy",
      "Growth roadmap",
      "Structure & page mapping"
    ]
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
        align="center"
      />
      <Section
        className="pt-16"
        eyebrow="Services We Offer"
        title="Everything your website needs to look sharp, load fast, and convert."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`${glassCardClass} p-7 text-white transition duration-300 hover:-translate-y-1`}
            >
              {service.category && (
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#a88fc4]">
                  {service.category}
                </p>
              )}
              <h2 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                {service.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
