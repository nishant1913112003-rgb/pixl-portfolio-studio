import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-gradient max-w-4xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                AmirAli Rashidi
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Innovative Front-End Developer with 4+ years of expertise in building
                responsive, high-performance web applications using Angular, Vue, and React.
                Passionate about merging user-centric design with cutting-edge technology to
                solve complex problems. Proven ability to lead cross-functional teams, mentor
                junior developers, and deliver scalable solutions aligned with Agile workflows.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Download Resume
              </motion.button>
            </div>
            <div className="lg:w-80 flex-shrink-0">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;