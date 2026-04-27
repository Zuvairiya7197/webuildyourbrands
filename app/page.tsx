import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Lightbulb,
  Monitor,
  Pencil,
  Rocket,
  Search,
  Send,
  Target
} from "lucide-react";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description:
    "We build high-converting websites for modern brands with strategy, design, development, and performance optimization."
};

const services = [
  {
    title: "Brand Strategy",
    description:
      "We define your brand's direction, positioning, and message with clarity.",
    Icon: Target
  },
  {
    title: "Visual Design",
    description:
      "We design clean, consistent visuals that reflect your brand's identity.",
    Icon: Rocket
  },
  {
    title: "Digital Presence",
    description:
      "We are a wordpress site development company here to build online brands.",
    Icon: Monitor
  }
];

const stats = [
  { value: 100, suffix: "%", label: "Mobile-first builds" },
  { value: 100, suffix: "%", label: "Performance focus" },
  { value: 0, suffix: "%", label: "Template reuse" }
];

const process = [
  {
    title: "Discover",
    description:
      "We understand your business, goals, and audience before making any decisions.",
    Icon: Search
  },
  {
    title: "Design",
    description:
      "We create thoughtful strategies and visuals that align with your brand's direction.",
    Icon: Pencil
  },
  {
    title: "Deliver",
    description:
      "We refine, finalize, and deliver work that's ready to perform in the real world.",
    Icon: Send
  }
];

const projects = [
  {
    title: "Organise With Kopal",
    category: "Business Web Design",
    image: "/project-organise-with-kopal.webp"
  },
  {
    title: "SM Classes",
    category: "Education Website",
    image: "/project-sm-classes.webp"
  },
  {
    title: "Little Ilmies",
    category: "Learning Platform",
    image: "/project-little-ilmies.webp"
  },
  {
    title: "Zarrar Palekar",
    category: "Portfolio Website",
    image: "/project-zarrar-palekar.webp"
  }
];

const reasons = [
  {
    title: "Clarity First",
    description:
      "We are a wordpress site development company that focuses on clear thinking and direction.",
    Icon: Lightbulb
  },
  {
    title: "Strategic Thinking",
    description:
      "Our work balances strategy and aesthetics to create brands that feel intentional and lasting.",
    Icon: ChevronRight
  },
  {
    title: "Built for Growth",
    description:
      "Our work balances strategy and aesthetics to create brands that feel intentional and lasting.",
    Icon: BarChart3
  }
];

const testimonials = [
  {
    title: "Professional Designs That Elevated My Brand",
    quote:
      "I own an appointment setting agency and get a lot of my leads from Facebook and LinkedIn, so I had an urgent requirement for professional covers. Zuvairiya delivered exceptionally beautiful and professional designs in no time, making sure everything matched my brand palette perfectly. Her turnaround time, quick edits, and patience were amazing. I can't recommend her enough - she's my go-to for all things graphic design.",
    name: "Shreya Batra",
    role: "Co-Founder @ Organic Appointments Agency",
    image: "/wbyblogo.webp"
  },
  {
    title: "High-Quality Design. Incredible Speed.",
    quote:
      "Hi, I'm Kopal and I run my business called Organise with Kopal. I needed a website for my business and I already knew that Zuvairiya would be the right call. She delivered the website within 2 days - at an affordable price. All edits were done within minutes.",
    name: "Kopal Dhir",
    role: "Founder at Organise With Kopal",
    image: "/project-organise-with-kopal.webp"
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
      <section className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          src="/Homehero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Website development background video"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,31,0.9),rgba(0,0,31,0.56)_52%,rgba(0,0,31,0.86))]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-[#14003a]/60 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_24px_rgba(124,60,255,0.3)] backdrop-blur-md">
              <span>We Build Your Brands</span>
            </p>
            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Design. Strategy. Digital.
              <span className="block">Built for Growth.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/80">
              We are a wordpress site development company which helps
              businesses build strong brands through clear strategy and modern
              design.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className={`h-14 rounded-full px-7 text-base font-bold ${neonButtonClass}`}
              >
                <Link href="/contact">
                  Book A Call
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-full px-7 text-base font-bold"
              >
                <Link href="/projects">
                  View Work
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden min-h-[500px] overflow-hidden lg:block">
            <div className="absolute right-7 top-16 h-[350px] w-[min(520px,calc(100%-1.75rem))] rotate-[-4deg] rounded-[28px] border border-cyan-300/10 bg-[#070720]/82 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_35px_100px_rgba(22,216,255,0.18)] backdrop-blur-xl">
              <div className="mb-12 flex items-center justify-between text-xs text-white/65">
                <Image
                  src="/wbyblogo.webp"
                  alt="WEBuildYourBrands"
                  width={62}
                  height={28}
                  className="h-auto w-16 object-contain"
                />
                <span>Home&nbsp;&nbsp; About&nbsp;&nbsp; Services&nbsp;&nbsp; Contact</span>
              </div>
              <h2 className="max-w-xs text-5xl font-bold leading-tight text-white">
                Clarity Builds Brands.
              </h2>
              <p className="mt-6 max-w-xs text-xs leading-5 text-white/45">
                Strategy-led websites that help businesses communicate clearly
                and convert better.
              </p>
              <Button className={`mt-6 h-10 rounded-full px-5 text-xs ${neonButtonClass}`}>
                Book A Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-10 right-0 h-[300px] w-[150px] rounded-[32px] border border-cyan-300/10 bg-[#050517]/84 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_28px_80px_rgba(124,60,255,0.28)] backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <Image
                  src="/wbyblogo.webp"
                  alt="WEBuildYourBrands"
                  width={36}
                  height={18}
                  className="h-auto w-9 object-contain"
                />
                <Monitor className="h-4 w-4 text-white/70" />
              </div>
              <h3 className="text-xl font-bold leading-tight text-white">
                We build brands that connect.
              </h3>
              <Button className={`mt-5 h-8 rounded-full px-4 text-[10px] ${neonButtonClass}`}>
                Discover
              </Button>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-square rounded-md bg-[linear-gradient(135deg,#111827,#263063)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-14 lg:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight text-white">
              Strategy. Design. Digital. All under{" "}
              <span>one roof.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Sharp foundations for brands that need to look credible, feel
              intentional, and move people to act.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(22,216,255,0.04)_36%,rgba(124,60,255,0.1)_72%,rgba(0,0,31,0.36))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_28px_86px_rgba(22,216,255,0.14),0_18px_70px_rgba(124,60,255,0.18)]"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.65),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/55 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(53,92,255,0.22)] transition duration-300 group-hover:border-cyan-300/24 group-hover:bg-[image:var(--button-gradient)] group-hover:shadow-[0_0_32px_rgba(22,216,255,0.22)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/30 transition duration-300 group-hover:text-cyan-100/70">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  {description}
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/36 transition duration-300 group-hover:text-white/78">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-0 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <StatsBar stats={stats} />
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight text-white">
              A clear <span>process.</span>
              <br />
              Real results.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              A focused workflow that keeps every decision tied to clarity,
              trust, and conversion.
            </p>
          </div>
          <div className="relative grid gap-5 md:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-[linear-gradient(90deg,rgba(22,216,255,0),rgba(22,216,255,0.32),rgba(124,60,255,0.36),rgba(22,216,255,0))] md:block" />
            {process.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(53,92,255,0.08)_62%,rgba(0,0,31,0.42))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,31,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(22,216,255,0.055)_34%,rgba(124,60,255,0.13)_70%,rgba(0,0,31,0.46))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_88px_rgba(22,216,255,0.12),0_18px_70px_rgba(124,60,255,0.16)]"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.7),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(53,92,255,0.2)] transition duration-300 group-hover:border-cyan-300/28 group-hover:bg-[image:var(--button-gradient)] group-hover:shadow-[0_0_34px_rgba(22,216,255,0.2)]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/44 transition duration-300 group-hover:border-cyan-300/24 group-hover:text-white/76">
                    Step 0{index + 1}
                  </span>
                </div>
                <div className="relative z-10 mt-12">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {description}
                  </p>
                  <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[image:var(--button-gradient)] transition-[width] duration-500 group-hover:w-full"
                      style={{ width: `${(index + 1) * 28}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-xs text-2xl font-semibold leading-tight text-white">
              A glimpse of brands we&apos;ve helped shape and grow.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Website experiences shaped for clarity, credibility, and a
              stronger first impression.
            </p>
          </div>
          <div>
            <div className="mb-6 flex justify-start sm:justify-end">
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-white/14 bg-white/[0.035] px-5 text-xs font-bold uppercase tracking-[0.16em] hover:bg-white hover:text-[#00001F]"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(22,216,255,0.035)_36%,rgba(124,60,255,0.1)_72%,rgba(0,0,31,0.44))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_90px_rgba(22,216,255,0.13),0_18px_72px_rgba(124,60,255,0.16)]"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative aspect-[16/11] overflow-hidden rounded-xl">
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight text-white">
              Why businesses choose{" "}
              <span>WBYB.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              We keep the work practical, polished, and focused on what helps
              your brand earn trust faster.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.44))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_90px_rgba(22,216,255,0.12),0_18px_70px_rgba(124,60,255,0.16)]"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.7),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(53,92,255,0.2)] transition duration-300 group-hover:border-cyan-300/28 group-hover:bg-[image:var(--button-gradient)] group-hover:shadow-[0_0_34px_rgba(22,216,255,0.2)]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/30 transition duration-300 group-hover:text-cyan-100/70">
                    0{index + 1}
                  </span>
                </div>
                <div className="relative z-10 mt-12">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {description}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/36 transition duration-300 group-hover:text-white/78">
                    Built in
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.24),transparent)]" />
                    <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.045)_34%,rgba(124,60,255,0.12)_70%,rgba(0,0,31,0.44))] px-5 py-12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,31,0.28)] backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.68),transparent)]" />
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight">
              Real words from real clients.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/58">
              Browse the stories, swipe on mobile, or use the controls to see
              what clients experienced while working with us.
            </p>
          </div>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
