"use client";

import { type CSSProperties, type KeyboardEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BadgePlus, BriefcaseBusiness, Rocket, TrendingUp } from "lucide-react";

type ProblemAccordionItem = {
  title: string;
  cue: string;
  fit: string;
  outcome: string;
  icon: "rocket" | "badgePlus" | "briefcaseBusiness" | "trendingUp";
};

type ProblemAccordionCardsProps = {
  items: ProblemAccordionItem[];
};

const cardEase = [0.22, 1, 0.36, 1] as const;

const icons = {
  rocket: Rocket,
  badgePlus: BadgePlus,
  briefcaseBusiness: BriefcaseBusiness,
  trendingUp: TrendingUp
};

export function ProblemAccordionCards({ items }: ProblemAccordionCardsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 72, y: 30 });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)");

    if (mobileQuery.matches) {
      setActiveIndex(null);
      return;
    }

    const updateActiveCard = () => {
      frameRef.current = null;
      const container = containerRef.current;

      if (!container || items.length === 0) {
        return;
      }

      const scrollSection = container.closest<HTMLElement>(".problem-scroll-section");
      const rect = (scrollSection ?? container).getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollableDistance = Math.max(1, rect.height - viewportHeight);
      const progress = scrollSection
        ? Math.min(1, Math.max(0, -rect.top / scrollableDistance))
        : Math.min(
            1,
            Math.max(0, (viewportHeight * 0.82 - rect.top) / (viewportHeight * 0.82 + rect.height * 0.18))
          );
      const nextIndex = Math.min(items.length - 1, Math.floor(progress * (items.length + 1)));
      setActiveIndex(nextIndex);
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [items.length]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div
      ref={containerRef}
      className="problem-accordion"
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") {
          setActiveIndex((current) => current ?? 0);
        }
      }}
    >
      {items.map(({ title, cue, fit, outcome, icon }, index) => {
        const isActive = activeIndex === index;
        const isMuted = activeIndex !== null && !isActive;
        const Icon = icons[icon];

        return (
          <motion.article
            key={title}
            layout
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") {
                setActiveIndex(index);
              }
            }}
            onPointerMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              setCursor({
                x: ((event.clientX - bounds.left) / bounds.width) * 100,
                y: ((event.clientY - bounds.top) / bounds.height) * 100
              });
            }}
            onClick={() => {
              setActiveIndex((current) => (current === index ? null : index));
            }}
            onFocus={() => {
              if (!window.matchMedia("(max-width: 640px)").matches) {
                setActiveIndex(index);
              }
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            animate={{
              opacity: isMuted ? 0.5 : 1,
              scale: isActive ? 1.012 : isMuted ? 0.985 : 1
            }}
            transition={{ duration: 0.62, ease: cardEase, layout: { duration: 0.68, ease: cardEase } }}
            className={`problem-card ${isActive ? "is-active" : ""} ${isMuted ? "is-muted" : ""}`}
            style={
              {
                "--cursor-x": `${cursor.x}%`,
                "--cursor-y": `${cursor.y}%`
              } as CSSProperties
            }
          >
            <div className="problem-card__line" aria-hidden="true" />
            <div className="problem-card__glow" aria-hidden="true" />

            <div className="problem-card__top">
              <motion.div
                className="problem-card__icon"
                animate={{
                  rotate: isActive ? -7 : 0,
                  x: isActive ? 5 : 0,
                  y: isActive ? -4 : 0
                }}
                transition={{ duration: 0.58, ease: cardEase }}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </motion.div>

              <div className="problem-card__meta">
                <p>{cue}</p>
              </div>
            </div>

            <div className="problem-card__body">
              <motion.h3
                animate={{ y: isActive ? 0 : 10 }}
                transition={{ duration: 0.58, ease: cardEase }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="problem-card__reveal"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 18
                }}
                transition={{ duration: 0.5, delay: isActive ? 0.12 : 0, ease: cardEase }}
              >
                <p className="problem-card__fit">{fit}</p>
                <div className="problem-card__outcome">
                  <span>Outcome</span>
                  <strong>{outcome}</strong>
                </div>
              </motion.div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
