import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePlus,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Lightbulb,
  PanelsTopLeft,
  PenTool,
  Rocket,
  TrendingUp
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

const StatsBar = dynamic(() => import("@/components/StatsBar"));
const TestimonialsSlider = dynamic(() =>
  import("@/components/TestimonialsSlider").then((module) => module.TestimonialsSlider)
);

export const metadata: Metadata = {
  title: "Home",
  description:
    "High-converting custom websites built to generate leads, improve trust, and help growing businesses turn visitors into clients."
};

const services = [
  {
    title: "Custom Design",
    description: "No templates. A website shaped around your offer, audience, and goals.",
    Icon: PenTool
  },
  {
    title: "High-Speed Performance",
    description: "Fast pages that feel smooth on mobile and keep visitors moving.",
    Icon: Rocket
  },
  {
    title: "SEO-Optimized Structure",
    description: "Clean pages built to rank, load fast, and get found on Google.",
    Icon: FileSearch
  },
  {
    title: "Conversion-Focused Layout",
    description: "Clear sections, strong CTAs, and a path that turns visitors into leads.",
    Icon: PanelsTopLeft
  }
];

const audiences = [
  {
    title: "Slow Loading",
    cue: "Visitors leave fast",
    fit: "A slow website loses attention before your offer is even seen.",
    outcome: "Speed matters",
    Icon: Rocket
  },
  {
    title: "Poor Mobile Experience",
    cue: "Most traffic is mobile",
    fit: "If the mobile version feels weak, trust drops before the first click.",
    outcome: "Mobile first",
    Icon: BadgePlus
  },
  {
    title: "No Clear Message",
    cue: "Confused visitors do not convert",
    fit: "People need to understand what you do, who it is for, and why it matters.",
    outcome: "Clear offer",
    Icon: BriefcaseBusiness
  },
  {
    title: "No Conversion Strategy",
    cue: "Design alone is not enough",
    fit: "A beautiful site still fails if there is no clear path to inquire or book.",
    outcome: "Lead flow",
    Icon: TrendingUp
  }
];

const stats = [
  {
    value: 100,
    suffix: "%",
    status: "Responsive",
    label: "Pixel-perfect on every device"
  },
  {
    value: 100,
    suffix: "%",
    status: "Fast",
    label: "Optimized for speed and performance"
  },
  {
    value: 100,
    suffix: "%",
    status: "Conversion Focused",
    label: "Designed to turn visitors into leads"
  },
  {
    value: 100,
    suffix: "%",
    status: "SEO Ready",
    label: "Built to rank and get found on Google"
  }
];

const process = [
  {
    title: "Strategy & Planning",
    description: "We define your offer, audience, pages, and conversion goal before design starts.",
    Icon: ClipboardList
  },
  {
    title: "Design & Development",
    description: "We design and build a fast, custom website that makes your message clear.",
    Icon: PanelsTopLeft
  },
  {
    title: "Launch & Growth",
    description: "We launch with performance, SEO basics, and a clear path for more inquiries.",
    Icon: Rocket
  }
];

const projects = [
  {
    title: "Organise With Kopal",
    category: "Business Web Design",
    image: "/project-organise-with-kopal.webp",
    projectUrl: "https://www.organisewithkopal.com/"
  },
  {
    title: "SM Classes",
    category: "Education Website",
    image: "/project-sm-classes.webp",
    projectUrl: "https://smclasses.in/"
  },
  {
    title: "Little Ilmies",
    category: "Learning Platform",
    image: "/project-little-ilmies.webp",
    projectUrl: "https://littleilmies.com/"
  },
  {
    title: "Zarrar Palekar",
    category: "Portfolio Website",
    image: "/project-zarrar-palekar.webp",
    projectUrl: "https://zarrarpalekar.vercel.app/"
  }
];

const heroProjectPreviews = [
  {
    title: "Organise With Kopal",
    image: "/project-organise-with-kopal.webp"
  },
  {
    title: "SM Classes",
    image: "/project-sm-classes.webp"
  },
  {
    title: "Little Ilmies",
    image: "/project-little-ilmies.webp"
  },
  {
    title: "Zarrar Palekar",
    image: "/project-zarrar-palekar.webp"
  }
];

const reasons = [
  {
    title: "More Leads",
    signal: "Guide visitors toward calls, forms, and inquiries.",
    visual: "Leads",
    Icon: Lightbulb
  },
  {
    title: "Better Conversions",
    signal: "Turn attention into action with clearer pages.",
    visual: "Convert",
    Icon: PanelsTopLeft
  },
  {
    title: "Strong Online Presence",
    signal: "Look credible when customers check you first.",
    visual: "Grow",
    Icon: Rocket
  }
];

const testimonials = [
  {
    title: "Our coaching website finally had everything parents needed.",
    quote:
      "WBYB (we build your brands) develop our classes website (smclasses.in) which exceeds our expectations.. Website covers all informative content which were basically required for growth of any coaching classes..the best part is whenever modifications required they do immediately and with lots of ideas.. We recommend WBYB for anyone who like to build best website for their business..",
    name: "Saquib Dalvi",
    role: "Education Brand",
    image: "/SM classes Founder.webp"
  },
  {
    title: "My work now feels easier to share and explain.",
    quote:
      "The portfolio website gave my work a sharper, more polished presence online. It became much easier to share my projects, explain what I do, and make a strong first impression with clients.",
    name: "Zarrar Palekar",
    role: "Portfolio Website Client",
    image: "/Zarrar-Photo.webp"
  },
  {
    title: "My website was live in two days, without the stress.",
    quote:
      "Hi, I'm Kopal and I run my business called Organise with Kopal. I needed a website for my business and I already knew that Zuvairiya would be the right call. She delivered the website within 2 days - at an affordable price. All edits were done within minutes.",
    name: "Kopal Dhir",
    role: "Founder at Organise With Kopal"
  },
  {
    title: "She understood my brand and made it look polished fast.",
    quote:
      "I own an appointment setting agency and get a lot of my leads from Facebook and LinkedIn, so I had an urgent requirement for professional covers. Zuvairiya delivered exceptionally beautiful and professional designs in no time, making sure everything matched my brand palette perfectly. Her turnaround time, quick edits, and patience were amazing. I can't recommend her enough - she's my go-to for all things graphic design.",
    name: "Shreya Batra",
    role: "Co-Founder @ Organic Appointments Agency"
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-28 lg:px-24 lg:pb-32 xl:px-32">
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
        <div className="relative mx-auto grid min-h-[560px] max-w-6xl items-center gap-12 sm:min-h-[680px] lg:grid-cols-[0.9fr_1.05fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
              <span>Lead-focused websites</span>
            </p>
            <h1 className="mt-7 text-3xl font-bold leading-[1.05] text-white min-[360px]:text-4xl sm:text-5xl lg:text-[4.25rem]">
              We build high-converting websites that turn visitors into clients.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/74 sm:mt-6 sm:text-base sm:leading-8">
              Custom-designed, lightning-fast websites built to generate leads - not just look good.
            </p>
            <div className="mt-6 grid max-w-xl gap-3 text-sm font-semibold text-white/68 sm:grid-cols-3">
              {["Fast to load", "Built to convert", "Ready for leads"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-[#00001F]/36 px-3 py-2"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className={`h-12 w-full gap-0 rounded-full px-7 text-base font-bold sm:h-14 sm:w-auto ${neonButtonClass}`}
              >
                <CalendlyLink className="group">
                  Get Your Website Audit →
                  <CalendarDays className="h-5 w-0 shrink-0 opacity-0 transition-[width,margin,opacity,transform] duration-300 group-hover:ml-2 group-hover:w-5 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-5 group-focus-visible:opacity-100" aria-hidden="true" />
                </CalendlyLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full gap-0 rounded-full px-7 text-base font-bold sm:h-14 sm:w-auto"
              >
                <Link href="/projects" className="group">
                  View Our Work
                  <BriefcaseBusiness className="h-5 w-0 shrink-0 opacity-0 transition-[width,margin,opacity,transform] duration-300 group-hover:ml-2 group-hover:w-5 group-hover:translate-x-0.5 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-5 group-focus-visible:opacity-100" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden min-h-[540px] lg:block">
            <div className="absolute inset-y-8 right-0 w-[min(580px,100%)]">
              <div className="absolute -right-8 top-10 h-64 w-64 rounded-full border border-cyan-200/10 bg-cyan-200/[0.035] blur-2xl" />
              <div className="absolute -bottom-4 left-10 h-72 w-72 rounded-full border border-violet-300/10 bg-violet-400/[0.055] blur-2xl" />
              <div className="relative h-full rounded-[34px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_36%,rgba(124,60,255,0.08)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_34px_120px_rgba(0,0,31,0.5)] backdrop-blur-2xl">
                <div className="grid h-full grid-cols-[104px_1fr] gap-6">
                  <div className="relative flex flex-col items-center justify-between rounded-[26px] border border-white/10 bg-[#00001F]/46 px-4 py-8">
                    <span className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-100/36 to-transparent" />
                    {["Plan", "Design", "Launch"].map((item, index) => (
                      <div key={item} className="relative z-10 flex min-h-[106px] flex-col items-center text-center">
                        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#080022] text-xs font-bold text-white shadow-[0_0_22px_rgba(22,216,255,0.13)]">
                          0{index + 1}
                        </span>
                        <p className="mt-8 -rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-white/48">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#00001F]/62">
                    <div className="relative h-full min-h-[456px]">
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
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,31,0.94),rgba(0,0,31,0.42)_48%,rgba(0,0,31,0.2)),linear-gradient(0deg,rgba(0,0,31,0.96),transparent_58%)]" />
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.075] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/72 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(22,216,255,0.9)]" />
                      Bespoke Build
                    </div>
                    <div className="absolute bottom-6 left-6 max-w-[330px]">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60">
                        Live Work Preview
                      </p>
                      <h2 className="mt-3 text-4xl font-bold leading-tight text-white">
                        Clarity that feels expensive.
                      </h2>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-white/62">
                        Real pages built around trust.
                      </p>
                    </div>
                    <div className="absolute right-5 top-1/2 w-44 -translate-y-1/2 rounded-[24px] border border-white/12 bg-[#05051b]/82 p-3 shadow-[0_24px_80px_rgba(0,0,31,0.42)] backdrop-blur-xl">
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
                      <div className="px-2 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/36">
                          Up Next
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          Next preview.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8 sm:pb-12 lg:px-24 lg:pb-14 xl:px-32">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-[24px] border border-white/10 bg-white/[0.035] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
          <p className="text-sm font-bold text-white/72">
            Built with precision, not templates.
          </p>
          <div className="grid gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/48 sm:grid-cols-2 sm:text-right">
            <span>100% Custom Projects</span>
            <span>Optimized for Speed</span>
          </div>
        </div>
      </section>

      <section className="mobile-render-defer relative px-4 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-28 lg:px-24 lg:pb-14 lg:pt-32 xl:px-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_14%_12%,rgba(22,216,255,0.12),transparent_30%),radial-gradient(circle_at_92%_82%,rgba(124,60,255,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.46))] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.58),transparent)]" />
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
            <div className="relative flex flex-col justify-between rounded-[26px] border border-white/10 bg-[#00001F]/46 p-6 sm:p-8">
              <div>
                <Eyebrow>What You Get</Eyebrow>
                <h2 className="max-w-sm text-2xl font-semibold leading-tight text-white sm:text-4xl">
                  A website system built to win leads.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
                  Strategy, design, speed, SEO, and conversion flow shaped into one custom build.
                </p>
              </div>
              <div className="mt-8 grid gap-3 text-sm font-bold text-white/72">
                {["Clear offer", "Fast pages", "Stronger trust", "More inquiries"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                  >
                    <span>{item}</span>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-100/70" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-7 h-11 w-full rounded-full border-white/14 bg-white/[0.035] px-5 text-xs font-bold uppercase tracking-[0.16em] hover:bg-white hover:text-[#00001F]"
              >
                <Link href="/services">
                  View Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map(({ title, description, Icon }, index) => (
                <Link
                  key={title}
                  href="/services"
                  className="group relative min-h-[220px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.48))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.055] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(22,216,255,0.1)] sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(53,92,255,0.18)] transition duration-300 group-hover:border-cyan-300/28 group-hover:bg-[image:var(--button-gradient)] group-hover:shadow-[0_0_34px_rgba(22,216,255,0.18)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/36 transition duration-300 group-hover:text-cyan-100/74">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-9 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {description}
                  </p>
                  <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/36 transition duration-300 group-hover:text-white/78">
                    Explore
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.2),transparent)]" />
                    <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-render-defer px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-24 lg:pb-28 lg:pt-24 xl:px-32">
        <StatsBar stats={stats} />
      </section>

      <section className="mobile-render-defer px-4 py-16 sm:px-8 sm:py-24 lg:px-24 lg:py-28 xl:px-32">
        <div className="relative mx-auto grid max-w-6xl gap-5 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(22,216,255,0.12),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(124,60,255,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(0,0,31,0.42))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:p-6 lg:grid-cols-[0.9fr_1.4fr] lg:p-8">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),rgba(124,60,255,0.64),transparent)]" />
          <div className="relative rounded-[26px] border border-white/10 bg-[#00001F]/44 p-6 sm:p-8">
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Most websites don&apos;t convert. Here&apos;s why:
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Visitors need speed, clarity, and a reason to take action. We fix all of this.
            </p>
            <div className="mt-8 grid gap-3">
              {["Slow loading", "Poor mobile experience", "No clear message", "No conversion strategy"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                >
                  <span className="text-sm font-bold text-white/76">{item}</span>
                  <ArrowRight className="h-4 w-4 text-cyan-100/54" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {audiences.map(({ title, cue, fit, outcome, Icon }, index) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(22,216,255,0.025)_42%,rgba(124,60,255,0.09))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_22px_70px_rgba(22,216,255,0.12)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-y-6 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(22,216,255,0.7),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="grid gap-5 sm:grid-cols-[72px_1fr_auto] sm:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-[#00001F]/58 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(53,92,255,0.18)] transition duration-300 group-hover:border-cyan-300/28 group-hover:bg-[image:var(--button-gradient)] group-hover:shadow-[0_0_34px_rgba(22,216,255,0.18)]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/30">
                        0{index + 1}
                      </span>
                      <p className="rounded-full border border-cyan-100/12 bg-cyan-100/[0.055] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100/68">
                        {cue}
                      </p>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/56">
                      {fit}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#00001F]/42 px-4 py-3 sm:max-w-[180px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/34">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm font-bold leading-5 text-white/82">
                      {outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-render-defer px-4 py-16 sm:px-8 sm:py-28 lg:px-24 lg:py-32 xl:px-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Process</Eyebrow>
            <h2 className="max-w-sm text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Simple 3-step process
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              No confusion. No endless back-and-forth. Just a clear path from idea to launch.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_14%_12%,rgba(22,216,255,0.1),transparent_30%),radial-gradient(circle_at_92%_82%,rgba(124,60,255,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.065),rgba(0,0,31,0.44))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_26px_86px_rgba(0,0,31,0.22)] backdrop-blur-xl sm:p-6">
            <div className="pointer-events-none absolute bottom-10 left-[56px] top-10 w-px bg-[linear-gradient(180deg,rgba(22,216,255,0),rgba(22,216,255,0.36),rgba(124,60,255,0.36),rgba(22,216,255,0))] sm:left-[68px]" />
            <div className="grid gap-4">
            {process.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group relative grid gap-4 rounded-[24px] border border-white/10 bg-[#00001F]/44 p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.05] sm:grid-cols-[76px_1fr_auto] sm:items-center sm:gap-5 sm:p-5"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-100/16 bg-[#00001F] text-xs font-black text-white shadow-[0_0_24px_rgba(22,216,255,0.16)]">
                    0{index + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition duration-300 group-hover:bg-[image:var(--button-gradient)] sm:mx-auto">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {description}
                  </p>
                </div>
                <div className="relative z-10 sm:w-36">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[image:var(--button-gradient)] transition-[width] duration-500"
                      style={{ width: `${((index + 1) / process.length) * 100}%` }}
                    />
                  </div>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/34">
                    Phase {index + 1}
                  </p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-render-defer px-4 py-16 sm:px-8 sm:py-28 lg:px-24 lg:py-32 xl:px-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-sm text-2xl font-semibold leading-tight text-white">
              Websites built to look premium and convert.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Real projects for growing businesses that needed a stronger online presence.
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
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(22,216,255,0.035)_36%,rgba(124,60,255,0.1)_72%,rgba(0,0,31,0.44))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_90px_rgba(22,216,255,0.13),0_18px_72px_rgba(124,60,255,0.16)] ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className={`relative overflow-hidden rounded-xl ${index === 0 ? "aspect-[16/8]" : "aspect-[16/11]"}`}>
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02)_0%,rgba(0,0,31,0.18)_48%,rgba(0,0,31,0.82)_100%)]" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/14 bg-[#00001F]/58 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                      0{index + 1}
                    </span>
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white opacity-0 shadow-[0_14px_36px_rgba(0,0,31,0.28)] backdrop-blur-md transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:translate-x-2">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-5 px-4 py-5">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/36 transition duration-300 group-hover:text-cyan-100/70">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="hidden h-px min-w-10 flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.2),transparent)] sm:block" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-render-defer px-4 py-16 sm:px-8 sm:py-28 lg:px-24 lg:py-32 xl:px-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Business Results</Eyebrow>
            <h2 className="max-w-sm text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Built for real business results
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Your website should help you grow, get found, and win more trust before the first call.
            </p>
            <div className="mt-7 grid max-w-sm grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/46">
              {["Plan", "Build", "Launch"].map((item) => (
                <div
                  key={item}
                  className="border-r border-white/10 px-3 py-4 last:border-r-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="clarity-pipeline">
            {reasons.map(({ title, signal, visual, Icon }, index) => (
              <article
                key={title}
                className="clarity-pipeline-card group"
              >
                <span className="clarity-pipeline-index">
                  0{index + 1}
                </span>
                <div className="clarity-pipeline-icon">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="relative z-10">
                  <p className="clarity-pipeline-badge">
                    {visual}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/62">
                    {signal}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-render-defer px-4 py-12 sm:px-8 sm:py-20 lg:px-24 lg:py-24 xl:px-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.48))] px-4 py-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_26px_84px_rgba(0,0,31,0.24)] backdrop-blur-xl sm:px-6 sm:py-8 lg:px-8">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.68),transparent)]" />
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-white/46">
              Social Proof
            </p>
            <h2 className="text-xl font-bold leading-tight sm:text-3xl">
              Clients love working with us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/56">
              They came for a website. They left with a clearer brand and a stronger way to win leads.
            </p>
          </div>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

    </>
  );
}
