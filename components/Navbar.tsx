"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarDays, Linkedin, Menu, X } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { cn, neonButtonClass } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

const LINKEDIN_URL = "https://www.linkedin.com/company/webuildyourbrands";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(22,216,255,0.12),transparent_34%),radial-gradient(circle_at_86%_0%,rgba(124,60,255,0.22),transparent_42%),linear-gradient(180deg,rgba(0,0,31,0.9),rgba(5,3,31,0.76))] px-5 text-white shadow-[0_14px_46px_rgba(0,0,31,0.3)] backdrop-blur-xl transition duration-300 sm:px-8 md:border-b-0 md:bg-transparent md:shadow-none md:backdrop-blur-none lg:px-10",
        isScrolled &&
          "bg-[#00001F]/82 shadow-[0_18px_60px_rgba(0,0,31,0.3)] backdrop-blur-xl md:bg-transparent md:shadow-none md:backdrop-blur-none"
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-[116rem] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="relative h-12 w-36 shrink-0 sm:h-16 sm:w-48">
          <Image
            src="/wbyblogo.webp"
            alt="WEBuildYourBrands"
            fill
            sizes="(min-width: 640px) 192px, 160px"
            className="object-contain"
            priority
          />
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#00001F]/45 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_50px_rgba(0,0,31,0.28),0_0_32px_rgba(124,60,255,0.12)] backdrop-blur-xl md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-3 text-base font-semibold text-white/82 transition duration-200 hover:bg-[image:var(--button-gradient)] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_24px_rgba(23,70,216,0.2)] lg:px-5",
                  isActive &&
                    "bg-[image:var(--button-gradient)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_24px_rgba(23,70,216,0.24)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className={`h-11 rounded-full px-6 text-sm font-semibold ${neonButtonClass}`}
          >
            {isContactPage ? (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            ) : (
              <CalendlyLink>
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book a Call
              </CalendlyLink>
            )}
          </Button>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_28px_rgba(0,0,31,0.22)] backdrop-blur-md transition hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <div
            className={cn(
              "fixed inset-x-4 top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-3xl border border-white/12 bg-[radial-gradient(circle_at_12%_0%,rgba(22,216,255,0.13),transparent_34%),radial-gradient(circle_at_90%_12%,rgba(124,60,255,0.24),transparent_42%),linear-gradient(145deg,rgba(0,0,31,0.96),rgba(12,0,38,0.94))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_80px_rgba(0,0,31,0.48),0_0_34px_rgba(124,60,255,0.2)] backdrop-blur-xl transition duration-200",
              isMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            )}
          >
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block min-h-11 rounded-2xl px-4 py-3 text-base font-semibold text-white/80 transition hover:bg-[image:var(--button-gradient)] hover:text-white",
                    isActive && "bg-[image:var(--button-gradient)] text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              asChild
              className={`mt-3 h-12 w-full rounded-full ${neonButtonClass}`}
            >
              {isContactPage ? (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              ) : (
                <CalendlyLink>
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Book a Call
                </CalendlyLink>
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
