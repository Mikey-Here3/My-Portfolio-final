import PortfolioHeader from "@/components/portfolio-header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import GoToTop from "@/components/go-to-top";

export default function Home() {
  return (
    <>
      <PortfolioHeader />

      <main id="top">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </main>
<GoToTop />
    </>
  );
}