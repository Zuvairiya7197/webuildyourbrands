"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

export type ServiceCardData = {
  title: string;
  category: string;
  summary: string;
  bestFor: string;
  image: string;
  icon: ReactNode;
  highlights: string[];
};

export function ServiceCard({ service }: { service: ServiceCardData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.064),rgba(22,216,255,0.026)_38%,rgba(124,60,255,0.08)_78%,rgba(0,0,31,0.5))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.68),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative h-64 overflow-hidden bg-[#00001F]/66">
        <Image
          src={service.image}
          alt={`${service.title} service visual`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain object-center p-4 transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02),rgba(0,0,31,0.28)_58%,rgba(0,0,31,0.92))]" />
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-[#00001F]/62 text-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 group-hover:text-cyan-100">
          {service.icon}
        </div>
        <h2 className="absolute bottom-5 left-5 right-5 text-lg font-bold leading-tight tracking-tight text-white transition duration-300 group-hover:-translate-y-[3.5rem]">
          {service.title}
        </h2>

        <div className="absolute inset-x-5 bottom-5 grid translate-y-4 gap-2 opacity-0 transition duration-300 sm:grid-cols-2 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            type="button"
            variant="outline"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
            className="h-10 gap-1.5 whitespace-nowrap rounded-full border-white/12 bg-[#00001F]/72 px-3 text-xs font-bold backdrop-blur-md hover:bg-white hover:text-[#00001F]"
          >
            Learn More
            <ChevronDown
              className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </Button>
          <Button
            asChild
            className={`h-10 rounded-full px-4 text-xs font-bold ${neonButtonClass}`}
          >
            <CalendlyLink>Get Started</CalendlyLink>
          </Button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6">
          <p className="mt-6 text-sm leading-7 text-white/62">{service.summary}</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
              Best For
            </p>
            <p className="mt-1.5 text-sm font-semibold text-white/76">
              {service.bestFor}
            </p>
          </div>

          <ul className="mb-6 mt-6 grid gap-2.5">
            {service.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm leading-6 text-white/68"
              >
                <Check
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-100"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
