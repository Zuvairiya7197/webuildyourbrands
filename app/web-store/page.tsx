import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { websiteStoreItems } from "@/lib/web-store-data";

const WebStorePage = dynamic(
  () => import("@/components/web-store/WebStorePage"),
  {
    loading: () => (
      <div className="min-h-screen px-4 pt-32 sm:px-8 lg:px-24 xl:px-32">
        <div className="mx-auto h-[420px] max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.045]" />
      </div>
    )
  }
);

const siteUrl = "https://www.webuildyourbrands.com";
const pageUrl = `${siteUrl}/web-store`;
const description =
  "Buy ready-made websites from WEBuildYourBrands. Explore fast loading, SEO optimized, fully responsive, conversion focused websites for service brands, educators, creators, and founders.";

export const metadata: Metadata = {
  title: "Buy Ready-Made Websites | Web Store",
  description,
  alternates: {
    canonical: "/web-store"
  },
  openGraph: {
    title: "Buy Ready-Made Websites | Web Store",
    description,
    url: pageUrl,
    siteName: "We Build Your Brands",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Ready-made websites for sale by WEBuildYourBrands"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Ready-Made Websites | Web Store",
    description,
    images: ["/social-preview.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const productSchema = websiteStoreItems.map((website) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${pageUrl}#${website.id}`,
  name: website.title,
  description: website.description,
  image: `${siteUrl}${website.thumbnail}`,
  url: `${pageUrl}#${website.id}`,
  brand: {
    "@type": "Brand",
    name: "WEBuildYourBrands"
  },
  sku: website.id,
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/contact?website=${website.id}`,
    priceCurrency: "USD",
    price: website.price.replace(/[^0-9.]/g, ""),
    availability: "https://schema.org/InStock"
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "SEO Score",
      value: String(website.seoScore)
    },
    {
      "@type": "PropertyValue",
      name: "Performance Score",
      value: String(website.performanceScore)
    },
    {
      "@type": "PropertyValue",
      name: "Tech Stack",
      value: website.techStack.join(", ")
    }
  ]
}));

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c")
        }}
      />
      <WebStorePage />
    </>
  );
}
