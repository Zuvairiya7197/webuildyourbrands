import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Gauge,
  PenTool,
  Search,
  Smartphone,
  Store,
  Zap
} from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { websiteStoreItems } from "@/lib/web-store-data";
import { neonButtonClass } from "@/lib/utils";
import WebStoreGrid from "./WebStoreGrid";

const storeBenefits = [
  { title: "SEO-ready structure", Icon: Search },
  { title: "Mobile-first layouts", Icon: Smartphone },
  { title: "Fast loading performance", Icon: Zap },
  { title: "Easy customization", Icon: PenTool },
  { title: "Conversion-focused pages", Icon: Gauge }
];

const readyMadePoints = [
  "Faster launch",
  "Lower cost",
  "Pre-built structure",
  "Quick customization"
];

const customPoints = [
  "Fully unique strategy",
  "Custom architecture",
  "Advanced scalability",
  "Brand-first experience"
];

export default function WebStorePage() {
  return (
    <>
      <section className="relative flex min-h-[min(620px,100svh)] items-center overflow-hidden px-4 pb-12 pt-0 sm:px-8 sm:pb-16 lg:px-24 lg:pb-16 xl:px-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,216,255,0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(124,60,255,0.24),transparent_38%)]" />
        <div className="relative mx-auto w-full max-w-6xl py-10 sm:py-14 lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/72">
              <Store className="h-4 w-4" aria-hidden="true" />
              Web Store
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-[4rem] xl:text-[4.45rem]">
              Browse launch-ready websites.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Pick a polished starting point and preview it instantly.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
        </div>
      </section>

      <Section
        id="ready-made-websites"
        className="scroll-mt-24 pt-8 sm:pt-12 lg:pt-16"
      >
        <div className="mb-7 flex flex-wrap gap-2">
          {["Fast", "SEO-ready", "Mobile-first", "Editable"].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/58"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
        <WebStoreGrid websites={websiteStoreItems} />
      </Section>

      <Section
        className="pt-0"
        eyebrow="Included"
        title="What every website includes"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {storeBenefits.map(({ title, Icon }) => (
            <article
              key={title}
              className="min-h-[150px] rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(22,216,255,0.025)_45%,rgba(0,0,31,0.48))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#00001F]/54 text-cyan-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-sm font-bold leading-6 text-white/82">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Choose Your Path"
        title="Ready-Made vs Custom"
        description="Both paths are polished. The right choice depends on how much flexibility and strategy you need."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            {
              title: "Ready-Made",
              note: "Best when you want a premium site quickly.",
              points: readyMadePoints
            },
            {
              title: "Custom",
              note: "Best when your brand, content, or workflow needs a tailored system.",
              points: customPoints
            }
          ].map(({ title, note, points }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(124,60,255,0.08)_68%,rgba(0,0,31,0.52))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl sm:p-8"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.64),transparent)]" />
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/58">{note}</p>
                </div>
                <Blocks className="h-6 w-6 shrink-0 text-cyan-100/72" aria-hidden="true" />
              </div>
              <div className="mt-7 grid gap-3">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.14),transparent_32%),radial-gradient(circle_at_86%_0%,rgba(124,60,255,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.54))] p-6 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_28px_90px_rgba(0,0,31,0.26)] backdrop-blur-xl sm:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/44">
            Custom Website
          </p>
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Need something built from scratch?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            We also design fully custom websites tailored to your business.
          </p>
          <Button
            asChild
            className={`mt-8 h-12 rounded-full px-7 text-base font-bold ${neonButtonClass}`}
          >
            <Link href="/projects">
              Explore Custom Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
