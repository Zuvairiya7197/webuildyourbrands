import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { neonButtonClass } from "@/lib/utils";

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden border-t border-cyan-300/10 px-5 py-14 text-white sm:px-8 lg:px-10">
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

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src="/rocket.webp"
            alt="Rocket"
            width={160}
            height={160}
            className="h-32 w-32 shrink-0 object-contain sm:h-40 sm:w-40"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/48">
              Start your project
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Ready to elevate your brand?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              We build clarity-driven websites that help businesses grow, stand
              out, and convert.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-7 text-sm font-bold sm:w-fit lg:justify-self-end ${neonButtonClass}`}
        >
          Get In Touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
