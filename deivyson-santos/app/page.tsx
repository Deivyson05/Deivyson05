"use client";

import { HeroSection } from "@/components/heroSection";
import { AboutSection } from "@/components/abaoutSection";
import { ProjectsSection } from "@/components/projectsSection";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}