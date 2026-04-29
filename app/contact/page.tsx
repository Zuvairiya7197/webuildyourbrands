import type { Metadata } from "next";
import {
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { CALENDLY_EMBED_URL } from "@/lib/constants";
import { glassCardClass, neonButtonClass } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WEBuildYourBrands to discuss your next website, brand, or landing page project.",
};

const contactMethods = [
  {
    title: "Email us",
    description: "Send goals, references, timelines, or questions.",
    value: "contactus@webuildyourbrands.com",
    href: "mailto:contactus@webuildyourbrands.com",
    Icon: Mail,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/webuildyourbrands",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_we_build_your_brands_/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589040772725",
    Icon: null,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919987448073?text=Hi%2C%20I%20want%20to%20discuss%20a%20website%20project.",
    Icon: null,
  },
];

const trustPoints = [
  "Fast response",
  "Clear communication",
  "Built around your goals",
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell us what you're building - we'll show you how to turn it into a website that brings inquiries. If your website isn't bringing inquiries, it's costing you every day. Simple process. Clear next steps. No pressure."
        videoSrc="/Contact page hero.mp4"
        primaryLabel="Book a Free Strategy Call"
        primaryHref="#contact-form"
        secondaryLabel="Send Your Details"
        secondaryHref="mailto:contactus@webuildyourbrands.com"
      />
      <section
        id="contact-form"
        className="contact-form-section relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 sm:py-28 lg:px-24 lg:py-32 xl:px-32"
      >
        <div className="absolute inset-0 bg-[#00001F]/84" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,60,255,0.2),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(22,216,255,0.12),transparent_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside
            className={`${glassCardClass} overflow-hidden p-5 text-white sm:p-8`}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/58">
              <Sparkles
                className="h-3.5 w-3.5 text-cyan-100"
                aria-hidden="true"
              />
              Start here
            </p>
            <h2 className="mt-7 text-2xl font-semibold tracking-tight sm:text-4xl">
              Tell us your goal - we&apos;ll guide the rest.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Share your goals, timeline, and any existing website or brand
              materials. We will reply with clear next steps.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/58"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-cyan-100"
                    aria-hidden="true"
                  />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4">
              {contactMethods.map(
                ({ title, description, value, href, Icon }) => (
                  <a
                    key={title}
                    href={href}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.06]"
                  >
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
                  </a>
                ),
              )}
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/52">
                Socials
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-3 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#00001F]/48 text-white/88 transition duration-300 group-hover:bg-[image:var(--button-gradient)]">
                      {Icon ? (
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      ) : label === "Facebook" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M15.12 8.08h2.21V4.3A28.4 28.4 0 0 0 14.11 4c-3.19 0-5.37 1.95-5.37 5.54v3.08H5.14v4.23h3.6V24h4.43v-7.15h3.55l.56-4.23h-4.11V9.95c0-1.22.34-1.87 1.95-1.87Z" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 32 32"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M16.01 3.2c-6.95 0-12.6 5.56-12.6 12.4 0 2.34.67 4.6 1.94 6.56l-1.29 6.64 6.82-1.54a12.8 12.8 0 0 0 5.13 1.05c6.95 0 12.6-5.56 12.6-12.4s-5.65-12.71-12.6-12.71Zm0 22.86c-1.73 0-3.42-.44-4.91-1.28l-.36-.2-4.08.92.77-3.97-.24-.38a10.02 10.02 0 0 1-1.54-5.35c0-5.6 4.65-10.15 10.36-10.15s10.36 4.55 10.36 10.15-4.65 10.26-10.36 10.26Zm5.83-7.57c-.32-.16-1.9-.92-2.2-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.55-.95-.84-1.6-1.88-1.78-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.72-1.7-.98-2.33-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.58s1.13 3 1.29 3.21c.16.21 2.23 3.36 5.4 4.71.76.32 1.35.52 1.81.66.76.24 1.45.21 1.99.13.61-.09 1.9-.76 2.17-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.61-.37Z" />
                        </svg>
                      )}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/84">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-300/14 bg-[#00001F]/46 p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/54">
                <MessageSquare
                  className="h-4 w-4 text-cyan-100"
                  aria-hidden="true"
                />
                Useful to include
              </h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/68">
                {[
                  "Your business name",
                  "Website or reference links",
                  "Timeline and budget range",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-100"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="grid gap-8">
            <div className="relative overflow-hidden rounded-[26px] border border-white/22 bg-white/[0.075] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(255,255,255,0.06),0_28px_100px_rgba(0,0,31,0.38),0_0_52px_rgba(124,60,255,0.16)] backdrop-blur-2xl sm:rounded-[32px]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.18),transparent_34%),radial-gradient(circle_at_92%_10%,rgba(124,60,255,0.24),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035)_44%,rgba(0,0,31,0.38))]"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),rgba(22,216,255,0.72),transparent)]" />
              <div className="relative border-b border-white/14 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-100/70">
                  Schedule with WBYB
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Pick a time for your discovery call.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
                  Book directly with We Build Your Brands. We will use the call
                  to understand your goals, timeline, and the website or brand
                  outcome you need.
                </p>
              </div>
              <div className="relative p-3 sm:p-5">
                <div
                  className="absolute inset-3 rounded-[22px] bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:inset-5 sm:rounded-[26px]"
                  aria-hidden="true"
                />
                <iframe
                  src={CALENDLY_EMBED_URL}
                  title="WEBuildYourBrands Calendly scheduling page"
                  className="relative h-[920px] min-h-[760px] w-full rounded-[20px] border border-white/14 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.18)] sm:rounded-[24px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 sm:pb-28 lg:px-24 lg:pb-32 xl:px-32">
        <div
          className={`${glassCardClass} mx-auto max-w-6xl p-6 text-center text-white sm:p-10`}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/44">
            Next step
          </p>
          <h2 className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to turn your website into a lead generator?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            We&apos;ll help you find the clearest next step for your website.
          </p>
          <Button
            asChild
            className={`mt-8 h-12 rounded-full px-7 text-base font-bold ${neonButtonClass}`}
          >
            <CalendlyLink>Book Your Free Call →</CalendlyLink>
          </Button>
        </div>
      </section>
    </>
  );
}
