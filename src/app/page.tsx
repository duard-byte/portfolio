import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ShowCaseSection } from "@/components/showcase-section";
import { SkillsSection } from "@/components/skills-section";

export default function page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ShowCaseSection />
      <ContactSection />
    </main>
  );
}
