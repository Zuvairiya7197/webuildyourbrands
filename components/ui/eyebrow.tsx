import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/76",
        className,
      )}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(22,216,255,0.8)]" />
      {children}
    </p>
  );
}
