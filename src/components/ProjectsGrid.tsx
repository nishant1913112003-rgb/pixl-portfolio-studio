import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with real-time analytics, inventory management, and order tracking.",
      image: "/api/placeholder/600/400",
      tech: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and team features.",
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "MongoDB", "Framer Motion", "Node.js"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      image: "/api/placeholder/600/400",
      tech: ["React", "OpenWeather API", "Mapbox", "CSS3"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio showcase with smooth animations and modern design principles.",
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "MDX"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with automated reporting features.",
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Personal fitness application with workout planning and progress tracking capabilities.",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Firebase", "Redux", "Charts"],
      github: "#",
      live: "#",
      featured: false
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
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`glass-card overflow-hidden group cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="glass"
                      className="text-white border-white/20 hover:bg-white/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="glow"
                      className="text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <motion.div
                    className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
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
          className="text-center mt-16"
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