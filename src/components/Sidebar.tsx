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
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed left-0 top-0 h-full w-80 z-50 flex-col"
        style={{ background: 'var(--gradient-sidebar)' }}
      >
        <div className="flex flex-col h-full p-6 border-r border-border/20 backdrop-blur-xl">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Portfolio</h1>
            <p className="text-sm text-muted-foreground">Developer</p>
          </div>

          {/* Navigation Items */}
          <div className="mb-8">
            <h2 className="text-muted-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
              Navigation
            </h2>
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="loveable-nav-item group flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/80 hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  <span className="font-medium">{item.label}</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="mt-auto">
            <h2 className="text-muted-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
              Connect
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: (navItems.length + index) * 0.1 }}
                  className="loveable-social group flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 hover:bg-gradient-primary border border-border/20 hover:border-primary/50 text-foreground/70 hover:text-white transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-xs font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t border-border/20"
        style={{ background: 'var(--gradient-sidebar)' }}
      >
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.slice(0, 4).map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="loveable-mobile-nav flex flex-col items-center gap-1 p-2 rounded-lg text-foreground/70 hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:shadow-glow active:scale-95"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.a>
          ))}
          
          {/* More menu for remaining items */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="loveable-mobile-nav flex flex-col items-center gap-1 p-2 rounded-lg text-foreground/70 hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:shadow-glow active:scale-95"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1 h-1 bg-current rounded-full" />
                <div className="w-1 h-1 bg-current rounded-full" />
                <div className="w-1 h-1 bg-current rounded-full" />
                <div className="w-1 h-1 bg-current rounded-full" />
              </div>
            </div>
            <span className="text-xs font-medium">More</span>
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar;