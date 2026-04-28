"use client";

import { useEffect, useRef, useState } from "react";
import { Fingerprint, Smartphone, Zap } from "lucide-react";
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
  const statVisuals = [
    {
      Icon: Smartphone,
      status: "Responsive",
      tone: "from-cyan-300/22 to-blue-500/10"
    },
    {
      Icon: Zap,
      status: "Fast",
      tone: "from-violet-300/24 to-cyan-300/10"
    },
    {
      Icon: Fingerprint,
      status: "Custom",
      tone: "from-fuchsia-300/18 to-violet-500/10"
    }
  ];

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
      className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_12%_10%,rgba(22,216,255,0.14),transparent_30%),radial-gradient(circle_at_88%_85%,rgba(124,60,255,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_68%,rgba(0,0,31,0.5))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_90px_rgba(0,0,31,0.28),0_14px_60px_rgba(53,92,255,0.12)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.78),rgba(124,60,255,0.78),transparent)]" />
      <div className="relative z-10 px-4 pb-5 pt-6 text-center sm:px-8 sm:pt-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-100/58">
          Built To Convert
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-4xl">
          The first impression should already be doing the selling.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58">
          Mobile polish, speed, and custom design. No template shortcut.
        </p>
      </div>
      <div className="relative z-10 grid gap-3 md:grid-cols-3">
        {stats.map(({ value, suffix, label }, index) => {
        const { Icon, status, tone } = statVisuals[index] ?? statVisuals[0];
        const progress = isVisible ? value : 0;
        const arcColor =
          value === 0 ? "rgba(255,244,168,0.7)" : "rgba(22,216,255,0.92)";

        return (
        <div
          key={label}
          className={cn(
            "group relative min-h-[230px] overflow-hidden rounded-xl border border-white/10 px-5 py-5 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_48px_rgba(22,216,255,0.1)]",
            `bg-gradient-to-br ${tone}`
          )}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.75),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100/72">
              {status}
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/56 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(53,92,255,0.2)] transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full">
            <div
              className="absolute inset-0 rounded-full transition duration-1000 ease-out"
              style={{
                background: `conic-gradient(${arcColor} ${Math.max(progress, value === 0 && isVisible ? 8 : 0)}%, rgba(255,255,255,0.09) 0)`
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-2 rounded-full bg-[#05031f] shadow-[inset_0_0_26px_rgba(0,0,31,0.86)]" />
            <p className="relative text-4xl font-black tracking-tight text-white tabular-nums">
              <CountUpValue value={value} suffix={suffix} isActive={isVisible} />
            </p>
          </div>

          <p className="relative z-10 mx-auto mt-4 max-w-xs text-center text-sm font-bold leading-6 text-white/76 transition duration-300 group-hover:text-white/90">
            {label}
          </p>
          <div className="relative z-10 mx-auto mt-4 h-1 max-w-36 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div
              className="h-full rounded-full bg-[image:var(--button-gradient)] transition-[width] duration-1000 ease-out"
              style={{ width: isVisible ? `${Math.max(value, 8)}%` : "0%" }}
            />
          </div>
        </div>
        );
        })}
      </div>
    </div>
  );
}
