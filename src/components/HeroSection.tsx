import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-6 lg:p-8 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #FF6B9D 0%, #FF8A80 25%, #C44AFF 50%, #8E24AA 75%, #4A90E2 100%)"
          }}
        >
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20],
                  x: [-10, 10],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="flex flex-col xl:flex-row items-center gap-8 relative z-10">
            <div className="flex-1 max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Nishant Verma
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-medium"
              >
                Innovative <span className="text-yellow-300 font-semibold">Front-End Developer</span> with 4+ years of expertise in building
                responsive, high-performance web applications using <span className="text-blue-200 font-semibold">Angular</span>, <span className="text-green-200 font-semibold">Vue</span>, and <span className="text-cyan-200 font-semibold">React</span>.
                Passionate about merging user-centric design with cutting-edge technology to
                solve complex problems. Proven ability to lead cross-functional teams, mentor
                junior developers, and deliver scalable solutions aligned with Agile workflows.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
            
            {/* Enhanced 3D Illustration */}
            <div className="xl:w-72 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.3 },
                  scale: { duration: 0.8, delay: 0.3 },
                  y: {
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="relative"
              >
                {/* Main 3D Container */}
                <div className="relative w-64 h-64 mx-auto">
                  {/* Floating Tech Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {/* HTML Badge */}
                    <motion.div
                      className="absolute top-8 right-8 w-14 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white text-xs font-bold flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    >
                      HTML
                    </motion.div>
                    
                    {/* CSS Badge */}
                    <motion.div
                      className="absolute top-20 left-4 w-14 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white text-xs font-bold flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      CSS
                    </motion.div>
                    
                    {/* JavaScript Badge */}
                    <motion.div
                      className="absolute bottom-12 right-6 w-14 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black text-xs font-bold flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      JS
                    </motion.div>
                    
                    {/* TypeScript Badge */}
                    <motion.div
                      className="absolute bottom-20 left-8 w-14 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white text-xs font-bold flex items-center justify-center shadow-lg"
                      animate={{ y: [0, -9, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      TS
                    </motion.div>
                  </motion.div>
                  
                  {/* Central Developer Avatar */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotateY: [0, 10, -10, 0] 
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-7xl filter drop-shadow-lg"
                      >
                        👨‍💻
                      </motion.div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"></div>
                    </div>
                  </div>
                  
                  {/* Code symbols floating around */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-4 left-1/2 text-white/60 text-2xl">⚛️</div>
                    <div className="absolute right-4 top-1/2 text-white/60 text-2xl">🚀</div>
                    <div className="absolute bottom-4 left-1/2 text-white/60 text-2xl">💡</div>
                    <div className="absolute left-4 top-1/2 text-white/60 text-2xl">🎯</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced Background decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;