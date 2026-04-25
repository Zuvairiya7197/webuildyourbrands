import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const glassCardClass =
  "rounded-[32px] border border-[#7c3cff]/35 bg-[linear-gradient(145deg,rgba(22,216,255,0.08),rgba(53,92,255,0.08)_32%,rgba(45,0,80,0.32)_62%,rgba(239,47,255,0.16))] shadow-[0_22px_80px_rgba(53,92,255,0.18),0_18px_70px_rgba(239,47,255,0.14)] backdrop-blur-xl";

export const neonButtonClass =
  "bg-[var(--button-gradient)] bg-[length:100%_100%] text-white shadow-[0_12px_34px_rgba(53,92,255,0.32),0_0_24px_rgba(239,47,255,0.22)] hover:brightness-110 hover:saturate-150 hover:shadow-[0_18px_48px_rgba(22,216,255,0.28),0_0_34px_rgba(239,47,255,0.42)] active:brightness-95";
