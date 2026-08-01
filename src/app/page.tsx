import { AboutSection } from "@/components/about-section";
import { CertificatesGallerySection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { GallerySection } from "@/components/gallery-section";
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
      <CertificatesGallerySection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
