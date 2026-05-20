"use client";

import { useEffect, useRef } from "react";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      section.classList.add("process-cinema-ready");
      return;
    }

    let context: { revert: () => void } | undefined;
    let isCancelled = false;

    // GSAP is lazy-loaded only when the section mounts, keeping the initial route bundle lean.
    const setupTimeline = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (isCancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const nodes = gsap.utils.toArray<HTMLElement>(".process-cinema-node");
        const labels = gsap.utils.toArray<HTMLElement>(".process-cinema-label");
        const grids = gsap.utils.toArray<HTMLElement>(".process-cinema-node-grid");
        const axisParts = gsap.utils.toArray<HTMLElement>(".process-cinema-axis span");
        const isMobileTimeline = window.matchMedia("(max-width: 640px)").matches;
        const axisScaleProperty = isMobileTimeline ? "scaleY" : "scaleX";

        gsap.set(section, { autoAlpha: 1 });
        gsap.set(nodes, { opacity: 0, scale: 0.7, transformOrigin: "50% 50%" });
        gsap.set(labels, { opacity: 0, y: 12 });
        gsap.set(grids, { opacity: 0 });
        gsap.set(axisParts, {
          scaleX: isMobileTimeline ? 1 : 0,
          scaleY: isMobileTimeline ? 0 : 1,
          transformOrigin: isMobileTimeline ? "center top" : "left center"
        });

        // One pinned scrubbed timeline drives all transform/opacity/SVG stroke work.
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=360%",
            pin: true,
            scrub: 1.15,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        timeline
          .to(axisParts[0], { [axisScaleProperty]: 1, duration: 0.62 }, 0)
          .to(nodes[0], { opacity: 1, scale: 1, duration: 0.9 }, 0.12)
          .to(labels[0], { opacity: 1, y: 0, duration: 0.7 }, 0.28)
          .to(axisParts[1], { [axisScaleProperty]: 1, duration: 0.9 }, 0.54)
          .to(nodes[1], { opacity: 1, scale: 1, duration: 1.2 }, 0.94)
          .to(grids[1], { opacity: 0.82, duration: 0.95 }, 1.04)
          .to(labels[1], { opacity: 1, y: 0, duration: 0.75 }, 1.12)
          .to(axisParts[2], { [axisScaleProperty]: 1, duration: 1.18 }, 1.42)
          .to(nodes[2], { opacity: 1, scale: 1, duration: 1.25 }, 1.88)
          .to(labels[2], { opacity: 1, y: 0, duration: 0.75 }, 2.08)
          .to(axisParts[3], { [axisScaleProperty]: 1, duration: 0.56 }, 2.52)
          .to(axisParts[4], { [axisScaleProperty]: 1, duration: 0.82 }, 2.7)
          .to(nodes[3], { opacity: 1, scale: 1, duration: 1.1 }, 2.86)
          .to(grids[3], { opacity: 0.82, duration: 0.9 }, 2.98)
          .to(labels[3], { opacity: 1, y: 0, duration: 0.75 }, 3.04);
      }, section);
    };

    setupTimeline();

    return () => {
      isCancelled = true;
      context?.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process-cinema-section home-section opacity-0"
      aria-labelledby="process-heading"
    >
      <div className="process-cinema-grain" aria-hidden="true" />
      <div className="process-cinema-ambient" aria-hidden="true" />

      <div className="process-cinema-stage">
        <div className="process-cinema-copy">
          <p className="process-cinema-eyebrow">
            Process
          </p>
          <h2 id="process-heading">
            From first idea to live launch.
          </h2>
        </div>

        <div className="process-cinema-orbs" aria-label="Agency process timeline">
          <div className="process-cinema-axis" aria-hidden="true">
            <span className="process-cinema-axis-solid process-cinema-axis-left" />
            <span className="process-cinema-axis-dash process-cinema-axis-mid" />
            <span className="process-cinema-axis-solid process-cinema-axis-main" />
            <span className="process-cinema-axis-dash process-cinema-axis-right-dash" />
            <span className="process-cinema-axis-solid process-cinema-axis-right" />
          </div>

          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`process-cinema-node process-cinema-node-${index + 1}`}
            >
              <span className="process-cinema-node-grid" aria-hidden="true" />
              <div className="process-cinema-label">
                <p className="process-cinema-number text-[11px] font-semibold text-white/64">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="process-cinema-title text-xs font-medium text-white/76">
                  <span>{step.title}</span>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
