import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MonitorSmartphone, MousePointerClick, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected website, landing page, and brand experience projects by WEBuildYourBrands."
};

const projects = [
  {
    title: "Organise With Kopal",
    category: "Service Brand",
    description: "Calm, clear, and trust-led.",
    result: "Premium first impression",
    image: "/project-organise-with-kopal.webp",
    projectUrl: "https://www.organisewithkopal.com/"
  },
  {
    title: "SM Classes",
    category: "Education",
    description: "Structured for parents and students.",
    result: "Clearer program discovery",
    image: "/project-sm-classes.webp",
    projectUrl: "https://smclasses.in/"
  },
  {
    title: "Little Ilmies",
    category: "Learning Platform",
    description: "Friendly, focused, and easy to explore.",
    result: "Simple learner pathways",
    image: "/project-little-ilmies.webp",
    projectUrl: "https://littleilmies.com/"
  },
  {
    title: "Zarrar Palekar",
    category: "Portfolio",
    description: "Sharp presentation for credibility.",
    result: "Work made easier to trust",
    image: "/project-zarrar-palekar.webp",
    projectUrl: "https://zarrarpalekar.vercel.app/"
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        eyebrow="Projects"
        title="Selected work across strategy, design, and development."
        description="A grid of polished website experiences built for clarity, trust, and conversion."
        videoSrc="/Projectpagehero.mp4"
        primaryLabel="View Projects"
        primaryHref="#projects"
        secondaryLabel="Book A Call"
        secondaryHref="https://calendly.com/meetwbybfounder/30min?month=2026-05"
      />
      <Section
        id="projects"
        className="scroll-mt-24 pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Projects"
        title="A premium gallery of websites built to be trusted fast."
        description="Each project is shaped around a clearer first impression, easier decisions, and a stronger reason to take action."
      >
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_12%_8%,rgba(22,216,255,0.14),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(124,60,255,0.2),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.075),rgba(0,0,31,0.52))] p-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_34px_120px_rgba(0,0,31,0.32)] backdrop-blur-xl sm:p-5">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.78),rgba(124,60,255,0.68),transparent)]" />

          <div className="grid gap-5 lg:grid-cols-[96px_1fr]">
            <aside className="hidden rounded-[26px] border border-white/10 bg-[#00001F]/46 p-4 lg:flex lg:flex-col lg:items-center lg:justify-between">
              <div className="flex flex-col items-center gap-3">
                <Sparkles className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                <p className="-rotate-90 whitespace-nowrap pt-16 text-[10px] font-bold uppercase tracking-[0.24em] text-white/42">
                  Live Work
                </p>
              </div>
              <div className="grid gap-2">
                {projects.map((project, index) => (
                  <span
                    key={project.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[10px] font-bold text-white/58"
                  >
                    0{index + 1}
                  </span>
                ))}
              </div>
            </aside>

            <div className="grid gap-5">
              <Link
                href={projects[0].projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid overflow-hidden rounded-[28px] border border-white/10 bg-[#00001F]/48 p-3 transition duration-300 hover:border-cyan-300/28 lg:grid-cols-[1fr_320px]"
              >
                <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#00001F]/70 sm:min-h-[460px]">
                  <Image
                    src={projects[0].image}
                    alt={`${projects[0].title} project preview`}
                    fill
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.04),rgba(0,0,31,0.14)_40%,rgba(0,0,31,0.9)),linear-gradient(90deg,rgba(0,0,31,0.52),transparent_46%)]" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#00001F]/58 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/76 backdrop-blur-md">
                    <MonitorSmartphone className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
                    Signature Showcase
                  </div>
                  <div className="absolute bottom-5 left-5 max-w-xl">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-100/66">
                      {projects[0].category}
                    </p>
                    <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-5xl">
                      {projects[0].title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-white/68">
                      {projects[0].result}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-4 sm:p-6">
                  <div className="grid gap-3">
                    {["Clear message", "Premium visual system", "Live and ready"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/74"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <p className="text-sm leading-7 text-white/58">
                      {projects[0].description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                      View Live Project
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="grid gap-4">
                {projects.slice(1).map((project, index) => (
                  <Link
                    key={project.title}
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.065),rgba(22,216,255,0.026)_42%,rgba(124,60,255,0.08))] p-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 sm:grid-cols-[260px_1fr_auto] sm:items-center"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#00001F]/70 sm:aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 1024px) 260px, 100vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02),rgba(0,0,31,0.72))]" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/14 bg-[#00001F]/58 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md">
                        0{index + 2}
                      </span>
                    </div>

                    <div className="px-4 py-5 sm:px-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/36 group-hover:text-cyan-100/70">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">{project.description}</p>
                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100/64">
                        {project.result}
                      </p>
                    </div>

                    <div className="hidden h-full min-w-24 items-center justify-center border-l border-white/10 sm:flex">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] transition duration-300 group-hover:bg-white group-hover:text-[#00001F]">
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button
              asChild
              className={`h-12 rounded-full px-7 text-sm font-bold ${neonButtonClass}`}
            >
              <Link href="https://calendly.com/meetwbybfounder/30min?month=2026-05">
                Plan A Similar Website
                <MousePointerClick className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
