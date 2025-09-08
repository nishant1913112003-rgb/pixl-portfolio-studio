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

          <div className="flex flex-col items-center text-center relative z-10 max-w-2xl mx-auto">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-32 h-32 rounded-full mb-6 bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-500 p-1 shadow-2xl"
            >
              <img 
                src="/lovable-uploads/8bc6467e-8b24-4d4f-bb75-b20e82a1e67e.png" 
                alt="Nishant Verma" 
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Nishant Verma
            </motion.h1>
            
            {/* About Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/95 text-base lg:text-lg leading-relaxed mb-8 font-medium"
            >
              Innovative <span className="text-yellow-300 font-semibold">Front-End Developer</span> with 4+ years of expertise in building
              responsive, high-performance web applications using <span className="text-blue-200 font-semibold">Angular</span>, <span className="text-green-200 font-semibold">Vue</span>, and <span className="text-cyan-200 font-semibold">React</span>.
              Passionate about merging user-centric design with cutting-edge technology to
              solve complex problems. Proven ability to lead cross-functional teams, mentor
              junior developers, and deliver scalable solutions aligned with Agile workflows.
            </motion.p>
            
            {/* Download Button */}
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