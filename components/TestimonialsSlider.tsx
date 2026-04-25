"use client";

import { useState } from "react";
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
  const active = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative mx-auto max-w-3xl">
      <article className="relative rounded-2xl border border-white/10 bg-white/14 px-5 pb-6 pt-12 text-center shadow-[0_20px_70px_rgba(0,0,31,0.28)] backdrop-blur-xl sm:px-8">
        <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white text-[#5b00b5] shadow-[0_12px_30px_rgba(0,0,31,0.28)]">
          <Quote className="h-7 w-7 fill-current" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
          {active.title}
        </h3>
        <div className="mt-4 flex justify-center gap-1 text-[#ffe500]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/86">
          {active.quote}
        </p>
        <div className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white/14 backdrop-blur-xl" />
      </article>

      <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="inline-flex items-center gap-4 text-left">
          <Image
            src={active.image}
            alt={`${active.name} testimonial`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-full bg-black object-cover"
          />
          <div>
            <h4 className="text-base font-bold text-white">{active.name}</h4>
            <p className="mt-1 text-sm text-white/62">{active.role}</p>
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
    </div>
  );
}
