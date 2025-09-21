import { motion } from "framer-motion";

const TechStack = () => {
  const skills = [
    { name: "HTML", class: "tech-html", icon: "HTML" },
    { name: "CSS/SCSS", class: "tech-css", icon: "CSS" },
    { name: "JavaScript", class: "tech-js", icon: "JS" },
    { name: "TypeScript", class: "tech-ts", icon: "TS" },
    { name: "Angular", class: "tech-angular", icon: "A" },
    { name: "Vue", class: "tech-vue", icon: "V" },
    { name: "React", class: "tech-react", icon: "R" },
    { name: "Git", class: "tech-git", icon: "Git" },
  ];

  return (
    <section id="skills" className="pt-4 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className={`tech-icon ${skill.class}`}>
                {skill.icon}
              </div>
              <span className="text-white text-sm font-medium text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;