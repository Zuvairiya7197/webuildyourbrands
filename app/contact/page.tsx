import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Instagram, Linkedin, Mail, MessageSquare, Sparkles } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WEBuildYourBrands to discuss your next website, brand, or landing page project."
};

const contactMethods = [
  {
    title: "Email us",
    description: "Send goals, references, timelines, or questions.",
    value: "contactus@webuildyourbrands.com",
    href: "mailto:contactus@webuildyourbrands.com",
    Icon: Mail
  },
  {
    title: "Book a call",
    description: "Open the calendar and choose a slot that works.",
    value: "30 minute discovery call",
    Icon: CalendarDays
  }
];

const projectPrompts = [
  "New website",
  "Website redesign",
  "Landing page",
  "Brand visuals",
  "SEO / performance",
  "Not sure yet"
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/webuildyourbrands",
    Icon: Linkedin
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_we_build_your_brands_/",
    Icon: Instagram
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589040772725",
    Icon: null
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919987448073?text=Hi%2C%20I%20want%20to%20discuss%20a%20website%20project.",
    Icon: null
  }
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell us what you are building, where the website fits in your growth plan, and what a successful launch should achieve."
        videoSrc="/Contact page hero.mp4"
        primaryLabel="Send Message"
        primaryHref="#contact-form"
        secondaryLabel="Book A Call"
        secondaryHref="https://calendly.com/meetwbybfounder/30min?month=2026-05"
      />
      <section id="contact-form" className="contact-form-section relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="absolute inset-0 bg-[#00001F]/84" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,60,255,0.2),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(22,216,255,0.12),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className={`${glassCardClass} overflow-hidden p-5 text-white sm:p-8`}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/58">
              <Sparkles className="h-3.5 w-3.5 text-cyan-100" aria-hidden="true" />
              Start here
            </p>
            <h2 className="mt-7 text-2xl font-semibold tracking-tight sm:text-4xl">
              Tell us what you want the website to do.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Share your goals, timeline, and any existing website or brand
              materials. We will reply with clear next steps.
            </p>

            <div className="mt-8 grid gap-4">
              {contactMethods.map(({ title, description, value, href, Icon }) => {
                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#00001F]/58 transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/56">
                        {description}
                      </p>
                      <p className="mt-2 break-words text-sm font-semibold text-cyan-100/82">
                        {value}
                      </p>
                    </div>
                  </>
                );

                return href ? (
                  <a
                    key={title}
                    href={href}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.06]"
                  >
                    {content}
                  </a>
                ) : (
                  <CalendlyLink
                    key={title}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.06]"
                  >
                    {content}
                  </CalendlyLink>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-300/14 bg-[#00001F]/46 p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/54">
                <MessageSquare className="h-4 w-4 text-cyan-100" aria-hidden="true" />
                Useful to include
              </h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/68">
                {["Your business name", "Website or reference links", "Timeline and budget range"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          <div className="grid gap-8">
            <form
              action="mailto:contactus@webuildyourbrands.com"
              method="post"
              encType="text/plain"
              className="relative grid gap-6 overflow-hidden rounded-[26px] border border-white/15 bg-[#00001F]/78 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_90px_rgba(0,0,31,0.28)] backdrop-blur-xl sm:rounded-[32px] sm:p-8"
            >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)]" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-100/58">
                Project details
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Send a clear brief.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
                A few details are enough. We can help shape the rest on the call.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-white/76">
                Name *
                <Input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className="h-[52px] rounded-2xl border-white/10 bg-white/[0.045] text-white placeholder:text-white/32 focus-visible:ring-cyan-300/50"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/76">
                Email *
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="h-[52px] rounded-2xl border-white/10 bg-white/[0.045] text-white placeholder:text-white/32 focus-visible:ring-cyan-300/50"
                />
              </label>
            </div>

            <fieldset className="grid gap-2 text-sm font-semibold text-white/76">
              <legend>What do you need? *</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {projectPrompts.map((item) => (
                  <label
                    key={item}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="project_type"
                      value={item}
                      required
                      className="peer sr-only"
                    />
                    <span className="block rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white/58 transition hover:border-cyan-300/28 hover:bg-white/[0.06] hover:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-200 peer-checked:border-cyan-300/55 peer-checked:bg-[image:var(--button-gradient)] peer-checked:text-white peer-checked:shadow-[0_0_24px_rgba(22,216,255,0.16)]">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2 text-sm font-semibold text-white/76">
              Message *
              <Textarea
                name="message"
                placeholder="Tell us about your business, goals, timeline, and any links we should see."
                required
                className="min-h-44 rounded-2xl border-white/10 bg-white/[0.045] text-white placeholder:text-white/32 focus-visible:ring-cyan-300/50"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-white/48">
                This opens your email app with the message details.
              </p>
              <Button
                type="submit"
                size="lg"
                className={`h-12 w-full rounded-full px-7 text-base font-bold sm:w-auto ${neonButtonClass}`}
              >
                Send Message
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            </form>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(124,60,255,0.14)_58%,rgba(34,0,103,0.36))] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_64px_rgba(0,0,31,0.22)] backdrop-blur-xl sm:p-6">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)]" />
              <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-white/88">
                Connect with us
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex min-h-[74px] items-center justify-center gap-3 rounded-[18px] border border-white/10 bg-[#00001F]/22 px-3 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:shadow-[0_0_26px_rgba(22,216,255,0.12)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/88 transition duration-300 group-hover:bg-[image:var(--button-gradient)] group-hover:text-white">
                      {Icon ? (
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      ) : label === "Facebook" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M15.12 8.08h2.21V4.3A28.4 28.4 0 0 0 14.11 4c-3.19 0-5.37 1.95-5.37 5.54v3.08H5.14v4.23h3.6V24h4.43v-7.15h3.55l.56-4.23h-4.11V9.95c0-1.22.34-1.87 1.95-1.87Z" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 32 32"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M16.01 3.2c-6.95 0-12.6 5.56-12.6 12.4 0 2.34.67 4.6 1.94 6.56l-1.29 6.64 6.82-1.54a12.8 12.8 0 0 0 5.13 1.05c6.95 0 12.6-5.56 12.6-12.4s-5.65-12.71-12.6-12.71Zm0 22.86c-1.73 0-3.42-.44-4.91-1.28l-.36-.2-4.08.92.77-3.97-.24-.38a10.02 10.02 0 0 1-1.54-5.35c0-5.6 4.65-10.15 10.36-10.15s10.36 4.55 10.36 10.15-4.65 10.26-10.36 10.26Zm5.83-7.57c-.32-.16-1.9-.92-2.2-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.55-.95-.84-1.6-1.88-1.78-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.72-1.7-.98-2.33-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.58s1.13 3 1.29 3.21c.16.21 2.23 3.36 5.4 4.71.76.32 1.35.52 1.81.66.76.24 1.45.21 1.99.13.61-.09 1.9-.76 2.17-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.61-.37Z" />
                        </svg>
                      )}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 transition duration-300 group-hover:text-white">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
