"use client";

import { createContext, useContext, useState } from "react";
import Image from "next/image";

const ExtraWorkContext = createContext<{
  showExtra: boolean;
  setShowExtra: (value: boolean) => void;
} | null>(null);

export function ProjectExtraWorkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <ExtraWorkContext.Provider value={{ showExtra, setShowExtra }}>
      {children}
    </ExtraWorkContext.Provider>
  );
}

function useExtraWork() {
  const context = useContext(ExtraWorkContext);
  if (!context) {
    throw new Error(
      "ProjectExtraWork components must be used within a ProjectExtraWorkProvider",
    );
  }
  return context;
}

export function ProjectExtraWorkImage({
  projectTitle,
  image,
  sizes,
  className,
}: {
  projectTitle: string;
  image: string;
  sizes: string;
  className?: string;
}) {
  const { showExtra } = useExtraWork();

  return (
    <Image
      src={image}
      alt={`${projectTitle} additional design work`}
      fill
      sizes={sizes}
      className={`transition duration-500 ${showExtra ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
    />
  );
}

export function ProjectExtraWorkLabel({ label }: { label: string }) {
  const { setShowExtra } = useExtraWork();

  return (
    <span
      className="relative z-10 mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-white/50 underline decoration-white/25 underline-offset-4 transition duration-300 hover:text-cyan-100/80 hover:decoration-cyan-100/40"
      onMouseEnter={() => setShowExtra(true)}
      onMouseLeave={() => setShowExtra(false)}
      onClick={(event) => event.preventDefault()}
    >
      {label}
    </span>
  );
}
