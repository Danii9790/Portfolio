"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPython,
  FaRobot,
} from "react-icons/fa";
import {
  SiFastapi,
  SiNextdotjs,
  SiStreamlit,
  SiOpenai,
  SiGoogle,
  SiMeta,
  SiX,
  SiLinkedin,
  SiElevenlabs,
  SiTypescript,
  SiTwilio
} from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const skillCategories = [
  {
    title: "Agentic AI & Frameworks",
    icon: FaRobot,
    skills: [
      { name: "OpenAI Agent SDK", icon: SiOpenai, color: "text-green-400" },
      { name: "OpenAI Agent Builder",icon : null, customIcon: "🤖", color: "text-green-400" },
      { name: "Model Context Protocol (MCP)", icon: null, customIcon: "🔧", color: "text-cyan-400" },
    ],
  },
  {
    title: "Automation & Orchestration",
    icon: null,
    customIcon: "⚡",
    skills: [
      { name: "n8n", icon: null, customIcon: "🔌", color: "text-indigo-400" },
      { name: "AI Automations", icon: null, customIcon: "🤖", color: "text-blue-400" },
      { name: "AI Chatbots", icon: null, customIcon: "💬", color: "text-purple-400" },
    ],
  },
  {
    title: "Web & Backend Development",
    icon: null,
    customIcon: "💻",
    skills: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-yellow-400" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Streamlit", icon: SiStreamlit, color: "text-red-400" },
    ],
  },
  {
    title: "Integrations & APIs",
    icon: null,
    customIcon: "🔌",
    skills: [
      { name: "Meta Could API", icon: SiMeta, color: "text-blue-500" },
      { name: "Twilio", icon: SiTwilio, color: "text-blue-500" },
      { name: "Gemini", icon: SiGoogle, color: "text-blue-400" },
      { name: "Google Sheets API", icon: SiGoogle, color: "text-green-400" },
      { name: "Gmail API", icon: BiLogoGmail, color: "text-red-400" },
      { name: "LinkedIn API", icon: SiLinkedin, color: "text-blue-600" },
    ],
  },
  {
    title: "Domains",
    icon: null,
    customIcon: "🎯",
    skills: [
      { name: "AI for Productivity", icon: null, customIcon: "⚡", color: "text-yellow-400" },
      { name: "Healthcare", icon: null, customIcon: "🏥", color: "text-red-400" },
      { name: "Communication", icon: null, customIcon: "💬", color: "text-blue-400" },
      { name: "Business", icon: null, customIcon: "💼", color: "text-purple-400" },
    ],
  },
];

export default function SkillsAndExpertise() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto page-transition">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            A comprehensive toolkit for building intelligent automation solutions and AI-powered applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon ? (
                  <category.icon className="text-3xl text-primary" />
                ) : (
                  <span className="text-3xl">{category.customIcon}</span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  const isActive = activeCategory === `${category.title}-${skill.name}`;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onClick={() => setActiveCategory(isActive ? null : `${category.title}-${skill.name}`)}
                      className={`relative glass rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer border-2 transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className={`text-3xl mb-2 ${skill.color}`}>
                        {SkillIcon ? (
                          <SkillIcon />
                        ) : (
                          <span className="text-3xl">{skill.customIcon}</span>
                        )}
                      </div>
                      <p
                        className={`text-xs md:text-sm font-medium text-center leading-tight break-words ${
                          isActive ? skill.color : "text-gray-300"
                        }`}
                        style={{ wordBreak: "break-word" }}
                      >
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
