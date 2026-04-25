import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle
} from "lucide-react";
import { neonButtonClass } from "@/lib/utils";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/pricing" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

const quickLinks = [
  { label: "Terms & Condition", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "E-mail", href: "mailto:hello@webuildyourbrands.com" },
  { label: "WhatsApp", href: "https://wa.me/" }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/10 px-5 pb-8 pt-10 text-white sm:px-8 lg:px-10">
      <Image
        src="/footerbackround.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#00001F]/78" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 rounded-2xl border border-cyan-300/10 bg-[#05051a]/82 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_70px_rgba(22,216,255,0.06)] backdrop-blur-xl md:grid-cols-[1.2fr_0.9fr_0.9fr] md:items-center">
          <div className="flex items-start gap-5">
            <Image
              src="/rocket.webp"
              alt="Rocket"
              width={64}
              height={64}
              className="h-14 w-14 shrink-0 object-contain"
            />
            <p className="max-w-md text-sm font-semibold leading-7 text-white/78">
              We build clarity-driven websites that help businesses grow, stand
              out, and convert.
            </p>
          </div>
          <p className="border-cyan-300/10 text-sm font-bold text-white/85 md:border-l md:pl-10">
            Ready to elevate your brand?
          </p>
          <Link
            href="/contact"
            className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold ${neonButtonClass}`}
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 border-t border-cyan-300/10 pt-10 md:grid-cols-[1.25fr_0.7fr_0.9fr_0.9fr]">
          <div>
            <Image
              src="/wbyblogo.webp"
              alt="WEBuildYourBrands"
              width={150}
              height={70}
              className="h-auto w-36 object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              We are a wordpress site development company helping businesses
              build strong brands through clear strategy and modern design.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
                { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
                { label: "Email", href: "mailto:hello@webuildyourbrands.com", Icon: Mail },
                { label: "WhatsApp", href: "https://wa.me/", Icon: MessageCircle }
              ].map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white transition hover:-translate-y-0.5 hover:text-white active:scale-95"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Explore
            </h2>
            <div className="mt-5 grid gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Quick Links
            </h2>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block" aria-hidden="true" />
        </div>

        <p className="mt-10 border-t border-cyan-300/10 pt-5 text-center text-xs text-white/48">
          (c) 2026 We Build Your Brands. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
