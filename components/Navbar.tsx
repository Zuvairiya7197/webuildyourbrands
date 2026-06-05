"use client";

import Image from "next/image";
import Link from "next/link";
import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
};

const leftLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

const rightLinks: NavLink[] = [
  { href: "/projects", label: "Projects" },
  { href: "/web-store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

const links = [...leftLinks, ...rightLinks];

const activePillTransition = {
  type: "spring",
  stiffness: 420,
  damping: 36,
  mass: 0.82,
} as const;

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolledRef = useRef(false);
  const toggleMenu = useCallback(
    () => setIsMenuOpen((current) => !current),
    [],
  );

  useEffect(() => {
    const updateScrollState = () => {
      const nextIsScrolled = window.scrollY > 24;

      if (nextIsScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextIsScrolled;
        setIsScrolled(nextIsScrolled);
      }
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

  const handleDockMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      event.currentTarget.style.setProperty("--dock-x", `${x.toFixed(2)}%`);
      event.currentTarget.style.setProperty("--dock-y", `${y.toFixed(2)}%`);
    },
    [],
  );

  const resetDockReflection = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.currentTarget.style.setProperty("--dock-x", "50%");
      event.currentTarget.style.setProperty("--dock-y", "50%");
    },
    [],
  );

  const handleMagneticMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 5;

    event.currentTarget.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
    event.currentTarget.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
  }, []);

  const resetMagneticMove = useCallback((event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--magnetic-x", "0px");
    event.currentTarget.style.setProperty("--magnetic-y", "0px");
  }, []);

  const renderDesktopLink = (link: NavLink) => {
    const isActive = isActivePath(pathname, link.href);

    return (
      <Link
        key={link.href}
        href={link.href}
        prefetch
        aria-current={isActive ? "page" : undefined}
        onMouseMove={handleMagneticMove}
        onMouseLeave={resetMagneticMove}
        className={cn(
          "wbyb-magnetic relative isolate flex h-11 items-center justify-center rounded-full px-4 text-[0.94rem] font-medium text-[#fff]/70 outline-none transition-colors duration-300 ease-out hover:text-[#fff] focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70 xl:px-5",
          isActive && "text-[#fff]",
        )}
      >
        {isActive && (
          <motion.span
            layoutId="desktop-active-nav-pill"
            className="wbyb-active-pill absolute inset-0 -z-10 rounded-full"
            transition={activePillTransition}
          />
        )}
        <span className="relative z-10">{link.label}</span>
      </Link>
    );
  };

  const renderMobileLink = (link: NavLink) => {
    const isActive = isActivePath(pathname, link.href);

    return (
      <Link
        key={link.href}
        href={link.href}
        prefetch
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "relative isolate flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-[#fff]/75 outline-none transition duration-300 hover:bg-[#fff]/[0.07] hover:text-[#fff] focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70",
          isActive && "text-[#fff]",
        )}
      >
        {isActive && (
          <motion.span
            layoutId="mobile-active-nav-pill"
            className="wbyb-active-pill absolute inset-0 -z-10 rounded-2xl"
            transition={activePillTransition}
          />
        )}
        {link.label}
      </Link>
    );
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 px-4 text-[#fff] sm:px-6 lg:px-8">
      <nav
        className="relative mx-auto flex w-full max-w-[1180px] justify-center"
        aria-label="Main navigation"
      >
        <div
          onMouseMove={handleDockMouseMove}
          onMouseLeave={resetDockReflection}
          className={cn(
            "wbyb-nav-dock pointer-events-auto relative hidden h-16 w-full max-w-full items-center justify-between gap-3 overflow-hidden rounded-[34px] px-3 py-2 transition-all duration-300 ease-out lg:flex",
            isScrolled && "wbyb-nav-dock--scrolled scale-[0.965] px-2.5 py-1.5",
          )}
        >
          <Link
            href="/"
            prefetch
            aria-label="WEBuildYourBrands home"
            onMouseMove={handleMagneticMove}
            onMouseLeave={resetMagneticMove}
            className="wbyb-magnetic relative z-10 flex -my-2 h-20 w-[190px] shrink-0 items-center justify-start rounded-full px-2 outline-none focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70 xl:w-[210px] xl:px-3"
          >
            <Image
              src="/wbyblogo.webp"
              alt="WEBuildYourBrands"
              fill
              priority
              sizes="210px"
              className="wbyb-logo-mark object-contain"
            />
          </Link>
          <div className="relative z-10 flex min-w-0 flex-1 items-center justify-center gap-1">
            {links.map(renderDesktopLink)}
          </div>
          <div className="relative z-10 flex shrink-0 items-center gap-3">
            <div className="h-8 w-px bg-[#fff]/[0.08]" />
            <CalendlyLink
              onMouseMove={handleMagneticMove}
              onMouseLeave={resetMagneticMove}
              className="wbyb-nav-cta wbyb-magnetic inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-[#fff] outline-none focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70 xl:px-6"
            >
              <CalendarDays
                className="relative z-10 h-4 w-4"
                aria-hidden="true"
              />
              <span className="relative z-10 whitespace-nowrap">
                Book Discovery Call
              </span>
            </CalendlyLink>
          </div>
        </div>

        <div className="pointer-events-auto w-full lg:hidden">
          <div
            onMouseMove={handleDockMouseMove}
            onMouseLeave={resetDockReflection}
            className={cn(
              "wbyb-nav-dock relative flex h-14 w-full items-center justify-between overflow-hidden rounded-[30px] px-3 py-2 transition-all duration-300 ease-out",
              isScrolled && "wbyb-nav-dock--scrolled scale-[0.98] py-1.5",
            )}
          >
            <Link
              href="/"
              prefetch
              aria-label="WEBuildYourBrands home"
              className="relative z-10 flex h-16 w-[130px] items-center rounded-full -ml-3 px-2 outline-none focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70 min-[400px]:w-[160px] min-[400px]:px-3 min-[400px]:-ml-1"
            >
              <Image
                src="/wbyblogo.webp"
                alt="WEBuildYourBrands"
                fill
                priority
                sizes="160px"
                className="wbyb-logo-mark object-contain"
              />
            </Link>
            <div className="relative z-10 flex items-center gap-2">
              <CalendlyLink className="wbyb-nav-cta relative inline-flex h-10 items-center justify-center gap-2 rounded-full px-3 text-xs font-medium text-[#fff] outline-none focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70 min-[420px]:px-4">
                <CalendarDays
                  className="relative z-10 h-4 w-4"
                  aria-hidden="true"
                />
                <span className="relative z-10 hidden whitespace-nowrap min-[420px]:inline">
                  Book Call
                </span>
              </CalendlyLink>
              <button
                type="button"
                onClick={toggleMenu}
                className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#fff]/[0.12] bg-[#fff]/[0.055] text-[#fff] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_28px_rgba(0,0,31,0.22)] backdrop-blur-md transition duration-300 hover:bg-[#fff]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70"
                aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <div
            className={cn(
              "wbyb-mobile-panel fixed inset-x-4 top-[92px] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[28px] p-3 transition duration-300 ease-out",
              isMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0",
            )}
          >
            <div className="grid gap-1">{links.map(renderMobileLink)}</div>
            <CalendlyLink className="wbyb-nav-cta mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-[#fff] outline-none focus-visible:ring-2 focus-visible:ring-[#7c3cff]/70">
              <CalendarDays
                className="relative z-10 h-4 w-4"
                aria-hidden="true"
              />
              <span className="relative z-10">Book Discovery Call</span>
            </CalendlyLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default memo(Navbar);
