"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
};

const cardMotion = {
  type: "spring",
  stiffness: 86,
  damping: 22,
  mass: 0.9
} as const;

function getCircularOffset(index: number, activeIndex: number, total: number) {
  const offset = (index - activeIndex + total) % total;

  return offset === total - 1 ? -1 : offset;
}

function TestimonialsSliderComponent({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const previousOffsets = useRef<Map<number, number>>(new Map());

  const slides = useMemo(
    () =>
      testimonials.map((testimonial) => testimonial),
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

    const intervalId = window.setInterval(goToNext, 3600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goToNext, isPaused, slides.length]);

  useEffect(() => {
    previousOffsets.current = new Map(
      slides.map((_, index) => [
        index,
        getCircularOffset(index, activeIndex, slides.length)
      ])
    );
  }, [activeIndex, slides]);

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
      className="relative mx-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Cinematic testimonial carousel"
    >
      <div
        className="relative -mx-4 h-[430px] overflow-hidden px-4 [mask-image:linear-gradient(90deg,transparent,black_13%,black_87%,transparent)] sm:-mx-8 sm:h-[470px] sm:px-8 lg:-mx-24 lg:h-[500px] lg:px-24 xl:-mx-32 xl:px-32"
        style={{ perspective: "1400px" }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          setIsPaused(true);
        }}
        onTouchEnd={(event) => {
          handleTouchEnd(event.changedTouches[0].clientX);
          setIsPaused(false);
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-12 h-52 bg-[radial-gradient(ellipse_at_center,rgba(22,216,255,0.16),transparent_62%)] blur-2xl" />
        <div className="absolute inset-0 mx-auto max-w-7xl">
          {slides.map((testimonial, index) => {
            const offset = getCircularOffset(index, activeIndex, slides.length);
            const distance = Math.abs(offset);
            const isCenter = offset === 1;
            const isVisible = offset >= 0 && offset <= 2;
            const previousOffset = previousOffsets.current.get(index);
            const shouldJumpInFromLoop = previousOffset === -1 && offset === 2;
            const x =
              offset === -1
                ? -380
                : offset === 0
                  ? -380
                  : offset === 1
                    ? 58
                    : 496;
            const scale = 1;
            const opacity = isVisible ? 1 : 0;
            const blur = "blur(0px)";
            const rotateY = 0;
            const z = offset === -1 ? -160 : 0;

            return (
              <motion.article
                key={testimonial.name}
                role="button"
                tabIndex={isVisible ? 0 : -1}
                aria-label={`Center ${testimonial.name} testimonial`}
                onClick={() =>
                  setActiveIndex((index - 1 + slides.length) % slides.length)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex((index - 1 + slides.length) % slides.length);
                  }
                }}
                className="group absolute left-1/2 top-8 h-[370px] w-[82vw] max-w-[410px] -translate-x-1/2 cursor-pointer overflow-hidden rounded-[2px] border border-white/10 bg-[#00001F] shadow-[0_30px_100px_rgba(0,0,0,0.46)] outline-none transition-shadow duration-300 hover:shadow-[0_34px_110px_rgba(22,216,255,0.14)] sm:h-[410px] sm:w-[390px] lg:h-[430px]"
                style={{
                  pointerEvents: isVisible ? "auto" : "none",
                  zIndex: offset === -1 ? 1 : offset === 0 ? 30 : isCenter ? 24 : 18
                }}
                initial={false}
                animate={{
                  x,
                  scale,
                  opacity,
                  rotateY,
                  z,
                  filter: blur
                }}
                transition={shouldJumpInFromLoop ? { duration: 0 } : cardMotion}
              >
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    fill
                    sizes="(min-width: 1024px) 410px, 82vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(22,216,255,0.035)_38%,rgba(124,60,255,0.08)_72%,rgba(0,0,31,0.96))]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02)_0%,rgba(0,0,31,0.05)_34%,rgba(0,0,31,0.5)_67%,rgba(0,0,31,0.94)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-white/[0.06] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:p-7">
                  <p className="mx-auto line-clamp-4 max-w-[21rem] text-sm font-semibold leading-7 text-white/90 sm:text-[15px]">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/68">
                    <span>— {testimonial.name}</span>
                    <span className="flex gap-0.5 text-cyan-300 drop-shadow-[0_0_10px_rgba(22,216,255,0.45)]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3.5 w-3.5 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const TestimonialsSlider = memo(TestimonialsSliderComponent);
