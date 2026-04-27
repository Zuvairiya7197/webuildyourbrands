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
    title: "Organise With Kopal",
    category: "Productivity Website",
    image: "/project-organise-with-kopal.webp"
  },
  {
    title: "SM Classes",
    category: "Education Website",
    image: "/project-sm-classes.webp"
  },
  {
    title: "Little Ilmies",
    category: "Learning Platform",
    image: "/project-little-ilmies.webp"
  },
  {
    title: "Zarrar Palekar",
    category: "Portfolio Website",
    image: "/project-zarrar-palekar.webp"
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
        className="pt-24 sm:pt-28 lg:pt-32"
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
