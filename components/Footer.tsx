import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/pricing" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

const quickLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Packages", href: "/pricing" },
  { label: "Portfolio", href: "/projects" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/10 px-5 pt-14 text-white sm:px-8 lg:px-10">
      <Image
        src="/footerbackround.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#00001F]/86" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(124,60,255,0.18),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(22,216,255,0.12),transparent_28%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.75fr_0.85fr] lg:gap-16">
          <div className="max-w-sm">
            <Image
              src="/wbyblogo.webp"
              alt="WEBuildYourBrands"
              width={150}
              height={70}
              className="h-auto w-40 object-contain"
            />
            <p className="mt-5 text-sm leading-7 text-white/70">
              We are a wordpress site development company helping businesses
              build strong brands through clear strategy and modern design.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/10 bg-white/[0.04] text-white/82 transition hover:-translate-y-0.5 hover:border-cyan-300/24 hover:bg-white/[0.08] hover:text-white active:scale-95"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
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
              Resources
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

        </div>

        <div className="flex flex-col gap-4 border-t border-cyan-300/10 py-6 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 We Build Your Brands. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
