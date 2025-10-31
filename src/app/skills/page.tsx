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
  { 
    name: "Next.js", 
    icon: SiNextdotjs, 
    color: "text-white", 
    bgColor: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-400/50",
    desc: "A React framework for building fast, SEO-friendly, full-stack web apps." 
  },
  { 
    name: "Python", 
    icon: FaPython, 
    color: "text-yellow-400", 
    bgColor: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-400/50",
    desc: "Versatile programming language for AI, web, data science, and automation." 
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    color: "text-blue-400", 
    bgColor: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-400/50",
    desc: "A superset of JavaScript that adds static typing for better code quality." 
  },
  { 
    name: "Node.js", 
    icon: FaNodeJs, 
    color: "text-green-400", 
    bgColor: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-400/50",
    desc: "JavaScript runtime for building scalable backend services." 
  },
  { 
    name: "Tailwind CSS", 
    icon: SiTailwindcss, 
    color: "text-cyan-400", 
    bgColor: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-400/50",
    desc: "Utility-first CSS framework for building modern, responsive designs." 
  },
  { 
    name: "Sanity CMS", 
    icon: SiSanity, 
    color: "text-red-400", 
    bgColor: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-400/50",
    desc: "Headless CMS for managing and delivering structured content." 
  },
  { 
    name: "Vercel", 
    icon: SiVercel, 
    color: "text-white", 
    bgColor: "from-gray-500/20 to-gray-600/10",
    borderColor: "border-gray-400/50",
    desc: "Cloud platform for deploying fast, serverless web apps." 
  },
  { 
    name: "Render", 
    icon: null, 
    color: "text-purple-400", 
    bgColor: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-400/50",
    customIcon: <span className="text-4xl font-bold">R</span>,
    desc: "Cloud hosting service for apps, databases, and static sites." 
  },
  { 
    name: "Railway", 
    icon: SiRailway, 
    color: "text-indigo-400", 
    bgColor: "from-indigo-500/20 to-indigo-600/10",
    borderColor: "border-indigo-400/50",
    desc: "Cloud platform to deploy backends, databases, and services." 
  },
  { 
    name: "HuggingFace", 
    icon: SiHuggingface, 
    color: "text-yellow-300", 
    bgColor: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-400/50",
    desc: "Platform for AI models, datasets, and ML research tools." 
  },
  { 
    name: "Agentic AI", 
    icon: GiArtificialIntelligence, 
    color: "text-pink-400", 
    bgColor: "from-pink-500/20 to-pink-600/10",
    borderColor: "border-pink-400/50",
    desc: "Building autonomous AI agents for tasks and decision-making." 
  },
  { 
    name: "Chatbots", 
    icon: MdOutlineSmartToy, 
    color: "text-orange-400", 
    bgColor: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-400/50",
    desc: "Conversational AI systems for automated communication." 
  },
  { 
    name: "Twilio", 
    icon: SiTwilio, 
    color: "text-green-400", 
    bgColor: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-400/50",
    desc: "Cloud API for SMS, calls, WhatsApp, and other communications." 
  },
];

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleClick = (skillName: string) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white pt-24 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative z-10 page-transition">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isActive = activeSkill === skill.name;
            return (
              <motion.div
                key={skill.name}
                onClick={() => handleClick(skill.name)}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  show: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0, 
                    transition: { duration: 0.4 } 
                  },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative glass rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer border-2 transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-br ${skill.bgColor} ${skill.borderColor}`
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className={`text-4xl mb-3 ${skill.color}`}>
                  {Icon ? <Icon /> : skill.customIcon}
                </div>
                <p className={`text-sm font-medium text-center ${isActive ? skill.color : "text-gray-300"}`}>
                  {skill.name}
                </p>

                {/* Description Tooltip */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[200px] glass rounded-lg p-3 border border-white/20 shadow-xl z-10"
                    >
                      <p className="text-xs text-gray-300 text-center leading-relaxed">
                        {skill.desc}
                      </p>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-l border-t border-white/20 glass rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

