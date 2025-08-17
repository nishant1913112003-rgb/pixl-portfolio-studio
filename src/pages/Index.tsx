import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Sidebar />
      {/* Desktop layout with sidebar margin */}
      <main className="md:ml-80 pb-20 md:pb-0">
        <HeroSection />
        <TechStack />
        <ProjectsGrid />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
