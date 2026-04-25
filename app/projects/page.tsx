import type { Metadata } from "next";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected website, landing page, and brand experience projects by WEBuildYourBrands."
};

const projects = [
  {
    title: "Northline Studio",
    category: "Brand Website",
    image: "/organisewithkopalproject.webp"
  },
  {
    title: "Organise With Kopal",
    category: "Productivity Website",
    image: "/organisewithkopalproject.webp"
  },
  {
    title: "LI Project",
    category: "Brand Experience",
    image: "/liproect.webp"
  },
  {
    title: "Evergreen Advisory",
    category: "Consulting Website",
    image: "/footerbackround.webp"
  },
  {
    title: "Atlas Fitness",
    category: "Local Service Website",
    image: "/form-backround.webp"
  },
  {
    title: "Brightpath Finance",
    category: "Lead Generation",
    image: "/liproect.webp"
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        eyebrow="Projects"
        title="Selected work across strategy, design, and development."
        description="A grid of polished website experiences built for clarity, trust, and conversion."
        videoSrc="/Projectpagehero.mp4"
      />
      <Section
        className="pt-8"
        eyebrow="Projects"
        title="Featured launches and visual systems."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
