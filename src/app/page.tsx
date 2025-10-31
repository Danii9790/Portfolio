"use client";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import SkillsAndExpertise from "../components/SkillsAndExpertise";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SkillsAndExpertise />
      <ProjectsSection />
      <ContactSection />
    </motion.main>
  );
}