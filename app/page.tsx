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
  { value: "100%", label: "Mobile-first builds" },
  { value: "100%", label: "Performance focus" },
  { value: "0%", label: "Template reuse" }
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

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_2fr]">
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight text-white">
              Strategy. Design. Digital. All under{" "}
              <span>one roof.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className={`border-l border-cyan-300/10 pl-6 ${
                  index === 0 ? "md:border-l" : ""
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle,#2032ff_0%,#151345_72%)] shadow-[0_0_24px_rgba(53,92,255,0.35)]">
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/68">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-xl border border-cyan-300/10 bg-[#05051a]/80 px-7 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_70px_rgba(22,216,255,0.06)] backdrop-blur-xl md:grid-cols-3">
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={`text-center ${
                index > 0 ? "md:border-l md:border-cyan-300/10" : ""
              }`}
            >
              <p
                className={`text-4xl font-bold ${
                    "text-white"
                }`}
              >
                {value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white/78">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_2fr]">
          <div>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight text-white">
              A clear <span>process.</span>
              <br />
              Real results.
            </h2>
          </div>
          <div className="relative grid gap-10 md:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-[21.5px] hidden border-t border-dashed border-cyan-300/16 md:block" />
            {process.map(({ title, description, Icon }, index) => (
              <article key={title} className="relative text-center md:text-left">
                <div className="relative z-10 mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[radial-gradient(circle,#355cff,#3a0d86)] text-sm font-bold text-white shadow-[0_0_24px_rgba(53,92,255,0.45)] md:mx-0">
                  0{index + 1}
                </div>
                <div className="mx-auto mt-10 max-w-[15rem] md:mx-0">
                  <Icon className="mx-auto h-9 w-9 text-white md:mx-0" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_2fr]">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-xs text-2xl font-semibold leading-tight text-white">
              A glimpse of brands we&apos;ve helped shape and grow.
            </h2>
          </div>
          <div>
            <div className="mb-5 flex justify-end">
              <Button asChild variant="outline" className="h-9 rounded-lg text-xs">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-xl border border-cyan-300/10 bg-[#05051a]/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#16d8ff]/28"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-end justify-between p-4">
                    <div>
                      <h3 className="text-sm font-bold text-white">{project.title}</h3>
                      <p className="mt-1 text-xs text-white/62">
                        {project.category}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_2fr]">
          <div>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight text-white">
              Why businesses choose{" "}
              <span>WBYB.</span>
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {reasons.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className={`flex gap-5 ${
                  index > 0 ? "md:border-l md:border-cyan-300/10 md:pl-7" : ""
                }`}
              >
                <Icon className="h-10 w-10 shrink-0 text-white drop-shadow-[0_0_18px_rgba(22,216,255,0.65)]" />
                <div>
                  <h3 className="text-base font-bold text-white">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/68">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[linear-gradient(110deg,rgba(14,165,233,0.22),rgba(124,60,255,0.2)_45%,rgba(239,47,255,0.22))] px-5 py-9 text-white sm:px-8 lg:px-10">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight">
              Real words from real clients.
            </h2>
          </div>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
