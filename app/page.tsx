import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  PanelsTopLeft,
  PenTool,
  Rocket,
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { ProblemAccordionCards } from "@/components/ProblemAccordionCards";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { neonButtonClass } from "@/lib/utils";

const StatsBar = dynamic(() => import("@/components/StatsBar"));
const TestimonialsSlider = dynamic(() =>
  import("@/components/TestimonialsSlider").then(
    (module) => module.TestimonialsSlider,
  ),
);

export const metadata: Metadata = {
  title: "Home",
  description:
    "High-converting custom websites built to generate leads, improve trust, and help growing businesses turn visitors into clients.",
};

const services = [
  {
    title: "Custom Design",
    description:
      "No templates. A website shaped around your offer, audience, and goals.",
    Icon: PenTool,
  },
  {
    title: "High-Speed Performance",
    description:
      "Fast pages that feel smooth on mobile and keep visitors moving.",
    Icon: Rocket,
  },
  {
    title: "SEO-Optimized Structure",
    description:
      "Clean pages built to rank, load fast, and get found on Google.",
    Icon: FileSearch,
  },
  {
    title: "Conversion-Focused Layout",
    description:
      "Clear sections, strong CTAs, and a path that turns visitors into leads.",
    Icon: PanelsTopLeft,
  },
  {
    title: "Ready?",
    description:
      "Book a free strategy call and let us map the clearest path for your website.",
    Icon: CalendarDays,
    cta: "Book a Call",
  },
];

const audiences = [
  {
    title: "Slow Loading",
    cue: "Visitors leave fast",
    fit: "A slow website loses attention before your offer is even seen.",
    outcome: "Speed matters",
    icon: "rocket" as const,
  },
  {
    title: "Poor Mobile Experience",
    cue: "Most traffic is mobile",
    fit: "If the mobile version feels weak, trust drops before the first click.",
    outcome: "Mobile first",
    icon: "badgePlus" as const,
  },
  {
    title: "No Clear Message",
    cue: "Confused visitors do not convert",
    fit: "People need to understand what you do, who it is for, and why it matters.",
    outcome: "Clear offer",
    icon: "briefcaseBusiness" as const,
  },
  {
    title: "No Conversion Strategy",
    cue: "Design alone is not enough",
    fit: "A beautiful site still fails if there is no clear path to inquire or book.",
    outcome: "Lead flow",
    icon: "trendingUp" as const,
  },
];

const stats = [
  {
    value: 100,
    suffix: "%",
    status: "Responsive",
    label: "Pixel-perfect on every device",
  },
  {
    value: 100,
    suffix: "%",
    status: "Fast",
    label: "Optimized for speed and performance",
  },
  {
    value: 100,
    suffix: "%",
    status: "Conversion Focused",
    label: "Designed to turn visitors into leads",
  },
  {
    value: 100,
    suffix: "%",
    status: "SEO Ready",
    label: "Built to rank and get found on Google",
  },
];

const process = [
  {
    title: "Discovery",
    description: "",
  },
  {
    title: "Strategy & Structure",
    description: "",
  },
  {
    title: "Design & Experience",
    description: "",
  },
  {
    title: "Launch & Growth",
    description: "",
  },
];

const projects = [
  {
    title: "Organise With Kopal",
    category: "Business Web Design",
    image: "/project-organise-with-kopal.webp",
    projectUrl: "https://www.organisewithkopal.com/",
  },
  {
    title: "SM Classes",
    category: "Education Website",
    image: "/project-sm-classes.webp",
    projectUrl: "https://smclasses.in/",
  },
  {
    title: "Zarrar Palekar",
    category: "Portfolio Website",
    image: "/project-zarrar-palekar.webp",
    projectUrl: "https://zarrarpalekar.vercel.app/",
  },
  {
    title: "Emlak Real Estate",
    category: "Real Estate Website",
    image: "/Project Emlak.webp",
    projectUrl: "https://emlakrealestatellc.vercel.app/",
  },
  {
    title: "Zuvi Personal Portfolio",
    category: "Portfolio Website",
    image: "/Project ZUVI website.webp",
    projectUrl: "https://zuvi.vercel.app/",
  },
];

const heroProjectPreviews = [
  {
    title: "Organise With Kopal",
    image: "/project-organise-with-kopal.webp",
  },
  {
    title: "SM Classes",
    image: "/project-sm-classes.webp",
  },
  {
    title: "Zarrar Palekar",
    image: "/project-zarrar-palekar.webp",
  },
  {
    title: "Emlak Real Estate",
    image: "/Project Emlak.webp",
  },
  {
    title: "Zuvi Personal Portfolio",
    image: "/Project ZUVI website.webp",
  },
];

const reasons = [
  {
    title: "More Leads",
    signal: "Clear paths to calls and inquiries.",
    visual: "Leads",
    Icon: Lightbulb,
  },
  {
    title: "Better Conversions",
    signal: "Less confusion. Faster decisions.",
    visual: "Convert",
    Icon: PanelsTopLeft,
  },
  {
    title: "Strong Online Presence",
    signal: "A sharper first impression.",
    visual: "Trust",
    Icon: Rocket,
  },
];

const testimonials = [
  {
    title: "Our coaching website finally had everything parents needed.",
    quote:
      "WBYB (we build your brands) develop our classes website (smclasses.in) which exceeds our expectations.. Website covers all informative content which were basically required for growth of any coaching classes..the best part is whenever modifications required they do immediately and with lots of ideas.. We recommend WBYB for anyone who like to build best website for their business..",
    name: "Saquib Dalvi",
    role: "Education Brand",
    image: "/wbyb-sm-classes-founder.webp",
  },
  {
    title: "My work now feels easier to share and explain.",
    quote:
      "The portfolio website gave my work a sharper, more polished presence online. It became much easier to share my projects, explain what I do, and make a strong first impression with clients.",
    name: "Zarrar Palekar",
    role: "Portfolio Website Client",
    image: "/Zarrar-Photo.webp",
  },
  {
    title: "My website was live in two days, without the stress.",
    quote:
      "Hi, I'm Kopal and I run my business called Organise with Kopal. I needed a website for my business and I already knew that Zuvairiya would be the right call. She delivered the website within 2 days - at an affordable price. All edits were done within minutes.",
    name: "Kopal Dhir",
    role: "Founder at Organise With Kopal",
  },
  {
    title: "She understood my brand and made it look polished fast.",
    quote:
      "I own an appointment setting agency and get a lot of my leads from Facebook and LinkedIn, so I had an urgent requirement for professional covers. Zuvairiya delivered exceptionally beautiful and professional designs in no time, making sure everything matched my brand palette perfectly. Her turnaround time, quick edits, and patience were amazing. I can't recommend her enough - she's my go-to for all things graphic design.",
    name: "Shreya Batra",
    role: "Co-Founder @ Organic Appointments Agency",
    image: "/Shreya Batra.webp",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/76">
      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(22,216,255,0.8)]" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-20 lg:min-h-[100svh] lg:px-24 lg:pb-8 lg:pt-20 xl:px-32">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="/Homehero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,31,0.76),rgba(0,0,31,0.52)_50%,rgba(0,0,31,0.72)),linear-gradient(180deg,rgba(53,92,255,0.06),rgba(124,60,255,0.04)_38%,transparent_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#00001f] to-transparent" />
        <div className="relative mx-auto grid min-h-[560px] w-full items-center gap-12 sm:min-h-[680px] lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.9fr_1.05fr] lg:gap-10 xl:gap-14">
          <div className="max-w-2xl">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md lg:text-[11px]">
              <span>Lead-focused websites</span>
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.08] text-white min-[360px]:text-4xl sm:text-5xl lg:text-[2.35rem] xl:text-[2.65rem]">
              We build high-converting websites that turn visitors into clients.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/64 sm:mt-6 sm:text-base sm:leading-8 lg:mt-4 lg:text-sm lg:leading-7">
              Custom-designed, lightning-fast websites built to generate leads -
              not just look good.
            </p>
            <div className="mt-5 grid max-w-2xl gap-3 text-sm font-semibold text-white/62 sm:grid-cols-3 lg:text-xs">
              {["Fast to load", "Built to convert", "Ready for leads"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-[#00001F]/36 px-3 py-2 whitespace-nowrap"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-cyan-100"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className={`h-12 w-full gap-0 rounded-full px-7 text-base font-bold sm:h-14 sm:w-auto ${neonButtonClass}`}
              >
                <CalendlyLink className="group">
                  Get Your Website Audit
                  <CalendarDays
                    className="h-5 w-0 shrink-0 opacity-0 transition-[width,margin,opacity,transform] duration-300 group-hover:ml-2 group-hover:w-5 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-5 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  />
                </CalendlyLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full gap-0 rounded-full px-7 text-base font-bold sm:h-14 sm:w-auto"
              >
                <Link href="/projects" className="group">
                  View Our Work
                  <BriefcaseBusiness
                    className="h-5 w-0 shrink-0 opacity-0 transition-[width,margin,opacity,transform] duration-300 group-hover:ml-2 group-hover:w-5 group-hover:translate-x-0.5 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-5 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden min-h-[430px] lg:block xl:min-h-[480px]">
            <div className="absolute inset-y-2 right-0 w-[min(520px,100%)] xl:w-[min(560px,100%)]">
              <div className="absolute -right-8 top-10 h-64 w-64 rounded-full border border-cyan-200/10 bg-cyan-200/[0.035] blur-2xl" />
              <div className="absolute -bottom-4 left-10 h-72 w-72 rounded-full border border-violet-300/10 bg-violet-400/[0.055] blur-2xl" />
              <div className="relative h-full rounded-[30px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_36%,rgba(124,60,255,0.08)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_34px_120px_rgba(0,0,31,0.5)] backdrop-blur-2xl">
                <div className="grid h-full grid-cols-[88px_1fr] gap-5">
                  <div className="relative flex flex-col items-center justify-between rounded-[26px] border border-white/10 bg-[#00001F]/46 px-4 py-8">
                    <span className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-100/36 to-transparent" />
                    {["Plan", "Design", "Launch"].map((item) => (
                      <div
                        key={item}
                        className="relative z-10 flex min-h-[106px] flex-col items-center text-center"
                      >
                        <p className="mt-8 -rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-white/48">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#00001F]/62">
                    <div className="relative h-full min-h-[360px] xl:min-h-[410px]">
                      {heroProjectPreviews.map((project, index) => (
                        <Image
                          key={project.title}
                          src={project.image}
                          alt={`${project.title} website project preview`}
                          width={900}
                          height={720}
                          className="hero-proof-slide absolute inset-0 h-full w-full object-cover object-top opacity-0"
                          style={{ animationDelay: `${index * 4}s` }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,31,0.98),rgba(0,0,31,0.72)_54%,rgba(0,0,31,0.34)),linear-gradient(0deg,rgba(0,0,31,0.98),rgba(0,0,31,0.64)_48%,transparent_76%)]" />
                    <div className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.075] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(22,216,255,0.9)]" />
                      Live Work Preview
                    </div>
                    <div className="absolute inset-x-8 bottom-8 top-24 grid grid-cols-[minmax(0,1fr)_146px] items-end gap-6">
                      <div className="max-w-[320px] pr-2">
                        <h2 className="text-[2rem] font-bold leading-[1.08] text-white drop-shadow-[0_8px_24px_rgba(0,0,31,0.88)]">
                          Premium websites that bring inquiries.
                        </h2>
                        <p className="mt-4 max-w-xs text-sm leading-6 text-white/64 drop-shadow-[0_6px_18px_rgba(0,0,31,0.8)]">
                          Pages built to earn trust fast.
                        </p>
                        <Button
                          asChild
                          className={`mt-5 h-10 rounded-full px-5 text-xs font-bold whitespace-nowrap ${neonButtonClass}`}
                        >
                          <Link href="/web-store">
                            Get a Website That Converts
                            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/14 text-white/86">
                              <ArrowRight
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        </Button>
                      </div>
                      <div className="self-start rounded-[20px] border border-white/12 bg-[#05051b]/82 p-2.5 shadow-[0_24px_80px_rgba(0,0,31,0.42)] backdrop-blur-xl">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#00001F]/72">
                          {heroProjectPreviews.map((_, index) => {
                            const upcomingProject =
                              heroProjectPreviews[
                                (index + 1) % heroProjectPreviews.length
                              ];

                            return (
                              <Image
                                key={upcomingProject.title}
                                src={upcomingProject.image}
                                alt={`${upcomingProject.title} upcoming website preview`}
                                width={320}
                                height={220}
                                className="hero-proof-mini-slide absolute inset-0 h-full w-full object-cover object-top opacity-0"
                                style={{ animationDelay: `${index * 4}s` }}
                              />
                            );
                          })}
                        </div>
                        <div className="px-1.5 py-2.5">
                          <p className="text-xs font-bold leading-5 text-white/78">
                            See what your website could look like →
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-panel mobile-render-defer relative px-4 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-20 lg:px-24 lg:pb-14 lg:pt-24 xl:px-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
        <div className="mx-auto w-full text-white">
          <div className="grid gap-8">
            <div className="relative grid gap-8 border-l border-cyan-100/20 pl-5 sm:pl-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.62fr)] lg:items-start lg:gap-12">
              <div>
                <Eyebrow>What You Get</Eyebrow>
                <h2 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
                  A website system built to win leads.
                </h2>
                <p className="mt-5 max-w-[540px] text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
                  Strategy, design, speed, SEO, and conversion flow shaped into
                  one custom build.
                </p>
              </div>
              <div className="grid gap-5 lg:pt-11">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full justify-between rounded-full border-white/16 bg-white/[0.035] px-6 text-xs font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-[#00001F] sm:max-w-[260px] lg:justify-center lg:justify-self-end"
                >
                  <Link href="/services">
                    View Services
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="what-you-get-cards">
              {services.map(({ title, description, Icon, cta }) => {
                const cardContent = (
                  <>
                    <div
                      className="what-you-get-card-glow"
                      aria-hidden="true"
                    />
                    <div className="what-you-get-card-head">
                      <div className="what-you-get-card-icon">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="what-you-get-card-copy">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      {cta ? (
                        <span className="what-you-get-card-cta">
                          {cta}
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : (
                        <span className="what-you-get-card-link">
                          Explore
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </div>
                  </>
                );

                return cta ? (
                  <CalendlyLink
                    key={title}
                    className="what-you-get-card what-you-get-card-ready"
                    aria-label="Book a free strategy call"
                  >
                    {cardContent}
                  </CalendlyLink>
                ) : (
                  <Link
                    key={title}
                    href="/services"
                    className="what-you-get-card"
                    aria-label={`${title}: view services`}
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-slim mobile-render-defer px-4 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-24 lg:pb-24 lg:pt-20 xl:px-32">
        <StatsBar stats={stats} />
      </section>

      <section className="problem-scroll-section home-section home-section-muted mobile-render-defer relative min-h-[640vh] px-4 sm:px-8 lg:px-24 xl:px-32">
        <div className="sticky top-0 flex min-h-screen items-center py-14 sm:py-20 lg:py-24">
          <div className="relative mx-auto grid w-full gap-8 lg:grid-cols-[0.85fr_1.35fr] lg:items-start">
            <div className="relative border-l border-violet-300/20 pl-5 sm:pl-7">
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
                Most websites don&apos;t convert. Here&apos;s why:
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
                Visitors need speed, clarity, and a reason to take action. We
                fix all of this.
              </p>
            </div>

            <ProblemAccordionCards items={audiences} />
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />

      <section className="home-section home-section-deep mobile-render-defer px-4 py-14 sm:px-8 sm:py-20 lg:px-24 lg:py-24 xl:px-32">
        <div className="mx-auto grid w-full gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Websites built to look premium and convert.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Real projects for growing businesses that needed a stronger online
              presence.
            </p>
          </div>
          <div>
            <div className="mb-6 flex justify-start sm:justify-end">
              <Button
                asChild
                variant="outline"
                className="h-11 w-full rounded-full border-white/14 bg-white/[0.035] px-5 text-xs font-bold uppercase tracking-[0.16em] hover:bg-white hover:text-[#00001F] sm:w-auto"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Link
                  key={project.title}
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div
                    className={`relative overflow-hidden rounded-xl ${index === 0 ? "aspect-[16/8]" : "aspect-[16/11]"}`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02)_0%,rgba(0,0,31,0.18)_48%,rgba(0,0,31,0.82)_100%)]" />
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white opacity-0 shadow-[0_14px_36px_rgba(0,0,31,0.28)] backdrop-blur-md transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:translate-x-2">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-5 px-4 py-5">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/36 transition duration-300 group-hover:text-cyan-100/70">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="hidden h-px min-w-10 flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.2),transparent)] sm:block" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted mobile-render-defer px-4 py-14 sm:px-8 sm:py-20 lg:px-24 lg:py-24 xl:px-32">
        <div className="mx-auto grid w-full gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Business Results</Eyebrow>
            <h2 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Built for real business results
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Your website should help you grow, get found, and win more trust
              before the first call.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {reasons.map(({ title, signal, visual, Icon }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.055] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/42">
                    {visual}
                  </p>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/42 text-cyan-100/78 transition duration-300 group-hover:border-cyan-300/24 group-hover:text-cyan-100">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/54">
                  {signal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-deep mobile-render-defer relative overflow-hidden bg-[#00001F] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-24 lg:py-24 xl:px-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_54%_12%,rgba(22,216,255,0.1),transparent_30%),radial-gradient(circle_at_75%_78%,rgba(124,60,255,0.14),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.74),rgba(124,60,255,0.62),transparent)]" />
        <div className="relative mx-auto w-full">
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
