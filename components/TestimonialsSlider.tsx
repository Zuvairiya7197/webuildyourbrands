"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function TestimonialsSlider({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const touchStartX = useRef<number | null>(null);
  const active = testimonials[activeIndex];
  const hasImage = Boolean(active.image && !failedImages.has(active.image));
  const initials = getInitials(active.name);

  const handleImageError = (image?: string) => {
    if (!image) {
      return;
    }

    setFailedImages((current) => {
      const next = new Set(current);
      next.add(image);
      return next;
    });
  };

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
        className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(22,216,255,0.05)_30%,rgba(124,60,255,0.13)_68%,rgba(0,0,31,0.44))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_100px_rgba(0,0,31,0.34)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_34px_110px_rgba(22,216,255,0.1),0_24px_90px_rgba(124,60,255,0.18)] sm:rounded-[28px] sm:p-5"
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
        <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-300/12 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[#7c3cff]/18 blur-3xl" />

        <div className="relative grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative hidden aspect-[4/5] min-h-[360px] overflow-hidden rounded-[20px] border border-white/10 bg-[#00001F]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[22px] lg:block">
            {hasImage ? (
              <Image
                src={active.image ?? ""}
                alt={`${active.name} testimonial`}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
                onError={() => handleImageError(active.image)}
              />
            ) : (
              <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_34%,rgba(22,216,255,0.2),transparent_28%),radial-gradient(circle_at_35%_68%,rgba(124,60,255,0.32),transparent_34%),linear-gradient(145deg,#05031f,#170044_58%,#00001f)]">
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/18 shadow-[0_0_90px_rgba(22,216,255,0.16)]" />
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-white/16 bg-white/[0.075] text-4xl font-black tracking-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_70px_rgba(0,0,31,0.36)] backdrop-blur-xl">
                  {initials}
                </div>
                <div className="absolute inset-x-10 bottom-24 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.65),transparent)]" />
                <div className="absolute bottom-12 left-10 right-10 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={item}
                      className="h-1 rounded-full bg-[image:var(--button-gradient)] opacity-70"
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02),rgba(0,0,31,0.18)_42%,rgba(0,0,31,0.9))]" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#00001F]/62 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/76 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              Client Story
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
              <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/72">
                  Featured Client
                </p>
                <h4 className="mt-2 text-2xl font-bold text-white">
                  {active.name}
                </h4>
                <p className="mt-1 text-sm leading-6 text-white/66">{active.role}</p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[320px] flex-col justify-between rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,rgba(0,0,31,0.58),rgba(20,0,58,0.46),rgba(255,255,255,0.05))] p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:min-h-[360px] sm:rounded-[22px] sm:p-8">
            <div>
              <div className="mb-7 flex items-center justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-white text-[#5b00b5] shadow-[0_14px_36px_rgba(0,0,31,0.3),0_0_34px_rgba(22,216,255,0.18)]">
                  <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
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
              <h3 className="max-w-2xl text-xl font-bold leading-tight text-white sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/76 sm:mt-6 sm:text-base sm:leading-8">
                {active.quote}
              </p>
            </div>

            <div className="mt-8">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {["Clearer brand", "Fast edits", "Trusted build"].map((item) => (
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
                        onError={() => handleImageError(active.image)}
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center bg-[image:var(--button-gradient)] text-sm font-black tracking-tight text-white">
                        {initials}
                      </span>
                    )}
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
                    className="h-10 w-10 rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                    className="h-10 w-10 rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
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
