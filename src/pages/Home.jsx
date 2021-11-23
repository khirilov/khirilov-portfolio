import React from "react";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactBanner from "../components/ContactBanner";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}
