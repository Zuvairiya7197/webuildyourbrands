import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function CTA({
  eyebrow,
  title = "Ready to grow your brand?",
  description = "Bring us your goals. We will turn them into a fast, focused website built to convert.",
  buttonLabel = "Book a Call"
}: CTAProps) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-24 xl:px-32 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 border-y border-border py-14 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {description}
          </p>
        </div>
        <Button asChild size="lg">
          <CalendlyLink>
            {buttonLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CalendlyLink>
        </Button>
        <div className="relative hidden h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-muted lg:block">
          <Image
            src="/rocket.webp"
            alt="Launch symbol"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
