import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskmanagerImg from "@/assets/project-taskmanager.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import socialImg from "@/assets/project-social.jpg";
import fitnessImg from "@/assets/project-fitness.jpg";
import academyImg from "@/assets/project-academy.jpg";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with real-time analytics, inventory management, and order tracking.",
      image: ecommerceImg,
      tech: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
      github: "https://github.com/yourusername/ecommerce-dashboard",
      live: "https://ecommerce-dashboard-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and team features.",
      image: taskmanagerImg,
      tech: ["Next.js", "MongoDB", "Framer Motion", "Node.js"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      image: weatherImg,
      tech: ["React", "OpenWeather API", "Mapbox", "CSS3"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-app-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio showcase with smooth animations and modern design principles.",
      image: portfolioImg,
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "MDX"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-demo.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with automated reporting features.",
      image: socialImg,
      tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://social-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Personal fitness application with workout planning and progress tracking capabilities.",
      image: fitnessImg,
      tech: ["React Native", "Firebase", "Redux", "Charts"],
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://fitness-tracker-demo.vercel.app",
      featured: false
    },
    {
      id: 7,
      title: "Academy Vista",
      description: "Modern educational platform with course management, student tracking, and interactive learning features.",
      image: academyImg,
      tech: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      github: "https://github.com/yourusername/academy-vista",
      live: "https://academy-vista-webfront.vercel.app/",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="pt-6 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group cursor-pointer bg-card/80 backdrop-blur-sm border border-border/30"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-background/90 hover:bg-background text-foreground border border-border/50 backdrop-blur-sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="bg-gradient-primary hover:opacity-90 text-white shadow-lg"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted/80 text-muted-foreground text-xs rounded-md font-medium border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8"
        >
          <Button variant="glow" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;