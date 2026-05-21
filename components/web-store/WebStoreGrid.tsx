"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { WebsiteStoreItem } from "@/lib/web-store-data";
import { cn } from "@/lib/utils";

const WebsiteCard = dynamic(() => import("@/components/web-store/WebsiteCard"), {
  loading: () => (
    <div className="min-h-[560px] rounded-[28px] border border-white/10 bg-white/[0.045]" />
  )
});

type WebStoreGridProps = {
  websites: WebsiteStoreItem[];
};

const categories = [
  "All",
  "Local Services",
  "Real Estate",
  "Education",
  "Portfolio",
  "Coaches",
  "Creators"
] as const;

export default function WebStoreGrid({ websites }: WebStoreGridProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const categoryCounts = useMemo(() => {
    return websites.reduce<Record<string, number>>((counts, website) => {
      counts[website.category] = (counts[website.category] ?? 0) + 1;
      return counts;
    }, {});
  }, [websites]);
  const visibleWebsites = activeCategory === "All"
    ? websites
    : websites.filter((website) => website.category === activeCategory);

  return (
    <div className="grid gap-8">
      <div className="sticky top-20 z-20 -mx-4 border-y border-white/10 bg-[#00001F]/78 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border sm:bg-[#00001F]/62">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const count = category === "All" ? websites.length : categoryCounts[category] ?? 0;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                disabled={count === 0}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-xs font-bold transition duration-300",
                  isActive
                    ? "border-cyan-100/28 bg-[linear-gradient(120deg,rgba(22,216,255,0.18),rgba(124,60,255,0.2))] text-white shadow-[0_10px_28px_rgba(22,216,255,0.1)]"
                    : "border-white/10 bg-white/[0.035] text-white/54 hover:border-white/18 hover:bg-white/[0.06] hover:text-white/80",
                  count === 0 && "cursor-not-allowed opacity-38 hover:border-white/10 hover:bg-white/[0.035] hover:text-white/54"
                )}
              >
                {category}
                <span className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] text-white/54">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {visibleWebsites.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleWebsites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-8 text-center text-white">
          <h3 className="text-xl font-semibold">More templates are being curated.</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/56">
            This category will expand as new ready-made websites are added to the store.
          </p>
        </div>
      )}
    </div>
  );
}
