import Link from "next/link";
import {
  BadgeDollarSign,
  BookOpenText,
  BriefcaseBusiness,
  CalendarDays,
  Eye,
  Layers3,
  Mail,
  Sparkles
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { neonButtonClass } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  videoSrc?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
};

export default function Hero({
  eyebrow = "Strategy. Design. Development.",
  title,
  description,
  videoSrc,
  primaryLabel = "Book a Call",
  primaryHref = CALENDLY_URL,
  secondaryLabel = "View Work",
  secondaryHref = "/projects"
}: HeroProps) {
  const renderHeroLink = (href: string, label: string) => {
    const isExternal = href.startsWith("http");
    const normalizedLabel = label.toLowerCase();
    const Icon = href === CALENDLY_URL || normalizedLabel.includes("book")
      ? CalendarDays
      : href.startsWith("mailto:") || normalizedLabel.includes("email")
        ? Mail
        : normalizedLabel.includes("service")
          ? Layers3
          : normalizedLabel.includes("pricing") || normalizedLabel.includes("package")
            ? BadgeDollarSign
            : normalizedLabel.includes("story") || normalizedLabel.includes("read")
              ? BookOpenText
              : normalizedLabel.includes("work") || normalizedLabel.includes("project")
                ? BriefcaseBusiness
                : Eye;
    const icon = (
      <Icon
        className="h-4 w-0 shrink-0 opacity-0 transition-[width,margin,opacity,transform] duration-300 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0.5 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-4 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
    );

    if (href === CALENDLY_URL) {
      return (
        <CalendlyLink className="group">
          {label}
          {icon}
        </CalendlyLink>
      );
    }

    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group"
      >
        {label}
        {icon}
      </Link>
    );
  };

  return (
    <section className="relative min-h-[min(820px,100svh)] overflow-hidden px-4 pb-14 pt-24 sm:px-8 sm:pt-32 lg:min-h-screen lg:px-24 xl:px-32">
      {videoSrc && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Brand website preview video"
          />
      )}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(129,0,255,0.18),transparent_34%),linear-gradient(135deg,rgba(0,0,31,0.58)_0%,rgba(0,0,31,0.42)_45%,rgba(47,0,86,0.34)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div
        className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl items-center justify-center text-center lg:min-h-[calc(100vh-7rem)]"
      >
        <div className="w-full max-w-5xl">
          <p className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/45 bg-[#00001F]/50 px-3 py-2 text-xs font-medium text-white shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md sm:mb-8 sm:px-4 sm:text-base">
            <Sparkles className="h-4 w-4 text-white sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="min-w-0 break-words">{eyebrow}</span>
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-normal text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)] min-[360px]:text-4xl sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p
            className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.75)] sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
          >
            {description}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">
            <Button
              asChild
              size="lg"
              className={`h-12 w-full gap-0 rounded-full px-6 text-base font-medium sm:w-auto ${neonButtonClass}`}
            >
              {renderHeroLink(primaryHref, primaryLabel)}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full gap-0 rounded-full px-6 text-base font-medium sm:w-auto"
            >
              {renderHeroLink(secondaryHref, secondaryLabel)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
