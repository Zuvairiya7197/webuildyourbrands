import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UICard } from "@/components/ui/card";
import { cn, glassCardClass, neonButtonClass } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  description?: string;
  category?: string;
  image?: string;
  className?: string;
};

export default function Card({
  title,
  description,
  category,
  image,
  className
}: CardProps) {
  return (
    <UICard
      className={cn(
        "group relative overflow-hidden p-6 text-white transition duration-300 hover:-translate-y-1",
        glassCardClass,
        className
      )}
    >
      {image && (
        <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="relative">
        {category && (
          <p className="mb-3 text-base font-semibold text-[#a88fc4]">
            {category}
          </p>
        )}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-white/65 transition group-hover:text-white"
            aria-hidden="true"
          />
        </div>
        {description && (
          <p className="mt-4 text-sm leading-7 text-white/70">
            {description}
          </p>
        )}
        {image && (
          <Button
            asChild
            className={`mt-5 rounded-full px-5 text-base ${neonButtonClass}`}
          >
            <Link href="/projects">View Project</Link>
          </Button>
        )}
      </div>
    </UICard>
  );
}
