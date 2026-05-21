"use client";

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
      className="stats-signal"
    >
      <div className="stats-signal-field" aria-hidden="true" />
      <div className="stats-signal-header">
        <div>
          <p>Built To Perform</p>
          <h3>Conversion signals tuned before launch.</h3>
        </div>
        <span>Live website readiness</span>
      </div>

      <div className="stats-signal-rails">
        {stats.map(({ value, suffix, status, label }, index) => (
          <article key={label} className="stats-signal-row">
            <span className="stats-signal-index">0{index + 1}</span>
            <strong className="stats-signal-value">
              <CountUpValue value={value} suffix={suffix} isActive={isVisible} />
            </strong>
            <div className="stats-signal-copy">
              <h4>{status ?? label}</h4>
              <p>{label}</p>
            </div>
            <div className="stats-signal-track" aria-hidden="true">
              <span style={{ width: isVisible ? `${value}%` : "0%" }} />
              <i style={{ left: isVisible ? `${Math.min(value, 98)}%` : "0%" }} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default memo(StatsBar);
