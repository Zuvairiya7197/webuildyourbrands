"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
};

const testimonialTags = ["Clearer brand", "Fast edits"];

function TestimonialsSliderComponent({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const active = testimonials[activeIndex];
  const hasImage = Boolean(active.image);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused || testimonials.length < 2) {
      return;
    }

    const intervalId = window.setInterval(goToNext, 6500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goToNext, isPaused, testimonials.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  const handleTouchEnd = (x: number) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = touchStartX.current - x;
    touchStartX.current = null;

    if (Math.abs(distance) < 48) {
      return;
    }

    if (distance > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Interactive testimonials"
    >
      <article
        key={active.name}
        className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(22,216,255,0.04)_30%,rgba(124,60,255,0.11)_68%,rgba(0,0,31,0.48))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_22px_74px_rgba(0,0,31,0.28)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 sm:rounded-[24px]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          setIsPaused(true);
        }}
        onTouchEnd={(event) => {
          handleTouchEnd(event.changedTouches[0].clientX);
          setIsPaused(false);
        }}
      >
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)]" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-52 w-52 rounded-full bg-[#7c3cff]/14 blur-3xl" />

        <div className="relative grid gap-4 lg:grid-cols-[260px_1fr]">
          <div className="relative hidden min-h-[300px] overflow-hidden rounded-[18px] border border-white/10 bg-[#00001F]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:block">
            {hasImage ? (
              <Image
                src={active.image ?? ""}
                alt={`${active.name} testimonial`}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02),rgba(0,0,31,0.18)_42%,rgba(0,0,31,0.9))]" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#00001F]/62 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/76 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              Client Story
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/72">
                  Featured Client
                </p>
                <h4 className="mt-1 text-xl font-bold text-white">
                  {active.name}
                </h4>
                <p className="mt-1 text-xs leading-5 text-white/66">{active.role}</p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[300px] flex-col justify-between rounded-[18px] border border-white/10 bg-[linear-gradient(145deg,rgba(0,0,31,0.58),rgba(20,0,58,0.46),rgba(255,255,255,0.05))] p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
            <div>
              <div className="mb-5 flex items-center justify-between gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/14 bg-white text-[#5b00b5] shadow-[0_14px_36px_rgba(0,0,31,0.3),0_0_34px_rgba(22,216,255,0.18)]">
                  <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
                </div>
                <div className="flex gap-1 text-[#ffe500]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/58">
                0{activeIndex + 1} / 0{testimonials.length}
              </p>
              <h3 className="max-w-2xl text-xl font-bold leading-tight text-white sm:text-2xl">
                {active.title}
              </h3>
              <p className="mt-4 line-clamp-4 max-w-2xl text-sm leading-7 text-white/72">
                {active.quote}
              </p>
            </div>

            <div className="mt-6">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {testimonialTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white/52 sm:text-[10px] sm:tracking-[0.14em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] lg:hidden">
                  <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/12 bg-[#00001F]/70">
                    {hasImage ? (
                      <Image
                        src={active.image ?? ""}
                        alt={`${active.name} testimonial`}
                        fill
                        sizes="56px"
                        className="object-cover object-center"
                      />
                    ) : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-white">
                      {active.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-5 text-white/58">
                      {active.role}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    aria-label="Previous testimonial"
                    className="h-9 w-9 rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                    className="h-9 w-9 rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/12">
                <div
                  key={activeIndex}
                  className="h-full rounded-full bg-[image:var(--button-gradient)]"
                  style={{
                    width: isPaused ? "45%" : "100%",
                    transition: "width 6.5s linear"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export const TestimonialsSlider = memo(TestimonialsSliderComponent);
