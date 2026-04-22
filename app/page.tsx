import { HeroSection } from '@/components/portfolio/hero-section';
import { SummarySection } from '@/components/portfolio/summary-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { SoftSkillsSection } from '@/components/portfolio/soft-skills-section';
import { HobbiesSection } from '@/components/portfolio/hobbies-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Footer } from '@/components/portfolio/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      {/* <EducationSection /> */}
      <SoftSkillsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
