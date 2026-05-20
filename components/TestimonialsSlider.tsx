"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
};

const testimonialMotion = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1]
} as const;

function TestimonialsSliderComponent({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides = useMemo(
    () => testimonials.map((testimonial) => testimonial),
    [testimonials]
  );

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(goToNext, 4600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goToNext, isPaused, slides.length]);

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

  const activeTestimonial = slides[activeIndex];
  const portrait = activeTestimonial.image ?? "/project-organise-with-kopal.webp";

  return (
    <div
      className="relative mx-auto w-full overflow-hidden py-8 sm:py-12 lg:min-h-[560px] lg:py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Client testimonial carousel"
    >
      <div className="pointer-events-none absolute inset-y-0 left-[44%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(22,216,255,0.12),transparent)] lg:block" />

      <div
        className="relative grid gap-3 sm:gap-8 lg:min-h-[560px] lg:grid-cols-[0.39fr_0.61fr] lg:items-start"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          setIsPaused(true);
        }}
        onTouchEnd={(event) => {
          handleTouchEnd(event.changedTouches[0].clientX);
          setIsPaused(false);
        }}
      >
        <div className="relative mx-auto h-[300px] w-full max-w-[340px] overflow-hidden sm:h-[460px] sm:max-w-[460px] lg:mx-0 lg:h-[560px] lg:max-w-[560px]">
          <div className="absolute left-1/2 top-1/2 grid aspect-square w-[min(100%,340px)] -translate-x-1/2 -translate-y-1/2 grid-cols-3 grid-rows-3 gap-3 opacity-70 sm:w-[min(100%,440px)] sm:gap-4 lg:w-[min(100%,540px)] lg:gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[18px] border border-white/[0.05] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
              >
                {index === 4 ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial.name}
                      className="relative h-full w-full overflow-hidden rounded-[inherit] border border-white/10 bg-[#00001F] shadow-[0_22px_64px_rgba(0,0,31,0.46),0_0_34px_rgba(124,60,255,0.16)]"
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -14, scale: 0.98 }}
                      transition={testimonialMotion}
                    >
                      <Image
                        src={portrait}
                        alt={`${activeTestimonial.name} testimonial`}
                        fill
                        sizes="(min-width: 1024px) 167px, (min-width: 640px) 136px, 105px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,216,255,0.08),transparent_44%,rgba(124,60,255,0.16))]" />
                    </motion.div>
                  </AnimatePresence>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl lg:pl-10 lg:pt-0">
          <span
            className="mb-2 block font-serif text-[3.6rem] font-bold leading-none text-[#16d8ff]/8 [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.04))] sm:mb-7 sm:text-[6rem]"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.quote}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={testimonialMotion}
            >
              <p className="max-w-[820px] text-sm font-medium leading-[1.55] tracking-normal text-white/80 sm:text-lg lg:text-[1.42rem]">
                {activeTestimonial.quote}
              </p>
              <p className="mt-5 text-xs font-medium text-[#9b98aa] sm:text-sm">
                {activeTestimonial.name}, {activeTestimonial.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.035] text-white/80 transition hover:border-white hover:bg-white/[0.08] hover:text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.035] text-white/80 transition hover:border-white hover:bg-white/[0.08] hover:text-white"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TestimonialsSlider = memo(TestimonialsSliderComponent);
