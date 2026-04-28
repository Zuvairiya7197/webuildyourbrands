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
    <div className="border-b border-cyan-300/10 py-10 text-white sm:py-14">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(250px,300px)] md:items-center lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex max-w-4xl flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
          <Image
            src="/rocket.webp"
            alt="Rocket"
            width={160}
            height={160}
            className="h-24 w-24 shrink-0 object-contain sm:h-32 sm:w-32 lg:h-40 lg:w-40"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/48">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              {copy.description}
            </p>
          </div>
        </div>
        <div
          className={`relative isolate mx-auto h-[56px] w-full max-w-[300px] rounded-full before:absolute before:-inset-1 before:-z-10 before:rounded-full before:bg-[image:var(--button-gradient)] before:blur-[18px] before:transition-opacity before:duration-300 sm:h-[60px] md:mx-0 md:w-[280px] md:max-w-[280px] md:justify-self-end lg:w-[420px] lg:max-w-[420px] ${
            progress > 0 || isComplete ? "before:opacity-65" : "before:opacity-15"
          }`}
        >
          <div
            ref={sliderRef}
            onTouchEnd={() => {
              window.location.href = "/contact";
            }}
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
                className="object-contain px-16 py-3 opacity-35 mix-blend-screen sm:px-20 md:px-14 lg:px-20"
              />
            </div>
            <span
              className={`absolute inset-0 flex items-center justify-center pl-11 text-lg font-bold tracking-[-0.01em] transition duration-300 sm:pl-12 sm:text-xl lg:text-2xl ${
                isComplete ? "translate-x-4 opacity-0" : "opacity-100"
              }`}
            >
              Let&apos;s get started
            </span>
            <span
              className="absolute left-[5px] top-1/2 z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-out sm:h-[50px] sm:w-[50px]"
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
