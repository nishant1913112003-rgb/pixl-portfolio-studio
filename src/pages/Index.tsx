import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <HeroSection />
      <TechStack />
      <ProjectsGrid />
      <ContactForm />
    </div>
  );
};

export default Index;
