import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("px-4 py-16 sm:px-8 sm:py-28 lg:px-24 lg:py-32 xl:px-32", className)}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-3xl sm:mb-10">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
