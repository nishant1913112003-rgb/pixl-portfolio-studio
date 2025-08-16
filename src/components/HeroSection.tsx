import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(135deg, #FF6B9D 0%, #C44AFF 50%, #4A90E2 100%)"
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                AmirAli Rashidi
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl">
                Innovative Front-End Developer with 4+ years of expertise in building
                responsive, high-performance web applications using Angular, Vue, and React.
                Passionate about merging user-centric design with cutting-edge technology to
                solve complex problems. Proven ability to lead cross-functional teams, mentor
                junior developers, and deliver scalable solutions aligned with Agile workflows.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
              >
                Download Resume
              </motion.button>
            </div>
            
            {/* 3D Illustration */}
            <div className="lg:w-80 flex-shrink-0">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* 3D Developer Illustration */}
                <div className="relative w-64 h-64 mx-auto">
                  {/* Main container */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/30">
                    {/* Code blocks floating around */}
                    <div className="absolute top-4 right-4 w-12 h-8 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center">
                      HTML
                    </div>
                    <div className="absolute top-12 left-2 w-12 h-8 bg-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
                      CSS
                    </div>
                    <div className="absolute bottom-8 right-2 w-12 h-8 bg-yellow-500 rounded text-black text-xs font-bold flex items-center justify-center">
                      JS
                    </div>
                    
                    {/* Central developer icon */}
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;