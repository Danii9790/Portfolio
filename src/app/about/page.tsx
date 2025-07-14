"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaGithub, FaRobot, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStreamlit } from "react-icons/si";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.div
          className="space-y-4 text-center text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>
            I'm <span className="text-white font-semibold">Muhammad Daniyal</span>, a passionate developer exploring the world of{" "}
            <span className="text-white font-semibold">Agentic AI</span>, web technologies, and automation.
          </p>
          <p>
            I love building intelligent web applications that not only look great but also solve real-world problems using technologies like{" "}
            <span className="text-white font-semibold">Next.js</span>, <span className="text-white font-semibold">Python</span>, and{" "}
            <span className="text-white font-semibold">OpenAI SDK</span>.
          </p>
          <p>
            Currently, I'm diving deep into agent-based systems, AI assistants, and building tools that combine front-end excellence with smart AI logic.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-slate-900 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center text-white text-4xl">
            <FaReact title="React.js" />
            <SiNextdotjs title="Next.js" />
            <FaPython title="Python" />
            <SiTailwindcss title="Tailwind CSS" />
            <FaRobot title="OpenAI / Agents SDK" />
            <SiStreamlit title="Streamlit" />
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div
          className="text-center space-y-4 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white">My Mission</h3>
          <p>
            My goal is to build intelligent tools and digital experiences that are user-friendly, fast, and AI-powered.
            I'm working toward becoming a full-stack AI engineer who can combine design, logic, and automation for modern web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
