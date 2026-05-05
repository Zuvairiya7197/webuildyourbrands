import Link from "next/link";
import { CheckCircle2, Store } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { websiteStoreItems } from "@/lib/web-store-data";
import { neonButtonClass } from "@/lib/utils";
import WebStoreGrid from "./WebStoreGrid";

const storeBenefits = [
  "Launch faster than a custom build",
  "Built with SEO-friendly structure",
  "Responsive, conversion-focused layouts"
];

export default function WebStorePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-24 xl:px-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,216,255,0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(124,60,255,0.24),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/72">
              <Store className="h-4 w-4" aria-hidden="true" />
              Web Store
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Buy ready-made websites built to load fast and convert.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Explore ready-made websites for sale with strong SEO foundations,
              responsive layouts, optimized WebP previews, and clear inquiry
              paths for service brands, educators, creators, and founders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className={`h-12 rounded-full px-7 text-base font-bold ${neonButtonClass}`}
              >
                <Link href="#ready-made-websites">Browse Websites</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-7">
                <Link href="/projects">View Custom Work</Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(0,0,31,0.5))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_28px_90px_rgba(0,0,31,0.28)] backdrop-blur-xl sm:p-7">
            <h2 className="text-xl font-bold tracking-tight">
              What every website includes
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/68">
              {storeBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <Section
        id="ready-made-websites"
        className="scroll-mt-24 pt-8 sm:pt-12 lg:pt-16"
        eyebrow="Ready-Made Websites For Sale"
        title="Choose a performance-optimized website and make it yours."
        description="Each website is designed with clean semantic sections, mobile-first layouts, SEO metadata patterns, and conversion-focused calls to action."
      >
        <WebStoreGrid websites={websiteStoreItems} />
      </Section>
    </>
  );
}
