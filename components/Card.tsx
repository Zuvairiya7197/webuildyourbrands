import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UICard } from "@/components/ui/card";
import { cn, neonButtonClass } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  description?: string;
  category?: string;
  image?: string;
  projectUrl?: string;
  index?: number;
  className?: string;
};

export default function Card({
  title,
  description,
  category,
  image,
  projectUrl,
  index = 0,
  className
}: CardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I saw your ${title} project example and I want a similar kind of website.`
  );
  const whatsappHref = `https://wa.me/919987448073?text=${whatsappMessage}`;

  return (
    <UICard
      className={cn(
        "group relative overflow-hidden rounded-2xl border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(22,216,255,0.035)_34%,rgba(124,60,255,0.1)_70%,rgba(0,0,31,0.44))] p-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_78px_rgba(0,0,31,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/28 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_90px_rgba(22,216,255,0.12),0_18px_70px_rgba(124,60,255,0.16)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(22,216,255,0.72),transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />
      {image && (
        <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-[#00001F]/55">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,31,0.02)_0%,rgba(0,0,31,0.15)_46%,rgba(0,0,31,0.82)_100%)]" />
          <span className="absolute left-4 top-4 rounded-full border border-white/14 bg-[#00001F]/58 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
            0{index + 1}
          </span>
          <div className="absolute bottom-4 right-4 flex h-11 w-11 translate-x-2 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white opacity-0 shadow-[0_14px_36px_rgba(0,0,31,0.28)] backdrop-blur-md transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      )}
      <div className="relative px-5 py-6">
        {category && (
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/38 transition duration-300 group-hover:text-cyan-100/72">
            {category}
          </p>
        )}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-white/42 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            aria-hidden="true"
          />
        </div>
        {description && (
          <p className="mt-4 text-sm leading-7 text-white/64">
            {description}
          </p>
        )}
        {image && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {projectUrl && (
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full px-5 text-sm font-bold"
              >
                <Link href={projectUrl} target="_blank" rel="noreferrer">
                  View Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
            <Button
              asChild
              className={`h-11 rounded-full px-5 text-sm font-bold ${neonButtonClass}`}
            >
              <Link href={whatsappHref} target="_blank" rel="noreferrer">
                Start Similar Project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </UICard>
  );
}
