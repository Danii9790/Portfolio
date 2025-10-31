"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white pt-20 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[140px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 page-transition"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image with Glow */}
        <motion.div
          variants={scaleIn}
          className="relative w-48 h-48 sm:w-56 sm:h-56 mb-10 group cursor-pointer"
        >
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-full rounded-full border-4 border-white/20 group-hover:border-primary transition-all duration-300 overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/profile.png"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name with Gradient Animation */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
        >
          <span className="block text-gray-400 mb-3 text-xl sm:text-2xl md:text-3xl font-medium">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Muhammad Daniyal
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed"
        >
          I Build AI Agents | I Help Startups Turn Ideas Into Smart, Autonomous Web Apps That Scale 2x Faster
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex gap-6 mt-10 text-2xl"
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/daniyalxdev", color: "hover:text-blue-400" },
            { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&fs=1&to=daniyalashraf9790@gmail.com", color: "hover:text-red-400" },
            { icon: FaGithub, href: "https://github.com/Danii9790", color: "hover:text-gray-300" },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${color} transition-colors duration-300`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#about");
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-blue-500/50"
          >
            <span className="relative z-10">Learn More</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 glass border border-white/20 text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
