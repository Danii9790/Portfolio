"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSanity, SiVercel, 
  SiRailway, SiHuggingface, SiTwilio 
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, desc: "A React framework for building fast, SEO-friendly, full-stack web apps." },
  { name: "Python", icon: <FaPython className="text-yellow-400" />, desc: "Versatile programming language for AI, web, data science, and automation." },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, desc: "A superset of JavaScript that adds static typing for better code quality." },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "JavaScript runtime for building scalable backend services." },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, desc: "Utility-first CSS framework for building modern, responsive designs." },
  { name: "Sanity CMS", icon: <SiSanity className="text-red-500" />, desc: "Headless CMS for managing and delivering structured content." },
  { name: "Vercel", icon: <SiVercel className="text-white" />, desc: "Cloud platform for deploying fast, serverless web apps." },
  { name: "Render", icon: <span className="text-purple-400 font-bold">R</span>, desc: "Cloud hosting service for apps, databases, and static sites." },
  { name: "Railway", icon: <SiRailway className="text-indigo-400" />, desc: "Cloud platform to deploy backends, databases, and services." },
  { name: "HuggingFace", icon: <SiHuggingface className="text-yellow-300" />, desc: "Platform for AI models, datasets, and ML research tools." },
  { name: "Agentic AI", icon: <GiArtificialIntelligence className="text-pink-400" />, desc: "Building autonomous AI agents for tasks and decision-making." },
  { name: "Chatbots", icon: <MdOutlineSmartToy className="text-orange-400" />, desc: "Conversational AI systems for automated communication." },
  { name: "Twilio", icon: <SiTwilio className="text-green-400" />, desc: "Cloud API for SMS, calls, WhatsApp, and other communications." },
];

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleClick = (skillName: string) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20 px-6 min-h-screen overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h1>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              onClick={() => handleClick(skill.name)}
              className={`rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border ${
                skill.name === "Next.js"
                  ? "border-blue-400 bg-gradient-to-br from-blue-900/40 to-transparent"
                  : "border-gray-700 hover:border-blue-400 bg-gray-800/50"
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className={`text-lg font-medium ${skill.name === "Next.js" ? "text-blue-300" : ""}`}>
                {skill.name}
              </p>

              {/* Caption */}
              <AnimatePresence>
                {activeSkill === skill.name && (
                  <motion.p
                    className="mt-3 text-sm text-gray-300 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

