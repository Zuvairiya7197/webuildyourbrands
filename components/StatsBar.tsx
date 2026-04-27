"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

type StatsBarProps = {
  stats: StatItem[];
};

function CountUpValue({
  value,
  suffix = "",
  isActive
}: {
  value: number;
  suffix?: string;
  isActive: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const duration = 1200;
    const startedAt = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isActive, value]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

export default function StatsBar({ stats }: StatsBarProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = barRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="mx-auto grid max-w-6xl gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(22,216,255,0.04)_34%,rgba(124,60,255,0.1)_68%,rgba(0,0,31,0.42))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_90px_rgba(0,0,31,0.28),0_14px_60px_rgba(53,92,255,0.12)] backdrop-blur-xl md:grid-cols-3"
    >
      {stats.map(({ value, suffix, label }, index) => (
        <div
          key={label}
          className={cn(
            "group relative min-h-[132px] overflow-hidden rounded-xl px-6 py-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_48px_rgba(22,216,255,0.1)]",
            index > 0 && "md:before:absolute md:before:left-[-6px] md:before:top-6 md:before:h-[calc(100%-3rem)] md:before:w-px md:before:bg-white/10"
          )}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.75),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
          <p className="text-4xl font-black tracking-tight text-white tabular-nums sm:text-6xl">
            <CountUpValue value={value} suffix={suffix} isActive={isVisible} />
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition duration-300 group-hover:text-white/82">
            {label}
          </p>
          <div
            className="mx-auto mt-5 h-1 max-w-32 overflow-hidden rounded-full bg-white/10"
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full bg-[image:var(--button-gradient)] transition-[width] duration-1000 ease-out"
              style={{ width: isVisible ? `${Math.max(value, 8)}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
