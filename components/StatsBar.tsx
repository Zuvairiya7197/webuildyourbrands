"use client";

import type { CSSProperties } from "react";
import { memo, useEffect, useRef, useState } from "react";

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
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const node = pinRef.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const scrollableDistance = Math.max(rect.height - viewportHeight, viewportHeight * 0.65);
      const progressed = viewportHeight * 0.72 - rect.top;
      const nextProgress = Math.min(Math.max(progressed / scrollableDistance, 0), 1);

      setScrollProgress(nextProgress);
    };

    let frameId = 0;
    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div ref={pinRef} className="stats-signal-pin">
      <div className="stats-signal">
        <div className="stats-signal-field" aria-hidden="true" />
        <div className="stats-signal-header">
          <div>
            <p>Built To Perform</p>
            <h3>Conversion signals tuned before launch.</h3>
          </div>
          <span>Live website readiness</span>
        </div>

        <div className="stats-signal-rails">
          {stats.map(({ value, suffix, status, label }, index) => {
            const revealPoint = index / Math.max(stats.length, 1);
            const isRowVisible = scrollProgress >= revealPoint + 0.04 || scrollProgress >= 0.96;

            return (
              <article
                key={label}
                className={`stats-signal-row${isRowVisible ? " stats-signal-row--visible" : ""}`}
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties & Record<string, string>}
              >
                <span className="stats-signal-index">0{index + 1}</span>
                <strong className="stats-signal-value">
                  <CountUpValue value={value} suffix={suffix} isActive={isRowVisible} />
                </strong>
                <div className="stats-signal-copy">
                  <h4>{status ?? label}</h4>
                  <p>{label}</p>
                </div>
                <div className="stats-signal-track" aria-hidden="true">
                  <span style={{ width: isRowVisible ? `${value}%` : "0%" }} />
                  <i style={{ left: isRowVisible ? `${Math.min(value, 98)}%` : "0%" }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(StatsBar);
