"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ----------------------------------------------------------------
 * ScrollReelTestimonials
 *
 * Visual appearance matches the site's TestimonialsSlider (full-width
 * transparent layout, 3-column fade reel, large serif quote mark,
 * white/80 text, #9b98aa author, h-10 arrow buttons).
 *
 * Functionality: counter-rotating scroll reel + per-character text rise.
 * ---------------------------------------------------------------- */

export interface ScrollReelTestimonial {
  quote: string;
  author: string;
  image: string;
  alt?: string;
}

export interface ScrollReelTestimonialsProps {
  testimonials: ScrollReelTestimonial[];
  charStaggerMs?: number;
  className?: string;
}

const CELL = 160;
const GAP = 10;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;
const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const QUOTE_CLASSES =
  "m-0 max-w-[820px] text-sm font-medium leading-[1.55] tracking-normal text-white/80 sm:text-lg lg:text-[1.42rem]";
const AUTHOR_CLASSES = "m-0 text-xs font-medium text-[#9b98aa] sm:text-sm";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Cell() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-[22px] border border-white/[0.12] bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      style={{ width: CELL, height: CELL }}
    />
  );
}

function Featured({ src, alt }: { src: string; alt?: string }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#00001F] shadow-[0_22px_64px_rgba(0,0,31,0.46),0_0_34px_rgba(124,60,255,0.16)]"
      style={{ width: CELL, height: CELL }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,216,255,0.08),transparent_44%,rgba(124,60,255,0.16))]" />
    </div>
  );
}

function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  className,
}: ScrollReelTestimonialsProps) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const count = testimonials.length;

  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const paginate = React.useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      const next = index + dir;
      if (next < 0 || next >= count) return;
      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    }
  };

  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell" } | { type: "featured"; i: number }> = [];
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    testimonials.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) {
        items.push({ type: "cell" }, { type: "cell" });
      }
    });
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    return items;
  }, [testimonials, count]);

  const sideCellCount = 4 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - index) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = testimonials[displayIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "relative isolate mx-auto w-full overflow-hidden pb-4 pt-0 [clip-path:inset(0)] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] sm:py-12 lg:min-h-[700px] lg:py-0",
        className
      )}
    >
      <div className="relative grid min-w-0 gap-0 overflow-visible sm:gap-8 lg:min-h-[700px] lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:items-center lg:overflow-hidden xl:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">

        {/* Reel — styled as the old testimonial-grid-fade photo grid */}
        <div className="testimonial-grid-fade relative mx-auto h-[min(112vw,500px)] w-full max-w-[650px] min-w-0 overflow-hidden rounded-[32px] [clip-path:inset(0_round_32px)] sm:h-[500px] sm:max-w-[650px] lg:mx-0 lg:h-[500px] lg:max-w-[820px]">
          <div className="absolute inset-0 flex items-center justify-center gap-[10px] opacity-90">
            {/* Left column — counter-rotates */}
            <div
              className="flex shrink-0 flex-col gap-[10px] will-change-transform motion-reduce:[transition:none!important]"
              style={colStyle(sideY)}
            >
              {Array.from({ length: sideCellCount }).map((_, i) => (
                <Cell key={i} />
              ))}
            </div>

            {/* Middle column — slides to active portrait */}
            <div
              className="flex shrink-0 flex-col gap-[10px] will-change-transform motion-reduce:[transition:none!important]"
              style={colStyle(middleY)}
            >
              {middleItems.map((item, i) =>
                item.type === "featured" ? (
                  <Featured
                    key={i}
                    src={testimonials[item.i].image}
                    alt={testimonials[item.i].alt}
                  />
                ) : (
                  <Cell key={i} />
                )
              )}
            </div>

            {/* Right column — counter-rotates */}
            <div
              className="flex shrink-0 flex-col gap-[10px] will-change-transform motion-reduce:[transition:none!important]"
              style={colStyle(sideY)}
            >
              {Array.from({ length: sideCellCount }).map((_, i) => (
                <Cell key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Content — overlaps the reel on desktop, same as old slider */}
        <div className="relative z-10 -mt-20 min-w-0 max-w-4xl overflow-visible px-3 sm:mt-0 sm:px-0 lg:-ml-20 lg:-mt-24 lg:overflow-hidden lg:pl-0 xl:-ml-28">
          <span
            className="mb-2 block font-serif text-[3.6rem] font-bold leading-none text-[#16d8ff]/8 [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.04))] sm:mb-7 sm:text-[6rem]"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Text stage: invisible sizer keeps height stable across quotes */}
          <div className="relative w-full overflow-hidden" aria-live="polite">
            <div
              aria-hidden="true"
              className="invisible flex min-h-[140px] flex-col gap-5"
            >
              <p className={QUOTE_CLASSES}>{current.quote}</p>
              <p className={AUTHOR_CLASSES}>{current.author}</p>
            </div>
            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col gap-5 will-change-[transform,opacity]",
                exiting && "scroll-reel-exit"
              )}
            >
              <p className={QUOTE_CLASSES}>
                <Chars
                  text={current.quote}
                  startIndex={0}
                  staggerMs={charStaggerMs}
                />
              </p>
              <p className={AUTHOR_CLASSES}>
                <Chars
                  text={current.author}
                  startIndex={current.quote.length + 6}
                  staggerMs={charStaggerMs}
                />
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex gap-3 sm:mt-9 sm:gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              disabled={index === 0}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.035] text-white/80 transition hover:border-white hover:bg-white/[0.08] hover:text-white disabled:cursor-default disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              disabled={index === count - 1}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.035] text-white/80 transition hover:border-white hover:bg-white/[0.08] hover:text-white disabled:cursor-default disabled:opacity-40"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollReelTestimonials;
