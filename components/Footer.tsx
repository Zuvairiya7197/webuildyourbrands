import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import FooterCTA from "@/components/FooterCTA";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/10 px-5 text-white sm:px-8 lg:px-10">
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
        <FooterCTA />

        <div className="flex flex-col gap-5 border-t border-cyan-300/10 py-6 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 We Build Your Brands. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/10 bg-white/[0.04] text-white/78 transition hover:-translate-y-0.5 hover:border-cyan-300/24 hover:bg-white/[0.08] hover:text-white active:scale-95"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
