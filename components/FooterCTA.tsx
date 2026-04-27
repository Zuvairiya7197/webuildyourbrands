"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

type TrailDot = {
  id: number;
  x: number;
  y: number;
};

const footerCtaCopy: Record<string, { eyebrow: string; title: string; description: string }> = {
  "/": {
    eyebrow: "Start your project",
    title: "Ready for a clearer website?",
    description:
      "We build clarity-driven websites that help businesses grow, stand out, and convert."
  },
  "/projects": {
    eyebrow: "Seen enough?",
    title: "Like what you see?",
    description:
      "Let us turn your idea into a polished website with the same clarity, structure, and care."
  },
  "/about": {
    eyebrow: "Build with clarity",
    title: "Want your brand to be understood?",
    description:
      "We help businesses turn scattered ideas into websites that feel clear, confident, and easy to trust."
  },
  "/services": {
    eyebrow: "Choose your service",
    title: "Need the right website support?",
    description:
      "From strategy to launch and optimization, we can shape the right service mix for your brand."
  },
  "/pricing": {
    eyebrow: "Pick your path",
    title: "Ready to choose your website package?",
    description:
      "Book a call and we will help you choose the package that fits your current stage."
  },
  "/contact": {
    eyebrow: "Let's talk",
    title: "Ready to discuss your website?",
    description:
      "Share your goals and we will help you find the clearest next step for your brand."
  }
};

const fallbackCopy = {
  eyebrow: "Start your project",
  title: "Ready to elevate your brand?",
  description:
    "We build clarity-driven websites that help businesses grow, stand out, and convert."
};

export default function FooterCTA() {
  const pathname = usePathname();
  const copy = footerCtaCopy[pathname] ?? fallbackCopy;
  const sliderRef = useRef<HTMLDivElement>(null);
  const lastTrailTime = useRef(0);
  const trailId = useRef(0);
  const [handleX, setHandleX] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);

  function createTrailDot(x: number, y: number) {
    const id = trailId.current + 1;
    trailId.current = id;

    setTrailDots((dots) => [...dots, { id, x, y }]);
    window.setTimeout(() => {
      setTrailDots((dots) => dots.filter((dot) => dot.id !== id));
    }, 600);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (isComplete || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const padding = 5;
    const handleWidth = 50;
    const min = padding;
    const max = rect.width - handleWidth - padding;
    const rawX = event.clientX - rect.left - handleWidth / 2;
    const x = Math.max(min, Math.min(rawX, max));
    const nextProgress = (x - min) / (max - min);

    setHandleX(x - padding);
    setProgress(nextProgress);

    if (event.timeStamp - lastTrailTime.current > 35) {
      createTrailDot(event.clientX - rect.left, event.clientY - rect.top);
      lastTrailTime.current = event.timeStamp;
    }

    if (nextProgress >= 0.985) {
      setIsComplete(true);
      setHandleX(max - padding);
      setProgress(1);

      window.setTimeout(() => {
        window.location.href = "/contact";
      }, 400);
    }
  }

  function handleMouseLeave() {
    if (isComplete) return;

    setHandleX(0);
    setProgress(0);
  }

  return (
    <div className="border-b border-cyan-300/10 py-14 text-white">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src="/rocket.webp"
            alt="Rocket"
            width={160}
            height={160}
            className="h-32 w-32 shrink-0 object-contain sm:h-40 sm:w-40"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/48">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              {copy.description}
            </p>
          </div>
        </div>
        <div
          className={`relative isolate h-[60px] w-[300px] max-w-full rounded-full before:absolute before:-inset-1 before:-z-10 before:rounded-full before:bg-[image:var(--button-gradient)] before:blur-[18px] before:transition-opacity before:duration-300 lg:justify-self-end ${
            progress > 0 || isComplete ? "before:opacity-65" : "before:opacity-15"
          }`}
        >
          <div
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative h-full w-full cursor-pointer overflow-hidden rounded-full border-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_0_26px_rgba(255,255,255,0.04),0_16px_34px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-colors duration-300 ${
              isComplete
                ? "border-[#220067] bg-[#220067]"
                : "border-white/35 bg-white/[0.055]"
            }`}
            aria-label="Get in touch"
          >
            <div
              className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.015)_42%,rgba(0,255,136,0.08))]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden rounded-full bg-[image:var(--button-gradient)] transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[image:var(--button-gradient)]" />
              <Image
                src="/wbyblogo.webp"
                alt=""
                fill
                sizes="340px"
                className="object-contain px-20 py-3 opacity-35 mix-blend-screen"
              />
            </div>
            <span
              className={`absolute inset-0 flex items-center justify-center pl-12 text-2xl font-bold tracking-[-0.01em] transition duration-300 ${
                isComplete ? "translate-x-4 opacity-0" : "opacity-100"
              }`}
            >
              Let&apos;s get started
            </span>
            <span
              className="absolute left-[5px] top-1/2 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-out"
              style={{ transform: `translate3d(${handleX}px, -50%, 0)` }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="#161616"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {trailDots.map((dot) => (
              <span
                key={dot.id}
                className="pointer-events-none absolute z-[5] h-1.5 w-1.5 animate-[trailFade_600ms_ease-out_forwards] rounded-full bg-[#00ff88] shadow-[0_0_12px_#00ff88]"
                style={{
                  left: dot.x,
                  top: dot.y,
                  transform: "translate(-50%, -50%)"
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
