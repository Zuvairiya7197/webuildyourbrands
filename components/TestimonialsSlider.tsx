"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};

export function TestimonialsSlider({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const active = testimonials[activeIndex];

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
      className="relative mx-auto max-w-4xl"
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
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(22,216,255,0.05)_34%,rgba(124,60,255,0.12)_70%,rgba(0,0,31,0.38))] px-5 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_80px_rgba(0,0,31,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 sm:px-10 sm:py-10"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          setIsPaused(true);
        }}
        onTouchEnd={(event) => {
          handleTouchEnd(event.changedTouches[0].clientX);
          setIsPaused(false);
        }}
      >
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.7),transparent)]" />
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-[#5b00b5] shadow-[0_12px_30px_rgba(0,0,31,0.28),0_0_34px_rgba(22,216,255,0.18)]">
          <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
        </div>
        <h3 className="mx-auto max-w-2xl text-xl font-bold leading-tight text-white sm:text-2xl">
          {active.title}
        </h3>
        <div className="mt-5 flex justify-center gap-1 text-[#ffe500]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">
          {active.quote}
        </p>
        <div className="mx-auto mt-7 h-1 max-w-56 overflow-hidden rounded-full bg-white/12">
          <div
            key={activeIndex}
            className="h-full rounded-full bg-[image:var(--button-gradient)]"
            style={{ width: isPaused ? "45%" : "100%", transition: "width 6.5s linear" }}
          />
        </div>
      </article>

      <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="inline-flex items-center gap-4 text-left">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-[#00001F]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Image
              src={active.image}
              alt={`${active.name} testimonial`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">{active.name}</h4>
            <p className="mt-1 text-sm leading-6 text-white/62">{active.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
          <div className="flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${item.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/30 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
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
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition duration-300 ${
              index === activeIndex
                ? "border-cyan-300/26 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_40px_rgba(22,216,255,0.08)]"
                : "border-white/10 bg-white/[0.035] hover:border-white/18 hover:bg-white/[0.07]"
            }`}
            aria-pressed={index === activeIndex}
          >
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#00001F]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="48px"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-white">
                {item.name}
              </span>
              <span className="mt-1 block truncate text-xs text-white/52">
                {item.title}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
