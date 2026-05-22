"use client";

import Link from "next/link";
import { type MouseEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  FileSearch,
  PanelsTopLeft,
  PenTool,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { cn } from "@/lib/utils";

type ServicesSolutionItem = {
  title: string;
  description: string;
  icon: "penTool" | "rocket" | "fileSearch" | "panelsTopLeft" | "calendarDays";
  cta?: string;
};

type ServicesSolutionCardsProps = {
  services: ServicesSolutionItem[];
};

const icons: Record<ServicesSolutionItem["icon"], LucideIcon> = {
  penTool: PenTool,
  rocket: Rocket,
  fileSearch: FileSearch,
  panelsTopLeft: PanelsTopLeft,
  calendarDays: CalendarDays,
};

export function ServicesSolutionCards({ services }: ServicesSolutionCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");

    const updateMobileState = () => {
      setIsMobile(mobileQuery.matches);
      setActiveIndex((current) =>
        current >= 0 && current < services.length ? current : 0,
      );
    };

    updateMobileState();
    mobileQuery.addEventListener("change", updateMobileState);

    return () => {
      mobileQuery.removeEventListener("change", updateMobileState);
    };
  }, [services.length]);

  const handleCardClick = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (!isMobile || activeIndex === index) {
      return;
    }

    event.preventDefault();
    setActiveIndex(index);
  };

  return (
    <div className="what-you-get-cards">
      {services.map(({ title, description, icon, cta }, index) => {
        const isActive = activeIndex === index;
        const Icon = icons[icon];
        const cardClassName = cn(
          "what-you-get-card",
          cta && "what-you-get-card-ready",
          isActive && "is-active",
        );
        const cardContent = (
          <>
            <div className="what-you-get-card-glow" aria-hidden="true" />
            <div className="what-you-get-card-head">
              <div className="what-you-get-card-icon">
                <Icon className="h-6 w-6" aria-hidden={true} />
              </div>
            </div>
            <div className="what-you-get-card-copy">
              <h3>{title}</h3>
              <p>{description}</p>
              {cta ? (
                <span className="what-you-get-card-cta">
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              ) : (
                <span className="what-you-get-card-link">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              )}
            </div>
          </>
        );

        return cta ? (
          <CalendlyLink
            key={title}
            className={cardClassName}
            aria-label="Book a free strategy call"
            aria-expanded={isMobile ? isActive : undefined}
            onClick={(event) => handleCardClick(event, index)}
          >
            {cardContent}
          </CalendlyLink>
        ) : (
          <Link
            key={title}
            href="/services"
            className={cardClassName}
            aria-label={`${title}: view services`}
            aria-expanded={isMobile ? isActive : undefined}
            onClick={(event) => handleCardClick(event, index)}
          >
            {cardContent}
          </Link>
        );
      })}
    </div>
  );
}
