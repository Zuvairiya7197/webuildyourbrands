import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { neonButtonClass } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#00001F] px-4 py-24 text-white sm:px-8 lg:px-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(22,216,255,0.14),transparent_36%),radial-gradient(circle_at_82%_74%,rgba(124,60,255,0.18),transparent_38%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <Eyebrow>404 / Not Found</Eyebrow>

        <h1 className="text-[5rem] font-bold leading-none tracking-tight text-white sm:text-[8rem]">
          <span className="bg-[image:linear-gradient(110deg,#16d8ff_0%,#7c3cff_100%)] bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          This page took a wrong turn.
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/56 sm:text-base">
          The page you&rsquo;re looking for doesn&rsquo;t exist, moved, or never got built. Let&rsquo;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold ${neonButtonClass}`}
          >
            Back to Home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <CalendlyLink className="inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition hover:border-white/[0.14] hover:bg-white/[0.08]">
            Talk to Us
          </CalendlyLink>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 pr-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/36">
            <Compass className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
            Try instead
          </span>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/64 transition hover:border-cyan-300/28 hover:bg-white/[0.08] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
