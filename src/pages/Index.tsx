import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gradient-secondary">
      <Sidebar />
      <main className="flex-1 ml-80">
        <HeroSection />
        <TechStack />
        <ProjectsGrid />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
