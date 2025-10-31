"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Data Science",
    institution: "Quest University Nawabshah",
    description: "Currently pursuing Data Science degree",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "IT Initiative Program",
    institution: "Governor Sindh IT Initiative",
    description: "Student in the Governor Sindh IT Initiative program",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full page-transition">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 border border-white/10 mb-12 card-hover"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            I&apos;m <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Muhammad Daniyal</span>, 
            a passionate Full Stack Developer and AI enthusiast. I&apos;m currently pursuing my studies in Data Science while building intelligent 
            automation solutions and AI-powered applications. My goal is to combine design, logic, and automation to create modern web applications 
            that solve real-world problems.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group glass rounded-2xl p-8 border border-white/10 card-hover"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {edu.title}
                  </h4>
                  <p className="text-lg font-semibold text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400">
                    {edu.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
