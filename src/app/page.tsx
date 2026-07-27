import { GridBackground } from "@/components/background/grid-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TechStackExplorer } from "@/components/sections/tech-stack";
import { ExperienceTimeline } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { AiWorkflow } from "@/components/sections/ai-workflow";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <GridBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStackExplorer />
        <ExperienceTimeline />
        <Projects />
        <AiWorkflow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
