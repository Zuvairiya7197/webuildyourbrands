import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { neonButtonClass } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 text-white sm:px-8 lg:px-10">
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
        <div className="hidden items-center bg-white/[0.03] backdrop-blur-md md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-5 text-base font-semibold text-white transition hover:bg-white/10 lg:px-5"
            >
              {link.label}
            </Link>
          ))}
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
          <div className="absolute right-0 top-14 w-56 rounded-lg border border-cyan-300/12 bg-black/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_70px_rgba(22,216,255,0.08)] backdrop-blur-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
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
