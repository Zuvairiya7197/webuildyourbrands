import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Instagram, Linkedin } from "lucide-react";
import {
  BackToTopButton,
  FooterInteractionShell
} from "@/components/FooterInteractionShell";

const FooterCTA = dynamic(() => import("@/components/FooterCTA"), {
  loading: () => null
});

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/webuildyourbrands",
    Icon: Linkedin
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_we_build_your_brands_/",
    Icon: Instagram
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589040772725",
    Icon: null
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919987448073?text=Hi%2C%20I%20want%20to%20discuss%20a%20website%20project.",
    Icon: null
  }
];

export default function Footer() {
  return (
    <FooterInteractionShell>
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
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover/footer:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--footer-spotlight-x) var(--footer-spotlight-y), rgba(22,216,255,0.16), rgba(124,60,255,0.08) 22%, transparent 42%)"
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <FooterCTA />

        <div className="grid gap-6 border-t border-cyan-300/10 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group/link relative flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.035] px-4 text-xs font-bold uppercase tracking-[0.14em] text-white/56 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/28 hover:bg-white/[0.07] hover:text-white"
                  >
                    {item.label}
                    <span className="absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-cyan-100/70 transition duration-300 group-hover/link:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <BackToTopButton />
        </div>

        <div className="flex flex-col gap-5 border-t border-cyan-300/10 py-6 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 We Build Your Brands. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link href="/privacy" className="transition hover:text-white hover:underline hover:underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white hover:underline hover:underline-offset-4">
              Terms
            </Link>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group/social flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/10 bg-white/[0.04] text-white/78 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-[image:var(--button-gradient)] hover:text-white hover:shadow-[0_0_26px_rgba(22,216,255,0.18)] active:scale-95"
                >
                  {Icon ? (
                    <Icon className="h-4 w-4 transition duration-300 group-hover/social:scale-110" aria-hidden="true" />
                  ) : label === "Facebook" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 transition duration-300 group-hover/social:scale-110"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M15.12 8.08h2.21V4.3A28.4 28.4 0 0 0 14.11 4c-3.19 0-5.37 1.95-5.37 5.54v3.08H5.14v4.23h3.6V24h4.43v-7.15h3.55l.56-4.23h-4.11V9.95c0-1.22.34-1.87 1.95-1.87Z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 32 32"
                      className="h-5 w-5 transition duration-300 group-hover/social:scale-110"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16.01 3.2c-6.95 0-12.6 5.56-12.6 12.4 0 2.34.67 4.6 1.94 6.56l-1.29 6.64 6.82-1.54a12.8 12.8 0 0 0 5.13 1.05c6.95 0 12.6-5.56 12.6-12.4s-5.65-12.71-12.6-12.71Zm0 22.86c-1.73 0-3.42-.44-4.91-1.28l-.36-.2-4.08.92.77-3.97-.24-.38a10.02 10.02 0 0 1-1.54-5.35c0-5.6 4.65-10.15 10.36-10.15s10.36 4.55 10.36 10.15-4.65 10.26-10.36 10.26Zm5.83-7.57c-.32-.16-1.9-.92-2.2-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.55-.95-.84-1.6-1.88-1.78-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.72-1.7-.98-2.33-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.58s1.13 3 1.29 3.21c.16.21 2.23 3.36 5.4 4.71.76.32 1.35.52 1.81.66.76.24 1.45.21 1.99.13.61-.09 1.9-.76 2.17-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.61-.37Z" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FooterInteractionShell>
  );
}
