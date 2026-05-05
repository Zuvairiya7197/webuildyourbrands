import dynamic from "next/dynamic";
import { WebsiteStoreItem } from "@/lib/web-store-data";

const WebsiteCard = dynamic(() => import("@/components/web-store/WebsiteCard"), {
  loading: () => (
    <div className="min-h-[560px] rounded-[28px] border border-white/10 bg-white/[0.045]" />
  )
});

type WebStoreGridProps = {
  websites: WebsiteStoreItem[];
};

export default function WebStoreGrid({ websites }: WebStoreGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {websites.map((website) => (
        <WebsiteCard key={website.id} website={website} />
      ))}
    </div>
  );
}
