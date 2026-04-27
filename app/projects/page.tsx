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
    description:
      "A polished service website designed to communicate calm, clarity, and trust for an organizing-led personal brand.",
    image: "/project-organise-with-kopal.webp",
    projectUrl: "https://www.organisewithkopal.com/"
  },
  {
    title: "SM Classes",
    category: "Education Website",
    description:
      "A structured education presence built to make programs, outcomes, and next steps easier for students to understand.",
    image: "/project-sm-classes.webp",
    projectUrl: "https://smclasses.in/"
  },
  {
    title: "Little Ilmies",
    category: "Learning Platform",
    description:
      "A friendly learning experience with a clear visual system and approachable pathways for parents and young learners.",
    image: "/project-little-ilmies.webp",
    projectUrl: "https://littleilmies.com/"
  },
  {
    title: "Zarrar Palekar",
    category: "Portfolio Website",
    description:
      "A portfolio system shaped around credibility, sharp presentation, and direct paths from work samples to inquiry.",
    image: "/project-zarrar-palekar.webp",
    projectUrl: "https://zarrarpalekar.vercel.app/"
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
        description="A curated set of website builds with clean structure, refined visuals, and conversion-focused presentation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.title} {...project} index={index} />
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
