"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaGithub, FaRobot, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStreamlit } from "react-icons/si";

const skills = [
  { name: "React.js", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "OpenAI SDK", icon: FaRobot, color: "text-green-400" },
  { name: "Streamlit", icon: SiStreamlit, color: "text-red-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white pt-24 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto space-y-16 page-transition">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Introduction Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 border border-white/10 card-hover"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I&apos;m <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Muhammad Daniyal</span>, a passionate developer exploring the world of{" "}
              <span className="text-white font-semibold">Agentic AI</span>, web technologies, and automation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 border border-white/10 card-hover"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I love building intelligent web applications that not only look great but also solve real-world problems using technologies like{" "}
              <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-yellow-400 font-semibold">Python</span>, and{" "}
              <span className="text-green-400 font-semibold">OpenAI SDK</span>.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 border border-white/10 card-hover"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Currently, I&apos;m diving deep into agent-based systems, AI assistants, and building tools that combine front-end excellence with smart AI logic.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-black/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group"
                >
                  <Icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 border border-white/10 text-center card-hover"
        >
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            My goal is to build intelligent tools and digital experiences that are user-friendly, fast, and AI-powered.
            I&apos;m working toward becoming a full-stack AI engineer who can combine design, logic, and automation for modern web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

