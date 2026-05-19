export type WebsiteStoreItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  techStack: string[];
  features: string[];
  previewUrl: string;
  thumbnail: string;
  seoScore: number | string;
  performanceScore: number | string;
};

export const websiteStoreItems: WebsiteStoreItem[] = [
  {
    id: "ac-repair-website",
    title: "AC Repair Website",
    description:
      "A high-converting ready-made AC repair website built for emergency bookings, local service-area visibility, trust signals, and fast phone inquiries from homeowners needing urgent cooling repair.",
    price: "$2000",
    techStack: ["Next.js", "React", "Tailwind CSS", "Local SEO Schema"],
    features: [
      "Fast Loading",
      "SEO Optimized",
      "Fully Responsive",
      "Conversion Focused",
      "Customizable according to your needs",
      "Sticky call-now emergency CTA",
      "24/7 emergency repair hero section",
      "Service-area sections for local SEO",
      "Upfront pricing and response-time highlights",
      "Review-ready layout for HVAC credibility"
    ],
    previewUrl: "https://ac-repair-wbyb.vercel.app/",
    thumbnail: "/ Project AC Repair.png",
    seoScore: 100,
    performanceScore: 100
  },
  {
    id: "emergency-plumbing-website",
    title: "Emergency Plumbing Website",
    description:
      "A high-converting ready-made plumbing website built for emergency calls, local service-area visibility, trust signals, and fast phone inquiries from homeowners who need help now.",
    price: "$1500",
    techStack: ["Next.js", "React", "Tailwind CSS", "Local SEO Schema"],
    features: [
      "Fast Loading",
      "SEO Optimized",
      "Fully Responsive",
      "Conversion Focused",
      "Customizable according to your needs",
      "Sticky call-now emergency CTA",
      "24/7 emergency service hero",
      "Licensed and insured trust badges",
      "Service-area sections for local SEO",
      "Upfront pricing and response-time highlights",
      "Review-ready layout for plumber credibility"
    ],
    previewUrl: "https://plumbing-services-wbyb.vercel.app/",
    thumbnail: "/ Project Plumbing sevices.png",
    seoScore: 100,
    performanceScore: 100
  }
];
