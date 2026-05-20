"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";

type StatItem = {
  value: number;
  suffix?: string;
  status?: string;
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

function StatsBar({ stats }: StatsBarProps) {
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
      className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_14%_12%,rgba(22,216,255,0.12),transparent_30%),radial-gradient(circle_at_92%_82%,rgba(124,60,255,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.46))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:p-6 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.58),transparent)]" />
      <p className="relative z-10 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
        Built To Perform
      </p>
      <div className="relative z-10 mt-7">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, suffix, status, label }) => (
            <div
              key={label}
              className="rounded-[20px] border border-white/10 bg-[#00001F]/34 px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
            >
              <p className="text-4xl font-black tracking-tight text-white tabular-nums">
                <CountUpValue value={value} suffix={suffix} isActive={isVisible} />
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100/68">
                {status ?? label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(StatsBar);
