"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu } from "lucide-react";
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

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-5 text-white transition duration-300 sm:px-8 lg:px-10",
        isScrolled && "bg-[#00001F]/76 shadow-[0_18px_60px_rgba(0,0,31,0.28)] backdrop-blur-xl"
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-[116rem] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="relative h-14 w-40 shrink-0 sm:h-16 sm:w-48">
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
            <Link href="/contact">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book a Call
            </Link>
          </Button>
        </div>
        <details className="group relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white [&::-webkit-details-marker]:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-[#00001F]/82 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_70px_rgba(0,0,31,0.32),0_0_28px_rgba(124,60,255,0.16)] backdrop-blur-xl">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-[image:var(--button-gradient)] hover:text-white",
                    isActive && "bg-[image:var(--button-gradient)] text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              asChild
              className={`mt-2 w-full rounded-full ${neonButtonClass}`}
              size="sm"
            >
              <Link href="/contact">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book a Call
              </Link>
            </Button>
          </div>
        </details>
      </nav>
    </header>
  );
}
