"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Search, Smartphone, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const statVisuals = useMemo(
    () => [
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
        Icon: Target,
        status: "Conversion Focused",
        tone: "from-fuchsia-300/18 to-violet-500/10"
      },
      {
        Icon: Search,
        status: "SEO Ready",
        tone: "from-cyan-300/18 to-violet-500/10"
      }
    ],
    []
  );

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
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_14%_12%,rgba(22,216,255,0.12),transparent_30%),radial-gradient(circle_at_92%_82%,rgba(124,60,255,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.46))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:p-6 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.58),transparent)]" />
      <div className="relative z-10">
        <div className="grid gap-6 border-b border-white/10 pb-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
              Built To Perform
            </p>
            <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Performance that feels premium.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              Clean structure, fast loading, and conversion flow working quietly in the background.
            </p>
          </div>
          <div className="grid w-full max-w-sm grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-[#00001F]/34 lg:w-[360px]">
            {["Mobile", "Speed", "Leads"].map((item) => (
              <div
                key={item}
                className="border-r border-white/10 px-3 py-4 text-center last:border-r-0"
              >
                <span className="mx-auto mb-3 block h-1.5 w-7 rounded-full bg-[image:var(--button-gradient)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/56">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-7">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, suffix, status: itemStatus, label }, index) => {
        const { Icon, status, tone } = statVisuals[index] ?? statVisuals[0];
        const progress = isVisible ? value : 0;
        const arcColor =
          value === 0 ? "rgba(124,60,255,0.82)" : "rgba(22,216,255,0.92)";

        return (
        <div
          key={label}
          className={cn(
            "group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#00001F]/38 px-5 py-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.045]",
            `bg-gradient-to-br ${tone}`
          )}
        >
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="relative z-10 mt-8">
            <p className="text-4xl font-black tracking-tight text-white tabular-nums">
              <CountUpValue value={value} suffix={suffix} isActive={isVisible} />
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100/68">
              {itemStatus ?? status}
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/62 transition duration-300 group-hover:text-white/82">
              {label}
            </p>
          </div>

          <div className="relative z-10 mt-6 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div
              className="h-full rounded-full transition-[width] duration-1000 ease-out"
              style={{
                width: isVisible ? `${Math.max(progress, 8)}%` : "0%",
                background: arcColor
              }}
              aria-hidden="true"
            />
          </div>
        </div>
        );
        })}
        </div>
      </div>
    </div>
  );
}

export default memo(StatsBar);
