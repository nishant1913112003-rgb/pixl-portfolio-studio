import { motion } from "framer-motion";
import { User, Award, Briefcase, Code, GraduationCap, Linkedin, Github, Send, Phone } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { icon: User, label: "About", href: "#about" },
    { icon: Award, label: "Skills", href: "#skills" },
    { icon: Briefcase, label: "Jobs", href: "#jobs" },
    { icon: Code, label: "Projects", href: "#projects" },
    { icon: GraduationCap, label: "Education", href: "#education" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },  
    { icon: Send, label: "Telegram", href: "#" },
    { icon: Phone, label: "Phone", href: "#" },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-80 border-r border-sidebar-border z-50 bg-sidebar-background/95 backdrop-blur-xl"
    >
      <div className="flex flex-col h-full p-6">
        {/* Categories Section */}
        <div className="mb-8">
          <h2 className="text-sidebar-foreground/60 text-sm font-medium mb-4 uppercase tracking-wider">
            Categories
          </h2>
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="sidebar-nav group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Social Links Section */}
        <div className="mt-auto">
          <h2 className="text-sidebar-foreground/60 text-sm font-medium mb-4 uppercase tracking-wider">
            Social Link
          </h2>
          <div className="space-y-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (navItems.length + index) * 0.1 }}
                className="sidebar-nav group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;