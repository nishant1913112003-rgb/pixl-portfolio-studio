import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import aurelionImg from "@/assets/aurelion-builders.jpg";
import weatherImg from "@/assets/weather-dashboard.jpg";
import todoImg from "@/assets/todo-app.jpg";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Aurelion Builders",
      description: "Professional construction and real estate company website with comprehensive services, project showcases, and modern design.",
      image: aurelionImg,
      tech: ["React", "TailwindCSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/yourusername/aurelion-builders",
      live: "https://aurelionbuilders.com/",
      featured: true
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Interactive weather application with location search, current weather, hourly and 5-day forecasts.",
      image: weatherImg,
      tech: ["React", "Weather API", "Location Services", "CSS3"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-web-app-omega-neon.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Simple Todo App",
      description: "Clean and minimalist task management application with gradient design and smooth user experience.",
      image: todoImg,
      tech: ["React", "Local Storage", "CSS Gradients", "JavaScript"],
      github: "https://github.com/yourusername/simple-todo-app",
      live: "https://simple-todo-app-cyan-gamma.vercel.app/",
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