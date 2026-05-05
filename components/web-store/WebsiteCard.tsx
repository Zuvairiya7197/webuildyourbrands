"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import {
  CheckCircle2,
  Gauge,
  RotateCcw,
  Search,
  Smartphone,
  Target,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WebsiteStoreItem } from "@/lib/web-store-data";
import { cn } from "@/lib/utils";

type WebsiteCardProps = {
  website: WebsiteStoreItem;
};

const highlights = [
  { label: "Fast Loading", Icon: Zap },
  { label: "SEO Optimized", Icon: Search },
  { label: "Fully Responsive", Icon: Smartphone },
  { label: "Conversion Focused", Icon: Target }
];

const faceClass =
  "relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.055] bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.13),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(124,60,255,0.2),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.085),rgba(255,255,255,0.032)_42%,rgba(0,0,31,0.58))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_24px_80px_rgba(0,0,31,0.25)] backdrop-blur-2xl [backface-visibility:hidden]";

function WebsiteCard({ website }: WebsiteCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      id={website.id}
      className="group relative h-full scroll-mt-28 [perspective:1600px]"
    >
      <div
        className={cn(
          "relative h-full transition-transform duration-500 [transform-style:preserve-3d]",
          isFlipped && "min-h-[720px] sm:min-h-[680px]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div
          className={cn(
            faceClass,
            "transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/16 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_30px_92px_rgba(0,0,31,0.34),0_0_36px_rgba(22,216,255,0.09)]",
            isFlipped && "pointer-events-none opacity-0"
          )}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.88),rgba(22,216,255,0.72),transparent)]" />

          <div className="relative p-3 pb-2">
            <div className="overflow-hidden rounded-[22px] bg-[#00001F]/72 shadow-[0_14px_38px_rgba(0,0,31,0.26)]">
              <div className="flex h-8 items-center justify-between bg-[linear-gradient(90deg,rgba(255,255,255,0.075),rgba(124,60,255,0.1))] px-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="max-w-[12rem] truncate text-[9px] font-bold uppercase tracking-[0.18em] text-white/52">
                  Ready To Own
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-[#00001F]/70">
                <Image
                  src={website.thumbnail}
                  alt={`${website.title} ready-made website thumbnail`}
                  fill
                  sizes={
                    "(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02),rgba(0,0,31,0.2)_52%,rgba(0,0,31,0.86))]" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00001F]/72 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/78 shadow-[0_10px_24px_rgba(0,0,31,0.24)] backdrop-blur-md">
                    <Search
                      className="h-3.5 w-3.5 text-cyan-100"
                      aria-hidden="true"
                    />
                    SEO {website.seoScore}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00001F]/72 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/78 shadow-[0_10px_24px_rgba(0,0,31,0.24)] backdrop-blur-md">
                    <Gauge
                      className="h-3.5 w-3.5 text-cyan-100"
                      aria-hidden="true"
                    />
                    Speed {website.performanceScore}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 pt-1">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-100/52">
                  Ready-made website
                </p>
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {website.title}
                </h2>
              </div>
              <div className="shrink-0 rounded-2xl bg-[linear-gradient(145deg,rgba(22,216,255,0.16),rgba(124,60,255,0.12))] px-3 py-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_22px_rgba(0,0,31,0.18)]">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-50/58">
                  From
                </p>
                <p className="text-lg font-black text-white">{website.price}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {highlights.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-white/[0.045] px-3 py-2 text-[10px] font-bold text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-cyan-100" />
                  {label}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="mt-4 flex min-h-11 w-full items-center justify-between rounded-2xl bg-[#00001F]/32 px-4 py-3 text-left text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View details
              <span className="rounded-full bg-white/[0.06] px-2 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-cyan-100/62">
                Flip
              </span>
            </button>

            <div className="mt-auto grid gap-2 pt-4 sm:grid-cols-2">
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-3 text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_10px_26px_rgba(0,0,31,0.2)] hover:bg-white/[0.1] hover:text-white sm:px-4 sm:text-xs"
              >
                <Link
                  href={website.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  Preview Website
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-full border-0 bg-[linear-gradient(120deg,#001173_0%,#220067_58%,#4b0bbd_100%)] px-3 text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-3px_0_rgba(0,0,31,0.28),0_12px_28px_rgba(34,0,103,0.3),0_0_28px_rgba(124,60,255,0.2)] hover:-translate-y-1 hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-3px_0_rgba(0,0,31,0.24),0_18px_36px_rgba(34,0,103,0.36),0_0_34px_rgba(22,216,255,0.16)] sm:px-4 sm:text-xs"
              >
                <Link
                  href={`/contact?website=${website.id}`}
                  className="whitespace-nowrap"
                >
                  Own This Website
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div
          onClick={() => setIsFlipped(false)}
          className={cn(
            faceClass,
            "absolute inset-0 cursor-pointer [transform:rotateY(180deg)]"
          )}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.88),rgba(22,216,255,0.72),transparent)]" />
          <div className="flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/58">
                  Website Details
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  {website.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsFlipped(false);
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white transition hover:bg-white hover:text-[#00001F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Back to website card"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/66">
              {website.description}
            </p>

            <ul className="mt-5 grid gap-2 text-sm leading-5 text-white/68">
              {website.features.slice(4).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-xl bg-white/[0.04] px-3 py-2 text-[12px]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-100"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {website.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#00001F]/42 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] text-white/48"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-auto pt-5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white/34">
              Click anywhere to return
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default memo(WebsiteCard);
