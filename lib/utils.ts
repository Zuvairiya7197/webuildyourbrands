import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const glassCardClass =
  "rounded-[32px] border border-[#7c3cff]/35 bg-[linear-gradient(145deg,rgba(22,216,255,0.08),rgba(53,92,255,0.08)_32%,rgba(45,0,80,0.32)_62%,rgba(239,47,255,0.16))] shadow-[0_22px_80px_rgba(53,92,255,0.18),0_18px_70px_rgba(239,47,255,0.14)] backdrop-blur-xl";

export const neonButtonClass =
  "border border-white/15 bg-[image:var(--button-gradient)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-4px_0_rgba(0,0,31,0.34),0_10px_0_rgba(0,0,31,0.34),0_14px_24px_rgba(0,0,31,0.26)] hover:-translate-y-1 hover:brightness-110 hover:saturate-125 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-4px_0_rgba(0,0,31,0.3),0_14px_0_rgba(0,0,31,0.32),0_24px_42px_rgba(23,70,216,0.34),0_0_34px_rgba(124,60,255,0.32)] active:translate-y-1 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_0_rgba(0,0,31,0.38),0_6px_0_rgba(0,0,31,0.36),0_10px_18px_rgba(0,0,31,0.24)]";
